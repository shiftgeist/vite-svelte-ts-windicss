<script lang="ts">
  import { _ } from "svelte-i18n";
  import Button from "../shared/Button.svelte";
  import { getStore } from "./hmr-stores";
  export let id: string;

  const count = getStore(id, 0);
  const increment = () => {
    $count += 1;
  };
</script>

<Button {id} on:click={increment}>
  {$_("buttons.click", { values: { number: $count } })}
</Button>
