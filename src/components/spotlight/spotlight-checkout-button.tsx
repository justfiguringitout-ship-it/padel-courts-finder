'use client';

import type { ReactNode } from 'react';
import { trackPlausibleEvent } from '@/lib/analytics';

/**
 * Stripe Payment Link for the Club Spotlight ($179, Padel Courts Finder
 * Stripe account, plink_1UTJHbGq7ETY3pEFTwY0TWFo). client_reference_id tells
 * us in Stripe which page sent the buyer; Plausible gets "Spotlight checkout
 * click" so we can see how many people start checkout.
 */
export const SPOTLIGHT_PAYMENT_LINK = 'https://buy.stripe.com/6oU7sL87d3RN6x78HF8Ra00';

export function SpotlightCheckoutButton({
  source,
  className,
  children,
}: {
  source: string;
  className?: string;
  children: ReactNode;
}) {
  const href = `${SPOTLIGHT_PAYMENT_LINK}?client_reference_id=${encodeURIComponent(source)}`;
  return (
    <a
      href={href}
      rel="noopener"
      className={className}
      onClick={() => trackPlausibleEvent('Spotlight checkout click', { source, page: window.location.pathname })}
    >
      {children}
    </a>
  );
}
