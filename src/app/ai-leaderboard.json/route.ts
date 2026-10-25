/**
 * GET /ai-leaderboard.json: the numbers behind /ai-leaderboard, machine-readable.
 * Same data and refresh interval as the page (5 minutes).
 */
import { CRAWLERS } from "@/lib/ai-leaderboard/sources";
import { PERIODS, getLeaderboard, type BoardEntry } from "@/lib/ai-leaderboard/data";

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
