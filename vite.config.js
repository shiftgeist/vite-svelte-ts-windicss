import { defineConfig } from "vite";
import svelte from "@svitejs/vite-plugin-svelte";
import windicss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), windicss()],
});
