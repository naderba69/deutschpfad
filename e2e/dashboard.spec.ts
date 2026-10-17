/**
 * اختبارات E2E للداشبورد الأكاديمية الجديدة:
 * الأقسام السبعة المرقمة + الترابط مع «الدرس التالي»
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

test("الداشبورد: الأقسام السبعة المرقمة ظاهرة بترتيب أكاديمي", async ({ page }) => {
  await page.goto("/dashboard");
  await setOnboarded(page);
  await page.reload();
  await page.waitForTimeout(2000);

  // الأقسام المرقمة (نفحص وجودها في DOM — بعضها أسفل الشاشة)
  for (const s of ["نبض اليوم", "أرقامك", "جاهزيتك للامتحان", "تدريبك اليومي", "ذاكرتك وتطورك", "نقاط ضعفك وأهدافك", "أدواتك وتخصيصك"]) {
    await expect(page.getByText(s, { exact: false }).first()).toBeAttached({ timeout: 6000 });
  }
});

test("الداشبورد: «تابع الدرس» يربط بالمسار (الدرس التالي)", async ({ page }) => {
  await page.goto("/dashboard");
  await setOnboarded(page);
  await page.reload();
  await page.waitForTimeout(2000);

  // زر «تابع الدرس» يظهر ويربط بمسار التعلم
  const continueBtn = page.getByRole("link", { name: /تابع الدرس/ }).first();
  await expect(continueBtn).toBeAttached({ timeout: 6000 });
  const href = await continueBtn.getAttribute("href").catch(() => "");
  expect(href).toMatch(/\/lesson\//);
});

test("الجوال: الداشبورد بلا فيضان أفقي (390px)", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/dashboard");
  await setOnboarded(page);
  await page.reload();
  await page.waitForTimeout(1500);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
  expect(overflow, "فيضان أفقي في الداشبورد").toBe(false);
});
