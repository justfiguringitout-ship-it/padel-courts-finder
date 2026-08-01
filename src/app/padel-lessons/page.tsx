import { Metadata } from 'next';
import Link from 'next/link';
import { GearWidget } from '@/components/GearWidget';

const TITLE = "Padel Lessons & Classes (2026): What to Expect and What They Cost";
const DESC = "Padel lessons near you: what a beginner clinic actually involves, what private and group lessons cost in the US, and how to book your first session without buying any gear.";
const URL = "https://www.padelcourtsfinder.com/padel-lessons";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["padel lessons near me", "padel classes near me", "padel lessons", "padel classes", "beginner padel lessons", "padel clinic"],
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "Padel Courts Finder", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  alternates: { canonical: URL },
};

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": TITLE,
  "description": DESC,
  "datePublished": "2026-07-31T00:00:00Z",
  "dateModified": "2026-07-31T00:00:00Z",
  "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
  "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": URL }
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find padel lessons near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most US padel clubs run beginner clinics and private lessons — it's how nearly every club onboards new players. Use the Padel Courts Finder court finder to locate clubs in your city, then check their booking page or call the front desk and ask about beginner clinics; those are usually the cheapest and most social way to start."
      }
    },
    {
      "@type": "Question",
      "name": "How much do padel lessons cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Group clinics commonly run about $30-60 per person for 60-90 minutes, since the coaching cost is split across four to six players. Private one-on-one lessons typically cost $75-150 an hour depending on the market and the coach's credentials. Many clubs bundle a discounted intro clinic for first-timers, and rackets are usually included."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need my own racket for a padel lesson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nearly every club provides loaner rackets and balls for lessons and clinics, so you can try the sport before spending anything on gear. Wear court shoes with a flat, non-marking sole if you have them — running shoes are the one thing worth avoiding, since padel is all lateral movement."
      }
    },
    {
      "@type": "Question",
      "name": "What happens in a beginner padel clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical 90-minute beginner clinic covers the underhand serve, forehand and backhand from the back of the court, how to play a ball off the glass wall, basic net positioning, and the scoring system. Most clinics finish with short games so you leave having actually played points, not just drilled."
      }
    },
    {
      "@type": "Question",
      "name": "How many lessons do I need before I can play padel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One clinic is usually enough to play a social match — padel's low barrier to entry is its whole appeal. Two or three sessions will get the wall rebound and net positioning to feel natural, which is the point where most players start booking courts on their own."
      }
    }
  ]
};

export default function PadelLessonsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/" className="text-stone-400 hover:text-turf text-sm">&larr; Home</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Get Started</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Padel Lessons &amp; Classes</h1>
          <p className="text-lg text-stone-400 mt-3">What a first lesson actually involves, what it costs, and how to book one this week</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>Updated July 31, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>5 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <section>
            <p className="text-stone-700 leading-relaxed">
              A lesson is the fastest way into padel, and not mainly for the technique. Padel is a doubles sport,
              so the real barrier for most new players isn&apos;t the forehand — it&apos;s finding three other people.
              A beginner clinic solves both at once: a coach walks you through the basics, and you leave with a
              handful of players at your level who also need a fourth.
            </p>
            <div className="mt-5 bg-court grain rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">Find a club near you</h2>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Nearly every US padel club runs clinics and private lessons. Search by city or state, open the
                club&apos;s page, and use their booking link or phone number to ask what&apos;s on this week.
              </p>
              <Link href="/search" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-padel-green/90 transition-colors">
                Search padel clubs near me
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How much do padel lessons cost?</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Lesson type</th>
                    <th className="p-3 font-semibold">Typical US cost</th>
                    <th className="p-3 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Beginner clinic (group)</td>
                    <td className="p-3">~$30&ndash;60 per person</td>
                    <td className="p-3">First-timers; meeting other new players</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Recurring group class</td>
                    <td className="p-3">~$30&ndash;60 per session</td>
                    <td className="p-3">Building steady technique with the same group</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Private lesson (1-on-1)</td>
                    <td className="p-3">~$75&ndash;150 per hour</td>
                    <td className="p-3">Fixing something specific, fast</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mt-4">
              Ranges reflect what US clubs commonly advertise; big-market clubs and highly credentialed coaches sit at the top end. Court fees are usually included in clinic pricing — worth confirming when you book. Curious what
              court time alone runs? See typical rates on any <Link href="/search" className="text-padel-green hover:underline">club&apos;s page</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">What happens in a beginner padel clinic</h2>
            <ul className="space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li><strong>The underhand serve.</strong> Bounce, strike below the waist, diagonal box. Ten minutes and you&apos;ve got it — this is the single biggest reason padel is easier to start than tennis.</li>
              <li><strong>Groundstrokes from the back.</strong> Short, compact swings. Coaches spend most of their time shrinking tennis players&apos; backswings.</li>
              <li><strong>Playing the wall.</strong> Letting the ball pass you, bounce off the glass, and hitting it on the way back. Weird for one session, then addictive.</li>
              <li><strong>Net positioning.</strong> Padel is won at the net, and where you stand matters more than how hard you hit.</li>
              <li><strong>Scoring and a short match.</strong> Same as tennis, and most clinics end with real points.</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Want the theory before you show up? Read <Link href="/how-to-play" className="text-padel-green hover:underline">how to play padel</Link>{" "}
              and the <Link href="/rules" className="text-padel-green hover:underline">rules of padel</Link> first — you&apos;ll get more out of the hour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">What to bring to your first lesson</h2>
            <p className="text-stone-700 leading-relaxed">
              Almost nothing. Clubs lend rackets and supply balls for clinics, so you can find out whether you love
              the sport before spending a dollar on gear. Bring water, athletic clothes, and — the one thing worth
              getting right — flat, non-marking court shoes rather than running shoes. Padel is constant lateral
              movement, and running shoes roll on hard cuts.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              Once you&apos;re hooked, our <Link href="/blog/best-padel-shoes" className="text-padel-green hover:underline">padel shoes guide</Link>{" "}
              and <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner rackets guide</Link>{" "}
              cover what to buy first — in that order, because shoes matter more than most beginners expect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Where can I find padel lessons near me?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Most US padel clubs run beginner clinics and private lessons — it&apos;s how nearly every club onboards new players. <Link href="/search" className="text-padel-green hover:underline">Find clubs in your city</Link>, then check their booking page or call and ask about beginner clinics; those are the cheapest and most social way in.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How much do padel lessons cost?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Group clinics commonly run ~$30&ndash;60 per person for 60&ndash;90 minutes since coaching is split across the group. Private lessons typically run ~$75&ndash;150 an hour. Many clubs discount a first-timer intro clinic, and rackets are usually included.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Do I need my own racket for a padel lesson?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">No — nearly every club lends rackets and supplies balls, so you can try padel before buying anything. Just avoid running shoes; flat non-marking court shoes are the one thing worth sorting out first.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What happens in a beginner padel clinic?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">A typical 90-minute clinic covers the underhand serve, groundstrokes, playing the ball off the glass, net positioning, and scoring — usually finishing with short games so you leave having actually played points.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How many lessons do I need before I can play padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">One clinic is usually enough to play a social match. Two or three sessions make the wall rebound and net positioning feel natural — which is when most players start booking courts on their own.</p>
              </div>
            </div>
          </section>

          <GearWidget />

          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Keep reading</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/how-to-play" className="text-padel-green hover:underline">How to Play Padel</Link>
              <Link href="/rules" className="text-padel-green hover:underline">Padel Rules</Link>
              <Link href="/indoor-padel-courts" className="text-padel-green hover:underline">Indoor Padel Courts</Link>
              <Link href="/blog/padel-vs-pickleball" className="text-padel-green hover:underline">Padel vs Pickleball</Link>
              <Link href="/search" className="text-padel-green hover:underline">Find Courts Near You</Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
