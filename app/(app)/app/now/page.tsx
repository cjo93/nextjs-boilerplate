"use client";

import { useState } from "react";
import type { NowOutput } from "@/lib/ai/schemas/now";

const URGENCY_OPTIONS = ["low", "medium", "high"] as const;

const OUTPUT_LABELS: Record<keyof NowOutput, string> = {
  currentRead: "Current Read",
  pressure: "Pressure",
  driftRisk: "Drift Risk",
  timing: "Timing",
  bestPosture: "Best Posture",
  bestNextStep: "Best Next Step",
  confidence: "Confidence",
  followUps: "Follow-Ups",
};

export default function NowPage() {
  const [moment, setMoment] = useState("");
  const [urgency, setUrgency] = useState<"low" | "medium" | "high">("medium");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<NowOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/ai/now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "demo-user",
          moment,
          urgency,
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
        }),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "Unknown error");
      setResult(json.data.outputPayload as NowOutput);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Now Read</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Describe what is happening right now and get a structured situational read.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-300">
            What is happening right now?
          </label>
          <textarea
            required
            minLength={10}
            rows={5}
            value={moment}
            onChange={(e) => setMoment(e.target.value)}
            placeholder="Describe the current moment, situation, or decision you are navigating..."
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-neutral-300">Urgency</label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value as typeof urgency)}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none"
            >
              {URGENCY_OPTIONS.map((u) => (
                <option key={u} value={u}>
                  {u.charAt(0).toUpperCase() + u.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-neutral-300">
              Tags{" "}
              <span className="text-neutral-500">(comma separated)</span>
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. work, relationship, decision"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {loading ? "Generating..." : "Generate Read"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">Your Read</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {(Object.keys(OUTPUT_LABELS) as (keyof NowOutput)[]).map((key) => {
              const value = result[key];
              if (value === undefined || value === null) return null;
              const isArray = Array.isArray(value);
              if (isArray && (value as string[]).length === 0) return null;
              return (
                <div
                  key={key}
                  className={`rounded-lg border border-neutral-800 bg-neutral-900 p-4 ${
                    key === "currentRead" || key === "bestNextStep"
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {OUTPUT_LABELS[key]}
                  </p>
                  {isArray ? (
                    <ul className="space-y-1">
                      {(value as string[]).map((item, i) => (
                        <li key={i} className="text-sm text-neutral-200">
                          &bull; {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed text-neutral-200">
                      {value as string}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
