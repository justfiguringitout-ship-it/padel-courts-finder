"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Clock, Search, SlidersHorizontal, Navigation } from "lucide-react";
import { getAllAdaptedCourts, calculateDistance } from "@/lib/court-adapter";
import { geocodeZipCode, isZipCode } from "@/lib/zip-geocoder";

function SearchPageContent() {
  const allCourts = getAllAdaptedCourts();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [minRating, setMinRating] = useState<string>("0");
  const [courtType, setCourtType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [zipSearchCoords, setZipSearchCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isGeocodingZip, setIsGeocodingZip] = useState(false);

  // Initialize search query and filters from URL parameters
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
    }

    const city = searchParams.get("city");
    if (city) {
      setSelectedCity(city);
    }

    const state = searchParams.get("state");
    if (state) {
      setSelectedState(state);
    }
  }, [searchParams]);

  // Geocode ZIP code searches for proximity filtering
  useEffect(() => {
    const trimmedQuery = searchQuery.trim();

    // Check if query is a ZIP code
    if (isZipCode(trimmedQuery)) {
      setIsGeocodingZip(true);
      geocodeZipCode(trimmedQuery).then(result => {
        if (result) {
          setZipSearchCoords({ lat: result.latitude, lng: result.longitude });
          // Auto-switch to distance sorting for ZIP searches
          setSortBy("distance");
        } else {
          setZipSearchCoords(null);
        }
        setIsGeocodingZip(false);
      });
    } else {
      setZipSearchCoords(null);
    }
  }, [searchQuery]);

  // Get unique states and cities
  const states = useMemo(() => {
    const stateSet = new Set(allCourts.map(c => c.address.stateCode));
    return Array.from(stateSet).sort();
  }, [allCourts]);

  const cities = useMemo(() => {
    if (selectedState === "all") {
      const citySet = new Set(allCourts.map(c => c.address.city));
      return Array.from(citySet).sort();
    }
    const citySet = new Set(
      allCourts
        .filter(c => c.address.stateCode === selectedState)
        .map(c => c.address.city)
    );
    return Array.from(citySet).sort();
  }, [allCourts, selectedState]);

  // Filter courts based on search criteria
  const filteredCourts = useMemo(() => {
    let results = allCourts;

    // ZIP Code Proximity Search (50 miles)
    if (zipSearchCoords) {
      results = results
        .map(court => ({
          ...court,
          distance: calculateDistance(
            zipSearchCoords.lat,
            zipSearchCoords.lng,
            court.coordinates.latitude,
            court.coordinates.longitude
          ),
        }))
        .filter(court => court.distance <= 50); // 50 mile radius
    } else if (searchQuery && !isZipCode(searchQuery.trim())) {
      // Text search - split by commas and spaces to handle multi-term queries
      const query = searchQuery.toLowerCase().trim();
      // Split by comma, space, or both and filter out empty strings
      const searchTerms = query
        .split(/[,\s]+/)
        .filter(term => term.length > 0);

      results = results.filter(court => {
        // Combine all searchable text fields
        const searchableText = [
          court.name,
          court.address.city,
          court.address.state,
          court.address.stateCode,
          court.address.zipCode,
        ].join(' ').toLowerCase();

        // Match if ALL search terms are found somewhere in the searchable text
        return searchTerms.every(term => searchableText.includes(term));
      });
    }

    // State filter
    if (selectedState !== "all") {
      results = results.filter(court => court.address.stateCode === selectedState);
    }

    // City filter
    if (selectedCity !== "all") {
      results = results.filter(court => court.address.city === selectedCity);
    }

    // Rating filter
    if (minRating !== "0") {
      results = results.filter(court => court.rating.ratingValue >= parseFloat(minRating));
    }

    // Court type filter
    if (courtType !== "all") {
      results = results.filter(court => {
        const features = court.features.map(f => f.toLowerCase());
        if (courtType === "indoor") return features.includes("indoor");
        if (courtType === "outdoor") return features.includes("outdoor");
        return true;
      });
    }

    // Sort results
    switch (sortBy) {
      case "distance":
        // Sort by distance (only works if distance data exists)
        results.sort((a, b) => {
          const distA = (a as any).distance || Infinity;
          const distB = (b as any).distance || Infinity;
          return distA - distB;
        });
        break;
      case "rating":
        results.sort((a, b) => b.rating.ratingValue - a.rating.ratingValue);
        break;
      case "price-low":
        results.sort((a, b) => a.pricing.offPeakHourlyRate - b.pricing.offPeakHourlyRate);
        break;
      case "price-high":
        results.sort((a, b) => b.pricing.offPeakHourlyRate - a.pricing.offPeakHourlyRate);
        break;
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return results;
  }, [allCourts, searchQuery, selectedState, selectedCity, minRating, courtType, sortBy]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedState("all");
    setSelectedCity("all");
    setMinRating("0");
    setCourtType("all");
    setSortBy("rating");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Search Padel Clubs</h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect padel club from {allCourts.length} facilities nationwide
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search Input */}
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="search"
                      placeholder="Court name, city, state..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* State Filter */}
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="All states" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All states</SelectItem>
                      {states.map(state => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* City Filter */}
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger id="city">
                      <SelectValue placeholder="All cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All cities</SelectItem>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating Filter */}
                <div className="space-y-2">
                  <Label htmlFor="rating">Minimum Rating</Label>
                  <Select value={minRating} onValueChange={setMinRating}>
                    <SelectTrigger id="rating">
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any rating</SelectItem>
                      <SelectItem value="4.0">4.0+ stars</SelectItem>
                      <SelectItem value="4.5">4.5+ stars</SelectItem>
                      <SelectItem value="4.8">4.8+ stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Court Type Filter */}
                <div className="space-y-2">
                  <Label htmlFor="type">Court Type</Label>
                  <Select value={courtType} onValueChange={setCourtType}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="indoor">Indoor</SelectItem>
                      <SelectItem value="outdoor">Outdoor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleReset}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {filteredCourts.length} {filteredCourts.length === 1 ? 'Club' : 'Clubs'} Found
                </h2>
                <p className="text-sm text-muted-foreground">
                  {searchQuery && `Results for "${searchQuery}"`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm whitespace-nowrap">
                  Sort by:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort" className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {zipSearchCoords && (
                      <SelectItem value="distance">Distance (Nearest First)</SelectItem>
                    )}
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredCourts.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  No clubs found matching your criteria
                </p>
                <Button onClick={handleReset}>
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCourts.map((court) => (
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
                            {(court as any).distance && (
                              <Badge variant="secondary" className="ml-2">
                                <Navigation className="w-3 h-3 mr-1" />
                                {(court as any).distance.toFixed(1)} mi
                              </Badge>
                            )}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Search Padel Clubs</h1>
              <p className="text-lg text-muted-foreground">
                Loading search...
              </p>
            </div>
          </div>
        </section>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}
