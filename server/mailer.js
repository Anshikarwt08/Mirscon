/*
 * Email notifications for form submissions — zero external dependencies.
 *
 * Uses only Node.js built-ins (node:net / node:tls) to speak SMTP directly,
 * so it works with Gmail, Outlook, Zoho, or any standard SMTP provider.
 *
 * Configuration (environment variables, see .env.example):
 *   MAIL_TO       → the inbox that receives every form submission (required)
 *   MAIL_FROM     → sender address (defaults to SMTP_USER)
 *   SMTP_HOST     → your provider's SMTP host, e.g. smtp.gmail.com (required)
 *   SMTP_PORT     → 465 (implicit TLS) or 587 (STARTTLS). Default: 587
 *   SMTP_SECURE   → "true" = TLS from the start (port 465),
 *                   "false" = plain connection, no STARTTLS (local testing),
 *                   unset   = auto: TLS on 465, STARTTLS upgrade otherwise
 *   SMTP_USER     → SMTP login username (usually your email address)
 *   SMTP_PASS     → SMTP password / app password
 *
 * If MAIL_TO or SMTP_HOST is missing, emails are simply skipped and the
 * server keeps working — submissions are still saved to the database.
 */

import { connect as netConnect } from "node:net";
import { connect as tlsConnect } from "node:tls";
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { randomUUID } from "node:crypto";

const SMTP_TIMEOUT_MS = 20000;

/* ------------------------------------------------------------------ */
/* Configuration                                                       */
/* ------------------------------------------------------------------ */

function mailConfig() {
  const port = Number(process.env.SMTP_PORT || 587);
  const secureEnv = String(process.env.SMTP_SECURE || "").toLowerCase();
  return {
    host: process.env.SMTP_HOST || "",
    port,
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    to: process.env.MAIL_TO || "",
    from: process.env.MAIL_FROM || process.env.SMTP_USER || "",
    // secure=true  → implicit TLS (port 465)
    // secure=false → plain socket, never upgrade (local testing only)
    // unset        → TLS on 465, otherwise try STARTTLS after EHLO
    secure:
      secureEnv === "true" || secureEnv === "1"
        ? true
        : secureEnv === "false" || secureEnv === "0"
          ? false
          : port === 465
            ? true
            : "starttls",
    // Set SMTP_ALLOW_INSECURE=true only if the server uses a self-signed
    // certificate and you see TLS "certificate verify failed" errors.
    allowInsecure: ["true", "1"].includes(
      String(process.env.SMTP_ALLOW_INSECURE || "").toLowerCase()
    ),
  };
}

export function isMailEnabled() {
  const cfg = mailConfig();
  return Boolean(cfg.host && cfg.to);
}

/* ------------------------------------------------------------------ */
/* Minimal SMTP client                                                 */
/* ------------------------------------------------------------------ */

function smtpError(message) {
  return new Error(`SMTP error: ${message}`);
}

/** Reads one (possibly multi-line) SMTP reply. Returns { code, text }. */
function makeReplyReader(socket) {
  let buffer = "";
  const waiters = [];

  socket.on("data", (chunk) => {
    buffer += chunk.toString("utf8");
    // A reply is complete when a line like "250 OK" (code + space) exists.
    while (waiters.length > 0) {
      const match = buffer.match(/^\d{3} .*?(\r\n|$)/m);
      if (!match) break;
      const end = buffer.indexOf(match[0]) + match[0].length;
      const text = buffer.slice(0, end).trimEnd();
      buffer = buffer.slice(end);
      const code = Number(text.slice(0, 3));
      waiters.shift()({ code, text });
    }
  });

  socket.on("error", (err) => {
    while (waiters.length > 0) {
      waiters.shift()(null, err);
    }
  });

  return () =>
    new Promise((resolve, reject) => {
      waiters.push((reply, err) => (err ? reject(err) : resolve(reply)));
    });
}

function expect(reply, ...codes) {
  if (!codes.includes(reply.code)) {
    throw smtpError(`expected ${codes.join("/")}, got: ${reply.text}`);
  }
  return reply;
}

function writeLine(socket, line) {
  socket.write(line + "\r\n");
}

/** Opens an SMTP session, runs `handler`, and always closes cleanly. */
async function withSmtpSession(cfg, handler) {
  let socket =
    cfg.secure === true
      ? tlsConnect({
          host: cfg.host,
          port: cfg.port,
          servername: cfg.host,
          rejectUnauthorized: !cfg.allowInsecure,
        })
      : netConnect({ host: cfg.host, port: cfg.port });

  socket.setTimeout(SMTP_TIMEOUT_MS, () => {
    socket.destroy(new Error("SMTP connection timed out."));
  });

  await new Promise((resolve, reject) => {
    socket.once(cfg.secure === true ? "secureConnect" : "connect", resolve);
    socket.once("error", reject);
  });

  const readReply = makeReplyReader(socket);
  const send = (line) => writeLine(socket, line);

  try {
    expect(await readReply(), 220); // server greeting

    const ehlo = async () => {
      send(`EHLO mirscon-website`);
      return expect(await readReply(), 250);
    };

    let caps = (await ehlo()).text.toUpperCase();

    // Upgrade to TLS when the server offers STARTTLS (port 587 style).
    if (cfg.secure === "starttls" && caps.includes("STARTTLS")) {
      send("STARTTLS");
      expect(await readReply(), 220);
      await new Promise((resolve, reject) => {
        socket = tlsConnect(
          {
            socket,
            host: cfg.host,
            servername: cfg.host,
            rejectUnauthorized: !cfg.allowInsecure,
          },
          resolve
        );
        socket.once("error", reject);
      });
      caps = (await ehlo()).text.toUpperCase();
    }

    // Authenticate when credentials are configured.
    if (cfg.user && cfg.pass) {
      send("AUTH LOGIN");
      expect(await readReply(), 334);
      send(Buffer.from(cfg.user, "utf8").toString("base64"));
      expect(await readReply(), 334);
      send(Buffer.from(cfg.pass, "utf8").toString("base64"));
      expect(await readReply(), 235);
    }

    await handler({ send, readReply });

    send("QUIT");
  } finally {
    socket.destroy();
  }
}

/* ------------------------------------------------------------------ */
/* MIME message building                                               */
/* ------------------------------------------------------------------ */

const CRLF = "\r\n";

function encodeHeaderValue(value) {
  // RFC 2047: base64-encode the header only when non-ASCII is present.
  return /[^\x20-\x7E]/.test(value)
    ? `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`
    : value;
}

function base64Wrap(input) {
  const b64 = Buffer.isBuffer(input)
    ? input.toString("base64")
    : Buffer.from(String(input), "utf8").toString("base64");
  return b64.replace(/.{1,76}/g, "$&" + CRLF).trimEnd();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Dot-stuff and normalize line endings for the SMTP DATA phase. */
function stuffDots(message) {
  return message
    .replace(/\r?\n/g, CRLF)
    .split(CRLF)
    .map((line) => (line.startsWith(".") ? "." + line : line))
    .join(CRLF);
}

function buildMessage({ from, to, subject, text, html, attachments = [] }) {
  const headers = [
    `From: ${encodeHeaderValue(from)}`,
    `To: ${to}`,
    `Subject: ${encodeHeaderValue(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${randomUUID()}@mirscon-website>`,
    `MIME-Version: 1.0`,
  ];

  const altBoundary = `----mirscon-alt-${randomUUID()}`;
  const bodyParts = [
    `--${altBoundary}`,
    `Content-Type: text/plain; charset=utf-8`,
    `Content-Transfer-Encoding: base64`,
    ``,
    base64Wrap(text),
  ];

  if (html) {
    bodyParts.push(
      `--${altBoundary}`,
      `Content-Type: text/html; charset=utf-8`,
      `Content-Transfer-Encoding: base64`,
      ``,
      base64Wrap(html)
    );
  }
  bodyParts.push(`--${altBoundary}--`);

  const alternative = [
    `Content-Type: multipart/alternative; boundary="${altBoundary}"`,
    ``,
    ...bodyParts,
  ].join(CRLF);

  if (attachments.length === 0) {
    return headers.concat([alternative.split(CRLF)[0], ``, ...bodyParts]).join(CRLF);
  }

  const mixBoundary = `----mirscon-mix-${randomUUID()}`;
  const parts = [
    `Content-Type: multipart/mixed; boundary="${mixBoundary}"`,
    ``,
    `--${mixBoundary}`,
    alternative,
  ];

  for (const attachment of attachments) {
    const content = attachment.path
      ? readFileSync(attachment.path)
      : attachment.content;
    const filename = basename(
      attachment.filename || attachment.path || "attachment"
    );
    parts.push(
      `--${mixBoundary}`,
      `Content-Type: ${attachment.contentType || "application/octet-stream"}; name="${filename}"`,
      `Content-Transfer-Encoding: base64`,
      `Content-Disposition: attachment; filename="${filename}"`,
      ``,
      base64Wrap(content)
    );
  }
  parts.push(`--${mixBoundary}--`);

  return headers.concat(parts).join(CRLF);
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Sends one email. Returns true on success, false when mail is not
 * configured. Throws on SMTP/IO failure so callers can log it.
 */
export async function sendMail({ subject, text, html, attachments }) {
  const cfg = mailConfig();
  if (!cfg.host || !cfg.to) return false;

  const message = buildMessage({
    from: cfg.from,
    to: cfg.to,
    subject,
    text,
    html,
    attachments,
  });

  await withSmtpSession(cfg, async ({ send, readReply }) => {
    send(`MAIL FROM:<${cfg.from}>`);
    expect(await readReply(), 250);
    for (const recipient of cfg.to.split(",").map((r) => r.trim())) {
      send(`RCPT TO:<${recipient}>`);
      expect(await readReply(), 250, 251);
    }
    send("DATA");
    expect(await readReply(), 354);
    socket_write_data(send, message);
    expect(await readReply(), 250);
  });

  return true;
}

// DATA payload must end with <CRLF>.<CRLF>
function socket_write_data(send, message) {
  send(stuffDots(message) + CRLF + ".");
}

/**
 * Sends the "new form submission" notification email.
 * Never throws — a mail failure must never break a form submission.
 *
 * @param {string} formTitle  e.g. "Contact form"
 * @param {Array<[string, string]>} fields  label/value pairs to include
 * @param {Array} attachments  optional [{ filename, path, contentType }]
 */
export async function notifyFormSubmission(formTitle, fields, attachments) {
  if (!isMailEnabled()) {
    console.warn(
      `[mail] SMTP not configured — skipping "${formTitle}" notification email. ` +
        `Set MAIL_TO and SMTP_HOST (see .env.example).`
    );
    return;
  }

  const visible = fields.filter(([, value]) => value);
  const submitter =
    fields.find(([label]) => label === "Name" || label === "Full Name")?.[1] ||
    fields.find(([label]) => label === "Email")?.[1] ||
    "a visitor";

  const text =
    `New ${formTitle} submission on the Mirscon website` +
    "\n\n" +
    visible.map(([label, value]) => `${label}: ${value}`).join("\n") +
    "\n\n— Mirscon website";

  const rows = visible
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e2e2;font-weight:600;white-space:nowrap">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 12px;border:1px solid #e2e2e2">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto">` +
    `<h2 style="background:#0b3d91;color:#ffffff;padding:14px 18px;margin:0">New ${escapeHtml(formTitle)} submission</h2>` +
    `<table style="border-collapse:collapse;width:100%;margin-top:12px">${rows}</table>` +
    `<p style="color:#777;font-size:12px;margin-top:16px">Sent automatically by the Mirscon website.</p>` +
    `</div>`;

  try {
    await sendMail({
      subject: `[Mirscon] New ${formTitle} submission — ${submitter}`,
      text,
      html,
      attachments,
    });
    console.log(`[mail] "${formTitle}" notification sent to ${mailConfig().to}`);
  } catch (error) {
    console.error(
      `[mail] Failed to send "${formTitle}" notification: ${error.message}`
    );
  }
}
