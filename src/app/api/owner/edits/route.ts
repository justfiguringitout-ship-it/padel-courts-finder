/**
 * An owner's suggested listing update. Nothing is published here: the edit is
 * stored as "pending" and Dito gets the diff with Approve / Reject links.
 * "Current" values always come from our own data, never from the browser.
 */
import { NextResponse } from "next/server";
import { currentListing, findCourtBySlug } from "@/lib/owner/club-lookup";
import { RateLimiter, clientIp, linkBase, requestOrigin } from "@/lib/owner/http";
import {
  LIMITS,
  buildChanges,
  cleanText,
  describeChanges,
  hasChanges,
  validateForm,
  type CurrentListing,
} from "@/lib/owner/listing-fields";
import { editReviewEmail, mailConfigured, sendMessage } from "@/lib/owner/mail";
import { getOwnerSession } from "@/lib/owner/session";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, makeReviewToken } from "@/lib/owner/tokens";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_PHOTOS = 8;
const MAX_EDITS_PER_DAY = 10;
const perIp = new RateLimiter(20, 60 * 60 * 1000);

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request) {
  const origin = requestOrigin(req);
  if (!origin) return json({ ok: false, error: "forbidden" }, 403);
  if (!perIp.take(clientIp(req))) return json({ ok: false, error: "too many requests" }, 429);

  const session = await getOwnerSession();
  if (!session) return json({ ok: false, error: "signed out" }, 401);
  const store = getStore();
  const secret = getClaimSecret();
  if (!store || !secret || !mailConfigured()) return json({ ok: false, error: "unavailable" }, 503);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "bad request" }, 400);
  }
  if (!body || typeof body !== "object") return json({ ok: false, error: "bad request" }, 400);
  if (body.website) return json({ ok: true }); // honeypot

  const court = findCourtBySlug(session.slug);
  if (!court) return json({ ok: false, error: "club not found" }, 404);

  const check = validateForm(body.form);
  if (!check.ok) return json({ ok: false, error: "invalid", errors: check.errors }, 400);

  const note = cleanText(body.note, LIMITS.note);
  if (note.length > LIMITS.note) return json({ ok: false, error: "invalid", errors: ["Your note is too long."] }, 400);

  const prefix = `pending/${session.claim.id}/`;
  const rawPhotos = Array.isArray(body.photos) ? body.photos : [];
  const photos = [...new Set(rawPhotos.filter((p): p is string => typeof p === "string"))];
  if (photos.length > MAX_PHOTOS) return json({ ok: false, error: "invalid", errors: [`Up to ${MAX_PHOTOS} photos, please.`] }, 400);
  if (!photos.every((p) => p.startsWith(prefix) && /^[0-9a-f-]{36}\.webp$/.test(p.slice(prefix.length)))) {
    return json({ ok: false, error: "invalid", errors: ["One of the photos did not upload. Please remove it and add it again."] }, 400);
  }
  if (photos.length && body.rightsConfirmed !== true) {
    return json({ ok: false, error: "invalid", errors: ["Please confirm you own the photos or have permission to share them."] }, 400);
  }

  const current = currentListing(court);
  const changes = buildChanges(current, check.form);
  if (!hasChanges(changes) && photos.length === 0 && !note) {
    return json({ ok: false, error: "invalid", errors: ["Nothing has changed yet."] }, 400);
  }

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  if ((await store.countEditsSince(session.claim.id, since)) >= MAX_EDITS_PER_DAY) {
    return json({ ok: false, error: "too many requests", errors: ["That is a lot of updates for one day. Please email us instead."] }, 429);
  }

  // Snapshot of the before values for just the fields that change.
  const before: Partial<CurrentListing> = {};
  for (const k of Object.keys(changes) as (keyof CurrentListing)[]) {
    (before as Record<string, unknown>)[k] = current[k] ?? null;
  }
  if (changes.openingHours) {
    before.openingHours = Object.fromEntries(Object.keys(changes.openingHours).map((d) => [d, current.openingHours?.[d as "monday"] ?? null]));
  }

  try {
    const edit = await store.insertEdit({
      claim_id: session.claim.id,
      club_slug: session.slug,
      email: session.claim.email,
      changes: changes as Record<string, unknown>,
      current: before as Record<string, unknown>,
      photo_paths: photos,
      note: note || null,
      status: "pending",
    });
    const base = linkBase(origin);
    const review = makeReviewToken("edit", edit.id, secret);
    const reviewUrl = `${base}/claim/verify?token=${review}`;
    // The edit is saved either way; a failed notification is logged and the
    // edit still shows up for scripts/apply-owner-edits.ts --pending.
    await sendMessage(
      editReviewEmail(edit, session.claim, {
        lines: describeChanges(current, changes, { privateEmail: "show" }),
        clubPage: `${base}/courts/${session.slug}`,
        reviewUrl,
        approveUrl: `${reviewUrl}&action=approve`,
        rejectUrl: `${reviewUrl}&action=reject`,
      })
    ).catch((err) => console.error(`owner/edits: notification failed for ${edit.id}`, err instanceof Error ? err.message : err));
    console.log(`owner/edits: edit ${edit.id} club=${session.slug} fields=${Object.keys(changes).join(",") || "none"} photos=${photos.length}`);
    return json({ ok: true, id: edit.id });
  } catch (err) {
    console.error("owner/edits: failed", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "failed", errors: ["That did not go through. Please try again."] }, 502);
  }
}
