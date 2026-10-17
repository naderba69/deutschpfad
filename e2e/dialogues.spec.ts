/**
 * اختبارات E2E لمكتبة الحوارات اليومية — 60 حواراً (تفوق Menschen)
 */
import { test, expect } from "@playwright/test";

test("مكتبة الحوارات: 60 حواراً موزعة على المستويات الأربعة", async ({ page }) => {
  await page.goto("/dialogues");
  await expect(page.getByText("60 حواراً يومياً", { exact: false }).first()).toBeVisible({ timeout: 8000 });
  // حوارات من كل مستوى
  await expect(page.getByText("التحية والتعارف").first()).toBeVisible();
  await expect(page.getByText("زيارة الطبيب").first()).toBeVisible();
  await expect(page.getByText("مفاوضة الراتب").first()).toBeVisible();
});

test("فتح حوار والتنقل بين الجولات مع ترجمة", async ({ page }) => {
  await page.goto("/dialogues");
  await page.getByRole("button", { name: /التحية والتعارف/ }).first().click();
  // المقدمة ظاهرة
  await expect(page.getByText("في حفلة").first()).toBeVisible({ timeout: 8000 });
  await page.getByRole("button", { name: /ابدأ الحوار/ }).click();
  // الجولة الأولى ظاهرة بالألمانية
  await expect(page.getByText("Hallo! Ich heiße Thomas.").first()).toBeVisible();
  // أظهر الترجمة
  await page.getByRole("button", { name: /أظهر الترجمة/ }).click();
  await expect(page.getByText("مرحباً! اسمي توماس.").first()).toBeVisible();
});

test("وضع «دورك»: كشف الإجابة يعمل", async ({ page }) => {
  await page.goto("/dialogues");
  await page.getByRole("button", { name: /في المقهى/ }).first().click();
  await page.getByRole("button", { name: /ابدأ الحوار/ }).click();
  // تفعيل وضع دورك (الدور المخفي افتراضياً "ب")
  await page.getByRole("button", { name: /تفعيل/ }).first().click();
  // نمر عبر الجولات حتى نصل لدور "ب" (المتعلم)
  let revealed = false;
  for (let i = 0; i < 8; i++) {
    const revealBtn = page.getByRole("button", { name: /كشف الإجابة/ }).first();
    if (await revealBtn.isVisible().catch(() => false)) {
      await revealBtn.click().catch(() => {});
      revealed = true;
      break;
    }
    const nextBtn = page.getByRole("button", { name: /الجولة التالية|الأسئلة/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(300);
    } else break;
  }
  expect(revealed, "يجب أن نصل لجولة «دورك»").toBe(true);
});

test("أسئلة الفهم في نهاية الحوار", async ({ page }) => {
  await page.goto("/dialogues");
  await page.getByRole("button", { name: /في السوبرماركت/ }).first().click();
  await page.getByRole("button", { name: /ابدأ الحوار/ }).click();
  // مرور سريع عبر الجولات
  for (let i = 0; i < 10; i++) {
    const nextBtn = page.getByRole("button", { name: /الجولة التالية|الأسئلة/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(250);
    } else break;
  }
  // أسئلة الفهم ظاهرة
  await expect(page.getByText("أسئلة الفهم — ما فهمت من الحوار؟").first()).toBeVisible({ timeout: 6000 });
});
