import { test, expect } from "@playwright/test";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبارات المرحلة 2 — ثراء الامتحان
 *  (مكتبة القراءة B2 · تدريب القواعد · الاستراتيجيات · خطة 12 شهراً)
 * ═══════════════════════════════════════════════════════════
 */

test("مكتبة القراءة B2: تعرض النصوص وتسمح بالتحقق", async ({ page }) => {
  await page.goto("/tests/lesen-b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByRole("heading", { name: /مكتبة القراءة B2/ })).toBeVisible();
  // أول نص مفتوح بأسئلته
  await expect(page.getByText(/Datenschutz im digitalen Zeitalter/).first()).toBeVisible();
  await expect(page.getByText("1", { exact: true }).first()).toBeVisible();
});

test("تدريب القواعد والمفردات B2: السؤال الأول يظهر والمؤقت يعمل", async ({ page }) => {
  await page.goto("/tests/b2-grammatik", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByText(/قواعد ومفردات B2 — 1\/60/)).toBeVisible();
  // سؤال قواعد أول: Konjunktiv I
  await expect(page.getByText(/Er sagte, er ___ keine Zeit/)).toBeVisible();
  // المؤقت
  await expect(page.getByText(/⏱ 5[0-9]:[0-9]{2}/)).toBeVisible();
});

test("تدريب القواعد: اختيار إجابة وتحقق يعرض الشرح", async ({ page }) => {
  await page.goto("/tests/b2-grammatik", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  // اختر الخيار الصحيح (A: habe)
  await page.getByRole("button", { name: "A habe" }).click();
  await page.getByRole("button", { name: "تحقق" }).click();
  await expect(page.getByText(/✓ إجابة صحيحة/)).toBeVisible();
});

test("استراتيجيات الامتحان: الأجزاء الثلاثة عشر ظاهرة", async ({ page }) => {
  await page.goto("/tests/strategien", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByRole("heading", { name: /استراتيجيات امتحان Goethe-B2/ })).toBeVisible();
  await expect(page.getByText(/القراءة \(Lesen\)/)).toBeVisible();
  await expect(page.getByText(/الاستماع \(Hören\)/)).toBeVisible();
  await expect(page.getByText(/الكتابة \(Schreiben\)/)).toBeVisible();
  await expect(page.getByText(/التحدث \(Sprechen\)/)).toBeVisible();
  await expect(page.getByText(/الفخاخ العشرة الذهبية/)).toBeVisible();
  await expect(page.getByText(/جدول إدارة الوقت/)).toBeVisible();
});

test("خطة 12 شهراً: المراحل الست ظاهرة", async ({ page }) => {
  await page.goto("/tests/plan-b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByRole("heading", { name: /خطة 12 شهراً/ })).toBeVisible();
  await expect(page.getByText("الشهران 1-2")).toBeVisible();
  await expect(page.getByText("الشهران 11-12")).toBeVisible();
  await expect(page.getByText("محاكاة B2 كاملة")).toBeVisible();
});

test("محرك B2: يعرض تنويهاً عن النماذج الثلاثة", async ({ page }) => {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await expect(page.getByText(/ثلاثة نماذج كاملة/)).toBeVisible();
});

test("مركز الاختبارات: الروابط الجديدة (قراءة، قواعد، استراتيجيات، خطة)", async ({ page }) => {
  await page.goto("/tests", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByText("مكتبة القراءة B2")).toBeVisible();
  await expect(page.getByText("تدريب القواعد والمفردات B2")).toBeVisible();
  await expect(page.getByText("استراتيجيات الامتحان — دليل كل Teil")).toBeVisible();
  await expect(page.getByText("خطة 12 شهراً → B2")).toBeVisible();
});
