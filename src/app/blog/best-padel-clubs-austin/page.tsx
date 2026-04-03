import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Austin, Texas (2026) | 7 Clubs Ranked & Reviewed',
  description: 'Discover Austin\'s 7 best padel clubs in 2026. From Padel 39\'s luxury courts to 3 coming soon. Rankings, pricing & complete Texas guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-austin',
  },
  openGraph: {
    title: 'Best Padel Clubs in Austin, Texas (2026) | 7 Clubs Ranked & Reviewed',
    description: 'Discover Austin\'s 7 best padel clubs in 2026. From Padel 39\'s luxury courts to 3 coming soon. Rankings, pricing & complete Texas guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-austin',
    type: 'article',
    images: [{ url: 'https://cdn.prod.website-files.com/65d108bc26bc0f5d9c9ea6ae/68d32d1b1603664a9e8ec178_Drone_Share_1200_630.avif' }],
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
  email?: string;
  website?: string;
  hours?: string;
  description: string;
  highlights: string[];
  programs: string[];
  bestFor: string[];
}

const clubs: Club[] = [
  {
    rank: 1,
    name: 'Padel 39',
    slug: 'padel-39',
    score: 96,
    location: 'North Austin, TX (Near The Domain & Q2 Stadium)',
    courts: '6 outdoor lighted courts',
    price: '$$$',
    website: 'padel39.com',
    description: 'Padel39 is Austin\'s premier padel club in North Austin, featuring 6 world-class outdoor lighted courts near The Domain and Q2 Stadium. With a sauna, cold plunge, recovery area, pro shop, terrace, co-working space, and showers, it delivers a full lifestyle experience beyond padel. A second 12-court East Austin location is on the way.',
    highlights: [
      '6 world-class outdoor lighted courts',
      'Sauna & cold plunge recovery area',
      'Pro shop with premium gear',
      'Co-working space & terrace',
      'Near The Domain & Q2 Stadium',
      '5.0 Google rating'
    ],
    programs: [
      'Court bookings (~$25-30/player per 90min)',
      'Professional coaching',
      'Group clinics',
      'Open play sessions',
      'Corporate events',
      'Playtomic booking'
    ],
    bestFor: [
      'Serious competitive players',
      'Wellness-focused athletes',
      'North Austin residents',
      'Social padel enthusiasts'
    ]
  },
  {
    rank: 2,
    name: 'Padel Club Austin',
    slug: 'padel-club-austin',
    score: 95,
    location: 'Austin, TX',
    courts: '9 courts (indoor & outdoor)',
    price: '$$',
    website: 'padelclubaustin.com',
    description: 'Padel Club Austin is Austin\'s first premium padel club featuring 9 panoramic Wilson courts across indoor and outdoor settings. With a Wilson partnership, on-site restaurant, pro shop, and an affordable Student Pro membership at just $20/month, it is the most accessible entry point for new players in Austin.',
    highlights: [
      '9 panoramic Wilson courts (indoor/outdoor)',
      'Official Wilson padel partnership',
      'On-site restaurant',
      'Pro shop with Wilson gear',
      'Free parking & WiFi',
      '4.9 Google rating'
    ],
    programs: [
      'Court bookings ($25/person per 1.5hr)',
      'Racquet rental ($10)',
      'Student Pro membership ($20/mo)',
      'Pro membership ($50/mo with discounts)',
      'Private & group coaching',
      'Beginner clinics'
    ],
    bestFor: [
      'Beginners & students',
      'Budget-conscious players',
      'Families',
      'South Austin residents'
    ]
  },
  {
    rank: 3,
    name: 'Austin Padel Center Pop-Up',
    slug: 'austin-padel-center-pop-up',
    score: 90,
    location: 'Austin, TX',
    courts: '5 courts (3 indoor, 2 outdoor)',
    price: '$$',
    description: 'Austin Padel Center Pop-Up is a temporary premium padel facility offering 3 indoor climate-controlled courts and 2 outdoor courts. With a recovery area featuring cold plunge and sauna, a cafeteria, pro shop, play park for kids, and equipment rental, it punches above its weight for a pop-up venue.',
    highlights: [
      '3 indoor climate-controlled courts',
      '2 outdoor courts',
      'Cold plunge & sauna recovery area',
      'Cafeteria & snack bar',
      'Play park for kids',
      'Free parking & WiFi'
    ],
    programs: [
      'Court bookings',
      'Equipment rental',
      'Open play',
      'Community events',
      'Beginner sessions'
    ],
    bestFor: [
      'Players wanting indoor options',
      'Families with kids',
      'Recovery-focused athletes',
      'Casual recreational players'
    ]
  },
  {
    rank: 4,
    name: 'Dripping Springs Racquet Club',
    slug: 'dripping-springs-racquet-club',
    score: 87,
    location: 'Dripping Springs, TX (Austin area)',
    courts: '3 outdoor padel courts',
    price: '$$$',
    description: 'Premier Austin-area racquet club with 3 advanced padel courts alongside tennis and pickleball. The full resort-style complex includes a pool, fitness center, pavilion with bar, and pro shop. Memberships run around $299/month, making it a full-lifestyle club rather than a padel-only facility.',
    highlights: [
      '3 advanced outdoor padel courts',
      'Resort-style pool & cabanas',
      'Fitness center on-site',
      'Pavilion with bar',
      'Tennis & pickleball courts too',
      '4.6 Google rating'
    ],
    programs: [
      'Non-member court booking ($23/player)',
      'Racquet rental ($10)',
      'Lessons from $25+',
      'Memberships (~$299/mo)',
      'Multi-sport access',
      'Social events & leagues'
    ],
    bestFor: [
      'Multi-sport enthusiasts',
      'Families wanting resort amenities',
      'Dripping Springs & Hill Country residents',
      'Tennis players trying padel'
    ]
  }
];

export default function AustinBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Austin, Texas (2026) | 7 Clubs Ranked & Reviewed",
    "description": "Discover Austin's 7 best padel clubs in 2026. From Padel 39's luxury courts to 3 coming soon. Rankings, pricing & complete Texas guide.",
    "image": "https://cdn.prod.website-files.com/65d108bc26bc0f5d9c9ea6ae/68d32d1b1603664a9e8ec178_Drone_Share_1200_630.avif",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-austin"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-purple-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-purple-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Austin, Texas (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-purple-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Austin, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4 Open + 3 Coming Soon</span>
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
              <div className="text-3xl font-bold text-purple-600">7</div>
              <div className="text-sm text-gray-600">Total Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">23+</div>
              <div className="text-sm text-gray-600">Courts Open</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">$23-30</div>
              <div className="text-sm text-gray-600">Per Person Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Austin: Texas&apos;s Padel Capital Keeps Growing
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Austin has cemented itself as one of America&apos;s top padel cities. With 4 open clubs totaling 23+ courts and 3 more facilities on the way, the Texas capital&apos;s padel scene is booming in 2026. Tech money, year-round outdoor weather, and an active lifestyle culture have fueled explosive growth from zero clubs in 2023 to a thriving ecosystem today.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The headliners are <Link href="/courts/padel-39" className="text-purple-600 hover:underline">Padel 39</Link> with its luxury wellness-focused experience and a perfect 5.0 Google rating, and <Link href="/courts/padel-club-austin" className="text-purple-600 hover:underline">Padel Club Austin</Link> with 9 Wilson courts and student memberships starting at just $20/month. Meanwhile, three new clubs are set to dramatically expand capacity with up to 18 additional courts.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a seasoned player or picking up a racquet for the first time, Austin has options for every level and budget. Browse all courts on our <Link href="/texas/austin" className="text-purple-600 hover:underline">Austin courts page</Link> or explore the full <Link href="/texas" className="text-purple-600 hover:underline">Texas padel directory</Link>.
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/padel-39" className="text-purple-600 hover:underline">Padel 39</Link> (6 courts, sauna, cold plunge, 5.0 rating)</p>
            <p><strong>Best for Beginners:</strong> <Link href="/courts/padel-club-austin" className="text-purple-600 hover:underline">Padel Club Austin</Link> (9 Wilson courts, $20/mo students)</p>
            <p><strong>Best Indoor Option:</strong> <Link href="/courts/austin-padel-center-pop-up" className="text-purple-600 hover:underline">Austin Padel Center Pop-Up</Link> (3 indoor + 2 outdoor)</p>
            <p><strong>Best Multi-Sport:</strong> <Link href="/courts/dripping-springs-racquet-club" className="text-purple-600 hover:underline">Dripping Springs Racquet Club</Link> (pool, gym, tennis)</p>
            <p><strong>Most Anticipated:</strong> Padel39 East Austin (12 courts opening 2026)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-purple-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-green-600 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-purple-200 transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-purple-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-purple-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-purple-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-purple-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{club.hours}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {club.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">What Makes It Special:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {club.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.bestFor.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon to Austin</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Austin&apos;s padel boom is far from over. Three new clubs are in development, set to add up to 18+ additional courts to the city&apos;s growing padel infrastructure.
          </p>
          <div className="space-y-6">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-bold">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Padel39 East Austin</h3>
              <p className="text-gray-700 mb-3">
                Padel39&apos;s second Austin location features 12 outdoor courts (4 covered with lighting), a CLUB39 bar, cafe, gym, locker rooms, and recovery/wellness area. Set to open in 2026 as a major social hub on the east side.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">12 courts (4 covered)</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Bar & cafe</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Gym & wellness</span>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-bold">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Padel Collective</h3>
              <p className="text-gray-700 mb-3">
                An upscale padel and wellness club featuring indoor and outdoor courts, sauna, cold plunge, coffee bar, and cafe. Positioned as a lifestyle destination blending sport and community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Indoor & outdoor courts</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Sauna & cold plunge</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Coffee bar & cafe</span>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-bold">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Padel Society</h3>
              <p className="text-gray-700 mb-3">
                A premium indoor padel club with 6 courts, built around lifestyle, wellness, and community. The planned amenities list is impressive: full gym, sauna, golf simulator, co-working space, pro shop, physical therapy station, and a full bar.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">6 indoor courts</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Full gym & sauna</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Golf simulator</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Full bar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-green-600 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Austin?</h2>
          <p className="text-xl text-purple-100 mb-6">
            Find all Austin padel courts with real-time info and directions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/texas/austin"
              className="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              View Austin Courts
            </Link>
            <Link
              href="/texas"
              className="inline-block bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 transition-colors"
            >
              All Texas Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Texas Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">DFW&apos;s growing padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-houston" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Houston</h4>
              <p className="text-sm text-gray-600">Space City&apos;s padel courts</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-antonio" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Antonio</h4>
              <p className="text-sm text-gray-600">Alamo City padel guide</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Beginner Rackets (2026)</h4>
              <p className="text-sm text-gray-600">Top 5 picks from $90–$130 →</p>
            </Link>
            <Link href="/rules" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Padel Rules Explained</h4>
              <p className="text-sm text-gray-600">Complete guide to scoring &amp; gameplay</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
