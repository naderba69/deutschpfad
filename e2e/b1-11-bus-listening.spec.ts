import { expect, test } from "@playwright/test";

test("B1-11: حوار النقل يعلن TTS ويشغّل MP3", async ({ page }) => {
  await page.addInitScript(() => localStorage.removeItem("lesson-step:b1-11"));
  await page.goto("/lesson/b1-11");
  await page.getByRole("button", { name: "عرض الكل" }).click();

  const section = page.locator("#lesson-section-hoerverstehen");
  await section.scrollIntoViewIfNeeded();
  await section.getByRole("tab", { name: "حوار خيالي: خطة الحافلات الجديدة" }).click();
  await expect(section.getByTestId("listening-audio-disclosure")).toContainText("مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً");

  const responsePromise = page.waitForResponse((response) =>
    response.url().endsWith("/audio/lessons/b1-11/ls-b1-11-2-1.mp3"),
  );
  await section.getByRole("button", { name: "استمع للكل" }).click();
  const response = await responsePromise;
  expect([200, 206]).toContain(response.status());
  expect(response.headers()["content-type"]).toContain("audio/mpeg");
});
