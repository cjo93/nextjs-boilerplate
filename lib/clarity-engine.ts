import { ClarityRequest, ClarityResponse } from "./defrag-types";

const fallback = (req: ClarityRequest): ClarityResponse => {
  const base = "This is a simplified clarity read based on your input.";

  const sectionsMap = {
    now: [
      "Current Read",
      "Pressure",
      "Drift Risk",
      "Timing",
      "Best Posture",
      "Best Next Step",
    ],
    baseline: [
      "How You Tend to Work",
      "Under Pressure",
      "At Your Best",
      "What Throws You Off",
      "What Helps",
      "What Brings You Back",
    ],
    relationships: [
      "What’s Happening",
      "You in the Dynamic",
      "The Other Person",
      "The Pattern",
      "What May Help",
      "Best Next Move",
    ],
    learn: [
      "Why this fits",
      "What may be active",
      "Pattern vs. pressure",
      "Why this response",
      "How to use this",
    ],
  } as const;

  return {
    mode: req.mode,
    summary: base,
    sections: sectionsMap[req.mode].map((title) => ({
      title,
      body: `${title}: ${req.input.slice(0, 120)}...`,
    })),
    ctaLabel: "Save This Read",
    generatedWith: "fallback",
  };
};

export async function generateClarity(
  req: ClarityRequest
): Promise<ClarityResponse> {
  if (!process.env.OPENAI_API_KEY) {
    return fallback(req);
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
      ...fallback(req),
      summary: text.slice(0, 300),
      generatedWith: "openai",
    };
  } catch {
    return fallback(req);
  }
}
