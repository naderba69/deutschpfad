/**
 * اختبارات E2E: إصلاح كارثة v5.4 — صفحة الاستماع والنطق على الجوال
 *
 * ▸ الكارثة: قاعدة CSS عمومية كسرت whitespace-nowrap على كل الأزرار
 *   → أزرار الاستماع والنطق تلتفّ وتتمدد وتتداخل مع صناديق الجمل.
 * ▸ إصلاح ثانٍ: جلسة SpeechRecognition واحدة فقط عبر الصفحة — كان
 *   «انطقها» يعمل في أول سطر فقط ثم يرفض المتصفح البقية بصمت.
 * ▸ إصلاح ثالث: playDialogue كان يضيف كل الأسطر دفعة واحدة بعد cancel
 *   فيبتلع المتصفح بعضها — «أول جملة فقط تُنطق».
 *
 * الاختبارات تثبت:
 * 1) أزرار الاستماع/النطق في كل سطر بحجم طبيعي (لا تتمدد عمودياً)
 * 2) لا زر بديل يزحم الصناديق (يظهر فقط عند الفشل)
 * 3) «انطقها» يعمل في السطر الثاني بعد الأول (المدير المركزي)
 * 4) لا فيضان أفقي في قسم الاستماع على 320px
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

async function gotoListen(page: Page) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/lesson/a1-01");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);
  // إلى قسم الاستماع (4 نقرات من البداية)
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: /التالي:/ }).last().click().catch(() => {});
    await page.waitForTimeout(450);
  }
  await page.waitForTimeout(900);
  await expect(page.locator("#lesson-step-content h2").first()).toContainText("الاستماع", { timeout: 8000 });
}

test("الاستماع: أزرار كل سطر بحجم طبيعي — لا تتمدد عمودياً ولا تتداخل", async ({ page }) => {
  await gotoListen(page);

  // أزرار «استمع» و«انطقها» في أسطر الحوار
  const buttons = page.getByRole("button", { name: /انطقها|استمع إلى:/ }).all();
  const list = await buttons;
  expect(list.length).toBeGreaterThanOrEqual(2);

  const sizes = await page.evaluate(() => {
    const btns = [...document.querySelectorAll("button")].filter((b) => {
      const t = b.textContent ?? "";
      return t.includes("انطقها") || (t.includes("استمع") && !t.includes("الكل"));
    });
    return btns.map((b) => ({ text: (b.textContent ?? "").trim().slice(0, 20), h: Math.round(b.getBoundingClientRect().height), w: Math.round(b.getBoundingClientRect().width) }));
  });
  expect(sizes.length).toBeGreaterThanOrEqual(2);
  for (const s of sizes) {
    // الأزرار الصغيرة: ارتفاع سطر واحد (~24-40px) — لا تمدد من التفاف النص
    expect(s.h, `زر «${s.text}» متمدد: ${s.h}px`).toBeLessThanOrEqual(45);
    expect(s.w, `زر «${s.text}» عريض جداً: ${s.w}px`).toBeLessThan(160);
  }
});

test("الاستماع: لا زر بديل يزحم صناديق الجمل افتراضياً", async ({ page }) => {
  await gotoListen(page);
  // زر البديل يجب ألا يظهر في وضع الهدوء (كان يظهر في كل سطر قبل الإصلاح)
  const fallback = page.getByText("بديل: سجّل واستمع لنفسك", { exact: false });
  const count = await fallback.count();
  expect(count, "زر البديل يزحم الصناديق — يجب ألا يظهر افتراضياً").toBe(0);
});

test("الاستماع: «انطقها» يعمل في أكثر من سطر (المدير المركزي للجلسات)", async ({ page }) => {
  // محرك وهمي يستجيب في كل مرة
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
            results: { length: 1, 0: { isFinal: true, 0: { transcript: "Hallo" } } },
          });
          this.onend?.();
        }, 200);
      }
      stop() { this.onend?.(); }
      abort() {}
    }
    (window as unknown as Record<string, unknown>).SpeechRecognition = FakeRecognition;
    (window as unknown as Record<string, unknown>).webkitSpeechRecognition = FakeRecognition;
  });

  await gotoListen(page);

  // كل أزرار «انطقها» في الأسطر
  const speakBtns = page.getByRole("button", { name: /سجّل نطقك:/ });
  const count = await speakBtns.count();
  expect(count).toBeGreaterThanOrEqual(2);

  // نضغط على أول زرين بالتتابع — كلاهما يجب أن يعطي نتيجة
  for (let i = 0; i < Math.min(2, count); i++) {
    await speakBtns.nth(i).click();
    await page.waitForTimeout(1200);
    // بعد النقر يظهر إما نتيجة % أو «أعد» (زر عاد لحالته)
    const body = await page.evaluate(() => document.body.innerText);
    expect(body.includes("%") || body.includes("أعد"), `السطر ${i + 1} لم يتفاعل`).toBe(true);
  }
});

test("الاستماع: لا فيضان أفقي على 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/lesson/a1-01");
  await clearData(page);
  await page.reload();
  await page.waitForTimeout(1800);
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: /التالي:/ }).last().click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await page.waitForTimeout(800);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  expect(overflow, "فيضان أفقي في قسم الاستماع عند 320px").toBe(false);
});
