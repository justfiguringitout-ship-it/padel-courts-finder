---
name: seo-improver
description: Weekly SEO ranking loop for padelcourtsfinder.com — measure rankings from GSC, prioritize high-leverage improvements, verify last week's changes moved the needle, write a dated report + rankings.csv, and optionally open a PR with the highest-confidence on-page fixes.
---

# SEO Improver — weekly ranking loop

<!-- project-config -->
Search Console property: https://www.padelcourtsfinder.com/ (user dito.calderon@gmail.com)
Project domain: padelcourtsfinder.com
Tracked keywords: derive from the domain's own ranked GSC queries each run, ALWAYS including these seeds:
  padel courts near me, padel near me, best padel racket, best padel racket for beginners,
  padel courts [top-10 metro cities by clicks], padel court cost, what is padel,
  padel vs pickleball, padel racket review, indoor padel courts
Site repo: /Users/dito/padel-directory-2 (GitHub: justfiguringitout-ship-it/padel-courts-finder)
Content paths: src/app/blog/ (guides, TSX), src/app/[state]/, src/data/padel-courts.ts (club data)
Write mode: PR-only. NEVER push SEO changes to main from this loop; main auto-deploys to prod.
<!-- /project-config -->

You run on a loop: measure where the site ranks, decide what to change to climb, hand back
specific changes, and next week check whether the last changes moved the needle. You do not
guess at rankings; you read them from data. You do not smooth over losses; if a page slipped,
say so and why you think it happened.

## Data sources (try in this order; never fabricate)

1. **Ahrefs MCP (`mcp__*ahrefs*` / gsc-* tools)** — if connected AND has API units
   (check `subscription-info-limits-and-usage` first). Gives GSC keywords/pages/history +
   competitive SERP (`serp-overview`, `site-explorer-organic-keywords`, `keywords-explorer-*`).
   This is the preferred, fully-headless path.
2. **Google Search Console via the user's Chrome** (`mcp__claude-in-chrome__*`) — drive
   https://search.google.com/search-console (property above), Performance report:
   queries + pages with clicks/impressions/CTR/position, last 28 days vs previous period.
   Export via the UI table (read_page/get_page_text), not screenshots. Only works when the
   user's Chrome is reachable (interactive sessions).
3. **Neither available** → STOP the measurement phase and write a report that states the
   blocker plainly (which source failed and why), plus whatever you CAN verify without
   rankings data (build health, indexability spot-checks with curl). Never invent positions.

Competitive layer (who outranks us and why) is Ahrefs-only. When Ahrefs is unavailable,
skip it and say so under "Blockers" — do not model or guess competitor data.

Lightweight checks: use Bash (`curl -sI`, node) for HTTP status, titles, canonical tags,
and parsing. Keep every check read-only against the live site: no form submissions, no
mutation, respect robots.

## State and the loop

Persist each run under `reports/seo-improver/<YYYY-MM-DD>/` in the repo. At run start, read
the most recent prior run directory. That prior report is the baseline: compute deltas, and
check whether last run's recommendations were applied (was the PR merged? did the file change
land?) and whether the target keyword's position responded. If no prior run exists, declare
this the baseline run.

**Attribution caveat (this project):** badge-program backlinks, press outreach, club-data
enrichment, and new content ship in parallel with this loop. When a ranking moves, consider
those confounders before crediting a recommendation; note plausible alternates in the report.

## Each run

1. Confirm property, domain, tracked keywords (seeds + top ~50 GSC queries by impressions),
   locale = US / all devices (note mobile vs desktop splits when they diverge).
2. Pull performance for tracked queries and pages: clicks, impressions, CTR, avg position,
   last 28 days vs the previous 28. If Ahrefs has units, also pull the live SERP for the
   top-10 target keywords.
3. Compute movement vs the prior run: gained / lost / new / dropped / flat. Flag anything
   that fell out of the top 100 or lost >30% of clicks.
4. Rank opportunities by realistic upside:
   - **Striking distance**: queries at position ~4–20 where one focused change can win
     page-1/top-3. Confirm against the live SERP when Ahrefs is available.
   - **High impressions, low CTR**: rewrite title/meta to win the click without new rankings.
   - **Cannibalization**: multiple own pages competing for one query (common risk here:
     /padel-near/[city] vs /[state]/[city] vs city-guide blogs) — pick the canonical winner,
     recommend consolidation or internal-link/title differentiation.
   - **Decay**: pages whose clicks/position fell; diagnose (staleness, SERP change, intent
     shift, lost links) before prescribing.
5. For each opportunity acted on: open the ranking URL, inspect on-page signals (title, meta,
   h1, schema, internal links in), and write a **specific ready-to-apply change** — the exact
   title/meta text, the section to add, the internal links to add and from which pages.
   Tie every recommendation to the ranking evidence that motivates it.
6. Verify last run's loop: for each prior recommendation ID, state applied / not applied and
   the ranking response. Keep what worked; drop or revise what did not.

## Output

Write both artifacts under `reports/seo-improver/<YYYY-MM-DD>/`, then commit them to main
(reports only — never site code) with message `seo-improver: weekly report <date>`.

- `rankings.csv`:
  ```csv
  keyword,location,device,position,previous_position,delta,ranking_url,search_volume,serp_features,status
  ```
  `status` ∈ gained|lost|new|dropped|flat. `delta` positive = moved toward #1.
  `search_volume` and `serp_features` blank when Ahrefs is unavailable (GSC lacks them).
  Blank `previous_position` on the baseline run.

- `report.md`:
  1. Executive summary — net movement + the single most important action.
  2. Movement since last run — biggest gains/losses, new/lost keywords.
  3. Did last week's changes work — per prior ID: applied? ranking response? confounders?
  4. This week's improvements — ordered, each with exact change, target keyword/URL,
     expected effect, evidence. Stable IDs: `SEO-STRIKE-###`, `SEO-CTR-###`,
     `SEO-CANNIBAL-###`, `SEO-DECAY-###` (never reuse an ID for a different issue).
  5. Blockers and data caveats — anything unavailable, rate-limited, or unmeasured.

Keep the action list short and high-conviction (3–7 items). A focused list that gets
applied beats an exhaustive one that gets ignored.

## Applying changes (PR flow — this repo is configured for it)

This site is Next.js/TSX, not Markdown: titles/metas live in each page's exported
`metadata` object (or `generateMetadata`), headings and copy in the TSX. Only apply
changes that map cleanly to a specific file; skip anything you cannot ground.

1. Take the 1–4 highest-confidence recommendations (title/meta rewrites, heading tweaks,
   internal links, small sections).
2. Branch `seo-improver/<YYYY-MM-DD>`, edit the TSX, match existing style, `npm run build`
   MUST pass.
3. `gh pr create` — title with the issue IDs; body lists each change, target keyword/URL,
   expected effect, evidence. NEVER push to main, never merge, never force-push.
4. Record the PR URL in report.md; next run checks whether it merged and what happened.

One branch + PR per run. If `gh` is unauthorized, fall back to report-only and say so.

## Notify

End every run by telling the user: net movement, the #1 action, the PR link (if any), and
what was blocked. If running non-interactively, this goes in the final message/notification.
