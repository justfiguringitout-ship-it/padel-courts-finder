/** Exchanges a magic sign-in link (posted from /owner/signin) for the owner session cookie. */
import { NextResponse } from "next/server";
import { RateLimiter, clientIp, isLocalOrigin, requestOrigin } from "@/lib/owner/http";
import { setSessionCookie } from "@/lib/owner/session";
import { getStore } from "@/lib/owner/store";
import { consumeNonce, getClaimSecret, verifyToken } from "@/lib/owner/tokens";

export const runtime = "nodejs";

const perIp = new RateLimiter(30, 60 * 60 * 1000);

export async function POST(req: Request) {
  const origin = requestOrigin(req);
  if (!origin) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  const base = origin; // same host the cookie is set on
  const fail = (why: string) => NextResponse.redirect(`${base}/owner/signin?error=${why}`, 303);
  if (!perIp.take(clientIp(req))) return fail("busy");

  let token = "";
  try {
    token = String((await req.formData()).get("token") ?? "");
  } catch {
    return fail("expired");
  }
  const secret = getClaimSecret();
  const store = getStore();
  if (!secret || !store) return fail("unavailable");

  const p = verifyToken(token, "signin", secret);
  if (!p) return fail("expired");
  const claim = await store.getClaim(p.c);
  if (!claim || claim.status !== "verified") return fail("expired");
  if (!consumeNonce(p.n, p.exp)) return fail("used");

  const res = NextResponse.redirect(`${base}/owner`, 303);
  setSessionCookie(res, claim, !isLocalOrigin(origin));
  res.headers.set("Cache-Control", "no-store");
  return res;
}
