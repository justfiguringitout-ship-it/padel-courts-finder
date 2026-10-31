import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { GearWidget } from "@/components/GearWidget";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { getStateOfPadelStats } from "@/lib/state-of-padel-stats";
import { getStates } from "@/lib/site-structure";

const URL = "https://www.padelcourtsfinder.com/blog/padel-vs-pickleball";
const TITLE = "Padel vs Pickleball: Differences in Court, Rules & Cost";
const DESC =
  "Is padel the same as pickleball? No. Compare court size, walls, scoring, rackets, balls, cost, players and injuries side by side, plus where to play both in the US.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: "Padel vs Pickleball: What's the Difference?",
    description: DESC,
    url: URL,
    siteName: "Padel Courts Finder",
    type: "article",
    images: [{ url: "https://www.padelcourtsfinder.com/og/default.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel vs Pickleball: What's the Difference?",
    description: "Court size, walls, scoring, rackets, balls, cost, players and injuries side by side, plus where to play both in the US.",
  },
};

const isOpen = (status?: string) => status !== "coming_soon" && status !== "temporarily_closed";

/* Both courts drawn to the same scale, top view (15 px = 1 m) */
function CourtSizeDiagram() {
  const ink = "oklch(0.16 0.028 255)";
  // Padel: 10 m x 20 m, service lines 6.95 m from the net.
  // Pickleball: 6.10 m x 13.41 m, non-volley zone 2.13 m (7 ft) each side of the net.
  const s = 15;
  const pW = 10 * s, pH = 20 * s;
  const kW = 6.1 * s, kH = 13.41 * s, kitchen = 2.13 * s;
  const top = 20;
  const pX = 20, kX = 210;
  const kTop = top + (pH - kH) / 2;
  return (
    <figure className="bg-white border border-stone-200 rounded-xl p-6 my-8 text-center">
      <svg viewBox="0 0 340 370" className="mx-auto w-full max-w-md h-auto" role="img" aria-label="Padel court and pickleball court drawn to the same scale. The padel court is 10 by 20 meters and enclosed by walls. The pickleball court is 6.1 by 13.4 meters, open, with a 7-foot non-volley zone on each side of the net.">
        {/* Padel court; the thick outline stands for the walls */}
        <rect x={pX} y={top} width={pW} height={pH} rx="3" fill="#16A34A" fillOpacity="0.10" stroke="#16A34A" strokeWidth="4" />
        <line x1={pX - 4} y1={top + pH / 2} x2={pX + pW + 4} y2={top + pH / 2} stroke={ink} strokeWidth="2.5" strokeDasharray="5 4" />
        <line x1={pX} y1={top + pH / 2 - 6.95 * s} x2={pX + pW} y2={top + pH / 2 - 6.95 * s} stroke={ink} strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1={pX} y1={top + pH / 2 + 6.95 * s} x2={pX + pW} y2={top + pH / 2 + 6.95 * s} stroke={ink} strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1={pX + pW / 2} y1={top + pH / 2 - 6.95 * s} x2={pX + pW / 2} y2={top + pH / 2 + 6.95 * s} stroke={ink} strokeOpacity="0.45" strokeWidth="1.2" />
        <text x={pX + pW / 2} y={top + pH + 18} textAnchor="middle" fill={ink} fontSize="11" fontWeight="700">PADEL</text>
        <text x={pX + pW / 2} y={top + pH + 32} textAnchor="middle" fill={ink} fillOpacity="0.6" fontSize="10">20 x 10 m, walls in play</text>
        {/* Pickleball court, open */}
        <rect x={kX} y={kTop} width={kW} height={kH} rx="2" fill="#D97706" fillOpacity="0.10" stroke="#D97706" strokeWidth="1.5" />
        <rect x={kX} y={kTop + kH / 2 - kitchen} width={kW} height={kitchen * 2} fill="#D97706" fillOpacity="0.18" />
        <line x1={kX - 4} y1={kTop + kH / 2} x2={kX + kW + 4} y2={kTop + kH / 2} stroke={ink} strokeWidth="2.5" strokeDasharray="5 4" />
        <line x1={kX + kW / 2} y1={kTop} x2={kX + kW / 2} y2={kTop + kH / 2 - kitchen} stroke={ink} strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1={kX + kW / 2} y1={kTop + kH / 2 + kitchen} x2={kX + kW / 2} y2={kTop + kH} stroke={ink} strokeOpacity="0.45" strokeWidth="1.2" />
        <text x={kX + kW / 2} y={kTop + kH / 2 - kitchen / 2 + 3} textAnchor="middle" fill="#B45309" fontSize="8" fontWeight="700">KITCHEN</text>
        <text x={kX + kW / 2} y={top + pH + 18} textAnchor="middle" fill={ink} fontSize="11" fontWeight="700">PICKLEBALL</text>
        <text x={kX + kW / 2} y={top + pH + 32} textAnchor="middle" fill={ink} fillOpacity="0.6" fontSize="10">44 x 20 ft, open</text>
      </svg>
      <figcaption className="mt-4 text-sm text-stone-500">
        Drawn to the same scale. A padel court covers about 2,150 square feet inside its walls; a pickleball court covers
        880 square feet. The shaded band on the pickleball court is the non-volley zone, or kitchen.
      </figcaption>
    </figure>
  );
}

export default function PadelVsPickleballPage() {
  // Live figures from our directory, so these numbers never go stale.
  const clubs = getAllAdaptedCourts();
  const openClubs = clubs.filter((c) => isOpen(c.status));
  const padelCourtCount = openClubs.reduce((sum, c) => sum + (c.facility.totalCourts || 0), 0);
  const pricing = getStateOfPadelStats().pricing;
  const perPlayer = Math.round(pricing.median / 4);
  const bothSports = clubs
    .filter((c) => /pickle/i.test(c.name) && c.status !== "temporarily_closed")
    .sort((a, b) => a.address.stateCode.localeCompare(b.address.stateCode) || a.name.localeCompare(b.name));
  const topStates = getStates()
    .slice()
    .sort((a, b) => b.courtCount - a.courtCount)
    .slice(0, 8);

  const faqs = [
    {
      q: "Is padel the same as pickleball?",
      a: "No. They are different sports. Padel is played in doubles on a 20 x 10 meter court enclosed by glass walls that stay in play, with a solid perforated racket, a pressurized felt ball and tennis scoring. Pickleball is played singles or doubles on an open 44 x 20 foot court with a flat paddle, a plastic ball with holes, a 7-foot non-volley zone and games to 11.",
    },
    {
      q: "What is the difference between padel and pickleball?",
      a: "The biggest differences are the walls, the court and the ball. Padel's glass back and side walls are part of play, and pickleball has no walls. A padel court has about two and a half times the area of a pickleball court. Padel uses a pressurized ball much like a tennis ball; pickleball uses a light plastic ball with holes. Scoring differs too: padel copies tennis, and pickleball plays games to 11.",
    },
    {
      q: "What is the difference between a padel court and a pickleball court?",
      a: "A padel court is 20 x 10 meters (about 66 x 33 feet), fully enclosed, with walls 4 meters high at the ends (3 meters of glass or wall plus 1 meter of mesh), usually on artificial turf. A pickleball court is 44 x 20 feet, open on all sides, on a hard surface, with a 7-foot non-volley zone on each side of the net. You cannot play padel on a pickleball court.",
    },
    {
      q: "What is the difference between a padel ball and a pickleball?",
      a: "A padel ball is a pressurized rubber ball covered in felt, very close to a tennis ball and slightly smaller. A pickleball is a hard, light plastic ball with holes; balls with larger holes are customarily used indoors and smaller holes outdoors. The padel ball is heavier and faster, and it rebounds off the glass.",
    },
    {
      q: "Is padel harder than pickleball?",
      a: "Padel usually takes a little longer to learn because you have to read the ball off the glass walls. Pickleball is quicker to pick up because the court is small and the ball is slow. Both are easier to start than tennis, and in both, most beginners can rally in their first session.",
    },
    {
      q: "Which is more popular in the US, padel or pickleball?",
      a: "Pickleball, by a wide margin. The Sports & Fitness Industry Association counted 24.3 million Americans who played pickleball in 2025 and about 1.07 million who played padel. Worldwide, Playtomic's Global Padel Report 2026 counts about 19.4 million padel players.",
    },
    {
      q: "Can you play padel on a pickleball court?",
      a: "No. Padel needs a larger court enclosed by walls, because playing the ball off the glass is part of the game. Pickleball courts are open and much smaller. Padel is played on dedicated padel courts, which is why there are far fewer of them in the US.",
    },
    {
      q: "Is padel the same as paddle tennis or platform tennis?",
      a: "No. Platform tennis is an American sport played mostly outdoors in cold weather on a raised deck surrounded by wire screens, using a spongy rubber ball. POP tennis and beach tennis are different sports again. If you mean the doubles game played inside glass walls, that is padel.",
    },
  ];

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Padel vs Pickleball: What's the Difference?",
    "description": DESC,
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "datePublished": "2026-03-25T00:00:00Z",
    "dateModified": "2026-10-31T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": URL },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const link = "text-padel-green hover:underline";
  const cite = (n: number) => (
    <sup className="text-[10px] text-stone-400 ml-0.5">
      <a href={`#source-${n}`} className="hover:underline">[{n}]</a>
    </sup>
  );

  const rows: Array<[string, ReactNode, ReactNode]> = [
    ["Court size", "20 x 10 m (about 66 x 33 ft)", "44 x 20 ft (13.4 x 6.1 m)"],
    ["Walls", "Enclosed. Glass and mesh walls are in play", "None. The ball must land inside the lines"],
    ["Players", "Doubles (2 vs 2)", "Singles or doubles"],
    ["Surface", "Usually artificial turf with sand", "Hard court or indoor floor"],
    ["Racket or paddle", "Solid racket with holes and a foam core, max 45.5 cm long, wrist cord required", "Solid flat paddle, length plus width no more than 24 in"],
    ["Ball", "Pressurized felt ball, close to a tennis ball", "Hard plastic ball with holes"],
    ["Serve", "Underhand, bounced first, hit at or below the waist. Two attempts", "Underhand volley serve or drop serve. One attempt"],
    ["Net height", "88 cm (34.6 in) center, 92 cm at the posts", "34 in center, 36 in at the sidelines"],
    ["Volleys", "Allowed anywhere once the serve is returned", "Not allowed inside the 7-ft kitchen; two-bounce rule"],
    ["Scoring", "Tennis scoring: 15, 30, 40, game, sets to 6", "Games to 11, win by 2; traditionally only the serving side scores"],
    [
      "Cost to play",
      <span key="pc">Court rental, median ${pricing.median} per court-hour in our directory (about ${perPlayer} per player){cite(1)}</span>,
      "Free on many public park courts; clubs charge court fees or memberships",
    ],
    [
      "US players (2025)",
      <span key="pp">About 1.07 million{cite(2)}</span>,
      <span key="kp">24.3 million{cite(3)}</span>,
    ],
    [
      "US courts",
      <span key="pcc">{padelCourtCount.toLocaleString()} at the {openClubs.length} open clubs we list{cite(1)}</span>,
      <span key="kcc">About 68,000 to 70,000 at 16,000+ locations{cite(4)}</span>,
    ],
    ["Learning curve", "Easy to start; reading the glass takes a few sessions", "Easiest racket sport to start"],
    [
      "Common injuries",
      <span key="pi">Elbow, then knee, shoulder and lower back; mostly tendon and muscle{cite(5)}</span>,
      <span key="ki">Sprains, strains and fractures, mostly from falls; most ER cases are players 60+{cite(6)}</span>,
    ],
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">How-To Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Padel vs Pickleball: What&apos;s the Difference?
          </h1>
          <p className="text-lg text-stone-400 mt-3">Courts, rules, gear, cost, players and injuries, side by side, plus where to play both</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>Updated October 31, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>12 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Direct answer */}
          <section>
            <div className="bg-white border-l-4 border-padel-green rounded-r-xl p-5 md:p-6">
              <p className="text-stone-800 leading-relaxed">
                <strong>Padel and pickleball are different sports.</strong> Padel is played two against two on a
                20 x 10 meter court enclosed by glass walls that stay in play, with a solid perforated racket, a
                pressurized ball and tennis scoring. Pickleball is played singles or doubles on a smaller, open court
                with a flat paddle, a plastic ball with holes, a 7-foot no-volley &ldquo;kitchen&rdquo; and games to 11.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mt-3">
                What they share: an underhand serve, a solid paddle or racket with no strings, a net of almost the same
                height, and a reputation as two of the most social racket sports to start.
              </p>
            </div>
          </section>

          {/* Comparison table */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Padel vs pickleball at a glance</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white min-w-[620px]">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold w-1/4"><span className="sr-only">Compare</span></th>
                    <th className="p-3 font-semibold text-padel-green-dark">Padel</th>
                    <th className="p-3 font-semibold text-amber-700">Pickleball</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, padel, pickle]) => (
                    <tr key={label} className="border-t border-stone-100 align-top">
                      <td className="p-3 font-medium text-stone-800">{label}</td>
                      <td className="p-3 text-stone-600">{padel}</td>
                      <td className="p-3 text-stone-600">{pickle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone-500 mt-3">
              Rules from the International Padel Federation&apos;s 2026 Rules of Padel and the 2026 USA Pickleball Official
              Rulebook. Numbered sources are listed at the end of the article.
            </p>
          </section>

          {/* Courts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Padel court vs pickleball court</h2>
            <p className="text-stone-700 leading-relaxed">
              The court is the biggest difference, and it explains most of the others. A padel court is 20 meters long and
              10 meters wide, measured inside the walls. The ends are 4 meters high: 3 meters of glass or solid wall with
              1 meter of metal mesh on top. The sides are glass at each end and mesh in the middle. When the ball bounces on
              your side and then hits the glass, it is still in play, so you can let it come off the wall and hit it back.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              A pickleball court is 44 feet long and 20 feet wide, the same footprint as a badminton doubles court, with
              nothing around it. Seven feet on each side of the net is the non-volley zone, called the kitchen. Because it
              needs only lines and a net, pickleball can be painted onto tennis courts, gym floors and parking lots.
              Padel needs a purpose-built court, which is why the US has far fewer of them; our guide to{" "}
              <Link href="/buy-a-padel-court" className={link}>buying a padel court</Link> covers what goes into one.
            </p>
            <CourtSizeDiagram />
          </section>

          {/* Equipment */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Padel racket vs pickleball paddle, and the balls</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">Padel</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The racket is solid, with no strings, a foam core and a face drilled with holes. FIP rules cap it at
                  45.5 cm long, 26 cm wide and 38 mm thick, and a wrist cord is mandatory. Shapes range from round
                  (control) to diamond (power). The ball is a pressurized felt ball that looks like a tennis ball and is
                  slightly smaller.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">Pickleball</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The paddle is flat and solid, usually graphite, carbon fiber or composite. Its length plus width
                  can&apos;t exceed 24 inches, and it can&apos;t be longer than 17 inches. The ball is hard, light plastic
                  with holes, and it moves through the air more slowly than a padel ball.
                </p>
              </div>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              The gear doesn&apos;t cross over between the sports. If you are buying your first padel racket, start with our{" "}
              <Link href="/blog/best-padel-rackets-beginners" className={link}>best padel rackets for beginners</Link>. If
              you come from tennis, see <Link href="/blog/best-padel-rackets-tennis-players" className={link}>rackets for tennis players</Link>,
              and for balls, <Link href="/blog/best-padel-balls" className={link}>the best padel balls</Link>.
            </p>
          </section>

          {/* Rules */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How the rules differ</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">The serve</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Both serves are underhand and diagonal. In padel you bounce the ball behind the service line, hit it at or
                  below waist height, and land it in the opposite service box. You get two attempts, as in tennis. In
                  pickleball you hit a volley serve with an upward swing below the waist, or a drop serve after letting the
                  ball bounce, and it must clear the kitchen. You get one attempt.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">Bounces and volleys</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Pickleball has the two-bounce rule: the serve and the return must each bounce before anyone volleys, and you
                  can never volley while standing in the kitchen. Padel has neither rule. The receiver lets the serve bounce,
                  and from the return onward anyone can volley from anywhere, which is why padel players rush the net.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">The walls</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  In padel the ball must bounce on the opponents&apos; side first. After that bounce it can hit the glass and
                  still be played. You can also hit the ball into your own glass to send it back over the net. Pickleball has
                  no walls, so a ball that lands outside the lines is out.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">Scoring</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Padel uses tennis scoring: 15, 30, 40, game. Six games with a two-game lead wins a set, usually best of
                  three. At 40-40 the 2026 FIP rules allow advantage, the golden point or the star point. Pickleball games go
                  to 11, win by 2, and in traditional scoring only the serving side can win a point. USA Pickleball also
                  allows rally scoring as a provisional option.
                </p>
              </div>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              For the full padel rulebook in plain English, see our <Link href="/rules" className={link}>padel rules guide</Link>.
              For a shorter walkthrough of your first match, read <Link href="/how-to-play" className={link}>how to play padel</Link>,
              and look up unfamiliar terms in the <Link href="/get-started/glossary" className={link}>padel glossary</Link>.
            </p>
          </section>

          {/* Difficulty and fitness */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Is padel harder than pickleball?</h2>
            <p className="text-stone-700 leading-relaxed">
              Pickleball is easier on the first day. The court is small, the ball is slow, and the basic rules are short.
              That low barrier is a big part of why it spread so fast.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Padel is also easy to start, and the walls help beginners: balls that would be winners in tennis come back off
              the glass, so rallies last longer. The harder part is learning when to let the ball come off the wall and where
              to stand. Those two skills, covered in our{" "}
              <Link href="/blog/padel-positioning-guide" className={link}>padel positioning guide</Link>, separate a
              first-month player from a regular. Shots like the{" "}
              <Link href="/blog/padel-bandeja-explained" className={link}>bandeja</Link>, padel&apos;s controlled overhead,
              exist because of the walls and take longer to learn.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Physically, padel asks for more movement. The court is about two and a half times larger, the ball is faster,
              and points often involve running back to the glass and forward to the net. Pickleball rallies at the kitchen
              line involve less running, though competitive pickleball is still demanding.
            </p>
          </section>

          {/* Injuries */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Injuries in padel and pickleball</h2>
            <p className="text-stone-700 leading-relaxed">
              The research on the two sports measures different things, so the numbers can&apos;t be compared directly. Here
              is what each body of research shows:
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Padel:</strong> a 2023 systematic review in <em>BMJ Open Sport &amp; Exercise Medicine</em> found about
                3 injuries per 1,000 hours of training and 8 per 1,000 matches. The elbow was the most common site, followed by
                the knee, shoulder and lower back, and most injuries were to tendons and muscles.{cite(5)}
              </li>
              <li>
                <strong>Pickleball:</strong> a study of US emergency room data from 2010 to 2019 found that over 85% of
                pickleball injury cases involved players aged 60 or older. Strains and sprains, fractures, and bruises were the
                most common diagnoses, and about two in three injuries came from slips, trips and falls.{cite(6)}
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              In both sports, warming up and building up gradually help. Our physical therapist guest post on{" "}
              <Link href="/blog/padel-injuries-prevention-tips" className={link}>preventing padel injuries</Link> covers the
              elbow, shoulder and back, and the{" "}
              <Link href="/blog/best-padel-rackets-tennis-elbow" className={link}>best rackets for tennis elbow</Link> guide helps
              if your arm is already sore.
            </p>
          </section>

          {/* Cost */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cost to play</h2>
            <p className="text-stone-700 leading-relaxed">
              Pickleball is cheaper to start. Many cities have free public courts, and a beginner paddle is inexpensive.
              Indoor pickleball clubs charge court fees or memberships.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Padel is almost always played at a club, so you pay for court time. Across the {pricing.sample} clubs in our
              directory that publish a court price, the median is <strong>${pricing.median} per court-hour</strong>, and the
              middle half of clubs charge between ${pricing.p25} and ${pricing.p75}. Split four ways, the median works out to
              about ${perPlayer} per player per hour. Many clubs rent rackets and offer memberships that lower the hourly rate;
              club listings in <Link href="/search" className={link}>our court search</Link> show published prices where we
              have them.
            </p>
          </section>

          {/* Popularity */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How many people play each sport</h2>
            <p className="text-stone-700 leading-relaxed">
              In the US, pickleball is far bigger. The Sports &amp; Fitness Industry Association counted{" "}
              <strong>24.3 million Americans</strong> who played pickleball in 2025.{cite(3)} The same research tracked padel for
              the first time and counted about <strong>1.07 million</strong> players, around 238,000 of whom played eight or
              more times.{cite(2)}
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Worldwide, Playtomic&apos;s Global Padel Report 2026 counts roughly 19.4 million padel players and about 58,300
              courts.{cite(7)} Our <Link href="/state-of-us-padel-2026" className={link}>State of US Padel 2026</Link> report
              tracks where American clubs are opening.
            </p>
          </section>

          {/* Who should play which */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Which should you play?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border-2 border-padel-green/30 rounded-xl p-5">
                <h3 className="font-bold text-padel-green-dark mb-3">Choose padel if you&hellip;</h3>
                <ul className="space-y-2 text-sm text-stone-600 list-disc pl-5">
                  <li>Played tennis or squash and want a game that is quicker to enjoy</li>
                  <li>Like long rallies and a real workout</li>
                  <li>Enjoy doubles strategy and teamwork</li>
                  <li>Have a padel club within reach and don&apos;t mind paying for court time</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-700 mb-3">Choose pickleball if you&hellip;</h3>
                <ul className="space-y-2 text-sm text-stone-600 list-disc pl-5">
                  <li>Want the quickest, cheapest start</li>
                  <li>Prefer less running and a gentler pace</li>
                  <li>Want to play singles sometimes</li>
                  <li>Have free public courts nearby</li>
                </ul>
              </div>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Plenty of people play both. Soft hands at the net, patience, and placing the ball carry over from one to the
              other. Distance usually decides it, so check what is actually near you first.
            </p>
          </section>

          {/* Where to play both */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Where to play padel and pickleball in the US</h2>
            <p className="text-stone-700 leading-relaxed">
              A growing number of clubs build both sports under one roof. These clubs in our directory carry both sports in
              their name; open each listing for courts, prices and booking links.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {bothSports.map((c) => (
                <li key={c.slug} className="bg-white border border-stone-200 rounded-lg p-4">
                  <Link href={`/courts/${c.slug}`} className="font-semibold text-foreground hover:text-padel-green">
                    {c.name}
                  </Link>
                  <div className="text-sm text-stone-500">
                    {c.address.city}, {c.address.stateCode}
                    {c.status === "coming_soon" && <span className="ml-2 text-amber-700 font-medium">Coming soon</span>}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-stone-700 leading-relaxed mt-5">
              Many other padel clubs also have pickleball courts without saying so in their name. To see every padel club near
              you, use <Link href="/search" className={link}>our court search</Link> or browse the states with the most clubs:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {topStates.map((st) => (
                <Link key={st.slug} href={`/${st.slug}`} className="text-sm bg-white border border-stone-200 rounded-full px-3 py-1 text-stone-700 hover:border-padel-green hover:text-padel-green">
                  Padel in {st.name} ({st.courtCount})
                </Link>
              ))}
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              First time at a padel club? Our <Link href="/blog/how-to-choose-padel-club" className={link}>guide to choosing a padel club</Link>{" "}
              and <Link href="/padel-lessons" className={link}>padel lessons</Link> page will help you book the right session.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sources */}
          <section className="text-xs text-stone-500 leading-relaxed">
            <h2 className="text-sm font-semibold text-stone-600 mb-2">Sources</h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li id="source-1">
                Padel Courts Finder directory, computed live from our club listings: open clubs and their published court
                counts, and court-hour prices from the {pricing.sample} clubs that publish one.
              </li>
              <li id="source-2">
                Sports &amp; Fitness Industry Association, &ldquo;What Is Padel?&rdquo; (2026 Topline Participation Report data for 2025).{" "}
                <a href="https://sfia.org/resources/what-is-padel/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">sfia.org/resources/what-is-padel</a>
              </li>
              <li id="source-3">
                Sports &amp; Fitness Industry Association, &ldquo;U.S. Pickleball Participation Statistics&rdquo; (2025 data).{" "}
                <a href="https://sfia.org/research/u-s-pickleball-participation/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">sfia.org/research/u-s-pickleball-participation</a>
              </li>
              <li id="source-4">
                Pickleheads, &ldquo;Pickleball Statistics&rdquo; (updated February 2025): 68,458 courts in its database, over 70,000
                including tennis courts with temporary lines, and over 16,210 places to play.{" "}
                <a href="https://www.pickleheads.com/blog/pickleball-statistics" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">pickleheads.com/blog/pickleball-statistics</a>
              </li>
              <li id="source-5">
                Dahmen, J., et al. (2023). &ldquo;Incidence, prevalence and nature of injuries in padel: a systematic review.&rdquo;{" "}
                <em>BMJ Open Sport &amp; Exercise Medicine</em>, 9(2), e001607.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37337550/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">pubmed.ncbi.nlm.nih.gov/37337550</a>
              </li>
              <li id="source-6">
                Weiss, H., Dougherty, J., &amp; DiMaggio, C. (2021). &ldquo;Non-fatal senior pickleball and tennis-related injuries
                treated in United States emergency departments, 2010 to 2019.&rdquo; <em>Injury Epidemiology</em>, 8, 34.{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8091689/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">pmc.ncbi.nlm.nih.gov/articles/PMC8091689</a>
              </li>
              <li id="source-7">
                Playtomic and PwC Strategy&amp;, Global Padel Report 2026.{" "}
                <a href="https://playtomic.com/global-padel-report" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">playtomic.com/global-padel-report</a>
              </li>
              <li>
                International Padel Federation, Rules of Padel (in force from January 1, 2026).{" "}
                <a href="https://www.padelfip.com/wp-content/uploads/2025/12/FIP_Rules-of-Padel.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">padelfip.com</a>
              </li>
              <li>
                USA Pickleball, 2026 Official Rulebook.{" "}
                <a href="https://usapickleball.org/what-is-pickleball/official-rules/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">usapickleball.org</a>
              </li>
            </ol>
          </section>

          <GearWidget />
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to try padel?</h2>
            <p className="text-stone-400 mb-6">Find a court, learn the rules, and get your first racket.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find Courts Near You</div>
                <p className="text-stone-400 text-sm mt-1">{openClubs.length} open padel clubs across the US</p>
              </Link>
              <Link href="/how-to-play" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">How to Play Padel</div>
                <p className="text-stone-400 text-sm mt-1">Your first match, step by step</p>
              </Link>
              <Link href="/rules" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Rules in Plain English</div>
                <p className="text-stone-400 text-sm mt-1">Scoring, the serve, and the walls</p>
              </Link>
              <Link href="/blog/best-padel-rackets-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Beginner Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Our tested picks for your first racket</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
