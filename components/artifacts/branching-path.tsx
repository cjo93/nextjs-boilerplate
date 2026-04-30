import Link from "next/link";
import { ArtifactStage, ArtifactFrame, ArtifactFocal, ArtifactSupport } from "./artifact-stage";

export function BranchingPath({
  paths,
}: {
  paths: { title: string; href: string; description: string }[];
}) {
  return (
    <ArtifactStage>
      <ArtifactFrame>
        <ArtifactFocal>
          Start where the moment is most active.
        </ArtifactFocal>

        <div className="grid md:grid-cols-2 gap-3">
          {paths.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group flex flex-col gap-2 border border-[var(--border)] rounded-[var(--radius)] bg-[var(--surface-2)] p-5 hover:border-[var(--border-3)] hover:bg-[var(--surface-3)] transition-colors"
            >
              <p className="text-[14px] font-semibold tracking-tight text-[var(--foreground)]">
                {p.title}
              </p>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                {p.description}
              </p>
            </Link>
          ))}
        </div>

        <ArtifactSupport>
          You can move between layers as your understanding becomes more precise.
        </ArtifactSupport>
      </ArtifactFrame>
    </ArtifactStage>
  );
}
