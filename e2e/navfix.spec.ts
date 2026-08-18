/**
 * اختبارات E2E: إصلاح التنقل داخل الدرس (جذر المشكلة)
 *
 * ▸ قبل الإصلاح: overflow-x-hidden على حاوية التخطيط كان يكسر
 *   كل position:sticky في التطبيق → شريط التقدم وشريط «التالي»
 *   يختفيان أثناء التمرير، فيبقى المستخدم تائهاً في منتصف القسم
 *   ولا يصل أبداً «لأول المحتوى» عند الضغط على «التالي».
 *
 * الاختبارات هنا تتحقق من ثلاث ركائز على مقاس جوال حقيقي:
 *  1) الشريطان اللاصقان (التقدم + السابق/التالي) يلتصقان فعلاً أثناء التمرير.
 *  2) زر «التالي» لا يتداخل مع شريط التنقل السفلي للجوال (MobileBottomNav).
 *  3) الضغط على «التالي» ينقل تلقائياً لأول محتوى القسم الجديد.
 */
import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";

const MOBILE = { width: 390, height: 844 };

async function resetStorage(page: Page) {
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

async function openLesson(page: Page, id = "a1-01") {
  await page.goto(`/lesson/${id}`);
  await resetStorage(page);
  await page.reload();
  await page.waitForTimeout(1500);
  await expect(page.getByText("الأهداف التعليمية", { exact: false }).first()).toBeVisible({ timeout: 8000 });
}

test("الدرس: شريط التقدم وشريط «السابق/التالي» يلتصقان أثناء التمرير (إصلاح sticky)", async ({ page }) => {
  await page.setViewportSize(MOBILE);
  await openLesson(page);

  // نمرّر لمسافة كافية داخل القسم الأول
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(700);

  const measure = await page.evaluate(() => {
    const progressBar = [...document.querySelectorAll("div")].find(
      (d) => d.className.toString().includes("sticky top-16") && d.textContent?.includes("/"),
    );
    const bottomBar = [...document.querySelectorAll("div")].find(
      (d) => d.className.toString().includes("sticky bottom") && d.textContent?.includes("التالي"),
    );
    const nav = document.querySelector('nav[aria-label="التنقل السفلي"]');
    return {
      progress: progressBar ? Math.round(progressBar.getBoundingClientRect().top) : null,
      bottomBarTop: bottomBar ? Math.round(bottomBar.getBoundingClientRect().top) : null,
      bottomBarBottom: bottomBar ? Math.round(bottomBar.getBoundingClientRect().bottom) : null,
      navTop: nav ? Math.round(nav.getBoundingClientRect().top) : null,
      innerH: window.innerHeight,
    };
  });

  // شريط التقدم يجب أن يكون لاصقاً تحت الهيدر مباشرة (~64px)
  expect(measure.progress, `شريط التقدم لاصق عند ${measure.progress}px (متوقع ~64px)`).not.toBeNull();
  expect(measure.progress!).toBeGreaterThan(40);
  expect(measure.progress!).toBeLessThan(130);

  // شريط «السابق/التالي» يجب أن يكون لاصقاً قرب أسفل الشاشة (فوق ناف الجوال)
  expect(measure.bottomBarTop, "شريط السابق/التالي يجب أن يلتصق أسفل الشاشة").not.toBeNull();
  expect(measure.bottomBarTop!).toBeGreaterThan(measure.innerH - 220);
  expect(measure.bottomBarTop!).toBeLessThan(measure.innerH - 10);
});

test("الدرس: زر «التالي» في الشريط السفلي لا يتداخل مع شريط التنقل السفلي للجوال", async ({ page }) => {
  await page.setViewportSize(MOBILE);
  await openLesson(page);

  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(700);

  const measure = await page.evaluate(() => {
    const nav = document.querySelector('nav[aria-label="التنقل السفلي"]');
    if (!nav) return { ok: false as const, reason: "شريط التنقل السفلي غير موجود" };
    const navTop = Math.round(nav.getBoundingClientRect().top);

    // زر «التالي» الظاهر داخل الشريط اللاصق السفلي
    const stuckBtn = [...document.querySelectorAll("button")].find((b) => {
      const t = b.textContent ?? "";
      if (!t.includes("التالي")) return false;
      if (b.offsetParent === null) return false;
      const r = b.getBoundingClientRect();
      // ظاهر ضمن منطقة الشريط السفلي اللاصق فقط
      return r.top > window.innerHeight - 260 && r.bottom <= window.innerHeight + 8;
    });
    if (!stuckBtn) return { ok: false as const, reason: "لا يوجد زر «التالي» ظاهر في الشريط اللاصق" };

    const r = stuckBtn.getBoundingClientRect();
    return {
      ok: true as const,
      barButtonBottom: Math.round(r.bottom),
      navTop,
      gap: Math.round(navTop - r.bottom),
    };
  });

  expect(measure.ok, measure.ok ? undefined : (measure as { reason: string }).reason).toBe(true);
  if (!measure.ok) return;

  // زر «التالي» ينتهي فوق الناف — المسافة موجبة (لا تداخل)
  expect(
    measure.gap,
    `أسفل زر التالي = ${measure.barButtonBottom}px، أعلى الناف = ${measure.navTop}px — يجب أن يفصل بينهما فراغ موجب`,
  ).toBeGreaterThanOrEqual(0);
});

test("الدرس: الضغط على «التالي» ينقل تلقائياً لأول محتوى القسم الجديد", async ({ page }) => {
  await page.setViewportSize(MOBILE);
  await openLesson(page);

  // ننزل قليلاً ثم نضغط «التالي» من الشريط اللاصق السفلي
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(400);

  const nextBtn = page.getByRole("button", { name: /التالي:/ }).last();
  await expect(nextBtn).toBeVisible();
  await nextBtn.click();
  await page.waitForTimeout(1100);

  // القسم الثاني (التمهيد) ظاهر
  await expect(page.getByText("التمهيد وتنشيط", { exact: false }).first()).toBeVisible({ timeout: 6000 });

  // ═══ التحقق الأساسي: بطاقة القسم الجديد في «أول المحتوى» (قرب أعلى الشاشة)
  const y = await page.evaluate(() => {
    const el = document.getElementById("lesson-step-content");
    return el ? Math.round(el.getBoundingClientRect().top) : -9999;
  });
  expect(y, `موضع بطاقة القسم بعد «التالي» = ${y}px (يجب أن يكون قرب أعلى الشاشة)`).toBeGreaterThan(-20);
  expect(y, `موضع بطاقة القسم بعد «التالي» = ${y}px (يجب ألا يبقى في منتصف الصفحة)`).toBeLessThan(230);
});
