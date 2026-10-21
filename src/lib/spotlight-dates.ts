/**
 * Date rules for Club Spotlights, shared by the server (pages, API, report)
 * and the browser (pinned cards hide themselves once the window closes, even
 * if the static page was built earlier). No imports, so the client bundle
 * stays small.
 *
 * All days are YYYY-MM-DD in America/New_York, where Dito works.
 */

export interface SpotlightWindow {
  status: "draft" | "live";
  publishDate: string;
  pinnedUntil: string;
}

export const SPOTLIGHT_TZ = "America/New_York";
export const PINNED_DAYS = 30;

/** Today's date in New York as YYYY-MM-DD. */
export function spotlightDay(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: SPOTLIGHT_TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** Live: published, and its publish day has arrived. */
export function isSpotlightLive(s: SpotlightWindow, day: string = spotlightDay()): boolean {
  return s.status === "live" && day >= s.publishDate;
}

/** Pinned: live and before pinnedUntil (exclusive), so 30 calendar days from publishDate. */
export function isSpotlightPinned(s: SpotlightWindow, day: string = spotlightDay()): boolean {
  return isSpotlightLive(s, day) && day < s.pinnedUntil;
}

/** publishDate + n days, as YYYY-MM-DD. */
export function addDays(day: string, n: number): string {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** "November 2, 2026" */
export function formatSpotlightDay(day: string): string {
  return new Date(`${day}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
