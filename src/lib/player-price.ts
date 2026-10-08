/**
 * Price per player per hour, parsed from a club's researched `pricingText`.
 *
 * Padel is almost always played four to a court, so "what does an hour cost
 * me" is the number players actually compare. This helper produces it only
 * when the text states a rate with an explicit duration; anything ambiguous
 * returns null and the UI shows nothing. It never guesses.
 *
 * How a figure is read (each rule exists because a real club's text needed it):
 *  - The text is split into clauses on ";", "|" and ". " before a capital
 *    letter, so "Memberships from $190/month; court bookings ~$40-80/hour"
 *    keeps its court rate. "est. $40" and "$12.50" are not split.
 *  - Whole clauses are skipped when they name another sport and not padel,
 *    say the rate is unknown / TBD, are flagged members only, or describe the
 *    figure as an estimate, "typical", "roughly" or borrowed from another
 *    location. Those numbers are not the club's own published rate.
 *  - A figure needs a duration: per hour / hr / hourly / 60, 90 or 120 min /
 *    1, 1.5 or 2 h, written after it ("$28/90min") or right before it
 *    ("90 min: $80", "Hourly $25-$45"). "$22/person" alone is skipped because
 *    we do not know how long that buys.
 *  - Per-person figures ("$24/hr per person", "$20/pp/hr", "$30 per player
 *    for 90 minutes") ARE the per-player price. Everything else is a court
 *    rate and is divided by four.
 *  - Member, guest, lesson, clinic, class, camp, drop-in, open play, league,
 *    event and rental figures are ignored. The nearest member label wins, so
 *    "Members $20/hour, Non-members $40/hour" reads $40.
 *  - A "session" price with no court or person unit is ambiguous (drop-in per
 *    head, or a court booking?) and is skipped.
 *  - Sanity bands: court $20 to $600 per hour, player $3 to $100 per hour.
 *    A court rate under $20/hr in this data has always turned out to be a
 *    per-person figure written without the "per person". An hourly figure
 *    that names neither court nor person must also be $40 or more to count
 *    as a court rate: "$20-40/hour" alone could be either, so it stays
 *    unknown.
 *
 * When a club publishes both per-person and court figures, the per-person
 * figures win (they need no arithmetic). The card shows the LOWEST standard
 * non-member rate, prefixed "from" when the club publishes a range or
 * distinct peak and off-peak prices. If the only figures are labelled peak or
 * prime time, `basis` is "peak" so the UI can say so.
 */

export type PlayerPriceBasis = "single" | "lowest" | "peak";

export interface PlayerPrice {
  /** Lowest standard non-member price per player per hour, whole dollars. */
  perPlayer: number;
  /** Highest standard non-member price per player per hour, whole dollars. */
  perPlayerHigh: number;
  /** "single": one published rate. "lowest": the low end of a range or the
   *  off-peak price. "peak": only peak / prime-time rates are published. */
  basis: PlayerPriceBasis;
  /** True when the club publishes more than one standard rate. */
  isFrom: boolean;
  /** Where the number came from. */
  source: "per-player" | "court";
  /** Lowest court price per hour (only when source is "court"). */
  courtHourly?: number;
}

const OTHER_SPORT = /pickle\s?ball|tennis|soccer|squash|rink|basketball|volleyball|badminton|golf|bowling/i;
const PADEL_WORD = /padel|paddle/i;
const CLAUSE_SKIP =
  /unknown|not (?:publicly )?listed|\btbd\b|\bn\/a\b|coming soon|members?[- ]only|\b(?:est\.?|estimated?|estimates?|typical(?:ly)?|roughly|per sources|based on other|approx(?:\.|imately)?|directory listings|varies by source|example|members?\s*(?:&|and)\s*guests)(?![a-z])|~\s*\$/i;
const EXCLUDE_NEAR =
  /lesson|clinic|coach|private|class|camp|academy|open play|drop[- ]?in|league|event|corporate|party|racket|racquet|\bballs?\b|example|guest fee|day pass|social|americano|initiation|membership|program/i;
const PRICE_RE = /~?\$(\d{1,3}(?:\.\d\d)?)(\+)?(?:\s*(?:[-–]|to)\s*\$?(\d{1,3}(?:\.\d\d)?)|\/\$?(\d{2,3})(?=\s+per\b))?\+?/gi;

interface Units {
  minutes?: number;
  perPerson: boolean;
  perCourt: boolean;
  session: boolean;
}

// Unit tokens that may follow a figure, in any order: "/hr/person",
// " per court per hour", " per player for 90 minutes", "/pp/hr",
// " peak" labels in between are skipped.
const UNIT_TOKEN =
  /^\s*(?:\/|per\b|for\b|a\b|an\b|each\b|the\b|\(|,(?=\s*(?:per|\/))|peak\b|off-?peak\b|non-?peak\b|prime(?:\s*time)?\b|outdoor\b|indoor\b|weekdays?\b|weekends?\b|\+tax\b|\+\s*tax\b)\s*/i;

function readUnits(after: string): Units {
  const u: Units = { perPerson: false, perCourt: false, session: false };
  let s = after;
  for (let guard = 0; guard < 10 && s.length; guard++) {
    s = s.replace(/^\s+/, "");
    const filler = s.match(UNIT_TOKEN);
    if (filler && filler[0].length) {
      s = s.slice(filler[0].length);
      continue;
    }
    let m: RegExpMatchArray | null;
    if ((m = s.match(/^(?:person|player|pp|participant|head)s?\b\)?/i))) {
      u.perPerson = true;
    } else if ((m = s.match(/^court\b\)?/i))) {
      u.perCourt = true;
    } else if ((m = s.match(/^(?:120\s*-?\s*min(?:ute)?s?|2\s*-?\s*h(?:ours?|rs?)\b)\)?/i))) {
      u.minutes ??= 120;
    } else if ((m = s.match(/^(?:90\s*-?\s*min(?:ute)?s?|1\.5\s*-?\s*h(?:ours?|rs?)?\b)\)?/i))) {
      u.minutes ??= 90;
    } else if ((m = s.match(/^(?:60\s*-?\s*min(?:ute)?s?|1\s*-?\s*h(?:ours?|rs?)\b|hours?\b|hrs?\b|hourly\b)\)?/i))) {
      u.minutes ??= 60;
    } else if ((m = s.match(/^session\b/i))) {
      u.session = true;
    } else {
      break;
    }
    s = s.slice(m[0].length);
  }
  return u;
}

// A duration written right before the figure: "90 min: $80", "Court: 60min $45",
// "Peak court rental (1hr): $54", "1hr $13/player", "Hourly $25-$45".
function durationBefore(before: string): number | undefined {
  const m = before.match(
    /(?:\(?\s*(\d{1,3}(?:\.\d)?)\s*-?\s*(min(?:ute)?s?|h(?:ou)?rs?|hours?)\s*\)?|(hourly))\s*:?\s*~?$/i
  );
  if (!m) return undefined;
  if (m[3]) return 60;
  const n = Number(m[1]);
  const mins = /^min/i.test(m[2]) ? n : n * 60;
  return mins === 60 || mins === 90 || mins === 120 ? mins : undefined;
}

/** Last member / non-member label before the figure decides who the price is for. */
function isMemberPrice(beforeInClause: string): boolean {
  const labels = [...beforeInClause.matchAll(/(non-?\s?members?|members?(?!hip)|(?:resort\s+)?guests?|non-?\s?guests?|public|walk-?in)/gi)];
  if (!labels.length) return false;
  const last = labels[labels.length - 1][1].toLowerCase();
  if (/^non/.test(last) || /public|walk/.test(last)) return false;
  return true; // member or guest rate
}

interface Figure {
  lo: number;
  hi: number;
  isRange: boolean;
  start: number;
  end: number;
  units: Units;
  peakLabel: boolean;
  offPeakLabel: boolean;
  excluded: boolean;
}

export function parsePlayerPrice(text: string | undefined | null): PlayerPrice | null {
  if (!text) return null;
  const perPlayerLows: number[] = [];
  const perPlayerHighs: number[] = [];
  const courtLows: number[] = [];
  const courtHighs: number[] = [];
  let playerFigures = 0;
  let courtFigures = 0;
  let playerAnyRange = false;
  let courtAnyRange = false;
  let playerAllPeak = true;
  let courtAllPeak = true;
  const deferredCourt: { lo: number; hi: number; isRange: boolean; peak: boolean }[] = [];

  const clauses = text.split(/\s*[;|]\s*|\.\s+(?=[A-Z])/);
  let prevHead = "";
  for (const raw of clauses) {
    const body = raw.trim();
    if (!body) continue;
    // "Drop-in off-peak $18/60min to $30/120min; on-peak $23/60min": a clause
    // that opens with a bare peak label continues the previous clause's subject.
    const continues = /^(?:on-?\s?peak|off-?\s?peak|non-?\s?peak|peak|prime)\b/.test(body);
    const head = continues ? prevHead : "";
    prevHead = body.slice(0, Math.max(0, body.indexOf("$")));
    const clause = head + body;
    if (OTHER_SPORT.test(clause) && !PADEL_WORD.test(clause)) continue;
    if (CLAUSE_SKIP.test(clause)) continue;
    // "... $25/pp/hr, pickleball $12.50/pp/hr (members)": the whole list is member pricing.
    if (/\((?:for\s+)?members?(?:\s+only)?\)\s*$/i.test(clause) && !/non-?\s?member/i.test(clause)) continue;
    const courtHourlyHeader = /court\s+hourly|hourly\s+court/i.test(clause);

    const figures: Figure[] = [];
    PRICE_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = PRICE_RE.exec(clause))) {
      const lo = Number(m[1]);
      const hiRaw = m[3] ?? m[4];
      const hi = hiRaw ? Number(hiRaw) : lo;
      figures.push({
        lo,
        hi,
        // "$40+ per hour" is a floor, so it reads "from $10" too.
        isRange: hi !== lo || m[2] === "+",
        start: m.index,
        end: m.index + m[0].length,
        units: readUnits(clause.slice(m.index + m[0].length)),
        peakLabel: false,
        offPeakLabel: false,
        excluded: false,
      });
    }

    figures.forEach((f, i) => {
      const prevEnd = i > 0 ? figures[i - 1].end : 0;
      const nextStart = i < figures.length - 1 ? figures[i + 1].start : clause.length;
      const segBefore = clause.slice(prevEnd, f.start);
      const segAfter = clause.slice(f.end, Math.min(nextStart, f.end + 30));
      const beforeInClause = clause.slice(0, f.start);

      if (!f.units.minutes) {
        const d = durationBefore(segBefore);
        if (d) f.units.minutes = d;
      }
      // "(per hour per person, ~$20-40/hr)" and "hourly ~$20+/person"
      if (/per\s+(?:hour\s+)?(?:per\s+)?(?:person|player)[\s,:~]*$|\/person[\s,:~]*$/i.test(clause.slice(Math.max(0, f.start - 16), f.start))) {
        f.units.perPerson = true;
      }
      // "per court $X", "Court rentals ~$30-60/hr", "Courts $20/hr": the figure is for the court.
      if (/\bcourts?\b/i.test(segBefore.slice(-28))) {
        f.units.perCourt = true;
      }
      if (!f.units.minutes && courtHourlyHeader) {
        f.units.minutes = 60;
        f.units.perCourt = true;
      }

      const labelZone = segBefore.slice(-32) + " " + segAfter.slice(0, 24);
      f.offPeakLabel = /off-?\s?peak|non-?\s?peak|non-?prime|low time/i.test(labelZone);
      f.peakLabel = !f.offPeakLabel && /\bpeak\b|\bprime\b/i.test(labelZone);

      const nearBefore = clause.slice(Math.max(0, f.start - 40), f.start);
      const otherSportNear = OTHER_SPORT.test(nearBefore) && !PADEL_WORD.test(nearBefore.slice(nearBefore.search(OTHER_SPORT)));
      const afterNoNon = segAfter.replace(/non-?\s?members?|members?\s*(?:&|and|\+|or|\/)\s*(?:guests?|non)/gi, "");
      if (
        EXCLUDE_NEAR.test(nearBefore) ||
        otherSportNear ||
        isMemberPrice(beforeInClause) ||
        /lesson|clinic|coach|private|class|camp|academy|\bmembers?\b|\bguests?\b/i.test(afterNoNon)
      ) {
        f.excluded = true;
      }
      if (f.units.session && !f.units.perCourt && !f.units.perPerson) f.excluded = true;
    });

    // "$40 peak / $25 off-peak per person per hour": a figure with no units
    // inherits from the next figure when only labels sit between them.
    for (let i = figures.length - 2; i >= 0; i--) {
      const f = figures[i];
      const next = figures[i + 1];
      if (f.units.minutes || f.units.perPerson) continue;
      const gap = clause.slice(f.end, next.start);
      if (/^[\s/,]*(?:\(?(?:peak|off-?\s?peak|non-?\s?peak|prime(?:\s*time)?|weekdays?|weekends?)\)?[\s/,]*)*(?:and|or)?\s*$/i.test(gap)) {
        f.units = { ...next.units };
      }
    }

    for (const f of figures) {
      if (f.excluded || !f.units.minutes) continue;
      const scale = 60 / f.units.minutes;
      const lo = f.lo * scale;
      const hi = f.hi * scale;
      if (f.units.perPerson) {
        if (lo < 3 || hi > 100 || hi < lo) continue;
        perPlayerLows.push(lo);
        perPlayerHighs.push(hi);
        playerFigures++;
        if (f.isRange) playerAnyRange = true;
        if (!f.peakLabel || f.isRange) playerAllPeak = false;
      } else {
        if (lo < 20 || hi > 600 || hi < lo) continue;
        // "$20-40/hour" with no court or person in sight: in this data a figure
        // that low is as often a per-person rate as a court rate, so unless the
        // text says court, only $40+ reads as a court price. A low figure is
        // kept aside and used only if the same text also has a clear court
        // rate ("Peak ~$50-65/hour; Off-peak ~$30-55/hour").
        if (!f.units.perCourt && lo < 40) {
          deferredCourt.push({ lo, hi, isRange: f.isRange, peak: f.peakLabel });
          continue;
        }
        courtLows.push(lo);
        courtHighs.push(hi);
        courtFigures++;
        if (f.isRange) courtAnyRange = true;
        if (!f.peakLabel || f.isRange) courtAllPeak = false;
      }
    }
  }

  if (perPlayerLows.length) {
    const low = Math.round(Math.min(...perPlayerLows));
    const high = Math.round(Math.max(...perPlayerHighs));
    const isFrom = high > low || playerAnyRange;
    return {
      perPlayer: low,
      perPlayerHigh: high,
      isFrom,
      basis: playerAllPeak ? "peak" : isFrom || playerAnyRange || playerFigures > 1 ? "lowest" : "single",
      source: "per-player",
    };
  }
  if (courtLows.length) {
    for (const d of deferredCourt) {
      courtLows.push(d.lo);
      courtHighs.push(d.hi);
      courtFigures++;
      if (d.isRange) courtAnyRange = true;
      if (!d.peak || d.isRange) courtAllPeak = false;
    }
    const courtLow = Math.min(...courtLows);
    const low = Math.round(courtLow / 4);
    const high = Math.round(Math.max(...courtHighs) / 4);
    const isFrom = high > low || courtAnyRange;
    return {
      perPlayer: low,
      perPlayerHigh: high,
      isFrom,
      basis: courtAllPeak ? "peak" : isFrom || courtAnyRange || courtFigures > 1 ? "lowest" : "single",
      source: "court",
      courtHourly: Math.round(courtLow),
    };
  }
  return null;
}

/** Per-player price for a club record (raw or adapted, anything with pricingText). */
/** Below this per-player figure a parse is almost always a misread (a per-person
 *  rate taken as a court rate, or a stale directory figure), so we show nothing. */
const MIN_PLAUSIBLE_PER_PLAYER = 6;

export function getClubPlayerPrice(club: { pricingText?: string | null }): PlayerPrice | null {
  const p = parsePlayerPrice(club.pricingText);
  if (!p || p.perPlayer < MIN_PLAUSIBLE_PER_PLAYER) return null;
  return p;
}

/** Short card label: "$20", "from $15". */
export function formatPlayerPrice(p: PlayerPrice): string {
  return `${p.isFrom ? "from " : ""}$${p.perPlayer}`;
}

export interface PlayerPriceSummary {
  /** Clubs with a parseable price. */
  count: number;
  low: number;
  high: number;
  /** true when low/high are the 25th to 75th percentile (5+ clubs), false when min to max. */
  isTypical: boolean;
}

type PricedClub = { pricingText?: string | null; status?: string | null };

/**
 * Range of per-player prices across open clubs. With five or more clubs it
 * is the middle half (25th to 75th percentile) so one luxury club does not
 * stretch it; with fewer it is the full range.
 */
export function summarizePlayerPrices(clubs: PricedClub[]): PlayerPriceSummary | null {
  const values = clubs
    .filter((c) => c.status !== "coming_soon" && c.status !== "temporarily_closed")
    .map((c) => getClubPlayerPrice(c)?.perPlayer)
    .filter((v): v is number => typeof v === "number")
    .sort((a, b) => a - b);
  // A summary from one to four clubs reads as a market price when it is not one.
  if (values.length < 5) return null;
  const n = values.length;
  if (n >= 5) {
    return {
      count: n,
      low: values[Math.floor((n - 1) * 0.25)],
      high: values[Math.ceil((n - 1) * 0.75)],
      isTypical: true,
    };
  }
  return { count: n, low: values[0], high: values[n - 1], isTypical: false };
}

/** "Typical court time in Miami: $15 to $30 per player per hour, from 12 clubs that publish prices." */
export function playerPriceSummaryLine(summary: PlayerPriceSummary, place: string): string {
  const range = summary.low === summary.high ? `$${summary.low}` : `$${summary.low} to $${summary.high}`;
  const lead = summary.isTypical ? `Typical court time in ${place}` : `Court time in ${place}`;
  const from =
    summary.count === 1 ? "based on the 1 club with a price we could confirm" : `based on ${summary.count} clubs with prices we could confirm`;
  return `${lead}: ${range} per player per hour, ${from}.`;
}
