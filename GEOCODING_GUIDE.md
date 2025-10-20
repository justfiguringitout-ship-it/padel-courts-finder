# Geocoding Guide - Get Exact Coordinates for All Clubs

## 🎯 Goal
Get precise latitude/longitude coordinates for 110 clubs currently using city center fallbacks.

## 💰 Cost
- **Price**: $5 per 1,000 requests
- **Your need**: 110 clubs = **$0.55 total**
- **Google credits**: $200/month free
- **Actual cost**: **$0.00** (covered by free credits)

## ⏱️ Time
- **Duration**: ~2.5 minutes (1.2 seconds per club for rate limiting)

---

## 📋 Step-by-Step Instructions

### Step 1: Get Google Geocoding API Key (5 minutes)

1. **Go to Google Cloud Console**: https://console.cloud.google.com

2. **Create/Select Project**:
   - Click project dropdown at top
   - Click "New Project" (or use existing)
   - Name it: "Padel Courts Finder"

3. **Enable Geocoding API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Geocoding API"
   - Click "Enable"

4. **Create API Key**:
   - Go to "APIs & Services" → "Credentials"
   - Click "+ CREATE CREDENTIALS"
   - Select "API Key"
   - Copy the API key (looks like: `AIzaSyBxxxxxxxxxxxxxxxxxxxxxxx`)

5. **Restrict API Key** (Optional but recommended):
   - Click on the created key
   - Under "API restrictions" → Select "Restrict key"
   - Choose "Geocoding API"
   - Save

---

### Step 2: Test in Dry Run Mode (1 minute)

```bash
# Set your API key (replace with your actual key)
export GOOGLE_GEOCODING_API_KEY="AIzaSyBxxxxxxxxxxxxxxxxxxxxxxx"

# Test without making API calls
npx tsx scripts/geocode-clubs.ts
```

**Expected output:**
```
🗺️  Padel Courts Geocoding Script
=====================================

📊 Total clubs in database: 160
✅ Clubs with coordinates: 56
❌ Clubs missing coordinates: 110

💰 Estimated cost: $0.55
⏱️  Estimated time: 2 minutes

⚠️  DRY RUN MODE - No API calls will be made

Preview of clubs to geocode:
  ID 30: Club Name - Address, City, State
  ...
```

---

### Step 3: Run Actual Geocoding (3 minutes)

```bash
# Run the geocoding (makes real API calls)
npx tsx scripts/geocode-clubs.ts --run
```

**What happens:**
- Processes all 110 clubs (1.2 seconds each)
- Shows progress in real-time
- Saves results to `geocoded-results.json`
- Prints code to paste into `court-adapter.ts`

**Example output:**
```
🚀 Starting geocoding process...

[1/110] Geocoding: Pepper Padel Miami
        141 NE 13th Terrace, Miami, FL 33132
        ✅ 25.7856, -80.1923 (ROOFTOP)

[2/110] Geocoding: Padel MKE
        737 W Cleveland Ave, Milwaukee, WI 53215
        ✅ 43.0123, -87.9234 (RANGE_INTERPOLATED)

...

=====================================
📊 GEOCODING SUMMARY
=====================================

✅ Successfully geocoded: 109
❌ Failed: 1

💾 Results saved to: geocoded-results.json

=====================================
📝 CODE TO ADD TO coordinateMap
=====================================

Copy this into src/lib/court-adapter.ts coordinateMap:

  30: { latitude: 25.7856, longitude: -80.1923 }, // Pepper Padel, Miami, FL
  31: { latitude: 43.0123, longitude: -87.9234 }, // Padel MKE, Milwaukee, WI
  ...

✅ Geocoding complete!
💰 Actual cost: $0.55
```

---

### Step 4: Update coordinate-map.ts (2 minutes)

1. **Open the generated results:**
   ```bash
   cat geocoded-results.json
   ```

2. **Copy the coordinate map code** from the script output

3. **Paste into `src/lib/court-adapter.ts`**:
   - Find the `coordinateMap` object
   - Add the new coordinates (keep existing ones!)
   - Sort by ID number

---

### Step 5: Verify & Commit (2 minutes)

```bash
# Test the build
npm run build

# Check a few club pages to verify maps show correctly
npm run dev

# Commit the changes
git add src/lib/court-adapter.ts geocoded-results.json scripts/geocode-clubs.ts
git commit -m "Add precise coordinates for 110 clubs via Google Geocoding API

- Geocoded all clubs missing specific coordinates
- Replaced city center fallbacks with exact addresses
- Improves map accuracy and user trust
- Cost: $0.55 (covered by Google free credits)

Generated with Google Geocoding API"
```

---

## 🔍 How It Works

### Before Geocoding:
```typescript
// Club ID 53 - Padel X Miami
coordinates: getCityDefaultCoordinates("Miami", "FL")
// Returns: { lat: 25.7617, lng: -80.1918 } ← Miami city center
```

### After Geocoding:
```typescript
// Club ID 53 - Padel X Miami
53: { latitude: 25.7856, longitude: -80.1923 } // Actual street address!
```

---

## 📊 Confidence Levels

Google returns accuracy levels for each geocode:

| Level | Meaning | Accuracy |
|-------|---------|----------|
| **ROOFTOP** | Exact building location | ⭐⭐⭐⭐⭐ Perfect |
| **RANGE_INTERPOLATED** | Interpolated from address range | ⭐⭐⭐⭐ Excellent |
| **GEOMETRIC_CENTER** | Center of street/area | ⭐⭐⭐ Good |
| **APPROXIMATE** | City/zip code level | ⭐⭐ Fair |

**Expected breakdown:**
- ~70% ROOFTOP (exact building)
- ~25% RANGE_INTERPOLATED (very close)
- ~5% GEOMETRIC_CENTER (street-level)

---

## ⚠️ Troubleshooting

### "API key not set"
```bash
# Make sure you exported it in same terminal session
export GOOGLE_GEOCODING_API_KEY="your-key"
echo $GOOGLE_GEOCODING_API_KEY  # Should print your key
```

### "API not enabled"
- Go to Google Cloud Console
- Enable "Geocoding API"
- Wait 1-2 minutes for activation

### "Rate limit exceeded"
- Script already has 1.2s delay between requests
- Shouldn't happen with Google's 50 req/sec limit
- If it does, script will show error and continue

### "Invalid API key"
- Check for typos in API key
- Make sure key has Geocoding API enabled
- Check API restrictions aren't blocking requests

---

## 🎉 Expected Results

### Impact:
- ✅ 110 clubs get exact coordinates
- ✅ Maps show precise club locations
- ✅ Users can navigate directly to correct address
- ✅ Site looks more professional and trustworthy

### Before vs After:

**Before:**
- Padel MKE shows at Milwaukee city center (43.0389, -87.9065)
- Users click directions → "Navigate to downtown Milwaukee?"
- Confusing! ❌

**After:**
- Padel MKE shows at actual address (43.0123, -87.9234)
- Users click directions → "Navigate to 737 W Cleveland Ave"
- Perfect! ✅

---

## 💡 Pro Tips

1. **Save API key securely**:
   ```bash
   # Add to .env.local (already in .gitignore)
   echo "GOOGLE_GEOCODING_API_KEY=your-key" >> .env.local
   ```

2. **Review failures**:
   - If any clubs fail, check their addresses in database
   - Some might have typos or incomplete addresses
   - Fix address, re-run script for those IDs only

3. **Rate limiting**:
   - Script uses 1.2s delay = 50 requests/min
   - Google allows 50 requests/sec
   - Being conservative to avoid issues

4. **Reusable script**:
   - Keep script for future club additions
   - Just add new club IDs to `CLUBS_WITH_COORDINATES` after geocoding

---

## 📞 Need Help?

If anything goes wrong:
1. Check the error message
2. Google the error (usually API key or quota issue)
3. Verify API is enabled in Cloud Console
4. Try with 1-2 clubs first before running all 110

---

**Ready to run?** Just get your API key and execute Step 2-3 above!

Total time: **10-15 minutes including Google Cloud setup**
