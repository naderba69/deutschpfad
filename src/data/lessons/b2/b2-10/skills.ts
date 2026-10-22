/**
 * b2-10 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "محاضرة افتتاحية",
        lines: [
          { speaker: "Professor", de: "Willkommen im Seminar! Die vorliegende Veranstaltung beschäftigt sich mit der Linguistik.", ar: "أهلاً في الندوة! تتناول هذه الفعالية علم اللغة." },
          { speaker: "Professor", de: "Es ist erwiesen, dass Sprachen unser Denken beeinflussen.", ar: "ثابت أن اللغات تؤثر على تفكيرنا." },
          { speaker: "Sami", de: "Meiner Ansicht nach ist das besonders bei Mehrsprachigen sichtbar.", ar: "في رأيي هذا واضح خاصة لدى متعددي اللغات." },
          { speaker: "Professor", de: "Sehr guter Punkt! Möglicherweise vertiefen wir das nächste Woche.", ar: "نقطة ممتازة! ربما نعمق هذا الأسبوع القادم." },
        ],
      },
      {
        id: "l2",
        title: "التحضير للامتحان",
        lines: [
          { speaker: "Anna", de: "Bis zum Goethe-Zertifikat werde ich alle Übungen gemacht haben.", ar: "بحلول شهادة غوته سأكون قد أنجزت كل التمارين." },
          { speaker: "Karim", de: "Zusammenfassend lässt sich sagen: Wir sind bereit!", ar: "خلاصةً يمكن القول: نحن جاهزون!" },
          { speaker: "Anna", de: "In gewissem Maße ja. Aber die mündliche Prüfung macht mir noch Sorgen.", ar: "إلى حد ما نعم. لكن الامتحان الشفهي ما زال يقلقني." },
          { speaker: "Karim", de: "Keine Sorge! Wir üben jeden Tag, indem wir sprechen.", ar: "لا تقلقي! نتدرب كل يوم بالتحدث." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Womit beschäftigt sich die Veranstaltung?",
        questionAr: "بماذا تتناول الفعالية؟",
        options: ["mit der Linguistik", "mit der Geschichte", "mit der Kunst", "mit der Wirtschaft"],
        correctIndex: 0,
        explanation: "قال الأستاذ: Die vorliegende Veranstaltung beschäftigt sich mit der Linguistik.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«mit der Geschichte» لم تُذكر كموضوع للندوة.",
          "«mit der Kunst» لم تُذكر كموضوع للندوة.",
          "«mit der Wirtschaft» لم تُذكر كموضوع للندوة.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Anna Sorgen?",
        questionAr: "ما الذي يقلق آنا؟",
        options: ["die mündliche Prüfung", "die schriftliche Prüfung", "die Hausarbeit", "das Seminar"],
        correctIndex: 0,
        explanation: "قالت آنا: Die mündliche Prüfung macht mir noch Sorgen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«die schriftliche Prüfung» لم تقل آنا إنها تقلق منها.",
          "«die Hausarbeit» لم تقل آنا إنها تقلق منها.",
          "«das Seminar» لم تقل آنا إنها تقلق منه.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie üben die beiden?",
        questionAr: "كيف يتدربون؟",
        options: ["indem sie sprechen", "indem sie schreiben", "indem sie lesen", "indem sie schlafen"],
        correctIndex: 0,
        explanation: "قال كريم: Wir üben jeden Tag, indem wir sprechen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«indem sie schreiben» لم يقل كريم إنهم يتدربون بالكتابة.",
          "«indem sie lesen» لم يقل كريم إنهم يتدربون بالقراءة.",
          "«indem sie schlafen» تنفي التدريب، وهذا عكس ما قاله كريم.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "مراجعة أصوات B2",
    items: [
      { de: "die Hausarbeit", ar: "البحث الجامعي", note: "au = آو: هاوس-أربايت" },
      { de: "die Fachsprache", ar: "لغة التخصص", note: "ch = خ + sp = شپ: فاخ-شپراخه" },
      { de: "das Seminar", ar: "الندوة", note: "s = ز: زيمينار" },
      { de: "die Linguistik", ar: "علم اللغة", note: "g ثم u: لينْگوإستيك [lɪŋɡuˈɪstɪk] — والنبر على «إستيك»" },
      { de: "zweifellos", ar: "بلا شك", note: "zw = تسڤ: تسڤايفِلوس" },
      { de: "erwiesen", ar: "مثبت", note: "ie = إي: إرڤيزِن" },
    ],
    tip: "Fachsprache = فاخ-شپراخه — خ + شپ معاً. وzweifellos = تسڤايفِلوس — zw ألمانية تسڤ.",
    shadowing: [
      { de: "Es ist erwiesen, dass...", ar: "ثابت أن...", tip: "erwiesen = إرڤيزِن" },
      { de: "Meiner Ansicht nach ist das wichtig.", ar: "في رأيي هذا مهم.", tip: "Meiner Ansicht nach" },
      { de: "Möglicherweise stimmt das.", ar: "ربما هذا صحيح.", tip: "möglicherweise = مُوكليخرڤايزِه" },
      { de: "Zusammenfassend lässt sich sagen...", ar: "خلاصةً يمكن القول...", tip: "zusammenfassend = تسو-زامِن-فاسِنت" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة أكاديمية:",
      prompt: "«ثابت أن تعلم اللغات يقوي الدماغ» (es ist erwiesen)",
      acceptedAnswers: ["Es ist erwiesen, dass Sprachenlernen das Gehirn stärkt", "Es ist erwiesen, dass Sprachen das Gehirn stärken"],
      sampleAnswer: "Es ist erwiesen, dass Sprachenlernen das Gehirn stärkt.",
      explanation: "es ist erwiesen + dass + فعل في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالعبارة:",
      template: "___ Ansicht nach ist das wichtig. (في رأيي) ___ lässt sich sagen: B2 ist geschafft. (خلاصةً)",
      blanks: [
        { correct: "Meiner", options: ["Meiner", "Meine", "Mein"] },
        { correct: "Zusammenfassend", options: ["Zusammenfassend", "Erstens", "Außerdem"] },
      ],
      explanation: "Meiner Ansicht nach + Zusammenfassend.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Es ist erwiesen, dass Sprachen unser Denken beeinflussen.",
      explanation: "ثابت أن اللغات تؤثر على تفكيرنا — جملة أكاديمية.",
      errorType: "spelling",
    },
  ];
