/*
 * Mirscon backend server — zero external dependencies.
 *
 * Uses only Node.js built-ins:
 *   - node:http    → HTTP server
 *   - node:sqlite  → SQL database (server/mirscon.db)
 *
 * API endpoints (one per website form):
 *   POST /api/contact        → Contact page form
 *   POST /api/consultation   → "Schedule a Consultation" form
 *   POST /api/careers        → Careers application form (with resume upload)
 *   POST /api/get-started    → Get Started requirements form
 *
 * Read-only endpoints to view saved submissions:
 *   GET  /api/health
 *   GET  /api/contact | /api/consultation | /api/careers | /api/get-started
 *   GET  /api/careers/:id/resume         → download an applicant's resume
 *
 * It also serves the production frontend from /dist when it exists,
 * so `npm run build` + `npm run server` runs the whole site on one port.
 */

import { createServer } from "node:http";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import db from "./db.js";
import { notifyFormSubmission } from "./mailer.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env (SMTP_HOST, MAIL_TO, etc.) when present — no dependencies needed.
try {
  process.loadEnvFile(join(__dirname, "..", ".env"));
} catch {
  // No .env file — environment variables can still come from the shell/host.
}

const PORT = process.env.PORT || 3001;
const UPLOADS_DIR = join(__dirname, "uploads");
const DIST_DIR = join(__dirname, "..", "dist");
const MAX_BODY_BYTES = 15 * 1024 * 1024; // 15 MB request cap (base64 resumes)
const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB decoded resume cap
const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

if (!existsSync(UPLOADS_DIR)) {
  mkdirSync(UPLOADS_DIR, { recursive: true });
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function httpError(statusCode, message) {
  return Object.assign(new Error(message), { statusCode });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(httpError(413, "Request body too large."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function readJson(req) {
  const raw = await readBody(req);
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    throw httpError(400, "Invalid JSON body.");
  }
}

function clean(value, maxLength = 5000) {
  if (value === undefined || value === null) return "";
  return String(value).trim().slice(0, maxLength);
}

function requireFields(data, fields) {
  for (const field of fields) {
    if (!clean(data[field])) {
      throw httpError(400, `Missing required field: ${field}`);
    }
  }
}

function requireEmail(email) {
  if (!EMAIL_RE.test(email)) {
    throw httpError(400, "Please provide a valid email address.");
  }
}

/* ------------------------------------------------------------------ */
/* Form handlers — one per website form                                */
/* ------------------------------------------------------------------ */

// Contact page form  →  POST /api/contact
async function handleContact(data) {
  requireFields(data, ["name", "email", "service", "message"]);

  const record = {
    name: clean(data.name, 200),
    company: clean(data.company, 200),
    email: clean(data.email, 200),
    phone: clean(data.phone, 50),
    service: clean(data.service, 200),
    message: clean(data.message),
  };
  requireEmail(record.email);

  const info = db
    .prepare(
      `INSERT INTO contacts (name, company, email, phone, service, message)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .run(
      record.name,
      record.company,
      record.email,
      record.phone,
      record.service,
      record.message
    );

  await notifyFormSubmission("contact form", [
    ["Name", record.name],
    ["Company", record.company],
    ["Email", record.email],
    ["Phone", record.phone],
    ["Service", record.service],
    ["Message", record.message],
  ]);

  return { id: Number(info.lastInsertRowid) };
}

// "Schedule a Consultation" form  →  POST /api/consultation
async function handleConsultation(data) {
  requireFields(data, ["name", "email", "phone", "service"]);

  const record = {
    name: clean(data.name, 200),
    email: clean(data.email, 200),
    phone: clean(data.phone, 50),
    company: clean(data.company, 200),
    service: clean(data.service, 200),
    preferredDate: clean(data.date, 20),
    preferredTime: clean(data.time, 20),
    message: clean(data.message),
  };
  requireEmail(record.email);

  const info = db
    .prepare(
      `INSERT INTO consultations
         (name, email, phone, company, service, preferred_date, preferred_time, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      record.name,
      record.email,
      record.phone,
      record.company,
      record.service,
      record.preferredDate,
      record.preferredTime,
      record.message
    );

  await notifyFormSubmission("consultation request", [
    ["Name", record.name],
    ["Email", record.email],
    ["Phone", record.phone],
    ["Company", record.company],
    ["Service", record.service],
    ["Preferred date", record.preferredDate],
    ["Preferred time", record.preferredTime],
    ["Message", record.message],
  ]);

  return { id: Number(info.lastInsertRowid) };
}

// Careers "Join Our Team" form (with resume upload)  →  POST /api/careers
async function handleCareers(data) {
  requireFields(data, ["name", "email", "phone"]);

  const record = {
    name: clean(data.name, 200),
    email: clean(data.email, 200),
    phone: clean(data.phone, 50),
    experience: clean(data.experience, 200),
    message: clean(data.message),
  };
  requireEmail(record.email);

  // The resume arrives as base64 JSON: { name, type, data }
  const resume = data.resume;
  if (!resume || !resume.data) {
    throw httpError(400, "Please attach your resume (PDF, DOC or DOCX).");
  }

  const originalName = clean(resume.name, 255) || "resume";
  const ext = extname(originalName).toLowerCase();
  if (!ALLOWED_RESUME_EXTENSIONS.includes(ext)) {
    throw httpError(400, "Resume must be a PDF, DOC or DOCX file.");
  }

  if (!/^[A-Za-z0-9+/=\r\n]+$/.test(String(resume.data))) {
    throw httpError(400, "Resume file could not be read. Please try again.");
  }
  const buffer = Buffer.from(String(resume.data), "base64");
  if (buffer.length === 0) {
    throw httpError(400, "Resume file appears to be empty.");
  }
  if (buffer.length > MAX_RESUME_BYTES) {
    throw httpError(413, "Resume must be 5 MB or smaller.");
  }

  const storedName = `${randomUUID()}${ext}`;
  writeFileSync(join(UPLOADS_DIR, storedName), buffer);

  const info = db
    .prepare(
      `INSERT INTO career_applications
         (name, email, phone, experience, resume_filename, resume_path, resume_mimetype, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      record.name,
      record.email,
      record.phone,
      record.experience,
      originalName,
      `uploads/${storedName}`,
      clean(resume.type, 100) || null,
      record.message
    );

  // Email the application to the team with the resume attached.
  await notifyFormSubmission(
    "career application",
    [
      ["Name", record.name],
      ["Email", record.email],
      ["Phone", record.phone],
      ["Experience", record.experience],
      ["Message", record.message],
      ["Resume", originalName],
    ],
    [
      {
        filename: originalName,
        path: join(UPLOADS_DIR, storedName),
        contentType: clean(resume.type, 100) || undefined,
      },
    ]
  );

  return { id: Number(info.lastInsertRowid) };
}

// Get Started "Tell Us About Your Requirements" form  →  POST /api/get-started
async function handleGetStarted(data) {
  requireFields(data, ["fullName", "email", "service", "requirements"]);

  const record = {
    fullName: clean(data.fullName, 200),
    email: clean(data.email, 200),
    company: clean(data.company, 200),
    phone: clean(data.phone, 50),
    service: clean(data.service, 200),
    requirements: clean(data.requirements),
  };
  requireEmail(record.email);

  const info = db
    .prepare(
      `INSERT INTO get_started_requests
         (full_name, email, company, phone, service, requirements)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .run(
      record.fullName,
      record.email,
      record.company,
      record.phone,
      record.service,
      record.requirements
    );

  await notifyFormSubmission("get started request", [
    ["Full Name", record.fullName],
    ["Email", record.email],
    ["Company", record.company],
    ["Phone", record.phone],
    ["Service", record.service],
    ["Requirements", record.requirements],
  ]);

  return { id: Number(info.lastInsertRowid) };
}

/* ------------------------------------------------------------------ */
/* Read-only endpoints for viewing saved submissions                   */
/* ------------------------------------------------------------------ */

const LIST_QUERIES = {
  "/api/contact": "SELECT * FROM contacts ORDER BY id DESC",
  "/api/consultation": "SELECT * FROM consultations ORDER BY id DESC",
  "/api/careers":
    "SELECT id, name, email, phone, experience, resume_filename, resume_mimetype, message, created_at FROM career_applications ORDER BY id DESC",
  "/api/get-started": "SELECT * FROM get_started_requests ORDER BY id DESC",
};

function serveResume(res, id) {
  const row = db
    .prepare(
      "SELECT resume_path, resume_filename, resume_mimetype FROM career_applications WHERE id = ?"
    )
    .get(id);

  if (!row || !row.resume_path) {
    return sendJson(res, 404, { success: false, error: "Resume not found." });
  }

  const filePath = normalize(join(__dirname, row.resume_path));
  if (!filePath.startsWith(UPLOADS_DIR + sep) || !existsSync(filePath)) {
    return sendJson(res, 404, {
      success: false,
      error: "Resume file is missing.",
    });
  }

  res.writeHead(200, {
    "Content-Type": row.resume_mimetype || "application/octet-stream",
    "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(
      row.resume_filename || "resume"
    )}`,
    "Access-Control-Allow-Origin": "*",
  });
  res.end(readFileSync(filePath));
}

/* ------------------------------------------------------------------ */
/* Static frontend (serves the production build from /dist if present) */
/* ------------------------------------------------------------------ */

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function serveStatic(res, pathname) {
  if (!existsSync(DIST_DIR)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end(
      "Frontend build not found. Run `npm run build` first, or use `npm run dev` for the Vite dev server."
    );
  }

  let filePath = normalize(
    join(DIST_DIR, pathname === "/" ? "index.html" : pathname)
  );

  // Prevent path traversal outside the build directory
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Forbidden");
  }

  // SPA fallback: unknown paths serve index.html
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(DIST_DIR, "index.html");
  }

  res.writeHead(200, {
    "Content-Type":
      MIME_TYPES[extname(filePath).toLowerCase()] || "application/octet-stream",
  });
  res.end(readFileSync(filePath));
}

/* ------------------------------------------------------------------ */
/* Server                                                              */
/* ------------------------------------------------------------------ */

const POST_ROUTES = {
  "/api/contact": handleContact,
  "/api/consultation": handleConsultation,
  "/api/careers": handleCareers,
  "/api/get-started": handleGetStarted,
};

const server = createServer(async (req, res) => {
  const { pathname } = new URL(
    req.url,
    `http://${req.headers.host || "localhost"}`
  );

  try {
    // CORS preflight
    if (req.method === "OPTIONS") {
      return sendJson(res, 200, {});
    }

    if (req.method === "GET" && pathname === "/api/health") {
      return sendJson(res, 200, { status: "ok" });
    }

    // Form submissions
    if (req.method === "POST" && POST_ROUTES[pathname]) {
      const data = await readJson(req);
      const result = await POST_ROUTES[pathname](data);
      return sendJson(res, 201, { success: true, ...result });
    }

    // View saved submissions
    if (req.method === "GET" && LIST_QUERIES[pathname]) {
      return sendJson(res, 200, {
        success: true,
        data: db.prepare(LIST_QUERIES[pathname]).all(),
      });
    }

    // Resume download: GET /api/careers/:id/resume
    const resumeMatch = pathname.match(/^\/api\/careers\/(\d+)\/resume$/);
    if (req.method === "GET" && resumeMatch) {
      return serveResume(res, Number(resumeMatch[1]));
    }

    if (pathname.startsWith("/api/")) {
      return sendJson(res, 404, { success: false, error: "Not found." });
    }

    // Everything else → static frontend
    if (req.method === "GET" || req.method === "HEAD") {
      return serveStatic(res, pathname);
    }

    sendJson(res, 405, { success: false, error: "Method not allowed." });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    if (statusCode >= 500) console.error(error);
    sendJson(res, statusCode, {
      success: false,
      error:
        statusCode >= 500
          ? "Something went wrong on the server. Please try again."
          : error.message,
    });
  }
});

server.listen(PORT, () => {
  console.log(`Mirscon server running at http://localhost:${PORT}`);
  console.log(`SQLite database: ${join(__dirname, "mirscon.db")}`);
});
