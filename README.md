# Padel Directory - USA

A comprehensive database of padel courts across the United States, scraped from official sources and formatted for easy integration.

## 🎾 What's Included

- **48 Padel Courts** across 11 states
- Full contact information (address, phone, email)
- Operating hours for each venue
- Ratings and review counts
- Detailed descriptions
- TypeScript interfaces for type-safe development

## 📊 Quick Stats

- **Total Courts**: 48
- **States Covered**: 11
- **Average Rating**: 4.73/5.0 ⭐
- **Total Reviews**: 1,500+
- **Top State**: Florida (25 courts, 52%)

## 🗂️ Project Structure

```
├── src/
│   ├── types/
│   │   └── padel-court.ts      # TypeScript interfaces
│   └── data/
│       └── padel-courts.ts     # Complete database
├── SCRAPING_SUMMARY.md         # Detailed scraping report
└── README.md                   # This file
```

## 🚀 Usage

### Import the Data

```typescript
import { padelCourts, courtsByState, topRatedCourts, stats } from './src/data/padel-courts';
```

### Find Courts by State

```typescript
// Get all Florida courts
const floridaCourts = courtsByState['FL'];
console.log(`Florida has ${floridaCourts.length} courts`);

// Get all New York courts
const nyCourts = courtsByState['NY'];
```

### Search by City

```typescript
// Find courts in Miami
const miamiCourts = padelCourts.filter(court => 
  court.city.toLowerCase().includes('miami')
);
```

### Filter by Rating

```typescript
// Get only 5-star courts
const fiveStarCourts = padelCourts.filter(court => court.rating === 5.0);

// Get highly-rated courts with significant reviews
const bestCourts = padelCourts.filter(court => 
  court.rating >= 4.8 && court.reviewCount >= 20
);
```

### Get Statistics

```typescript
console.log(stats);
// Output:
// {
//   totalCourts: 48,
//   averageRating: 4.73,
//   totalReviews: 1500+,
//   stateCount: 11,
//   stateDistribution: [
//     { state: 'FL', count: 25, percentage: '52.1%' },
//     { state: 'TX', count: 4, percentage: '8.3%' },
//     ...
//   ]
// }
```

## 📍 Geographic Coverage

### States with Padel Courts

| State | Courts | Percentage |
|-------|--------|------------|
| Florida (FL) | 25 | 52.1% |
| Texas (TX) | 4 | 8.3% |
| California (CA) | 3 | 6.3% |
| New York (NY) | 2 | 4.2% |
| Tennessee (TN) | 2 | 4.2% |
| Arizona (AZ) | 2 | 4.2% |
| Others | 10 | 20.8% |

## 🏆 Featured Courts

### Highest Rated
1. **Padel Haus Nashville** - 5.0⭐ (25 reviews)
2. **Cube Padel Houston** - 5.0⭐ (30 reviews)
3. **TEMPO Padel** - 5.0⭐ (62 reviews)

### Most Reviewed
1. **Ultra Padel Club** (Miami) - 231 reviews
2. **Open Padel Club by Lasaigues** - 129 reviews
3. **Padel Haus Dumbo** (Brooklyn) - 128 reviews

### Largest Facilities
1. **Urban Padel** (Miami) - 12 courts, 65,820 sq ft indoor
2. **Padel Alley** (Tucson) - 8 padel + 4 pickleball courts

## 🎯 Data Quality

- **Source**: padel.us (official US padel directory)
- **Scraping Date**: October 2025
- **Validation**: 92.3% success rate (48/52 attempted)
- **Confidence**: ⭐⭐⭐⭐⭐ HIGH
- **Method**: Automated web scraping via Firecrawl API

## 📝 Data Fields

Each court entry includes:
- Unique ID
- Name
- Complete address (street, city, state, ZIP)
- Contact info (phone, email when available)
- Rating & review count
- Full weekly schedule
- Description
- Optional: website, features, coordinates

## 🔄 Updates

This database represents a snapshot as of October 2025. The padel landscape in the US is growing rapidly. For the most current information, verify directly with venues.

## 📄 License

Data sourced from publicly available information on padel.us. Use responsibly and verify critical information before relying on it.

## 🤝 Contributing

To add or update court information:
1. Verify the information is accurate and current
2. Update the `padelCourts` array in `src/data/padel-courts.ts`
3. Follow the existing TypeScript interface structure

## 📞 Need More Data?

This database can be extended with:
- Court type (indoor/outdoor)
- Number of courts per facility
- Pricing information
- Amenities (showers, lockers, pro shop, etc.)
- Coaching availability
- Tournament schedules
- Photos and galleries

---

**Built with**: Firecrawl API + TypeScript  
**Last Updated**: October 10, 2025  
**Courts**: 48 venues  
**Coverage**: Coast to coast 🇺🇸
