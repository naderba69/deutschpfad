/**
 * مسبار سلوكي مؤقّت (دفعة 51): هل ما زالت ثغرة «اختر الخيار الأول دائماً» تعمل؟
 * يفتح اختبار محاكاة Goethe A1، يجيب باختيار **الخيار الأول** في كل سؤال، ثم
 * يقرأ النسبة المعروضة. قبل الإصلاح كانت 100% (كل الإجابات في الموضع الأول)،
 * وبعد الموازنة + الخلط يجب أن تنزل إلى حدود الصدفة.
 */
import { chromium } from "playwright-core";

const EXECUTABLE = "/tmp/pw-browsers/chromium-1234/chrome-linux/chrome";

const browser = await chromium.launch({
  executablePath: EXECUTABLE,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.goto("http://0.0.0.0:3000/tests/mock?level=A1", { waitUntil: "domcontentloaded" });
await page.getByText(/اختبار مستوى A1/).first().waitFor({ timeout: 30_000 });

for (let i = 0; i < 40; i++) {
  const submit = page.getByRole("button", { name: /تسليم الاختبار/ });
  if (await submit.isVisible().catch(() => false)) {
    await submit.click();
    break;
  }
  const radio = page.getByRole("radio").first();
  if (await radio.isVisible().catch(() => false)) {
    await radio.click();
  } else {
    const writing = page.getByLabel("إجابتك الكتابية");
    if (await writing.isVisible().catch(() => false)) {
      await writing.fill("Ich schreibe eine kurze Antwort auf Deutsch.");
    }
  }
  const next = page.getByRole("button", { name: /^(التالي|القسم التالي)/ }).first();
  if (await next.isVisible().catch(() => false)) {
    await next.click();
    await page.waitForTimeout(60);
  } else break;
}

await page.getByText(/المستوى المقدر/).waitFor({ timeout: 30_000 });
const body = await page.locator("main, div").first().innerText().catch(() => "");
const everything = await page.locator("body").innerText();
const pct = [...everything.matchAll(/(\d{1,3})\s*%/g)].map((m) => Number(m[1]));
const overall = [...everything.matchAll(/(النتيجة الإجمالية|الإجمالي|المجموع)[^\n]{0,40}?(\d{1,3})\s*%/g)].map((m) => `${m[1]}=${m[2]}%`);
console.log("OVERALL=" + JSON.stringify(overall));
console.log("PCT_FOUND=" + JSON.stringify(pct.slice(0, 6)));
console.log("MAX_PCT=" + (pct.length ? Math.max(...pct) : "none"));
console.log("VERDICT=" + (pct.length && Math.max(...pct) >= 90 ? "الثغرة ما زالت قائمة" : "الإصلاح فعّال (ليست 100%)"));
await browser.close();
