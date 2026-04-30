"use client";

import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { CtaRow } from "@/components/system/cta-row";
import { routes } from "@/lib/routes";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageShell>
      {/* 1. HERO ENTRY – "THE QUICKENING" */}
      <div className="relative min-h-screen md:h-[70vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* Ultra-fine noise layer – studio screen feel */}
        <div className="absolute inset-0 bg-black opacity-100" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 100px 100px",
          zIndex: 0
        }} />

        {/* Animated background mesh resolving in */}
        <div className="gradient-blob animate-blob-move absolute top-1/3 -left-32 w-96 h-96 pointer-events-none opacity-20" style={{ animationDelay: "0s" }} />
        <div className="gradient-blob animate-blob-move absolute -bottom-32 right-1/4 w-96 h-96 pointer-events-none opacity-15" style={{ animationDelay: "2s" }} />

        {/* Main content */}
        <SectionShell className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Headline with precision spacing */}
          <div className="space-y-6">
            {/* First line: fade in with 8px rise */}
            <h1 className="hero-headline animate-fade-in-up" style={{ animationDuration: "0.4s" }}>
              Healing isn&apos;t optional.
            </h1>
            
            {/* Second line: sharp downward slide with accent underline */}
            <h1 
              className="hero-headline animate-fade-in-down"
              style={{ 
                animationDuration: "0.5s",
                animationDelay: "0.25s"
              }}
            >
              But the <span className="accent-word">pain</span> is.
            </h1>
          </div>

          {/* Subheadline with premium spacing */}
          <p className="hero-subheadline mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Life requires us to grow, but it doesn&apos;t require us to suffer through the friction of being misunderstood. DEFRAG is a personal clarity platform that helps you understand how you are made, read the tension in a moment, and finally see the world from the other person&apos;s side.
          </p>

          {/* 2. CTA ALIGNMENT – "SYSTEM ONLINE" – Precision instruments */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up" 
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href={routes.start}
              className="btn-instrument-primary"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.howItWorks}
              className="btn-instrument-secondary"
            >
              See How It Works
            </Link>
          </div>
        </SectionShell>
      </div>

      {/* 3. THE GAP SCROLL – "CONTACT" */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        <SectionShell className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Capability: Seeing the Bridge
            </h2>
            <p className="text-[var(--text-secondary)] text-base">
              Most of our frustration lives in the gap between what we meant and what they heard.
            </p>
          </div>

          {/* Orbs sliding in from opposite sides */}
          <div className="relative h-48 flex items-center justify-between px-8">
            {/* Left orb */}
            <div 
              className={`w-24 h-24 rounded-full border-2 border-purple-500/50 flex items-center justify-center text-white text-xs font-mono transition-all duration-300 ${
                scrolled ? "animate-orb-jitter" : "animate-orb-slide-left"
              }`}
              style={{ animationDelay: scrolled ? "0s" : "0s" }}
            >
              <span className="text-center">You</span>
            </div>

            {/* Bridge connection line - draws in when centered */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: scrolled ? 1 : 0 }}>
              <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" className={scrolled ? "animate-bridge-draw" : ""} strokeDasharray="1000" />
            </svg>

            {/* Right orb */}
            <div 
              className={`w-24 h-24 rounded-full border-2 border-purple-500/50 flex items-center justify-center text-white text-xs font-mono transition-all duration-300 ${
                scrolled ? "animate-orb-jitter" : "animate-orb-slide-right"
              }`}
              style={{ animationDelay: scrolled ? "0.1s" : "0.2s" }}
            >
              <span className="text-center">Them</span>
            </div>
          </div>

          {/* Three-column layout */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-8">
            <div className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300">
              <p className="text-xs uppercase text-[var(--text-tertiary)] mb-3 font-medium">The Moment</p>
              <p className="text-base text-[var(--text-secondary)]">
                You ask for a little more time to finish a task.
              </p>
            </div>

            <div className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300">
              <p className="text-xs uppercase text-[var(--text-tertiary)] mb-3 font-medium">The Miss</p>
              <p className="text-base text-[var(--text-secondary)]">
                They hear a lack of commitment and start to worry.
              </p>
            </div>

            <div className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300">
              <p className="text-xs uppercase text-[var(--text-tertiary)] mb-3 font-medium">The Truth</p>
              <p className="text-base text-[var(--text-secondary)]">
                You aren&apos;t &apos;failing,&apos; and they aren&apos;t &apos;being difficult.&apos; You are simply seeing the same moment from two different sides. DEFRAG shows you the bridge between them.
              </p>
            </div>
          </div>
        </SectionShell>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)] my-24" />

      {/* 4. UNDERSTAND THE WHY – "PRECISION FOCUS" */}
      <SectionShell className="space-y-16 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Understand why people do what they do.
          </h2>
          <p className="text-[var(--text-secondary)] text-base">
            When you see the truth of how people are made, conflict turns back into connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            { title: "Understand your nature", desc: "See how you were made to handle the world and what you need to feel clear." },
            { title: "Read the moment", desc: "Recognize the tension in a room before it turns into a regret." },
            { title: "See their side", desc: "Understand why someone else reacts the way they do—without the guesswork." },
            { title: "Find the response that fits", desc: "Know what to say when it matters most to resolve the friction." }
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 group cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-tertiary)]">
                {item.desc}
              </p>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-transparent group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)] my-24" />

      {/* CINEMATIC "MOMENT VS TRUTH" EXAMPLES */}
      <SectionShell className="space-y-24 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Made for the moments that matter.
          </h2>
          <p className="text-[var(--text-secondary)] text-base">
            Three scenarios where clarity changes everything.
          </p>
        </div>

        {/* Example 1 */}
        <div className="border border-[var(--border-color)] bg-white/[0.02] rounded-lg overflow-hidden hover:border-[var(--border-color-hover)] transition-all duration-300">
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase text-purple-400 mb-2 font-medium">The Moment</p>
                <p className="text-lg text-white">You reschedule a meeting for the third time.</p>
              </div>
              <div>
                <p className="text-xs uppercase text-red-400 mb-2 font-medium">The Miss</p>
                <p className="text-lg text-white">They quietly decide you don&apos;t respect their work.</p>
              </div>
            </div>
            <div className="border-t border-[var(--border-color)] pt-6">
              <p className="text-xs uppercase text-green-400 mb-2 font-medium">The Truth</p>
              <p className="text-base text-[var(--text-secondary)]">You&apos;re drowning in priorities. They&apos;re starving for reliability. DEFRAG gives you the language and timing to reset the relationship, not just the calendar.</p>
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="border border-[var(--border-color)] bg-white/[0.02] rounded-lg overflow-hidden hover:border-[var(--border-color-hover)] transition-all duration-300">
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase text-purple-400 mb-2 font-medium">The Moment</p>
                <p className="text-lg text-white">They question your decision in front of others.</p>
              </div>
              <div>
                <p className="text-xs uppercase text-red-400 mb-2 font-medium">The Miss</p>
                <p className="text-lg text-white">You hear it as a public challenge and armor up.</p>
              </div>
            </div>
            <div className="border-t border-[var(--border-color)] pt-6">
              <p className="text-xs uppercase text-green-400 mb-2 font-medium">The Truth</p>
              <p className="text-base text-[var(--text-secondary)]">They&apos;re reaching for clarity. You&apos;re defending your authority. DEFRAG shows you how to turn a potential rupture into a moment of shared leadership.</p>
            </div>
          </div>
        </div>

        {/* Example 3 */}
        <div className="border border-[var(--border-color)] bg-white/[0.02] rounded-lg overflow-hidden hover:border-[var(--border-color-hover)] transition-all duration-300">
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase text-purple-400 mb-2 font-medium">The Moment</p>
                <p className="text-lg text-white">You go all-in—new role, new city, new commitment—and then feel the urge to pull back.</p>
              </div>
              <div>
                <p className="text-xs uppercase text-red-400 mb-2 font-medium">The Miss</p>
                <p className="text-lg text-white">They experience it as betrayal and brace for impact.</p>
              </div>
            </div>
            <div className="border-t border-[var(--border-color)] pt-6">
              <p className="text-xs uppercase text-green-400 mb-2 font-medium">The Truth</p>
              <p className="text-base text-[var(--text-secondary)]">Your system needs recalibration. Their system needs reassurance. DEFRAG helps you name both, so you can renegotiate the future instead of repeating the past.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)] my-24" />

      {/* FOOTER CTA */}
      <SectionShell className="text-center py-32">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to find your clarity?
          </h2>
          <CtaRow>
            <Link
              href={routes.start}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white border border-white shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.pricing}
              className="px-6 py-3 text-[var(--text-secondary)] bg-transparent border border-[var(--text-secondary)]/30 rounded-lg font-semibold hover:border-[var(--text-secondary)]/60 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </CtaRow>
        </div>
      </SectionShell>
    </PageShell>
  );
}
