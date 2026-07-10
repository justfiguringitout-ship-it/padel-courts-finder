// Applies verified enrichment to src/data/padel-courts.ts by club id.
// Usage: node scripts/apply-enrichment.mjs enrichment.json
// JSON: [{ "id":338, "phone":"...", "pricingText":"...", "courtSurface":"...",
//         "positiveReviewThemes":"...", "negativeReviewThemes":"...",
//         "descriptionAppend":"...", "openingHours":{monday:"7h-22h",...},
//         "membersOnly":true }]
import fs from 'fs';
const FILE = 'src/data/padel-courts.ts';
const updates = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let src = fs.readFileSync(FILE, 'utf8');
const esc = s => String(s).replace(/\\/g,'\\\\').replace(/"/g,'\\"');
const log = [];

for (const u of updates) {
  // Isolate the block for this id
  const re = new RegExp(`(\\n    id: ${u.id},\\n)([\\s\\S]*?)(\\n  \\},)`);
  const m = src.match(re);
  if (!m) { log.push(`id ${u.id}: BLOCK NOT FOUND`); continue; }
  let block = m[1] + m[2] + m[3];
  const done = [];

  const setString = (field, val) => {
    if (val == null || val === '' || /UNAVAILABLE/i.test(String(val))) return;
    const lineRe = new RegExp(`\\n    ${field}: "[^"]*",`);
    const line = `\n    ${field}: "${esc(val)}",`;
    if (lineRe.test(block)) { block = block.replace(lineRe, () => line); done.push(field+'~'); }
    else { block = block.replace(/\n    status:/, () => `${line}\n    status:`); done.push(field); }
  };
  const setBool = (field, val) => {
    if (typeof val !== 'boolean') return;
    const lineRe = new RegExp(`\\n    ${field}: (true|false),`);
    const line = `\n    ${field}: ${val},`;
    if (lineRe.test(block)) block = block.replace(lineRe, () => line);
    else block = block.replace(/\n    status:/, () => `${line}\n    status:`);
    done.push(field);
  };

  setString('phone', u.phone);
  setString('pricingText', u.pricingText);
  setString('courtSurface', u.courtSurface);
  setString('positiveReviewThemes', u.positiveReviewThemes);
  setString('negativeReviewThemes', u.negativeReviewThemes);
  if (typeof u.membersOnly === 'boolean') setBool('membersOnly', u.membersOnly);

  // openingHours object — only insert if block has none
  if (u.openingHours && !/\n    openingHours: \{/.test(block)) {
    const days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    if (days.every(d => u.openingHours[d])) {
      const oh = '\n    openingHours: {\n' + days.map(d => `      ${d}: "${esc(u.openingHours[d])}",`).join('\n') + '\n    },';
      block = block.replace(/\n    status:/, () => `${oh}\n    status:`);
      done.push('openingHours');
    }
  }

  // description append (factual sentence) — only if not already present
  if (u.descriptionAppend) {
    const dm = block.match(/\n    description: "([^"]*)",/);
    if (dm && !dm[1].includes(u.descriptionAppend.slice(0, 25))) {
      const merged = dm[1].replace(/\s*$/, '') + ' ' + u.descriptionAppend.trim();
      block = block.replace(/\n    description: "[^"]*",/, () => `\n    description: "${esc(merged)}",`);
      done.push('description+');
    }
  }

  src = src.replace(re, () => block);
  log.push(`id ${u.id}: ${done.join(', ') || 'nothing applied'}`);
}

fs.writeFileSync(FILE, src);
console.log(log.join('\n'));
