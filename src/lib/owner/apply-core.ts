/**
 * Pure source patchers for applying an approved owner edit:
 *  - patchCourtEntry: rewrites one club's object in src/data/padel-courts.ts,
 *    touching only the properties that change and keeping every other byte.
 *  - addChangelogEntry: adds an entry at the top of src/data/changelog.ts.
 *  - planPhotos: picks public/images/courts/<slug>-<n>.webp names and the
 *    ogImageUrl / galleryImages values.
 *
 * Used by the GitHub auto-apply (src/lib/owner/apply.ts) and by
 * scripts/apply-owner-edits.ts. No Node or Next imports here.
 */
import { DAYS, changedFieldWords, sanitizeChanges, type ListingChanges } from "./listing-fields";

// ------------------------------------------------------------------ a tiny TS scanner

/** If `i` starts a string or comment, return the index just past it; otherwise -1. */
function skipNonCode(src: string, i: number): number {
  const ch = src[i];
  if (ch === '"' || ch === "'") {
    let j = i + 1;
    while (j < src.length) {
      if (src[j] === "\\") j += 2;
      else if (src[j] === ch) return j + 1;
      else if (src[j] === "\n") return j; // unterminated: bail at line end
      else j++;
    }
    return j;
  }
  if (ch === "`") {
    let j = i + 1;
    while (j < src.length) {
      if (src[j] === "\\") j += 2;
      else if (src[j] === "`") return j + 1;
      else j++;
    }
    return j;
  }
  if (ch === "/" && src[i + 1] === "/") {
    const nl = src.indexOf("\n", i);
    return nl === -1 ? src.length : nl;
  }
  if (ch === "/" && src[i + 1] === "*") {
    const end = src.indexOf("*/", i + 2);
    return end === -1 ? src.length : end + 2;
  }
  return -1;
}

/** Index of the bracket that closes the one at `open`. */
function matchBracket(src: string, open: number): number {
  const opener = src[open];
  const closer = opener === "{" ? "}" : opener === "[" ? "]" : ")";
  let depth = 0;
  for (let i = open; i < src.length; ) {
    const skip = skipNonCode(src, i);
    if (skip !== -1) {
      i = skip;
      continue;
    }
    const c = src[i];
    if (c === "{" || c === "[" || c === "(") depth++;
    else if (c === "}" || c === "]" || c === ")") {
      depth--;
      if (depth === 0) {
        if (c !== closer) throw new Error(`mismatched bracket at ${i}`);
        return i;
      }
    }
    i++;
  }
  throw new Error("unbalanced brackets");
}

/** Top-level `{ ... }` objects inside the array whose `[` is at `arrayOpen`. */
function arrayObjects(src: string, arrayOpen: number): Array<{ start: number; end: number }> {
  const end = matchBracket(src, arrayOpen);
  const out: Array<{ start: number; end: number }> = [];
  for (let i = arrayOpen + 1; i < end; ) {
    const skip = skipNonCode(src, i);
    if (skip !== -1) {
      i = skip;
      continue;
    }
    if (src[i] === "{") {
      const close = matchBracket(src, i);
      out.push({ start: i, end: close });
      i = close + 1;
      continue;
    }
    i++;
  }
  return out;
}

interface Prop {
  key: string;
  keyStart: number;
  valueStart: number;
  /** end of the value expression (exclusive), before any whitespace */
  valueEnd: number;
  /** index of the comma after the value, or -1 */
  comma: number;
  /** start of the key's line when only whitespace precedes the key, else -1 */
  lineStart: number;
  /** end of the line (index of "\n") when nothing but whitespace/comment follows the comma */
  lineEnd: number;
  /** [start, end) of a same-line `//` comment after the comma, if any */
  comment: [number, number] | null;
}

/** Properties directly inside the object `{ ... }` spanning [start, end]. */
function objectProps(src: string, start: number, end: number): Prop[] {
  const props: Prop[] = [];
  let i = start + 1;
  while (i < end) {
    // skip whitespace, commas and comments between properties
    const skip = skipNonCode(src, i);
    if (skip !== -1) {
      i = skip;
      continue;
    }
    if (/[\s,]/.test(src[i])) {
      i++;
      continue;
    }
    const m = /^([A-Za-z_$][\w$]*)\s*:\s*/.exec(src.slice(i, Math.min(end, i + 200)));
    if (!m) throw new Error(`cannot read property at ${i}: ${JSON.stringify(src.slice(i, i + 40))}`);
    const key = m[1];
    const keyStart = i;
    const valueStart = i + m[0].length;
    // read the value up to a top-level comma or the object end
    let j = valueStart;
    let depth = 0;
    let lastCode = valueStart;
    while (j < end) {
      const s = skipNonCode(src, j);
      if (s !== -1) {
        const isComment = src[j] === "/";
        j = s;
        if (!isComment) lastCode = j;
        continue;
      }
      const c = src[j];
      if (c === "{" || c === "[" || c === "(") depth++;
      else if (c === "}" || c === "]" || c === ")") depth--;
      else if (c === "," && depth === 0) break;
      if (!/\s/.test(c)) lastCode = j + 1;
      j++;
    }
    const comma = j < end && src[j] === "," ? j : -1;
    const valueEnd = lastCode;

    const ls = src.lastIndexOf("\n", keyStart - 1) + 1;
    const lineStart = /^[ \t]*$/.test(src.slice(ls, keyStart)) ? ls : -1;

    let lineEnd = -1;
    let comment: [number, number] | null = null;
    if (comma !== -1) {
      const nl = src.indexOf("\n", comma);
      const rest = src.slice(comma + 1, nl === -1 ? src.length : nl);
      const cm = /^[ \t]*(\/\/.*)?[ \t]*$/.exec(rest);
      if (cm) {
        lineEnd = nl === -1 ? src.length : nl;
        if (cm[1]) {
          const cs = comma + 1 + rest.indexOf("//");
          comment = [cs, cs + cm[1].trimEnd().length];
        }
      }
    }
    props.push({ key, keyStart, valueStart, valueEnd, comma, lineStart, lineEnd, comment });
    i = comma === -1 ? end : comma + 1;
  }
  return props;
}

// ------------------------------------------------------------------ serializing values

type Value = string | number | boolean | string[] | Record<string, string>;

function serialize(key: string, v: Value, indent: string): string {
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) return `[${v.map((s) => JSON.stringify(s)).join(", ")}]`;
  if (key === "openingHours") {
    const inner = `${indent}  `;
    return `{\n${DAYS.map((d) => `${inner}${d}: ${JSON.stringify(v[d] ?? "TBA")},`).join("\n")}\n${indent}}`;
  }
  throw new Error(`cannot serialize ${key}`);
}

function readStringValue(src: string, p: Prop): string | undefined {
  const raw = src.slice(p.valueStart, p.valueEnd).trim();
  if (/^"(?:[^"\\]|\\.)*"$/.test(raw)) return JSON.parse(raw);
  if (/^'(?:[^'\\]|\\.)*'$/.test(raw)) return raw.slice(1, -1).replace(/\\'/g, "'").replace(/\\\\/g, "\\");
  return undefined;
}

function readHours(src: string, p: Prop): Partial<Record<string, string>> {
  const raw = src.slice(p.valueStart, p.valueEnd).trim();
  if (!raw.startsWith("{")) return {};
  const inner = objectProps(src, p.valueStart + src.slice(p.valueStart).indexOf("{"), p.valueEnd - 1);
  const out: Record<string, string> = {};
  for (const ip of inner) {
    const s = readStringValue(src, ip);
    if (s !== undefined) out[ip.key] = s;
  }
  return out;
}

function readStringArray(src: string, p: Prop): string[] {
  const raw = src.slice(p.valueStart, p.valueEnd).trim();
  if (!raw.startsWith("[")) return [];
  const out: string[] = [];
  const re = /"((?:[^"\\]|\\.)*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw))) out.push(JSON.parse(`"${m[1]}"`));
  return out;
}

// ------------------------------------------------------------------ the court patcher

export interface CourtPatch {
  /** property -> new value, or null to remove the property */
  set: Record<string, Value | null>;
}

export interface LocatedEntry {
  start: number;
  end: number;
  props: Prop[];
}

export function locateCourt(source: string, clubName: string): LocatedEntry {
  const arr = /export const padelCourts\s*:\s*PadelCourt\[\]\s*=\s*\[/.exec(source);
  if (!arr) throw new Error("padelCourts array not found");
  const objects = arrayObjects(source, arr.index + arr[0].length - 1);
  const matches: LocatedEntry[] = [];
  for (const o of objects) {
    const props = objectProps(source, o.start, o.end);
    const nameProp = props.find((p) => p.key === "name");
    if (nameProp && readStringValue(source, nameProp) === clubName) matches.push({ ...o, props });
  }
  if (matches.length !== 1) throw new Error(`expected exactly one entry named ${JSON.stringify(clubName)}, found ${matches.length}`);
  return matches[0];
}

/** Read the current hours/gallery of an entry straight from source (for merging). */
export function readEntryFields(source: string, clubName: string) {
  const e = locateCourt(source, clubName);
  const get = (k: string) => e.props.find((p) => p.key === k);
  const hoursProp = get("openingHours");
  const galleryProp = get("galleryImages");
  const ogProp = get("ogImageUrl");
  return {
    openingHours: hoursProp ? readHours(source, hoursProp) : {},
    galleryImages: galleryProp ? readStringArray(source, galleryProp) : [],
    ogImageUrl: ogProp ? readStringValue(source, ogProp) : undefined,
  };
}

export function patchCourtEntry(source: string, clubName: string, patch: CourtPatch, today: string): string {
  const entry = locateCourt(source, clubName);
  const { props } = entry;
  const first = props[0];
  const indent = first && first.lineStart !== -1 ? source.slice(first.lineStart, first.keyStart) : "    ";
  const edits: Array<{ start: number; end: number; text: string }> = [];
  const toInsert: string[] = [];

  for (const [key, value] of Object.entries(patch.set)) {
    if (!/^[A-Za-z_$][\w$]*$/.test(key)) throw new Error(`bad key ${key}`);
    const p = props.find((x) => x.key === key);
    if (value === null) {
      if (!p) continue;
      if (p.lineStart !== -1 && p.lineEnd !== -1) {
        edits.push({ start: p.lineStart, end: Math.min(source.length, p.lineEnd + 1), text: "" });
      } else {
        let end = p.comma !== -1 ? p.comma + 1 : p.valueEnd;
        while (source[end] === " ") end++;
        edits.push({ start: p.keyStart, end, text: "" });
      }
      continue;
    }
    const propIndent = p && p.lineStart !== -1 ? source.slice(p.lineStart, p.keyStart) : indent;
    const text = serialize(key, value, propIndent);
    if (p) {
      edits.push({ start: p.valueStart, end: p.valueEnd, text });
      if (p.comma === -1) edits.push({ start: p.valueEnd, end: p.valueEnd, text: "," });
      if (p.comment && key !== "ownerConfirmedDate") {
        edits.push({ start: p.comment[0], end: p.comment[1], text: `// updated by the club, approved ${today}` });
      }
      // A source note on the line above the hours ("// hours: google_business ...") no longer applies.
      if (key === "openingHours" && p.lineStart > 0) {
        const prevStart = source.lastIndexOf("\n", p.lineStart - 2) + 1;
        const prevLine = source.slice(prevStart, p.lineStart - 1);
        const cm = /^([ \t]*)\/\/\s*hours:/.exec(prevLine);
        if (cm) edits.push({ start: prevStart, end: p.lineStart - 1, text: `${cm[1]}// hours: updated by the club, approved ${today}` });
      }
    } else {
      toInsert.push(`${indent}${key}: ${text},`);
    }
  }

  if (toInsert.length) {
    const last = props[props.length - 1];
    if (!last) throw new Error("entry has no properties");
    if (last.comma === -1) {
      // No trailing comma yet: add it together with the new lines. If that
      // property is also being rewritten, its own "," edit is dropped.
      const i = edits.findIndex((e) => e.start === last.valueEnd && e.end === last.valueEnd && e.text === ",");
      if (i !== -1) edits.splice(i, 1);
      edits.push({ start: last.valueEnd, end: last.valueEnd, text: `,\n${toInsert.join("\n")}` });
    } else {
      const at = last.lineEnd !== -1 ? last.lineEnd : last.comma + 1;
      edits.push({ start: at, end: at, text: `\n${toInsert.join("\n")}` });
    }
  }

  edits.sort((a, b) => b.start - a.start || b.end - a.end);
  for (let k = 1; k < edits.length; k++) {
    if (edits[k].end > edits[k - 1].start) throw new Error("overlapping edits");
  }
  let out = source;
  for (const e of edits) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  return out;
}

// ------------------------------------------------------------------ owner edit -> patch

export interface PhotoPlan {
  /** storage path in the bucket -> public path in the repo */
  files: Array<{ from: string; to: string; publicUrl: string }>;
  ogImageUrl?: string;
  galleryImages?: string[];
}

/** Next free <slug>-<n>.webp names, given the files already in public/images/courts. */
export function planPhotos(
  slug: string,
  photoPaths: string[],
  existingFiles: string[],
  current: { ogImageUrl?: string; galleryImages?: string[] }
): PhotoPlan {
  if (!photoPaths.length) return { files: [] };
  const re = new RegExp(`^${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:-(\\d+))?\\.webp$`);
  let max = 0;
  for (const f of existingFiles) {
    const m = re.exec(f);
    if (m) max = Math.max(max, m[1] ? Number(m[1]) : 1);
  }
  const files = photoPaths.map((from, i) => {
    const name = `${slug}-${max + 1 + i}.webp`;
    return { from, to: `public/images/courts/${name}`, publicUrl: `/images/courts/${name}` };
  });
  const urls = files.map((f) => f.publicUrl);
  if (!current.ogImageUrl) {
    return { files, ogImageUrl: urls[0], galleryImages: urls.length > 1 ? [...(current.galleryImages ?? []), ...urls.slice(1)] : undefined };
  }
  return { files, galleryImages: [...(current.galleryImages ?? []), ...urls] };
}

export function buildCourtPatch(
  changesRaw: unknown,
  currentHours: Partial<Record<string, string>>,
  photos: PhotoPlan,
  today: string
): CourtPatch {
  const ch: ListingChanges = sanitizeChanges(changesRaw);
  const set: CourtPatch["set"] = {};
  if (ch.openingHours) {
    const merged: Record<string, string> = {};
    for (const d of DAYS) merged[d] = ch.openingHours[d] ?? currentHours[d] ?? "TBA";
    set.openingHours = merged;
  }
  for (const k of [
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
  ] as const) {
    if (ch[k] !== undefined) set[k] = ch[k] as Value | null;
  }
  if (photos.ogImageUrl) set.ogImageUrl = photos.ogImageUrl;
  if (photos.galleryImages) set.galleryImages = photos.galleryImages;
  set.ownerConfirmedDate = today;
  return { set };
}

// ------------------------------------------------------------------ changelog

export interface NewChangelogEntry {
  date: string;
  title: string;
  note: string;
  clubs: string[];
  commit: string;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function changelogEntryFor(clubName: string, changesRaw: unknown, photoCount: number, today: string, commit: string): NewChangelogEntry {
  const words = changedFieldWords(sanitizeChanges(changesRaw), photoCount);
  return {
    date: today,
    title: `${clubName} details updated by the club`,
    note: `The club sent new ${words} through its owner account. We checked the change before publishing it.`,
    clubs: [clubName],
    commit,
  };
}

export function addChangelogEntry(source: string, entry: NewChangelogEntry): string {
  const m = /export const changelog\s*:\s*ChangelogEntry\[\]\s*=\s*\[[ \t]*\n/.exec(source);
  if (!m) throw new Error("changelog array not found");
  const at = m.index + m[0].length;
  const [y, mo] = entry.date.split("-").map(Number);
  const label = `${MONTHS[mo - 1]} ${y}`;
  const block = [
    "  {",
    `    date: ${JSON.stringify(entry.date)},`,
    `    type: "updated",`,
    `    title: ${JSON.stringify(entry.title)},`,
    `    note: ${JSON.stringify(entry.note)},`,
    `    clubs: [${entry.clubs.map((c) => JSON.stringify(c)).join(", ")}],`,
    `    commit: ${JSON.stringify(entry.commit)},`,
    "  },",
    "",
  ].join("\n");
  const nextLineEnd = source.indexOf("\n", at);
  const nextLine = source.slice(at, nextLineEnd === -1 ? source.length : nextLineEnd);
  const header = /^([ \t]*\/\/\s*-+\s*)(.+?)\s*$/.exec(nextLine);
  if (header && header[2] === label) {
    const after = nextLineEnd + 1;
    return source.slice(0, after) + block + source.slice(after);
  }
  const prefix = header ? header[1] : "  // ---------------------------------------------------------------- ";
  return source.slice(0, at) + `${prefix}${label}\n` + block + source.slice(at);
}

/** Today's date in US Eastern time, YYYY-MM-DD. */
export function todayEastern(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}
