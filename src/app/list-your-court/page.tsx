import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Star, Search, Users, TrendingUp, Zap } from "lucide-react";
import { getSiteStats } from "@/lib/site-structure";
import { TrackFormSubmit } from "@/components/TrackFormSubmit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Your Padel Club | Padel Courts Finder",
  description:
    "List your padel club on the most comprehensive US padel directory. Reach thousands of players searching for courts near them. Free and featured listings available.",
  openGraph: {
    title: "List Your Padel Club | Padel Courts Finder",
    description:
      "List your padel club on the most comprehensive US padel directory. Reach thousands of players searching for courts near them. Free and featured listings available.",
    url: "https://www.padelcourtsfinder.com/list-your-court",
    siteName: "Padel Courts Finder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "List Your Padel Club | Padel Courts Finder",
    description:
      "List your padel club on the most comprehensive US padel directory. Free and featured listings available.",
  },
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/list-your-court",
  },
};

export default async function ListYourCourtPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;
  const stats = getSiteStats();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <TrendingUp className="w-3 h-3 mr-1" />
            {stats.totalCourts}+ Clubs Listed
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            List Your Padel Club on the{" "}
            <span className="text-primary">#1 US Directory</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join {stats.totalCourts}+ clubs already listed on Padel Courts
            Finder. Get discovered by thousands of players searching for courts
            near them.
          </p>
          <Button size="lg" asChild>
            <a href="#get-listed">Get Listed Now</a>
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Listing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every club gets a free listing. Upgrade to Featured for premium
            visibility and priority placement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Free Listing</CardTitle>
              <CardDescription>Standard directory listing</CardDescription>
              <div className="pt-2">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Club name, address, and contact info",
                  "Description and hours of operation",
                  "Pricing information",
                  "Photos and Google reviews",
                  "Appear in state and city pages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground pt-4">
                Already listed? Check if your club is on our directory.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/search">
                  <Search className="w-4 h-4 mr-2" />
                  Search Directory
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Featured Tier */}
          <Card className="h-full border-amber-300 bg-amber-50/30 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                Recommended
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Featured Listing</CardTitle>
              <CardDescription>
                Maximum visibility for your club
              </CardDescription>
              <div className="pt-2">
                <span className="text-4xl font-bold">$75</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Everything in Free, plus:",
                  '"Featured" badge on your listing',
                  "Priority placement at top of city & state pages",
                  "Included in homepage Featured section",
                  "Highlighted card design in search results",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        i === 0
                          ? "text-primary"
                          : "text-amber-500"
                      }`}
                    />
                    <span className={`text-sm ${i === 0 ? "font-medium" : ""}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-amber-500 hover:bg-amber-600" asChild>
                <a href="#get-listed">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Featured
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why List With Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "1,000+ Monthly Visitors",
                description:
                  "Reach players actively searching for padel courts in your area.",
              },
              {
                icon: Star,
                title: "Real Reviews & Photos",
                description:
                  "Real photos, reviews, and pricing that help players choose your club.",
              },
              {
                icon: Search,
                title: "Top Search Placement",
                description:
                  "Show up first when players search your city.",
              },
              {
                icon: CheckCircle,
                title: "No Contracts",
                description:
                  "Cancel anytime. No long-term commitments or hidden fees.",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="text-center h-full">
                <CardHeader>
                  <benefit.icon className="w-10 h-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="get-listed" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get Your Club Listed</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we&apos;ll add your club to the
              directory within 48 hours.
            </p>
          </div>

          {submitted === "true" ? (
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <TrackFormSubmit />
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold">Thanks for Submitting!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We&apos;ll review your submission and get back to you within
                  48 hours.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/">Back to Homepage</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <form
                  action="https://formspree.io/f/xaqlweaw"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden fields for Formspree */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Club Listing Request — Padel Courts Finder"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://www.padelcourtsfinder.com/list-your-court?submitted=true"
                  />
                  {/* Honeypot spam protection */}
                  <div style={{ display: "none" }}>
                    <input type="text" name="_gotcha" />
                  </div>

                  {/* Club Name */}
                  <div className="space-y-2">
                    <Label htmlFor="clubName">
                      Club Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="clubName"
                      name="clubName"
                      required
                      placeholder="e.g. Miami Padel Club"
                    />
                  </div>

                  {/* City, State */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        placeholder="e.g. Miami"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">
                        State <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="state"
                        name="state"
                        required
                        placeholder="e.g. FL"
                      />
                    </div>
                  </div>

                  {/* Contact Name */}
                  <div className="space-y-2">
                    <Label htmlFor="contactName">
                      Contact Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yourclub.com"
                    />
                  </div>

                  {/* Number of Courts */}
                  <div className="space-y-2">
                    <Label htmlFor="numberOfCourts">Number of Courts</Label>
                    <Input
                      id="numberOfCourts"
                      name="numberOfCourts"
                      type="number"
                      min="1"
                      placeholder="e.g. 6"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Notes</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Anything else you'd like us to know about your club..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Featured Interest Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="featuredInterest"
                      name="featuredInterest"
                      value="yes"
                      className="mt-1 h-4 w-4 rounded border-gray-300"
                    />
                    <Label
                      htmlFor="featuredInterest"
                      className="text-sm font-normal cursor-pointer"
                    >
                      I&apos;m interested in a{" "}
                      <strong>Featured Listing</strong> ($75/month)
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Listing Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Questions? We&apos;re Here to Help
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
            Not sure which listing is right for you? Reach out and we&apos;ll
            help you get the most out of Padel Courts Finder.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="mailto:hello@padelcourtsfinder.com">Email Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
