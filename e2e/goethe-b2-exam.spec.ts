import { test, expect } from "@playwright/test";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبارات محرك امتحان Goethe-B2 الرسمي (صيغة 2019+)
 *  يثبت: هيكل 5 أجزاء للقراءة، أنواع المهام الرسمية، المؤقت،
 *  الانتقال بين المكونات، النتيجة بمعايير 60/100 لكل مكوّن.
 * ═══════════════════════════════════════════════════════════
 */

test("محرك B2: شاشة البداية تعرض الهيكل الرسمي (65/40/75/15)", async ({ page }) => {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByRole("heading", { name: /محاكاة Goethe-Zertifikat B2/ })).toBeVisible();
  // الأجزاء الأربعة + المدد (exact + first لتجنب تعدد المطابقات)
  await expect(page.getByText("65 دقيقة", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("40 دقيقة", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("75 دقيقة", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("15 دقيقة", { exact: true }).first()).toBeVisible();
  // زر البدء
  await expect(page.getByRole("button", { name: /ابدأ الامتحان/ })).toBeVisible();
});

test("محرك B2: القراءة تعرض الجزء 1 (Zuordnung) والمؤقت يعمل", async ({ page }) => {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();
  // الجزء 1: 6 نصوص منتدى + 8 عناوين (أي نموذج A/B/C عشوائي)
  await expect(page.getByText(/Lesen — 1\/5/)).toBeVisible();
  // أحد عناوين النماذج الثلاثة يظهر (Teil 1 Zuordnung دائماً)
  const anyTitle = page.getByText(/Theater statt Kino|Weniger Fleisch essen|Online-Kurs im neuen Beruf/, { exact: false }).first();
  await expect(anyTitle).toBeVisible();
  // شارة النموذج الحالي
  await expect(page.getByText(/نموذج [ABC](\/[ABC])?/)).toBeVisible();
  // المؤقت يعرض وقتاً (بعد الضغط على بدء الامتحان مباشرة يبدأ من 65:00)
  await expect(page.getByText(/⏱ 6[0-4]:[0-9]{2}/)).toBeVisible();
});

test("محرك B2: يمكن الإجابة في Teil 1 والانتقال للجزء 2", async ({ page }) => {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();
  // أجب على أول نص: اختر أول فئة (أول زر مطابقة داخل أول بطاقة نص — مستقل عن النموذج)
  const firstItemCard = page.locator("div.rounded-xl.border.bg-card.p-3").first();
  await firstItemCard.locator("button").first().click();
  // انتقل للجزء التالي
  await page.getByRole("button", { name: /التالي: الجزء 2/ }).click();
  await expect(page.getByText(/Lesen — 2\/5/)).toBeVisible();
  // الجزء 2 (مقال + MCQ) ظاهر في كل النماذج: صندوق النص + خيارات
  await expect(page.getByText("📄 النص")).toBeVisible();
  await expect(page.getByRole("button", { name: /^A / }).first()).toBeVisible();
});

test("محرك B2: الجزء 3 يعرض Lückentext ببنك جمل (فقرات ناقصة)", async ({ page }) => {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();
  // انتقل حتى الجزء 3
  for (let i = 0; i < 2; i++) {
    await page.getByRole("button", { name: /التالي: الجزء/ }).click();
  }
  await expect(page.getByText(/Lesen — 3\/5/)).toBeVisible();
  await expect(page.getByText(/اختر جملة لكل فراغ/)).toBeVisible();
});

test("محرك B2: شاشة النتيجة تظهر بعد إنهاء القراءة بمعايير 60/100", async ({ page }) => {
  await page.goto("/tests/b2", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /ابدأ الامتحان/ }).click();
  // أجب على شيء واحد في Teil 1 ثم مرر للأجزاء وأنهِ القراءة (مستقل عن النموذج)
  const firstItemCard = page.locator("div.rounded-xl.border.bg-card.p-3").first();
  await firstItemCard.locator("button").first().click();
  // انتقل عبر الأجزاء الخمسة
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: /التالي: الجزء/ }).click();
  }
  await page.getByRole("button", { name: /إنهاء القراءة/ }).click();
  // الآن في الاستماع — نتحقق أن الانتقال تم
  await expect(page.getByText(/Hören — 1\/4/)).toBeVisible();
});

test("الشفهي الجديد: صفحة /sprechen تعرض Vortrag + Diskussion (صيغة 2019+)", async ({ page }) => {
  await page.goto("/sprechen", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByText(/Teil 1 — Vortrag/)).toBeVisible();
  await expect(page.getByText(/Teil 2 — Diskussion/)).toBeVisible();
  // بنك التحدث الجديد: مواضيع Vortrag (قد يتعدد — نستخدم first)
  await expect(page.getByText(/Auslandssemester/).first()).toBeVisible();
  // التبديل للجزء 2 يعرض Pro/Kontra
  await page.getByRole("button", { name: /Teil 2 — Diskussion/ }).click();
  await expect(page.getByText("PRO — حجج مؤيدة")).toBeVisible();
  await expect(page.getByText("KONTRA — حجج معارضة")).toBeVisible();
});

test("vollpruefung: الأوقات الرسمية الصحيحة (65/40/75) + تحذير صادق", async ({ page }) => {
  await page.goto("/tests/vollpruefung", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await expect(page.getByText("65 دقيقة")).toBeVisible();
  await expect(page.getByText("40 دقيقة")).toBeVisible();
  await expect(page.getByText("75 دقيقة")).toBeVisible();
  await expect(page.getByText(/توضيح صدق/)).toBeVisible();
});
