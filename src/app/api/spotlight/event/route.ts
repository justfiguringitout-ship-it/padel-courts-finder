/**
 * POST /api/spotlight/event: first-party Club Spotlight attribution log.
 *
 * The browser sends one small JSON body per event with navigator.sendBeacon
 * (src/lib/spotlight-track.ts). We validate it, drop obvious bots, skip repeat
 * identical events from the same visitor within a few seconds, and store one
 * row in Supabase (pcf_spotlight_events). Raw IP and user agent are never
 * stored, only visitor_hash = sha256(daily salt + ip + ua).
 *
 * Always answers 204 for well-formed requests (stored or skipped) so the
 * tracker never retries or shows errors; 400 only for malformed input.
 */
import { createHash, createHmac } from "node:crypto";
import { getSpotlight } from "@/lib/spotlight";
import { isSpotlightLive, isSpotlightPinned } from "@/lib/spotlight-dates";
import {
  countryFromHeader,
  deviceFromUserAgent,
  isBotUserAgent,
  parseSpotlightEvent,
  referrerHost,
  type SpotlightEventRow,
} from "@/lib/spotlight-events";
import { getSpotlightStore } from "@/lib/spotlight-store";
import { RateLimiter, clientIp, originAllowed } from "@/lib/owner/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY = 2048;
const DEDUPE_MS = 5000;
const limiter = new RateLimiter(120, 60_000);
const recent = new Map<string, number>();

function noContent() {
  return new Response(null, { status: 204 });
}

/** Salt that changes every UTC day, derived from a server secret, so hashes cannot be joined across days. */
function dailySalt(now: Date): string {
  const secret =
    process.env.SPOTLIGHT_HASH_SECRET || process.env.CLAIM_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "pcf-local-dev";
  return createHmac("sha256", secret).update(`spotlight:${now.toISOString().slice(0, 10)}`).digest("hex");
}

function seenRecently(key: string, now: number): boolean {
  const last = recent.get(key);
  recent.set(key, now);
  if (recent.size > 5000) {
    for (const [k, t] of recent) if (now - t > DEDUPE_MS) recent.delete(k);
  }
  return last !== undefined && now - last < DEDUPE_MS;
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin") ?? "";
  if (!originAllowed(origin)) return noContent();

  const ua = req.headers.get("user-agent") ?? "";
  if (isBotUserAgent(ua)) return noContent();

  const text = await req.text().catch(() => "");
  if (!text || text.length > MAX_BODY) return new Response("bad body", { status: 400 });
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return new Response("bad json", { status: 400 });
  }
  const parsed = parseSpotlightEvent(raw);
  if (!parsed.ok) return new Response(parsed.error, { status: 400 });
  const input = parsed.value;

  // Only live spotlights are logged; pinned-card and club-page events only inside the 30-day window.
  const spot = getSpotlight(input.slug);
  if (!spot || !isSpotlightLive(spot)) return noContent();
  if (input.placement !== "article" && !isSpotlightPinned(spot)) return noContent();

  const ip = clientIp(req);
  if (!limiter.take(ip)) return noContent();

  const now = new Date();
  const visitorHash = createHash("sha256").update(`${dailySalt(now)}|${ip}|${ua}`).digest("hex");
  const ownHost = new URL(req.url).host;
  const row: SpotlightEventRow = {
    spotlight_slug: input.slug,
    event: input.event,
    kind: input.kind ?? null,
    placement: input.placement,
    path: input.path ?? null,
    referrer_host: referrerHost(input.referrer, [ownHost, "padelcourtsfinder.com"]),
    utm_source: input.utm_source ?? null,
    utm_medium: input.utm_medium ?? null,
    country: countryFromHeader(req.headers.get("x-vercel-ip-country")),
    device: deviceFromUserAgent(ua),
    visitor_hash: visitorHash,
  };

  const key = [row.visitor_hash, row.spotlight_slug, row.event, row.placement, row.kind, row.path].join("|");
  if (seenRecently(key, now.getTime())) return noContent();

  const store = getSpotlightStore();
  if (!store) return noContent();
  try {
    // Serverless instances do not share memory, so check the table too.
    if (await store.hasRecent(row, new Date(now.getTime() - DEDUPE_MS).toISOString())) return noContent();
    await store.insert(row);
  } catch (err) {
    console.error("spotlight event", err instanceof Error ? err.message : err);
  }
  return noContent();
}
