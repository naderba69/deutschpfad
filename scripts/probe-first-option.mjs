/*
 * مسبار سلوكي: هل يمكن اجتياز اختبار المستوى باختيار «الخيار الأول» دائماً؟
 * تشغيل: npm run audit:first-option   (يحتاج خادماً على :3000)
 *
 * الدافع (دفعة 51 — 2026-10-16): قياس بنك الأسئلة أظهر أن **171/171 إجابة
 * صحيحة كانت في الموضع الأول (100%)**، ومحرّكان (level-test · weekly-test)
 * يعرضان البنك بلا خلط — أي أن استراتيجية «اختر الخيار الأول» كانت تجتاز
 * الاختبار. أُصلح ذلك بموازنة البيانات + خلط الخيارات في المحرّكات الثلاثة،
 * وهذه الأداة تتحقّق من النتيجة **سلوكياً على النسخة المبنية** لا بقراءة الكود:
 * تفتح الاختبار، تجيب الخيار الأول في كل سؤال، ثم تقرأ نسب المهارات المعروضة.
 *
 * معيار الفشل: **متوسط** نسبة أي مهارة يبلغ حدّ النجاح (60% افتراضاً) — أي أن
 * الاستراتيجية العمياء صارت تكفي نظامياً. والقياس على **ثلاث جلسات** لا جلسة
 * واحدة: جلسة واحدة قد تحصل على حظّ عالٍ بالصدفة (قيس 50% مرة و13% مرة)، أما
 * الثغرة فتكون ~100% في كل جلسة — فالمتوسط يفصل الحظّ عن الخلل.
 * النتيجة المقيسة بعد الإصلاح: متوسط ~25% لكل مهارة (بدل 100%).
 *
 * متغيّرات: BASE_URL (افتراضي http://localhost:3000) · LEVEL (افتراضي A1)
 *           PASS_PCT (افتراضي 60) · SESSIONS (افتراضي 3)
 *           HEADED=1 لمشاهدة المتصفح.
 */
import { chromium } from "@playwright/test";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const LEVEL = process.env.LEVEL ?? "A1";
const PASS_PCT = Number(process.env.PASS_PCT ?? 60);

const browser = await chromium.launch({
  headless: process.env.HEADED !== "1",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

/** جلسة واحدة: يجيب الخيار الأول في كل سؤال ويعيد نسب المهارات المعروضة */
async function runSession() {
  const page = await browser.newPage();
  try {
    await page.goto(`${BASE}/tests/mock?level=${LEVEL}`, { waitUntil: "domcontentloaded" });
    await page.getByText(new RegExp(`اختبار مستوى ${LEVEL}`)).first().waitFor({ timeout: 30_000 });

    for (let i = 0; i < 40; i++) {
      const submit = page.getByRole("button", { name: /تسليم الاختبار/ });
      if (await submit.isVisible().catch(() => false)) {
        await submit.click();
        break;
      }
      const first = page.getByRole("radio").first();
      if (await first.isVisible().catch(() => false)) {
        await first.click();
      } else {
        const writing = page.getByLabel("إجابتك الكتابية");
        if (await writing.isVisible().catch(() => false)) {
          await writing.fill("Ich schreibe eine kurze Antwort auf Deutsch.");
        }
      }
      const next = page.getByRole("button", { name: /^(التالي|القسم التالي)/ }).first();
      if (!(await next.isVisible().catch(() => false))) break;
      await next.click();
      await page.waitForTimeout(60);
    }

    await page.getByText(/المستوى المقدر/).waitFor({ timeout: 30_000 });

    // أشرطة التقدّم تحمل aria-label = «<المهارة>: <النسبة>%»
    return await page
      .locator('[role="progressbar"]')
      .evaluateAll((els) =>
        els
          .map((el) => el.getAttribute("aria-label") ?? "")
          .map((label) => {
            const m = label.match(/^(.*?):\s*(\d+)%$/);
            return m ? { skill: m[1].trim(), pct: Number(m[2]) } : null;
          })
          .filter(Boolean),
      );
  } finally {
    await page.close();
  }
}

try {
  const sessions = Math.max(1, Number(process.env.SESSIONS ?? 3));
  const totals = new Map();
  for (let i = 0; i < sessions; i++) {
    const skills = await runSession();
    if (skills.length === 0) {
      console.error("⚠️ لم تُقرأ أي نسبة مهارة من لوحة النتيجة — تغيّرت بنية الواجهة؟");
      process.exitCode = 2;
      throw new Error("لا نسب مقروءة");
    }
    for (const s of skills) totals.set(s.skill, (totals.get(s.skill) ?? 0) + s.pct);
    console.log(`الجلسة ${i + 1}: ` + skills.map((s) => `${s.skill} ${s.pct}%`).join(" · "));
  }

  const averages = [...totals.entries()].map(([skill, sum]) => ({ skill, pct: Math.round(sum / sessions) }));
  const solved = averages.filter((s) => s.pct >= PASS_PCT);
  console.log(`\nمتوسط ${sessions} جلسات لاستراتيجية «الخيار الأول» على ${LEVEL} (حدّ النجاح ${PASS_PCT}%):`);
  for (const s of averages) console.log(`  · ${s.skill}: ${s.pct}%`);
  if (solved.length > 0) {
    console.error(`❌ الثغرة قائمة: مهارات بلغت حدّ النجاح بلا فهم — ${solved.map((s) => s.skill).join(" · ")}`);
    process.exitCode = 1;
  } else {
    console.log("✅ الإصلاح فعّال: الاستراتيجية العمياء لا تبلغ حدّ النجاح في أي مهارة.");
  }
} finally {
  await browser.close();
}
