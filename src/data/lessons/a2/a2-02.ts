import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-02: مواد مختارة عن الصحة والطبيب — أعراض، أفعال ناقصة، ووثائق صحية
 * مع أمثلة موجّهة؛ لا تمثل مساراً طبياً كاملاً أو اعتماداً منهجياً.
 */
import {lernziele, einfuehrung, review} from "./a2-02/intro";
import {theory} from "./a2-02/theorie";
import {reading, listening, pronunciation, writing} from "./a2-02/skills";
import {practiceBank, fehlerUndTipps} from "./a2-02/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-02/cards";

export const lessonA202: Lesson = {
  id: "a2-02",
  unitId: "a2-02",
  level: "A2",
  order: 1,
  titleDe: "Beim Arzt",
  titleAr: "الصحة والطبيب",
  summary: "موضوعات مختارة في وصف أعراض شائعة، واستعمال sollen/sollten ونفي الإذن أو الوجوب، ومفردات زيارة الطبيب، وبعض الأفعال الانعكاسية؛ مع مهام موجّهة للقراءة والاستماع والكتابة. التفاعل والنطق والوساطة هنا أنشطة تدريبية ولا تثبت إتقاناً عاماً أو اعتماداً.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading,
  listening,
  pronunciation,
  writing,
  practiceBank,
  fehlerUndTipps,
  miniTest,
  flashcards,


  /* ═══ أنشطة إضافية: الوساطة والتفاعل ═══ */
  mediation,
  interaction,
};
