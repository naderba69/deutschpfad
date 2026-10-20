import { expect, test } from "@playwright/test";

/** الدفعة 128 — حقول البحث ذات الأسماء الصريحة متاحة لقارئات الشاشة. */
test("القاموس المصوّر: حقل البحث له اسم مفهوم", async ({ page }) => {
  await page.goto("/picture-dictionary");
  await expect(page.getByRole("textbox", { name: "ابحث في القاموس المصوّر" })).toBeVisible({ timeout: 15_000 });
});

test("قائمة مفردات B2: حقل البحث له اسم مفهوم", async ({ page }) => {
  await page.goto("/wortschatz-b2/top500");
  await expect(page.getByRole("textbox", { name: "ابحث في مفردات B2" })).toBeVisible({ timeout: 15_000 });
});
