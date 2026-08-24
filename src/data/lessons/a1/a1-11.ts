import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-11: في المدينة
 * — أماكن المدينة + الاتجاهات + wohin? مع nach/zu + المواصلات الأساسية
 */
export const lessonA111: Lesson = {
  id: "a1-11",
  unitId: "a1-11",
  level: "A1",
  order: 1,
  titleDe: "In der Stadt",
  titleAr: "التنقل في المدينة",
  duration: 30,
  summary:
    "أماكن المدينة (Bahnhof, Supermarkt, Apotheke...)، السؤال عن الطريق، الاتجاهات (geradeaus, rechts, links)، والحركة: wohin? مع nach وzu.",
  lernziele: [
    { id: "z1", de: "Ich kann Orte in der Stadt nennen.", ar: "أن أسمّي الأماكن: المحطة، السوق، الصيدلية، البنك..." },
    { id: "z2", de: "Ich kann nach dem Weg fragen.", ar: "أن أسأل عن الطريق: Entschuldigung, wo ist der Bahnhof?" },
    { id: "z3", de: "Ich kann Richtungen verstehen: geradeaus, rechts, links.", ar: "أن أفهم الاتجاهات: مباشرة، يمين، يسار." },
    { id: "z4", de: "Ich kann sagen: Ich gehe zum Supermarkt, in die Stadt.", ar: "أن أعبر عن الحركة: أذهب إلى السوق (zu) أو إلى المدينة (in)." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "تذكر من درس السكن: wo? (أين؟) تستخدم Dativ. الآن ماذا لو أردت أن تقول «إلى أين؟» (wohin؟)؟ هل تعتقد أن حرف الجر سيتغير؟ تذكّر قاعدة «السكون Dativ، الحركة Akkusativ»!",
    motivatingQuestionDe: "Entschuldigung, wo ist der Bahnhof?",
    contextAr:
      "تائه في مدينة ألمانية؟ اليوم تتعلم كيف تسأل وتفهم الاتجاهات وتتحرك: wohin? (إلى أين؟) مع nach وzu — وهذا يكمل صورة المكان الكاملة.",
    contextDe: "Gehen Sie geradeaus und dann links!",
    connectionToPreviousAr: "في درس السكن تعلمنا wo? مع Dativ. اليوم نضيف wohin? مع Akkusativ — القاعدة «السكون/الحركة» تكتمل.",
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
      titleAr: "أماكن المدينة + السؤال عن الطريق",
      titleDe: "Orte in der Stadt und nach dem Weg fragen",
      explanationAr:
        "أماكن المدينة ليست قائمة مفردات فحسب، بل نظامٌ من الكلمات المركّبة يُغنيك حفظُ منطقه عن حفظ مئات المداخل.\n\n**أوّلاً — الأماكن الأساسية بأدواتها:**\nder Bahnhof (المحطة) · der Supermarkt · der Park · der Platz (الساحة)\ndie Apotheke (الصيدلية) · die Bank · die Post · die Schule · die Kirche (الكنيسة) · die Haltestelle (الموقف)\ndas Krankenhaus (المستشفى) · das Rathaus (دار البلدية) · das Kino · das Restaurant · das Hotel\n\n**ثانياً — قاعدة تُوفّر عليك نصف الحفظ: جنس المركّب = جنس جزئه الأخير.**\n· das Kranken**haus** ⟵ das Haus (محايد)\n· der Bahn**hof** ⟵ der Hof (مذكّر)\n· die Halte**stelle** ⟵ die Stelle (مؤنّثة)\nفأنت لا تحفظ جنس المركّبات إطلاقاً؛ يكفيك آخر جزءٍ فيها. وهذه القاعدة تنفعك في آلاف الكلمات طوال رحلتك إلى B2.\n\n**ثالثاً — بروتوكول السؤال عن الطريق، وهو حوارٌ له خطوات ثابتة:**\n١. **الاستئذان**: Entschuldigung … (لا يجوز إسقاطه)\n٢. **السؤال**: Wo ist der Bahnhof? أو الأدبّ منه: **Wie komme ich zum Bahnhof?** (كيف أصل إلى المحطة؟)\n٣. **الاعتراف بعدم الفهم**: Können Sie das bitte wiederholen? (أيمكنك الإعادة؟)\n٤. **الشكر**: Vielen Dank! — Nichts zu danken.\nوالصيغة الثانية Wie komme ich zu …? أفضل من wo ist في الشارع، لأنّ wo تطلب موقعاً على الخريطة وwie komme ich تطلب **طريقاً** — وهو ما تريده فعلاً.\n\n**رابعاً — جواب المارّ يأتي بأحد شكلين**: إمّا اتّجاهاتٌ (geradeaus, rechts) وإمّا وصفٌ بالجرّ (neben der Post, gegenüber vom Kino). فتدرّب على فهم الاثنين لا على إنتاج السؤال وحده.",
      whyAr:
        "لماذا Entschuldigung أوّلاً ولا يجوز إسقاطها؟ لأنّ قطع طريق شخصٍ غريب في الثقافة الألمانية تعدٍّ على مساحته الخاصّة، والاستئذان يرفع هذا التعدّي. ومن بدأ بالسؤال مباشرةً — كما هو مألوف في ثقافاتٍ أخرى — يُسمع فظّاً وإن كانت جملته سليمة نحواً. وهذا مثال على أنّ اللغة سلوكٌ قبل أن تكون قواعد.\n\nولماذا نُلحّ على قاعدة جنس المركّب؟ لأنّها أعلى قاعدة عائداً على الاستثمار في الألمانية كلّها. الألمانية لغةٌ تبني كلماتها بالتركيب لا بالاشتقاق، وكلّ اسمٍ طويل تراه هو في الحقيقة كلمتان أو ثلاث ملتصقة. فمن ملك القاعدة ملك جنس كلّ كلمة مركّبة يراها لأوّل مرّة في حياته — وهي آلاف.\n\nوأمّا الأماكن نفسها فمادّة امتحان: قسم Hören في Goethe A1 يقوم على إعلانات المحطّات والمواقف، وقسم Lesen على لافتات الشوارع. ومن لا يعرف Haltestelle وGleis وAusgang لا يجتاز القسمين مهما أتقن القواعد.",
      table: {
        title: "أماكن المدينة",
        columns: ["المكان", "العربية", "الملاحظة"],
        rows: [
          { label: "der Bahnhof", cells: ["محطة القطار", "مذكر"] },
          { label: "der Supermarkt", cells: ["السوبرماركت", "مذكر"] },
          { label: "die Apotheke", cells: ["الصيدلية", "مؤنث"] },
          { label: "die Bank", cells: ["البنك", "مؤنث"] },
          { label: "das Krankenhaus", cells: ["المستشفى", "محايد"] },
          { label: "die Post", cells: ["البريد", "مؤنث"] },
          { label: "das Kino", cells: ["السينما", "محايد"] },
          { label: "der Park", cells: ["الحديقة", "مذكر"] },
        ],
      },
      examples: [
        {"de": "Entschuldigung, wo ist die Apotheke?", "ar": "عذراً، أين الصيدلية؟"},
        {"de": "Entschuldigung, wie komme ich zum Bahnhof?", "ar": "عذراً، كيف أصل إلى المحطة؟ (أفضل من wo ist)"},
        {"de": "Der Bahnhof ist in der Stadtmitte.", "ar": "المحطة في وسط المدينة."},
        {"de": "Das Krankenhaus ist neben dem Park.", "ar": "المستشفى بجانب الحديقة."},
        {"de": "Die Haltestelle ist gegenüber vom Kino.", "ar": "الموقف مقابل السينما."},
        {"de": "Können Sie das bitte wiederholen?", "ar": "أيمكنك إعادة ذلك من فضلك؟"},
        {"de": "Vielen Dank! — Nichts zu danken.", "ar": "شكراً جزيلاً! — لا شكر على واجب."},
        {"de": "Das Rathaus ist am Marktplatz.", "ar": "دار البلدية في ساحة السوق."},
      ],
      comparisonWithArabic:
        "العربية تسأل „أين المحطة؟“ والألمانية Wo ist der Bahnhof? — بنيةٌ متطابقة تماماً، وهذا يريح المتعلّم في أوّل جملة يقولها في الشارع.\n\nلكنّ الفروق تبدأ بعد ذلك:\n**١.** العربية لا تُلزم بأداة قبل الاسم في هذا السياق، والألمانية تُلزم: der Bahnhof لا Bahnhof وحدها. ومن أسقط الأداة سُمع كأنّه يقرأ لافتةً لا يتكلّم.\n**٢.** العربية تبني كلماتها بالاشتقاق من جذر ثلاثيّ، والألمانية بالتركيب. فـ„مستشفى“ عندنا مشتقّة من „شفي“، وKrankenhaus عندهم مركّبة من „مريض“ و„بيت“. ومن فهم هذا الفرق البنيويّ توقّف عن البحث عن جذورٍ لا وجود لها، وبدأ يفكّك الكلمات إلى أجزائها.\n**٣.** الاستئذان في العربية اختياريّ ومتنوّع („لو سمحت“، „من فضلك“، أو لا شيء)، وفي الألمانية شبه إلزاميّ وبكلمة واحدة معيارية: Entschuldigung.",
      eselsbruecke:
        "«أسأل دائماً بـ Entschuldigung»: مثل «سمحت» في العربية. و«الأماكن العامة»: Bahnhof، Supermarkt، Apotheke، Bank — أربعة ستحتاجها في أول يوم لك.",
      commonMistakes: [
        {"wrong": "Wo ist das Apotheke?", "right": "Wo ist die Apotheke?", "whyAr": "die Apotheke مؤنّثة، وكلّ الكلمات المنتهية بـ ـe في الألمانية مؤنّثة في الغالب الأعمّ (die Schule, die Kirche, die Straße). وهذه علامة صرفية تنفعك في تخمين جنس المئات."},
        {"wrong": "Entschuldigung, Bahnhof?", "right": "Entschuldigung, wo ist der Bahnhof?", "whyAr": "إسقاط الأداة والفعل يجعل الجملة برقيةً لا سؤالاً. والألمانية لا تقبل جملةً بلا فعل مصرَّف، ولا اسماً بلا أداة في هذا الموضع."},
        {"wrong": "Wie komme ich zu der Bahnhof?", "right": "Wie komme ich zum Bahnhof?", "whyAr": "خطآن: der Bahnhof مذكّر فيصير في الجرّ dem، وzu + dem تندمجان وجوباً في zum. والصيغة المفكوكة zu dem لا تُستعمل في الكلام العاديّ."},
        {"wrong": "Das Krankenhaus ist der neben Park.", "right": "Das Krankenhaus ist neben dem Park.", "whyAr": "حرف الجرّ يسبق الأداة لا يتأخّر عنها، وneben يطلب الجرّ عند وصف موقع ثابت فتصير der ⇐ dem. وترتيب «الأداة ثمّ الحرف» انعكاسٌ لترتيب العربية «بجانب الحديقة»."},
      ],
      relatedRuleComparison: {
        title: "أسماء الأماكن والأدوات",
        content: "المستشفى = das Krankenhaus (من krank مريض + Haus بيت) — الكلمات المركبة تأخذ جنس المكوّن الأخير: Haus محايد.",
      },
    },
    {
      id: "t2",
      titleAr: "الاتجاهات + wohin? مع nach وzu",
      titleDe: "Richtungen und wohin? mit nach und zu",
      explanationAr:
        "عرفتَ الأماكن، وبقي أن تتحرّك بينها. والحركة في الألمانية تطرح سؤالاً واحداً — **wohin?** (إلى أين؟) — لكنّ جوابه ثلاثة حروف لا حرف واحد.\n\n**أوّلاً — الاتّجاهات الأساسية:** geradeaus (مباشرةً إلى الأمام) · rechts (يمين) · links (يسار) · an der Ampel (عند الإشارة) · um die Ecke (خلف الزاوية) · die erste Straße rechts (أوّل شارع يميناً).\n\n**ثانياً — الحروف الثلاثة للحركة، وقاعدة الفرز بينها:**\n· **nach** ⟵ مع البلدان والمدن وكلمة Hause: nach Deutschland · nach Tunis · nach Hause. وعلامتها أنّها تأتي **بلا أداة** إطلاقاً.\n· **zu** ⟵ مع الأماكن ذات الأداة والأشخاص: **zum** Bahnhof · **zur** Apotheke · zu Peter. وتعني الوصول إلى المكان لا بالضرورة الدخول فيه.\n· **in** ⟵ الدخول فعلاً إلى مكانٍ مغلق: **in den** Supermarkt · **ins** Kino · **in die** Stadt.\n\n**ثالثاً — وهنا الجديد الحقيقيّ: in مع الحركة تطلب النصب لا الجرّ.**\nفي درس السكن أخذتَ in + Dativ للمكان الثابت. والآن قارن بدقّة:\n· **wo?** (أين، ثابت) ⇐ Ich bin **in der** Stadt. (جرّ)\n· **wohin?** (إلى أين، حركة) ⇐ Ich gehe **in die** Stadt. (نصب)\n· wo? ⇐ Ich bin **im** Kino. — wohin? ⇐ Ich gehe **ins** Kino.\nوهذه هي قاعدة **Wechselpräpositionen** (حروف الحالتين): تسعة حروف — in, an, auf, über, unter, vor, hinter, neben, zwischen — تأخذ **النصب مع الحركة** و**الجرّ مع الثبات**. والاختبار الحاسم سؤالٌ واحد تطرحه على نفسك قبل اختيار الأداة: هل في الجملة انتقالٌ من مكانٍ إلى مكان؟\n\n**رابعاً — الاندماجات الإلزامية:** zu + dem = **zum** · zu + der = **zur** · in + das = **ins** · in + dem = **im**.",
      whyAr:
        "لماذا تفرّق الألمانية بين ثلاثة حروف حيث تكتفي العربية بـ„إلى“؟ لأنّ كلّ حرفٍ يحمل معلومةً إضافية مجّاناً. حين تقول Ich gehe **zum** Kino فأنت ذاهب إلى موقع السينما وقد تنتظر أمامها؛ وحين تقول Ich gehe **ins** Kino فأنت داخلٌ لتشاهد فيلماً. جملتان بحرفين مختلفين تنقلان معنيين مختلفين دون كلمة إضافية واحدة.\n\nوأمّا قاعدة النصب مع الحركة فمنطقها بديع: النصب في الألمانية حالة **الهدف** — المفعول به هو ما يقع عليه الفعل، والوجهة هي ما يقع إليها الانتقال. والجرّ حالة **الموضع** — المكان الذي يستقرّ فيه الشيء. فالحالة ليست زخرفة نحوية بل تحمل معنى الحركة نفسه.\n\nولماذا نُقدّم نصف القاعدة في درس السكن ونصفها هنا؟ لأنّ الشقّين لا يُفهمان إلّا بالتقابل، والتقابل لا يُدرك إلّا بعد إتقان أحد الطرفين. من تعلّم in der Stadt أوّلاً ثمّ رأى in die Stadt أدرك الفرق فوراً؛ ومن أُعطيهما معاً في يومٍ واحد خلط بينهما شهوراً.",
      table: {
        title: "nach أم zu أم in؟",
        columns: ["الحرف", "يستخدم مع", "مثال"],
        rows: [
          { label: "nach", cells: ["بلدان/مدن/منزل", "nach Deutschland, nach Tunis"] },
          { label: "zu (+dem/der)", cells: ["أماكن/أشخاص", "zum Bahnhof, zur Apotheke, zu Hause"] },
          { label: "in (+den/das/die)", cells: ["أماكن مغلقة (دخول)", "in die Stadt, ins Kino"] },
        ],
      },
      examples: [
        {"de": "Gehen Sie geradeaus und dann rechts!", "ar": "اذهب مباشرةً ثمّ يميناً!"},
        {"de": "Ich fahre nach Deutschland.", "ar": "أسافر إلى ألمانيا. (بلد ⇐ nach بلا أداة)"},
        {"de": "Wir gehen zum Bahnhof.", "ar": "نذهب إلى المحطة. (zu + dem = zum)"},
        {"de": "Ich bin in der Stadt.", "ar": "أنا في المدينة. (ثابت ⇐ جرّ)"},
        {"de": "Ich gehe in die Stadt.", "ar": "أذهب إلى المدينة. (حركة ⇐ نصب)"},
        {"de": "Heute Abend gehen wir ins Kino.", "ar": "هذا المساء نذهب إلى السينما. (دخول ⇐ ins)"},
        {"de": "An der Ampel gehen Sie links.", "ar": "عند الإشارة اتّجه يساراً."},
        {"de": "Ich fahre jetzt nach Hause.", "ar": "أذهب الآن إلى البيت. (تعبير جامد)"},
      ],
      comparisonWithArabic:
        "العربية تستعمل „إلى“ للجميع: إلى ألمانيا، إلى المحطة، إلى المدينة. والألمانية تفرّق بثلاثة حروف بحسب نوع المقصد. وهذه دقّةٌ لا نملكها، فالعربيّ مضطرّ إلى اتّخاذ قرارٍ لا تطلبه لغته الأمّ.\n\nوأخطر من ذلك: العربية **لا تملك أثراً إعرابياً للحركة إطلاقاً**. نقول „أنا في المدينة“ و„أذهب إلى المدينة“ فتبقى „المدينة“ مجرورة في الحالتين. أمّا الألمانية فتُبدّل الأداة نفسها: in der Stadt مقابل in die Stadt. فالمتعلّم العربيّ لا يبحث عن قاعدةٍ مقابلة في لغته لأنّها غير موجودة — عليه أن يبني فئةً ذهنية جديدة من الصفر، وهذا يستغرق وقتاً ويحتاج تدريباً مقصوداً لا مجرّد شرح.\n\nوفخٌّ ثالث: „إلى البيت“ تُترجم nach Hause بلا أداة، و„في البيت“ تُترجم zu Hause. تعبيران جامدان يُحفظان كما هما، وقياسهما على القاعدة يُنتج خطأً.",
      eselsbruecke:
        "«nach = إلى بلد/مدينة»، «zu = إلى مكان بجر»، «in = إلى داخل». وتذكّر الأشهر: zu Hause (إلى المنزل/في المنزل) — واحدة من أكثر العبارات استخداماً.",
      commonMistakes: [
        {"wrong": "Ich fahre nach dem Bahnhof.", "right": "Ich fahre zum Bahnhof.", "whyAr": "nach لا تُستعمل إلّا مع البلدان والمدن وكلمة Hause، وعلامتها أنّها تأتي بلا أداة. والأماكن ذات الأداة تأخذ zu: zum Bahnhof."},
        {"wrong": "Ich gehe in der Stadt. (بمعنى: سأذهب إلى المدينة)", "right": "Ich gehe in die Stadt.", "whyAr": "الفعل gehen يدلّ على انتقال، والانتقال يطلب النصب: in die Stadt. أمّا in der Stadt فتصف مكاناً ثابتاً، فتصير الجملة «أمشي داخل المدينة» لا «أذهب إليها»."},
        {"wrong": "Wir gehen in das Kino.", "right": "Wir gehen ins Kino.", "whyAr": "in + das تندمجان وجوباً في ins في الاستعمال العاديّ. والصيغة المفكوكة لا تُقال إلّا للتوكيد على سينما بعينها، وهي نادرة."},
        {"wrong": "Ich bin nach Hause.", "right": "Ich bin zu Hause.", "whyAr": "تعبيران جامدان لا يُقاسان: nach Hause للحركة (ذاهب إلى البيت) وzu Hause للثبات (موجود في البيت). وخلطهما من أشيع أخطاء المستوى الأوّل."},
      ],
      relatedRuleComparison: {
        title: "wo? / wohin? / woher?",
        content: "wo? (أين؟ سكون) → Dativ: in der Stadt. wohin? (إلى أين؟ حركة) → Akkusativ: in die Stadt. woher? (من أين؟) → aus: aus Deutschland. ثلاثية كاملة للمكان!",
      },
    },
    {
      id: "t3",
      titleAr: "بمَ تتنقّل؟ mit + Dativ ووسائل المواصلات",
      titleDe: "Verkehrsmittel: mit dem Bus, mit der Bahn",
      explanationAr:
        "عرفتَ „إلى أين“ (wohin) — وبقي „بماذا“ (womit). ووسيلة النقل في الألمانية تُقال بحرف الجرّ **mit**، وهو حرف يطلب حالة الجرّ (Dativ) دائماً بلا استثناء:\n\n· der Bus ⇐ **mit dem** Bus · die Bahn ⇐ **mit der** Bahn · das Auto ⇐ **mit dem** Auto · die Öffentlichen (جمع) ⇐ **mit den** Öffentlichen\n\n**أوّلاً — الأفعال الثلاثة للتنقّل، ولكلٍّ مجاله:**\n· **fahren** ⟵ كلّ ما يسير على الأرض: mit dem Bus fahren · mit dem Auto fahren · Fahrrad fahren\n· **fliegen** ⟵ الطيران وحده: nach Tunis fliegen\n· **gehen** ⟵ المشي على القدمين فقط: zu Fuß gehen\nوانتبه: **gehen لا تعني الذهاب مطلقاً بل المشي**. فقولك Ich gehe nach Berlin يعني أنّك ستمشي إلى برلين على قدميك — وهي جملة يفهمها الألمانيّ حرفياً فيبتسم. والصواب Ich fahre nach Berlin.\n\n**ثانياً — الاستثناء الجامد: zu Fuß.**\nالقدمان لا تُعدّان وسيلة نقل فلا تأخذان mit. والتعبير يُحفظ كما هو: **zu Fuß gehen**. ولا يُقال mit den Füßen ولا mit Fuß.\n\n**ثالثاً — لماذا mit ولا تتغيّر أبداً؟** لأنّها من مجموعة حروف الجرّ الثابتة التي لا تعرف النصب إطلاقاً: **mit · nach · aus · bei · seit · von · zu**. وسبعتها تُحفظ معاً كقائمة واحدة، وهي أشهر قائمةٍ في تعليم الألمانية. قارنها بالحروف المتقلّبة (in, auf, an) التي رأيتَها في الكتلة السابقة تتنقّل بين الحالتين حسب الحركة والثبات.\n\n**رابعاً — مفردات المحطّة التي تحتاجها فعلاً:** die Haltestelle (موقف الحافلة) · der Bahnsteig / das Gleis (الرصيف) · die Fahrkarte (التذكرة) · einsteigen (يركب) · aussteigen (ينزل) · umsteigen (يبدّل الوسيلة). والثلاثة الأخيرة أفعال منفصلة: Ich steige in Köln **um**.",
      whyAr:
        "لماذا Dativ لا Akkusativ مع mit؟ لأنّ mit من الحروف السبعة التي لا تتغيّر حالتها أبداً — بخلاف in وauf اللذين يتنقّلان بين الحالتين حسب المعنى. فحفظ المجموعة السباعية يريحك من التفكير في كلّ جملة: dem/der/dem/den وانتهى الأمر. وهذه إحدى المرّات القليلة التي تكافئك فيها الألمانية بقاعدةٍ بلا استثناء.\n\nولماذا نُفرد الفعل gehen بهذا التحذير؟ لأنّ الخطأ فيه لا يُسمع خطأً نحوياً بل يُنتج معنى مضحكاً — وهذا أسوأ من الركاكة في التواصل الحقيقيّ. الإنجليزية go والعربية „يذهب“ كلتاهما عامّة لا تحدّد الوسيلة، والألمانية تحدّدها في الفعل نفسه. فالمتعلّم ينقل العموم من لغته إلى لغةٍ لا تعرفه.\n\nوأمّا مفردات المحطّة فمادّة امتحان مباشرة: قسم Hören في Goethe A1 مبنيّ على إعلانات القطارات والحافلات، وكلمة Gleis أو umsteigen قد تكون مفتاح السؤال كلّه.",
      table: {
        title: "الوسيلة والأداة والفعل",
        columns: ["الوسيلة", "مع mit", "الفعل المعتاد"],
        rows: [
          { label: "der Bus", cells: ["mit dem Bus", "Ich fahre mit dem Bus."] },
          { label: "die Bahn / die U-Bahn", cells: ["mit der Bahn", "Sie fährt mit der U-Bahn."] },
          { label: "das Fahrrad", cells: ["mit dem Fahrrad", "Wir fahren mit dem Fahrrad."] },
          { label: "das Flugzeug", cells: ["mit dem Flugzeug", "Er fliegt nach Berlin."] },
          { label: "بلا وسيلة", cells: ["zu Fuß (استثناء)", "Ich gehe zu Fuß."] },
        ],
      },
      examples: [
        {"de": "Ich fahre jeden Tag mit dem Bus zur Arbeit.", "ar": "أذهب كلّ يوم بالحافلة إلى العمل."},
        {"de": "Wie kommst du zur Uni? — Mit der U-Bahn.", "ar": "كيف تصل إلى الجامعة؟ — بمترو الأنفاق."},
        {"de": "Zum Supermarkt gehe ich zu Fuß.", "ar": "إلى السوبرماركت أذهب مشياً."},
        {"de": "Wir fahren mit dem Auto in die Stadt.", "ar": "نذهب بالسيارة إلى المدينة."},
        {"de": "Sie fliegt mit dem Flugzeug nach Tunis.", "ar": "تسافر بالطائرة إلى تونس. (طيران ⇐ fliegen)"},
        {"de": "Ich steige in Köln um.", "ar": "أبدّل القطار في كولونيا. (فعل منفصل)"},
        {"de": "Wo ist die Haltestelle? — Dort, gegenüber der Post.", "ar": "أين الموقف؟ — هناك، مقابل البريد."},
        {"de": "Eine Fahrkarte nach Berlin, bitte.", "ar": "تذكرة إلى برلين من فضلك."},
      ],
      comparisonWithArabic:
        "العربية تقول „بالحافلة“ بحرف الباء الملتصق، ولا تُغيّر شيئاً بعده. والألمانية تحتاج كلمتين: mit + أداة مجرورة (dem/der). فالبنية أثقل لكنّها منتظمة.\n\nوالفخّ العربيّ الأوّل: ترجمة „مشياً“ بـmit den Füßen حرفياً. والصواب تعبيرٌ جاهز لا يُترجم: zu Fuß.\n\nوالفخّ الثاني أعمق: العربية تملك فعلاً واحداً عامّاً هو „يذهب“ يصلح للمشي والركوب والطيران معاً. والألمانية توزّعها على ثلاثة أفعال بحسب الوسيلة. فالعربيّ يستعمل gehen في كلّ موضع لأنّه أوّل ما تعلّمه، فيقول Ich gehe nach Deutschland وهي جملة تعني المشي إلى ألمانيا. وهذا نوع من الخطأ لا تكشفه القواعد بل المعنى وحده.",
      eselsbruecke:
        "«mit تعطي دائماً dem/der»: تخيّل mit مفتاحاً لا يفتح إلّا باب الـ Dativ. وللاستثناء: قدماك لا تحتاجان تذكرةً ولا أداة — zu Fuß وكفى.",
      commonMistakes: [
        {"wrong": "Ich fahre mit den Bus.", "right": "Ich fahre mit dem Bus.", "whyAr": "der Bus في الجرّ يصير dem لا den. والنون هنا خطأ شائع لأنّ المتعلّم يخلط النصب بالجرّ، وmit لا تعرف النصب إطلاقاً."},
        {"wrong": "Ich gehe mit Fuß.", "right": "Ich gehe zu Fuß.", "whyAr": "تعبير جامد يُحفظ كما هو: zu Fuß. والقدمان لا تُعدّان وسيلة نقل فلا تأخذان mit، ولا يُقال mit den Füßen أيضاً."},
        {"wrong": "Ich gehe nach Berlin.", "right": "Ich fahre nach Berlin.", "whyAr": "gehen تعني المشي على القدمين لا الذهاب مطلقاً، فالجملة تقول إنّك ستمشي إلى برلين. والعربية والإنجليزية تملكان فعلاً عامّاً واحداً، والألمانية توزّعه على fahren وfliegen وgehen."},
        {"wrong": "Ich fahre mit dem Flugzeug nach Tunis. — Nein: Ich gehe mit dem Flugzeug.", "right": "Ich fliege nach Tunis.", "whyAr": "الطيران له فعله الخاصّ fliegen، ويُغني عن ذكر الوسيلة أصلاً. فقولك mit dem Flugzeug fliegen تكرارٌ مقبول لكنّه ثقيل، وgehen معه خطأ صريح."},
      ],
      relatedRuleComparison: {
        title: "wohin / womit / wie lange — ثلاثة أسئلة لرحلة واحدة",
        content:
          "wohin? يُجاب بـ nach/zu/in (إلى أين) · womit? أو wie? يُجاب بـ mit + Dativ (بأي وسيلة) · wie lange? يُجاب بمدّة (zwanzig Minuten). جملة تجمعها: Ich fahre mit dem Bus zur Arbeit — zwanzig Minuten.",
      },
    },
    {
      id: "t4",
      titleAr: "ضمائر المفعول به: Ich sehe ihn",
      titleDe: "Akkusativpronomen: mich, dich, ihn, sie, es",
      explanationAr:
        "في المدينة تتكرّر الأسماء كثيراً: أين المحطة؟ المحطة هناك. هل ترى المحطة؟ وتكرار الاسم ثلاث مرّات في ثلاث جمل ركاكةٌ في كلّ لغة. والعلاج **ضمير المفعول به** — أن تقول „أراه“ بدل „أرى المحطة“.\n\n**أوّلاً — ضمائر النصب الثمانية:**\n· ich ⇐ **mich** (إيّاي) · du ⇐ **dich** · er ⇐ **ihn** · sie ⇐ **sie** · es ⇐ **es**\n· wir ⇐ **uns** · ihr ⇐ **euch** · Sie ⇐ **Sie**\nولاحظ أنّ ثلاثة منها **لا تتغيّر إطلاقاً**: sie وes وSie. فأنت في الحقيقة تحفظ خمسة لا ثمانية.\n\n**ثانياً — الضمير يتبع جنس الاسم لا جنس الشيء في الواقع.** وهذه أخطر نقطة في الكتلة:\n· **der** Bahnhof ⇐ Ich sehe **ihn**. (المحطة جماد، ومع ذلك ihn لأنّ الكلمة مذكّرة)\n· **die** Apotheke ⇐ Ich sehe **sie**.\n· **das** Kino ⇐ Ich sehe **es**.\nفالسؤال الذي تطرحه على نفسك ليس „أهو رجل أم امرأة أم شيء؟“ بل „ما أداة هذه الكلمة؟“. وأداة الكلمة تُملي الضمير إملاءً.\n\n**ثالثاً — ihn هو الضمير الوحيد الذي يتغيّر شكله في النصب.**\nقارن: **Er** ist groß (رفع) ⇐ Ich kenne **ihn** (نصب). أمّا sie وes فيبقيان على حالهما بين الرفع والنصب. وهذه هي القاعدة الذهبية نفسها التي أخذتها في الأدوات: **المذكّر وحده يتحرّك** — der ⇐ den، er ⇐ ihn.\n\n**رابعاً — موضع الضمير في الجملة.** الضمير خفيف فيتقدّم على الاسم الثقيل:\n· Ich sehe **den Bahnhof** dort. ⇐ Ich sehe **ihn** dort.\n· وإذا تصدّر ظرفٌ الجملةَ بقي الضمير مباشرةً بعد الفعل: Dort sehe **ich ihn**.\n\n**خامساً — أفعال تطلب النصب وتراها كلّ يوم:** sehen (يرى) · kennen (يعرف) · nehmen (يأخذ) · finden (يجد) · brauchen (يحتاج) · suchen (يبحث عن) · fragen (يسأل).",
      whyAr:
        "لماذا تُدرَّس ضمائر النصب في درس المدينة تحديداً؟ لأنّ السؤال عن الطريق حوارٌ قصير متلاحق لا يحتمل تكرار الأسماء: Entschuldigung, wo ist der Bahnhof? — Sehen Sie die Kirche dort? Gehen Sie an **ihr** vorbei, dann sehen Sie **ihn**. من لا يملك الضمائر لا يفهم جواب المارّ أصلاً، ولو حفظ أسماء المدينة كلّها.\n\nولماذا يُصعِّب العربيّ على نفسه هنا خاصّة؟ لأنّه يفكّر في **الشيء** لا في **الكلمة**. المحطة في ذهنه بناءٌ جامد، فيختار es بوصفها „شيئاً“، أو sie لأنّ „المحطة“ مؤنّثة في العربية. والألمانية لا تعرف من هذا شيئاً: der Bahnhof ⇐ ihn، مهما كان جنس الكلمة في لغتك ومهما كان الشيء في الواقع.\n\nوهذه الكتلة أيضاً استثمارٌ مؤجَّل: الضمائر الثمانية نفسها ستعود في A2 مع ضمائر الجرّ (mir, dir, ihm) ثمّ مع الأفعال الانعكاسية (sich waschen). فمن أتقن الجدول الأوّل وجد الثاني نصفَ مُتقَن.",
      table: {
        title: "من ضمير الفاعل إلى ضمير المفعول",
        columns: ["الشخص", "فاعل (Nominativ)", "مفعول (Akkusativ)"],
        rows: [
          { label: "أنا", cells: ["ich", "mich"] },
          { label: "أنتَ/أنتِ", cells: ["du", "dich"] },
          { label: "هو / der", cells: ["er", "ihn"] },
          { label: "هي / die", cells: ["sie", "sie"] },
          { label: "هو المحايد / das", cells: ["es", "es"] },
          { label: "نحن", cells: ["wir", "uns"] },
          { label: "أنتم", cells: ["ihr", "euch"] },
          { label: "حضرتك (رسميّ)", cells: ["Sie", "Sie"] },
        ],
      },
      examples: [
        { de: "Wo ist der Bahnhof? — Ich sehe ihn dort.", ar: "أين المحطة؟ — أراها هناك. (der ⇐ ihn)" },
        { de: "Kennst du die Apotheke? — Ja, ich kenne sie.", ar: "أتعرف الصيدلية؟ — نعم، أعرفها." },
        { de: "Das Kino ist neu. Ich finde es sehr schön.", ar: "السينما جديدة. أجدها جميلة جداً. (das ⇐ es)" },
        { de: "Nimmst du den Bus? — Ja, ich nehme ihn.", ar: "أتأخذ الحافلة؟ — نعم، آخذها." },
        { de: "Entschuldigung, können Sie mich hören?", ar: "عذراً، هل تسمعني؟" },
        { de: "Ich brauche dich heute Abend.", ar: "أحتاجك هذا المساء." },
        { de: "Der Weg ist lang. Wir kennen ihn nicht.", ar: "الطريق طويل. لا نعرفه." },
        { de: "Dort sehe ich ihn.", ar: "هناك أراه. (الضمير مباشرةً بعد الفعل)" },
      ],
      comparisonWithArabic:
        "العربية تلصق ضمير المفعول بالفعل لاحقةً: „أراه“ و„أعرفها“ و„أخذته“. كلمةٌ واحدة تحمل الفعل والمفعول معاً. والألمانية تفصلهما كلمتين: Ich sehe ihn. فالبنية أطول لكنّها أوضح.\n\nوموضع الالتباس الأكبر: العربية تُسند الضمير إلى **معنى** الكلمة أحياناً وإلى **لفظها** أحياناً، وتملك مذكّراً ومؤنّثاً فقط. والألمانية تُسنده إلى **الأداة** حصراً، وتملك ثلاثة أجناس. فكلمة „الكتاب“ مذكّرة عندنا وdas Buch محايدة عندهم؛ و„الصيدلية“ مؤنّثة عندنا وdie Apotheke مؤنّثة عندهم — تطابقٌ بالصدفة لا بقاعدة. ولا سبيل إلّا حفظ الأداة مع الكلمة من أوّل يوم.\n\nوفرقٌ ثالث لافت: العربية لا تفرّق في الضمير بين الفاعل والمفعول تفريقاً كاملاً („هو“ و„ـه“)، والألمانية تُبدّل الكلمة كلّها: er ⇐ ihn. والعربي يميل إلى الإبقاء على er في موضع المفعول لأنّه يترجم „هو“ لا „إيّاه“.",
      eselsbruecke:
        "**المذكّر وحده يتحرّك**: der ⇐ den، وer ⇐ **ihn**. أمّا die/sie وdas/es فحجران لا يتزحزحان. واربطها بالنون: de**n** ⟵ ih**n** — النون علامة النصب في المذكّر.",
      commonMistakes: [
        {
          wrong: "Wo ist der Bahnhof? — Ich sehe es.",
          right: "Ich sehe ihn.",
          whyAr: "المتعلّم اختار es لأنّ المحطة في ذهنه «شيء» جامد. والألمانية لا تنظر إلى الشيء بل إلى الأداة: der Bahnhof مذكّر ⇐ ihn. والسؤال الصحيح دائماً: ما أداة هذه الكلمة؟",
        },
        {
          wrong: "Ich kenne er nicht.",
          right: "Ich kenne ihn nicht.",
          whyAr: "er ضمير فاعل لا مفعول. وkennen فعل متعدٍّ ينصب مفعوله، فيلزم ihn. والعربي يقع فيه لأنّه يترجم «هو» لا «إيّاه»، والعربية لا تُبدّل الضمير تبديلاً كاملاً.",
        },
        {
          wrong: "Siehst du mich? — Ja, ich sehe du.",
          right: "Ja, ich sehe dich.",
          whyAr: "du للفاعل وdich للمفعول. والخطأ يكشف أنّ المتعلّم يحفظ الضمائر قائمةً واحدة لا جدولاً بحالتين. وكلّ ضمير له صورتان على الأقلّ.",
        },
        {
          wrong: "Ich sehe die Kirche. Ich gehe an die vorbei.",
          right: "Ich gehe an ihr vorbei.",
          whyAr: "حرف الجرّ an يفرض حالته على الضمير، وvorbeigehen an يطلب الجرّ (Dativ) فتصير sie ⇐ ihr. فالضمير لا يتبع الفعل وحده بل حرف الجرّ إن وُجد.",
        },
      ],
      relatedRuleComparison: {
        title: "الأداة والضمير: جدولٌ واحد بوجهين",
        content:
          "قارن السطرين: **der ⇐ den** و**er ⇐ ihn** · **die ⇐ die** و**sie ⇐ sie** · **das ⇐ das** و**es ⇐ es**. النمط واحد حرفاً بحرف: المذكّر يتحرّك في النصب، والمؤنّث والمحايد يثبتان. فإن أتقنت أدوات النصب في درس الطعام (a1-03) فأنت تملك ضمائر النصب أصلاً — لا تحفظ جدولاً جديداً بل تُسقط الجدول القديم على كلماتٍ أخرى.",
      },
    },
  ],
  reading: {
    "id": "read-a1-11",
    "titleDe": "Der Weg zum Goethe-Institut",
    "titleAr": "الطريق إلى معهد غوته",
    "textType": "erzaehlung",
    "paragraphs": [
      "Yasmin ist neu in München. Heute hat sie ihren ersten Deutschkurs im Goethe-Institut. Der Kurs beginnt um neun Uhr, aber sie kennt den Weg nicht. Sie fährt zuerst mit der U-Bahn bis zum Hauptbahnhof.",
      "Am Hauptbahnhof steigt sie aus. Vor dem Bahnhof sieht sie eine Frau mit einem Hund. Entschuldigung, wie komme ich zum Goethe-Institut? — Zum Goethe-Institut? Das kenne ich gut. Es ist nicht weit von hier.",
      "Gehen Sie hier geradeaus bis zur Ampel. An der Ampel gehen Sie links. Dann sehen Sie eine Kirche. Gehen Sie an ihr vorbei und nehmen Sie die erste Straße rechts.",
      "Yasmin versteht nicht alles. Können Sie das bitte wiederholen? Ich bin neu hier. — Natürlich! Also: geradeaus, an der Ampel links, dann die erste Straße rechts. Das Institut ist gegenüber von einer Apotheke. Sie können es nicht verpassen.",
      "Und wie lange dauert das zu Fuß? — Ungefähr zehn Minuten. Sie können auch mit dem Bus fahren, aber zu Fuß ist es heute schneller. Der Bus kommt erst in einer Viertelstunde.",
      "Vielen Dank! — Nichts zu danken. Viel Erfolg im Kurs! Yasmin geht zu Fuß. Nach zehn Minuten sieht sie ein großes Gebäude. Sie liest das Schild: Goethe-Institut München. Sie hat es gefunden, und es ist erst fünf vor neun."
    ],
    "paragraphsAr": [
      "ياسمين جديدة في ميونخ. اليوم عندها أوّل درس ألمانية في معهد غوته. الدرس يبدأ في التاسعة، لكنّها لا تعرف الطريق. تركب أوّلاً المترو حتّى المحطة المركزية.",
      "في المحطة المركزية تنزل. أمام المحطة ترى امرأةً مع كلب. عذراً، كيف أصل إلى معهد غوته؟ — معهد غوته؟ أعرفه جيّداً. ليس بعيداً من هنا.",
      "امشي من هنا مباشرةً حتّى الإشارة. عند الإشارة اتّجهي يساراً. ثمّ سترين كنيسة. مرّي بجانبها وخذي أوّل شارع يميناً.",
      "ياسمين لا تفهم كلّ شيء. أيمكنك إعادة ذلك من فضلك؟ أنا جديدة هنا. — بالطبع! إذاً: مباشرةً، عند الإشارة يساراً، ثمّ أوّل شارع يميناً. المعهد مقابل صيدلية. لا يمكن أن يفوتك.",
      "وكم يستغرق ذلك مشياً؟ — عشر دقائق تقريباً. يمكنك أيضاً الذهاب بالحافلة، لكنّ المشي أسرع اليوم. الحافلة لا تأتي قبل ربع ساعة.",
      "شكراً جزيلاً! — لا شكر على واجب. بالتوفيق في الدورة! ياسمين تمشي على قدميها. بعد عشر دقائق ترى مبنى كبيراً. تقرأ اللافتة: معهد غوته ميونخ. وجدته، والساعة التاسعة إلّا خمس دقائق فقط."
    ],
    "glossary": [
      {
        "de": "der Hauptbahnhof",
        "ar": "المحطة المركزية",
        "noteAr": "مركّبة: Haupt (رئيسيّ) + Bahnhof."
      },
      {
        "de": "steigt … aus (aussteigen)",
        "ar": "ينزل من وسيلة نقل",
        "noteAr": "فعل منفصل؛ وضدّه einsteigen."
      },
      {
        "de": "die Ampel",
        "ar": "إشارة المرور",
        "noteAr": "an der Ampel = عند الإشارة."
      },
      {
        "de": "geradeaus",
        "ar": "مباشرةً إلى الأمام",
        "noteAr": "لا تتغيّر أبداً."
      },
      {
        "de": "an ihr vorbei (vorbeigehen an)",
        "ar": "يمرّ بجانبها",
        "noteAr": "الضمير هنا مجرور: an ihr."
      },
      {
        "de": "die erste Straße rechts",
        "ar": "أوّل شارع يميناً",
        "noteAr": "عدد ترتيبيّ + اتّجاه."
      },
      {
        "de": "gegenüber von",
        "ar": "مقابل",
        "noteAr": "يتبعه الجرّ: gegenüber von einer Apotheke."
      },
      {
        "de": "wiederholen",
        "ar": "يُعيد، يكرّر",
        "noteAr": "Können Sie das wiederholen?"
      },
      {
        "de": "zu Fuß",
        "ar": "مشياً على الأقدام",
        "noteAr": "تعبير جامد بلا mit."
      },
      {
        "de": "die Viertelstunde",
        "ar": "ربع ساعة",
        "noteAr": "Viertel (ربع) + Stunde (ساعة)."
      },
      {
        "de": "das Gebäude",
        "ar": "المبنى",
        "noteAr": "محايد، وجمعه بلا تغيير."
      },
      {
        "de": "Nichts zu danken.",
        "ar": "لا شكر على واجب.",
        "noteAr": "جواب معياريّ لـVielen Dank."
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Womit fährt Yasmin zum Hauptbahnhof?",
        "errorType": "preposition",
        "options": [
          "Mit der U-Bahn",
          "Mit dem Bus",
          "Mit dem Auto",
          "Zu Fuß"
        ],
        "correctIndex": 0,
        "paragraph": 0,
        "explanation": "Sie fährt zuerst mit der U-Bahn bis zum Hauptbahnhof — وmit + Dativ: der U-Bahn."
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Was macht Yasmin an der Ampel?",
        "errorType": "vocabulary",
        "options": [
          "Sie geht links.",
          "Sie geht rechts.",
          "Sie geht geradeaus.",
          "Sie wartet auf den Bus."
        ],
        "correctIndex": 0,
        "paragraph": 2,
        "explanation": "An der Ampel gehen Sie links — ثمّ أوّل شارع يميناً بعد الكنيسة."
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Wo ist das Goethe-Institut?",
        "errorType": "preposition",
        "options": [
          "Gegenüber von einer Apotheke",
          "Neben dem Bahnhof",
          "In der Kirche",
          "Hinter der Ampel"
        ],
        "correctIndex": 0,
        "paragraph": 3,
        "explanation": "Das Institut ist gegenüber von einer Apotheke — والمرأة تؤكّد: Sie können es nicht verpassen."
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Warum geht Yasmin zu Fuß und nicht mit dem Bus?",
        "errorType": "vocabulary",
        "options": [
          "Der Bus kommt erst in einer Viertelstunde.",
          "Sie hat kein Geld.",
          "Der Bus fährt nicht dorthin.",
          "Sie mag den Bus nicht."
        ],
        "correctIndex": 0,
        "paragraph": 4,
        "explanation": "Der Bus kommt erst in einer Viertelstunde — فالمشي أسرع اليوم رغم أنّه يستغرق عشر دقائق."
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Wie sagt die Frau nach Vielen Dank?",
        "errorType": "vocabulary",
        "options": [
          "Nichts zu danken.",
          "Bitte schön.",
          "Auf Wiedersehen.",
          "Kein Problem."
        ],
        "correctIndex": 0,
        "paragraph": 5,
        "explanation": "تجيب المرأة: Nichts zu danken. Viel Erfolg im Kurs! — وهي صيغة معيارية للردّ على الشكر."
      }
    ],
    "redemittel": [
      {
        "de": "Entschuldigung, wie komme ich zum / zur …?",
        "ar": "عذراً، كيف أصل إلى …؟"
      },
      {
        "de": "Gehen Sie geradeaus bis zur Ampel.",
        "ar": "امشِ مباشرةً حتّى الإشارة."
      },
      {
        "de": "An der Ampel gehen Sie links / rechts.",
        "ar": "عند الإشارة اتّجه يساراً / يميناً."
      },
      {
        "de": "Nehmen Sie die erste Straße rechts.",
        "ar": "خذ أوّل شارع يميناً."
      },
      {
        "de": "Es ist gegenüber von …",
        "ar": "إنّه مقابل …"
      },
      {
        "de": "Können Sie das bitte wiederholen?",
        "ar": "أيمكنك إعادة ذلك من فضلك؟"
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
    "discussionAr": "صف الطريق من بيتك إلى أقرب محطّة أو سوق: بأيّ وسيلة تذهب (mit + Dativ؟ أم zu Fuß؟)، وكم يستغرق، وما المعالم التي تمرّ بها؟ واستعمل geradeaus وlinks/rechts وضميراً واحداً من ضمائر النصب."
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "السؤال عن الطريق",
        lines: [
          { speaker: "Sami", de: "Entschuldigung, wo ist der Bahnhof?", ar: "عذراً، أين محطة القطار؟" },
          { speaker: "Passant", de: "Gehen Sie geradeaus und dann links. Der Bahnhof ist neben dem Park.", ar: "اذهبوا مباشرة ثم يساراً. المحطة بجانب الحديقة." },
          { speaker: "Sami", de: "Ist es weit?", ar: "هل هو بعيد؟" },
          { speaker: "Passant", de: "Nein, nur fünf Minuten zu Fuß.", ar: "لا، خمس دقائق فقط مشياً." },
          { speaker: "Sami", de: "Vielen Dank!", ar: "شكراً جزيلاً!" },
        ],
      },
      {
        id: "l2",
        title: "إلى أين؟",
        lines: [
          { speaker: "Mona", de: "Wohin gehst du?", ar: "إلى أين تذهب؟" },
          { speaker: "Karim", de: "Ich gehe in die Stadt. Ich kaufe ein Geschenk.", ar: "أذهب إلى المدينة. أشتري هدية." },
          { speaker: "Mona", de: "Und ich fahre nach Hause.", ar: "وأنا أسافر/أذهب إلى المنزل." },
          { speaker: "Karim", de: "Bis später! Wir sehen uns im Kino um acht.", ar: "إلى اللقاء! نراك في السينما في الثامنة." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wo ist der Bahnhof?",
        questionAr: "أين المحطة؟",
        options: ["neben dem Park", "neben der Bank", "um die Ecke", "in der Stadtmitte"],
        correctIndex: 0,
        explanation: "قال المارة: Der Bahnhof ist neben dem Park — بجانب الحديقة.",
        errorType: "preposition",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wohin geht Karim?",
        questionAr: "إلى أين يذهب كريم؟",
        options: ["in die Stadt", "nach Hause", "zum Bahnhof", "zur Apotheke"],
        correctIndex: 0,
        explanation: "قال كريم: Ich gehe in die Stadt.",
        errorType: "preposition",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann sehen sie sich im Kino?",
        questionAr: "متى يتقابلان في السينما؟",
        options: ["um acht Uhr", "um neun Uhr", "am Abend um zehn", "um sieben Uhr"],
        correctIndex: 0,
        explanation: "قال كريم: Wir sehen uns im Kino um acht.",
        errorType: "vocabulary",
      },
    ],
  },
  pronunciation: {
    id: "p1",
    title: "أصوات المدينة: h، au، وst",
    items: [
      { de: "der Bahnhof", ar: "المحطة", note: "h يُنطق: بان-هوف" },
      { de: "die Straße", ar: "الشارع", note: "st في البداية = شت: شتراسِه" },
      { de: "geradeaus", ar: "مباشرة", note: "g = غ + au = آو: غرادِه-آوس" },
      { de: "die Apotheke", ar: "الصيدلية", note: "th = ت فقط: آبوتيكِه" },
      { de: "das Krankenhaus", ar: "المستشفى", note: "لا يوجد ch هنا: nk = نغ+ك، وh مسموعة لأنها تبدأ الجزء الثاني (Kranken+Haus): كرانكن-هاوس" },
      { de: "die Ampel", ar: "إشارة المرور", note: "p مزدوجة قصيرة: آمپِل" },
    ],
    tip: "Apotheke تُنطق «آبوتيكه» — th الألمانية ت = ت عادية وليست ذ إنجليزية!",
    shadowing: [
      { de: "Entschuldigung, wo ist die Apotheke?", ar: "عذراً، أين الصيدلية؟", tip: "Entschuldigung = إنت-شول-دي-غونغ (sch = ش)" },
      { de: "Gehen Sie geradeaus!", ar: "اذهبوا مباشرة!", tip: "geradeaus = غرادِه-آوس" },
      { de: "Ich gehe in die Stadt.", ar: "أذهب إلى المدينة.", tip: "Stadt = شتات (st في البداية)" },
      { de: "Der Bahnhof ist weit.", ar: "المحطة بعيدة.", tip: "weit = ڤايت (ei = آي)" },
    ],
  },
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب إلى أين تذهب اليوم:",
      prompt: "Wohin gehst du heute? (اكتب جملة كاملة بـ nach/zu/in)",
      acceptedAnswers: ["Ich gehe in die Stadt", "Ich gehe zum Supermarkt", "Ich fahre nach Tunis", "Ich gehe nach Hause"],
      sampleAnswer: "Ich gehe in die Stadt.",
      explanation: "اختر الحرف حسب الوجهة: in (مغلق)، zum (مكان)، nach (بلد/مدينة).",
      errorType: "preposition",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ nach/zu/zum/zur/in:",
      template: "Ich fahre ___ Deutschland. Wir gehen ___ Bahnhof. Sie geht ___ Apotheke. Er geht ___ Kino.",
      blanks: [
        { correct: "nach", options: ["nach", "zum", "in"] },
        { correct: "zum", options: ["nach", "zum", "in"] },
        { correct: "zur", options: ["nach", "zum", "zur"] },
        { correct: "ins", options: ["nach", "ins", "zum"] },
      ],
      explanation: "nach + بلد، zum (zu+dem) + مكان مذكر، zur (zu+der) + مكان مؤنث، ins (in+das) + مكان محايد.",
      errorType: "preposition",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Apotheke ist um die Ecke.",
      explanation: "الصيدلية خلف الزاوية — um die Ecke من أشهر عبارات الاتجاهات.",
      errorType: "spelling",
    },
  ],
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الحرف الصحيح:",
      questionDe: "Ich fahre ___ Deutschland.",
      options: ["nach", "zu", "in", "aus"],
      correctIndex: 0,
      explanation: "البلدان تأخذ nach: nach Deutschland.",
      errorType: "preposition",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wir gehen ___ Supermarkt.",
      options: ["zum", "nach", "ins", "zur"],
      correctIndex: 0,
      explanation: "Supermarkt مذكر → zum (zu+dem).",
      errorType: "preposition",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل المكان بمعناه:",
      pairs: [
        { left: "der Bahnhof", right: "محطة القطار" },
        { left: "die Apotheke", right: "الصيدلية" },
        { left: "das Krankenhaus", right: "المستشفى" },
        { left: "die Bank", right: "البنك" },
      ],
      explanation: "أربعة أماكن أساسية في أي مدينة.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["geradeaus", "Gehen", "bitte", "Sie", "!"],
      correctSentence: "Gehen Sie geradeaus bitte!",
      explanation: "أمر مهذب: Gehen Sie + geradeaus + bitte.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich gehe zu Deutschland.",
      wrongWord: "zu",
      correctWord: "nach",
      options: ["nach", "in", "ins", "zum"],
      explanation: "البلدان تأخذ nach وليس zu.",
      errorType: "preposition",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالاتجاه الصحيح (geradeaus/rechts/links):",
      template: "Gehen Sie ___, dann ___, und die Bank ist ___ Ecke.",
      blanks: [
        { correct: "geradeaus", options: ["geradeaus", "rechts", "links"] },
        { correct: "links", options: ["geradeaus", "rechts", "links"] },
        { correct: "um die", options: ["um die", "an die", "in die"] },
      ],
      explanation: "مباشرة (geradeaus)، ثم يسار (links)، عند الزاوية (um die Ecke).",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال عن المكان:",
      prompt: "Die Post. → (اسأل: أين البريد؟)",
      acceptedAnswers: ["Wo ist die Post", "Wo ist die Post?"],
      sampleAnswer: "Wo ist die Post?",
      explanation: "السؤال عن مكان: Wo ist + الاسم (بأداة صحيحة).",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wohin gehst du?",
      questionAr: "ما معنى السؤال؟",
      options: ["إلى أين تذهب؟", "أين تسكن؟", "متى تذهب؟", "من أين أنت؟"],
      correctIndex: 0,
      explanation: "wohin? = إلى أين؟ (سؤال الحركة).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich gehe zu Hause. (أنا ذاهب إلى المنزل الآن)",
      wrongWord: "zu Hause",
      correctWord: "nach Hause",
      options: ["nach Hause", "in Hause", "zum Haus", "aus Hause"],
      explanation: "الحركة إلى المنزل: nach Hause. (zu Hause = في المنزل، سكون).",
      errorType: "preposition",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Der Supermarkt ist neben dem Bahnhof.",
      explanation: "السوبرماركت بجانب المحطة — neben + Dativ: neben dem Bahnhof.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالأداة الصحيحة بعد mit:",
      template: "Ich fahre mit ___ Bus. Sie fährt mit ___ U-Bahn. Wir fahren mit ___ Auto.",
      blanks: [
        { correct: "dem", options: ["dem", "den", "der"] },
        { correct: "der", options: ["der", "dem", "die"] },
        { correct: "dem", options: ["dem", "das", "den"] },
      ],
      explanation: "mit يطلب الجرّ دائماً: der Bus ⇒ dem · die U-Bahn ⇒ der · das Auto ⇒ dem.",
      errorType: "case",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Zum Supermarkt gehe ich mit Fuß.",
      wrongWord: "mit Fuß",
      correctWord: "zu Fuß",
      options: ["zu Fuß", "mit Fuß", "mit dem Fuß", "auf Fuß"],
      explanation: "«مشياً» تعبير جامد لا يُترجم حرفياً: zu Fuß، بلا mit وبلا أداة.",
      errorType: "preposition",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة للسؤال:",
      questionDe: "Wie kommst du zur Arbeit?",
      questionAr: "كيف تصل إلى العمل؟",
      options: ["Mit der Bahn.", "Mit die Bahn.", "Zu die Bahn.", "Nach der Bahn."],
      correctIndex: 0,
      explanation: "die Bahn في الجرّ بعد mit تصير der Bahn.",
      optionExplanations: [
        undefined,
        "die صيغة رفع أو نصب؛ بعد mit نحتاج الجرّ der.",
        "zu للوجهة لا للوسيلة، والأداة خاطئة أيضاً.",
        "nach للوجهة (المدن والبلدان) لا للوسيلة.",
      ],
      errorType: "case",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Ich", "fahre", "mit", "dem", "Fahrrad", "zur", "Uni", "."],
      correctSentence: "Ich fahre mit dem Fahrrad zur Uni.",
      explanation: "الفاعل ثم الفعل ثم الوسيلة (mit + Dativ) ثم الوجهة (zur Uni).",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "أجب عن السؤال بوسيلة النقل المذكورة.",
      prompt: "Womit fährst du in die Stadt? (das Auto)",
      acceptedAnswers: [
        "Ich fahre mit dem Auto in die Stadt.",
        "Mit dem Auto.",
        "Ich fahre mit dem Auto.",
      ],
      sampleAnswer: "Ich fahre mit dem Auto in die Stadt.",
      explanation: "das Auto بعد mit تصير mit dem Auto.",
      errorType: "case",
    },
    {"id": "e16", "type": "multiple-choice", "instructionAr": "اختر ضمير المفعول به الصحيح:", "questionDe": "Wo ist der Bahnhof? — Ich sehe ___ dort.", "options": ["ihn", "es", "sie", "er"], "correctIndex": 0, "errorType": "pronoun", "explanation": "der Bahnhof مذكّر، وضمير المذكّر في النصب ihn. والأداة تُملي الضمير لا طبيعة الشيء."},
    {"id": "e17", "type": "multiple-choice", "instructionAr": "اختر ضمير المفعول به الصحيح:", "questionDe": "Kennst du die Apotheke? — Ja, ich kenne ___.", "options": ["sie", "ihn", "es", "ihr"], "correctIndex": 0, "errorType": "pronoun", "explanation": "die Apotheke مؤنّثة، والمؤنّث لا يتغيّر بين الرفع والنصب: sie تبقى sie."},
    {"id": "e18", "type": "error-correction", "instructionAr": "صحّح الضمير:", "wrongSentence": "Ich kenne er nicht.", "wrongWord": "er", "correctWord": "ihn", "options": ["ihn", "ihm", "es", "sie"], "errorType": "pronoun", "explanation": "er ضمير فاعل، وkennen ينصب مفعوله فيلزم ihn. والعربي يترجم «هو» لا «إيّاه» فيبقي على صيغة الرفع."},
    {"id": "e19", "type": "fill-blank", "instructionAr": "أكمل بأداة الحركة أو الثبات الصحيحة:", "errorType": "case", "template": "Ich bin ___ Stadt. Morgen gehe ich ___ Stadt.", "blanks": [{"correct": "in der", "options": ["in der", "in die", "in den", "in dem"], "errorType": "case"}, {"correct": "in die", "options": ["in die", "in der", "in das", "in den"], "errorType": "case"}], "explanation": "wo? (ثابت) ⇐ الجرّ in der Stadt. wohin? (حركة) ⇐ النصب in die Stadt. والفعل هو الذي يكشف أيّهما."},
    {"id": "e20", "type": "error-correction", "instructionAr": "صحّح حرف الحركة:", "wrongSentence": "Ich fahre nach dem Bahnhof.", "wrongWord": "nach", "correctWord": "zum", "options": ["zum", "zur", "ins", "im"], "errorType": "preposition", "explanation": "nach لا تُستعمل إلّا مع البلدان والمدن وHause، وعلامتها أنّها بلا أداة. والأماكن ذات الأداة تأخذ zu ⇐ zum Bahnhof."},
    {"id": "e21", "type": "error-correction", "instructionAr": "صحّح فعل التنقّل:", "wrongSentence": "Ich gehe nach Berlin mit dem Zug.", "wrongWord": "gehe", "correctWord": "fahre", "options": ["fahre", "fliege", "komme", "laufe"], "errorType": "vocabulary", "explanation": "gehen تعني المشي على القدمين، فالجملة تقول إنّك ستمشي إلى برلين. وكلّ ما يسير على الأرض يأخذ fahren."},
    {"id": "e22", "type": "word-ordering", "instructionAr": "رتّب الكلمات لتكوّن سؤالاً مهذّباً عن الطريق:", "tokens": ["Entschuldigung", ",", "wie", "komme", "ich", "zum", "Bahnhof", "?"], "correctSentence": "Entschuldigung , wie komme ich zum Bahnhof ?", "errorType": "word-order", "explanation": "الاستئذان أوّلاً، ثمّ أداة الاستفهام wie في المركز الأوّل والفعل komme في الثاني — قاعدة V2 تحكم السؤال أيضاً."},
    {"id": "e23", "type": "matching", "instructionAr": "صِل كلّ مقصد بحرف الحركة المناسب:", "errorType": "preposition", "pairs": [{"left": "Deutschland (بلد)", "right": "nach Deutschland"}, {"left": "der Bahnhof (مكان بأداة)", "right": "zum Bahnhof"}, {"left": "das Kino (دخول)", "right": "ins Kino"}, {"left": "Hause (البيت، حركة)", "right": "nach Hause"}, {"left": "die Apotheke (مكان بأداة)", "right": "zur Apotheke"}], "explanation": "nach للبلدان بلا أداة · zu للأماكن ذات الأداة · in للدخول فعلاً · وnach Hause تعبير جامد."},
    {"id": "e24", "type": "transformation", "instructionAr": "استبدل الاسم بضمير المفعول به:", "prompt": "Ich nehme den Bus. ⇐ (بالضمير)", "errorType": "pronoun", "acceptedAnswers": ["Ich nehme ihn.", "Ich nehme ihn"], "sampleAnswer": "Ich nehme ihn.", "explanation": "der Bus مذكّر في النصب ⇐ ihn. ولاحظ أنّ الضمير يحلّ محلّ الأداة والاسم معاً لا محلّ الاسم وحده."},
    {"id": "e25", "type": "multiple-choice", "instructionAr": "اختر وسيلة النقل بالصيغة الصحيحة:", "questionDe": "Wie kommst du zur Arbeit? — ___.", "options": ["Mit dem Bus", "Mit den Bus", "Mit Bus", "Bei dem Bus"], "correctIndex": 0, "errorType": "case", "explanation": "mit تطلب الجرّ دائماً بلا استثناء: der Bus ⇐ mit dem Bus. وهي من الحروف السبعة الثابتة."},
    {"id": "e26", "type": "fill-blank", "instructionAr": "أكمل بضمير المفعول به المناسب:", "errorType": "pronoun", "template": "Das Kino ist neu. Ich finde ___ sehr schön. Und die Haltestelle? Ich sehe ___ nicht.", "blanks": [{"correct": "es", "options": ["es", "ihn", "sie", "ihm"], "errorType": "pronoun"}, {"correct": "sie", "options": ["sie", "es", "ihn", "ihr"], "errorType": "pronoun"}], "explanation": "das Kino محايد ⇐ es؛ die Haltestelle مؤنّثة ⇐ sie. والمحايد والمؤنّث لا يتغيّران بين الرفع والنصب."},
  ],
  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich gehe zu Deutschland.", right: "Ich fahre nach Deutschland.", whyAr: "البلدان nach دائماً." },
      { wrong: "zu Hause للحركة", right: "nach Hause للحركة، zu Hause للسكون", whyAr: "فرق دقيق مهم: اذهب إلى المنزل = nach Hause." },
      { wrong: "in der Stadt للحركة", right: "in die Stadt للحركة (wohin?) وin der Stadt للسكون (wo?)", whyAr: "قاعدة السكون/الحركة: wo? Dativ، wohin? Akkusativ." },
    ],
    eselsbruecken: [
      "«nach = إلى بلد/مدينة (بلا أداة)، zu = إلى مكان (بجر)، in = إلى داخل (نصب)».",
      "«wo? سكون Dativ / wohin? حركة Akkusativ» — أعدها كلما شككت.",
    ],
    culturalNote: {
      title: "نظام المواصلات الألماني",
      content:
        "الألمان فخورون بمواصلاتهم: U-Bahn (مترو)، S-Bahn (قطار ضواحي)، Straßenbahn (ترام)، Bus. والبطاقة الشهيرة: «Deutschlandticket» (اشتراك شخصي ~63 يورو شهرياً في 2026) يغطي النقل المحلي والإقليمي (لا يشمل عادةً قطارات ICE/IC عالية السرعة). ستتعلم شراء التذاكر بالتفصيل في A2.",
    },
  },
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الحرف الصحيح:",
      questionDe: "Sie geht ___ Apotheke.",
      options: ["zur", "zum", "nach", "ins"],
      correctIndex: 0,
      explanation: "Apotheke مؤنثة → zur (zu+der).",
      errorType: "preposition",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الاتجاه الصحيح:",
      questionDe: "Gehen Sie ___ und dann links!",
      questionAr: "اذهبوا مباشرة ثم يساراً!",
      options: ["geradeaus", "rechts", "zurück", "an der Ampel"],
      correctIndex: 0,
      explanation: "مباشرة = geradeaus.",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Bahnhof", "der", "ist", "Wo", "?"],
      correctSentence: "Wo ist der Bahnhof?",
      explanation: "أين المحطة؟ Wo + ist + der Bahnhof.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich gehe ins Stadt.",
      wrongWord: "ins Stadt",
      correctWord: "in die Stadt",
      options: ["in die Stadt", "in der Stadt", "zum Stadt", "nach Stadt"],
      explanation: "Stadt مؤنثة → in die Stadt (نصب للحركة). ins = in+das للمحايد.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ nach/zu/in الصحيح:",
      template: "Wir fahren ___ Tunis. Er geht ___ Bank. Sie geht ___ Kino.",
      blanks: [
        { correct: "nach", options: ["nach", "zur", "ins"] },
        { correct: "zur", options: ["nach", "zur", "ins"] },
        { correct: "ins", options: ["nach", "zur", "ins"] },
      ],
      explanation: "nach + مدينة، zur + مؤنث، ins + محايد.",
      errorType: "preposition",
    },
  ],
  flashcards: [
    { id: "fc1", de: "die Stadt", ar: "المدينة", example: "Die Stadt ist groß.", exampleAr: "المدينة كبيرة.", level: "A1" },
    { id: "fc2", de: "der Bahnhof", ar: "محطة القطار", example: "Der Bahnhof ist weit.", exampleAr: "المحطة بعيدة.", level: "A1" },
    { id: "fc3", de: "die Apotheke", ar: "الصيدلية", example: "Wo ist die Apotheke?", exampleAr: "أين الصيدلية؟", level: "A1" },
    { id: "fc4", de: "geradeaus / rechts / links", ar: "مباشرة / يمين / يسار", example: "Gehen Sie geradeaus!", exampleAr: "اذهبوا مباشرة!", level: "A1" },
    { id: "fc5", de: "nach / zu / in", ar: "إلى (ثلاثة حروف للحركة)", example: "nach Deutschland, zum Bahnhof, ins Kino", exampleAr: "إلى ألمانيا، إلى المحطة، إلى السينما", level: "A1" },
    { id: "fc6", de: "wohin?", ar: "إلى أين؟", example: "Wohin gehst du?", exampleAr: "إلى أين تذهب؟", level: "A1" },
    { id: "fc7", de: "die Ampel", ar: "إشارة المرور", example: "An der Ampel links!", exampleAr: "عند الإشارة يساراً!", level: "A1" },
    { id: "fc8", de: "um die Ecke", ar: "خلف الزاوية", example: "Die Post ist um die Ecke.", exampleAr: "البريد خلف الزاوية.", level: "A1" },
    { id: "fc9", de: "mit dem Bus / mit der Bahn", ar: "بالحافلة / بالقطار", example: "Ich fahre mit dem Bus zur Arbeit.", exampleAr: "أذهب بالحافلة إلى العمل.", level: "A1" },
    { id: "fc10", de: "zu Fuß gehen", ar: "يذهب مشياً", example: "Zum Markt gehe ich zu Fuß.", exampleAr: "إلى السوق أذهب مشياً.", level: "A1" },
    {"id": "fc11", "de": "ihn (Akkusativ von er)", "ar": "إيّاه (ضمير مفعول للمذكّر)", "example": "Der Bus? Ich nehme ihn.", "exampleAr": "الحافلة؟ آخذها.", "level": "A1"},
    {"id": "fc12", "de": "mich / dich", "ar": "إيّاي / إيّاك", "example": "Können Sie mich hören?", "exampleAr": "هل تسمعني؟", "level": "A1"},
    {"id": "fc13", "de": "die Ampel", "ar": "إشارة المرور", "example": "An der Ampel gehen Sie links.", "exampleAr": "عند الإشارة اتّجه يساراً.", "level": "A1"},
    {"id": "fc14", "de": "die Haltestelle", "ar": "موقف الحافلة", "example": "Wo ist die Haltestelle?", "exampleAr": "أين الموقف؟", "level": "A1"},
    {"id": "fc15", "de": "steigt … um (umsteigen)", "ar": "يبدّل وسيلة النقل", "example": "Ich steige in Köln um.", "exampleAr": "أبدّل القطار في كولونيا.", "level": "A1"},
    {"id": "fc16", "de": "gegenüber von", "ar": "مقابل", "example": "Das Institut ist gegenüber von einer Apotheke.", "exampleAr": "المعهد مقابل صيدلية.", "level": "A1"},
    {"id": "fc17", "de": "Wie komme ich zum …?", "ar": "كيف أصل إلى …؟", "example": "Entschuldigung, wie komme ich zum Bahnhof?", "exampleAr": "عذراً، كيف أصل إلى المحطة؟", "level": "A1"},
    {"id": "fc18", "de": "Können Sie das bitte wiederholen?", "ar": "أيمكنك إعادة ذلك من فضلك؟", "example": "Ich verstehe nicht. Können Sie das bitte wiederholen?", "exampleAr": "لا أفهم. أيمكنك الإعادة من فضلك؟", "level": "A1"},
    {"id": "fc19", "de": "die Fahrkarte", "ar": "تذكرة السفر", "example": "Eine Fahrkarte nach Berlin, bitte.", "exampleAr": "تذكرة إلى برلين من فضلك.", "level": "A1"},
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-11-1", type: "simplify-announcement",
      titleAr: "بسّط إعلان طريق بالعربية لسائح",
      sourceDe: "Die U-Bahnlinie 2 fährt vom Bahnhof direkt zum Zentrum. Die Fahrt dauert 10 Minuten. Tickets gibt es am Automaten.",
      taskAr: "أرشد سائحاً بالعربية: أي خط مترو، من أين إلى أين، المدة، وأين يشتري التذاكر.",
      modelAnswerAr: "«خط المترو 2 ينطلق من المحطة مباشرة إلى المركز. تستغرق الرحلة 10 دقائق. التذاكر من الآلة.»",
      keyPointsAr: ["ذكرت خط المترو (2)", "نقلت الوجهة والمدة (10 دقائق)", "أرشدت لمكان شراء التذاكر"],
    },
  ],
      interaction: [
    {
      id: "int-a1-11-1",
      scenarioAr: "سائح يسألك عن الطريق في المدينة.",
      scenarioDe: "Ein Tourist fragt dich nach dem Weg.",
      strategyAr: "الاستراتيجية: إعطاء الاتجاهات (rechts, links, geradeaus).",
      rounds: [
        {
          speakerDe: "Entschuldigung, wo ist der Bahnhof?",
          speakerAr: "عذراً، أين محطة القطار؟",
          options: [
            { de: "Gehen Sie geradeaus und dann rechts.", ar: "امشِ مباشرة ثم انعطف يميناً.", best: true, replyDe: "Danke! Und wie weit ist es?", replyAr: "شكراً! وكم تبعد؟" },
            { de: "Der Bahnhof ist in China.", ar: "محطة القطار في الصين.", best: false, replyDe: "Nein, hier in dieser Stadt!", replyAr: "لا، هنا في هذه المدينة!" },
          ],
        },
        {
          speakerDe: "Wie weit ist es bis zum Bahnhof?",
          speakerAr: "كم تبعد محطة القطار؟",
          options: [
            { de: "Ungefähr 10 Minuten zu Fuß.", ar: "حوالي 10 دقائق مشياً.", best: true, replyDe: "Perfekt, vielen Dank!", replyAr: "ممتاز، شكراً جزيلاً!" },
            { de: "Sehr weit, 3 Stunden.", ar: "بعيدة جداً، 3 ساعات.", best: false, replyDe: "Das stimmt nicht, es ist nur 10 Minuten.", replyAr: "هذا غير صحيح، إنها 10 دقائق فقط." },
          ],
        },
      ],
    },
  ],

};