import { z } from "zod";

export const connectorWorkspaceReadSchema = z.object({
  source: z.enum(["deepresearch", "manual", "connector"]),
  sourceRunId: z.string().min(1),
  userId: z.string().min(1),
  type: z.enum(["NOW", "LEARN", "BASELINE", "RELATIONSHIP"]),
  inputPayload: z.record(z.any()),
  outputPayload: z.record(z.any()),
});

export type ConnectorWorkspaceRead = z.infer<typeof connectorWorkspaceReadSchema>;
