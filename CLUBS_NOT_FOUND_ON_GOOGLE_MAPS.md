# Clubs Not Found on Google Maps

**Date**: October 20, 2025
**Purpose**: Document clubs that couldn't be verified on Google Maps during accuracy audit

---

## Summary

**Total clubs not found**: 10 clubs (6% of database)
**Action taken**: NO DELETIONS - all clubs retained as they may be "coming soon" facilities

Per user instructions: "DO NOT REMOVE any clubs because all the ones we found are for a reason"

---

## List of Unverified Clubs

### 1. Padel 956 (ID 107)
- **Location**: McAllen, TX
- **Status**: Coming soon facility
- **Database rating**: None (removed as no Google Maps rating available yet)
- **Action**: Kept in database, rating field removed

### 2. Golden Padel (ID 96)
- **Location**: Palm Desert, CA
- **Database rating**: 4.6
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 3. Taktika Padel - LA Galaxy (ID 136)
- **Location**: Carson, CA
- **Database rating**: 4.7
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 4. Taktika Padel - Stockton (ID 137)
- **Location**: Stockton, CA
- **Database rating**: 4.6
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 5. Taktika Padel - Palm Desert (ID 138)
- **Location**: Palm Desert, CA
- **Database rating**: 4.8
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 6. Taktika Padel - Fairmont (ID 139)
- **Location**: San Diego, CA
- **Database rating**: 4.9
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 7. Padel Quattro (ID 109)
- **Location**: Albuquerque, NM
- **Database rating**: 4.5
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 8. Trosky Sports Club (ID 110)
- **Location**: Albuquerque, NM
- **Database rating**: 4.4
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 9. Charlotte Padel Club - South Charlotte (ID 23)
- **Location**: Charlotte, NC
- **Database rating**: 4.9
- **Issue**: Not found on Google Maps
- **Action**: Retained

### 10. Epic Padel Inc (ID 125)
- **Location**: Charlotte, NC
- **Database rating**: 4.6
- **Issue**: Not found on Google Maps
- **Action**: Retained

---

## Recommendations

### Short-term:
1. Monitor these clubs for Google Maps listings
2. Reach out to verify status if possible
3. Add "Coming Soon" badge to frontend for clubs without ratings

### Long-term:
1. Quarterly verification check for these facilities
2. Update ratings once they appear on Google Maps
3. Consider adding "verification_status" field to track this

---

## Notes

- All clubs retained per user directive - no deletions
- Coming soon facilities like Padel 956 are valid entries
- Rating field made optional in TypeScript to support this use case
- Future clubs should be verified before adding to database

---

**Status**: ✅ DOCUMENTED
**Next action**: Continue with TypeScript fixes and final build
