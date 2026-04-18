import type { RelationshipsInput } from "../schemas/relationships";

export function buildRelationshipsPrompt(input: RelationshipsInput) {
  return `Analyze this relationship situation:\n\n${input.situation}\n\nReturn:\n- whatsHappening\n- yourRole\n- theirRole\n- pattern\n- whatMayHelp\n- bestNextMove\n\nUse grounded, practical, non-diagnostic language.`;
}
