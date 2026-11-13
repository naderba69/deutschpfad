import type { Lesson } from "@/types/lesson";

/**
 * b2-12 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-12/)
 */

import {lernziele, einfuehrung, review} from "./b2-12/intro";
import {theory} from "./b2-12/theorie";
import {readingB212} from "./b2-12/reading";
import {listening, pronunciation, writing} from "./b2-12/skills";
import {practiceBank, fehlerUndTipps} from "./b2-12/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-12/cards";

export const lessonB212: Lesson = {
  id: "b2-12",
  unitId: "b2-12",
  level: "B2",
  order: 1,
  titleDe: "Karriereentwicklung",
  titleAr: "المهن المتقدمة",
  summary: "التقدم المهني والتطوير: الترقية والتدريب المستمر والقيادة، صيغة الشرط (Konjunktiv II) للفرضيات المهنية والتهذيب، والمبني للمجهول في وثائق التقديم والشهادات.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB212,
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
