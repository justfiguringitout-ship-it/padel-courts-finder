/**
 * Top-down padel court, drawn to scale from the FIP court rules
 * (10 m x 20 m interior, service lines 6.95 m from the net, 4 m of glass at
 * each end of the side walls, metal mesh in the middle with door openings).
 * 24 SVG units = 1 metre. Pure SVG, no external requests, shared by
 * /how-to-play and /rules.
 */

const M = 24; // svg units per metre
const X0 = 140; // court left (interior)
const X1 = X0 + 10 * M; // 380
const Y0 = 70; // court top (interior)
const Y1 = Y0 + 20 * M; // 550
const NET = (Y0 + Y1) / 2; // 310
const SVC = 6.95 * M; // 166.8
const SVC_TOP = NET - SVC;
const SVC_BOT = NET + SVC;
const GLASS = 4 * M; // glass section at each end of each side wall
const DOOR_NEAR = 2 * M;
const DOOR_FAR = 3.1 * M;

export function CourtDiagram({ caption = true }: { caption?: boolean }) {
  const glass = "#7DD3FC";
  const mesh = "#94A3B8";
  const line = "#FFFFFF";
  const label = "#E2E8F0";
  const muted = "#94A3B8";

  // Side-wall mesh segments (between the glass ends, minus the door gaps)
  const meshSegments: Array<[number, number]> = [
    [Y0 + GLASS, NET - DOOR_FAR],
    [NET - DOOR_NEAR, NET + DOOR_NEAR],
    [NET + DOOR_FAR, Y1 - GLASS],
  ];

  return (
    <figure className="pcf-court-fig mx-auto w-full max-w-[480px]">
      <svg
        viewBox="0 0 540 620"
        role="img"
        aria-label="Top-down diagram of a padel court, 10 metres wide and 20 metres long. A net crosses the middle. On each side, a service line runs 6.95 metres from the net, and a centre line splits the area between the net and the service line into two service boxes. The back walls are glass with metal mesh above. Each side wall is glass for 4 metres at both ends and metal mesh in the middle, with door openings near the net."
        className="h-auto w-full"
      >
        <title>Padel court layout, seen from above</title>

        {/* panel */}
        <rect x="0" y="0" width="540" height="620" rx="18" fill="oklch(0.21 0.032 255)" />

        {/* floor */}
        <rect x={X0} y={Y0} width={X1 - X0} height={Y1 - Y0} fill="#15803D" />
        <rect x={X0} y={Y0} width={X1 - X0} height={Y1 - Y0} fill="url(#pcf-court-sheen)" />
        <defs>
          <radialGradient id="pcf-court-sheen" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* service lines + centre service line (extends 20 cm past each service line) */}
        <g stroke={line} strokeWidth="2.5" strokeOpacity="0.9">
          <line x1={X0} y1={SVC_TOP} x2={X1} y2={SVC_TOP} />
          <line x1={X0} y1={SVC_BOT} x2={X1} y2={SVC_BOT} />
          <line x1={(X0 + X1) / 2} y1={SVC_TOP - 0.2 * M} x2={(X0 + X1) / 2} y2={SVC_BOT + 0.2 * M} />
        </g>

        {/* back walls: glass (full width) */}
        <g stroke={glass} strokeWidth="7" strokeLinecap="round">
          <line x1={X0 - 3} y1={Y0 - 3.5} x2={X1 + 3} y2={Y0 - 3.5} />
          <line x1={X0 - 3} y1={Y1 + 3.5} x2={X1 + 3} y2={Y1 + 3.5} />
          {/* side glass, 4 m at each end */}
          <line x1={X0 - 3.5} y1={Y0 - 3} x2={X0 - 3.5} y2={Y0 + GLASS} />
          <line x1={X1 + 3.5} y1={Y0 - 3} x2={X1 + 3.5} y2={Y0 + GLASS} />
          <line x1={X0 - 3.5} y1={Y1 - GLASS} x2={X0 - 3.5} y2={Y1 + 3} />
          <line x1={X1 + 3.5} y1={Y1 - GLASS} x2={X1 + 3.5} y2={Y1 + 3} />
        </g>

        {/* side mesh */}
        <g stroke={mesh} strokeWidth="5" strokeDasharray="3 3">
          {meshSegments.map(([a, b]) => (
            <g key={`m-${a}`}>
              <line x1={X0 - 3.5} y1={a} x2={X0 - 3.5} y2={b} />
              <line x1={X1 + 3.5} y1={a} x2={X1 + 3.5} y2={b} />
            </g>
          ))}
        </g>

        {/* net + posts */}
        <line x1={X0 - 6} y1={NET} x2={X1 + 6} y2={NET} stroke={line} strokeWidth="4" />
        <circle cx={X0 - 6} cy={NET} r="5" fill={line} />
        <circle cx={X1 + 6} cy={NET} r="5" fill={line} />

        {/* in-court labels */}
        <g fill={line} fillOpacity="0.85" fontSize="14" fontWeight="600" textAnchor="middle" fontFamily="inherit">
          <text x={X0 + (X1 - X0) / 4} y={NET - SVC / 2 + 5}>Service box</text>
          <text x={X0 + (3 * (X1 - X0)) / 4} y={NET - SVC / 2 + 5}>Service box</text>
          <text x={X0 + (X1 - X0) / 4} y={NET + SVC / 2 + 5}>Service box</text>
          <text x={X0 + (3 * (X1 - X0)) / 4} y={NET + SVC / 2 + 5}>Service box</text>
        </g>
        <g fill={line} fillOpacity="0.55" fontSize="13" textAnchor="middle" fontFamily="inherit">
          <text x={(X0 + X1) / 2} y={(Y0 + SVC_TOP) / 2 + 5}>Back court</text>
          <text x={(X0 + X1) / 2} y={(Y1 + SVC_BOT) / 2 + 5}>Back court</text>
        </g>

        {/* left-side callouts */}
        <g fontSize="15" fill={label} fontFamily="inherit" textAnchor="end">
          <text x="118" y={Y0 + GLASS / 2 + 5}>Glass</text>
          <text x="118" y={(Y0 + GLASS + NET - DOOR_FAR) / 2 + 5}>Metal mesh</text>
          <text x="118" y={NET - (DOOR_NEAR + DOOR_FAR) / 2 + 5}>Door</text>
          <text x="118" y={NET + 5} fontWeight="700" fill="#4ADE80">Net</text>
        </g>
        <g stroke={muted} strokeWidth="1">
          <line x1="122" y1={Y0 + GLASS / 2} x2={X0 - 9} y2={Y0 + GLASS / 2} />
          <line x1="122" y1={(Y0 + GLASS + NET - DOOR_FAR) / 2} x2={X0 - 9} y2={(Y0 + GLASS + NET - DOOR_FAR) / 2} />
          <line x1="122" y1={NET - (DOOR_NEAR + DOOR_FAR) / 2} x2={X0 - 4} y2={NET - (DOOR_NEAR + DOOR_FAR) / 2} />
        </g>
        <text x="118" y={NET + 23} fontSize="12" fill={muted} textAnchor="end" fontFamily="inherit">88 cm high</text>
        <text x="118" y={NET + 39} fontSize="12" fill={muted} textAnchor="end" fontFamily="inherit">in the middle</text>

        {/* right-side callouts */}
        <g fontSize="14" fill={label} fontFamily="inherit">
          <text x="402" y={SVC_TOP + 5}>Service line</text>
          <text x="402" y={NET - SVC / 2 + 5}>6.95 m</text>
          <text x="402" y={NET - SVC / 2 + 22} fontSize="12" fill={muted}>net to line</text>
        </g>
        <g stroke={muted} strokeWidth="1">
          <line x1={X1 + 10} y1={SVC_TOP} x2="397" y2={SVC_TOP} />
          {/* 6.95 m dimension bracket */}
          <line x1="392" y1={SVC_TOP + 14} x2="392" y2={NET - 4} />
          <line x1="388" y1={SVC_TOP + 14} x2="396" y2={SVC_TOP + 14} />
          <line x1="388" y1={NET - 4} x2="396" y2={NET - 4} />
        </g>

        {/* overall dimensions */}
        <g fill={label} fontSize="15" fontWeight="600" fontFamily="inherit" textAnchor="middle">
          <text x="260" y="40">Back wall: 3 m glass + 1 m mesh</text>
          <text x="260" y="592">10 m wide (33 ft)</text>
          <text x="520" y={NET} transform={`rotate(90 520 ${NET})`}>20 m long (66 ft)</text>
        </g>
        <g stroke={muted} strokeWidth="1">
          <line x1={X0} y1="572" x2={X1} y2="572" />
          <line x1={X0} y1="566" x2={X0} y2="578" />
          <line x1={X1} y1="566" x2={X1} y2="578" />
          <line x1="500" y1={Y0} x2="500" y2={Y1} />
          <line x1="494" y1={Y0} x2="506" y2={Y0} />
          <line x1="494" y1={Y1} x2="506" y2={Y1} />
        </g>
      </svg>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-stone-500">
          Drawn to scale from the FIP court rules. Glass is light blue; metal mesh is the dashed grey section.
        </figcaption>
      )}
    </figure>
  );
}
