#!/usr/bin/env node
/**
 * Task 1: Remove closed courts (Padel 9, The King of Padel SA duplicate)
 * Task 2: Add coming soon courts from Section 4
 */

const fs = require("fs");
const path = require("path");

const MASTER_DATA_PATH = path.join(process.env.HOME, "Downloads", "padel-courts-master-data-v2.md");
const COURTS_FILE = path.join(__dirname, "..", "src", "data", "padel-courts.ts");

// ---- TASK 1: Remove courts ----
let content = fs.readFileSync(COURTS_FILE, "utf-8");

// IDs to remove:
// 104 = Padel 9 (Colorado Springs, permanently closed)
// 345 = The King of Padel SA (duplicate of ID 112 San Antonio)
const IDS_TO_REMOVE = [104, 345];

for (const id of IDS_TO_REMOVE) {
  // Find the court entry block: starts with "  {\n    id: <id>," and ends with "  },"
  // or "  },\n  {" boundary
  const regex = new RegExp(`  \\{\\n    id: ${id},\\n[\\s\\S]*?\\n  \\},?\\n`, "m");
  const match = content.match(regex);
  if (match) {
    console.log(`Removing ID ${id}: found at offset ${match.index}, length ${match[0].length}`);
    // Get the name for logging
    const nameMatch = match[0].match(/name: "([^"]+)"/);
    console.log(`  Name: ${nameMatch ? nameMatch[1] : "unknown"}`);
    content = content.replace(match[0], "");
  } else {
    console.warn(`WARNING: Could not find court ID ${id} to remove`);
  }
}

fs.writeFileSync(COURTS_FILE, content);
console.log(`Removed ${IDS_TO_REMOVE.length} courts\n`);

// ---- TASK 2: Parse Section 4 coming soon courts ----
const md = fs.readFileSync(MASTER_DATA_PATH, "utf-8");
const section4Match = md.match(/## Section 4: Coming Soon Courts\n([\s\S]*?)(?=\n---\n\n\*End)/);
if (!section4Match) {
  console.error("Could not find Section 4 in master data");
  process.exit(1);
}
const section4 = section4Match[1];

const courtBlocks = section4.split(/\n### /).filter(Boolean);
const courts = [];

for (const block of courtBlocks) {
  const lines = block.trim().split("\n");
  let name = lines[0].trim();
  if (name.startsWith("*") || name.startsWith("##")) continue;
  name = name.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

  const fields = {};
  for (let i = 1; i < lines.length; i++) {
    const match = lines[i].match(/^- \*\*(.+?)\*\*:\s*(.+)/);
    if (match) {
      fields[match[1].trim()] = match[2].trim().replace(/&amp;/g, "&");
    }
  }
  if (!fields["City"] || !fields["State"]) continue;
  courts.push({ name, fields });
}

console.log(`Parsed ${courts.length} coming soon courts from Section 4`);

// Dedup
const seen = new Map();
const duplicates = [];
for (const court of courts) {
  const key = `${court.name}|||${court.fields["Address"] || ""}`.toLowerCase();
  if (seen.has(key)) duplicates.push(court.name);
  seen.set(key, court);
}
const uniqueCourts = Array.from(seen.values());
if (duplicates.length > 0) console.log(`Duplicates: ${duplicates.join(", ")}`);
console.log(`Processing ${uniqueCourts.length} unique coming soon courts`);

// Load existing slugs
content = fs.readFileSync(COURTS_FILE, "utf-8");
const existingSlugs = new Set();
const nameMatches = content.matchAll(/name:\s*"([^"]+)"/g);
for (const m of nameMatches) existingSlugs.add(generateSlug(m[1]));

// Find highest ID
const idMatches = [...content.matchAll(/id: (\d+)/g)];
let nextId = Math.max(...idMatches.map(m => parseInt(m[1]))) + 1;
console.log(`Next ID: ${nextId}`);

// ---- Helpers (same as add-new-courts.js) ----
function generateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function parseBoolean(val) {
  if (!val) return undefined;
  const l = val.toLowerCase().trim();
  if (l === "unknown") return undefined;
  if (l.startsWith("yes")) return true;
  if (l.startsWith("no")) return false;
  if (l.startsWith("likely")) return true;
  if (l.includes("private") || l.includes("members")) return true;
  return undefined;
}

function parseMembersOnly(val) {
  if (!val) return undefined;
  const l = val.toLowerCase().trim();
  if (l === "unknown") return undefined;
  if (l.startsWith("yes")) return true;
  if (l.startsWith("no")) return false;
  if (l.includes("private") && !l.includes("no")) return true;
  if (l.includes("membership-based")) return true;
  return false;
}

function parseNumCourts(val) {
  if (!val || val.toLowerCase() === "unknown") return undefined;
  const m = val.match(/(\d+)/);
  return m ? parseInt(m[1]) : undefined;
}

function parseCourtType(val) {
  if (!val || val.toLowerCase() === "unknown") return undefined;
  const l = val.toLowerCase();
  if (l.includes("indoor") && l.includes("outdoor")) return "both";
  if (l.includes("both")) return "both";
  if (l.includes("indoor")) return "indoor";
  if (l.includes("outdoor")) return "outdoor";
  return undefined;
}

function parseRating(val) {
  if (!val || val.toLowerCase() === "unknown") return undefined;
  const m = val.match(/([\d.]+)/);
  return m ? parseFloat(m[1]) : undefined;
}

function parseReviewCount(val) {
  if (!val || val.toLowerCase() === "unknown") return undefined;
  const m = val.match(/([\d,]+)/);
  return m ? parseInt(m[1].replace(/,/g, "")) : undefined;
}

function skipIfUnknown(val) {
  if (!val) return undefined;
  const l = val.toLowerCase().trim();
  if (l === "unknown" || l === "n/a" || l === "none") return undefined;
  return val;
}

function skipReviewThemes(val) {
  if (!val) return undefined;
  const l = val.toLowerCase().trim();
  if (l === "unknown" || l.startsWith("none") || l.startsWith("n/a")) return undefined;
  return val;
}

function parseWebsite(val) {
  if (!val) return undefined;
  if (val.toLowerCase().trim() === "unknown") return undefined;
  const urls = val.split(",").map(u => u.trim()).filter(u => u.startsWith("http"));
  return urls.length > 0 ? urls[0] : undefined;
}

function parsePhone(val) {
  if (!val) return undefined;
  if (val.toLowerCase().trim() === "unknown") return undefined;
  // Take first phone if comma-separated
  return val.split(",")[0].trim();
}

function parseInstagram(val) {
  if (!val) return undefined;
  if (val.toLowerCase().trim() === "unknown") return undefined;
  const urlMatch = val.match(/(https?:\/\/[^\s,]+)/);
  if (urlMatch) return urlMatch[1];
  return val.trim();
}

function parseFacebook(val) {
  if (!val) return undefined;
  if (val.toLowerCase().trim() === "unknown") return undefined;
  const urlMatch = val.match(/(https?:\/\/[^\s,]+)/);
  return urlMatch ? urlMatch[1] : undefined;
}

function parseCourtSurface(val) {
  if (!val) return undefined;
  if (val.toLowerCase().trim().startsWith("unknown")) return undefined;
  return val.trim();
}

function parsePricingText(val) {
  if (!val || val.toLowerCase() === "unknown") return undefined;
  return val.replace(/\s*https?:\/\/[^\s,;]+/g, "").trim();
}

function parseAmenities(val) {
  if (!val || val.toLowerCase() === "unknown" || val.toLowerCase() === "none") return undefined;
  const cleaned = val.replace(/https?:\/\/[^\s,]+/g, "").trim();
  return cleaned.split(",").map(a => a.trim()).filter(Boolean);
}

function parseHours(val) {
  if (!val || val.toLowerCase() === "unknown") {
    return { monday: "varies", tuesday: "varies", wednesday: "varies", thursday: "varies", friday: "varies", saturday: "varies", sunday: "varies" };
  }
  const raw = val.replace(/\s*https?:\/\/[^\s,]+/g, "").trim();
  const lower = raw.toLowerCase();

  if (lower.includes("24/7")) {
    const h = "0h-24h";
    return { monday: h, tuesday: h, wednesday: h, thursday: h, friday: h, saturday: h, sunday: h };
  }

  // Weekdays/Weekends pattern
  const wdwe = raw.match(/(?:weekdays?|mon(?:day)?[\s-]*(?:fri|thu)(?:day)?)\s*(\d{1,2})(?::(\d{2}))?\s*(am|AM|pm|PM)?\s*[-–to]+\s*(\d{1,2})(?::(\d{2}))?\s*(am|AM|pm|PM)?[;,]?\s*(?:weekends?|sat(?:urday)?[\s-]*sun(?:day)?)\s*(\d{1,2})(?::(\d{2}))?\s*(am|AM|pm|PM)?\s*[-–to]+\s*(\d{1,2})(?::(\d{2}))?\s*(am|AM|pm|PM)?/i);
  if (wdwe) {
    const wd = fmtHr(wdwe[1], wdwe[2], wdwe[3], wdwe[4], wdwe[5], wdwe[6]);
    const we = fmtHr(wdwe[7], wdwe[8], wdwe[9], wdwe[10], wdwe[11], wdwe[12]);
    return { monday: wd, tuesday: wd, wednesday: wd, thursday: wd, friday: wd, saturday: we, sunday: we };
  }

  // Daily pattern
  const daily = raw.match(/(\d{1,2})(?::(\d{2}))?\s*(am|AM|pm|PM)?\s*[-–to]+\s*(\d{1,2})(?::(\d{2}))?\s*(am|AM|pm|PM)?\s*(?:daily)?/i);
  if (daily) {
    const h = fmtHr(daily[1], daily[2], daily[3], daily[4], daily[5], daily[6]);
    return { monday: h, tuesday: h, wednesday: h, thursday: h, friday: h, saturday: h, sunday: h };
  }

  // Winter hours pattern
  const winterMatch = raw.match(/(?:Winter:?\s*)?(?:Mon(?:day)?[\s-]*Fri(?:day)?)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*[-–]+\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?[;,]\s*(?:Sat(?:urday)?[\s-]*Sun(?:day)?)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*[-–]+\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
  if (winterMatch) {
    const wd = fmtHr(winterMatch[1], winterMatch[2], winterMatch[3], winterMatch[4], winterMatch[5], winterMatch[6]);
    const we = fmtHr(winterMatch[7], winterMatch[8], winterMatch[9], winterMatch[10], winterMatch[11], winterMatch[12]);
    return { monday: wd, tuesday: wd, wednesday: wd, thursday: wd, friday: wd, saturday: we, sunday: we };
  }

  const fallback = raw.slice(0, 50) || "varies";
  return { monday: fallback, tuesday: fallback, wednesday: fallback, thursday: fallback, friday: fallback, saturday: fallback, sunday: fallback };
}

function fmtHr(oh, om, op, ch, cm, cp) {
  let o = parseInt(oh), c = parseInt(ch);
  const omin = om ? parseInt(om) : 0;
  const cmin = cm ? parseInt(cm) : 0;
  if (op && op.toLowerCase() === "pm" && o < 12) o += 12;
  if (op && op.toLowerCase() === "am" && o === 12) o = 0;
  if (cp && cp.toLowerCase() === "pm" && c < 12) c += 12;
  if (cp && cp.toLowerCase() === "am" && c === 12) c = 0;
  if (!cp && !op && c < o) c += 12;
  if (!cp && op && op.toLowerCase() === "am" && c <= 12 && c < o) c += 12;
  const os = omin > 0 ? `${o}:${omin.toString().padStart(2, "0")}` : `${o}h`;
  const cs = cmin > 0 ? `${c}:${cmin.toString().padStart(2, "0")}` : `${c}h`;
  return `${os}-${cs}`;
}

const CITY_COORDS = {
  "Mesa, AZ": { lat: 33.4152, lng: -111.8315 },
  "Scottsdale, AZ": { lat: 33.4942, lng: -111.9261 },
  "Los Angeles, CA": { lat: 34.0522, lng: -118.2437 },
  "Aventura, FL": { lat: 25.9565, lng: -80.1393 },
  "Miami, FL": { lat: 25.7617, lng: -80.1918 },
  "Orlando, FL": { lat: 28.5383, lng: -81.3792 },
  "West Palm Beach, FL": { lat: 26.7153, lng: -80.0534 },
  "Columbus, GA": { lat: 32.4609, lng: -84.9877 },
  "Sandy Springs, GA": { lat: 33.9304, lng: -84.3733 },
  "Tucker, GA": { lat: 33.8554, lng: -84.2171 },
  "Bethesda, MD": { lat: 38.9807, lng: -77.1003 },
  "Brooklyn, NY": { lat: 40.6782, lng: -73.9442 },
  "Cincinnati, OH": { lat: 39.1031, lng: -84.5120 },
  "Malvern, PA": { lat: 40.0362, lng: -75.5135 },
  "Austin, TX": { lat: 30.2672, lng: -97.7431 },
  "San Antonio, TX": { lat: 29.4241, lng: -98.4936 },
  "The Woodlands, TX": { lat: 30.1658, lng: -95.4613 },
};

function estimateCoords(city, state, address) {
  const key = `${city}, ${state}`;
  const base = CITY_COORDS[key] || { lat: 39.8283, lng: -98.5795 };
  const hash = (address || "").split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const offset = (hash % 100) * 0.001;
  return { lat: +(base.lat + offset * 0.1).toFixed(6), lng: +(base.lng + offset * 0.1).toFixed(6) };
}

function esc(str) {
  if (!str) return "";
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

// ---- Generate entries ----
const newSlugs = new Set();
const entries = [];

for (const court of uniqueCourts) {
  const f = court.fields;
  let slug = generateSlug(court.name);

  // Check collisions
  if (existingSlugs.has(slug) || newSlugs.has(slug)) {
    const citySlug = generateSlug(`${court.name} ${f["City"]}`);
    if (!existingSlugs.has(citySlug) && !newSlugs.has(citySlug)) {
      slug = citySlug;
      console.log(`  Slug collision: "${court.name}" → "${slug}"`);
    } else {
      const stateSlug = generateSlug(`${court.name} ${f["State"]}`);
      slug = stateSlug;
      console.log(`  Slug collision: "${court.name}" → "${slug}"`);
    }
  }
  newSlugs.add(slug);
  existingSlugs.add(slug);

  const id = nextId++;
  const name = court.name;
  const address = f["Address"] || "";
  const city = f["City"] || "";
  const state = f["State"] || "";
  const zip = f["Zip"] || "";
  const phone = parsePhone(f["Phone"]);
  const website = parseWebsite(f["Website"]);
  const rating = parseRating(f["Google Rating"]);
  const reviewCount = parseReviewCount(f["Google Review Count"]) || 0;
  const description = skipIfUnknown(f["Description"]);
  const numberOfCourts = parseNumCourts(f["Num Courts"]);
  const courtType = parseCourtType(f["Court Type"]);
  const courtSurface = parseCourtSurface(f["Court Surface"]);
  const amenities = parseAmenities(f["Notable Amenities"]);
  const hours = parseHours(f["Hours"]);
  const instagram = parseInstagram(f["Instagram"]);
  const facebook = parseFacebook(f["Facebook"]);
  const membersOnly = parseMembersOnly(f["Members Only"]);
  const lessonsAvailable = parseBoolean(f["Lessons Available"]);
  const rentalAvailable = parseBoolean(f["Rental Available"]);
  const socialArea = parseBoolean(f["Social Area"]);
  const foodAndDrink = parseBoolean(f["Food & Drink"]);
  const positiveReviewThemes = skipReviewThemes(f["Positive Review Themes"]);
  const negativeReviewThemes = skipReviewThemes(f["Negative Review Themes"]);
  const pricingText = parsePricingText(f["Pricing"]);
  const coords = estimateCoords(city, state, address);

  let entry = `  {\n`;
  entry += `    id: ${id},\n`;
  entry += `    name: "${esc(name)}",\n`;
  entry += `    address: "${esc(address)}",\n`;
  entry += `    city: "${esc(city)}",\n`;
  entry += `    state: "${esc(state)}",\n`;
  entry += `    zipCode: "${esc(zip)}",\n`;
  if (phone) entry += `    phone: "${esc(phone)}",\n`;
  if (website) entry += `    website: "${esc(website)}",\n`;
  if (rating !== undefined) entry += `    rating: ${rating},\n`;
  entry += `    reviewCount: ${reviewCount},\n`;
  entry += `    openingHours: {\n`;
  entry += `      monday: "${esc(hours.monday)}",\n`;
  entry += `      tuesday: "${esc(hours.tuesday)}",\n`;
  entry += `      wednesday: "${esc(hours.wednesday)}",\n`;
  entry += `      thursday: "${esc(hours.thursday)}",\n`;
  entry += `      friday: "${esc(hours.friday)}",\n`;
  entry += `      saturday: "${esc(hours.saturday)}",\n`;
  entry += `      sunday: "${esc(hours.sunday)}",\n`;
  entry += `    },\n`;
  if (description) entry += `    description: "${esc(description)}",\n`;
  if (numberOfCourts !== undefined) entry += `    numberOfCourts: ${numberOfCourts},\n`;
  if (courtType) entry += `    courtType: "${courtType}",\n`;
  if (amenities && amenities.length > 0) {
    entry += `    amenities: [\n`;
    for (const a of amenities) entry += `      "${esc(a)}",\n`;
    entry += `    ],\n`;
  }
  if (courtSurface) entry += `    courtSurface: "${esc(courtSurface)}",\n`;
  entry += `    coordinates: { lat: ${coords.lat}, lng: ${coords.lng} }, // coordinates estimated\n`;
  if (instagram) entry += `    instagram: "${esc(instagram)}",\n`;
  if (facebook) entry += `    facebook: "${esc(facebook)}",\n`;
  if (membersOnly !== undefined) entry += `    membersOnly: ${membersOnly},\n`;
  if (lessonsAvailable !== undefined) entry += `    lessonsAvailable: ${lessonsAvailable},\n`;
  if (rentalAvailable !== undefined) entry += `    rentalAvailable: ${rentalAvailable},\n`;
  if (socialArea !== undefined) entry += `    socialArea: ${socialArea},\n`;
  if (foodAndDrink !== undefined) entry += `    foodAndDrink: ${foodAndDrink},\n`;
  if (positiveReviewThemes) entry += `    positiveReviewThemes: "${esc(positiveReviewThemes)}",\n`;
  if (negativeReviewThemes) entry += `    negativeReviewThemes: "${esc(negativeReviewThemes)}",\n`;
  if (pricingText) entry += `    pricingText: "${esc(pricingText)}",\n`;
  entry += `    status: "coming_soon",\n`;
  entry += `    verified: false,\n`;
  entry += `  }`;
  entries.push(entry);
}

console.log(`Generated ${entries.length} coming soon entries (IDs ${nextId - entries.length}-${nextId - 1})\n`);

// Insert before the closing "];"
content = fs.readFileSync(COURTS_FILE, "utf-8");
const closeMatch = content.match(/\n\];\n/);
if (!closeMatch) { console.error("Cannot find array close"); process.exit(1); }
const insertPoint = closeMatch.index + 1;

const newContent = content.slice(0, insertPoint) +
  "  // --- Section 4: Coming Soon Courts ---\n" +
  entries.join(",\n") + ",\n" +
  content.slice(insertPoint);

fs.writeFileSync(COURTS_FILE, newContent);

// Count final courts
const finalIds = [...newContent.matchAll(/id: \d+/g)];
console.log(`Final court count: ${finalIds.length}`);
console.log(`File now has ${newContent.split("\n").length} lines`);
