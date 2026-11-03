import { expect, test } from "@playwright/test";

test("A1-01b: مشهد الاستماع موجود ومصدر النطق معلن والنص يُكشف صراحةً", async ({ page }) => {
  await page.addInitScript(() => localStorage.removeItem("lesson-step:a1-01b"));
  await page.goto("/lesson/a1-01b");
  await page.getByRole("button", { name: "عرض الكل" }).click();

  const section = page.locator("#lesson-section-hoerverstehen");
  await section.scrollIntoViewIfNeeded();
  await section.getByRole("tab", { name: "سارة تتعرّف إلى زملائها" }).click();
  await expect(section.getByTestId("listening-audio-disclosure")).toContainText("SpeechSynthesis");
  await expect(section.getByText("Hallo, Sara! Woher kommst du?", { exact: true })).toHaveCount(0);

  await section.getByRole("button", { name: "اكشف نص الحوار" }).click();
  await expect(section.getByText("Hallo, Sara! Woher kommst du?", { exact: true }).first()).toBeVisible();
  await expect(section.getByText("Wo wohnst du jetzt, Sara?", { exact: true }).first()).toBeVisible();

  await section.getByRole("tab", { name: "ميلان والعمل والدراسة" }).click();
  await expect(section.getByTestId("listening-audio-disclosure")).toContainText("SpeechSynthesis");
  await section.getByRole("button", { name: "اكشف نص الحوار" }).click();
  await expect(section.getByText("Ich arbeite in einem Café.", { exact: true }).first()).toBeVisible();
  await expect(section.getByText("Ich lerne am Abend.", { exact: false }).first()).toBeVisible();
});
