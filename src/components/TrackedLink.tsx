'use client';

import { withReferral } from '@/lib/referral';
import { trackClubWebsiteClick, trackClubPhoneClick, trackSocialClick, trackAffiliateClick, trackRetailerClick, trackFeaturedListingClick } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  type: 'website' | 'phone' | 'social' | 'affiliate' | 'retailer' | 'featured';
  clubName?: string;
  productName?: string;
  platform?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({ href, type, clubName, productName, platform, children, rel, ...props }: TrackedLinkProps) {
  // Affiliate links must carry rel="sponsored" (Google) — enforce it centrally
  // Plain store links (no affiliate program) are nofollow but not sponsored
  const resolvedRel =
    type === 'affiliate'
      ? 'sponsored nofollow noopener noreferrer'
      : type === 'retailer'
        ? rel ?? 'nofollow noopener noreferrer'
        : rel;

  const handleClick = () => {
    switch (type) {
      case 'website':
        if (clubName) trackClubWebsiteClick(clubName, href);
        break;
      case 'phone':
        if (clubName) trackClubPhoneClick(clubName, href);
        break;
      case 'social':
        if (clubName && platform) trackSocialClick(clubName, platform, href);
        break;
      case 'affiliate':
        if (productName) trackAffiliateClick(productName, href);
        break;
      case 'retailer':
        if (productName) trackRetailerClick(productName, href);
        break;
      case 'featured':
        if (clubName) trackFeaturedListingClick(clubName);
        break;
    }
  };

  // Club links carry a referral tag so clubs see us in their own analytics
  const outHref = type === 'website' || type === 'featured' ? withReferral(href) : href;

  return (
    <a href={outHref} onClick={handleClick} rel={resolvedRel} {...props}>
      {children}
    </a>
  );
}
