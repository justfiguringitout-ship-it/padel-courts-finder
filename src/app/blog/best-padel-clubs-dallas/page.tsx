import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Dallas (2026) | Complete DFW Guide',
  description: 'The six padel clubs open in Dallas-Fort Worth in 2026, with court counts, prices and who can book: Kraken, Padel39 North Dallas, North Texas Racquet Club, Banner House and more.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-dallas',
  },
  openGraph: {
    title: 'Best Padel Clubs in Dallas (2026) | Complete DFW Guide',
    description: 'The six padel clubs open in Dallas-Fort Worth in 2026, with court counts, prices and who can book: Kraken, Padel39 North Dallas, North Texas Racquet Club, Banner House and more.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-dallas',
    type: 'article',
    images: [{ url: 'https://www.padelcourtsfinder.com/og/default.png' }],
  },
};

interface Club {
  rank: number;
  name: string;
  slug: string;
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
    name: 'Kraken Padel Club',
    slug: 'kraken-padel-club',
    location: 'Farmers Branch, TX',
    courts: '4 indoor courts',
    price: 'From $25',
    phone: '(469) 232-7021',
    website: 'www.krakenpadelclub.com',
    email: 'hello@krakenpadelclub.com',
    hours: 'Every day, 7:30am to midnight',
    description: 'Kraken is the easiest place in the metroplex to walk in and play. It has four indoor, climate-controlled courts in Farmers Branch, it is open until midnight every day, and you can book without a membership. Pay-to-play sessions cost $25 off-peak and $40 at peak times, and memberships start at $80 a month with lower per-player rates.',
    highlights: ['4 indoor, climate-controlled courts', 'Open until midnight every day', 'Pay to play with no membership', 'Gym, juice bar and pro shop', 'Video recording on court', 'Racket rental'],
    programs: ['Pay to play', 'Memberships from $80 a month', 'Private lessons', 'Private events'],
    bestFor: ['First-time players', 'Late-night games', 'Playing without a membership']
  },
  {
    rank: 2,
    name: 'North Texas Racquet Club',
    slug: 'north-texas-racquet-club',
    location: 'Frisco, TX',
    courts: '4 outdoor courts, lit',
    price: 'From $20',
    phone: '(469) 430-9399',
    hours: 'Mon-Fri 7am to 10pm, Sat 7am to 8pm, Sun 7am to 6pm',
    description: 'North Texas Racquet Club has four lit outdoor courts in Frisco and is open to both members and the public. Non-members pay $20 for 90 minutes off-peak and $35 at peak times, and members get discounted rates and priority booking. The club runs clinics, leagues and Americano socials, which makes it a good place to meet other players.',
    highlights: ['4 lit outdoor courts', 'Open to the public', 'Pro shop on site', 'Priority booking for members'],
    programs: ['Clinics', 'Americano socials', 'Leagues', 'Private lessons'],
    bestFor: ['Players in Frisco and the northern suburbs', 'Social play', 'Evening games outdoors']
  },
  {
    rank: 3,
    name: 'Padel39 North Dallas',
    slug: 'padel39-north-dallas',
    location: 'Carrollton, TX',
    courts: '3 indoor courts, 7 outdoor under construction',
    price: '$30 to $35',
    phone: '(469) 568-3060',
    email: 'northdallas@padel39.com',
    hours: 'Mon-Fri 6:30am to 11pm, Sat-Sun 7am to 9pm',
    description: 'This is the club that used to be called Dallas Padel Club, now run by Padel39, the operator behind two clubs in Austin. Three indoor, climate-controlled courts are open today, and the club has broken ground on seven more outdoor courts. Non-members pay $30 to $35 per player for a 90-minute booking, and the club is staying open during the renovation.',
    highlights: ['3 indoor, climate-controlled courts', '7 outdoor courts under construction', 'Open to the public', 'Part of the Padel39 group'],
    programs: ['Public court booking', 'Memberships with peak and off-peak discounts'],
    bestFor: ['Early-morning games', 'Players who also visit Austin', 'Carrollton and North Dallas']
  },
  {
    rank: 4,
    name: 'Banner House at T Bar M',
    slug: 'banner-house-at-t-bar-m',
    location: 'North Dallas, TX',
    courts: '5 courts, indoor and outdoor',
    price: 'Members only',
    phone: '(972) 233-4444',
    hours: 'Court hours Mon-Thu 6am to 9:30pm, Fri-Sun 6am to 9pm',
    description: 'Banner House is a private club on the former T Bar M site in North Dallas, and it has the most padel courts of any club in the area, with five indoor and outdoor courts and three padel pros on staff. Courts are reserved for members, and membership is by application.',
    highlights: ['5 padel courts, the most in DFW', 'Indoor and outdoor courts', '3 padel pros', 'Full private club with dining and fitness'],
    programs: ['Membership by application', 'Coaching with club pros'],
    bestFor: ['Families who want a full-service club', 'North Dallas residents', 'Players who want coaching']
  },
  {
    rank: 5,
    name: 'Preston Playhouse',
    slug: 'preston-playhouse',
    location: 'North Dallas, TX',
    courts: '2 indoor courts',
    price: 'Ask the club',
    phone: '(972) 385-3641',
    website: 'www.prestonpickleball.com',
    email: 'info.prestonplayhouse@gmail.com',
    hours: 'Mon-Thu 8am to 10pm, Fri-Sun 8am to 8pm',
    description: 'Preston Playhouse is mainly a pickleball club, with nine indoor pickleball courts, but it also has two indoor padel courts and a lounge and bar. It does not publish padel prices, so call or check the booking page before you go.',
    highlights: ['2 indoor padel courts', '9 indoor pickleball courts', 'Lounge and bar'],
    programs: ['Online court booking'],
    bestFor: ['Groups that play both padel and pickleball', 'Indoor play in summer']
  },
  {
    rank: 6,
    name: 'Brookhaven Country Club',
    slug: 'brookhaven-country-club',
    location: 'Farmers Branch, TX',
    courts: '2 courts',
    price: 'Members only',
    phone: '(972) 243-6151',
    description: 'Brookhaven is a private country club that added two padel courts to its racquet program. Padel here is for club members, so it is an option mainly if you already belong or are considering a country club membership.',
    highlights: ['2 padel courts', 'Large racquet sports program', 'Private country club'],
    programs: ['Club membership'],
    bestFor: ['Existing Brookhaven members', 'Families looking at country clubs']
  }
];

export default function DallasBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Dallas (2026) | Complete DFW Guide",
    "description": "The six padel clubs open in Dallas-Fort Worth in 2026, with court counts, prices and who can book: Kraken, Padel39 North Dallas, North Texas Racquet Club, Banner House and more.",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "datePublished": "2026-03-21T00:00:00Z",
    "dateModified": "2026-09-29T00:00:00Z",
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

      <section className="grain bg-court text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-stone-400 hover:text-turf">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Dallas (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-stone-400 text-lg">
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
              <span>Updated September 2026</span>
            </div>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-padel-green">6</div>
              <div className="text-sm text-stone-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">20</div>
              <div className="text-sm text-stone-600">Padel Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">7.5M</div>
              <div className="text-sm text-stone-600">Metro Population</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">2</div>
              <div className="text-sm text-stone-600">Clubs Announced</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Dallas-Fort Worth: Padel Arrives in the Metroplex
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Dallas-Fort Worth has six padel clubs open today with 20 courts between them, and every one of them is in the northern half of the metroplex, in Farmers Branch, Carrollton, North Dallas and Frisco. We have not found a padel court yet in Fort Worth, Plano, Arlington or Irving.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Four of the six clubs take bookings from the public, and two are private. More courts are on the way. Padel39 is building seven outdoor courts at its Carrollton club, Padel Haus has announced a six-court club in the Design District for late 2026, and Padel Square has announced an indoor club in Farmers Branch.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            Browse current options on our <Link href="/texas/dallas" className="text-padel-green hover:underline">Dallas courts page</Link> or explore the full <Link href="/texas" className="text-padel-green hover:underline">Texas padel directory</Link> to see what else the Lone Star State offers.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Easiest to book:</strong> <Link href="/courts/kraken-padel-club" className="text-padel-green hover:underline">Kraken Padel Club</Link> (4 indoor courts, no membership needed, open until midnight)</p>
            <p><strong>Best for outdoor play:</strong> <Link href="/courts/north-texas-racquet-club" className="text-padel-green hover:underline">North Texas Racquet Club</Link> (4 lit courts in Frisco, from $20)</p>
            <p><strong>Most courts:</strong> <Link href="/courts/banner-house-at-t-bar-m" className="text-padel-green hover:underline">Banner House at T Bar M</Link> (5 courts, members only)</p>
            <p><strong>Coming soon:</strong> <Link href="/courts/padel-haus-dallas" className="text-padel-green hover:underline">Padel Haus Dallas</Link> and <Link href="/courts/padel-square" className="text-padel-green hover:underline">Padel Square</Link></p>
            <p><strong>Nearest Major Padel Hub:</strong> <Link href="/blog/best-padel-clubs-austin" className="text-padel-green hover:underline">Austin</Link> &amp; <Link href="/blog/best-padel-clubs-houston" className="text-padel-green hover:underline">Houston</Link> (3-4 hours)</p>
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
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-stone-400">Court price</div>
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
                  {club.phone && (
                    <div className="flex items-center gap-2 text-stone-700">
                      <Phone className="w-5 h-5 text-padel-green flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-padel-green">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-stone-700">
                      <Globe className="w-5 h-5 text-padel-green flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-padel-green">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-stone-700">
                      <Mail className="w-5 h-5 text-padel-green flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-padel-green">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-stone-700">
                      <Clock className="w-5 h-5 text-padel-green flex-shrink-0" />
                      <span>{club.hours}</span>
                    </div>
                  )}
                </div>

                <p className="text-stone-700 text-lg leading-relaxed mb-6">
                  {club.description}
                </p>

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
                      <span key={index} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 mb-3 text-lg">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.bestFor.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-padel-green-light text-padel-green-dark rounded-full text-sm font-medium">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grain bg-court text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Dallas?</h2>
          <p className="text-xl text-stone-400 mb-6">
            Find all Dallas-Fort Worth padel courts and stay updated as new facilities open
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/texas/dallas"
              className="inline-block bg-white text-padel-green-dark px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors"
            >
              View Dallas Courts
            </Link>
            <Link
              href="/texas"
              className="inline-block bg-padel-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-colors"
            >
              All Texas Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">More Texas Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-stone-600">Multiple clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-houston" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Best Clubs in Houston</h4>
              <p className="text-sm text-stone-600">Houston metro&apos;s growing padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-antonio" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-stone-900 mb-2">Best Clubs in San Antonio</h4>
              <p className="text-sm text-stone-600">Alamo City padel guide</p>
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
