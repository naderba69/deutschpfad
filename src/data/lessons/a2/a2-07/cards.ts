/**
 * a2-07 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-07.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الاسم الصحيحة بعد es gibt:",
      questionDe: "Es gibt ___ Park in der Stadt.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation:
        "Park مذكر مفرد؛ الصيغة المطلوبة في Akkusativ هي einen Park.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر ضمير المتكلم المناسب مع helfen:",
      questionDe: "Kannst du ___ helfen? (ich)",
      options: ["mir", "mich", "dich", "dir"],
      correctIndex: 0,
      explanation:
        "helfen يطلب Dativ؛ الصيغة المقصودة للمتكلم هي mir.",
      errorType: "pronoun",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال عن وجود صراف:",
      tokens: ["Gibt", "es", "hier", "einen", "Geldautomaten", "?"],
      correctSentence: "Gibt es hier einen Geldautomaten?",
      explanation:
        "يبدأ سؤال نعم/لا بالفعل gibt، ثم يأتي es، ثم ظرف المكان والاسم في Akkusativ.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الضمير الذي لا يلائم الفعل danken:",
      wrongSentence: "Ich danke dich für alles.",
      wrongWord: "dich",
      correctWord: "dir",
      options: ["dir", "dich", "mich", "ihn"],
      explanation:
        "عند ذكر الشخص الذي نشكره يأتي danken مع Dativ: Ich danke dir.",
      errorType: "pronoun",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الضمير التي يطلبها كل فعل:",
      template: "Ich sehe ___. (du) Ich helfe ___. (du)",
      blanks: [
        { correct: "dich", options: ["dich", "dir", "mich"] },
        { correct: "dir", options: ["dich", "dir", "mich"] },
      ],
      explanation:
        "في المثال الأول يأتي sehen مع dich، وفي الثاني يأتي helfen مع dir. الترجمة المقصودة للشخص واحدة، لكن الفعلين يختاران صيغتين مختلفتين بالألمانية.",
      errorType: "pronoun",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "das Konto",
      ar: "الحساب المصرفي",
      example: "Ich eröffne ein Konto.",
      exampleAr: "أفتح حساباً.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "das Geld",
      ar: "المال",
      example: "Ich brauche Geld.",
      exampleAr: "أحتاج إلى مال.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "überweisen",
      ar: "يحوّل مالاً إلى حساب",
      example: "Ich überweise das Geld auf dein Konto.",
      exampleAr: "أحوّل المال إلى حسابك.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "bar bezahlen",
      ar: "يدفع نقداً",
      example: "Ich bezahle bar.",
      exampleAr: "أدفع نقداً.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "der Geldautomat",
      ar: "الصراف الآلي",
      example: "Wo ist der Geldautomat?",
      exampleAr: "أين يوجد الصراف الآلي؟",
      level: "A2",
    },
    {
      id: "fc6",
      de: "es gibt",
      ar: "يوجد/هناك؛ يتبعه الاسم في Akkusativ",
      example: "Es gibt eine Bank in der Nähe.",
      exampleAr: "يوجد بنك قريب.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "mich / dich / mir / dir",
      ar: "صيغ ضمير ألمانية تُختار بحسب الفعل والحالة",
      example: "Ich sehe dich. Ich helfe dir.",
      exampleAr: "أراك. أساعدك.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Bankkarte",
      ar: "البطاقة المصرفية",
      example: "Ich bezahle mit meiner Bankkarte.",
      exampleAr: "أدفع ببطاقتي المصرفية.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "abheben",
      ar: "يسحب نقوداً من الحساب",
      example: "Ich hebe am Automaten Geld ab.",
      exampleAr: "أسحب المال من الصراف الآلي.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "die Gebühr",
      ar: "الرسم / رسوم الخدمة",
      example: "Wo finde ich die Gebühren?",
      exampleAr: "أين أجد معلومات الرسوم؟",
      level: "A2",
    },
    {
      id: "fc11",
      de: "die Übersicht",
      ar: "ملخص المعلومات / جدول المعلومات",
      example: "Die Gebühren stehen in der Übersicht.",
      exampleAr: "الرسوم واردة في ملخص المعلومات.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "das Kontomodell",
      ar: "نموذج الحساب",
      example: "Es gibt zwei Kontomodelle.",
      exampleAr: "يوجد نموذجان للحساب.",
      level: "A2",
    },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-07-1",
      type: "simplify-announcement",
      titleAr: "لخّص تعليمات نموذج بنك افتراضي بالعربية",
      sourceDe:
        "Auszug aus einem fiktiven Bankformular: „Bitte füllen Sie den Antrag aus. Für die Identifizierung brauchen wir ein gültiges Ausweisdokument. Welche weiteren Unterlagen Sie vorlegen müssen, hängt vom Konto und Ihrer Situation ab. Fragen Sie bitte vorab bei der Bank nach.“",
      taskAr:
        "اشرح بالعربية ما تطلبه الاستمارة. ميّز بين وثيقة الهوية المذكورة وبين الوثائق الأخرى التي تختلف بحسب الحساب والحالة؛ لا تضف شروطاً غير مكتوبة ولا تستخدم بيانات شخصية حقيقية.",
      modelAnswerAr:
        "«يرجى تعبئة الطلب. يلزم تقديم وثيقة هوية صالحة لإثبات الهوية. أما الوثائق الأخرى فقد تختلف بحسب الحساب والحالة، لذا اسأل البنك مسبقاً.» هذه صياغة لتمرين، وليست قائمة شاملة أو نصيحة مالية.",
      keyPointsAr: [
        "ذكرت ضرورة تعبئة الطلب وتقديم وثيقة هوية صالحة في هذا المثال",
        "أوضحت أن الوثائق الأخرى تختلف بحسب الحساب والحالة",
        "أشرت إلى سؤال البنك مسبقاً بدلاً من تعميم متطلبات واحدة",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-07-1",
      scenarioAr:
        "محاكاة حوار نصي عن عروض حساب خيالية؛ لا تُدخل أرقام حسابات أو بيانات شخصية حقيقية.",
      scenarioDe: "Ein Gespräch über ein erfundenes Kontoangebot.",
      strategyAr:
        "اطلب معلومات محددة أو توضيحاً. اختر رداً مناسباً؛ ويمكنك قراءته بصوت عالٍ للتدريب، لكن الاختيار النصي لا يقيس الكلام أو النطق ولا يصف شروط بنك حقيقي.",
      rounds: [
        {
          speakerDe: "Guten Tag! Wie kann ich Ihnen helfen?",
          speakerAr: "مرحباً! كيف أستطيع مساعدتك؟",
          options: [
            {
              de: "Ich möchte ein Konto eröffnen. Welche Modelle gibt es?",
              ar: "أريد فتح حساب. ما النماذج المتاحة؟",
              best: true,
              replyDe:
                "In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
              replyAr: "في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
            },
            {
              de: "Ich möchte ein Konto eröffnen. Können Sie mir die Unterschiede erklären?",
              ar: "أريد فتح حساب. هل يمكنك شرح الفروق لي؟",
              best: true,
              replyDe:
                "Gern. In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
              replyAr: "بكل سرور. في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
            },
          ],
        },
        {
          speakerDe: "Welche Information möchten Sie zuerst?",
          speakerAr: "ما المعلومة التي تريد معرفتها أولاً؟",
          options: [
            {
              de: "Wie hoch ist die Gebühr für das Modell mit Karte?",
              ar: "كم يبلغ رسم النموذج ذي البطاقة؟",
              best: true,
              replyDe: "Das Modell mit Karte kostet in diesem Beispiel drei Euro pro Monat.",
              replyAr: "يكلف النموذج ذو البطاقة ثلاثة يورو شهرياً في هذا المثال.",
            },
            {
              de: "Wo finde ich die Öffnungszeiten der Filiale?",
              ar: "أين أجد ساعات عمل الفرع؟",
              best: true,
              replyDe: "Die Öffnungszeiten kann ich Ihnen gleich nennen.",
              replyAr: "يمكنني ذكر ساعات العمل لكم حالاً.",
            },
          ],
        },
      ],
    },
  ];
