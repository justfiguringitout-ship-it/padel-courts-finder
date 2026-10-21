import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, Globe, Instagram, Phone, Navigation, BadgeCheck, ArrowRight } from "lucide-react";
import type { SpotlightCta, SpotlightCtaKind, SpotlightImage } from "@/data/spotlights";
import { getAllSpotlights, getSpotlight, spotlightHref } from "@/lib/spotlight";
import { formatSpotlightDay, isSpotlightLive } from "@/lib/spotlight-dates";
import { getAdaptedCourtBySlug } from "@/lib/court-adapter";
import { getStates } from "@/lib/site-structure";
import { ClubPlaceholder } from "@/components/club-placeholder";
import { SpotlightLink } from "@/components/spotlight/spotlight-link";
import { SpotlightArticleTracker } from "@/components/spotlight/spotlight-article-tracker";

const BASE = "https://www.padelcourtsfinder.com";
const BODY_ID = "spotlight-body";

interface SpotlightPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  // Drafts render too (noindex) so Dito and the club can review them at their real URL.
  return getAllSpotlights().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: SpotlightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpotlight(slug);
  if (!s) return { title: "Club Spotlight" };
  const live = isSpotlightLive(s);
  const url = `${BASE}/spotlight/${s.slug}`;
  const image = s.hero.src ? (s.hero.src.startsWith("/") ? `${BASE}${s.hero.src}` : s.hero.src) : undefined;
  return {
    title: `${s.clubName} Club Spotlight`,
    description: s.metaDescription,
    alternates: { canonical: url },
    robots: live ? undefined : { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: {
      title: s.title,
      description: s.metaDescription,
      url,
      siteName: "Padel Courts Finder",
      type: "article",
      ...(image ? { images: [{ url: image, alt: s.hero.alt }] } : {}),
    },
    twitter: { card: image ? "summary_large_image" : "summary", title: s.title, description: s.metaDescription },
  };
}

const CTA_ICON: Record<SpotlightCtaKind, React.ReactNode> = {
  book: <Calendar aria-hidden="true" />,
  membership: <BadgeCheck aria-hidden="true" />,
  website: <Globe aria-hidden="true" />,
  instagram: <Instagram aria-hidden="true" />,
  phone: <Phone aria-hidden="true" />,
  directions: <Navigation aria-hidden="true" />,
};

/** Paragraph text with internal links written as [text](/path). */
function Prose({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href={m[2]}>
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <p>{parts}</p>;
}

function Figure({ image, priority, courts }: { image: SpotlightImage; priority?: boolean; courts?: number }) {
  if (!image.src) {
    return (
      <figure>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          <ClubPlaceholder label={image.alt} courts={courts} />
        </div>
        <figcaption className="mt-2 text-xs text-stone-500">
          Our own court drawing. We will add photos of the finished courts when the club sends them.
        </figcaption>
      </figure>
    );
  }
  return (
    <figure>
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width ?? 1600}
          height={image.height ?? 900}
          className="w-full h-auto rounded-xl"
          priority={priority}
          sizes="(min-width: 1024px) 720px, 100vw"
        />
        {image.isRendering && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-semibold text-white">
            Rendering
          </span>
        )}
      </div>
      <figcaption className="mt-2 text-xs text-stone-500">
        {image.isRendering ? "Architect's rendering, not a photo. " : ""}
        {image.credit}
      </figcaption>
    </figure>
  );
}

export default async function SpotlightPage({ params }: SpotlightPageProps) {
  const { slug } = await params;
  const s = getSpotlight(slug);
  if (!s) notFound();

  const live = isSpotlightLive(s);
  const court = getAdaptedCourtBySlug(s.clubSlug);
  const stateInfo = court ? getStates().find((st) => st.code === court.address.stateCode) : undefined;
  const citySlug = court?.address.city.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-");
  const clubHref = `/courts/${s.clubSlug}`;
  const url = `${BASE}/spotlight/${s.slug}`;

  const primary = s.ctas.find((c) => c.kind === "book");
  const rest = s.ctas.filter((c) => c !== primary);

  const ctaLink = (c: SpotlightCta, className: string) => (
    <SpotlightLink
      key={c.kind}
      slug={s.slug}
      club={s.clubName}
      kind={c.kind}
      placement="article"
      href={spotlightHref(c)}
      outbound
      track={live}
      className={className}
    >
      {CTA_ICON[c.kind]}
      <span>{c.label}</span>
    </SpotlightLink>
  );

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.title,
    description: s.metaDescription,
    datePublished: `${s.publishDate}T00:00:00-05:00`,
    dateModified: `${s.factsCheckedDate}T00:00:00-05:00`,
    author: { "@type": "Person", name: s.author, url: "https://ditocalderon.com" },
    publisher: {
      "@type": "Organization",
      name: "Padel Courts Finder",
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
    about: court
      ? {
          "@type": "SportsActivityLocation",
          name: s.clubName,
          url: `${BASE}${clubHref}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: court.address.streetAddress,
            addressLocality: court.address.city,
            addressRegion: court.address.stateCode,
            postalCode: court.address.zipCode,
            addressCountry: "US",
          },
        }
      : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {live && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />}
      {live && <SpotlightArticleTracker slug={s.slug} bodyId={BODY_ID} />}

      {!live && (
        <div className="bg-amber-100 border-b border-amber-300 text-amber-900 text-sm">
          <div className="max-w-5xl mx-auto px-4 py-2">
            Draft preview. This Spotlight is not published, search engines are told not to index it, and visits are not
            counted.
          </div>
        </div>
      )}

      <header className="grain bg-court">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative">
          <nav aria-label="Breadcrumb" className="text-sm text-stone-400 flex flex-wrap gap-x-2 gap-y-1">
            <Link href="/" className="hover:text-turf">Home</Link>
            {stateInfo && (
              <>
                <span aria-hidden="true">/</span>
                <Link href={`/${stateInfo.slug}`} className="hover:text-turf">{stateInfo.name}</Link>
              </>
            )}
            {stateInfo && court && citySlug && (
              <>
                <span aria-hidden="true">/</span>
                <Link href={`/${stateInfo.slug}/${citySlug}`} className="hover:text-turf">{court.address.city}</Link>
              </>
            )}
          </nav>

          <p className="mt-5 spotlight-label spotlight-label-dark">
            <span>Sponsored</span>
            <span aria-hidden="true">·</span>
            <span>Club Spotlight</span>
          </p>
          <h1 className="mt-3 text-[1.875rem] leading-[1.15] md:text-[2.75rem] font-bold text-white tracking-tight max-w-3xl">
            {s.title}
          </h1>
          <p className="mt-3 text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl">{s.dek}</p>
          <p className="mt-4 text-sm text-stone-400">
            By {s.author}
            <span className="mx-2" aria-hidden="true">&bull;</span>
            {live ? `Published ${formatSpotlightDay(s.publishDate)}` : "Not published yet"}
            <span className="mx-2" aria-hidden="true">&bull;</span>
            Facts checked {formatSpotlightDay(s.factsCheckedDate)}
          </p>
          <p className="mt-5 max-w-3xl rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm leading-relaxed text-stone-200">
            {s.disclosure}
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
        {/* Facts and links: first on phones, sticky side column on desktop */}
        <aside className="lg:col-start-2 lg:row-start-1" aria-label={`${s.clubName} at a glance`}>
          <div className="lg:sticky lg:top-24 space-y-4">
            <section className="club-card">
              <h2 className="club-h2">{s.clubName}</h2>
              <dl className="mt-3 space-y-2.5 text-sm">
                {s.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs text-muted-foreground">{f.label}</dt>
                    <dd className="font-medium leading-snug">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex flex-col gap-2">
                {primary && (
                  <>
                    {ctaLink(primary, "spotlight-cta spotlight-cta-primary")}
                    {primary.note && <p className="-mt-1 text-center text-xs text-muted-foreground">{primary.note}</p>}
                  </>
                )}
                {rest.map((c) => ctaLink(c, "spotlight-cta"))}
              </div>
              <SpotlightLink
                slug={s.slug}
                club={s.clubName}
                kind="directory"
                placement="article"
                href={clubHref}
                track={live}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-padel-green-dark hover:underline underline-offset-4"
              >
                {s.clubName} in our directory
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </SpotlightLink>
            </section>
          </div>
        </aside>

        <article className="mt-8 lg:mt-0 lg:col-start-1 lg:row-start-1 min-w-0">
          <Figure image={s.hero} priority courts={court?.facility.totalCourts} />

          <div id={BODY_ID} className="spotlight-prose mt-8 space-y-10">
            {s.body.map((section, i) => (
              <section key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <Prose key={j} text={p} />
                ))}
              </section>
            ))}
          </div>

          {s.photos.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {s.photos.map((ph, i) => (
                <Figure key={i} image={ph} />
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-col gap-2 sm:flex-row">
            {primary && <div className="sm:flex-1">{ctaLink(primary, "spotlight-cta spotlight-cta-primary")}</div>}
            {s.ctas
              .filter((c) => c.kind === "membership")
              .map((c) => (
                <div key={c.kind} className="sm:flex-1">
                  {ctaLink(c, "spotlight-cta")}
                </div>
              ))}
          </div>

          <footer className="mt-12 border-t border-stone-200 pt-6 text-sm text-stone-600 leading-relaxed">
            <p>
              <strong className="text-foreground">About Club Spotlights.</strong> A Club Spotlight is a paid feature. We
              write it ourselves from facts we check with the club, we publish at most one a month, and it never changes
              where a club appears in our listings. Clubs that want one can read more on our{" "}
              <Link href="/advertise" className="text-padel-green-dark underline underline-offset-4">
                advertise page
              </Link>
              .
            </p>
            <p className="mt-3">
              {s.author} runs Padel Courts Finder, a free directory of padel clubs in the United States.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
