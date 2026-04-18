"use client";

import { useEffect, useState } from "react";

type Read = {
  id: string;
  type: string;
  createdAt: string;
  inputPayload: any;
  outputPayload: any;
};

export default function HistoryPage() {
  const [reads, setReads] = useState<Read[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReads = async () => {
      try {
        const res = await fetch("/api/reads?userId=demo-user");
        const json = await res.json();

        if (!json.ok) throw new Error(json.error);

        setReads(json.data);
      } catch (err: any) {
        setError(err.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    };

    fetchReads();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">History</h1>

      {reads.length === 0 && (
        <div className="text-neutral-500">No reads yet.</div>
      )}

      <div className="space-y-4">
        {reads.map((read) => (
          <div
            key={read.id}
            className="border border-neutral-800 rounded-lg p-4 bg-neutral-900"
          >
            <div className="text-xs text-neutral-400 mb-2">
              {new Date(read.createdAt).toLocaleString()} — {read.type}
            </div>

            <div className="text-sm text-neutral-200">
              {read.outputPayload?.currentRead || "No summary"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
