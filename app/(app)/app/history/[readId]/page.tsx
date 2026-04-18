import Link from "next/link";

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

export default async function ReadDetailPage({ params }: Props) {
  const { readId } = await params;
  const read = await getRead(readId);

  const entries = Object.entries(read.outputPayload || {});

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <div className="text-xs text-neutral-400">
          {new Date(read.createdAt).toLocaleString()} — {read.type}
        </div>
        <h1 className="text-2xl font-semibold">Read details</h1>
      </div>

      <div className="flex gap-4 text-sm">
        <Link href="/app/history" className="underline underline-offset-4">
          Back to history
        </Link>
        <Link href={`/app/learn?readId=${read.id}`} className="underline underline-offset-4">
          Explain this read
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {entries.map(([key, value]) => (
          <div key={key} className="border border-neutral-800 rounded-lg p-4 bg-neutral-900">
            <div className="text-xs text-neutral-400 mb-2">{key}</div>
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
