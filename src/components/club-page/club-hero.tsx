import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, History, Hourglass, MapPin, Star } from "lucide-react";
import { ClubImage } from "@/components/club-image";
import { TrackedLink } from "@/components/TrackedLink";
import { HeroStatus } from "@/components/club-page/hero-status";
import { HeroCourtArt } from "@/components/club-page/hero-court-art";
import { formatClock, type DayHours, type TrustStamp } from "@/lib/club-page";
import type { ClubMedia } from "@/lib/club-media";

export type HeroAction = {
  key: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  kind: "website" | "phone";
  external: boolean;
};

export type HeroFact = {
  label: string;
  icon: React.ReactNode;
  value: string;
  sub?: string;
  sub2?: string;
  mono?: boolean;
  href?: string;
};

/** Every text liveStatus() can produce for these hours, for width reservation. */
function liveTexts(days: DayHours[]): string[] {
  const out = new Set<string>(["Closed now"]);
  for (const d of days) {
    if (d.kind === "allday") out.add("Open now · 24 hours");
    if (d.kind === "closed") out.add("Closed today");
    if (d.kind === "range") {
      out.add(`Open now · until ${formatClock(d.close)}`);
      out.add(`Closed now · opens ${formatClock(d.open)}`);
    }
  }
  return [...out];
}

/** Phone-width stamp: "Owner confirmed Oct 2026", "Verified Oct 2025", "Updated May 2026". */
function shortStamp(stamp: TrustStamp): string {
  const d = new Date(`${stamp.date.slice(0, 10)}T12:00:00Z`);
  const when = Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
  const what = /owner/i.test(stamp.text) ? "Owner confirmed" : stamp.kind === "verified" ? "Verified" : "Updated";
  return `${what} ${when}`.trim();
}

/**
 * Top of the club page. With a real photo: full-width image, dark fade, name
 * and actions on the image. Without one (or when the image is a logo): the
 * same layout over a drawing of the club's courts, with the logo as a small
 * avatar. Below both, a dark strip with the facts players decide on.
 */
export function ClubHero({
  name,
  media,
  street,
  cityLabel,
  cityHref,
  rating,
  status,
  hours,
  timeZone,
  featured,
  privateLabel,
  stamp,
  actions,
  leadHref,
  facts,
  courts,
  note,
}: {
  name: string;
  media: ClubMedia;
  street?: string;
  cityLabel: string;
  cityHref?: string;
  rating?: { value: number; count: number };
  status?: string;
  hours: { published: boolean; days: DayHours[] };
  timeZone?: string;
  featured?: boolean;
  privateLabel?: string;
  stamp?: TrustStamp;
  actions: HeroAction[];
  /** In-page link to the membership form, for members-only clubs */
  leadHref?: string;
  facts: HeroFact[];
  courts: number;
  /** Small print under the facts, e.g. which app the club books on */
  note?: React.ReactNode;
}) {
  const hasPhoto = !!media.hero;
  const showLive = status === "open" && hours.published && !!timeZone;

  return (
    <>
      <section className={`club-top ${hasPhoto ? "has-photo" : "is-drawn"}`} aria-labelledby="club-name">
        <div className="club-top-media">
          {media.hero ? (
            <ClubImage
              src={media.hero.src}
              alt={`Padel courts at ${name}`}
              courts={courts}
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-court">
              <div className="grain h-full w-full">
                <HeroCourtArt courts={courts} />
              </div>
            </div>
          )}
          <div className="club-top-shade" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-4 club-top-inner">
          <div className="club-top-body">
            <div className="club-top-chips">
              {status === "open" &&
                (showLive ? (
                  <HeroStatus days={hours.days} timeZone={timeZone} fallback="Open for play" candidates={liveTexts(hours.days)} />
                ) : (
                  <span className="club-chip club-chip-open">
                    <span className="club-chip-dot" aria-hidden="true" />
                    Open for play
                  </span>
                ))}
              {status === "coming_soon" && (
                <span className="club-chip club-chip-soon">
                  <Hourglass aria-hidden="true" />
                  Coming soon
                </span>
              )}
              {status === "temporarily_closed" && <span className="club-chip club-chip-closed">Temporarily closed</span>}
              {featured && <span className="club-chip club-chip-featured">Featured club</span>}
              {privateLabel && <span className="club-chip club-chip-private">{privateLabel}</span>}
              {stamp && (
                <span
                  className={`club-stamp ${stamp.kind === "verified" ? "is-verified" : "is-updated"}`}
                  title={stamp.kind === "verified" ? "A person checked these details against the club's own sources" : undefined}
                >
                  {stamp.kind === "verified" ? <BadgeCheck aria-hidden="true" /> : <History aria-hidden="true" />}
                  <span>
                    {stamp.kind === "verified" && <span className="sr-only">Verified. </span>}
                    <time dateTime={stamp.date}>
                      <span className="sm:hidden">{shortStamp(stamp)}</span>
                      <span className="hidden sm:inline">{stamp.text}</span>
                    </time>
                  </span>
                </span>
              )}
            </div>

            <div className="club-top-title">
              {media.logo && (
                <span
                  className="club-top-logo"
                  style={{ aspectRatio: media.logo.aspect, background: media.logo.bg }}
                >
                  <Image
                    src={media.logo.src}
                    alt={`${name} logo`}
                    width={media.logo.width}
                    height={media.logo.height}
                    sizes="(min-width: 768px) 240px, 180px"
                    className={media.logo.place ? "club-top-logo-img" : "h-full w-full object-contain"}
                    style={
                      media.logo.place
                        ? { width: `${media.logo.place.width}%`, left: `${media.logo.place.left}%`, top: `${media.logo.place.top}%` }
                        : undefined
                    }
                  />
                </span>
              )}
              <h1 id="club-name" className="club-top-name">{name}</h1>
            </div>

            <p className="club-top-address">
              <MapPin aria-hidden="true" />
              <span>
                {street ? `${street}, ` : ""}
                {cityHref ? <Link href={cityHref}>{cityLabel}</Link> : cityLabel}
                {rating && (
                  <span className="club-top-rating">
                    <Star aria-hidden="true" />
                    <span className="font-semibold text-white">{rating.value}</span>
                    <span>({rating.count} reviews)</span>
                  </span>
                )}
              </span>
            </p>
          </div>

          {(actions.length > 0 || leadHref) && (
            <div className="club-top-actions" style={{ ["--club-actions" as string]: Math.max(actions.length, 1) }}>
              {actions.map((a, i) => (
                <TrackedLink
                  key={a.key}
                  href={a.href}
                  type={a.kind}
                  clubName={name}
                  className={`club-top-action ${i === 0 ? "is-primary" : ""}`}
                  {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {a.icon}
                  <span>{a.label}</span>
                </TrackedLink>
              ))}
              {leadHref && (
                <a href={leadHref} className="club-top-action is-lead">
                  <span>Ask about membership</span>
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="club-factbar">
        <div className="container mx-auto px-4">
          <dl className="club-factbar-list">
            {facts.map((f) => (
              <div key={f.label} className="club-factbar-item">
                <span className="club-factbar-icon" aria-hidden="true">{f.icon}</span>
                <div className="min-w-0">
                  <dt>{f.label}</dt>
                  <dd>
                    {f.href ? (
                      <a href={f.href} className={`club-factbar-value ${f.mono ? "is-mono" : ""}`}>{f.value}</a>
                    ) : (
                      <span className={`club-factbar-value ${f.mono ? "is-mono" : ""}`}>{f.value}</span>
                    )}
                    {f.sub && <span className="club-factbar-sub">{f.sub}</span>}
                    {f.sub2 && <span className="club-factbar-sub">{f.sub2}</span>}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          {note && <p className="club-factbar-note">{note}</p>}
        </div>
      </div>
    </>
  );
}
