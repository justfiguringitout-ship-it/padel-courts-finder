#!/usr/bin/env node
/**
 * Analyze padel-courts.ts for duplicates, junk entries, and naming issues.
 * Output a report to guide the cleanup script.
 */

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../src/data/padel-courts.ts");
const content = fs.readFileSync(DATA_FILE, "utf-8");

// Extract all court objects with their raw text
const courtRegex = /\{\s*\n\s*id:\s*(\d+),[\s\S]*?\n\s*\}/g;
const courts = [];

let match;
while ((match = courtRegex.exec(content)) !== null) {
  const block = match[0];
  const id = parseInt(match[1]);

  const getName = (b) => {
    const m = b.match(/name:\s*["'`]([^"'`]*)["'`]/);
    return m ? m[1] : "";
  };
  const getStr = (b, field) => {
    const m = b.match(new RegExp(field + ':\\s*["\'`]([^"\'`]*)["\'`]'));
    return m ? m[1] : "";
  };
  const getNum = (b, field) => {
    const m = b.match(new RegExp(field + ':\\s*(\\d+(?:\\.\\d+)?)'));
    return m ? parseFloat(m[1]) : 0;
  };
  const getBool = (b, field) => {
    const m = b.match(new RegExp(field + ':\\s*(true|false)'));
    return m ? m[1] === 'true' : undefined;
  };
  const hasField = (b, field) => {
    return new RegExp(field + ':').test(b);
  };

  courts.push({
    id,
    name: getName(block),
    address: getStr(block, "address"),
    city: getStr(block, "city"),
    state: getStr(block, "state"),
    phone: getStr(block, "phone"),
    website: getStr(block, "website"),
    numberOfCourts: getNum(block, "numberOfCourts"),
    googleRating: getNum(block, "googleRating"),
    googleReviewCount: getNum(block, "googleReviewCount"),
    hasDescription: hasField(block, "description") && getStr(block, "description").length > 0,
    hasPricingText: hasField(block, "pricingText"),
    hasAmenities: /amenities:\s*\[/.test(block) && !/amenities:\s*\[\s*\]/.test(block),
    status: getStr(block, "status") || undefined,
    blockLength: block.length,
  });
}

console.log(`Total courts found: ${courts.length}\n`);

// ====== DUPLICATE DETECTION ======
console.log("=" .repeat(80));
console.log("DUPLICATE DETECTION");
console.log("=" .repeat(80));

function normalize(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeAddress(addr) {
  return addr
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\b(suite|ste|apt|unit|bldg|building|fl|floor)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Group by city+state first
const byLocation = {};
courts.forEach(c => {
  const key = `${c.city}|${c.state}`;
  if (!byLocation[key]) byLocation[key] = [];
  byLocation[key].push(c);
});

// Check for duplicates within each city
const duplicateGroups = [];

Object.entries(byLocation).forEach(([loc, group]) => {
  if (group.length < 2) return;

  const matched = new Set();

  for (let i = 0; i < group.length; i++) {
    if (matched.has(group[i].id)) continue;

    const dupes = [group[i]];

    for (let j = i + 1; j < group.length; j++) {
      if (matched.has(group[j].id)) continue;

      const a = group[i];
      const b = group[j];

      let isDupe = false;

      // Same phone number (non-empty)
      if (a.phone && b.phone && a.phone === b.phone) {
        isDupe = true;
      }

      // Same address
      if (a.address && b.address) {
        const addrA = normalizeAddress(a.address);
        const addrB = normalizeAddress(b.address);
        if (addrA && addrB && (addrA === addrB || addrA.startsWith(addrB) || addrB.startsWith(addrA))) {
          isDupe = true;
        }
      }

      // Similar name
      const nameA = normalize(a.name);
      const nameB = normalize(b.name);

      // Extract key words
      const wordsA = new Set(nameA.split(" ").filter(w => w.length > 2));
      const wordsB = new Set(nameB.split(" ").filter(w => w.length > 2));
      const common = [...wordsA].filter(w => wordsB.has(w));
      const similarity = common.length / Math.min(wordsA.size, wordsB.size);

      if (similarity >= 0.6 && common.length >= 2) {
        isDupe = true;
      }

      // Exact name match
      if (nameA === nameB) {
        isDupe = true;
      }

      if (isDupe) {
        dupes.push(group[j]);
        matched.add(group[j].id);
      }
    }

    if (dupes.length > 1) {
      matched.add(group[i].id);
      duplicateGroups.push(dupes);
    }
  }
});

// Also check across nearby cities (same state, similar name)
const byState = {};
courts.forEach(c => {
  if (!byState[c.state]) byState[c.state] = [];
  byState[c.state].push(c);
});

const crossCityMatched = new Set();
Object.entries(byState).forEach(([state, group]) => {
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      if (group[i].city === group[j].city) continue; // already checked above

      const a = group[i];
      const b = group[j];

      // Same phone
      if (a.phone && b.phone && a.phone === b.phone) {
        const key = `${Math.min(a.id, b.id)}-${Math.max(a.id, b.id)}`;
        if (!crossCityMatched.has(key)) {
          crossCityMatched.add(key);
          console.log(`\nCROSS-CITY SAME PHONE: [${a.id}] "${a.name}" (${a.city}) ↔ [${b.id}] "${b.name}" (${b.city})`);
        }
      }

      // Very similar name + same address
      if (a.address && b.address && normalizeAddress(a.address) === normalizeAddress(b.address)) {
        const key = `${Math.min(a.id, b.id)}-${Math.max(a.id, b.id)}`;
        if (!crossCityMatched.has(key)) {
          crossCityMatched.add(key);
          console.log(`\nCROSS-CITY SAME ADDRESS: [${a.id}] "${a.name}" (${a.city}) ↔ [${b.id}] "${b.name}" (${b.city})`);
        }
      }
    }
  }
});

duplicateGroups.forEach(group => {
  console.log(`\n--- ${group[0].city}, ${group[0].state} ---`);
  group.forEach(c => {
    const richness = [
      c.hasDescription ? 'desc' : '',
      c.googleRating > 0 ? `★${c.googleRating}` : '',
      c.googleReviewCount > 0 ? `${c.googleReviewCount}rev` : '',
      c.numberOfCourts > 0 ? `${c.numberOfCourts}cts` : '',
      c.phone ? 'phone' : '',
      c.website ? 'web' : '',
      c.hasPricingText ? 'pricing' : '',
      c.hasAmenities ? 'amenities' : '',
    ].filter(Boolean).join(', ');

    console.log(`  [${c.id}] "${c.name}" | ${c.address || '(no addr)'} | ${richness || '(no data)'}`);
  });
});

// ====== JUNK ENTRY DETECTION ======
console.log("\n\n" + "=" .repeat(80));
console.log("JUNK / PHANTOM ENTRIES");
console.log("=" .repeat(80));

// Known junk
const knownJunk = [
  "Bowlero",
  "Pro Padel League Experience",
  "Reserve Seaplane - Reserve Cup 2026",
];

courts.forEach(c => {
  const isKnownJunk = knownJunk.some(j => c.name.includes(j));
  const isPhantom = c.numberOfCourts === 0 && c.googleReviewCount === 0 &&
                    !c.hasDescription && !c.website && !c.phone;

  if (isKnownJunk || isPhantom) {
    console.log(`  [${c.id}] "${c.name}" | ${c.city}, ${c.state} | courts:${c.numberOfCourts} reviews:${c.googleReviewCount} ${isKnownJunk ? '[KNOWN JUNK]' : '[PHANTOM]'}`);
  }
});

// ====== NAME CLEANUP CANDIDATES ======
console.log("\n\n" + "=" .repeat(80));
console.log("NAME CLEANUP CANDIDATES");
console.log("=" .repeat(80));

courts.forEach(c => {
  const hasLLC = /\bLLC\b/i.test(c.name);
  const hasPipe = c.name.includes("|");
  const hasParens = c.name.includes("(");
  const longName = c.name.length > 50;

  if (hasLLC || hasPipe || hasParens || longName) {
    console.log(`  [${c.id}] "${c.name}"`);
  }
});

// Summary
console.log("\n\n" + "=" .repeat(80));
console.log("SUMMARY");
console.log("=" .repeat(80));
console.log(`Total entries: ${courts.length}`);
console.log(`Duplicate groups found: ${duplicateGroups.length}`);
console.log(`Entries in duplicate groups: ${duplicateGroups.reduce((sum, g) => sum + g.length, 0)}`);
