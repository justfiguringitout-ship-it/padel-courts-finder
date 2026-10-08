import { Metadata } from 'next';
import Link from 'next/link';
import { GearWidget } from '@/components/GearWidget';
import { getSiteStats, getStates, getAllCities } from '@/lib/site-structure';
import { padelCourts } from '@/data/padel-courts';
import { CourtDiagram } from './_components/court-diagram';
import { WallSequence } from './_components/wall-sequence';
import {
  LearnHero,
  Toc,
  Section,
  Prose,
  Steps,
  Callout,
  FaqList,
  Sources,
  faqJsonLd,
  type Faq,
} from './_components/learn-ui';

const TITLE = "How to Play Padel: Complete Beginner's Guide (2026)";
const DESC =
  "New to padel? A plain-English beginner's guide: how a point works, the underhand serve, playing the ball off the glass, the first shots to learn, what to wear, and how to find a game in the US.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "how to play padel",
    "padel rules",
    "padel for beginners",
    "padel guide",
    "learn padel",
    "padel scoring",
    "padel techniques",
    "padel court",
    "how to start playing padel",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://www.padelcourtsfinder.com/how-to-play',
    siteName: 'Padel Courts Finder',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/how-to-play',
  },
};

const faqs: Faq[] = [
  {
    q: "How do I get started playing padel?",
    a: "Find a club near you and book a beginner clinic or an intro lesson. Most clubs rent rackets at the front desk, so all you need to bring is court shoes and sports clothes. A clinic also pairs you with players at your level, which matters because padel is played two against two. After a few sessions you will know whether you want to buy your own racket.",
  },
  {
    q: "How do you play padel?",
    a: "Two teams of two play on an enclosed court 20 metres long and 10 metres wide. You serve underhand into the diagonal service box, keep score like tennis, and let the ball bounce no more than once on your side before you hit it back. After that bounce the ball can come off your walls and you can still play it. Your own shot has to land on the other team's floor before it touches their walls.",
  },
  {
    q: "Is padel easy to learn?",
    a: "It is one of the easier racket sports to start. The serve is underhand, the court is small, the racket is short and solid, and the walls keep the ball in play, so most beginners get proper rallies going in their first session. Reading the ball as it comes off the glass takes longer and is the skill most new players spend their first weeks on.",
  },
  {
    q: "Can you play padel singles?",
    a: "Yes, although the official FIP rules are written for doubles and almost every game in the US is two against two. Some clubs build narrower singles courts, about 6 metres wide, for one against one. Two people can also book a regular court to practise rallies and serves.",
  },
  {
    q: "How long is a game of padel?",
    a: "There is no clock in padel. A match is usually the best of three sets, and how long it takes depends on how close the games are. US clubs sell court time in fixed slots, commonly 60 or 90 minutes, and social groups play as many games as fit in their booking.",
  },
  {
    q: "Do I need my own padel racket?",
    a: "Not at first. Most clubs rent rackets, so you can play a few sessions before you buy. When you do buy, a round-shaped racket is the usual choice for beginners because its sweet spot sits in the middle of the face and it forgives off-centre hits.",
  },
  {
    q: "How is padel different from tennis?",
    a: "The scoring is the same as tennis. The court is about a third of the size and enclosed by walls you are allowed to use, the serve is underhand, the racket is solid with no strings, and the game is almost always played as doubles.",
  },
  {
    q: "How is padel different from pickleball?",
    a: "Both have small courts and an underhand serve. Padel uses a pressurised ball like a tennis ball, a perforated foam racket, tennis scoring and glass walls that stay in play. Pickleball uses a plastic ball with holes, a flat paddle, an open court with a non-volley zone next to the net, and its own scoring.",
  },
];

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": TITLE,
  "description": DESC,
  "datePublished": "2025-01-15T00:00:00Z",
  "dateModified": "2026-10-08T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Padel Courts Finder",
    "url": "https://www.padelcourtsfinder.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Padel Courts Finder",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.padelcourtsfinder.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.padelcourtsfinder.com/how-to-play"
  }
};

const toc = [
  { id: "first-game", label: "Your first game" },
  { id: "court", label: "The court" },
  { id: "gear", label: "What to bring" },
  { id: "point", label: "How a point works" },
  { id: "serve", label: "The serve" },
  { id: "walls", label: "Using the walls" },
  { id: "shots", label: "Basic shots" },
  { id: "etiquette", label: "Etiquette" },
  { id: "find-a-game", label: "Find a game" },
  { id: "faq", label: "FAQ" },
];

const link = "font-medium text-padel-green-dark underline decoration-padel-green/40 underline-offset-2 hover:decoration-padel-green";

export default function HowToPlayPage() {
  const stats = getSiteStats();
  const lessonClubs = padelCourts.filter((c) => c.lessonsAvailable).length;
  const states = getStates();
  const stateSlug = new Map(states.map((s) => [s.code, s.slug]));
  const topStates = states.slice(0, 8);
  const topCities = getAllCities()
    .filter((c) => stateSlug.has(c.stateCode))
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <div className="h-1 bg-padel-green" />

      <LearnHero
        kicker="Beginner's guide"
        title="How to Play Padel: A Beginner's Guide"
        sub="The court, the serve, the walls and the first shots to learn, written for someone who has never stepped onto a padel court."
        updated="October 8, 2026"
        readTime="12 min read"
      >
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Players", "2 against 2"],
            ["Court", "20 m x 10 m"],
            ["Serve", "Underhand"],
            ["Scoring", "Same as tennis"],
          ].map(([k, v]) => (
            <div key={k} className="glass-panel rounded-xl px-4 py-3">
              <dt className="text-xs uppercase tracking-wider text-stone-400">{k}</dt>
              <dd className="font-display mt-1 font-semibold text-white">{v}</dd>
            </div>
          ))}
        </dl>
      </LearnHero>

      <article>
        {/* Intro: what padel is */}
        <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
          <Prose>
            <p className="text-lg leading-[1.7] text-stone-800">
              Padel is a racket sport for four people, played two against two on a glass-walled court about a third the
              size of a tennis court. You keep score like tennis and serve underhand, and once the ball has bounced on your
              side you are allowed to play it off the walls, which is why the rallies last so long.
            </p>
            <p>
              The game was invented in Acapulco, Mexico, in 1969 by Enrique Corcuera, grew up in Spain and Argentina, and
              has spread quickly in the US over the last few years. Our directory now lists {stats.totalCourts} padel clubs
              in {stats.totalStates} states. This guide covers what you need for a first game, in the order you will need
              it. When you want the full rulebook, our{" "}
              <Link href="/rules" className={link}>padel rules guide</Link> has every detail.
            </p>
          </Prose>
        </div>

        <Toc items={toc} />

        <Section id="first-game" eyebrow="Start here" title="How to get started: your first game in five steps">
          <Steps
            items={[
              <>
                Find a club near you. Search the{" "}
                <Link href="/search" className={link}>Padel Courts Finder directory</Link> by city or state. {lessonClubs} of
                the {stats.totalCourts} clubs we list say they offer lessons or clinics.
              </>,
              <>
                Book a beginner clinic or an intro lesson for your first visit. A coach
                runs the session and groups you with players at your level, which also solves the hardest part of a doubles
                sport, finding three other people. Our list of{" "}
                <Link href="/padel-lessons" className={link}>clubs that offer padel lessons</Link> is a good place to start.
              </>,
              <>
                Rent a racket. Most clubs rent rackets and sell balls at the front
                desk, so you can wait to buy until you know you enjoy the game.
              </>,
              <>
                Wear court shoes and sports clothes. Padel means short sprints and
                quick stops, and running shoes give little support when you change direction.
              </>,
              <>
                Learn two rules before you go. Serve underhand after bouncing the
                ball, and let a ball bounce no more than once on your side, after which you can play it off the glass. You
                can pick up the rest on court.
              </>,
            ]}
          />
        </Section>

        <Section id="court" eyebrow="The basics" title="The padel court" tone="stone">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Prose>
              <p>
                A padel court is 20 metres long and 10 metres wide, about 66 by 33 feet, with a net across the middle that
                stands 88 cm high in the centre and 92 cm at the posts. The whole court is enclosed. Each back wall is 3
                metres of glass (or another solid surface) with a metre of metal mesh on top, and each side wall has glass at
                both ends with mesh in the middle, where the doors are.
              </p>
              <p>
                The only lines on the floor are for serving. A service line crosses each half 6.95 metres from the net, and a
                centre line splits the area between the net and the service line into two service boxes. Once the serve is in,
                the lines stop mattering and the walls decide what happens next.
              </p>
              <ul className="space-y-3 pt-1">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-sky-300" />
                  <span>The glass gives a true bounce. After the ball has bounced on your floor, you can let it come off your glass and still hit it.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-slate-400" />
                  <span>The metal mesh is still in play after a bounce, but the ball comes off it at odd angles. Your own shot may never touch your own mesh.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-padel-green" />
                  <span>The doors are openings in the side walls. On courts with enough space outside, advanced players may run out through them to chase a ball, which the rules guide explains.</span>
                </li>
              </ul>
            </Prose>
            <CourtDiagram />
          </div>
        </Section>

        <Section id="gear" eyebrow="Before you go" title="What to bring and wear">
          <Prose>
            <p>
              For a first session you need less than you might think, and the club can usually cover the rest. Here is what
              each item does and when it is worth buying your own.
            </p>
          </Prose>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                h: "Racket",
                p: "Padel rackets are solid and perforated, with no strings, and no longer than 45.5 cm under FIP rules. Rent one for your first few sessions. When you buy, a round shape is the usual beginner pick because the sweet spot sits in the middle of the face.",
              },
              {
                h: "Balls",
                p: "Padel balls look like tennis balls and are close in size, but they are made to padel's own specification, so buy padel balls. Clubs usually sell cans at the front desk.",
              },
              {
                h: "Shoes",
                p: "Wear court shoes with a herringbone or clay-court sole, which grips the sand-filled artificial grass found on most courts. Some clubs require non-marking soles, so check before you go.",
              },
              {
                h: "Clothes and the wrist cord",
                p: "Ordinary sports clothes are fine. Every padel racket has a cord on the handle; slip it over your wrist, because the FIP makes it compulsory and it stops a slipping racket from hitting your partner.",
              },
            ].map((c) => (
              <div key={c.h} className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-display font-bold text-court">{c.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{c.p}</p>
              </div>
            ))}
          </div>
          <Prose className="mt-6">
            <p>
              When you are ready to buy, our guide to the{" "}
              <Link href="/blog/best-padel-rackets-beginners" className={link}>best padel rackets for beginners</Link>{" "}
              compares the ones we tested. If you are coming back to sport after a long break, read a physical therapist&apos;s{" "}
              <Link href="/blog/padel-injuries-prevention-tips" className={link}>six tips for preventing padel injuries</Link>{" "}
              before you book three games a week.
            </p>
          </Prose>
        </Section>

        <Section id="point" eyebrow="Step by step" title="How a point works" tone="stone">
          <Steps
            items={[
              <>One player serves from behind the service line, diagonally across the net into the opposite service box.</>,
              <>
                The receiver lets the serve bounce in the box and then hits it back. The return of serve is the one shot in
                padel you may not volley.
              </>,
              <>
                From then on the ball goes back and forth, and either player on a team can take it. You can hit it before it
                bounces (a volley) or after one bounce on your floor.
              </>,
              <>
                After that one bounce, the ball may hit your walls as many times as it likes, and you can still play it as long
                as it has not touched the floor a second time.
              </>,
              <>
                Your shot has to cross the net and land on the other team&apos;s floor before it touches their walls or mesh. On
                its way over, it is allowed to come off your own glass.
              </>,
              <>
                The point ends when someone misses: the ball bounces twice, goes into the net, hits the other team&apos;s walls
                before their floor, or hits a player. A ball that bounces in your opponents&apos; half and then flies out of the
                court wins you the point, although on courts with open side exits your opponents may run out and play it back.
              </>,
            ]}
          />
          <div className="mt-8">
            <Callout title="Keeping score">
              Points go 15, 30, 40 and game, exactly like tennis, and six games win a set. At 40-40 there are three official
              ways to finish the game (advantage, golden point and star point), and clubs differ, so agree on one before you
              start. The <Link href="/rules#scoring" className={link}>scoring section of our rules guide</Link> explains all
              three.
            </Callout>
          </div>
        </Section>

        <Section id="serve" eyebrow="Starting the point" title="The padel serve">
          <Prose>
            <p>
              The serve is underhand and gentle by design, and for most beginners it is the easiest shot to get right on day
              one. These are the official requirements from the FIP rules.
            </p>
          </Prose>
          <ul className="mt-5 max-w-[65ch] space-y-3 text-stone-700">
            {[
              "Stand behind the service line, between the centre line and the side wall, without touching either line. The first point of each game is served from the right side.",
              "Bounce the ball once on the floor in your own serving area, behind the service line, then hit it.",
              "Make contact at or below waist height, with at least one foot on the ground.",
              "Send it diagonally over the net so it bounces in the receiver's service box. The lines count as in.",
              "After that bounce it may hit the glass and stays in play. If it touches the metal mesh before bouncing a second time, it is a fault.",
              "You get two tries. A serve that clips the net and still lands in the box is replayed.",
              "Switch sides after every point. One player serves the whole game, then the serve passes to the other team.",
            ].map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-padel-green" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="walls" eyebrow="Wall play" title="Using the walls" tone="stone">
          <Prose>
            <p>
              The walls are the part of padel that feels strangest at first. The key rule is simple: once the ball has
              bounced on your floor, you can let it come off the glass and still play it, which gives you a second chance
              at balls you would have lost in tennis. Here is the most common wall shot, a ball played off the back glass.
            </p>
          </Prose>
          <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <WallSequence />
            <ol className="space-y-3 text-sm leading-relaxed text-stone-700">
              {[
                "Your opponent's shot clears the net and heads deep into your half.",
                "It bounces once on your floor. From this moment your walls are in play.",
                "It hits your back glass and starts travelling back toward the net.",
                "You hit it as it comes off the glass, before it touches the floor again, and send it back over the net.",
              ].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="font-display flex h-6 w-6 flex-none items-center justify-center rounded-full bg-yellow-300 text-xs font-bold text-court"
                  >
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <Prose className="mt-8">
            <p>
              The hardest habit to break, especially for tennis players, is rushing back to hit the ball before it reaches
              the glass. Let it go past you, turn side-on to the wall, and wait for it to come out. Watch where the ball
              strikes the glass, because a ball that hits high tends to come back high and a ball that hits low comes back
              low and fast.
            </p>
            <p>
              The side glass works the same way, and so does a corner, where the ball hits the side and back glass one after
              the other and usually loses pace. Give yourself space from the wall and you will have time to read it.
            </p>
          </Prose>
        </Section>

        <Section id="shots" eyebrow="What to practise" title="Basic padel shots for beginners">
          <Prose>
            <p>
              You will hit forehands and backhands from the back of the court as in any racket sport, with a shorter swing
              because the racket is solid and the court is small. Four more shots come up in every game, and it helps to
              know their names before a coach uses them.
            </p>
          </Prose>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <h3 className="font-display font-bold text-court">The volley</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                A volley is any shot you hit before the ball bounces, usually from close to the net. Keep the racket up in
                front of you and use a short punch with almost no backswing. The pair that holds the net usually controls
                the point, so much of the game is about getting there together with your partner.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <h3 className="font-display font-bold text-court">The lob</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                A high, deep ball over the heads of the players at the net. It is the main way to push a team back, and if
                it lands deep enough they have to turn and play it off their glass while you and your partner move forward.
                A lob that falls short gets smashed, so aim higher than feels natural.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <h3 className="font-display font-bold text-court">The bandeja</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                A controlled overhead with slice, hit deep so the ball stays low after it bounces. Players use it to answer a
                lob without giving up their place at the net, and it is the overhead most coaches teach first. Our{" "}
                <Link href="/blog/padel-bandeja-explained" className={link}>bandeja explainer</Link> breaks down the
                technique.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <h3 className="font-display font-bold text-court">The víbora</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                The name is Spanish for viper. It is a more aggressive overhead than the bandeja, hit with more pace and side
                spin, usually diagonally downward so the ball skids low off the side glass. Learn the bandeja first and the
                víbora will make more sense.
              </p>
            </div>
          </div>
          <Prose className="mt-6">
            <p>
              The <Link href="/get-started/glossary" className={link}>padel glossary</Link> covers the rest of the
              vocabulary you will hear on court, from chiquita to contrapared.
            </p>
          </Prose>
        </Section>

        <Section id="etiquette" eyebrow="Fitting in" title="Padel etiquette" tone="stone">
          <Prose>
            <p>
              Most of this is custom and goes unwritten, and the points that come from the rulebook are marked. It is how
              games run at clubs, and following it makes it easier to get invited back.
            </p>
          </Prose>
          <ul className="mt-5 max-w-[65ch] space-y-3 text-stone-700">
            {[
              "Arrive a few minutes early. Courts are booked in fixed slots and the next group will be waiting at the door when yours ends.",
              "Warm up together by rallying gently across the net. In tournaments the FIP gives players a three-minute warm-up.",
              "Settle who serves first with a coin toss or a racket spin, and agree how you will score 40-40 before the first game.",
              "If a ball from the next court rolls onto yours, stop and replay the point. The rules call this a let, and you have to call it straight away.",
              "Wait for a point to finish before you walk behind a court or open a door onto it.",
              "Gather the balls on your side between points and send them to the server.",
              "Keep your racket and body off the net. Touching it during a point loses the point under the rules.",
              "Settle the court fee the way your club does it. Some charge each player, and some charge the person who booked, who then collects from the group.",
              "Finish with a handshake or a racket tap at the net.",
            ].map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-padel-green" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="find-a-game" eyebrow="Where to play" title="How to find a padel game in the US">
          <Prose>
            <p>
              The Padel Courts Finder directory lists {stats.totalCourts} padel clubs in {stats.totalStates} states, and{" "}
              {lessonClubs} of them say they offer lessons or clinics, which is the easiest first step. Many clubs also run
              open play, social mixers and round robins sorted by level, where you sign up on your own and get matched with
              three other players.
            </p>
            <p>
              Search by city, then open each club&apos;s page for its prices, court count and booking link. Start with{" "}
              <Link href="/search" className={link}>the full club search</Link> or the list of{" "}
              <Link href="/padel-lessons" className={link}>clubs with padel lessons</Link>.
            </p>
          </Prose>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display mb-3 font-bold text-court">States with the most clubs</h3>
              <ul className="flex flex-wrap gap-2">
                {topStates.map((s) => (
                  <li key={s.code}>
                    <Link
                      href={`/${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 hover:border-padel-green hover:text-padel-green-dark"
                    >
                      {s.name}
                      <span className="tabular-nums text-xs text-stone-400">{s.courtCount}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display mb-3 font-bold text-court">Cities with the most clubs</h3>
              <ul className="flex flex-wrap gap-2">
                {topCities.map((c) => (
                  <li key={`${c.stateCode}-${c.slug}`}>
                    <Link
                      href={`/${stateSlug.get(c.stateCode)}/${c.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 hover:border-padel-green hover:text-padel-green-dark"
                    >
                      {c.name}, {c.stateCode}
                      <span className="tabular-nums text-xs text-stone-400">{c.courtCount}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-stone-500">Club counts come from the Padel Courts Finder directory and update as clubs are added.</p>
        </Section>

        <Section id="faq" eyebrow="Questions" title="Padel for beginners: FAQ" tone="stone">
          <FaqList faqs={faqs} />
        </Section>

        <section className="bg-white">
          <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
            <GearWidget />
            <div className="border-t border-stone-200 pt-8">
              <h2 className="font-display mb-4 text-lg font-semibold text-court">Keep learning</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/rules" className="text-padel-green-dark hover:underline">Padel rules, in full</Link>
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
                { label: "United States Padel Association, Rules and Regulations, Edition 8.11 (June 1, 2026)", href: "https://padelusa.org/wp-content/uploads/2026/06/USPA-Rules-and-Regulations.-June-1-2026.docx.pdf" },
                { label: "Wikipedia, Padel (history and singles courts)", href: "https://en.wikipedia.org/wiki/Padel" },
              ]}
            />
          </div>
        </section>
      </article>
    </div>
  );
}
