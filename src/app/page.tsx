import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { getStates, getSiteStats } from "@/lib/site-structure";
import { getAllAdaptedCourts, getAdaptedCourtBySlug } from "@/lib/court-adapter";
import { HeroSearch } from "@/components/hero-search";
import { ClubImage } from "@/components/club-image";
import { ScrollRotate } from "@/components/scroll-rotate";
import { StatCounter } from "@/components/stat-counter";
import { CourtsConstellation } from "@/components/courts-constellation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padel Courts Near Me | Find & Book 313+ Padel Courts in the USA",
  description: "Find padel courts near you. Browse 313+ padel clubs across 37 states. Compare prices, read reviews, check hours, and book courts online. The #1 US padel court directory.",
  keywords: [
    "padel courts near me",
    "padel near me",
    "padel court near me",
    "find padel courts",
    "padel clubs near me",
    "padel courts USA",
    "book padel court",
    "indoor padel courts",
    "outdoor padel courts",
  ],
  openGraph: {
    title: "Padel Courts Near Me | Find & Book 313+ Padel Courts in the USA",
    description: "Find padel courts near you. Browse 313+ padel clubs across 37 states. Compare prices, read reviews, check hours, and book courts online.",
    url: "https://www.padelcourtsfinder.com",
    siteName: "Padel Courts Finder",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Padel Courts Near Me - Find padel clubs across the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Courts Near Me | Find & Book 313+ Padel Courts in the USA",
    description: "Find padel courts near you. Browse 313+ padel clubs across 37 states. Compare prices, read reviews, and book courts online.",
    images: ["https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "https://www.padelcourtsfinder.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* Faint top-view padel court, used as a background motif on dark bands */
function CourtLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 760"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="20" y="20" width="360" height="720" rx="4" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="380" x2="380" y2="380" stroke="currentColor" strokeWidth="2" strokeDasharray="10 8" />
      <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="560" x2="380" y2="560" stroke="currentColor" strokeWidth="2" />
      <line x1="200" y1="200" x2="200" y2="560" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function HomePage() {
  const stats = getSiteStats();
  const states = getStates();
  const allCourts = getAllAdaptedCourts();

  // Get featured courts: prefer courts with featured: true, fall back to isFeatured.
  // This section is a visual showcase, so only clubs with a real photo qualify.
  const explicitFeatured = allCourts.filter((court) => court.featured && court.heroImage);
  const featuredCourts = explicitFeatured.length > 0
    ? explicitFeatured.slice(0, 6)
    : allCourts.filter((court) => court.isFeatured && court.heroImage).slice(0, 6);

  const [heroClub, ...gridClubs] = featuredCourts;

  const sortedStates = [...states].sort((a, b) => b.courtCount - a.courtCount);
  const topStates = sortedStates.slice(0, 6);
  const restStates = sortedStates.slice(6);

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD for WebSite with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Padel Courts Finder",
            url: "https://www.padelcourtsfinder.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.padelcourtsfinder.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* ===== Dark band: hero + constellation ===== */}
      <div className="grain bg-court text-white overflow-hidden">
        {/* Hero */}
        <section className="relative">
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden md:block" aria-hidden="true">
            <ScrollRotate base={12} factor={0.14}>
              <CourtLines className="h-[540px] w-auto text-white/[0.09]" />
            </ScrollRotate>
          </div>
          <div className="container mx-auto px-4 pt-20 md:pt-28 pb-14 relative">
            <div className="max-w-3xl">
              <p className="font-mono text-sm text-turf mb-5">the u.s. padel directory</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
                Every padel court in America.{" "}
                <span className="text-turf">Find yours.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
                {stats.totalCourts} clubs across {stats.totalStates} states — hours,
                pricing, and real player reviews on every one.
              </p>
              <HeroSearch />

              <dl className="flex items-center gap-8 md:gap-12 mt-14">
                <div>
                  <dt className="sr-only">Clubs</dt>
                  <dd className="font-display text-4xl md:text-5xl font-bold text-white">
                    <StatCounter value={stats.totalCourts} suffix="+" />
                  </dd>
                  <dd className="text-sm text-white/50 mt-1">clubs</dd>
                </div>
                <div className="h-12 w-px bg-white/10" aria-hidden="true" />
                <div>
                  <dt className="sr-only">States</dt>
                  <dd className="font-display text-4xl md:text-5xl font-bold text-white">
                    <StatCounter value={stats.totalStates} />
                  </dd>
                  <dd className="text-sm text-white/50 mt-1">states</dd>
                </div>
                <div className="h-12 w-px bg-white/10" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Cities</dt>
                  <dd className="font-display text-4xl md:text-5xl font-bold text-white">
                    <StatCounter value={stats.totalCities} suffix="+" />
                  </dd>
                  <dd className="text-sm text-white/50 mt-1">cities</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Constellation map */}
        <section className="relative border-t border-white/[0.06]">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Lights on, coast to coast
                </h2>
                <p className="text-white/50 mt-2">
                  Every dot is a real club. Hover one, click through, go play.
                </p>
              </div>
              <Link
                href="/search"
                className="group inline-flex items-center gap-2 text-turf font-medium hover:gap-3 transition-all"
              >
                Browse all clubs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <CourtsConstellation />
            <p className="font-mono text-xs text-white/30 mt-6">
              continental u.s. · positions approximate at national scale
            </p>
          </div>
        </section>
      </div>

      {/* ===== Browse by state ===== */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="reveal-up max-w-2xl mb-12">
          <p className="font-mono text-sm text-padel-green mb-3">browse by state</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Where the game is growing
          </h2>
          <p className="text-muted-foreground text-lg">
            Florida and Texas lead the boom, but padel is landing everywhere.
            Pick your state and see what&apos;s near you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {topStates.map((state, i) => (
            <Link
              key={state.code}
              href={`/${state.slug}`}
              className={`reveal-up group relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                i === 0
                  ? "sm:col-span-2 grain bg-court text-white hover:shadow-xl hover:shadow-court/30"
                  : i === 1
                  ? "sm:col-span-2 lg:col-span-2 bg-padel-green text-white hover:shadow-xl hover:shadow-padel-green/30"
                  : "border bg-card hover:border-padel-green hover:shadow-lg"
              }`}
            >
              <div className={`font-display text-5xl md:text-6xl font-bold tabular-nums ${
                i === 0 ? "text-turf" : i === 1 ? "text-white" : "text-padel-green"
              }`}>
                {state.courtCount}
              </div>
              <div className="mt-3 font-display text-xl font-semibold">
                {state.name}
              </div>
              <div className={`text-sm mt-1 ${i <= 1 ? "text-white/60" : "text-muted-foreground"}`}>
                {state.cities.length} {state.cities.length === 1 ? "city" : "cities"} with courts
              </div>
              <ArrowRight
                className={`absolute top-6 right-6 w-5 h-5 transition-transform group-hover:translate-x-1 ${
                  i <= 1 ? "text-white/50" : "text-muted-foreground/50"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="reveal-up flex flex-wrap gap-2">
          {restStates.map((state) => (
            <Link
              key={state.code}
              href={`/${state.slug}`}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:border-padel-green hover:text-padel-green transition-colors"
            >
              {state.name}
              <span className="tabular-nums text-muted-foreground text-xs">{state.courtCount}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Featured clubs ===== */}
      <section className="border-y bg-muted/50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="reveal-up flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="font-mono text-sm text-padel-green mb-3">featured clubs</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Worth the drive
              </h2>
            </div>
            <Link
              href="/search"
              className="group inline-flex items-center gap-2 text-padel-green font-medium hover:gap-3 transition-all"
            >
              View all {stats.totalCourts}+ clubs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {heroClub && (
            <Link
              href={`/courts/${heroClub.slug}`}
              className="reveal-up group grid md:grid-cols-5 gap-6 md:gap-10 mb-14 items-center"
            >
              <div className="relative md:col-span-3 aspect-[16/10] rounded-2xl overflow-hidden">
                <ClubImage
                  src={heroClub.heroImage}
                  alt={heroClub.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  {heroClub.address.city}, {heroClub.address.stateCode}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-padel-green transition-colors">
                  {heroClub.name}
                </h3>
                <div className="flex items-center gap-5 text-sm mb-6">
                  {heroClub.rating.ratingValue > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold tabular-nums">{heroClub.rating.ratingValue}</span>
                      {heroClub.rating.reviewCount > 0 && (
                        <span className="text-muted-foreground tabular-nums">
                          ({heroClub.rating.reviewCount})
                        </span>
                      )}
                    </span>
                  )}
                  {heroClub.facility.totalCourts > 0 && (
                    <span className="text-muted-foreground">
                      {heroClub.facility.totalCourts} courts
                    </span>
                  )}
                  {heroClub.pricing.offPeakHourlyRate > 0 && (
                    <span className="text-muted-foreground">
                      from <span className="font-semibold text-foreground tabular-nums">${heroClub.pricing.offPeakHourlyRate}</span>/hr
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-2 font-medium text-padel-green group-hover:gap-3 transition-all">
                  See the club
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {gridClubs.map((court) => (
              <Link
                key={court.id}
                href={`/courts/${court.slug}`}
                className="reveal-up group"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <ClubImage
                    src={court.heroImage}
                    alt={court.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold group-hover:text-padel-green transition-colors">
                  {court.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1.5">
                  <span>{court.address.city}, {court.address.stateCode}</span>
                  {court.rating.ratingValue > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="tabular-nums">{court.rating.ratingValue}</span>
                    </span>
                  )}
                  {court.pricing.offPeakHourlyRate > 0 && (
                    <span className="tabular-nums">${court.pricing.offPeakHourlyRate}/hr</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Popular cities ===== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="reveal-up flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Popular padel cities
          </h2>
        </div>
        <div className="reveal-up flex flex-wrap gap-3">
          {stats.topCities.map((city) => (
            <Link
              key={`${city.slug}-${city.stateCode}`}
              href={`/${states.find(s => s.code === city.stateCode)?.slug}/${city.slug}`}
              className="group inline-flex items-baseline gap-2.5 rounded-xl border bg-card px-5 py-3.5 hover:border-padel-green hover:shadow-md transition-all"
            >
              <span className="font-display font-semibold group-hover:text-padel-green transition-colors">
                {city.name}
              </span>
              <span className="tabular-nums text-sm text-muted-foreground">
                {city.courtCount} {city.courtCount === 1 ? "club" : "clubs"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== City guides ===== */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="reveal-up max-w-2xl mb-10">
          <p className="font-mono text-sm text-padel-green mb-3">city guides</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Know before you book
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { href: '/blog/best-padel-clubs-miami', courtSlug: 'ultra-padel-club', title: 'Best clubs in Miami', desc: '14+ clubs reviewed — Reserve Padel, Ultra Padel, and more', alt: 'Miami padel courts' },
            { href: '/blog/best-padel-clubs-austin', courtSlug: 'padel-39', title: 'Best clubs in Austin', desc: "America's padel capital — Padel39, Padel Club Austin & more", alt: 'Austin padel courts' },
            { href: '/blog/best-padel-clubs-los-angeles', courtSlug: 'los-angeles-padel-club', title: 'Best clubs in Los Angeles', desc: '8+ LA clubs from Santa Monica to Pasadena', alt: 'Los Angeles padel courts' },
          ].map((item) => {
            const court = getAdaptedCourtBySlug(item.courtSlug);
            const imageUrl = court?.heroImage;
            return (
              <Link key={item.href} href={item.href} className="reveal-up group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] block">
                {imageUrl ? (
                  <ClubImage
                    src={imageUrl}
                    alt={item.alt}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-court" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-court via-court/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-3">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-turf group-hover:gap-3 transition-all">
                    Read the guide
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="reveal-up mt-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-padel-green font-medium hover:gap-3 transition-all"
          >
            All city guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== Club owner CTA ===== */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="reveal-up grain relative bg-court text-white rounded-3xl overflow-hidden">
          <CourtLines className="absolute -right-10 -bottom-40 h-[500px] w-auto text-white/[0.07] -rotate-12 hidden md:block" />
          <div className="relative px-6 py-14 md:px-14 md:py-16 max-w-2xl">
            <p className="font-mono text-sm text-turf mb-4">for club owners</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Your courts belong on this map.
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Players check Padel Courts Finder before they book. A free listing
              puts your club in front of them — hours, pricing, photos, the works.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/list-your-court"
                className="inline-flex items-center justify-center rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-7 py-3.5 transition-all shadow-lg shadow-padel-green/25"
              >
                List your club
              </Link>
              <Link
                href="/contact"
                className="glass-panel inline-flex items-center justify-center rounded-xl text-white font-medium px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About / SEO block ===== */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h2 className="font-display text-lg font-semibold mb-3">About Padel Courts Finder</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Looking for padel courts near me? Padel Courts Finder is the most comprehensive
            US padel directory, helping you find padel clubs near you in {stats.totalStates} states
            and {stats.totalCities}+ cities. Whether you&apos;re searching for a padel court near me
            to try the sport for the first time or looking to find padel courts with lessons,
            equipment rental, and league play, browse our verified listings to compare hours,
            pricing, and player reviews.
          </p>
        </div>
      </section>
    </div>
  );
}
