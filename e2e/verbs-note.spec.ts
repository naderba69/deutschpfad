import { expect, test } from "@playwright/test";

/**
 * الدفعة 125 — ملاحظة الفعل الشاذ تُعرض (كانت مكتوبة في البيانات ومخفية):
 * `scheißen` يحمل `note: "كلمة نابية — تجنبها"` — يجب أن تظهر في الجدول.
 */
test("ملاحظة الفعل الشاذ معروضة في جدول الأفعال", async ({ page }) => {
  await page.goto("/verben");
  await expect(page.getByText("كلمة نابية — تجنبها").first()).toBeVisible();
  // والفعل نفسه ظاهر مع ملاحظته
  await expect(page.getByText("scheißen").first()).toBeVisible();
});

test("صفحة الأفعال: الجدول والتدريب كلاهما يعرضان", async ({ page }) => {
  await page.goto("/verben");
  await expect(page.getByText("Präsens (er)").first()).toBeVisible({ timeout: 15_000 });
  await expect(page.getByText("الماضي البسيط").first()).toBeVisible({ timeout: 15_000 });
});
