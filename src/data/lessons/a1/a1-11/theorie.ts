/**
 * a1-11 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a1-11.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
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
          "ar": "أين محطة القطار؟ — أراه هناك. (der Bahnhof → ihn)"
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
          "ar": "هل تستقل الحافلة؟ — نعم، أستقلّه."
        },
        {
          "de": "Siehst du mich?",
          "ar": "هل تراني؟"
        },
        {
          "de": "Wir suchen die Haltestelle. Wir finden sie.",
          "ar": "نبحث عن الموقف. نجدها."
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
  ];
