import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 space-y-12">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          See clearly what’s happening. Act with clarity.
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Defrag helps you understand your situation, patterns, and decisions in real time. Generate structured reads, reflect, and move forward with clarity.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/api/auth/signin" className="px-5 py-3 bg-white text-black rounded-md">
            Get started
          </Link>
          <Link href="/product" className="px-5 py-3 border border-neutral-700 rounded-md">
            Learn more
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="border border-neutral-800 p-6 rounded-lg bg-neutral-900">
          <h3 className="font-semibold">Now</h3>
          <p className="text-sm text-neutral-400 mt-2">Understand what is happening in the moment.</p>
        </div>
        <div className="border border-neutral-800 p-6 rounded-lg bg-neutral-900">
          <h3 className="font-semibold">Baseline</h3>
          <p className="text-sm text-neutral-400 mt-2">Understand your patterns and tendencies.</p>
        </div>
        <div className="border border-neutral-800 p-6 rounded-lg bg-neutral-900">
          <h3 className="font-semibold">Relationships</h3>
          <p className="text-sm text-neutral-400 mt-2">Navigate dynamics with clarity.</p>
        </div>
      </section>
    </div>
  );
}
