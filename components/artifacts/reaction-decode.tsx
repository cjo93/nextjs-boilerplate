import { ArtifactStage, ArtifactFrame, ArtifactFocal, ArtifactSupport } from "./artifact-stage";

export function ReactionDecode({
  pattern,
  pressure,
  landing,
  repeat,
  response,
}: {
  pattern: string;
  pressure: string;
  landing: string;
  repeat: string;
  response: string;
}) {
  return (
    <ArtifactStage>
      <ArtifactFrame>
        {/* Pattern */}
        <ArtifactSupport>
          <p className="font-medium">Pattern</p>
          <p>{pattern}</p>
        </ArtifactSupport>

        {/* Pressure */}
        <ArtifactSupport>
          <p className="font-medium">Pressure</p>
          <p>{pressure}</p>
        </ArtifactSupport>

        {/* Landing */}
        <ArtifactSupport>
          <p className="font-medium">How it may land</p>
          <p>{landing}</p>
        </ArtifactSupport>

        {/* Repeat loop */}
        <ArtifactSupport>
          <p className="font-medium">What tends to repeat</p>
          <p>{repeat}</p>
        </ArtifactSupport>

        {/* Response (focal) */}
        <ArtifactFocal>
          <p className="font-medium">What may help</p>
          <p>{response}</p>
        </ArtifactFocal>
      </ArtifactFrame>
    </ArtifactStage>
  );
}
