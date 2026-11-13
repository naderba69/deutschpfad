import { expect, test } from "@playwright/test";

test("تحديد المستوى السريع: مراجعة الشروح في النتيجة (تكيفي)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/placement?mode=quick", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // اختبار تكيفي: أجب حتى تظهر النتيجة (5 أو 10 أو 15 سؤالاً حسب الأداء)
  for (let i = 0; i < 20; i++) {
    const review = page.getByTestId("exam-review");
    if (await review.isVisible().catch(() => false)) break;
    const radio = page.getByRole("radio").first();
    if (await radio.isVisible().catch(() => false)) {
      await radio.click();
      await page.waitForTimeout(900);
    } else {
      break;
    }
  }

  // النتيجة تحمل المراجعة كاملة
  const review = page.getByTestId("exam-review");
  await expect(review).toBeVisible({ timeout: 10000 });
  await expect(review).toContainText("مراجعة الأدلة");
  const itemCount = await page.getByTestId("exam-review-item").count();
  expect(itemCount, "عدد عناصر المراجعة يطابق الأسئلة المُجابة").toBeGreaterThanOrEqual(5);
  expect(itemCount, "عدد عناصر المراجعة لا يتجاوز 15").toBeLessThanOrEqual(15);
  expect(await page.getByTestId("exam-review-evidence").count(), "شاهد لكل سؤال").toBe(itemCount);
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
