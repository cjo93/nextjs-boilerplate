import { ClarityForm } from "@/components/app/clarity-form";

export default function BaselinePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-2xl font-semibold">Baseline</h1>
      <p className="text-neutral-500">
        Understand how you tend to work and what pressure does to you.
      </p>
      <ClarityForm mode="baseline" />
    </div>
  );
}
