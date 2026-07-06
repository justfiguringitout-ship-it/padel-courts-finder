import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Padel Courts Finder",
  description: "Terms of use for Padel Courts Finder — directory accuracy, affiliate relationships, and content usage.",
  alternates: { canonical: "https://www.padelcourtsfinder.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="h-1 bg-padel-green" />
      <header className="grain bg-court text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: July 5, 2026</p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-stone-700 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold mb-2">What this site is</h2>
          <p>
            Padel Courts Finder is an informational directory of padel clubs in the United
            States, plus editorial guides about the sport and its equipment. Using the site
            means you accept these terms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Directory accuracy</h2>
          <p>
            We work hard to keep listings accurate — data comes from club websites, owner
            submissions, and public sources, and we verify before publishing. But clubs
            change hours, prices, and availability without telling us. Always confirm
            details with the club before traveling or booking. Listings are provided
            &quot;as is&quot; without warranty of any kind.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Editorial content &amp; affiliate links</h2>
          <p>
            Our gear guides reflect our honest editorial assessment. Some links are
            affiliate links — as an Amazon Associate, we earn from qualifying purchases at
            no extra cost to you. Sponsorships and partnerships are always disclosed;
            editorial ratings are never for sale.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Using our content</h2>
          <p>
            You&apos;re welcome to cite our data and reports with attribution and a link
            (see the <a href="/state-of-us-padel-2026#cite" className="text-padel-green hover:underline">citation guidelines</a>).
            Republishing full pages or scraping the directory wholesale isn&apos;t permitted
            without written agreement.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Liability</h2>
          <p>
            Padel is a physical sport — play at your own risk and follow your club&apos;s
            safety rules. To the maximum extent permitted by law, Padel Courts Finder is
            not liable for damages arising from use of the site or reliance on its
            information.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-2">Changes</h2>
          <p>
            We may update these terms as the site evolves; the date above reflects the
            latest revision. Questions? Use the{" "}
            <a href="/advertise#partner-form" className="text-padel-green hover:underline">contact form</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
