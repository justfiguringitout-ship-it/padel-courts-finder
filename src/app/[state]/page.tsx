import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MapPin, Star, Clock, ChevronRight, Building2, BookOpen, TrendingUp } from "lucide-react";
import { getStates, getStateBySlug } from "@/lib/site-structure";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { stateIntros, stateBlogSlugs } from "@/data/page-content";
import { ClubsMapClient } from "@/components/clubs-map-client";
import type { Metadata } from "next";

interface StatePageProps {
  params: Promise<{
    state: string;
  }>;
}

export async function generateStaticParams() {
  const states = getStates();

  return states.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    return {
      title: "State Not Found",
    };
  }

  // Compute total individual courts for meta
  const allCourtsForMeta = getAllAdaptedCourts();
  const stateCourtsMeta = allCourtsForMeta.filter((c) => c.address.stateCode === state.code);
  const totalIndividualCourts = stateCourtsMeta.reduce((sum, c) => sum + c.facility.totalCourts, 0);

  const title = `${state.courtCount} Best Padel Courts in ${state.name} | Find Padel Near Me`;
  const description = totalIndividualCourts > 0
    ? `Find ${state.courtCount} padel clubs across ${state.cities.length} cities in ${state.name} with ${totalIndividualCourts}+ courts. Compare prices, hours, reviews, and facilities. The complete ${state.name} padel court directory.`
    : `Find ${state.courtCount} padel clubs across ${state.cities.length} cities in ${state.name}. Compare prices, hours, reviews, and facilities. The complete ${state.name} padel court directory.`;
  const canonicalUrl = `https://www.padelcourtsfinder.com/${state.slug}`;

  return {
    title,
    description,
    keywords: [
      `${state.name} padel courts`,
      `padel ${state.name}`,
      `${state.code} padel`,
      `book padel ${state.name}`,
      `best padel courts ${state.name}`,
      ...state.cities.slice(0, 5).map(city => `${city.name} padel`),
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Padel Courts Finder",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
          width: 1200,
          height: 630,
          alt: `Padel Courts in ${state.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  const allCourts = getAllAdaptedCourts();
  const stateCourts = allCourts.filter(
    (court) => court.address.stateCode === state.code
  );

  // Sort courts: featured first, then by rating
  const sortedCourts = stateCourts.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.rating.ratingValue - a.rating.ratingValue;
  });

  // Compute stats for content
  const totalCourts = stateCourts.reduce((sum, c) => sum + c.facility.totalCourts, 0);
  const customIntro = stateIntros[state.code];
  const blogSlugs = stateBlogSlugs[state.code] || [];
  const bigMarkets = ["FL", "TX", "CA"];

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD for State Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `Padel Courts in ${state.name}`,
            description: `Directory of ${state.courtCount} padel courts across ${state.cities.length} cities in ${state.name}`,
            url: `https://www.padelcourtsfinder.com/${state.slug}`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.padelcourtsfinder.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: state.name,
                  item: `https://www.padelcourtsfinder.com/${state.slug}`,
                },
              ],
            },
          }),
        }}
      />

      {/* Breadcrumbs */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{state.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Padel Clubs in {state.name}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              {customIntro || (
                <>
                  {state.name} has {state.courtCount} padel {state.courtCount === 1 ? 'club' : 'clubs'} across {state.cities.length} {state.cities.length === 1 ? 'city' : 'cities'}
                  {totalCourts > 0 ? ` with ${totalCourts}+ total courts` : ''}.
                  {bigMarkets.includes(state.code) ? " One of America's largest padel markets." : ""}
                  {" "}Browse clubs by city below, or use our{" "}
                  <Link href="/search" className="text-primary hover:underline">search</Link>
                  {" "}to find courts near you.
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Building2 className="w-4 h-4 mr-2" />
                {state.courtCount} Clubs
              </Badge>
              {totalCourts > 0 && (
                <Badge variant="secondary" className="text-base px-4 py-2">
                  {totalCourts}+ Courts
                </Badge>
              )}
              <Badge variant="outline" className="text-base px-4 py-2">
                {state.cities.length} {state.cities.length === 1 ? 'City' : 'Cities'}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Browse by City</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
          {state.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${state.slug}/${city.slug}`}
              className="group"
            >
              <Card className="hover:border-primary transition-colors h-full">
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors flex items-center justify-between">
                    <span className="line-clamp-1">{city.name}</span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {city.courtCount} {city.courtCount === 1 ? 'club' : 'clubs'}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4 py-12">
        <ClubsMapClient
          clubs={sortedCourts}
          title={`${state.courtCount} ${state.courtCount === 1 ? 'Club' : 'Clubs'} in ${state.name}`}
          description={`Explore all padel clubs across ${state.name} on the map`}
        />
      </section>

      {/* All Courts in State */}
      <section className="container mx-auto px-4 py-12 bg-muted/20">
        <h2 className="text-2xl font-bold mb-6">All Padel Clubs in {state.name}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCourts.map((court) => (
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
                  {court.featured && (
                    <Badge className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600">
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
                      {(court.rating.ratingValue > 0 || court.rating.reviewCount > 0) && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="font-medium">{court.rating.ratingValue}</span>
                          {court.rating.reviewCount > 0 && (
                            <span className="text-muted-foreground">
                              ({court.rating.reviewCount})
                            </span>
                          )}
                        </div>
                      )}
                      {court.facility.totalCourts > 0 && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {court.facility.totalCourts} {court.facility.totalCourts === 1 ? 'court' : 'courts'}
                        </div>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    {court.pricing.offPeakHourlyRate > 0 ? (
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          ${court.pricing.offPeakHourlyRate}
                        </div>
                        <div className="text-xs text-muted-foreground">per hour</div>
                      </div>
                    ) : (
                      <div />
                    )}
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* City Breakdown */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Padel Clubs by City in {state.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {state.cities.map((city) => {
              const cityCourtsTotal = stateCourts
                .filter((c) => c.address.city === city.name)
                .reduce((sum, c) => sum + c.facility.totalCourts, 0);
              return (
                <Link
                  key={city.slug}
                  href={`/${state.slug}/${city.slug}`}
                  className="flex items-center justify-between py-2 border-b border-muted hover:text-primary transition-colors text-sm"
                >
                  <span className="font-medium">{city.name}</span>
                  <span className="text-muted-foreground">
                    {city.courtCount} {city.courtCount === 1 ? 'club' : 'clubs'}
                    {cityCourtsTotal > 0 ? `, ${cityCourtsTotal} courts` : ''}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Guides & Links */}
      <section className="container mx-auto px-4 py-12 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Explore {state.name} Padel</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogSlugs.map((slug) => {
              const cityName = slug === 'nyc' ? 'New York City'
                : slug === 'fort-lauderdale' ? 'Fort Lauderdale'
                : slug === 'san-francisco' ? 'San Francisco'
                : slug === 'san-diego' ? 'San Diego'
                : slug === 'san-antonio' ? 'San Antonio'
                : slug === 'los-angeles' ? 'Los Angeles'
                : slug === 'new-jersey' ? 'New Jersey'
                : slug === 'ohio' ? 'Ohio'
                : slug.charAt(0).toUpperCase() + slug.slice(1);
              return (
                <Link key={slug} href={`/blog/best-padel-clubs-${slug}`} className="group">
                  <Card className="h-full hover:border-primary transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <Badge variant="secondary" className="text-xs">Expert Guide</Badge>
                      </div>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        Best Clubs in {cityName}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        In-depth rankings & reviews →
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
            {state.courtCount <= 5 && (
              <Link href="/how-to-play" className="group">
                <Card className="h-full hover:border-primary transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base group-hover:text-primary transition-colors">
                      New to Padel?
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Learn how to play padel →
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )}
          </div>
          {blogSlugs.length === 0 && (
            <div className="mt-4">
              <Button asChild variant="outline">
                <Link href="/blog">View All City Guides</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Own a Padel Club in {state.name}?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get your facility listed on Find Padel Near Me and connect with players in your area.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/list-your-court">
              List Your Court
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
