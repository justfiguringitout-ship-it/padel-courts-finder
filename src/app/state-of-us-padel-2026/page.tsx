import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { getSiteStats } from "@/lib/site-structure";
import { CourtsConstellation } from "@/components/courts-constellation";
import { ReportGate } from "./ReportGate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The State of US Padel 2026: Clubs, Courts & Growth Data",
  description: "Original data on the American padel boom: club counts by state and city, indoor vs outdoor split, the construction pipeline, and the biggest US metros still without a court. Get the full report free by email.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/state-of-us-padel-2026",
  },
  openGraph: {
    title: "The State of US Padel 2026",
    description: "Original data on the American padel boom — club counts by state, the construction pipeline, and the metros still without a court.",
    url: "https://www.padelcourtsfinder.com/state-of-us-padel-2026",
    siteName: "Padel Courts Finder",
    type: "article",
    images: [
      {
        url: "https://www.padelcourtsfinder.com/og/state-of-us-padel-2026.png",
        width: 1200,
        height: 630,
        alt: "The State of US Padel 2026 — original data from Padel Courts Finder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The State of US Padel 2026",
    description: "Original data on the American padel boom, from the most comprehensive US padel directory.",
    images: ["https://www.padelcourtsfinder.com/og/state-of-us-padel-2026.png"],
  },
};

export default function StateOfPadelPage() {
  const stats = getSiteStats();
  const clubs = getAllAdaptedCourts();

  // Headline numbers only — the deep analysis lives in the gated report.
  const withCourtCounts = clubs.filter((c) => c.facility.totalCourts > 0);
  const totalCourts = withCourtCounts.reduce((s, c) => s + c.facility.totalCourts, 0);
  const comingSoon = clubs.filter((c) => c.status === "coming_soon");

  const updated = "September 2026";

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The State of US Padel 2026: Clubs, Courts & Growth Data",
    "description": "Original data on the American padel boom from the Padel Courts Finder directory.",
    "datePublished": "2026-07-05T00:00:00Z",
    "dateModified": "2026-09-11T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/state-of-us-padel-2026" }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="font-mono text-sm text-turf mb-4">original data · updated {updated}</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The State of US Padel, 2026
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mb-10">
            What the most comprehensive directory of American padel clubs says about
            where the sport stands — and where it&apos;s going next. Headline figures are
            free to cite with attribution; the full report is free by email below.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{stats.totalCourts}+</dd>
              <dt className="text-sm text-white/50 mt-1">clubs tracked</dt>
            </div>
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{totalCourts.toLocaleString()}</dd>
              <dt className="text-sm text-white/50 mt-1">individual courts</dt>
            </div>
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{stats.totalStates}</dd>
              <dt className="text-sm text-white/50 mt-1">states with padel</dt>
            </div>
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{comingSoon.length}</dd>
              <dt className="text-sm text-white/50 mt-1">clubs in the pipeline</dt>
            </div>
          </dl>
        </div>
      </header>

      <article>
        {/* The sport, the boom */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            The sport eating the world, arriving in America
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed max-w-3xl">
            <p>
              Padel — the enclosed-court racquet sport that plays like tennis crossed with
              squash, always in doubles, with walls in play — has spent a decade becoming
              the sport everyone&apos;s uncle in Madrid already plays and everyone&apos;s gym
              buddy in Miami just discovered. Playtomic&apos;s Global Padel Report 2026 counts
              roughly <strong>58,300 courts, nearly 20,000 clubs, and 19.4 million players
              worldwide</strong>, with close to 5,000 new clubs and 8,000 new courts added in
              2025 alone — the numbers behind padel&apos;s standing claim to being the world&apos;s
              fastest-growing sport.
            </p>
            <p>
              The same report projects <strong>91,000 courts globally by 2028</strong> and
              singles out the United States as one of the sport&apos;s biggest long-term growth
              markets. The money agrees: the global padel equipment market has grown at a
              roughly 34% compound annual rate since 2019 per Playtomic&apos;s data, and the
              US-based Pro Padel League raised $15 million this year to build out its league
              calendar. Clubs themselves are evolving past courts-in-a-warehouse into what the
              industry calls &quot;third spaces&quot; — social clubs with coaching, cafes,
              recovery rooms, and leagues attached to the glass.
            </p>
            <p>
              Here&apos;s the runway math that makes operators salivate: our directory counts{" "}
              <strong>{totalCourts.toLocaleString()} padel courts in the continental US</strong> —
              about 2% of the world&apos;s supply, in the country with the world&apos;s largest
              sports economy. Industry estimates put American players around half a million by
              the end of 2025, up from fewer than 100,000 in 2023, and the US Padel Association
              projects 30,000 courts and 10 million players by 2030. Whether or not that
              projection lands, the direction is unambiguous — and the full report shows
              exactly where it&apos;s happening, state by state.
            </p>
          </div>
        </section>

        {/* Map */}
        <section className="grain bg-court text-white border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Every club, mapped
            </h2>
            <p className="text-white/50 mb-8">
              {stats.totalCourts}+ clubs across {stats.totalCities}+ cities. Each light is a listed club.
            </p>
            <CourtsConstellation />
          </div>
        </section>

        {/* Email gate for the full report */}
        <section id="full-report" className="grain bg-court text-white border-t border-white/[0.06] scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="font-mono text-sm text-turf mb-4">reader edition · free</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Get the full report by email
            </h2>
            <p className="text-white/60 leading-relaxed max-w-2xl mb-3">
              The complete State of US Padel 2026 goes deeper than any public source:
            </p>
            <ul className="text-white/70 leading-relaxed max-w-2xl mb-8 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">State rankings</strong> — every state&apos;s club count, from Florida&apos;s lead to the newest one-club markets</span></li>
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">The facility profile</strong> — average courts per club, the indoor/outdoor split, and the largest facility in America</span></li>
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">The construction pipeline</strong> — every announced club we track, mapped to the states where the next wave lands</span></li>
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">The padel deserts</strong> — the top-40 US metros still without a court within 25 miles, with the nearest option for each</span></li>
            </ul>
            <ReportGate />
          </div>
        </section>

        {/* Methodology + Cite */}
        <section id="cite" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-24">
          <div className="grain relative bg-court text-white rounded-3xl overflow-hidden">
            <div className="relative px-6 py-12 md:px-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Methodology &amp; citing this data
              </h2>
              <p className="text-white/60 leading-relaxed mb-4 max-w-3xl">
                Padel Courts Finder maintains the underlying directory continuously: club
                listings are compiled from club websites, owner submissions, and public
                sources, then verified before publication. Figures are computed live from
                the directory, so they update as new clubs open. Where a data point is
                unknown for a club, it is excluded from that statistic rather than estimated.
              </p>
              <p className="text-white/60 leading-relaxed mb-8 max-w-3xl">
                Journalists and researchers are welcome to cite the headline figures on this
                page with attribution and a link: <span className="text-white">&quot;Source:
                Padel Courts Finder, State of US Padel 2026&quot;</span>. For the full report,
                custom cuts of the data, quotes, or interviews, get in touch — we typically
                turn press requests around same-day. Republishing the report or the
                underlying dataset without permission isn&apos;t cool, and we do check.
              </p>
              <Link
                href="/advertise#partner-form"
                className="inline-flex items-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-7 py-3.5 transition-all shadow-lg shadow-padel-green/25"
              >
                Press &amp; data inquiries
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
