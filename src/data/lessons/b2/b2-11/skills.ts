/**
 * b2-11 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "في دار النشر",
        lines: [
          { speaker: "Redakteurin", de: "Kennen Sie den Autor, dessen Romane wir übersetzen?", ar: "هل تعرفين الكاتب الذي نترجم رواياته؟" },
          { speaker: "Karim", de: "Natürlich. Das ist der Schriftsteller, dessen Bücher in Tunesien sehr beliebt sind.", ar: "بالطبع. إنه الأديب الذي كتبه محبوبة جداً في تونس." },
          { speaker: "Redakteurin", de: "Wir haben den Termin leider verschieben müssen.", ar: "اضطررنا للأسف إلى تأجيل الموعد." },
          { speaker: "Karim", de: "Wegen der Kollegin, deren Vortrag ausgefallen ist?", ar: "بسبب الزميلة التي أُلغيت محاضرتها؟" },
          { speaker: "Redakteurin", de: "Genau. Sie hat kurzfristig absagen müssen.", ar: "بالضبط. اضطرت إلى الاعتذار في اللحظة الأخيرة." },
        ],
      },
      {
        id: "l2",
        title: "بعد العطلة",
        lines: [
          { speaker: "Nora", de: "Ich habe mein Auto reparieren lassen. Es war teuer.", ar: "أعطيت سيارتي لتُصلَّح. كان الأمر مكلفاً." },
          { speaker: "Jonas", de: "Bei dem Mechaniker, dessen Werkstatt am Bahnhof ist?", ar: "عند الميكانيكي الذي ورشته قرب المحطة؟" },
          { speaker: "Nora", de: "Ja. Ich habe zwei Tage warten müssen.", ar: "نعم. اضطررت إلى الانتظار يومين." },
          { speaker: "Jonas", de: "Ich habe dich gestern telefonieren hören. Klang stressig.", ar: "سمعتك تتحدثين في الهاتف أمس. بدا الأمر مرهقاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie beschreibt Karim den Schriftsteller?",
        questionAr: "كيف يصف كريم الأديب؟",
        options: [
          "Der Schriftsteller, dessen Bücher in Tunesien beliebt sind",
          "Der Schriftsteller, deren Bücher beliebt sind",
          "Der Schriftsteller, den die Bücher beliebt sind",
          "Der Schriftsteller, dessen die Bücher beliebt sind",
        ],
        correctIndex: 0,
        explanation: "المرجع der Schriftsteller مذكّر ⇒ dessen، والاسم بعده بلا أداة تعريف.",
        errorType: "case",
        optionExplanations: [
          undefined,
          "«deren Bücher beliebt sind» خطأ؛ Schriftsteller مذكر، فالضمير dessen.",
          "«den die Bücher beliebt sind» خطأ في الحالة وفي ترتيب الجملة.",
          "«dessen die Bücher beliebt sind» خطأ؛ تكرار الاسم بعد الضمير غير صحيح.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was musste die Kollegin tun?",
        questionAr: "ماذا اضطرت الزميلة أن تفعل؟",
        options: ["Sie hat absagen müssen", "Sie hat abgesagt gemusst", "Sie ist absagen müssen", "Sie hat absagen gemusst"],
        correctIndex: 0,
        explanation: "مصدر مزدوج مع haben: hat absagen müssen.",
        errorType: "conjugation",
        optionExplanations: [
          undefined,
          "«Sie hat abgesagt gemusst» خطأ؛ تُستعمل الصيغة absagen müssen بعد hat.",
          "«Sie ist absagen müssen» خطأ؛ الفعل المساعد haben وليس sein.",
          "«Sie hat absagen gemusst» خطأ؛ الصيغة الصحيحة absagen müssen.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wer hat das Auto repariert?",
        questionAr: "من أصلح السيارة؟",
        options: ["Der Mechaniker", "Nora selbst", "Jonas", "Niemand"],
        correctIndex: 0,
        explanation: "قالت reparieren lassen ⇒ كلّفت غيرها، أي الميكانيكي.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Nora selbst» لم تُصلح السيارة بنفسها، بل أعطتها للميكانيكي.",
          "«Jonas» لم يُصلح السيارة؛ ذكره بوصفه من يسأل.",
          "«Niemand» تنفي الإصلاح، وهذا عكس ما قالته نورا.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الإسناد: ss القصيرة وe غير المنبورة وr النهائية",
    items: [
      { de: "dessen", ar: "الذي (مضاف إليه، مذكّر)", note: "ss قصيرة حادّة والحركة قبلها قصيرة، وe الثانية مختزلة: دِسّـِن" },
      { de: "deren", ar: "التي/الذين (مضاف إليه)", note: "e الأولى طويلة مفتوحة وr خفيفة في الحلق: ديـرِن" },
      { de: "müssen", ar: "يجب", note: "ü شفتان مستديرتان مع نطق i، وss قصيرة: مُيسِّن" },
      { de: "lassen", ar: "يدع/يكلّف", note: "a قصيرة لأنّ ss تقصّر ما قبلها: لاسِّن" },
      { de: "der Autor", ar: "الكاتب", note: "النبر على المقطع الأول، وr النهائية تُلفظ حركة خفيفة: آوتوأ" },
      { de: "übersetzen", ar: "يترجم", note: "ü في البداية، وtz = تس، والنبر على setz: أوبَرزِتسِن" },
    ],
    tip: "قاعدة ss: الحرف المزدوج ss يعني أنّ الحركة قبله قصيرة (dessen، müssen، lassen) — بخلاف ß التي تأتي بعد حركة طويلة (Straße). طول الحركة هنا هو ما يفرّق الكلمة عن أختها.",
    shadowing: [
      { de: "Der Autor, dessen Roman ich lese, kommt aus Wien.", ar: "الكاتب الذي أقرأ روايته من فيينا.", tip: "dessen — مالك مذكّر" },
      { de: "Die Frau, deren Auto dort steht, ist meine Chefin.", ar: "المرأة التي سيارتها هناك هي مديرتي.", tip: "deren — مالكة مؤنّثة" },
      { de: "Ich habe gestern lange arbeiten müssen.", ar: "اضطررت أمس إلى العمل طويلاً.", tip: "مصدر مزدوج" },
      { de: "Wir haben das Fahrrad reparieren lassen.", ar: "أعطينا الدرّاجة لتُصلَّح.", tip: "lassen — تكليف" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "ادمج الجملتين في جملة نسبية بـ dessen أو deren:",
      prompt: "Ich kenne einen Autor. Seine Romane sind berühmt.",
      acceptedAnswers: [
        "Ich kenne einen Autor, dessen Romane berühmt sind",
        "Ich kenne einen Autor, dessen Romane berühmt sind.",
      ],
      sampleAnswer: "Ich kenne einen Autor, dessen Romane berühmt sind.",
      explanation: "المالك مذكّر ⇒ dessen، والفعل المصرَّف في نهاية الجملة النسبية.",
      errorType: "case",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالمصدر المزدوج الصحيح:",
      template: "Ich habe gestern das Auto ___ ___ . Es war kaputt.",
      blanks: [
        { correct: "reparieren", options: ["reparieren", "repariert", "zu reparieren"] },
        { correct: "lassen", options: ["lassen", "gelassen", "lässt"] },
      ],
      explanation: "التكليف: haben + مصدر الفعل الرئيسي + lassen بالمصدر.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Kollegin, deren Vortrag wir gehört haben, arbeitet hier.",
      explanation: "deren للمالكة المؤنّثة، والاسم بعدها بلا أداة تعريف: deren Vortrag.",
      errorType: "spelling",
    },
  ];
