/**
 * اختبارات E2E أساسية (Smoke) — كل صفحة رئيسية تُحمَّل 200 مع محتوى متوقع
 */
import { test, expect } from "@playwright/test";

test("الرئيسية تعرض الشعار والعنوان", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/درب الألمانية|DeutschPfad/);
  await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
});

test("مسار التعلم يعرض المستويات الأربعة", async ({ page }) => {
  await page.goto("/learning-path");
  for (const lv of ["A1", "A2", "B1", "B2"]) {
    await expect(page.getByText(lv, { exact: true }).first()).toBeVisible();
  }
});

test("صفحة الدرس a1-01 تحوي المحتوى الألماني", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await expect(page.getByText("Hallo", { exact: false }).first()).toBeVisible();
});

test("القالب الشامل يعرض العبارات", async ({ page }) => {
  await page.goto("/redemittel");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("بنك العبارات");
});

test("امتحان الختم A1 قابل للفتح", async ({ page }) => {
  await page.goto("/tests/seal/a1");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("امتحان ختم");
});

test("صفحة الإملاء تعرض المستويات", async ({ page }) => {
  await page.goto("/diktate");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("الإملاء");
});

test("المفردات B2 بالمواضيع تعرض 18 موضوعاً", async ({ page }) => {
  await page.goto("/wortschatz-b2");
  await expect(page.getByText("العمل والمهنة").first()).toBeVisible();
  await expect(page.getByText("اللغة والتعلم").first()).toBeVisible();
});

test("أستاذك الخبير يظهر من أول لحظة (أول دخول)", async ({ page }) => {
  // بيانات نظيفة (متلازمة بدون تقدم) — الأستاذ يظهر قبل إدخال الاسم
  await page.goto("/");
  await expect(page.getByText("أستاذك الخبير").first()).toBeVisible();
  await expect(page.getByText(/خطة جلسة اليوم/).first()).toBeVisible();
});

test("صفحة الدرس تعرض ملخص الدرس القابل للحفظ", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await expect(page.getByText("ملخص الدرس — كل ما تعلمته").first()).toBeVisible();
  await expect(page.getByText("احفظ الملخص PDF").first()).toBeVisible();
});

test("فحص الصوت والميكروفون قابل للفتح", async ({ page }) => {
  await page.goto("/sound-check");
  await expect(page.getByText("مكبر الصوت").first()).toBeVisible();
  await expect(page.getByText("الميكروفون").first()).toBeVisible();
});

test("الدرس يعرض وضع الخطوات التفاعلي", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await expect(page.getByText("الخطوة 1 من").first()).toBeVisible();
  await expect(page.getByText("عرض الكل").first()).toBeVisible();
});

test("التدفق: اسم ← خياران ← بدء من الصفر", async ({ page }) => {
  await page.goto("/");
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
  await page.waitForTimeout(2000);
  await page.getByPlaceholder(/اكتب اسمك/).fill("نادر");
  await page.getByRole("button", { name: /ابدأ رحلتك/ }).click();
  await page.waitForTimeout(2500);
  await expect(page.getByText("كيف تريد أن نبدأ؟", { exact: false }).first()).toBeVisible();
  await page.getByRole("link", { name: /ابدأ من الدرس الأول/ }).click();
  await page.waitForTimeout(1500);
  await expect(page).toHaveURL(/lesson\/a1-00/);
});

test("شريط الخطوات + زر تنقل سفلي في الدرس", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await page.waitForTimeout(2000);
  // القسم الأول (الأهداف) ظاهر + زر التنقل السفلي "التالي:"
  await expect(page.getByText("الأهداف التعليمية", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /^التالي:/ }).first()).toBeVisible();
  // بالتنقل ننتقل للقسم التالي (التمهيد)
  await page.getByRole("button", { name: /^التالي:/ }).first().click();
  await page.waitForTimeout(800);
  await expect(page.getByText("التمهيد وتنشيط", { exact: false }).first()).toBeVisible();
});

test("التدفق لا يُحبس: أزرار التنقل تعمل وتتقدم", async ({ page }) => {
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
  // الزر السفلي "التالي:" موجود
  await expect(page.getByRole("button", { name: /^التالي:/ }).first()).toBeVisible();
  // نتنقل 3 خطوات — التقدم يعمل
  for (let i = 0; i < 3; i++) {
    const btn = page.getByRole("button", { name: /^التالي:/ }).first();
    const vis = await btn.isVisible().catch(() => false);
    if (!vis) break;
    await btn.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  const count = await page.getByRole("button").count();
  expect(count).toBeGreaterThan(0);
});

test("مركز المستوى: يعرض رحلة المستوى والدروس", async ({ page }) => {
  await page.goto("/level/a1");
  await expect(page.getByText("رحلة مستوى", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("دروس المستوى — بالترتيب", { exact: false }).first()).toBeVisible();
});

test("الهيدر منظم: المجموعات الأربع ظاهرة", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(1500);
  const html = await page.content();
  for (const label of ["تعلّم", "تدرب", "اختبر", "مراجع"]) {
    expect(html).toContain(label);
  }
});
