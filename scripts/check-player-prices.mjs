#!/usr/bin/env node
/**
 * Sanity check for src/lib/player-price.ts (price per player per hour).
 *
 *   node scripts/check-player-prices.mjs            # coverage + 20 random parses + assertions
 *   node scripts/check-player-prices.mjs --all      # every club, parsed or not
 *   SEED=3 node scripts/check-player-prices.mjs     # a different random sample
 *
 * Exits non-zero if any fixed assertion fails, so a parser change that
 * breaks a known club shows up before it ships.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": path.join(root, "src") } });
const { padelCourts } = await jiti.import(path.join(root, "src/data/padel-courts.ts"));
const { parsePlayerPrice, formatPlayerPrice } = await jiti.import(path.join(root, "src/lib/player-price.ts"));

const describe = (p) =>
  p
    ? `${formatPlayerPrice(p)} per player/hr (high $${p.perPlayerHigh}, ${p.basis}, ${p.source}${p.courtHourly ? `, court $${p.courtHourly}/hr` : ""})`
    : "unknown";

// --- Fixed cases: [text, expected perPlayer (null = unknown), expected isFrom]
const cases = [
  ["$60 per hour", 15, false],
  ["$30–$60 per court/hour", 8, true],
  ["Off-peak $55/hr, peak $65/hr", 14, true],
  ["Court bookings start at $28/90min outdoor", null, null], // $19/hr court is below the band: likely per person, so unknown
  ["Court rental starting at $28 per player for 90min outdoor; private lessons $150/60min", 19, false],
  ["Non-member: $40 peak / $25 off-peak per person per hour; Premier membership $120/mo ($20 peak / $16 off-peak)", 25, true],
  ["Prime Time: Members $20/hour, Non-members $50/hour", 13, false],
  ["Padel: $60/hour (non-members), $30/hour (members)", 15, false],
  ["Padel: $15/person for 1 hour, $20/person for 1.5 hours; Pickleball: $30/hour", 13, true],
  ["Soccer: $130-$150/hour; Padel: approx. $12-$28/hour per player", null, null], // approximate figures stay unknown
  ["Court: 60min $45, 90min $65", 11, false], // $45/hr and $43/hr both round to $11
  ["Court rental $60 for 90 minutes", 10, false],
  ["Padel: $100 per court for 1.5 hours; Pickleball: $40 per court per hour", 17, false],
  ["Pay as you go $35 per 90-minute session", null, null],
  ["Drop-in off-peak $18/60min to $30/120min; on-peak $23/60min to $40/120min", null, null],
  ["~$20-40/hr (est.)", null, null],
  ["Memberships from $50/month; court rental rates unknown", null, null],
  ["Court fees: $22/person for padel", null, null],
  ["Membership $100/mo + $300 initiation; padel $25/pp/hr, pickleball $12.50/pp/hr (members)", null, null],
  ["$40+ per hour; lessons $40–$80/hr", 10, true],
  ["$20–$40 per hour (varies by time/membership)", null, null], // court or person? unknown
  ["Peak: ~$50-65/hour; Off-peak: ~$30-55/hour", null, null], // approximate figures stay unknown
  ["Court rentals ~$30-60/hr non-members", null, null], // approximate figures stay unknown
  ["Peak: $35/hour/person; Memberships from $160/month", 35, false],
];
let failures = 0;
for (const [text, want, wantFrom] of cases) {
  const p = parsePlayerPrice(text);
  const got = p ? p.perPlayer : null;
  const ok = got === want && (want === null || p.isFrom === wantFrom);
  if (!ok) {
    failures++;
    console.log(`FAIL  "${text}"\n      expected ${want === null ? "unknown" : `$${want}${wantFrom ? " (from)" : ""}`}, got ${describe(p)}`);
  }
}
console.log(`assertions: ${cases.length - failures}/${cases.length} pass`);

// --- Coverage over the whole directory
const parsed = [];
let withText = 0;
for (const c of padelCourts) {
  if (c.pricingText) withText++;
  const p = parsePlayerPrice(c.pricingText);
  if (p) parsed.push({ c, p });
  if (process.argv.includes("--all")) console.log(`${p ? formatPlayerPrice(p).padEnd(9) : "--".padEnd(9)} ${c.name} :: ${c.pricingText ?? "(no pricing text)"}`);
}
console.log(
  `\nclubs: ${padelCourts.length}, with pricing text: ${withText}, with a per-player price: ${parsed.length} ` +
    `(${parsed.filter((x) => x.p.source === "per-player").length} published per player, ${parsed.filter((x) => x.p.source === "court").length} from a court rate / 4)`
);

let seed = Number(process.env.SEED ?? 7);
const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
const sample = parsed
  .map((x) => ({ x, k: rnd() }))
  .sort((a, b) => a.k - b.k)
  .slice(0, 20)
  .map(({ x }) => x);
console.log("\n20 random parsed examples (raw text -> result):");
for (const { c, p } of sample) console.log(`- ${c.name}: "${c.pricingText}"\n    -> ${describe(p)}`);

process.exit(failures ? 1 : 0);
