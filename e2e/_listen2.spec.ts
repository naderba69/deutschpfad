import { test, expect } from "@playwright/test";

test("التنقل داخل الدرس ينتقل من الأهداف إلى التمهيد دون أخطاء في الصفحة", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/lesson/a1-01");

  await expect(page.getByText("الأهداف التعليمية", { exact: false }).first()).toBeVisible();
  const nextButton = page.getByRole("button", { name: /^التالي:/ }).first();
  await expect(nextButton).toBeVisible();
  await expect(nextButton).toBeEnabled();
  await nextButton.click();
  await expect(page.getByText("التمهيد وتنشيط", { exact: false }).first()).toBeVisible();

  expect(pageErrors).toEqual([]);
});
