/**
 * a2-03 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-03.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann in vorgegebenen Situationen eine passende Bestellformulierung auswählen und eine kurze Bestellung schreiben.",
      ar: "أن أختار في المواقف المحددة صيغة طلب مناسبة للسياق، وأكتب طلباً قصيراً.",
      evidence: {
        exerciseIds: ["e16", "e26", "w1"],
        taskIds: ["practice:a2-03:e16", "practice:a2-03:e26", "writing:a2-03:w1"],
        labelAr: "اختر صيغة الطلب المقصودة في e16، وأعِد الصياغة واكتب طلباً مقبولاً في e26 وw1.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in kurzen Beispielen die passenden Formen von schmecken, gefallen und passen wählen.",
      ar: "أن أختار في أمثلة قصيرة صيغة الفعل المناسبة مع schmecken وgefallen وpassen، وأميز المعنى المقصود.",
      evidence: {
        exerciseIds: ["e13", "e15", "e18", "e27"],
        taskIds: ["practice:a2-03:e13", "practice:a2-03:e15", "practice:a2-03:e18", "practice:a2-03:e27"],
        labelAr: "أجب عن سؤال schmecken في e13، وحوّل مثال gefallen في e15، وطابق تصريف الفعل والسياق في e18 وe27.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann ausdrücklich genannte Einzelheiten im Restaurant-Lesetext und in den Hördialogen finden.",
      ar: "أن أستخرج تفاصيل مذكورة صراحةً في نص المطعم وحوارات الاستماع، من دون تعميمها على كل زيارة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5", "rq6", "q1", "q2", "q3"],
        taskIds: [
          "reading:read-a2-03:rq1", "reading:read-a2-03:rq2", "reading:read-a2-03:rq3",
          "reading:read-a2-03:rq4", "reading:read-a2-03:rq5", "reading:read-a2-03:rq6",
          "listening:l1:q1", "listening:l1:q2", "listening:l2:q3",
        ],
        labelAr: "أجب عن أسئلة النص والحوارات؛ لا تُحتسب مشاهدة النص أو إجابات أسئلة الاستماع بعد كشف التفريغ.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann in vorgegebenen Beispielen Geschmackswörter unterscheiden sowie Mengen und etwas Warmes passend ergänzen.",
      ar: "أن أميز في أمثلة محددة بين صفات الطعم والحرارة، وأختار صيغة كمية وetwas Warmes المناسبة.",
      evidence: {
        exerciseIds: ["e20", "e21", "e22"],
        taskIds: ["practice:a2-03:e20", "practice:a2-03:e21", "practice:a2-03:e22"],
        labelAr: "ميّز الحرارة عن التوابل في e20، وأكمل وحدات العدّ في e21، واختر كتابة etwas Warmes في e22.",
        completion: "all-correct",
      },
    },
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "يمكن أن تسمع في المطعم «Ich möchte einen Kaffee» أو «Ich hätte gern einen Kaffee» أو «Ich nehme einen Kaffee». صيغٌ شائعة، لكنّها ليست درجاتٍ ثابتةً على سلّم عالمي. و«Ich will einen Kaffee» صحيحة نحوياً وقد تبدو مباشرةً في بعض المواقف؛ يؤثر السياق والنبرة والصياغة المصاحبة في وقعها. تاريخياً ترتبط möchte بـKonjunktiv II من mögen، لكنّها تُستعمل اليوم غالباً كصيغة طلب حاضرة مألوفة. سنقارن المعاني والاستعمالات من دون وصف بديل صحيح بأنه مرفوض اجتماعياً.",
    motivatingQuestionDe: "Was möchten Sie bestellen?",
    contextAr:
      "يعرض هذا الدرس صيغاً شائعة للطلب، وأمثلةً على schmecken مع ضمير Dativ مع مراجعة gefallen/passen، وبعض مفردات المطاعم وصفات الطعام والكميات. الحوارات التالية مواقف تدريبية محددة؛ ولا نستنتج منها ترتيباً أو سياسةً واحدة للخدمة أو الماء أو الحساب في جميع المطاعم.",
    connectionToPreviousAr:
      "في A1-03 تعلّمتَ الطعام والنصب، وفي A1-06 ظهرت möchte وصيغ الطلب، وفي A1-07 تدربتَ على الأسعار والشراء، وفي A2-01 درستَ صيغ شكوى مهذّبة. نراجع ما سبق ونضيف أمثلةً سياقيةً جديدةً من المطعم، لا «أول لقاء» بهذه الصيغ.",

    activateVocabulary: [
      { de: "die Speisekarte", ar: "قائمة الطعام" },
      { de: "bestellen", ar: "يطلب (طعاماً)" },
      { de: "schmecken", ar: "يكون طعمه (لفلان)" },
      { de: "die Vorspeise", ar: "المقبّلات" },
      { de: "die Rechnung", ar: "الحساب/الفاتورة" },
      { de: "das Trinkgeld", ar: "البقشيش" },
    ],
  };


export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-03 — الطعام والشراب): اختر الصيغة الصحيحة (النصب):",
      questionDe: "Ich esse ___ Apfel.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation: "بعد essen المذكر ein → einen (درس الطعام).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-06 — أوقات الفراغ والهوايات): اختر الأمر الرسمي لدعوة ضيفٍ إلى الدخول:",
      questionDe: "Sie bitten einen Gast formell hereinzukommen. Was sagen Sie?",
      options: [
        "Kommen Sie bitte herein!",
        "Komm bitte herein!",
        "Kommt bitte herein!",
        "Kommen bitte herein!",
      ],
      correctIndex: 0,
      explanation: "الأمر الرسمي مع Sie: Kommen Sie bitte herein!",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة من A1 (درس a1-03 — الطعام والشراب): أكمل بـ der/die/das:",
      template: "___ Brot · ___ Milch · ___ Käse",
      blanks: [
        { correct: "das", options: ["das", "die", "der"] },
        { correct: "die", options: ["das", "die", "der"] },
        { correct: "der", options: ["das", "die", "der"] },
      ],
      explanation: "das Brot، die Milch، der Käse (درس الطعام).",
      errorType: "gender",
    },
  ];
