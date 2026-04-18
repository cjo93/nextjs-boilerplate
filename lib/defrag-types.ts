export type ReadMode = "now" | "baseline" | "relationships" | "learn";

export type ClarityRequest = {
  mode: ReadMode;
  input: string;
  counterpart?: string;
  context?: string;
};

export type ClaritySection = {
  title: string;
  body: string;
};

export type ClaritySectionTemplate = {
  title: string;
  scaffold: string;
};

export type ClarityResponse = {
  mode: ReadMode;
  summary: string;
  sections: ClaritySection[];
  ctaLabel: string;
  generatedWith: "openai" | "fallback";
};
