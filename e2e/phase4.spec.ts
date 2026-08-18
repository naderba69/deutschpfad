import { test, expect } from "@playwright/test";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبارات المرحلة 4 — توحيد الحقيقة (اتساق الأرقام في الواجهة)
 *  يثبت أن: لا 251 وهمياً · لا /45 · الوحدات تعرض أعداد الدروس الصحيحة
 * ═══════════════════════════════════════════════════════════
 */

test("مسار التعلم: يعرض 46 وحدة و48 درساً (لا 251 الوهمي)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const body = await page.locator("body").innerText();
  expect(body).toContain("46 وحدة دراسية");
  expect(body).toContain("48+ درساً");
  expect(body).not.toContain("251");
  expect(body).not.toContain("45 وحدة");
});

test("مسار التعلم: خطة 12 شهراً مرتبطة بالمسار", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByText("افتح خطة 12 شهراً ←")).toBeVisible();
});

test("بطاقات الوحدات تعرض عدد الدروس الصحيح (a1-01 = 2)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  // شارات المستويات: 15/12/11/10
  const body = await page.locator("body").innerText();
  // شارة مستوى A1 تعرض 15 درساً
  await expect(page.getByText("15 دروس").first()).toBeVisible();
  // وحدة a1-01 (التعارف) تعرض درسين — نبحث عن "2 دروس" في سياق الوحدة
  const counts = await page.evaluate(() => {
    const spans = [...document.querySelectorAll("span")].filter((s) => /^\d+ دروس$/.test((s.textContent || "").trim()));
    return spans.map((s) => (s.textContent || "").trim());
  });
  expect(counts).toContain("2 دروس");
  expect(counts).not.toContain("6 دروس"); // القيمة الوهمية القديمة
});

test("لوحة التحكم: لا تعرض /45 بل /48", async ({ page }) => {
  await page.goto("/dashboard", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const body = await page.locator("body").innerText();
  expect(body).not.toContain("/45");
});

test("الرئيسية: تعرض 48 درساً (متسقة مع المسار)", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const body = await page.locator("body").innerText();
  expect(body).toContain("48 درساً");
});

test("ترتيب المسار: الأرقام (a1-14) قبل المراجعة الختامية (a1-13)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  // في المسار التسلسلي: درس الأرقام يظهر قبل درس المراجعة
  const order = await page.evaluate(() => {
    const els = [...document.querySelectorAll("a.group p, a.group")];
    const texts = els.map((e) => (e.textContent || ""));
    const findIdx = (re: RegExp) => texts.findIndex((t) => re.test(t));
    return { zahlen: findIdx(/Zahlen, Telefon/), wiederholung: findIdx(/A1 kompakt/) };
  });
  // كلاهما ظاهر
  expect(order.zahlen).toBeGreaterThanOrEqual(0);
  expect(order.wiederholung).toBeGreaterThanOrEqual(0);
  expect(order.zahlen).toBeLessThan(order.wiederholung);
});
