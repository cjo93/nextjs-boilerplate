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
          <p className="font-medium">Choose your path</p>
          <p>Start where the moment is most active.</p>
        </ArtifactFocal>

        <div className="grid md:grid-cols-2 gap-4">
          {paths.map((p) => (
            <Link key={p.title} href={p.href} className="border rounded-xl p-4 space-y-1">
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-neutral-500">{p.description}</p>
            </Link>
          ))}
        </div>

        <ArtifactSupport>
          <p>You can move between paths as your understanding evolves.</p>
        </ArtifactSupport>
      </ArtifactFrame>
    </ArtifactStage>
  );
}
