import { expect, test } from "@playwright/test";

test("المحاكاة الكاملة: مراجعة الأدلة في النتيجة (جوابك · الصحيح · الشاهد)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/b2-simulation", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /ابدأ الامتحان التجريبي/ }).click();

  // أجب عن سؤال القراءة الأول (الخيار الأول — الخلط لكل جلسة) وتذكّر نصه
  const firstOption = page.locator("button:has(> span.font-de)").first();
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
  await page.getByRole("button", { name: /عرض النتيجة/ }).click();

  // شاشة النتيجة تحمل مراجعة الأدلة الكاملة — 18 عنصراً بشواهدها (الدفعة 119)
  const review = page.getByTestId("exam-review");
  await expect(review).toBeVisible();
  await expect(review).toContainText("مراجعة الأدلة");
  await expect(page.getByTestId("exam-review-lesen")).toBeVisible();
  await expect(page.getByTestId("exam-review-hoeren")).toBeVisible();
  expect(await page.getByTestId("exam-review-item").count(), "18 عنصر مراجعة").toBe(18);
  expect(await page.getByTestId("exam-review-evidence").count(), "18 شاهداً ظاهراً").toBe(18);
  await expect(page.getByTestId("exam-review-evidence").first()).toContainText(/[A-Za-zÄÖÜäöüß]{3,}/);
  // جواب المتعلّم يظهر حرفياً كما ضُغط
  await expect(page.getByTestId("exam-review-lesen")).toContainText(chosenText);

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("المحاكاة: مشغّل تسجيلات الاستماع يعمل (TTS مُولَّد بتصريح صادق)", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await page.goto("/tests/b2-simulation", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.getByRole("button", { name: /ابدأ الامتحان التجريبي/ }).click();

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
