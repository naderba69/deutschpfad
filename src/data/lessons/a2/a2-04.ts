import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-04: البحث عن سكن — Wechselpräpositionen (wo? Dativ / wohin? Akkusativ)
 */
import {lernziele, einfuehrung, review} from "./a2-04/intro";
import {theory} from "./a2-04/theorie";
import {reading, listening, pronunciation, writing} from "./a2-04/skills";
import {practiceBank, fehlerUndTipps} from "./a2-04/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-04/cards";

export const lessonA204: Lesson = {
  id: "a2-04",
  unitId: "a2-04",
  level: "A2",
  order: 1,
  titleDe: "Wohnungssuche",
  titleAr: "البحث عن سكن",
  summary:
    "قراءة إعلانات سكن مختارة ومفردات المعاينة والإيجار؛ وتمييز الموضع المكاني (Dativ) عن وجهة الحركة (Akkusativ) مع Wechselpräpositionen في أمثلة محددة؛ ونص قراءة ونص استماع، وتدريبات كتابة موجّهة. تفاصيل العقود وقواعد المباني تختلف، والمادة ليست نصيحة قانونية.",
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
  /* ═══ الوساطة والتفاعل الاختياريان ═══ */
  mediation,
  interaction,
};
