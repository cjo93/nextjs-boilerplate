import { ClarityForm } from "@/components/app/clarity-form";

export default function NowPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-2xl font-semibold">Now</h1>
      <p className="text-neutral-500">
        A clearer read on what may be shaping this moment.
      </p>
      <ClarityForm mode="now" />
    </div>
  );
}
