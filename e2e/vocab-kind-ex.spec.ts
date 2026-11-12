import { expect, test } from "@playwright/test";

/**
 * الدفعة 127 — حقل النوع g والمثال ex يظهران أينما كانت الكلمة:
 * · النوع (فعل/صفة/ظرف/ضمير/أخرى) لم يكن يُعرض في أي موضع (1014 قيمة)
 * · المثال كان مخفياً في 5 مواضع (155 مثالاً)
 * مرساة ثابتة: `heißen` (g: v) ومثاله `Ich heiße Anna.`.
 */
test("المصطلحات: نوع الكلمة ظاهر في المصطلحات", async ({ page }) => {
  await page.goto("/glossar");
  await expect(page.getByTestId("vocab-kind-type").first()).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText("فعل").first()).toBeVisible({ timeout: 20_000 });
});

test("المثال ظاهر في المصطلحات (heißen ← Ich heiße Anna.)", async ({ page }) => {
  await page.goto("/glossar");
  await expect(page.getByText("Ich heiße Anna.").first()).toBeVisible({ timeout: 20_000 });
});

test("قاموس الصور: الشارة بجانب الكلمة", async ({ page }) => {
  await page.goto("/picture-dictionary");
  const badge = page.getByTestId("vocab-kind-type").or(page.getByTestId("vocab-kind-article"));
  await expect(badge.first()).toBeVisible({ timeout: 20_000 });
});
