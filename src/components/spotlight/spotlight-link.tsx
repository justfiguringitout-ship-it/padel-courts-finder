'use client';

import { trackSpotlightClick } from '@/lib/analytics';
import type { SpotlightClickKind, SpotlightPlacement } from '@/lib/spotlight-events';
import { sendSpotlightEvent } from '@/lib/spotlight-track';

interface SpotlightLinkProps {
  slug: string;
  club: string;
  kind: SpotlightClickKind;
  placement: SpotlightPlacement;
  href: string;
  /** Outbound links get rel="sponsored noopener noreferrer" and open in a new tab. */
  outbound?: boolean;
  /** Record the click (Plausible and the first-party log). Off for drafts. */
  track?: boolean;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

/** A link inside a Club Spotlight that records which kind of click it was. */
export function SpotlightLink({ slug, club, kind, placement, href, outbound, track = true, className, children, ...rest }: SpotlightLinkProps) {
  const web = /^https?:\/\//i.test(href);
  const onClick = () => {
    if (!track) return;
    trackSpotlightClick(club, kind, href, placement);
    sendSpotlightEvent(slug, 'click', placement, kind);
  };
  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
      rel={outbound ? 'sponsored noopener noreferrer' : undefined}
      target={outbound && web ? '_blank' : undefined}
      data-spotlight-kind={kind}
      aria-label={rest['aria-label']}
    >
      {children}
    </a>
  );
}
