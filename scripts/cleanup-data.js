#!/usr/bin/env node
/**
 * Data cleanup script for padel-courts.ts:
 * 1. Merge duplicate entries (keep richest data)
 * 2. Remove junk/phantom entries
 * 3. Clean up entry names
 */

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../src/data/padel-courts.ts");
let content = fs.readFileSync(DATA_FILE, "utf-8");

// ============================================================
// CONFIGURATION
// ============================================================

// Duplicate groups: { keep: ID, delete: [IDs] }
const DUPLICATE_GROUPS = [
  // === FLORIDA ===
  { keep: 1, delete: [218, 219, 227] },       // Ultra Padel Club (Magic City) - Miami
  { keep: 16, delete: [223] },                 // i95 Padel Club - Miami
  { keep: 7, delete: [221] },                  // Real Padel Miami
  { keep: 60, delete: [226] },                 // Reserve Padel Seaplane Base (226=tournament)
  { keep: 360, delete: [361] },                // The Gables Padel - Miami
  { keep: 52, delete: [62] },                  // Pulse Padel Hub / Pepper Padel - North Miami
  { keep: 61, delete: [220, 232, 234] },       // Reserve Padel Solé Mia (220=Joa bad entry)
  { keep: 3, delete: [231] },                  // Open Padel Club by Lasaigues - Miramar
  { keep: 9, delete: [208, 209] },             // Replay Club - Boynton Beach
  { keep: 19, delete: [211, 212] },            // 10by20 Padel Fort Lauderdale (5300 Powerline)
  { keep: 34, delete: [228] },                 // Padel Point Miami / Miami Beach
  { keep: 28, delete: [201] },                 // Casas Padel Club - Aventura
  { keep: 200, delete: [202, 203] },           // Ultra Padel Club Aventura
  { keep: 37, delete: [233] },                 // Platinum Padel Club - North Miami
  { keep: 78, delete: [46, 213] },             // Padel Life & Soccer - Hallandale Beach
  { keep: 80, delete: [257, 367] },            // Padel Social Bethesda - MD
  { keep: 81, delete: [258] },                 // Glassbox Padel Club - College Park MD
  { keep: 204, delete: [205, 207] },           // Legio GP Padel World - Boca Raton
  { keep: 240, delete: [243] },                // Xcel Padel - West Palm Beach
  { keep: 15, delete: [63] },                  // SMART PADEL HOUSE (Doral) / Miami Padel Fed
  { keep: 152, delete: [235] },                // USTA National Campus - Orlando
  { keep: 71, delete: [237] },                 // Padel in Orlando / Caribe Royale

  // === TEXAS ===
  { keep: 8, delete: [329] },                  // TEMPO Padel Houston
  { keep: 20, delete: [348] },                 // Woodlands Padel - Spring
  { keep: 347, delete: [349] },                // Giammalva Padel Club - Spring
  { keep: 111, delete: [344, 346] },           // U-Padel Club - San Antonio
  { keep: 112, delete: [341] },                // King of Padel - San Antonio
  { keep: 343, delete: [374] },                // Slice Padel Co - San Antonio
  { keep: 114, delete: [308] },                // Padel Club Austin
  { keep: 115, delete: [310] },                // Padel 39 - Austin (North)
  { keep: 142, delete: [307, 311] },           // Dripping Springs Racquet Club - Austin
  { keep: 143, delete: [316, 317, 318] },      // Dallas Padel Club - Carrollton
  { keep: 146, delete: [336] },                // Bush Tennis Center - Midland
  { keep: 312, delete: [313] },                // Padel Quattro - Brownsville
  { keep: 314, delete: [315] },                // Pick and Padel - Bulverde

  // === CALIFORNIA ===
  { keep: 175, delete: [358] },                // Los Angeles Padel Club
  { keep: 36, delete: [95, 187] },             // Pura Padel - Sherman Oaks
  { keep: 40, delete: [177] },                 // Padel California - Oceanside
  { keep: 75, delete: [179, 180, 181] },       // Taktika Padel - San Diego
  { keep: 138, delete: [178] },                // Taktika Padel - Palm Desert
  { keep: 136, delete: [172, 173] },           // Taktika Padel - Carson/LA Galaxy
  { keep: 55, delete: [182, 183] },            // Park Padel - Embarcadero SF
  { keep: 92, delete: [184, 185] },            // Bay Padel - Treasure Island SF
  { keep: 56, delete: [188, 189, 190] },       // Park Padel - Oyster Point SSF

  // === ARIZONA ===
  { keep: 69, delete: [171] },                 // Padel AZ - Tucson
  { keep: 51, delete: [169, 170] },            // Conquer Padel Club - Tempe
  { keep: 141, delete: [168] },                // Padel Pals - Mesa

  // === NEW YORK ===
  { keep: 149, delete: [84] },                 // Padel Haus Williamsburg (149 richer)
  { keep: 83, delete: [150, 283] },            // Golden Point Padel - Brooklyn
  { keep: 147, delete: [286] },                // Reserve Padel - Hudson Yards NYC
  { keep: 86, delete: [288] },                 // Paddles Up - East Setauket

  // === NEW JERSEY ===
  { keep: 50, delete: [277] },                 // Nicol NJ - Oceanport
  { keep: 273, delete: [274] },                // Centercourt Morristown
  { keep: 275, delete: [276] },                // Rax New Jersey - Oakland

  // === PENNSYLVANIA ===
  { keep: 88, delete: [303] },                 // Matt's - Sewickley
  { keep: 299, delete: [300] },                // VIVA Padel - Flourtown

  // === ILLINOIS ===
  { keep: 91, delete: [251] },                 // Padel Clube - Mundelein

  // === VIRGINIA ===
  { keep: 64, delete: [353, 354] },            // Padel Up - Sterling

  // === NEVADA ===
  { keep: 68, delete: [280, 281] },            // P1 Padel Las Vegas

  // === NEW MEXICO ===
  { keep: 106, delete: [278, 279] },           // Padel Club El Paso - Sunland Park

  // === GEORGIA ===
  { keep: 121, delete: [162, 247] },           // ITP Training Academy / PATL - Atlanta

  // === MASSACHUSETTS ===
  { keep: 163, delete: [255] },                // Sensa Padel - Boston

  // === COLORADO ===
  { keep: 193, delete: [194] },                // Smash Padel - Boulder

  // === PUERTO RICO ===
  { keep: 128, delete: [304] },                // Eco - San Juan
];

// Junk entries to delete (not real padel facilities)
const JUNK_IDS = [
  48,   // North Park Paddle Courts - phantom (0 courts, 0 reviews, no data)
  110,  // Trosky Sports Club - phantom
  113,  // Pick and Paddle - phantom
  120,  // Let - phantom (Atlanta)
  214,  // Somos Padel LLC - 0 courts, 0 reviews
  222,  // Bowlero | Miami, FL - bowling alley
  229,  // Pro Padel League Experience x Miami Open - event
];

// Name cleanups: ID → new name
const NAME_CHANGES = {
  9: "Replay Club",
  155: "10by20 Padel Downtown Fort Lauderdale",
  204: "Legio GP Padel World",
  215: "Arena Sports USA",
  216: "Ritz-Carlton Key Biscayne Padel",
  242: "Palm Beach Padel",
  266: "Padel United Sports Club",
  289: "Padel&",
  290: "Tuxedo Paddle Courts",
  291: "Cleveland Premier Pickleball & Padel",
  299: "VIVA Padel Flourtown",
  333: "Deuces Padel Club",
  337: "IMGN Park",
  343: "Slice Padel Co",
  366: "Padel Highway",
  371: "Padel39 East Austin",
};

// ============================================================
// HELPERS
// ============================================================

/** Find an entry block by ID using brace-counting */
function findEntryBlock(text, id) {
  // Find the `id: N,` marker
  const idMarker = new RegExp(`id:\\s*${id},`);
  const idMatch = idMarker.exec(text);
  if (!idMatch) return null;

  // Walk backward to find the opening `{`
  let braceStart = -1;
  for (let i = idMatch.index - 1; i >= 0; i--) {
    if (text[i] === "{") {
      braceStart = i;
      break;
    }
  }
  if (braceStart === -1) return null;

  // Walk forward counting braces to find matching `}`
  let depth = 0;
  let braceEnd = -1;
  for (let i = braceStart; i < text.length; i++) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}") {
      depth--;
      if (depth === 0) {
        braceEnd = i;
        break;
      }
    }
  }
  if (braceEnd === -1) return null;

  return {
    start: braceStart,
    end: braceEnd + 1, // inclusive of }
    text: text.slice(braceStart, braceEnd + 1),
  };
}

/** Extract a simple field value from an entry block */
function extractField(block, fieldName) {
  // Try string value
  const strMatch = block.match(new RegExp(fieldName + ':\\s*"([^"]*)"'));
  if (strMatch) return strMatch[1];

  // Try single-quoted string
  const sqMatch = block.match(new RegExp(fieldName + ":\\s*'([^']*)'"));
  if (sqMatch) return sqMatch[1];

  // Try number
  const numMatch = block.match(new RegExp(fieldName + ":\\s*(\\d+(?:\\.\\d+)?)"));
  if (numMatch) return parseFloat(numMatch[1]);

  // Try boolean
  const boolMatch = block.match(new RegExp(fieldName + ":\\s*(true|false)"));
  if (boolMatch) return boolMatch[1] === "true";

  return undefined;
}

/** Extract the raw text of a field line(s) from an entry block */
function extractFieldText(block, fieldName) {
  // Match a field that might span multiple lines (arrays, etc.)
  // Simple single-line field
  const singleLine = new RegExp(`(\\n\\s*${fieldName}:\\s*[^\\[{][^\\n]*,)\\n`);
  const slMatch = block.match(singleLine);
  if (slMatch) return slMatch[1];

  // Array field: fieldName: [...],
  const arrayStart = block.indexOf(`${fieldName}: [`);
  if (arrayStart !== -1) {
    // Find the start of the line
    let lineStart = block.lastIndexOf("\n", arrayStart);
    if (lineStart === -1) lineStart = 0;
    // Find the closing ],
    let depth = 0;
    let end = arrayStart + fieldName.length + 2; // skip "fieldName: "
    for (; end < block.length; end++) {
      if (block[end] === "[") depth++;
      else if (block[end] === "]") {
        depth--;
        if (depth === 0) {
          // Include the comma after ]
          end++;
          if (block[end] === ",") end++;
          break;
        }
      }
    }
    return block.slice(lineStart, end);
  }

  return null;
}

/** Check if an entry block has a field with a meaningful value */
function hasField(block, fieldName) {
  const val = extractField(block, fieldName);
  if (val === undefined) return false;
  if (typeof val === "number") return val > 0;
  if (typeof val === "string") return val.length > 0;
  if (typeof val === "boolean") return true;
  return false;
}

/** Check if block has non-empty amenities array */
function hasAmenities(block) {
  return /amenities:\s*\[/.test(block) && !/amenities:\s*\[\s*\]/.test(block);
}

// ============================================================
// MAIN PROCESSING
// ============================================================

console.log("Starting data cleanup...\n");

// Collect all IDs to delete
const deleteIds = new Set(JUNK_IDS);
DUPLICATE_GROUPS.forEach(g => g.delete.forEach(id => deleteIds.add(id)));
console.log(`Total entries to delete: ${deleteIds.size}`);

// --- PHASE 1: MERGE DATA FROM DUPES INTO KEEPERS ---
console.log("\n--- Phase 1: Merging data from duplicates into keepers ---");

const MERGE_FIELDS = [
  "googleRating", "googleReviewCount", "numberOfCourts",
  "description", "courtType", "courtSurface", "pricingText",
  "lessonsAvailable", "rentalAvailable", "socialArea", "foodAndDrink", "membersOnly",
  "positiveReviewThemes", "negativeReviewThemes",
  "instagram", "facebook", "phone", "website", "status",
];

let mergeCount = 0;

DUPLICATE_GROUPS.forEach(group => {
  const keeperEntry = findEntryBlock(content, group.keep);
  if (!keeperEntry) {
    console.log(`  WARNING: Keeper ${group.keep} not found!`);
    return;
  }

  // Check what the keeper is missing
  const fieldsToAdd = [];

  for (const field of MERGE_FIELDS) {
    if (hasField(keeperEntry.text, field)) continue;

    // Check if any dupe has this field
    for (const dupeId of group.delete) {
      const dupeEntry = findEntryBlock(content, dupeId);
      if (!dupeEntry) continue;
      if (!hasField(dupeEntry.text, field)) continue;

      // Extract the field text from the dupe
      const fieldText = extractFieldText(dupeEntry.text, field);
      if (fieldText) {
        fieldsToAdd.push({ field, text: fieldText, fromId: dupeId });
        break; // Only need one source
      }
    }
  }

  // Also check amenities
  if (!hasAmenities(keeperEntry.text)) {
    for (const dupeId of group.delete) {
      const dupeEntry = findEntryBlock(content, dupeId);
      if (!dupeEntry || !hasAmenities(dupeEntry.text)) continue;
      const fieldText = extractFieldText(dupeEntry.text, "amenities");
      if (fieldText) {
        fieldsToAdd.push({ field: "amenities", text: fieldText, fromId: dupeId });
        break;
      }
    }
  }

  if (fieldsToAdd.length > 0) {
    // Insert fields into the keeper just before the closing }
    const insertPoint = keeperEntry.text.lastIndexOf("}");
    const insertText = fieldsToAdd.map(f => f.text).join("");
    const newBlock = keeperEntry.text.slice(0, insertPoint) + insertText + "\n  " + keeperEntry.text.slice(insertPoint);

    content = content.slice(0, keeperEntry.start) + newBlock + content.slice(keeperEntry.end);
    mergeCount += fieldsToAdd.length;

    const keeperName = extractField(keeperEntry.text, "name");
    console.log(`  [${group.keep}] "${keeperName}" ← merged ${fieldsToAdd.length} fields: ${fieldsToAdd.map(f => `${f.field}(from ${f.fromId})`).join(", ")}`);
  }
});

console.log(`  Merged ${mergeCount} total fields`);

// --- PHASE 2: DELETE ENTRIES ---
console.log("\n--- Phase 2: Removing entries ---");

// Sort IDs in reverse order so we remove from end first (preserving offsets)
const sortedDeleteIds = Array.from(deleteIds).sort((a, b) => b - a);
let removedCount = 0;

sortedDeleteIds.forEach(id => {
  const entry = findEntryBlock(content, id);
  if (!entry) {
    console.log(`  WARNING: Entry ${id} not found (may already be removed)`);
    return;
  }

  const name = extractField(entry.text, "name");

  // Find the full extent including leading whitespace and trailing comma
  let removeStart = entry.start;
  let removeEnd = entry.end;

  // Include leading whitespace (back to previous newline)
  while (removeStart > 0 && content[removeStart - 1] !== "\n") removeStart--;

  // Include trailing comma and newline
  if (content[removeEnd] === ",") removeEnd++;
  if (content[removeEnd] === "\n") removeEnd++;

  content = content.slice(0, removeStart) + content.slice(removeEnd);
  removedCount++;
});

console.log(`  Removed ${removedCount} entries`);

// --- PHASE 3: APPLY NAME CHANGES ---
console.log("\n--- Phase 3: Cleaning up names ---");

let nameChangeCount = 0;

Object.entries(NAME_CHANGES).forEach(([idStr, newName]) => {
  const id = parseInt(idStr);
  const entry = findEntryBlock(content, id);
  if (!entry) {
    console.log(`  WARNING: Entry ${id} not found for name change`);
    return;
  }

  const oldName = extractField(entry.text, "name");
  if (!oldName || oldName === newName) return;

  // Also need to update the slug
  const newSlug = newName
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  // Replace name in this entry
  const namePattern = new RegExp(`(id:\\s*${id},[\\s\\S]*?name:\\s*)"[^"]*"`);
  const nameMatch = content.match(namePattern);
  if (nameMatch) {
    content = content.replace(nameMatch[0], nameMatch[1] + `"${newName}"`);
  }

  // Replace slug in this entry
  const oldSlug = extractField(entry.text, "slug");
  if (oldSlug && oldSlug !== newSlug) {
    const slugPattern = new RegExp(`(id:\\s*${id},[\\s\\S]*?slug:\\s*)"[^"]*"`);
    const slugMatch = content.match(slugPattern);
    if (slugMatch) {
      content = content.replace(slugMatch[0], slugMatch[1] + `"${newSlug}"`);
    }
  }

  console.log(`  [${id}] "${oldName}" → "${newName}"`);
  nameChangeCount++;
});

console.log(`  Renamed ${nameChangeCount} entries`);

// --- FINAL: Count and write ---
const finalCount = (content.match(/id:\s*\d+,/g) || []).length;
const lines = content.split("\n").length;

console.log(`\n========================================`);
console.log(`Entries removed: ${removedCount}`);
console.log(`Fields merged: ${mergeCount}`);
console.log(`Names cleaned: ${nameChangeCount}`);
console.log(`Final court count: ${finalCount}`);
console.log(`File lines: ${lines}`);
console.log(`========================================`);

fs.writeFileSync(DATA_FILE, content, "utf-8");
console.log("\nFile written successfully.");
