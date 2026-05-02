"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10"
        style={{
          height: 52,
          borderBottom: "1px solid #1a1a1a",
          background: "#000000",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em" }}>
          DEFRAG
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["Product", "Pricing", "How It Works"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#555555",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 120ms",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#555555"}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "#555555",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
              transition: "color 120ms",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#555555"}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              padding: "0 14px",
              height: 32,
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid #ffffff",
              color: "#ffffff",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
              transition: "background 120ms, color 120ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Get Access
          </Link>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          borderBottom: "1px solid #1a1a1a",
          padding: "clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.16em",
              color: "#444444",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
              marginBottom: 32,
            }}
          >
            SYSTEM_ACTIVE · PRIVATE_MODE_ON
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "#ffffff",
              marginBottom: 32,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            Healing isn&apos;t<br />optional.<br />
            <span style={{ color: "#333333" }}>Staying stuck is.</span>
          </h1>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#666666",
              maxWidth: "52ch",
              marginBottom: 48,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            Defrag is a private AI for relationships, emotional recovery, and hard decisions — without turning your inner life into training data.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 48,
                padding: "0 32px",
                border: "1px solid #ffffff",
                color: "#ffffff",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "var(--font-geist-mono), monospace",
                transition: "background 120ms, color 120ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              [ INITIALIZE BASELINE ]
            </Link>
            <a
              href="#how"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 48,
                padding: "0 32px",
                border: "1px solid #333333",
                color: "#555555",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "var(--font-geist-mono), monospace",
                transition: "border-color 120ms, color 120ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ffffff";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#333333";
                e.currentTarget.style.color = "#555555";
              }}
            >
              How it works
            </a>
          </div>

          {/* Terminal status readout */}
          <div
            className="hidden md:block"
            style={{
              marginTop: 64,
              borderTop: "1px solid #1a1a1a",
              paddingTop: 24,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            {[
              { key: "PRIVACY_MODE", val: "LOCAL_ONLY" },
              { key: "TRAINING_DATA", val: "DISABLED" },
              { key: "SESSION_STATE", val: "ENCRYPTED" },
            ].map((item, i) => (
              <div
                key={item.key}
                style={{
                  padding: "16px 0",
                  paddingRight: 24,
                  borderRight: i < 2 ? "1px solid #1a1a1a" : "none",
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                <p style={{ fontSize: 10, color: "#333333", letterSpacing: "0.12em", marginBottom: 6 }}>
                  {item.key}
                </p>
                <p style={{ fontSize: 12, color: "#00E5FF", letterSpacing: "0.08em" }}>
                  {item.val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM MODULES ──────────────────────────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid #1a1a1a" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px clamp(24px, 5vw, 80px)",
          }}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              color: "#333333",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
              marginBottom: 48,
            }}
          >
            SYSTEM_MODULES
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
            {[
              {
                index: "01",
                name: "ALIGNMENT",
                desc: "Your core blueprint, live timing, and choice clarity. Know how you break and how you come back.",
              },
              {
                index: "02",
                name: "DEFRAG",
                desc: "Relational synthesis. See the gap between what was said and what was meant — then close it.",
              },
              {
                index: "03",
                name: "RESTORE",
                desc: "Structured emotional recovery. Move through grief, anger, and overwhelm in sequence.",
              },
            ].map((mod, i) => (
              <div
                key={mod.index}
                style={{
                  padding: "36px 32px",
                  borderLeft: i === 0 ? "1px solid #1a1a1a" : "none",
                  borderRight: "1px solid #1a1a1a",
                  borderTop: "1px solid #1a1a1a",
                  cursor: "pointer",
                  transition: "background 180ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0a0a0a";
                  const label = e.currentTarget.querySelector(".mod-index") as HTMLElement;
                  if (label) label.style.color = "#00E5FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  const label = e.currentTarget.querySelector(".mod-index") as HTMLElement;
                  if (label) label.style.color = "#333333";
                }}
              >
                <p
                  className="mod-index"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "#333333",
                    fontFamily: "var(--font-geist-mono), monospace",
                    marginBottom: 16,
                    transition: "color 180ms",
                  }}
                >
                  {mod.index}_{mod.name}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "#666666",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                  }}
                >
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────────────── */}
      <section id="how" style={{ borderBottom: "1px solid #1a1a1a" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px clamp(24px, 5vw, 80px)",
          }}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              color: "#333333",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
              marginBottom: 48,
            }}
          >
            PROCESS
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
            {[
              { n: "01", title: "Input the tension", body: "Describe what actually happened. No performance required." },
              { n: "02", title: "Read the gap", body: "Defrag maps intent, reaction, and the actual pattern — in plain language." },
              { n: "03", title: "Execute one move", body: "One posture. One next step. Nothing else." },
            ].map((step, i) => (
              <div
                key={step.n}
                style={{
                  padding: "32px",
                  borderLeft: i === 0 ? "1px solid #1a1a1a" : "none",
                  borderRight: "1px solid #1a1a1a",
                  borderTop: "1px solid #1a1a1a",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "#333333",
                    fontFamily: "var(--font-geist-mono), monospace",
                    marginBottom: 16,
                  }}
                >
                  {step.n}
                </p>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: 10,
                    fontFamily: "var(--font-geist-sans), sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#555555",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY PROTOCOL ────────────────────────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid #1a1a1a" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px clamp(24px, 5vw, 80px)",
          }}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              color: "#333333",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
              marginBottom: 48,
            }}
          >
            PRIVACY_PROTOCOL
          </p>

          <div style={{ display: "grid", gap: 0 }}>
            {[
              "TRAINING_DATA_DISABLED · Your conversations are never used to train any model.",
              "LOCAL_ENCRYPTION_ACTIVE · Data encrypted at rest and in transit.",
              "ZERO_CLOUD_SYNC · Private Mode sessions never leave your device.",
              "NO_ENGAGEMENT_LOOPS · No streaks, no nudges, no dark patterns.",
            ].map((line, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 0",
                  borderBottom: i < 3 ? "1px solid #0f0f0f" : "none",
                  fontFamily: "var(--font-geist-mono), monospace",
                }}
              >
                <span style={{ fontSize: 10, color: "#00E5FF", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                  [ VERIFIED ]
                </span>
                <span style={{ fontSize: 12, color: "#555555", letterSpacing: "0.04em" }}>
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────────── */}
      <section>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "100px clamp(24px, 5vw, 80px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              marginBottom: 40,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            You already know<br />it hurts.
          </h2>
          <Link
            href="/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 52,
              padding: "0 40px",
              border: "1px solid #ffffff",
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "var(--font-geist-mono), monospace",
              transition: "background 120ms, color 120ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            [ INITIALIZE BASELINE ]
          </Link>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "32px clamp(24px, 5vw, 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#ffffff" }}>
          DEFRAG
        </span>
        <span style={{ fontSize: 10, color: "#333333", letterSpacing: "0.08em" }}>
          &copy; {new Date().getFullYear()} · PRIVATE_BY_DESIGN
        </span>
      </footer>

    </div>
  );
}
