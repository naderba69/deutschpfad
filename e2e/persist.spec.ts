/**
 * اختبار E2E حرج: الاسم لا يُطلب مجدداً بعد الريفريش (مرآة LocalStorage)
 */
import { test, expect, type Page } from "@playwright/test";

test("بعد إدخال الاسم، الريفريش لا يطلب الاسم مجدداً", async ({ page }) => {
  await page.goto("/");
  // تنظيف
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
  await page.waitForTimeout(1200);

  // نموذج الاسم يظهر (زائر جديد)
  const nameInput = page.getByLabel("اسمك الأول");
  await expect(nameInput).toBeVisible({ timeout: 6000 });
  await nameInput.fill("نادر");
  await page.getByRole("button", { name: "ابدأ رحلتك" }).click();
  await page.waitForTimeout(1200);

  // الآن الريفريش — يجب ألا يظهر نموذج الاسم
  await page.reload();
  await page.waitForTimeout(1500);
  await expect(page.getByLabel("اسمك الأول")).not.toBeVisible({ timeout: 4000 });
  // ويظهر اسم المستخدم
  await expect(page.getByText("نادر", { exact: false }).first()).toBeAttached({ timeout: 6000 });
});

test("مرآة LocalStorage تُكتب عند الحفظ", async ({ page }) => {
  await page.goto("/");
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
  await page.waitForTimeout(1200);
  await page.getByLabel("اسمك الأول").fill("سلمى");
  await page.getByRole("button", { name: "ابدأ رحلتك" }).click();
  await page.waitForTimeout(800);
  // المرآة موجودة في localStorage
  const mirror = await page.evaluate(() => localStorage.getItem("dp:learner-profile"));
  expect(mirror).toBeTruthy();
  expect(mirror).toContain("سلمى");
});
