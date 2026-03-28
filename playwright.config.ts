import { defineConfig, devices } from '@playwright/test';

// Playwright test configuration
export default defineConfig({
  // Directory where all your test files are located
  testDir: './tests',

  // Run tests in parallel across files for faster execution
  fullyParallel: true,

  // Number of parallel workers (threads) to run tests
  // Increase for faster runs, decrease if system is slow or tests are unstable
  workers: 4,

  // Number of retries for failed tests
  // Useful for handling flaky tests
  retries: 1,

  // Maximum time (in milliseconds) allowed for a single test
  // 30 seconds timeout per test
  timeout: 30000,

  snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}-{projectName}.png',

  use: {
    // Base URL for all tests
    // You can use page.goto('/') instead of full URL
    baseURL: 'https://www.saucedemo.com',

    // Run tests in headless mode (no visible browser)
    // Set to false if you want to see the browser while debugging
    headless: true,

    // Capture screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Collect trace only when a test fails on first retry
    // Useful for debugging failures in Playwright Trace Viewer
    trace: 'on-first-retry'
  },

  // Use HTML reporter for test results
  // 'open: never' prevents auto-opening the report after test run
  reporter: [['html', { open: 'never' }]],

  // Define browser projects (test environments)
  projects: [
    {
      // Run tests on Chromium browser (Chrome/Edge engine)
      name: 'chromium',

      use: {
        // Use Playwright's predefined desktop Chrome settings
        ...devices['Desktop Chrome']
      }
    }
  ]
});