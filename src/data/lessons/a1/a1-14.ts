import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-14: مدخل تطبيقي إلى Perfekt وwollen/sollen.
 * تُراجع صيغة المساعد وPartizip II وأمثلة شائعة، من دون ادعاء استكمال A1.
 */
export const lessonA114: Lesson = {
  id: "a1-14",
  unitId: "a1-07",
  level: "A1",
  order: 2,
  titleDe: "Das Perfekt: Was hast du gemacht?",
  titleAr: "الماضي المحكيّ (Perfekt) — ماذا فعلتَ؟",
  summary:
    "تدريب على تكوين Perfekt في الجمل الرئيسية (haben/sein + Partizip II)، وصيغ أفعال شائعة ضعيفة وقوية ومنفصلة وغير منفصلة وأفعال -ieren، واختيار المساعد بحسب الفعل والمعنى والسياق (وجود مفعول Akkusativ قرينة مفيدة لا اختبار وحيد)، ثم استعمال wollen وsollen في مواقف مألوفة.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann einfache Vorgaben in Perfekt-Sätze umformen.",
      ar: "أن أحوّل مطالب قصيرة إلى جمل Perfekt في التمرين.",
      evidence: {
        exerciseIds: ["wr-a1-14-1", "wr-a1-14-2", "e14", "e22"],
        taskIds: ["writing:a1-14:wr-a1-14-1", "writing:a1-14:wr-a1-14-2", "practice:a1-14:e14", "practice:a1-14:e22"],
        labelAr: "إتمام تحويلي الكتابة المحددين، والإجابة الصحيحة عن تحويليْن في بنك التدريب؛ هذه مهام تحويل مضبوطة لا قياسٌ لسرد حر.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann häufige Partizip-II-Formen in vorgegebenen Sätzen ergänzen.",
      ar: "أن أُكمل صيغ Partizip II شائعة في جمل معطاة.",
      evidence: {
        exerciseIds: ["e1", "e2", "e7", "e8", "e9"],
        taskIds: ["practice:a1-14:e1", "flow-practice:a1-14:e1", "practice:a1-14:e2", "flow-practice:a1-14:e2", "practice:a1-14:e7", "practice:a1-14:e8", "practice:a1-14:e9"],
        labelAr: "إكمال خمس صيغ في جمل: فعل ضعيف، قوي، منفصل، غير منفصل، وفعل منتهٍ بـ-ieren.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in häufigen Beispielen das Perfekthilfsverb passend zum Verbgebrauch wählen.",
      ar: "أن أختار الفعل المساعد المناسب في أمثلة شائعة مع مراعاة معنى الفعل وسياقه.",
      evidence: {
        exerciseIds: ["e3", "e4", "e12", "e21", "e24", "mt-a1-14-1"],
        taskIds: ["practice:a1-14:e3", "flow-practice:a1-14:e3", "practice:a1-14:e4", "flow-practice:a1-14:e4", "practice:a1-14:e12", "practice:a1-14:e21", "practice:a1-14:e24", "mini-test:a1-14:mt-a1-14-1", "flow-mini-test:a1-14:mt-a1-14-1"],
        labelAr: "اختيار/تصحيح haben وsein في جمل انتقالية ونشاطية وأمثلة متقابلة، بما فيها فعل يتغير مساعده بحسب المعنى.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann wollen und sollen in einfachen Sätzen passend konjugieren, den Infinitiv ans Ende stellen und eine häufige höfliche Bitte erkennen.",
      ar: "أن أستعمل wollen وsollen في مطالب قصيرة، وأضع المصدر في آخر الجملة، وأتعرف على صيغة طلب مهذبة شائعة.",
      evidence: {
        exerciseIds: ["e15", "e16", "e17", "e18", "e19", "mt-a1-14-5"],
        taskIds: ["practice:a1-14:e15", "practice:a1-14:e16", "practice:a1-14:e17", "practice:a1-14:e18", "practice:a1-14:e19", "mini-test:a1-14:mt-a1-14-5", "flow-mini-test:a1-14:mt-a1-14-5"],
        labelAr: "إتمام تصريفات وجمل سياقية، واختيار عبارة طلب شائعة، وترتيب جملة ناقص مع مصدر.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann vorgegebene Perfektformen in einer kurzen E-Mail-Vorlage ergänzen.",
      ar: "أن أُكمل المساعدات وصيغ Partizip II المعطاة داخل قالب بريد قصير.",
      evidence: {
        exerciseIds: ["wr-a1-14-3"],
        taskIds: ["writing:a1-14:wr-a1-14-3"],
        labelAr: "إتمام جميع الفراغات في قالب البريد؛ لا يثبت هذا وحده القدرة على إنشاء بريد حر.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann gezielte Informationen aus einer kurzen E-Mail entnehmen.",
      ar: "أن أستخرج تفاصيل محددة من بريد إلكتروني قصير.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq6"],
        taskIds: ["reading:read-a1-14:rq1", "reading:read-a1-14:rq2", "reading:read-a1-14:rq3", "reading:read-a1-14:rq6"],
        labelAr: "الإجابة الصحيحة عن أسئلة وسيلة السفر والأنشطة وسبب الذهاب إلى المتحف وحالة أمين يوم الأحد.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann zentrale Angaben aus einer kurzen Sprachnachricht entnehmen.",
      ar: "أن أستخرج معلومات أساسية من رسالة صوتية قصيرة.",
      evidence: {
        exerciseIds: ["lsq-a1-14-1", "lsq-a1-14-3"],
        taskIds: ["listening:ls-a1-14-1:lsq-a1-14-1", "listening:ls-a1-14-1:lsq-a1-14-3"],
        labelAr: "الإجابة قبل كشف نص الرسالة عن نشاط يوم السبت ووسيلة الوصول إلى البحيرة يوم الأحد.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "سؤالٌ مفيد للتدرّب على الحديث عن عطلة الأسبوع: «Was hast du am Wochenende gemacht?» — ماذا فعلتَ في نهاية الأسبوع؟ يتيح لك هذا الدرس تكوين إجابات بسيطة بالماضي المركّب Perfekt، من دون افتراض أن هذا السؤال يظهر في كل لقاء أو امتحان.",
    motivatingQuestionDe: "Was hast du am Wochenende gemacht?",
    contextAr:
      "Perfekt صيغة ماضٍ مركّبة شائعة في كثير من المحادثات اليومية، لكنها ليست الصيغة الوحيدة؛ فقد يظهر Präteritum أيضاً في الحديث والكتابة، ويتغيّر الاستعمال بحسب الفعل والسياق والمنطقة. نتمرّن هنا على بناء Perfekt: فعل مساعد مصرّف وPartizip II. في الجملة الرئيسية الخبرية يأتي المساعد في المركز الثاني ويقع Partizip II عادةً في نهاية المجال الفعلي؛ أمّا في الجملة الفرعية فقد يأتي المساعد بعد Partizip II في النهاية: weil ich Deutsch gelernt habe.",
    contextDe: "Ich bin nach Berlin gefahren und habe viel gesehen.",
    connectionToPreviousAr: "يعيد الدرس استخدام مفردات وصيغ سبق أن ظهرت في أمثلة A1، مثل الأفعال المنفصلة وبعض الأفعال الناقصة. راجعها عند الحاجة؛ فمعرفة المفردة أو المضارع وحدهما لا تعني إتقان Perfekt. هنا نتدرّب على المساعد وPartizip II في سياقات محددة.",
    activateVocabulary: [
      { de: "gestern", ar: "أمس" },
      { de: "letztes Wochenende", ar: "عطلة الأسبوع الماضية" },
      { de: "gemacht", ar: "فعَل (Partizip II من machen)" },
      { de: "gefahren", ar: "سافر (Partizip II من fahren)" },
      { de: "gewesen", ar: "كان (Partizip II من sein)" },
    ],
  },

  /* مراجعة تراكمية (Interleaving): من دروس a1-06 وa1-11 وa1-12 */
  review: [
    {
      id: "r1",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-06 — الهوايات): أكمل الفعل الناقص في صيغة الحاضر وانتبه إلى موضع المصدر",
      template: "Ich ___ gut Deutsch sprechen. · ___ du schwimmen?",
      blanks: [
        { correct: "kann", options: ["kann", "kannst", "können", "konnte"] },
        { correct: "Kannst", options: ["Kannst", "Kann", "Können", "Kannt"] },
      ],
      hint: "الأفعال الناقصة بلا نهاية في ich، والمصدر في آخر الجملة.",
      explanation: "ich kann (بلا نهاية) · du kannst — من درس a1-06.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-11 — التنقّل): أيّ ضمير نصبٍ صحيح؟",
      questionDe: "Der Bus kommt. Siehst du ___?",
      questionAr: "الحافلة قادمة. هل تراها؟",
      options: ["ihn", "er", "ihm", "es"],
      correctIndex: 0,
      explanation: "der Bus في حالة النصب يصير ihn — من درس a1-11.",
      errorType: "pronoun",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-12 — أدوات الربط): صحّح الخطأ في الجملة",
      wrongSentence: "Ich bleibe zu Hause, denn regnet es stark.",
      wrongWord: "denn regnet es",
      correctWord: "denn es regnet",
      options: ["denn es regnet", "denn regnet es", "denn es regnen", "denn regnete"],
      explanation: "denn تجلس في الموضع صفر ولا تُزيح شيئاً: الترتيب بعدها عاديّ (فاعل ثمّ فعل) — من درس a1-12.",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الماضي المحكيّ (Perfekt): فعلٌ مساعد + Partizip II",
      titleDe: "Das Perfekt: haben/sein + Partizip II",
      explanationAr:
        "نستخدم Perfekt للحديث عن أحداث أو حالات في الماضي. وهو شائع في المحادثات اليومية، لكن لا يصح اختزاله في «ماضٍ يُقال فقط»؛ فـPräteritum يظهر أيضاً في الكلام والكتابة بحسب الفعل والسياق والمنطقة.\n\n**أولاً — التركيب:** يتكوّن Perfekt من **فعل مساعد مصرّف** (haben أو sein) و**Partizip II** للفعل الأساسي: **Ich habe Deutsch gelernt.** يحمل المساعد تصريف الشخص والزمن، ويقدّم Partizip II معنى الفعل. وفي تركيب Perfekt لا يتصرّف Partizip II مثل فعل مصرّف؛ أمّا استعماله صفةً قبل اسم، مثل *ein gelerntes Wort*، فقد يأخذ نهاية الصفة.\n\n**ثانياً — موضع الفعلين:** في الجملة الرئيسية الخبرية يأتي الفعل المساعد في المركز الثاني (V2؛ أي بعد المكوّن الأول، لا بالضرورة بعد الكلمة الثانية)، ويأتي Partizip II عادةً في نهاية الجملة: **Gestern | habe | ich in der Schule Deutsch | gelernt.** وفي سؤال نعم/لا يتقدّم المساعد: **Hast du gestern Deutsch gelernt?** أمّا في الجملة الفرعية فيأتي الفعل المساعد المصرف في النهاية بعد Partizip II: **…, weil ich gestern Deutsch gelernt habe.**\n\n**ثالثاً — أنماط تكوين شائعة:** الأفعال الضعيفة تكوّن Partizip II غالباً بإضافة **ge-** إلى الجذع والنهاية **-t**: *lernen → gelernt; machen → gemacht*. وإذا انتهى الجذع بـ*d* أو *t*، أو احتاج نطقه إلى مقطع إضافي، تظهر غالباً **-et**: *arbeiten → gearbeitet; warten → gewartet*. للأفعال القوية صيغ معجمية ينبغي تعلّمها؛ وكثير منها ينتهي بـ**-en** وقد يتغيّر الجذع: *trinken → getrunken; schreiben → geschrieben*. لا تنطبق هذه الأنماط على كل فعل بلا استثناء؛ تعلّم صيغة Partizip II مع الفعل نفسه.",
      whyAr:
        "الفائدة العملية من ملاحظة قطعتَي Perfekt هي معرفة ما الذي يحمل التصريف وما الذي يحمل معنى الفعل. المساعد هو الجزء المصرف؛ لذلك لا تُسقطه من الجملة. في الجملة الرئيسية الخبرية يلتزم المساعد موقع V2، ويأتي Partizip II في نهاية المجال الفعلي. قارن: **Gestern habe ich Deutsch gelernt**، و**…, weil ich Deutsch gelernt habe**؛ فموقع المساعد يتأثر بنوع الجملة. لا يلزم تفسير هذه البنية بحكاية تاريخية مبسطة كي تتعلّم استعمالها.",
      table: {
        title: "أنماط شائعة لتكوين Partizip II",
        columns: ["العائلة", "القاعدة", "المصدر ⟵ Partizip II", "الجملة"],
        rows: [
          { label: "ضعيف", cells: ["ge + جذر + t", "lernen ⟵ gelernt", "Ich habe Deutsch gelernt."] },
          { label: "ضعيف", cells: ["ge + جذر + t", "machen ⟵ gemacht", "Was hast du gemacht?"] },
          { label: "ضعيف مع -et", cells: ["ge + جذر + et", "arbeiten ⟵ gearbeitet", "Er hat viel gearbeitet."] },
          { label: "قويّ", cells: ["ge + جذر متغيّر + en", "trinken ⟵ getrunken", "Wir haben Kaffee getrunken."] },
          { label: "قويّ", cells: ["ge + جذر متغيّر + en", "schreiben ⟵ geschrieben", "Ich habe eine E-Mail geschrieben."] },
          { label: "قويّ بلا تغيّر", cells: ["ge + جذر + en", "lesen ⟵ gelesen", "Sie hat das Buch gelesen."] },
        ],
      },
      examples: [
        { de: "Ich habe gestern Deutsch gelernt.", ar: "تعلّمتُ الألمانية أمس. (habe في الثاني، gelernt في الآخر)" },
        { de: "Was hast du am Wochenende gemacht?", ar: "ماذا فعلتَ في عطلة الأسبوع؟ (سؤال تدريبي ممكن، لا ادعاء بتكراره في كل اختبار)" },
        { de: "Wir haben in einem Restaurant gegessen.", ar: "أكلنا في مطعم. (essen ⟵ gegessen — قويّ)" },
        { de: "Meine Mutter hat einen Kuchen gebacken.", ar: "خبزت أمّي كعكة." },
        { de: "Habt ihr die Hausaufgaben gemacht?", ar: "هل عملتم الواجبات؟ (في السؤال يتقدّم المساعد ويبقى الجزء الأخير مكانه)" },
        { de: "Ich habe zwei Stunden auf den Bus gewartet.", ar: "انتظرتُ الحافلة ساعتين. (warten ⟵ gewartet مع -et)" },
        { de: "Er hat mir ein Buch geschenkt.", ar: "أهداني كتاباً." },
        { de: "Ich habe nichts gesagt.", ar: "لم أقل شيئاً. (sagen ⟵ gesagt)" },
      ],
      comparisonWithArabic:
        "في المثال العربي «تعلّمتُ الألمانية أمس» تظهر دلالة الماضي في صيغة فعل واحدة، بينما تتكوّن الجملة الألمانية **Ich habe Deutsch gelernt** من مساعد مصرّف وPartizip II. هذه مقارنة بين مثالين وليست قاعدةً تصف كل طرائق التعبير عن الماضي في العربية. عملياً، ضع علامة على المساعد وعلى Partizip II كلٌّ على حدة، ثم راجع ترتيب الجملة الألمانية؛ ولا تفترض أن كل مفعول أو ظرف يأتي في موضع ثابت قبل الجزء الأخير.",
      eselsbruecke:
        "في الجملة الرئيسية الخبرية: المساعد المصرف في V2 وPartizip II في نهاية المجال الفعلي. في السؤال يتقدّم المساعد، وفي جملة *weil* يأتي المساعد المصرف بعد Partizip II. وتعلّم المساعد مع الفعل، لا من اختبار واحد وحده.",
      commonMistakes: [
        {
          wrong: "Ich habe gelernt Deutsch.",
          right: "Ich habe Deutsch gelernt.",
          whyAr: "في الجملة الرئيسية الخبرية المحايدة يأتي المساعد في V2 وPartizip II عادةً في نهاية المجال الفعلي؛ لذلك يسبق المفعول هنا Partizip II. راجع الترتيب في هذا السياق، لا قاعدةً واحدة لكل أنواع الجمل.",
        },
        {
          wrong: "Ich bin Deutsch gelernt.",
          right: "Ich habe Deutsch gelernt.",
          whyAr: "في هذا المثال يأخذ الفعل المتعدّي lernen، مع المفعول Deutsch، المساعد haben. وجود مفعول مباشر قرينة نافعة، لكنه ليس خوارزمية لاختيار المساعد لكل فعل.",
        },
        {
          wrong: "Ich habe Deutsch lernte.",
          right: "Ich habe Deutsch gelernt.",
          whyAr: "إذا طُلب Perfekt، فالصيغة هي المساعد المصرف + Partizip II، لا Präteritum مع المساعد. وPräteritum زمن صحيح في سياقات أخرى، وليس محصوراً بالكتابة.",
        },
        {
          wrong: "Ich habe gearbeit.",
          right: "Ich habe gearbeitet.",
          whyAr: "في هذا الفعل الضعيف ذي الجذع المنتهي بـt تظهر النهاية -et: gearbeitet. تعلّم الصيغة الإملائية المنطوقة مع الفعل.",
        },
        {
          wrong: "Ich habe getrinkt.",
          right: "Ich habe getrunken.",
          whyAr: "Partizip II من trinken هو getrunken؛ إنه فعل قوي بصيغة ينبغي تعلّمها، ولا تُنشأ هنا بقياس نهاية الأفعال الضعيفة -t.",
        },
      ],
      relatedRuleComparison: {
        title: "الحاضنة الفعلية — ثالث ظهورٍ لها",
        content:
          "قارن ثلاثة أنماط في الجملة الرئيسية الخبرية: **Ich stehe um sieben Uhr auf** (فعل منفصل في المضارع)، **Ich kann Deutsch sprechen** (فعل ناقص + مصدر)، و**Ich habe Deutsch gelernt** (Perfekt). في هذه الأمثلة يأتي الفعل المصرف في V2 ويظهر جزء غير مصرف في نهاية المجال الفعلي؛ لكن لكل تركيب قواعده، ولا يعني التشابه أن جميع الجمل الألمانية تُغلق بالطريقة نفسها. وفي الجملة الفرعية قد يتغير ترتيب الأفعال، مثل **…, weil ich Deutsch gelernt habe**. هذا درس في Perfekt، لا وعداً بتغطية المبني للمجهول أو المستقبل.",
      },
    },
    {
      id: "t2",
      titleAr: "haben أم sein؟ — قرائن سياقية لا اختبار واحد",
      titleDe: "haben oder sein? Die Wahl des Hilfsverbs",
      explanationAr:
        "اختيار الفعل المساعد في Perfekt يتأثر ببنية الفعل ومعناه واستعماله؛ لذلك لا توجد هنا «ثلاث حالات لا أكثر». هذه **قرائن تعليمية** لأمثلة شائعة:\n\n**haben** يأتي مع الأفعال المتعدية التي تأخذ مفعولاً مباشراً، مثل **ein Buch lesen** و**einen Brief schreiben**، ومع أفعال كثيرة تصف نشاطاً أو حالة بلا انتقال مكاني، مثل **schlafen** و**warten**: *Ich habe acht Stunden geschlafen.*\n\n**sein** يأتي غالباً مع أفعال لازمة تعبّر في معناها المقصود عن انتقال مكاني أو تغيّر حالة: **gehen, kommen, reisen, einschlafen, aufstehen**. مثال: *Ich bin nach Berlin gefahren.*\n\nوتوجد أفعال شائعة تُحفظ مع **sein** مثل **sein, bleiben, passieren, gelingen**؛ وهذه ليست قائمة كاملة بكل الأفعال التي تأخذ sein. تعلّم المساعد مع صيغة الفعل، ولا تستنتجه من حركة ظاهرة وحدها.\n\n**المفعول Akkusativ قرينة قوية لا اختبار آلي وحيد.** وجود مفعول مباشر يرجّح haben في الأمثلة المتعدية، لكن عبارات المدة مثل **acht Stunden** في *acht Stunden schlafen* ليست مفعولاً مباشراً، وبعض أفعال الحركة يتغيّر مساعدها بتغيّر المعنى أو التركيب.\n\n**الفعل قد يبدّل المساعد بحسب المعنى:** *Ich bin nach Berlin gefahren* (انتقلتُ إلى برلين) مقابل *Ich habe das Auto gefahren* (قدتُ السيارة). وقد تقبل بعض الأفعال مثل *laufen* أو *schwimmen* أكثر من صيغة في استعمالات مختلفة؛ لذا نتدرّب هنا على أمثلة محددة ولا نعمّم مفتاحاً واحداً على كل فعل.",
      whyAr:
        "تشرح مراجع النحو اختيار haben وsein بمعايير تركيبية ودلالية معاً، لا باختبار المفعول وحده. للمبتدئ، احفظ الفعل في بطاقة واحدة: **المصدر + Partizip II + haben/sein**، ثم انتبه إلى المعنى في الجملة. وجود مفعول مباشر يساعد كثيراً على اختيار haben في الجمل المتعدية، بينما الانتقال أو تغيّر الحالة يرجّح sein في أفعال لازمة شائعة. لكن عبارة Akkusativ قد تكون ظرف مدة لا مفعولاً، وقد يتغير المساعد مع تغيّر معنى فعل مثل fahren. لذلك لا تساوِ علامة Akkusativ وحدها بقرارٍ آليّ، ولا تحوّل القاعدة المختصرة إلى حكم على كل الأفعال.",
      table: {
        title: "sein أم haben؟ — قرائن وأمثلة غير حصرية",
        columns: ["الحالة", "أمثلة الأفعال", "المساعد", "الجملة"],
        rows: [
          { label: "انتقال في المعنى المقصود", cells: ["gehen, kommen, reisen; fahren بمعنى السفر", "sein", "Ich bin nach Berlin gefahren."] },
          { label: "تغيّر حال", cells: ["aufstehen, einschlafen, werden, wachsen", "sein", "Ich bin früh aufgestanden."] },
          { label: "أفعال شائعة تُحفظ مع sein", cells: ["sein, bleiben, passieren, gelingen", "sein", "Wir sind zu Hause geblieben."] },
          { label: "فعلٌ له مفعول", cells: ["lesen, essen, kaufen, schreiben", "haben", "Ich habe ein Buch gelesen."] },
          { label: "نشاطٌ بلا انتقال", cells: ["schlafen, arbeiten, warten, lachen", "haben", "Er hat gut geschlafen."] },
          { label: "الفعل ذو الوجهين", cells: ["fahren (سافر / قاد)", "sein / haben", "Ich bin gefahren. · Ich habe das Auto gefahren."] },
        ],
      },
      examples: [
        { de: "Ich bin gestern nach München gefahren.", ar: "سافرتُ أمس إلى ميونخ. (fahren بمعنى السفر إلى وجهة ⟵ sein)" },
        { de: "Ich habe ein Buch gelesen.", ar: "قرأتُ كتاباً. (lesen مع مفعول مباشر في هذا المثال ⟵ haben)" },
        { de: "Wir sind am Samstag zu Hause geblieben.", ar: "بقينا في البيت يوم السبت. (bleiben محفوظة ⟵ sein)" },
        { de: "Er hat acht Stunden geschlafen.", ar: "نام ثماني ساعات. (عبارة مدة، لا مفعول مباشر؛ schlafen هنا مع haben)" },
        { de: "Bist du schon einmal in Deutschland gewesen?", ar: "هل سبق أن كنتَ في ألمانيا؟ (sein ⟵ gewesen)" },
        { de: "Das Kind ist sehr schnell gewachsen.", ar: "كبر الطفل بسرعة. (تغيّر حال ⟵ sein)" },
        { de: "Was ist denn passiert?", ar: "ماذا حدث؟ (passieren محفوظة ⟵ sein)" },
        { de: "Ich bin um sechs Uhr aufgestanden und habe gefrühstückt.", ar: "نهضتُ في السادسة وتناولتُ الفطور. (المساعدان يختلفان في الجملة الواحدة)" },
      ],
      comparisonWithArabic:
        "لا يقابل haben وsein المساعدان الألمانيان تقسيماً صرفياً واحداً في العربية. قد تساعد معرفة المتعدّي واللازم في تذكّر بعض الأمثلة، لكنها ليست ترجمةً كاملة لاختيار المساعد الألماني؛ فالمعنى المعجمي للفعل وتركيبه واستعماله عوامل مهمة أيضاً. احفظ المثال الألماني مع مساعده، مثل *ein Buch lesen → hat gelesen* و*nach Berlin fahren → ist gefahren*، ولا تجعل كل كلمة في حالة Akkusativ دليلاً على أن لها وظيفة مفعول مباشر.",
      eselsbruecke:
        "ابدأ بمعنى الفعل واستعماله: المفعول المباشر قرينة قوية على haben؛ الانتقال المكاني أو تغيّر الحالة يرجّح sein؛ وكثير من الأنشطة يأخذ haben. ثم راجع المساعد المعجمي، خصوصاً حين يتغير معنى الفعل أو تكون العبارة ظرف مدة.",
      commonMistakes: [
        {
          wrong: "Ich habe nach Berlin gefahren.",
          right: "Ich bin nach Berlin gefahren.",
          whyAr:
            "في هذا الاستعمال يدلّ fahren على رحلة إلى وجهة فيأخذ sein. أمّا قيادة مركبة بوصفها مفعولاً فتُبنى عادةً مع haben: Ich habe das Auto gefahren.",
        },
        {
          wrong: "Ich bin ein Buch gelesen.",
          right: "Ich habe ein Buch gelesen.",
          whyAr:
            "في هذا المثال يأخذ lesen مع المفعول المباشر ein Buch المساعد haben. هذه قرينة قوية للأفعال المتعدية، لا قاعدة بلا استثناء لكل اختيار بين المساعدين.",
        },
        {
          wrong: "Ich nach Berlin gefahren.",
          right: "Ich bin nach Berlin gefahren.",
          whyAr:
            "عند تكوين Perfekt يلزم فعل مساعد مصرّف مع Partizip II. لا ينطبق هذا على كل جملة ماضية أو على كل تركيب ألماني؛ فالمضارع وPräteritum لهما تصريفهما الخاص.",
        },
        {
          wrong: "Wir haben zu Hause geblieben.",
          right: "Wir sind zu Hause geblieben.",
          whyAr:
            "يُحفظ bleiben مع sein: Wir sind geblieben. الحركة ليست شرطاً وحيداً لاستعمال sein، وهذه إحدى الصيغ المعجمية الشائعة التي تتعلّم مع مساعدها.",
        },
        {
          wrong: "Ich bin gut geschlafen.",
          right: "Ich habe gut geschlafen.",
          whyAr:
            "schlafen يأخذ haben في هذا المثال، أمّا einschlafen فيأخذ sein في استعماله الشائع الدال على بدء النوم/تغيّر الحالة. تعلّم الصيغة مع الفعل والمعنى.",
        },
      ],
      relatedRuleComparison: {
        title: "sein المساعد مقابل sein الأصليّ",
        content:
          "في **Ich bin Student** يعمل *sein* فعلاً رابطاً في جملة اسمية. وفي **Ich bin gefahren** هو مساعد مصرّف يبني Perfekt مع Partizip II؛ لا يُترجم عادةً بوصفه كلمة مستقلة، لكن له وظيفة نحوية ويحمل التصريف. وبالمثل، **Ich habe ein Auto** استعمالٌ معجمي لـhaben، بينما **Ich habe gelesen** فيه haben مساعد. لا تُوصف المساعدات بأنها «بلا معنى مطلقاً»؛ ادرس وظيفتها في كل تركيب.",
      },
    },
    {
      id: "t3",
      titleAr: "Partizip II في الأفعال المنفصلة وغير المنفصلة وفي -ieren",
      titleDe: "Partizip II bei trennbaren, untrennbaren und -ieren-Verben",
      explanationAr:
        "في Partizip II تظهر أنماط مختلفة بحسب نوع الفعل وبنيته؛ لا تستنتج موضع ge- من النبر وحده.\n\n**1) فعل ذو بادئة منفصلة:** تبقى البادئة جزءاً من الفعل المركب؛ وفي Partizip II يأتي ge- بينها وبين الجذع: **auf|stehen → aufgestanden**, **an|rufen → angerufen**, **ein|kaufen → eingekauft**. وفي المضارع قد تنفصل البادئة في الجملة الرئيسية (**Ich stehe früh auf**)، بينما تكتب متصلة في المصدر وPartizip II (**aufstehen, aufgestanden**).\n\n**2) بادئات غير منفصلة شائعة:** **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**. لا يضاف ge- آخر إلى Partizip II لهذه الأفعال: **besuchen → besucht, verstehen → verstanden, erzählen → erzählt, bekommen → bekommen**. تعلّم الفعل وصيغته؛ فالتغيّر بين الجذر والPartizip يختلف من فعل إلى آخر.\n\n**3) الأفعال المنتهية بـ-ieren:** لا تأخذ ge- في Partizip II، وتنتهي كثير من صيغها بـ-t: **studieren → studiert, telefonieren → telefoniert, fotografieren → fotografiert, reparieren → repariert**.\n\n**الخلاصة:** موقع ge- أو غيابها مرتبط ببنية الفعل وبادئته ونمطه الصرفي؛ قد يساعد النبر في التمييز بين بعض البوادئ، لكنه ليس قاعدةً شاملةً تحكم كل الأفعال. راجع قوائم الأفعال ودوّن المصدر وPartizip II معاً.",
      whyAr:
        "في الأفعال ذات البادئة المنفصلة، يوضع ge- بعد البادئة وقبل الجذع في Partizip II؛ أما البادئات غير المنفصلة فتشغل موضع البادئة ولا يضاف معها ge- أخرى، وأفعال -ieren تتبع نمطاً صرفياً بلا ge-. يصف IDS Grammis هذه الفئات ويذكر النبر/التنغيم ضمن العوامل ذات الصلة ببناء Partizip II؛ لا يختزل القاعدة في «كل فعل غير منبور في أوله لا يأخذ ge-». كما أن البادئة المنفصلة جزء من الفعل المركب وليست كلمةً مستقلة خارجه: انفصالها في بعض الجمل تصريفٌ نحوي، لا دليل على أنها ليست جزءاً من الفعل.",
      table: {
        title: "أين تذهب ge-؟",
        columns: ["العائلة", "العلامة", "المصدر ⟵ Partizip II", "النبر في هذه الأمثلة"],
        rows: [
          { label: "عاديّ", cells: ["ge- في الأوّل", "lernen ⟵ gelernt", "LER-nen"] },
          { label: "منفصل", cells: ["ge- في الوسط", "aufstehen ⟵ aufgestanden", "AUF-stehen"] },
          { label: "منفصل", cells: ["ge- في الوسط", "anrufen ⟵ angerufen", "AN-rufen"] },
          { label: "بادئة غير منفصلة", cells: ["بلا ge- إضافية", "besuchen ⟵ besucht", "be-SU-chen"] },
          { label: "بادئة غير منفصلة", cells: ["بلا ge- إضافية", "verstehen ⟵ verstanden", "ver-STE-hen"] },
          { label: "‎-ieren", cells: ["بلا ge-، والنهاية -t", "studieren ⟵ studiert", "stu-DIE-ren"] },
        ],
      },
      examples: [
        { de: "Ich bin heute um sechs Uhr aufgestanden.", ar: "نهضتُ اليوم في السادسة. (ge- في الوسط + sein)" },
        { de: "Hast du deine Mutter angerufen?", ar: "هل اتّصلتَ بأمّك؟ (anrufen ⟵ angerufen)" },
        { de: "Wir haben gestern eingekauft.", ar: "تسوّقنا أمس. (einkaufen ⟵ eingekauft)" },
        { de: "Ich habe meine Großmutter besucht.", ar: "زرتُ جدّتي. (be- ⟵ بلا ge-)" },
        { de: "Entschuldigung, ich habe das nicht verstanden.", ar: "عذراً، لم أفهم ذلك. (جملة إنقاذٍ في Hören وSprechen)" },
        { de: "Sie hat in Deutschland studiert.", ar: "درستْ في ألمانيا. (‎-ieren ⟵ studiert)" },
        { de: "Ich habe eine E-Mail bekommen.", ar: "وصلتني رسالة. (bekommen: الصورتان متطابقتان)" },
        { de: "Wir haben zwei Stunden telefoniert.", ar: "تحدّثنا هاتفياً ساعتين. (telefoniert)" },
      ],
      comparisonWithArabic:
        "قد تساعد مقارنة اللواصق في اللغتين على ملاحظة أن شكل الكلمة يتغيّر، لكن لا تقابل ge- زائدةً عربية بعينها ولا تفترض أنها لا تحمل إلا معنى الزمن في كل استعمال. لهذا الدرس، تعلّم الفعل الألماني مع Partizip II ومساعده بوصفها صيغة معجمية؛ مثل *besuchen → hat besucht* و*aufstehen → ist aufgestanden*. هذه المقارنة التذكّرية ليست قاعدةً شاملة عن الصرف العربي.",
      eselsbruecke:
        "احفظ ثلاثة أمثلة مع عائلاتها: aufstehen → aufgestanden (ge- بين البادئة والجذع)، besuchen → besucht (بادئة غير منفصلة)، وstudieren → studiert (-ieren). قد يساند النبر التعرّف إلى البادئة، لكن راجع البنية والصيغة المعجمية ولا تستعمل النبر وحده حكماً.",
      commonMistakes: [
        {
          wrong: "Ich habe meine Oma gebesucht.",
          right: "Ich habe meine Oma besucht.",
          whyAr: "besuchen يبدأ بالبادئة غير المنفصلة be-، وصيغة Partizip II القياسية besucht بلا ge- إضافية.",
        },
        {
          wrong: "Ich habe in Tunis gestudiert.",
          right: "Ich habe in Tunis studiert.",
          whyAr: "studieren ينتهي بـ-ieren؛ صيغة Partizip II هي studiert بلا ge-.",
        },
        {
          wrong: "Ich habe geaufstanden.",
          right: "Ich bin aufgestanden.",
          whyAr: "الصيغة aufstehen → aufgestanden تضع ge- بين البادئة والجذع، ويأخذ الفعل المساعد sein في هذا الاستعمال.",
        },
        {
          wrong: "Hast du mich angeruft?",
          right: "Hast du mich angerufen?",
          whyAr: "صيغة rufen القوية في Partizip II هي gerufen؛ ومع البادئة المنفصلة an- تصبح angerufen. المساعد هنا haben.",
        },
        {
          wrong: "Ich habe das nicht verstehen.",
          right: "Ich habe das nicht verstanden.",
          whyAr: "بعد haben في Perfekt نستخدم Partizip II: verstanden، لا المصدر verstehen. تعلّم هذه الصيغة القوية مع الفعل.",
        },
      ],
      relatedRuleComparison: {
        title: "البادئة المنفصلة في المضارع مقابل Perfekt",
        content:
          "قارن استعمال الفعل المنفصل في جملتين: **Ich stehe um sechs auf** (المضارع المصرف؛ تنفصل البادئة في الجملة الرئيسية) و**Ich bin um sechs aufgestanden** (Partizip II؛ تكتب البادئة متصلة ويقع ge- بينها وبين الجذع). وفي المصدر بعد الفعل الناقص تكتب متصلة أيضاً: **Ich muss früh aufstehen**. الانفصال هنا سمة تركيبية في بعض التصاريف؛ لا يعني أن البادئة ليست جزءاً من الفعل.",
      },
    },
    {
      id: "t4",
      titleAr: "wollen وsollen — إتمام الأفعال الناقصة",
      titleDe: "Die Modalverben wollen und sollen",
      explanationAr:
        "**wollen** و**sollen** من الأفعال الناقصة الشائعة. يتصرّف الفعل الناقص في الجملة الرئيسية، ويأتي مصدر الفعل الآخر عادةً في نهاية المجال الفعلي:\n\n**wollen** يعبّر في أمثلة كثيرة عن رغبة أو إرادة أو نيّة: **Ich will Deutsch lernen.** قوّة الطلب ودرجة مباشرته تتأثران بالسياق والعلاقة والنبرة، فلا يوصف كل استعمال لـwollen بالفظاظة.\n\n**sollen** يعبّر، بحسب السياق، عن تكليف أو نصيحة أو توصية أو أمر منقول/متوقّع: **Der Arzt gibt mir einen Rat: „Du sollst genug Wasser trinken.“** لا توجد مطابقة آلية بين sollen و«أمر الغير» أو بين müssen و«ضرورة داخلية»؛ فكلاهما قد يتأثر بمصدر الإلزام وطريقة عرضه.\n\n**تصريف الحاضر:** *ich will, du willst, er/sie/es will, wir wollen, ihr wollt, sie/Sie wollen*؛ و*ich soll, du sollst, er/sie/es soll, wir sollen, ihr sollt, sie/Sie sollen*. لاحظ في المثالين أن صيغة ich وer متطابقة بلا نهاية شخصية ظاهرة، لكن لا تعمّم ذلك على كل فعل ألماني.\n\n**mögen وmöchte:** mögen أحد الأفعال الناقصة الستة؛ ومن تصريفاته **ich mag**. وتُستعمل صيغة Konjunktiv II **möchte** كثيراً في الطلب المهذّب: **Ich möchte bitte einen Kaffee.** وهي خيار شائع، لا الصيغة المهذّبة الوحيدة. أما **Ich will einen Kaffee** فجملة صحيحة نحوياً وقد تبدو أكثر مباشرة في بعض مواقف الخدمة، وليست خطأ مطلقاً.\n\n**تنبيه للناطق بالإنجليزية:** *will* هنا صيغة مضارع من **wollen** تعبّر عن الرغبة/النية، وليست الأداة النحوية لتكوين Futur I كما في الإنجليزية. يمكن للألمانية أن تستعمل المضارع مع ظرف زمني لخطة مستقبلية (**Ich fahre morgen nach Berlin**)، ويُبنى Futur I بـ**werden + Infinitiv** عند الحاجة؛ لا يلزم تحويل كل مستقبل إلى Futur I.",
      whyAr:
        "للتعلّم العملي، راجع تصريف الفعل والسياق الذي يقدّمه المثال. في الحاضر تتطابق هنا صيغتا **ich will / er will** و**ich soll / er soll**؛ هذه ملاحظة على هذين الفعلين في هذه الصيغة، لا قصة تاريخية تفسّر كل أوجه تصريف الأفعال الناقصة. يسرد IDS Grammis الأفعال الناقصة الستة ومعانيها السياقية، ويذكر أن mögen يظهر كثيراً في صيغة Konjunktiv II möchte. كما يميّز بين استعمال modal للتعبير عن الإرادة/التكليف/التوصية وبين أداة Futur: لا تُترجم الألمانية *will* آلياً إلى مستقبل إنجليزي. أما sollen وmüssen فلا تختزل العلاقة بينهما في ثنائية «إلزام من الخارج/ضرورة من الداخل»؛ فشدة الالتزام ومصدره والسياق عوامل مؤثرة.",
      table: {
        title: "الأفعال الناقصة الستّة — نظرة إلى صيغ شائعة",
        columns: ["الفعل", "المعنى", "ich / er", "المثال"],
        rows: [
          { label: "können", cells: ["يستطيع", "kann", "Ich kann schwimmen."] },
          { label: "mögen", cells: ["يحب؛ وتشيع صيغة الطلب möchte", "mag", "Ich mag Tee. · Ich möchte einen Kaffee."] },
          { label: "müssen", cells: ["يجب (ضرورة)", "muss", "Ich muss arbeiten."] },
          { label: "dürfen", cells: ["يُسمح له", "darf", "Hier darf man nicht rauchen."] },
          { label: "wollen", cells: ["يريد (عزم)", "will", "Ich will Deutsch lernen."] },
          { label: "sollen", cells: ["ينبغي/تكليف أو توصية بحسب السياق", "soll", "Ich soll Wasser trinken."] },
        ],
      },
      examples: [
        { de: "Ich will nächstes Jahr nach Deutschland ziehen.", ar: "أنوي الانتقال إلى ألمانيا العام القادم. (عزم ⟵ wollen)" },
        { de: "Was willst du am Wochenende machen?", ar: "ماذا تريد أن تفعل في العطلة؟ (willst بنهاية -st)" },
        { de: "Wir wollen heute Abend ins Kino gehen.", ar: "نريد الذهاب إلى السينما هذا المساء." },
        { de: "Der Lehrer sagt, wir sollen die Übung machen.", ar: "يقول المعلّم إنّ علينا عمل التمرين. (نقل أمر الغير ⟵ sollen)" },
        { de: "Soll ich das Fenster öffnen?", ar: "هل أفتح النافذة؟ (قد تأتي سؤالاً لعرض المساعدة أو طلب التوجيه بحسب السياق)" },
        { de: "Du sollst nicht so viel Zucker essen.", ar: "لا ينبغي أن تأكل سكّراً كثيراً." },
        { de: "Ich möchte bitte einen Kaffee.", ar: "أودّ قهوةً من فضلك. صيغة شائعة للطلب المهذّب." },
        { de: "Ich will gehen.", ar: "أريد/أنوي الذهاب؛ *will* صيغة من wollen وليست أداة Futur I الألمانية." },
      ],
      comparisonWithArabic:
        "في أمثلة الأفعال الناقصة، تأتي صيغة الفعل الناقص مصرّفةً ويتبعها مصدر بلا zu: **Ich will Deutsch lernen**. هذا تقريب بنيوي لمثال محدد؛ فلا نفترض أن كل استعمال عربي لـ«أريد/ينبغي أن» يطابق wollen أو sollen. قد تساعد «أريد أن أتعلم» و«ينبغي أن أشرب» في تذكّر المعنى، لكن ترجمة sollen وmüssen وwollen تتغير مع السياق. وكذلك لا تساوِ الألمانية will بالمستقبل الإنجليزي: هنا هي صيغة من wollen، وقد تعبّر عن نية تتجه إلى المستقبل من غير أن تكون علامة Futur I.",
      eselsbruecke:
        "wollen تعبّر هنا عن رغبة أو نيّة؛ sollen قد تعرض نصيحة أو تكليفاً أو توقعاً بحسب السياق؛ وmöchte صيغة شائعة مهذبة للطلب. احفظ التصريف ومصدر الفعل، ولا تجعلها مقابلات عربية أو درجات أدب ثابتة.",
      commonMistakes: [
        {
          wrong: "Er willt nach Berlin fahren.",
          right: "Er will nach Berlin fahren.",
          whyAr: "في هذا التصريف نقول er will بلا t؛ طابق صيغة الفعل مع الفاعل.",
        },
        {
          wrong: "Ich will lernen Deutsch.",
          right: "Ich will Deutsch lernen.",
          whyAr: "في جملة رئيسية خبرية مع فعل ناقص، يأتي المصدر المتعلق به عادةً في نهاية المجال الفعلي: Ich will Deutsch lernen.",
        },
        {
          wrong: "Du soll mehr für die Prüfung lernen.",
          right: "Du sollst mehr für die Prüfung lernen.",
          whyAr: "مع du نضيف -st في صيغة الحاضر هنا: du sollst. أما sollen في جملة النصيحة فهو اختيار سياقي لا تعريف وحيد للفعل.",
        },
      ],
      relatedRuleComparison: {
        title: "القوالب الثلاثة التي تُغلق الجملة",
        content:
          "في الجمل الرئيسية الخبرية المحايدة، تقارن هذه الأمثلة بين الفعل المصرف في V2 وما يتبعه: **Ich will Deutsch lernen** (مصدر)، **Ich habe Deutsch gelernt** (Partizip II)، و**Ich stehe früh auf** (بادئة منفصلة في المضارع). هذا نمط مفيد في الأمثلة، لا قاعدة تقول إن الألمانية وحدها تضع كل متمم في آخر الجملة. وفي الجملة الفرعية يتغير ترتيب الأفعال؛ راجع أمثلة كل تركيب على حدة.",
      },
    },
  ],

  reading: {
    "id": "read-a1-14",
    "titleDe": "Ein Wochenende in Berlin",
    "titleAr": "عطلة أسبوع في برلين",
    "textType": "email",
    "paragraphs": [
      "Liebe Salma,\n\nwie geht es dir? Mir geht es sehr gut! Ich habe dir lange nicht geschrieben, denn ich hatte viel Arbeit. Aber jetzt muss ich dir von meinem Wochenende erzählen. Ich bin nämlich zum ersten Mal in Berlin gewesen!",
      "Am Freitag bin ich um fünf Uhr aufgestanden. Das war sehr früh! Ich habe schnell gefrühstückt und bin dann mit dem Zug nach Berlin gefahren. Die Fahrt hat vier Stunden gedauert. Im Zug habe ich ein Buch gelesen und viel aus dem Fenster geschaut.",
      "In Berlin habe ich meine Freundin Nadia getroffen. Sie hat drei Jahre in Deutschland studiert und spricht sehr gut Deutsch. Wir sind zusammen durch die Stadt gelaufen und haben das Brandenburger Tor fotografiert. Danach haben wir in einem kleinen Restaurant gegessen. Ich habe eine Currywurst probiert — sie hat mir sehr gut geschmeckt!",
      "Am Samstag hat es leider den ganzen Tag geregnet. Wir sind deshalb nicht spazieren gegangen, sondern wir sind ins Museum gegangen. Dort habe ich viel über die Geschichte der Stadt gelernt. Am Abend habe ich mit meiner Familie telefoniert, und danach haben Nadia und ich Tee getrunken. Um Mitternacht bin ich endlich eingeschlafen.",
      "Am Sonntag bin ich wieder nach Hause gefahren. Ich bin sehr müde gewesen, aber auch sehr glücklich. Berlin hat mir wirklich gefallen.",
      "Und du? Was hast du am Wochenende gemacht? Bist du auch gereist? Schreib mir bitte bald!\n\nViele Grüße\nAmine"
    ],
    "paragraphsAr": [
      "عزيزتي سلمى،\n\nكيف حالك؟ أنا بخير جداً! لم أكتب لك منذ مدّة طويلة لأنّه كان لديّ عملٌ كثير. لكن عليّ الآن أن أحدّثك عن عطلة أسبوعي. فقد كنتُ في برلين لأوّل مرّة!",
      "يوم الجمعة نهضتُ في الساعة الخامسة. كان ذلك مبكّراً جداً! تناولتُ الفطور بسرعة ثمّ سافرتُ بالقطار إلى برلين. استغرقت الرحلة أربع ساعات. في القطار قرأتُ كتاباً ونظرتُ كثيراً من النافذة.",
      "في برلين قابلتُ صديقتي نادية. درست نادية ثلاث سنوات في ألمانيا وتتكلّم الألمانية جيداً جداً. مشينا معاً في المدينة وصوّرنا بوّابة براندنبورغ. بعد ذلك أكلنا في مطعمٍ صغير. جرّبتُ الكاري فورست — وقد أعجبني كثيراً!",
      "يوم السبت أمطرت للأسف طوال النهار. فلم نذهب للتنزّه بل ذهبنا إلى المتحف. هناك تعلّمتُ كثيراً عن تاريخ المدينة. في المساء تحدّثتُ هاتفياً مع عائلتي، وبعد ذلك شربنا أنا ونادية الشاي. في منتصف الليل غفوتُ أخيراً.",
      "يوم الأحد عدتُ إلى البيت. كنتُ متعباً جداً لكنّي كنتُ سعيداً جداً أيضاً. أعجبتني برلين حقاً.",
      "وأنتِ؟ ماذا فعلتِ في عطلة الأسبوع؟ هل سافرتِ أيضاً؟ اكتبي لي قريباً من فضلك!\n\nتحيّاتي الكثيرة\nأمين"
    ],
    "glossary": [
      {
        "de": "erzählen (hat erzählt)",
        "ar": "يحكي، يروي",
        "noteAr": "غير منفصل بـer- ⟵ بلا ge-"
      },
      {
        "de": "zum ersten Mal",
        "ar": "لأوّل مرّة"
      },
      {
        "de": "die Fahrt",
        "ar": "الرحلة، السفرة"
      },
      {
        "de": "dauern (hat gedauert)",
        "ar": "يستغرق (من الوقت)",
        "noteAr": "Die Fahrt hat vier Stunden gedauert."
      },
      {
        "de": "getroffen (treffen)",
        "ar": "قابَل، التقى",
        "noteAr": "فعلٌ قويّ: treffen ⟵ getroffen (e ⟵ o)"
      },
      {
        "de": "probieren (hat probiert)",
        "ar": "يجرّب، يذوق",
        "noteAr": "‎-ieren ⟵ بلا ge-"
      },
      {
        "de": "schmecken (hat geschmeckt)",
        "ar": "يكون طعمه (طيّباً)",
        "noteAr": "Es hat mir gut geschmeckt = أعجبني طعمه"
      },
      {
        "de": "deshalb",
        "ar": "لذلك، لهذا السبب"
      },
      {
        "de": "die Geschichte",
        "ar": "التاريخ / القصّة"
      },
      {
        "de": "eingeschlafen (einschlafen)",
        "ar": "غفا، استغرق في النوم",
        "noteAr": "تغيّرُ حال ⟵ sein، وge- في وسط الفعل المنفصل"
      },
      {
        "de": "gefallen (hat gefallen)",
        "ar": "يعجب",
        "noteAr": "Berlin hat mir gefallen = أعجبتني برلين"
      },
      {
        "de": "reisen (ist gereist)",
        "ar": "يسافر",
        "noteAr": "تعلّم هذا الفعل مع sein: ist gereist."
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "paragraph": 2,
        "questionDe": "Wie ist Amine nach Berlin gefahren?",
        "instructionAr": "اقرأ الفقرة الثانية واختر الإجابة الصحيحة",
        "options": [
          "Mit dem Zug",
          "Mit dem Auto",
          "Mit dem Flugzeug",
          "Mit dem Bus"
        ],
        "correctIndex": 0,
        "explanation": "في الفقرة الثانية: «bin dann mit dem Zug nach Berlin gefahren» — بالقطار.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "paragraph": 3,
        "questionDe": "Was haben Amine und Nadia in Berlin zusammen gemacht?",
        "instructionAr": "اقرأ الفقرة الثالثة واختر الإجابة الصحيحة",
        "options": [
          "Sie sind durch die Stadt gelaufen und haben gegessen",
          "Sie sind ins Museum gegangen",
          "Sie sind zu Hause geblieben",
          "Sie haben nur telefoniert"
        ],
        "correctIndex": 0,
        "explanation": "تذكر الفقرة: «Wir sind zusammen durch die Stadt gelaufen» و«Danach haben wir … gegessen». أمّا الذهاب إلى المتحف فورد في الفقرة التالية عن يوم السبت.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "paragraph": 4,
        "questionDe": "Warum sind sie am Samstag ins Museum gegangen?",
        "instructionAr": "اقرأ الفقرة الرابعة: ما السبب؟",
        "options": [
          "Weil es geregnet hat",
          "Weil das Museum billig war",
          "Weil Nadia dort gearbeitet hat",
          "Weil sie müde waren"
        ],
        "correctIndex": 0,
        "explanation": "تقول الفقرة إن المطر استمرّ طوال السبت: «Am Samstag hat es … geregnet». ثم تذكر «Wir sind deshalb nicht spazieren gegangen, sondern wir sind ins Museum gegangen»؛ فالمطر سبب اختيار المتحف بدلاً من التنزّه.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "paragraph": 2,
        "questionDe": "Welches Hilfsverb steht bei „aufstehen“ im Text?",
        "instructionAr": "انتبه إلى الفعل المساعد: أيّ مساعدٍ استُعمل مع aufstehen في النصّ؟",
        "options": [
          "sein — ich bin aufgestanden",
          "haben — ich habe aufgestanden",
          "werden — ich werde aufgestanden",
          "kein Hilfsverb — nur aufgestanden"
        ],
        "correctIndex": 0,
        "explanation": "يذكر النص صراحةً: «bin ich um fünf Uhr aufgestanden». ويأتي aufstehen مع sein في هذا الاستعمال الشائع.",
        "errorType": "grammar"
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "paragraph": 3,
        "questionDe": "Warum heißt es „probiert“ und nicht „geprobiert“?",
        "instructionAr": "لماذا probiert بلا ge-؟",
        "options": [
          "Weil das Verb auf -ieren endet",
          "Weil es ein starkes Verb ist",
          "Weil es trennbar ist",
          "Weil es mit sein steht"
        ],
        "correctIndex": 0,
        "explanation": "probieren ينتهي بـ-ieren، وصيغة Partizip II هي probiert بلا ge-. لا يحتاج التفسير إلى قاعدة نبر شاملة.",
        "errorType": "grammar"
      },
      {
        "id": "rq6",
        "type": "multiple-choice",
        "paragraph": 5,
        "questionDe": "Wie hat Amine sich am Sonntag gefühlt?",
        "instructionAr": "اقرأ الفقرة الخامسة: كيف كان شعوره؟",
        "options": [
          "Müde, aber glücklich",
          "Nur müde",
          "Traurig",
          "Krank"
        ],
        "correctIndex": 0,
        "explanation": "«Ich bin sehr müde gewesen, aber auch sehr glücklich.»",
        "errorType": "vocabulary"
      }
    ],
    "redemittel": [
      {
        "de": "Was hast du am Wochenende gemacht?",
        "ar": "ماذا فعلتَ في عطلة الأسبوع؟ — سؤال للتدرب على الحديث عن تجربة سابقة"
      },
      {
        "de": "Ich bin zum ersten Mal in … gewesen.",
        "ar": "كنتُ في … لأوّل مرّة"
      },
      {
        "de": "Die Fahrt hat … Stunden gedauert.",
        "ar": "استغرقت الرحلة … ساعات"
      },
      {
        "de": "Es hat mir sehr gut gefallen.",
        "ar": "أعجبني كثيراً — مثال على استعمال gefallen في Perfekt"
      },
      {
        "de": "Leider hat es den ganzen Tag geregnet.",
        "ar": "للأسف أمطرت طوال النهار"
      },
      {
        "de": "Und du? Was hast du gemacht?",
        "ar": "وأنت؟ ماذا فعلتَ؟ — تُعيد الكلمة لمحدّثك"
      }
    ],
    "discussionAr": "تدريب إنتاجي اختياري: تحدث أو اكتب مسودة قصيرة عن عطلة سابقة مستخدماً جمل Perfekt بسيطة، ثم راجع كل فعل ومساعده بحسب الفعل والمعنى. هذا السؤال المفتوح لا يُصحح ولا يُسجل آلياً، ولا يثبت هدفاً بمجرد فتحه أو كتابة نص فيه. لا تعتمد على وجود Akkusativ وحده لاختيار المساعد."
  },

  listening: {
    items: [
      {
        id: "ls-a1-14-1",
        title: "رسالة صوتية: كيف كانت العطلة؟",
        lines: [
          { speaker: "Nadia", de: "Hallo Amine! Wie war dein Wochenende? Was hast du gemacht?", ar: "أهلاً أمين! كيف كانت عطلتك؟ ماذا فعلتَ؟" },
          { speaker: "Amine", de: "Hallo Nadia! Am Samstag bin ich sehr früh aufgestanden.", ar: "أهلاً نادية! يوم السبت نهضتُ مبكّراً جداً." },
          { speaker: "Amine", de: "Ich habe für die Prüfung gelernt und dann habe ich meine Familie angerufen.", ar: "درستُ للامتحان ثمّ اتّصلتُ بعائلتي." },
          { speaker: "Amine", de: "Am Sonntag bin ich mit dem Fahrrad zum See gefahren. Das Wetter war super!", ar: "يوم الأحد ذهبتُ بالدرّاجة إلى البحيرة. كان الطقس رائعاً!" },
          { speaker: "Nadia", de: "Schön! Ich bin leider zu Hause geblieben. Ich war krank.", ar: "جميل! أنا للأسف بقيتُ في البيت. كنتُ مريضة." },
        ],
      },
    ],
    questions: [
      {
        type: "multiple-choice",
        id: "lsq-a1-14-1",
        instructionAr: "استمع واختر الإجابة الصحيحة",
        itemId: "ls-a1-14-1",
        questionDe: "Was hat Amine am Samstag gemacht?",
        questionAr: "ماذا فعل أمين يوم السبت؟",
        options: ["Er hat gelernt und seine Familie angerufen", "Er ist zum See gefahren", "Er ist zu Hause geblieben"],
        correctIndex: 0,
        errorType: "vocabulary",
        explanation: "يوم السبت: «habe für die Prüfung gelernt» و«habe meine Familie angerufen». أمّا البحيرة فكانت يوم الأحد.",
      },
      {
        type: "multiple-choice",
        id: "lsq-a1-14-2",
        instructionAr: "استمع وانتبه إلى الفعل المساعد",
        itemId: "ls-a1-14-1",
        questionDe: "Welches Hilfsverb benutzt Nadia bei „bleiben“?",
        questionAr: "أيّ فعلٍ مساعد استعملته نادية مع bleiben؟",
        options: ["sein — ich bin geblieben", "haben — ich habe geblieben", "werden — ich werde geblieben"],
        correctIndex: 0,
        errorType: "grammar",
        explanation: "في الرسالة تقول نادية: «Ich bin leider zu Hause geblieben». احفظ صيغة bleiben مع sein في هذا المثال؛ لا تختزل قائمة sein في ثلاثة أفعال.",
      },
      {
        type: "multiple-choice",
        id: "lsq-a1-14-3",
        instructionAr: "استمع واختر الإجابة الصحيحة",
        itemId: "ls-a1-14-1",
        questionDe: "Wie ist Amine am Sonntag zum See gekommen?",
        questionAr: "كيف وصل أمين إلى البحيرة يوم الأحد؟",
        options: ["Mit dem Fahrrad", "Mit dem Auto", "Zu Fuß"],
        correctIndex: 0,
        errorType: "vocabulary",
        explanation: "يذكر أمين: «bin ich mit dem Fahrrad zum See gefahren» — وصل إلى البحيرة بالدراجة؛ fahren بمعنى الانتقال إلى وجهة يأخذ sein في هذا المثال.",
      },
    ],
  },

  pronunciation: {
    id: "pron-a1-14",
    title: "نطق Partizip II — البادئة ge- والنهايتان -t و-en",
    items: [
      { de: "gelernt", ar: "تعلَّم", note: "ge- غير منبورة في هذا المثال؛ النبر على مقطع lern، وg ألمانية [ɡ] وليست غيناً عربية." },
      { de: "gemacht", ar: "فعَل", note: "ch بعد a تمثل [x] في النطق المعياري الشائع؛ تقريبها بخاء عربية لا يعني تطابق الصوتين." },
      { de: "gesprochen", ar: "تكلَّم", note: "في بدء الجذر sprechen/gesprochen تُنطق sp عادةً [ʃp]؛ وch بعد o تمثل [x]." },
      { de: "gefahren", ar: "سافر", note: "ge- غير منبورة، والنبر على fahr مع a طويلة؛ اسمع نهاية -en ولا تفترض أن e محذوفة." },
      { de: "aufgestanden", ar: "نهض", note: "تظهر ge- بين بادئة auf وجذع stehen؛ موضع النبر خاصّ بالكلمة ولا يُستنتج منه حكم عام عن ge-." },
      { de: "besucht", ar: "زار", note: "لا ge إضافية مع البادئة غير المنفصلة be-؛ النبر في هذا الفعل على المقطع such." },
      { de: "studiert", ar: "درس", note: "st في بداية الكلمة تُنطق [ʃt]؛ ie تمثل صوتاً طويلاً، والنبر على المقطع -dier-." },
      { de: "gewesen", ar: "كان", note: "في النطق المعياري الشائع: w ألمانية [v]، وs بين الحركات [z]؛ ge- غير منبورة." },
    ],
    tip: "هذه ملاحظات على الكلمات المعروضة لا قاعدة عامة لاستنتاج Partizip II من النبر. حدّد بنية الفعل والبادئة أولاً، واحفظ النطق بالسماع عند توفر الصوت؛ والكتابة العربية تقريبية لا تمثيل صوتي دقيق للألمانية.",
  },

  writing: [
    {
      id: "wr-a1-14-1",
      type: "transformation",
      instructionAr: "حوّل الجملة من المضارع إلى Perfekt مع إبقاء الفاعل في بداية الجملة.",
      prompt: "Ich lerne Deutsch. →",
      acceptedAnswers: ["Ich habe Deutsch gelernt."],
      sampleAnswer: "Ich habe Deutsch gelernt.",
      hint: "في هذا المثال يأخذ lernen مع المفعول Deutsch المساعد haben؛ وتعلّم الصيغة gelernt. وجود مفعول قرينة، لا قاعدة آلية لكل الأفعال.",
      explanation: "في هذه الجملة الرئيسية الخبرية يأتي haben في V2 وgelernt في نهاية المجال الفعلي، والمفعول Deutsch بينهما.",
      errorType: "grammar",
    },
    {
      id: "wr-a1-14-2",
      type: "transformation",
      instructionAr: "حوّل الجملة من المضارع إلى Perfekt مع إبقاء الفاعل في بداية الجملة (انتبه إلى المساعد).",
      prompt: "Wir fahren nach Berlin. →",
      acceptedAnswers: ["Wir sind nach Berlin gefahren."],
      sampleAnswer: "Wir sind nach Berlin gefahren.",
      hint: "هنا يدلّ fahren على السفر إلى وجهة: Wir sind nach Berlin gefahren.",
      explanation: "في معنى السفر إلى Berlin نستخدم sein؛ ويأتي Partizip II gefahren في نهاية الجملة الرئيسية.",
      errorType: "grammar",
    },
    {
      id: "wr-a1-14-3",
      type: "fill-blank",
      instructionAr: "أكمل قالب البريد بصيغة Perfekt بالمساعدات وPartizip II المناسبة",
      template: "Liebe Salma,\n\nAm Wochenende ___ ich nach Berlin ___. Dort ___ ich meine Freundin Nadia ___. Wir ___ zusammen durch die Stadt ___ und ___ am Abend in einem Restaurant ___.\n\nViele Grüße\nAmine",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "sind", "bist"], errorType: "grammar" },
        { correct: "gefahren", options: ["gefahren", "gefahrt", "gefahrene", "fahren"], errorType: "grammar" },
        { correct: "habe", options: ["habe", "bin", "hat", "war"], errorType: "grammar" },
        { correct: "getroffen", options: ["getroffen", "getrefft", "getroffenet", "treffen"], errorType: "grammar" },
        { correct: "sind", options: ["sind", "haben", "waren", "ist"], errorType: "grammar" },
        { correct: "gelaufen", options: ["gelaufen", "gelauft", "gelaufenet", "laufen"], errorType: "grammar" },
        { correct: "haben", options: ["haben", "sind", "hat", "waren"], errorType: "grammar" },
        { correct: "gegessen", options: ["gegessen", "geesst", "gegessenet", "essen"], errorType: "grammar" },
      ],
      hint: "تذكّر أن المساعد يتبع الفعل ومعناه في الجملة؛ في تركيب Perfekt يأتي Partizip II في نهاية جملة V2.",
      explanation: "Am Wochenende bin ich nach Berlin gefahren. Dort habe ich meine Freundin Nadia getroffen. Wir sind zusammen durch die Stadt gelaufen und haben am Abend in einem Restaurant gegessen. هذا قالب إكمال موجّه، وليس مهمة تأليف بريد حر.",
      errorType: "grammar",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل الضعيف",
      instructionDe: "Ergänzen Sie das Partizip II.",
      template: "Ich habe gestern Deutsch ___. (lernen)",
      blanks: [{ correct: "gelernt", options: ["gelernt", "lernte", "gelernen", "lernt"], errorType: "grammar" }],
      explanation: "lernen ضعيف: ge + lern + t = gelernt.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل القويّ",
      template: "Wir haben Kaffee ___. (trinken)",
      blanks: [{ correct: "getrunken", options: ["getrunken", "getrinkt", "trinkte", "getrunkt"], errorType: "grammar" }],
      explanation: "trinken قويّ: يتغيّر صوت الجذر (i ⟵ u) والنهاية -en ⟵ getrunken.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ مساعد يناسب؟",
      questionDe: "Im Perfekt: Ich ___ gestern nach Hamburg gefahren.",
      options: ["bin", "habe", "war", "werde"],
      correctIndex: 0,
      explanation: "في هذا الاستعمال يعني fahren السفر إلى وجهة، ويأخذ sein: Ich bin nach Hamburg gefahren.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ مساعد يناسب؟",
      questionDe: "Meine Freundin ___ einen langen Brief geschrieben.",
      options: ["hat", "ist", "war", "wird"],
      correctIndex: 0,
      explanation: "في هذا المثال يأخذ schreiben المساعد haben مع المفعول einen langen Brief؛ لا تجعل قرينة المفعول اختباراً آلياً لكل فعل.",
      errorType: "grammar",
    },
    {
      id: "e5",
      type: "word-ordering",
      instructionAr: "رتّب الجملة وابدأ بـIch؛ ضع ظرف gestern قبل المفعول، وانتبه إلى موضع Partizip II",
      tokens: ["Ich", "habe", "gestern", "einen", "Film", "gesehen"],
      correctSentence: "Ich habe gestern einen Film gesehen",
      explanation: "المساعد habe في المركز الثاني، وgesehen في آخر الجملة، وما بينهما ظرفٌ ومفعول.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich habe gelernt Deutsch.",
      wrongWord: "gelernt Deutsch",
      correctWord: "Deutsch gelernt",
      options: ["Deutsch gelernt", "gelernt Deutsch", "Deutsch lernte", "lernte Deutsch"],
      explanation: "في الجملة الرئيسية الخبرية المحايدة يأتي Partizip II عادةً في نهاية المجال الفعلي؛ هنا يسبقه المفعول Deutsch. وتختلف مواضع الأفعال في الجمل الفرعية والأسئلة.",
      errorType: "word-order",
    },
    {
      id: "e7",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل المنفصل",
      template: "Ich bin um sechs Uhr ___. (aufstehen)",
      blanks: [{ correct: "aufgestanden", options: ["aufgestanden", "geaufstanden", "aufstanden", "aufgestehen"], errorType: "grammar" }],
      explanation: "الفعل المنفصل: ge- تدخل بين البادئة والجذر ⟵ auf-ge-standen.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل غير المنفصل",
      template: "Wir haben meine Oma ___. (besuchen)",
      blanks: [{ correct: "besucht", options: ["besucht", "gebesucht", "besuchen", "besuchte"], errorType: "grammar" }],
      explanation: "be- بادئةٌ غير منفصلة تمنع ge- ⟵ besucht.",
      errorType: "grammar",
    },
    {
      id: "e9",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II لفعل -ieren",
      template: "Sie hat in Berlin ___. (studieren)",
      blanks: [{ correct: "studiert", options: ["studiert", "gestudiert", "studierte", "gestudier"], errorType: "grammar" }],
      explanation: "أفعال -ieren بلا ge- والنهاية -t ⟵ studiert.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "matching",
      instructionAr: "طابق كلّ مصدرٍ بـPartizip II الخاصّ به",
      pairs: [
        { left: "machen", right: "gemacht" },
        { left: "essen", right: "gegessen" },
        { left: "anrufen", right: "angerufen" },
        { left: "verstehen", right: "verstanden" },
        { left: "telefonieren", right: "telefoniert" },
        { left: "bleiben", right: "geblieben" },
      ],
      explanation: "لاحظ الأنماط: gemacht ضعيف، gegessen وgeblieben قويان، angerufen منفصل، verstanden ببادئة غير منفصلة، وtelefoniert من -ieren.",
      errorType: "grammar",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "أيّ جملةٍ صحيحة تماماً؟",
      questionDe: "Welcher Satz ist korrekt?",
      options: [
        "Wir sind zu Hause geblieben.",
        "Wir haben zu Hause geblieben.",
        "Wir sind zu Hause gebleibt.",
        "Wir haben zu Hause bleiben.",
      ],
      correctIndex: 0,
      explanation: "في هذا الاستعمال يأتي bleiben مع sein، وصيغة Partizip II هي geblieben؛ احفظ الفعل مع مساعده.",
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr: "في جملة Perfekt هذه، صحّح الفعل المساعد.",
      wrongSentence: "Ich habe nach Berlin gefahren.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "habe", "bist", "sind"],
      explanation: "fahren بمعنى السفر إلى Berlin يأخذ sein هنا؛ اختيار المساعد يعتمد على استعمال الفعل، لا على غياب مفعول وحده.",
      errorType: "grammar",
    },
    {
      id: "e13",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe: "Am Freitag bin ich früh aufgestanden. Ich habe gefrühstückt und bin dann zur Arbeit gefahren. Am Abend habe ich ferngesehen und bin um elf Uhr eingeschlafen.",
      statements: [
        { id: "s1", de: "Die Person ist früh aufgestanden.", ar: "نهض الشخص مبكّراً.", isTrue: true, whyAr: "النصّ يقول: «Am Freitag bin ich früh aufgestanden»." },
        { id: "s2", de: "Die Person hat nicht gefrühstückt.", ar: "لم يتناول الشخص الفطور.", isTrue: false, whyAr: "بل تناوله: «Ich habe gefrühstückt»." },
        { id: "s3", de: "Alle Verben im Text stehen mit haben.", ar: "كلّ أفعال النصّ مع haben.", isTrue: false, whyAr: "النصّ يخلط المساعدين: aufgestanden وgefahren وeingeschlafen مع sein." },
        { id: "s4", de: "„eingeschlafen“ steht mit sein.", ar: "الفعل eingeschlafen يأخذ sein.", isTrue: true, whyAr: "einschlafen تغيّرُ حالٍ (من يقظةٍ إلى نوم) فمساعدها sein." },
      ],
      explanation: "النصّ يخلط المساعدين: aufgestanden وgefahren وeingeschlafen مع sein، وgefrühstückt وferngesehen مع haben.",
      errorType: "grammar",
    },
    {
      id: "e14",
      type: "transformation",
      instructionAr: "حوّل إلى Perfekt مع إبقاء الفاعل في بداية الجملة.",
      prompt: "Er ruft seine Mutter an. →",
      acceptedAnswers: ["Er hat seine Mutter angerufen."],
      sampleAnswer: "Er hat seine Mutter angerufen.",
      explanation: "anrufen يأخذ haben، وصيغته angerufen (بادئة منفصلة + Partizip II من rufen).",
      errorType: "grammar",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل تصريف wollen",
      template: "Ich ___ Deutsch lernen. · Er ___ nach Berlin fahren. · Wir ___ ins Kino gehen.",
      blanks: [
        { correct: "will", options: ["will", "willst", "wollen", "wollt"], errorType: "conjugation" },
        { correct: "will", options: ["will", "willt", "wollt", "wollen"], errorType: "conjugation" },
        { correct: "wollen", options: ["wollen", "will", "wollt", "willst"], errorType: "conjugation" },
      ],
      explanation: "ich وer متطابقان بلا نهاية: will. وwir wollen بنهاية -en.",
      errorType: "conjugation",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ ناقصٍ يناسب السياق؟",
      questionDe: "Der Arzt empfiehlt mir, täglich genug Wasser zu trinken. Er sagt: „Du ___ genug Wasser trinken.“",
      options: ["sollst", "willst", "kannst", "darfst"],
      correctIndex: 0,
      explanation: "السياق يقول إن الطبيب يوصي؛ لذلك تناسب sollen هذه النصيحة. ليست المقارنة قاعدةً مطلقة تمنع müssen في كل حديث عن الطبيب.",
      errorType: "vocabulary",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "أنت في مقهى. ما الصيغة المهذّبة؟",
      questionDe: "Im Café: Was sagen Sie?",
      options: [
        "Ich möchte bitte einen Kaffee.",
        "Ich will einen Kaffee.",
        "Ich soll einen Kaffee.",
        "Ich muss einen Kaffee.",
      ],
      correctIndex: 0,
      explanation: "المطلوب هنا صيغة شائعة مهذّبة للطلب، لذلك تناسب möchte. جملة Ich will einen Kaffee صحيحة نحوياً وقد تكون مباشرة أكثر بحسب السياق، لا خطأ مطلقاً.",
      errorType: "vocabulary",
    },
    {
      id: "e18",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Er willt morgen nach Köln fahren.",
      wrongWord: "willt",
      correctWord: "will",
      options: ["will", "willt", "wollt", "wollen"],
      explanation: "في هذا التصريف لا نضيف t إلى er: ich will · er will.",
      errorType: "conjugation",
    },
    {
      id: "e19",
      type: "word-ordering",
      instructionAr: "رتّب الجملة وابدأ بـWir؛ ضع heute Abend قبل ins Kino، واجعل المصدر في النهاية",
      tokens: ["Wir", "wollen", "heute", "Abend", "ins", "Kino", "gehen"],
      correctSentence: "Wir wollen heute Abend ins Kino gehen",
      explanation: "في هذه الجملة الرئيسية يأتي الفعل الناقص في V2 والمصدر في نهاية المجال الفعلي؛ قارن ذلك بموضع Partizip II في Perfekt.",
      errorType: "word-order",
    },
    {
      id: "e20",
      type: "multiple-choice",
      instructionAr: "لماذا لا نقول gestudiert؟",
      questionDe: "Warum heißt es „studiert“ und nicht „gestudiert“?",
      options: [
        "Weil Verben auf -ieren kein ge- bekommen",
        "Weil studieren ein starkes Verb ist",
        "Weil studieren trennbar ist",
        "Weil studieren mit sein steht",
      ],
      correctIndex: 0,
      explanation: "studieren ينتهي بـ-ieren، وPartizip II هو studiert بلا ge-. النبر ليس وحده قاعدةً عامة لتكوين Partizip II.",
      errorType: "grammar",
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr: "أكمل مساعد Perfekt الصحيح في الجملتين",
      template: "Ich ___ um sieben aufgestanden und ___ dann gefrühstückt.",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "war", "werde"], errorType: "grammar" },
        { correct: "habe", options: ["habe", "bin", "war", "wurde"], errorType: "grammar" },
      ],
      explanation: "تقول الصيغة: Ich bin aufgestanden und habe gefrühstückt؛ تعلّم كل فعل مع مساعده في استعماله هنا.",
      errorType: "grammar",
    },
    {
      id: "e22",
      type: "transformation",
      instructionAr: "أجب بجملة كاملة في Perfekt؛ ابدأ بـIch أو بـam Wochenende، وضع Partizip II في آخر الجملة.",
      prompt: "Was hast du am Wochenende gemacht? (ins Museum gehen)",
      acceptedAnswers: [
        "Ich bin ins Museum gegangen.",
        "Ich bin am Wochenende ins Museum gegangen.",
        "Am Wochenende bin ich ins Museum gegangen.",
      ],
      sampleAnswer: "Ich bin ins Museum gegangen.",
      explanation: "gehen بمعنى الذهاب إلى المتحف يأخذ sein، وPartizip II هو gegangen.",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "multiple-choice",
      instructionAr: "أيّ جملة تستخدم المضارع للفعل الرئيسي مع ظرف زمني لحدث مستقبلي؟",
      questionDe: "Welcher Satz verwendet das Präsens des Vollverbs mit einer Zeitangabe für ein zukünftiges Ereignis?",
      options: [
        "Ich fahre morgen nach Berlin.",
        "Ich werde morgen nach Berlin fahren.",
        "Ich bin gestern nach Berlin gefahren.",
        "Ich sollte morgen nach Berlin fahren.",
      ],
      correctIndex: 0,
      explanation: "Ich fahre morgen nach Berlin verwendet das Präsens des Vollverbs fahren mit der Zeitangabe morgen. Die anderen Optionen verwenden Futur I, Perfekt mit gestern oder die Konjunktiv-II-Form sollte; gefragt ist ausdrücklich das Präsens des Vollverbs.",
      errorType: "grammar",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كلّ فعلٍ بالمساعد وصيغة Partizip II المناسبين",
      pairs: [
        { left: "ein Buch lesen", right: "haben + gelesen" },
        { left: "nach Berlin fliegen", right: "sein + geflogen" },
        { left: "zu Hause bleiben", right: "sein + geblieben" },
        { left: "acht Stunden schlafen", right: "haben + geschlafen" },
        { left: "früh einschlafen", right: "sein + eingeschlafen" },
      ],
      explanation: "في هذه الأمثلة يأخذ lesen مع مفعوله وschlafen مع عبارة المدة haben؛ ويأخذ fliegen إلى وجهة وbleiben وeinschlafen sein. هذه أزواج معجمية وسياقية، لا قاعدة «كل حركة = sein».",
      errorType: "grammar",
    },
    {
      id: "e25",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe das nicht verstanden.",
      wrongWord: "verstanden",
      correctWord: "verstanden",
      isAlreadyCorrect: true,
      options: ["verstanden", "geverstanden", "verstehen", "verstandet"],
      explanation: "verstehen له البادئة غير المنفصلة ver-، لذلك Partizip II هو verstanden بلا ge- إضافية؛ وفي هذا المثال يستعمل haben. الجملة سليمة.",
      errorType: "grammar",
    },
    {
      id: "e26",
      type: "word-ordering",
      instructionAr: "رتّب السؤال: ابدأ بـWas وضع am Wochenende قبل Partizip II",
      tokens: ["Was", "hast", "du", "am", "Wochenende", "gemacht"],
      correctSentence: "Was hast du am Wochenende gemacht",
      explanation: "في السؤال بأداة: الأداة أوّلاً، المساعد ثانياً، وPartizip II في الآخر.",
      errorType: "word-order",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich habe gelernt Deutsch.",
        right: "Ich habe Deutsch gelernt.",
        whyAr: "في الجملة الرئيسية الخبرية المحايدة يأتي Partizip II عادةً في نهاية المجال الفعلي؛ لذلك يسبقه المفعول هنا. راجع نوع الجملة قبل تعميم موضع الأفعال.",
      },
      {
        wrong: "Ich habe nach Berlin gefahren.",
        right: "Ich bin nach Berlin gefahren.",
        whyAr: "fahren بمعنى السفر إلى وجهة يأخذ sein في هذا المثال. غياب المفعول وحده ليس اختباراً شاملاً لاختيار المساعد.",
      },
      {
        wrong: "Ich habe meine Oma gebesucht.",
        right: "Ich habe meine Oma besucht.",
        whyAr: "besuchen يبدأ بالبادئة غير المنفصلة be-، وصيغة Partizip II هي besucht بلا ge- إضافية.",
      },
      {
        wrong: "Ich habe getrinkt.",
        right: "Ich habe getrunken.",
        whyAr: "Partizip II من trinken هو getrunken؛ تعلّم هذه الصيغة القوية ولا تقسها على نهاية الأفعال الضعيفة.",
      },
      {
        wrong: "Er willt nach Berlin fahren.",
        right: "Er will nach Berlin fahren.",
        whyAr: "في الحاضر er will بلا t. لا تخلط ذلك مع مباشرة الطلب؛ فـwollen صحيح نحوياً وتختلف ملاءمته بحسب السياق.",
      },
    ],
    eselsbruecken: [
      "في الجملة الرئيسية الخبرية المحايدة: الفعل المصرف في V2 والجزء غير المصرف في نهاية المجال الفعلي؛ راجع ترتيب الجملة الفرعية على حدة.",
      "اختيار haben/sein يتبع الفعل ومعناه واستعماله؛ المفعول المباشر قرينة مفيدة، لا اختبار آلي. واحفظ المساعد مع Partizip II.",
      "bleiben وsein وpassieren أمثلة شائعة تتعلم معها sein؛ ليست هذه قائمة حصرية لكل الأفعال.",
      "في Partizip II افحص نوع البادئة والفعل: aufstehen → aufgestanden، besuchen → besucht، studieren → studiert. لا تستنتج القاعدة من النبر وحده.",
      "الألمانية will صيغة من wollen تعبّر عن رغبة/نية؛ ليست أداة Futur I، وقد يُستعمل Präsens مع ظرف زمني للمستقبل.",
    ],
    culturalNote: {
      title: "Perfekt وPräteritum: الاستعمال يتغيّر بحسب السياق",
      content: "يشيع Perfekt في المحادثات، ويشيع Präteritum في كثير من السرد المكتوب؛ لكن هذا ميل مرتبط بالنوع النصي والسجل، لا قسمة مطلقة بين الكلام والكتابة. توجد فروق إقليمية أيضاً، وقد يقل استعمال Präteritum المنطوق في بعض مناطق الجنوب، لكن لا يصح اختزال ذلك في «لا يبقى إلا war وhatte» أو تقديمه قاعدةً لكل الناطقين. يركّز هذا الدرس على أمثلة Perfekt ولا يطلب استعمال زمن واحد دائماً.",
    },
  },

  miniTest: [
    {
      id: "mt-a1-14-1",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المساعد الصحيح",
      questionDe: "Im Perfekt: Am Sonntag ___ wir im Park spazieren gegangen.",
      options: ["sind", "haben", "waren", "werden"],
      correctIndex: 0,
      explanation: "في spazieren gehen بمعنى التمشّي، يُستعمل sein: Am Sonntag sind wir spazieren gegangen.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-2",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II",
      template: "Hast du die E-Mail schon ___? (schreiben)",
      blanks: [{ correct: "geschrieben", options: ["geschrieben", "geschreibt", "schrieb", "geschreiben"], errorType: "grammar" }],
      explanation: "schreiben قويّ: ei ⟵ ie والنهاية -en ⟵ geschrieben.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-3",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ لا يأخذ ge- في Partizip II؟",
      questionDe: "Welches Verb bildet das Partizip II ohne ge-?",
      options: ["reparieren", "kaufen", "hören", "spielen"],
      correctIndex: 0,
      explanation: "reparieren ينتهي بـ-ieren ⟵ repariert بلا ge-. والثلاثة الأخرى ضعيفة عادية: gekauft, gehört, gespielt.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة وابدأ بالفاعل المركّب Meine Schwester",
      tokens: ["Meine", "Schwester", "hat", "in", "München", "studiert"],
      correctSentence: "Meine Schwester hat in München studiert",
      explanation: "المساعد hat في المركز الثاني بعد المبتدأ المركّب، وstudiert في الآخر.",
      errorType: "word-order",
    },
    {
      id: "mt-a1-14-5",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ ناقصٍ يناسب؟",
      questionDe: "Meine Eltern raten mir: „Du ___ mehr für die Prüfung lernen.“",
      options: ["sollst", "willst", "darfst", "kannst"],
      correctIndex: 0,
      explanation: "الفعل raten يضع العبارة في سياق نصيحة؛ لذلك تناسب الصيغة Du sollst. أما wollen وdürfen وkönnen فتعبر هنا عن نية أو إذن أو قدرة لا عن النصيحة المطلوبة.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Perfekt", ar: "الماضي المحكيّ (haben/sein + Partizip II)", example: "Im Gespräch benutzt man das Perfekt.", exampleAr: "يشيع Perfekt في محادثات كثيرة، ولا يقتصر الماضي الألماني عليه.", level: "A1" },
    { id: "fc2", de: "gemacht (machen)", ar: "فعَل", example: "Was hast du gestern gemacht?", exampleAr: "ماذا فعلتَ أمس؟", level: "A1" },
    { id: "fc3", de: "gelernt (lernen)", ar: "تعلَّم", example: "Ich habe zwei Stunden gelernt.", exampleAr: "تعلّمتُ لمدّة ساعتين.", level: "A1" },
    { id: "fc4", de: "gegessen (essen)", ar: "أكَل", example: "Wir haben im Restaurant gegessen.", exampleAr: "أكلنا في المطعم.", level: "A1" },
    { id: "fc5", de: "getrunken (trinken)", ar: "شرِب", example: "Ich habe einen Tee getrunken.", exampleAr: "شربتُ شاياً.", level: "A1" },
    { id: "fc6", de: "gefahren (fahren)", ar: "سافر، ذهب بمركبة", example: "Ich bin nach Berlin gefahren.", exampleAr: "سافرتُ إلى برلين.", level: "A1" },
    { id: "fc7", de: "gegangen (gehen)", ar: "ذهب", example: "Wir sind ins Kino gegangen.", exampleAr: "ذهبنا إلى السينما.", level: "A1" },
    { id: "fc8", de: "gewesen (sein)", ar: "كان", example: "Ich bin in Berlin gewesen.", exampleAr: "كنتُ في برلين.", level: "A1" },
    { id: "fc9", de: "geblieben (bleiben)", ar: "بقي", example: "Wir sind zu Hause geblieben.", exampleAr: "بقينا في البيت.", level: "A1" },
    { id: "fc10", de: "aufgestanden (aufstehen)", ar: "نهض من النوم", example: "Ich bin um sechs aufgestanden.", exampleAr: "نهضتُ في السادسة.", level: "A1" },
    { id: "fc11", de: "angerufen (anrufen)", ar: "اتّصل هاتفياً", example: "Ich habe meine Mutter angerufen.", exampleAr: "اتّصلتُ بأمّي.", level: "A1" },
    { id: "fc12", de: "besucht (besuchen)", ar: "زار", example: "Wir haben unsere Oma besucht.", exampleAr: "زرنا جدّتنا.", level: "A1" },
    { id: "fc13", de: "verstanden (verstehen)", ar: "فهِم", example: "Ich habe das nicht verstanden.", exampleAr: "لم أفهم ذلك.", level: "A1" },
    { id: "fc14", de: "studiert (studieren)", ar: "درس في الجامعة", example: "Sie hat in Tunis studiert.", exampleAr: "درستْ في تونس.", level: "A1" },
    { id: "fc15", de: "wollen", ar: "يريد/ينوي بحسب السياق", example: "Ich will Deutsch lernen.", exampleAr: "أريد أن أتعلّم الألمانية.", level: "A1" },
    { id: "fc16", de: "sollen", ar: "ينبغي/يُطلب منه بحسب السياق", example: "Der Arzt sagt, ich soll Wasser trinken.", exampleAr: "يقول الطبيب إنّ عليّ شرب الماء.", level: "A1" },
    { id: "fc17", de: "gestern", ar: "أمس", example: "Gestern habe ich viel gearbeitet.", exampleAr: "أمس عملتُ كثيراً.", level: "A1" },
    { id: "fc18", de: "letztes Wochenende", ar: "عطلة الأسبوع الماضية", example: "Letztes Wochenende bin ich gereist.", exampleAr: "عطلة الأسبوع الماضية سافرتُ.", level: "A1" },
    { id: "fc19", de: "gefallen (hat gefallen)", ar: "أعجب", example: "Berlin hat mir sehr gefallen.", exampleAr: "أعجبتني برلين كثيراً.", level: "A1" },
    { id: "fc20", de: "die Fahrt", ar: "الرحلة، السفرة", example: "Die Fahrt hat vier Stunden gedauert.", exampleAr: "استغرقت الرحلة أربع ساعات.", level: "A1" },
    { id: "fc21", de: "treffen", ar: "يقابل، يلتقي", example: "In Berlin habe ich Nadia getroffen.", exampleAr: "في برلين قابلتُ نادية.", level: "A1" },
    { id: "fc22", de: "probieren", ar: "يجرّب، يذوق", example: "Ich habe eine Currywurst probiert.", exampleAr: "جرّبتُ الكاري فورست.", level: "A1" },
    { id: "fc23", de: "schmecken", ar: "يكون طعمه طيّباً", example: "Es hat mir gut geschmeckt.", exampleAr: "أعجبني طعمه.", level: "A1" },
    { id: "fc24", de: "deshalb", ar: "لذلك، لهذا السبب", example: "Es hat geregnet, deshalb sind wir ins Museum gegangen.", exampleAr: "أمطرت، لذلك ذهبنا إلى المتحف.", level: "A1" },
    { id: "fc25", de: "das Museum", ar: "المتحف", example: "Im Museum habe ich viel gelernt.", exampleAr: "في المتحف تعلّمتُ كثيراً.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل ═══ */
  mediation: [
    {
      id: "med-a1-14-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صديقك بالعربية",
      sourceDe: "Hallo! Am Samstag bin ich früh aufgestanden und bin nach Köln gefahren. Dort habe ich meinen Bruder besucht. Wir haben zusammen gegessen und sind am Rhein spazieren gegangen. Am Sonntag hat es geregnet, deshalb bin ich zu Hause geblieben.",
      taskAr: "صديقك لا يعرف الألمانية. لخّص له بالعربية ما فعله كاتب الرسالة يومَي السبت والأحد — ثلاث جملٍ تكفي.",
      modelAnswerAr: "«يوم السبت نهض مبكّراً وسافر إلى كولونيا وزار أخاه هناك. أكلا معاً وتمشّيا على نهر الراين. ويوم الأحد أمطرت فبقي في البيت.»",
      keyPointsAr: ["ذكرتَ السفر إلى كولونيا وزيارة الأخ", "ذكرتَ الأكل والتنزّه على النهر", "ذكرتَ المطر يوم الأحد والبقاء في البيت"],
    },
  ],
  interaction: [
    {
      id: "int-a1-14-1",
      scenarioAr: "زميلك في دورة اللغة يسألك يوم الاثنين عن عطلة أسبوعك.",
      scenarioDe: "Am Montag im Kurs: Ein Mitschüler fragt dich nach deinem Wochenende.",
      strategyAr: "الاستراتيجية: أجب بجملةٍ في Perfekt، ثمّ أضف تفصيلاً، ثمّ أعد السؤال إليه بـ«Und du?».",
      rounds: [
        {
          speakerDe: "Hallo! Was hast du am Wochenende gemacht?",
          speakerAr: "أهلاً! ماذا فعلتَ في عطلة الأسبوع؟",
          options: [
            { de: "Ich bin nach Hamburg gefahren und habe Freunde besucht.",
              ar: "سافرتُ إلى هامبورغ وزرتُ أصدقاء.", best: true, replyDe: "Oh, schön! Wie war das Wetter dort?", replyAr: "أوه، جميل! كيف كان الطقس هناك؟" },
            { de: "Ich habe nach Hamburg gefahren.", ar: "سافرتُ إلى هامبورغ. (بمساعدٍ خاطئ)", best: false, replyDe: "Du meinst „ich bin gefahren“, oder? Aber erzähl weiter!", replyAr: "تقصد «ich bin gefahren»، أليس كذلك؟ لكن أكمل!" },
          ],
        },
        {
          speakerDe: "Wie war das Wetter dort?",
          speakerAr: "كيف كان الطقس هناك؟",
          options: [
            { de: "Am Samstag hat es geregnet, aber am Sonntag hat die Sonne geschienen.",
              ar: "يوم السبت أمطرت، لكن يوم الأحد أشرقت الشمس.", best: true, replyDe: "Da hattest du Glück! Und was habt ihr gemacht?", replyAr: "كنتَ محظوظاً! وماذا فعلتم؟" },
            { de: "Das Wetter gut.", ar: "الطقس جيّد. (بلا فعل)", best: false, replyDe: "Du meinst, das Wetter war gut?", replyAr: "تقصد أنّ الطقس كان جيّداً؟" },
          ],
        },
        {
          speakerDe: "Und was habt ihr zusammen gemacht?",
          speakerAr: "وماذا فعلتم معاً؟",
          options: [
            { de: "Wir sind in die Stadt gegangen und haben in einem Café gefrühstückt.",
              ar: "ذهبنا إلى المدينة وتناولنا الفطور في مقهى.", best: true, replyDe: "Das klingt super! Und du, willst du bald wieder hinfahren?", replyAr: "يبدو رائعاً! وهل تريد السفر إلى هناك قريباً مرّةً أخرى؟" },
            { de: "Wir haben in die Stadt gegangen.", ar: "ذهبنا إلى المدينة. (بمساعدٍ خاطئ)", best: false, replyDe: "„Wir sind gegangen“ — gehen steht mit sein. Aber weiter!", replyAr: "«wir sind gegangen» — فـgehen مع sein. لكن أكمل!" },
          ],
        },
        {
          speakerDe: "Willst du bald wieder hinfahren?",
          speakerAr: "هل تريد السفر إلى هناك قريباً مرّةً أخرى؟",
          options: [
            { de: "Ja, ich will im Sommer wieder nach Hamburg fahren.",
              ar: "نعم، أريد السفر إلى هامبورغ ثانيةً في الصيف.", best: true, replyDe: "Super! Viel Spaß dann!", replyAr: "رائع! استمتع إذن!" },
            { de: "Ja, ich will fahren wieder.", ar: "نعم، أريد أسافر ثانيةً. (المصدر في غير موضعه)", best: false, replyDe: "Fast! Der Infinitiv steht am Ende, und „wieder“ kommt davor: „Ja, ich will im Sommer wieder nach Hamburg fahren.“", replyAr: "قريب! المصدر يأتي في الآخر: «wieder fahren»." },
          ],
        },
      ],
    },
  ],
};

