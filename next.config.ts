import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // === Name changes on keeper entries (14) ===
      { source: '/courts/replay', destination: '/courts/replay-club', permanent: true },
      { source: '/courts/10by20-ft-lauderdale', destination: '/courts/10by20-padel-downtown-fort-lauderdale', permanent: true },
      { source: '/courts/arena-sports-usa-llc', destination: '/courts/arena-sports-usa', permanent: true },
      { source: '/courts/ritz-carlton-key-biscayne-padel-cliff-drysdale-racquet-garden', destination: '/courts/ritz-carlton-key-biscayne-padel', permanent: true },
      { source: '/courts/palm-beach-padel-llc', destination: '/courts/palm-beach-padel', permanent: true },
      { source: '/courts/padel-united-sports-club-llc', destination: '/courts/padel-united-sports-club', permanent: true },
      { source: '/courts/padel-llc', destination: '/courts/padel', permanent: true },
      { source: '/courts/tuxedo-paddle-courts-at-the-tuxedo-club', destination: '/courts/tuxedo-paddle-courts', permanent: true },
      { source: '/courts/cleveland-premier-pickleball-padel-court-within', destination: '/courts/cleveland-premier-pickleball-padel', permanent: true },
      { source: '/courts/viva-flourtown', destination: '/courts/viva-padel-flourtown', permanent: true },
      { source: '/courts/deuces-padel-club-llc', destination: '/courts/deuces-padel-club', permanent: true },
      { source: '/courts/imgn-park-llc', destination: '/courts/imgn-park', permanent: true },
      { source: '/courts/slice-padel-co-llc', destination: '/courts/slice-padel-co', permanent: true },
      { source: '/courts/padel-highway-llc', destination: '/courts/padel-highway', permanent: true },

      // === Duplicate merges with different slugs (70) ===
      { source: '/courts/pepper-padel-miami', destination: '/courts/pulse-padel-hub', permanent: true },
      { source: '/courts/miami-padel-federation', destination: '/courts/smart-padel-house', permanent: true },
      { source: '/courts/pura-padel-la', destination: '/courts/pura-padel', permanent: true },
      { source: '/courts/goldenpoint-new-york', destination: '/courts/golden-point-padel', permanent: true },
      { source: '/courts/patl-atlanta', destination: '/courts/padel-haus-atlanta', permanent: true },
      { source: '/courts/conquer-padel-tempe', destination: '/courts/conquer-padel-club', permanent: true },
      { source: '/courts/conquer-padel', destination: '/courts/conquer-padel-club', permanent: true },
      { source: '/courts/padelaz-at-maracana', destination: '/courts/padel-az', permanent: true },
      { source: '/courts/taktika-padel-pickleball-carson', destination: '/courts/taktika-padel-la-galaxy', permanent: true },
      { source: '/courts/taktika-padel-shadow-mountain-resort', destination: '/courts/taktika-padel-palm-desert', permanent: true },
      { source: '/courts/taktika-padel', destination: '/courts/taktika-padel-san-diego', permanent: true },
      { source: '/courts/old-taktika-padel-barnes-tennis-center', destination: '/courts/taktika-padel-san-diego', permanent: true },
      { source: '/courts/taktika-padel-llc', destination: '/courts/taktika-padel-san-diego', permanent: true },
      { source: '/courts/park-padel-san-francisco', destination: '/courts/park-padel-embarcadero', permanent: true },
      { source: '/courts/park-padel-embarcadero-plaza', destination: '/courts/park-padel-embarcadero', permanent: true },
      { source: '/courts/bay-padel-llc', destination: '/courts/bay-padel-treasure-island', permanent: true },
      { source: '/courts/park-padel-south-san-francisco', destination: '/courts/park-padel-oyster-point', permanent: true },
      { source: '/courts/park-padel-south-sf', destination: '/courts/park-padel-oyster-point', permanent: true },
      { source: '/courts/park-padel-south-san-francisco-oyster-point', destination: '/courts/park-padel-oyster-point', permanent: true },
      { source: '/courts/smash-padel-usa', destination: '/courts/smash-padel', permanent: true },
      { source: '/courts/casas-padel-club', destination: '/courts/casas-padel-club-aventura', permanent: true },
      { source: '/courts/ultra-aventura-padel-club', destination: '/courts/ultra-padel-club-aventura', permanent: true },
      { source: '/courts/legio-gp-world', destination: '/courts/legio-gp-padel-world', permanent: true },
      { source: '/courts/legios-racket-gp-llc', destination: '/courts/legio-gp-padel-world', permanent: true },
      { source: '/courts/the-replay-club', destination: '/courts/replay-club', permanent: true },
      { source: '/courts/rally-club-llc-rally-sports-social-replay-club', destination: '/courts/replay-club', permanent: true },
      { source: '/courts/10by20-fort-lauderdale', destination: '/courts/10by20-padel-fort-lauderdale', permanent: true },
      { source: '/courts/ultra-club-magic-city-miami', destination: '/courts/ultra-padel-club', permanent: true },
      { source: '/courts/ultra-padel-miami-magic-city', destination: '/courts/ultra-padel-club', permanent: true },
      { source: '/courts/joas-padel-club-likely-jjh', destination: '/courts/reserve-padel-sol-mia', permanent: true },
      { source: '/courts/real-padel-miami-llc', destination: '/courts/real-padel-miami', permanent: true },
      { source: '/courts/i95-padel-club', destination: '/courts/i95-padel-club-miami', permanent: true },
      { source: '/courts/reserve-seaplane-reserve-cup-2026', destination: '/courts/reserve-padel-seaplane-base', permanent: true },
      { source: '/courts/ultra-padel-club-magic-city', destination: '/courts/ultra-padel-club', permanent: true },
      { source: '/courts/padel-point-miami-beach', destination: '/courts/padel-point-miami', permanent: true },
      { source: '/courts/reserve-padel-north-miami', destination: '/courts/reserve-padel-sol-mia', permanent: true },
      { source: '/courts/platinum-padel-llc', destination: '/courts/platinum-padel-club', permanent: true },
      { source: '/courts/reserve-miami-at-sol-mia', destination: '/courts/reserve-padel-sol-mia', permanent: true },
      { source: '/courts/caribe-royale-orlando-sport-court', destination: '/courts/padel-in-orlando', permanent: true },
      { source: '/courts/xcel-padel-west-palm-beach', destination: '/courts/xcel-padel', permanent: true },
      { source: '/courts/priv-padel-at-thesis-the-gables-padel', destination: '/courts/the-gables-padel', permanent: true },
      { source: '/courts/patl', destination: '/courts/itp-training-academy', permanent: true },
      { source: '/courts/sensa-padel', destination: '/courts/sensa-padel-nashville', permanent: true },
      { source: '/courts/padel-social', destination: '/courts/padel-social-bethesda', permanent: true },
      { source: '/courts/padel-garten-by-glassbox-padel-club', destination: '/courts/glassbox-padel-club', permanent: true },
      { source: '/courts/centercourt-padel', destination: '/courts/centercourt-morristown', permanent: true },
      { source: '/courts/raxnj', destination: '/courts/rax-new-jersey', permanent: true },
      { source: '/courts/padel-club-ep', destination: '/courts/padel-club-el-paso', permanent: true },
      { source: '/courts/p1-padel', destination: '/courts/p1-padel-las-vegas', permanent: true },
      { source: '/courts/real-racquet-academy-llc-formerly-rra-las-vegas-now-p1-padel', destination: '/courts/p1-padel-las-vegas', permanent: true },
      { source: '/courts/golden-point-padel-club', destination: '/courts/golden-point-padel', permanent: true },
      { source: '/courts/reserve-padel-nyc', destination: '/courts/reserve-padel-hudson-yards', permanent: true },
      { source: '/courts/paddles-up-pickleball-padel', destination: '/courts/paddles-up-east-setauket', permanent: true },
      { source: '/courts/viva-padel-pickleball-flourtown', destination: '/courts/viva-padel-flourtown', permanent: true },
      { source: '/courts/dripping-springs-racquet-club-polo-club', destination: '/courts/dripping-springs-racquet-club', permanent: true },
      { source: '/courts/padel39-north-austin', destination: '/courts/padel-39', permanent: true },
      { source: '/courts/polo-tennis-fitness-club-dripping-springs-racquet-club', destination: '/courts/dripping-springs-racquet-club', permanent: true },
      { source: '/courts/padel-quattro-padel-district-llc', destination: '/courts/padel-quattro', permanent: true },
      { source: '/courts/pick-and-padel', destination: '/courts/pick-and-padel-san-antonio', permanent: true },
      { source: '/courts/padel39-north-dallas', destination: '/courts/dallas-padel-club', permanent: true },
      { source: '/courts/dallas-padel-club-by-padel39', destination: '/courts/dallas-padel-club', permanent: true },
      { source: '/courts/brook-padel-aka-dallas-padel-club-by-padel39-now-padel39-north-dallas', destination: '/courts/dallas-padel-club', permanent: true },
      { source: '/courts/bush-tennis-center', destination: '/courts/bush-tennis-center-texas-padel', permanent: true },
      { source: '/courts/kop-sport-entertainment-center', destination: '/courts/the-king-of-padel-san-antonio', permanent: true },
      { source: '/courts/u-padel-san-antonio', destination: '/courts/u-padel-club-san-antonio', permanent: true },
      { source: '/courts/u-padel-club', destination: '/courts/u-padel-club-san-antonio', permanent: true },
      { source: '/courts/woodlands-padel-inc', destination: '/courts/woodlands-padel', permanent: true },
      { source: '/courts/giammalva-racquet-club-elite-academy', destination: '/courts/giammalva-padel-club', permanent: true },
      { source: '/courts/padel-up', destination: '/courts/padel-up-sterling', permanent: true },

      // === Additional duplicate removals ===
      { source: '/courts/i-95-padel', destination: '/courts/i95-padel-club-miami', permanent: true },
      { source: '/courts/padel-x', destination: '/courts/padel-x-miami', permanent: true },

      // === Junk entries → /search (7) ===
      { source: '/courts/north-park-paddle-courts', destination: '/search', permanent: true },
      { source: '/courts/trosky-sports-club', destination: '/search', permanent: true },
      { source: '/courts/pick-and-paddle', destination: '/search', permanent: true },
      { source: '/courts/lets-go-pickleball-padel', destination: '/search', permanent: true },
      { source: '/courts/somos-padel-llc', destination: '/search', permanent: true },
      { source: '/courts/bowlero-miami-fl', destination: '/search', permanent: true },
      { source: '/courts/pro-padel-league-experience-x-miami-open-presented-by-ita', destination: '/search', permanent: true },

      // === State abbreviation → full name (12) ===
      { source: '/ut', destination: '/utah', permanent: true },
      { source: '/ct', destination: '/connecticut', permanent: true },
      { source: '/ga', destination: '/georgia', permanent: true },
      { source: '/ma', destination: '/massachusetts', permanent: true },
      { source: '/nv', destination: '/nevada', permanent: true },
      { source: '/mi', destination: '/michigan', permanent: true },
      { source: '/nm', destination: '/new-mexico', permanent: true },
      { source: '/co', destination: '/colorado', permanent: true },
      { source: '/pr', destination: '/puerto-rico', permanent: true },
      { source: '/wi', destination: '/wisconsin', permanent: true },
      { source: '/md', destination: '/maryland', permanent: true },
      { source: '/va', destination: '/virginia', permanent: true },

      // === State abbreviation city paths (12) ===
      { source: '/ut/:path*', destination: '/utah/:path*', permanent: true },
      { source: '/ct/:path*', destination: '/connecticut/:path*', permanent: true },
      { source: '/ga/:path*', destination: '/georgia/:path*', permanent: true },
      { source: '/ma/:path*', destination: '/massachusetts/:path*', permanent: true },
      { source: '/nv/:path*', destination: '/nevada/:path*', permanent: true },
      { source: '/mi/:path*', destination: '/michigan/:path*', permanent: true },
      { source: '/nm/:path*', destination: '/new-mexico/:path*', permanent: true },
      { source: '/co/:path*', destination: '/colorado/:path*', permanent: true },
      { source: '/pr/:path*', destination: '/puerto-rico/:path*', permanent: true },
      { source: '/wi/:path*', destination: '/wisconsin/:path*', permanent: true },
      { source: '/md/:path*', destination: '/maryland/:path*', permanent: true },
      { source: '/va/:path*', destination: '/virginia/:path*', permanent: true },

      // === Renamed/old court slugs ===
      { source: '/courts/cloud-9-park-padel', destination: '/courts/9co-padel-at-cloud-9-park', permanent: true },
      { source: '/courts/cliffsliving', destination: '/courts/the-cliffs-at-mountain-park', permanent: true },

      // === Dead pages → closest useful page ===
      { source: '/contact', destination: '/list-your-court', permanent: true },
      { source: '/hour', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self), camera=(), microphone=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
