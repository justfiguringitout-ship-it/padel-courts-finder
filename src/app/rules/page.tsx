import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { GearWidget } from '@/components/GearWidget';

const TITLE = "Padel Rules (2026): Scoring, Serving & Wall Play Explained";
const DESC = "The complete rules of padel, in plain English: scoring (same as tennis), the underhand serve, how the walls work, lets vs faults, and court dimensions. Everything you need before your first match.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "padel rules",
    "rules of padel",
    "padel tennis rules",
    "padel rules and scoring",
    "padel game rules",
    "padel scoring",
    "padel serve rules",
    "padel court dimensions",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://www.padelcourtsfinder.com/rules",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/rules",
  },
};

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": TITLE,
  "description": DESC,
  "datePublished": "2026-03-20T00:00:00Z",
  "dateModified": "2026-07-31T00:00:00Z",
  "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
  "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/rules" }
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the rules of padel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Padel is played 2v2 on an enclosed 20m x 10m court. Scoring is identical to tennis (15, 30, 40, game; best of three sets). The serve must be underhand, bounced first and struck at or below waist height, into the diagonal service box. After the ball bounces once on your side you may play it off the surrounding walls, and you can hit the ball into your opponents' walls as long as it clears the net first. The ball may bounce only once before you return it."
      }
    },
    {
      "@type": "Question",
      "name": "How does scoring work in padel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exactly like tennis: 15, 30, 40, then game. Deuce at 40-40, and a team must win by two points (many clubs use golden point instead, where a single point at deuce decides the game). Six games win a set — with a tiebreak at 6-6 — and matches are typically best of three sets."
      }
    },
    {
      "@type": "Question",
      "name": "Can you use the walls in padel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and it is the defining rule of the sport. After the ball bounces once on the floor on your side, you may let it rebound off your own back or side walls and play it. You may also hit the ball so it strikes your opponents' walls — but it must go over the net first and land in their court before touching any wall. A ball that hits a wall on your own side before crossing the net is a lost point."
      }
    },
    {
      "@type": "Question",
      "name": "How do you serve in padel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stand behind the service line, bounce the ball on the ground once, and strike it underhand at or below waist height into the diagonally opposite service box. You get two attempts, like tennis. The serve must bounce in the box before your opponent plays it; if it then hits the side fence or mesh after bouncing, it is a fault."
      }
    },
    {
      "@type": "Question",
      "name": "Are padel rules the same as tennis rules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The scoring is identical, but three things differ: the serve is underhand rather than overhead, the walls are in play after the bounce, and padel is almost always played as doubles on a smaller enclosed court. Those changes make rallies longer and the learning curve much gentler than tennis."
      }
    },
    {
      "@type": "Question",
      "name": "What are the dimensions of a padel court?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A regulation padel court is 20 metres long by 10 metres wide (about 66 x 33 feet), divided by a net and enclosed by glass walls and metal mesh. That is roughly a third the size of a tennis court, which is why padel is easier to cover with two players."
      }
    }
  ]
};

export default function RulesPage() {
  const filePath = path.join(process.cwd(), 'content', 'rules-and-regulations.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/" className="text-stone-400 hover:text-turf text-sm">&larr; Home</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Learn Padel</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Padel Rules: Scoring, Serving &amp; Wall Play Explained
          </h1>
          <p className="text-lg text-stone-400 mt-3">Everything you need to know before your first match — in plain English</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>Updated July 31, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>8 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          {/* The 60-second version — answers the query before the scroll */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The rules of padel in 60 seconds</h2>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <ul className="space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
                <li><strong>Format:</strong> almost always 2v2, on an enclosed court 20m x 10m — about a third the size of a tennis court.</li>
                <li><strong>Scoring:</strong> identical to tennis. 15, 30, 40, game; six games take a set, tiebreak at 6&ndash;6, best of three sets.</li>
                <li><strong>Serving:</strong> underhand only. Bounce the ball, strike it at or below waist height, into the diagonal service box. Two attempts.</li>
                <li><strong>The walls:</strong> after the ball bounces once on your side, you can play it off your own walls. You can also hit into your opponents&apos; walls — but the ball must clear the net and bounce in their court first.</li>
                <li><strong>One bounce:</strong> the ball may bounce only once on the floor before you return it. Volleys are legal (except on the serve return).</li>
                <li><strong>The net:</strong> touching the net, or reaching over it to play a ball, loses the point.</li>
              </ul>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mt-4">
              That&apos;s enough to play your first match. The full official detail — court specifications,
              service faults, lets, and every edge case — follows below. New to the sport entirely? Start with{" "}
              <Link href="/how-to-play" className="text-padel-green hover:underline">how to play padel</Link>, or see how it
              compares in our <Link href="/blog/padel-vs-pickleball" className="text-padel-green hover:underline">padel vs pickleball guide</Link>.
            </p>
          </section>

          {/* Full official rules (markdown) */}
          <article className="prose prose-lg prose-stone max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
            prose-h1:hidden
            prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:border-stone-200 prose-h2:pb-2
            prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
            prose-p:text-stone-700 prose-p:leading-relaxed
            prose-a:text-padel-green prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:my-5 prose-li:my-1.5 prose-li:text-stone-700
            prose-table:border-collapse prose-table:w-full prose-table:text-sm
            prose-th:bg-stone-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold
            prose-td:p-3 prose-td:border-t prose-td:border-stone-200">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>

          {/* FAQ — mirrors the schema */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Padel Rules FAQ</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What are the rules of padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Padel is played 2v2 on an enclosed 20m x 10m court. Scoring is identical to tennis. The serve must be underhand, bounced first and struck at or below waist height into the diagonal box. After one bounce on your side you may play the ball off the walls, and you may hit into your opponents&apos; walls provided the ball clears the net and lands in their court first. The ball may bounce only once before you return it.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How does scoring work in padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Exactly like tennis: 15, 30, 40, game. Deuce at 40&ndash;40 and win by two — though many clubs play &quot;golden point,&quot; where a single point decides the game at deuce. Six games win a set with a tiebreak at 6&ndash;6, and matches are usually best of three.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Can you use the walls in padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes — it&apos;s the rule that defines the sport. After the ball bounces once on the floor on your side, you can let it rebound off your own back or side walls and play it. You can also hit the ball into your opponents&apos; walls, but it has to go over the net and bounce in their court before touching anything. A ball that hits a wall on your own side before crossing the net loses the point.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How do you serve in padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Stand behind the service line, bounce the ball once, and strike it underhand at or below waist height into the diagonally opposite service box. You get two attempts. The serve must bounce in the box first; if it then hits the side fence or mesh, it&apos;s a fault.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Are padel rules the same as tennis rules?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">The scoring is identical, but three things differ: the serve is underhand, the walls are in play after the bounce, and padel is nearly always doubles on a smaller enclosed court. Those changes make rallies longer and the sport far easier to pick up than tennis.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What are the dimensions of a padel court?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">A regulation court is 20 metres by 10 metres (roughly 66 x 33 feet), enclosed by glass walls and metal mesh — about a third the size of a tennis court, which is why two players cover it comfortably.</p>
              </div>
            </div>
          </section>

          {/* Monetization: racket quiz + court-day picks */}
          <GearWidget />

          {/* Related */}
          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Keep learning</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/how-to-play" className="text-padel-green hover:underline">How to Play Padel</Link>
              <Link href="/blog/padel-vs-pickleball" className="text-padel-green hover:underline">Padel vs Pickleball</Link>
              <Link href="/get-started/glossary" className="text-padel-green hover:underline">Padel Glossary</Link>
              <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">Best Beginner Rackets (2026)</Link>
              <Link href="/search" className="text-padel-green hover:underline">Find Courts Near You</Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
