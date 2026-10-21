/**
 * Club Spotlight event vocabulary and input checks. Pure (no Node or Next
 * imports), shared by the browser tracker, POST /api/spotlight/event, the
 * owner dashboard and scripts/spotlight-report.ts.
 */

export const SPOTLIGHT_EVENTS = ["view", "impression", "click", "engaged", "read"] as const;
export type SpotlightEventName = (typeof SPOTLIGHT_EVENTS)[number];

export const SPOTLIGHT_PLACEMENTS = ["article", "state-card", "city-card", "club-page"] as const;
export type SpotlightPlacement = (typeof SPOTLIGHT_PLACEMENTS)[number];

/**
 * Click kinds: the outbound CTA kinds, plus "directory" (the article's link to
 * the club's page on our site) and "article" (a pinned card's link to the article).
 */
export const SPOTLIGHT_CLICK_KINDS = [
  "book",
  "website",
  "instagram",
  "phone",
  "directions",
  "membership",
  "directory",
  "article",
] as const;
export type SpotlightClickKind = (typeof SPOTLIGHT_CLICK_KINDS)[number];

/** What the browser sends. */
export interface SpotlightEventInput {
  slug: string;
  event: SpotlightEventName;
  placement: SpotlightPlacement;
  kind?: SpotlightClickKind | null;
  path?: string | null;
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
}

/** One stored row (table public.pcf_spotlight_events). */
export interface SpotlightEventRow {
  id?: string;
  created_at?: string;
  spotlight_slug: string;
  event: SpotlightEventName;
  kind: string | null;
  placement: SpotlightPlacement;
  path: string | null;
  referrer_host: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  country: string | null;
  device: "mobile" | "desktop" | null;
  visitor_hash: string;
}

const SLUG_RE = /^[a-z0-9-]{1,120}$/;

function cleanText(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
  return t || null;
}

export type ParseResult = { ok: true; value: SpotlightEventInput } | { ok: false; error: string };

export function parseSpotlightEvent(raw: unknown): ParseResult {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return { ok: false, error: "body must be an object" };
  const b = raw as Record<string, unknown>;
  const slug = typeof b.slug === "string" ? b.slug : "";
  if (!SLUG_RE.test(slug)) return { ok: false, error: "bad slug" };
  if (!SPOTLIGHT_EVENTS.includes(b.event as SpotlightEventName)) return { ok: false, error: "bad event" };
  if (!SPOTLIGHT_PLACEMENTS.includes(b.placement as SpotlightPlacement)) return { ok: false, error: "bad placement" };
  const event = b.event as SpotlightEventName;
  const placement = b.placement as SpotlightPlacement;

  let kind: SpotlightClickKind | null = null;
  if (event === "click") {
    if (!SPOTLIGHT_CLICK_KINDS.includes(b.kind as SpotlightClickKind)) return { ok: false, error: "bad kind" };
    kind = b.kind as SpotlightClickKind;
  }
  // Which events make sense where: the article logs view/engaged/read/click,
  // pinned cards log impression/click, the club page also logs its own view.
  const allowed: Record<SpotlightPlacement, SpotlightEventName[]> = {
    article: ["view", "engaged", "read", "click"],
    "state-card": ["impression", "click"],
    "city-card": ["impression", "click"],
    "club-page": ["view", "impression", "click"],
  };
  if (!allowed[placement].includes(event)) return { ok: false, error: "event not allowed for placement" };

  let path = cleanText(b.path, 300);
  if (path && !path.startsWith("/")) path = null;

  return {
    ok: true,
    value: {
      slug,
      event,
      placement,
      kind,
      path,
      referrer: cleanText(b.referrer, 500),
      utm_source: cleanText(b.utm_source, 100),
      utm_medium: cleanText(b.utm_medium, 100),
    },
  };
}

/** Obvious bots, crawlers, link previewers and headless browsers. An empty UA counts as a bot. */
const BOT_RE =
  /bot\b|bot\/|crawl|spider|slurp|scrap|headless|phantom|puppeteer|playwright|selenium|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|preview|facebookexternalhit|embedly|whatsapp|telegram|slack|discord|curl\/|wget\/|python-|python\/|go-http|java\/|okhttp|axios|node-fetch|undici|httpclient|libwww|feedfetcher|apis-google|mediapartners|bingpreview|vercel-screenshot/i;

export function isBotUserAgent(ua: string | null | undefined): boolean {
  if (!ua || ua.length < 20) return true;
  return BOT_RE.test(ua);
}

export function deviceFromUserAgent(ua: string | null | undefined): "mobile" | "desktop" | null {
  if (!ua) return null;
  return /Mobi|Android|iPhone|iPad|iPod|Silk|Kindle|Opera Mini|IEMobile/i.test(ua) ? "mobile" : "desktop";
}

export const OWN_HOST = "padelcourtsfinder.com";

/**
 * Host of the referring page, or null for none (direct, apps, stripped
 * referrers). Our own pages (and the dev server) all count as OWN_HOST, so the
 * report can say how many readers came from inside the directory.
 */
export function referrerHost(referrer: string | null | undefined, ownHosts: string[]): string | null {
  if (!referrer) return null;
  try {
    const host = new URL(referrer).hostname.toLowerCase().replace(/^www\./, "");
    if (!host) return null;
    if (host === OWN_HOST || ownHosts.some((h) => host === h.toLowerCase().replace(/^www\./, "").split(":")[0])) return OWN_HOST;
    return host.slice(0, 253);
  } catch {
    return null;
  }
}

export function countryFromHeader(v: string | null | undefined): string | null {
  return v && /^[A-Z]{2}$/.test(v) ? v : null;
}
