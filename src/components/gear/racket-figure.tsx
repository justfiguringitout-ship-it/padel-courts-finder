import type { BrandFamily, RacketShape } from './types';

/**
 * Original, server-rendered padel racket illustration.
 *
 * Draws the real head silhouette for each shape, a drilled face (holes are
 * true cut-outs, so the card shows through), the open throat, an overgrip
 * and a wrist cord. The face colour follows the stated face material
 * (carbon, fiberglass or a hybrid of both) and the sweet-spot glow sits
 * where our shapes guide places it: center for round, mid-high for
 * teardrop, high for diamond. Brand families get a muted accent colour on
 * the rim and butt cap only. No logos, no external requests.
 */

const W = 120;
const H = 240;

/** Head + throat silhouettes. All meet the handle at (48..72, 160). */
const SILHOUETTE: Record<RacketShape, string> = {
  round:
    'M60 6 C94 6 114 32 114 66 C114 96 98 118 82 132 C76 140 72 150 72 160 L48 160 C48 150 44 140 38 132 C22 118 6 96 6 66 C6 32 26 6 60 6 Z',
  hybrid:
    'M60 5 C93 5 114 28 114 60 C114 88 99 112 82 131 C76 140 72 150 72 160 L48 160 C48 150 44 140 38 131 C21 112 6 88 6 60 C6 28 27 5 60 5 Z',
  teardrop:
    'M60 4 C92 4 114 22 114 52 C114 80 100 106 82 130 C76 140 72 150 72 160 L48 160 C48 150 44 140 38 130 C20 106 6 80 6 52 C6 22 28 4 60 4 Z',
  diamond:
    'M60 6 C86 6 106 11 112 28 C116 40 115 52 110 64 L84 128 C77 139 72 150 72 160 L48 160 C48 150 43 139 36 128 L10 64 C5 52 4 40 8 28 C14 11 34 6 60 6 Z',
};

/** Sweet-spot glow, matching /blog/padel-racket-shapes-explained */
const SWEET_SPOT: Record<RacketShape, { cy: number; rx: number; ry: number }> = {
  round: { cy: 70, rx: 30, ry: 32 },
  hybrid: { cy: 63, rx: 28, ry: 29 },
  teardrop: { cy: 58, rx: 26, ry: 26 },
  diamond: { cy: 44, rx: 22, ry: 20 },
};

/** Muted accent per brand family (rim line + butt cap). */
const ACCENT: Record<BrandFamily, string> = {
  nox: '#b7791f',
  babolat: '#2b6cb0',
  head: '#2c7a7b',
  wilson: '#c0392b',
  adidas: '#4a5568',
  bullpadel: '#6b46c1',
  other: '#16A34A',
};

export type FaceKind = 'carbon' | 'fiberglass' | 'hybrid';

/** Classify the stated face material. "FG" means fiberglass. */
export function faceKindFrom(face: string): FaceKind {
  const f = face.toLowerCase();
  const fg = /fiberglass|fibreglass|\bfg\b/.test(f);
  const carbon = /carbon/.test(f);
  if (fg && carbon) return 'hybrid';
  if (fg) return 'fiberglass';
  return 'carbon';
}

const FACE_STOPS: Record<FaceKind, [string, string]> = {
  carbon: ['#3a3a40', '#1f1f23'],
  fiberglass: ['#f7f6f3', '#dedad3'],
  hybrid: ['#8d8a86', '#e4e1db'],
};

/** Hex grid of drill holes as one path (cheap to render). */
function holesPath(): string {
  const r = 1.85;
  const dx = 8.6;
  const dy = 7.6;
  let d = '';
  let row = 0;
  for (let y = 10; y <= 122; y += dy, row++) {
    const offset = row % 2 === 0 ? 0 : dx / 2;
    for (let x = 8 + offset; x <= 112; x += dx) {
      d += `M${(x - r).toFixed(2)} ${y.toFixed(2)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
    }
  }
  return d;
}
const HOLES = holesPath();

const THROAT_HOLE =
  'M60 124 C68 124 76 126 74 132 L63.5 149 C61.5 152.5 58.5 152.5 56.5 149 L46 132 C44 126 52 124 60 124 Z';

function scaleAbout(s: number, cx: number, cy: number) {
  return `translate(${(cx * (1 - s)).toFixed(2)} ${(cy * (1 - s)).toFixed(2)}) scale(${s})`;
}

export interface RacketFigureProps {
  /** Unique, stable id for SVG defs on the page (e.g. "beg-babolat-contact"). */
  uid: string;
  shape: RacketShape;
  brand: BrandFamily;
  /** Stated face material; drives the face colour. */
  face?: string;
  orientation?: 'vertical' | 'horizontal';
  showSweetSpot?: boolean;
  /** Accessible label. Omit to mark the figure decorative. */
  label?: string;
  className?: string;
}

export function RacketFigure({
  uid,
  shape,
  brand,
  face,
  orientation = 'vertical',
  showSweetSpot = true,
  label,
  className,
}: RacketFigureProps) {
  const id = `pcf-r-${uid.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const kind = face ? faceKindFrom(face) : 'carbon';
  const [faceA, faceB] = FACE_STOPS[kind];
  const accent = ACCENT[brand];
  const sil = SILHOUETTE[shape];
  const spot = SWEET_SPOT[shape];
  const horizontal = orientation === 'horizontal';

  const body = (
    <g>
      {/* soft contact shadow */}
      <path d={sil} transform="translate(2.5 3)" fill="#0c0a09" opacity="0.08" />
      <rect x="49.5" y="161" width="22" height="70" rx="5" fill="#0c0a09" opacity="0.07" />

      <g mask={`url(#${id}-cut)`}>
        {/* frame */}
        <path d={sil} fill={`url(#${id}-frame)`} />
        <path d={sil} fill="none" stroke={accent} strokeWidth="1.6" opacity="0.9" />
        {/* hitting face */}
        <g clipPath={`url(#${id}-faceclip)`}>
          <path d={sil} transform={scaleAbout(0.885, 60, 64)} fill={`url(#${id}-face)`} />
          {kind !== 'fiberglass' && (
            <path d={sil} transform={scaleAbout(0.885, 60, 64)} fill={`url(#${id}-weave)`} opacity={kind === 'carbon' ? 0.55 : 0.3} />
          )}
          {(showSweetSpot && shape !== 'hybrid') && (
            <ellipse cx="60" cy={spot.cy} rx={spot.rx} ry={spot.ry} fill={`url(#${id}-spot)`} />
          )}
          {/* glossy sweep */}
          <path d={sil} transform={scaleAbout(0.885, 60, 64)} fill={`url(#${id}-gloss)`} />
        </g>
        {/* throat bridge accent */}
        <path d="M50 121.5 Q60 118 70 121.5" fill="none" stroke={accent} strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      </g>

      {/* rim highlight */}
      <path d={sil} fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="0.8" transform={scaleAbout(0.965, 60, 64)} />

      {/* handle + overgrip */}
      <rect x="48.5" y="158" width="23" height="66" rx="4" fill={`url(#${id}-grip)`} />
      <g clipPath={`url(#${id}-gripclip)`} stroke="#a8a29e" strokeWidth="0.9" opacity="0.7">
        {Array.from({ length: 12 }, (_, i) => (
          <line key={i} x1="46" y1={154 + i * 6.2} x2="74" y2={164 + i * 6.2} />
        ))}
      </g>
      <rect x="48.5" y="158" width="23" height="66" rx="4" fill="none" stroke="#78716c" strokeOpacity="0.35" strokeWidth="0.8" />
      {/* butt cap */}
      <rect x="46.5" y="222" width="27" height="8.5" rx="3.2" fill={accent} />
      <rect x="46.5" y="222" width="27" height="3" rx="1.5" fill="#fff" opacity="0.18" />
      {/* wrist cord */}
      <path d="M56 230.5 C50 239 70 239 64 230.5" fill="none" stroke="#57534e" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );

  return (
    <svg
      viewBox={horizontal ? `0 0 ${H} ${W}` : `0 0 ${W} ${H}`}
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {label && <title>{label}</title>}
      <defs>
        <linearGradient id={`${id}-frame`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3f3f46" />
          <stop offset="0.55" stopColor="#18181b" />
          <stop offset="1" stopColor="#27272a" />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={faceA} />
          <stop offset="1" stopColor={faceB} />
        </linearGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="0.36" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-spot`}>
          <stop offset="0" stopColor="#4ADE80" stopOpacity="0.75" />
          <stop offset="0.55" stopColor="#4ADE80" stopOpacity="0.3" />
          <stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-grip`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e7e5e4" />
          <stop offset="0.5" stopColor="#fafaf9" />
          <stop offset="1" stopColor="#d6d3d1" />
        </linearGradient>
        <pattern id={`${id}-weave`} width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="2" height="2" fill="#fff" opacity="0.07" />
          <rect x="2" y="2" width="2" height="2" fill="#fff" opacity="0.07" />
        </pattern>
        <clipPath id={`${id}-faceclip`}>
          <rect x="0" y="0" width={W} height="118" />
        </clipPath>
        <clipPath id={`${id}-holey`}>
          <rect x="0" y="0" width={W} height="113" />
        </clipPath>
        <clipPath id={`${id}-gripclip`}>
          <rect x="48.5" y="158" width="23" height="66" rx="4" />
        </clipPath>
        <clipPath id={`${id}-holeclip`}>
          <path d={sil} transform={scaleAbout(0.8, 60, 60)} />
        </clipPath>
        <mask id={`${id}-cut`} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
          <rect width={W} height={H} fill="#fff" />
          <path d={THROAT_HOLE} fill="#000" />
          <g clipPath={`url(#${id}-holeclip)`}>
            <g clipPath={`url(#${id}-holey)`}>
              <path d={HOLES} fill="#000" />
            </g>
          </g>
        </mask>
      </defs>
      {horizontal ? <g transform={`translate(0 ${W}) rotate(-90)`}>{body}</g> : body}
    </svg>
  );
}
