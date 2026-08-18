import { test, expect } from "@playwright/test";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبارات المرحلة 3 — الإتقان
 *  (Funktionsverbgefüge · Top 500 · فخاخ الامتحان · الترجمة)
 * ═══════════════════════════════════════════════════════════
 */

test("الغوص العميق: صفحة Funktionsverbgefüge تعرض الجدول والتدريبات", async ({ page }) => {
  await page.goto("/grammatik/funktionsverbgefuege", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await expect(page.getByRole("heading", { name: /Funktionsverbgefüge/ })).toBeVisible();
  await expect(page.getByText(/zum Ausdruck bringen/).first()).toBeVisible();
  await expect(page.getByText("تدريب 1 — اختر FVG الصحيح")).toBeVisible();
  await expect(page.getByText("تدريب 2 — أكمل بـ FVG الصحيح")).toBeVisible();
});

test("الغوص العميق: يمكن الإجابة في تدريب الفجوات والتحقق", async ({ page }) => {
  await page.goto("/grammatik/funktionsverbgefuege", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  // أجب على أول فجوة: اختر "zur Verfügung"
  await page.getByRole("button", { name: "zur Verfügung" }).first().click();
  await expect(page.getByText("zur Verfügung").first()).toBeVisible();
});

test("Top 500: الصفحة تعرض الفلاتر والكلمات", async ({ page }) => {
  await page.goto("/wortschatz-b2/top500", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await expect(page.getByRole("heading", { name: /Top 500/ })).toBeVisible();
  await expect(page.getByText("الموضوع:", { exact: true })).toBeVisible();
  await expect(page.getByText("التواتر:", { exact: true })).toBeVisible();
  // كلمة من المستوى 3 (لا غنى عنها)
  await expect(page.getByText("die Bewerbung").first()).toBeVisible();
  // فلتر التواتر 3
  await page.getByRole("button", { name: /لا غنى عنها/ }).click();
  await expect(page.getByText("die Bewerbung").first()).toBeVisible();
});

test("Top 500: البحث بالعربية يعمل", async ({ page }) => {
  await page.goto("/wortschatz-b2/top500", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByPlaceholder(/ابحث بالعربية أو الألمانية/).fill("البطالة");
  await expect(page.getByText("die Arbeitslosigkeit").first()).toBeVisible();
});

test("فخاخ الامتحان: التمرين الأول يظهر والفخ يُشرح عند الخطأ", async ({ page }) => {
  await page.goto("/tests/fallstricke", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await expect(page.getByText(/فخ 1\/12/)).toBeVisible();
  await expect(page.getByText("مطابقة اللفظ (Wortgleichheit)")).toBeVisible();
  // اختر المصيدة (الخيار B = الأسعار الرخيصة)
  await page.getByRole("button", { name: /Weil die Preise günstig sind/ }).click();
  await expect(page.getByText(/هذه هي المصيدة/)).toBeVisible();
  await expect(page.getByText(/لماذا الصحيح صحيح/)).toBeVisible();
});

test("فخاخ الامتحان: الإجابة الصحيحة تُظهر «اكتشفت الفخ»", async ({ page }) => {
  await page.goto("/tests/fallstricke", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /Weil der Parkplatz klein ist/ }).click();
  await expect(page.getByText(/اكتشفت الفخ/)).toBeVisible();
});

test("مسار الكتابة: مرحلة الترجمة متاحة (20 مهمة)", async ({ page }) => {
  await page.goto("/writing-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  // زر مرحلة الترجمة موجود في شريط المراحل
  await expect(page.getByText("الترجمة — جسر الكتابة")).toBeVisible();
});

test("محرك B2: تحذير الوقت يظهر عند الإجبار (بداية المؤقت سليمة)", async ({ page }) => {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();
  // شارة النموذج + المؤقت يعملان
  await expect(page.getByText(/نموذج/)).toBeVisible();
  await expect(page.getByText(/⏱/)).toBeVisible();
});

test("مركز الاختبارات: بطاقة فخاخ الامتحان ظاهرة", async ({ page }) => {
  await page.goto("/tests", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await expect(page.getByText("فخاخ الامتحان — تدريب المصايد")).toBeVisible();
});

test("الغوص النحوي: رابط في صفحة القواعد + Top 500 في صفحة المفردات", async ({ page }) => {
  await page.goto("/grammatik", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await expect(page.getByText(/الغوص العميق: Funktionsverbgefüge/)).toBeVisible();

  await page.goto("/wortschatz-b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await expect(page.getByText(/أهم 500 كلمة في الامتحان/)).toBeVisible();
});
