import { z } from "zod";

export const baselineInputSchema = z.object({
  userId: z.string().min(1),
  context: z.string().min(10),
});

export const baselineOutputSchema = z.object({
  howYouTendToWork: z.string().min(1),
  underPressure: z.string().min(1),
  atYourBest: z.string().min(1),
  whatThrowsYouOff: z.string().min(1),
  whatHelps: z.string().min(1),
  whatBringsYouBack: z.string().min(1),
});

export type BaselineInput = z.infer<typeof baselineInputSchema>;
export type BaselineOutput = z.infer<typeof baselineOutputSchema>;
