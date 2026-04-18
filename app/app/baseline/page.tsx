"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { ThreeLens } from "@/components/artifacts/three-lens";
import { ClarifiedOutput } from "@/components/artifacts/clarified-output";

export default function BaselinePage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;

  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">Understand how you tend to work</h1>
        <p className="text-neutral-500 max-w-2xl">
          Describe yourself, your patterns, or a recurring situation. We’ll help you see the structure underneath.
        </p>
      </SectionShell>

      <SectionShell>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your tendencies, patterns, or recurring situations..."
          className="w-full border rounded-xl p-4 min-h-[120px]"
        />
      </SectionShell>

      {hasInput && (
        <SectionShell className="space-y-8">
          <ThreeLens
            baseline="You tend to move quickly toward resolution and clarity."
            now="You may currently be reacting to pressure or urgency."
            relationships="Others may experience this as intensity or urgency."
          />

          <ClarifiedOutput
            summary="Your baseline favors speed and clarity, but pressure can amplify intensity."
            guidance="Slow pacing slightly to maintain clarity without increasing perceived pressure."
          />
        </SectionShell>
      )}
    </PageShell>
  );
}
