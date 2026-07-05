import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Tucson (2026) | Padel Courts Finder',
  description:
    'All 4 padel clubs in Tucson, AZ for 2026: Padel Alley, Padel AZ, The Pad Tucson & Tucson Racquet & Fitness Club. Courts, pricing & booking guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-tucson',
  },
  openGraph: {
    title: 'Best Padel Clubs in Tucson (2026) | Padel Courts Finder',
    description:
      'All 4 padel clubs in Tucson, AZ for 2026: Padel Alley, Padel AZ, The Pad Tucson & Tucson Racquet & Fitness Club. Courts, pricing & booking guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-tucson',
    type: 'article',
  },
};

interface Club {
  name: string;
  slug: string;
  location: string;
  courts: string;
  surface?: string;
  rating?: string;
  pricing?: string;
  membersOnly: boolean;
  amenities: string[];
  paragraphs: string[];
}

const clubs: Club[] = [
  {
    name: 'Padel Alley',
    slug: 'padel-alley',
    location: '5943 E Speedway Blvd, Tucson, AZ 85712',
    courts: '8 outdoor courts',
    surface: 'Sand-filled artificial turf',
    rating: '5.0 Google rating (35 reviews)',
    pricing: '$20–$40 per hour (varies by time/membership); balls $3-7',
    membersOnly: false,
    amenities: [
      'Pro shop',
      'Showers',
      'Changing rooms',
      'Free/private parking',
      'WiFi',
      'Wheelchair access',
      'Pickleball courts',
      'Food trucks',
    ],
    paragraphs: [
      'Padel Alley is Tucson&apos;s biggest padel venue: 8 glass-walled outdoor courts on Speedway Blvd with sand-filled turf and lighting for night play — essential in the desert, where evening sessions are the move for most of the year. The club offers lessons, rentals, a pro shop, terrace bar, and caf&eacute;.',
      'Reviewers describe a fun experience, friendly staff, and a great atmosphere that works well for groups. It carries a perfect 5.0 Google rating across 35 reviews, the most of any 5.0-rated club in town, and doors open at 6am on weekdays with play until 11pm.',
    ],
  },
  {
    name: 'Padel AZ',
    slug: 'padel-az',
    location: '555 E 18th St, Tucson, AZ 85701',
    courts: '2 indoor courts',
    rating: '5.0 Google rating (14 reviews)',
    pricing:
      '8AM-4PM: $50/1hr, $75/1.5hr, $100/2hr; 4PM-11:30PM: $60/1hr, $90/1.5hr, $120/2hr. Open play $15/player. Youth class $23.',
    membersOnly: false,
    amenities: [
      '30,000 sq ft facility',
      'Turf field',
      'Playtomic booking',
      'WhatsApp community group',
      'Upcoming caf&eacute;/bar',
    ],
    paragraphs: [
      'Padel AZ is Tucson&apos;s community-focused indoor club, operating two courts inside the Maracana Indoor Sports Arena — Arizona&apos;s first indoor padel destination, housed in a 30,000 sq ft facility downtown. Court rentals, open play, lessons, leagues, and free intro clinics are all on the menu.',
      'Booking runs through the Playtomic app, there&apos;s an active WhatsApp community group, and a caf&eacute;/bar is on the way. Open play at $15 per player and free intro clinics make it one of the cheapest ways to try the sport in Tucson. Open 8am to 11:30pm every day.',
    ],
  },
  {
    name: 'The Pad Tucson',
    slug: 'the-pad-tucson',
    location: '300 S Toole Ave, Tucson, AZ 85701',
    courts: '7 indoor courts',
    surface: 'Artificial turf',
    rating: '4.7 Google rating (28 reviews)',
    pricing:
      'Padel memberships: Adult Unlimited $169/mo, Hybrid $50/mo + $10/visit; drop-in ~$20-40/hr (est.); +$35 initiation. Pickleball members get padel drop-in $10/person',
    membersOnly: false,
    amenities: [
      'Indoor courts with 30ft ceilings',
      'Pro shop',
      'Fitness area',
      'Conference space',
      'Table tennis courts',
      'Pickleball courts',
    ],
    paragraphs: [
      'The Pad Tucson is downtown&apos;s indoor racquet-sports hub, with 7 world-class padel courts under 30-foot ceilings alongside pickleball and table tennis. Lessons, open play, leagues, a pro shop, caf&eacute;, bar, and fitness area round out the facility.',
      'It&apos;s the club with the most indoor padel courts in the city, and reviewers call out the great facility, friendly staff, and nice courts that work well for groups. Membership tiers range from a $50/month hybrid plan to $169/month unlimited, with drop-in play also available.',
    ],
  },
  {
    name: 'Tucson Racquet &amp; Fitness Club',
    slug: 'tucson-racquet-fitness-club',
    location: '4001 N Country Club Rd, Tucson, AZ 85716',
    courts: '2 outdoor courts',
    rating: '4.4 Google rating (22 reviews)',
    pricing: 'Memberships: Fitness $79-89/mo, Full $109+/mo (courts free for members); initiation $99',
    membersOnly: true,
    amenities: [
      '2 heated pools',
      'Full gym & fitness classes',
      '25 tennis courts',
      '22 pickleball courts',
      'Basketball',
      'Pro shop',
      'Restaurant/bar',
    ],
    paragraphs: [
      'Tucson Racquet &amp; Fitness Club is a longstanding community racquet and fitness center that added 2 new lighted padel courts to a campus that already includes 25 tennis courts, 22 pickleball courts, two heated pools, a full gym, and a public restaurant.',
      'The club is open 24/7 and is member-based, with padel court time free for members once you&apos;re in. Reviewers praise the friendly community, courts and programs, and family-friendly feel, with improvements noted under new ownership. It&apos;s the pick for players who want padel bundled into a full fitness membership.',
    ],
  },
];

export default function TucsonBestClubsPage() {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Padel Clubs in Tucson (2026)',
    description:
      'All 4 padel clubs in Tucson, AZ for 2026: Padel Alley, Padel AZ, The Pad Tucson & Tucson Racquet & Fitness Club. Courts, pricing & booking guide.',
    datePublished: '2026-07-05T00:00:00Z',
    dateModified: '2026-07-05T00:00:00Z',
    author: {
      '@type': 'Organization',
      name: 'Padel Courts Finder',
      url: 'https://www.padelcourtsfinder.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Padel Courts Finder',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.padelcourtsfinder.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-tucson',
    },
  };

  const itemListData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Padel Clubs in Tucson (2026)',
    itemListElement: [
      { name: 'Padel Alley', slug: 'padel-alley' },
      { name: 'Padel AZ', slug: 'padel-az' },
      { name: 'The Pad Tucson', slug: 'the-pad-tucson' },
      { name: 'Tucson Racquet & Fitness Club', slug: 'tucson-racquet-fitness-club' },
    ].map((club, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SportsActivityLocation',
        name: club.name,
        url: `https://www.padelcourtsfinder.com/courts/${club.slug}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tucson',
          addressRegion: 'AZ',
          addressCountry: 'US',
        },
      },
    })),
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many padel clubs are there in Tucson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tucson has 4 padel clubs with 19 courts between them: Padel Alley (8 outdoor courts), The Pad Tucson (7 indoor courts), Padel AZ (2 indoor courts), and Tucson Racquet & Fitness Club (2 outdoor courts).',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a membership to play padel in Tucson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mostly no. Padel Alley ($20-$40/hour), Padel AZ (open play $15/player), and The Pad Tucson (drop-in available alongside memberships) all welcome non-members. Tucson Racquet & Fitness Club is members-only, with padel courts free for members.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which Tucson padel club is best for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All four Tucson clubs offer lessons and equipment rental. Padel AZ runs free intro clinics with open play at $15 per player, and Padel Alley and The Pad Tucson both offer lessons and rentals without a membership requirement.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <section className="grain bg-court text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-stone-400 hover:text-turf">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Tucson (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Tucson, AZ</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4 Clubs, 19 Courts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>July 5, 2026</span>
            </div>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-padel-green">4</div>
              <div className="text-sm text-stone-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">19</div>
              <div className="text-sm text-stone-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">9</div>
              <div className="text-sm text-stone-600">Indoor Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">10</div>
              <div className="text-sm text-stone-600">Outdoor Courts</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Tucson&apos;s Padel Scene in 2026
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Tucson has quietly become one of Arizona&apos;s best padel cities. Four clubs field 19
            courts, split almost evenly between indoor and outdoor.{' '}
            <Link href="/courts/padel-alley" className="text-padel-green hover:underline">
              Padel Alley
            </Link>{' '}
            leads the outdoor game with 8 glass-walled, lighted courts on Speedway, while{' '}
            <Link href="/courts/the-pad-tucson" className="text-padel-green hover:underline">
              The Pad Tucson
            </Link>{' '}
            stacks 7 indoor courts downtown — no small thing when summer highs make covered play
            the default.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Rounding out the scene,{' '}
            <Link href="/courts/padel-az" className="text-padel-green hover:underline">
              Padel AZ
            </Link>{' '}
            runs two indoor courts at the Maracana Indoor Sports Arena — Arizona&apos;s first
            indoor padel destination — and{' '}
            <Link
              href="/courts/tucson-racquet-fitness-club"
              className="text-padel-green hover:underline"
            >
              Tucson Racquet &amp; Fitness Club
            </Link>{' '}
            folds two new lighted outdoor courts into a full 24/7 fitness campus. Two clubs hold
            perfect 5.0 Google ratings, and every club in town offers lessons.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            Here&apos;s every club, ordered by Google rating, with the facts you need to pick one
            and book a court.
          </p>
        </div>

        <div className="space-y-12">
          {clubs.map((club) => (
            <div
              key={club.slug}
              className="border-t-4 border-padel-green bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <div className="grain bg-court text-white p-6">
                <h2 className="text-3xl font-bold mb-2">
                  <Link href={`/courts/${club.slug}`} className="hover:text-turf transition-colors">
                    <span dangerouslySetInnerHTML={{ __html: club.name }} />
                  </Link>
                </h2>
                <div className="flex flex-wrap gap-4 text-blue-100">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{club.location}</span>
                  </div>
                  {club.rating && (
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{club.rating}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-stone-700">
                    <Users className="w-5 h-5 text-padel-green flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.surface && (
                    <div className="flex items-start gap-2 text-stone-700">
                      <span className="text-padel-green font-bold">✓</span>
                      <span>{club.surface}</span>
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-stone-700 md:col-span-2">
                    <span className="text-padel-green font-bold">✓</span>
                    <span>
                      {club.membersOnly
                        ? 'Members only'
                        : 'Open to the public — no membership required'}
                    </span>
                  </div>
                </div>

                {club.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-stone-700 text-lg leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}

                {club.pricing && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <span className="font-bold text-stone-900">Pricing: </span>
                    <span className="text-stone-700">{club.pricing}</span>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-stone-900 mb-3 text-lg">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {club.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                        dangerouslySetInnerHTML={{ __html: amenity }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Booking + What to Expect</h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Tucson clubs book through their own websites or apps — Padel AZ uses Playtomic — and
            court rates are typically per court per hour, split among four players. Check each
            club&apos;s listing for current rates, since pricing shifts by time of day and
            membership status. In summer, aim for early mornings, evenings under the lights at
            Padel Alley, or the indoor courts at The Pad and Padel AZ.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            If you&apos;re new, start with a lesson or clinic — every club here offers coaching and
            equipment rental, so there&apos;s no need to buy gear before your first session. Padel
            AZ&apos;s free intro clinics are the lowest-friction entry point in the city.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            To compare these clubs side by side, use our{' '}
            <Link href="/search" className="text-padel-green hover:underline">
              court search
            </Link>{' '}
            or browse the full{' '}
            <Link href="/arizona" className="text-padel-green hover:underline">
              Arizona padel directory
            </Link>
            .
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                How many padel clubs are there in Tucson?
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Tucson has 4 padel clubs with 19 courts between them: Padel Alley (8 outdoor
                courts), The Pad Tucson (7 indoor courts), Padel AZ (2 indoor courts), and Tucson
                Racquet &amp; Fitness Club (2 outdoor courts).
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Do I need a membership to play padel in Tucson?
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Mostly no. Padel Alley ($20-$40/hour), Padel AZ (open play $15/player), and The Pad
                Tucson (drop-in available alongside memberships) all welcome non-members. Tucson
                Racquet &amp; Fitness Club is members-only, with padel courts free for members.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Which Tucson padel club is best for beginners?
              </h3>
              <p className="text-stone-700 leading-relaxed">
                All four Tucson clubs offer lessons and equipment rental. Padel AZ runs free intro
                clinics with open play at $15 per player, and Padel Alley and The Pad Tucson both
                offer lessons and rentals without a membership requirement. When you&apos;re ready
                for your own gear, see our guide to the{' '}
                <Link
                  href="/blog/best-padel-rackets-beginners"
                  className="text-padel-green hover:underline"
                >
                  best beginner padel rackets
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="grain bg-court text-white rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-bold mb-6">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/search"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-bold mb-1">Search All Courts</h3>
              <p className="text-sm text-blue-100">Find padel courts anywhere in the US</p>
            </Link>
            <Link
              href="/arizona"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-bold mb-1">Arizona Padel Directory</h3>
              <p className="text-sm text-blue-100">Every club and court in the Grand Canyon State</p>
            </Link>
            <Link
              href="/blog/padel-patterns-beginners"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-bold mb-1">Padel Patterns for Beginners</h3>
              <p className="text-sm text-blue-100">The shot patterns that win points</p>
            </Link>
            <Link
              href="/blog/how-to-choose-padel-club"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-bold mb-1">How to Choose a Padel Club</h3>
              <p className="text-sm text-blue-100">What to look for before you commit</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
