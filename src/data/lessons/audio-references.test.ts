import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { LESSONS } from "./index";

/**
 * حارس مراجع الصوت في الدروس.
 *
 * العطب الذي كشفه هذا الحارس: درس b2-12 أشار إلى ستة ملفات
 * `/audio/lessons/b2-12/*.mp3` غير موجودة. لم يكتشفه أي حارس سابق لأن
 * `scripts/verify-audio-assets.mjs` يفحص الحوارات والبودكاست والمفردات
 * فقط، والاختبارات الوحدة تتحقق من بنية الأسئلة لا من وجود الملف.
 * النتيجة في الواجهة: زر تشغيل يظهر ولا يعمل — أعطال صامتة.
 *
 * القاعدة: كل `audioSrc` في الدروس يشير إلى ملف موجود فعلاً في `public/`.
 * من لا يملك ملفاً صوتياً يترك `audioSrc` غير معرّف فيُلجأ إلى TTS المتصفح
 * (وهو سلوك `hoerverstehen.tsx` و`SpeakButton`).
 */

const PUBLIC_DIR = path.resolve(process.cwd(), "public");

type AudioRef = { lessonId: string; itemId: string; src: string };

function collectLessonAudioRefs(): AudioRef[] {
  const refs: AudioRef[] = [];
  for (const lesson of LESSONS) {
    for (const item of lesson.listening?.items ?? []) {
      for (const line of item.lines) {
        if (line.audioSrc) {
          refs.push({ lessonId: lesson.id, itemId: item.id, src: line.audioSrc });
        }
      }
    }
  }
  return refs;
}

describe("مراجع الصوت في الدروس", () => {
  const refs = collectLessonAudioRefs();

  it("توجد مراجع صوتية فعلية (الحارس لا يمرّ على قائمة فارغة)", () => {
    expect(refs.length).toBeGreaterThan(0);
  });

  it("كل audioSrc في الدروس يشير إلى ملف موجود في public/", () => {
    const missing = refs
      .filter((ref) => {
        const relative = ref.src.replace(/^\//, "");
        return !existsSync(path.join(PUBLIC_DIR, relative));
      })
      .map((ref) => `${ref.lessonId}/${ref.itemId}: ${ref.src}`);
    expect(missing, `ملفات صوتية مفقودة (${missing.length})`).toEqual([]);
  });

  it("لا يوجد audioSrc فارغ أو غير مطلق", () => {
    const invalid = refs.filter((ref) => !ref.src.startsWith("/") || ref.src.trim() === "/");
    expect(invalid, "audioSrc يجب أن يكون مساراً مطلقاً يبدأ بـ /").toEqual([]);
  });

  it("لا يخلط المقطع الواحد بين أسطر بملف صوتي وأسطر بلا ملف دون إعلان", () => {
    // الخلط يجعل زر «استمع للكل» يقفز إلى TTS بينما الأزرار الفردية تعزف ملفات،
    // فيسمع المتعلم مصدرين مختلفين في مقطع واحد. الخلط مشروع فقط إذا أعلنه
    // المقطع صراحةً في `audioNoteAr` (مثل b1-09 الذي يشرح أن السطر الأول TTS
    // والبقية ملفات، واختباره الخاص يفرض هذا الإعلان).
    const mixed = LESSONS.flatMap((lesson) =>
      (lesson.listening?.items ?? [])
        .filter((item) => {
          const withAudio = item.lines.filter((line) => line.audioSrc).length;
          return withAudio > 0 && withAudio < item.lines.length;
        })
        .filter((item) => !/TTS المتصفح/.test(item.audioNoteAr ?? ""))
        .map((item) => `${lesson.id}/${item.id}`),
    );
    expect(mixed, "مقاطع تخلط ملفات صوتية وTTS دون إعلان").toEqual([]);
  });
});
