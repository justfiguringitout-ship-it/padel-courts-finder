import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Globe, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Ohio (2026) | Cleveland, Cincinnati & Columbus Guide',
  description: 'Ohio\'s 3 open padel clubs ranked for 2026: Padel Square\'s 6 indoor courts near Cleveland, Cleveland Premier and Cincinnati Open Sporting Club. Complete OH padel guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-ohio',
  },
  openGraph: {
    title: 'Best Padel Clubs in Ohio (2026) | Cleveland, Cincinnati & Columbus Guide',
    description: 'Ohio\'s 3 open padel clubs ranked for 2026: Padel Square\'s 6 indoor courts near Cleveland, Cleveland Premier and Cincinnati Open Sporting Club. Complete OH padel guide.',
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
    name: 'Cincinnati Open Sporting Club',
    slug: 'cincinnati-open-sporting-club',
    score: 85,
    location: 'Mason, OH (Greater Cincinnati)',
    courts: '2 outdoor courts',
    price: '$$',
    website: 'cincyopensportingclub.com',
    description: 'Opened in 2026 at the Lindner Family Tennis Center in Mason, as part of a $260 million redevelopment of the campus. The club has 2 outdoor padel courts alongside tennis and pickleball, and it is open to non-members. Members pay $15 to $20 per person per hour and non-members pay $30 to $40, and there is a public restaurant and bar on site.',
    highlights: [
      '2 outdoor padel courts',
      'At the Lindner Family Tennis Center',
      'Open to non-members',
      'Restaurant, bar and patio',
      'Locker rooms and showers',
      'Pro shop'
    ],
    programs: [
      'Member rate ($15-20/person/hour)',
      'Non-member rate ($30-40/person/hour)',
      'Lessons and clinics',
      'Leagues',
      'Tournaments',
      'Equipment rental'
    ],
    bestFor: [
      'Greater Cincinnati players',
      'Tennis players trying padel',
      'Players who want a meal after',
      'Visitors without a membership'
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
    "dateModified": "2026-10-09T00:00:00Z",
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
    <div className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="grain bg-court text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-stone-400 hover:text-turf">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Ohio (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-stone-400 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Cleveland, Cincinnati & Columbus</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>3 Open Clubs</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Updated October 2026</span>
            </div>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-padel-green">3</div>
              <div className="text-sm text-stone-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">9</div>
              <div className="text-sm text-stone-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">2</div>
              <div className="text-sm text-stone-600">Metro Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">$10-40</div>
              <div className="text-sm text-stone-600">Per Person, Per Hour</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Ohio Enters the Padel Game
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Ohio has 3 open padel clubs with 9 courts between them, two in Greater Cleveland and one in Greater Cincinnati. <Link href="/courts/newgen-racquet-club" className="text-padel-green hover:underline">NewGen Racquet Club</Link> is adding 5 padel courts in Lewis Center, north of Columbus, and <Link href="/courts/club-padel-newtown" className="text-padel-green hover:underline">Club Padel Newtown</Link> in Cincinnati is listed as temporarily closed.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Some private clubs listed in earlier versions of this guide have platform tennis courts rather than padel, so we removed them.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            The standout is <Link href="/courts/padel-square" className="text-padel-green hover:underline">Padel Square</Link> in Garfield Heights, Ohio&apos;s first indoor padel club, with 6 courts in a 30,000 sq ft facility. Cleveland Premier in Avon Lake has one indoor court at $10 per person per hour, the lowest listed rate in the state, and <Link href="/courts/cincinnati-open-sporting-club" className="text-padel-green hover:underline">Cincinnati Open Sporting Club</Link> opened 2 outdoor courts in Mason in 2026. See all courts on our <Link href="/ohio" className="text-padel-green hover:underline">Ohio page</Link>.
          </p>
        </div>

        <div className="bg-padel-green/5 border-2 border-padel-green/20 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/padel-square" className="text-padel-green hover:underline">Padel Square</Link> (6 courts, largest in OH)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/cleveland-premier-pickleball-padel" className="text-padel-green hover:underline">Cleveland Premier</Link> ($10 per person per hour)</p>
            <p><strong>Best Cincinnati:</strong> <Link href="/courts/cincinnati-open-sporting-club" className="text-padel-green hover:underline">Cincinnati Open Sporting Club</Link> (2 outdoor courts in Mason)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-padel-green bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="grain bg-court text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-turf transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-stone-500'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-stone-400">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-stone-700">
                    <MapPin className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <Users className="w-5 h-5 text-padel-green flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.website && (
                    <div className="flex items-center gap-2 text-stone-700">
                      <Globe className="w-5 h-5 text-padel-green flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-padel-green">{club.website}</a>
                    </div>
                  )}
                </div>

                <p className="text-stone-700 text-lg leading-relaxed mb-6">{club.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-stone-900 mb-3 text-lg">What Makes It Special:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {club.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-stone-700">
                        <span className="text-padel-green font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-stone-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">{program}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 mb-3 text-lg">Best For:</h4>
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
          <h3 className="text-2xl font-bold text-amber-900 mb-4">On the Way</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">Coming Soon</div>
              <div>
                <h4 className="font-bold text-stone-900 text-lg">
                  <Link href="/courts/newgen-racquet-club" className="text-amber-700 hover:underline">NewGen Racquet Club</Link> - Lewis Center, OH
                </h4>
                <p className="text-stone-700 mt-1">An established tennis, pickleball and badminton club north of Columbus that is adding 5 padel courts. When they open, the Columbus area will have its first padel club in our directory.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">Temporarily Closed</div>
              <div>
                <h4 className="font-bold text-stone-900 text-lg">
                  <Link href="/courts/club-padel-newtown" className="text-amber-700 hover:underline">Club Padel Newtown</Link> - Cincinnati, OH
                </h4>
                <p className="text-stone-700 mt-1">A planned outdoor club with 4 courts at 3804 Church St in Newtown. It is listed as temporarily closed, so call (513) 600-2074 before you go.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grain bg-court text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Ohio?</h2>
          <p className="text-xl text-stone-400 mb-6">Find all Ohio padel courts across the Buckeye State</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ohio" className="inline-block bg-white text-padel-green-dark px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors">
              View Ohio Courts
            </Link>
            <Link href="/search?state=OH" className="inline-block bg-padel-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-colors">
              Search All OH Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">More Midwest Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-chicago" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Best Clubs in Chicago</h4>
              <p className="text-sm text-stone-600">Windy City indoor padel</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-stone-600">America&apos;s padel capital</p>
            </Link>
            <Link href="/blog/best-padel-clubs-philadelphia" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Best Clubs in Philadelphia</h4>
              <p className="text-sm text-stone-600">Pennsylvania&apos;s growing padel scene</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Best Beginner Rackets (2026)</h4>
              <p className="text-sm text-stone-600">Top 5 picks from $90–$130 →</p>
            </Link>
            <Link href="/rules" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Padel Rules Explained</h4>
              <p className="text-sm text-stone-600">Complete guide to scoring &amp; gameplay</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
