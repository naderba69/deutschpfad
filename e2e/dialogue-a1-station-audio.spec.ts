import { expect, test } from "@playwright/test";

/** الدفعة 131 — يفتح حوار محطة القطار بصوته المولّد المُعلَن. */
test("A1-16 في محطة القطار: المقطع الأول متاح للمشغّل", async ({ page }) => {
  await page.goto("/dialogues?open=a1-16-bahnhof");
  await expect(page.getByTestId("dialogue-audio-disclosure")).toContainText("مولّد آلياً (TTS) وليس تسجيلاً بشرياً");
  await page.getByRole("button", { name: "ابدأ الحوار" }).click();
  await expect(page.getByRole("button", { name: "استمع: Guten Morgen! Ist das der Zug nach Berlin?" })).toBeVisible({ timeout: 15_000 });

  const responsePromise = page.waitForResponse((response) =>
    response.url().endsWith("/audio/dialogues-a1/a1-16-bahnhof-1.mp3"),
  );
  await page.getByRole("button", { name: "استمع: Guten Morgen! Ist das der Zug nach Berlin?" }).click();
  const response = await responsePromise;
  expect([200, 206]).toContain(response.status());
  expect(response.headers()["content-type"]).toContain("audio/mpeg");
});
