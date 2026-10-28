import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Repository name used by the included GitHub Pages workflow.
  base: "/Sajid_portfolio/"
});
