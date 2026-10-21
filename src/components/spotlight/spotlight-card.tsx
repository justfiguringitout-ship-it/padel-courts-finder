'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackSpotlightClick, trackSpotlightImpression } from '@/lib/analytics';
import { isSpotlightPinned, type SpotlightWindow } from '@/lib/spotlight-dates';
import type { SpotlightPlacement } from '@/lib/spotlight-events';
import { sendSpotlightEvent } from '@/lib/spotlight-track';

interface SpotlightCardProps {
  slug: string;
  club: string;
  title: string;
  line: string;
  placement: Exclude<SpotlightPlacement, 'article'>;
  window: SpotlightWindow;
  /** Small location line, e.g. "Morganville, NJ" */
  place?: string;
}

/**
 * The pinned "Sponsored · Club Spotlight" card on state, city and club pages.
 * It sits above the listings and never changes their order. Pages are static,
 * so the card also checks the 30-day window in the browser and hides itself
 * once it has passed. Logs one impression per page view when at least half of
 * the card is on screen, and on the club's own page one "view" of that page.
 */
export function SpotlightCard({ slug, club, title, line, placement, window: win, place }: SpotlightCardProps) {
  const [inWindow, setInWindow] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const href = `/spotlight/${slug}`;

  useEffect(() => {
    const ok = isSpotlightPinned(win);
    setInWindow(ok);
    if (!ok) return;

    if (placement === 'club-page') sendSpotlightEvent(slug, 'view', 'club-page');

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (done || !entries.some((e) => e.isIntersecting)) return;
        done = true;
        trackSpotlightImpression(club, placement);
        sendSpotlightEvent(slug, 'impression', placement);
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [slug, club, placement, win]);

  if (!inWindow) return null;

  const onClick = () => {
    trackSpotlightClick(club, 'article', href, placement);
    sendSpotlightEvent(slug, 'click', placement, 'article');
  };

  return (
    <aside ref={ref} className="spotlight-card" aria-label={`Sponsored: Club Spotlight on ${club}`} data-spotlight-placement={placement}>
      <p className="spotlight-label">
        <span>Sponsored</span>
        <span aria-hidden="true">·</span>
        <span>Club Spotlight</span>
      </p>
      <a href={href} onClick={onClick} className="spotlight-card-link" data-spotlight-kind="article">
        <span className="spotlight-card-title">{title}</span>
        <span className="spotlight-card-line">{line}</span>
        <span className="spotlight-card-cta">
          Read the Spotlight
          <ArrowRight aria-hidden="true" />
        </span>
      </a>
      <p className="spotlight-card-note">
        {placement === 'club-page'
          ? 'This is a paid placement by the club, and the details on this page are checked the same way as every other listing.'
          : `${place ? `${club}, ${place}. ` : ''}This is a paid placement, and it does not change the order of the clubs listed on this page.`}
      </p>
    </aside>
  );
}
