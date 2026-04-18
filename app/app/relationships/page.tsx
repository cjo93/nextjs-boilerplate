import { ClarityForm } from "@/components/app/clarity-form";

export default function RelationshipsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-2xl font-semibold">Relationships</h1>
      <p className="text-neutral-500">
        Understand what may be happening between you and another person.
      </p>
      <ClarityForm mode="relationships" />
    </div>
  );
}
