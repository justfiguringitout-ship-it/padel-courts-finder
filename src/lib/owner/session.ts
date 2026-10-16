/** The owner session cookie: signed, httpOnly, SameSite=Lax, 30 days, holds claim id + club slug. */
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getClaimSecret, makeSessionToken, verifyToken, SESSION_TTL_MS } from "@/lib/owner/tokens";
import { getStore, type ClaimRow } from "@/lib/owner/store";
import { sessionFromClaim, type OwnerSession, type SessionCheck } from "@/lib/owner/session-check";

export { sessionFromClaim, type OwnerSession, type SessionCheck };

export const SESSION_COOKIE = "pcf_owner";


function readToken(raw: string | undefined): { c: string; s: string } | null {
  const secret = getClaimSecret();
  if (!secret || !raw) return null;
  const p = verifyToken(raw, "session", secret);
  return p ? { c: p.c, s: p.s } : null;
}

/** Reads the cookie and re-checks the claim in the database on every call. */
export async function checkOwnerSession(): Promise<SessionCheck> {
  const jar = await cookies();
  const raw = jar.get(SESSION_COOKIE)?.value;
  if (!raw) return { ok: false, reason: "none" };
  const t = readToken(raw);
  if (!t) return { ok: false, reason: "invalid" };
  const store = getStore();
  if (!store) return { ok: false, reason: "unavailable" };
  return sessionFromClaim(await store.getClaim(t.c), t.s);
}

/** For server components and route handlers. Re-checks the claim is still verified on every call. */
export async function getOwnerSession(): Promise<OwnerSession | null> {
  const r = await checkOwnerSession();
  return r.ok ? r.session : null;
}

/** 401 for an owner API call without a live session; a dead cookie is cleared on the way out. */
export function signedOutResponse(check: Exclude<SessionCheck, { ok: true }>, secure: boolean): NextResponse {
  const res = NextResponse.json(
    { ok: false, error: check.reason === "revoked" ? "access removed" : "signed out" },
    { status: 401, headers: { "Cache-Control": "no-store" } }
  );
  if (check.reason === "revoked" || check.reason === "invalid") clearSessionCookie(res, secure);
  return res;
}

export function setSessionCookie(res: NextResponse, claim: ClaimRow, secure: boolean): void {
  const secret = getClaimSecret();
  if (!secret) throw new Error("CLAIM_SECRET is not configured");
  res.cookies.set(SESSION_COOKIE, makeSessionToken(claim.id, claim.club_slug, secret), {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
}

export function clearSessionCookie(res: NextResponse, secure: boolean): void {
  res.cookies.set(SESSION_COOKIE, "", { httpOnly: true, secure, sameSite: "lax", path: "/", maxAge: 0 });
}
