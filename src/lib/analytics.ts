declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function trackOutboundClick(category: string, label: string, url: string) {
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

export function trackSocialClick(clubName: string, platform: string, url: string) {
  trackOutboundClick('club_social', `${clubName}_${platform}`, url);
}

export function trackFeaturedListingClick(clubName: string) {
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
