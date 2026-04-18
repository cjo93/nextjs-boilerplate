import { getOpenAIClient } from "../openai-client";
import { buildLearnPrompt } from "../prompts/learn";
import { learnOutputSchema, type LearnInput, type LearnOutput } from "../schemas/learn";

export async function generateLearn(sourcePayload: unknown): Promise<LearnOutput> {
  const client = getOpenAIClient();

  const res = await client.responses.create({
    model: "gpt-4.1",
    input: buildLearnPrompt(sourcePayload),
    text: { format: { type: "json_object" } },
  });

  const parsed = JSON.parse(res.output_text || "{}");
  return learnOutputSchema.parse(parsed);
}
