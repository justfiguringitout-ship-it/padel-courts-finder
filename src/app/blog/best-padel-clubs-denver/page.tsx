import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Denver (2026) | Rocky Mountain Padel Guide',
  description: 'Denver\'s padel scene in 2026: Cloud 9 Park Padel with free daytime play. Complete guide to Colorado padel with pricing and tips.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-denver',
  },
  openGraph: {
    title: 'Best Padel Clubs in Denver (2026) | Rocky Mountain Padel Guide',
    description: 'Denver\'s padel scene in 2026: Cloud 9 Park Padel with free daytime play. Complete guide to Colorado padel with pricing and tips.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-denver',
    type: 'article',
    images: [{ url: 'https://img1.wsimg.com/isteam/ip/fe6e1161-9fa4-47d6-af5c-3c840e0e73fd/green%20aspen%20padel%20club.png' }],
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
    name: 'Cloud 9 Park Padel',
    slug: 'cloud-9-park-padel',
    score: 85,
    location: 'Cloud 9 Park, Denver, CO',
    courts: '1 outdoor court',
    price: '$-$$',
    description: 'Denver\'s first dedicated outdoor padel court in Cloud 9 Park, offering free daytime public play, equipment rentals, professional coaching, and floodlit evening sessions in a community-focused setting. As the pioneer of padel in Colorado, Cloud 9 Park Padel is laying the groundwork for the sport\'s growth in the Mile High City.',
    highlights: [
      'Denver\'s first dedicated padel court',
      'Free public play 10am-4pm weekdays',
      'Floodlit for evening sessions',
      'Gear vending & equipment rental',
      'Professional coaching available',
      'Community events & clinics'
    ],
    programs: [
      'Free daytime play (10am-4pm weekdays)',
      'Peak hours ($80/hr, 7-10am & 4-9pm)',
      'Professional coaching sessions',
      'Community clinics',
      'Equipment rental',
      'Open play events'
    ],
    bestFor: [
      'Beginners trying padel for free',
      'Budget-conscious players',
      'Denver outdoor sports enthusiasts',
      'Community-minded players'
    ]
  }
];

export default function DenverBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Denver (2026) | Rocky Mountain Padel Guide",
    "description": "Denver's padel scene in 2026: Cloud 9 Park Padel with free daytime play. Complete guide to Colorado padel.",
    "image": "https://img1.wsimg.com/isteam/ip/fe6e1161-9fa4-47d6-af5c-3c840e0e73fd/green%20aspen%20padel%20club.png",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-denver"
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
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Denver (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Denver, CO</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>1 Club Open</span>
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
              <div className="text-3xl font-bold text-blue-600">1</div>
              <div className="text-sm text-gray-600">Club Open</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">1</div>
              <div className="text-sm text-gray-600">Outdoor Court</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">Free</div>
              <div className="text-sm text-gray-600">Daytime Play</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">5,280 ft</div>
              <div className="text-sm text-gray-600">Elevation</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Denver: Padel Arrives in the Mile High City
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Denver&apos;s padel scene is in its earliest chapter, but the foundation is being laid. <Link href="/courts/cloud-9-park-padel" className="text-blue-600 hover:underline">Cloud 9 Park Padel</Link> is the city&apos;s first dedicated padel court, offering free daytime public play and floodlit evening sessions in a community-focused park setting. For a city with 300 days of sunshine, an outdoor-obsessed population, and a growing tech workforce, the conditions for padel to thrive are ideal.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Colorado&apos;s active lifestyle culture, affluent demographics, and large international community all point to significant growth ahead. Playing padel at 5,280 feet elevation adds a unique twist: the ball flies faster and bounces differently in Denver&apos;s thin air, creating distinct playing conditions that experienced players will notice immediately.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Check our <Link href="/colorado/denver" className="text-blue-600 hover:underline">Denver courts page</Link> for the latest updates, or browse the full <Link href="/colorado" className="text-blue-600 hover:underline">Colorado padel directory</Link> as more facilities open across the state.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best (and Only) Club:</strong> <Link href="/courts/cloud-9-park-padel" className="text-blue-600 hover:underline">Cloud 9 Park Padel</Link> (free daytime play, coaching available)</p>
            <p><strong>Best for Beginners:</strong> <Link href="/courts/cloud-9-park-padel" className="text-blue-600 hover:underline">Cloud 9 Park Padel</Link> (free 10am-4pm, community clinics)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/cloud-9-park-padel" className="text-blue-600 hover:underline">Cloud 9 Park Padel</Link> (free daytime, $80/hr peak)</p>
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

        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Denver&apos;s Padel Outlook</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            While Denver currently has just one dedicated padel court, the conditions for rapid growth are firmly in place. Colorado&apos;s 300 days of sunshine, outdoor-first culture, growing population of tech workers and remote professionals, and affluent demographics mirror the same factors that drove padel booms in Austin, Phoenix, and Miami.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Entrepreneurs and investors are taking notice. Expect new indoor and outdoor facilities to begin appearing across the Denver metro area and along the Front Range corridor through Boulder, as the sport builds critical mass in Colorado.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">Why Denver is Primed for Growth</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> 300 days of sunshine for outdoor play</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Active, outdoor-sports population</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Growing tech & remote worker community</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Large international community familiar with padel</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">The Altitude Factor</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">✓</span> Ball flies faster at 5,280 feet</li>
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">✓</span> Different bounce dynamics in thin air</li>
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">✓</span> Unique playing experience for visitors</li>
                <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">✓</span> Mountain views from outdoor courts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Denver?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Find Denver padel courts and stay updated as new facilities open
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/colorado/denver"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Denver Courts
            </Link>
            <Link
              href="/colorado"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              All Colorado Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-phoenix" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Phoenix</h4>
              <p className="text-sm text-gray-600">Desert padel paradise year-round</p>
            </Link>
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">DFW&apos;s growing padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-chicago" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Chicago</h4>
              <p className="text-sm text-gray-600">Windy City indoor padel facilities</p>
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
