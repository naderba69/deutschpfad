import type { Lesson } from "@/types/lesson";

/**
 * b1-11 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-11/)
 */

import {lernziele, einfuehrung, review} from "./b1-11/intro";
import {theory} from "./b1-11/theorie";
import {listening, pronunciation, writing} from "./b1-11/skills";
import {readingB111} from "./b1-11/reading";
import {practiceBank, fehlerUndTipps} from "./b1-11/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-11/cards";

export const lessonB111: Lesson = {
  id: "b1-11",
  unitId: "b1-11",
  level: "B1",
  order: 1,
  titleDe: "B1 kompakt — Abschlusswiederholung",
  titleAr: "B1 الشامل — مراجعة ختامية",
  summary: "المراجعة الختامية لبعض قواعد B1: الجمل الموصولة وPassiv وKonjunktiv II وأدوات الربط، مع تمارين استماع وكتابة قصيرة، وعرض للوساطة والتفاعل بوصفهما تدريباً غير مقوّم.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB111,
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

