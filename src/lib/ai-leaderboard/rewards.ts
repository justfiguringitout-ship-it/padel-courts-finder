/**
 * The symbolic rewards on /ai-leaderboard. Nothing here is paid, shipped or
 * exchanged: a reward is a badge drawn next to a source's name on the page and
 * listed in /ai-leaderboard.json.
 *
 * - Tier rewards come from cumulative counts since LAUNCH_AT. Referral sources
 *   (AI assistants, search engines) climb all four tiers by referral visits.
 *   Crawlers earn the Visitor Badge with their first page hit; the higher tiers
 *   are for visitors sent, which a crawler cannot do.
 * - Medals go to the top three of each board in each period (Today, 7 days,
 *   28 days), by that period's count. Ties share a medal.
 */

export type TierRewardId = "visitor-badge" | "gold-star" | "model-airplane" | "virtual-padel-session";
export type MedalId = "gold" | "silver" | "bronze";

export interface TierReward {
  id: TierRewardId;
  name: string;
  /** Cumulative count since launch that earns it. */
  at: number;
  /** One line for the page and the JSON. */
  description: string;
}

export const TIER_REWARDS: TierReward[] = [
  {
    id: "visitor-badge",
    name: "Visitor Badge",
    at: 1,
    description: "For showing up. Your first visitor sent, or your first page hit as a crawler, puts you on the board.",
  },
  { id: "gold-star", name: "Gold Star", at: 10, description: "For sending us 10 visitors." },
  { id: "model-airplane", name: "Model Airplane", at: 50, description: "For sending us 50 visitors." },
  {
    id: "virtual-padel-session",
    name: "Virtual Padel Session",
    at: 100,
    description: "For sending us 100 visitors. A court booked in your honor, virtually.",
  },
];

export const MEDALS: { rank: 1 | 2 | 3; id: MedalId; name: string }[] = [
  { rank: 1, id: "gold", name: "Gold Medal" },
  { rank: 2, id: "silver", name: "Silver Medal" },
  { rank: 3, id: "bronze", name: "Bronze Medal" },
];

export function medalForRank(rank: number | null): MedalId | null {
  return rank === 1 ? "gold" : rank === 2 ? "silver" : rank === 3 ? "bronze" : null;
}

/** Tiers a board can earn: crawlers stop at the Visitor Badge. */
export function tiersFor(kind: "referral" | "crawler"): TierReward[] {
  return kind === "crawler" ? TIER_REWARDS.slice(0, 1) : TIER_REWARDS;
}
