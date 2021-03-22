import { preprocess as windicss } from "svelte-windicss-preprocess";
import { typescript } from "svelte-preprocess";

export default {
  preprocess: [
    typescript(),
    windicss({
      compile: false,
      prefix: "windi-",
      globalPreflight: true,
      globalUtility: true,
    }),
  ],
};
