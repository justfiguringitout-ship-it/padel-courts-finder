import { NextResponse } from "next/server";
import { findCourtBySlug } from "@/lib/owner/club-lookup";
import { checkClaimDomain } from "@/lib/owner/domain";
import { RateLimiter, clientIp, linkBase, requestOrigin } from "@/lib/owner/http";
import { EMAIL_RE, cleanLine } from "@/lib/owner/listing-fields";
import {
  claimReviewEmail,
  claimVerifiedNotice,
  mailConfigured,
  sendMessage,
  signinLinkEmail,
} from "@/lib/owner/mail";
import { getStore, type ClaimRole, type ClaimRow } from "@/lib/owner/store";
import { getClaimSecret, makeReviewToken, makeSigninToken } from "@/lib/owner/tokens";

export const runtime = "nodejs";
export const maxDuration = 30;

const ROLES: ClaimRole[] = ["Owner", "Manager", "Staff"];
const perIp = new RateLimiter(10, 60 * 60 * 1000);
const perEmail = new RateLimiter(5, 60 * 60 * 1000);
const MAX_CLAIMS_PER_EMAIL_PER_DAY = 10;

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

    const check = checkClaimDomain(email, court.website, court.email);
    const now = new Date().toISOString();
    const claim = await store.insertClaim({
      club_slug: slug,
      club_name: court.name,
      email,
      name,
      role,
      status: check.verified ? "verified" : "pending_manual",
      verified_via: check.verified ? "domain" : null,
      verified_at: check.verified ? now : null,
    });

    if (check.verified) {
      await sendSignin(claim);
      await sendMessage(claimVerifiedNotice(claim, clubPage)).catch((err) =>
        console.error(`claim/start: FYI to Dito failed for ${claim.id}`, err)
      );
      console.log(`claim/start: claim ${claim.id} club=${slug} verified via domain`);
      return json({ ok: true, status: "verified" });
    }

    const review = makeReviewToken("claim", claim.id, secret);
    await sendMessage(
      claimReviewEmail(claim, {
        reason: check.reason,
        website: court.website,
        clubPage,
        approveUrl: `${base}/claim/verify?token=${review}&action=approve`,
        rejectUrl: `${base}/claim/verify?token=${review}&action=reject`,
      })
    );
    console.log(`claim/start: claim ${claim.id} club=${slug} pending (${check.reason})`);
    return json({ ok: true, status: "pending" });
  } catch (err) {
    console.error("claim/start: failed", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "failed" }, 502);
  }
}
