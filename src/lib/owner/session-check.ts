/** The pure part of the owner session check (no Next imports, so tests can load it). */
import type { ClaimRow } from "./store";

export interface OwnerSession {
  claim: ClaimRow;
  slug: string;
}

export type SessionCheck =
  | { ok: true; session: OwnerSession }
  | { ok: false; reason: "none" | "invalid" | "revoked" | "unavailable"; clubName?: string };

/**
 * Pure part of the session check: a valid cookie only counts while its claim
 * is still verified for the same club. A removed ("revoked") claim fails at once.
 */
export function sessionFromClaim(claim: ClaimRow | null, slug: string): SessionCheck {
  if (!claim || claim.club_slug !== slug) return { ok: false, reason: "invalid" };
  if (claim.status === "revoked") return { ok: false, reason: "revoked", clubName: claim.club_name };
  if (claim.status !== "verified") return { ok: false, reason: "invalid" };
  return { ok: true, session: { claim, slug } };
}

