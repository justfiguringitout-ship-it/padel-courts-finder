import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  MapPin, Star, Phone, Globe, Mail, Calendar, CheckCircle, UtensilsCrossed, Dumbbell, Armchair,
  GraduationCap, Navigation, BadgeCheck, History, Hourglass, ArrowRight,
} from "lucide-react";
import {
  getAllAdaptedCourtSlugs,
  getAdaptedCourtBySlug,
  getAdaptedRelatedCourts,
  getAllAdaptedCourts,
  calculateDistance,
  type AdaptedCourt,
} from "@/lib/court-adapter";
import {
  getClubHours,
  getClubTimeZone,
  timeZoneLabel,
  getTrustStamp,
  getPriceSummary,
  getBookingPlatform,
  getCourtLayout,
  noEmDash,
} from "@/lib/club-page";
import { isPlausibleUSCoordinate } from "@/lib/map-coordinates";
import { ClubMapClient } from "@/components/club-map-client";
import { TrackedLink } from "@/components/TrackedLink";
import { ClubImage } from "@/components/club-image";
import { GearWidget } from "@/components/GearWidget";
import { CourtDiagram } from "@/components/club-page/court-diagram";
import { ClubHours } from "@/components/club-page/club-hours";
import { ClubCorrectionForm } from "@/components/club-page/club-correction-form";
import { MapBoundary } from "@/components/club-page/map-boundary";
import { cityBlogSlugs } from "@/data/page-content";
import { getStates } from "@/lib/site-structure";
import type { Metadata } from "next";

interface CourtPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllAdaptedCourtSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CourtPageProps): Promise<Metadata> {
  const { slug } = await params;
  const court = getAdaptedCourtBySlug(slug);

  if (!court) {
    return { title: "Club Not Found" };
  }

  // Club pages mostly surface on navigational brand queries where the club's own
  // site/Instagram/Maps hold the top slots. Restating the brand wins no clicks, so
  // lead with the brand (protects the name match) then promise what the official
  // listing does not put in its snippet: court count, hours, prices.
  const courtCount = court.facility?.totalCourts ?? 0;
  const title =
    courtCount > 0
      ? `${court.name} — ${courtCount} Padel Courts in ${court.address.city}, ${court.address.stateCode} | Hours & Prices`
      : `${court.name} — Padel Courts in ${court.address.city}, ${court.address.stateCode} | Hours & Prices`;

  return {
    title,
    description: court.metaDescription || court.description,
    keywords: court.keywords,
    openGraph: {
      title: court.name,
      description: court.description,
      url: `https://www.padelcourtsfinder.com/courts/${court.slug}`,
      siteName: "Padel Courts Finder",
      type: "website",
      images: court.heroImage ? [{ url: court.heroImage }] : [],
    },
    alternates: {
      canonical: `https://www.padelcourtsfinder.com/courts/${court.slug}`,
    },
  };
}

function hasCoords(c: AdaptedCourt) {
  return isPlausibleUSCoordinate(c.coordinates?.latitude, c.coordinates?.longitude);
}

/** Closest clubs by straight-line distance; falls back to same city/state. */
function getNearbyClubs(court: AdaptedCourt, limit: number): Array<{ club: AdaptedCourt; miles?: number }> {
  if (hasCoords(court)) {
    const near = getAllAdaptedCourts()
      .filter((c) => c.slug !== court.slug && hasCoords(c))
      .map((c) => ({
        club: c,
        miles: calculateDistance(
          court.coordinates.latitude,
          court.coordinates.longitude,
          c.coordinates.latitude,
          c.coordinates.longitude
        ),
      }))
      .sort((a, b) => a.miles - b.miles)
      .slice(0, limit);
    if (near.length) return near;
  }
  return getAdaptedRelatedCourts(court, limit).map((club) => ({ club }));
}

function formatMiles(miles: number) {
  if (miles < 0.2) return "Next door";
  if (miles < 10) return `${miles.toFixed(1)} mi away`;
  return `${Math.round(miles)} mi away`;
}

export default async function CourtPage({ params }: CourtPageProps) {
  const { slug } = await params;
  const court = getAdaptedCourtBySlug(slug);

  if (!court) {
    notFound();
  }

  const nearby = getNearbyClubs(court, 4);
  const hours = getClubHours(court);
  const timeZone = getClubTimeZone(court);
  const tzLabel = timeZoneLabel(timeZone);
  const stamp = getTrustStamp(court);
  const price = getPriceSummary(court);
  const platform = getBookingPlatform(court);
  const layout = getCourtLayout(court);

  const comingSoon = court.status === "coming_soon";
  const tempClosed = court.status === "temporarily_closed";
  const isOpenClub = court.status === "open";

  const fullAddress = [court.address.streetAddress, court.address.city, `${court.address.stateCode} ${court.address.zipCode}`.trim()]
    .filter(Boolean)
    .join(", ");
  const directionsUrl = court.address.streetAddress
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`
    : court.googleMapsUrl;

  const citySlug = court.address.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  const blogSlug = cityBlogSlugs[citySlug];
  const stateInfo = getStates().find((s) => s.code === court.address.stateCode);

  const pricingItems = court.pricingText
    ? court.pricingText.split(";").map((item) => noEmDash(item.trim())).filter(Boolean)
    : [];
  // "Verified" is shown as the trust stamp, not as a chip.
  const featureChips = court.features.filter((f) => f !== "Verified");

  // Opening hours for structured data: only days with real, published hours.
  const toHHMM = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
  const openingHoursSpecification = hours.days.flatMap((d) => {
    if (d.kind === "range") return [{ "@type": "OpeningHoursSpecification", dayOfWeek: d.day, opens: toHHMM(d.open), closes: toHHMM(d.close % 1440) }];
    if (d.kind === "allday") return [{ "@type": "OpeningHoursSpecification", dayOfWeek: d.day, opens: "00:00", closes: "23:59" }];
    if (d.kind === "closed") return [{ "@type": "OpeningHoursSpecification", dayOfWeek: d.day, opens: "00:00", closes: "00:00" }];
    return [];
  });

  type Action = { key: string; label: string; href: string; icon: React.ReactNode; kind: "website" | "phone"; external: boolean };
  const actions: Action[] = [];
  if (court.bookingUrl) actions.push({ key: "book", label: "Book", href: court.bookingUrl, icon: <Calendar />, kind: "website", external: true });
  if (court.website) actions.push({ key: "web", label: "Website", href: court.website, icon: <Globe />, kind: "website", external: true });
  if (directionsUrl) actions.push({ key: "dir", label: "Directions", href: directionsUrl, icon: <Navigation />, kind: "website", external: true });
  if (court.phone) actions.push({ key: "call", label: "Call", href: `tel:${court.phone}`, icon: <Phone />, kind: "phone", external: false });

  const onSite: Array<{ label: string; icon: React.ReactNode }> = [];
  if (court.lessonsAvailable) onSite.push({ label: "Lessons", icon: <GraduationCap /> });
  if (court.rentalAvailable) onSite.push({ label: "Equipment rental", icon: <Dumbbell /> });
  if (court.foodAndDrink) onSite.push({ label: "Food & drink", icon: <UtensilsCrossed /> });
  if (court.socialArea) onSite.push({ label: "Social lounge", icon: <Armchair /> });

  // Key facts strip
  const settingValue =
    layout.setting === "indoor" ? "Indoor" : layout.setting === "outdoor" ? "Outdoor" : layout.setting === "both" ? "Indoor + outdoor" : "Not confirmed";
  const settingSub =
    layout.indoor !== null && layout.outdoor !== null && layout.indoor > 0 && layout.outdoor > 0
      ? `${layout.indoor} in · ${layout.outdoor} out`
      : layout.setting === "both"
        ? "split not confirmed"
        : layout.setting === "unknown"
          ? "indoor or outdoor"
          : layout.setting === "indoor"
            ? "under a roof"
            : "open air";
  const priceFact = price
    ? { value: price.perCourtHour, sub: price.basisNote ? "per court hour, peak" : "per court hour", sub2: `${price.perPlayer} per player` }
    : court.pricingText
      ? { value: "See prices", sub: court.membersOnly ? "membership details below" : "details below" }
      : comingSoon
        ? { value: "Not announced", sub: "no prices yet" }
        : { value: "Not published", sub: "ask the club" };
  const accessFact =
    court.membersOnly === true
      ? { value: "Members only", sub: "membership needed" }
      : court.membersOnly === false
        ? { value: "Open to public", sub: comingSoon ? "once it opens" : "no membership needed" }
        : { value: "Not confirmed", sub: "ask about guest play" };
  const facts = [
    {
      label: "Courts",
      value: layout.total > 0 ? String(layout.total) : "Not confirmed",
      sub: layout.total > 0 ? `${layout.total === 1 ? "court" : "courts"}${comingSoon ? " planned" : ""}` : "court count",
      mono: layout.total > 0,
    },
    { label: "Setting", value: settingValue, sub: settingSub, mono: false },
    { label: "Price", value: priceFact.value, sub: priceFact.sub, sub2: "sub2" in priceFact ? priceFact.sub2 : undefined, mono: !!price, href: court.pricingText ? "#prices" : undefined },
    { label: "Access", value: accessFact.value, sub: accessFact.sub, mono: false },
  ];

  const hasReviews = court.rating.ratingValue > 0 && court.rating.reviewCount > 0;

  return (
    <div className="min-h-screen club-page">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: court.name,
            description: court.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: court.address.streetAddress,
              addressLocality: court.address.city,
              addressRegion: court.address.stateCode,
              postalCode: court.address.zipCode,
              addressCountry: court.address.countryCode,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: court.coordinates?.latitude,
              longitude: court.coordinates?.longitude,
            },
            telephone: court.phone,
            email: court.email,
            url: court.website || `https://www.padelcourtsfinder.com/courts/${court.slug}`,
            image: court.images.map((img) =>
              img.url.startsWith("/") ? `https://www.padelcourtsfinder.com${img.url}` : img.url
            ),
            ...(court.rating.ratingValue > 0 && court.rating.reviewCount > 0 ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: court.rating.ratingValue,
                reviewCount: court.rating.reviewCount,
                bestRating: court.rating.bestRating,
                worstRating: court.rating.worstRating,
              },
            } : {}),
            ...(court.pricingText ? { priceRange: court.pricingText } : {}),
            // Only days the club actually publishes; never the adapter's 7-22 default.
            ...(openingHoursSpecification.length ? { openingHoursSpecification } : {}),
          }),
        }}
      />

      {/* FAQ Schema — only if 2+ FAQs */}
      {court.faqs && court.faqs.length >= 2 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": court.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }),
          }}
        />
      )}

      {/* Breadcrumbs */}
      <div className="border-b bg-muted/40">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/search">Search</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">{court.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero: who, where, can I play, how much, how to book */}
      <section className="club-hero">
        <div className="container mx-auto px-4 pt-6 pb-8 lg:pt-10 lg:pb-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:items-start">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {isOpenClub && (
                  <span className="club-chip club-chip-open">
                    <span className="club-chip-dot" aria-hidden="true" />
                    Open for play
                  </span>
                )}
                {comingSoon && (
                  <span className="club-chip club-chip-soon">
                    <Hourglass aria-hidden="true" />
                    Coming soon
                  </span>
                )}
                {tempClosed && <span className="club-chip club-chip-closed">Temporarily closed</span>}
                {court.featured && (
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white">Featured Club</Badge>
                )}
                {court.membersOnly && <span className="club-chip club-chip-private">Private club</span>}
                {stamp && (
                  <span
                    className={`club-stamp ${stamp.kind === "verified" ? "is-verified" : "is-updated"}`}
                    title={stamp.kind === "verified" ? "A person checked these details against the club's own sources" : undefined}
                  >
                    {stamp.kind === "verified" ? <BadgeCheck aria-hidden="true" /> : <History aria-hidden="true" />}
                    <span>
                      {stamp.kind === "verified" && <span className="sr-only">Verified. </span>}
                      <time dateTime={stamp.date}>{stamp.text}</time>
                    </span>
                  </span>
                )}
              </div>

              <h1 className="font-display text-[2rem] leading-[1.08] sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {court.name}
              </h1>

              <p className="mt-2.5 flex items-start gap-1.5 text-[15px] text-muted-foreground">
                <MapPin className="w-4 h-4 mt-[3px] shrink-0 text-padel-green" aria-hidden="true" />
                <span>
                  {court.address.streetAddress ? `${court.address.streetAddress}, ` : ""}
                  {stateInfo ? (
                    <Link href={`/${stateInfo.slug}/${citySlug}`} className="text-foreground/80 underline decoration-border underline-offset-4 hover:text-padel-green-dark hover:decoration-padel-green">
                      {court.address.city}, {court.address.stateCode}
                    </Link>
                  ) : (
                    <>{court.address.city}, {court.address.stateCode}</>
                  )}
                </span>
              </p>

              {hasReviews && (
                <p className="mt-2 flex items-center gap-1.5 text-sm">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  <span className="font-semibold">{court.rating.ratingValue}</span>
                  <span className="text-muted-foreground">({court.rating.reviewCount} reviews)</span>
                </p>
              )}

              {comingSoon && (
                <div className="club-soon-note" role="note">
                  <Hourglass aria-hidden="true" />
                  <p>
                    <strong>Not open yet.</strong> You cannot book courts here today. What follows is what the club
                    has announced so far, and we update it as opening gets closer.
                  </p>
                </div>
              )}
              {tempClosed && (
                <div className="club-soon-note is-closed" role="note">
                  <p>
                    <strong>Temporarily closed.</strong> Check with the club before you go.
                  </p>
                </div>
              )}

              {/* Key facts */}
              <dl className="club-facts">
                {facts.map((f) => (
                  <div key={f.label} className="club-fact">
                    <dt>{f.label}</dt>
                    <dd>
                      {f.href ? (
                        <a href={f.href} className={`club-fact-value hover:text-padel-green-dark ${f.mono ? "font-mono tracking-tight" : ""}`}>
                          {f.value}
                        </a>
                      ) : (
                        <span className={`club-fact-value ${f.mono ? "font-mono tracking-tight" : ""}`}>{f.value}</span>
                      )}
                      <span className="club-fact-sub">{f.sub}</span>
                      {"sub2" in f && f.sub2 ? <span className="club-fact-sub font-medium text-foreground/70">{f.sub2}</span> : null}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Primary actions: only the ones that exist */}
              {actions.length > 0 && (
                <div
                  className="club-actions"
                  style={{ ["--club-actions" as string]: actions.length }}
                >
                  {actions.map((a, i) => (
                    <TrackedLink
                      key={a.key}
                      href={a.href}
                      type={a.kind}
                      clubName={court.name}
                      className={`club-action ${i === 0 ? "is-primary" : ""}`}
                      {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {a.icon}
                      <span>{a.label}</span>
                    </TrackedLink>
                  ))}
                </div>
              )}
              {!court.bookingUrl && platform && !comingSoon && (
                <p className="mt-3 text-sm text-muted-foreground">
                  Courts are booked on <span className="font-medium text-foreground">{platform}</span>. Search
                  for the club in the app, or start from its website.
                </p>
              )}
            </div>

            {/* Photo, or the designed court placeholder when there is none */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border bg-court shadow-sm">
              <ClubImage
                src={court.heroImage || court.images[0]?.url}
                alt={court.name}
                courts={court.facility.totalCourts}
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        <div className="club-layout">
          {/* The courts */}
          <section className="club-area-courts club-card" aria-labelledby="club-courts">
            <div className="club-section-head">
              <h2 id="club-courts" className="club-h2">The courts</h2>
              <span className="club-kicker">Plan view, to scale</span>
            </div>
            <div className="grain rounded-xl bg-court p-3 sm:p-5">
              <CourtDiagram layout={layout} clubName={court.name} planned={comingSoon} />
            </div>
            {(court.facility.totalCourts > 0 || court.facility.courtSurface || court.facility.lighting || featureChips.length > 0) && (
              <dl className="club-specs">
                {court.facility.totalCourts > 0 && (
                  <div><dt>Total courts</dt><dd className="font-mono">{court.facility.totalCourts}</dd></div>
                )}
                {court.facility.indoorCourts > 0 && (
                  <div><dt>Indoor courts</dt><dd className="font-mono">{court.facility.indoorCourts}</dd></div>
                )}
                {court.facility.outdoorCourts > 0 && (
                  <div><dt>Outdoor courts</dt><dd className="font-mono">{court.facility.outdoorCourts}</dd></div>
                )}
                {court.facility.courtSurface && (
                  <div><dt>Court surface</dt><dd>{noEmDash(court.facility.courtSurface)}</dd></div>
                )}
                {court.facility.lighting && (
                  <div><dt>Lighting</dt><dd>{court.facility.lighting}</dd></div>
                )}
                {featureChips.length > 0 && (
                  <div><dt>Format</dt><dd>{featureChips.join(" · ")}</dd></div>
                )}
              </dl>
            )}
          </section>

          {/* Side column: hours, prices, contact (sticky on desktop) */}
          <aside className="club-area-side">
            <div className="club-side-inner">
              <section className="club-card" aria-labelledby="club-hours">
                {hours.published ? (
                  <ClubHours
                    heading="Hours"
                    headingId="club-hours"
                    days={hours.days}
                    timeZone={timeZone}
                    showLive={isOpenClub}
                  >
                    {hours.summary && <p className="club-hours-summary">{hours.summary}</p>}
                    {comingSoon && (
                      <p className="text-sm text-muted-foreground mb-2">Planned hours, before opening.</p>
                    )}
                    {tzLabel && <p className="sr-only">Times are in {tzLabel}.</p>}
                  </ClubHours>
                ) : (
                  <>
                    <div className="club-section-head">
                      <h2 id="club-hours" className="club-h2">Hours</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {comingSoon
                        ? "Not open yet. Opening hours will appear here once the club publishes them."
                        : "We don't have this club's hours yet. Call or check its website before you go."}
                    </p>
                  </>
                )}
                {hours.published && tzLabel && (
                  <p className="mt-3 text-xs text-muted-foreground font-mono" aria-hidden="true">Local {tzLabel.toLowerCase()}</p>
                )}
              </section>

              <section id="prices" className="club-card scroll-mt-24" aria-labelledby="club-prices">
                <div className="club-section-head">
                  <h2 id="club-prices" className="club-h2">Prices</h2>
                </div>
                {price && (
                  <div className="club-price-hero">
                    <p>
                      <span className="font-mono text-2xl font-semibold tracking-tight">{price.perCourtHour}</span>
                      <span className="text-sm text-muted-foreground"> per court hour</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      About <span className="font-mono text-foreground">{price.perPlayer}</span> each when four players split it.
                    </p>
                    {price.basisNote && <p className="text-xs text-muted-foreground">{price.basisNote}</p>}
                  </div>
                )}
                {pricingItems.length > 0 ? (
                  <>
                    <p className="club-kicker mb-2">From the club</p>
                    <ul className="space-y-2">
                      {pricingItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-padel-green" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {comingSoon
                      ? "Prices have not been announced yet."
                      : "The club does not publish court prices. Call or check the website before you go."}
                  </p>
                )}
                {!comingSoon && (court.bookingUrl || court.phone) && (
                  <div className="mt-4">
                    {court.bookingUrl ? (
                      <TrackedLink href={court.bookingUrl} type="website" clubName={court.name} target="_blank" rel="noopener noreferrer" className="club-btn">
                        <Calendar aria-hidden="true" />
                        Book Now
                      </TrackedLink>
                    ) : court.phone ? (
                      <TrackedLink href={`tel:${court.phone}`} type="phone" clubName={court.name} className="club-btn">
                        <Phone aria-hidden="true" />
                        Call to Book
                      </TrackedLink>
                    ) : null}
                  </div>
                )}
              </section>

              <section className="club-card" aria-labelledby="club-contact">
                <div className="club-section-head">
                  <h2 id="club-contact" className="club-h2">Contact</h2>
                </div>
                <ul className="club-contact">
                  {court.phone && (
                    <li>
                      <Phone aria-hidden="true" />
                      <div>
                        <span className="club-contact-label">Phone</span>
                        <TrackedLink href={`tel:${court.phone}`} type="phone" clubName={court.name} className="club-contact-link">{court.phone}</TrackedLink>
                      </div>
                    </li>
                  )}
                  {court.email && (
                    <li>
                      <Mail aria-hidden="true" />
                      <div>
                        <span className="club-contact-label">Email</span>
                        <a href={`mailto:${court.email}`} className="club-contact-link break-all">{court.email}</a>
                      </div>
                    </li>
                  )}
                  {court.website && (
                    <li>
                      <Globe aria-hidden="true" />
                      <div>
                        <span className="club-contact-label">Website</span>
                        <TrackedLink href={court.website} type="website" clubName={court.name} target="_blank" rel="noopener noreferrer" className="club-contact-link">
                          Visit website
                        </TrackedLink>
                      </div>
                    </li>
                  )}
                  {court.instagram && (
                    <li>
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      <div>
                        <span className="club-contact-label">Instagram</span>
                        <TrackedLink href={court.instagram} type="social" clubName={court.name} platform="instagram" target="_blank" rel="noopener noreferrer" className="club-contact-link">
                          Follow on Instagram
                        </TrackedLink>
                      </div>
                    </li>
                  )}
                  {court.facebook && (
                    <li>
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      <div>
                        <span className="club-contact-label">Facebook</span>
                        <TrackedLink href={court.facebook} type="social" clubName={court.name} platform="facebook" target="_blank" rel="noopener noreferrer" className="club-contact-link">
                          Follow on Facebook
                        </TrackedLink>
                      </div>
                    </li>
                  )}
                  {fullAddress && (
                    <li>
                      <MapPin aria-hidden="true" />
                      <div>
                        <span className="club-contact-label">Address</span>
                        <span className="text-sm">{fullAddress}</span>
                      </div>
                    </li>
                  )}
                </ul>
              </section>
            </div>
          </aside>

          {/* Main column */}
          <div className="club-area-main space-y-6 min-w-0">
            {court.description && (
              <section className="club-card" aria-labelledby="club-about">
                <div className="club-section-head">
                  <h2 id="club-about" className="club-h2">About {court.name}</h2>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/85">{noEmDash(court.description)}</p>
              </section>
            )}

            {(court.amenities.length > 0 || onSite.length > 0) && (
              <section className="club-card" aria-labelledby="club-amenities">
                <div className="club-section-head">
                  <h2 id="club-amenities" className="club-h2">Amenities</h2>
                </div>
                {onSite.length > 0 && (
                  <ul className="club-chips mb-3">
                    {onSite.map((o) => (
                      <li key={o.label} className="club-amenity is-key">{o.icon}{o.label}</li>
                    ))}
                  </ul>
                )}
                {court.amenities.length > 0 && (
                  <ul className="club-chips">
                    {court.amenities.map((amenity) => (
                      <li key={amenity} className="club-amenity">
                        <CheckCircle aria-hidden="true" />
                        {noEmDash(amenity.charAt(0).toUpperCase() + amenity.slice(1))}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* What Players Say — review themes */}
            {((court.positiveReviewThemes && court.positiveReviewThemes.length > 0) || (court.negativeReviewThemes && court.negativeReviewThemes.length > 0)) && (
              <section className="club-card" aria-labelledby="club-players">
                <div className="club-section-head">
                  <h2 id="club-players" className="club-h2">What players say</h2>
                </div>
                <div className="space-y-4">
                  {court.positiveReviewThemes && court.positiveReviewThemes.length > 0 && (
                    <div>
                      <p className="club-kicker mb-2">Players love</p>
                      <ul className="club-chips">
                        {court.positiveReviewThemes.map((theme) => (
                          <li key={theme} className="club-amenity is-good">{noEmDash(theme)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {court.negativeReviewThemes && court.negativeReviewThemes.length > 0 && (
                    <div>
                      <p className="club-kicker mb-2">Could improve</p>
                      <ul className="club-chips">
                        {court.negativeReviewThemes.map((theme) => (
                          <li key={theme} className="club-amenity is-meh">{noEmDash(theme)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Photo gallery — only when the club has supplied more than one real photo */}
            {court.images.length > 1 && (
              <section className="club-card" aria-labelledby="club-photos">
                <div className="club-section-head">
                  <h2 id="club-photos" className="club-h2">Photos</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {court.images.slice(1).map((img) => (
                    <div key={img.url} className="relative aspect-[3/4] rounded-lg overflow-hidden border">
                      <ClubImage src={img.url} alt={img.alt} className="object-cover" sizes="(min-width: 768px) 22vw, 50vw" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Map */}
            <MapBoundary address={fullAddress} mapsUrl={court.googleMapsUrl}>
              <ClubMapClient
                name={court.name}
                address={court.address}
                coordinates={court.coordinates}
                googleMapsUrl={court.googleMapsUrl}
              />
            </MapBoundary>

            {/* FAQs */}
            {court.faqs && court.faqs.length > 0 && (
              <section className="club-card" aria-labelledby="club-faq">
                <div className="club-section-head">
                  <h2 id="club-faq" className="club-h2">Frequently asked questions</h2>
                </div>
                <div className="divide-y">
                  {court.faqs.map((faq, index) => (
                    <div key={index} className="py-3 first:pt-0 last:pb-0">
                      <h3 className="font-semibold mb-1.5 text-[15px]">{noEmDash(faq.question)}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{noEmDash(faq.answer)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Nearby clubs */}
        {nearby.length > 0 && (
          <section className="mt-12" aria-labelledby="club-nearby">
            <div className="flex items-end justify-between gap-4 mb-5">
              <h2 id="club-nearby" className="font-display text-2xl font-bold">Nearby clubs</h2>
              {stateInfo && (
                <Link href={`/${stateInfo.slug}/${citySlug}`} className="hidden sm:inline-flex items-center gap-1 text-sm text-padel-green-dark hover:underline">
                  All in {court.address.city} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearby.map(({ club, miles }) => (
                <Link key={club.id} href={`/courts/${club.slug}`} className="group club-near">
                  <div className="aspect-video relative overflow-hidden bg-court">
                    <ClubImage
                      src={club.heroImage}
                      alt={club.name}
                      courts={club.facility.totalCourts}
                      className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-display font-semibold leading-snug line-clamp-1 group-hover:text-padel-green-dark">{club.name}</p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {club.address.city}, {club.address.stateCode}
                    </p>
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                      {typeof miles === "number" && <span>{formatMiles(miles)}</span>}
                      {club.facility.totalCourts > 0 && (
                        <span>{club.facility.totalCourts} {club.facility.totalCourts === 1 ? "court" : "courts"}</span>
                      )}
                      {club.rating.ratingValue > 0 && (
                        <span className="inline-flex items-center gap-0.5"><Star className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />{club.rating.ratingValue}</span>
                      )}
                      {club.status === "coming_soon" && <span className="text-amber-700">coming soon</span>}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Explore More */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-lg font-semibold mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {stateInfo && (
              <Link href={`/${stateInfo.slug}/${citySlug}`} className="text-primary hover:underline">
                All padel clubs in {court.address.city}{" "}&rarr;
              </Link>
            )}
            {blogSlug && (
              <Link href={`/blog/best-padel-clubs-${blogSlug}`} className="text-primary hover:underline">
                Best Padel Clubs in {court.address.city}{" "}(2026) &rarr;
              </Link>
            )}
            {stateInfo && (
              <Link href={`/${stateInfo.slug}`} className="text-primary hover:underline">
                Browse all {stateInfo.name}{" "}padel clubs &rarr;
              </Link>
            )}
            <Link href="/blog/best-padel-rackets-beginners" className="text-primary hover:underline">
              Best Beginner Rackets (2026) &rarr;
            </Link>
            <Link href="/rules" className="text-primary hover:underline">
              Learn the Rules &rarr;
            </Link>
          </div>
        </section>

        {/* Tell us what changed */}
        <section className="mt-12 club-card club-correction" aria-labelledby="club-correction">
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-10">
            <div>
              <h2 id="club-correction" className="club-h2">Tell us what changed</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Clubs change prices, hours and courts all the time. If you play at {court.name} or run it and something
                here is out of date, tell us and we will fix it. No account needed.
              </p>
            </div>
            <ClubCorrectionForm slug={court.slug} name={court.name} />
          </div>
        </section>

        {/* Gear Widget */}
        <GearWidget />
      </div>
    </div>
  );
}
