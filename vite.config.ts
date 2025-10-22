import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // ahonnan a Vite indul (frontend gyökér)
  root: path.resolve(__dirname, "."),
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
});