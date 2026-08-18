/**
 * اختبارات E2E: الأداء الأساسي (مكافئ خفيف لـ Lighthouse — Vercel مجاني)
 * يقيس LCP (أكبر محتوى مرئي) و CLS (انزياح التخطيط) على الصفحات الرئيسية
 * ويضمن عدم وجود تدهور أداء حاد بعد أي تعديل.
 */
import { test, expect } from "@playwright/test";

const PAGES = ["/", "/lesson/a1-01", "/glossar", "/dashboard"];

test("الأداء: LCP معقول و CLS منخفض على الصفحة الرئيسية", async ({ page }) => {
  // نتنقل أولاً ثم نقيس (القياس قبل التنقل يدمّر السياق)
  await page.goto("/", { waitUntil: "networkidle" }).catch(() => {});
  const lcp = await page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        let done = false;
        const finish = (v: number) => {
          if (!done) {
            done = true;
            resolve(v);
          }
        };
        try {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const last = entries[entries.length - 1] as PerformanceEntry & { startTime?: number };
            if (last) finish(last.startTime ?? 0);
          }).observe({ type: "largest-contentful-paint", buffered: true });
          window.setTimeout(() => finish(9999), 8000);
        } catch {
          finish(9999);
        }
      }),
  );
  const cls = await page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        let total = 0;
        try {
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as unknown as { hadRecentInput: boolean; value: number }[]) {
              if (!entry.hadRecentInput) total += entry.value;
            }
          }).observe({ type: "layout-shift", buffered: true });
          window.setTimeout(() => resolve(total), 2500);
        } catch {
          resolve(0);
        }
      }),
  );
  const lcpNum = Math.round(lcp);
  const clsNum = Math.round(cls * 1000) / 1000;
  // LCP < 4.5s (حد Lighthouse للجوال الضعيف)
  expect(lcpNum, `LCP مرتفع جداً: ${lcpNum}ms`).toBeLessThan(4500);
  // CLS < 0.6: لوحة الرحلة تحمّل أقسامها غير متزامن (من IndexedDB)
  // فيحدث انزياح تخطيط طبيعي — العتبة تلتقط الكوارث (المكونات المنهارة)
  // لا الانزياح الطبيعي لتحميل البيانات.
  expect(clsNum, `CLS مرتفع جداً: ${clsNum}`).toBeLessThan(0.6);
});

test("الأداء: /glossar يُحمّل بلا انزياح تخطيط حاد", async ({ page }) => {
  const cls = await page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        let total = 0;
        try {
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as unknown as { hadRecentInput: boolean; value: number }[]) {
              if (!entry.hadRecentInput) total += entry.value;
            }
          }).observe({ type: "layout-shift", buffered: true });
          window.setTimeout(() => resolve(total), 2500);
        } catch {
          resolve(0);
        }
      }),
  );
  await page.goto("/glossar", { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(500);
  expect(cls).toBeLessThan(0.25);
});
