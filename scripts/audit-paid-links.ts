/**
 * Paid-link audit: every product or shopping link on the site must go to a
 * store that pays us.
 *
 *   npm run build && npm run links:audit
 *   npm run links:audit -- --json            # machine-readable report
 *   npm run links:audit -- --verbose         # also list every PAID link
 *   npm run links:audit -- --check-live      # also fetch a sample of paid product pages
 *   npm run links:audit -- --check-live --max 20
 *
 * It reads the prerendered HTML that `npm run build` leaves under
 * .next/server/app, pulls out every outbound <a href> plus the Offer URLs in
 * JSON-LD, and keeps the shopping candidates:
 *   - any link to a store or brand host (STORE_HOSTS below), on any page;
 *   - any other external link on a shopping page (/blog/, /equipment, /gear,
 *     /reviews, gift pages) that is not a club, social, map or booking
 *     platform link and not in scripts/paid-links-allowlist.json.
 *
 * Each candidate is PAID when it carries our affiliate ID:
 *   - amazon.com with tag=padel02-20
 *   - padelusa.com with sca_ref=12558003.GftAmox910id57Cd
 *   - awin1.com with awinaffid=3125008
 * and UNPAID otherwise. A PAID <a> without rel="sponsored" is reported too.
 * The script exits 1 when anything is UNPAID or missing rel="sponsored".
 *
 * Club links are recognised by host: every URL host in src/data/*.ts (club
 * websites, booking pages, Instagram) and every host linked from a /courts/
 * page counts as a club host.
 *
 * Limits: dynamic (server-rendered on demand) pages have no prerendered HTML
 * and are not scanned, and links that only appear after a click in a client
 * component (the racket quiz results) are not in the HTML either. Those read
 * from the same store maps in src/lib/retailer-links.ts as the static pages.
 *
 * --check-live fetches at most --max (default 30) paid destinations, one per
 * second, with a normal browser User-Agent: the Amazon /dp/ page, the
 * padelusa.com page and the store page inside an Awin `ued`, always WITHOUT
 * our affiliate parameters so no test click is credited. Shopify stores
 * (padelusa.com, us.padelmarket.com) are read through their product .js
 * endpoint for a reliable in-stock flag. 401/403/429/503 and bot checks are
 * reported as "unknown", not broken.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, ".next", "server", "app");
const DATA_DIR = path.join(ROOT, "src", "data");
const ALLOWLIST_FILE = path.join(ROOT, "scripts", "paid-links-allowlist.json");
const OWN_HOSTS = ["padelcourtsfinder.com"];

const AMAZON_TAG = "padel02-20";
const PADEL_USA_REF = "12558003.GftAmox910id57Cd";
const AWIN_PUBLISHER = "3125008";
/** Awin merchants we are approved for: HEAD US, US Padel Market */
const AWIN_MERCHANTS: Record<string, string> = { "27978": "HEAD", "129063": "US Padel Market" };

const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";

/**
 * Store and brand hosts. A link to one of these is a shopping link wherever it
 * appears. Entries match the host itself and any subdomain.
 */
const STORE_HOSTS = [
  // stores
  "amazon.com", "amazon.co.uk", "amazon.es", "amazon.de", "amazon.ca", "amzn.to", "amzn.com", "a.co",
  "padelusa.com", "us.padelmarket.com", "padelmarket.com", "holabirdsports.com", "tennis-warehouse.com",
  "tenniswarehouse.com", "racketcentral.com", "padelpadel.com", "casaspadel.com", "pdhsports.com",
  "padelnuestro.com", "padel-nuestro.com", "padelreference.com", "zonadepadel.es", "ebay.com", "walmart.com",
  "target.com", "dickssportinggoods.com", "decathlon.com", "academy.com", "tennisexpress.com",
  "awin1.com", "awin.com", "shareasale.com", "prf.hn", "partnerize.com", "skimresources.com", "go.skimresources.com",
  "sovrn.co", "redirect.viglink.com", "anrdoezrs.net", "jdoqocy.com", "tkqlhce.com", "dpbolvw.net", "kqzyfj.com",
  "click.linksynergy.com", "linksynergy.com", "impact.com", "sjv.io", "pxf.io", "uppromote.com",
  // brands
  "head.com", "noxsport.com", "noxsportusa.com", "bullpadel.com", "babolat.com", "adidas.com", "adidas-padel.com",
  "wilson.com", "dunlopsports.com", "dunlop.com", "selkirk.com", "siuxpadel.com", "siux.es", "starvie.com",
  "drop-shot.com", "dropshot.es", "blackcrown.es", "vibor-a.com", "royalpadel.com", "kuikma.com", "oxdog.net",
  "joma-sport.com", "asics.com", "k-swiss.com", "prince.com", "tecnifibre.com", "harlem-padel.com", "lok.es",
  "varlion.com", "kombat.es", "akkeron.com", "mizuno.com", "yonex.com", "puma.com", "nike.com", "lotto.it",
];

const SOCIAL_HOSTS = [
  "instagram.com", "facebook.com", "fb.com", "fb.me", "tiktok.com", "youtube.com", "youtu.be", "x.com",
  "twitter.com", "linkedin.com", "threads.net", "pinterest.com", "whatsapp.com", "wa.me", "t.me",
];

const MAP_HOSTS = ["maps.google.com", "maps.app.goo.gl", "goo.gl", "maps.apple.com", "waze.com", "g.page"];

const BOOKING_HOSTS = [
  "playtomic.io", "playtomic.com", "playbypoint.com", "courtreserve.com", "clubautomation.com", "podplay.app",
  "joinpodplay.com", "matchi.se", "mindbodyonline.com", "clubspark.us", "clubspark.lta.org.uk", "setmore.com",
  "skedda.com", "calendly.com", "spot.club", "padelnation.io", "glofox.com", "wellnessliving.com",
  "teamsnap.com", "sportskey.com", "bookteetimes.com", "clubready.com", "ezfacility.com", "upper-hand.com",
  "usetopia.com", "courtside.app", "padelmates.co", "padelmates.se", "kibu.app", "playfinder.com",
];

/** Shopping pages: every external link here is a candidate unless it is a club, social, map or booking link */
const SHOPPING_PAGE = /^\/(blog(\/|$)|equipment(\/|$)|gear(\/|$)|reviews?(\/|$)|[^/]*gift)/;

interface AllowEntry {
  /** Host (and its subdomains) */
  host?: string;
  /** Exact URL, or a URL prefix ending in "*" */
  url?: string;
  /** Only on pages whose path starts with this */
  page?: string;
  reason: string;
}

type Status = "PAID" | "UNPAID";

interface Found {
  page: string;
  href: string;
  text: string;
  rel: string;
  source: "a" | "json-ld";
  host: string;
}

interface Candidate extends Found {
  status: Status;
  store: string;
  why: string;
  sponsoredOk: boolean;
  count: number;
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function hostMatches(host: string, list: string[]): boolean {
  return list.some((h) => host === h || host.endsWith(`.${h}`));
}

function normHost(raw: string): string {
  return raw.toLowerCase().replace(/^www\./, "");
}

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rarr: "→", larr: "←", mdash: "—", ndash: "–", hellip: "…", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", eacute: "é", iacute: "í" };

function decode(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (m, e: string) => {
    if (e[0] === "#") {
      const code = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return ENTITIES[e.toLowerCase()] ?? m;
  });
}

function attr(tag: string, name: string): string {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i")) ?? tag.match(new RegExp(`\\s${name}='([^']*)'`, "i"));
  return m ? decode(m[1]) : "";
}

function textOf(inner: string): string {
  return decode(inner.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function walkHtml(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walkHtml(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

function pagePath(file: string): string {
  let p = "/" + path.relative(APP_DIR, file).split(path.sep).join("/").replace(/\.html$/, "");
  if (p === "/index") p = "/";
  return p.replace(/\/index$/, "");
}

function parseUrl(href: string): URL | null {
  if (!/^https?:\/\//i.test(href)) return null;
  try {
    return new URL(href);
  } catch {
    return null;
  }
}

/** Offer URLs inside JSON-LD blocks */
function offerUrls(node: unknown, out: string[]): void {
  if (Array.isArray(node)) {
    for (const n of node) offerUrls(n, out);
    return;
  }
  if (!node || typeof node !== "object") return;
  const obj = node as Record<string, unknown>;
  const type = obj["@type"];
  const isOffer = type === "Offer" || type === "AggregateOffer" || (Array.isArray(type) && type.includes("Offer"));
  if (isOffer && typeof obj.url === "string") out.push(obj.url);
  for (const v of Object.values(obj)) offerUrls(v, out);
}

function extractLinks(file: string): Found[] {
  const html = readFileSync(file, "utf8");
  const page = pagePath(file);
  const found: Found[] = [];
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const tag = ` ${m[1]}`;
    const href = attr(tag, "href");
    const u = parseUrl(href);
    if (!u) continue;
    const host = normHost(u.hostname);
    if (hostMatches(host, OWN_HOSTS)) continue;
    found.push({ page, href, text: textOf(m[2]) || attr(tag, "aria-label") || "(no text)", rel: attr(tag, "rel"), source: "a", host });
  }
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    let json: unknown;
    try {
      json = JSON.parse(m[1]);
    } catch {
      continue;
    }
    const urls: string[] = [];
    offerUrls(json, urls);
    for (const href of urls) {
      const u = parseUrl(href);
      if (!u) continue;
      const host = normHost(u.hostname);
      if (hostMatches(host, OWN_HOSTS)) continue;
      found.push({ page, href, text: "[JSON-LD Offer url]", rel: "", source: "json-ld", host });
    }
  }
  return found;
}

/** Every URL host in src/data/*.ts, i.e. club websites, booking pages and socials */
function clubHostsFromData(): Set<string> {
  const hosts = new Set<string>();
  if (!existsSync(DATA_DIR)) return hosts;
  for (const name of readdirSync(DATA_DIR)) {
    if (!/\.(ts|json)$/.test(name)) continue;
    const src = readFileSync(path.join(DATA_DIR, name), "utf8");
    for (const m of src.matchAll(/https?:\/\/([a-z0-9.-]+)/gi)) hosts.add(normHost(m[1]));
  }
  return hosts;
}

function loadAllowlist(): AllowEntry[] {
  if (!existsSync(ALLOWLIST_FILE)) return [];
  const raw = JSON.parse(readFileSync(ALLOWLIST_FILE, "utf8")) as { entries?: AllowEntry[] };
  return raw.entries ?? [];
}

function allowed(f: Found, list: AllowEntry[]): AllowEntry | undefined {
  return list.find((e) => {
    if (e.page && !f.page.startsWith(e.page)) return false;
    if (e.host && !hostMatches(f.host, [normHost(e.host)])) return false;
    if (e.url) {
      if (e.url.endsWith("*") ? !f.href.startsWith(e.url.slice(0, -1)) : f.href !== e.url) return false;
    }
    return Boolean(e.host || e.url);
  });
}

function classify(f: Found): { status: Status; store: string; why: string } {
  const u = new URL(f.href);
  const host = f.host;
  if (host === "amazon.com" || host.endsWith(".amazon.com")) {
    const tag = u.searchParams.get("tag");
    return tag === AMAZON_TAG
      ? { status: "PAID", store: "Amazon", why: `tag=${tag}` }
      : { status: "UNPAID", store: "Amazon", why: tag ? `wrong tag=${tag}` : "no tag" };
  }
  if (host === "padelusa.com") {
    const ref = u.searchParams.get("sca_ref");
    if (u.searchParams.has("_kx")) return { status: "UNPAID", store: "Padel USA", why: "Klaviyo _kx link" };
    return ref === PADEL_USA_REF
      ? { status: "PAID", store: "Padel USA", why: "sca_ref" }
      : { status: "UNPAID", store: "Padel USA", why: ref ? `wrong sca_ref=${ref}` : "no sca_ref" };
  }
  if (host === "awin1.com") {
    const aff = u.searchParams.get("awinaffid");
    const mid = u.searchParams.get("awinmid") ?? "";
    const store = AWIN_MERCHANTS[mid] ?? `Awin merchant ${mid || "?"}`;
    if (aff !== AWIN_PUBLISHER) return { status: "UNPAID", store, why: aff ? `wrong awinaffid=${aff}` : "no awinaffid" };
    return { status: "PAID", store, why: AWIN_MERCHANTS[mid] ? "awinaffid" : `awinaffid, but merchant ${mid} is not one we know` };
  }
  return { status: "UNPAID", store: host, why: "no affiliate program on this link" };
}

/* -------------------------------------------------------------------------- */
/* Live check                                                                 */
/* -------------------------------------------------------------------------- */

interface LiveResult {
  url: string;
  store: string;
  result: "ok" | "broken" | "sold out" | "unknown";
  detail: string;
}

/** The store page a paid link lands on, without our affiliate parameters */
function destination(href: string): { url: string; store: string } | null {
  const u = new URL(href);
  const host = normHost(u.hostname);
  if (host === "amazon.com") {
    const asin = u.pathname.match(/\/dp\/([A-Z0-9]{10})/)?.[1];
    return asin ? { url: `https://www.amazon.com/dp/${asin}`, store: "Amazon" } : null;
  }
  if (host === "padelusa.com") {
    for (const k of [...u.searchParams.keys()]) if (k === "sca_ref" || k.startsWith("utm_")) u.searchParams.delete(k);
    return { url: u.toString(), store: "Padel USA" };
  }
  if (host === "awin1.com") {
    const ued = u.searchParams.get("ued");
    const mid = u.searchParams.get("awinmid") ?? "";
    return ued ? { url: ued, store: AWIN_MERCHANTS[mid] ?? `Awin ${mid}` } : null;
  }
  return null;
}

const SHOPIFY_HOSTS = ["padelusa.com", "us.padelmarket.com"];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function checkOne(url: string, store: string): Promise<LiveResult> {
  const u = new URL(url);
  const host = normHost(u.hostname);
  const headers = { "User-Agent": BROWSER_UA, Accept: "text/html,application/json;q=0.9,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.9" };
  try {
    if (SHOPIFY_HOSTS.includes(host) && /^\/products\/[^/]+\/?$/.test(u.pathname)) {
      const res = await fetch(`${u.origin}${u.pathname.replace(/\/$/, "")}.js`, { headers, redirect: "follow" });
      if (res.status === 404) return { url, store, result: "broken", detail: "404" };
      if (!res.ok) return { url, store, result: "unknown", detail: `HTTP ${res.status}` };
      const p = (await res.json()) as { title?: string; available?: boolean; price?: number };
      const price = typeof p.price === "number" ? ` $${(p.price / 100).toFixed(2)}` : "";
      return p.available ? { url, store, result: "ok", detail: `in stock${price}` } : { url, store, result: "sold out", detail: `sold out${price}` };
    }
    const res = await fetch(url, { headers, redirect: "follow" });
    if (res.status === 404 || res.status === 410) return { url, store, result: "broken", detail: String(res.status) };
    if ([401, 403, 429, 503].includes(res.status)) return { url, store, result: "unknown", detail: `HTTP ${res.status} (bot wall)` };
    if (!res.ok) return { url, store, result: "unknown", detail: `HTTP ${res.status}` };
    const body = await res.text();
    const title = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
    if (/captcha|robot check|security checkpoint|just a moment|access denied|are you a human/i.test(title) || /\/errors\/validateCaptcha/.test(body)) {
      return { url, store, result: "unknown", detail: "bot check page" };
    }
    if (/page not found|404 not found|we can't find that page|this page does not exist/i.test(title)) return { url, store, result: "broken", detail: "not-found page" };
    if (host === "amazon.com") {
      // Only the buy box counts: "Currently unavailable" also appears in other widgets
      const block = body.match(/id="availability"[\s\S]{0,1500}?<\/div>/)?.[0];
      if (!block) return { url, store, result: "unknown", detail: "no availability box" };
      const text = decode(block.replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/^id="availability"[^>]*>/, "").replace(/\s+/g, " ").trim().slice(0, 40);
      if (/currently unavailable|out of stock/i.test(text)) return { url, store, result: "sold out", detail: text };
      return { url, store, result: "ok", detail: text || `HTTP ${res.status}` };
    }
    const isProduct = /\/(products?|dp)\//.test(u.pathname);
    if (isProduct && /"availability"\s*:\s*"https?:\/\/schema\.org\/(OutOfStock|SoldOut)"/i.test(body) && !/"availability"\s*:\s*"https?:\/\/schema\.org\/InStock"/i.test(body)) {
      return { url, store, result: "sold out", detail: "JSON-LD OutOfStock" };
    }
    return { url, store, result: "ok", detail: `HTTP ${res.status}` };
  } catch (err) {
    return { url, store, result: "unknown", detail: (err as Error).message };
  }
}

async function checkLive(paid: Candidate[], max: number): Promise<LiveResult[]> {
  const byStore = new Map<string, string[]>();
  const seen = new Set<string>();
  for (const c of paid) {
    const d = destination(c.href);
    if (!d || seen.has(d.url)) continue;
    seen.add(d.url);
    if (!byStore.has(d.store)) byStore.set(d.store, []);
    byStore.get(d.store)!.push(d.url);
  }
  // Round robin across stores so every store is sampled, product pages first
  const queues = [...byStore.entries()].map(([store, urls]) => ({
    store,
    urls: urls.sort((a, b) => Number(/\/(dp|products|product)\//.test(b)) - Number(/\/(dp|products|product)\//.test(a))),
  }));
  const picked: { url: string; store: string }[] = [];
  while (picked.length < max && queues.some((q) => q.urls.length)) {
    for (const q of queues) {
      const url = q.urls.shift();
      if (url && picked.length < max) picked.push({ url, store: q.store });
    }
  }
  const results: LiveResult[] = [];
  for (const [i, p] of picked.entries()) {
    if (i > 0) await sleep(1000);
    results.push(await checkOne(p.url, p.store));
  }
  return results;
}

/* -------------------------------------------------------------------------- */
/* Main                                                                       */
/* -------------------------------------------------------------------------- */

async function main() {
  const args = process.argv.slice(2);
  const asJson = args.includes("--json");
  const verbose = args.includes("--verbose");
  const live = args.includes("--check-live");
  const maxIdx = args.indexOf("--max");
  const max = maxIdx >= 0 ? Math.max(1, Math.min(30, Number(args[maxIdx + 1]) || 30)) : 30;

  if (!existsSync(APP_DIR)) {
    console.error("No prerendered pages at .next/server/app. Run `npm run build` first.");
    process.exit(2);
  }

  const files = walkHtml(APP_DIR);
  const all = files.flatMap(extractLinks);

  // Club hosts: data files plus everything linked from a club page
  const clubHosts = clubHostsFromData();
  for (const f of all) if (f.page.startsWith("/courts/") && f.source === "a") clubHosts.add(f.host);

  const allow = loadAllowlist();
  const byKey = new Map<string, Candidate>();
  let allowlisted = 0;
  for (const f of all) {
    const isStore = hostMatches(f.host, STORE_HOSTS);
    if (!isStore) {
      if (!SHOPPING_PAGE.test(f.page)) continue;
      if (hostMatches(f.host, SOCIAL_HOSTS) || hostMatches(f.host, MAP_HOSTS) || hostMatches(f.host, BOOKING_HOSTS)) continue;
      if (clubHosts.has(f.host) && !hostMatches(f.host, STORE_HOSTS)) continue;
      if (f.host === "google.com" && /^\/maps/.test(new URL(f.href).pathname)) continue;
    }
    const c = classify(f);
    if (c.status === "UNPAID" && allowed(f, allow)) {
      allowlisted++;
      continue;
    }
    const sponsoredOk = c.status !== "PAID" || f.source === "json-ld" || /\bsponsored\b/.test(f.rel);
    const key = `${f.page}\n${f.href}\n${f.text}`;
    const prev = byKey.get(key);
    if (prev) prev.count++;
    else byKey.set(key, { ...f, ...c, sponsoredOk, count: 1 });
  }

  const cands = [...byKey.values()].sort((a, b) => a.page.localeCompare(b.page) || a.href.localeCompare(b.href));
  const unpaid = cands.filter((c) => c.status === "UNPAID");
  const paid = cands.filter((c) => c.status === "PAID");
  const noSponsored = paid.filter((c) => !c.sponsoredOk);
  const sum = (xs: Candidate[]) => xs.reduce((n, c) => n + c.count, 0);

  const liveResults = live ? await checkLive(paid, max) : [];

  if (asJson) {
    console.log(JSON.stringify({ pages: files.length, paid: sum(paid), unpaid: sum(unpaid), missingSponsored: sum(noSponsored), allowlisted, unpaidLinks: unpaid, missingSponsoredLinks: noSponsored, paidLinks: verbose ? paid : undefined, live: live ? liveResults : undefined }, null, 2));
  } else {
    const line = (c: Candidate) => `  ${c.page}\n    "${c.text.slice(0, 90)}"${c.count > 1 ? ` (x${c.count})` : ""}\n    ${c.href}\n    ${c.store}: ${c.why}${c.source === "json-ld" ? " [JSON-LD]" : ""}`;
    if (unpaid.length) {
      console.log(`UNPAID shopping links (${sum(unpaid)}):`);
      for (const c of unpaid) console.log(line(c));
      console.log("");
    }
    if (noSponsored.length) {
      console.log(`PAID links missing rel="sponsored" (${sum(noSponsored)}):`);
      for (const c of noSponsored) console.log(line(c));
      console.log("");
    }
    if (verbose) {
      console.log(`PAID shopping links (${sum(paid)}):`);
      for (const c of paid) console.log(line(c));
      console.log("");
    }
    if (live) {
      console.log(`Live check of ${liveResults.length} paid destinations (1 per second, affiliate parameters stripped):`);
      for (const r of liveResults) console.log(`  ${r.result.padEnd(8)} ${r.store.padEnd(16)} ${r.detail.padEnd(26)} ${r.url}`);
      const bad = liveResults.filter((r) => r.result === "broken" || r.result === "sold out");
      console.log(bad.length ? `  ${bad.length} broken or sold out, see above.` : "  No broken or sold-out pages in the sample.");
      console.log("");
    }
    const stores = new Map<string, number>();
    for (const c of paid) stores.set(c.store, (stores.get(c.store) ?? 0) + c.count);
    console.log(`Scanned ${files.length} prerendered pages.`);
    console.log(`PAID: ${sum(paid)} (${[...stores.entries()].map(([s, n]) => `${s} ${n}`).join(", ")})`);
    console.log(`UNPAID: ${sum(unpaid)}`);
    console.log(`Missing rel="sponsored": ${sum(noSponsored)}`);
    console.log(`Allowlisted non-shopping links: ${allowlisted}`);
    console.log(unpaid.length || noSponsored.length ? "FAIL" : "OK: every shopping link goes to a store that pays us.");
  }
  process.exit(unpaid.length || noSponsored.length ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
