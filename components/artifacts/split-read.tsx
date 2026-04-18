import { ArtifactStage, ArtifactFrame, ArtifactFocal, ArtifactSupport } from "./artifact-stage";

export function SplitRead({
  situation,
  interpretation,
  alternative,
  clarity,
}: {
  situation: string;
  interpretation: string;
  alternative: string;
  clarity: string;
}) {
  return (
    <ArtifactStage>
      <ArtifactFrame>
        {/* Situation */}
        <ArtifactSupport>
          <p className="font-medium">What happened</p>
          <p>{situation}</p>
        </ArtifactSupport>

        {/* Initial interpretation */}
        <ArtifactSupport>
          <p className="font-medium">How it was read</p>
          <p>{interpretation}</p>
        </ArtifactSupport>

        {/* Alternative / other side */}
        <ArtifactSupport>
          <p className="font-medium">What may also be true</p>
          <p>{alternative}</p>
        </ArtifactSupport>

        {/* Final clarity (focal) */}
        <ArtifactFocal>
          <p className="font-medium">Clearer read</p>
          <p>{clarity}</p>
        </ArtifactFocal>
      </ArtifactFrame>
    </ArtifactStage>
  );
}
