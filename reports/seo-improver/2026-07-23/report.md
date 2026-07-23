# SEO Improver — weekly report, 2026-07-23

**Property:** https://www.padelcourtsfinder.com/
**Window:** 2026-06-23 → 2026-07-20 (28 days, US, all devices)
**Data source:** Google Search Console UI via Chrome (Ahrefs unavailable — see Blockers)
**Prior run:** none. **This is the baseline run.**

---

## 1. Executive summary

Site-wide, last 28 days: **1,350 clicks / 114,000 impressions / 1.2% CTR / avg position 9.4.**

The site's problem is not rankings — it is **CTR at the positions it already holds**. An average
position of 9.4 against a 1.2% CTR is roughly a third of what position ~9 normally earns. We are
sitting on ~114k impressions and converting 1.2% of them.

Two structural causes, both fixable on-page:

1. **Head terms we rank for but do not deserve the click on.** `padel court` alone: 2,936
   impressions, 10 clicks, **0.3% CTR at position 9.0**. Same shape on `padel courts` (806 / 0.9%),
   `padel club` (525 / 0.2%), `mink padel` (544 / 0.6%), `austin padel center` (501 / 0.4%). These
   are ~5,700 impressions returning 21 clicks.
2. **The two highest-impression money pages rank on page 2–3 for their own core term.** The
   beginner racket guide takes 3,735 impressions but ranks **21.1** for "best padel racket for
   beginners" and **25.4** for the plural. The intermediate guide takes 4,267 impressions and ranks
   **16.0** for its core term — while earning an **8.9% CTR** there, which is exceptional and says
   the title is fine and rank is the only thing limiting it.

**The single most important action:** push
`/blog/best-padel-rackets-intermediate` from position 16 into the top 10. It is a monetized
affiliate page, it already converts impressions to clicks at 8.9% from position 16, and it is the
shortest distance between the site and revenue. Everything else on this list is worth less.

---

## 2. Movement since last run

No prior run exists — no deltas can be computed. All 67 tracked keywords in `rankings.csv` are
marked `new` and `previous_position` is blank by definition. Next week's run will produce real
week-over-week movement against this file.

**Baseline shape worth carrying forward:**

Top pages by clicks (28d):

| Page | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| /new-york | 121 | 6,640 | 1.8% | 8.9 |
| /blog/best-padel-rackets-intermediate | 59 | 4,267 | 1.4% | 10.4 |
| / (homepage) | 46 | 3,073 | 1.5% | 14.9 |
| /florida/fort-lauderdale | 38 | 839 | 4.5% | 5.5 |
| /blog/best-padel-rackets-beginners | 33 | 3,735 | 0.9% | 11.2 |
| /blog/best-padel-clubs-phoenix | 31 | 1,535 | 2.0% | 6.3 |
| /connecticut | 28 | 431 | 6.5% | 7.2 |
| /courts/padel-956 | 27 | 1,884 | 1.4% | 4.4 |
| /california | 25 | 1,261 | 2.0% | 9.4 |
| /blog/best-padel-clubs-san-francisco | 23 | 1,821 | 1.3% | 7.6 |
| /blog/best-padel-rackets-2026 | 23 | 1,587 | 1.4% | 10.6 |
| /california/los-angeles | 16 | 2,079 | 0.8% | 12.1 |

Note the contrast: `/connecticut` earns **6.5% CTR** at position 7.2 and `/florida/fort-lauderdale`
**4.5%** at 5.5, while `/new-york` earns **1.8%** at 8.9 and `/california/los-angeles` **0.8%** at
12.1. The small-state pages are doing their job. The big-metro pages are not.

---

## 3. Did last week's changes work

Not applicable — baseline run, no prior recommendation IDs to verify.

---

## 4. This week's improvements

Ordered by expected value. Four items, no PR opened this run (see Blockers).

### SEO-STRIKE-001 — Push the intermediate racket guide from 16 → top 10
**Target:** `best padel rackets for intermediate players` (pos 16.0, 90 impr, 8.9% CTR)
plus the singular `best padel racket for intermediate players` (pos 27.7, 52 impr, 3.8% CTR)
**URL:** `/blog/best-padel-rackets-intermediate` — `src/app/blog/best-padel-rackets-intermediate/page.tsx`

**Evidence:** 8.9% CTR at position 16 is roughly 3× the positional average. Searchers who see this
result want it. The page pulls 4,267 impressions overall at avg position 10.4, so the domain-level
signal is there; the specific term is what lags. The singular variant sitting 11 positions lower
than the plural indicates the exact phrase is thin in the body copy.

**Exact change:**
- Keep the current title (`Best Padel Rackets for Intermediate Players (2026) — Top 5 Upgrades`).
  It is earning 8.9%; do not touch it.
- Add a spec comparison table above the first pick — columns: Racket, Shape, Weight, Balance,
  Core, Surface, Price. Comparison tables are the format that wins this SERP.
- Add an H2 using the singular phrasing verbatim: `How we picked the best padel racket for
  intermediate players`, followed by 100–150 words of criteria (weight range, balance, carbon
  grade, price ceiling). This closes the singular/plural gap without keyword stuffing.
- Add internal links **into** this page from `/equipment`, `/blog/best-padel-rackets-beginners`
  ("ready to upgrade? → intermediate rackets"), and `/blog/best-padel-rackets-2026`, with the
  anchor text `best padel rackets for intermediate players`.

**Expected effect:** position 16 → 8–11 within 3–4 weeks. At 8.9% CTR held, that is roughly
+40–60 clicks/mo on a monetized page, plus lift on the singular variant.

---

### SEO-STRIKE-002 — Rescue the beginner racket guide from page 3
**Target:** `best padel racket for beginners` (pos 21.1), `best padel rackets for beginners`
(pos 25.4), `best beginner padel racket` (pos 17.7)
**URL:** `/blog/best-padel-rackets-beginners` — `src/app/blog/best-padel-rackets-beginners/page.tsx`

**Evidence:** This page takes **3,735 impressions** — more than the intermediate guide's core term
— but converts **0.9%**, and its three core queries all sit on page 2–3. Two of the three are
declared seed keywords for this project. The intermediate sibling ranks 5–9 positions better on an
equivalent term, which suggests the difference is page depth, not domain authority.

**Exact change:**
- Same spec-comparison-table treatment as SEO-STRIKE-001.
- Add a `Padel racket buying guide for beginners` H2 covering the three questions beginners
  actually search alongside this: what shape (round vs teardrop), what weight, and how much to
  spend on a first racket. Currently the page goes straight to picks.
- Add an FAQ block with `FAQPage` schema targeting: "What padel racket should a beginner buy?",
  "How much should I spend on my first padel racket?", "Round or teardrop for beginners?"
- Internal links in from `/how-to-play`, `/equipment`, and `/faq` with anchor
  `best padel racket for beginners`.

**Expected effect:** 21 → 12–15 in 4–6 weeks. Slower than STRIKE-001 because the gap is larger;
worth doing because the impression pool is the biggest on the site outside /new-york.

---

### SEO-CTR-001 — Differentiate the /new-york title from the state-page template
**Target:** `padel nyc` (pos 7.8, 973 impr, **1.7% CTR**), `padel new york` (pos 8.7, 336 impr,
**0.6%**), `padel in new york` (pos 7.7, 58 impr, 3.4%)
**URL:** `/new-york` — title generated in `src/app/[state]/page.tsx` (`generateMetadata`)

**Evidence:** `/new-york` is the site's biggest page (121 clicks, 6,640 impressions) and converts
at only 1.8%. The tell is internal: `padel courts nyc` earns **7.1% CTR at position 4.8** while
`padel nyc` earns **1.7% at 7.8** — same page, same user, different phrasing. When the query says
"courts", our directory-style title matches; when it says "padel nyc", it does not. Meanwhile
`/connecticut` hits 6.5% with the identical template, because low-competition SERPs are forgiving
and the NYC SERP is not.

**Exact change:** in `generateMetadata` in `src/app/[state]/page.tsx`, special-case the
high-impression states (New York, California, Florida, Texas, Illinois) away from the generic
`${courtCount} Best Padel Courts in ${state.name} | Find Padel Near Me` template toward a
guide-shaped title, e.g. `Padel in New York: ${courtCount} Clubs & Courts (2026 Guide)` with
description `Every padel club in New York — NYC, Brooklyn, Long Island and upstate. Court counts,
prices, booking links, and what it costs to play.`

**Expected effect:** 1.8% → ~3% on 6,640 impressions is roughly **+80 clicks/mo** from a single
metadata change, with no ranking movement required. Cheapest win on this list.
**Risk:** dropping "Padel Courts in New York" from the title could cost position on
`padel courts nyc` (currently 4.8 / 7.1%). Keep "Courts" in the title as written above, and check
that query specifically next run.

---

### SEO-CANNIBAL-001 — Three page families competing for the same city query
**Target:** `padel chicago` (9.4), `padel in chicago` (8.5), `padel club chicago` (4.8),
`padel san francisco` (8.5), and the equivalent set for LA, Miami, Phoenix
**URLs:** `/[state]/[city]`, `/blog/best-padel-clubs-[city]`, `/padel-near/[city]`

**Evidence:** Chicago is the clearest case — `/blog/best-padel-clubs-chicago` takes 1,780
impressions at position 8.0 and `/illinois/chicago` takes 607 at position 7.8. Two of our own
pages are splitting one query set, and neither reaches the top 5. Same pattern for San Francisco
(blog: 1,821 impr / 7.6) and Los Angeles (`/california/los-angeles`: 2,079 impr / **12.1**, worst
position of any top-25 page). All three families currently use near-identical title patterns.

**Exact change (no redirects this run — this is a titling/linking fix):**
- Declare `/[state]/[city]` the canonical winner for `padel <city>` and `padel courts <city>`.
- Re-angle the blog guides to editorial intent: change titles from `Best Padel Clubs in <City>`
  to `The <N> Best Padel Clubs in <City>, Ranked (2026)` and lead the description with
  price/vibe/level rather than "find courts", so they stop matching the directory query.
- Add a reciprocal link pair: directory page → "See our ranked picks for <City>"; blog guide →
  "Full <City> directory: all N clubs".
- Do **not** 301 anything yet. Re-measure next run; if the split persists, consolidate then.

**Expected effect:** consolidation of one page's impressions onto the other, targeting top-5 for
`padel chicago` / `padel san francisco` within 6–8 weeks. Lower confidence than the three above —
this is the one to verify before extending it across all metros.

---

### Not recommended, deliberately

**Chasing `padel court` (2,936 impressions, 0.3% CTR, pos 9.0).** It looks like the biggest
opportunity on the site and it is a trap. That query is dominated by informational intent — court
dimensions, construction cost, what a padel court is — not "find one near me". Rewriting the
homepage title to capture it would put `padel courts near me` at risk, which is our single best
term (60 clicks, 4.8% CTR). The right response is a **new page** serving that intent (padel court
dimensions, cost to build, indoor vs outdoor), not a metadata change to an existing one. Logged
here as a content gap for a future run rather than an action this week.

---

## 5. Blockers and data caveats

- **Ahrefs MCP unusable this run.** The connector authenticates and `management-projects` returns
  the Padelcourtsfinder projects (IDs 10101261 / 10101264), but:
  - Site Explorer calls fail with `API units limit reached. Expected usage: 1500, API units left: 0`
    — the workspace is on a trial with `units_limit_workspace: 0`, resetting **2026-08-18**.
  - The GSC integration inside Ahrefs returns `No GSC data available for the requested date range`
    on project 10101264 and an empty result set on 10101261, so the headless GSC path is dead too.
  - **Consequence:** no `search_volume`, no `serp_features`, and **no competitive layer at all** —
    who outranks us on the striking-distance terms is unmeasured this run. Those CSV columns are
    intentionally blank rather than estimated.
- **`gh` CLI is not installed** on this machine (`command not found: gh`), so no PR was opened.
  Per the skill's fallback, this run is **report-only**. The four recommendations above are
  specified precisely enough to apply by hand or on the next run once `gh` is available.
  No site code was modified and nothing was pushed to `main` except this report.
- **`ranking_url` is partially blank in `rankings.csv` by design.** GSC's query and page tables
  were read separately; per-query URL attribution requires filtering each query individually.
  URLs are filled only where the query→page mapping is unambiguous (branded club queries, racket
  guides, state/city pages). Blank means "not verified", not "no page".
- **Rows-per-page could not be raised above 10** in the GSC UI through automation, so the query
  set was collected by pagination — 67 queries by clicks and by impressions, against a reported
  total of 1,000. Deep-tail queries below ~2 clicks are not in this baseline.
- **Attribution caveat carried forward:** the badge backlink program (42 clubs contacted in wave 1),
  club-data enrichment, and new photo/gallery work all shipped into this measurement window.
  Any movement next run must be weighed against those before crediting a recommendation here.
