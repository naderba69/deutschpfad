/**
 * b2-05 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الروابط المتقدمة: indem, anstatt...zu, ohne...zu, es sei denn + روابط النتيجة (folglich, demnach)",
      titleDe: "Fortgeschrittene Konnektoren: folglich, demnach, indem ...",
      explanationAr:
        "تبدأ المجموعة الأولى بروابط الطريقة والمقابلة: «indem» تعني «بأن/بواسطة» وتربط الفعل بوسيلته (Man lernt, indem man übt)، و«anstatt … zu» تعني «بدلاً من أن» (Anstatt zu schlafen, arbeitete er)، و«ohne … zu» تعني «دون أن» (Er ging, ohne zu grüßen). جملة indem تظلّ جملة فعلية كاملة، وقد يكون فاعلها هو فاعل الجملة الرئيسية أو شخصاً آخر. أما anstatt … zu وohne … zu فغالباً ما يُفهم فاعل المصدر فيهما من فاعل الجملة الرئيسية؛ وإذا اختلف الفاعل، فاستعمال anstatt dass أو ohne dass مع جملة فعلية يكون أوضح.\n\nمن تراكيب الشرط والتحفّظ «es sei denn» (إلا إذا) و«je nachdem» (بحسب/حسبما) و«statt dass» (بدلاً من أن، مع فاعل مختلف). تختلف بنيتها: بعد es sei denn تأتي عادةً جملة رئيسية بترتيب الفعل الثاني (es sei denn, es regnet)؛ أما dass فتقدّم جملة فعلية يكون فعلها المصرف في النهاية، وقد تأتي je nachdem متبوعةً بجملة استفهامية غير مباشرة تبدأ بـ ob أو wie.\n\nوالمجموعة الثالثة روابط النتيجة: «folglich» و«demnach» و«sodass». والفرق بينها تركيبي لا دلالي: folglich وdemnach ظرفان؛ وإذا وُضع أحدهما في بداية الجملة شغل المركز الأول، فيأتي الفعل المصرّف بعده مباشرة (Er übte viel, folglich bestand er die Prüfung). أما «sodass» فرابط يفتح جملة ثانوية يُنتظر فعلها في النهاية (Er sprach laut, sodass alle ihn hörten). ومن هنا ينشأ أكثر أخطاء هذا الباب: أن يضع المتعلّم الفعل في النهاية بعد folglich، فيكتب جملة تُقرأ كجملة ثانوية بلا رابط.\n\nوأخيراً الفرق الدلالي الذي تحسمه قراءة السياق: تُستعمل indem غالباً لبيان الطريقة أو الوسيلة (كيف؟)، بينما تأتي damit كثيراً لبيان الغاية (لأيّ هدف؟). تفتح damit جملة فعلية يكون فعلها المصرف في النهاية، وindem كذلك تتبعها جملة فعلية؛ وقد يختلف فاعل جملة indem عن فاعل الجملة الرئيسية. هذه مقابلة تعليمية تقريبية، ويُحسم المعنى من السياق. ومن خلط بينهما كتب جملة صحيحة نحوياً ولكنها تجيب عن سؤال آخر، وهو خطأ لا يكشفه المدقّق الإملائي لأنه لا يرى النية.",
      whyAr:
        "في anstatt/ohne + zu لا يظهر فاعل مستقل للمصدر غالباً، ويُفهم عادةً من فاعل الجملة الرئيسية: «بدلاً من أن أنام» — المتكلم نفسه. وإذا اختلف الفاعل، تساعد جملة dass على توضيحه. هذه صيغة شائعة وليست حكماً على مستوى المتعلّم. أما folglich وdemnach فيربطان نتيجة بما سبق؛ وإذا وُضع أحدهما في أول الجملة جاء الفعل المصرف بعده في المركز الثاني. والترجمتان «وبالتالي/وفقاً لما سبق» تقريبيتان.",
      table: {
        title: "الروابط المتقدمة",
        columns: ["الرابط", "المعنى", "التركيب", "مثال"],
        rows: [
          { label: "indem", cells: ["بأن/بواسطة", "جملة كاملة", "Man lernt, indem man übt."] },
          { label: "anstatt...zu", cells: ["بدلاً من أن", "zu + مصدر", "Anstatt zu schlafen, arbeitete er."] },
          { label: "ohne...zu", cells: ["دون أن", "zu + مصدر", "Er ging, ohne zu grüßen."] },
          { label: "es sei denn", cells: ["إلا إذا", "جملة كاملة", "Ich komme, es sei denn, es regnet."] },
          { label: "je nachdem", cells: ["بحسب/حسبما", "ob/wie + جملة", "Je nachdem, ob er kommt, fangen wir früher an."] },
          { label: "statt dass", cells: ["بدل أن (بفاعل)", "جملة كاملة", "Statt dass er hilft, stört er."] },
          { label: "folglich", cells: ["وبالتالي (نتيجة)", "قلب ترتيب (V2)", "Er übte viel, folglich bestand er."] },
          { label: "demnach", cells: ["وفقاً لذلك (نتيجة)", "قلب ترتيب (V2)", "Demnach müssen wir umplanen."] },
        ],
      },
      examples: [
        { de: "Man vermeidet Missverständnisse, indem man aktiv zuhört.", ar: "يتجنب المرء سوء الفهم بالإنصات النشط." },
        { de: "Anstatt zu kritisieren, sollte man loben.", ar: "بدلاً من الانتقاد، ينبغي المدح." },
        { de: "Er verließ den Raum, ohne ein Wort zu sagen.", ar: "غادر الغرفة دون أن يقول كلمة." },
        { de: "Wir treffen uns morgen, es sei denn, es kommt etwas dazwischen.", ar: "نتقابل غداً إلا إذا حدث شيء." },
        { de: "Je nachdem, wie du reagierst, entscheiden wir.", ar: "حسبما تتصرف نقرر." },
        { de: "Er hat viel geübt, folglich besteht er die Prüfung.", ar: "تدرب كثيراً، وبالتالي ينجح في الامتحان." },
        { de: "Die Lage ist ernst. Demnach müssen wir schnell handeln.", ar: "الوضع خطير. وفقاً لذلك يجب أن نتصرف بسرعة." },
        { de: "Er sprach sehr leise, sodass ihn nur die ersten Reihen verstanden.", ar: "تحدّث بهدوء شديد بحيث لم يفهمه إلا الصفوف الأولى." },
      ],
      comparisonWithArabic:
        "«بالإنصات» = indem man zuhört — قريب من «بـ + مصدر» في العربية. «بدلاً من النوم» = anstatt zu schlafen — تقابل قريب. و«دون أن يقول كلمة» = ohne ein Wort zu sagen — تقابل قريب. أما «وبالتالي/وفقاً لذلك» = folglich/demnach فيقابلهما في العربية أدوات مثل «وبالتالي» و«وفقاً لذلك». لكن هذه المقابلات تقريبية؛ فـindem وdamit قد تترجمان بصيغ عربية متشابهة رغم اختلاف العلاقة بين الوسيلة والغاية. لذلك افحص سؤال «كيف؟» أو «لأي هدف؟» وبنية الجملة الألمانية قبل اختيار الرابط، ولا تنقل ترتيب الكلمات حرفياً بين اللغتين.",
      eselsbruecke:
        "«indem = بوسيلة (كيف؟)، anstatt...zu = بدلاً من (فاعل واحد)، ohne...zu = دون أن» — «es sei denn = إلا إذا» — احفظها ككتلة واحدة. و«folglich/demnach = وبالتالي» — أخوات deshalb في قلب الترتيب.",
      commonMistakes: [
        { wrong: "Anstatt er schläft (جملة بدل zu + مصدر)", right: "Anstatt zu schlafen", whyAr: "الصيغة المصدرية anstatt … zu لا تصحّ إلا إذا كان فاعل الشطرين واحداً؛ فإن اختلف الفاعل وجبت statt dass مع جملة كاملة، ولذلك يُصلح المتعلّم الخطأ إما بتوحيد الفاعل أو بتغيير الرابط." },
        { wrong: "ohne zu sagen ein Wort (ترتيب)", right: "ohne ein Wort zu sagen", whyAr: "في البناء المصدري يقع المفعول أو الظرف بين ohne وzu، ثم يأتي المصدر في النهاية: ohne ein Wort zu sagen. وتقديم المصدر قبل مفعوله يُنتج ترتيباً غير ألماني وإن كان مفهوماً." },
        { wrong: "indem أم damit؟", right: "indem = طريقة (كيف؟). damit = هدف (لماذا؟)", whyAr: "السؤالان مختلفان: «كيف؟» يُجاب عنه بـ indem، و«لماذا؟» يُجاب عنه بـ damit. ومن أخطأ هنا لم يُخطئ في النحو، بل أجاب عن سؤال غير الذي طرحته الجملة، وهذا ما لا يكشفه أي مدقّق إملائي." },
        { wrong: "folglich في نهاية الجملة (Er übte, er bestand folglich.)", right: "Er übte viel, folglich bestand er.", whyAr: "folglich/demnach مثل deshalb: الفعل في المركز الثاني بعدهما مباشرة." },
      ],
      relatedRuleComparison: {
        title: "anstatt...zu أم statt dass؟",
        content: "فاعل واحد → anstatt...zu (Anstatt zu schlafen...). فاعلان → statt dass (Statt dass er hilft, stört er). السؤال: هل الفاعل نفسه؟",
      },
    },
    {
      id: "t2",
      titleAr: "الجسيمات الحوارية (Modalpartikeln)",
      titleDe: "Modalpartikeln: doch, ja, mal, denn, eigentlich, wohl",
      explanationAr:
        "لا تقابل Modalpartikeln كلمةً عربيةً واحدةً في كل سياق؛ فهي تساعد على إظهار موقف المتكلم وتوقعه، وتختلف دلالتها بحسب نوع الجملة والسياق والتنغيم. أمثلة تقريبية: doch قد تردّ على نفي أو تذكّر بما يُفترض أنه معروف؛ وja قد تعرض الأمر بوصفه معروفاً أو واضحاً للمتكلم؛ وmal قد تخفف بعض الطلبات؛ وdenn تضيف موقفاً أو اهتماماً في السؤال؛ وeigentlich وwohl لهما استعمالات متعددة، منها فتح سؤال/موضوع أو التعبير عن استنتاج واحتمال.\n\nتظهر هذه الجسيمات عادةً في Mittelfeld (وسط الجملة)، لكن موضعها ليس خانة جامدة واحدة: يتأثر ببنية الجملة ونوعها وبترتيب الكلمات والتنغيم. في المثال «Komm doch mal her!» ترد الجسيمات داخل الجملة؛ وفي جملة ثانوية يمكن أن تأتي بعد الفاعل وقبل بقية العبارة، مثل «…, weil er ja krank ist».\n\nقد تتشابه الجسيمة في صورتها مع كلمة من نوع آخر؛ فـ doch في «Er ist arm, doch glücklich» تصل بين فكرتين متعارضتين بمعنى «لكن»، بينما doch في «Komm doch!» جسيمة حوارية. وja في أول جواب «Ja, ich komme» جوابٌ، بينما ja في «Das ist ja super» تؤدي وظيفة حوارية. احفظ المثال في سياقه ولا تنقل ترجمة حرفية ثابتة بين الاستعمالات.\n\nهذه الجسيمات مألوفة في المحادثة، لكنها ليست حكراً عليها ولا تختفي بالضرورة من كل نص رسمي. تُعرض الأمثلة للتدريب على فهم بعض الفروق التداولية؛ ولا يثبت اختيار جسيمة في تمرين قصير طلاقةً عامة أو نطقاً طبيعياً.",
      whyAr:
        "تساعد هذه الجسيمات على قراءة النبرة المقصودة في جمل مثل «Komm mal her!» أو «Was machst du denn hier?». لا توجد ترجمة عربية حرفية ثابتة لها؛ لذا فالمعاني المقابلة في الجدول تقريبية وتحتاج إلى سياق الجملة. قارن «Komm!» بطلب مباشر، و«Komm mal her!» حيث قد تخفف mal الطلب، من غير أن تجعل ذلك قاعدة مطلقة؛ فقد يغير التنغيم والعلاقة بين المتحدثين الأثر.",
      table: {
        title: "الجسيمات الحوارية — وظائف تقريبية وأمثلة",
        columns: ["الجسيم", "الوظيفة", "المعنى العربي التقريبي", "مثال"],
        rows: [
          { label: "doch", cells: ["اعتراض/تذكير/رد على نفي (بحسب السياق)", "تقريباً: بل/بلى", "Du kommst nicht? Doch, ich komme!"] },
          { label: "ja", cells: ["قد تعرض الأمر بوصفه معروفاً أو واضحاً للمتكلم", "تقريباً: كما تعلم/حقاً", "Das ist ja klasse!"] },
          { label: "mal", cells: ["قد تخفف بعض الطلبات", "تقريباً: لحظة/من فضلك", "Komm mal her!"] },
          { label: "denn", cells: ["موقف أو اهتمام في السؤال (بحسب السياق)", "تقريباً: يا ترى؟", "Was machst du denn hier?"] },
          { label: "eigentlich", cells: ["تحديد موضوع السؤال أو إعادة توجيهه (بحسب السياق)", "تقريباً: في الأصل/بالمناسبة", "Wo wohnst du eigentlich?"] },
          { label: "wohl", cells: ["استنتاج أو احتمال بحسب السياق", "على الأرجح", "Er ist wohl krank."] },
        ],
      },
      examples: [
        { de: "Komm doch mit ins Kino!", ar: "تعال معنا إلى السينما؛ وتضيف doch موقفاً حوارياً بحسب السياق." },
        { de: "Das ist ja eine tolle Überraschung!", ar: "يا لها من مفاجأة رائعة (كما ترى)!" },
        { de: "Kannst du mir mal kurz helfen?", ar: "هل يمكنك مساعدتي فقط للحظة؟" },
        { de: "Warum lachst du denn so?", ar: "لماذا تضحك هكذا؟ قد تضيف denn موقف اهتمام أو استغراب بحسب السياق." },
        { de: "Wie heißt du eigentlich?", ar: "ما اسمك أصلاً/بالمناسبة؟ (تقريب سياقي)." },
        { de: "Er hat wohl den Bus verpasst.", ar: "على الأرجح فاته الحافلة." },
        { de: "Das hast du ja toll gemacht!", ar: "لقد أحسنت صنعاً (وهذا واضح/كما ترى)." },
      ],
      comparisonWithArabic:
        "قد تنقل العربية بعض الوظائف القريبة بأدوات أو تنغيم أو إعادة صياغة، لكن المقابلة ليست واحداً لواحد. الترجمات مثل «بلى» أو «فقط» أمثلة سياقية لا معانٍ ثابتة لكل استعمال. قارن «Ja, ich komme» بوصفها إجابة، و«Das ist ja eine tolle Überraschung!» حيث لا تكون ja جواب نعم. وقد تعبّر العربية عن بعض الأثر بالتنغيم أو بعبارة إضافية، لا بكلمة منفردة. لذلك تعلّم وظيفة الجسيمة من الحوار الكامل، وميّزها عن كلمة مطابقة في الصورة مثل doch الرابطية بمعنى «لكن».",
      eselsbruecke:
        "تذكّر أن هذه الصيغ متعدّدة الوظائف: اربط كل جسيمة بجملة وسياق محددين، ولا تعتمد ترجمة ثابتة أو اختصاراً يحصر معناها.",
      commonMistakes: [
        { wrong: "حذفها كلها (Komm! بدل Komm mal!)", right: "Komm mal! — قد يكون الطلب أخفّ بحسب السياق", whyAr: "في هذا المثال قد يبدو «Komm mal!» أقل مباشرة من «Komm!»؛ لكن درجة اللطف تعتمد أيضاً على السياق والتنغيم والعلاقة بين المتحدثين." },
        { wrong: "ترجمتها حرفياً كظرف (ja = نعم)", right: "ja في الجملة هنا ليست جواباً بمعنى نعم", whyAr: "«ja» في «Das ist ja super» ليست جواب «نعم»؛ بل تؤدي وظيفة حوارية تقريبية تتضح من السياق والتنغيم. أما «Ja, ich komme» فهي إجابة صريحة." },
        { wrong: "قصر doch على الردّ على النفي", right: "قد تردّ على نفي أو تعبّر عن تذكير/إلحاح بحسب السياق", whyAr: "في «Du kommst nicht? Doch, ich komme!» تردّ doch على نفي؛ وفي «Er kommt doch» قد تذكّر بتوقع سابق أو تفترض خلاف الظاهر. لا ينحصر استعمالها في نفي صريح." },
      ],
      relatedRuleComparison: {
        title: "الجسيمة أم رابط العطف؟ (doch = لكن)",
        content: "نفس الكلمة بمعنيين: «Er ist arm, doch glücklich» = لكن (رابط عطف). «Komm doch!» = جسيم شدّ (بلا ترجمة). الفرق: الجسيم يضيف غالباً موقفاً أو توجهاً حوارياً، ولا تُستنتج وظيفته من الكلمة وحدها.",
      },
    },
    {
      id: "t6",
      titleAr: "Funktionsverbgefüge — تراكيب الفعل الوظيفي",
      titleDe: "Funktionsverbgefüge: zur Verfügung stellen, in Kraft treten, zum Ausdruck bringen",
      explanationAr:
        "يتكوّن Funktionsverbgefüge من فعل ومجموعة اسمية أو جارّ ومجرور، ويؤدي المركّب كله وظيفة المسند ومعنى مستقلاً. يحمل الاسم غالباً الجزء الأوضح من المعنى، بينما يضيف الفعل الوظيفي معلومات نحوية وقد يساهم في دلالة الحدث أو وجهته. من أمثلته: zum Ausdruck bringen، zur Verfügung stellen، in Kraft treten.\n\nتُحفظ هذه التراكيب كوحدات معجمية مع حرف الجر أو الأداة المصاحبة لها (zum Ausdruck، zur Verfügung، in Kraft، unter Beweis). يتصرّف الفعل بحسب الشخص والزمن، وقد تتغير عناصر أخرى وفق التركيب؛ لذلك لا تُعامل العبارة كلها على أنها غير قابلة للتصريف.\n\nقد يختلف المركّب الوظيفي والفعل البسيط في السجل أو زاوية عرض الحدث أو دلالته، ولا تكون كل صيغة قابلة للاستبدال بالأخرى في كل سياق. يظهر عدد من هذه التراكيب في الكتابة الرسمية، كما تظهر تراكيب أخرى في الكلام؛ ويُختار المثال بحسب المقام والمعنى.\n\nويجب الانتباه إلى أن بعضها يظهر في صيغتين تختلفان في المعنى: «zur Verfügung stellen» تعني أن فاعلاً يضع شيئاً تحت التصرف، و«zur Verfügung stehen» تعني أن الشيء متاح؛ الأولى متعدية والثانية لازمة. ومن أخفق في التفريق بينهما قرأ نقلاً خطأً عن أن جهة «وفّرت» شيئاً بينما النص يقول إن الشيء «متاح» — والفرق في الأخبار جوهري.",
      whyAr:
        "يساعد التعرف إلى هذه التراكيب على فهم المسند كوحدة واحدة: «Die Maßnahme tritt in Kraft» تعني أن الإجراء يصبح نافذاً، لا أن أي شيء «يبدأ» فحسب. والأمثلة هنا توضح المعنى والتركيب؛ ولا تجعل إحداها شرطاً عاماً لكتابة مستوى أو نوع نص محدد. افحص كذلك الفاعل والمفعول لتفرق بين stellen وstehen.",
      table: {
        title: "أمثلة من الفعل الوظيفي (Funktionsverbgefüge)",
        columns: ["FVG", "يعادل", "المعنى", "مثال"],
        rows: [
          { label: "zum Ausdruck bringen", cells: ["ausdrücken", "يُعبّر عن", "Er brachte seine Meinung zum Ausdruck."] },
          { label: "zur Verfügung stellen", cells: ["bereitstellen", "يوفّر/يضع تحت التصرف", "Die Firma stellt Geräte zur Verfügung."] },
          { label: "in Kraft treten", cells: ["wirksam werden", "يدخل حيز التنفيذ", "Das Gesetz tritt im Januar in Kraft."] },
          { label: "in Frage stellen", cells: ["bezweifeln", "يشكك في", "Experten stellen die Studie in Frage."] },
          { label: "unter Beweis stellen", cells: ["beweisen", "يُثبت", "Er stellte sein Können unter Beweis."] },
          { label: "zum Abschluss bringen", cells: ["abschließen", "يُنهي", "Wir brachten das Projekt zum Abschluss."] },
          { label: "in Betrieb nehmen", cells: ["starten", "يُشغّل", "Das Kraftwerk wird in Betrieb genommen."] },
          { label: "zur Kenntnis nehmen", cells: ["beachten (تقريباً)", "يأخذ علماً/يحيط به", "Die Parteien nahmen das Urteil zur Kenntnis."] },
          { label: "in Betracht ziehen", cells: ["erwägen", "يأخذ بعين الاعتبار", "Wir ziehen eine Alternative in Betracht."] },
          { label: "eine Rolle spielen", cells: ["wichtig sein", "يلعب دوراً", "Die Kosten spielen eine große Rolle."] },
          { label: "in Kauf nehmen", cells: ["hinnehmen", "يقبل بـ (على مضض)", "Für den Beruf nahm sie einen Umzug in Kauf."] },
        ],
      },
      examples: [
        { de: "Die neue Regelung tritt ab März in Kraft.", ar: "تدخل اللائحة الجديدة حيز التنفيذ من مارس." },
        { de: "Der Chef brachte seine Zufriedenheit zum Ausdruck.", ar: "أعرب المدير عن رضاه." },
        { de: "Die Bibliothek stellt ihre Daten zur Verfügung.", ar: "تضع المكتبة بياناتها تحت التصرف." },
        { de: "Wir zogen mehrere Lösungen in Betracht.", ar: "أخذنا عدة حلول بعين الاعتبار." },
        { de: "Die Gewerkschaft stellte die Entscheidung in Frage.", ar: "شككت النقابة في القرار." },
        { de: "Die Regierung brachte ihre Bedenken zur Sprache.", ar: "أثارت الحكومة تحفّظاتها (عبّرت عنها رسمياً)." },
      ],
      comparisonWithArabic:
        "توجد في العربية مقابلات قريبة في بعض الأمثلة، مثل: «يُعرب عن» بدل «يقول»، و«يدخل حيز التنفيذ» بدل «يبدأ»، و«يضع تحت التصرف» بدل «يعطي»، و«يشكّك في» بدل «يرفض». والتشابه في هذه الحالات يجعل الفعل الوظيفي من أسهل أبواب B2 على المتعلّم العربي إذا فكّر بالأسلوب الرسمي في لغته قبل أن يبحث عن الفعل البسيط. والفرق الدقيق أن العربية تصوغ هذا التركيب بفعل + حرف جر + مصدر عادةً، والألمانية تصوغه بفعل + عبارة اسمية ثابتة، ومن ثمّ يجب حفظ عنصرها الثابت (zum · zur · in · unter) لا ترجمتها فقط. والخطأ الشائع أن يُترجم المتعلّم الفعل الوظيفي كأنه فعله البسيط، فيقول «Das Gesetz beginnt» في نصّ رسمي بدل «tritt in Kraft»، فتصحّ الجملة نحوياً وتفقد مستواها الأسلوبي — ولا يعني اختيار هذا المركّب أن الفعل البسيط خطأ؛ فالمناسبة تتعلق بالمعنى والسجل والسياق، لا بحدّ فاصل بين مستويين.",
      eselsbruecke:
        "«zur Verfügung stellen = يضع تحت التصرف» — احفظها ككتلة كاملة. و«in Kraft treten»: يدخل القانون حيز التنفيذ، وKraft هنا تعني قوة النفاذ.",
      commonMistakes: [
        { wrong: "Das Gesetz treten in Kraft.", right: "Das Gesetz tritt in Kraft.", whyAr: "الفعل يتصرف مع الفاعل المفرد: tritt، و«in Kraft» عبارة ثابتة." },
        { wrong: "خلط zur Verfügung stellen (يوفّر) مع zur Verfügung stehen (متاح)", right: "stellen = يفعلها فاعل · stehen = يصف حالة", whyAr: "«zur Verfügung stellen» متعدية: فاعل يضع شيئاً تحت التصرف، و«zur Verfügung stehen» لازمة: الشيء متاح. والخلط بينهما خبري لا نحوي، لأن الجملة تظلّ صحيحة شكلاً وتنقل معلومات خاطئة عن الفاعل." },
        { wrong: "Das Gesetz tritt im Kraft.", right: "Das Gesetz tritt in Kraft.", whyAr: "حرف الجر في هذا التركيب هو in: «in Kraft treten». تُحفظ العبارة مع فعلها، ولا يُستبدل حرف الجر بآخر." },
      ],
      relatedRuleComparison: {
        title: "FVG أم الفعل البسيط؟",
        content: "قد يكون الفعل البسيط أو التركيب الوظيفي أنسب بحسب المعنى والسياق والسجل؛ لا توجد قاعدة عامة بأن أحدهما أصح أو محصور في الكلام أو الكتابة الرسمية.",
      },
    },
  ];
