/**
 * Dito's confirmation page for "Remove access" and "Undo this change".
 * Opening the link only shows what will happen; the button POSTs to
 * /api/claim/admin.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ScrubToken } from "@/components/owner/scrub-token";
import { autoApplyEnabled, undoAvailable } from "@/lib/owner/apply";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, verifyToken } from "@/lib/owner/tokens";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

type SP = Promise<{ token?: string; done?: string; t?: string; n?: string; commit?: string; fields?: string }>;

const FIELD_LABELS: Record<string, string> = {
  openingHours: "Hours",
  phone: "Phone",
  website: "Website",
  bookingUrl: "Booking link",
  membershipEmail: "Membership email (private)",
  numberOfCourts: "Courts",
  indoorCourts: "Indoor courts",
  outdoorCourts: "Outdoor courts",
  courtType: "Court type",
  pricingText: "Pricing",
  amenities: "Amenities",
  description: "Description",
  membersOnly: "Members only",
  access: "Who can play",
  ogImageUrl: "Main photo",
  galleryImages: "Gallery photos",
  ownerConfirmedDate: "Owner confirmed date",
};

function show(v: unknown): string {
  if (v === null || v === undefined || v === "") return "Not listed";
  if (Array.isArray(v)) return v.length ? v.join(", ") : "Not listed";
  if (typeof v === "object") {
    return Object.entries(v as Record<string, unknown>)
      .map(([k, x]) => `${k[0].toUpperCase()}${k.slice(1, 3)} ${String(x)}`)
      .join(", ");
  }
  return String(v);
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-10 md:py-14">
      <ScrubToken />
      {children}
    </div>
  );
}

function Button({ token, label }: { token: string; label: string }) {
  return (
    <form method="post" action="/api/claim/admin" className="mt-6">
      <input type="hidden" name="token" value={token} />
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-xl border border-red-700 bg-red-700 px-5 text-sm font-semibold text-white hover:bg-red-800"
      >
        {label}
      </button>
    </form>
  );
}

function doneText(sp: Awaited<SP>): string {
  switch (sp.done) {
    case "revoked":
      return `Access removed. They are signed out now${
        sp.n && sp.n !== "0" ? `, and ${sp.n} pending update${sp.n === "1" ? " was" : "s were"} dropped from the queue` : ""
      }.`;
    case "undone":
      return `Undone. The old values were committed to main${sp.commit ? ` in ${sp.commit}` : ""}, with a changelog note. Vercel deploys it in a few minutes.`;
    case "conflict":
      return `Not undone: ${sp.fields ? sp.fields.split(",").map((f) => FIELD_LABELS[f] ?? f).join(", ") : "some fields"} changed again after this update went live. Fix it by hand in src/data/padel-courts.ts.`;
    case "undofailed":
      return "Not undone: the commit failed. Check the Vercel logs, or revert the commit by hand.";
    case "notlive":
      return "This update is not live, so there is nothing to undo.";
    case "already":
      return sp.t === "undo" ? "This update was already undone." : "This access was already removed or closed, so nothing changed.";
    case "missing":
      return "We could not find that item.";
    default:
      return "This link has expired or is not valid.";
  }
}

export default async function AdminPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  if (sp.done) {
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="mt-3">{doneText(sp)}</p>
      </Shell>
    );
  }

  const secret = getClaimSecret();
  const store = getStore();
  const p = secret && sp.token ? verifyToken(sp.token, "admin", secret) : null;
  if (!p || !store || !sp.token) {
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="mt-3">{doneText({ done: "expired" })}</p>
      </Shell>
    );
  }

  if (p.a === "revoke") {
    const claim = await store.getClaim(p.id);
    if (!claim) return <Shell><p>{doneText({ done: "missing" })}</p></Shell>;
    const pending = (await store.listEditsForClaim(claim.id)).filter((e) => e.status === "pending").length;
    const open = claim.status === "verified" || claim.status === "pending_manual";
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Remove access to {claim.club_name}</h1>
        <dl className="mt-5 club-card grid grid-cols-[8rem_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="text-muted-foreground">Name</dt>
          <dd>{claim.name}</dd>
          <dt className="text-muted-foreground">Email</dt>
          <dd className="break-all">{claim.email}</dd>
          <dt className="text-muted-foreground">Role</dt>
          <dd>{claim.role}</dd>
          <dt className="text-muted-foreground">Status</dt>
          <dd>{claim.status}</dd>
          <dt className="text-muted-foreground">Pending updates</dt>
          <dd>{pending}</dd>
        </dl>
        {open ? (
          <>
            <p className="mt-5 text-sm text-muted-foreground">
              This signs them out right away, drops their {pending === 1 ? "pending update" : "pending updates"} from the queue and
              stops new sign-in links. Updates that are already live stay live. Nobody is emailed.
            </p>
            <Button token={sp.token} label="Remove access" />
          </>
        ) : (
          <p className="mt-5">{doneText({ done: "already" })}</p>
        )}
      </Shell>
    );
  }

  const edit = await store.getEdit(p.id);
  if (!edit) return <Shell><p>{doneText({ done: "missing" })}</p></Shell>;
  const claim = await store.getClaim(edit.claim_id);
  const applied = (edit.applied_values ?? {}) as Record<string, unknown>;
  const previous = (edit.previous_values ?? {}) as Record<string, unknown>;
  const keys = Object.keys(applied).filter((k) => k !== "ownerConfirmedDate");
  return (
    <Shell>
      <h1 className="text-2xl font-bold">Undo update to {claim?.club_name ?? edit.club_slug}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        From {claim?.name ?? "unknown"} ({edit.email}), published{" "}
        {edit.applied_at ? new Date(edit.applied_at).toLocaleString("en-US", { timeZone: "America/New_York" }) : "earlier"}
        {edit.commit_sha ? ` in ${edit.commit_sha.slice(0, 7)}` : ""}. Status: {edit.status}.
      </p>
      {keys.length > 0 && (
        <div className="mt-5 club-card">
          <ul className="divide-y divide-border">
            {keys.map((k) => (
              <li key={k} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold">{FIELD_LABELS[k] ?? k}</p>
                <p className="mt-1 text-sm text-muted-foreground line-through decoration-1 break-words">{show(applied[k])}</p>
                <p className="mt-0.5 text-sm break-words">Back to: {show(previous[k])}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {edit.status === "reverted" ? (
        <p className="mt-5">{doneText({ done: "already", t: "undo" })}</p>
      ) : !undoAvailable(edit) ? (
        <p className="mt-5">
          {edit.status === "applied"
            ? "One-click undo is not available for this update (the old values were not recorded). Revert the commit by hand."
            : doneText({ done: "notlive" })}
        </p>
      ) : !autoApplyEnabled() ? (
        <p className="mt-5">Auto-publish is off on this server (no GITHUB_TOKEN), so undo has to be done by hand.</p>
      ) : (
        <>
          <p className="mt-5 text-sm text-muted-foreground">
            This commits the old values back to main as &quot;Undo owner edit&quot; plus a changelog note that a change was reverted.
            If any of these fields changed again since, nothing is changed and you will be told which.
          </p>
          <Button token={sp.token} label="Undo this change" />
        </>
      )}
      <p className="mt-6 text-sm">
        <Link href={`/courts/${edit.club_slug}`} className="text-primary hover:underline">
          Open the club page
        </Link>
      </p>
    </Shell>
  );
}
