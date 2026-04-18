import { z } from "zod";

export const nowInputSchema = z.object({
  userId: z.string().min(1),
  moment: z.string().min(10),
  urgency: z.enum(["low", "medium", "high"]).default("medium"),
  tags: z.array(z.string()).default([]),
});

export const nowOutputSchema = z.object({
  currentRead: z.string().min(1),
  pressure: z.string().min(1),
  driftRisk: z.string().min(1),
  timing: z.string().min(1),
  bestPosture: z.string().min(1),
  bestNextStep: z.string().min(1),
  confidence: z.string().optional(),
  followUps: z.array(z.string()).default([]),
});

export type NowInput = z.infer<typeof nowInputSchema>;
export type NowOutput = z.infer<typeof nowOutputSchema>;
