module.exports = {
  darkMode: "class",
  theme: {
    colors: {
      "brand-light": "#F6F7F8",
      "brand-dark": "#292A2B",
      "og-red": "#FF506D",
      "og-yellow": "#FFCC95",
      "og-green": "#19F9D8",
      "og-cyan": "#43D5EC",
      "og-blue": "#6CB1FF",
    },
  },
  plugins: [
    require("windicss/plugin/aspect-ratio"),
    require("windicss/plugin/filters"),
    require("windicss/plugin/forms"),
    require("windicss/plugin/line-clamp"),
    require("windicss/plugin/typography")({
      modifiers: ["DEFAULT"],
    }),
  ],
};
