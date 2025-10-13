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
import { MapPin, Star, Clock, Phone, Globe, Navigation } from "lucide-react";
import { getStates, getStateBySlug, getCityBySlug } from "@/lib/site-structure";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
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

  const title = `${city.courtCount} Best Padel Courts in ${city.name}, ${state.code} | Find Padel Near Me`;
  const description = `Find and book padel courts in ${city.name}, ${state.name}. Compare ${city.courtCount} facilities, read reviews, check prices and availability. Book your padel court online today.`;
  const canonicalUrl = `https://padelcourtsfinder.com/${state.slug}/${city.slug}`;

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

  // Sort courts by rating
  const sortedCourts = cityCourts.sort((a, b) => b.rating.ratingValue - a.rating.ratingValue);

  // Get nearby cities (same state, different city)
  const nearbyCities = state.cities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6);

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
            url: `https://padelcourtsfinder.com/${state.slug}/${city.slug}`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://padelcourtsfinder.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: state.name,
                  item: `https://padelcourtsfinder.com/${state.slug}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: city.name,
                  item: `https://padelcourtsfinder.com/${state.slug}/${city.slug}`,
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
              Find and book from {city.courtCount} padel {city.courtCount === 1 ? 'club' : 'clubs'} in {city.name}, {state.name}.
              Compare facilities, read reviews, and reserve your court online.
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
                      {court.address.streetAddress}
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
                <CardContent className="space-y-3">
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

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <h2>Padel Clubs in {city.name}, {state.name}</h2>
          <p>
            {city.name} offers {city.courtCount} excellent padel {city.courtCount === 1 ? 'club' : 'clubs'} for players of all skill levels.
            Whether you&apos;re new to the sport or a seasoned player, you&apos;ll find top-quality courts with modern amenities
            and professional instruction available.
          </p>

          <h3>Why Play Padel in {city.name}?</h3>
          <ul>
            <li>
              <strong>Quality Facilities:</strong> All courts listed are verified and maintained to professional standards
            </li>
            <li>
              <strong>Flexible Booking:</strong> Easy online reservation system with real-time availability
            </li>
            <li>
              <strong>Competitive Pricing:</strong> Compare prices across facilities to find the best rates
            </li>
            <li>
              <strong>Community:</strong> Join a growing community of padel enthusiasts in {city.name}
            </li>
          </ul>

          <h3>Book Your Court Today</h3>
          <p>
            Browse our selection of {city.courtCount} padel {city.courtCount === 1 ? 'club' : 'clubs'} in {city.name} above.
            Each listing includes detailed information about facilities, pricing, hours, and user reviews.
            Click on any court to see full details, photos, and booking availability.
          </p>

          {nearbyCities.length > 0 && (
            <>
              <h3>Other Cities in {state.name}</h3>
              <p>
                Looking for courts in other parts of {state.name}? Check out our listings in{" "}
                {nearbyCities.slice(0, 3).map((c, i) => (
                  <span key={c.slug}>
                    {i > 0 && (i === nearbyCities.slice(0, 3).length - 1 ? ", and " : ", ")}
                    <Link href={`/${state.slug}/${c.slug}`} className="text-primary hover:underline">
                      {c.name}
                    </Link>
                  </span>
                ))}
                .
              </p>
            </>
          )}
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
