import { getAllAdaptedCourts } from "@/lib/court-adapter";

// Continental US bounds for the equirectangular projection
const LNG_MIN = -125;
const LNG_MAX = -66.5;
const LAT_MIN = 24;
const LAT_MAX = 49.5;
const W = 900;
const H = 500;
const PAD = 30;

function project(lat: number, lng: number) {
  const x = PAD + ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * (W - PAD * 2);
  const y = PAD + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * (H - PAD * 2);
  return { x, y };
}

export function CourtsConstellation() {
  const clubs = getAllAdaptedCourts()
    .filter((c) => {
      const lat = c.coordinates?.latitude;
      const lng = c.coordinates?.longitude;
      return (
        Number.isFinite(lat) &&
        Number.isFinite(lng) &&
        lat! >= LAT_MIN &&
        lat! <= LAT_MAX &&
        lng! >= LNG_MIN &&
        lng! <= LNG_MAX
      );
    })
    // Curated featured clubs render last so they sit on top of dense clusters
    .sort((a, b) => Number(Boolean(a.featured)) - Number(Boolean(b.featured)));

  // State labels: count + centroid of that state's plotted clubs
  const byState = new Map<string, { count: number; latSum: number; lngSum: number }>();
  for (const c of clubs) {
    const s = c.address.stateCode;
    const entry = byState.get(s) || { count: 0, latSum: 0, lngSum: 0 };
    entry.count += 1;
    entry.latSum += c.coordinates.latitude;
    entry.lngSum += c.coordinates.longitude;
    byState.set(s, entry);
  }
  const topStates = [...byState.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 4)
    .map(([code, { count, latSum, lngSum }]) => ({
      code,
      count,
      ...project(latSum / count, lngSum / count),
    }));

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="constellation w-full h-auto"
      role="img"
      aria-label={`Map of ${clubs.length} padel clubs across the continental United States`}
    >
      {/* Court-line grid */}
      {Array.from({ length: 5 }, (_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={(H / 5) * (i + 1)}
          x2={W}
          y2={(H / 5) * (i + 1)}
          stroke="white"
          strokeOpacity={0.04}
        />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line
          key={`v${i}`}
          x1={(W / 9) * (i + 1)}
          y1={0}
          x2={(W / 9) * (i + 1)}
          y2={H}
          stroke="white"
          strokeOpacity={0.04}
        />
      ))}

      {/* Club lights */}
      {clubs.map((c) => {
        const { x, y } = project(c.coordinates.latitude, c.coordinates.longitude);
        const isFeatured = Boolean(c.featured);
        return (
          <a
            key={c.id}
            href={`/courts/${c.slug}`}
            className="court-dot"
            aria-label={`${c.name} — ${c.address.city}, ${c.address.stateCode}`}
          >
            <title>{`${c.name} · ${c.address.city}, ${c.address.stateCode}`}</title>
            <circle
              className="dot-halo"
              cx={x}
              cy={y}
              r={isFeatured ? 9 : 7}
              fill="#4ADE80"
              opacity={isFeatured ? 0.22 : 0.14}
            />
            {isFeatured && (
              <circle cx={x} cy={y} r={5.5} fill="none" stroke="#4ADE80" strokeOpacity={0.5} strokeWidth={1} />
            )}
            <circle
              className="dot-core"
              cx={x}
              cy={y}
              r={isFeatured ? 3.2 : 2.5}
              fill="#4ADE80"
              opacity={isFeatured ? 1 : 0.9}
            />
            {/* Invisible hit area so clusters are still clickable */}
            <circle cx={x} cy={y} r={10} fill="#000" fillOpacity={0} pointerEvents="all" />
          </a>
        );
      })}

      {/* Top-state counts */}
      {topStates.map((s) => (
        <g key={s.code} pointerEvents="none">
          <text
            x={s.x}
            y={s.y - 16}
            textAnchor="middle"
            fill="white"
            fillOpacity={0.85}
            fontSize={15}
            fontWeight={700}
            fontFamily="var(--font-outfit), sans-serif"
          >
            {s.code}
          </text>
          <text
            x={s.x}
            y={s.y - 2}
            textAnchor="middle"
            fill="#4ADE80"
            fillOpacity={0.9}
            fontSize={11}
            fontFamily="var(--font-geist-mono), monospace"
          >
            {s.count} clubs
          </text>
        </g>
      ))}
    </svg>
  );
}
