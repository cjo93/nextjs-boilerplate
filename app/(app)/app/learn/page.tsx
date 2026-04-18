"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const LEARN_LABELS: Record<string, string> = {
  whyThisFits: "Why this fits",
  whatMayBeActive: "What may be active",
  patternVsPressure: "Pattern vs pressure",
  whyThisResponse: "Why this response",
  howToUseThis: "How to use this",
};

function humanizeKey(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/^./, (s) => s.toUpperCase());
}

export default function LearnPage() {
  const searchParams = useSearchParams();
  const initialReadId = searchParams.get("readId") || "";

  const [readId, setReadId] = useState(initialReadId);
  const [result, setResult] = useState<any>(null);
  const [sourceRead, setSourceRead] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (overrideReadId?: string) => {
    const targetReadId = overrideReadId || readId;
    if (!targetReadId) return;

    setLoading(true);
    setError(null);

    try {
      const [sourceRes, learnRes] = await Promise.all([
        fetch(`/api/reads/${targetReadId}`),
        fetch("/api/ai/learn", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ readId: targetReadId }),
        }),
      ]);

      const sourceJson = await sourceRes.json();
      const learnJson = await learnRes.json();

      if (!sourceJson.ok) throw new Error(sourceJson.error);
      if (!learnJson.ok) throw new Error(learnJson.error);

      setSourceRead(sourceJson.data);
      setResult(learnJson.data.outputPayload);
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

  const sourceSummary = sourceRead?.outputPayload?.currentRead
    || sourceRead?.outputPayload?.whyThisFits
    || sourceRead?.outputPayload?.howYouTendToWork
    || sourceRead?.outputPayload?.whatsHappening
    || null;

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Learn</h1>
        {sourceRead && (
          <>
            <div className="text-xs text-neutral-400">
              {sourceRead.type} source
            </div>
            {sourceSummary && (
              <p className="text-sm text-neutral-300">{sourceSummary}</p>
            )}
          </>
        )}
      </div>

      <div className="flex gap-4 text-sm">
        {readId ? (
          <Link href={`/app/history/${readId}`} className="underline underline-offset-4">
            Back to read
          </Link>
        ) : (
          <Link href="/app/history" className="underline underline-offset-4">
            Back to history
          </Link>
        )}
      </div>

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
              <div className="text-xs text-neutral-400 mb-2">{LEARN_LABELS[key] ?? humanizeKey(key)}</div>
              <div className="text-sm">{String(value)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
