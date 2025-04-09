import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/React-App/", // Must match your EXACT repo name
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
});
