/**
 * The club's public address confirms a claim (posted from /claim/confirm).
 * Never acts on GET. The signed club-confirm token (7 days) is the
 * authorization, and the claim must still be pending.
 */
import { NextResponse } from "next/server";
import { RateLimiter, clientIp, linkBase, requestOrigin } from "@/lib/owner/http";
import { clubConfirmedNotice, sendMessage, signinLinkEmail } from "@/lib/owner/mail";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, makeAdminToken, makeSigninToken, verifyToken } from "@/lib/owner/tokens";

export const runtime = "nodejs";
export const maxDuration = 30;

const perIp = new RateLimiter(30, 60 * 60 * 1000);

function back(origin: string, result: string) {
  return NextResponse.redirect(`${origin}/claim/confirm?done=${result}`, 303);
}

export async function POST(req: Request) {
  const origin = requestOrigin(req);
  if (!origin) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  if (!perIp.take(clientIp(req))) return NextResponse.json({ ok: false, error: "too many requests" }, { status: 429 });

  let token = "";
  try {
    token = String((await req.formData()).get("token") ?? "");
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
  const secret = getClaimSecret();
  const store = getStore();
  if (!secret || !store) return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });

  const p = verifyToken(token, "clubconfirm", secret);
  if (!p) return back(origin, "expired");
  const before = await store.getClaim(p.c);
  if (!before) return back(origin, "missing");
  if (before.verify_channel !== "club_email") return back(origin, "closed");

  const claim = await store.updateClaim(
    p.c,
    { status: "verified", verified_via: "club_email", verified_at: new Date().toISOString() },
    "pending_manual"
  );
  if (!claim) return back(origin, before.status === "verified" ? "already" : "closed");

  const base = linkBase(origin);
  await sendMessage(signinLinkEmail(claim, `${base}/owner/signin?token=${makeSigninToken(claim.id, secret)}`)).catch((err) =>
    console.error(`claim/confirm: sign-in email failed for ${claim.id}`, err)
  );
  await sendMessage(
    clubConfirmedNotice(claim, `${base}/courts/${claim.club_slug}`, `${base}/claim/admin?token=${makeAdminToken("revoke", claim.id, secret)}`)
  ).catch((err) => console.error(`claim/confirm: FYI to Dito failed for ${claim.id}`, err));
  console.log(`claim/confirm: claim ${claim.id} verified by the club's public email`);
  return back(origin, "confirmed");
}
