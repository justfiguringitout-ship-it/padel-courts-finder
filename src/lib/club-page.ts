/**
 * Display helpers for the club page (src/app/courts/[slug]/page.tsx).
 *
 * Everything here reads the raw club record honestly: nothing is estimated or
 * defaulted. The adapter fills missing or unparseable opening hours with a
 * generic 07:00-22:00, so the page reads the raw strings instead and shows
 * "not published" when there is nothing real to show.
 */

import type { AdaptedCourt } from "@/lib/court-adapter";
import { getClubPlayerPrice } from "@/lib/player-price";

export const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
const DAY_KEYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;

/** One day of opening hours, in minutes after local midnight. */
export type DayHours =
  | { day: string; kind: "range"; open: number; close: number; label: string }
  | { day: string; kind: "allday"; label: string }
  | { day: string; kind: "closed"; label: string }
  | { day: string; kind: "text"; label: string }
  | { day: string; kind: "unknown"; label: string };

/** Data strings occasionally carry em dashes; the page never shows one. */
export function noEmDash(text: string): string {
  return text.replace(/\s+—\s+/g, ", ").replace(/—/g, "-");
}

function toMinutes(h: number, m: number, ampm?: string): number | null {
  if (m > 59) return null;
  let hour = h;
  if (ampm) {
    const pm = ampm.toLowerCase() === "pm";
    if (hour < 1 || hour > 12) return null;
    if (hour === 12) hour = pm ? 12 : 0;
    else if (pm) hour += 12;
  }
  if (hour > 24) return null;
  return hour * 60 + m;
}

/** "7 AM", "11:30 PM", "Noon", "Midnight" */
export function formatClock(minutes: number): string {
  const m = ((minutes % 1440) + 1440) % 1440;
  if (m === 0) return "Midnight";
  if (m === 720) return "Noon";
  const h = Math.floor(m / 60);
  const min = m % 60;
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return min ? `${h12}:${String(min).padStart(2, "0")} ${period}` : `${h12} ${period}`;
}

const RANGE_RE =
  /^~?\s*(\d{1,2})(?:(?::|h)(\d{2})?)?\s*(am|pm)?\s*[-–]\s*(\d{1,2})(?:(?::|h)(\d{2})?)?\s*(am|pm)?\s*$/i;

export function parseDayHours(day: string, raw: string | undefined): DayHours {
  const value = (raw ?? "").trim();
  if (!value || /^(tba|tbd|n\/a|unknown)$/i.test(value)) return { day, kind: "unknown", label: "" };
  if (/^closed$/i.test(value)) return { day, kind: "closed", label: "Closed" };
  if (/^(24h|24\/7|0h-24h|00:00-24:00|open 24 hours)$/i.test(value)) {
    return { day, kind: "allday", label: "Open 24 hours" };
  }
  const m = value.match(RANGE_RE);
  if (m) {
    const open = toMinutes(Number(m[1]), Number(m[2] || 0), m[3]);
    let close = toMinutes(Number(m[4]), Number(m[5] || 0), m[6]);
    if (open !== null && close !== null) {
      if (close === 0) close = 1440; // "7h-0h" closes at midnight
      else if (close <= open) close += 1440; // late session past midnight ("18h-2h")
      if (open === 0 && close === 1440) return { day, kind: "allday", label: "Open 24 hours" };
      return { day, kind: "range", open, close, label: `${formatClock(open)} to ${formatClock(close)}` };
    }
  }
  if (/^varies$/i.test(value)) return { day, kind: "text", label: "Varies" };
  // Free text from research ("weekday evenings 5-9pm"): show it, cleaned up.
  const cleaned = noEmDash(value.replace(/[\[\]]+/g, "").trim());
  if (cleaned.length < 4) return { day, kind: "unknown", label: "" };
  return { day, kind: "text", label: cleaned.charAt(0).toUpperCase() + cleaned.slice(1) };
}

export interface ClubHours {
  days: DayHours[];
  /** true when at least one day carries real, published information */
  published: boolean;
  /** "Every day, 7 AM to 11 PM" style one-liner when the week is regular */
  summary?: string;
}

export function getClubHours(court: AdaptedCourt): ClubHours {
  const raw = court._original?.openingHours;
  const days: DayHours[] = WEEK_DAYS.map((day, i) =>
    parseDayHours(day, raw ? (raw as unknown as Record<string, string>)[DAY_KEYS[i]] : undefined)
  );
  const published = days.some((d) => d.kind !== "unknown");

  let summary: string | undefined;
  const same = (list: DayHours[]) => list.every((d) => d.kind === list[0].kind && d.label === list[0].label);
  if (published) {
    if (same(days) && days[0].kind !== "unknown") {
      const l = days[0].label;
      summary = `Every day, ${days[0].kind === "range" ? l : l.charAt(0).toLowerCase() + l.slice(1)}`;
    } else {
      const wk = days.slice(0, 5);
      const we = days.slice(5);
      if (same(wk) && same(we) && wk[0].kind === "range" && we[0].kind === "range") {
        summary = `Weekdays ${wk[0].label} · Weekends ${we[0].label}`;
      }
    }
  }
  return { days, published, summary };
}

/**
 * IANA time zone at the club, or undefined when the state straddles zones and
 * we cannot place the club reliably. Used only for the client-side "Open now".
 */
export function getClubTimeZone(court: AdaptedCourt): string | undefined {
  const st = court.address.stateCode;
  const lat = court.coordinates?.latitude;
  const lng = court.coordinates?.longitude;
  const hasLng = typeof lng === "number" && Number.isFinite(lng);
  const zones: Record<string, string> = {
    CT: "America/New_York", DC: "America/New_York", DE: "America/New_York", GA: "America/New_York",
    MA: "America/New_York", MD: "America/New_York", ME: "America/New_York", NC: "America/New_York",
    NH: "America/New_York", NJ: "America/New_York", NY: "America/New_York", OH: "America/New_York",
    PA: "America/New_York", RI: "America/New_York", SC: "America/New_York", VA: "America/New_York",
    VT: "America/New_York", WV: "America/New_York", MI: "America/Detroit",
    AL: "America/Chicago", AR: "America/Chicago", IA: "America/Chicago", IL: "America/Chicago",
    LA: "America/Chicago", MN: "America/Chicago", MO: "America/Chicago", MS: "America/Chicago",
    OK: "America/Chicago", WI: "America/Chicago", KS: "America/Chicago",
    CO: "America/Denver", MT: "America/Denver", NM: "America/Denver", UT: "America/Denver", WY: "America/Denver",
    AZ: "America/Phoenix",
    CA: "America/Los_Angeles", NV: "America/Los_Angeles", WA: "America/Los_Angeles", OR: "America/Los_Angeles",
    HI: "Pacific/Honolulu", AK: "America/Anchorage", PR: "America/Puerto_Rico",
  };
  // States split between two zones: decide by position, or give up.
  if (st === "FL") return hasLng ? (lng! < -85.0 ? "America/Chicago" : "America/New_York") : undefined;
  if (st === "TX") return hasLng ? (lng! < -104.9 ? "America/Denver" : "America/Chicago") : undefined;
  if (st === "TN") return hasLng ? (lng! < -85.6 ? "America/Chicago" : "America/New_York") : undefined;
  if (st === "KY") return hasLng ? (lng! < -86.0 ? "America/Chicago" : "America/New_York") : undefined;
  if (st === "IN") return hasLng ? (lng! < -86.9 && (lat ?? 0) > 40.9 ? "America/Chicago" : "America/Indiana/Indianapolis") : undefined;
  if (st === "ID") return typeof lat === "number" ? (lat > 45.5 ? "America/Los_Angeles" : "America/Boise") : undefined;
  return zones[st];
}

export function timeZoneLabel(tz: string | undefined): string | undefined {
  if (!tz) return undefined;
  if (tz === "America/New_York" || tz === "America/Detroit" || tz.startsWith("America/Indiana")) return "Eastern time";
  if (tz === "America/Chicago") return "Central time";
  if (tz === "America/Denver" || tz === "America/Boise") return "Mountain time";
  if (tz === "America/Phoenix") return "Arizona time";
  if (tz === "America/Los_Angeles") return "Pacific time";
  if (tz === "America/Puerto_Rico") return "Atlantic time";
  if (tz === "Pacific/Honolulu") return "Hawaii time";
  if (tz === "America/Anchorage") return "Alaska time";
  return undefined;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2026-10-08" -> "October 2026" (no time-zone drift: parsed as a plain date) */
export function formatMonthYear(date: string | undefined): string | undefined {
  if (!date) return undefined;
  const m = date.match(/^(\d{4})-(\d{2})/);
  if (!m) return undefined;
  const month = Number(m[2]);
  if (month < 1 || month > 12) return undefined;
  return `${MONTHS[month - 1]} ${m[1]}`;
}

export interface TrustStamp {
  kind: "verified" | "updated";
  text: string;
  date: string;
}

/** Verified stamp only when a person checked the record; otherwise a neutral date. */
export function getTrustStamp(court: AdaptedCourt): TrustStamp | undefined {
  const raw = court._original;
  const when = formatMonthYear(raw?.verificationDate);
  if (!when || !raw?.verificationDate) return undefined;
  if (raw.verified) return { kind: "verified", text: `Checked by a person · ${when}`, date: raw.verificationDate };
  return { kind: "updated", text: `Last updated ${when}`, date: raw.verificationDate };
}

export interface PriceSummary {
  /** "$90" or "from $80" */
  perCourtHour: string;
  /** "$23" or "from $20" (court-hour price split four ways, doubles) */
  perPlayer: string;
  /** Set when only a peak rate was published. */
  basisNote?: string;
}

/**
 * Price facts for the club page, from the same parser the city and state pages
 * use (src/lib/player-price.ts), so a club never shows two different prices.
 * Shows the lowest standard rate only, never a range built from rounded figures.
 * Undefined when the club does not publish a price we can read with confidence.
 */
export function getPriceSummary(court: AdaptedCourt): PriceSummary | undefined {
  const p = getClubPlayerPrice(court);
  if (!p) return undefined;
  const from = p.isFrom ? "from " : "";
  const courtHour = p.source === "court" && p.courtHourly ? p.courtHourly : p.perPlayer * 4;
  return {
    perCourtHour: `${from}$${courtHour}`,
    perPlayer: `${from}$${p.perPlayer}`,
    basisNote: p.basis === "peak" ? "Peak rate. Off-peak times may cost less." : undefined,
  };
}

const PLATFORMS: Array<[RegExp, string]> = [
  [/playtomic/i, "Playtomic"],
  [/play\s?by\s?point/i, "PlayByPoint"],
  [/court\s?reserve/i, "CourtReserve"],
  [/matchi/i, "MATCHi"],
  [/clubspark/i, "ClubSpark"],
  [/padel\s?mates/i, "Padel Mates"],
  [/playbycourt/i, "PlayByCourt"],
  [/podplay/i, "PodPlay"],
];

/** Booking app named in the researched text, if any ("courts booked through Playtomic"). */
export function getBookingPlatform(court: AdaptedCourt): string | undefined {
  const text = `${court.pricingText ?? ""} ${court.description ?? ""}`;
  for (const [re, name] of PLATFORMS) if (re.test(text)) return name;
  return undefined;
}

export type CourtSetting = "indoor" | "outdoor" | "both" | "unknown";

export interface CourtLayout {
  total: number;
  setting: CourtSetting;
  /** Known split; both null when the split is not known */
  indoor: number | null;
  outdoor: number | null;
}

export function getCourtLayout(court: AdaptedCourt): CourtLayout {
  const total = court.facility.totalCourts || 0;
  const type = court._original?.courtType;
  const setting: CourtSetting = type === "indoor" || type === "outdoor" || type === "both" ? type : "unknown";
  if (!total) return { total: 0, setting, indoor: null, outdoor: null };
  if (setting === "indoor") return { total, setting, indoor: total, outdoor: 0 };
  if (setting === "outdoor") return { total, setting, indoor: 0, outdoor: total };
  if (setting === "both") {
    const i = court.facility.indoorCourts;
    const o = court.facility.outdoorCourts;
    if (i + o === total && i > 0 && o > 0) return { total, setting, indoor: i, outdoor: o };
    return { total, setting, indoor: null, outdoor: null };
  }
  return { total, setting, indoor: null, outdoor: null };
}

export function courtsCaption(layout: CourtLayout, planned: boolean): string {
  if (!layout.total) return "Court count not confirmed";
  const n = `${layout.total} ${layout.total === 1 ? "court" : "courts"}${planned ? " planned" : ""}`;
  if (layout.indoor !== null && layout.outdoor !== null && layout.indoor > 0 && layout.outdoor > 0) {
    return `${n} · ${layout.indoor} indoor, ${layout.outdoor} outdoor`;
  }
  if (layout.setting === "indoor") return `${n} · ${layout.total === 1 ? "indoor" : "all indoor"}`;
  if (layout.setting === "outdoor") return `${n} · ${layout.total === 1 ? "outdoor" : "all outdoor"}`;
  if (layout.setting === "both") return `${n} · indoor and outdoor`;
  return n;
}
