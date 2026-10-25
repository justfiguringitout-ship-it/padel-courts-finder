/**
 * AI leaderboard: who sends players to Padel Courts Finder and which crawlers
 * visit. Pure data and classifiers, no Next or Node imports, so the proxy, the
 * /api/ref route and the page can all share it.
 *
 * EXPERIMENT: the leaderboard launched at LAUNCH_AT below (2026-10-25). The
 * question is whether a public, AI-facing leaderboard changes AI referral
 * traffic, so the daily counts in pcf_referral_daily and pcf_crawler_daily are
 * clean from that moment on (all test rows were deleted before launch).
 */

/** Launch of the AI leaderboard and its daily counters (UTC). */
export const LAUNCH_AT = "2026-10-25T11:26:00Z";

/** Calendar days on the leaderboard follow US Eastern time (same as the SQL functions). */
export const LEADERBOARD_TIMEZONE = "America/New_York";

export type ReferralCategory = "ai" | "search" | "other";

export interface ReferralSource {
  id: string;
  name: string;
  operator: string;
  category: Exclude<ReferralCategory, "other">;
}

export interface CrawlerBot {
  /** Stored in pcf_crawler_daily.bot; also the user-agent token we look for. */
  id: string;
  operator: string;
  /** What the bot is for, in plain words. */
  role: string;
}

export const AI_SOURCES: ReferralSource[] = [
  { id: "chatgpt", name: "ChatGPT", operator: "OpenAI", category: "ai" },
  { id: "claude", name: "Claude", operator: "Anthropic", category: "ai" },
  { id: "gemini", name: "Gemini", operator: "Google", category: "ai" },
  { id: "perplexity", name: "Perplexity", operator: "Perplexity", category: "ai" },
  { id: "copilot", name: "Microsoft Copilot", operator: "Microsoft", category: "ai" },
  { id: "grok", name: "Grok", operator: "xAI", category: "ai" },
  { id: "meta-ai", name: "Meta AI", operator: "Meta", category: "ai" },
  { id: "deepseek", name: "DeepSeek", operator: "DeepSeek", category: "ai" },
  { id: "mistral", name: "Mistral Le Chat", operator: "Mistral", category: "ai" },
  { id: "poe", name: "Poe", operator: "Quora", category: "ai" },
  { id: "you", name: "You.com", operator: "You.com", category: "ai" },
  { id: "phind", name: "Phind", operator: "Phind", category: "ai" },
];

export const SEARCH_SOURCES: ReferralSource[] = [
  { id: "google", name: "Google", operator: "Google", category: "search" },
  { id: "bing", name: "Bing", operator: "Microsoft", category: "search" },
  { id: "duckduckgo", name: "DuckDuckGo", operator: "DuckDuckGo", category: "search" },
  { id: "yahoo", name: "Yahoo", operator: "Yahoo", category: "search" },
  { id: "brave", name: "Brave Search", operator: "Brave", category: "search" },
  { id: "ecosia", name: "Ecosia", operator: "Ecosia", category: "search" },
  { id: "kagi", name: "Kagi", operator: "Kagi", category: "search" },
  { id: "yandex", name: "Yandex", operator: "Yandex", category: "search" },
  { id: "baidu", name: "Baidu", operator: "Baidu", category: "search" },
];

const SOURCE_BY_ID = new Map([...AI_SOURCES, ...SEARCH_SOURCES].map((s) => [s.id, s]));

export function referralSource(id: string): ReferralSource | undefined {
  return SOURCE_BY_ID.get(id);
}

/**
 * Crawlers, most specific token first (the first match wins). Keep this list in
 * sync with CRAWLER_UA_GATE in src/proxy.ts, which must be a literal string.
 * No published xAI / Grok crawler user agent exists as of launch, so none is listed.
 */
export const CRAWLERS: CrawlerBot[] = [
  { id: "OAI-SearchBot", operator: "OpenAI", role: "ChatGPT search index" },
  { id: "ChatGPT-User", operator: "OpenAI", role: "fetches a page when a ChatGPT user asks" },
  { id: "GPTBot", operator: "OpenAI", role: "model training crawler" },
  { id: "Claude-SearchBot", operator: "Anthropic", role: "Claude search index" },
  { id: "Claude-User", operator: "Anthropic", role: "fetches a page when a Claude user asks" },
  { id: "ClaudeBot", operator: "Anthropic", role: "model training crawler" },
  { id: "Perplexity-User", operator: "Perplexity", role: "fetches a page when a Perplexity user asks" },
  { id: "PerplexityBot", operator: "Perplexity", role: "Perplexity search index" },
  { id: "Google-InspectionTool", operator: "Google", role: "Search Console testing tool" },
  { id: "GoogleOther", operator: "Google", role: "Google research and one-off crawls" },
  { id: "Googlebot", operator: "Google", role: "Google Search crawler" },
  { id: "bingbot", operator: "Microsoft", role: "Bing and Copilot search crawler" },
  { id: "Applebot-Extended", operator: "Apple", role: "Apple Intelligence training" },
  { id: "Applebot", operator: "Apple", role: "Siri and Spotlight crawler" },
  { id: "meta-externalagent", operator: "Meta", role: "Meta AI crawler" },
  { id: "meta-externalfetcher", operator: "Meta", role: "fetches a page when a Meta AI user asks" },
  { id: "Amazonbot", operator: "Amazon", role: "Alexa and Amazon crawler" },
  { id: "DuckAssistBot", operator: "DuckDuckGo", role: "DuckDuckGo AI answers" },
  { id: "DuckDuckBot", operator: "DuckDuckGo", role: "DuckDuckGo search crawler" },
  { id: "MistralAI-User", operator: "Mistral", role: "fetches a page when a Le Chat user asks" },
  { id: "Bytespider", operator: "ByteDance", role: "ByteDance crawler" },
  { id: "CCBot", operator: "Common Crawl", role: "open web archive used to train many models" },
  { id: "YandexBot", operator: "Yandex", role: "Yandex search crawler" },
];

const CRAWLER_BY_ID = new Map(CRAWLERS.map((c) => [c.id, c]));

export function crawlerBot(id: string): CrawlerBot | undefined {
  return CRAWLER_BY_ID.get(id);
}

/** First crawler whose token appears in the user agent (case-insensitive), or null. */
export function classifyCrawler(ua: string | null | undefined): CrawlerBot | null {
  if (!ua) return null;
  const lower = ua.toLowerCase();
  for (const bot of CRAWLERS) {
    if (lower.includes(bot.id.toLowerCase())) return bot;
  }
  return null;
}

/** Our own hosts; referrals from these are internal and never counted. */
function isOwnHost(host: string): boolean {
  return host === "padelcourtsfinder.com" || host.endsWith(".padelcourtsfinder.com") || host.endsWith(".vercel.app");
}

function is(host: string, domain: string): boolean {
  return host === domain || host.endsWith(`.${domain}`);
}

/** Source id for a referrer host (lowercase, no port), "self" for our own site, or null when unknown. */
export function sourceForHost(rawHost: string): string | null {
  const host = rawHost.toLowerCase().replace(/^www\./, "").replace(/\.$/, "");
  if (!host) return null;
  if (isOwnHost(host)) return "self";
  // AI assistants first: gemini.google.com must not fall through to Google search.
  if (is(host, "chatgpt.com") || host === "chat.openai.com") return "chatgpt";
  if (is(host, "claude.ai")) return "claude";
  if (host === "gemini.google.com" || host === "bard.google.com") return "gemini";
  if (is(host, "perplexity.ai")) return "perplexity";
  if (host === "copilot.microsoft.com" || is(host, "copilot.cloud.microsoft")) return "copilot";
  if (is(host, "grok.com") || is(host, "x.ai")) return "grok";
  if (is(host, "meta.ai")) return "meta-ai";
  if (is(host, "deepseek.com")) return "deepseek";
  if (host === "chat.mistral.ai") return "mistral";
  if (is(host, "poe.com")) return "poe";
  if (is(host, "you.com")) return "you";
  if (is(host, "phind.com")) return "phind";
  // Search engines.
  if (/^google\.(com|[a-z]{2}|co\.[a-z]{2}|com\.[a-z]{2})$/.test(host)) return "google";
  if (host === "com.google.android.googlequicksearchbox") return "google";
  if (is(host, "bing.com")) return "bing";
  if (is(host, "duckduckgo.com")) return "duckduckgo";
  if (is(host, "search.yahoo.com") || host === "yahoo.com") return "yahoo";
  if (host === "search.brave.com") return "brave";
  if (is(host, "ecosia.org")) return "ecosia";
  if (is(host, "kagi.com")) return "kagi";
  if (/^yandex\.[a-z.]{2,10}$/.test(host) || host === "ya.ru") return "yandex";
  if (is(host, "baidu.com")) return "baidu";
  return null;
}

const UTM_NAMES: Record<string, string> = {
  chatgpt: "chatgpt",
  openai: "chatgpt",
  claude: "claude",
  anthropic: "claude",
  gemini: "gemini",
  perplexity: "perplexity",
  copilot: "copilot",
  grok: "grok",
  deepseek: "deepseek",
  mistral: "mistral",
  lechat: "mistral",
  phind: "phind",
  google: "google",
  bing: "bing",
  duckduckgo: "duckduckgo",
};

function hostOf(referrer: string): string | null {
  try {
    const u = new URL(referrer);
    return u.hostname || null;
  } catch {
    return null;
  }
}

export interface ReferralClass {
  source: string;
  category: ReferralCategory;
}

/**
 * Classify one landing. Referrer host first, then utm_source. Returns null for
 * internal visits (our own site) and for visits with neither signal. Unknown
 * external sites become { source: "other", category: "other" }; their hosts are
 * never stored or shown.
 */
export function classifyReferral(referrer: string | null | undefined, utmSource: string | null | undefined): ReferralClass | null {
  let sawExternal = false;
  const host = referrer ? hostOf(referrer) : null;
  if (host) {
    const id = sourceForHost(host);
    if (id === "self") {
      // Internal navigation; still let a utm_source on the URL decide below.
    } else if (id) {
      return { source: id, category: referralSource(id)!.category };
    } else {
      sawExternal = true;
    }
  }
  const utm = (utmSource ?? "").trim().toLowerCase();
  if (utm) {
    const id = utm.includes(".") ? sourceForHost(utm) : UTM_NAMES[utm] ?? null;
    if (id && id !== "self") return { source: id, category: referralSource(id)!.category };
    if (id !== "self") sawExternal = true;
  }
  return sawExternal ? { source: "other", category: "other" } : null;
}
