/**
 * مُولّد وثيقة إنتاج مقاطع صوت امتحان B2.
 * الوثيقة مشتقّة آلياً من بيانات الامتحان (`B2_HOEREN_AUDIO`) — فلا تتباعد
 * النصوص المطلوب تسجيلها عن النصوص التي يقرأها الامتحان فعلاً.
 * التحديث: `EXPORT_B2_SCRIPTS=1 npx vitest run src/data/exams/b2-hoeren-audio.test.ts`
 */
import { B2_HOEREN_SETS } from "@/data/exams";
import { B2_HOEREN_AUDIO, B2_HOEREN_SET_KEYS, maxPlaysForTeil } from "@/data/exams/b2-hoeren-audio";

/** تجميع أجزاء النص كما ستُقرأ في المقطع */
function renderSegments(base: string, name: string, texts: string[], plays: number, heading: string): string {
  const total = texts.reduce((n, t) => n + t.length, 0);
  const rows = texts
    .map((t, i) => {
      const file = texts.length === 1 ? name : name.replace("$i", String(i + 1));
      return [
        `#### ${file}`,
        "",
        `\`${base}/${file}\` — ${t.length} حرفاً`,
        "",
        "```de",
        t,
        "```",
        "",
      ].join("\n");
    })
    .join("\n");
  return [
    `### ${heading}`,
    "",
    `مرات التشغيل في الامتحان: **${plays}** · إجمالي النص: ${total} حرفاً · عدد الملفات: ${texts.length}`,
    "",
    rows,
  ].join("\n");
}

export function buildB2AudioProductionDoc(): string {
  const out: string[] = [];
  out.push("# إنتاج مقاطع صوت الاستماع لامتحان B2");
  out.push("");
  out.push("> هذا الملف **مُشتقّ آلياً** من بيانات الامتحان (`src/data/exams/b2-hoeren-audio.ts`) —");
  out.push("> لا تُحرّره يدوياً. لتحديثه بعد أي تغيير في النصوص:");
  out.push("> `EXPORT_B2_SCRIPTS=1 npx vitest run src/data/exams/b2-hoeren-audio.test.ts`");
  out.push("");
  out.push("## 1. الخلاصة");
  out.push("");
  out.push("- المطلوب: **42 مقطعاً** = 3 نماذج (A/B/C) × 4 أجزاء، بمجموع الملفات أدناه.");
  out.push("- المسار: `public/audio/exam-b2/<النموذج>/<اسم الملف>` — مثال: `public/audio/exam-b2/a/hoeren-t1-g1.mp3`");
  out.push("- حتى تُسجَّل المقاطع، يشغّل الامتحان النطق الآلي (TTS) تلقائياً ويصرّح بذلك للمتعلم.");
  out.push("- بمجرد وجود **كل** ملفات نموذج واحد في مجلده، ينتقل ذلك النموذج إلى الصوت البشري تلقائياً بلا أي تغيير في الكود.");
  out.push("");
  out.push("## 2. مواصفات التسجيل (مطابقة لمجموعات A1–B1 الحالية)");
  out.push("");
  out.push("| البند | القيمة |");
  out.push("|---|---|");
  out.push("| الصيغة | MP3 (MPEG-1 Layer III) |");
  out.push("| معدل البت | 56 kbps CBR |");
  out.push("| التردد | 44.1 kHz |");
  out.push("| القنوات | أحادية (Mono) |");
  out.push("| مستوى الصوت | ثابت بين الملفات — بلا ضجيج خلفية ولا صدى |");
  out.push("| بداية/نهاية الملف | بلا صمت زائد (أقل من 0.3 ثانية) |");
  out.push("");
  out.push("أمر التحويل/التطبيع الموحّد (نفس ما استُخدم مع A1–B1):");
  out.push("");
  out.push("```bash");
  out.push("# من WAV إلى MP3 بالمواصفات المتفق عليها");
  out.push("ffmpeg -i input.wav -ac 1 -ar 44100 -b:a 56k -codec:a libmp3lame output.mp3");
  out.push("```");
  out.push("");
  out.push("## 3. قواعد الإلقاء");
  out.push("");
  out.push("- الأصوات: لكل مقطع صوت واحد مناسب لسياقه (معلن محطة، بائع، موظف...). الحوارات تُقرأ بصوتين (رجل/امرأة) بتبادل الأدوار.");
  out.push("- السرعة: ألمانية فصحى طبيعية (لا إبطاء صناعي) — امتحان B2 يقيس الفهم في السرعة العادية.");
  out.push("- النطق: بلا تشديد مبالغ، وبلا ترجمة أو شرح داخل المقطع.");
  out.push("- تُقرأ العناوين الافتتاحية كما هي (مثل «Gespräch 1» و«Ansage 3») لأنها جزء من الصوت الأصلي.");
  out.push("");
  out.push("## 4. نصوص التسجيل");
  out.push("");

  B2_HOEREN_AUDIO.forEach((specs, si) => {
    const key = B2_HOEREN_SET_KEYS[si];
    const label = key.toUpperCase();
    out.push(`---`);
    out.push("");
    out.push(`## النموذج ${label} — المجلد \`public/audio/exam-b2/${key}/\``);
    out.push("");
    specs.forEach((spec, ti) => {
      const teil = B2_HOEREN_SETS[si][ti];
      const texts = spec.segments.map((s) => s.text);
      const name = spec.segments.length === 1 ? spec.segments[0].file : spec.segments[0].file.replace(/1\.mp3$/, "$i.mp3");
      out.push(
        renderSegments(
          spec.base,
          name,
          texts,
          maxPlaysForTeil(teil),
          `الجزء ${teil.teil} — ${teil.title} (${teil.titleAr})`,
        ),
      );
      out.push("");
    });
  });

  out.push("---");
  out.push("");
  out.push("## 5. التحقق بعد التسجيل");
  out.push("");
  out.push("```bash");
  out.push("# 1) حارس الأصول: يفشل إن كان مجلد نموذج ناقصاً أو مقطعاً تالفاً");
  out.push("npx vitest run src/data/audio-assets.test.ts");
  out.push("");
  out.push("# 2) بنية المقاطع وأسماؤها وعدد مرات التشغيل");
  out.push("npx vitest run src/data/exams/b2-hoeren-audio.test.ts");
  out.push("");
  out.push("# 3) سلوك المشغّل في المتصفح (مقاطع حقيقية أو TTS — كلاهما مغطّى)");
  out.push("npx playwright test e2e/b2-hoeren-audio.spec.ts");
  out.push("```");
  out.push("");
  return out.join("\n");
}
