// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        bog1: resolve(__dirname, "src/bog1.html"),
        bog2: resolve(__dirname, "src/bog2.html"),
        bog3: resolve(__dirname, "src/bog3.html"),
        bøger: resolve(__dirname, "src/bøger.html"),
        fantasy: resolve(__dirname, "src/fantasy.html"),
        kaerlighed: resolve(__dirname, "src/kaerlighed.html"),
        nordiskmytologi: resolve(__dirname, "src/nordiskmytologi.html"),
        yarealisme: resolve(__dirname, "src/yarealisme.html"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
