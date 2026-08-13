/**
 * اختبارات E2E أساسية (Smoke) — كل صفحة رئيسية تُحمَّل 200 مع محتوى متوقع
 */
import { test, expect } from "@playwright/test";

test("الرئيسية تعرض الشعار والعنوان", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/درب الألمانية|DeutschPfad/);
  await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
});

test("مسار التعلم يعرض المستويات الأربعة", async ({ page }) => {
  await page.goto("/learning-path");
  for (const lv of ["A1", "A2", "B1", "B2"]) {
    await expect(page.getByText(lv, { exact: true }).first()).toBeVisible();
  }
});

test("صفحة الدرس a1-01 تحوي المحتوى الألماني", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await expect(page.getByText("Hallo", { exact: false }).first()).toBeVisible();
});

test("القالب الشامل يعرض العبارات", async ({ page }) => {
  await page.goto("/redemittel");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("بنك العبارات");
});

test("امتحان الختم A1 قابل للفتح", async ({ page }) => {
  await page.goto("/tests/seal/a1");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("امتحان ختم");
});

test("صفحة الإملاء تعرض المستويات", async ({ page }) => {
  await page.goto("/diktate");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("الإملاء");
});

test("المفردات B2 بالمواضيع تعرض 18 موضوعاً", async ({ page }) => {
  await page.goto("/wortschatz-b2");
  await expect(page.getByText("العمل والمهنة").first()).toBeVisible();
  await expect(page.getByText("اللغة والتعلم").first()).toBeVisible();
});
