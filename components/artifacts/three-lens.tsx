import { ArtifactStage, ArtifactFrame, ArtifactFocal, ArtifactSupport } from "./artifact-stage";

export function ThreeLens({
  baseline,
  now,
  relationships,
}: {
  baseline: string;
  now: string;
  relationships: string;
}) {
  return (
    <ArtifactStage>
      <ArtifactFrame>
        {/* Baseline */}
        <ArtifactSupport>
          <p className="font-medium">Baseline</p>
          <p>{baseline}</p>
        </ArtifactSupport>

        {/* Now (primary focal lens) */}
        <ArtifactFocal>
          <p className="font-medium">Now</p>
          <p>{now}</p>
        </ArtifactFocal>

        {/* Relationships */}
        <ArtifactSupport>
          <p className="font-medium">Relationships</p>
          <p>{relationships}</p>
        </ArtifactSupport>
      </ArtifactFrame>
    </ArtifactStage>
  );
}
