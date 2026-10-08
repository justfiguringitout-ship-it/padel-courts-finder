/**
 * Four small side views of a full padel court (20 m long, 14 SVG units per
 * metre) showing which wall contacts keep a ball alive and which lose the
 * point, per FIP Rules 12, 13 and 14. Pure SVG, no animation.
 */

type Panel = {
  key: string;
  verdict: "good" | "lost";
  title: string;
  text: string;
  aria: string;
  path: string;
  marks: Array<{ x: number; y: number; kind: "bounce" | "wall" | "x" }>;
};

const panels: Panel[] = [
  {
    key: "bounce-glass",
    verdict: "good",
    title: "In play: floor, then glass",
    text: "Their shot bounces on your side first, then hits your back glass. Wait for it and play it off the wall.",
    aria: "A shot crosses the net, bounces once on the far floor, then hits the far back glass. The ball is still in play.",
    path: "M 40 92 Q 140 20 230 119 L 288 96",
    marks: [
      { x: 230, y: 119, kind: "bounce" },
      { x: 288, y: 96, kind: "wall" },
    ],
  },
  {
    key: "glass-first",
    verdict: "lost",
    title: "Point lost: glass before the floor",
    text: "A shot that flies over the net and hits the other team's glass or mesh without bouncing first loses the point for the hitter.",
    aria: "A shot crosses the net and hits the far back glass without bouncing on the floor first. The hitter loses the point.",
    path: "M 40 92 Q 160 10 288 92",
    marks: [{ x: 288, y: 92, kind: "x" }],
  },
  {
    key: "own-glass",
    verdict: "good",
    title: "Allowed: off your own glass",
    text: "You may hit the ball into your own glass walls so it rebounds over the net, as long as it then lands in their court.",
    aria: "A player hits the ball backwards into their own back glass, it rebounds over the net and bounces in the opponents' court. This is a legal shot.",
    path: "M 60 104 L 12 92 Q 120 20 220 119",
    marks: [
      { x: 12, y: 92, kind: "wall" },
      { x: 220, y: 119, kind: "bounce" },
    ],
  },
  {
    key: "own-mesh",
    verdict: "lost",
    title: "Point lost: off your own mesh",
    text: "Your own metal mesh is off limits on your shot. If your hit touches it, or your own floor, you lose the point.",
    aria: "A player hits the ball into the metal mesh above their own glass. The hitter loses the point.",
    path: "M 60 100 Q 30 70 12 70",
    marks: [{ x: 12, y: 70, kind: "x" }],
  },
];

function Court() {
  return (
    <>
      <rect x="0" y="120" width="300" height="20" fill="#15803D" />
      {/* back walls: 3 m glass (42 units), 1 m mesh above */}
      <rect x="4" y="78" width="8" height="42" fill="#7DD3FC" fillOpacity="0.85" />
      <rect x="288" y="78" width="8" height="42" fill="#7DD3FC" fillOpacity="0.85" />
      <rect x="4" y="64" width="8" height="14" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 2" />
      <rect x="288" y="64" width="8" height="14" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 2" />
      {/* net */}
      <rect x="148" y="108" width="4" height="12" fill="#fff" />
    </>
  );
}

export function WallRules() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {panels.map((p) => {
        const good = p.verdict === "good";
        const stroke = good ? "#4ADE80" : "#FB7185";
        return (
          <figure key={p.key} className="overflow-hidden rounded-xl border border-stone-200 bg-white">
            <div className="bg-court px-2 pt-2">
              <svg viewBox="0 48 300 92" role="img" aria-label={p.aria} className="h-auto w-full">
                <Court />
                <path d={p.path} fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeDasharray={good ? undefined : "6 5"} />
                {p.marks.map((m, i) =>
                  m.kind === "x" ? (
                    <g key={i} stroke="#FB7185" strokeWidth="4" strokeLinecap="round">
                      <line x1={m.x - 9} y1={m.y - 9} x2={m.x + 9} y2={m.y + 9} />
                      <line x1={m.x - 9} y1={m.y + 9} x2={m.x + 9} y2={m.y - 9} />
                    </g>
                  ) : (
                    <circle key={i} cx={m.x} cy={m.y} r="6" fill="#FDE047" stroke="oklch(0.16 0.028 255)" strokeWidth="2" />
                  ),
                )}
              </svg>
            </div>
            <figcaption className="p-4">
              <p className={`font-display text-sm font-bold ${good ? "text-padel-green-dark" : "text-rose-700"}`}>{p.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{p.text}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
