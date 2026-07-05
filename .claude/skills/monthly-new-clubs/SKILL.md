---
name: monthly-new-clubs
description: Generate the monthly "New & Upcoming US Padel Clubs" roundup post from directory data and git history. Use when asked to write the monthly new-clubs post, the club roundup, or "this month's padel openings."
---

# Monthly New-Clubs Roundup

A recurring post series: `/blog/new-padel-clubs-<month>-<year>` (e.g. `new-padel-clubs-august-2026`). Its job: capture "new padel club" news queries, give clubs a reason to send us their openings, and feed the freshness signal.

## Sourcing (never invent)

1. **Git history is the change log.** Find clubs added or changed since the last edition:
   ```bash
   git log --since="<last edition date>" -p -- src/data/padel-courts.ts | grep -E '^\+.*name:' 
   ```
   Also diff for `status` changes (`coming_soon` → `'open'` = an opening!).
2. **Coming-soon pipeline:** clubs with `status: 'coming_soon'` in `src/data/padel-courts.ts` are the "on the way" section.
3. **Intake submissions:** new-club form submissions since last edition (Dito forwards these) may include clubs not yet in data — add them to the data file FIRST (per CLAUDE.md field mapping), then feature them.
4. Optional: WebSearch "new padel club opening <month> <year>" to catch launches we missed — verify on the club's own site before adding to data + post.

## Post structure

Use `/blog/padel-racket-shapes-explained/page.tsx` as the brand template (grain bg-court hero, "How-To"-style badge reading "News", byline, Article JSON-LD with the publication date, max-w-3xl).

Sections:
1. **Intro** — one paragraph: N new clubs this month, M in the pipeline, total now X+ (pull live via `getSiteStats()`).
2. **Just opened** — each club: name (linked to `/courts/<slug>`), city/state, court count, one honest line from its data. Skip section if none.
3. **Announced / coming soon** — grouped by state, linked chips or short list.
4. **The number to watch** — one stat from the live data (total clubs, new state entered, etc.).
5. **CTA** — "Opening a club? [List it free](/list-your-court) and it'll be in next month's roundup." + link to `/state-of-us-padel-2026`.

## Registration checklist (every edition)

- [ ] Add slug to `src/app/sitemap.ts` blogPosts array
- [ ] Add entry to `src/app/blog/page.tsx` blogPosts array (category `how-to`, honest excerpt)
- [ ] Update the PREVIOUS edition with a link to the new one ("Read the <month> edition")
- [ ] `npm run build` must pass
- [ ] Note the edition date here for the next run: **Last edition: July 2026** (`new-padel-clubs-july-2026`)

## Rules

- Data comes from `padel-courts.ts` and verified sources only. No invented opening dates, no "reportedly."
- If a month has nothing new, say so honestly and lead with the pipeline — never pad.
