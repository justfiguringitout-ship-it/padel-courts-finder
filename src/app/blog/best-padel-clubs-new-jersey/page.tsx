import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in New Jersey (2026) | 8 Clubs Ranked Across the Garden State',
  description: 'New Jersey\'s 8 best padel clubs ranked for 2026. From Centercourt Morristown to Padel United\'s wellness campus. Complete NJ padel guide with pricing.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-new-jersey',
  },
  openGraph: {
    title: 'Best Padel Clubs in New Jersey (2026) | 8 Clubs Ranked Across the Garden State',
    description: 'New Jersey\'s 8 best padel clubs ranked for 2026. From Centercourt Morristown to Padel United\'s wellness campus. Complete NJ padel guide with pricing.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-new-jersey',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop' }],
  },
};

interface Club {
  rank: number;
  name: string;
  slug: string;
  score: number;
  location: string;
  courts: string;
  price: string;
  phone?: string;
  website?: string;
  description: string;
  highlights: string[];
  programs: string[];
  bestFor: string[];
}

const clubs: Club[] = [
  {
    rank: 1,
    name: 'Centercourt Morristown',
    slug: 'centercourt-morristown',
    score: 96,
    location: 'Morristown, NJ',
    courts: '6 courts (3 indoor, 3 outdoor)',
    price: '$$-$$$',
    description: 'New Jersey\'s first full-time padel facility and the state\'s most complete padel experience. Centercourt Morristown features 3 indoor and 3 outdoor courts, professional coaching, a pro shop, and a lounge/bar for post-match socializing. The indoor-outdoor mix means year-round play regardless of weather.',
    highlights: [
      'NJ\'s first full-time padel facility',
      '3 indoor + 3 outdoor courts',
      'Professional coaching staff',
      'Pro shop with top brands',
      'Lounge/bar on-site',
      'Social events & tournaments'
    ],
    programs: [
      'Court bookings ($20-60/hr)',
      'Private lessons ($60-120/hr)',
      'Group clinics',
      'League play',
      'Social tournaments',
      'Open play sessions'
    ],
    bestFor: [
      'Morris County residents',
      'Year-round players (indoor + outdoor)',
      'Social players (lounge/bar)',
      'All skill levels'
    ]
  },
  {
    rank: 2,
    name: 'Padel United Sports Club',
    slug: 'padel-united-sports-club',
    score: 95,
    location: 'Cresskill, NJ',
    courts: '6 indoor courts',
    price: '$$$-$$$$',
    description: 'The most luxurious padel club in New Jersey. Padel United in Cresskill combines 6 pristine indoor courts with a full wellness campus: mineral pool, cold/hot plunge, sauna, steam room, gym, and red light therapy. Memberships from $275/month with court fees 50% off for members.',
    highlights: [
      '6 pristine indoor courts',
      'Mineral pool & cold/hot plunge',
      'Sauna & steam room',
      'Full gym & red light therapy',
      'Pro shop & cafe',
      'Premium wellness experience'
    ],
    programs: [
      'Memberships from $275/mo',
      'Private lessons ($100-160/hr)',
      'Member court fee discounts (50% off)',
      'Group clinics',
      'Wellness programs',
      'Corporate events'
    ],
    bestFor: [
      'Luxury & wellness seekers',
      'Bergen County residents',
      'Members wanting all-in-one facility',
      'Serious competitive players'
    ]
  },
  {
    rank: 3,
    name: 'Rax New Jersey',
    slug: 'rax-new-jersey',
    score: 93,
    location: 'Oakland, NJ',
    courts: '3 indoor courts',
    price: '$$-$$$',
    description: 'Brand new indoor padel club with 3 panoramic championship courts featuring 40-foot ceilings -- the highest in the eastern US. Rax NJ brings a premium playing experience with free intro clinics and community events like pizza & padel nights.',
    highlights: [
      '40-foot ceilings (highest in eastern US)',
      '3 panoramic championship courts',
      'Free introductory clinics',
      'Pizza & padel community nights',
      'Brand new modern facility',
      'Individual & family memberships'
    ],
    programs: [
      'Individual membership ($220/mo)',
      'Family membership ($360/mo)',
      'Clinics ($45/session)',
      'Free intro classes',
      'Equipment rental included for members',
      'Community events'
    ],
    bestFor: [
      'Players wanting premium court experience',
      'Families (family membership)',
      'Beginners (free intro clinics)',
      'North Jersey residents'
    ]
  },
  {
    rank: 4,
    name: 'Englewood Field Club',
    slug: 'englewood-field-club',
    score: 91,
    location: 'Englewood, NJ',
    courts: '6 outdoor courts',
    price: 'Members Only',
    description: 'A private family-oriented athletic club in Englewood with 6 padel courts bookable via Playtomic. Beyond padel, members enjoy tennis, pickleball, platform tennis, squash, pool, ice rink, and more. The most courts at any single NJ location.',
    highlights: [
      '6 outdoor padel courts (most in NJ)',
      'Private family athletic club',
      'Bookable via Playtomic',
      'Pool, ice rink, squash & more',
      'Restaurant on-site',
      'Google Rating: 4.7'
    ],
    programs: [
      'Member court bookings',
      'Family programs',
      'Multi-sport access',
      'Youth activities',
      'Social events'
    ],
    bestFor: [
      'Families seeking multi-sport club',
      'Bergen County residents',
      'Private club members',
      'Multi-sport athletes'
    ]
  },
  {
    rank: 5,
    name: 'Nicol NJ',
    slug: 'nicol-nj',
    score: 90,
    location: 'Oceanport, NJ (Fort Monmouth)',
    courts: '2 indoor courts',
    price: '$$',
    description: 'A 20,000 sq ft multi-racquet club in Fort Monmouth/Oceanport offering padel, squash, pickleball, physical therapy, and a cafe. With a perfect 5.0 Google rating, Nicol NJ delivers quality over quantity with 2 well-maintained indoor courts.',
    highlights: [
      'Perfect 5.0 Google rating',
      '20,000 sq ft multi-racquet facility',
      'On-site physical therapy (Spear PT)',
      'Pro shop & cafe',
      'Showers & towel service',
      'Shore area location'
    ],
    programs: [
      'Court fees ($22/person)',
      'Day pass for non-members ($25)',
      'Private lessons ($120-140/hr)',
      'Memberships available',
      'Multi-sport access'
    ],
    bestFor: [
      'Shore area residents',
      'Multi-sport players',
      'Players needing physio support',
      'Quality-focused players'
    ]
  },
  {
    rank: 6,
    name: 'Vamos Racquets',
    slug: 'vamos-racquets',
    score: 88,
    location: 'East Hanover, NJ (ArenaLife campus)',
    courts: '4 outdoor courts',
    price: '$$-$$$',
    description: 'Premium facility at the ArenaLife campus in East Hanover offering padel and pickleball on 4 outdoor courts, plus wellness, fitness, coworking, and community events. A unique blend of sport and lifestyle.',
    highlights: [
      '4 outdoor courts at ArenaLife campus',
      'Wellness & fitness facilities',
      'Coworking spaces on-site',
      'Equipment rental & pro shop',
      'Cafe on premises',
      'Disabled access'
    ],
    programs: [
      'Flex membership ($100/mo)',
      'Core membership ($225/mo)',
      'All Access ($275/mo)',
      'Group classes',
      'Equipment rental',
      'Community events'
    ],
    bestFor: [
      'Essex County residents',
      'Remote workers (coworking + padel)',
      'Lifestyle-focused players',
      'Outdoor court preference'
    ]
  },
  {
    rank: 7,
    name: 'The Club at Monroe',
    slug: 'the-club-at-monroe',
    score: 86,
    location: 'Monroe Township, NJ',
    courts: '3 indoor courts',
    price: '$$',
    description: 'Top-tier indoor facility in Central New Jersey featuring 3 padel courts with glass walls and premium turf, alongside 10 pickleball courts and 3 golf simulators. Annual membership at $400/year keeps court rates at a very reasonable $20/hour.',
    highlights: [
      '3 glass-wall padel courts',
      '10 pickleball courts & 3 golf simulators',
      'Premium turf surfaces',
      '$400/year membership for $20/hr courts',
      'Central NJ location',
      'Multi-sport facility'
    ],
    programs: [
      'Membership ($400/year)',
      'Member courts ($20/hr)',
      'Open play ($35)',
      'Clinics ($40)',
      'Private lessons ($120/hr)',
      'Leagues & events'
    ],
    bestFor: [
      'Central NJ residents',
      'Budget-conscious members',
      'Multi-sport players',
      'Families'
    ]
  },
  {
    rank: 8,
    name: 'Access Padel',
    slug: 'access-padel',
    score: 84,
    location: 'Hillsborough Township, NJ',
    courts: '2 indoor courts',
    price: '$$',
    description: 'New Jersey\'s premier indoor padel club in Hillsborough Township featuring 2 professional-grade courts with artificial grass surfaces. Offers membership packages with bundled game discounts.',
    highlights: [
      '2 professional-grade indoor courts',
      'Artificial grass surfaces',
      'Pro shop & lockers',
      'Changing rooms',
      'Free parking',
      'Central NJ location'
    ],
    programs: [
      '10-game package ($355 + 2 free)',
      'Membership discounts',
      'Hourly bookings',
      'Equipment available'
    ],
    bestFor: [
      'Somerset County residents',
      'Regular players (package deals)',
      'Indoor padel fans',
      'Central NJ players'
    ]
  }
];

export default function NewJerseyBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in New Jersey (2026) | 8 Clubs Ranked",
    "description": "New Jersey's 8 best padel clubs ranked for 2026. Complete guide with pricing, programs, and insider tips.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
    "datePublished": "2026-03-21T00:00:00Z",
    "dateModified": "2026-03-21T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "url": "https://www.padelcourtsfinder.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.padelcourtsfinder.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-new-jersey"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in New Jersey (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New Jersey</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>8 Clubs Ranked</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">32</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">9</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$20-60</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Garden State&apos;s Padel Boom
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            New Jersey has quietly become one of America&apos;s most exciting padel markets. With 8 dedicated padel clubs spread across 9 cities -- from Bergen County luxury to Central Jersey value -- NJ offers more variety than most states and easy access for the massive NYC metro population.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The standout is the sheer diversity: <Link href="/courts/padel-united-sports-club" className="text-blue-600 hover:underline">Padel United</Link> pairs 6 courts with a full wellness spa, <Link href="/courts/rax-new-jersey" className="text-blue-600 hover:underline">Rax NJ</Link> boasts 40-foot ceilings (highest in the eastern US), and <Link href="/courts/centercourt-morristown" className="text-blue-600 hover:underline">Centercourt Morristown</Link> was the state&apos;s first full-time padel facility with indoor-outdoor play.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Browse all courts on our <Link href="/new-jersey" className="text-blue-600 hover:underline">New Jersey padel courts page</Link>.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/centercourt-morristown" className="text-blue-600 hover:underline">Centercourt Morristown</Link> (6 courts, indoor + outdoor)</p>
            <p><strong>Best Wellness:</strong> <Link href="/courts/padel-united-sports-club" className="text-blue-600 hover:underline">Padel United</Link> (spa, pool, sauna)</p>
            <p><strong>Best Atmosphere:</strong> <Link href="/courts/rax-new-jersey" className="text-blue-600 hover:underline">Rax NJ</Link> (40-ft ceilings, pizza nights)</p>
            <p><strong>Best for Families:</strong> <Link href="/courts/englewood-field-club" className="text-blue-600 hover:underline">Englewood Field Club</Link> (multi-sport private club)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/the-club-at-monroe" className="text-blue-600 hover:underline">The Club at Monroe</Link> ($400/yr membership)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-blue-200 transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-blue-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-blue-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">{club.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">What Makes It Special:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {club.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{program}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.bestFor.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">✓ {item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in New Jersey?</h2>
          <p className="text-xl text-green-100 mb-6">Find all New Jersey padel courts across the Garden State</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/new-jersey" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View NJ Courts
            </Link>
            <Link href="/search?state=NJ" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              Search All NJ Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Northeast Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-nyc" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in NYC</h4>
              <p className="text-sm text-gray-600">Brooklyn, Manhattan & beyond</p>
            </Link>
            <Link href="/blog/best-padel-clubs-philadelphia" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Philadelphia</h4>
              <p className="text-sm text-gray-600">Pennsylvania&apos;s padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">America&apos;s padel capital</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Beginner Rackets (2026)</h4>
              <p className="text-sm text-gray-600">Top 5 picks from $90–$130 →</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
