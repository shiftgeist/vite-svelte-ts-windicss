import { defineConfig } from "vite";
import svelte from "@svitejs/vite-plugin-svelte";
import windicss from "vite-plugin-windicss";
import svelteConfig from "./svelte.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(svelteConfig),
    windicss({
      safelist: ["prose"],
    }),
  ],
});
