"use client";

import { useState } from "react";
import type { ClarityResponse, ClaritySection } from "@/lib/defrag-types";

export function ClarityForm({ mode }: { mode: string }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ClarityResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const res = await fetch("/api/clarity", {
      method: "POST",
      body: JSON.stringify({ mode, input }),
    });
    const json = await res.json();
    setResult(json);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full border p-3 rounded-lg"
        placeholder="Describe the situation"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={submit} className="px-4 py-2 bg-black text-white rounded">
        Get a Clearer Read
      </button>

      {loading && <p>Loading...</p>}

      {result && (
        <div className="space-y-4 mt-6">
          <p className="text-sm text-neutral-500">{result.summary}</p>
          {result.sections.map((s: ClaritySection) => (
            <div key={s.title}>
              <h3 className="font-medium">{s.title}</h3>
              <p className="text-sm text-neutral-500">{s.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
