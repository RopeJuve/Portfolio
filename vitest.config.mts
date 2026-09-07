import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      // Mirrors tsconfig.json's "@/*" path — keep both in sync if it changes.
      "@": dirname,
    },
  },
  test: {
    environment: "node",
  },
});
