/**
 * Storage for the AI leaderboard counters (pcf_referral_daily, pcf_crawler_daily).
 *
 * Production: Supabase project "padel-directory" over plain REST with the
 * service role key (server only; RLS is on with no policies). Each event is a
 * single RPC call (pcf_bump_referral / pcf_bump_crawler) that upserts +1.
 *
 * Local testing only: when PCF_LEADERBOARD_DEV_FILE is set and we are NOT on
 * Vercel, events are appended to that JSON-lines file instead and read back
 * from it, so the page can be checked without the service role key.
 */
import { promises as fs } from "node:fs";
import { LEADERBOARD_TIMEZONE } from "./sources";

export interface ReferralRow {
  day: string;
  source: string;
  category: string;
  visits: number;
}

export interface CrawlerRow {
  day: string;
  bot: string;
  operator: string;
  hits: number;
}

/** YYYY-MM-DD of `date` on the leaderboard's calendar (US Eastern). */
export function leaderboardDay(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: LEADERBOARD_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function supabaseConfig(): { url: string; key: string } | null {
  const url = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/+$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return url && key ? { url, key } : null;
}

function devFile(): string | null {
  const f = process.env.PCF_LEADERBOARD_DEV_FILE;
  return f && !process.env.VERCEL ? f : null;
}

async function rpc(fn: string, args: Record<string, string>): Promise<void> {
  const dev = devFile();
  if (dev) {
    await fs.appendFile(dev, JSON.stringify({ fn, day: leaderboardDay(), ...args }) + "\n");
    return;
  }
  const cfg = supabaseConfig();
  if (!cfg) return;
  const res = await fetch(`${cfg.url}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: {
      apikey: cfg.key,
      Authorization: `Bearer ${cfg.key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`supabase rpc ${fn} ${res.status}: ${(await res.text().catch(() => "")).slice(0, 200)}`);
}

export function bumpReferral(source: string, category: string): Promise<void> {
  return rpc("pcf_bump_referral", { p_source: source, p_category: category });
}

export function bumpCrawler(bot: string, operator: string): Promise<void> {
  return rpc("pcf_bump_crawler", { p_bot: bot, p_operator: operator });
}

async function selectAll<T>(table: string, select: string): Promise<T[]> {
  const cfg = supabaseConfig();
  if (!cfg) return [];
  const out: T[] = [];
  const page = 1000;
  for (let from = 0; from < 500_000; from += page) {
    const res = await fetch(`${cfg.url}/rest/v1/${table}?select=${select}&order=day.asc`, {
      headers: {
        apikey: cfg.key,
        Authorization: `Bearer ${cfg.key}`,
        Range: `${from}-${from + page - 1}`,
        "Range-Unit": "items",
      },
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`supabase select ${table} ${res.status}`);
    const rows = (await res.json()) as T[];
    out.push(...rows);
    if (rows.length < page) break;
  }
  return out;
}

/** Every daily row since launch. Tables hold one row per day per source, so this stays small. */
export async function readAllRows(): Promise<{ referrals: ReferralRow[]; crawlers: CrawlerRow[] }> {
  const dev = devFile();
  if (dev) {
    const text = await fs.readFile(dev, "utf8").catch(() => "");
    const ref = new Map<string, ReferralRow>();
    const crawl = new Map<string, CrawlerRow>();
    for (const line of text.split("\n").filter(Boolean)) {
      const e = JSON.parse(line) as Record<string, string>;
      if (e.fn === "pcf_bump_referral") {
        const k = `${e.day}|${e.p_source}`;
        const row = ref.get(k) ?? { day: e.day, source: e.p_source, category: e.p_category, visits: 0 };
        row.visits++;
        ref.set(k, row);
      } else if (e.fn === "pcf_bump_crawler") {
        const k = `${e.day}|${e.p_bot}`;
        const row = crawl.get(k) ?? { day: e.day, bot: e.p_bot, operator: e.p_operator, hits: 0 };
        row.hits++;
        crawl.set(k, row);
      }
    }
    return { referrals: [...ref.values()], crawlers: [...crawl.values()] };
  }
  const [referrals, crawlers] = await Promise.all([
    selectAll<ReferralRow>("pcf_referral_daily", "day,source,category,visits"),
    selectAll<CrawlerRow>("pcf_crawler_daily", "day,bot,operator,hits"),
  ]);
  return { referrals, crawlers };
}
