import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Atlanta (2026) | Complete ATL Padel Guide',
  description: 'Discover Atlanta\'s 3 best padel clubs in 2026. Padel Haus, ITP Training Academy & Piedmont Driving Club. Rankings, pricing & ATL guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-atlanta',
  },
  openGraph: {
    title: 'Best Padel Clubs in Atlanta (2026) | Complete ATL Padel Guide',
    description: 'Discover Atlanta\'s 3 best padel clubs in 2026. Padel Haus, ITP Training Academy & Piedmont Driving Club. Rankings, pricing & ATL guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-atlanta',
    type: 'article',
    images: [{ url: 'https://static.wixstatic.com/media/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png/v1/fit/w_2500,h_1330,al_c/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png' }],
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
    name: 'Padel Haus Atlanta',
    slug: 'padel-haus-atlanta',
    score: 96,
    location: 'Westside Paper Building, Atlanta, GA',
    courts: '6 indoor courts',
    price: '$$$',
    description: 'Padel Haus Atlanta is the city\'s first dedicated indoor padel club, located in the historic Westside Paper building on Atlanta\'s trendy Westside. With 6 premium courts under soaring 40-55ft ceilings, stadium seating including a center court, spa-like locker rooms, a Juice Haus cafe, and fitness areas, this is a world-class padel destination.',
    highlights: [
      '6 premium indoor padel courts',
      'Soaring 40-55ft ceilings',
      'Stadium seating with center court',
      'Spa-like locker rooms & showers',
      'Juice Haus cafe on-site',
      '4.7 Google rating'
    ],
    programs: [
      'Peak play: $35/hour/person',
      'Memberships from $160/month',
      'Founding membership from $2,100/year',
      'Private coaching',
      'Group clinics',
      'Social events & tournaments'
    ],
    bestFor: [
      'Serious padel players',
      'Westside Atlanta residents',
      'Players wanting premium experience',
      'Social padel enthusiasts'
    ]
  },
  {
    rank: 2,
    name: 'ITP Training Academy',
    slug: 'itp-training-academy',
    score: 95,
    location: 'Metro Atlanta, GA',
    courts: '4 courts (indoor & outdoor)',
    price: '$$-$$$',
    description: 'ITP Training Academy is a newly-built full-service tennis, pickleball, and padel facility in metro Atlanta with 4 padel courts, comprehensive programming, and impressive social amenities including a restaurant, bar, viewing deck, billiards, and table tennis. A 4.9 Google rating makes it one of the highest-rated sports facilities in the area.',
    highlights: [
      '4 padel courts (indoor & outdoor)',
      'Restaurant & bar on-site',
      'Viewing deck for spectators',
      'Billiards & table tennis lounge',
      'Nighttime lighting for evening play',
      '4.9 Google rating'
    ],
    programs: [
      'Court time: $60/hour (~$15/person)',
      'Racket rental: $5',
      'Balls: $9',
      'Clinics from $30+',
      'Private lessons: $120 (ITA members 25% off)',
      'Tennis & pickleball also available'
    ],
    bestFor: [
      'Multi-sport athletes',
      'Families wanting full amenities',
      'Social players & dining groups',
      'Metro Atlanta residents'
    ]
  },
  {
    rank: 3,
    name: 'Piedmont Driving Club',
    slug: 'piedmont-driving-club',
    score: 84,
    location: 'Midtown Atlanta, GA',
    courts: '1 outdoor court',
    price: '$$$$',
    description: 'Prestigious private country club established in 1887, Piedmont Driving Club has added a newly constructed outdoor padel court to its extensive racquet sports offerings. Members enjoy padel alongside tennis, squash, an Olympic-sized pool, fitness centers, and fine dining in one of Atlanta\'s most exclusive settings.',
    highlights: [
      'Historic club established in 1887',
      'Newly constructed outdoor padel court',
      'Har-Tru tennis courts',
      'Olympic-sized swimming pool',
      'Squash & pickleball courts',
      'Fine dining & casual restaurants'
    ],
    programs: [
      'Private club membership required',
      'Padel court reservations',
      'Tennis & squash programs',
      'Fitness center access',
      'Swimming & aquatics',
      'Social & dining events'
    ],
    bestFor: [
      'Private club members',
      'Midtown Atlanta residents',
      'Multi-sport enthusiasts',
      'Luxury lifestyle seekers'
    ]
  }
];

export default function AtlantaBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Atlanta (2026) | Complete ATL Padel Guide",
    "description": "Discover Atlanta's 3 best padel clubs in 2026. Padel Haus, ITP Training Academy & Piedmont Driving Club. Rankings, pricing & ATL guide.",
    "image": "https://static.wixstatic.com/media/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png/v1/fit/w_2500,h_1330,al_c/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-atlanta"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-green-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Atlanta (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-green-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Atlanta, GA</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>3 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">11</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">$15-35</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">Year-Round</div>
              <div className="text-sm text-gray-600">Mild Climate</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Atlanta&apos;s Padel Scene Arrives in 2026
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Atlanta&apos;s padel scene has transformed from &quot;emerging&quot; to genuinely exciting. The Southeast&apos;s major hub now has 3 distinct padel destinations with 11 courts, anchored by the stunning <Link href="/courts/padel-haus-atlanta" className="text-green-600 hover:underline">Padel Haus Atlanta</Link> in the historic Westside Paper building -- the city&apos;s first dedicated indoor padel club with 6 premium courts under soaring ceilings.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <Link href="/courts/itp-training-academy" className="text-green-600 hover:underline">ITP Training Academy</Link> brings a full-service multi-sport experience with restaurant, bar, and a 4.9 Google rating, while the historic <Link href="/courts/piedmont-driving-club" className="text-green-600 hover:underline">Piedmont Driving Club</Link> has added padel to its prestigious 1887-founded campus. Atlanta&apos;s diverse international community, population growth, and sports-loving culture make it primed for continued expansion.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Browse all courts on our <Link href="/georgia/atlanta" className="text-green-600 hover:underline">Atlanta courts page</Link> or explore the full <Link href="/georgia" className="text-green-600 hover:underline">Georgia padel directory</Link>.
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/padel-haus-atlanta" className="text-green-600 hover:underline">Padel Haus Atlanta</Link> (6 indoor courts, Westside Paper)</p>
            <p><strong>Best Amenities:</strong> <Link href="/courts/itp-training-academy" className="text-green-600 hover:underline">ITP Training Academy</Link> (restaurant, bar, 4.9 rating)</p>
            <p><strong>Most Exclusive:</strong> <Link href="/courts/piedmont-driving-club" className="text-green-600 hover:underline">Piedmont Driving Club</Link> (private club since 1887)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/itp-training-academy" className="text-green-600 hover:underline">ITP Training Academy</Link> (~$15/person/hour)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-green-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-green-200 transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-green-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-green-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-green-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-green-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
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
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.bestFor.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Atlanta?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Atlanta and Georgia padel courts in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/georgia/atlanta"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Atlanta Courts
            </Link>
            <Link
              href="/georgia"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Georgia Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Southeast Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-charlotte" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Charlotte</h4>
              <p className="text-sm text-gray-600">Queen City&apos;s growing padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-orlando" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Orlando</h4>
              <p className="text-sm text-gray-600">Central Florida padel with indoor courts</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">29+ clubs, America&apos;s padel capital</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
