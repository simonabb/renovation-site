import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/renovation-site/",
  plugins: [react()],
  build: {
    target: "esnext",
  },
});
