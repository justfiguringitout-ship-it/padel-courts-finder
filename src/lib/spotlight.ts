/**
 * Club Spotlight lookups for pages (server side). Data lives in
 * src/data/spotlights.ts; date rules in src/lib/spotlight-dates.ts.
 */
import { spotlights, type Spotlight, type SpotlightCta } from "@/data/spotlights";
import { getAdaptedCourtBySlug } from "@/lib/court-adapter";
import { isSpotlightLive, isSpotlightPinned, spotlightDay } from "@/lib/spotlight-dates";

export type { Spotlight };

export function getSpotlight(slug: string): Spotlight | undefined {
  return spotlights.find((s) => s.slug === slug);
}

export function getAllSpotlights(): Spotlight[] {
  return spotlights;
}

/** Live spotlights (sitemap). Drafts never appear. */
export function getLiveSpotlights(day: string = spotlightDay()): Spotlight[] {
  return spotlights.filter((s) => isSpotlightLive(s, day));
}

/** The live spotlight for a club, pinned or not (owner dashboard, report). */
export function getLiveSpotlightForClub(clubSlug: string, day: string = spotlightDay()): Spotlight | undefined {
  return spotlights.find((s) => s.clubSlug === clubSlug && isSpotlightLive(s, day));
}

/** Pinned card for the club's own /courts page. */
export function getPinnedSpotlightForClub(clubSlug: string, day: string = spotlightDay()): Spotlight | undefined {
  return spotlights.find((s) => s.clubSlug === clubSlug && isSpotlightPinned(s, day));
}

function clubLocation(s: Spotlight): { stateCode: string; city: string } | undefined {
  const court = getAdaptedCourtBySlug(s.clubSlug);
  return court ? { stateCode: court.address.stateCode, city: court.address.city } : undefined;
}

/** Pinned cards for a state page. */
export function getPinnedSpotlightsForState(stateCode: string, day: string = spotlightDay()): Spotlight[] {
  return spotlights.filter((s) => isSpotlightPinned(s, day) && clubLocation(s)?.stateCode === stateCode);
}

/** Pinned cards for a city page. */
export function getPinnedSpotlightsForCity(stateCode: string, city: string, day: string = spotlightDay()): Spotlight[] {
  return spotlights.filter((s) => {
    if (!isSpotlightPinned(s, day)) return false;
    const loc = clubLocation(s);
    return loc?.stateCode === stateCode && loc.city === city;
  });
}

/**
 * Outbound Spotlight link with UTM tags, so the club sees us (and which button
 * was clicked) in its own analytics. tel: and other non-web links pass through.
 */
export function spotlightHref(cta: Pick<SpotlightCta, "href" | "kind">): string {
  let url: URL;
  try {
    url = new URL(cta.href);
  } catch {
    return cta.href;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return cta.href;
  url.searchParams.set("utm_source", "padelcourtsfinder");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "club-spotlight");
  url.searchParams.set("utm_content", cta.kind);
  return url.toString();
}
