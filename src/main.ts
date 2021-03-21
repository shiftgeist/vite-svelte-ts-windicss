import App from "./App.svelte";
import "virtual:windi.css";
import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

import en from "./_locales/en.json";
import de from "./_locales/de.json";

addMessages("English", en);
addMessages("Deutsch", de);

init({
  fallbackLocale: "English",
  initialLocale: getLocaleFromNavigator(),
  formats: {
    number: {
      EUR: { style: "currency", currency: "EUR" },
    },
  },
});

const app = new App({
  target: document.body,
});

export default app;
