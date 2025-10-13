#!/usr/bin/env python3
"""
Parse NEW_FACILITIES_VERIFIED.md and extract club data for TypeScript file
"""

import re
import json

# State name to code mapping
STATE_MAP = {
    "Florida": "FL", "Texas": "TX", "California": "CA", "New York": "NY",
    "Wisconsin": "WI", "Tennessee": "TN", "Arizona": "AZ", "Illinois": "IL",
    "Massachusetts": "MA", "Maryland": "MD", "New Jersey": "NJ", "Connecticut": "CT",
    "Pennsylvania": "PA", "Michigan": "MI", "Nevada": "NV", "Virginia": "VA",
    "Utah": "UT", "Colorado": "CO", "New Mexico": "NM", "Georgia": "GA",
    "North Carolina": "NC", "Puerto Rico": "PR", "Missouri": "MO",
    "Ohio": "OH", "Iowa": "IA", "Oregon": "OR", "Washington": "WA"
}

def clean_phone(phone):
    """Format phone number to +1XXXXXXXXXX"""
    if not phone or phone == "":
        return ""
    # Remove all non-digits
    digits = re.sub(r'\D', '', phone)
    # Ensure it has 10 digits for US/PR numbers
    if len(digits) == 10:
        return f"+1{digits}"
    elif len(digits) == 11 and digits.startswith('1'):
        return f"+{digits}"
    elif len(digits) > 0:
        return f"+1{digits[-10:]}"  # Take last 10 digits
    return ""

def extract_state_code(location_line):
    """Extract 2-letter state code from location"""
    for state_name, code in STATE_MAP.items():
        if state_name in location_line:
            return code
    # Try to find 2-letter state code directly
    match = re.search(r'\b([A-Z]{2})\b', location_line)
    if match:
        return match.group(1)
    return ""

def parse_club_section(lines):
    """Parse a single club section"""
    club = {
        'id': None,
        'name': '',
        'address': '',
        'city': '',
        'state': '',
        'zipCode': '',
        'phone': '',
        'website': '',
        'rating': 0.0,
        'reviewCount': 0,
        'numberOfCourts': None,
        'courtType': 'outdoor',
        'amenities': [],
        'openingHours': {},
        'verified': True,
        'verificationDate': '2025-10-13'
    }

    for line in lines:
        line = line.strip()

        # Extract ID from title
        if line.startswith('### ✅ Club #'):
            match = re.search(r'Club #(\d+):\s*(.+)', line)
            if match:
                club['id'] = int(match.group(1))
                club['name'] = match.group(2).strip()

        # Location
        elif line.startswith('**Location**:'):
            location = line.replace('**Location**:', '').strip()
            club['state'] = extract_state_code(location)
            # Extract city (usually first part before comma)
            parts = location.split(',')
            if len(parts) >= 1:
                club['city'] = parts[0].strip()

        # Address
        elif line.startswith('**Address**:'):
            addr = line.replace('**Address**:', '').strip()
            club['address'] = addr.split(',')[0].strip() if addr else ''
            # Try to extract zip code
            zip_match = re.search(r'\b(\d{5})\b', addr)
            if zip_match:
                club['zipCode'] = zip_match.group(1)

        # Phone
        elif line.startswith('**Phone**:'):
            phone = line.replace('**Phone**:', '').strip()
            club['phone'] = clean_phone(phone)

        # Website
        elif line.startswith('**Website**:'):
            website = line.replace('**Website**:', '').strip()
            if 'http' in website:
                club['website'] = website.split()[0]

        # Number of Courts
        elif '**Number of Courts**:' in line:
            court_match = re.search(r'(\d+)', line)
            if court_match:
                club['numberOfCourts'] = int(court_match.group(1))

        # Type
        elif line.startswith('**Type**:'):
            type_text = line.lower()
            if 'indoor' in type_text and 'outdoor' in type_text:
                club['courtType'] = 'both'
            elif 'indoor' in type_text:
                club['courtType'] = 'indoor'
            else:
                club['courtType'] = 'outdoor'

        # Rating
        elif line.startswith('**Rating**:'):
            rating_match = re.search(r'(\d+\.\d+)', line)
            if rating_match:
                club['rating'] = float(rating_match.group(1))

        # Amenities
        elif line.startswith('**Amenities**:'):
            amenities_text = line.replace('**Amenities**:', '').strip()
            if amenities_text:
                club['amenities'] = [a.strip() for a in amenities_text.split(',')]

    # Set default opening hours
    default_hours = "9h-21h"
    club['openingHours'] = {
        'monday': default_hours,
        'tuesday': default_hours,
        'wednesday': default_hours,
        'thursday': default_hours,
        'friday': default_hours,
        'saturday': default_hours,
        'sunday': default_hours
    }

    return club

# Read the verification file
with open('/Users/dito/padel-directory-2/NEW_FACILITIES_VERIFIED.md', 'r') as f:
    content = f.read()

# Split into club sections
sections = re.split(r'### ✅ Club #\d+:', content)

clubs = []
for i, section in enumerate(sections[1:]):  # Skip first empty section
    lines = section.split('\n')
    # Add back the header
    lines.insert(0, f'### ✅ Club #{i}:')  # Temporary, will be fixed
    club = parse_club_section(lines)
    if club['id'] and club['name']:
        clubs.append(club)

# Sort by ID
clubs.sort(key=lambda x: x['id'])

# Filter clubs with ID >= 52 and take first 90
target_clubs = [c for c in clubs if c['id'] is not None]

print(f"Total clubs parsed: {len(clubs)}")
print(f"Clubs with valid IDs: {len(target_clubs)}")
print(f"\nClub IDs found: {[c['id'] for c in target_clubs[:20]]}")

# Output to JSON for inspection
with open('/Users/dito/padel-directory-2/parsed_clubs.json', 'w') as f:
    json.dump(target_clubs, f, indent=2)

print(f"\nParsed data saved to parsed_clubs.json")
