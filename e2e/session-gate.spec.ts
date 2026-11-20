/**
 * بوابة المراحل الصارمة (وضع الخطوات): لا تُفتح مرحلة قبل إكمال أقسام المرحلة السابقة.
 * في A1-01 تبدأ مرحلة «التمهيد والاسترجاع» بقسم «المراجعة التراكمية» (تمارين)، ثم «التمهيد»
 * (إثبات بالتأكيد)، وتُغلق قبل «المفردات». بعد «التمهيد» يجب أن يمنع «التالي» دخول «المفردات»
 * ويوضّح السبب ما دامت المراجعة غير محلولة.
 */
import { expect, test } from "@playwright/test";

import { advanceLessonStep } from "./helpers/lesson-steps";

test("البوابة: تمنع دخول المرحلة التالية قبل إكمال تمارين المرحلة الحالية", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await page.evaluate(async () => {
    try {
      const dbs = await indexedDB.databases();
      for (const db of dbs) {
        if (db.name) {
          await new Promise<void>((res) => {
            const req = indexedDB.deleteDatabase(db.name as string);
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

  const heading = page.locator("#lesson-step-content h2").first();
  await expect(heading).toContainText("الأهداف", { timeout: 8000 });

  // الترتيب وفق المراحل: الأهداف ← المراجعة (تمارين) ← التمهيد (إثبات بالتأكيد) ← [حدّ المرحلة] المفردات
  await advanceLessonStep(page);
  await expect(page.getByText("مراجعة تراكمية من", { exact: false }).first()).toBeVisible({ timeout: 8000 });
  // داخل المرحلة نفسها الحركة حرة: من المراجعة إلى التمهيد مسموح
  await advanceLessonStep(page);
  const nextLabel = page.getByRole("button", { name: /^التالي: المفردات/ }).last();
  await expect(nextLabel).toBeVisible({ timeout: 8000 });

  // المراجعة لم تُحلّ بعد: الانتقال من «التمهيد» إلى «المفردات» (مرحلة تالية) يجب أن يُمنع
  await advanceLessonStep(page);
  await expect(nextLabel).toBeVisible();
  await expect(page.getByText("أكمل أقسام «التمهيد والاسترجاع» أولاً", { exact: false }).first()).toBeVisible({
    timeout: 4000,
  });
});

test("عرض الكل: لا يكشف أقسام المرحلة المقفلة", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "عرض الكل" }).click();
  // الأهداف مفتوحة، والشرح (مرحلة قواعد) مقفول قبل إكمال «أهداف الحصة»
  await expect(page.locator("#lesson-section-lernziele")).toHaveCount(1, { timeout: 8000 });
  await expect(page.locator("#lesson-section-theorie")).toHaveCount(0);
  await expect(page.getByText("أكمل أقسام «أهداف الحصة» أولاً", { exact: false }).first()).toBeVisible({
    timeout: 4000,
  });
});

test("رابط مباشر لقسم مقفول: يعود المتعلم لآخر قسم مفتوح", async ({ page }) => {
  await page.goto("/lesson/a1-01?section=theorie");
  const heading = page.locator("#lesson-step-content h2").first();
  await expect(heading).toContainText("الأهداف", { timeout: 8000 });
  await expect(heading).not.toContainText("الشرح");
});
