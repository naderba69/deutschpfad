import { test, expect } from "@playwright/test";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبارات المرحلة 4 — توحيد الحقيقة (اتساق الأرقام في الواجهة)
 *  يثبت أن: لا 251 وهمياً · لا /45 · الوحدات تعرض أعداد الدروس الصحيحة
 * ═══════════════════════════════════════════════════════════
 */

test("مسار التعلم: يعرض 49 وحدة و54 درساً من فهرس الدروس (لا 251 الوهمي)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const body = await page.locator("body").innerText();
  expect(body).toContain("49 وحدة");
  expect(body).toContain("54 درساً");
  expect(body).not.toContain("251");
  expect(body).not.toContain("45 وحدة");
});

test("مسار التعلم: خطة 12 شهراً مرتبطة بالمسار", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByText("اعرض مثالاً لجدول التدريب ←")).toBeVisible();
});

test("بطاقات الوحدات تعرض عدد الدروس الصحيح (A1 = 16)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  // أعداد A1/B1/B2 هي 16/12/11؛ نتحقق من شارة A1 ومن وجود وحدة بثلاثة دروس.
  await expect(page.getByText("16 دروس").first()).toBeVisible();
  // الوحدة a1-01 تضم درس التعارف وجزأه الإضافي؛ نبحث عن شارة «3 دروس»
  const counts = await page.evaluate(() => {
    const spans = [...document.querySelectorAll("span")].filter((s) => /^\d+ دروس$/.test((s.textContent || "").trim()));
    return spans.map((s) => (s.textContent || "").trim());
  });
  expect(counts).toContain("3 دروس");
  expect(counts).not.toContain("6 دروس"); // القيمة الوهمية القديمة
});

test("الرئيسية: تعرض صياغة الإتاحة الحالية لا وعداً مجانياً مطلقاً", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const body = await page.locator("body").innerText();
  expect(body).toContain("التدريبات الأساسية متاحة حالياً دون اشتراك مدفوع");
  expect(body).not.toContain("مجاناً 100%");
});

test("لوحة التحكم: لا تعرض إجماليات قديمة /45 أو /48", async ({ page }) => {
  await page.goto("/dashboard", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const body = await page.locator("body").innerText();
  expect(body).not.toContain("/45");
  expect(body).not.toContain("/48");
});

test("الرئيسية: تعرض 54 درساً (متسقة مع المسار)", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const body = await page.locator("body").innerText();
  await expect(page.getByText("54", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("درس تفاعلي", { exact: true })).toBeVisible();
});

test("ترتيب المسار: درس التسوق والأرقام (a1-07) قبل المراجعة الختامية (a1-13)", async ({ page }) => {
  await page.goto("/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  // نقارن ترتيب رابطَي الدرس الفعليين، لا نص عنوان قديم.
  const order = await page.evaluate(() => {
    const links = [...document.querySelectorAll<HTMLAnchorElement>('a[href^="/lesson/"]')];
    return {
      shopping: links.findIndex((link) => (link.getAttribute("href") ?? "").endsWith("/a1-07")),
      review: links.findIndex((link) => (link.getAttribute("href") ?? "").endsWith("/a1-13")),
    };
  });
  expect(order.shopping).toBeGreaterThanOrEqual(0);
  expect(order.review).toBeGreaterThanOrEqual(0);
  expect(order.shopping).toBeLessThan(order.review);
});
