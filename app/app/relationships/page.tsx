"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";

export default function RelationshipsPage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;
  const sections = [
    {
      title: "What’s Happening",
      body: "The dynamic looks shaped by interpretation pressure more than by fully clarified intent.",
    },
    {
      title: "You in the Dynamic",
      body: "Your side of the exchange may be pushing for resolution or clarity before the moment is stable enough to hold it.",
    },
    {
      title: "The Other Person",
      body: "They may be reacting from their own pressure, defensiveness, or incomplete read of what you mean.",
    },
    {
      title: "The Pattern",
      body: "The loop appears to be mutual misreading, where each response increases the other side’s certainty or strain.",
    },
    {
      title: "What May Help",
      body: "A slower pace, cleaner framing, and less certainty about intent can reduce distortion inside the exchange.",
    },
    {
      title: "Best Next Move",
      body: "Respond to the pattern, not just the latest line, and choose the smallest move that clarifies rather than escalates.",
    },
  ] as const;

  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">What’s happening between you?</h1>
        <p className="text-neutral-500 max-w-2xl">
          Describe the relationship or interaction. We’ll help you understand the dynamic more clearly.
        </p>
      </SectionShell>

      <SectionShell>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the interaction or relationship dynamic..."
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
