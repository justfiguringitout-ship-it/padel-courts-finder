import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Globe, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Philadelphia & Pennsylvania (2026) | Complete Guide',
  description: 'Philadelphia & PA\'s best padel clubs ranked for 2026. Ballers Philly, PADELphia, VIVA Padel & more. Complete guide with pricing and programs.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-philadelphia',
  },
  openGraph: {
    title: 'Best Padel Clubs in Philadelphia & Pennsylvania (2026) | Complete Guide',
    description: 'Philadelphia & PA\'s best padel clubs ranked for 2026. Ballers Philly, PADELphia, VIVA Padel & more. Complete guide with pricing and programs.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-philadelphia',
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
  website?: string;
  description: string;
  highlights: string[];
  programs: string[];
  bestFor: string[];
}

const clubs: Club[] = [
  {
    rank: 1,
    name: 'Ballers - Philly',
    slug: 'ballers-philly',
    score: 96,
    location: 'Philadelphia, PA (Historic Battery Building)',
    courts: '3 indoor courts',
    price: '$$-$$$',
    description: 'Philadelphia\'s most exciting multi-sport social club, housed in a historic Battery building with indoor padel courts, high ceilings, pro lessons, courtside bar/restaurant service, gym, recovery lounge, and more. The complete sports-social experience.',
    highlights: [
      'Historic Battery building venue',
      'Courtside bar & restaurant service',
      'Gym, sauna & cold plunge',
      'Golf simulators & squash courts',
      'Recovery lounge (on-site)',
      'Pro shop & equipment rental'
    ],
    programs: [
      'Court bookings ($20-27/hr per person)',
      'Equipment rental ($10-15)',
      'Private lessons ($100-150)',
      'Memberships from $120+/mo',
      'Open play sessions',
      'Corporate events'
    ],
    bestFor: [
      'Center City Philadelphia players',
      'Social-sports lifestyle seekers',
      'Multi-sport athletes',
      'After-work groups'
    ]
  },
  {
    rank: 2,
    name: 'PADELphia',
    slug: 'padelphia',
    score: 94,
    location: 'Bala Cynwyd, PA (within AFC Fitness)',
    courts: '3 indoor courts',
    price: '$$-$$$',
    description: 'Philadelphia\'s premier dedicated indoor padel club located within AFC Fitness in Bala Cynwyd. Features 3 state-of-the-art courts, court cameras, AI Volley Trainer technology, and a recovery lounge with cryotherapy and hydro massage.',
    highlights: [
      '3 state-of-the-art indoor courts',
      'AI Volley Trainer technology',
      'Court cameras for analysis',
      'Cryotherapy & hydro massage',
      'Spa locker rooms',
      'Pro shop on-site'
    ],
    programs: [
      'Court bookings ($25-60/hr)',
      'Pro coaching',
      'AI-assisted training',
      'Recovery sessions',
      'Group clinics',
      'League play'
    ],
    bestFor: [
      'Main Line residents',
      'Tech-forward players',
      'Players wanting recovery amenities',
      'Competitive players'
    ]
  },
  {
    rank: 3,
    name: 'VIVA Padel Flourtown',
    slug: 'viva-padel-flourtown',
    score: 92,
    location: 'Flourtown, PA',
    courts: '5 indoor courts',
    price: '$$',
    description: 'The most courts at any single PA facility. VIVA Padel in Flourtown features 5 indoor padel courts with modern amenities. Premium members play free, while non-members pay $35/person peak or $25 off-peak -- solid value for 5-court access.',
    highlights: [
      '5 indoor padel courts (most in PA)',
      'Full locker rooms',
      'Pro shop & free parking',
      'Spectator seating',
      'Pickleball courts too',
      'Membership tiers available'
    ],
    programs: [
      'Non-member peak ($35/person/hr)',
      'Non-member off-peak ($25/person/hr)',
      'Memberships ($12.50-17.50/person/hr)',
      'Premium members play free',
      'Group clinics',
      'Open play'
    ],
    bestFor: [
      'Montgomery County residents',
      'Value-conscious players',
      'Players wanting court availability',
      'All skill levels'
    ]
  },
  {
    rank: 4,
    name: 'Matt\'s Pickle and Padel',
    slug: 'matts-pickle-and-padel',
    score: 90,
    location: 'Sewickley, PA (Pittsburgh area)',
    courts: '4 indoor courts',
    price: '$$',
    description: 'Pittsburgh\'s premier indoor padel facility with 4 state-of-the-art courts and an inclusive, un-country club vibe. Also features 6 pickleball courts, tournaments, and clinics. Perfect 4.9 Google rating speaks to the quality.',
    highlights: [
      '4 state-of-the-art padel courts',
      'Perfect 4.9 Google rating',
      'Un-country club inclusive vibe',
      '6 pickleball courts too',
      'Wheelchair accessible',
      'Regular tournaments & clinics'
    ],
    programs: [
      'Court bookings ($25-45/hr)',
      'Private lessons ($60-120/hr)',
      'Memberships available',
      'Tournaments',
      'Group clinics',
      'Open play'
    ],
    bestFor: [
      'Pittsburgh area players',
      'Beginners (welcoming vibe)',
      'Multi-sport players',
      'Families'
    ]
  },
  {
    rank: 5,
    name: 'RCW Athletic Club',
    slug: 'rcw-athletic-club',
    score: 85,
    location: 'Lancaster, PA',
    courts: '2 outdoor courts',
    price: '$$',
    description: 'A premier racquet sports facility in Lancaster featuring 2 outdoor padel courts alongside indoor tennis, Har-Tru outdoor tennis, pickleball, and fitness options. The $199/year padel membership keeps court time at a reasonable $48/hour.',
    highlights: [
      '2 outdoor padel courts',
      '6 indoor + 8 outdoor tennis courts',
      'Fitness equipment on-site',
      '$199/year padel membership',
      'Full racquet sports club',
      'Lancaster County location'
    ],
    programs: [
      'Padel membership ($199/year)',
      'Court bookings ($48/hr)',
      'Multi-sport access',
      'Fitness facilities',
      'Pro instruction'
    ],
    bestFor: [
      'Lancaster County residents',
      'Multi-racquet sport players',
      'Annual membership seekers',
      'Outdoor court preference'
    ]
  }
];

export default function PhiladelphiaBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Philadelphia & Pennsylvania (2026) | Complete Guide",
    "description": "Philadelphia & PA's best padel clubs ranked for 2026. Complete guide with pricing and programs.",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-philadelphia"
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
            Best Padel Clubs in Philadelphia & Pennsylvania (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Philadelphia & Pennsylvania</span>
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
              <div className="text-3xl font-bold text-blue-600">5</div>
              <div className="text-sm text-gray-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">17</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$20-60</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">7</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pennsylvania&apos;s Padel Scene Arrives
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Pennsylvania has established a solid padel foundation with 5 open clubs and 17 courts stretching from Philadelphia to Pittsburgh. The Philly metro area leads with <Link href="/courts/ballers-philly" className="text-blue-600 hover:underline">Ballers</Link> in a historic Battery building, <Link href="/courts/padelphia" className="text-blue-600 hover:underline">PADELphia</Link> with AI training tech, and <Link href="/courts/viva-padel-flourtown" className="text-blue-600 hover:underline">VIVA Padel</Link> offering 5 courts -- the most at any PA location.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            On the western side, <Link href="/courts/matts-pickle-and-padel" className="text-blue-600 hover:underline">Matt&apos;s Pickle and Padel</Link> in Pittsburgh has earned a perfect 4.9 Google rating. And with <Link href="/courts/oh-padel" className="text-blue-600 hover:underline">OH! Padel</Link> coming soon to the Main Line in Malvern, PA&apos;s padel scene is only growing. See all courts on our <Link href="/pennsylvania" className="text-blue-600 hover:underline">Pennsylvania page</Link>.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/ballers-philly" className="text-blue-600 hover:underline">Ballers Philly</Link> (historic venue, full social club)</p>
            <p><strong>Best Tech:</strong> <Link href="/courts/padelphia" className="text-blue-600 hover:underline">PADELphia</Link> (AI training, court cameras)</p>
            <p><strong>Most Courts:</strong> <Link href="/courts/viva-padel-flourtown" className="text-blue-600 hover:underline">VIVA Padel</Link> (5 courts, best value)</p>
            <p><strong>Best in Pittsburgh:</strong> <Link href="/courts/matts-pickle-and-padel" className="text-blue-600 hover:underline">Matt&apos;s Pickle and Padel</Link> (4.9 rating)</p>
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
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">{club.website}</a>
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

        {/* Opening Soon */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mt-12">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Opening Soon</h3>
          <div className="flex items-start gap-4">
            <div className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">Coming Soon</div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">
                <Link href="/courts/oh-padel" className="text-amber-700 hover:underline">OH! Padel</Link> - Malvern, PA
              </h4>
              <p className="text-gray-700 mt-1">The first elite indoor padel club on the Main Line. Features fitness and training spaces plus locker rooms. Located in Malvern, serving the affluent western suburbs of Philadelphia.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Pennsylvania?</h2>
          <p className="text-xl text-green-100 mb-6">Find all Pennsylvania padel courts from Philly to Pittsburgh</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pennsylvania" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View PA Courts
            </Link>
            <Link href="/pennsylvania/philadelphia" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              Philadelphia Courts
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
            <Link href="/blog/best-padel-clubs-new-jersey" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in New Jersey</h4>
              <p className="text-sm text-gray-600">8 clubs across the Garden State</p>
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
