<script>
  import { _ } from "svelte-i18n";
  import DarkMode from "svelte-dark-mode";

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme;
</script>

<DarkMode bind:theme />

<button on:click={() => (theme = switchTheme)}
  >{theme === "light"
    ? $_("buttons.switch_theme_dark")
    : $_("buttons.switch_theme_light")}</button
>

<style>
  button {
    @apply border border-gray-300 p-2 rounded;
  }

  button:hover {
    @apply bg-gray-200;
  }
</style>
