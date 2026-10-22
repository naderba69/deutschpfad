import { expect, test } from "@playwright/test";

test("فخاخ الامتحان: الاسم الألماني ظاهر ومراجعة الفخاخ في النتيجة (12 فخّاً)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/fallstricke", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // شارة المصيدة تحمل الاسم الألماني trapNameDe منذ الدفعة 121
  const badge = page.locator("span").filter({ hasText: "⚠️" }).first();
  await expect(badge).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);

  // أجب عن الفخاخ الاثني عشر (الخيار الأول في كل فخ)
  for (let i = 0; i < 12; i++) {
    await page.locator('button:has(span[dir="ltr"])').first().click();
    if (i < 11) {
      await page.getByRole("button", { name: "الفخ التالي" }).click();
    } else {
      await page.getByRole("button", { name: "عرض النتيجة" }).click();
    }
  }

  // شاشة النتيجة تحمل مراجعة الفخاخ كاملة: 12 عنصراً × (لماذا يخدع + لماذا الصحيح)
  const review = page.getByTestId("exam-review");
  await expect(review).toBeVisible();
  await expect(review).toContainText("مراجعة الفخاخ");
  expect(await page.getByTestId("exam-review-item").count(), "12 عنصر مراجعة").toBe(12);
  expect(await page.getByTestId("exam-review-evidence").count(), "24 شاهداً (whyTrap + whyCorrect)").toBe(24);
  await expect(page.getByTestId("exam-review-evidence").first()).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);
  await expect(review).toContainText("Wortgleichheit");
  await expect(review).toContainText("جوابك:");

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("قواعد B2: مراجعة الأدلة في النتيجة (60 سؤالاً بشاهدها)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/b2-grammatik", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // أجب عن الستين (الخيار الأول لكل سؤال: تحقق ← التالي/إنهاء)
  for (let i = 0; i < 60; i++) {
    await page.locator('button:has(span[dir="ltr"])').first().click();
    await page.getByRole("button", { name: "تحقق" }).click();
    if (i < 59) {
      await page.getByRole("button", { name: "التالي" }).click();
    } else {
      await page.getByRole("button", { name: "إنهاء التدريب" }).click();
    }
  }

  // شاشة النتيجة تحمل مراجعة الأدلة كاملة (الدفعة 121)
  const review = page.getByTestId("exam-review");
  await expect(review).toBeVisible();
  await expect(review).toContainText("مراجعة الأدلة");
  expect(await page.getByTestId("exam-review-item").count(), "60 عنصر مراجعة").toBe(60);
  expect(await page.getByTestId("exam-review-evidence").count(), "60 شاهداً").toBe(60);
  await expect(page.getByTestId("exam-review-evidence").first()).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);
  await expect(review).toContainText("جوابك:");

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});
