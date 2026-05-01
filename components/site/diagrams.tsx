"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   DEFRAG Diagrams
   All strokes use warm-palette tokens so they read correctly on #F7F3EE bg.
   Pillar icons have subtle CSS animations: pulse / wave / approach.
───────────────────────────────────────────────────────────────────────────── */

/* ─── BridgeDiagram ──────────────────────────────────────────────────────────
   Two offset circles (Your Intent / Their Perception) with a DEFRAG bridge.
   Warm charcoal strokes on light background.
────────────────────────────────────────────────────────────────────────────── */
export function BridgeDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 220" fill="none" className={className} aria-hidden>

      {/* Corner registration marks */}
      <path d="M 8 8 L 8 18 M 8 8 L 18 8"   stroke="rgba(225,185,138,0.2)" strokeWidth="0.75" />
      <path d="M 412 8 L 412 18 M 412 8 L 402 8" stroke="rgba(225,185,138,0.2)" strokeWidth="0.75" />
      <path d="M 8 212 L 8 202 M 8 212 L 18 212" stroke="rgba(225,185,138,0.2)" strokeWidth="0.75" />
      <path d="M 412 212 L 412 202 M 412 212 L 402 212" stroke="rgba(225,185,138,0.2)" strokeWidth="0.75" />

      {/* Left circle — your intent */}
      <circle cx="105" cy="110" r="72" stroke="rgba(245,245,246,0.14)" strokeWidth="0.75" />
      <circle cx="105" cy="110" r="50" stroke="rgba(245,245,246,0.07)" strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="105" cy="110" r="6"  fill="rgba(245,245,246,0.3)" />
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={i}
            x1={105 + 68 * Math.cos(rad)} y1={110 + 68 * Math.sin(rad)}
            x2={105 + 72 * Math.cos(rad)} y2={110 + 72 * Math.sin(rad)}
            stroke="rgba(245,245,246,0.18)" strokeWidth="0.5"
          />
        );
      })}
      <text x="105" y="96" textAnchor="middle" fill="rgba(245,245,246,0.3)" fontSize="7.5" fontFamily="inherit" letterSpacing="0.1em">YOUR INTENT</text>

      {/* Right circle — their perception */}
      <circle cx="315" cy="110" r="72" stroke="rgba(245,245,246,0.08)" strokeWidth="0.75" />
      <circle cx="315" cy="110" r="50" stroke="rgba(245,245,246,0.05)" strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="315" cy="110" r="6"  fill="rgba(245,245,246,0.18)" />
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={i}
            x1={315 + 68 * Math.cos(rad)} y1={110 + 68 * Math.sin(rad)}
            x2={315 + 72 * Math.cos(rad)} y2={110 + 72 * Math.sin(rad)}
            stroke="rgba(245,245,246,0.12)" strokeWidth="0.5"
          />
        );
      })}
      <text x="315" y="96" textAnchor="middle" fill="rgba(245,245,246,0.2)" fontSize="7.5" fontFamily="inherit" letterSpacing="0.1em">THEIR PERCEPTION</text>

      {/* Bridge / overlap zone */}
      <path
        d="M 177 74 Q 210 60 243 74 Q 228 110 210 126 Q 192 110 177 74 Z"
        fill="rgba(225,185,138,0.08)"
        stroke="rgba(225,185,138,0.35)"
        strokeWidth="0.75"
      />
      <text x="210" y="105" textAnchor="middle" fill="rgba(225,185,138,0.85)" fontSize="7" fontFamily="inherit" letterSpacing="0.14em" fontWeight="600">DEFRAG</text>
      <text x="210" y="116" textAnchor="middle" fill="rgba(225,185,138,0.4)" fontSize="6" fontFamily="inherit" letterSpacing="0.08em">bridges the space</text>

      {/* Connector dashes */}
      <line x1="155" y1="110" x2="178" y2="110" stroke="rgba(245,245,246,0.12)" strokeWidth="0.5" strokeDasharray="2 3" />
      <line x1="242" y1="110" x2="265" y2="110" stroke="rgba(245,245,246,0.08)"  strokeWidth="0.5" strokeDasharray="2 3" />
    </svg>
  );
}

/* ─── Capability Icons ───────────────────────────────────────────────────────
   Warm charcoal strokes — render correctly on light background.
────────────────────────────────────────────────────────────────────────────── */
const S = "rgba(245,245,246,0.65)"; // standard stroke — off-white on dark

export function IconNature() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <circle cx="12" cy="7" r="3.5" stroke={S} strokeWidth="1.1" />
      <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke={S} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function IconMoment() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke={S} strokeWidth="1.1" />
      <path d="M12 7.5V12l3 2" stroke={S} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPerspective() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <ellipse cx="12" cy="12" rx="9" ry="5.5" stroke={S} strokeWidth="1.1" />
      <circle cx="12" cy="12" r="2.5" stroke={S} strokeWidth="1.1" />
    </svg>
  );
}

export function IconLanguage() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <path d="M4 7h10M4 12h7M4 17h5" stroke={S} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M15 13l2 3 4-5" stroke={S} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Pillar Icons — animated ────────────────────────────────────────────────
   IconBaseline: pulsing center dot
   IconNow:      gentle wave animation on the radial lines
   IconConnection: two circles drifting closer
────────────────────────────────────────────────────────────────────────────── */
const A = "rgba(225,185,138,0.8)"; // accent stroke — warm amber on dark

export function IconBaseline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <style>{`
        @keyframes defrag-pulse {
          0%,100% { r: 2; opacity: 0.7; }
          50%      { r: 3.5; opacity: 1; }
        }
        .icon-baseline-dot { animation: defrag-pulse 4s ease-in-out infinite; }
      `}</style>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={A} strokeWidth="1.1" />
      <path d="M7 12h10M7 8h6M7 16h8" stroke={A} strokeWidth="1.1" strokeLinecap="round" />
      <circle className="icon-baseline-dot" cx="18" cy="18" r="2" fill={A} />
    </svg>
  );
}

export function IconNow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <style>{`
        @keyframes defrag-wave {
          0%,100% { stroke-dashoffset: 0; }
          50%      { stroke-dashoffset: 8; }
        }
        .icon-now-ring { animation: defrag-wave 5s ease-in-out infinite; stroke-dasharray: 4 4; }
      `}</style>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke={A} strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5" stroke={A} strokeWidth="1.1" />
      <circle className="icon-now-ring" cx="12" cy="12" r="8" stroke={A} strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}

export function IconConnection() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <style>{`
        @keyframes defrag-approach {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(1.5px); }
        }
        @keyframes defrag-approach-r {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(-1.5px); }
        }
        .icon-conn-l { transform-origin: 7px 12px;  animation: defrag-approach   6s ease-in-out infinite; }
        .icon-conn-r { transform-origin: 17px 12px; animation: defrag-approach-r 6s ease-in-out infinite; }
      `}</style>
      <circle className="icon-conn-l" cx="7"  cy="12" r="3" stroke={A} strokeWidth="1.1" />
      <circle className="icon-conn-r" cx="17" cy="12" r="3" stroke={A} strokeWidth="1.1" />
      <path d="M10 12h4" stroke={A} strokeWidth="1.1" strokeDasharray="1.5 1.5" />
    </svg>
  );
}
