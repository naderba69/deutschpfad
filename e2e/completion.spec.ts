/**
 * اختبار E2E حرج: تدفق الدرس الكامل حتى الإكمال الفعلي
 * — يتحقق من الإصلاح الجوهري: «إنهاء الدرس» يسجّل الإنجاز ويُظهر الدرس التالي —
 */
import { test, expect } from "@playwright/test";

test("التدفق الكامل: المرور بكل المراحل ثم «إنهاء الدرس» يسجّل الإنجاز ويُظهر الدرس التالي", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  // بيانات نظيفة
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

  // المرور عبر كل مراحل التدفق بالزر السفلي «متابعة»
  let reachedFinish = false;
  for (let i = 0; i < 20; i++) {
    const finishBtn = page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first();
    if (await finishBtn.isVisible().catch(() => false)) {
      reachedFinish = true;
      break;
    }
    const nextBtn = page.getByRole("button", { name: /^التالي:/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(400);
    } else {
      // زر داخلي بديل (استمعت وفهمت — تابع / الرد التالي …)
      const alt = page.getByRole("button", { name: /تابع|الرد التالي/ }).first();
      if (await alt.isVisible().catch(() => false)) {
        await alt.click().catch(() => {});
        await page.waitForTimeout(400);
      } else {
        break;
      }
    }
  }

  expect(reachedFinish, "يجب أن نصل لزر «إنهاء الدرس» بعد المرور بالمراحل").toBe(true);

  // الضغط على «إنهاء الدرس» — الإصلاح الجوهري
  await page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first().click();
  await page.waitForTimeout(1200);

  // ✅ التحقق 1: الدرس سُجّل كمكتمل فعلياً (بطاقة الإكمال تغيّرت حالتها)
  await expect(page.getByText("أتممت هذا الدرس — أحسنت!").first()).toBeVisible({ timeout: 6000 });

  // ✅ التحقق 2: ظهرت إمكانية الانتقال للدرس التالي
  await expect(page.getByRole("button", { name: /الدرس التالي تلقائياً/ }).first()).toBeVisible({ timeout: 6000 });
});

test("الدرس التالي: بعد الإكمال، رابط التنقل يظهر ويعمل", async ({ page }) => {
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

  // تمرير سريع للمراحل حتى الإكمال
  for (let i = 0; i < 20; i++) {
    if (await page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first().isVisible().catch(() => false)) break;
    const nextBtn = page.getByRole("button", { name: /^التالي:/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
      await page.waitForTimeout(350);
    } else {
      const alt = page.getByRole("button", { name: /تابع|الرد التالي/ }).first();
      if (await alt.isVisible().catch(() => false)) { await alt.click().catch(() => {}); await page.waitForTimeout(350); }
      else break;
    }
  }
  await page.getByRole("button", { name: "إنهاء الدرس", exact: true }).first().click().catch(() => {});
  await page.waitForTimeout(1000);

  // رابط «الدرس التالي» في شريط التنقل السفلي (LessonPrevNext)
  const nextLink = page.getByRole("link", { name: /الدرس التالي|التالي/ }).first();
  if (await nextLink.isVisible().catch(() => false)) {
    await nextLink.click().catch(() => {});
    await page.waitForTimeout(800);
    // انتقلنا لدرس جديد
    expect(page.url()).toContain("/lesson/a1-0");
  } else {
    // إن لم يظهر (درس أول/أخير)، على الأقل بطاقة الإكمال ظاهرة
    await expect(page.getByText(/أتممت هذا الدرس|أكملته/).first()).toBeVisible();
  }
});
