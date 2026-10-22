import type { Lesson } from "@/types/lesson";

/**
 * b1-12 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-12/)
 */

import {lernziele, einfuehrung, review} from "./b1-12/intro";
import {theory} from "./b1-12/theorie";
import {listening, pronunciation, writing} from "./b1-12/skills";
import {readingB112} from "./b1-12/reading";
import {practiceBank, fehlerUndTipps} from "./b1-12/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-12/cards";

export const lessonB112: Lesson = {
  id: "b1-12",
  unitId: "b1-10",
  level: "B1",
  order: 2,
  titleDe: "Ziele, Gründe und Absichten",
  titleAr: "الأهداف والأسباب والنوايا",
  summary: "التعبير عن الغرض بـ damit و um … zu (وشرط وحدة الفاعل)، وحروف الجر مع المضاف إليه (wegen, trotz, während, aufgrund) وبدائلها الشائعة في اللغة المحكية.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB112,
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

