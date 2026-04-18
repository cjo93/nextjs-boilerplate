import type { BaselineInput } from "../schemas/baseline";

export function buildBaselinePrompt(input: BaselineInput) {
  return `Generate a baseline profile from this context:\n\n${input.context}\n\nReturn:\n- howYouTendToWork\n- underPressure\n- atYourBest\n- whatThrowsYouOff\n- whatHelps\n- whatBringsYouBack\n\nUse grounded, non-diagnostic language.`;
}
