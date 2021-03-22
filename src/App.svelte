<script lang="ts">
  import { _ } from "svelte-i18n";

  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import LangSwitch from "./lib/LangSwitch.svelte";
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
</script>

<main class="prose" dark="bg-black">
  <ThemeSwitch />
  <LangSwitch />

  <img src={logo} alt="Svelte Logo" />

  <h1>{$_("index.title")}</h1>

  <Counter id="0" />

  <p>
    {@html $_("messages.visit_page", {
      values: { link: '<a href="https://svelte.dev">svelte.dev</a>' },
    })}
  </p>
</main>

<style>
  main {
    @apply text-center p-4 mx-auto min-h-screen dark:bg-black;
  }

  img {
    @apply w-64 h-64 mx-auto;
  }
</style>
