import { ArtifactStage, ArtifactFrame, ArtifactFocal, ArtifactSupport } from "./artifact-stage";

export function ClarifiedOutput({
  summary,
  guidance,
}: {
  summary: string;
  guidance: string;
}) {
  return (
    <ArtifactStage>
      <ArtifactFrame>
        <ArtifactSupport>
          <p className="font-medium">Summary</p>
          <p>{summary}</p>
        </ArtifactSupport>

        <ArtifactFocal>
          <p className="font-medium">Clear next move</p>
          <p>{guidance}</p>
        </ArtifactFocal>
      </ArtifactFrame>
    </ArtifactStage>
  );
}
