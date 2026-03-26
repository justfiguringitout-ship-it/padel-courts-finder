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
  // Equipment Buying Guides
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
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Editorial Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-3">
            The Padel Blog
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl">
            Club reviews, gear guides, and expert insights on America&apos;s fastest-growing sport.
          </p>
        </div>
      </header>

      <BlogContent posts={postsWithImages} />
    </div>
  );
}
