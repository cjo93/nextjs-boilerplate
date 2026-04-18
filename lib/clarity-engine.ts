import "server-only";

import {
  ClarityRequest,
  ClarityResponse,
} from "./defrag-types";
import { buildClarityResponse } from "./clarity-scaffold";

export async function generateClarity(
  req: ClarityRequest
): Promise<ClarityResponse> {
  if (!process.env.OPENAI_API_KEY) {
    return buildClarityResponse(req);
  }

  try {
    const { OpenAI } = await import("openai");
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const prompt = `You are DEFRAG. Produce a clarity read in plain language.
Mode: ${req.mode}
Input: ${req.input}
Counterpart: ${req.counterpart ?? ""}
Context: ${req.context ?? ""}
Return JSON with summary and sections.`;

    const res = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    const text = typeof res.output_text === "string" ? res.output_text : "";

    return {
      ...buildClarityResponse(req),
      summary: text.slice(0, 300),
      generatedWith: "openai",
    };
  } catch {
    return buildClarityResponse(req);
  }
}
