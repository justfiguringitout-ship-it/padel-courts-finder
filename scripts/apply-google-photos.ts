/**
 * Apply Google Places photo references to padel-courts.ts
 *
 * Reads google-photos.json and inserts googlePlacePhotoRef and
 * googleMapsPlaceId fields into the court data file.
 *
 * Usage: npx tsx scripts/apply-google-photos.ts
 */

import * as fs from "fs";
import * as path from "path";

const PHOTOS_FILE = path.resolve(__dirname, "google-photos.json");
const COURTS_FILE = path.resolve(__dirname, "../src/data/padel-courts.ts");

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function main() {
  const photos: Record<string, { placeId: string; photoRef: string; placeName: string }> =
    JSON.parse(fs.readFileSync(PHOTOS_FILE, "utf-8"));

  console.log(`Loaded ${Object.keys(photos).length} photo results\n`);

  const lines = fs.readFileSync(COURTS_FILE, "utf-8").split("\n");

  // Build court map: name line index → opening brace line
  const courtStarts: Array<{ name: string; slug: string; openBraceLine: number }> = [];

  for (let i = 0; i < lines.length; i++) {
    const nameMatch = lines[i].match(/^\s+name:\s*"([^"]+)"/);
    if (nameMatch) {
      let openBrace = i;
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].match(/^\s*\{/)) {
          openBrace = j;
          break;
        }
      }
      courtStarts.push({
        name: nameMatch[1],
        slug: generateSlug(nameMatch[1]),
        openBraceLine: openBrace,
      });
    }
  }

  let applied = 0;
  const insertions: Array<{ lineIndex: number; text: string }> = [];

  for (const court of courtStarts) {
    const photo = photos[court.slug];
    if (!photo) continue;

    // Find closing brace by tracking depth
    let depth = 0;
    let closingBraceLine = -1;

    for (let i = court.openBraceLine; i < lines.length; i++) {
      for (const ch of lines[i]) {
        if (ch === "{") depth++;
        if (ch === "}") {
          depth--;
          if (depth === 0) {
            closingBraceLine = i;
            break;
          }
        }
      }
      if (closingBraceLine !== -1) break;
    }

    if (closingBraceLine === -1) {
      console.log(`  WARN: Could not find closing brace for ${court.name}`);
      continue;
    }

    // Check if already has googlePlacePhotoRef
    let alreadyExists = false;
    for (let i = court.openBraceLine; i <= closingBraceLine; i++) {
      if (lines[i].includes("googlePlacePhotoRef")) {
        alreadyExists = true;
        break;
      }
    }
    if (alreadyExists) continue;

    // Get indent from previous line
    const prevLine = lines[closingBraceLine - 1];
    const indentMatch = prevLine.match(/^(\s+)/);
    const indent = indentMatch ? indentMatch[1] : "    ";

    // Ensure previous line has trailing comma
    const trimmed = prevLine.trimEnd();
    if (trimmed.length > 0 && !trimmed.endsWith(",") && !trimmed.endsWith("{") && !trimmed.endsWith("[")) {
      lines[closingBraceLine - 1] = trimmed + ",";
    }

    // Escape any quotes in the photoRef (shouldn't happen but be safe)
    const safePhotoRef = photo.photoRef.replace(/"/g, '\\"');
    const safePlaceId = photo.placeId.replace(/"/g, '\\"');

    // Insert both fields
    insertions.push({
      lineIndex: closingBraceLine,
      text: `${indent}googlePlacePhotoRef: "${safePhotoRef}",\n${indent}googleMapsPlaceId: "${safePlaceId}",`,
    });
    applied++;
  }

  // Apply from bottom to top
  insertions.sort((a, b) => b.lineIndex - a.lineIndex);
  for (const ins of insertions) {
    lines.splice(ins.lineIndex, 0, ins.text);
  }

  fs.writeFileSync(COURTS_FILE, lines.join("\n"));
  console.log(`Applied ${applied} Google Places photo references to padel-courts.ts`);
}

main();
