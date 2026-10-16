/**
 * Pure rules for "Claim your listing" hardening (no Node or Next imports):
 *  - which public club address may confirm a claim,
 *  - whether a new claim may be verified automatically (the second-claim rule),
 *  - which edit fields Dito must double check before approving.
 */
import { FREE_MAIL_DOMAINS, PLATFORM_DOMAINS, checkClaimDomain, registrableDomain } from "./domain";
import { EMAIL_RE, type CurrentListing, type ListingChanges } from "./listing-fields";

export interface ClubContact {
  email?: string;
  membershipEmail?: string;
  website?: string;
  phone?: string;
}

/** The smallest claim shape these rules need. */
export interface ClaimLike {
  email: string;
  name: string;
  status: string;
}

function ownDomain(website?: string): string {
  const d = registrableDomain(website);
  return d && !FREE_MAIL_DOMAINS.has(d) && !PLATFORM_DOMAINS.has(d) ? d : "";
}

/**
 * The club's public address for a confirmation email, or null.
 * The published `email` field always counts (it is on the club page). The
 * private membershipEmail only counts when it is on the club's own website domain.
 */
export function clubPublicEmail(court: ClubContact): string | null {
  const pub = (court.email ?? "").trim().toLowerCase();
  if (pub && EMAIL_RE.test(pub)) return pub;
  const mem = (court.membershipEmail ?? "").trim().toLowerCase();
  const site = ownDomain(court.website);
  if (mem && EMAIL_RE.test(mem) && site && registrableDomain(mem) === site) return mem;
  return null;
}

export type ClaimReason = "domain_match" | "free_mail" | "no_club_domain" | "mismatch" | "bad_email" | "second_claim";

export interface ClaimDecision<C extends ClaimLike = ClaimLike> {
  verified: boolean;
  reason: ClaimReason;
  /** Someone else already holds (or held) this club. */
  secondClaim: boolean;
  /** Currently verified owners with another email, one per address: they get a heads-up. */
  existingOwners: C[];
}

/**
 * The second-claim rule. The first claim for a club still auto-verifies on a
 * domain match. Once someone else has been verified for the club (even if
 * Dito later removed them), a new email is never verified automatically.
 */
export function decideClaim<C extends ClaimLike>(
  email: string,
  court: ClubContact,
  clubClaims: C[]
): ClaimDecision<C> {
  const me = email.trim().toLowerCase();
  const others = clubClaims.filter((c) => c.email.trim().toLowerCase() !== me);
  const secondClaim = others.some((c) => c.status === "verified" || c.status === "revoked");
  const seen = new Set<string>();
  const existingOwners = others.filter((c) => {
    if (c.status !== "verified") return false;
    const k = c.email.trim().toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  const check = checkClaimDomain(me, court.website, court.email);
  if (check.verified && !secondClaim) return { verified: true, reason: "domain_match", secondClaim, existingOwners };
  return { verified: false, reason: check.verified ? "second_claim" : check.reason, secondClaim, existingOwners };
}

/** For emails to people outside the site: a name can never carry a link or markup. */
export function safeName(name: string): string {
  const cleaned = name
    .replace(/[^\p{L}\p{M}\s'.-]/gu, "")
    .replace(/\.(?=\S)/g, ". ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || "Someone";
}

// ------------------------------------------------------------------ risky edit fields

export const RISKY_FIELDS = ["website", "bookingUrl", "phone", "membershipEmail"] as const;
export type RiskyField = (typeof RISKY_FIELDS)[number];

export const RISKY_LABELS: Record<RiskyField, string> = {
  website: "Website",
  bookingUrl: "Booking link",
  phone: "Phone",
  membershipEmail: "Membership email (private)",
};

export const RISKY_NOTE = "Confirm on the club's own site before approving";

export interface RiskyLine {
  field: RiskyField;
  label: string;
  before: string;
  after: string;
  differentDomain: boolean;
}

/**
 * Changes that could send players (or membership leads) somewhere else.
 * `current` comes from our own data. A new website or booking link on a
 * domain the club does not use today is flagged "Different domain".
 */
export function riskyChanges(current: CurrentListing & { email?: string }, ch: ListingChanges): RiskyLine[] {
  const out: RiskyLine[] = [];
  for (const field of RISKY_FIELDS) {
    if (ch[field] === undefined) continue;
    const before = (current[field] ?? "").toString().trim();
    const after = (ch[field] ?? "").toString().trim();
    let differentDomain = false;
    if ((field === "website" || field === "bookingUrl") && after) {
      const next = registrableDomain(after);
      const now = registrableDomain(before);
      if (next) {
        if (now) differentDomain = next !== now;
        else {
          // nothing on file for this field: compare with the domains the club already uses
          const known = [ownDomain(current.website), ownDomain(current.bookingUrl), ownDomain(current.email)].filter(Boolean);
          differentDomain = known.length > 0 && !known.includes(next);
        }
      }
    }
    out.push({ field, label: RISKY_LABELS[field], before: before || "Not listed", after: after || "Removed", differentDomain });
  }
  return out;
}
