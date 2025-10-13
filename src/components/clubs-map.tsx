"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Club {
  id: string;
  slug: string;
  name: string;
  address: {
    streetAddress: string;
    city: string;
    stateCode: string;
    zipCode: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: {
    ratingValue: number;
    reviewCount: number;
  };
  pricing: {
    offPeakHourlyRate: number;
  };
  facility: {
    totalCourts: number;
  };
}

interface ClubsMapProps {
  clubs: Club[];
  title?: string;
  description?: string;
}

export function ClubsMap({ clubs, title = "Club Locations", description }: ClubsMapProps) {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            {title}
          </CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg p-8 text-center">
            <p className="text-muted-foreground">
              Map preview unavailable - Google Maps API key not configured
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Calculate center point of all clubs
  const centerLat = clubs.reduce((sum, club) => sum + club.coordinates.latitude, 0) / clubs.length;
  const centerLng = clubs.reduce((sum, club) => sum + club.coordinates.longitude, 0) / clubs.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="rounded-lg overflow-hidden border" style={{ height: "500px" }}>
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={{ lat: centerLat, lng: centerLng }}
              defaultZoom={clubs.length === 1 ? 15 : 10}
              mapId="padel-clubs-map"
              gestureHandling="cooperative"
              disableDefaultUI={false}
            >
              {clubs.map((club, index) => (
                <AdvancedMarker
                  key={club.id}
                  position={{ lat: club.coordinates.latitude, lng: club.coordinates.longitude }}
                  title={club.name}
                  onClick={() => setSelectedClub(club)}
                >
                  <Pin
                    background={"#2563eb"}
                    borderColor={"#1e40af"}
                    glyphColor={"#ffffff"}
                    glyph={`${index + 1}`}
                  />
                </AdvancedMarker>
              ))}

              {selectedClub && (
                <InfoWindow
                  position={{
                    lat: selectedClub.coordinates.latitude,
                    lng: selectedClub.coordinates.longitude,
                  }}
                  onCloseClick={() => setSelectedClub(null)}
                >
                  <div className="p-2 max-w-xs">
                    <h3 className="font-bold text-sm mb-1">{selectedClub.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {selectedClub.address.city}, {selectedClub.address.stateCode}
                    </div>
                    <div className="flex items-center gap-2 text-xs mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="font-medium">{selectedClub.rating.ratingValue}</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span>{selectedClub.facility.totalCourts} courts</span>
                    </div>
                    <div className="text-sm font-bold text-primary mb-2">
                      ${selectedClub.pricing.offPeakHourlyRate}/hr
                    </div>
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/courts/${selectedClub.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          Click on a marker to see club details
        </div>
      </CardContent>
    </Card>
  );
}
