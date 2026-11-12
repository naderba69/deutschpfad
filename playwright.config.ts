import { defineConfig, devices } from "@playwright/test";

/**
 * اختبارات E2E — تُشغَّل على خادم إنتاج محلي (next start)
 * لا تتطلب تثبيت متصفحات (Chromium system أو headless shell).
 */
export default defineConfig({
  testDir: "./e2e",
  reporter: [["list"], ["html", {outputFolder: "playwright-report", open: "never"}]],
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
