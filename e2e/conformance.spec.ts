import { expect, test } from "@playwright/test";

/**
 * الجولة السابعة عشرة — حراسات البنود التي لا تُقاس بلقطة شاشة.
 *
 * 2.4.1  تجاوز الكتل: أول عنصر في التبويب هو رابط التخطي، ويقفز إلى main.
 * 2.1.2  لا مصيدة لوحة مفاتيح: 40 محطة Tab لا تحبس التركيز.
 * 2.5.2  إلغاء المؤشر: ضغط الزر ثم الإفلات خارجه لا ينفّذ الفعل.
 * 2.4.5  طرق متعددة: تنقّل + خريطة موقع.
 * 3.3.3  اقتراح تصحيح الخطأ: الرسالة تقول ما المطلوب.
 * 3.3.4  منع الأخطاء: الإجراءات المدمّرة لا تنفّذ قبل تأكيد صريح.
 */

test.describe("2.4.1 — تجاوز الكتل", () => {
  for (const route of ["/", "/lesson/a1-01", "/glossar"]) {
    test(`${route}: أول Tab يصل إلى رابط التخطي، وتفعيله ينقل إلى المحتوى`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main#main-content").first()).toBeVisible({ timeout: 15_000 });
      await page.keyboard.press("Tab");
      const first = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el) return null;
        return {
          tag: el.tagName.toLowerCase(),
          href: el.getAttribute("href"),
          text: (el.textContent || "").trim().slice(0, 40),
          visible: el.getBoundingClientRect().width > 1,
        };
      });
      expect(first, "لا يوجد عنصر مركَّز بعد أول Tab").not.toBeNull();
      expect(first?.href, `أول تركيز ليس رابط التخطي: ${JSON.stringify(first)}`).toBe("#main-content");
      /* يظهر عند التركيز (لا يبقى sr-only) */
      expect(first?.visible, "رابط التخطي لا يظهر عند التركيز").toBe(true);
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL(/#main-content/);
      const target = await page.evaluate(() => {
        const main = document.getElementById("main-content");
        return main ? main.getBoundingClientRect().top : null;
      });
      expect(target).not.toBeNull();
    });
  }
});

test.describe("2.1.2 — لا مصيدة لوحة مفاتيح", () => {
  for (const route of ["/settings", "/forms", "/tests/unit/a1-03"]) {
    test(`${route}: 40 محطة Tab تتقدّم ولا تحبس التركيز`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main").first()).toBeVisible({ timeout: 15_000 });
      /* هوية العنصر تُسنَد في DOM نفسه، فحقول التاريخ ذات المقاطع الداخلية
         (يوم/شهر/سنة) تُعدّ عنصراً واحداً لا أربعة، والزرّان المتشابهان في
         نموذجين مختلفين لا يُخلَطان. */
      await page.evaluate(() => {
        (window as unknown as { __tabSeq: number }).__tabSeq = 0;
      });
      const ids: string[] = [];
      for (let i = 0; i < 40; i += 1) {
        await page.keyboard.press("Tab");
        const info = await page.evaluate(() => {
          const el = document.activeElement as HTMLElement | null;
          if (!el || el === document.body) return {id: "body", date: false};
          let id = el.dataset.tabId;
          if (!id) {
            const w = window as unknown as { __tabSeq: number };
            w.__tabSeq += 1;
            id = `t${w.__tabSeq}`;
            el.dataset.tabId = id;
          }
          return {id, date: (el as HTMLInputElement).type === "date"};
        });
        ids.push(info.id);
      }
      /* التكرار المسموح: حقل تاريخ واحد يمرّ على مقاطعه الداخلية */
      let stuck = 0;
      for (let i = 1; i < ids.length; i += 1) {
        if (ids[i] === ids[i - 1]) stuck += 1;
      }
      const distinct = new Set(ids.filter((x) => x !== "body")).size;
      expect(distinct, `عناصر مختلفة وصل إليها Tab: ${distinct}`).toBeGreaterThan(8);
      expect(stuck, `التركيز عاد إلى العنصر نفسه ${stuck} مرة: ${JSON.stringify(ids.slice(0, 20))}`).toBeLessThanOrEqual(6);
    });
  }
});

test.describe("2.5.2 — إلغاء المؤشر", () => {
  test("ضغط رقاقة تصفية ثم الإفلات خارجها لا يغيّر الحالة", async ({ page }) => {
    await page.goto("/glossar");
    const all = page.locator("button[aria-pressed]");
    await expect(all.first()).toBeVisible({ timeout: 15_000 });
    /* فهرس ثابت: بعد الضغط تتغيّر حالة الرقاقة فيتوقّف محدّد
       `[aria-pressed="false"]` عن الإشارة إلى العنصر ذاته. */
    const idx = await page.evaluate(() =>
      [...document.querySelectorAll("button[aria-pressed]")].findIndex(
        (b) => b.getAttribute("aria-pressed") === "false",
      ),
    );
    expect(idx).toBeGreaterThanOrEqual(0);
    const chip = all.nth(idx);
    const before = await chip.getAttribute("aria-pressed");
    const box = await chip.boundingBox();
    expect(box).not.toBeNull();
    if (!box) return;
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    /* الإفلات بعيداً خارج الزر (إلغاء المؤشر) */
    await page.mouse.move(5, 5, { steps: 5 });
    await page.mouse.up();
    await page.waitForTimeout(150);
    expect(await chip.getAttribute("aria-pressed"), "الفعل نُفِّذ عند الضغط رغم الإفلات خارجه").toBe(before);

    /* والضغطة الكاملة تعمل — الفحص لا يمرّ لأن الزر معطّل */
    await chip.click();
    await page.waitForTimeout(150);
    expect(await chip.getAttribute("aria-pressed")).not.toBe(before);
  });
});

test.describe("2.4.5 — طرق متعددة للوصول", () => {
  test("تنقّل رئيسي + خريطة موقع + مسار تعلّم", async ({ page, request }) => {
    await page.goto("/");
    const navLinks = await page.evaluate(() =>
      [...document.querySelectorAll("header nav a[href]")].length,
    );
    expect(navLinks).toBeGreaterThan(0);

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].length;
    expect(urls, "خريطة الموقع يجب أن تغطّي الموقع").toBeGreaterThan(150);
    expect(xml).toContain("/learning-path");

    const path = await request.get("/learning-path");
    expect(path.status()).toBe(200);
  });
});

test.describe("3.3.1 · 3.3.3 — تحديد الخطأ واقتراح التصحيح", () => {
  test("/forms: الإرسال الناقص يعدّد الحقول ويشرح المطلوب وينقل التركيز", async ({ page }) => {
    await page.goto("/forms");
    const submit = page.getByRole("button", { name: /إرسال النموذج/ }).first();
    await expect(submit).toBeVisible({ timeout: 15_000 });
    await submit.click();

    const alert = page.getByRole("alert").first();
    await expect(alert).toBeVisible({ timeout: 10_000 });
    const text = (await alert.innerText()).trim();
    expect(text, "الرسالة لا تقول عدد الحقول الناقصة").toMatch(/حقول فارغة|بقيت/);
    expect(text.length).toBeGreaterThan(20);

    /* شرح عند كل حقل ناقص، مربوط بالحقل نفسه */
    const fieldError = page.getByText("هذا الحقل مطلوب").first();
    await expect(fieldError).toBeVisible();
    const describedBy = await page.evaluate(() => {
      const el = document.activeElement as HTMLInputElement | null;
      if (!el) return null;
      return {
        tag: el.tagName.toLowerCase(),
        describedBy: el.getAttribute("aria-describedby"),
        invalid: el.getAttribute("aria-invalid"),
      };
    });
    expect(describedBy?.tag, "التركيز لم ينتقل إلى أول حقل ناقص").toBe("input");
    expect(describedBy?.describedBy, "خطأ الحقل غير مرتبط به").toBeTruthy();
  });
});

test.describe("3.3.4 — منع الأخطاء في الإجراءات المدمّرة", () => {
  test("/settings: «إعادة تعيين عدّاد اليوم» لا تنفّذ قبل تأكيد", async ({ page }) => {
    await page.goto("/settings");
    const reset = page.getByRole("button", { name: /إعادة تعيين عدّاد اليوم/ }).first();
    await expect(reset).toBeVisible({ timeout: 15_000 });
    await reset.click();
    /* حوار تأكيد يظهر، وفيه وصف للنتيجة وإلغاء */
    const dialog = page.getByRole("dialog").first();
    await expect(dialog).toBeVisible({ timeout: 10_000 });
    await expect(dialog.getByRole("button", { name: /إلغاء/ })).toBeVisible();
    const description = (await dialog.innerText()).trim();
    expect(description.length, "حوار بلا شرح للنتيجة").toBeGreaterThan(20);
    await dialog.getByRole("button", { name: /إلغاء/ }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });
});
