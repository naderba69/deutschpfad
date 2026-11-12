import { expect, test } from "@playwright/test";

// ملاحظة: الصفحة /tests/b2-simulation تعيد التوجيه إلى /tests/b2 (GoetheB2Exam).
// هذا الاختبار يتحقق من تدفق الامتحان الكامل مع المكوّن الحالي.

test("المحاكاة الكاملة: مراجعة الأدلة في النتيجة (جوابك · الصحيح · الشاهد)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/b2-simulation", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  // زر البدء في GoetheB2Exam
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();

  // أجب عن سؤال القراءة الأول (الخيار الأول — الخلط لكل جلسة) وتذكّر نصه
  // Teil 1 قد يكون Zuordnung (أزرار بلا font-de) أو MCQ — نستخدم محدداً عاماً
  const firstOption = page.locator("div.rounded-xl.border.bg-card.p-4 button, div.rounded-xl.border.bg-card.p-3 button").first();
  const chosenText = (await firstOption.innerText()).trim();
  await firstOption.click();

  // القراءة (5 نصوص) ← الاستماع (4 نصوص) ← الكتابة ← التحدث
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: /^التالي/ }).click();
  }
  await page.getByRole("button", { name: /إنهاء القراءة/ }).click();
  for (let i = 0; i < 3; i++) {
    await page.getByRole("button", { name: /^التالي/ }).click();
  }
  await page.getByRole("button", { name: /إنهاء الاستماع/ }).click();
  await page.getByRole("button", { name: /إنهاء الكتابة/ }).click();
  // التحدث: زر «إنهاء التحدث ← عرض النتيجة»
  await page.getByRole("button", { name: /إنهاء التحدث/ }).click();

  // شاشة النتيجة تحمل مراجعة الأدلة الكاملة
  const review = page.getByTestId("exam-review");
  await expect(review).toBeVisible();
  await expect(review).toContainText("مراجعة الأدلة");
  // عناصر المراجعة (ExamReviewList)
  expect(await page.getByTestId("exam-review-item").count(), "عناصر مراجعة").toBeGreaterThan(0);
  expect(await page.getByTestId("exam-review-evidence").count(), "شواهد ظاهرة").toBeGreaterThan(0);
  await expect(page.getByTestId("exam-review-evidence").first()).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);
  // جواب المتعلّم يظهر حرفياً كما ضُغط
  await expect(review).toContainText(chosenText);

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("المحاكاة: مشغّل تسجيلات الاستماع يعمل (TTS مُولَّد بتصريح صادق)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/b2-simulation", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();

  // اجتياز القراءة (5 نصوص) إلى مرحلة الاستماع
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: /^التالي/ }).click();
  }
  await page.getByRole("button", { name: /إنهاء القراءة/ }).click();

  // المشغّل ظاهر بعدّاد التشغيل (مرتان كامتحان Goethe-B2)
  const play = page.getByTestId("exam-audio-play");
  await expect(play).toBeVisible();
  await expect(page.getByTestId("exam-audio-left")).toContainText("المتبقي من التشغيل: 2");

  // تشغيل واحد يُستهلك فتنخفض الحصة إلى 1
  await play.click();
  await expect(page.getByTestId("exam-audio-left")).toContainText("المتبقي من التشغيل: 1");

  // التصريح الصادق بأن التسجيلات مُولَّدة (TTS) وليست امتحاناً رسمياً
  await expect(page.getByText(/التسجيلات مُولَّدة/)).toBeVisible();

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});
