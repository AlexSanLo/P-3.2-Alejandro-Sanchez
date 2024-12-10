import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        proyects: resolve(__dirname, "src/proyects.html")
      },
    },
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
  },
  base: "./",
});