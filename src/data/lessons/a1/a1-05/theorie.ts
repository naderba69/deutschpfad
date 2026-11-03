/**
 * a1-05 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a1-05.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الأفعال المنفصلة (Trennbare Verben)",
      titleDe: "Trennbare Verben: aufstehen, fernsehen, einkaufen",
      explanationAr: "يتكوّن الفعل المنفصل من جزء أول (Partikel) وفعل أساس، لكن احفظهما في المعجم بوصفهما فعلاً واحداً؛ فالمعنى ليس دائماً حاصل ترجمة كل جزء حرفياً. **aufstehen** تعني «ينهض/يقوم من الفراش»، و**fernsehen** تعني «يشاهد التلفاز»، و**einkaufen** تعني «يتسوّق».\n\nفي الجملة الخبرية الرئيسية البسيطة، نصرّف الفعل الأساس في المركز الثاني، ونضع البادئة المنفصلة في نهاية الجملة: «Ich **stehe** um sieben Uhr **auf**»؛ «Sie **kauft** heute **ein**». وإذا بدأنا بظرف، تبقى القاعدة نفسها: «Am Samstag **kaufe** ich im Supermarkt **ein**». وفي سؤال نعم/لا يأتي الفعل المصرف أولاً وتبقى البادئة في النهاية: «**Stehst** du früh **auf**?»\n\nلا تنفصل الأجزاء في كل تركيب: مع الفعل الناقص يبقى المصدر موصولاً («Ich muss früh **aufstehen**»)، وفي الجملة التابعة يعود الفعل إلى آخر الجملة موصولاً («…, weil ich früh **aufstehe**»)، ومع **zu** تدخل الكلمة بين البادئة والفعل («auf**zu**stehen»). تُكتب صيغة المصدر كلمةً واحدة، وتظهر في بعض المعاجم بعلامة توضيحية: auf|stehen.\n\nمن البوادئ الشائعة في الأفعال المنفصلة: **auf-, an-, aus-, ein-, mit-, ab-, fern-, vor-, nach-, zu-**؛ وفي الجملة المنفصلة تكون البادئة منبورة غالباً. النبر قرينة نافعة لا بديلٌ عن حفظ الفعل مع مثاله. أما البوادئ غير المنفصلة الشائعة فثمانٍ: **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**؛ فقارن **AUF**stehen بـ ver**STEH**en. وبعض البوادئ مثل **durch-, über-, um-, unter-** قد تتصرف على أكثر من وجه بحسب الفعل والمعنى؛ لذا احفظ المثال المعجمي كاملاً ولا تعمم قاعدة واحدة على كل فعل.",
      whyAr: "تظهر هذه الأفعال في جمل يومية عن النهوض والتسوّق والاتصال ومشاهدة التلفاز، لذلك تساعدك على فهم حوار الروتين وبناء جملة بسيطة. المهم ليس نسبةً رقمية لعددها، بل أن تميّز الفعل المصرف من بادئته: بهذه الطريقة لا تضعهما متجاورين في الجملة الخبرية، وتنتبه إلى البادئة التي تكمل معنى الفعل عند سماع الجملة.",
      table: {
        title: "أشهر الأفعال المنفصلة اليومية",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "aufstehen", cells: ["ينهض من الفراش", "Ich stehe um 7 auf."] },
          {
            label: "fernsehen",
            cells: ["يشاهد التلفاز", "Wir sehen abends fern."],
          },
          { label: "einkaufen", cells: ["يتسوق", "Sie kauft heute ein."] },
          { label: "anfangen", cells: ["يبدأ", "Der Kurs fängt um 9 an."] },
          { label: "mitkommen", cells: ["ينضمّ/يأتي معك", "Kommst du mit?"] },
          { label: "aufräumen", cells: ["يرتب", "Ich räume das Zimmer auf."] },
        ],
      },
      examples: [
        {
          de: "Ich stehe jeden Tag um sieben Uhr auf.",
          ar: "أنهض كلّ يوم في السابعة. (البادئة المنفصلة في نهاية الجملة)",
        },
        {
          de: "Wir sehen abends zwei Stunden fern.",
          ar: "نشاهد التلفاز ساعتين مساءً.",
        },
        {
          de: "Sie kauft am Samstag im Supermarkt ein.",
          ar: "تتسوّق يوم السبت في السوبرماركت. (في هذا المثال تأتي البادئة بعد بقية الجملة)",
        },
        { de: "Der Kurs fängt um neun Uhr an.", ar: "يبدأ الدرس في التاسعة." },
        {
          de: "Ich muss morgen früh aufstehen.",
          ar: "عليّ أن أنهض باكراً غداً. (مع الفعل الناقص يبقى المصدر موصولاً)",
        },
        {
          de: "Rufst du mich heute Abend an?",
          ar: "أتتّصل بي هذا المساء؟ (في السؤال ينفصل أيضاً)",
        },
        {
          de: "Ich verstehe die Frage nicht.",
          ar: "لا أفهم السؤال. (ver‑ بادئة غير منفصلة ⟵ لا تتحرّك)",
        },
        {
          de: "Am Sonntag räume ich meine Wohnung auf.",
          ar: "أرتّب شقّتي يوم الأحد.",
        },
      ],
      comparisonWithArabic: "تستعمل العربية والألمانية وسائل اشتقاق تغيّر معنى الفعل، مثل «خرج» و«استخرج»، لكن الجزء الألماني المنفصل قد ينتقل إلى نهاية الجملة. قارن «أنهض في السابعة» بـ«Ich stehe um sieben Uhr auf»: الفعل المصرف **stehe** يأتي في المركز الثاني، و**auf** في نهاية الجملة. ليست الفكرة أن العربية تبدأ بالفعل دائماً؛ فترتيبها يتغير بحسب السياق. الاختلاف المقصود هنا هو موضع البادئة الألمانية بعد تصريف الفعل.",
      eselsbruecke: "في الجملة الخبرية الرئيسية البسيطة: **صرّف الفعل في المركز الثاني، وضع البادئة المنفصلة في النهاية**. مع الفعل الناقص أو في الجملة التابعة يتغيّر الشكل؛ احفظ المثال كاملاً ولا تطبق القاعدة خارج سياقها.",
      commonMistakes: [
        {
          wrong: "Ich aufstehe um sieben.",
          right: "Ich stehe um sieben auf.",
          whyAr:
            "في الجملة الخبرية الرئيسية البسيطة لا يبقى المصدر موصولاً بعد الفاعل؛ نصرّف الفعل الأساس ونضع البادئة المنفصلة في نهاية الجملة: Ich stehe um sieben auf. وتختلف البنية مع المصدر والجملة التابعة.",
        },
        {
          wrong: "Du steht um sieben auf.",
          right: "Du stehst um sieben auf.",
          whyAr:
            "هذا خطأ تصريف لا خطأ موضع البادئة: مع du في المضارع نقول stehst، وتبقى auf في نهاية الجملة الرئيسية.",
        },
        {
          wrong: "Ich verstehe das auf.",
          right: "Ich verstehe das.",
          whyAr:
            "الفعل verstehen غير منفصل، لذلك تبقى ver- متصلة بالفعل. ومن البوادئ غير المنفصلة الشائعة ثمانٍ: be-, emp-, ent-, er-, ge-, miss-, ver-, zer-. النبر قرينة مفيدة، لكن احفظ الفعل مع مثال.",
        },
        {
          wrong: "Ich muss früh stehe auf.",
          right: "Ich muss früh aufstehen.",
          whyAr:
            "خلط بنيتين: مع الفعل الناقص يبقى الفعل المنفصل مصدراً موصولاً في نهاية الجملة: Ich muss früh aufstehen. لا تصرّف الفعل ولا تفصل بادئته في هذا التركيب.",
        },
      ],
      relatedRuleComparison: {
        title: "قوس الجملة (Satzklammer) في الأفعال المنفصلة والناقصة",
        content: "قوس الجملة (Satzklammer) يوضح موضع أجزاء الفعل في أمثلة مختلفة: في الجملة الرئيسية «Ich **stehe** um sieben **auf**»، ومع الفعل الناقص «Ich **muss** um sieben **aufstehen**»، وفي الماضي التام «Ich **bin** um sieben **aufgestanden**»، وفي التابعة «…, weil ich um sieben **aufstehe**». تتشابه الأمثلة في إحاطة الفعل المصرف بمواد تكمّل المعنى، لكن لكل تركيب قاعدته؛ لا تخلط بين فصل البادئة في المضارع وكتابة المصدر أو اسم المفعول كلمةً واحدة.",
      },
    },
    {
      id: "t2",
      titleAr: "قراءة الساعة وأوقات اليوم",
      titleDe: "Die Uhrzeit und die Tageszeiten",
      explanationAr: "للتعبير عن الساعة شكلان شائعان. في الجداول والإعلانات والصياغة الرسمية قد ترى نظام 24 ساعة: 16:20 = **sechzehn Uhr zwanzig**. وفي الحديث اليومي كثيراً ما يُستعمل نظام 12 ساعة؛ في الساعة الكاملة يمكن ذكر **Uhr** أو حذفها إذا كان السياق واضحاً («Es ist acht (Uhr)»). لا يعني ذلك أن أحد الشكلين صحيح والآخر خطأ؛ اختر الصيغة التي تناسب الموقف.\n\nفي النمط اليومي، تبيّن **nach** و**vor** الدقائق بالنسبة إلى الساعة: **fünf nach acht** = 8:05، و**zwanzig vor neun** = 8:40. وللربع نقول **Viertel nach acht** = 8:15 و**Viertel vor neun** = 8:45. أما النصف فيُسمّى باسم الساعة التالية: **halb neun = 8:30**، وعادة لا نضيف **Uhr** بعد صيغة **halb**. توجد صيغ إقليمية أخرى للربع؛ في هذا الدرس نستخدم **Viertel nach/vor**.\n\nمن أسماء أجزاء اليوم: **der Morgen, der Vormittag, der Mittag, der Nachmittag, der Abend**، و**die Nacht**. لا يلزم ربطها بحدود ساعات ثابتة؛ فالاستعمال يختلف. نقول في التعابير الشائعة هنا **am Morgen/am Nachmittag/am Abend**، ونقول غالباً **in der Nacht**. وانتبه إلى الكتابة: **der Morgen** اسم «الصباح» بحرف كبير، أما **morgen** فظرف «غداً» بحرف صغير.\n\nللسؤال قل **Wie spät ist es?** أو **Wie viel Uhr ist es?**؛ ولوقت الفعل استعمل **um**: «Der Kurs beginnt um neun Uhr». وللفترة من وقت إلى آخر استعمل التركيب **von … bis …**: «Ich arbeite von acht bis sechzehn Uhr». وتفيد **gegen** معنى «نحو/قرابة» («gegen acht»)، و**ab** معنى «ابتداءً من» («ab Montag»).",
      whyAr: "معرفة الوقت تساعدك على فهم المواعيد اليومية ووصف روتينك من غير لبس. والفرق بين **halb neun** و**neun Uhr** مهم لأن الخطأ في اسم الساعة قد يغيّر الموعد نصف ساعة أو ساعة كاملة؛ لذلك نتدرّب على قراءة الوقت وكتابته في أكثر من صيغة. هذا تدريب على تعبير يومي مناسب للمستوى المبتدئ، لا ادعاء بأن موضوعاً بعينه سيظهر حتماً في اختبار محدد.",
      table: {
        title: "أوقات اليوم والأمثلة",
        columns: ["الوقت", "العربية", "مثال"],
        rows: [
          { label: "am Morgen", cells: ["صباحاً", "Ich stehe am Morgen auf."] },
          {
            label: "am Vormittag",
            cells: ["قبل الظهر", "Wir arbeiten am Vormittag."],
          },
          { label: "am Mittag", cells: ["ظهراً", "Ich esse am Mittag."] },
          {
            label: "am Nachmittag",
            cells: ["بعد الظهر", "Wir lernen am Nachmittag."],
          },
          { label: "am Abend", cells: ["مساءً", "Sie sieht am Abend fern."] },
          {
            label: "in der Nacht",
            cells: ["ليلاً", "Ich schlafe in der Nacht."],
          },
        ],
      },
      examples: [
        {
          de: "Wie spät ist es? — Es ist acht Uhr.",
          ar: "كم الساعة؟ — الثامنة.",
        },
        {
          de: "Es ist halb neun.",
          ar: "الساعة الثامنة والنصف. (لا التاسعة والنصف!)",
        },
        { de: "Es ist Viertel vor sieben.", ar: "السابعة إلا ربعاً، أي ٦:٤٥." },
        {
          de: "Der Zug fährt um sechzehn Uhr zwanzig.",
          ar: "يغادر القطار في ١٦:٢٠. (صيغة رسمية)",
        },
        {
          de: "Am Morgen trinke ich Kaffee, am Abend Tee.",
          ar: "أشرب القهوة صباحاً والشاي مساءً.",
        },
        {
          de: "In der Nacht schlafe ich schlecht.",
          ar: "أنام بصعوبة في الليل. (التعبير الشائع هنا: in der Nacht)",
        },
        {
          de: "Ich arbeite von acht bis sechzehn Uhr.",
          ar: "أعمل من الثامنة إلى الرابعة عصراً.",
        },
        {
          de: "Ich komme gegen halb acht, ist das okay?",
          ar: "آتي نحو السابعة والنصف، أيناسبك؟",
        },
      ],
      comparisonWithArabic: "في العربية نقول «الثامنة والنصف»، أي نبدأ بالساعة التي نحن فيها؛ أما **halb neun** فتسمّي الساعة التالية وتعني 8:30. لذلك لا تترجم كلمة **halb** وحدها، بل احفظ التعبير مع رقمه. كذلك تقابل «في الصباح» في هذا التركيب **am Morgen**، لا **in der Morgen**؛ بينما التعبير الشائع لليل هو **in der Nacht**. احفظ حروف الجر ضمن العبارات الكاملة، لأن المقابل العربي «في» لا يحدد وحده أي حرف ألماني تختار.",
      eselsbruecke: "**halb** تشير إلى منتصف الطريق نحو الساعة التالية: **halb neun = 8:30**. ولأجزاء اليوم احفظ العبارة كاملة: **am Morgen**, **am Abend**, **in der Nacht**. وللمدى الزمني في أمثلة الدرس: **von … bis …**.",
      commonMistakes: [
        {
          wrong: "halb neun = 9:30",
          right: "halb neun = 8:30",
          whyAr:
            "تسمّي halb الساعة التالية: halb neun تعني 8:30، أي منتصف الطريق بين الثامنة والتاسعة. احفظ مثالاً مع رقمه ولا تخلط اسم الساعة المذكورة بالساعة التي تشير إليها.",
        },
        {
          wrong: "in der Morgen",
          right: "am Morgen",
          whyAr:
            "في التعبير الشائع عن الصباح نقول am Morgen. احفظ حرف الجر مع اسم الوقت: نقول أيضاً am Abend، بينما التعبير الشائع عن الليل هو in der Nacht.",
        },
        {
          wrong: "Ich arbeite von acht zu sechzehn Uhr.",
          right: "Ich arbeite von acht bis sechzehn Uhr.",
          whyAr:
            "في هذا المثال نستخدم von … bis … لذكر بداية فترة العمل ونهايتها. أما zu فتظهر في تراكيب الاتجاه مثل Ich gehe zum Arzt أو zur Schule؛ لا نعمّم تركيباً واحداً على كل استعمالات المدى.",
        },
        {
          wrong: "Es ist acht dreißig Uhr.",
          right: "Es ist acht Uhr dreißig. / Es ist halb neun.",
          whyAr:
            "في قراءة الوقت مع الدقائق نقول مثلاً acht Uhr dreißig، أو نستعمل الصيغة اليومية halb neun. لا تقل Es ist acht dreißig Uhr في هذا التمرين؛ موضع Uhr هنا قبل الدقائق.",
        },
      ],
      relatedRuleComparison: {
        title: "am · um · in · von…bis — أدوات الزمن الأربع وكيف لا تخلطها",
        content: "احفظ تراكيب الزمن في مجموعات مع أمثلتها: **um** مع الساعة («um acht Uhr»)، و**am** مع أجزاء اليوم وأيام الأسبوع («am Morgen», «am Montag»)، و**im** مع الشهر في أمثلة مثل «im Januar». نقول **in der Nacht** في التعبير الشائع عن الليل. وللمدى نستخدم **von … bis …**، وللتقريب **gegen acht**، وللبداية **ab Montag**. هذه أنماط استعمال مفيدة وليست معادلة آلية تشمل كل تعبير زمني؛ الأفضل حفظ حرف الجر مع العبارة التي يرد فيها.",
      },
    },
    {
      id: "t3",
      titleAr: "كم مرّة؟ ظروف التكرار وموضعها في الجملة",
      titleDe: "Wie oft? Häufigkeitsadverbien",
      explanationAr: "تساعد ظروف التكرار على وصف العادات: **immer** (دائماً)، **fast immer** (تقريباً دائماً)، **meistens** (في الغالب)، **oft** (كثيراً)، **manchmal** (أحياناً)، **selten** (نادراً)، **fast nie** (نادراً جداً/تقريباً أبداً)، **nie** (أبداً). يمكن ترتيبها تقريباً من الأكثر إلى الأقل تكراراً، لكن كلمات مثل **manchmal** و**oft** لا تقابل نسبة مئوية ثابتة؛ معناها يعتمد على السياق والمتكلم.\n\nفي الجملة الرئيسية البسيطة يأتي ظرف التكرار غالباً بعد الفعل المصرف: «Ich **stehe immer** früh auf»؛ «Er **sieht selten** fern». وقد تتغير مواضع الكلمات مع الضمائر أو بقية الجملة. ويمكن تقديم الظرف للتأكيد: «**Manchmal sehe ich** fern». عند بدء الجملة بالظرف يبقى الفعل المصرف في المركز الثاني، فيأتي الفاعل بعده؛ لذلك لا نقول في الجملة الخبرية المقصودة هنا «Manchmal ich sehe fern».\n\nتعني **nie** «أبداً»، وتكفي وحدها في جملة بسيطة مثل «Ich gehe **nie** ins Kino». إذا كان هذا هو قصدك فلا تضف **nicht**؛ أما اجتماع أدوات النفي في سياقات أخرى فيتعلق بالمعنى والاستعمال، لذلك لا نعمّم قاعدة مطلقة على كل تركيب.\n\nإذا اجتمعت عدة معلومات في الجملة، فترتيب **TeKaMoLo** (زمان، سبب، كيفية، مكان) تذكيرٌ مفيد للترتيب المحايد، لا قانون جامد: «Ich fahre **jeden Morgen** mit dem Bus zur Arbeit». وقد يتغير الترتيب للتأكيد أو بحسب السياق. وأخيراً، **oft** يصف تكرار الفعل («Ich arbeite oft»)، بينما **viel** يصف كثرة العمل أو مقداره («Ich arbeite viel»).",
      whyAr: "الفرق بين ذكر فعل واحد ووصف عادة يتضح بكلمات مثل **immer** و**manchmal** و**selten**؛ فهي تجعل الحديث عن اليوم أكثر تحديداً. وتوفر هذه الكلمات فرصة عملية لمراجعة ترتيب الفعل في الجملة الرئيسية: «Manchmal sehe ich fern» يبدأ بظرف، لكن الفعل المصرف يبقى ثانياً. يستطيع المتعلم عندها التعبير عن روتين مألوف بعبارات بسيطة، من دون حفظ نسب رقمية لا تعبر عن معنى ثابت لهذه الظروف.",
      table: {
        title: "سُلَّم التكرار من الدائم إلى المعدوم",
        columns: ["الظرف", "المعنى", "مثال من يومك"],
        rows: [
          {
            label: "immer",
            cells: ["دائماً", "Ich frühstücke immer um sieben."],
          },
          {
            label: "meistens",
            cells: ["في الغالب", "Ich gehe meistens zu Fuß."],
          },
          { label: "oft", cells: ["كثيراً", "Wir kochen oft zusammen."] },
          {
            label: "manchmal",
            cells: ["أحياناً", "Ich sehe manchmal fern."],
          },
          {
            label: "selten",
            cells: ["نادراً", "Er steht selten früh auf."],
          },
          {
            label: "nie",
            cells: ["أبداً", "Ich trinke nie Kaffee am Abend."],
          },
        ],
      },
      examples: [
        {
          de: "Ich stehe immer um sechs Uhr auf.",
          ar: "أنهض دائماً في السادسة. (موضع شائع لظرف التكرار)",
        },
        {
          de: "Manchmal frühstücke ich nicht.",
          ar: "أحياناً لا أفطر. (الظرف أوّلاً ⟵ الفاعل بعد الفعل)",
        },
        {
          de: "Meine Schwester kocht oft am Abend.",
          ar: "أختي تطبخ كثيراً في المساء.",
        },
        {
          de: "Er sieht selten fern, aber er liest viel.",
          ar: "نادراً ما يشاهد التلفاز، لكنّه يقرأ كثيراً. (selten تواتر و viel مقدار)",
        },
        {
          de: "Ich gehe nie vor Mitternacht ins Bett.",
          ar: "لا أذهب إلى الفراش قبل منتصف الليل أبداً. (nie في هذه الجملة البسيطة)",
        },
        {
          de: "Ich habe montags immer Deutschunterricht.",
          ar: "لديّ درس ألماني كلّ يوم اثنين. (montags ظرف يكتب بحرف صغير)",
        },
        {
          de: "Ich fahre jeden Morgen mit dem Bus zur Arbeit.",
          ar: "أذهب إلى العمل بالحافلة كلّ صباح. (زمان ⟵ كيفية ⟵ مكان)",
        },
        {
          de: "Wie oft gehst du ins Fitnessstudio? — Zweimal pro Woche.",
          ar: "كم مرّة تذهب إلى النادي؟ — مرّتين أسبوعياً.",
        },
      ],
      comparisonWithArabic: "في العربية يمكن غالباً تقديم ظرف التكرار أو تأخيره، وقد يتغير موضع التشديد؛ وفي الألمانية يبقى الفعل المصرف في المركز الثاني في الجملة الخبرية الرئيسية، لذلك يتبعه الفاعل إذا بدأنا بظرف: «أحياناً أشاهد التلفاز» = «Manchmal **sehe ich** fern». أما **nie** فتقابل «أبداً» في هذا المثال البسيط: «Ich gehe nie ins Kino». لا يعني ذلك أن كل ترتيب آخر مستحيل؛ فالسياق والتركيز يغيّران الاختيار، كما أن ترتيب TeKaMoLo تذكير بالترتيب المحايد عند اجتماع معلومات متعددة لا حكماً على كل جملة.",
      eselsbruecke: "إذا بدأت الجملة بظرف، أبقِ الفعل المصرف في المركز الثاني: **Manchmal sehe ich …**. وفي الجملة البسيطة التي تعني «أبداً»، تكفي **nie**. تذكّر **TeKaMoLo** كترتيب محايد تقريبي لا كقاعدة لا تقبل الاستثناء.",
      commonMistakes: [
        {
          wrong: "Ich immer stehe früh auf.",
          right: "Ich stehe immer früh auf.",
          whyAr:
            "في الجملة Ich … يأتي الفعل المصرف مباشرةً بعد الفاعل ليبقى في المركز الثاني؛ لذلك نقول Ich stehe immer … ولا نضع immer قبله.",
        },
        {
          wrong: "Manchmal ich sehe fern.",
          right: "Manchmal sehe ich fern.",
          whyAr:
            "نقلٌ حرفي للترتيب العربي «أحياناً أنا أشاهد». في الجملة الرئيسية الخبرية يبدأ المثال بظرف، لذلك يأتي الفعل المصرف بعده مباشرةً ثم الفاعل: Manchmal sehe ich fern.",
        },
        {
          wrong: "Nie ich gehe ins Kino.",
          right: "Nie gehe ich ins Kino.",
          whyAr:
            "إذا بدأت الجملة الرئيسية بظرف النفي nie، يبقى الفعل المصرف في المركز الثاني ويتبعه الفاعل: Nie gehe ich … . ويمكن أيضاً قول Ich gehe nie … .",
        },
        {
          wrong: "Jeden Morgen ich fahre mit dem Bus zur Arbeit.",
          right: "Jeden Morgen fahre ich mit dem Bus zur Arbeit.",
          whyAr:
            "في الجملة الخبرية الرئيسية يأتي الفعل المصرف في المركز الثاني. عندما يبدأ المثال بظرف الزمان، نقول Jeden Morgen fahre ich …؛ لا نضع الفاعل بين الظرف والفعل.",
        },
      ],
      relatedRuleComparison: {
        title: "المركز الأوّل (Vorfeld): من يجلس فيه ولماذا؟",
        content: "في الجملة الخبرية الرئيسية يوجد موضع واحد قبل الفعل المصرف، والفعل يأتي عادةً في المركز الثاني: «Ich stehe früh auf»؛ «Jeden Tag stehe ich früh auf»؛ «Am Abend sehe ich fern». حين نضع الزمان أولاً يتبع الفاعلُ الفعلَ، لا لأن الظرف يفرض ترتيباً واحداً لكل الكلام، بل لأن الفعل المصرف يحافظ على موقعه. ويمكن تقديم مكوّن آخر للتركيز أيضاً. أمّا سؤال نعم/لا مثل «Stehst du früh auf?» فيبدأ بالفعل، فلا تخلط هذا النمط بقاعدة الجملة الخبرية.",
      },
    },
  ];
