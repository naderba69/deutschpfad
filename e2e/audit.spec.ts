/**
 * اختبارات E2E: حماية إصلاحات الجرد الشامل (v5.7)
 *
 * 1) /review/monthly لا ينهار (كان يرمي TypeError من بنية summary الخاطئة)
 * 2) /dashboard/five-minutes و /dashboard/review بلا أخطاء hydration
 * 3) الهيدر بلا أخطاء hydration (…→0%) على كل الصفحات
 */
import { test, expect, type Page } from "@playwright/test";

async function collectErrors(page: Page): Promise<string[]> {
  const errs: string[] = [];
  page.on("pageerror", (e) => errs.push(e.message.slice(0, 150)));
  page.on("console", (m) => {
    if (m.type() === "error") errs.push(m.text().slice(0, 150));
  });
  return errs;
}

test("/review/monthly يعمل بلا انهيار", async ({ page }) => {
  const errs = await collectErrors(page);
  await page.goto("/review/monthly", { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(2500);

  // لا شاشة «حدث خطأ غير متوقع»
  const hasErrorBoundary = await page.evaluate(() => document.body.innerText.includes("حدث خطأ غير متوقع"));
  expect(hasErrorBoundary, "صفحة /review/monthly انهارت").toBe(false);

  // لا أخطاء JS حقيقية
  const real = errs.filter(
    (e) => !e.includes("favicon") && !e.includes("Failed to load resource") && !e.includes("sourcemap") && !e.includes("404"),
  );
  expect(real, `أخطاء: ${real.join(" | ")}`).toEqual([]);
});

test("/dashboard/five-minutes بلا أخطاء hydration", async ({ page }) => {
  const errs = await collectErrors(page);
  await page.goto("/dashboard/five-minutes", { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(2000);

  const real = errs.filter(
    (e) => !e.includes("favicon") && !e.includes("Failed to load resource") && !e.includes("sourcemap") && !e.includes("404"),
  );
  // لا #418/#422 (hydration) ولا أخطاء أخرى
  expect(real, `أخطاء: ${real.join(" | ")}`).toEqual([]);
});

test("/dashboard/review بلا أخطاء hydration", async ({ page }) => {
  const errs = await collectErrors(page);
  await page.goto("/dashboard/review", { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(2000);

  const real = errs.filter(
    (e) => !e.includes("favicon") && !e.includes("Failed to load resource") && !e.includes("sourcemap") && !e.includes("404"),
  );
  expect(real, `أخطاء: ${real.join(" | ")}`).toEqual([]);
});

test("صفحة الدرس: «التالي» ينقل للقسم التالي (حماية من خادم/بناء قديم)", async ({ page }) => {
  await page.goto("/lesson/a1-01");
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
  await page.reload();
  await page.waitForTimeout(1800);

  await expect(page.locator("#lesson-step-content h2").first()).toContainText("الأهداف", { timeout: 8000 });
  await page.getByRole("button", { name: /أتممت هذا القسم/ }).first().click();
  await page.waitForTimeout(1000);
  // يجب أن ينتقل للقسم الثاني — لو بقي على نفسه فالـ chunks قديمة/خادم قديم
  await expect(page.locator("#lesson-step-content h2").first()).toContainText("التمهيد", { timeout: 8000 });
});
