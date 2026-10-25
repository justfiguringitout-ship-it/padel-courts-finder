/**
 * POST /api/ref: one beacon per browser session from src/components/referral-beacon.tsx,
 * sent only when the visit landed from another site or carries utm_source.
 *
 * We classify the referrer into a source (ChatGPT, Google, ... or "other") and
 * add 1 to that source's count for today in pcf_referral_daily. Nothing about
 * the visitor is stored: no IP, no user agent, no URL, no referrer host.
 *
 * Always answers 204 for well-formed requests (counted or skipped) so the
 * beacon never retries; 400 only for malformed input.
 */
import { classifyReferral } from "@/lib/ai-leaderboard/sources";
import { bumpReferral } from "@/lib/ai-leaderboard/store";
import { RateLimiter, clientIp, originAllowed } from "@/lib/owner/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY = 1200;
const BOT_UA = /bot|crawl|spider|headless|slurp|lighthouse|python|curl|wget|httpclient/i;
const limiter = new RateLimiter(20, 60_000);

function noContent() {
  return new Response(null, { status: 204 });
}

export async function POST(req: Request) {
  if (!originAllowed(req.headers.get("origin") ?? "")) return noContent();

  const ua = req.headers.get("user-agent") ?? "";
  if (ua.length < 20 || BOT_UA.test(ua)) return noContent();

  const text = await req.text().catch(() => "");
  if (!text || text.length > MAX_BODY) return new Response("bad body", { status: 400 });
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return new Response("bad json", { status: 400 });
  }
  if (!raw || typeof raw !== "object") return new Response("bad body", { status: 400 });
  const { ref, utm } = raw as { ref?: unknown; utm?: unknown };
  if ((ref != null && typeof ref !== "string") || (utm != null && typeof utm !== "string")) {
    return new Response("bad fields", { status: 400 });
  }
  if ((ref?.length ?? 0) > 1000 || (utm?.length ?? 0) > 100) return new Response("too long", { status: 400 });

  // A referrer on the host that received this beacon is internal navigation.
  let referrer = ref ?? null;
  if (referrer) {
    try {
      if (new URL(referrer).host === new URL(req.url).host) referrer = null;
    } catch {
      // classifyReferral ignores unparseable referrers
    }
  }
  const cls = classifyReferral(referrer, utm ?? null);
  if (!cls) return noContent();

  if (!limiter.take(clientIp(req))) return noContent();

  try {
    await bumpReferral(cls.source, cls.category);
  } catch (err) {
    console.error("ai-leaderboard ref", err instanceof Error ? err.message : err);
  }
  return noContent();
}
