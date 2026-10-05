import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-12: الطقس والفصول
 * — مفردات الطقس وتراكيبه الشائعة، werden للتغيّر، وتعبيرات الزمن والروابط
 */
export const lessonA112: Lesson = {
  id: "a1-12",
  unitId: "a1-12",
  level: "A1",
  order: 1,
  titleDe: "Wetter und Jahreszeiten",
  titleAr: "الطقس والفصول",
  summary:
    "مفردات الطقس وتراكيب شائعة لوصفه، والتمييز بين es ist والحالة التي تتغير بـwerden، وتعبيرات زمنية متداولة، وروابط und/aber/oder/denn في أمثلة الطقس.",
  lernziele: [
    {
      id: "z1",
      de: "Ich kann zentrale Wetterwörter ihren Bedeutungen zuordnen.",
      ar: "أن أصل مفردات الطقس الأساسية بمعانيها.",
      evidence: {
        exerciseIds: ["e3", "e8"],
        taskIds: [
          "practice:a1-12:e3",
          "flow-practice:a1-12:e3",
          "practice:a1-12:e8",
        ],
        labelAr: "مطابقة أربعة أسماء للطقس بمعانيها، وتمييز معنى جملة قصيرة عن الثلج.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann einfache Wettersätze in den geübten Mustern vervollständigen und ordnen.",
      ar: "أن أختار أو أرتب جمل طقس قصيرة بالأنماط المتدرّب عليها.",
      evidence: {
        exerciseIds: ["e1", "e4"],
        taskIds: [
          "practice:a1-12:e1",
          "flow-practice:a1-12:e1",
          "practice:a1-12:e4",
          "flow-practice:a1-12:e4",
        ],
        labelAr: "اختيار es في وصف الطقس، وترتيب جملة regnen؛ ولا يُحتسب فتح التمرين دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann die geübten Präsensformen von „werden“ in kurzen Sätzen einsetzen.",
      ar: "أن أضع تصريف werden المناسب في جمل قصيرة من المضارع.",
      evidence: {
        exerciseIds: ["e2", "e18", "m2", "m5", "w2"],
        taskIds: [
          "practice:a1-12:e2",
          "flow-practice:a1-12:e2",
          "practice:a1-12:e18",
          "mini-test:a1-12:m2",
          "mini-test:a1-12:m5",
          "writing:a1-12:w2",
        ],
        labelAr: "إكمال وتصحيح تصريفات werden في أمثلة محددة، ومنها ich وdu وer/es وwir وihr.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann im Wetterkontext zwischen einer Lage und einer Veränderung unterscheiden.",
      ar: "أن أميّز في وصف الطقس بين حالة قائمة وتحوّل أو توقّع باستخدام ist/wird.",
      evidence: {
        exerciseIds: ["e6", "e7", "e24"],
        taskIds: [
          "practice:a1-12:e6",
          "practice:a1-12:e7",
          "practice:a1-12:e24",
        ],
        labelAr: "اختيار ist للحالة القائمة وwird للتحوّل في e6، ثم صياغة التحوّل المقصود في e7 وe24.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann die geübten Zeitangaben in kurzen Wettersätzen passend verwenden.",
      ar: "أن أختار التعبير الزمني المتدرّب عليه في جمل قصيرة عن الطقس.",
      evidence: {
        exerciseIds: ["e11", "e12", "e13", "e15", "e21", "e22", "e26"],
        taskIds: [
          "practice:a1-12:e11",
          "practice:a1-12:e12",
          "practice:a1-12:e13",
          "practice:a1-12:e15",
          "practice:a1-12:e21",
          "practice:a1-12:e22",
          "practice:a1-12:e26",
        ],
        labelAr: "إكمال واختيار صيغ محددة مع الفصول والأيام والساعة وmorgen وin der Nacht وseit/in.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann und, aber, oder und denn den geübten Beziehungen zuordnen und die Wortstellung in den Beispielen beachten.",
      ar: "أن أربط und وaber وoder وdenn بالعلاقة المقصودة، وأراعي ترتيب الجملة في أمثلة الدرس.",
      evidence: {
        exerciseIds: ["e19", "e20", "e23"],
        taskIds: [
          "practice:a1-12:e19",
          "practice:a1-12:e20",
          "practice:a1-12:e23",
        ],
        labelAr: "تعيين الإضافة والتضاد والاختيار والسبب في e19، ومراجعة ترتيب جملتين مستقلتين بعد aber وdenn في e20 وe23.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann ausdrücklich genannte Angaben in einem Wettertext finden.",
      ar: "أن أستخرج معلومات مصرحاً بها من تدوينة عن الطقس.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
        taskIds: [
          "reading:read-a1-12:rq1",
          "reading:read-a1-12:rq2",
          "reading:read-a1-12:rq3",
          "reading:read-a1-12:rq4",
          "reading:read-a1-12:rq5",
        ],
        labelAr: "الإجابة الصحيحة عن أسئلة التفاصيل الخمسة المرتبطة بفقرات النص المقروء.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann ausdrücklich genannte Angaben aus zwei geübten Wetter-Hörtexten heraushören.",
      ar: "أن أستخرج معلومات مصرحاً بها من نصّي استماع قصيرين عن الطقس قبل كشف أيٍّ منهما.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "الإجابة الصحيحة عن الأسئلة الثلاثة قبل كشف أيٍّ من نصّي الاستماع؛ لا يثبت ذلك إتقان الاستماع العام.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einen vorgegebenen Wetterhinweis als vollständigen Satz schreiben.",
      ar: "أن أكتب جملة ألمانية كاملة اعتماداً على معطيات طقس محددة.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a1-12:w1"],
        labelAr: "كتابة جملة واحدة كاملة عن معطيات الطقس الواردة في مهمة w1 المحددة.",
        completion: "all-correct",
      },
    },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "تعلّمنا صيغاً للطقس والحالة. كيف تقول بالألمانية إن الجو يصير بارداً؟ في هذا الدرس نتمرّن على werden بوصفه فعلاً يعبّر عن تغيّر الحالة.",
    motivatingQuestionDe: "Wie ist das Wetter heute?",
    contextAr:
      "نستخدم وصف الطقس لنتدرّب على es ist، وأفعال الطقس، وربط الحالة بالتغيّر عبر werden، مع أمثلة زمنية وروابط بسيطة.",
    contextDe: "Im Winter wird es kalt.",
    connectionToPreviousAr:
      "سبق أن تعلّمنا sein وhaben في دروس سابقة. نراجع بعض استعمالاتهما هنا إلى جانب werden؛ هذه أفعال مساعدة شائعة وليست قائمة حصرية بكل الأفعال المساعدة في الألمانية.",
    activateVocabulary: [
      { de: "das Wetter", ar: "الطقس" },
      { de: "die Sonne", ar: "الشمس" },
      { de: "der Regen", ar: "المطر" },
      { de: "kalt / warm", ar: "بارد / دافئ" },
      { de: "der Schnee", ar: "الثلج" },
    ],
  },

  /* مراجعة تراكمية مختارة (Interleaving): من الدروس a1-07 وa1-10 وa1-11 */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-07 — التسوق): كم الثمن؟",
      questionDe: "Was kostet das Brot?",
      questionAr: "كم ثمن الخبز؟",
      options: [
        "Zwei Euro fünfzig.",
        "Es ist zwei Euro.",
        "Ich bin zwei Euro.",
        "Das macht zwei Uhr.",
      ],
      correctIndex: 0,
      explanation: "السعر: Es kostet / Das macht + مبلغ — من درس a1-07.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-10 — العمل والمهن): أكمل النفي المحايد غير التبايني، من دون مقابلة المهنة بمهنة أخرى:",
      template: "Ich ___ Lehrer. (لست معلماً) · Ich habe ___ Auto. (لا سيارة)",
      blanks: [
        {
          correct: "bin kein",
          options: ["bin kein", "bin nicht", "habe kein", "werde kein"],
        },
        { correct: "kein", options: ["kein", "nicht", "keine", "keinen"] },
      ],
      hint:
        "في هذا المثال غير التبايني نقول Ich bin kein Lehrer. لا تعمم أن nicht لا يرد مع الأسماء؛ يتغير التركيز والتركيب بحسب السياق.",
      explanation:
        "في المعنى المحايد المقصود هنا نقول Ich bin kein Lehrer، وkein Auto؛ لا يعني ذلك أن nicht يمتنع مطلقاً مع الأسماء، إذ يختلف التركيز والبناء في سياقات أخرى — من درس a1-10.",
      errorType: "negation",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-11 — التنقل في المدينة، الاتجاه): استبدل التعبير المحدد بالصيغة المنقبضة المتدرّب عليها مع Bahnhof:",
      wrongSentence: "Ich gehe nach der Bahnhof.",
      wrongWord: "nach der Bahnhof",
      correctWord: "zum Bahnhof",
      options: [
        "zum Bahnhof",
        "nach der Bahnhof",
        "in der Bahnhof",
        "zu die Bahnhof",
      ],
      explanation:
        "في هذا المثال نقول zu + dem = zum Bahnhof. احفظ التركيب مع الوجهة؛ لا تستنتج أن كل مكان مغلق يفرض حرف جر واحداً.",
      errorType: "preposition",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "وصف الطقس: es ist، es regnet، die Sonne scheint",
      titleDe: "Das Wetter beschreiben",
      explanationAr:
        "في هذه الوحدة نعرض **ثلاثة أنماط ابتدائية** لوصف الطقس، لا قائمةً حصرية بكل ما يمكن أن يقال:\n\n**١ — es ist + صفة خبرية:** Es ist kalt / warm / sonnig / windig / neblig / bewölkt. الصفة الخبرية بعد sein لا تأخذ نهاية: Es ist kalt. قارنها بصفة تسبق اسماً مثل ein kalter Tag؛ هذا استعمال آخر.\n\n**٢ — فعل طقس مع es صوريّ في الجملة الكاملة المعتادة:** Es regnet / schneit / donnert / blitzt / friert. في هذه التراكيب لا يعيّن es شخصاً أو شيئاً يمطر؛ يصف الفعل ظاهرة الطقس ويأتي معه es الصوريّ. انظر إلى المثالين: Es regnet heute. / Heute regnet es. قد يتقدّم ظرف الزمن، ويبقى الفعل المصرف في موضعه الثاني في الجملة الخبرية.\n\n**٣ — اسم الطقس فاعلٌ نحويّ:** Die Sonne scheint. / Der Wind weht. / Der Himmel ist blau. هنا يتبع الفعل فاعلاً ظاهراً، مثل Die Blätter fallen.\n\n**درجة الحرارة:** من التعبيرات القياسية Es sind zwanzig Grad (20 °C) وEs ist ein Grad. في قياس الحرارة يبقى الاسم غالباً بلا علامة جمع: 30 Grad؛ لكن Duden يسجّل جمع Grade في استعمالات أخرى، بل يورد أيضاً einige Grade kälter. لذلك لا تحفظ أن Grad لا يجمع مطلقاً.\n\n**وصف الطقس أم إحساس الشخص؟** Es ist kalt يصف الجوّ في المثال. Mir ist kalt تعبير ألماني مألوف عن شعور المتكلم بالبرد (Duden يشرحه بـich friere). أما Ich bin kalt فهي جملة سليمة من حيث البناء، لكن لا تُستعمل عادةً بوصفها العبارة المحايدة نفسها للإبلاغ عن الإحساس؛ معناها يتوقف على المقام وقد تصف حرارة الشخص/شيئاً أو معنى مجازياً. لا تسمِّها خطأً نحوياً مطلقاً.",
      whyAr:
        "تظهر صيغة es الألمانية في استعمالات متعددة: فقد تعود على اسم سابق، وقد تكون es صورية ثابتة مع بعض أفعال الطقس، وقد تكون عنصراً شكلياً في تراكيب أخرى. لذلك لا نفسّر كل es بأنه «حامل للفعل يملأ المركز الأول». في Es regnet heute يبدأ المثال بـes، أما Heute regnet es فـHeute يشغل المقدمة وes يأتي بعد الفعل؛ يشرح IDS Grammis أن es مع أفعال الطقس لا يحمل مرجعاً دلالياً.\n\nوالجملة الألمانية ليست دائماً ذات فاعل ظاهر: يذكر Duden صراحةً Mir ist kalt ضمن أمثلة الجمل التي تخلو من الفاعل، كما يُحذف الفاعل عادةً في صيغة الأمر. في المقابل تورد مراجع القواعد Es regnet مثالاً على es صوريّ مع فعل طقس. هذه أوصاف لتراكيب مختلفة، لا استثناء واحداً يفسرها كلها.\n\nفي Mir ist kalt، mir صيغة Dativ داخل هذا التعبير الألماني وتعبّر عن صاحب الإحساس. هذا لا يجعلها «جرّاً» عربياً، ولا يثبت أن تركيبها مماثل نحوياً لـDas gefällt mir لمجرد اشتراكهما في صورة mir. الأفضل حفظ التعبير وسياقه بدلاً من نقل تسمية حالة من لغة إلى أخرى.",
      table: {
        title: "صيغ الطقس الثلاث",
        columns: ["الصيغة", "مثال", "المعنى"],
        rows: [
          { label: "es ist + صفة", cells: ["Es ist kalt.", "الجو بارد"] },
          { label: "es ist + صفة", cells: ["Es ist sonnig.", "الجو مشمس"] },
          { label: "فعل طقس مع es صوريّ", cells: ["Es regnet.", "تمطر"] },
          { label: "فعل طقس مع es صوريّ", cells: ["Es schneit.", "تثلج"] },
          { label: "اسم + فعل", cells: ["Die Sonne scheint.", "تشرق الشمس"] },
          { label: "اسم + فعل", cells: ["Der Wind weht.", "تهب الرياح"] },
        ],
      },
      examples: [
        { de: "Es ist kalt und windig.", ar: "الجوّ بارد وعاصف." },
        { de: "Heute ist es sehr sonnig.", ar: "اليوم الجوّ مشمس جداً." },
        { de: "Es regnet heute.", ar: "تمطر اليوم." },
        { de: "Heute regnet es.", ar: "اليوم تمطر." },
        { de: "Es regnet seit drei Stunden.", ar: "تمطر منذ ثلاث ساعات." },
        { de: "Im Winter schneit es oft.", ar: "في الشتاء تثلج كثيراً." },
        {
          de: "Die Sonne scheint und der Himmel ist blau.",
          ar: "الشمس مشرقة والسماء زرقاء.",
        },
        {
          de: "Es sind zwanzig Grad.",
          ar: "الحرارة عشرون درجة؛ وفي هذا القياس يشيع Grad بلا علامة جمع، مع sind.",
        },
        {
          de: "Heute Nacht sind es minus fünf Grad.",
          ar: "الليلة خمس درجات تحت الصفر.",
        },
        {
          de: "Mir ist kalt. Hast du eine Jacke?",
          ar: "أشعر بالبرد. أعندك سترة؟ (إحساس ⇐ mir)",
        },
      ],
      comparisonWithArabic:
        "في العربية قد نقول «الجو بارد» أو «أنا أشعر بالبرد»، بينما تختار الألمانية تراكيب مثل Es ist kalt وMir ist kalt. هذه مقابلات معنى تقريبية، لا تطابقاً في الإعراب أو بنية الجملة. وكذلك لا ينبغي مساواة es الألمانية بضمير عربي مستتر؛ لكل لغة طرائقها في بناء جملة الطقس.",
      eselsbruecke:
        "في الجملة الخبرية الكاملة التي نتدرّب عليها: Es regnet heute؛ وإذا تقدّم ظرف الزمن: Heute regnet es. وفي الإحساس الشخصي احفظ التعبير Mir ist kalt. هذه تذكرة للأنماط الواردة هنا، لا قاعدة تفسّر كل استعمال لـes.",
      commonMistakes: [
        {
          wrong: "Ich bin kalt. (إذا كان المقصود: أشعر بالبرد الآن)",
          right: "Mir ist kalt.",
          whyAr:
            "Mir ist kalt هي الصيغة المحايدة المألوفة للتعبير عن الإحساس. لكن Ich bin kalt ليست خطأً نحوياً في كل سياق؛ قد تُفهم بحسب المقام على وصف حرارة الشخص أو معنى مجازي، فلا تُدان خارج السياق المقصود.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Es regnen.",
          right: "Es regnet.",
          whyAr:
            "في جملة الطقس الكاملة المعروضة يأتي الفعل regnen مصرفاً مع es الصوريّ بصيغة الغائب المفرد: regnet؛ أما regnen هنا فمصدر لا يحقق صيغة الفعل المطلوبة.",
          classification: "error",
        },
        {
          wrong: "Der Wetter ist schön.",
          right: "Das Wetter ist schön.",
          whyAr:
            "Wetter اسم محايد في الألمانية، لذلك يقال das Wetter. جنس المقابل العربي لا يحدد جنس الاسم الألماني.",
          classification: "error",
        },
        {
          wrong: "Es ist zwanzig Grade. (قياس حرارة)",
          right: "Es sind zwanzig Grad.",
          whyAr:
            "في التعبير المعتاد عن درجة الحرارة يكتب Duden 20 Grad، ويشيع معه Es sind. لكن Grade جمع موجود في استعمالات أخرى؛ الخطأ هنا محصور في صيغة قياس الحرارة المقصودة، لا في وجود الجمع مطلقاً.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "es للطقس أم mir للإحساس؟",
        content:
          "في أمثلة الطقس نقول Es regnet أو Es ist kalt؛ وفي المثال الشخصي نقول Mir ist kalt. صيغة mir جزء من التعبير الألماني في Dativ، وليست ترجمةً مباشرةً لحالة الإعراب العربية. وIch bin kalt تظل صيغةً ممكنة في سياقات أخرى، لكنها ليست العبارة المحايدة المقصودة عن الإحساس هنا.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل werden: التصريف ومعنى التغيّر",
      titleDe: "Das Verb werden: Formen und Veränderung",
      explanationAr:
        "في هذا الدرس نتدرّب على werden بمعنى «يصير/يصبح» في أمثلة التغيّر، ونميّزه عن وصف الحالة القائمة.\n\n**تصريف المضارع (Indikativ):** ich werde · du wirst · er/sie/es wird · wir werden · ihr werdet · sie (الجمع) / Sie (صيغة الاحترام): werden. يعرض Duden الفعل بوصفه غير منتظم؛ احفظ صورتَي du wirst وer wird كما هما. في هاتين الصيغتين يتغير جذر الفعل (e إلى i)، وليس التفسير حذف حرف e بسبب ثقل صوتي.\n\n**المعنى المستهدف هنا: تغيّر الحالة:**\n· Es wird kalt. (يتحوّل الجوّ إلى البرودة، أو تشير النشرة إلى ذلك بحسب السياق)\n· Die Tage werden kürzer. (تصير الأيام أقصر)\n· Ich werde müde. (أبدأ أشعر بالتعب)\n\n**مقارنة سياقية بين ist وwird:** Es ist kalt يصف حالةً قائمة في السياق، أما Es wird kalt فيعرض انتقالاً إلى البرودة أو توقّع هذا الانتقال. كلتا الجملتين صحيحة، ولا يحدد الزمن وحده الاختيار من دون سياق.\n\nويستعمل هذا الدرس أمثلةً من sein وhaben وwerden، وهي أفعال مساعدة شائعة في الألمانية، لكنه لا يقرر أنها كل الأفعال المساعدة. كذلك لا يخلط بين werden الفعل الدال على التغيّر في Es wird kalt وبين تراكيب أخرى: Futur I مثل Morgen wird es regnen، والمبني للمجهول مثل Das Haus wird gebaut. هذه وظائف أخرى لا تقيسها تمارين الدرس.\n\nويأتي werden مع خبر اسمي أيضاً: Er wird Arzt (يصير طبيباً؛ المهنة هنا بلا أداة تنكير)، وEs wird Winter (يبدأ الشتاء/يدخل).",
      whyAr:
        "يصنّف Duden werden فعلاً غير منتظم؛ ويعرض جدول الدرس صيغ المضارع المتدرّب عليها: werde, wirst, wird, werden, werdet, werden. لذلك نحفظ الأشكال المعيارية، ولا نخترع لها تفسيراً صوتياً من نوع «حذف e لأن مجموعة الحروف ثقيلة». كما يشرح Duden معنى werden الفعليّ بوصفه الدخول في حالة أو اكتساب صفة، ويورد أمثلةً مثل das Wetter wurde schlechter وmüde werden.\n\nتظهر الكلمة أيضاً بوظيفة الفعل المساعد في بناء المستقبل والمبني للمجهول، لكن هذا لا يجعل كل ظهور لها مستقبلاً: في Es wird kalt يأتي معنى التغيّر بحسب المثال؛ أما wird regnen وwird gebaut فتركيبان مختلفان. الفصل بين الوظائف يمنع تحويل «يصبح» و«سوف» إلى قاعدة واحدة.\n\nعند عرض حالة باردة موجودة نقول Es ist kalt في السياق المقصود، وعند وصف تغيّر نحو البرودة يمكن أن نقول Es wird kalt. إذا كان المقام نشرةً أو توقّعاً فقد يحمل الثاني قيمة مستقبلية؛ لا نصف الصيغتين بإحداهما «صحيحة» والأخرى «خاطئة» من دون تحديد المقصود.",
      table: {
        title: "تصريف werden",
        columns: ["الضمير", "werden", "مثال"],
        rows: [
          { label: "ich", cells: ["werde", "Ich werde müde."] },
          { label: "du", cells: ["wirst", "Du wirst müde."] },
          { label: "er/sie/es", cells: ["wird", "Es wird kalt."] },
          { label: "wir", cells: ["werden", "Wir werden müde."] },
          { label: "ihr", cells: ["werdet", "Ihr werdet müde."] },
          { label: "sie (Plural) / Sie (Höflichkeitsform)", cells: ["werden", "Sie werden stark."] },
        ],
      },
      examples: [
        {
          de: "Im Herbst werden die Blätter bunt.",
          ar: "في الخريف تصير الأوراق ملوّنة. (جمع ⇐ werden)",
        },
        {
          de: "Es wird kalt. Nimm eine Jacke mit!",
          ar: "يصير الجوّ بارداً. خذ سترةً معك!",
        },
        { de: "Ich werde müde.", ar: "أشعر بأنني أزداد تعباً." },
        {
          de: "Du wirst schnell besser.",
          ar: "تتحسّن بسرعة / ستتحسّن بسرعة بحسب السياق. (تصريف المضارع: du wirst)",
        },
        { de: "Das Wetter wird morgen besser.", ar: "سيتحسّن الطقس غداً / سيصبح الطقس أفضل غداً." },
        {
          de: "Es wird Winter und die Tage werden kürzer.",
          ar: "يدخل الشتاء وتصير الأيّام أقصر.",
        },
        {
          de: "Mein Bruder wird Arzt.",
          ar: "أخي سيصير طبيباً. (مهنة بلا أداة)",
        },
        {
          de: "Es ist kalt, aber morgen wird es wärmer.",
          ar: "الجوّ بارد، لكن غداً سيصبح أدفأ.",
        },
      ],
      comparisonWithArabic:
        "في هذه الأمثلة يقابل werden غالباً «يصير/يصبح» عند وصف تحوّلٍ في الحالة، لكن المقابلة تقريبية ولا تعني تطابق البنية أو الوظيفة. لا تُساوِ هذا الاستعمال بالفعل المساعد للمستقبل؛ في أمثلة الدرس werden + صفة/اسم، أما استعماله مع مصدر أو اسم مفعول فينتمي إلى بناء آخر.",
      eselsbruecke:
        "للتغيّر: werden + صفة خبرية بلا نهاية، مثل Es wird kalt. واحفظ التصريف كما في الجدول: werde · wirst · wird · werden · werdet · werden؛ هذا ملخّص للصيغ المعروضة، لا تفسير صوتي لها.",
      commonMistakes: [
        {
          wrong: "Du wird müde. (Indikativ Präsens)",
          right: "Du wirst müde.",
          whyAr:
            "في المضارع الإخباري مع du الصيغة هي wirst. أما werdest فهي صيغة صحيحة في Konjunktiv I في سياق نقل الكلام، فلا نعرضها كخطأ مطلق خارج سياق المضارع الإخباري.",
          classification: "error",
        },
        {
          wrong: "Ich wird müde.",
          right: "Ich werde müde.",
          whyAr:
            "مع ich نستخدم werde؛ wird هي صيغة الغائب المفرد في المضارع الإخباري.",
          classification: "error",
        },
        {
          wrong: "Es wird kaltes.",
          right: "Es wird kalt.",
          whyAr:
            "الصفة الخبرية بعد werden في المثال تبقى بلا نهاية؛ النهايات تظهر في سياقات أخرى، مثل ein kalter Tag عندما تسبق الصفة اسماً.",
          classification: "error",
        },
        {
          wrong: "Es wird kalt. (أصف حالةً مستقرة قائمة الآن)",
          right: "Es ist kalt.",
          whyAr:
            "wird صيغة سليمة عند وصف التحوّل أو التوقّع؛ إذا كان المقصود الحالة القائمة في هذا السياق، فـist أنسب. هذا فرق معنى وسياق، لا خطأ نحوي مطلق.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "werden بوصفه فعل تغيّر ووظائفه المساعدة الأخرى",
        content:
          "في هذا الدرس: Es wird kalt = يتغيّر الطقس نحو البرودة. وفي تراكيب أخرى: Futur I مثل Ich werde lernen، والمبني للمجهول مثل Das Haus wird gebaut. تشابه شكل werden لا يجعل هذه الوظائف موضوعاً واحداً، ولا تعني أمثلة الدرس أننا قيّمنا بناء المستقبل أو المبني للمجهول.",
      },
    },
    {
      id: "t3",
      titleAr: "تعبيرات زمنية شائعة مع الطقس",
      titleDe: "Zeitangaben im Wetterkontext",
      explanationAr:
        "تتعلّم هنا تعبيرات زمنية شائعة في جمل الطقس. هي أنماط استعمال متداولة ينبغي حفظ أمثلتها؛ لا تشتقّ حروفها من قاعدة عامة عن «حجم» الوحدة أو من معناها المكاني:\n\n· **um + الساعة:** um sieben Uhr / um halb neun.\n· **am + يوم أو تاريخ، ومن تعبيرات اليوم المألوفة:** am Montag، am 3. Mai، am Morgen، am Abend.\n· **im + شهر أو فصل:** im Mai، im Sommer.\n· **دون حرف جر في أمثلة ظرفية مألوفة:** heute، morgen (غداً)، gestern.\n· **تعبير زمني شائع:** in der Nacht. احفظه كما هو؛ لا تفسّره بقاعدة أن كل أجزاء اليوم تأخذ am ما عدا الليل.\n\nقارن هذه الصيغ في أمثلتها: **morgen** بحرف صغير تعني غداً، أما **Morgen** اسمٌ بحرف كبير؛ نقول Am Morgen = في الصباح، وmorgen früh = غداً صباحاً. وتُكتب الأسماء الألمانية بحرف كبير، لذا تساعد الكتابة على التمييز.\n\nوتظهر صيغ زمنية أخرى مع الطقس: **seit drei Stunden** تعني أن المطر مستمر منذ ثلاث ساعات في سياق المثال؛ **ab morgen** تعني ابتداءً من الغد. أما **in einer Stunde** فتُفهم هنا على أنها بعد ساعة من نقطة مرجعية مستقبلية في هذا السياق؛ ليست قاعدةً آلية تقول إن كل in + مدة تعني دائماً «بعد» مهما كان المقام.\n\nتعرض الأمثلة أنماطاً شائعة لا جدولاً شاملاً لكل حروف الجر والتعابير الزمنية الألمانية.",
      whyAr:
        "اختيار am أو im أو um يرتبط بالتعبير الألماني المألوف الذي يرافق نوعاً معيناً من الوقت، لا بقاعدة تعليمية موثقة عن «صِغر» الوقت أو «كبره». لذلك نقدّم تراكيب محددة يمكن استعمالها: um sieben Uhr، am Montag، im Sommer. ولا ننقل معنى حرف المكان إلى الزمن على نحو حرفي؛ يبيّن IDS Grammis أن الاستعمال الزمني لحروف الجر له أنماطه وسياقاته الخاصة.\n\nكذلك نميّز ظرف morgen الصغير من الاسم Morgen الكبير وفق قواعد الكتابة الألمانية، ونقدّم in einer Stunde بمعناه في مثال ذي منظور مستقبلي فقط. هذا يمنع التعميم أن كل عبارة in + مدة تشير إلى نقطة زمنية واحدة بمعزل عن السياق.",
      table: {
        title: "أنماط شائعة في أمثلة الدرس",
        columns: ["الصيغة", "مثال الاستعمال", "مثال"],
        rows: [
          { label: "um", cells: ["مع الساعة", "Um sieben Uhr ist es dunkel."] },
          {
            label: "am",
            cells: ["مع يوم أو تعبير يومي مألوف", "Am Montag regnet es."],
          },
          { label: "im", cells: ["مع شهر أو فصل", "Im Winter ist es kalt."] },
          {
            label: "بلا حرف جر",
            cells: ["heute / morgen / gestern", "Morgen scheint die Sonne."],
          },
          {
            label: "in der Nacht",
            cells: ["تعبير شائع يُحفظ كما هو", "In der Nacht wird es kühl."],
          },
        ],
      },
      examples: [
        {
          de: "Bei uns in Tunis ist es im Sommer oft heiß.",
          ar: "عندنا في تونس يكون الجو صيفاً حاراً غالباً.",
        },
        {
          de: "Am Wochenende bleibe ich zu Hause.",
          ar: "في عطلة الأسبوع أبقى في البيت.",
        },
        {
          de: "Morgen wird es kalt.",
          ar: "غداً يُتوقّع أن يصبح الجوّ بارداً في هذا السياق. (بلا حرف جرّ)",
        },
        {
          de: "Am Abend regnet es oft im Herbst.",
          ar: "في المساء تمطر كثيراً في الخريف.",
        },
        {
          de: "In der Nacht sind es nur fünf Grad.",
          ar: "في الليل تكون الحرارة خمس درجات فقط.",
        },
        { de: "Es regnet seit drei Stunden.", ar: "تمطر منذ ثلاث ساعات." },
        {
          de: "In einer Stunde hört der Regen auf.",
          ar: "في هذا السياق، يتوقّف المطر بعد ساعة من الآن.",
        },
        {
          de: "Ab morgen wird es wärmer.",
          ar: "ابتداءً من الغد يُتوقّع أن يصبح الجوّ أدفأ.",
        },
      ],
      comparisonWithArabic:
        "تتوزع تعبيرات الوقت بين العربية والألمانية بطرائق لا تتطابق واحداً بواحد. تعلّم الصيغ الألمانية كما ترد في الأمثلة، ولا تفترض أن حرفاً عربياً واحداً يقابل am أو im أو um في كل سياق. كما أن eine Stunde في مثال مستقبلي تعني بعد ساعة من نقطة المرجع في ذلك المقام؛ يظل السياق مهماً.",
      eselsbruecke:
        "احفظ كل مثال مع عبارته: um sieben Uhr · am Montag · im Sommer · in der Nacht؛ وميّز morgen = غداً من am Morgen = في الصباح. أما in einer Stunde فافهمها وفق نقطة الزمن في السياق.",
      commonMistakes: [
        {
          wrong: "In Montag regnet es.",
          right: "Am Montag regnet es.",
          whyAr:
            "في هذا التعبير الزمني القياسي مع اسم يوم نقول am Montag. تعلّم الصيغة الواردة هنا بدلاً من تعميم حرف جر عربي واحد على كل سياق ألماني.",
          classification: "error",
        },
        {
          wrong: "Am morgen scheint die Sonne. (والمقصود: غداً)",
          right: "Morgen scheint die Sonne.",
          whyAr:
            "إذا كان المقصود غداً فـmorgen ظرف يكتب بحرف صغير ولا يسبقه am. أما am Morgen فتعني في الصباح، وMorgen اسم يُكتب بحرف كبير.",
          classification: "error",
        },
        {
          wrong: "Am der Nacht ist es kalt.",
          right: "In der Nacht ist es kalt.",
          whyAr:
            "التعبير الشائع في المثال هو in der Nacht. احفظ هذا التركيب؛ لا نعلّل اختياره بقاعدة تقول إن كل أجزاء اليوم تأخذ am عدا الليل.",
          classification: "error",
        },
        {
          wrong: "In einer Stunde = immer und in jedem Kontext „nach einer Stunde“.",
          right: "In einer Stunde = hier, mit künftigem Bezugspunkt: nach einer Stunde.",
          whyAr:
            "في المثال ذي المنظور المستقبلي قد تعني in einer Stunde «بعد ساعة» من نقطة المرجع. لا يصح تحويل هذا المثال إلى قاعدة تلغي اختلاف المعنى والسياق في سائر استعمالات in مع المدة.",
          classification: "unverified-claim",
        },
      ],
      relatedRuleComparison: {
        title: "تراكيب زمنية تُتعلّم في أمثلتها",
        content:
          "انظر إلى كل عبارة في سياقها: am Montag، im Sommer، um sieben Uhr، in der Nacht. هي أنماط شائعة مختلفة، ولا يفسّرها سُلّم مكاني أو مقياس ثابت لحجم الوقت. وبالمثل يعتمد فهم in einer Stunde على نقطة المرجع والسياق.",
      },
    },
    {
      id: "t4",
      titleAr: "أدوات ربط شائعة: und · aber · oder · denn",
      titleDe: "Häufige Konnektoren: und, aber, oder, denn",
      explanationAr:
        "نستعمل أدوات ربط شائعة لبيان الإضافة أو الاختيار أو التضاد أو السبب. هنا أمثلة على **جمل خبرية مستقلة**؛ لكل جملة منها ترتيبها، ولا نعدّ أداة الربط عنصراً داخل الجملة التالية عند شرح موضع الفعل في هذه الأمثلة:\n\n· **und** يضيف معلومة: Es ist kalt und der Wind weht.\n· **aber** يقدّم تضاداً: Es ist kalt, aber die Sonne scheint.\n· **oder** يقدّم اختياراً: Gehen wir spazieren oder bleiben wir zu Hause? في السؤال البديل يظل ترتيب الفعل متأثراً بكون الجملة سؤالاً، لا بوجود oder وحده.\n· **denn** يقدّم سبباً في جملة رئيسية: Ich bleibe zu Hause, denn es regnet.\n\n**موضع الفعل:** في كل جملة خبرية مستقلة معتادة يبقى الفعل المصرف في الموضع الثاني من جملته: Es ist kalt, aber die Sonne scheint؛ بعد aber تبدأ الجملة الثانية بفاعلها die Sonne ثم الفعل scheint. هذه طريقة تعليمية لقراءة الأمثلة، وليست وصفاً شاملاً لكل استعمال أو تصنيف نحوي للأدوات.\n\n**الفاصلة في الأمثلة:** تسبق الفاصلة aber وdenn عندما تربطان جملتين مستقلتين كما في المثالين. ولا توضع عادةً فاصلة قبل und أو oder في الوصل العادي، لكن قد تسمح القواعد بإظهار فاصلة بين جملتين مستقلتين لتوضيح البنية. لا نعمّم حكماً واحداً على كل أنواع الجمل والروابط.\n\n**denn وweil:** كلاهما يقدّم سبباً في المثال، لكن ترتيب الفعل يختلف: Ich bleibe zu Hause, denn das Wetter ist schlecht؛ مقابل Ich bleibe zu Hause, weil das Wetter schlecht ist. في جملة weil التابعة يأتي الفعل المصرف في النهاية. هذا فرق بين المثالين المعروضين، وليس تعليلاً بأن رابطاً «لا يدخل الجملة» دائماً من كل وجه.\n\nيمكن لـund وoder أيضاً أن تربطا كلمات أو عبارات قصيرة لا جملتين كاملتين؛ لذلك لا تستنتج من كل مثال بسيط قاعدة موضع الفعل.",
      whyAr:
        "تدرب الأمثلة على أربع علاقات سهلة الملاحظة: الإضافة، والاختيار، والتضاد، والسبب. السياق هو ما يحدد الرابط، لا مقابلة حرفية آلية بين أداة عربية وألمانية.\n\nوعند وصل جملتين رئيسيتين، يساعد تقطيع المثال إلى جملتين على رؤية ترتيب كل واحدة: Es ist kalt | aber | die Sonne scheint. في الجملة الثانية die Sonne أول عنصر داخل الجملة ثم يأتي الفعل scheint في الموضع الثاني. هذا وصف للجمل الخبرية المستقلة المعروضة، لا قاعدة تقول إن كل رابط في الألمانية يوضع خارج الجملة في جميع التحليلات والاستعمالات.\n\nأما الفاصلة فمرتبطة ببنية الجملة وقواعد الكتابة، لا بفكرة أن كل جملة ألمانية تأخذ فاصلة قبل كل رابط. تبيّن قواعد Grammis أن الفاصلة لا تلزم عادةً مع und/oder في الوصل العادي، مع إمكان إظهارها في بعض الجمل المستقلة للتوضيح، بينما تسبق aber الفاصلة في الأمثلة المقصودة هنا. لذلك يذكر الجدول نوع البنية المقصودة صراحةً.",
      table: {
        title: "وظائف الروابط وعلامات الترقيم في أمثلة الدرس",
        columns: ["الأداة", "العلاقة", "الفاصلة بين جملتين مستقلتين؟"],
        rows: [
          {
            label: "und",
            cells: ["إضافة", "لا عادةً؛ يمكن إظهارها أحياناً للتوضيح"],
          },
          {
            label: "aber",
            cells: ["تضاد", "نعم في أمثلة الوصل هنا"],
          },
          {
            label: "oder",
            cells: ["اختيار", "لا عادةً؛ يمكن إظهارها أحياناً للتوضيح"],
          },
          {
            label: "denn",
            cells: ["سبب في جملة رئيسية", "نعم بين الجملتين في المثال"],
          },
          {
            label: "جملة خبرية مستقلة",
            cells: ["ترتيب كل جملة على حدة", "الفعل المصرف في الموضع الثاني عادةً"],
          },
        ],
      },
      examples: [
        { de: "Es ist kalt und der Wind weht.", ar: "الجوّ بارد وتهبّ الريح." },
        {
          de: "Es ist kalt, aber die Sonne scheint.",
          ar: "الجوّ بارد لكنّ الشمس مشرقة. (الفاعل أوّلاً بعد aber)",
        },
        {
          de: "Ich bleibe zu Hause, denn es regnet.",
          ar: "أبقى في البيت لأنّها تمطر.",
        },
        {
          de: "Gehen wir spazieren oder bleiben wir hier?",
          ar: "أنذهب في نزهة أم نبقى هنا؟",
        },
        {
          de: "Im Sommer ist es heiß, aber im Winter wird es kalt.",
          ar: "في الصيف حارّ، لكن في الشتاء يصير بارداً.",
        },
        {
          de: "Ich nehme den Regenschirm mit, denn das Wetter ist schlecht.",
          ar: "آخذ المظلّة معي لأنّ الطقس سيّئ.",
        },
        {
          de: "Heute schneit es und morgen wird es noch kälter.",
          ar: "اليوم تثلج وغداً يصير أبرد.",
        },
        {
          de: "Der Himmel ist grau, aber es regnet nicht.",
          ar: "السماء رمادية لكنّها لا تمطر.",
        },
      ],
      comparisonWithArabic:
        "تعبّر هذه الأدوات عن علاقات مثل الإضافة والاختيار والتضاد والسبب، لكن مقابلاتها العربية تقريبية وتتأثر بالسياق. كذلك لا ننقل ترتيب الكلمات أو علامات الترقيم بين اللغتين مباشرةً؛ نتعلّم هنا أمثلة ألمانية محددة وننتبه إلى حدود القاعدة التي تعرضها. وتتبدل الصيغة باختلاف المقام.",
      eselsbruecke:
        "اربط كل أداة بالمعنى في المثال: und إضافة، oder اختيار، aber تضاد، denn سبب. وعند وصل جملتين خبريتين مستقلتين، افحص ترتيب كل جملة وعلامة الترقيم الخاصة بالتركيب.",
      commonMistakes: [
        {
          wrong: "Es ist kalt, aber scheint die Sonne. (جملة خبرية)",
          right: "Es ist kalt, aber die Sonne scheint.",
          whyAr:
            "في الجملة الخبرية المستقلة المقصودة تبدأ الجملة الثانية بالفاعل die Sonne ثم يأتي الفعل المصرف في موضعه الثاني. أما ترتيب الفعل أولاً فيلائم أنماطاً أخرى، مثل السؤال، ولا يُستخدم هنا لمجرد وجود aber.",
          classification: "error",
        },
        {
          wrong: "Ich bleibe zu Hause denn es regnet.",
          right: "Ich bleibe zu Hause, denn es regnet.",
          whyAr:
            "في المثال تربط denn جملتين مستقلتين، وتوضع الفاصلة بينهما. لا نعمّم هذا الحكم على كل استعمال لـund أو oder.",
          classification: "error",
        },
        {
          wrong: "Ich bleibe zu Hause, denn das Wetter schlecht ist.",
          right: "Ich bleibe zu Hause, denn das Wetter ist schlecht.",
          whyAr:
            "بعد denn في هذا المثال تأتي جملة رئيسية بترتيبها المعتاد: الفاعل das Wetter ثم الفعل ist. أما weil فتُدخل هنا جملة تابعة ويأتي فعلها في النهاية: weil das Wetter schlecht ist.",
          classification: "error",
        },
        {
          wrong: "Es ist kalt und aber sonnig. (أريد رابطاً واحداً للتضاد)",
          right: "Es ist kalt, aber sonnig.",
          whyAr:
            "في هذا التمرين طُلب رابط واحد للتضاد، لذلك نختار aber وحدها. لا نحكم من هذا القيد على كل سياق قد تجتمع فيه und وaber؛ فالملاحظة هنا عن ملاءمة الصياغة للمقصود المحدد، لا عن استحالة مطلقة.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "العنصر الأول داخل الجملة أم الرابط؟",
        content:
          "قارن الأمثلة الخبرية: (١) Die Sonne scheint. (٢) Heute scheint die Sonne: اليوم عنصر الجملة الأول، والفعل المصرف ثانٍ. (٣) …, aber die Sonne scheint: أداة الربط ليست العنصر الأول داخل الجملة الخبرية التالية؛ die Sonne عنصرها الأول ثم يأتي scheint. هذا تمثيل تعليمي لهذه الجمل المستقلة، ولا يمتد تلقائياً إلى الأسئلة أو كل أنواع الروابط.",
      },
    },
  ],
  reading: {
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
          "Denn es schneit immer.",
          "Denn er hat keine Jacke.",
          "Denn es ist zu heiß.",
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
  },

  listening: {
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
  },
  pronunciation: {
    id: "p1",
    title: "تدريب نطقي استرشادي لمفردات الطقس",
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
  },
  writing: [
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
  ],
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr:
        "في جواب كامل عن حالة الطقس، اختر الصيغة المناسبة للنمط المتدرّب عليه:",
      questionDe: "Wie ist das Wetter? — ___ ist kalt.",
      options: ["Es", "Ich", "Er", "Sie"],
      correctIndex: 0,
      explanation:
        "في هذا الجواب عن الطقس نستخدم Es ist kalt. هنا es صوريّ في المثال، وليس اسماً لشخص؛ لا يعني ذلك أن كل ظهور لـes له الوظيفة نفسها.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر التصريف الصحيح:",
      questionDe: "Es ___ kalt.",
      questionAr: "يصبح الجو بارداً.",
      options: ["wird", "werde", "wirst", "werden"],
      correctIndex: 0,
      explanation:
        "في جملة التغيّر Es wird kalt نستخدم صيغة المضارع الإخباري wird مع es.",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة الطقس بمعناها:",
      pairs: [
        { left: "die Sonne", right: "الشمس" },
        { left: "der Regen", right: "المطر" },
        { left: "der Schnee", right: "الثلج" },
        { left: "der Wind", right: "الريح" },
      ],
      explanation: "أربعة أسماء مختارة من مفردات الطقس.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Es", "heute", "regnet", "."],
      correctSentence: "Es regnet heute.",
      acceptedSentences: ["Heute regnet es."],
      explanation:
        "كلا الترتيبين صحيح في هذا المثال: Es regnet heute وHeute regnet es. عند تقديم اليوم يبقى الفعل المصرف في الموضع الثاني.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "multiple-choice",
      instructionAr:
        "حسب السياق، اختر العبارة الألمانية المحايدة للتعبير عن إحساس المتكلم بالبرد الآن:",
      questionDe: "Brr! Ich friere. ___ kalt. Hast du eine Jacke?",
      questionAr: "المتحدث يصرّح بأنه يشعر بالبرد؛ ما العبارة المناسبة؟",
      options: ["Mir ist", "Ich bin", "Es ist", "Mich ist"],
      correctIndex: 0,
      explanation:
        "Mir ist kalt تعبير ألماني مألوف عن الإحساس بالبرد. Ich bin kalt ليست خطأً نحوياً مطلقاً، لكن السياق هنا يطلب العبارة المحايدة للإحساس؛ أما Es ist kalt فيصف الجو.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr:
        "أكمل بـ ist أو wird: يصف الفراغ الأول حالةً قائمة، ويعبّر الثاني تحديداً عن بدء تحوّل متوقّع من الدفء إلى البرودة؛ لا تختَر werden لمجرد أن العبارة مستقبلية.",
      template:
        "Am Morgen ___ es kalt. Am Nachmittag ist es warm, aber laut Wettervorhersage ___ es am Abend wieder kalt.",
      blanks: [
        { correct: "ist", options: ["ist", "wird"] },
        { correct: "wird", options: ["ist", "wird"] },
      ],
      explanation:
        "الجملة الأولى تصف حالة الصباح: Am Morgen ist es kalt. وفي الثانية الجو دافئ بعد الظهر، لكن النشرة تتوقع عودته إلى البرودة مساءً؛ لذلك يناسبه wird. ليست قاعدة أن كل خبر مستقبلي يتطلب werden.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr:
        "استخدم werden للتعبير عن تحوّل الطقس في السياق المعطى؛ ليست المهمة اختباراً لصيغة Futur:",
      prompt: "Es ist kühl. Im Sommer → (warm)",
      acceptedAnswers: [
        "Im Sommer wird es warm.",
        "Es wird im Sommer warm",
        "Es wird warm im Sommer",
      ],
      sampleAnswer: "Im Sommer wird es warm.",
      caseSensitive: true,
      explanation:
        "في سياق التحوّل المعطى يمكن استعمال werden مع الصفة الخبرية: Im Sommer wird es warm. وتقبل المهمة مواضع زمنية أخرى صحيحة؛ لا تسمّيها هنا تمريناً على Futur I.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Es schneit.",
      questionAr: "ما معنى الجملة؟",
      options: ["تثلج", "تمطر", "تهب الرياح", "تشرق الشمس"],
      correctIndex: 0,
      explanation: "schneien = تثلج. (regnen = تمطر).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "استبدل أداة التعريف المحددة بما يناسب الاسم المفرد في هذه الجملة:",
      wrongSentence: "Der Wetter ist schön.",
      wrongWord: "Der",
      correctWord: "Das",
      options: ["Das", "Der", "Die", "Den"],
      explanation:
        "في هذه الجملة الخبرية المفردة نقول das Wetter؛ جنس الاسم محفوظ في الألمانية ولا يستنتج من المقابل العربي.",
      errorType: "gender",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Sonne scheint und der Wind weht.",
      caseSensitive: true,
      explanation: "تشرق الشمس وتهب الرياح — اسم + فعل لكل عنصر.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الزمني الصحيح:",
      template:
        "___ Winter ist es kalt. ___ Montag regnet es. ___ acht Uhr ist es noch dunkel.",
      blanks: [
        { correct: "Im", options: ["Im", "Am", "Um"] },
        { correct: "Am", options: ["Am", "Im", "Um"] },
        { correct: "Um", options: ["Um", "Am", "Im"] },
      ],
      explanation:
        "في أمثلة الدرس: im Winter، am Montag، um acht Uhr. احفظ كل تركيب مع نوع التعبير الزمني الوارد معه.",
      errorType: "preposition",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr:
        "استبدل حرف الجر المحدد بالتعبير المناسب مع اسم اليوم:",
      wrongSentence: "In Montag scheint die Sonne.",
      wrongWord: "In",
      correctWord: "Am",
      options: ["Am", "In", "Um", "Im"],
      explanation:
        "في التعبير المحدد عن يوم الأسبوع هنا نقول am Montag؛ تعلّم المثال دون تعميمه على كل تركيب زمني ألماني.",
      errorType: "preposition",
    },
    {
      id: "e13",
      type: "transformation",
      instructionAr:
        "اكتب جملةً تعني «ستمطر غداً»؛ اقبل تقديم morgen أو es ما دامت الصياغة صحيحة:",
      prompt: "morgen + es regnen (جملة خبرية)",
      acceptedAnswers: ["Morgen regnet es.", "Es regnet morgen."],
      sampleAnswer: "Morgen regnet es.",
      caseSensitive: true,
      explanation:
        "كلتا الصيغتين صحيحة في هذا السياق: Morgen regnet es وEs regnet morgen. أما am Morgen فتعني في الصباح، لا غداً.",
      errorType: "word-order",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة عن طقس الفصل:",
      tokens: ["Im", "Sommer", "ist", "es", "sehr", "heiß", "."],
      correctSentence: "Im Sommer ist es sehr heiß.",
      acceptedSentences: [
        "Es ist im Sommer sehr heiß.",
        "Es ist sehr heiß im Sommer.",
      ],
      explanation:
        "Im Sommer ist es sehr heiß وEs ist im Sommer sehr heiß ترتيبان صحيحان هنا؛ يظل الفعل المصرف في موضعه الثاني.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "أجب عن السؤال بالمعطيات المذكورة.",
      prompt: "Wann ist es in Deutschland kalt? (der Winter)",
      acceptedAnswers: [
        "Im Winter ist es kalt.",
        "Im Winter.",
        "Es ist im Winter kalt.",
        "Im Winter ist es in Deutschland kalt.",
        "Es ist in Deutschland im Winter kalt.",
        "In Deutschland ist es im Winter kalt.",
        "Im Winter ist es kalt in Deutschland.",
      ],
      sampleAnswer: "Im Winter ist es in Deutschland kalt.",
      caseSensitive: true,
      explanation:
        "في المثال نقول im Winter. يقبل السؤال إجابة مختصرة عن wann وجملاً كاملة صحيحة، ويجب أن تشمل acceptedAnswers صيغة sampleAnswer.",
      errorType: "preposition",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr:
        "بعد الجري يشعر المتكلم بالدفء؛ اختر العبارة الألمانية المألوفة عن إحساسه، لا عن حرارة الجو:",
      questionDe: "Ich bin gerade gelaufen. ___ warm. Ich brauche keine Jacke.",
      options: ["Mir ist", "Ich bin", "Es ist", "Mich ist"],
      correctIndex: 0,
      errorType: "case",
      explanation:
        "Mir ist warm تعبير مألوف عن إحساس الشخص بالدفء. Ich bin warm ليست العبارة المحايدة المقصودة هنا، وEs ist warm يصف الجو؛ لا نحكم على هذه الصيغ خارج السياق نفسه.",
    },
    {
      id: "e17",
      type: "error-correction",
      instructionAr: "صحّح تصريف فعل الطقس:",
      wrongSentence: "Es regnen seit zwei Stunden.",
      wrongWord: "regnen",
      correctWord: "regnet",
      options: ["regnet", "regne", "regnest", "geregnet"],
      errorType: "conjugation",
      explanation:
        "es ضمير مفرد للغائب فيلزمه regnet. وregnen مصدر لا يصلح فعلاً مصرَّفاً في المركز الثاني.",
    },
    {
      id: "e18",
      type: "error-correction",
      instructionAr: "صحّح تصريف werden:",
      wrongSentence: "Du wird bald müde. (Indikativ Präsens)",
      wrongWord: "wird",
      correctWord: "wirst",
      options: ["wirst", "wird", "werde", "werdet"],
      errorType: "conjugation",
      explanation:
        "في المضارع الإخباري مع du نكتب wirst. أما werdest فصيغة صحيحة لـKonjunktiv I في سياقها، لذلك لم نستخدمها هنا كمشتتٍ خاطئ بلا تحديد النمط.",
    },
    {
      id: "e19",
      type: "fill-blank",
      instructionAr:
        "اختر أداة الربط التي تطابق العلاقة العربية المبيّنة قبل كل جملة:",
      errorType: "grammar",
      template:
        "(تضاد) Es ist kalt, ___ die Sonne scheint. (سبب) Ich bleibe zu Hause, ___ es regnet. (اختيار) Gehen wir spazieren ___ bleiben wir zu Hause? (إضافة) Die Sonne scheint ___ der Himmel ist blau.",
      hint:
        "العلاقات المطلوبة بالترتيب: تضاد، سبب، اختيار، إضافة. اختر الرابط وفق المعنى المقصود في كل جملة.",
      blanks: [
        {
          correct: "aber",
          options: ["aber", "denn", "oder", "und"],
          errorType: "grammar",
        },
        {
          correct: "denn",
          options: ["denn", "aber", "oder", "und"],
          errorType: "grammar",
        },
        {
          correct: "oder",
          options: ["oder", "aber", "denn", "und"],
          errorType: "grammar",
        },
        {
          correct: "und",
          options: ["und", "aber", "oder", "denn"],
          errorType: "grammar",
        },
      ],
      explanation:
        "العلاقات المطلوبة بالترتيب هي التضاد (aber)، والسبب (denn)، والاختيار في السؤال البديل (oder)، والإضافة (und). قد تكون أداة أخرى سليمة في سياق بمعنى مختلف؛ يقيس هذا البند اختيار العلاقة المحددة لا حكماً بأن سائر الروابط خاطئة نحوياً.",
    },
    {
      id: "e20",
      type: "error-correction",
      instructionAr: "صحّح ترتيب الجملة بعد أداة الربط:",
      wrongSentence: "Es ist kalt, aber scheint die Sonne.",
      wrongWord: "scheint die Sonne",
      correctWord: "die Sonne scheint",
      options: [
        "die Sonne scheint",
        "scheint die Sonne",
        "die Sonne scheinen",
        "scheint sie die Sonne",
      ],
      errorType: "word-order",
      explanation:
        "في الجملة الخبرية المستقلة المعروضة تبدأ الجملة التالية بالفاعل die Sonne ثم يأتي الفعل scheint في موضعه الثاني. هذا وصف للمثال، لا قاعدة لكل الاستعمالات.",
    },
    {
      id: "e21",
      type: "multiple-choice",
      instructionAr: "اختر الحرف الزمنيّ الصحيح:",
      questionDe: "___ Winter ist es kalt, aber ___ Montag scheint die Sonne.",
      options: ["Im … am", "Am … im", "In … an", "Um … am"],
      correctIndex: 0,
      errorType: "preposition",
      explanation:
        "في هذه الأمثلة نقول im Winter وam Montag؛ أما um فتظهر مع الساعة، مثل um acht Uhr. احفظ التراكيب المحددة دون تعليلها بسُلّم لحجم الوقت.",
    },
    {
      id: "e22",
      type: "error-correction",
      instructionAr: "صحّح حرف الجرّ الزمنيّ:",
      wrongSentence: "Am der Nacht sind es fünf Grad.",
      wrongWord: "Am",
      correctWord: "In",
      options: ["In", "Um", "Im", "An"],
      errorType: "preposition",
      explanation:
        "التعبير الشائع هنا هو in der Nacht. احفظ المثال كما هو؛ لا نعمّم أن كل أجزاء اليوم تأخذ am، ولا نعلّل العبارة بمزج an + der.",
    },
    {
      id: "e23",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن جملة بأداة ربط:",
      tokens: [
        "Ich",
        "nehme",
        "den",
        "Schirm",
        "mit",
        ",",
        "denn",
        "es",
        "regnet",
        ".",
      ],
      correctSentence: "Ich nehme den Schirm mit, denn es regnet.",
      acceptedSentences: ["Den Schirm nehme ich mit, denn es regnet."],
      errorType: "word-order",
      explanation:
        "يأتي mit في نهاية الجملة الأولى، ثم تربط denn جملةً رئيسية تذكر السبب. تطابق التمرين ترتيب الكلمات؛ لا يختبر وحده إتقان الفواصل.",
    },
    {
      id: "e24",
      type: "transformation",
      instructionAr: "حوّل الجملة من وصف حالة قائمة إلى وصف بدء التحوّل:",
      prompt: "Es ist kalt. (المقصود: يبدأ الجوّ بالتحوّل إلى البرودة)",
      errorType: "grammar",
      acceptedAnswers: ["Es wird kalt.", "Es wird kalt"],
      sampleAnswer: "Es wird kalt.",
      caseSensitive: true,
      explanation:
        "في السياق المقصود يصف Es ist kalt حالةً قائمة، ويعرض Es wird kalt تحوّلاً نحو البرودة. الصفة الخبرية بعد sein أو werden في المثال بلا نهاية.",
    },
    {
      id: "e25",
      type: "matching",
      instructionAr: "صِل كلّ بنية بمثالها الصحيح:",
      errorType: "grammar",
      pairs: [
        { left: "es ist + صفة", right: "Es ist neblig." },
        { left: "فعل طقس مع es صوريّ", right: "Es schneit." },
        { left: "اسم + فعل", right: "Der Wind weht." },
        { left: "إحساس شخصيّ", right: "Mir ist kalt." },
        { left: "تحوّل", right: "Es wird kälter." },
      ],
      explanation:
        "مطابقة أمثلة مختارة: صفة مع es، وفعل طقس مع es صوريّ، واسم مع فعل، وتعبير عن إحساس، وتحوّل بالحالة.",
    },
    {
      id: "e26",
      type: "fill-blank",
      instructionAr:
        "أكمل: صف مدة المطر المستمرة حتى الآن، ثم حدّد موعد التوقف المحسوب من لحظة الكلام:",
      errorType: "preposition",
      template:
        "Es regnet ___ drei Stunden, aber laut Vorhersage hört es ___ einer Stunde auf.",
      blanks: [
        {
          correct: "seit",
          options: ["seit", "in", "ab", "für"],
          errorType: "preposition",
        },
        {
          correct: "in",
          options: ["in", "seit", "vor", "ab"],
          errorType: "preposition",
        },
      ],
      explanation:
        "يصف seit drei Stunden مطراً مستمراً إلى لحظة الكلام. وفي الفراغ الثاني نقطة المرجع محددة بأنها الآن، لذا تعني in einer Stunde موعداً بعد ساعة من الآن. قد تستعمل nach einer Stunde عند ربط المدة بحدث أو نقطة مرجعية أخرى؛ لذلك لا نعرضها هنا مشتتاً على أنها خطأ عام أو مرادف آلي لـin.",
    },
  ],
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich bin kalt. (إذا كان المقصود وصف الجو أو التعبير المحايد عن الإحساس)",
        right: "Es ist kalt. / Mir ist kalt.",
        whyAr:
          "Es ist kalt تصف الجو في المثال، وMir ist kalt تعبير ألماني مألوف عن إحساس الشخص. Ich bin kalt جملة ممكنة في سياقات أخرى، فلا تُصنّف خطأً مطلقاً من دون سياق.",
        classification: "contextual-alternative",
      },
      {
        wrong: "Es ist regnen (خلط الصيغ)",
        right: "Es regnet.",
        whyAr:
          "في الجملة الكاملة المعروضة نستخدم صيغة regnet المصرفة، لا المصدر regnen بعد ist.",
        classification: "error",
      },
      {
        wrong: "اعتبار wird تصريفاً صالحاً لكل الضمائر.",
        right: "ich werde، du wirst، er/sie/es wird، wir werden، ihr werdet، sie (الجمع) / Sie (صيغة الاحترام): werden",
        whyAr:
          "werden فعل غير منتظم في المضارع؛ احفظ التصريفات المعروضة، ولا تعمم صيغة واحدة على جميع الضمائر.",
        classification: "error",
      },
    ],
    eselsbruecken: [
      "احفظ أمثلة الطقس كما وردت: Es regnet heute / Heute regnet es؛ وes في فعل الطقس المعروض صوريّ، لا ترجمة حرفية لكلمة «الجو» في كل موضع.",
      "للتغيّر: Es wird kalt. واحفظ تصريف المضارع كما هو: werde، wirst، wird، werden، werdet، werden.",
    ],
    culturalNote: {
      title: "سؤال وجواب في سياق الطقس",
      content:
        "Wie ist das Wetter heute? سؤال ممكن عن الطقس، وتُظهر أمثلة الدرس طرائق للإجابة عنه. لا تثبت هذه الأمثلة تفضيلاً ثقافياً عاماً أو أن الحديث عن الطقس مقدمة شائعة لدى مجموعة كاملة؛ يتغير اختيار العبارة بحسب الشخص والمكان والسياق.",
    },
  },
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr:
        "في جملة طقس كاملة، اختر الصيغة المناسبة لفعل الطقس المعروض:",
      questionDe: "Im Wetterbericht: ___ regnet heute.",
      options: ["Es", "Ich", "Er", "Das"],
      correctIndex: 0,
      explanation:
        "في مثال الطقس الكامل هنا يأتي es الصوريّ مع الفعل regnen المصرف: Es regnet heute.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف werden:",
      questionDe: "Wir ___ gute Freunde.",
      options: ["werden", "werdet", "wird", "wirst"],
      correctIndex: 0,
      explanation: "مع wir: werden.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["wird", "kalt", "Im", "Winter", "es", "."],
      correctSentence: "Im Winter wird es kalt.",
      acceptedSentences: [
        "Es wird im Winter kalt.",
        "Es wird kalt im Winter.",
      ],
      explanation:
        "Im Winter wird es kalt، وEs wird im Winter kalt، وEs wird kalt im Winter ترتيبات ممكنة للجملة؛ يبقى الفعل المصرف في الموضع الثاني.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "transformation",
      instructionAr:
        "حوّل العبارة إلى جملة طقس تعبر عن التحوّل المحدد؛ لا تصحّح نحوياً جملة المتكلم الأصلية:",
      prompt: "Ich werde kalt. (المقصود في النشرة: الطقس يتحوّل إلى البرودة)",
      acceptedAnswers: ["Es wird kalt."],
      sampleAnswer: "Es wird kalt.",
      caseSensitive: true,
      explanation:
        "Ich werde kalt يمكن أن تكون جملة سليمة عن شخص في سياق مناسب؛ والمطلوب هنا تحويل المعنى إلى جملة عن الطقس: Es wird kalt.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف werden الصحيح:",
      template: "Ich ___ müde. Er ___ stark. Ihr ___ schnell müde.",
      blanks: [
        { correct: "werde", options: ["werde", "wird", "werdet"] },
        { correct: "wird", options: ["werde", "wird", "werdet"] },
        { correct: "werdet", options: ["werde", "wird", "werdet"] },
      ],
      explanation: "werde (ich)، wird (er)، werdet (ihr).",
      errorType: "conjugation",
    },
  ],
  flashcards: [
    {
      id: "fc1",
      de: "das Wetter",
      ar: "الطقس",
      example: "Das Wetter ist schön.",
      exampleAr: "الطقس جميل.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "die Sonne",
      ar: "الشمس",
      example: "Die Sonne scheint.",
      exampleAr: "تشرق الشمس.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "der Regen",
      ar: "المطر",
      example: "Der Regen beginnt.",
      exampleAr: "يبدأ المطر.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "der Schnee",
      ar: "الثلج",
      example: "Im Winter schneit es.",
      exampleAr: "في الشتاء تثلج.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "kalt / warm / heiß",
      ar: "بارد / دافئ / حار",
      example: "Im Sommer ist es heiß.",
      exampleAr: "في الصيف الجو حار.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "werden",
      ar: "يصبح",
      example: "Es wird kalt.",
      exampleAr: "يصبح الجو بارداً.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "der Wind",
      ar: "الريح",
      example: "Der Wind weht.",
      exampleAr: "تهب الرياح.",
      level: "A1",
    },
    {
      id: "fc8",
      de: "die Jahreszeit",
      ar: "الفصل (من السنة)",
      example: "Der Sommer ist meine Lieblingsjahreszeit.",
      exampleAr: "الصيف فصلي المفضل.",
      level: "A1",
    },
    {
      id: "fc9",
      de: "im Sommer / im Winter",
      ar: "في الصيف / في الشتاء",
      example: "Im Winter schneit es oft.",
      exampleAr: "في الشتاء تثلج كثيراً.",
      level: "A1",
    },
    {
      id: "fc10",
      de: "am Montag / um acht Uhr",
      ar: "يوم الاثنين / في الثامنة",
      example: "Am Montag um acht Uhr regnet es.",
      exampleAr: "يوم الاثنين تمطر في الثامنة.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "aber",
      ar: "لكن (أداة ربط)",
      example: "Es ist kalt, aber die Sonne scheint.",
      exampleAr: "الجوّ بارد لكنّ الشمس مشرقة.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "denn",
      ar: "لأنّ (سبب؛ جملة رئيسية في المثال)",
      example: "Ich bleibe zu Hause, denn es regnet.",
      exampleAr: "أبقى في البيت لأنّها تمطر.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "Mir ist kalt.",
      ar: "أشعر بالبرد",
      example: "Mir ist kalt. Hast du eine Jacke?",
      exampleAr: "أشعر بالبرد. أعندك سترة؟",
      level: "A1",
    },
    {
      id: "fc14",
      de: "neblig / bewölkt",
      ar: "ضبابيّ / غائم",
      example: "Am Morgen ist es oft neblig.",
      exampleAr: "في الصباح يكون الجوّ ضبابياً غالباً.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "der Regenschirm",
      ar: "المظلّة",
      example: "Nimm einen Regenschirm mit!",
      exampleAr: "خذ مظلّة معك!",
      level: "A1",
    },
    {
      id: "fc16",
      de: "minus fünf Grad",
      ar: "خمس درجات تحت الصفر",
      example: "In der Nacht sind es minus fünf Grad.",
      exampleAr: "في الليل الحرارة خمس تحت الصفر.",
      level: "A1",
    },
    {
      id: "fc17",
      de: "seit (+ Dativ)",
      ar: "منذ",
      example: "Es regnet seit drei Stunden.",
      exampleAr: "تمطر منذ ثلاث ساعات.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "in einer Stunde",
      ar: "بعد ساعة في هذا السياق",
      example: "In einer Stunde hört der Regen auf.",
      exampleAr: "في هذا السياق يتوقف المطر بعد ساعة من نقطة الحديث.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "der Himmel",
      ar: "السماء",
      example: "Der Himmel ist grau.",
      exampleAr: "السماء رمادية.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "scheinen",
      ar: "تشرق (الشمس)",
      example: "Die Sonne scheint heute.",
      exampleAr: "الشمس مشرقة اليوم.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "der Tag",
      ar: "يوم؛ والجمع Tage",
      example: "Die Tage sind sehr lang.",
      exampleAr: "الأيّام طويلة جداً.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "das Jahr",
      ar: "السنة",
      example: "Seit einem Jahr wohne ich hier.",
      exampleAr: "أسكن هنا منذ سنة.",
      level: "A1",
    },
    {
      id: "fc23",
      de: "anders",
      ar: "مختلف، على نحوٍ آخر",
      example: "Das Wetter ist hier anders.",
      exampleAr: "الطقس هنا مختلف.",
      level: "A1",
    },
    {
      id: "fc24",
      de: "wirklich",
      ar: "حقاً، فعلاً",
      example: "Es ist wirklich kalt.",
      exampleAr: "الجوّ باردٌ حقاً.",
      level: "A1",
    },
    {
      id: "fc25",
      de: "bunt",
      ar: "ملوّن، زاهي الألوان",
      example: "Die Blätter werden bunt.",
      exampleAr: "تصير الأوراق ملوّنة.",
      level: "A1",
    },
  ],

  /* ═══ أنشطة الوساطة والتفاعل: خيارات تدريبية لا أدلة على الإتقان أو الاعتماد ═══ */
  mediation: [
    {
      id: "med-a1-12-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص نشرة طقس بالعربية",
      sourceDe:
        "Morgen regnet es. Es sind 15 Grad. Am Wochenende wird es sonnig und warm.",
      taskAr:
        "انقل النشرة بالعربية: طقس الغد، درجة الحرارة، وطقس نهاية الأسبوع. هذه المهمة للتدريب الذاتي وليست دليلاً مسجلاً على إتقان الوساطة.",
      modelAnswerAr:
        "«غداً ستمطر. الحرارة 15 درجة. وفي نهاية الأسبوع سيصير الجو مشمساً ودافئاً.»",
      keyPointsAr: [
        "نقلت المطر غداً",
        "ذكرت درجة الحرارة (15)",
        "نقلت طقس نهاية الأسبوع",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a1-12-1",
      scenarioAr:
        "صديق يسأل عن طقس مدينتك؛ المعطيات أن الجو مشمس ودافئ والحرارة 25 درجة. اختر أنسب رد نصي.",
      scenarioDe:
        "Ein Freund fragt nach dem Wetter in deiner Stadt; es ist sonnig und warm bei 25 Grad. Wähle eine passende Textantwort.",
      strategyAr:
        "التدريب هنا على اختيار أفضل رد نصي؛ لا يقيس إنتاج كلام شفهي.",
      rounds: [
        {
          speakerDe: "Wie ist das Wetter bei dir?",
          speakerAr: "كيف الطقس عندك؟",
          options: [
            {
              de: "Heute ist es sonnig und warm.",
              ar: "اليوم مشمس ودافئ.",
              best: true,
              replyDe: "Schön! Hier regnet es.",
              replyAr: "جميل! هنا تمطر.",
            },
            {
              de: "Heute ist es kalt und regnerisch.",
              ar: "اليوم الجو بارد وماطر.",
              best: false,
              replyDe: "Das passt nicht zu den Angaben: Heute ist es sonnig und warm.",
              replyAr: "هذا لا يطابق المعطيات: اليوم الجو مشمس ودافئ.",
            },
          ],
        },
        {
          speakerDe: "Wie ist die Temperatur?",
          speakerAr: "كم درجة الحرارة؟",
          options: [
            {
              de: "Es sind 25 Grad. Sehr angenehm.",
              ar: "25 درجة. مريح جداً.",
              best: true,
              replyDe: "Das ist perfekt für einen Spaziergang!",
              replyAr: "هذا مثالي للمشي!",
            },
            {
              de: "Es sind minus 30 Grad.",
              ar: "30 تحت الصفر.",
              best: false,
              replyDe: "Bei 25 Grad? Das glaube ich nicht.",
              replyAr: "عند 25 درجة؟ لا أصدق ذلك.",
            },
          ],
        },
      ],
    },
  ],
};
