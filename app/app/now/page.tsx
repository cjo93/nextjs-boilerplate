"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";

export default function NowPage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;
  const sections = [
    {
      title: "Current Read",
      body: "The moment looks more like a pressure event than a final conclusion about what is true.",
    },
    {
      title: "Pressure",
      body: "Urgency, uncertainty, or a perceived mismatch may be amplifying the intensity of the read.",
    },
    {
      title: "Drift Risk",
      body: "If you keep reacting at the current pace, the moment may harden into a more confused or escalated exchange.",
    },
    {
      title: "Timing",
      body: "This looks like a moment where slowing slightly would improve the quality of the next move.",
    },
    {
      title: "Best Posture",
      body: "Stay clear, reduce interpretive overreach, and respond from observation rather than urgency.",
    },
    {
      title: "Best Next Step",
      body: "Name what seems active, narrow the response, and choose the smallest action that keeps the moment workable.",
    },
  ] as const;

  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">What’s happening right now?</h1>
        <p className="text-neutral-500 max-w-2xl">
          Describe the moment. We’ll help you make sense of it.
        </p>
      </SectionShell>

      <SectionShell>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the situation..."
          className="w-full border rounded-xl p-4 min-h-[120px]"
        />
      </SectionShell>

      {hasInput && (
        <SectionShell className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <div key={section.title} className="rounded-xl border p-6 space-y-2">
                <h2 className="text-lg font-medium">{section.title}</h2>
                <p className="text-sm text-neutral-500">{section.body}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      )}
    </PageShell>
  );
}
