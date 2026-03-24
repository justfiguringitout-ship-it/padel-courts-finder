import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Globe, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Ohio (2026) | Cleveland, Cincinnati & Columbus Guide',
  description: 'Ohio\'s best padel clubs ranked for 2026. Padel Square\'s 6-court facility, Cleveland Premier, Cincinnati clubs & more. Complete OH padel guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-ohio',
  },
  openGraph: {
    title: 'Best Padel Clubs in Ohio (2026) | Cleveland, Cincinnati & Columbus Guide',
    description: 'Ohio\'s best padel clubs ranked for 2026. Padel Square\'s 6-court facility, Cleveland Premier, Cincinnati clubs & more. Complete OH padel guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-ohio',
    type: 'article',
    images: [{ url: 'https://padel-square.com/wp-content/uploads/2025/03/padelsquare-sample10-1-e1745460648270.png' }],
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
  website?: string;
  description: string;
  highlights: string[];
  programs: string[];
  bestFor: string[];
}

const clubs: Club[] = [
  {
    rank: 1,
    name: 'Padel Square',
    slug: 'padel-square',
    score: 95,
    location: 'Garfield Heights, OH (Greater Cleveland)',
    courts: '6 indoor courts',
    price: '$$',
    description: 'Ohio\'s first and largest indoor padel club. Padel Square features 6 climate-controlled courts and 2 pickleball courts in a 30,000 sq ft facility. Membership tiers let you choose your level of commitment, from free Open membership to Premium with 40% off court time.',
    highlights: [
      'Ohio\'s first indoor padel club',
      '6 indoor courts (largest in OH)',
      '30,000 sq ft facility',
      '2 pickleball courts also',
      'Fitness/gym area',
      'Flexible membership tiers'
    ],
    programs: [
      'Open membership ($0/mo)',
      'Basic membership ($45/mo, 20% off)',
      'Premium membership ($100/mo, 40% off)',
      'Racket rental ($7 non-members)',
      'Pro shop discounts for members',
      'League play'
    ],
    bestFor: [
      'Greater Cleveland players',
      'Players wanting court availability',
      'Budget-flexible (tiered memberships)',
      'All skill levels'
    ]
  },
  {
    rank: 2,
    name: 'Cleveland Premier Pickleball & Padel',
    slug: 'cleveland-premier-pickleball-padel',
    score: 88,
    location: 'Avon Lake, OH',
    courts: '1 indoor court',
    price: '$',
    description: 'The only indoor padel court in Northern Ohio, located within the Cleveland Premier Pickleball facility. With open play at just $8 for non-members and Gold memberships including unlimited access at $125/month, this is the most affordable padel option in Ohio.',
    highlights: [
      'Only indoor padel in Northern OH',
      'Incredibly affordable ($8 open play)',
      'Golf simulators & ping pong',
      'Pro shop on-site',
      'Wheelchair accessible',
      'Spectator seating'
    ],
    programs: [
      'Gold membership ($125/mo or $1500/yr)',
      'Silver membership ($40/mo or $360/yr)',
      'Non-member open play ($8)',
      'Multi-sport access',
      'Equipment available'
    ],
    bestFor: [
      'West Cleveland residents',
      'Budget-conscious players',
      'Multi-sport enthusiasts',
      'Beginners trying padel cheaply'
    ]
  },
  {
    rank: 3,
    name: 'Maketewah Country Club',
    slug: 'maketewah-country-club',
    score: 86,
    location: 'Cincinnati, OH',
    courts: '3 outdoor courts',
    price: 'Members Only',
    description: 'A prestigious private country club in Cincinnati that has added padel to its extensive sports offerings. Alongside 3 outdoor padel courts, members enjoy golf, swimming, platform paddle tennis, bowling, and fine dining.',
    highlights: [
      '3 outdoor padel courts',
      'Historic private country club',
      'Golf course & swimming pool',
      'Bowling alley & fine dining',
      'Indoor practice center',
      'Pro shop'
    ],
    programs: [
      'Member court access',
      'Golf & multi-sport',
      'Social events',
      'Fine dining',
      'Family programming'
    ],
    bestFor: [
      'Cincinnati country club members',
      'Multi-sport families',
      'Players seeking exclusive setting',
      'Social & dining experience'
    ]
  },
  {
    rank: 4,
    name: 'The Glendale Lyceum',
    slug: 'the-glendale-lyceum',
    score: 84,
    location: 'Glendale, OH (Greater Cincinnati)',
    courts: '3 outdoor courts (lighted)',
    price: 'Members Only',
    description: 'Historic members-only social and racquet club in Glendale featuring 3 lighted outdoor aluminum courts listed for padel booking on Playtomic. A charming private club setting with swimming pool, clay tennis, and pickleball.',
    highlights: [
      '3 lighted outdoor courts',
      'Bookable via Playtomic',
      'Historic social & racquet club',
      'Swimming pool & clay tennis',
      'Lighted pickleball courts',
      'Charming private club setting'
    ],
    programs: [
      'Member court bookings',
      'Playtomic reservations',
      'Multi-sport access',
      'Social events',
      'Family activities'
    ],
    bestFor: [
      'Glendale/Greater Cincinnati residents',
      'Private club seekers',
      'Evening players (lighted courts)',
      'Multi-racquet sport enthusiasts'
    ]
  },
  {
    rank: 5,
    name: 'Swim and Racquet Club',
    slug: 'swim-and-racquet-club',
    score: 80,
    location: 'Columbus, OH (Upper Arlington)',
    courts: 'Platform tennis courts',
    price: 'Members Only',
    description: 'A private swim, tennis, and platform tennis club on 9 acres in the Upper Arlington area of Columbus. Family-oriented club with pools, tennis courts, platform tennis courts, pro shop, and clubhouse facilities.',
    highlights: [
      '9-acre private club campus',
      'Swimming pool & tennis courts',
      '2 platform tennis courts',
      'Pro shop & clubhouse',
      'Fire pit & grill area',
      'Family-oriented atmosphere'
    ],
    programs: [
      'Family membership ($3,750 initiation)',
      'Annual dues ($1,565)',
      'Guest fees ($10-15)',
      'Pro instruction',
      'Youth programs'
    ],
    bestFor: [
      'Columbus/Upper Arlington families',
      'Private club lifestyle',
      'Multi-sport families',
      'Tennis & platform tennis crossover'
    ]
  }
];

export default function OhioBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Ohio (2026) | Cleveland, Cincinnati & Columbus Guide",
    "description": "Ohio's best padel clubs ranked for 2026. Complete guide with pricing and programs.",
    "image": "https://padel-square.com/wp-content/uploads/2025/03/padelsquare-sample10-1-e1745460648270.png",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-ohio"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-red-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Ohio (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-red-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Cleveland, Cincinnati & Columbus</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5 Open + 1 Coming Soon</span>
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
              <div className="text-3xl font-bold text-red-600">5</div>
              <div className="text-sm text-gray-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">13+</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">3</div>
              <div className="text-sm text-gray-600">Major Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">$8-45</div>
              <div className="text-sm text-gray-600">Per Session Range</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ohio Enters the Padel Game
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Ohio is establishing itself as the Midwest&apos;s emerging padel frontier. With 5 open clubs across Cleveland, Cincinnati, and Columbus, plus <Link href="/courts/club-padel-newtown" className="text-blue-600 hover:underline">Club Padel Newtown</Link> coming soon to Greater Cincinnati, the Buckeye State offers more padel options than you might expect.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The standout is <Link href="/courts/padel-square" className="text-blue-600 hover:underline">Padel Square</Link> in Garfield Heights -- Ohio&apos;s first indoor padel club with 6 courts in a 30,000 sq ft facility. Meanwhile, Cincinnati boasts two private club options, and Cleveland Premier offers the most affordable padel in the state at just $8 per session. See all courts on our <Link href="/ohio" className="text-blue-600 hover:underline">Ohio page</Link>.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/padel-square" className="text-blue-600 hover:underline">Padel Square</Link> (6 courts, largest in OH)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/cleveland-premier-pickleball-padel" className="text-blue-600 hover:underline">Cleveland Premier</Link> ($8 open play!)</p>
            <p><strong>Best Cincinnati:</strong> <Link href="/courts/maketewah-country-club" className="text-blue-600 hover:underline">Maketewah Country Club</Link> (3 outdoor courts)</p>
            <p><strong>Best Columbus:</strong> <Link href="/courts/swim-and-racquet-club" className="text-blue-600 hover:underline">Swim and Racquet Club</Link> (9-acre campus)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-red-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-red-200 transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-red-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-red-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600">{club.website}</a>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">{club.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">What Makes It Special:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {club.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">{program}</span>
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

        {/* Opening Soon */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mt-12">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Opening Soon</h3>
          <div className="flex items-start gap-4">
            <div className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">Coming Soon</div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">
                <Link href="/courts/club-padel-newtown" className="text-amber-700 hover:underline">Club Padel Newtown</Link> - Cincinnati, OH
              </h4>
              <p className="text-gray-700 mt-1">Greater Cincinnati&apos;s first dedicated outdoor padel facility featuring 4 courts, pro shop, food &amp; beverage, lounge areas, and LED lighting for evening play.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Ohio?</h2>
          <p className="text-xl text-green-100 mb-6">Find all Ohio padel courts across the Buckeye State</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ohio" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Ohio Courts
            </Link>
            <Link href="/search?state=OH" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              Search All OH Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Midwest Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-chicago" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Chicago</h4>
              <p className="text-sm text-gray-600">Windy City indoor padel</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">America&apos;s padel capital</p>
            </Link>
            <Link href="/blog/best-padel-clubs-philadelphia" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Philadelphia</h4>
              <p className="text-sm text-gray-600">Pennsylvania&apos;s growing padel scene</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
