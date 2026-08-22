/**
 * Formspree endpoint for the quote request form.
 *
 * Paste your endpoint here once you have it, e.g.
 *   export const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcdwxyz";
 *
 * You can also set VITE_FORMSPREE_ENDPOINT as an environment variable instead.
 * While this is empty the form validates and shows a friendly notice rather
 * than attempting a submission.
 */
export const FORMSPREE_ENDPOINT: string =
  (import.meta.env["VITE_FORMSPREE_ENDPOINT"] as string | undefined) ?? "";

/** Minimum seconds a genuine user needs to fill the form. */
export const MIN_FILL_SECONDS = 5;

/** Client-side rate limit: max submissions per window. */
export const RATE_LIMIT_MAX = 3;
export const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

const STORAGE_KEY = "kk_quote_submissions";

export function checkRateLimit(): { allowed: boolean; retryInMinutes: number } {
  if (typeof window === "undefined") return { allowed: true, retryInMinutes: 0 };
  let stamps: number[] = [];
  try {
    stamps = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]") as number[];
  } catch {
    stamps = [];
  }
  const now = Date.now();
  const recent = stamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    const oldest = Math.min(...recent);
    return {
      allowed: false,
      retryInMinutes: Math.max(1, Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 60000)),
    };
  }
  return { allowed: true, retryInMinutes: 0 };
}

export function recordSubmission() {
  if (typeof window === "undefined") return;
  let stamps: number[] = [];
  try {
    stamps = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]") as number[];
  } catch {
    stamps = [];
  }
  const now = Date.now();
  const recent = [...stamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS), now];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
}
