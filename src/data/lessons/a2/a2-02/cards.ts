/**
 * a2-02 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-02.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Ich habe ___ und Fieber.",
      options: ["Husten", "hustet", "der Husten", "hust"],
      correctIndex: 0,
      explanation: "Husten اسم مع haben: Ich habe Husten.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«hustet» صيغةٌ فعلية (هو يسعل) لا اسمٌ بعد «habe».",
        "«der Husten» — التعبير المعتاد بلا أداة: «Ich habe Husten».",
        "«hust» جذرٌ/صيغة أمرٍ لا تصلح اسماً في هذا الموضع.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen:",
      questionDe: "Er ___ im Bett bleiben.",
      options: ["soll", "sollst", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع er: soll.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«sollst» تصريف du لا er.",
        "«sollt» تصريف ihr لا er.",
        "«sollen» صيغة الجمع: «sie sollen».",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة، وابدأ بـEr:",
      tokens: ["sich", "Er", "ausruhen", "soll", "."],
      correctSentence: "Er soll sich ausruhen.",
      explanation: "يجب أن يستريح: Er + soll + sich ausruhen.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الكلمة الخاطئة في الجملة:",
      wrongSentence: "Mein Kopf tut weht.",
      wrongWord: "weht",
      correctWord: "weh",
      options: ["weh", "weht", "wehne", "wehe"],
      explanation: "tut weh — weh ثابتة بلا نهاية: Mein Kopf tut weh.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ sollen الصحيح:",
      template:
        "Ich ___ mich ausruhen. Sie ___ sich ausruhen. Ihr ___ früh schlafen.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollen", "sollt"] },
        { correct: "sollt", options: ["soll", "sollt", "sollten"] },
      ],
      explanation: "ich soll، sie sollen، ihr sollt.",
      errorType: "conjugation",
    },
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "der Körper",
      ar: "الجسم",
      example: "Der Körper braucht Schlaf.",
      exampleAr: "الجسم يحتاج النوم.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "der Kopf",
      ar: "الرأس",
      example: "Ich habe Kopfschmerzen.",
      exampleAr: "عندي صداع.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "das Auge",
      ar: "العين",
      example: "Ich sehe mit den Augen.",
      exampleAr: "أرى بالعينين.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "der Rücken",
      ar: "الظهر",
      example: "Mein Rücken tut weh.",
      exampleAr: "ظهري يؤلمني.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "die Schmerzen",
      ar: "الآلام",
      example: "Ich habe Schmerzen.",
      exampleAr: "عندي آلام.",
      level: "A2",
    },
    {
      id: "fc6",
      de: "das Fieber",
      ar: "الحمى",
      example: "Er hat Fieber.",
      exampleAr: "عنده حمى.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "sollen",
      ar: "يُفترض/ينبغي بحسب السياق",
      example: "Der Arzt sagt, ich soll mich ausruhen.",
      exampleAr: "يقول الطبيب إن عليّ أن أستريح.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "sich ausruhen",
      ar: "يستريح",
      example: "Sie sollen sich ausruhen.",
      exampleAr: "ينبغي أن تستريح.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "Mir ist schlecht.",
      ar: "أشعر بالغثيان؛ ليست Ich bin schlecht الصيغة المحايدة لهذا المعنى.",
      example: "Mir ist schlecht und schwindelig.",
      exampleAr: "أشعر بالغثيان والدوار.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "sich fühlen",
      ar: "يشعر (بحالٍ ما)",
      example: "Ich fühle mich heute besser.",
      exampleAr: "أشعر بتحسّن اليوم.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "sich erholen",
      ar: "يتعافى، ينقه",
      example: "Ich habe mich gut erholt.",
      exampleAr: "تعافيتُ جيداً.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "dran sein",
      ar: "يأتي دوره",
      example: "Nach vierzig Minuten war ich endlich dran.",
      exampleAr: "بعد أربعين دقيقة جاء دوري أخيراً.",
      level: "A2",
    },
    {
      id: "fc13",
      de: "sich erkälten",
      ar: "يُصاب بالزكام",
      example: "Ich habe mich erkältet.",
      exampleAr: "أُصبتُ بالزكام.",
      level: "A2",
    },
    {
      id: "fc14",
      de: "sollten",
      ar: "Konjunktiv II من sollen؛ اقتراح أقل مباشرة في سياقات كثيرة",
      example: "Sie sollten sich ausruhen.",
      exampleAr: "من الأفضل أن تستريح في هذا السياق.",
      level: "A2",
    },
    {
      id: "fc15",
      de: "nicht dürfen",
      ar: "عدم الإذن/منع بحسب السياق",
      example: "Sie dürfen nicht rauchen.",
      exampleAr: "لا يُسمح لك بالتدخين.",
      level: "A2",
    },
    {
      id: "fc16",
      de: "nicht müssen",
      ar: "غير لازم (نفي الوجوب = إعفاء)",
      example: "Sie müssen nicht wiederkommen.",
      exampleAr: "لستَ مضطرّاً للعودة.",
      level: "A2",
    },
    {
      id: "fc17",
      de: "Was fehlt Ihnen?",
      ar: "ما شكواك؟ (سؤال اصطلاحي عن الأعراض)",
      example: "Guten Tag, was fehlt Ihnen denn?",
      exampleAr: "طاب يومك، ما شكواك؟",
      level: "A2",
    },
    {
      id: "fc18",
      de: "das Rezept",
      ar: "وصفة لدواء موصوف؛ تُصرف في صيدلية",
      example: "Ich schreibe Ihnen ein Rezept.",
      exampleAr: "سأكتب لك وصفة.",
      level: "A2",
    },
    {
      id: "fc19",
      de: "die Krankschreibung",
      ar: "إثبات عدم القدرة على العمل (AU؛ تختلف الإجراءات)",
      example: "Ich brauche eine Krankschreibung.",
      exampleAr: "أحتاج شهادةً مرضية.",
      level: "A2",
    },
    {
      id: "fc20",
      de: "die Erkältung",
      ar: "نزلة برد (وليست مرادفاً للإنفلونزا Grippe)",
      example: "Sie haben eine Erkältung.",
      exampleAr: "عندك نزلة برد.",
      level: "A2",
    },
    {
      id: "fc21",
      de: "untersuchen",
      ar: "يفحص (طبّياً)",
      example: "Die Ärztin hat mich untersucht.",
      exampleAr: "فحصتني الطبيبة.",
      level: "A2",
    },
    {
      id: "fc22",
      de: "das Wartezimmer",
      ar: "غرفة الانتظار",
      example: "Im Wartezimmer saßen sechs Leute.",
      exampleAr: "كان في غرفة الانتظار ستّة أشخاص.",
      level: "A2",
    },
    {
      id: "fc23",
      de: "Gute Besserung!",
      ar: "شفاءً عاجلاً! (تقابل «سلامتك»)",
      example: "Gute Besserung! – Danke schön.",
      exampleAr: "شفاءً عاجلاً! — شكراً جزيلاً.",
      level: "A2",
    },
    {
      id: "fc24",
      de: "schlimm",
      ar: "سيّئ/شديد بحسب السياق",
      example: "Die Beschwerden sind nicht sehr schlimm.",
      exampleAr: "الأعراض ليست شديدة جداً.",
      level: "A2",
    },
  ];



  /* ═══ أنشطة إضافية: الوساطة والتفاعل ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-02-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات طبية بالعربية لشخص",
      sourceDe:
        "Nehmen Sie die Tabletten nach der Packungsbeilage oder der ärztlichen Anweisung ein. Ändern Sie die empfohlene Dosis nicht selbst. Ruhen Sie sich aus.",
      taskAr: "انقل طريقة الاستخدام الآمن والتنبيه إلى عدم تغيير الجرعة ونصيحة الراحة؛ لا تضف جرعة أو توقيتاً غير وارد في النص.",
      modelAnswerAr:
        "«تناول الأقراص وفق النشرة المرفقة أو تعليمات الطبيب، ولا تغيّر الجرعة الموصى بها بنفسك. استرح.»",
      keyPointsAr: [
        "نقلت الرجوع إلى النشرة أو تعليمات الطبيب.",
        "ذكرت عدم تغيير الجرعة الموصى بها من تلقاء النفس.",
        "نقلت نصيحة الراحة.",
      ],
    },
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-02-1",
      scenarioAr: "تدريب اختيار نص على حوار قصير في العيادة.",
      scenarioDe: "Beim Arzt — du beschreibst Symptome.",
      strategyAr: "اختر الرد الملائم للسؤال؛ هذا نشاط اختيار من متعدد، لا يسجل إنتاجاً شفهياً أو نطقاً.",
      rounds: [
        {
          speakerDe: "Was fehlt Ihnen?",
          speakerAr: "ما الذي يزعجك؟",
          options: [
            {
              de: "Ich habe seit zwei Tagen Kopfschmerzen und Fieber.",
              ar: "أعاني منذ يومين من صداع وحمى.",
              best: true,
              replyDe: "Haben Sie auch Husten?",
              replyAr: "هل لديك سعال أيضاً؟",
            },
            {
              de: "Ich habe morgen einen Termin.",
              ar: "لدي موعد غداً.",
              best: false,
              replyDe: "Verstanden. Welche Beschwerden haben Sie?",
              replyAr: "حسناً. ما الأعراض التي لديك؟",
            },
          ],
        },
        {
          speakerDe: "Haben Sie auch Husten?",
          speakerAr: "هل لديك سعال أيضاً؟",
          options: [
            {
              de: "Ja, ein bisschen. Besonders nachts.",
              ar: "نعم قليلاً. خاصة في الليل.",
              best: true,
              replyDe: "Seit wann haben Sie Husten?",
              replyAr: "منذ متى لديك سعال؟",
            },
            {
              de: "Ich habe seit gestern Fieber.",
              ar: "لديّ حمى منذ أمس.",
              best: false,
              replyDe: "Danke. Ich frage noch einmal: Husten Sie auch?",
              replyAr: "شكراً. أسأل مرة أخرى: هل لديك سعال أيضاً؟",
            },
          ],
        },
      ],
    },
  ];
