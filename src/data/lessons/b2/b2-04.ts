import type { Lesson } from "@/types/lesson";

/**
 * b2-04 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-04/)
 */

import {lernziele, einfuehrung, review} from "./b2-04/intro";
import {theory} from "./b2-04/theorie";
import {readingB204} from "./b2-04/reading";
import {listening, pronunciation, writing} from "./b2-04/skills";
import {practiceBank, fehlerUndTipps} from "./b2-04/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-04/cards";

export const lessonB204: Lesson = {
  id: "b2-04",
  unitId: "b2-04",
  level: "B2",
  order: 1,
  titleDe: "Literatur und Medien",
  titleAr: "الأدب والإعلام المتقدم",
  summary: "النصوص الأدبية والمساهمات الإعلامية الراقية، الصفات المشتقة من الفعل (Partizipialkonstruktionen): das spielende Kind, der geschriebene Brief — واختصار الجمل النسبية.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB204,
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
