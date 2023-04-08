const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  video: false,
  projectId: 'khdjk9',
  experimentalWebKitSupport: true,
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  retries: {
    runMode: 2,
    openMode: 0
  },
  env: {
    failSilently: false,
    SNAPSHOT_BASE_DIRECTORY: 'cypress/snapshots/base',
    SNAPSHOT_DIFF_DIRECTORY: 'cypress/snapshots/diff',
    ALWAYS_GENERATE_DIFF: false,
    type: 'actual'
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
});
