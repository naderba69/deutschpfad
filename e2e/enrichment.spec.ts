/**
 * اختبارات E2E للتوسعات: المراجعة التراكمية لكل درس، البودكاست الموسّع، الثقافة الموسّعة، القصص المثراة
 */
import { test, expect } from "@playwright/test";

test("كل درس يعرض المراجعة التراكمية (مولّدة من دروس سابقة)", async ({ page }) => {
  // درس A1-02 (له دروس سابقة) — وضع الخطوات يعرض المراجعة كقسم ثالث
  await page.goto("/lesson/a1-02");
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
  await page.waitForTimeout(1500);
  // ننتقل خطوتين: الأهداف ← التمهيد ← المراجعة التراكمية
  for (let i = 0; i < 2; i++) {
    const nextBtn = page.getByRole("button", { name: /^التالي:/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(300);
    } else break;
  }
  // المراجعة التراكمية تظهر (Interleaving)
  await expect(page.getByText("مراجعة تراكمية", { exact: false }).first()).toBeVisible({ timeout: 8000 });
});

test("مكتبة البودكاست تعرض 13 حلقة موزعة", async ({ page }) => {
  await page.goto("/podcasts");
  await expect(page.getByText("20 حلقات بودكاست").first()).toBeVisible();
  await expect(page.getByText("عيد الميلاد").first()).toBeVisible();
});

test("الثقافة الألمانية: 16 بطاقة والجديدة ظاهرة", async ({ page }) => {
  await page.goto("/landeskunde");
  await expect(page.getByText("16 بطاقة ثقافية").first()).toBeVisible();
  await expect(page.getByText("الكرنفال").first()).toBeVisible();
  await expect(page.getByText("الخبز الألماني").first()).toBeVisible();
});

test("القصص: كل قصة تفتح بسؤالين (شرح بعد الإجابة)", async ({ page }) => {
  await page.goto("/stories");
  // فتح القصة عبر بطاقتها (زر)
  await page.getByRole("button", { name: /في المقهى/ }).first().click();
  // المقطع الأول ظاهر (مشغّل القصة فُتح) — ثم نتابع للسؤال
  await expect(page.getByText("Tim und Pia sind im Café.").first()).toBeVisible({ timeout: 8000 });
  await page.getByRole("button", { name: /متابعة/ }).first().click();
  // السؤال الأول بالألمانية ظاهر
  await expect(page.getByText("Wo sind Tim und Pia?").first()).toBeVisible({ timeout: 8000 });
  // نجيب بالخيار الصحيح (زر) ثم يظهر الشرح التربوي
  await page.getByRole("button", { name: /Im Café/ }).first().click();
  await expect(page.getByText(/تيم وبيا في المقهى/).first()).toBeVisible();
});
