"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { isPlausibleUSCoordinate } from "@/lib/map-coordinates";

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

// Padding (px) kept between the outermost pins and the map edge.
const FIT_PADDING = 48;
// Never open closer than this, so one club (or a tight cluster) does not land
// at street level. Users can still zoom in further themselves.
const MAX_FIT_ZOOM = 13;

/**
 * After the initial fit, pull the camera back to MAX_FIT_ZOOM if fitBounds
 * zoomed in tighter than that. Runs once per map load.
 */
function CapInitialZoom({ maxZoom }: { maxZoom: number }) {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    let done = false;
    const cap = () => {
      if (done) return;
      const zoom = map.getZoom();
      if (zoom === undefined) return;
      done = true;
      if (zoom > maxZoom) map.setZoom(maxZoom);
    };
    const listener = map.addListener("idle", () => {
      cap();
      listener.remove();
    });
    return () => listener.remove();
  }, [map, maxZoom]);
  return null;
}

interface ClubsMapProps {
  clubs: Club[];
  title?: string;
  description?: string;
}

export function ClubsMap({ clubs, title = "Club Locations", description }: ClubsMapProps) {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Drop clubs with missing, (0, 0) or non-US coordinates: they would crash
  // the map or drag the fitted bounds out to the whole world. Keep each club's
  // position in the original list so pin numbers still match the page order.
  const validClubs = clubs
    .map((club, index) => ({ club, number: index + 1 }))
    .filter(({ club }) =>
      isPlausibleUSCoordinate(club.coordinates?.latitude, club.coordinates?.longitude)
    );

  if (!apiKey || apiKey === "YOUR_API_KEY_HERE" || validClubs.length === 0) {
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
              {!apiKey || apiKey === "YOUR_API_KEY_HERE"
                ? "Map preview unavailable - Google Maps API key not configured"
                : "Map preview unavailable"}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Open the map on the box that contains every valid club. A single club (or
  // several at the same spot) has no area to fit, so center on it instead.
  const lats = validClubs.map(({ club }) => club.coordinates.latitude);
  const lngs = validClubs.map(({ club }) => club.coordinates.longitude);
  const bounds = {
    north: Math.max(...lats),
    south: Math.min(...lats),
    east: Math.max(...lngs),
    west: Math.min(...lngs),
  };
  const isSinglePoint = bounds.north === bounds.south && bounds.east === bounds.west;
  const cameraProps = isSinglePoint
    ? { defaultCenter: { lat: bounds.north, lng: bounds.east }, defaultZoom: MAX_FIT_ZOOM }
    : { defaultBounds: { ...bounds, padding: FIT_PADDING } };

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
              {...cameraProps}
              mapId="padel-clubs-map"
              gestureHandling="cooperative"
              disableDefaultUI={false}
            >
              {!isSinglePoint && <CapInitialZoom maxZoom={MAX_FIT_ZOOM} />}
              {validClubs.map(({ club, number }) => (
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
                    glyph={`${number}`}
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
