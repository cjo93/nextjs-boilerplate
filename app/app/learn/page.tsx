"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";

export default function LearnPage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;
  const sections = [
    {
      title: "Why this fits",
      body: "This read is organized around the strongest pattern, pressure cue, and relational signal visible in the moment.",
    },
    {
      title: "What may be active",
      body: "The system is reading for what appears most behaviorally relevant right now, not every possible interpretation at once.",
    },
    {
      title: "Pattern vs pressure",
      body: "Some parts of the read reflect a stable tendency, while others reflect what the current moment may be amplifying.",
    },
    {
      title: "Why this response",
      body: "The suggested move is chosen to reduce distortion, improve timing, and keep the situation workable.",
    },
    {
      title: "How to use this",
      body: "Use the read as a clarifying frame for the next move, not as a final judgment about you or anyone else.",
    },
  ] as const;

  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">Understand the read</h1>
        <p className="text-neutral-500 max-w-2xl">
          Describe a situation and see how the system interprets it.
        </p>
      </SectionShell>

      <SectionShell>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe a moment to understand how it is analyzed..."
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
