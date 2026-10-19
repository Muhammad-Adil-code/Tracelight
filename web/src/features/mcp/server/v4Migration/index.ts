import type { McpFeatureModule } from "../registry";
import {
  getV4MigrationDataTool,
  handleGetV4MigrationData,
} from "./tools/getV4MigrationData";

export const v4MigrationFeature = {
  name: "v4Migration",
  description: "Inspect project-specific Tracelight v4 migration evidence",
  tools: [
    {
      definition: getV4MigrationDataTool,
      handler: handleGetV4MigrationData,
    },
  ],
} as const satisfies McpFeatureModule;
