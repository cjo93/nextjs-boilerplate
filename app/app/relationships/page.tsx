"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { SplitRead } from "@/components/artifacts/split-read";
import { ReactionDecode } from "@/components/artifacts/reaction-decode";
import { ClarifiedOutput } from "@/components/artifacts/clarified-output";

export default function RelationshipsPage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;

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
          <SplitRead
            situation={input}
            interpretation="It may feel like the other person is acting against you."
            alternative="They may be responding to their own pressures or interpretations."
            clarity="This may be a difference in internal state rather than intent."
          />

          <ReactionDecode
            pattern="You may be trying to resolve quickly or seek clarity."
            pressure="Under pressure, responses may become more direct or intense."
            landing="This may land as criticism or force rather than clarity."
            repeat="This can create a loop where both sides feel misunderstood."
            response="Slow the interaction and check interpretation before reacting."
          />

          <ClarifiedOutput
            summary="This dynamic likely reflects a misalignment in interpretation and pressure, not intent."
            guidance="Reduce pace, clarify intent, and check how your response may land before continuing."
          />
        </SectionShell>
      )}
    </PageShell>
  );
}
