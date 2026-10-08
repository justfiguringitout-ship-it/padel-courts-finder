/**
 * Shared "highest rated" ranking.
 *
 * Raw star averages let a club with 2 five-star reviews outrank a club with
 * 4.8 from 300 reviews. We rank by a Bayesian weighted rating instead:
 *
 *   score = (v / (v + m)) * R + (m / (v + m)) * C
 *
 *   v = review count, R = the club's average rating,
 *   C = mean rating across all clubs that have reviews,
 *   m = prior weight (how many "average" reviews every club starts with).
 *
 * m = 20: reviewed clubs have a median of about 30 Google reviews (p25 about
 * 13, as of 2026-10), so a club needs roughly that many before its own average
 * outweighs the site mean. With C around 4.73, a 5.0 from 2 reviews scores
 * about 4.76 while a 4.8 from 231 reviews scores about 4.79. Results were
 * identical for m = 10, 20 and 40 at the top of the list.
 *
 * Clubs with no rating or no reviews always sort after every reviewed club.
 * Only the order changes: pages still display the real rating and count.
 */

export const RATING_PRIOR_WEIGHT = 20;

export interface RatedCourt {
  rating: {
    ratingValue: number;
    reviewCount: number;
  };
  featured?: boolean;
  name?: string;
}

function hasReviews(court: RatedCourt): boolean {
  const { ratingValue, reviewCount } = court.rating ?? { ratingValue: 0, reviewCount: 0 };
  return (
    Number.isFinite(ratingValue) &&
    Number.isFinite(reviewCount) &&
    ratingValue > 0 &&
    reviewCount > 0
  );
}

/** Mean rating across clubs that have at least one review (the prior C). */
export function meanRating(courts: readonly RatedCourt[]): number {
  const rated = courts.filter(hasReviews);
  if (rated.length === 0) return 0;
  return rated.reduce((sum, c) => sum + c.rating.ratingValue, 0) / rated.length;
}

/** Bayesian weighted rating, or null when the club has no reviews. */
export function weightedRating(
  court: RatedCourt,
  prior: number,
  m: number = RATING_PRIOR_WEIGHT
): number | null {
  if (!hasReviews(court)) return null;
  const v = court.rating.reviewCount;
  const R = court.rating.ratingValue;
  return (v / (v + m)) * R + (m / (v + m)) * prior;
}

/**
 * Sort clubs best first by weighted rating. Returns a new array.
 *
 * - `pool`: clubs used to compute the prior C. Pass the full directory so a
 *   state or city page ranks against the same baseline as /search. Defaults to
 *   the clubs being sorted.
 * - `featuredFirst`: keep featured listings pinned above the rest (each group
 *   is still ordered by weighted rating).
 */
export function sortByWeightedRating<T extends RatedCourt>(
  courts: readonly T[],
  options: { pool?: readonly RatedCourt[]; featuredFirst?: boolean; m?: number } = {}
): T[] {
  const { pool = courts, featuredFirst = false, m = RATING_PRIOR_WEIGHT } = options;
  const prior = meanRating(pool);
  const scored = courts.map((court, index) => ({
    court,
    index,
    score: weightedRating(court, prior, m),
  }));

  scored.sort((a, b) => {
    if (featuredFirst) {
      const fa = a.court.featured ? 1 : 0;
      const fb = b.court.featured ? 1 : 0;
      if (fa !== fb) return fb - fa;
    }
    // Unreviewed clubs go after every reviewed club.
    if (a.score === null && b.score !== null) return 1;
    if (a.score !== null && b.score === null) return -1;
    if (a.score !== null && b.score !== null && a.score !== b.score) {
      return b.score - a.score;
    }
    // Ties: more reviews first, then keep the original (stable) order.
    const reviewDiff = (b.court.rating?.reviewCount ?? 0) - (a.court.rating?.reviewCount ?? 0);
    if (reviewDiff !== 0) return reviewDiff;
    return a.index - b.index;
  });

  return scored.map((s) => s.court);
}
