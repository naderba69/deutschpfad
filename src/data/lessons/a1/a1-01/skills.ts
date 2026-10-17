/**
 * a1-01 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من a1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    "id": "read-a1-01",
    "titleDe": "Amir stellt sich vor",
    "titleAr": "أمير يقدّم نفسه",
    "textType": "erzaehlung",
    "paragraphs": [
      "Hallo! Ich heiße Amir Ben Salah. Ich komme aus Tunesien, aus der Stadt Sfax. Jetzt wohne ich in Leipzig. Leipzig ist eine Stadt in Deutschland. Ich bin 24 Jahre alt und ich bin Student. Ich lerne Deutsch, denn ich möchte hier Informatik studieren.",
      "Ich wohne nicht allein. Meine Mitbewohnerin heißt Lena. Sie kommt aus Polen und sie ist auch Studentin. Lena ist sehr nett und sie ist immer freundlich. Am Morgen sagt sie: Guten Morgen, Amir! Wie geht es dir? Und ich antworte: Danke, gut! Und dir?",
      "Am Montag beginnt mein Deutschkurs. Der Kurs ist von neun bis zwölf Uhr. Meine Lehrerin heißt Frau Weber. Sie fragt uns immer: Woher kommen Sie? Wo wohnen Sie? Warum lernen Sie Deutsch? Wir antworten auf Deutsch. Das ist nicht leicht, aber es macht Spaß.",
      "Am Abend telefoniere ich mit meiner Familie in Sfax. Meine Mutter fragt: Wie geht es dir in Deutschland? Ich sage: Es geht mir gut, aber ich vermisse euch. Deutschland ist neu für mich, doch ich lerne jeden Tag etwas Neues. Auf Wiedersehen und bis bald!"
    ],
    "paragraphsAr": [
      "مرحباً! اسمي أمير بن صالح. أنا من تونس، من مدينة صفاقس. أسكن الآن في لايبتسيغ، وهي مدينة في ألمانيا. عمري 24 سنة وأنا طالب. أتعلّم الألمانية لأنّني أودّ دراسة المعلوماتية هنا.",
      "أنا لا أسكن وحدي. شريكتي في السكن اسمها لينا. هي من بولندا وهي طالبة أيضاً. لينا لطيفة جداً وودودة دائماً. في الصباح تقول: صباح الخير يا أمير! كيف حالك؟ فأجيب: بخير، شكراً! وأنتِ؟",
      "يوم الاثنين تبدأ دورتي في الألمانية. الدورة من التاسعة إلى الثانية عشرة. معلّمتي اسمها السيدة فيبر. تسألنا دائماً: من أين أنتم؟ أين تسكنون؟ لماذا تتعلّمون الألمانية؟ ونجيب بالألمانية. ليس الأمر سهلاً، لكنّه ممتع.",
      "في المساء أتّصل بأسرتي في صفاقس. تسألني أمّي: كيف حالك في ألمانيا؟ فأقول: أنا بخير، لكنّني أشتاق إليكم. ألمانيا جديدة عليّ، غير أنّني أتعلّم كلّ يوم شيئاً جديداً. إلى اللقاء وإلى القريب!"
    ],
    "glossary": [
      {
        "de": "heißen",
        "ar": "يُسمّى / اسمه",
        "noteAr": "فعل منتظم لكن du تأخذ ‑t وحدها: du heißt (لأنّ الجذع ينتهي بـ ß)."
      },
      {
        "de": "kommen aus",
        "ar": "يأتي من / أصله من",
        "noteAr": "aus + اسم البلد للتعبير عن الأصل: Ich komme aus Tunesien."
      },
      {
        "de": "wohnen",
        "ar": "يسكن",
        "noteAr": "يُتبع بـ in + مدينة: Ich wohne in Leipzig. لا تخلطه بـ leben (يعيش)."
      },
      {
        "de": "die Stadt",
        "ar": "المدينة",
        "noteAr": "مؤنّثة، والجمع شاذّ: die Städte."
      },
      {
        "de": "der Student / die Studentin",
        "ar": "طالب جامعي / طالبة",
        "noteAr": "المؤنّث بإضافة ‑in. وبعد sein تأتي بلا أداة: Ich bin Student."
      },
      {
        "de": "nett",
        "ar": "لطيف",
        "noteAr": "صفة مع sein: Sie ist nett. لا تحتاج أداةً ولا نهاية."
      },
      {
        "de": "beginnen",
        "ar": "يبدأ",
        "noteAr": "منتظم: der Kurs beginnt. مرادفه anfangen (فعل بسابقة منفصلة، لاحقاً)."
      },
      {
        "de": "fragen",
        "ar": "يسأل",
        "noteAr": "منتظم تماماً: sie fragt. ضدّه antworten (وجذعه ينتهي بـ t فيأخذ وصلة ‑e‑: du antwortest)."
      },
      {
        "de": "die Lehrerin",
        "ar": "المعلّمة",
        "noteAr": "المذكّر der Lehrer، والمؤنّث بإضافة ‑in مع مدّ الحرف أحياناً."
      },
      {
        "de": "leicht",
        "ar": "سهل / خفيف",
        "noteAr": "ضدّه schwer. وتُستعمل للوزن والصعوبة معاً."
      },
      {
        "de": "Es macht Spaß",
        "ar": "إنّه ممتع",
        "noteAr": "تعبير ثابت. حرفياً «يصنع متعة»؛ لا يُترجم كلمةً كلمة."
      },
      {
        "de": "jeden Tag",
        "ar": "كلّ يوم",
        "noteAr": "ظرف زمان في حالة النصب (Akkusativ) — يُحفظ الآن كوحدة."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "اقرأ الفقرة الأولى ثمّ اختر الجواب الصحيح:",
        "questionDe": "Woher kommt Amir?",
        "questionAr": "من أين أمير؟",
        "options": [
          "Aus Polen",
          "Aus Tunesien",
          "Aus Deutschland",
          "Aus Leipzig"
        ],
        "correctIndex": 1,
        "explanation": "في الفقرة الأولى: «Ich komme aus Tunesien». انتبه للفرق بين مكان الأصل (Tunesien) ومكان السكن الحالي (Leipzig) — كلاهما مذكور، والسؤال بـ woher يطلب الأصل.",
        "optionExplanations": [
          "بولندا بلد لينا لا أمير.",
          undefined,
          "ألمانيا بلد إقامته لا أصله.",
          "لايبتسيغ مدينة سكنه الآن، والسؤال عن الأصل."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "اختر الجواب الصحيح حسب الفقرة الثانية:",
        "questionDe": "Wer ist Lena?",
        "questionAr": "من هي لينا؟",
        "options": [
          "Seine Lehrerin",
          "Seine Mutter",
          "Seine Mitbewohnerin",
          "Seine Schwester"
        ],
        "correctIndex": 2,
        "explanation": "«Meine Mitbewohnerin heißt Lena» — أي شريكته في السكن. أمّا المعلّمة فاسمها Frau Weber، والأمّ ذُكرت في الفقرة الأخيرة بلا اسم.",
        "optionExplanations": [
          "المعلّمة هي Frau Weber في الفقرة الثالثة.",
          "الأمّ وردت في الفقرة الرابعة.",
          undefined,
          "لم تُذكر أخت في النصّ إطلاقاً."
        ],
        "errorType": "vocabulary",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "ابحث في الفقرة الثالثة عن المعلومة الزمنية:",
        "questionDe": "Wann beginnt der Deutschkurs?",
        "questionAr": "متى تبدأ دورة الألمانية؟",
        "options": [
          "Am Abend",
          "Am Montag",
          "Am Morgen",
          "Am Wochenende"
        ],
        "correctIndex": 1,
        "explanation": "«Am Montag beginnt mein Deutschkurs». لاحظ ترتيب الكلمات: الظرف Am Montag في المركز الأوّل، فانزاح الفاعل بعد الفعل beginnt — وهذه قاعدة المركز الثاني نفسها التي درستَها.",
        "optionExplanations": [
          "المساء وقت المكالمة العائلية.",
          undefined,
          "الصباح وقت تحية لينا.",
          "لم تُذكر عطلة نهاية الأسبوع."
        ],
        "errorType": "word-order",
        "paragraph": 2
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "انتبه للتصريف في الفقرة الثالثة:",
        "questionDe": "Welcher Satz steht so im Text?",
        "questionAr": "أيّ جملة وردت هكذا في النصّ؟",
        "options": [
          "Sie frag uns immer",
          "Sie fragt uns immer",
          "Sie fragen uns immer",
          "Sie fragst uns immer"
        ],
        "correctIndex": 1,
        "explanation": "الفاعل sie (هي) مفرد غائب، فيأخذ الفعل النهاية ‑t: sie fragt. أمّا fragen فللجمع، وfragst لـ du، وfrag بلا نهاية صيغة أمر.",
        "optionExplanations": [
          "frag بلا نهاية = صيغة الأمر لا الإخبار.",
          undefined,
          "‑en للجمع wir/sie أو للصيغة الرسمية Sie.",
          "‑st نهاية du وحدها."
        ],
        "errorType": "conjugation",
        "paragraph": 2
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "افهم الموقف العامّ في الفقرة الأخيرة:",
        "questionDe": "Wie geht es Amir in Deutschland?",
        "questionAr": "كيف حال أمير في ألمانيا؟",
        "options": [
          "Er ist krank und liegt seit Montag im Bett",
          "Er möchte bald zurück nach Sfax fahren",
          "Es geht ihm gut, aber er vermisst die Familie",
          "Er lernt seit Wochen kein Deutsch mehr"
        ],
        "correctIndex": 2,
        "explanation": "يجمع النصّ حالين معاً: «Es geht mir gut, aber ich vermisse euch». الأداة aber هي مفتاح الفهم — فهي تربط شعورين متضادّين، ومَن قرأ نصفَ الجملة فقط أخطأ.",
        "optionExplanations": [
          "لم يُذكر مرض.",
          "يشتاق لأهله لكنّه لم يقل إنّه يريد العودة.",
          undefined,
          "بل يتعلّم كلّ يوم شيئاً جديداً."
        ],
        "errorType": "vocabulary",
        "paragraph": 3
      }
    ],
    "redemittel": [
      {
        "de": "Ich heiße … und ich komme aus …",
        "ar": "اسمي … وأنا من …"
      },
      {
        "de": "Ich wohne in … / Ich bin … Jahre alt.",
        "ar": "أسكن في … / عمري … سنة."
      },
      {
        "de": "Wie geht es dir? — Danke, gut! Und dir?",
        "ar": "كيف حالك؟ — بخير، شكراً! وأنتَ؟"
      },
      {
        "de": "Ich lerne Deutsch, denn ich möchte hier studieren.",
        "ar": "أتعلّم الألمانية لأنّني أودّ الدراسة هنا."
      },
      {
        "de": "Das ist nicht leicht, aber es macht Spaß.",
        "ar": "ليس الأمر سهلاً، لكنّه ممتع."
      },
      {
        "de": "Auf Wiedersehen und bis bald!",
        "ar": "إلى اللقاء وإلى القريب!"
      }
    ],
    "discussionAr": "قدّم نفسك أنت الآن على منوال أمير: اسمك، بلدك، مدينتك، عمرك، مهنتك أو دراستك، وسببُ تعلّمك الألمانية. اكتب خمس جملٍ على الأقلّ مستعملاً sein مرّةً والأفعال المنتظمة مرّتين، ثم اقرأها بصوتٍ عالٍ."
  };

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "لقاء غير رسمي (informell)",
        lines: [
          { speaker: "Anna", de: "Hallo! Ich heiße Anna. Wie heißt du?", ar: "مرحباً! اسمي آنا. ما اسمك؟" },
          { speaker: "Sami", de: "Hallo Anna! Ich heiße Sami.", ar: "مرحباً آنا! اسمي سامي." },
          { speaker: "Sami", de: "Ich komme aus Tunesien. Und woher kommst du?", ar: "أنا من تونس. وأنتِ من أين؟" },
          { speaker: "Anna", de: "Ich komme aus Deutschland, aus Berlin.", ar: "أنا من ألمانيا، من برلين." },
          { speaker: "Sami", de: "Freut mich!", ar: "يسعدني لقاؤك!" },
        ],
      },
      {
        id: "l2",
        title: "لقاء رسمي (formell)",
        lines: [
          { speaker: "Herr Weber", de: "Guten Tag! Wie heißen Sie?", ar: "طاب يومك! ما اسم حضرتك؟" },
          { speaker: "Frau Leila", de: "Guten Tag! Ich heiße Leila Mansour.", ar: "طاب يومك! اسمي ليلى منصور." },
          { speaker: "Herr Weber", de: "Woher kommen Sie, Frau Mansour?", ar: "من أين أنتِ يا سيدة منصور؟" },
          { speaker: "Frau Leila", de: "Ich komme aus Tunesien.", ar: "أنا من تونس." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد سماع الحوار الأول:",
        questionDe: "Wie heißt die Frau?",
        questionAr: "ما اسم الفتاة؟",
        options: ["Sami", "Anna", "Berlin", "Tunis"],
        correctIndex: 1,
        explanation: "قالت الفتاة: Ich heiße Anna — اسمها آنا.",
        errorType: "vocabulary",
        optionExplanations: [
          "سامي هو الرجل في الحوار: «Ich heiße Sami»؛ والسؤال عن اسم المرأة.",
          undefined,
          "برلين مدينة لا اسم شخص: «Ich komme aus Deutschland, aus Berlin».",
          "لم يقل أحد «Ich heiße Tunis»؛ والمرأة قالت «Ich heiße Anna».",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Woher kommt Sami?",
        questionAr: "من أين سامي؟",
        options: ["aus Deutschland", "aus Berlin", "aus Tunesien", "aus Österreich"],
        correctIndex: 2,
        explanation: "قال سامي: Ich komme aus Tunesien — هو من تونس.",
        errorType: "vocabulary",
        optionExplanations: [
          "ألمانيا بلد آنا: «Ich komme aus Deutschland»؛ والسؤال عن سامي.",
          "برلين مدينة آنا «aus Berlin»؛ وسامي قال «Ich komme aus Tunesien».",
          undefined,
          "لم تُذكر النمسا «Österreich» في الحوار؛ والموطن المذكور تونس.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد سماع الحوار الثاني:",
        questionDe: "Wie heißt die Frau?",
        questionAr: "ما اسم السيدة في الحوار الرسمي؟",
        options: ["Frau Weber", "Leila Mansour", "Anna", "Sami"],
        correctIndex: 1,
        explanation: "قالت السيدة: Ich heiße Leila Mansour — اسمها ليلى منصور.",
        errorType: "vocabulary",
        optionExplanations: [
          "فيبر هو الرجل المُحاور: «Guten Tag! Wie heißen Sie?» قالها Herr Weber؛ والمرأة أجابت باسمها.",
          undefined,
          "آنا من الحوار الأول غير الرسمي «Ich heiße Anna»، لا من هذا الرسمي.",
          "سامي رجلٌ في الحوار الأول؛ والمتحدثة هنا «Ich heiße Leila Mansour».",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "الأصوات الأساسية: h في بداية الكلمة وصوت ei",
    items: [
      { de: "Hallo", ar: "مرحباً", note: "h في البداية تُنطق من الحلق بنَفَس خفيف: ها-لو" },
      { de: "heißen", ar: "يُسمى", note: "ei تُنطق «أَيْ» وليس «إي»: هاي-سِن" },
      { de: "wie", ar: "كيف", note: "الحرف w هنا يُنطق «ڤ»: ڤي" },
      { de: "woher", ar: "من أين", note: "ڤوهير — مع h بارزة في المنتصف" },
      { de: "Guten Tag", ar: "طاب يومك", note: "غوتن تاك — الـ g في آخر الكلمة تُهمس فتُنطق «ك»" },
    ],
    tip: "كرّر كل كلمة ثلاث مرات بصوت عالٍ قبل الانتقال — النطق الصحيح من اليوم الأول يمنع العادات الخاطئة.",
    shadowing: [
      { de: "Hallo! Ich heiße Anna.", ar: "مرحباً! اسمي آنا.", tip: "انتبه: heiße تُنطق «هاي-سِه» وليس «هيسّه»" },
      { de: "Wie heißt du?", ar: "ما اسمك؟", tip: "ارفع نبرة صوتك في نهاية السؤال" },
      { de: "Ich komme aus Tunesien.", ar: "أنا من تونس.", tip: "komme = كومّه (حرف o قصير)" },
      { de: "Freut mich!", ar: "يسعدني لقاؤك!", tip: "مقطعان فقط: فرويت ميش" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "أجب كتابةً بالجملة الكاملة: من أين أنت؟",
      instructionDe: "Antworte: Woher kommst du?",
      prompt: "Woher kommst du? (أجب بجملة كاملة تبدأ بـ Ich)",
      acceptedAnswers: ["Ich komme aus Tunesien", "Ich komme aus Tunis", "Ich komme aus Tunesien."],
      sampleAnswer: "Ich komme aus Tunesien.",
      explanation: "الصيغة الصحيحة: Ich komme aus + البلد. انتبه إلى الفعل komme بعد ich.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "transformation",
      instructionAr: "حوّل هذه الجملة إلى سؤال (نعم/لا): Du heißt Anna.",
      instructionDe: "Bilde eine Frage: Du heißt Anna.",
      prompt: "Du heißt Anna. → ؟",
      acceptedAnswers: ["Heißt du Anna", "Heißt du Anna?"],
      sampleAnswer: "Heißt du Anna?",
      explanation: "سؤال نعم/لا: الفعل أولاً ثم الفاعل — Heißt du Anna?",
      errorType: "word-order",
    },
    {
      id: "w3",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالضمير الصحيح (ich/du/er/sie):",
      template: "___ bin Anna. Und wie heißt ___? ___ heißt Sami.",
      blanks: [
        { correct: "Ich", options: ["Ich", "Du", "Er"] },
        { correct: "du", options: ["ich", "du", "er"] },
        { correct: "Er", options: ["Ich", "Du", "Er"] },
      ],
      explanation: "Ich (أنا) مع bin، du (أنتَ) في السؤال، Er (هو) مع heißt للحديث عن شخص ثالث.",
      errorType: "pronoun",
    },
  ];
