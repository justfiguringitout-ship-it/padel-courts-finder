/**
 * Download Google Places photos as static images to eliminate runtime API costs.
 *
 * Photo references expire, so this script:
 * 1. Reads each court's googleMapsPlaceId from padel-courts.ts
 * 2. Fetches a fresh photo reference via Place Details API
 * 3. Downloads the photo via Places Photo API
 * 4. Resizes to 1200px wide at 80% JPEG quality → public/images/courts/{slug}.jpg
 * 5. Updates padel-courts.ts: sets ogImageUrl, removes googlePlacePhotoRef + googleMapsPlaceId
 *
 * Usage: node scripts/download-google-photos.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(ROOT, ".env.local") });

const API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
  process.env.GOOGLE_PLACES_API_KEY ||
  process.env.GOOGLE_GEOCODING_API_KEY;

if (!API_KEY) {
  console.error("No Google API key found. Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local");
  process.exit(1);
}

const COURTS_FILE = path.join(ROOT, "src/data/padel-courts.ts");
const OUTPUT_DIR = path.join(ROOT, "public/images/courts");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractCourts() {
  const src = fs.readFileSync(COURTS_FILE, "utf-8");
  const courts = [];

  // Find each googleMapsPlaceId (always present alongside googlePlacePhotoRef)
  const placeIdRegex = /googleMapsPlaceId:\s*"([^"]+)"/g;
  let match;

  while ((match = placeIdRegex.exec(src)) !== null) {
    const idPos = match.index;
    const placeId = match[1];

    // Look backwards for the name
    const before = src.substring(Math.max(0, idPos - 5000), idPos);
    const nameMatches = [...before.matchAll(/name:\s*"([^"]+)"/g)];
    if (nameMatches.length === 0) continue;

    const name = nameMatches[nameMatches.length - 1][1];
    const slug = generateSlug(name);

    courts.push({ name, slug, placeId });
  }

  return courts;
}

async function getFreshPhotoRef(placeId) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Place Details HTTP ${response.status}`);

  const data = await response.json();
  if (data.status !== "OK" || !data.result?.photos?.length) {
    throw new Error(`No photos found (status=${data.status})`);
  }

  return data.result.photos[0].photo_reference;
}

async function downloadPhoto(photoRef, outputPath) {
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photo_reference=${photoRef}&key=${API_KEY}`;
  const response = await fetch(url, { redirect: "follow" });

  if (!response.ok) throw new Error(`Photo HTTP ${response.status}`);

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) throw new Error(`Not an image: ${contentType}`);

  const buffer = Buffer.from(await response.arrayBuffer());

  await sharp(buffer)
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toFile(outputPath);
}

function updateSourceFile(successfulResults) {
  let src = fs.readFileSync(COURTS_FILE, "utf-8");

  // Only process courts that successfully downloaded — leave failures untouched.
  // Process in reverse source order so positions don't shift.
  const sorted = [...successfulResults].sort((a, b) => {
    const posA = src.indexOf(`name: "${a.name}"`);
    const posB = src.indexOf(`name: "${b.name}"`);
    return posB - posA;
  });

  for (const { name, localPath } of sorted) {
    const nameIdx = src.indexOf(`name: "${name}"`);
    if (nameIdx === -1) {
      console.warn(`  WARN: Could not find name "${name}"`);
      continue;
    }

    const afterName = src.substring(nameIdx);

    // Remove googlePlacePhotoRef line
    const refMatch = afterName.match(/([ \t]*)googlePlacePhotoRef:\s*"[^"]+",?\n/);
    if (refMatch) {
      const absPos = nameIdx + refMatch.index;
      const indent = refMatch[1];

      // Check if there's already an ogImageUrl between name and photoRef
      const blockBetween = src.substring(nameIdx, absPos);
      const hasOgImage = /ogImageUrl:\s*"[^"]+"/.test(blockBetween);

      if (!hasOgImage) {
        // Replace googlePlacePhotoRef with ogImageUrl
        const replacement = `${indent}ogImageUrl: "${localPath}",\n`;
        src = src.substring(0, absPos) + replacement + src.substring(absPos + refMatch[0].length);
      } else {
        // Update existing ogImageUrl
        const ogMatch = blockBetween.match(/ogImageUrl:\s*"[^"]+"/);
        if (ogMatch) {
          const ogAbsPos = nameIdx + ogMatch.index;
          src = src.substring(0, ogAbsPos) +
                `ogImageUrl: "${localPath}"` +
                src.substring(ogAbsPos + ogMatch[0].length);
        }
        // Remove googlePlacePhotoRef (re-find after edit)
        const newNameIdx = src.indexOf(`name: "${name}"`);
        const newAfterName = src.substring(newNameIdx);
        const newRefMatch = newAfterName.match(/([ \t]*)googlePlacePhotoRef:\s*"[^"]+",?\n/);
        if (newRefMatch) {
          const pos = newNameIdx + newRefMatch.index;
          src = src.substring(0, pos) + src.substring(pos + newRefMatch[0].length);
        }
      }
    }

    // Remove googleMapsPlaceId line (re-find name position after edits)
    const updatedNameIdx = src.indexOf(`name: "${name}"`);
    const updatedAfterName = src.substring(updatedNameIdx);
    const placeIdMatch = updatedAfterName.match(/([ \t]*)googleMapsPlaceId:\s*"[^"]+",?\n/);
    if (placeIdMatch) {
      const pos = updatedNameIdx + placeIdMatch.index;
      src = src.substring(0, pos) + src.substring(pos + placeIdMatch[0].length);
    }
  }

  fs.writeFileSync(COURTS_FILE, src);
}

async function main() {
  const courts = extractCourts();
  console.log(`Found ${courts.length} courts with googleMapsPlaceId\n`);

  const successfulResults = [];
  let downloaded = 0;
  let failed = 0;
  let skipped = 0;
  let totalBytes = 0;
  const failures = [];

  for (let i = 0; i < courts.length; i++) {
    const court = courts[i];
    const outputPath = path.join(OUTPUT_DIR, `${court.slug}.jpg`);
    const localPath = `/images/courts/${court.slug}.jpg`;

    // Skip if file already exists
    if (fs.existsSync(outputPath)) {
      const stat = fs.statSync(outputPath);
      totalBytes += stat.size;
      successfulResults.push({ name: court.name, slug: court.slug, localPath });
      skipped++;
      console.log(`[${i + 1}/${courts.length}] SKIP (exists) ${court.name}`);
      continue;
    }

    try {
      const freshRef = await getFreshPhotoRef(court.placeId);
      await downloadPhoto(freshRef, outputPath);

      const stat = fs.statSync(outputPath);
      totalBytes += stat.size;
      downloaded++;
      successfulResults.push({ name: court.name, slug: court.slug, localPath });
      console.log(`[${i + 1}/${courts.length}] OK   ${court.name} (${(stat.size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      failed++;
      failures.push(`${court.name}: ${err.message}`);
      console.log(`[${i + 1}/${courts.length}] FAIL ${court.name}: ${err.message}`);
    }

    // Rate limit: 150ms between courts (2 API calls each)
    if (i < courts.length - 1) {
      await new Promise((r) => setTimeout(r, 150));
    }
  }

  console.log(`\n--- Updating padel-courts.ts (${successfulResults.length} successful) ---`);
  updateSourceFile(successfulResults);

  console.log("\n=== SUMMARY ===");
  console.log(`Total courts processed: ${courts.length}`);
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Skipped (already existed): ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total image size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);

  if (failures.length > 0) {
    console.log(`\nFailed courts:`);
    failures.forEach((f) => console.log(`  - ${f}`));
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
