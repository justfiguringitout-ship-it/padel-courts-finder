/** Request helpers shared by the claim and owner API routes. */

export const ALLOWED_ORIGINS = ["https://www.padelcourtsfinder.com", "https://padelcourtsfinder.com"];
const LOCAL_ORIGIN_RE = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;
export const SITE_URL = "https://www.padelcourtsfinder.com";

export function originAllowed(origin: string): boolean {
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Local `next start` / `next dev` only; Vercel always sets VERCEL=1.
  return !process.env.VERCEL && LOCAL_ORIGIN_RE.test(origin);
}

/** The validated origin of a POST, or null. */
export function requestOrigin(req: Request): string | null {
  const origin = req.headers.get("origin") ?? "";
  return originAllowed(origin) ? origin : null;
}

/** Base URL for links we email: the site the request came from (already validated), else production. */
export function linkBase(origin: string | null): string {
  if (origin && originAllowed(origin)) return origin === "https://padelcourtsfinder.com" ? SITE_URL : origin;
  return SITE_URL;
}

export function isLocalOrigin(origin: string | null): boolean {
  return !!origin && LOCAL_ORIGIN_RE.test(origin);
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for") ?? "";
  const first = fwd.split(",")[0]?.trim();
  return first || req.headers.get("x-real-ip") || "unknown";
}

/**
 * In-memory sliding-window limiter. Serverless instances are short-lived, so
 * this is a speed bump; the database counts back it up for emails.
 */
export class RateLimiter {
  private hits = new Map<string, number[]>();
  constructor(
    private limit: number,
    private windowMs: number
  ) {}

  /** Records a hit and returns false when over the limit. */
  take(key: string, now = Date.now()): boolean {
    const list = (this.hits.get(key) ?? []).filter((t) => now - t < this.windowMs);
    if (list.length >= this.limit) {
      this.hits.set(key, list);
      return false;
    }
    list.push(now);
    this.hits.set(key, list);
    if (this.hits.size > 5000) {
      for (const [k, v] of this.hits) if (!v.some((t) => now - t < this.windowMs)) this.hits.delete(k);
    }
    return true;
  }
}
