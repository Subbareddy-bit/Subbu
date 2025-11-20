// @ts-nocheck
/*import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: 'screenshots',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // Browser behavior
    headless: false,
    launchOptions: {
      slowMo: 500,
    },

    // Test capture options
    screenshot: 'on',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});*/
// @ts-nocheck
/*import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: 'screenshots',  // all screenshots, traces, videos stored here
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    headless: false,
    launchOptions: {
      slowMo: 500,
    },

    // ✅ Only save screenshots when tests fail
    screenshot: 'only-on-failure',

    // ✅ Keep trace only when retrying
    trace: 'on-first-retry',

    // ✅ Keep video only when a test fails (optional but useful)
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});*/

// @ts-nocheck
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: 'screenshots',  // all screenshots & videos stored here
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
 // reporter: 'html',
 reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    headless: false,
    launchOptions: {
      slowMo: 500,
    },

    // ✅ Capture screenshots for every test, pass or fail
    screenshot: 'on',

    // ✅ Keep trace only on first retry
    trace: 'on',

    // ✅ Capture video for every test
    video: 'on',
  },

  projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'chrome',                  // ✅ custom project for actual Google Chrome
    use: { 
      ...devices['Desktop Chrome'],
      channel: 'chrome',             // tells Playwright to use installed Google Chrome
    },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
],

});


