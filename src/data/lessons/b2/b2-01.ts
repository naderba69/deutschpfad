import type { Lesson } from "@/types/lesson";

/**
 * b2-01 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-01/)
 */

import {lernziele, einfuehrung, review} from "./b2-01/intro";
import {theory} from "./b2-01/theorie";
import {listening, pronunciation, writing} from "./b2-01/skills";
import {readingB201} from "./b2-01/reading";
import {practiceBank, fehlerUndTipps} from "./b2-01/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-01/cards";

export const lessonB201: Lesson = {
  id: "b2-01",
  unitId: "b2-01",
  level: "B2",
  order: 1,
  titleDe: "Wissenschaft und Forschung",
  titleAr: "العلوم والبحث",
  summary: "فهم حوارات عن موضوعات علمية، ونقل الكلام غير المباشر (Konjunktiv I / indirekte Rede) بالكامل: er sagt, er habe... — ونقل الأقوال في الأخبار والتقارير، والاستخدام الذاتي للأفعال الناقصة للتخمين (dürfte, müsste, muss, könnte).",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB201,
  listening,
  pronunciation,
  writing,
  practiceBank,
  fehlerUndTipps,
  miniTest,
  flashcards,
  mediation,
  interaction,
};

