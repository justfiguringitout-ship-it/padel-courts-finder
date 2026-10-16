/**
 * Dito's Approve / Reject, posted from the confirmation page at /claim/verify.
 * Never acts on GET. The signed review token (7 days) is the authorization,
 * and every change is conditional on the row still being pending.
 */
import { NextResponse } from "next/server";
import { applyEditViaGitHub, autoApplyEnabled } from "@/lib/owner/apply";
import { findCourtBySlug } from "@/lib/owner/club-lookup";
import { RateLimiter, clientIp, linkBase, requestOrigin } from "@/lib/owner/http";
import {
  NOTIFY_TO,
  claimRejectedEmail,
  editApprovedEmail,
  editRejectedEmail,
  sendMessage,
  signinLinkEmail,
} from "@/lib/owner/mail";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, makeSigninToken, verifyToken } from "@/lib/owner/tokens";

export const runtime = "nodejs";
export const maxDuration = 60;

const perIp = new RateLimiter(60, 60 * 60 * 1000);

function back(origin: string, result: string, what: "claim" | "edit", extra = "") {
  return NextResponse.redirect(`${origin}/claim/verify?done=${result}&t=${what}${extra}`, 303);
}

export async function POST(req: Request) {
  const origin = requestOrigin(req);
  if (!origin) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  if (!perIp.take(clientIp(req))) return NextResponse.json({ ok: false, error: "too many requests" }, { status: 429 });

  let token = "";
  let action = "";
  try {
    const form = await req.formData();
    token = String(form.get("token") ?? "");
    action = String(form.get("action") ?? "");
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  const base = linkBase(origin);
  const secret = getClaimSecret();
  const store = getStore();
  if (!secret || !store) return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });

  const p = verifyToken(token, "review", secret);
  if (!p) return back(origin, "expired", "claim");
  if (action !== "approve" && action !== "reject") return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  const now = new Date().toISOString();

  if (p.t === "claim") {
    if (action === "approve") {
      const claim = await store.updateClaim(p.id, { status: "verified", verified_via: "manual", verified_at: now }, "pending_manual");
      if (!claim) return back(origin, "already", "claim");
      await sendMessage(signinLinkEmail(claim, `${base}/owner/signin?token=${makeSigninToken(claim.id, secret)}`)).catch((err) =>
        console.error(`claim/review: sign-in email failed for ${claim.id}`, err)
      );
      console.log(`claim/review: claim ${claim.id} approved`);
      return back(origin, "approved", "claim");
    }
    const claim = await store.updateClaim(p.id, { status: "rejected" }, "pending_manual");
    if (!claim) return back(origin, "already", "claim");
    await sendMessage(claimRejectedEmail(claim)).catch((err) => console.error(`claim/review: reject email failed for ${claim.id}`, err));
    console.log(`claim/review: claim ${claim.id} rejected`);
    return back(origin, "rejected", "claim");
  }

  // Listing edits
  const edit = await store.getEdit(p.id);
  if (!edit) return back(origin, "missing", "edit");
  const claim = await store.getClaim(edit.claim_id);
  if (!claim) return back(origin, "missing", "edit");
  const clubPage = `${base}/courts/${edit.club_slug}`;

  if (action === "reject") {
    const updated = await store.updateEdit(edit.id, { status: "rejected", reviewed_at: now }, "pending");
    if (!updated) return back(origin, "already", "edit");
    await sendMessage(editRejectedEmail(claim)).catch((err) => console.error(`claim/review: reject email failed for edit ${edit.id}`, err));
    console.log(`claim/review: edit ${edit.id} rejected`);
    return back(origin, "rejected", "edit");
  }

  const approved = await store.updateEdit(edit.id, { status: "approved", reviewed_at: now }, "pending");
  if (!approved) return back(origin, "already", "edit");

  let live = false;
  let note = "";
  if (autoApplyEnabled()) {
    const court = findCourtBySlug(edit.club_slug);
    const result = court ? await applyEditViaGitHub(approved, court.name, store) : { applied: false, error: "club not found" };
    if (result.applied) {
      live = true;
      await store.updateEdit(edit.id, { status: "applied", applied_at: new Date().toISOString() }, "approved");
      note = `&commit=${encodeURIComponent(result.commit ?? "")}`;
      console.log(`claim/review: edit ${edit.id} applied in ${result.commit}`);
    } else {
      console.error(`claim/review: auto-apply failed for edit ${edit.id}: ${result.error}`);
      note = "&apply=failed";
      await sendMessage({
        to: NOTIFY_TO,
        subject: `Auto-apply failed: ${claim.club_name}`,
        text: `Edit ${edit.id} is approved but could not be applied automatically:\n\n${result.error}\n\nRun scripts/apply-owner-edits.ts to apply it by hand.`,
        html: `<p>Edit ${edit.id} is approved but could not be applied automatically.</p><pre>${String(result.error)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")}</pre><p>Run scripts/apply-owner-edits.ts to apply it by hand.</p>`,
      }).catch(() => undefined);
    }
  } else {
    note = "&apply=manual";
  }

  await sendMessage(editApprovedEmail(claim, live, clubPage)).catch((err) =>
    console.error(`claim/review: approved email failed for edit ${edit.id}`, err)
  );
  return back(origin, live ? "applied" : "approved", "edit", note);
}
