import { padelCourts } from "@/data/padel-courts";

/**
 * Directory-derived aggregates for the State of US Padel report. Everything
 * here is computed live from src/data/padel-courts.ts — no estimates. Clubs
 * missing a data point are excluded from that statistic, never filled in.
 */

type Club = (typeof padelCourts)[number] & {
  chainName?: string;
  pricingText?: string;
  membersOnly?: boolean;
  lessonsAvailable?: boolean;
  foodAndDrink?: boolean;
  socialArea?: boolean;
  rentalAvailable?: boolean;
  rating?: number;
  reviewCount?: number;
  numberOfCourts?: number;
  status?: string;
};

const clubs = padelCourts as Club[];
const isOpen = (c: Club) => c.status !== "coming_soon" && c.status !== "temporarily_closed";

/** Court-hour price parsed from free-text pricing. Takes the first dollar
 *  figure that is per hour / per 90 min and is NOT preceded by lesson/clinic
 *  language; 90-minute rates are normalised to an hour. */
export function parseCourtHourPrice(text: string | undefined): number | null {
  if (!text) return null;
  const re = /\$(\d{2,3})(?:\.\d\d)?\s*(?:\/|per\s*)\s*(?:court\s*)?(hour|hr|60\s*min|90\s*min|1\.5\s*h)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const before = text.slice(Math.max(0, m.index - 45), m.index).toLowerCase();
    if (/lesson|clinic|coach|private|class|member|camp|academy/.test(before)) continue;
    let price = Number(m[1]);
    if (/90|1\.5/.test(m[2])) price = price / 1.5;
    if (price >= 15 && price <= 200) return Math.round(price);
  }
  return null;
}

function median(nums: number[]) {
  if (!nums.length) return 0;
  const s = [...nums].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
}

function pct(part: number, whole: number) {
  return whole ? Math.round((part / whole) * 100) : 0;
}

export function getStateOfPadelStats() {
  const open = clubs.filter(isOpen);

  // Top metros by court count (open clubs only)
  const cityMap = new Map<string, { city: string; state: string; clubs: number; courts: number }>();
  for (const c of open) {
    const key = `${c.city}|${c.state}`;
    const row = cityMap.get(key) ?? { city: c.city, state: c.state, clubs: 0, courts: 0 };
    row.clubs += 1;
    row.courts += c.numberOfCourts ?? 0;
    cityMap.set(key, row);
  }
  const topCities = [...cityMap.values()].sort((a, b) => b.courts - a.courts || b.clubs - a.clubs).slice(0, 12);

  // Multi-location operators
  const chainMap = new Map<string, { name: string; locations: number; courts: number; states: Set<string> }>();
  for (const c of clubs) {
    if (!c.chainName) continue;
    const row = chainMap.get(c.chainName) ?? { name: c.chainName, locations: 0, courts: 0, states: new Set<string>() };
    row.locations += 1;
    row.courts += c.numberOfCourts ?? 0;
    row.states.add(c.state);
    chainMap.set(c.chainName, row);
  }
  const chains = [...chainMap.values()]
    .filter((r) => r.locations >= 2)
    .map((r) => ({ name: r.name, locations: r.locations, courts: r.courts, states: [...r.states].sort() }))
    .sort((a, b) => b.locations - a.locations || b.courts - a.courts);
  const chainClubs = chains.reduce((s, r) => s + r.locations, 0);

  // Pricing
  const prices = clubs.map((c) => parseCourtHourPrice(c.pricingText)).filter((p): p is number => p !== null);
  const sortedPrices = [...prices].sort((a, b) => a - b);
  const pricing = {
    sample: prices.length,
    median: median(prices),
    p25: sortedPrices[Math.floor(sortedPrices.length * 0.25)] ?? 0,
    p75: sortedPrices[Math.floor(sortedPrices.length * 0.75)] ?? 0,
  };

  // Amenity / model flags (share of clubs where the flag is known)
  const share = (key: keyof Club) => {
    const known = clubs.filter((c) => typeof c[key] === "boolean");
    return { pct: pct(known.filter((c) => c[key] === true).length, known.length), n: known.length };
  };
  const amenities = {
    lessons: share("lessonsAvailable"),
    foodAndDrink: share("foodAndDrink"),
    socialArea: share("socialArea"),
    rentals: share("rentalAvailable"),
    membersOnly: share("membersOnly"),
  };

  // Club size distribution
  const sizes = open.map((c) => c.numberOfCourts ?? 0).filter((n) => n > 0);
  const sizeBuckets = [
    { label: "1–2 courts", count: sizes.filter((n) => n <= 2).length },
    { label: "3–5 courts", count: sizes.filter((n) => n >= 3 && n <= 5).length },
    { label: "6–9 courts", count: sizes.filter((n) => n >= 6 && n <= 9).length },
    { label: "10+ courts", count: sizes.filter((n) => n >= 10).length },
  ];

  // Demand proxies
  const rated = clubs.filter((c) => typeof c.rating === "number" && (c.reviewCount ?? 0) >= 10);
  const demand = {
    totalReviews: clubs.reduce((s, c) => s + (c.reviewCount ?? 0), 0),
    clubsWithRating: clubs.filter((c) => typeof c.rating === "number").length,
    avgRating: rated.length ? Number((rated.reduce((s, c) => s + (c.rating ?? 0), 0) / rated.length).toFixed(2)) : 0,
    ratedSample: rated.length,
  };

  return {
    totalClubs: clubs.length,
    openClubs: open.length,
    topCities,
    chains,
    chainClubs,
    pricing,
    amenities,
    sizeBuckets,
    sizeSample: sizes.length,
    demand,
  };
}
