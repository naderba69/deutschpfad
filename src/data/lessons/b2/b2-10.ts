import type { Lesson } from "@/types/lesson";

/**
 * b2-10 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-10/)
 */

import {lernziele, einfuehrung, review} from "./b2-10/intro";
import {theory} from "./b2-10/theorie";
import {readingB210} from "./b2-10/reading";
import {listening, pronunciation, writing} from "./b2-10/skills";
import {practiceBank, fehlerUndTipps} from "./b2-10/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-10/cards";

export const lessonB210: Lesson = {
  id: "b2-10",
  unitId: "b2-10",
  level: "B2",
  order: 1,
  titleDe: "Studium in Deutschland",
  titleAr: "الدراسة في ألمانيا",
  summary: "النظام الجامعي والكتابة الأكاديمية (Fachsprache)، أساليب التأكيد والتلطيف والتحفظ، ومراجعة شاملة تجمع كل قواعد B2 — خاتمة المستويات الأربعة!",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB210,
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

