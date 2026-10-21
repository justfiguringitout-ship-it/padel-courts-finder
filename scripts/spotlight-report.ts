/**
 * Club Spotlight report: what a Spotlight delivered, for Dito and the club.
 *
 *   npm run spotlight:report -- <slug> [--since YYYY-MM-DD] [--until YYYY-MM-DD] [--events rows.json] [--no-gsc]
 *
 * Reads public.pcf_spotlight_events (Supabase, service role key from
 * .env.local or the environment; or PCF_SPOTLIGHT_DEV_FILE locally; or a JSON
 * array of exported rows with --events), adds Google Search numbers for the
 * Spotlight URL from ~/.claude/scripts/gsc_query.py, and prints plain text plus
 * a short summary paragraph ready to paste into an email to the club.
 *
 * --since defaults to the Spotlight's publishDate. Plausible keeps its own
 * copy of the clicks and impressions ("Spotlight click", "Spotlight impression").
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import dotenv from "dotenv";
import { getSpotlight } from "../src/lib/spotlight";
import { addDays, formatSpotlightDay, spotlightDay } from "../src/lib/spotlight-dates";
import type { SpotlightEventRow } from "../src/lib/spotlight-events";
import { getSpotlightStore } from "../src/lib/spotlight-store";
import { KIND_WORDS, OUTBOUND_KINDS, pct, summarizeSpotlightEvents, type Count } from "../src/lib/spotlight-stats";
import { getAdaptedCourtBySlug } from "../src/lib/court-adapter";
import { getStates } from "../src/lib/site-structure";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), quiet: true });

const SITE = "sc-domain:padelcourtsfinder.com";
const GSC = path.join(os.homedir(), ".claude/scripts/gsc_query.py");
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i > 0 ? process.argv[i + 1] : undefined;
}

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

interface GscRow {
  keys?: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

function gsc(dimension: "query" | "page", slug: string, start: string): { rows: GscRow[]; period?: { start: string; end: string } } {
  const out = execFileSync(
    "python3",
    [GSC, "query", "--site", SITE, "--dimensions", dimension, "--start-date", start, "--page-contains", `/spotlight/${slug}`, "--limit", "25", "--json"],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 60_000 }
  );
  return JSON.parse(out) as { rows: GscRow[]; period?: { start: string; end: string } };
}

function countLine(list: Count[], words?: Record<string, string>, total?: number): string {
  if (!list.length) return "  (none)";
  return list
    .map((c) => `  ${(words?.[c.key] ?? c.key).padEnd(36)} ${String(c.count).padStart(6)}${total ? `  ${pct(c.count / total).padStart(6)}` : ""}`)
    .join("\n");
}

/** Words for the email summary (the tables use KIND_WORDS). */
const SUMMARY_WORDS: Record<string, string> = { ...KIND_WORDS, phone: "phone number", directions: "directions" };

/** "booking page 37 times, website 12 times and Instagram 5 times" */
function joinKinds(list: Count[]): string {
  const parts = list.map((c) => `${SUMMARY_WORDS[c.key] ?? c.key} ${c.count === 1 ? "once" : `${c.count} times`}`);
  if (parts.length <= 1) return parts.join("");
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

const n = (v: number) => v.toLocaleString("en-US");
const times = (v: number) => `${n(v)} ${v === 1 ? "time" : "times"}`;

async function main() {
  const slug = process.argv[2];
  if (!slug || slug.startsWith("--")) fail("usage: npm run spotlight:report -- <slug> [--since YYYY-MM-DD] [--until YYYY-MM-DD] [--events rows.json] [--no-gsc]");
  const spot = getSpotlight(slug);
  if (!spot) fail(`No spotlight "${slug}" in src/data/spotlights.ts`);

  const since = arg("--since") ?? spot.publishDate;
  const until = arg("--until");
  if (!DAY_RE.test(since) || (until && !DAY_RE.test(until))) fail("--since/--until must be YYYY-MM-DD");
  // Days are New York days; -05:00 is close enough at day granularity for a report.
  const sinceIso = `${since}T00:00:00-05:00`;
  const untilIso = until ? `${addDays(until, 1)}T00:00:00-05:00` : undefined;

  let rows: SpotlightEventRow[];
  const eventsFile = arg("--events");
  let source: string;
  if (eventsFile) {
    rows = (JSON.parse(readFileSync(eventsFile, "utf8")) as SpotlightEventRow[]).filter(
      (r) => r.spotlight_slug === slug && (!r.created_at || (new Date(r.created_at) >= new Date(sinceIso) && (!untilIso || new Date(r.created_at) < new Date(untilIso))))
    );
    source = `rows from ${eventsFile}`;
  } else {
    const store = getSpotlightStore();
    if (!store) fail("No event store: set SUPABASE_SERVICE_ROLE_KEY (and NEXT_PUBLIC_SUPABASE_URL) in .env.local, or pass --events rows.json");
    rows = await store.listEvents(slug, sinceIso, untilIso);
    source = store.kind === "supabase" ? "Supabase pcf_spotlight_events" : `dev file ${process.env.PCF_SPOTLIGHT_DEV_FILE}`;
  }

  const st = summarizeSpotlightEvents(rows);
  const today = spotlightDay();
  const endDay = until ?? today;
  const court = getAdaptedCourtBySlug(spot.clubSlug);
  const stateName = court ? getStates().find((s) => s.code === court.address.stateCode)?.name : undefined;
  const city = court?.address.city;

  // Google Search for the Spotlight URL
  let gscLine = "  skipped (--no-gsc)";
  let gscTotals: { clicks: number; impressions: number; position: number } | null = null;
  let gscQueries: GscRow[] = [];
  if (!process.argv.includes("--no-gsc")) {
    if (!existsSync(GSC)) gscLine = `  not available (${GSC} not found)`;
    else if (since >= addDays(today, -2)) gscLine = "  no data yet (Search Console runs about 2 to 3 days behind)";
    else {
      try {
        const pages = gsc("page", slug, since);
        gscTotals = pages.rows.reduce(
          (t, r) => ({
            clicks: t.clicks + r.clicks,
            impressions: t.impressions + r.impressions,
            position: t.impressions + r.impressions > 0 ? (t.position * t.impressions + r.position * r.impressions) / (t.impressions + r.impressions) : 0,
          }),
          { clicks: 0, impressions: 0, position: 0 }
        );
        gscQueries = gsc("query", slug, since).rows;
        const period = pages.period ? `${pages.period.start} to ${pages.period.end}` : `since ${since}`;
        gscLine =
          `  ${period}: ${n(gscTotals.impressions)} impressions, ${n(gscTotals.clicks)} clicks` +
          (gscTotals.impressions ? `, average position ${gscTotals.position.toFixed(1)}` : "") +
          (gscQueries.length
            ? `\n  top queries:\n${gscQueries
                .slice(0, 10)
                .map((q) => `    ${(q.keys?.[0] ?? "").padEnd(44)} ${String(q.impressions).padStart(5)} impr  ${String(q.clicks).padStart(3)} clicks  pos ${q.position.toFixed(1)}`)
                .join("\n")}`
            : "\n  top queries: none yet (Google hides rare queries)");
      } catch (err) {
        gscLine = `  not available (${err instanceof Error ? err.message.split("\n")[0] : String(err)})`;
      }
    }
  }

  const outboundKinds = st.clicksByKind.filter((c) => OUTBOUND_KINDS.has(c.key));
  const cardWords: Record<string, string> = {
    "state-card": `${stateName ?? "state"} page card`,
    "city-card": `${city ?? "city"} page card`,
    "club-page": "club page card",
  };

  const lines: string[] = [];
  lines.push(`Club Spotlight report: ${spot.clubName}`);
  lines.push(`https://www.padelcourtsfinder.com/spotlight/${spot.slug}  (status: ${spot.status}, published ${spot.publishDate}, pinned until ${spot.pinnedUntil})`);
  lines.push(`Window: ${since} to ${endDay}   Source: ${source}, ${n(rows.length)} events`);
  lines.push("");
  lines.push("Article");
  lines.push(`  Page views                          ${String(st.articleViews).padStart(6)}`);
  lines.push(`  Unique visitors (counted per day)   ${String(st.uniqueVisitors).padStart(6)}`);
  lines.push(`  Engaged (30s+ on page)              ${String(st.engaged).padStart(6)}  ${pct(st.engagedRate).padStart(6)}`);
  lines.push(`  Read 75% or more                    ${String(st.reads).padStart(6)}  ${pct(st.readRate).padStart(6)}`);
  lines.push(`  Outbound clicks                     ${String(st.outboundClicks).padStart(6)}  ${pct(st.clickThroughRate).padStart(6)} of views`);
  lines.push(`  Readers who clicked out             ${String(st.uniqueClickers).padStart(6)}`);
  lines.push("");
  lines.push("Clicks by kind");
  lines.push(countLine(st.clicksByKind, KIND_WORDS));
  lines.push("");
  lines.push("Clicks by placement");
  lines.push(countLine(st.clicksByPlacement));
  lines.push("");
  lines.push("Pinned cards");
  if (st.cards.length) {
    for (const c of st.cards) lines.push(`  ${(cardWords[c.placement] ?? c.placement).padEnd(36)} ${String(c.impressions).padStart(6)} seen  ${String(c.clicks).padStart(4)} clicks  CTR ${pct(c.ctr)}`);
    lines.push(`  ${"All cards".padEnd(36)} ${String(st.cardImpressions).padStart(6)} seen  ${String(st.cardClicks).padStart(4)} clicks  CTR ${pct(st.cardCtr)}`);
  } else lines.push("  (none)");
  lines.push("");
  lines.push(`Club page views on padelcourtsfinder.com in the window: ${st.clubPageViews}`);
  lines.push("");
  lines.push("Top referrers (article views)");
  lines.push(countLine(st.topReferrers.slice(0, 10), undefined, st.articleViews));
  lines.push("");
  lines.push(`Visitors in the US: ${pct(st.usShare)} of views with a known country`);
  lines.push(countLine(st.countries.slice(0, 6), undefined, st.articleViews));
  lines.push("");
  lines.push("Devices (article views)");
  lines.push(countLine(st.devices, undefined, st.articleViews));
  lines.push("");
  lines.push("Google Search (Search Console, Spotlight URL)");
  lines.push(gscLine);

  // Email-ready summary for the club owner (voice-checked template).
  const s: string[] = [];
  s.push(
    `${since === endDay ? `On ${formatSpotlightDay(since)}` : `From ${formatSpotlightDay(since)} to ${formatSpotlightDay(endDay)}`}, your Club Spotlight on Padel Courts Finder was viewed ${times(st.articleViews)} by about ${n(st.uniqueVisitors)} ${st.uniqueVisitors === 1 ? "visitor" : "visitors"}` +
      (st.usShare !== null ? `, ${Math.round(st.usShare * 100)}% of them in the US.` : ".")
  );
  if (st.articleViews > 0)
    s.push(
      `${n(st.engaged)} of those ${st.articleViews === 1 ? "visit" : "visits"} stayed on the page for at least 30 seconds, and ${n(st.reads)} ${st.reads === 1 ? "reader" : "readers"} got at least three quarters of the way through the article.`
    );
  s.push(
    st.outboundClicks > 0
      ? `Readers clicked from the Spotlight to your ${joinKinds(outboundKinds)}, ${n(st.outboundClicks)} ${st.outboundClicks === 1 ? "click" : "clicks"} in all.`
      : "No reader has clicked from the Spotlight to your booking page or website yet."
  );
  const listingCards = st.cards.filter((c) => c.placement === "state-card" || c.placement === "city-card");
  const listingSeen = listingCards.reduce((t, c) => t + c.impressions, 0);
  const listingClicks = listingCards.reduce((t, c) => t + c.clicks, 0);
  if (listingSeen > 0) {
    const where = [stateName, city].filter(Boolean).join(" and ");
    s.push(
      `The pinned cards on our ${where || "state and city"} pages were seen ${times(listingSeen)} and sent ${n(listingClicks)} ${listingClicks === 1 ? "reader" : "readers"} to the Spotlight.`
    );
  }
  if (st.clubPageViews > 0) s.push(`Your club's own page on our site was viewed ${times(st.clubPageViews)} over the same days.`);
  if (gscTotals)
    s.push(
      gscTotals.impressions > 0
        ? `In Google Search, the Spotlight appeared ${times(gscTotals.impressions)} and was clicked ${times(gscTotals.clicks)}.`
        : "Google has not shown the Spotlight in search results yet, which is normal for a new page in its first weeks."
    );

  lines.push("");
  lines.push("Summary for the club (paste into the email)");
  lines.push("");
  lines.push(s.join(" "));
  console.log(lines.join("\n"));
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
