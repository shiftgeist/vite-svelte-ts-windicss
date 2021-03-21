<script lang="ts">
  import { _ } from "svelte-i18n";
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import LangSwitch from "./lib/LangSwitch.svelte";
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <LangSwitch />

  <h1>{$_("page_title")}</h1>

  <h1>{$_("index.title")}</h1>

  <Counter id="0" />

  <p>
    {@html $_("messages.visit_page", {
      values: { link: '<a href="https://svelte.dev">svelte.dev</a>' },
    })}
  </p>
</main>

<style>
  :root {
    @apply font-sans;
  }

  main {
    @apply text-center p-4 mx-auto;
  }

  img {
    @apply w-64 h-64 mx-auto;
  }

  h1 {
    @apply text-orange-500 uppercase text-6xl font-normal mx-auto my-8 max-w-md;
  }

  p {
    @apply max-w-md mx-auto my-4 leading-snug;
  }

  @screen sm {
    h1 {
      @apply max-w-none;
    }

    p {
      @apply max-w-none;
    }
  }
</style>
