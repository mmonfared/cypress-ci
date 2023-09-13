const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zu59qi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

