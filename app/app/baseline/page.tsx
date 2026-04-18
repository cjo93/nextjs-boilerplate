"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { buildClarityResponse } from "@/lib/clarity-engine";

export default function BaselinePage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;
  const response = buildClarityResponse({ mode: "baseline", input });

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
          <div className="grid gap-6 md:grid-cols-2">
            {response.sections.map((section) => (
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
