/**
 * Court-hour pricing parsed from a club's free-text `pricingText`.
 *
 * Club websites almost never publish court rates on a crawlable page — they
 * sit inside Playtomic / Playbypoint / PlayByCourt booking apps — so the
 * directory's `pricingText` (researched per club) is the only source we hold.
 * This turns that text into an off-peak ("from") and peak hourly figure for
 * the listing cards, WITHOUT inventing anything: a club whose text says
 * "court rates unknown", or only quotes memberships, lessons or clinics,
 * gets no number and the card simply shows no price.
 *
 * Rules (each one exists because the naive version shipped a wrong number
 * on a real club — see the 2026-09-12 review in PR #12):
 *  - The text is split into clauses on ";" / "." / "|". Every rule below is
 *    scoped to the clause, so "Memberships from $190/month; court bookings
 *    ~$40-80/hour" keeps its court rate instead of being poisoned by the
 *    membership clause before it.
 *  - A clause naming another sport (pickleball, tennis, soccer, squash,
 *    rink…) and NOT padel is skipped entirely. "Soccer: $130/hour; Padel:
 *    $12/person" must not show $130.
 *  - Only figures explicitly per hour / 60 min / 90 min / 1.5 h count.
 *    "$140/month" and "$30 off-peak" (no unit) are ignored. 90-minute rates
 *    are normalised to an hour.
 *  - Per-person figures are skipped ("$24/hr per person", "$35/hour/person",
 *    "($20/pp)"). Multiplying by four would be a guess about court size.
 *  - A figure preceded in its clause by lesson / clinic / coach / private /
 *    class / member / camp / academy / event / corporate language is ignored.
 *  - Ranges ("$40-80/hour", "$25–$60 per hour") give low = off-peak,
 *    high = peak. Off-peak = lowest qualifying figure, peak = highest.
 *    Sanity band $15–$400 per hour.
 */
export interface ParsedCourtPricing {
  offPeakHourlyRate: number;
  peakHourlyRate: number;
  /** true when the text gave a range or distinct peak/off-peak figures */
  isRange: boolean;
}

const OTHER_SPORT = /pickleball|pickle ball|tennis|soccer|squash|rink|basketball|volleyball|badminton|golf/i;
const PADEL = /padel|paddle|court rental|court booking|court fee|court time|courts?\b/i;
const EXCLUDE_BEFORE = /lesson|clinic|coach|private|class|member|camp|academy|open play|event|corporate|party|racket rental|racquet rental|ball|example/i;
const PER_PERSON_AFTER = /^\s*(?:\/|per\s+)(?:person|player|pp\b|head)/i;
// Lesson / member language right AFTER the figure ("$75/hour for lessons",
// "$45/1.5hr for members") — but "for non-members" and "for members & guests"
// are public rates and stay.
const EXCLUDE_AFTER = /lesson|clinic|coach|private|class|camp|academy|\bmembers?\b(?!\s*(?:&|and|\+|or|\/)\s*(?:guests?|non))/i;
const PER_PERSON_BEFORE = /per (?:hour )?(?:per )?(?:person|player)|\/person|\/player|pp\b/i;

// $A[-–$B] [per|/] [court] (hour|hr|60 min|90 min|1.5 h)
const RATE_RE =
  /~?\$(\d{2,3})(?:\.\d\d)?(?:\s*[-–]\s*\$?(\d{2,3})(?:\.\d\d)?)?\+?\s*(?:\/|per\s*)\s*(?:court\s*(?:\/|per\s*)?\s*)?(hour|hr|60\s*-?\s*min|90\s*-?\s*min(?:ute)?s?|1\.5\s*-?\s*h(?:ours?|rs?)?)/gi;

export function parseCourtPricing(text: string | undefined): ParsedCourtPricing | null {
  if (!text) return null;
  const lows: number[] = [];
  const highs: number[] = [];

  for (const rawClause of text.split(/[;.|]\s+|\.\s*$/)) {
    const clause = rawClause.trim();
    if (!clause) continue;
    // Another sport's clause, unless padel is named in it too.
    if (OTHER_SPORT.test(clause) && !/padel|paddle/i.test(clause)) continue;
    // A clause that is explicitly "unknown / not listed / TBD" carries nothing.
    if (/unknown|not (?:publicly )?listed|tbd|n\/a/i.test(clause)) continue;

    RATE_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = RATE_RE.exec(clause))) {
      const before = clause.slice(Math.max(0, m.index - 45), m.index);
      const after = clause.slice(m.index + m[0].length, m.index + m[0].length + 24);
      if (EXCLUDE_BEFORE.test(before)) continue;
      if (PER_PERSON_AFTER.test(after)) continue;
      if (EXCLUDE_AFTER.test(after.replace(/non-?members?/gi, ""))) continue;
      // Only the ~12 chars right before the figure: "(per hour per person, ~$20-40/hr)"
      // is per-person; "$160/90min ($40pp), off-peak $140/90min" is not.
      if (PER_PERSON_BEFORE.test(before.slice(-12))) continue;

      const per90 = /90|1\.5/.test(m[3]);
      const norm = (n: string) => Math.round(per90 ? Number(n) / 1.5 : Number(n));
      const lo = norm(m[1]);
      const hi = m[2] ? norm(m[2]) : lo;
      if (lo < 15 || hi > 400 || hi < lo) continue;
      lows.push(lo);
      highs.push(hi);
    }
  }
  if (!lows.length) return null;
  const offPeakHourlyRate = Math.min(...lows);
  const peakHourlyRate = Math.max(...highs);
  return { offPeakHourlyRate, peakHourlyRate, isRange: peakHourlyRate > offPeakHourlyRate };
}
