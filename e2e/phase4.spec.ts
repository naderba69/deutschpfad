import { test, expect } from "@playwright/test";

import { LESSON_META } from "@/data/lessons/meta";
import { TOTAL_LESSONS, TOTAL_UNITS } from "@/lib/constants/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبارات المرحلة 4 — توحيد الحقيقة (اتساق الأرقام في الواجهة)
 *  يثبت أن: لا 251 وهمياً · لا /45 · الوحدات تعرض أعداد الدروس الصحيحة
 *
 *  الأرقام لم تعد تُكتب في الاختبار: تُشتقّ من `LESSON_META` وثوابت
 *  المنهج، فلا يتعفّن الاختبار عند إضافة درس (كان يثبّت 46/48 قديماً
 *  فيسقط بلا سبب حقيقي).
 * ═══════════════════════════════════════════════════════════
 */

test("مسار التعلم: الأرقام مطابقة للمنهج الفعلي (لا 251 الوهمي)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const body = await page.locator("body").innerText();
  expect(body).toContain(`${TOTAL_UNITS} وحدة`);
  expect(body).toContain(`${TOTAL_LESSONS} درساً`);
  expect(body).not.toContain("251");
  expect(body).not.toContain("45 وحدة");
});

test("مسار التعلم: خطة 12 شهراً مرتبطة بالمسار", async ({ page }) => {
  // بطاقة «خطة 12 شهراً → B2» في مركز الاختبارات تقود إلى صفحة الخطة
  await page.goto("/tests", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByText("خطة 12 شهراً", { exact: false }).first()).toBeVisible();
  const planLink = page.getByRole("link", { name: /خطط رحلتك/ }).first();
  await expect(planLink).toBeVisible();
  await planLink.click();
  await expect(page).toHaveURL(/\/tests\/plan-b2/);
  for (const stage of ["الشهران 1-2", "الشهران 11-12"]) {
    await expect(page.getByText(stage).first()).toBeVisible();
  }
});

test("بطاقات الوحدات تعرض عدد الدروس الصحيح (a1-01 = 2)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  // شارات المستويات = عدد دروس كل مستوى (مشتق من LESSON_META)
  const perLevel = ["A1", "A2", "B1", "B2"].map((lv) => LESSON_META.filter((l) => l.level === lv).length);
  const counts = await page.evaluate(() => {
    const spans = [...document.querySelectorAll("span")].filter((s) => /^\d+ دروس$/.test((s.textContent || "").trim()));
    return spans.map((s) => (s.textContent || "").trim());
  });
  for (const n of perLevel) {
    expect(counts, `شارة المستوى (${n} دروس) مفقودة — المعروض: ${counts.join(", ")}`).toContain(`${n} دروس`);
  }
  // وحدة a1-01 (التعارف) تعرض درسين
  expect(counts).toContain("2 دروس");
  // لا عودة لقيم وهمية سابقة
  expect(counts).not.toContain("6 دروس");
  expect(counts).not.toContain("15 دروس");
});

test("لوحة التحكم: لا تعرض /45", async ({ page }) => {
  await page.goto("/dashboard", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const body = await page.locator("body").innerText();
  expect(body).not.toContain("/45");
});

test("الرئيسية: تعرض عدد الدروس نفسه المعروض في المسار", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const home = await page.locator("body").innerText();
  expect(home).toContain(`${TOTAL_LESSONS} درساً`);
  expect(home, "شريط الإحصائيات يعرض عدداً قديماً للوحدات").not.toContain("44 وحدة دراسية");
  expect(home, "شريط الإحصائيات يعرض عدداً قديماً للدروس").not.toContain("240+ درس");
});

test("ترتيب المسار: ترتيب الدروس يطابق ترتيب الفهرس (a1-14 قبل a1-13)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  // عناوين الدروس الألمانية معروضة على المسار — نقارن موضعيْ الدرسين من الفهرس
  const before = LESSON_META.find((l) => l.id === "a1-14")!;
  const after = LESSON_META.find((l) => l.id === "a1-13")!;
  const order = await page.evaluate(
    ([a, b]) => {
      const els = [...document.querySelectorAll("a.group p, a.group")];
      const texts = els.map((e) => e.textContent || "");
      return {
        first: texts.findIndex((t) => t.includes(a)),
        second: texts.findIndex((t) => t.includes(b)),
      };
    },
    [before.titleDe, after.titleDe],
  );
  // كلاهما ظاهر، ودرس الأرقام قبل درس المراجعة الختامية
  expect(order.first, `لم يظهر «${before.titleDe}» على المسار`).toBeGreaterThanOrEqual(0);
  expect(order.second, `لم يظهر «${after.titleDe}» على المسار`).toBeGreaterThanOrEqual(0);
  expect(order.first).toBeLessThan(order.second);
});
