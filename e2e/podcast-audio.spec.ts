import { expect, test } from "@playwright/test";

/**
 * صوت البودكاست في المتصفح — لا في البيان وحده.
 *
 * الدفعة 76 (2026-10-17) أتتمت الإنتاج: 20 حلقة / 20 تسجيلاً، وصفر حلقة على نطق
 * الجهاز. هذا الحارس يقفل تلك الحالة من جهة المتعلم: كل بطاقة حلقة تفتح على
 * «تسجيل مُنتَج لهذه الحلقة»، ولا واحدة تعلن «لم يُنتَج تسجيل لهذه الحلقة بعد»،
 * وزرّ «استمع للحلقة» يجلب ملف mp3 فعلاً بحالة 200.
 *
 * لماذا هنا وليس في اختبار وحدة فقط: `audio.test.ts` يحرس البيان مقابل القرص،
 * لكن الصدق المعلَن في الواجهة (وهو موضع هذه الدفعة) لا يُرى إلا في المتصفح.
 */
const ARABIC_TITLES = {
  produced: "تسجيل مُنتَج لهذه الحلقة",
  notProduced: "لم يُنتَج تسجيل لهذه الحلقة بعد",
  failed: "تعذّر تشغيل التسجيل",
};

test("كل حلقات البودكاست تعلن تسجيلاً مُنتَجاً — لا نطق جهاز بعد إتمام الإنتاج", async ({ page }) => {
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
    await expect(page.getByText(ARABIC_TITLES.produced), `${title}: لا يعلن تسجيلاً مُنتَجاً`).toBeVisible();
    expect(await page.getByText(ARABIC_TITLES.notProduced).count(), `${title}: يعلن حلقة غير مُنتَجة`).toBe(0);
    expect(await page.getByText(ARABIC_TITLES.failed).count(), `${title}: التسجيل فشل فسقط إلى صوت الجهاز`).toBe(0);
  }
});

test("زرّ «استمع للحلقة» يجلب mp3 فعلياً — لعينة من المستويات الأربعة", async ({ page }) => {
  const clips: { url: string; status: number }[] = [];
  page.on("response", (res) => {
    if (res.url().includes("/audio/podcasts/")) clips.push({ url: res.url(), status: res.status() });
  });

  // عينة عبر المستويات: A1 وA2 بصوت voice-02، وB1 وB2 بصوت voice-03
  const sample = ["p-a1-markt", "p-a2-zug", "p-b1-gesundheit", "p-b2-migration"];
  const titles = ["في السوق", "السفر بالقطار", "العيش بصحة", "الهجرة والهوية"];
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
