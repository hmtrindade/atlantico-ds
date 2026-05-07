import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tailwind-preset": "src/tailwind-preset.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "es2020",
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    /^@radix-ui\//,
    /^@mui\//,
    /^@emotion\//,
    "lucide-react",
  ],
  loader: {
    ".svg": "dataurl",
  },
  tsconfig: "tsconfig.json",
});
