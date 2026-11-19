/**
 * a1-13 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-13.ts في الدفعة 89 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ausgewählte Nomen im Nominativ und Akkusativ mit dem passenden Artikel ergänzen.",
      ar: "أن أختار أداة مناسبة لأسماء مختارة في الجملة الاسمية أو بوصفها مفعولاً به.",
      evidence: {
        exerciseIds: ["e1", "e4", "m1", "m5"],
        taskIds: [
          "practice:a1-13:e1",
          "practice:a1-13:e4",
          "mini-test:a1-13:m1",
          "mini-test:a1-13:m5",
        ],
        labelAr: "اختيار أدوات لأسماء في أربع مهام محددة، منها تصحيح einen Apfel واختيار المفعول في النصب.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann geübte Verbformen und die Wortstellung in einfachen Hauptsätzen ergänzen oder ordnen.",
      ar: "أن أُكمل تصريفات متدرّباً عليها وأرتّب جملًا رئيسية قصيرة وفق المطلوب.",
      evidence: {
        exerciseIds: ["e2", "e7", "e12", "e14"],
        taskIds: [
          "practice:a1-13:e2",
          "practice:a1-13:e7",
          "practice:a1-13:e12",
          "practice:a1-13:e14",
        ],
        labelAr: "ترتيب جملة حاضرة، واختيار الفعل المنفصل، ثم ترتيب جملة بظرف وتصحيح V2 في مثالين.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann eine einfache Nominalgruppe neutral mit „kein“ verneinen.",
      ar: "أن أستخدم kein في نفي محايد لاسم ضمن جملة قصيرة.",
      evidence: {
        exerciseIds: ["e9"],
        taskIds: ["practice:a1-13:e9"],
        labelAr: "تصحيح Ich habe nicht Auto إلى Ich habe kein Auto في السياق المحايد المحدد.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausgewählte Modalverben nach einer klaren Bedeutungsangabe einsetzen.",
      ar: "أن أختار أفعالًا ناقصة متدرّباً عليها حين يحدد السياق معنى القدرة أو الرغبة أو الإذن.",
      evidence: {
        exerciseIds: ["e8", "e16"],
        taskIds: ["practice:a1-13:e8", "practice:a1-13:e16"],
        labelAr: "إكمال جمل قصيرة بـkann وmöchte وmuss وwill وdarf وفق الإشارات الواضحة في كل جملة.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann in vorgegebenen Sätzen ausgewählte Perfektformen und Präteritumformen von sein ergänzen.",
      ar: "أن أُكمل صيغ Perfekt مختارة وصيغة Präteritum من sein في جمل معطاة، من دون تعميم اختيار المساعد على جميع الأفعال.",
      evidence: {
        exerciseIds: ["e11", "e17"],
        taskIds: ["practice:a1-13:e11", "practice:a1-13:e17"],
        labelAr: "إكمال habe gesehen، ثم صيغ Perfekt محددة وصيغة war في جمل قصة موجّهة؛ لا يقيس ذلك سرداً حراً.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann ausdrücklich genannte Informationen in den vorgegebenen Lesetexten finden.",
      ar: "أن أستخرج معلومات مصرّحاً بها في نصّ القراءة ونصّ المراجعة المحددين.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5", "rq6", "e18"],
        taskIds: [
          "reading:read-a1-13:rq1",
          "reading:read-a1-13:rq2",
          "reading:read-a1-13:rq3",
          "reading:read-a1-13:rq4",
          "reading:read-a1-13:rq5",
          "reading:read-a1-13:rq6",
          "practice:a1-13:e18",
        ],
        labelAr: "الإجابة عن أسئلة التفاصيل الستة في القراءة، ثم تصنيف العبارات الأربع المرتبطة بنص Leila؛ لا يقيس ذلك الفهم العام لكل النصوص.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann in drei Hörübungen bestimmte Informationen heraushören, bevor ich das Transkript öffne.",
      ar: "أن أستخرج معلومات محددة من تمارين الاستماع الثلاثة قبل فتح نص أيٍّ منها.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6", "q7"],
        taskIds: [
          "listening:l1:q1",
          "listening:l1:q2",
          "listening:l2:q3",
          "listening:l2:q4",
          "listening:l3:q5",
          "listening:l3:q6",
          "listening:l3:q7",
        ],
        labelAr: "الإجابة الصحيحة عن الأسئلة السبعة قبل كشف النص؛ إجابات ما بعد الكشف مراجعة ولا تثبت الاستماع.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann vorgegebene einfache Sätze schriftlich vervollständigen und eine Form verändern.",
      ar: "أن أُكمل جملًا قصيرة مكتوبة وأحوّل صيغة محددة في المهام المعطاة.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3"],
        taskIds: [
          "writing:a1-13:w1",
          "writing:a1-13:w2",
          "writing:a1-13:w3",
        ],
        labelAr: "تحويل ich إلى er، وإكمال أربع خانات، ثم كتابة الجملة المسموعة؛ لا يقيس ذلك كتابة رسالة حرة.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann die Aufgabentypen des Goethe-Modellsatzes Start Deutsch 1 den vier Fertigkeiten zuordnen.",
      ar: "أن أصل أقسام نموذج Start Deutsch 1 بصيغ المهام الموضّحة في هذا الدرس.",
      evidence: {
        exerciseIds: ["m6"],
        taskIds: ["mini-test:a1-13:m6"],
        labelAr: "مطابقة الأقسام الأربعة بأوصافها في نموذج Goethe المنشور عام 2024؛ لا تثبت هذه المعرفة الجاهزية للامتحان.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "اختر موضوعين من الدروس السابقة: ما جملة قصيرة تستطيع إكمالها عن نفسك، وما جملة تستطيع ترتيبها عن يومك؟ هذا سؤال تنشيط، وليس حكماً على إتقان المستوى كله.",
    motivatingQuestionDe: "Welche kurzen Sätze kannst du heute noch einmal üben?",
    contextAr:
      "نراجع أنماطاً منتقاة في القواعد والقراءة والاستماع والكتابة، ثم نتعرّف إلى بنية نموذج امتحان منشور. لا تحل هذه المراجعة محل اختبار أداء شامل.",
    contextDe: "Wir wiederholen ausgewählte Themen und Aufgaben.",
    connectionToPreviousAr:
      "يعيد هذا الدرس استعمال أمثلة من دروس A1 السابقة، ومنها درس Perfekt الإضافي A1-14 الذي يسبق المراجعة في ترتيب المسار. الإحالة إلى درس لا تعني أن محتواه كله خضع للاختبار هنا.",
    activateVocabulary: [
      { de: "die Wiederholung", ar: "المراجعة" },
      { de: "die Aufgabe", ar: "المهمة" },
      { de: "das Beispiel", ar: "المثال" },
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "die Bitte", ar: "الطلب" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-11 — التنقل في المدينة: Wo / Wohin / Woher): ما السؤال الصحيح؟",
      questionDe: "___ kommst du? — Aus Tunesien.",
      questionAr: "من أين أنت؟ — من تونس.",
      options: ["Woher", "Wo", "Wohin", "Wer"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Wo» تسأل عن المكان الحالي («Wo wohnst du؟»)؛ والسؤال عن الأصل بـ«Woher».", "لا — «Wohin» تسأل عن الوجهة؛ والجواب «Aus Tunesien» يدلّ على الأصل فتُستعمل «Woher».", "لا — «Wer» تسأل عن الشخص؛ والجواب «Aus Tunesien» مكانٌ لا شخص."],
      explanation: "Woher = من أين (أصل). Wo = أين. Wohin = إلى أين.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-04 — السكن والمنزل): أكمل الأداة المناسبة لكل اسم:",
      template: "___ Tisch (مذكر) · ___ Lampe (مؤنث) · ___ Buch (محايد)",
      blanks: [
        { correct: "der", options: ["der", "die", "das", "den"] },
        { correct: "die", options: ["die", "der", "das", "dem"] },
        { correct: "das", options: ["das", "der", "die", "den"] },
      ],
      hint: "der للمذكر، die للمؤنث، das للمحايد.",
      explanation: "der Tisch / die Lampe / das Buch — الأدوات الثلاثة.",
      errorType: "article",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-05 — الحياة اليومية): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Ich stehe sieben Uhr auf.",
      wrongWord: "sieben Uhr",
      correctWord: "um sieben Uhr",
      options: ["um sieben Uhr", "sieben Uhr", "am sieben Uhr", "in sieben Uhr"],
      explanation: "مع الساعة: um + ساعة: um sieben Uhr — من درس اليوم والوقت.",
      errorType: "preposition",
    },
  ];
