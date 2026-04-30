"use client";

import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";
import {
  VisualAlignment, VisualDEFRAG, VisualRestore,
  IconLock, IconEyeSlash, IconShield,
} from "@/components/site/vercel-visuals";
import { useReveal } from "@/hooks/use-reveal";

export default function Home() {
  useReveal();

  return (
    <PageShell>

      {/* ── 1. HERO SECTION ───────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border-subtle)]" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-start">

            {/* Left: copy */}
            <div>
              <p className="label mb-6 animate-fade-up" style={{ color: "var(--muted-2)" }}>
                Private relational intelligence
              </p>
              <h1
                className="mb-7 animate-fade-up-d1 font-serif"
                style={{
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-dm-serif)",
                }}
              >
                Healing isn&apos;t optional.<br />
                <span style={{ color: "var(--foreground)" }}>Staying stuck is.</span>
              </h1>
              <p className="mb-10 animate-fade-up-d2" style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", maxWidth: "45ch" }}>
                DEFRAG is a private AI platform for relationships, emotional recovery, and hard decisions — without turning your inner life into training data.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-up-d3">
                <Link href={routes.start} className="btn-primary">Open DEFRAG</Link>
                <a href="#trust" className="text-sm" style={{ color: "var(--muted-2)", textDecoration: "none", transition: "color 200ms" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted-2)"}>
                  How your data stays yours →
                </a>
              </div>
            </div>

            {/* Right: app preview panel */}
            <div className="hidden md:flex items-center justify-center animate-fade-in">
              <div
                className="w-full max-w-[340px] rounded-[var(--radius-lg)] border border-[var(--border)] overflow-hidden"
                style={{
                  background: "var(--surface-2)",
                  boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
                }}
              >
                {/* Panel header */}
                <div className="px-5 py-4 border-b border-[var(--border)]">
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--muted-2)", textTransform: "uppercase" }}>
                    DEFRAG · What happened?
                  </p>
                </div>

                {/* User message */}
                <div className="px-5 py-4 border-b border-[var(--border)]">
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                    I asked for more time on the project. They got quiet.
                  </p>
                </div>

                {/* Response rows */}
                <div className="divide-y divide-[var(--border)]">
                  {[
                    { label: "What's actually happening.", text: "You asked for more than they're used to giving. That scared them, not you.", accent: false },
                    { label: "How this might feel to them.", text: "Like pressure and risk, not a simple question.", accent: false },
                    { label: "One clean move.", text: "Wait 24 hours. Then send a short, honest check-in instead of a defense.", accent: true },
                  ].map((row, i) => (
                    <div key={i} className="px-5 py-3.5 flex gap-3 items-start group hover:bg-[var(--surface-3)] transition-colors">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                        style={{
                          background: row.accent ? "var(--accent)" : "var(--border-subtle)",
                        }}
                      />
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: row.accent ? "var(--accent)" : "var(--muted-2)" }}>
                          {row.label}
                        </p>
                        <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>
                          {row.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT DEFRAG IS ─────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border-subtle)]" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface)] px-6 md:px-10 py-10 md:py-12">
            <div className="mb-14 reveal">
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.015em",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-dm-serif)",
                  maxWidth: "58ch",
                }}
              >
                A private AI for the parts of life you would never hand to ordinary AI.
              </h2>
            </div>

          {/* 3-card capability strip */}
          <div className="grid md:grid-cols-3 gap-4 reveal reveal-d1">
            {[
              {
                title: "Clearer communication in hard moments",
                icon: "lock",
              },
              {
                title: "Stronger boundaries without over-explaining",
                icon: "eye",
              },
              {
                title: "One clean move instead of endless analysis",
                icon: "shield",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card flex flex-col gap-4 items-start"
                style={{ background: "var(--surface)" }}
              >
                <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon === "lock" && <IconLock />}
                  {item.icon === "eye" && <IconEyeSlash />}
                  {item.icon === "shield" && <IconShield />}
                </div>
                <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4, color: "var(--foreground)" }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THREE CORE PRODUCTS ────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-14 reveal">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                color: "var(--foreground)",
                fontFamily: "var(--font-dm-serif)",
              }}
            >
              Three ways DEFRAG shows up for you.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 reveal reveal-d1">
            {[
              {
                name: "Alignment",
                descriptor: "Your Core Blueprint, live timing, and choice clarity.",
                body: "Understand how you break, how you come back, and whether a choice is yours or just pressure.",
                visual: <VisualAlignment />,
              },
              {
                name: "DEFRAG",
                descriptor: "Relationship and communication guidance.",
                body: "See what's actually happening between you and someone else, how it may land for them, and what to say or not say.",
                visual: <VisualDEFRAG />,
              },
              {
                name: "Restore",
                descriptor: "A trauma-aware guide for structured emotional recovery.",
                body: "Move through grief, anger, heartbreak, and overwhelm in sequence, so feelings don't just repeat — they complete.",
                visual: <VisualRestore />,
              },
            ].map((product) => (
              <div key={product.name} className="flex flex-col gap-6 reveal">
                {/* Visual */}
                <div className="flex justify-center">
                  {product.visual}
                </div>
                {/* Text */}
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--foreground)", marginBottom: 4 }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--muted-2)", marginBottom: 10 }}>
                    {product.descriptor}
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
                    {product.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ───────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-14 reveal">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                color: "var(--foreground)",
                fontFamily: "var(--font-dm-serif)",
              }}
            >
              How DEFRAG works in the real world.
            </h2>
          </div>

          {/* Process steps with thin connector line */}
          <div className="relative reveal reveal-d1">
            {/* Connector line — desktop only */}
            <div
              className="hidden md:block absolute top-6 left-0 right-0"
              style={{
                height: "1px",
                background: "linear-gradient(to right, var(--border), var(--border-2), transparent)",
                zIndex: 0,
              }}
            />

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { n: 1, title: "Tell the truth", body: "You describe what actually happened. No performance." },
                { n: 2, title: "Get a read", body: "DEFRAG reads your state and the pattern in plain language." },
                { n: 3, title: "Take one move", body: "You leave with one posture and one next step, not ten conflicting options." },
              ].map((step) => (
                <div key={step.n} className="relative">
                  {/* Step dot */}
                  <div
                    className="hidden md:block absolute -top-2 left-0 w-3 h-3 rounded-full border border-[var(--border)]"
                    style={{
                      background: step.n === 1 ? "var(--accent)" : "var(--background)",
                      boxShadow: step.n === 1 ? "0 0 0 3px var(--background), 0 0 0 4px var(--accent)" : undefined,
                    }}
                  />
                  {/* Content */}
                  <div className="pt-6 md:pt-10">
                    <span
                      className="label mb-2"
                      style={{ color: "var(--muted-2)", display: "inline-block" }}
                    >
                      Step {step.n}
                    </span>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--foreground)", marginBottom: 6 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TRUST, NOT VIBES ───────────────────────────────────────────────────── */}
      <section id="trust" className="border-b border-[var(--border)]" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-14 reveal">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                color: "var(--foreground)",
                fontFamily: "var(--font-dm-serif)",
              }}
            >
              Built for trust, not engagement hacks.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10 reveal reveal-d1">
            {[
              {
                title: "Private by design",
                body: "Private Mode by default, granular memory controls, one-tap wipe for entire spaces.",
                icon: <IconLock />,
              },
              {
                title: "No emotional exploitation",
                body: "No dark patterns, no fear loops, no nudging you to stay hooked.",
                icon: <IconEyeSlash />,
              },
              {
                title: "Your emotional life is not training data",
                body: "We don't quietly train on your private relationship and recovery conversations.",
                icon: <IconShield />,
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div style={{ width: 32, height: 32 }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--foreground)", marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-d2">
            <Link
              href="#"
              className="inline-flex text-sm"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              See exactly how your data is handled →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHO THIS IS FOR ────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-12 reveal">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                color: "var(--foreground)",
                fontFamily: "var(--font-dm-serif)",
                marginBottom: 10,
              }}
            >
              You&apos;re here because something hurts.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 reveal reveal-d1">
            {/* Left column */}
            <div className="space-y-4">
              {[
                "You're in a conflict that never actually ends.",
                "You keep rewriting the same unsent text.",
                "You're carrying something you can't shake.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="w-0.5 h-5 bg-[var(--border)] shrink-0 mt-1" />
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-4">
              {[
                "You're tired of generic advice.",
                "You want one move, not a self-help course.",
                "You care about privacy more than features.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="w-0.5 h-5 bg-[var(--border)] shrink-0 mt-1" />
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA STRIP ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--surface-2)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center reveal reveal-d1">
          <h2
            className="font-serif mb-8"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.12,
              letterSpacing: "-0.015em",
              color: "var(--foreground)",
              fontFamily: "var(--font-dm-serif)",
            }}
          >
            You already know it hurts.<br />
            Start with what happened.
          </h2>
          <div className="flex flex-col items-center gap-5">
            <Link href={routes.start} className="btn-primary" style={{ fontSize: 15, padding: "0 32px", height: 48 }}>
              Open DEFRAG
            </Link>
            <p style={{ fontSize: 13, color: "var(--muted-2)" }}>
              No feed. No tracking. Just one situation and one move.
            </p>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
