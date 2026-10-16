/**
 * Domain matching for "Claim your listing".
 *
 * A claim is verified automatically only when the person's work email is on
 * the club's own domain (the registrable domain of the club website, or of
 * the club email on file). Free mail, booking platforms, link-in-bio pages
 * and social sites never count: anyone can get an address or a page there.
 */

/** Free mail providers: never proof of working at a club. */
export const FREE_MAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "ymail.com",
  "rocketmail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "gmx.us",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "hey.com",
  "fastmail.com",
  "comcast.net",
  "att.net",
  "verizon.net",
  "sbcglobal.net",
]);

/** Booking platforms, site builders and social pages: a club website there proves nothing. */
export const PLATFORM_DOMAINS = new Set([
  "playtomic.com",
  "playtomic.io",
  "playbypoint.com",
  "courtreserve.com",
  "linktr.ee",
  "instagram.com",
  "facebook.com",
  "fb.com",
  "tiktok.com",
  "x.com",
  "twitter.com",
  "google.com",
  "goo.gl",
  "wixsite.com",
  "wix.com",
  "squarespace.com",
  "godaddysites.com",
  "square.site",
  "weebly.com",
  "wordpress.com",
  "webflow.io",
  "vercel.app",
  "netlify.app",
  "clubautomation.com",
  "mindbodyonline.com",
  "podplay.app",
  "matchi.se",
  "skedda.com",
  "bookeo.com",
  "eventbrite.com",
  "yelp.com",
  "beacons.ai",
  "carrd.co",
]);

/** Two-label public suffixes we might see (co.uk, com.mx...). Enough for a US directory. */
const MULTI_PART_SUFFIXES = new Set([
  "co.uk",
  "org.uk",
  "ac.uk",
  "com.au",
  "net.au",
  "org.au",
  "co.nz",
  "com.mx",
  "com.br",
  "co.jp",
  "com.ar",
  "com.es",
  "co.za",
  "com.co",
  "com.pr",
]);

/** "https://www.Club.com/spring" -> "club.com". Returns "" when it cannot tell. */
export function registrableDomain(input: string | undefined | null): string {
  if (!input) return "";
  let host = input.trim().toLowerCase();
  if (!host) return "";
  if (host.includes("@")) host = host.slice(host.lastIndexOf("@") + 1);
  if (/^[a-z][a-z0-9+.-]*:\/\//.test(host) || host.includes("/")) {
    try {
      host = new URL(/^[a-z][a-z0-9+.-]*:\/\//.test(host) ? host : `https://${host}`).hostname;
    } catch {
      return "";
    }
  }
  host = host.replace(/\.$/, "").replace(/:\d+$/, "");
  if (!/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
  if (/^\d+(\.\d+){3}$/.test(host)) return ""; // bare IPs
  const labels = host.split(".").filter(Boolean);
  if (labels.length < 2) return "";
  const lastTwo = labels.slice(-2).join(".");
  if (MULTI_PART_SUFFIXES.has(lastTwo)) {
    return labels.length >= 3 ? labels.slice(-3).join(".") : "";
  }
  return lastTwo;
}

export function isFreeMail(email: string): boolean {
  return FREE_MAIL_DOMAINS.has(registrableDomain(email));
}

export function isPlatformDomain(domain: string): boolean {
  return PLATFORM_DOMAINS.has(domain);
}

export interface DomainCheck {
  verified: boolean;
  reason: "domain_match" | "free_mail" | "no_club_domain" | "mismatch" | "bad_email";
}

/**
 * Does `email` belong to the club? `website` and `clubEmail` come from our
 * own data (never from the client).
 */
export function checkClaimDomain(email: string, website?: string, clubEmail?: string): DomainCheck {
  const emailDomain = registrableDomain(email);
  if (!emailDomain || !email.includes("@")) return { verified: false, reason: "bad_email" };
  if (FREE_MAIL_DOMAINS.has(emailDomain)) return { verified: false, reason: "free_mail" };
  if (PLATFORM_DOMAINS.has(emailDomain)) return { verified: false, reason: "mismatch" };

  const clubDomains = [registrableDomain(website), registrableDomain(clubEmail)].filter(
    (d) => d && !FREE_MAIL_DOMAINS.has(d) && !PLATFORM_DOMAINS.has(d)
  );
  if (clubDomains.length === 0) return { verified: false, reason: "no_club_domain" };
  return clubDomains.includes(emailDomain)
    ? { verified: true, reason: "domain_match" }
    : { verified: false, reason: "mismatch" };
}
