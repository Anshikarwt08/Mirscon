# Mirscon Website

React + Vite frontend with a zero-dependency Node.js backend that stores every
form submission in SQLite **and emails it to your inbox**.

## Quick start

```bash
npm install        # frontend dependencies (one time)
npm run dev        # Vite dev server for the website
npm run server     # backend API + email notifications (port 3001)
```

For production, build the frontend and let the backend serve it:

```bash
npm run build
npm run server     # serves the built site + API on http://localhost:3001
```

## Email notifications

Every submission from all four website forms is sent to an email account:

| Form                                   | Endpoint              |
| -------------------------------------- | --------------------- |
| Contact — "Let's Build the Right Solution" | `POST /api/contact`   |
| "Schedule a Consultation"              | `POST /api/consultation` |
| Careers — "Join Our Team" (resume attached to the email) | `POST /api/careers` |
| Get Started — "Tell Us About Your Requirements" | `POST /api/get-started` |

### Setup (2 minutes)

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Fill in your email details in `.env`:
   - `MAIL_TO` — the inbox that should receive all form submissions.
   - `SMTP_HOST` / `SMTP_PORT` — your provider's SMTP server.
   - `SMTP_USER` / `SMTP_PASS` — your SMTP login.
3. Restart the server: `npm run server`.

### Your provider: mail.mirscon.com

1. In your hosting control panel (e.g. cPanel → Email Accounts), create a
   mailbox for the website, e.g. `website@mirscon.com`.
2. Your `.env` then looks like:

```env
SMTP_HOST=mail.mirscon.com
SMTP_PORT=465                    # or 587 if 465 fails
SMTP_USER=website@mirscon.com    # the mailbox you created
SMTP_PASS=your-mailbox-password  # its normal password — no app password needed
MAIL_TO=info@mirscon.com         # the inbox that receives all form submissions
MAIL_FROM=website@mirscon.com    # keep the same as SMTP_USER
```

- `MAIL_TO` can be any inbox (even Gmail); add several recipients separated
  by commas.
- If you ever see "certificate verify failed" errors, add
  `SMTP_ALLOW_INSECURE=true` to `.env`.
- Using Gmail/Outlook/Zoho instead? The same settings pattern applies; for
  Gmail use `smtp.gmail.com` with a 16-character App Password.

### Notes

- If `MAIL_TO`/`SMTP_HOST` are not set, the server simply skips emailing —
  submissions are always saved to the database either way.
- Email failures never block or break a form submission; they are logged to
  the server console.
- The `.env` file is git-ignored. Never commit it.

## Viewing submissions

Submissions are stored in `server/mirscon.db` (SQLite) and can also be viewed
as JSON while the server is running:

```
GET /api/contact | /api/consultation | /api/careers | /api/get-started
GET /api/careers/:id/resume   → download an applicant's resume
```
