<script lang="ts">
  import { locale, locales } from 'svelte-i18n'
  import Select from '../shared/Select.svelte'

  let klass = ''
  export { klass as class }
</script>

<Select options={$locales} bind:value={$locale} class={klass} />
