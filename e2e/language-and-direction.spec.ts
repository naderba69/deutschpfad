/**
 * اللغة والاتجاه — الجولة العاشرة (WCAG 3.1.1 · 3.1.2).
 *
 * تطبيق عربي (RTL) يعلّم الألمانية. الاختبارات هنا تتحقّق من العقد كما يراه
 * قارئ الشاشة ومحرّك bidi، لا من وجود سمة في الكود:
 *  1) جذر المستند عربي: `lang="ar"` و`dir="rtl"`، والجملة الألمانية داخله
 *     موسومة `lang="de"` و`dir="ltr"`.
 *  2) شارة أداة التعريف (der/die/das) في القاموس تنطق ألمانياً لا عربياً.
 *  3) `LangDe` لا تدّعي الألمانية على نص عربي: خيار سؤال مترجم (اختبار وحدة)
 *     يجب ألّا يكون داخل `lang="de"`.
 *  4) جدول الأفعال الشاذة: الرؤوس الألمانية `lang="de"`، وخلايا الترجمة
 *     العربية `dir="rtl"` — لا اتجاه لاتيني على نص عربي.
 *  5) لا رموز `lang` غير صالحة ولا `dir` غير صالح في الصفحات المفحوصة.
 *
 * لا يدّعي هذا الملف اختبار قارئ شاشة حقيقي؛ يثبت البنية التي يعتمد عليها.
 */
import {expect, test, type Page} from "@playwright/test";

async function expectValidLangAndDir(page: Page) {
  const invalid = await page.evaluate(() => {
    const bad: string[] = [];
    const validLang = /^[a-z]{2,3}(-[A-Za-z0-9]{1,8})*$/i;
    for (const el of document.querySelectorAll("[lang]")) {
      const v = (el.getAttribute("lang") || "").trim();
      if (!validLang.test(v)) bad.push(`lang="${v}"`);
    }
    for (const el of document.querySelectorAll("[dir]")) {
      const v = (el.getAttribute("dir") || "").toLowerCase();
      if (!["ltr", "rtl", "auto"].includes(v)) bad.push(`dir="${v}"`);
    }
    return bad;
  });
  expect(invalid, "رموز لغة/اتجاه غير صالحة").toEqual([]);
}

test.describe("الجذر والجملة الألمانية", () => {
  test("الصفحة عربية RTL والنص الألماني موسوم lang=de", async ({page}) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");

    const german = page.locator("main [lang='de']").first();
    await expect(german).toBeVisible();
    await expect(german).toHaveAttribute("dir", "ltr");
    await expectValidLangAndDir(page);
  });

  test("شارة أداة التعريف تنطق ألمانياً في القاموس", async ({page}) => {
    await page.goto("/glossar");

    const article = page.getByTestId("vocab-kind-article").first();
    await expect(article).toBeVisible({timeout: 15_000});
    await expect(article).toHaveAttribute("lang", "de");
    await expect(article).toHaveAttribute("dir", "ltr");
    await expect(article).toHaveText(/^(der|die|das)$/);
  });

  test("LangDe لا تدّعي الألمانية على نص عربي في بطاقة الدرس", async ({page}) => {
    // بطاقة درس a1-00 تحتوي حقل «الخطأ» بنصوص عربية (شرح نطق) داخل LangDe
    await page.goto("/lesson/a1-00");

    const arabicNote = page.getByText("نطق W الإنجليزية (Water = ووتر)", {exact: false}).first();
    await expect(arabicNote).toBeVisible({timeout: 15_000});

    const lang = await arabicNote.evaluate((el) => el.closest("[lang]")?.getAttribute("lang") ?? null);
    expect(lang, "نص عربي موسوم كلغة ألمانية").not.toBe("de");

    // والألمانية في الصفحة نفسها ما زالت موسومة صريحاً
    await expect(page.locator("[lang='de']").first()).toBeAttached();
  });

  test("خيارات الاختبار الألمانية موسومة lang=de", async ({page}) => {
    await page.goto("/tests/unit/a1-03");
    /* أسماء الأقسام صارت تطابق المهارات الفعلية في اختبار الوحدة
       (`grammatik` + `wortschatz`) بعد إصلاح الجولة الحادية عشرة. */
    await page.getByRole("button", {name: /قواعد الوحدة/}).first().click();

    /* الأسئلة نفسها تُخلط ببذرة يومية، وبعض أسئلة الوحدة خياراتها **ترجمات
       عربية** لسؤال ألماني («اختر الترجمة الصحيحة»). لذلك لا يُفترض أن كل
       خيار ألماني: يُفحص كل خيار حسب لغته الفعلية — العربي لا يُوسم ألمانية،
       والألماني يُوسم `lang="de"` مرة واحدة. */
    const radios = page.getByRole("radio");
    await expect(radios.first()).toBeVisible({timeout: 15_000});
    const arabic = /[\u0600-\u06FF]/;
    const count = Math.min(await radios.count(), 8);
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i += 1) {
      const option = radios.nth(i);
      const text = (await option.innerText()).trim();
      if (arabic.test(text)) {
        await expect(option.locator("[lang='de']"), `خيار عربي موسوم ألمانية: ${text}`).toHaveCount(0);
      } else {
        await expect(option.locator("[lang='de']"), `خيار ألماني بلا lang=de: ${text}`).toHaveCount(1);
      }
    }
    /* نص السؤال نفسه ألماني وموسوم، حتى لو كانت الخيارات ترجمات عربية */
    await expect(page.locator("main [lang='de']").first()).toBeAttached();
  });
});

test.describe("الاتجاه داخل الجداول", () => {
  test("جدول الأفعال الشاذة: رؤوس ألمانية وخلايا عربية بالاتجاه الصحيح", async ({page}) => {
    await page.goto("/verben");

    const table = page.getByRole("table", {name: /جدول الأفعال الشاذة/});
    await expect(table).toBeVisible();

    // رأس عمود ألماني: موسوم lang=de
    const germanHeader = table.getByRole("columnheader", {name: "Präteritum"});
    await expect(germanHeader).toHaveAttribute("lang", "de");

    // خلية ترجمة عربية: dir=rtl (لا يرث dir=ltr من حاوية التمرير)
    const arabicCell = table.locator("tbody td[dir='rtl']").first();
    await expect(arabicCell).toBeAttached();
    const text = (await arabicCell.textContent()) ?? "";
    expect(text, "خلية dir=rtl بلا نص عربي").toMatch(/[\u0600-\u06FF]/);

    await expectValidLangAndDir(page);
  });

  test("أسطورة خريطة المسار عربية الاتجاه رغم أن الخريطة LTR", async ({page}) => {
    await page.goto("/learning-path");

    const legend = page.getByText("درسك الحالي", {exact: true}).first();
    await expect(legend).toBeVisible();
    const dir = await legend.evaluate((el) => el.closest("[dir]")?.getAttribute("dir") ?? null);
    expect(dir, "أسطورة عربية داخل حاوية LTR").toBe("rtl");
  });
});
