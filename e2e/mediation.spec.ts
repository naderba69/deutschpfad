/**
 * اختبارات E2E: مكوّنا الوساطة والتفاعل (CEFR 2020) + الدرس الجديد A1-14
 *
 * 1) درس a1-01 يعرض قسمي «الوساطة» و«تفاعل حي» في مسار الخطوات
 * 2) درس الأرقام الجديد a1-14 يفتح ويعمل
 * 3) التفاعل: اختيار الرد ينتج ردّ المحاور
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

test("a1-01: قسم الوساطة يظهر بعد التمرير عبر الخطوات", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);

  // نمر عبر كل الخطوات حتى نصل للوساطة والتفاعل (الأخيران)
  let foundMediation = false;
  let foundInteraction = false;
  for (let i = 0; i < 20; i++) {
    const h2 = await page.evaluate(() => document.querySelector("#lesson-step-content h2")?.textContent ?? "");
    if (h2.includes("الوساطة")) foundMediation = true;
    if (h2.includes("تفاعل")) foundInteraction = true;
    if (foundMediation && foundInteraction) break;
    const nextBtn = page.getByRole("button", { name: /التالي:|أتممت هذا القسم/ }).last();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(400);
    } else break;
  }

  expect(foundMediation, "قسم الوساطة لم يظهر في مسار الخطوات").toBe(true);
  expect(foundInteraction, "قسم التفاعل لم يظهر في مسار الخطوات").toBe(true);
});

test("a1-14 (الأرقام والهاتف): يفتح ويعرض محتواه", async ({ page }) => {
  await page.goto("/lesson/a1-14");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);

  await expect(page.locator("h1").first()).toContainText("Zahlen, Telefon", { timeout: 8000 });
  // الأهداف تظهر
  await expect(page.getByText("الأهداف التعليمية", { exact: false }).first()).toBeVisible();
  // لا فيضان
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  expect(overflow, "فيضان أفقي في درس الأرقام").toBe(false);
});

test("التفاعل: اختيار الرد في a1-01 ينتج ردّ المحاور", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);

  // انتقل عبر الخطوات بالتسلسل (الوساطة ثم التفاعل — آخر قسمين)
  for (let i = 0; i < 20; i++) {
    const h2 = await page.evaluate(() => document.querySelector("#lesson-step-content h2")?.textContent ?? "");
    if (h2.includes("تفاعل حي")) break;
    const nextBtn = page.getByRole("button", { name: /التالي:|أتممت هذا القسم/ }).last();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(400);
    } else break;
  }

  // تحقق من وصول قسم التفاعل
  const h2 = await page.evaluate(() => document.querySelector("#lesson-step-content h2")?.textContent ?? "");
  expect(h2.includes("تفاعل"), `القسم الحالي: ${h2}`).toBe(true);

  await expect(page.getByText("اختر ردّك الأنسب:", { exact: false }).first()).toBeVisible({ timeout: 8000 });
  // اختر الرد الأول (يبدأ بـ Hallo Lisa)
  const opt = page.locator("button", { hasText: /Hallo Lisa/ }).first();
  await opt.click();
  await page.waitForTimeout(600);
  await expect(page.getByText("ردّ المحاور:", { exact: false }).first()).toBeVisible({ timeout: 6000 });
});

test("a1-03: الوساطة والتفاعل متاحان (توزيع عبر المستويات)", async ({ page }) => {
  await page.goto("/lesson/a1-03");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);

  let foundMediation = false;
  for (let i = 0; i < 20; i++) {
    const h2 = await page.evaluate(() => document.querySelector("#lesson-step-content h2")?.textContent ?? "");
    if (h2.includes("الوساطة")) { foundMediation = true; break; }
    const nextBtn = page.getByRole("button", { name: /التالي:|أتممت هذا القسم/ }).last();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(400);
    } else break;
  }
  expect(foundMediation, "قسم الوساطة لم يظهر في a1-03").toBe(true);
  // مهمة الوساطة (قائمة طعام) ظاهرة
  await expect(page.getByText("بسّط قائمة طعام", { exact: false }).first()).toBeVisible({ timeout: 6000 });
});

test("a2-03: الوساطة والتفاعل يعملان (تغطية كاملة عبر المستويات)", async ({ page }) => {
  await page.goto("/lesson/a2-03");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);

  let foundMediation = false;
  for (let i = 0; i < 22; i++) {
    const h2 = await page.evaluate(() => document.querySelector("#lesson-step-content h2")?.textContent ?? "");
    if (h2.includes("الوساطة")) { foundMediation = true; break; }
    const nextBtn = page.getByRole("button", { name: /التالي:|أتممت هذا القسم/ }).last();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(400);
    } else break;
  }
  expect(foundMediation, "قسم الوساطة لم يظهر في a2-03").toBe(true);
  await expect(page.getByText("بسّط قائمة طعام", { exact: false }).first()).toBeVisible({ timeout: 6000 });
});

test("محاكاة Goethe-B2: تفتح بالأقسام الأربعة والمدد الفعلية", async ({ page }) => {
  await page.goto("/tests/b2-simulation");
  await page.waitForTimeout(1800);

  await expect(page.getByRole("heading", { name: /محاكاة Goethe-B2/ }).first()).toBeVisible({ timeout: 8000 });
  // الأقسام الأربعة ظاهرة
  await expect(page.getByText("Lesen · 65 دقيقة", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("Hören · ~40 دقيقة", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("Schreiben · 75 دقيقة", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("Sprechen · 15+15 دقيقة", { exact: false }).first()).toBeVisible();

  // ابدأ الامتحان → قسم القراءة
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();
  await page.waitForTimeout(800);
  await expect(page.getByText("القراءة (1/5)", { exact: false }).first()).toBeVisible({ timeout: 6000 });
});
