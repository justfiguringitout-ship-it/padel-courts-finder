# SEO Improver — weekly report, 2026-08-09

**Property:** https://www.padelcourtsfinder.com/
**Measured window:** 2026-07-11 → 2026-08-07 (28 days, all countries, all devices)
**Prior run:** 2026-08-03, window 2026-07-02 → 2026-07-29
**Data source:** four manual GSC exports from Dito, all archived here — `gsc-28d-jul11-aug07/`,
`gsc-custom-jul30-aug09/` (isolates the Aug-4 deploy), `gsc-query-padel-court/` (answers
SEO-CTR-005), `gsc-coverage/` (index coverage — **first time this loop has had it**).
Ahrefs and Chrome both still unavailable (§5).

---

## 1. Executive summary

**Site up again, and the growth is still CTR.**

| | Jul 02–29 | Jul 11–Aug 07 | Δ |
|---|---:|---:|---:|
| Clicks | 1,631 | **1,784** | **+153 (+9.4%)** |
| Impressions | 128,825 | 134,119 | +5,294 (+4.1%) |
| CTR | 1.27% | **1.33%** | +0.06pp |

Three findings matter this week, and only one of them is about the thing we shipped.

**1. The shapes cluster is the best thing on the site.** The three racket-shape pages Dito
shipped Jul 31 are nine days old and already converting at **3–5× the site average**:

| Page | Imp | Clicks | CTR | Pos |
|---|---:|---:|---:|---:|
| `/blog/best-teardrop-padel-rackets` | 337 | 19 | **5.64%** | 8.43 |
| `/blog/best-round-padel-rackets` | 212 | 8 | **3.77%** | 8.95 |
| `/blog/padel-gifts` | 89 | 4 | 4.49% | 10.58 |
| `/blog/best-diamond-padel-rackets` | 65 | 2 | 3.08% | 10.54 |
| *(site average)* | | | *1.33%* | |

Greenfield buyer-intent pages with a specific query and no incumbent are the highest-yield
thing this site does. **This is where the next build hours should go** — not into more
club-page tuning.

**2. `padel court` is not a page problem, and the original theory was wrong.** The filtered
export settles it: 1,031 impressions spread across **83 different pages**, 2 clicks. No page
holds more than 16% of it. See §4 — this changes the prescription completely.

**3. The intermediate racket hub is going backwards, after two changes aimed at fixing it.**
`best padel rackets for intermediate players` fell **19.86 → 28.73** and **5 clicks → 0**. The
page itself lost 39% of impressions and 47% of clicks. Both SEO-STRIKE-001 (Jul 29) and P1
(Jul 31) targeted this page. §3 — this is the thing to watch, not the club titles.

**PR #4's club-title change cannot be judged yet and this report does not try.** It deployed
Aug 4; the data ends Aug 7. Google has recrawled a fraction of 263 pages. Numbers in §3.

---

## 2. Movement since last run

**Section-level, 28d vs 28d** (both windows overlap by 19 days, so magnitudes are damped):

| Section | Imp | Clicks | CTR | Pos |
|---|---|---|---|---|
| `/courts/*` | 50,359 → 53,465 | 383 → 407 | 0.76% → **0.76%** | 8.9 → 8.9 |
| `/[state]` | 23,435 → 23,402 | 397 → 402 | 1.69% → 1.72% | 12.3 → 12.4 |
| `/blog/*` (other) | 17,075 → 18,796 | 269 → **337** | 1.58% → **1.79%** | 11.7 → 11.8 |
| `/blog/best-padel-clubs-*` | 17,231 → 16,500 | 209 → 214 | 1.21% → 1.30% | 8.2 → 8.3 |
| `/[state]/[city]` | 14,130 → 14,653 | 219 → 236 | 1.55% → 1.61% | 8.9 → 8.8 |
| `/padel-near/*` | 3,350 → 3,895 | 101 → 121 | 3.01% → **3.11%** | 9.1 → 9.1 |
| `/` (home) | 3,243 → 3,406 | 53 → **67** | 1.63% → **1.97%** | 15.3 → 15.9 |

The blog is carrying the growth: **+68 clicks, +0.21pp CTR** — that's 44% of the site's entire
gain from one section. `/padel-near/*` remains quietly the best-converting section on the site
at 3.11%, and nobody has ever optimised it.

### Query movement

**Gains:** `padel courts nyc` 4.54 → **4.07** (17 clicks, 8.72% CTR) · `padel nyc` 7.75 → 6.99
· `padel courts near me` 7.24 → **6.96** · `best padel shoes` 16.94 → 16.39 (imp 409 → **605**,
clicks 7 → 11) · `padel courts` 9 → 12 clicks.

**Losses:** the intermediate pair, both to zero clicks (§3). `padel courts near me` clicks fell
67 → 56 despite the position *improving* — worth a look next run.

**Devices:** Mobile 1,161 clicks / 74,662 imp / **1.56%** / pos 7.89. Desktop 600 / 54,317 /
1.10% / pos 11.64. Unchanged shape — mobile ranks better and converts better.

---

## 3. Did last week's changes work

### SEO-CTR-002 (club titles) — **no verdict, and it is too early for one**

| Window | Imp | Clicks | CTR | Pos |
|---|---:|---:|---:|---:|
| Jul 02–29 (pre) | 50,359 | 383 | 0.76% | 8.89 |
| Jul 11–Aug 07 (28d, ~3 post-deploy days) | 53,465 | 407 | 0.76% | 8.93 |
| Jul 30–Aug 09 (11d, ~5 post-deploy days) | 18,990 | 124 | 0.65% | 9.05 |

The 5 club pages hand-submitted for recrawl on Aug 9: **0.28% → 0.30%.** Noise.

**Do not read the 0.65% as a failure.** It is a shorter window with a different weekday mix,
and — decisively — a title change only reaches the SERP when Google recrawls *that page*. The
deploy was Aug 4. Three to five days is nowhere near enough for 263 pages. **First fair read
~2026-08-25.** No further club-page changes until then.

### SEO-CTR-001 (state titles) — **risk retired**

`padel courts nyc` was the one query flagged as at-risk from the Jul 29 title change. It went
**4.54 → 4.07, 14 → 17 clicks, 8.09% → 8.72% CTR** across a window with 9 post-change days. It
did not just hold, it improved. Closing this risk.

`/new-york` continues to climb: 7,228 imp, **184 clicks, 2.55%** CTR, pos 8.16 (from
6,863 / 165 / 2.40% / 8.37). Still confounded by badge links and enrichment — and note the page
was already climbing *before* the title shipped, so credit stays unassigned.

### SEO-STRIKE-001 + P1 (racket hubs) — **moving the wrong way**

| Query | Jul 02–29 | Jul 11–Aug 07 |
|---|---:|---:|
| best padel rackets for intermediate players | 19.86 · 5 clicks | **28.73 · 0 clicks** |
| best padel racket for intermediate players | 32.61 · 2 clicks | **37.55 · 0 clicks** |
| best padel rackets for beginners | 27.80 · 2 clicks | 27.18 · 2 clicks |
| best padel racket for beginners | 19.96 · 4 clicks | 19.67 · 2 clicks |

`/blog/best-padel-rackets-intermediate`: **3,083 → 1,876 imp (−39%), 49 → 26 clicks (−47%),
pos 11.21 → 13.15.**

Two on-page changes landed on this page inside three days — SEO-STRIKE-001's spec table and
exact-phrase H2 (Jul 29), then P1's H2 rewrite, new FAQs and freshness stamp (Jul 31) — and the
core query then fell nine more positions.

**This is correlation, not proof.** Post-edit ranking wobble is normal and often recovers, and
the beginners hub — which got the same P1 treatment — is flat rather than falling. But the
direction is wrong and it is the second consecutive window of decline on this query, so it is
now the thing to watch. **Recommendation: change nothing on this page.** Another edit now makes
the next reading uninterpretable too. Re-measure 2026-08-25.

### P8 / P9 (informational rescue + `/search` rebuild) — **no movement yet**

| Page | Imp | Clicks | Pos |
|---|---:|---:|---:|
| `/search` | 1,901 | 5 | **35.01** (was 33.24) |
| `/rules` | 1,631 | 4 | 19.21 |
| `/blog/padel-vs-pickleball` | 923 | **0** | 15.44 |
| `/blog/padel-racket-shapes-explained` | 368 | **0** | 24.07 |
| `/how-to-play` | 368 | **0** | 36.74 |
| `/buy-a-padel-court` | 63 | 0 | 52.43 |

**5,254 impressions returning 9 clicks.** Nine days post-ship and indexing requested Aug 3 —
genuinely too early to call, but `/search` moving 33.2 → 35.0 after a full server-rendered
rebuild is a warning worth naming rather than burying.

---

## 4. This week's improvements

### SEO-CTR-005 — **closed. The hypothesis was wrong, and here is what's actually true**

The filtered export answers the question three reports have been asking. `padel court`,
Jul 30 – Aug 9: **1,031 impressions, 83 distinct pages, 2 clicks.**

| Page | Imp | Share | Pos |
|---|---:|---:|---:|
| `/new-york` | 168 | 16.3% | 8.42 |
| `/california/los-angeles` | 130 | 12.6% | 7.40 |
| `/massachusetts` | 59 | 5.7% | 9.36 |
| `/florida/miami` | 41 | 4.0% | 7.27 |
| `/` (home) | 27 | 2.6% | **32.81** |
| `/search` | 13 | 1.3% | **87.38** |

By section: state hubs 382 · city directories 375 · city guides 117 · club pages 71 ·
`/padel-near` 59 · home 27.

**Google is not ranking a page for `padel court` — it is treating the query as local and
serving whichever geo page matches the searcher's location.** That is why CTR is 0.2%: a user
in Ohio searching "padel court" gets our Massachusetts page.

This cannot be fixed with a title rewrite, which is what the last two reports assumed. The two
pages that *should* own a generic head term are the two ranking worst: home at 32.8 and
`/search` at 87.4. **The real gap is that no page on the site credibly answers the generic
query** — and `/search` (server-rendered since Jul 31, 331 clubs, real geolocation) is the
natural candidate.

**No action this run.** `/search` was rebuilt nine days ago and its recrawl hasn't landed;
changing it again now would waste the experiment. Revisit 2026-08-25 with `/search`'s
post-recrawl position in hand. Logged so no future run re-derives this.

### SEO-CONTENT-001 — **build more shape//buyer-intent pages. Highest-confidence action available**
Evidence in §1. Four pages, nine days old, 3–5× site-average CTR, positions 8–10 with no
incumbent. `best teardrop padel racket`: 5 clicks on 15 impressions (**33% CTR**) at pos 4.53.
The pattern is *specific buyer query + dedicated page + only already-reviewed products*.
Obvious next targets from the query data: `best padel bag` (already 32 clicks / 568 imp /
**5.63%** on `/blog/best-padel-bags` — the pattern working again), `best padel racket for
control` variants, `best padel shoes for women 2026` (3 clicks / 10 imp / 30% CTR, no page).

### SEO-INDEX-001 — **211 pages Google has seen and refused to index** (new — coverage data)
| Reason | Pages |
|---|---:|
| Page with redirect | 192 |
| **Crawled – currently not indexed** | **121** |
| **Discovered – currently not indexed** | **90** |
| **Not found (404)** | **64** |
| Blocked by robots.txt | 1 |
| Duplicate, Google chose different canonical | 1 |
| *Indexed, though blocked by robots.txt* (non-critical) | 1 |

Indexed pages: **617**, not indexed **469** (Aug 6). Indexation grew well over the quarter
(337 on May 10 → 617) but has been **flat at 616–617 since Jul 24** — the seven new pages have
not landed yet, consistent with everything else in this report.

The two actionable buckets: **64 404s** (something links to them — they should 301 or be
removed) and **121 crawled-but-not-indexed** (Google's judgment that the page isn't worth
indexing, typically thin or duplicative — likely the long tail of `/courts/*` and
`/padel-near/*`). Diagnosing these needs the URL-level lists, which the summary export doesn't
carry. **Ask for next run:** in GSC → Indexing → Pages, click into *Not found (404)* and
*Crawled – currently not indexed* and export each.

### SEO-TECH-001 — non-www URLs still ranking (low priority, logged)
17 non-www URLs, **2,080 imp, 10 clicks** (28d). Worst: `padelcourtsfinder.com/courts/padel-social-bethesda`
589 imp at pos 7.43. Non-www correctly 301s (verified last run), so these are consolidating
legacy impressions and probably make up part of the 192 "Page with redirect" bucket. No action.

---

## 4b. Indexing queue

**Nothing new shipped this week** — no commits to `src/app/**` since PR #4 (Aug 4), whose 263
club pages are template changes to already-indexed URLs and are not Request-Indexing candidates.

Last week's queue was worked through in full: Waves 1 and 2 complete (21 URLs), Wave 3 complete
across Aug 8–9 (8 URLs), the 5 highest-impression club pages hand-submitted Aug 9, sitemap
resubmitted. **34 URLs + 5 club pages total.** None of it has surfaced in the data yet, which
is expected at this range.

Sitemap: no resubmission needed — no new URLs this week.

---

## 5. Blockers and data caveats

- **Ahrefs — 0 API units.** Resets **2026-08-18**; the run after next can finally add search
  volumes, SERP features and competitor data.
- **Ahrefs↔GSC sync — dead, fourth consecutive run.** Empty keyword set on project 10101261,
  "No GSC data available" on 10101264. Recommend abandoning this path and formalising the
  manual export workflow, which has now worked twice.
- **Chrome — `navigate` timed out at 300s again.** Known persistent local issue.
- **Measurement depends entirely on Dito's manual exports.** This week's were excellent and the
  unrequested Coverage export produced §SEO-INDEX-001. Keep that one in the weekly set.
- **Window overlap:** 19 of 28 days shared with the prior baseline — directions trustworthy,
  magnitudes are floors.
- **Everything shipped Jul 29 – Aug 4 is under-measured.** PR #3 has ~9 days, P1–P9 have ~9
  days, PR #4 has 3. Only PR #3's `padel courts nyc` risk can be honestly closed.
- **Confounders unchanged and still heavy:** badge backlink program, club enrichment, photos,
  and the P1–P9 build all ran through this window.

### What to export before next run
1. **Standard weekly** — property-wide, Web, Last 28 days: Queries + Pages.
2. **Coverage** — same as this week. It earned its place.
3. **New:** GSC → Indexing → Pages → click into **Not found (404)** and **Crawled – currently
   not indexed**, export each. That unblocks SEO-INDEX-001.

---

## 6. Next run checklist (2026-08-16) and the real read (2026-08-25)

1. **`/blog/best-padel-rackets-intermediate` is the priority.** Did pos 28.73 recover or keep
   falling? If it is still falling by Aug 25, the Jul 29 + Jul 31 edits need reverting or
   rethinking — that page is the #3 page sitewide by impressions.
2. `/search` position — did the P9 rebuild's recrawl finally land? (33.2 → 35.0 so far.)
3. **Club-page CTR vs the 0.76% baseline — but not before ~Aug 25.** Do not judge PR #4 early.
4. Whether the P8 informational pages (`/rules`, `/padel-vs-pickleball`, `/how-to-play`) start
   converting any of their 5,254 impressions.
5. Ahrefs units reset **Aug 18**.
6. Consider shipping 1–2 more buyer-intent pages on the shapes-cluster pattern (SEO-CONTENT-001) —
   the only recommendation this week with clean positive evidence behind it.
