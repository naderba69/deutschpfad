import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-12: الطقس والفصول
 * — الطقس + es ist + صفة + فعل werden (يصبح) — إكمال الأفعال الثلاثة المساعدة
 */
export const lessonA112: Lesson = {
  id: "a1-12",
  unitId: "a1-12",
  level: "A1",
  order: 1,
  titleDe: "Wetter und Jahreszeiten",
  titleAr: "الطقس والفصول",
  duration: 30,
  summary:
    "الحديث عن الطقس: es ist kalt، عبارات المطر والشمس، فعل werden (يصبح) في المضارع — يكتمل به مثلث الأفعال المساعدة sein/haben/werden — وربط الطقس بالفصول.",
  lernziele: [
    { id: "z1", de: "Ich kann das Wetter beschreiben.", ar: "أن أصف الطقس: الجو مشمس، ممطر، بارد، حار." },
    { id: "z2", de: "Ich kann sagen: Es ist kalt / Es regnet / Die Sonne scheint.", ar: "أن أستخدم الصيغ الثلاث الأساسية للطقس." },
    { id: "z3", de: "Ich kann „werden“ konjugieren.", ar: "أن أصرف فعل werden (يصبح) — ثالث الأفعال المساعدة." },
    { id: "z4", de: "Ich kann das Wetter mit den Jahreszeiten verbinden.", ar: "أن أربط الطقس بالفصول: في الشتاء بارد، في الصيف حار." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "كيف تقول «يصبح الجو بارداً»؟ تذكرنا أن الأفعال المساعدة ثلاثة: sein (يكون) وhaben (يملك)... فما هو الثالث؟ إنه werden — وسيعطينا اليوم القدرة على وصف «التغيرات»: يصبح، سيكون.",
    motivatingQuestionDe: "Wie ist das Wetter heute?",
    contextAr:
      "نختم مستوى A1 بالطقس: نتعلم الصيغ الثلاث لوصفه، ونضيف فعل werden الذي ستحتاجه أيضاً في المستقبل (Futur) — لكن اليوم نكتفي بمعناه الأول: «يصبح».",
    contextDe: "Im Winter wird es kalt.",
    connectionToPreviousAr: "أكملنا في هذا المستوى sein (درس 1) وhaben (درس 3). اليوم نكمل المثلث بـ werden — وبه نغلق مستوى A1 بنجاح!",
    activateVocabulary: [
      { de: "das Wetter", ar: "الطقس" },
      { de: "die Sonne", ar: "الشمس" },
      { de: "der Regen", ar: "المطر" },
      { de: "kalt / warm", ar: "بارد / دافئ" },
      { de: "der Schnee", ar: "الثلج" },
    ],
  },

  /* مراجعة تراكمية (Interleaving): من الدروس a1-07 حتى a1-11 */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-07 — التسوق): كم الثمن؟",
      questionDe: "Was kostet das Brot?",
      questionAr: "كم ثمن الخبز؟",
      options: ["Zwei Euro fünfzig.", "Es ist zwei Euro.", "Ich bin zwei Euro.", "Das macht zwei Uhr."],
      correctIndex: 0,
      explanation: "السعر: Es kostet / Das macht + مبلغ — من درس a1-07.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-10 — العمل والمهن): النفي الصحيح:",
      template: "Ich ___ Lehrer. (لست معلماً) · Ich habe ___ Auto. (لا سيارة)",
      blanks: [
        { correct: "bin kein", options: ["bin kein", "bin nicht", "habe kein", "werde kein"] },
        { correct: "kein", options: ["kein", "nicht", "keine", "keinen"] },
      ],
      hint: "nicht مع الأفعال والصفات، kein مع الأسماء.",
      explanation: "Ich bin kein Lehrer (اسم → kein) / kein Auto (اسم → kein) — من درس a1-10.",
      errorType: "negation",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-11 — التنقل في المدينة، الاتجاه): افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich gehe nach der Bahnhof.",
      wrongWord: "nach der Bahnhof",
      correctWord: "zum Bahnhof",
      options: ["zum Bahnhof", "nach der Bahnhof", "in der Bahnhof", "zu die Bahnhof"],
      explanation: "مع الأماكن المغلقة: zu + dem = zum Bahnhof — من درس a1-11.",
      errorType: "preposition",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "وصف الطقس: es ist، es regnet، die Sonne scheint",
      titleDe: "Das Wetter beschreiben",
      explanationAr:
        "الطقس أوّل موضوعٍ يُفتح به الحديث في ألمانيا مع الغريب والجار والزميل. وله في الألمانية **ثلاث بنى** لا واحدة، ولكلٍّ موضعها.\n\n**البنية الأولى — es ist + صفة:** Es ist kalt · Es ist warm · Es ist sonnig · Es ist windig · Es ist neblig (ضبابيّ) · Es ist bewölkt (غائم).\nوانتبه: الصفة بعد ist **لا تأخذ نهاية** إطلاقاً — تماماً كما تعلّمت في درس الملابس (Das Hemd ist rot).\n\n**البنية الثانية — فعل الطقس وحده:** Es regnet (تمطر) · Es schneit (تثلج) · Es donnert (ترعد) · Es blitzt (تبرق) · Es friert (تتجمّد).\nوهذه أفعال **لا فاعل لها في الواقع**: من الذي يمطر؟ لا أحد. وes هنا مجرّد حاملٍ للفعل لأنّ الألمانية لا تقبل جملةً بلا فاعل ظاهر.\n\n**البنية الثالثة — اسم + فعل:** Die Sonne scheint (تشرق الشمس) · Der Wind weht (تهبّ الريح) · Der Himmel ist blau.\nوهنا فاعلٌ حقيقيّ، فتصريف الفعل يتبعه: Die Blätter fall**en** (جمع).\n\n**رابعاً — درجة الحرارة، وفيها فخّان:**\n· Es sind zwanzig **Grad**. — وGrad **لا تُجمع** بعد الأعداد: zwanzig Grad لا zwanzig Grade.\n· وتحت الصفر: Es sind **minus** fünf Grad. أو الأدقّ: fünf Grad **unter null**.\n· ولاحظ **sind** لا ist: العدد جمعٌ فالفعل جمع. أمّا Es ist ein Grad فبالمفرد.\n\n**خامساً — الفخّ الشهير: Mir ist kalt مقابل Ich bin kalt.**\n· **Es ist kalt.** = الجوّ بارد (وصف موضوعيّ للطقس)\n· **Mir ist kalt.** = أشعر بالبرد (إحساسٌ شخصيّ — بالدّاتيف كما تعلّمت في gefallen)\n· **Ich bin kalt.** = أنا إنسانٌ بارد المشاعر! (وصفٌ للشخصية لا للإحساس)\nوالثالثة تُسمع مضحكةً أو مُهينة، وهي من أشهر زلّات المتعلّمين على الإطلاق.",
      whyAr:
        "لماذا es وليس شيئاً آخر؟ لأنّ الجملة الألمانية **لا تقوم بلا فاعل مصرَّف معه فعل** — وهذا شرطٌ بنيويّ لا استثناء له. وأفعال الطقس بطبيعتها بلا فاعل: المطر ينزل من غير مُنزِل مذكور. فاخترعت الألمانية فاعلاً صورياً فارغاً من المعنى هو es، وظيفته الوحيدة أن يملأ المقعد الأوّل ليصحّ البناء. ويسمّيه النحاة **Scheinsubjekt** أي الفاعل الظاهريّ.\n\nولماذا يقع العربيّ في Ich bin kalt تحديداً؟ لأنّ العربية تقول „أنا بردان“ فتُسند الإحساس إلى المتكلّم مباشرةً بالمبتدأ. والألمانية تُسنده إليه بالدّاتيف: **mir** ist kalt، أي „البرد واقعٌ عليّ“. وهذا هو المنطق نفسه الذي رأيته في das gefällt mir — الشعور يقع على الشخص ولا يصدر عنه. فمن فهم gefallen فهم mir ist kalt بلا حفظٍ جديد.\n\nوأمّا الطقس بوصفه موضوعاً فليس حشواً ثقافياً: امتحان Goethe A1 يستعمله في Hören (نشرة الطقس) وفي Sprechen (المحادثة الافتتاحية). والألمان يفتحون به كلّ حديث لأنّه الموضوع الوحيد الذي لا يخصّ أحداً فلا يُعدّ تطفّلاً.",
      table: {
        title: "صيغ الطقس الثلاث",
        columns: ["الصيغة", "مثال", "المعنى"],
        rows: [
          { label: "es ist + صفة", cells: ["Es ist kalt.", "الجو بارد"] },
          { label: "es ist + صفة", cells: ["Es ist sonnig.", "الجو مشمس"] },
          { label: "فعل الطقس", cells: ["Es regnet.", "تمطر"] },
          { label: "فعل الطقس", cells: ["Es schneit.", "تثلج"] },
          { label: "اسم + فعل", cells: ["Die Sonne scheint.", "تشرق الشمس"] },
          { label: "اسم + فعل", cells: ["Der Wind weht.", "تهب الرياح"] },
        ],
      },
      examples: [
        {"de": "Es ist kalt und windig.", "ar": "الجوّ بارد وعاصف."},
        {"de": "Heute ist es sehr sonnig.", "ar": "اليوم الجوّ مشمس جداً."},
        {"de": "Es regnet seit drei Stunden.", "ar": "تمطر منذ ثلاث ساعات."},
        {"de": "Im Winter schneit es oft.", "ar": "في الشتاء تثلج كثيراً."},
        {"de": "Die Sonne scheint und der Himmel ist blau.", "ar": "الشمس مشرقة والسماء زرقاء."},
        {"de": "Es sind zwanzig Grad.", "ar": "الحرارة عشرون درجة. (Grad بلا جمع، والفعل sind)"},
        {"de": "Heute Nacht sind es minus fünf Grad.", "ar": "الليلة خمس درجات تحت الصفر."},
        {"de": "Mir ist kalt. Hast du eine Jacke?", "ar": "أشعر بالبرد. أعندك سترة؟ (إحساس ⇐ mir)"},
      ],
      comparisonWithArabic:
        "العربية تقول „الجوّ بارد“ بجملة اسمية بلا فعل، والألمانية Es ist kalt بفعلٍ واجب. فأوّل ما يسقط من العربيّ هو ist.\n\nوأمّا es فأقرب مقابلٍ لها في العربية هو **الضمير المستتر في „تُمطر“**: من الذي يُمطر؟ لا أحد بعينه، والفعل مؤنّث بلا مؤنّثٍ ظاهر. فالظاهرة نفسها موجودة في العربية لكنّها **مستترة**، وفي الألمانية **ظاهرة** بحرفين. وهذا يريح المتعلّم: الفكرة مألوفة، والجديد إظهارها فقط.\n\nوالفرق الحادّ في التعبير عن الإحساس. العربية تقول:\n· „أنا بردان“ ⟵ مبتدأ وخبر، الإحساس صفةٌ للمتكلّم.\nوالألمانية تقول:\n· **Mir** ist kalt ⟵ بالدّاتيف، الإحساس واقعٌ على المتكلّم.\nفالنقل الحرفيّ يُنتج Ich bin kalt وهي جملة صحيحة نحواً وخاطئة معنىً — تصف شخصيتك لا شعورك. وهذا أخطر أنواع الخطأ لأنّه لا يُصحَّح تلقائياً: مخاطبك يفهم شيئاً آخر ولا يعلم أنّك أخطأت.",
      eselsbruecke:
        "«es = الجو»: كلما رأيت es مع الطقس ترجمها ذهنياً «الجو/هي»: Es regnet = الجو يمطر. وسهّلها: es ist kalt = الجو بارد.",
      commonMistakes: [
        {"wrong": "Ich bin kalt.", "right": "Mir ist kalt.", "whyAr": "Ich bin kalt تعني «أنا إنسان بارد المشاعر» — وصفٌ لشخصيتك لا لإحساسك. والإحساس في الألمانية يقع على الشخص بالدّاتيف: mir ist kalt، بالمنطق نفسه الذي في das gefällt mir."},
        {"wrong": "Es regnen.", "right": "Es regnet.", "whyAr": "es ضمير مفرد للغائب فيلزمه تصريف er/sie/es أي regnet. والصيغة regnen مصدرٌ أو جمع، ولا موضع لهما هنا لأنّ فاعل الطقس مفرد دائماً."},
        {"wrong": "Der Wetter ist schön.", "right": "Das Wetter ist schön.", "whyAr": "das Wetter محايدة لا مذكّرة. والخطأ يأتي من أنّ «الجوّ» مذكّر في العربية فينقل المتعلّم الجنس من لغته — وهو أشيع مصادر خطأ الأدوات كلّها."},
        {"wrong": "Es ist zwanzig Grade.", "right": "Es sind zwanzig Grad.", "whyAr": "خطآن: Grad لا تُجمع بعد الأعداد (كما Euro وJahr)، والعدد جمعٌ فالفعل sind لا ist. وقارن: Es ist ein Grad بالمفرد لأنّ العدد واحد."},
      ],
      relatedRuleComparison: {
        title: "Mir ist kalt أم Ich bin kalt؟",
        content: "للشعور الشخصي: Mir ist kalt (أشعر بالبرد — الجر). للطقس العام: Es ist kalt. وIch bin kalt تعني «أنا شخص بارد المشاعر»! احذرها.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل werden (يصبح) — إكمال مثلث الأفعال المساعدة",
      titleDe: "Das Verb „werden“: ich werde, du wirst...",
      explanationAr:
        "مع الطقس تحتاج فعلاً يعبّر عن **التحوّل** لا عن الحالة: الجوّ ليس بارداً فحسب بل **يصير** بارداً. وهذا الفعل هو **werden**.\n\n**أوّلاً — التصريف، وفيه شذوذان:**\nich werde · du **wirst** · er/sie/es **wird** · wir werden · ihr werdet · sie/Sie werden\nلاحظ سقوط حرف e في du wirst وer wird — فلا تقل du werdest ولا er werdet. وهذا شذوذٌ في الجذر يشبه ما رأيته في du nimmst وer nimmt.\n\n**ثانياً — الوظيفة اليوم: التحوّل من حالٍ إلى حال.**\n· Es **wird** kalt. (يصير الجوّ بارداً — لم يكن كذلك قبل قليل)\n· Die Tage **werden** kürzer. (تصير الأيّام أقصر)\n· Ich **werde** müde. (بدأ التعب يأخذني)\n\n**ثالثاً — المثلّث الذي يكتمل اليوم.** الألمانية تقوم على ثلاثة أفعال مساعدة:\n· **sein** ⟵ الحالة القائمة: Es **ist** kalt.\n· **haben** ⟵ الملكية: Ich **habe** einen Schirm.\n· **werden** ⟵ التحوّل: Es **wird** kalt.\nوأنت تعرف الثلاثة الآن. وهذه الأفعال ليست مفردات بل **هياكل**: عليها يُبنى الماضي التامّ (habe/bin gemacht) والمستقبل (werde machen) والمبنيّ للمجهول (wird gemacht). فما تحفظه اليوم صفحةٌ واحدة تُقرأ منها ثلاثة أبواب لاحقة.\n\n**رابعاً — werden مع الاسم لا الصفة فقط.**\n· Er **wird** Arzt. (سيصير طبيباً — بلا أداة كما في Ich bin Lehrer)\n· Es **wird** Winter. (يدخل الشتاء)\n\n**خامساً — تمييزٌ حاسم: ist مقابل wird.**\n· Es **ist** kalt ⟵ الحالة الآن. · Es **wird** kalt ⟵ التحوّل أو التنبّؤ.\nوكلتاهما صحيحة، والفرق زمنيّ لا صوابيّ: الأولى تصف، والثانية تُنبئ بتغيّر.",
      whyAr:
        "لماذا يُعدّ werden ثالث الأفعال المساعدة ولا يُعامَل معاملة فعلٍ عاديّ؟ لأنّه سيحمل لاحقاً ثلاث بنى كاملة لا واحدة: المستقبل (Ich werde lernen) والمبنيّ للمجهول (Das Haus wird gebaut) وصيغة التمنّي (Ich würde gern …). فمن أتقن تصريفه اليوم في معناه البسيط „يصير“، وجد الأبواب الثلاثة نصفَ مفتوحة حين يصلها.\n\nولماذا يسقط حرف e في du wirst وer wird؟ للسبب الصوتيّ نفسه الذي يحكم أفعالاً كثيرة: تتابع rd مع النهاية st ثقيل، فتحذف الألمانية العلّة الوسطى. وهذه ليست قاعدةً تُقاس بل نمطٌ يتكرّر في الأفعال القديمة الشائعة — وشيوعها هو ما حفظ شذوذها من الاندثار.\n\nولماذا نُقدّم werden في درس الطقس بالذات؟ لأنّ الطقس هو الظاهرة التي **تتحوّل** أمام عينيك: يصفو ثمّ يغيم، يدفأ ثمّ يبرد. فالمعنى محسوس والفعل يلتصق به. ولو قُدّم في سياقٍ مجرّد لحُفظ جدولاً وأُنسي.",
      table: {
        title: "تصريف werden",
        columns: ["الضمير", "werden", "مثال"],
        rows: [
          { label: "ich", cells: ["werde", "Ich werde müde."] },
          { label: "du", cells: ["wirst", "Du wirst schnell."] },
          { label: "er/sie/es", cells: ["wird", "Es wird kalt."] },
          { label: "wir", cells: ["werden", "Wir werden alt."] },
          { label: "ihr", cells: ["werdet", "Ihr werdet müde."] },
          { label: "sie/Sie", cells: ["werden", "Sie werden stark."] },
        ],
      },
      examples: [
        {"de": "Im Herbst werden die Blätter bunt.", "ar": "في الخريف تصير الأوراق ملوّنة. (جمع ⇐ werden)"},
        {"de": "Es wird kalt. Nimm eine Jacke mit!", "ar": "يصير الجوّ بارداً. خذ سترةً معك!"},
        {"de": "Ich werde müde.", "ar": "بدأت أتعب."},
        {"de": "Du wirst schnell besser.", "ar": "ستتحسّن بسرعة. (du ⇐ wirst بلا e)"},
        {"de": "Das Wetter wird morgen besser.", "ar": "يصير الطقس أفضل غداً."},
        {"de": "Es wird Winter und die Tage werden kürzer.", "ar": "يدخل الشتاء وتصير الأيّام أقصر."},
        {"de": "Mein Bruder wird Arzt.", "ar": "أخي سيصير طبيباً. (مهنة بلا أداة)"},
        {"de": "Es ist kalt, aber morgen wird es wärmer.", "ar": "الجوّ بارد، لكن غداً يصير أدفأ."},
      ],
      comparisonWithArabic:
        "العربية تملك مقابلاً دقيقاً لـwerden هو **„صار / يصير“** وأخواتها من أفعال التحوّل (أصبح، أمسى، بات). والتطابق ممتاز: Es wird kalt = يصير الجوّ بارداً.\n\nلكنّ فرقاً بنيوياً يستحقّ الانتباه: „صار“ في العربية من أخوات كان، **ترفع المبتدأ وتنصب الخبر**: صار الجوُّ بارداً. أمّا werden فلا تُغيّر شيئاً في الإعراب — الصفة بعدها عاريةٌ بلا نهاية: Es wird kalt، لا kaltes ولا kalten. فالعربية تُثقل والألمانية تُخفّف، عكس ما اعتاده المتعلّم.\n\nوفرقٌ ثانٍ في المستقبل: العربية تُعبّر عنه بحرفٍ يلتصق بالفعل (سـ / سوف). والألمانية تستعمل werden فعلاً مساعداً مستقلاًّ يدفع الفعل الأصليّ إلى آخر الجملة. فحين تصل إلى المستقبل في B1 لن تتعلّم كلمةً جديدة، بل ستتعلّم **موضعاً جديداً** لفعلٍ تعرفه أصلاً.\n\nوأخيراً تنبيه: العربية تخلط أحياناً بين „هو بارد“ و„صار بارداً“ في الكلام السريع، والألمانية لا تخلط أبداً. فاختر بوعي: ist للوصف، wird للتحوّل.",
      eselsbruecke:
        "«فِردِن = يصبح»: كل تغير = werden. وأشهر استخدام: Es wird kalt. احفظ السلم: فِردِه-ڤيرست-ڤيرت، فِردِن-ڤيردِت-فِردِن.",
      commonMistakes: [
        {"wrong": "Du werdest müde.", "right": "Du wirst müde.", "whyAr": "werden يسقط منه حرف e في du وer: wirst وwird. وهو شذوذ في الجذر يشبه du nimmst وer nimmt، وسببه صوتيّ محض: تتابع rd مع st ثقيل على اللسان."},
        {"wrong": "Ich wird müde.", "right": "Ich werde müde.", "whyAr": "wird صيغة الغائب المفرد وحده. والخطأ يأتي من أنّ es wird أكثر ما يُسمع في نشرة الطقس، فيحفظها المتعلّم صيغةً واحدة ويعمّمها على كلّ الضمائر."},
        {"wrong": "Es wird kaltes.", "right": "Es wird kalt.", "whyAr": "الصفة الخبرية بعد werden وsein لا تأخذ نهاية إطلاقاً، تماماً كما في Das Hemd ist rot. والنهاية لا تُضاف إلّا إذا سبقت الصفة اسماً: ein kalter Tag."},
        {"wrong": "Es wird kalt. (بمعنى: الجوّ بارد الآن)", "right": "Es ist kalt.", "whyAr": "wird تدلّ على تحوّلٍ أو تنبّؤ لا على حالة قائمة. فمن أراد وصف اللحظة الراهنة قال ist. والفرق زمنيّ لا صوابيّ، لكنّ اختيار الخطأ يُفهم منه أنّ البرد لم يحلّ بعد."},
      ],
      relatedRuleComparison: {
        title: "werden الآن وwerden في المستقبل",
        content: "اليوم: werden + صفة = يصبح (Es wird kalt). في B1: werden + Infinitiv = المستقبل (Ich werde lernen). نفس الفعل، وظيفتان — وأنت تعرف نصفه الآن!",
      },
    },
    {
      id: "t3",
      titleAr: "im أم am أم um؟ حروف الجر الزمنية مجموعةً",
      titleDe: "Zeitangaben ordnen: im, am, um und ohne Präposition",
      explanationAr:
        "تعلّمتَ الساعة في درس اليوم، والأيّام والتواريخ في درس المواعيد، والفصول هنا. وقد آن أوان جمع الحروف الثلاثة في قاعدةٍ واحدة تُحفظ مرّةً وتكفيك.\n\n**القاعدة الأساسية — سُلَّم من الصغير إلى الكبير:**\n· **um** ⟵ الساعة وحدها: um acht Uhr · um halb neun\n· **am** ⟵ الأيّام وأوقات اليوم والتواريخ: am Montag · am Abend · am 3. Mai\n· **im** ⟵ الشهور والفصول والسنوات: im Mai · im Sommer · im Jahr 2026\nكلّما اتّسعت المدّة تقدّم الحرف في السُلَّم: لحظةٌ فيوم فشهر.\n\n**ثانياً — أربعة تُقال بلا حرف جرّ إطلاقاً:** heute · morgen · gestern · jeden Tag. فلا تقل am heute ولا im morgen.\n\n**ثالثاً — استثناءٌ واحد يُحفظ: in der Nacht** (في الليل). كلّ أوقات اليوم تأخذ am — am Morgen, am Mittag, am Abend — إلّا الليل. والسبب أنّ die Nacht مؤنّثة، وan + der لا تندمجان في am (الاندماج يقع مع dem وحده). فالشذوذ صرفيّ لا اعتباطيّ.\n\n**رابعاً — فخّ morgen مزدوج:**\n· **morgen** بحرفٍ صغير = غداً ⟵ Morgen regnet es.\n· **am Morgen** بحرفٍ كبير = في الصباح ⟵ Am Morgen ist es kalt.\n· وللجمع بينهما: **morgen früh** = غداً صباحاً.\nكلمتان مختلفتان تماماً لا يفرّق بينهما إلّا حرفٌ كبير — وهذا سببٌ إضافيّ للعناية بالحروف الكبيرة في الألمانية.\n\n**خامساً — حروفٌ زمنية أخرى تحتاجها مع الطقس:**\n· **seit** + Dativ = منذ ⟵ Es regnet **seit** drei Stunden.\n· **in** + Dativ = بعد (زمنٌ قادم) ⟵ **In** einer Stunde hört es auf. (بعد ساعة يتوقّف)\n· **ab** = ابتداءً من ⟵ **Ab** morgen wird es wärmer.\nوانتبه إلى in: لا تعني „في“ هنا بل „بعد“. فقولك in einer Woche يعني بعد أسبوعٍ من الآن لا خلاله.",
      whyAr:
        "لماذا نجمعها في درس الطقس؟ لأنّ الحديث عن الطقس لا يخلو من زمن: „في الصيف حارّ“، „غداً تمطر“، „صباح الاثنين باردة“. وحين تتفرّق القاعدة على ثلاثة دروس يحفظ المتعلّم كلّ جزءٍ منفصلاً ثمّ يخلط بينها عند الكلام. الجدول الواحد يمنع هذا الخلط.\n\nولماذا هذه القسمة تحديداً — um للساعة وam لليوم وim للشهر؟ لأنّها ليست اعتباطاً بل تعكس **حجم الوحدة الزمنية**. حرف an الأصليّ يعني الملامسة من الخارج (تلمس اليوم كما تلمس سطحاً)، وحرف in يعني الاحتواء من الداخل (الشهر يحتويك)، وum يعني الإحاطة بنقطة (الساعة نقطة تدور حولها). فالحروف احتفظت بمعناها المكانيّ الأصليّ ونقلته إلى الزمن — وهذا يفسّر لك لماذا لا يجوز التبديل بينها.\n\nوأمّا فخّ morgen فمسألة امتحان: في Hören يقول المتحدّث Morgen früh أو Am Morgen، والفرق بينهما يومٌ كامل. ومن لا يميّزهما بالأذن يخسر السؤال وإن فهم كلّ كلمةٍ أخرى في الجملة.",
      table: {
        title: "متى تستعمل أيّها",
        columns: ["الحرف", "يُستعمل مع", "مثال"],
        rows: [
          { label: "im", cells: ["الشهور والفصول", "Im Winter ist es kalt."] },
          { label: "am", cells: ["الأيام والتواريخ وأوقات اليوم", "Am Montag regnet es."] },
          { label: "um", cells: ["الساعة فقط", "Um sieben Uhr ist es noch dunkel."] },
          { label: "بلا حرف", cells: ["heute, morgen, gestern", "Morgen scheint die Sonne."] },
          { label: "in der", cells: ["الليل (استثناء)", "In der Nacht wird es kühl."] },
        ],
      },
      examples: [
        {"de": "Im Sommer ist es in Tunis sehr heiß.", "ar": "في الصيف الجوّ حارّ جداً في تونس."},
        {"de": "Am Wochenende bleibe ich zu Hause.", "ar": "في عطلة الأسبوع أبقى في البيت."},
        {"de": "Morgen wird es kalt.", "ar": "غداً يصير الجوّ بارداً. (بلا حرف جرّ)"},
        {"de": "Am Abend regnet es oft im Herbst.", "ar": "في المساء تمطر كثيراً في الخريف."},
        {"de": "In der Nacht sind es nur fünf Grad.", "ar": "في الليل تكون خمس درجات فقط. (استثناء)"},
        {"de": "Es regnet seit drei Stunden.", "ar": "تمطر منذ ثلاث ساعات."},
        {"de": "In einer Stunde hört der Regen auf.", "ar": "بعد ساعة يتوقّف المطر. (in = بعد)"},
        {"de": "Ab morgen wird es wärmer.", "ar": "ابتداءً من غد يصير الجوّ أدفأ."},
      ],
      comparisonWithArabic:
        "العربية تكتفي بحرف واحد لكلّ هذه المعاني: „في الصيف“، „في الاثنين“، „في الثامنة“. والعربيّ يميل إذاً إلى استعمال in لكلّ شيء فيقول in Montag وin acht Uhr.\n\nوالألمانية توزّع الأزمنة على ثلاثة حروف بحسب حجم الوحدة الزمنية. وهذه دقّةٌ إضافية لا تقابلها العربية بشيء، فالمتعلّم مطالبٌ بتصنيفٍ لا تطلبه لغته الأمّ.\n\nلكنّ نقطة التقاء تستحقّ الاستثمار: العربية أيضاً تقول „اليومَ“ و„غداً“ و„أمسِ“ **بلا حرف جرّ** — منصوبةً على الظرفية. والألمانية كذلك: heute · morgen · gestern عاريةٌ من الحروف. فالقاعدة الرابعة مألوفة للعربيّ تماماً وتحتاج تنبيهاً لا تدريباً.\n\nوأمّا **in** بمعنى „بعد“ فمصيدةٌ حقيقية: العربيّ يقرأ in einer Stunde فيفهم „خلال ساعة“، والألمانية تعني „بعد ساعةٍ من الآن“. والفرق عمليّ: من قال in einer Stunde bin ich da فقد وعد بالوصول بعد ساعة لا خلالها.",
      eselsbruecke:
        "سُلَّم من الصغير إلى الكبير: **um** ساعة ← **am** يوم ← **im** شهر وفصل. كلّما اتّسعت المدّة تقدّم الحرف في السُلَّم. واليوم وغده وأمسه أحرار بلا حرف.",
      commonMistakes: [
        {"wrong": "In Montag regnet es.", "right": "Am Montag regnet es.", "whyAr": "الأيّام تأخذ am لا in. والخطأ ناتج عن ترجمة «في» العربية حرفياً، والعربية تستعمل حرفاً واحداً حيث تستعمل الألمانية ثلاثة بحسب حجم الوحدة الزمنية."},
        {"wrong": "Am morgen scheint die Sonne. (بمعنى: غداً)", "right": "Morgen scheint die Sonne.", "whyAr": "فخّ مزدوج: morgen (غداً) تُقال بلا حرف جرّ، أمّا am Morgen (بحرف كبير) فتعني «في الصباح» — كلمتان مختلفتان تماماً لا يفرّق بينهما إلّا حرف كبير."},
        {"wrong": "Am der Nacht ist es kalt.", "right": "In der Nacht ist es kalt.", "whyAr": "كلّ أوقات اليوم تأخذ am إلّا الليل. والسبب صرفيّ: die Nacht مؤنّثة، وan + der لا تندمجان في am لأنّ الاندماج يقع مع dem وحده. فالشذوذ له علّة لا يُحفظ صمّاً."},
        {"wrong": "In einer Stunde = خلال ساعة", "right": "In einer Stunde = بعد ساعة", "whyAr": "in الزمنية تعني «بعد» لا «خلال». فمن قال in einer Stunde bin ich da فقد وعد بالوصول بعد ساعة من الآن. وللدلالة على «خلال» تُستعمل innerhalb أو in + الفترة مع سياقٍ مختلف."},
      ],
      relatedRuleComparison: {
        title: "wann؟ ثلاثة أحرف وجواب واحد",
        content:
          "كل هذه الحروف تُجيب عن سؤال واحد: wann? (متى؟). وفي درس المدينة أخذت wohin? (إلى أين) بحروفها nach/zu، وفي درس السكن wo? (أين) بحروف الجرّ المكانية. ثلاثة أسئلة، ثلاث مجموعات — لا تخلط بينها.",
      },
    },
    {
      id: "t4",
      titleAr: "أدوات الربط الأربع: und · aber · oder · denn",
      titleDe: "Konjunktionen: und, aber, oder, denn",
      explanationAr:
        "تعرف الآن كيف تصف الطقس بجملةٍ واحدة. والحديث الحقيقيّ عن الطقس لا يكون بجملة بل بجملتين مربوطتين: „الجوّ بارد **لكنّ** الشمس مشرقة“، „أبقى في البيت **لأنّ** المطر ينزل“. وهنا تحتاج **أدوات الربط**.\n\n**أوّلاً — الأدوات الأربع الأساسية:**\n· **und** = و (إضافة) ⟵ Es ist kalt **und** windig.\n· **aber** = لكن (تضادّ) ⟵ Es ist kalt, **aber** die Sonne scheint.\n· **oder** = أو (اختيار) ⟵ Gehen wir spazieren **oder** bleiben wir zu Hause?\n· **denn** = لأنّ (سبب) ⟵ Ich bleibe zu Hause, **denn** es regnet.\n\n**ثانياً — القاعدة الذهبية: هذه الأربع لا تُحسب موضعاً في الجملة.**\nوهذه أهمّ جملة في الكتلة كلّها. أنت تعلم أنّ الفعل المصرَّف يقع في **المركز الثاني** دائماً. والسؤال: إذا وضعتُ aber في أوّل الجملة الثانية، أفلا تصير هي المركز الأوّل فيُزاح الفعل؟\n**لا.** الأدوات الأربع تجلس **خارج** الجملة في موضعٍ يسمّيه النحاة **الموضع صفر (Position 0)**. فالجملة بعدها تبدأ من جديد كأنّ الأداة غير موجودة:\n· Es ist kalt, **aber** | **die Sonne** (١) | **scheint** (٢).\n· Ich bleibe zu Hause, **denn** | **es** (١) | **regnet** (٢).\nلاحظ: الفاعل أوّلاً والفعل ثانياً — الترتيب الطبيعيّ لم يتغيّر بشيء.\n\n**ثالثاً — الفاصلة.** قبل **aber** و**denn** فاصلةٌ **واجبة**. وقبل **und** و**oder** **لا فاصلة** في الغالب. وهذه ليست تفصيلاً تجميلياً: قسم Schreiben في الامتحان يُقيّم علامات الترقيم.\n\n**رابعاً — denn ليست weil.** كلتاهما تعني „لأنّ“، والفرق في ترتيب الجملة:\n· **denn** ⟵ الترتيب عاديّ: Ich bleibe zu Hause, denn **es regnet**.\n· **weil** ⟵ الفعل يذهب إلى **آخر** الجملة: Ich bleibe zu Hause, weil **es regnet**.\nمع es regnet لا يظهر الفرق لأنّ الجملة من كلمتين. لكن قارن: denn **das Wetter ist** schlecht ⟵ weil das Wetter schlecht **ist**. وweil بابٌ كامل يأتيك في A2؛ اكتفِ اليوم بـdenn وهي الأسهل والأشيع في الكلام.",
      whyAr:
        "لماذا نُدرّس أدوات الربط في درس الطقس؟ لأنّ الطقس هو الموضوع الذي يُتكلَّم فيه بالجمل المزدوجة بطبعه. لا أحد يقول „الجوّ بارد“ ويسكت؛ بل يقول „بارد لكن مشمس“، „يمطر لذلك آخذ المظلّة“. فالموضوع نفسه يستدعي الأداة، والقاعدة التي يستدعيها الموضوع تُحفظ.\n\nولماذا نُلحّ على **الموضع صفر** بهذا القدر؟ لأنّه سوء الفهم الأكبر في هذه المرحلة. المتعلّم الذي أتقن قاعدة V2 إتقاناً حقيقياً — وهو إتقانٌ مطلوب — سيقول لنفسه: „aber احتلّت المركز الأوّل، إذن أُزيح الفاعل“، فيُنتج Es ist kalt, aber scheint die Sonne. وهذا خطأٌ **ناتج عن فهمٍ صحيح** طُبّق في غير موضعه، ولا يُصحّحه إلّا التصريح بأنّ هذه الأربع خارج العدّ.\n\nوالتمييز بين denn وweil استثمارٌ مبكّر: من عرف اليوم أنّ denn لا تُحرّك الفعل، أدرك غداً حين يرى weil أنّ الفرق بينهما **بنيويّ لا معنويّ**، فيتعلّم الجملة الثانوية على أساسٍ متين بدل أن يخلط الأداتين شهوراً كما يفعل أكثر المتعلّمين.",
      table: {
        title: "الأدوات الأربع ووظائفها",
        columns: ["الأداة", "المعنى", "الفاصلة قبلها؟"],
        rows: [
          { label: "und", cells: ["و (إضافة)", "لا"] },
          { label: "aber", cells: ["لكن (تضادّ)", "نعم — واجبة"] },
          { label: "oder", cells: ["أو (اختيار)", "لا"] },
          { label: "denn", cells: ["لأنّ (سبب)", "نعم — واجبة"] },
          { label: "الأربع معاً", cells: ["الموضع صفر: لا تُحسب", "الفعل يبقى ثانياً"] },
        ],
      },
      examples: [
        { de: "Es ist kalt und windig.", ar: "الجوّ بارد وعاصف." },
        { de: "Es ist kalt, aber die Sonne scheint.", ar: "الجوّ بارد لكنّ الشمس مشرقة. (الفاعل أوّلاً بعد aber)" },
        { de: "Ich bleibe zu Hause, denn es regnet.", ar: "أبقى في البيت لأنّها تمطر." },
        { de: "Gehen wir spazieren oder bleiben wir hier?", ar: "أنذهب في نزهة أم نبقى هنا؟" },
        { de: "Im Sommer ist es heiß, aber im Winter wird es kalt.", ar: "في الصيف حارّ، لكن في الشتاء يصير بارداً." },
        { de: "Ich nehme den Regenschirm mit, denn das Wetter ist schlecht.", ar: "آخذ المظلّة معي لأنّ الطقس سيّئ." },
        { de: "Heute schneit es und morgen wird es noch kälter.", ar: "اليوم تثلج وغداً يصير أبرد." },
        { de: "Der Himmel ist grau, aber es regnet nicht.", ar: "السماء رمادية لكنّها لا تمطر." },
      ],
      comparisonWithArabic:
        "العربية تربط بالواو والفاء وثمّ ولكنّ ولأنّ — وأدواتها لا تُغيّر ترتيب ما بعدها إطلاقاً، لأنّ العربية أصلاً لا تعرف قاعدة المركز الثاني. فالعربيّ محظوظ هنا: الأدوات الأربع الألمانية تتصرّف كما تتصرّف أدواته تماماً.\n\nلكنّ ثلاثة فروق تستحقّ الانتباه:\n**١. الواو العربية تُستعمل أكثر بكثير من und.** العربية تصل الجمل بالواو حتّى حين لا تكون هناك إضافة حقيقية، والألمانية تعدّ ذلك ركاكةً. فلا تبدأ كلّ جملة بـund كما تبدأ بالواو في العربية.\n**٢. „لكنّ“ العربية تنصب ما بعدها**، وaber لا تفعل شيئاً بالإعراب — تجلس ولا تعمل.\n**٣. الفاصلة.** العربية تتساهل في الفاصلة، والألمانية تفرضها قبل aber وdenn فرضاً. ومن أهملها خسر نقاطاً في التصحيح الرسميّ.\n\nوأمّا التطابق الجميل فهو **denn = لأنّ**: كلتاهما تعلّل، وكلتاهما تُبقي الجملة بعدها على ترتيبها الطبيعيّ. فإن ترجمتَ „لأنّ“ إلى denn لم تخطئ أبداً في A1.",
      eselsbruecke:
        "**الأربع تجلس ولا تعمل**: und · aber · oder · denn تقف على عتبة الجملة ولا تدخلها، فلا تُحسب موضعاً ولا تُزيح فاعلاً. واحفظ الفاصلة بقاعدة النصف: النصف الذي فيه **a**ber و**d**enn يأخذ فاصلة، والنصف الآخر لا.",
      commonMistakes: [
        {
          wrong: "Es ist kalt, aber scheint die Sonne.",
          right: "Es ist kalt, aber die Sonne scheint.",
          whyAr: "خطأٌ ناتج عن فهمٍ صحيح طُبّق في غير موضعه: المتعلّم ظنّ أنّ aber احتلّت المركز الأوّل فأزاح الفاعل. والأربع تقع في الموضع صفر خارج العدّ، فالجملة بعدها تبدأ من جديد بترتيبها الطبيعيّ.",
        },
        {
          wrong: "Ich bleibe zu Hause denn es regnet.",
          right: "Ich bleibe zu Hause, denn es regnet.",
          whyAr: "الفاصلة قبل denn واجبة لا اختيارية، وكذلك قبل aber. وقسم Schreiben في الامتحان يُقيّم علامات الترقيم، فإهمالها خسارة نقاطٍ لا مجرّد عيبٍ شكليّ.",
        },
        {
          wrong: "Ich bleibe zu Hause, denn das Wetter schlecht ist.",
          right: "Ich bleibe zu Hause, denn das Wetter ist schlecht.",
          whyAr: "خلطٌ بين denn وweil: الفعل يذهب إلى آخر الجملة مع weil وحدها. أمّا denn فتُبقي الترتيب عادياً — فاعل ثمّ فعل. وهذا هو الفرق البنيويّ الوحيد بينهما.",
        },
        {
          wrong: "Es ist kalt und aber sonnig.",
          right: "Es ist kalt, aber sonnig.",
          whyAr: "أداتان متتاليتان لا تجتمعان. والعربية تقول «وَلكنْ» فتجمع بينهما جمعاً مألوفاً، فينقل المتعلّم العادة. والألمانية تكتفي بواحدة: aber وحدها تحمل معنى الاستدراك.",
        },
      ],
      relatedRuleComparison: {
        title: "الموضع صفر مقابل المركز الأوّل",
        content:
          "قارن ثلاث جمل بعناية: (١) **Die Sonne scheint.** الفاعل في المركز الأوّل. (٢) **Heute scheint die Sonne.** الظرف احتلّ المركز الأوّل فانزاح الفاعل إلى الثالث — هذه قاعدة V2 من درس اليوم اليوميّ. (٣) **…, aber die Sonne scheint.** الأداة في الموضع صفر فلم تُزح شيئاً. والفرق بين الحالتين ٢ و٣ هو جوهر هذه الكتلة: الظرف **داخل** الجملة فيُحسب، والأداة **خارجها** فلا تُحسب.",
      },
    },
  ],
  reading: {
    "id": "read-a1-12",
    "titleDe": "Vier Jahreszeiten, vier Wetter",
    "titleAr": "أربعة فصول، أربعة أجواء",
    "textType": "blog",
    "paragraphs": [
      "Hallo! Ich heiße Amine und ich komme aus Tunis. Seit einem Jahr wohne ich in Hamburg und studiere hier. In meinem Blog schreibe ich heute über das deutsche Wetter, denn es ist wirklich anders als zu Hause.",
      "Im Sommer ist es in Hamburg oft schön. Die Sonne scheint, es sind fünfundzwanzig Grad und die Tage sind sehr lang. Um zweiundzwanzig Uhr ist es noch hell! Aber der Sommer hier ist kurz, und manchmal regnet es auch im Juli.",
      "Im Herbst wird es schnell kalt. Die Blätter werden bunt und der Wind weht stark. Am Morgen ist es oft neblig, aber am Nachmittag scheint manchmal die Sonne. Ich nehme jetzt immer einen Regenschirm mit, denn das Wetter ändert sich sehr schnell.",
      "Der Winter ist für mich am schwersten. Es ist kalt und dunkel, und in der Nacht sind es minus fünf Grad. Manchmal schneit es. Das ist schön, aber mir ist immer kalt! In Tunis habe ich nie eine dicke Jacke gebraucht, hier brauche ich zwei.",
      "Und dann kommt der Frühling. Ab März wird es wärmer, die Tage werden länger und alles wird grün. Das ist meine Lieblingsjahreszeit, denn nach dem langen Winter ist jeder Sonnentag ein kleines Fest.",
      "Und wie ist das Wetter bei euch? Schreibt mir bitte in den Kommentaren! Morgen soll es hier übrigens regnen. In einer Woche fahre ich nach Tunis, und dort sind es dreißig Grad. Ich freue mich schon!"
    ],
    "paragraphsAr": [
      "أهلاً! اسمي أمين وأنا من تونس. أسكن في هامبورغ منذ سنة وأدرس هنا. في مدوّنتي أكتب اليوم عن الطقس الألمانيّ، لأنّه مختلف حقاً عمّا في بلدي.",
      "في الصيف يكون الجوّ في هامبورغ جميلاً غالباً. الشمس مشرقة، والحرارة خمس وعشرون درجة، والأيّام طويلة جداً. في العاشرة مساءً ما زال النهار! لكنّ الصيف هنا قصير، وأحياناً تمطر حتّى في يوليو.",
      "في الخريف يصير الجوّ بارداً بسرعة. تصير الأوراق ملوّنة وتهبّ الريح بقوّة. في الصباح يكون الجوّ ضبابياً غالباً، لكن بعد الظهر تشرق الشمس أحياناً. صرت آخذ المظلّة معي دائماً، لأنّ الطقس يتبدّل بسرعة شديدة.",
      "الشتاء هو الأصعب عليّ. الجوّ بارد ومظلم، وفي الليل تكون الحرارة خمس درجات تحت الصفر. أحياناً تثلج. هذا جميل، لكنّي أشعر بالبرد دائماً! في تونس لم أحتج قطّ إلى سترة سميكة، وهنا أحتاج اثنتين.",
      "ثمّ يأتي الربيع. ابتداءً من مارس يصير الجوّ أدفأ، وتصير الأيّام أطول، ويخضرّ كلّ شيء. هذا فصلي المفضّل، لأنّ كلّ يومٍ مشمس بعد الشتاء الطويل عيدٌ صغير.",
      "وكيف الطقس عندكم؟ اكتبوا لي في التعليقات من فضلكم! وبالمناسبة يُتوقّع أن تمطر هنا غداً. بعد أسبوع أسافر إلى تونس، وهناك الحرارة ثلاثون درجة. أنا متشوّق!"
    ],
    "glossary": [
      {
        "de": "das Wetter ändert sich",
        "ar": "الطقس يتبدّل",
        "noteAr": "فعل انعكاسيّ: sich ändern."
      },
      {
        "de": "neblig",
        "ar": "ضبابيّ",
        "noteAr": "من der Nebel (الضباب)."
      },
      {
        "de": "der Wind weht",
        "ar": "تهبّ الريح",
        "noteAr": "اسم + فعل، ثالث بنى الطقس."
      },
      {
        "de": "bunt",
        "ar": "ملوّن، زاهي الألوان",
        "noteAr": "Die Blätter werden bunt."
      },
      {
        "de": "der Regenschirm",
        "ar": "المظلّة",
        "noteAr": "مركّبة: Regen (مطر) + Schirm."
      },
      {
        "de": "minus fünf Grad",
        "ar": "خمس درجات تحت الصفر",
        "noteAr": "وGrad لا تُجمع بعد العدد."
      },
      {
        "de": "mir ist kalt",
        "ar": "أشعر بالبرد",
        "noteAr": "بالدّاتيف؛ وIch bin kalt معناها آخر."
      },
      {
        "de": "in der Nacht",
        "ar": "في الليل",
        "noteAr": "استثناء وحيد بين أوقات اليوم."
      },
      {
        "de": "ab März",
        "ar": "ابتداءً من مارس",
        "noteAr": "مدى مفتوح."
      },
      {
        "de": "in einer Woche",
        "ar": "بعد أسبوع",
        "noteAr": "in الزمنية = بعد، لا خلال."
      },
      {
        "de": "die Lieblingsjahreszeit",
        "ar": "الفصل المفضّل",
        "noteAr": "Lieblings- بادئة تعني «المفضّل»."
      },
      {
        "de": "hell / dunkel",
        "ar": "مضيء / مظلم",
        "noteAr": "Um zweiundzwanzig Uhr ist es noch hell."
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Wie lange wohnt Amine schon in Hamburg?",
        "errorType": "preposition",
        "options": [
          "Seit einem Jahr",
          "Seit einer Woche",
          "Seit fünf Jahren",
          "Seit einem Monat"
        ],
        "correctIndex": 0,
        "paragraph": 0,
        "explanation": "Seit einem Jahr wohne ich in Hamburg — وseit تعني «منذ» وتطلب الجرّ."
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Was sagt Amine über den Sommer in Hamburg?",
        "errorType": "vocabulary",
        "options": [
          "Er ist schön, aber kurz.",
          "Er ist sehr lang.",
          "Es regnet nie.",
          "Es sind vierzig Grad."
        ],
        "correctIndex": 0,
        "paragraph": 1,
        "explanation": "الجوّ جميل والأيّام طويلة، لكنّه يقول: Aber der Sommer hier ist kurz."
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Warum nimmt Amine im Herbst immer einen Regenschirm mit?",
        "errorType": "grammar",
        "options": [
          "Denn das Wetter ändert sich schnell.",
          "Denn es schneit immer.",
          "Denn er hat keine Jacke.",
          "Denn es ist zu heiß."
        ],
        "correctIndex": 0,
        "paragraph": 2,
        "explanation": "denn das Wetter ändert sich sehr schnell — وdenn أداة سبب تُبقي ترتيب الجملة عادياً."
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Wie kalt ist es im Winter in der Nacht?",
        "errorType": "vocabulary",
        "options": [
          "Minus fünf Grad",
          "Fünf Grad",
          "Fünfzehn Grad",
          "Null Grad"
        ],
        "correctIndex": 0,
        "paragraph": 3,
        "explanation": "in der Nacht sind es minus fünf Grad — ولاحظ sind لا ist مع العدد الجمع."
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Welche Jahreszeit mag Amine am liebsten?",
        "errorType": "vocabulary",
        "options": [
          "Den Frühling",
          "Den Winter",
          "Den Herbst",
          "Den Sommer"
        ],
        "correctIndex": 0,
        "paragraph": 4,
        "explanation": "Das ist meine Lieblingsjahreszeit — يقولها عن الربيع، لأنّ كلّ يوم مشمس بعد الشتاء عيدٌ صغير."
      }
    ],
    "redemittel": [
      {
        "de": "Wie ist das Wetter heute?",
        "ar": "كيف الطقس اليوم؟"
      },
      {
        "de": "Es ist sonnig / bewölkt / neblig.",
        "ar": "الجوّ مشمس / غائم / ضبابيّ."
      },
      {
        "de": "Es sind zwanzig Grad.",
        "ar": "الحرارة عشرون درجة."
      },
      {
        "de": "Mir ist kalt / warm.",
        "ar": "أشعر بالبرد / بالدفء."
      },
      {
        "de": "Es wird kälter / wärmer.",
        "ar": "يصير الجوّ أبرد / أدفأ."
      },
      {
        "de": "Es regnet seit … Stunden.",
        "ar": "تمطر منذ … ساعات."
      },
      {
        "de": "Morgen soll es regnen.",
        "ar": "يُتوقّع أن تمطر غداً."
      },
      {
        "de": "Nimm einen Regenschirm mit!",
        "ar": "خذ مظلّة معك!"
      }
    ],
    "discussionAr": "صف طقس بلدك في الفصول الأربعة: أيّ فصلٍ تفضّل ولماذا؟ اكتب خمس جمل على الأقلّ، واربط بينها بـund وaber وdenn، واستعمل werden مرّةً للتعبير عن التحوّل."
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "تقرير الطقس",
        lines: [
          { speaker: "Sprecherin", de: "Guten Morgen! Das Wetter heute: Am Morgen ist es kalt und windig.", ar: "صباح الخير! طقس اليوم: صباحاً الجو بارد وعاصف." },
          { speaker: "Sprecherin", de: "Am Nachmittag scheint die Sonne und es wird warm.", ar: "بعد الظهر تشرق الشمس ويصبح الجو دافئاً." },
          { speaker: "Sprecherin", de: "Am Abend regnet es in Berlin.", ar: "مساءً تمطر في برلين." },
          { speaker: "Sprecherin", de: "Und morgen? Morgen schneit es in den Bergen.", ar: "وغداً؟ غداً تثلج في الجبال." },
        ],
      },
      {
        id: "l2",
        title: "الطقس والفصول",
        lines: [
          { speaker: "Mona", de: "Wie ist das Wetter im Sommer in Tunesien?", ar: "كيف الطقس صيفاً في تونس؟" },
          { speaker: "Sami", de: "Im Sommer ist es sehr heiß und sonnig.", ar: "صيفاً يكون الجو حاراً جداً ومشمساً." },
          { speaker: "Mona", de: "Und im Winter?", ar: "وفي الشتاء؟" },
          { speaker: "Sami", de: "Im Winter ist es kalt und es regnet oft.", ar: "شتاءً يكون الجو بارداً وتمطر كثيراً." },
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
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was passiert am Abend in Berlin?",
        questionAr: "ماذا يحدث مساءً في برلين؟",
        options: ["Es regnet.", "Es schneit.", "Die Sonne scheint.", "Es ist heiß."],
        correctIndex: 0,
        explanation: "قالت: Am Abend regnet es in Berlin — تمطر.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie ist es im Sommer in Tunesien?",
        questionAr: "كيف الطقس صيفاً في تونس؟",
        options: ["sehr heiß und sonnig", "kalt und regnerisch", "windig", "es schneit"],
        correctIndex: 0,
        explanation: "قال سامي: Im Sommer ist es sehr heiß und sonnig.",
        errorType: "vocabulary",
      },
    ],
  },
  pronunciation: {
    id: "p1",
    title: "أصوات الطقس: sch، وw",
    items: [
      { de: "das Wetter", ar: "الطقس", note: "w = ڤ: ڤِتّر" },
      { de: "die Sonne", ar: "الشمس", note: "o قصيرة + n مزدوجة: زونّـِه" },
      { de: "der Regen", ar: "المطر", note: "e طويلة مغلقة = إي + g بين حركتين = غ شديدة (لا خ): رِيغِن" },
      { de: "der Schnee", ar: "الثلج", note: "sch = ش + ee طويلة: شنيه" },
      { de: "kalt / warm", ar: "بارد / دافئ", note: "warm = ڤارم (w = ڤ)" },
      { de: "der Wind", ar: "الرياح", note: "W = ڤ + i قصير: ڤِنت" },
    ],
    tip: "لاحظ: Schnee بحرف e مزدوج (طويل) — ستفهم سبب مضاعفة الحروف بعد درسين من الإملاء.",
    shadowing: [
      { de: "Es ist kalt.", ar: "الجو بارد.", tip: "kalt = كالت (a قصيرة)" },
      { de: "Die Sonne scheint.", ar: "تشرق الشمس.", tip: "scheint = شاينت (ei = آي)" },
      { de: "Es regnet heute.", ar: "تمطر اليوم.", tip: "regnet = رِيغنِت" },
      { de: "Im Winter schneit es.", ar: "في الشتاء تثلج.", tip: "schneit = شنايت" },
    ],
  },
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "صف طقس اليوم:",
      prompt: "Wie ist das Wetter heute? (اكتب جملة كاملة)",
      acceptedAnswers: ["Es ist sonnig", "Es ist kalt", "Es regnet", "Die Sonne scheint"],
      sampleAnswer: "Heute ist es sonnig und warm.",
      explanation: "الصيغة: (Heute) ist es + صفة. أو Es regnet لوصف المطر.",
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
      explanation: "في الشتاء يصبح الجو بارداً — wird (werden مع es).",
      errorType: "spelling",
    },
  ],
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "___ ist kalt.",
      options: ["Es", "Ich", "Er", "Sie"],
      correctIndex: 0,
      explanation: "الجو بارد: Es ist kalt (es الغامض للطقس).",
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
      explanation: "مع es: wird.",
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
        { left: "der Wind", right: "الرياح" },
      ],
      explanation: "عناصر الطقس الأربعة الأساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Es", "heute", "regnet", "."],
      correctSentence: "Es regnet heute.",
      explanation: "تمطر اليوم: Es + regnet (V2) + heute.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich bin kalt.",
      wrongWord: "Ich bin",
      correctWord: "Es ist",
      options: ["Es ist", "Ich werde", "Du bist", "Er ist"],
      explanation: "للطقس: Es ist kalt. للشعور الشخصي: Mir ist kalt. Ich bin kalt = بارد المشاعر!",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ ist أو wird:",
      template: "Jetzt ___ es kalt. Im Oktober ___ es kalt.",
      blanks: [
        { correct: "ist", options: ["ist", "wird"] },
        { correct: "wird", options: ["ist", "wird"] },
      ],
      explanation: "الآن → ist (حالة). في أكتوبر → wird (تغير متوقع).",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى المستقبل المنطقي:",
      prompt: "Es ist warm. (في الصيف → يصبح)",
      acceptedAnswers: ["Im Sommer wird es warm", "Es wird warm im Sommer"],
      sampleAnswer: "Im Sommer wird es warm.",
      explanation: "التغير المتوقع: wird + صفة.",
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
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Der Wetter ist schön.",
      wrongWord: "Der Wetter",
      correctWord: "Das Wetter",
      options: ["Das Wetter", "Die Wetter", "Ein Wetter", "Den Wetter"],
      explanation: "das Wetter محايد دائماً.",
      errorType: "gender",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Sonne scheint und der Wind weht.",
      explanation: "تشرق الشمس وتهب الرياح — اسم + فعل لكل عنصر.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الزمني الصحيح:",
      template: "___ Winter ist es kalt. ___ Montag regnet es. ___ acht Uhr ist es noch dunkel.",
      blanks: [
        { correct: "Im", options: ["Im", "Am", "Um"] },
        { correct: "Am", options: ["Am", "Im", "Um"] },
        { correct: "Um", options: ["Um", "Am", "Im"] },
      ],
      explanation: "الفصل ⇒ im · اليوم ⇒ am · الساعة ⇒ um. سُلَّم من الكبير إلى الصغير.",
      errorType: "preposition",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "In Montag scheint die Sonne.",
      wrongWord: "In",
      correctWord: "Am",
      options: ["Am", "In", "Um", "Im"],
      explanation: "أيام الأسبوع تأخذ am دائماً: Am Montag.",
      errorType: "preposition",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "أيّ جملة تعني «غداً تمطر»؟",
      questionDe: "morgen + regnen",
      questionAr: "اختر الصياغة الصحيحة:",
      options: [
        "Morgen regnet es.",
        "Am morgen regnet es.",
        "Im Morgen regnet es.",
        "Um morgen regnet es.",
      ],
      correctIndex: 0,
      explanation: "morgen (غداً) تُستعمل بلا حرف جرّ. أمّا am Morgen فتعني «في الصباح» لا «غداً».",
      optionExplanations: [
        undefined,
        "am Morgen تعني «في الصباح» — معنىً آخر تماماً.",
        "im لا تُستعمل مع أوقات اليوم أصلاً.",
        "um للساعة المحدّدة فقط.",
      ],
      errorType: "preposition",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة عن طقس الفصل:",
      tokens: ["Im", "Sommer", "ist", "es", "sehr", "heiß", "."],
      correctSentence: "Im Sommer ist es sehr heiß.",
      explanation: "تقديم الظرف يبقي الفعل ثانياً: Im Sommer · ist · es …",
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
      ],
      sampleAnswer: "Im Winter ist es in Deutschland kalt.",
      explanation: "الفصول تأخذ im: im Winter.",
      errorType: "preposition",
    },
    {"id": "e16", "type": "multiple-choice", "instructionAr": "اختر الصيغة الصحيحة للتعبير عن الإحساس:", "questionDe": "Brr! ___ kalt. Hast du eine Jacke?", "options": ["Mir ist", "Ich bin", "Es bin", "Mich ist"], "correctIndex": 0, "errorType": "case", "explanation": "الإحساس الشخصيّ بالدّاتيف: Mir ist kalt. أمّا Ich bin kalt فتعني «أنا إنسان بارد المشاعر»."},
    {"id": "e17", "type": "error-correction", "instructionAr": "صحّح تصريف فعل الطقس:", "wrongSentence": "Es regnen seit zwei Stunden.", "wrongWord": "regnen", "correctWord": "regnet", "options": ["regnet", "regne", "regnest", "geregnet"], "errorType": "conjugation", "explanation": "es ضمير مفرد للغائب فيلزمه regnet. وregnen مصدر لا يصلح فعلاً مصرَّفاً في المركز الثاني."},
    {"id": "e18", "type": "error-correction", "instructionAr": "صحّح تصريف werden:", "wrongSentence": "Du werdest bald müde.", "wrongWord": "werdest", "correctWord": "wirst", "options": ["wirst", "wird", "werde", "werdet"], "errorType": "conjugation", "explanation": "werden يسقط منه حرف e في du وer: du wirst · er wird. وهو شذوذ صوتيّ يشبه du nimmst."},
    {"id": "e19", "type": "fill-blank", "instructionAr": "أكمل بأداة الربط المناسبة:", "errorType": "grammar", "template": "Es ist kalt, ___ die Sonne scheint. Ich bleibe zu Hause, ___ es regnet.", "blanks": [{"correct": "aber", "options": ["aber", "denn", "oder", "und"], "errorType": "grammar"}, {"correct": "denn", "options": ["denn", "aber", "oder", "und"], "errorType": "grammar"}], "explanation": "الأولى تضادّ ⇐ aber، والثانية سبب ⇐ denn. وكلتاهما تسبقها فاصلة واجبة، ولا تُزيح الفاعل."},
    {"id": "e20", "type": "error-correction", "instructionAr": "صحّح ترتيب الجملة بعد أداة الربط:", "wrongSentence": "Es ist kalt, aber scheint die Sonne.", "wrongWord": "scheint die Sonne", "correctWord": "die Sonne scheint", "options": ["die Sonne scheint", "scheint die Sonne", "die Sonne scheinen", "scheint sie die Sonne"], "errorType": "word-order", "explanation": "الأدوات الأربع تقع في الموضع صفر خارج العدّ، فلا تُزيح الفاعل. والجملة بعدها تبدأ بترتيبها الطبيعيّ: فاعل ثمّ فعل."},
    {"id": "e21", "type": "multiple-choice", "instructionAr": "اختر الحرف الزمنيّ الصحيح:", "questionDe": "___ Winter ist es kalt, aber ___ Montag scheint die Sonne.", "options": ["Im … am", "Am … im", "In … an", "Um … am"], "correctIndex": 0, "errorType": "preposition", "explanation": "im للفصول والشهور، وam للأيّام. والسُلَّم: um للساعة ⇐ am لليوم ⇐ im للشهر والفصل."},
    {"id": "e22", "type": "error-correction", "instructionAr": "صحّح حرف الجرّ الزمنيّ:", "wrongSentence": "Am der Nacht sind es fünf Grad.", "wrongWord": "Am", "correctWord": "In", "options": ["In", "Um", "Im", "An"], "errorType": "preposition", "explanation": "كلّ أوقات اليوم تأخذ am إلّا الليل: in der Nacht. والسبب صرفيّ — die Nacht مؤنّثة وan + der لا تندمجان."},
    {"id": "e23", "type": "word-ordering", "instructionAr": "رتّب الكلمات لتكوّن جملة بأداة ربط:", "tokens": ["Ich", "nehme", "den", "Schirm", "mit", ",", "denn", "es", "regnet"], "correctSentence": "Ich nehme den Schirm mit , denn es regnet.", "errorType": "word-order", "explanation": "الفعل المنفصل mitnehmen يترك جزأه في آخر الجملة الأولى، ثمّ تأتي الفاصلة فـdenn فجملة بترتيب طبيعيّ."},
    {"id": "e24", "type": "transformation", "instructionAr": "حوّل الجملة من وصف حالة إلى تعبير عن تحوّل:", "prompt": "Es ist kalt. ⇐ (يصير بارداً)", "errorType": "conjugation", "acceptedAnswers": ["Es wird kalt.", "Es wird kalt"], "sampleAnswer": "Es wird kalt.", "explanation": "sein للحالة القائمة وwerden للتحوّل. والصفة بعد werden عاريةٌ بلا نهاية تماماً كما بعد sein."},
    {"id": "e25", "type": "matching", "instructionAr": "صِل كلّ بنية بمثالها الصحيح:", "errorType": "grammar", "pairs": [{"left": "es ist + صفة", "right": "Es ist neblig."}, {"left": "فعل طقس بلا فاعل", "right": "Es schneit."}, {"left": "اسم + فعل", "right": "Der Wind weht."}, {"left": "إحساس شخصيّ", "right": "Mir ist kalt."}, {"left": "تحوّل", "right": "Es wird kälter."}], "explanation": "خمس بنى مختلفة لموضوع واحد: ثلاث لوصف الطقس، وواحدة للإحساس، وواحدة للتحوّل."},
    {"id": "e26", "type": "fill-blank", "instructionAr": "أكمل بالحرف الزمنيّ الصحيح:", "errorType": "preposition", "template": "Es regnet ___ drei Stunden, aber ___ einer Stunde hört es auf.", "blanks": [{"correct": "seit", "options": ["seit", "in", "ab", "für"], "errorType": "preposition"}, {"correct": "in", "options": ["in", "seit", "nach", "ab"], "errorType": "preposition"}], "explanation": "seit للماضي المستمرّ (منذ)، وin الزمنية للمستقبل (بعد). وin لا تعني «خلال» هنا."},
  ],
  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich bin kalt (تعني بارد المشاعر!)", right: "Es ist kalt / Mir ist kalt", whyAr: "الطقس: es. الشعور: mir. الشخص: لا تقلها إطلاقاً!" },
      { wrong: "Es ist regnen (خلط الصيغ)", right: "Es regnet.", whyAr: "فعل الطقس يتصرف: regnet وليس ist regnen." },
      { wrong: "Ich werde كلمة لا تصرف (wird دائماً)", right: "Ich werde، du wirst، er wird", whyAr: "werden يتصرف مثل أي فعل: سلم فِردِن." },
    ],
    eselsbruecken: [
      "«es = الجو» في الطقس: es regnet = الجو يمطر، es ist kalt = الجو بارد.",
      "«werden = يصبح»: كل تغير werden. سلمها: فِردِه، ڤيرست، ڤيرت.",
    ],
    culturalNote: {
      title: "حديث الطقس — موضوع الألمان المفضل",
      content:
        "الألمان يعشقون الحديث عن الطقس كمقدمة مهذبة لأي محادثة: «Schönes Wetter heute, oder?» (جو جميل اليوم، أليس كذلك؟). وفي الخريف يكثر «Das Wetter ist unbeständig» (الطقس متقلب). تعلم عبارتين وستكسر الجليد في أي لقاء!",
    },
  },
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "___ regnet heute.",
      options: ["Es", "Ich", "Er", "Das"],
      correctIndex: 0,
      explanation: "فعل الطقس مع es: Es regnet.",
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
      explanation: "في الشتاء يصبح الجو بارداً: Im Winter + wird + es kalt.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich werde kalt. (عن الطقس)",
      wrongWord: "Ich werde",
      correctWord: "Es wird",
      options: ["Es wird", "Du wirst", "Wir werden", "Ihr werdet"],
      explanation: "للطقس: Es wird kalt (يصبح بارداً). لا تستخدم ضمير شخص مع kalt للطقس.",
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
    { id: "fc1", de: "das Wetter", ar: "الطقس", example: "Das Wetter ist schön.", exampleAr: "الطقس جميل.", level: "A1" },
    { id: "fc2", de: "die Sonne", ar: "الشمس", example: "Die Sonne scheint.", exampleAr: "تشرق الشمس.", level: "A1" },
    { id: "fc3", de: "der Regen", ar: "المطر", example: "Es regnet.", exampleAr: "تمطر.", level: "A1" },
    { id: "fc4", de: "der Schnee", ar: "الثلج", example: "Im Winter schneit es.", exampleAr: "في الشتاء تثلج.", level: "A1" },
    { id: "fc5", de: "kalt / warm / heiß", ar: "بارد / دافئ / حار", example: "Im Sommer ist es heiß.", exampleAr: "في الصيف الجو حار.", level: "A1" },
    { id: "fc6", de: "werden", ar: "يصبح", example: "Es wird kalt.", exampleAr: "يصبح الجو بارداً.", level: "A1" },
    { id: "fc7", de: "der Wind", ar: "الرياح", example: "Der Wind weht.", exampleAr: "تهب الرياح.", level: "A1" },
    { id: "fc8", de: "die Jahreszeit", ar: "الفصل (من السنة)", example: "Der Sommer ist meine Lieblingsjahreszeit.", exampleAr: "الصيف فصلي المفضل.", level: "A1" },
    { id: "fc9", de: "im Sommer / im Winter", ar: "في الصيف / في الشتاء", example: "Im Winter schneit es oft.", exampleAr: "في الشتاء تثلج كثيراً.", level: "A1" },
    { id: "fc10", de: "am Montag / um acht Uhr", ar: "يوم الاثنين / في الثامنة", example: "Am Montag um acht Uhr.", exampleAr: "يوم الاثنين في الثامنة.", level: "A1" },
    {"id": "fc11", "de": "aber", "ar": "لكن (أداة ربط)", "example": "Es ist kalt, aber die Sonne scheint.", "exampleAr": "الجوّ بارد لكنّ الشمس مشرقة.", "level": "A1"},
    {"id": "fc12", "de": "denn", "ar": "لأنّ (أداة ربط بترتيب عاديّ)", "example": "Ich bleibe zu Hause, denn es regnet.", "exampleAr": "أبقى في البيت لأنّها تمطر.", "level": "A1"},
    {"id": "fc13", "de": "Mir ist kalt.", "ar": "أشعر بالبرد", "example": "Mir ist kalt. Hast du eine Jacke?", "exampleAr": "أشعر بالبرد. أعندك سترة؟", "level": "A1"},
    {"id": "fc14", "de": "neblig / bewölkt", "ar": "ضبابيّ / غائم", "example": "Am Morgen ist es oft neblig.", "exampleAr": "في الصباح يكون الجوّ ضبابياً غالباً.", "level": "A1"},
    {"id": "fc15", "de": "der Regenschirm", "ar": "المظلّة", "example": "Nimm einen Regenschirm mit!", "exampleAr": "خذ مظلّة معك!", "level": "A1"},
    {"id": "fc16", "de": "minus fünf Grad", "ar": "خمس درجات تحت الصفر", "example": "In der Nacht sind es minus fünf Grad.", "exampleAr": "في الليل الحرارة خمس تحت الصفر.", "level": "A1"},
    {"id": "fc17", "de": "seit (+ Dativ)", "ar": "منذ", "example": "Es regnet seit drei Stunden.", "exampleAr": "تمطر منذ ثلاث ساعات.", "level": "A1"},
    {"id": "fc18", "de": "in einer Stunde", "ar": "بعد ساعة", "example": "In einer Stunde hört der Regen auf.", "exampleAr": "بعد ساعة يتوقّف المطر.", "level": "A1"},
    {"id": "fc19", "de": "der Himmel", "ar": "السماء", "example": "Der Himmel ist grau.", "exampleAr": "السماء رمادية.", "level": "A1"},
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-12-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نشرة طقس بالعربية",
      sourceDe: "Morgen regnet es. Die Temperatur ist 15 Grad. Am Wochenende wird es sonnig und warm.",
      taskAr: "انقل النشرة بالعربية: طقس الغد، درجة الحرارة، وطقس نهاية الأسبوع.",
      modelAnswerAr: "«غداً ستمطر. درجة الحرارة 15. في نهاية الأسبوع سيكون مشمساً ودافئاً.»",
      keyPointsAr: ["نقلت المطر غداً", "ذكرت درجة الحرارة (15)", "نقلت طقس نهاية الأسبوع"],
    },
  ],
      interaction: [
    {
      id: "int-a1-12-1",
      scenarioAr: "صديق يسأل عن طقس مدينتك.",
      scenarioDe: "Ein Freund fragt nach dem Wetter in deiner Stadt.",
      strategyAr: "الاستراتيجية: وصف الطقس (Es ist kalt/sonnig...).",
      rounds: [
        {
          speakerDe: "Wie ist das Wetter bei dir?",
          speakerAr: "كيف الطقس عندك؟",
          options: [
            { de: "Heute ist es sonnig und warm.", ar: "اليوم مشمس ودافئ.", best: true, replyDe: "Schön! Hier regnet es.", replyAr: "جميل! هنا تمطر." },
            { de: "Das Wetter ist heute gegessen.", ar: "الطقس اليوم مأكول.", best: false, replyDe: "Man sagt nicht „gegessen“ für Wetter!", replyAr: "لا يُقال «مأكول» عن الطقس!" },
          ],
        },
        {
          speakerDe: "Wie ist die Temperatur?",
          speakerAr: "كم درجة الحرارة؟",
          options: [
            { de: "Es sind 25 Grad. Sehr angenehm.", ar: "25 درجة. مريح جداً.", best: true, replyDe: "Das ist perfekt für einen Spaziergang!", replyAr: "هذا مثالي للمشي!" },
            { de: "Es sind minus 30 Grad.", ar: "30 تحت الصفر.", best: false, replyDe: "Bei 25 Grad? Das glaube ich nicht.", replyAr: "عند 25 درجة؟ لا أصدق ذلك." },
          ],
        },
      ],
    },
  ],

};