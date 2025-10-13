import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, TrendingUp, Clock, Phone } from "lucide-react";
import { getStates, getSiteStats } from "@/lib/site-structure";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { HeroSearch } from "@/components/hero-search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Padel Courts Near Me | Book Padel Courts Across the USA",
  description: "Discover and book padel courts across the United States. Find courts in your city, compare prices, read reviews, and book online. 45+ verified padel facilities nationwide.",
  keywords: [
    "padel courts near me",
    "book padel court",
    "padel courts USA",
    "padel near me",
    "padel court booking",
    "padel facilities",
    "indoor padel courts",
    "outdoor padel courts",
  ],
  openGraph: {
    title: "Find Padel Courts Near Me | Book Padel Courts Across the USA",
    description: "Discover and book padel courts across the United States. Find courts in your city, compare prices, read reviews, and book online.",
    url: "https://padelcourtsfinder.com",
    siteName: "Padel Courts Finder",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Find Padel Courts Near Me",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Padel Courts Near Me | Book Padel Courts Across the USA",
    description: "Discover and book padel courts across the United States. Find courts in your city, compare prices, and read reviews.",
    images: ["https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "https://padelcourtsfinder.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  const stats = getSiteStats();
  const states = getStates();
  const allCourts = getAllAdaptedCourts();

  // Get featured courts (verified and highly rated)
  const featuredCourts = allCourts
    .filter((court) => court.isFeatured)
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Padel Courts Finder",
            description: "Premier directory for finding and booking padel courts across the United States",
            url: "https://padelcourtsfinder.com",
            logo: "https://padelcourtsfinder.com/logo.png",
            sameAs: [
              "https://facebook.com/padelcourtsfinder",
              "https://twitter.com/padelcourtsfinder",
              "https://instagram.com/padelcourtsfinder",
            ],
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="w-3 h-3 mr-1" />
              {stats.totalCourts} Clubs Nationwide
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Find <span className="text-primary">Padel Clubs</span> Near You
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover and book padel clubs across the United States. Compare facilities, read reviews, and reserve your court online.
            </p>

            {/* Search Bar */}
            <HeroSearch />

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{stats.totalCourts}+</div>
                <div className="text-sm text-muted-foreground">Clubs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{stats.totalStates}</div>
                <div className="text-sm text-muted-foreground">States</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{stats.totalCities}+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse Padel Clubs by State</h2>
          <p className="text-muted-foreground">
            Find clubs in your state and discover new places to play
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {states.map((state) => (
            <Link
              key={state.code}
              href={`/${state.slug}`}
              className="group"
            >
              <Card className="hover:border-primary transition-colors h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <MapPin className="w-5 h-5 text-primary" />
                    <Badge variant="secondary" className="text-xs">
                      {state.courtCount} {state.courtCount === 1 ? 'club' : 'clubs'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {state.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {state.cities.length} {state.cities.length === 1 ? 'city' : 'cities'}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Can&apos;t find your state? We&apos;re constantly adding new locations.{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Let us know
            </Link>
          </p>
        </div>
      </section>

      {/* Featured Courts */}
      <section className="container mx-auto px-4 py-16 bg-muted/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Padel Clubs</h2>
          <p className="text-muted-foreground">
            Top-rated and verified clubs across the country
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredCourts.map((court) => (
            <Link
              key={court.id}
              href={`/courts/${court.slug}`}
              className="group"
            >
              <Card className="hover:border-primary transition-all h-full overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={court.heroImage}
                    alt={court.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {court.isFeatured && (
                    <Badge className="absolute top-2 right-2 bg-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                    {court.name}
                  </CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      {court.address.city}, {court.address.stateCode}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-medium">{court.rating.ratingValue}</span>
                        <span className="text-muted-foreground">
                          ({court.rating.reviewCount})
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {court.facility.totalCourts} courts
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        ${court.pricing.offPeakHourlyRate}
                      </div>
                      <div className="text-xs text-muted-foreground">per hour</div>
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/search">
              View All Clubs
            </Link>
          </Button>
        </div>
      </section>

      {/* Top Cities */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Cities for Padel</h2>
          <p className="text-muted-foreground">
            Explore the most active padel communities in the US
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {stats.topCities.map((city) => (
            <Link
              key={`${city.slug}-${city.stateCode}`}
              href={`/${states.find(s => s.code === city.stateCode)?.slug}/${city.slug}`}
              className="group"
            >
              <Card className="hover:border-primary transition-colors text-center p-4">
                <CardTitle className="text-base mb-2 group-hover:text-primary transition-colors">
                  {city.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {city.courtCount} {city.courtCount === 1 ? 'club' : 'clubs'}
                </CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Own a Padel Club?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            List your club on Padel Courts Finder and reach thousands of players looking for places to play in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/list-your-court">
                List Your Court
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Padel Courts Finder</h3>
            <p className="text-sm text-muted-foreground">
              The premier directory for finding and booking padel courts across the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular States</h4>
            <ul className="space-y-2 text-sm">
              {stats.topStates.slice(0, 4).map((state) => (
                <li key={state.code}>
                  <Link href={`/${state.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/list-your-court" className="text-muted-foreground hover:text-primary transition-colors">
                  List Your Court
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-to-play" className="text-muted-foreground hover:text-primary transition-colors">
                  How to Play Padel
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-muted-foreground hover:text-primary transition-colors">
                  Rules & Regulations
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipment Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Padel Courts Finder. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
