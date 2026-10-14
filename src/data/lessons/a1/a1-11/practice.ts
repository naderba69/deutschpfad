/**
 * a1-11 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a1-11.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      "id": "e1",
      "type": "multiple-choice",
      "instructionAr": "أكمل بمعنى أن ألمانيا هي وجهتك، لا أنك تتحرك داخل البلد:",
      "questionDe": "Ich fahre ___ Deutschland.",
      "options": [
        "nach",
        "zu",
        "in",
        "aus"
      ],
      "correctIndex": 0,
      "explanation": "في هذا المعنى يشيع nach Deutschland لأن اسم البلد هنا بلا أداة. لبعض أسماء البلدان التي تأتي بأداة نمط آخر، مثل in die Schweiz.",
      "errorType": "preposition"
    },
    {
      "id": "e2",
      "type": "multiple-choice",
      "instructionAr": "اختر النمط الذي يذكر الوصول إلى محيط السوبرماركت دون تأكيد الدخول إليه:",
      "questionDe": "Wir gehen ___ Supermarkt.",
      "options": [
        "zum",
        "nach",
        "ins",
        "zur"
      ],
      "correctIndex": 0,
      "explanation": "zum Supermarkt تعبر هنا عن الوجهة دون أن تصرّح بالدخول. وقد تستعمل in den Supermarkt إذا كان المقصود التوجه إلى الداخل.",
      "errorType": "preposition"
    },
    {
      "id": "e3",
      "type": "matching",
      "instructionAr": "صل كل مكان بمعناه:",
      "pairs": [
        {
          "left": "der Bahnhof",
          "right": "محطة القطار"
        },
        {
          "left": "die Apotheke",
          "right": "الصيدلية"
        },
        {
          "left": "das Krankenhaus",
          "right": "المستشفى"
        },
        {
          "left": "die Bank",
          "right": "البنك"
        }
      ],
      "explanation": "طابق أداة الاسم مع المفردة ومعناها؛ الجنس الألماني لا يلزم أن يطابق جنس الترجمة العربية.",
      "errorType": "vocabulary"
    },
    {
      "id": "e4",
      "type": "word-ordering",
      "instructionAr": "رتّب الكلمات لتكوين أمر مهذب واحد:",
      "tokens": [
        "geradeaus",
        "Gehen",
        "Sie",
        "bitte",
        "!"
      ],
      "correctSentence": "Gehen Sie bitte geradeaus!",
      "explanation": "هذا ترتيب طبيعي للأمر الرسمي مع bitte؛ توجد مواقع أخرى لـbitte في سياقات مناسبة، لكن الكلمات المعطاة هنا تكوّن هذا النموذج.",
      "errorType": "word-order"
    },
    {
      "id": "e5",
      "type": "error-correction",
      "instructionAr": "في سياق السفر إلى ألمانيا، اختر تصحيح حرف الوجهة:",
      "wrongSentence": "Ich fahre zu Deutschland.",
      "wrongWord": "zu",
      "correctWord": "nach",
      "options": [
        "nach",
        "in",
        "ins",
        "zum"
      ],
      "explanation": "مع اسم البلد Deutschland الذي يرد هنا بلا أداة، النمط المعتاد للوجهة هو nach Deutschland؛ لا تعمم ذلك على كل أسماء البلدان.",
      "errorType": "preposition"
    },
    {
      "id": "e6",
      "type": "fill-blank",
      "instructionAr": "أكمل بوصف اتجاهات الطريق، ثم استعمل التعبير الذي يعني أن البنك حول الزاوية:",
      "template": "Gehen Sie ___, dann ___, und die Bank ist ___ Ecke.",
      "blanks": [
        {
          "correct": "geradeaus",
          "options": [
            "geradeaus",
            "rechts",
            "links"
          ]
        },
        {
          "correct": "links",
          "options": [
            "geradeaus",
            "rechts",
            "links"
          ]
        },
        {
          "correct": "um die",
          "options": [
            "um die",
            "an die",
            "in die"
          ]
        }
      ],
      "explanation": "geradeaus تعني إلى الأمام، وlinks تعني يساراً، وum die Ecke تعبير متدرّب عليه بمعنى حول الزاوية/قريباً بعدها.",
      "errorType": "vocabulary"
    },
    {
      "id": "e7",
      "type": "transformation",
      "instructionAr": "حوّل العبارة إلى سؤال كامل عن المكان:",
      "prompt": "Die Post. → اسأل: أين مكتب البريد؟",
      "acceptedAnswers": [
        "Wo ist die Post?",
        "Wo ist die Post"
      ],
      "sampleAnswer": "Wo ist die Post?",
      "explanation": "استعمل Wo ist + الاسم بأداته في سؤال كامل. هذا أداء كتابي/ترتيبي ولا يثبت النطق الشفهي.",
      "errorType": "word-order"
    },
    {
      "id": "e8",
      "type": "multiple-choice",
      "instructionAr": "اختر معنى السؤال:",
      "questionDe": "Wohin gehst du?",
      "questionAr": "ما معنى السؤال؟",
      "options": [
        "إلى أين تذهب؟",
        "أين تسكن؟",
        "متى تذهب؟",
        "من أين أنت؟"
      ],
      "correctIndex": 0,
      "explanation": "Wohin? يسأل عن الوجهة أو الاتجاه المقصود في هذا السياق.",
      "errorType": "vocabulary"
    },
    {
      "id": "e9",
      "type": "error-correction",
      "instructionAr": "المقصود الاتجاه إلى البيت الآن؛ اختر التعبير المناسب:",
      "wrongSentence": "Ich gehe zu Hause. (أنا متجه إلى البيت الآن)",
      "wrongWord": "zu Hause",
      "correctWord": "nach Hause",
      "options": [
        "nach Hause",
        "in Hause",
        "zum Haus",
        "aus Hause"
      ],
      "explanation": "في المعنى المقصود نقول Ich gehe nach Hause. أما Ich bin zu Hause فتصف الوجود في البيت.",
      "errorType": "preposition"
    },
    {
      "id": "e10",
      "type": "dictation",
      "instructionAr": "استمع واكتب الجملة كاملة:",
      "audioText": "Der Supermarkt ist neben dem Bahnhof.",
      "caseSensitive": true,
      "explanation": "النص المسموع جملة عن موقع ثابت. يطلب neben هنا Dativ: dem Bahnhof.",
      "errorType": "spelling"
    },
    {
      "id": "e11",
      "type": "fill-blank",
      "instructionAr": "أكمل أداة الاسم بعد mit:",
      "template": "Ich fahre mit ___ Bus. Sie fährt mit ___ U-Bahn. Wir fahren mit ___ Auto.",
      "blanks": [
        {
          "correct": "dem",
          "options": [
            "dem",
            "den",
            "der"
          ]
        },
        {
          "correct": "der",
          "options": [
            "der",
            "dem",
            "die"
          ]
        },
        {
          "correct": "dem",
          "options": [
            "dem",
            "das",
            "den"
          ]
        }
      ],
      "explanation": "mit يحكم Dativ: der Bus → dem Bus، die U-Bahn → der U-Bahn، das Auto → dem Auto.",
      "errorType": "case"
    },
    {
      "id": "e12",
      "type": "error-correction",
      "instructionAr": "للتعبير عن المشي، اختر العبارة الألمانية الشائعة:",
      "wrongSentence": "Zum Supermarkt gehe ich mit Fuß.",
      "wrongWord": "mit Fuß",
      "correctWord": "zu Fuß",
      "options": [
        "zu Fuß",
        "mit Fuß",
        "mit dem Fuß",
        "auf Fuß"
      ],
      "explanation": "التعبير الشائع للمشي هو zu Fuß gehen؛ لا ننقل حرف الجر من العربية كلمةً بكلمة.",
      "errorType": "preposition"
    },
    {
      "id": "e13",
      "type": "multiple-choice",
      "instructionAr": "اختر جواباً طبيعياً يذكر وسيلة النقل بالسكة الحديدية:",
      "questionDe": "Wie kommst du zur Arbeit?",
      "questionAr": "كيف تصل إلى العمل؟",
      "options": [
        "Mit der Bahn.",
        "Mit die Bahn.",
        "Zu die Bahn.",
        "Nach der Bahn."
      ],
      "correctIndex": 0,
      "explanation": "لذكر وسيلة الوصول نقول mit der Bahn؛ فـmit يحكم Dativ، وBahn مؤنث.",
      "optionExplanations": [
        undefined,
        "die ليست صيغة Dativ بعد mit؛ نقول der Bahn.",
        "zu للوجهة لا للوسيلة، والأداة هنا غير صحيحة.",
        "nach لا يقدّم وسيلة التنقل في هذا الجواب."
      ],
      "errorType": "case"
    },
    {
      "id": "e14",
      "type": "word-ordering",
      "instructionAr": "رتّب الكلمات لتكوين جملة عن الدراجة والوجهة:",
      "tokens": [
        "Ich",
        "fahre",
        "mit",
        "dem",
        "Fahrrad",
        "zur",
        "Uni",
        "."
      ],
      "correctSentence": "Ich fahre mit dem Fahrrad zur Uni.",
      "explanation": "في هذا المثال يأتي الفعل المصرف بعد الفاعل، ثم تركيب mit + Dativ، ثم الوجهة.",
      "errorType": "word-order"
    },
    {
      "id": "e15",
      "type": "transformation",
      "instructionAr": "أجب بذكر السيارة وسياق الوجهة:",
      "prompt": "Womit fährst du in die Stadt? (das Auto)",
      "acceptedAnswers": [
        "Ich fahre mit dem Auto in die Stadt.",
        "Mit dem Auto.",
        "Ich fahre mit dem Auto."
      ],
      "sampleAnswer": "Ich fahre mit dem Auto in die Stadt.",
      "explanation": "بعد mit نستخدم Dativ: das Auto → dem Auto. الإجابات المقبولة تحدد السيارة المطلوبة.",
      "errorType": "case"
    },
    {
      "id": "e16",
      "type": "multiple-choice",
      "instructionAr": "اختر ضمير المفعول به المناسب للاسم الألماني:",
      "questionDe": "Wo ist der Bahnhof? — Ich sehe ___ dort.",
      "options": [
        "ihn",
        "es",
        "sie",
        "er"
      ],
      "correctIndex": 0,
      "explanation": "der Bahnhof مذكر بالألمانية؛ بوصفه مفعولاً مباشراً يعود عليه الضمير ihn.",
      "errorType": "pronoun"
    },
    {
      "id": "e17",
      "type": "multiple-choice",
      "instructionAr": "اختر ضمير المفعول به المناسب للاسم الألماني:",
      "questionDe": "Kennst du die Apotheke? — Ja, ich kenne ___.",
      "options": [
        "sie",
        "ihn",
        "es",
        "ihr"
      ],
      "correctIndex": 0,
      "explanation": "Apotheke مؤنث، ويأتي ضميرها sie في هذا المفعول المباشر بعد kennen.",
      "errorType": "pronoun"
    },
    {
      "id": "e18",
      "type": "error-correction",
      "instructionAr": "صحّح ضمير الفاعل الذي وُضع في موضع المفعول:",
      "wrongSentence": "Ich kenne er nicht.",
      "wrongWord": "er",
      "correctWord": "ihn",
      "options": [
        "ihn",
        "ihm",
        "es",
        "sie"
      ],
      "explanation": "er صيغة فاعل؛ kennen يأخذ هنا مفعول Akkusativ، لذلك نستخدم ihn.",
      "errorType": "pronoun"
    },
    {
      "id": "e19",
      "type": "fill-blank",
      "instructionAr": "ميّز بين موقع داخل المدينة والمدينة بوصفها وجهة:",
      "template": "Ich bin ___ Stadt. Morgen gehe ich ___ Stadt.",
      "blanks": [
        {
          "correct": "in der",
          "options": [
            "in der",
            "in die",
            "in den",
            "in dem"
          ],
          "errorType": "case"
        },
        {
          "correct": "in die",
          "options": [
            "in die",
            "in der",
            "in das",
            "in den"
          ],
          "errorType": "case"
        }
      ],
      "explanation": "في هذا المثال تصف in der Stadt الموقع؛ أما in die Stadt فتجعل المدينة وجهة. الحركة داخل مكان قد تأتي أيضاً مع Dativ، كما في Ich gehe in der Stadt spazieren.",
      "errorType": "case"
    },
    {
      "id": "e20",
      "type": "transformation",
      "instructionAr": "أعد صياغة الجملة لتكون المحطة وجهتك دون تأكيد الدخول إلى المبنى:",
      "prompt": "Ich fahre nach dem Bahnhof. → (المحطة هي الوجهة؛ أنتظر خارجها)",
      "acceptedAnswers": [
        "Ich fahre zum Bahnhof.",
        "Ich fahre zu dem Bahnhof."
      ],
      "sampleAnswer": "Ich fahre zum Bahnhof.",
      "explanation": "للوجهة المحايدة نقول zum Bahnhof، ويجوز إبقاء zu dem مفصولتين في سياق مناسب. nach dem Bahnhof قد تشير في سياق آخر إلى ما بعد المحطة، فلا نصنفها خطأً دون تحديد المعنى.",
      "errorType": "preposition"
    },
    {
      "id": "e21",
      "type": "multiple-choice",
      "instructionAr": "اختر صياغة محايدة تذكر وسيلة القطار صراحةً؛ لا يعني ذلك أن gehen خطأ في كل استعمال:",
      "questionDe": "Welche Formulierung nennt die Reise mit dem Zug neutral?",
      "options": [
        "Ich fahre mit dem Zug nach Berlin.",
        "Ich gehe mit dem Zug nach Berlin.",
        "Ich fliege mit dem Zug nach Berlin.",
        "Ich schlafe mit dem Zug nach Berlin."
      ],
      "correctIndex": 0,
      "optionExplanations": [
        undefined,
        "gehen قد يعني التوجه إلى وجهة ولا يثبت وحده المشي؛ عند التصريح برحلة القطار تكون fahren الصياغة المحايدة المتدرّب عليها.",
        "fliegen يصف عادةً رحلة جوية، لا الرحلة بالقطار المحددة هنا.",
        "schlafen لا يعبّر عن وسيلة انتقال في هذا السياق."
      ],
      "explanation": "عند التصريح بالقطار، الصياغة المحايدة المعتادة هي mit dem Zug fahren. وقد يستعمل gehen للتوجه إلى وجهة في سياق أوسع؛ لذلك هذا اختيار سياقي لا حكم بأن gehen يعني المشي دائماً.",
      "errorType": "vocabulary"
    },
    {
      "id": "e22",
      "type": "word-ordering",
      "instructionAr": "رتّب الكلمات لتكوين سؤال كامل عن طريق الوصول:",
      "tokens": [
        "Entschuldigung",
        ",",
        "wie",
        "komme",
        "ich",
        "zum",
        "Bahnhof",
        "?"
      ],
      "correctSentence": "Entschuldigung, wie komme ich zum Bahnhof?",
      "explanation": "كوّن سؤالاً كاملاً يطلب طريق الوصول. التمرين يقيس ترتيب الكلمات المكتوبة، لا نطق السؤال.",
      "errorType": "word-order"
    },
    {
      "id": "e23",
      "type": "matching",
      "instructionAr": "صل المقصد بالنمط الذي يطابق المعنى المكتوب معه:",
      "pairs": [
        {
          "left": "Deutschland (وجهة إلى اسم بلد بلا أداة)",
          "right": "nach Deutschland"
        },
        {
          "left": "der Bahnhof (الذهاب إليه دون تأكيد الدخول)",
          "right": "zum Bahnhof"
        },
        {
          "left": "das Kino (الدخول إلى الداخل)",
          "right": "ins Kino"
        },
        {
          "left": "Hause (اتجاه إلى البيت في التعبير الثابت)",
          "right": "nach Hause"
        },
        {
          "left": "die Apotheke (الوجهة دون تأكيد الدخول)",
          "right": "zur Apotheke"
        }
      ],
      "explanation": "تربط كل وجهة بسياقها؛ لا تعني المطابقة أن حروف الجر الثلاثة بدائل قابلة للتبادل.",
      "errorType": "preposition"
    },
    {
      "id": "e24",
      "type": "transformation",
      "instructionAr": "استبدل الاسم بضمير المفعول المناسب:",
      "prompt": "Ich nehme den Bus. → (بالضمير)",
      "acceptedAnswers": [
        "Ich nehme ihn.",
        "Ich nehme ihn"
      ],
      "sampleAnswer": "Ich nehme ihn.",
      "explanation": "der Bus مذكر، وفي موضع المفعول المباشر يحل ihn محل الاسم وأداته معاً.",
      "errorType": "pronoun"
    },
    {
      "id": "e25",
      "type": "multiple-choice",
      "instructionAr": "أجب عن سؤال كيفية الوصول بجملة قصيرة محايدة، واذكر الحافلة:",
      "questionDe": "Wie kommst du zur Arbeit? — ___",
      "options": [
        "Mit dem Bus.",
        "Mit den Bus.",
        "Mit die Bus.",
        "Bei dem Bus."
      ],
      "correctIndex": 0,
      "explanation": "في جواب يذكر وسيلة النقل نقول mit dem Bus؛ mit يحكم Dativ، وBus مفرد مذكر.",
      "errorType": "case"
    },
    {
      "id": "e26",
      "type": "fill-blank",
      "instructionAr": "أكمل بضمير المفعول بحسب أداة كل اسم ألماني:",
      "template": "Das Kino ist neu. Ich finde ___ sehr schön. Und die Haltestelle? Ich sehe ___ nicht.",
      "blanks": [
        {
          "correct": "es",
          "options": [
            "es",
            "ihn",
            "sie",
            "ihm"
          ],
          "errorType": "pronoun"
        },
        {
          "correct": "sie",
          "options": [
            "sie",
            "es",
            "ihn",
            "ihr"
          ],
          "errorType": "pronoun"
        }
      ],
      "explanation": "das Kino محايد → es، وdie Haltestelle مؤنثة → sie، بوصفهما مفعولين مباشرين في المثالين.",
      "errorType": "pronoun"
    },
    {
      "id": "e27",
      "type": "error-correction",
      "instructionAr": "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      "wrongSentence": "Ich gehe nach Berlin.",
      "wrongWord": "gehe",
      "correctWord": "gehe",
      "isAlreadyCorrect": true,
      "options": [
        "gehe",
        "fahre",
        "fliege",
        "laufe"
      ],
      "explanation": "الجملة صحيحة في سياقها: gehen قد يعني الذهاب إلى مكان ولا يحدد وحده وسيلة السفر. إذا ذُكر القطار صراحةً، فالتعبير المعتاد هو Ich fahre mit dem Zug nach Berlin.",
      "errorType": "vocabulary"
    }
  ];


export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    "mistakes": [
      {
        "wrong": "Ich fahre zu Deutschland. (أقصد أن ألمانيا هي الوجهة)",
        "right": "Ich fahre nach Deutschland.",
        "whyAr": "مع اسم Deutschland الذي يرد عادةً بلا أداة يشيع nach في هذا المعنى. لا نعمم ذلك على أسماء البلدان ذات الأداة، مثل in die Schweiz.",
        "classification": "error"
      },
      {
        "wrong": "zu Hause للحركة",
        "right": "nach Hause للاتجاه، وzu Hause للموقع في المثال",
        "whyAr": "قارن Ich fahre nach Hause مع Ich bin zu Hause؛ احفظ الصيغتين في سياقهما ولا تخلط بين الوصول والموقع.",
        "classification": "contextual-alternative"
      },
      {
        "wrong": "كل حركة مع in تأخذ Akkusativ",
        "right": "الوجهة: in die Stadt؛ الموقع أو الحركة داخلها: in der Stadt",
        "whyAr": "تتعلق الصيغة بالعلاقة المكانية. Ich gehe in der Stadt spazieren تصف حركةً داخل المكان مع Dativ.",
        "classification": "pedagogical-simplification"
      }
    ],
    "eselsbruecken": [
      "أمثلة الوجهة: nach Deutschland، zum Bahnhof، in die Stadt؛ اختر بحسب المقصد والسياق، لا باعتبارها بدائل مترادفة.",
      "مع in المكانية: Wo? in der Stadt / Wohin? in die Stadt؛ ومع mit نتبع حكم الحرف: mit + Dativ."
    ],
    "culturalNote": {
      "title": "مصطلحات على لوحات النقل",
      "content": "قد ترى U-Bahn (مترو)، S-Bahn (قطار حضري/ضواحٍ)، Straßenbahn (ترام)، وBus (حافلة). تختلف الشبكات والتسميات والتذاكر بين المدن والمشغلين؛ راجع معلومات المشغّل المحلي قبل السفر. هذا تمهيد مفرداتي، لا وصف شامل للنقل الألماني ولا قائمة أسعار ثابتة."
    }
  };
