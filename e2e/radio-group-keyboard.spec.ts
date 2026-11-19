import {expect, test} from "@playwright/test";

/**
 * مجموعات الاختيار الواحد (radiogroup) — تنقّل لوحة المفاتيح.
 *
 * الأدوار وحدها لا تكفي: في الجولة السابعة وُجدت 16 مجموعة `role="radiogroup"`
 * بلا أي تنقّل بالأسهم (WCAG 2.1.1 / 4.1.2) وواحدة (تقييم Sprechen) أزرارها
 * بلا `role="radio"` و`aria-checked` أصلاً. هذه الاختبارات تضغط مفاتيح حقيقية
 * (لا أحداث اصطناعية) وتتحقّق من: انتقال التركيز، الاختيار التابع للتركيز
 * (Selection follows focus)، الدوران، وHome/End.
 */
test.describe("radiogroup: الأسهم والاختيار", () => {
  test("/flashcards — مستوى البطاقة: ArrowLeft يتقدّم ويختار (RTL)", async ({page}) => {
    await page.goto("/flashcards");
    const group = page.getByRole("radiogroup", {name: "مستوى البطاقة"});
    await expect(group).toBeVisible();

    const radios = group.getByRole("radio");
    await expect(radios).toHaveCount(4);

    await radios.first().focus();
    await expect(radios.first()).toBeFocused();

    // الصفحة RTL ⇒ «التالي» هو السهم الأيسر
    await page.keyboard.press("ArrowLeft");
    await expect(radios.nth(1)).toBeFocused();
    await expect(radios.nth(1)).toHaveAttribute("aria-checked", "true");

    // الرجوع بالسهم الأيمن
    await page.keyboard.press("ArrowRight");
    await expect(radios.first()).toBeFocused();
    await expect(radios.first()).toHaveAttribute("aria-checked", "true");
  });

  test("/flashcards — Home/End والالتفاف عند الطرفين", async ({page}) => {
    await page.goto("/flashcards");
    const group = page.getByRole("radiogroup", {name: "مستوى البطاقة"});
    const radios = group.getByRole("radio");

    await radios.first().focus();
    await page.keyboard.press("End");
    await expect(radios.last()).toBeFocused();
    await expect(radios.last()).toHaveAttribute("aria-checked", "true");

    // من الأخير إلى الأول بالتفاف
    await page.keyboard.press("ArrowLeft");
    await expect(radios.first()).toBeFocused();

    await page.keyboard.press("End");
    await page.keyboard.press("Home");
    await expect(radios.first()).toBeFocused();
  });

  test("/tests/sprechen — صيغة الامتحان مجموعة صالحة تعمل بالأسهم", async ({page}) => {
    await page.goto("/tests/sprechen");
    const group = page.getByRole("radiogroup", {name: "صيغة الامتحان"});
    await expect(group).toBeVisible();

    const radios = group.getByRole("radio");
    await expect(radios).toHaveCount(2);

    // كل خيار يجب أن يُعلن حالته
    const checked = group.locator('[role="radio"][aria-checked="true"]');
    await expect(checked).toHaveCount(1);

    await radios.first().focus();
    await page.keyboard.press("ArrowLeft");
    await expect(radios.nth(1)).toBeFocused();
    await expect(radios.nth(1)).toHaveAttribute("aria-checked", "true");
    await expect(group.locator('[role="radio"][aria-checked="true"]')).toHaveCount(1);
  });
});
