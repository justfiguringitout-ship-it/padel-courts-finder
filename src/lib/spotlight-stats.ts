/**
 * Turns pcf_spotlight_events rows into the numbers a club sees: used by the
 * owner dashboard and scripts/spotlight-report.ts. Pure.
 *
 * "Unique visitors" are distinct visitor hashes. The hash salt changes every
 * day (privacy), so one person who comes back on three days counts three
 * times: read it as "unique visitors per day, added up".
 */
import type { SpotlightEventRow } from "./spotlight-events";

export interface Count {
  key: string;
  count: number;
}

export interface SpotlightStats {
  articleViews: number;
  uniqueVisitors: number;
  engaged: number;
  engagedRate: number | null;
  reads: number;
  readRate: number | null;
  /** Outbound clicks from the article (book, website, instagram, phone, directions, membership). */
  outboundClicks: number;
  /** Outbound clicks / article views. */
  clickThroughRate: number | null;
  uniqueClickers: number;
  clicksByKind: Count[];
  clicksByPlacement: Count[];
  /** Pinned cards: impressions and clicks to the article, by placement. */
  cardImpressions: number;
  cardClicks: number;
  cardCtr: number | null;
  cards: Array<{ placement: string; impressions: number; clicks: number; ctr: number | null }>;
  clubPageViews: number;
  topReferrers: Count[];
  usShare: number | null;
  countries: Count[];
  devices: Count[];
  firstEvent: string | null;
  lastEvent: string | null;
}

export const OUTBOUND_KINDS = new Set(["book", "website", "instagram", "phone", "directions", "membership"]);

function tally(values: Array<string | null | undefined>, nullLabel?: string): Count[] {
  const m = new Map<string, number>();
  for (const v of values) {
    const k = v ?? nullLabel;
    if (k === undefined) continue;
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return [...m.entries()].map(([key, count]) => ({ key, count })).sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
}

const rate = (n: number, d: number) => (d > 0 ? n / d : null);

export function summarizeSpotlightEvents(rows: SpotlightEventRow[]): SpotlightStats {
  const views = rows.filter((r) => r.event === "view" && r.placement === "article");
  const clicks = rows.filter((r) => r.event === "click");
  const outbound = clicks.filter((r) => r.placement === "article" && r.kind && OUTBOUND_KINDS.has(r.kind));
  const impressions = rows.filter((r) => r.event === "impression");
  const cardClickRows = clicks.filter((r) => r.placement !== "article" && r.kind === "article");
  const engaged = rows.filter((r) => r.event === "engaged").length;
  const reads = rows.filter((r) => r.event === "read").length;

  const placements = ["state-card", "city-card", "club-page"];
  const cards = placements
    .map((p) => {
      const i = impressions.filter((r) => r.placement === p).length;
      const c = cardClickRows.filter((r) => r.placement === p).length;
      return { placement: p, impressions: i, clicks: c, ctr: rate(c, i) };
    })
    .filter((c) => c.impressions > 0 || c.clicks > 0);

  const withCountry = views.filter((r) => r.country);
  const times = rows.map((r) => r.created_at).filter((t): t is string => !!t).sort();

  return {
    articleViews: views.length,
    uniqueVisitors: new Set(views.map((r) => r.visitor_hash)).size,
    engaged,
    engagedRate: rate(engaged, views.length),
    reads,
    readRate: rate(reads, views.length),
    outboundClicks: outbound.length,
    clickThroughRate: rate(outbound.length, views.length),
    uniqueClickers: new Set(outbound.map((r) => r.visitor_hash)).size,
    clicksByKind: tally(clicks.map((r) => r.kind)),
    clicksByPlacement: tally(clicks.map((r) => r.placement)),
    cardImpressions: impressions.length,
    cardClicks: cardClickRows.length,
    cardCtr: rate(cardClickRows.length, impressions.length),
    cards,
    clubPageViews: rows.filter((r) => r.event === "view" && r.placement === "club-page").length,
    topReferrers: tally(views.map((r) => r.referrer_host), "direct or unknown"),
    usShare: rate(withCountry.filter((r) => r.country === "US").length, withCountry.length),
    countries: tally(views.map((r) => r.country), "unknown"),
    devices: tally(views.map((r) => r.device), "unknown"),
    firstEvent: times[0] ?? null,
    lastEvent: times[times.length - 1] ?? null,
  };
}

export function pct(v: number | null): string {
  return v === null ? "n/a" : `${Math.round(v * 1000) / 10}%`;
}

/** Plain words for click kinds, for reports a club owner reads. */
export const KIND_WORDS: Record<string, string> = {
  book: "booking page",
  membership: "membership pre-registration",
  website: "website",
  instagram: "Instagram",
  phone: "phone (tap to call)",
  directions: "directions",
  directory: "club page on Padel Courts Finder",
  article: "pinned card to the Spotlight",
};
