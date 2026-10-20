/**
 * اختبارات E2E: الميزات الجديدة (الجولة الإثرائية — Vercel مجاني)
 * المعجم المصوّر · المحادثة التفاعلية · سوق الجواهر · تحويل الأزمنة · المزامنة
 */
import { test, expect, type Page } from "@playwright/test";

async function clearData(page: Page) {
  await page.evaluate(async () => {
    try {
      const dbs = await indexedDB.databases();
      for (const db of dbs) {
        const dbName = db.name;
        if (dbName) {
          await new Promise<void>((res) => {
            const req = indexedDB.deleteDatabase(dbName);
            req.onsuccess = () => res();
            req.onerror = () => res();
            req.onblocked = () => res();
          });
        }
      }
    } catch {}
    localStorage.clear();
  });
}

test("المعجم المصوّر: يعرض كلمات بإيموجي ونطق", async ({ page }) => {
  await page.goto("/picture-dictionary");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(2500);

  await expect(page.getByRole("heading", { name: /المعجم المصوّر/ }).first()).toBeVisible({ timeout: 8000 });
  // تظهر كلمات A1 (بأزرار نطق)
  await expect(page.locator("[lang='de']").first()).toBeAttached();
  await expect(page.getByRole("button", { name: /استمع:/ }).first()).toBeAttached();
  // لا فيضان جوال
  await page.setViewportSize({ width: 320, height: 800 });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  expect(overflow, "فيضان أفقي في المعجم المصوّر").toBe(false);
});

test("المحادثة التفاعلية: اختيار الرد ينتج ردّ المحاور", async ({ page }) => {
  await page.goto("/conversations");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(2500);

  await expect(page.getByRole("heading", { name: /محادثة تفاعلية/ }).first()).toBeVisible({ timeout: 8000 });
  // الخيارات ظاهرة (إحدى الجمل الألمانية)
  await expect(page.getByText("اختر ردّك:", { exact: false }).first()).toBeVisible();
  await expect(page.locator("button", { hasText: /Einen Kaffee|Ich möchte ein Konto|Ich habe Kopfschmerzen/ }).first()).toBeVisible();
  // اختر الخيار الأول المتاح (نص ألماني داخل زر خيار)
  const firstOption = page.locator("button", { hasText: /Einen Kaffee|Ich möchte ein Konto|Ich habe Kopfschmerzen/ }).first();
  await firstOption.click();
  await page.waitForTimeout(800);
  // رد المحاور ظهر
  await expect(page.getByText("ردّ المحاور:", { exact: false }).first()).toBeVisible({ timeout: 6000 });
});

test("سوق الجواهر: يعرض الرصيد وأصناف المشتريات", async ({ page }) => {
  await page.goto("/shop");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(2500);

  await expect(page.getByRole("heading", { name: /سوق الجواهر/ }).first()).toBeVisible({ timeout: 8000 });
  await expect(page.getByText("رصيدك:", { exact: false }).first()).toBeVisible();
  // أقسام: الثيمات والشارات والأدوات
  await expect(page.getByText("الثيمات", { exact: false }).first()).toBeAttached();
  await expect(page.getByText("الشارات", { exact: false }).first()).toBeAttached();
  // زر مكافأة اليوم (0 جواهر)
  await expect(page.getByRole("button", { name: /مكافأة اليوم/ }).first()).toBeVisible();
});

test("تحويل الأزمنة: يتحقق من الإجابة الصحيحة", async ({ page }) => {
  await page.goto("/umformung");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(2500);

  await expect(page.getByRole("heading", { name: /تحويل الأزمنة/ }).first()).toBeVisible({ timeout: 8000 });
  const input = page.getByLabel("جملتك المحوّلة");
  await expect(input).toBeAttached({ timeout: 8000 });
  // أكتب إجابة (نكتب أي نص — التصحيح سيرفضه أو يقبله حسب السؤال،
  // الأهم أن الزر يستجيب ولا ينهار)
  await input.fill("Das ist eine Antwort.");
  await page.getByRole("button", { name: /تحقق/ }).click();
  await page.waitForTimeout(500);
  // إما تصحيح (أحسنت/ليست الصيغة) — لم ينهار
  const body = await page.evaluate(() => document.body.innerText);
  expect(body.includes("أحسنت") || body.includes("ليست الصيغة") || body.includes("تلميح")).toBe(true);
});

test("المزامنة: صفحة /sync تشرح الوظيفة بلا أخطاء", async ({ page }) => {
  const errs: string[] = [];
  page.on("pageerror", (e) => errs.push(e.message.slice(0, 120)));
  await page.goto("/sync");
  await page.waitForTimeout(2000);
  await expect(page.getByText("رابط المزامنة", { exact: false }).first()).toBeVisible({ timeout: 6000 });
  expect(errs, `أخطاء: ${errs.join(" | ")}`).toEqual([]);
});
