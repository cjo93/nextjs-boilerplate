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
  const normalized = output.trim();
  const fencedMatch = normalized.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const wrappedJson =
    normalized.includes("{") && normalized.includes("}")
      ? normalized.slice(
          normalized.indexOf("{"),
          normalized.lastIndexOf("}") + 1
        )
      : "";
  const candidate = fencedMatch?.[1] ?? (wrappedJson || normalized);

  try {
    const parsed = JSON.parse(candidate) as {
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

function extractResponseText(response: {
  output?: Array<{
    type?: string;
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
}): string {
  const texts =
    response.output
      ?.filter((item) => item.type === "message")
      .flatMap((item) => item.content ?? [])
      .filter((content) => content.type === "output_text")
      .map((content) => content.text ?? "")
      .filter(Boolean) ?? [];

  return texts.join("").trim();
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

    const text = extractResponseText(res);
    const fallback = buildClarityResponse(req);
    return text ? parseClarityResponse(text, fallback) : fallback;
  } catch {
    return buildClarityResponse(req);
  }
}
