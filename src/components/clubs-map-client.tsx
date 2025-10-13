"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";

// Dynamic import to avoid SSR issues with Google Maps
const ClubsMap = dynamic(() => import("@/components/clubs-map").then(mod => ({ default: mod.ClubsMap })), {
  ssr: false,
  loading: () => (
    <Card className="h-[500px] flex items-center justify-center">
      <p className="text-muted-foreground">Loading map...</p>
    </Card>
  ),
});

interface Club {
  id: string;
  name: string;
  slug: string;
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

interface ClubsMapClientProps {
  clubs: Club[];
  title: string;
  description: string;
}

export function ClubsMapClient({ clubs, title, description }: ClubsMapClientProps) {
  return <ClubsMap clubs={clubs} title={title} description={description} />;
}
