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
              The same report projects <strong>91,000 courts globally by 2028</strong>, and
              its 2026 edition singles out the United States as one of the sport&apos;s biggest
              long-term growth markets — a &quot;Diamond in the Rough,&quot; in its taxonomy —
              after the country added roughly 250 clubs and 330 courts in 2025. The money
              agrees: the Pro Padel League closed a $15 million Series A in March 2026, bringing
              its total to $25 million raised in twelve months across ten franchises. Clubs
              themselves are evolving past courts-in-a-warehouse into what the industry calls
              &quot;third spaces&quot; — social clubs with coaching, cafes, recovery rooms, and
              leagues attached to the glass.
            </p>
            <p>
              Here&apos;s the runway math that makes operators salivate: our directory counts{" "}
              <strong>{totalCourts.toLocaleString()} padel courts in the continental US</strong> —
              about 2% of the world&apos;s supply, in the country with the world&apos;s largest
              sports economy. 2025 was also the first year padel was large enough to be tracked
              by the Sports &amp; Fitness Industry Association, which counts roughly{" "}
              <strong>1.07 million Americans who played</strong>, 238,000 of them eight or more
              times. The US Padel Association projects 10,000 courts and 10 million players by
              2030; an industry report from Syracuse&apos;s Newhouse School and Padel 22 goes as
              far as 30,000 courts. Whether or not either projection lands, the direction is
              unambiguous — and the full report shows exactly where it&apos;s happening, state by
              state.
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
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">The top padel metros</strong> — the 12 US cities ranked by open courts, and why the map is really a map of greater Miami</span></li>
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">Padel as a business</strong> — median court-hour pricing from 80+ clubs, club-size distribution, the multi-location operators, and the members-only share</span></li>
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">The construction pipeline</strong> — every announced club we track, mapped to the states where the next wave lands</span></li>
              <li className="flex gap-2"><span className="text-turf">→</span> <span><strong className="text-white">Padel in context</strong> — US participation (SFIA), the investment rounds, the pro tour&apos;s arrival, the pickleball ratio, and what peer-reviewed studies actually say, all sourced</span></li>
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
              <details className="mb-8 max-w-3xl">
                <summary className="cursor-pointer text-sm text-white/70 hover:text-white">Sources for the external figures on this page</summary>
                <ol className="list-decimal pl-5 mt-3 space-y-1.5 text-xs text-white/50 leading-relaxed">
                <li>Sports &amp; Fitness Industry Association — 2026 Topline Participation Report (padel tracked for the first time) and &quot;What Is Padel?&quot; single-sport summary — <a href="https://sfia.org/resources/what-is-padel/" target="_blank" rel="noopener noreferrer" className="text-turf hover:underline break-all">sfia.org/resources/what-is-padel/</a></li>
                <li>United States Padel Association — &quot;Padel Surpasses One Million Players in the United States&quot; (April 13, 2026) — <a href="https://padelusa.org/padel-surpasses-one-million-players-in-the-united-states/" target="_blank" rel="noopener noreferrer" className="text-turf hover:underline break-all">padelusa.org/padel-surpasses-one-million-players-in-the-unit…</a></li>
                <li>Playtomic × PwC Strategy&amp; — Global Padel Report 2026 (May 28, 2026) — <a href="https://playtomic.com/global-padel-report" target="_blank" rel="noopener noreferrer" className="text-turf hover:underline break-all">playtomic.com/global-padel-report</a></li>
                <li>Playtomic / Padel 22 — press release: &quot;2026 Global Padel Report identifies US as one of the sport&apos;s biggest long-term growth markets&quot; — <a href="https://padel-22.prowly.com/459723-2026-playtomic-global-padel-report-identifies-us-as-one-of-the-sports-biggest-long-term-growth-markets" target="_blank" rel="noopener noreferrer" className="text-turf hover:underline break-all">padel-22.prowly.com/459723-2026-playtomic-global-padel-repor…</a></li>
                <li>SportsPro — &quot;Pro Padel League raises US$15m to fund growth&quot; (March 25, 2026) — <a href="https://www.sportspro.com/finance-investment/investment/pro-padel-league-raises-us15m-to-fund-growth/" target="_blank" rel="noopener noreferrer" className="text-turf hover:underline break-all">www.sportspro.com/finance-investment/investment/pro-padel-le…</a></li>
                <li>Syracuse University Newhouse School × Padel 22 — &quot;The racket about padel&quot; (July 11, 2025) — <a href="https://news.syr.edu/2025/07/11/the-racket-about-padel-newhouse-students-partner-with-global-media-firm-to-track-rise-of-sport/" target="_blank" rel="noopener noreferrer" className="text-turf hover:underline break-all">news.syr.edu/2025/07/11/the-racket-about-padel-newhouse-stud…</a></li>
                </ol>
              </details>
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
