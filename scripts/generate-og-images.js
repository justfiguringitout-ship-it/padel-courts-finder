#!/usr/bin/env node
/**
 * Generates branded 1200x630 OG share images from inline SVG via sharp.
 * Output: public/og/default.png, public/og/state-of-us-padel-2026.png
 * Re-run after brand changes: node scripts/generate-og-images.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT_DIR = path.join(__dirname, "..", "public", "og");
fs.mkdirSync(OUT_DIR, { recursive: true });

// Scatter of "club lights" evocative of the constellation map
const DOTS = [
  [180, 210], [240, 260], [210, 330], [320, 300], [420, 380], [500, 300],
  [610, 340], [700, 260], [760, 330], [860, 210], [920, 260], [980, 190],
  [1040, 250], [880, 380], [300, 430], [520, 460], [660, 440], [960, 420],
  [420, 210], [760, 460], [1080, 350],
].map(([x, y], i) =>
  `<circle cx="${x}" cy="${y + 60}" r="14" fill="#4ADE80" opacity="0.12"/>
   <circle cx="${x}" cy="${y + 60}" r="${i % 3 === 0 ? 6 : 4.5}" fill="#4ADE80" opacity="${i % 4 === 0 ? 0.95 : 0.7}"/>`
).join("\n");

const COURT = `
  <g transform="translate(940,-80) rotate(12)" stroke="#FFFFFF" stroke-opacity="0.07" stroke-width="5" fill="none">
    <rect x="0" y="0" width="360" height="720" rx="6"/>
    <line x1="0" y1="360" x2="360" y2="360" stroke-dasharray="18 14"/>
    <line x1="0" y1="180" x2="360" y2="180"/>
    <line x1="0" y1="540" x2="360" y2="540"/>
    <line x1="180" y1="180" x2="180" y2="540"/>
  </g>`;

const MARK = (x, y, s) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect width="64" height="64" rx="16" fill="#0e1626" stroke="#4ADE80" stroke-opacity="0.4" stroke-width="2"/>
    <rect x="13" y="10" width="38" height="44" rx="4" stroke="white" stroke-opacity="0.4" stroke-width="3" fill="none"/>
    <line x1="13" y1="32" x2="51" y2="32" stroke="white" stroke-opacity="0.4" stroke-width="3" stroke-dasharray="4 4"/>
    <circle cx="42" cy="22" r="10" fill="#4ADE80" fill-opacity="0.25"/>
    <circle cx="42" cy="22" r="6" fill="#4ADE80"/>
  </g>`;

const FONT = `font-family="Avenir Next, Helvetica Neue, Arial, sans-serif"`;

const defaultSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0c1322"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <defs>
    <radialGradient id="g" cx="30%" cy="20%" r="90%">
      <stop offset="0%" stop-color="#16233c"/>
      <stop offset="100%" stop-color="#0c1322"/>
    </radialGradient>
  </defs>
  ${COURT}
  ${DOTS}
  ${MARK(80, 72, 1.1)}
  <text x="168" y="118" ${FONT} font-size="34" font-weight="700" fill="#FFFFFF">Padel Courts Finder</text>
  <text x="80" y="330" ${FONT} font-size="76" font-weight="800" fill="#FFFFFF">Every padel court</text>
  <text x="80" y="418" ${FONT} font-size="76" font-weight="800" fill="#FFFFFF">in America. <tspan fill="#4ADE80">Find yours.</tspan></text>
  <text x="80" y="540" ${FONT} font-size="30" fill="#8fa3bd">padelcourtsfinder.com</text>
  <rect x="0" y="622" width="1200" height="8" fill="#16A34A"/>
</svg>`;

const reportSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0c1322"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <defs>
    <radialGradient id="g" cx="30%" cy="20%" r="90%">
      <stop offset="0%" stop-color="#16233c"/>
      <stop offset="100%" stop-color="#0c1322"/>
    </radialGradient>
  </defs>
  ${COURT}
  ${DOTS}
  <text x="80" y="120" ${FONT} font-size="26" font-weight="600" letter-spacing="4" fill="#4ADE80">ORIGINAL DATA · 2026</text>
  <text x="80" y="240" ${FONT} font-size="88" font-weight="800" fill="#FFFFFF">The State of</text>
  <text x="80" y="340" ${FONT} font-size="88" font-weight="800" fill="#FFFFFF">US Padel</text>
  <text x="80" y="460" ${FONT} font-size="38" font-weight="700" fill="#4ADE80">323 clubs · 1,255 courts · 38 states</text>
  <text x="80" y="540" ${FONT} font-size="30" fill="#8fa3bd">padelcourtsfinder.com/state-of-us-padel-2026</text>
  <rect x="0" y="622" width="1200" height="8" fill="#16A34A"/>
</svg>`;

(async () => {
  await sharp(Buffer.from(defaultSvg)).png().toFile(path.join(OUT_DIR, "default.png"));
  await sharp(Buffer.from(reportSvg)).png().toFile(path.join(OUT_DIR, "state-of-us-padel-2026.png"));
  console.log("Generated:", fs.readdirSync(OUT_DIR).join(", "));
})();
