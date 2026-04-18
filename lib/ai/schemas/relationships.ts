import { z } from "zod";

export const relationshipsInputSchema = z.object({
  userId: z.string().min(1),
  situation: z.string().min(10),
});

export const relationshipsOutputSchema = z.object({
  whatsHappening: z.string().min(1),
  yourRole: z.string().min(1),
  theirRole: z.string().min(1),
  pattern: z.string().min(1),
  whatMayHelp: z.string().min(1),
  bestNextMove: z.string().min(1),
});

export type RelationshipsInput = z.infer<typeof relationshipsInputSchema>;
export type RelationshipsOutput = z.infer<typeof relationshipsOutputSchema>;
