import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-13: مراجعة ختامية مختارة لموضوعات من مسار A1.
 * يعيد استخدام أنماط محددة، ويعرّف ببنية نموذج Start Deutsch 1؛
 * لا يحصي قواعد المستوى كلها، ولا يقيس الجاهزية أو الإتقان العام.
 */
import {lernziele, einfuehrung, review} from "./a1-13/intro";
import {theory} from "./a1-13/theorie";
import {reading, listening, pronunciation, writing} from "./a1-13/skills";
import {practiceBank, fehlerUndTipps} from "./a1-13/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-13/cards";

export const lessonA113: Lesson = {
  id: "a1-13",
  unitId: "a1-13",
  level: "A1",
  order: 1,
  titleDe: "A1 kompakt — Wiederholung und Prüfungseinblick",
  titleAr: "A1 — مراجعة ختامية مختارة",
  summary:
    "مراجعة ختامية لموضوعات مختارة من دروس A1، مع مهام محددة في القراءة والاستماع والكتابة، وعرض لبنية نموذج Start Deutsch 1. لا يثبت الدرس إتقان المستوى أو الجاهزية للاختبار أو بدء A2.",

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
  oralProduction: [{
    id: "oral-a1-13-intro",
    titleAr: "قدّم نفسك شفهياً",
    promptAr: "قل بالألمانية اسمك وبلدك ومكان سكنك، ثم اذكر شيئاً واحداً تحبه.",
    promptDe: "Wie heißt du? Woher kommst du? Wo wohnst du? Was machst du gern?",
    prompts: ["قل جملة أو جملتين قصيرتين عن نفسك.", "يمكنك الاستعانة بكلمات الدرس، لكن حاول ألا تقرأ الإجابة كاملة."],
    selfReview: ["ذكرت اسمي أو بلدي أو مكان سكني.", "استخدمت جملة ألمانية مفهومة.", "تحدثت بصوت مسموع وأعدت الاستماع إلى التسجيل إذا سجلته."],
  }],
};
