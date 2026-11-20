/**
 * بوابة المراحل الصارمة (وضع الخطوات): لا تُفتح مرحلة قبل إكمال أقسام المرحلة السابقة.
 * في A1-01 تنتهي مرحلة «التمهيد والاسترجاع» بقسم «المراجعة التراكمية» (تمارين):
 * بعد الوصول إليه، الضغط على «التالي» يجب ألا يفتح «الشرح» وأن يوضّح السبب.
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

  // الأهداف (إثبات بالتأكيد) ← التمهيد (إثبات بالتأكيد) ← المراجعة التراكمية (تمارين)
  await advanceLessonStep(page);
  await expect(heading).toContainText("التمهيد", { timeout: 8000 });
  await advanceLessonStep(page);
  await expect(heading).toContainText("مراجعة", { timeout: 8000 });

  // المراجعة لم تُحلّ بعد: الانتقال إلى «الشرح» (مرحلة قواعد) يجب أن يُمنع
  await advanceLessonStep(page);
  await expect(heading).toContainText("مراجعة", { timeout: 4000 });
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
