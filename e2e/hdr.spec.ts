import { test, expect } from "@playwright/test";
test("الهيدر الجوال: زر القائمة يفتح الـ Sheet", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForTimeout(1000);
  // زر القائمة (المعروف بـ aria-label فتح القائمة) ظاهر
  const menuBtn = page.getByRole("button", { name: "فتح القائمة" });
  await expect(menuBtn).toBeVisible();
  // نفتح القائمة
  await menuBtn.click();
  await page.waitForTimeout(500);
  // محتوى القائمة يظهر (رابط رئيسي)
  await expect(page.getByRole("link", { name: /مسار التعلم/ }).first()).toBeVisible();
});
