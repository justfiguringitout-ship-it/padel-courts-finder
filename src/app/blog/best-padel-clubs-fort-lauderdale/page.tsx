import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Fort Lauderdale (2026) | Complete Broward County Guide',
  description: 'Discover Fort Lauderdale\'s 6 best padel clubs in 2026. From 10by20\'s premium courts to Replay Club luxury. Rankings, pricing & Broward County guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-fort-lauderdale',
  },
  openGraph: {
    title: 'Best Padel Clubs in Fort Lauderdale (2026) | Complete Broward County Guide',
    description: 'Discover Fort Lauderdale\'s 6 best padel clubs in 2026. From 10by20\'s premium courts to Replay Club luxury. Rankings, pricing & Broward County guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-fort-lauderdale',
    type: 'article',
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
    name: '10by20 Padel Downtown Fort Lauderdale',
    slug: '10by20-padel-downtown-fort-lauderdale',
    score: 97,
    location: 'Downtown Fort Lauderdale, FL',
    courts: '7 courts (indoor & outdoor)',
    price: '$$$',
    website: '10by20.com',
    description: 'The crown jewel of Fort Lauderdale padel. 10by20 Downtown combines 7 premium courts across indoor and outdoor settings with a full-service bar and restaurant, creating the most complete padel experience in Broward County.',
    highlights: [
      '7 courts: both indoor & outdoor options',
      'Full-service bar & restaurant on-site',
      'Professional coaching programs',
      'Regular tournaments & social events',
      'Premium court surfaces',
      'Vibrant community atmosphere'
    ],
    programs: [
      'Private lessons',
      'Group coaching clinics',
      'League play',
      'Social tournaments',
      'Corporate events',
      'Open play sessions'
    ],
    bestFor: [
      'Serious competitive players',
      'Social padel enthusiasts',
      'After-work groups',
      'Downtown Fort Lauderdale residents'
    ]
  },
  {
    rank: 2,
    name: 'Replay Club',
    slug: 'replay-club',
    score: 96,
    location: '6600 High Ridge Rd, Boynton Beach, FL 33426',
    courts: '10 indoor courts',
    price: '$$$$ (Premium)',
    phone: '+1 561-484-7287',
    website: 'replayclub.com',
    hours: '7am-10pm Mon-Sat, 7am-7pm Sun',
    description: 'South Florida\'s most luxurious padel destination. Replay Club is a full-service athletic and wellness club centered around 10 climate-controlled indoor padel and pickleball courts. Beyond the courts, members enjoy a gym, spa with sauna and cold plunge, pro shop, and lounge areas.',
    highlights: [
      '10 climate-controlled indoor courts',
      'Full gym & fitness center',
      'Spa with sauna & cold plunge',
      'Pro shop with premium gear',
      'Lounge & social areas',
      'Professional coaching for all levels'
    ],
    programs: [
      'Membership tiers ($200-450/mo)',
      'Drop-in play ($15)',
      'Court rentals ($20-40/hr)',
      'Private coaching',
      'Group clinics',
      'Wellness & fitness programs'
    ],
    bestFor: [
      'Luxury experience seekers',
      'Members wanting all-in-one facility',
      'Wellness-focused players',
      'Boynton Beach & south Broward residents'
    ]
  },
  {
    rank: 3,
    name: '10by20 Padel Fort Lauderdale',
    slug: '10by20-padel-fort-lauderdale',
    score: 95,
    location: 'Fort Lauderdale, FL',
    courts: '5 indoor courts',
    price: '$$-$$$',
    website: '10by20.com',
    description: '10by20\'s original Fort Lauderdale location delivers a premium indoor padel experience with 5 high-ceiling PPA-standard courts, professional Philips lighting, and on-site physiotherapy. The unlimited daytime membership at $199/month is one of the best value propositions in South Florida.',
    highlights: [
      '5 high-ceiling PPA-standard courts',
      'Professional Philips lighting system',
      'On-site physiotherapy services',
      'Climate-controlled indoor facility',
      'Professional court surfaces',
      'Strong competitive community'
    ],
    programs: [
      'Unlimited daytime play ($199/mo)',
      'Court bookings (~$120/1.5hr)',
      'Professional coaching',
      'Group clinics',
      'PPA-standard training',
      'Physiotherapy & recovery'
    ],
    bestFor: [
      'Regular daytime players',
      'Competitive players seeking PPA-standard courts',
      'Players needing physio support',
      'Value-conscious members'
    ]
  },
  {
    rank: 4,
    name: 'Society Las Olas Padel',
    slug: 'society-las-olas-padel',
    score: 84,
    location: 'Society Las Olas, Fort Lauderdale, FL',
    courts: '4 courts',
    price: '$$',
    description: 'Padel meets downtown living at Society Las Olas, Fort Lauderdale\'s trendy apartment complex on iconic Las Olas Boulevard. With 4 courts, racket and ball rentals, and coaching available, this is the most accessible entry point to padel in central Fort Lauderdale.',
    highlights: [
      '4 padel courts at Las Olas complex',
      'Prime downtown Fort Lauderdale location',
      'Racket & ball rental available',
      'Coaching sessions offered',
      'Walkable Las Olas Boulevard setting',
      'Convenient for downtown residents'
    ],
    programs: [
      'Court bookings',
      'Equipment rental',
      'Coaching sessions',
      'Open play',
      'Beginner introductions'
    ],
    bestFor: [
      'Downtown Fort Lauderdale residents',
      'Las Olas Boulevard visitors',
      'Beginners trying padel',
      'Casual social players'
    ]
  },
  {
    rank: 5,
    name: 'RxPADEL',
    slug: 'rxpadel',
    score: 90,
    location: 'Kinetic Racquet Club, Boynton Beach, FL',
    courts: '1 indoor court',
    price: '$$',
    email: 'info@rxpadel.com',
    website: 'rxpadel.com',
    description: 'RxPADEL is South Florida\'s go-to for professional padel coaching, operating out of the indoor Kinetic Racquet Club in Boynton Beach. While it has just one competition-grade court, the focus here is on quality instruction with private lessons ranging from $40-90/hour.',
    highlights: [
      'Professional coaching-focused facility',
      'Competition-grade indoor court',
      'Located inside Kinetic Racquet Club',
      'Equipment rental & pro shop',
      'Viewing areas for spectators',
      'Online booking system'
    ],
    programs: [
      'Private lessons ($40-90/hr)',
      'Group clinics (all levels)',
      'Open play ($30-60/hr)',
      'Beginner workshops',
      'Equipment rental',
      'Pro shop'
    ],
    bestFor: [
      'Beginners wanting quality instruction',
      'Players focused on skill development',
      'Budget-conscious players',
      'South Palm Beach County residents'
    ]
  },
  {
    rank: 6,
    name: 'PATL',
    slug: 'patl',
    score: 82,
    location: 'Fort Lauderdale, FL',
    courts: 'Multiple courts',
    price: '$$',
    description: 'PATL rounds out Fort Lauderdale\'s padel offering with quality courts in a straightforward, no-frills setting. A solid option for players looking for court time without the premium price tags of larger facilities.',
    highlights: [
      'Quality padel courts',
      'Fort Lauderdale location',
      'Accessible pricing',
      'Growing local community'
    ],
    programs: [
      'Court bookings',
      'Open play',
      'Community events'
    ],
    bestFor: [
      'Local Fort Lauderdale players',
      'Budget-friendly court time',
      'Casual recreational players'
    ]
  }
];

export default function FortLauderdaleBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Fort Lauderdale (2026) | Complete Broward County Guide",
    "description": "Discover Fort Lauderdale's 6 best padel clubs in 2026. From 10by20's premium courts to Replay Club luxury.",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-fort-lauderdale"
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
            <Link href="/blog" className="text-blue-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Fort Lauderdale (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Fort Lauderdale & Broward County, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>6 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">27+</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$20-60</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">Year-Round</div>
              <div className="text-sm text-gray-600">Perfect Weather</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fort Lauderdale: Broward County&apos;s Padel Scene Takes Shape
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            While Miami grabs the padel headlines, its northern neighbor has been quietly building an impressive padel infrastructure. Fort Lauderdale and Broward County now count 6 clubs with over 27 courts, offering everything from luxury indoor facilities with spa amenities to professional coaching academies and downtown courts.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The standout story is the <Link href="/courts/10by20-padel-downtown-fort-lauderdale" className="text-blue-600 hover:underline">10by20 chain</Link>, which has planted two locations in Fort Lauderdale alone, including a 7-court downtown flagship with bar and restaurant. Meanwhile, <Link href="/courts/replay-club" className="text-blue-600 hover:underline">Replay Club</Link> in nearby Boynton Beach has raised the bar with 10 indoor courts inside a full-service wellness facility.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a Fort Lauderdale local, a snowbird spending winter in South Florida, or visiting from Miami looking for courts with shorter wait times, this guide covers every padel option in the Broward County corridor. Browse all courts on our <Link href="/florida/fort-lauderdale" className="text-blue-600 hover:underline">Fort Lauderdale courts page</Link>.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/10by20-padel-downtown-fort-lauderdale" className="text-blue-600 hover:underline">10by20 Downtown</Link> (7 courts, bar/restaurant)</p>
            <p><strong>Best Luxury:</strong> <Link href="/courts/replay-club" className="text-blue-600 hover:underline">Replay Club</Link> (10 courts, spa, gym)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/10by20-padel-fort-lauderdale" className="text-blue-600 hover:underline">10by20 Original</Link> ($199/mo unlimited daytime)</p>
            <p><strong>Best Downtown:</strong> <Link href="/courts/society-las-olas-padel" className="text-blue-600 hover:underline">Society Las Olas</Link> (Las Olas Boulevard)</p>
            <p><strong>Best Coaching:</strong> <Link href="/courts/rxpadel" className="text-blue-600 hover:underline">RxPADEL</Link> (professional instruction focus)</p>
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
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-blue-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-blue-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
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

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Fort Lauderdale?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Fort Lauderdale and Broward County padel courts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/florida/fort-lauderdale"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Fort Lauderdale Courts
            </Link>
            <Link
              href="/florida"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Florida Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Florida Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">29+ clubs, America&apos;s padel capital</p>
            </Link>
            <Link href="/blog/best-padel-clubs-orlando" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Orlando</h4>
              <p className="text-sm text-gray-600">Central Florida padel with indoor courts</p>
            </Link>
            <Link href="/blog/best-padel-clubs-charlotte" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Charlotte</h4>
              <p className="text-sm text-gray-600">Queen City&apos;s growing padel scene</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
