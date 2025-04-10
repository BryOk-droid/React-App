import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React-App/", // Must match your repository name

  // Optional optimizations:
  build: {
    outDir: "dist",
    emptyOutDir: true, // Clears the dist folder before building
    sourcemap: false, // Disable for production (smaller files)
    chunkSizeWarningLimit: 1600, // Adjust chunk size warning (in kB)
  },

  // Local dev server settings (optional)
  server: {
    port: 5173, // Default Vite port
    open: true, // Automatically open browser
  },

  // Fix for GitHub Pages SPA routing
  // (Ensures 404.html is included in build)
  publicDir: "public",
});
