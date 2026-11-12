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
  review: masterA101.review,
  theory: masterA101.theory.filter((t) => PART2_THEORY.has(t.id)),
  reading: readingA1B,
  listening: {
    items: [
      {
        id: "l1",
        title: "سارة تتعرّف إلى زملائها",
        audioNoteAr: "هذا الحوار يُنطق عبر SpeechSynthesis في المتصفح، لا من تسجيل MP3. قد يختلف الصوت باختلاف الجهاز والمتصفح.",
        lines: [
          { speaker: "Frau Weber", de: "Hallo, Sara! Woher kommst du?", ar: "مرحباً يا سارة! من أين أنتِ؟" },
          { speaker: "Sara", de: "Ich komme aus Tunis. Und woher kommst du?", ar: "أنا من تونس. وأنتَ من أين؟" },
          { speaker: "Milan", de: "Ich komme aus Berlin.", ar: "أنا من برلين." },
          { speaker: "Frau Weber", de: "Wo wohnst du jetzt, Sara?", ar: "أين تسكنين الآن يا سارة؟" },
          { speaker: "Sara", de: "Ich wohne in Kreuzberg und lerne Deutsch.", ar: "أسكن في كرويتسبرغ وأتعلم الألمانية." },
        ],
      },
      {
        id: "l2",
        title: "ميلان والعمل والدراسة",
        audioNoteAr: "هذا الحوار يُنطق عبر SpeechSynthesis في المتصفح، لا من تسجيل MP3. قد يختلف الصوت باختلاف الجهاز والمتصفح.",
        lines: [
          { speaker: "Frau Weber", de: "Was machst du, Milan?", ar: "ماذا تعمل يا ميلان؟" },
          { speaker: "Milan", de: "Ich arbeite in einem Café.", ar: "أعمل في مقهى." },
          { speaker: "Sara", de: "Wann lernst du Deutsch?", ar: "متى تتعلم الألمانية؟" },
          { speaker: "Milan", de: "Ich lerne am Abend. Und wo arbeitest du, Sara?", ar: "أتعلم في المساء. وأين تعملين يا سارة؟" },
          { speaker: "Sara", de: "Ich arbeite auch in einem Café.", ar: "أعمل أنا أيضاً في مقهى." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار ثم اختر الإجابة الصحيحة:",
        questionDe: "Woher kommt Sara?",
        questionAr: "من أين سارة؟",
        options: ["Aus Berlin", "Aus Tunis", "Aus Kreuzberg", "Aus Polen"],
        correctIndex: 1,
        explanation: "تقول سارة: «Ich komme aus Tunis»؛ برلين أصل ميلان، وكرويتسبرغ مكان سكن سارة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار ثم اختر الإجابة الصحيحة:",
        questionDe: "Wo wohnt Sara jetzt?",
        questionAr: "أين تسكن سارة الآن؟",
        options: ["In Tunis", "In Berlin-Mitte", "In Kreuzberg", "In einem Café"],
        correctIndex: 2,
        explanation: "تقول سارة: «Ich wohne in Kreuzberg»؛ وتونس أصلها، لا مكان سكنها الحالي.",
        errorType: "comprehension",
      },
      {
        id: "q3",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار ثم اختر الإجابة الصحيحة:",
        questionDe: "Was lernt Sara?",
        questionAr: "ماذا تتعلم سارة؟",
        options: ["Arabisch", "Informatik", "Deutsch", "Englisch"],
        correctIndex: 2,
        explanation: "تقول سارة: «Ich lerne Deutsch»؛ وهذا مثال على تصريف lernen مع ich.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الثاني ثم اختر الإجابة الصحيحة:",
        questionDe: "Wo arbeitet Milan?",
        questionAr: "أين يعمل ميلان؟",
        options: ["In einer Schule", "In einem Café", "In Kreuzberg", "Zu Hause"],
        correctIndex: 1,
        explanation: "يقول ميلان: «Ich arbeite in einem Café»؛ ويستخدم الفعل arbeiten مع الضمير ich.",
        errorType: "vocabulary",
      },
      {
        id: "q5",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الثاني ثم اختر الإجابة الصحيحة:",
        questionDe: "Wann lernt Milan Deutsch?",
        questionAr: "متى يتعلم ميلان الألمانية؟",
        options: ["Am Morgen", "Am Montag", "Am Abend", "In einem Café"],
        correctIndex: 2,
        explanation: "يقول ميلان: «Ich lerne am Abend»؛ والسؤال بـ Wann يطلب زمن التعلّم.",
        errorType: "comprehension",
      },
    ],
  },
  pronunciation: {
    id: "p-a1-01b",
    title: "أسئلة W ونهايات الأفعال المنتظمة",
    items: [
      { de: "Woher", ar: "من أين", note: "تدرّب على الكلمة داخل السؤال الكامل: Woher kommst du?" },
      { de: "wohnst", ar: "تسكن (مع du)", note: "أظهر نهاية الفعل -st في الصيغة: du wohnst." },
      { de: "lernt", ar: "يتعلّم (مع er/sie/es)", note: "لاحظ نهاية الغائب المفرد -t في الجملة: Er lernt Deutsch." },
      { de: "arbeitest", ar: "تعمل (مع du)", note: "في الكتابة والنطق، انتبه إلى وصلة -e- بين الجذع arbeit- والنهاية -st." },
    ],
    tip: "استمع إلى النموذج المتاح في المتصفح ثم كرر السؤال والجملة كاملة. قد يختلف صوت النطق باختلاف الجهاز والمتصفح؛ هذا التدريب لا يقيس دقة النطق آلياً.",
    shadowing: [
      { de: "Woher kommst du?", ar: "من أين أنت؟", tip: "قل السؤال كاملاً، مع الفعل kommst قبل الفاعل du." },
      { de: "Wo wohnst du?", ar: "أين تسكن؟", tip: "حافظ على نهاية -st في wohnst." },
      { de: "Warum lernst du Deutsch?", ar: "لماذا تتعلّم الألمانية؟", tip: "انتبه إلى نهاية du -st في lernst." },
      { de: "Du arbeitest in einem Café.", ar: "أنت تعمل في مقهى.", tip: "لا تحذف وصلة -e- في arbeitest." },
    ],
  },
  writing: masterA101.writing.filter((t) => isPart2Task(t.id)),
  practiceBank: masterA101.practiceBank.filter((t) => isPart2Task(t.id)),
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Woher du kommst?",
        right: "Woher kommst du?",
        whyAr: "في سؤال W مباشر مستقل يأتي الفعل المصرّف بعد أداة السؤال ثم الفاعل. أما Woher du kommst فيصح داخل جملة فرعية، مثل Ich weiß, woher du kommst.",
      },
      {
        wrong: "Du wohnt in Tunis.",
        right: "Du wohnst in Tunis.",
        whyAr: "مع du تأخذ الأفعال المنتظمة نهاية -st، لا نهاية الغائب المفرد -t: du wohnst. وينطبق النمط نفسه على du lernst.",
      },
      {
        wrong: "Du arbeitst in einem Café.",
        right: "Du arbeitest in einem Café.",
        whyAr: "عندما ينتهي الجذع بـ t أو d تظهر وصلة -e- قبل النهاية لتسهيل الصيغة: arbeit- + e + st = arbeitest.",
      },
      {
        wrong: "Er lernen Deutsch.",
        right: "Er lernt Deutsch.",
        whyAr: "مع er/sie/es تأخذ الأفعال المنتظمة نهاية -t، لا صيغة المصدر -en: er lernt.",
      },
    ],
    eselsbruecken: [
      "في سؤال W المباشر: أداة السؤال، ثم الفعل المصرّف، ثم الفاعل — Woher kommst du?",
      "اربط النهايات بالضمائر: ich -e، du -st، er/sie/es -t، wir -en، ihr -t، sie/Sie -en.",
    ],
    culturalNote: {
      title: "سؤال W بصيغة المخاطبة",
      content: "مع المخاطبة غير الرسمية نقول: Wo wohnst du? ومع المخاطبة الرسمية: Wo wohnen Sie? يتبع اختيار du أو Sie طبيعة العلاقة والسياق والعرف المحلي.",
    },
  },
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

