import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-10: العمل والمهن
 * — المهن (مذكر/مؤنث) + النفي بـ nicht وkein
 */
export const lessonA110: Lesson = {
  id: "a1-10",
  unitId: "a1-10",
  level: "A1",
  order: 1,
  titleDe: "Arbeit und Berufe",
  titleAr: "العمل والمهن",
  duration: 30,
  summary:
    "أسماء المهن وأشكالها المذكرة والمؤنثة، فعل arbeiten، والنفي بالألمانية: nicht مع الأفعال والصفات، kein مع الأسماء.",
  lernziele: [
    {
      id: "z1",
      de: "Ich kann Berufe nennen.",
      ar: "أن أسمّي المهن: Lehrer, Arzt, Ingenieur, Verkäufer...",
    },
    {
      id: "z2",
      de: "Ich kann die Berufe feminin bilden: Lehrer → Lehrerin.",
      ar: "أن أصوغ المؤنث من المهن (معلم → معلمة).",
    },
    {
      id: "z3",
      de: "Ich kann sagen: Ich arbeite als ...",
      ar: "أن أعبر عن مهنتي: أعمل كـ...",
    },
    {
      id: "z4",
      de: "Ich kann verneinen: nicht und kein.",
      ar: "أن أنفي بـ nicht (مع الأفعال) وkein (مع الأسماء).",
    },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "كيف تنفي بالعربية؟ «لا أعمل» و«ليس لدي عمل». لاحظت: العربية تستخدم «لا» و«ليس» حسب السياق. الألمانية تفعل شيئاً مشابهاً: nicht وkein. لكن القاعدة عندهم أوضح — خمّن متى نستخدم أيهما؟",
    motivatingQuestionDe: "Was bist du von Beruf?",
    contextAr:
      "ندخل عالم العمل: المهن وطريقة صياغة المؤنث منها، ثم نكتشف سر النفي المزدوج: nicht (للفعل والصفة) وkein (للاسم).",
    contextDe: "Ich arbeite als Lehrer.",
    connectionToPreviousAr:
      "تعلمنا sein (أنا معلم) في الدرس الأول. اليوم نضيف: صيغة «أعمل كـ» + النفي — تكتمل أدوات تقديم نفسك.",
    activateVocabulary: [
      { de: "der Beruf", ar: "المهنة" },
      { de: "arbeiten", ar: "يعمل" },
      { de: "der Lehrer", ar: "المعلم" },
      { de: "der Arzt", ar: "الطبيب" },
      { de: "nicht", ar: "لا (نفي)" },
    ],
  },
  theory: [
    {
      id: "t1",
      titleAr: "المهن: المذكر والمؤنث + arbeiten als",
      titleDe: "Berufe: maskulin, feminin und „arbeiten als“",
      explanationAr:
        "المهنة أوّل ما يُسأل عنه المرء في ألمانيا بعد اسمه، والسؤال ثابت: **Was sind Sie von Beruf?** أو **Was machen Sie beruflich?**\n\n**أوّلاً — بناء المؤنّث: اللاحقة ـin.**\nder Lehrer ⇐ die Lehrer**in** · der Verkäufer ⇐ die Verkäufer**in** · der Student ⇐ die Student**in**.\nوكلّ مؤنّث بـ ـin فهو **مؤنّث** حتماً (die) وجمعه بـ **ـnen**: die Lehrerinnen. وهذه قاعدة لا تشذّ.\n\n**ثانياً — الشذوذ: مهنٌ تُضيف Umlaut مع اللاحقة.**\n· der Arzt ⇐ die **Ä**rztin · der Koch ⇐ die K**ö**chin · der Bauer ⇐ die B**äu**erin\nوالسبب تاريخيّ: اللاحقة كانت في الألمانية القديمة تحمل حرف i، وحرف i يجذب حرف العلّة الذي قبله فيرقّقه — وهذه ظاهرة اسمها **Umlaut** رأيتَها في الجمع (der Apfel ⇐ die Äpfel) وفي تصريف الفعل (fahren ⇐ du fährst). فالظاهرة واحدة في ثلاثة أبواب.\n\n**ثالثاً — الصيغتان: bin مقابل arbeite als.**\n· **Ich bin Lehrer.** = هويّة مهنية، تُقال في التعريف بالنفس.\n· **Ich arbeite als Lehrer.** = وظيفة حالية، وتوحي بأنّها قد تتغيّر.\nوكلتاهما صحيحة، لكن انتبه إلى قاعدة تخالف العربية والإنجليزية معاً: **المهنة بعد sein تُقال بلا أداة**. لا تقل Ich bin ein Lehrer، بل Ich bin Lehrer. والأداة تعود فقط إذا وُصفت المهنة بصفة: Ich bin **ein guter** Lehrer.\n\n**رابعاً — مفردات المحيط المهنيّ.** der Chef (المدير) · die Kollegin (الزميلة) · die Firma (الشركة) · die Abteilung (القسم) · das Praktikum (التدريب العمليّ) · das Gehalt (الراتب) · arbeitslos (عاطل عن العمل) · selbstständig (يعمل لحسابه).\nوتعبيرٌ لا غنى عنه للطالب: **Ich mache ein Praktikum bei …** (أؤدّي تدريباً عملياً في …).",
      whyAr:
        "لماذا تسقط الأداة في Ich bin Lehrer؟ لأنّ الألمانية تعامل المهنة بعد sein **صفةً لا اسماً**: أنت لا تقول إنّك واحدٌ من مجموعة المعلّمين، بل تصف حالتك. والصفة لا تحتاج أداة. والدليل أنّ الأداة تعود فوراً إذا أضفتَ صفةً حقيقية: ein guter Lehrer — لأنّ التركيب حينئذٍ صار اسمياً موصوفاً.\n\nولماذا يُعنى الدرس بهذه النقطة الصغيرة؟ لأنّها أوّل جملة تقولها في أيّ مقابلة أو تعارف، وIch bin ein Lehrer تُسمع فوراً ترجمةً حرفية من الإنجليزية (I am a teacher). وهي من أكثر ثلاثة أخطاء يرصدها ممتحنو Goethe A1 في قسم Sprechen Teil 1 — التعريف بالنفس.\n\nوأمّا اللاحقة ـin فمسألة اجتماعية معاصرة: ألمانيا اليوم تكتب المهن بصيغتين في كلّ إعلان وظيفة (Lehrer/in أو Lehrer:in)، ومن لا يعرف بناء المؤنّث لا يفهم إعلانات العمل نفسها.",
      table: {
        title: "المهن المذكر والمؤنث",
        columns: ["مذكر", "مؤنث", "العربية"],
        rows: [
          { label: "der Lehrer", cells: ["die Lehrerin", "معلم/معلمة"] },
          { label: "der Arzt", cells: ["die Ärztin", "طبيب/طبيبة"] },
          {
            label: "der Ingenieur",
            cells: ["die Ingenieurin", "مهندس/مهندسة"],
          },
          { label: "der Verkäufer", cells: ["die Verkäuferin", "بائع/بائعة"] },
          { label: "der Student", cells: ["die Studentin", "طالب/طالبة"] },
          { label: "der Koch", cells: ["die Köchin", "طباخ/طباخة"] },
          { label: "der Fahrer", cells: ["die Fahrerin", "سائق/سائقة"] },
          { label: "der Kellner", cells: ["die Kellnerin", "نادل/نادلة"] },
        ],
      },
      examples: [
        {
          de: "Ich bin Lehrer von Beruf.",
          ar: "أنا معلّم بالمهنة. (بلا أداة بعد bin)",
        },
        {
          de: "Meine Mutter ist Ärztin.",
          ar: "أمّي طبيبة. (Umlaut مع اللاحقة)",
        },
        {
          de: "Er arbeitet als Ingenieur bei Siemens.",
          ar: "يعمل مهندساً في سيمنس.",
        },
        {
          de: "Sie ist Verkäuferin in einem Supermarkt.",
          ar: "هي بائعة في سوبرماركت.",
        },
        {
          de: "Was sind Sie von Beruf? — Ich bin Krankenpfleger.",
          ar: "ما مهنتك؟ — أنا ممرّض.",
        },
        {
          de: "Ich mache ein Praktikum bei einer Firma in Berlin.",
          ar: "أؤدّي تدريباً عملياً في شركة ببرلين.",
        },
        {
          de: "Mein Bruder ist zurzeit arbeitslos.",
          ar: "أخي عاطل عن العمل حالياً.",
        },
        {
          de: "Unsere Kollegin ist selbstständig.",
          ar: "زميلتنا تعمل لحسابها الخاصّ.",
        },
      ],
      comparisonWithArabic:
        "التشابه بين اللغتين هنا لافت: العربية تضيف تاء التأنيث (معلّم ⇐ معلّمة) والألمانية تضيف ـin (Lehrer ⇐ Lehrerin). لاحقة واحدة منتظمة في كلتيهما.\n\nلكنّ ثلاثة فروق تُوقع العربيّ:\n**١.** العربية تقول „أنا معلّم“ بلا رابط وبلا أداة، والألمانية تُلزمك بالرابط ist/bin وتمنع الأداة. فالعربيّ يضيف الأداة (متأثّراً بالإنجليزية) ويصيب في حذف… لا، بل يصيب في الرابط ويخطئ في الأداة.\n**٢.** العربية لا تعرف ظاهرة Umlaut إطلاقاً، فتغيير حرف العلّة في Arzt ⇐ Ärztin يبدو للعربيّ تعسّفاً يجب حفظه، بينما هو للألمانيّ قاعدة صوتية مطّردة.\n**٣.** العربية تقول „أعمل معلّماً“ بالحال منصوباً بلا حرف، والألمانية تُلزم بـals: arbeiten **als** Lehrer. وحذف als من أشيع أخطاء العرب في وصف العمل.",
      eselsbruecke:
        "«المؤنث = +in»: Lehrerin، Verkäuferin، Studentin — تماماً كالتاء المربوطة في العربية. وثلاثة شواذ بخطة أ: Arzt→Ärztin، Koch→Köchin.",
      commonMistakes: [
        {
          wrong: "Ich bin ein Lehrer.",
          right: "Ich bin Lehrer.",
          whyAr:
            "المهنة بعد sein تُقال بلا أداة لأنّ الألمانية تعاملها معاملة الصفة لا الاسم. والخطأ ترجمة حرفية من الإنجليزية I am a teacher. وتعود الأداة فقط مع الوصف: ein guter Lehrer.",
        },
        {
          wrong: "die Arztin",
          right: "die Ärztin",
          whyAr:
            "اللاحقة ـin تجذب حرف العلّة فترقّقه في طائفة من المهن: Arzt ⇐ Ärztin، Koch ⇐ Köchin. وهي الظاهرة نفسها التي رأيتها في جمع Apfel ⇐ Äpfel وفي du fährst.",
        },
        {
          wrong: "Ich arbeite Lehrer.",
          right: "Ich arbeite als Lehrer.",
          whyAr:
            "الفعل arbeiten يحتاج als ليربط بينه وبين المهنة. والعربية تقول «أعمل معلّماً» بالحال بلا حرف، فينقل المتعلّم البنية العربية عاريةً إلى الألمانية.",
        },
        {
          wrong: "Ich bin Lehrerin und arbeite als Lehrerin sein.",
          right: "Ich bin Lehrerin.",
          whyAr:
            "جملتان مدمجتان في واحدة. اختر إحدى البنيتين: sein + مهنة، أو arbeiten als + مهنة. وجمعهما يُنتج جملةً بفعلين لا رابط بينهما.",
        },
      ],
      relatedRuleComparison: {
        title: "bin أم arbeite als؟",
        content:
          "Ich bin Lehrer (أنا معلم — مهنة دائمة). Ich arbeite als Lehrer (أعمل معلم — وظيفة). كلاهما صحيح، لكن arbeite als أفضل عند الحديث عن الوظيفة الحالية.",
      },
    },
    {
      id: "t2",
      titleAr: "النفي: nicht وkein",
      titleDe: "Die Negation: nicht und kein",
      explanationAr:
        "النفي الألمانيّ أداتان لا واحدة، واختيار الأداة الخاطئة يجعل الجملة غير مفهومة لا مجرّد ركيكة.\n\n**القاعدة الفاصلة في سطر: kein ينفي الاسم، وnicht ينفي كلّ ما عداه.**\n\n**أوّلاً — متى kein؟** حين تنفي اسماً مسبوقاً بـein أو اسماً بلا أداة أصلاً:\n· Ich habe **ein** Auto. ⇐ Ich habe **kein** Auto.\n· Ich habe Zeit. (بلا أداة) ⇐ Ich habe **keine** Zeit.\nوkein يُصرَّف تصريف ein حرفاً بحرف: kein Auto (رفع/نصب محايد) · kein**en** Bruder (نصب مذكّر) · kein**e** Schwester (مؤنّث) · kein**e** Kinder (جمع، وهنا يعمل kein حيث لا وجود لـein).\n\n**ثانياً — متى nicht؟** مع الفعل والصفة والظرف والاسم المعرَّف:\n· الفعل: Ich arbeite **nicht**.\n· الصفة: Das ist **nicht** teuer.\n· الاسم المعرَّف: Ich kenne **den Chef nicht**. (معرَّف بـden ⇒ nicht لا kein)\n\n**ثالثاً — موضع nicht، وهو أصعب من اختيارها.**\n· تنفي الجملة كلّها ⇐ nicht في **آخر** الجملة: Ich arbeite heute nicht.\n· تنفي عنصراً بعينه ⇐ nicht **قبله مباشرةً**: Ich arbeite nicht **heute**, sondern morgen.\n· مع الصفة الخبرية ⇐ nicht قبلها: Das Buch ist **nicht** interessant.\n· مع الفعل المنفصل ⇐ nicht قبل الجزء المنفصل: Ich rufe heute **nicht an**.\n\n**رابعاً — قاعدة النفي الواحد.** الألمانية تمنع النفي المزدوج منعاً باتّاً. فلا تقل Ich habe kein Geld nicht. أداة واحدة تكفي وتنفي، والثانية تُبطل الأولى منطقياً.",
      whyAr:
        "لماذا تُفرّق الألمانية بين أداتين وقد كفت العربية بـ„لا“ و„ليس“ و„ما“؟ في الحقيقة العربية تفرّق أيضاً — لكنّها تفرّق حسب **زمن الفعل ونوع الجملة** (لا للمضارع، لم للماضي، ليس للاسمية)، والألمانية تفرّق حسب **ما يقع عليه النفي** (اسم أم غير اسم). فالمعيار مختلف لا الظاهرة.\n\nولماذا يُعدّ موضع nicht أصعب من اختيارها؟ لأنّ موضعها **يغيّر المعنى** لا الصحّة فقط. قارن: Ich arbeite nicht in Berlin (لا أعمل في برلين إطلاقاً) مقابل Nicht ich arbeite in Berlin (لست أنا من يعمل في برلين، بل غيري). كلمة واحدة انتقلت مكاناً فانتقل النفي من الفعل إلى الفاعل. وهذا مستوى من الدقّة لا تملكه العربية بهذه السهولة، إذ تحتاج فيه إلى „إنّما“ أو إلى نبرةٍ صوتية.\n\nوأمّا منع النفي المزدوج فقاعدة منطقية صارمة في الألمانية المعيارية: نفيان يساويان إثباتاً. والعربية تُجيز التوكيد بالنفي المكرّر („ما رأيت أحداً أبداً“)، فينقل العربيّ العادة فيقول Ich habe nichts nicht gesehen وهي في الألمانية جملة تعني عكس مقصوده.",
      table: {
        title: "nicht أم kein؟",
        columns: ["الموقف", "الاستخدام", "مثال"],
        rows: [
          { label: "نفي الفعل", cells: ["nicht + فعل", "Ich arbeite nicht."] },
          {
            label: "نفي الصفة",
            cells: ["nicht + صفة", "Das ist nicht teuer."],
          },
          {
            label: "نفي اسم بلا أداة",
            cells: ["kein + اسم", "Ich habe kein Geld."],
          },
          {
            label: "نفي ein/eine",
            cells: ["kein/keine", "Ich habe keinen Bruder."],
          },
        ],
      },
      examples: [
        {
          de: "Ich arbeite am Sonntag nicht.",
          ar: "لا أعمل يوم الأحد. (nicht بعد الفعل في آخر الجملة)",
        },
        { de: "Das ist nicht teuer.", ar: "هذا ليس غالياً. (نفي صفة)" },
        {
          de: "Ich habe kein Geld.",
          ar: "ليس لديّ مال. (اسم بلا أداة ⇐ kein)",
        },
        { de: "Er hat keine Schwester.", ar: "ليس له أخت. (مؤنّث ⇐ keine)" },
        {
          de: "Ich habe keinen Bruder.",
          ar: "ليس لي أخ. (نصب مذكّر ⇐ keinen)",
        },
        {
          de: "Ich kenne den Chef nicht.",
          ar: "لا أعرف المدير. (اسم معرَّف ⇐ nicht لا kein)",
        },
        {
          de: "Ich arbeite nicht heute, sondern morgen.",
          ar: "لا أعمل اليوم بل غداً. (نفي عنصر بعينه)",
        },
        {
          de: "Ich rufe heute nicht an.",
          ar: "لن أتّصل اليوم. (nicht قبل الجزء المنفصل)",
        },
      ],
      comparisonWithArabic:
        "العربية تنفي بأدوات كثيرة موزّعة على الأزمنة: لا، لم، لن، ما، ليس. والألمانية تكتفي باثنتين موزّعتين على نوع المنفيّ. فالعبء الذهنيّ منتقل من الزمن إلى نوع الكلمة.\n\nوأقرب مقابل عربيّ لـkein هو **„لا … عندي“** أو „ليس لديّ“: Ich habe keine Zeit = ليس لديّ وقت. ولاحظ أنّ العربية تنفي بالجملة كلّها، والألمانية تنفي الاسم في ذاته بأداة تلتصق به.\n\nوالفخّ الأكبر: العربيّ يقول „ليس عندي أخ“ فيترجم „ليس“ إلى nicht و„أخ“ إلى ein Bruder فيُنتج Ich habe nicht ein Bruder. والصواب أن تُلغى الأداة ein وتُستبدل بـkeinen: **الأداة نفسها هي التي تحمل النفي**. وهذا مفهوم لا نظير له في العربية إطلاقاً، ولهذا يحتاج تدريباً واعياً لا حفظاً.\n\nوفخٌّ أخير في الموضع: العربية تضع أداة النفي **قبل** الفعل دائماً (لا أعمل)، والألمانية تضعها **بعده** (Ich arbeite nicht). فالترتيب معكوس تماماً، ومنه يأتي خطأ Ich nicht arbeite.",
      eselsbruecke:
        "«kein = كَين (لا شيء)»: عندما تنفي وجود شيء، استبدل ein بـ kein: ein Bruder → kein Bruder، eine Schwester → keine Schwester.",
      commonMistakes: [
        {
          wrong: "Ich habe nicht ein Bruder.",
          right: "Ich habe keinen Bruder.",
          whyAr:
            "nicht لا تجتمع مع ein أبداً؛ الأداة نفسها تتحوّل إلى kein وتحمل النفي. والمفهوم غريب على العربية التي تنفي بالجملة لا بالأداة، ولهذا يحتاج تدريباً واعياً.",
        },
        {
          wrong: "Ich nicht arbeite heute.",
          right: "Ich arbeite heute nicht.",
          whyAr:
            "العربية تضع أداة النفي قبل الفعل («لا أعمل») والألمانية بعده. ووضع nicht قبل الفعل يزيحه عن المركز الثاني فيكسر قاعدة V2 التي تحكم كلّ جملة خبرية.",
        },
        {
          wrong: "Ich habe kein Geld nicht.",
          right: "Ich habe kein Geld.",
          whyAr:
            "نفي مزدوج على المنوال العربي التوكيديّ. والألمانية المعيارية تمنعه منعاً باتّاً لأنّ نفيين يساويان إثباتاً منطقياً. أداة واحدة تكفي.",
        },
        {
          wrong: "Ich kenne keinen Chef.",
          right: "Ich kenne den Chef nicht.",
          whyAr:
            "الاسم هنا معرَّف (المدير المعيَّن) والمعرَّف يُنفى بـnicht لا بـkein. وقولك keinen Chef يعني «لا أعرف أيّ مدير كان» — معنى آخر تماماً.",
        },
      ],
      relatedRuleComparison: {
        title: "kein مع الحالات",
        content:
          "kein يتصرف مثل ein: kein (رفع مذكر)، keinen (نصب مذكر)، keine (مؤنث/جمع)، keinem (جر مذكر). Ich habe keinen Bruder — نصب مذكر: keinen.",
      },
    },
    {
      id: "t3",
      titleAr: "أين تعمل؟ أداة النكرة في الجرّ: bei / in + einem / einer",
      titleDe: "Wo arbeitest du? bei und in mit einem/einer",
      explanationAr:
        "قلتَ ما مهنتك (Ich bin Lehrer)، وبقي أن تقول أين تعمل. وهنا تحتاج شيئاً جديداً: **أداة النكرة في حالة الجرّ**.\n\n**أوّلاً — من المعرفة إلى النكرة.** في درس السكن أخذتَ أداة المعرفة مجرورة (im Zimmer، in der Küche). أمّا مع مكان عملٍ غير محدَّد فالأداة نكرة:\n· der/das ⇐ **einem**: in einem Büro · bei einem Arzt\n· die ⇐ **einer**: in einer Firma · bei einer Bank\nوالقاعدة التي تُغنيك عن الحفظ: **ein تستعير نهايات der**. فكما أنّ der ⇐ dem فإنّ ein ⇐ einem؛ وكما أنّ die ⇐ der فإنّ eine ⇐ einer. غطِّ الجذر بإصبعك وانظر إلى النهاية وحدها.\n\n**ثانياً — bei أم in؟ فرقٌ لا يجوز الخلط فيه.**\n· **bei** مع **الأشخاص** وأسماء الشركات: bei einem Arzt · bei Siemens · bei einem Anwalt\n· **in** مع **المباني والمؤسّسات**: in einem Krankenhaus · in einer Schule · in einem Büro\nوقارن الجملتين: Ich arbeite **bei einem Arzt** (أعمل عند طبيب — هو ربّ عملي، وقد أكون ممرّضاً أو سكرتيراً) مقابل Ich arbeite **in einer Arztpraxis** (أعمل في عيادة — المكان). الحرف يحدّد إن كنت تتكلّم عن **مَن** توظّفك أم عن **أين** تجلس.\n\n**ثالثاً — bei تحمل معنى ثالثاً: عند/لدى في المكان.**\nIch wohne **bei** meinen Eltern (أسكن عند والديّ) · **beim** Arzt (عند الطبيب، أي في عيادته). وهي دائماً + Dativ بلا استثناء، فهي من حروف الجرّ التي لا تعرف النصب إطلاقاً — بخلاف in التي تعرف الحالتين.\n\n**رابعاً — الاختصارات الإلزامية.** bei + dem = **beim** · in + dem = **im**. وهي ليست اختياراً بل الصيغة المعتادة: beim Arzt لا bei dem Arzt (إلّا للتوكيد).\n\n**من أين جاءت هذه القاعدة؟** لاحظ أنّ نهايات einem وeiner هي بعينها نهايات dem وder. وهذا ليس مصادفة: ein في الأصل **هو العدد «واحد»** (وما زال كذلك: ein Kaffee = قهوة واحدة)، ثمّ استُعمل أداةَ تنكير. ولمّا احتاج إلى التصريف **استعار نهايات الأداة المعرِّفة** جاهزة. ولهذا تتطابق الجداول تطابقاً تامّاً في الجرّ والنصب، ولا يختلفان إلّا في موضعين اثنين: الرفع المذكّر (der ⟵ ein بلا نهاية) والمحايد رفعاً ونصباً (das ⟵ ein). فأنت لا تحفظ جدولاً ثانياً، بل تحفظ استثناءين.",
      whyAr:
        "لماذا einem وeiner لا ein وeine؟ لأنّ حالة الجرّ (Dativ) تفرض نهاياتها على كلّ ما في المجموعة الاسمية. وein ليست استثناءً بل عضو في عائلة ein-Wörter كلّها تتصرّف معاً: einem · keinem · meinem · unserem. فإن حفظتَ خانةً واحدة ملكتَ العائلة كلّها.\n\nولماذا نُفرد كتلةً لحرفَي bei وin وقد يبدو الفرق بينهما ترفاً؟ لأنّ سؤال Wo arbeiten Sie? يُطرح في كلّ مقابلةٍ وكلّ استمارة، والجواب الخاطئ يُفهم خطأً لا يُسمع ركيكاً: من قال Ich arbeite in einem Arzt فقد قال حرفياً إنّه يعمل **داخل** طبيب.\n\nوأمّا لماذا تُطلب حالة الجرّ لا النصب مع in هنا؟ لأنّ السؤال wo? (أين، مكان ثابت) لا wohin? (إلى أين، حركة). وهذه هي قاعدة Wechselpräpositionen التي أخذتها في درس السكن، وها هي تعود في سياق العمل. القاعدة واحدة والسياق يتبدّل — وهكذا تُبنى الكفاءة.",
      table: {
        title: "من أداة المعرفة إلى أداة النكرة في الجرّ",
        columns: ["الجنس", "معرفة (تعرفها)", "نكرة (الجديد)"],
        rows: [
          { label: "der (مذكر)", cells: ["dem Arzt", "bei einem Arzt"] },
          { label: "das (محايد)", cells: ["dem Büro", "in einem Büro"] },
          { label: "die (مؤنث)", cells: ["der Firma", "in einer Firma"] },
          {
            label: "die (جمع)",
            cells: ["den Kindern", "bei Kindern (بلا أداة)"],
          },
        ],
      },
      examples: [
        {
          de: "Ich arbeite in einer Firma.",
          ar: "أعمل في شركة. (مؤنّث ⇐ einer)",
        },
        {
          de: "Sie arbeitet in einem Krankenhaus.",
          ar: "هي تعمل في مستشفى. (محايد ⇐ einem)",
        },
        {
          de: "Er arbeitet bei einem Anwalt.",
          ar: "يعمل عند محامٍ. (شخص ⇐ bei)",
        },
        {
          de: "Meine Schwester arbeitet bei einer Bank.",
          ar: "أختي تعمل في بنك.",
        },
        {
          de: "Wo arbeiten Sie? — In einem Büro in Berlin.",
          ar: "أين تعملون؟ — في مكتب في برلين.",
        },
        {
          de: "Mein Vater arbeitet bei Siemens.",
          ar: "أبي يعمل في سيمنس. (اسم شركة ⇐ bei بلا أداة)",
        },
        {
          de: "Ich bin heute beim Arzt.",
          ar: "أنا اليوم عند الطبيب. (bei + dem = beim)",
        },
        {
          de: "Sie macht ein Praktikum in einer Schule.",
          ar: "هي تؤدّي تدريباً عملياً في مدرسة.",
        },
      ],
      comparisonWithArabic:
        "العربية تقول „في شركة“ و„في مستشفى“ بحرفٍ واحد لا يتغيّر، ولا تفرّق نحوياً بين „عند محامٍ“ و„في مكتب“. والألمانية تفرض اختيارين معاً في كلّ مرّة: أيّ حرف (bei للشخص، in للمبنى)، وأيّ نهاية (einem أو einer).\n\nوأقرب مقابل عربيّ لـbei هو „عند“: أعمل عند طبيب = Ich arbeite bei einem Arzt. والتطابق هنا مريح ويستحقّ أن يُستثمر: كلّما ترجمتَ „عند“ فاستعمل bei، وكلّما ترجمتَ „في“ مبنىً فاستعمل in.\n\nوالفخّ العربيّ الأشيع: Ich arbeite in eine Firma بالنصب، لأنّ العربيّ يترجم „في“ فقط ولا ينتبه إلى أنّ المكان الثابت يطلب الجرّ. والعربية لا تملك حالة إعرابية تتغيّر بتغيّر الثبات والحركة، فالفكرة كلّها غريبة عليها ولا يعوّضها إلّا التنبّه المتكرّر.",
      eselsbruecke:
        "«ein يستعير من der»: dem ⇒ einem، der ⇒ einer. غطِّ الجذر ein بإصبعك، وانظر إلى النهاية وحدها — ستجدها نهاية أداة المعرفة نفسها التي حفظتها في درس السكن.",
      commonMistakes: [
        {
          wrong: "Ich arbeite in eine Firma.",
          right: "Ich arbeite in einer Firma.",
          whyAr:
            "مكان العمل ثابت لا حركة إليه، فالسؤال wo? والجواب بالجرّ: einer لا eine. والعربية لا تملك حالة تتغيّر بالثبات والحركة، فالتمييز كلّه غريب عليها ويحتاج تنبّهاً.",
        },
        {
          wrong: "Ich arbeite in einem Arzt.",
          right: "Ich arbeite bei einem Arzt.",
          whyAr:
            "in تعني «داخل»، فالجملة تقول حرفياً إنّك تعمل داخل جسد طبيب. والأشخاص يأخذون bei دائماً، والمباني تأخذ in.",
        },
        {
          wrong: "Ich arbeite bei einem Krankenhaus.",
          right: "Ich arbeite in einem Krankenhaus.",
          whyAr:
            "الخطأ المعاكس: المستشفى مبنى لا شخص، فحرفه in. وقاعدة الفرز بسيطة: إن أمكنك أن تدخل فيه فهو in، وإن كان يوظّفك أو تزوره فهو bei.",
        },
        {
          wrong: "Ich bin heute bei dem Arzt.",
          right: "Ich bin heute beim Arzt.",
          whyAr:
            "bei + dem تندمجان وجوباً في beim في الاستعمال العاديّ. والصيغة المفكوكة bei dem لا تُستعمل إلّا للتوكيد على طبيبٍ بعينه، وهي نادرة في الكلام.",
        },
      ],
      relatedRuleComparison: {
        title: "als للمهنة، bei/in لمكانها",
        content:
          "الجملة الكاملة تجمع ما تعلّمته في هذا الدرس كلّه: Ich arbeite als Ingenieur bei einer Firma in Berlin — als + المهنة بلا أداة، bei/in + مكان العمل بالجرّ، in + المدينة.",
      },
    },
    {
      id: "t4",
      titleAr: "الملكية في محيط العمل: unser · euer · Ihr",
      titleDe: "Unsere Firma, euer Büro, Ihr Termin",
      explanationAr:
        "أخذتَ mein وdein وsein وihr في درس العائلة. وبقيت ثلاث أدوات لا يستغني عنها من يعمل مع الناس: **unser** (لنا) و**euer** (لكم) و**Ihr** (لحضرتكم). ومحيط العمل هو موطنها الطبيعيّ، لأنّك فيه تتكلّم باسم فريق لا باسم نفسك: unsere Firma · unser Chef · unser Team.\n\n**أوّلاً — القاعدة العامّة لم تتغيّر.** الجذر يتبع المالك، والنهاية تتبع المملوك: بلا نهاية مع المذكّر والمحايد، وبـ ـe مع المؤنّث والجمع.\n· unser Chef (مذكّر) — unser**e** Firma (مؤنّث) — unser Büro (محايد) — unser**e** Kollegen (جمع)\n\n**ثانياً — الشذوذ الكبير: euer تُسقط حرف e.**\neuer وحدها بين كلّ الأدوات تتغيّر بنيتها حين تُضاف إليها نهاية. فلا تقل euere بل **eure**:\n· euer Chef ⇐ **eure** Firma (لا euere)\n· euer Büro ⇐ **eure** Kollegen\nوسبب السقوط صوتيّ محض: euere فيها ثلاثة مقاطع متتابعة ثقيلة، فأسقطت الألمانية e الوسطى تخفيفاً. والقاعدة العملية: **متى أضفتَ نهاية إلى euer فاحذف e الثانية.**\n\n**ثالثاً — Ihr الرسمية بحرف كبير دائماً.** في العمل تخاطب الزبون والمدير والزميل الأكبر بـSie، وأداة ملكيتهم **Ihr** بحرفٍ كبير أينما وقعت في الجملة:\n· Herr Meier, ist das **Ihr** Büro?\n· Frau Klein, wie ist **Ihre** Telefonnummer?\nوالحرف الكبير هنا ليس تجميلاً بل هو الفارق الوحيد كتابةً بين „مكتبها“ و„مكتب حضرتك“. أمّا في الكلام فلا يميّزهما إلّا السياق.\n\n**رابعاً — أين الخطر عملياً؟** في المكتب تسمع الجمل الثلاث في دقيقة واحدة: Unser Chef ist heute nicht da · Ist das eure Abteilung? · Frau Weber, hier ist Ihr Kaffee. ومن خلط بين euer الودّية وIhr الرسمية أوقع نفسه في حرجٍ اجتماعيّ لا نحويّ فقط.\n\n**من أين جاءت هذه القاعدة؟** الأدوات الثلاث ليست جديدة بل مأخوذة من الضمائر التي تعرفها: unser من wir، وeuer من ihr (أنتم)، وIhr من Sie. وأمّا **الحرف الكبير في Ihr** فليس زينةً إملائية بل **فارقٌ دلاليّ حاسم**: ihr بالصغير تعني «لها» أو «لهم»، وIhr بالكبير تعني «لحضرتكم». والجملة Ist das ihr Auto? تختلف عن Ist das Ihr Auto? في المعنى لا في النبرة. ونشأ هذا من عادة مخاطبة الكبير بصيغة الجمع تعظيماً — وهي عادةٌ تعرفها العربية أيضاً في «حضرتكم».",
      whyAr:
        "لماذا تُؤجَّل هذه الأدوات الثلاث إلى درس العمل ولا تُعطى كلّها دفعةً واحدة في درس العائلة؟ لأنّ المتعلّم لا يحتاج „لنا“ و„لكم“ وهو يصف أباه وأمّه، فيحفظها بلا سياق ثمّ ينساها. أمّا في العمل فهي أدوات يوميّة: الشركة لنا، والمدير لنا، والقسم لكم. والقاعدة التي تُستعمل في اليوم نفسه تُحفظ، والتي تُخزَّن للمستقبل تُنسى.\n\nولماذا نُفرد شذوذ eure بهذا الاهتمام؟ لأنّه الشذوذ الوحيد في منظومة أدوات الملكية كلّها. كلّ الأدوات الأخرى تُلصق النهاية بجذرٍ ثابت، وeuer وحدها تتغيّر بنيتها. والمتعلّم الذي أتقن القاعدة العامّة سيُنتج euere تلقائياً بمنطقٍ سليم ونتيجة خاطئة — وهذا نوع الخطأ الذي لا يُصحّحه إلّا التنبيه الصريح.\n\nوأمّا Ihr الرسمية فمسألة امتحان قبل أن تكون مسألة لغة: قسم Schreiben في Goethe A1 يطلب استمارةً أو رسالةً قصيرة إلى جهةٍ رسمية، وكتابة ihr بحرفٍ صغير فيها تُحسب خطأً في السجلّ اللغويّ لا في الإملاء وحده.",
      table: {
        title: "الأدوات الثلاث مع الأجناس",
        columns: ["المالك", "مذكّر/محايد", "مؤنّث/جمع"],
        rows: [
          { label: "نحن (wir)", cells: ["unser Chef", "unsere Firma"] },
          { label: "أنتم (ihr)", cells: ["euer Büro", "eure Kollegen"] },
          { label: "حضرتك (Sie)", cells: ["Ihr Termin", "Ihre Adresse"] },
          { label: "هم (sie)", cells: ["ihr Chef", "ihre Firma"] },
        ],
      },
      examples: [
        {
          de: "Unsere Firma ist klein, aber gut.",
          ar: "شركتنا صغيرة لكنّها جيّدة.",
        },
        {
          de: "Unser Chef kommt heute nicht.",
          ar: "مديرنا لا يأتي اليوم. (مذكّر ⇐ بلا نهاية)",
        },
        { de: "Ist das eure Abteilung?", ar: "هل هذا قسمكم؟ (لا euere)" },
        {
          de: "Euer Büro ist im dritten Stock.",
          ar: "مكتبكم في الطابق الثالث.",
        },
        {
          de: "Herr Meier, ist das Ihr Büro?",
          ar: "سيّد ماير، هل هذا مكتب حضرتك؟",
        },
        {
          de: "Frau Klein, wie ist Ihre Telefonnummer?",
          ar: "سيّدة كلاين، ما رقم هاتف حضرتك؟",
        },
        {
          de: "Unsere Kollegen arbeiten auch am Samstag.",
          ar: "زملاؤنا يعملون يوم السبت أيضاً. (جمع ⇐ ـe)",
        },
        { de: "Wo sind eure Papiere?", ar: "أين أوراقكم؟" },
      ],
      comparisonWithArabic:
        "العربية تلصق „ـنا“ و„ـكم“ باسمٍ لا يتغيّر: شركتنا، مديرنا، قسمكم. لاحقةٌ واحدة لكلّ الأجناس، ولا نهاية تُضاف ولا حرف يسقط. والألمانية تطلب منك متغيّرين كالعادة: الجذر للمالك والنهاية للمملوك.\n\nوموضع الالتباس الحقيقيّ ليس في النحو بل في **التمييز الاجتماعيّ**: العربية تخاطب الجمع بصيغة واحدة („كم“) سواء كانوا أصدقاء أم رؤساء، وتُظهر الاحترام بالألقاب لا بالضمائر. والألمانية تفرض عليك اختياراً معلَناً في كلّ جملة: eure للزملاء الأنداد، وIhre للمدير والزبون. فالعربيّ الذي يقول للمدير Ist das eure Firma? لم يخطئ نحواً بل تجاوز حدّاً اجتماعياً.\n\nوفخٌّ ثالث خاصّ بالعربيّ: „لنا“ في العربية تُستعمل كثيراً للتواضع أو للتعميم، فينقلها المتعلّم إلى unser في مواضع يقول فيها الألمانيّ mein. قل Mein Büro ist im zweiten Stock إذا كان مكتبك أنت، ولا تقل unser إلّا إذا شاركك فيه غيرك فعلاً.",
      eselsbruecke:
        "**euer يخسر حرفاً حين يكبر**: كلّما أضفتَ نهاية سقطت e الثانية ⟵ euer + e = **eure**. تخيّلها كلمةً تخلع معطفها قبل أن تدخل. وأمّا **Ihr** الرسمية فبحرفٍ كبير دائماً — كبيرة الحرف لأنّ صاحبها كبير المقام.",
      commonMistakes: [
        {
          wrong: "Das ist euere Firma.",
          right: "Das ist eure Firma.",
          whyAr:
            "euer وحدها بين كلّ أدوات الملكية تُسقط e الثانية عند إضافة النهاية. والخطأ ناتج عن تطبيقٍ سليم للقاعدة العامّة على الكلمة الوحيدة التي تشذّ عنها — ولهذا يقع فيه المتقن لا الجاهل.",
        },
        {
          wrong: "Unsere Chef ist nett.",
          right: "Unser Chef ist nett.",
          whyAr:
            "der Chef مذكّر فلا نهاية له. والخطأ يأتي من أنّ unsere أكثر وروداً في السمع (unsere Firma، unsere Kollegen) فيظنّها المتعلّم الصيغة الأساسية.",
        },
        {
          wrong: "Herr Weber, ist das ihr Büro?",
          right: "Herr Weber, ist das Ihr Büro?",
          whyAr:
            "الحرف الصغير يجعل الجملة تعني „هل هذا مكتبها؟“ — سؤالٌ عن امرأة غائبة لا عن المخاطَب. ومخاطبة شخصٍ بلقب Herr أو Frau توجب Ihr بحرفٍ كبير.",
        },
        {
          wrong:
            "Mein Kollege und ich: unser Büro ist klein. Ich arbeite in unser Büro.",
          right: "… Ich arbeite in unserem Büro.",
          whyAr:
            "الأداة صحّت في الجملة الأولى وأخطأت في الثانية: بعد in الدالّة على مكانٍ ثابت تأتي حالة الجرّ، فتصير unser ⟵ unserem مثل ein ⟵ einem. والملكية لا تُعفي من التصريف.",
        },
      ],
      relatedRuleComparison: {
        title: "ein-Wörter: عائلةٌ واحدة بتصريف واحد",
        content:
          "unser وeuer وIhr أعضاء في العائلة نفسها التي فيها ein وkein وmein — تُسمّى جميعاً **ein-Wörter** لأنّها تُصرَّف تصريفاً واحداً حرفاً بحرف. قارن في الجرّ: in **einem** Büro · in **keinem** Büro · in **meinem** Büro · in **unserem** Büro. فما تعلّمته في كتلة النفي عن keinen ينطبق حرفياً على unseren. وأنت إذاً لا تحفظ أربعة جداول بل جدولاً واحداً بأربعة جذور.",
      },
    },
  ],
  reading: {
    id: "read-a1-10",
    titleDe: "Ein neuer Job im Büro",
    titleAr: "وظيفة جديدة في المكتب",
    textType: "erzaehlung",
    paragraphs: [
      "Karim kommt aus Tunesien und wohnt seit zwei Jahren in Köln. Er ist Ingenieur von Beruf, aber im Moment arbeitet er als Praktikant. Er macht ein Praktikum bei einer kleinen Firma für Solartechnik.",
      "Heute ist sein erster Tag. Um acht Uhr kommt er ins Büro. Eine Frau steht am Kopierer. Guten Morgen, ich bin Karim Ben Salah, der neue Praktikant. — Herzlich willkommen! Ich bin Frau Grün. Ich bin hier die Chefin.",
      "Frau Grün zeigt ihm alles. Das hier ist unser Büro. Ihr Platz ist am Fenster. Der Computer dort ist Ihr Computer, und das ist Ihre Telefonnummer. Unsere Abteilung ist klein: wir sind nur fünf Personen.",
      "Dann kommt ein junger Mann. Das ist Tom, unser Techniker. Und wo ist eure Kollegin Lena? — Lena ist heute nicht da. Sie ist krank. Aber morgen kommt sie wieder.",
      "Karim hat viele Fragen. Arbeiten wir auch am Samstag? — Nein, wir arbeiten am Samstag nicht. Wir arbeiten von Montag bis Freitag, von neun bis siebzehn Uhr. Und wir haben keine Kantine, aber es gibt ein Restaurant neben der Firma.",
      "Am Abend ruft Karim seine Mutter an. Und, wie war dein erster Tag? — Sehr gut! Unsere Firma ist klein und meine Chefin ist sehr nett. Ich bin kein Ingenieur hier, nur Praktikant. Aber das ist kein Problem: ich lerne jeden Tag etwas Neues.",
    ],
    paragraphsAr: [
      "كريم من تونس ويسكن في كولونيا منذ سنتين. مهنته مهندس، لكنّه في الوقت الحالي يعمل متدرّباً. يؤدّي تدريباً عملياً في شركة صغيرة لتقنية الطاقة الشمسية.",
      "اليوم يومه الأوّل. في الثامنة يصل إلى المكتب. امرأة واقفة عند آلة النسخ. صباح الخير، أنا كريم بن صالح، المتدرّب الجديد. — أهلاً وسهلاً! أنا السيّدة غرون. أنا المديرة هنا.",
      "تُريه السيّدة غرون كلّ شيء. هذا مكتبنا. مكانك عند النافذة. الحاسوب هناك حاسوبك، وهذا رقم هاتفك. قسمنا صغير: نحن خمسة أشخاص فقط.",
      "ثمّ يأتي شابّ. هذا توم، فنّيّنا. وأين زميلتكم لينا؟ — لينا ليست هنا اليوم. هي مريضة. لكنّها تعود غداً.",
      "عند كريم أسئلة كثيرة. هل نعمل يوم السبت أيضاً؟ — لا، لا نعمل يوم السبت. نعمل من الاثنين إلى الجمعة، من التاسعة إلى الخامسة. وليس عندنا مقصف، لكن هناك مطعم بجانب الشركة.",
      "في المساء يتّصل كريم بأمّه. وكيف كان يومك الأوّل؟ — جيّد جداً! شركتنا صغيرة ومديرتي لطيفة جداً. لستُ مهندساً هنا، بل متدرّباً فقط. لكن هذه ليست مشكلة: أتعلّم كلّ يوم شيئاً جديداً.",
    ],
    glossary: [
      {
        de: "der Praktikant / die Praktikantin",
        ar: "متدرّب / متدرّبة",
        noteAr: "المؤنّث باللاحقة ـin كسائر المهن.",
      },
      {
        de: "das Praktikum",
        ar: "تدريب عمليّ",
        noteAr: "ein Praktikum machen bei …",
      },
      {
        de: "die Chefin",
        ar: "المديرة",
        noteAr: "من der Chef + ـin.",
      },
      {
        de: "die Abteilung",
        ar: "القسم",
        noteAr: "في الشركة أو الإدارة.",
      },
      {
        de: "der Techniker",
        ar: "الفنّيّ",
        noteAr: "وجمعه die Techniker بلا تغيير.",
      },
      {
        de: "die Kollegin",
        ar: "الزميلة",
        noteAr: "والمذكّر der Kollege.",
      },
      {
        de: "unsere Firma",
        ar: "شركتنا",
        noteAr: "unser + ـe لأنّ Firma مؤنّثة.",
      },
      {
        de: "eure Kollegin",
        ar: "زميلتكم",
        noteAr: "euer تُسقط e عند إضافة النهاية.",
      },
      {
        de: "Ihre Telefonnummer",
        ar: "رقم هاتف حضرتك",
        noteAr: "Ihr بحرف كبير = الصيغة الرسمية.",
      },
      {
        de: "die Kantine",
        ar: "مقصف الشركة",
        noteAr: "مطعم داخليّ للموظّفين.",
      },
      {
        de: "ruft … an (anrufen)",
        ar: "يتّصل هاتفياً",
        noteAr: "فعل منفصل: ruft seine Mutter an.",
      },
      {
        de: "kein Problem",
        ar: "ليست مشكلة",
        noteAr: "نفي الاسم بـkein لا nicht.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Was ist Karim von Beruf?",
        errorType: "vocabulary",
        options: ["Ingenieur", "Techniker", "Lehrer", "Arzt"],
        correctIndex: 0,
        paragraph: 0,
        explanation:
          "الفقرة الأولى: Er ist Ingenieur von Beruf — وهو يعمل متدرّباً في الوقت الحالي فقط.",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Wo macht Karim sein Praktikum?",
        errorType: "preposition",
        options: [
          "Bei einer Firma für Solartechnik",
          "In einem Krankenhaus",
          "Bei einem Anwalt",
          "In einer Schule",
        ],
        correctIndex: 0,
        paragraph: 0,
        explanation:
          "Er macht ein Praktikum bei einer kleinen Firma für Solartechnik — وbei مع أسماء الشركات.",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Warum ist Lena nicht im Büro?",
        errorType: "vocabulary",
        options: [
          "Sie ist krank.",
          "Sie hat Urlaub.",
          "Sie arbeitet zu Hause.",
          "Sie ist die Chefin.",
        ],
        correctIndex: 0,
        paragraph: 3,
        explanation: "Lena ist heute nicht da. Sie ist krank — وتعود غداً.",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Was sagt Frau Grün über den Samstag?",
        errorType: "negation",
        options: [
          "Sie arbeiten am Samstag nicht.",
          "Sie arbeiten nur am Samstag.",
          "Sie arbeiten bis siebzehn Uhr am Samstag.",
          "Sie haben am Samstag eine Kantine.",
        ],
        correctIndex: 0,
        paragraph: 4,
        explanation:
          "Wir arbeiten am Samstag nicht — نفي الفعل بـnicht في آخر الجملة.",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        instructionAr: "أجب عن السؤال بحسب النصّ:",
        questionDe: "Wie findet Karim seinen ersten Tag?",
        errorType: "vocabulary",
        options: ["Sehr gut", "Sehr schwer", "Langweilig", "Zu lang"],
        correctIndex: 0,
        paragraph: 5,
        explanation:
          "يجيب أمّه: Sehr gut! ويصف مديرته بأنّها sehr nett، ويرى أنّ كونه متدرّباً kein Problem.",
      },
    ],
    redemittel: [
      {
        de: "Was sind Sie von Beruf?",
        ar: "ما مهنتك؟",
      },
      {
        de: "Ich bin Ingenieur. / Ich arbeite als Praktikant.",
        ar: "أنا مهندس. / أعمل متدرّباً.",
      },
      {
        de: "Ich mache ein Praktikum bei …",
        ar: "أؤدّي تدريباً عملياً في …",
      },
      {
        de: "Wo arbeiten Sie? — In einem Büro / bei einer Firma.",
        ar: "أين تعمل؟ — في مكتب / في شركة.",
      },
      {
        de: "Unsere Abteilung ist klein.",
        ar: "قسمنا صغير.",
      },
      {
        de: "Ist das Ihr Platz?",
        ar: "هل هذا مكان حضرتك؟",
      },
      {
        de: "Wir arbeiten von Montag bis Freitag.",
        ar: "نعمل من الاثنين إلى الجمعة.",
      },
      {
        de: "Das ist kein Problem.",
        ar: "هذه ليست مشكلة.",
      },
    ],
    discussionAr:
      "صف مكان عملك أو دراستك بالألمانية: ما مهنتك، وأين تعمل (in أم bei؟)، وكم عدد زملائك، وما أيام العمل وساعاته؟ واستعمل unser مرّةً وnicht وkein مرّةً لكلٍّ منهما.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "تقديم المهنة",
        lines: [
          {
            speaker: "Moderator",
            de: "Hallo! Was sind Sie von Beruf?",
            ar: "مرحباً! ما مهنتكم؟",
          },
          {
            speaker: "Frau Leila",
            de: "Ich bin Ärztin. Ich arbeite in einem Krankenhaus.",
            ar: "أنا طبيبة. أعمل في مستشفى.",
          },
          {
            speaker: "Moderator",
            de: "Und Sie, Herr Ben Ali?",
            ar: "وأنت يا سيد بن علي؟",
          },
          {
            speaker: "Herr Sami",
            de: "Ich bin Ingenieur und arbeite als Projektleiter.",
            ar: "أنا مهندس وأعمل مدير مشاريع.",
          },
          {
            speaker: "Moderator",
            de: "Arbeiten Sie am Wochenende?",
            ar: "هل تعملون في نهاية الأسبوع؟",
          },
          {
            speaker: "Frau Leila",
            de: "Nein, am Wochenende arbeite ich nicht.",
            ar: "لا، في نهاية الأسبوع لا أعمل.",
          },
        ],
      },
      {
        id: "l2",
        title: "عائلة المهن",
        lines: [
          {
            speaker: "Karim",
            de: "Mein Vater ist Koch. Meine Mutter ist Lehrerin.",
            ar: "أبي طباخ. أمي معلمة.",
          },
          {
            speaker: "Anna",
            de: "Meine Eltern sind Ärzte. Und mein Bruder ist Student.",
            ar: "والداي طبيبان. وأخي طالب.",
          },
          { speaker: "Karim", de: "Hast du einen Bruder?", ar: "هل لديك أخ؟" },
          {
            speaker: "Anna",
            de: "Nein, ich habe keinen Bruder. Ich habe eine Schwester.",
            ar: "لا، ليس لدي أخ. لدي أخت.",
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
        questionDe: "Was ist Frau Leila von Beruf?",
        questionAr: "ما مهنة السيدة ليلى؟",
        options: ["Ärztin", "Lehrerin", "Ingenieurin", "Verkäuferin"],
        correctIndex: 0,
        explanation: "قالت: Ich bin Ärztin — طبيبة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Arbeitet Frau Leila am Wochenende?",
        questionAr: "هل تعمل السيدة ليلى في نهاية الأسبوع؟",
        options: [
          "Nein, sie arbeitet nicht.",
          "Ja, sie arbeitet.",
          "Nur am Samstag.",
          "Vielleicht.",
        ],
        correctIndex: 0,
        explanation: "قالت: Am Wochenende arbeite ich nicht — لا تعمل.",
        errorType: "grammar",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist Annas Bruder?",
        questionAr: "ما مهنة أخي آنا؟",
        options: ["Student", "Arzt", "Koch", "Lehrer"],
        correctIndex: 0,
        explanation: "قالت آنا: Mein Bruder ist Student.",
        errorType: "vocabulary",
      },
    ],
  },
  pronunciation: {
    id: "p1",
    title: "أصوات المهن: ch، ö، وä",
    items: [
      { de: "der Arzt", ar: "الطبيب", note: "rz معاً: آرتست (t≈س)" },
      { de: "die Ärztin", ar: "الطبيبة", note: "ä مفتوح: إرتست-إن" },
      { de: "der Koch", ar: "الطباخ", note: "ch بعد o = خ: كوخ" },
      { de: "die Köchin", ar: "الطباخة", note: "ö + ch ناعمة: كُيخِن" },
      { de: "der Ingenieur", ar: "المهندس", note: "كلمة فرنسية: إن-جين-يُور" },
      { de: "der Kellner", ar: "النادل", note: "e مفتوحة: كِلنِر" },
    ],
    tip: "انتبه للفارق الجميل: Koch (كوخ بخ) وKöchin (كُيخِن بش ناعمة) — نفس الحروف تقريباً لكن المعلم يغير النطق!",
    shadowing: [
      {
        de: "Ich bin Lehrer von Beruf.",
        ar: "أنا معلم مهنة.",
        tip: "Lehrer = ليرِر (e مفتوحة)",
      },
      {
        de: "Meine Mutter ist Ärztin.",
        ar: "أمي طبيبة.",
        tip: "Ärztin = إرتست-إن (ä)",
      },
      {
        de: "Ich arbeite als Verkäufer.",
        ar: "أعمل بائعاً.",
        tip: "Verkäufer = فِركويفِر (äu=أُوي)",
      },
      {
        de: "Am Wochenende arbeite ich nicht.",
        ar: "في نهاية الأسبوع لا أعمل.",
        tip: "nicht في نهاية الجملة",
      },
    ],
  },
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "قدّم مهنتك أو مهنة قريب لك:",
      prompt: "Was bist du von Beruf? (اكتب جملة كاملة)",
      acceptedAnswers: [
        "Ich bin Lehrer",
        "Ich bin Student",
        "Ich bin Ärztin",
        "Ich bin Ingenieur",
      ],
      sampleAnswer: "Ich bin Student von Beruf.",
      explanation: "الصيغة: Ich bin + مهنة + (von Beruf اختياري للتأكيد).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ nicht أو kein/keine:",
      template:
        "Ich arbeite ___ (لا أعمل). Ich habe ___ Bruder (ليس لدي أخ). Das ist ___ teuer (ليس غالياً).",
      blanks: [
        { correct: "nicht", options: ["nicht", "kein", "keine"] },
        { correct: "keinen", options: ["nicht", "keinen", "keine"] },
        { correct: "nicht", options: ["nicht", "kein", "keine"] },
      ],
      explanation:
        "نفي الفعل → nicht. نفي اسم منكر (مذكر نصب) → keinen. نفي صفة → nicht.",
      errorType: "negation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Meine Schwester arbeitet als Lehrerin.",
      explanation: "أختي تعمل معلمة — als + مهنة مؤنثة (Lehrerin).",
      errorType: "spelling",
    },
  ],
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر المؤنث الصحيح:",
      questionDe: "der Arzt → die ___",
      options: ["Ärztin", "Arztin", "Ärztine", "Arzt"],
      correctIndex: 0,
      explanation: "Arzt → Ärztin (مع Umlaut).",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر النفي الصحيح:",
      questionDe: "Ich habe ___ Geld.",
      questionAr: "ليس لدي مال.",
      options: ["kein", "nicht", "keine", "keinen"],
      correctIndex: 0,
      explanation: "Geld محايد (das Geld) → kein Geld.",
      errorType: "negation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل المهنة بمعناها:",
      pairs: [
        { left: "der Lehrer", right: "المعلم" },
        { left: "der Koch", right: "الطباخ" },
        { left: "der Fahrer", right: "السائق" },
        { left: "der Verkäufer", right: "البائع" },
      ],
      explanation: "مهن شائعة: معلم، طباخ، سائق، بائع.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["als", "arbeitet", "Ingenieur", "Er", "."],
      correctSentence: "Er arbeitet als Ingenieur.",
      explanation: "يعمل مهندساً: Er + arbeitet (V2) + als Ingenieur.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe nicht ein Bruder.",
      wrongWord: "nicht ein",
      correctWord: "keinen",
      options: ["keinen", "kein", "keine", "nicht"],
      explanation: "لا نضع nicht مع ein — نستبدلها بـ keinen (نصب مذكر).",
      errorType: "negation",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ nicht/kein/keine/keinen:",
      template:
        "Er arbeitet ___. Sie hat ___ Schwester. Wir haben ___ Auto. Ich kaufe ___ Kaffee.",
      blanks: [
        { correct: "nicht", options: ["nicht", "kein", "keine", "keinen"] },
        { correct: "keine", options: ["nicht", "kein", "keine", "keinen"] },
        { correct: "kein", options: ["nicht", "kein", "keine", "keinen"] },
        { correct: "keinen", options: ["nicht", "kein", "keine", "keinen"] },
      ],
      explanation:
        "فعل → nicht. مؤنث → keine. محايد → kein. مذكر نصب → keinen.",
      errorType: "negation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى نفي:",
      prompt: "Ich habe einen Bruder. → (نفِها)",
      acceptedAnswers: ["Ich habe keinen Bruder", "Ich habe keinen Bruder."],
      sampleAnswer: "Ich habe keinen Bruder.",
      explanation: "einen → keinen (نفي النصب المذكر).",
      errorType: "negation",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Was bist du von Beruf?",
      questionAr: "ما معنى السؤال؟",
      options: ["ما مهنتك؟", "ما اسمك؟", "أين تعمل؟", "كم عمرك؟"],
      correctIndex: 0,
      explanation: "von Beruf = مهنة: ما أنت مهنة؟ أي ما عملك؟",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Meine Mutter ist Kochin.",
      wrongWord: "Kochin",
      correctWord: "Köchin",
      options: ["Köchin", "Kochin", "Köchen", "Kocherin"],
      explanation: "Koch → Köchin مع Umlaut.",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich habe keinen Bruder, aber eine Schwester.",
      explanation:
        "ليس لدي أخ لكن لدي أخت — keinen (نفي نصب مذكر) + aber (لكن).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بأداة النكرة في الجرّ:",
      template:
        "Ich arbeite in ___ Firma. Sie arbeitet in ___ Büro. Er arbeitet bei ___ Anwalt.",
      blanks: [
        { correct: "einer", options: ["einer", "eine", "einem"] },
        { correct: "einem", options: ["einem", "ein", "einer"] },
        { correct: "einem", options: ["einem", "einer", "eine"] },
      ],
      explanation:
        "die Firma ⇒ einer · das Büro ⇒ einem · der Anwalt ⇒ einem. النهايات مستعارة من أداة المعرفة.",
      errorType: "article",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Meine Schwester arbeitet in eine Bank.",
      wrongWord: "eine",
      correctWord: "einer",
      options: ["einer", "eine", "einem", "ein"],
      explanation: "مكان ثابت (wo?) ⇒ جرّ. die Bank ⇒ in einer Bank.",
      errorType: "case",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر الصحيح:",
      questionDe: "Er ist Assistent und arbeitet ___ einem Zahnarzt.",
      questionAr: "هو مساعد ويعمل عند طبيب أسنان.",
      options: ["bei", "in", "an", "zu"],
      correctIndex: 0,
      explanation: "bei تُستعمل مع الأشخاص وأصحاب المهن: bei einem Zahnarzt.",
      optionExplanations: [
        undefined,
        "in للمباني والقطاعات (in einer Klinik) لا للأشخاص.",
        "an للحواف والمؤسسات التعليمية (an einer Universität) لا لشخص.",
        "zu للاتجاه لا لمكان العمل.",
      ],
      errorType: "preposition",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة كاملة عن العمل:",
      tokens: [
        "Ich",
        "arbeite",
        "als",
        "Ingenieur",
        "in",
        "einer",
        "Firma",
        ".",
      ],
      correctSentence: "Ich arbeite als Ingenieur in einer Firma.",
      explanation: "als + المهنة بلا أداة، ثم in + مكان العمل بالجرّ.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "أجب عن السؤال بالمعطيات المذكورة.",
      prompt: "Wo arbeitest du? (das Krankenhaus)",
      acceptedAnswers: [
        "Ich arbeite in einem Krankenhaus.",
        "In einem Krankenhaus.",
      ],
      sampleAnswer: "Ich arbeite in einem Krankenhaus.",
      explanation: "das Krankenhaus مبنى ⇒ in، وفي الجرّ ⇒ einem.",
      errorType: "case",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة للتعريف بالمهنة:",
      questionDe: "Ich ___ Lehrer von Beruf.",
      options: ["bin", "bin ein", "arbeite", "arbeite ein"],
      correctIndex: 0,
      errorType: "article",
      explanation:
        "المهنة بعد sein تُقال بلا أداة: Ich bin Lehrer. والأداة تعود فقط مع الوصف: ein guter Lehrer.",
    },
    {
      id: "e17",
      type: "error-correction",
      instructionAr: "صحّح صيغة المؤنّث:",
      wrongSentence: "Meine Mutter ist Arztin.",
      wrongWord: "Arztin",
      correctWord: "Ärztin",
      options: ["Ärztin", "Arzterin", "Arztin", "Ärzterin"],
      errorType: "spelling",
      explanation:
        "اللاحقة ـin تجذب حرف العلّة فترقّقه: Arzt ⇐ Ärztin، كما في Koch ⇐ Köchin.",
    },
    {
      id: "e18",
      type: "fill-blank",
      instructionAr: "أكمل بأداة الملكية الصحيحة:",
      errorType: "pronoun",
      template:
        "Wir arbeiten zusammen: ___ Firma ist klein. Und wo ist ___ Büro, Herr Meier?",
      blanks: [
        {
          correct: "unsere",
          options: ["unsere", "unser", "euer", "eure"],
          errorType: "pronoun",
        },
        {
          correct: "Ihr",
          options: ["Ihr", "ihr", "euer", "dein"],
          errorType: "pronoun",
        },
      ],
      explanation:
        "Firma مؤنّثة ⇐ unsere. ومخاطبة Herr Meier رسمية ⇐ Ihr بحرف كبير مع Büro المحايد بلا نهاية.",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح أداة الملكية:",
      wrongSentence: "Das ist euere Abteilung.",
      wrongWord: "euere",
      correctWord: "eure",
      options: ["eure", "euere", "euer", "eurer"],
      errorType: "pronoun",
      explanation:
        "euer وحدها بين أدوات الملكية تُسقط e الثانية عند إضافة النهاية: euer + e = eure.",
    },
    {
      id: "e20",
      type: "multiple-choice",
      instructionAr: "اختر الحرف الصحيح:",
      questionDe: "Meine Schwester arbeitet ___ einer Bank.",
      options: ["bei", "in einem", "als", "auf"],
      correctIndex: 0,
      errorType: "preposition",
      explanation:
        "bei مع المؤسّسات والأشخاص وأسماء الشركات. وbei einer Bank هي الصيغة المعتادة.",
    },
    {
      id: "e21",
      type: "error-correction",
      instructionAr: "صحّح حرف الجرّ:",
      wrongSentence: "Ich arbeite in einem Arzt.",
      wrongWord: "in",
      correctWord: "bei",
      options: ["bei", "an", "zu", "mit"],
      errorType: "preposition",
      explanation:
        "in تعني «داخل» فالجملة تقول إنّك تعمل داخل جسد طبيب. والأشخاص يأخذون bei دائماً.",
    },
    {
      id: "e22",
      type: "multiple-choice",
      instructionAr: "اختر أداة النفي الصحيحة:",
      questionDe: "Ich kenne ___ Chef ___.",
      options: ["den … nicht", "keinen … —", "kein … nicht", "der … nicht"],
      correctIndex: 0,
      errorType: "negation",
      explanation:
        "الاسم معرَّف (المدير المعيَّن) والمعرَّف يُنفى بـnicht لا بـkein: Ich kenne den Chef nicht.",
    },
    {
      id: "e23",
      type: "transformation",
      instructionAr: "انفِ الجملة بالأداة الصحيحة:",
      prompt: "Ich habe einen Bruder. ⇐ (انفِها)",
      errorType: "negation",
      acceptedAnswers: ["Ich habe keinen Bruder.", "Ich habe keinen Bruder"],
      sampleAnswer: "Ich habe keinen Bruder.",
      explanation:
        "الاسم المسبوق بـein يُنفى باستبدال الأداة: einen ⇐ keinen. ولا يجوز nicht ein أبداً.",
    },
    {
      id: "e24",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن جملة نفي صحيحة:",
      tokens: ["Wir", "arbeiten", "am", "Samstag", "nicht"],
      errorType: "word-order",
      correctSentence: "Wir arbeiten am Samstag nicht.",
      explanation:
        "nicht تنفي الجملة كلّها فتقع في آخرها. ووضعها قبل الفعل يكسر قاعدة المركز الثاني.",
    },
    {
      id: "e25",
      type: "matching",
      instructionAr: "صِل كلّ حالة بأداتها الصحيحة:",
      errorType: "negation",
      pairs: [
        { left: "نفي فعل", right: "nicht في آخر الجملة" },
        { left: "نفي اسم مسبوق بـein", right: "kein بدل الأداة" },
        { left: "نفي اسم معرَّف بـder", right: "nicht لا kein" },
        { left: "نفي صفة", right: "nicht قبل الصفة" },
        { left: "نفي جزء بعينه", right: "nicht قبله مباشرةً" },
      ],
      explanation:
        "القاعدة الفاصلة: kein ينفي الاسم المنكّر، وnicht ينفي كلّ ما عداه — والموضع يحدّد ما يقع عليه النفي.",
    },
    {
      id: "e26",
      type: "fill-blank",
      instructionAr: "أكمل بأداة النكرة في حالة الجرّ:",
      errorType: "case",
      template: "Er arbeitet in ___ Büro und sie arbeitet in ___ Schule.",
      blanks: [
        {
          correct: "einem",
          options: ["einem", "ein", "einer", "einen"],
          errorType: "case",
        },
        {
          correct: "einer",
          options: ["einer", "eine", "einem", "einen"],
          errorType: "case",
        },
      ],
      explanation:
        "das Büro محايد ⇐ einem؛ die Schule مؤنّثة ⇐ einer. وein تستعير نهايات der في الجرّ.",
    },
  ],
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "die Arztin",
        right: "die Ärztin",
        whyAr: "Arzt يضيف Umlaut في المؤنث.",
      },
      {
        wrong: "Ich habe nicht ein Bruder.",
        right: "Ich habe keinen Bruder.",
        whyAr: "النفي مع ein → kein مباشرة.",
      },
      {
        wrong: "Ich arbeite als Kochin. (خلط als مع sein)",
        right: "Ich bin Köchin. أو Ich arbeite als Köchin.",
        whyAr: "كلاهما صحيح، لكن لا تقل «Ich bin als» — اختر واحداً.",
      },
    ],
    eselsbruecken: [
      "«المؤنث = +in كالتاء المربوطة»: Lehrer→Lehrerin، Arzt→Ärztin.",
      "«kein = كَين = لا يوجد»: انفي الوجود بـ kein، وانفي الفعل بـ nicht.",
    ],
    culturalNote: {
      title: "التحية في العمل",
      content:
        "في العمل الألماني: «Guten Morgen» لزملائك صباحاً، و«Bis morgen» عند المغادرة. وكلمة «Kollege/Kollegin» (زميل) مهمة جداً. الألمان يعطون التحية للجميع حتى الممرات — «Grüß Gott» في الجنوب و«Moin» في الشمال!",
    },
  },
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المؤنث الصحيح:",
      questionDe: "der Verkäufer → die ___",
      options: ["Verkäuferin", "Verkäufer", "Verkäufin", "Verkäuferine"],
      correctIndex: 0,
      explanation: "Verkäufer → Verkäuferin (إضافة -in).",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر النفي الصحيح:",
      questionDe: "Das ist ___ teuer.",
      questionAr: "هذا ليس غالياً.",
      options: ["nicht", "kein", "keine", "keinen"],
      correctIndex: 0,
      explanation: "نفي الصفة → nicht: nicht teuer.",
      errorType: "negation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["als", "Ich", "arbeite", "Verkäufer", "."],
      correctSentence: "Ich arbeite als Verkäufer.",
      explanation: "أعمل بائعاً: Ich + arbeite + als Verkäufer.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Wir haben nicht Auto.",
      wrongWord: "nicht Auto",
      correctWord: "kein Auto",
      options: ["kein Auto", "keine Auto", "keinen Auto", "nicht ein Auto"],
      explanation: "نفي اسم محايد → kein Auto.",
      errorType: "negation",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل النفي الصحيح:",
      template:
        "Sie arbeitet ___ am Sonntag. Er hat ___ Geschwister. Ich trinke ___ Kaffee.",
      blanks: [
        { correct: "nicht", options: ["nicht", "kein", "keine"] },
        { correct: "keine", options: ["nicht", "kein", "keine"] },
        { correct: "keinen", options: ["nicht", "kein", "keinen"] },
      ],
      explanation: "فعل → nicht. جمع → keine. مذكر نصب → keinen.",
      errorType: "negation",
    },
  ],
  flashcards: [
    {
      id: "fc1",
      de: "der Beruf",
      ar: "المهنة",
      example: "Was bist du von Beruf?",
      exampleAr: "ما مهنتك؟",
      level: "A1",
    },
    {
      id: "fc2",
      de: "arbeiten",
      ar: "يعمل",
      example: "Ich arbeite in einer Firma.",
      exampleAr: "أعمل في شركة.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "der Lehrer / die Lehrerin",
      ar: "المعلم / المعلمة",
      example: "Meine Mutter ist Lehrerin.",
      exampleAr: "أمي معلمة.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "der Arzt / die Ärztin",
      ar: "الطبيب / الطبيبة",
      example: "Ich gehe zum Arzt.",
      exampleAr: "أذهب إلى الطبيب.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "arbeiten als",
      ar: "يعمل كـ",
      example: "Er arbeitet als Koch.",
      exampleAr: "يعمل طباخاً.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "nicht",
      ar: "لا (نفي فعل/صفة)",
      example: "Ich arbeite nicht.",
      exampleAr: "لا أعمل.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "kein / keine",
      ar: "لا (نفي اسم)",
      example: "Ich habe kein Geld.",
      exampleAr: "ليس لدي مال.",
      level: "A1",
    },
    {
      id: "fc8",
      de: "die Firma",
      ar: "الشركة",
      example: "Die Firma ist groß.",
      exampleAr: "الشركة كبيرة.",
      level: "A1",
    },
    {
      id: "fc9",
      de: "in einer Firma arbeiten",
      ar: "يعمل في شركة",
      example: "Ich arbeite in einer Firma.",
      exampleAr: "أعمل في شركة.",
      level: "A1",
    },
    {
      id: "fc10",
      de: "bei einem Arzt arbeiten",
      ar: "يعمل عند طبيب",
      example: "Er arbeitet bei einem Arzt.",
      exampleAr: "يعمل عند طبيب.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "unser / unsere",
      ar: "لنا (أداة ملكية)",
      example: "Unsere Firma ist klein.",
      exampleAr: "شركتنا صغيرة.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "euer / eure",
      ar: "لكم (أداة ملكية)",
      example: "Ist das eure Abteilung?",
      exampleAr: "هل هذا قسمكم؟",
      level: "A1",
    },
    {
      id: "fc13",
      de: "Ihr / Ihre (formell)",
      ar: "لحضرتك (رسميّ، بحرف كبير)",
      example: "Herr Meier, ist das Ihr Büro?",
      exampleAr: "سيّد ماير، هل هذا مكتب حضرتك؟",
      level: "A1",
    },
    {
      id: "fc14",
      de: "das Praktikum",
      ar: "تدريب عمليّ",
      example: "Ich mache ein Praktikum bei einer Firma.",
      exampleAr: "أؤدّي تدريباً عملياً في شركة.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "die Abteilung",
      ar: "القسم (في شركة)",
      example: "Unsere Abteilung ist klein.",
      exampleAr: "قسمنا صغير.",
      level: "A1",
    },
    {
      id: "fc16",
      de: "der Chef / die Chefin",
      ar: "المدير / المديرة",
      example: "Meine Chefin ist sehr nett.",
      exampleAr: "مديرتي لطيفة جداً.",
      level: "A1",
    },
    {
      id: "fc17",
      de: "arbeitslos",
      ar: "عاطل عن العمل",
      example: "Mein Bruder ist zurzeit arbeitslos.",
      exampleAr: "أخي عاطل عن العمل حالياً.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "selbstständig",
      ar: "يعمل لحسابه الخاصّ",
      example: "Unsere Kollegin ist selbstständig.",
      exampleAr: "زميلتنا تعمل لحسابها الخاصّ.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "Was sind Sie von Beruf?",
      ar: "ما مهنتك؟",
      example: "Was sind Sie von Beruf? — Ich bin Ingenieur.",
      exampleAr: "ما مهنتك؟ — أنا مهندس.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "der Ingenieur",
      ar: "المهندس",
      example: "Er ist Ingenieur von Beruf.",
      exampleAr: "هو مهندس بالمهنة.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "das Büro",
      ar: "المكتب",
      example: "Mein Büro ist im dritten Stock.",
      exampleAr: "مكتبي في الطابق الثالث.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "der Computer",
      ar: "الحاسوب",
      example: "Auf dem Tisch steht ein Computer.",
      exampleAr: "على الطاولة حاسوب.",
      level: "A1",
    },
    {
      id: "fc23",
      de: "seit",
      ar: "منذ",
      example: "Ich wohne seit zwei Jahren hier.",
      exampleAr: "أسكن هنا منذ سنتين.",
      level: "A1",
    },
    {
      id: "fc24",
      de: "der Moment",
      ar: "اللحظة",
      example: "Einen Moment, bitte!",
      exampleAr: "لحظةً من فضلك!",
      level: "A1",
    },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a1-10-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة مهنية قصيرة بالعربية",
      sourceDe:
        "Sehr geehrte Frau Müller, wir treffen uns am Freitag um 14 Uhr im Büro. Bitte bringen Sie den Vertrag mit.",
      taskAr: "انقل الرسالة بالعربية: موعد الاجتماع، المكان، والمطلوب إحضاره.",
      modelAnswerAr:
        "«عزيزتي السيدة مولر، نجتمع الجمعة الساعة 2 ظهراً في المكتب. يرجى إحضار العقد.»",
      keyPointsAr: [
        "نقلت موعد الاجتماع (الجمعة 2)",
        "ذكرت المكان (المكتب)",
        "نقلت طلب إحضار العقد",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a1-10-1",
      scenarioAr: "مكالمة هاتفية مهنية قصيرة.",
      scenarioDe: "Ein kurzer beruflicher Anruf.",
      strategyAr: "الاستراتيجية: الرد على الهاتف مهنياً وتأكيد المعلومات.",
      rounds: [
        {
          speakerDe:
            "Hallo, hier ist Herr Schmidt. Kann ich Frau Ben Ali sprechen?",
          speakerAr:
            "مرحباً، أنا السيد شميت. هل يمكنني التحدث مع السيدة بن علي؟",
          options: [
            {
              de: "Einen Moment, bitte. Ich hole sie.",
              ar: "لحظة من فضلك. سأحضرها.",
              best: true,
              replyDe: "Danke schön!",
              replyAr: "شكراً جميلاً!",
            },
            {
              de: "Nein, sie ist nicht hier. Sie ist in Paris.",
              ar: "لا، ليست هنا. إنها في باريس.",
              best: true,
              replyDe: "Ach so. Kann ich eine Nachricht hinterlassen?",
              replyAr: "فهمت. هل يمكن ترك رسالة؟",
            },
          ],
        },
        {
          speakerDe: "Können Sie ihr sagen, dass das Meeting am Freitag ist?",
          speakerAr: "هل يمكنك إخبارها أن الاجتماع يوم الجمعة؟",
          options: [
            {
              de: "Ja, natürlich. Am Freitag um 14 Uhr, richtig?",
              ar: "نعم بالطبع. الجمعة الساعة 2، صحيح؟",
              best: true,
              replyDe: "Genau, um 14 Uhr. Vielen Dank!",
              replyAr: "بالضبط، الساعة 2. شكراً جزيلاً!",
            },
            {
              de: "Ich verstehe kein Deutsch.",
              ar: "لا أفهم الألمانية.",
              best: false,
              replyDe: "Oh, das ist ein Problem für einen beruflichen Anruf.",
              replyAr: "أوه، هذه مشكلة في مكالمة مهنية.",
            },
          ],
        },
      ],
    },
  ],
};
