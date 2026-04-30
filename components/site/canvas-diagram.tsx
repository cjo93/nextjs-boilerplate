/**
 * CanvasDiagram — a precise SVG illustration of the three-layer canvas metaphor.
 * Two overlapping rectangles with slight offset: the shared canvas two people paint on
 * from different angles. No colour, no gradients — just stroke weight.
 */
export function CanvasDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Background canvas — "their" perspective, offset right */}
      <rect
        x="160" y="40" width="280" height="200"
        stroke="rgba(240,240,240,0.10)"
        strokeWidth="1"
        rx="2"
      />
      {/* Foreground canvas — "your" perspective */}
      <rect
        x="40" y="60" width="280" height="200"
        stroke="rgba(240,240,240,0.22)"
        strokeWidth="1"
        rx="2"
      />

      {/* Overlap region — the shared zone neither person sees fully */}
      <rect
        x="160" y="60" width="160" height="180"
        fill="rgba(240,240,240,0.03)"
        stroke="rgba(240,240,240,0.08)"
        strokeWidth="0.5"
        rx="1"
      />

      {/* Left person indicator */}
      <line x1="40" y1="60" x2="40" y2="260" stroke="rgba(240,240,240,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="40" cy="60" r="2" fill="rgba(240,240,240,0.5)" />
      <text x="28" y="172" fill="rgba(240,240,240,0.25)" fontSize="9" fontFamily="inherit" letterSpacing="0.08em" textAnchor="middle" transform="rotate(-90,28,172)">YOU</text>

      {/* Right person indicator */}
      <line x1="440" y1="40" x2="440" y2="240" stroke="rgba(240,240,240,0.15)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="440" cy="40" r="2" fill="rgba(240,240,240,0.25)" />
      <text x="452" y="148" fill="rgba(240,240,240,0.15)" fontSize="9" fontFamily="inherit" letterSpacing="0.08em" textAnchor="middle" transform="rotate(90,452,148)">THEM</text>

      {/* Stroke marks on "your" canvas */}
      <line x1="72" y1="120" x2="130" y2="148" stroke="rgba(240,240,240,0.18)" strokeWidth="1" strokeLinecap="round" />
      <line x1="72" y1="148" x2="118" y2="172" stroke="rgba(240,240,240,0.10)" strokeWidth="1" strokeLinecap="round" />
      <line x1="80" y1="176" x2="138" y2="190" stroke="rgba(240,240,240,0.07)" strokeWidth="1" strokeLinecap="round" />

      {/* Stroke marks on "their" canvas */}
      <line x1="330" y1="100" x2="388" y2="128" stroke="rgba(240,240,240,0.10)" strokeWidth="1" strokeLinecap="round" />
      <line x1="320" y1="130" x2="380" y2="152" stroke="rgba(240,240,240,0.07)" strokeWidth="1" strokeLinecap="round" />

      {/* Overlap divider */}
      <line x1="240" y1="60" x2="240" y2="240" stroke="rgba(240,240,240,0.06)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Label: "the gap" */}
      <text x="240" y="275" fill="rgba(240,240,240,0.2)" fontSize="8.5" fontFamily="inherit" letterSpacing="0.12em" textAnchor="middle">THE GAP</text>
    </svg>
  );
}

/**
 * LayerDiagram — vertical stack showing the four resolution layers.
 */
export function LayerDiagram({ className }: { className?: string }) {
  const layers = [
    { n: "01", title: "Your Nature", w: "100%" },
    { n: "02", title: "The Moment",  w: "80%" },
    { n: "03", title: "Their Side",  w: "60%" },
    { n: "04", title: "The Words",   w: "44%" },
  ];

  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {layers.map((l, i) => {
        const y = i * 44;
        const barW = parseFloat(l.w) / 100 * 280;
        return (
          <g key={l.n}>
            {/* Bar */}
            <rect x="36" y={y + 8} width={barW} height="28" rx="2"
              fill="rgba(240,240,240,0.04)"
              stroke="rgba(240,240,240,0.12)"
              strokeWidth="0.75"
            />
            {/* Layer number */}
            <text x="0" y={y + 28} fill="rgba(240,240,240,0.25)" fontSize="8" fontFamily="inherit" letterSpacing="0.1em">{l.n}</text>
            {/* Layer title */}
            <text x="48" y={y + 27} fill="rgba(240,240,240,0.45)" fontSize="10" fontFamily="inherit" letterSpacing="-0.01em">{l.title}</text>
          </g>
        );
      })}
    </svg>
  );
}
