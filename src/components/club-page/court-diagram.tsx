import type { CourtLayout } from "@/lib/club-page";
import { courtsCaption } from "@/lib/club-page";

/**
 * Top-down plan of a club's padel courts, drawn to scale in metres.
 *
 * Each court is the regulation 10 m x 20 m box: glass back walls and the
 * first 4 m of each side wall in glass, mesh along the middle, the net at
 * 10 m and service lines 6.95 m either side of it. Indoor courts sit under a
 * hip-roof outline; outdoor courts sit on open ground. When the club has not
 * confirmed a court count we draw one faint court and say so, never a number
 * we do not have. Pure server-rendered SVG: no client JS, no requests.
 */

const COURT_W = 10;
const COURT_L = 20;
const GAP_X = 2.5;
const GAP_Y = 3;
const CELL_W = COURT_W + GAP_X;
const CELL_H = COURT_L + GAP_Y;
const GROUP_PAD = 2.2; // roof / ground margin around a group of courts
const LABEL_H = 4.2; // room above a group for its label
const GROUP_GAP = 4; // space between the indoor and outdoor groups
const EDGE = 1.2;
const SCALE_H = 3.4; // room under the plan for the scale bar

interface Group {
  kind: "indoor" | "outdoor" | "plain";
  count: number;
  cols: number;
}

interface Placed extends Group {
  x: number;
  y: number;
  w: number;
  h: number;
  rows: number;
}

/** Pick rows so the whole plan lands near a pleasant landscape ratio. */
function planGroups(groups: Group[]): { placed: Placed[]; width: number; height: number } {
  const total = groups.reduce((s, g) => s + g.count, 0);
  const labelled = groups.some((g) => g.kind !== "plain");
  let best: { score: number; rows: number } = { score: Infinity, rows: 1 };
  for (let rows = 1; rows <= total; rows++) {
    const cols = groups.map((g) => Math.ceil(g.count / rows));
    if (groups.some((g, i) => (cols[i] - 1) * rows >= g.count)) continue; // a whole empty column
    const empty = groups.reduce((s, g, i) => s + cols[i] * rows - g.count, 0);
    const w = cols.reduce((s, c) => s + c * CELL_W - GAP_X + 2 * GROUP_PAD, 0) + (groups.length - 1) * GROUP_GAP;
    const h = rows * CELL_H - GAP_Y + 2 * GROUP_PAD + (labelled ? LABEL_H : 0);
    const score = Math.abs(Math.log(w / h / 1.45)) + 0.2 * empty;
    if (score < best.score) best = { score, rows };
  }
  const rows = best.rows;
  let x = EDGE;
  const top = EDGE + (labelled ? LABEL_H : 0);
  const placed: Placed[] = groups.map((g) => {
    const cols = Math.ceil(g.count / rows);
    const usedRows = Math.min(rows, Math.ceil(g.count / cols));
    const w = cols * CELL_W - GAP_X + 2 * GROUP_PAD;
    const h = usedRows * CELL_H - GAP_Y + 2 * GROUP_PAD;
    const p = { ...g, cols, rows: usedRows, x, y: top, w, h };
    x += w + GROUP_GAP;
    return p;
  });
  const width = x - GROUP_GAP + EDGE;
  const height = top + rows * CELL_H - GAP_Y + 2 * GROUP_PAD + SCALE_H + EDGE;
  return { placed, width, height };
}

function Court({ x, y, n, ghost, showNumber }: { x: number; y: number; n: number; ghost: boolean; showNumber: boolean }) {
  const net = COURT_L / 2;
  const service = 3.05; // back wall to service line
  return (
    <g transform={`translate(${x} ${y})`} className={ghost ? "cd-ghost" : undefined}>
      <rect width={COURT_W} height={COURT_L} className="cd-turf" />
      {/* service lines and centre line */}
      <path
        d={`M0 ${service}H${COURT_W}M0 ${COURT_L - service}H${COURT_W}M${COURT_W / 2} ${service}V${COURT_L - service}`}
        className="cd-line"
      />
      {/* mesh along the middle of each side wall */}
      <path d={`M0 4V16M${COURT_W} 4V16`} className="cd-mesh" />
      {/* glass: back walls plus the first 4 m of each side */}
      <path
        d={`M0 4V0H${COURT_W}V4M0 16V${COURT_L}H${COURT_W}V16`}
        className="cd-glass"
      />
      {/* net and posts */}
      <path d={`M-0.35 ${net}H${COURT_W + 0.35}`} className="cd-net" />
      <circle cx={-0.35} cy={net} r={0.32} className="cd-post" />
      <circle cx={COURT_W + 0.35} cy={net} r={0.32} className="cd-post" />
      {showNumber && (
        <text x={COURT_W / 2} y={1.95} className="cd-num" textAnchor="middle">
          {n}
        </text>
      )}
    </g>
  );
}

function Roof({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  // Hip roof seen from above: ridge along the long side, hips to each corner.
  const horizontal = w >= h;
  const inset = (horizontal ? h : w) / 2;
  const ridge = horizontal
    ? { x1: x + inset, y1: y + h / 2, x2: x + w - inset, y2: y + h / 2 }
    : { x1: x + w / 2, y1: y + inset, x2: x + w / 2, y2: y + h - inset };
  const hips = horizontal
    ? `M${x} ${y}L${ridge.x1} ${ridge.y1}L${x} ${y + h}M${x + w} ${y}L${ridge.x2} ${ridge.y2}L${x + w} ${y + h}`
    : `M${x} ${y}L${ridge.x1} ${ridge.y1}L${x + w} ${y}M${x} ${y + h}L${ridge.x2} ${ridge.y2}L${x + w} ${y + h}`;
  return (
    <g aria-hidden="true">
      <rect x={x} y={y} width={w} height={h} rx={0.8} className="cd-roof" />
      <path d={`${hips}M${ridge.x1} ${ridge.y1}L${ridge.x2} ${ridge.y2}`} className="cd-roof-line" />
    </g>
  );
}

export function CourtDiagram({
  layout,
  clubName,
  planned = false,
}: {
  layout: CourtLayout;
  clubName: string;
  /** Coming-soon club: courts drawn as a plan, not as built */
  planned?: boolean;
}) {
  const known = layout.total > 0;
  const groups: Group[] = !known
    ? [{ kind: "plain", count: 1, cols: 1 }]
    : layout.indoor !== null && layout.outdoor !== null
      ? ([
          layout.indoor > 0 ? { kind: "indoor", count: layout.indoor, cols: 0 } : null,
          layout.outdoor > 0 ? { kind: "outdoor", count: layout.outdoor, cols: 0 } : null,
        ].filter(Boolean) as Group[])
      : [{ kind: "plain", count: layout.total, cols: 0 }];

  const { placed, width, height } = planGroups(groups);
  const total = groups.reduce((s, g) => s + g.count, 0);
  const caption = courtsCaption(layout, planned);
  const ghost = !known || planned;

  // Label size in user units (metres): readable on a 360px phone and on desktop.
  const mobilePx = Math.min(330 / width, 400 / height);
  const desktopPx = Math.min(700 / width, 440 / height);
  const fsSm = +(10 / mobilePx).toFixed(2);
  const fsLg = +(11 / desktopPx).toFixed(2);
  // Court numbers only where they stay legible.
  const numbersSm = mobilePx * 1.6 >= 6.5;
  const numbersLg = desktopPx * 1.6 >= 6.5;

  const label = known
    ? `Plan of the courts at ${clubName}, seen from above: ${caption}.${
        layout.indoor && layout.outdoor ? " Indoor courts are drawn under a roof, outdoor courts on open ground." : ""
      }${planned ? " These courts are planned and not built yet." : ""}`
    : `A single padel court seen from above. ${clubName} has not confirmed how many courts it has.`;

  let n = 0;
  const scaleY = height - EDGE - 0.9;

  return (
    <figure className="club-diagram">
      <svg
        viewBox={`0 0 ${width.toFixed(2)} ${height.toFixed(2)}`}
        width={Math.round(width * 10)}
        height={Math.round(height * 10)}
        role="img"
        aria-label={label}
        className={`cd-svg${numbersSm ? " cd-num-sm" : ""}${numbersLg ? " cd-num-lg" : ""}`}
        style={{ ["--cd-fs-sm" as string]: `${fsSm}px`, ["--cd-fs-lg" as string]: `${fsLg}px` }}
        preserveAspectRatio="xMidYMid meet"
      >
        <title>{label}</title>
        <defs>
          <pattern id="cd-ground" width="1.6" height="1.6" patternUnits="userSpaceOnUse">
            <circle cx="0.8" cy="0.8" r="0.14" className="cd-ground-dot" />
          </pattern>
        </defs>
        {placed.map((g) => {
          const cx = g.x + GROUP_PAD;
          const cy = g.y + GROUP_PAD;
          return (
            <g key={g.kind}>
              {g.kind === "indoor" && <Roof x={g.x} y={g.y} w={g.w} h={g.h} />}
              {g.kind === "outdoor" && (
                <rect x={g.x} y={g.y} width={g.w} height={g.h} rx={0.8} className="cd-ground" aria-hidden="true" />
              )}
              {g.kind !== "plain" && (
                <text x={g.x + 0.2} y={g.y - 1.3} className="cd-label" aria-hidden="true">
                  {g.kind === "indoor" ? `INDOOR · ${g.count}` : `OUTDOOR · ${g.count}`}
                </text>
              )}
              {Array.from({ length: g.count }, (_, i) => {
                n += 1;
                const col = i % g.cols;
                const row = Math.floor(i / g.cols);
                return (
                  <Court
                    key={i}
                    x={cx + col * CELL_W}
                    y={cy + row * CELL_H}
                    n={n}
                    ghost={ghost}
                    showNumber={known && total > 1}
                  />
                );
              })}
            </g>
          );
        })}
        {/* scale bar: 10 m */}
        <g aria-hidden="true" transform={`translate(${EDGE + 0.2} ${scaleY})`}>
          <path d="M0 -0.6V0.6M0 0H10M10 -0.6V0.6M5 -0.35V0.35" className="cd-scale" />
          <text x={11.2} y={0} dominantBaseline="central" className="cd-label">
            10 m
          </text>
        </g>
      </svg>
      <figcaption className="cd-caption">
        <span className="cd-caption-main">{caption}</span>
        {known ? (
          <span className="cd-legend" aria-hidden="true">
            <span><i className="cd-key cd-key-glass" />glass</span>
            <span><i className="cd-key cd-key-mesh" />mesh</span>
            <span><i className="cd-key cd-key-net" />net</span>
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
