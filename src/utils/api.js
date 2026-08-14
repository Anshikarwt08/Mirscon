/*
 * Small helper used by every form on the site to talk to the SQL backend.
 *
 * During development, Vite proxies "/api" to the backend server
 * (see vite.config.js), so the forms work on both the dev server
 * and the production server without any changes.
 */

const API_BASE = "/api";

/**
 * POST a form payload as JSON to the backend.
 * Throws an Error with a user-friendly message when the request fails.
 */
export async function submitForm(endpoint, payload) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }

  return data;
}

/**
 * Read a File (e.g. a resume) as a base64 string so it can be sent
 * to the backend inside a JSON payload.
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () =>
      reject(new Error("Could not read the selected file."));
    reader.readAsDataURL(file);
  });
}

