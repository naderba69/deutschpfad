/**
 * a1-11 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a1-11.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      "id": "m1",
      "type": "multiple-choice",
      "instructionAr": "اختر صيغة الوجهة من دون تأكيد الدخول إلى المبنى:",
      "questionDe": "Sie geht ___ Apotheke und wartet draußen vor der Tür.",
      "options": [
        "zur",
        "zum",
        "nach",
        "ins"
      ],
      "correctIndex": 0,
      "explanation": "المقصود التوجه إلى محيط الصيدلية والبقاء خارجها؛ لذلك نختار zur Apotheke. لو كان المقصود الدخول إلى الداخل، أمكن in die Apotheke.",
      "errorType": "preposition"
    },
    {
      "id": "m2",
      "type": "multiple-choice",
      "instructionAr": "اختر معنى الاتجاه المذكور في الترجمة العربية:",
      "questionDe": "Gehen Sie ___ und dann links!",
      "questionAr": "اتجه مباشرةً ثم يساراً!",
      "options": [
        "geradeaus",
        "rechts",
        "zurück",
        "an der Ampel"
      ],
      "correctIndex": 0,
      "explanation": "الترجمة المعطاة تبدأ بـ«مباشرةً»، ومقابلها geradeaus.",
      "errorType": "vocabulary"
    },
    {
      "id": "m3",
      "type": "word-ordering",
      "instructionAr": "رتّب الكلمات لتكوين سؤال كامل:",
      "tokens": [
        "Bahnhof",
        "der",
        "ist",
        "Wo",
        "?"
      ],
      "correctSentence": "Wo ist der Bahnhof?",
      "explanation": "في السؤال يأتي Wo أولاً، والفعل المصرف في موضعه الثاني، ثم الاسم بأداته.",
      "errorType": "word-order"
    },
    {
      "id": "m4",
      "type": "error-correction",
      "instructionAr": "المقصود أن المدينة وجهة، لا مكان التمشّي داخلها:",
      "wrongSentence": "Ich gehe ins Stadt. (المدينة هي وجهتي)",
      "wrongWord": "ins Stadt",
      "correctWord": "in die Stadt",
      "options": [
        "in die Stadt",
        "in der Stadt",
        "zum Stadt",
        "nach Stadt"
      ],
      "explanation": "Stadt مؤنث، وins اختصار in das؛ لذلك الصيغة هنا in die Stadt. إذا كان المعنى الحركة داخل المدينة، نقول in der Stadt.",
      "errorType": "preposition"
    },
    {
      "id": "m5",
      "type": "fill-blank",
      "instructionAr": "أكمل وفق القرائن بين الوجهة دون دخولها والدخول إلى الداخل:",
      "template": "Wir fahren ___ Tunis. (Tunis ist unser Ziel.) Er geht ___ Bank und bleibt draußen davor. Sie geht ___ Kino hinein.",
      "blanks": [
        {
          "correct": "nach",
          "options": [
            "nach",
            "zur",
            "ins"
          ]
        },
        {
          "correct": "zur",
          "options": [
            "nach",
            "zur",
            "ins"
          ]
        },
        {
          "correct": "ins",
          "options": [
            "nach",
            "zur",
            "ins"
          ]
        }
      ],
      "explanation": "Tunis وجهة بلا أداة، والبنك وجهة مع البقاء خارجه، أما السينما فالسياق يقول صراحةً hinein أي إلى الداخل.",
      "errorType": "preposition"
    }
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      "id": "fc1",
      "de": "die Stadt",
      "ar": "المدينة",
      "example": "Die Stadt ist groß.",
      "exampleAr": "المدينة كبيرة.",
      "level": "A1"
    },
    {
      "id": "fc2",
      "de": "der Bahnhof",
      "ar": "محطة القطار",
      "example": "Der Bahnhof ist weit.",
      "exampleAr": "محطة القطار بعيدة.",
      "level": "A1"
    },
    {
      "id": "fc3",
      "de": "die Apotheke",
      "ar": "الصيدلية",
      "example": "Wo ist die Apotheke?",
      "exampleAr": "أين الصيدلية؟",
      "level": "A1"
    },
    {
      "id": "fc4",
      "de": "geradeaus / rechts / links",
      "ar": "مباشرةً / يمين / يسار",
      "example": "Gehen Sie geradeaus!",
      "exampleAr": "اتجه مباشرةً!",
      "level": "A1"
    },
    {
      "id": "fc5",
      "de": "nach / zu / in",
      "ar": "تعبيرات وجهة تختلف بحسب السياق",
      "example": "nach Deutschland, zum Bahnhof, ins Kino",
      "exampleAr": "إلى ألمانيا، إلى المحطة، إلى داخل السينما",
      "level": "A1"
    },
    {
      "id": "fc6",
      "de": "wohin?",
      "ar": "إلى أين؟",
      "example": "Wohin gehst du?",
      "exampleAr": "إلى أين تذهب؟",
      "level": "A1"
    },
    {
      "id": "fc7",
      "de": "die Ampel",
      "ar": "إشارة المرور",
      "example": "An der Ampel gehen Sie links.",
      "exampleAr": "عند إشارة المرور اتجه يساراً.",
      "level": "A1"
    },
    {
      "id": "fc8",
      "de": "um die Ecke",
      "ar": "حول الزاوية/قريباً بعد المنعطف",
      "example": "Die Post ist um die Ecke.",
      "exampleAr": "مكتب البريد حول الزاوية.",
      "level": "A1"
    },
    {
      "id": "fc9",
      "de": "mit dem Bus / mit der Bahn",
      "ar": "بالحافلة / بالقطار",
      "example": "Ich fahre mit dem Bus zur Arbeit.",
      "exampleAr": "أذهب إلى العمل بالحافلة.",
      "level": "A1"
    },
    {
      "id": "fc10",
      "de": "zu Fuß gehen",
      "ar": "يمشي/يذهب مشياً",
      "example": "Zum Markt gehe ich zu Fuß.",
      "exampleAr": "أذهب إلى السوق مشياً.",
      "level": "A1"
    },
    {
      "id": "fc11",
      "de": "ihn (Akkusativ von er)",
      "ar": "ضمير مفعول يعود إلى اسم مذكر ألماني",
      "example": "Der Bus? Ich nehme ihn.",
      "exampleAr": "الحافلة؟ أستقلّه.",
      "level": "A1"
    },
    {
      "id": "fc12",
      "de": "mich / dich",
      "ar": "ضميرا مفعول: إياي / إياك",
      "example": "Können Sie mich hören?",
      "exampleAr": "هل يمكنك سماعي؟",
      "level": "A1"
    },
    {
      "id": "fc13",
      "de": "die Sprachschule",
      "ar": "مدرسة اللغة",
      "example": "Die Sprachschule liegt gegenüber der Apotheke.",
      "exampleAr": "تقع مدرسة اللغة مقابل الصيدلية.",
      "level": "A1"
    },
    {
      "id": "fc14",
      "de": "die Haltestelle",
      "ar": "موقف/محطة وسيلة نقل",
      "example": "Wo ist die Haltestelle?",
      "exampleAr": "أين موقف وسيلة النقل؟",
      "level": "A1"
    },
    {
      "id": "fc15",
      "de": "umsteigen",
      "ar": "يبدّل وسيلة النقل",
      "example": "Ich steige in Köln um.",
      "exampleAr": "أبدّل وسيلة النقل في كولونيا.",
      "level": "A1"
    },
    {
      "id": "fc16",
      "de": "gegenüber + Dativ",
      "ar": "مقابل + الاسم بصيغة Dativ",
      "example": "Die Sprachschule liegt gegenüber der Apotheke.",
      "exampleAr": "تقع مدرسة اللغة مقابل الصيدلية.",
      "level": "A1"
    },
    {
      "id": "fc17",
      "de": "Wie komme ich zum …?",
      "ar": "كيف أصل إلى …؟",
      "example": "Entschuldigung, wie komme ich zum Bahnhof?",
      "exampleAr": "عذراً، كيف أصل إلى محطة القطار؟",
      "level": "A1"
    },
    {
      "id": "fc18",
      "de": "Können Sie das bitte wiederholen?",
      "ar": "هل يمكنك إعادة ذلك من فضلك؟",
      "example": "Ich verstehe nicht. Können Sie das bitte wiederholen?",
      "exampleAr": "لا أفهم. هل يمكنك إعادة ذلك من فضلك؟",
      "level": "A1"
    },
    {
      "id": "fc19",
      "de": "die Fahrkarte",
      "ar": "تذكرة السفر",
      "example": "Eine Fahrkarte nach Berlin, bitte.",
      "exampleAr": "تذكرة إلى برلين من فضلك.",
      "level": "A1"
    },
    {
      "id": "fc20",
      "de": "kennen",
      "ar": "يعرف (شخصاً أو مكاناً)",
      "example": "Ich kenne die Stadt noch nicht.",
      "exampleAr": "لا أعرف المدينة بعد.",
      "level": "A1"
    },
    {
      "id": "fc21",
      "de": "zuerst",
      "ar": "أولاً",
      "example": "Zuerst gehen Sie geradeaus.",
      "exampleAr": "أولاً اتجه مباشرةً.",
      "level": "A1"
    },
    {
      "id": "fc22",
      "de": "weit",
      "ar": "بعيد (في هذا السياق)",
      "example": "Ist der Bahnhof weit?",
      "exampleAr": "هل محطة القطار بعيدة؟",
      "level": "A1"
    },
    {
      "id": "fc23",
      "de": "die Kirche",
      "ar": "الكنيسة",
      "example": "Gehen Sie an der Kirche vorbei.",
      "exampleAr": "مرّ بجانب الكنيسة.",
      "level": "A1"
    },
    {
      "id": "fc24",
      "de": "der Hund",
      "ar": "الكلب",
      "example": "Eine Frau mit einem Hund hilft mir.",
      "exampleAr": "امرأة مع كلب تساعدني.",
      "level": "A1"
    },
    {
      "id": "fc25",
      "de": "Entschuldigung!",
      "ar": "عذراً! / أعتذر! بحسب السياق",
      "example": "Entschuldigung, wo ist der Bahnhof?",
      "exampleAr": "عذراً، أين محطة القطار؟",
      "level": "A1"
    }
  ];


  /* الوساطة والتفاعل — أنشطة مقترحة لا أدلة إتقان تلقائية */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      "id": "med-a1-11-1",
      "type": "simplify-announcement",
      "titleAr": "انقل إعلاناً تدريبياً افتراضياً عن المترو إلى العربية",
      "sourceDe": "Die U-Bahnlinie 2 fährt vom Bahnhof direkt zum Zentrum. Die Fahrt dauert 10 Minuten. Tickets gibt es am Automaten.",
      "taskAr": "لخّص الإعلان لشخص يسأل بالعربية: ما الخط؟ من أين إلى أين؟ ما مدة الرحلة المذكورة؟ وأين يشتري التذكرة؟",
      "modelAnswerAr": "«خط المترو 2 ينطلق من المحطة مباشرة إلى المركز. تستغرق الرحلة 10 دقائق. تُشترى التذاكر من الآلة.»",
      "keyPointsAr": [
        "ذكر خط المترو (2)",
        "ذكر نقطة الانطلاق: المحطة",
        "نقل الوجهة والمدة: المركز، 10 دقائق",
        "أشار إلى آلة بيع التذاكر"
      ]
    }
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      "id": "int-a1-11-1",
      "scenarioAr": "سائح يسأل عن الطريق في مدينة غير محددة في المثال.",
      "scenarioDe": "Ein Tourist fragt dich nach dem Weg.",
      "strategyAr": "اختر رداً مفيداً واستعمل geradeaus أو links أو rechts عند الحاجة. المحاكاة اختيارية ونصية؛ لا تسجل كلاماً منطوقاً ولا تثبت إتقاناً.",
      "rounds": [
        {
          "speakerDe": "Entschuldigung, wo ist der Bahnhof?",
          "speakerAr": "عذراً، أين محطة القطار؟",
          "options": [
            {
              "de": "Gehen Sie geradeaus. An der Ampel dann links.",
              "ar": "اتجه مباشرةً، ثم يساراً عند الإشارة.",
              "best": true,
              "replyDe": "Danke! Und wie weit ist es?",
              "replyAr": "شكراً! وكم يبعد؟"
            },
            {
              "de": "Entschuldigung, ich kenne den Weg leider nicht.",
              "ar": "عذراً، لا أعرف الطريق للأسف.",
              "best": false,
              "replyDe": "Kein Problem, ich frage weiter.",
              "replyAr": "لا مشكلة، سأواصل السؤال."
            }
          ]
        },
        {
          "speakerDe": "Wie weit ist es bis zum Bahnhof?",
          "speakerAr": "كم تبعد محطة القطار؟",
          "options": [
            {
              "de": "Ungefähr zehn Minuten zu Fuß.",
              "ar": "نحو عشر دقائق مشياً.",
              "best": true,
              "replyDe": "Perfekt, vielen Dank!",
              "replyAr": "ممتاز، شكراً جزيلاً!"
            },
            {
              "de": "Gehen Sie geradeaus.",
              "ar": "اتجه مباشرةً.",
              "best": false,
              "replyDe": "Danke, aber ich frage nach der Entfernung.",
              "replyAr": "شكراً، لكنني أسأل عن المسافة."
            }
          ]
        }
      ]
    }
  ];
