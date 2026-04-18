"use client";

import { useState } from "react";

export default function RelationshipsPage() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/relationships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "demo-user",
          situation,
        }),
      });

      const json = await res.json();
      if (!json.ok) throw new Error(json.error);

      setResult(json.data.outputPayload);
    } catch (err: any) {
      setError(err.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Relationships</h1>

      <textarea
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
        placeholder="Describe the relationship situation..."
      />

      <button
        onClick={run}
        disabled={loading}
        className="px-4 py-2 bg-white text-black rounded"
      >
        {loading ? "Generating..." : "Analyze"}
      </button>

      {error && <div className="text-red-500">{error}</div>}

      {result && (
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="border border-neutral-800 p-4 rounded bg-neutral-900">
              <div className="text-xs text-neutral-400 mb-2">{key}</div>
              <div className="text-sm">{String(value)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
