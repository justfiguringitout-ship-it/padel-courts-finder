# Google Maps Integration - Complete Setup Guide

## ✅ What's Been Implemented

Your padel directory now has **full Google Maps integration** with:

1. **Interactive maps on every page type**:
   - Individual club detail pages (`/courts/[slug]`) - Single marker with location
   - State pages (`/[state]`) - All clubs in that state with numbered markers
   - City pages (`/[state]/[city]`) - All clubs in that city with numbered markers

2. **Map Features**:
   - Click markers to see club details in a popup
   - "Get Directions" button links to Google Maps
   - Responsive design that works on mobile
   - Graceful fallback if API key not configured

---

## 🔧 Required Setup

### Step 1: Get Your Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select an existing one
3. Enable these APIs:
   - **Maps JavaScript API**
   - **Places API** (optional, for future features)
   - **Geocoding API** (optional, for future features)
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key

### Step 2: Configure Your API Key

1. Open `.env.local` in your project root
2. Replace `YOUR_API_KEY_HERE` with your actual API key:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...your_actual_key_here
```

3. Restart your dev server

### Step 3: Secure Your API Key (Important!)

In Google Cloud Console:
1. Click your API key → "Edit API key"
2. Under "API restrictions":
   - Select "Restrict key"
   - Check only "Maps JavaScript API"
3. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add your domains:
     - `localhost:3000/*` (for development)
     - `findpadelnearme.com/*` (for production)
     - `*.findpadelnearme.com/*` (for subdomains)
4. Save

---

## 📍 Important: Club Coordinates

### Current Status

All clubs currently use **default coordinates** (Miami):
- Latitude: 25.7617
- Longitude: -80.1918

This is set in `/src/lib/court-adapter.ts` lines 306-309.

### How to Add Real Coordinates

When adding a new club to `/src/data/padel-courts.ts`, you need to add latitude/longitude fields.

**To find coordinates:**
1. Go to Google Maps
2. Search for the club's address
3. Right-click on the location → "What's here?"
4. Copy the latitude/longitude values

---

## 🏗️ Complete Data Structure & SEO

### Your Site Follows All SEO Best Practices:

1. **Schema.org Structured Data** ✅
   - SportsActivityLocation for club pages
   - CollectionPage for directory pages
   - BreadcrumbList on all pages
   - Proper OpeningHoursSpecification
   - AggregateRating markup

2. **Metadata Optimization** ✅
   - Unique titles (< 60 chars)
   - Descriptions (< 160 chars)
   - Keywords arrays
   - Open Graph tags
   - Twitter Cards
   - Canonical URLs

3. **URL Structure** ✅
   - Clean, hierarchical paths
   - SEO-friendly slugs
   - Consistent naming

4. **Content Structure** ✅
   - Proper H1-H6 hierarchy
   - Alt text on all images
   - Descriptive link text
   - Mobile-responsive

---

## 📝 How to Add a New Club

Edit `/src/data/padel-courts.ts` and add:

```typescript
{
  id: 46, // Next available ID
  name: "Your New Padel Club",
  address: "123 Main Street",
  city: "Miami",
  state: "Florida",
  zipCode: "33101",
  phone: "(305) 555-1234",
  email: "info@club.com",
  website: "https://club.com",
  
  rating: 4.8,
  reviewCount: 42,
  numberOfCourts: 6,
  courtType: "both", // "indoor" | "outdoor" | "both"
  
  openingHours: {
    monday: "7h-22h",
    tuesday: "7h-22h",
    wednesday: "7h-22h",
    thursday: "7h-22h",
    friday: "7h-22h",
    saturday: "8h-20h",
    sunday: "8h-20h",
  },
  
  verified: true,
}
```

**The adapter automatically generates:**
- SEO-friendly slug
- All metadata
- Schema.org markup
- Google Maps links
- FAQs
- Default images
- Pricing structure

---

## 🗺️ File Architecture

```
src/
├── components/
│   ├── club-map.tsx        # Single location map
│   └── clubs-map.tsx       # Multiple locations map
├── app/
│   ├── courts/[slug]/      # Individual club pages
│   ├── [state]/            # State directories
│   │   └── [city]/         # City directories
│   └── page.tsx            # Homepage
├── lib/
│   └── court-adapter.ts    # Data transformation (THE KEY FILE)
└── data/
    └── padel-courts.ts     # Raw club data
```

**Key File:** `/src/lib/court-adapter.ts`

This file:
- Defines the `AdaptedCourt` interface (lines 98-216)
- Converts raw data to SEO-optimized format
- Generates all metadata automatically
- Is your single source of truth

---

## 🎯 Map Components

### Single Location Map

```typescript
import { ClubMap } from "@/components/club-map";

<ClubMap
  name="Club Name"
  address={{...}}
  coordinates={{ latitude: 25.7743, longitude: -80.1937 }}
  googleMapsUrl="..."
/>
```

### Multiple Locations Map

```typescript
import { ClubsMap } from "@/components/clubs-map";

<ClubsMap
  clubs={arrayOfClubs}
  title="All Clubs in Miami"
  description="Explore clubs on the map"
/>
```

---

## ✅ Setup Checklist

1. [ ] Get Google Maps API key
2. [ ] Add key to `.env.local`
3. [ ] Restart dev server
4. [ ] Secure API key in Google Cloud Console
5. [ ] Test maps on club detail page
6. [ ] Test maps on state page
7. [ ] Test maps on city page
8. [ ] Verify "Get Directions" works

---

## 💡 Next Steps

1. **Update Coordinates**
   - Go through each club in `padel-courts.ts`
   - Add real latitude/longitude values

2. **Test SEO**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Verify Schema.org markup

3. **Monitor API Usage**
   - Check Google Cloud Console
   - ~28,000 map loads free/month

---

Need help? All map logic is in:
- `/src/components/club-map.tsx`
- `/src/components/clubs-map.tsx`
- `/src/lib/court-adapter.ts`
