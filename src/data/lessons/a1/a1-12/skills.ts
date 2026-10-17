/**
 * a1-12 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a1-12.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a1-12",
    titleDe: "Wetter in den vier Jahreszeiten",
    titleAr: "الطقس في الفصول الأربعة",
    textType: "blog",
    paragraphs: [
      "Hallo! Ich heiße Amine und ich komme aus Tunis. Seit einem Jahr wohne ich in Hamburg und studiere hier. In meinem Blog schreibe ich heute über das deutsche Wetter, denn es ist wirklich anders als zu Hause.",
      "Im Sommer ist es in Hamburg oft schön. Die Sonne scheint, es sind fünfundzwanzig Grad und die Tage sind sehr lang. Um zweiundzwanzig Uhr ist es noch hell! Für mich ist der Sommer hier kurz, und manchmal regnet es auch im Juli.",
      "Im Herbst wird es schnell kalt. Die Blätter werden bunt und der Wind weht stark. Am Morgen ist es oft neblig, aber am Nachmittag scheint manchmal die Sonne. Ich nehme jetzt immer einen Regenschirm mit, denn das Wetter ändert sich sehr schnell.",
      "Der Winter ist für mich am schwersten. Es ist kalt und dunkel, und in der Nacht sind es minus fünf Grad. Manchmal schneit es. Das ist schön, aber mir ist immer kalt! In Tunis trage ich im Winter keine dicke Jacke, hier trage ich eine.",
      "Und dann kommt der Frühling. Ab März wird es wärmer, die Tage werden länger und alles wird grün. Das ist meine Lieblingsjahreszeit, denn nach dem langen Winter ist jeder Sonnentag ein kleines Fest.",
      "Und wie ist das Wetter bei euch? Schreibt mir bitte in den Kommentaren! Morgen regnet es hier übrigens. In einer Woche fahre ich nach Tunis, und dort sind es dreißig Grad. Ich freue mich schon!",
    ],
    paragraphsAr: [
      "أهلاً! اسمي أمين وأنا من تونس. أسكن في هامبورغ منذ سنة وأدرس هنا. في مدوّنتي أكتب اليوم عن الطقس الألمانيّ، لأنّه مختلف حقاً عمّا في بلدي.",
      "في الصيف يكون الجوّ في هامبورغ جميلاً غالباً. الشمس مشرقة، والحرارة خمس وعشرون درجة، والأيّام طويلة جداً. في العاشرة مساءً ما زال النهار! لكن صيف هامبورغ يبدو لي قصيراً، وأحياناً تمطر حتى في يوليو.",
      "في الخريف يصير الجوّ بارداً بسرعة. تصير الأوراق ملوّنة وتهبّ الريح بقوّة. في الصباح يكون الجوّ ضبابياً غالباً، لكن بعد الظهر تشرق الشمس أحياناً. صرت آخذ المظلّة معي دائماً، لأنّ الطقس يتبدّل بسرعة شديدة.",
      "الشتاء هو الأصعب عليّ. الجوّ بارد ومظلم، وفي الليل تكون الحرارة خمس درجات تحت الصفر. أحياناً تثلج. هذا جميل، لكنّي أشعر بالبرد دائماً! في تونس لا أرتدي سترة سميكة في الشتاء، وهنا أرتدي واحدة.",
      "ثمّ يأتي الربيع. ابتداءً من مارس يصير الجوّ أدفأ، وتصير الأيّام أطول، ويخضرّ كلّ شيء. هذا فصلي المفضّل، لأنّ كلّ يومٍ مشمس بعد الشتاء الطويل عيدٌ صغير.",
      "وكيف الطقس عندكم؟ اكتبوا لي في التعليقات من فضلكم! وبالمناسبة تمطر هنا غداً. أسافر إلى تونس بعد أسبوع، وهناك الحرارة ثلاثون درجة. أنا متشوّق!",
    ],
    glossary: [
      {
        de: "das Wetter ändert sich",
        ar: "الطقس يتبدّل",
        noteAr: "فعل انعكاسيّ: sich ändern.",
      },
      {
        de: "neblig",
        ar: "ضبابيّ",
        noteAr: "من der Nebel (الضباب).",
      },
      {
        de: "der Wind weht",
        ar: "تهبّ الريح",
        noteAr: "عبارة باسم الطقس مع فعل.",
      },
      {
        de: "bunt",
        ar: "ملوّن، زاهي الألوان",
        noteAr: "Die Blätter werden bunt.",
      },
      {
        de: "der Regenschirm",
        ar: "المظلّة",
        noteAr: "مركّبة: Regen (مطر) + Schirm.",
      },
      {
        de: "minus fünf Grad",
        ar: "خمس درجات تحت الصفر",
        noteAr: "في قياس الحرارة المعتاد يشيع fünf Grad؛ وللاسم جمع Grade في استعمالات أخرى.",
      },
      {
        de: "mir ist kalt",
        ar: "أشعر بالبرد",
        noteAr: "تعبير ألماني عن الإحساس؛ لا يعني أن Ich bin kalt خطأ مطلق أو أن حالة Dativ تقابل إعراباً عربياً بعينه.",
      },
      {
        de: "in der Nacht",
        ar: "في الليل",
        noteAr: "تركيب زمني مألوف يُحفظ كما هو.",
      },
      {
        de: "ab März",
        ar: "ابتداءً من مارس",
        noteAr: "مدى مفتوح.",
      },
      {
        de: "in einer Woche",
        ar: "بعد أسبوع",
        noteAr: "في هذا السياق تعني بعد أسبوع من نقطة الحديث؛ المعنى يتعلّق بالسياق.",
      },
      {
        de: "die Lieblingsjahreszeit",
        ar: "الفصل المفضّل",
        noteAr: "Lieblings- مكوّن أول في مركّب يدلّ على «المفضّل»؛ وفي المثال يعني الفصل المفضّل.",
      },
      {
        de: "hell / dunkel",
        ar: "مضيء / مظلم",
        noteAr: "Um zweiundzwanzig Uhr ist es noch hell.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Wie lange wohnt Amine schon in Hamburg?",
        errorType: "preposition",
        options: [
          "Seit einem Jahr",
          "Seit einer Woche",
          "Seit fünf Jahren",
          "Seit einem Monat",
        ],
        correctIndex: 0,
        paragraph: 0,
        explanation:
          "يذكر النص Seit einem Jahr wohne ich in Hamburg. يختبر السؤال استخراج المدة المصرّح بها، لا ترجمةً حرفية لحالة نحوية ألمانية إلى العربية.",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Was sagt Amine über den Sommer in Hamburg?",
        errorType: "vocabulary",
        options: [
          "Er ist schön, aber kurz.",
          "Er ist sehr lang.",
          "Es regnet nie.",
          "Es sind vierzig Grad.",
        ],
        correctIndex: 0,
        paragraph: 1,
        explanation:
          "يذكر أن الشمس تشرق والأيام طويلة، ثم يقيّد وصفه الشخصي بعبارة Für mich ist der Sommer hier kurz.",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Warum nimmt Amine im Herbst immer einen Regenschirm mit?",
        errorType: "vocabulary",
        options: [
          "Denn das Wetter ändert sich schnell.",
          "Denn es schneit dort immer im Winter.",
          "Denn er hat keine warme Jacke.",
          "Denn es ist viel zu heiß draußen.",
        ],
        correctIndex: 0,
        paragraph: 2,
        explanation:
          "يذكر النص أن الطقس يتغير بسرعة؛ وفي هذا المثال تربط denn جملتين رئيسيتين ويبقى الفعل ist في موضعه المعتاد بعد الفاعل.",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Wie kalt ist es im Winter in der Nacht?",
        errorType: "vocabulary",
        options: ["Minus fünf Grad", "Fünf Grad", "Fünfzehn Grad", "Null Grad"],
        correctIndex: 0,
        paragraph: 3,
        explanation:
          "يذكر النص in der Nacht sind es minus fünf Grad؛ والإجابة تنقل قيمة الحرارة المكتوبة فيه.",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Welche Jahreszeit mag Amine am liebsten?",
        errorType: "vocabulary",
        options: ["Den Frühling", "Den Winter", "Den Herbst", "Den Sommer"],
        correctIndex: 0,
        paragraph: 4,
        explanation:
          "Das ist meine Lieblingsjahreszeit — يقولها عن الربيع، لأنّ كلّ يوم مشمس بعد الشتاء عيدٌ صغير.",
      },
    ],
    redemittel: [
      {
        de: "Wie ist das Wetter heute?",
        ar: "كيف الطقس اليوم؟",
      },
      {
        de: "Es ist sonnig / bewölkt / neblig.",
        ar: "الجوّ مشمس / غائم / ضبابيّ.",
      },
      {
        de: "Es sind zwanzig Grad.",
        ar: "الحرارة عشرون درجة.",
      },
      {
        de: "Mir ist kalt / warm.",
        ar: "أشعر بالبرد / بالدفء.",
      },
      {
        de: "Es wird kälter / wärmer.",
        ar: "يصير الجوّ أبرد / أدفأ.",
      },
      {
        de: "Es regnet seit … Stunden.",
        ar: "تمطر منذ … ساعات.",
      },
      {
        de: "Morgen regnet es.",
        ar: "تمطر غداً.",
      },
      {
        de: "Nimm einen Regenschirm mit!",
        ar: "خذ مظلّة معك!",
      },
    ],
    discussionAr:
      "تدريب كتابة حرّ اختياري غير مسجّل كدليل على هدف كتابة: صف طقس بلدك في الفصول الأربعة، واذكر الفصل المفضّل لديك ولماذا. يمكنك ربط جملك بـund وaber وdenn واستعمال werden للتعبير عن التحوّل.",
  };


export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "تقرير الطقس",
        lines: [
          {
            speaker: "Sprecherin",
            de: "Guten Morgen! Das Wetter heute in Berlin: Am Morgen ist es kalt und windig.",
            ar: "صباح الخير! طقس اليوم في برلين: صباحاً الجو بارد وعاصف.",
          },
          {
            speaker: "Sprecherin",
            de: "Am Nachmittag scheint die Sonne und es wird warm.",
            ar: "بعد الظهر تشرق الشمس ويصبح الجو دافئاً.",
          },
          {
            speaker: "Sprecherin",
            de: "Am Abend regnet es in Berlin.",
            ar: "مساءً تمطر في برلين.",
          },
          {
            speaker: "Sprecherin",
            de: "Und morgen? Morgen schneit es in den Bergen.",
            ar: "وغداً؟ غداً تثلج في الجبال.",
          },
        ],
      },
      {
        id: "l2",
        title: "الطقس والفصول",
        lines: [
          {
            speaker: "Mona",
            de: "Wie ist das Wetter im Sommer in Tunesien?",
            ar: "كيف الطقس صيفاً في تونس؟",
          },
          {
            speaker: "Sami",
            de: "Bei uns in Tunesien ist es im Sommer oft sehr heiß und sonnig.",
            ar: "عندنا في تونس يكون الجو في الصيف حاراً جداً ومشمساً غالباً.",
          },
          { speaker: "Mona", de: "Und im Winter?", ar: "وفي الشتاء؟" },
          {
            speaker: "Sami",
            de: "Bei uns in Tunesien ist es im Winter oft kalt, und manchmal regnet es.",
            ar: "عندنا في تونس يكون الجو في الشتاء بارداً غالباً، وأحياناً تمطر.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie ist das Wetter am Morgen?",
        questionAr: "كيف الجو صباحاً؟",
        options: ["kalt und windig", "warm und sonnig", "heiß", "es schneit"],
        correctIndex: 0,
        explanation: "قالت المذيعة: Am Morgen ist es kalt und windig.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was passiert am Abend in Berlin?",
        questionAr: "ماذا يحدث مساءً في برلين؟",
        options: [
          "Es regnet.",
          "Es schneit.",
          "Die Sonne scheint.",
          "Es ist heiß.",
        ],
        correctIndex: 0,
        explanation: "قالت: Am Abend regnet es in Berlin — تمطر.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie ist das Wetter im Sommer in Tunesien?",
        questionAr: "كيف الطقس صيفاً في تونس؟",
        options: [
          "oft sehr heiß und sonnig",
          "kalt und regnerisch",
          "windig",
          "es schneit",
        ],
        correctIndex: 0,
        explanation:
          "أجاب سامي عن سؤال الطقس في تونس بقوله Bei uns in Tunesien ist es im Sommer oft sehr heiß und sonnig؛ ينقل البند هذه المعلومة المنطوقة ولا يعمّمها على كل مكان أو وقت.",
        errorType: "vocabulary",
      },
    ],
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات الطقس: w وsch وg",
    items: [
      {
        de: "das Wetter",
        ar: "الطقس",
        note: "في الألمانية القياسية يبدأ w بصوت قريب من /v/؛ والكتابة العربية تقريب تقريبي فقط.",
      },
      {
        de: "die Sonne",
        ar: "الشمس",
        note: "يورد Duden النطق [ˈzɔnə]: يبدأ الصوت بـ/z/، وفيه حركة قصيرة؛ والتهجئة العربية تقريبية.",
      },
      {
        de: "der Regen",
        ar: "المطر",
        note: "يظهر /eː/ و/g/ في تدوين Duden للمركّب Regenwetter؛ g هنا صوت وقفي مجهور، لا صوت غ /ɣ/ العربي. التقريب العربي غير معياري.",
      },
      {
        de: "der Schnee",
        ar: "الثلج",
        note: "sch يقابل /ʃ/ وee طويلة في هذا المثال؛ دوّن الصوت ولا تعتمد على نقل عربي حرفي.",
      },
      {
        de: "kalt / warm",
        ar: "بارد / دافئ",
        note: "في warm يبدأ w بالصوت الألماني /v/؛ لا يقابل حرفاً عربياً مطابقاً تماماً.",
      },
      {
        de: "der Wind",
        ar: "الريح",
        note: "w يبدأ بـ/v/؛ وi قصيرة، وd النهائية تُسمع عادةً /t/ في النطق القياسي.",
      },
    ],
    tip:
      "هذه إشارات تقريبية للتدريب وليست تهجئة صوتية معيارية بالعربية؛ لا تستنتج قاعدة عامة عن مضاعفة الحروف من كلمة Schnee وحدها.",
    shadowing: [
      { de: "Es ist kalt.", ar: "الجو بارد.", tip: "kalt = /kalt/ بحركة قصيرة؛ لا تمدّ a. التقريب العربي ليس تدويناً صوتياً معيارياً." },
      {
        de: "Die Sonne scheint.",
        ar: "تشرق الشمس.",
        tip: "scheint = شاينت (ei = آي)",
      },
      {
        de: "Es regnet heute.",
        ar: "تمطر اليوم.",
        tip: "g في regnet صوت /g/ مجهور؛ ليس صوت غ /ɣ/ العربي. التقريب الصوتي بالعربية غير دقيق.",
      },
      {
        de: "Im Winter schneit es.",
        ar: "في الشتاء تثلج.",
        tip: "schneit = شنايت",
      },
    ],
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr:
        "اكتب جملة كاملة تطابق معطيات الطقس المحددة:",
      prompt: "Beschreibe: heute sonnig und warm.",
      acceptedAnswers: [
        "Heute ist es sonnig und warm.",
        "Es ist heute sonnig und warm.",
        "Das Wetter ist heute sonnig und warm.",
        "Heute scheint die Sonne und es ist warm.",
        "Die Sonne scheint heute und es ist warm.",
        "Heute ist es warm und die Sonne scheint.",
        "Heute ist das Wetter sonnig und warm.",
        "Heute ist es warm und sonnig.",
        "Es ist heute warm und sonnig.",
        "Das Wetter ist heute warm und sonnig.",
      ],
      sampleAnswer: "Heute ist es sonnig und warm.",
      caseSensitive: true,
      explanation:
        "الإجابة المنتظرة جملة كاملة تحفظ المعنيين: اليوم مشمس ودافئ. تقبل الصيغ المدرجة التي تنقل المعطيات نفسها؛ لا تُحتسب الإجابة النموذجية ما لم تطابق إحدى الصيغ المقبولة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف werden:",
      template: "Ich ___ müde. Du ___ schnell müde. Es ___ kalt. Wir ___ alt.",
      blanks: [
        { correct: "werde", options: ["werde", "wirst", "wird"] },
        { correct: "wirst", options: ["werde", "wirst", "wird"] },
        { correct: "wird", options: ["werde", "wirst", "wird"] },
        { correct: "werden", options: ["werden", "werdet", "wirst"] },
      ],
      explanation: "سلم werden: werde، wirst، wird، werden، werdet، werden.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Im Winter wird es kalt.",
      caseSensitive: true,
      explanation: "في الشتاء يصبح الجو بارداً — wird (werden مع es).",
      errorType: "spelling",
    },
  ];
