import type { Spotlight } from '@/data/spotlights';
import { getAdaptedCourtBySlug } from '@/lib/court-adapter';
import { SpotlightCard } from './spotlight-card';

interface PinnedSpotlightsProps {
  spotlights: Spotlight[];
  placement: 'state-card' | 'city-card' | 'club-page';
  className?: string;
}

/**
 * Server wrapper for the pinned "Sponsored · Club Spotlight" cards. Renders
 * nothing when no Spotlight is pinned for this page, so pages without a
 * sponsor are unchanged.
 */
export function PinnedSpotlights({ spotlights, placement, className }: PinnedSpotlightsProps) {
  if (!spotlights.length) return null;
  return (
    <div className={className}>
      <div className="flex flex-col gap-3">
        {spotlights.map((s) => {
          const court = getAdaptedCourtBySlug(s.clubSlug);
          const place = court ? `${court.address.city}, ${court.address.stateCode}` : undefined;
          return (
            <SpotlightCard
              key={s.slug}
              slug={s.slug}
              club={s.clubName}
              title={s.title}
              line={s.cardLine ?? s.dek}
              placement={placement}
              place={placement === 'club-page' ? undefined : place}
              window={{ status: s.status, publishDate: s.publishDate, pinnedUntil: s.pinnedUntil }}
            />
          );
        })}
      </div>
    </div>
  );
}
