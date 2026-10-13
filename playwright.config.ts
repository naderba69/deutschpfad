import { defineConfig, devices } from "@playwright/test";

/**
 * اختبارات E2E — تُشغَّل على خادم إنتاج محلي (next start)
 * لا تتطلب تثبيت متصفحات (Chromium system أو headless shell).
 *
 * في بيئات بلا متصفحات Playwright (حاويات/سحابة) يمكن تمرير مسار Chromium جاهز:
 *   PLAYWRIGHT_CHROMIUM_PATH=/path/to/chromium npx playwright test
 */
const chromiumPath = process.env.PLAYWRIGHT_CHROMIUM_PATH;

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
    launchOptions: chromiumPath
      ? { executablePath: chromiumPath, args: ["--no-sandbox", "--disable-setuid-sandbox"] }
      : {},
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
