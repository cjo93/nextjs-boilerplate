"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LearnPage() {
  const searchParams = useSearchParams();
  const initialReadId = searchParams.get("readId") || "";

  const [readId, setReadId] = useState(initialReadId);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (overrideReadId?: string) => {
    const targetReadId = overrideReadId || readId;
    if (!targetReadId) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/learn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ readId: targetReadId }),
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

  useEffect(() => {
    if (initialReadId) {
      setReadId(initialReadId);
      handleSubmit(initialReadId);
    }
  }, [initialReadId]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Learn</h1>

      <div className="space-y-3">
        <input
          value={readId}
          onChange={(e) => setReadId(e.target.value)}
          placeholder="Enter read ID"
          className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded"
        />
        <button
          onClick={() => handleSubmit()}
          disabled={loading}
          className="px-4 py-2 bg-white text-black rounded"
        >
          {loading ? "Loading..." : "Explain"}
        </button>
      </div>

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
