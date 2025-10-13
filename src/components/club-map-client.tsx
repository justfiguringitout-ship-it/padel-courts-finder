"use client";

import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// Dynamic import to avoid SSR issues with Google Maps
const ClubMap = dynamic(() => import("@/components/club-map").then(mod => ({ default: mod.ClubMap })), {
  ssr: false,
  loading: () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] flex items-center justify-center bg-muted rounded-lg">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </CardContent>
    </Card>
  ),
});

interface ClubMapClientProps {
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

export function ClubMapClient({ name, address, coordinates, googleMapsUrl }: ClubMapClientProps) {
  return <ClubMap name={name} address={address} coordinates={coordinates} googleMapsUrl={googleMapsUrl} />;
}
