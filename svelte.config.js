import preprocess from 'svelte-preprocess'
import { windi } from 'svelte-windicss-preprocess'

export default {
  preprocess: [preprocess({ typescript: true }), windi({ kit: true })]
}
