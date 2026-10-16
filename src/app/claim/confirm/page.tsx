/**
 * Landing page for the confirmation email sent to a club's public address.
 * Opening it changes nothing (mail scanners open links too); the Confirm
 * button POSTs to /api/claim/confirm.
 */
import type { Metadata } from "next";
import { ScrubToken } from "@/components/owner/scrub-token";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, verifyToken } from "@/lib/owner/tokens";
import { safeName } from "@/lib/owner/verification";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Confirm a club manager",
  robots: { index: false, follow: false, nocache: true },
};

const DONE_TEXT: Record<string, string> = {
  confirmed: "Thanks, that is confirmed. They have been emailed a link to manage the listing. Every change is still checked before it goes live.",
  already: "This was already confirmed, so nothing changed.",
  closed: "This request is closed, so nothing changed.",
  expired: "This link has expired or is not valid. Links work for 7 days.",
  missing: "We could not find this request.",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-lg px-4 py-12 md:py-16">
      <ScrubToken />
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Confirm a club manager</h1>
      {children}
    </div>
  );
}

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<{ token?: string; done?: string }> }) {
  const { token, done } = await searchParams;
  if (done) {
    return (
      <Shell>
        <p className="mt-3">{DONE_TEXT[done] ?? "Done."}</p>
      </Shell>
    );
  }
  const secret = getClaimSecret();
  const store = getStore();
  const p = secret && token ? verifyToken(token, "clubconfirm", secret) : null;
  const claim = p && store ? await store.getClaim(p.c) : null;
  if (!p || !claim || !token) {
    return (
      <Shell>
        <p className="mt-3">{DONE_TEXT.expired}</p>
      </Shell>
    );
  }
  if (claim.status !== "pending_manual" || claim.verify_channel !== "club_email") {
    return (
      <Shell>
        <p className="mt-3">{claim.status === "verified" ? DONE_TEXT.already : DONE_TEXT.closed}</p>
      </Shell>
    );
  }
  return (
    <Shell>
      <p className="mt-3">
        {safeName(claim.name)} ({claim.email}) asked to manage {claim.club_name}&apos;s listing on Padel Courts Finder.
      </p>
      <p className="mt-3 text-muted-foreground">
        If this is someone from your club, confirm below. If not, close this page and nothing happens.
      </p>
      <form method="post" action="/api/claim/confirm" className="mt-6">
        <input type="hidden" name="token" value={token} />
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel"
        >
          Confirm, they are from {claim.club_name}
        </button>
      </form>
    </Shell>
  );
}
