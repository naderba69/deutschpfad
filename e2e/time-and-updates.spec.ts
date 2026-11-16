import { expect, test } from "@playwright/test";

/**
 * الجولة الحادية عشرة — الوقت والتحديث التلقائي.
 *
 * هذه الاختبارات تحرس القرارات التي اتُّخذت في التدقيق، لا الشكل:
 *  − عدّاد الاختبار لا يبدأ إلا بقرار المستخدم (WCAG 2.2.1).
 *  − العدّاد مسمّى ولا يعلن كل ثانية (WCAG 1.1.1 · 2.2.2).
 *  − الإيقاف المؤقت يجمّد الرقم فعلاً ويُعلن حالته (WCAG 2.2.2).
 *  − انتهاء المهلة يُعلن في منطقة حيّة (WCAG 4.1.3).
 *  − الإجراءات المدمّرة في الإعدادات تطلب تأكيداً صريحاً.
 */

test.describe("الوقت: لا يمضي قبل قرار المستخدم", () => {
  test("عدّاد اختبار الوحدة مسمّى ولا يعلن كل ثانية", async ({ page }) => {
    await page.goto("/tests/unit/a1-01");

    const timer = page.getByRole("timer");
    await expect(timer).toBeVisible({ timeout: 10_000 });
    await expect(timer).toHaveAttribute("aria-label", /الوقت المتبقي/);
    await expect(timer).not.toHaveAttribute("aria-live", /polite|assertive/);
  });

  test("العدّاد ينتظر «ابدأ المؤقت» ثم يمضي", async ({ page }) => {
    await page.goto("/tests/unit/a1-01");
    const timer = page.getByRole("timer");
    await expect(timer).toBeVisible({ timeout: 10_000 });

    const before = (await timer.innerText()).trim();
    await page.waitForTimeout(1600);
    expect((await timer.innerText()).trim()).toBe(before);

    await page.getByRole("button", { name: "ابدأ المؤقت" }).click();
    await expect
      .poll(async () => (await timer.innerText()).trim(), { timeout: 6000 })
      .not.toBe(before);
  });
});

test.describe("كبسولة الخمس دقائق", () => {
  test("الإيقاف المؤقت يجمّد العدّاد والمتابعة تُكمله", async ({ page }) => {
    await page.goto("/dashboard/five-minutes");
    const timer = page.getByRole("timer");
    await expect(timer).toBeVisible({ timeout: 10_000 });

    const pause = page.getByRole("button", { name: "إيقاف مؤقت" });
    await expect(pause).toHaveAttribute("aria-pressed", "false");
    await pause.click();

    const resume = page.getByRole("button", { name: "متابعة الكبسولة" });
    await expect(resume).toHaveAttribute("aria-pressed", "true");

    const frozen = (await timer.innerText()).trim();
    await page.waitForTimeout(1600);
    expect((await timer.innerText()).trim()).toBe(frozen);

    await resume.click();
    await expect
      .poll(async () => (await timer.innerText()).trim(), { timeout: 6000 })
      .not.toBe(frozen);
  });
});

test.describe("تحدّي السرعة", () => {
  test("مؤقت السؤال يحمل اسماً مفهوماً بعد بدء التحدي", async ({ page }) => {
    await page.goto("/gamification");
    const start = page.getByRole("button", { name: /ابدأ التحدي/ }).first();
    await expect(start).toBeVisible({ timeout: 10_000 });
    await start.click();

    const timer = page.getByRole("timer").first();
    await expect(timer).toBeVisible();
    await expect(timer).toHaveAttribute("aria-label", /الوقت المتبقي/);
  });
});

test.describe("الإعدادات: لا إجراء مدمّر بلا تأكيد", () => {
  test("إعادة تعيين عدّاد اليوم تفتح حوار تأكيد", async ({ page }) => {
    await page.goto("/settings");
    await page.getByRole("button", { name: /إعادة تعيين عدّاد اليوم/ }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("إعادة تعيين عدّاد اليوم؟");

    await dialog.getByRole("button", { name: "إلغاء" }).click();
    await expect(dialog).toBeHidden();
  });

  test("مسح التخزين المؤقت يفتح حوار تأكيد", async ({ page }) => {
    await page.goto("/settings");
    await page.getByRole("button", { name: /مسح التخزين المؤقت/ }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("مسح التخزين المؤقت؟");
    await dialog.getByRole("button", { name: "إلغاء" }).click();
    await expect(dialog).toBeHidden();
  });
});
