import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { GEAR_DISCLOSURE } from "@/lib/retailer-links";
import { GiftFilter } from "@/components/gift-guide/gift-filter";
import {
  ALL_GIFT_ITEMS,
  CLUB_GIFT_CARDS,
  EXPERIENCES,
  GIFT_GUIDE_CHECKED,
  GIFT_GUIDE_CHECKED_LABEL,
  GIFT_SECTIONS,
  type ExperienceGift,
  type GiftIcon,
  type GiftItem,
} from "@/data/gift-guide-2026";

const PAGE_URL = "https://www.padelcourtsfinder.com/blog/padel-gifts";
const TITLE = "Best Padel Gifts 2026: The Holiday Gift Guide for Serious Players";
const GIFT_COUNT = ALL_GIFT_ITEMS.length + EXPERIENCES.length;
const DESCRIPTION = `${GIFT_COUNT} padel gifts serious players actually want: 2027 pro rackets, tour bags, padel shoes for him and her, Normatec and Theragun recovery, and padel experiences from a session with a pro to a Ritz-Carlton padel weekend. Prices checked ${GIFT_GUIDE_CHECKED_LABEL}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Padel Courts Finder", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: n % 1 === 0 ? 0 : 2 });

const FAQS = [
  {
    q: "What is the best padel gift for him?",
    a: "For a regular player, the Wilson Rush Pro 5 padel shoes ($170, every size from 8.5 to 11.5 in stock) or the Babolat RH Pro Juan Lebrón tour bag ($165). For an advanced player who follows the pro tour, Agustín Tapia's NOX Genius 18K Alum 2027 ($450) or Arturo Coello's HEAD Coello Pro 2026 ($374.95).",
  },
  {
    q: "What is the best padel gift for her?",
    a: "The Wilson Intrigue Tour women's padel shoes ($170, three colorways, nearly every size in stock), the Lacoste L-Paletero bag ($149.95), or the Wilson Blade V4 racket ($279), a forgiving teardrop that suits most club players.",
  },
  {
    q: "Should I gift a padel racket if I don't know their level?",
    a: "Yes, if you stay with teardrop or round rackets. The Wilson Blade V4 ($279), Bullpadel Neuron 02 2026 ($296.80) and HEAD Speed Pro ($249.95) suit the widest range of club players. Avoid diamond-shaped pro rackets unless you know they already play one. If you are unsure, a Padel USA e-gift card ($50 to $1,000) lets them choose.",
  },
  {
    q: "What do you get a padel player who has everything?",
    a: "An experience: a session or a match with a pro coach (Moorestown Padel Club sells them from $50 to $800), tickets to the Pro Padel League Finals in Miami (December 3 to 6, 2026), a padel weekend at the Ritz-Carlton Key Biscayne (from $1,329 plus tax), or Hyperice Normatec 3 compression boots ($899) for recovery.",
  },
  {
    q: "Can I buy a gift card for a padel club?",
    a: `Many clubs sell them. We checked club websites and found gift cards or credits at ${CLUB_GIFT_CARDS.length} clubs, including Bay Padel in the San Francisco Bay Area, every Padel Haus (Brooklyn, Atlanta, Denver, Nashville), Moorestown Padel Club and Nicol Rackets in New Jersey, and Northwood Racquet & Fitness in Pennsylvania, which adds a 20% holiday bonus. The full list is in the experiences section of this guide.`,
  },
];

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-07-31T00:00:00Z",
  dateModified: `${GIFT_GUIDE_CHECKED}T00:00:00Z`,
  author: { "@type": "Organization", name: "Padel Courts Finder", url: "https://www.padelcourtsfinder.com" },
  publisher: {
    "@type": "Organization",
    name: "Padel Courts Finder",
    logo: { "@type": "ImageObject", url: "https://www.padelcourtsfinder.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ALL_GIFT_ITEMS.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: item.name,
      image: item.image ? item.image.split("?")[0] : "https://www.padelcourtsfinder.com/og/default.png",
      offers: {
        "@type": "Offer",
        price: item.price.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: item.href,
        seller: { "@type": "Organization", name: item.store },
      },
    },
  })),
};

/** CSS for the filter chips: hide cards, then sections, that don't match */
const FILTER_CSS = ["him", "her", "u150", "m150", "p400"]
  .map(
    (t) =>
      `#gift-guide[data-filter="${t}"] [data-gift]:not([data-tags~="${t}"]),` +
      `#gift-guide[data-filter="${t}"] [data-gift-section]:not(:has([data-tags~="${t}"])){display:none}`,
  )
  .concat([
    `#gift-guide[data-filter="exp"] [data-gift-section]:not([data-gift-section="experiences"]){display:none}`,
    `#gift-guide[data-filter] [data-hide-when-filtered]{display:none}`,
  ])
  .join("");

/* -------------------------------------------------------------------------- */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full bg-court px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-turf">
      {children}
    </span>
  );
}

function IconTile({ icon }: { icon: GiftIcon }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
      <svg viewBox="0 0 120 120" className="h-28 w-28 text-stone-400" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icon === "compression" && (
          <>
            <path d="M38 14h20v62c0 10 6 16 18 20l14 4c6 2 8 6 8 10H38z" />
            <path d="M38 34h20M38 50h20M38 66h22M46 84l14 4" />
          </>
        )}
        {icon === "massager" && (
          <>
            <rect x="22" y="30" width="62" height="28" rx="14" />
            <path d="M84 44h12" />
            <circle cx="102" cy="44" r="7" />
            <path d="M44 58l-6 46h20l6-46" />
          </>
        )}
        {icon === "sleeve" && <path d="M40 20h40l-6 80H46z" />}
      </svg>
    </div>
  );
}

function GiftCard({ item }: { item: GiftItem }) {
  const buyLabel = item.store === "Amazon" ? "Check price on Amazon" : `Buy at ${item.store}`;
  return (
    <article id={item.id} data-gift data-tags={item.tags.join(" ")} className="group flex scroll-mt-36 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div className="relative aspect-[4/3] w-full bg-white">
        {item.badge && <Badge>{item.badge}</Badge>}
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]" />
        ) : (
          item.icon && <IconTile icon={item.icon} />
        )}
      </div>
      <div className="flex flex-1 flex-col border-t border-stone-100 p-5">
        <h3 className="text-lg font-bold leading-snug text-foreground">{item.name}</h3>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-2 text-sm">
          <span className="font-bold text-padel-green-dark">{item.priceLabel ?? money(item.price)}</span>
          {item.compareAt && <span className="text-stone-400 line-through">{money(item.compareAt)}</span>}
          <span className="text-stone-400">at {item.store}</span>
        </div>
        <p className="mt-3 font-semibold leading-snug text-stone-800">{item.verdict}</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.body}</p>
        <dl className="mt-3 space-y-1 text-[13px] leading-snug">
          <div className="flex gap-1.5"><dt className="font-semibold text-stone-700">Best for:</dt><dd className="text-stone-600">{item.bestFor}</dd></div>
          {item.skipIf && <div className="flex gap-1.5"><dt className="font-semibold text-stone-700">Skip if:</dt><dd className="text-stone-600">{item.skipIf}</dd></div>}
        </dl>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
          <TrackedLink href={item.href} type="affiliate" productName={item.name} target="_blank" className="inline-flex items-center rounded-lg bg-padel-green px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-padel-green-dark">
            {buyLabel} &rarr;
          </TrackedLink>
          {item.reviewHref && <Link href={item.reviewHref} className="text-sm font-medium text-stone-600 underline-offset-2 hover:underline">Read our review</Link>}
        </div>
      </div>
    </article>
  );
}

/** Court seen from above, for experience cards without a club photo */
function CourtArt() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,oklch(0.3_0.06_160),transparent_70%)]">
      <svg viewBox="0 0 200 100" className="h-3/4 w-auto" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <g className="text-turf/70">
          <rect x="10" y="10" width="180" height="80" rx="2" />
          <path d="M100 10v80" strokeWidth="2" />
          <path d="M37 10v80M163 10v80M37 50h126" />
        </g>
        <circle cx="128" cy="34" r="3" className="fill-turf text-turf" />
      </svg>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: ExperienceGift }) {
  return (
    <article id={exp.id} data-gift data-tags={exp.tags.join(" ")} className="relative flex scroll-mt-36 flex-col overflow-hidden rounded-2xl border border-white/10 bg-court-panel">
      <div className="relative aspect-[16/9] w-full">
        {exp.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={exp.image} alt={exp.clubName ?? exp.title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <CourtArt />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-court-panel via-transparent" />
      </div>
      {exp.badge && <Badge>{exp.badge}</Badge>}
      <div className="flex flex-1 flex-col p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-turf">{exp.where}</div>
        <h3 className="mt-1.5 text-lg font-bold leading-snug text-white">{exp.title}</h3>
        <div className="mt-1 text-sm text-stone-300">
          <span className="font-semibold text-white">{exp.priceLabel}</span>
          {exp.when && <span> &middot; {exp.when}</span>}
        </div>
        <p className="mt-3 font-semibold leading-snug text-stone-100">{exp.verdict}</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-300">{exp.body}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
          <TrackedLink href={exp.href} type={exp.clubName ? "website" : "retailer"} clubName={exp.clubName} productName={exp.title} target="_blank" rel="noopener" className="inline-flex items-center rounded-lg bg-turf px-4 py-2.5 text-sm font-semibold text-court transition-colors hover:bg-white">
            {exp.linkLabel} &rarr;
          </TrackedLink>
          {exp.clubSlug && <Link href={`/courts/${exp.clubSlug}`} className="text-sm font-medium text-stone-300 underline-offset-2 hover:text-white hover:underline">About the club</Link>}
        </div>
      </div>
    </article>
  );
}

function SectionHeader({ kicker, title, intro }: { kicker: string; title: string; intro: string }) {
  return (
    <header className="mb-7 max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-padel-green-dark">{kicker}</div>
      <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <p className="mt-3 leading-relaxed text-stone-600">{intro}</p>
    </header>
  );
}

const TOP_PICKS: { label: string; id: string; name: string; note: string }[] = [
  { label: "The racket", id: "nox-genius-18k-alum-2027", name: "NOX Genius 18K Alum 2027", note: "Tapia's new racket, $450" },
  { label: "The safe racket", id: "wilson-blade-v4", name: "Wilson Blade V4", note: "Fits most club players, $279" },
  { label: "The experience", id: "moorestown-pro-sessions", name: "A session with a pro", note: "$50 to $800 in NJ" },
  { label: "The splurge", id: "normatec-3-legs", name: "Normatec 3 boots", note: "Recovery, $899" },
];

/* -------------------------------------------------------------------------- */

export default function PadelGiftsPage() {
  const [safeRackets, flagship, ...rest] = GIFT_SECTIONS;
  const toc = [
    { id: safeRackets.id, label: "Rackets for any level" },
    { id: flagship.id, label: "Pro rackets" },
    { id: "experiences", label: "Experiences" },
    ...rest.map((s) => ({ id: s.id, label: s.kicker })),
  ];

  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }} />
      <style dangerouslySetInnerHTML={{ __html: FILTER_CSS }} />

      <header className="grain bg-court">
        <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-14 lg:px-8">
          <div className="mb-8"><Link href="/blog" className="text-sm text-stone-400 hover:text-turf">&larr; Back to Blog</Link></div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-turf">The holiday gift guide &middot; 2026</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            Best Padel Gifts 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-300 md:text-xl">
            {GIFT_COUNT}{" "}gifts for people who already spend their evenings on a padel court: the 2027 pro rackets, proper bags and shoes, the recovery gear serious players use, and padel experiences you can&apos;t put in a box.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-400">
            <span><span className="font-semibold text-white">{GIFT_COUNT}</span> gifts</span>
            <span><span className="font-semibold text-white">{CLUB_GIFT_CARDS.length}</span> clubs that sell gift cards</span>
            <span>Prices checked <span className="font-semibold text-white">{GIFT_GUIDE_CHECKED_LABEL}</span></span>
          </div>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Top picks */}
          <div className="relative -mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {TOP_PICKS.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">{p.label}</div>
                <div className="mt-1 font-bold leading-snug text-foreground">{p.name}</div>
                <div className="mt-0.5 text-sm text-stone-500">{p.note}</div>
              </a>
            ))}
          </div>

          {/* Intro */}
          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_17rem]">
            <div className="max-w-2xl space-y-4 leading-relaxed text-stone-700">
              <p className="text-lg">
                The people on your list who play padel already pay for court time every week, and many of them have spent $300 or more on a racket. So this guide skips the novelty mugs. It is the gear and experiences a serious player would actually want, chosen by the team that maintains the most complete directory of US padel clubs.
              </p>
              <p>
                Every product price and stock level was read from the store&apos;s own page on {GIFT_GUIDE_CHECKED_LABEL}. Every club offer comes from the club&apos;s own website. Prices move during the holidays, so check the store page before you buy.
              </p>
              <p>
                If you&apos;re buying a racket and don&apos;t know their level, start with the first section. If they already have everything, skip to the <a href="#experiences" className="font-medium text-padel-green-dark underline underline-offset-2">experiences</a>.
              </p>
            </div>
            <nav aria-label="In this guide" className="h-fit rounded-xl border border-stone-200 bg-white p-5 text-sm">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-500">In this guide</div>
              <ol className="space-y-1.5">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-stone-700 hover:text-padel-green-dark">{t.label}</a></li>
                ))}
                <li><a href="#faq" className="text-stone-700 hover:text-padel-green-dark">Questions</a></li>
              </ol>
            </nav>
          </div>

          <p className="mt-8 rounded-lg border border-stone-200 bg-white/70 px-4 py-3 text-xs italic leading-relaxed text-stone-500">
            {GEAR_DISCLOSURE} Club and event links are not affiliate links.
          </p>
        </div>

        {/* Sticky filter */}
        <div className="sticky top-16 z-30 mt-10 border-y border-stone-200 bg-[#f7f6f2]/95 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><GiftFilter /></div>
        </div>

        <div id="gift-guide" className="mx-auto max-w-5xl space-y-20 px-4 py-14 sm:px-6 lg:px-8">
          {[safeRackets, flagship].map((section) => (
            <section key={section.id} id={section.id} data-gift-section={section.id} className="scroll-mt-36">
              <SectionHeader kicker={section.kicker} title={section.title} intro={section.intro} />
              <div className="grid gap-6 sm:grid-cols-2">
                {section.items.map((item) => <GiftCard key={item.id} item={item} />)}
              </div>
              {section.id === safeRackets.id && (
                <aside data-hide-when-filtered className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
                  <h3 className="font-bold text-foreground">Not sure which racket? Here&apos;s how to tell</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-600">
                    <li><span className="font-semibold text-stone-800">Look at their current racket.</span> The shape is usually printed on the frame or easy to find by searching its name. If it is round or a teardrop, stay with those shapes.</li>
                    <li><span className="font-semibold text-stone-800">Ask how often they play.</span> Once a week or less: a teardrop like the Blade V4. Three or more times a week and playing tournaments: anything in the next section.</li>
                    <li><span className="font-semibold text-stone-800">Still unsure?</span> A <a href="#padel-usa-gift-card" className="font-medium text-padel-green-dark underline underline-offset-2">Padel USA e-gift card</a> covers every racket in this guide. Our <Link href="/blog/padel-racket-shapes-explained" className="font-medium text-padel-green-dark underline underline-offset-2">racket shapes guide</Link> explains the difference in two minutes.</li>
                  </ul>
                </aside>
              )}
            </section>
          ))}

          {/* Experiences */}
          <section id="experiences" data-gift-section="experiences" className="grain -mx-4 scroll-mt-36 rounded-none bg-court px-4 py-14 sm:-mx-6 sm:rounded-3xl sm:px-8 md:px-10">
            <header className="relative mb-8 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-turf">Experiences</div>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">For the player who has everything: court time, a coach or a trip</h2>
              <p className="mt-3 leading-relaxed text-stone-300">
                The gift a padel player remembers is usually time on court. These are coaching sessions, club credit, a resort weekend and pro events, each checked on the organizer&apos;s or club&apos;s own website.
              </p>
            </header>
            <div className="relative grid gap-6 sm:grid-cols-2">
              {EXPERIENCES.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)}
            </div>

            <div className="relative mt-12" data-hide-when-filtered>
              <h3 className="text-xl font-bold text-white">Clubs that sell gift cards</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-300">
                Most padel clubs do not sell gift cards on their websites. These {CLUB_GIFT_CARDS.length} do, checked on {GIFT_GUIDE_CHECKED_LABEL}. If their club is not here, call the front desk: many sell credit in person.
              </p>
              <ul className="mt-5 divide-y divide-white/10 rounded-xl border border-white/10 md:hidden">
                {CLUB_GIFT_CARDS.map((c) => (
                  <li key={c.clubName} className="p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">{c.state}</div>
                    <Link href={`/courts/${c.clubSlug}`} className="mt-0.5 block font-medium text-white hover:text-turf">{c.clubName}</Link>
                    <p className="mt-1 text-sm text-stone-300">{c.offer}</p>
                    <TrackedLink href={c.href} type="website" clubName={c.clubName} target="_blank" rel="noopener" className="mt-2 inline-block text-sm font-medium text-turf hover:text-white">Buy a gift card &rarr;</TrackedLink>
                  </li>
                ))}
              </ul>
              <div className="relative mt-5 hidden overflow-x-auto rounded-xl border border-white/10 md:block">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-xs uppercase tracking-wider text-stone-400">
                    <tr><th className="px-4 py-3 font-semibold">State</th><th className="px-4 py-3 font-semibold">Club</th><th className="px-4 py-3 font-semibold">What you can buy</th><th className="px-4 py-3 font-semibold"><span className="sr-only">Link</span></th></tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {CLUB_GIFT_CARDS.map((c) => (
                      <tr key={c.clubName} className="align-top">
                        <td className="whitespace-nowrap px-4 py-3 text-stone-400">{c.state}</td>
                        <td className="px-4 py-3"><Link href={`/courts/${c.clubSlug}`} className="font-medium text-white hover:text-turf">{c.clubName}</Link></td>
                        <td className="px-4 py-3 text-stone-300">{c.offer}</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <TrackedLink href={c.href} type="website" clubName={c.clubName} target="_blank" rel="noopener" className="font-medium text-turf hover:text-white">Buy &rarr;</TrackedLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-stone-400">
                Run a club that sells gift cards or lesson packs? Email <a href="mailto:info@padelcourtsfinder.com" className="text-turf hover:text-white">info@padelcourtsfinder.com</a> and we will add it.
              </p>
            </div>
          </section>

          {rest.map((section) => (
            <section key={section.id} id={section.id} data-gift-section={section.id} className="scroll-mt-36">
              <SectionHeader kicker={section.kicker} title={section.title} intro={section.intro} />
              <div className="grid gap-6 sm:grid-cols-2">
                {section.items.map((item) => <GiftCard key={item.id} item={item} />)}
              </div>
            </section>
          ))}

          <section id="faq" data-hide-when-filtered className="scroll-mt-36">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Questions people ask</h2>
            <div className="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
              {FAQS.map((f) => (
                <div key={f.q} className="p-5 md:p-6">
                  <h3 className="font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone-600">
              Shopping for a different occasion? We also keep a <Link href="/blog/padel-gifts-mothers-day-2026" className="font-medium text-padel-green-dark hover:underline">Mother&apos;s Day</Link> and a <Link href="/blog/padel-gifts-fathers-day-2026" className="font-medium text-padel-green-dark hover:underline">Father&apos;s Day</Link> guide.
            </p>
          </section>
        </div>

        <section className="grain bg-court">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Keep reading</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/blog/best-padel-rackets-2026", t: "Best Padel Rackets 2026", d: "Every racket we recommend, by level" },
                { href: "/blog/best-padel-shoes", t: "Best Padel Shoes", d: "What to look for in a court shoe" },
                { href: "/blog/best-padel-bags", t: "Best Padel Bags", d: "Backpacks and tour bags compared" },
                { href: "/search", t: "Find a Padel Club", d: "Every padel club in the US" },
              ].map((k) => (
                <Link key={k.href} href={k.href} className="rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <div className="font-semibold text-white">{k.t}</div>
                  <p className="mt-1 text-sm text-stone-400">{k.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
