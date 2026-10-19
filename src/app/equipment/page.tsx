import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';
import { BuyButtons, StoreTextLink } from '@/components/gear/buy-buttons';
import { amazonLink, asinFromUrl, GEAR_DISCLOSURE, PADEL_USA, padelUsaLink } from '@/lib/retailer-links';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HeroVideo } from "@/components/hero-video";
import { RacketQuiz } from "@/components/racket-quiz";

export const metadata: Metadata = {
  title: "Padel Equipment Guide - Rackets, Balls & Gear | Padel Courts Finder",
  description: "Everything you need to know about padel equipment including racket selection, balls, shoes, bags, and accessories for players of all levels.",
  keywords: [
    "padel equipment",
    "padel racket",
    "padel racquet",
    "padel balls",
    "padel shoes",
    "padel gear",
    "padel accessories",
    "best padel racket",
  ],
  openGraph: {
    title: "Padel Equipment Guide - Rackets, Balls & Gear",
    description: "Everything you need to know about padel equipment including racket selection, balls, shoes, bags, and accessories for players of all levels.",
    url: "https://www.padelcourtsfinder.com/equipment",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Equipment Guide - Rackets, Balls & Gear",
    description: "Everything you need to know about padel equipment including racket selection, balls, shoes, bags, and accessories for players of all levels.",
  },
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/equipment",
  },
};

/** Plain text of a markdown link's children, used as the tracked product name */
function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  return '';
}

/**
 * Links inside content/equipment-guide.md. Markdown cannot set rel, so every
 * link is routed here:
 * - internal paths and anchors stay plain site links
 * - amazon.com links are affiliate links (tag forced to padel02-20); a product
 *   we also link at Padel USA gets the same "also at" link the gear guides use
 * - padelusa.com links get the Padel USA referral parameters
 * - any other store (HEAD, Holabird, Padel Market USA, NOX) is a plain
 *   retailer link: rel="nofollow noopener noreferrer", no "sponsored"
 * TrackedLink sets rel="sponsored nofollow noopener noreferrer" on affiliates.
 */
function MarkdownLink({ href = '', children }: { href?: string; children?: ReactNode }) {
  if (href.startsWith('/') || href.startsWith('#')) {
    return <Link href={href}>{children}</Link>;
  }
  const name = textOf(children);
  let host = '';
  try {
    host = new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return <a href={href}>{children}</a>;
  }
  if (host === 'amazon.com') {
    const asin = asinFromUrl(href);
    if (asin) {
      return <StoreTextLink href={amazonLink(asin)} productName={name}>{children}</StoreTextLink>;
    }
    const url = new URL(href);
    url.searchParams.set('tag', 'padel02-20');
    return (
      <TrackedLink href={url.toString()} type="affiliate" productName={name} target="_blank">
        {children}
      </TrackedLink>
    );
  }
  if (host === 'padelusa.com') {
    return (
      <TrackedLink href={padelUsaLink(href)} type="affiliate" productName={name} target="_blank">
        {children}
      </TrackedLink>
    );
  }
  return (
    <TrackedLink href={href} type="retailer" productName={name} target="_blank">
      {children}
    </TrackedLink>
  );
}

const markdownComponents: Components = {
  a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
};

/**
 * One pick per category, each the pick its gear guide recommends, at the
 * price that guide shows (checked October 2026). BuyButtons adds the Padel
 * USA button when the product is in PADEL_USA (src/lib/retailer-links.ts).
 */
const TOP_PICKS = [
  { label: 'Beginner racket', name: 'Babolat Contact', price: '$89.95', asin: 'B0BBPZLRVP', note: 'A round, 340 g fiberglass racket and our top pick for complete beginners.', guide: '/blog/best-padel-rackets-beginners', guideLabel: 'Beginner racket guide' },
  { label: 'Budget racket', name: 'Wilson Optix V1', price: '$109.00', asin: 'B0DX2M3JYY', note: 'A soft round racket and the most comfortable, forgiving pick for about $110.', guide: '/blog/best-budget-padel-rackets', guideLabel: 'Budget racket guide' },
  { label: 'Intermediate racket', name: 'Wilson Blade Elite V2', price: '$208.58', asin: 'B09TSWCFHD', note: 'A teardrop for all-court players who want balance.', guide: '/blog/best-padel-rackets-intermediate', guideLabel: 'Intermediate racket guide' },
  { label: 'Advanced racket', name: 'NOX AT10 Genius 18K', price: '$259.99', asin: 'B0DHT1DVW1', note: 'A teardrop with adjustable balance and our best overall advanced racket.', guide: '/blog/best-padel-rackets-advanced', guideLabel: 'Advanced racket guide' },
  { label: 'Court shoes', name: "HEAD Men's Sprint Pro 4.0", price: '$109.00', asin: 'B0G2TH1X7V', note: "An omni-style outsole for sand-dressed turf, also made in a women's version.", guide: '/blog/best-padel-shoes', guideLabel: 'Padel shoe guide' },
  { label: 'Balls', name: 'HEAD Padel Pro S+', price: '$14.95', asin: 'B0DHWHX9SG', note: `HEAD's current version of the ball most US clubs stock, listed at ${PADEL_USA.B0DHWHX9SG.price} a can at Padel USA.`, guide: '/blog/best-padel-balls', guideLabel: 'Padel ball guide' },
  { label: 'Overgrips', name: 'Wilson Pro Overgrip 12-Pack', price: '$26.99', asin: 'B002GUEXTQ', note: 'About $2 a grip, with the tacky feel most club players use.', guide: '/blog/padel-accessories', guideLabel: 'Accessories guide' },
  { label: 'Bag', name: 'Babolat Court Lite Backpack', price: '$51.80', asin: 'B0F2YBVGMG', note: 'A backpack with a racket compartment and shoe pocket for players who carry one racket.', guide: '/blog/best-padel-bags', guideLabel: 'Padel bag guide' },
] as const;

const BUY_BUTTON =
  'inline-flex items-center justify-center w-full px-4 py-2 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-sm transition-all duration-200';

export default function EquipmentPage() {
  const filePath = path.join(process.cwd(), 'content', 'equipment-guide.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="border-b bg-muted/40">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Equipment</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Padel Equipment Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              What to buy, what it costs and where to buy it in the US
            </p>
            <p className="text-sm text-muted-foreground mt-3">Last updated: October 2026</p>
          </div>
          <div className="-mb-6 mt-4">
            <HeroVideo />
          </div>
        </div>
      </section>

      {/* Racket Finder Quiz */}
      <section className="container mx-auto px-4 pt-4 pb-2">
        <div className="max-w-4xl mx-auto">
          <RacketQuiz />
        </div>
      </section>

      {/* Affiliate disclosure + top picks */}
      <section className="container mx-auto px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 mb-8 flex items-start gap-2">
            <span className="text-stone-400 mt-0.5 text-sm">&#8505;</span>
            <p className="text-xs text-stone-500 italic leading-relaxed">{GEAR_DISCLOSURE}</p>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Top picks from our gear guides</h2>
          <p className="text-sm text-stone-600 mb-5">
            One pick per category, at the price each guide shows (checked October 2026). Prices change, so check the store.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {TOP_PICKS.map((p) => (
              <div key={p.asin} className="min-w-0 bg-white border border-stone-200 rounded-xl p-5 flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">{p.label}</span>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold leading-snug min-w-0">{p.name}</h3>
                  <span className="bg-stone-900 text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">{p.price}</span>
                </div>
                <p className="text-sm text-stone-600 mb-3">{p.note}</p>
                <Link href={p.guide} className="text-sm text-primary hover:underline mb-4">
                  {p.guideLabel} &rarr;
                </Link>
                <div className="mt-auto">
                  <BuyButtons
                    href={amazonLink(p.asin)}
                    productName={p.name}
                    className={BUY_BUTTON}
                    wrapperClassName="flex flex-col gap-2"
                    arrow={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <article className="prose prose-lg prose-gray dark:prose-invert max-w-4xl mx-auto
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
          prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:border-b prose-h2:pb-2
          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
          prose-p:text-stone-700 dark:prose-p:text-stone-300 prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-primary prose-strong:font-semibold
          prose-ul:my-6 prose-li:my-2
          prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-muted prose-pre:border
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:italic
          prose-table:border-collapse prose-table:w-full
          prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
          prose-td:p-3 prose-td:border-t">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </article>
        <div className="max-w-4xl mx-auto mt-12 border-t pt-8">
          <h2 className="text-lg font-semibold mb-4">Related</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/blog/padel-racket-shapes-explained" className="text-primary hover:underline">Racket Shapes Explained</Link>
            <Link href="/blog/best-padel-rackets-beginners" className="text-primary hover:underline">Best Beginner Rackets</Link>
            <Link href="/blog/best-budget-padel-rackets" className="text-primary hover:underline">Best Budget Rackets</Link>
            <Link href="/blog/best-padel-rackets-intermediate" className="text-primary hover:underline">Best Intermediate Rackets</Link>
            <Link href="/blog/best-padel-rackets-advanced" className="text-primary hover:underline">Best Advanced Rackets</Link>
            <Link href="/blog/best-padel-rackets-power" className="text-primary hover:underline">Best Power Rackets</Link>
            <Link href="/blog/best-padel-rackets-control" className="text-primary hover:underline">Best Control Rackets</Link>
            <Link href="/blog/best-padel-shoes" className="text-primary hover:underline">Best Padel Shoes</Link>
            <Link href="/blog/best-padel-balls" className="text-primary hover:underline">Best Padel Balls</Link>
            <Link href="/blog/best-padel-bags" className="text-primary hover:underline">Best Padel Bags</Link>
            <Link href="/blog/padel-accessories" className="text-primary hover:underline">Padel Accessories</Link>
            <Link href="/how-to-play" className="text-primary hover:underline">How to Play</Link>
            <Link href="/rules" className="text-primary hover:underline">Rules of Padel</Link>
            <Link href="/search" className="text-primary hover:underline">Find Courts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
