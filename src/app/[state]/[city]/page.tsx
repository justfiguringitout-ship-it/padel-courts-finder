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
import { MapPin, Star, Clock, Phone, Globe, Navigation, TrendingUp, BookOpen } from "lucide-react";
import { getStates, getStateBySlug, getCityBySlug } from "@/lib/site-structure";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { cityIntros, cityBlogSlugs } from "@/data/page-content";
import { ClubsMapClient } from "@/components/clubs-map-client";
import type { Metadata } from "next";

interface CityPageProps {
  params: Promise<{
    state: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  const states = getStates();
  const params: { state: string; city: string }[] = [];

  states.forEach((state) => {
    state.cities.forEach((city) => {
      params.push({
        state: state.slug,
        city: city.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);

  if (!state || !city) {
    return {
      title: "City Not Found",
    };
  }

  // Compute total courts for meta description
  const allCourtsForMeta = getAllAdaptedCourts();
  const cityCourtsMeta = allCourtsForMeta.filter(
    (c) => c.address.stateCode === state.code && c.address.city === city.name
  );
  const totalCourtCount = cityCourtsMeta.reduce((sum, c) => sum + c.facility.totalCourts, 0);

  const title = `${city.courtCount} Best Padel Courts in ${city.name}, ${state.code} | Find Padel Near Me`;
  const description = totalCourtCount > 0
    ? `Find ${city.courtCount} padel clubs with ${totalCourtCount}+ courts in ${city.name}, ${state.name}. Compare prices, hours, read reviews, and book your court. ${city.name}'s complete padel directory.`
    : `Find ${city.courtCount} padel clubs in ${city.name}, ${state.name}. Compare prices, hours, read reviews, and book your court. ${city.name}'s complete padel directory.`;
  const canonicalUrl = `https://www.padelcourtsfinder.com/${state.slug}/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `${city.name} padel courts`,
      `padel ${city.name}`,
      `${city.name} ${state.code} padel`,
      `book padel ${city.name}`,
      `best padel courts ${city.name}`,
      `padel near ${city.name}`,
      `${city.name} padel facilities`,
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
          alt: `Padel Courts in ${city.name}, ${state.name}`,
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

export default async function CityPage({ params }: CityPageProps) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);

  if (!state || !city) {
    notFound();
  }

  const allCourts = getAllAdaptedCourts();
  const cityCourts = allCourts.filter(
    (court) =>
      court.address.stateCode === state.code &&
      court.address.city === city.name
  );

  // Sort courts: featured first, then by rating
  const sortedCourts = cityCourts.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.rating.ratingValue - a.rating.ratingValue;
  });

  // Get nearby cities (same state, different city)
  const nearbyCities = state.cities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6);

  // Compute dynamic stats for SEO content
  const totalCourts = cityCourts.reduce((sum, c) => sum + c.facility.totalCourts, 0);
  const indoorCount = cityCourts.filter((c) => c.features.some(f => f.toLowerCase() === "indoor")).length;
  const outdoorCount = cityCourts.filter((c) => c.features.some(f => f.toLowerCase() === "outdoor")).length;
  const lessonsCount = cityCourts.filter((c) => c.lessonsAvailable).length;
  const rentalCount = cityCourts.filter((c) => c.rentalAvailable).length;
  const comingSoon = cityCourts.filter((c) => c.status === "coming_soon");
  const openClubs = cityCourts.filter((c) => c.status !== "coming_soon" && c.status !== "temporarily_closed");

  // Extract price range from pricingText
  const prices: number[] = [];
  cityCourts.forEach((c) => {
    if (c.pricingText) {
      const matches = c.pricingText.match(/\$(\d+)/g);
      if (matches) {
        matches.forEach((m) => prices.push(parseInt(m.replace("$", ""), 10)));
      }
    }
  });
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

  // Custom or dynamic intro
  const customIntro = cityIntros[`${state.code}-${city.name}`];
  const blogSlug = cityBlogSlugs[city.slug];

  // Build indoor/outdoor descriptor
  const facilityMix = indoorCount > 0 && outdoorCount > 0
    ? "indoor and outdoor"
    : indoorCount > 0 ? "indoor" : outdoorCount > 0 ? "outdoor" : "";

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD for City Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `Padel Courts in ${city.name}, ${state.name}`,
            description: `Directory of ${city.courtCount} padel courts in ${city.name}, ${state.name}`,
            url: `https://www.padelcourtsfinder.com/${state.slug}/${city.slug}`,
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: city.name,
                  item: `https://www.padelcourtsfinder.com/${state.slug}/${city.slug}`,
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
                <BreadcrumbLink href={`/${state.slug}`}>{state.name}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{city.name}</BreadcrumbPage>
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
                Padel Clubs in {city.name}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              {customIntro || (
                <>
                  {city.name} is home to {openClubs.length} padel {openClubs.length === 1 ? 'club' : 'clubs'}
                  {totalCourts > 0 ? ` with ${totalCourts}+ courts` : ''}
                  {state.cities.length > 1 ? `, making it one of ${state.name}'s top destinations for padel` : ` in ${state.name}`}.
                  {facilityMix ? ` From ${facilityMix} facilities` : ' From modern facilities'}
                  {lessonsCount > 0 ? ' offering lessons, leagues, and equipment rental' : ''}, {city.name} has options for players of all levels.
                  Browse all {city.name} padel clubs below to compare pricing, hours, amenities, and player reviews.
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Navigation className="w-4 h-4 mr-2" />
                {city.courtCount} {city.courtCount === 1 ? 'Club' : 'Clubs'}
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                {city.name}, {state.code}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4 py-12">
        <ClubsMapClient
          clubs={sortedCourts}
          title={`${city.courtCount} ${city.courtCount === 1 ? 'Club' : 'Clubs'} in ${city.name}`}
          description={`Explore all padel clubs in ${city.name}, ${state.name} on the map`}
        />
      </section>

      {/* Courts Grid */}
      <section className="container mx-auto px-4 py-12 bg-muted/20">
        <h2 className="text-2xl font-bold mb-6">
          All Padel Clubs in {city.name}
        </h2>
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
                      {court.address.streetAddress}
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
                <CardContent className="space-y-3">
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
                  {court.phone && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{court.phone}</span>
                    </div>
                  )}
                  {court.website && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4" />
                      <span className="truncate">Website</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="container mx-auto px-4 py-12 bg-muted/20">
          <h2 className="text-2xl font-bold mb-6">
            Padel Courts in Nearby Cities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/${state.slug}/${nearbyCity.slug}`}
                className="group"
              >
                <Card className="hover:border-primary transition-colors h-full text-center p-4">
                  <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors mb-1">
                    {nearbyCity.name}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {nearbyCity.courtCount} {nearbyCity.courtCount === 1 ? 'club' : 'clubs'}
                  </CardDescription>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* What to Know Section */}
      {(totalCourts > 0 || lessonsCount > 0 || rentalCount > 0 || prices.length > 0 || comingSoon.length > 0) && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">What to Know About Padel in {city.name}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {minPrice > 0 && maxPrice > 0 && (
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="font-medium text-sm">Pricing</p>
                    <p className="text-sm text-muted-foreground">
                      Courts typically cost ${minPrice}–${maxPrice}/hour
                    </p>
                  </div>
                </div>
              )}
              {(indoorCount > 0 || outdoorCount > 0) && (
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <span className="text-2xl">🏟️</span>
                  <div>
                    <p className="font-medium text-sm">Court Types</p>
                    <p className="text-sm text-muted-foreground">
                      {indoorCount > 0 && `${indoorCount} indoor`}
                      {indoorCount > 0 && outdoorCount > 0 && " and "}
                      {outdoorCount > 0 && `${outdoorCount} outdoor`}
                      {" "}{indoorCount + outdoorCount === 1 ? "facility" : "facilities"}
                    </p>
                  </div>
                </div>
              )}
              {lessonsCount > 0 && (
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-medium text-sm">Lessons</p>
                    <p className="text-sm text-muted-foreground">
                      {lessonsCount} of {openClubs.length} clubs offer lessons for beginners
                    </p>
                  </div>
                </div>
              )}
              {rentalCount > 0 && (
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <span className="text-2xl">🎾</span>
                  <div>
                    <p className="font-medium text-sm">Equipment Rental</p>
                    <p className="text-sm text-muted-foreground">
                      {rentalCount} {rentalCount === 1 ? "club offers" : "clubs offer"} equipment rental
                    </p>
                  </div>
                </div>
              )}
            </div>
            {comingSoon.length > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Coming soon:</strong>{" "}
                {comingSoon.map((c, i) => (
                  <span key={c.id}>
                    {i > 0 && ", "}
                    {c.name}
                  </span>
                ))}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Related Guides & Internal Links */}
      <section className="container mx-auto px-4 py-12 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogSlug && (
              <Link href={`/blog/best-padel-clubs-${blogSlug}`} className="group">
                <Card className="h-full hover:border-primary transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <Badge variant="secondary" className="text-xs">Expert Guide</Badge>
                    </div>
                    <CardTitle className="text-base group-hover:text-primary transition-colors">
                      Best Padel Clubs in {city.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      In-depth rankings, insider tips & comparisons →
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )}
            <Link href={`/${state.slug}`} className="group">
              <Card className="h-full hover:border-primary transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    All Padel Clubs in {state.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {state.courtCount} clubs across {state.cities.length} cities →
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            {nearbyCities.slice(0, blogSlug ? 1 : 2).map((nearbyCity) => (
              <Link key={nearbyCity.slug} href={`/${state.slug}/${nearbyCity.slug}`} className="group">
                <Card className="h-full hover:border-primary transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base group-hover:text-primary transition-colors">
                      Padel in {nearbyCity.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {nearbyCity.courtCount} {nearbyCity.courtCount === 1 ? 'club' : 'clubs'} nearby →
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Own a Padel Club in {city.name}?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Reach local players by listing your facility on Find Padel Near Me.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/list-your-court">
                List Your Court
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href={`/${state.slug}`}>
                View All Courts in {state.name}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
