import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 300000, // Adjust timeout as needed
  retries: 2, // Number of retries for each test
  use: {
    // Browser settings
    headless: true, // Set to false to run tests in headful mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    // Channel name to use when launching browsers. Possible values: 'chrome', 'firefox', 'webkit'
    channel: 'chrome'
  },
};

export default config;
