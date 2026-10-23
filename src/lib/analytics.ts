declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * Every outbound click also goes to Plausible (the site's live analytics) as
 * "Club click" or "Gear click", with the club or product, the kind of click,
 * the destination host and the page it came from. This is what per-club
 * reports ("we sent you N visitors") are built from.
 */
const PLAUSIBLE_EVENT: Record<string, { event: string; kind: string; key: 'club' | 'product' }> = {
  club_website: { event: 'Club click', kind: 'website', key: 'club' },
  club_phone: { event: 'Club click', kind: 'phone', key: 'club' },
  club_social: { event: 'Club click', kind: 'social', key: 'club' },
  featured: { event: 'Club click', kind: 'featured', key: 'club' },
  affiliate: { event: 'Gear click', kind: 'affiliate', key: 'product' },
  retailer: { event: 'Gear click', kind: 'retailer', key: 'product' },
};

function hostOf(url: string): string {
  try {
    const u = new URL(url);
    // Awin deep links go through awin1.com; record the store in `ued` instead
    const ued = u.hostname.endsWith('awin1.com') ? u.searchParams.get('ued') : null;
    if (ued) return new URL(ued).hostname.replace(/^www\./, '');
    return u.hostname.replace(/^www\./, '');
  } catch {
    return url.startsWith('tel:') ? 'phone' : '';
  }
}

export function trackOutboundClick(category: string, label: string, url: string) {
  const map = PLAUSIBLE_EVENT[category];
  if (map && typeof window !== 'undefined') {
    trackPlausibleEvent(map.event, {
      [map.key]: label.slice(0, 120),
      kind: map.kind,
      to: hostOf(url),
      page: window.location.pathname,
    });
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'outbound_click', {
      event_category: category,
      event_label: label,
      destination_url: url,
    });
  }
}

export function trackClubWebsiteClick(clubName: string, url: string) {
  trackOutboundClick('club_website', clubName, url);
}

export function trackClubPhoneClick(clubName: string, phone: string) {
  trackOutboundClick('club_phone', clubName, `tel:${phone}`);
}

export function trackAffiliateClick(productName: string, url: string) {
  trackOutboundClick('affiliate', productName, url);
}

/** Buy-button click to a store link that is not an affiliate link */
export function trackRetailerClick(productName: string, url: string) {
  trackOutboundClick('retailer', productName, url);
}

export function trackSocialClick(clubName: string, platform: string, url: string) {
  trackOutboundClick('club_social', `${clubName}_${platform}`, url);
}

export function trackFeaturedListingClick(clubName: string) {
  if (typeof window !== 'undefined') {
    trackPlausibleEvent('Club click', { club: clubName.slice(0, 120), kind: 'featured', to: '', page: window.location.pathname });
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'featured_listing_click', {
      event_category: 'featured',
      event_label: clubName,
    });
  }
}

export function trackListYourCourtSubmit() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'lead_form_submit', {
      event_category: 'lead_generation',
      event_label: 'list_your_court',
    });
  }
}

/**
 * Plausible custom event (the site's live analytics, loaded in layout.tsx).
 * The event shows up in Plausible once a goal with the same name exists.
 */
export function trackPlausibleEvent(name: string, props?: Record<string, string>) {
  if (typeof window === 'undefined') return;
  const plausible = (window as unknown as { plausible?: (event: string, options?: { props?: Record<string, string> }) => void }).plausible;
  if (typeof plausible === 'function') plausible(name, props ? { props } : undefined);
}

/**
 * Club Spotlight (paid lane) events for Plausible. "Spotlight click" carries
 * the club, the kind of link (book, website, instagram, phone, directions,
 * membership, directory, article), the destination host and where on the site
 * the click happened (article, state-card, city-card, club-page).
 * "Spotlight impression" fires once per page view when a pinned card scrolls
 * into view. The first-party log in Supabase (src/lib/spotlight-track.ts)
 * records the same events for the club's report.
 */
export function trackSpotlightClick(club: string, kind: string, url: string, placement: string) {
  if (typeof window === 'undefined') return;
  let to = url.startsWith('tel:') ? 'phone' : hostOf(url);
  if (!to && url.startsWith('/')) to = 'padelcourtsfinder.com';
  trackPlausibleEvent('Spotlight click', {
    club: club.slice(0, 120),
    kind,
    to,
    placement,
    page: window.location.pathname,
  });
}

export function trackSpotlightImpression(club: string, placement: string) {
  if (typeof window === 'undefined') return;
  trackPlausibleEvent('Spotlight impression', { club: club.slice(0, 120), placement, page: window.location.pathname });
}
