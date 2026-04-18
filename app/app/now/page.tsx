"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { SplitRead } from "@/components/artifacts/split-read";
import { ReactionDecode } from "@/components/artifacts/reaction-decode";
import { ClarifiedOutput } from "@/components/artifacts/clarified-output";

export default function NowPage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;

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
          <SplitRead
            situation={input}
            interpretation="It may feel like the other person is reacting negatively."
            alternative="They may be under pressure or interpreting something differently."
            clarity="This may be a difference in interpretation, not intent."
          />

          <ReactionDecode
            pattern="You tend to respond quickly to tension."
            pressure="Under pressure, reactions may become sharper."
            landing="This may land as intensity rather than clarity."
            repeat="This can create a loop where both sides escalate."
            response="Pause and reduce intensity before responding."
          />

          <ClarifiedOutput
            summary="This moment likely reflects a misread under pressure."
            guidance="Slow the pace and check interpretation before responding."
          />
        </SectionShell>
      )}
    </PageShell>
  );
}
