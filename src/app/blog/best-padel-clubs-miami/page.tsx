import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Miami (2026) | Complete South Florida Guide',
  description: 'Explore Miami\'s top 29+ padel clubs in 2026. Ultra Padel\'s 29 courts, Urban Padel, Wynwood & more. Rankings, pricing & guide.',
  alternates: {
    canonical: 'https://padelcourtsfinder.com/blog/best-padel-clubs-miami',
  },
  openGraph: {
    title: 'Best Padel Clubs in Miami (2026) | Complete South Florida Guide',
    description: 'Explore Miami\'s top 29+ padel clubs in 2026. Ultra Padel\'s 29 courts, Urban Padel, Wynwood & more. Rankings, pricing & guide.',
    url: 'https://padelcourtsfinder.com/blog/best-padel-clubs-miami',
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
    name: 'Ultra Padel Club',
    slug: 'ultra-padel-club',
    score: 97,
    location: 'Little Haiti, Miami, FL',
    courts: '29 courts (indoor & outdoor)',
    price: '$$-$$$',
    website: 'ultrapadel.com',
    description: 'The largest padel facility in the United States. Ultra Padel Club\'s Magic City flagship in Little Haiti offers a staggering 29 state-of-the-art courts across indoor and outdoor settings, along with a swimming pool, wellness center, pro shop, and kids courts. Nothing else in Miami -- or the country -- comes close to this scale.',
    highlights: [
      '29 courts: the largest padel facility in the US',
      'Indoor & outdoor court options',
      'Swimming pool & wellness center',
      'Full pro shop with premium gear',
      'Kids courts & youth programs',
      'Event hosting & tournament venue'
    ],
    programs: [
      'Court bookings from $28/90min outdoor',
      'Group clinics ($60/90min)',
      'Private lessons ($150/60min)',
      'Youth programs',
      'Tournaments & events',
      'Open play sessions'
    ],
    bestFor: [
      'Serious competitive players',
      'Families with kids',
      'Tournament players',
      'Players wanting the biggest facility'
    ]
  },
  {
    rank: 2,
    name: 'Urban Padel',
    slug: 'urban-padel',
    score: 96,
    location: 'Doral, FL',
    courts: '12 indoor courts',
    price: '$$-$$$',
    website: 'urbanpadel.com',
    description: 'The largest indoor padel facility in the US, Urban Padel in Doral features 12 climate-controlled courts with an unlimited membership option at $299/month. The facility partners with UberEats for on-court food delivery and hosts regular tournaments and events, making it a complete padel destination.',
    highlights: [
      '12 climate-controlled indoor courts',
      'Largest indoor padel facility in the US',
      'Full air conditioning for year-round comfort',
      'On-site pro shop',
      'Regular tournaments & events',
      'UberEats food delivery partnership'
    ],
    programs: [
      'Unlimited membership ($299/month)',
      'Hourly court rental ($30-65)',
      'Professional coaching',
      'Group clinics',
      'Tournaments & leagues',
      'Open play sessions'
    ],
    bestFor: [
      'Players wanting indoor year-round play',
      'Doral residents',
      'Members seeking unlimited court time',
      'Tournament players'
    ]
  },
  {
    rank: 3,
    name: 'The Set Padel Haus',
    slug: 'the-set-padel-haus',
    score: 95,
    location: 'Doral, FL',
    courts: '12 outdoor courts',
    price: '$$$$',
    description: 'Miami\'s luxury padel destination in Doral features 12 panoramic outdoor padel courts plus 2 pickleball courts, wrapped in resort-level amenities. With cold plunge, gym, studio classes, a WiFi lounge, and a cafeteria, The Set Padel Haus delivers an elite lifestyle experience centered around padel.',
    highlights: [
      '12 panoramic outdoor padel courts',
      '2 additional pickleball courts',
      'Cold plunge recovery',
      'Gym & studio fitness classes',
      'WiFi lounge & social areas',
      'Full cafeteria on-site'
    ],
    programs: [
      'Individual membership ($459/mo, 4 clinics + unlimited reservations)',
      'Family membership ($559/mo)',
      'Professional coaching',
      'Group clinics',
      'Studio fitness classes',
      'Social events'
    ],
    bestFor: [
      'Luxury experience seekers',
      'Families wanting a full club',
      'Fitness-focused players',
      'Doral residents'
    ]
  },
  {
    rank: 4,
    name: 'Padel X',
    slug: 'padel-x',
    score: 94,
    location: 'Downtown Miami, FL',
    courts: '12 outdoor courts',
    price: '$$$$',
    description: 'A state-of-the-art outdoor padel club in downtown Miami featuring 12 premium Mejorset courts with Mondo carpet surfaces and LED lighting. Padel X pairs high-end courts with standout amenities like cold plunges, private showers, a Lacoste-stocked pro shop, and valet parking -- making it one of the most premium padel experiences in the US.',
    highlights: [
      '12 premium Mejorset courts with Mondo surfaces',
      'LED lighting for evening play',
      'Video technology on courts',
      'Pro shop with Lacoste merchandise',
      '2 cold plunges & 2 private showers',
      'Valet parking available'
    ],
    programs: [
      'Court rentals from $135/90min',
      'Premium court rentals ($155/90min)',
      'Memberships ($100-200/month)',
      'Professional coaching',
      'Private lessons',
      'Corporate events'
    ],
    bestFor: [
      'Premium experience seekers',
      'Downtown Miami residents',
      'Players who want top-tier courts',
      'Corporate groups & events'
    ]
  },
  {
    rank: 5,
    name: 'Wynwood Padel Club',
    slug: 'wynwood-padel-club',
    score: 93,
    location: 'Wynwood, Miami, FL',
    courts: '8 outdoor courts',
    price: '$$-$$$',
    description: 'Miami\'s original padel hub, operating in Wynwood since 2016. Wynwood Padel Club combines 8 outdoor courts with a pro shop, wellness studio (yoga and Pilates through Align Studio), cafeteria, and a stage for events. The long-running community and vibrant Wynwood setting make this a cornerstone of Miami padel culture.',
    highlights: [
      '8 outdoor courts in iconic Wynwood',
      'Operating since 2016 -- Miami\'s OG padel club',
      'Align Studio for yoga & Pilates',
      'Full pro shop & cafeteria',
      'Stage for events & tournaments',
      'Private parking on-site'
    ],
    programs: [
      'Peak court rental ($50-65/hour)',
      'Off-peak court rental ($30-55/hour)',
      'Group clinics (~$50)',
      'Student membership ($10)',
      'Private coaching',
      'Tournament & league play'
    ],
    bestFor: [
      'Social padel players',
      'Wynwood & Midtown residents',
      'Players wanting wellness options',
      'Community-focused players'
    ]
  },
  {
    rank: 6,
    name: 'Ultra Padel Club Aventura',
    slug: 'ultra-padel-club-aventura',
    score: 92,
    location: 'Aventura, FL',
    courts: '11 outdoor courts',
    price: '$$-$$$',
    description: 'Brand-new outdoor facility from the Ultra Padel brand, featuring 11 courts including a stadium court in Aventura. With professional coaching, clinics, a pro shop, locker rooms, and dedicated kids courts, this is one of the largest and most complete padel venues in the Miami metro area.',
    highlights: [
      '11 outdoor courts including a stadium court',
      'Part of the Ultra Padel brand',
      'Dedicated kids courts & programs',
      'Full pro shop & locker rooms',
      'Free parking & WiFi',
      'Event hosting capabilities'
    ],
    programs: [
      'Court bookings from $28/player for 90min',
      'Private lessons ($150/60min)',
      'Group clinics ($60/90min)',
      'Kids programs',
      'Tournaments & events',
      'Open play'
    ],
    bestFor: [
      'Aventura & North Miami residents',
      'Families with kids',
      'Players wanting a large outdoor facility',
      'Tournament competitors'
    ]
  },
  {
    rank: 7,
    name: 'i95 Padel Club Miami',
    slug: 'i95-padel-club-miami',
    score: 91,
    location: 'Miami, FL (off I-95)',
    courts: '6 courts (indoor & outdoor)',
    price: '$$-$$$',
    description: 'A premier padel facility right off I-95 in Miami, i95 Padel Club offers 6 top-notch courts across indoor and outdoor settings. The club includes wellness amenities like a cold plunge alongside changing rooms, pro shop, and a growing competitive community.',
    highlights: [
      '6 courts: indoor & outdoor options',
      'Cold plunge recovery on-site',
      'Pro shop with gear & accessories',
      'Convenient I-95 highway access',
      'Free parking & WiFi',
      'Vibrant competitive community'
    ],
    programs: [
      'Court rentals via Playtomic (~$65/hour)',
      'Professional coaching',
      'Group clinics',
      'Open play sessions',
      'League play',
      'Community events'
    ],
    bestFor: [
      'Commuters along I-95 corridor',
      'Players wanting indoor/outdoor mix',
      'Recovery-focused athletes',
      'Competitive community players'
    ]
  },
  {
    rank: 8,
    name: 'Sunset Padel',
    slug: 'sunset-padel',
    score: 90,
    location: 'Miami Beach, FL',
    courts: '4 indoor courts',
    price: '$$$$',
    description: 'Miami Beach\'s first members-only indoor padel club delivers a boutique luxury experience with 4 state-of-the-art courts featuring Mondo synthetic turf and advanced non-blinding linear lighting. Members enjoy TechnoGym equipment, on-site physical therapy, a challenge camera system, and an exclusive social atmosphere.',
    highlights: [
      '4 state-of-the-art indoor courts',
      'Mondo synthetic turf surfaces',
      'TechnoGym fitness equipment',
      'On-site physical therapist',
      'Challenge camera system for match replay',
      'Non-blinding linear lighting'
    ],
    programs: [
      'Premier membership ($350/month)',
      'Member court fees (~$45/1.5hr)',
      'Non-member rates available (higher)',
      'Professional coaching',
      'Social events & leagues',
      'Fitness programs'
    ],
    bestFor: [
      'Miami Beach residents',
      'Members-only exclusivity seekers',
      'Players wanting luxury indoor courts',
      'Fitness-oriented players'
    ]
  },
  {
    rank: 9,
    name: 'Champions Padel Club',
    slug: 'champions-padel-club',
    score: 89,
    location: 'Doral, FL',
    courts: '5 indoor courts',
    price: '$$',
    website: 'championspadel.com',
    description: 'Miami\'s premier indoor padel destination in Doral features 5 high-quality courts with artificial turf and LED lighting at some of the most affordable rates in the area. Champions Padel Club also offers pickleball courts, kids clinics, big screens, and an active WhatsApp community.',
    highlights: [
      '5 high-quality indoor courts',
      'LED lighting & artificial turf',
      'Additional pickleball courts',
      'Kids clinics & programs',
      'Big screens for watching matches',
      'Active WhatsApp community'
    ],
    programs: [
      'Hourly court rental ($25-45)',
      'Kids clinics',
      'Professional coaching',
      'Tournaments',
      'Open play',
      'Pickleball sessions'
    ],
    bestFor: [
      'Budget-conscious players',
      'Families with children',
      'Doral residents',
      'Multi-sport players (padel + pickleball)'
    ]
  },
  {
    rank: 10,
    name: 'Reserve Padel - Design District',
    slug: 'reserve-padel-design-district',
    score: 88,
    location: 'Design District, Miami, FL',
    courts: '3 indoor courts',
    price: '$$$$',
    description: 'Miami\'s first members-only padel club occupies a prime spot in the Design District with three glass-enclosed courts. Reserve Padel pairs exclusive access with an outdoor gym, cold plunges, a members\' lounge with viewing area, and a curated pro shop -- delivering a boutique, high-end padel experience.',
    highlights: [
      '3 glass-enclosed indoor courts',
      'Members-only exclusivity',
      'Outdoor gym & cold plunges',
      'Members\' lounge with court viewing',
      'Curated pro shop',
      'Wheelchair accessible'
    ],
    programs: [
      'Members-only court time (~$150/90min per group)',
      'Initiation fee required',
      'Professional coaching',
      'Private lessons',
      'Social events',
      'Guest passes for members'
    ],
    bestFor: [
      'Design District residents & visitors',
      'Exclusive membership seekers',
      'Luxury-focused players',
      'Networking-minded professionals'
    ]
  }
];

export default function MiamiBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Miami (2026) | Complete South Florida Guide",
    "description": "Explore Miami's top 29+ padel clubs in 2026. Ultra Padel's 29 courts, Urban Padel, Wynwood & more. Rankings, pricing & guide.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
    "datePublished": "2026-03-21T00:00:00Z",
    "dateModified": "2026-03-21T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "url": "https://padelcourtsfinder.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://padelcourtsfinder.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-miami"
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
            Best Padel Clubs in Miami (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Miami & South Florida</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>10 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-blue-600">29+</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">170+</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$20-155</div>
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
            Miami: America&apos;s Undisputed Padel Capital
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            No city in the United States can match Miami&apos;s padel scene. With 29 open clubs, over 170 courts, and 2 more facilities on the way, Miami and its surrounding metro area have built the densest concentration of padel infrastructure in the country. The Latin American influence, year-round outdoor weather, and a fitness-obsessed culture have made South Florida the epicenter of padel in America.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The scale is staggering. <Link href="/courts/ultra-padel-club" className="text-blue-600 hover:underline">Ultra Padel Club</Link> alone operates 29 courts in Little Haiti -- the single largest padel facility in the US. <Link href="/courts/urban-padel" className="text-blue-600 hover:underline">Urban Padel</Link> in Doral claims the largest indoor padel facility with 12 climate-controlled courts. From luxury members-only clubs like <Link href="/courts/sunset-padel" className="text-blue-600 hover:underline">Sunset Padel</Link> in Miami Beach to budget-friendly options at <Link href="/courts/champions-padel-club" className="text-blue-600 hover:underline">Champions Padel Club</Link> starting at $25/hour, there is a padel club for every player and every budget.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a Miami local, a snowbird spending winter in South Florida, or visiting for vacation, this guide ranks the 10 best padel clubs in the Miami metro area. Browse the full list of courts on our <Link href="/florida/miami" className="text-blue-600 hover:underline">Miami courts page</Link> or explore all options across <Link href="/florida" className="text-blue-600 hover:underline">Florida</Link>.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/ultra-padel-club" className="text-blue-600 hover:underline">Ultra Padel Club</Link> (29 courts, pool, wellness center)</p>
            <p><strong>Best Luxury:</strong> <Link href="/courts/sunset-padel" className="text-blue-600 hover:underline">Sunset Padel</Link> (members-only, TechnoGym, physical therapist)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/champions-padel-club" className="text-blue-600 hover:underline">Champions Padel Club</Link> ($25-45/hr indoor courts)</p>
            <p><strong>Best for Beginners:</strong> <Link href="/courts/wynwood-padel-club" className="text-blue-600 hover:underline">Wynwood Padel Club</Link> (since 2016, student memberships $10)</p>
            <p><strong>Best Indoor:</strong> <Link href="/courts/urban-padel" className="text-blue-600 hover:underline">Urban Padel</Link> (12 climate-controlled courts, $299/mo unlimited)</p>
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

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon to Miami</h2>
          <p className="text-gray-700 text-lg mb-6">
            Miami&apos;s padel scene continues to expand. Two exciting new facilities are on the way:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-semibold">COMING SOON</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <Link href="/courts/icon-padel-club" className="text-blue-600 hover:underline">Icon Padel Club</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-2">Aventura, FL -- 7 indoor courts</p>
              <p className="text-gray-700">
                Miami&apos;s first covered rooftop luxury padel club above the Aventura skyline. Planned amenities include a Pilates studio, gym, yoga, sauna, cold plunge, organic kitchen, bar, and a 10X Health partnership. Memberships from $350/month.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-semibold">COMING SOON</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <Link href="/courts/the-gables-padel" className="text-blue-600 hover:underline">The Gables Padel</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-2">Coral Gables, Miami, FL -- 8 indoor courts</p>
              <p className="text-gray-700">
                An upcoming 8-court indoor padel club in the heart of Coral Gables, blending elite sport with lifestyle amenities. Plans include a wellness center with massages and red light therapy, free private parking, and curated events.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Miami?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all 29+ Miami padel clubs and book your court today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/florida/miami"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Miami Courts
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-fort-lauderdale" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Fort Lauderdale</h4>
              <p className="text-sm text-gray-600">6 clubs in Broward County including 10by20 & Replay Club</p>
            </Link>
            <Link href="/blog/best-padel-clubs-orlando" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Orlando</h4>
              <p className="text-sm text-gray-600">Central Florida padel with USTA National Campus</p>
            </Link>
            <Link href="/blog/best-padel-clubs-nyc" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in NYC</h4>
              <p className="text-sm text-gray-600">Brooklyn, Manhattan & the tri-state area</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
