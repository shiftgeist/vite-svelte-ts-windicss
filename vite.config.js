import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import windicss from "vite-plugin-windicss";
import svelteConfig from "./svelte.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(svelteConfig),
    windicss({
      config: "windi.config.js",
      safelist: [],
      transformCSS: "pre",
    }),
  ],
});
