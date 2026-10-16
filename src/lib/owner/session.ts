/** The owner session cookie: signed, httpOnly, SameSite=Lax, 30 days, holds claim id + club slug. */
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import { getClaimSecret, makeSessionToken, verifyToken, SESSION_TTL_MS } from "@/lib/owner/tokens";
import { getStore, type ClaimRow } from "@/lib/owner/store";

export const SESSION_COOKIE = "pcf_owner";

export interface OwnerSession {
  claim: ClaimRow;
  slug: string;
}

function readToken(raw: string | undefined): { c: string; s: string } | null {
  const secret = getClaimSecret();
  if (!secret || !raw) return null;
  const p = verifyToken(raw, "session", secret);
  return p ? { c: p.c, s: p.s } : null;
}

/** For server components and route handlers. Re-checks the claim is still verified on every call. */
export async function getOwnerSession(): Promise<OwnerSession | null> {
  const jar = await cookies();
  const t = readToken(jar.get(SESSION_COOKIE)?.value);
  if (!t) return null;
  const store = getStore();
  if (!store) return null;
  const claim = await store.getClaim(t.c);
  if (!claim || claim.status !== "verified" || claim.club_slug !== t.s) return null;
  return { claim, slug: t.s };
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
