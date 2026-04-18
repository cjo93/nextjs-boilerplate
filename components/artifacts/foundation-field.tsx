import { ArtifactStage, ArtifactFrame, ArtifactFocal, ArtifactSupport } from "./artifact-stage";

export function FoundationField({
  date,
  time,
  place,
}: {
  date?: string;
  time?: string;
  place?: string;
}) {
  return (
    <ArtifactStage>
      <ArtifactFrame>
        {/* Date */}
        <ArtifactSupport>
          <p className="font-medium">Date</p>
          <p>{date || "Not set"}</p>
        </ArtifactSupport>

        {/* Time */}
        <ArtifactSupport>
          <p className="font-medium">Time</p>
          <p>{time || "Not set"}</p>
        </ArtifactSupport>

        {/* Place */}
        <ArtifactSupport>
          <p className="font-medium">Place</p>
          <p>{place || "Not set"}</p>
        </ArtifactSupport>

        {/* Completion state */}
        <ArtifactFocal>
          <p className="font-medium">Foundation</p>
          <p>
            {date && time && place
              ? "Your baseline is set."
              : "Complete the inputs to establish your baseline."}
          </p>
        </ArtifactFocal>
      </ArtifactFrame>
    </ArtifactStage>
  );
}
