/**
 * Custom SEO content for high-traffic city and state pages.
 * Templates check for custom intros here first, then fall back to dynamic generation.
 */

export const cityIntros: Record<string, string> = {
  "FL-Miami":
    "Miami is the epicenter of American padel, with more clubs and courts than any other US city. The scene ranges from Ultra Padel Club's 29-court mega-facility to intimate neighborhood clubs in Wynwood and Doral. Most Miami clubs offer year-round outdoor play, equipment rental, and coaching programs. Whether you're a first-timer or competing in leagues, Miami's padel community is the most active in the country.",
  "CA-Los Angeles":
    "Los Angeles offers year-round outdoor padel across 5 clubs from Santa Monica to Century City. The LA Padel Club's 7-court facility on Sunset Blvd is the largest in the city, while rooftop courts in Century City offer a uniquely LA experience. The Southern California climate makes LA one of the best cities in the US for outdoor padel.",
  "TX-Houston":
    "Houston is Texas's padel capital with 10 clubs and 30+ courts. TEMPO Padel & Pickleball Club anchors the scene with a perfect 5.0 rating, while Punto Azul's 8-court academy draws serious players. Houston's mix of indoor and outdoor facilities means year-round play despite the Texas heat.",
  "TX-Austin":
    "Austin punches above its weight in padel, with 7 clubs making it one of America's most padel-dense cities per capita. Padel 39's outdoor courts are a local favorite, while Padel Club Austin's 9-court facility is the city's largest. The Hill Country vibe extends to the padel scene — expect friendly communities and post-match socializing.",
};

export const stateIntros: Record<string, string> = {
  NY: "New York's padel scene is growing fast, with clubs spanning from Brooklyn's waterfront to Manhattan's Hudson Yards. Indoor facilities dominate due to space constraints, making padel a year-round sport in the city. Padel Haus operates multiple locations and has become the anchor of NYC's padel community, while newer clubs continue to open across the boroughs.",
};

/**
 * Map of city slugs to blog post slugs for internal linking.
 * City slug format: "citySlug" (as used in URL routes).
 * Blog slug format: the part after /blog/best-padel-clubs-
 */
export const cityBlogSlugs: Record<string, string> = {
  miami: "miami",
  brooklyn: "nyc",
  houston: "houston",
  austin: "austin",
  "los-angeles": "los-angeles",
  "san-francisco": "san-francisco",
  "san-diego": "san-diego",
  phoenix: "phoenix",
  chicago: "chicago",
  "fort-lauderdale": "fort-lauderdale",
  "new-jersey-city": "new-jersey", // fallback — NJ blog covers the state
  orlando: "orlando",
  "san-antonio": "san-antonio",
  atlanta: "atlanta",
  dallas: "dallas",
  denver: "denver",
  charlotte: "charlotte",
  philadelphia: "philadelphia",
  cleveland: "ohio", // fallback — OH blog covers the state
};

/**
 * State-level blog slugs — maps state codes to blog slugs covering that state.
 */
export const stateBlogSlugs: Record<string, string[]> = {
  FL: ["miami", "fort-lauderdale", "orlando"],
  TX: ["houston", "austin", "san-antonio", "dallas"],
  CA: ["los-angeles", "san-francisco", "san-diego"],
  NY: ["nyc"],
  AZ: ["phoenix"],
  IL: ["chicago"],
  GA: ["atlanta"],
  CO: ["denver"],
  NC: ["charlotte"],
  PA: ["philadelphia"],
  OH: ["ohio"],
  NJ: ["new-jersey"],
};
