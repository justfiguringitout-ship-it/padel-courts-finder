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
  MapPin, Star, Clock, Phone, Globe, Mail, Users,
  Calendar, CheckCircle, UtensilsCrossed, Dumbbell, Armchair, GraduationCap
} from "lucide-react";
import { getAllAdaptedCourtSlugs, getAdaptedCourtBySlug, getAdaptedRelatedCourts, getTodayHours, isCurrentlyOpen } from "@/lib/court-adapter";
import { ClubMapClient } from "@/components/club-map-client";
import { TrackedLink } from "@/components/TrackedLink";
import { GearWidget } from "@/components/GearWidget";
import { cityBlogSlugs } from "@/data/page-content";
import { getStates } from "@/lib/site-structure";
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
      url: `https://www.padelcourtsfinder.com/courts/${court.slug}`,
      siteName: "Padel Courts Finder",
      type: "website",
      images: court.heroImage ? [{ url: court.heroImage }] : [],
    },
    alternates: {
      canonical: `https://www.padelcourtsfinder.com/courts/${court.slug}`,
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
            url: court.website || `https://www.padelcourtsfinder.com/courts/${court.slug}`,
            image: court.images.map((img) => img.url),
            ...(court.rating.ratingValue > 0 && court.rating.reviewCount > 0 ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: court.rating.ratingValue,
                reviewCount: court.rating.reviewCount,
                bestRating: court.rating.bestRating,
                worstRating: court.rating.worstRating,
              },
            } : {}),
            ...(court.pricingText ? { priceRange: court.pricingText } : {}),
            openingHoursSpecification: court.hours.map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.dayOfWeek,
              opens: h.opens,
              closes: h.closes,
            })),
          }),
        }}
      />

      {/* FAQ Schema — only if 2+ FAQs */}
      {court.faqs && court.faqs.length >= 2 && (
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
              <div className="flex items-start gap-3 mb-4 flex-wrap">
                {court.featured && (
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white">Featured Club</Badge>
                )}
                {court.isActive && isOpen && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Open Now
                  </Badge>
                )}
                {court.status === "coming_soon" && (
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Coming Soon</Badge>
                )}
                {court.status === "temporarily_closed" && (
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Temporarily Closed</Badge>
                )}
                {court.membersOnly && (
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Private Club</Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-4">{court.name}</h1>

              <div className="flex items-center gap-1 text-lg mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  {court.address.city}, {court.address.stateCode}
                </span>
              </div>

              {court.rating.ratingValue > 0 && court.rating.reviewCount > 0 && (
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="text-xl font-bold">{court.rating.ratingValue}</span>
                  <span className="text-muted-foreground">({court.rating.reviewCount} reviews)</span>
                </div>
              </div>
              )}

              {court.description && (
                <p className="text-lg text-muted-foreground mb-6">{court.description}</p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {court.features.map((feature) => (
                  <Badge key={feature} variant="secondary">{feature}</Badge>
                ))}
                {court.lessonsAvailable && (
                  <Badge variant="outline" className="gap-1"><GraduationCap className="w-3 h-3" />Lessons</Badge>
                )}
                {court.rentalAvailable && (
                  <Badge variant="outline" className="gap-1"><Dumbbell className="w-3 h-3" />Equipment Rental</Badge>
                )}
                {court.foodAndDrink && (
                  <Badge variant="outline" className="gap-1"><UtensilsCrossed className="w-3 h-3" />Food &amp; Drink</Badge>
                )}
                {court.socialArea && (
                  <Badge variant="outline" className="gap-1"><Armchair className="w-3 h-3" />Social Lounge</Badge>
                )}
              </div>

              {court.facility.totalCourts > 0 && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Courts</div>
                    <div className="font-semibold">{court.facility.totalCourts} courts</div>
                  </div>
                </div>
              )}
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
                      <TrackedLink href={`tel:${court.phone}`} type="phone" clubName={court.name} className="font-medium hover:text-primary">{court.phone}</TrackedLink>
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
                      <TrackedLink href={court.website} type="website" clubName={court.name} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                        Visit website
                      </TrackedLink>
                    </div>
                  </div>
                )}
                {court.instagram && (
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    <div>
                      <div className="text-sm text-muted-foreground">Instagram</div>
                      <TrackedLink href={court.instagram} type="social" clubName={court.name} platform="instagram" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                        Follow on Instagram
                      </TrackedLink>
                    </div>
                  </div>
                )}
                {court.facebook && (
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <div>
                      <div className="text-sm text-muted-foreground">Facebook</div>
                      <TrackedLink href={court.facebook} type="social" clubName={court.name} platform="facebook" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                        Follow on Facebook
                      </TrackedLink>
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

            {/* Facility Details — only when real data exists */}
            {(court.facility.totalCourts > 0 || court.facility.courtSurface || court.facility.lighting) && (
              <Card>
                <CardHeader>
                  <CardTitle>Facility Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {court.facility.totalCourts > 0 && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Total Courts</div>
                        <div className="font-medium">{court.facility.totalCourts}</div>
                      </div>
                    )}
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
                    {court.facility.courtSurface && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Court Surface</div>
                        <div className="font-medium">{court.facility.courtSurface}</div>
                      </div>
                    )}
                    {court.facility.lighting && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Lighting</div>
                        <div className="font-medium">{court.facility.lighting}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Amenities — only when data exists */}
            {court.amenities.length > 0 && (
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
            )}

            {/* What Players Say — review themes */}
            {((court.positiveReviewThemes && court.positiveReviewThemes.length > 0) || (court.negativeReviewThemes && court.negativeReviewThemes.length > 0)) && (
              <Card>
                <CardHeader>
                  <CardTitle>What Players Say</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {court.positiveReviewThemes && court.positiveReviewThemes.length > 0 && (
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Players love</div>
                      <div className="flex flex-wrap gap-2">
                        {court.positiveReviewThemes.map((theme) => (
                          <Badge key={theme} variant="outline" className="bg-green-50 text-green-700 border-green-200">{theme}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {court.negativeReviewThemes && court.negativeReviewThemes.length > 0 && (
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Could improve</div>
                      <div className="flex flex-wrap gap-2">
                        {court.negativeReviewThemes.map((theme) => (
                          <Badge key={theme} variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">{theme}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

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
            {/* Pricing Card — only when pricingText exists */}
            {court.pricingText && (
              <Card>
                <CardHeader>
                  <CardTitle>Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {court.pricingText.split(";").map((item) => item.trim()).filter(Boolean).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {court.bookingUrl ? (
                    <Button className="w-full" asChild>
                      <TrackedLink href={court.bookingUrl} type="website" clubName={court.name} target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </TrackedLink>
                    </Button>
                  ) : court.phone ? (
                    <Button className="w-full" asChild>
                      <TrackedLink href={`tel:${court.phone}`} type="phone" clubName={court.name}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Book
                      </TrackedLink>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            )}

            {/* Book button when no pricing but has contact */}
            {!court.pricingText && (court.bookingUrl || court.phone) && (
              <Card>
                <CardContent className="pt-6">
                  {court.bookingUrl ? (
                    <Button className="w-full" asChild>
                      <TrackedLink href={court.bookingUrl} type="website" clubName={court.name} target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </TrackedLink>
                    </Button>
                  ) : court.phone ? (
                    <Button className="w-full" asChild>
                      <TrackedLink href={`tel:${court.phone}`} type="phone" clubName={court.name}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Book
                      </TrackedLink>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            )}

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
                          {relatedCourt.rating.ratingValue > 0 && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-primary text-primary" />
                              <span className="font-medium">{relatedCourt.rating.ratingValue}</span>
                            </div>
                          )}
                          {relatedCourt.facility.totalCourts > 0 && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {relatedCourt.facility.totalCourts} {relatedCourt.facility.totalCourts === 1 ? 'court' : 'courts'}
                            </div>
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Explore More */}
        {(() => {
          const citySlug = court.address.city.toLowerCase().replace(/\s+/g, "-");
          const blogSlug = cityBlogSlugs[citySlug];
          const stateInfo = getStates().find(s => s.code === court.address.stateCode);
          return (
            <section className="mt-12 border-t pt-8">
              <h2 className="text-lg font-semibold mb-4">Explore More</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {stateInfo && (
                  <Link href={`/${stateInfo.slug}/${citySlug}`} className="text-primary hover:underline">
                    All padel clubs in {court.address.city} &rarr;
                  </Link>
                )}
                {blogSlug && (
                  <Link href={`/blog/best-padel-clubs-${blogSlug}`} className="text-primary hover:underline">
                    Best Padel Clubs in {court.address.city} (2026) &rarr;
                  </Link>
                )}
                {stateInfo && (
                  <Link href={`/${stateInfo.slug}`} className="text-primary hover:underline">
                    Browse all {stateInfo.name} padel clubs &rarr;
                  </Link>
                )}
                <Link href="/blog/best-padel-rackets-beginners" className="text-primary hover:underline">
                  Best Beginner Rackets (2026) &rarr;
                </Link>
                <Link href="/rules" className="text-primary hover:underline">
                  Learn the Rules &rarr;
                </Link>
              </div>
            </section>
          );
        })()}

        {/* Gear Widget */}
        <GearWidget />
      </div>
    </div>
  );
}
