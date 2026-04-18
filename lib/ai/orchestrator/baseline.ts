import { getOpenAIClient } from "../openai-client";
import { buildBaselinePrompt } from "../prompts/baseline";
import { baselineOutputSchema, type BaselineInput, type BaselineOutput } from "../schemas/baseline";

export async function generateBaseline(input: BaselineInput): Promise<BaselineOutput> {
  const client = getOpenAIClient();

  const res = await client.responses.create({
    model: "gpt-4.1",
    input: buildBaselinePrompt(input),
    text: { format: { type: "json_object" } },
  });

  const parsed = JSON.parse(res.output_text || "{}");
  return baselineOutputSchema.parse(parsed);
}
