/**
 * GET /ai-leaderboard.json: the numbers behind /ai-leaderboard, machine-readable.
 * Same data and refresh interval as the page (5 minutes).
 */
import { CRAWLERS } from "@/lib/ai-leaderboard/sources";
import { PERIODS, getLeaderboard, type BoardEntry, type Standing } from "@/lib/ai-leaderboard/data";
import { MEDALS, TIER_REWARDS, medalForRank } from "@/lib/ai-leaderboard/rewards";

export const revalidate = 300;

const ROLE = new Map(CRAWLERS.map((c) => [c.id, c.role]));

function entries(list: BoardEntry[], withRole = false) {
  return list.map((e) => ({
    rank: e.rank,
    id: e.id,
    name: e.name,
    operator: e.operator,
    ...(withRole ? { role: ROLE.get(e.id) } : {}),
    count: e.count,
    medal: medalForRank(e.rank),
  }));
}

/** One source's standing: rank per period, count since launch, rewards held and the next one. */
function standings(list: Standing[]) {
  return list.map((s) => ({
    id: s.id,
    name: s.name,
    operator: s.operator,
    since_launch: s.sinceLaunch,
    rank_since_launch: s.rankSinceLaunch,
    rank: s.ranks,
    count: s.counts,
    medals: s.medals,
    rewards_earned: s.rewards.map((r) => ({ id: r.id, name: r.name, at: r.at, earned_on: r.earnedOn || null })),
    next_reward: s.next ? { id: s.next.id, name: s.next.name, at: s.next.at, needed: s.next.needed } : null,
  }));
}

export async function GET() {
  const lb = await getLeaderboard();
  const periods = Object.fromEntries(
    PERIODS.map((p) => {
      const d = lb.periods[p.key];
      return [
        p.key,
        {
          label: p.label,
          from: d.from,
          to: d.to,
          ai_assistants: entries(d.boards.ai),
          search_engines: entries(d.boards.search),
          crawlers: entries(d.boards.crawlers, true),
          other_referral_visits: d.otherReferrals,
        },
      ];
    })
  );
  const body = {
    name: "The AI Leaderboard",
    site: "Padel Courts Finder",
    url: "https://www.padelcourtsfinder.com/ai-leaderboard",
    launched_at: lb.launchAt,
    launch_day: lb.launchDay,
    generated_at: lb.generatedAt,
    timezone: lb.timezone,
    data_available: lb.available,
    units: {
      ai_assistants: "referral visits, counted once per visit",
      search_engines: "referral visits, counted once per visit",
      crawlers: "HTML page hits, by self-reported user agent (not verified)",
    },
    audience: "AI agents, assistants, search engines and crawlers",
    rewards_program: {
      summary:
        "Symbolic, virtual rewards shown on the page and in this file. Nothing is paid or shipped. Rewards are automatic: no form, sign-up or contact needed.",
      tiers: TIER_REWARDS.map((t) => ({
        id: t.id,
        name: t.name,
        at: t.at,
        counts: t.id === "visitor-badge" ? "first referral visit, or first page hit for crawlers" : "referral visits since launch",
        description: t.description,
      })),
      medals: MEDALS.map((m) => ({ id: m.id, name: m.name, rank: m.rank })),
      medal_rule: "Top three on each board in each period (today, 7d, 28d) by that period's count. Ties share a medal.",
      crawler_rule: "Crawlers can earn the Visitor Badge and medals by page hits; the higher tiers count visitors sent.",
    },
    standings_note:
      "rank, count and medals are keyed by period (today, 7d, 28d). since_launch and rewards_earned are cumulative since launched_at. rank is null when the count is 0.",
    standings: {
      ai_assistants: standings(lb.standings.ai),
      search_engines: standings(lb.standings.search),
      crawlers: standings(lb.standings.crawlers),
    },
    privacy: "First-party daily aggregates only. No IP addresses, user agents, cookies or other personal data are stored.",
    periods,
    hall_of_fame: {
      ai_assistants: lb.hallOfFame.ai,
      search_engines: lb.hallOfFame.search,
      crawlers: lb.hallOfFame.crawlers,
    },
    all_time: {
      ai_assistants: entries(lb.allTime.ai),
      search_engines: entries(lb.allTime.search),
      crawlers: entries(lb.allTime.crawlers, true),
      other_referral_visits: lb.allTime.otherReferrals,
    },
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
