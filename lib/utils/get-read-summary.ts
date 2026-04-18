type ReadLike = {
  type?: string;
  outputPayload?: unknown;
};

export type ReadSummary = {
  title: string;
  typeLabel: string;
  summary: string;
};

const TYPE_LABELS: Record<string, string> = {
  NOW: "Now",
  LEARN: "Learn",
  BASELINE: "Baseline",
  RELATIONSHIP: "Relationships",
};

const PRIMARY_FIELDS: Record<string, string[]> = {
  NOW: ["currentRead", "bestNextStep", "pressure"],
  LEARN: ["whyThisFits", "howToUseThis", "whyThisResponse"],
  BASELINE: ["howYouTendToWork", "atYourBest", "whatHelps"],
  RELATIONSHIP: ["whatsHappening", "bestNextMove", "whatMayHelp"],
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getFirstMeaningfulString(payload: unknown) {
  if (!isRecord(payload)) return null;
  for (const value of Object.values(payload)) {
    if (typeof value === "string" && value.trim()) return value.trim();
    if (Array.isArray(value)) {
      const first = value.find((item) => typeof item === "string" && item.trim());
      if (typeof first === "string") return first.trim();
    }
  }
  return null;
}

export function getReadSummary(read: ReadLike): ReadSummary {
  const type = read.type ?? "UNKNOWN";
  const payload = isRecord(read.outputPayload) ? read.outputPayload : null;
  const typeLabel = TYPE_LABELS[type] ?? "Read";

  const candidates = PRIMARY_FIELDS[type] ?? [];
  for (const field of candidates) {
    const value = payload?.[field];
    if (typeof value === "string" && value.trim()) {
      return {
        title: typeLabel,
        typeLabel,
        summary: value.trim(),
      };
    }
    if (Array.isArray(value)) {
      const first = value.find((item) => typeof item === "string" && item.trim());
      if (typeof first === "string") {
        return {
          title: typeLabel,
          typeLabel,
          summary: first.trim(),
        };
      }
    }
  }

  return {
    title: typeLabel,
    typeLabel,
    summary: getFirstMeaningfulString(payload) ?? "No summary available yet.",
  };
}
