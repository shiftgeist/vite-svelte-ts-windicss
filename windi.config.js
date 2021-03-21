const colors = require("windicss/colors");
const typography = require("windicss/plugin/typography");
const formsPlugin = require("windicss/plugin/forms");

module.exports = {
  darkMode: "class",
  plugins: [typography, formsPlugin],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        "brand-light": "#F6F7F8",
        "brand-dark": "#292A2B",
        "og-red": "#FF506D",
        "og-yellow": "#FFCC95",
        "og-green": "#19F9D8",
        "og-cyan": "#43D5EC",
        "og-blue": "#6CB1FF",
      },
    },
  },
};
