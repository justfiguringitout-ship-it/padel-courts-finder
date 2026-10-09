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
      { source: '/courts/nicol-nj', destination: '/courts/nicol-rackets', permanent: true },
      { source: '/courts/wakit-rakit-titusville', destination: '/courts/wakit-rakit-space-coast', permanent: true }, // owner rebrand 2026-08-28
      { source: '/courts/charlotte-padel-club', destination: '/courts/charlotte-padel-club-matthews', permanent: true }, // duplicate listing removed 2026-09-29
      { source: '/courts/epic-padel-inc', destination: '/courts/epic-padel-charlotte', permanent: true }, // renamed 2026-09-29
      { source: '/courts/dallas-padel-club', destination: '/courts/padel39-north-dallas', permanent: true }, // rebranded, 2026-09-29
      { source: '/courts/woodlands-padel', destination: '/courts/wakit-rakit-spring', permanent: true }, // same venue, duplicate removed 2026-09-29
      { source: '/courts/houston-padel-indoor', destination: '/texas/houston', permanent: true }, // removed 2026-09-29, no verifiable data
      { source: '/courts/mouratoglou-academy-zephyrhills', destination: '/courts/svb-tennis-wellness-center', permanent: true }, // listed under the venue's own name, 2026-09-29
      { source: '/courts/padel-39', destination: '/courts/padel39-north-austin', permanent: true }, // renamed 2026-09-29
      { source: '/courts/the-king-of-padel', destination: '/courts/the-king-of-padel-san-antonio', permanent: true }, // duplicate removed 2026-10-08
      { source: '/courts/cascades-tennis', destination: '/courts/aspen-meadows-racquet-club', permanent: true }, // renamed 2026-10-08
      { source: '/courts/6-love-sports', destination: '/florida/miami-beach', permanent: true }, // a league organizer, not a venue; audit 2026-10-09
      { source: '/courts/padel-country-club', destination: '/florida/miami', permanent: true }, // no evidence the venue exists; audit 2026-10-09
      { source: '/courts/the-glendale-lyceum', destination: '/ohio', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/maketewah-country-club', destination: '/ohio/cincinnati', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/swim-and-racquet-club', destination: '/ohio', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/orienta-beach-club', destination: '/new-york', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/lhirondelle-club-of-ruxton', destination: '/maryland', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/englewood-field-club', destination: '/new-jersey', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/brookline-platform-tennis-club-inc', destination: '/massachusetts', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/briarwood-country-club', destination: '/illinois', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/venice-beach-paddle-tennis-courts', destination: '/california/los-angeles', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/forest-lakes-swim-tennis-club', destination: '/virginia/charlottesville', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/mid-coast-recreation-center-inc', destination: '/', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/h-f-racquet-fitness-club', destination: '/illinois', permanent: true }, // not padel (platform/paddle tennis or none), sport audit 2026-10-09
      { source: '/courts/tuxedo-paddle-courts', destination: '/courts/the-tuxedo-club', permanent: true }, // renamed 2026-10-09
      { source: '/california/venice', destination: '/california', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/illinois/deerfield', destination: '/illinois', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/illinois/homewood', destination: '/illinois', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/massachusetts/brookline', destination: '/massachusetts', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/maryland/towson', destination: '/maryland', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/new-jersey/englewood', destination: '/new-jersey', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/new-york/mamaroneck', destination: '/new-york', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/ohio/columbus', destination: '/ohio', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/ohio/glendale', destination: '/ohio', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/maine/rockport', destination: '/', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/maine', destination: '/', permanent: false }, // no padel clubs left here after the 2026-10-09 sport audit
      { source: '/courts/padel-greenpoint', destination: '/new-york/brooklyn', permanent: true }, // closed May 31 2026 (building sold)
      { source: '/courts/pepper-padel', destination: '/florida/north-miami', permanent: true }, // closed (last activity 2023), audit 2026-10-08
      { source: '/courts/naoa', destination: '/new-york/east-hampton', permanent: true }, // permanently closed per Google, audit 2026-10-08
      { source: '/courts/dixson-padel-and-pickleball-club', destination: '/florida', permanent: true }, // now pickleball only, audit 2026-10-08
      { source: '/courts/punto-azul-padel-club', destination: '/texas/houston', permanent: true }, // never opened, audit 2026-10-08
      { source: '/courts/padel-protech', destination: '/texas', permanent: true }, // no evidence of a club, audit 2026-10-08
      { source: '/courts/golden-padel', destination: '/california/palm-desert', permanent: true }, // no evidence of a club, audit 2026-10-08
      { source: '/florida/deerfield-beach', destination: '/florida', permanent: false },
      { source: '/texas/hidalgo', destination: '/texas', permanent: false },
      { source: '/courts/austin-padel-center-pop-up', destination: '/courts/austin-padel-center', permanent: true }, // permanent club opened 2026-08
      { source: '/courts/woodcourt-padel-and-pickleball', destination: '/courts/wepadel', permanent: true }, // rebranded, 2026-09-29
      { source: '/courts/net-racquet-club', destination: '/texas/farmers-branch', permanent: true }, // club closed, 2026-09-29
      { source: '/courts/styslinger-altec-tennis-complex', destination: '/texas/dallas', permanent: true }, // no padel at this venue, 2026-09-29

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
      { source: '/courts/patl', destination: '/florida/fort-lauderdale', permanent: true },
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
      { source: '/courts/polo-tennis-fitness-club-dripping-springs-racquet-club', destination: '/courts/dripping-springs-racquet-club', permanent: true },
      { source: '/courts/padel-quattro-padel-district-llc', destination: '/courts/padel-quattro', permanent: true },
      { source: '/courts/pick-and-padel', destination: '/courts/pick-and-padel-san-antonio', permanent: true },
      { source: '/courts/dallas-padel-club-by-padel39', destination: '/courts/padel39-north-dallas', permanent: true },
      { source: '/courts/brook-padel-aka-dallas-padel-club-by-padel39-now-padel39-north-dallas', destination: '/courts/padel39-north-dallas', permanent: true },
      { source: '/courts/bush-tennis-center', destination: '/courts/bush-tennis-center-texas-padel', permanent: true },
      { source: '/courts/kop-sport-entertainment-center', destination: '/courts/the-king-of-padel-san-antonio', permanent: true },
      { source: '/courts/u-padel-san-antonio', destination: '/courts/u-padel-club-san-antonio', permanent: true },
      { source: '/courts/u-padel-club', destination: '/courts/u-padel-club-san-antonio', permanent: true },
      { source: '/courts/woodlands-padel-inc', destination: '/courts/wakit-rakit-spring', permanent: true },
      { source: '/courts/giammalva-racquet-club-elite-academy', destination: '/courts/giammalva-padel-club', permanent: true },
      { source: '/courts/padel-up', destination: '/courts/padel-up-sterling', permanent: true },

      // === Additional duplicate removals ===
      { source: '/courts/i-95-padel', destination: '/courts/i95-padel-club-miami', permanent: true },
      { source: '/courts/padel-x', destination: '/courts/padel-x-miami', permanent: true },

      // === Junk entries → /search (7) ===
      { source: '/courts/north-park-paddle-courts', destination: '/search', permanent: true },
      { source: '/courts/trosky-sports-club', destination: '/search', permanent: true },
      { source: '/courts/pick-and-paddle', destination: '/search', permanent: true },
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
      { source: '/courts/sandy-springs-racquet-center', destination: '/georgia', permanent: true }, // removed: no padel courts
      // === GSC 404 cleanup: historical Instagram-handle & no-hyphen court slugs ===
      { source: '/courts/@heightsracquetclub', destination: '/courts/the-heights-racquet-and-social-club', permanent: true },
      { source: '/courts/@brookboundinnvt', destination: '/courts/brook-bound-inn', permanent: true },
      { source: '/courts/@thepadelnomads_', destination: '/courts/the-padel-nomads', permanent: true },
      { source: '/courts/@ohpadelclub', destination: '/courts/oh-padel', permanent: true },
      { source: '/courts/@padelclubpb', destination: '/courts/padel-club-palm-beach', permanent: true },
      { source: '/courts/@swimandracquetclub', destination: '/courts/swim-and-racquet-club', permanent: true },
      { source: '/courts/@upadelclub.us', destination: '/courts/u-padel-club-the-woodlands', permanent: true },
      { source: '/courts/@padelpaso', destination: '/courts/padel-paso', permanent: true },
      { source: '/courts/@ultraclubofficial', destination: '/courts/ultra-padel-club', permanent: true },
      { source: '/courts/@hfracquetandfitness', destination: '/courts/h-f-racquet-fitness-club', permanent: true },
      { source: '/courts/@rgvpadelclub', destination: '/courts/rgv-padel-club', permanent: true },
      { source: '/courts/@park.padel.sac', destination: '/courts/park-padel-west-sacramento', permanent: true },
      { source: '/courts/@northpointpadel', destination: '/courts/northpoint-padel', permanent: true },
      { source: '/courts/@padel956', destination: '/courts/padel-956', permanent: true },
      { source: '/courts/@mouratoglou_academy_florida', destination: '/courts/svb-tennis-wellness-center', permanent: true },
      { source: '/courts/pinehollowclub', destination: '/courts/pine-hollow-club', permanent: true },
      { source: '/courts/fisherislandclub', destination: '/courts/fisher-island-club', permanent: true },
      { source: '/courts/addisonreservecc', destination: '/courts/addison-reserve-country-club', permanent: true },
      { source: '/courts/area.centre', destination: '/courts/area-centre', permanent: true },
      { source: '/courts/privepadel', destination: '/courts/the-courts-at-montauk-yacht-club', permanent: true },
      { source: '/courts/priv-padel', destination: '/courts/the-courts-at-montauk-yacht-club', permanent: true }, // rebranded from Privé Padel
      { source: '/courts/theoceanclubkeybiscayne', destination: '/courts/the-ocean-club', permanent: true },
      { source: '/courts/anytimepadel', destination: '/courts/anytime-padel', permanent: true },
      { source: '/courts/cincyopensportingclub', destination: '/courts/cincinnati-open-sporting-club', permanent: true },
      { source: '/courts/canasracket', destination: '/courts/canas-racket-padel', permanent: true },
      { source: '/courts/pickleballamericaus', destination: '/courts/padel-america-at-pickleball-america', permanent: true },
      { source: '/courts/brookhaven_country_club', destination: '/courts/brookhaven-country-club', permanent: true },
      { source: '/courts/ekopadelandpickle', destination: '/courts/eko-padel-and-pickle', permanent: true },
      { source: '/courts/ltpchs', destination: '/courts/ltp-daniel-island', permanent: true },
      { source: '/courts/thecourthouse_nb', destination: '/courts/the-courthouse', permanent: true },
      { source: '/courts/sportimepadel', destination: '/courts/sportime-padel-at-randalls-island', permanent: true },
      { source: '/courts/southendhealthclub', destination: '/courts/south-end-racquet-health-club', permanent: true },
      { source: '/courts/stpeteathletic', destination: '/courts/st-pete-athletic', permanent: true },
      { source: '/courts/isleworthgcc', destination: '/courts/isleworth-golf-country-club', permanent: true },
      { source: '/courts/brickellsoccerpadel', destination: '/courts/brickell-soccer-and-padel', permanent: true },
      { source: '/courts/mondopadelofficial', destination: '/courts/mondo-padel', permanent: true },
      { source: '/courts/kineticracquet', destination: '/courts/kinetic-indoor-racquet-club', permanent: true },
      { source: '/courts/ranchovalencia', destination: '/courts/rancho-valencia', permanent: true },
      { source: '/courts/hamptonracquetclub', destination: '/courts/hampton-racquet', permanent: true },
      { source: '/courts/snowmassclub', destination: '/courts/snowmass-club', permanent: true },
      { source: '/courts/@newcanaanfieldclub', destination: '/courts/new-canaan-field-club', permanent: true },
      // === GSC 404 cleanup 2026-08-10: legacy slugs still 404ing in Search Console ===
      { source: '/blog/best-padel-clubs-new-york', destination: '/blog/best-padel-clubs-nyc', permanent: true },
      { source: '/puerto-rico/bayam%C3%B3n', destination: '/puerto-rico/bayamon', permanent: true },
      // === GSC 404 cleanup: removed-club city pages → state page ===
      { source: '/florida/pembroke-pines', destination: '/florida', permanent: true },
      { source: '/florida/north-miami-beach', destination: '/florida', permanent: true },
      { source: '/puerto-rico/carolina', destination: '/puerto-rico', permanent: true },
      { source: '/new-york/setauket', destination: '/new-york', permanent: true },
      { source: '/new-mexico/albuquerque', destination: '/new-mexico', permanent: true },
      { source: '/maryland/silver-spring', destination: '/maryland', permanent: true },
      { source: '/missouri/grandview', destination: '/missouri', permanent: true },
      { source: '/100', destination: '/get-started/glossary', permanent: true },
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
