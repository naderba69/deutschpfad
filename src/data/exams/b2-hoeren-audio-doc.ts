/**
 * مُولّد وثيقة إنتاج مقاطع صوت امتحان B2.
 * الوثيقة مشتقّة آلياً من بيانات الامتحان (`B2_HOEREN_AUDIO`) — فلا تتباعد
 * النصوص المطلوب إنتاجها عن النصوص التي يقرأها الامتحان فعلاً.
 * التحديث: `EXPORT_B2_SCRIPTS=1 npx vitest run src/data/exams/b2-hoeren-audio.test.ts`
 */
import { B2_HOEREN_SETS } from "@/data/exams";
import { B2_HOEREN_AUDIO, B2_HOEREN_SET_KEYS, maxPlaysForTeil } from "@/data/exams/b2-hoeren-audio";

export function buildB2AudioProductionDoc(): string {
  const out: string[] = [];
  out.push("# نصوص ومقاطع صوت الاستماع لامتحان B2");
  out.push("");
  out.push("> هذا الملف **مُشتقّ آلياً** من بيانات الامتحان (`src/data/exams/b2-hoeren-audio.ts`) —");
  out.push("> لا تُحرّره يدوياً. لتحديثه بعد أي تغيير في النصوص:");
  out.push("> `EXPORT_B2_SCRIPTS=1 npx vitest run src/data/exams/b2-hoeren-audio.test.ts`");
  out.push("");
  out.push("## 1. الخلاصة");
  out.push("");
  out.push("- المطلوب: **15 مقطعاً** = 3 نماذج (A/B/C) × 5 ملفات لكل نموذج.");
  out.push("- المسار: `public/audio/exam-b2/<النموذج>/<اسم الملف>` — مثال: `public/audio/exam-b2/a/hoeren-t1.mp3`");
  out.push("- التسمية نفسها المستخدمة في A1–B1: `hoeren-t1` · `hoeren-t2` · `hoeren-t3` · `hoeren-t4-a` · `hoeren-t4-b`.");
  out.push("- سبب تقسيم الجزء 4: نصه أطول من حدّ محرّك النطق الواحد، فيُقرأ قسمين متتاليين ضمن نفس الجزء.");
  out.push("- حتى يكتمل نموذج، يقرأ الامتحان نقصه بالنطق الآلي ويعلن للمتعلم — ولا ينكسر.");
  out.push("");
  out.push("## 2. مواصفات المقطع (مطابقة لمجموعات A1–B1 الحالية)");
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
  out.push("ffmpeg -i input.wav -ac 1 -ar 44100 -b:a 56k -codec:a libmp3lame output.mp3");
  out.push("```");
  out.push("");
  out.push("## 3. الإلقاء");
  out.push("");
  out.push("- ألمانية فصحى بالسرعة الطبيعية — امتحان B2 يقيس الفهم في السرعة العادية، بلا إبطاء صناعي.");
  out.push("- الحوارات تُقرأ بصوتين (رجل/امرأة) لتمييز المتحدثين؛ الإعلانات والفقرات بصوت واحد.");
  out.push("- تُقرأ العناوين كما هي (مثل «Gespräch 1») لأنها جزء من الصوت الأصلي.");
  out.push("- **حالة النسخة الحالية:** المقاطع المولَّدة آلياً (TTS) تكفي لعمل الامتحان. أي استبدال لاحق");
  out.push("  بتسجيل بشري يكتفي بوضع الملفات بالأسماء نفسها — بلا تغيير في الكود.");
  out.push("");
  out.push("## 4. النصوص");
  out.push("");

  B2_HOEREN_AUDIO.forEach((specs, si) => {
    const key = B2_HOEREN_SET_KEYS[si];
    out.push("---");
    out.push("");
    out.push(`## النموذج ${key.toUpperCase()} — المجلد \`public/audio/exam-b2/${key}/\``);
    out.push("");
    specs.forEach((spec, ti) => {
      const teil = B2_HOEREN_SETS[si][ti];
      const texts = spec.segments.map((s) => s.text);
      const total = texts.reduce((n, t) => n + t.length, 0);
      out.push(`### الجزء ${teil.teil} — ${teil.title} (${teil.titleAr})`);
      out.push("");
      out.push(
        `مرات التشغيل في الامتحان: **${maxPlaysForTeil(teil)}** · إجمالي النص: ${total} حرفاً · عدد الملفات: ${texts.length}`,
      );
      out.push("");
      texts.forEach((t, i) => {
        out.push(`#### ${spec.segments[i].file}`, "");
        out.push(`\`${spec.base}/${spec.segments[i].file}\` — ${t.length} حرفاً`, "");
        out.push("```de", t, "```", "");
      });
    });
  });

  out.push("---");
  out.push("");
  out.push("## 5. التحقق بعد أي تغيير في المقاطع");
  out.push("");
  out.push("```bash");
  out.push("# 1) بنية البيان وأسماؤه وحدود الطول");
  out.push("npx vitest run src/data/exams/b2-hoeren-audio.test.ts");
  out.push("");
  out.push("# 2) حارس الأصول: كل نموذج إمّا مكتمل (5 ملفات صالحة) أو فارغ — لا أنصاف");
  out.push("npx vitest run src/data/audio-assets.test.ts");
  out.push("");
  out.push("# 3) سلوك المشغّل في المتصفح (مقاطع موجودة أو نطق آلي — الحالتان مغطّاتان)");
  out.push("npx playwright test e2e/b2-hoeren-audio.spec.ts");
  out.push("```");
  out.push("");
  return out.join("\n");
}
