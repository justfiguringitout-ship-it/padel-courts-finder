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
import {
  MapPin, Star, Clock, Phone, Globe, Mail, DollarSign, Users,
  Calendar, CheckCircle
} from "lucide-react";
import { getAllAdaptedCourtSlugs, getAdaptedCourtBySlug, getAdaptedRelatedCourts, getTodayHours, isCurrentlyOpen } from "@/lib/court-adapter";
import { ClubMapClient } from "@/components/club-map-client";
import type { Metadata } from "next";

interface CourtPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllAdaptedCourtSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CourtPageProps): Promise<Metadata> {
  const { slug } = await params;
  const court = getAdaptedCourtBySlug(slug);

  if (!court) {
    return { title: "Club Not Found" };
  }

  return {
    title: `${court.name} | ${court.address.city}, ${court.address.stateCode} | Padel Courts`,
    description: court.metaDescription || court.description,
    keywords: court.keywords,
    openGraph: {
      title: court.name,
      description: court.description,
      url: `https://padelcourtsfinder.com/courts/${court.slug}`,
      siteName: "Padel Courts Finder",
      type: "website",
      images: court.heroImage ? [{ url: court.heroImage }] : [],
    },
    alternates: {
      canonical: `https://padelcourtsfinder.com/courts/${court.slug}`,
    },
  };
}

export default async function CourtPage({ params }: CourtPageProps) {
  const { slug } = await params;
  const court = getAdaptedCourtBySlug(slug);

  if (!court) {
    notFound();
  }

  const relatedCourts = getAdaptedRelatedCourts(court, 3);
  const todayHours = getTodayHours(court);
  const isOpen = isCurrentlyOpen(court);

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: court.name,
            description: court.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: court.address.streetAddress,
              addressLocality: court.address.city,
              addressRegion: court.address.stateCode,
              postalCode: court.address.zipCode,
              addressCountry: court.address.countryCode,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: court.coordinates.latitude,
              longitude: court.coordinates.longitude,
            },
            telephone: court.phone,
            email: court.email,
            url: court.website || `https://padelcourtsfinder.com/courts/${court.slug}`,
            image: court.images.map((img) => img.url),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: court.rating.ratingValue,
              reviewCount: court.rating.reviewCount,
              bestRating: court.rating.bestRating,
              worstRating: court.rating.worstRating,
            },
            priceRange: court.pricing.priceRange,
            openingHoursSpecification: court.hours.map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.dayOfWeek,
              opens: h.opens,
              closes: h.closes,
            })),
          }),
        }}
      />

      {/* FAQ Schema */}
      {court.faqs && court.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": court.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }),
          }}
        />
      )}

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
                <BreadcrumbLink href="/search">Search</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{court.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Club Info */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                {court.isFeatured && (
                  <Badge variant="default" className="mb-2">Featured</Badge>
                )}
                {court.isActive && isOpen && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Open Now
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-4">{court.name}</h1>

              <div className="flex items-center gap-1 text-lg mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  {court.address.city}, {court.address.stateCode}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="text-xl font-bold">{court.rating.ratingValue}</span>
                  <span className="text-muted-foreground">({court.rating.reviewCount} reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">{court.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {court.features.map((feature) => (
                  <Badge key={feature} variant="secondary">{feature}</Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Courts</div>
                    <div className="font-semibold">{court.facility.totalCourts} courts</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">From</div>
                    <div className="font-semibold">${court.pricing.offPeakHourlyRate}/hour</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden border">
              <img
                src={court.heroImage || court.images[0].url}
                alt={court.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact & Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Contact & Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {court.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <a href={`tel:${court.phone}`} className="font-medium hover:text-primary">{court.phone}</a>
                    </div>
                  </div>
                )}
                {court.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href={`mailto:${court.email}`} className="font-medium hover:text-primary">{court.email}</a>
                    </div>
                  </div>
                )}
                {court.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Website</div>
                      <a href={court.website} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                        Visit website
                      </a>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Today&apos;s Hours</div>
                    <div className="font-medium">{todayHours}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <ClubMapClient
              name={court.name}
              address={court.address}
              coordinates={court.coordinates}
              googleMapsUrl={court.googleMapsUrl}
            />

            {/* Facility Details */}
            <Card>
              <CardHeader>
                <CardTitle>Facility Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Total Courts</div>
                    <div className="font-medium">{court.facility.totalCourts}</div>
                  </div>
                  {court.facility.indoorCourts > 0 && (
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Indoor Courts</div>
                      <div className="font-medium">{court.facility.indoorCourts}</div>
                    </div>
                  )}
                  {court.facility.outdoorCourts > 0 && (
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Outdoor Courts</div>
                      <div className="font-medium">{court.facility.outdoorCourts}</div>
                    </div>
                  )}
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Court Surface</div>
                    <div className="font-medium">{court.facility.courtSurface}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Lighting</div>
                    <div className="font-medium">{court.facility.lighting}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {court.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            {court.faqs && court.faqs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {court.faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Off-Peak Rate</div>
                  <div className="text-3xl font-bold text-primary">${court.pricing.offPeakHourlyRate}</div>
                  <div className="text-sm text-muted-foreground">per hour</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Peak Rate</div>
                  <div className="text-2xl font-bold">${court.pricing.peakHourlyRate}</div>
                  <div className="text-sm text-muted-foreground">per hour</div>
                </div>
                {court.bookingUrl ? (
                  <Button className="w-full" asChild>
                    <a href={court.bookingUrl} target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </a>
                  </Button>
                ) : court.phone ? (
                  <Button className="w-full" asChild>
                    <a href={`tel:${court.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call to Book
                    </a>
                  </Button>
                ) : null}
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card>
              <CardHeader>
                <CardTitle>Hours of Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {court.hours.map((hour) => (
                    <div key={hour.dayOfWeek} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{hour.dayOfWeek}</span>
                      <span className="font-medium">
                        {hour.closed ? "Closed" : `${hour.opens} - ${hour.closes}`}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Courts */}
        {relatedCourts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Nearby Clubs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCourts.map((relatedCourt) => (
                <Link
                  key={relatedCourt.id}
                  href={`/courts/${relatedCourt.slug}`}
                  className="group"
                >
                  <Card className="hover:border-primary transition-all h-full overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={relatedCourt.heroImage}
                        alt={relatedCourt.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                        {relatedCourt.name}
                      </CardTitle>
                      <CardDescription className="space-y-2">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="w-4 h-4" />
                          {relatedCourt.address.city}, {relatedCourt.address.stateCode}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span className="font-medium">{relatedCourt.rating.ratingValue}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {relatedCourt.facility.totalCourts} courts
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        ${relatedCourt.pricing.offPeakHourlyRate}
                      </div>
                      <div className="text-xs text-muted-foreground">per hour</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
