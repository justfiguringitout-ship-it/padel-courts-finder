'use client';

import { useEffect } from 'react';
import { sendSpotlightEvent } from '@/lib/spotlight-track';

const ENGAGED_SECONDS = 30;
const READ_SHARE = 0.75;

/**
 * Article-side Spotlight log: one "view" per page view, "engaged" after 30
 * seconds with the tab visible, "read" once the reader scrolls 75% of the way
 * through the article body (element with id `bodyId`). Renders nothing.
 */
export function SpotlightArticleTracker({ slug, bodyId }: { slug: string; bodyId: string }) {
  useEffect(() => {
    sendSpotlightEvent(slug, 'view', 'article');

    let visibleSeconds = 0;
    let engaged = false;
    const timer = window.setInterval(() => {
      if (engaged || document.visibilityState !== 'visible') return;
      visibleSeconds += 1;
      if (visibleSeconds >= ENGAGED_SECONDS) {
        engaged = true;
        sendSpotlightEvent(slug, 'engaged', 'article');
        window.clearInterval(timer);
      }
    }, 1000);

    let read = false;
    const onScroll = () => {
      if (read) return;
      const el = document.getElementById(bodyId);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const seen = window.innerHeight - rect.top;
      if (rect.height > 0 && seen / rect.height >= READ_SHARE) {
        read = true;
        sendSpotlightEvent(slug, 'read', 'article');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearInterval(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [slug, bodyId]);

  return null;
}
