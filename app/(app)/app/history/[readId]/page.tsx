import Link from "next/link";
import { getReadSummary } from "@/lib/utils/get-read-summary";

async function getRead(readId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/reads/${readId}`, {
    cache: "no-store",
  });

  const json = await res.json();
  if (!json.ok) {
    throw new Error(json.error || "Failed to load read");
  }

  return json.data;
}

type Props = {
  params: Promise<{ readId: string }>;
};

const LABELS: Record<string, Record<string, string>> = {
  NOW: {
    currentRead: "Current read",
    pressure: "Pressure",
    driftRisk: "Drift risk",
    timing: "Timing",
    bestPosture: "Best posture",
    bestNextStep: "Best next step",
    confidence: "Confidence",
    followUps: "Follow-ups",
  },
  BASELINE: {
    howYouTendToWork: "How you tend to work",
    underPressure: "Under pressure",
    atYourBest: "At your best",
    whatThrowsYouOff: "What throws you off",
    whatHelps: "What helps",
    whatBringsYouBack: "What brings you back",
  },
  RELATIONSHIP: {
    whatsHappening: "What’s happening",
    yourRole: "Your role",
    theirRole: "Their role",
    pattern: "The pattern",
    whatMayHelp: "What may help",
    bestNextMove: "Best next move",
  },
  LEARN: {
    whyThisFits: "Why this fits",
    whatMayBeActive: "What may be active",
    patternVsPressure: "Pattern vs pressure",
    whyThisResponse: "Why this response",
    howToUseThis: "How to use this",
  },
};

function humanizeKey(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/^./, (s) => s.toUpperCase());
}

export default async function ReadDetailPage({ params }: Props) {
  const { readId } = await params;
  const read = await getRead(readId);
  const summary = getReadSummary(read);
  const labels = LABELS[read.type] ?? {};
  const entries = Object.entries(read.outputPayload || {});

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <div className="text-xs text-neutral-400">
          {new Date(read.createdAt).toLocaleString()} — {summary.typeLabel}
        </div>
        <h1 className="text-2xl font-semibold">Read details</h1>
        <p className="text-sm text-neutral-300">{summary.summary}</p>
      </div>

      <div className="flex gap-4 text-sm">
        <Link href="/app/history" className="underline underline-offset-4">
          Back to history
        </Link>
        <Link href={`/app/learn?readId=${read.id}`} className="underline underline-offset-4 font-medium">
          Explain this read
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {entries.map(([key, value]) => (
          <div key={key} className="border border-neutral-800 rounded-lg p-4 bg-neutral-900">
            <div className="text-xs text-neutral-400 mb-2">{labels[key] ?? humanizeKey(key)}</div>
            {Array.isArray(value) ? (
              <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-100">
                {value.map((item, idx) => (
                  <li key={idx}>{String(item)}</li>
                ))}
              </ul>
            ) : (
              <div className="text-sm text-neutral-100">{String(value)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
