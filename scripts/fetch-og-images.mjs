#!/usr/bin/env node

/**
 * Fetches OG images from club websites for entries missing ogImageUrl.
 * Skips clubs that already have ogImageUrl or googlePlacePhotoRef.
 * Usage: node scripts/fetch-og-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'padel-courts.ts');

async function fetchOgImage(websiteUrl, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    let url = websiteUrl.trim();
    if (url.includes(',')) url = url.split(',')[0].trim();
    if (url.includes(' ')) url = url.split(' ')[0].trim();
    if (url.endsWith('(')) url = url.slice(0, -1).trim();
    if (!url.startsWith('http')) url = 'https://' + url;

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
      redirect: 'follow',
    });

    if (!res.ok) return null;
    const html = await res.text();

    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

    if (!ogMatch) return null;

    let imageUrl = ogMatch[1].trim();
    if (/favicon|icon\.|\.ico$/i.test(imageUrl)) return null;
    if (imageUrl.length < 10) return null;

    if (imageUrl.startsWith('//')) {
      imageUrl = 'https:' + imageUrl;
    } else if (imageUrl.startsWith('/')) {
      const base = new URL(url);
      imageUrl = base.origin + imageUrl;
    } else if (!imageUrl.startsWith('http')) {
      const base = new URL(url);
      imageUrl = base.origin + '/' + imageUrl;
    }

    return imageUrl;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Find the line index of the closing `},` or `}` for an entry
 * starting at the `{ id: NNN,` line, properly counting nested braces.
 */
function findEntryEndLine(lines, startLine) {
  let depth = 0;
  for (let i = startLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
    }
    if (depth === 0) return i;
  }
  return -1;
}

async function main() {
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  const lines = content.split('\n');

  // Find entries that need OG images
  const entries = [];
  for (let i = 0; i < lines.length; i++) {
    const idMatch = lines[i].match(/^\s+id:\s*(\d+),/);
    if (!idMatch) continue;

    const id = parseInt(idMatch[1]);
    // The entry starts one line above (the opening `{`)
    const entryStart = i - 1;
    const entryEnd = findEntryEndLine(lines, entryStart);
    if (entryEnd === -1) continue;

    const block = lines.slice(entryStart, entryEnd + 1).join('\n');

    const hasOgImage = /ogImageUrl\s*:/.test(block);
    const hasPhotoRef = /googlePlacePhotoRef\s*:/.test(block);
    const websiteMatch = block.match(/website\s*:\s*"([^"]+)"/);
    const nameMatch = block.match(/name\s*:\s*"([^"]+)"/);

    if (websiteMatch && !hasOgImage && !hasPhotoRef) {
      const website = websiteMatch[1];
      if (website.includes('padelcourtsfinder.com')) continue;

      entries.push({
        id,
        name: nameMatch ? nameMatch[1] : `ID ${id}`,
        website,
        entryEndLine: entryEnd, // the line with the closing `}`
      });
    }
  }

  console.log(`Found ${entries.length} clubs without ogImageUrl to check.\n`);

  let found = 0;
  let failed = 0;
  const results = [];

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    process.stdout.write(`[${i + 1}/${entries.length}] ${entry.name}... `);

    const imageUrl = await fetchOgImage(entry.website);
    if (imageUrl) {
      found++;
      results.push({ ...entry, imageUrl });
      console.log(`✓ ${imageUrl.substring(0, 80)}${imageUrl.length > 80 ? '...' : ''}`);
    } else {
      failed++;
      console.log('✗ no OG image');
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Checked: ${entries.length}`);
  console.log(`Found:   ${found}`);
  console.log(`Failed:  ${failed}\n`);

  if (results.length === 0) {
    console.log('No new images to write.');
    return;
  }

  // Insert ogImageUrl lines into the file, working backwards to preserve line numbers
  const sortedResults = results.sort((a, b) => b.entryEndLine - a.entryEndLine);

  for (const result of sortedResults) {
    const endLine = result.entryEndLine;
    // The closing line looks like `  },` — insert ogImageUrl just before it
    // Determine indent from the id line (search upward for it)
    let indent = '    ';
    for (let j = endLine - 1; j >= Math.max(0, endLine - 50); j--) {
      const m = lines[j].match(/^(\s+)id:/);
      if (m) { indent = m[1]; break; }
    }

    const escapedUrl = result.imageUrl.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const newLine = `${indent}ogImageUrl: "${escapedUrl}",`;

    // Insert before the closing brace line
    lines.splice(endLine, 0, newLine);
  }

  fs.writeFileSync(DATA_FILE, lines.join('\n'));
  console.log(`Wrote ${results.length} ogImageUrl entries to padel-courts.ts`);
}

main().catch(console.error);
