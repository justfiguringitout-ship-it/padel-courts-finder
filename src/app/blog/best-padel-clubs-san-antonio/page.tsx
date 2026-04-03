import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in San Antonio (2026) | Alamo City Padel Guide',
  description: 'Discover San Antonio\'s 4 best padel clubs in 2026. From Slice Padel Co\'s food truck park to King of Padel\'s 6 indoor courts. Rankings & pricing.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-san-antonio',
  },
  openGraph: {
    title: 'Best Padel Clubs in San Antonio (2026) | Alamo City Padel Guide',
    description: 'Discover San Antonio\'s 4 best padel clubs in 2026. From Slice Padel Co\'s food truck park to King of Padel\'s 6 indoor courts. Rankings & pricing.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-san-antonio',
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
    name: 'The King of Padel - San Antonio',
    slug: 'the-king-of-padel-san-antonio',
    score: 95,
    location: 'San Antonio, TX',
    courts: '6 indoor courts',
    price: '$$-$$$',
    description: 'San Antonio\'s largest and most feature-rich padel destination. The King of Padel is a premier indoor sports entertainment center pairing 6 padel courts with pickleball, soccer, volleyball, golf simulators, a full gym, and a sports bar. Whether you want a competitive match or a night out with friends, this facility delivers the full package.',
    highlights: [
      '6 indoor padel courts',
      'Full sports entertainment complex',
      'Fitness center & gym on-site',
      'Sports bar with food & drinks',
      'Virtual golf simulators',
      'Pet-friendly & wheelchair accessible'
    ],
    programs: [
      'Court rentals ($20-40/hr)',
      'Memberships from $49/mo (gym) to $199/mo (unlimited padel)',
      'Private lessons ($40-90/hr)',
      'Group clinics',
      'Open play sessions',
      'Corporate & group events'
    ],
    bestFor: [
      'Competitive players wanting indoor courts',
      'Groups seeking sports entertainment',
      'After-work social play',
      'Families & multi-sport athletes'
    ]
  },
  {
    rank: 2,
    name: 'Slice Padel Co',
    slug: 'slice-padel-co',
    score: 93,
    location: 'San Antonio, TX',
    courts: '4 indoor courts',
    price: '$$',
    description: 'San Antonio\'s first full-service padel club and one of the most unique padel venues in Texas. Slice Padel Co blends 4 indoor courts with a food truck park, live music stage, full-service bar, and rooftop event space. The professional academy and social atmosphere make it a true community hub.',
    highlights: [
      '4 indoor padel courts',
      'Food truck park on-site',
      'Live music stage & events',
      'Full-service bar',
      'Rooftop event space',
      'Professional padel academy'
    ],
    programs: [
      'Membership $85/mo (pre-sale grandfathered)',
      'Regular membership $125/mo + $50 activation',
      'Professional coaching academy',
      'Social events & tournaments',
      'Live music nights',
      'Private event hosting'
    ],
    bestFor: [
      'Social players who love nightlife',
      'Beginners wanting a fun intro to padel',
      'Date night & group outings',
      'Players seeking a unique club experience'
    ]
  },
  {
    rank: 3,
    name: 'U-Padel Club - San Antonio',
    slug: 'u-padel-club-san-antonio',
    score: 91,
    location: '14630 Judson Rd, San Antonio, TX',
    courts: '5 outdoor courts',
    price: '$$',
    description: 'U-Padel Club brings 5 state-of-the-art outdoor courts to northeast San Antonio. With tiered membership options including a student plan at just $115/month for unlimited daytime play, it offers some of the best value in the city. Expert coaches, a pro shop, and solid amenities round out the package.',
    highlights: [
      '5 state-of-the-art outdoor courts',
      'Affordable student membership option',
      'Expert coaching staff',
      'Pro shop with gear & accessories',
      'Free parking & WiFi',
      'Changing rooms & lockers'
    ],
    programs: [
      'Student membership ($115/mo unlimited daytime)',
      'Pro membership ($135+/mo, 8 bookings/mo)',
      'Premium membership ($220+/mo unlimited)',
      'Court bookings ($15-28/1.5hr)',
      'Private & group coaching',
      'Open play sessions'
    ],
    bestFor: [
      'Students & budget-conscious players',
      'Northeast San Antonio residents',
      'Outdoor play enthusiasts',
      'Players developing their skills'
    ]
  },
  {
    rank: 4,
    name: 'Mainland Sports Complex',
    slug: 'mainland-sports-complex',
    score: 82,
    location: 'San Antonio, TX',
    courts: '1 outdoor court',
    price: '$',
    description: 'A multi-sport outdoor complex that includes padel alongside soccer fields, pickleball, and beach volleyball. While it has just one padel court, Mainland Sports Complex offers an affordable entry point through its padel league program at $65 per person for a 6-week season. Ideal for recreational players who enjoy variety.',
    highlights: [
      'Multi-sport outdoor complex',
      'Padel league program available',
      'Soccer fields & beach volleyball',
      'Pickleball courts on-site',
      'Concession stand & pavilion',
      'Ample parking'
    ],
    programs: [
      'Padel league ($65/person/6 weeks)',
      'Multi-sport facility access',
      'Recreational play',
      'Community events'
    ],
    bestFor: [
      'Budget-friendly padel',
      'Multi-sport enthusiasts',
      'Recreational league players',
      'Casual community play'
    ]
  }
];

export default function SanAntonioBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in San Antonio (2026) | Alamo City Padel Guide",
    "description": "Discover San Antonio's 4 best padel clubs in 2026. From Slice Padel Co's food truck park to King of Padel's 6 indoor courts.",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-san-antonio"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">
              &larr; Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in San Antonio (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Antonio, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">16</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$15-40</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">Year-Round</div>
              <div className="text-sm text-gray-600">Texas Climate</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Alamo City&apos;s Padel Scene Arrives
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            San Antonio has gone from zero padel courts to 4 active clubs with 16 courts in a remarkably short time. As Texas&apos;s second-largest city with 1.5 million residents and deep Latin American roots, San Antonio was always a natural fit for the sport. Now in 2026, the Alamo City is delivering on that promise with a diverse mix of indoor entertainment complexes, outdoor court clusters, and one of the most creatively designed padel venues in the entire state.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The standout story is <Link href="/courts/slice-padel-co" className="text-blue-600 hover:underline">Slice Padel Co</Link>, which pairs 4 indoor courts with a food truck park, live music, and a rooftop bar. Meanwhile, <Link href="/courts/the-king-of-padel-san-antonio" className="text-blue-600 hover:underline">The King of Padel</Link> leads on scale with 6 indoor courts inside a full sports entertainment complex featuring gym, golf simulators, and a sports bar.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a local looking for your first padel hit or a visitor exploring beyond the River Walk, this guide covers every option. Browse all courts on our <Link href="/texas/san-antonio" className="text-blue-600 hover:underline">San Antonio courts page</Link> or explore the full <Link href="/texas" className="text-blue-600 hover:underline">Texas padel directory</Link>.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/the-king-of-padel-san-antonio" className="text-blue-600 hover:underline">The King of Padel</Link> (6 indoor courts, full complex)</p>
            <p><strong>Most Unique:</strong> <Link href="/courts/slice-padel-co" className="text-blue-600 hover:underline">Slice Padel Co</Link> (food trucks, live music, rooftop bar)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/u-padel-club-san-antonio" className="text-blue-600 hover:underline">U-Padel Club</Link> ($115/mo student membership)</p>
            <p><strong>Best for Beginners:</strong> <Link href="/courts/mainland-sports-complex" className="text-blue-600 hover:underline">Mainland Sports Complex</Link> ($65 league intro)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-6">
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

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in San Antonio?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all San Antonio padel courts and book your next session
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/texas/san-antonio"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View San Antonio Courts
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
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">Just 80 miles north with 7+ clubs</p>
            </Link>
            <Link href="/blog/best-padel-clubs-houston" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Houston</h4>
              <p className="text-sm text-gray-600">Space City&apos;s growing padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">DFW metroplex padel facilities</p>
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
