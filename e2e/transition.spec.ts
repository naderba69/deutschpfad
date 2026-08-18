/**
 * اختبارات E2E للانتقال التسلسلي — الإصلاح الجوهري:
 * 1) «إنهاء الدرس» ينقل تلقائياً للدرس التالي
 * 2) وضع الخطوات: لا يمكن القفز لقسم لم يُفتح بعد (تسلسل صارم)
 */
import { test, expect } from "@playwright/test";

test("«إنهاء الدرس» ينقل تلقائياً إلى الدرس التالي", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  // بيانات نظيفة
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

  // المرور عبر مراحل التدفق حتى الوصول لزر «إنهاء الدرس»
  let reachedFinish = false;
  for (let i = 0; i < 20; i++) {
    if (await page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first().isVisible().catch(() => false)) {
      reachedFinish = true;
      break;
    }
    const nextBtn = page.getByRole("button", { name: /^التالي:/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(350);
    } else {
      const alt = page.getByRole("button", { name: /تابع|الرد التالي/ }).first();
      if (await alt.isVisible().catch(() => false)) { await alt.click().catch(() => {}); await page.waitForTimeout(350); }
      else break;
    }
  }
  expect(reachedFinish, "يجب الوصول لزر «إنهاء الدرس»").toBe(true);

  // الضغط — يجب ظهور شريط الانتقال ثم الانتقال للدرس التالي
  await page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first().click();

  // شريط الانتقال يظهر
  await expect(page.getByText("أُنجز الدرس بنجاح!").first()).toBeVisible({ timeout: 5000 });

  // خلال ~3 ثوانٍ ينتقل لصفحة الدرس التالي (a1-02)
  await page.waitForURL(/\/lesson\/a1-02/, { timeout: 8000 });
});

test("وضع الخطوات: تسلسل صارم — يبدأ من الخطوة 1 ولا يظهر «إنهاء الدرس» مبكراً", async ({ page }) => {
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

  // نبدأ من الخطوة 1: الأهداف ظاهرة، والزر السفلي «التالي:» وليس «إنهاء الدرس»
  await expect(page.getByText("الأهداف التعليمية", { exact: false }).first()).toBeVisible({ timeout: 8000 });
  await expect(page.getByRole("button", { name: /^التالي:/ }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first()).not.toBeVisible();
});
