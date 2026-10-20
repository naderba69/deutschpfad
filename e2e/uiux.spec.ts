/**
 * اختبارات E2E: تحسينات UI/UX الاحترافية (الجولة الشاملة)
 *
 * تثبت:
 * 1) الكلمات الألمانية المركبة الطويلة لا تخرج من بطاقاتها (break-word)
 *    — على صفحة تحتوي كلمات طويلة (مفردات/أفعال/حوارات).
 * 2) أزرار التنقل الطويلة تلتفّ بدل تمددها خارج الشاشة على 320px.
 * 3) جداول الأفعال على الجوال قابلة للتمرير (لا فيضان صفحة).
 * 4) الصفحة الرئيسية: البطاقات لا تتقاطع مع الحواف.
 */
import { test, expect } from "@playwright/test";

async function clearData(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    try {
      const dbs = await indexedDB.databases();
      for (const db of dbs) {
        const dbName = db.name;
        if (dbName) {
          await new Promise<void>((res) => {
            const req = indexedDB.deleteDatabase(dbName);
            req.onsuccess = () => res();
            req.onerror = () => res();
            req.onblocked = () => res();
          });
        }
      }
    } catch {}
    localStorage.clear();
  });
}

test("320px: الكلمات الألمانية الطويلة لا تتجاوز بطاقاتها في صفحة المفردات", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/wortschatz-b2");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(2000);

  // لا فيضان صفحة أصلاً
  const pageOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  expect(pageOverflow, "فيضان أفقي في /wortschatz-b2 عند 320px").toBe(false);

  // بطاقات المفردات كلها داخل حدود الشاشة
  const measure = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const cards = [...document.querySelectorAll("main *")].filter((el) => {
      const r = el.getBoundingClientRect();
      const cls = el.className?.toString?.() ?? "";
      return r.width > 0 && r.height > 0 && cls.includes("rounded") && el.textContent?.trim();
    });
    const out = cards.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.left < -4 || r.right > vw + 4;
    });
    return { total: cards.length, outside: out.length, sample: out.slice(0, 3).map((el) => el.textContent?.trim().slice(0, 30)) };
  });
  expect(measure.outside, `بطاقات خارج الشاشة: ${JSON.stringify(measure.sample)}`).toBe(0);
});

test("320px: زر «أتممت هذا القسم» الطويل يلتفّ ولا يتجاوز بطاقة القسم", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/lesson/a1-01");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);

  // زر «التالي» الطويل في نهاية القسم
  const btn = page.getByRole("button", { name: /أتممت هذا القسم/ }).first();
  await expect(btn).toBeVisible({ timeout: 8000 });

  const measure = await page.evaluate(() => {
    const card = document.getElementById("lesson-step-content");
    const btnEl = [...document.querySelectorAll("button")].find((b) => (b.textContent ?? "").includes("أتممت هذا القسم"));
    if (!card || !btnEl) return null;
    const cr = card.getBoundingClientRect();
    const br = btnEl.getBoundingClientRect();
    return {
      cardLeft: Math.round(cr.left),
      cardRight: Math.round(cr.right),
      btnLeft: Math.round(br.left),
      btnRight: Math.round(br.right),
      btnHeight: Math.round(br.height),
      withinCard: br.left >= cr.left - 2 && br.right <= cr.right + 2,
    };
  });
  expect(measure, "الزر أو البطاقة غير موجودين").not.toBeNull();
  if (!measure) return;
  // الزر داخل البطاقة — لا يخرج عن حدودها
  expect(measure.withinCard, `الزر (${measure.btnLeft}→${measure.btnRight}) خارج البطاقة (${measure.cardLeft}→${measure.cardRight})`).toBe(true);
  // الزر قابل للالتفاف إذا لزم (ارتفاع يكفي لسطر أو سطرين) ولا يتمدد أفقياً
  expect(measure.btnHeight).toBeGreaterThanOrEqual(36);
  // لا فيضان صفحة بسببه
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  expect(overflow, "الزر الطويل يسبب فيضاناً أفقياً").toBe(false);
});

test("جداول الأفعال على الجوال: تمرير داخلي بدون فيضان صفحة", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/verben");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(2000);

  // لا فيضان صفحة
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  expect(overflow, "فيضان أفقي في /verben").toBe(false);

  // الجدول داخل حاوية تمرير أفقية (overflow-x-auto)
  const hasScrollWrapper = await page.evaluate(() => {
    const wrappers = [...document.querySelectorAll("div")].filter((d) => {
      const cs = getComputedStyle(d);
      return cs.overflowX === "auto" && d.querySelector("table");
    });
    return wrappers.length > 0;
  });
  expect(hasScrollWrapper, "لا توجد حاوية تمرير أفقية حول الجدول").toBe(true);
});
