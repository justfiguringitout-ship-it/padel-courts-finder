/**
 * Turns the daily counter rows into the three leaderboards shown on
 * /ai-leaderboard and served at /ai-leaderboard.json.
 */
import {
  AI_SOURCES,
  CRAWLERS,
  LAUNCH_AT,
  LEADERBOARD_TIMEZONE,
  SEARCH_SOURCES,
} from "./sources";
import { leaderboardDay, readAllRows, type CrawlerRow, type ReferralRow } from "./store";

export type PeriodKey = "today" | "7d" | "28d";
export type BoardKey = "ai" | "search" | "crawlers";

export const PERIODS: { key: PeriodKey; label: string; days: number }[] = [
  { key: "today", label: "Today", days: 1 },
  { key: "7d", label: "7 days", days: 7 },
  { key: "28d", label: "28 days", days: 28 },
];

export interface BoardEntry {
  id: string;
  name: string;
  operator: string;
  count: number;
  /** Competition rank (ties share a rank); null when the count is zero. */
  rank: number | null;
}

export interface HallOfFameEntry {
  id: string;
  name: string;
  operator: string;
  count: number;
}

export interface Leaderboard {
  launchAt: string;
  launchDay: string;
  generatedAt: string;
  timezone: string;
  today: string;
  available: boolean;
  periods: Record<PeriodKey, { from: string; to: string; boards: Record<BoardKey, BoardEntry[]>; otherReferrals: number }>;
  hallOfFame: Record<BoardKey, HallOfFameEntry | null>;
  allTime: Record<BoardKey, BoardEntry[]> & { otherReferrals: number };
}

interface Candidate {
  id: string;
  name: string;
  operator: string;
}

const AI_CANDIDATES: Candidate[] = AI_SOURCES.map(({ id, name, operator }) => ({ id, name, operator }));
const SEARCH_CANDIDATES: Candidate[] = SEARCH_SOURCES.map(({ id, name, operator }) => ({ id, name, operator }));
const CRAWLER_CANDIDATES: Candidate[] = CRAWLERS.map(({ id, operator }) => ({ id, name: id, operator }));

/** YYYY-MM-DD minus n days (pure calendar math in UTC). */
function minusDays(day: string, n: number): string {
  const [y, m, d] = day.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d - n)).toISOString().slice(0, 10);
}

function rankBoard(candidates: Candidate[], counts: Map<string, number>): BoardEntry[] {
  const list = candidates.map((c) => ({ ...c, count: counts.get(c.id) ?? 0, rank: null as number | null }));
  list.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  let prevCount = -1;
  let prevRank = 0;
  list.forEach((e, i) => {
    if (e.count === 0) return;
    e.rank = e.count === prevCount ? prevRank : i + 1;
    prevCount = e.count;
    prevRank = e.rank;
  });
  return list;
}

function sumBy<T>(rows: T[], key: (r: T) => string, value: (r: T) => number): Map<string, number> {
  const m = new Map<string, number>();
  for (const r of rows) m.set(key(r), (m.get(key(r)) ?? 0) + value(r));
  return m;
}

function buildBoards(referrals: ReferralRow[], crawlers: CrawlerRow[]) {
  const refCounts = sumBy(referrals, (r) => r.source, (r) => r.visits);
  const crawlCounts = sumBy(crawlers, (r) => r.bot, (r) => r.hits);
  return {
    boards: {
      ai: rankBoard(AI_CANDIDATES, refCounts),
      search: rankBoard(SEARCH_CANDIDATES, refCounts),
      crawlers: rankBoard(CRAWLER_CANDIDATES, crawlCounts),
    } as Record<BoardKey, BoardEntry[]>,
    otherReferrals: refCounts.get("other") ?? 0,
  };
}

function leader(board: BoardEntry[]): HallOfFameEntry | null {
  const top = board[0];
  return top && top.count > 0 ? { id: top.id, name: top.name, operator: top.operator, count: top.count } : null;
}

export async function getLeaderboard(now = new Date()): Promise<Leaderboard> {
  let referrals: ReferralRow[] = [];
  let crawlers: CrawlerRow[] = [];
  let available = true;
  try {
    ({ referrals, crawlers } = await readAllRows());
  } catch (err) {
    available = false;
    console.error("ai-leaderboard read", err instanceof Error ? err.message : err);
  }

  const today = leaderboardDay(now);
  const launchDay = leaderboardDay(new Date(LAUNCH_AT));
  const periods = {} as Leaderboard["periods"];
  for (const p of PERIODS) {
    const from = minusDays(today, p.days - 1);
    const inRange = (day: string) => day >= from && day <= today;
    periods[p.key] = {
      // Nothing was counted before launch, so a window never starts earlier than the launch day.
      from: from < launchDay ? launchDay : from,
      to: today,
      ...buildBoards(
        referrals.filter((r) => inRange(r.day)),
        crawlers.filter((r) => inRange(r.day))
      ),
    };
  }
  const all = buildBoards(referrals, crawlers);

  return {
    launchAt: LAUNCH_AT,
    launchDay,
    generatedAt: now.toISOString(),
    timezone: LEADERBOARD_TIMEZONE,
    today,
    available,
    periods,
    hallOfFame: {
      ai: leader(all.boards.ai),
      search: leader(all.boards.search),
      crawlers: leader(all.boards.crawlers),
    },
    allTime: { ...all.boards, otherReferrals: all.otherReferrals },
  };
}
