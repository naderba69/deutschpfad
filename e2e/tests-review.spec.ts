import { expect, test } from "@playwright/test";

test("تحديد المستوى السريع: مراجعة الشروح في النتيجة (15 سؤالاً)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/placement?mode=quick", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // 15 سؤالاً — كل اختيار يقدّم تلقائياً بعد 800ms
  for (let i = 0; i < 15; i++) {
    await page.getByRole("radio").first().click();
    await page.waitForTimeout(900);
  }

  // النتيجة تحمل المراجعة كاملة: 15 عنصراً بشاهده (الدفعة 122)
  const review = page.getByTestId("exam-review");
  await expect(review).toBeVisible({ timeout: 10000 });
  await expect(review).toContainText("مراجعة الأدلة");
  expect(await page.getByTestId("exam-review-item").count(), "15 عنصر مراجعة").toBe(15);
  expect(await page.getByTestId("exam-review-evidence").count(), "15 شاهداً").toBe(15);
  await expect(page.getByTestId("exam-review-evidence").first()).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);
  await expect(review).toContainText("جوابك:");

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("الاختبار الأسبوعي: مراجعة الأدلة في لوحة النتائج (شروح البنك تظهر)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/weekly", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // تدفق TestRunner: لكل شاشة إمّا خيارات (radio لكل مجموعة) أو كتابة (textarea)
  for (let guard = 0; guard < 60; guard++) {
    const ta = page.locator("textarea");
    if (await ta.isVisible().catch(() => false)) {
      await ta.fill("Ich wohne in Tunis und ich lerne jeden Tag Deutsch.");
    } else {
      const groups = page.getByRole("radiogroup");
      const n = await groups.count();
      for (let g = 0; g < n; g++) {
        await groups.nth(g).getByRole("radio").first().click();
      }
    }
    const next = page.getByRole("button", { name: /التالي|تسليم/ }).last();
    if (!(await next.isVisible().catch(() => false))) break;
    await next.click();
    await page.waitForTimeout(200);
  }

  // لوحة النتائج تحمل مراجعة الأدلة — العناصر ≥ 14 (القراءة تُفكَّك إلى أسئلة فرعية)
  const review = page.getByTestId("exam-review");
  await expect(review).toBeVisible({ timeout: 15000 });
  await expect(review).toContainText("مراجعة الأدلة");
  const items = await page.getByTestId("exam-review-item").count();
  expect(items, "عناصر المراجعة ≥ 14").toBeGreaterThanOrEqual(14);
  await expect(page.getByTestId("exam-review-evidence").first()).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);
  await expect(review).toContainText("جوابك:");

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});
