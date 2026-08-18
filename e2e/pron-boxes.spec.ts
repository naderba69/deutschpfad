/**
 * اختبارات E2E: بوكسات النطق — البنية الثلاثية (الألمانية / العربية / الأزرار)
 *
 * ▸ التصميم المطلوب على الجوال: 3 بلوكات عمودية تحت بعضها في كل بوكس:
 *   1) الألمانية (كبيرة، خلفية مميزة)
 *   2) العربية + الشرح
 *   3) الأزرار (بطيء / استمع / انطقها)
 * ▸ تثبت الاختبارات:
 *   - البنية الثلاثية موجودة ومرتبة عمودياً (ألمانية فوق عربية فوق أزرار)
 *   - كل الأزرار داخل حدود البوكس على 320/360/390
 *   - لا تداخل ولا تمدد ولا فيضان
 */
import { test, expect, type Page } from "@playwright/test";

const WIDTHS = [320, 360, 390];

async function gotoPronSection(page: Page) {
  await page.goto("/lesson/a1-01");
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
  await page.reload();
  await page.waitForTimeout(1800);
  for (let i = 0; i < 5; i++) {
    await page.getByRole("button", { name: /التالي:/ }).last().click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await page.waitForTimeout(1200);
  await expect(page.locator("#lesson-step-content h2").first()).toContainText("النطق", { timeout: 8000 });
}

for (const w of WIDTHS) {
  test(`النطق ${w}px: البنية الثلاثية (ألمانية / عربية / أزرار) بلا تشوه`, async ({ page }) => {
    await page.setViewportSize({ width: w, height: 800 });
    await gotoPronSection(page);
    await page.locator("#lesson-step-content li").first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);

    const measure = await page.evaluate(() => {
      const li = document.querySelector("#lesson-step-content li");
      if (!li) return null;
      const children = [...li.children] as HTMLElement[];
      if (children.length < 3) return { ok: false as const, reason: `عدد البلوكات ${children.length} (متوقع 3)` };

      // الترتيب العمودي: ألمانية (0) فوق عربية (1) فوق أزرار (2)
      const tops = children.map((c) => c.getBoundingClientRect().top);
      const ordered = tops[0] < tops[1] && tops[1] < tops[2];

      // الكلمة الألمانية بخط كبير
      const deEl = children[0].querySelector("[lang='de']") as HTMLElement | null;
      const deFont = deEl ? parseFloat(getComputedStyle(deEl).fontSize) : 0;

      // الترجمة العربية في البلوك الأوسط
      const arHasEq = children[1].textContent?.includes("= ") ?? false;

      // الأزرار في البلوك الثالث، كلها داخل البوكس
      const lr = li.getBoundingClientRect();
      const btns = [...children[2].querySelectorAll("button")].filter((b) => b.offsetParent !== null);
      const btnTexts = btns.map((b) => (b.textContent ?? "").trim());
      let outside = 0;
      let tall = 0;
      for (const b of btns) {
        const r = b.getBoundingClientRect();
        if (r.right > lr.right + 2 || r.left < lr.left - 2) outside++;
        if (r.height > 45) tall++;
      }
      // لا تداخل أفقي بين الأزرار
      const ranges = btns.map((b) => b.getBoundingClientRect());
      let overlaps = 0;
      for (let i = 0; i < ranges.length - 1; i++) {
        for (let j = i + 1; j < ranges.length; j++) {
          if (ranges[i].right > ranges[j].left && ranges[j].right > ranges[i].left && Math.abs(ranges[i].top - ranges[j].top) < 8) overlaps++;
        }
      }

      return {
        ok: true as const,
        blocks: children.length,
        ordered,
        deFont: Math.round(deFont),
        arHasEq,
        btnTexts,
        outside,
        tall,
        overlaps,
        pageOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
      };
    });

    expect(measure, "لا يوجد بوكس كلمة في قسم النطق").not.toBeNull();
    if (!measure) return;
    expect(measure.ok, (measure as { reason: string }).reason ?? "").toBe(true);
    if (!measure.ok) return;

    // البنية الثلاثية
    expect(measure.blocks, "يجب أن يكون البوكس 3 بلوكات").toBe(3);
    expect(measure.ordered, "الترتيب يجب أن يكون: ألمانية فوق عربية فوق أزرار").toBe(true);
    // الكلمة الألمانية كبيرة (>=20px)
    expect(measure.deFont, `خط الألمانية ${measure.deFont}px — يجب أن يكون كبيراً`).toBeGreaterThanOrEqual(20);
    // الترجمة العربية موجودة
    expect(measure.arHasEq, "البلوك الأوسط يجب أن يحتوي الترجمة العربية").toBe(true);
    // الأزرار: بطيء + استمع + انطقها
    expect(measure.btnTexts, `الأزرار: ${measure.btnTexts.join(",")}`).toEqual(
      expect.arrayContaining(["بطيء", "استمع", "انطقها"]),
    );
    // لا خروج ولا تمدد ولا تداخل ولا فيضان
    expect(measure.outside, `أزرار خارج البوكس @${w}px`).toBe(0);
    expect(measure.tall, `أزرار متمدة @${w}px`).toBe(0);
    expect(measure.overlaps, `تداخل أزرار @${w}px`).toBe(0);
    expect(measure.pageOverflow, `فيضان صفحة @${w}px`).toBe(false);
  });
}

test("النطق: كل بوكس يعرض البنية الثلاثية كاملة", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await gotoPronSection(page);

  const boxes = page.locator("#lesson-step-content li");
  const count = await boxes.count();
  expect(count).toBeGreaterThanOrEqual(3);

  // كل بوكس: 3 أطفال (بلوكات)
  for (let i = 0; i < Math.min(3, count); i++) {
    const box = boxes.nth(i);
    const blocks = await box.locator(":scope > div").count();
    expect(blocks, `البوكس ${i + 1} يجب أن يحتوي 3 بلوكات`).toBe(3);
  }
});
