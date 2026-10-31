import Link from "next/link";
import type { Metadata } from "next";

const URL = "https://www.padelcourtsfinder.com/blog/padel-scoring-explained";
const TITLE = "How Padel Scoring Works: Points, Golden Point, Star Point and Tiebreaks";
const META_TITLE = "How Padel Scoring Works: Golden Point, Star Point, Tiebreaks";
const DESC =
  "Padel scoring in plain English: 15-30-40, deuce, golden point vs star point, sets, tiebreaks and super tiebreaks, who serves when, and a point-by-point worked example.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: META_TITLE,
    description: DESC,
    url: URL,
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: "15-30-40, golden point vs star point, tiebreaks, who serves when, and a worked example game.",
  },
};

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "How do you keep score in padel?",
    a: "Padel uses tennis scoring. Points go 0 (love), 15, 30, 40 and game, with the serving pair's score called first. Six games with a two-game lead win a set, a tiebreak is played at 6-6, and a match is usually the best of three sets. The only real choice is what happens at 40-40: advantage, golden point or star point.",
  },
  {
    q: "What is the golden point in padel?",
    a: "The golden point is a single deciding point played the first time a game reaches 40-40. Whoever wins it wins the game. The receiving pair chooses whether to receive on the right or the left, and they cannot swap positions for that point. In mixed doubles, the player who receives is the same sex as the server.",
  },
  {
    q: "What is the star point in padel?",
    a: "The star point is a scoring method the International Padel Federation added to its rules for 2026. At 40-40 you play normal advantage, and if the game comes back to deuce a second time you play advantage again. If it reaches deuce a third time, one deciding point, the star point, settles the game. The pro tours and USPA-sanctioned tournaments use it.",
  },
  {
    q: "Is padel scoring the same as tennis?",
    a: "Almost. Points, games, sets and tiebreaks work the way they do in tennis. The differences are at 40-40, where padel also allows the golden point and the star point, and in the shorter formats clubs use, such as a super tiebreak to 10 in place of a third set.",
  },
  {
    q: "How many points is a padel tiebreak?",
    a: "A regular tiebreak is first to 7 points with a two-point lead, and the set goes down as 7-6. A super tiebreak, used in place of a deciding third set, is first to 10 points with a two-point lead.",
  },
  {
    q: "Who chooses the side on a golden point or star point?",
    a: "The receiving pair. They decide whether the serve goes to the player on the right or the player on the left, and once they choose they cannot change positions for that point.",
  },
  {
    q: "When do you change ends in padel?",
    a: "After the first game of each set, then after every odd-numbered game: the 1st, 3rd, 5th and so on. In a tiebreak you change ends after every six points.",
  },
];

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: "2026-10-31T00:00:00Z",
  dateModified: "2026-10-31T00:00:00Z",
  author: { "@type": "Organization", name: "Padel Courts Finder", url: "https://www.padelcourtsfinder.com" },
  publisher: {
    "@type": "Organization",
    name: "Padel Courts Finder",
    logo: { "@type": "ImageObject", url: "https://www.padelcourtsfinder.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const link = "text-padel-green hover:underline";

const quickRef: Array<[string, string]> = [
  ["Points", "0 (love), 15, 30, 40, game. The serving pair's score is called first."],
  ["At 40-40", "Advantage, golden point or star point, depending on the club or event."],
  ["Set", "First to 6 games with a two-game lead. 7-5 is possible; at 6-6 play a tiebreak."],
  ["Tiebreak", "First to 7 points, win by two. The set is recorded as 7-6."],
  ["Match", "Best of three sets. Many events replace the third set with a super tiebreak to 10."],
  ["Change ends", "After games 1, 3, 5 and every odd game in a set; every 6 points in a tiebreak."],
];

const methods = [
  {
    name: "Advantage",
    how: "Win the point after deuce for advantage, then the next one for the game. Lose it and you are back at deuce, as many times as it takes.",
    longest: "No limit",
    who: "Traditional tennis method. Still Option 1 in the FIP rulebook.",
  },
  {
    name: "Golden point",
    how: "At the first deuce, one deciding point wins the game. The receiving pair chooses which side receives.",
    longest: "7 points",
    who: "Common in social and league play. Ask before you start.",
  },
  {
    name: "Star point",
    how: "Play advantage up to twice. If the game reaches deuce a third time, one deciding point (the star point) wins it.",
    longest: "11 points",
    who: "Pro tours from 2026 and all USPA-sanctioned tournaments.",
  },
];

// Worked example: Ana & Ben (serving pair) vs Cleo & Dev. Ben serves this game.
const exampleGame: Array<[string, string, string, string]> = [
  ["1", "Right", "Ana & Ben", "15-love"],
  ["2", "Left", "Cleo & Dev", "15-all"],
  ["3", "Right", "Cleo & Dev", "15-30"],
  ["4", "Left", "Ana & Ben", "30-all"],
  ["5", "Right", "Ana & Ben", "40-30 (game point)"],
  ["6", "Left", "Cleo & Dev", "Deuce 1"],
  ["7", "Right", "Cleo & Dev", "Advantage 1, receivers"],
  ["8", "Left", "Ana & Ben", "Deuce 2"],
  ["9", "Right", "Ana & Ben", "Advantage 2, servers"],
  ["10", "Left", "Cleo & Dev", "Deuce 3: star point next"],
  ["11", "Receivers choose", "Ana & Ben", "Game, Ana & Ben"],
];

const tiebreakServes: Array<[string, string, string]> = [
  ["1", "Ben (whose turn it is)", "Right"],
  ["2-3", "Cleo", "Left, then right"],
  ["4-5", "Ana", "Left, then right"],
  ["6-7", "Dev", "Left, then right"],
  ["8-9", "Ben", "Left, then right"],
];

const sources = [
  { label: "International Padel Federation, Rules of Padel (applies from January 1, 2026), Rules 1 to 6", href: "https://www.padelfip.com/wp-content/uploads/2025/12/FIP_Rules-of-Padel.pdf" },
  { label: "International Padel Federation, “Introducing the Star Point” press release (December 18, 2025)", href: "https://www.padelfip.com/wp-content/uploads/2025/12/18-december_Star-Point_ENG.pdf" },
  { label: "United States Padel Association, Rules and Regulations, Edition 8.11 (June 1, 2026), section 3.6 Scoring Formats", href: "https://padelusa.org/wp-content/uploads/2026/06/USPA-Rules-and-Regulations.-June-1-2026.docx.pdf" },
];

export default function PadelScoringExplainedPage() {
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
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">How-To</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            How Padel Scoring Works: Points, Golden Point, Star Point and Tiebreaks
          </h1>
          <p className="text-lg text-stone-400 mt-3">Every scoring rule you will meet on a US court, with a full game scored point by point</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>October 31, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>9 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              If you know how tennis is scored, you already know most of padel scoring. Points go 15, 30, 40 and game,
              six games make a set, and a match is usually the best of three sets. The parts that trip up new players
              are what happens at <strong>40-40</strong>, who serves in what order, and the shorter formats that US
              clubs and tournaments use.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              This guide goes through all of it in detail, checked against the International Padel Federation (FIP)
              rulebook that applies from January 1, 2026, and the United States Padel Association (USPA) tournament
              rules. For the rest of the rules (the serve, the walls, lets), see our{" "}
              <Link href="/rules" className={link}>complete padel rules guide</Link>. If you have never played, start
              with <Link href="/how-to-play" className={link}>how to play padel</Link>.
            </p>
          </section>

          {/* Quick reference */}
          <section>
            <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
              <div className="bg-court px-5 py-3">
                <h2 className="text-lg font-bold text-white">Padel scoring at a glance</h2>
              </div>
              <dl className="divide-y divide-stone-100">
                {quickRef.map(([k, v]) => (
                  <div key={k} className="grid gap-1 px-5 py-3 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-padel-green-dark">{k}</dt>
                    <dd className="text-sm leading-relaxed text-stone-700">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Points in a game */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Points in a game: love, 15, 30, 40</h2>
            <p className="text-stone-700 leading-relaxed">
              A game is won by the first pair to win four points, as long as they are two points ahead. The points have
              names instead of numbers:
            </p>
            <ul className="mt-4 space-y-2 text-stone-700 leading-relaxed list-disc pl-5">
              <li><strong>0 points</strong> is &ldquo;love&rdquo;</li>
              <li><strong>1 point</strong> is &ldquo;15&rdquo;</li>
              <li><strong>2 points</strong> is &ldquo;30&rdquo;</li>
              <li><strong>3 points</strong> is &ldquo;40&rdquo;</li>
              <li><strong>4 points</strong> (with a two-point lead) is &ldquo;game&rdquo;</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              The server calls the score before each point, and the <strong>serving pair&apos;s score always comes
              first</strong>. &ldquo;30-15&rdquo; means the servers have two points and the receivers have one;
              &ldquo;15-30&rdquo; means the reverse. Equal scores below 40 are called &ldquo;all&rdquo;, so 15-15 is
              &ldquo;15-all&rdquo;. When both pairs reach 40, the score is <strong>deuce</strong>.
            </p>
          </section>

          {/* At 40-40 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">At 40-40: advantage, golden point or star point</h2>
            <p className="text-stone-700 leading-relaxed">
              The FIP rulebook lists three ways to finish a game from deuce. They are all legal, and which one you play
              depends on your club, league or tournament. Agree on one before the first ball, because arguing about it
              at deuce is a bad way to decide a game.
            </p>
            <div className="mt-5 overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Method</th>
                    <th className="p-3 font-semibold">How it works</th>
                    <th className="p-3 font-semibold">Longest possible game</th>
                    <th className="p-3 font-semibold">Where you see it</th>
                  </tr>
                </thead>
                <tbody>
                  {methods.map((m) => (
                    <tr key={m.name} className="border-t border-stone-100 align-top">
                      <td className="p-3 font-medium">{m.name}</td>
                      <td className="p-3">{m.how}</td>
                      <td className="p-3 whitespace-nowrap">{m.longest}</td>
                      <td className="p-3">{m.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Advantage</h3>
            <p className="text-stone-700 leading-relaxed">
              This is the method from tennis. The pair that wins the point after deuce has the advantage
              (&ldquo;advantage in&rdquo; if it is the servers, &ldquo;advantage out&rdquo; if it is the receivers). Win
              the next point and you win the game; lose it and the score goes back to deuce. A game can, in theory, go on
              forever, which is why many clubs prefer one of the other two methods.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Golden point (punto de oro)</h3>
            <p className="text-stone-700 leading-relaxed">
              Also called &ldquo;no advantage&rdquo;. The first time the game reaches deuce, one point decides it. Before
              that point, the <strong>receiving pair chooses</strong> whether to receive on the right side or the left
              side of the court, and once they choose they cannot swap positions. In mixed doubles, the receiver must be
              the same sex as the server. Golden point keeps games short, which helps when you have the court booked for
              an hour or 90 minutes.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Star point (new for 2026)</h3>
            <p className="text-stone-700 leading-relaxed">
              The star point is a middle ground between the other two. The FIP General Assembly approved it unanimously
              on November 28, 2025, and it went into the 2026 rulebook as Option 2. Here is how it plays out, using
              the calls the rulebook prescribes:
            </p>
            <ol className="mt-4 space-y-3 text-stone-700 leading-relaxed list-decimal pl-5">
              <li>
                <strong>Deuce 1.</strong> Both pairs reach 40. Play the next point for <strong>advantage 1</strong>.
                The pair with the advantage wins the game if they win the following point.
              </li>
              <li>
                <strong>Deuce 2.</strong> If the advantage is lost, it is deuce again. Play for{" "}
                <strong>advantage 2</strong>, which works the same way.
              </li>
              <li>
                <strong>Deuce 3 and the star point.</strong> If the second advantage is also lost, the next point is the
                star point. The receiving pair chooses the side, nobody may swap positions, and whoever wins the point
                wins the game.
              </li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              The FIP&apos;s stated aim is to limit how long a game can run while keeping some of the back-and-forth of
              advantage. A star point game can last at most 11 points, against 7 for golden point and no limit for advantage. The FIP introduced it in
              January 2026 at the first CUPRA FIP Tour event in Melbourne, and it debuted on the Premier Padel tour at
              the Riyadh P1 in February 2026. In the US, the USPA uses star point in all sanctioned tournaments and
              matches.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-5 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">Which should your group use?</strong> If you are playing a USPA event,
              star point is the rule. For a booked court with friends, golden point fits the most games into your time,
              and star point is a good compromise if you want deuce to feel like deuce. Whatever you pick, say it out
              loud before the warm-up ends.
            </p>
          </section>

          {/* Worked example */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">A worked example: one game, point by point</h2>
            <p className="text-stone-700 leading-relaxed">
              Ana and Ben are playing Cleo and Dev, and it is Ben&apos;s turn to serve. The first point of every game is
              served from the right side, and the server switches sides after every point. Here is a game that goes all
              the way to a star point:
            </p>
            <div className="mt-5 overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Point</th>
                    <th className="p-3 font-semibold">Ben serves from</th>
                    <th className="p-3 font-semibold">Point won by</th>
                    <th className="p-3 font-semibold">Score called</th>
                  </tr>
                </thead>
                <tbody>
                  {exampleGame.map(([n, side, winner, score]) => (
                    <tr key={n} className="border-t border-stone-100">
                      <td className="p-3 tabular-nums">{n}</td>
                      <td className="p-3">{side}</td>
                      <td className="p-3">{winner}</td>
                      <td className="p-3 font-medium">{score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              The same game under the other two methods:
            </p>
            <ul className="mt-3 space-y-2 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Golden point:</strong> point 7 would be the deciding point. Cleo and Dev pick who receives, and
                because they won it, the game ends 7 points in, with Cleo and Dev taking it.
              </li>
              <li>
                <strong>Advantage:</strong> after point 10 the score is simply deuce again, and play continues until one
                pair wins two points in a row.
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Ana and Ben win the game, and the next game is served by a player from Cleo and Dev&apos;s side. If this was the first game of the set, both pairs also change ends.
            </p>
          </section>

          {/* Sets and matches */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Sets and matches</h2>
            <ul className="space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>A set</strong> goes to the first pair to win six games with at least a two-game lead. At 5-5 you
                play on, so a set can finish 7-5.
              </li>
              <li>
                <strong>At 6-6</strong> you play a tiebreak, and the winner takes the set 7-6.
              </li>
              <li>
                <strong>A match</strong> is the best of three sets. The FIP rules let organizers announce in advance that
                a third set will be played without a tiebreak, in which case it continues until one pair is two games
                ahead.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Shorter formats</h3>
            <p className="text-stone-700 leading-relaxed">
              The FIP rulebook also allows three alternative formats, and you will see all of them in US club and
              tournament play:
            </p>
            <ul className="mt-3 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Four-game sets (mini sets).</strong> First to four games with a two-game lead, and a tiebreak at
                4-4.
              </li>
              <li>
                <strong>Match tiebreak to 7.</strong> At one set all, a single tiebreak to 7 (win by two) replaces the
                third set.
              </li>
              <li>
                <strong>Super tiebreak to 10.</strong> At one set all, a tiebreak to 10 (win by two) replaces the third
                set. A final score written as 6-4, 3-6, 10-8 means the match was decided this way.
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              In USPA tournaments, the main draw of Division 1 at the larger events (USPA 2000, 1000, 750 and 500) plays
              the best of three tiebreak sets. Divisions 2 to 4, all consolation draws, and every match at USPA 250 and
              100 events play two tiebreak sets and a super tiebreak to 10 in place of the third set. Every tiebreak is
              won by two points; there is no sudden-death point.
            </p>
          </section>

          {/* Tiebreak */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How a padel tiebreak works</h2>
            <p className="text-stone-700 leading-relaxed">
              In a tiebreak the points are counted 0, 1, 2, 3 and so on. The first pair to 7 points with a two-point
              lead wins the tiebreak and the set, and if it reaches 6-6 you keep going until someone is two ahead. The
              serving order is where people get lost:
            </p>
            <ol className="mt-4 space-y-3 text-stone-700 leading-relaxed list-decimal pl-5">
              <li>
                The player whose turn it is to serve (following the set&apos;s rotation) serves <strong>one point</strong>,
                from the right.
              </li>
              <li>
                The next server in the rotation, from the other pair, serves <strong>two points</strong>, starting from
                the left.
              </li>
              <li>
                From then on, each player serves two points in turn, always left first, then right, keeping the same
                order as the set.
              </li>
              <li>
                Pairs <strong>change ends after every six points</strong> (at 3-3, 6-0, 5-1 and so on, whenever the
                total is a multiple of six), with only a short pause.
              </li>
              <li>
                The next set is started by the pair that did <strong>not</strong> serve first in the tiebreak.
              </li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              Continuing the example, if the set reaches 6-6 and it is Ben&apos;s turn to serve, the tiebreak runs like
              this:
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Tiebreak points</th>
                    <th className="p-3 font-semibold">Server</th>
                    <th className="p-3 font-semibold">Serves from</th>
                  </tr>
                </thead>
                <tbody>
                  {tiebreakServes.map(([pts, server, side]) => (
                    <tr key={pts} className="border-t border-stone-100">
                      <td className="p-3 tabular-nums">{pts}</td>
                      <td className="p-3">{server}</td>
                      <td className="p-3">{side}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-stone-700 leading-relaxed mt-4">
              A match tiebreak or super tiebreak uses the same rotation; only the target changes, to 7 or 10 points.
            </p>
          </section>

          {/* Who serves when */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who serves when</h2>
            <p className="text-stone-700 leading-relaxed">
              Serving rotates between the pairs every game and between partners every other game, so all four players
              serve once in every four games.
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>The coin toss.</strong> The pair that wins the toss chooses to serve or receive first (the other
                pair then picks the end), or chooses the end (the other pair then picks serve or receive), or asks the
                opponents to choose first.
              </li>
              <li>
                <strong>The order.</strong> At the start of each set, each pair decides which partner serves first, and
                that order holds for the whole set. If Ben serves game 1 and Cleo game 2, then Ana serves game 3 and Dev
                game 4, and the cycle repeats.
              </li>
              <li>
                <strong>The receivers.</strong> In the first game they receive in a set, the receiving pair decides who
                takes the first point. That player receives the first point of every game they receive for the rest of
                the set, and partners alternate from there.
              </li>
              <li>
                <strong>Sides.</strong> Every game starts with a serve from the right, then alternates left and right
                after each point. On a golden point or star point the receivers choose instead.
              </li>
              <li>
                <strong>Two serves per point.</strong> A fault on the first serve gives you a second; two faults lose the
                point. The serve itself (underhand, below the waist, diagonal) is covered in the{" "}
                <Link href="/rules#serve" className={link}>serve rules</Link>.
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              If someone serves out of turn, the correct player takes over as soon as anyone notices. Points already
              played stand. If a whole game has finished before the mistake is spotted, keep the new order until the end
              of the set.
            </p>
          </section>

          {/* Changing ends */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changing ends</h2>
            <p className="text-stone-700 leading-relaxed">
              Pairs switch ends after the 1st, 3rd and every following odd-numbered game of each set, so an easy check is
              &ldquo;change when the game total in the set is odd&rdquo;. That evens out sun, wind and lighting on
              outdoor courts. In tournament play the FIP allows up to 90 seconds at a change of ends, except after the
              first game of a set, when you change straight away. Between sets you get up to 120 seconds. In a
              tiebreak you change every six points with only a short pause. If you forget to change, fix it as soon as you
              notice; the points already played still count.
            </p>
          </section>

          {/* Club formats */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Social formats at US clubs: Americano, Mexicano and round robins</h2>
            <p className="text-stone-700 leading-relaxed">
              Many clubs run social events where the scoring changes completely. None of these are FIP rules, so the
              details vary by club and by the app running the event. The common versions work like this:
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Americano.</strong> You switch partners every round so that you play with as many people as
                possible. Each match is played to a fixed total of points (16, 21, 24 and 32 are typical), every single
                point counts, and there is no 15-30-40 and no deuce. The serve usually changes hands every four points.
                Each player adds the points their team won to their personal total, and the highest individual total at
                the end wins.
              </li>
              <li>
                <strong>Mexicano.</strong> Scored like an Americano, but after the first round the pairings come from the
                leaderboard, so players with similar totals end up on the same court. It keeps matches closer as the
                event goes on.
              </li>
              <li>
                <strong>Round robins and leagues.</strong> These often use golden point and short sets so every match
                fits in a time slot. Ask the organizer how many games or minutes each match lasts and how ties are
                broken.
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Social events are the easiest way into the local scene. Our{" "}
              <Link href="/get-started/glossary#americano-format" className={link}>glossary</Link> has the other terms
              you will hear, and the <Link href="/search" className={link}>court search</Link> will show you the clubs
              near you.
            </p>
          </section>

          {/* Common mistakes */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Scoring mistakes beginners make</h2>
            <ol className="space-y-3 text-stone-700 leading-relaxed list-decimal pl-5">
              <li>
                <strong>Calling your own score first when you are receiving.</strong> The serving pair&apos;s score always
                comes first, whoever is calling it.
              </li>
              <li>
                <strong>Not agreeing on the 40-40 method.</strong> Decide on advantage, golden point or star point before
                you start.
              </li>
              <li>
                <strong>Swapping receivers on the deciding point.</strong> The receivers choose a side, and then the
                player on that side has to take the serve.
              </li>
              <li>
                <strong>Giving the first tiebreak server two points.</strong> The first server gets one point only, from
                the right.
              </li>
              <li>
                <strong>Forgetting to change ends.</strong> After game 1, game 3 and every odd game. If in doubt, add up
                the games in the set.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
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
          <section>
            <p className="text-sm leading-relaxed text-stone-500">
              <span className="font-semibold text-stone-600">Sources: </span>
              {sources.map((s, i) => (
                <span key={s.href}>
                  <a href={s.href} className="underline decoration-stone-300 underline-offset-2 hover:text-padel-green-dark" rel="noopener">
                    {s.label}
                  </a>
                  {i < sources.length - 1 ? "; " : "."}
                </span>
              ))}
            </p>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/rules" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Rules, Explained</div>
                <p className="text-stone-400 text-sm mt-1">The serve, the walls, lets and every edge case</p>
              </Link>
              <Link href="/blog/padel-court-dimensions" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Court Dimensions</div>
                <p className="text-stone-400 text-sm mt-1">Every measurement in feet and meters</p>
              </Link>
              <Link href="/blog/padel-positioning-guide" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Positioning 101</div>
                <p className="text-stone-400 text-sm mt-1">Where to stand, and why the net wins</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a Court Near You</div>
                <p className="text-stone-400 text-sm mt-1">Search padel clubs across the US</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
