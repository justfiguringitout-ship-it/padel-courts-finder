import { Metadata } from 'next';
import { getAdaptedCourtBySlug } from '@/lib/court-adapter';
import BlogContent, { BlogPostWithImage } from './BlogContent';

export const metadata: Metadata = {
  title: 'Padel Blog | Expert Guides, Club Reviews & Tips',
  description: 'Explore our comprehensive padel blog with club reviews, how-to guides, equipment tips, and the latest padel news from across America.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageAlt: string;
  courtSlug: string;
  featured?: boolean;
  priceRange?: string;
}

const blogPosts: BlogPost[] = [
  // Best Clubs Listicles
  {
    slug: 'best-padel-clubs-miami',
    title: 'Best Padel Clubs in Miami (2026)',
    category: 'best-clubs',
    excerpt: 'Miami leads America\'s padel revolution with 29+ clubs and 170+ courts. Ultra Padel Club\'s 29-court flagship, Urban Padel\'s indoor paradise, and the full South Florida scene.',
    date: '2026-03-21',
    readTime: '10 min read',
    imageAlt: 'Miami padel courts with ocean views',
    courtSlug: 'ultra-padel-club',
    featured: true
  },
  {
    slug: 'best-padel-clubs-nyc',
    title: 'Best Padel Clubs in New York City (2026)',
    category: 'best-clubs',
    excerpt: 'From Dumbo waterfront to Harlem courtyards, NYC\'s 7 padel clubs offer 25 courts. Padel Haus, Padel& Greenpoint, Reserve Hudson Yards, and more.',
    date: '2026-03-21',
    readTime: '8 min read',
    imageAlt: 'NYC padel facilities',
    courtSlug: 'padel-haus-dumbo',
    featured: true
  },
  {
    slug: 'best-padel-clubs-houston',
    title: 'Best Padel Clubs in Houston (2026)',
    category: 'best-clubs',
    excerpt: 'Houston\'s padel scene explodes with 9 clubs and 30+ courts. TEMPO\'s indoor luxury, Punto Azul\'s 8-court academy, and Texas\'s largest padel city.',
    date: '2026-03-21',
    readTime: '9 min read',
    imageAlt: 'Houston padel courts',
    courtSlug: 'tempo-padel-pickleball-club',
    featured: true
  },
  {
    slug: 'best-padel-clubs-austin',
    title: 'Best Padel Clubs in Austin (2026)',
    category: 'best-clubs',
    excerpt: 'Austin\'s padel scene features 4 open clubs plus 3 coming soon. Padel 39\'s outdoor paradise, Padel Club Austin\'s 9 courts, and Hill Country vibes.',
    date: '2026-03-21',
    readTime: '8 min read',
    imageAlt: 'Austin padel facilities',
    courtSlug: 'padel-39'
  },
  {
    slug: 'best-padel-clubs-los-angeles',
    title: 'Best Padel Clubs in Los Angeles (2026)',
    category: 'best-clubs',
    excerpt: 'LA\'s 5 padel clubs span from Sunset Blvd to Century City rooftops. Los Angeles Padel Club\'s 7 courts, Padel Up\'s indoor gems, and year-round outdoor play.',
    date: '2026-03-21',
    readTime: '8 min read',
    imageAlt: 'LA padel club with city views',
    courtSlug: 'los-angeles-padel-club'
  },
  {
    slug: 'best-padel-clubs-san-francisco',
    title: 'Best Padel Clubs in San Francisco (2026)',
    category: 'best-clubs',
    excerpt: 'Bay Area padel led by Bay Padel and Park Padel. Treasure Island\'s historic hangar courts, Embarcadero waterfront play, and 11 courts across 3 locations.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'San Francisco Bay Padel courts',
    courtSlug: 'bay-padel-treasure-island'
  },
  {
    slug: 'best-padel-clubs-san-diego',
    title: 'Best Padel Clubs in San Diego (2026)',
    category: 'best-clubs',
    excerpt: 'San Diego\'s 4 padel clubs offer 22 courts with year-round sunshine. Padel N9NE\'s 8-court campus, Kingdom\'s crystal courts, and Taktika\'s coaching programs.',
    date: '2026-03-21',
    readTime: '8 min read',
    imageAlt: 'San Diego padel courts',
    courtSlug: 'padel-n9ne'
  },
  {
    slug: 'best-padel-clubs-phoenix',
    title: 'Best Padel Clubs in Phoenix (2026)',
    category: 'best-clubs',
    excerpt: 'Desert padel with 3 open clubs and 2 coming soon. Conquer Padel\'s indoor oasis, Padel Pals\' 7-court mega facility, and PURE\'s 1,200-seat arena on the way.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'Phoenix padel in the desert',
    courtSlug: 'conquer-padel-club'
  },
  {
    slug: 'best-padel-clubs-chicago',
    title: 'Best Padel Clubs in Chicago (2026)',
    category: 'best-clubs',
    excerpt: 'Windy City padel goes 100% indoor with 3 clubs and 15 courts. Cube Padel\'s bar & lounge, Union Padel\'s West Loop wellness, and Proximo\'s 40-ft ceilings.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'Chicago indoor padel courts',
    courtSlug: 'cube-padel-chicago'
  },
  {
    slug: 'best-padel-clubs-fort-lauderdale',
    title: 'Best Padel Clubs in Fort Lauderdale (2026)',
    category: 'best-clubs',
    excerpt: 'Broward County\'s padel scene features 6 clubs with 27+ courts. 10by20\'s dual locations, Replay Club\'s luxury wellness experience, and Society Las Olas downtown.',
    date: '2026-03-21',
    readTime: '8 min read',
    imageAlt: 'Fort Lauderdale padel courts',
    courtSlug: '10by20-padel-fort-lauderdale'
  },
  {
    slug: 'best-padel-clubs-new-jersey',
    title: 'Best Padel Clubs in New Jersey (2026)',
    category: 'best-clubs',
    excerpt: 'New Jersey\'s 8 padel clubs pack 32 courts across 9 cities. Centercourt Morristown, Padel United, Rax NJ, and the Garden State\'s booming scene.',
    date: '2026-03-21',
    readTime: '8 min read',
    imageAlt: 'New Jersey padel facilities',
    courtSlug: 'centercourt-morristown'
  },
  {
    slug: 'best-padel-clubs-philadelphia',
    title: 'Best Padel Clubs in Philadelphia & Pennsylvania (2026)',
    category: 'best-clubs',
    excerpt: 'Pennsylvania\'s 5 open padel clubs span from Philly to Pittsburgh. Ballers, PADELphia, VIVA Padel, plus OH! Padel opening soon in Malvern.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'Philadelphia padel facilities',
    courtSlug: 'padelphia'
  },
  {
    slug: 'best-padel-clubs-ohio',
    title: 'Best Padel Clubs in Ohio (2026)',
    category: 'best-clubs',
    excerpt: 'Ohio\'s 5 padel clubs span Cleveland, Cincinnati, and Columbus. Padel Square\'s 6 courts lead the Buckeye State, plus Club Padel opening in Newtown.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'Ohio padel facilities',
    courtSlug: 'padel-square'
  },
  {
    slug: 'best-padel-clubs-orlando',
    title: 'Best Padel Clubs in Orlando (2026)',
    category: 'best-clubs',
    excerpt: 'Orlando\'s 5 padel clubs offer 15 courts from USTA National Campus to resort-based play. Plus BullDog Padel Club coming to Lake Nona.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'Orlando padel facilities',
    courtSlug: 'orlando-padel-club-indoor'
  },
  {
    slug: 'best-padel-clubs-san-antonio',
    title: 'Best Padel Clubs in San Antonio (2026)',
    category: 'best-clubs',
    excerpt: 'San Antonio\'s 4 padel clubs feature 16 courts. The King of Padel\'s entertainment complex, Slice Padel Co\'s rooftop bar, and year-round Texas play.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'San Antonio padel courts',
    courtSlug: 'the-king-of-padel-san-antonio'
  },
  {
    slug: 'best-padel-clubs-atlanta',
    title: 'Best Padel Clubs in Atlanta (2026)',
    category: 'best-clubs',
    excerpt: 'Atlanta\'s 3 padel clubs bring 11 courts to Georgia. Padel Haus Atlanta\'s stunning Westside Paper venue, ITP Training Academy, and year-round play.',
    date: '2026-03-21',
    readTime: '7 min read',
    imageAlt: 'Atlanta padel facilities',
    courtSlug: 'padel-haus-atlanta'
  },
  {
    slug: 'best-padel-clubs-dallas',
    title: 'Best Padel Clubs in Dallas (2026)',
    category: 'best-clubs',
    excerpt: 'Dallas-Fort Worth padel with 2 facilities. Banner House at T Bar M\'s private club courts and SMU\'s Styslinger complex. DFW\'s scene is early but growing.',
    date: '2026-03-21',
    readTime: '6 min read',
    imageAlt: 'Dallas padel courts',
    courtSlug: 'dallas-padel-club'
  },
  {
    slug: 'best-padel-clubs-denver',
    title: 'Best Padel Clubs in Denver (2026)',
    category: 'best-clubs',
    excerpt: 'Mile High padel arrives with Cloud 9 Park Padel offering free daytime play. Denver\'s outdoor scene at 5,280 ft elevation is just getting started.',
    date: '2026-03-21',
    readTime: '6 min read',
    imageAlt: 'Denver padel facilities',
    courtSlug: 'cloud-9-park-padel'
  },
  {
    slug: 'best-padel-clubs-charlotte',
    title: 'Best Padel Clubs in Charlotte (2026)',
    category: 'best-clubs',
    excerpt: 'Queen City padel with 2 clubs and 7 courts. Charlotte Padel Club\'s indoor facility and Epic Padel\'s 5 outdoor courts at Prosperity Athletic Club.',
    date: '2026-03-21',
    readTime: '6 min read',
    imageAlt: 'Charlotte padel facilities',
    courtSlug: 'charlotte-padel-club-south-charlotte'
  },
  // How-To Guides
  {
    slug: 'padel-vs-pickleball',
    title: 'Padel vs Pickleball: What\'s the Difference? (2026 Guide)',
    category: 'how-to',
    excerpt: 'Courts, rules, equipment, cost, fitness — a side-by-side breakdown of America\'s two fastest-growing racquet sports so you can pick the right one.',
    date: '2026-03-25',
    readTime: '11 min read',
    imageAlt: 'Padel vs pickleball comparison',
    courtSlug: '',
    featured: true
  },
  {
    slug: 'best-padel-clubs-brooklyn',
    title: 'Best Padel Clubs in Brooklyn (2026)',
    category: 'best-clubs',
    excerpt: 'Five clubs now serve Brooklyn — courts, pricing, and ratings for every one, straight from our directory.',
    date: '2026-07-05',
    readTime: '6 min read',
    imageAlt: 'Best padel clubs in Brooklyn',
    courtSlug: ''
  },
  {
    slug: 'best-padel-clubs-west-palm-beach',
    title: 'Best Padel Clubs in West Palm Beach (2026)',
    category: 'best-clubs',
    excerpt: 'West Palm Beach padel, club by club — courts, amenities, pricing, and ratings from our verified listings.',
    date: '2026-07-05',
    readTime: '6 min read',
    imageAlt: 'Best padel clubs in West Palm Beach',
    courtSlug: ''
  },
  {
    slug: 'best-padel-clubs-boca-raton',
    title: 'Best Padel Clubs in Boca Raton (2026)',
    category: 'best-clubs',
    excerpt: 'Every padel club in Boca Raton compared — courts, surfaces, pricing, and player ratings.',
    date: '2026-07-05',
    readTime: '6 min read',
    imageAlt: 'Best padel clubs in Boca Raton',
    courtSlug: ''
  },
  {
    slug: 'best-padel-clubs-tucson',
    title: 'Best Padel Clubs in Tucson (2026)',
    category: 'best-clubs',
    excerpt: 'Tucson’s padel scene mapped — every club with courts, pricing, and ratings from our directory.',
    date: '2026-07-05',
    readTime: '6 min read',
    imageAlt: 'Best padel clubs in Tucson',
    courtSlug: ''
  },
  {
    slug: 'new-padel-clubs-july-2026',
    title: 'New & Upcoming US Padel Clubs — July 2026',
    category: 'how-to',
    excerpt: 'The monthly roundup: what’s new on the directory, club news, and the 17 announced clubs on the way.',
    date: '2026-07-05',
    readTime: '5 min read',
    imageAlt: 'New US padel clubs July 2026',
    courtSlug: ''
  },
  // Equipment Buying Guides
  {
    slug: 'padel-racket-shapes-explained',
    title: 'Padel Racket Shapes Explained: Round vs Teardrop vs Diamond',
    category: 'equipment',
    excerpt: 'The one spec that matters more than price or brand — what each shape does to your sweet spot, balance, and power, and how to pick yours in 30 seconds.',
    date: '2026-07-03',
    readTime: '7 min read',
    imageAlt: 'Padel racket shapes compared: round, teardrop, and diamond',
    courtSlug: ''
  },
  {
    slug: 'best-padel-rackets-power',
    title: 'Best Power Padel Rackets (2026) — Top 5 for Attacking Players',
    category: 'equipment',
    excerpt: 'The 5 hardest-hitting rackets from our testing, ranked by power score. Diamond and hard-teardrop frames for players who finish points overhead.',
    date: '2026-07-03',
    readTime: '9 min read',
    imageAlt: 'Best power padel rackets 2026',
    courtSlug: '',
    priceRange: '$230–$320'
  },
  {
    slug: 'best-padel-rackets-control',
    title: 'Best Control Padel Rackets (2026) — Top 5 for Precision & Comfort',
    category: 'equipment',
    excerpt: 'The 5 most precise, arm-friendly rackets from our testing, ranked by control and comfort scores — from an $89 starter to a $272 flagship.',
    date: '2026-07-03',
    readTime: '9 min read',
    imageAlt: 'Best control padel rackets 2026',
    courtSlug: '',
    priceRange: '$89–$272'
  },
  {
    slug: 'best-padel-shoes',
    title: 'Best Padel Shoes (2026): What to Look For + Our Picks',
    category: 'equipment',
    excerpt: 'Running shoes are the #1 gear mistake in padel. What actually matters in a padel shoe — outsole, lateral support, durability — plus our verified picks.',
    date: '2026-07-04',
    readTime: '6 min read',
    imageAlt: 'Best padel shoes 2026',
    courtSlug: '',
    priceRange: '$89–$129'
  },
  {
    slug: 'best-padel-balls',
    title: 'Best Padel Balls (2026): How to Choose + Our Picks',
    category: 'equipment',
    excerpt: 'Padel balls are not tennis balls. Pressure explained, when to replace them, and the two balls that matter at US clubs.',
    date: '2026-07-04',
    readTime: '5 min read',
    imageAlt: 'Best padel balls 2026',
    courtSlug: '',
    priceRange: '$13–$15'
  },
  {
    slug: 'best-padel-bags',
    title: 'Best Padel Bags (2026): Backpack or Tour Bag?',
    category: 'equipment',
    excerpt: 'The one decision that matters in padel bags — commuter backpack vs club tour bag — with our verified picks for each.',
    date: '2026-07-04',
    readTime: '5 min read',
    imageAlt: 'Best padel bags 2026',
    courtSlug: '',
    priceRange: '$59–$99'
  },
  {
    slug: 'padel-accessories',
    title: 'The Best Padel Accessories Under $30 (2026)',
    category: 'equipment',
    excerpt: 'Overgrips, fresh balls, protector strips — the cheap stuff that actually changes how you play, and what to skip.',
    date: '2026-07-04',
    readTime: '5 min read',
    imageAlt: 'Best padel accessories under $30',
    courtSlug: '',
    priceRange: '$13–$27'
  },
  {
    slug: 'nox-at10-genius-18k-review',
    title: 'NOX AT10 Genius 18K Review (2026)',
    category: 'equipment',
    excerpt: 'Our best-overall racket reviewed in full: Tapia’s 18K flagship scored 7.3/10 with no real weakness.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'NOX AT10 Genius 18K padel racket review',
    courtSlug: '',
    priceRange: '$272'
  },
  {
    slug: 'head-extreme-pro-review',
    title: 'HEAD Extreme Pro Review (2026)',
    category: 'equipment',
    excerpt: 'The only 10/10 power score we’ve given — and the trade-offs that come with it.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'HEAD Extreme Pro padel racket review',
    courtSlug: '',
    priceRange: '$320'
  },
  {
    slug: 'wilson-bela-v3-review',
    title: 'Wilson Bela V3 Review (2026)',
    category: 'equipment',
    excerpt: 'Bela’s 24K carbon flagship reviewed: 9/10 power, premium price, honest verdict.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'Wilson Bela V3 padel racket review',
    courtSlug: '',
    priceRange: '$399'
  },
  {
    slug: 'babolat-technical-viper-review',
    title: 'Babolat Technical Viper Review (2026)',
    category: 'equipment',
    excerpt: 'Lebrón’s weapon at the friendliest flagship price — who it fits and who it punishes.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'Babolat Technical Viper padel racket review',
    courtSlug: '',
    priceRange: '$249'
  },
  {
    slug: 'nox-ml10-pro-cup-review',
    title: 'NOX ML10 Pro Cup Review (2026)',
    category: 'equipment',
    excerpt: 'The best-value upgrade racket we’ve rated: 9/10 control, rough spin surface, honest limits.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'NOX ML10 Pro Cup padel racket review',
    courtSlug: '',
    priceRange: '$170'
  },
  {
    slug: 'adidas-metalbone-hrd-review',
    title: 'Adidas Metalbone HRD+ 3.3 Review (2026)',
    category: 'equipment',
    excerpt: 'The hardest hitter below pro flagships — adjustable weights, 9/10 power, demanding feel.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'Adidas Metalbone HRD+ 3.3 padel racket review',
    courtSlug: '',
    priceRange: '$280'
  },
  {
    slug: 'babolat-contact-review',
    title: 'Babolat Contact Review (2026)',
    category: 'equipment',
    excerpt: 'The $90 beginner favorite reviewed: huge sweet spot, 9/10 comfort, and where its ceiling sits.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'Babolat Contact padel racket review',
    courtSlug: '',
    priceRange: '$90'
  },
  {
    slug: 'wilson-blade-elite-v2-review',
    title: 'Wilson Blade Elite V2 Review (2026)',
    category: 'equipment',
    excerpt: 'The 7/7/7 all-rounder of our intermediate picks — nothing flashy, nothing punished.',
    date: '2026-07-05',
    readTime: '4 min read',
    imageAlt: 'Wilson Blade Elite V2 padel racket review',
    courtSlug: '',
    priceRange: '$189'
  },
  {
    slug: 'padel-bandeja-explained',
    title: 'The Bandeja, Explained: Padel’s Most Important Shot',
    category: 'how-to',
    excerpt: 'The sliced overhead that keeps you at the net — what it is, how to hit it step by step, and how it differs from the víbora and smash.',
    date: '2026-07-04',
    readTime: '6 min read',
    imageAlt: 'The bandeja padel shot explained',
    courtSlug: ''
  },
  {
    slug: 'padel-positioning-guide',
    title: 'Padel Positioning 101: Where to Stand and Why',
    category: 'how-to',
    excerpt: 'Padel is a fight for three meters of court. The two positions, moving as a pair, left vs right side, and when to advance or retreat.',
    date: '2026-07-04',
    readTime: '7 min read',
    imageAlt: 'Padel court positioning guide',
    courtSlug: ''
  },
  {
    slug: 'padel-patterns-beginners',
    title: '7 Padel Patterns Every Beginner Should Know',
    category: 'how-to',
    excerpt: 'Chess has openings; padel has patterns. Serve + net rush, the lob, the chiquita, and four more — with the sequence, why it works, and the counter.',
    date: '2026-07-04',
    readTime: '7 min read',
    imageAlt: 'Standard padel patterns and tactics for beginners',
    courtSlug: ''
  },
  {
    slug: 'how-to-choose-padel-club',
    title: 'How to Choose a Padel Club: 9 Things to Check Before You Join',
    category: 'how-to',
    excerpt: 'The most expensive gear mistake in padel is the wrong club. Courts, pricing models, programming, and the vibe check — what to verify before committing.',
    date: '2026-07-04',
    readTime: '6 min read',
    imageAlt: 'How to choose a padel club',
    courtSlug: ''
  },
  {
    slug: 'padel-court-cost',
    title: 'How Much Does It Cost to Build a Padel Court? (2026)',
    category: 'how-to',
    excerpt: 'The real numbers behind building padel courts in the US — court kits, site prep, indoor vs outdoor, and the revenue math club owners run.',
    date: '2026-07-04',
    readTime: '8 min read',
    imageAlt: 'Padel court construction cost breakdown',
    courtSlug: ''
  },
  {
    slug: 'padel-gifts-mothers-day-2026',
    title: 'Best Padel Gifts for Mom (2026) — 12 Ideas She\'ll Actually Use',
    category: 'equipment',
    excerpt: 'From beginner rackets to premium bags, 12 curated padel gifts at every budget — $14 to $399. Gift guide for the padel-loving mom.',
    date: '2026-03-25',
    readTime: '8 min read',
    imageAlt: 'Padel gifts for Mother\'s Day 2026',
    courtSlug: '',
    priceRange: '$14\u2013$399'
  },
  {
    slug: 'padel-gifts-fathers-day-2026',
    title: 'Best Padel Gifts for Dad (2026) — 12 Ideas He\'ll Actually Use',
    category: 'equipment',
    excerpt: 'From beginner rackets to premium bags, 12 curated padel gifts at every budget — $14 to $399. Gift guide for the padel-loving dad.',
    date: '2026-03-26',
    readTime: '8 min read',
    imageAlt: 'Padel gifts for Father\'s Day 2026',
    courtSlug: '',
    priceRange: '$14\u2013$399'
  },
  {
    slug: 'best-padel-rackets-beginners',
    title: 'Best Padel Rackets for Beginners (2026)',
    category: 'equipment',
    excerpt: 'The 5 best beginner padel rackets from $90\u2013$130. Round shapes, forgiving sweet spots, and lightweight frames to help you learn faster.',
    date: '2026-03-24',
    readTime: '9 min read',
    imageAlt: 'Best beginner padel rackets 2026',
    courtSlug: '',
    priceRange: '$90\u2013$130'
  },
  {
    slug: 'best-padel-rackets-intermediate',
    title: 'Best Padel Rackets for Intermediate Players (2026)',
    category: 'equipment',
    excerpt: 'Ready to upgrade? The 5 best intermediate padel rackets from $170\u2013$280. Carbon faces, teardrop shapes, and more power for advancing players.',
    date: '2026-03-24',
    readTime: '9 min read',
    imageAlt: 'Best intermediate padel rackets 2026',
    courtSlug: '',
    priceRange: '$170\u2013$280'
  },
  {
    slug: 'best-padel-rackets-2026',
    title: 'Best Padel Rackets 2026 \u2014 Top 5 Pro Picks',
    category: 'equipment',
    excerpt: 'The 5 best pro-level padel rackets from $250\u2013$400. Flagship editions with 18K carbon, Kevlar cores, and tour-proven performance.',
    date: '2026-03-24',
    readTime: '10 min read',
    imageAlt: 'Best pro padel rackets 2026',
    courtSlug: '',
    priceRange: '$250\u2013$400'
  }
];

function getPostImage(courtSlug: string): string | null {
  if (!courtSlug) return null;
  const court = getAdaptedCourtBySlug(courtSlug);
  return court?.heroImage || null;
}

export default function BlogPage() {
  const postsWithImages: BlogPostWithImage[] = blogPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
    imageAlt: post.imageAlt,
    imageUrl: getPostImage(post.courtSlug),
    featured: post.featured,
    priceRange: post.priceRange,
  }));

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Editorial Header */}
      <header className="grain bg-court">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="font-mono text-sm text-turf mb-4">the padel blog</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Read the game.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Gear guides that pay for themselves, club reviews city by city, and
            everything else about America&apos;s fastest-growing sport.
          </p>
        </div>
      </header>

      <BlogContent posts={postsWithImages} />
    </div>
  );
}
