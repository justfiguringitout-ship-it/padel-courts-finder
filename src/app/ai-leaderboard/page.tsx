import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  PERIODS,
  getLeaderboard,
  type BoardEntry,
  type BoardKey,
  type HallOfFameEntry,
  type PeriodKey,
} from "@/lib/ai-leaderboard/data";

// Numbers refresh every 5 minutes. Launch: 2026-10-25T11:26:00Z (LAUNCH_AT in
// src/lib/ai-leaderboard/sources.ts).
export const revalidate = 300;

const CANONICAL = "https://www.padelcourtsfinder.com/ai-leaderboard";
const TITLE = "The AI Leaderboard";
const DESCRIPTION =
  "Which AI assistants and search engines send padel players to Padel Courts Finder, and which crawlers visit the most. Live counts with gold, silver and bronze medals.";

export const metadata: Metadata = {
  title: "The AI Leaderboard: Who Sends Us Padel Players",
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
    types: { "application/json": "/ai-leaderboard.json" },
  },
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
        alt: "The AI Leaderboard on Padel Courts Finder",
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

const PERIOD_ANCHOR: Record<PeriodKey, string> = { today: "today", "7d": "7-days", "28d": "28-days" };

const BOARDS: { key: BoardKey; title: string; unit: [string, string]; note: string }[] = [
  {
    key: "ai",
    title: "AI assistants that send us players",
    unit: ["visit", "visits"],
    note: "Referral visits, counted once per visit.",
  },
  {
    key: "search",
    title: "Search engines that send us players",
    unit: ["visit", "visits"],
    note: "Referral visits, counted once per visit.",
  },
  {
    key: "crawlers",
    title: "Crawlers that visit us the most",
    unit: ["page hit", "page hits"],
    note: "HTML page hits, grouped by the user agent each crawler reports about itself.",
  },
];

function longDate(isoDay: string): string {
  const [y, m, d] = isoDay.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function shortDate(isoDay: string): string {
  const [y, m, d] = isoDay.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

function fmt(n: number): string {
  return n.toLocaleString("en-US");
}

function Medal({ rank }: { rank: 1 | 2 | 3 }) {
  const label = rank === 1 ? "Gold" : rank === 2 ? "Silver" : "Bronze";
  return (
    <svg
      className={`lb-medal-${rank} h-7 w-7 shrink-0`}
      viewBox="0 0 28 28"
      role="img"
      aria-label={`${label} medal`}
    >
      <path d="M8 1h5l3 9h-5z" fill="#2563EB" opacity="0.85" />
      <path d="M20 1h-5l-3 9h5z" fill="#DC2626" opacity="0.85" />
      <circle cx="14" cy="17.5" r="9" fill="var(--lb-medal)" />
      <circle cx="14" cy="17.5" r="6.5" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1" />
      <text x="14" y="21.4" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#fff" fontFamily="system-ui, sans-serif">
        {rank}
      </text>
    </svg>
  );
}

function Board({
  title,
  note,
  unit,
  entries,
  wide,
}: {
  title: string;
  note: string;
  unit: [string, string];
  entries: BoardEntry[];
  wide?: boolean;
}) {
  const ranked = entries.filter((e) => e.count > 0);
  const waiting = entries.filter((e) => e.count === 0);
  const max = ranked[0]?.count ?? 0;
  return (
    <section className={`min-w-0 rounded-2xl border bg-card p-4 sm:p-6${wide ? " lg:col-span-2" : ""}`}>
      <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{note}</p>

      {ranked.length > 0 ? (
        <ol className="mt-4 space-y-2">
          {ranked.map((e) => {
            const medal = e.rank !== null && e.rank <= 3 ? (e.rank as 1 | 2 | 3) : null;
            const pct = max > 0 ? Math.max(4, Math.round((e.count / max) * 100)) : 0;
            return (
              <li
                key={e.id}
                className={`rounded-xl px-3 py-2.5 ${medal ? `lb-medal-${medal} lb-row-medal` : "bg-muted/40"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 shrink-0 text-center">
                    {medal ? (
                      <Medal rank={medal} />
                    ) : (
                      <span className="font-mono text-sm text-muted-foreground tabular-nums">{e.rank}</span>
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">{e.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{e.operator}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="font-mono font-semibold tabular-nums">{fmt(e.count)}</span>{" "}
                    <span className="text-xs text-muted-foreground">{e.count === 1 ? unit[0] : unit[1]}</span>
                  </span>
                </div>
                <div className="mt-2 ml-10 h-1.5 rounded-full bg-black/5" aria-hidden="true">
                  <div
                    className={`h-1.5 rounded-full ${medal ? "lb-bar-medal" : "bg-padel-green"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="mt-4 rounded-xl bg-muted/40 px-3 py-4 text-sm text-muted-foreground">
          Nobody has scored in this period yet. The first visit takes the gold.
        </p>
      )}

      {waiting.length > 0 && (
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Not on the board yet</h4>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {waiting.map((e) => (
              <li key={e.id} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
                {e.name}
              </li>
            ))}
          </ul>
        </div>
      )}

    </section>
  );
}

function HallCard({ label, entry, unit }: { label: string; entry: HallOfFameEntry | null; unit: [string, string] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-court-panel p-5">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-turf">{label}</p>
      {entry ? (
        <>
          <div className="mt-3 flex items-center gap-3">
            <Medal rank={1} />
            <div className="min-w-0">
              <p className="truncate font-display text-xl font-bold text-white">{entry.name}</p>
              <p className="truncate text-sm text-stone-400">{entry.operator}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-stone-300">
            <span className="font-mono font-semibold text-white tabular-nums">{fmt(entry.count)}</span>{" "}
            {entry.count === 1 ? unit[0] : unit[1]} since launch
          </p>
        </>
      ) : (
        <p className="mt-3 text-sm text-stone-300">Open seat. Whoever gets here first holds it until someone passes them.</p>
      )}
    </div>
  );
}

export default async function AiLeaderboardPage() {
  const lb = await getLeaderboard();
  const launchLabel = longDate(lb.launchDay);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: TITLE,
            description: DESCRIPTION,
            url: CANONICAL,
            datePublished: lb.launchDay,
            dateModified: lb.today,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.padelcourtsfinder.com" },
                { "@type": "ListItem", position: 2, name: "AI Leaderboard", item: CANONICAL },
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
                <BreadcrumbPage>AI Leaderboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="grain bg-court relative overflow-hidden py-12 md:py-16">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-turf mb-3">Thank you for the referrals</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">The AI Leaderboard</h1>
            <p className="text-lg text-stone-300">
              More padel players now find us by asking an AI assistant where to play, and many more still come from search
              engines. This page is our thank you to all of them. It shows which assistants and search engines send players
              to Padel Courts Finder, and which crawlers visit our pages the most.
            </p>
            <p className="mt-4 text-stone-300">
              The numbers come from our own counters and update every few minutes. The top three on each board get a gold,
              silver or bronze medal, and everyone else on the list is one visit away from getting on the board. Think of it
              as a frequent flyer program where the miles are padel players.
            </p>
            <p className="mt-4 text-sm text-stone-400">
              Counting since <time dateTime={lb.launchAt}>{launchLabel}</time>. Days run on US Eastern time.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          {!lb.available && (
            <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              We could not reach our counters just now, so the boards below may show zeros. Check back in a few minutes.
            </p>
          )}

          <div className="lb-periods">
            {PERIODS.map((p) => {
              const data = lb.periods[p.key];
              const anchor = PERIOD_ANCHOR[p.key];
              return (
                <section
                  key={p.key}
                  id={anchor}
                  className={`lb-period${p.key === "7d" ? " lb-default" : ""}`}
                  aria-labelledby={`${anchor}-title`}
                >
                  <nav aria-label="Leaderboard period" className="mb-5">
                    <ul className="inline-flex rounded-xl border bg-muted/50 p-1 text-sm font-medium">
                      {PERIODS.map((q) => {
                        const active = q.key === p.key;
                        return (
                          <li key={q.key}>
                            <a
                              href={`#${PERIOD_ANCHOR[q.key]}`}
                              aria-current={active ? "true" : undefined}
                              className={`block rounded-lg px-3.5 py-1.5 transition-colors ${
                                active ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {q.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                  <h2 id={`${anchor}-title`} className="text-2xl font-bold tracking-tight">
                    {p.key === "today" ? "Today" : `Last ${p.label}`}
                    <span className="ml-2 text-base font-normal text-muted-foreground">
                      {data.from === data.to ? shortDate(data.to) : `${shortDate(data.from)} to ${shortDate(data.to)}`}
                    </span>
                  </h2>
                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    {BOARDS.map((b) => (
                      <Board
                        key={b.key}
                        title={b.title}
                        note={b.note}
                        unit={b.unit}
                        entries={data.boards[b.key]}
                        wide={b.key === "crawlers"}
                      />
                    ))}
                  </div>
                  {data.otherReferrals > 0 && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      Other websites sent {fmt(data.otherReferrals)} {data.otherReferrals === 1 ? "visit" : "visits"} in this
                      period. We count them together and do not list those sites.
                    </p>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <section className="grain bg-court py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Hall of fame</h2>
            <p className="mt-2 text-stone-300">All-time leaders on each board since we started counting on {launchLabel}.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HallCard label="AI assistants" entry={lb.hallOfFame.ai} unit={["visit", "visits"]} />
              <HallCard label="Search engines" entry={lb.hallOfFame.search} unit={["visit", "visits"]} />
              <HallCard label="Crawlers" entry={lb.hallOfFame.crawlers} unit={["page hit", "page hits"]} />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">How this works</h2>
          <div className="mt-4 space-y-4 text-stone-700 leading-relaxed">
            <p>
              Every number on this page is a daily total kept by our own site, starting on {launchLabel}. Nothing comes from
              an outside analytics company, and nothing here is an estimate.
            </p>
            <p>
              <strong>Referral visits.</strong> When someone lands on our site from another website, their browser tells us
              which site sent them. We count that visit once, under the assistant or search engine it came from. Visits from
              any other website go into a single &quot;other&quot; total, and we do not list those sites.
            </p>
            <p>
              <strong>Crawler hits.</strong> When a crawler asks for one of our pages, we read the name it gives in its user
              agent and add one hit for that name. We count HTML pages only, so images, files and our data feeds are left
              out. User agents are self-reported, which means a bot can claim to be someone else, and we do not verify them.
            </p>
            <p>
              <strong>No personal data.</strong> We store no IP addresses, no user agents, no cookies and nothing that could
              identify a person. Each day we keep a name and a count, and that is all. Our{" "}
              <Link href="/privacy" className="text-padel-green-dark underline underline-offset-2">
                privacy policy
              </Link>{" "}
              says the same.
            </p>
            <p>
              The same numbers are available as JSON at{" "}
              <a href="/ai-leaderboard.json" className="font-mono text-sm text-padel-green-dark underline underline-offset-2">
                /ai-leaderboard.json
              </a>
              . If you run one of the services listed here and something looks wrong, tell us through our{" "}
              <Link href="/advertise#partner-form" className="text-padel-green-dark underline underline-offset-2">
                contact form
              </Link>{" "}
              and we will check it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
