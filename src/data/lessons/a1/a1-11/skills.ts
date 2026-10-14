/**
 * a1-11 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a1-11.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    "id": "read-a1-11",
    "titleDe": "Der Weg zur Sprachschule",
    "titleAr": "الطريق إلى مدرسة اللغة",
    "textType": "erzaehlung",
    "paragraphs": [
      "Yasmin ist neu in München. Heute besucht sie zum ersten Mal einen Deutschkurs in einer Sprachschule. Der Kurs beginnt um neun Uhr, aber sie kennt den Weg nicht. Sie fährt zuerst mit der U-Bahn bis zum Hauptbahnhof.",
      "Am Hauptbahnhof steigt sie aus. Vor dem Bahnhof sieht sie eine Frau mit einem Hund. „Entschuldigung, wie komme ich zur Sprachschule?“ — „Die Sprachschule kenne ich gut. Sie ist nicht weit von hier.“",
      "„Gehen Sie hier geradeaus bis zur Ampel. An der Ampel gehen Sie links. Dann sehen Sie eine Kirche. Gehen Sie an ihr vorbei und nehmen Sie die erste Straße rechts.“",
      "Yasmin versteht nicht alles. Sie fragt: „Können Sie das bitte wiederholen? Ich bin neu hier.“ — „Natürlich! Also: geradeaus, an der Ampel links, dann die erste Straße rechts. Die Sprachschule liegt gegenüber der Apotheke. Sie können sie nicht verpassen.“",
      "„Wie lange dauert der Weg zu Fuß?“ — „Ungefähr zehn Minuten. Sie können auch mit dem Bus fahren, aber zu Fuß ist es heute schneller. Der Bus kommt erst in einer Viertelstunde.“",
      "„Vielen Dank!“ — „Nichts zu danken. Viel Erfolg im Kurs!“ Yasmin geht zu Fuß. Nach zehn Minuten kommt sie an. Auf dem Schild steht: „Sprachschule München“. Es ist erst fünf vor neun."
    ],
    "paragraphsAr": [
      "ياسمين جديدة في ميونخ. اليوم تزور للمرة الأولى دورة ألمانية في مدرسة لغة. تبدأ الدورة في التاسعة، لكنها لا تعرف الطريق. تستقل أولاً المترو حتى المحطة المركزية.",
      "تنزل في المحطة المركزية. أمام المحطة ترى امرأةً مع كلب. «عذراً، كيف أصل إلى مدرسة اللغة؟» — «أعرف المدرسة جيداً. إنها ليست بعيدة من هنا.»",
      "«اتجهي من هنا مباشرةً حتى إشارة المرور. عند الإشارة اتجهي يساراً. ثم سترين كنيسة. مرّي بجانبها وخذي أول شارع يميناً.»",
      "لا تفهم ياسمين كل شيء. تسأل: «هل يمكنك إعادة ذلك من فضلك؟ أنا جديدة هنا.» — «بالطبع! إذاً: مباشرةً، عند الإشارة يساراً، ثم أول شارع يميناً. تقع مدرسة اللغة مقابل الصيدلية. لن يصعب عليك العثور عليها.»",
      "«كم يستغرق الطريق مشياً؟» — «نحو عشر دقائق. يمكنك أيضاً الذهاب بالحافلة، لكن المشي أسرع اليوم. لن تأتي الحافلة إلا بعد ربع ساعة.»",
      "«شكراً جزيلاً!» — «لا شكر على واجب. بالتوفيق في الدورة!» تتابع ياسمين سيرها على قدميها. تصل بعد عشر دقائق. وعلى اللافتة مكتوب: «مدرسة لغة ميونخ». ما زال الوقت الخامسة إلا خمس دقائق."
    ],
    "glossary": [
      {
        "de": "der Hauptbahnhof",
        "ar": "المحطة المركزية",
        "noteAr": "مركّب من Haupt (رئيسي) وBahnhof."
      },
      {
        "de": "steigt … aus (aussteigen)",
        "ar": "تنزل من وسيلة النقل",
        "noteAr": "فعل منفصل؛ في الجملة الرئيسية: Sie steigt aus."
      },
      {
        "de": "die Ampel",
        "ar": "إشارة المرور",
        "noteAr": "an der Ampel = عند إشارة المرور."
      },
      {
        "de": "geradeaus",
        "ar": "مباشرةً إلى الأمام",
        "noteAr": "ظرف اتجاه لا يتغير هنا."
      },
      {
        "de": "an ihr vorbei",
        "ar": "بجانبها/متجاوزاً إياها",
        "noteAr": "يعود الضمير إلى Kirche؛ والتركيب an … vorbei يأتي في هذا النمط مع Dativ."
      },
      {
        "de": "die erste Straße rechts",
        "ar": "أول شارع يميناً",
        "noteAr": "ترتيبٌ واتجاه في تعليمات الطريق."
      },
      {
        "de": "gegenüber",
        "ar": "مقابل",
        "noteAr": "في المثال: gegenüber der Apotheke؛ ويأتي Dativ بعد gegenüber."
      },
      {
        "de": "wiederholen",
        "ar": "يعيد، يكرر",
        "noteAr": "Können Sie das bitte wiederholen? = هل يمكنك إعادة ذلك؟"
      },
      {
        "de": "zu Fuß",
        "ar": "مشياً على الأقدام",
        "noteAr": "تعبير شائع للمشي: zu Fuß gehen."
      },
      {
        "de": "die Viertelstunde",
        "ar": "ربع ساعة",
        "noteAr": "Viertel (ربع) + Stunde (ساعة)."
      },
      {
        "de": "Nichts zu danken.",
        "ar": "لا شكر على واجب.",
        "noteAr": "رد ممكن على الشكر، وليس الرد الوحيد."
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب نص القراءة:",
        "questionDe": "Womit fährt Yasmin zum Hauptbahnhof?",
        "errorType": "vocabulary",
        "options": [
          "Mit der U-Bahn",
          "Mit dem Bus",
          "Mit dem Auto",
          "Zu Fuß"
        ],
        "correctIndex": 0,
        "paragraph": 0,
        "explanation": "تذكر الفقرة الأولى وسيلة واحدة تستقلها ياسمين إلى المحطة المركزية؛ أما الحافلة فتظهر لاحقاً كخيار آخر."
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "instructionAr": "استخرج أول اتجاه عند إشارة المرور:",
        "questionDe": "Welche Richtung nennt die Frau an der Ampel zuerst?",
        "errorType": "vocabulary",
        "options": [
          "links",
          "rechts",
          "geradeaus",
          "zurück"
        ],
        "correctIndex": 0,
        "paragraph": 2,
        "explanation": "بعد الوصول إلى الإشارة، تطلب المرأة منها الاتجاه يساراً؛ ثم يأتي شارع يميناً بعد الكنيسة."
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب نص القراءة:",
        "questionDe": "Wo liegt die Sprachschule?",
        "errorType": "preposition",
        "options": [
          "Gegenüber der Apotheke",
          "Neben dem Bahnhof",
          "In der Kirche",
          "Hinter der Ampel"
        ],
        "correctIndex": 0,
        "paragraph": 3,
        "explanation": "تحدد المرأة موقع المدرسة بالنسبة إلى الصيدلية؛ الصياغة هنا gegenüber + Dativ."
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "instructionAr": "اختر السبب الذي يجمع قرينتي النص:",
        "questionDe": "Warum wartet Yasmin nicht auf den Bus?",
        "errorType": "vocabulary",
        "options": [
          "Zu Fuß kommt sie eher an; der Bus fährt erst später.",
          "Sie hat kein Geld für ein Ticket.",
          "Der Bus fährt nicht zur Sprachschule.",
          "Sie mag den Bus nicht."
        ],
        "correctIndex": 0,
        "paragraph": 4,
        "explanation": "المشي يستغرق نحو عشر دقائق، والحافلة لن تصل إلا بعد ربع ساعة؛ لذلك تتوقع أن تصل مشياً قبلها."
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "instructionAr": "ما الرد الذي تقوله المرأة في هذا الحوار بعد الشكر؟",
        "questionDe": "Wie antwortet die Frau auf den Dank?",
        "errorType": "vocabulary",
        "options": [
          "Nichts zu danken.",
          "Auf Wiedersehen.",
          "Eine Fahrkarte, bitte.",
          "Wo ist der Bahnhof?"
        ],
        "correctIndex": 0,
        "paragraph": 5,
        "explanation": "في هذا الحوار تحديداً تختار المرأة Nichts zu danken؛ توجد ردود أخرى ممكنة في مواقف أخرى."
      }
    ],
    "redemittel": [
      {
        "de": "Entschuldigung, wie komme ich zum / zur …?",
        "ar": "عذراً، كيف أصل إلى …؟"
      },
      {
        "de": "Gehen Sie geradeaus bis zur Ampel.",
        "ar": "اتجه مباشرةً حتى إشارة المرور."
      },
      {
        "de": "An der Ampel gehen Sie links / rechts.",
        "ar": "عند الإشارة اتجه يساراً / يميناً."
      },
      {
        "de": "Nehmen Sie die erste Straße rechts.",
        "ar": "خذ أول شارع يميناً."
      },
      {
        "de": "Die Sprachschule liegt gegenüber der Apotheke.",
        "ar": "تقع مدرسة اللغة مقابل الصيدلية."
      },
      {
        "de": "Können Sie das bitte wiederholen?",
        "ar": "هل يمكنك إعادة ذلك من فضلك؟"
      },
      {
        "de": "Wie lange dauert das zu Fuß?",
        "ar": "كم يستغرق ذلك مشياً؟"
      },
      {
        "de": "Vielen Dank! — Nichts zu danken.",
        "ar": "شكراً جزيلاً! — لا شكر على واجب."
      }
    ],
    "discussionAr": "ناقش أو اكتب وصفاً قصيراً لطريق تعرفه: ما المعلم الذي تراه أولاً، وأين تنعطف، وهل تذهب مشياً أم بوسيلة نقل؟ هذا سؤال مفتوح للممارسة، ولا يسجل وحده دليلاً على كلام منطوق أو إتقان عام."
  };


export const listening: NonNullable<Lesson["listening"]> = {
    "items": [
      {
        "id": "l1",
        "title": "السؤال عن محطة القطار",
        "lines": [
          {
            "speaker": "Sami",
            "de": "Entschuldigung, wo ist der Bahnhof?",
            "ar": "عذراً، أين محطة القطار؟"
          },
          {
            "speaker": "Passantin",
            "de": "Gehen Sie geradeaus und dann links. Der Bahnhof ist neben dem Park.",
            "ar": "اتجه مباشرةً ثم يساراً. تقع محطة القطار بجانب الحديقة."
          },
          {
            "speaker": "Sami",
            "de": "Ist der Bahnhof weit?",
            "ar": "هل محطة القطار بعيدة؟"
          },
          {
            "speaker": "Passantin",
            "de": "Nein, nur fünf Minuten zu Fuß.",
            "ar": "لا، خمس دقائق فقط مشياً."
          },
          {
            "speaker": "Sami",
            "de": "Vielen Dank!",
            "ar": "شكراً جزيلاً!"
          }
        ]
      },
      {
        "id": "l2",
        "title": "الوجهة والموعد",
        "lines": [
          {
            "speaker": "Mona",
            "de": "Wohin gehst du?",
            "ar": "إلى أين تذهب؟"
          },
          {
            "speaker": "Karim",
            "de": "Ich gehe in die Stadt. Ich kaufe ein Geschenk.",
            "ar": "أذهب إلى المدينة. أشتري هدية."
          },
          {
            "speaker": "Mona",
            "de": "Und ich fahre nach Hause.",
            "ar": "وأنا أتجه إلى البيت."
          },
          {
            "speaker": "Karim",
            "de": "Bis später! Wir sehen uns im Kino um acht.",
            "ar": "إلى اللقاء! نلتقي في السينما عند الثامنة."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "q1",
        "itemId": "l1",
        "type": "multiple-choice",
        "instructionAr": "استمع إلى الحوار الأول ثم اختر الإجابة:",
        "questionDe": "Wo liegt der Bahnhof?",
        "questionAr": "أين تقع محطة القطار؟",
        "options": [
          "neben dem Park",
          "neben der Bank",
          "um die Ecke",
          "in der Stadtmitte"
        ],
        "correctIndex": 0,
        "explanation": "في الحوار يحدد المارّ موقع المحطة بجانب الحديقة.",
        "errorType": "preposition"
      },
      {
        "id": "q2",
        "itemId": "l2",
        "type": "multiple-choice",
        "instructionAr": "استمع إلى الحوار الثاني ثم اختر الإجابة:",
        "questionDe": "Wohin geht Karim?",
        "questionAr": "إلى أين يذهب كريم؟",
        "options": [
          "in die Stadt",
          "nach Hause",
          "zum Bahnhof",
          "zur Apotheke"
        ],
        "correctIndex": 0,
        "explanation": "يقول كريم إنه ذاهب إلى المدينة لشراء هدية.",
        "errorType": "preposition"
      },
      {
        "id": "q3",
        "itemId": "l2",
        "type": "multiple-choice",
        "instructionAr": "استمع إلى الحوار الثاني ثم اختر الإجابة:",
        "questionDe": "Wann sehen sie sich im Kino?",
        "questionAr": "متى سيلتقيان في السينما؟",
        "options": [
          "um acht Uhr",
          "um neun Uhr",
          "am Abend um zehn",
          "um sieben Uhr"
        ],
        "correctIndex": 0,
        "explanation": "يذكر كريم الموعد عند الثامنة؛ لا يحدد الحوار تاريخاً أو مدة أخرى.",
        "errorType": "vocabulary"
      }
    ]
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    "id": "p1",
    "title": "نطق كلمات المدينة: h وst وau وsch وth",
    "items": [
      {
        "de": "der Bahnhof",
        "ar": "محطة القطار",
        "note": "في Bahn يطيل h صوت a ولا يُنطق بذاته؛ أما بداية Hof ففيها h مسموعة. تختلف التفاصيل الصوتية باختلاف المتكلم."
      },
      {
        "de": "die Straße",
        "ar": "الشارع",
        "note": "في النطق الألماني المعياري يبدأ st في هذه الكلمة بصوت قريب من /ʃt/، وß تمثل صوت /s/؛ a طويلة هنا."
      },
      {
        "de": "geradeaus",
        "ar": "مباشرةً إلى الأمام",
        "note": "g هنا صوت /g/، وau تقارب /aʊ/؛ التمثيل العربي تقريب مساعد لا نقل صوتي دقيق."
      },
      {
        "de": "die Apotheke",
        "ar": "الصيدلية",
        "note": "في هذه الكلمة الألمانية تُنطق th مثل t، لا مثل th الإنجليزية في think."
      },
      {
        "de": "das Krankenhaus",
        "ar": "المستشفى",
        "note": "في Kranken يمثّل nk صوتاً أنفياً يليه k؛ وh في بداية Haus مسموعة لأنها تبدأ المكوّن الثاني."
      },
      {
        "de": "die Ampel",
        "ar": "إشارة المرور",
        "note": "تكتب p مرة واحدة؛ لاحظ تجمع mp وصوت a القصير في المقطع الأول."
      },
      {
        "de": "die Entschuldigung",
        "ar": "الاعتذار/عذراً",
        "note": "sch يقارب /ʃ/، وتنتهي -ung بصوت أنفي /ŋ/ من دون g مستقلة في النهاية."
      }
    ],
    "tip": "الكتابة العربية تقريب للنطق وليست أبجدية صوتية IPA؛ استمع إلى المثال، وراعِ اختلاف الأصوات بين المتكلمين.",
    "shadowing": [
      {
        "de": "Entschuldigung, wo ist die Apotheke?",
        "ar": "عذراً، أين الصيدلية؟",
        "tip": "انتبه إلى sch في Entschuldigung، وإلى th = t في Apotheke؛ الشرح العربي تقريبي."
      },
      {
        "de": "Gehen Sie geradeaus!",
        "ar": "اتجه مباشرةً!",
        "tip": "g ألمانية صلبة /g/، وau تقارب /aʊ/؛ لا تحوّلها إلى ج عربية."
      },
      {
        "de": "Ich gehe in die Stadt.",
        "ar": "أذهب إلى المدينة.",
        "tip": "st في بداية Stadt يبدأ عادةً بصوت /ʃt/، وa قصيرة قبل dt."
      },
      {
        "de": "Der Bahnhof ist weit.",
        "ar": "محطة القطار بعيدة.",
        "tip": "w الألمانية تقارب /v/، وei تقارب /aɪ/."
      }
    ]
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      "id": "w1",
      "type": "transformation",
      "instructionAr": "اختر إحدى الوجهات المذكورة واكتب الجملة النموذجية كاملة:",
      "prompt": "Wohin gehst du heute? Wähle: die Stadt / der Supermarkt / die Apotheke / Tunis / nach Hause.",
      "caseSensitive": true,
      "acceptedAnswers": [
        "Ich gehe in die Stadt.",
        "Ich gehe zum Supermarkt.",
        "Ich gehe zur Apotheke.",
        "Ich fahre nach Tunis.",
        "Ich gehe nach Hause."
      ],
      "sampleAnswer": "Ich gehe in die Stadt.",
      "explanation": "النماذج تربط الوجهة بالتعبير المتدرّب عليه: in die Stadt، zum Supermarkt، zur Apotheke، nach Tunis، nach Hause. هي إجابات هذه المهمة المحددة وليست قائمة بكل جملة صحيحة ممكنة.",
      "errorType": "preposition"
    },
    {
      "id": "w2",
      "type": "fill-blank",
      "instructionAr": "أكمل بحسب القرائن: ألمانيا هي الوجهة؛ سننتظر خارج المحطة؛ ستبقى عند باب الصيدلية؛ وسيدخل الشخص إلى السينما.",
      "template": "Ich fahre ___ Deutschland. Wir gehen ___ Bahnhof und warten draußen vor dem Eingang. Sie geht ___ Apotheke und bleibt vor der Tür stehen. Er geht ___ Kino hinein.",
      "blanks": [
        {
          "correct": "nach",
          "options": [
            "nach",
            "zum",
            "in"
          ]
        },
        {
          "correct": "zum",
          "options": [
            "nach",
            "zum",
            "in den"
          ]
        },
        {
          "correct": "zur",
          "options": [
            "zur",
            "zum",
            "in die"
          ]
        },
        {
          "correct": "ins",
          "options": [
            "ins",
            "zum",
            "in der"
          ]
        }
      ],
      "explanation": "القرائن تحدد معنى الوجهة: nach Deutschland لبلد اسمه بلا أداة، zum Bahnhof للوصول إلى المحطة دون التركيز على دخولها، zur Apotheke مع الوقوف خارجها، وins Kino hinein للدخول. تتغير حروف الجر عندما تتغير العلاقة المقصودة.",
      "errorType": "preposition"
    },
    {
      "id": "w3",
      "type": "dictation",
      "instructionAr": "استمع واكتب الجملة الألمانية:",
      "audioText": "Die Apotheke ist um die Ecke.",
      "caseSensitive": true,
      "explanation": "um die Ecke تعني حول الزاوية أو قريباً بعدها في وصف الطريق، ولا نترجمها آلياً إلى «خلف الزاوية».",
      "errorType": "spelling"
    }
  ];
