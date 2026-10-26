/**
 * Inline SVG illustrations for the symbolic rewards on /ai-leaderboard, drawn in
 * the site palette (padel green, turf, court navy, medal metals). Server-rendered,
 * no defs or ids, so any number of copies can sit on one page.
 */
import type { ReactNode } from "react";
import type { MedalId, TierRewardId } from "@/lib/ai-leaderboard/rewards";

const GREEN = "#16A34A";
const GREEN_DARK = "#15803D";
const GREEN_LIGHT = "#DCFCE7";
const TURF = "#4ADE80";
const NAVY = "#1E293B";
const INK = "#0F172A";
const BALL = "#D9F950";
const BALL_LINE = "#9DB313";
const GOLD = "#D4A017";
const GOLD_SOFT = "#FEF6DC";
const GOLD_LIGHT = "#F1D27A";

interface ArtProps {
  size?: number;
  className?: string;
  title: string;
}

function Svg({ size = 64, className, title, children }: ArtProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={`shrink-0${className ? ` ${className}` : ""}`}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

function Ball({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={BALL} stroke={BALL_LINE} strokeWidth="1.2" />
      <path
        d={`M${cx - r * 0.75} ${cy - r * 0.55} Q${cx} ${cy} ${cx - r * 0.75} ${cy + r * 0.55} M${cx + r * 0.75} ${cy - r * 0.55} Q${cx} ${cy} ${cx + r * 0.75} ${cy + r * 0.55}`}
        fill="none"
        stroke="#fff"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </g>
  );
}

export function VisitorBadgeArt(props: ArtProps) {
  return (
    <Svg {...props}>
      <path d="M21 2 L32 16 L43 2" fill="none" stroke={GREEN} strokeWidth="3.5" strokeLinejoin="round" />
      <rect x="28.5" y="12.5" width="7" height="7" rx="1.5" fill="#8A94A6" />
      <rect x="11" y="18" width="42" height="42" rx="6" fill="#fff" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M11 24 a6 6 0 0 1 6 -6 h30 a6 6 0 0 1 6 6 v7 h-42 z" fill={GREEN} />
      <rect x="20" y="22.5" width="24" height="3.5" rx="1.75" fill="#fff" />
      <Ball cx={32} cy={45} r={8} />
    </Svg>
  );
}

export function GoldStarArt(props: ArtProps) {
  return (
    <Svg {...props}>
      <circle cx="32" cy="34" r="27" fill={GOLD_SOFT} />
      <path
        d="M32.0 12.0 L37.6 26.3 L52.9 27.2 L41.0 36.9 L44.9 51.8 L32.0 43.5 L19.1 51.8 L23.0 36.9 L11.1 27.2 L26.4 26.3 Z"
        fill={GOLD}
        stroke="#A87C0C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M32.0 20.0 L35.5 29.1 L45.3 29.7 L37.7 35.9 L40.2 45.3 L32.0 40.0 L23.8 45.3 L26.3 35.9 L18.7 29.7 L28.5 29.1 Z"
        fill={GOLD_LIGHT}
        opacity="0.7"
      />
      <path d="M10.0 7.0 L10.9 10.7 L14.8 10.5 L11.5 12.5 L12.9 16.0 L10.0 13.6 L7.1 16.0 L8.5 12.5 L5.2 10.5 L9.1 10.7 Z" fill={GOLD} />
      <path d="M54.0 10.0 L54.8 12.9 L57.8 12.8 L55.2 14.4 L56.4 17.2 L54.0 15.3 L51.6 17.2 L52.8 14.4 L50.2 12.8 L53.2 12.9 Z" fill={GOLD} />
      <path d="M53.0 48.5 L53.6 51.1 L56.3 50.9 L54.0 52.3 L55.1 54.8 L53.0 53.1 L50.9 54.8 L52.0 52.3 L49.7 50.9 L52.4 51.1 Z" fill={GOLD} />
    </Svg>
  );
}

export function ModelAirplaneArt(props: ArtProps) {
  return (
    <Svg {...props}>
      <circle cx="32" cy="32" r="29" fill={GREEN_LIGHT} />
      <path d="M4 47 C12 43 16 50 24 44" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeDasharray="2.5 3.5" />
      <path d="M14 27 L10 15 L17 15 L23 26 Z" fill={GREEN} />
      <path d="M14 33 L8 39 L14 39 L20 34 Z" fill={GREEN_DARK} />
      <path d="M13 27 L44 24.5 Q54 25.5 55 31 Q54 36.5 44 37 L16 35.5 Q12 34 13 27 Z" fill={NAVY} />
      <path d="M18 30.6 L47 29.8 L47 32.2 L18 32.4 Z" fill={TURF} />
      <path d="M40 26 Q47 25.6 50.5 29.2 L41 29.2 Z" fill="#BFDBFE" />
      <path d="M27 32.5 L37 32.5 L30 49 L23.5 49 Z" fill={GREEN} stroke={GREEN_DARK} strokeWidth="1" strokeLinejoin="round" />
      <line x1="57" y1="20" x2="57" y2="42" stroke="#8A94A6" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="56" cy="31" r="2.4" fill={GOLD} />
    </Svg>
  );
}

export function VirtualPadelSessionArt(props: ArtProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="9.5" width="59" height="45" rx="6" fill="none" stroke={TURF} strokeWidth="1.5" strokeDasharray="2.5 3" />
      <rect x="6" y="13" width="52" height="38" rx="3" fill={NAVY} />
      <rect x="9" y="16" width="46" height="32" rx="1.5" fill={GREEN} />
      <line x1="19" y1="16" x2="19" y2="48" stroke="#fff" strokeWidth="1" />
      <line x1="45" y1="16" x2="45" y2="48" stroke="#fff" strokeWidth="1" />
      <line x1="19" y1="32" x2="45" y2="32" stroke="#fff" strokeWidth="1" />
      <line x1="32" y1="14" x2="32" y2="50" stroke="#E2E8F0" strokeWidth="2" />
      <Ball cx={23} cy={24} r={3.6} />
      <g transform="rotate(-35 46 42)">
        <rect x="44.4" y="49" width="3.2" height="11" rx="1.4" fill={INK} />
        <ellipse cx="46" cy="40.5" rx="7.5" ry="9" fill={TURF} stroke={INK} strokeWidth="1.6" />
        <circle cx="43.5" cy="38" r="0.9" fill={INK} opacity="0.55" />
        <circle cx="48.5" cy="38" r="0.9" fill={INK} opacity="0.55" />
        <circle cx="46" cy="41" r="0.9" fill={INK} opacity="0.55" />
        <circle cx="43.5" cy="44" r="0.9" fill={INK} opacity="0.55" />
        <circle cx="48.5" cy="44" r="0.9" fill={INK} opacity="0.55" />
      </g>
      <rect x="6" y="3" width="3" height="3" fill={TURF} />
      <rect x="11" y="5" width="2" height="2" fill={TURF} />
      <rect x="54" y="3" width="3" height="3" fill={TURF} />
      <rect x="50" y="58" width="2" height="2" fill={TURF} />
    </Svg>
  );
}

const MEDAL_COLOR: Record<MedalId, { fill: string; label: string; n: number }> = {
  gold: { fill: GOLD, label: "Gold Medal", n: 1 },
  silver: { fill: "#8A94A6", label: "Silver Medal", n: 2 },
  bronze: { fill: "#B8733A", label: "Bronze Medal", n: 3 },
};

export function MedalArt({ medal, ...props }: Omit<ArtProps, "title"> & { medal: MedalId; title?: string }) {
  const m = MEDAL_COLOR[medal];
  return (
    <Svg {...props} title={props.title ?? m.label}>
      <path d="M18 2 h11 l6 20 h-11 z" fill="#2563EB" opacity="0.85" />
      <path d="M46 2 h-11 l-6 20 h11 z" fill="#DC2626" opacity="0.85" />
      <circle cx="32" cy="40" r="20" fill={m.fill} />
      <circle cx="32" cy="40" r="14.5" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.5" />
      <text x="32" y="48" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="system-ui, sans-serif">
        {m.n}
      </text>
    </Svg>
  );
}

export function TierArt({ id, ...props }: ArtProps & { id: TierRewardId }) {
  switch (id) {
    case "visitor-badge":
      return <VisitorBadgeArt {...props} />;
    case "gold-star":
      return <GoldStarArt {...props} />;
    case "model-airplane":
      return <ModelAirplaneArt {...props} />;
    case "virtual-padel-session":
      return <VirtualPadelSessionArt {...props} />;
  }
}
