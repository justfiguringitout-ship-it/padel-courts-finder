import { NextResponse } from "next/server";
import { findCourtBySlug } from "@/lib/owner/club-lookup";
import { RateLimiter, clientIp, linkBase, requestOrigin } from "@/lib/owner/http";
import { EMAIL_RE, cleanLine } from "@/lib/owner/listing-fields";
import {
  claimReviewEmail,
  claimVerifiedNotice,
  clubConfirmEmail,
  existingOwnerNotice,
  firstName,
  mailConfigured,
  sendMessage,
  signinLinkEmail,
} from "@/lib/owner/mail";
import { getStore, type ClaimRole, type ClaimRow } from "@/lib/owner/store";
import { getClaimSecret, makeAdminToken, makeClubConfirmToken, makeReviewToken, makeSigninToken } from "@/lib/owner/tokens";
import { clubPublicEmail, decideClaim } from "@/lib/owner/verification";

export const runtime = "nodejs";
export const maxDuration = 30;

const ROLES: ClaimRole[] = ["Owner", "Manager", "Staff"];
const perIp = new RateLimiter(10, 60 * 60 * 1000);
const perEmail = new RateLimiter(5, 60 * 60 * 1000);
const MAX_CLAIMS_PER_EMAIL_PER_DAY = 10;
/** A club's public inbox gets at most this many confirmation requests a day. */
const MAX_CLUB_CONFIRMS_PER_DAY = 3;

function callAdvice(phone?: string): string {
  return phone
    ? `call ${phone} before approving.`
    : "call the club before approving (there is no public phone on file either, so find one on the club's own website).";
}

function callLine(phone?: string): string {
  return `No public club email on file: ${callAdvice(phone)}`;
}

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request) {
  const origin = requestOrigin(req);
  if (!origin) return json({ ok: false, error: "forbidden" }, 403);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "bad request" }, 400);
  }
  if (!body || typeof body !== "object") return json({ ok: false, error: "bad request" }, 400);

  // Honeypot: people never see or fill the "website" field.
  if (body.website) return json({ ok: true, status: "pending" });

  if (!perIp.take(clientIp(req))) return json({ ok: false, error: "too many requests" }, 429);

  const slug = cleanLine(body.slug, 120);
  const name = cleanLine(body.name, 80);
  const email = cleanLine(body.email, 200).toLowerCase();
  const role = cleanLine(body.role, 20) as ClaimRole;
  if (
    name.length < 2 ||
    name.length > 80 ||
    email.length > 200 ||
    !EMAIL_RE.test(email) ||
    !ROLES.includes(role) ||
    body.consent !== true
  ) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  // Never trust club details from the client: look the club up by slug.
  const court = findCourtBySlug(slug);
  if (!court) return json({ ok: false, error: "invalid" }, 400);

  const store = getStore();
  const secret = getClaimSecret();
  if (!store || !secret || !mailConfigured()) {
    console.error("claim/start: not configured (store, CLAIM_SECRET or mail)");
    return json({ ok: false, error: "unavailable" }, 503);
  }

  if (!perEmail.take(email)) return json({ ok: false, error: "too many requests" }, 429);
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  if ((await store.countClaimsSince(email, since)) >= MAX_CLAIMS_PER_EMAIL_PER_DAY) {
    return json({ ok: false, error: "too many requests" }, 429);
  }

  const base = linkBase(origin);
  const clubPage = `${base}/courts/${slug}`;
  const sendSignin = (claim: ClaimRow) =>
    sendMessage(signinLinkEmail(claim, `${base}/owner/signin?token=${makeSigninToken(claim.id, secret)}`));

  try {
    const existing = await store.findClaims(email, slug);
    const verified = existing.find((c) => c.status === "verified");
    if (verified) {
      await sendSignin(verified);
      console.log(`claim/start: resent sign-in link for claim ${verified.id}`);
      return json({ ok: true, status: "verified" });
    }
    if (existing.some((c) => c.status === "pending_manual")) {
      return json({ ok: true, status: "pending" });
    }

    // Someone Dito removed does not get back in by claiming again.
    if (existing.some((c) => c.status === "revoked")) {
      console.log(`claim/start: ignored a new claim from a removed owner for club=${slug}`);
      return json({ ok: true, status: "pending" });
    }

    const clubClaims = await store.listClaimsForClub(slug);
    const decision = decideClaim(email, court, clubClaims);
    const now = new Date().toISOString();
    const adminRevokeUrl = (claim: ClaimRow) => `${base}/claim/admin?token=${makeAdminToken("revoke", claim.id, secret)}`;

    if (decision.verified) {
      const claim = await store.insertClaim({
        club_slug: slug,
        club_name: court.name,
        email,
        name,
        role,
        status: "verified",
        verified_via: "domain",
        verified_at: now,
        verify_channel: "domain",
      });
      await sendSignin(claim);
      await sendMessage(claimVerifiedNotice(claim, clubPage, adminRevokeUrl(claim))).catch((err) =>
        console.error(`claim/start: FYI to Dito failed for ${claim.id}`, err)
      );
      console.log(`claim/start: claim ${claim.id} club=${slug} verified via domain`);
      return json({ ok: true, status: "verified" });
    }

    // Manual: ask the club's public address to confirm, and tell Dito either way.
    const clubAddress = clubPublicEmail(court);
    const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const recentConfirms = clubClaims.filter(
      (c) => c.verify_channel === "club_email" && c.verify_sent_at && Date.parse(c.verify_sent_at) >= dayAgo
    ).length;
    const capped = !!clubAddress && recentConfirms >= MAX_CLUB_CONFIRMS_PER_DAY;
    const useClubEmail = !!clubAddress && !capped;

    const claim = await store.insertClaim({
      club_slug: slug,
      club_name: court.name,
      email,
      name,
      role,
      status: "pending_manual",
      verified_via: null,
      verified_at: null,
      verify_channel: useClubEmail ? "club_email" : "dito",
      verify_target: useClubEmail ? clubAddress : null,
      verify_sent_at: useClubEmail ? now : null,
    });

    let verifyLine: string;
    if (useClubEmail && clubAddress) {
      const confirmUrl = `${base}/claim/confirm?token=${makeClubConfirmToken(claim.id, secret)}`;
      try {
        await sendMessage(clubConfirmEmail(claim, clubAddress, confirmUrl, clubPage));
        verifyLine = `Club email confirmation: sent to ${clubAddress}. If someone there confirms, the claim is verified and ${firstName(name)} gets a sign-in link without you doing anything.`;
      } catch (err) {
        console.error(`claim/start: club confirmation failed for ${claim.id}`, err instanceof Error ? err.message : err);
        await store.updateClaim(claim.id, { verify_channel: "dito", verify_sent_at: null }, "pending_manual").catch(() => null);
        verifyLine = `Club email confirmation to ${clubAddress} could not be sent. Please ${callAdvice(court.phone)}`;
      }
    } else if (capped) {
      verifyLine = `Club email confirmation: not sent, because ${clubAddress} already got ${recentConfirms} requests in the last 24 hours. Please ${callAdvice(court.phone)}`;
    } else {
      verifyLine = callLine(court.phone);
    }

    for (const owner of decision.existingOwners) {
      await sendMessage(existingOwnerNotice(owner as ClaimRow, claim)).catch((err) =>
        console.error(`claim/start: owner notice failed for an existing owner of ${slug}`, err instanceof Error ? err.message : err)
      );
    }

    const review = makeReviewToken("claim", claim.id, secret);
    await sendMessage(
      claimReviewEmail(claim, {
        reason: decision.reason,
        website: court.website,
        clubPage,
        approveUrl: `${base}/claim/verify?token=${review}&action=approve`,
        rejectUrl: `${base}/claim/verify?token=${review}&action=reject`,
        revokeUrl: adminRevokeUrl(claim),
        verifyLine,
        existingOwners: decision.existingOwners,
      })
    );
    console.log(
      `claim/start: claim ${claim.id} club=${slug} pending (${decision.reason}${decision.secondClaim ? ", second claim" : ""}, ${useClubEmail ? "club email sent" : "dito only"})`
    );
    return json({ ok: true, status: "pending" });
  } catch (err) {
    console.error("claim/start: failed", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "failed" }, 502);
  }
}
