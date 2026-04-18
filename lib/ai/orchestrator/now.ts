import { getOpenAIClient } from "../openai-client";
import { buildNowPrompt } from "../prompts/now";
import { nowOutputSchema, type NowInput, type NowOutput } from "../schemas/now";

export async function generateNow(input: NowInput): Promise<NowOutput> {
  const openai = getOpenAIClient();
  const res = await openai.responses.create({
    model: "gpt-4.1",
    input: buildNowPrompt(input),
    text: { format: { type: "json_object" } },
  });
  const parsed = JSON.parse(res.output_text || "{}");
  return nowOutputSchema.parse(parsed);
}
