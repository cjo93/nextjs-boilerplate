/* ─────────────────────────────────────────────────────────────────────────────
   Vercel-style abstract mini visuals for DEFRAG landing page
   System-like graphics: orbits, nodes, waveforms, trust icons
───────────────────────────────────────────────────────────────────────────── */

const S = "rgba(245,245,246,0.6)"; // Standard stroke
const A = "rgba(225,185,138,0.8)"; // Accent stroke

/* Alignment: Radial orbit graphic showing stable center + timing overlay */
export function VisualAlignment() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20" aria-hidden>
      {/* Center dot */}
      <circle cx="60" cy="60" r="4" fill={A} />
      {/* Orbits */}
      <circle cx="60" cy="60" r="20" stroke={S} strokeWidth="0.75" opacity="0.6" />
      <circle cx="60" cy="60" r="32" stroke={S} strokeWidth="0.75" opacity="0.4" />
      <circle cx="60" cy="60" r="44" stroke={S} strokeWidth="0.75" opacity="0.2" />
      {/* Timing indicator — small dot on outer orbit */}
      <circle cx="104" cy="60" r="2.5" fill={A} />
      <line x1="60" y1="60" x2="104" y2="60" stroke={A} strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

/* DEFRAG: Two-node diagram with directional arrow (communication) */
export function VisualDEFRAG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20" aria-hidden>
      {/* Left node */}
      <circle cx="30" cy="60" r="6" stroke={S} strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="60" r="3" fill={S} />
      {/* Right node */}
      <circle cx="90" cy="60" r="6" stroke={A} strokeWidth="1.5" fill="none" />
      <circle cx="90" cy="60" r="3" fill={A} />
      {/* Connecting line with arrow */}
      <line x1="36" y1="60" x2="84" y2="60" stroke={S} strokeWidth="0.75" />
      {/* Arrowhead pointing right */}
      <path d="M 84 60 L 78 56 L 78 64 Z" fill={A} opacity="0.6" />
      {/* Small accent pulse dot at midpoint */}
      <circle cx="60" cy="60" r="1.5" fill={A} opacity="0.8" />
    </svg>
  );
}

/* Restore: Waveform smoothing from jagged to calm */
export function VisualRestore() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20" aria-hidden>
      {/* Jagged left side → smooth right side waveform */}
      <polyline
        points="10,60 15,45 20,70 25,50 30,65 35,55 40,60"
        stroke={S}
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      {/* Smooth curve right side */}
      <path
        d="M 40 60 Q 50 45 60 60 T 80 60 T 100 60"
        stroke={A}
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      {/* Direction indicator */}
      <path d="M 95 55 L 105 60 L 95 65" stroke={A} strokeWidth="0.75" fill="none" />
    </svg>
  );
}

/* Trust icons: Lock, Eye-with-slash, Shield — thin geometric strokes */
export function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <rect x="5" y="10" width="14" height="10" rx="1" stroke={A} strokeWidth="1" />
      <path d="M 9 10 V 7 C 9 5.34 10.34 4 12 4 C 13.66 4 15 5.34 15 7 V 10" stroke={A} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function IconEyeSlash() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      {/* Eye outline */}
      <path d="M 4 12 C 6 8 9 6 12 6 C 15 6 18 8 20 12 C 18 16 15 18 12 18 C 9 18 6 16 4 12" stroke={A} strokeWidth="1" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="2.5" stroke={A} strokeWidth="1" fill="none" />
      {/* Slash line */}
      <line x1="4" y1="18" x2="20" y2="6" stroke={A} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      {/* Shield shape */}
      <path d="M 12 2 L 20 6 L 20 13 C 20 17 12 21 12 21 C 12 21 4 17 4 13 L 4 6 Z" stroke={A} strokeWidth="1" fill="none" />
      {/* Center accent */}
      <circle cx="12" cy="12" r="2" fill={A} opacity="0.5" />
    </svg>
  );
}
