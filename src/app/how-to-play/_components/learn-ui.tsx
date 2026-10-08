import Link from "next/link";
import type { ReactNode } from "react";

/** Shared building blocks for the beginner pages (/how-to-play and /rules). */

export function LearnHero({
  kicker,
  title,
  sub,
  updated,
  readTime,
  children,
}: {
  kicker: string;
  title: string;
  sub: string;
  updated: string;
  readTime: string;
  children?: ReactNode;
}) {
  return (
    <header className="grain bg-court">
      <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-stone-400">
          <Link href="/" className="hover:text-turf">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-stone-300">{kicker}</span>
        </nav>
        <span className="mb-4 inline-block rounded-full bg-padel-green px-2.5 py-0.5 text-xs font-semibold text-white">
          {kicker}
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-stone-300">{sub}</p>
        <p className="mt-5 text-sm text-stone-400">
          <span>Updated {updated}</span>
          <span className="mx-2" aria-hidden="true">&bull;</span>
          <span>{readTime}</span>
          <span className="mx-2" aria-hidden="true">&bull;</span>
          <span>By the Padel Courts Finder editorial team</span>
        </p>
        {children}
      </div>
    </header>
  );
}

export function Toc({ items }: { items: Array<{ id: string; label: string }> }) {
  return (
    <nav aria-label="On this page" className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">On this page</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className="inline-block rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 transition-colors hover:border-padel-green hover:text-padel-green-dark"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "white",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: "white" | "stone";
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${tone === "stone" ? "bg-stone-50" : "bg-white"}`}>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-14 lg:px-8">
        {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-padel-green">{eyebrow}</p>}
        <h2 className="font-display text-2xl font-bold tracking-tight text-court md:text-3xl">{title}</h2>
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}

/** Body copy at a readable ~65 character measure. */
export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[65ch] space-y-4 text-[1.0625rem] leading-[1.75] text-stone-700 ${className}`}>{children}</div>;
}

export function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className="max-w-[65ch] space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span
            aria-hidden="true"
            className="font-display flex h-8 w-8 flex-none items-center justify-center rounded-full bg-court text-sm font-bold text-turf"
          >
            {i + 1}
          </span>
          <div className="pt-1 leading-relaxed text-stone-700">{item}</div>
        </li>
      ))}
    </ol>
  );
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="max-w-[65ch] rounded-r-xl border-l-4 border-padel-green bg-padel-green-light/60 p-5">
      <p className="font-display mb-1 font-bold text-court">{title}</p>
      <div className="text-sm leading-relaxed text-stone-700">{children}</div>
    </aside>
  );
}

export type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="max-w-[65ch] divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
      {faqs.map((f) => (
        <div key={f.q} className="p-5">
          <h3 className="font-display font-semibold text-court">{f.q}</h3>
          <p className="mt-2 text-[0.975rem] leading-relaxed text-stone-600">{f.a}</p>
        </div>
      ))}
    </div>
  );
}

export function Sources({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <p className="max-w-[65ch] text-sm leading-relaxed text-stone-500">
      <span className="font-semibold text-stone-600">Sources: </span>
      {items.map((s, i) => (
        <span key={s.href}>
          <a href={s.href} className="underline decoration-stone-300 underline-offset-2 hover:text-padel-green-dark" rel="noopener">
            {s.label}
          </a>
          {i < items.length - 1 ? "; " : "."}
        </span>
      ))}
    </p>
  );
}
