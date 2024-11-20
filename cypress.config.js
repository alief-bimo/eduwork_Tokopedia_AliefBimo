const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity:false,
  experimentalModifyObstructiveThirdPartyCode: true,
  video:false,
  deafultCommandTimeout:5000,
  pageLoadTimeout: 20000,

  env:{
    webUrl: "https://www.tokopedia.com"
  },

  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
