import { expect, test } from "@playwright/test";

/**
 * صوت البودكاست في المتصفح — لا في البيان وحده.
 *
 * الحارس يقفل صدق ما يُعلَن من جهة المتعلم: الحلقات ذات التسجيل المنتج تعلن
 * أنه TTS لا بشري، والحلقة التي عُلّق تسجيلها بعد تحديث النص تبقى معلنة بوضوح
 * على أنها غير منتجة بعد. كما يتحقق اختبار مستقل من جلب ملفات MP3 للعينة.
 *
 * لماذا هنا وليس في اختبار وحدة فقط: `audio.test.ts` يحرس البيان مقابل القرص،
 * لكن الصدق المعلَن في الواجهة (وهو موضع هذه الدفعة) لا يُرى إلا في المتصفح.
 */
const ARABIC_TITLES = {
  produced: "تسجيل مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
  notProduced: "لم يُنتَج تسجيل لهذه الحلقة بعد",
  failed: "تعذّر تشغيل التسجيل",
};

// تسجيل هذه الحلقة معلّق لأن نصها تغيّر؛ لا نعرض الملف القديم على أنه مطابق.
const PENDING_TITLES = new Set(["العيش بصحة"]);

test("كل حلقة بودكاست تعلن حالة التسجيل الصحيحة — منتج أو معلّق", async ({ page }) => {
  await page.goto("/podcasts");
  const cards = page.locator("section button h3");
  const total = await cards.count();
  expect(total, "عدد الحلقات المعروضة في المكتبة").toBe(20);

  const titles: string[] = [];
  for (let i = 0; i < total; i += 1) titles.push((await cards.nth(i).innerText()).trim());
  expect(new Set(titles).size, "عناوين مكررة تخفي حلقة").toBe(total);

  for (const title of titles) {
    await page.goto("/podcasts");
    await page.locator("section button", { hasText: title }).first().click();
    if (PENDING_TITLES.has(title)) {
      await expect(page.getByText(ARABIC_TITLES.notProduced), `${title}: يجب أن يعلن بوضوح أن التسجيل غير متاح`).toBeVisible();
      expect(await page.getByText(ARABIC_TITLES.produced).count(), `${title}: لا يُعرض الملف القديم على أنه مطابق للنص`).toBe(0);
    } else {
      await expect(page.getByText(ARABIC_TITLES.produced), `${title}: لا يعلن تسجيل TTS منتجاً`).toBeVisible();
      expect(await page.getByText(ARABIC_TITLES.notProduced).count(), `${title}: يعلن حلقة غير مُنتَجة`).toBe(0);
    }
    expect(await page.getByText(ARABIC_TITLES.failed).count(), `${title}: التسجيل فشل فسقط إلى صوت الجهاز`).toBe(0);
  }
});

test("زرّ «استمع للحلقة» يجلب mp3 فعلياً — لعينة من المستويات الأربعة", async ({ page }) => {
  const clips: { url: string; status: number }[] = [];
  page.on("response", (res) => {
    if (res.url().includes("/audio/podcasts/")) clips.push({ url: res.url(), status: res.status() });
  });

  // عينة عبر المستويات: A1 وA2 بصوت voice-02، وB1 وB2 بصوت voice-03.
  // استُبعدت «العيش بصحة» لأن تسجيلها معلّق بعد تحديث النص المرجعي.
  const sample = ["p-a1-markt", "p-a2-zug", "p-b1-umwelt", "p-b2-migration"];
  const titles = ["في السوق", "السفر بالقطار", "هل يجب أن نعيش بطريقة صديقة للبيئة؟", "الهجرة والهوية"];
  for (const title of titles) {
    await page.goto("/podcasts");
    const card = page.locator("section button", { hasText: title }).first();
    expect(await card.count(), `${title}: بطاقة الحلقة غير موجودة`).toBeGreaterThan(0);
    await card.click();
    await page.getByRole("button", { name: /استمع للحلقة/ }).click();
    await page.waitForTimeout(600);
  }

  expect(clips.length, "لم يُجلب أي مقطع صوتي").toBeGreaterThan(0);
  // 206 Partial Content استجابة سليمة لطلبات النطاق (Range) التي يبعثها عنصر audio،
  // فهي دليل تشغيلٍ لا عطل — والمرفوض هو 404/500 وما شابه.
  const broken = clips.filter((c) => c.status !== 200 && c.status !== 206);
  expect(broken, `مقاطع فشلت: ${broken.map((c) => `${c.url} (${c.status})`).join(" · ")}`).toEqual([]);
  const fetched = new Set(clips.map((c) => c.url.replace(/.*\/audio\/podcasts\//, "").replace(/\.mp3$/, "")));
  const missing = sample.filter((id) => !fetched.has(id));
  expect(missing, `حلقات العينة لم تُجلب تسجيلاتها: ${missing.join(" · ")}`).toEqual([]);
});
