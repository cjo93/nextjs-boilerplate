import type { LearnOutput } from "../schemas/learn";

export function buildLearnPrompt(sourcePayload: unknown) {
  return `Explain this DEFRAG read in plain language.\n\nRead:\n${JSON.stringify(sourcePayload)}\n\nReturn:\n- whyThisFits\n- whatMayBeActive\n- patternVsPressure\n- whyThisResponse\n- howToUseThis\n\nUse calm, practical language. No diagnosis. No jargon.`;
}
