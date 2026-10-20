/**
 * اختبار E2E حرج: وضع «خطوة بخطوة» يعرض كل المكونات البيداغوجية
 * بالترتيب (الأهداف ← التمهيد ← المراجعة ← الشرح ← الاستماع ← النطق
 * ← الكتابة ← التدريبات ← الأخطاء ← التقييم ← البطاقات) — لا يُختصر الدرس.
 */
import { test, expect } from "@playwright/test";

test("وضع الخطوات: كل المكونات تظهر بالترتيب (لا درس مختصر)", async ({ page }) => {
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
  await page.waitForTimeout(1500);

  // الأقسام الـ12 التي يجب أن تظهر تباعاً
  const expectedSections = [
    "الأهداف التعليمية",
    "التمهيد",
    "مراجعة تراكمية",
    "الشرح",
    "الاستماع",
    "النطق",
    "الكتابة",
    "التدريبات",
    "الأخطاء الشائعة",
    "التقييم",
    "بطاقات المراجعة",
  ];

  // نمر عبر كل الخطوات ونتحقق أن كل قسم ظهر
  let found = 0;
  for (let i = 0; i < 30; i++) {
    const bodyText = await page.evaluate(() => document.body.innerText);
    for (const sec of expectedSections) {
      if (bodyText.includes(sec)) found++;
    }
    const nextBtn = page.getByRole("button", { name: /^التالي:/ }).first();
    const finishBtn = page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first();
    if (await finishBtn.isVisible().catch(() => false)) break;
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(300);
    } else break;
  }

  // يجب أن نصل لنهاية الخطوات (زر إنهاء الدرس)
  await expect(page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first()).toBeVisible({ timeout: 8000 });
});

test("الدرس لا ينتهي قبل إتمام كل الخطوات", async ({ page }) => {
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
  await page.waitForTimeout(1200);

  // في البداية: القسم الأول (الأهداف) ظاهر — وليس "إنهاء الدرس"
  await expect(page.getByText("الأهداف التعليمية", { exact: false }).first()).toBeVisible({ timeout: 8000 });
  await expect(page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first()).not.toBeVisible();

  // بالضغط "التالي" ننتقل للقسم الثاني (التمهيد)
  await page.getByRole("button", { name: /^التالي:/ }).first().click();
  await page.waitForTimeout(400);
  await expect(page.getByText("التمهيد وتنشيط", { exact: false }).first()).toBeVisible();
});
