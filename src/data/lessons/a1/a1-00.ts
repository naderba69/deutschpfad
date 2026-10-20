import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-00: الأبجدية والنطق — أساس كل شيء
 * (يُفتح قبل درس التعارف مباشرة ضمن الوحدة الأولى)
 */

import {lernziele, einfuehrung, review} from "./a1-00/intro";
import {theory} from "./a1-00/theorie";
import {reading, listening, pronunciation, writing} from "./a1-00/skills";
import {practiceBank, fehlerUndTipps} from "./a1-00/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-00/cards";

export const lessonA100: Lesson = {
  id: "a1-00",
  unitId: "a1-01",
  level: "A1",
  order: 0,
  titleDe: "Das Alphabet und die Aussprache",
  titleAr: "الأبجدية الألمانية والنطق",
  summary:
    "الحروف الستة والعشرون + الحروف المعلمة (ä, ö, ü) وß + الأصوات المركبة (ch, sch, ei, ie, eu, äu, sp, st, pf, tz) — مع تمارين نطق مكثفة مصممة لأخطاء المتعلم العربي.",

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
