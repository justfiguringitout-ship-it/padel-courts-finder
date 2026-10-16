/**
 * The fields a club owner can suggest changes to, and the pure helpers that
 * validate a suggestion and turn it into a diff. Shared by the dashboard (to
 * preview the diff) and the server (which recomputes everything from our own
 * data and never trusts the browser's idea of "current").
 *
 * Changes are keyed by PadelCourt field names and already in the data file's
 * formats (hours as "8h-22h"), so applying them is a straight write. A value
 * of null means "remove this field".
 */

export const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
export type Day = (typeof DAYS)[number];
export const DAY_LABELS: Record<Day, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export const ACCESS_VALUES = ["members_only", "guests_of_members", "residents_only", "resort_guests"] as const;
export type Access = (typeof ACCESS_VALUES)[number];
export const ACCESS_LABELS: Record<Access, string> = {
  members_only: "Members only",
  guests_of_members: "Members and their guests",
  residents_only: "Residents only",
  resort_guests: "Members and hotel or resort guests",
};

export const LIMITS = {
  phone: 60,
  url: 300,
  email: 200,
  pricingText: 500,
  amenity: 120,
  amenities: 25,
  description: 1200,
  descriptionMin: 40,
  note: 2000,
  courts: 60,
} as const;

/** One day in the form: open with times, closed, or not published. Times are "HH:MM"; close may be "24:00". */
export type DayHours = { state: "open"; open: string; close: string } | { state: "closed" } | { state: "unknown" };

export interface ListingForm {
  hours: Record<Day, DayHours>;
  phone: string;
  website: string;
  bookingUrl: string;
  /** Blank means "keep what is on file". Never shown publicly. */
  membershipEmail: string;
  numberOfCourts: number | null;
  indoorCourts: number | null;
  outdoorCourts: number | null;
  pricingText: string;
  amenities: string[];
  description: string;
  membersOnly: boolean;
  access: Access | "";
}

/** The subset of a PadelCourt entry an owner can see and change. */
export interface CurrentListing {
  name: string;
  city: string;
  state: string;
  openingHours?: Partial<Record<Day, string>>;
  phone?: string;
  website?: string;
  bookingUrl?: string;
  membershipEmail?: string;
  numberOfCourts?: number;
  indoorCourts?: number;
  outdoorCourts?: number;
  courtType?: "indoor" | "outdoor" | "both";
  pricingText?: string;
  amenities?: string[];
  description?: string;
  membersOnly?: boolean;
  access?: Access;
  ogImageUrl?: string;
  galleryImages?: string[];
}

export interface ListingChanges {
  openingHours?: Partial<Record<Day, string>>;
  phone?: string | null;
  website?: string | null;
  bookingUrl?: string | null;
  membershipEmail?: string | null;
  numberOfCourts?: number | null;
  indoorCourts?: number | null;
  outdoorCourts?: number | null;
  courtType?: "indoor" | "outdoor" | "both" | null;
  pricingText?: string | null;
  amenities?: string[] | null;
  description?: string | null;
  membersOnly?: boolean | null;
  access?: Access | null;
}

export const CHANGE_KEYS = [
  "openingHours",
  "phone",
  "website",
  "bookingUrl",
  "membershipEmail",
  "numberOfCourts",
  "indoorCourts",
  "outdoorCourts",
  "courtType",
  "pricingText",
  "amenities",
  "description",
  "membersOnly",
  "access",
] as const satisfies readonly (keyof ListingChanges)[];

// ------------------------------------------------------------------ hours

/** Half-hour steps for the time selects: "00:00" ... "23:30", plus "24:00" (midnight) for closing. */
export const OPEN_TIMES: string[] = Array.from({ length: 48 }, (_, i) => minutesToClock(i * 30));
export const CLOSE_TIMES: string[] = [...OPEN_TIMES.slice(1), "24:00"];

function minutesToClock(m: number): string {
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}

function clockToMinutes(c: string): number {
  const [h, m] = c.split(":").map(Number);
  return h * 60 + m;
}

function parseClock(raw: string): string | null {
  const t = raw.trim().toLowerCase();
  if (t === "midnight") return "24:00";
  if (t === "noon") return "12:00";
  const m = t.match(/^(\d{1,2})(?:[:.h](\d{2}))?\s*h?\s*(am|pm|a\.m\.|p\.m\.)?$/);
  if (!m) return null;
  let hour = Number(m[1]);
  const min = Number(m[2] || "0");
  const period = m[3]?.replace(/\./g, "");
  if (period === "pm" && hour < 12) hour += 12;
  if (period === "am" && hour === 12) hour = 0;
  if (hour > 24 || min > 59 || (hour === 24 && min > 0)) return null;
  return minutesToClock(hour * 60 + min);
}

/** Read a value from padel-courts.ts ("8h-22h", "7:00am-10:00pm", "Closed", "24h"). Unreadable = unknown. */
export function parseDayHours(raw: string | undefined): DayHours {
  const t = (raw ?? "").trim();
  if (!t) return { state: "unknown" };
  if (/^closed$/i.test(t)) return { state: "closed" };
  if (/^(24h|24 hours|open 24 hours|0h-24h)$/i.test(t)) return { state: "open", open: "00:00", close: "24:00" };
  const parts = t.split(/\s*(?:-|–|—|to)\s*/i);
  if (parts.length !== 2) return { state: "unknown" };
  const open = parseClock(parts[0]);
  let close = parseClock(parts[1]);
  if (!open || !close || open === "24:00") return { state: "unknown" };
  if (close === "00:00") close = "24:00";
  // Only half-hour steps are representable in the form; anything else stays as it is.
  if (!OPEN_TIMES.includes(open) || !CLOSE_TIMES.includes(close)) return { state: "unknown" };
  if (clockToMinutes(close) <= clockToMinutes(open)) return { state: "unknown" };
  return { state: "open", open, close };
}

function dataClock(c: string, isClose: boolean, open: string): string {
  if (c === "24:00") return open === "00:00" && isClose ? "24h" : "0h";
  const [h, m] = c.split(":").map(Number);
  return m === 0 ? `${h}h` : `${h}:${String(m).padStart(2, "0")}`;
}

/** Write a day in the data file's style: "8h-22h", "7h-23:30", "7h-0h", "0h-24h", "Closed". */
export function formatDayHours(d: DayHours): string | null {
  if (d.state === "closed") return "Closed";
  if (d.state === "unknown") return null;
  return `${dataClock(d.open, false, d.open)}-${dataClock(d.close, true, d.open)}`;
}

function clock12(c: string): string {
  if (c === "24:00") return "midnight";
  const [h, m] = c.split(":").map(Number);
  if (h === 0 && m === 0) return "midnight";
  if (h === 12 && m === 0) return "noon";
  const period = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12} ${period}` : `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

export function clockLabel(c: string): string {
  return clock12(c);
}

/** "8 AM to 10 PM", "Closed", "Open 24 hours"; raw text when we cannot read it. */
export function humanDayHours(raw: string | undefined | null): string {
  if (raw === undefined || raw === null || raw.trim() === "") return "Not published";
  const d = parseDayHours(raw);
  if (d.state === "closed") return "Closed";
  if (d.state === "unknown") return raw.trim();
  if (d.open === "00:00" && d.close === "24:00") return "Open 24 hours";
  return `${clock12(d.open)} to ${clock12(d.close)}`;
}

function sameDay(a: DayHours, b: DayHours): boolean {
  if (a.state !== b.state) return false;
  if (a.state === "open" && b.state === "open") return a.open === b.open && a.close === b.close;
  return true;
}

// ------------------------------------------------------------------ form <-> listing

export function formFromListing(cur: CurrentListing): ListingForm {
  const hours = {} as Record<Day, DayHours>;
  for (const d of DAYS) hours[d] = parseDayHours(cur.openingHours?.[d]);
  return {
    hours,
    phone: cur.phone ?? "",
    website: cur.website ?? "",
    bookingUrl: cur.bookingUrl ?? "",
    membershipEmail: "",
    numberOfCourts: cur.numberOfCourts ?? null,
    indoorCourts: cur.indoorCourts ?? null,
    outdoorCourts: cur.outdoorCourts ?? null,
    pricingText: cur.pricingText ?? "",
    amenities: [...(cur.amenities ?? [])],
    description: cur.description ?? "",
    membersOnly: cur.membersOnly === true,
    access: cur.access ?? "",
  };
}

/** Single line, no control characters, trimmed and capped. */
export function cleanLine(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max + 1);
}

/** Keeps paragraph breaks. */
export function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0009\u000b-\u001f\u007f]+/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, max + 1);
}

export const EMAIL_RE = /^[^\s@<>"',;()[\]\\]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i;

/** "club.com/book" -> "https://club.com/book". Returns null when it is not a usable public URL. */
export function normalizeUrl(value: string): string | null {
  const v = value.trim();
  if (!v) return "";
  if (v.length > LIMITS.url) return null;
  const withProto = /^https?:\/\//i.test(v) ? v : /^[a-z][a-z0-9+.-]*:/i.test(v) ? null : `https://${v}`;
  if (!withProto) return null;
  let u: URL;
  try {
    u = new URL(withProto);
  } catch {
    return null;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  if (u.username || u.password) return null;
  if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(u.hostname)) return null;
  if (/[\s"'<>`]/.test(withProto)) return null;
  return withProto;
}

/** One to three numbers ("832-304-4418" or "786-538-4037, 786-550-0070"), optional "x123" extensions. */
function validPhone(p: string): boolean {
  if (!/^[0-9+().\-\s/x,;]+$/i.test(p)) return false;
  const parts = p.split(/[,;/]/).map((x) => x.trim()).filter(Boolean);
  if (parts.length < 1 || parts.length > 3) return false;
  return parts.every((x) => {
    const digits = x.replace(/\D/g, "").length;
    return digits >= 7 && digits <= 18;
  });
}

function intOrNull(v: unknown, min: number, max: number): number | null | "bad" {
  if (v === null || v === undefined || v === "") return null;
  const n = typeof v === "number" ? v : typeof v === "string" && /^\d+$/.test(v.trim()) ? Number(v.trim()) : NaN;
  if (!Number.isInteger(n) || n < min || n > max) return "bad";
  return n;
}

function validDay(v: unknown): DayHours | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  if (o.state === "closed") return { state: "closed" };
  if (o.state === "unknown") return { state: "unknown" };
  if (o.state === "open" && typeof o.open === "string" && typeof o.close === "string") {
    if (!OPEN_TIMES.includes(o.open) || !CLOSE_TIMES.includes(o.close)) return null;
    if (clockToMinutes(o.close) <= clockToMinutes(o.open)) return null;
    return { state: "open", open: o.open, close: o.close };
  }
  return null;
}

export type FormCheck = { ok: true; form: ListingForm } | { ok: false; errors: string[] };

/** Server-side (and client-side) validation of everything the owner typed. */
export function validateForm(raw: unknown): FormCheck {
  const errors: string[] = [];
  if (!raw || typeof raw !== "object") return { ok: false, errors: ["Something went wrong. Please reload the page."] };
  const r = raw as Record<string, unknown>;

  const hours = {} as Record<Day, DayHours>;
  const rawHours = (r.hours && typeof r.hours === "object" ? r.hours : {}) as Record<string, unknown>;
  for (const d of DAYS) {
    const v = validDay(rawHours[d]);
    if (!v) errors.push(`${DAY_LABELS[d]}: pick an opening time before the closing time.`);
    hours[d] = v ?? { state: "unknown" };
  }

  const phone = cleanLine(r.phone, LIMITS.phone);
  if (phone && (phone.length > LIMITS.phone || !validPhone(phone))) errors.push("Phone: use digits, spaces, dashes or brackets.");

  const website = normalizeUrl(cleanLine(r.website, LIMITS.url));
  if (website === null) errors.push("Website: enter a full web address, like https://yourclub.com.");
  const bookingUrl = normalizeUrl(cleanLine(r.bookingUrl, LIMITS.url));
  if (bookingUrl === null) errors.push("Booking link: enter a full web address.");

  const membershipEmail = cleanLine(r.membershipEmail, LIMITS.email).toLowerCase();
  if (membershipEmail && (membershipEmail.length > LIMITS.email || !EMAIL_RE.test(membershipEmail))) {
    errors.push("Membership email: that does not look like an email address.");
  }

  const total = intOrNull(r.numberOfCourts, 1, LIMITS.courts);
  const indoor = intOrNull(r.indoorCourts, 0, LIMITS.courts);
  const outdoor = intOrNull(r.outdoorCourts, 0, LIMITS.courts);
  if (total === "bad") errors.push(`Courts: enter a whole number from 1 to ${LIMITS.courts}.`);
  if (indoor === "bad" || outdoor === "bad") errors.push("Indoor and outdoor courts: enter whole numbers.");
  if (typeof total === "number" && typeof indoor === "number" && typeof outdoor === "number" && indoor + outdoor !== total) {
    errors.push("Courts: indoor plus outdoor should add up to the total.");
  }

  const pricingText = cleanLine(r.pricingText, LIMITS.pricingText);
  if (pricingText.length > LIMITS.pricingText) errors.push(`Pricing: keep it under ${LIMITS.pricingText} characters.`);

  const amenitiesIn = Array.isArray(r.amenities) ? r.amenities : [];
  const amenities: string[] = [];
  const seen = new Set<string>();
  for (const a of amenitiesIn) {
    const v = cleanLine(a, LIMITS.amenity);
    if (!v) continue;
    if (v.length > LIMITS.amenity || v.length < 2) {
      errors.push(`Amenities: "${v.slice(0, LIMITS.amenity)}" should be 2 to ${LIMITS.amenity} characters.`);
      continue;
    }
    const key = v.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    amenities.push(v);
  }
  if (amenities.length > LIMITS.amenities) errors.push(`Amenities: up to ${LIMITS.amenities}, please.`);

  const description = cleanText(r.description, LIMITS.description);
  if (description.length > LIMITS.description) errors.push(`Description: keep it under ${LIMITS.description} characters.`);
  if (description && description.length < LIMITS.descriptionMin) errors.push("Description: a sentence or two, please.");

  const membersOnly = r.membersOnly === true;
  const access = typeof r.access === "string" && (ACCESS_VALUES as readonly string[]).includes(r.access) ? (r.access as Access) : "";
  if (typeof r.access === "string" && r.access && !access) errors.push("Who can play: pick one of the options.");

  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    form: {
      hours,
      phone,
      website: website ?? "",
      bookingUrl: bookingUrl ?? "",
      membershipEmail,
      numberOfCourts: total as number | null,
      indoorCourts: indoor as number | null,
      outdoorCourts: outdoor as number | null,
      pricingText,
      amenities,
      description,
      membersOnly,
      access: membersOnly ? access : "",
    },
  };
}

function sameList(a: string[] | undefined, b: string[]): boolean {
  const x = (a ?? []).map((s) => s.trim().toLowerCase()).sort();
  const y = b.map((s) => s.trim().toLowerCase()).sort();
  return x.length === y.length && x.every((v, i) => v === y[i]);
}

/**
 * Compare a validated form with what is on file and return only what changed,
 * in data-file format. `current` must come from our own data.
 */
export function buildChanges(current: CurrentListing, form: ListingForm): ListingChanges {
  const ch: ListingChanges = {};

  const hours: Partial<Record<Day, string>> = {};
  for (const d of DAYS) {
    const before = parseDayHours(current.openingHours?.[d]);
    const after = form.hours[d];
    if (after.state === "unknown") continue; // "not published" never wipes what we have
    if (sameDay(before, after)) continue;
    const v = formatDayHours(after);
    if (v) hours[d] = v;
  }
  if (Object.keys(hours).length) ch.openingHours = hours;

  const text = (key: "phone" | "website" | "bookingUrl" | "pricingText" | "description") => {
    const before = (current[key] ?? "").trim();
    const after = form[key].trim();
    if (before === after) return;
    ch[key] = after ? after : null;
  };
  text("phone");
  text("website");
  text("bookingUrl");
  text("pricingText");
  text("description");

  if (form.membershipEmail && form.membershipEmail !== (current.membershipEmail ?? "").toLowerCase()) {
    ch.membershipEmail = form.membershipEmail;
  }

  const num = (key: "numberOfCourts" | "indoorCourts" | "outdoorCourts") => {
    const before = current[key] ?? null;
    const after = form[key];
    if (before === after) return;
    ch[key] = after;
  };
  num("numberOfCourts");
  num("indoorCourts");
  num("outdoorCourts");

  if (ch.indoorCourts !== undefined || ch.outdoorCourts !== undefined) {
    const indoor = form.indoorCourts ?? 0;
    const outdoor = form.outdoorCourts ?? 0;
    const type = indoor > 0 && outdoor > 0 ? "both" : indoor > 0 ? "indoor" : outdoor > 0 ? "outdoor" : null;
    if (type && type !== current.courtType) ch.courtType = type;
  }

  if (!sameList(current.amenities, form.amenities)) ch.amenities = form.amenities.length ? form.amenities : null;

  if ((current.membersOnly === true) !== form.membersOnly) ch.membersOnly = form.membersOnly;
  const accessAfter = form.membersOnly ? form.access || null : null;
  if ((current.access ?? null) !== accessAfter) ch.access = accessAfter;

  return ch;
}

export function hasChanges(ch: ListingChanges): boolean {
  return Object.keys(ch).length > 0;
}

/** Keep only known keys with plausible types (for data read back from the database). */
export function sanitizeChanges(raw: unknown): ListingChanges {
  const out: ListingChanges = {};
  if (!raw || typeof raw !== "object") return out;
  const r = raw as Record<string, unknown>;
  if (r.openingHours && typeof r.openingHours === "object") {
    const h: Partial<Record<Day, string>> = {};
    for (const d of DAYS) {
      const v = (r.openingHours as Record<string, unknown>)[d];
      if (typeof v === "string" && /^[0-9a-zA-Z:\- ]{2,20}$/.test(v)) h[d] = v;
    }
    if (Object.keys(h).length) out.openingHours = h;
  }
  for (const k of ["phone", "website", "bookingUrl", "membershipEmail", "pricingText", "description"] as const) {
    if (k in r && (r[k] === null || typeof r[k] === "string")) out[k] = r[k] as string | null;
  }
  for (const k of ["numberOfCourts", "indoorCourts", "outdoorCourts"] as const) {
    if (k in r && (r[k] === null || (typeof r[k] === "number" && Number.isInteger(r[k])))) out[k] = r[k] as number | null;
  }
  if ("courtType" in r && (r.courtType === null || ["indoor", "outdoor", "both"].includes(r.courtType as string))) {
    out.courtType = r.courtType as ListingChanges["courtType"];
  }
  if ("amenities" in r && (r.amenities === null || (Array.isArray(r.amenities) && r.amenities.every((a) => typeof a === "string")))) {
    out.amenities = r.amenities as string[] | null;
  }
  if ("membersOnly" in r && (r.membersOnly === null || typeof r.membersOnly === "boolean")) out.membersOnly = r.membersOnly as boolean | null;
  if ("access" in r && (r.access === null || (ACCESS_VALUES as readonly string[]).includes(r.access as string))) {
    out.access = r.access as Access | null;
  }
  return out;
}

// ------------------------------------------------------------------ describing a change

export interface DiffLine {
  label: string;
  before: string;
  after: string;
}

const NONE = "Not listed";

function showText(v: string | null | undefined): string {
  return v && v.trim() ? v.trim() : NONE;
}

function showNum(v: number | null | undefined): string {
  return typeof v === "number" ? String(v) : NONE;
}

function showAccess(v: Access | null | undefined): string {
  return v ? ACCESS_LABELS[v] : NONE;
}

/** Human-readable before/after lines. `opts.privateEmail` controls how the membership email shows. */
export function describeChanges(
  current: CurrentListing,
  ch: ListingChanges,
  opts: { privateEmail?: "show" | "mask" } = {}
): DiffLine[] {
  const lines: DiffLine[] = [];
  if (ch.openingHours) {
    for (const d of DAYS) {
      if (ch.openingHours[d] === undefined) continue;
      lines.push({
        label: `Hours, ${DAY_LABELS[d]}`,
        before: humanDayHours(current.openingHours?.[d]),
        after: humanDayHours(ch.openingHours[d]),
      });
    }
  }
  if (ch.phone !== undefined) lines.push({ label: "Phone", before: showText(current.phone), after: showText(ch.phone) });
  if (ch.website !== undefined) lines.push({ label: "Website", before: showText(current.website), after: showText(ch.website) });
  if (ch.bookingUrl !== undefined) lines.push({ label: "Booking link", before: showText(current.bookingUrl), after: showText(ch.bookingUrl) });
  if (ch.membershipEmail !== undefined) {
    const mask = opts.privateEmail !== "show";
    lines.push({
      label: "Membership email (private)",
      before: current.membershipEmail ? (mask ? maskEmail(current.membershipEmail) : current.membershipEmail) : NONE,
      after: showText(ch.membershipEmail),
    });
  }
  if (ch.numberOfCourts !== undefined) lines.push({ label: "Courts", before: showNum(current.numberOfCourts), after: showNum(ch.numberOfCourts) });
  if (ch.indoorCourts !== undefined) lines.push({ label: "Indoor courts", before: showNum(current.indoorCourts), after: showNum(ch.indoorCourts) });
  if (ch.outdoorCourts !== undefined) lines.push({ label: "Outdoor courts", before: showNum(current.outdoorCourts), after: showNum(ch.outdoorCourts) });
  if (ch.courtType !== undefined) lines.push({ label: "Court type", before: showText(current.courtType), after: showText(ch.courtType) });
  if (ch.pricingText !== undefined) lines.push({ label: "Pricing", before: showText(current.pricingText), after: showText(ch.pricingText) });
  if (ch.amenities !== undefined) {
    lines.push({
      label: "Amenities",
      before: current.amenities?.length ? current.amenities.join(", ") : NONE,
      after: ch.amenities?.length ? ch.amenities.join(", ") : NONE,
    });
  }
  if (ch.description !== undefined) lines.push({ label: "Description", before: showText(current.description), after: showText(ch.description) });
  if (ch.membersOnly !== undefined) {
    lines.push({
      label: "Members only",
      before: current.membersOnly ? "Yes" : "No",
      after: ch.membersOnly ? "Yes" : "No",
    });
  }
  if (ch.access !== undefined) lines.push({ label: "Who can play", before: showAccess(current.access), after: showAccess(ch.access) });
  return lines;
}

/** "hours, phone and pricing" for the changelog note and emails. */
export function changedFieldWords(ch: ListingChanges, photoCount = 0): string {
  const words: string[] = [];
  if (ch.openingHours) words.push("hours");
  if (ch.phone !== undefined) words.push("phone number");
  if (ch.website !== undefined) words.push("website");
  if (ch.bookingUrl !== undefined) words.push("booking link");
  if (ch.numberOfCourts !== undefined || ch.indoorCourts !== undefined || ch.outdoorCourts !== undefined || ch.courtType !== undefined) {
    words.push("court count");
  }
  if (ch.pricingText !== undefined) words.push("pricing");
  if (ch.amenities !== undefined) words.push("amenities");
  if (ch.description !== undefined) words.push("description");
  if (ch.membersOnly !== undefined || ch.access !== undefined) words.push("who can play");
  if (photoCount > 0) words.push(photoCount === 1 ? "a photo" : `${photoCount} photos`);
  // The membership email is private, so it is never named in public notes.
  if (words.length === 0) return ch.membershipEmail !== undefined ? "private contact details" : "details";
  if (words.length === 1) return words[0];
  return `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}`;
}

export function maskEmail(email: string): string {
  const at = email.indexOf("@");
  if (at < 1) return "on file";
  return `${email[0]}${"*".repeat(Math.max(2, Math.min(6, at - 1)))}${email.slice(at)}`;
}
