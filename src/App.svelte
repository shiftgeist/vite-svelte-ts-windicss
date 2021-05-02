<script lang="ts">
  import { _ } from "svelte-i18n";

  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import LangSwitch from "./lib/LangSwitch.svelte";
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
</script>

<main
  class="mx-auto min-h-screen max-w-none text-center p-4 transition-colors prose dark:(prose-light bg-gray-900)"
>
  <div class="flex justify-center">
    <ThemeSwitch class="mr-4" />
    <LangSwitch class="my-auto" />
  </div>

  <img src={logo} alt="Svelte Logo" />

  <h1>{$_("index.title")}</h1>

  <Counter id="0" />

  <p>
    {@html $_("messages.visit_page", {
      values: { link: '<a href="https://kit.svelte.dev/">kit.svelte.dev</a>' },
    })}
  </p>
</main>

<style global>
  img {
    @apply w-64 h-64 mx-auto;
  }
</style>
