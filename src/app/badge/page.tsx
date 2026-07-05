import Link from "next/link";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { BadgeGenerator } from "@/components/badge-generator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Club Badge | Padel Courts Finder",
  description: "Add the 'Featured on Padel Courts Finder' badge to your club's website. Free for every listed club — links players straight to your club page.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/badge",
  },
};

export default function BadgePage() {
  const clubs = getAllAdaptedCourts().map((c) => ({
    name: c.name,
    slug: c.slug,
    city: c.address.city,
    stateCode: c.address.stateCode,
  }));

  return (
    <div className="min-h-screen">
      <div className="h-1 bg-padel-green" />
      <div className="grain bg-court text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="font-mono text-sm text-turf mb-4">for listed clubs</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Put your badge up.
          </h1>
          <p className="text-lg text-white/60 max-w-xl mb-10">
            Every listed club can add the Padel Courts Finder badge to its website —
            free. It shows players you&apos;re part of the national directory and links
            them straight to your club page with your hours, courts, and reviews.
          </p>

          <BadgeGenerator clubs={clubs} />

          <div className="mt-10 space-y-4 text-white/60 text-sm leading-relaxed">
            <p>
              <span className="text-white font-semibold">How to use it:</span> pick your club
              above, copy the code, and paste it into your site&apos;s footer or &quot;about&quot;
              section — it works on Squarespace, Wix, WordPress, Webflow, and plain HTML.
            </p>
            <p>
              <span className="text-white font-semibold">Not listed yet?</span>{" "}
              <Link href="/list-your-court" className="text-turf hover:underline">
                Add your club free
              </Link>{" "}
              and the badge is yours too. Questions or a custom size?{" "}
              <Link href="/advertise#partner-form" className="text-turf hover:underline">
                Get in touch
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
