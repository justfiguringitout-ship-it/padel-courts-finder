import { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { GearWidget } from '@/components/GearWidget';
import { CourtDiagram } from '@/app/how-to-play/_components/court-diagram';
import {
  LearnHero,
  Toc,
  Section,
  Prose,
  Callout,
  FaqList,
  Sources,
  faqJsonLd,
  type Faq,
} from '@/app/how-to-play/_components/learn-ui';
import { WallRules } from './_components/wall-rules';

const TITLE = "Padel Rules (2026): Scoring, Serving & Wall Play Explained";
const DESC =
  "The complete rules of padel in plain English, checked against the 2026 FIP rulebook: scoring and the star point, the underhand serve, when the glass and mesh are in play, lets, and the mistakes beginners make.";

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
    "padel wall rules",
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
  "dateModified": "2026-10-08T00:00:00Z",
  "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
  "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/rules" }
};

const faqs: Faq[] = [
  {
    q: "What are the basic rules of padel?",
    a: "Padel is played two against two on an enclosed court 20 metres long and 10 metres wide. The serve is underhand: bounce the ball behind the service line, hit it at or below waist height, and send it diagonally into the receiver's service box. The ball may bounce once on your side, after which it can come off your walls and you can still return it. Your shot must land on the other team's floor before it touches their walls. Scoring is the same as tennis.",
  },
  {
    q: "How does scoring work in padel?",
    a: "Points go 15, 30, 40 and game, as in tennis. The first pair to six games with a two-game lead wins the set, a tie-break is played at 6-6, and a match is the best of three sets. At 40-40 the game is settled by advantage, golden point or star point, depending on what the club or event uses.",
  },
  {
    q: "Can the ball hit the cage in padel?",
    a: "Yes, after it has bounced on your side. A ball that bounces on your floor and then hits your metal mesh is still in play, and you can return it before it bounces again. Your own shot may never touch your own mesh, and a shot that hits the other team's mesh before bouncing on their floor loses the point. On the serve, a ball that bounces in the box and then touches the mesh is a fault.",
  },
  {
    q: "Can you hit the glass first in padel?",
    a: "Only your own glass. You may play the ball into your own glass walls so it rebounds over the net, as long as it then lands on the other team's floor. A shot that hits the other team's glass before bouncing on their floor loses the point.",
  },
  {
    q: "Can you volley the serve in padel?",
    a: "No. The receiver has to let the serve bounce in the service box before hitting it. If the serve hits the receiver or their racket before it bounces, the server wins the point.",
  },
  {
    q: "Can you reach over the net in padel?",
    a: "Only in one situation. You may not hit the ball before it has crossed to your side, and touching the net or the other team's court during a point loses it. If a ball bounces on your side and its spin carries it back over the net, you may reach over to play it, as long as you touch neither the net nor their court.",
  },
  {
    q: "What is the 40-40 rule in padel?",
    a: "At 40-40, the 2026 FIP rules allow three ways to finish a game: traditional advantage, the golden point (one deciding point) and the star point (two advantage chances, then one deciding point). For any deciding point the receiving pair chooses which side receives. Clubs and leagues differ, so agree on one before you start.",
  },
  {
    q: "If the ball hits the ceiling in padel, is it out?",
    a: "It depends on when. If your shot hits the ceiling, the lights or anything else above the court before bouncing on the other side, you lose the point. If it bounces on the other side first and then hits the ceiling, it is a good shot and the other team still has to return it.",
  },
  {
    q: "Can you play padel with three people or one against one?",
    a: "The official rules are written for two against two, and almost every game in the US is played that way. Some clubs have narrower singles courts, about 6 metres wide, for one against one. Three players can rally and practise together, but there is no official three-player format.",
  },
  {
    q: "Can you serve overhand in padel?",
    a: "No. You must bounce the ball first and hit it at or below waist height, with at least one foot on the ground. A serve hit above the waist is a fault.",
  },
];

const toc = [
  { id: "cheat-sheet", label: "Cheat sheet" },
  { id: "court", label: "Players and court" },
  { id: "scoring", label: "Scoring" },
  { id: "serve", label: "The serve" },
  { id: "return", label: "The return" },
  { id: "walls", label: "Walls and mesh" },
  { id: "point-lost", label: "Losing a point" },
  { id: "lets", label: "Lets" },
  { id: "outside", label: "Playing outside" },
  { id: "mistakes", label: "Beginner mistakes" },
  { id: "faq", label: "FAQ" },
];

const cheatSheet: Array<[string, string]> = [
  ["Players", "Two against two. The official rules are written for doubles."],
  ["Court", "20 m by 10 m, fully enclosed by glass walls and metal mesh."],
  ["Scoring", "As in tennis: 15, 30, 40, game. Six games win a set, tie-break at 6-6, best of three sets."],
  ["At 40-40", "Advantage, golden point or star point. Agree which one before you start."],
  ["Serve", "Underhand. Bounce it behind the service line, hit at or below the waist, diagonally into the box. Two tries."],
  ["Return", "Let the serve bounce. Volleying the serve gives the point to the server."],
  ["Walls", "After one bounce on your side, the ball can come off any of your walls and you can still play it."],
  ["Your shot", "It must land on their floor before touching their walls or mesh, and may go off your own glass first."],
  ["Point lost", "The ball bounces twice, hits you, goes into the net or hits their walls before the floor, or you touch the net."],
];

const link = "font-medium text-padel-green-dark underline decoration-padel-green/40 underline-offset-2 hover:decoration-padel-green";

function RuleList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="max-w-[65ch] space-y-3 text-stone-700">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-padel-green" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-display mb-3 mt-10 text-xl font-bold text-court first:mt-0">{children}</h3>;
}

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <div className="h-1 bg-padel-green" />

      <LearnHero
        kicker="Padel rules"
        title="Padel Rules: Scoring, Serving and Wall Play Explained"
        sub="The official rules of padel in plain English, checked line by line against the International Padel Federation rulebook that applies from January 1, 2026."
        updated="October 8, 2026"
        readTime="11 min read"
      />

      <article>
        {/* Quick-reference card */}
        <section id="cheat-sheet" className="scroll-mt-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <div className="grain bg-court px-5 py-4 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-turf">Quick reference</p>
                <h2 className="font-display mt-1 text-xl font-bold text-white md:text-2xl">Padel rules cheat sheet</h2>
              </div>
              <dl className="grid divide-y divide-stone-200 bg-white sm:grid-cols-2 sm:divide-y-0">
                {cheatSheet.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`px-5 py-4 sm:px-6 ${i % 2 === 0 ? "sm:border-r sm:border-stone-200" : ""} ${i > 1 ? "sm:border-t sm:border-stone-200" : ""} ${i === cheatSheet.length - 1 && i % 2 === 0 ? "sm:col-span-2 sm:border-r-0" : ""}`}
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-padel-green-dark">{k}</dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed text-stone-700">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Prose className="mt-6">
              <p>
                That card covers a first game. The rest of this page goes through each rule in the order you meet it on
                court, with the edge cases people search for. If you have never played, start with our{" "}
                <Link href="/how-to-play" className={link}>beginner&apos;s guide to how to play padel</Link>, and if you are
                coming from another sport, our <Link href="/blog/padel-vs-pickleball" className={link}>padel vs pickleball guide</Link>{" "}
                compares the two.
              </p>
            </Prose>
          </div>
        </section>

        <Toc items={toc} />

        <Section id="court" eyebrow="Rule basics" title="Players, court and equipment">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div>
              <Prose>
                <p>
                  Padel is played by two pairs, one on each side of the net. Only the server and the receiver have fixed
                  positions; both partners can stand anywhere on their own side, and the server&apos;s partner usually waits
                  near the net. The FIP rules do not cover singles, although some clubs build narrower singles courts about
                  6 metres wide.
                </p>
              </Prose>
              <H3>The court</H3>
              <RuleList
                items={[
                  "The court is 10 m wide and 20 m long, measured inside the walls.",
                  "The net is 88 cm high in the middle and 92 cm at the posts.",
                  "Service lines run across the court 6.95 m from the net, with a centre line dividing each side into two service boxes.",
                  "Each back wall is 4 m high: 3 m of glass or another solid wall, then 1 m of metal mesh.",
                  "Each side wall has glass at both ends and metal mesh in the middle, with one or two door openings per side.",
                ]}
              />
              <H3>Racket and ball</H3>
              <RuleList
                items={[
                  "Rackets are solid and perforated, with no strings, up to 45.5 cm long, 26 cm wide and 38 mm thick.",
                  "Every racket has a wrist cord, and wearing it is compulsory. Dropping your racket or breaking the cord during a point loses the point.",
                  "The ball is a pressurised rubber ball between 6.35 and 6.77 cm across. Competitions use FIP-approved padel balls.",
                ]}
              />
            </div>
            <CourtDiagram />
          </div>
        </Section>

        <Section id="scoring" eyebrow="Rule 1" title="Padel scoring explained" tone="stone">
          <Prose>
            <p>
              Padel uses tennis scoring. The first point of a game is called 15, the second 30, the third 40, and the
              fourth wins the game, with the server&apos;s score called first.
            </p>
          </Prose>
          <ol aria-label="Points in a game" className="mt-6 flex flex-wrap items-center gap-2">
            {[
              ["0", "love"],
              ["15", "1 point"],
              ["30", "2 points"],
              ["40", "3 points"],
              ["Game", "4 points"],
            ].map(([score, sub], i, arr) => (
              <li key={score} className="flex items-center gap-2">
                <span className={`flex min-w-[4.25rem] flex-col items-center rounded-xl px-3 py-2 ${score === "Game" ? "bg-padel-green text-white" : "bg-court text-white"}`}>
                  <span className="font-display text-xl font-bold tabular-nums">{score}</span>
                  <span className={`text-[0.7rem] ${score === "Game" ? "text-green-100" : "text-stone-400"}`}>{sub}</span>
                </span>
                {i < arr.length - 1 && <span aria-hidden="true" className="text-stone-400">&rarr;</span>}
              </li>
            ))}
          </ol>

          <H3>At 40-40: three ways to finish a game</H3>
          <Prose>
            <p>
              When both pairs reach 40 the score is deuce. The 2026 FIP rules allow three methods, and which one you play
              varies by club, league and event, so ask before the first game.
            </p>
          </Prose>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Option 1</p>
              <h4 className="font-display mt-1 font-bold text-court">Advantage</h4>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                The traditional tennis method. Win the next point for advantage, then one more to take the game. Lose it and
                you are back to deuce, which can go on for a while.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Option 2</p>
              <h4 className="font-display mt-1 font-bold text-court">Star point</h4>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                New in the 2026 rules. Play advantage twice, and if the game reaches deuce a third time, a single star point
                decides it. The USPA uses star point in all its sanctioned tournaments.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Option 3</p>
              <h4 className="font-display mt-1 font-bold text-court">Golden point</h4>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Also called no advantage. At the first deuce, one deciding point wins the game. It keeps games short, and
                many social games and leagues use it, but check with your group.
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-stone-600">
            On any deciding point (golden or star), the receiving pair chooses whether to receive on the right or the left,
            and in mixed doubles the receiver is the player of the same sex as the server.
          </p>

          <H3>Sets and matches</H3>
          <RuleList
            items={[
              "The first pair to win six games with a two-game lead takes the set. At 5‑5, play on to 7‑5.",
              "At 6-6, play a tie-break. A set won on a tie-break goes down as 7-6.",
              "A match is the best of three sets. Organisers can agree in advance to play the third set without a tie-break, in which case it continues until one pair leads by two games.",
              "Pairs change ends after the first, third and every following odd game of each set.",
              "Each pair decides who serves first at the start of every set, and that order holds for the set. Receivers likewise pick their sides and keep them for the set.",
            ]}
          />

          <H3>The tie-break</H3>
          <RuleList
            items={[
              "Points are counted 1, 2, 3 and so on. The first pair to seven points with a two-point lead wins the tie-break and the set.",
              "The player whose turn it is serves the first point, from the right. The other pair then serves the next two points, starting from the left, and from there each player serves two points in turn.",
              "Pairs change ends after every six points.",
              "The pair that did not serve first in the tie-break serves first in the next set.",
            ]}
          />

          <H3>Shorter formats</H3>
          <Prose>
            <p>
              The FIP also allows four-game sets (with a tie-break at 4-4) and replacing the third set with a match tie-break
              to 7 or a super tie-break to 10, each won by two points. Most divisions of USPA-sanctioned tournaments play two
              sets and a super tie-break in place of a third set, while the top division of the larger events plays the
              best of three sets. In a club game, whatever your group agrees on is the format.
            </p>
          </Prose>
        </Section>

        <Section id="serve" eyebrow="Rules 6, 7 and 9" title="Padel serve rules">
          <Prose>
            <p>
              Every point starts with an underhand serve, and the server gets two attempts. The serve rules are strict about
              where you stand and how high you hit the ball, and relaxed about the walls once the ball has bounced in the box.
            </p>
          </Prose>
          <H3>How to serve legally</H3>
          <RuleList
            items={[
              "Stand behind the service line, between the centre line and the side wall, and stay there until you hit the ball. Your feet may not touch the service line or the centre line.",
              "Bounce the ball on the floor in your own serving area. It must not cross the service line before you hit it.",
              "Hit the ball at or below waist height, with at least one foot on the ground.",
              "Serve diagonally: the first point of each game from the right, then alternate sides after every point.",
              "The ball must bounce in the receiver's service box. The lines count as in.",
              "After that bounce, the serve may hit the glass and stays in play.",
            ]}
          />
          <H3>It is a fault if</H3>
          <RuleList
            items={[
              "you break any of the rules above, for example by stepping on the line or hitting above the waist,",
              "you swing and miss the ball,",
              "the serve bounces outside the service box,",
              "the ball hits you or your partner,",
              "the serve bounces in the box and then touches the metal mesh before its second bounce,",
              "or the serve bounces in the box and goes straight out through a door on a court where play outside is not allowed.",
            ]}
          />
          <Prose className="mt-5">
            <p>Two faults in a row lose the point.</p>
          </Prose>
          <H3>Nets and lets on the serve</H3>
          <Prose>
            <p>
              A serve that touches the net or a post and then lands in the box is a &ldquo;net&rdquo; and is replayed, unless it
              goes on to touch the mesh before the second bounce, which makes it a fault. A serve is also replayed if the
              receiver was not ready, although a receiver who tries to return the ball cannot claim afterwards that they
              were not ready.
            </p>
            <p>
              A let on the first serve replays the whole point, so you get two serves again. A let on the second serve
              gives you only that second serve again.
            </p>
          </Prose>
          <div className="mt-6">
            <Callout title="Mistakes in the serving order">
              If someone serves from the wrong side, fix it as soon as you notice. The points already played stand, and a
              first-serve fault already made still counts. If the wrong player serves, the right player takes over as soon
              as you notice, the points already played stand, and a single fault made before you noticed is wiped out. If
              the game has already finished, keep the new serving order until the end of the set.
            </Callout>
          </div>
        </Section>

        <Section id="return" eyebrow="Rule 8" title="Returning the serve" tone="stone">
          <RuleList
            items={[
              "The receiver must let the serve bounce in the service box and then hit it before it bounces a second time.",
              "Volleying the serve is not allowed. If the serve hits the receiver or their racket before it bounces, the server wins the point.",
              "In the first game of each set, the receiving pair decides who receives first, and that player takes the first serve of every game they receive for the rest of the set. The partners then alternate.",
              "The receiver and their partner may stand anywhere on their own side of the court.",
            ]}
          />
        </Section>

        <Section id="walls" eyebrow="Rules 12 to 15" title="The walls and the mesh: what is in play">
          <Prose>
            <p>
              This is the part of padel that confuses new players most, and it comes down to one idea. The other team&apos;s
              shot has to bounce on your floor before it touches anything else on your side, and once it has bounced, your
              walls and mesh are in play until it bounces a second time.
            </p>
          </Prose>
          <div className="mt-6">
            <WallRules />
          </div>
          <H3>The wall rules in full</H3>
          <RuleList
            items={[
              "After the ball bounces on your floor, it stays in play if it hits your glass, your mesh, the net or the posts. Return it before it bounces a second time.",
              "Your shot may come off your own glass walls on its way over the net, as long as it then lands on the other team's floor.",
              "Your shot may not touch your own mesh or your own floor. Either one loses the point.",
              "Your shot must land on the other team's floor before it touches their walls, their mesh or anything else. This applies even if it clips the net first.",
              "A ball that lands in the corner where the floor meets the wall is a good bounce.",
              "If your shot bounces on the other side and then gets stuck in the mesh, goes through a hole in it, or lodges on top of the wall, you win the point.",
              "If your shot bounces on the other side and then hits the ceiling, the lights or anything else above the court, it is a good shot and the other team still has to return it. Hitting any of those before the bounce loses the point.",
            ]}
          />
        </Section>

        <Section id="point-lost" eyebrow="Rule 13" title="When you lose a point" tone="stone">
          <Prose>
            <p>Your pair loses the point if any of these happen while the ball is in play.</p>
          </Prose>
          <div className="mt-5">
            <RuleList
              items={[
                "The ball bounces twice on your side before you return it.",
                "You, your racket or anything you wear touches the net, the posts, the cable or the other team's side of the court.",
                "You hit the ball before it has crossed the net to your side.",
                "Your shot hits the other team's walls, mesh or anything else before bouncing on their floor.",
                "Your shot hits your own mesh or your own floor.",
                "You hit the ball twice, or both you and your partner hit it.",
                "After your shot, the ball touches you or your partner.",
                "The other team's shot hits your body or clothes. Only your racket may touch the ball.",
                "You throw your racket at the ball, drop it, or break its wrist cord.",
                "You jump over the net during a point.",
                "You serve two faults in a row.",
                "You play the ball from outside the court when play outside is not allowed.",
              ]}
            />
          </div>
          <div className="mt-6">
            <Callout title="The one time you may reach over the net">
              If a ball bounces on your side and its spin carries it back over the net, you may reach across and play it, as
              long as you do not touch the net or the other team&apos;s court.
            </Callout>
          </div>
        </Section>

        <Section id="lets" eyebrow="Rules 10 and 11" title="Lets and interference">
          <RuleList
            items={[
              "Replay the point if the ball splits, if something from outside the game comes onto the court (a ball from the next court is the usual one), or if play is interrupted by anything that has nothing to do with the players.",
              "Call the let straight away. If you play on, you lose the right to it.",
              "If a ball in play hits a stray ball lying on the other side and sends it somewhere it could get in the way or hurt someone, the point is a let.",
              "Deliberately distracting an opponent while they hit loses the point. Accidental interference is replayed as a let, but a second accidental interference by the same pair loses the point.",
            ]}
          />
        </Section>

        <Section id="outside" eyebrow="Rule 16" title="Playing outside the court" tone="stone">
          <Prose>
            <p>
              Some courts are built with two openings on each side and a clear area outside, at least 3 metres wide and 4
              metres long beyond each side under the FIP standard. On those courts, when the event or club allows it, a ball
              that bounces correctly and then leaves over a side wall or through a door can be chased outside and hit back
              before it bounces a second time. A ball that leaves over the back wall ends the point in the hitter&apos;s
              favour. Players call these smashes &ldquo;por tres&rdquo; (out over the side) and &ldquo;por cuatro&rdquo;
              (out over the 4 m back wall).
            </p>
            <p>
              Many US courts are not built with that space, so ask the club. Where play outside is not allowed, a ball that
              bounces in your opponents&apos; court and then leaves it wins you the point, and so does a ball that bounces
              there and goes out through a door.
            </p>
          </Prose>
          <H3>Time between points</H3>
          <Prose>
            <p>
              Tournament matches start with a three-minute warm-up. After that the FIP allows 20 seconds between points, 90
              seconds when pairs change ends (with no break after the first game of a set or during a tie-break), and 120
              seconds between sets. Club games are more relaxed, and keeping play moving is still good manners.
            </p>
          </Prose>
        </Section>

        <Section id="mistakes" eyebrow="Learn from everyone else" title="Most common beginner mistakes">
          <ol className="max-w-[65ch] space-y-5">
            {[
              ["Serving from inside the service line, or above the waist.", "Both are faults. Stand behind the line, let the ball drop after the bounce, and make contact around hip height or lower."],
              ["Volleying the return of serve.", "Receivers who stand close to the service line are sometimes tempted to take a short serve early. The serve has to bounce first, and if it touches you or your racket before the bounce, the server wins the point."],
              ["Hitting deep shots straight into the other team's glass.", "Tennis players in particular hit deep drives that reach the back wall without bouncing. The ball has to land on their floor first, so aim a little shorter than you would in tennis."],
              ["Treating the mesh as out.", "After a bounce on your side, a ball off your mesh is still live, so stay ready for an awkward rebound. The mesh only ends the rally if your own shot touches your own mesh, or if a shot hits the other side's mesh before bouncing."],
              ["Letting the ball hit the floor after the wall.", "A ball that bounces, hits your back glass and then drops to the floor has bounced twice. Play it as it comes off the wall."],
              ["Touching the net on the follow-through.", "A volley close to the net that ends with your racket or body brushing the net loses the point, even if your shot was a winner."],
              ["Reaching over to volley early.", "You must wait for the ball to cross the net. The only exception is a ball that has bounced on your side and spun back over."],
              ["Not agreeing on the scoring before you start.", "Advantage, golden point and star point all exist, and arguing about it at 40-40 is a bad way to end a game."],
            ].map(([h, p], i) => (
              <li key={h} className="flex gap-4">
                <span aria-hidden="true" className="font-display flex h-8 w-8 flex-none items-center justify-center rounded-full bg-rose-50 text-sm font-bold text-rose-700 ring-1 ring-rose-200">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-display font-semibold text-court">{h}</h3>
                  <p className="mt-1 leading-relaxed text-stone-600">{p}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="faq" eyebrow="Questions" title="Padel rules FAQ" tone="stone">
          <FaqList faqs={faqs} />
        </Section>

        <section className="bg-white">
          <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
            <GearWidget />
            <div className="border-t border-stone-200 pt-8">
              <h2 className="font-display mb-4 text-lg font-semibold text-court">Keep learning</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/how-to-play" className="text-padel-green-dark hover:underline">How to play padel</Link>
                <Link href="/blog/padel-vs-pickleball" className="text-padel-green-dark hover:underline">Padel vs pickleball</Link>
                <Link href="/get-started/glossary" className="text-padel-green-dark hover:underline">Padel glossary</Link>
                <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green-dark hover:underline">Best beginner rackets (2026)</Link>
                <Link href="/blog/padel-injuries-prevention-tips" className="text-padel-green-dark hover:underline">Preventing padel injuries</Link>
                <Link href="/search" className="text-padel-green-dark hover:underline">Find courts near you</Link>
              </div>
            </div>
            <Sources
              items={[
                { label: "International Padel Federation, Rules of Padel (review of application 1 January 2026)", href: "https://www.padelfip.com/wp-content/uploads/2025/12/FIP_Rules-of-Padel.pdf" },
                { label: "United States Padel Association, Rules and Regulations, Edition 8.11 (June 1, 2026), section 3.6 on scoring formats", href: "https://padelusa.org/wp-content/uploads/2026/06/USPA-Rules-and-Regulations.-June-1-2026.docx.pdf" },
                { label: "Wikipedia, Padel (singles courts)", href: "https://en.wikipedia.org/wiki/Padel" },
              ]}
            />
          </div>
        </section>
      </article>
    </div>
  );
}
