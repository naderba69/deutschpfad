/**
 * مساعدون مشتركون لاختبارات الدروس:
 * التنقل بين أقسام الدرس دون الاعتماد على عدّ نقرات ثابت
 * (كان «5 نقرات» يصل إلى الاستماع بعد إعادة ترتيب الأقسام فيسقط الاختبار بلا سبب حقيقي).
 */
import {expect, type Page} from "@playwright/test";

/** عناوين أزرار التقدّم في نهاية القسم وفي الشريط السفلي اللاصق */
const NEXT_BUTTONS = [/^التالي: /, /^أتممت هذا القسم/];

/**
 * ينقر زرّ التقدّم الظاهر (أيًّا كان شكله) ويعود نجاح النقر.
 * يستعمل `.last()` لأن أزرار الشريط السفلي هي الأدنى في الشجرة (وقابلة للنقر دائمًا).
 */
export async function advanceLessonStep(page: Page): Promise<boolean> {
  for (const pattern of NEXT_BUTTONS) {
    const btn = page.getByRole("button", {name: pattern}).last();
    if (await btn.isVisible().catch(() => false)) {
      await btn.click().catch(() => {});
      await page.waitForTimeout(500);
      return true;
    }
  }
  return false;
}

/**
 * يتنقّل حتى يصل قسمًا يحمل العنوان المطلوب (مثل «الاستماع» أو «النطق»).
 * يقارن العنوان قبل/بعد كل نقرة حتى لا يتوقف عند نقرة لم تُحدِث تغييرًا.
 */
export async function gotoLessonStep(page: Page, title: string, maxSteps = 16): Promise<void> {
  const heading = () => page.locator("#lesson-step-content h2").first();
  for (let i = 0; i < maxSteps; i++) {
    const current = (await heading().textContent().catch(() => "")) ?? "";
    if (current.includes(title)) return;
    const before = current;
    const advanced = await advanceLessonStep(page);
    if (!advanced) break;
    // انتظر تغيّر العنوان فعلًا (كان النقر يُبتلع تحت الحمل فيتوقف التنقّل)
    await expect
      .poll(async () => (await heading().textContent().catch(() => "")) ?? "", {timeout: 5000})
      .not.toBe(before)
      .catch(() => {});
  }
  await expect(heading()).toContainText(title, {timeout: 8000});
}
