---
name: club-enrichment
description: Enrich existing club listings with verified real data (descriptions, hours, pricing, surfaces, images, socials). Use when asked to enrich club data, fill listing gaps, improve club pages, or work through the enrichment report.
---

# Club Data Enrichment

Club pages are the directory's long-tail engine — each verified field makes a page richer and more rankable. This skill works through gaps found by the audit script.

## Workflow

1. **Generate the current gap list:**
   ```bash
   node scripts/audit-club-data.js
   ```
   Output: `DATA_ENRICHMENT_REPORT.md` with a priority queue (biggest clubs with most gaps first).

2. **Pick a batch** (5–15 clubs from the priority queue).

3. **Research each club — verified sources only, in this order:**
   - The club's own website (WebFetch) — hours, pricing, court count/surface, amenities, socials
   - Their Instagram/Facebook (often fresher than the site)
   - Google Maps listing data if the user provides it
   - NEVER: guesses, other directories' copy (plagiarism + error propagation), or "typical" values

4. **Write fields into `src/data/padel-courts.ts`** following the field-mapping table in `CLAUDE.md`:
   - Unknown stays absent — the UI hides empty sections by design (project rule: never fabricate)
   - `description`: 1–3 sentences, factual, unique per club — mention what's verifiably distinctive
   - `indoorCourts`/`outdoorCourts` only when the split is explicitly stated
   - Photos: only images the club publishes (their site/socials) via `ogImageUrl`; hotlink-blocked images fall back gracefully via ClubImage
   - Prices: quote as printed, into `pricingText`

5. **Verify:** `npm run build` must pass; spot-check one enriched page in the preview.

6. **Commit** with a message listing which clubs were enriched and their sources.

## Current biggest gaps (July 2026 audit)

reviewThemes 44% coverage · courtSurface 47% · pricingText 77% · images 82% · phone 88%. Re-run the script for fresh numbers — don't trust this snapshot.

## Escalation

If a club's website is dead or contradicts our data badly (moved, closed), flag it for status review (`temporarily_closed` or removal + redirect) rather than silently enriching.
