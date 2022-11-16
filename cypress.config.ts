import { defineConfig } from 'cypress';

export default defineConfig({
  downloadsFolder: 'tests/e2e/downloads',
  fixturesFolder: 'tests/e2e/fixtures',
  screenshotsFolder: 'tests/e2e/screenshots',
  videosFolder: 'tests/e2e/videos',
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'tests/e2e/support/e2e.ts',
    specPattern: 'tests/e2e/specs/**/*.spec.{js,jsx,ts,tsx}}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
