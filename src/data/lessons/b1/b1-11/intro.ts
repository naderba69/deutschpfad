/**
 * b1-11 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann bei Relativsätzen, Konjunktiv II und den Konjunktionen damit, um ... zu und obwohl die richtige Form wählen.",
      ar: "أن أختار الصيغة الصحيحة في الجمل الموصولة وجملة الشرط غير الواقعي وأدوات الربط (damit، um...zu، obwohl).",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["ex-b1-11-1", "ex-b1-11-2", "ex-b1-11-3", "ex-b1-11-4", "ex-b1-11-6", "mt-b1-11-1", "mt-b1-11-2"],
        taskIds: [
          "practice:b1-11:ex-b1-11-1",
          "practice:b1-11:ex-b1-11-2",
          "practice:b1-11:ex-b1-11-3",
          "practice:b1-11:ex-b1-11-4",
          "practice:b1-11:ex-b1-11-6",
          "mini-test:b1-11:mt-b1-11-1",
          "mini-test:b1-11:mt-b1-11-2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الجمل الموصولة والشرط وأدوات الربط (ex-1 إلى ex-4 وex-6 وmt-1 وmt-2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann wichtige Details aus einer kurzen Nachricht und einem Gespräch über Änderungen im Alltag verstehen.",
      ar: "أن أفهم معلومات مهمة من رسالة قصيرة وحوار عن تغييرات في الحياة اليومية.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["lsq-b1-11-1", "lsq-b1-11-2", "lsq-b1-11-3", "lsq-b1-11-4", "lsq-b1-11-5", "lsq-b1-11-6"],
        taskIds: [
          "listening:ls-b1-11-1:lsq-b1-11-1",
          "listening:ls-b1-11-1:lsq-b1-11-2",
          "listening:ls-b1-11-2:lsq-b1-11-3",
          "listening:ls-b1-11-2:lsq-b1-11-4",
          "listening:ls-b1-11-2:lsq-b1-11-5",
          "listening:ls-b1-11-3:lsq-b1-11-6",
        ],
        labelAr: "أجيب صحيحاً عن أسئلة المشهدين بعد الاستماع دون كشف النص؛ كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z3",
      de: "Ich kann einen Satz ins Passiv setzen und einen Satz mit nachdem schriftlich bilden.",
      ar: "أن أحوّل جملة إلى المجهول، وأكوّن جملة بـ nachdem كتابةً.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["wr-b1-11-1", "wr-b1-11-2"],
        taskIds: ["writing:b1-11:wr-b1-11-1", "writing:b1-11:wr-b1-11-2"],
        labelAr: "أكتب التحويلين بالصيغة المقبولة (wr-1 وwr-2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann die Wendungen Meiner Meinung nach und einerseits ... andererseits erkennen und richtig einsetzen.",
      ar: "أن أعرف عبارتي الرأي والموازنة (Meiner Meinung nach، einerseits... andererseits) وأستعملهما في موضعهما.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["ex-b1-11-5", "ex-b1-11-7"],
        taskIds: ["practice:b1-11:ex-b1-11-5", "practice:b1-11:ex-b1-11-7"],
        labelAr: "أجيب صحيحاً عن معنى العبارة (ex-5) واختيار أداة الربط (ex-7)، دون كشف الحل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "قبل المراجعة الختامية: هل تستطيع قراءة إعلان سكن، الرد على بريد رسمي، والمشاركة في نقاش عن العمل — في جلسة واحدة؟ هذا الدرس يجمع ما تعلمته ويعطيك تمارين لتطبيقه.",
    motivatingQuestionDe: "Wie sicher bist du bei den B1-Strukturen?",
    contextAr:
      "هذا الدرس مراجعة للبنى التي درستها في B1: الجمل الموصولة، والشرط غير الواقعي، والمجهول، وأدوات الربط. يتضمن تمارين استماع وكتابة قصيرة، ولا يتضمن أي توقيت أو محاكاة لامتحان.",
    contextDe: "Wiederholung der B1-Strukturen mit Übungen zum Hören und Schreiben.",
    connectionToPreviousAr: "تراكم كل ما تعلمته من b1-01 (الجمل الموصولة) حتى b1-10 (الجمل الشرطية) — الآن وقت الدمج.",
    activateVocabulary: [
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "der Prüfungsteil", ar: "جزء الامتحان" },
      { de: "bestehen", ar: "ينجح في" },
      { de: "die Anmeldung", ar: "التسجيل" },
      { de: "die Vorbereitung", ar: "التحضير" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من B1 (درس b1-02 — الماضي البسيط Präteritum): اختر الشكل الصحيح.",
      questionDe: "Gestern ___ ich nach Hause.",
      questionAr: "أمس ذهبت إلى البيت.",
      options: ["ging", "gehe", "gegangen", "geht"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «gehe» مضارع؛ و«Gestern» تفرض الماضي البسيط: «ich ging nach Hause».", "لا — التصريف الثالث لا يقف وحده بلا فعل مساعد؛ فلو قيل «bin gegangen» لصحّ، والمطلوب هنا «ging».", "لا — «geht» للغائب المفرد أو للجمع في المضارع؛ والفاعل «ich» مع «Gestern» فيلزم «ging»."],
      explanation: "في الماضي البسيط: ich ging.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة منتقاة من B1 (درس b1-01 — المفعول بالإضافة Genitiv): أكمل الجملة.",
      template: "Das ist das Auto ___ Vaters.",
      blanks: [{ correct: "meines", options: ["meines", "meins", "meinem", "meiner"] }],
      explanation: "المذكر في الجر بالإضافة ينتهي بـ -es: meines Vaters.",
      errorType: "case",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من B1 (درس b1-07 — جملة الزمن als): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Als ich Kind war, spiele ich viel.",
      wrongWord: "spiele",
      correctWord: "spielte",
      options: ["spielte", "spiele", "spielt", "spielen"],
      explanation: "في جملة الزمن الماضي مع als نستخدم الماضي البسيط: spielte.",
      errorType: "conjugation",
    },
  ];
