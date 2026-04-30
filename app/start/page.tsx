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
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-5">
              <p className="label">Your starting point</p>
              <h1 className="text-4xl md:text-[48px] font-bold leading-[1.05] tracking-[-0.035em] text-[var(--foreground)]">
                The canvas begins here.
              </h1>
              <p className="prose-body">
                Every layer of DEFRAG is calibrated to a single, precise starting point — your baseline. It is derived from your birth data: not to sort you into a category, but to render an accurate picture of how you were made to move through the world.
              </p>
              <p className="prose-body">
                Once the baseline is established, it becomes the lens through which the rest of the canvas is read. The moment. The other person. The response that reaches their side.
              </p>
            </div>

            {/* Narrative callout */}
            <div className="callout">
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                This is not a personality quiz. There are no categories, no archetypes to identify with. The system reads what is there and returns it in plain language — specific to you, and usable immediately.
              </p>
            </div>

            {/* Foundation field preview on desktop */}
            <div className="hidden md:block pt-2">
              <FoundationField date={date} time={time} place={place} />
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="animate-fade-up-d1">
            <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] overflow-hidden">

              {/* Form header */}
              <div className="px-8 pt-8 pb-6 border-b border-[var(--border)]">
                <p className="label mb-2">Three coordinates</p>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                  Date, time, and place of birth. These three coordinates are all the system needs to establish your baseline.
                </p>
              </div>

              <div className="px-8 py-7 space-y-5">
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
              </div>

              {/* CTA row */}
              <div className="px-8 pb-8 space-y-3">
                <div className="h-px bg-[var(--border)] mb-6" />
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
                <p className="text-[11px] text-center leading-relaxed" style={{ color: "var(--muted-2)" }}>
                  {isComplete
                    ? "Your canvas is ready. This takes you to the full clarity workspace."
                    : "All three coordinates are required to render your baseline accurately."}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </PageShell>
  );
}
