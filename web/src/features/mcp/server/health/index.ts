import type { McpFeatureModule } from "../registry";
import { getHealthTool, handleGetHealth } from "./tools/getHealth";

export const healthFeature = {
  name: "health",
  description: "Check Tracelight health",
  tools: [
    {
      definition: getHealthTool,
      handler: handleGetHealth,
    },
  ],
} as const satisfies McpFeatureModule;
