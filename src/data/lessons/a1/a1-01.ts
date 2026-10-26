import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-01: التعارف والتحيات — نموذج كامل لنظام الدرس الموحد
 * (يعرض المكونات العشرة كلها). قُسّم في المرحلة 5 إلى أجزاء في a1-01/.
 */

import {lernziele, einfuehrung} from "./a1-01/intro";
import {review} from "./a1-01/review";
import {theory} from "./a1-01/theorie";
import {reading, listening, pronunciation, writing} from "./a1-01/skills";
import {practiceBank, fehlerUndTipps} from "./a1-01/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-01/cards";
import {readingA1B} from "./a1-01/part2";

const masterA101: Lesson = {
  id: "a1-01",
  unitId: "a1-01",
  level: "A1",
  order: 1,
  titleDe: "Hallo! Ich heiße …",
  titleAr: "التعارف والتحيات",
  summary: "التحيات والوداع، تقديم النفس، تصريف sein وheißen وkommen، والفرق بين du وSie، مع أسئلة التعارف الأساسية (Wie heißt du؟ Woher kommst du؟).",
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


/* ═══ التقسيم إلى جزأين (A1-01 + A1-01b) ═══
 * الجزء الأول: التعارف، وsein، وdu/Sie، والتحيات، وأسئلة التعارف الأساسية.
 * الجزء الثاني: أسئلة W وترتيب V2، وتصريف الأفعال المنتظمة.
 * المصدر واحد (masterA101) لتفادي تكرار المحتوى؛ كل جزء يأخذ نصيبه بالمعرّف. */

const PART2_THEORY = new Set(["t2", "t3"]);
const PART2_TASKS = new Set([
  "e8", "e11", "e12", "e13", "e14", "e20", "e21",
  "e22", "e23", "e24", "e25", "e26", "e27", "e28",
  "m3", "m4", "m5", "w2",
]);
const PART2_FLASHCARDS = new Set([
  "fc5", "fc9", "fc10", "fc13",
  "fc20", "fc21", "fc22", "fc23", "fc24", "fc25", "fc26", "fc27",
]);
const PART2_GOALS = new Set(["z5", "z6", "z7", "z8"]);

const isPart2Task = (id: string) => PART2_TASKS.has(id);

/** الجزء الأول: كل شيء ما عدا محتوى الجزء الثاني */
export const lessonA101: Lesson = {
  ...masterA101,
  theory: masterA101.theory.filter((t) => !PART2_THEORY.has(t.id)),
  lernziele: masterA101.lernziele.filter((g) => !PART2_GOALS.has(g.id)),
  practiceBank: masterA101.practiceBank.filter((t) => !isPart2Task(t.id)),
  miniTest: masterA101.miniTest.filter((t) => !isPart2Task(t.id)),
  writing: masterA101.writing.filter((t) => !isPart2Task(t.id)),
  flashcards: masterA101.flashcards.filter((f) => !PART2_FLASHCARDS.has(f.id)),
};

const rebaseTaskId = (id: string) => id.replace(":a1-01:", ":a1-01b:");

/** الجزء الثاني: أسئلة W وتصريف الأفعال المنتظمة */
export const lessonA101b: Lesson = {
  id: "a1-01b",
  unitId: "a1-01",
  level: "A1",
  order: 1.5,
  titleDe: "Wer? Woher? Wie? — Fragen und Verben",
  titleAr: "أسئلة W وتصريف الأفعال المنتظمة",
  summary:
    "أسئلة الاستفهام W-Fragen وترتيب الجملة (V2)، وتصريف الأفعال المنتظمة بالسلسلة الذهبية مع وصلة -e- والاستثناءات.",
  lernziele: masterA101.lernziele
    .filter((g) => PART2_GOALS.has(g.id))
    .map((g) => ({
      ...g,
      evidence: g.evidence && {
        ...g.evidence,
        taskIds: (g.evidence.taskIds ?? []).map(rebaseTaskId),
      },
    })),
  einfuehrung: {
    motivatingQuestionAr:
      "لديك الآن جمل عن نفسك. كيف تسأل شخصاً آخر عن اسمه ومكانه وعمله؟ فكّر في الأسئلة قبل أن تبدأ.",
    motivatingQuestionDe: "Wie fragst du nach Name, Herkunft und Wohnort?",
    contextAr:
      "الأسئلة الألمانية تبدأ بكلمة استفهام، ثم يأتي الفعل، ثم الفاعل. هذا الترتيب هو ما نتدرب عليه في هذا الدرس.",
    contextDe: "Wie? Woher? Wo? Wann? Warum?",
    connectionToPreviousAr:
      "يكمّل هذا الدرس ما تعلمته في الجزء الأول: sein وheißen وkommen.",
    activateVocabulary: [
      { de: "woher", ar: "من أين" },
      { de: "wohnen", ar: "يسكن" },
      { de: "lernen", ar: "يتعلم" },
    ],
  },
  theory: masterA101.theory.filter((t) => PART2_THEORY.has(t.id)),
  reading: readingA1B,
  listening: { items: [], questions: [] },
  pronunciation: masterA101.pronunciation,
  writing: masterA101.writing.filter((t) => isPart2Task(t.id)),
  practiceBank: masterA101.practiceBank.filter((t) => isPart2Task(t.id)),
  fehlerUndTipps: masterA101.fehlerUndTipps,
  miniTest: masterA101.miniTest.filter((t) => isPart2Task(t.id)),
  flashcards: masterA101.flashcards.filter((f) => PART2_FLASHCARDS.has(f.id)),
  mediation: [
    {
      id: "med-a1-01b-1",
      type: "summarize-de-to-ar",
      titleAr: "انقل إلى صديقك جواب ثلاثة أسئلة عن شخص",
      sourceDe: "Lena kommt aus Berlin. Sie wohnt jetzt in Tunis und lernt Arabisch.",
      sourceAr: "لينا من برلين. هي تسكن الآن في تونس وتتعلم العربية.",
      taskAr: "انقل المعلومات أعلاه إلى صديقك بالعربية، وأجب عن: من أين لينا؟ وأين تسكن؟ وماذا تتعلم؟",
      modelAnswerAr: "«لينا من برلين، وهي تسكن الآن في تونس، وتتعلم اللغة العربية.»",
      keyPointsAr: ["ذكرت الأصل (برلين)", "ذكرت مكان السكن (تونس)", "ذكرت ما تتعلمه (العربية)"],
    },
  ],
  interaction: [
    {
      id: "int-a1-01b-1",
      scenarioAr: "تسأل شخصاً ألمانياً عن أصله ومكان سكنه في حفلة.",
      scenarioDe: "Du fragst eine Person auf einer Party nach ihrer Herkunft.",
      strategyAr: "الاستراتيجية المستهدفة: طرح أسئلة W والرد على أسئلة الآخر بجملة كاملة.",
      rounds: [
        {
          speakerDe: "Hallo! Woher kommst du?",
          speakerAr: "مرحباً! من أين أنت؟",
          options: [
            { de: "Ich komme aus Tunesien. Und du?", ar: "أنا من تونس. وأنت؟", best: true, replyDe: "Ich komme aus Berlin. Schön, dich kennenzulernen!", replyAr: "أنا من برلين. سررت بمعرفتك!" },
            { de: "Ich wohne in einem Auto.", ar: "أسكن في سيارة.", best: false, replyDe: "Oh, wirklich? Das ist ungewöhnlich!", replyAr: "أوه، حقاً؟ هذا غير معتاد!" },
          ],
        },
        {
          speakerDe: "Wo wohnst du in Tunis?",
          speakerAr: "أين تسكن في تونس؟",
          options: [
            { de: "Ich wohne in der Medina.", ar: "أسكن في المدينة العتيقة.", best: true, replyDe: "Wie schön! Die Medina ist toll.", replyAr: "جميل! المدينة العتيقة رائعة." },
            { de: "Ich wohne in Berlin, ja.", ar: "أسكن في برلين، نعم.", best: false, replyDe: "Moment, du wohnst doch in Tunis?", replyAr: "لحظة، ألست تسكن في تونس؟" },
          ],
        },
      ],
    },
  ],
};

