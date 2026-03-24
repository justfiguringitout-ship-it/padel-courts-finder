import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Orlando (2026) | Complete Central Florida Guide',
  description: 'Discover Orlando\'s 5 best padel clubs in 2026. From USTA National Campus to Padel Plus Indoor. Rankings, pricing & Central Florida guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-orlando',
  },
  openGraph: {
    title: 'Best Padel Clubs in Orlando (2026) | Complete Central Florida Guide',
    description: 'Discover Orlando\'s 5 best padel clubs in 2026. From USTA National Campus to Padel Plus Indoor. Rankings, pricing & Central Florida guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-orlando',
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
    name: 'USTA National Campus',
    slug: 'usta-national-campus',
    score: 96,
    location: 'Orlando, FL',
    courts: '4 outdoor courts',
    price: '$$$',
    description: 'The USTA National Campus is the crown jewel of Orlando padel. With 4 outdoor padel courts in the Nemours Family Zone, this world-class facility brings the credibility of the United States Tennis Association to the sport. Set within a massive campus featuring 100+ tennis courts, multiple dining options, and a full pro shop, it is by far the most prestigious place to play padel in Central Florida.',
    highlights: [
      '4 outdoor padel courts',
      'USTA-backed facility & programming',
      '100+ tennis courts on campus',
      'Pro shop & racquet bar',
      'Multiple dining options',
      'Convenient location near Orlando airport'
    ],
    programs: [
      'Court rentals ($70/hr + tax)',
      'Professional coaching',
      'USTA-sanctioned events',
      'Equipment rental',
      'Multi-sport campus access',
      'Group clinics'
    ],
    bestFor: [
      'Serious competitive players',
      'Tennis players trying padel',
      'Visitors & tourists near airport',
      'Players wanting premium facilities'
    ]
  },
  {
    rank: 2,
    name: 'Padel Plus Indoor Racquet Club',
    slug: 'padel-plus-indoor-racquet-club',
    score: 93,
    location: 'Orlando, FL',
    courts: '4 indoor courts',
    price: '$$-$$$',
    description: 'Orlando\'s premier indoor padel facility with 4 professional courts, a full gym, and a vibrant community atmosphere. Padel Plus stands out with its comprehensive offering: memberships starting at just $90/month, paddle rentals for $5, a ball machine for solo practice, and a Juan Valdez Cafe on-site. The climate-controlled indoor setting makes it the go-to for year-round play.',
    highlights: [
      '4 professional indoor courts',
      'Full gym & fitness center',
      'Juan Valdez Cafe on-site',
      'Ball machine for solo practice',
      'Pickleball court available',
      'Climate-controlled for Florida summers'
    ],
    programs: [
      'Court rentals ($25-60/hr)',
      'Memberships from $90/mo',
      'Paddle rental ($5)',
      'Professional coaching',
      'Group clinics (all levels)',
      'Community events & leagues'
    ],
    bestFor: [
      'Year-round indoor play',
      'Members wanting gym + padel combo',
      'All skill levels',
      'Budget-conscious players'
    ]
  },
  {
    rank: 3,
    name: 'Orlando Padel Club Indoor',
    slug: 'orlando-padel-club-indoor',
    score: 91,
    location: 'Orlando, FL',
    courts: '2 indoor courts',
    price: '$$-$$$',
    website: 'orlandopadelclub.com',
    description: 'A community-focused indoor padel facility offering year-round play in climate-controlled comfort. Orlando Padel Club Indoor has earned a perfect 5.0 Google rating thanks to excellent coaching clinics, regular social events, and a welcoming atmosphere for all skill levels. The 90-minute court sessions at $110 provide generous play time.',
    highlights: [
      '2 climate-controlled indoor courts',
      'Perfect 5.0 Google rating',
      'Strong community & social events',
      'Professional coaching programs',
      'Equipment rental available',
      'Wheelchair accessible'
    ],
    programs: [
      'Court sessions ($110/90min)',
      'Coaching clinics',
      'Social play events',
      'Beginner workshops',
      'Youth programs',
      'Corporate events'
    ],
    bestFor: [
      'Community-focused players',
      'Beginners wanting quality instruction',
      'Summer play (essential AC)',
      'Social padel enthusiasts'
    ]
  },
  {
    rank: 4,
    name: 'Sodo Padel',
    slug: 'sodo-padel',
    score: 87,
    location: 'SODO District, Orlando, FL',
    courts: '3 outdoor courts',
    price: '$$',
    description: 'Located at Free Kick Orlando in the trendy SODO district, Sodo Padel offers 3 state-of-the-art outdoor courts with synthetic turf and floodlighting for extended evening play. The central location and on-site snack bar make it a convenient option for after-work sessions. Court rental runs $88 for 1.5 hours, with lessons also available.',
    highlights: [
      '3 outdoor courts with synthetic turf',
      'Floodlighting for evening play',
      'Central SODO district location',
      'Equipment rental available',
      'On-site cafeteria & snack bar',
      'Free parking & WiFi'
    ],
    programs: [
      'Court rental ($88/1.5hr)',
      'Private & group lessons',
      'Equipment rental',
      'Open play',
      'Evening sessions under lights',
      'Walk-in play welcome'
    ],
    bestFor: [
      'Central Orlando residents',
      'After-work evening players',
      'Outdoor padel fans',
      'Players near SODO & downtown'
    ]
  },
  {
    rank: 5,
    name: 'Padel in Orlando',
    slug: 'padel-in-orlando',
    score: 85,
    location: 'Caribe Royale Orlando, FL',
    courts: '2 indoor courts',
    price: '$$',
    description: 'A premium indoor padel complex housed within the Caribe Royale Orlando resort, featuring state-of-the-art courts and professional coaching by Angel Espadas. The resort setting makes it uniquely accessible for tourists, while the wheelchair-accessible facility with locker rooms, pro shop, and on-site restaurant serves locals well too.',
    highlights: [
      '2 indoor courts at Caribe Royale',
      'Professional coaching by Angel Espadas',
      'Resort setting with restaurant access',
      'Pro shop on-site',
      'Wheelchair accessible',
      'Pickleball courts also available'
    ],
    programs: [
      'Court rentals ($20-40/hr)',
      'Professional coaching sessions',
      'Equipment rental',
      'Resort guest play packages',
      'Open play sessions',
      'Beginner introductions'
    ],
    bestFor: [
      'Tourists & resort guests',
      'Players wanting professional coaching',
      'Convention visitors',
      'Beginners trying padel for the first time'
    ]
  }
];

export default function OrlandoBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Orlando (2026) | Complete Central Florida Guide",
    "description": "Discover Orlando's 5 best padel clubs in 2026. From USTA National Campus to Padel Plus Indoor. Rankings, pricing & Central Florida guide.",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-orlando"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">
              &larr; Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Orlando (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Orlando & Central Florida</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-blue-600">15</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$20-70</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">+1</div>
              <div className="text-sm text-gray-600">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Central Florida&apos;s Padel Scene Heats Up
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Orlando&apos;s padel scene has grown rapidly, now counting 5 open clubs with 15 courts across the metro area and another facility on the way. As Central Florida&apos;s hub with 2.5 million residents and 75 million annual tourists, Orlando brings a unique dynamic: a large local community hungry for new sports combined with international visitors already familiar with padel from Europe and Latin America.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The <Link href="/courts/usta-national-campus" className="text-blue-600 hover:underline">USTA National Campus</Link> lends world-class credibility with its 4 outdoor courts on a 100+ court tennis campus. For indoor play essential during Orlando&apos;s brutal summers, <Link href="/courts/padel-plus-indoor-racquet-club" className="text-blue-600 hover:underline">Padel Plus Indoor Racquet Club</Link> leads with 4 climate-controlled courts, a gym, and a cafe. The <Link href="/courts/orlando-padel-club-indoor" className="text-blue-600 hover:underline">Orlando Padel Club Indoor</Link> has earned a perfect 5.0 Google rating for its community-first approach.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a local, a snowbird, or a tourist between theme park visits, this guide covers every padel option in Central Florida. Browse all courts on our <Link href="/florida/orlando" className="text-blue-600 hover:underline">Orlando courts page</Link> or explore the full <Link href="/florida" className="text-blue-600 hover:underline">Florida padel directory</Link>.
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/usta-national-campus" className="text-blue-600 hover:underline">USTA National Campus</Link> (4 courts, world-class campus)</p>
            <p><strong>Best Indoor:</strong> <Link href="/courts/padel-plus-indoor-racquet-club" className="text-blue-600 hover:underline">Padel Plus</Link> (4 courts, gym, cafe)</p>
            <p><strong>Best Community:</strong> <Link href="/courts/orlando-padel-club-indoor" className="text-blue-600 hover:underline">Orlando Padel Club Indoor</Link> (5.0 Google rating)</p>
            <p><strong>Best for Tourists:</strong> <Link href="/courts/padel-in-orlando" className="text-blue-600 hover:underline">Padel in Orlando</Link> (Caribe Royale resort)</p>
            <p><strong>Best Outdoor:</strong> <Link href="/courts/sodo-padel" className="text-blue-600 hover:underline">Sodo Padel</Link> (SODO district, floodlit courts)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
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
                        <span className="text-blue-600 font-bold">&#10003;</span>
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
                        &#10003; {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon to Orlando</h3>
          <div className="flex items-start gap-4">
            <div className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">
              Coming Soon
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                <Link href="/courts/bulldog-padel-club" className="text-blue-600 hover:underline">BullDog Padel Club</Link>
              </h4>
              <p className="text-gray-700 mb-2">
                Lake Nona&apos;s premier padel club is set to open with 6 outdoor courts, a lounge area, food and beverage options, racket rentals via vending machines, and AI match recording powered by PlaySight cameras. Courts will be premium AFP/adidas surfaces booked through Playbypoint.
              </p>
              <p className="text-sm text-gray-500">
                6 outdoor courts | Lake Nona, Orlando | AI cameras & certified coaches
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Orlando?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Orlando and Central Florida padel courts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/florida/orlando"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Orlando Courts
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
            <Link href="/blog/best-padel-clubs-fort-lauderdale" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Fort Lauderdale</h4>
              <p className="text-sm text-gray-600">6 clubs across Broward County</p>
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
