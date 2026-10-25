/**
 * GET /llms.txt: a short plain-text map of the site for language models,
 * following the llms.txt convention (https://llmstxt.org). Built at deploy
 * time so the club and state counts match the directory data.
 */
import { getSiteStats, getStates } from "@/lib/site-structure";

export const dynamic = "force-static";

const BASE = "https://www.padelcourtsfinder.com";

export function GET() {
  const stats = getSiteStats();
  const states = [...getStates()].sort((a, b) => a.name.localeCompare(b.name));
  const stateLines = states
    .map((s) => `- [Padel courts in ${s.name}](${BASE}/${s.slug}): ${s.courtCount} ${s.courtCount === 1 ? "club" : "clubs"}`)
    .join("\n");

  const text = `# Padel Courts Finder

> A free directory of padel clubs in the United States: ${stats.totalCourts} clubs in ${stats.totalCities} cities across ${stats.totalStates} states, with hours, prices, court counts and booking links checked against each club's own website and booking pages. Also beginner guides, the rules of padel, and gear reviews.

Club details change often. Most club pages say when the details were last verified, and the changelog lists every addition, update and removal.

## Directory

- [Search all padel courts](${BASE}/search): find clubs by location
- [Indoor padel courts](${BASE}/indoor-padel-courts): every US club with indoor or covered courts, by state
- [Changelog](${BASE}/changelog): every change to the directory, month by month

## States

Each state page links to its city pages (${BASE}/<state>/<city>) and to every club page (${BASE}/courts/<club>).

${stateLines}

## Guides and rules

- [Padel rules](${BASE}/rules): scoring, serving and the walls
- [How to play padel](${BASE}/how-to-play)
- [Get started with padel](${BASE}/get-started)
- [Padel lessons](${BASE}/padel-lessons): what lessons involve and what they cost in the US
- [Padel glossary](${BASE}/get-started/glossary)
- [Padel FAQ](${BASE}/faq)
- [State of US Padel 2026](${BASE}/state-of-us-padel-2026): numbers on how padel is growing in the US
- [Blog](${BASE}/blog): city guides to the best padel clubs, plus racket reviews

## Gear

- [Padel equipment guide](${BASE}/equipment)
- [Best padel rackets for beginners](${BASE}/blog/best-padel-rackets-beginners)
- [Best padel rackets for intermediate players](${BASE}/blog/best-padel-rackets-intermediate)
- [Best padel rackets of 2026](${BASE}/blog/best-padel-rackets-2026)
- [Best padel shoes](${BASE}/blog/best-padel-shoes)

## Optional

- [The AI Leaderboard](${BASE}/ai-leaderboard): which AI assistants and search engines send us visitors and which crawlers visit, as first-party daily counts (JSON at ${BASE}/ai-leaderboard.json)
- [About Padel Courts Finder](${BASE}/about)
- [Sitemap](${BASE}/sitemap.xml)
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
