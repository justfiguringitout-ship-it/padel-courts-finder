/**
 * Data for the "Can I play tonight?" block on city pages.
 *
 * Built at build time from the same helpers the club page uses (hours parser,
 * time zone, court layout, per-player price), so the block never disagrees
 * with a club's own page. Everything here is time-independent; the browser
 * works out open/closed from `days` in the club's own time zone.
 */

import type { AdaptedCourt } from "@/lib/court-adapter";
import {
  getClubHours,
  getClubTimeZone,
  getCourtLayout,
  type CourtSetting,
  type DayHours,
} from "@/lib/club-page";
import { formatPlayerPrice, getClubPlayerPrice } from "@/lib/player-price";

export interface TonightClub {
  slug: string;
  name: string;
  /** Parsed weekly hours (Monday first). Only set when at least one day has clock times. */
  days?: DayHours[];
  /** "Every day, 7 AM to 11 PM" style summary, shown before the browser knows the time */
  summary?: string;
  timeZone?: string;
  setting: CourtSetting;
  /** Outdoor courts whose listing mentions lights. Indoor courts are always playable at night. */
  lit: boolean;
  /** "$20" / "from $15" per player per hour */
  price?: string;
  pricePeak?: boolean;
  membersOnly: boolean;
  action?: { href: string; label: "Book" | "Website" };
}

export interface TonightData {
  clubs: TonightClub[];
  /** Clubs with no clock-time hours we can read */
  noHours: TonightClub[];
  /** Average of the clubs' coordinates, for the weather forecast */
  center?: { lat: number; lng: number };
  timeZone?: string;
  hasIndoor: boolean;
  hasOutdoor: boolean;
}

const LIGHT_WORD = /\b(?:LED[- ]?)?(?:lit|lighted|lighting|lights|floodlit|floodlights?)\b/i;
const OTHER_SPORT = /tennis|pickle\s?ball|squash|platform/i;

/**
 * True only when the listing itself says the courts have lights: an amenity
 * like "LED lighting", or a description sentence such as "four lit outdoor
 * courts". Sentences about lit tennis courts, light therapy, or "no lights"
 * do not count.
 */
export function hasLightingEvidence(court: AdaptedCourt): boolean {
  const sentences = (court.description || "").split(/(?<=[.!?])\s+/);
  // amenities is typed string[] but a few records carry one comma-separated string.
  const raw = court.amenities as unknown;
  const amenities = Array.isArray(raw) ? raw.map(String) : typeof raw === "string" ? raw.split(/,\s*/) : [];
  const segments = [...amenities, ...sentences];
  return segments.some((seg) => {
    const m = seg.match(LIGHT_WORD);
    if (!m) return false;
    if (/light therapy|\bno (?:court )?lights\b|\bnot lit\b|\bunlit\b|without lights/i.test(seg)) return false;
    // "LED-lit tennis courts", "14 tennis courts (3 lit)": the lights belong to another sport.
    const after = seg.slice((m.index ?? 0) + m[0].length, (m.index ?? 0) + m[0].length + 30);
    if (/^\W*(?:\w+\W+){0,1}(?:tennis|pickle\s?ball|squash)/i.test(after)) return false;
    if (OTHER_SPORT.test(seg) && !/padel|paddle/i.test(seg)) return false;
    return true;
  });
}

function hasClockHours(days: DayHours[]): boolean {
  return days.some((d) => d.kind === "range" || d.kind === "allday");
}

/** Latest closing time across the week, for a stable "late clubs first" order. */
function latestClose(days: DayHours[] | undefined): number {
  if (!days) return 0;
  return days.reduce((max, d) => Math.max(max, d.kind === "range" ? d.close : d.kind === "allday" ? 2880 : 0), 0);
}

function nightTier(c: TonightClub): number {
  if (c.setting === "indoor" || c.setting === "both") return 0;
  if (c.lit) return 1;
  return 2;
}

export function getTonightData(courts: AdaptedCourt[]): TonightData {
  const open = courts.filter((c) => c.status !== "coming_soon" && c.status !== "temporarily_closed");

  const rows = open.map((court): TonightClub => {
    const hours = getClubHours(court);
    const clock = hasClockHours(hours.days);
    const layout = getCourtLayout(court);
    const price = getClubPlayerPrice(court);
    const href = court.bookingUrl || court.website;
    return {
      slug: court.slug,
      name: court.name,
      days: clock ? hours.days : undefined,
      summary: clock ? hours.summary : undefined,
      timeZone: getClubTimeZone(court),
      setting: layout.setting,
      lit: layout.setting !== "indoor" && hasLightingEvidence(court),
      price: price ? formatPlayerPrice(price) : undefined,
      pricePeak: price?.basis === "peak" || undefined,
      membersOnly: Boolean(court.membersOnly),
      action: href ? { href, label: court.bookingUrl ? "Book" : "Website" } : undefined,
    };
  });

  const order = (a: TonightClub, b: TonightClub) =>
    nightTier(a) - nightTier(b) ||
    Number(a.membersOnly) - Number(b.membersOnly) ||
    latestClose(b.days) - latestClose(a.days) ||
    a.name.localeCompare(b.name);

  // Indoor first (playable at night in any weather), then lit outdoor, then the rest.
  const clubs = rows.filter((r) => r.days && r.timeZone).sort(order);
  const noHours = rows.filter((r) => !r.days || !r.timeZone).sort(order);

  const pts = open
    .map((c) => c.coordinates)
    .filter((p) => p && Number.isFinite(p.latitude) && Number.isFinite(p.longitude) && (p.latitude !== 0 || p.longitude !== 0));
  const center = pts.length
    ? {
        lat: Math.round((pts.reduce((s, p) => s + p.latitude, 0) / pts.length) * 100) / 100,
        lng: Math.round((pts.reduce((s, p) => s + p.longitude, 0) / pts.length) * 100) / 100,
      }
    : undefined;

  const zones = rows.map((r) => r.timeZone).filter(Boolean) as string[];
  const timeZone = zones.sort((a, b) => zones.filter((z) => z === b).length - zones.filter((z) => z === a).length)[0];

  return {
    clubs,
    noHours,
    center,
    timeZone,
    hasIndoor: rows.some((r) => r.setting === "indoor" || r.setting === "both"),
    hasOutdoor: rows.some((r) => r.setting !== "indoor"),
  };
}
