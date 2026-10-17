/**
 * اختبارات E2E للمراحل الجديدة:
 * الخريطة المتعرجة، المراجعة الأسبوعية، الكفايات، البودكاست، الثقافة، الكتابة المتدرجة
 */
import { test, expect } from "@playwright/test";

test("خريطة المسار: صفحة المسار تعرض الخريطة المتعرجة", async ({ page }) => {
  await page.goto("/learning-path");
  await expect(page.getByText("خريطة المسار المتعرجة").first()).toBeVisible();
  await expect(page.getByText("مكتمل").first()).toBeVisible();
});

test("المراجعة الأسبوعية: الصفحة تعمل وتظهر الملخص", async ({ page }) => {
  await page.goto("/review/weekly");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("المراجعة الأسبوعية");
  await expect(page.getByText(/ملخص أسبوعك|لا توجد/).first()).toBeVisible();
});

test("كفايات CEFR: الصفحة تعرض المهارات الست", async ({ page }) => {
  await page.goto("/dashboard/competencies");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("CEFR");
  await expect(page.getByText("مؤشر الإتقان النحوي").first()).toBeVisible();
});

test("البودكاست: المكتبة تعرض الحلقات لكل مستوى", async ({ page }) => {
  await page.goto("/podcasts");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("البودكاست");
  await expect(page.getByText("في السوق").first()).toBeVisible();
});

test("الثقافة الألمانية: البطاقات الثقافية ظاهرة", async ({ page }) => {
  await page.goto("/landeskunde");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("الثقافة");
  await expect(page.getByText("التحية والوداع").first()).toBeVisible();
});

test("مسار الكتابة: المراحل الأربع ظاهرة والمهمة الأولى تعمل", async ({ page }) => {
  await page.goto("/writing-path");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("مسار الكتابة");
  await expect(page.getByText("الجملة").first()).toBeVisible();
  await expect(page.getByText("المقال").first()).toBeVisible();
  await expect(page.getByText(/عرّف عن نفسك/).first()).toBeVisible();
});

test("مكتبة القصص: 48 قصة موزعة على المستويات", async ({ page }) => {
  await page.goto("/stories");
  await expect(page.getByText("60 قصص").first()).toBeVisible();
  await expect(page.getByText("في المقهى").first()).toBeVisible(); // قصة A1 إضافية
});
