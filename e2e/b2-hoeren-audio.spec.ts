/**
 * ═══════════════════════════════════════════════════════════
 *  مشغّل صوت الاستماع في امتحان B2 — تغطية سلوكية في المتصفح
 *   · لكل جزء مشغّل مستقل يعلن وضعه: مقاطع بشرية أو نطق آلي (TTS)
 *   · الحصة الرسمية للتشغيل (بيانات الامتحان: مرة واحدة لكل جزء) تُعرض وتُستهلك
 *   · لا يتسرّب العدّاد ولا الصوت من جزء إلى آخر
 *  يعمل الاختبار في الحالتين: قبل تسجيل المقاطع البشرية وبعدها.
 * ═══════════════════════════════════════════════════════════
 */
import { expect, test } from "@playwright/test";

/** الوصول لمرحلة الاستماع (بعد تهيئة الامتحان وإنهاء القراءة) */
async function reachHoeren(page: import("@playwright/test").Page) {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();
  const firstItemCard = page.locator("div.rounded-xl.border.bg-card.p-3").first();
  await firstItemCard.locator("button").first().click();
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: /التالي: الجزء/ }).click();
  }
  await page.getByRole("button", { name: /إنهاء القراءة/ }).click();
  await expect(page.getByText(/Hören — 1\/4/)).toBeVisible();
}

test("B2 استماع: حالة الصوت تُحسم بالمحاولة — مقاطع بشرية تُشغَّل، أو نطق آلي معلن عنه", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await reachHoeren(page);

  const player = page.locator("[data-audio-mode]");
  await expect(player).toBeVisible();
  // الحصة الرسمية تظهر قبل أي تشغيل (بيانات B2: مرة واحدة لكل جزء)
  await expect(page.getByTestId("exam-audio-left")).toContainText("المتبقي من التشغيل: 1 من 1");
  // قبل المحاولة: لا ادّعاء على المتعلم — زر «بطيء» مساعد الغياب غير ظاهر
  await expect(page.getByTestId("exam-audio-slow")).toHaveCount(0);

  await page.getByTestId("exam-audio-play").click();
  // المحاولة تحسم الوضع: إمّا ملفات بشرية تُشغَّل، وإمّا انتقال معلن للنطق الآلي
  await expect.poll(async () => page.getByTestId("exam-audio-play").isDisabled()).toBe(true);
  const mode = await player.getAttribute("data-audio-mode");
  expect(["files", "tts"]).toContain(mode);
  if (mode === "tts") {
    await expect(player).toContainText(/لم تُسجَّل بصوت بشري بعد/);
    await expect(page.getByTestId("exam-audio-slow")).toBeVisible();
  }

  expect(errors, `أخطاء صفحة غير متوقعة: ${errors.join(" | ")}`).toEqual([]);
});

test("B2 استماع: التشغيل يُستهلك ويتعطّل الزر، ثم يستعيد الجزء التالي حصته", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await reachHoeren(page);

  const player = page.locator("[data-audio-mode]");

  const left = page.getByTestId("exam-audio-left");
  await expect(left).toContainText("المتبقي من التشغيل: 1 من 1");

  await page.getByTestId("exam-audio-play").click();
  await expect.poll(async () => player.getAttribute("data-audio-mode")).not.toBe(null);
  const mode = await player.getAttribute("data-audio-mode");

  if (mode === "tts") {
    // إمّا أن يبدأ النطق الآلي (تُستهلك الحصة) أو أن المتصفح لا يدعمه فنُظهر تنبيهاً واضحاً
    await expect
      .poll(async () => {
        const text = (await left.textContent()) ?? "";
        const noVoice = await page.getByText(/لا يدعم النطق الآلي/).count();
        return text.includes("0 من 1") || noVoice > 0;
      })
      .toBe(true);
  } else {
    await expect(left).toContainText("المتبقي من التشغيل: 0 من 1");
  }

  // الانتقال للجزء 2: مشغّل جديد بحصة كاملة (لا يتسرّب العدّاد)
  await page.getByRole("button", { name: /التالي: الجزء 2/ }).click();
  await expect(page.getByText(/Hören — 2\/4/)).toBeVisible();
  await expect(page.getByTestId("exam-audio-left")).toContainText("المتبقي من التشغيل: 1 من 1");

  expect(errors, `أخطاء صفحة غير متوقعة: ${errors.join(" | ")}`).toEqual([]);
});
