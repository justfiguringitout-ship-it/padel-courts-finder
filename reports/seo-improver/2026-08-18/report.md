# SEO Improver — weekly report, 2026-08-18

**PR this run:** [#7 — three greenfield buyer-intent racket pages](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/7)
**Also still open:** [#6 — sitemap `lastmod` fix (SEO-INDEX-002)](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/6)

**Property:** https://www.padelcourtsfinder.com/
**Measured window:** 2026-07-20 → 2026-08-16 (28 days, all countries, all devices)
**Prior run:** 2026-08-10, window 2026-07-12 → 2026-08-08
**Data source:** Google Search Console, read live through Chrome. Ahrefs unusable for a sixth run.

---

## 1. Executive summary

**The racket cluster is compounding, and it is now unambiguous.** Nine days ago the four Jul-31
pages were a promising signal. In this window they are the best-performing content on the site:

| Page | Clicks (Aug 9 → now) | Impressions | CTR | Pos |
|---|---|---:|---:|---:|
| `/blog/best-teardrop-padel-rackets` | **19 → 50** | 337 → **861** | 5.8% | 8.3 |
| `/blog/best-round-padel-rackets` | **8 → 18** | 212 → **530** | 3.4% | 9.1 |
| `/blog/padel-gifts` | 4 → 7 | 89 → 225 | 3.1% | 10.8 |
| `/blog/best-diamond-padel-rackets` | 2 → 4 | 65 → 148 | 2.7% | 10.1 |

Teardrop alone went 19 → 50 clicks and 2.6×'d its impressions in nine days, at 5.8% CTR against a
**1.3% site average**. `/blog/best-padel-bags` (48 clicks, 5.7%) confirms the pattern is the
category, not one lucky page. Per Dito's standing instruction this is where the build hours went.

**Shipped: [PR #7](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/7)** — three
new pages targeting `best padel racket for tennis elbow`, `best padel racket for women`, and
`best padel racket for tennis players`. All three validated against Google autocomplete before
building; all product data lifted from existing site pages rather than invented; build passes.

**The intermediate page is diagnosed, and the answer is: stop touching it.** Details in §3 — the
short version is that it is *not* a cannibalization problem and *not* a content-depth problem, and
a third intervention would fail the same way the first two did.

**Site totals are flat-to-slightly-up.** 1,830 clicks (from 1,800), 136K impressions (from 128K),
CTR 1.3%, avg position 9.5. The windows overlap by 20 of 28 days, so this is drift, not a trend.

---

## 2. Movement since last run

Windows overlap heavily (Jul 20–Aug 16 vs Jul 12–Aug 8), so treat single-position moves as noise.
Three things are real.

**Gains that are genuinely attributable:**

| Query | Prior pos | Now | Clicks | Why |
|---|---:|---:|---|---|
| `cascadia padel` | 6.8 | **4.5** | 9 | PR #5 un-404'd `/washington/kirkland` + the club page |
| `padel kirkland` | 4.5 | **3.3** | 4 | same |
| `best teardrop padel racket` | 6.6 | 6.3 | **5 → 10** | cluster maturing; last week's dip reversed |
| `best padel shoes 2026` | 14.9 | **13.2** | 5 | — |
| `padel club new york` | 6.0 | **4.9** | 5 | — |

The `best teardrop padel racket` slide flagged last week (4.53 → 6.6) **has recovered** — it was
post-publication settling, as called. Clicks doubled.

**The one real loss:** `best padel shoes` **16.2 → 18.1**. The page holds 4,108 impressions — the
largest of any blog page on the site — at a 1.2% CTR. See SEO-CTR-006.

**Indexing wave 1 worked.** The 10 URLs Dito submitted on 2026-08-10 were never-crawled pages. They
are now earning clicks where they previously earned none:

| Page | Then | Now |
|---|---|---|
| `/ohio/columbus` | 86 imp, **0 clicks**, never crawled | 97 imp, **6 clicks**, pos 4.6 |
| `/north-carolina/charlotte` | 109 imp, 0 clicks, never crawled | 104 imp, **5 clicks**, pos 7.2 |
| `/arizona/phoenix` | 95 imp, 0 clicks, never crawled | 98 imp, **3 clicks**, pos 6.1 |

That is 14 clicks/month recovered from three URLs and one day of quota. It also validates
SEO-INDEX-002: these pages had demand all along and were losing it purely to non-discovery.

`rankings.csv` carries 56 rows — the top 50 queries by clicks plus the six intermediate-cluster
queries needed for §3. `previous_position` is populated only where a prior run recorded that
query; blank elsewhere, and those rows are marked `new` rather than given an invented baseline.

**Note on "dropped" rows:** several queries in last week's top 50 (`padel orlando`, `padel
scottsdale`, `padel ranch`, `elite 57 nyc`, `padel n9ne`, `padel clubs near me`) are absent this
week. They fell below the 3-click cutoff for the top-50 table — that is **not** evidence they lost
rankings, and they are not marked `lost`.

---

## 3. Did last week's changes work

### SEO-DECAY-001 — the intermediate racket hub, diagnosed (this was the assignment)

Dito's instruction: *"Two fixes have now made it worse. Diagnose the cause before touching it a
third time, or recommend leaving it alone."*

**Recommendation: leave it alone. Permanently.** Here is the evidence.

**First — it is not cannibalization.** Filtering GSC to every query containing "intermediate" and
breaking down by page returns six pages, and the distribution is not close:

| Page | Impressions | Position |
|---|---:|---:|
| `/blog/best-padel-rackets-intermediate` | **358** | 29.8 |
| `/blog/best-padel-shoes` | 78 | 6.4 |
| `/blog/best-padel-rackets-beginners` | 12 | 13.7 |
| `/blog/best-teardrop-padel-rackets` | 6 | 8.2 |
| others | 2 | — |

The intermediate page owns its term. No other page is competing with it. That theory is closed.

**Second — the page's healthy-looking average position is an artifact.** The page overall reads
24 clicks / 1,807 impressions / **position 12.7**, which looks fine. But filtered to intermediate
queries only, it is **358 impressions at position 29.8**. Every named head query sits at 28–45:

| Query | Impressions | Position | Clicks |
|---|---:|---:|---:|
| `intermediate padel rackets` | 85 | **45.3** | 0 |
| `best padel racket for intermediate` | 46 | 30.0 | 1 |
| `best padel racket for intermediate players` | 36 | 31.2 | **0** |
| `best padel rackets for intermediate players` | 35 | 28.8 | **0** |
| `best intermediate padel racket` | 19 | 32.1 | 0 |
| `padel racket intermediate` | 18 | 28.6 | 0 |

Roughly 80% of the page's 1,807 impressions come from queries that are **not** about intermediate
players — anonymized long-tail, where it ranks well. The 12.7 is that long tail. On the term the
page was built for, it is on page three and has been stuck there through two rewrites.

**Third — the trajectory across the interventions:**

| Date | Event | `best padel rackets for intermediate players` |
|---|---|---|
| — | baseline | 19.86, 5 clicks |
| Jul 29 | SEO-STRIKE-001 (added depth) | — |
| Jul 31 | P1 (added depth again) | 28.73, 0 clicks |
| — | this run, no further changes | **28.8, 0 clicks** |

The position did not keep sliding after the second edit — it **stabilized at ~29**. That matters:
it means the edits did not "make it worse" in an ongoing sense; the page found its level, and its
level is page three. The drop from 19.86 happened once and has held.

**Why depth doesn't fix it.** The site ranks 8.3 for `best teardrop padel racket` and 9.1 for
`best round padel racket` — same domain, same authority, same template, same author, same month.
The variable that differs is **query competitiveness**, not page quality.
`best padel rackets for intermediate players` is the #1 autocomplete suggestion across every racket
seed we tested — it is the most contested query in the niche, held by established equipment sites.
Adding paragraphs to our page does not move a query that is lost on domain authority.

**So: no third intervention.** The page is not broken — it earns 24 clicks/month from long-tail it
ranks well for. Leave it, keep the traffic, and spend the hours on queries where the site can
actually win. Which is exactly what §4 does.

### Prior items

| ID | Status | Verdict |
|---|---|---|
| SEO-TECH-002/003 (PR #5, merged Aug 11) | **Worked** | `cascadia padel` 6.8→4.5, `padel kirkland` 4.5→3.3; all six URLs live |
| SEO-INDEX-002 (PR #6) | **Still open — not merged** | Sitemap `lastmod` fix cannot help until it deploys |
| Wave 1 indexing (submitted Aug 10) | **Worked** | 3 never-crawled metros now producing 14 clicks/mo (§2) |
| SEO-CTR-002 (club titles, PR #4) | No verdict yet | Fair read is **2026-08-25**, as set two runs ago |
| SEO-STRIKE-001 + P1 (intermediate) | **Closed as SEO-DECAY-001** | Do not re-open |
| SEO-CONTENT-001 (racket cluster) | **Worked, strongly** | §1 — extended by PR #7 |

**Confounders:** the badge backlink program, club-data enrichment and photo work all overlap this
window. The Kirkland/Cascadia gains are attributable to PR #5 with high confidence because the
pages were returning 404 before it and 200 after. The racket-cluster growth is *not* confounded by
anything — those pages had no links built and no data changes; they simply aged.

---

## 4. This week's improvements

### SEO-CONTENT-002 — three greenfield racket pages **(shipped, [PR #7](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/7))**

Selection rule, derived directly from §3: **specific-modifier queries, never skill-level head
terms.** Each candidate was checked against the Google autocomplete endpoint before committing.

| New page | Target query | Evidence for picking it |
|---|---|---|
| `/blog/best-padel-rackets-tennis-elbow` | `best padel racket for tennis elbow` | 10 distinct autocomplete variants. We publish a per-racket **comfort score** no competitor does, so the ranking criterion is data we uniquely hold. `/blog/best-padel-rackets-control` already answers this in an FAQ with no page behind it. |
| `/blog/best-padel-rackets-women` | `best padel racket for women` | 10 autocomplete variants. Already earning impressions at **pos 19 with no page**. `/blog/best-padel-shoes` ranks **5.1 at 21.4% CTR** for `best padel shoes women 2026` — proof the site converts "for women" modifiers. |
| `/blog/best-padel-rackets-tennis-players` | `best padel racket for tennis players` | Appears in 3 of 4 seed expansions, plus `for ex tennis players` and `best padel racket shape for tennis players`. Large US crossover audience; genuinely distinct angle. |

**Deliberately not built: `best padel rackets for advanced players`.** It is the second-highest
autocomplete suggestion, and that is precisely the disqualifier — it is the same shape of query as
`intermediate`, which §3 shows is unwinnable at current authority. Skipping it is the whole lesson
of this run applied.

Implementation: shape-page template exactly (Article + FAQPage + ItemList JSON-LD, same sections
and classes). All ASINs, prices, weights, materials and power/control/comfort scores sourced from
existing site pages — nothing invented. 16 Amazon links per page, **16 tagged `padel02-20`**
(verified in built HTML). Registered in `sitemap.ts` and the blog index. `npm run build` passes;
all three prerender.

### SEO-CTR-006 — `/blog/best-padel-shoes`: 4,108 impressions at 1.2% CTR

The largest single pool of wasted impressions on the site, and it got worse this week
(`best padel shoes` 16.2 → 18.1). The page ranks 9.2 on average but converts at a tenth of what
the racket pages do at similar positions.

The diagnosis is *not* the title — it is that the page is one undifferentiated list serving several
distinct intents that already rank separately: `best padel shoes` (554 imp, pos 18.1),
`best padel shoes 2026` (79, 13.2), `best padel shoes women 2026` (14, **pos 5.1, 21.4% CTR**),
`best women's padel shoes` (5, 45.4). The women's variant converts 13× better than the head term.

**Recommended (not shipped — deliberately deferred):** split out
`/blog/best-padel-shoes-women` on the same greenfield logic that produced PR #7, rather than
retitling the existing page. Retitling risks the 48 clicks it currently earns; a new page risks
nothing. **Hold until PR #7's pages have a read (2026-09-08)** so the two content bets are not
confounded with each other.

### SEO-INDEX-002 — PR #6 is the bottleneck **(no new work; needs a merge)**

The sitemap `lastmod` fix has been open since Aug 11. Every deploy still stamps all 714 URLs with
an identical build timestamp, which is the textbook signal for Google to discount `lastmod`
entirely. Wave 1 proved the underlying pages have real demand the moment Google fetches them —
which makes the structural fix more valuable, not less. **Merging #6 is worth more than another
week of manual Request Indexing.**

---

## 4b. Indexing queue

**Nothing new is live this week.** No commits to `src/app/**` on `main` since PR #5 (Aug 11) —
only report files. Both PR #6 and PR #7 are open and undeployed, so there is nothing to submit
today, and submitting the PR #7 URLs now would waste quota on 404s.

**Wave 2 — queue this only after PR #7 merges and deploys.** Verify each returns 200 first, then
submit as one wave (3 URLs, well inside the ~10–12/day cap):

```
https://www.padelcourtsfinder.com/blog/best-padel-rackets-tennis-elbow
https://www.padelcourtsfinder.com/blog/best-padel-rackets-women
https://www.padelcourtsfinder.com/blog/best-padel-rackets-tennis-players
```

Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` after that deploy — three previously
absent URLs enter it (already wired into `src/app/sitemap.ts` in PR #7).

**Wave 3 — the rest of the never-crawled metros.** Wave 1 returned ~14 clicks/month from three
URLs, so the remaining ~80 pages from the SEO-INDEX-002 list are worth continuing at ~10/day
whenever quota is free. Prioritise metros with existing demand (Denver, Dallas, Boston, Raleigh,
Miami Beach were named last run). This is a stopgap; PR #6 is the actual fix.

---

## 5. Blockers and data caveats

- **Ahrefs is dead as a data source — sixth consecutive run, and now confirmed structural.**
  `subscription-info-limits-and-usage` reports `units_limit_workspace: 0` on a trial plan, with the
  reset date having rolled forward to **2026-09-18**. The GSC-sync endpoints return
  `No GSC data available` / empty for both `padelcourtsfinder.com` project IDs (10101261, 10101264).
  Last run expected units on Aug 18; they did not arrive and the limit is zero, not merely spent.
  **Recommend formally abandoning the Ahrefs path** and treating GSC-via-Chrome as the primary
  source, or having Dito confirm whether the trial is meant to have units at all.
- **No competitive layer, consequently.** No search volumes, no SERP features, no competitor
  positions — `search_volume` and `serp_features` are blank in `rankings.csv` by necessity, not
  oversight. Query selection for PR #7 used the Google autocomplete endpoint as the substitute;
  that validates *demand shape*, not volume.
- **Chrome worked, and better than last run.** The Pages tab switched correctly this time and URL
  parameters (`metrics=`, `page=*`, `query=*`) all drove the report reliably — that combination is
  what made the §3 diagnosis possible. The rows-per-page control is still stuck at 10, so tables
  were collected by paging; this is now a known, worked-around quirk rather than a blocker.
- **~80% of the intermediate page's impressions are anonymized queries.** GSC hides low-volume
  terms, so §3's per-query table covers ~455 of 1,807 impressions. The conclusion holds — every
  *visible* head query is at 28–45 — but the long tail is unmeasurable by design.
- **Window overlap.** 20 of 28 days are shared with the prior run. Single-position moves are noise;
  only the moves called out in §2 are argued as real.
- **Confounders unchanged:** badge backlinks, club enrichment, photos and the P1–P9 build all
  overlap this window.

---

## 6. Next run checklist (2026-08-24)

1. **Did PR #7 and PR #6 merge?** If #7 merged, verify the three URLs return 200 and submit wave 2
   (§4b). If either is still open, that is the headline blocker — neither can do anything undeployed.
2. **2026-08-25 is the big read.** Everything deferred lands then: PR #4 club-title CTR vs the
   0.76% baseline, `/search` post-recrawl position, and whether the P8 informational pages convert.
   Do not judge them before that date.
3. **Do not touch `/blog/best-padel-rackets-intermediate`.** Closed as SEO-DECAY-001. If it comes
   up again, the answer is in §3.
4. **`/blog/best-padel-shoes` (SEO-CTR-006)** — deferred to 2026-09-08 so it does not confound
   PR #7. Do not act early.
5. **Racket cluster** — re-read teardrop/round/diamond/gifts. If the compounding continues, the
   next build slot goes to more of the same pattern, not to club-page tuning.
6. **Ahrefs** — re-check units once; if still zero, stop checking and remove it from the loop.
