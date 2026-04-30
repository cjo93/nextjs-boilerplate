/**
 * CanvasDiagram — technical illustration of the two-perspective canvas metaphor.
 * Drawn in the style of an architect's overlay — two offset frames, ruled guide
 * lines, a crosshatch overlap zone, and callout lines to annotations.
 */
export function CanvasDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* ── Guide grid — faint cross lines ── */}
      {[80, 160, 240, 320, 400].map((x) => (
        <line key={`gx${x}`} x1={x} y1="0" x2={x} y2="340"
          stroke="rgba(240,240,240,0.03)" strokeWidth="0.5" />
      ))}
      {[68, 136, 204, 272].map((y) => (
        <line key={`gy${y}`} x1="0" y1={y} x2="520" y2={y}
          stroke="rgba(240,240,240,0.03)" strokeWidth="0.5" />
      ))}

      {/* ── Canvas A — "Your" perspective (foreground, left-anchored) ── */}
      <rect x="30" y="44" width="300" height="220" rx="2"
        stroke="rgba(240,240,240,0.28)" strokeWidth="1" />
      {/* Corner tick marks */}
      <line x1="30" y1="44" x2="30" y2="56" stroke="rgba(240,240,240,0.5)" strokeWidth="1.5" />
      <line x1="30" y1="44" x2="42" y2="44" stroke="rgba(240,240,240,0.5)" strokeWidth="1.5" />
      <line x1="330" y1="264" x2="330" y2="252" stroke="rgba(240,240,240,0.5)" strokeWidth="1.5" />
      <line x1="330" y1="264" x2="318" y2="264" stroke="rgba(240,240,240,0.5)" strokeWidth="1.5" />
      {/* Internal ruled lines — the "canvas surface" */}
      {[90, 116, 142, 168, 194, 220, 246].map((y) => (
        <line key={`ra${y}`} x1="44" y1={y} x2="190" y2={y}
          stroke="rgba(240,240,240,0.055)" strokeWidth="0.5" />
      ))}
      {/* Brush strokes — "your" marks */}
      <path d="M 54 130 Q 90 118 126 138" stroke="rgba(240,240,240,0.32)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 60 158 Q 100 146 130 162" stroke="rgba(240,240,240,0.18)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M 58 184 Q 88 176 112 188" stroke="rgba(240,240,240,0.10)" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Label: YOU */}
      <text x="22" y="158" fill="rgba(240,240,240,0.35)" fontSize="7.5"
        fontFamily="inherit" letterSpacing="0.14em" textAnchor="middle"
        transform="rotate(-90,22,158)">YOU</text>

      {/* ── Canvas B — "Their" perspective (offset right, behind) ── */}
      <rect x="190" y="76" width="300" height="220" rx="2"
        stroke="rgba(240,240,240,0.13)" strokeWidth="1" />
      {/* Corner tick marks */}
      <line x1="490" y1="76" x2="490" y2="88" stroke="rgba(240,240,240,0.22)" strokeWidth="1.5" />
      <line x1="490" y1="76" x2="478" y2="76" stroke="rgba(240,240,240,0.22)" strokeWidth="1.5" />
      <line x1="190" y1="296" x2="190" y2="284" stroke="rgba(240,240,240,0.22)" strokeWidth="1.5" />
      <line x1="190" y1="296" x2="202" y2="296" stroke="rgba(240,240,240,0.22)" strokeWidth="1.5" />
      {/* Internal ruled lines */}
      {[116, 142, 168, 194, 220, 246, 272].map((y) => (
        <line key={`rb${y}`} x1="340" y1={y} x2="476" y2={y}
          stroke="rgba(240,240,240,0.035)" strokeWidth="0.5" />
      ))}
      {/* Brush strokes — "their" marks */}
      <path d="M 360 148 Q 400 136 432 152" stroke="rgba(240,240,240,0.14)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 366 178 Q 398 166 428 180" stroke="rgba(240,240,240,0.09)" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Label: THEM */}
      <text x="498" y="192" fill="rgba(240,240,240,0.18)" fontSize="7.5"
        fontFamily="inherit" letterSpacing="0.14em" textAnchor="middle"
        transform="rotate(90,498,192)">THEM</text>

      {/* ── Overlap zone — the shared surface neither fully sees ── */}
      <rect x="190" y="76" width="140" height="188" rx="0"
        fill="rgba(240,240,240,0.025)" />
      {/* Crosshatch */}
      {[0,12,24,36,48,60,72,84,96,108,120,132].map((offset) => (
        <line key={`hx${offset}`}
          x1={190 + offset} y1="76" x2={190} y2={76 + offset}
          stroke="rgba(240,240,240,0.045)" strokeWidth="0.4" />
      ))}
      {[0,12,24,36,48,60,72,84,96,108,120,132,144,156,168,180,188].map((offset) => (
        <line key={`hd${offset}`}
          x1={190 + Math.min(offset, 140)} y1={76 + Math.max(0, offset - 140)}
          x2={190 + Math.min(offset + 12, 140)} y2={76 + Math.max(0, offset + 12 - 140)}
          stroke="rgba(240,240,240,0.03)" strokeWidth="0.4" />
      ))}

      {/* ── Callout — "The Gap" annotation ── */}
      <line x1="260" y1="170" x2="260" y2="320" stroke="rgba(240,240,240,0.12)" strokeWidth="0.75" strokeDasharray="3 3" />
      <circle cx="260" cy="170" r="2" fill="rgba(240,240,240,0.3)" />
      <text x="260" y="333" fill="rgba(240,240,240,0.25)" fontSize="7.5"
        fontFamily="inherit" letterSpacing="0.14em" textAnchor="middle">THE GAP</text>

      {/* ── Registration mark — top left corner ── */}
      <circle cx="14" cy="28" r="4" stroke="rgba(240,240,240,0.12)" strokeWidth="0.75" />
      <line x1="14" y1="22" x2="14" y2="34" stroke="rgba(240,240,240,0.12)" strokeWidth="0.5" />
      <line x1="8" y1="28" x2="20" y2="28" stroke="rgba(240,240,240,0.12)" strokeWidth="0.5" />

      {/* ── Frame label ── */}
      <text x="30" y="36" fill="rgba(240,240,240,0.18)" fontSize="7.5"
        fontFamily="inherit" letterSpacing="0.1em">CANVAS A</text>
      <text x="190" y="68" fill="rgba(240,240,240,0.12)" fontSize="7.5"
        fontFamily="inherit" letterSpacing="0.1em">CANVAS B</text>
    </svg>
  );
}

/**
 * LayerDiagram — four resolution layers shown as tapering bars
 * connected by a right-edge vertical line with tick marks.
 */
export function LayerDiagram({ className }: { className?: string }) {
  const layers = [
    { n: "01", title: "Your Nature",       w: 280 },
    { n: "02", title: "The Moment",        w: 210 },
    { n: "03", title: "Their Perspective", w: 150 },
    { n: "04", title: "The Path Forward",  w: 100 },
  ];

  const barH = 32;
  const gap  = 16;
  const totalH = layers.length * (barH + gap) - gap;

  return (
    <svg
      viewBox={`0 0 320 ${totalH + 20}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Right-edge connector line */}
      <line x1="316" y1="0" x2="316" y2={totalH}
        stroke="rgba(240,240,240,0.1)" strokeWidth="0.75" />

      {layers.map((l, i) => {
        const y = i * (barH + gap);
        const opacity = 0.22 - i * 0.04;
        const textOpacity = 0.5 - i * 0.08;

        return (
          <g key={l.n}>
            {/* Bar fill */}
            <rect x="32" y={y} width={l.w} height={barH} rx="2"
              fill={`rgba(240,240,240,${0.03 + i * 0.005})`}
              stroke={`rgba(240,240,240,${opacity})`}
              strokeWidth="0.75" />
            {/* Right-edge tick */}
            <line x1="312" y1={y + barH / 2} x2="320" y2={y + barH / 2}
              stroke="rgba(240,240,240,0.2)" strokeWidth="0.75" />
            {/* Connector to right edge */}
            <line x1={32 + l.w} y1={y + barH / 2} x2="312" y2={y + barH / 2}
              stroke={`rgba(240,240,240,${opacity * 0.4})`}
              strokeWidth="0.5" strokeDasharray="3 4" />
            {/* Layer number */}
            <text x="0" y={y + barH / 2 + 4}
              fill={`rgba(240,240,240,${textOpacity * 0.55})`}
              fontSize="8" fontFamily="inherit" letterSpacing="0.1em">
              {l.n}
            </text>
            {/* Layer title */}
            <text x="42" y={y + barH / 2 + 4}
              fill={`rgba(240,240,240,${textOpacity})`}
              fontSize="10.5" fontFamily="inherit" letterSpacing="-0.01em">
              {l.title}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
