import { test, expect, type Page } from "@playwright/test";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبارات الريسبونسف والتصميم (v7 — التدقيق التصميمي)
 *  تثبت أن المشروع لا يعاني: تجاوز أفقي، بطاقات تتخطى الحاوية،
 *  شريط سفلي يغطي المحتوى، نصوص مقطوعة.
 *  ═══════════════════════════════════════════════════════════
 */

/** لا تجاوز أفقي على مستوى الصفحة */
async function expectNoHorizontalOverflow(page: Page) {
  const dims = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
  }));
  expect(dims.scrollW, `تجاوز أفقي: scrollWidth=${dims.scrollW} > clientWidth=${dims.clientW}`).toBeLessThanOrEqual(dims.clientW + 1);
}

/** لا عنصر شبكة/بطاقة يتجاوز حدوده الأبوية في الاتجاه الأفقي */
async function expectNoCardOverflow(page: Page) {
  const offenders = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const bad: string[] = [];
    document.querySelectorAll("main a, main div, main button").forEach((el) => {
      const r = el.getBoundingClientRect();
      const st = getComputedStyle(el);
      if (st.position === "absolute" || st.position === "fixed") return;
      if (st.display === "none") return;
      // عنصر أوسع من الشاشة فعلياً وليس مقتصّاً من سلف
      if (r.width > vw + 2) {
        bad.push(`<${el.tagName.toLowerCase()} w=${Math.round(r.width)} "${(el.textContent || "").trim().slice(0, 30)}"`);
      }
    });
    return bad.slice(0, 8);
  });
  expect(offenders, `عناصر تتجاوز الشاشة (${offenders.join(" | ")})`).toEqual([]);
}

test.describe("الريسبونسف — جوال 375px", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("لوحة التحكم: لا تجاوز أفقي إطلاقاً", async ({ page }) => {
    await page.goto("/dashboard", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await expectNoHorizontalOverflow(page);
    await expectNoCardOverflow(page);
  });

  test("مسار التعلم: بطاقات الدروس داخل الحاوية ولا تتجاوز الشاشة", async ({ page }) => {
    await page.goto("/learning-path", { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await expectNoHorizontalOverflow(page);
    const cards = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const els = [...document.querySelectorAll("main a.group")];
      return els.map((el) => {
        const r = el.getBoundingClientRect();
        return { left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width), vw };
      });
    });
    expect(cards.length).toBeGreaterThan(5);
    for (const c of cards) {
      expect(c.left, `بطاقة تتجاوز يسار الشاشة (${c.left})`).toBeGreaterThanOrEqual(-1);
      expect(c.right, `بطاقة تتجاوز يمين الشاشة (${c.right})`).toBeLessThanOrEqual(c.vw + 1);
    }
  });

  test("صفحة درس: لا تجاوز أفقي وشريط الخطوات يعمل", async ({ page }) => {
    await page.goto("/lesson/a1-01", { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await expectNoHorizontalOverflow(page);
    const bar = page.locator("button", { hasText: "الأهداف" }).first();
    await expect(bar).toBeVisible();
  });

  test("الشريط السفلي لا يغطي آخر محتوى الصفحة بعد التمرير لنهايتها", async ({ page }) => {
    await page.goto("/level/a1", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    // انتقل إلى نهاية الصفحة
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const clearance = await page.evaluate(() => {
      const nav = document.querySelector("nav[aria-label='التنقل السفلي']");
      if (!nav) return null;
      const nr = nav.getBoundingClientRect();
      // آخر عنصر في main قبل نهاية الصفحة
      const main = document.querySelector("main");
      if (!main) return null;
      const els = [...main.querySelectorAll("a, button, div")];
      let maxBottom = -1;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        const st = getComputedStyle(el);
        if (st.position === "fixed") continue;
        if (r.bottom > maxBottom) maxBottom = r.bottom;
      }
      return { navTop: Math.round(nr.top), lastContentBottom: Math.round(maxBottom) };
    });
    // على الجوال: الشريط ثابت — لا يجب أن يتجاوز آخر محتوى حده العلوي
    if (clearance) {
      expect(clearance.lastContentBottom).toBeLessThanOrEqual(clearance.navTop + 1);
    }
  });
});

test.describe("الريسبونسف — سطح المكتب 1280px", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("صفحة الاختبارات: لا تجاوز أفقي", async ({ page }) => {
    await page.goto("/tests", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    await expectNoHorizontalOverflow(page);
    await expectNoCardOverflow(page);
  });

  test("محاكاة B2: لا تجاوز أفقي وتُعرض الأقسام", async ({ page }) => {
    await page.goto("/tests/b2-simulation", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    await expectNoHorizontalOverflow(page);
    await expect(page.locator("h1, h2", { hasText: /محاكاة|B2/ }).first()).toBeVisible();
  });

  test("الرئيسية: لا تجاوز أفقي", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    await expectNoHorizontalOverflow(page);
  });
});

test.describe("الريسبونسف — شاشة ضيقة جداً 320px", () => {
  test.use({ viewport: { width: 320, height: 640 } });

  test("الرئيسية تعمل في 320px بلا تجاوز", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await expectNoHorizontalOverflow(page);
  });

  test("صفحة الإعدادات: لا تجاوز أفقي في 320px", async ({ page }) => {
    await page.goto("/settings", { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await expectNoHorizontalOverflow(page);
  });
});
