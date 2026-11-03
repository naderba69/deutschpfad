/**
 * a1-01 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    { id: "z1", de: "Ich kann grüßen und mich vorstellen.", ar: "أن أُحيّي وأُقدّم نفسي باللغة الألمانية.", evidence: { exerciseIds: ["e3", "e6"], taskIds: ["practice:a1-01:e3", "practice:a1-01:e6"], labelAr: "ترتيب جملة التعارف (e3) ومطابقة التحيات بمعانيها (e6)، دون كشف الحل.", completion: "all-correct" }, },
    { id: "z2", de: "Ich kann fragen: Wie heißt du? Woher kommst du?", ar: "أن أسأل عن الاسم والبلد (Wie heißt du? / Woher kommst du?).", evidence: { exerciseIds: ["e4", "m1"], taskIds: ["practice:a1-01:e4", "mini-test:a1-01:m1"], labelAr: "ترتيب سؤال «من أين أنت؟» (e4) واختيار أداة السؤال عن الاسم (m1).", completion: "all-correct" }, },
    { id: "z3", de: "Ich kann „sein“ und „heißen“ konjugieren.", ar: "أن أصرف الفعلين sein (يكون) وheißen (يُسمى) في المضارع.", evidence: { exerciseIds: ["e1", "e5", "e16", "m2"], taskIds: ["practice:a1-01:e1", "practice:a1-01:e5", "practice:a1-01:e16", "mini-test:a1-01:m2"], labelAr: "اختيار bin وist وsind في سياقها (e1 وe5 وm2)، وتصريف heißen مع du في e16.", completion: "all-correct" }, },
    { id: "z4", de: "Ich kann ich, du und er in einfachen Sätzen richtig verwenden.", ar: "أن أستعمل الضمائر ich وdu وer في جمل بسيطة عن نفسي وعن الآخرين.", evidence: { exerciseIds: ["w3"], taskIds: ["writing:a1-01:w3"], labelAr: "إكمال الفراغات بالضمائر ich وdu وer في الكتابة (w3).", completion: "all-correct" }, },
    { id: "z9", de: "Ich kann in einfachen Kennenlernsituationen du und das formelle Sie passend verwenden.", ar: "أن أختار بين du غير الرسمية وSie الرسمية في مواقف تعارف بسيطة.", evidence: { exerciseIds: ["e29"], taskIds: ["practice:a1-01:e29"], labelAr: "مطابقة موقف غير رسمي وموقف رسمي بصيغة السؤال المناسبة (e29)؛ هذا تمرين لغوي قصير لا يقيس الكفاءة الاجتماعية في كل البيئات.", completion: "all-correct" }, },
    { id: "z5", de: "Ich kann W-Fragen stellen.", ar: "أن أطرح أسئلة الاستفهام (W-Fragen) وأجيب عنها.", evidence: { exerciseIds: ["e12", "e14", "m3", "m5"], taskIds: ["practice:a1-01:e12", "practice:a1-01:e14", "mini-test:a1-01:m3", "mini-test:a1-01:m5"], labelAr: "اختيار أداة السؤال المناسبة (e12)، وترتيب أسئلة W (e14 وm3)، وتصحيح ترتيب سؤال (m5).", completion: "all-correct" }, },
    { id: "z6", de: "Ich kann regelmäßige Verben konjugieren: lernen, wohnen, spielen.", ar: "أن أصرف الأفعال المنتظمة في المضارع (أتعلم، أسكن، ألعب).", evidence: { exerciseIds: ["e11", "e13", "m4"], taskIds: ["practice:a1-01:e11", "practice:a1-01:e13", "mini-test:a1-01:m4"], labelAr: "صرف أفعال منتظمة بالسلسلة الذهبية (e11 وe13)، وملء الفراغ في الجمل (m4).", completion: "all-correct" }, },
    {
      id: "z7",
      de: "Ich kann Ja/Nein-Fragen bilden.",
      ar: "أن أحوّل الجملة الخبرية إلى سؤال نعم/لا بوضع الفعل في المركز الأول.",
      evidence: {
        exerciseIds: ["w2"],
        taskIds: ["writing:a1-01:w2"],
        labelAr: "تحويل جملة خبرية إلى سؤال نعم/لا (w2).",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann Verben mit besonderen Endungen richtig konjugieren.",
      ar: "أن أصرّف الأفعال التي تحتاج وصلة -e- أو نهاية خاصة في du وer.",
      evidence: {
        exerciseIds: ["e13", "e20"],
        taskIds: ["practice:a1-01:e13", "practice:a1-01:e20"],
        labelAr: "صرف arbeiten بوصلة -e- (e13) وصرف wohnen مع er/sie (e20).",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "تخيّل أنك في برلين والتقيت شخصاً ألمانياً لأول مرة. ما أول جملة ستقولها؟ وما أول سؤال ستطرحه؟ فكّر قبل أن تكمل الدرس!",
    motivatingQuestionDe: "Stell dir vor: Du bist in Berlin. Was sagst du zuerst?",
    contextAr:
      "قبل أن نتعلم أي قاعدة، لاحظ: الألمانية تتشابه مع العربية في أن الترحيب له أشكال متعددة حسب الوقت والرسمية. هل يمكنك تخمين معنى «Guten Morgen» قبل أن نبدأ؟",
    contextDe: "Guten Morgen, Guten Tag, Guten Abend, Gute Nacht …",
    connectionToPreviousAr: "بعد درس الأبجدية A1-00، ننتقل هنا إلى التحية والتعارف وبناء جمل بسيطة عن النفس.",
    activateVocabulary: [
      { de: "Hallo", ar: "مرحباً" },
      { de: "ich", ar: "أنا" },
      { de: "du", ar: "أنتَ / أنتِ" },
      { de: "kommen", ar: "يأتي" },
      { de: "woher", ar: "من أين" },
    ],
  };
