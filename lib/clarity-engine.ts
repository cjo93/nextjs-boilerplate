import "server-only";

import {
  ClarityRequest,
  ClarityResponse,
  ClaritySection,
} from "./defrag-types";
import { buildClarityResponse } from "./clarity-scaffold";

function isClaritySections(value: unknown): value is ClaritySection[] {
  return (
    Array.isArray(value) &&
    value.every(
      (section) =>
        section &&
        typeof section === "object" &&
        typeof (section as { title?: unknown }).title === "string" &&
        typeof (section as { body?: unknown }).body === "string"
    )
  );
}

function parseClarityResponse(
  output: string,
  fallback: ClarityResponse
): ClarityResponse {
  try {
    const parsed = JSON.parse(output) as {
      summary?: unknown;
      sections?: unknown;
    };

    if (
      typeof parsed.summary === "string" &&
      isClaritySections(parsed.sections)
    ) {
      return {
        ...fallback,
        summary: parsed.summary,
        sections: parsed.sections,
        generatedWith: "openai",
      };
    }
  } catch {
    return fallback;
  }

  return fallback;
}

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
    const fallback = buildClarityResponse(req);
    return text ? parseClarityResponse(text, fallback) : fallback;
  } catch {
    return buildClarityResponse(req);
  }
}
