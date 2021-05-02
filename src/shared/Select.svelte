<script>
  let klass = "";
  export { klass as class };
  export let value;
  export let options;
</script>

<select
  bind:value
  class="bg-transparent border rounded border-gray-700 dark:(text-white) min-w-32 py-2 pr-10 pl-3 appearance-none focus:(outline-none border border-svelte ring-2 ring-svelte ring-opacity-30) {klass}"
>
  {#each options as option}
    <option class="dark:text-black" value={option}>{option}</option>
  {/each}
</select>
