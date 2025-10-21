# Padel Directory Usage Examples

## Quick Start

```typescript
import { 
  padelCourts, 
  courtsByState, 
  topRatedCourts, 
  stats 
} from './src/data/padel-courts';
```

## Common Queries

### 1. Find All Courts in a Specific State

```typescript
// Florida courts
const floridaCourts = courtsByState['FL'];
console.log(`${floridaCourts.length} courts in Florida`);

// California courts
const californiaCourts = courtsByState['CA'];
```

### 2. Search by City

```typescript
// All Miami courts
const miamiCourts = padelCourts.filter(court => 
  court.city.toLowerCase().includes('miami')
);

// Houston courts
const houstonCourts = padelCourts.filter(court => 
  court.city === 'Houston'
);
```

### 3. Filter by Rating

```typescript
// Only 5-star courts
const perfectRating = padelCourts.filter(court => court.rating === 5.0);

// Highly rated (4.5+)
const highlyRated = padelCourts.filter(court => court.rating >= 4.5);

// Top rated with significant reviews
const bestOverall = padelCourts.filter(court => 
  court.rating >= 4.8 && court.reviewCount >= 20
);
```

### 4. Search by Contact Info

```typescript
// Courts with email
const courtsWithEmail = padelCourts.filter(court => court.email);

// Get phone numbers for a city
const miamiPhones = padelCourts
  .filter(court => court.city.includes('Miami'))
  .map(court => ({ name: court.name, phone: court.phone }));
```

### 5. Find Courts by Operating Hours

```typescript
// Courts open late (after 22:00)
const lateCourts = padelCourts.filter(court => 
  court.openingHours.friday.includes('23h')
);

// Weekend warriors (courts open early on Saturday)
const earlyWeekend = padelCourts.filter(court => 
  court.openingHours.saturday.startsWith('6h') || 
  court.openingHours.saturday.startsWith('7h')
);
```

### 6. Geographic Clustering

```typescript
// Group by major metropolitan areas
const metroAreas = {
  'Miami Metro': padelCourts.filter(c => 
    ['Miami', 'Miami Beach', 'North Miami', 'Hialeah', 'Fort Lauderdale', 'Hollywood', 'Pembroke Pines', 'Coconut Creek'].includes(c.city)
  ),
  'Greater Houston': padelCourts.filter(c => 
    c.city === 'Houston' || c.city === 'The Woodlands'
  ),
  'Los Angeles Area': padelCourts.filter(c => 
    ['Los Angeles', 'Sherman Oaks', 'Oceanside'].includes(c.city)
  ),
  'New York Metro': padelCourts.filter(c => 
    ['Brooklyn', 'New Rochelle'].includes(c.city)
  )
};
```

### 7. Sort by Popularity

```typescript
// Most reviewed courts
const mostReviewed = [...padelCourts]
  .sort((a, b) => b.reviewCount - a.reviewCount)
  .slice(0, 10);

// Highest rated with 10+ reviews
const topQuality = [...padelCourts]
  .filter(court => court.reviewCount >= 10)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 10);
```

### 8. Find Nearby Courts (if you have coordinates)

```typescript
// Example: Find courts within 50 miles of a location
function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Find courts near Miami (25.7617° N, 80.1918° W)
const nearbyCourts = padelCourts
  .filter(court => court.coordinates)
  .map(court => ({
    ...court,
    distance: haversineDistance(25.7617, -80.1918, court.coordinates!.lat, court.coordinates!.lng)
  }))
  .filter(court => court.distance <= 50)
  .sort((a, b) => a.distance - b.distance);
```

### 9. Generate Reports

```typescript
// State-by-state report
Object.entries(courtsByState).forEach(([state, courts]) => {
  const avgRating = courts.reduce((sum, c) => sum + c.rating, 0) / courts.length;
  console.log(`${state}: ${courts.length} courts, avg rating: ${avgRating.toFixed(2)}⭐`);
});

// Quality report
const qualityReport = {
  excellent: padelCourts.filter(c => c.rating >= 4.8).length,
  good: padelCourts.filter(c => c.rating >= 4.5 && c.rating < 4.8).length,
  average: padelCourts.filter(c => c.rating >= 4.0 && c.rating < 4.5).length,
  poor: padelCourts.filter(c => c.rating < 4.0).length
};
```

### 10. Export Formats

```typescript
// Export to CSV format
function exportToCSV() {
  const headers = ['ID', 'Name', 'City', 'State', 'Phone', 'Rating', 'Reviews'];
  const rows = padelCourts.map(court => [
    court.id,
    court.name,
    court.city,
    court.state,
    court.phone,
    court.rating,
    court.reviewCount
  ]);
  
  const csv = [headers, ...rows]
    .map(row => row.join(','))
    .join('\n');
    
  return csv;
}

// Export to JSON
function exportToJSON() {
  return JSON.stringify(padelCourts, null, 2);
}

// Export to markdown table
function exportToMarkdown() {
  const header = '| Name | City, State | Phone | Rating | Reviews |\n|------|-------------|-------|--------|---------|';
  const rows = padelCourts.map(court => 
    `| ${court.name} | ${court.city}, ${court.state} | ${court.phone} | ${court.rating}⭐ | ${court.reviewCount} |`
  );
  return [header, ...rows].join('\n');
}
```

## Advanced Use Cases

### Build a Court Finder App

```typescript
interface SearchCriteria {
  state?: string;
  city?: string;
  minRating?: number;
  maxDistance?: number;
  openNow?: boolean;
}

function findCourts(criteria: SearchCriteria) {
  let results = padelCourts;
  
  if (criteria.state) {
    results = results.filter(c => c.state === criteria.state);
  }
  
  if (criteria.city) {
    results = results.filter(c => 
      c.city.toLowerCase().includes(criteria.city.toLowerCase())
    );
  }
  
  if (criteria.minRating) {
    results = results.filter(c => c.rating >= criteria.minRating);
  }
  
  return results;
}

// Example usage
const bestFloridaCourts = findCourts({
  state: 'FL',
  minRating: 4.7
});
```

### Generate Recommendations

```typescript
function recommendCourts(userLocation: string, minRating = 4.5) {
  return padelCourts
    .filter(court => 
      court.city.toLowerCase().includes(userLocation.toLowerCase()) ||
      court.state.toLowerCase().includes(userLocation.toLowerCase())
    )
    .filter(court => court.rating >= minRating)
    .sort((a, b) => {
      // Sort by rating first, then by review count
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return b.reviewCount - a.reviewCount;
    })
    .slice(0, 5);
}

// Get top 5 recommendations for Miami
const miamiRecommendations = recommendCourts('Miami', 4.5);
```

### Analytics Dashboard Data

```typescript
const dashboardData = {
  // Total counts
  totalCourts: padelCourts.length,
  totalStates: Object.keys(courtsByState).length,
  
  // Ratings breakdown
  ratingsDistribution: {
    '5.0': padelCourts.filter(c => c.rating === 5.0).length,
    '4.5-4.9': padelCourts.filter(c => c.rating >= 4.5 && c.rating < 5.0).length,
    '4.0-4.4': padelCourts.filter(c => c.rating >= 4.0 && c.rating < 4.5).length,
    'Below 4.0': padelCourts.filter(c => c.rating < 4.0).length,
  },
  
  // Top performers
  topByRating: [...padelCourts].sort((a, b) => b.rating - a.rating).slice(0, 10),
  topByReviews: [...padelCourts].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 10),
  
  // State rankings
  stateRankings: Object.entries(courtsByState).map(([state, courts]) => ({
    state,
    count: courts.length,
    avgRating: courts.reduce((sum, c) => sum + c.rating, 0) / courts.length,
    totalReviews: courts.reduce((sum, c) => sum + c.reviewCount, 0)
  })).sort((a, b) => b.count - a.count)
};
```

## Example React Component

```tsx
import React from 'react';
import { padelCourts, PadelCourt } from './src/data/padel-courts';

export function CourtFinder() {
  const [state, setState] = React.useState('');
  const [filtered, setFiltered] = React.useState<PadelCourt[]>(padelCourts);
  
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setFiltered(
      selectedState 
        ? padelCourts.filter(c => c.state === selectedState)
        : padelCourts
    );
  };
  
  return (
    <div>
      <select value={state} onChange={handleStateChange}>
        <option value="">All States</option>
        {Object.keys(courtsByState).map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      
      <div>
        {filtered.map(court => (
          <div key={court.id}>
            <h3>{court.name}</h3>
            <p>{court.city}, {court.state}</p>
            <p>⭐ {court.rating} ({court.reviewCount} reviews)</p>
            <p>📞 {court.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Command Line Tools

### Search from Terminal

```bash
# Search for a court
grep -i "ultra padel" src/data/padel-courts.ts

# Find all Texas courts
grep "state: \"TX\"" src/data/padel-courts.ts

# Count courts per state
grep "state:" src/data/padel-courts.ts | sort | uniq -c
```

## API Integration Example

```typescript
// Create a simple REST API endpoint
app.get('/api/courts', (req, res) => {
  const { state, city, minRating } = req.query;
  
  let results = padelCourts;
  
  if (state) {
    results = results.filter(c => c.state === state);
  }
  
  if (city) {
    results = results.filter(c => 
      c.city.toLowerCase().includes(String(city).toLowerCase())
    );
  }
  
  if (minRating) {
    results = results.filter(c => c.rating >= Number(minRating));
  }
  
  res.json({
    count: results.length,
    courts: results
  });
});

// Example calls:
// GET /api/courts?state=FL
// GET /api/courts?city=Miami&minRating=4.5
// GET /api/courts?state=CA&minRating=4.8
```

## Data Visualization Ideas

### 1. Map Visualization
- Plot all courts on an interactive map
- Color code by rating
- Size markers by review count
- Add hover info with details

### 2. Charts & Graphs
- Bar chart: Courts per state
- Pie chart: Rating distribution
- Line chart: Average rating by state
- Heat map: Geographic density

### 3. Comparison Tables
- Side-by-side court comparisons
- Ranking tables by various metrics
- Best courts in each state

## Integration Examples

### Next.js Page

```tsx
import { padelCourts } from '@/data/padel-courts';

export default function CourtsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Find Padel Courts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {padelCourts.map(court => (
          <div key={court.id} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold">{court.name}</h2>
            <p className="text-gray-600">{court.city}, {court.state}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-500">⭐ {court.rating}</span>
              <span className="text-gray-500">({court.reviewCount})</span>
            </div>
            <p className="mt-2 text-sm">{court.description}</p>
            <a 
              href={`tel:${court.phone}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Call {court.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Search Component

```tsx
'use client';

import { useState } from 'react';
import { padelCourts } from '@/data/padel-courts';

export function CourtSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const results = padelCourts.filter(court =>
    court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    court.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    court.state.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search courts by name, city, or state..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />
      
      <p className="mt-2 text-gray-600">
        Found {results.length} court{results.length !== 1 ? 's' : ''}
      </p>
      
      <div className="mt-4 space-y-4">
        {results.map(court => (
          <div key={court.id} className="p-4 border rounded">
            <h3 className="font-bold">{court.name}</h3>
            <p>{court.address}</p>
            <p>{court.city}, {court.state} {court.zipCode}</p>
            <p className="mt-2">⭐ {court.rating} ({court.reviewCount} reviews)</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Database Statistics

```typescript
// Generate comprehensive stats
console.log('=== PADEL DIRECTORY STATISTICS ===');
console.log(`Total Courts: ${stats.totalCourts}`);
console.log(`Average Rating: ${stats.averageRating.toFixed(2)}⭐`);
console.log(`Total Reviews: ${stats.totalReviews}`);
console.log(`States Covered: ${stats.stateCount}`);
console.log('\nDistribution by State:');
stats.stateDistribution.forEach(({ state, count, percentage }) => {
  console.log(`  ${state}: ${count} courts (${percentage})`);
});
```

## Export Functions

```typescript
// Export to different formats
export const exporters = {
  toJSON: () => JSON.stringify(padelCourts, null, 2),
  
  toCSV: () => {
    const headers = 'ID,Name,Address,City,State,ZIP,Phone,Email,Rating,Reviews\n';
    const rows = padelCourts.map(c => 
      `${c.id},"${c.name}","${c.address}","${c.city}",${c.state},${c.zipCode},${c.phone},${c.email || ''},${c.rating},${c.reviewCount}`
    ).join('\n');
    return headers + rows;
  },
  
  toMarkdown: () => {
    const header = '| Name | Location | Rating | Contact |\n|------|----------|--------|---------|';
    const rows = padelCourts.map(c => 
      `| ${c.name} | ${c.city}, ${c.state} | ${c.rating}⭐ (${c.reviewCount}) | ${c.phone} |`
    );
    return [header, ...rows].join('\n');
  },
  
  toGeoJSON: () => ({
    type: 'FeatureCollection',
    features: padelCourts
      .filter(c => c.coordinates)
      .map(c => ({
        type: 'Feature',
        properties: {
          id: c.id,
          name: c.name,
          rating: c.rating,
          reviews: c.reviewCount,
          phone: c.phone
        },
        geometry: {
          type: 'Point',
          coordinates: [c.coordinates!.lng, c.coordinates!.lat]
        }
      }))
  })
};
```

## Quick Reference

### Most Useful Queries

```typescript
// 1. Best courts nationwide
const best = topRatedCourts.slice(0, 10);

// 2. Courts in your state
const myCourts = courtsByState['FL']; // Change to your state

// 3. Courts open now (example for Monday 8pm)
const openNow = padelCourts.filter(court => {
  const hours = court.openingHours.monday;
  // Parse hours and check if 20:00 (8pm) is within range
  return hours.includes('23h') || hours.includes('22h');
});

// 4. New courts (fewer reviews, high rating)
const newGems = padelCourts
  .filter(c => c.rating >= 4.8 && c.reviewCount < 20)
  .sort((a, b) => b.rating - a.rating);

// 5. Established courts (lots of reviews)
const established = padelCourts
  .filter(c => c.reviewCount >= 50)
  .sort((a, b) => b.reviewCount - a.reviewCount);
```

---

**Pro Tip**: All queries are type-safe thanks to TypeScript interfaces! Your IDE will provide autocomplete for all court properties.




