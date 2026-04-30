"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { FoundationField } from "@/components/artifacts/foundation-field";
import { routes } from "@/lib/routes";
import Link from "next/link";

export default function StartPage() {
  const [date, setDate]   = useState("");
  const [time, setTime]   = useState("");
  const [place, setPlace] = useState("");

  const isComplete = date && time && place;

  return (
    <PageShell>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* ── LEFT: copy ── */}
          <div className="space-y-6 animate-fade-up">
            <p className="label">Your starting point</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.06] tracking-[-0.03em] text-[var(--foreground)]">
              Find your baseline.
            </h1>
            <p className="text-[16px] text-[var(--muted)] leading-relaxed max-w-sm">
              Your birth details are the simplest way to see your natural nature. This becomes the foundation for every insight the system provides.
            </p>

            {/* Why this matters note */}
            <div className="border border-[var(--border)] rounded-[var(--radius)] p-5 space-y-2 bg-[var(--surface)]">
              <p className="text-xs font-semibold text-[var(--foreground)] tracking-tight">Why this matters</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                This isn&apos;t about labels or jargon. Your birth data gives us a precise starting point that is unique to you — not a category you are sorted into. It becomes the lens through which every insight is calibrated.
              </p>
            </div>

            {/* Foundation field preview on desktop */}
            <div className="hidden md:block pt-2">
              <FoundationField date={date} time={time} place={place} />
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="animate-fade-up-d1">
            <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] p-8 space-y-6">

              {/* Date */}
              <div className="space-y-2">
                <label className="label block" htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-11 px-4 text-sm text-[var(--foreground)] bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius)] focus:outline-none focus:border-[var(--border-3)] transition-colors"
                  style={{ colorScheme: "dark" }}
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="label block" htmlFor="tob">Time of Birth</label>
                <input
                  id="tob"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full h-11 px-4 text-sm text-[var(--foreground)] bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius)] focus:outline-none focus:border-[var(--border-3)] transition-colors"
                  style={{ colorScheme: "dark" }}
                />
              </div>

              {/* Place */}
              <div className="space-y-2">
                <label className="label block" htmlFor="pob">Place of Birth</label>
                <input
                  id="pob"
                  type="text"
                  placeholder="City, Country"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="w-full h-11 px-4 text-sm text-[var(--foreground)] bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius)] focus:outline-none focus:border-[var(--border-3)] transition-colors placeholder:text-[var(--muted-2)]"
                />
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--border)]" />

              {/* CTA */}
              {isComplete ? (
                <Link href={routes.app} className="btn-primary w-full justify-center">
                  Establish My Baseline
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full h-[42px] px-5 text-sm font-semibold rounded-[var(--radius)] border border-[var(--border)] text-[var(--muted-2)] bg-transparent cursor-not-allowed"
                >
                  Establish My Baseline
                </button>
              )}

              {!isComplete && (
                <p className="text-xs text-center text-[var(--muted-2)]">
                  Fill in all three fields to continue.
                </p>
              )}
              {isComplete && (
                <p className="text-xs text-center text-[var(--muted)]">
                  Proceed to your personal clarity system.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </PageShell>
  );
}
