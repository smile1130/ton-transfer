import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    svgr({
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      include: "**/*.svg?react",

      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
      exclude: "",
    }),
  ],
  resolve: {
    alias: {
      "@components": "/src/@components",
      "@layouts": "/src/@layouts",
      "@services": "/src/@services",
      "@utils": "/src/@utils",
      "@store": "/src/@store",
      "features": "/src/features",
      "@config": "/src/@config",
      "@icons": "/src/@icons",
      "@src": "/src",
    },
  },
});
