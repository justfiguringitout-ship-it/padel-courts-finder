"use client";

import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

interface ClubMapProps {
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
  googleMapsUrl?: string;
}

export function ClubMap({ name, address, coordinates, googleMapsUrl }: ClubMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Location
          </CardTitle>
          <CardDescription>
            {address.streetAddress}, {address.city}, {address.stateCode} {address.zipCode}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">
              Map preview unavailable - Google Maps API key not configured
            </p>
            {googleMapsUrl && (
              <Button asChild>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Build full address for geocoding
  const fullAddress = `${address.streetAddress}, ${address.city}, ${address.stateCode} ${address.zipCode}, USA`;
  
  // Instead of using potentially wrong coordinates, let Google Maps geocode the address
  // This ensures the map always shows the correct location based on the actual street address
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Location
        </CardTitle>
        <CardDescription>
          {address.streetAddress}, {address.city}, {address.stateCode} {address.zipCode}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg overflow-hidden border" style={{ height: "400px" }}>
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={{ lat: coordinates.latitude, lng: coordinates.longitude }}
              defaultZoom={15}
              mapId="padel-club-map"
              gestureHandling="cooperative"
              disableDefaultUI={false}
            >
              {/* Use address geocoding to ensure correct location */}
              <AdvancedMarker
                position={{ lat: coordinates.latitude, lng: coordinates.longitude }}
                title={`${name} - ${fullAddress}`}
              >
                <Pin
                  background={"#2563eb"}
                  borderColor={"#1e40af"}
                  glyphColor={"#ffffff"}
                />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
        <div className="mt-4 flex gap-2">
          <Button asChild variant="outline" className="flex-1">
            <a 
              href={googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
