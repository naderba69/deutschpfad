/**
 * a1-08 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a1-08.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "r1",
    titleDe: "Ein Nachmittag im Kaufhaus",
    titleAr: "عصرٌ في المتجر الكبير",
    textType: "erzaehlung",
    paragraphs: [
      "Es ist Samstagnachmittag. Amira und ihre Freundin Lena gehen zusammen ins Kaufhaus. Amira sucht eine Jacke für den Herbst. Lena braucht nichts, aber sie kommt gern mit. Das Kaufhaus ist groß und voll. Im ersten Stock ist die Damenabteilung.",
      "Amira sieht eine Jacke. Sie ist blau. Die Jacke ist schön, aber sie ist teuer: 89 Euro. „Wie findest du diese Jacke?“, fragt Amira. „Die Farbe gefällt mir sehr“, sagt Lena. „Blau steht dir gut.“",
      "Amira probiert die Jacke an. Leider ist sie zu klein. „Die Jacke passt mir nicht“, sagt Amira traurig. Eine Verkäuferin kommt und fragt: „Welche Größe haben Sie?“ — „Größe 40“, antwortet Amira. Die Verkäuferin bringt die Jacke noch einmal, jetzt in Größe 40.",
      "Jetzt passt die Jacke perfekt. Aber der Preis ist immer noch hoch. „Gefällt dir die Jacke nicht?“, fragt Lena. „Doch, sie gefällt mir sehr“, sagt Amira. „Aber 89 Euro sind zu viel für mich.“",
      "Da sieht Lena einen Mantel. Er ist grau. Der Mantel kostet nur 45 Euro. „Dieser Mantel ist warm und nicht teuer“, sagt sie. Amira probiert den Mantel an. Er passt ihr gut und gefällt ihr auch. Die Farbe ist grau, nicht blau; Grau gefällt Amira auch.",
      "Amira nimmt den Mantel. An der Kasse bezahlt sie fünfzig Euro und bekommt fünf Euro zurück. Draußen ist es kalt. Amira trägt ihren Mantel und lacht: „Der Mantel gefällt mir wirklich. Und ich habe noch Geld für einen Kaffee!“",
    ],
    paragraphsAr: [
      "إنّه بعد ظهر السبت. تذهب أميرة وصديقتها لينا معاً إلى المتجر الكبير. أميرة تبحث عن سترة للخريف. لينا لا تحتاج شيئاً، لكنّها تأتي معها بسرور. المتجر كبير ومزدحم. في الطابق الأوّل قسم النساء.",
      "ترى أميرة سترة. لونها أزرق. السترة جميلة لكنّها غالية: 89 يورو. «ما رأيك في هذه السترة؟» تسأل أميرة. «اللون يعجبني كثيراً» تقول لينا. «الأزرق يليق بك.»",
      "تُجرّب أميرة السترة. للأسف هي صغيرة جداً. «السترة لا تناسب مقاسي» تقول أميرة حزينة. تأتي بائعة وتسأل: «ما مقاسك؟» — «مقاس 40» تجيب أميرة. تُحضِر البائعة السترة مرة أخرى، هذه المرة بمقاس 40.",
      "الآن تناسبها السترة تماماً. لكنّ السعر ما يزال مرتفعاً. «ألا تعجبك السترة؟» تسأل لينا. «بلى، تعجبني كثيراً» تقول أميرة. «لكن المبلغ أكبر مما أستطيع دفعه.»",
      "عندئذٍ ترى لينا معطفاً. لونه رماديّ. يكلّف المعطف 45 يورو فقط. «هذا المعطف دافئ وغير غالٍ» تقول. تُجرّب أميرة المعطف. يناسبها ويعجبها أيضاً. اللون رماديّ لا أزرق؛ والرماديّ يعجب أميرة أيضاً.",
      "تأخذ أميرة المعطف. عند الصندوق تدفع خمسين يورو وتستلم خمسة يورو. في الخارج الجوّ بارد. ترتدي أميرة معطفها وتضحك: «المعطف يعجبني حقاً. وما زال معي مالٌ لفنجان قهوة!»",
    ],
    glossary: [
      {
        de: "das Kaufhaus",
        ar: "المتجر الكبير (متعدّد الأقسام)",
        noteAr: "مركّب من kaufen (يشتري) + Haus (بيت).",
      },
      {
        de: "die Damenabteilung",
        ar: "قسم النساء",
        noteAr: "Damen (سيّدات) + Abteilung (قسم) — كلمة تراها على اللافتات.",
      },
      {
        de: "probiert … an (anprobieren)",
        ar: "يُجرّب (ملابس)",
        noteAr: "فعل منفصل: sie probiert die Jacke an.",
      },
      {
        de: "die Verkäuferin",
        ar: "البائعة",
        noteAr: "المذكّر der Verkäufer؛ اللاحقة -in تصنع المؤنّث.",
      },
      {
        de: "die Größe",
        ar: "المقاس",
        noteAr: "Welche Größe haben Sie? طريقة مهذبة شائعة للسؤال عن المقاس.",
      },
      {
        de: "passt (passen)",
        ar: "يناسب (مقاساً)",
        noteAr: "مع الدّاتيف: Die Jacke passt mir.",
      },
      {
        de: "gefällt (gefallen)",
        ar: "يعجب",
        noteAr: "مع الدّاتيف: Der Mantel gefällt mir.",
      },
      {
        de: "steht (stehen)",
        ar: "يليق بـ",
        noteAr: "Blau steht dir gut — ليس معناه هنا «يقف».",
      },
      {
        de: "der Preis",
        ar: "السعر",
        noteAr: "Der Preis ist hoch — نقول عن السعر hoch وعن السلعة teuer.",
      },
      {
        de: "die Kasse",
        ar: "الصندوق (مكان الدفع)",
        noteAr: "an der Kasse bezahlen — يدفع عند الصندوق.",
      },
      {
        de: "bekommt … zurück (zurückbekommen)",
        ar: "يستلم الباقي",
        noteAr: "فعل منفصل: sie bekommt fünf Euro zurück.",
      },
      {
        de: "doch",
        ar: "بلى",
        noteAr: "تُستعمل هنا لرفض النفي والإجابة بالإيجاب؛ أما nein فيؤكد النفي.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "لماذا لا تشتري أميرة السترة؟",
        questionDe: "Warum kauft Amira die Jacke nicht?",
        options: [
          "Sie ist zu teuer.",
          "Sie gefällt ihr nicht.",
          "Die Farbe ist hässlich.",
          "Es gibt keine Größe 40.",
        ],
        correctIndex: 0,
        explanation:
          "أعجبتها السترة وناسبها مقاسها بعد التبديل، لكن المبلغ أكبر مما تستطيع دفعه: Aber 89 Euro sind zu viel für mich.",
        errorType: "vocabulary",
        paragraph: 4,
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "ما مشكلة السترة أوّل مرّة؟",
        questionDe: "Was ist das Problem mit der ersten Jacke?",
        options: [
          "Sie ist zu klein.",
          "Sie ist zu groß.",
          "Sie ist schmutzig.",
          "Sie ist grau.",
        ],
        correctIndex: 0,
        explanation:
          "Leider ist sie zu klein ثمّ Die Jacke passt mir nicht — مشكلة مقاس لا ذوق.",
        errorType: "vocabulary",
        paragraph: 3,
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "لماذا أجابت أميرة بـ Doch؟",
        questionDe: "Warum antwortet Amira mit Doch?",
        options: [
          "Weil die Frage negativ war und die Jacke ihr gefällt.",
          "Weil sie die Jacke nicht mag.",
          "Weil sie kein Geld hat.",
          "Weil Lena die Jacke kauft.",
        ],
        correctIndex: 0,
        explanation:
          "في هذا السياق يرفض Doch النفي في السؤال ويؤكد أن السترة تعجب أميرة؛ لا نعمّم هذا التمييز على كل سؤال منفي أو على كل استعمال لـja.",
        errorType: "grammar",
        paragraph: 4,
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "كم استلمت أميرة عند الصندوق؟",
        questionDe: "Wie viel Geld bekommt Amira an der Kasse zurück?",
        options: ["Fünf Euro", "Fünfzig Euro", "Vierzig Euro", "Nichts"],
        correctIndex: 0,
        explanation: "bekommt fünf Euro zurück — دفعت خمسين وثمن المعطف 45.",
        errorType: "vocabulary",
        paragraph: 6,
      },
      {
        id: "rq5",
        type: "multiple-choice",
        instructionAr: "أيّ فعل استعملته أميرة للحديث عن المقاس؟",
        questionDe: "Welches Verb benutzt Amira für die Größe?",
        options: ["passen", "gefallen", "stehen", "tragen"],
        correctIndex: 0,
        explanation:
          "Die Jacke passt mir nicht — passen للمقاس، وgefallen للذوق، وstehen للّياقة.",
        errorType: "vocabulary",
        paragraph: 3,
      },
    ],
    redemittel: [
      {
        de: "Wie findest du …? / Wie gefällt Ihnen …?",
        ar: "ما رأيك في …؟ / كيف يعجبك …؟",
      },
      {
        de: "Das gefällt mir (nicht).",
        ar: "هذا يعجبني / لا يعجبني.",
      },
      {
        de: "Es passt mir nicht. Haben Sie Größe …?",
        ar: "لا يناسب مقاسي. هل عندكم مقاس …؟",
      },
      {
        de: "Welche Größe haben Sie?",
        ar: "ما مقاسك؟ (سؤال البائع بأدب)",
      },
      {
        de: "Das ist zu teuer.",
        ar: "هذا غالٍ جداً.",
      },
      {
        de: "Ich nehme diesen Mantel.",
        ar: "آخذ هذا المعطف.",
      },
      {
        de: "Kann ich das anprobieren?",
        ar: "هل يمكنني تجريب هذا؟",
      },
      {
        de: "Doch, … (auf eine negative Frage)",
        ar: "بلى، … (جواباً على سؤال منفيّ)",
      },
    ],
    discussionAr:
      "لو كنتَ مكان أميرة، اكتب أو جرّب أن تقول جملتين: الأولى تعبّر عن الإعجاب بـgefallen، والثانية عن المقاس بـpassen أو السعر. هذا السؤال مفتوح للتدريب ولا يُسجَّل دليلاً على أداء شفهي أو نطق.",
  };


export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "في متجر الملابس",
        lines: [
          {
            speaker: "Verkäuferin",
            de: "Guten Tag! Kann ich Ihnen helfen?",
            ar: "طاب يومك! هل أستطيع مساعدتك؟",
          },
          {
            speaker: "Mona",
            de: "Ja, ich suche eine Jacke.",
            ar: "نعم، أبحث عن سترة.",
          },
          {
            speaker: "Verkäuferin",
            de: "Welche Farbe möchten Sie?",
            ar: "أي لون تريدين؟",
          },
          {
            speaker: "Mona",
            de: "Blau, bitte.",
            ar: "باللون الأزرق، من فضلك.",
          },
          {
            speaker: "Verkäuferin",
            de: "Hier ist eine Jacke in Blau. Wie finden Sie sie?",
            ar: "هذه سترة باللون الأزرق. ما رأيك بها؟",
          },
          {
            speaker: "Mona",
            de: "Ich finde sie sehr schön! Was kostet sie?",
            ar: "أجدها جميلة جداً! بكم؟",
          },
          {
            speaker: "Verkäuferin",
            de: "Neununddreißig Euro.",
            ar: "تسعة وثلاثون يورو.",
          },
        ],
      },
      {
        id: "l2",
        title: "وصف ما يرتديه الأصدقاء",
        lines: [
          {
            speaker: "Karim",
            de: "Schau mal! Ich habe ein Hemd.",
            ar: "انظر! لدي قميص.",
          },
          {
            speaker: "Anna",
            de: "Oh, sehr schön! Es ist rot, oder?",
            ar: "أوه، جميل جداً! إنه أحمر، صحيح؟",
          },
          {
            speaker: "Karim",
            de: "Ja, Rot ist meine Lieblingsfarbe.",
            ar: "نعم، الأحمر لوني المفضل.",
          },
          {
            speaker: "Anna",
            de: "Und ich trage heute ein Kleid. Das Kleid ist blau.",
            ar: "وأنا أرتدي اليوم فستاناً. الفستان أزرق.",
          },
          {
            speaker: "Karim",
            de: "Das Kleid finde ich sehr elegant!",
            ar: "أجد الفستان أنيقاً جداً!",
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
        questionDe: "Was sucht Mona?",
        questionAr: "ماذا تبحث منى؟",
        options: [
          "eine Jacke in Blau",
          "ein Hemd",
          "ein Kleid",
          "Schuhe",
        ],
        correctIndex: 0,
        explanation: "أجابت Mona: Blau, bitte، ثم عرضت البائعة eine Jacke in Blau.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet die Jacke?",
        questionAr: "بكم السترة؟",
        options: ["39 Euro", "30 Euro", "33 Euro", "90 Euro"],
        correctIndex: 0,
        explanation: "قالت البائعة: Neununddreißig Euro = 39.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was trägt Anna?",
        questionAr: "ماذا ترتدي آنا؟",
        options: [
          "ein Kleid",
          "ein Hemd",
          "eine Jacke",
          "eine Mütze",
        ],
        correctIndex: 0,
        explanation: "قالت آنا: Ich trage heute ein Kleid. Das Kleid ist blau.",
        errorType: "vocabulary",
      },
    ],
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "نطق الألوان والملابس: ei، au، ü، sch وطول الصوت",
    items: [
      { de: "weiß", ar: "أبيض", note: "تقريباً /vaɪ̯s/: ei مثل /aɪ̯/، وß صوت /s/ واحد، لا سّ مشددة؛ ڤايس تقريب كتابي." },
      { de: "blau", ar: "أزرق", note: "au يقترب من /aʊ̯/؛ «بلاو» تقريب كتابي للصوت." },
      { de: "grün", ar: "أخضر", note: "ü هو /yː/: اجعل اللسان قريباً من وضع /i/ مع تدوير الشفتين كما في /u/؛ لا يطابق ياءً عربية تماماً." },
      { de: "gelb", ar: "أصفر", note: "g في البداية /g/ (گ)، لا غ؛ e قصيرة، وb في آخر الكلمة تُنطق قريباً من p." },
      { de: "schwarz", ar: "أسود", note: "sch = /ʃ/ (ش)، w = /v/ (ڤ)، وz = /t͡s/؛ «شڤارتس» تقريب كتابي." },
      { de: "die Schuhe", ar: "الأحذية", note: "Schuh: /ʃuː/؛ h لا يُنطق ويشير هنا إلى طول u، وe الأخيرة في Schuhe صوت ضعيف /ə/." },
    ],
    tip: "تدرّب على فروق واضحة: ei في weiß، au في blau، ü في grün، وsch/w/z في schwarz. التقريب العربي غير مطابق للصوت؛ استمع إلى التسجيل ولا تعتمد عليه وحده.",
    shadowing: [
      {
        de: "Das Hemd ist rot.",
        ar: "القميص أحمر.",
        tip: "rot = /roːt/: o طويلة، لا قصيرة.",
      },
      {
        de: "Meine Jacke ist blau.",
        ar: "سترتي زرقاء.",
        tip: "blau = بلاو (au = آو)",
      },
      {
        de: "Wie findest du das Kleid?",
        ar: "ما رأيك في الفستان؟",
        tip: "Kleid = كلايت (ei = آي)",
      },
      {
        de: "Die Schuhe sind schwarz.",
        ar: "الأحذية سوداء.",
        tip: "schwarz = /ʃvaʁt͡s/؛ sch=/ʃ/، w=/v/، z=/t͡s/.",
      },
    ],
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "ترجم إلى الألمانية بجملتين كاملتين:",
      prompt: "أرتدي سترة. السترة زرقاء.",
      acceptedAnswers: [
        "Ich trage eine Jacke. Die Jacke ist blau.",
        "Ich trage eine Jacke. Sie ist blau.",
      ],
      sampleAnswer: "Ich trage eine Jacke. Die Jacke ist blau.",
      explanation:
        "اكتب جملة عن اللباس بـIch trage، ثم جملة خبرية عن اللون بـsein. الصفة الخبرية بعد sein تبقى بلا نهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالألوان الصحيحة (rot/blau/grün):",
      template:
        "Der Himmel ist ___ (أزرق). Das Gras ist ___ (أخضر). Blut ist ___ (أحمر).",
      blanks: [
        { correct: "blau", options: ["blau", "grün", "rot"] },
        { correct: "grün", options: ["blau", "grün", "rot"] },
        { correct: "rot", options: ["blau", "grün", "rot"] },
      ],
      explanation: "السماء زرقاء (blau)، العشب أخضر (grün)، الدم أحمر (rot).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich finde das Kleid sehr schön.",
      explanation: "أجد الفستان جميلاً جداً — Ich finde + الاسم + صفة الرأي.",
      errorType: "spelling",
    },
  ];
