import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-00: الأبجدية والنطق — أساس كل شيء
 * (يُفتح قبل درس التعارف مباشرة ضمن الوحدة الأولى)
 */
export const lessonA100: Lesson = {
  id: "a1-00",
  unitId: "a1-01",
  level: "A1",
  order: 0,
  titleDe: "Das Alphabet und die Aussprache",
  titleAr: "الأبجدية الألمانية والنطق",
  duration: 35,
  summary:
    "الحروف الستة والعشرون + الحروف المعلمة (ä, ö, ü) وß + الأصوات المركبة (ch, sch, ei, ie, eu, äu, sp, st, pf, tz) — مع تمارين نطق مكثفة مصممة لأخطاء المتعلم العربي.",

  /* 1) الأهداف */
  lernziele: [
    { id: "z1", de: "Ich kann das Alphabet buchstabieren.", ar: "أن أتهجّى الحروف الألمانية الستة والعشرين بصوت صحيح." },
    { id: "z2", de: "Ich kann die Umlaute ä, ö, ü aussprechen.", ar: "أن أنطق الحروف المعلمة ä وö وü نطقاً صحيحاً (أصعب ما يواجه العربي)." },
    { id: "z3", de: "Ich kenne die wichtigsten Laute: ch, sch, ei, ie, eu, äu, sp, st, pf, tz, ß.", ar: "أن أتقن الأصوات المركبة الأساسية التي لا وجود لها في العربية." },
    { id: "z4", de: "Ich kann meinen Namen auf Deutsch buchstabieren.", ar: "أن أتهجّى اسمي بالألمانية (مهم جداً في الهاتف والاستمارات)." },
  ],

  /* 2) التمهيد */
  einfuehrung: {
    motivatingQuestionAr:
      "هل تعلم أن الحرف V في الألمانية يُنطق مثل حرف F أحياناً؟ وأن W ليست كما في الإنجليزية؟ وأن الحرف S بين حرفين علة يُنطق Z؟ خمّن: كيف تنطق كلمة «Vogel» (طائر)؟",
    motivatingQuestionDe: "Wie spricht man „Vogel“ aus?",
    contextAr:
      "الألمانية لغة «صوتية جداً»: كل حرف تقريباً يُنطق دائماً بنفس الصوت (عكس الإنجليزية). لهذا إذا أتقنت الأبجدية والأصوات المركبة في هذا الدرس، ستستطيع قراءة أي كلمة ألمانية تراها لأول مرة — حتى لو لم تعرف معناها!",
    contextDe: "Wer das Alphabet kann, kann fast alles lesen!",
    connectionToPreviousAr: "هذا درسك التأسيسي الأول — بعده مباشرة تتعلم التحيات والتعارف في الدرس A1-01.",
    activateVocabulary: [
      { de: "der Buchstabe", ar: "الحرف" },
      { de: "das Alphabet", ar: "الأبجدية" },
      { de: "aussprechen", ar: "ينطق" },
      { de: "der Name", ar: "الاسم" },
      { de: "buchstabieren", ar: "يتهجّى" },
    ],
  },

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "الحروف الستة والعشرون + الحروف المعلمة وß",
      titleDe: "Das Alphabet, die Umlaute und das ß",
      explanationAr:
        "الأبجدية الألمانية تقوم على **26 حرفاً لاتينياً** هي نفسها حروف الإنجليزية، ثمّ تُضيف إليها **ثلاثة حروف معلَّمة** (Umlaute): ä و ö و ü، وحرفاً واحداً لا نظير له في أيّ لغة أخرى هو **ß** (Eszett، ويُسمّى أيضاً scharfes S).\n\n**من أين جاءت العلامتان فوق الحرف؟** ليستا زخرفاً. في الألمانية القديمة كان يُكتب فوق الحرف حرفُ **e** صغير للدلالة على أنّ الصوت قد «أُمِيل» نحو الأمام بتأثير مقطعٍ لاحق فيه i أو e — وهي ظاهرة يسمّيها اللغويون **الإمالة** (Umlaut). ثمّ اختُصر الـ e الصغير مع الزمن إلى نقطتين. ولهذا تجد إلى اليوم الكتابة البديلة عند تعذّر لوحة المفاتيح الألمانية: ä = ae، ö = oe، ü = ue، ß = ss. فـ Müller تُكتب Mueller في جواز السفر، وStraße تُكتب Strasse في سويسرا (التي ألغت ß نهائياً).\n\n**لماذا هي أصوات مستقلّة لا تنويعات؟** لأنّها **تفرّق بين المعاني**، وهذا هو المعيار اللغوي الوحيد المعتبر:\n• schon (سبق أن) ≠ schön (جميل)\n• Mutter (أمّ) ≠ Mütter (أمّهات)\n• Vogel (طائر) ≠ Vögel (طيور)\nفالإمالة في المثالين الأخيرين ليست تفصيلاً صوتياً بل هي **علامة الجمع نفسها**. مَن لا ينطق ä و ö و ü لا يستطيع التفريق بين المفرد والجمع في مئات الكلمات.\n\n**كيف تنطقها عملياً؟** هذه أدقّ وصفة للناطق بالعربية:\n• **ü**: ضُمّ شفتيك كأنّك تقول «أوو»، ثمّ — والشفتان مضمومتان لا تتحرّكان — قل «إيي». الناتج هو ü. جرّب: über, Tür, Bücher.\n• **ö**: قل «أوه»، ثمّ — والشفتان مستديرتان — قل «إيه». الناتج ö. جرّب: schön, hören, Köln.\n• **ä**: أسهلها؛ هي فتحة ممالة قريبة من «إيه» في «بيت» بالعامية التونسية. جرّب: Käse, Mädchen.\n• **ß**: صوت s قويّ غير مجهور دائماً، ولا يُنطق «ز» أبداً. ويأتي بعد حرف علّة طويل أو صوت مزدوج: Straße, weiß, groß.\n\n**قاعدة الترتيب في المعاجم:** الحروف المعلَّمة لا تحصل على مدخلٍ مستقلّ؛ تُرتَّب ä مع a و ö مع o و ü مع u. فلا تبحث عن Ärzte في آخر المعجم.",
      whyAr:
        "لأنّ الأبجدية ليست درساً تمهيدياً يُقفَز عنه، بل هي **الأداة التي ستستعملها كلّ أسبوع طوال حياتك في ألمانيا**. حين تحجز موعداً في مكتب الأجانب (Ausländerbehörde)، وحين تفتح حساباً مصرفياً، وحين تعطي عنوانك في الهاتف، سيقال لك حتماً: «Buchstabieren Sie bitte!» — تهجَّ من فضلك. ومَن لا يعرف أنّ الحرف W يُنطق «ڤاو» والحرف V يُنطق «فاو» والحرف Y يُنطق «إبسيلون» سيُكتب اسمه خطأً في وثيقةٍ رسمية، وتصحيح الوثائق في ألمانيا أشقّ من استخراجها. وهناك سببٌ ثانٍ أعمق: الألمانية لغة **شفّافة الإملاء** إلى حدٍّ بعيد — أي أنّ الحرف يُنطق كما يُكتب في أغلب الحالات، خلافاً للإنجليزية والفرنسية. فمَن أتقن جدول الأصوات في هذا الدرس يستطيع أن **يقرأ أيّ كلمة ألمانية لم يرَها قطّ** نطقاً صحيحاً. هذه الجملة ليست مبالغة: إتقان ساعتين هنا يوفّر عليك سنواتٍ من تصحيح النطق لاحقاً.",
      table: {
        title: "الأبجدية مع النطق التقريبي (مصمم للعربي)",
        columns: ["الحرف", "نطقه التقريبي", "مثال"],
        rows: [
          { label: "A a", cells: ["آ (طويلة)", "der Apfel (تفاحة)"] },
          { label: "B b", cells: ["ب (بفبركة خفيفة)", "das Buch (كتاب)"] },
          { label: "C c", cells: ["تس / ك (حسب السياق)", "der Computer"] },
          { label: "D d", cells: ["د (بفبركة خفيفة)", "der Tag (يوم)"] },
          { label: "E e", cells: ["إي / إ (قصيرة)", "der Elefant"] },
          { label: "F f", cells: ["ف", "das Feuer (نار)"] },
          { label: "G g", cells: ["گ (جيم قوية مثل الجيم المصرية — ليست غيناً عربية)", "der Garten (حديقة)"] },
          { label: "H h", cells: ["هـ (نَفَس في البداية)", "das Haus (بيت)"] },
          { label: "I i", cells: ["إي / إ (قصيرة)", "der Film"] },
          { label: "J j", cells: ["ي", "ja (نعم)"] },
          { label: "K k", cells: ["ك", "der Kaffee (قهوة)"] },
          { label: "L l", cells: ["ل (ملامسة اللسان للأسنان)", "die Lampe (مصباح)"] },
          { label: "M m", cells: ["م", "die Mutter (أم)"] },
          { label: "N n", cells: ["ن", "die Nacht (ليل)"] },
          { label: "O o", cells: ["أو", "das Ohr (أذن)"] },
          { label: "P p", cells: ["پ (بمخرج p)", "der Park"] },
          { label: "Q q", cells: ["كو (تأتي دائماً مع u)", "die Qualität (جودة)"] },
          { label: "R r", cells: ["ر (حلقية قليلاً أو لثوية)", "der Raum (غرفة/فضاء)"] },
          { label: "S s", cells: ["س / ز (بين حرفين علة)", "die Sonne (شمس)"] },
          { label: "T t", cells: ["ت (بمخرج t)", "der Tisch (طاولة)"] },
          { label: "U u", cells: ["وو", "die Uhr (ساعة)"] },
          { label: "V v", cells: ["ف (غالباً) / ڤ في الدخيل", "der Vogel (طائر)"] },
          { label: "W w", cells: ["ڤ (مثل v)", "das Wasser (ماء)"] },
          { label: "X x", cells: ["كس", "das Taxi"] },
          { label: "Y y", cells: ["يُپسِلون (نادر)", "das System"] },
          { label: "Z z", cells: ["تس", "die Zeit (وقت)"] },
          { label: "Ä ä", cells: ["إيه (فم مفتوح)", "der Bär (دب)"] },
          { label: "Ö ö", cells: ["أُو (شفتان مستديرتان)", "das Öl (زيت)"] },
          { label: "Ü ü", cells: ["يُو (شفتان مقربتان)", "die Tür (باب)"] },
          { label: "ß", cells: ["س (مهموسة — علامة كتابية لا صوت مستقل؛ تدل على أن العلة قبلها طويل)", "die Straße (شارع)"] },
        ],
      },
      examples: [
        {"de": "Mein Name ist Sami. — Wie schreibt man das?", "ar": "اسمي سامي. — كيف يُكتب ذلك؟"},
        {"de": "S wie Samuel, A wie Anton, M wie Martha, I wie Ida.", "ar": "س كما في صموئيل… (طريقة التهجّي المعيارية في الهاتف)"},
        {"de": "Buchstabieren Sie bitte Ihren Nachnamen!", "ar": "تهجَّ اسم عائلتك من فضلك!"},
        {"de": "Ich wohne in der Bahnhofstraße.", "ar": "أسكن في شارع المحطة. (ß بعد علّة طويلة)"},
        {"de": "Die Tür ist offen.", "ar": "الباب مفتوح. (ü)"},
        {"de": "Das Mädchen ist schön.", "ar": "الفتاة جميلة. (ä ثمّ ö في جملة واحدة)"},
        {"de": "Mutter — Mütter. Hören Sie den Unterschied?", "ar": "أمّ — أمّهات. أتسمع الفرق؟ (الإمالة علامة جمع)"},
        {"de": "Herr Müller schreibt sich M-U-E-L-L-E-R.", "ar": "السيد مولر يُكتب اسمه M-U-E-L-L-E-R. (البديل عند غياب ü)"},
      ],
      comparisonWithArabic:
        "الفروق الجوهرية بين النظامين الصوتيين، وكلٌّ منها مصدر خطأ متوقّع:\n\n**١. حروف العلّة.** العربية الفصحى تملك ثلاث حركاتٍ قصيرة (َ ِ ُ) وثلاث طويلة (ا ي و) = ستّ وحدات. الألمانية تملك نحو **ستّ عشرة** وحدة صوتية للعلّة، من بينها ä و ö و ü والفروق الطولية (Stadt قصيرة ≠ Staat طويلة). فالعربي لا «يخطئ» في ö بل **لا يسمعها أصلاً** في البداية، لأنّ أذنه لم تُدرَّب على تصنيفها. العلاج: التدريب الأدنى المتقابل (Minimalpaare) لا الحفظ.\n\n**٢. غياب p و v و g الصريحة.** العربية الفصحى لا تملك /p/، فيُنطق Papa «بابا» و Pferd «فرد». والفارق بين b و p يغيّر المعنى: packen (يحزم) ≠ backen (يخبز).\n\n**٣. صوت s المجهور.** العربية تملك «س» و«ز» كصوتين مستقلّين ثابتين. أمّا الألمانية فحرف s الواحد **يتغيّر بحسب موقعه**: مجهور «ز» في أوّل الكلمة أو بين حرفَي علّة (sagen = زاغن، lesen = ليزن)، ومهموس «س» في آخرها (das = داس). وهذه مرونةٌ لا وجود لها في العربية فتُربك المبتدئ.\n\n**٤. النبر.** العربية لغةٌ نبرها منتظم يُحسَب من بنية المقطع. الألمانية تنبر **الجذع** غالباً في الكلمة الأصيلة (ARbeiten)، لكنّها تنبر المقطع الأخير في الدخيل (StuDENT, MuSIK). فنقل عادة النبر العربية يُنتج لكنةً واضحة حتى مع نطقٍ سليم للحروف.",
      eselsbruecke:
        "لضبط الحروف المعلَّمة الثلاثة تذكّر جملة: **«شفتاي تقولان أوو، ولساني يقول إيي»** — هذه ü بالضبط. ولـ ö: «شفتاي تقولان أوه، ولساني يقول إيه». أمّا ß فتذكّر أنّها ليست بيتاءً يونانية (بيتا) بل **s مضاعفة حادّة**، ولا تُنطق «ز» أبداً — واسمها نفسه دليلها: Eszett = S-Z.",
      commonMistakes: [
        {"wrong": "نطق W كـ«و» إنجليزية: Wasser = ووسر", "right": "W تُنطق «ڤ» دائماً: Wasser = ڤاسّر", "whyAr": "السبب أنّ أغلب العرب تعلّموا الإنجليزية أوّلاً، فرسخت قيمة W الإنجليزية. والألمانية عكستها تماماً: W = ڤ، و V = ف. فحرفٌ واحد يقلب المعنى: Wein (خمر) ≠ fein (رقيق). وهذا أشيع خطأ نطقيّ على الإطلاق."},
        {"wrong": "نطق V كـ«ڤ» في كلّ موضع: Vater = ڤاتر", "right": "V = «ف» في الكلمة الألمانية الأصيلة: Vater = فاتر", "whyAr": "القاعدة العملية: V في الكلمات الجرمانية الأصيلة (Vater, Vogel, viel, von, vier) تُنطق «ف». أمّا في الدخيل اللاتيني (Vase, Villa, Vitamin, Vulkan) فتُنطق «ڤ». وهذا استثناءٌ مبرَّر تاريخياً لا اعتباط فيه: الأصل يحدّد النطق."},
        {"wrong": "نطق s بين حرفَي علّة «س»: lesen = ليسن", "right": "s المجهورة «ز»: lesen = ليزن، Hose = هوزه", "whyAr": "العربي يقرأ الحرف بقيمته الثابتة كما في لغته، ولا يتوقّع أن يتغيّر الصوت بحسب الموقع. لكنّ s الألمانية مجهورة في أوّل الكلمة وبين حرفَي علّة، ومهموسة في آخرها وقبل حرفٍ صامت. وقاعدة الاستماع: إن سمعت «ز» فاكتب s، فحرف z الألماني ينطق «تس» لا «ز» أبداً."},
        {"wrong": "نطق ß كـ«ز»: Straße = شترازه", "right": "ß دائماً «س» حادّة: Straße = شتراسه", "whyAr": "شكل ß يشبه حرف بيتا اليونانية فيوحي بصوتٍ مجهور، والحقيقة عكسها: ß هي أشدّ صور s همساً وأثبتها، ولا تُجهر أبداً مهما كان موقعها. وهي علامةٌ إملائية أيضاً: ما قبلها حرف علّة طويل (Straße) أو مزدوج (weiß)، بينما ss تأتي بعد علّة قصيرة (Wasser, muss)."},
      ],
      relatedRuleComparison: {
        "title": "ß أم ss؟ القاعدة بعد إصلاح الإملاء 1996",
        "content": "الاختيار بينهما ليس ذوقاً بل يحكمه **طول الحرف الذي قبلهما**: بعد علّة طويلة أو صوت مزدوج تُكتب ß (Straße, groß, weiß, Fuß)، وبعد علّة قصيرة تُكتب ss (Wasser, muss, dass, Fluss). ولهذا كُتبت daß قديماً وصارت dass بعد الإصلاح، لأنّ الـ a فيها قصيرة. وفي **سويسرا وليختنشتاين** أُلغيت ß كلّياً وحلّت ss محلّها في كلّ موضع — فإن رأيت Strasse على لافتة فأنت غالباً في زيورخ لا في برلين. وفي الحروف الكبيرة كلّها تُكتب SS تقليدياً (STRASSE)، وإن أُقرّ الحرف الكبير ẞ رسمياً سنة 2017 فاستعماله نادر."
      },
    },
    {
      id: "t2",
      titleAr: "الأصوات المركبة (Doppellaute und Konsonantenverbindungen)",
      titleDe: "ei, ie, eu, äu, sch, ch, sp, st, pf, tz, ck",
      explanationAr:
        "بعد الحروف المفردة ننتقل إلى ما يجعل قراءة الألمانية **ممكنةً فعلاً**: مجموعات الحروف التي تُنتج صوتاً واحداً جديداً لا يشبه مجموع أجزائه. هذه المجموعات محدودة العدد، ومَن حفظها الليلة يقرأ غداً كلمةً لم يرَها قطّ نطقاً صحيحاً.\n\n**أوّلاً: أزواج حروف العلّة (Diphthonge).**\n• **ei** = «آي». وهذه أخطر مجموعة على العربي لأنّ العين تقرأ e ثمّ i فينطقها «إي». والصواب: mein = ماين، nein = ناين، Wein = ڤاين.\n• **ie** = «إي» طويلة ممدودة. لاحظ أنّها **مقلوب ei تماماً** في الشكل والصوت معاً: Liebe = ليبه، sieben = زيبن، wie = ڤي.\n• **eu** و **äu** = «أُويْ»: neu = نُوي، Häuser = هُويزر، Freund = فرُويند.\n• **au** = «آو»: Haus = هاوس، Frau = فراو.\n\n**ثانياً: مجموعات الصوامت.**\n• **sch** = «ش» صافية واحدة: Schule = شوله، Deutsch = دويتش.\n• **sp-** و **st-** في **أوّل** الكلمة أو أوّل الجذع = «شپ» و«شت»: Sport = شپورت، Stadt = شتات، verstehen = فرشتيهن. أمّا في وسط الكلمة أو آخرها فتبقيان كما تُكتبان: Fenster = فنستر، ist = إست.\n• **ch** — وهذه أدقّ نقطة في الدرس، فلها نطقان يحكمهما الصوت الذي **قبلها**:\n  ‑ بعد a, o, u, au تُنطق **خاء** قوية قريبة من خاء العربية: Buch = بوخ، auch = آوخ، Nacht = ناخت.\n  ‑ بعد i, e, ä, ö, ü, ei, eu وبعد الصوامت l, n, r تُنطق **شيناً ناعمة** ينطقها اللسان في وسط الحنك: ich = إش، nicht = نِشت، Milch = مِلش.\n  وهذان صوتان يسمّيهما اللغويون ach‑Laut و ich‑Laut، وهما توزيعٌ تكميلي: لا يقع أحدهما موقع الآخر أبداً.\n• **pf** = صوت واحد مركّب لا صوتان: أغلق الشفتين على p ثمّ افتحهما مباشرة على f: Apfel = آپفل، Pferd = پفرد.\n• **tz** و **z** = «تس»: Katze = كاتسه، Zeit = تسايت، zehn = تسين. وحرف z لا يُنطق «ز» أبداً.\n• **ck** = «ك» بسيطة، وهي إشارة إملائية إلى أنّ العلّة قبلها **قصيرة**: Zucker = تسوكر.\n• **-ig** في آخر الكلمة = «إش»: richtig = ريشتش، zwanzig = تسڤانتسش.\n• **h** بعد حرف علّة لا تُنطق بل **تمدّه**: gehen = غيين، Uhr = أور، ihn = إين.\n\n**قاعدة ختامية مهمّة:** الصامت المجهور في آخر الكلمة **يُهمَس** (Auslautverhärtung): Tag = تاك لا تاغ، und = أونت، Kind = كِنت، halb = هالپ.",
      whyAr:
        "لأنّ هذه المجموعات هي **مفتاح الاستقلال في القراءة**. المتعلّم الذي يحفظ الكلمات سماعاً يبقى أسير معلّمه؛ والذي يتقن نظام الأصوات يفتح أيّ كتاب أو لافتة أو استمارة ويقرأها وحده. والأمر ليس تجميلياً: الفروق هنا **تحمل معنى**. فـ Kirche (كنيسة) و Kirsche (كرزة) لا يفرّق بينهما إلا ch الناعمة مقابل sch. و Zeit (وقت) و seit (منذ) لا يفرّق بينهما إلا z مقابل s. ومَن ينطق ei «إي» يقول Wein (خمر) وهو يقصد wen (مَن) فيُساء فهمه في موقفٍ محرج. وثمّة سببٌ امتحاني مباشر: قسم الاستماع في امتحان Goethe A1 يعتمد اعتماداً كبيراً على تمييز أرقام الهاتف والأسماء المتهجّاة وأسماء الشوارع — وكلّها مبنيّة على هذه المجموعات بالضبط. فمَن لم يميّز sch من ch لن يكتب اسم الشارع صحيحاً، وسيخسر نقاطاً في سؤالٍ لا علاقة له بالنحو إطلاقاً.",
      table: {
        title: "الأصوات المركبة الأساسية",
        columns: ["المجموعة", "النطق", "مثال", "المعنى"],
        rows: [
          { label: "ei", cells: ["آي", "mein", "ملكي"] },
          { label: "ie", cells: ["إي (طويلة)", "lieben", "يحب"] },
          { label: "eu / äu", cells: ["أُوي", "neu / Häuser", "جديد / بيوت"] },
          { label: "sch", cells: ["ش", "Schule", "مدرسة"] },
          { label: "ch (بعد i,e)", cells: ["ش ناعمة جداً (إيخ)", "ich, echt", "أنا، حقيقي"] },
          { label: "ch (بعد a,o,u)", cells: ["خ حلقية", "Buch, Nacht", "كتاب، ليل"] },
          { label: "sp (بداية)", cells: ["شپ", "Sport, Spiel", "رياضة، لعبة"] },
          { label: "st (بداية)", cells: ["شت", "Stadt, Stein", "مدينة، حجر"] },
          { label: "pf", cells: ["پف (معاً)", "Apfel, Pferd", "تفاحة، حصان"] },
          { label: "tz", cells: ["تس", "Katze, sitzen", "قطة، يجلس"] },
          { label: "ck", cells: ["ك (تشديد)", "Zucker, backen", "سكر، يخبز"] },
        ],
      },
      examples: [
        {"de": "Mein Freund heißt Rainer.", "ar": "صديقي اسمه راينر. (ei ثلاث مرّات: ماين، فرُويند، راينر)"},
        {"de": "Ich liebe die Musik.", "ar": "أحبّ الموسيقى. (ie = إي ممدودة)"},
        {"de": "Die Schule ist in der Stadt.", "ar": "المدرسة في المدينة. (sch = ش، St- = شت)"},
        {"de": "Ich spreche nicht viel Deutsch.", "ar": "لا أتكلّم الألمانية كثيراً. (Spr- = شپر، ch الناعمة مرّتين)"},
        {"de": "Das Buch ist auch nicht neu.", "ar": "الكتاب ليس جديداً أيضاً. (خاء في Buch وauch، وشين في nicht)"},
        {"de": "Die Katze sitzt auf dem Pferd.", "ar": "القطّة تجلس على الحصان. (tz و pf)"},
        {"de": "Es ist zwanzig nach zehn.", "ar": "الساعة العاشرة وعشرون دقيقة. (z = تس في ثلاثة مواضع)"},
        {"de": "Guten Tag und auf Wiedersehen!", "ar": "طاب يومك وإلى اللقاء! (Tag = تاك، und = أونت — همس الأواخر)"},
      ],
      comparisonWithArabic:
        "**١. المجموعة الصامتة المركّبة غريبة كلّياً عن العربية.** العربية لا تبدأ كلمةً بساكنين، بل توجب حركةً بينهما. أمّا الألمانية فتبدأ بثلاثة صوامت متتالية بلا حرج: **Str**aße، **Spr**ache، **Schr**ank. فينزع العربي غريزياً إلى إقحام حركةٍ فاصلة (إشتراسه) — وهي لكنةٌ يسمعها الألماني فوراً. العلاج: تدريب الانتقال المباشر بلا حركة وسطية.\n\n**٢. صوت ch الناعم (ich‑Laut) لا نظير له في العربية إطلاقاً.** العربي يملك «خ» فيستعملها في كلّ موضع، فينطق ich «إخ» بدل «إش». وهي لكنة جنوبية مفهومة لكنّها ليست معيارية. والحيلة العملية: انطق «ش» العربية ثمّ ارفع مقدّمة لسانك قليلاً نحو الحنك واسمح للهواء بالمرور — الناتج قريبٌ جداً من ich‑Laut.\n\n**٣. صوت pf غير موجود.** العربية لا تملك p أصلاً، فكيف بمركّب pf؟ الحلّ التدريبي: انطق «آب» ثمّ ألحقها فوراً بـ«ف» بلا فاصل، ثمّ سرّع حتى يصيرا صوتاً واحداً.\n\n**٤. همس الصامت في آخر الكلمة يوافق العربية جزئياً.** الوقف العربي يُسكّن الأواخر، فالأذن العربية مهيّأة لهذه القاعدة أكثر من الأذن الإنجليزية. وهذه نقطة قوّةٍ نادرة للعربي: لن تنطق Tag «تاغ» إن انتبهت، لأنّ لسانك معتادٌ على تسكين الأواخر أصلاً.\n\n**٥. المدّ بحرف h.** العربية تمدّ بالألف والياء والواو، والألمانية تمدّ بـ h صامتة أو بمضاعفة العلّة (Boot) أو بـ ie. فالمفهوم ذاته موجود عند العربي، والجديد هو **العلامة** فقط — وهذا يجعل المدّ الألماني أسهل ما في هذا الدرس.",
      eselsbruecke:
        "لـ ei و ie تذكّر أنّ **الحرف الثاني هو الذي يُنطق**: e**i** = «آي»… لا، بل الأدقّ والأثبت: انطق اسم الحرف الثاني بالإنجليزية. ei → الحرف الثاني i واسمه «آي» ✓. ie → الحرف الثاني e واسمه «إي» ✓. قاعدةٌ واحدة تحسم أخطر التباسٍ في نطق الألمانية. وللـ ch تذكّر: **«خاء بعد الحروف الغليظة a-o-u، وشين بعد الرقيقة i-e-ä-ö-ü»**.",
      commonMistakes: [
        {"wrong": "نطق ei كـ«إي»: mein = مين", "right": "ei = «آي»: mein = ماين، nein = ناين", "whyAr": "العين تقرأ e ثمّ i فتُنتج «إي» قياساً على الإنجليزية والفرنسية. لكنّ ei الألمانية صوتٌ مزدوج ثابت يبدأ مفتوحاً وينتهي مغلقاً = «آي». وخطورة الخطأ أنّه يخلط بين كلمتين موجودتين معاً: nein (لا) و nie (أبداً) — فتقول «أبداً» وأنت تريد «لا»."},
        {"wrong": "نطق ich كـ«إخ» بخاء عربية", "right": "ich = «إش» بشين ناعمة حنكية", "whyAr": "العربي يملك «خ» ولا يملك ich‑Laut، فيستبدل بالصوت المفقود أقربَ صوتٍ عنده. والقاعدة الحاسمة: ch تصير خاءً بعد a و o و u و au فقط؛ وفيما عدا ذلك هي شينٌ ناعمة. فـ Buch خاء لأنّ قبلها u، وich شين لأنّ قبلها i — والحرفان نفسهما!"},
        {"wrong": "نطق Stadt كـ«ستات» و Sport كـ«سپورت»", "right": "St- و Sp- في أوّل الكلمة = «شتات» و«شپورت»", "whyAr": "قاعدةٌ يجهلها أغلب المبتدئين لأنّها لا تظهر في الكتابة إطلاقاً. والشرط دقيق: أوّل **الكلمة أو الجذع** فقط. لذلك verstehen = فرشتيهن (لأنّ steh- جذعٌ يبدأ بـ st) بينما Fenster = فنستر (لأنّ st في وسط الجذع لا أوّله)."},
        {"wrong": "نطق Tag كـ«تاغ» و und كـ«أوند»", "right": "الصامت المجهور يُهمَس آخر الكلمة: «تاك»، «أونت»", "whyAr": "هذه قاعدة Auslautverhärtung، وهي منتظمة تماماً: b←p، d←t، g←k في نهاية الكلمة أو المقطع. ولا أثر لها في الكتابة، فتبقى Tag بحرف g. وأمارتها أنّها تزول عند إضافة نهاية: Tag = تاك، لكن Tage = تاغه، لأنّ g لم تعد في الآخر."},
      ],
      relatedRuleComparison: {
        "title": "طول حرف العلّة: القاعدة الخفيّة التي تكشفها الكتابة",
        "content": "الألمانية تفرّق بين العلّة الطويلة والقصيرة تفريقاً يحمل معنى (Stadt «مدينة» ≠ Staat «دولة»، Ratte «جرذ» ≠ Rate «قسط»)، ولا تكتب حركاتٍ كالعربية. لكنّ الإملاء يترك لك **ثلاث إشارات موثوقة**: (١) علّةٌ متبوعة بـ h صامتة = طويلة (Uhr, gehen, ihn، فتُسمّى h المدّ Dehnungs‑h)؛ (٢) علّةٌ مضاعفة = طويلة (Boot, Tee, Saal)، و ie = i طويلة دائماً؛ (٣) علّةٌ متبوعة بصامتٍ **مضاعف** = قصيرة حتماً (Mutter, kommen, Wasser, Zucker حيث ck تعمل عمل kk). فتضعيف الصامت في الألمانية لا يُنطق مضعَّفاً كالشدّة العربية، بل هو **علامة على قصر العلّة قبله** ليس إلا. هذه أهمّ فكرة إملائية في اللغة كلّها، وستنفعك في كلّ كلمة تقرأها بعد اليوم."
      },
    },
  ],

  /* 4) الاستماع */
  reading: {
    "id": "read-a1-00",
    "titleDe": "Im Sprachenzentrum: Wie schreibt man das?",
    "titleAr": "في مركز اللغات: كيف يُكتب هذا؟",
    "textType": "dialog",
    "paragraphs": [
      "Frau Weber arbeitet im Sprachenzentrum in Leipzig. Heute kommt ein neuer Student. Er möchte einen Deutschkurs machen. Frau Weber nimmt ein Formular und einen Stift. Sie fragt freundlich: Guten Tag! Wie heißen Sie bitte?",
      "Der Student antwortet: Guten Tag! Ich heiße Youssef Chaabane. Frau Weber schreibt und fragt dann: Chaabane? Wie schreibt man das? Buchstabieren Sie bitte! Der Student buchstabiert langsam: C wie Cäsar, H wie Heinrich, A wie Anton, A wie Anton, B wie Berta, A wie Anton, N wie Nordpol, E wie Emil.",
      "Danke schön, sagt Frau Weber. Und woher kommen Sie? Ich komme aus Tunesien, antwortet Youssef. Und wo wohnen Sie jetzt? Ich wohne in der Goethestraße, Nummer zwölf. Frau Weber lächelt: Die Goethestraße kenne ich gut. Sie schreiben das mit ß, nicht mit ss.",
      "Zum Schluss fragt Frau Weber: Und Ihre Telefonnummer? Youssef sagt die Nummer langsam: undefined, drei, vier, eins, sieben, neun. Sehr gut, sagt Frau Weber. Ihr Kurs beginnt am Montag um neun Uhr, Raum vier. Auf Wiedersehen und bis Montag! Youssef sagt: Vielen Dank! Auf Wiedersehen!"
    ],
    "paragraphsAr": [
      "تعمل السيدة فيبر في مركز اللغات بمدينة لايبتسيغ. اليوم يأتي طالب جديد يودّ الالتحاق بدورة ألمانية. تأخذ السيدة فيبر استمارة وقلماً وتسأل بلطف: طاب يومك! ما اسمك من فضلك؟",
      "يجيب الطالب: طاب يومك! اسمي يوسف شعبان. تكتب السيدة فيبر ثمّ تسأل: شعبان؟ كيف يُكتب هذا؟ تهجَّ من فضلك! فيتهجّى الطالب ببطء: C كما في تسيزار، H كما في هاينريش، A كما في أنطون، A كما في أنطون، B كما في بيرتا، A كما في أنطون، N كما في نوردبول، E كما في إميل.",
      "تقول السيدة فيبر: شكراً جزيلاً. ومن أين أنت؟ فيجيب يوسف: أنا من تونس. وأين تسكن الآن؟ أسكن في شارع غوته، رقم اثني عشر. تبتسم السيدة فيبر: أعرف شارع غوته جيداً. تكتبونه بـ ß لا بـ ss.",
      "وفي الختام تسأل السيدة فيبر: ورقم هاتفك؟ فيقول يوسف الرقم ببطء: صفر، ثلاثة، أربعة، واحد، سبعة، تسعة. تقول السيدة فيبر: ممتاز. تبدأ دورتك يوم الاثنين في التاسعة، القاعة رقم أربعة. إلى اللقاء وإلى يوم الاثنين! فيقول يوسف: شكراً جزيلاً! إلى اللقاء!"
    ],
    "glossary": [
      {
        "de": "das Sprachenzentrum",
        "ar": "مركز اللغات",
        "noteAr": "كلمة مركّبة: Sprachen (لغات) + Zentrum (مركز). وجنس المركّب من جزئه الأخير: das Zentrum ⟵ das Sprachenzentrum."
      },
      {
        "de": "buchstabieren",
        "ar": "يتهجّى",
        "noteAr": "من der Buchstabe (الحرف). فعلٌ منتظم، وهو أهمّ فعل في هذا الدرس عملياً."
      },
      {
        "de": "das Formular",
        "ar": "الاستمارة",
        "noteAr": "كلمة ستقابلك في كلّ دائرة رسمية ألمانية. الجمع: die Formulare."
      },
      {
        "de": "wie schreibt man das?",
        "ar": "كيف يُكتب هذا؟",
        "noteAr": "man ضمير عامّ لا يُترجم («المرء/يُفعَل»)، ويأخذ الفعل معه صيغة الغائب المفرد: man schreibt."
      },
      {
        "de": "langsam",
        "ar": "ببطء / بطيء",
        "noteAr": "ضدّه schnell. وتُستعمل ظرفاً بلا أيّ نهاية: Sprechen Sie bitte langsam!"
      },
      {
        "de": "freundlich",
        "ar": "ودود / بلطف",
        "noteAr": "من der Freund (الصديق) + النهاية ‑lich التي تصنع الصفات، كما في herzlich و täglich."
      },
      {
        "de": "die Telefonnummer",
        "ar": "رقم الهاتف",
        "noteAr": "مركّبة أيضاً، وجنسها من die Nummer. وتُقال أرقامها فرادى لا مجتمعة."
      },
      {
        "de": "der Raum",
        "ar": "القاعة / الغرفة",
        "noteAr": "الجمع بالإمالة: die Räume — مثالٌ حيّ على أنّ ä علامة جمع لا زخرفة."
      },
      {
        "de": "zum Schluss",
        "ar": "في الختام / أخيراً",
        "noteAr": "تعبير رابط يُستعمل في الكلام والكتابة معاً لإنهاء سلسلة."
      },
      {
        "de": "lächeln",
        "ar": "يبتسم",
        "noteAr": "لاحظ ä فيه. ولا تخلطه بـ lachen (يضحك) — والفرق بينهما ch الغليظة وäch الرقيقة."
      },
      {
        "de": "kennen",
        "ar": "يعرف (شخصاً أو مكاناً)",
        "noteAr": "يخصّ المعرفة بالمعايشة. ويقابله wissen للمعرفة بالمعلومة — فرقٌ لا وجود له في العربية."
      },
      {
        "de": "Vielen Dank!",
        "ar": "شكراً جزيلاً!",
        "noteAr": "أدفأ من Danke المجرّدة. والردّ عليها: Bitte schön! أو Gern geschehen!"
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "اقرأ الفقرة الأولى ثمّ اختر:",
        "questionDe": "Wo arbeitet Frau Weber?",
        "questionAr": "أين تعمل السيدة فيبر؟",
        "options": [
          "In einer Schule",
          "Im Sprachenzentrum",
          "In einem Büro in Tunesien",
          "An der Universität"
        ],
        "correctIndex": 1,
        "explanation": "الجملة الأولى تنصّ: «Frau Weber arbeitet im Sprachenzentrum in Leipzig». وانتبه أنّ Leipzig مدينة العمل لا مكانه، فالسؤال بـ wo يطلب المكان الأدقّ المذكور.",
        "optionExplanations": [
          "لم تُذكر مدرسة؛ المكان مركز لغات.",
          undefined,
          "تونس بلد الطالب لا مكان عملها.",
          "لم تُذكر جامعة في النصّ."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "انتبه لطريقة التهجّي في الفقرة الثانية:",
        "questionDe": "Warum sagt Youssef: A wie Anton?",
        "questionAr": "لماذا يقول يوسف: A كما في أنطون؟",
        "options": [
          "Weil Anton sein Freund ist",
          "Weil das die deutsche Buchstabiertafel ist",
          "Weil er den Buchstaben vergessen hat",
          "Weil Anton auch im Kurs ist"
        ],
        "correctIndex": 1,
        "explanation": "الألمان يتهجّون بأسماء علمٍ معيارية (Anton, Berta, Emil…) تماماً كما يقول الطيّارون Alpha‑Bravo. والغرض تفادي الخلط بين الحروف المتشابهة صوتياً في الهاتف، لا ذكر أشخاص بأعيانهم.",
        "optionExplanations": [
          "أنطون ليس شخصاً في النصّ.",
          undefined,
          "بل يتهجّى بدقّة وببطء.",
          "لا وجود لشخصٍ بهذا الاسم في الدورة."
        ],
        "errorType": "vocabulary",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الثالثة — ركّز على الإملاء:",
        "questionDe": "Wie schreibt man den Straßennamen richtig?",
        "questionAr": "كيف يُكتب اسم الشارع كتابةً صحيحة؟",
        "options": [
          "Goethestrasse",
          "Goethestraße",
          "Göthestraße",
          "Goetestrasse"
        ],
        "correctIndex": 1,
        "explanation": "النصّ يصرّح: «Sie schreiben das mit ß, nicht mit ss». والقاعدة تؤيّده: حرف a في Straße طويل، والعلّة الطويلة يليها ß لا ss. أمّا Goethe فتُكتب oe لأنّه اسم علم تاريخي حُفظ رسمه القديم.",
        "optionExplanations": [
          "هذه الكتابة السويسرية؛ والنصّ ينصّ على ß.",
          undefined,
          "لا إمالة في اسم غوته؛ يُكتب oe.",
          "فيها خطآن: نقص h وss بدل ß."
        ],
        "errorType": "spelling",
        "paragraph": 2
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الرابعة — المعلومة الزمنية:",
        "questionDe": "Wann beginnt der Kurs?",
        "questionAr": "متى تبدأ الدورة؟",
        "options": [
          "Am Montag um neun Uhr",
          "Am Sonntag um vier Uhr",
          "Am Montag um zwölf Uhr",
          "Heute um neun Uhr"
        ],
        "correctIndex": 0,
        "explanation": "النصّ: «Ihr Kurs beginnt am Montag um neun Uhr, Raum vier». والفخّ أنّ العدد أربعة وردَ فعلاً لكنّه رقم القاعة لا الساعة، والعدد اثنا عشر ورد لكنّه رقم البيت — فقراءة العدد وحده دون سياقه تُوقع في الخطأ.",
        "optionExplanations": [
          undefined,
          "لم يُذكر الأحد؛ وأربعة رقم القاعة.",
          "اثنا عشر رقم البيت في الفقرة الثالثة.",
          "الدورة تبدأ الاثنين لا اليوم."
        ],
        "errorType": "vocabulary",
        "paragraph": 3
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "سؤال نطق مبني على النصّ:",
        "questionDe": "Welches Wort spricht man mit dem harten ach-Laut?",
        "questionAr": "أيّ كلمة تُنطق فيها ch خاءً غليظة؟",
        "options": [
          "nicht",
          "ich",
          "Buchstabe",
          "lächelt"
        ],
        "correctIndex": 2,
        "explanation": "الخاء الغليظة تأتي بعد a و o و u و au. وفي Buchstabe يسبق ch حرف u فتُنطق خاءً. أمّا nicht وich فقبلهما i، وlächelt قبلها ä — وكلّها تُنطق شيناً ناعمة.",
        "optionExplanations": [
          "قبلها i فهي شين ناعمة.",
          "قبلها i فهي شين ناعمة.",
          undefined,
          "قبلها ä فهي شين ناعمة."
        ],
        "errorType": "spelling",
        "paragraph": 1
      }
    ],
    "redemittel": [
      {
        "de": "Wie heißen Sie bitte? — Ich heiße …",
        "ar": "ما اسمك من فضلك؟ — اسمي …"
      },
      {
        "de": "Wie schreibt man das? — Buchstabieren Sie bitte!",
        "ar": "كيف يُكتب هذا؟ — تهجَّ من فضلك!"
      },
      {
        "de": "A wie Anton, B wie Berta, E wie Emil.",
        "ar": "أ كما في أنطون، ب كما في بيرتا… (جدول التهجّي المعياري)"
      },
      {
        "de": "Können Sie das bitte langsam wiederholen?",
        "ar": "هل يمكنك إعادته ببطء من فضلك؟"
      },
      {
        "de": "Ich wohne in der …straße, Nummer …",
        "ar": "أسكن في شارع …، رقم …"
      },
      {
        "de": "Vielen Dank! — Auf Wiedersehen!",
        "ar": "شكراً جزيلاً! — إلى اللقاء!"
      }
    ],
    "discussionAr": "تخيّل أنّك في مكتب التسجيل: تهجَّ اسمك الكامل بالألمانية مستعملاً جدول التهجّي (X wie …)، ثمّ اذكر شارعك ورقم هاتفك رقماً رقماً. سجّل نفسك بالهاتف واستمع: هل نطقتَ W ڤاءً؟ وهل جعلتَ ei آيَ؟ وهل همستَ آخر Tag؟ أعد المحاولة حتى تسلم الثلاثة."
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "تهجئة الاسم في الهاتف",
        lines: [
          { speaker: "Sami", de: "Hallo, mein Name ist Sami Ben Ali.", ar: "مرحباً، اسمي سامي بن علي." },
          { speaker: "Frau Weber", de: "Wie bitte? Können Sie das buchstabieren?", ar: "عذراً؟ هل يمكنك تهجئة ذلك؟" },
          { speaker: "Sami", de: "Ja, natürlich. S-A-M-I. B-E-N. A-L-I.", ar: "نعم بالطبع. إس-آ-إم-آي. بيه-إيه-إن. آ-إل-آي." },
          { speaker: "Frau Weber", de: "Ah, vielen Dank, Herr Ben Ali!", ar: "آه، شكراً جزيلاً يا سيد بن علي!" },
        ],
      },
      {
        id: "l2",
        title: "حروف مشهورة في الكلمات",
        lines: [
          { speaker: "Lehrer", de: "Wie schreibt man „Schule“?", ar: "كيف تُكتب كلمة Schule (مدرسة)؟" },
          { speaker: "Mona", de: "S-C-H-U-L-E.", ar: "إس-تسيه-ها-وو-إل-إيه." },
          { speaker: "Lehrer", de: "Sehr gut! Und „Straße“?", ar: "ممتاز! وكلمة Straße (شارع)؟" },
          { speaker: "Mona", de: "S-T-R-A-ß-E.", ar: "إس-تيه-إر-آ-إسّتِت-إيه." },
          { speaker: "Lehrer", de: "Perfekt!", ar: "مثالي!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie heißt der Mann?",
        questionAr: "ما اسم الرجل؟",
        options: ["Sami Ben Ali", "Herr Weber", "Mona", "Sami Weber"],
        correctIndex: 0,
        explanation: "قال: mein Name ist Sami Ben Ali — وتهجأه حرفاً حرفاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie schreibt man „Schule“?",
        questionAr: "كيف تُكتب Schule؟",
        options: ["S-C-H-U-L-E", "S-C-H-O-L-E", "S-H-U-L-E", "S-C-U-L-E"],
        correctIndex: 0,
        explanation: "School بالطبع S-C-H-U-L-E — لاحظ sch معاً ثم u ثم l ثم e.",
        errorType: "spelling",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Welcher Buchstabe ist in „Straße“?",
        questionAr: "أي حرف يوجد في Straße؟",
        options: ["ß", "ä", "ü", "ö"],
        correctIndex: 0,
        explanation: "Straße تحتوي ß — الحرف الحاد الذي يشبه ss.",
        errorType: "spelling",
      },
    ],
  },

  /* 5) النطق */
  pronunciation: {
    id: "p1",
    title: "أهم 10 أصوات للمتعلم العربي — استمع وكرر",
    items: [
      { de: "ich", ar: "أنا", note: "ch ناعمة بعد i: أقرب إلى «ش» هامسة من «خ»" },
      { de: "Buch", ar: "كتاب", note: "ch خاء حلقية بعد u" },
      { de: "schön", ar: "جميل", note: "sch = ش + ö بشفتين مستديرتين" },
      { de: "mein", ar: "ملكي", note: "ei = آي: ماين" },
      { de: "Wien", ar: "فيينا", note: "ie = إي: ڤين" },
      { de: "neu", ar: "جديد", note: "eu = أُوي: نُوي" },
      { de: "Sport", ar: "رياضة", note: "sp في البداية = شپورت" },
      { de: "Stadt", ar: "مدينة", note: "st في البداية = شتات" },
      { de: "Apfel", ar: "تفاحة", note: "pf معاً: آپفِل" },
      { de: "Vater", ar: "أب", note: "V = ف: فاتر" },
    ],
    tip: "اختر صوتاً واحداً يومياً من هذه القائمة وكرره في 5 كلمات مختلفة — صوت واحد يومياً أسرع من مراجعة كل شيء مرة واحدة.",
    shadowing: [
      { de: "Mein Name ist Anna.", ar: "اسمي آنا.", tip: "ei في Mein = آي" },
      { de: "Ich buchstabiere: A-N-N-A.", ar: "أتهجّى: آ-إن-إن-آ.", tip: "حرف A في الألمانية = آ" },
      { de: "Die Schule ist in der Stadt.", ar: "المدرسة في المدينة.", tip: "Schule = شولِه، Stadt = شتات" },
      { de: "Das Buch ist neu.", ar: "الكتاب جديد.", tip: "Buch = بوخ (خ حلقية)" },
    ],
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب اسمك بالألمانية كما تتهجّاه (كل حرف بفاصلة):",
      instructionDe: "Buchstabiere deinen Namen!",
      prompt: "اكتب اسمك: S-A-M-I (مثال: أسماء عربية تُكتب حرفاً حرفاً كما تُنطق)",
      acceptedAnswers: ["S-A-M-I", "Sami", "S A M I"],
      sampleAnswer: "S-A-M-I (مثال: اكتب اسمك أنت بدلاً من ذلك)",
      explanation: "التهجئة بالألمانية: كل حرف يُنطق باسمه الألماني (A=آ، B=بيه، C=تسه...).",
      errorType: "spelling",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالحرف الصحيح (ei أو ie):",
      template: "M___n (لي) · W___n (فيينا) · l___ben (يحب) · n___n (لا)",
      blanks: [
        { correct: "ei", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ei", options: ["ei", "ie"] },
      ],
      explanation: "المرجع: mein (آي [aɪ]) / Wien (إي [iː]) / lieben (إي [iː]) / nein (آي [aɪ]). ie = إي طويلة · ei = آي مركّبة.",
      errorType: "spelling",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه (جملة تحتوي أصواتاً مركبة):",
      audioText: "Die Schule ist schön und neu.",
      explanation: "لاحظ: Schule (ش) + schön (ش+ö) + neu (أُوي). الجملة: Die Schule ist schön und neu.",
      errorType: "spelling",
    },
  ],

  /* 7) بنك التدريبات */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر نطق الحرف الصحيح:",
      questionDe: "Wie spricht man „W“ aus?",
      questionAr: "كيف يُنطق الحرف W؟",
      options: ["ڤ (مثل v)", "و (مثل الإنجليزية)", "ف", "ب"],
      correctIndex: 0,
      explanation: "W الألمانية تُنطق ڤ دائماً: Wasser = ڤاسّر.",
      optionExplanations: [
        undefined,
        "صوت w الإنجليزي غير موجود في الألمانية إطلاقاً.",
        "ف تُنطق بـ V الألمانية في كلمات مثل Vater.",
        "ب هو حرف B.",
      ],
      errorType: "spelling",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة التي تُنطق بفاء (V = f):",
      questionDe: "Welches Wort spricht man mit „f“?",
      questionAr: "أي كلمة تُنطق بفاء؟",
      options: ["Video", "Vater", "Wasser", "Wien"],
      correctIndex: 1,
      explanation: "Vater = فاتر (ف). أما Video فتلفظ ڤ، وWasser وWien بـ ڤ أيضاً.",
      errorType: "spelling",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الصوت المركب بنطقه:",
      pairs: [
        { left: "ei", right: "آي (ماين)" },
        { left: "ie", right: "إي (ڤين)" },
        { left: "eu", right: "أُوي (نُوي)" },
        { left: "sch", right: "ش (شولِه)" },
        { left: "tz", right: "تس (كاتسِه)" },
      ],
      explanation: "مجموعات أساسية: ei=آي، ie=إي، eu=أُوي، sch=ش، tz=تس.",
      errorType: "spelling",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الحروف لتكوين كلمة صحيحة:",
      tokens: ["H", "A", "U", "S"],
      correctSentence: "HAUS",
      explanation: "Haus = بيت. تذكّر: au تُنطق «آو».",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "fill-blank",
      instructionAr: "أكمل الحرف الناقص (ä أو a):",
      template: "die M___tter (أمهات) · die M___tter (أمّ واحدة) = Bär",
      blanks: [
        { correct: "ü", options: ["ü", "u"] },
        { correct: "u", options: ["ü", "u"] },
      ],
      explanation: "Mütter (أمهات) بـ ü، لكن Mutter (أم) بـ u. لاحظ أن المعنى تغيّر بالحرف المعلم!",
      errorType: "spelling",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das ist die Strasse.",
      wrongWord: "Strasse",
      correctWord: "Straße",
      options: ["Straße", "Strasze", "Strase", "Straze"],
      explanation: "بعد الأصوات الطويلة أو المركبة (a طويلة هنا) يُكتب ß وليس ss. Straße = شارع.",
      errorType: "spelling",
    },
    {
      id: "e7",
      type: "multiple-choice",
      instructionAr: "اختر النطق الصحيح:",
      questionDe: "Wie spricht man „Apfel“?",
      questionAr: "كيف يُنطق Apfel (تفاحة)؟",
      options: ["آپفِل", "آفِل", "آپِل", "آپفِل (بفاصلة بين الحرفين)"],
      correctIndex: 0,
      explanation: "pf يُنطق معاً: الشفتان تبدأ p ثم يمر الهواء f فوراً — آپفِل.",
      errorType: "spelling",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع واكتب الكلمة التي تسمعها (ستسمع حرفاً حرفاً):",
      audioText: "Katze",
      explanation: "Katze = قطة: K-A-T-Z-E — وtz تُنطق تس.",
      errorType: "spelling",
    },
    {
      id: "e9",
      type: "matching",
      instructionAr: "صل الحرف بالنطق التقريبي للعربي:",
      pairs: [
        { left: "J", right: "ي (ja = يا)" },
        { left: "V", right: "ف (Vater = فاتر)" },
        { left: "Z", right: "تس (Zeit = تسايت)" },
        { left: "W", right: "ڤ (Wasser = ڤاسّر)" },
      ],
      explanation: "أربعة حروف تخدع العربي: J=ي، V=ف، Z=تس، W=ڤ.",
      errorType: "spelling",
    },
    {
      id: "e10",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين كلمة: (t, z, e, i, Z)",
      tokens: ["Z", "e", "i", "t"],
      correctSentence: "Zeit",
      explanation: "Zeit = وقت: Z (تس) + ei (آي) + t → تسايت.",
      errorType: "word-order",
    },
    {"id": "e11", "type": "multiple-choice", "instructionAr": "اختر النطق الصحيح:", "questionDe": "Wie spricht man «Wasser»?", "questionAr": "كيف تُنطق كلمة Wasser؟", "options": ["ووسر (W إنجليزية)", "ڤاسّر (W = ڤ)", "فاسّر (W = ف)", "ڤازر (s مجهورة)"], "correctIndex": 1, "explanation": "حرف W الألماني يُنطق «ڤ» دائماً. وss هنا مهموسة «س» حادّة لأنّها مضاعفة، وهي تدلّ في الوقت نفسه على أنّ a قبلها قصيرة.", "optionExplanations": ["هذه قيمة W الإنجليزية لا الألمانية.", undefined, "«ف» قيمة V لا W.", "ss المضاعفة مهموسة دائماً، فلا تُنطق «ز»."], "errorType": "spelling"},
    {"id": "e12", "type": "multiple-choice", "instructionAr": "أيّ كلمة تُنطق فيها ch خاءً غليظة؟", "questionDe": "Wo hört man den ach-Laut?", "questionAr": "أين تُسمع الخاء الغليظة؟", "options": ["die Milch", "das Buch", "nicht", "die Kirche"], "correctIndex": 1, "explanation": "الخاء الغليظة (ach-Laut) تأتي حصراً بعد a و o و u و au. وفي Buch يسبقها u. أمّا Milch فقبلها l، وnicht قبلها i، وKirche قبلها r — وكلّها شين ناعمة.", "optionExplanations": ["بعد الصامت l تكون شيناً ناعمة.", undefined, "بعد i تكون شيناً ناعمة.", "بعد r تكون شيناً ناعمة."], "errorType": "spelling"},
    {"id": "e13", "type": "fill-blank", "instructionAr": "أكمل بالإملاء الصحيح (ß أم ss؟):", "template": "Ich wohne in der Bahnhofstra___e.", "blanks": [{"correct": "ß", "options": ["ß", "ss", "s", "sz"]}], "explanation": "حرف a في Straße طويل، والعلّة الطويلة يليها ß لا ss. ولو كانت العلّة قصيرة لكُتبت ss كما في Wasser وmuss.", "errorType": "spelling"},
    {"id": "e14", "type": "error-correction", "instructionAr": "صحّح الكلمة الخاطئة في الجملة:", "wrongSentence": "Meine Mutter hat zwei Mutter im Haus.", "wrongWord": "Mutter", "correctWord": "Mütter", "options": ["Mütter", "Muttern", "Mutters", "Muter"], "explanation": "جمع Mutter هو Mütter بالإمالة وحدها بلا أيّ نهاية. فالإمالة هنا ليست تفصيلاً صوتياً بل هي علامة الجمع الوحيدة — ومَن أهملها لم يفرّق بين الأمّ والأمّهات.", "errorType": "plural"},
    {"id": "e15", "type": "matching", "instructionAr": "طابق كلّ مجموعة حروف بنطقها:", "pairs": [{"left": "ei", "right": "آي (mein)"}, {"left": "ie", "right": "إي ممدودة (Liebe)"}, {"left": "eu", "right": "أُويْ (neu)"}, {"left": "sch", "right": "ش صافية (Schule)"}, {"left": "tz", "right": "تس (Katze)"}, {"left": "pf", "right": "پف (Apfel)"}], "explanation": "هذه المجموعات الستّ تغطّي أغلب ما يقرؤه المبتدئ. وأخطرها زوج ei/ie لأنّهما مقلوبان شكلاً وصوتاً معاً.", "errorType": "spelling"},
  ],

  /* 8) الأخطاء والتريكات */
  fehlerUndTipps: {
    mistakes: [
      { wrong: "نطق W الإنجليزية (Water = ووتر)", right: "نطق W كـ ڤ (Wasser = ڤاسّر)", whyAr: "الألمانية لا تملك w الإنجليزي إطلاقاً — ووه تعني «أين» وتُنطق ڤوه!" },
      { wrong: "نطق ei كـ«إي»", right: "نطق ei كـ«آي» (mein = ماين)", whyAr: "احفظ: nein (لا) = ناين، zwei (اثنان) = تسڤاي، drei (ثلاثة) = دراي." },
      { wrong: "كتابة ss بدل ß في Straße", right: "Straße (بـ ß)", whyAr: "بعد حرف علة طويل أو مركب يأتي ß، بعد حرف قصير يأتي ss (das Schloss = القفل)." },
    ],
    eselsbruecken: [
      "«الحرف الأطول يُنطق الأقصر»: ie = إي (قصير)، ei = آي (ممدود). مقلوب الشكل = مقلوب النطق!",
      "W مثل ڤ، V مثل ف في الأغلب — تذكّر: «فاتر وڤاسّر»: Vater (ف) وWasser (ڤ).",
    ],
    culturalNote: {
      title: "لماذا التهجئة مهمة في ألمانيا؟",
      content:
        "الألمان يتهجّون أسماءهم في الهاتف والبنك والمكتب كل يوم. ولتجنب اللبس، طوروا «أبجدية هاتفية» رسمية: A wie Anton، B wie Berta، C wie Cäsar... ستتعلم أشهرها في تمارين لاحقة — واسأل معلّمك الافتراضي عنها!",
    },
  },

  /* 9) التقييم */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر النطق الصحيح للحرف:",
      questionDe: "Wie spricht man „Z“?",
      questionAr: "ما نطق الحرف Z؟",
      options: ["تس", "ز", "س", "ذ"],
      correctIndex: 0,
      explanation: "Z تُنطق «تس» دائماً: Zeit = تسايت، zehn = تسِين.",
      errorType: "spelling",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة الصحيحة إملائياً:",
      questionDe: "Welche Schreibung ist richtig?",
      questionAr: "أي كتابة صحيحة؟",
      options: ["die Straße", "die Strasse", "die Strasze", "die Straze"],
      correctIndex: 0,
      explanation: "Straße بالـ ß — بعد a طويلة. (قارن: die Straße = الشارع).",
      errorType: "spelling",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الحروف لتكوين كلمة «مدرسة»:",
      tokens: ["S", "c", "h", "u", "l", "e"],
      correctSentence: "Schule",
      explanation: "Schule = مدرسة — sch (ش) + u + l + e.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ (ei أو ie):",
      template: "n___n (لا) · d___se (هذه) · w___ (نحن) · k___n (لا أحد)",
      blanks: [
        { correct: "ei", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ei", options: ["ei", "ie"] },
      ],
      explanation: "nein=آي [aɪ]، diese=إي [iː]، wie=إي [iː]، kein=آي [aɪ]. ie تُقرأ إي (طويلة) و ei تُقرأ آي (مركّبة).",
      errorType: "spelling",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Wie spricht man „Buchstabe“?",
      wrongWord: "Buchstabe",
      correctWord: "Buchstabe",
      isAlreadyCorrect: true,
      options: ["Buchstabe", "Buchstabbe", "Buchstabeh", "Buchstape"],
      explanation: "Buchstabe (حرف) صحيحة كما هي! هذا تمرين ثقة: أحياناً الإجابة الصحيحة هي الأصل نفسه. أتقنت الأبجدية! 🎉",
      errorType: "spelling",
    },
  ],

  /* 10) البطاقات */
  flashcards: [
    { id: "fc1", de: "das Alphabet", ar: "الأبجدية", example: "Das Alphabet hat 26 Buchstaben.", exampleAr: "الأبجدية فيها 26 حرفاً.", level: "A1" },
    { id: "fc2", de: "der Buchstabe", ar: "الحرف", example: "Das ist ein Buchstabe.", exampleAr: "هذا حرف.", level: "A1" },
    { id: "fc3", de: "aussprechen", ar: "ينطق", example: "Wie spricht man das aus?", exampleAr: "كيف يُنطق هذا؟", level: "A1" },
    { id: "fc4", de: "buchstabieren", ar: "يتهجّى", example: "Können Sie das buchstabieren?", exampleAr: "هل يمكنكم تهجئة ذلك؟", level: "A1" },
    { id: "fc5", de: "der Umlaut (ä, ö, ü)", ar: "الحرف المعلم", example: "Ä, Ö, Ü sind Umlaute.", exampleAr: "Ä وÖ وÜ حروف معلمة.", level: "A1" },
    { id: "fc6", de: "das ß", ar: "حرف إس-تست الحاد", example: "Straße schreibt man mit ß.", exampleAr: "تُكتب Straße بـ ß.", level: "A1" },
    { id: "fc7", de: "der Name", ar: "الاسم", example: "Mein Name ist Sami.", exampleAr: "اسمي سامي.", level: "A1" },
    { id: "fc8", de: "sich vorstellen", ar: "يقدّم نفسه", example: "Ich möchte mich vorstellen.", exampleAr: "أود أن أقدّم نفسي.", level: "A1" },
    {"id": "fc9", "de": "das Formular", "ar": "الاستمارة", "example": "Füllen Sie bitte das Formular aus.", "exampleAr": "املأ الاستمارة من فضلك.", "level": "A1"},
    {"id": "fc10", "de": "Wie schreibt man das?", "ar": "كيف يُكتب هذا؟", "example": "Chaabane? Wie schreibt man das?", "exampleAr": "شعبان؟ كيف يُكتب هذا؟", "level": "A1"},
    {"id": "fc11", "de": "langsam / schnell", "ar": "ببطء / بسرعة", "example": "Sprechen Sie bitte langsam!", "exampleAr": "تكلّم ببطء من فضلك!", "level": "A1"},
    {"id": "fc12", "de": "ch بعد a-o-u = خاء", "ar": "Buch, auch, Nacht", "example": "Das Buch ist auch neu.", "exampleAr": "الكتاب جديد أيضاً.", "level": "A1"},
    {"id": "fc13", "de": "ch بعد i-e-ä = شين ناعمة", "ar": "ich, nicht, Milch", "example": "Ich spreche nicht viel.", "exampleAr": "لا أتكلّم كثيراً.", "level": "A1"},
    {"id": "fc14", "de": "St- / Sp- في أوّل الكلمة = شت / شپ", "ar": "Stadt = شتات، Sport = شپورت", "example": "Die Stadt ist schön.", "exampleAr": "المدينة جميلة.", "level": "A1"},
    { id: "fc15", de: "der Student", ar: "الطالب الجامعيّ", example: "Ich bin Student aus Tunesien.", exampleAr: "أنا طالب من تونس.", level: "A1" },
    { id: "fc16", de: "der Stift", ar: "القلم", example: "Haben Sie einen Stift?", exampleAr: "هل معك قلم؟", level: "A1" },
    { id: "fc17", de: "fragen", ar: "يسأل", example: "Die Lehrerin fragt: Wie heißen Sie?", exampleAr: "تسأل المعلّمة: ما اسمك؟", level: "A1" },
    { id: "fc18", de: "antworten", ar: "يجيب", example: "Ich antworte auf Deutsch.", exampleAr: "أجيب بالألمانية.", level: "A1" },
    { id: "fc19", de: "Auf Wiedersehen!", ar: "إلى اللقاء! (وداعٌ رسميّ)", example: "Auf Wiedersehen, Frau Weber!", exampleAr: "إلى اللقاء سيدة فيبر!", level: "A1" },
  ],

  /* 11) مراجعة تمهيدية (أول درس: ننشط معارف ما قبل البدء) */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تمهيدية (قبل A1 — لا درس سابق): ما هي اللغة التي تتعلمها في هذه المنصة؟",
      questionDe: "Welche Sprache lernst du hier?",
      questionAr: "أي لغة تتعلم هنا؟",
      options: ["Deutsch", "Englisch", "Spanisch", "Französisch"],
      correctIndex: 0,
      explanation: "Deutsch = الألمانية — هذه منصتك لإتقانها من A1 حتى B2.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تمهيدية (قبل A1 — لا درس سابق): كم حرفاً في الأبجدية الألمانية؟",
      questionDe: "Wie viele Buchstaben hat das deutsche Alphabet?",
      questionAr: "كم حرفاً في الأبجدية الألمانية؟",
      options: ["26", "24", "28", "30"],
      correctIndex: 0,
      explanation: "26 حرفاً + الحروف المعلمة (ä, ö, ü) وß تُدرس في هذا الدرس.",
      errorType: "vocabulary",
    },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-00-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً قصيراً عن الأبجدية لصديق يبدأ التعلم",
      sourceDe: "Das deutsche Alphabet hat 26 Buchstaben. Dazu kommen ä, ö, ü und ß. Manche Buchstaben hören sich anders an als im Arabischen.",
      taskAr: "انقل بالعربية أهم ثلاث معلومات عن الأبجدية الألمانية لصديق مبتدئ: عدد الحروف، الحروف الإضافية، والاختلاف عن العربية.",
      modelAnswerAr: "«الأبجدية الألمانية فيها 26 حرفاً، بالإضافة إلى ä وö وü وß. بعض الحروف تُنطق بشكل مختلف عن العربية.»",
      keyPointsAr: ["ذكرت عدد الحروف (26)", "ذكرت الحروف الإضافية الأربعة", "أشرت إلى اختلاف النطق عن العربية"],
    },
  ],
      interaction: [
    {
      id: "int-a1-00-1",
      scenarioAr: "صديق مبتدئ يسألك عن نطق حرف ألماني.",
      scenarioDe: "Ein Freund fragt dich nach der Aussprache eines Buchstabens.",
      strategyAr: "الاستراتيجية: شرح نطق حرف وتصحيح خطأ بلطف.",
      rounds: [
        {
          speakerDe: "Wie spricht man „ch“ aus?",
          speakerAr: "كيف يُنطق «ch»؟",
          options: [
            { de: "Nach a, o, u wie ein „ch“ aus dem Hals. Nach e, i wie ein weiches „sch“.", ar: "بعد a, o, u من الحلق. وبعد e, i مثل «ش» ناعمة.", best: true, replyDe: "Ach so! Und „sch“?", replyAr: "فهمت! و«sch»؟" },
            { de: "Immer wie ein „k“.", ar: "دائماً مثل «ك».", best: false, replyDe: "Nein, das ist leider falsch. Es hängt vom Vokal ab.", replyAr: "لا، هذا خطأ للأسف. يعتمد على العلة." },
          ],
        },
        {
          speakerDe: "Wie spricht man „sch“ aus?",
          speakerAr: "كيف يُنطق «sch»؟",
          options: [
            { de: "Wie ein „sch“ auf Arabisch: Schule, schön.", ar: "مثل «ش» العربية: Schule, schön.", best: true, replyDe: "Danke! Das ist einfach.", replyAr: "شكراً! هذا سهل." },
            { de: "Wie ein „s“.", ar: "مثل «س».", best: false, replyDe: "Nein, „sch“ ist wie das arabische schin.", replyAr: "لا، «sch» مثل الشين العربية." },
          ],
        },
      ],
    },
  ],

};