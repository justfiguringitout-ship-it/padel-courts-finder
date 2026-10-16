import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ClaimForm } from "@/components/owner/claim-form";
import { clubIndex } from "@/lib/owner/club-lookup";

export const metadata: Metadata = {
  title: "Claim Your Padel Club Listing",
  description:
    "Own or manage a padel club in the US? Claim your free Padel Courts Finder listing to update hours, courts, prices, booking links and photos. Every change is checked before it goes live.",
  alternates: { canonical: "https://www.padelcourtsfinder.com/claim" },
  openGraph: {
    title: "Claim Your Padel Club Listing | Padel Courts Finder",
    description: "Update your club's hours, courts, prices and photos. Free, and every change is checked before it goes live.",
    url: "https://www.padelcourtsfinder.com/claim",
    siteName: "Padel Courts Finder",
    type: "website",
  },
};

export default function ClaimPage() {
  const clubs = clubIndex();
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-2xl px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Claim your club listing</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          If you own or manage a padel club, you can keep its page on Padel Courts Finder up to date: hours, phone,
          booking link, courts, prices, amenities and photos. It is free.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          <li>1. Find your club and tell us who you are.</li>
          <li>2. We email you a sign-in link. If your email is on the club&apos;s own domain, it arrives right away.</li>
          <li>3. Suggest changes. A person checks every change before it goes live, usually within one business day.</li>
        </ul>

        <section className="mt-8 club-card">
          <Suspense fallback={<p className="text-sm text-muted-foreground">Loading clubs...</p>}>
            <ClaimForm clubs={clubs} />
          </Suspense>
        </section>

        <p className="mt-6 text-sm text-muted-foreground">
          Your club is not listed yet?{" "}
          <Link href="/list-your-court" className="text-primary hover:underline">
            Add it here
          </Link>
          . Already claimed it?{" "}
          <Link href="/owner" className="text-primary hover:underline">
            Go to your dashboard
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
