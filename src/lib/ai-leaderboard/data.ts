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
import { medalForRank, tiersFor, type MedalId, type TierRewardId } from "./rewards";

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

export interface EarnedReward {
  id: TierRewardId;
  name: string;
  at: number;
  /** Leaderboard day (US Eastern) the count since launch first reached `at`. */
  earnedOn: string;
}

export interface NextReward {
  id: TierRewardId;
  name: string;
  at: number;
  /** More visits (or page hits, for the Visitor Badge of a crawler) still needed. */
  needed: number;
}

/** One source's full standing: ranks and medals per period, rewards since launch. */
export interface Standing {
  id: string;
  name: string;
  operator: string;
  board: BoardKey;
  sinceLaunch: number;
  /** All-time rank since launch; null when the count is zero. */
  rankSinceLaunch: number | null;
  ranks: Record<PeriodKey, number | null>;
  counts: Record<PeriodKey, number>;
  medals: Record<PeriodKey, MedalId | null>;
  rewards: EarnedReward[];
  next: NextReward | null;
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
  /** Every candidate per board, ordered by count since launch (then name). */
  standings: Record<BoardKey, Standing[]>;
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

/** Day each cumulative threshold was first reached, per id. Rows need not be sorted. */
function cumulativeDays(rows: { day: string; id: string; n: number }[]): Map<string, { day: string; total: number }[]> {
  const byId = new Map<string, Map<string, number>>();
  for (const r of rows) {
    const days = byId.get(r.id) ?? new Map<string, number>();
    days.set(r.day, (days.get(r.day) ?? 0) + r.n);
    byId.set(r.id, days);
  }
  const out = new Map<string, { day: string; total: number }[]>();
  for (const [id, days] of byId) {
    let total = 0;
    out.set(
      id,
      [...days.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([day, n]) => ({ day, total: (total += n) }))
    );
  }
  return out;
}

function buildStandings(
  board: BoardKey,
  allTime: BoardEntry[],
  periods: Leaderboard["periods"],
  history: Map<string, { day: string; total: number }[]>
): Standing[] {
  const tiers = tiersFor(board === "crawlers" ? "crawler" : "referral");
  const byPeriod = Object.fromEntries(
    PERIODS.map((p) => [p.key, new Map(periods[p.key].boards[board].map((e) => [e.id, e]))])
  ) as Record<PeriodKey, Map<string, BoardEntry>>;
  return allTime.map((e) => {
    const ranks = {} as Standing["ranks"];
    const counts = {} as Standing["counts"];
    const medals = {} as Standing["medals"];
    for (const p of PERIODS) {
      const pe = byPeriod[p.key].get(e.id);
      ranks[p.key] = pe?.rank ?? null;
      counts[p.key] = pe?.count ?? 0;
      medals[p.key] = medalForRank(pe?.rank ?? null);
    }
    const days = history.get(e.id) ?? [];
    const rewards: EarnedReward[] = tiers
      .filter((t) => e.count >= t.at)
      .map((t) => ({ id: t.id, name: t.name, at: t.at, earnedOn: days.find((d) => d.total >= t.at)?.day ?? "" }));
    const nextTier = tiers.find((t) => e.count < t.at);
    return {
      id: e.id,
      name: e.name,
      operator: e.operator,
      board,
      sinceLaunch: e.count,
      rankSinceLaunch: e.rank,
      ranks,
      counts,
      medals,
      rewards,
      next: nextTier ? { id: nextTier.id, name: nextTier.name, at: nextTier.at, needed: nextTier.at - e.count } : null,
    };
  });
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
  const refHistory = cumulativeDays(referrals.map((r) => ({ day: r.day, id: r.source, n: r.visits })));
  const crawlHistory = cumulativeDays(crawlers.map((r) => ({ day: r.day, id: r.bot, n: r.hits })));

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
    standings: {
      ai: buildStandings("ai", all.boards.ai, periods, refHistory),
      search: buildStandings("search", all.boards.search, periods, refHistory),
      crawlers: buildStandings("crawlers", all.boards.crawlers, periods, crawlHistory),
    },
  };
}
