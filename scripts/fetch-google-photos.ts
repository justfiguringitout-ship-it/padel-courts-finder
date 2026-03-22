/**
 * Fetch Google Places photos for courts missing OG images
 *
 * Uses the Google Places Text Search + Place Details APIs to find
 * photo_references for courts that don't already have an ogImageUrl.
 *
 * Usage: npx tsx scripts/fetch-google-photos.ts
 *
 * Requires GOOGLE_PLACES_API_KEY in .env.local or as environment variable.
 * Falls back to GOOGLE_GEOCODING_API_KEY or NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
 */

import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const API_KEY =
  process.env.GOOGLE_PLACES_API_KEY ||
  process.env.GOOGLE_GEOCODING_API_KEY ||
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!API_KEY) {
  console.error("No Google API key found. Set GOOGLE_PLACES_API_KEY in .env.local");
  process.exit(1);
}

const COURTS_FILE = path.resolve(__dirname, "../src/data/padel-courts.ts");
const OUTPUT_FILE = path.resolve(__dirname, "google-photos.json");

interface CourtBasic {
  id: number;
  name: string;
  city: string;
  state: string;
  hasOgImage: boolean;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractCourts(): CourtBasic[] {
  const src = fs.readFileSync(COURTS_FILE, "utf-8");
  const courts: CourtBasic[] = [];
  const blocks = src.split(/(?=\{\s*\n?\s*id:\s*\d+)/);

  for (const block of blocks) {
    const idMatch = block.match(/id:\s*(\d+)/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const cityMatch = block.match(/city:\s*"([^"]+)"/);
    const stateMatch = block.match(/state:\s*"([^"]+)"/);
    const hasOgImage = /ogImageUrl:\s*"/.test(block);

    if (idMatch && nameMatch && cityMatch && stateMatch) {
      courts.push({
        id: parseInt(idMatch[1]),
        name: nameMatch[1],
        city: cityMatch[1],
        state: stateMatch[1],
        hasOgImage,
      });
    }
  }
  return courts;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface PlaceSearchResult {
  place_id: string;
  name: string;
}

interface PhotoRef {
  photo_reference: string;
  width: number;
  height: number;
}

async function textSearch(query: string): Promise<PlaceSearchResult | null> {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK" || !data.results?.length) {
    return null;
  }

  return {
    place_id: data.results[0].place_id,
    name: data.results[0].name,
  };
}

async function getPhotoRef(placeId: string): Promise<PhotoRef | null> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos,name&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK" || !data.result?.photos?.length) {
    return null;
  }

  const photo = data.result.photos[0];
  return {
    photo_reference: photo.photo_reference,
    width: photo.width || 1200,
    height: photo.height || 800,
  };
}

interface PhotoResult {
  slug: string;
  placeId: string;
  photoRef: string;
  placeName: string;
}

async function main() {
  console.log("Extracting courts from padel-courts.ts...");
  const allCourts = extractCourts();
  const courtsNeedingPhotos = allCourts.filter((c) => !c.hasOgImage);

  console.log(`Total courts: ${allCourts.length}`);
  console.log(`Already have OG image: ${allCourts.length - courtsNeedingPhotos.length}`);
  console.log(`Need photos: ${courtsNeedingPhotos.length}\n`);

  const results: PhotoResult[] = [];
  let found = 0;
  let notFound = 0;
  let errors = 0;
  let textSearchCalls = 0;
  let detailsCalls = 0;

  for (let i = 0; i < courtsNeedingPhotos.length; i++) {
    const court = courtsNeedingPhotos[i];
    const slug = generateSlug(court.name);
    const progress = `[${i + 1}/${courtsNeedingPhotos.length}]`;

    try {
      // Step 1: Text Search to find the place
      const query = `${court.name} padel ${court.city} ${court.state}`;
      const place = await textSearch(query);
      textSearchCalls++;

      if (!place) {
        // Try without "padel" in case the name already has it
        const fallbackQuery = `${court.name} ${court.city} ${court.state}`;
        const fallbackPlace = await textSearch(fallbackQuery);
        textSearchCalls++;

        if (!fallbackPlace) {
          notFound++;
          console.log(`${progress} ○ ${court.name}: place not found`);
          await delay(200);
          continue;
        }

        // Use fallback result
        const photoRef = await getPhotoRef(fallbackPlace.place_id);
        detailsCalls++;

        if (!photoRef) {
          notFound++;
          console.log(`${progress} ○ ${court.name}: no photos (${fallbackPlace.name})`);
          await delay(200);
          continue;
        }

        results.push({
          slug,
          placeId: fallbackPlace.place_id,
          photoRef: photoRef.photo_reference,
          placeName: fallbackPlace.name,
        });
        found++;
        console.log(`${progress} ✓ ${court.name} → ${fallbackPlace.name}`);
        await delay(200);
        continue;
      }

      // Step 2: Get photo reference
      const photoRef = await getPhotoRef(place.place_id);
      detailsCalls++;

      if (!photoRef) {
        notFound++;
        console.log(`${progress} ○ ${court.name}: no photos (${place.name})`);
        await delay(200);
        continue;
      }

      results.push({
        slug,
        placeId: place.place_id,
        photoRef: photoRef.photo_reference,
        placeName: place.name,
      });
      found++;
      console.log(`${progress} ✓ ${court.name} → ${place.name}`);
    } catch (err: unknown) {
      errors++;
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`${progress} ✗ ${court.name}: ${msg}`);
    }

    await delay(200);
  }

  // Save results
  const outputData: Record<string, { placeId: string; photoRef: string; placeName: string }> = {};
  for (const r of results) {
    outputData[r.slug] = {
      placeId: r.placeId,
      photoRef: r.photoRef,
      placeName: r.placeName,
    };
  }
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2));

  // Cost estimate (as of 2025 pricing):
  // Text Search: $32 per 1000 requests
  // Place Details (Basic): $17 per 1000 requests
  // Place Photo: $7 per 1000 requests (at render time, not in this script)
  const textSearchCost = (textSearchCalls / 1000) * 32;
  const detailsCost = (detailsCalls / 1000) * 17;

  console.log("\n========== RESULTS ==========");
  console.log(`Courts attempted:    ${courtsNeedingPhotos.length}`);
  console.log(`Photos found:        ${found}`);
  console.log(`No photo available:  ${notFound}`);
  console.log(`Errors:              ${errors}`);
  console.log(`\nAPI calls made:`);
  console.log(`  Text Search:       ${textSearchCalls}`);
  console.log(`  Place Details:     ${detailsCalls}`);
  console.log(`\nEstimated cost:`);
  console.log(`  Text Search:       $${textSearchCost.toFixed(2)}`);
  console.log(`  Place Details:     $${detailsCost.toFixed(2)}`);
  console.log(`  Total:             $${(textSearchCost + detailsCost).toFixed(2)}`);
  console.log(`\nResults saved to: ${OUTPUT_FILE}`);
}

main().catch(console.error);
