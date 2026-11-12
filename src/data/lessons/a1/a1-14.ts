import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-14: مدخل تطبيقي إلى Perfekt وwollen/sollen.
 * تُراجع صيغة المساعد وPartizip II وأمثلة شائعة، من دون ادعاء استكمال A1.
 */
import {lernziele, einfuehrung, review} from "./a1-14/intro";
import {theory} from "./a1-14/theorie";
import {reading, listening, pronunciation, writing} from "./a1-14/skills";
import {practiceBank, fehlerUndTipps} from "./a1-14/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-14/cards";

export const lessonA114: Lesson = {
  id: "a1-14",
  unitId: "a1-07",
  level: "A1",
  order: 2,
  titleDe: "Das Perfekt: Was hast du gemacht?",
  titleAr: "الماضي المحكيّ (Perfekt) — ماذا فعلتَ؟",
  summary:
    "تدريب على تكوين Perfekt في الجمل الرئيسية (haben/sein + Partizip II)، وصيغ أفعال شائعة ضعيفة وقوية ومنفصلة وغير منفصلة وأفعال -ieren، واختيار المساعد بحسب الفعل والمعنى والسياق (وجود مفعول Akkusativ قرينة مفيدة لا اختبار وحيد)، ثم استعمال wollen وsollen في مواقف مألوفة.",

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
