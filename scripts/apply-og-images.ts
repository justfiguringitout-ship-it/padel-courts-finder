/**
 * Apply OG images to padel-courts.ts
 *
 * Reads og-images.json, filters out logos/SVGs/bad URLs,
 * and inserts ogImageUrl fields into the court data file.
 *
 * Strategy: Find each court by name, then find the closing `},` or `}` of that
 * court's top-level object and insert ogImageUrl right before it.
 *
 * Usage: npx tsx scripts/apply-og-images.ts
 */

import * as fs from "fs";
import * as path from "path";

const OG_IMAGES_FILE = path.resolve(__dirname, "og-images.json");
const COURTS_FILE = path.resolve(__dirname, "../src/data/padel-courts.ts");

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const LOGO_PATTERNS = [/logo/i, /favicon/i, /pixel\.png/i, /brandmark/i, /Isologos/i, /icon/i];

function isLikelyLogo(url: string): boolean {
  return LOGO_PATTERNS.some((p) => p.test(url));
}

function isBadUrl(url: string): boolean {
  if (url.endsWith(".svg")) return true;
  if (url.includes("&amp;")) return true;
  if (url.includes("unsplash.com")) return true;
  if (url.includes("bb-plugin/img/pixel")) return true;
  return false;
}

/**
 * Find the end of a top-level court object starting from a position within it.
 * We track brace depth: when we find the closing `}` at depth 0, that's the end.
 */
function findCourtObjectEnd(source: string, startPos: number): number {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = startPos; i < source.length; i++) {
    const ch = source[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === "\\") {
      escaped = true;
      continue;
    }

    if (ch === '"' || ch === "'") {
      if (!inString) {
        inString = true;
      } else {
        inString = false;
      }
      continue;
    }

    if (inString) continue;

    if (ch === "{") {
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0) {
        return i; // Position of the closing }
      }
    }
  }

  return -1;
}

function main() {
  const ogImages: Record<string, string> = JSON.parse(
    fs.readFileSync(OG_IMAGES_FILE, "utf-8")
  );

  // Filter and clean
  const filtered: Record<string, string> = {};
  let logoCount = 0;
  let badCount = 0;

  for (const [slug, url] of Object.entries(ogImages)) {
    if (isBadUrl(url)) {
      badCount++;
      continue;
    }
    if (isLikelyLogo(url)) {
      logoCount++;
      continue;
    }
    filtered[slug] = url;
  }

  console.log(`Filtered: ${Object.keys(filtered).length} usable images`);
  console.log(`Skipped: ${logoCount} logos, ${badCount} bad URLs\n`);

  // Read courts file
  const lines = fs.readFileSync(COURTS_FILE, "utf-8").split("\n");

  // Build a map of court name → line index for the opening { of each court
  // Each court starts with pattern: `  {` or `    {` followed by `id: N,`
  const courtStarts: Array<{ name: string; slug: string; openBraceLine: number }> = [];

  for (let i = 0; i < lines.length; i++) {
    const nameMatch = lines[i].match(/^\s+name:\s*"([^"]+)"/);
    if (nameMatch) {
      // Find the opening { for this court by scanning backwards
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

  // For each court that has a matching OG image, find the closing } and insert before it
  let applied = 0;
  const insertions: Array<{ lineIndex: number; text: string }> = [];

  for (const court of courtStarts) {
    const imageUrl = filtered[court.slug];
    if (!imageUrl) continue;

    // Find the closing } for this court object
    // The closing } is the one that brings brace depth back to 0
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

    // Check if ogImageUrl already exists between openBrace and closingBrace
    let alreadyExists = false;
    for (let i = court.openBraceLine; i <= closingBraceLine; i++) {
      if (lines[i].includes("ogImageUrl")) {
        alreadyExists = true;
        break;
      }
    }
    if (alreadyExists) continue;

    // Detect the indent of the line before the closing brace
    const prevLineIdx = closingBraceLine - 1;
    const prevLine = lines[prevLineIdx];
    const indentMatch = prevLine.match(/^(\s+)/);
    const indent = indentMatch ? indentMatch[1] : "    ";

    // Ensure the previous line has a trailing comma (needed for valid TS)
    const trimmed = prevLine.trimEnd();
    if (trimmed.length > 0 && !trimmed.endsWith(",") && !trimmed.endsWith("{") && !trimmed.endsWith("[")) {
      lines[prevLineIdx] = trimmed + ",";
    }

    // Insert ogImageUrl before the closing brace
    insertions.push({
      lineIndex: closingBraceLine,
      text: `${indent}ogImageUrl: "${imageUrl}",`,
    });
    applied++;
  }

  // Apply insertions from bottom to top so line indices don't shift
  insertions.sort((a, b) => b.lineIndex - a.lineIndex);
  for (const ins of insertions) {
    lines.splice(ins.lineIndex, 0, ins.text);
  }

  fs.writeFileSync(COURTS_FILE, lines.join("\n"));

  console.log(`Applied ${applied} ogImageUrl fields to padel-courts.ts`);
}

main();
