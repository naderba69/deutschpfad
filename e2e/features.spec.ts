/**
 * اختبارات E2E للميزات الجديدة:
 * القصص التفاعلية، دفتر الأخطاء، مراجعة الجمل (SRS)، إعدادات الصوت
 */
import { test, expect } from "@playwright/test";

test("القصص التفاعلية: المكتبة تعرض المستويات والقصص", async ({ page }) => {
  await page.goto("/stories");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("القصص التفاعلية");
  await expect(page.getByText("آنا تذهب للتسوق").first()).toBeVisible();
  await expect(page.getByText("يوم في برلين").first()).toBeVisible();
});

test("القصص التفاعلية: فتح قصة وعرض نصها الألماني", async ({ page }) => {
  await page.goto("/stories");
  await page.getByText("آنا تذهب للتسوق").first().click();
  // نص المقطع الأول بالألمانية
  await expect(page.getByText(/Anna ist im Supermarkt/).first()).toBeVisible();
  // زر الترجمة متاح
  await expect(page.getByRole("button", { name: /أظهر الترجمة/ })).toBeVisible();
});

test("دفتر الأخطاء: يعرض الحالة الفارغة أو الإحصائيات", async ({ page }) => {
  await page.goto("/error-notebook");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("دفتر أخطائك");
  // إما «دفترك نظيف» أو أخطاء متراكمة — إحداهما تظهر دائماً
  await expect(
    page.getByText(/دفترك نظيف|أخطاؤك المتراكمة/).first(),
  ).toBeVisible();
});

test("مراجعة الجمل: الصفحة تفتح وتعمل (SRS)", async ({ page }) => {
  await page.goto("/sentence-review");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("مراجعة الجمل");
  await expect(page.getByText(/لا جمل مستحقة اليوم|مراجعة اليوم/).first()).toBeVisible();
});

test("إعدادات الصوت: سرعة الاستماع والمؤثرات ظاهرة", async ({ page }) => {
  await page.goto("/settings");
  await expect(page.getByText("إعدادات الصوت والاستماع").first()).toBeVisible();
  await expect(page.getByText("سرعة الاستماع المفضلة").first()).toBeVisible();
  await expect(page.getByText("المؤثرات الصوتية").first()).toBeVisible();
});

test("تركيز الهملات (ä ö ü ß) يظهر في صفحة الإملاء", async ({ page }) => {
  await page.goto("/diktate");
  await expect(page.getByText(/الهملات الألمانية/).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /استمع للكلمة/ }).first()).toBeVisible();
});
