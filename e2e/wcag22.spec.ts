import { expect, test } from "@playwright/test";

/**
 * الجولة الثانية عشرة — معايير WCAG 2.2 الجديدة.
 *
 * 2.4.11  التركيز غير المحجوب: عنصر يركّز عليه المستخدم لا يجوز أن يختفي تحت
 *         الهيدر اللاصق أو شريط التنقل السفلي. تحرس هذه الاختبارات أن
 *         `scroll-padding` في globals.css يعمل فعلياً مع Tab الحقيقي.
 * 2.5.7   السحب: ترتيب الكلمات يُسحَب بالفأرة، وله مكافئ بلوحة المفاتيح.
 * 2.5.8   حجم الهدف: لا هدف مرئي أصغر من 24×24 إلا الاستثناءات (رابط داخل جملة).
 * 3.3.7   الإدخال المكرر: لا حقلان يطلبان المعلومة نفسها في النموذج نفسه.
 * 4.1.2   اسم على عنصر لا يقبله (aria-label على div/span بلا دور) يُهمَل.
 */

/** ينتظر انتهاء التمرير السلس ثم يقيس إن كان العنصر المركّز مغطى بشريط لاصق. */
async function focusedIsObscured(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    let last = -1;
    let still = 0;
    for (let i = 0; i < 40 && still < 3; i += 1) {
      await new Promise((r) => setTimeout(r, 40));
      const y = window.scrollY;
      if (y === last) still += 1;
      else {
        still = 0;
        last = y;
      }
    }
  });
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    if (!el || el === document.body) return null;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return null;
    const x = Math.min(Math.max(r.left + Math.min(r.width / 2, 10), 1), window.innerWidth - 1);
    const y = Math.min(Math.max(r.top + r.height / 2, 1), window.innerHeight - 1);
    const hit = document.elementFromPoint(x, y);
    if (!hit || hit === el || el.contains(hit) || hit.contains(el)) return null;
    let node: Element | null = hit;
    while (node && node !== document.body) {
      const cs = getComputedStyle(node);
      if ((cs.position === "sticky" || cs.position === "fixed") && node.getClientRects().length) {
        return {
          focused: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 40),
          coveredBy: (node.className || "").toString().slice(0, 60),
        };
      }
      node = node.parentElement;
    }
    return null;
  });
}

test.describe("2.4.11 — التركيز لا يختفي تحت الأشرطة اللاصقة", () => {
  for (const route of ["/lesson/a1-01", "/glossar", "/settings", "/dashboard"]) {
    test(`Tab على ${route} لا يضع التركيز تحت شريط`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 700 });
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 15_000 });

      for (let i = 0; i < 25; i += 1) {
        await page.keyboard.press("Tab");
        const obscured = await focusedIsObscured(page);
        expect(obscured, `التركيز محجوب بعد ${i + 1} ضغطة Tab`).toBeNull();
      }
    });
  }
});

test.describe("2.5.8 — حجم الهدف", () => {
  test("رابط التخطي مخفي حتى التركيز ثم يظهر بحجم كافٍ", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/");
    const skip = page.getByRole("link", { name: /تخطَّ إلى المحتوى الرئيسي/ });

    // مخفي بصرياً في الحالة العادية (لا يُحتسب هدفاً)
    const hidden = await skip.evaluate((el) => el.getBoundingClientRect().height);
    expect(hidden).toBeLessThan(24);

    await page.keyboard.press("Tab");
    await expect(skip).toBeFocused();
    const box = await skip.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(24);
    expect(box?.width ?? 0).toBeGreaterThanOrEqual(24);
  });

  test("لا هدف تفاعلي أصغر من 24×24 في القاموس", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/glossar");
    const small = await page.evaluate(() => {
      const sel = "a[href],button,input,select,textarea,[role='button']";
      const skip = document.querySelector("a[href='#main-content']");
      return [...document.querySelectorAll(sel)]
        .filter((el) => {
          const e = el as HTMLElement;
          if (e === skip || skip?.contains(e)) return false;
          const cs = getComputedStyle(e);
          if (cs.display === "none" || cs.visibility === "hidden") return false;
          if (e.closest("[aria-hidden='true']")) return false;
          return e.getClientRects().length > 0;
        })
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            w: Math.round(r.width),
            h: Math.round(r.height),
            name: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 30),
          };
        })
        .filter((t) => t.w < 24 || t.h < 24);
    });
    expect(small).toEqual([]);
  });
});

test.describe("2.5.7 — السحب له مكافئ بلوحة المفاتيح", () => {
  test("ترتيب الكلمات: الكلمات أزرار مسمّاة و Enter يضيفها", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto("/lesson/a1-07");

    // الوصول إلى تمرين الترتيب (الخطوة الرابعة في الدرس)
    const next = page.getByRole("button", { name: /^(التالي|تحقق|تخطي)/ });
    for (let i = 0; i < 12; i += 1) {
      if ((await page.locator("[draggable='true']").count()) > 0) break;
      const btn = next.first();
      if (!(await btn.isVisible().catch(() => false))) break;
      await btn.click();
      await page.waitForTimeout(350);
    }

    const tokens = page.locator("[draggable='true']");
    await expect(tokens.first()).toBeVisible({ timeout: 10_000 });
    const before = await tokens.count();

    const first = tokens.first();
    await expect(first).toHaveAttribute("aria-label", /أضف الكلمة/);
    await first.focus();
    await page.keyboard.press("Enter");

    await expect
      .poll(async () => tokens.count(), { timeout: 5000 })
      .toBe(before - 1);

    // مناطق الإسقاط لها أدوار حقيقية (aria-label على div بلا دور يُهمَل)
    await expect(page.locator("[role='group'][aria-label*='منطقة الإجابة']")).toHaveCount(1);
    await expect(page.locator("[role='group'][aria-label*='بنك الكلمات']")).toHaveCount(1);
    await expect(page.locator("[draggable='true']").first()).toHaveAttribute(
      "aria-label",
      /أضف الكلمة/,
    );
  });
});

test.describe("4.1.2 — لا اسم على دور غير موجود", () => {
  for (const route of ["/", "/settings", "/about", "/glossar"]) {
    test(`لا aria-label على div/span بلا دور في ${route}`, async ({ page }) => {
      await page.goto(route);
      const offenders = await page.evaluate(() =>
        [...document.querySelectorAll("main div[aria-label], main span[aria-label]")]
          .filter((el) => !el.getAttribute("role"))
          .map((el) => ({
            tag: el.tagName.toLowerCase(),
            label: el.getAttribute("aria-label"),
          })),
      );
      expect(offenders).toEqual([]);
    });
  }
});

test.describe("3.3.7 — الإدخال المكرر", () => {
  test("نموذج الإعدادات لا يطلب المعلومة نفسها مرتين", async ({ page }) => {
    await page.goto("/settings");
    const labels = await page.evaluate(() => {
      const groups = [...document.querySelectorAll("form")];
      return groups.flatMap((form) =>
        [...form.querySelectorAll("input,select,textarea")]
          .map((el) => {
            const input = el as HTMLInputElement;
            if (["checkbox", "radio", "file", "hidden", "submit", "button"].includes(input.type))
              return null;
            const label =
              input.getAttribute("aria-label") ||
              (input.id && document.querySelector(`label[for='${CSS.escape(input.id)}']`)?.textContent) ||
              input.closest("label")?.textContent ||
              "";
            return label.replace(/\s+/g, " ").trim();
          })
          .filter(Boolean),
      );
    });
    expect(new Set(labels).size).toBe(labels.length);
  });
});
