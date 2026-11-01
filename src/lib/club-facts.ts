/**
 * Checked facts about a club: booking link, programs (open play, lessons,
 * rentals, kids, leagues) and facilities (lights, parking, wheelchair access,
 * lockers, pro shop), plus the announced opening date for clubs not open yet.
 *
 * Data lives in src/data/club-facts.json, keyed by club id. Every value was
 * read off a first-party source (the club's website or its own booking page)
 * and carries that URL and the date it was checked. A fact that is not there
 * is unknown, and the page says nothing about it. `false` means the club
 * itself says no.
 *
 * The old lessonsAvailable / rentalAvailable flags on the club records were
 * research defaults (almost all true) and are no longer read anywhere.
 */

import rawFacts from "@/data/club-facts.json";

export interface CheckedFact {
  value: boolean;
  /** Short detail from the source: schedule, price, ages, "free lot" */
  note?: string;
  source: string;
  /** YYYY-MM-DD */
  checked: string;
}

export interface ClubFacts {
  bookingUrl?: { value: string; platform?: string; source: string; checked: string };
  /** Coming-soon clubs: opening as announced, e.g. "December 2026" */
  openingDate?: { value: string; note?: string; source: string; checked: string };
  openPlay?: CheckedFact;
  lessons?: CheckedFact;
  rentals?: CheckedFact;
  kidsProgram?: CheckedFact;
  leagues?: CheckedFact;
  lights?: CheckedFact;
  parking?: CheckedFact;
  wheelchair?: CheckedFact;
  lockers?: CheckedFact;
  proShop?: CheckedFact;
}

export type FactKey = Exclude<keyof ClubFacts, "bookingUrl" | "openingDate">;

const FACTS = rawFacts as Record<string, ClubFacts>;

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const SEASON_END: Record<string, number> = { early: 3, spring: 4, summer: 7, mid: 7, late: 11, fall: 10, autumn: 10, winter: 11 };

/**
 * Last day an announced opening ("December 2026", "Spring 2027", "2026")
 * still covers. Undefined when the text has no year we can read.
 */
export function openingDeadline(text: string): Date | undefined {
  const t = text.toLowerCase();
  const year = Number(t.match(/\b(20\d\d)\b/)?.[1]);
  if (!year) return undefined;
  const month = MONTHS.findIndex((m) => t.includes(m));
  const season = Object.keys(SEASON_END).find((k) => t.includes(k));
  const last = month >= 0 ? month : season ? SEASON_END[season] : 11;
  return new Date(Date.UTC(year, last + 1, 0, 23, 59));
}

export function getClubFacts(id: number | string): ClubFacts {
  const facts = FACTS[String(id)];
  if (!facts) return {};
  // An announced opening that has passed says nothing useful; hide it until re-checked
  const deadline = facts.openingDate ? openingDeadline(facts.openingDate.value) : undefined;
  if (deadline && deadline.getTime() < Date.now()) {
    const { openingDate: _stale, ...rest } = facts;
    return rest;
  }
  return facts;
}

/** true / false when the club says so, undefined when we have not seen it stated. */
export function clubOffers(id: number | string, key: FactKey): boolean | undefined {
  return getClubFacts(id)[key]?.value;
}

/** Order and labels for the club page's "Programs and facilities" list. */
export const FACT_LABELS: Array<{ key: FactKey; label: string; no: string; group: "play" | "facility" }> = [
  { key: "openPlay", label: "Open play", no: "No open play", group: "play" },
  { key: "lessons", label: "Lessons and clinics", no: "No lessons", group: "play" },
  { key: "kidsProgram", label: "Kids and juniors", no: "No kids program", group: "play" },
  { key: "leagues", label: "Leagues and tournaments", no: "No leagues", group: "play" },
  { key: "rentals", label: "Racket rental", no: "No racket rental", group: "play" },
  { key: "lights", label: "Lights for night play", no: "No lights", group: "facility" },
  { key: "parking", label: "Parking", no: "No parking", group: "facility" },
  { key: "wheelchair", label: "Wheelchair accessible", no: "Not wheelchair accessible", group: "facility" },
  { key: "lockers", label: "Locker rooms or showers", no: "No locker rooms", group: "facility" },
  { key: "proShop", label: "Pro shop", no: "No pro shop", group: "facility" },
];

/** Latest checked date across a club's facts, for the "checked" line. */
export function latestCheck(facts: ClubFacts): string | undefined {
  const dates = Object.values(facts)
    .map((f) => (f && typeof f === "object" && "checked" in f ? (f as { checked: string }).checked : undefined))
    .filter((d): d is string => !!d)
    .sort();
  return dates[dates.length - 1];
}
