import Link from "next/link";
import type { Metadata } from "next";

const URL = "https://www.padelcourtsfinder.com/blog/padel-bandeja-explained";
const TITLE = "Bandeja in Padel: What It Is and How to Hit It";
const DESC =
  "A bandeja is padel's sliced overhead (Spanish for \"tray\") that answers a lob and keeps you at the net. How to hit it, mistakes, drills, and bandeja vs víbora.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Padel's sliced overhead that answers a lob and keeps you at the net: how to hit it, mistakes, drills, and bandeja vs víbora vs smash.",
  },
};

const faqs = [
  {
    q: "What is a bandeja in padel?",
    a: "A bandeja is a controlled overhead hit with slice, usually from a step or two behind your net position. You use it to answer a lob that is too deep to smash, sending the ball deep into the opponents' court so it stays low off their back glass while you and your partner keep the net.",
  },
  {
    q: "What does bandeja mean?",
    a: "Bandeja is the Spanish word for tray. The shot gets the name from the racket position: the face is open at contact, like a waiter carrying a tray at head height. Players pronounce it ban-DAY-ha.",
  },
  {
    q: "What is the difference between a bandeja and a smash?",
    a: "A smash is hit at full stretch with as much pace as you can control, and its job is to win the point. A bandeja is hit at about head height with slice and medium pace, and its job is to keep the net while making the ball hard to attack. Use the smash on short lobs and the bandeja on deeper ones.",
  },
  {
    q: "What is the difference between a bandeja and a víbora?",
    a: "Both are sliced overheads. The bandeja is the safer, more neutral shot: medium pace, contact in front at about head height, aimed deep. The víbora (Spanish for viper) is faster, with more side spin, contact a little lower and more to the side, and it is usually aimed into the side glass so the ball skids low. Learn the bandeja first.",
  },
  {
    q: "What grip do you use for a bandeja?",
    a: "The continental grip, the same one most players use for volleys and the serve. It lets you open the racket face and slice the ball without changing grips at the last second.",
  },
  {
    q: "Is the bandeja the most common overhead in padel?",
    a: "Yes. A 2020 study of 1,015 overheads from eight World Padel Tour finals classified about 56% of men's overheads and 69% of women's overheads as bandejas (\"tray\" smashes), far more than flat or topspin smashes.",
  },
  {
    q: "Should beginners learn the bandeja?",
    a: "Yes, once you can rally, volley and lob. Opponents will lob you constantly, and smashing every lob loses points. A simple bandeja that lands deep is worth more than a big smash that comes back off the glass.",
  },
  {
    q: "Is there a bandeja in tennis?",
    a: "No. Tennis has no walls, so a slow overhead that lands deep would simply be attacked. The closest tennis shot is a sliced high volley or a placed overhead. The bandeja exists because padel's back glass gives the opponents a second chance at any hard, flat smash.",
  },
];

/* Top view of a padel court: the lob, where to make contact, and where the bandeja should land */
function BandejaDiagram() {
  const ink = "oklch(0.16 0.028 255)";
  return (
    <figure className="bg-white border border-stone-200 rounded-xl p-6 my-8 text-center">
      <svg viewBox="0 0 240 440" className="mx-auto h-96 w-auto" role="img" aria-label="Top view of a padel court. The opponents lob from their back glass over the net player, who steps back to make contact and hits the bandeja deep and cross-court, landing between the far service line and the far back glass.">
        <defs>
          <marker id="bandeja-arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#16A34A" />
          </marker>
          <marker id="bandeja-arrow-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={ink} fillOpacity="0.45" />
          </marker>
        </defs>
        {/* Court outline (10m x 20m) */}
        <rect x="20" y="20" width="200" height="400" rx="4" fill={ink} fillOpacity="0.04" stroke={ink} strokeWidth="2.5" />
        {/* Net */}
        <line x1="14" y1="220" x2="226" y2="220" stroke={ink} strokeWidth="3" strokeDasharray="6 5" />
        {/* Service lines (6.95m from the net) */}
        <line x1="20" y1="81" x2="220" y2="81" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="20" y1="359" x2="220" y2="359" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="120" y1="81" x2="120" y2="220" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="120" y1="220" x2="120" y2="359" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Target zone: deep, cross-court, past the far service line */}
        <rect x="24" y="24" width="94" height="54" rx="3" fill="#16A34A" fillOpacity="0.16" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="71" y="70" textAnchor="middle" fill="#15803D" fontSize="9.5" fontWeight="700">TARGET ZONE</text>
        {/* Opponents defending at their back glass */}
        <circle cx="72" cy="40" r="8" fill={ink} fillOpacity="0.35" />
        <circle cx="168" cy="40" r="8" fill={ink} fillOpacity="0.35" />
        {/* Lob from the opponents */}
        <path d="M 168 48 Q 205 190 172 318" fill="none" stroke={ink} strokeOpacity="0.45" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#bandeja-arrow-ink)" />
        <text x="229" y="150" textAnchor="middle" fill={ink} fillOpacity="0.55" fontSize="9" fontWeight="600" transform="rotate(90 229 150)">THEIR LOB</text>
        {/* Net player: starting spot, step back, contact spot */}
        <circle cx="168" cy="272" r="8" fill="none" stroke="#16A34A" strokeWidth="2" strokeDasharray="3 2" />
        <line x1="168" y1="282" x2="168" y2="306" stroke="#16A34A" strokeWidth="1.5" markerEnd="url(#bandeja-arrow-green)" />
        <circle cx="168" cy="322" r="9" fill="#16A34A" fillOpacity="0.9" />
        <circle cx="72" cy="268" r="9" fill="#16A34A" fillOpacity="0.9" />
        {/* The bandeja */}
        <path d="M 160 314 Q 110 180 74 84" fill="none" stroke="#16A34A" strokeWidth="2.5" markerEnd="url(#bandeja-arrow-green)" />
        <text x="120" y="400" textAnchor="middle" fill={ink} fillOpacity="0.55" fontSize="10" fontWeight="600">STEP BACK, HIT, RETURN TO THE NET</text>
      </svg>
      <figcaption className="mt-4 text-sm text-stone-500">
        The opponents lob over the right-side net player. She turns, takes one or two steps back, hits the bandeja deep and
        cross-court into the green zone, then moves straight back to the net beside her partner.
      </figcaption>
    </figure>
  );
}

export default function BandejaExplainedPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "datePublished": "2026-07-04T00:00:00Z",
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
            The Bandeja in Padel: What It Is and How to Hit It
          </h1>
          <p className="text-lg text-stone-400 mt-3">Padel&apos;s most common overhead, step by step, with drills and how it compares to the víbora and the smash</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>Updated October 31, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>10 min read</span>
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
                <strong>A bandeja is a controlled, sliced overhead in padel.</strong> You hit it at about head height,
                a step or two behind your net position, to answer a lob that is too deep to smash. The ball goes deep
                into the opponents&apos; court and stays low off their back glass, so they can&apos;t attack it, and you
                and your partner keep the net.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mt-3">
                The word is Spanish for <strong>&ldquo;tray&rdquo;</strong> (pronounced ban-DAY-ha), after the open racket
                face at contact, like a waiter carrying a tray.
              </p>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <li className="bg-white border border-stone-200 rounded-lg p-4"><strong className="block text-foreground">Goal</strong><span className="text-stone-600">Keep the net and neutralize the lob</span></li>
              <li className="bg-white border border-stone-200 rounded-lg p-4"><strong className="block text-foreground">Spin and pace</strong><span className="text-stone-600">Slice, medium pace</span></li>
              <li className="bg-white border border-stone-200 rounded-lg p-4"><strong className="block text-foreground">Target</strong><span className="text-stone-600">Deep, usually cross-court, past the service line</span></li>
            </ul>
          </section>

          {/* Why it exists */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why padel players use the bandeja</h2>
            <p className="text-stone-700 leading-relaxed">
              Padel is a net game. The pair standing about 2.5 to 3 meters from the net wins most points, which is why
              good <Link href="/blog/padel-positioning-guide" className={link}>padel positioning</Link> is mostly about
              taking that ground and keeping it. The defending pair&apos;s best way to take it back is the lob: a high
              ball over your heads that pushes you toward your own back glass.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The tempting answer is a full smash. In padel that often backfires. A hard, flat smash into a deep court
              hits the back glass and bounces back out to the opponents at a comfortable height, and the big swing has
              pulled you backward and off balance. They lob again or hit at your feet while you recover. The bandeja
              solves that problem: it is slow enough to control, deep enough to keep the opponents pinned, and short
              enough in its swing that you are back at the net before their next shot.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              That is why it is the overhead you will see most often at every level. A 2020 study of 1,015 overheads from
              eight World Padel Tour finals classified about <strong>56% of men&apos;s overheads and 69% of women&apos;s</strong>{" "}
              as &ldquo;tray&rdquo; smashes, the study&apos;s term for the bandeja, compared with about 27% and 17% for
              flat smashes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7579567/" target="_blank" rel="noopener noreferrer" className={link}>Sánchez-Alcaraz et al., 2020</a>).
            </p>
          </section>

          {/* When to use it */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">When to hit a bandeja (and when not to)</h2>
            <p className="text-stone-700 leading-relaxed mb-5">
              Every time a lob goes up, you have about a second to decide. A simple way to choose:
            </p>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white min-w-[520px]">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">The lob is&hellip;</th>
                    <th className="p-3 font-semibold">Best choice</th>
                    <th className="p-3 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Short, and you are balanced under it</td>
                    <td className="p-3">Smash</td>
                    <td className="p-3">You can hit down at full stretch and finish the point.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Medium depth, one or two steps behind you</td>
                    <td className="p-3">Bandeja</td>
                    <td className="p-3">You can reach it while staying sideways and still return to the net.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Medium depth but slow, with the opponents out of position</td>
                    <td className="p-3">Víbora, once your bandeja is reliable</td>
                    <td className="p-3">You have time to add pace and side spin to force a weak reply.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Very deep, well over your head</td>
                    <td className="p-3">Let it bounce and play it off the back glass, or retreat with your partner</td>
                    <td className="p-3">Reaching back for it pulls you off balance and the overhead lands short.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Over the middle</td>
                    <td className="p-3">Whoever has the forehand overhead there</td>
                    <td className="p-3">With two right-handers that is the left-side player. Agree on it before the match so nobody hesitates.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              For club players, a good default is: bandeja unless the lob is clearly short and you are set under it.
            </p>
          </section>

          {/* How to hit it */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How to hit a bandeja, step by step</h2>
            <p className="text-stone-700 leading-relaxed mb-5">
              Use the <strong>continental grip</strong>, the same grip most players use to volley and serve. You will not
              have time to change grips once the lob is in the air.
            </p>
            <ol className="space-y-4 text-stone-700 leading-relaxed list-decimal pl-5">
              <li>
                <strong>Turn sideways as soon as you see the lob.</strong> Rotate your hips and shoulders so your
                non-hitting shoulder points toward the net. Staying square to the net is the most common sign that the
                overhead will go wrong.
              </li>
              <li>
                <strong>Get the racket up early.</strong> Bring the racket up beside your head as you turn, with the
                hitting elbow at about shoulder height. Point your free hand at the ball to track it. Keep the racket
                up beside your head; dropping it down behind your back, as in a tennis serve, makes the swing too long.
              </li>
              <li>
                <strong>Move back with side steps or crossover steps.</strong> Stay sideways and use small steps so the
                ball comes down in front of you. Backpedaling while facing the net leaves the ball behind your head.
              </li>
              <li>
                <strong>Make contact at about head height, in front and to your hitting side.</strong> Let the ball drop
                a little before you hit it. Contact slightly in front of your body gives you
                control and lets your weight move forward.
              </li>
              <li>
                <strong>Slice through the ball with an open face.</strong> Swing from high to low and across your body,
                brushing the back and outer side of the ball. Keep your wrist firm. The slice is what makes the ball stay
                low after it bounces.
              </li>
              <li>
                <strong>Aim deep, usually cross-court.</strong> The ball should bounce past the service line and reach the
                back glass softly, ideally near the corner. A soft, deep ball dies off the glass. A hard one rebounds into
                the middle of the court where they can attack it.
              </li>
              <li>
                <strong>Finish moving forward and return to the net.</strong> Let the swing carry your weight toward the
                net and take your first step forward as you land. Hitting the bandeja and getting back to the net are
                one movement.
              </li>
            </ol>
          </section>

          <BandejaDiagram />

          {/* Common mistakes */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Common bandeja mistakes and how to fix them</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white min-w-[520px]">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Mistake</th>
                    <th className="p-3 font-semibold">What happens</th>
                    <th className="p-3 font-semibold">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Facing the net square-on</td>
                    <td className="p-3">You can&apos;t move back properly and the swing turns into an arm-only push.</td>
                    <td className="p-3">Turn sideways on the first step, before you move back.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Letting the ball get behind your head</td>
                    <td className="p-3">You lean back and the ball floats short or into the net.</td>
                    <td className="p-3">Read the lob earlier and take one more small step back than feels necessary.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Hitting it flat and hard like a mini-smash</td>
                    <td className="p-3">The ball rebounds off the back glass at a height they can attack.</td>
                    <td className="p-3">Open the face, swing slower, and let the slice do the work.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Aiming short or steeply down</td>
                    <td className="p-3">The ball sits up in the middle of their court.</td>
                    <td className="p-3">Aim for a spot about a meter in front of their back glass.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Snapping the wrist</td>
                    <td className="p-3">Direction and depth change from shot to shot, and the elbow takes the strain.</td>
                    <td className="p-3">Keep the wrist firm and swing from the shoulder.</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Staying back after the shot</td>
                    <td className="p-3">You give up the net anyway, which was the whole reason to hit a bandeja.</td>
                    <td className="p-3">Land moving forward and close the net with your partner.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Bandeja vs víbora vs smash */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bandeja vs víbora vs smash</h2>
            <p className="text-stone-700 leading-relaxed mb-5">
              Padel has three main overheads. They look similar from the stands, and each has a different job.
            </p>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white min-w-[600px]">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold"><span className="sr-only">Compare</span></th>
                    <th className="p-3 font-semibold">Bandeja</th>
                    <th className="p-3 font-semibold">Víbora</th>
                    <th className="p-3 font-semibold">Smash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Spanish name</td>
                    <td className="p-3">Bandeja (tray)</td>
                    <td className="p-3">Víbora (viper)</td>
                    <td className="p-3">Remate</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Main job</td>
                    <td className="p-3">Keep the net, neutralize the lob</td>
                    <td className="p-3">Attack a medium lob and force a weak reply</td>
                    <td className="p-3">Win the point</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Spin</td>
                    <td className="p-3">Slice</td>
                    <td className="p-3">Heavy side spin plus slice</td>
                    <td className="p-3">Flat or topspin</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Contact point</td>
                    <td className="p-3">About head height, in front</td>
                    <td className="p-3">A little lower and more to the side</td>
                    <td className="p-3">Full stretch above the head</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Pace</td>
                    <td className="p-3">Medium</td>
                    <td className="p-3">Fast</td>
                    <td className="p-3">As fast as you can control</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Where it goes</td>
                    <td className="p-3">Deep, soft into the back glass</td>
                    <td className="p-3">Into the side glass near the back, so it skids low</td>
                    <td className="p-3">At their feet, into a gap, or out of the court</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Risk</td>
                    <td className="p-3">Low</td>
                    <td className="p-3">Medium</td>
                    <td className="p-3">High on deep lobs</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">When to learn it</td>
                    <td className="p-3">First</td>
                    <td className="p-3">After the bandeja is automatic</td>
                    <td className="p-3">Early, but use it only on short lobs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              Advanced players also hit smashes designed to leave the court: <strong>por tres</strong> (out over the side
              wall) and <strong>por cuatro</strong> (out over the back wall). Whether you can chase those balls outside
              depends on the court and the club; our <Link href="/rules" className={link}>padel rules guide</Link> covers
              playing outside the court. For quick definitions of these and other shot names, see the{" "}
              <Link href="/get-started/glossary" className={link}>padel glossary</Link>.
            </p>
          </section>

          {/* Drills */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bandeja drills you can do this week</h2>
            <p className="text-stone-700 leading-relaxed mb-5">
              The bandeja improves with repetition. These four drills need one partner and a basket of balls.
            </p>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">1. Shadow swings (5 minutes)</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Without a ball, start in your net position. Turn sideways, raise the racket, take two side steps back,
                  swing, and take two steps forward. Repeat 20 times until the turn happens before the steps.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">2. Feed and recover (10 minutes)</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Your partner stands at the back of the other side and feeds easy lobs. Hit a bandeja, then move forward
                  and touch the net with your racket before the next feed. Do sets of 10 and switch.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">3. Target zone (10 minutes)</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Put a towel or two cones in the far cross-court corner, between the service line and the back glass.
                  Count how many of 20 bandejas land in that zone. Write the number down and try to beat it next session.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">4. Hold the net game (15 minutes)</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Play two against two. One pair starts at the net, the other at the back, and every point starts with a
                  lob. The net pair wins a point only if their bandeja lands past the service line and they keep the net
                  for the rest of the rally. Swap roles every few points and play to 10.
                </p>
              </div>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              A coach will spot problems that drills can hide, and many clubs run overhead clinics. See our guide to{" "}
              <Link href="/padel-lessons" className={link}>padel lessons</Link> or{" "}
              <Link href="/search" className={link}>find a court near you</Link> to practice.
            </p>
          </section>

          {/* Receiving end */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Playing against a good bandeja</h2>
            <p className="text-stone-700 leading-relaxed">
              When your opponents hit good bandejas, your lobs stop working: the ball comes back deep and low, and both of
              them are still at the net. Lob higher and deeper so they have to make contact behind their bodies, aim at the
              weaker overhead (often the backhand side), and mix in low balls at their feet so they can&apos;t wait for the
              lob. A bandeja that lands short is your chance to attack. Our{" "}
              <Link href="/blog/padel-patterns-beginners" className={link}>beginner patterns guide</Link> shows how lobs
              and bandejas fit into a full point.
            </p>
          </section>

          {/* Racket */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Does your racket matter?</h2>
            <p className="text-stone-700 leading-relaxed">
              A little. The bandeja rewards control and a consistent sweet spot more than raw power, so round and soft
              teardrop rackets with a lower balance tend to make it easier to place the ball deep, shot after shot. If you
              are choosing a racket, start with our <Link href="/blog/best-padel-rackets-control" className={link}>best control rackets</Link>{" "}
              and <Link href="/blog/best-round-padel-rackets" className={link}>best round rackets</Link> guides, or read how{" "}
              <Link href="/blog/padel-racket-shapes-explained" className={link}>racket shapes</Link> change the way a racket plays.
              New to the sport? Our <Link href="/how-to-play" className={link}>how to play padel</Link> guide covers the basics
              to learn before overheads.
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
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                Sánchez-Alcaraz, B.J., et al. (2020). &ldquo;Analysis of Performance Parameters of the Smash in Male and Female
                Professional Padel.&rdquo; <em>International Journal of Environmental Research and Public Health</em>, 17(19), 7027.{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7579567/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">pmc.ncbi.nlm.nih.gov/articles/PMC7579567</a>.
                Percentages calculated from the study&apos;s Table 1 counts (291 of 522 men&apos;s and 339 of 493 women&apos;s overheads).
              </li>
              <li>
                International Padel Federation, Rules of Padel (in force from January 1, 2026): court dimensions and service lines.{" "}
                <a href="https://www.padelfip.com/wp-content/uploads/2025/12/FIP_Rules-of-Padel.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">padelfip.com</a>
              </li>
            </ol>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/padel-positioning-guide" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Positioning 101</div>
                <p className="text-stone-400 text-sm mt-1">Where to stand, and why the net wins</p>
              </Link>
              <Link href="/blog/padel-patterns-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">7 Patterns Every Beginner Should Know</div>
                <p className="text-stone-400 text-sm mt-1">Simple point plans that win club matches</p>
              </Link>
              <Link href="/rules" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Rules in Plain English</div>
                <p className="text-stone-400 text-sm mt-1">Scoring, the serve, and when the glass is in play</p>
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
