const { preprocess: windicss } = require("svelte-windicss-preprocess");
const { typescript } = require("svelte-preprocess");

module.exports = {
  preprocess: [typescript(), windicss()],
};
