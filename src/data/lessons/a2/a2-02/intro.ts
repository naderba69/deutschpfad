/**
 * a2-02 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-02.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann häufige Schmerzangaben in den geübten Mustern ergänzen und einen kurzen Symptom-Satz schreiben.",
      ar: "أن أختار الصيغة المناسبة في مثالين عن الألم، وأكتب جملة محدّدة بـhaben + Kopfschmerzen.",
      evidence: {
        exerciseIds: ["e1", "e12", "w1"],
        taskIds: [
          "practice:a2-02:e1",
          "practice:a2-02:e12",
          "writing:a2-02:w1",
        ],
        labelAr: "اختيار التعبير الشائع Kopfschmerzen، وتصريف tut/tun في مثالين، ثم كتابة جملة محددة تبدأ بـIch عن الصداع.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in vorgegebenen Kontexten eine Form von sollen oder sollten passend auswählen oder bilden.",
      ar: "أن أختار أو أبني soll/sollten في أمثلة محددة، مع مراعاة أن درجة التوجيه يحددها السياق.",
      evidence: {
        exerciseIds: ["e17", "e21", "e22"],
        taskIds: [
          "practice:a2-02:e17",
          "practice:a2-02:e21",
          "practice:a2-02:e22",
        ],
        labelAr: "تمييز نصيحة أقل مباشرة في e17، وإكمال صيغ sollen/sollten في e21، ثم تحويل جملة موجّهة إلى اقتراح بـsollten في e22.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in den vorgegebenen Beispielen ein Verbot von fehlender Verpflichtung unterscheiden.",
      ar: "أن أميّز في الأمثلة المحددة بين عدم الإذن بـdürfen nicht وعدم لزوم الفعل بـmüssen nicht.",
      evidence: {
        exerciseIds: ["e13", "e14", "e23"],
        taskIds: [
          "practice:a2-02:e13",
          "practice:a2-02:e14",
          "practice:a2-02:e23",
        ],
        labelAr: "اختيار المنع في e13، وفهم الإعفاء في e14، وتصنيف العبارات الأربع المرتبطة بالنص في e23؛ المطلوب إكمال المهام الثلاث كلها.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausdrücklich genannte Informationen in diesem Gesundheitstext finden.",
      ar: "أن أستخرج معلومات مصرّحاً بها في نص القراءة وأسئلته المحددة، لا أن أستنتج جاهزية قراءة عامة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5", "rq6"],
        taskIds: [
          "reading:read-a2-02:rq1",
          "reading:read-a2-02:rq2",
          "reading:read-a2-02:rq3",
          "reading:read-a2-02:rq4",
          "reading:read-a2-02:rq5",
          "reading:read-a2-02:rq6",
        ],
        labelAr: "الإجابة عن أسئلة الأعراض والنصيحة والمنع والعودة إلى العمل في النص المحدد؛ يجب أن تصح الإجابات الست كلها.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann bestimmte Informationen aus den zwei bereitgestellten Hörtexten entnehmen, bevor ich das Transkript öffne.",
      ar: "أن أستخرج معلومات محددة من تمريني الاستماع قبل كشف أيٍّ من نصيهما.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: [
          "listening:l1:q1",
          "listening:l1:q2",
          "listening:l2:q3",
        ],
        labelAr: "الإجابة الصحيحة عن الأسئلة الثلاثة قبل كشف التفريغ؛ إجابات ما بعد الكشف لا تدخل في الدليل.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann die in der Zuordnungsaufgabe geübten Gesundheitsdokumente und Nachweise ihren Funktionen zuordnen.",
      ar: "أن أطابق الوصفة والشهادة المرضية والإحالة وبطاقة التأمين بوظائفها في تمرين المطابقة المحدد، من دون تعميم النظام على كل حالة.",
      evidence: {
        exerciseIds: ["e19"],
        taskIds: ["practice:a2-02:e19"],
        labelAr: "إكمال أزواج المطابقة الأربعة في e19؛ لا يقيس التمرين متى تكون الإحالة مطلوبة قانونياً.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann ausgewählte reflexive Formen und Pronomen in den vorgegebenen Sätzen ergänzen.",
      ar: "أن أختار الضمائر الانعكاسية وصيغتها الألمانية المناسبة في الأمثلة المحددة.",
      evidence: {
        exerciseIds: ["e15", "e16"],
        taskIds: [
          "practice:a2-02:e15",
          "practice:a2-02:e16",
        ],
        labelAr: "إكمال ضمائر ich/er/wir في e15، وتصحيح mich إلى mir في تركيب غسل اليدين المحدد في e16.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann vorgegebene Gesundheitssätze mit sollen schriftlich ergänzen und eine kurze Diktatzeile verschriftlichen.",
      ar: "أن أكمل تصريفات sollen في جمل مكتوبة، ثم أكتب جملة قصيرة مملاة كما سُمعت.",
      evidence: {
        exerciseIds: ["w2", "w3"],
        taskIds: [
          "writing:a2-02:w2",
          "writing:a2-02:w3",
        ],
        labelAr: "إكمال أربع خانات في w2 وكتابة نص الإملاء القصير في w3؛ هذا تدريب موجّه لا يقيس كتابة حرة.",
        completion: "all-correct",
      },
    },
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "في المثال التدريبي، Sie sollten sich ausruhen اقتراحٌ، وSie dürfen nicht rauchen منعٌ. يساعدك الفعل الناقص على فهم المعنى، لكن السياق يظل مهماً. نراجع اليوم صيغاً سبق أن قابلت بعضها في دروس A1.",
    motivatingQuestionDe: "Was fehlt Ihnen?",
    contextAr:
      "موضوعات لغوية مختارة في الجسم والأعراض، وصيغ sollen/sollten وdürfen/müssen، وبعض عبارات العيادة والوثائق، ثم أفعال انعكاسية شائعة. المحادثة والنصوص أمثلة تدريبية وليست وصفاً كاملاً للرعاية الصحية أو لامتحان رسمي.",
    contextDe: "Ich habe Kopfschmerzen und Fieber.",
    connectionToPreviousAr:
      "تتذكر من A1: Ich habe Hunger (عندي جوع). اليوم نعمم: Ich habe Kopfschmerzen (عندي صداع) — نفس البنية مع haben + اسم.",
    activateVocabulary: [
      { de: "der Körper", ar: "الجسم" },
      { de: "der Kopf", ar: "الرأس" },
      { de: "die Schmerzen", ar: "الآلام" },
      { de: "der Termin", ar: "الموعد" },
      { de: "der Arzt", ar: "الطبيب" },
    ],
  };


export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-03 — الطعام والشراب): اختر الصيغة الصحيحة:",
      questionDe: "Ich habe ___.",
      questionAr: "عندي جوع.",
      options: ["Hunger", "hungrig", "der Hunger", "hungrig sein"],
      correctIndex: 0,
      explanation: "تذكر: Ich habe Hunger (الجوع اسم مع haben).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«hungrig» صفة لا اسم، فتركيبها «Ich bin hungrig» لا «Ich habe …».",
        "«der Hunger» — التعبير المعتاد اسمٌ بلا أداة: «Ich habe Hunger».",
        "«hungrig sein» يحتاج sein: «Ich bin hungrig»، ولا يدخل في «Ich habe …».",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-10 — العمل والمهن): اختر المؤنث الصحيح:",
      questionDe: "der Arzt → die ___",
      options: ["Ärztin", "Arztin", "Ärzte", "Ärztinnen"],
      correctIndex: 0,
      explanation: "المهن: Arzt → Ärztin (مع Umlaut).",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«Arztin» بلا Umlaut؛ القاعدة «der Arzt → die Ärztin».",
        "«Ärzte» جمعُ مذكر (أطباء)، والمطلوب مفردُ المهنة المؤنث.",
        "«Ärztinnen» جمع مؤنث، والمطلوب مفرد: «die Ärztin».",
      ],
    },
    {
      id: "r3",
      type: "word-ordering",
      instructionAr:
        "مراجعة من A1 (درس a1-09 — المواعيد والتقويم): رتّب الجملة:",
      tokens: ["ist", "Der", "Termin", "Montag", "am", "."],
      correctSentence: "Der Termin ist am Montag.",
      explanation: "الموعد يوم الاثنين: am + يوم.",
      errorType: "word-order",
    },
  ];
