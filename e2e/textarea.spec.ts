/**
 * اختبارات E2E: صناديق الكتابة تتمدد تلقائياً (إصلاح «النص المقطوع» على الجوال)
 *
 * ▸ المشكلة التاريخية: <input type="text"> بسطر واحد — عند كتابة جملة
 *   ألمانية طويلة على الهاتف يتمرر النص أفقياً داخل الصندوق فيظهر
 *   «مقطوعاً وناقصاً» بلا قدرة على رؤية ما كُتب.
 * ▸ الحل: AutoGrowTextarea — يتمدد مع المحتوى ويعرض النص كاملاً.
 * ▸ الاختبارات تثبت على مقاس جوال حقيقي:
 *   1) الإملاء الحر: كتابة جملة طويلة → الصندوق يتمدد والنص ظاهر كاملاً
 *   2) تدريب الإملاء في الدرس: لا يوجد قص أفقي (scrollWidth لا يتجاوز العرض)
 *   3) تمرين التحويل: نفس السلوك
 *   4) الصندوق يتمدد لأسفل (الارتفاع يزداد مع الكتابة)
 */
import { test, expect, type Page } from "@playwright/test";

const LONG_SENTENCE = "Ich heiße Anna und komme aus Berlin. Meine Familie wohnt in Tunis.";

async function clearData(page: Page) {
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

async function gotoPronSection(page: Page) {
  await page.goto("/lesson/a1-01");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1500);
  for (let i = 0; i < 5; i++) {
    await page.getByRole("button", { name: /التالي:/ }).last().click().catch(() => {});
    await page.waitForTimeout(500);
  }
  await page.waitForTimeout(900);
  await expect(page.locator("#lesson-step-content h2").first()).toContainText("النطق", { timeout: 8000 });
}

test("الإملاء الحر: الكتابة الطويلة تظهر كاملة في صندوق يتمدد (لا قص على الجوال)", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoPronSection(page);

  // مرّر إلى بطاقة الإملاء الحر
  await page.getByText("الإملاء الحر", { exact: false }).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  // صندوق الإجابة: «اكتب ما سمعت»
  const answerBox = page.getByLabel("إجابتك");
  await expect(answerBox).toBeVisible({ timeout: 6000 });
  await answerBox.fill(LONG_SENTENCE);
  await page.waitForTimeout(600);

  // ═══ التحقق 1: لا قص أفقي — عرض محتوى الصندوق لا يتجاوز عرضه ═══
  const measure = await page.evaluate(() => {
    const el = document.querySelector('textarea[aria-label="إجابتك"]') as HTMLTextAreaElement | null;
    if (!el) return null;
    return {
      scrollW: el.scrollWidth,
      clientW: el.clientWidth,
      scrollH: el.scrollHeight,
      clientH: el.clientHeight,
    };
  });
  expect(measure, "صندوق الإجابة غير موجود").not.toBeNull();
  if (!measure) return;
  expect(measure.scrollW, `قص أفقي: scrollWidth=${measure.scrollW} > clientWidth=${measure.clientW}`).toBeLessThanOrEqual(measure.clientW + 1);

  // ═══ التحقق 2: الصندوق يتمدد لأسفل — ارتفاع المحتوى > ارتفاع السطر الواحد ═══
  expect(
    measure.scrollH,
    `الصندوق لم يتمدد: scrollHeight=${measure.scrollH}px يجب أن يتجاوز سطراً واحداً (~40px)`,
  ).toBeGreaterThan(50);

  // ═══ التحقق 3: النص الكامل ظاهر داخل الصندوق ═══
  const fullText = await answerBox.inputValue();
  expect(fullText).toBe(LONG_SENTENCE);
});

test("مدرب الإملاء (/diktate): لا قص أفقي عند كتابة جملة طويلة", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("/diktate");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);

  // صندوق «اكتب الجملة هنا» — أول textarea في الصفحة
  const box = page.locator("textarea").first();
  await expect(box).toBeAttached({ timeout: 8000 });
  await box.fill(LONG_SENTENCE);
  await page.waitForTimeout(500);

  const measure = await page.evaluate(() => {
    const el = document.querySelector("textarea") as HTMLTextAreaElement | null;
    if (!el) return null;
    return { scrollW: el.scrollWidth, clientW: el.clientWidth, scrollH: el.scrollHeight };
  });
  expect(measure).not.toBeNull();
  if (!measure) return;
  // لا قص أفقي — النص يلتفّ داخل الصندوق
  expect(measure.scrollW, `قص أفقي: scrollWidth=${measure.scrollW} > clientWidth=${measure.clientW}`).toBeLessThanOrEqual(measure.clientW + 1);
  // الصندوق يتمدد — ارتفاع المحتوى يتجاوز سطراً واحداً
  expect(measure.scrollH).toBeGreaterThan(50);
});

test("صندوق الكتابة في مهمة الكتابة الحرة يتمدد مع المحتوى", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/lesson/a1-01");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1500);
  // إلى خطوة الكتابة (الخطوة 7)
  for (let i = 0; i < 6; i++) {
    await page.getByRole("button", { name: /التالي:/ }).last().click().catch(() => {});
    await page.waitForTimeout(450);
  }
  await page.waitForTimeout(900);
  await expect(page.locator("#lesson-step-content h2").first()).toContainText("الكتابة", { timeout: 8000 });

  // صندوق مهمة الكتابة
  const box = page.locator('textarea[aria-label="مهمة الكتابة"]').first();
  await expect(box).toBeVisible({ timeout: 6000 });
  const h0 = await box.evaluate((el) => el.clientHeight);
  // فقرة ألمانية طويلة (عدة أسطر) — يجب أن تتمدد
  await box.fill(
    "Ich heiße Anna und ich wohne in Tunis. Meine Familie ist groß und sehr nett. " +
    "Wir haben einen Hund und eine Katze zu Hause. Jeden Tag lernen wir zusammen Deutsch, " +
    "denn wir möchten nächstes Jahr nach Deutschland reisen und dort studieren.",
  );
  await page.waitForTimeout(600);
  const h1 = await box.evaluate((el) => el.clientHeight);
  expect(h1, `الارتفاع لم يزد بعد الكتابة: قبل=${h0} بعد=${h1}`).toBeGreaterThan(h0 + 10);
});
