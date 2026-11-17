import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Vite build settings, including the GitHub Pages project-site base path. */
export default defineConfig({
  base: "/renovation-site/",
  plugins: [react()],
  build: {
    target: "esnext",
  },
});
