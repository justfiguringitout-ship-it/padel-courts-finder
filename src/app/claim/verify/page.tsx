/**
 * Dito's review page for claims and listing edits. Opening the link only
 * shows the details; the Approve / Reject buttons POST to /api/claim/review.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { autoApplyEnabled, undoAvailable } from "@/lib/owner/apply";
import { currentListing, findCourtBySlug } from "@/lib/owner/club-lookup";
import { describeChanges, sanitizeChanges, type CurrentListing } from "@/lib/owner/listing-fields";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, makeAdminToken, verifyToken } from "@/lib/owner/tokens";
import { RISKY_NOTE, riskyChanges } from "@/lib/owner/verification";
import { ScrubToken } from "@/components/owner/scrub-token";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Review",
  robots: { index: false, follow: false, nocache: true },
};

type SP = Promise<{ token?: string; action?: string; done?: string; t?: string; commit?: string; apply?: string }>;

const DONE_TEXT: Record<string, string> = {
  approved: "Approved.",
  applied: "Approved and committed to main. Vercel will deploy it in a few minutes.",
  rejected: "Rejected. The person was emailed.",
  already: "This was already reviewed, so nothing changed.",
  expired: "This link has expired or is not valid.",
  missing: "We could not find that item.",
  revoked: "This owner's access was removed, so the update cannot be approved.",
};

const CHANNEL_TEXT: Record<string, string> = {
  domain: "Email matches the club domain",
  club_email: "Confirmation email sent to the club's public address",
  dito: "Only you can verify this one",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-10 md:py-14">
      <ScrubToken />
      {children}
    </div>
  );
}

function Buttons({ token, action }: { token: string; action?: string }) {
  return (
    <form method="post" action="/api/claim/review" className="mt-6 flex flex-wrap gap-3">
      <input type="hidden" name="token" value={token} />
      <button
        type="submit"
        name="action"
        value="approve"
        className={`inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white ${
          action === "reject" ? "bg-court/60" : "bg-court"
        } hover:bg-court-panel`}
      >
        Approve
      </button>
      <button
        type="submit"
        name="action"
        value="reject"
        className={`inline-flex h-11 items-center justify-center rounded-xl border px-5 text-sm font-semibold ${
          action === "reject" ? "border-red-700 bg-red-700 text-white" : "border-border"
        }`}
      >
        Reject
      </button>
    </form>
  );
}

export default async function VerifyPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;

  if (sp.done) {
    let text = DONE_TEXT[sp.done] ?? "Done.";
    if (sp.done === "approved" && sp.t === "edit") {
      text =
        sp.apply === "failed"
          ? "Approved, but the automatic publish failed (you have an email with the error). Run scripts/apply-owner-edits.ts to publish it."
          : "Approved. Auto-publish is off, so run scripts/apply-owner-edits.ts to publish it. The owner was told it is going live soon.";
    }
    if (sp.done === "approved" && sp.t === "claim") text = "Approved. They have been emailed a sign-in link.";
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Review</h1>
        <p className="mt-3">{text}</p>
        {sp.commit && <p className="mt-2 text-sm text-muted-foreground">Commit {sp.commit}</p>}
      </Shell>
    );
  }

  const secret = getClaimSecret();
  const store = getStore();
  const p = secret ? verifyToken(sp.token, "review", secret) : null;
  if (!p || !store || !sp.token) {
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Review</h1>
        <p className="mt-3">{!store || !secret ? "Claims are not set up on this server yet." : DONE_TEXT.expired}</p>
      </Shell>
    );
  }

  if (p.t === "claim") {
    const claim = await store.getClaim(p.id);
    if (!claim) return <Shell><p>{DONE_TEXT.missing}</p></Shell>;
    const court = findCourtBySlug(claim.club_slug);
    const others = (await store.listClaimsForClub(claim.club_slug)).filter(
      (c) => c.id !== claim.id && c.email !== claim.email && c.status === "verified"
    );
    const revokeHref = `/claim/admin?token=${makeAdminToken("revoke", claim.id, secret!)}`;
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Claim for {claim.club_name}</h1>
        {others.length > 0 && (
          <div className="mt-4 rounded-xl border-2 border-amber-500 bg-amber-50 p-4 text-sm text-amber-950">
            <p className="font-semibold">Second claim</p>
            <p className="mt-1">
              This club already has a verified owner: {others.map((o) => `${o.name} (${o.email})`).join(", ")}. They were
              emailed about this request.
            </p>
          </div>
        )}
        <dl className="mt-5 club-card grid grid-cols-[8rem_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="text-muted-foreground">Name</dt>
          <dd>{claim.name}</dd>
          <dt className="text-muted-foreground">Role</dt>
          <dd>{claim.role}</dd>
          <dt className="text-muted-foreground">Email</dt>
          <dd className="break-all">{claim.email}</dd>
          <dt className="text-muted-foreground">Club website</dt>
          <dd className="break-all">{court?.website || "none on file"}</dd>
          <dt className="text-muted-foreground">Club phone</dt>
          <dd>{court?.phone || "none on file"}</dd>
          <dt className="text-muted-foreground">Status</dt>
          <dd>{claim.status}</dd>
          <dt className="text-muted-foreground">Verification</dt>
          <dd className="break-all">
            {claim.verify_channel ? CHANNEL_TEXT[claim.verify_channel] ?? claim.verify_channel : "not recorded"}
            {claim.verify_target ? ` (${claim.verify_target})` : ""}
            {claim.verify_channel === "dito" && !court?.email
              ? `. No public club email on file: call ${court?.phone || "the club"} before approving.`
              : ""}
          </dd>
          <dt className="text-muted-foreground">Requested</dt>
          <dd>{new Date(claim.created_at).toLocaleString("en-US", { timeZone: "America/New_York" })}</dd>
        </dl>
        <p className="mt-3 text-sm">
          <Link href={`/courts/${claim.club_slug}`} className="text-primary hover:underline">
            Open the club page
          </Link>
        </p>
        {claim.status === "pending_manual" ? (
          <>
            <p className="mt-5 text-sm text-muted-foreground">
              Approve emails them a sign-in link. Reject emails them a short note asking them to reply.
            </p>
            <Buttons token={sp.token} action={sp.action} />
          </>
        ) : (
          <p className="mt-5">{DONE_TEXT.already}</p>
        )}
        {claim.status !== "revoked" && claim.status !== "rejected" && (
          <p className="mt-6 text-sm">
            <Link href={revokeHref} className="text-red-700 hover:underline">
              Remove access
            </Link>
          </p>
        )}
      </Shell>
    );
  }

  const edit = await store.getEdit(p.id);
  if (!edit) return <Shell><p>{DONE_TEXT.missing}</p></Shell>;
  const claim = await store.getClaim(edit.claim_id);
  const court = findCourtBySlug(edit.club_slug);
  const changes = sanitizeChanges(edit.changes);
  // Compare with the data as it is now (it may have moved since the owner submitted).
  const now: CurrentListing = court
    ? currentListing(court)
    : ({ name: edit.club_slug, city: "", state: "", ...(edit.current as object) } as CurrentListing);
  const lines = describeChanges(now, changes, { privateEmail: "show" });
  const risky = riskyChanges({ ...now, email: court?.email }, changes);
  const photoUrls = await Promise.all(edit.photo_paths.map((ph) => store.photoUrl(ph, 3600)));

  return (
    <Shell>
      <h1 className="text-2xl font-bold">Update for {court?.name ?? edit.club_slug}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        From {claim?.name ?? "unknown"} ({claim?.role}, {edit.email}), sent{" "}
        {new Date(edit.created_at).toLocaleString("en-US", { timeZone: "America/New_York" })}. Status: {edit.status}.
      </p>

      {risky.length > 0 && (
        <div className="mt-5 rounded-xl border-2 border-amber-500 bg-amber-50 p-4 text-amber-950">
          <p className="text-sm font-bold uppercase tracking-wide">Check these</p>
          <ul className="mt-2 divide-y divide-amber-300">
            {risky.map((r) => (
              <li key={r.field} className="py-3 first:pt-1 last:pb-0">
                <p className="text-sm font-semibold">
                  {r.label}
                  {r.differentDomain && (
                    <span className="ml-2 rounded-full bg-red-700 px-2 py-0.5 text-xs font-semibold text-white">Different domain</span>
                  )}
                </p>
                <p className="mt-1 text-sm break-words">
                  <span className="text-amber-800">Current:</span> {r.before}
                </p>
                <p className="mt-0.5 text-sm break-words">
                  <span className="text-amber-800">New:</span> {r.after}
                </p>
                <p className="mt-1 text-xs">{RISKY_NOTE}.</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {risky.length > 0 && <h2 className="mt-6 text-sm font-semibold text-muted-foreground">All changes</h2>}
      <div className={`${risky.length > 0 ? "mt-2" : "mt-5"} club-card`}>
        {lines.length === 0 ? (
          <p className="text-sm">No field changes.</p>
        ) : (
          <ul className="divide-y divide-border">
            {lines.map((l) => (
              <li key={l.label} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold">{l.label}</p>
                <p className="mt-1 text-sm text-muted-foreground line-through decoration-1 break-words whitespace-pre-line">{l.before}</p>
                <p className="mt-0.5 text-sm break-words whitespace-pre-line">{l.after}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {edit.note && (
        <div className="mt-4 club-card">
          <p className="text-sm font-semibold">Note from the club</p>
          <p className="mt-1 text-sm whitespace-pre-line break-words">{edit.note}</p>
        </div>
      )}

      {photoUrls.length > 0 && (
        <div className="mt-4 club-card">
          <p className="text-sm font-semibold">Photos ({photoUrls.length}). The owner confirmed they have the rights.</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {photoUrls.map((u, i) =>
              u ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={u} alt={`Photo ${i + 1}`} className="w-full rounded-lg border border-border" />
              ) : (
                <p key={i} className="text-sm text-red-700">
                  Photo {i + 1} is missing
                </p>
              )
            )}
          </div>
        </div>
      )}

      <p className="mt-4 text-sm">
        <Link href={`/courts/${edit.club_slug}`} className="text-primary hover:underline">
          Open the club page
        </Link>
      </p>

      {edit.status === "pending" && claim && claim.status !== "verified" ? (
        <p className="mt-5">{DONE_TEXT.revoked}</p>
      ) : edit.status === "pending" ? (
        <>
          <p className="mt-5 text-sm text-muted-foreground">
            {autoApplyEnabled()
              ? "Approve commits this to main (data, photos and a changelog entry) and Vercel deploys it."
              : "Auto-publish is off (no GITHUB_TOKEN). Approve marks it approved; then run scripts/apply-owner-edits.ts."}
          </p>
          <Buttons token={sp.token} action={sp.action} />
        </>
      ) : (
        <p className="mt-5">{DONE_TEXT.already}</p>
      )}

      <p className="mt-6 flex flex-wrap gap-4 text-sm">
        {undoAvailable(edit) && (
          <Link href={`/claim/admin?token=${makeAdminToken("undo", edit.id, secret!)}`} className="text-red-700 hover:underline">
            Undo this change
          </Link>
        )}
        {claim && claim.status === "verified" && (
          <Link href={`/claim/admin?token=${makeAdminToken("revoke", claim.id, secret!)}`} className="text-red-700 hover:underline">
            Remove {claim.name}&apos;s access
          </Link>
        )}
      </p>
    </Shell>
  );
}
