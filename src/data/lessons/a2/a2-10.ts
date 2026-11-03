/**
 * الدرس A2-10: المدرسة والتعلم — weil/wenn/ob + الضمائر الملكية
 */

import type { Lesson } from "@/types/lesson";

import {lernziele, einfuehrung, review} from "./a2-10/intro";
import {theory} from "./a2-10/theorie";
import {reading, listening, pronunciation, writing} from "./a2-10/skills";
import {practiceBank, fehlerUndTipps} from "./a2-10/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-10/cards";

export const lessonA210: Lesson = {
  id: "a2-10",
  unitId: "a2-10",
  level: "A2",
  order: 1,
  titleDe: "Lernen und Schule",
  titleAr: "المدرسة والتعلم",
  summary:
    "تمييز معنى السبب بـweil، والشرط أو الزمن بـwenn، والسؤال غير المباشر بـob؛ واستعمال صيغ ملكية منتقاة في Nominativ وAkkusativ وDativ، مع قراءة واستماع عن التعلم. لا يغطي ذلك كل دلالات الروابط أو حالات الملكية.",
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
  mediation,
  interaction,
};
