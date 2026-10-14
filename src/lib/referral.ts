/**
 * Tag outbound club links so clubs see Padel Courts Finder as the source in
 * their own analytics (utm_source shows up in GA4, Squarespace, Wix, Shopify).
 * Only touches http(s) links to club sites and booking pages; social, maps,
 * phone and mail links pass through unchanged, as do links already tagged.
 */
const SKIP_HOSTS = /(^|\.)(instagram\.com|facebook\.com|google\.[a-z.]+|goo\.gl|maps\.app\.goo\.gl|apple\.com|amazon\.com|amzn\.to|tiktok\.com|x\.com|twitter\.com|youtube\.com|linktr\.ee)$/i;

export function withReferral(href: string | undefined | null, campaign = "club_listing"): string {
  if (!href) return href ?? "";
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return href;
  if (SKIP_HOSTS.test(url.hostname)) return href;
  if (url.searchParams.has("utm_source")) return href;
  url.searchParams.set("utm_source", "padelcourtsfinder");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
