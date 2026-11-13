/** Regressions for the lesson-level local oral recorder. */
import {expect, test, type Page} from "@playwright/test";

test.use({
  permissions: ["microphone"],
  launchOptions: {
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined,
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  },
});

async function openOralTask(page: Page) {
  await page.goto("/lesson/b2-10");
  await page.getByRole("button", {name: "عرض الكل"}).click();
  await expect(page.getByText(/تدريب على الإنتاج الشفهي/)).toBeVisible();
}

test("lesson oral recorder waits for permission and creates a local playback", async ({page}) => {
  await openOralTask(page);
  await page.getByRole("button", {name: "ابدأ التسجيل"}).first().click();
  await expect(page.getByRole("button", {name: "بانتظار إذن الميكروفون…"}).first()).toBeVisible();
  await expect(page.getByRole("button", {name: "أوقف التسجيل"}).first()).toBeVisible({timeout: 10_000});
  await page.waitForTimeout(500);
  await page.getByRole("button", {name: "أوقف التسجيل"}).first().click();
  await expect(page.locator("audio[aria-label^='تسجيلك لمهمة']").first()).toBeVisible();
  await expect(page.getByText(/لا يجري تحليل الصوت أو إعطاء درجة آلية/).first()).toBeVisible();
});

test("unsupported MediaRecorder shows a clear fallback instead of starting", async ({page}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "MediaRecorder", {value: undefined, configurable: true});
  });
  await openOralTask(page);
  await page.getByRole("button", {name: "ابدأ التسجيل"}).first().click();
  await expect(page.getByRole("alert").filter({hasText: "التسجيل غير متاح في هذا المتصفح"})).toBeVisible();
  await expect(page.getByRole("button", {name: "ابدأ التسجيل"}).first()).toBeEnabled();
});
