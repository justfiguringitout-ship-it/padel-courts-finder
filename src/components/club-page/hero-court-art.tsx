/**
 * Background art for clubs without a real photo: the club's courts drawn in
 * plan view (glass walls, service lines, net) under a floodlight, in court
 * navy and turf green. It shows the club's own court count, never a stock
 * photo. Purely decorative; the parent reserves the space.
 */
export function HeroCourtArt({ courts }: { courts: number }) {
  const n = courts > 0 ? Math.min(courts, 18) : 4;
  const perRow = n <= 4 ? n : n <= 8 ? Math.ceil(n / 2) : 6;
  const rows = Math.ceil(n / perRow);

  // Courts are 20 x 10 (m), drawn landscape. Fit them into the right part of
  // a 1440 x 420 canvas with a gap of 1.6 m between courts.
  const gap = 1.6;
  const areaW = 760;
  const areaH = 300;
  const unit = Math.min(areaW / (perRow * 20 + (perRow - 1) * gap), areaH / (rows * 10 + (rows - 1) * gap));
  const cw = 20 * unit;
  const ch = 10 * unit;
  const g = gap * unit;
  const totalW = perRow * cw + (perRow - 1) * g;
  const totalH = rows * ch + (rows - 1) * g;
  const x0 = 1400 - totalW;
  const y0 = (420 - totalH) / 2 - 10;

  const cells = Array.from({ length: n }, (_, i) => ({
    x: x0 + (i % perRow) * (cw + g),
    y: y0 + Math.floor(i / perRow) * (ch + g),
  }));
  const sw = Math.max(1, unit * 0.12);

  return (
    <svg
      className="club-hero-art"
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="cha-flood" cx="72%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.16" />
          <stop offset="60%" stopColor="#4ADE80" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
        </radialGradient>
        <pattern id="cha-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#fff" strokeOpacity="0.035" />
        </pattern>
      </defs>
      <rect width="1440" height="420" fill="url(#cha-grid)" />
      <rect width="1440" height="420" fill="url(#cha-flood)" />
      {cells.map(({ x, y }, i) => (
        <g key={i}>
          <rect x={x} y={y} width={cw} height={ch} rx={unit * 0.25} fill="#4ADE80" fillOpacity="0.09" stroke="#A5F3FC" strokeOpacity="0.55" strokeWidth={sw * 1.6} />
          {/* service lines (6.95 m from the net each side) and centre line */}
          <path
            d={`M${x + 3.05 * unit} ${y}v${ch}M${x + 16.95 * unit} ${y}v${ch}M${x + 3.05 * unit} ${y + ch / 2}H${x + 16.95 * unit}`}
            stroke="#fff"
            strokeOpacity="0.28"
            strokeWidth={sw}
            fill="none"
          />
          {/* net */}
          <path d={`M${x + cw / 2} ${y - unit * 0.4}v${ch + unit * 0.8}`} stroke="#4ADE80" strokeOpacity="0.85" strokeWidth={sw * 2} />
        </g>
      ))}
    </svg>
  );
}
