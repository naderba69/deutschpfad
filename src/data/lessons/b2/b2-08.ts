import type { Lesson } from "@/types/lesson";

/**
 * b2-08 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-08/)
 */

import {lernziele, einfuehrung, review} from "./b2-08/intro";
import {theory} from "./b2-08/theorie";
import {readingB208} from "./b2-08/reading";
import {listening, pronunciation, writing} from "./b2-08/skills";
import {practiceBank, fehlerUndTipps} from "./b2-08/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-08/cards";

export const lessonB208: Lesson = {
  id: "b2-08",
  unitId: "b2-08",
  level: "B2",
  order: 1,
  titleDe: "Sprachen und Kulturen",
  titleAr: "اللغات والتبادل الثقافي",
  summary: "الاختلافات بين الثقافات وتعدد اللغات، الأفعال مع حروف الجر الثابتة (Verben mit Präpositionen): sich interessieren für, warten auf, sich freuen über/auf — وجدول كامل.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB208,
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
