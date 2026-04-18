import { ClarityForm } from "@/components/app/clarity-form";

export default function LearnPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-2xl font-semibold">Learn</h1>
      <p className="text-neutral-500">
        Understand how the read was generated.
      </p>
      <ClarityForm mode="learn" />
    </div>
  );
}
