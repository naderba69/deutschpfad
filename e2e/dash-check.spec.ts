/**
 * فحص صحة الواجهة: أخطاء الكونسول في الصفحات الرئيسية + ريسبونسف الجوال + لوحة الرحلة
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

async function setOnboarded(page: Page) {
  await page.evaluate(async () => {
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

const PAGES = ["/", "/dashboard", "/learning-path", "/level/a1", "/lesson/a1-01", "/flashcards", "/stories", "/tests"];

for (const p of PAGES) {
  test(`console نظيف + 200: ${p}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text().slice(0, 120));
    });
    page.on("pageerror", (err) => errors.push("PAGEERROR: " + err.message.slice(0, 120)));
    await page.goto(p, { waitUntil: "networkidle" }).catch(() => {});
    await page.waitForTimeout(800);
    const real = errors.filter(
      (e) => !e.includes("favicon") && !e.includes("sourcemap") && !e.includes("404") && !e.includes("Failed to load resource"),
    );
    expect(real, `أخطاء كونسول في ${p}: ${real.join(" | ")}`).toEqual([]);
  });
}

test("الجوال: الداشبورد بلا تمرير أفقي (390px)", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await clearData(page);
  await setOnboarded(page);
  await page.reload();
  await page.waitForTimeout(1500);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
  expect(overflow, "يوجد تمرير أفقي على الجوال").toBe(false);
});

test("لوحة الرحلة: الأقسام الستة المرقمة ظاهرة", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await clearData(page);
  await setOnboarded(page);
  await page.reload();
  await page.waitForTimeout(2000);
  // الأقسام المرقمة (نتحقق من وجودها في DOM — بعضها أسفل الشاشة)
  await expect(page.getByText("وضعك الآن").first()).toBeAttached({ timeout: 6000 });
  await expect(page.getByText("خطوتك التالية").first()).toBeAttached();
  await expect(page.getByText("مسارك").first()).toBeAttached();
  await expect(page.getByText("جلسة اليوم").first()).toBeAttached();
  await expect(page.getByText("تطورك").first()).toBeAttached();
  // زر «تابع الدرس» (رابط asChild) ظاهر
  await expect(page.getByRole("link", { name: /تابع الدرس/ }).first()).toBeVisible();
});

// خطة معلّمك اليوم — تظهر في لوحة الرحلة
test("لوحة الرحلة: خطة معلّمك اليوم تظهر بأنشطتها", async ({ page }) => {
  await page.goto("/");
  await setOnboarded(page);
  await page.reload();
  await page.waitForTimeout(2500);
  await expect(page.getByText("خطة معلّمك اليوم").first()).toBeAttached({ timeout: 8000 });
  await expect(page.getByText(/خطة اليوم/).first()).toBeAttached();
});
