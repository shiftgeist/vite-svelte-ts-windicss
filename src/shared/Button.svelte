<script lang="ts">
  let klass = "";
  export { klass as class };
  export let id = "";
</script>

<button
  {id}
  class="bg-svelte border-transparent border rounded-full bg-opacity-10 text-svelte min-w-200px py-4 px-8 hover:bg-opacity-20 focus:(border-svelte outline-none ring-2 ring-svelte ring-opacity-30) active:bg-opacity-30 {klass}"
  on:click
>
  <slot />
</button>
