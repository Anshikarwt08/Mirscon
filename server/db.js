import { DatabaseSync } from "node:sqlite";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// All form submissions are stored in this single SQLite database file.
// No external database server or extra dependencies are required.
const db = new DatabaseSync(join(__dirname, "mirscon.db"));

db.exec(`
  -- Contact page form ("Let's Build the Right Solution for Your Business")
  CREATE TABLE IF NOT EXISTS contacts (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    company     TEXT,
    email       TEXT NOT NULL,
    phone       TEXT,
    service     TEXT NOT NULL,
    message     TEXT NOT NULL,
    created_at  TEXT NOT NULL DEFAULT (datetime('now'))
  );

  -- "Schedule a Consultation" form
  CREATE TABLE IF NOT EXISTS consultations (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT NOT NULL,
    email           TEXT NOT NULL,
    phone           TEXT NOT NULL,
    company         TEXT,
    service         TEXT NOT NULL,
    preferred_date  TEXT,
    preferred_time  TEXT,
    message         TEXT,
    created_at      TEXT NOT NULL DEFAULT (datetime('now'))
  );

  -- Careers page "Join Our Team" application form (resume is stored on disk,
  -- its file name/path is stored here)
  CREATE TABLE IF NOT EXISTS career_applications (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    name             TEXT NOT NULL,
    email            TEXT NOT NULL,
    phone            TEXT NOT NULL,
    experience       TEXT,
    resume_filename  TEXT,
    resume_path      TEXT,
    resume_mimetype  TEXT,
    message          TEXT,
    created_at       TEXT NOT NULL DEFAULT (datetime('now'))
  );

  -- Get Started page "Tell Us About Your Requirements" form
  CREATE TABLE IF NOT EXISTS get_started_requests (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name     TEXT NOT NULL,
    email         TEXT NOT NULL,
    company       TEXT,
    phone         TEXT,
    service       TEXT NOT NULL,
    requirements  TEXT NOT NULL,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

export default db;
