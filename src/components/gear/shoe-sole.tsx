import type { SolePattern } from './types';

/**
 * Original outsole diagram (seen from below, toe at the top, or toe to the
 * right when horizontal). Only draws a tread the page actually states:
 * herringbone, herringbone with micro studs, hybrid (herringbone forefoot
 * and heel with a flatter pivot zone), or a running-shoe lug sole for the
 * "avoid" example. `unknown` draws the outline with no invented tread.
 */

const W = 100;
const H = 240;

const OUTLINE =
  'M52 6 C74 6 88 24 89 52 C90 78 85 100 81 122 C77 142 79 162 80 184 C82 212 70 234 50 234 C30 234 20 212 22 186 C24 160 22 140 18 118 C14 96 10 74 12 50 C14 22 30 6 52 6 Z';

function zigzagRows(y0: number, y1: number, step: number, amp: number, period: number) {
  let d = '';
  for (let y = y0; y <= y1; y += step) {
    d += `M-4 ${y}`;
    for (let x = -4, up = true; x <= W + 4; x += period / 2, up = !up) {
      d += `L${x + period / 2} ${up ? y - amp : y}`;
    }
  }
  return d;
}

function lugs() {
  // Blocky, widely spaced running lugs (the pattern the guide says to avoid)
  let d = '';
  for (let y = 16; y <= 226; y += 15) {
    const off = (y / 15) % 2 === 0 ? 0 : 9;
    for (let x = 4 + off; x <= 96; x += 18) {
      d += `M${x} ${y}h11a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2z`;
    }
  }
  return d;
}

function studs() {
  let d = '';
  for (let y = 18; y <= 104; y += 9) {
    for (let x = 18 + ((y / 9) % 2) * 6; x <= 86; x += 12) {
      d += `M${x - 1.3} ${y + 3}a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0`;
    }
  }
  return d;
}

const HERRING = zigzagRows(8, 236, 6.5, 4.2, 9);
const HYBRID_FORE = zigzagRows(8, 112, 6.5, 4.2, 9);
const LUGS = lugs();
const STUDS = studs();

export interface ShoeSoleProps {
  uid: string;
  pattern: SolePattern;
  orientation?: 'vertical' | 'horizontal';
  label?: string;
  className?: string;
}

export function ShoeSole({ uid, pattern, orientation = 'vertical', label, className }: ShoeSoleProps) {
  const id = `pcf-s-${uid.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const horizontal = orientation === 'horizontal';
  const avoid = pattern === 'running';
  const rubber = avoid ? '#a8a29e' : '#2f3a33';
  const tread = avoid ? '#78716c' : '#4ADE80';

  const body = (
    <g>
      <path d={OUTLINE} transform="translate(2 3)" fill="#0c0a09" opacity="0.08" />
      <path d={OUTLINE} fill={`url(#${id}-rubber)`} />
      <g clipPath={`url(#${id}-inset)`} fill="none" stroke={tread} strokeLinejoin="round">
        {(pattern === 'herringbone' || pattern === 'herringbone-studs') && (
          <path d={HERRING} strokeWidth="1.5" strokeOpacity="0.75" />
        )}
        {pattern === 'herringbone-studs' && <path d={STUDS} fill="#f5f5f4" stroke="none" opacity="0.85" />}
        {pattern === 'hybrid' && (
          <>
            <path d={HYBRID_FORE} strokeWidth="1.5" strokeOpacity="0.75" />
            {/* flatter pivot zone at the ball of the foot */}
            <circle cx="50" cy="62" r="19" fill={rubber} stroke="none" />
            <circle cx="50" cy="62" r="17" strokeWidth="1.2" strokeOpacity="0.8" />
            <circle cx="50" cy="62" r="11" strokeWidth="1.2" strokeOpacity="0.6" />
            <circle cx="50" cy="62" r="5" strokeWidth="1.2" strokeOpacity="0.45" />
            {/* smooth midfoot */}
            <path d="M8 118 H92 M8 140 H92" strokeWidth="1" strokeOpacity="0.35" />
          </>
        )}
        {pattern === 'running' && <path d={LUGS} fill="#d6d3d1" stroke="#78716c" strokeWidth="0.8" />}
        {pattern === 'unknown' && (
          <path d={OUTLINE} transform="translate(13 30) scale(0.74)" strokeWidth="1.2" strokeDasharray="3 4" strokeOpacity="0.5" stroke="#d6d3d1" />
        )}
      </g>
      {/* toe wrap and heel counter hints */}
      <path d="M24 26 C34 10 70 8 80 26" fill="none" stroke="#fff" strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round" />
      <path d={OUTLINE} fill="none" stroke="#0c0a09" strokeOpacity="0.35" strokeWidth="1" />
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
        <linearGradient id={`${id}-rubber`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={avoid ? '#d6d3d1' : '#3b4a41'} />
          <stop offset="1" stopColor={rubber} />
        </linearGradient>
        <clipPath id={`${id}-inset`}>
          <path d={OUTLINE} transform="translate(4.5 7) scale(0.91 0.94)" />
        </clipPath>
      </defs>
      {/* horizontal: toe points right */}
      {horizontal ? <g transform={`translate(${H} 0) rotate(90)`}>{body}</g> : body}
    </svg>
  );
}
