import { expect, test } from "@playwright/test";

test.describe("مراجعة أسماء عناصر الوصول الأساسية", () => {
  test("الصفحة الرئيسية تعرض عنواناً وشريط تقدم مسمى", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 10_000 });
    const demoProgress = page.getByRole("progressbar", { name: /التقدم في مثال الدرس التوضيحي/ });
    await expect(demoProgress).toBeVisible();
    await expect(demoProgress).toHaveAttribute("aria-valuenow", "65");
  });

  test("أزرار بدء الدروس في المسار لها اسم واضح على الهاتف", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/learning-path");
    const firstLesson = page.getByRole("link", { name: /الأبجدية/ }).first();
    await expect(firstLesson).toHaveAttribute("href", "/lesson/a1-00");
  });

  test("مفتاح المؤثرات الصوتية معلّم باسم مفهوم", async ({ page }) => {
    await page.goto("/settings");
    await expect(page.getByRole("switch", { name: "المؤثرات الصوتية" })).toBeVisible();
  });

  test("بطاقة المفردة تحتفظ باسمها المرئي وتعلن حالة القلب", async ({ page }) => {
    await page.goto("/dashboard");
    const card = page.locator(".perspective").first();
    const word = (await card.locator('[lang="de"]').innerText()).trim();
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const flipButton = card.getByRole("button");
    await expect(flipButton).toHaveAccessibleName(new RegExp(escapedWord));
    await expect(flipButton).toHaveAttribute("aria-pressed", "false");
    await flipButton.click();
    await expect(flipButton).toHaveAttribute("aria-pressed", "true");
  });

  test("يمكن بلوغ رابط تخطي التنقل أولاً بلوحة المفاتيح", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "تخطَّ إلى المحتوى الرئيسي" });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();
    await expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  test("قائمة الجوال تُغلق بمفتاح Escape وتعيد التركيز إلى زرها", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const menuButton = page.getByRole("button", { name: "فتح القائمة" });
    await menuButton.click();
    const menu = page.getByRole("dialog");
    await expect(menu).toBeVisible();
    await expect(menu.getByText("المستويات (CEFR)")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(menuButton).toBeFocused();
  });

  test("محاكي المحادثة يسمّي التقدم ويضمّن حالة سرعة النطق في اسم الزر", async ({ page }) => {
    await page.goto("/conversations");
    await expect(page.getByRole("progressbar", { name: "تقدم المحادثة" })).toBeVisible();
    const speedButton = page.getByRole("button", { name: /عادي.*تغيير سرعة النطق/ });
    await expect(speedButton).toBeVisible();
    await speedButton.click();
    await expect(page.getByRole("button", { name: /بطيء.*تغيير سرعة النطق/ })).toBeVisible();
  });

  test("تقييمات Can-Do تعلن الاختيار الحالي لقارئ الشاشة", async ({ page }) => {
    await page.goto("/level/b2");
    const masteryProgress = page.getByRole("progressbar", { name: /التقدم في مؤشرات الإتقان لمستوى B2/ });
    await expect(masteryProgress).toHaveAttribute("aria-valuenow", "0");
    const yes = page.getByRole("button", { name: "✓ أستطيع" }).first();
    const partial = page.getByRole("button", { name: "~ جزئياً" }).first();
    const notYet = page.getByRole("button", { name: "✗ بعد" }).first();

    await yes.click();
    await expect(yes).toHaveAttribute("aria-pressed", "true");
    await expect(partial).toHaveAttribute("aria-pressed", "false");
    await expect(notYet).toHaveAttribute("aria-pressed", "false");
    await partial.click();
    await expect(partial).toHaveAttribute("aria-pressed", "true");
    await notYet.click();
    await expect(notYet).toHaveAttribute("aria-pressed", "true");
  });

  test("شارات المستويات في الصفحة الرئيسية تحافظ على تباين WCAG AA في الوضع الداكن", async ({ page }) => {
    await page.addInitScript(() => document.documentElement.classList.add("dark"));
    await page.goto("/");
    // شارات المستويات فقط (Badge) — لا عناوين LangDe التي تحمل نفس الأصناف
    const ratios = await page.locator("section#levels div.font-de.font-bold").evaluateAll((elements) => {
      const luminanceOf = (color: string) => {
        const values = color.match(/[\\d.]+/g)?.slice(0, 3).map(Number);
        if (!values || values.length !== 3) throw new Error(`Unsupported color: ${color}`);
        const channels = values.map((channel) => {
          const value = channel / 255;
          return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
      };
      return elements.map((element) => {
        const foreground = getComputedStyle(element).color;
        let current: Element | null = element;
        let background = "rgb(255, 255, 255)";
        while (current) {
          const candidate = getComputedStyle(current).backgroundColor;
          const channels = candidate.match(/[\\d.]+/g)?.map(Number);
          if (channels && channels.length >= 3 && (channels.length < 4 || channels[3] > 0)) {
            background = candidate;
            break;
          }
          current = current.parentElement;
        }
        const values = [luminanceOf(foreground), luminanceOf(background)].sort((a, b) => b - a);
        return (values[0] + 0.05) / (values[1] + 0.05);
      });
    });
    expect(ratios).toHaveLength(4);
    for (const ratio of ratios) expect(ratio).toBeGreaterThanOrEqual(4.5);
  });

  test("روابط التدريب في مركز الاختبارات تحقق تباين نص WCAG AA", async ({ page }) => {
    await page.goto("/tests");
    const trainingLink = page.getByRole("link", { name: "ابدأ التدريب" });
    await expect(trainingLink).toBeVisible();
    const ratio = await trainingLink.evaluate((element) => {
      const foreground = getComputedStyle(element).color;
      const background = getComputedStyle(element).backgroundColor;
      const luminanceOf = (color: string) => {
        const values = color.match(/[\d.]+/g)?.slice(0, 3).map(Number);
        if (!values || values.length !== 3) throw new Error(`Unsupported color: ${color}`);
        const channels = values.map((channel) => {
          const value = channel / 255;
          return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
      };
      const values = [luminanceOf(foreground), luminanceOf(background)].sort((a, b) => b - a);
      return (values[0] + 0.05) / (values[1] + 0.05);
    });
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });
});
