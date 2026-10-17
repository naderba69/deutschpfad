/**
 * اختبارات E2E لنماذج الامتحان التدريبية A1–B1 ولوحة محاكاة Goethe.
 * يغطي البند المفتوح: «فحص امتحانات المحاكاة A1–B1 في المتصفح».
 *
 * يتحقق من:
 *  1) كل ملفات الصوت التي يشير إليها النموذج تُرجع 200 ومحتواها MP3 صالح.
 *  2) مسار الاستماع: الزر يعمل، العدّاد ينقص، وأسئلة الجزء لا تُفعَّل قبل الاستماع.
 *  3) المسار الكامل (استماع → قراءة → كتابة → تحدث → نتيجة) بلا أخطاء صفحة.
 *  4) لوحة /tests/mock لكل مستوى + الوضع التكيفي.
 */
import {test, expect, type Page} from "@playwright/test";

/**
 * ملفات صوت كل جزء (14 لكل مستوى) — مطابقة لـ `LEVEL_AUDIO_FILES` في
 * `src/data/exams/level-audio.ts`، ويحرس التطابقَ حارسُ الوحدة
 * `level-audio.test.ts` (المكوّن نفسه لم يبقَ فيه جدول ملفات).
 */
const AUDIO_FILES = [
  "hoeren-t1.mp3",
  "hoeren-t2-g1-a.mp3",
  "hoeren-t2-g1-b.mp3",
  "hoeren-t2-g2-a.mp3",
  "hoeren-t2-g2-b.mp3",
  "hoeren-t2-g3-a.mp3",
  "hoeren-t2-g3-b.mp3",
  "hoeren-t2-g4-a.mp3",
  "hoeren-t2-g4-b.mp3",
  "hoeren-t3.mp3",
  "hoeren-t4-a.mp3",
  "hoeren-t4-b.mp3",
  "hoeren-t4-c.mp3",
  "hoeren-t4-d.mp3",
];

const EXAM_LEVELS = [
  {level: "A1", path: "/tests/a1-exam", dir: "exam-a1"},
  {level: "A2", path: "/tests/a2-exam", dir: "exam-a2"},
  {level: "B1", path: "/tests/b1-exam", dir: "exam-b1"},
] as const;

/**
 * يُسرّع تشغيل أي عنصر صوت تنشئه الصفحة (8×) — حتى تنتهي المقاطع الطويلة
 * (الجزء 1 ~20-28 ثانية) بسرعة ويُختبر منطق «فتح الأسئلة بعد الاستماع» فعلياً.
 */
async function fastAudio(page: Page) {
  await page.addInitScript(() => {
    const Orig = window.Audio as unknown as new (src?: string) => HTMLAudioElement;
    const Patched = function (...args: unknown[]) {
      const el = new Orig(...(args as [string?]));
      el.playbackRate = 8;
      return el;
    };
    (window as unknown as {Audio: unknown}).Audio = Patched as unknown as typeof Audio;
  });
}

/** يجمع كل أخطاء الصفحة والطلبات الفاشلة على مسارات الصوت */
function watchPage(page: Page) {
  const pageErrors: string[] = [];
  const failedAudio: string[] = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  page.on("response", (r) => {
    const url = r.url();
    if (url.includes("/audio/") && r.status() >= 400) failedAudio.push(`${r.status()} ${url}`);
  });
  return {pageErrors, failedAudio};
}

const isMp3 = (body: Buffer) =>
  body.length > 2000 &&
  (body.subarray(0, 3).toString("latin1") === "ID3" || (body[0] === 0xff && (body[1] & 0xe0) === 0xe0));

for (const {level, path, dir} of EXAM_LEVELS) {
  test(`${level}: كل ملفات صوت الاستماع موجودة و MP3 صالح`, async ({request}) => {
    for (const file of AUDIO_FILES) {
      const res = await request.get(`/audio/${dir}/${file}`);
      expect(res.status(), `${dir}/${file}`).toBe(200);
      expect(isMp3(await res.body()), `${dir}/${file} ليس MP3 صالحاً`).toBe(true);
    }
  });

  test(`${level}: الاستماع يُشغَّل ويفتح الأسئلة بلا طلبات صوت فاشلة`, async ({page}) => {
    const {pageErrors, failedAudio} = watchPage(page);
    await fastAudio(page);
    await page.goto(path);

    await expect(page.getByRole("heading", {level: 1})).toContainText(`نموذج تدريبي — ${level}`);
    await page.getByRole("button", {name: "ابدأ الاستماع"}).click();

    // الجزء 1 ظاهر (عناوين الأجزاء تختلف بين المستويات)
    await expect(page.getByRole("heading", {name: /الجزء 1 —/})).toBeVisible();

    // قبل الاستماع: أزرار Richtig/Falsch معطّلة (لا يمكن الغش قبل السماع)
    const firstRichtig = page.getByRole("button", {name: /Richtig/}).first();
    await expect(firstRichtig).toBeDisabled();

    // تشغيل الجزء 1 (يُسمح بمرتين) — ينتهي بتشغيل ملف واحد
    const playBtn = page.getByRole("button", {name: "▶ استمع"}).first();
    await playBtn.click();
    await expect(page.getByText(/المتبقي من التشغيل: 1 من 2/).first()).toBeVisible({timeout: 10_000});

    // بعد انتهاء التشغيل تُفعَّل الأسئلة
    await expect(firstRichtig).toBeEnabled({timeout: 20_000});
    await firstRichtig.click();

    // الانتقال للقراءة ثم الكتابة
    await page.getByRole("button", {name: "إلى القراءة"}).click();
    await expect(page.getByRole("button", {name: "إلى الكتابة"})).toBeVisible();
    await page.getByRole("button", {name: "إلى الكتابة"}).click();
    await expect(page.getByRole("button", {name: "إلى التحدث"})).toBeVisible();

    expect(failedAudio, "طلبات صوت فاشلة").toEqual([]);
    expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
  });
}

test("A1: المسار الكامل حتى شاشة النتيجة ثم إعادة النموذج", async ({page}) => {
  const {pageErrors, failedAudio} = watchPage(page);
  await fastAudio(page);
  await page.goto("/tests/a1-exam");
  await page.getByRole("button", {name: "ابدأ الاستماع"}).click();

  // استماع: شغّل الجزء 1 وانتظر تفعيل أسئلته، ثم أجب
  await page.getByRole("button", {name: "▶ استمع"}).first().click();
  const r1 = page.getByRole("button", {name: /Richtig/}).first();
  await expect(r1).toBeEnabled({timeout: 20_000});
  await r1.click();
  await page.getByRole("button", {name: "إلى القراءة"}).click();

  // قراءة: أجب على أول سؤال (اختيار من متعدد) إن وُجد
  const firstOption = page.locator('[role="radiogroup"] button, [role="radio"]').first();
  if (await firstOption.isVisible().catch(() => false)) await firstOption.click();
  await page.getByRole("button", {name: "إلى الكتابة"}).click();

  // كتابة: املأ المهمة الأولى
  await page.locator("textarea").first().fill("Liebe Anna, ich lade dich zu meiner Party ein. Viele Grüße, Karim");
  await page.getByRole("button", {name: "إلى التحدث"}).click();

  // تحدث: مرّ على كل الجولات حتى «إنهاء التحدث»، مع الاستماع لتسجيل الشريك مرة واحدة
  await expect(page.getByText(/الجزء 1 من 3/)).toBeVisible();
  await page.getByRole("button", {name: "🔊 استمع لشريكك"}).first().click();
  for (let i = 0; i < 30; i++) {
    const done = page.getByRole("button", {name: "إنهاء التحدث"});
    if (await done.isVisible().catch(() => false)) {
      await done.click();
      break;
    }
    const reveal = page.getByRole("button", {name: "أظهر العبارة النموذجية"});
    if (await reveal.isVisible().catch(() => false)) {
      await reveal.click();
      await page.waitForTimeout(60);
      continue;
    }
    const nextTurn = page.getByRole("button", {name: /الجملة التالية|الجزء التالي/}).first();
    if (await nextTurn.isVisible().catch(() => false)) {
      await nextTurn.click();
      await page.waitForTimeout(60);
      continue;
    }
    break;
  }

  // النتيجة (شاشة النموذج نفسها) — الصفّان يحملان اسم المكوّن الألماني أيضاً
  await expect(page.getByRole("heading", {name: "النتيجة"})).toBeVisible({timeout: 15_000});
  await expect(page.getByText(/الاستماع \(Hören\): \d+ من \d+/)).toBeVisible();
  await expect(page.getByText(/القراءة \(Lesen\): \d+ من \d+/)).toBeVisible();

  // صدق الشاشة: النقاط الرسمية · قيمة السؤال الدقيقة · حدّ النجاح صريحاً ·
  // وتحويل تناسبي معلَن لقراءتنا (12 سؤالاً مقابل 15 رسمياً)
  const official = page.getByTestId("official-summary");
  await expect(official).toBeVisible();
  await expect(official).toContainText(/النقاط الرسمية: \d+ من 25/);
  await expect(official).toContainText("≈ 1.67");
  await expect(official).toContainText("النجاح الرسمي: 60 من 100");
  await expect(official).toContainText("مقابل 15 في النموذج الرسمي");
  await expect(official).toContainText("محاكاة تدريبية لا امتحان رسمي");

  // إعادة النموذج تعود للمقدمة
  await page.getByRole("button", {name: "إعادة النموذج"}).click();
  await expect(page.getByRole("button", {name: "ابدأ الاستماع"})).toBeVisible();

  expect(failedAudio, "طلبات صوت فاشلة").toEqual([]);
  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("النموذج الثالث: النماذج الثلاثة مسجّلة بالكامل من مجلّد m3", async ({page}) => {
  const m3Reqs: {file: string; status: number}[] = [];
  page.on("response", (r) => {
    if (r.url().includes("/m3/")) m3Reqs.push({file: r.url().split("/").pop() ?? "", status: r.status()});
  });
  await fastAudio(page);

  // ── A1-3: مسجّل بالكامل — الإعلان يذكر 13 مقطعاً، والجزء 4 يطلب مقاطعه الثلاثة ──
  await page.goto("/tests/a1-exam");
  await page.getByRole("button", {name: "النموذج 3 (مسجّل بالكامل)"}).click();
  await expect(page.getByText(/13 مقطعاً/)).toBeVisible();
  await page.getByRole("button", {name: "ابدأ الاستماع"}).click();
  await page.locator("[data-audio-mode]").nth(3).getByRole("button", {name: /استمع/}).first().click();
  await expect.poll(() => m3Reqs.length, {timeout: 20_000}).toBe(3);
  expect(m3Reqs.map((r) => r.file)).toEqual(["hoeren-t4-a.mp3", "hoeren-t4-b.mp3", "hoeren-t4-c.mp3"]);
  // 206 نجاح النطاق أيضاً (المتصفح يطلب أجزاء من الملف)
  expect(m3Reqs.every((r) => r.status === 200 || r.status === 206), "طلب صوت فاشل").toBe(true);

  // ── A2-3: مسجّل بالكامل — الإعلان يذكر 15 مقطعاً والجزء 2 يطلب ملفاته ──
  await page.goto("/tests/a2-exam");
  await page.getByRole("button", {name: "النموذج 3 (مسجّل بالكامل)"}).click();
  await expect(page.getByText(/15 مقطعاً/)).toBeVisible();
  const t2Before = m3Reqs.length;
  await page.getByRole("button", {name: "ابدأ الاستماع"}).click();
  await page.locator("[data-audio-mode]").nth(1).getByRole("button", {name: /استمع/}).first().click();
  await expect.poll(() => m3Reqs.length, {timeout: 20_000}).toBe(t2Before + 8);
  expect(m3Reqs.slice(-8).map((r) => r.file)).toEqual([
    "hoeren-t2-g1-a.mp3",
    "hoeren-t2-g1-b.mp3",
    "hoeren-t2-g2-a.mp3",
    "hoeren-t2-g2-b.mp3",
    "hoeren-t2-g3-a.mp3",
    "hoeren-t2-g3-b.mp3",
    "hoeren-t2-g4-a.mp3",
    "hoeren-t2-g4-b.mp3",
  ]);

  // ── B1-3: مسجّل بالكامل — 19 مقطعاً، والجزء 2 يطلب حواراته الثمانية ──
  await page.goto("/tests/b1-exam");
  await page.getByRole("button", {name: "النموذج 3 (مسجّل بالكامل)"}).click();
  await expect(page.getByText(/19 مقطعاً/)).toBeVisible();
  const b1T2Before = m3Reqs.length;
  await page.getByRole("button", {name: "ابدأ الاستماع"}).click();
  await page.locator("[data-audio-mode]").nth(1).getByRole("button", {name: /استمع/}).first().click();
  await expect.poll(() => m3Reqs.length, {timeout: 20_000}).toBe(b1T2Before + 8);
  expect(m3Reqs.slice(-8).map((r) => r.file)).toEqual([
    "hoeren-t2-g1-a.mp3",
    "hoeren-t2-g1-b.mp3",
    "hoeren-t2-g2-a.mp3",
    "hoeren-t2-g2-b.mp3",
    "hoeren-t2-g3-a.mp3",
    "hoeren-t2-g3-b.mp3",
    "hoeren-t2-g4-a.mp3",
    "hoeren-t2-g4-b.mp3",
  ]);
});

test("محاكاة Goethe: لوحة المستويات والوضع التكيفي", async ({page}) => {
  const {pageErrors} = watchPage(page);

  await page.goto("/tests/mock?level=A1");
  await expect(page.getByRole("heading", {level: 1})).toContainText("محاكاة امتحان Goethe — A1");
  await expect(page.getByText(/اختبار مستوى A1/).first()).toBeVisible({timeout: 15_000});

  // تبديل المستوى عبر الرابط
  await page.getByRole("link", {name: /^B1 ·/}).click();
  await expect(page.getByRole("heading", {level: 1})).toContainText("محاكاة امتحان Goethe — B1");
  await expect(page.getByText(/اختبار مستوى B1/).first()).toBeVisible({timeout: 15_000});

  // الوضع التكيفي
  await page.getByRole("link", {name: /فعّل الوضع التكيفي/}).click();
  await expect(page.getByRole("link", {name: /✓ التكيفي مفعّل/})).toBeVisible();
  await expect(page.getByText(/اختبار مستوى B1/).first()).toBeVisible({timeout: 15_000});

  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});

test("محاكاة Goethe: الإجابة والتسليم يظهران لوحة النتيجة", async ({page}) => {
  const {pageErrors} = watchPage(page);
  await page.goto("/tests/mock?level=A1");
  await expect(page.getByText(/اختبار مستوى A1/).first()).toBeVisible({timeout: 15_000});

  // امضِ على كل الأسئلة: اختر خياراً إن وُجد، وإلا اكتب نصاً، ثم «التالي»
  for (let i = 0; i < 40; i++) {
    const submit = page.getByRole("button", {name: /تسليم الاختبار/});
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
    const next = page.getByRole("button", {name: /^(التالي|القسم التالي)/}).first();
    if (await next.isVisible().catch(() => false)) {
      await next.click();
      await page.waitForTimeout(40);
    } else {
      break;
    }
  }

  // لوحة النتيجة
  await expect(page.getByText(/المستوى المقدر/)).toBeVisible({timeout: 15_000});
  await expect(page.getByRole("heading", {name: "النتائج حسب المهارة"})).toBeVisible();
  await expect(page.getByText(/الزمن المستخدم/)).toBeVisible();
  expect(pageErrors, "أخطاء JavaScript في الصفحة").toEqual([]);
});
