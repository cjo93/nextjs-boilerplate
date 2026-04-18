import { z } from "zod";

export const learnInputSchema = z.object({
  readId: z.string().min(1),
});

export const learnOutputSchema = z.object({
  whyThisFits: z.string().min(1),
  whatMayBeActive: z.string().min(1),
  patternVsPressure: z.string().min(1),
  whyThisResponse: z.string().min(1),
  howToUseThis: z.string().min(1),
});

export type LearnInput = z.infer<typeof learnInputSchema>;
export type LearnOutput = z.infer<typeof learnOutputSchema>;
