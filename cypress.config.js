const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl:'https://www.testograf.ru',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
