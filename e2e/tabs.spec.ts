/**
 * اختبار E2E: نظام التبويبات التفصيلية في الشرح (طريقة عرض احترافية)
 */
import { test, expect } from "@playwright/test";

test("الشرح يعرض التبويبات التفصيلية (لا سكرول طويل)", async ({ page }) => {
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
  await page.waitForTimeout(1500);

  // نمر إلى قسم الشرح (الخطوة 3 — بعد 3 نقرات)
  for (let i = 0; i < 3; i++) {
    const nextBtn = page.getByRole("button", { name: /^التالي:/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(300);
    } else break;
  }

  // التبويبات التفصيلية تظهر
  await expect(page.getByRole("tab", { name: "الشرح" }).first()).toBeVisible({ timeout: 8000 });
  await expect(page.getByRole("tab", { name: /الأمثلة/ }).first()).toBeVisible();
  await expect(page.getByRole("tab", { name: /تريك الحفظ/ }).first()).toBeVisible();

  // التنقل بين التبويبات يعمل
  await page.getByRole("tab", { name: /تريك الحفظ/ }).first().click();
  await page.waitForTimeout(300);
  await expect(page.getByText("تريك حفظ (Eselsbrücke):", { exact: false }).first()).toBeVisible({ timeout: 4000 });
});
