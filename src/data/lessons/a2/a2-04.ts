import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-04: البحث عن سكن — Wechselpräpositionen (wo? Dativ / wohin? Akkusativ)
 */
export const lessonA204: Lesson = {
  id: "a2-04",
  unitId: "a2-04",
  level: "A2",
  order: 1,
  titleDe: "Wohnungssuche",
  titleAr: "البحث عن سكن",
  duration: 35,
  summary:
    "إعلانات العقارات، وصف الشقة، وحروف الجر المتغيرة (Wechselpräpositionen) التسعة: السكون Dativ والحركة Akkusativ، والعيش المشترك: الجيران ونظام البيت وأوقات الهدوء (Nachbarn, Hausordnung, Ruhezeiten).",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann Wohnungsanzeigen verstehen.",
      ar: "أن أفهم إعلانات العقارات: شقة، إيجار، غرف.",
    },
    {
      id: "z2",
      de: "Ich kenne die 9 Wechselpräpositionen.",
      ar: "أن أتقن حروف الجر المتغيرة التسعة (in, an, auf, über, unter, vor, hinter, neben, zwischen).",
    },
    {
      id: "z3",
      de: "Ich kann unterscheiden: wo? (Dativ) und wohin? (Akkusativ).",
      ar: "أن أميز: أين؟ (سكون Dativ) وإلى أين؟ (حركة Akkusativ).",
    },
    {
      id: "z4",
      de: "Ich kann über das Zusammenleben sprechen: Nachbarn, Hausordnung, Ruhezeiten.",
      ar: "أن أتحدث عن العيش المشترك: الجيران، نظام البيت، أوقات الهدوء.",
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في A1 تعلمت: Das Buch ist auf dem Tisch (سكون). ماذا لو وضعت الكتاب الآن: Ich lege das Buch auf ___ Tisch؟ هل ترى الفرق؟ هذا هو سر «حروف الجر المتغيرة» — نفس الحرف يتغير حسب سؤال «أين؟» أم «إلى أين؟»!",
    motivatingQuestionDe: "Wo wohnst du jetzt?",
    contextAr:
      "تنتقل لشقة جديدة: نقرأ الإعلانات، ونحل لغز الحروف المتغيرة التسعة — القاعدة الأشهر في المستوى المتوسط: السكون Dativ، الحركة Akkusativ.",
    contextDe: "Ich ziehe in eine neue Wohnung.",
    connectionToPreviousAr:
      "تتذكر Dativ المكاني (درس السكن A1: auf dem Tisch) وwohin مع in die Stadt (درس المدينة). اليوم ندمجهما في نظام واحد كامل: wo?/wohin? مع 9 حروف.",
    activateVocabulary: [
      { de: "die Wohnung", ar: "الشقة" },
      { de: "die Miete", ar: "الإيجار" },
      { de: "der Vermieter", ar: "المؤجر" },
      { de: "umziehen", ar: "ينتقل (يسكن)" },
      { de: "die Anzeige", ar: "الإعلان" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-04 — السكن والمنزل): اختر الصيغة الصحيحة:",
      questionDe: "Das Buch ist ___ Tisch. (على — سكون)",
      options: ["auf dem", "auf den", "auf der", "auf das"],
      correctIndex: 0,
      explanation: "السكون مع المذكر: auf dem Tisch (درس السكن).",
      errorType: "preposition",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر حرف الحركة الصحيح:",
      questionDe: "Ich gehe ___ die Stadt.",
      options: ["in", "nach", "zu", "aus"],
      correctIndex: 0,
      explanation: "الدخول إلى المدينة: in die Stadt (درس المدينة).",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة من A1 (درس a1-04 — السكن والمنزل): أكمل حروف الجر:",
      template: "Die Lampe ist ___ Küche. (في — مؤنث)",
      blanks: [
        { correct: "in der", options: ["in der", "in dem", "im", "in die"] },
      ],
      explanation: "المؤنث مع in في السكون: in der Küche.",
      errorType: "preposition",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "حروف الجر المتغيرة التسعة: قاعدة wo? / wohin?",
      titleDe: "Die neun Wechselpräpositionen: das Prinzip wo? und wohin?",
      explanationAr:
        "في الألمانية تنقسم حروف الجرّ ثلاثة أقسام: قسمٌ يلزم الـ Dativ دائماً (mit, bei, nach, aus, zu, von, seit)، وقسمٌ يلزم الـ Akkusativ دائماً (durch, für, ohne, gegen, um)، وقسمٌ ثالثٌ يتقلّب بين الحالتين بحسب المعنى — وهذا القسم هو موضوع درسنا، ويُسمّى «Wechselpräpositionen» أي حروف الجرّ المتبادِلة. وعددها تسعةٌ لا عاشر لها، وكلّها حروفٌ مكانيّة تصف موضع شيءٍ بالنسبة إلى شيء: in (في، داخل)، an (عند، ملاصقاً لسطحٍ رأسيّ)، auf (على سطحٍ أفقيّ)، über (فوق)، unter (تحت)، vor (أمام)، hinter (خلف)، neben (بجانب)، zwischen (بين).\n\nوأصل هذا التقلّب تاريخيٌّ لا اعتباطيّ. فالألمانية ورثت عن الجرمانية القديمة نظاماً تؤدّي فيه الحالةُ الإعرابيّةُ نفسُها معنًى مستقلّاً عن حرف الجرّ: كان الـ Akkusativ حالةَ الامتداد والاتّجاه (كأنّه مفعولٌ يقع عليه الفعل فينتقل إليه)، وكان الـ Dativ حالةَ الموضع والاستقرار (وهو في الأصل يجمع وظيفةَ الـ Lokativ، أي حالة المكان، التي اندمجت فيه). فلمّا التقى الحرفُ المكانيُّ بالحالتين بقي كلٌّ منهما محتفظاً بدلالته الأصليّة: فصار الحرف الواحد يعني الحركةَ مرّةً والسكونَ أخرى، لا بتغيّرٍ في الحرف بل بتغيّرٍ في الحالة بعده. ولهذا نقول إنّ الحالة هنا ليست زينةً نحويّةً بل هي حاملةُ المعنى: تغييرُ dem إلى den يغيّر الجملة من وصفٍ لمكانٍ إلى وصفٍ لانتقال.\n\nوالقاعدة العمليّة تُطبَّق على ثلاث درجات. الدرجة الأولى: اسأل عن الجملة بـ wo? (أين؟) أم بـ wohin? (إلى أين؟). فإن صحّ جوابُها عن wo? فالحالة Dativ، وإن صحّ جوابُها عن wohin? فالحالة Akkusativ. الدرجة الثانية: انظر إلى الفعل، فالأفعال الساكنة (sein, bleiben, liegen, stehen, hängen, wohnen, arbeiten) تجرّ Dativ، وأفعال الانتقال (gehen, fahren, kommen, legen, stellen, setzen) تجرّ Akkusativ. الدرجة الثالثة وهي الأدقّ: انظر هل يقع الانتقال داخل حدود الحرف نفسه أم إليها. وهذه الدرجة تحلّ الحالات المُشكِلة، وأشهرها: «Ich gehe im Park spazieren» — والفعلُ فعلُ حركةٍ ومع ذلك جاءت Dativ! والسبب أنّ المشي يجري داخل الحديقة ولا يعبر حدودها، فالحديقة ظرفُ الحركة لا هدفُها. قابِلْها بـ «Ich gehe in den Park» أي أدخل الحديقة من خارجها، فهنا عبورُ حدٍّ فوجب الـ Akkusativ. فالمعيار الحقيقيّ إذن ليس «أيتحرّك الجسم؟» بل «أيعبر الجسمُ حدَّ المكان المذكور؟».\n\nوثمّة تنبيهان على الاستثناءات: الأوّل أنّ هذه القاعدة مكانيّةٌ في الأصل، فإذا استُعمِل الحرفُ استعمالاً زمنيّاً أو مجازيّاً بطلت المفاضلة ولزم الـ Dativ غالباً: vor einem Jahr (قبل سنة)، unter Freunden (بين الأصدقاء). والثاني أنّ an وauf وin إذا دخلت على تعبيرٍ مُصطلَحٍ مع فعلٍ معيّنٍ فقد تتجمّد حالتُها على واحدةٍ لا تتغيّر، وتلك مسألةٌ تُدرَس في مستوى B1 تحت «الأفعال مع حروف الجرّ»، فلا تخلطها بقاعدة المكان هذه.",
      whyAr:
        "لأنّ هذه التسعة هي العمود الفقريّ لوصف المكان في الألمانية كلّها: لا تستطيع أن تصف غرفةً، ولا أن تُرشد أحداً إلى طريق، ولا أن تقرأ إعلان شقّةٍ، ولا أن تقول أين تضع أثاثك، إلّا بها. وهي كذلك أوّل موضعٍ يكتشف فيه المتعلّم العربيّ أنّ الحالة الإعرابيّة في الألمانية ليست حِلْيةً شكليّةً يُعاقَب على إغفالها، بل هي أداةُ معنًى: فجملتان لا يفرّق بينهما إلّا حرفٌ واحدٌ في أداة التعريف (dem مقابل den) تصفان مشهدين مختلفين تماماً — كتابٌ مستقرٌّ على الطاولة، ويدٌ تضع كتاباً عليها. فإتقان هذا الباب ليس إتقانَ قاعدةٍ واحدةٍ، بل هو تحوّلٌ في فهم وظيفة الإعراب كلّه، ومن أجل ذلك تُبنى عليه فيما بعد أبوابُ أفعال الوضع، وأدوات الاتّجاه، والإعراب في الجمل المركّبة.",
      table: {
        title: "التسعة كاملةً: wo? (Dativ) مقابل wohin? (Akkusativ)",
        columns: ["الحرف", "المعنى", "wo? + Dativ", "wohin? + Akkusativ"],
        rows: [
          { label: "in", cells: ["في / داخل", "in der Küche", "in die Küche"] },
          {
            label: "an",
            cells: ["عند / ملاصقاً", "an der Wand", "an die Wand"],
          },
          { label: "auf", cells: ["على", "auf dem Balkon", "auf den Balkon"] },
          { label: "über", cells: ["فوق", "über dem Sofa", "über das Sofa"] },
          {
            label: "unter",
            cells: ["تحت", "unter dem Bett", "unter das Bett"],
          },
          { label: "vor", cells: ["أمام", "vor dem Haus", "vor das Haus"] },
          {
            label: "hinter",
            cells: ["خلف", "hinter dem Schrank", "hinter den Schrank"],
          },
          {
            label: "neben",
            cells: ["بجانب", "neben dem Fenster", "neben das Fenster"],
          },
          {
            label: "zwischen",
            cells: ["بين", "zwischen den Regalen", "zwischen die Regale"],
          },
        ],
      },
      examples: [
        {
          de: "Der Spiegel hängt an der Wand.",
          ar: "المرآة معلّقة على الجدار. (wo? → Dativ)",
        },
        {
          de: "Ich hänge den Spiegel an die Wand.",
          ar: "أعلّق المرآة على الجدار. (wohin? → Akkusativ)",
        },
        {
          de: "Die Kinder spielen hinter dem Haus.",
          ar: "الأطفال يلعبون خلف البيت. (اللعب يجري هناك → Dativ)",
        },
        {
          de: "Die Kinder laufen hinter das Haus.",
          ar: "الأطفال يركضون إلى خلف البيت. (عبور حدّ → Akkusativ)",
        },
        {
          de: "Wir gehen im Park spazieren.",
          ar: "نتنزّه في الحديقة. (حركة داخل الحدود → Dativ)",
        },
        {
          de: "Wir gehen in den Park.",
          ar: "نذهب إلى الحديقة. (دخول من خارجها → Akkusativ)",
        },
        {
          de: "Zwischen den Regalen steht eine Pflanze.",
          ar: "بين الرفوف نبتة. (استقرار → Dativ)",
        },
      ],
      comparisonWithArabic:
        "العربيّة تصنع هذا التمييز بتغيير الحرف نفسه لا بتغيير حالة الاسم: نقول «في البيت» للسكون و«إلى البيت» للحركة، و«على الطاولة» للسكون و«على الطاولة» للحركة أيضاً — إذ تكتفي بقرينة الفعل. أمّا الألمانية فتُبقي الحرف ثابتاً (in يبقى in) وتنقل العبء كلَّه إلى أداة التعريف بعده. وهذا انقلابٌ في موضع المعلومة يربك المتعلّم العربيّ: فعينُه معتادةٌ أن تقرأ المعنى في الحرف، فتمرّ على «in die» و«in der» مروراً واحداً لأنّ الحرف واحد. وتزيد الصعوبةَ أنّ العربية لا تُعرب الاسم بعد حرف الجرّ إلّا بالجرّ وحده مهما كان المعنى، فليس في لغتنا ما يقابل تبادلَ حالتين بعد حرفٍ واحد. والعلاج التدريبيّ أن تتعوّد سؤال «wohin?» قبل أن تنطق أداة التعريف، لا بعدها.",
      eselsbruecke:
        "«الحرفُ لا يتغيّر، والأداةُ هي التي تنطق»: اسأل wohin? قبل أن تختار den أم dem — عبورُ الحدّ = Akkusativ، وداخلَ الحدّ = Dativ.",
      commonMistakes: [
        {
          wrong: "Ich gehe in der Küche. (بمعنى: أدخل المطبخ)",
          right: "Ich gehe in die Küche.",
          whyAr:
            "الدخول عبورُ حدٍّ من خارج المطبخ إلى داخله، فوجب الـ Akkusativ. أمّا «in der Küche» فتعني أنّك تمشي داخل المطبخ أصلاً.",
        },
        {
          wrong: "Das Bild hängt an die Wand.",
          right: "Das Bild hängt an der Wand.",
          whyAr:
            "hängen هنا لازمٌ يصف حالةَ استقرارٍ لا فعلَ تعليق، والسؤال wo? فوجب الـ Dativ. التعليق نفسُه فعلٌ آخر متعدٍّ: «Ich hänge das Bild an die Wand».",
        },
        {
          wrong: "Wir fahren in die Stadt spazieren.",
          right: "Wir fahren in der Stadt spazieren.",
          whyAr:
            "التنزّه حركةٌ تجري داخل حدود المدينة ولا تعبرها، فالمدينة ظرفُ الحركة لا هدفُها، والقاعدة تنظر إلى عبور الحدّ لا إلى مجرّد وجود حركة.",
        },
        {
          wrong: "Ich warte vor das Haus.",
          right: "Ich warte vor dem Haus.",
          whyAr:
            "warten فعلُ مكوثٍ محضٍ لا انتقالَ فيه، والسؤال wo?، فالـ Dativ لازم. وقاعدةٌ نافعة: كلّ فعلٍ يصحّ معه «أين؟» ولا يصحّ معه «إلى أين؟» فحالته Dativ.",
        },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: حروف الجرّ الثابتة التي درستَها",
        content:
          "درستَ في A1 حروفاً لا تتقلّب البتّة: mit, bei, nach, aus, zu, von, seit وكلّها Dativ دائماً مهما كان المعنى — فـ «Ich fahre zu meinem Freund» حركةٌ صريحة ومع ذلك Dativ، لأنّ zu ليس من التسعة. وكذلك durch, für, ohne, gegen, um وكلّها Akkusativ دائماً حتّى في وصف السكون. فلا تُعمّم قاعدة wo?/wohin? على كلّ حرف جرّ؛ هي محصورةٌ في التسعة المذكورة في الجدول أعلاه. والاختبار السريع: إن لم يكن الحرف واحداً من in, an, auf, über, unter, vor, hinter, neben, zwischen فحالتُه محفوظةٌ في الذاكرة لا مستنبَطةٌ من المعنى.",
      },
    },
    {
      id: "t2",
      titleAr:
        "أفعال الوضع والاستقرار: stellen/stehen وlegen/liegen وsetzen/sitzen وhängen",
      titleDe:
        "Positionsverben und ihre Kausativa: legen – liegen, setzen – sitzen",
      explanationAr:
        "لا تكتمل قاعدة wo?/wohin? إلّا بأزواج الأفعال التي تُطبَّق عليها، وهي منظومةٌ صغيرةٌ محكمةٌ من أربعة أزواج: كلُّ زوجٍ فيه فعلٌ متعدٍّ يصف إحداثَ الوضع (فيأخذ مفعولاً به + Akkusativ بعد حرف الجرّ)، وفعلٌ لازمٌ يصف دوامَ الوضع (فلا مفعول له، وبعد حرف الجرّ Dativ). والأزواج: stellen/stehen للوضع القائم، legen/liegen للوضع المضطجع، setzen/sitzen للوضع الجالس، hängen/hängen للتعليق.\n\nوأصل هذه الأزواج بابٌ من أبواب الاشتقاق الجرمانيّ يُسمّى «Kausativum» أي فعل التسبيب: يُشتقّ فعلٌ ضعيفٌ متعدٍّ من فعلٍ قويٍّ لازمٍ ليعني «جعلَه يفعل». فـ legen في الجرمانيّة *lagjan معناه حرفيّاً «liegen machen» أي «جعله يضطجع»، وهو في القوطية lagjan وفي الإنجليزية القديمة lecgan ومنه to lay مقابل to lie. وكذلك setzen من *satjan أي «sitzen machen»، ومنه الإنجليزية to set مقابل to sit. وعلامةُ الاشتقاق باقيةٌ في تبادل الحركة: liegen/legen، sitzen/setzen. وهنا فائدةٌ دقيقةٌ ينبغي ألّا تُعمَّم: stellen ليس مشتقّاً من stehen اشتقاقاً صرفيّاً، بل هو مبنيٌّ على جذرٍ جرمانيٍّ آخر *stalla- بمعنى «الموضع، المكان» (ومنه Stall الإسطبل)، فمعناه الأصليّ «يضعه في موضع». فالزوج stellen/stehen زوجٌ دلاليٌّ لا صرفيّ، وإن عمل عمل الأزواج الأخرى تماماً. أمّا hängen فحكايتُه أعجب: هو في الأصل فعلان التقيا في صورةٍ واحدة، قويٌّ لازمٌ (hāhan) وضعيفٌ متعدٍّ (hangēn/hengen)، ولم يستقرّ التوزيع الحاليُّ إلّا في القرن التاسع عشر. ولذلك يتشابه الفعلان في المضارع تشابهاً تامّاً ولا يفترقان إلّا في الماضي: اللازم hängen – hing – gehangen، والمتعدّي hängen – hängte – gehängt.\n\nوالتطبيق يجري في خطوتين لا ثالثة لهما. أوّلاً: أفي الجملة مفعولٌ به؟ إن كان فيها مفعولٌ فالفعل من قسم المتعدّي (stellen, legen, setzen, hängen الضعيف) وما بعد حرف الجرّ Akkusativ. وإن لم يكن فيها مفعولٌ والفاعل نفسه هو المستقرّ، فالفعل من قسم اللازم (stehen, liegen, sitzen, hängen القويّ) وما بعد حرف الجرّ Dativ. ثانياً: اختر الزوج بحسب هيئة الشيء لا بحسب معناه العربيّ: القائم على قاعدةٍ ضيّقة (كوب، زجاجة، مزهريّة، خزانة) stehen، والمنبسط على أوسع سطوحه (كتاب، ورقة، سجّادة، ملعقة) liegen، وذو المقعد من الأحياء sitzen، والمعلَّق من نقطةٍ عليا (صورة، معطف، مصباح) hängen.\n\nوثمّة استثناءٌ ظريفٌ يُختبر به المتقدّمون: الفعل stecken (يُدخِل / يكون مغروزاً) يعمل في الاتّجاهين بصورةٍ واحدة، فتقول «Ich stecke den Schlüssel in die Tasche» بالـ Akkusativ، و«Der Schlüssel steckt in der Tasche» بالـ Dativ، من غير أن يتغيّر شكل الفعل. وتنبيهٌ أخير في المعجم لا في النحو: الأشياء التي تُعدّ في العربية «موضوعةً» بإطلاق تفترق في الألمانية بحسب هيئتها، فالصحن على الطاولة steht لأنّه ذو قاعدة، والملعقة بجانبه liegt لأنّها منبسطة، وكلاهما في العربية «على الطاولة» لا فرق.",
      whyAr:
        "لأنّ هذه الأزواج هي أكثر ما يفضح المتعلّم في الحديث اليوميّ: فالعربية تكتفي بفعلٍ واحدٍ («وضع») لكلّ ما يُوضَع، وبفعلٍ واحدٍ («يوجد» أو جملةٍ اسميّةٍ بلا فعلٍ أصلاً) لكلّ ما هو مستقرّ، فيميل المتعلّم إلى ترجمة كلّ «وضع» بـ legen وكلّ «يوجد» بـ ist. والنتيجة كلامٌ مفهومٌ لكنّه غريب الوقع، ثمّ خطأٌ إعرابيٌّ لازمٌ لأنّ اختيار الفعل هو الذي يفرض الحالة بعد حرف الجرّ. وفائدةٌ ثانية أعمق: هذه الأزواج تُدرّبك على التمييز بين المتعدّي واللازم في الألمانية، وهو تمييزٌ ستحتاجه في الـ Perfekt (haben مع المتعدّي، وكثيرٌ من اللوازم مع sein)، وفي المبنيّ للمجهول الذي لا يُبنى إلّا من متعدٍّ، وفي أبواب B1 كلّها. فهي بابُ تدريبٍ على بنية الفعل الألمانيّ لا مجرّد مفردات أثاث.",
      table: {
        title:
          "الأزواج الأربعة: المتعدّي (حركة + Akkusativ) واللازم (سكون + Dativ)",
        columns: [
          "الهيئة",
          "متعدٍّ: يضع (Akk.)",
          "لازم: مستقرّ (Dat.)",
          "الماضي والتصريف",
          "مثال",
        ],
        rows: [
          {
            label: "قائم",
            cells: [
              "stellen (stellte, gestellt)",
              "stehen (stand, gestanden)",
              "ضعيف / قويّ",
              "Ich stelle die Vase auf den Tisch.",
            ],
          },
          {
            label: "مضطجع",
            cells: [
              "legen (legte, gelegt)",
              "liegen (lag, gelegen)",
              "ضعيف / قويّ",
              "Der Teppich liegt auf dem Boden.",
            ],
          },
          {
            label: "جالس",
            cells: [
              "setzen (setzte, gesetzt)",
              "sitzen (saß, gesessen)",
              "ضعيف / قويّ",
              "Ich setze das Kind auf den Stuhl.",
            ],
          },
          {
            label: "معلَّق",
            cells: [
              "hängen (hängte, gehängt)",
              "hängen (hing, gehangen)",
              "ضعيف / قويّ",
              "Der Mantel hängt an der Garderobe.",
            ],
          },
          {
            label: "مغروز",
            cells: [
              "stecken (steckte, gesteckt)",
              "stecken (steckte, gesteckt)",
              "ضعيف في الحالين",
              "Der Schlüssel steckt in der Tür.",
            ],
          },
        ],
      },
      examples: [
        {
          de: "Ich stelle die Lampe neben das Sofa.",
          ar: "أضع المصباح بجانب الأريكة. (متعدٍّ → Akkusativ)",
        },
        {
          de: "Die Lampe steht neben dem Sofa.",
          ar: "المصباح قائمٌ بجانب الأريكة. (لازم → Dativ)",
        },
        {
          de: "Er legt den Vertrag auf den Schreibtisch.",
          ar: "يضع العقد على المكتب. (منبسط، متعدٍّ)",
        },
        {
          de: "Der Vertrag liegt auf dem Schreibtisch.",
          ar: "العقد موضوعٌ على المكتب. (منبسط، لازم)",
        },
        {
          de: "Setzen Sie sich bitte auf diesen Sessel!",
          ar: "تفضّل بالجلوس على هذا الكرسيّ. (setzen متعدٍّ بضمير انعكاسيّ)",
        },
        {
          de: "Der Vermieter sitzt schon im Wohnzimmer.",
          ar: "صاحب البيت جالسٌ في غرفة المعيشة. (لازم → Dativ)",
        },
        {
          de: "Sie hängt die Gardinen vor das Fenster.",
          ar: "تعلّق الستائر أمام النافذة. (متعدٍّ ضعيف)",
        },
        {
          de: "Der Schlüssel steckt in der Tür.",
          ar: "المفتاح مغروزٌ في الباب. (stecken في اتّجاه السكون)",
        },
      ],
      comparisonWithArabic:
        "العربيّة تنظّم هذا الباب بالفعل الواحد المرن: «وضعَ» تصلح للكوب والكتاب والطفل والصورة جميعاً، والاستقرار يُؤدَّى بجملةٍ اسميّةٍ بلا فعلٍ أصلاً — «الكتابُ على الطاولة» — أو بـ «يوجد». فليس في العربية إلزامٌ بأن تصرّح بهيئة الشيء وقتَ ذكر موضعه. والألمانية على العكس تُلزمك بذلك في كلّ جملة: لا تستطيع أن تقول أين الشيء إلّا وأنت تقول كيف هو قائمٌ أو مضطجعٌ أو معلّق. ومن هنا خطآن متلازمان عند العرب: الأوّل الإفراط في ist وes gibt مكان stehen/liegen (وهي صحيحةٌ نحواً لكنّها فقيرةٌ أسلوباً وتكشف المتعلّم فوراً)، والثاني تعميم legen على كلّ «وضعَ» فتخرج جملٌ مثل «Ich lege die Flasche auf den Tisch» وهي تعني أنّك أضجعتَ الزجاجة على جنبها. والعلاج أن تحفظ الأفعال مقرونةً بأشياء نموذجيّةٍ لا بترجمةٍ مجرّدة: Flasche → stehen، Buch → liegen، Bild → hängen.",
      eselsbruecke:
        "«الضعيفُ يفعل والقويُّ يكون»: legen/stellen/setzen أفعالٌ ضعيفةٌ متعدّيةٌ تُحدِث الوضع فتجرّ Akkusativ، وliegen/stehen/sitzen أفعالٌ قويّةٌ لازمةٌ تصف الوضع فتجرّ Dativ.",
      commonMistakes: [
        {
          wrong: "Ich lege die Flasche auf den Tisch. (والمقصود: أضعها قائمة)",
          right: "Ich stelle die Flasche auf den Tisch.",
          whyAr:
            "legen للمنبسط على جنبه، والزجاجةُ ذاتُ قاعدةٍ تقوم عليها فبابُها stellen. والجملة الأولى صحيحةٌ نحواً لكنّها تصف زجاجةً مضطجعةً على جنبها، وهو معنًى لم تُرِدْه.",
        },
        {
          wrong:
            "Das Buch steht auf dem Tisch. (والمقصود: كتابٌ موضوعٌ مسطّحاً)",
          right: "Das Buch liegt auf dem Tisch.",
          whyAr:
            "الكتاب المسطّح liegt، ولا يقال steht إلّا إذا كان منتصباً في رفٍّ بين كتبٍ أخرى. فالمعيار هيئةُ الشيء لحظتَئذٍ لا نوعُه.",
        },
        {
          wrong: "Ich habe das Bild an der Wand gehängt.",
          right: "Ich habe das Bild an die Wand gehängt.",
          whyAr:
            "وجودُ المفعول «das Bild» دليلُ التعدّي، والمتعدّي يُحدِث انتقالاً فيجرّ Akkusativ. وتصريفه الضعيف gehängt لا gehangen، وهذا الخطأ يجمع خطأين: الحالة والتصريف معاً.",
        },
        {
          wrong: "Der Stuhl setzt neben dem Tisch.",
          right: "Der Stuhl steht neben dem Tisch.",
          whyAr:
            "setzen متعدٍّ لا يُستعمل لازماً إلّا مع ضمير انعكاسيّ (sich setzen)، والكرسيّ نفسُه لا يجلس بل يقوم، فبابُه stehen. وهذا خطأٌ شائعٌ لأنّ العربية تقول «الكرسيّ موضوعٌ» بلا تمييز.",
        },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: sich setzen وsitzen وهو فرقُ الحدث والحال",
        content:
          "ستلقى في درس الأفعال الانعكاسيّة (a2-11) الصيغةَ «sich setzen» أي «يجلس» بمعنى الحدث: «Ich setze mich auf den Stuhl» — وانظر كيف بقيت الـ Akkusativ لأنّ الفعل متعدٍّ وإن كان مفعولُه ضميراً انعكاسيّاً يعود على الفاعل. فأنت تُجلس نفسك، أي تُحدِث الانتقال. فإذا تمّ الجلوس وصار حالاً قلت «Ich sitze auf dem Stuhl» بالـ Dativ. وعلى هذا القياس: sich legen (يضطجع) مقابل liegen، وsich stellen (يقف متّخذاً موضعاً) مقابل stehen. فالانعكاسيّ يصف لحظةَ الانتقال، واللازم يصف ما بعدها.",
      },
    },
    {
      id: "t3",
      titleAr: "اندماج حرف الجرّ بأداة التعريف: ins, im, ans, am, aufs",
      titleDe: "Verschmelzung von Präposition und Artikel im Wohnalltag",
      explanationAr:
        "إذا التقى حرفُ الجرّ بأداة التعريف في الألمانية المنطوقة والمكتوبة معاً، اندمجا كثيراً في كلمةٍ واحدةٍ تُسمّى «Verschmelzung» أي الاندماج. وأنت تعرف بعضها من A1: im, am, zum, zur, vom, beim. والذي يعنينا هنا أنّ حروفَ الجرّ المتغيّرة تندمج في الاتّجاهين معاً، فيصير للاندماج وظيفةٌ إعرابيّةٌ لا اختصاريّةٌ فحسب: in + dem = im (سكون)، وin + das = ins (حركة)، وan + dem = am، وan + das = ans، وauf + das = aufs. فالفرقُ بين im وins هو نفسه الفرقُ بين Dativ وAkkusativ، مضغوطاً في حرفٍ واحد.\n\nوأصل هذه الظاهرة أنّ أداة التعريف الألمانية كانت ولا تزال في طريقها إلى أن تصير لاصقةً (Klitikon) لا كلمةً مستقلّة: فهي لا تحمل نبراً، وتلتصق بما قبلها لفظاً، فتآكلت صورتُها حتّى ثبتت الصيغةُ المندمجة في الكتابة. ولهذا تجد الاندماج أكثر ما يكون مع أقصر حروف الجرّ وأكثرها دوراناً على الألسنة (in, an, zu, bei, von)، وأقلَّ ما يكون مع الطويلة (zwischen, hinter, neben) التي لا يُكتب اندماجُها في المستوى الفصيح.\n\nوللاندماج ثلاث درجاتٍ ينبغي التمييز بينها. الأولى: اندماجٌ واجبٌ لا يجوز فكّه، وذلك حين تفقد أداةُ التعريف وظيفتَها الإشاريّة، ومنه المصادر المُعرَّفة «zum Essen» و«beim Lesen»، والتعابير الثابتة «ins Kino gehen» و«am Wochenende» و«im Erdgeschoss». الثانية: اندماجٌ هو الأصل والفكُّ ممكنٌ لغرضٍ بلاغيّ، وذلك حين تريد أن تُشير إشارةً خاصّة: فـ «Ich wohne in dem Haus dort» بالفكّ تعني «في ذلك البيت بعينه»، وكأنّك أحللتَ أداةَ التعريف محلَّ اسم الإشارة، ولذلك لا يصحّ الاندماج معها. الثالثة: اندماجٌ عامّيٌّ لا يُكتب في المراسلات الرسميّة وإن سُمِع كثيراً: aufm, unterm, hinterm, vorm, an'n. فاكتب «auf dem Balkon» في رسالتك إلى المؤجّر، وإن سمعتَ جارَك يقول «aufm Balkon».\n\nوموضعُ الخطر عند المتعلّم العربيّ هنا خطرٌ إملائيٌّ سمعيّ: فـ im وin وihm أصواتٌ متقاربة، وam وan كذلك، فيكتب المتعلّم «Ich gehe im Kino» وهو يريد «ins Kino»، فينقلب المعنى من الذهاب إلى السينما إلى مشاهدةِ شيءٍ ما داخلها. والعلاج أن تربط الحرف الأخير بالحالة ربطاً آليّاً: كلُّ اندماجٍ ينتهي بـ s فهو مختصرٌ لـ das أي Akkusativ أي حركة (ins, ans, aufs)، وكلُّ اندماجٍ ينتهي بـ m فهو مختصرٌ لـ dem أي Dativ أي سكون (im, am, beim, vom). وهذه علامةٌ مطّردةٌ لا تتخلّف، فاجعلها ميزانك.",
      whyAr:
        "لأنّ الصيغة المندمجة هي الصيغة الطبيعيّة في تسعين بالمئة من الكلام اليوميّ، فمن كتب «in dem Bad» و«an dem Fenster» دائماً بدا كلامُه متكلّفاً مصنوعاً وإن كان صحيحاً في ظاهره. وأهمُّ من ذلك أنّ الاندماج يُخفي أداةَ التعريف عن العين، فيظنّ المتعلّم أنّ الجملة بلا حالةٍ إعرابيّةٍ أصلاً فيتوقّف عن التفكير فيها — وهذا أخطر ما في الباب. فحين تقرأ «ins Bad» ينبغي أن يقرأ عقلُك «in das Bad» فتعلم أنّها حركة، وحين تقرأ «im Bad» تعلم أنّها سكون. فالاندماج اختصارٌ في الحرف لا في التفكير. وأنت في إعلانات السكن وعقود الإيجار ستقرأ هذه الصيغ في كلّ سطر: «im dritten Stock»، «am Stadtrand»، «ins Erdgeschoss»، فمن لم يفكَّها ذهنيّاً أخطأ في فهم الإعلان نفسه.",
      table: {
        title: "الاندماجات في حروف الجرّ المتغيّرة",
        columns: ["الأصل", "المندمج", "الحالة", "الدلالة", "مثال سكنيّ"],
        rows: [
          {
            label: "in + das",
            cells: ["ins", "Akkusativ", "حركة", "Ich ziehe ins Erdgeschoss."],
          },
          {
            label: "in + dem",
            cells: ["im", "Dativ", "سكون", "Die Waschküche ist im Keller."],
          },
          {
            label: "an + das",
            cells: [
              "ans",
              "Akkusativ",
              "حركة",
              "Stell die Kartons ans Fenster.",
            ],
          },
          {
            label: "an + dem",
            cells: ["am", "Dativ", "سكون", "Der Briefkasten ist am Eingang."],
          },
          {
            label: "auf + das",
            cells: ["aufs", "Akkusativ", "حركة", "Wir gehen aufs Dach."],
          },
          {
            label: "auf + dem",
            cells: [
              "auf dem (لا يندمج فصيحاً)",
              "Dativ",
              "سكون",
              "Die Wäsche trocknet auf dem Balkon.",
            ],
          },
        ],
      },
      examples: [
        {
          de: "Ich ziehe nächsten Monat ins Erdgeschoss.",
          ar: "سأنتقل الشهر القادم إلى الطابق الأرضيّ. (ins = in das → حركة)",
        },
        {
          de: "Die Waschküche liegt im Keller.",
          ar: "غرفة الغسيل في القبو. (im = in dem → سكون)",
        },
        {
          de: "Häng bitte deine Jacke ans Fenster.",
          ar: "علّق سترتك عند النافذة من فضلك. (ans = an das)",
        },
        {
          de: "Der Briefkasten hängt am Eingang.",
          ar: "صندوق البريد عند المدخل. (am = an dem)",
        },
        {
          de: "Am Wochenende ist im Haus Ruhezeit.",
          ar: "في عطلة نهاية الأسبوع وقتُ هدوءٍ في البناية. (تعبير ثابت)",
        },
        {
          de: "Ich wohne in dem Haus mit dem roten Dach.",
          ar: "أسكن في البيت ذي السطح الأحمر. (فكٌّ للإشارة الخاصّة)",
        },
      ],
      comparisonWithArabic:
        "العربية تعرف الإدغام والوصل في مواضع، لكنّها لا تدمج حرف الجرّ بأل التعريف في كلمةٍ واحدةٍ تُكتب متّصلةً بصورةٍ تُخفي الأداة: فنحن نكتب «في البيت» منفصلين وإن قرأناهما وصلاً، وأقصى ما عندنا إدغامُ لام التعريف نطقاً في الحروف الشمسيّة («الشمس» تُنطق أشّمس) من غير أن يتغيّر الرسم. ولهذا يقع المتعلّم العربيّ في ظنٍّ خفيّ: أنّ im كلمةٌ مفردةٌ مثل «في»، وins كلمةٌ أخرى مثل «إلى»، فيحفظهما معجميّاً لا نحويّاً. وهذا الحفظ يعمل في الجمل السهلة ويخذله عند أوّل جملةٍ مركّبة. والصواب أن تراهما دائماً مختصَرَين: im = in + dem، ins = in + das، فتحتفظ بالحالة الإعرابيّة حاضرةً في ذهنك ولو غابت عن الورق.",
      eselsbruecke:
        "«السينُ تسير والميمُ تمكث»: كلّ اندماجٍ آخره s (ins, ans, aufs) حركةٌ وAkkusativ، وكلّ اندماجٍ آخره m (im, am, beim, vom) سكونٌ وDativ.",
      commonMistakes: [
        {
          wrong: "Ich gehe heute Abend im Kino.",
          right: "Ich gehe heute Abend ins Kino.",
          whyAr:
            "الذهاب انتقالٌ فيجب in das = ins. أمّا «im Kino» فتصف مكانك أثناء وجودك داخل الصالة، فتصير الجملة «أمشي داخل السينما».",
        },
        {
          wrong: "Wir ziehen im eine neue Wohnung.",
          right: "Wir ziehen in eine neue Wohnung.",
          whyAr:
            "الاندماج لا يقع إلّا مع أداة التعريف المعرِّفة (das/dem)، ولا يقع البتّة مع أداة التنكير eine. فوجودُ eine يمنع الاندماج ويُبقي in وحدها.",
        },
        {
          wrong: "Die Kinder spielen ins Hof.",
          right: "Die Kinder spielen im Hof.",
          whyAr:
            "اللعب يجري داخل الفناء ولا يعبر حدَّه، فالحالة Dativ والاندماج im. وقاعدةُ الميم والسين تكشف الخطأ قبل أن تفكّر في الحالة أصلاً.",
        },
        {
          wrong: "Bitte schreiben Sie mir aufm Formular.",
          right: "Bitte schreiben Sie mir auf dem Formular.",
          whyAr:
            "aufm صيغةٌ عامّيّةٌ منطوقةٌ لا تُكتب في الرسائل والعقود. والفصيح فكُّ auf dem، إذ لا يندمج auf مع dem في المستوى المكتوب وإن اندمج مع das في aufs.",
        },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: الاندماجات التي تعرفها من حروف الـ Dativ الثابتة",
        content:
          "zum (zu dem)، zur (zu der)، beim (bei dem)، vom (von dem) — كلّها من حروف الـ Dativ الثابتة، ولذلك ليس لها نظيرٌ بالـ Akkusativ البتّة: لا يوجد «zus» ولا «beis». وهذا فرقٌ جوهريّ: في الحروف الثابتة الاندماجُ اختصارٌ محض، وفي التسعة المتغيّرة الاندماجُ يحمل معلومةً نحويّةً هي الحالة نفسُها. ومن هنا تفهم لماذا تجد zur وzum في كلّ صفحةٍ ولا تجد لهما مقابلاً: لأنّ zu لا يعرف إلّا الـ Dativ.",
      },
    },
    {
      id: "t4",
      titleAr: "لغة إعلانات السكن: قراءة الإعلان والمعاينة والعقد",
      titleDe: "Wohnungsanzeigen lesen und eine Besichtigung vereinbaren",
      explanationAr:
        "إعلانُ السكن في ألمانيا نصٌّ مضغوطٌ بالاختصارات، ومن لم يفكّها أضاع الشقّة قبل أن يراها. والبنية ثابتة: يبدأ الإعلان بعدد الغرف مكتوباً هكذا «3-ZKB» أي ثلاث غرفٍ مع مطبخٍ وحمّام (Zimmer, Küche, Bad)، ثمّ المساحة بالمتر المربّع «85 qm»، ثمّ الطابق «3. OG» أي Obergeschoss الطابق الثالث، أو «EG» الطابق الأرضيّ، أو «DG» الطابق العلويّ تحت السطح. ثمّ يأتي أهمُّ سطرٍ فيه: السعر. وهو ثلاثة أرقامٍ لا رقمٌ واحد: «die Kaltmiete» الإيجار الصافي، و«die Nebenkosten» المصاريف الإضافيّة من ماءٍ وتدفئةٍ ونظافةٍ ونفايات، ومجموعُهما «die Warmmiete» وهو ما ستدفعه فعلاً كلَّ شهر. ويُضاف إليها مرّةً واحدةً «die Kaution» التأمين، وسقفُه القانونيّ ثلاثة أضعاف الإيجار الصافي، ويُردّ إليك عند الخروج إن سلّمت الشقّة سليمة.\n\nثمّ تلي مرحلةُ الاتّصال، ولها لغةٌ مقرّرة. تكتب رسالةً قصيرةً بصيغة Sie: تفتح بـ «Sehr geehrte Damen und Herren»، وتقول «ich interessiere mich für Ihre Wohnung in der Gartenstraße»، وتطلب موعداً بـ «ich möchte die Wohnung gern besichtigen» ثمّ «wäre es möglich, einen Termin zu vereinbaren?»، وتختم بـ «Mit freundlichen Grüßen». ولاحظ أنّ الفعل المفتاحيّ هنا besichtigen (يعاين) لا sehen، وأنّ الموعد يُقال له Termin لا Zeit، وأنّ المعاينة نفسها اسمُها «die Besichtigung» وغالباً تكون جماعيّةً يحضرها عشرون طالباً.\n\nوفي المعاينة تُسأل أسئلةً بعينها ويُنتظر منك أن تسأل مثلها. يسألك المؤجّر «Was machen Sie beruflich?» و«Wie viele Personen ziehen ein?»، وتسأله أنت «Sind die Nebenkosten in der Warmmiete enthalten?» و«Wann ist die Wohnung frei?» و«Wie hoch ist die Kaution?». وأمّا الوثائق فثلاثٌ لا تُقبل بدونها في المدن الكبرى: «die Gehaltsabrechnung» كشف الراتب لثلاثة أشهر، و«die SCHUFA-Auskunft» تقرير الجدارة الائتمانيّة، و«die Mietschuldenfreiheitsbescheinigung» شهادةُ خلوٍّ من متأخّرات الإيجار من مؤجّرك السابق — وهذه الكلمة الأخيرة من أطول كلمات الإدارة الألمانية وتُفكَّك بالقراءة من آخرها: Bescheinigung شهادة، Freiheit خلوّ، Mietschulden ديون إيجار.\n\nثمّ العقد ونظام البيت. «der Mietvertrag» يذكر مدّة الإخطار «die Kündigungsfrist» وهي ثلاثة أشهر عادةً، ويُرفق به «die Hausordnung» نظامُ البناية، وفيه بندٌ لا يفهمه الوافدون فيقعون في خصومةٍ مع الجيران: «die Ruhezeiten» أوقاتُ الهدوء، وهي عادةً من العاشرة ليلاً إلى السابعة صباحاً، ومثلها «die Mittagsruhe» بين الواحدة والثالثة ظهراً في كثيرٍ من البنايات، ويومُ الأحد كلُّه وقتُ هدوءٍ لا تُشغَّل فيه غسّالةٌ ولا مثقاب. وأخيراً «das Übergabeprotokoll» محضرُ التسليم: صحيفةٌ تُوقَّع يوم الاستلام تُسجَّل فيها كلُّ خدشٍ وكلُّ عطبٍ في الشقّة، ومن أهملها خُصِم من تأمينه ثمنُ عيوبٍ لم يصنعها. فاكتب فيها كلَّ شيءٍ وصوِّر بهاتفك.",
      whyAr:
        "لأنّ هذا الدرس من الدروس التي يقاس أثرُها بالمال والوقت لا بالدرجات: من فهم الفرق بين Kaltmiete وWarmmiete لم يُفاجَأ بفاتورةٍ تزيد مئتي يورو عمّا حسب، ومن عرف أنّ الـ Kaution تُردّ حافظ على حقّه، ومن قرأ الـ Hausordnung سلِم من شكاوى الجيران. وهو أيضاً أوّل نصٍّ إداريٍّ حقيقيٍّ يواجهه المتعلّم: مليءٌ بالاختصارات والكلمات المركّبة الطويلة، فيتدرّب فيه على مهارةٍ لازمةٍ لكلّ ما بعده — تفكيك الكلمة المركّبة من آخرها، فآخرُ جزءٍ فيها هو الأصل وما قبله وصفٌ له. ومن جهة اللغة: هذا القسم هو ميدان تطبيق حروف الجرّ المتغيّرة، إذ لا يخلو إعلانٌ ولا معاينةٌ من «im dritten Stock» و«ins Erdgeschoss» و«auf dem Balkon»، فتلتقي القاعدةُ بالحياة في نصٍّ واحد.",
      table: {
        title: "مفاتيح الإعلان والعقد",
        columns: ["المصطلح", "المعنى", "ملاحظة عمليّة"],
        rows: [
          {
            label: "3-ZKB, 85 qm",
            cells: [
              "ثلاث غرف + مطبخ + حمّام، 85 م²",
              "الغرف لا تشمل المطبخ والحمّام",
            ],
          },
          {
            label: "EG / 3. OG / DG",
            cells: ["أرضيّ / الطابق الثالث / تحت السطح", "DG أرخص وأحرّ صيفاً"],
          },
          {
            label: "die Kaltmiete",
            cells: ["الإيجار الصافي", "ليس ما تدفعه فعلاً"],
          },
          {
            label: "die Nebenkosten",
            cells: ["ماء، تدفئة، نفايات، سلّم", "تُحاسَب سنويّاً وقد تُستردّ"],
          },
          {
            label: "die Warmmiete",
            cells: ["المجموع الشهريّ الفعليّ", "هذا هو الرقم الذي يعنيك"],
          },
          {
            label: "die Kaution",
            cells: ["التأمين، حتّى ثلاثة إيجارات", "يُردّ عند الخروج"],
          },
          {
            label: "die Besichtigung",
            cells: ["المعاينة", "احجز Termin مبكّراً"],
          },
          {
            label: "das Übergabeprotokoll",
            cells: ["محضر التسليم", "صوّر كلّ عيبٍ يوم الاستلام"],
          },
        ],
      },
      examples: [
        {
          de: "Die Wohnung liegt im dritten Stock, leider ohne Aufzug.",
          ar: "الشقّة في الطابق الثالث، للأسف بلا مصعد.",
        },
        {
          de: "Die Kaltmiete beträgt 650 Euro, die Nebenkosten 180 Euro.",
          ar: "الإيجار الصافي 650 يورو والمصاريف الإضافيّة 180.",
        },
        {
          de: "Ich interessiere mich für Ihre Anzeige und möchte die Wohnung gern besichtigen.",
          ar: "أنا مهتمٌّ بإعلانكم وأودّ معاينة الشقّة.",
        },
        {
          de: "Sind die Nebenkosten in der Warmmiete enthalten?",
          ar: "هل المصاريف الإضافيّة داخلةٌ في الإيجار الشامل؟",
        },
        {
          de: "Wie hoch ist die Kaution und wann bekomme ich sie zurück?",
          ar: "كم مقدار التأمين ومتى يُردّ إليّ؟",
        },
        {
          de: "Laut Hausordnung gelten die Ruhezeiten ab 22 Uhr.",
          ar: "بحسب نظام البناية تبدأ أوقات الهدوء من العاشرة.",
        },
        {
          de: "Wir unterschreiben morgen das Übergabeprotokoll.",
          ar: "سنوقّع غداً محضر التسليم.",
        },
      ],
      comparisonWithArabic:
        "سوق الإيجار في البلاد العربيّة يقوم على الشفاهة والوساطة: يُتّفق على رقمٍ واحدٍ شاملٍ غالباً، وقد لا يُكتب عقدٌ أصلاً، والتأمين إن وُجد شهرٌ واحد، وأوقات الهدوء عرفٌ اجتماعيٌّ لا بندٌ مكتوبٌ يُحاسَب عليه. فالمتعلّم العربيّ لا ينقصه معجمُ الكلمات فحسب، بل ينقصه تصوّرُ النظام الذي تدلّ عليه الكلمات. ومن هنا ثلاثة سوء فهمٍ متكرّرة: أن يُحسب الإعلان بالـ Kaltmiete فيُفاجأ بالـ Warmmiete، وأن يُظنّ الـ Kaution رسماً غير مستردّ فلا يُطالَب به، وأن يُستهان بالـ Hausordnung فتصل الشكوى إلى المؤجّر. ومن جهة اللغة: العربية تصف بالإضافة («عقدُ الإيجار») والألمانية تصف بالتركيب في كلمةٍ واحدة (Mietvertrag)، فتدرّب على قراءة المركّب من آخره: الأخيرُ هو الموصوف.",
      eselsbruecke:
        "«اقرأ الرقمين لا رقماً»: Kaltmiete + Nebenkosten = Warmmiete، وما تدفعه هو الأخير. وفي الكلمة المركّبة: آخرُها أصلُها.",
      commonMistakes: [
        {
          wrong: "Die Miete ist 650 Euro warm und kalt.",
          right: "Die Kaltmiete beträgt 650 Euro, warm sind es 830 Euro.",
          whyAr:
            "warm وkalt هنا وصفان للإيجار لا للحرارة، ولا يجتمعان على رقمٍ واحد: الصافي أقلُّ والشامل أكثر. والفعل الاصطلاحيّ للمبالغ betragen لا sein.",
        },
        {
          wrong: "Ich will die Wohnung sehen. Wann haben Sie Zeit?",
          right:
            "Ich möchte die Wohnung gern besichtigen. Können wir einen Termin vereinbaren?",
          whyAr:
            "wollen و«Wann haben Sie Zeit?» مباشرتان تُعدّان جافّتين في المراسلة الرسميّة، والفعلُ المتخصّص besichtigen، والموعدُ الرسميّ Termin يُتّفق عليه بـ vereinbaren.",
        },
        {
          wrong: "Ich habe die Kaution bezahlt, das Geld ist weg.",
          right:
            "Ich habe die Kaution hinterlegt und bekomme sie beim Auszug zurück.",
          whyAr:
            "الـ Kaution تُودَع (hinterlegen) ولا تُدفع دفعَ ثمنٍ، وهي مستردّةٌ بحكم القانون عند الخروج إن سُلّمت الشقّة سليمة. والخطأ في الفعل يكشف خطأً في فهم الحقّ نفسه.",
        },
        {
          wrong: "Am Sonntag wasche ich meine Wäsche in der Waschküche.",
          right: "Sonntags ist Ruhetag — ich wasche lieber am Samstag.",
          whyAr:
            "يوم الأحد في أكثر أنظمة البنايات يومُ هدوءٍ لا تُشغَّل فيه الغسّالة ولا المثقاب. والجملة صحيحةٌ لغةً لكنّها خطأٌ في العرف قد يجلب إنذاراً من المؤجّر.",
        },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: وصف البيت في a1-04 وقراءة الإعلان هنا",
        content:
          "في a1-04 تعلّمت أن تصف بيتك وصفاً شخصيّاً: «Meine Wohnung hat zwei Zimmer» بمفرداتٍ عامّةٍ وجملٍ بسيطة. وهنا تنتقل من الوصف إلى المعاملة: النصُّ ليس كلامك أنت بل نصُّ سوقٍ مكتوبٌ باختصاراتٍ (ZKB, OG, NK) ومصطلحاتٍ قانونيّةٍ (Kaution, Kündigungsfrist)، ودورُك فيه أن تفهم وتسأل وتفاوض. فالفرق بين الدرسين هو الفرق بين أن تتكلّم عن بيتك وأن تحصل على بيت.",
      },
    },
  ],
  reading: {
    id: "read-a2-04",
    titleDe: "Amir sucht eine Wohnung",
    titleAr: "أمير يبحث عن شقّة",
    textType: "erzaehlung",
    paragraphs: [
      "Seit drei Wochen sucht Amir eine neue Wohnung. Sein altes Zimmer im Studentenwohnheim ist zu klein geworden: Der Schreibtisch steht direkt neben dem Bett, die Bücher liegen auf dem Boden, und die Jacke hängt an der Tür, weil kein Schrank mehr in den Raum passt. Jeden Abend öffnet er das Internet und liest die Anzeigen: „3-ZKB, 78 qm, 2. OG, Kaltmiete 640 Euro plus 190 Euro Nebenkosten.“ Am Anfang hat er nur auf die erste Zahl geschaut. Dann hat ihm sein Nachbar erklärt, dass die Warmmiete das ist, was man wirklich bezahlt.",
      "Gestern hat Amir endlich eine Antwort bekommen. Die Vermieterin, Frau Krüger, hat einen Termin für eine Besichtigung vorgeschlagen. Die Wohnung liegt im dritten Stock eines ruhigen Hauses am Stadtrand. Amir ist eine halbe Stunde zu früh gekommen und hat vor dem Haus gewartet. Vor ihm standen schon acht andere Interessenten. „In München ist das normal“, hat eine Frau gesagt und ist ins Treppenhaus gegangen.",
      "Die Wohnung war hell. In der Küche stand ein alter Herd, im Bad hing ein großer Spiegel über dem Waschbecken, und zwischen den beiden Zimmern gab es eine Tür mit Glas. Amir hat gefragt: „Sind die Nebenkosten in der Warmmiete enthalten? Und wie hoch ist die Kaution?“ Frau Krüger hat geantwortet: „Die Kaution beträgt zwei Kaltmieten. Sie bekommen das Geld beim Auszug zurück, wenn die Wohnung in Ordnung ist.“ Dann hat sie ihm die Hausordnung gezeigt und auf die Ruhezeiten gezeigt: nach 22 Uhr und den ganzen Sonntag.",
      "Eine Woche später kam die E-Mail: Amir bekommt die Wohnung. Am Samstag trägt er seine Kartons ins Erdgeschoss, stellt sie neben den Aufzug und fährt nach oben. Er stellt die Lampe neben das Sofa, legt den Teppich auf den Boden und hängt endlich seine Bilder an die Wand. Bevor er den Vertrag unterschrieben hat, haben beide das Übergabeprotokoll ausgefüllt. „Schreiben Sie jeden Kratzer hinein“, hat Frau Krüger gesagt. „Das schützt Sie später.“",
    ],
    paragraphsAr: [
      "منذ ثلاثة أسابيع وأمير يبحث عن شقّة جديدة. غرفتُه القديمة في السكن الجامعيّ صارت أصغر من أن تكفيه: المكتب قائمٌ ملاصقاً للسرير، والكتب ملقاةٌ على الأرض، والسترة معلّقةٌ على الباب لأنّ الغرفة لم يعد يتّسع فيها مكانٌ لخزانة. وكلّ مساءٍ يفتح الإنترنت ويقرأ الإعلانات: «ثلاث غرف ومطبخ وحمّام، 78 م²، الطابق الثاني، إيجار صافٍ 640 يورو زائد 190 يورو مصاريف إضافيّة». في البداية لم يكن ينظر إلّا إلى الرقم الأوّل. ثمّ شرح له جارُه أنّ الإيجار الشامل هو ما يُدفع فعلاً.",
      "وبالأمس وصله أخيراً ردّ. اقترحت المؤجّرة، السيّدة كروغر، موعداً للمعاينة. الشقّة في الطابق الثالث من بنايةٍ هادئةٍ في أطراف المدينة. وصل أمير قبل الموعد بنصف ساعةٍ وانتظر أمام البناية. وكان أمامه ثمانيةُ مهتمّين آخرين. قالت إحدى النساء: «هذا أمرٌ عاديٌّ في ميونخ»، ودخلت إلى بيت الدرج.",
      "كانت الشقّة مضيئة. في المطبخ موقدٌ قديم، وفي الحمّام مرآةٌ كبيرةٌ معلّقةٌ فوق المغسلة، وبين الغرفتين بابٌ من زجاج. سأل أمير: «هل المصاريف الإضافيّة داخلةٌ في الإيجار الشامل؟ وكم مقدار التأمين؟» فأجابت السيّدة كروغر: «التأمين إيجاران صافيان. ويُردّ إليك المال عند الخروج إن كانت الشقّة سليمة». ثمّ أرَتْه نظام البناية وأشارت إلى أوقات الهدوء: بعد العاشرة ليلاً ويوم الأحد كلَّه.",
      "وبعد أسبوعٍ وصلت الرسالة: أمير حصل على الشقّة. يوم السبت يحمل صناديقه إلى الطابق الأرضيّ، ويضعها بجانب المصعد، ويصعد. يضع المصباح بجانب الأريكة، ويفرش السجّادة على الأرض، ويعلّق أخيراً صورَه على الجدار. وقبل أن يوقّع العقد ملأ الاثنان محضر التسليم. قالت السيّدة كروغر: «اكتب فيه كلّ خدش. هذا يحميك لاحقاً».",
    ],
    glossary: [
      {
        de: "die Anzeige",
        ar: "الإعلان",
        noteAr: "إعلان عقاريّ؛ الجمع die Anzeigen.",
      },
      {
        de: "die Kaltmiete",
        ar: "الإيجار الصافي",
        noteAr: "من غير المصاريف الإضافيّة.",
      },
      {
        de: "die Nebenkosten",
        ar: "المصاريف الإضافيّة",
        noteAr: "جمعٌ دائماً: ماء وتدفئة ونفايات.",
      },
      {
        de: "die Warmmiete",
        ar: "الإيجار الشامل",
        noteAr: "Kaltmiete + Nebenkosten = ما تدفعه فعلاً.",
      },
      {
        de: "die Besichtigung",
        ar: "المعاينة",
        noteAr: "من besichtigen؛ غالباً جماعيّة.",
      },
      {
        de: "die Kaution",
        ar: "التأمين",
        noteAr: "حتّى ثلاثة إيجاراتٍ صافية، وتُردّ عند الخروج.",
      },
      {
        de: "die Vermieterin",
        ar: "المؤجِّرة",
        noteAr: "المذكّر der Vermieter.",
      },
      {
        de: "das Treppenhaus",
        ar: "بيت الدرج",
        noteAr: "المساحة المشتركة بين الطوابق.",
      },
      {
        de: "der Interessent",
        ar: "المهتمّ / الراغب",
        noteAr: "في الإعلانات: طالبُ الشقّة.",
      },
      {
        de: "das Übergabeprotokoll",
        ar: "محضر التسليم",
        noteAr: "يُوقَّع يوم الاستلام وتُسجَّل فيه العيوب.",
      },
      { de: "der Kratzer", ar: "الخدش", noteAr: "من kratzen يخدش." },
      {
        de: "der Stadtrand",
        ar: "أطراف المدينة",
        noteAr: "مقابل die Innenstadt وسط المدينة.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Warum sucht Amir eine neue Wohnung?",
        instructionAr: "اقرأ الفقرة الأولى: لماذا يبحث أمير عن شقّة جديدة؟",
        options: [
          "Sein Zimmer im Wohnheim ist zu klein geworden",
          "Er möchte in eine andere Stadt ziehen",
          "Seine Miete ist zu teuer geworden",
          "Er hat Streit mit seinem Nachbarn",
        ],
        correctIndex: 0,
        explanation:
          "«Sein altes Zimmer im Studentenwohnheim ist zu klein geworden» — والدليل أنّ الكتب على الأرض ولا مكان لخزانة.",
        errorType: "vocabulary",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Was ist die Warmmiete?",
        instructionAr: "ماذا يعني الإيجار الشامل؟",
        options: [
          "Nur die Kaltmiete ohne Nebenkosten",
          "Kaltmiete plus Nebenkosten — was man wirklich zahlt",
          "Die Kaution für die Wohnung",
          "Nur die Kosten für die Heizung",
        ],
        correctIndex: 1,
        explanation:
          "الجار شرح «dass die Warmmiete das ist, was man wirklich bezahlt»: 640 + 190.",
        errorType: "vocabulary",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        questionDe: "Wie hoch ist die Kaution?",
        instructionAr: "كم مقدار التأمين؟",
        options: [
          "Drei Kaltmieten",
          "Eine Warmmiete",
          "Zwei Kaltmieten",
          "190 Euro",
        ],
        correctIndex: 2,
        explanation:
          "«Die Kaution beträgt zwei Kaltmieten» ويُردّ المال عند الخروج إن كانت الشقّة سليمة.",
        errorType: "vocabulary",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 3,
        questionDe: "Wo hängt der Spiegel?",
        instructionAr: "أين المرآة المعلّقة؟",
        options: [
          "In der Küche neben dem Herd",
          "Im Bad über dem Waschbecken",
          "Zwischen den beiden Zimmern",
          "Im Treppenhaus",
        ],
        correctIndex: 1,
        explanation:
          "«im Bad hing ein großer Spiegel über dem Waschbecken» — والسؤال wo? فجاء الـ Dativ.",
        errorType: "case",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Was macht Amir mit der Lampe?",
        instructionAr: "ماذا يفعل أمير بالمصباح؟",
        options: [
          "Er stellt sie neben das Sofa",
          "Sie steht schon neben dem Sofa",
          "Er hängt sie an die Wand",
          "Er legt sie auf den Teppich",
        ],
        correctIndex: 0,
        explanation:
          "«Er stellt die Lampe neben das Sofa»: فعلٌ متعدٍّ يُحدِث الوضع فجرّ Akkusativ.",
        errorType: "case",
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Wozu dient das Übergabeprotokoll?",
        instructionAr: "ما فائدة محضر التسليم؟",
        options: [
          "Es ist der Mietvertrag",
          "Damit bezahlt man die Nebenkosten",
          "Man notiert jeden Kratzer — das schützt den Mieter",
          "Es zeigt die Ruhezeiten",
        ],
        correctIndex: 2,
        explanation:
          "«Schreiben Sie jeden Kratzer hinein — das schützt Sie später»: حمايةٌ عند استرداد التأمين.",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      {
        de: "Ich interessiere mich für Ihre Anzeige.",
        ar: "أنا مهتمٌّ بإعلانكم",
      },
      {
        de: "Wäre es möglich, einen Termin für eine Besichtigung zu vereinbaren?",
        ar: "هل يمكن الاتّفاق على موعدٍ للمعاينة؟",
      },
      {
        de: "Sind die Nebenkosten in der Warmmiete enthalten?",
        ar: "هل المصاريف الإضافيّة داخلةٌ في الإيجار الشامل؟",
      },
      {
        de: "Wie hoch ist die Kaution und wann bekomme ich sie zurück?",
        ar: "كم التأمين ومتى يُردّ إليّ؟",
      },
      {
        de: "Ab wann ist die Wohnung frei?",
        ar: "من متى تكون الشقّة متاحة؟",
      },
      {
        de: "Gibt es einen Aufzug und einen Keller?",
        ar: "هل يوجد مصعدٌ وقبو؟",
      },
    ],
    discussionAr:
      "صِفْ غرفتك الآن بأفعال الوضع: ماذا يقف (steht) فيها وماذا يضطجع (liegt) وماذا يُعلَّق (hängt)؟ ثمّ قارِنْ بين البحث عن سكنٍ في بلدك والبحث عنه في ألمانيا: أيّهما أكثر تعقيداً، وما الوثائق المطلوبة عندكم، وهل توجد أوقات هدوءٍ مكتوبةٌ في نظام البناية؟",
  },
  listening: {
    items: [
      {
        id: "l1",
        title: "مشاهدة شقة",
        lines: [
          {
            speaker: "Vermieter",
            de: "Das ist die Wohnung. Sie hat drei Zimmer und eine Küche.",
            ar: "هذه هي الشقة. فيها ثلاث غرف ومطبخ.",
          },
          {
            speaker: "Mona",
            de: "Schön! Wo ist das Bad?",
            ar: "جميلة! أين الحمام؟",
          },
          {
            speaker: "Vermieter",
            de: "Das Bad ist neben dem Schlafzimmer.",
            ar: "الحمام بجانب غرفة النوم.",
          },
          {
            speaker: "Mona",
            de: "Und wie hoch ist die Miete?",
            ar: "وكم الإيجار؟",
          },
          {
            speaker: "Vermieter",
            de: "Sechshundert Euro warm.",
            ar: "ستمائة يورو شاملة التدفئة.",
          },
          {
            speaker: "Mona",
            de: "Okay. Ich stelle die Kiste hier in die Ecke.",
            ar: "حسناً. سأضع الصندوق هنا في الزاوية.",
          },
          { speaker: "Vermieter", de: "Kein Problem!", ar: "لا مشكلة!" },
        ],
      },
      {
        id: "l2",
        title: "أين الأشياء بعد النقل؟",
        lines: [
          {
            speaker: "Karim",
            de: "Ich hänge das Bild an die Wand.",
            ar: "أعلق الصورة على الجدار.",
          },
          { speaker: "Anna", de: "Gut! Und die Lampe?", ar: "جيد! والمصباح؟" },
          {
            speaker: "Karim",
            de: "Die Lampe kommt auf den Tisch.",
            ar: "المصباح سيذهب إلى الطاولة.",
          },
          {
            speaker: "Anna",
            de: "Der Teppich liegt unter dem Sofa, richtig?",
            ar: "السجادة تحت الأريكة، صحيح؟",
          },
          {
            speaker: "Karim",
            de: "Nein, ich lege ihn neben das Sofa.",
            ar: "لا، سأضعها بجانب الأريكة.",
          },
        ],
      },
      {
        id: "l3",
        title: "الجيران وقواعد البناء",
        lines: [
          {
            speaker: "Nachbarin",
            de: "Willkommen in der neuen Wohnung! Ich bin Frau Weber aus Zimmer 3.",
            ar: "مرحباً في الشقة الجديدة! أنا السيدة فيبر من الشقة 3.",
          },
          {
            speaker: "Mona",
            de: "Danke! Ich bin Mona. Wie sind die Regeln hier?",
            ar: "شكراً! أنا منى. ما القواعد هنا؟",
          },
          {
            speaker: "Nachbarin",
            de: "Bitte beachten Sie die Ruhezeiten: von 13 bis 15 Uhr und nach 22 Uhr.",
            ar: "يرجى احترام أوقات الهدوء: من 13 إلى 15 وبعد 22.",
          },
          {
            speaker: "Mona",
            de: "Kein Problem. Und der Müll?",
            ar: "لا مشكلة. والنفايات؟",
          },
          {
            speaker: "Nachbarin",
            de: "Der Müll kommt in die Tonne draußen: Papier, Plastik und Bio getrennt.",
            ar: "النفايات تذهب إلى الحاوية بالخارج: ورق وبلاستيك وعضوي مفصولة.",
          },
          {
            speaker: "Mona",
            de: "Verstanden. Und meine Schuhe? Kommen sie in den Hausflur?",
            ar: "فهمت. وحذائي؟ هل يذهب إلى المدخل؟",
          },
          {
            speaker: "Nachbarin",
            de: "Nein, bitte nicht! Der Hausflur bleibt frei. Im Sommer grillen wir zusammen im Hof.",
            ar: "لا من فضلك! يبقى المدخل فارغاً. وفي الصيف نشوي معاً في الفناء.",
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
        questionDe: "Wo ist das Bad?",
        questionAr: "أين الحمام؟",
        options: [
          "neben dem Schlafzimmer",
          "neben der Küche",
          "hinter dem Wohnzimmer",
          "unter dem Bett",
        ],
        correctIndex: 0,
        explanation: "قال المؤجر: Das Bad ist neben dem Schlafzimmer.",
        errorType: "preposition",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie hoch ist die Miete?",
        questionAr: "كم الإيجار؟",
        options: [
          "600 Euro warm",
          "600 Euro kalt",
          "300 Euro",
          "700 Euro warm",
        ],
        correctIndex: 0,
        explanation: "قال: Sechshundert Euro warm — 600 شاملة التدفئة.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wohin legt Karim den Teppich?",
        questionAr: "أين يضع كريم السجادة؟",
        options: [
          "neben das Sofa",
          "unter das Sofa",
          "auf den Tisch",
          "an die Wand",
        ],
        correctIndex: 0,
        explanation:
          "قال: Ich lege ihn neben das Sofa — بجانب الأريكة (حركة → Akkusativ).",
        errorType: "preposition",
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann sind die Ruhezeiten?",
        questionAr: "متى أوقات الهدوء؟",
        options: [
          "von 13 bis 15 Uhr und nach 22 Uhr",
          "von 8 bis 12 Uhr",
          "nur nachts",
          "am Wochenende",
        ],
        correctIndex: 0,
        explanation:
          "قالت الجارة: Bitte beachten Sie die Ruhezeiten: von 13 bis 15 Uhr und nach 22 Uhr.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات السكن: ck، ei، وie",
    items: [
      { de: "umziehen", ar: "ينتقل", note: "zieh = إي: أوم-تسيهن" },
      { de: "die Miete", ar: "الإيجار", note: "ie = إي: ميتِه" },
      { de: "der Vermieter", ar: "المؤجر", note: "v = ف: فِر-ميتِر" },
      { de: "die Anzeige", ar: "الإعلان", note: "ei = آي + g = غ: آن-تسايغِه" },
      { de: "zwischen", ar: "بين", note: "zw = تسڤ: تسڤيشن" },
      { de: "die Ecke", ar: "الزاوية", note: "ck = ك: إكّـِه" },
    ],
    tip: "zwischen صوت صعب: zw تُنطق «تسڤ» — تسڤيشن. كررها مع zwei (تسڤاي) — نفس البداية.",
    shadowing: [
      {
        de: "Die Wohnung hat drei Zimmer.",
        ar: "الشقة فيها ثلاث غرف.",
        tip: "Wohnung = ڤوهنونغ (w=ڤ)",
      },
      {
        de: "Das Bad ist neben dem Schlafzimmer.",
        ar: "الحمام بجانب غرفة النوم.",
        tip: "neben dem = نيبِن دِم",
      },
      {
        de: "Ich stelle die Tasse auf den Tisch.",
        ar: "أضع الكوب على الطاولة.",
        tip: "auf den = آوف دِن (حركة)",
      },
      {
        de: "Die Katze liegt unter dem Bett.",
        ar: "القطة مستلقية تحت السرير.",
        tip: "unter dem = أونتر دِم (سكون)",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب أين تضع شيئاً (حركة):",
      prompt: "Wo legst du das Buch? (اكتب: أضع الكتاب على الطاولة — حركة)",
      acceptedAnswers: [
        "Ich lege das Buch auf den Tisch",
        "Ich lege das Buch auf den Tisch.",
      ],
      sampleAnswer: "Ich lege das Buch auf den Tisch.",
      explanation: "legen (يضع) حركة → auf den (Akkusativ).",
      errorType: "preposition",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ dem أو den (حسب الحركة/السكون):",
      template:
        "Die Tasse steht auf ___ Tisch. Ich stelle die Tasse auf ___ Tisch. Das Bild hängt an ___ Wand.",
      blanks: [
        { correct: "dem", options: ["dem", "den"] },
        { correct: "den", options: ["dem", "den"] },
        { correct: "der", options: ["dem", "der", "den"] },
      ],
      explanation:
        "steht (سكون) → auf dem. stelle (حركة) → auf den. Wand مؤنثة → an der.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich hänge das Bild an die Wand.",
      explanation: "أعلق الصورة على الجدار — حركة → an die Wand (Akkusativ).",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Buch liegt auf ___ Tisch. (سكون)",
      options: ["dem", "den", "der", "das"],
      correctIndex: 0,
      explanation: "liegt سكون → Dativ: auf dem Tisch.",
      errorType: "case",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich lege das Buch auf ___ Tisch. (حركة)",
      options: ["den", "dem", "der", "das"],
      correctIndex: 0,
      explanation: "lege حركة → Akkusativ: auf den Tisch.",
      errorType: "case",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل حرف الجر بمعناه:",
      pairs: [
        { left: "über", right: "فوق" },
        { left: "unter", right: "تحت" },
        { left: "hinter", right: "خلف" },
        { left: "zwischen", right: "بين" },
      ],
      explanation: "أربعة حروف مكانية شائعة من التسعة.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["den", "Ich", "Tisch", "auf", "stelle", "die", "Tasse", "."],
      correctSentence: "Ich stelle die Tasse auf den Tisch.",
      explanation: "أضع الكوب على الطاولة (حركة → auf den).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich lege das Buch auf dem Tisch. (حركة)",
      wrongWord: "auf dem",
      correctWord: "auf den",
      options: ["auf den", "auf der", "auf das", "an den"],
      explanation: "legen حركة → Akkusativ: auf den.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالحرف الصحيح (in/an/auf/unter):",
      template:
        "Die Katze schläft ___ dem Sofa. (تحت) Das Bild hängt ___ der Wand. (على) Der Schlüssel liegt ___ dem Tisch. (على)",
      blanks: [
        { correct: "unter", options: ["unter", "an", "auf"] },
        { correct: "an", options: ["unter", "an", "auf"] },
        { correct: "auf", options: ["unter", "an", "auf"] },
      ],
      explanation: "تحت = unter، على الجدار = an، على الطاولة = auf.",
      errorType: "preposition",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل السكون إلى حركة:",
      prompt: "Die Tasse steht auf dem Tisch. → (أنا أضعها — حركة)",
      acceptedAnswers: [
        "Ich stelle die Tasse auf den Tisch",
        "Ich stelle die Tasse auf den Tisch.",
      ],
      sampleAnswer: "Ich stelle die Tasse auf den Tisch.",
      explanation: "stehen (سكون) → stellen (حركة) + dem → den.",
      errorType: "case",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich ziehe in eine neue Wohnung um.",
      questionAr: "ما معنى الجملة؟",
      options: [
        "أنتقل إلى شقة جديدة",
        "أبحث عن شقة جديدة",
        "أبيع شقتي",
        "أشتري شقة",
      ],
      correctIndex: 0,
      explanation: "umziehen = ينتقل سكناً (فعل منفصل: ziehe ... um).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Miete ist sechshundert Euro warm.",
      wrongWord: "warm",
      correctWord: "warm",
      isAlreadyCorrect: true,
      options: ["warm", "heiß", "kalt", "warme"],
      explanation:
        "«warm» هنا تعني شاملة التدفئة — الكلمة صحيحة! (warm/kalt للإيجار: مع/بدون تدفئة).",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich stelle die Kiste in die Ecke.",
      explanation: "أضع الصندوق في الزاوية — حركة → in die Ecke (Akkusativ).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "matching",
      instructionAr: "صِل كل كلمة بمعناها (مفردات العيش المشترك):",
      pairs: [
        { left: "der Nachbar", right: "الجار" },
        { left: "die Hausordnung", right: "نظام البيت" },
        { left: "die Ruhezeiten", right: "أوقات الهدوء" },
        { left: "der Hausflur", right: "مدخل المبنى" },
        { left: "die Nebenkosten", right: "التكاليف الإضافية" },
      ],
      hint: "Hausordnung = قواعد البناء؛ Ruhezeiten = أوقات الهدوء (القيلولة والليل).",
      explanation:
        "der Nachbar (الجار) → die Hausordnung (نظام البيت) → die Ruhezeiten (أوقات الهدوء) → der Hausflur (المدخل).",
      errorType: "vocabulary",
      points: 2,
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr:
        "أكمل بالحالة الصحيحة (wo? / wohin?) في جمل العيش المشترك:",
      template:
        "Der Müll kommt in ___ Tonne. (حركة) · Der Teppich liegt im ___ (غرفة المعيشة)",
      blanks: [
        { correct: "die", options: ["die", "der", "dem", "das"] },
        {
          correct: "Wohnzimmer",
          options: ["Wohnzimmer", "Wohnzimmers", "Wohnzimmeres"],
        },
      ],
      hint: "kommt = حركة ← Akkusativ (in die Tonne). im = سكون ← Dativ (im Wohnzimmer).",
      explanation:
        "in die Tonne (حركة ← Akkusativ) + im Wohnzimmer (سكون ← Dativ) — نفس قاعدة الحروف المتغيرة.",
      errorType: "case",
      points: 2,
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بأداة التعريف الصحيحة (انتبه: wo? أم wohin?):",
      template:
        "Der Spiegel hängt an ___ Wand, aber ich hänge das Bild an ___ Wand daneben.",
      blanks: [
        { correct: "der", options: ["der", "die", "dem"], errorType: "case" },
        { correct: "die", options: ["die", "der", "dem"], errorType: "case" },
      ],
      explanation:
        "hängen اللازم يصف استقراراً → wo? → Dativ (an der Wand). وhängen المتعدّي مع مفعولٍ يُحدِث انتقالاً → wohin? → Akkusativ (an die Wand).",
      errorType: "case",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المناسب لهيئة الشيء:",
      questionDe: "Ich ___ die Vase auf den Tisch. (وأضعها قائمةً على قاعدتها)",
      options: ["stelle", "lege", "setze", "liege"],
      correctIndex: 0,
      explanation:
        "المزهريّة ذات قاعدةٍ تقوم عليها فبابُها stellen لا legen؛ وlegen للمنبسط على جنبه. وstellen متعدٍّ فجرّ Akkusativ: auf den Tisch.",
      errorType: "vocabulary",
    },
    {
      id: "e15",
      type: "error-correction",
      instructionAr: "صحّح الاندماج الخاطئ:",
      wrongSentence: "Am Samstag ziehen wir im Erdgeschoss.",
      wrongWord: "im",
      correctWord: "ins",
      options: ["ins", "am", "aufs", "beim"],
      explanation:
        "الانتقال حركةٌ تعبر حدّاً → Akkusativ → in das = ins. وقاعدة الميم والسين: ما آخره s حركة، وما آخره m سكون.",
      errorType: "preposition",
    },
    {
      id: "e16",
      type: "matching",
      instructionAr: "صل مصطلح الإعلان بمعناه:",
      pairs: [
        { left: "die Kaltmiete", right: "الإيجار الصافي بلا مصاريف" },
        { left: "die Nebenkosten", right: "ماء وتدفئة ونفايات" },
        { left: "die Warmmiete", right: "المجموع الشهريّ الفعليّ" },
        { left: "die Kaution", right: "تأمينٌ يُردّ عند الخروج" },
      ],
      explanation:
        "الرقم الذي يعنيك في الإعلان هو Warmmiete = Kaltmiete + Nebenkosten، والـ Kaution تُودَع مرّةً واحدةً وتُستردّ.",
      errorType: "vocabulary",
    },
    {
      id: "e17",
      type: "transformation",
      instructionAr:
        "حوّل من وصف الاستقرار إلى وصف الوضع (استعمل الفعل المتعدّي):",
      prompt: "Der Teppich liegt auf dem Boden. → (Ich ...)",
      acceptedAnswers: [
        "Ich lege den Teppich auf den Boden.",
        "Ich lege den Teppich auf den Boden",
      ],
      sampleAnswer: "Ich lege den Teppich auf den Boden.",
      explanation:
        "liegen اللازم (Dativ: auf dem Boden) يقابله legen المتعدّي، ومع المفعول تتحوّل الحالة إلى Akkusativ: auf den Boden.",
      errorType: "case",
    },
    {
      id: "e18",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة في سياق المعاينة:",
      questionDe:
        "Ich möchte die Wohnung gern ___ . Können wir einen Termin vereinbaren?",
      options: ["besichtigen", "aussehen", "anschauen lassen", "besuchen"],
      correctIndex: 0,
      explanation:
        "الفعل المتخصّص لمعاينة سكنٍ هو besichtigen، ومنه die Besichtigung. أمّا besuchen فلزيارة شخصٍ، وaussehen يعني «يبدو».",
      errorType: "vocabulary",
    },
    {
      id: "e19",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل المناسب من أفعال الوضع والاستقرار:",
      template:
        "Der Schlüssel ___ noch in der Tür, und die Kartons ___ neben dem Aufzug.",
      blanks: [
        {
          correct: "steckt",
          options: ["steckt", "stellt", "legt"],
          errorType: "vocabulary",
        },
        {
          correct: "stehen",
          options: ["stehen", "liegen", "hängen"],
          errorType: "vocabulary",
        },
      ],
      explanation:
        "stecken للمغروز في فتحة، ويعمل في الاتّجاهين بصورةٍ واحدة. والصناديق ذات قاعدةٍ فبابُها stehen.",
      errorType: "vocabulary",
    },
    {
      id: "e20",
      type: "word-ordering",
      instructionAr: "رتّب سؤال المعاينة:",
      tokens: [
        "die",
        "Sind",
        "in",
        "der",
        "Nebenkosten",
        "Warmmiete",
        "enthalten",
        "?",
      ],
      correctSentence: "Sind die Nebenkosten in der Warmmiete enthalten?",
      explanation:
        "سؤالٌ بلا أداة استفهام يبدأ بالفعل المصرَّف Sind، ويختم باسم المفعول enthalten في آخر الجملة.",
      errorType: "word-order",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich lege das Buch auf dem Tisch.",
        right: "Ich lege das Buch auf den Tisch.",
        whyAr: "legen (يضع) حركة → Akkusativ.",
      },
      {
        wrong: "Das Buch liegt auf den Tisch.",
        right: "Das Buch liegt auf dem Tisch.",
        whyAr: "liegen (موجود) سكون → Dativ.",
      },
      {
        wrong: "Sechshundert Euro kalt (ظن أنها «باردة»)",
        right: "kalt = بدون تدفئة، warm = شاملة التدفئة",
        whyAr: "في العقارات: warm/kalt تدل على شمولية التدفئة وليس الحرارة.",
      },
    ],
    eselsbruecken: [
      "«السكون Dativ (يمكث)، الحركة Akkusativ (يمشي)» — السؤال الأول الذي تسأله: wo? أم wohin?",
      "أفعال الحكم: يضع (stellen/legen) = حركة. يقف (stehen/liegen) = سكون.",
    ],
    culturalNote: {
      title: "نظام الإيجار في ألمانيا",
      content:
        "العقود الألمانية تحمي المستأجر بقوة: «die Kaution» (الضمان = 2-3 إيجارات)، و«die Nebenkosten» (المصاريف الإضافية: ماء، تدفئة). والإعلانات غالباً «2-Zimmer-Wohnung» أي شقة بغرفتين. وعند زيارة الشقة: اصطحب «Wohnungsbesichtigung» قبل توقيع العقد!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich stelle die Vase auf ___ Tisch. (حركة)",
      options: ["den", "dem", "der", "das"],
      correctIndex: 0,
      explanation: "stellen حركة → auf den.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Die Vase steht auf ___ Tisch. (سكون)",
      options: ["dem", "den", "der", "das"],
      correctIndex: 0,
      explanation: "stehen سكون → auf dem.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["die", "Wand", "an", "Ich", "Bild", "das", "hänge", "."],
      correctSentence: "Ich hänge das Bild an die Wand.",
      explanation: "أعلق الصورة على الجدار — حركة → an die Wand.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Katze liegt unter den Bett.",
      wrongWord: "unter den",
      correctWord: "unter dem",
      options: ["unter dem", "unter den", "unter das", "unter der"],
      explanation: "liegt سكون → Dativ: unter dem Bett.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ dem أو den:",
      template:
        "Der Tisch steht neben ___ Sofa. Ich stelle den Stuhl neben ___ Sofa.",
      blanks: [
        { correct: "dem", options: ["dem", "den"] },
        { correct: "den", options: ["dem", "den"] },
      ],
      explanation: "steht سكون → neben dem. stelle حركة → neben den.",
      errorType: "case",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "umziehen",
      ar: "ينتقل (سكناً)",
      example: "Ich bin umgezogen.",
      exampleAr: "انتقلت.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Miete",
      ar: "الإيجار",
      example: "Die Miete ist hoch.",
      exampleAr: "الإيجار مرتفع.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "der Vermieter",
      ar: "المؤجر",
      example: "Der Vermieter ist nett.",
      exampleAr: "المؤجر لطيف.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "die Wechselpräpositionen",
      ar: "حروف الجر المتغيرة",
      example: "in, an, auf, über, unter...",
      exampleAr: "في، على، فوق، تحت...",
      level: "A2",
    },
    {
      id: "fc5",
      de: "wo? (Dativ) / wohin? (Akkusativ)",
      ar: "أين؟ (سكون) / إلى أين؟ (حركة)",
      example: "auf dem Tisch / auf den Tisch",
      exampleAr: "على الطاولة (سكون/حركة)",
      level: "A2",
    },
    {
      id: "fc6",
      de: "stellen / stehen",
      ar: "يضع (حركة) / يقف (سكون)",
      example: "Ich stelle ... auf den Tisch.",
      exampleAr: "أضع ... على الطاولة.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "legen / liegen",
      ar: "يضع (أفقياً) / يستلقي",
      example: "Ich lege das Buch ...",
      exampleAr: "أضع الكتاب...",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Anzeige",
      ar: "الإعلان",
      example: "Die Anzeige ist im Internet.",
      exampleAr: "الإعلان على الإنترنت.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "der Nachbar",
      ar: "الجار",
      example: "Der Nachbar ist freundlich.",
      exampleAr: "الجار ودود.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "die Hausordnung",
      ar: "نظام البيت/قواعد البناء",
      example: "Die Hausordnung gilt für alle.",
      exampleAr: "نظام البيت يسري على الجميع.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "die Ruhezeiten",
      ar: "أوقات الهدوء",
      example: "Ruhezeiten: von 13 bis 15 Uhr.",
      exampleAr: "أوقات الهدوء: من 13 إلى 15.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "der Hausflur",
      ar: "مدخل المبنى",
      example: "Der Hausflur ist sauber.",
      exampleAr: "مدخل المبنى نظيف.",
      level: "A2",
    },
    {
      id: "f13",
      de: "die Kaltmiete / die Warmmiete",
      ar: "الإيجار الصافي / الشامل",
      example: "Die Kaltmiete beträgt 640 Euro, warm sind es 830.",
      exampleAr: "الإيجار الصافي 640 يورو، والشامل 830.",
      level: "A2",
    },
    {
      id: "f14",
      de: "die Nebenkosten",
      ar: "المصاريف الإضافيّة",
      example: "Sind die Nebenkosten in der Warmmiete enthalten?",
      exampleAr: "هل المصاريف الإضافيّة داخلةٌ في الإيجار الشامل؟",
      level: "A2",
    },
    {
      id: "f15",
      de: "die Kaution",
      ar: "التأمين (يُردّ عند الخروج)",
      example: "Die Kaution beträgt zwei Kaltmieten.",
      exampleAr: "التأمين إيجاران صافيان.",
      level: "A2",
    },
    {
      id: "f16",
      de: "besichtigen / die Besichtigung",
      ar: "يعاين / المعاينة",
      example: "Ich möchte die Wohnung gern besichtigen.",
      exampleAr: "أودّ معاينة الشقّة.",
      level: "A2",
    },
    {
      id: "f17",
      de: "setzen / sitzen",
      ar: "يُجلِس / يجلس",
      example: "Ich setze mich auf den Sessel; jetzt sitze ich auf dem Sessel.",
      exampleAr: "أجلس على الكرسيّ؛ والآن أنا جالسٌ عليه.",
      level: "A2",
    },
    {
      id: "f18",
      de: "hängen / stecken",
      ar: "يعلّق / يغرز (يكون مغروزاً)",
      example:
        "Der Mantel hängt an der Garderobe, der Schlüssel steckt in der Tür.",
      exampleAr: "المعطف معلّقٌ على المشجب، والمفتاح مغروزٌ في الباب.",
      level: "A2",
    },
    {
      id: "f19",
      de: "das Erdgeschoss",
      ar: "الطابق الأرضيّ",
      example: "Wir tragen die Kartons ins Erdgeschoss.",
      exampleAr: "نحمل الصناديق إلى الطابق الأرضيّ.",
      level: "A2",
    },
    {
      id: "f20",
      de: "das Übergabeprotokoll",
      ar: "محضر التسليم",
      example: "Schreiben Sie jeden Kratzer ins Übergabeprotokoll.",
      exampleAr: "اكتب كلّ خدشٍ في محضر التسليم.",
      level: "A2",
    },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a2-04-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص إعلان سكن بالعربية لصديق",
      sourceDe:
        "Helle 3-Zimmer-Wohnung im 2. Stock. Balkon, Einbauküche, Keller. 750 Euro warm. Besichtigung am Samstag.",
      taskAr:
        "لخّص الإعلان: نوع الشقة، الطابق، المميزات، الإيجار، وموعد المعاينة.",
      modelAnswerAr:
        "«شقة مشرقة من 3 غرف في الطابق الثاني. شرفة ومطبخ مجهز وقبو. 750 يورو شاملاً. المعاينة السبت.»",
      keyPointsAr: [
        "نقلت الغرف والطابق",
        "ذكرت الشرفة والمطبخ",
        "نقلت الإيجار وموعد المعاينة",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a2-04-1",
      scenarioAr: "تتصل بخصوص شقة وتتفاوض على موعد معاينة.",
      scenarioDe: "Anruf wegen einer Wohnung — Besichtigung vereinbaren.",
      strategyAr: "الاستراتيجية: طرح أسئلة مفصلة وترتيب معاينة.",
      rounds: [
        {
          speakerDe: "Guten Tag, wegen der Wohnungsanzeige?",
          speakerAr: "نهارك سعيد، بخصوص إعلان الشقة؟",
          options: [
            {
              de: "Ja. Ist die Wohnung noch frei?",
              ar: "نعم. هل الشقة ما زالت متاحة؟",
              best: true,
              replyDe: "Ja, sie ist noch frei. Möchten Sie sie besichtigen?",
              replyAr: "نعم متاحة. هل تريد معاينتها؟",
            },
            {
              de: "Nein, ich rufe wegen eines Flugzeugs an.",
              ar: "لا، أتصل بخصوص طائرة.",
              best: false,
              replyDe: "Das ist ein Wohnungsinserat.",
              replyAr: "هذا إعلان شقة.",
            },
          ],
        },
        {
          speakerDe: "Möchten Sie die Wohnung besichtigen?",
          speakerAr: "هل تريد معاينة الشقة؟",
          options: [
            {
              de: "Ja, gern. Passt Samstag um 11 Uhr?",
              ar: "نعم بكل سرور. هل يناسبك السبت الساعة 11؟",
              best: true,
              replyDe: "Samstag um 11 Uhr ist perfekt.",
              replyAr: "السبت الساعة 11 مثالي.",
            },
            {
              de: "Ich kann nur nachts kommen.",
              ar: "لا أستطيع الحضور إلا ليلاً.",
              best: false,
              replyDe: "Nachts ist keine Besichtigung möglich.",
              replyAr: "المعاينة ليلاً غير ممكنة.",
            },
          ],
        },
      ],
    },
  ],
};
