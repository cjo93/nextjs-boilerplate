import { getOpenAIClient } from "../openai-client";
import { buildRelationshipsPrompt } from "../prompts/relationships";
import { relationshipsOutputSchema, type RelationshipsInput, type RelationshipsOutput } from "../schemas/relationships";

export async function generateRelationships(input: RelationshipsInput): Promise<RelationshipsOutput> {
  const client = getOpenAIClient();

  const res = await client.responses.create({
    model: "gpt-4.1",
    input: buildRelationshipsPrompt(input),
    text: { format: { type: "json_object" } },
  });

  const parsed = JSON.parse(res.output_text || "{}");
  return relationshipsOutputSchema.parse(parsed);
}
