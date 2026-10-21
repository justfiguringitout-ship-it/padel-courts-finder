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
import { checkOwnerSession } from "@/lib/owner/session";
import { getStore } from "@/lib/owner/store";
import { getLiveSpotlightForClub } from "@/lib/spotlight";
import { formatSpotlightDay, isSpotlightPinned } from "@/lib/spotlight-dates";
import { getSpotlightStore } from "@/lib/spotlight-store";
import { KIND_WORDS, OUTBOUND_KINDS, summarizeSpotlightEvents, type SpotlightStats } from "@/lib/spotlight-stats";

export const dynamic = "force-dynamic";

function Row({ label, value }: { label: string; value?: string | number | null }) {
  return (
    <div className="grid grid-cols-[9rem_1fr] gap-3 py-1.5 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="break-words">{value === undefined || value === null || value === "" ? "Not listed" : value}</dd>
    </div>
  );
}

/** "Your Club Spotlight": views, visitors and clicks, read server side from pcf_spotlight_events. */
function SpotlightPanel({ title, slug, publishDate, pinnedUntil, stats }: {
  title: string;
  slug: string;
  publishDate: string;
  pinnedUntil: string;
  stats: SpotlightStats | null;
}) {
  const pinned = isSpotlightPinned({ status: "live", publishDate, pinnedUntil });
  const kinds = stats ? stats.clicksByKind.filter((c) => OUTBOUND_KINDS.has(c.key)) : [];
  return (
    <section className="mt-8 club-card" aria-labelledby="owner-spotlight">
      <h2 id="owner-spotlight" className="club-h2">
        Your Club Spotlight
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        <Link href={`/spotlight/${slug}`} className="text-primary hover:underline">
          {title}
        </Link>
        . Published {formatSpotlightDay(publishDate)}
        {pinned ? `, pinned on your state and city pages until ${formatSpotlightDay(pinnedUntil)}.` : "."}
      </p>
      {stats ? (
        <>
          <dl className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["Views", stats.articleViews],
              ["Visitors", stats.uniqueVisitors],
              ["Clicks to you", stats.outboundClicks],
            ].map(([label, v]) => (
              <div key={label} className="rounded-lg border border-border px-3 py-2">
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="font-mono text-xl font-semibold">{Number(v).toLocaleString("en-US")}</dd>
              </div>
            ))}
          </dl>
          {kinds.length > 0 && (
            <ul className="mt-4 divide-y divide-border text-sm">
              {kinds.map((c) => (
                <li key={c.key} className="flex justify-between py-1.5">
                  <span>{KIND_WORDS[c.key] ?? c.key}</span>
                  <span className="font-mono">{c.count}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            Visitors are counted once per day. The pinned cards were seen{" "}
            {stats.cardImpressions.toLocaleString("en-US")} {stats.cardImpressions === 1 ? "time" : "times"} and sent{" "}
            {stats.cardClicks.toLocaleString("en-US")} {stats.cardClicks === 1 ? "reader" : "readers"} to the Spotlight, and your
            club page here was viewed {stats.clubPageViews.toLocaleString("en-US")}{" "}
            {stats.clubPageViews === 1 ? "time" : "times"} during the pinned weeks.
          </p>
        </>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">The numbers are not available right now. Please try again later.</p>
      )}
    </section>
  );
}

export default async function OwnerDashboard({ searchParams }: { searchParams: Promise<{ signedout?: string }> }) {
  const { signedout } = await searchParams;
  const check = await checkOwnerSession();
  const session = check.ok ? check.session : null;

  if (!session) {
    const removed = !check.ok && check.reason === "revoked";
    return (
      <div className="container mx-auto max-w-lg px-4 py-12 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Club owner dashboard</h1>
        <p className="mt-3 text-muted-foreground">
          {removed ? (
            <>
              Your access to {!check.ok && check.clubName ? check.clubName : "this listing"} was removed. If you think this is a
              mistake, email info@padelcourtsfinder.com.
            </>
          ) : (
            <>
              {signedout ? "You are signed out. " : ""}
              To update your club&apos;s listing, sign in with the link we email you.
            </>
          )}
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
  const spotlight = getLiveSpotlightForClub(session.slug);
  let spotlightStats: SpotlightStats | null = null;
  if (spotlight) {
    try {
      const spotStore = getSpotlightStore();
      if (spotStore) spotlightStats = summarizeSpotlightEvents(await spotStore.listEvents(spotlight.slug, `${spotlight.publishDate}T00:00:00-05:00`));
    } catch {
      spotlightStats = null;
    }
  }
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

      {spotlight && (
        <SpotlightPanel
          title={spotlight.title}
          slug={spotlight.slug}
          publishDate={spotlight.publishDate}
          pinnedUntil={spotlight.pinnedUntil}
          stats={spotlightStats}
        />
      )}

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
