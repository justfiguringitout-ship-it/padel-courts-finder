# Google Sheets Data Import Guide

This guide explains how to import your padel court data from Google Sheets into the application.

## Overview

The application currently uses sample data from `src/lib/court-data.ts`. You have two options to integrate your Google Sheets data:

1. **Manual Export (Recommended for initial setup)** - Export CSV and convert to TypeScript
2. **Automated Sync (Advanced)** - Use Google Sheets API to fetch data at build time

---

## Option 1: Manual Export (Quickest Start)

### Step 1: Prepare Your Google Sheet

Your Google Sheet should have columns matching the `PadelCourt` interface structure:

#### Required Columns:
- `id` - Unique identifier (e.g., "miami-padel-club-001")
- `slug` - URL-friendly name (e.g., "miami-padel-club")
- `name` - Court name (e.g., "Miami Padel Club")
- `description` - Long description (300-500 words)
- `streetAddress`
- `city`
- `state` (full name, e.g., "Florida")
- `stateCode` (e.g., "FL")
- `zipCode`
- `phone`
- `latitude`
- `longitude`
- `totalCourts`
- `indoorCourts`
- `outdoorCourts`
- `courtSurface`
- `lighting`
- `peakHourlyRate`
- `offPeakHourlyRate`

#### Optional Columns:
- `email`
- `website`
- `googleMapsPlaceId`
- `googleMapsUrl`
- `courtDimensions`
- `equipmentQuality`
- `amenities` (comma-separated)
- `features` (comma-separated)
- `parkingInstructions`
- `cancellationPolicy`
- `bookingUrl`

### Step 2: Export as CSV

1. Open your Google Sheet
2. Go to **File** → **Download** → **Comma Separated Values (.csv)**
3. Save to your computer (e.g., `padel-courts.csv`)

### Step 3: Convert CSV to TypeScript

Use this Node.js script to convert your CSV to the TypeScript format:

```bash
# Install csv-parser
npm install csv-parser
```

Create `scripts/import-courts.js`:

```javascript
const fs = require('fs');
const csv = require('csv-parser');

const courts = [];

fs.createReadStream('padel-courts.csv')
  .pipe(csv())
  .on('data', (row) => {
    const court = {
      id: row.id,
      slug: row.slug,
      name: row.name,
      description: row.description,
      address: {
        streetAddress: row.streetAddress,
        city: row.city,
        state: row.state,
        stateCode: row.stateCode,
        zipCode: row.zipCode,
        country: "United States",
        countryCode: "US",
      },
      phone: row.phone,
      email: row.email || undefined,
      website: row.website || undefined,
      coordinates: {
        latitude: parseFloat(row.latitude),
        longitude: parseFloat(row.longitude),
      },
      googleMapsPlaceId: row.googleMapsPlaceId || undefined,
      googleMapsUrl: row.googleMapsUrl || undefined,
      facility: {
        totalCourts: parseInt(row.totalCourts),
        indoorCourts: parseInt(row.indoorCourts),
        outdoorCourts: parseInt(row.outdoorCourts),
        courtSurface: row.courtSurface,
        lighting: row.lighting,
        courtDimensions: row.courtDimensions || undefined,
        equipmentQuality: row.equipmentQuality || undefined,
      },
      amenities: row.amenities ? row.amenities.split(',').map(a => a.trim()) : [],
      features: row.features ? row.features.split(',').map(f => f.trim()) : [],
      pricing: {
        peakHourlyRate: parseFloat(row.peakHourlyRate),
        offPeakHourlyRate: parseFloat(row.offPeakHourlyRate),
        priceRange: `$${row.offPeakHourlyRate}-$${row.peakHourlyRate}`,
      },
      hours: [
        { dayOfWeek: "Monday", opens: row.mondayOpen || "06:00", closes: row.mondayClose || "22:00" },
        { dayOfWeek: "Tuesday", opens: row.tuesdayOpen || "06:00", closes: row.tuesdayClose || "22:00" },
        { dayOfWeek: "Wednesday", opens: row.wednesdayOpen || "06:00", closes: row.wednesdayClose || "22:00" },
        { dayOfWeek: "Thursday", opens: row.thursdayOpen || "06:00", closes: row.thursdayClose || "22:00" },
        { dayOfWeek: "Friday", opens: row.fridayOpen || "06:00", closes: row.fridayClose || "22:00" },
        { dayOfWeek: "Saturday", opens: row.saturdayOpen || "07:00", closes: row.saturdayClose || "22:00" },
        { dayOfWeek: "Sunday", opens: row.sundayOpen || "07:00", closes: row.sundayClose || "22:00" },
      ],
      images: [
        {
          url: row.imageUrl1 || "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=800&fit=crop",
          alt: `${row.name} - Main court view`,
          isPrimary: true,
          width: 1200,
          height: 800,
        },
      ],
      heroImage: row.heroImage || row.imageUrl1,
      rating: {
        ratingValue: parseFloat(row.ratingValue) || 4.5,
        reviewCount: parseInt(row.reviewCount) || 0,
        bestRating: 5,
        worstRating: 1,
      },
      reviews: [], // Will be populated from Google Maps API
      parkingInstructions: row.parkingInstructions || undefined,
      cancellationPolicy: row.cancellationPolicy || undefined,
      bookingUrl: row.bookingUrl || undefined,
      isActive: true,
      lastUpdated: new Date().toISOString().split('T')[0],
    };

    courts.push(court);
  })
  .on('end', () => {
    // Generate TypeScript file
    const tsContent = `// AUTO-GENERATED FROM GOOGLE SHEETS
// Last updated: ${new Date().toISOString()}

import { PadelCourt } from "@/types/court";

export const courts: PadelCourt[] = ${JSON.stringify(courts, null, 2)};

// ... (copy helper functions from original court-data.ts)
`;

    fs.writeFileSync('src/lib/court-data-imported.ts', tsContent);
    console.log(`✅ Imported ${courts.length} courts to src/lib/court-data-imported.ts`);
  });
```

Run the script:

```bash
node scripts/import-courts.js
```

### Step 4: Use Imported Data

Replace the import in `src/app/courts/[slug]/page.tsx`:

```typescript
// Change from:
import { getCourtBySlug, ... } from "@/lib/court-data";

// To:
import { getCourtBySlug, ... } from "@/lib/court-data-imported";
```

---

## Option 2: Automated Sync with Google Sheets API

For automatic updates at build time, use the Google Sheets API.

### Step 1: Set Up Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable **Google Sheets API**:
   - Go to **APIs & Services** → **Library**
   - Search for "Google Sheets API"
   - Click **Enable**

### Step 2: Create Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Name it "Padel Directory Import"
4. Click **Create and Continue**
5. Skip optional steps, click **Done**
6. Click on the service account email
7. Go to **Keys** tab
8. Click **Add Key** → **Create New Key** → **JSON**
9. Download the JSON file

### Step 3: Share Your Sheet

1. Open your Google Sheet
2. Click **Share** button
3. Add the service account email (found in the JSON file)
4. Give it **Viewer** permissions

### Step 4: Add Environment Variables

Create `.env.local`:

```bash
GOOGLE_SHEETS_API_KEY="your-api-key-here"
GOOGLE_SHEET_ID="your-sheet-id-here"
# Sheet ID is in the URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
```

### Step 5: Install Dependencies

```bash
npm install googleapis
```

### Step 6: Create Fetch Script

Create `src/lib/fetch-courts.ts`:

```typescript
import { google } from 'googleapis';
import { PadelCourt } from '@/types/court';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const RANGE = 'Courts!A2:Z'; // Adjust based on your sheet

export async function fetchCourtsFromSheet(): Promise<PadelCourt[]> {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: RANGE,
  });

  const rows = response.data.values;
  if (!rows || rows.length === 0) {
    return [];
  }

  return rows.map((row) => ({
    // Map row indices to court properties
    // Adjust indices based on your sheet columns
    id: row[0],
    slug: row[1],
    name: row[2],
    // ... continue mapping
  }));
}
```

### Step 7: Use at Build Time

Update `src/lib/court-data.ts`:

```typescript
import { fetchCourtsFromSheet } from './fetch-courts';

// Use at build time
export async function getCourts() {
  if (process.env.NODE_ENV === 'production') {
    return await fetchCourtsFromSheet();
  }
  // Use local data in development
  return courts;
}
```

---

## Google Sheets Template

Here's a template structure for your Google Sheet:

| id | slug | name | description | streetAddress | city | state | stateCode | zipCode | phone | latitude | longitude | totalCourts | indoorCourts | outdoorCourts | courtSurface | lighting | peakHourlyRate | offPeakHourlyRate | amenities | features |
|----|------|------|-------------|---------------|------|-------|-----------|---------|-------|----------|-----------|-------------|--------------|---------------|--------------|----------|----------------|-------------------|-----------|----------|
| miami-padel-club-001 | miami-padel-club | Miami Padel Club | Welcome to... | 1250 S Miami Ave | Miami | Florida | FL | 33130 | +1 (305) 555-7235 | 25.7617 | -80.1918 | 6 | 4 | 2 | Glass walls, artificial turf | LED floodlights | 65 | 45 | Free Parking,Pro Shop,WiFi | Climate Controlled,Glass Walls |

**Download Template:**
[Click here to copy the Google Sheets template](#) *(Create and share your template)*

---

## Tips

1. **Use consistent formatting** - Keep phone numbers in the same format
2. **Validate coordinates** - Use [latlong.net](https://www.latlong.net/) to get accurate coordinates
3. **Test with sample data first** - Import a few courts to test before doing all
4. **Keep descriptions SEO-friendly** - Include city name, amenities, unique features
5. **Update regularly** - Set a schedule to refresh data (weekly/monthly)

---

## Troubleshooting

### Issue: Import script fails with parsing error
- **Solution:** Check for commas in your descriptions (they break CSV). Use quotes around fields with commas.

### Issue: Coordinates not working on map
- **Solution:** Ensure latitude and longitude are decimal numbers, not degrees/minutes/seconds

### Issue: Images not loading
- **Solution:** Make sure image URLs are publicly accessible. Use Unsplash, Cloudinary, or your own CDN.

---

## Next Steps

After importing your data:
1. Set up Google Maps API for reviews extraction (see `GOOGLE_MAPS_SETUP.md`)
2. Add real images to each court
3. Test all pages work correctly
4. Deploy to production

---

## Need Help?

If you run into issues with data import, check:
- TypeScript interface matches your data structure (`src/types/court.ts`)
- All required fields are present
- Data types are correct (numbers as numbers, not strings)
