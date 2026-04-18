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
      <SectionShell>
        <h1 className="text-3xl font-semibold">Set your baseline</h1>
        <p className="text-neutral-600 max-w-2xl">
          Start by entering the details that define your baseline. This becomes
          the foundation for every read.
        </p>
      </SectionShell>

      <SectionShell className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">Date of birth</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">Time of birth</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">Place of birth</label>
            <input
              type="text"
              placeholder="City, Country"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div className="pt-4">
            {isComplete ? (
              <Link
                href={routes.app}
                className="inline-block px-5 py-3 bg-black text-white rounded-lg"
              >
                Continue to App
              </Link>
            ) : (
              <p className="text-sm text-neutral-500">
                Complete all fields to continue.
              </p>
            )}
          </div>
        </div>

        <FoundationField date={date} time={time} place={place} />
      </SectionShell>
    </PageShell>
  );
}
