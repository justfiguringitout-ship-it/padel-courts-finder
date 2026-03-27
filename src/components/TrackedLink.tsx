'use client';

import { trackClubWebsiteClick, trackClubPhoneClick, trackSocialClick, trackAffiliateClick, trackFeaturedListingClick } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  type: 'website' | 'phone' | 'social' | 'affiliate' | 'featured';
  clubName?: string;
  productName?: string;
  platform?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({ href, type, clubName, productName, platform, children, ...props }: TrackedLinkProps) {
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
      case 'featured':
        if (clubName) trackFeaturedListingClick(clubName);
        break;
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
