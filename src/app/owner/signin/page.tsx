/**
 * Landing page for the emailed sign-in link. Opening it does not sign anyone
 * in (mail scanners open links too); the button POSTs the token to
 * /api/owner/signin, which sets the session cookie.
 */
import Link from "next/link";
import { ScrubToken } from "@/components/owner/scrub-token";
import { getStore } from "@/lib/owner/store";
import { getClaimSecret, verifyToken } from "@/lib/owner/tokens";

export const dynamic = "force-dynamic";

const ERRORS: Record<string, string> = {
  expired: "This sign-in link has expired or is not valid. Links work for 30 minutes.",
  used: "This sign-in link was already used. Ask for a new one below.",
  busy: "Too many tries from here. Please wait a few minutes.",
  unavailable: "Sign-in is not available right now. Please try again later.",
};

export default async function OwnerSigninPage({ searchParams }: { searchParams: Promise<{ token?: string; error?: string }> }) {
  const { token, error } = await searchParams;
  const secret = getClaimSecret();
  const payload = token && secret ? verifyToken(token, "signin", secret) : null;
  const claim = payload ? await getStore()?.getClaim(payload.c) : null;
  const ok = !!payload && !!claim && claim.status === "verified";
  const message = error ? ERRORS[error] ?? ERRORS.expired : !ok ? ERRORS.expired : "";

  return (
    <div className="container mx-auto max-w-lg px-4 py-12 md:py-16">
      <ScrubToken />
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Sign in</h1>
      {ok && claim && token ? (
        <>
          <p className="mt-3 text-muted-foreground">
            You are signing in to update the {claim.club_name} listing on Padel Courts Finder.
          </p>
          <form method="post" action="/api/owner/signin" className="mt-6">
            <input type="hidden" name="token" value={token} />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel"
            >
              Continue to your dashboard
            </button>
          </form>
        </>
      ) : (
        <>
          <p className="mt-3 text-muted-foreground">{message}</p>
          <p className="mt-4 text-sm">
            <Link href="/claim" className="text-primary hover:underline">
              Get a new sign-in link
            </Link>{" "}
            by choosing your club and entering the same email.
          </p>
        </>
      )}
    </div>
  );
}
