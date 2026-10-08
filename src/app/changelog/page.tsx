import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MinusCircle, PencilLine, PlusCircle, Mail, ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { changelog, type ChangeType, type ChangelogEntry } from "@/data/changelog";
import { getAllAdaptedCourts } from "@/lib/court-adapter";

const CANONICAL = "https://www.padelcourtsfinder.com/changelog";
const TITLE = "What Changed on Padel Courts Finder";
const DESCRIPTION =
  "Every change to the US padel club directory, month by month: clubs added, updated, verified and removed, and how we check each one.";

export const metadata: Metadata = {
  title: "Changelog: What Changed on Padel Courts Finder",
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "Padel Courts Finder",
    type: "website",
    images: [
      {
        url: "https://www.padelcourtsfinder.com/og/default.png",
        width: 1200,
        height: 630,
        alt: "Padel Courts Finder changelog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://www.padelcourtsfinder.com/og/default.png"],
  },
  robots: { index: true, follow: true },
};

const TYPE_META: Record<ChangeType, { label: string; Icon: typeof PlusCircle; badge: string; dot: string }> = {
  added: {
    label: "Added",
    Icon: PlusCircle,
    badge: "bg-padel-green-light text-padel-green-dark ring-padel-green/30",
    dot: "bg-padel-green",
  },
  verified: {
    label: "Verified",
    Icon: CheckCircle2,
    badge: "bg-sky-50 text-sky-800 ring-sky-200",
    dot: "bg-sky-600",
  },
  updated: {
    label: "Updated",
    Icon: PencilLine,
    badge: "bg-amber-50 text-amber-800 ring-amber-200",
    dot: "bg-amber-500",
  },
  removed: {
    label: "Removed",
    Icon: MinusCircle,
    badge: "bg-rose-50 text-rose-800 ring-rose-200",
    dot: "bg-rose-500",
  },
};
const TYPE_ORDER: ChangeType[] = ["added", "verified", "updated", "removed"];

// Changes an entry stands for: its count, else the clubs it names, else one.
// Month totals add these up, so a club in two entries counts twice. That is
// why the chips say "changes", not clubs.
function changeCount(e: ChangelogEntry) {
  return e.count ?? e.clubs?.length ?? 1;
}

function monthKey(date: string) {
  return date.slice(0, 7);
}

function monthLabel(key: string) {
  const [y, m] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}

function dayLabel(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

export default function ChangelogPage() {
  // Club name -> slug, so entries link only to clubs that are still listed.
  const slugByName = new Map(getAllAdaptedCourts().map((c) => [c.name, c.slug]));

  const entries = [...changelog].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const months: { key: string; entries: ChangelogEntry[] }[] = [];
  for (const e of entries) {
    const key = monthKey(e.date);
    const last = months[months.length - 1];
    if (last && last.key === key) last.entries.push(e);
    else months.push({ key, entries: [e] });
  }
  const lastUpdated = entries[0]?.date;

  return (
    <div className="pcf-changelog min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: TITLE,
            description: DESCRIPTION,
            url: CANONICAL,
            dateModified: lastUpdated,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.padelcourtsfinder.com" },
                { "@type": "ListItem", position: 2, name: "Changelog", item: CANONICAL },
              ],
            },
          }),
        }}
      />

      <div className="border-b bg-muted/40">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Changelog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="grain bg-court relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-turf mb-3">Changelog</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              What changed on Padel Courts Finder
            </h1>
            <p className="text-lg text-stone-300">
              Clubs open, close, move and change their prices. This page lists every change we make to the directory,
              newest first, so you can see what we checked and when.
            </p>
            {lastUpdated && (
              <p className="mt-4 text-sm text-stone-400">
                Last change: <time dateTime={lastUpdated}>{dayLabel(lastUpdated)}, {lastUpdated.slice(0, 4)}</time>
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14 max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="min-w-0 space-y-12">
            {months.map((month) => {
              const counts = TYPE_ORDER.map((t) => ({
                type: t,
                n: month.entries.filter((e) => e.type === t).reduce((s, e) => s + changeCount(e), 0),
              })).filter((c) => c.n > 0);
              return (
                <section key={month.key} aria-labelledby={`m-${month.key}`}>
                  <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b pb-3">
                    <h2 id={`m-${month.key}`} className="text-2xl font-bold tracking-tight">
                      {monthLabel(month.key)}
                    </h2>
                    <ul className="flex flex-wrap gap-2 text-xs" aria-label="Changes this month">
                      {counts.map(({ type, n }) => (
                        <li
                          key={type}
                          className={`rounded-full px-2.5 py-0.5 font-medium ring-1 ring-inset tabular-nums ${TYPE_META[type].badge}`}
                        >
                          {TYPE_META[type].label}: {n} {n === 1 ? "change" : "changes"}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ol className="relative space-y-6 border-l border-border pl-6">
                    {month.entries.map((e, i) => {
                      const meta = TYPE_META[e.type];
                      return (
                        <li key={`${e.date}-${i}`} className="relative">
                          <span
                            className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background ${meta.dot}`}
                            aria-hidden
                          />
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <time dateTime={e.date} className="font-mono text-xs text-muted-foreground tabular-nums">
                              {dayLabel(e.date)}
                            </time>
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${meta.badge}`}
                            >
                              <meta.Icon className="h-3.5 w-3.5" aria-hidden />
                              {meta.label}
                            </span>
                          </div>
                          <h3 className="font-semibold text-base md:text-lg leading-snug">{e.title}</h3>
                          {e.note && <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{e.note}</p>}
                          {e.clubs && e.clubs.length > 0 && (
                            <p className="mt-2 text-sm leading-relaxed">
                              {e.clubs.map((name, j) => {
                                const slug = slugByName.get(name);
                                return (
                                  <span key={name}>
                                    {j > 0 && <span className="text-muted-foreground">, </span>}
                                    {slug ? (
                                      <Link href={`/courts/${slug}`} className="text-primary hover:underline">
                                        {name}
                                      </Link>
                                    ) : (
                                      <span className="text-muted-foreground">{name}</span>
                                    )}
                                  </span>
                                );
                              })}
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </section>
              );
            })}
          </div>

          {/* How we verify */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-6 order-first lg:order-none">
            <div className="rounded-xl border bg-muted/40 p-5">
              <h2 className="font-semibold mb-2">How we verify</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every club is checked against its own website or booking page, and against owner submissions when a club
                sends us one. When a detail cannot be confirmed from a primary source, we leave it blank rather than guess.
              </p>
              <dl className="mt-4 space-y-2 text-sm">
                {TYPE_ORDER.map((t) => {
                  const meta = TYPE_META[t];
                  const what: Record<ChangeType, string> = {
                    added: "a new club, open or coming soon",
                    verified: "re-checked against a primary source",
                    updated: "details, status, photos or map pin changed",
                    removed: "closed, no padel courts, or a duplicate",
                  };
                  return (
                    <div key={t} className="flex items-start gap-2">
                      <dt className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${meta.badge}`}>
                        {meta.label}
                      </dt>
                      <dd className="text-muted-foreground">{what[t]}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className="rounded-xl border p-5">
              <h2 className="font-semibold mb-2">Spot something wrong?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A closed club, a new address, a price that changed. Tell us and we will check it.
              </p>
              <Link
                href="/list-your-court#get-listed"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Suggest a correction <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" aria-hidden />
                or email{" "}
                <a href="mailto:info@padelcourtsfinder.com" className="text-primary hover:underline break-all">
                  info@padelcourtsfinder.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
