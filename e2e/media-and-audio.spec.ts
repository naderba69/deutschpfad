/**
 * الوسائط والصوت — الجولة التاسعة.
 *
 * تتحقّق من السلوك كما يراه مستخدم قارئ الشاشة لا من وجود السمة فقط:
 *  1) زر «أظهر الترجمة» في البودكاست يعلن حالته (aria-expanded) ويشير إلى لوحة
 *     موجودة فعلاً في DOM عند الإغلاق (aria-controls صالح)، ويفتحها/يغلقها.
 *  2) نفس العقد لترجمة نص القراءة، ولنموذج الإجابة في مسار الكتابة.
 *  3) زر «اكشف نص الحوار» في تبويب الاستماع داخل الدرس يكشف النص فعلاً،
 *     ويربط اللوحة بمعرّف موجود قبل الكشف وبعده.
 *  4) زر اختيار المرحلة (الترجمة — جسر الكتابة) يعلن حالته بـaria-pressed،
 *     وليس إفصاحاً — كي لا يُقرأ خطأً كزر «فتح/إغلاق».
 *  5) رفض الميكروفون يُعلَن كرسالة خطأ حيّة (role=alert) لا كنص صامت.
 *  6) الأيقونات الزخرفية في البطل صامتة (aria-hidden) — لا تُقرأ «رسم».
 *
 * لا يدّعي هذا الملف اختبار قارئ شاشة حقيقي ولا ميكروفوناً حقيقياً.
 */
import {test, expect, type Page} from "@playwright/test";
import {seedLessonCompletions} from "./helpers/session-gate";

/** يفتح أول حلقة بودكاست (المشغّل يُصيَّر داخل الصفحة عند الضغط). */
async function openFirstPodcast(page: Page) {
  await page.goto("/podcasts");
  await page
    .locator("main button")
    .filter({hasText: /استماع/})
    .first()
    .click();
  await expect(page.getByRole("button", {name: "أظهر الترجمة"}).first()).toBeVisible();
}

test.describe("الإفصاحات المرافقة للصوت", () => {
  test("البودكاست: حالة الإفصاح معلَنة واللوحة مربوطة قبل الفتح وبعده", async ({page}) => {
    await openFirstPodcast(page);

    const toggle = page.getByRole("button", {name: "أظهر الترجمة"}).first();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    const panelId = await toggle.getAttribute("aria-controls");
    expect(panelId, "زر الترجمة يجب أن يشير إلى لوحة").toBe("podcast-script-ar");

    // اللوحة موجودة في DOM حتى وهي مغلقة (مرجع aria-controls غير مكسور)
    const panel = page.locator(`[id="${panelId}"]`);
    await expect(panel).toHaveCount(1);
    await expect(panel).toBeHidden();

    await toggle.click();
    const opened = page.getByRole("button", {name: "إخفاء الترجمة"}).first();
    await expect(opened).toHaveAttribute("aria-expanded", "true");
    await expect(panel).toBeVisible();

    await opened.click();
    await expect(page.getByRole("button", {name: "أظهر الترجمة"}).first()).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    await expect(panel).toBeHidden();
  });

  test("نص القراءة: زر الترجمة يعلن الحالة ويفتح الترجمة العربية", async ({page}) => {
    await page.goto("/reading");

    const toggle = page.getByRole("button", {name: "الترجمة العربية"});
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toHaveAttribute("aria-controls", "reading-translation");

    const panel = page.locator("#reading-translation");
    await expect(panel).toHaveCount(1);
    await expect(panel).toBeHidden();

    await toggle.click();
    await expect(page.getByRole("button", {name: "إخفاء الترجمة"})).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await expect(panel).toBeVisible();
    await expect(panel).not.toBeEmpty();
  });

  test("مسار الكتابة: نموذج الإجابة والمفردات إفصاحان بحالة معلَنة", async ({page}) => {
    await page.goto("/writing-path");

    const example = page.getByRole("button", {name: "أظهر نموذجاً"});
    await expect(example).toHaveAttribute("aria-expanded", "false");
    await expect(example).toHaveAttribute("aria-controls", "writing-example");
    const examplePanel = page.locator("#writing-example");
    await expect(examplePanel).toHaveCount(1);
    await expect(examplePanel).toBeHidden();

    await example.click();
    await expect(page.getByRole("button", {name: "إخفاء النموذج"})).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await expect(examplePanel).toBeVisible();

    const hilfen = page.getByRole("button", {name: "مفردات مساعدة"});
    await expect(hilfen).toHaveAttribute("aria-expanded", "false");
    await expect(hilfen).toHaveAttribute("aria-controls", "writing-hilfen");
    const hilfenPanel = page.locator("#writing-hilfen");
    await expect(hilfenPanel).toBeHidden();
    await hilfen.click();
    await expect(hilfenPanel).toBeVisible();
  });

  test("مسار الكتابة: زر المرحلة يعبّر عن حالته بـaria-pressed لا كإفصاح", async ({page}) => {
    await page.goto("/writing-path");

    const stage = page.getByRole("button", {name: /جسر الكتابة/});
    await expect(stage).toHaveAttribute("aria-pressed", /^(true|false)$/);
    // ليس إفصاحاً: لا يدّعي فتح/إغلاق لوحة
    await expect(stage).not.toHaveAttribute("aria-expanded", /.*/);
  });
});

test.describe("الاستماع داخل الدرس", () => {
  test("«اكشف نص الحوار»: الحالة معلَنة، واللوحة موجودة قبل الكشف، والنص يظهر بعده", async ({
    page,
  }) => {
    // خطوة الاستماع مقفلة في التنقّل المباشر؛ نكتب إنجازات الدرس أولاً (تُحمَّل الصفحة من جديد)،
    // ثم نستأنف من خطوة الاستماع كما يفعل التطبيق نفسه عبر مفتاح `lesson-step:<id>`.
    await page.goto("/lesson/a1-01");
    await seedLessonCompletions(page, "a1-01");
    const listenIdx = await page.evaluate(() =>
      [...document.querySelectorAll("[role='tab']")].findIndex((t) =>
        /الاستماع/.test(t.textContent || ""),
      ),
    );
    expect(listenIdx, "تبويب الاستماع موجود في الدرس").toBeGreaterThan(0);
    await page.evaluate(
      ([id, idx]) => localStorage.setItem(`lesson-step:${id}`, String(idx)),
      ["a1-01", listenIdx] as const,
    );
    await page.reload();

    const reveal = page.getByRole("button", {name: "اكشف نص الحوار"}).first();
    await expect(reveal).toBeVisible();
    await expect(reveal).toHaveAttribute("aria-expanded", "false");

    const panelId = await reveal.getAttribute("aria-controls");
    expect(panelId, "الزر يجب أن يشير إلى لوحة النص").toBeTruthy();
    const panel = page.locator(`[id="${panelId}"]`);
    await expect(panel).toHaveCount(1);

    // قبل الكشف: النص الألماني مُقنَّع
    const germanLine = panel.locator('p[lang="de"]').first();
    await expect(germanLine).toContainText("•");

    await reveal.click();
    await expect(page.getByRole("button", {name: "أخف النص"}).first()).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await expect(germanLine).not.toContainText("•");
    await expect(germanLine).not.toBeEmpty();
  });
});

test.describe("رسائل الوسائط والأيقونات الزخرفية", () => {
  test("رفض إذن الميكروفون يُعلَن كتنبيه حيّ", async ({page}) => {
    // بلا منح إذن الميكروفون: Chromium يرفض الطلب في السياق الآلي.
    await page.goto("/aussprache");
    await page.getByRole("tab", {name: "تسجيل صوتي"}).click();

    await page.getByRole("button", {name: "سجّل نطقك"}).first().click();

    const alert = page.getByRole("alert").first();
    await expect(alert).toBeVisible({timeout: 10_000});
    await expect(alert).toContainText(/لم يُسمح|لا يسمح/);
  });

  test("أيقونات البطل الزخرفية صامتة أمام قارئ الشاشة", async ({page}) => {
    await page.goto("/");

    const heroWord = page.getByText("Guten Morgen! Wie geht es dir?").first();
    await expect(heroWord).toBeVisible();

    // الأيقونة المجاورة للنص مثال بصري فقط — لا تُعلَن
    const icon = page
      .locator("main svg.lucide-volume2")
      .first();
    await expect(icon).toHaveAttribute("aria-hidden", "true");
  });
});
