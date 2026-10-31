import Link from "next/link";
import type { Metadata } from "next";

const URL = "https://www.padelcourtsfinder.com/blog/padel-court-dimensions";
const TITLE = "Padel Court Dimensions: Every Measurement in Feet and Meters";
const META_TITLE = "Padel Court Dimensions in Feet and Meters (FIP Specs)";
const DESC =
  "A padel court is 65.6 x 32.8 ft (20 x 10 m). Every official measurement: net height, service lines, wall and glass heights, indoor ceiling height, singles courts, and the land you need for 1, 2 or 4 courts.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: META_TITLE,
    description: DESC,
    url: URL,
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: "65.6 x 32.8 ft (20 x 10 m), plus net, walls, ceiling height and the space you need for 1, 2 or 4 courts.",
  },
};

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "How big is a padel court in feet?",
    a: "The playing area of a padel court is 65.6 feet long and 32.8 feet wide (20 x 10 meters), measured inside the walls. That is about 2,153 square feet of playing surface.",
  },
  {
    q: "How much space do you need for a padel court?",
    a: "For one outdoor court, the UK Lawn Tennis Association's construction guidance gives a minimum area of 20.8 x 10.8 meters, about 68.2 x 35.4 feet or 2,418 square feet. That covers the court and its concrete edge beam only. Walkways, lighting poles, any out-of-court play area and buildings come on top.",
  },
  {
    q: "How high does the ceiling need to be for indoor padel?",
    a: "The FIP rules require at least 6 meters (19.7 feet) of clear height over the whole court, with nothing such as light fixtures hanging into that space. For new facilities the FIP suggests at least 8 meters (26.2 feet).",
  },
  {
    q: "How high is a padel net?",
    a: "88 centimeters (34.6 inches) at the center, rising to 92 centimeters (36.2 inches) at the ends, with a tolerance of 5 millimeters. The net is 10 meters (32.8 feet) long and the posts can be no taller than 1.05 meters (41.3 inches).",
  },
  {
    q: "How far is the service line from the net in padel?",
    a: "6.95 meters, or about 22 feet 10 inches. That leaves 3.05 meters (10 feet) between the service line and the back wall.",
  },
  {
    q: "Is a padel court the same size as a pickleball court?",
    a: "No. A padel court's playing area (65.6 x 32.8 ft) is about 2.4 times the size of a pickleball court (44 x 20 ft). Once you add the space around each court, though, they take up similar room: about 2,418 square feet for a padel court and 2,176 square feet for a pickleball court built to USA Pickleball's recommended 34 x 64 ft playing surface.",
  },
  {
    q: "What size is a singles padel court?",
    a: "The FIP rulebook only covers doubles. Clubs that build singles courts use the same 20-meter length with a 6-meter width, which is 65.6 x 19.7 feet.",
  },
];

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: "2026-10-31T00:00:00Z",
  dateModified: "2026-10-31T00:00:00Z",
  author: { "@type": "Organization", name: "Padel Courts Finder", url: "https://www.padelcourtsfinder.com" },
  publisher: {
    "@type": "Organization",
    name: "Padel Courts Finder",
    logo: { "@type": "ImageObject", url: "https://www.padelcourtsfinder.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const link = "text-padel-green hover:underline";

const quickRef: Array<[string, string]> = [
  ["Playing area", "65.6 x 32.8 ft (20 x 10 m), measured inside the walls"],
  ["Net height", "34.6 in (88 cm) at the center, 36.2 in (92 cm) at the ends"],
  ["Service line", "22 ft 10 in (6.95 m) from the net"],
  ["Back walls", "13.1 ft (4 m): 9.8 ft (3 m) of glass, then 3.3 ft (1 m) of mesh"],
  ["Indoor ceiling", "At least 19.7 ft (6 m) clear; 26.2 ft (8 m) suggested for new builds"],
  ["Land for one court", "About 68.2 x 35.4 ft (20.8 x 10.8 m) minimum"],
];

const footprint: Array<[string, string, string]> = [
  ["1 court", "68.2 x 35.4 ft (20.8 x 10.8 m)", "2,418 sq ft (225 m²)"],
  ["2 courts", "68.2 x 73.2 ft (20.8 x 22.3 m)", "4,993 sq ft (464 m²)"],
  ["4 courts", "68.2 x 148.6 ft (20.8 x 45.3 m)", "10,142 sq ft (942 m²)"],
];

const comparison: Array<[string, string, string, string]> = [
  ["Playing area", "65.6 x 32.8 ft (20 x 10 m)", "44 x 20 ft (13.41 x 6.10 m)", "78 x 36 ft doubles (23.77 x 10.97 m)"],
  ["Lined area", "2,153 sq ft", "880 sq ft", "2,808 sq ft"],
  ["Singles court", "65.6 x 19.7 ft (20 x 6 m), not in FIP rules", "Same court as doubles", "78 x 27 ft (23.77 x 8.23 m)"],
  ["Net at center", "34.6 in (88 cm)", "34 in", "36 in (0.914 m)"],
  ["Net at ends", "36.2 in (92 cm)", "36 in at the sidelines", "42 in (1.07 m) at the posts"],
  ["Total space", "68.2 x 35.4 ft, 2,418 sq ft (LTA minimum)", "30 x 60 ft minimum, 34 x 64 ft recommended (2,176 sq ft)", "114 x 56 ft, 6,384 sq ft (ITF recreational minimum)"],
  ["Walls", "Glass and mesh enclosure, in play", "Open court", "Open court; fences are out of play"],
  ["Indoor ceiling", "19.7 ft (6 m) minimum, 26.2 ft (8 m) suggested", "No minimum in the rulebook", "29.6 ft (9 m) recommended at the net"],
];

const sources = [
  { label: "International Padel Federation, Rules of Padel (applies from January 1, 2026), section The Court", href: "https://www.padelfip.com/wp-content/uploads/2025/12/FIP_Rules-of-Padel.pdf" },
  { label: "Lawn Tennis Association, Padel Court Construction Guidance Note (2025)", href: "https://www.lta.org.uk/4a230f/siteassets/padel/lta-padel-court-construction-guidance-note-2025.pdf" },
  { label: "Padel Addict, The sizes of a padel court (singles courts and slab size)", href: "https://www.padeladdict.com/en/the-sizes-of-a-padel-court-how-much-space-do-you-need-to-build-your-padel-club/" },
  { label: "USA Pickleball, 2026 Official Rulebook, Rules 3.A and 3.B", href: "https://usapickleball.org/what-is-pickleball/official-rules/" },
  { label: "International Tennis Federation, 2026 Rules of Tennis, Rule 1 and court appendix", href: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" },
];

/* ---------- Diagrams (drawn to scale, colors match the shared CourtDiagram) ---------- */

const PANEL = "oklch(0.21 0.032 255)";
const FLOOR = "#15803D";
const GLASS = "#7DD3FC";
const MESH = "#94A3B8";
const LINE = "#FFFFFF";
const LABEL = "#E2E8F0";
const MUTED = "#94A3B8";
const ACCENT = "#4ADE80";

function CourtPlan() {
  const M = 24; // svg units per meter
  const X0 = 170;
  const X1 = X0 + 10 * M; // 410
  const Y0 = 80;
  const Y1 = Y0 + 20 * M; // 560
  const NET = (Y0 + Y1) / 2; // 320
  const SVC = 6.95 * M;
  const SVC_TOP = NET - SVC;
  const SVC_BOT = NET + SVC;
  const CX = (X0 + X1) / 2;
  const SIDE_GLASS = 4 * M;

  return (
    <figure className="mx-auto w-full max-w-[520px]">
      <svg
        viewBox="0 0 600 650"
        role="img"
        aria-label="Top-down plan of a padel court with dimensions. The court is 65.6 feet (20 meters) long and 32.8 feet (10 meters) wide. The net crosses the middle. Each service line is 22 feet 10 inches (6.95 meters) from the net, leaving 10 feet (3.05 meters) to the back wall. Each service box is 16.4 by 22.8 feet (5 by 6.95 meters). The net is 34.6 inches (88 centimeters) high at the center and 36.2 inches (92 centimeters) at the posts."
        className="h-auto w-full"
      >
        <title>Padel court dimensions, seen from above</title>
        <rect x="0" y="0" width="600" height="650" rx="18" fill={PANEL} />

        {/* floor */}
        <rect x={X0} y={Y0} width={X1 - X0} height={Y1 - Y0} fill={FLOOR} />

        {/* service lines + center service line (extends 20 cm past each service line) */}
        <g stroke={LINE} strokeWidth="2.5" strokeOpacity="0.9">
          <line x1={X0} y1={SVC_TOP} x2={X1} y2={SVC_TOP} />
          <line x1={X0} y1={SVC_BOT} x2={X1} y2={SVC_BOT} />
          <line x1={CX} y1={SVC_TOP - 0.2 * M} x2={CX} y2={SVC_BOT + 0.2 * M} />
        </g>

        {/* back walls (glass) and side glass, 4 m at each end */}
        <g stroke={GLASS} strokeWidth="7" strokeLinecap="round">
          <line x1={X0 - 3} y1={Y0 - 3.5} x2={X1 + 3} y2={Y0 - 3.5} />
          <line x1={X0 - 3} y1={Y1 + 3.5} x2={X1 + 3} y2={Y1 + 3.5} />
          <line x1={X0 - 3.5} y1={Y0 - 3} x2={X0 - 3.5} y2={Y0 + SIDE_GLASS} />
          <line x1={X1 + 3.5} y1={Y0 - 3} x2={X1 + 3.5} y2={Y0 + SIDE_GLASS} />
          <line x1={X0 - 3.5} y1={Y1 - SIDE_GLASS} x2={X0 - 3.5} y2={Y1 + 3} />
          <line x1={X1 + 3.5} y1={Y1 - SIDE_GLASS} x2={X1 + 3.5} y2={Y1 + 3} />
        </g>
        {/* side mesh */}
        <g stroke={MESH} strokeWidth="5" strokeDasharray="3 3">
          <line x1={X0 - 3.5} y1={Y0 + SIDE_GLASS} x2={X0 - 3.5} y2={Y1 - SIDE_GLASS} />
          <line x1={X1 + 3.5} y1={Y0 + SIDE_GLASS} x2={X1 + 3.5} y2={Y1 - SIDE_GLASS} />
        </g>

        {/* net + posts */}
        <line x1={X0 - 6} y1={NET} x2={X1 + 6} y2={NET} stroke={LINE} strokeWidth="4" />
        <circle cx={X0 - 6} cy={NET} r="5" fill={LINE} />
        <circle cx={X1 + 6} cy={NET} r="5" fill={LINE} />

        {/* in-court labels */}
        <g fill={LINE} fillOpacity="0.85" fontSize="13" fontWeight="600" textAnchor="middle" fontFamily="inherit">
          <text x={X0 + (X1 - X0) / 4} y={NET - SVC / 2 + 5}>Service box</text>
          <text x={X0 + (3 * (X1 - X0)) / 4} y={NET - SVC / 2 + 5}>Service box</text>
          <text x={X0 + (X1 - X0) / 4} y={NET + SVC / 2 + 5}>Service box</text>
          <text x={X0 + (3 * (X1 - X0)) / 4} y={NET + SVC / 2 + 5}>Service box</text>
        </g>

        {/* service box width, lower-left box */}
        <g stroke={LINE} strokeOpacity="0.8" strokeWidth="1.2">
          <line x1={X0 + 4} y1={NET + 40} x2={CX - 4} y2={NET + 40} />
          <line x1={X0 + 4} y1={NET + 34} x2={X0 + 4} y2={NET + 46} />
          <line x1={CX - 4} y1={NET + 34} x2={CX - 4} y2={NET + 46} />
        </g>
        <text x={(X0 + CX) / 2} y={NET + 32} fontSize="12" fill={LINE} textAnchor="middle" fontFamily="inherit">16.4 ft (5 m)</text>

        {/* top label */}
        <text x={CX} y="46" fontSize="15" fontWeight="600" fill={LABEL} textAnchor="middle" fontFamily="inherit">
          Back wall: 13.1 ft (4 m) high
        </text>

        {/* left: full length */}
        <g stroke={MUTED} strokeWidth="1">
          <line x1="44" y1={Y0} x2="44" y2={Y1} />
          <line x1="38" y1={Y0} x2="50" y2={Y0} />
          <line x1="38" y1={Y1} x2="50" y2={Y1} />
        </g>
        <text x="30" y={NET} fontSize="15" fontWeight="600" fill={LABEL} textAnchor="middle" fontFamily="inherit" transform={`rotate(-90 30 ${NET})`}>
          65.6 ft (20 m) long
        </text>

        {/* left: back court and net-to-service-line brackets */}
        <g stroke={MUTED} strokeWidth="1">
          <line x1="146" y1={Y0} x2="146" y2={SVC_TOP} />
          <line x1="140" y1={Y0} x2="152" y2={Y0} />
          <line x1="146" y1={SVC_TOP + 6} x2="146" y2={NET} />
          <line x1="140" y1={SVC_TOP} x2="152" y2={SVC_TOP} />
          <line x1="140" y1={SVC_TOP + 6} x2="152" y2={SVC_TOP + 6} />
          <line x1="140" y1={NET} x2="152" y2={NET} />
        </g>
        <g fontSize="13" fill={LABEL} textAnchor="end" fontFamily="inherit">
          <text x="138" y={(Y0 + SVC_TOP) / 2 - 2}>10 ft</text>
          <text x="138" y={(Y0 + SVC_TOP) / 2 + 14} fill={MUTED} fontSize="12">(3.05 m)</text>
          <text x="138" y={(SVC_TOP + NET) / 2 - 2}>22 ft 10 in</text>
          <text x="138" y={(SVC_TOP + NET) / 2 + 14} fill={MUTED} fontSize="12">(6.95 m)</text>
          <text x="138" y={(SVC_TOP + NET) / 2 + 30} fill={MUTED} fontSize="12">net to line</text>
        </g>

        {/* right: callouts */}
        <g fontSize="13" fill={LABEL} fontFamily="inherit">
          <text x="424" y={SVC_TOP + 5}>Service line</text>
          <text x="424" y={NET - 10} fontWeight="700" fill={ACCENT}>Net</text>
          <text x="424" y={NET + 8} fontSize="12">34.6 in (88 cm) center</text>
          <text x="424" y={NET + 24} fontSize="12">36.2 in (92 cm) at posts</text>
          <text x="424" y={NET + SVC / 2 - 4}>Service box</text>
          <text x="424" y={NET + SVC / 2 + 12} fontSize="12" fill={MUTED}>16.4 x 22.8 ft</text>
          <text x="424" y={NET + SVC / 2 + 27} fontSize="12" fill={MUTED}>(5 x 6.95 m)</text>
          <text x="424" y={Y0 + 2 * M + 5} fontSize="12">Glass</text>
          <text x="424" y={NET - 3.5 * M} fontSize="12" fill={MUTED}>Metal mesh</text>
        </g>
        <g stroke={MUTED} strokeWidth="1">
          <line x1={X1 + 10} y1={SVC_TOP} x2="419" y2={SVC_TOP} />
        </g>

        {/* bottom: width */}
        <g stroke={MUTED} strokeWidth="1">
          <line x1={X0} y1="596" x2={X1} y2="596" />
          <line x1={X0} y1="590" x2={X0} y2="602" />
          <line x1={X1} y1="590" x2={X1} y2="602" />
        </g>
        <text x={CX} y="624" fontSize="15" fontWeight="600" fill={LABEL} textAnchor="middle" fontFamily="inherit">
          32.8 ft (10 m) wide
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-sm text-stone-500">
        Drawn to scale from the FIP court rules. Glass is light blue; metal mesh is dashed grey. Door openings in the mesh are not shown.
      </figcaption>
    </figure>
  );
}

function SideWallElevation() {
  const M = 26; // svg units per meter
  const X0 = 40;
  const GROUND = 176;
  const x = (m: number) => X0 + m * M;
  const y = (m: number) => GROUND - m * M;

  return (
    <figure className="mx-auto w-full max-w-[640px]">
      <svg
        viewBox="0 0 660 250"
        role="img"
        aria-label="Side view of one padel side wall, 65.6 feet (20 meters) long. At each end there is a glass panel 13.1 feet (4 meters) long and 9.8 feet (3 meters) high. Above the glass, for the 6.6 feet (2 meters) nearest each back wall, metal mesh continues up to 13.1 feet (4 meters). The middle 39.4 feet (12 meters) of the wall is metal mesh 9.8 feet (3 meters) high. The net post stands in the middle."
        className="h-auto w-full"
      >
        <title>Padel side wall, seen from inside the court</title>
        <defs>
          <pattern id="pcf-dim-mesh" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={MESH} strokeWidth="1.2" />
            <line x1="0" y1="0" x2="8" y2="0" stroke={MESH} strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="660" height="250" rx="18" fill={PANEL} />

        {/* glass, 4 m long x 3 m high at each end */}
        <g fill={GLASS} fillOpacity="0.35" stroke={GLASS} strokeWidth="2">
          <rect x={x(0)} y={y(3)} width={4 * M} height={3 * M} />
          <rect x={x(16)} y={y(3)} width={4 * M} height={3 * M} />
        </g>
        {/* mesh: up to 4 m over the 2 m nearest each back wall, 3 m in the middle 12 m */}
        <g fill="url(#pcf-dim-mesh)" stroke={MESH} strokeWidth="1.5">
          <rect x={x(0)} y={y(4)} width={2 * M} height={1 * M} />
          <rect x={x(18)} y={y(4)} width={2 * M} height={1 * M} />
          <rect x={x(4)} y={y(3)} width={12 * M} height={3 * M} />
        </g>

        {/* ground */}
        <line x1={x(0) - 6} y1={GROUND} x2={x(20) + 6} y2={GROUND} stroke={FLOOR} strokeWidth="4" />

        {/* net post at center, 0.92 m */}
        <line x1={x(10)} y1={GROUND} x2={x(10)} y2={y(0.92)} stroke={LINE} strokeWidth="4" />
        <rect x={x(10) - 16} y={y(0.92) - 22} width="32" height="18" rx="4" fill={PANEL} />
        <text x={x(10)} y={y(0.92) - 8} fontSize="12" fill={LINE} textAnchor="middle" fontFamily="inherit">Net</text>

        {/* in-wall labels */}
        <g fontSize="12" fill={LABEL} textAnchor="middle" fontFamily="inherit">
          <text x={x(2)} y={y(1.5) + 4}>Glass</text>
          <text x={x(18)} y={y(1.5) + 4}>Glass</text>
        </g>

        {/* right: height ticks */}
        <g stroke={MUTED} strokeWidth="1">
          <line x1={x(20) + 4} y1={y(4)} x2={x(20) + 14} y2={y(4)} />
          <line x1={x(20) + 4} y1={y(3)} x2={x(20) + 14} y2={y(3)} />
        </g>
        <g fontSize="12" fill={LABEL} fontFamily="inherit">
          <text x={x(20) + 18} y={y(4) + 4}>13.1 ft (4 m)</text>
          <text x={x(20) + 18} y={y(3) + 4}>9.8 ft (3 m)</text>
        </g>

        {/* bottom: section lengths */}
        <g stroke={MUTED} strokeWidth="1">
          {[0, 4, 16, 20].map((m) => (
            <line key={m} x1={x(m)} y1={GROUND + 8} x2={x(m)} y2={GROUND + 16} />
          ))}
          <line x1={x(0)} y1={GROUND + 12} x2={x(20)} y2={GROUND + 12} />
        </g>
        <g fontSize="12" fill={LABEL} textAnchor="middle" fontFamily="inherit">
          <text x={x(2)} y={GROUND + 32}>13.1 ft (4 m)</text>
          <text x={x(10)} y={GROUND + 32}>39.4 ft (12 m) of mesh, with door openings</text>
          <text x={x(18)} y={GROUND + 32}>13.1 ft (4 m)</text>
          <text x={x(10)} y={GROUND + 56} fontSize="13" fontWeight="600">65.6 ft (20 m)</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-center text-sm text-stone-500">
        One side wall, drawn to scale from the FIP rules (the unstepped glass version). Door openings are not shown.
      </figcaption>
    </figure>
  );
}

export default function PadelCourtDimensionsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">How-To</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Padel Court Dimensions: Every Measurement in Feet and Meters
          </h1>
          <p className="text-lg text-stone-400 mt-3">The playing area, net, walls and ceiling height, plus how much land one, two or four courts need</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>October 31, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>8 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              A padel court is <strong>65.6 feet long and 32.8 feet wide (20 x 10 meters)</strong>, fully enclosed by
              glass walls and metal mesh. The International Padel Federation (FIP) sets that size for every official
              court, with a tolerance of 0.5% (about 4 inches over the length).
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              This page lists every measurement in the FIP rulebook in US units first, with meters in parentheses, and
              then covers what the rulebook leaves out: how much land you need, how tall an indoor building has to be,
              and how a padel court compares with pickleball and tennis. If you are planning a build, read it alongside
              our <Link href="/blog/padel-court-cost" className={link}>padel court cost guide</Link>.
            </p>
          </section>

          {/* Quick reference */}
          <section>
            <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
              <div className="bg-court px-5 py-3">
                <h2 className="text-lg font-bold text-white">Padel court dimensions at a glance</h2>
              </div>
              <dl className="divide-y divide-stone-100">
                {quickRef.map(([k, v]) => (
                  <div key={k} className="grid gap-1 px-5 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-padel-green-dark">{k}</dt>
                    <dd className="text-sm leading-relaxed text-stone-700">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Playing area */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The playing area and lines</h2>
            <p className="text-stone-700 leading-relaxed">
              The 65.6 x 32.8 ft (20 x 10 m) rectangle is measured from the inside faces of the walls, so the glass and
              mesh sit outside it. That gives about 2,153 square feet (200 m²) of playing surface.
            </p>
            <div className="mt-6">
              <CourtPlan />
            </div>
            <ul className="mt-6 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Service lines</strong> run across the court 22 ft 10 in (6.95 m) from the net on each side,
                which leaves 10 ft (3.05 m) between each service line and the back wall.
              </li>
              <li>
                <strong>The center service line</strong> splits the area between the net and each service line into two
                service boxes, each 16.4 ft wide and 22.8 ft deep (5 x 6.95 m). It extends at least 8 in (20 cm) past
                the service line.
              </li>
              <li>
                <strong>There are no sidelines or baselines.</strong> The walls are the edges of the court.
              </li>
              <li>
                <strong>Lines</strong> are 2 in (5 cm) wide, preferably white or black so they contrast with the floor.
              </li>
              <li>
                <strong>The floor</strong> can be concrete, synthetic material or artificial turf, in green, blue or
                terracotta. Courts without drainage can slope no more than 1% from the center toward the edges.
              </li>
            </ul>
          </section>

          {/* Net */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Net height and size</h2>
            <p className="text-stone-700 leading-relaxed">
              The net is 32.8 ft (10 m) long and spans the full width of the court. It is{" "}
              <strong>34.6 in (88 cm) high at the center</strong>, rising to <strong>36.2 in (92 cm) at the ends</strong>,
              with a tolerance of about 0.2 in (5 mm). The posts can be no taller than 41.3 in (1.05 m), and their outer
              edge lines up with the side of the court. The white band along the top of the net is 2 to 2.5 in (5 to 6.3
              cm) deep.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              For comparison, a tennis net is 36 in at the center and a pickleball net is 34 in, so a padel net sits
              between the two.
            </p>
          </section>

          {/* Walls */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Wall, glass and mesh heights</h2>
            <p className="text-stone-700 leading-relaxed">
              The walls are part of the game, so the FIP specifies them as carefully as the floor. All heights are
              measured from the playing surface.
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Back walls:</strong> 13.1 ft (4 m) high in total. The bottom 9.8 ft (3 m) is glass or another
                solid wall, and the top 3.3 ft (1 m) is metal mesh.
              </li>
              <li>
                <strong>Side walls:</strong> a 13.1 ft (4 m) section of glass at each end, then metal mesh along the
                middle. The mesh along the middle is 9.8 ft (3 m) high, and over the 6.6 ft (2 m) nearest each back wall
                the enclosure rises to 13.1 ft (4 m).
              </li>
            </ul>
            <div className="mt-6">
              <SideWallElevation />
            </div>
            <p className="text-stone-700 leading-relaxed mt-6">
              The FIP allows two versions of the side glass. In the first, the glass steps down: 9.8 ft (3 m) high for
              the first 6.6 ft (2 m) from the back wall, then 6.6 ft (2 m) high for the next 6.6 ft (2 m), with mesh
              filling in above. In the second, shown above, the glass is 9.8 ft (3 m) high for the full 13.1 ft (4 m)
              with no step. Either way the playing area is the same.
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Mesh:</strong> diamond or square openings measuring 2 to 2.8 in (5 to 7.08 cm) across the
                diagonal, with wire 2 to 3 mm thick (4 mm maximum).
              </li>
              <li>
                <strong>Glass:</strong> tempered safety glass. UK guidance specifies 10 mm glass for indoor courts and 12
                mm for outdoor courts.
              </li>
              <li>
                <strong>Doors:</strong> openings sit in the middle of one or both side walls. With one opening per side
                it must be between 3.4 x 6.6 ft (1.05 x 2.0 m) and 7.2 x 7.2 ft (2.2 x 2.2 m). With two openings per
                side, each must be between 2.4 x 6.6 ft (0.72 x 2.0 m) and 3.6 x 7.2 ft (1.10 x 2.20 m).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Standard vs panoramic courts</h3>
            <p className="text-stone-700 leading-relaxed">
              Builders sell two main styles. On a standard court, the glass panels sit between vertical steel posts. A
              panoramic court holds the glass with clamps and leaves out the posts between panels, so spectators and
              cameras get an unbroken view. The playing dimensions are identical, so the space planning below applies to
              both. The frame and footing positions differ from model to model, so ask the manufacturer for its
              foundation drawing before you pour concrete.
            </p>
          </section>

          {/* Ceiling */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Ceiling height for indoor padel</h2>
            <p className="text-stone-700 leading-relaxed">
              Lobs are a core shot in padel, so height matters indoors. The FIP rules set two numbers:
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Minimum: 19.7 ft (6 m)</strong> of clear height over the whole court, with nothing such as light
                fixtures hanging into that space.
              </li>
              <li>
                <strong>Suggested for new facilities: 26.2 ft (8 m)</strong> of clear height over the whole court.
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Lights follow the same numbers: the bottom of each fixture at least 19.7 ft (6 m) above the floor, and 26.2
              ft (8 m) suggested for new builds where the lights hang over the court. The UK&apos;s Lawn Tennis
              Association adds that elite competition needs 8 m (26.2 ft) over the net line, and that a roof spanning the
              court from end to end should be at least 6 m (19.7 ft) high at the ends and 8 m (26.2 ft) above the net.
              If you are choosing where to play in winter, our{" "}
              <Link href="/indoor-padel-courts" className={link}>indoor padel courts</Link> page lists covered clubs.
            </p>
          </section>

          {/* Singles + out of court */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Singles courts</h2>
            <p className="text-stone-700 leading-relaxed">
              Padel is a doubles game, and the FIP rulebook only describes the doubles court. Some clubs also build
              singles courts, which keep the 65.6 ft (20 m) length and narrow the width to 19.7 ft (6 m). They take up
              less space, so check the court type when you book.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Space for playing outside the court</h3>
            <p className="text-stone-700 leading-relaxed">
              At the top level, players can chase a ball out through the door openings and hit it back in. The FIP only
              allows that when each side has two openings and a clear area outside, at least 9.8 ft (3 m) wide, with
              13.1 ft (4 m) recommended, 13.1 ft (4 m) long and 9.8 ft (3 m) high, on each side of the court. The LTA notes that these areas cannot be shared between
              neighboring courts for elite events, and that clubs focused on everyday play are unlikely to need them.
              Many US courts are built without that space, so ask the club before you try it. Our{" "}
              <Link href="/rules#outside" className={link}>rules guide</Link> explains what happens to the point.
            </p>
          </section>

          {/* Land needed */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How much land you need for 1, 2 or 4 courts</h2>
            <p className="text-stone-700 leading-relaxed">
              The FIP rules describe the court, not the site around it. The most specific published planning figures we
              found come from the Lawn Tennis Association&apos;s 2025 construction guidance. Its minimum areas for outdoor
              courts include a 16-inch (400 mm) concrete edge beam around each court and a 4.9 ft (1.5 m) gap between
              neighboring courts:
            </p>
            <div className="mt-5 overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Courts</th>
                    <th className="p-3 font-semibold">Minimum area</th>
                    <th className="p-3 font-semibold">Square feet</th>
                  </tr>
                </thead>
                <tbody>
                  {footprint.map(([n, dims, area]) => (
                    <tr key={n} className="border-t border-stone-100">
                      <td className="p-3 font-medium whitespace-nowrap">{n}</td>
                      <td className="p-3">{dims}</td>
                      <td className="p-3 whitespace-nowrap">{area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              These are minimums for the courts alone, laid side by side. They do not include walkways to the doors,
              light poles outside the enclosure, an out-of-court play area, a clubhouse or parking. One padel industry
              guide recommends a concrete slab of at least 20.5 x 10.5 m (67.3 x 34.4 ft) per court. Your builder&apos;s site plan, local zoning and
              setback rules decide the real number.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              For what each of those square feet costs, see{" "}
              <Link href="/blog/padel-court-cost" className={link}>how much it costs to build a padel court</Link>, and
              if you are pricing a court for a home or club, our{" "}
              <Link href="/buy-a-padel-court" className={link}>buy a padel court guide</Link> covers kits, slabs and
              getting quotes.
            </p>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Padel vs pickleball vs tennis court size</h2>
            <p className="text-stone-700 leading-relaxed mb-5">
              If you are weighing up space for padel, pickleball or tennis, here is how the three courts compare, using
              each sport&apos;s governing body for the numbers.
            </p>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold"></th>
                    <th className="p-3 font-semibold">Padel</th>
                    <th className="p-3 font-semibold">Pickleball</th>
                    <th className="p-3 font-semibold">Tennis</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([k, p, pb, t]) => (
                    <tr key={k} className="border-t border-stone-100 align-top">
                      <td className="p-3 font-medium">{k}</td>
                      <td className="p-3">{p}</td>
                      <td className="p-3">{pb}</td>
                      <td className="p-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              In lined area, a padel court is about 2.4 times a pickleball court and about three-quarters of a tennis
              doubles court. Once you count the space around each court, padel and pickleball come out close: roughly
              2,400 square feet for a padel court against about 2,200 for a pickleball court built to USA
              Pickleball&apos;s recommended size. A tennis court with the ITF&apos;s recreational run-off needs about
              6,400 square feet, a little over two and a half times the padel figure. For how the games themselves
              differ, read our <Link href="/blog/padel-vs-pickleball" className={link}>padel vs pickleball guide</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-stone-700 leading-relaxed mt-6">
              New to the game? Our <Link href="/how-to-play" className={link}>how to play padel</Link> guide explains how
              the walls come into play, the <Link href="/get-started/glossary" className={link}>padel glossary</Link>{" "}
              covers the terms, and the <Link href="/search" className={link}>court search</Link> finds clubs near you.
            </p>
          </section>

          {/* Sources */}
          <section>
            <p className="text-sm leading-relaxed text-stone-500">
              <span className="font-semibold text-stone-600">Sources: </span>
              {sources.map((s, i) => (
                <span key={s.href}>
                  <a href={s.href} className="underline decoration-stone-300 underline-offset-2 hover:text-padel-green-dark" rel="noopener">
                    {s.label}
                  </a>
                  {i < sources.length - 1 ? "; " : "."}
                </span>
              ))}
            </p>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/padel-court-cost" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">What a Padel Court Costs to Build</div>
                <p className="text-stone-400 text-sm mt-1">Kits, slabs, indoor vs outdoor, and the revenue math</p>
              </Link>
              <Link href="/blog/padel-scoring-explained" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">How Padel Scoring Works</div>
                <p className="text-stone-400 text-sm mt-1">Golden point, star point and tiebreaks</p>
              </Link>
              <Link href="/rules" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Rules, Explained</div>
                <p className="text-stone-400 text-sm mt-1">The serve, the walls and every edge case</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a Court Near You</div>
                <p className="text-stone-400 text-sm mt-1">Search padel clubs across the US</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
