"use client";

import { useEffect, useRef } from "react";

/* ─── Bridge Diagram ──────────────────────────────────────────────────────────
   Two offset circles with a connecting path between them.
   Left = your intent, Right = their perception, Center = DEFRAG bridge.
────────────────────────────────────────────────────────────────────────────── */
export function BridgeDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Left circle — your intent */}
      <circle cx="105" cy="110" r="72" stroke="rgba(240,240,240,0.12)" strokeWidth="0.75" />
      <circle cx="105" cy="110" r="50" stroke="rgba(240,240,240,0.07)" strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="105" cy="110" r="6" fill="rgba(240,240,240,0.22)" />
      {/* Left label */}
      <text x="105" y="96" textAnchor="middle" fill="rgba(240,240,240,0.3)" fontSize="7.5" fontFamily="inherit" letterSpacing="0.1em" textDecoration="none">YOUR INTENT</text>

      {/* Right circle — their perception */}
      <circle cx="315" cy="110" r="72" stroke="rgba(240,240,240,0.08)" strokeWidth="0.75" />
      <circle cx="315" cy="110" r="50" stroke="rgba(240,240,240,0.05)" strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="315" cy="110" r="6" fill="rgba(240,240,240,0.14)" />
      {/* Right label */}
      <text x="315" y="96" textAnchor="middle" fill="rgba(240,240,240,0.2)" fontSize="7.5" fontFamily="inherit" letterSpacing="0.1em">THEIR PERCEPTION</text>

      {/* Overlap / bridge zone */}
      <path
        d="M 177 74 Q 210 60 243 74 Q 228 110 210 126 Q 192 110 177 74 Z"
        fill="rgba(240,240,240,0.025)"
        stroke="rgba(240,240,240,0.1)"
        strokeWidth="0.5"
      />

      {/* Center DEFRAG label */}
      <text x="210" y="107" textAnchor="middle" fill="rgba(240,240,240,0.35)" fontSize="7" fontFamily="inherit" letterSpacing="0.14em" fontWeight="600">DEFRAG</text>
      <text x="210" y="118" textAnchor="middle" fill="rgba(240,240,240,0.18)" fontSize="6" fontFamily="inherit" letterSpacing="0.08em">bridges the space</text>

      {/* Connector lines from circles to bridge */}
      <line x1="155" y1="110" x2="180" y2="110" stroke="rgba(240,240,240,0.15)" strokeWidth="0.5" strokeDasharray="2 3" />
      <line x1="240" y1="110" x2="265" y2="110" stroke="rgba(240,240,240,0.1)" strokeWidth="0.5" strokeDasharray="2 3" />

      {/* Tick marks — left circle */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const r = 72;
        const rad = (deg * Math.PI) / 180;
        const x1 = 105 + (r - 4) * Math.cos(rad);
        const y1 = 110 + (r - 4) * Math.sin(rad);
        const x2 = 105 + r * Math.cos(rad);
        const y2 = 110 + r * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(240,240,240,0.18)" strokeWidth="0.5" />
        );
      })}

      {/* Tick marks — right circle */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const r = 72;
        const rad = (deg * Math.PI) / 180;
        const x1 = 315 + (r - 4) * Math.cos(rad);
        const y1 = 110 + (r - 4) * Math.sin(rad);
        const x2 = 315 + r * Math.cos(rad);
        const y2 = 110 + r * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(240,240,240,0.12)" strokeWidth="0.5" />
        );
      })}

      {/* Registration corner marks */}
      <path d="M 8 8 L 8 18 M 8 8 L 18 8" stroke="rgba(240,240,240,0.12)" strokeWidth="0.75" />
      <path d="M 412 8 L 412 18 M 412 8 L 402 8" stroke="rgba(240,240,240,0.12)" strokeWidth="0.75" />
      <path d="M 8 212 L 8 202 M 8 212 L 18 212" stroke="rgba(240,240,240,0.12)" strokeWidth="0.75" />
      <path d="M 412 212 L 412 202 M 412 212 L 402 212" stroke="rgba(240,240,240,0.12)" strokeWidth="0.75" />
    </svg>
  );
}

/* ─── Capability Icons ───────────────────────────────────────────────────────
   Four minimal SVG icons: person, moment/clock, perspective/eye, language/wave
────────────────────────────────────────────────────────────────────────────── */
export function IconNature() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
      <circle cx="12" cy="7" r="3.5" stroke="rgba(240,240,240,0.5)" strokeWidth="1" />
      <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="rgba(240,240,240,0.5)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function IconMoment() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="rgba(240,240,240,0.5)" strokeWidth="1" />
      <path d="M12 7.5V12l3 2" stroke="rgba(240,240,240,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPerspective() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
      <ellipse cx="12" cy="12" rx="9" ry="5.5" stroke="rgba(240,240,240,0.5)" strokeWidth="1" />
      <circle cx="12" cy="12" r="2.5" stroke="rgba(240,240,240,0.5)" strokeWidth="1" />
    </svg>
  );
}

export function IconLanguage() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
      <path d="M4 7h10M4 12h7M4 17h5" stroke="rgba(240,240,240,0.5)" strokeWidth="1" strokeLinecap="round" />
      <path d="M15 13l2 3 4-5" stroke="rgba(240,240,240,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Pillar icons ───────────────────────────────────────────────────────────  */
export function IconBaseline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(240,240,240,0.3)" strokeWidth="1" />
      <path d="M7 12h10M7 8h6M7 16h8" stroke="rgba(240,240,240,0.3)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function IconNow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="rgba(240,240,240,0.3)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5" stroke="rgba(240,240,240,0.3)" strokeWidth="1" />
    </svg>
  );
}

export function IconConnection() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <circle cx="7" cy="12" r="3" stroke="rgba(240,240,240,0.3)" strokeWidth="1" />
      <circle cx="17" cy="12" r="3" stroke="rgba(240,240,240,0.3)" strokeWidth="1" />
      <path d="M10 12h4" stroke="rgba(240,240,240,0.3)" strokeWidth="1" strokeDasharray="1.5 1.5" />
    </svg>
  );
}
