import { defineConfig } from 'windicss/helpers'

import pluginAspectRatio from 'windicss/plugin/aspect-ratio'
import pluginFilters from 'windicss/plugin/filters'
import pluginForms from 'windicss/plugin/forms'
import pluginLineClamp from 'windicss/plugin/line-clamp'
import pluginScrollSnap from 'windicss/plugin/scroll-snap'
import pluginTypography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00'
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300')
              },
              'a, strong, h1, h2, h3, h4, code, thead': {
                color: theme('colors.white')
              },
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600')
              },
              hr: {
                borderColor: theme('colors.gray.200')
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600')
              },
              'figure figcaption': {
                color: theme('colors.gray.400')
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800')
              },
              thead: {
                borderBottomColor: theme('colors.gray.400')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600')
              }
            }
          ]
        }
      })
    }
  },
  plugins: [
    pluginAspectRatio,
    pluginFilters,
    pluginForms,
    pluginLineClamp,
    pluginScrollSnap,
    pluginTypography({
      modifiers: ['DEFAULT', 'light']
    })
  ]
})
