/**
 * اختبارات E2E للميزات الجديدة (دفعة التطوير الشاملة):
 * 60 قصة، 20 بودكاست، شريط تنقل سفلي، نجوم إتقان، عن المنصة، تحديات يومية
 */
import { test, expect } from "@playwright/test";

test("المكتبات الموسعة: 60 قصة و20 بودكاست", async ({ page }) => {
  await page.goto("/stories");
  await expect(page.getByText("60 قصص").first()).toBeVisible({ timeout: 8000 });
  await page.goto("/podcasts");
  await expect(page.getByText("20 حلقات بودكاست").first()).toBeVisible({ timeout: 8000 });
});

test("الجوال: شريط التنقل السفلي يظهر بأربع تبويبات", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForTimeout(800);
  const nav = page.getByRole("navigation", { name: "التنقل السفلي" });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole("link", { name: /الرئيسية/ })).toBeVisible();
  await expect(nav.getByRole("link", { name: /المسار/ })).toBeVisible();
  await expect(nav.getByRole("link", { name: /المراجعة/ })).toBeVisible();
  await expect(nav.getByRole("link", { name: /لوحتي/ })).toBeVisible();
});

test("الشاشات الكبيرة: شريط التنقل السفلي مخفي", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.waitForTimeout(800);
  const nav = page.getByRole("navigation", { name: "التنقل السفلي" });
  await expect(nav).toBeHidden();
});

test("صفحة «عن المنصة» تعرض القيم", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("DeutschPfad");
  await expect(page.getByText("مجانية 100%").first()).toBeVisible();
});

test("مركز المستوى: نجوم الإتقان تظهر", async ({ page }) => {
  await page.goto("/level/a1");
  await expect(page.getByText("% إتقان").first()).toBeVisible({ timeout: 8000 });
});

test("التحديات اليومية في صفحة التحفيز", async ({ page }) => {
  await page.goto("/gamification");
  await expect(page.getByText("تحديات اليوم").first()).toBeVisible({ timeout: 8000 });
  await expect(page.getByText("حل 10 تمارين اليوم").first()).toBeVisible();
});
