/**
 * اختبارات E2E: ميزة النطق الكاملة (حماية دائمة ضد «عودة بلا تفاعل»)
 *
 * ▸ المشكلة التاريخية: لم يكن لميزة النطق أي اختبار — فتراجعت دون أن تُلتقط.
 *   السبب الجذري: بعض المتصفحات تعرّف webkitSpeechRecognition لكن المحرك
 *   لا يستجيب إطلاقاً (يعلق بلا onstart/onresult/onerror) + speechSynthesis
 *   بلا أصوات → أزرار «صامتة ومعلّقة».
 *
 * ▸ الاختبارات هنا تثبت:
 *   1) قسم النطق يظهر في موضعه من الخطوات بكل أدواته.
 *   2) التقييم التلقائي يعمل: محرك وهمي يستجيب → درجة + مقارنة حرفية.
 *   3) «الدعم الوهمي» يُكتشف: محرك صامت → رسالة واضحة + بديل تلقائي.
 *   4) زر «استمع» يتفاعل بلا أخطاء.
 *   5) البديل «سجّل واستمع لنفسك» يفتح أداة المقارنة التي تعمل دائماً.
 */
import { test, expect, type Page } from "@playwright/test";

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

/** التنقل إلى قسم النطق (الخطوة 6 من 11 في a1-01) */
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

test("قسم النطق يظهر في موضعه بكل أدواته (استمع + انطقها + سجّل نطقك)", async ({ page }) => {
  await gotoPronSection(page);
  // زر الاستماع للهدف (SpeakAndScore)
  await expect(page.getByRole("button", { name: /استمع إلى:/ }).first()).toBeVisible();
  // زر التسجيل والتقييم (SpeakAndScore)
  await expect(page.getByRole("button", { name: /سجّل نطقك:/ }).first()).toBeVisible();
  // زر «سجّل نطقك» في بطاقة التدريب الرئيسية (PronunciationPractice)
  await expect(page.getByRole("button", { name: "سجّل نطقك" }).first()).toBeVisible();
  // نصيحتان مرئيتان
  await expect(page.getByText("تدرّب على نطقك", { exact: false }).first()).toBeVisible();
});

test("التقييم التلقائي: النطق يُقيَّم فورياً بدرجة ومقارنة حرفية", async ({ page }) => {
  // محرك وهمي يستجيب فعلياً: onstart ثم onresult بصوت قريب من الهدف «Hallo»
  await page.addInitScript(() => {
    class FakeRecognition {
      lang = "de-DE";
      continuous = false;
      interimResults = true;
      maxAlternatives = 1;
      onstart: (() => void) | null = null;
      onresult: ((e: unknown) => void) | null = null;
      onerror: ((e: unknown) => void) | null = null;
      onend: (() => void) | null = null;
      start() {
        this.onstart?.();
        window.setTimeout(() => {
          this.onresult?.({
            resultIndex: 0,
            results: { length: 1, 0: { isFinal: true, 0: { transcript: "Haloo" } } },
          });
          this.onend?.();
        }, 250);
      }
      stop() { this.onend?.(); }
      abort() {}
    }
    (window as unknown as Record<string, unknown>).SpeechRecognition = FakeRecognition;
    (window as unknown as Record<string, unknown>).webkitSpeechRecognition = FakeRecognition;
    // أصوات وهمية حتى يعمل «استمع» أيضاً
    Object.defineProperty(window.speechSynthesis, "getVoices", {
      value: () => [{ lang: "de-DE", name: "Fake German", localService: true }],
      configurable: true,
    });
  });

  await gotoPronSection(page);
  await page.getByRole("button", { name: /سجّل نطقك:/ }).first().click();
  await page.waitForTimeout(1500);

  // النتيجة: درجة + تعليق + مقارنة حرفية (Haloo قريبة من Hallo لكنها أقل من 100)
  await expect(page.getByText(/%/).first()).toBeVisible({ timeout: 6000 });
  await expect(page.getByText("نطق ممتاز", { exact: false }).first()).toBeVisible();
  // المقارنة الحرفية تظهر (مطابق/اختلف)
  await expect(page.getByText("مطابق", { exact: false }).first()).toBeVisible();
});

test("«الدعم الوهمي» يُكتشف: محرك صامت → رسالة واضحة + بديل تلقائي", async ({ page }) => {
  // محرك يعرّف نفسه لكنه لا يستجيب إطلاقاً (لا onstart ولا onerror)
  await page.addInitScript(() => {
    class SilentRecognition {
      lang = "de-DE";
      continuous = false;
      interimResults = true;
      maxAlternatives = 1;
      onstart: (() => void) | null = null;
      onresult: ((e: unknown) => void) | null = null;
      onerror: ((e: unknown) => void) | null = null;
      onend: (() => void) | null = null;
      start() { /* يعلق بصمت — لا أي حدث */ }
      stop() {}
      abort() {}
    }
    (window as unknown as Record<string, unknown>).SpeechRecognition = SilentRecognition;
    (window as unknown as Record<string, unknown>).webkitSpeechRecognition = SilentRecognition;
  });

  await gotoPronSection(page);
  await page.getByRole("button", { name: /سجّل نطقك:/ }).first().click();

  // بعد مهلة كشف «الدعم الوهمي» (5 ثوانٍ) تظهر الرسالة + البديل تلقائياً
  await expect(page.getByText("لا يستجيب", { exact: false }).first()).toBeVisible({ timeout: 10000 });
  await expect(page.getByText("سجّل واستمع لنفسك", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: "استمع للهدف" }).first()).toBeVisible();
});

test("زر «استمع» يتفاعل بلا أخطاء (بأصوات متاحة)", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(() => {
    Object.defineProperty(window.speechSynthesis, "getVoices", {
      value: () => [{ lang: "de-DE", name: "Fake German", localService: true }],
      configurable: true,
    });
  });

  await gotoPronSection(page);
  await page.getByRole("button", { name: /استمع إلى:/ }).first().click();
  await page.waitForTimeout(1000);

  expect(errors, `أخطاء عند الاستماع: ${errors.join(" | ")}`).toEqual([]);
});

test("بديل «سجّل واستمع لنفسك» يفتح أداة المقارنة (تعمل في كل المتصفحات)", async ({ page }) => {
  await gotoPronSection(page);
  await page.getByText("بديل: سجّل واستمع لنفسك", { exact: false }).first().click();
  await expect(page.getByText("قارن نطقك بنفسك", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: "استمع للهدف" }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: "سجّل نطقك" }).first()).toBeVisible();
});
