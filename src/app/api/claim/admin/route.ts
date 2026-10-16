/**
 * Dito's "Remove access" and "Undo this change", posted from /claim/admin.
 * Never acts on GET. The signed admin token is the authorization.
 *
 * Remove access: claim -> "revoked", that owner's pending edits -> "rejected".
 * Their session dies on the next request (every owner call re-checks the claim).
 *
 * Undo: puts back the values recorded when the edit was applied, through the
 * same GitHub path ("Undo owner edit: <Club>" + a changelog commit), then
 * marks the edit "reverted".
 */
import { NextResponse } from "next/server";
import { undoEditViaGitHub } from "@/lib/owner/apply";
import { findCourtBySlug } from "@/lib/owner/club-lookup";
import { RateLimiter, clientIp, requestOrigin } from "@/lib/owner/http";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, verifyToken } from "@/lib/owner/tokens";

export const runtime = "nodejs";
export const maxDuration = 60;

const perIp = new RateLimiter(30, 60 * 60 * 1000);

function back(origin: string, params: Record<string, string>) {
  return NextResponse.redirect(`${origin}/claim/admin?${new URLSearchParams(params).toString()}`, 303);
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

  const p = verifyToken(token, "admin", secret);
  if (!p) return back(origin, { done: "expired" });
  const now = new Date().toISOString();

  if (p.a === "revoke") {
    const claim = await store.updateClaim(p.id, { status: "revoked", revoked_at: now }, ["verified", "pending_manual"]);
    if (!claim) return back(origin, { done: "already", t: "revoke" });
    let dropped = 0;
    for (const e of await store.listEditsForClaim(claim.id)) {
      if (e.status !== "pending") continue;
      if (await store.updateEdit(e.id, { status: "rejected", reviewed_at: now }, "pending")) dropped++;
    }
    console.log(`claim/admin: claim ${claim.id} club=${claim.club_slug} revoked, ${dropped} pending edit(s) dropped`);
    return back(origin, { done: "revoked", n: String(dropped) });
  }

  // undo
  const edit = await store.getEdit(p.id);
  if (!edit) return back(origin, { done: "missing" });
  if (edit.status === "reverted") return back(origin, { done: "already", t: "undo" });
  if (edit.status !== "applied") return back(origin, { done: "notlive" });
  const court = findCourtBySlug(edit.club_slug);
  if (!court) return back(origin, { done: "missing" });

  const result = await undoEditViaGitHub(edit, court.name);
  if (!result.applied) {
    console.error(`claim/admin: undo failed for edit ${edit.id}: ${result.error}`);
    return back(origin, {
      done: result.conflicts?.length ? "conflict" : "undofailed",
      ...(result.conflicts?.length ? { fields: result.conflicts.join(",") } : {}),
    });
  }
  await store.updateEdit(edit.id, { status: "reverted", reverted_at: now, revert_commit: result.sha ?? null }, "applied");
  console.log(`claim/admin: edit ${edit.id} reverted in ${result.commit}`);
  return back(origin, { done: "undone", commit: result.commit ?? "" });
}
