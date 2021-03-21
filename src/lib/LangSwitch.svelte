<script>
  import { locale, locales } from "svelte-i18n";
</script>

<select bind:value={$locale}>
  {#each $locales as locale}
    <option value={locale}>{locale}</option>
  {/each}
</select>

<style>
  select {
    @apply min-w-32;
  }
</style>
