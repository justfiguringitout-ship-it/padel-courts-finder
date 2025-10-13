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
import { MapPin, Star, Clock, ChevronRight, Building2 } from "lucide-react";
import { getStates, getStateBySlug } from "@/lib/site-structure";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
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

  const title = `${state.courtCount} Best Padel Courts in ${state.name} | Find Padel Near Me`;
  const description = `Discover ${state.courtCount} padel courts across ${state.cities.length} cities in ${state.name}. Compare prices, read reviews, and book online. Find the perfect padel court near you.`;
  const canonicalUrl = `https://findpadelnearme.com/${state.slug}`;

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
      siteName: "Find Padel Near Me",
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

  // Sort courts by rating
  const sortedCourts = stateCourts.sort((a, b) => b.rating.ratingValue - a.rating.ratingValue);

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
            url: `https://findpadelnearme.com/${state.slug}`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://findpadelnearme.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: state.name,
                  item: `https://findpadelnearme.com/${state.slug}`,
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
              Discover {state.courtCount} padel {state.courtCount === 1 ? 'club' : 'clubs'} across {state.cities.length} {state.cities.length === 1 ? 'city' : 'cities'} in {state.name}. Compare facilities, read reviews, and book online.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Building2 className="w-4 h-4 mr-2" />
                {state.courtCount} Clubs
              </Badge>
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
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <h2>About Padel in {state.name}</h2>
          <p>
            {state.name} is home to {state.courtCount} padel {state.courtCount === 1 ? 'club' : 'clubs'} spread across {state.cities.length} {state.cities.length === 1 ? 'city' : 'cities'}, making it one of the growing hubs for padel tennis in the United States.
            Whether you&apos;re a beginner looking to try padel for the first time or an experienced player seeking competitive matches,
            you&apos;ll find excellent facilities throughout the state.
          </p>

          <h3>Popular Cities for Padel in {state.name}</h3>
          <p>The top cities for padel in {state.name} include:</p>
          <ul>
            {state.cities.slice(0, 5).map((city) => (
              <li key={city.slug}>
                <Link href={`/${state.slug}/${city.slug}`} className="text-primary hover:underline">
                  {city.name}
                </Link>
                {" "}with {city.courtCount} {city.courtCount === 1 ? 'club' : 'clubs'}
              </li>
            ))}
          </ul>

          <h3>Find the Perfect Court</h3>
          <p>
            Use our directory to compare facilities, check availability, read reviews from other players,
            and book your court online. Each listing includes detailed information about court surfaces,
            amenities, pricing, and opening hours to help you make the best choice for your game.
          </p>
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
