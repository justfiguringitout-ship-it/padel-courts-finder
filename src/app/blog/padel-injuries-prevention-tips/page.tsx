import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

// Guest article by Isabel Rencoret (Just Muv), published as part of an article
// swap agreed 2026-09-24. Her text is reproduced as she wrote it; only layout
// and links are ours. PREVIEW: unlisted + noindex until Dito approves. To go
// live, set INDEXED to true and add the slug to src/data/blog-slugs.json,
// src/data/page-dates.json and the index in src/app/blog/page.tsx.
const INDEXED = true;

const URL = "https://www.padelcourtsfinder.com/blog/padel-injuries-prevention-tips";
const TITLE = "Padel Injuries: 6 Tips to Stay on Court Longer (From a Sports Physical Therapist)";
const DESC =
  "A sports physical therapist explains why padel injuries like tennis elbow, shoulder pain and lower back pain keep coming back, and six ways to prevent them.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  robots: INDEXED ? undefined : { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: "Padel Courts Finder",
    type: "article",
    images: [
      {
        url: "https://www.padelcourtsfinder.com/images/guest/justmuv-train-beyond-the-court.jpg",
        width: 1600,
        height: 1066,
        alt: "A padel player reaching for a low ball on a blue court",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function PadelInjuriesPreventionTipsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.padelcourtsfinder.com/images/guest/justmuv-train-beyond-the-court.jpg",
    "datePublished": "2026-09-29T00:00:00Z",
    "dateModified": "2026-09-29T00:00:00Z",
    "author": {
      "@type": "Person",
      "name": "Isabel Rencoret",
      "jobTitle": "Sports physical therapist",
      "url": "https://justmuv.cl",
      "worksFor": { "@type": "Organization", "name": "Just Muv", "url": "https://justmuv.cl" }
    },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": URL }
  };

  const h2 = "text-2xl font-bold text-foreground mb-4";
  const p = "text-stone-700 leading-relaxed";
  const helps = "text-stone-700 leading-relaxed mt-4 border-l-4 border-padel-green bg-white rounded-r-lg px-5 py-4";

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />

      <div className="h-1 bg-padel-green" />

      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Guest Article</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Padel Injuries: 6 Tips to Stay on Court Longer
          </h1>
          <p className="text-lg text-stone-400 mt-3">From a sports physical therapist</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>September 29, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>4 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">
            By Isabel Rencoret, sports physical therapist and founder of Just Muv
          </div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <figure>
            <Image
              src="/images/guest/justmuv-train-beyond-the-court.jpg"
              alt="A padel player in sunglasses reaching low for a forehand on a blue court"
              width={1600}
              height={1066}
              className="w-full h-auto rounded-xl"
              priority
            />
            <figcaption className="text-xs text-stone-400 mt-2">Photo courtesy of Just Muv.</figcaption>
          </figure>

          <section>
            <p className={p}>
              Padel is growing fast in the US, and many new players come from tennis, pickleball or no racquet
              sport at all. It&apos;s easy to learn, social and addictive, which is exactly why so many players go
              from one match a week to four or five in a short time. That&apos;s usually when the body starts to
              complain.
            </p>
            <p className={`${p} mt-4`}>
              Most padel injuries aren&apos;t accidents. They&apos;re <strong>overload injuries</strong>: tennis
              elbow, shoulder pain, lower back pain and knee discomfort that show up gradually and tend to come
              back even after you rest. The reason is usually not the painful spot itself, but the way your whole
              body works together to hit the ball.
            </p>
          </section>

          <section>
            <h2 className={h2}>Why padel injuries keep coming back: the kinetic chain</h2>
            <p className={p}>
              Every padel shot is a chain reaction: your feet push against the ground, your hips and trunk rotate,
              your shoulder blade stabilizes, and only then does the energy travel through your shoulder, elbow
              and wrist to the racket.
            </p>
            <p className={`${p} mt-4`}>
              When one link in that chain doesn&apos;t do its job, like stiff hips, a trunk that doesn&apos;t
              rotate well or a shoulder blade that doesn&apos;t stabilize, another link has to compensate. In
              padel, the ones that usually pay the price are the{" "}
              <strong>elbow, the shoulder and the lower back</strong>. Resting calms the symptom, but if the chain
              doesn&apos;t change, the pain often returns as soon as you&apos;re back on court.
            </p>
            <p className={`${p} mt-4`}>
              The good news: working on the whole chain not only reduces your injury risk, it also makes your
              shots more powerful and efficient.
            </p>
          </section>

          <section>
            <h2 className={h2}>1. Warm up the whole chain, not just your arm</h2>
            <p className={p}>
              A few swings and some stretching aren&apos;t enough. A good 8&ndash;10 minute warm-up prepares every
              link:
            </p>
            <ul className="mt-4 space-y-2 text-stone-700 leading-relaxed list-disc pl-5">
              <li><strong>Hips and ankles (2 min):</strong> leg swings and lunges with a trunk rotation.</li>
              <li><strong>Upper back (2 min):</strong> standing rotations or &ldquo;open book&rdquo; on the floor.</li>
              <li><strong>Shoulder blades (2 min):</strong> band pull-aparts or wall slides.</li>
              <li><strong>Footwork (2 min):</strong> split steps and lateral shuffles.</li>
              <li><strong>Progressive shots:</strong> start soft and increase intensity little by little.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>2. Protect your elbow by hitting with your hips and trunk</h2>
            <p className={p}>
              Tennis elbow (lateral epicondylitis) is one of the most common padel injuries. It usually appears
              when the forearm does work that should come from the rest of the body: arm-only shots, a tight grip,
              or a racket that&apos;s too heavy for your current strength.
            </p>
            <p className={helps}>
              <strong>What helps:</strong> let your hips and trunk start the rotation, relax your grip between
              shots, and strengthen your forearm and wrist gradually (for example, slow wrist extensions with a
              light weight).
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Keep your shoulder blade in the game</h2>
            <p className={p}>
              Overheads, bandejas and v&iacute;boras put a lot of demand on the shoulder. If the upper back is
              stiff or the shoulder blade doesn&apos;t stabilize, the shoulder joint ends up absorbing most of the
              load.
            </p>
            <p className={helps}>
              <strong>What helps:</strong> thoracic mobility work (rotations, extensions over a foam roller) and
              exercises that activate the muscles around the shoulder blade, like band pull-aparts, rows and wall
              slides.
            </p>
          </section>

          <section>
            <h2 className={h2}>4. Train your core for rotation, not for crunches</h2>
            <p className={p}>
              In padel, the core&apos;s job is to <strong>transfer force</strong> from your legs to your arms and
              to control rotation. Lower back pain often shows up when the hips don&apos;t rotate enough and the
              lower back tries to make up for it.
            </p>
            <p className={helps}>
              <strong>What helps:</strong> anti-rotation exercises (like the Pallof press), side planks, and hip
              hinge work to strengthen your glutes, combined with hip mobility.
            </p>
          </section>

          <section>
            <h2 className={h2}>5. Prepare your knees for stops, lunges and changes of direction</h2>
            <p className={p}>
              Padel is full of short sprints, sudden stops and deep lunges to reach low balls. Knees handle this
              much better when the hips and thighs are strong and the ankles move well.
            </p>
            <p className={helps}>
              <strong>What helps:</strong> squats, lunges and single-leg exercises (like step-downs or single-leg
              deadlifts), plus some ankle mobility. Good padel shoes with lateral support also make a difference.
            </p>
          </section>

          <section>
            <h2 className={h2}>6. Manage your load</h2>
            <p className={p}>
              One of the most common patterns in amateur players is increasing the number of matches too quickly.
              Your tendons need time to adapt.
            </p>
            <p className={helps}>
              <strong>What helps:</strong> increase your playing time gradually, include at least one or two short
              strength sessions a week (20 minutes is enough), and give your body time to recover, which means
              sleeping well too.
            </p>
          </section>

          <section>
            <h2 className={h2}>When to see a professional</h2>
            <p className={p}>
              If pain lasts more than one or two weeks, gets worse while you play, wakes you up at night, or comes
              with swelling or numbness, it&apos;s a good idea to see a physical therapist. The earlier you address
              it, the easier it usually is to fix.
            </p>
          </section>

          <section>
            <h2 className={h2}>The bottom line</h2>
            <p className={p}>
              Staying injury-free in padel isn&apos;t about avoiding the game, it&apos;s about preparing your body
              for it. When the whole chain works together, you hit harder, move better and spend more time on
              court.
            </p>
          </section>

          {/* Author */}
          <section className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <Image
              src="/images/guest/justmuv-app-screens.jpg"
              alt="Three screens from the Just Muv padel training app showing a training plan, routines and a workout"
              width={1600}
              height={1066}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">About the author</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                Isabel Rencoret is a Chilean sports physical therapist and the founder of{" "}
                <a href="https://justmuv.cl" target="_blank" rel="noopener" className="text-padel-green hover:underline font-medium">
                  Just Muv
                </a>
                , a padel training app that helps players improve their physical performance and prevent injuries
                with short routines designed around the kinetic chain.
              </p>
            </div>
          </section>

          <p className="text-xs text-stone-400 leading-relaxed">
            This article is general information and is not a substitute for advice from a medical professional who
            has examined you. The views are the author&apos;s own.
          </p>
        </div>

        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/best-padel-shoes" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Padel Shoes</div>
                <p className="text-stone-400 text-sm mt-1">Lateral support and grip for the stops and lunges Isabel describes</p>
              </Link>
              <Link href="/blog/padel-bandeja-explained" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">The Bandeja, Explained</div>
                <p className="text-stone-400 text-sm mt-1">How to hit the overhead that asks the most of your shoulder</p>
              </Link>
              <Link href="/how-to-play" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">How to Play Padel</div>
                <p className="text-stone-400 text-sm mt-1">The beginner&apos;s guide to rules, scoring and the walls</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a Court Near You</div>
                <p className="text-stone-400 text-sm mt-1">Every padel club we list, by city and state</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
