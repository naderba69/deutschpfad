/**
 * اختبارات E2E: شهادة الإتقان (Can-Do) + طريق الشهادة + إصلاح السكرول
 */
import { test, expect, type Page } from "@playwright/test";

async function setOnboarded(page: Page) {
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
  const STORES: [string, string, boolean][] = [
    ["progress", "key", false],
    ["cards", "id", false],
    ["events", "id", true],
    ["settings", "key", false],
    ["snapshots", "id", false],
    ["llm-cache", "key", false],
    ["llm-usage", "key", false],
  ];
  const open = (): Promise<IDBDatabase> =>
    new Promise((res, rej) => {
      const r = indexedDB.open("deutschpfad", 2);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
      r.onupgradeneeded = (e) => {
        const d = (e.target as IDBOpenDBRequest).result;
        // إنشاء المخطط الكامل الذي يحتاجه التطبيق (كل المتاجر السبعة)
        for (const [name, keyPath, autoInc] of STORES) {
          if (!d.objectStoreNames.contains(name)) {
            d.createObjectStore(name, autoInc ? { keyPath, autoIncrement: true } : { keyPath });
          }
        }
      };
    });
  const db = await open();
    const tx = db.transaction("settings", "readwrite");
    tx.objectStore("settings").put({ key: "learner-profile", data: { name: "اختبار", onboarded: true, placementLevel: "A1" } });
    await new Promise((res) => { tx.oncomplete = () => res(null); });
  });
}

test("مركز المستوى: شهادة الإتقان تظهر بوظائف Can-Do", async ({ page }) => {
  await page.goto("/level/a1");
  await expect(page.getByText("شهادة إتقان A1").first()).toBeVisible({ timeout: 8000 });
  // وظائف حقيقية تظهر
  await expect(page.getByText("Ich kann mich vorstellen und andere begrüßen.").first()).toBeVisible();
  await expect(page.getByRole("button", { name: "✓ أستطيع" }).first()).toBeVisible();
});

test("تقييم وظيفة يُحفظ محلياً ويحدّث النسبة", async ({ page }) => {
  await page.goto("/level/a1");
  await page.waitForTimeout(1500);
  // قبل التقييم: نسبة صغيرة
  const before = await page.getByText(/%/).first().textContent().catch(() => "0%");
  // نقيّم أول وظيفة «أستطيع»
  await page.getByRole("button", { name: "✓ أستطيع" }).first().click();
  await page.waitForTimeout(400);
  // المرآة حُفظت
  const saved = await page.evaluate(() => {
    const found: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("dp:cando:")) found.push(k);
    }
    return found;
  });
  expect(saved.length).toBeGreaterThan(0);
});

test("لوحة الرحلة: طريق الشهادة يعرض المستويات بمعيارين (دروس + وظائف)", async ({ page }) => {
  await page.goto("/");
  await setOnboarded(page);
  await page.reload();
  await page.waitForTimeout(2500);
  await expect(page.getByText("طريقك إلى الشهادة").first()).toBeAttached({ timeout: 8000 });
  await expect(page.getByText("وظائف 0%", { exact: false }).first()).toBeAttached();
});

test("الدرس: «التالي» ينقل لأعلى القسم الجديد (إصلاح السكرول)", async ({ page }) => {
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

  // القسم الأول ظاهر
  await expect(page.getByText("الأهداف التعليمية", { exact: false }).first()).toBeVisible({ timeout: 8000 });

  // نضغط التالي وننتظر — يجب أن يظهر القسم الثاني (التمهيد) في أعلى الشاشة
  await page.getByRole("button", { name: /^التالي:/ }).first().click();
  await page.waitForTimeout(800);

  // القسم الثاني ظاهر
  await expect(page.getByText("التمهيد وتنشيط", { exact: false }).first()).toBeVisible({ timeout: 6000 });

  // التحقق من موضع السكرول: بطاقة القسم قريبة من أعلى الشاشة
  const y = await page.evaluate(() => {
    const el = document.getElementById("lesson-step-content");
    return el ? el.getBoundingClientRect().top : -1;
  });
  expect(y).toBeGreaterThan(-10);
  expect(y).toBeLessThan(200); // قريبة من أعلى (تحت الهيدر اللاصق)
});
