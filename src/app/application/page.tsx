import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  MapPin, Search, Star, Clock, Users, Phone, 
  Globe, Home, Zap, ChevronRight
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Application | Padel Directory Demo",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo data for padel courts
const demoCourts = [
  {
    id: 1,
    name: "Miami Padel Club",
    location: "Miami, FL",
    rating: 4.8,
    reviews: 127,
    distance: "2.3 miles",
    courts: 6,
    indoor: true,
    outdoor: true,
    phone: "(305) 555-0123",
    website: "miamipadelclub.com"
  },
  {
    id: 2,
    name: "Austin Padel Center",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 89,
    distance: "3.7 miles",
    courts: 4,
    indoor: false,
    outdoor: true,
    phone: "(512) 555-0456",
    website: "austinpadel.com"
  },
  {
    id: 3,
    name: "LA Padel Academy",
    location: "Los Angeles, CA",
    rating: 4.7,
    reviews: 203,
    distance: "5.1 miles",
    courts: 8,
    indoor: true,
    outdoor: true,
    phone: "(310) 555-0789",
    website: "lapadelacademy.com"
  }
]

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-2xl font-bold">PadelPoint USA</h1>
            </div>
            <Badge variant="secondary">
              <Zap className="w-3 h-3 mr-1" />
              Starter Kit
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Find Padel Courts Near You
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Discover and book padel courts across the United States. Connect with facilities, 
            check availability, and join the growing padel community.
          </p>
          
          {/* Search Bar Demo */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search by city, state, or zip code..." 
              className="pl-10 py-6 text-lg"
            />
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  size="lg" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  Search
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      5DS
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Install Feature: Live Search</h4>
                    <p className="text-xs text-muted-foreground">
                      Make this search functional using Supabase database or Google Places API.
                    </p>
                    <div className="bg-muted p-2 rounded text-xs">
                      <p className="font-mono">
                        Connect the search input to fetch real court data from your database. 
                        Add geolocation to show nearby courts based on user location. 
                        Store court listings in Supabase with fields: name, location, 
                        coordinates, facilities, contact info, and availability calendar.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      Copy the text above and paste it into Cursor Chat to get started!
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        {/* Court Listings */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Courts</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">
                  View All Courts
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      5DS
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Install Feature: Court Listings Page</h4>
                    <p className="text-xs text-muted-foreground">
                      Create a full directory page with filtering and pagination.
                    </p>
                    <div className="bg-muted p-2 rounded text-xs">
                      <p className="font-mono">
                        Build a comprehensive court listings page with filters for indoor/outdoor, 
                        price range, amenities, and distance. Add map view using Google Maps API. 
                        Include sorting options by rating, distance, and price. Implement 
                        pagination for large result sets using Supabase queries.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      Copy the text above and paste it into Cursor Chat to implement!
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demoCourts.map((court) => (
              <Card key={court.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{court.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {court.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {court.rating}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {court.distance}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {court.courts} courts
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {court.indoor && (
                      <Badge variant="outline">Indoor</Badge>
                    )}
                    {court.outdoor && (
                      <Badge variant="outline">Outdoor</Badge>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{court.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>{court.website}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button className="flex-1">View Details</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            5DS
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Install Feature: Court Detail Page</h4>
                          <p className="text-xs text-muted-foreground">
                            Create detailed court profile with booking system.
                          </p>
                          <div className="bg-muted p-2 rounded text-xs">
                            <p className="font-mono">
                              Build a dynamic court detail page showing photos, full amenities list, 
                              pricing, operating hours, reviews, and ratings. Add a booking calendar 
                              with real-time availability using Supabase. Include photo gallery, 
                              court rules, coaching availability, and contact form.
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground italic">
                            Copy the text above and paste it into Cursor Chat!
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" className="flex-1">Book Now</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            5DS
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Install Feature: Booking System</h4>
                          <p className="text-xs text-muted-foreground">
                            Add calendar-based booking with payment integration.
                          </p>
                          <div className="bg-muted p-2 rounded text-xs">
                            <p className="font-mono">
                              Implement a booking system with calendar view showing available time slots. 
                              Integrate Stripe for payments. Add booking confirmation emails using Resend. 
                              Store bookings in Supabase with user authentication. Include cancellation 
                              policy and booking history for users.
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground italic">
                            Copy the text above and paste it into Cursor Chat!
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Overview */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Platform Features</CardTitle>
            <CardDescription>
              Build a comprehensive padel court directory with these features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Court Discovery
                </h4>
                <p className="text-sm text-muted-foreground">
                  Search and filter courts by location, amenities, and pricing
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Real-time Availability
                </h4>
                <p className="text-sm text-muted-foreground">
                  Live calendar showing court availability and booking options
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Community Features
                </h4>
                <p className="text-sm text-muted-foreground">
                  Reviews, ratings, and player matching for games
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Facility Management
                </h4>
                <p className="text-sm text-muted-foreground">
                  Dashboard for court owners to manage listings and bookings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button size="lg" variant="outline">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}




