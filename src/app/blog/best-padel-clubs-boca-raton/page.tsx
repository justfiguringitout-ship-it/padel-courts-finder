import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Boca Raton (2026) | Padel Courts Finder',
  description:
    'All 4 padel clubs in Boca Raton, FL for 2026: Padel X, Legio GP Padel World, The Club at Boca Pointe & Boca Grove. Courts, pricing & booking guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-boca-raton',
  },
  openGraph: {
    title: 'Best Padel Clubs in Boca Raton (2026) | Padel Courts Finder',
    description:
      'All 4 padel clubs in Boca Raton, FL for 2026: Padel X, Legio GP Padel World, The Club at Boca Pointe & Boca Grove. Courts, pricing & booking guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-boca-raton',
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
    name: 'Padel X Boca Raton',
    slug: 'padel-x-boca-raton',
    location: '1081 Holland Dr Suite #3, Boca Raton, FL 33487',
    courts: '8 indoor courts',
    surface: 'Artificial turf (10mm textured, silica sand-filled)',
    rating: '5.0 Google rating (30 reviews)',
    pricing: 'Court bookings with memberships; inaugural discounts noted (details vary)',
    membersOnly: false,
    amenities: ['Pro shop', 'Cold plunges', 'Recovery area', 'Sauna', 'Showers', 'Bar/lounge'],
    paragraphs: [
      'Padel X is a 28,000 sq ft indoor facility with 8 climate-controlled courts, the Padel X Academy, a pro shop, players lounge, and a wellness and recovery area with cold plunges and a sauna. It&apos;s the only fully indoor padel club in Boca Raton, which matters in South Florida summers.',
      'The club emphasizes community, training, and social events for all levels, and reviewers consistently describe an upscale, clean facility with friendly staff and coaches. Lessons and equipment rental are available, and no membership is required to play. Open 7am to 10pm daily.',
    ],
  },
  {
    name: 'Legio GP Padel World',
    slug: 'legio-gp-padel-world',
    location: '9045 Vista Del Lago, Boca Raton, FL 33428',
    courts: '3 outdoor courts',
    surface: 'Artificial turf / synthetic',
    rating: '5.0 Google rating (18 reviews)',
    pricing: '$99/hour, $129/1.5 hours; memberships from $99/year ($19/match premium)',
    membersOnly: false,
    amenities: ['Pro shop', 'Free parking', 'Wi-Fi', 'Wheelchair accessible', 'Tournaments/events'],
    paragraphs: [
      'Legio GP Padel World is a premium club on Boca&apos;s west side with 3 high-quality outdoor courts featuring synthetic turf, LED lighting, and adjustable covers. The setup includes a VIP lounge bar with food and drink, and the club welcomes all players without a membership requirement.',
      'Reviewers highlight the friendly staff and owners and the quality of the courts and facilities. Lessons and equipment rental are both offered, tournaments and events run regularly, and the club is open 7am to 10pm every day of the week.',
    ],
  },
  {
    name: 'The Club at Boca Pointe',
    slug: 'the-club-at-boca-pointe',
    location: 'Boca Raton, FL',
    courts: '4 outdoor courts',
    rating: '4.6 Google rating (310 reviews)',
    pricing: '$25 for Shot of the Week Clinic; $15 guest fee for some sessions',
    membersOnly: false,
    amenities: [
      'Lessons',
      'Equipment rental',
      'Fitness center',
      'Locker rooms',
      'Pool',
      'Golf',
      'Tennis',
      'Pickleball',
      'Dining',
      'Parking',
    ],
    paragraphs: [
      'The Club at Boca Pointe is a premier private country club that recently expanded its racquet offerings with four state-of-the-art LED-lighted padel courts. The campus includes a stand-alone 28,000 square foot modernized Sports Center and an 80,000 square foot clubhouse.',
      'With 310 Google reviews, it&apos;s by far the most-reviewed venue on this list, and padel sits alongside tennis, pickleball, golf, a fitness center, pool, and dining. Lessons and equipment rental are available, and offerings like the $25 Shot of the Week Clinic and $15 guest fees for some sessions give non-members a way in.',
    ],
  },
];

const memberClub: Club = {
  name: 'Boca Grove',
  slug: 'boca-grove',
  location: 'Boca Raton, FL',
  courts: '2 outdoor courts',
  membersOnly: true,
  amenities: [
    'Lessons',
    'Equipment rental',
    'Pro shop',
    'Tournaments',
    'Clinics',
    'Gym',
    'Pilates',
    'Pool',
    'Golf course',
    'Pickleball',
    'Dining',
  ],
  paragraphs: [
    'Boca Grove is a prestigious, members-only golf and country club community with a boutique-style residential setting and a nationally recognized racquet sports program serving roughly 450 member families. Notably, it was the first facility in South Florida to introduce padel courts.',
    'The club runs 2 outdoor padel courts with lessons, clinics, tournaments, equipment rental, and a pro shop, backed by a full country club amenity set including golf, pickleball, a gym, pool, and dining. Access is limited to members, so this one is for residents and their guests rather than drop-in players.',
  ],
};

const allClubs = [...clubs, memberClub];

export default function BocaRatonBestClubsPage() {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Padel Clubs in Boca Raton (2026)',
    description:
      'All 4 padel clubs in Boca Raton, FL for 2026: Padel X, Legio GP Padel World, The Club at Boca Pointe & Boca Grove. Courts, pricing & booking guide.',
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
      '@id': 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-boca-raton',
    },
  };

  const itemListData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Padel Clubs in Boca Raton (2026)',
    itemListElement: allClubs.map((club, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SportsActivityLocation',
        name: club.name,
        url: `https://www.padelcourtsfinder.com/courts/${club.slug}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Boca Raton',
          addressRegion: 'FL',
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
        name: 'How many padel clubs are there in Boca Raton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boca Raton has 4 padel clubs with 17 courts between them: Padel X Boca Raton (8 indoor courts), The Club at Boca Pointe (4 outdoor courts), Legio GP Padel World (3 outdoor courts), and Boca Grove (2 outdoor courts).',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a membership to play padel in Boca Raton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not everywhere. Padel X and Legio GP Padel World welcome players without a membership, and The Club at Boca Pointe offers clinics and $15 guest fees for some sessions. Boca Grove is members-only. Legio lists courts at $99/hour with memberships from $99/year.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which Boca Raton padel club is best for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All four Boca Raton clubs offer lessons and equipment rental, so beginners have options everywhere. Padel X runs a dedicated academy, and Legio GP Padel World offers coaching on covered outdoor courts — both without a membership requirement.',
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
            Best Padel Clubs in Boca Raton (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Boca Raton, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4 Clubs, 17 Courts</span>
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
              <div className="text-3xl font-bold text-padel-green">17</div>
              <div className="text-sm text-stone-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">8</div>
              <div className="text-sm text-stone-600">Indoor Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">9</div>
              <div className="text-sm text-stone-600">Outdoor Courts</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Boca Raton&apos;s Padel Scene in 2026
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Boca Raton punches above its weight in padel. Four clubs field 17 courts across the
            city, split between one big indoor operation and three outdoor venues.{' '}
            <Link href="/courts/padel-x-boca-raton" className="text-padel-green hover:underline">
              Padel X Boca Raton
            </Link>{' '}
            anchors the scene with 8 climate-controlled indoor courts, while{' '}
            <Link href="/courts/legio-gp-padel-world" className="text-padel-green hover:underline">
              Legio GP Padel World
            </Link>{' '}
            offers 3 covered outdoor courts on the west side — both carry perfect 5.0 Google
            ratings.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            The country club world is here too.{' '}
            <Link
              href="/courts/the-club-at-boca-pointe"
              className="text-padel-green hover:underline"
            >
              The Club at Boca Pointe
            </Link>{' '}
            added four LED-lighted courts to its modernized Sports Center, and{' '}
            <Link href="/courts/boca-grove" className="text-padel-green hover:underline">
              Boca Grove
            </Link>{' '}
            — the first facility in South Florida to introduce padel — runs two courts for its
            member families. Every club in town offers lessons, so the on-ramp for new players is
            wide open.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            Here&apos;s every club, ordered by Google rating, with the facts you need to pick one
            and book a court.
          </p>
        </div>

        <div className="space-y-12">
          {allClubs.map((club) => (
            <div
              key={club.slug}
              className="border-t-4 border-padel-green bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <div className="grain bg-court text-white p-6">
                <h2 className="text-3xl font-bold mb-2">
                  <Link href={`/courts/${club.slug}`} className="hover:text-turf transition-colors">
                    {club.name}
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
                      >
                        {amenity}
                      </span>
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
            Most Boca Raton clubs take bookings through their own websites or by phone, and court
            rates are typically charged per court per hour and split among four players — check
            each club&apos;s listing for current rates, since pricing changes and promotions come
            and go. Padel X and Legio both run 7am to 10pm daily, so early-morning and evening
            slots are realistic even in peak season.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            If you&apos;re new, book a lesson or clinic before open play — every club here offers
            coaching and equipment rental, so you don&apos;t need to buy a racket first. At the
            country clubs, ask about guest policies: Boca Pointe lists $15 guest fees for some
            sessions, while Boca Grove requires membership.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            To compare these clubs side by side, use our{' '}
            <Link href="/search" className="text-padel-green hover:underline">
              court search
            </Link>{' '}
            or browse the full{' '}
            <Link href="/florida" className="text-padel-green hover:underline">
              Florida padel directory
            </Link>
            .
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                How many padel clubs are there in Boca Raton?
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Boca Raton has 4 padel clubs with 17 courts between them: Padel X Boca Raton (8
                indoor courts), The Club at Boca Pointe (4 outdoor courts), Legio GP Padel World (3
                outdoor courts), and Boca Grove (2 outdoor courts).
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Do I need a membership to play padel in Boca Raton?
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Not everywhere. Padel X and Legio GP Padel World welcome players without a
                membership, and The Club at Boca Pointe offers clinics and $15 guest fees for some
                sessions. Boca Grove is members-only. Legio lists courts at $99/hour with
                memberships from $99/year.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Which Boca Raton padel club is best for beginners?
              </h3>
              <p className="text-stone-700 leading-relaxed">
                All four Boca Raton clubs offer lessons and equipment rental, so beginners have
                options everywhere. Padel X runs a dedicated academy, and Legio GP Padel World
                offers coaching on covered outdoor courts — both without a membership requirement.
                Once you&apos;re hooked, see our guide to the{' '}
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
              href="/florida"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-bold mb-1">Florida Padel Directory</h3>
              <p className="text-sm text-blue-100">Every club and court in the Sunshine State</p>
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
