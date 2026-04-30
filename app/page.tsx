"use client";

import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { CtaRow } from "@/components/system/cta-row";
import { routes } from "@/lib/routes";
import { useState } from "react";

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <PageShell>
      {/* HERO: "THE QUICKENING" */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
        {/* Geometric mesh background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="1000" height="1000" fill="url(#grid)" />
          </svg>
        </div>

        <SectionShell className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Split headline with glow */}
          <div className="space-y-4">
            <h1 className="headline animate-fade-in-up" style={{ animationDelay: "0s" }}>
              Healing isn&apos;t optional.
            </h1>
            <h1 
              className="headline animate-fade-in-glow"
              style={{ 
                animationDelay: "0.2s",
                color: "var(--accent)"
              }}
            >
              But the pain IS.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="subheadline max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Growth is a requirement. Suffering isn&apos;t. DEFRAG shows you how you are made, what is happening in the moment, and exactly how to see things from the other side.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            <Link
              href={routes.start}
              className="btn-primary"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.product}
              className="btn-secondary"
            >
              How It Works
            </Link>
          </div>
        </SectionShell>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)]" />

      {/* THE CAPABILITY: BRIDGE THE GAP */}
      <SectionShell className="py-24 md:py-40">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-6">The Capability: Bridge the Gap</h2>
            <p className="subheadline">
              We suffer in the space between what we meant and what they heard.
            </p>
          </div>

          {/* Three-column moment/miss/truth */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-brutalist">
              <p className="mono-label mb-4">The Moment</p>
              <p className="text-base leading-relaxed">You ask for a little more time.</p>
            </div>
            <div className="card-brutalist">
              <p className="mono-label mb-4">The Miss</p>
              <p className="text-base leading-relaxed">They hear a lack of commitment.</p>
            </div>
            <div className="card-brutalist">
              <p className="mono-label mb-4">The Truth</p>
              <p className="text-base leading-relaxed">You aren&apos;t "failing." They aren&apos;t "difficult." You just see the world from different sides. DEFRAG shows you the bridge.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)]" />

      {/* UNDERSTAND THE "WHY" */}
      <SectionShell className="py-24 md:py-40">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Understand the "Why" behind every person.</h2>
            <p className="subheadline">
              When you see the truth of how people are made, conflict turns into connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: "Know Your Nature",
                title: "See how you were made to handle the world."
              },
              {
                label: "Read the Room",
                title: "Catch the tension before it becomes a regret."
              },
              {
                label: "See Their Side",
                title: "Understand them without the guesswork."
              },
              {
                label: "Respond with Grace",
                title: "Find the words that actually land."
              }
            ].map((item, idx) => (
              <div key={idx} className="card-brutalist">
                <p className="mono-label mb-3">{item.label}</p>
                <p className="text-base font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)]" />

      {/* REAL MOMENTS */}
      <SectionShell className="py-24 md:py-40">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-6">When it matters most.</h2>
            <p className="subheadline">
              Three scenarios where clarity changes everything.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                moment: "You reschedule for the third time.",
                miss: "They decide you don't respect them.",
                truth: "You're overwhelmed. They need reliability. DEFRAG gives you the words to reset."
              },
              {
                moment: "They question your decision publicly.",
                miss: "You hear it as a threat and armor up.",
                truth: "They want clarity. You want autonomy. DEFRAG shows you how to lead together."
              },
              {
                moment: "You commit, then feel like pulling back.",
                miss: "They experience betrayal and brace for impact.",
                truth: "You need recalibration. They need reassurance. DEFRAG helps you renegotiate, not repeat."
              }
            ].map((scenario, idx) => (
              <div key={idx} className="card-brutalist">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="mono-label mb-3">The Moment</p>
                    <p className="text-base leading-relaxed">{scenario.moment}</p>
                  </div>
                  <div>
                    <p className="mono-label mb-3">The Miss</p>
                    <p className="text-base leading-relaxed">{scenario.miss}</p>
                  </div>
                  <div>
                    <p className="mono-label mb-3">The Truth</p>
                    <p className="text-base leading-relaxed text-[var(--accent)]">{scenario.truth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)]" />

      {/* FINAL CTA */}
      <SectionShell className="py-32 md:py-48">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="section-title">Ready to find your clarity?</h2>
          <p className="subheadline">
            Your birth details show us your nature. It&apos;s the foundation for every insight you&apos;ll receive.
          </p>
          <CtaRow>
            <Link
              href={routes.start}
              className="btn-primary"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.pricing}
              className="btn-secondary"
            >
              View Pricing
            </Link>
          </CtaRow>
        </div>
      </SectionShell>
    </PageShell>
  );
}
