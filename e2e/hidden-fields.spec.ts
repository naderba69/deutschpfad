import { expect, test } from "@playwright/test";

import { advanceLessonStep } from "./helpers/lesson-steps";

test("الدرس يعرض مصطلحات keyWords (بيانات مخفية أصبحت ظاهرة)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/lesson/a1-01", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  const keywords = page.getByTestId("lesson-keywords");
  await expect(keywords).toBeVisible();
  await expect(keywords).toContainText("der Name");
  await expect(keywords).toContainText("heißen");

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("التمرين يعرض التعليم الألماني instructionDe بجانب العربي", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/lesson/a1-01", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // امسح أقسام الدرس كلها حتى يظهر أي تمرين يحمل تعليماً ألمانياً
  // (التدريبات تُعرض بشريحة متنامية — فالهدف أي تمرين ظاهر لا تمرين معيّن)
  const deLines = page.getByTestId("exercise-instruction-de");
  for (let i = 0; i < 14; i++) {
    if ((await deLines.count().catch(() => 0)) > 0) break;
    const moved = await advanceLessonStep(page);
    if (!moved) break;
  }
  await expect(deLines.first()).toBeVisible();
  await expect(deLines.first()).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("أوقات التحدث تُقرأ من البيانات (teil1Minutes/teil2Minutes)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();

  // المسار إلى مرحلة التحدث (كما في اختبار الدفعة 118)
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: /^التالي/ }).click();
  }
  await page.getByRole("button", { name: /إنهاء القراءة/ }).click();
  for (let i = 0; i < 3; i++) {
    await page.getByRole("button", { name: /^التالي/ }).click();
  }
  await page.getByRole("button", { name: /إنهاء الاستماع/ }).click();
  await page.getByRole("button", { name: /إنهاء الكتابة/ }).click();

  // الأوقات الظاهرة (4 و5) تُقرأ من بيانات ExamSprechen لا من نص مصلّب
  await expect(page.getByText(/Teil 1 — Vortrag \(~/)).toContainText("دقائق");
  await expect(page.getByText("~4 دقائق")).toBeVisible();
  await expect(page.getByText("~5 دقائق")).toBeVisible();

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});
