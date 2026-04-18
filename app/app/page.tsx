import Link from "next/link";

export default function AppHome() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-3xl font-semibold">Choose the layer of clarity you need.</h1>
      <p className="text-neutral-500">Baseline, Now, Relationships, or Learn.</p>

      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/app/now" className="border p-6 rounded-xl">Now</Link>
        <Link href="/app/baseline" className="border p-6 rounded-xl">Baseline</Link>
        <Link href="/app/relationships" className="border p-6 rounded-xl">Relationships</Link>
        <Link href="/app/learn" className="border p-6 rounded-xl">Learn</Link>
      </div>
    </div>
  );
}
