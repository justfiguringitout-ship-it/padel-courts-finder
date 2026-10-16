import Link from "next/link";
import { OwnerEditForm, type PastEdit } from "@/components/owner/edit-form";
import { currentListing, findCourtBySlug } from "@/lib/owner/club-lookup";
import {
  ACCESS_LABELS,
  DAYS,
  DAY_LABELS,
  changedFieldWords,
  humanDayHours,
  maskEmail,
  sanitizeChanges,
} from "@/lib/owner/listing-fields";
import { firstName } from "@/lib/owner/mail";
import { getOwnerSession } from "@/lib/owner/session";
import { getStore } from "@/lib/owner/store";

export const dynamic = "force-dynamic";

function Row({ label, value }: { label: string; value?: string | number | null }) {
  return (
    <div className="grid grid-cols-[9rem_1fr] gap-3 py-1.5 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="break-words">{value === undefined || value === null || value === "" ? "Not listed" : value}</dd>
    </div>
  );
}

export default async function OwnerDashboard({ searchParams }: { searchParams: Promise<{ signedout?: string }> }) {
  const { signedout } = await searchParams;
  const session = await getOwnerSession();

  if (!session) {
    return (
      <div className="container mx-auto max-w-lg px-4 py-12 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Club owner dashboard</h1>
        <p className="mt-3 text-muted-foreground">
          {signedout ? "You are signed out. " : ""}
          To update your club&apos;s listing, sign in with the link we email you.
        </p>
        <p className="mt-4">
          <Link href="/claim" className="text-primary hover:underline">
            Claim your listing or get a new sign-in link
          </Link>
        </p>
      </div>
    );
  }

  const court = findCourtBySlug(session.slug);
  const store = getStore();
  if (!court || !store) {
    return (
      <div className="container mx-auto max-w-lg px-4 py-12">
        <p>We could not find this club in the directory. Please email info@padelcourtsfinder.com.</p>
      </div>
    );
  }

  const current = currentListing(court);
  // The private membership email never goes to the browser in full.
  const forClient = { ...current, membershipEmail: current.membershipEmail ? maskEmail(current.membershipEmail) : undefined };
  const edits = await store.listEditsForClaim(session.claim.id);
  const past: PastEdit[] = edits.map((e) => ({
    id: e.id,
    createdAt: e.created_at,
    status: e.status,
    summary: changedFieldWords(sanitizeChanges(e.changes), e.photo_paths.length),
    hasNote: !!e.note,
  }));
  const courtsLine =
    current.numberOfCourts !== undefined
      ? `${current.numberOfCourts}${
          current.indoorCourts !== undefined || current.outdoorCourts !== undefined
            ? ` (${current.indoorCourts ?? 0} indoor, ${current.outdoorCourts ?? 0} outdoor)`
            : ""
        }`
      : undefined;
  const photos = [current.ogImageUrl, ...(current.galleryImages ?? [])].filter((u): u is string => !!u && u.startsWith("/"));

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10 md:py-14">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="club-kicker">Club owner dashboard</p>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">{court.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Signed in as {firstName(session.claim.name)} ({session.claim.email}).{" "}
            <Link href={`/courts/${session.slug}`} className="text-primary hover:underline">
              View the public page
            </Link>
          </p>
        </div>
        <form method="post" action="/api/owner/signout">
          <button type="submit" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
            Sign out
          </button>
        </form>
      </div>

      <section className="mt-8 club-card" aria-labelledby="owner-current">
        <h2 id="owner-current" className="club-h2">
          What the page shows now
        </h2>
        <dl className="mt-3 divide-y divide-border">
          {DAYS.map((d) => (
            <Row key={d} label={DAY_LABELS[d]} value={humanDayHours(current.openingHours?.[d])} />
          ))}
          <Row label="Phone" value={current.phone} />
          <Row label="Website" value={current.website} />
          <Row label="Booking link" value={current.bookingUrl} />
          <Row label="Membership email" value={forClient.membershipEmail ? `${forClient.membershipEmail} (private)` : undefined} />
          <Row label="Courts" value={courtsLine} />
          <Row label="Pricing" value={current.pricingText} />
          <Row label="Amenities" value={current.amenities?.join(", ")} />
          <Row
            label="Who can play"
            value={current.membersOnly ? (current.access ? ACCESS_LABELS[current.access] : "Members only") : "Open to the public"}
          />
          <Row label="Description" value={current.description} />
        </dl>
        {photos.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {photos.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" className="aspect-[4/3] w-full rounded-lg object-cover border border-border" />
            ))}
          </div>
        )}
      </section>

      <OwnerEditForm current={forClient} past={past} />

      <p className="mt-8 text-sm text-muted-foreground">
        Manage another club?{" "}
        <Link href="/claim" className="text-primary hover:underline">
          Claim it here
        </Link>
        . Questions? Email info@padelcourtsfinder.com.
      </p>
    </div>
  );
}
