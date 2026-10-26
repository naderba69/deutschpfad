import { expect, test } from "@playwright/test";

test("A1-14: الحوار الثاني يعلن TTS ويشغّل ملف MP3", async ({ page }) => {
  await page.addInitScript(() => localStorage.removeItem("lesson-step:a1-14"));
  await page.goto("/lesson/a1-14");
  await page.getByRole("button", { name: "عرض الكل" }).click();

  const section = page.locator("#lesson-section-hoerverstehen");
  await section.scrollIntoViewIfNeeded();
  await section.getByRole("tab", { name: "حوار صوتي: زيارة المتحف" }).click();
  await expect(section.getByTestId("listening-audio-disclosure")).toContainText("مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً");

  const responsePromise = page.waitForResponse((response) =>
    response.url().endsWith("/audio/lessons/a1-14/ls-a1-14-2-1.mp3"),
  );
  await section.getByRole("button", { name: "استمع للكل" }).click();
  const response = await responsePromise;
  expect([200, 206]).toContain(response.status());
  expect(response.headers()["content-type"]).toContain("audio/mpeg");
});
