/**
 * اختبارات E2E لتسجيل النطق في /aussprache — يغطي البند المفتوح
 * «اختبار الميكروفون في /aussprache على متصفح حقيقي».
 *
 * يُشغَّل بميكروفون وهمي من Chromium (fake device) وبإذن ممنوح، ثم يتحقق من:
 *  1) التسجيل يبدأ ويُنتج بيانات صوتية حقيقية (blob غير فارغ) — لا مجرد واجهة.
 *  2) التشغيل الذاتي للتسجيل يعمل.
 *  3) التقييم الذاتي (جيد/قريب/أعد المحاولة) يعطي تغذية راجعة.
 *  4) الحالات البديلة: رفض الإذن، ومتصفح بلا دعم MediaRecorder.
 *
 * ملاحظة: هذا لا يغني عن تجربة بميكروفون حقيقي — لكنه يثبت أن مسار
 * getUserMedia → MediaRecorder → تشغيل التسجيل سليم في المتصفح.
 */
import {test, expect, type Page} from "@playwright/test";

test.use({
  permissions: ["microphone"],
  launchOptions: {
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--autoplay-policy=no-user-gesture-required",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  },
});

/** يسجّل كل blob يُنشأ في الصفحة (لقياس حجم التسجيل الفعلي) */
async function trackBlobs(page: Page) {
  await page.addInitScript(() => {
    const orig = URL.createObjectURL.bind(URL);
    (window as unknown as {__blobs: {size: number; type: string}[]}).__blobs = [];
    URL.createObjectURL = (obj: Blob | MediaSource) => {
      const b = obj as Blob;
      (window as unknown as {__blobs: {size: number; type: string}[]}).__blobs.push({
        size: b.size ?? 0,
        type: b.type ?? "",
      });
      return orig(obj);
    };
  });
}

async function openRecordTab(page: Page) {
  await page.goto("/aussprache");
  await expect(page.getByRole("heading", {level: 1})).toContainText("تدريب النطق");
  await page.getByRole("tab", {name: "تسجيل صوتي"}).click();
  await expect(page.getByRole("button", {name: "سجّل نطقك"}).first()).toBeVisible();
}

test("تسجيل الميكروفون: تسجيل → إيقاف → تشغيل التسجيل → تقييم ذاتي", async ({page}) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  await trackBlobs(page);
  await openRecordTab(page);

  // ابدأ التسجيل
  await page.getByRole("button", {name: "سجّل نطقك"}).first().click();
  await expect(page.getByText("سجّل الآن…").first()).toBeVisible({timeout: 10_000});

  // اترك الميكروفون يعمل قليلاً حتى تتجمع بيانات حقيقية
  await page.waitForTimeout(1200);
  await page.getByRole("button", {name: "إيقاف التسجيل…"}).first().click();

  // ظهر التسجيل: زر التشغيل + أزرار التقييم
  await expect(page.getByRole("button", {name: "اسمع نطقك"}).first()).toBeVisible({timeout: 10_000});
  await expect(page.getByRole("button", {name: /جيد/}).first()).toBeVisible();
  await expect(page.getByRole("button", {name: /قريب/}).first()).toBeVisible();
  await expect(page.getByRole("button", {name: /أعد المحاولة/}).first()).toBeVisible();

  // التسجيل يحتوي بيانات صوتية فعلية (وأكثر من مجرد رأس الملف)
  const blobs = await page.evaluate(() => (window as unknown as {__blobs: {size: number; type: string}[]}).__blobs);
  expect(blobs.length, "لم يُنشأ أي blob للتسجيل").toBeGreaterThan(0);
  expect(blobs[0].size, "التسجيل فارغ — الميكروفون لم يُنتج صوتاً").toBeGreaterThan(1000);

  // شغّل التسجيل (يُشغَّل عبر Audio داخل الصفحة) ثم أوقفه
  await page.getByRole("button", {name: "اسمع نطقك"}).first().click();
  await expect(page.getByRole("button", {name: "إيقاف"}).first()).toBeVisible({timeout: 5000});
  await page.getByRole("button", {name: "إيقاف"}).first().click();

  // تقييم ذاتي
  await page.getByRole("button", {name: /جيد/}).first().click();
  await expect(page.getByText("رائع! 🎉").first()).toBeVisible();

  await expect(page.getByText(/لم يُسمح بالوصول إلى الميكروفون|المتصفح لا يسمح بالوصول/)).toHaveCount(0);
  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("رفض إذن الميكروفون: رسالة عربية واضحة بلا انهيار", async ({page}) => {
  await page.addInitScript(() => {
    navigator.mediaDevices.getUserMedia = () =>
      Promise.reject(new DOMException("Permission denied", "NotAllowedError"));
  });
  await openRecordTab(page);

  await page.getByRole("button", {name: "سجّل نطقك"}).first().click();
  await expect(page.getByText(/لم يُسمح بالوصول إلى الميكروفون/).first()).toBeVisible({timeout: 10_000});
  // الواجهة لم تتجمد: يمكن إعادة المحاولة
  await expect(page.getByRole("button", {name: "سجّل نطقك"}).first()).toBeEnabled();
});

test("متصفح بلا mediaDevices: رسالة بديلة بلا انهيار", async ({page}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "mediaDevices", {value: undefined, configurable: true});
  });
  await openRecordTab(page);

  await page.getByRole("button", {name: "سجّل نطقك"}).first().click();
  await expect(page.getByText(/المتصفح لا يسمح بالتسجيل هنا/).first()).toBeVisible({timeout: 10_000});
});
