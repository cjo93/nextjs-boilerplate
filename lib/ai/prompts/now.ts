import type { NowInput } from "../schemas/now";

export function buildNowPrompt(input: NowInput) {
  return `Generate a structured NOW read for DEFRAG.\n\nMoment:\n${input.moment}\n\nUrgency: ${input.urgency}\nTags: ${input.tags.join(", ") || "none"}\n\nReturn concise grounded fields for:\n- currentRead\n- pressure\n- driftRisk\n- timing\n- bestPosture\n- bestNextStep\n- confidence\n- followUps\n\nUse plain language. No diagnosis language. No spiritual jargon.`;
}
