import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

import en from "../messages/en.json";
import de from "../messages/de.json";

const langs = {
  en: "en",
  de: "de",
};

addMessages(langs.en, en);
addMessages(langs.de, de);

const locale = getLocaleFromNavigator();

const langAliases = [
  {
    id: langs.de,
    active: ["de-DE", "de-AU"].indexOf(locale),
  },
  {
    id: langs.en,
    active: ["en-US", "en-GB"].indexOf(locale),
  },
];

let initial = langAliases.find((el) => {
  if (el.active > -1) return el;
});

init({
  fallbackLocale: "en",
  initialLocale: initial.id,
  formats: {
    number: {
      EUR: { style: "currency", currency: "EUR" },
    },
  },
});
