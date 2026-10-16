#!/usr/bin/env node
/**
 * Classifies every club image referenced in src/data/padel-courts.ts as a
 * real "photo" or a "logo" (wordmark, badge, flat brand graphic) and writes
 * src/data/club-image-kinds.json. The club page uses it to pick the hero:
 * photos get the full-width image hero, logos get the designed court hero
 * with the logo as a small avatar.
 *
 * Heuristic, in order (a club's own `imageKind` in the data always wins):
 *   1. filename contains "logo"
 *   2. square-ish (aspect 0.75 to 1.33) with real transparency (5%+ of pixels)
 *   3. under ~30KB AND flat (Shannon entropy < 2.2). Small photos exist
 *      (heavily compressed webp), so size alone is not enough.
 *   4. very flat at any size (entropy < 2.0): solid backgrounds with a mark.
 *
 * Run after adding or replacing club images:  npm run images:classify
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dataFile = path.join(root, "src/data/padel-courts.ts");
const outFile = path.join(root, "src/data/club-image-kinds.json");

const src = fs.readFileSync(dataFile, "utf8");
const urls = [...new Set([...src.matchAll(/"(\/images\/courts\/[^"]+)"/g)].map((m) => m[1]))].sort();

const result = {};
for (const url of urls) {
  const file = path.join(root, "public", url);
  if (!fs.existsSync(file)) continue;
  const bytes = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  const { entropy } = await sharp(file).stats();
  let transparent = 0;
  if (meta.hasAlpha) {
    const { data, info } = await sharp(file).ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true });
    let t = 0;
    for (const v of data) if (v < 250) t++;
    transparent = t / (info.width * info.height);
  }
  const aspect = meta.width / meta.height;
  const squareish = aspect >= 0.75 && aspect <= 1.33;
  const kb = bytes / 1024;
  let kind = "photo";
  let why = "";
  if (/logo/i.test(path.basename(url))) [kind, why] = ["logo", "filename"];
  else if (squareish && transparent >= 0.05) [kind, why] = ["logo", "square with transparency"];
  else if (kb < 30 && entropy < 2.2) [kind, why] = ["logo", "small and flat"];
  else if (entropy < 2.0) [kind, why] = ["logo", "flat graphic"];
  const entry = { kind, width: meta.width, height: meta.height, ...(why ? { why } : {}) };
  if (kind === "logo") {
    // Where the mark actually sits (OG logos carry wide empty margins) and the
    // background colour around it, so the avatar can crop to the mark.
    const { info } = await sharp(file).trim({ threshold: 12 }).toBuffer({ resolveWithObject: true });
    const { data } = await sharp(file).removeAlpha().extract({ left: 2, top: 2, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
    const hex = "#" + [...data.subarray(0, 3)].map((v) => v.toString(16).padStart(2, "0")).join("");
    entry.mark = { x: -(info.trimOffsetLeft ?? 0), y: -(info.trimOffsetTop ?? 0), w: info.width, h: info.height };
    entry.bg = meta.hasAlpha && transparent >= 0.05 ? "#ffffff" : hex;
  }
  result[url] = entry;
}

fs.writeFileSync(outFile, JSON.stringify(result, null, 2) + "\n");
const logos = Object.entries(result).filter(([, v]) => v.kind === "logo");
console.log(`Classified ${urls.length} images: ${logos.length} logos, ${urls.length - logos.length} photos -> ${path.relative(root, outFile)}`);
for (const [u, v] of logos) console.log(`  logo  ${u}  (${v.why})`);
