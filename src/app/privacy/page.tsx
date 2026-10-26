import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Padel Courts Finder",
  description: "How Padel Courts Finder handles analytics, form submissions, and affiliate links.",
  alternates: { canonical: "https://www.padelcourtsfinder.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="h-1 bg-padel-green" />
      <header className="grain bg-court text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: October 25, 2026</p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-stone-700 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold mb-2">What we collect</h2>
          <p>
            Padel Courts Finder has no user accounts. The personal information we receive is
            what you choose to send us through our forms — club listing requests and
            partnership inquiries — which include things like your name, email, and club or
            company details. Form submissions are processed by Formspree and delivered to our
            inbox; we use them only to respond to you and, for club submissions, to build or
            update your listing.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Analytics</h2>
          <p>
            We use Google Analytics and Plausible to understand how the site is used —
            pages visited, referral sources, and approximate location. Google Analytics uses
            cookies; Plausible is cookie-free. We don&apos;t sell this data or use it to
            identify individual visitors.
          </p>
          <p className="mt-3">
            For our public AI leaderboard we also
            keep aggregate daily counts of which sites and crawlers send or bring traffic to us, with no personal data.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Affiliate links</h2>
          <p>
            Some links on this site are affiliate links. They go to retailers and affiliate
            networks such as Amazon, and if you buy something after clicking one, we may earn
            a commission. As an Amazon Associate, Padel Courts Finder earns from qualifying
            purchases. Using an affiliate link never changes the price you pay.
          </p>
          <p className="mt-3">
            When you click an affiliate link, the store or the affiliate network that runs the
            program may set cookies or use similar tracking on its own site to record that you
            came from us, so the sale can be credited to us. Their privacy policies cover that
            tracking. We do not get your name, contact details or payment details from the
            store. The reports we receive show things like clicks, orders and commissions, not
            who you are. Our own analytics also count clicks on these links, without
            identifying you. Pages with affiliate links say so where the links appear.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Club listings</h2>
          <p>
            Club pages show business information — addresses, hours, pricing, contact
            details — compiled from club websites, owner submissions, and public sources.
            If you represent a club and want your listing corrected or removed, email us
            through the <a href="/list-your-court" className="text-padel-green hover:underline">listing page</a> and
            we&apos;ll handle it promptly.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Third parties</h2>
          <p>
            We link out to club websites, booking platforms, and retailers. Their privacy
            practices are their own — this policy covers only padelcourtsfinder.com.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Questions</h2>
          <p>
            Reach us through the <a href="/advertise#partner-form" className="text-padel-green hover:underline">contact form</a> and
            we&apos;ll get back to you.
          </p>
        </section>
      </main>
    </div>
  );
}
