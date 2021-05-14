<script lang="ts">
  import { _ } from 'svelte-i18n'
  import DarkMode from 'svelte-dark-mode'
  import Button from '../shared/Button.svelte'

  let theme
  let klass = ''
  export { klass as class }

  $: switchTheme = theme === 'dark' ? 'light' : 'dark'
  $: document.body.className = theme
</script>

<div class={klass}>
  <DarkMode bind:theme />

  <Button on:click={() => (theme = switchTheme)}
    >{theme === 'light'
      ? $_('buttons.switch_theme_dark')
      : $_('buttons.switch_theme_light')}</Button
  >
</div>
