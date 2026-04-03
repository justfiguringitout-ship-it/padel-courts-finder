import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Dallas (2026) | Complete DFW Guide',
  description: 'Dallas padel clubs ranked for 2026. Banner House at T Bar M\'s private club with 4 courts, plus Styslinger/Altec Tennis Complex. DFW padel guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-dallas',
  },
  openGraph: {
    title: 'Best Padel Clubs in Dallas (2026) | Complete DFW Guide',
    description: 'Dallas padel clubs ranked for 2026. Banner House at T Bar M\'s private club with 4 courts, plus Styslinger/Altec Tennis Complex. DFW padel guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-dallas',
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
    name: 'Banner House at T Bar M',
    slug: 'banner-house-at-t-bar-m',
    score: 91,
    location: 'North Dallas, TX',
    courts: '4 courts (indoor & outdoor)',
    price: '$$$$',
    description: 'Dallas\'s premier padel destination is Banner House at T Bar M, a reimagined private club in North Dallas built on the former T Bar M site. The club features 4 padel courts across indoor and outdoor settings, alongside tennis, pickleball, a resort-style pool with cabanas, a fitness center, chiropractic services, and multiple dining options. This is a full lifestyle membership club where padel is a centerpiece of a much larger experience.',
    highlights: [
      '4 padel courts (indoor & outdoor)',
      'Resort pool & cabanas',
      'Full fitness center',
      'Chiropractic & wellness services',
      'Multiple dining venues',
      'Professional coaching team'
    ],
    programs: [
      'Membership-based access',
      'Professional padel coaching',
      'Tennis & pickleball programs',
      'Fitness & wellness programs',
      'Social events & dining',
      'Youth development'
    ],
    bestFor: [
      'Private club members',
      'Families seeking full-service club',
      'North Dallas residents',
      'Multi-sport athletes'
    ]
  },
  {
    rank: 2,
    name: 'Styslinger / Altec Tennis Complex',
    slug: 'styslinger-altec-tennis-complex',
    score: 80,
    location: 'Southern Methodist University, Dallas, TX',
    courts: '12 tennis courts (6 indoor, 6 outdoor)',
    price: 'N/A',
    description: 'The Styslinger/Altec Tennis Complex at Southern Methodist University is primarily a world-class tennis facility, hosting professional events like the Dallas Open. While its focus is tennis rather than dedicated padel, the state-of-the-art infrastructure, stadium seating, fitness rooms, and grand viewing terrace make it a notable venue in the DFW racquet sports landscape. Check directly with SMU Athletics for any padel programming or court availability.',
    highlights: [
      'State-of-the-art SMU facility',
      '6 indoor + 6 outdoor tennis courts',
      'Hosts Dallas Open (professional events)',
      'Club suite & grand viewing terrace',
      'Fitness & training rooms',
      'Stadium seating for spectators'
    ],
    programs: [
      'SMU Athletics programs',
      'Professional event hosting',
      'Fitness & training facilities',
      'Locker room access',
      'Spectator viewing areas'
    ],
    bestFor: [
      'SMU students & faculty',
      'Tennis players exploring padel',
      'Professional event spectators',
      'University Park residents'
    ]
  }
];

export default function DallasBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Dallas (2026) | Complete DFW Guide",
    "description": "Dallas padel clubs ranked for 2026. Banner House at T Bar M's private club with 4 courts, plus Styslinger/Altec Tennis Complex.",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-dallas"
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
            Best Padel Clubs in Dallas (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Dallas-Fort Worth, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>2 Facilities Reviewed</span>
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
              <div className="text-3xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">Facilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-sm text-gray-600">Padel Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">7.5M</div>
              <div className="text-sm text-gray-600">Metro Population</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">Growing</div>
              <div className="text-sm text-gray-600">Rapid Expansion</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Dallas-Fort Worth: Padel Arrives in the Metroplex
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Dallas-Fort Worth metroplex, home to 7.5 million residents and one of the fastest-growing metros in the country, is in the early stages of its padel journey. While the scene is still developing compared to cities like Miami, Houston, or Austin, the foundations are being laid by <Link href="/courts/banner-house-at-t-bar-m" className="text-blue-600 hover:underline">Banner House at T Bar M</Link>, which has made padel a cornerstone of its reimagined private club in North Dallas.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            DFW has all the ingredients for explosive padel growth: a massive population, strong sports culture, business-friendly environment, wealthy suburbs like Plano, Frisco, and Southlake ready for premium facilities, and a large Latin American community already familiar with the sport. Expect significant expansion throughout 2026 and 2027.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Browse current options on our <Link href="/texas/dallas" className="text-blue-600 hover:underline">Dallas courts page</Link> or explore the full <Link href="/texas" className="text-blue-600 hover:underline">Texas padel directory</Link> to see what else the Lone Star State offers.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/banner-house-at-t-bar-m" className="text-blue-600 hover:underline">Banner House at T Bar M</Link> (4 courts, full private club)</p>
            <p><strong>Best for Tennis Crossover:</strong> <Link href="/courts/styslinger-altec-tennis-complex" className="text-blue-600 hover:underline">Styslinger/Altec Tennis Complex</Link> (SMU, professional events)</p>
            <p><strong>Best for Families:</strong> Banner House at T Bar M (pool, dining, youth programs)</p>
            <p><strong>Nearest Major Padel Hub:</strong> <Link href="/blog/best-padel-clubs-austin" className="text-blue-600 hover:underline">Austin</Link> &amp; <Link href="/blog/best-padel-clubs-houston" className="text-blue-600 hover:underline">Houston</Link> (3-4 hours)</p>
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

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-12 mb-12">
          <h3 className="text-xl font-bold mb-3">Note on Styslinger/Altec Tennis Complex</h3>
          <p className="text-gray-700">
            The Styslinger/Altec Tennis Complex at SMU is primarily a tennis facility and hosts professional events like the Dallas Open. While it is included in our directory for its racquet sports infrastructure, players looking for dedicated padel courts and programming should contact SMU Athletics directly to confirm current padel availability. For a guaranteed padel experience in DFW, Banner House at T Bar M is the recommended choice.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Dallas?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Dallas-Fort Worth padel courts and stay updated as new facilities open
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/texas/dallas"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Dallas Courts
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
              <p className="text-sm text-gray-600">Multiple clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-houston" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Houston</h4>
              <p className="text-sm text-gray-600">Houston metro&apos;s growing padel scene</p>
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
