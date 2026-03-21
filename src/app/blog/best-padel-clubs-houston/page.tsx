import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Houston (2026) | Complete HTX Guide',
  description: 'Discover Houston\'s 9 best padel clubs in 2026. TEMPO, Cube Padel, Punto Azul & more. Rankings, pricing & complete Houston padel guide.',
  alternates: {
    canonical: 'https://padelcourtsfinder.com/blog/best-padel-clubs-houston',
  },
  openGraph: {
    title: 'Best Padel Clubs in Houston (2026) | Complete HTX Guide',
    description: 'Discover Houston\'s 9 best padel clubs in 2026. TEMPO, Cube Padel, Punto Azul & more. Rankings, pricing & complete Houston padel guide.',
    url: 'https://padelcourtsfinder.com/blog/best-padel-clubs-houston',
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
    name: 'TEMPO Padel & Pickleball Club',
    slug: 'tempo-padel-pickleball-club',
    score: 96,
    location: 'Houston, TX',
    courts: '5 indoor courts',
    price: '$$',
    website: 'tempopadel.com',
    description: 'Houston\'s premier indoor padel and pickleball club with 5 courts, offering lessons, rentals, memberships, and wellness amenities like sauna and cold plunge in a vibrant social atmosphere. A perfect 5.0 Google rating speaks to the quality of the experience.',
    highlights: [
      '5 indoor padel courts',
      'Sauna & cold plunge wellness amenities',
      'Pro shop with premium gear',
      'Free parking on-site',
      '5.0 Google rating',
      'Vibrant social atmosphere'
    ],
    programs: [
      'Padel from $12/player/60min',
      'Premium memberships (40% off)',
      'Private lessons',
      'Equipment rentals',
      'Group clinics',
      'Social events'
    ],
    bestFor: [
      'All skill levels',
      'Wellness-focused players',
      'Social padel enthusiasts',
      'West Houston residents'
    ]
  },
  {
    rank: 2,
    name: 'Punto Azul Padel Club',
    slug: 'punto-azul-padel-club',
    score: 95,
    location: 'Houston, TX',
    courts: '8 outdoor courts',
    price: '$$-$$$',
    description: 'Punto Azul Padel Club is Houston\'s largest dedicated padel facility with 8 premium outdoor courts for social play and high-level training. Their Academy provides coaching from beginner to advanced levels, making it a complete padel destination.',
    highlights: [
      '8 premium outdoor padel courts',
      'Largest court count in Houston',
      'Full padel academy',
      'Beginner to advanced coaching',
      'Wheelchair accessible',
      'Pro shop & lockers'
    ],
    programs: [
      'Academy coaching (all levels)',
      'Social play sessions',
      'Tournament hosting',
      'Private lessons',
      'Group clinics',
      'Equipment available'
    ],
    bestFor: [
      'Players wanting court variety',
      'Academy-level training',
      'Tournament competitors',
      'Large groups & events'
    ]
  },
  {
    rank: 3,
    name: 'Cube Padel Houston',
    slug: 'cube-padel-houston',
    score: 94,
    location: 'Houston, TX',
    courts: '5 indoor courts',
    price: '$$-$$$',
    description: 'Cube Padel Houston is a modern indoor padel club offering 5 climate-controlled courts, lessons, and community events for players of all levels. Part of the growing Cube Padel network, this facility is perfect for beating the Houston heat while enjoying premium padel.',
    highlights: [
      '5 climate-controlled indoor courts',
      'Air-conditioned comfort year-round',
      'Part of national Cube Padel network',
      'Pro shop & changing rooms',
      'Pickleball courts also available',
      '4.9 Google rating'
    ],
    programs: [
      'Memberships from $50/month',
      'Court rentals',
      'Leagues & tournaments',
      'Private coaching',
      'Group clinics',
      'Community events'
    ],
    bestFor: [
      'Summer play (AC indoor)',
      'North Houston residents',
      'Competitive players',
      'Multi-sport athletes'
    ]
  },
  {
    rank: 4,
    name: 'Racket Social Club',
    slug: 'racket-social-club',
    score: 93,
    location: 'Willowbrook, Houston, TX',
    courts: '4 outdoor courts',
    price: '$$',
    description: 'Racket Social Club Willowbrook is a premier outdoor padel and pickleball facility in northwest Houston featuring 4 full-panoramic padel courts. With a perfect 5.0 Google rating, it delivers a top-notch social padel experience.',
    highlights: [
      '4 full-panoramic outdoor padel courts',
      'Perfect 5.0 Google rating',
      'Pro store on-site',
      'Free parking & WiFi',
      'Changing rooms & lockers',
      'Wheelchair accessible'
    ],
    programs: [
      'Court bookings',
      'Open play sessions',
      'Social events',
      'Equipment available at pro store',
      'Pickleball also available',
      'Community leagues'
    ],
    bestFor: [
      'Northwest Houston residents',
      'Social players',
      'Outdoor padel fans',
      'Willowbrook area families'
    ]
  },
  {
    rank: 5,
    name: 'Padel Country Club Memorial',
    slug: 'padel-country-club-memorial',
    score: 92,
    location: 'West Houston, TX',
    courts: '2 indoor courts',
    price: '$$$',
    description: 'Padel Country Club Memorial offers two climate-controlled indoor padel courts in West Houston with premium amenities including a full bar, restaurant, and pro shop. Perfect 5.0 Google rating reflects the upscale club experience.',
    highlights: [
      '2 climate-controlled indoor courts',
      'Full bar & restaurant on-site',
      'Pro shop with gear & accessories',
      'Air conditioning & WiFi',
      'Changing rooms & lockers',
      '5.0 Google rating'
    ],
    programs: [
      'Court rental ($60/hour)',
      'Private lessons',
      'Social events',
      'Bar & dining experience',
      'Equipment available',
      'Open play'
    ],
    bestFor: [
      'West Houston / Memorial residents',
      'Social & dining experience seekers',
      'Premium club atmosphere lovers',
      'After-work padel groups'
    ]
  },
  {
    rank: 6,
    name: 'iPadel Houston',
    slug: 'ipadel-houston',
    score: 91,
    location: 'Houston, TX',
    courts: '2 outdoor courts',
    price: '$$',
    description: 'Premier outdoor padel facility in Houston founded by US #1 female padel player Belen Salcedo and USPA President Mike May. With 4.9-star reviews and strong pedigree, iPadel delivers authentic, high-level padel instruction and play.',
    highlights: [
      'Founded by US #1 female player',
      'USPA President involvement',
      '4.9 Google rating',
      'Tournament hosting venue',
      'Pro shop with gear & balls',
      'Free parking & WiFi'
    ],
    programs: [
      'Court rental: 60min $45, 90min $65',
      'Racket rental $5/person',
      'Private coaching',
      'Tournament events',
      'Group sessions',
      'Open play'
    ],
    bestFor: [
      'Players seeking elite instruction',
      'Competitive padel enthusiasts',
      'Tournament players',
      'Beginners wanting top coaching'
    ]
  },
  {
    rank: 7,
    name: 'West43 Padel',
    slug: 'west43-padel',
    score: 90,
    location: 'The Heights, Houston, TX',
    courts: '2 indoor courts',
    price: '$$-$$$',
    description: 'West43 Padel is Houston\'s premier indoor padel lounge in The Heights, offering state-of-the-art courts, memberships, events, leagues, and a vibrant community atmosphere with a coffee and snack bar.',
    highlights: [
      'Trendy Heights neighborhood location',
      'State-of-the-art indoor courts',
      'Coffee & snack bar lounge',
      'Climate-controlled facility',
      'Regular events & leagues',
      'Vibrant community vibe'
    ],
    programs: [
      'Memberships from $99/month (3 free courts)',
      'Premium membership $149/month',
      'VIP membership $299/month',
      'Events $20-$30',
      'Hourly court bookings',
      'Merchandise discounts for members'
    ],
    bestFor: [
      'Heights / inner loop residents',
      'Trendy social scene seekers',
      'Young professionals',
      'Community-focused players'
    ]
  },
  {
    rank: 8,
    name: 'The Houstonian Club',
    slug: 'the-houstonian-club',
    score: 88,
    location: 'Houston, TX',
    courts: '2 outdoor courts',
    price: '$$$$',
    description: 'The Houstonian Club is a prestigious private luxury fitness club on a 27-acre wooded oasis with 2 outdoor lighted padel courts, extensive racquet sports, pools, and a massive 185,000 sq ft gym. Padel here is part of a complete luxury lifestyle.',
    highlights: [
      '27-acre wooded private campus',
      '2 lighted outdoor padel courts',
      '185,000 sq ft fitness facility',
      'Lap pool & resort pool',
      '8-court pickleball complex',
      'Indoor & outdoor tennis'
    ],
    programs: [
      'Private club membership required',
      'Padel court reservations',
      'Tennis & pickleball also available',
      'Full fitness programming',
      'Pro shop',
      'Spa & wellness'
    ],
    bestFor: [
      'Luxury club members',
      'Multi-sport athletes',
      'Families wanting full amenities',
      'Galleria / River Oaks residents'
    ]
  },
  {
    rank: 9,
    name: 'Houston Padel Indoor',
    slug: 'houston-padel-indoor',
    score: 85,
    location: 'Northwest Houston, TX',
    courts: 'Indoor courts',
    price: '$$',
    description: 'Dedicated indoor padel facility in northwest Houston offering climate-controlled courts for all skill levels. A solid, no-frills option with accessible pricing and wheelchair accessibility.',
    highlights: [
      'Dedicated indoor padel facility',
      'Climate-controlled courts',
      'Wheelchair accessible',
      'Pro shop available',
      'Accessible pricing',
      'All skill levels welcome'
    ],
    programs: [
      'Court rental ($20-$40/hour)',
      'Open play sessions',
      'Beginner introductions',
      'Equipment available',
      'Walk-in friendly',
      'Community events'
    ],
    bestFor: [
      'Northwest Houston residents',
      'Budget-conscious players',
      'Beginners trying padel',
      'Casual recreational players'
    ]
  }
];

export default function HoustonBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Houston (2026) | Complete HTX Guide",
    "description": "Discover Houston's 9 best padel clubs in 2026. TEMPO, Cube Padel, Punto Azul & more. Rankings, pricing & complete Houston padel guide.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-houston"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Houston (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Houston, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>9 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-red-600">9</div>
              <div className="text-sm text-gray-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">30+</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">$12-65</div>
              <div className="text-sm text-gray-600">Price Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">Indoor & Out</div>
              <div className="text-sm text-gray-600">Court Types</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Houston: Texas&apos;s Padel Powerhouse in 2026
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Houston&apos;s padel scene has exploded. The nation&apos;s fourth-largest city now counts 9 open padel clubs with over 30 courts spread across the metro, from The Heights to Memorial to northwest suburbs. With a massive Latin American population bringing authentic padel culture and Houston&apos;s energy-sector wealth funding premium facilities, Space City has become one of the strongest padel markets in the United States.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The standout story is the sheer variety. <Link href="/courts/tempo-padel-pickleball-club" className="text-red-600 hover:underline">TEMPO Padel</Link> leads with wellness amenities and a perfect rating, while <Link href="/courts/punto-azul-padel-club" className="text-red-600 hover:underline">Punto Azul</Link> offers Houston&apos;s largest outdoor court complex with 8 courts. Indoor options like <Link href="/courts/cube-padel-houston" className="text-red-600 hover:underline">Cube Padel</Link> and <Link href="/courts/west43-padel" className="text-red-600 hover:underline">West43 Padel</Link> provide climate-controlled relief from Houston summers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a competitive player, a social enthusiast, or a complete beginner, Houston has a club for you. Browse all options on our <Link href="/texas/houston" className="text-red-600 hover:underline">Houston courts page</Link> or explore the full <Link href="/texas" className="text-red-600 hover:underline">Texas padel directory</Link>. Note: SB Padel Houston (4 courts in Spring Branch) is temporarily closed but may reopen -- check their status for updates.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/tempo-padel-pickleball-club" className="text-red-600 hover:underline">TEMPO Padel</Link> (5 indoor courts, sauna & cold plunge)</p>
            <p><strong>Most Courts:</strong> <Link href="/courts/punto-azul-padel-club" className="text-red-600 hover:underline">Punto Azul Padel</Link> (8 outdoor courts, full academy)</p>
            <p><strong>Best Indoor:</strong> <Link href="/courts/cube-padel-houston" className="text-red-600 hover:underline">Cube Padel</Link> (5 AC courts, national network)</p>
            <p><strong>Best Social Scene:</strong> <Link href="/courts/racket-social-club" className="text-red-600 hover:underline">Racket Social Club</Link> (panoramic courts, 5.0 rating)</p>
            <p><strong>Best Luxury:</strong> <Link href="/courts/the-houstonian-club" className="text-red-600 hover:underline">The Houstonian Club</Link> (27-acre private campus)</p>
            <p><strong>Best Coaching:</strong> <Link href="/courts/ipadel-houston" className="text-red-600 hover:underline">iPadel Houston</Link> (founded by US #1 female player)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/houston-padel-indoor" className="text-red-600 hover:underline">Houston Padel Indoor</Link> (from $20/hour)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-red-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-orange-200 transition-colors">
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
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-red-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-red-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
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
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Houston?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Houston and Texas padel courts in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/texas/houston"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Houston Courts
            </Link>
            <Link
              href="/texas"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
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
              <p className="text-sm text-gray-600">DFW metroplex padel scene expanding</p>
            </Link>
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">6+ clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-antonio" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Antonio</h4>
              <p className="text-sm text-gray-600">Alamo City padel growing fast</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
