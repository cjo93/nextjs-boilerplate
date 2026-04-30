"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { FoundationField } from "@/components/artifacts/foundation-field";
import { routes } from "@/lib/routes";
import Link from "next/link";

export default function StartPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");

  const isComplete = date && time && place;

  return (
    <PageShell>
      {/* HERO SECTION */}
      <SectionShell className="text-center py-16">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-glow animate-fade-in-up">
            Find your starting point.
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your birth details are the simplest way to see your natural nature. This becomes the foundation for every insight the system provides.
          </p>
        </div>
      </SectionShell>

      {/* CENTERED FORM */}
      <SectionShell className="flex justify-center items-center py-8">
        <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="glass p-10 rounded-xl space-y-8">
            {/* Date of Birth */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-300">
                Date of Birth
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full glass px-4 py-3 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:glow-blue transition-all focus:border-blue-400"
              />
            </div>

            {/* Time of Birth */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-300">
                Time of Birth
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full glass px-4 py-3 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:glow-blue transition-all focus:border-blue-400"
              />
            </div>

            {/* Place of Birth */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-300">
                Place of Birth
              </label>
              <input
                type="text"
                placeholder="City, Country"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="w-full glass px-4 py-3 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:glow-blue transition-all focus:border-blue-400"
              />
            </div>

            {/* Why This Matters Info Box */}
            <div className="glass p-6 rounded-lg border border-neutral-400/20 space-y-3 bg-blue-600/5">
              <div className="flex gap-3">
                <span className="text-xl text-blue-400 animate-soft-pulse">ℹ</span>
                <div>
                  <p className="text-sm font-semibold text-neutral-200 mb-2">Why this matters:</p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    This information allows us to see your unique starting point. This isn&apos;t about labels or jargon—it&apos;s about giving you the most accurate look at how you were made to move through the world.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              {isComplete ? (
                <Link
                  href={routes.app}
                  className="w-full block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-center hover:bg-blue-700 transition-all duration-300 glow-blue hover:scale-105 animate-glow-pulse"
                >
                  Establish My Baseline
                </Link>
              ) : (
                <div className="w-full px-6 py-3 bg-blue-600/50 text-white rounded-lg font-semibold text-center opacity-50 cursor-not-allowed">
                  Establish My Baseline
                </div>
              )}
            </div>

            {isComplete && (
              <p className="text-xs text-center text-neutral-400">
                Click above to proceed to your personal clarity system.
              </p>
            )}
          </div>
        </div>
      </SectionShell>

      {/* Optional: Show the foundation field on larger screens */}
      <SectionShell className="hidden lg:block mt-16">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <FoundationField date={date} time={time} place={place} />
          </div>
        </div>
      </SectionShell>
    </PageShell>
  );
}
