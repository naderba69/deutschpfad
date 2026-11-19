import type { Lesson } from "@/types/lesson";

/**
 * b2-13 — رأس الدرس (أجزاؤه في b2-13/)
 * وحدة «التكنولوجيا والذكاء الاصطناعي»: الاشتقاق التقني والروابط الاستدراكية.
 */

import {lernziele, einfuehrung, review} from "./b2-13/intro";
import {theory} from "./b2-13/theorie";
import {readingB213} from "./b2-13/reading";
import {listening, pronunciation, writing} from "./b2-13/skills";
import {practiceBank, fehlerUndTipps} from "./b2-13/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-13/cards";

export const lessonB213: Lesson = {
  id: "b2-13",
  unitId: "b2-13",
  level: "B2",
  order: 1,
  titleDe: "Technologie und KI",
  titleAr: "التكنولوجيا والذكاء الاصطناعي",
  summary: "الرقمنة والذكاء الاصطناعي وحماية البيانات: الاشتقاق التقني (السوابق واللواحق والمركبات: die Digitalisierung، nachvollziehbar، der Datenschutz)، والروابط الاستدراكية في النقاش التقني (obwohl، dennoch، zwar ... aber).",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB213,
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
