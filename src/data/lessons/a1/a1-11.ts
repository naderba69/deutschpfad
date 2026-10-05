import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-11: في المدينة
 * — أماكن المدينة وأسئلة الطريق + علاقات الموقع والوجهة + وسائل النقل + ضمائر المفعول
 */
export const lessonA111: Lesson = {
  id: "a1-11",
  unitId: "a1-11",
  level: "A1",
  order: 1,
  titleDe: "In der Stadt",
  titleAr: "التنقل في المدينة",
  summary:
    "أماكن المدينة والسؤال عن الطريق؛ وجهات مختلفة، مع المقارنة المحددة بين Wo? وWohin? عند in؛ وسائل النقل مع mit + Dativ؛ وضمائر المفعول في أمثلة الاتجاهات.",
  lernziele: [
    {
      "id": "z1",
      "de": "Ich kann ausgewählte Orte der Stadt ihren Bedeutungen zuordnen.",
      "ar": "أطابق أسماء أماكن مختارة بمعانيها في تمرين المفردات المحدد؛ لا تكفي مراجعة البطاقات.",
      "evidence": {
        "exerciseIds": [
          "e3"
        ],
        "taskIds": [
          "practice:a1-11:e3",
          "flow-practice:a1-11:e3"
        ],
        "labelAr": "أنجز مطابقة الأماكن في e3 إجابة صحيحة؛ مشاهدة الكلمات أو فتح التمرين لا تسجل دليلاً.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z2",
      "de": "Ich kann eine einfache Frage nach dem Weg in den geübten Formen formulieren.",
      "ar": "أكوّن صيغة سؤال مكتوبة عن مكان أو طريق في نمطي Wo ist …? وWie komme ich …?؛ هذا لا يثبت أنني نطقتها شفهياً.",
      "evidence": {
        "exerciseIds": [
          "e7",
          "e22"
        ],
        "taskIds": [
          "practice:a1-11:e7",
          "practice:a1-11:e22"
        ],
        "labelAr": "أجب عن e7 وe22 كليهما؛ يقيس ذلك تكوين الصيغة وترتيب كلماتها في هاتين المهمتين، لا أداءً شفهياً.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z3",
      "de": "Ich kann ausgewählte Richtungsangaben zuordnen und einer kurzen Wegbeschreibung eine Abzweigung entnehmen.",
      "ar": "أختار الاتجاه في التمرينين المحددين وأستخرج أول انعطاف من نص القراءة؛ لا أعمم ذلك على فهم كل الإرشادات.",
      "evidence": {
        "exerciseIds": [
          "e4",
          "e6",
          "rq2"
        ],
        "taskIds": [
          "practice:a1-11:e4",
          "flow-practice:a1-11:e4",
          "practice:a1-11:e6",
          "reading:read-a1-11:rq2"
        ],
        "labelAr": "رتّب صيغة الاتجاه في e4، وأكمل الاتجاهات في e6، ثم أجب عن سؤال القراءة rq2؛ يلزم أداء المهام الثلاث.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z4",
      "de": "Ich kann in den geübten Sätzen die passende Orts- oder Zielangabe auswählen.",
      "ar": "أختار بين تعبيرات الموقع والوجهة في الأمثلة المحددة، مع تمييز in der Stadt / in die Stadt وnach Hause / zu Hause.",
      "evidence": {
        "exerciseIds": [
          "e1",
          "e2",
          "e5",
          "e9",
          "e19",
          "e20",
          "e23",
          "m1",
          "m4",
          "m5",
          "w1",
          "w2"
        ],
        "taskIds": [
          "practice:a1-11:e1",
          "flow-practice:a1-11:e1",
          "practice:a1-11:e2",
          "flow-practice:a1-11:e2",
          "practice:a1-11:e5",
          "practice:a1-11:e9",
          "practice:a1-11:e19",
          "practice:a1-11:e20",
          "practice:a1-11:e23",
          "mini-test:a1-11:m1",
          "mini-test:a1-11:m4",
          "mini-test:a1-11:m5",
          "writing:a1-11:w1",
          "writing:a1-11:w2"
        ],
        "labelAr": "أجب عن مهام الوجهة والموقع e1 وe2 وe5 وe9 وe19 وe20 وe23 وm1 وm4 وm5 وw1 وw2 كلها؛ بعض الصيغ البديلة تتوقف على المعنى والسياق.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z5",
      "de": "Ich kann für Verkehrsmittel die geübten Formen mit + Dativ und passende Bewegungsverben in klaren Kontexten verwenden.",
      "ar": "أضبط صيغ mit + Dativ وzu Fuß في التمارين، وأميّز الفعل الأنسب عندما تسمّي الجملة وسيلة النقل صراحةً.",
      "evidence": {
        "exerciseIds": [
          "e11",
          "e12",
          "e13",
          "e14",
          "e15",
          "e21",
          "e25",
          "e27"
        ],
        "taskIds": [
          "practice:a1-11:e11",
          "practice:a1-11:e12",
          "practice:a1-11:e13",
          "practice:a1-11:e14",
          "practice:a1-11:e15",
          "practice:a1-11:e21",
          "practice:a1-11:e25",
          "practice:a1-11:e27"
        ],
        "labelAr": "أنجز تدريبات mit وzu Fuß والوسيلة والفعل في e11–e15 وe21 وe25 وe27 كلها؛ e27 يتحقق من عدم تصحيح Ich gehe nach Berlin خارج سياق يحدد الوسيلة.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z6",
      "de": "Ich kann die geübten direkten Objektpronomen passend zu ausgewählten deutschen Nomen einsetzen.",
      "ar": "أختار ضمير المفعول المنصوب وفق جنس الاسم الألماني في الأمثلة المحددة، وأميّزه من ضمير الفاعل.",
      "evidence": {
        "exerciseIds": [
          "e16",
          "e17",
          "e18",
          "e24",
          "e26"
        ],
        "taskIds": [
          "practice:a1-11:e16",
          "practice:a1-11:e17",
          "practice:a1-11:e18",
          "practice:a1-11:e24",
          "practice:a1-11:e26"
        ],
        "labelAr": "أجب عن اختيار الضمير وتصحيحه واستبدال الاسم في e16–e18 وe24 وe26 كلها؛ لا تستنتج جنس الاسم الألماني من مقابله العربي.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z7",
      "de": "Ich kann ausgewählte Informationen aus dem kurzen Lesetext entnehmen.",
      "ar": "أستخرج المعلومات التي تسأل عنها أسئلة فهم النص الألماني القصير، من دون ادعاء كفاءة قراءة عامة.",
      "evidence": {
        "exerciseIds": [
          "rq1",
          "rq2",
          "rq3",
          "rq4",
          "rq5"
        ],
        "taskIds": [
          "reading:read-a1-11:rq1",
          "reading:read-a1-11:rq2",
          "reading:read-a1-11:rq3",
          "reading:read-a1-11:rq4",
          "reading:read-a1-11:rq5"
        ],
        "labelAr": "أجب عن أسئلة القراءة rq1–rq5 كلها إجابة صحيحة؛ إظهار النص أو ترجمته وحده لا يسجل أداءً.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z8",
      "de": "Ich kann ausgewählte Angaben aus den zwei bereitgestellten, vorgelesenen Dialogen wiedererkennen.",
      "ar": "أحدد المعلومات التي تسأل عنها الأسئلة الثلاثة في حوارين قصيرين يُنطقان عبر TTS؛ يُسجّل الدليل عند الإجابة قبل كشف النص، ولا يثبت إتقاناً عاماً للاستماع.",
      "evidence": {
        "exerciseIds": [
          "q1",
          "q2",
          "q3"
        ],
        "taskIds": [
          "listening:l1:q1",
          "listening:l2:q2",
          "listening:l2:q3"
        ],
        "labelAr": "أجب عن q1–q3 بعد الاستماع وقبل كشف النص؛ كشفه، حتى إن أخفيته لاحقاً، يجعل الإجابات خارج دليل الاستماع. ولا تُحتسب إجابات المسار المرحلي الذي يعرض النص.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z9",
      "de": "Ich kann die geübten Zielangaben schriftlich formulieren und einen kurzen Satz nach Diktat verschriften.",
      "ar": "أكتب إجابة قصيرة عن الوجهة، وأملأ تعبيرات محددة، وأدوّن جملة الإملاء في مهام الكتابة الثلاث.",
      "evidence": {
        "exerciseIds": [
          "w1",
          "w2",
          "w3"
        ],
        "taskIds": [
          "writing:a1-11:w1",
          "writing:a1-11:w2",
          "writing:a1-11:w3"
        ],
        "labelAr": "اكتب في w1، وأكمل w2، ثم أنجز الإملاء w3؛ يلزم الصواب في المهام الثلاث، لا مجرد عرض نموذج الإجابة.",
        "completion": "all-correct"
      }
    }
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "أين محطة القطار، وكيف أسأل عن طريق الوصول إليها؟ قارن Wo ist der Bahnhof? وWie komme ich zum Bahnhof? ثم لاحظ in في in der Stadt / in die Stadt: ما العلاقة المكانية التي تغيّرت؟ هل يكفي وجود حركة لاختيار Akkusativ؟",
    motivatingQuestionDe: "Entschuldigung, wo ist der Bahnhof?",
    contextAr:
      "في مدينة جديدة، تسمية الأماكن وطلب إعادة الاتجاه وفهم وسيلة النقل تساعدك على متابعة الحديث. سنقارن تعبيرات الوجهة والموقع بحسب العلاقة المقصودة؛ لا نستخدم قاعدة آلية تقول إن كل حركة تأخذ Akkusativ.",
    contextDe: "Gehen Sie geradeaus und dann links!",
    connectionToPreviousAr:
      "سبق أن تدربنا على وصف أماكن وصيغ حالات في تراكيب مختلفة. هنا نعيد النظر إلى المكان ونقارن Wo? بـWohin? مع in في أمثلة محددة، مع تذكّر أن حروفاً مثل zu وmit تحكم الحالة بطريقة أخرى؛ وليس هذا أول تعرض لـDativ.",
    activateVocabulary: [
      { de: "die Stadt", ar: "المدينة" },
      { de: "der Bahnhof", ar: "محطة القطار" },
      { de: "die Straße", ar: "الشارع" },
      { de: "geradeaus", ar: "مباشرة (للأمام)" },
      { de: "rechts / links", ar: "يمين / يسار" },
    ],
  },
  theory: [
    {
      id: "t1",
      titleAr: "أماكن المدينة والسؤال عن المكان والطريق",
      titleDe: "Orte in der Stadt und nach dem Weg fragen",
      explanationAr: "احفظ الاسم مع أداة التعريف: der Bahnhof، die Apotheke، das Krankenhaus؛ فالأداة جزء من المفردة، وتعينك لاحقاً على اختيار الضمير وصيغة الاسم. من مفردات هذه الوحدة أيضاً: der Supermarkt، der Park، der Platz، die Post، die Bank، die Schule، die Kirche، das Rathaus، das Kino، das Restaurant، das Hotel، die Haltestelle. هذه قائمة تدريبية لا قائمة شاملة لكل مدينة.\n\nفي الأسماء المركبة الاسمية يكون العنصر الأساسي في آخر الكلمة هو الذي يحدد الجنس عادةً: das Krankenhaus ينتهي بـHaus، وder Bahnhof بـHof، وdie Haltestelle بـStelle. استخدم هذه العلاقة لتخمين الجنس بعد أن تعرف جنس العنصر الأخير؛ لا تستنتج جنسه من اللاحقة وحدها، ولا تعممها على الأسماء غير المركبة. تذكّر كذلك أن كثيراً من الأسماء المنتهية بـ-e مؤنثة، لكن النهاية ليست قانوناً بلا استثناء: der Junge وdas Ende مثالان يوضحان أن النهاية وحدها لا تحسم الجنس.\n\nللسؤال عن الموقع، قل Wo ist die Apotheke? ولطلب طريق الوصول إلى المحطة، قل Wie komme ich zum Bahnhof? أو Wie komme ich zur Apotheke? يختلف تركيز السؤالين، لكن قد يجيب المتحدث عن أي منهما بتحديد المكان أو بإرشادات الطريق بحسب السياق؛ لا توجد صيغة واحدة إلزامية. يمكن أن تبدأ بـEntschuldigung أو Entschuldigen Sie bitte في طلب مهذب؛ هذه مقدمة مناسبة لا شرط نحوي ولا كلمة يجب قولها في كل موقف.\n\nقد تصف الإجابة المكان بالنسبة إلى معلم آخر: neben dem Park أو gegenüber der Apotheke، أو تعطي توجيهاً مثل Gehen Sie geradeaus. يستخدم gegenüber في أمثلتنا مع Dativ، ويمكن أن يأتي قبل الاسم أو بعده: gegenüber dem Kino / dem Kino gegenüber. ونميّز بين der Bahnsteig، رصيف المحطة، وdas Gleis، مسار السكة أو رقمه على اللوحات؛ قد يتداخل اللفظان عند الحديث عن السفر، لكنهما ليسا مترادفين دائماً.\n\nأما الحوار فيمكن أن يتابع بـKönnen Sie das bitte wiederholen? عند عدم الفهم، ثم Vielen Dank! وردّ مثل Nichts zu danken. هذا رد مناسب واحد من عدة ردود ممكنة على الشكر، وليس العبارة الوحيدة. في التدريب سنقرأ السؤال والجملة كاملة ونلتقط أداة المكان أو الاتجاه، ثم نكوّن سؤالاً قصيراً في مهمة كتابة. فتح بطاقة المفردات أو سماع المثال وحده لا يثبت القدرة على استعماله.",
      whyAr: "حفظ الأداة مع الاسم يساعدك في أكثر من موضع: تقول der Bahnhof، ثم تستخدم الضمير ihn عندما تستبدل الاسم بمفعول، وتقول gegenüber dem Bahnhof حين تتطلب العبارة Dativ. لا تستنتج هذه الصيغ من جنس كلمة «المحطة» بالعربية؛ الجنس النحوي خاص بكل اسم في اللغة التي تتعلمها.\n\nوتفيدك بنية الكلمات المركبة في التخمين، لا في إلغاء الحفظ. عندما تعرف أن Haus محايد، يساعدك ذلك على تذكر das Krankenhaus؛ وعندما تعرف أن Stelle مؤنث، يسهل تذكر die Haltestelle. لكن إذا لم تعرف جنس العنصر الأخير فلن تمنحك نهاية المركب وحدها جواباً مضموناً. وبالمثل، نهاية -e قرينة شائعة لا قاعدة كافية.\n\nأما السؤال عن الموقع والسؤال عن طريق الوصول فهما أداتان تواصليتان مختلفتان يمكن أن تتداخلا في المحادثة. نتمرن على Wo ist …? وWie komme ich …? ليتعرف المتعلم إلى صيغتين عمليتين، لا لنقرر أن إحداهما ألطف أو أصح في كل شارع. وصيغ الاستئذان والرد على الشكر تتغير باختلاف الموقف والمتكلمين؛ أمثلة الدرس نماذج قابلة للاستعمال وليست بروتوكولاً اجتماعياً إلزامياً.",
      table: {
        "title": "اسم المكان مع أداته وسؤال مناسب",
        "columns": [
          "المفردة",
          "المعنى",
          "مثال السؤال/الوصف"
        ],
        "rows": [
          {
            "label": "der Bahnhof",
            "cells": [
              "محطة القطار",
              "Wo ist der Bahnhof?"
            ]
          },
          {
            "label": "die Apotheke",
            "cells": [
              "الصيدلية",
              "Wie komme ich zur Apotheke?"
            ]
          },
          {
            "label": "das Krankenhaus",
            "cells": [
              "المستشفى",
              "Das Krankenhaus ist neben dem Park."
            ]
          },
          {
            "label": "die Haltestelle",
            "cells": [
              "موقف/محطة وسيلة نقل",
              "Die Haltestelle liegt gegenüber der Post."
            ]
          },
          {
            "label": "der Bahnsteig",
            "cells": [
              "رصيف المحطة",
              "Der Bahnsteig ist hier."
            ]
          },
          {
            "label": "das Gleis",
            "cells": [
              "مسار السكة؛ ورقمه على لوحة الرحلات",
              "Der Zug fährt von Gleis zwei ab."
            ]
          }
        ]
      },
      examples: [
        {
          "de": "Wo ist die Apotheke?",
          "ar": "أين الصيدلية؟"
        },
        {
          "de": "Wie komme ich zum Bahnhof?",
          "ar": "كيف أصل إلى محطة القطار؟"
        },
        {
          "de": "Wie komme ich zur Post?",
          "ar": "كيف أصل إلى مكتب البريد؟"
        },
        {
          "de": "Das Krankenhaus ist neben dem Park.",
          "ar": "المستشفى بجانب الحديقة."
        },
        {
          "de": "Die Haltestelle liegt gegenüber der Apotheke.",
          "ar": "موقف النقل يقع مقابل الصيدلية."
        },
        {
          "de": "Der Zug fährt von Gleis zwei ab.",
          "ar": "ينطلق القطار من المسار الثاني."
        },
        {
          "de": "Können Sie das bitte wiederholen?",
          "ar": "هل يمكنك إعادة ذلك من فضلك؟"
        },
        {
          "de": "Vielen Dank! — Nichts zu danken.",
          "ar": "شكراً جزيلاً! — لا شكر على واجب."
        }
      ],
      comparisonWithArabic: "في العربية والألمانية نستطيع أن نسأل عن مكان بعبارة مثل «أين الصيدلية؟» وWo ist die Apotheke? أو أن نسأل عن طريق الوصول. الوظيفة التواصلية متقاربة، لكن تركيب الجملة والأدوات ليسا متطابقين كلمة بكلمة. في العربية قد تظهر «الـ» ملتصقة بالاسم، بينما تأتي أداة التعريف الألمانية كلمة مستقلة وتتغير أشكالها بحسب جنس الاسم وحالته.\n\nولا يصح اختزال بناء الكلمات في أن العربية تشتق فقط والألمانية تركب فقط؛ فاللغتان تستخدمان طرائق متنوعة. في هذا المثال يساعد تحليل Kranken + Haus على تذكر معنى Krankenhaus وجنسه، لكنه لا يغني عن حفظ المفردة مع أداتها. كما أن كلمة «محطة» في العربية مؤنثة، بينما der Bahnhof مذكر بالألمانية؛ لذلك يعود الضمير الألماني إلى أداة الاسم الألماني لا إلى ترجمة الكلمة.\n\nوأخيراً، لا تساو Dativ الألمانية بجرّ العربية. قد تترجم gegenüber dem Bahnhof بعبارة «مقابل المحطة»، لكن التشابه في الترجمة لا يجعل الحالتين النحويتين متماثلتين. الأفضل حفظ النمط مع المثال، ثم اختيار صيغة الألمانية وفق تركيبها.",
      eselsbruecke: "احفظ كل اسم مع أداته: der Bahnhof، die Apotheke، das Krankenhaus. وفي المركب اسأل عن العنصر الأخير المعروف، بوصفه قرينة على الجنس لا بديلاً عن مراجعة الكلمة.",
      commonMistakes: [
        {
          "wrong": "Der Krankenhaus ist neben dem Park.",
          "right": "Das Krankenhaus ist neben dem Park.",
          "whyAr": "Krankenhaus اسم محايد لأن العنصر الأساسي Haus محايد؛ لذلك نقول das Krankenhaus. لا تغيّر أداة الاسم استناداً إلى جنس كلمة «المستشفى» في العربية.",
          "classification": "error"
        },
        {
          "wrong": "Die Haltestelle ist gegenüber die Post.",
          "right": "Die Haltestelle ist gegenüber der Post.",
          "whyAr": "في التركيب المكاني المقصود تأتي gegenüber مع Dativ: die Post تصبح der Post. لا يعني ذلك أن Dativ ترجمة مطابقة لجرّ العربية؛ احفظ الحرف مع الصيغة الألمانية.",
          "classification": "error"
        },
        {
          "wrong": "Wie komme ich zu dem Bahnhof?",
          "right": "Wie komme ich zum Bahnhof?",
          "whyAr": "zu dem Bahnhof صيغة ممكنة نحوياً، وقد تُفصل لأغراض التركيز؛ نختار zum Bahnhof بوصفه الاختصار الشائع في المثال المحايد. هذه ملاحظة تعليمية وليست تصحيحاً لخطأ نحوي مؤكد.",
          "classification": "pedagogical-simplification"
        },
        {
          "wrong": "Entschuldigung, Bahnhof?",
          "right": "Entschuldigung, wo ist der Bahnhof?",
          "whyAr": "السؤال الاسمي المختصر قد يظهر في تواصل سريع ولا نعدّه خطأً مطلقاً. نتدرب هنا على سؤال كامل يبيّن موضع الفعل والأداة، ويمكنك استعمال الصيغة الأقصر في سياق مناسب.",
          "classification": "contextual-alternative"
        }
      ],
      relatedRuleComparison: {
        "title": "المركب الاسمي وأداة التعريف",
        "content": "في كثير من الأسماء المركبة يكون العنصر الأساسي في آخر الاسم دليلاً على جنس المركب: das Haus → das Krankenhaus، وdie Stelle → die Haltestelle. تعلم أداة العنصر الأخير، ولا تحاول استنتاج الجنس من آخر حرف وحده."
      },
    },
    {
      id: "t2",
      titleAr: "المكان والوجهة: Wo? وWohin?",
      titleDe: "Ort und Ziel: Wo? und Wohin?",
      explanationAr: "السؤالان Wo? (أين؟) وWohin? (إلى أين؟) يوجهان انتباهك إلى العلاقة المكانية، لكن القاعدة ليست «كل سكون Dativ وكل حركة Akkusativ». يظهر هذا التقابل بوضوح مع حروف المكان المتغيرة (Wechselpräpositionen) مثل in، عندما يحدد المتكلم موقعاً أو جهة تنتهي إليها الحركة.\n\nقارن: Wo ist sie? Sie ist in der Stadt. هنا تصف in der Stadt موقعاً قائماً، فنستخدم Dativ. أما إذا كانت المدينة هي الوجهة فقل: Wohin geht sie? Sie geht in die Stadt. هنا يعبّر Akkusativ عن الجهة المستهدفة. ويمكن أن يتحرك الشخص داخل المكان مع بقاء Dativ: Ich gehe in der Stadt spazieren تعني أنني أتمشى داخل المدينة؛ لذلك وجود فعل حركة وحده لا يحسم الحالة.\n\nللوصول إلى وجهة لا تستخدم الألمانية حرفاً واحداً دائماً. مع أسماء مدن وكثير من أسماء البلدان التي ترد عادة بلا أداة يشيع nach: nach Tunis، nach Deutschland. أما اسم بلد يأتي مع أداة، مثل die Schweiz، فيستعمل معه في نمط الوجهة in die Schweiz. هذه إرشادات للأسماء المألوفة، وليست دعوى أن كل اسم جغرافي يأخذ الحرف نفسه.\n\nيأتي zu مع Dativ في أمثلة وجهة مثل zum Bahnhof (zu dem Bahnhof) وzur Apotheke (zu der Apotheke)، وغالباً يحدد الذهاب إلى المكان دون أن يصرح بدخول مبناه. أما in مع Akkusativ فيناسب معنى التوجه إلى الداخل أو إلى حيّز، مثل in den Bahnhof أو ins Kino أو in die Stadt. الاختيار مرتبط بالعلاقة التي تقصدها، لا بقاعدة «مكان مغلق» وحدها. الصيغ المختصرة zum وzur وim وins شائعة؛ ويمكن أن تبقى الكلمات مفصولة حين يقتضيها التركيز أو السياق، فالاختصار ليس واجباً في كل جملة.\n\nواحفظ التعبيرين المرتبطين بالبيت مع معنييهما في المثال: Ich fahre nach Hause (أتجه إلى البيت)، وIch bin zu Hause (أنا في البيت). وفي وصف الطريق، um die Ecke تعني حول الزاوية/قرب المنعطف، ولا يلزم أن يكون الشيء «خلف» الزاوية حرفياً. نربط هذه التعبيرات بالسياق ونسأل: ما الوجهة؟ هل أقصد الوصول إلى المكان عموماً، أم الدخول إليه، أم وصف موقعي فيه؟",
      whyAr: "وفق IDS Grammis، تتناوب بعض حروف المكان، ومنها in، بين Dativ عند تحديد علاقة مكانية قائمة وAkkusativ عند تقديم الهدف المكاني للحركة. هذا أدق من تعميم الحركة والسكون: يمكن أن يتحرك السمك im Aquarium، ويمكن أن أتمشى in der Stadt، بينما تشير in die Stadt إلى جهة الوصول. الفعل وحده لا يكفي؛ انظر إلى وظيفة العبارة المكانية.\n\nوتُظهر أمثلة IDS أيضاً أن السؤال عن وجهة لا يُجاب بحرف واحد في كل الحالات: يمكن أن تكون الوجهة zum Bahnhof أو in den Bahnhof بحسب ما نحدده. وتشيع nach مع أسماء جغرافية بلا أداة، بينما تأتي in مع أسماء تحمل أداة مثل die Schweiz. هذه أنماط استعمال، لا ترجمة حرفية من العربية.\n\nتساعدك كذلك معرفة أن بعض الحروف تحكم الحالة مباشرةً: mit وzu يتطلبان Dativ في أمثلة الدرس حتى عند وجود انتقال إلى مكان. لذلك احفظ التعبير كاملاً، مثل mit dem Bus وzum Bahnhof، ولا تستنتج الحالة من الحركة وحدها.",
      table: {
        "title": "اختر التعبير بحسب العلاقة المقصودة",
        "columns": [
          "المعنى",
          "النمط في المثال",
          "مثال"
        ],
        "rows": [
          {
            "label": "وجهة مدينة/بلد بلا أداة غالباً",
            "cells": [
              "nach",
              "nach Tunis / nach Deutschland"
            ]
          },
          {
            "label": "وجهة إلى المكان دون تأكيد الدخول",
            "cells": [
              "zu + Dativ",
              "zum Bahnhof / zur Apotheke"
            ]
          },
          {
            "label": "اتجاه إلى داخل حيّز",
            "cells": [
              "in + Akkusativ",
              "in den Bahnhof / ins Kino"
            ]
          },
          {
            "label": "موقع أو حركة داخل المكان",
            "cells": [
              "in + Dativ",
              "in der Stadt / in der Stadt spazieren"
            ]
          },
          {
            "label": "اتجاه إلى البيت / موقع في البيت",
            "cells": [
              "nach Hause / zu Hause",
              "Ich fahre nach Hause. / Ich bin zu Hause."
            ]
          },
          {
            "label": "اختصار شائع",
            "cells": [
              "zu dem → zum; in das → ins",
              "zum Bahnhof / ins Kino"
            ]
          }
        ]
      },
      examples: [
        {
          "de": "Ich fahre nach Tunis.",
          "ar": "أسافر إلى تونس."
        },
        {
          "de": "Wir fahren nach Deutschland.",
          "ar": "نسافر إلى ألمانيا."
        },
        {
          "de": "Sie reist in die Schweiz.",
          "ar": "تسافر إلى سويسرا."
        },
        {
          "de": "Wir gehen zum Bahnhof und warten davor.",
          "ar": "نذهب إلى المحطة وننتظر أمامها."
        },
        {
          "de": "Ich gehe in den Bahnhof.",
          "ar": "أدخل إلى مبنى المحطة."
        },
        {
          "de": "Ich bin in der Stadt.",
          "ar": "أنا في المدينة."
        },
        {
          "de": "Ich gehe in der Stadt spazieren.",
          "ar": "أتمشى داخل المدينة."
        },
        {
          "de": "Heute Abend gehen wir ins Kino.",
          "ar": "نذهب مساء اليوم إلى السينما لمشاهدة فيلم."
        },
        {
          "de": "Ich fahre jetzt nach Hause.",
          "ar": "أتجه الآن إلى البيت."
        },
        {
          "de": "Am Sonntag bin ich zu Hause.",
          "ar": "أنا في البيت يوم الأحد."
        },
        {
          "de": "Die Post ist um die Ecke.",
          "ar": "مكتب البريد حول الزاوية/قريب بعد المنعطف."
        }
      ],
      comparisonWithArabic: "في العربية يمكن أن نقول «أنا في المدينة» و«أذهب إلى المدينة»، ويتغير حرف الجر من «في» إلى «إلى». وفي الألمانية قد يبقى الحرف in نفسه، لكن تتغير أداة الاسم: in der Stadt للموقع، وin die Stadt للوجهة. إذن اللغتان تميزان العلاقة المكانية، لكنهما توزعان العلامة على أجزاء مختلفة من العبارة؛ لا يصح القول إن العربية لا تميز الحركة أو لا تحمل أي علامة إعرابية.\n\nوتظهر الفروق نفسها في تعبير البيت: «في البيت» و«إلى البيت» يقابلهما في المثال zu Hause وnach Hause، لكن لا توجد مطابقة آلية بين كل حرف عربي وحرف ألماني. كذلك يمكن ترجمة zum Bahnhof وin den Bahnhof بعبارات تبدأ بـ«إلى»، مع أن الألمانية تبرز الفرق بين الوصول إلى وجهة والدخول إلى المبنى.\n\nأما Dativ وAkkusativ فاسمان لحالتين في النحو الألماني؛ لا نساوي Dativ بجرّ العربية ولا Akkusativ بنصبها كأن الوظائف واحدة. قارن المعنى، ثم احفظ شكل العبارة الألمانية كما ورد في السياق.",
      eselsbruecke: "مع in المكانية: Wo? → in der Stadt، وWohin? → in die Stadt. لكن mit وzu لهما حكمهما الخاص، وnach Hause / zu Hause تعبيران مختلفان؛ لا تختزل الجميع في «الحركة = Akkusativ».",
      commonMistakes: [
        {
          "wrong": "Ich gehe in der Stadt. (أقصد: أذهب إلى المدينة بوصفها وجهتي)",
          "right": "Ich gehe in die Stadt.",
          "whyAr": "in der Stadt جملة ممكنة عندما يكون المعنى المشي أو الحركة داخل المدينة. إذا كانت المدينة هي الوجهة التي تنتهي إليها الحركة، فالنمط المقصود هنا in die Stadt. الخطأ في تفسير العلاقة، لا في إمكان الجملة الأولى مطلقاً.",
          "classification": "contextual-alternative"
        },
        {
          "wrong": "Ich gehe ins Stadt.",
          "right": "Ich gehe in die Stadt.",
          "whyAr": "Stadt مؤنث، وins اختصار in das؛ لذلك لا يطابق الاسم هنا. في معنى الوجهة نقول in die Stadt، وفي معنى الموقع in der Stadt.",
          "classification": "error"
        },
        {
          "wrong": "Ich bin nach Hause. (أقصد: أنا موجود في البيت الآن)",
          "right": "Ich bin zu Hause.",
          "whyAr": "للتعبير عن الموقع في البيت يستعمل المثال zu Hause، أما nach Hause فيعبّر عادةً عن الاتجاه إلى البيت، مثل Ich fahre nach Hause. يحدد القوس المعنى المقصود حتى لا نخلط الاتجاه بالموقع.",
          "classification": "error"
        },
        {
          "wrong": "Wir gehen in das Kino.",
          "right": "Wir gehen ins Kino.",
          "whyAr": "in das Kino صيغة سليمة، كما أن ins Kino اختصار شائع لـin das Kino. ندرّب على الشكل المختصر في هذا المستوى بوصفه نموذجاً موجزاً؛ لا نعرض الصيغة المفصولة على أنها خطأ.",
          "classification": "pedagogical-simplification"
        },
        {
          "wrong": "Ich fahre nach dem Bahnhof. (أقصد أن المحطة وجهتي، لا أنني أصف ما بعد المحطة)",
          "right": "Ich fahre zum Bahnhof.",
          "whyAr": "nach dem Bahnhof قد يُفهم في سياق مسار على أنه «بعد المحطة». عندما تكون المحطة هي الوجهة في المثال المحايد نستخدم zum Bahnhof؛ هذا اختيار للسياق المقصود، لا حكم بأن كل تركيب فيه nach + Dativ خطأ.",
          "classification": "contextual-alternative"
        }
      ],
      relatedRuleComparison: {
        "title": "حرف يحكم الحالة أم حرف مكاني متغير؟",
        "content": "mit + Dativ في mit dem Bus، وzu + Dativ في zum Bahnhof، لا يتبدل حكمهما هنا لمجرد أن الرحلة تتضمن حركة. أما in فتتغير صيغتها في الاستعمال المكاني بين الموقع in der Stadt والوجهة in die Stadt. اسأل عن وظيفة العبارة وعن الحرف، لا عن وجود حركة جسدية فقط."
      },
    },
    {
      id: "t3",
      titleAr: "وسائل النقل: mit + Dativ والأفعال في سياقها",
      titleDe: "Verkehrsmittel: mit + Dativ und passende Verben",
      explanationAr: "بعد تحديد الوجهة، تستطيع إضافة وسيلة التنقل. يحكم حرف الجر mit حالة Dativ: der Bus يصبح mit dem Bus، وdie U-Bahn تصبح mit der U-Bahn، وdas Auto تصبح mit dem Auto. ومع الجمع نقول مثلاً die Busse → mit den Bussen. هذه قاعدة تخصّ الحرف mit، وليست نتيجة أن وسيلة النقل متحركة. وتظهر الحالة أيضاً مع حروف أخرى وفق حكمها، فلا نساوي اسم Dativ بجرّ العربية.\n\nتشيع fahren مع وسائل النقل والرحلات: mit dem Bus fahren، mit der Bahn fahren، mit dem Fahrrad fahren، كما تستخدم للسفر إلى مدينة. ويشيع fliegen عند الحديث عن رحلة جوية، مثل nach Tunis fliegen. أما gehen فلها معنى المشي على القدمين، وتستعمل أيضاً بمعنى الذهاب أو التوجه إلى مكان بحسب التركيب: Ich gehe nach Berlin لا تعني وحدها بالضرورة أنني سأمشي كل الطريق. إذا ذكرت وسيلة القطار صراحةً فالصياغة المحايدة المعتادة هي Ich fahre mit dem Zug nach Berlin؛ وقد تقول Ich komme mit dem Zug nach Berlin عندما يكون التركيز على الوصول.\n\nإذا أردت التصريح بالمشي، فالتعبير الشائع هو zu Fuß gehen. لا تترجم «مشياً» حرفياً إلى mit Fuß. هذه عبارة اصطلاحية، بينما mit dem Bus وmit der Bahn عبارتان بحرف جر وأداة في Dativ.\n\nتعرّف إلى كلمات المحطة بدقة: die Haltestelle موقف/محطة لوسيلة نقل؛ der Bahnsteig رصيف ينتظر عليه المسافر؛ das Gleis مسار السكة، ويظهر رقمه على لوحة الرحلات لتحديد قطار أو منصة. والأفعال einsteigen وaussteigen وumsteigen منفصلة في الجملة الرئيسية: Ich steige aus، وIch steige in Köln um. هذه أمثلة استعمالية، وليست قائمة بكل وسائل النقل أو أفعال الحركة.",
      whyAr: "حالة الاسم بعد mit تحددها Rektion الحرف، كما يشرح Duden: mit يحكم Dativ. لذلك نقول mit dem Bus حتى لو كانت الجملة تسأل عن رحلة إلى مدينة؛ الحركة لا تحول الاسم بعد mit إلى Akkusativ. عند الجمع نلاحظ أيضاً نهاية الاسم: mit den Bussen.\n\nويمنعك السياق من تحويل قاموس صغير إلى قاعدة مطلقة. يورد Duden استعمال gehen بمعنى الانتقال أو قصد مكان، إلى جانب معنى المشي؛ كما يورد fahren مع الدراجة والقطار والحافلة والرحلات. لذلك لا تصحح Ich gehe nach Berlin من دون قرينة، ولا تساوها دائماً بالمشي. حين تذكر وسيلة نقل محددة اختر الفعل الذي يصفها عادةً، مثل mit dem Zug fahren أو mit dem Flugzeug fliegen.\n\nوالتمييز بين Bahnsteig وGleis مهم لفهم لافتة أو سؤال في المحطة: الأول مكان وقوف المسافر، والثاني مسار القطار أو الرقم الظاهر على اللوحة. الشرح هنا يتعلمك العبارات المطلوبة في النصوص المحددة؛ لا يقيس وحده القدرة على التنقل الفعلي أو فهم كل إعلان.",
      table: {
        "title": "الوسيلة والصيغة الشائعة في هذا المثال",
        "columns": [
          "الاسم",
          "بعد mit + Dativ",
          "فعل/مثال"
        ],
        "rows": [
          {
            "label": "der Bus",
            "cells": [
              "mit dem Bus",
              "Ich fahre mit dem Bus."
            ]
          },
          {
            "label": "die Bahn",
            "cells": [
              "mit der Bahn",
              "Sie fährt mit der Bahn."
            ]
          },
          {
            "label": "das Auto",
            "cells": [
              "mit dem Auto",
              "Wir fahren mit dem Auto."
            ]
          },
          {
            "label": "das Fahrrad",
            "cells": [
              "mit dem Fahrrad",
              "Er fährt mit dem Fahrrad."
            ]
          },
          {
            "label": "die Busse (جمع)",
            "cells": [
              "mit den Bussen",
              "Wir fahren mit den Bussen."
            ]
          },
          {
            "label": "المشي",
            "cells": [
              "zu Fuß",
              "Ich gehe zu Fuß."
            ]
          },
          {
            "label": "das Flugzeug",
            "cells": [
              "mit dem Flugzeug",
              "Sie fliegt mit dem Flugzeug."
            ]
          }
        ]
      },
      examples: [
        {
          "de": "Ich fahre mit dem Bus zur Arbeit.",
          "ar": "أذهب إلى العمل بالحافلة."
        },
        {
          "de": "Wie kommst du zur Uni? — Mit der U-Bahn.",
          "ar": "كيف تصل إلى الجامعة؟ — بمترو الأنفاق."
        },
        {
          "de": "Zum Supermarkt gehe ich zu Fuß.",
          "ar": "أذهب إلى السوبرماركت مشياً."
        },
        {
          "de": "Wir fahren mit dem Auto in die Stadt.",
          "ar": "نذهب بالسيارة إلى المدينة."
        },
        {
          "de": "Sie fliegt nach Tunis.",
          "ar": "تسافر جواً إلى تونس."
        },
        {
          "de": "Er fährt mit dem Zug nach Berlin.",
          "ar": "يسافر بالقطار إلى برلين."
        },
        {
          "de": "Ich steige in Köln um.",
          "ar": "أبدّل وسيلة النقل في كولونيا."
        },
        {
          "de": "Der Zug fährt von Gleis zwei ab.",
          "ar": "ينطلق القطار من المسار الثاني."
        },
        {
          "de": "Die Haltestelle liegt gegenüber dem Park.",
          "ar": "موقف النقل مقابل الحديقة."
        }
      ],
      comparisonWithArabic: "في العربية يمكن التعبير عن الوسيلة بحرف الباء في «بالحافلة»، أو بفعل مثل «أركب» أو «أسافر» وفق الجملة. وفي الألمانية تظهر الوسيلة غالباً في تركيب mit + اسم وأداة في Dativ، مثل mit dem Bus. هذا فرق في بناء العبارة، لا دليل على تطابق Dativ مع الجرّ العربي؛ فترجمة الجملة كاملة لا تنقل وظيفة كل حالة كلمةً بكلمة.\n\nوقد يستخدم المتعلم العربي فعلاً عاماً مثل «أذهب» مع عبارة الوسيلة، وهذا ممكن لغوياً في العربية. في الألمانية أيضاً للفعل gehen معنى يتجاوز المشي، لذلك لا نحكم على Ich gehe nach Berlin بأنها خطأ أو بأنها تعني المشي حصراً. لكن إذا سمت الجملة القطار فالفعل المحايد المعتاد هو fahren: Ich fahre mit dem Zug. ومع الرحلة الجوية يشيع fliegen. احفظ هذه الأنماط بوصفها اختيارات مرتبطة بالوسيلة والسياق، لا مقابلات آلية بين فعل عربي وفعل ألماني.\n\nكما أن zu Fuß تعبير ألماني خاص للمشي، في حين أن عبارة «على القدمين» في العربية صياغة تفسيرية. التشابه في المعنى لا يعني أن نترجم كل جزء على حدة؛ احفظ zu Fuß gehen كتركيب جاهز.",
      eselsbruecke: "بعد mit اسأل عن الاسم: dem Bus، der Bahn، dem Auto، den Bussen. وللتصريح بالمشي احفظ zu Fuß gehen. أما gehen وحدها فلا تحكم منها على وسيلة الرحلة.",
      commonMistakes: [
        {
          "wrong": "Ich fahre mit den Bus.",
          "right": "Ich fahre mit dem Bus.",
          "whyAr": "Bus مفرد مذكر، وبعد mit نستخدم Dativ: dem Bus. أما den فيظهر هنا في صيغة جمع/أو استعمالات أخرى، وليس أداة هذا الاسم المفرد في المثال.",
          "classification": "error"
        },
        {
          "wrong": "Ich gehe mit Fuß.",
          "right": "Ich gehe zu Fuß.",
          "whyAr": "للتعبير عن المشي نستعمل العبارة الشائعة zu Fuß gehen. لا نبنيها بنقل حرف الجر العربي كلمةً بكلمة، ولا نقول mit Fuß في هذا المعنى.",
          "classification": "error"
        },
        {
          "wrong": "Ich gehe nach Berlin.",
          "right": "Ich fahre nach Berlin.",
          "whyAr": "الجملة الأولى ممكنة في سياقها ولا تثبت وحدها أن المتكلم يمشي. إذا أردت أن تذكر رحلة القطار تحديداً فقل Ich fahre mit dem Zug nach Berlin؛ هنا يحدد السياق اختيار الفعل، لذلك لا نصحح gehen مطلقاً.",
          "classification": "contextual-alternative"
        },
        {
          "wrong": "Ich fliege mit dem Zug nach Berlin.",
          "right": "Ich fahre mit dem Zug nach Berlin.",
          "whyAr": "في المثال يذكر المتكلم Zug، أي القطار؛ الفعل المحايد لرحلة القطار هو fahren، أما fliegen فيوصف به السفر بالطائرة. التصحيح متعلق بوسيلة محددة، لا بقاعدة أن فعلاً واحداً يناسب كل حركة.",
          "classification": "error"
        }
      ],
      relatedRuleComparison: {
        "title": "mit + Dativ مقابل in المكانية",
        "content": "mit يحكم Dativ في mit dem Bus بصرف النظر عن وجهة الرحلة. أما in في الاستعمال المكاني فيتغير بحسب العلاقة: in der Stadt لوصف موقع/حركة داخل المكان، وin die Stadt عندما تكون المدينة وجهة. لا تجعل اختلاف الحرفين قاعدة واحدة عن الحركة."
      },
    },
    {
      id: "t4",
      titleAr: "ضمائر المفعول: استبدال اسم المكان",
      titleDe: "Akkusativpronomen: Ortsnamen ersetzen",
      explanationAr: "عندما تكرر أسماء الأماكن في محادثة قصيرة، تستطيع استبدال مفعول مباشر بضمير: Der Bahnhof? Ich sehe ihn dort. ويجب اختيار الضمير بحسب الاسم الألماني الذي يعود إليه، لا بحسب جنس الشيء في الواقع ولا جنس ترجمته العربية.\n\nقارن أدوات الأسماء بالضمائر في النصب: der Bahnhof → ihn؛ die Apotheke → sie؛ das Kino → es؛ die Haltestellen (جمع) → sie. إذا كان الاسم مذكراً يكون المفعول ihn، والمؤنث المفرد sie، والمحايد es، والجمع sie. تختلف هذه الصيغ أحياناً عن ضمائر الفاعل: er يصبح ihn في Akkusativ، بينما sie وes يبقيان بالشكل نفسه في هذين المثالين. أما ich/du/wir/ihr/Sie فلها أيضاً صيغ مفعول مثل mich/dich/uns/euch/Sie؛ راجع الجدول ولا تختزل التصريف في ضمير واحد.\n\nتستعمل sehen وkennen وnehmen وfinden مفعولاً مباشراً في أمثلة الدرس: Ich kenne den Bahnhof → Ich kenne ihn. وفي الجملة الرئيسية يأتي الفعل المصرف عادةً في الموضع الثاني، ويظهر الضمير غالباً مبكراً في العبارة المحايدة: Ich sehe ihn heute. وإذا بدأنا بظرف نقول Dort sehe ich ihn؛ بقي الفعل في الموضع الثاني ثم جاء الفاعل والضمير. قد يتغير ترتيب المكونات للتوكيد أو تنظيم المعلومة، لذلك لا تحفظ قاعدة «الضمير دائماً مباشرة بعد الفعل».\n\nفي وصف الطريق قد تقول Gehen Sie an der Kirche vorbei أو Gehen Sie an ihr vorbei. هنا لا يحل الضمير مفعولاً مباشراً؛ بل يعود إلى Kirche في تركيب an jemandem/etwas vorbei، الذي يأتي في هذا النمط مع Dativ: ihr. لا تخلط بين ihn بوصفه مفعولاً لـsehen وبين ihr بعد حرف الجر. هذه أمثلة مختلفة الوظيفة، وإن ظهرت معاً في حوار طريق واحد.",
      whyAr: "يربط الضمير الاسم الألماني بأداته، لا بمقابله في لغة أخرى. قد تكون كلمة عربية مؤنثة، لكن إذا كان الاسم الألماني der Bahnhof فالمفعول المباشر يعود إليه بصيغة ihn. لهذا السبب من المفيد حفظ der Bahnhof وdie Apotheke وdas Kino كوحدات فيها الأداة والاسم.\n\nكما أن السؤال عن الحالة يأتي من وظيفة الكلمة في الجملة: sehen يأخذ مفعولاً مباشراً في Ich sehe ihn، بينما تركيب an ... vorbei يطلب Dativ في المثال. مجرد وجود طريق أو حركة لا يقرر حالة الضمير؛ الحرف والتركيب هما ما يحددانها. ويقدم IDS Grammis التمييز المكاني على أساس علاقة العبارة، لا على أساس حركة الجسم وحدها.\n\nتساعدك المقارنة بأدوات النصب التي تعلمتها سابقاً في تذكر den Bus وihn، لكنها لا تعني أن الضمير هو الأداة نفسها أو أن معرفة Akkusativ للأسماء تُتقن كل الضمائر تلقائياً. التدريبات هنا تقيس اختيار صيغ بعينها، ولا تقيس حديثاً حراً أو إتقاناً عاماً للضمائر.",
      table: {
        "title": "من أداة الاسم إلى ضمير المفعول المباشر",
        "columns": [
          "الاسم/الشخص",
          "Nominativ (فاعل)",
          "Akkusativ (مفعول)"
        ],
        "rows": [
          {
            "label": "der Bahnhof",
            "cells": [
              "er",
              "ihn"
            ]
          },
          {
            "label": "die Apotheke",
            "cells": [
              "sie",
              "sie"
            ]
          },
          {
            "label": "das Kino",
            "cells": [
              "es",
              "es"
            ]
          },
          {
            "label": "die Haltestellen (جمع)",
            "cells": [
              "sie",
              "sie"
            ]
          },
          {
            "label": "ich / du",
            "cells": [
              "ich / du",
              "mich / dich"
            ]
          },
          {
            "label": "wir / ihr",
            "cells": [
              "wir / ihr",
              "uns / euch"
            ]
          },
          {
            "label": "المخاطبة الرسمية",
            "cells": [
              "Sie",
              "Sie"
            ]
          }
        ]
      },
      examples: [
        {
          "de": "Wo ist der Bahnhof? — Ich sehe ihn dort.",
          "ar": "أين محطة القطار؟ — أراها هناك. (der Bahnhof → ihn)"
        },
        {
          "de": "Kennst du die Apotheke? — Ja, ich kenne sie.",
          "ar": "هل تعرف الصيدلية؟ — نعم، أعرفها."
        },
        {
          "de": "Das Kino ist neu. Ich finde es sehr schön.",
          "ar": "السينما جديدة. أجدها جميلة جداً."
        },
        {
          "de": "Nimmst du den Bus? — Ja, ich nehme ihn.",
          "ar": "هل تستقل الحافلة؟ — نعم، أستقلها."
        },
        {
          "de": "Siehst du mich?",
          "ar": "هل تراني؟"
        },
        {
          "de": "Wir besuchen die Haltestelle. Wir suchen sie.",
          "ar": "نمرّ بالموقف. نبحث عنه."
        },
        {
          "de": "Gehen Sie an der Kirche vorbei. — Gehen Sie an ihr vorbei.",
          "ar": "مرّ بجانب الكنيسة. — مرّ بجانبها."
        },
        {
          "de": "Dort sehe ich ihn.",
          "ar": "هناك أراه. (Dort في البداية، ثم الفعل، فالفاعل، فالضمير)"
        }
      ],
      comparisonWithArabic: "قد يظهر مفعول الفعل في العربية متصلاً بالفعل: «أراه» و«أعرفها»، بينما يأتي في المثال الألماني كلمة مستقلة بعد الفعل: Ich sehe ihn / Ich kenne sie. وتملك العربية أيضاً ضمائر منفصلة وصيغاً توكيدية مثل «إياه»؛ لذلك لا نقول إن العربية تفتقر إلى ضمير المفعول، بل نلاحظ اختلاف طريقة بناء الجملة.\n\nويتحدد الضمير الألماني بحسب جنس الاسم الألماني: der Bahnhof → ihn، حتى لو كان المقابل العربي «المحطة» مؤنثاً. وقد يتطابق جنس كلمتين بين اللغتين مصادفةً، لكن لا توجد قاعدة تلزم بذلك. كذلك لا تساو Akkusativ بنصب العربية في كل وظيفة، ولا Dativ بجرّها؛ تعلّم ما يحكم الفعل أو حرف الجر في التركيب الألماني.\n\nتساعدك أمثلة «أراه» وIch sehe ihn على تذكر معنى الضمير، لكنها لا تبرر حذف الضمير أو تغيير صيغته في كل الجمل. اقرأ الاسم الذي يعود إليه، وحدد هل هو مفعول مباشر أم يأتي بعد حرف جر، ثم اختر الشكل الألماني الملائم.",
      eselsbruecke: "اسأل أولاً: إلى أي اسم ألماني يعود الضمير؟ der Bahnhof → ihn، die Apotheke → sie، das Kino → es. ثم اسأل عن وظيفة الضمير: مفعول لـsehen أم بعد حرف جر مثل an ... vorbei؟",
      commonMistakes: [
        {
          "wrong": "Der Bahnhof? Ich sehe es dort.",
          "right": "Der Bahnhof? Ich sehe ihn dort.",
          "whyAr": "الضمير يعود إلى الاسم الألماني der Bahnhof، وهو مذكر؛ لذلك يأتي ihn بوصفه مفعولاً لـsehen. لا تختَر es لأن المحطة شيء غير عاقل أو لأن ترجمتها العربية مؤنثة.",
          "classification": "error"
        },
        {
          "wrong": "Ich kenne er nicht.",
          "right": "Ich kenne ihn nicht.",
          "whyAr": "er صيغة فاعل، أما الفعل kennen في هذا المثال فيأخذ مفعولاً مباشراً في Akkusativ: ihn. اختر الشكل من وظيفة الضمير في الجملة، لا من معنى «هو» وحده.",
          "classification": "error"
        },
        {
          "wrong": "Siehst du mich? — Ja, ich sehe du.",
          "right": "Siehst du mich? — Ja, ich sehe dich.",
          "whyAr": "du ضمير فاعل، بينما dich صيغة المفعول في هذا المثال بعد sehen. راجع صف الضمير في الجدول بدلاً من نقل صيغة الفاعل إلى موضع المفعول.",
          "classification": "error"
        },
        {
          "wrong": "Gehen Sie an sie vorbei.",
          "right": "Gehen Sie an ihr vorbei.",
          "whyAr": "في هذا النمط يأتي الضمير بعد an ... vorbei بصيغة Dativ: sie تتحول إلى ihr. هذا حكم التركيب مع الحرف، لا قاعدة تقول إن كل حركة تأخذ Dativ؛ ميّز ذلك من المفعول ihn بعد sehen.",
          "classification": "error"
        }
      ],
      relatedRuleComparison: {
        "title": "المفعول المباشر مقابل الضمير بعد حرف الجر",
        "content": "في Ich sehe den Bahnhof → Ich sehe ihn، الفعل sehen يتصل بمفعول Akkusativ. وفي Gehen Sie an der Kirche vorbei → an ihr vorbei يأتي Dativ في تركيب an ... vorbei. لا تجعل التشابه في مرجع الضمير دليلاً على أن الحالتين واحدة."
      },
    },
  ],
  reading: {
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
  },
  listening: {
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
  },
  pronunciation: {
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
  },
  writing: [
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
  ],
  practiceBank: [
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
      "instructionAr": "افحص الجملة ولا تفترض وجود خطأ؛ اختر التصحيح أو «لا خطأ»:",
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
  ],
  fehlerUndTipps: {
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
  },
  miniTest: [
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
  ],
  flashcards: [
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
      "exampleAr": "الحافلة؟ أستقلها.",
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
  ],
  /* الوساطة والتفاعل — أنشطة مقترحة لا أدلة إتقان تلقائية */
  mediation: [
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
  ],
  interaction: [
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
  ]
};
