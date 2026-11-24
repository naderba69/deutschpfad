/**
 * ═══════════════════════════════════════════════════════════
 *  النطق الدولي (IPA) لأسطر حوارات الاستماع — بيانات منفصلة
 *
 *  لماذا منفصل؟ حتى لا نعدّل ملفات الدروس نفسها. كل قيمة مصفوفة بطول عدد
 *  أسطر الحوار نفسه، بنفس الترتيب، بلا أقواس [ ]. الاختبار يحرس الطول.
 *
 *  التقسيم حسب المستوى (سقف 600 سطراً للملف): dialogue-ipa-a1.ts، dialogue-ipa-a2.ts …
 *  ملاحظة: النص مكتوب يدوياً بنطق الألمانية المعيارية (Standarddeutsch).
 *  ليس ناتجاً عن أداة آلية. يبقى قابلاً للمراجعة من متحدث أصلي.
 *  الرموز: ˈ نبرة، ː حركة طويلة، ɐ/ɐ̯ حركات مختزلة، ʁ الراء.
 * ═══════════════════════════════════════════════════════════
 */
import type {Lesson} from "@/types/lesson";
import {DIALOGUE_IPA_A1} from "@/data/lessons/dialogue-ipa-a1";
import {DIALOGUE_IPA_A2} from "@/data/lessons/dialogue-ipa-a2";
import {DIALOGUE_IPA_B1} from "@/data/lessons/dialogue-ipa-b1";

type DialogueIpaMap = Record<string, Record<string, string[]>>;

export const DIALOGUE_IPA: DialogueIpaMap = {
  ...DIALOGUE_IPA_A1,
  ...DIALOGUE_IPA_A2,
  ...DIALOGUE_IPA_B1,
};

/** يُرفق نطق IPA بأسطر الحوار المطابقة؛ لا يغيّر أي حقل آخر */
export function applyDialogueIpa(lesson: Lesson): Lesson {
  const byItem = DIALOGUE_IPA[lesson.id];
  if (!byItem) return lesson;
  return {
    ...lesson,
    listening: {
      ...lesson.listening,
      items: lesson.listening.items.map((item) => {
        const ipa = byItem[item.id];
        if (!ipa || ipa.length !== item.lines.length) return item;
        return {...item, lines: item.lines.map((line, i) => ({...line, ipa: ipa[i]}))};
      }),
    },
  };
}
