import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Clock, Users, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Brooklyn (2026) | Complete Borough Guide',
  description: 'Discover Brooklyn\'s 5 padel clubs in 2026. Padel& Greenpoint, Golden Point Padel, Padel Haus Dumbo & Williamsburg, plus what\'s opening next.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-brooklyn',
  },
  openGraph: {
    title: 'Best Padel Clubs in Brooklyn (2026) | Complete Borough Guide',
    description: 'Discover Brooklyn\'s 5 padel clubs in 2026. Padel& Greenpoint, Golden Point Padel, Padel Haus Dumbo & Williamsburg, plus what\'s opening next.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-brooklyn',
    type: 'article',
  },
};

interface Club {
  name: string;
  slug: string;
  location: string;
  courts: string;
  surface?: string;
  rating?: number;
  reviewCount?: number;
  pricing?: string;
  amenities: string[];
  prose: string;
  lessons?: boolean;
  rentals?: boolean;
}

const clubs: Club[] = [
  {
    name: 'Padel& Greenpoint',
    slug: 'padel-greenpoint',
    location: '73 West St, Brooklyn, NY 11222 (Greenpoint)',
    courts: '6 indoor courts',
    surface: 'artificial turf',
    rating: 4.8,
    reviewCount: 25,
    pricing: 'Peak: $75/hour; Off-peak: $65/hour; Memberships from $75/month; Off-peak membership with 50% off bookings',
    amenities: ['Cold plunges', 'Recovery areas', 'Pro shop', 'Locker rooms'],
    prose: 'Padel& Greenpoint holds the borough’s top Google rating at 4.8 across 25 reviews, and it also fields the biggest court count of any open Brooklyn club with 6 indoor courts under a 36-foot ceiling. The facility pairs its artificial-turf courts with a pro shop, locker rooms, and recovery areas including cold plunges. It’s open to all players, with memberships offering booking discounts and early access on top of straightforward hourly rates.',
    lessons: true,
    rentals: true,
  },
  {
    name: 'Golden Point Padel',
    slug: 'golden-point-padel',
    location: '2781 Shell Rd, Brooklyn, NY 11223',
    courts: '4 indoor courts',
    surface: 'artificial turf',
    rating: 4.7,
    reviewCount: 6,
    pricing: '$25–$60 per hour per court (approx.); memberships available',
    amenities: ['Professional padel courts', 'Online booking', 'Changing rooms'],
    prose: 'Golden Point Padel is southern Brooklyn’s entry: an elegantly designed private membership club near Coney Island with 4 indoor artificial-turf courts, lessons, and clinics. Its 4.7 Google rating comes from a small early base of 6 reviews, and the community-oriented atmosphere welcomes players of all levels. Note that unlike its northern neighbors, this one operates on a membership model, with online booking and changing rooms on site.',
    lessons: true,
    rentals: true,
  },
  {
    name: 'Padel Haus - Dumbo',
    slug: 'padel-haus-dumbo',
    location: '257 Water St, Brooklyn, NY 11201 (Dumbo)',
    courts: '4 indoor courts',
    surface: 'synthetic turf',
    rating: 4.5,
    reviewCount: 128,
    pricing: 'Memberships from $190/month; court bookings ~$40-80/hour (peak/off-peak varies)',
    amenities: ['Spa-like locker rooms (Malin + Goetz)', 'Pro shop', 'Fitness equipment', 'Event spaces', 'Parking'],
    prose: 'The most-reviewed club in Brooklyn by a wide margin, Padel Haus Dumbo carries a 4.5 rating over 128 Google reviews from its spot on the Brooklyn waterfront. Its 4 synthetic-turf indoor courts come wrapped in a luxurious setting: spa-like locker rooms stocked with Malin + Goetz, fitness equipment, social lounges, and event spaces. Lessons, open plays, tournaments, and memberships cover every level.',
    lessons: true,
    rentals: true,
  },
  {
    name: 'Padel Haus - Williamsburg',
    slug: 'padel-haus-williamsburg',
    location: 'Grand St, Brooklyn, NY 11249 (Williamsburg)',
    courts: '5 indoor courts',
    surface: 'sand-filled artificial turf',
    rating: 4.2,
    reviewCount: 82,
    pricing: 'Court rentals ~$40-70/hr off-peak to $250+/hr peak; memberships from $155/month single-club',
    amenities: ['Indoor courts', 'Williamsburg vibe', 'Bar', 'Events', 'Leagues'],
    prose: 'Padel Haus’s Williamsburg outpost brings the chain to Brooklyn’s trendiest neighborhood with 5 indoor courts on sand-filled artificial turf. The social side is the draw here: a vibrant bar scene, regular events, and leagues keep the calendar full beyond open court time. It holds a 4.2 Google rating across 82 reviews, the second-largest review base in the borough.',
    lessons: true,
    rentals: true,
  },
];

const comingSoon: Club = {
  name: 'Padel Haus Greenpoint',
  slug: 'padel-haus-greenpoint',
  location: '12 Berry Street, Brooklyn, NY 11249',
  courts: '5 indoor courts',
  surface: 'sand-filled synthetic turf',
  pricing: '$30–$70 per court/hour; memberships available',
  amenities: ['Pro shop', 'Locker rooms with showers', 'Lounge/co-working space'],
  prose: 'Padel Haus is doubling down on North Brooklyn with a premium indoor club along the waterfront near McCarren Park. The plan calls for 5 state-of-the-art courts on sand-filled synthetic turf, spa-like locker rooms with showers, a lounge/co-working space, and the Juice Haus bar — a community-focused space to play, compete, and connect in Greenpoint.',
  lessons: true,
  rentals: true,
};

export default function BrooklynBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Brooklyn (2026)",
    "description": "Discover Brooklyn's 5 padel clubs in 2026. Padel& Greenpoint, Golden Point Padel, Padel Haus Dumbo & Williamsburg, plus what's opening next.",
    "datePublished": "2026-07-05T00:00:00Z",
    "dateModified": "2026-07-05T00:00:00Z",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-brooklyn"
    }
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [...clubs, comingSoon].map((club, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SportsActivityLocation",
        "name": club.name,
        "url": `https://www.padelcourtsfinder.com/courts/${club.slug}`
      }
    }))
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many padel clubs are in Brooklyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brooklyn has 5 padel clubs in our directory: 4 currently open (Padel& Greenpoint, Golden Point Padel, Padel Haus Dumbo, and Padel Haus Williamsburg) with 19 indoor courts between them, plus Padel Haus Greenpoint opening soon with 5 more courts. Every Brooklyn club plays indoors."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a membership to play padel in Brooklyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mostly no. Padel& Greenpoint and both Padel Haus locations offer pay-per-play hourly court bookings, with optional memberships that add discounts and perks. The exception is Golden Point Padel, which operates as a private membership club. Check each listing for current details."
        }
      },
      {
        "@type": "Question",
        "name": "Where can beginners learn padel in Brooklyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All four open Brooklyn clubs offer lessons: Padel& Greenpoint, Golden Point Padel, Padel Haus Dumbo, and Padel Haus Williamsburg. All four also rent equipment, so you can try the sport before buying a racket."
        }
      }
    ]
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
              &larr; Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Brooklyn (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Brooklyn, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5 Clubs Covered</span>
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
              <div className="text-sm text-stone-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">19</div>
              <div className="text-sm text-stone-600">Courts Open Now</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">100%</div>
              <div className="text-sm text-stone-600">Indoor Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">+5</div>
              <div className="text-sm text-stone-600">Courts Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Brooklyn Is New York&apos;s Padel Borough
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Brooklyn&apos;s padel scene runs entirely indoors &mdash; and that&apos;s by design in a city where winter would otherwise kill half the season. Four clubs are open today with 19 courts between them, concentrated along the North Brooklyn waterfront in Greenpoint, Williamsburg, and Dumbo, with <Link href="/courts/golden-point-padel" className="text-padel-green hover:underline">Golden Point Padel</Link> flying the flag down near Coney Island. A fifth club, Padel Haus Greenpoint, is opening soon and will push the borough past 24 courts.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            The Padel Haus chain anchors the market with two open locations and a third on the way, while independent <Link href="/courts/padel-greenpoint" className="text-padel-green hover:underline">Padel&amp; Greenpoint</Link> currently holds the borough&apos;s highest Google rating. Here&apos;s every club, ordered by rating.
          </p>
        </div>

        <div className="space-y-12">
          {clubs.map((club) => (
            <div key={club.slug} className="border-t-4 border-padel-green bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="grain bg-court text-white p-6">
                <h2 className="text-3xl font-bold mb-2">
                  <Link href={`/courts/${club.slug}`} className="hover:text-turf transition-colors">
                    {club.name}
                  </Link>
                </h2>
                {club.rating && (
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-bold">{club.rating}</span>
                    <span className="text-blue-100">({club.reviewCount} Google reviews)</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-stone-700">
                    <MapPin className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <Users className="w-5 h-5 text-padel-green flex-shrink-0" />
                    <span>{club.courts}{club.surface ? ` · ${club.surface}` : ''}</span>
                  </div>
                  {club.lessons && (
                    <div className="flex items-center gap-2 text-stone-700">
                      <GraduationCap className="w-5 h-5 text-padel-green flex-shrink-0" />
                      <span>Lessons &amp; racket rental available</span>
                    </div>
                  )}
                </div>

                <p className="text-stone-700 text-lg leading-relaxed mb-6">
                  {club.prose}
                </p>

                <div className="mb-6">
                  <h3 className="font-bold text-stone-900 mb-3 text-lg">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {club.amenities.map((amenity, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {club.pricing && (
                  <div className="bg-slate-50 border rounded-lg p-4">
                    <h3 className="font-bold text-stone-900 mb-1">Pricing (as listed):</h3>
                    <p className="text-stone-700">{club.pricing}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Opening Soon in Brooklyn</h2>
          <div className="border-t-4 border-amber-400 bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="grain bg-court text-white p-6">
              <div className="inline-block px-3 py-1 bg-amber-400 text-stone-900 rounded-full text-sm font-bold mb-2">Coming Soon</div>
              <h3 className="text-3xl font-bold">
                <Link href={`/courts/${comingSoon.slug}`} className="hover:text-turf transition-colors">
                  {comingSoon.name}
                </Link>
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2 text-stone-700">
                  <MapPin className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                  <span>{comingSoon.location}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Users className="w-5 h-5 text-padel-green flex-shrink-0" />
                  <span>{comingSoon.courts} &middot; {comingSoon.surface}</span>
                </div>
              </div>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">{comingSoon.prose}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {comingSoon.amenities.map((amenity, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="bg-slate-50 border rounded-lg p-4">
                <h4 className="font-bold text-stone-900 mb-1">Announced pricing:</h4>
                <p className="text-stone-700">{comingSoon.pricing}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Booking + What to Expect</h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Book directly through each club&apos;s website or booking app &mdash; walk-ins are a gamble at popular hours. Weekday evenings and weekend mornings fill up first, so reserve a few days ahead if that&apos;s your window; off-peak daytime slots are both easier to grab and cheaper at clubs with peak/off-peak pricing. All four open Brooklyn clubs rent rackets and balls, so you don&apos;t need gear for your first session.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            Pricing structures vary from club to club, so confirm current rates before you book. You can compare every Brooklyn club side by side in our <Link href="/search" className="text-padel-green hover:underline">court search</Link>, or browse the full <Link href="/new-york" className="text-padel-green hover:underline">New York padel directory</Link> for courts across the rest of the city and state.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">How many padel clubs are in Brooklyn?</h3>
              <p className="text-stone-700 leading-relaxed">
                Brooklyn has 5 padel clubs in our directory: 4 currently open &mdash; Padel&amp; Greenpoint, Golden Point Padel, Padel Haus Dumbo, and Padel Haus Williamsburg &mdash; with 19 indoor courts between them, plus Padel Haus Greenpoint opening soon with 5 more. Every Brooklyn club plays indoors.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Do I need a membership to play padel in Brooklyn?</h3>
              <p className="text-stone-700 leading-relaxed">
                Mostly no. Padel&amp; Greenpoint and both Padel Haus locations offer pay-per-play hourly bookings, with optional memberships adding discounts and perks. The exception is Golden Point Padel, which operates as a private membership club. Check each club&apos;s listing for current details.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Where can beginners learn padel in Brooklyn?</h3>
              <p className="text-stone-700 leading-relaxed">
                All four open clubs offer lessons: Padel&amp; Greenpoint, Golden Point Padel, Padel Haus Dumbo, and Padel Haus Williamsburg. Each also rents equipment, so you can try the sport before committing to gear &mdash; and when you&apos;re ready to buy, see our guide to the <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">best beginner padel rackets</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="grain bg-court text-white rounded-xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/search" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">Search All Courts</h3>
              <p className="text-sm text-blue-100">Filter every US padel club by city, surface &amp; amenities</p>
            </Link>
            <Link href="/new-york" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">New York Padel Directory</h3>
              <p className="text-sm text-blue-100">Every padel court in New York State</p>
            </Link>
            <Link href="/blog/padel-patterns-beginners" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">Padel Patterns for Beginners</h3>
              <p className="text-sm text-blue-100">The core shot patterns to learn first</p>
            </Link>
            <Link href="/blog/how-to-choose-padel-club" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">How to Choose a Padel Club</h3>
              <p className="text-sm text-blue-100">What actually matters when picking your home club</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
