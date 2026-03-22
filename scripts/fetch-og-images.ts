/**
 * Fetch OG images from court websites
 *
 * Reads all courts from padel-courts.ts, fetches each website's HTML,
 * extracts og:image or twitter:image meta tags, and saves results to og-images.json.
 *
 * Usage: npx tsx scripts/fetch-og-images.ts
 */

import * as fs from "fs";
import * as path from "path";

// We need to extract courts from the TS source since we can't import it directly
// (it uses path aliases). Parse the export manually.
const COURTS_FILE = path.resolve(__dirname, "../src/data/padel-courts.ts");
const OUTPUT_FILE = path.resolve(__dirname, "og-images.json");

interface CourtBasic {
  id: number;
  name: string;
  website?: string;
  city: string;
  state: string;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Extract court data from the TS source file using regex.
 * We only need id, name, website, city, state.
 */
function extractCourts(): CourtBasic[] {
  const src = fs.readFileSync(COURTS_FILE, "utf-8");
  const courts: CourtBasic[] = [];

  // Match each court object block
  const courtBlockRegex = /\{\s*id:\s*(\d+),\s*\n\s*name:\s*"([^"]+)"[\s\S]*?(?=\n\s*\{?\s*id:\s*\d+,|\n\];)/g;

  // Simpler approach: split by "id:" and extract fields
  const blocks = src.split(/(?=\{\s*\n?\s*id:\s*\d+)/);

  for (const block of blocks) {
    const idMatch = block.match(/id:\s*(\d+)/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const cityMatch = block.match(/city:\s*"([^"]+)"/);
    const stateMatch = block.match(/state:\s*"([^"]+)"/);
    const websiteMatch = block.match(/website:\s*"([^"]+)"/);

    if (idMatch && nameMatch && cityMatch && stateMatch) {
      courts.push({
        id: parseInt(idMatch[1]),
        name: nameMatch[1],
        city: cityMatch[1],
        state: stateMatch[1],
        website: websiteMatch ? websiteMatch[1] : undefined,
      });
    }
  }

  return courts;
}

/**
 * Extract OG image URL from HTML
 */
function extractOgImage(html: string, baseUrl: string): string | null {
  // Try og:image first
  const ogMatch = html.match(/<meta\s+[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*\/?>/i)
    || html.match(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["'][^>]*\/?>/i);

  if (ogMatch) {
    return resolveUrl(ogMatch[1], baseUrl);
  }

  // Fallback: twitter:image
  const twitterMatch = html.match(/<meta\s+[^>]*(?:name|property)=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*\/?>/i)
    || html.match(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*(?:name|property)=["']twitter:image["'][^>]*\/?>/i);

  if (twitterMatch) {
    return resolveUrl(twitterMatch[1], baseUrl);
  }

  return null;
}

/**
 * Resolve relative URLs against base domain
 */
function resolveUrl(url: string, baseUrl: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  try {
    return new URL(url, baseUrl).href;
  } catch {
    return url;
  }
}

/**
 * Fetch a URL with timeout and redirect following
 */
async function fetchWithTimeout(url: string, timeoutMs: number = 10000): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PadelCourtsFinder/1.0)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Delay helper
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Extracting courts from padel-courts.ts...");
  const courts = extractCourts();
  console.log(`Found ${courts.length} total courts\n`);

  const courtsWithWebsite = courts.filter((c) => c.website);
  console.log(`Courts with website: ${courtsWithWebsite.length}`);
  console.log(`Courts without website: ${courts.length - courtsWithWebsite.length}\n`);

  const results: Record<string, string> = {};
  let found = 0;
  let failed = 0;
  let noImage = 0;

  for (let i = 0; i < courtsWithWebsite.length; i++) {
    const court = courtsWithWebsite[i];
    const slug = generateSlug(court.name);
    const progress = `[${i + 1}/${courtsWithWebsite.length}]`;

    try {
      const html = await fetchWithTimeout(court.website!);
      const imageUrl = extractOgImage(html, court.website!);

      if (imageUrl) {
        // Basic validation: must look like an image URL or be a reasonable URL
        if (imageUrl.length > 10 && imageUrl.startsWith("http")) {
          results[slug] = imageUrl;
          found++;
          console.log(`${progress} ✓ ${court.name}: ${imageUrl.substring(0, 80)}...`);
        } else {
          noImage++;
          console.log(`${progress} ○ ${court.name}: invalid image URL skipped`);
        }
      } else {
        noImage++;
        console.log(`${progress} ○ ${court.name}: no OG image found`);
      }
    } catch (err: unknown) {
      failed++;
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`${progress} ✗ ${court.name}: ${msg}`);
    }

    // Be polite: 1 second delay between requests
    if (i < courtsWithWebsite.length - 1) {
      await delay(1000);
    }
  }

  // Write results
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));

  console.log("\n========== RESULTS ==========");
  console.log(`Total courts:        ${courts.length}`);
  console.log(`Courts with website: ${courtsWithWebsite.length}`);
  console.log(`OG images found:     ${found}`);
  console.log(`No image on page:    ${noImage}`);
  console.log(`Fetch failures:      ${failed}`);
  console.log(`\nResults saved to: ${OUTPUT_FILE}`);
}

main().catch(console.error);
