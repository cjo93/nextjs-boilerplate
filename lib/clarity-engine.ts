import {
  ClarityRequest,
  ClarityResponse,
  ClaritySectionTemplate,
  ReadMode,
} from "./defrag-types";

const claritySectionTemplates: Record<ReadMode, ClaritySectionTemplate[]> = {
  now: [
    {
      title: "Current Read",
      scaffold:
        "The moment looks more like a pressure event than a final conclusion about what is true.",
    },
    {
      title: "Pressure",
      scaffold:
        "Urgency, uncertainty, or a perceived mismatch may be amplifying the intensity of the read.",
    },
    {
      title: "Drift Risk",
      scaffold:
        "If you keep reacting at the current pace, the moment may harden into a more confused or escalated exchange.",
    },
    {
      title: "Timing",
      scaffold:
        "This looks like a moment where slowing slightly would improve the quality of the next move.",
    },
    {
      title: "Best Posture",
      scaffold:
        "Stay clear, reduce interpretive overreach, and respond from observation rather than urgency.",
    },
    {
      title: "Best Next Step",
      scaffold:
        "Name what seems active, narrow the response, and choose the smallest action that keeps the moment workable.",
    },
  ],
  baseline: [
    {
      title: "How You Tend to Work",
      scaffold:
        "You appear to move toward resolution quickly and look for structure that reduces ambiguity.",
    },
    {
      title: "Under Pressure",
      scaffold:
        "Pressure may make your pace sharper and turn your need for clarity into urgency.",
    },
    {
      title: "At Your Best",
      scaffold:
        "You tend to be strongest when you can stay direct, steady, and clear without needing to force the moment.",
    },
    {
      title: "What Throws You Off",
      scaffold:
        "Repeated uncertainty, mixed signals, or a stalled response can make you push harder than the moment can hold.",
    },
    {
      title: "What Helps",
      scaffold:
        "Clear framing, realistic pacing, and enough room to distinguish signal from noise help you stay grounded.",
    },
    {
      title: "What Brings You Back",
      scaffold:
        "A brief pause, a cleaner read of the pattern, and a narrower next move help you return to clarity.",
    },
  ],
  relationships: [
    {
      title: "What’s Happening",
      scaffold:
        "The dynamic looks shaped by interpretation pressure more than by fully clarified intent.",
    },
    {
      title: "You in the Dynamic",
      scaffold:
        "Your side of the exchange may be pushing for resolution or clarity before the moment is stable enough to hold it.",
    },
    {
      title: "The Other Person",
      scaffold:
        "They may be reacting from their own pressure, defensiveness, or incomplete read of what you mean.",
    },
    {
      title: "The Pattern",
      scaffold:
        "The loop appears to be mutual misreading, where each response increases the other side’s certainty or strain.",
    },
    {
      title: "What May Help",
      scaffold:
        "A slower pace, cleaner framing, and less certainty about intent can reduce distortion inside the exchange.",
    },
    {
      title: "Best Next Move",
      scaffold:
        "Respond to the pattern, not just the latest line, and choose the smallest move that clarifies rather than escalates.",
    },
  ],
  learn: [
    {
      title: "Why this fits",
      scaffold:
        "This read is organized around the strongest pattern, pressure cue, and relational signal visible in the moment.",
    },
    {
      title: "What may be active",
      scaffold:
        "The system is reading for what appears most behaviorally relevant right now, not every possible interpretation at once.",
    },
    {
      title: "Pattern vs pressure",
      scaffold:
        "Some parts of the read reflect a stable tendency, while others reflect what the current moment may be amplifying.",
    },
    {
      title: "Why this response",
      scaffold:
        "The suggested move is chosen to reduce distortion, improve timing, and keep the situation workable.",
    },
    {
      title: "How to use this",
      scaffold:
        "Use the read as a clarifying frame for the next move, not as a final judgment about you or anyone else.",
    },
  ],
};

export function buildClarityResponse(req: ClarityRequest): ClarityResponse {
  const inputPreview = req.input.trim().slice(0, 120);
  const contextSuffix = inputPreview ? ` Context: ${inputPreview}.` : "";

  return {
    mode: req.mode,
    summary: "This is a simplified clarity read based on your input.",
    sections: claritySectionTemplates[req.mode].map((section) => ({
      title: section.title,
      body: `${section.scaffold}${contextSuffix}`,
    })),
    ctaLabel: "Save This Read",
    generatedWith: "fallback",
  };
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

    return {
      ...buildClarityResponse(req),
      summary: text.slice(0, 300),
      generatedWith: "openai",
    };
  } catch {
    return buildClarityResponse(req);
  }
}
