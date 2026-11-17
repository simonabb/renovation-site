import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Vite build settings for the custom-domain site hosted at the domain root. */
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    target: "esnext",
  },
});
