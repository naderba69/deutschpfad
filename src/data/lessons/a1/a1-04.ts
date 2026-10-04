import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-04: السكن والمنزل
 * — الغرف والأثاث + حروف الجر المكانية (in/auf) مع Dativ + الصفات الخبرية
 */
export const lessonA104: Lesson = {
  id: "a1-04",
  unitId: "a1-04",
  level: "A1",
  order: 1,
  titleDe: "Meine Wohnung",
  titleAr: "السكن والمنزل",
  summary:
    "غرف البيت والأثاث، وصف المنزل بصفات بسيطة، حروف الجر المكانية in/auf مع حالة Dativ (im/in der)، والسؤال: Wo wohnst du?",

  lernziele: [
    { id: "z1", de: "Ich kann wichtige Raumwörter verstehen und zuordnen.", ar: "أن أتعرف أسماء الغرف الأساسية وأطابق كل اسم بمعناه." },
    { id: "z2", de: "Ich kann meine Wohnung beschreiben.", ar: "أن أصف منزلي بجمل بسيطة (Das Zimmer ist groß)." },
    { id: "z3", de: "Ich kann sagen, wo etwas ist: im, in der, auf dem.", ar: "أن أحدد مكان الأشياء بحروف الجر المكانية مع Dativ." },
    { id: "z4", de: "Ich kann fragen: Wo wohnst du? und mit Ich wohne in ... antworten.", ar: "أن أسأل: أين تسكن؟ وأجيب بجملة بسيطة عن مكان سكني." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قل: «الكتاب على الطاولة». الآن لاحظ في العربية: «على» لا تغيّر شيئاً في الكلمة التي بعدها. في الألمانية، حرف الجر المكاني يغيّر أداة الاسم! خمّن: هل نقول auf der Tisch أم auf dem Tisch؟",
    motivatingQuestionDe: "Wo ist das Buch?",
    contextAr:
      "ندخل بيتاً ألمانياً اليوم: نتعلم أسماء الغرف، ثم نكتشف «ظاهرة Dativ» — الحالة التي يطلبها حرفا الجر in وauf عندما نسأل «أين؟».",
    contextDe: "Willkommen in meiner Wohnung!",
    connectionToPreviousAr: "تعلمنا النصب (Akkusativ) بعد الأكل. اليوم حالة جديدة: الجر (Dativ) بعد حروف المكان. ترتيب الحالات: Nominativ → Akkusativ → Dativ.",
    activateVocabulary: [
      { de: "die Wohnung", ar: "الشقة" },
      { de: "das Zimmer", ar: "الغرفة" },
      { de: "die Küche", ar: "المطبخ" },
      { de: "wohnen", ar: "يسكن" },
      { de: "das Bett", ar: "السرير" },
    ],
  },

  theory: [
    {
      id: "t1",
      titleAr: "غرف البيت والأثاث",
      titleDe: "Räume und Möbel",
      explanationAr:
        "المسكن موضوعٌ يومي غنيّ بالمفردات، ويمكن تعلّم كثير من أسمائه بملاحظة الكلمات المركّبة.\n\n**أوّلاً: قاعدة الاسم المركّب، وهي مفتاح الحقل كلّه.**\nانظر إلى أسماء الغرف: das Wohn**zimmer** · das Schlaf**zimmer** · das Ess**zimmer** · das Kinder**zimmer** · das Bade**zimmer**. كلّها تنتهي بـ Zimmer، وكلّها **محايدة** — لأنّ القاعدة الذهبية للمركّبات: **الجزء الأخير يحدّد الجنس والجمع**. فما دام das Zimmer محايداً، فكلّ ما ينتهي به محايد، ولو سبقته عشر كلمات. وجمعها جميعاً die …zimmer بلا تغيير.\nوالجزء الأوّل يشرح الوظيفة: wohnen (يسكن) ⟵ غرفة المعيشة · schlafen (ينام) ⟵ غرفة النوم · essen (يأكل) ⟵ غرفة الطعام. فأنت لا تحفظ ستّ كلمات بل **جذرَي فعلٍ واسماً واحداً**، وتركّب الباقي بنفسك.\n\n**ثانياً: الغرف التي تخرج عن النمط، وهي التي تستحقّ الحفظ فعلاً:**\n• **die Küche** (المطبخ) — مؤنّثة، وتنتهي بـ‑e ككثير من الأسماء المؤنثة. انتبه إلى **der Kuchen** (الكعكة): الكلمتان متقاربتان شكلاً لكنهما تختلفان في النطق والجنس والمعنى.\n• **das Bad** (الحمّام) — محايد، ومختصر das Badezimmer.\n• **der Flur** (الممرّ) — مذكّر.\n• **der Balkon** (الشرفة) — مذكّر، دخيلة من الفرنسية، وتَرِد لها في القواميس صيغ نطق مثل [balˈkɔŋ] و[balˈkoːn]؛ والنبر على المقطع الأخير.\n• **der Keller** (القبو) و **die Garage** (المرآب) و **der Garten** (الحديقة).\n\n**ثالثاً: الأثاث (die Möbel).**\nder Tisch (طاولة) · der Stuhl (كرسي، جمعه die St**ü**hle بالإمالة) · das Sofa (أريكة) · der Schrank (خزانة، جمعه die Schr**ä**nke) · das Bett (سرير) · die Lampe (مصباح) · der Teppich (سجّادة) · das Regal (رفّ).\nوكلمة **die Möbel** نفسها جمعٌ دائماً في الاستعمال العادي: «Die Möbel sind neu». وللدلالة على قطعة واحدة يُستعمل عادةً das Möbelstück.\n\n**رابعاً: تمييزاتٌ يخطئ فيها العرب خصوصاً.**\n• **das Zimmer** (الغرفة) مقابل **die Wohnung** (الشقّة) مقابل **das Haus** (البيت المستقلّ). واختر اللفظ بحسب ما تصفه: Wohnung للوحدة السكنية/الشقة، وHaus للبيت أو المبنى؛ وقد يتحدد المقصود من السياق.\n• في كثير من إعلانات الشقق الألمانية لا يُحتسب المطبخ والحمّام ضمن عدد Zimmer؛ لكن اقرأ وصف الإعلان نفسه، ولا تستنتج عدد غرف النوم من الرقم وحده.\n• انتبه إلى الفرق بين **das Bad** (الحمّام) و**das Bett** (السرير): تشابه جزئي، لكن كتابة كلّ منهما ونطقهما مختلفان.",
      whyAr:
        "لأنّ السكن هو **أوّل حاجة عملية** يواجهها كلّ من ينتقل إلى بلدٍ ناطق بالألمانية، وأوّل معركة إدارية أيضاً: قراءة إعلان شقّة، وزيارة معاينة (Besichtigung)، وتوقيع عقد (Mietvertrag)، والتسجيل في البلدية (Anmeldung). وتفيد هذه المفردات في قراءة أوصاف السكن والتواصل في مواقف يومية. قد يظهر السكن ضمن موضوعات الحياة اليومية، لكن لا نضمن ورود موضوع بعينه في امتحان. ومن جوانبه التعليمية المفيدة أنّه يقدّم أمثلة واضحة على بعض الكلمات المركّبة، مثل Wohnzimmer وKrankenhaus. ويمكن استخدام هذه الأمثلة لفهم دور الجزء الأخير، من دون الادعاء أنّها تغطي كل أنماط التركيب الألماني.",
      table: {
        title: "الغرف والأثاث الأساسي",
        columns: ["الألمانية", "العربية", "الملاحظة"],
        rows: [
          { label: "die Küche", cells: ["المطبخ", "مؤنث"] },
          { label: "das Wohnzimmer", cells: ["غرفة المعيشة", "محايد"] },
          { label: "das Schlafzimmer", cells: ["غرفة النوم", "محايد"] },
          { label: "das Bad / Badezimmer", cells: ["الحمام", "محايد"] },
          { label: "das Esszimmer", cells: ["غرفة الطعام", "محايد"] },
          { label: "der Tisch / der Stuhl", cells: ["طاولة / كرسي", "مذكران"] },
          { label: "das Sofa / das Bett", cells: ["أريكة / سرير", "محايدان"] },
          { label: "der Schrank", cells: ["خزانة", "مذكر"] },
        ],
      },
      examples: [
        {"de": "Meine Wohnung hat drei Zimmer, eine Küche und ein Bad.", "ar": "شقّتي فيها ثلاث غرف ومطبخ وحمّام. (لاحظ أنّ العدد لا يشمل المطبخ والحمّام)"},
        {"de": "Das Wohnzimmer ist groß und hell.", "ar": "غرفة المعيشة كبيرة ومضيئة."},
        {"de": "Die Küche ist klein, aber sehr praktisch.", "ar": "المطبخ صغير لكنّه عمليّ جداً."},
        {"de": "Im Schlafzimmer stehen ein Bett und ein Schrank.", "ar": "في غرفة النوم سرير وخزانة."},
        {"de": "Die Möbel sind alt, aber bequem.", "ar": "الأثاث قديم لكنّه مريح. (Möbel جمع ⟵ sind)"},
        {"de": "Wir haben einen Balkon mit Blick auf den Garten.", "ar": "عندنا شرفة تطلّ على الحديقة."},
        {"de": "Der Flur ist lang und dunkel.", "ar": "الممرّ طويل ومظلم."},
        {"de": "Ich suche eine Wohnung, kein Haus.", "ar": "أبحث عن شقّة لا عن بيت. (تمييزٌ يهمّ الألمان)"},
      ],
      comparisonWithArabic:
        "**١. التركيب في كلمةٍ واحدة مقابل الإضافة في كلمتين.** العربية تقول «غرفة النوم» بمضافٍ ومضافٍ إليه منفصلين، وترتيبها: **المضاف أوّلاً ثمّ المضاف إليه**. والألمانية تعكس الترتيب وتلصق: Schlaf**zimmer** — الموصوف في الآخر. وقد يبدأ المتعلّم من الجزء الأوّل فيظنّ أنّ Schlaf هو الرأس، بينما الاسم الأساسي هنا Zimmer. **القاعدة العملية: اقرأ المركّب الألماني من آخره.**\n\n**٢. الجنس يُورَث من الجزء الأخير.** وهذا يريح المتعلّم كثيراً: لا تحفظ جنس das Wohnzimmer، بل احفظ das Zimmer مرّةً واحدة واشتقّ الباقي. والعربية لا تحتاج إلى هذا لأنّ الإضافة لا تغيّر جنس المضاف أصلاً.\n\n**٣. تفصيل الغرف يختلف ثقافياً.** العربية تقول «صالون» و«مجلس» و«غرفة ضيوف» بفروقٍ اجتماعية دقيقة، والألمانية تكتفي بـ Wohnzimmer لكلّ ذلك. وفي المقابل تفصّل الألمانية ما تجمله العربية: der Flur (ممرّ) مقابل die Diele (ردهة/مدخل في بعض الاستعمالات) مقابل der Eingang (مدخل أو نقطة دخول).\n\n**٤. غياب الأداة في العربية عند الإضافة.** نقول «غرفةُ النومِ» فتسقط «ال» عن المضاف. والألمانية تضع الأداة على المركّب كلّه: **das** Schlafzimmer. فلا تحذفها قياساً على العربية.\n\n**٥. حرف الجرّ يلتصق بالأداة.** العربية تقول «في المطبخ» بكلمتين مستقلّتين. والألمانية تدمج: in + dem = **im**. في الاستعمال المحايد يشيع im Bad؛ أما in dem Bad فصيغة صحيحة أيضاً وقد تُستخدم للتوكيد أو المقابلة.",
      eselsbruecke:
        "**«اقرأ المركّب الألماني من آخره»** — فآخر جزءٍ هو الاسم الحقيقي، وما قبله وصفٌ له. Schlafzimmer = غرفةٌ للنوم لا نومٌ للغرفة. وللجنس: **آخر الكلمة يعطيك الأداة**. وللتمييز بين المتشابهات: **Bad حمّام (a طويلة) وBett سرير (e قصيرة)**؛ و**Küche مطبخ وKuchen كعكة — انتبه إلى ü في الأولى وإلى u والنهاية -en في الثانية**.",
      commonMistakes: [
        {"wrong": "der Badezimmer", "right": "das Badezimmer", "whyAr": "خطأ جنسٍ في مركّب. والحلّ لا يحتاج حفظاً إضافياً: das Zimmer محايد ⟵ فكلّ مركّبٍ ينتهي به محايد. طبّق القاعدة بدل أن تحفظ عشر كلمات، وستنجو في Wohnzimmer و Kinderzimmer و Esszimmer معاً."},
        {"wrong": "Ich bin in Wohnzimmer.", "right": "Ich bin im Wohnzimmer.", "whyAr": "عند وصف موقع ثابت، يحتاج Wohnzimmer إلى أداة: in + dem تُختصر غالباً إلى im. ويمكن أيضاً قول Ich wohne im Wohnzimmer إذا كان المقصود أن هذا مكان السكن."},
        {"wrong": "Das Bett ist klein und ich dusche dort.", "right": "Das Bad ist klein und ich dusche dort.", "whyAr": "خلط das Bett (السرير) بـ das Bad (الحمّام). الكلمتان متقاربتان شكلاً، لكنهما تختلفان في أكثر من حرف وفي صوت العلّة: Bad فيها a طويلة [aː]، وBett فيها e قصيرة [ɛ] يتبعها tt، فيقصُر الصوت قبله."},
        {"wrong": "Die Möbel ist neu.", "right": "Die Möbel sind neu.", "whyAr": "die Möbel جمعٌ دائماً في الاستعمال العادي كـ Eltern و Geschwister، فيلزمه sind. وللقطعة الواحدة يُستعمل عادةً das Möbelstück. والقاعدة: احفظ الكلمة في جملةٍ جمعية من أوّل يوم."},
      ],
      relatedRuleComparison: {
        "title": "الفرق السياقي بين wohnen وleben",
        "content": "يمكن استعمال **wohnen** و**leben** للتعبير عن الإقامة، لكنهما يختلفان في التركيز. يشيع **wohnen** عند الحديث عن المسكن أو عنوان الإقامة: Ich wohne in Berlin / in der Hauptstraße 12 / bei meinen Eltern. ويُستعمل **leben** كثيراً للحياة أو الإقامة بمعناها الأوسع: Ich lebe in Deutschland · Er lebt allein · Meine Großmutter lebt noch. وقد يصحّ الفعلان مع اسم مدينة أو بلد بحسب المقصود؛ مثلاً: Ich lebe in Deutschland und wohne in München. هذه قرائن عملية لا قاعدة تمنع التداخل."
      },
    },
    {
      id: "t2",
      titleAr: "حروف الجر المكانية مع Dativ: im، in der، auf dem",
      titleDe: "Präpositionen mit Dativ: wo?",
      explanationAr:
        "حالة الجرّ (Dativ) هي الحالة الثالثة في الترتيب التعليمي، وهي تتيح وصف المكان.\n\n**الأساس المطلوب هنا (A1):** عند تحديد المكان والإجابة عن Wo? نستخدم Dativ؛ ركّز على الصيغ التي تظهر في هذا الدرس: im Wohnzimmer، in der Küche، auf dem Tisch.\n\n**جدول مرجعي للتوسّع؛ لا يلزم حفظ كلّ تفاصيله الآن:**\n\n| الجنس | الرفع | الجرّ (Dativ) |\n|---|---|---|\n| مذكّر | der / ein | **dem / einem** |\n| مؤنّث | die / eine | **der / einer** |\n| محايد | das / ein | **dem / einem** |\n| جمع | die | **den + ‑n على الاسم** |\n\nولاحظ ثلاث ملاحظات تختصر الحفظ:\n1. **المذكّر والمحايد يتّحدان** في dem — كما اتّحدا في ein.\n2. **المؤنّث يأخذ der** — وهذه أخبث خانةٍ في الجدول، لأنّ der تبدو مذكّرةً وهي هنا مؤنّثة مجرورة! «in **der** Küche» ليست خطأً بل هي الصواب.\n3. **الجمع يأخذ den ويزيد ‑n على آخر الاسم نفسه**: mit den Kinder**n** · in den Zimmer**n**. وهذه الزيادة إلزامية وينساها الجميع. (ولا تُزاد إن كان الجمع منتهياً بـ‑n أو ‑s أصلاً: mit den Frauen · mit den Autos.)\n\n**للاطّلاع: اندماجات شائعة أخرى؛ ركّز الآن على im:**\nin + dem = **im** · an + dem = **am** · zu + dem = **zum** · zu + der = **zur** · bei + dem = **beim** · von + dem = **vom**.\nهذه صيغ مختصرة شائعة في الاستعمال المحايد. والصيغة الكاملة «in dem Bad» صحيحة أيضاً، وقد تُستعمل للتوكيد أو المقابلة؛ لذلك لا تُعاملها كخطأ نحوي.\n\n**توسّع اختياري: Wechselpräpositionen (حروف الجرّ المتبدّلة).**\nتسعةٌ من حروف الجرّ تسمّى **Wechselpräpositionen** لأنها قد تأتي مع Dativ أو Akkusativ بحسب المعنى:\n**in · an · auf · über · unter · vor · hinter · neben · zwischen**\nوالمعيار **ليس** الحرف بل **السؤال الذي تجيب عنه الجملة**:\n• **Wo?** (أين؟) — الموضع الذي يحدث فيه الفعل ⟵ **Dativ**.\n  Das Buch ist **auf dem** Tisch. · Ich bin **in der** Küche.\n• **Wohin?** (إلى أين؟) — وجهة الحركة أو مقصدها ⟵ **Akkusativ**.\n  Ich lege das Buch **auf den** Tisch. · Ich gehe **in die** Küche.\n\nوالاختيار لا يعتمد على وجود حركة جسدية فحسب، بل على معنى العبارة المكانية: أهي تحدد مكان وقوع الفعل (Wo? ⟵ Dativ) أم وجهته (Wohin? ⟵ Akkusativ)؟ فـ«Ich laufe in der Küche» تصف الجري داخل المطبخ، بينما «Ich laufe in die Küche» تصف الاتجاه إلى داخله.\n\nالأفعال قرائن لا قاعدة آلية: مع Wechselpräpositionen يأتي Dativ للمكان وAkkusativ للوجهة. والفعل hängen مثلاً يصحّ مع كليهما: Das Bild hängt an der Wand / Ich hänge das Bild an die Wand. كما تصف Ich laufe in der Küche حركةً داخل مكان، لا وجهةً إليه. **ابدأ بالسؤال: Wo? أم Wohin?**",
      whyAr:
        "لأنّ أسئلة المكان شائعة في المواقف اليومية: أين المفتاح؟ أين الحمّام؟ أين تسكن؟ ولأنّ Dativ يظهر في استعمالات يومية كثيرة ولا يقتصر على المكان: فحروف الجرّ الثابتة (mit, nach, aus, zu, bei, seit, von, gegenüber) تفرضه دائماً بلا سؤال، والمفعول غير المباشر يأخذه (Ich gebe **dem Kind** ein Buch)، وطائفةٌ كاملة من الأفعال تحكمه (helfen, danken, gefallen, gehören, passen). ومعرفة أشكال dem/der/dem/den تمهّد لفهم استعمالات لاحقة، مع تعلّم كل قاعدة في سياقها. أمّا تقديمه هنا في سياق البيت فاختيارٌ منهجي مقصود: المكان **مرئيّ وملموس** — الكتاب على الطاولة، القطّة تحت الكرسي — فيتعلّق الجرّ بصورةٍ ذهنية بدل أن يبقى جدولاً مجرّداً. تساعد الأمثلة الملموسة على ربط الحالة بالمعنى، من دون ادعاء أن جدولاً واحداً يكفي لكل استعمالات Dativ.",
      table: {
        title: "تغيّر الأدوات مع Dativ بعد in/auf",
        columns: ["الجنس", "Nominativ", "Dativ", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "dem", "auf dem Tisch"] },
          { label: "مؤنث", cells: ["die", "der", "in der Küche"] },
          { label: "محايد", cells: ["das", "dem", "im Bett (in+dem)"] },
          { label: "جمع", cells: ["die", "den (+n)", "in den Zimmern"] },
        ],
      },
      examples: [
        {"de": "Das Buch liegt auf dem Tisch.", "ar": "الكتاب على الطاولة. (Wo? ⟵ مذكّر مجرور dem)"},
        {"de": "Die Lampe ist in der Küche.", "ar": "المصباح في المطبخ. (Wo? ⟵ مؤنّث مجرور der!)"},
        {"de": "Ich schlafe im Schlafzimmer.", "ar": "أنام في غرفة النوم. (in+dem = im)"},
        {"de": "Die Katze sitzt unter dem Stuhl.", "ar": "القطّة تحت الكرسي."},
        {"de": "Wir wohnen in einem Haus mit Garten.", "ar": "نسكن في بيتٍ ذي حديقة. (نكرة مجرورة ⟵ einem)"},
        {"de": "Ich gehe in die Küche und koche.", "ar": "أذهب إلى المطبخ وأطبخ. (Wohin? ⟵ نصب die!)"},
        {"de": "Die Kinder spielen in den Zimmern.", "ar": "الأطفال يلعبون في الغرف. (جمع مجرور ⟵ den + النون الزائدة)"},
        {"de": "Das Bild hängt an der Wand.", "ar": "الصورة معلّقة على الجدار. (an + مؤنّث مجرور)"},
      ],
      comparisonWithArabic:
        "**١. اسم الحالة نفسه مضلِّل.** «الجرّ» في العربية يعني ما بعد حرف الجرّ. وDativ الألمانية أوسع: تشمل المفعول غير المباشر والأفعال الحاكمة، وليست مقصورةً على حروف الجرّ. وفي المقابل: بعض حروف الجرّ الألمانية **تنصب** لا تجرّ (durch, für, ohne, gegen, um). فلا تقس القاعدة العربية «كلّ ما بعد الحرف مجرور» على الألمانية — فهي لا تصحّ.\n\n**٢. العربية لا تفرّق بين «أين» و«إلى أين» في الحرف.** نقول «في المطبخ» للموقع و«إلى المطبخ» للحركة، فالفرق في **الحرف نفسه**. والألمانية تستعمل **الحرف نفسه** in وتغيّر **الحالة** بعده. فالعربي يبحث عن حرفٍ آخر ولا يجد، ويهمل التغيير الذي لا يألفه. وهذا قد يفسّر خطأً شائعاً لدى بعض المتعلّمين العرب في هذا الباب.\n\n**٣. der المؤنّثة صدمة.** المتعلّم رسّخ أنّ der = مذكّر، ثمّ يصادف «in der Küche» فيظنّ أنّ Küche مذكّرة، أو يظنّ الجملة خاطئة. والحلّ أن يتعلّم منذ اليوم أنّ **شكل الأداة لا يدلّ على الجنس وحده بل على الجنس + الحالة معاً**. فـder ثلاثة أشياء: مذكّر مرفوع، ومؤنّث مجرور، ومؤنّث في حالة الملكية.\n\n**٤. الاندماجات شائعة في الألمانية.** من الشائع أن تُختصر in + dem إلى im، وan + dem إلى am، وzu + dem إلى zum، وzu + der إلى zur. والصيغة الكاملة قد تبقى صحيحة، خاصةً عند التوكيد؛ لذلك احفظ im بوصفها الصيغة المحايدة الشائعة، لا بوصف in dem خطأً.\n\n**٥. النون الزائدة في الجمع لا مثيل لها.** «مع الأطفال» في العربية لا تغيّر الاسم. والألمانية تزيد ‑n على الاسم نفسه: mit den Kinder**n**. فهذه علامة إعرابٍ على الاسم — وهو أمرٌ مألوف للعربي في المبدأ (الحركات) لكنّه هنا حرفٌ كامل يُضاف، لا حركة تُقدَّر.",
      eselsbruecke:
        "**«Wo? ⟵ Dativ (ثابت)، Wohin? ⟵ Akkusativ (متحرّك)»** — سؤالان يحسمان تسعة حروف. وللجدول احفظ الإيقاع الرباعي: **dem – der – dem – den+n**. ولتذكّر انقلاب المؤنّث: **«المؤنّث في الجرّ يستعير der من المذكّر»**. وللاندماجات: **in+dem = im · an+dem = am · zu+der = zur** — ثلاث كلماتٍ تُحفظ كما هي.",
      commonMistakes: [
        {"wrong": "auf der Tisch", "right": "auf dem Tisch", "whyAr": "der Tisch مذكّر، والمذكّر في الجرّ يصير dem لا der. والخطأ ناتج عن سحب أداة المعجم كما هي إلى الجملة. تذكّر: der ثلاثة أشياء مختلفة — مذكّر مرفوع، ومؤنّث مجرور، ولا ثالث لهما هنا؛ وليست أبداً مذكّراً مجروراً."},
        {"wrong": "Die Lampe ist in die Küche.", "right": "Die Lampe ist in der Küche.", "whyAr": "خلط Wo? بـ Wohin?. الفعل sein فعل موقعٍ لا حركة، والجملة تجيب عن «أين المصباح؟» ⟵ فالجرّ واجب: in der Küche. أمّا in die Küche فتصحّ مع فعل حركة: Ich gehe in die Küche."},
        {"wrong": "Die Lampe ist in dem Küche.", "right": "Die Lampe ist in der Küche.", "whyAr": "Küche مؤنثة؛ لذلك يأتي Dativ der بعد in عند وصف المكان. أمّا in dem فقد تكون صحيحة مع اسم مذكر أو محايد عند التوكيد، وليست خطأً بحد ذاتها."},
        {"wrong": "Die Möbel sind in den Zimmer.", "right": "Die Möbel sind in den Zimmern.", "whyAr": "نُسيت النون الزائدة على الاسم الجمع. فالجمع في الجرّ يأخذ den **وأيضاً** ‑n على آخر الاسم: Zimmer ⟵ Zimmern · Kinder ⟵ Kindern · Freunde ⟵ Freunden. وتُستثنى الجموع المنتهية بـ‑n أو ‑s أصلاً."},
      ],
      relatedRuleComparison: {
        "title": "ملاحظة تمهيدية عن حروف جرّ أخرى",
        "content": "بعض الحروف الشائعة تطلب حالة ثابتة، مثل mit + Dativ (mit dem Tisch) وfür + Akkusativ (für den Tisch). هذه أمثلة تمهيدية وليست قائمة كاملة؛ لا حاجة لحفظها الآن. هدف هذا الدرس هو التمييز بين المكان والوجهة مع Wechselpräpositionen."
      },
    },
    {
      id: "t3",
      titleAr: "قواعد البيت: müssen و dürfen",
      titleDe: "Hausregeln: müssen und dürfen",
      explanationAr:
        "الأفعال الناقصة (Modalverben) ستّة في الألمانية، ونتعلّم هنا اثنين منها لأنّهما لغة القواعد المنزلية:\n**müssen** (الإلزام) و **dürfen** (الإذن).\n\n**التصريف — ولاحظ نمطاً غريباً موحّداً:**\n\n| الضمير | müssen | dürfen |\n|---|---|---|\n| ich | **muss** | **darf** |\n| du | musst | darfst |\n| er/sie/es | **muss** | **darf** |\n| wir | müssen | dürfen |\n| ihr | müsst | dürft |\n| sie/Sie | müssen | dürfen |\n\nومن السمات المشتركة للأفعال الناقصة أن صيغة ich تطابق er/sie/es بلا نهاية شخصية: er muss لا «er musst»، وer darf لا «er darft».\nوفي هذين الفعلين تحديداً تعود الإمالة في المصدر والجمع: muss ⟵ müssen · darf ⟵ dürfen. لا تعمّم ذلك على جميع الأفعال الناقصة؛ فـsollen مثلاً لا يغيّر حرف علّته.\n\n**بنية الجملة — القاعدة الحديدية:**\nالفعل الناقص يُصرَّف ويقف في **المركز الثاني**، والفعل الأصلي يذهب **مصدراً غير مصرَّف إلى آخر الجملة**:\n«Ich **muss** heute die Miete **bezahlen**.»\n«**Darf** ich hier **parken**?»\nوهذا هو أوّل ظهورٍ لما يسمّى **Satzklammer** (قوس الجملة): الفعل المصرَّف في المركز الثاني والفعل غير المصرَّف في الآخر، وبينهما كلّ التفاصيل. وسترى هذا النمط في تراكيب أخرى لاحقاً، منها الماضي التامّ والمستقبل والمبني للمجهول.\n\n**والآن أخطر نقطة في الدرس كلّه — النفي، لأنّه يقلب المعنى:**\n• **nicht dürfen = غير مسموح في هذا السياق.**\n  «Hier **darf** man **nicht** rauchen» = التدخين ممنوع هنا.\n• **nicht müssen = غير مُلزَم، لكنّه مسموح.**\n  «Du **musst nicht** kommen» = لستَ مضطرّاً للحضور (ويمكنك الحضور إن شئت).\n\nفالفعلان في الإثبات متقابلان (وجوب مقابل إذن)، أمّا في النفي فليسا متقابلين إطلاقاً: نفي müssen يرفع الإلزام فقط، بينما nicht dürfen يعبّر عن عدم الإذن في السياق. والخلط بينهما يغيّر الرسالة: Du musst nicht rauchen تعني «لستَ مضطرّاً إلى التدخين»، لا «التدخين ممنوع».\n\n**ضمير man المجهول:** يكثر في القواعد واللوائح لأنّه يعمّم بلا تحديد شخص: «Man darf hier nicht parken» = لا يُسمح بالوقوف هنا (لأيّ أحد). ويُصرَّف الفعل معه كما مع er/sie/es. وهو يقابل بناء العربية للمجهول أو «يُمنَع…».\n\n**للتوسّع السياقي، لا بوصفها قاعدة قانونية عامة:** قد تتضمن Hausordnung قواعد تخصّ المبنى، مثل أوقات الهدوء أو طريقة فرز النفايات. تختلف الأوقات والتفاصيل بحسب البلدية واللائحة وعقد الإيجار؛ فالأمثلة هنا للتدريب على اللغة ولا تمثل حكماً قانونياً عاماً.",
      whyAr:
        "لأنّ الأفعال الناقصة هي **أوّل قفزةٍ من الجملة البسيطة إلى الجملة المركّبة**. فحتّى الآن كنت تقول «Ich wohne in Tunis» — فعلٌ واحد، معنىً واحد، بنيةٌ مسطّحة. ومع müssen و dürfen تصير جملتك ذات طبقتين: طبقةُ الحدث (bezahlen) وطبقةُ الموقف منه (يجب/يُسمح). وهذا يوسّع ما يستطيع المتعلّم قوله، كطلب الإذن أو وصف الالتزام. وهي أيضاً أوّل تدريبٍ على قوس الجملة (Satzklammer) — وهو نمط مهم في ترتيب الجملة الألمانية، ويظهر مع تراكيب أخرى مثل Perfekt وفي تراكيب المستقبل والمبني للمجهول. ويساعد التدريب على الاعتياد على موقع المصدر في نهاية الجملة، لكن التراكيب اللاحقة تحتاج إلى أمثلة وممارسة إضافية. أمّا سياق السكن فوظيفي بحت: فهم لائحة المبنى قد يساعد الساكن، لكن الالتزامات الفعلية تُراجع في Hausordnung أو العقد المحلي؛ لا يقرر هذا المثال حكماً قانونياً عاماً.",
      table: {
        title: "تصريف müssen و dürfen (لاحظ: لا ـt في هو/هي)",
        columns: ["الضمير", "müssen (يجب)", "dürfen (مسموح)"],
        rows: [
          { label: "ich", cells: ["muss", "darf"] },
          { label: "du", cells: ["musst", "darfst"] },
          { label: "er / sie / es", cells: ["muss", "darf"] },
          { label: "wir / sie / Sie", cells: ["müssen", "dürfen"] },
          { label: "ihr", cells: ["müsst", "dürft"] },
        ],
      },
      examples: [
        {"de": "Ich muss am ersten Tag die Miete bezahlen.", "ar": "يجب أن أدفع الإيجار في اليوم الأوّل. (الفعل الأصلي آخر الجملة)"},
        {"de": "Darf ich im Garten grillen?", "ar": "أيُسمح لي أن أشوي في الحديقة؟ (سؤال ⟵ الفعل الناقص أوّلاً)"},
        {"de": "In dieser Hausordnung steht: Nach 22 Uhr darf man nicht laut sein.", "ar": "تنصّ لائحة هذا المبنى على منع الضجيج بعد العاشرة. (منع ⟵ darf nicht)"},
        {"de": "Du musst nicht kommen, aber du darfst.", "ar": "لستَ مضطرّاً إلى المجيء، لكن مسموحٌ لك. (الفرق كاملاً في جملة)"},
        {"de": "Wir müssen den Müll trennen.", "ar": "علينا أن نفرز النفايات."},
        {"de": "Kinder dürfen im Hof spielen.", "ar": "مسموح للأطفال أن يلعبوا في الفناء."},
        {"de": "Man darf hier nicht parken.", "ar": "الوقوف ممنوع هنا. (man للتعميم)"},
        {"de": "Muss ich den Vertrag heute unterschreiben?", "ar": "أعليّ أن أوقّع العقد اليوم؟"},
      ],
      comparisonWithArabic:
        "**١. العربية تعبّر بالأسماء والألمانية بالأفعال.** نقول «يجب عليّ أن أدفع» بشبه جملةٍ ثقيلة («على» + ضمير)، أو «لا بدّ لي»، أو نستعمل الاسم «واجب». والألمانية تختصر ذلك كلّه في فعلٍ واحد مصرَّف: Ich muss. فالمتعلّم العربي يميل إلى بناءاتٍ أطول ممّا ينبغي، والقاعدة العملية: **ترجم «يجب/لازم» بفعلٍ واحد لا بتركيب**.\n\n**٢. رتبة الكلمات معكوسة.** العربية: «يجب أن **أدفع** الإيجار **غداً**» — الفعل مبكّر والتفاصيل تتبعه. والألمانية: «Ich muss **morgen die Miete** bezahlen» — الفعل الأصلي **آخر كلمة في الجملة**. فالعربي يميل إلى قول «Ich muss bezahlen die Miete morgen» بترتيبٍ عربي، وهي جملة مفهومة لكنّها خاطئة بوضوح. **درِّب نفسك على تأجيل الفعل — وهو أصعب عادةٍ يكتسبها العربي في الألمانية.**\n\n**٣. مصدرٌ بلا zu.** العربية توجب «أن» قبل الفعل («أن أدفع»)، والإنجليزية توجب to أحياناً. والألمانية بعد الفعل الناقص **تمنع zu منعاً باتّاً**: Ich muss bezahlen — لا «zu bezahlen». فالمتعلّم الذي يبحث عن مقابلٍ لـ«أن» يُقحم zu فيخطئ.\n\n**٤. النفي المقلوب لا نظير له.** العربية تنفي بأداةٍ واحدة والمعنى يتبع: «لا يجب» و«لا يُسمح» متقاربتان في العامية وقد تُستعملان بمعنى المنع. أمّا الألمانية فتفرّق بينهما: nicht dürfen يفيد عدم السماح في السياق، وnicht müssen يرفع الإلزام فقط. وهذا فرقٌ عملي مهم في فهم التعليمات، ويستحقّ التدريب على أمثلة سياقية.\n\n**٥. لا يقابل ضمير man ضميرٌ مباشر واحد في العربية.** يمكن التعبير عن العموم بالمبني للمجهول («يُمنَع التدخين») أو بصيغة الجمع («يمنعون»). والألمانية تملك ضميراً مخصّصاً man يُصرَّف كالمفرد الغائب. فترجم «يُمنَع…» بـ «Man darf nicht…» ولا تبحث عن مبنيّ للمجهول في A1.",
      eselsbruecke:
        "**«الناقص في الثاني، والأصلي في الآخر»** — قاعدة بنائية تُطبَّق حرفياً. وللتصريف: **«أنا وهو سواء، وكلاهما عارٍ»** — ich muss / er muss بلا نهاية. وللنفي — وهي أهمّ جملةٍ في الدرس: **«darf nicht = غير مسموح في السياق، و muss nicht = غير مُلزَم»**. ولتذكّر الفرق، قارن بين العبارة التدريبية «Hier darf man nicht rauchen»؛ أما «Hier muss man nicht rauchen» فتعني أن التدخين غير واجب، لا أنه ممنوع.",
      commonMistakes: [
        {"wrong": "Du musst nicht rauchen. (بمعنى: التدخين ممنوع)", "right": "Du darfst nicht rauchen.", "whyAr": "أخطر خطأٍ في الدرس لأنّه يقلب الرسالة. nicht müssen ترفع الإلزام فحسب، فالجملة تعني «لستَ مضطرّاً إلى التدخين» — ولا تفيد هذه العبارة معنى المنع المقصود. في هذا المثال نستخدم nicht dürfen للتعبير عن عدم السماح، مع وجود صيغ أخرى للمنع مثل Verboten أو Kein Zutritt."},
        {"wrong": "Ich muss bezahlen die Miete morgen.", "right": "Ich muss morgen die Miete bezahlen.", "whyAr": "ترتيبٌ عربي/إنجليزي: الفعل الأصلي بعد الناقص مباشرةً. لكنّ قوس الجملة الألماني يوجب دفع المصدر إلى **آخر** الجملة، وما بينهما تفاصيل الزمان والمكان والمفعول. وهذه العادة أصعب ما يكتسبه العربي، وتحتاج تدريباً واعياً لا فهماً فقط."},
        {"wrong": "Er musst die Tür schließen.", "right": "Er muss die Tür schließen.", "whyAr": "إضافة ‑t قياساً على الفعل العادي (er wohnt, er macht). لكنّ الأفعال الناقصة كلّها **بلا نهاية** في خانتي ich و er، لأنّها بقايا صيغةٍ ماضية قديمة. فتقول er muss, er darf, er kann, er will — عاريةً كلّها."},
        {"wrong": "Ich muss zu bezahlen.", "right": "Ich muss bezahlen.", "whyAr": "إقحام zu بحثاً عن مقابلٍ لـ«أن» العربية. والقاعدة قاطعة: **المصدر بعد الفعل الناقص يأتي عارياً بلا zu**. أمّا zu فتلزم مع أفعال أخرى مثل versuchen و vergessen و anfangen، وستدرسها في B1."},
      ],
      relatedRuleComparison: {
        "title": "الأفعال الناقصة الستة وملاحظة عن ترتيبها",
        "content": "الأفعال الناقصة الأساسية ستة: können، müssen، dürfen، wollen، sollen، mögen. أمّا möchten فليست فعلاً سابعاً؛ إنها صيغة Konjunktiv II من mögen وتُستعمل كثيراً للطلب المهذّب. تتطابق صيغ ich وer/sie/es في هذه الأفعال، لكن تغيّر حرف العلّة ليس قاعدة عامة: sollen لا يغيّر علّته (ich/er soll، wir/sie sollen). يكفي في هذا الدرس إتقان müssen وdürfen؛ وتظهر wollen وsollen في دروس لاحقة من A1."
      },
    },
  ],

  reading: {
    "id": "read-a1-04",
    "titleDe": "Die neue Wohnung",
    "titleAr": "الشقّة الجديدة",
    "textType": "email",
    "paragraphs": [
      "Liebe Sonia,\nwie geht es dir? Ich habe endlich eine Wohnung gefunden! Sie ist nicht sehr groß, aber sie ist hell und ruhig. Ich wohne jetzt in der Gartenstraße 14, im dritten Stock. Die Miete ist nicht billig, aber die Lage ist perfekt.",
      "Die Wohnung hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist mein Lieblingsraum. Dort stehen ein Sofa, ein kleiner Tisch und ein Regal mit meinen Büchern. An der Wand hängt ein Bild aus Tunesien. Auf dem Balkon habe ich drei Pflanzen.",
      "Die Küche ist sehr klein, aber praktisch. Der Kühlschrank steht neben dem Fenster und der Herd ist ziemlich neu. Im Schlafzimmer gibt es nur ein Bett und einen Schrank. Das ist genug für mich. Unter dem Bett habe ich meine Koffer.",
      "Es gibt aber auch Regeln. In unserem Haus darf man nach 22 Uhr nicht laut sein, denn dann beginnt die Ruhezeit. Laut Hausordnung darf ich am Sonntag keine Wäsche waschen. Und ich muss den Müll trennen: Papier, Glas, Plastik und Biomüll. Am Anfang war das kompliziert!",
      "Meine Nachbarn sind sehr freundlich. Frau Berger wohnt unter mir und sie hat einen kleinen Hund. Sie sagt immer: Du musst nicht klingeln, die Tür ist offen. Kommst du mich bald besuchen? Du darfst gern eine Woche bleiben.\nViele Grüße,\ndeine Amira"
    ],
    "paragraphsAr": [
      "عزيزتي سنية،\nكيف حالك؟ وجدتُ أخيراً شقّة! ليست كبيرة جداً لكنّها مضيئة وهادئة. أسكن الآن في شارع الحديقة رقم ١٤، في الطابق الثالث. الإيجار ليس رخيصاً لكنّ الموقع مثالي.",
      "الشقّة فيها غرفتان ومطبخ وحمّام. غرفة المعيشة هي غرفتي المفضّلة. فيها أريكة وطاولة صغيرة ورفّ عليه كتبي. وعلى الجدار صورة معلّقة من تونس. وعلى الشرفة عندي ثلاث نبتات.",
      "المطبخ صغير جداً لكنّه عمليّ. الثلّاجة بجانب النافذة والموقد جديد نسبياً. وفي غرفة النوم سرير وخزانة فقط. وهذا يكفيني. وتحت السرير حقائبي.",
      "لكن هناك قواعد أيضاً. في مبنانا لا يُسمح بإحداث الضجيج بعد العاشرة مساءً، إذ يبدأ حينها وقت الهدوء. ووفق لائحة المبنى لا يُسمح لي بغسل الملابس يوم الأحد. وعليّ أن أفرز النفايات: ورق وزجاج وبلاستيك ونفايات عضوية. كان ذلك معقّداً في البداية!",
      "جيراني ودودون جداً. السيّدة بيرغر تسكن تحتي ولها كلب صغير. تقول لي دائماً: لستِ مضطرّة إلى قرع الجرس، الباب مفتوح. أتأتين لزيارتي قريباً؟ يسعدني أن تبقي أسبوعاً كاملاً.\nتحيّاتي،\nأميرة"
    ],
    "glossary": [
      {
        "de": "die Miete",
        "ar": "الإيجار",
        "noteAr": "مؤنّثة. ومنها der Mieter (المستأجر) و der Vermieter (المؤجّر) و der Mietvertrag (عقد الإيجار). وتُستعمل Kaltmiete للإيجار دون تكاليف التدفئة والتكاليف الجانبية، وWarmmiete لمبلغ يشملها وفق تفاصيل الإعلان؛ تحقّق مما يدخل في السعر."
      },
      {
        "de": "die Lage",
        "ar": "الموقع",
        "noteAr": "مؤنّثة بـ‑e. وتُستعمل في إعلانات السكن دائماً: ruhige Lage (موقع هادئ)، zentrale Lage (موقع مركزي)."
      },
      {
        "de": "der Stock",
        "ar": "الطابق",
        "noteAr": "im dritten Stock = في الطابق الثالث. وحذارِ: الطابق الأرضي يسمّى Erdgeschoss ولا يُعدّ، فـ«الأوّل» الألماني هو «الثاني» في كثير من البلاد العربية."
      },
      {
        "de": "hängen",
        "ar": "يُعلَّق / معلّق",
        "noteAr": "من أفعال الموقع مع Dativ: Das Bild hängt an der Wand. ويُستعمل أيضاً للحركة مع Akkusativ: Ich hänge das Bild an die Wand."
      },
      {
        "de": "der Kühlschrank",
        "ar": "الثلّاجة",
        "noteAr": "مركّب من kühl (بارد) + Schrank (خزانة) — حرفياً «خزانة باردة». ومذكّر لأنّ der Schrank مذكّر."
      },
      {
        "de": "neben",
        "ar": "بجانب",
        "noteAr": "من حروف التبديل التسعة: Wo? ⟵ Dativ (neben dem Fenster)، و Wohin? ⟵ Akkusativ (Ich stelle es neben das Fenster)."
      },
      {
        "de": "genug",
        "ar": "كافٍ",
        "noteAr": "ظرف لا يُصرَّف. يشيع قبل الاسم: genug Geld (مال كافٍ)، وبعد الصفة: groß genug (كبير بما يكفي)؛ وقد يأتي بعد الاسم في سياقات مخصوصة."
      },
      {
        "de": "die Ruhezeit",
        "ar": "وقت الهدوء",
        "noteAr": "فترة للحدّ من الضجيج، لكن مواعيدها وتفاصيلها تعتمد على القواعد المحلية وHausordnung؛ لا تعمّم وقتاً واحداً على كل ألمانيا."
      },
      {
        "de": "den Müll trennen",
        "ar": "يفرز النفايات",
        "noteAr": "فرز النفايات من الممارسات المعتادة، لكن فئات الجمع وألوان الحاويات تختلف بحسب البلدية؛ راجع الإرشادات المحلية."
      },
      {
        "de": "die Wäsche waschen",
        "ar": "يغسل الملابس",
        "noteAr": "die Wäsche اسمٌ جمعيّ للملابس المعدّة للغسل أو المغسولة. وقد تحدّ بعض Hausordnungen من تشغيل الغسالة في أوقات معيّنة بسبب الضجيج؛ تحقّق من اللائحة المحلية."
      },
      {
        "de": "der Nachbar",
        "ar": "الجار",
        "noteAr": "مذكّر من صنف n‑Deklination: der Nachbar لكن den Nachbarn في النصب. والمؤنّث die Nachbarin."
      },
      {
        "de": "klingeln",
        "ar": "يقرع الجرس",
        "noteAr": "فعل منتظم. ومنه die Klingel (الجرس). قد يظهر اسم الساكن بجانب زرّ الجرس في بعض المباني؛ وتختلف طريقة الدخول من مكان إلى آخر."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الأولى — أين تسكن أميرة؟",
        "questionDe": "Wo liegt Amiras neue Wohnung?",
        "questionAr": "أين تقع شقّة أميرة الجديدة؟",
        "options": [
          "Im Erdgeschoss",
          "Im dritten Stock",
          "Im ersten Stock",
          "In einem Haus mit Garten"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «in der Gartenstraße 14, im dritten Stock». وانتبه إلى أنّ اسم الشارع Gartenstraße فيه كلمة «حديقة» لكنّه لا يعني أنّ للشقّة حديقة.",
        "optionExplanations": [
          "الطابق الأرضي لم يُذكر.",
          undefined,
          "الطابق الثالث لا الأوّل.",
          "اسم الشارع Gartenstraße مضلّل؛ الشقّة في عمارة."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الثانية — دقّق في الحالة الإعرابية:",
        "questionDe": "Warum heißt es «an der Wand» und nicht «an die Wand»?",
        "questionAr": "لماذا an der Wand لا an die Wand؟",
        "options": [
          "Weil Wand maskulin ist",
          "Weil die Frage Wo? ist und es keine Bewegung gibt",
          "Weil hängen immer Dativ braucht",
          "Weil das Bild klein ist"
        ],
        "correctIndex": 1,
        "explanation": "الجملة تصف موقعاً ثابتاً وتجيب عن Wo? ⟵ فالجرّ واجب، و die Wand مؤنّثة فتصير der. ولو كانت حركةً لقلنا: Ich hänge das Bild an die Wand (نصب).",
        "optionExplanations": [
          "die Wand مؤنّثة، و der هنا علامة جرّ المؤنّث لا مذكّر.",
          undefined,
          "hängen يعمل في الحالتين بحسب المعنى، لا دائماً بالجرّ.",
          "حجم الصورة لا أثر له في الإعراب."
        ],
        "errorType": "case",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الرابعة — القواعد المنزلية:",
        "questionDe": "Was ist am Sonntag verboten?",
        "questionAr": "ما الممنوع يوم الأحد؟",
        "options": [
          "Den Müll trennen",
          "Wäsche waschen",
          "Auf dem Balkon sitzen",
          "Nachbarn besuchen"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Laut Hausordnung darf ich am Sonntag keine Wäsche waschen». ويعبّر dürfen مع النفي عن عدم السماح في هذا السياق، خلافاً لـ müssen مع النفي التي ترفع الإلزام فقط.",
        "optionExplanations": [
          "فرز النفايات واجب لا ممنوع: ich muss den Müll trennen.",
          undefined,
          "الجلوس في الشرفة لم يُمنع.",
          "الزيارة مرحّب بها في آخر الرسالة."
        ],
        "errorType": "negation",
        "paragraph": 3
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الخامسة — افهم قصد الجارة:",
        "questionDe": "Was meint Frau Berger mit «Du musst nicht klingeln»?",
        "questionAr": "ماذا تقصد السيّدة بيرغر بقولها Du musst nicht klingeln؟",
        "options": [
          "Klingeln ist verboten",
          "Klingeln ist nicht nötig",
          "Sie hört die Klingel nicht",
          "Die Klingel ist kaputt"
        ],
        "correctIndex": 1,
        "explanation": "nicht müssen ترفع الإلزام ولا تمنع: أي «لستِ مضطرّة، الباب مفتوح أصلاً». ولو أرادت منع قرع الجرس لقالت Du darfst nicht klingeln؛ وهذه صيغة منع، مختلفة عن رفع الإلزام في Du musst nicht klingeln.",
        "optionExplanations": [
          "المنع يُصاغ بـ darf nicht لا musst nicht.",
          undefined,
          "لم تُذكر مشكلة في السمع.",
          "لم يُذكر عطب في الجرس، بل أنّ الباب مفتوح."
        ],
        "errorType": "negation",
        "paragraph": 4
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "انظر في النصّ كلّه:",
        "questionDe": "Was wird im Text nicht erwähnt?",
        "questionAr": "ما الشيء الذي لم يُذكر في النص؟",
        "options": [
          "Ein Regal",
          "Ein Kühlschrank",
          "Ein Esstisch im Esszimmer",
          "Ein Schrank"
        ],
        "correctIndex": 2,
        "explanation": "الرفّ والثلّاجة والخزانة مذكورة صراحةً. أمّا وجود طاولة أو غرفة طعام فلم يذكره النص؛ لذا فالإجابة هي الشيء غير المذكور، لا الجزم بأنه غير موجود في الشقة.",
        "optionExplanations": [
          "الرفّ مذكور في غرفة المعيشة.",
          "الثلّاجة مذكورة بجانب النافذة.",
          undefined,
          "الخزانة مذكورة في غرفة النوم."
        ],
        "errorType": "vocabulary",
        "paragraph": 2
      }
    ],
    "redemittel": [
      {
        "de": "Meine Wohnung hat zwei Zimmer, eine Küche und ein Bad.",
        "ar": "شقّتي فيها غرفتان ومطبخ وحمّام."
      },
      {
        "de": "Ich wohne in der Gartenstraße 14, im dritten Stock.",
        "ar": "أسكن في شارع الحديقة ١٤، الطابق الثالث."
      },
      {
        "de": "Die Wohnung ist hell und ruhig, aber nicht billig.",
        "ar": "الشقّة مضيئة وهادئة لكنّها ليست رخيصة."
      },
      {
        "de": "Der Kühlschrank steht neben dem Fenster.",
        "ar": "الثلّاجة بجانب النافذة."
      },
      {
        "de": "In dieser Hausordnung steht: Nach 22 Uhr darf man nicht laut sein.",
        "ar": "بعد العاشرة مساءً يُمنع الضجيج."
      },
      {
        "de": "Ich muss den Müll trennen.",
        "ar": "عليّ أن أفرز النفايات."
      }
    ],
    "discussionAr": "اكتب رسالةً قصيرة على منوال رسالة أميرة تصف فيها سكنك الحالي: ابدأ بعدد الغرف، ثمّ صِف غرفتك المفضّلة وما فيها من أثاث مستعملاً حرفي جرّ مكانيّين أو ثلاثةً مع Dativ، ثمّ اذكر قاعدتين منزليتين: واحدة بـ ich muss وأخرى بـ man darf nicht. وفي المراجعة اسأل عن جمل المكان: هل تجيب عن Wo? وتستعمل Dativ؟"
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "وصف الشقة",
        lines: [
          { speaker: "Mona", de: "Meine Wohnung ist in Tunis. Sie hat zwei Zimmer, eine Küche und ein Bad.", ar: "شقتي في تونس. فيها غرفتان ومطبخ وحمام." },
          { speaker: "Sami", de: "Welche Zimmer?", ar: "أي غرف؟" },
          { speaker: "Mona", de: "Ein Wohnzimmer und ein Schlafzimmer.", ar: "غرفة معيشة وغرفة نوم." },
          { speaker: "Sami", de: "Und die Küche? Ist sie groß?", ar: "والمطبخ؟ هل هو كبير؟" },
          { speaker: "Mona", de: "Ja, die Küche ist groß und modern.", ar: "نعم، المطبخ كبير وحديث." },
        ],
      },
      {
        id: "l2",
        title: "أين الأشياء؟",
        lines: [
          { speaker: "Karim", de: "Wo ist das Buch?", ar: "أين الكتاب؟" },
          { speaker: "Leila", de: "Das Buch ist auf dem Tisch.", ar: "الكتاب على الطاولة." },
          { speaker: "Karim", de: "Und die Lampe?", ar: "والمصباح؟" },
          { speaker: "Leila", de: "Die Lampe ist in der Küche.", ar: "المصباح في المطبخ." },
          { speaker: "Karim", de: "Wo schläfst du?", ar: "أين تنام؟" },
          { speaker: "Leila", de: "Ich schlafe im Schlafzimmer.", ar: "أنام في غرفة النوم." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie viele Zimmer hat die Wohnung?",
        questionAr: "كم عدد غرف الشقة؟",
        options: ["vier", "drei", "fünf", "zwei"],
        correctIndex: 3,
        explanation: "قالت منى: Sie hat zwei Zimmer, eine Küche und ein Bad — غرفتان، بالإضافة إلى المطبخ والحمّام.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist das Buch?",
        questionAr: "أين الكتاب؟",
        options: ["auf dem Tisch", "in der Küche", "im Bett", "unter dem Sofa"],
        correctIndex: 0,
        explanation: "قالت ليلى: Das Buch ist auf dem Tisch — على الطاولة (auf dem).",
        errorType: "preposition",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist die Lampe?",
        questionAr: "أين المصباح؟",
        options: ["in der Küche", "auf dem Tisch", "im Schlafzimmer", "unter dem Bett"],
        correctIndex: 0,
        explanation: "قالت: Die Lampe ist in der Küche — في المطبخ (die→der).",
        errorType: "preposition",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات السكن: ch، ß، وsch",
    items: [
      { de: "die Küche", ar: "المطبخ", note: "ü صوتٌ أمامي مدوّر [ʏ] (ليس يو)، وch هنا خفيفة [ç]." },
      { de: "das Schlafzimmer", ar: "غرفة النوم", note: "sch = ش؛ وz في Zimmer = تس: شلاف-تسِمَر (تقريب عربي)." },
      { de: "die Straße", ar: "الشارع", note: "st في البداية = شت؛ وß صوت س مهموس، مع a طويلة: شتراسه (تقريب عربي)." },
      { de: "wohnen", ar: "يسكن", note: "w = ڤ؛ وh لا تُنطق، بل تطيل o: ڤوونِن (تقريب عربي)." },
      { de: "das Sofa", ar: "الأريكة", note: "S في بداية الكلمة قبل الحركة تُنطق غالباً /z/: زوفا (تقريب عربي)." },
      { de: "das Zimmer", ar: "الغرفة", note: "Z = تس؛ وmm تدلّ على قِصر i، لا على مدّ m: تسِمَر (تقريب عربي)." },
    ],
    tip: "قارن الأصوات في البداية: Z في Zimmer = /ts/، وS في Sofa = /z/، وsch في Schlafzimmer = /ʃ/.",
    shadowing: [
      { de: "Ich wohne in einer Wohnung.", ar: "أسكن في شقة.", tip: "wohne = ڤوهنِه (w=ڤ)" },
      { de: "Das Wohnzimmer ist groß.", ar: "غرفة المعيشة كبيرة.", tip: "groß فيها o طويلة، وß تُنطق /s/؛ يختلف r بحسب المتحدث والمنطقة." },
      { de: "Das Bett ist im Schlafzimmer.", ar: "السرير في غرفة النوم.", tip: "im = in+dem" },
      { de: "Die Küche ist modern.", ar: "المطبخ حديث.", tip: "ü صوتٌ مدوّر قريب من [ʏ] وch هنا [ç]؛ لا يوجد مقابل عربي مطابق تماماً." },
      { de: "Wo wohnst du?", ar: "أين تسكن؟", tip: "w = ڤ؛ ركّز على st في wohnst." },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "كوّن جملة قصيرة تصف مكاناً؛ اختر اسماً وصفةً من الكلمات المعطاة.",
      prompt: "die Wohnung / das Zimmer / die Küche + ist + groß / klein / hell / ruhig",
      acceptedAnswers: [
        "Die Wohnung ist groß.", "Die Wohnung ist klein.", "Die Wohnung ist hell.", "Die Wohnung ist ruhig.",
        "Das Zimmer ist groß.", "Das Zimmer ist klein.", "Das Zimmer ist hell.", "Das Zimmer ist ruhig.",
        "Die Küche ist groß.", "Die Küche ist klein.", "Die Küche ist hell.", "Die Küche ist ruhig.",
      ],
      sampleAnswer: "Die Wohnung ist hell.",
      explanation: "بعد sein تأتي الصفة الخبرية بلا نهاية: Die Wohnung ist hell. غيّر الاسم والصفة باستعمال الكلمات المعطاة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر والأداة الصحيحين (im/in der/auf dem/unter dem):",
      template: "Das Buch ist ___ Tisch (على). Die Lampe ist ___ Küche (في). Ich schlafe ___ Bett (في).",
      blanks: [
        { correct: "auf dem", options: ["auf dem", "in der", "im", "unter dem"] },
        { correct: "in der", options: ["auf dem", "in der", "im", "unter dem"] },
        { correct: "im", options: ["auf dem", "in der", "im", "unter dem"] },
      ],
      explanation: "على طاولة مذكر → auf dem. في مطبخ مؤنث → in der. في سرير محايد → im (in+dem).",
      errorType: "preposition",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Das Sofa ist im Wohnzimmer.",
      explanation: "Das Sofa ist im Wohnzimmer — im = in + dem (Wohnzimmer محايد).",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "transformation",
      instructionAr: "كوّن سؤالاً عن السكن ثم أجب عنه بجملة مناسبة:",
      prompt: "Antwort: Ich wohne in Tunis. → Frage + Antwort: ...",
      acceptedAnswers: ["Wo wohnst du? Ich wohne in Tunis."],
      sampleAnswer: "Wo wohnst du? Ich wohne in Tunis.",
      explanation: "في سؤال W تأتي أداة السؤال أولاً ثم الفعل المصرف: Wo wohnst du? وتكون الإجابة بضمير المتكلم: Ich wohne in Tunis.",
      errorType: "word-order",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Buch ist ___ Tisch.",
      questionAr: "الكتاب على الطاولة.",
      options: ["auf dem", "auf der", "auf das", "auf den"],
      correctIndex: 0,
      explanation: "المذكر der→dem مع Dativ بعد auf: auf dem Tisch.",
      errorType: "preposition",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Die Lampe ist ___ Küche.",
      questionAr: "المصباح في المطبخ.",
      options: ["in der", "in dem", "im", "in das"],
      correctIndex: 0,
      explanation: "Küche مؤنثة → in der Küche.",
      errorType: "preposition",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الغرفة بمعناها:",
      pairs: [
        { left: "die Küche", right: "المطبخ" },
        { left: "das Wohnzimmer", right: "غرفة المعيشة" },
        { left: "das Schlafzimmer", right: "غرفة النوم" },
        { left: "das Bad", right: "الحمام" },
      ],
      explanation: "الغرف الأربع الأساسية — احفظها مع أدواتها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ist", "im", "Die", "Katze", "Bett", "."],
      correctSentence: "Die Katze ist im Bett.",
      explanation: "القطة في السرير: Die Katze + ist (V2) + im Bett.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "اختر التصحيح المناسب للخطأ في الجملة:",
      wrongSentence: "Ich schlafe in die Bett.",
      wrongWord: "in die",
      correctWord: "im",
      options: ["im", "in der", "am", "in das"],
      explanation: "Bett محايد والمكان يجيب عن Wo?؛ الصيغة المحايدة الشائعة هي im Bett (in + dem). in die Bett خطأ في الأداة والحالة.",
      errorType: "preposition",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير الصحيح (wohnen):",
      template: "Ich ___ in Tunis. Du ___ in Sousse. Er ___ in Berlin.",
      blanks: [
        { correct: "wohne", options: ["wohne", "wohnst", "wohnt"] },
        { correct: "wohnst", options: ["wohne", "wohnst", "wohnt"] },
        { correct: "wohnt", options: ["wohne", "wohnst", "wohnt"] },
      ],
      explanation: "تصريف wohnen: ich wohne، du wohnst، er wohnt — منتظم تماماً.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال:",
      prompt: "Die Küche ist groß. → ؟",
      acceptedAnswers: ["Ist die Küche groß", "Ist die Küche groß?"],
      sampleAnswer: "Ist die Küche groß?",
      explanation: "سؤال نعم/لا: الفعل أولاً — Ist die Küche groß?",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich schlafe im Schlafzimmer.",
      questionAr: "ما معنى الجملة؟",
      options: ["أنام في غرفة النوم", "آكل في المطبخ", "أجلس في غرفة المعيشة", "أعمل في المكتب"],
      correctIndex: 0,
      explanation: "schlafen = ينام + Schlafzimmer = غرفة النوم.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "اختر التصحيح المناسب للخطأ في الجملة:",
      wrongSentence: "Das Sofa ist in das Wohnzimmer.",
      wrongWord: "in das",
      correctWord: "im",
      options: ["im", "in der", "auf dem", "unter dem"],
      explanation: "بعد wo? نستخدم Dativ: in+das غير صحيحة للمكان الثابت → im Wohnzimmer.",
      errorType: "preposition",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Katze ist unter dem Tisch.",
      explanation: "القطة تحت الطاولة: unter + dem (Dativ للمذكر).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "في لائحة المبنى وردت العبارة التالية. ماذا تعني؟",
      questionDe: "In dieser Hausordnung steht: Nach 22 Uhr darf man nicht laut sein.",
      questionAr: "اختر المعنى الصحيح:",
      options: [
        "ممنوع الضجيج بعد العاشرة مساءً.",
        "لستَ مضطراً للضجيج بعد العاشرة.",
        "يجب أن تكون صاخباً بعد العاشرة.",
        "يمكنك الضجيج حتى العاشرة فقط إن أردت.",
      ],
      correctIndex: 0,
      explanation: "في هذا السياق، nicht dürfen تعبّر عن عدم السماح بالضجيج، لا عن رفع الإلزام فحسب.",
      optionExplanations: [
        undefined,
        "هذا معنى nicht müssen لا nicht dürfen — والفرق بينهما هو بيت القصيد.",
        "müssen تعني الإلزام، ولا وجود لها في الجملة.",
        "الجملة منعٌ صريح لا خيار مطروح.",
      ],
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص المناسب بحسب المعنى بين القوسين:",
      template: "Ich ___ die Miete bezahlen (واجب). ___ ich hier parken? (طلب إذن) Kinder ___ nicht allein im Aufzug fahren (ممنوع عليهم).",
      blanks: [
        { correct: "muss", options: ["muss", "musst", "darf"] },
        { correct: "Darf", options: ["Darf", "Muss", "Darfst"] },
        { correct: "dürfen", options: ["dürfen", "darf", "müssen"] },
      ],
      explanation: "ich muss (إلزام) · Darf ich …? (طلب إذن، والفعل أول الجملة في السؤال) · Kinder جمع ⇒ dürfen، والنفي هنا منعٌ.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "error-correction",
      instructionAr: "اختر التصحيح المناسب للخطأ في ترتيب الكلمات:",
      wrongSentence: "Ich muss heute die Wohnung putzen nicht.",
      wrongWord: "putzen nicht",
      correctWord: "nicht putzen",
      options: ["nicht putzen", "putzen nicht", "nicht zu putzen", "kein putzen"],
      explanation: "المصدر يُغلق الجملة، فلا يأتي بعده شيء: النفي يسبقه ⇒ … heute die Wohnung nicht putzen.",
      errorType: "word-order",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال مهذّب لطلب الإذن:",
      tokens: ["Darf", "ich", "im", "Garten", "grillen", "?"],
      correctSentence: "Darf ich im Garten grillen?",
      explanation: "سؤال الإذن يبدأ بالفعل الناقص، والمصدر (grillen) يُغلق الجملة.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "أعد الصياغة: عبّر عن الإعفاء لا المنع.",
      prompt: "صديقك يظنّ أنّ عليه إحضار هدية. طمئنه بأنّه غير مُلزم (استعمل müssen منفياً).",
      acceptedAnswers: [
        "Du musst nichts mitbringen.",
        "Du musst kein Geschenk mitbringen.",
      ],
      sampleAnswer: "Du musst nichts mitbringen.",
      explanation: "الإعفاء يكون بـ nicht/nichts + müssen. لو قلت «Du darfst nichts mitbringen» لمنعته من إحضار أي شيء!",
      errorType: "grammar",
    },
    {"id": "e16", "type": "fill-blank", "instructionAr": "أكمل بأداة الجرّ الصحيحة:", "template": "Das Bild hängt an ___ Wand und die Lampe steht auf ___ Tisch.", "blanks": [{"correct": "der", "options": ["der", "dem", "die", "den"]}, {"correct": "dem", "options": ["dem", "der", "den", "das"]}], "explanation": "كلتا الجملتين تجيبان عن Wo? ⟵ جرّ. و die Wand مؤنّثة ⟵ der (وهي علامة جرّ المؤنّث لا المذكّر!)، و der Tisch مذكّر ⟵ dem.", "errorType": "case"},
    {"id": "e17", "type": "multiple-choice", "instructionAr": "أيّ جملة تعني «التدخين ممنوع هنا»؟", "questionDe": "Welcher Satz bedeutet ein Verbot?", "questionAr": "أيّ جملة تفيد المنع؟", "options": ["Man muss hier nicht rauchen", "Man darf hier nicht rauchen", "Man muss hier rauchen", "Man kann hier nicht rauchen"], "correctIndex": 1, "explanation": "من بين الخيارات، nicht dürfen تعني عدم السماح. أمّا nicht müssen فترفع الإلزام («لستَ مضطرّاً»)، و nicht können تفيد عدم القدرة أو الإمكان لا المنع في هذا السياق.", "optionExplanations": ["ترفع الإلزام فحسب: لستَ مضطرّاً إلى التدخين.", undefined, "إلزامٌ بالتدخين، وهو عكس المراد.", "تفيد عدم القدرة أو الإمكان لا المنع."], "errorType": "negation"},
    {"id": "e18", "type": "word-ordering", "instructionAr": "رتّب الكلمات مراعياً قوس الجملة:", "tokens": ["Ich", "muss", "morgen", "die", "Miete", "bezahlen", "."], "correctSentence": "Ich muss morgen die Miete bezahlen.", "explanation": "الفعل الناقص muss في المركز الثاني، والفعل الأصلي bezahlen مصدراً في آخر الجملة، وبينهما ظرف الزمان ثمّ المفعول به. هذا هو قوس الجملة (Satzklammer).", "errorType": "word-order"},
    {"id": "e19", "type": "error-correction", "instructionAr": "صحّح الخطأ في تصريف الفعل الناقص:", "wrongSentence": "Er musst die Tür schließen.", "wrongWord": "musst", "correctWord": "muss", "options": ["muss", "müssen", "müsst", "musse"], "explanation": "الأفعال الناقصة بلا نهاية في خانتي ich و er: er muss لا er musst. وهذا نمطٌ يشترك فيه كلّ الأفعال الناقصة الستّة.", "errorType": "conjugation"},
    {"id": "e20", "type": "transformation", "instructionAr": "حوّل الجملة من وصف الموقع إلى وصف الحركة:", "prompt": "Das Buch liegt auf dem Tisch. (Ich lege es …)", "acceptedAnswers": ["Ich lege es auf den Tisch.", "Ich lege es auf den Tisch"], "sampleAnswer": "Ich lege es auf den Tisch.", "explanation": "انتقلنا من Wo? إلى Wohin? ⟵ فالحرف auf يتحوّل من الجرّ إلى النصب: auf dem Tisch ⟵ auf den Tisch. والمذكّر وحده يُظهر الفرق بوضوح.", "errorType": "case"},
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "auf der Tisch", right: "auf dem Tisch", whyAr: "المذكر der→dem بعد حروف الجر المكانية." },
      { wrong: "im die Küche", right: "in der Küche", whyAr: "im = in+dem للمذكر/المحايد فقط؛ المؤنث يبقى in der." },
      { wrong: "نطق Wohnzimmer كـ«وُهن»", right: "ڤوهن-تسِمّر (w=ڤ)", whyAr: "تذكر قاعدة الأبجدية: W=ڤ دائماً." },
    ],
    eselsbruecken: [
      "«السكون Dativ»: wo? (أين؟ المكان الساكن) → Dativ: im, in der, auf dem.",
      "«im = إم»: مثل كلمة «إم» العربية للدخول — im Wohnzimmer = إم غرفة المعيشة.",
    ],
    culturalNote: {
      title: "الشقة في ألمانيا",
      content:
        "في إعلان السكن قد ترى Kaltmiete (الإيجار دون تكاليف التدفئة وسائر التكاليف الجانبية) وWarmmiete (الإيجار شاملاً التدفئة وتكاليف جانبية أخرى). افحص تفاصيل ما يشمله المبلغ في الإعلان والعقد. وقد تُعرض شقق غير مفروشة؛ لا تفترض تجهيز المطبخ أو الأثاث من دون قراءة الوصف. ستعود مفردات البحث عن سكن في درس A2.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Sofa ist ___ Wohnzimmer.",
      questionAr: "الأريكة في غرفة المعيشة.",
      options: ["im", "in der", "auf dem", "unter dem"],
      correctIndex: 0,
      explanation: "Wohnzimmer محايد → im (in+dem).",
      errorType: "preposition",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wo ___ du? — Ich wohne in Tunis.",
      options: ["wohnst", "wohne", "wohnt", "wohnen"],
      correctIndex: 0,
      explanation: "مع du: wohnst. (wohne مع ich، wohnt مع er/sie).",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["in", "der", "ist", "Lampe", "Die", "Küche", "."],
      correctSentence: "Die Lampe ist in der Küche.",
      explanation: "المصباح في المطبخ: Die Lampe + ist + in der Küche.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر التصحيح المناسب للخطأ في الجملة:",
      wrongSentence: "Das Buch ist auf der Tisch.",
      wrongWord: "auf der",
      correctWord: "auf dem",
      options: ["auf dem", "auf die", "auf das", "in dem"],
      explanation: "Tisch مذكر → auf dem Tisch.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الصحيح:",
      template: "Die Katze ist ___ Sofa (تحت). Das Bild ist ___ Wand (على الجدار).",
      blanks: [
        { correct: "unter dem", options: ["unter dem", "auf dem", "in der", "im"] },
        { correct: "an der", options: ["an der", "an dem", "auf der", "im"] },
      ],
      explanation: "تحت الأريكة (محايد) → unter dem. على الجدار (مؤنث) → an der Wand.",
      errorType: "preposition",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Wohnung", ar: "الشقة", example: "Meine Wohnung ist klein.", exampleAr: "شقتي صغيرة.", level: "A1" },
    { id: "fc2", de: "das Zimmer", ar: "الغرفة", example: "Das Zimmer ist groß.", exampleAr: "الغرفة كبيرة.", level: "A1" },
    { id: "fc3", de: "die Küche", ar: "المطبخ", example: "Die Küche ist modern.", exampleAr: "المطبخ حديث.", level: "A1" },
    { id: "fc4", de: "das Wohnzimmer", ar: "غرفة المعيشة", example: "Wir sitzen im Wohnzimmer.", exampleAr: "نجلس في غرفة المعيشة.", level: "A1" },
    { id: "fc5", de: "das Schlafzimmer", ar: "غرفة النوم", example: "Ich schlafe im Schlafzimmer.", exampleAr: "أنام في غرفة النوم.", level: "A1" },
    { id: "fc6", de: "das Bad", ar: "الحمام", example: "Das Bad ist sauber.", exampleAr: "الحمام نظيف.", level: "A1" },
    { id: "fc7", de: "der Tisch / der Stuhl", ar: "الطاولة / الكرسي", example: "Der Stuhl steht neben dem Tisch.", exampleAr: "الكرسي بجانب الطاولة.", level: "A1" },
    { id: "fc8", de: "wohnen", ar: "يسكن", example: "Wo wohnst du?", exampleAr: "أين تسكن؟", level: "A1" },
    { id: "fc9", de: "müssen (ich muss)", ar: "يجب / مُلزَم", example: "Ich muss die Miete bezahlen.", exampleAr: "يجب أن أدفع الإيجار.", level: "A1" },
    { id: "fc10", de: "dürfen (ich darf)", ar: "مسموح / يجوز", example: "Darf ich hier parken?", exampleAr: "هل يُسمح لي بالركن هنا؟", level: "A1" },
    {"id": "fc11", "de": "die Miete", "ar": "الإيجار", "example": "Die Miete ist nicht billig.", "exampleAr": "الإيجار ليس رخيصاً.", "level": "A1"},
    {"id": "fc12", "de": "im / am / zum / zur", "ar": "اندماجات حرف الجرّ مع الأداة", "example": "Ich bin im Wohnzimmer.", "exampleAr": "أنا في غرفة المعيشة.", "level": "A1"},
    {"id": "fc13", "de": "der Nachbar / die Nachbarin", "ar": "الجار / الجارة", "example": "Meine Nachbarn sind freundlich.", "exampleAr": "جيراني ودودون.", "level": "A1"},
    {"id": "fc14", "de": "den Müll trennen", "ar": "يفرز النفايات", "example": "Wir müssen den Müll trennen.", "exampleAr": "علينا أن نفرز النفايات.", "level": "A1"},
    {"id": "fc15", "de": "die Ruhezeit", "ar": "وقت الهدوء وفق اللائحة المحلية", "example": "In diesem Haus beginnt laut Hausordnung die Ruhezeit nach 22 Uhr.", "exampleAr": "وفق لائحة هذا المبنى يبدأ وقت الهدوء بعد العاشرة.", "level": "A1"},
    {"id": "fc16", "de": "wohnen / leben", "ar": "فعلان للإقامة والحياة بحسب السياق", "example": "Ich lebe in Deutschland und wohne in Köln.", "exampleAr": "أعيش في ألمانيا وأسكن في كولونيا.", "level": "A1"},
    { id: "fc17", de: "das Bett", ar: "السرير", example: "Das Bett steht am Fenster.", exampleAr: "السرير عند النافذة.", level: "A1" },
    { id: "fc18", de: "hell", ar: "مضيء", example: "Das Zimmer ist hell und ruhig.", exampleAr: "الغرفة مضيئة وهادئة.", level: "A1" },
    { id: "fc19", de: "ruhig", ar: "هادئ", example: "Die Straße ist sehr ruhig.", exampleAr: "الشارع هادئ جداً.", level: "A1" },
    { id: "fc20", de: "gefunden (finden)", ar: "وجَد", example: "Endlich habe ich eine Wohnung gefunden!", exampleAr: "أخيراً وجدتُ شقّة!", level: "A1" },
    { id: "fc21", de: "endlich", ar: "أخيراً", example: "Endlich ist es warm.", exampleAr: "أخيراً صار الجوّ دافئاً.", level: "A1" },
    { id: "fc22", de: "das Fenster", ar: "النافذة", example: "Das Fenster ist groß.", exampleAr: "النافذة كبيرة.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل اللغوي ═══ */
  mediation: [
        {
      id: "med-a1-04-1", type: "simplify-announcement",
      titleAr: "بسّط إعلان شقة بالعربية لصديق",
      sourceDe: "Wohnung zu vermieten: 2 Zimmer, 60 m², Küche und Bad, zentral gelegen. Miete: 600 Euro warm.",
      taskAr: "انقل الإعلان بالعربية لصديق يبحث عن سكن: عدد الغرف، المساحة، الموقع، والإيجار.",
      modelAnswerAr: "«شقة للإيجار: غرفتان، 60 متراً مربعاً، مطبخ وحمام، في موقع مركزي. الإيجار 600 يورو شاملاً التدفئة والتكاليف الجانبية المذكورة في الإعلان.»",
      keyPointsAr: ["نقلت عدد الغرف (2) والمساحة (60م²)", "ذكرت المطبخ والحمام والموقع المركزي", "نقلت الإيجار (600 يورو) ووضحت أن warm يشير إلى التدفئة وتكاليف جانبية بحسب الإعلان"],
    },
  ],
      interaction: [
    {
      id: "int-a1-04-1",
      scenarioAr: "تتصل بصاحب شقة للاستفسار.",
      scenarioDe: "Du rufst wegen einer Wohnung an.",
      strategyAr: "الاستراتيجية: السؤال عن تفاصيل الشقة والرد على الأسئلة.",
      rounds: [
        {
          speakerDe: "Hallo, Sie interessieren sich für die Wohnung?",
          speakerAr: "مرحباً، أنت مهتم بالشقة؟",
          options: [
            { de: "Ja, genau. Wie viele Zimmer hat sie?", ar: "نعم بالضبط. كم عدد الغرف؟", best: true, replyDe: "Zwei Zimmer plus Küche und Bad.", replyAr: "غرفتان بالإضافة إلى مطبخ وحمام." },
            { de: "Nein, ich suche ein Auto.", ar: "لا، أنا أبحث عن سيارة.", best: false, replyDe: "Das ist ein Wohnungsinserat, kein Auto.", replyAr: "هذا إعلان شقة، وليس سيارة." },
          ],
        },
        {
          speakerDe: "Zwei Zimmer, 60 Quadratmeter. Passt das?",
          speakerAr: "غرفتان، 60 متراً مربعاً. هل يناسبك؟",
          options: [
            { de: "Ja, das passt gut. Und wie hoch ist die Miete?", ar: "نعم يناسبني جيداً. وكم الإيجار؟", best: true, replyDe: "600 Euro warm, inklusive Nebenkosten.", replyAr: "600 يورو شاملاً التكاليف الجانبية." },
            { de: "Ich weiß nicht, ob ich wohnen will.", ar: "لا أعرف إن كنت أريد السكن.", best: false, replyDe: "Sie rufen wegen einer Wohnung an, oder?", replyAr: "أنت تتصل بخصوص شقة، أليس كذلك؟" },
          ],
        },
      ],
    },
  ],

};