import { defineConfig } from 'vite'

import pluginSvelte from '@sveltejs/vite-plugin-svelte'
import pluginWindicss from 'vite-plugin-windicss' // not working

import svelteConfig from './svelte.config.js'

export default defineConfig({
  plugins: [
    pluginSvelte(svelteConfig),
    pluginWindicss({
      config: 'windi.config.js',
      safelist: [],
      transformCSS: 'pre'
    })
  ]
})
