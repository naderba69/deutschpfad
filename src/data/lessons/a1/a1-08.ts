import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-08: الملابس والألوان
 * — الملابس + الألوان + الصفات الخبرية + tragen/finden + Wie findest du...?
 */
export const lessonA108: Lesson = {
  id: "a1-08",
  unitId: "a1-08",
  level: "A1",
  order: 1,
  titleDe: "Kleidung und Farben",
  titleAr: "الملابس والألوان",
  duration: 30,
  summary:
    "أسماء الملابس والألوان، وصفها بالصفات الخبرية، فعل tragen (يرتدي)، والسؤال عن الرأي: Wie findest du...?",

  lernziele: [
    { id: "z1", de: "Ich kann Kleidung nennen.", ar: "أن أسمّي الملابس: Hemd, Hose, Jacke, Schuhe..." },
    { id: "z2", de: "Ich kann die Farben sagen.", ar: "أن أسمّي الألوان: rot, blau, grün, gelb, schwarz, weiß." },
    { id: "z3", de: "Ich kann sagen: Ich trage ein rotes Hemd.", ar: "أن أصف ما أرتدي بجملة كاملة (مقدمة لتصريف الصفات)." },
    { id: "z4", de: "Ich kann fragen: Wie findest du das?", ar: "أن أسأل عن الرأي وأجيب: Das finde ich schön." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في العربية نقول: «قميص أحمر» — الصفة تتبع الاسم. في الألمانية، قبل أن تتعلم القواعد الكاملة (B1)، هناك صيغة بسيطة: الصفة «الخبرية» بعد الفعل sein. خمّن: كيف تقول «القميص أحمر»؟",
    motivatingQuestionDe: "Wie findest du meine Jacke?",
    contextAr:
      "نتسوق للملابس اليوم: الألوان، القطع الأساسية، وصف ما نرتديه، وطلب الرأي بلطف — كلها عبارات ستحتاجها في أي متجر ألماني.",
    contextDe: "Diese Hose ist sehr schön!",
    connectionToPreviousAr: "تعلمت في درس التسوق الأرقام والأسعار. اليوم نضيف الملابس والألوان — جولة تسوق كاملة بالملابس!",
    activateVocabulary: [
      { de: "die Kleidung", ar: "الملابس" },
      { de: "das Hemd", ar: "القميص" },
      { de: "die Hose", ar: "البنطال" },
      { de: "die Farbe", ar: "اللون" },
      { de: "tragen", ar: "يرتدي" },
    ],
  },

  theory: [
    {
      id: "t1",
      titleAr: "الملابس والألوان + الصفات الخبرية",
      titleDe: "Kleidung, Farben und prädikative Adjektive",
      explanationAr:
        "الملابس والألوان ليست قائمة مفردات تُحفَظ، بل هي أوّل ميدانٍ تتدرّب فيه على **وصف الأشياء** بالألمانية. وسنبني الدرس في ثلاث خطوات: القطعة، ثمّ اللون، ثمّ الجملة التي تجمعهما.\n\n**الخطوة الأولى: القطعة مع أداتها.**\nلا تحفظ Hemd وحدها بل **das** Hemd. فالأداة جزء من الكلمة لا زينة عليها، ومن يحفظ الاسم عارياً يضطرّ إلى تخمين جنسه كلّ مرّة. والملابس تتوزّع على الأجناس الثلاثة بلا منطق ظاهر:\n• مذكّر: **der** Pullover · **der** Mantel · **der** Rock\n• مؤنّث: **die** Hose · **die** Jacke · **die** Mütze · **die** Bluse\n• محايد: **das** Hemd · **das** Kleid · **das** T-Shirt\n• وجمعٌ دائم: **die** Schuhe · **die** Socken · **die** Jeans — هذه لا تُستعمل مفردةً في الحديث العادي، تماماً كما نقول بالعربية «حذاء» ونعني فردتين.\n\n**الخطوة الثانية: اللون.** rot (أحمر) · blau (أزرق) · grün (أخضر) · gelb (أصفر) · schwarz (أسود) · weiß (أبيض) · braun (بنّي) · grau (رماديّ) · orange · rosa. ولاحظ أنّ أسماء الألوان تُكتب بحرف صغير لأنّها صفات لا أسماء.\n\n**الخطوة الثالثة — وهي القاعدة الحقيقية: الصفة الخبرية لا تتغيّر أبداً.**\nحين تأتي الصفة **بعد الفعل sein** فهي «خبر»، وتبقى في صورتها المجرّدة مهما كان الاسم:\n• Der Pullover ist rot. (مذكّر)\n• Die Hose ist rot. (مؤنّث)\n• Das Hemd ist rot. (محايد)\n• Die Schuhe **sind** rot. (جمع)\nلاحظ: تغيّر **الفعل** وحده من ist إلى sind، أمّا rot فثابتة. وهذا مكسبٌ ضخم للمبتدئ: تستطيع وصف كلّ شيء حولك بلا نهايات ولا تصريف.\n\n**الحدّ الذي يقف عنده الدرس:** حين تلتصق الصفة بالاسم مباشرةً (ein **rotes** Hemd) تبدأ نهايات الصفة، وهي بابٌ واسع محلُّه لاحقاً. فما دمتَ في A1 قل **Das Hemd ist rot** لا ein rot Hemd — الأولى سليمة تماماً وتؤدّي المعنى كاملاً.\n\n**استثناءان يجب أن تعرفهما الآن:** **rosa** و**orange** و**lila** لا تأخذ نهايات إطلاقاً حتى قبل الاسم (eine rosa Bluse) لأنّها كلمات دخيلة تنتهي بحرف علة. وهذا يعني أنّك تستعملها بأمان في كلّ موضع.",
      whyAr:
        "لماذا نبدأ بالصفة الخبرية لا النعتية؟ لأنّ الخبرية **مجّانية**: قاعدة واحدة تكفي لوصف كل شيء في العالم، بينما النعتية تحتاج جدولاً من ستّ عشرة نهاية تتقاطع فيها الحالة والجنس ونوع الأداة. وليس من الحكمة أن يدفع المبتدئ هذه الكلفة قبل أن يملك ما يصفه.\n\nولماذا الملابس تحديداً؟ لأنّها ميدان الوصف الأقرب: أنت ترتديها الآن، وتراها على غيرك، وتشتريها كل شهر. وامتحان Goethe A1 يجعل التسوّق موضوعاً صريحاً في Sprechen Teil 2 (طلب معلومة) وفي Hören (حوارات المتجر).\n\nثمّ إنّ الملابس أفضل حقلٍ لتثبيت **الأدوات**. فقائمة أسماء موزّعة على الأجناس الثلاثة، تُستعمل يومياً، وتتكرّر في كل جملة — هذا بالضبط ما يحتاجه العقل ليحوّل der/die/das من قاعدةٍ يستحضرها إلى عادةٍ ينطقها.",
      table: {
        title: "الملابس والألوان",
        columns: ["القطعة", "العربية", "لون", "العربية"],
        rows: [
          { label: "das Hemd", cells: ["القميص", "rot", "أحمر"] },
          { label: "die Hose", cells: ["البنطال", "blau", "أزرق"] },
          { label: "die Jacke", cells: ["السترة", "grün", "أخضر"] },
          { label: "das Kleid", cells: ["الفستان", "gelb", "أصفر"] },
          { label: "der Pullover", cells: ["الكنزة", "schwarz", "أسود"] },
          { label: "die Schuhe", cells: ["الحذاء", "weiß", "أبيض"] },
          { label: "die Socken", cells: ["الجوارب", "braun", "بني"] },
          { label: "die Mütze", cells: ["القبعة", "grau", "رمادي"] },
        ],
      },
      examples: [
        {"de": "Das Hemd ist rot.", "ar": "القميص أحمر."},
        {"de": "Meine Jacke ist blau.", "ar": "سترتي زرقاء."},
        {"de": "Die Schuhe sind schwarz.", "ar": "الحذاء أسود. (جمع ⇐ sind)"},
        {"de": "Das Kleid ist sehr schön.", "ar": "الفستان جميل جداً."},
        {"de": "Der Pullover ist warm.", "ar": "الكنزة دافئة."},
        {"de": "Die Schuhe sind schwarz und die Socken sind weiß.", "ar": "الحذاء أسود والجوارب بيضاء. (الصفتان بلا نهاية)"},
        {"de": "Meine Mütze ist grau, nicht braun.", "ar": "قبّعتي رمادية لا بنّية."},
        {"de": "Ist die Bluse rosa? — Ja, sie ist rosa.", "ar": "هل البلوزة زهرية؟ — نعم، هي زهرية. (rosa لا تتغيّر)"},
      ],
      comparisonWithArabic:
        "**فرق مطمئن وفرق خطر.**\n\nالمطمئن أنّ العربية تفعل الشيء نفسه في الخبر: «القميص أحمر» — لا نغيّر «أحمر» تبعاً لشيء. والألمانية كذلك: Das Hemd ist rot. فالبنية متطابقة تقريباً، إلا في شيء واحد: العربية تحذف الفعل في الجملة الاسمية، والألمانية **لا تحذفه أبداً**. وهذا مصدر الخطأ الأوّل عند العربي: يقول Das Hemd rot لأنّ أذنه لا تفتقد الرابط.\n\nالخطر أنّ العربية تُطابق الصفة الاسمَ في التذكير والتأنيث: «قميص أحمر / سترة حمراء». فيتوقّع العربي أن تُطابق الألمانية أيضاً، ويقول Die Jacke ist rote. والصواب أنّ الخبر الألماني **لا يطابق شيئاً**: Die Jacke ist rot. فما تعوّدتَه في لغتك هو بالضبط ما يجب أن تكفّ عنه هنا.\n\nوفارقٌ ثالث في الجمع: العربية تقول «الأحذية سوداء» بمطابقة، والألمانية تقول Die Schuhe sind schwarz — الفعل وحده جمع.",
      eselsbruecke:
        "**«بعد sein تنام الصفة»** — كل صفة تأتي بعد ist/sind تنام ساكنةً بلا نهاية.\nوللأدوات في هذا الحقل احفظ ثلاثيّة تقريبية: **der** يغطّي الجذع (Pullover, Mantel, Rock) · **die** يغطّي القطع الرقيقة والأطراف (Hose, Jacke, Mütze, Bluse) · **das** قطعتان قصيرتان (Hemd, Kleid). قاعدة مساعدة لا قانون، لكنّها تنجح في أغلب هذا الحقل.\nوللألوان: **schwarz-rot-gold** علم ألمانيا نفسه — ثلاثة ألوان بلا حفظ.",
      commonMistakes: [
        {"wrong": "Das Hemd rot.", "right": "Das Hemd ist rot.", "whyAr": "العربية تحذف الرابط في الجملة الاسمية «القميص أحمر»، فلا تفتقده أذن العربي. والألمانية لا تقبل جملةً بلا فعل مصرَّف إطلاقاً، فوجود ist شرط لا زينة."},
        {"wrong": "Die Schuhe ist neu.", "right": "Die Schuhe sind neu.", "whyAr": "die Schuhe جمعٌ دائم لا مفرد له في الاستعمال العادي، فالفعل جمع: sind. ومصدر الخطأ أنّ المتعلّم يترجم «الحذاء» مفرداً في ذهنه فيصرّف الفعل مفرداً."},
        {"wrong": "Die Jacke ist rote.", "right": "Die Jacke ist rot.", "whyAr": "نقلٌ لعادة المطابقة العربية «سترة حمراء». والخبر الألماني بعد sein لا يطابق الاسم في جنسٍ ولا عدد، فيبقى rot مجرّداً مهما كان الموصوف."},
        {"wrong": "Ich trage rosane Bluse.", "right": "Ich trage eine rosa Bluse.", "whyAr": "rosa وorange وlila كلمات دخيلة تنتهي بحرف علة فلا تقبل نهايات إطلاقاً. وrosane صيغة عامّية يسمعها المتعلّم في الشارع فيظنّها فصيحة."},
      ],
      relatedRuleComparison: {
        title: "الصفة الخبرية أم النعتية؟",
        content: "بعد sein: خبرية ساكنة (Das Hemd ist rot). قبل الاسم: نعتية متغيرة (ein rotes Hemd) — سنتعلمها في B1. في A1 استخدم الخبرية دائماً.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل tragen + السؤال عن الرأي (Wie findest du...?)",
      titleDe: "Das Verb „tragen“ und „Wie findest du...?“",
      explanationAr:
        "بعد أن صرتَ تصف الملابس، تبقى جملتان تحتاجهما كلّ يوم: **ماذا ترتدي؟** و**ما رأيك؟** ولكلٍّ منهما فعلها.\n\n**أوّلاً: tragen — فعل بتغيّر صوتيّ.**\nمعناه «يرتدي» وأيضاً «يحمل»، وهو من الأفعال التي تُبدّل حرف علّة الجذر في صيغتي **du** و**er/sie/es** وحدهما: a ⇐ ä.\nich trag**e** · du tr**ä**gst · er tr**ä**gt · wir tragen · ihr tragt · sie tragen\nوهذه ليست شذوذاً عشوائياً بل عائلة كاملة تسير على النمط نفسه: fahren ⇐ du fährst · schlafen ⇐ du schläfst · laufen ⇐ du läufst. فمن أتقن tragen اليوم فتح باب العائلة كلّها.\nولاحظ أنّ **التغيير محصورٌ في صيغتين فقط**. الجمع كلّه يعود إلى a سالمة: wir tragen, ihr tragt, sie tragen. والخطأ الشائع هو تعميم الـä على الجمع.\n\n**ثانياً: السؤال عن الرأي — Wie findest du …?**\nالألمانية لا تقول «ما رأيك؟» بل تقول حرفياً «**كيف تجد** هذا؟»:\n• Wie findest du meine Jacke? — والجواب: Ich finde sie schön.\nوالبنية ثابتة: **finden + المفعول به + صفة**. أي أنّ finden هنا لا يعني «يعثر على» بل «يرى/يحكم». وتُصرَّف كأيّ فعل عاديّ: ich finde · du find**e**st · er find**e**t (تُدرَج e لتسهيل النطق بعد الدال).\n\n**ثالثاً — وهذه كلمة صغيرة ذات شأن: doch.**\nإذا سُئلتَ سؤالاً **منفيّاً** وأردتَ نفي النفي — أي «بلى» — فلا يجوز أن تقول ja. الألمانية تُخصّص لهذا كلمةً مستقلّة:\n• Gefällt dir das Hemd nicht? — **Doch**, es gefällt mir sehr! (بلى، يعجبني جداً)\n• Trägst du keine Jacke? — **Doch**, ich trage eine.\nأمّا لو وافقتَ على النفي فقُل nein: Gefällt dir das Hemd nicht? — Nein, es gefällt mir nicht.\nفالقاعدة في ثلاث كلمات: **سؤال منفيّ + جواب مثبت = doch**. والعربية تملك نظيرها تماماً وهو «بلى» في مقابل «نعم» — ومن استحضر هذا الفرق العربي أتقن doch في دقيقة.",
      whyAr:
        "لماذا تُبدّل بعض الأفعال حرف علّتها؟ لأسبابٍ صوتية تاريخية: هذه أفعالٌ «قويّة» ورثت من الجرمانية القديمة تنويعاً في الجذر، وبقي أثره في صيغتَي المفرد المخاطَب والغائب. فالتغيير ليس قاعدةً تُشتقّ بل بصمةٌ تُحفَظ مع الفعل — لكنّها بصمة منتظمة تكفيك فيها معرفة العائلة: كل فعلٍ جذرُه a ويُصنَّف قويّاً يفعل هذا.\n\nولماذا نتعلّم doch في درس الملابس؟ لأنّ التسوّق موطنها الطبيعيّ: البائع يسأل Passt es Ihnen nicht؟ وأنت تريد أن تقول «بلى، يناسبني». ولأنّ غيابها يُنتج سوء فهم حقيقيّ لا مجرّد خطأ نحويّ: من يجيب ja على سؤال منفيّ يبدو للألمانيّ كأنّه يؤكّد النفي، فينصرف البائع بالقطعة.\n\nوامتحان Goethe A1 يختبر هذا صراحةً في Hören، حيث تُبنى أسئلة الفهم على حواراتٍ يردّ فيها المتحدّث بـ doch — فمن لا يميّزها يفهم عكس المقصود.",
      table: {
        title: "تصريف tragen",
        columns: ["الضمير", "trage/trägst/trägt", "مثال"],
        rows: [
          { label: "ich", cells: ["trage", "Ich trage ein Hemd."] },
          { label: "du", cells: ["trägst", "Was trägst du?"] },
          { label: "er/sie/es", cells: ["trägt", "Sie trägt ein Kleid."] },
          { label: "wir", cells: ["tragen", "Wir tragen Jacken."] },
          { label: "ihr", cells: ["tragt", "Was tragt ihr?"] },
          { label: "sie/Sie", cells: ["tragen", "Sie tragen Schuhe."] },
        ],
      },
      examples: [
        {"de": "Ich trage heute ein Hemd.", "ar": "أرتدي اليوم قميصاً."},
        {"de": "Wie findest du meine Jacke?", "ar": "ما رأيك في سترتي؟"},
        {"de": "Ich finde das Kleid sehr schön.", "ar": "أجد الفستان جميلاً جداً."},
        {"de": "Was trägst du morgen? — Ich trage einen Mantel.", "ar": "ماذا سترتدي غداً؟ — سأرتدي معطفاً. (du ⇐ trägst)"},
        {"de": "Wir tragen alle Jeans.", "ar": "كلّنا نرتدي جينزاً. (جمع ⇐ الجذر يعود a)"},
        {"de": "Wie findest du diese Schuhe? — Ich finde sie zu teuer.", "ar": "كيف تجد هذا الحذاء؟ — أجده غالياً جداً."},
        {"de": "Gefällt dir die Mütze nicht? — Doch, sie ist super!", "ar": "ألا تعجبك القبّعة؟ — بلى، إنّها رائعة! (سؤال منفيّ ⇐ doch)"},
        {"de": "Trägst du keine Brille? — Doch, ich trage eine Brille.", "ar": "ألا ترتدي نظّارة؟ — بلى، أرتدي نظّارة."},
      ],
      comparisonWithArabic:
        "**١. «ما رأيك» مقابل «كيف تجد».** العربية تسأل عن الرأي بالاسم: «ما رأيك في السترة؟» والألمانية تسأل بالفعل: Wie findest du die Jacke؟ فمن يترجم حرفياً يقول Was ist deine Meinung — وهي مفهومة لكنّها ثقيلة ونادرة في الكلام اليوميّ.\n\n**٢. العربية لا تُبدّل حرف الجذر مع المخاطب.** نقول «أحمل / تحمل / يحمل» بجذر واحد ثابت. فحين تجد الألمانية تقول trage ثمّ trägst يبدو الأمر كأنّه فعلان مختلفان، ويميل المتعلّم إلى تسوية الجذر فيقول **du tragst**. والعلاج أن تحفظ الصيغتين المتغيّرتين وحدهما — فهما فقط الاستثناء.\n\n**٣. وأمّا doch فالعربية أسعد حظّاً من الإنجليزية هنا.** الإنجليزي لا يملك كلمةً لـ«بلى» فيضطرّ إلى Yes, it does، أمّا نحن فنملك «بلى» مقابل «نعم» بالضبط كما تملك الألمانية doch مقابل ja. فالخطأ عند العربي ليس في غياب المفهوم بل في نسيان أنّ لغته تملكه: انقل «بلى» إلى doch مباشرةً وستصيب في كل مرّة.",
      eselsbruecke:
        "**«الاثنان يتأمّلان»** — في التغيير الصوتيّ، صيغتان فقط تتغيّران: **du** و**er**. تخيّلهما وجهين متقابلين فوقهما نقطتا الـä. أمّا الجمع فيعود سالماً.\nولـ doch: **«سؤال فيه nicht أو kein ⇐ جوابك بلى ⇐ doch»**. اربطها بالعربية مباشرة: بلى = doch، نعم = ja، لا = nein.",
      commonMistakes: [
        {"wrong": "Du tragst ein Hemd.", "right": "Du trägst ein Hemd.", "whyAr": "tragen من أفعال التغيّر الصوتيّ a⇐ä، والتغيير واجبٌ في du وer وحدهما. ومصدر الخطأ أنّ المتعلّم يقيس على الجذر الذي سمعه في ich trage."},
        {"wrong": "Wir trägen Jacken.", "right": "Wir tragen Jacken.", "whyAr": "تعميمٌ عكسيّ: بعد أن يتعلّم المتعلّم الـä يُسرف فيها فيضعها في الجمع. والجمع يعود إلى الجذر السالم دائماً: wir tragen, ihr tragt, sie tragen."},
        {"wrong": "Wie finden du das Kleid?", "right": "Wie findest du das Kleid?", "whyAr": "الفعل يُصرَّف مع الفاعل du فيصير findest بإدراج e قبل st لتسهيل النطق بعد الدال. وصيغة finden للجمع والمصدر لا للمخاطب المفرد."},
        {"wrong": "Gefällt dir das Hemd nicht? — Ja, es gefällt mir.", "right": "Gefällt dir das Hemd nicht? — Doch, es gefällt mir.", "whyAr": "السؤال منفيّ والجواب مثبت ⇒ doch لا ja. وقول ja هنا يُفهم منه تأكيد النفي، فيظنّ المخاطَب أنّ القميص لا يعجبك — سوء فهم لا مجرّد خطأ نحويّ."},
      ],
      relatedRuleComparison: {
        title: "tragen أم anziehen؟",
        content: "tragen = يرتدي (حالة دائمة: Ich trage eine Brille = أرتدي نظارة). anziehen = يرتدي (فعل لحظي: Ich ziehe eine Jacke an = أرتدي سترة الآن). anziehen فعل منفصل!",
      },
    },
    {
      id: "t3",
      titleAr: "أيّ قميص؟ هذا القميص — dieser وwelcher",
      titleDe: "Welcher Pullover? Dieser Pullover!",
      explanationAr:
        "في متجر الملابس سؤالان لا غنى عنهما: **welch-** للسؤال «أيّ؟» و**dies-** للإشارة «هذا/هذه». والخبر السارّ أنّهما لا يحتاجان حفظاً جديداً إطلاقاً.\n\n**القاعدة كلّها في سطر: كلاهما يأخذ نهايات أداة التعريف der/die/das نفسها.**\nder Pullover ⇐ **welcher** Pullover? ⇐ **dieser** Pullover\ndie Hose ⇐ **welche** Hose? ⇐ **diese** Hose\ndas Hemd ⇐ **welches** Hemd? ⇐ **dieses** Hemd\ndie Schuhe (جمع) ⇐ **welche** Schuhe? ⇐ **diese** Schuhe\nانظر إلى آخر حرف: d-**er** · welch-**er** · dies-**er**. النهاية واحدة، والأداة قالبٌ تصبّ فيه الكلمتان. فمن يعرف جنس الكلمة يعرف الصيغتين فوراً بلا جدول جديد.\n\n**الخطوة الثانية: الحالة تُغيّر النهاية كما يُغيّرها الجنس.**\nما سبق كان في حالة الرفع (Nominativ). فإذا صار الملبوس **مفعولاً به** — بعد nehmen أو möchten أو kaufen — تغيّرت نهاية المذكّر وحده من -er إلى -en:\n• Der Mantel ist schön. ⇐ Ich nehme **diesen** Mantel.\n• **Welchen** Mantel möchten Sie?\nأمّا المؤنّث والمحايد والجمع فلا تتغيّر نهاياتها بين الرفع والنصب: diese Hose يبقى diese Hose، وdieses Hemd يبقى dieses Hemd. وهذه هي القاعدة الذهبية التي رأيتَها في درس الأكوزاتيف: **المذكّر وحده يتحرّك**.\n\n**الخطوة الثالثة: dies- تستغني عن الاسم.**\nإذا كان الملبوس مفهوماً من السياق فلك أن تُشير دون أن تُسمّي: Welches Hemd möchten Sie? — **Dieses**, bitte. وهذه الجملة القصيرة هي أكثر ما تقوله في المتجر فعلاً.\n\n**فرقٌ عمليّ بين dies- وder:** كلاهما يعني «هذا»، لكنّ dies- تُميّز واحداً من عدّة: بين ثلاثة قمصان معروضة تقول dieses Hemd لتستبعد الآخرَين. أمّا das Hemd فتحيل على قميصٍ معروف سلفاً بلا مقارنة. ولهذا كانت dies- لغةَ الرفوف بامتياز.",
      whyAr:
        "لماذا هذه الكتلة في درس الملابس تحديداً؟ لأنّها اللغة الفعلية للتسوّق: البائع يسأل «Welche Größe?» وأنت تشير «Dieses Hemd, bitte». ولأنّها كذلك أوّل مكسب عملي من حفظ الأدوات: النهايات التي تعبتَ في حفظها مع der/die/das تُثمر الآن في كلمتين جديدتين بلا جهد إضافي — وستُثمر لاحقاً في jeder وmancher أيضاً.",
      table: {
        title: "نهاية واحدة تتكرّر",
        columns: ["الأداة", "welch- (أيّ؟)", "dies- (هذا)"],
        rows: [
          { label: "der Pullover", cells: ["welcher Pullover?", "dieser Pullover"] },
          { label: "die Hose", cells: ["welche Hose?", "diese Hose"] },
          { label: "das Hemd", cells: ["welches Hemd?", "dieses Hemd"] },
          { label: "die Schuhe (ج)", cells: ["welche Schuhe?", "diese Schuhe"] },
          { label: "مع Akkusativ المذكّر", cells: ["welchen Mantel?", "diesen Mantel"] },
        ],
      },
      examples: [
        {"de": "Welcher Pullover gefällt dir?", "ar": "أيّ كنزة تعجبك؟"},
        {"de": "Dieses Hemd ist zu klein.", "ar": "هذا القميص صغير جداً."},
        {"de": "Welche Größe haben Sie?", "ar": "أيّ مقاس تلبس؟"},
        {"de": "Ich nehme diesen Mantel.", "ar": "آخذ هذا المعطف. (مفعول به مذكّر ⇐ -en)"},
        {"de": "Diese Schuhe sind sehr bequem.", "ar": "هذا الحذاء مريح جداً."},
        {"de": "Welches Hemd möchten Sie? — Dieses, bitte.", "ar": "أيّ قميص تريد؟ — هذا، من فضلك. (بلا اسم)"},
        {"de": "Welche Jacke ist billiger, diese oder diese?", "ar": "أيّ سترة أرخص، هذه أم هذه؟"},
      ],
      comparisonWithArabic:
        "العربية تقول «هذا» و«هذه» فقط — صيغتان اثنتان تكفيان. والألمانية تُلزمك بأربع نهايات تتبع جنس الكلمة، فلا تستطيع أن تُشير إلى شيء دون أن تعرف جنسه أوّلاً. وهذا فارق جوهري: في العربية تُشير ثم تُسمّي، وفي الألمانية تُسمّي في ذهنك ثم تُشير. أمّا «أيّ» العربية فثابتة لا تتغيّر أبداً: «أيّ قميص، أيّ حقيبة» — بينما welcher تتلوّن مع كل كلمة.",
      eselsbruecke:
        "احذف **d** من der وضع مكانها **dies** ← dies+er. واحذفها وضع **welch** ← welch+er. الأداة هي القالب، والكلمتان تصبّان فيه: d-er · dies-er · welch-er.",
      commonMistakes: [
        {"wrong": "Welche Pullover möchten Sie?", "right": "Welchen Pullover möchten Sie?", "whyAr": "der Pullover مذكّر، وبعد möchten يأتي المفعول به فتصير النهاية -en: welchen. النهاية تتبع الحالة كما تتبع الجنس، والمذكّر وحده هو الذي يتحرّك بينهما."},
        {"wrong": "Dieses Hose ist schön.", "right": "Diese Hose ist schön.", "whyAr": "die Hose مؤنّثة فتأخذ -e لا -es. والخطأ شائع لأنّ المتعلّم يسمع «هذا» بالعربية فيختار أوّل صيغة حفظها، والعربية لا تُلزمه بمعرفة جنس الكلمة قبل الإشارة."},
        {"wrong": "Ich nehme dieser Mantel.", "right": "Ich nehme diesen Mantel.", "whyAr": "nehmen فعل متعدٍّ ينصب مفعوله، والمذكّر في النصب ينتهي بـ-en لا -er. ومصدر الخطأ أنّ المتعلّم حفظ dieser Mantel في الرفع ثمّ نقلها كما هي."},
        {"wrong": "Welche ist dein Größe?", "right": "Welche Größe haben Sie?", "whyAr": "صيغة إنجليزية مترجمة. الألمانية تسأل عن المقاس بالفعل haben لا بـ sein، وwelche تلتصق بالاسم Größe لا تنفصل عنه."},
      ],
      relatedRuleComparison: {
        title: "عائلة تكبر لاحقاً",
        content:
          "هذه النهايات نفسها ستعود مع jeder (كل) وmancher (بعض) وsolcher (مثل هذا). ومن أتقنها اليوم في كلمتين، أتقن غداً خمساً بلا حفظ جديد. وفي B1 ستراها مرّةً أخرى في نهايات الصفة — فهي استثمار طويل الأجل.",
      },
    },
    {
      id: "t4",
      titleAr: "يعجبني هذا! — أفعال الدّاتيف gefallen وpassen وstehen",
      titleDe: "Das gefällt mir: Dativ-Verben beim Einkaufen",
      explanationAr:
        "حتى الآن كنتَ تصف الملابس من الخارج: Das Hemd ist rot. وتبقى الجملة التي تحتاجها فعلاً في المتجر: **أن تقول رأيك**. والألمانية تفعل ذلك بثلاثة أفعال تسير كلُّها على نمطٍ واحد غريبٍ على العربي — لكنّه نمطٌ واحد لا ثلاثة.\n\n**النمط: الشيء هو الفاعل، وأنت المستقبِل.**\nقل بالعربية: «أنا أحبّ القميص» — أنت الفاعل والقميص مفعول. أمّا الألمانية فتقلب المشهد: **القميص** هو الذي يفعل، وأنت الذي يقع عليه الأثر:\n• Das Hemd gefällt **mir**. — حرفيّاً: «القميص يُرضي لي» أي يعجبني.\n• Die Hose passt **mir**. — «البنطال يناسب لي» أي مقاسه صحيح.\n• Das Kleid steht **dir**. — «الفستان يقف لك» أي يليق بك.\nوهذه ليست بلاغةً بل بنية: الشخص يأتي في حالة **الدّاتيف** (mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen).\n\n**الخطوة الأولى: احفظ ضمائر الدّاتيف الثلاثة الأشيع.**\nich ⇐ **mir** (لي) · du ⇐ **dir** (لك) · Sie ⇐ **Ihnen** (لحضرتك). وهذه الثلاثة تكفيك في المتجر كلِّه.\n\n**الخطوة الثانية: الفعل يتبع الشيء لا الشخص.** وهذا موضع الخطأ الأكثر شيوعاً. الفاعل هو الملبوس، فإن كان مفرداً قلنا gefällt وإن كان جمعاً قلنا gefallen:\n• Der Pullover gefällt mir. (مفرد ⇐ gefällt)\n• Die Schuhe gefall**en** mir. (جمع ⇐ gefallen)\nلاحظ أنّ mir لم تتغيّر إطلاقاً — المتغيّر هو الفعل، تبعاً للملبوس.\n\n**الخطوة الثالثة: الفرق بين الثلاثة دقيق ولا يجوز الخلط.**\ngefallen = يعجب **الذوق** (شكله جميل) · passen = يناسب **المقاس** (يدخل عليك) · stehen = يليق **بك أنت** (لونه مع بشرتك). فقد يعجبك قميصٌ ولا يناسب مقاسك: Das Hemd gefällt mir, aber es passt mir nicht.\n\n**الحالة الشاذّة النافعة: التقديم.** كثيراً ما يتقدّم الدّاتيف على الفاعل لأنّ المتكلّم يريد إبراز صاحب الرأي: **Mir** gefällt der blaue Pullover. الجملة سليمة تماماً، والفعل ما زال يتبع der Pullover لا mir. وهذا يفسّر لك عبارةً ستسمعها كثيراً: Wie gefällt **Ihnen** das? — «كيف يعجبك هذا؟»",
      whyAr:
        "لماذا تقلب الألمانية المشهد هكذا؟ لأنّها تميّز بين **الفعل الإراديّ** و**التأثّر**. حين أقول Ich mag das Hemd فأنا أُعلن موقفاً أختاره؛ وحين أقول Das Hemd gefällt mir فأنا أصف أثراً وقع عليّ دون اختياري — الجمال بادر إليّ. ولهذا صار الشيء فاعلاً وصرتُ أنا مستقبِلاً في الدّاتيف.\n\nولماذا في درس الملابس تحديداً؟ لأنّ هذه الأفعال الثلاثة هي **كامل لغة المتجر**: البائع يسأل Wie gefällt Ihnen das؟ وأنت تجيب أو تعتذر بـ Es passt mir nicht. ولأنّ امتحان Goethe A1 يخصّص لهذا مكاناً صريحاً في Sprechen Teil 3 (طلب وردّ) وفي Hören (حوارات التسوّق).\n\nوهناك مكسبٌ أبعد: هذا أوّل لقاءٍ لك بحالة الدّاتيف عبر **فعلٍ** لا عبر حرف جرّ. وستجدها بعدُ في helfen وdanken وgehören وschmecken — كلُّها على النمط نفسه. فما تتعلّمه هنا ليس ثلاثة أفعال بل باباً كاملاً.",
      table: {
        title: "من يفعل ومن يتأثّر",
        columns: ["المعنى", "الجملة الألمانية", "الفاعل (Nominativ)", "المستقبِل (Dativ)"],
        rows: [
          { label: "يعجبني", cells: ["Das Hemd gefällt mir.", "das Hemd", "mir"] },
          { label: "يعجبني (جمع)", cells: ["Die Schuhe gefallen mir.", "die Schuhe", "mir"] },
          { label: "يناسبك", cells: ["Die Hose passt dir.", "die Hose", "dir"] },
          { label: "لا يناسبني", cells: ["Der Mantel passt mir nicht.", "der Mantel", "mir"] },
          { label: "يليق بك", cells: ["Das Kleid steht dir gut.", "das Kleid", "dir"] },
          { label: "سؤال البائع", cells: ["Wie gefällt Ihnen das?", "das", "Ihnen"] },
          { label: "بتقديم الدّاتيف", cells: ["Mir gefällt der Pullover.", "der Pullover", "mir"] },
        ],
      },
      examples: [
        { de: "Das blaue Hemd gefällt mir sehr.", ar: "القميص الأزرق يعجبني كثيراً. (مفرد ⇐ gefällt)" },
        { de: "Die roten Schuhe gefallen mir nicht.", ar: "الحذاء الأحمر لا يعجبني. (جمع ⇐ gefallen)" },
        { de: "Die Hose passt mir nicht. Haben Sie Größe 42?", ar: "البنطال لا يناسبني. هل عندكم مقاس 42؟" },
        { de: "Das Kleid steht dir wirklich gut!", ar: "الفستان يليق بك حقّاً!" },
        { de: "Wie gefällt Ihnen dieser Mantel?", ar: "كيف يعجبك هذا المعطف؟ (Ihnen للمخاطبة المهذّبة)" },
        { de: "Mir gefällt die Jacke, aber sie ist zu teuer.", ar: "السترة تعجبني، لكنّها غالية جداً. (تقديم mir لإبراز الرأي)" },
        { de: "Das Hemd gefällt mir, aber es passt mir nicht.", ar: "القميص يعجبني لكنّه لا يناسب مقاسي. (الفرق بين الفعلين)" },
      ],
      comparisonWithArabic:
        "ثلاثة فروق تُنتج ثلاثة أخطاء متوقّعة:\n\n**١. العربية تجعلك فاعلاً، والألمانية تجعلك مستقبِلاً.** نقول «أنا يعجبني القميص» فنبدأ بأنفسنا، فيندفع المتعلّم إلى **Ich gefalle das Hemd** — وهي جملة سليمة نحواً وكارثية معنىً: تعني «أنا أُعجِب القميصَ»! الصواب أن يبدأ الملبوس: Das Hemd gefällt mir.\n\n**٢. العربية لا تصرّف الفعل مع المعجَب به.** نقول «يعجبني القميص» و«تعجبني الأحذية» فيتغيّر الفعل عندنا أيضاً، لكنّ المتعلّم يحفظ gefällt mir قالباً جامداً فيقول **Die Schuhe gefällt mir**. القاعدة: الفعل يطابق الملبوس دائماً.\n\n**٣. العربية تخلط ما تفصله الألمانية.** «يعجبني» عندنا تصلح للذوق وللمقاس معاً، فنقول «هذا القميص يعجبني» ونعني أحياناً أنّه على مقاسنا. والألمانية تفصل بحدّة: gefallen للذوق وpassen للمقاس وstehen للّياقة. وقول Das Hemd gefällt mir للبائع وأنت تقصد المقاس يوقعه في لبسٍ حقيقيّ.",
      eselsbruecke:
        "**«الشيء يَعجَب، وأنا أتلقّى»** — ابدأ الجملة بالملبوس لا بنفسك، وضع نفسك في الآخر: Das Hemd … mir.\nوللتفريق بين الثلاثة احفظ سلسلة المتجر: **العين ثمّ الجسم ثمّ المرآة** — gefallen للعين (شكله)، passen للجسم (مقاسه)، stehen للمرآة (يليق بك).\nوللفعل: **«اسأل الملبوس كم عددُه»** — واحد ⇐ gefällt، أكثر ⇐ gefallen.",
      commonMistakes: [
        {
          wrong: "Ich gefalle das Hemd.",
          right: "Das Hemd gefällt mir.",
          whyAr:
            "نقلٌ حرفيّ لبنية «أنا يعجبني». والجملة الخاطئة تعني عكس المقصود تماماً: «أنا أُعجِب القميصَ» — أي أنّ القميص هو المفتون بك. ابدأ دائماً بالملبوس واجعل نفسك في الدّاتيف.",
        },
        {
          wrong: "Die Schuhe gefällt mir.",
          right: "Die Schuhe gefallen mir.",
          whyAr:
            "الفاعل هو die Schuhe وهو جمع، فالفعل جمع: gefallen. مصدر الخطأ أنّ المتعلّم يحفظ «gefällt mir» وحدةً جامدة ثمّ يبدّل الملبوس وينسى تعديل الفعل — وضمير mir لا علاقة له بالتصريف.",
        },
        {
          wrong: "Das Hemd gefällt mich.",
          right: "Das Hemd gefällt mir.",
          whyAr:
            "mich نصبٌ وmir جرّ. وgefallen من أفعال الدّاتيف فلا تنصب أبداً. والخلط طبيعيّ لأنّ العربية لا تميّز بين «يعجبني» بالنصب والجرّ، لكنّ الألمانية تسمع الفرق فوراً.",
        },
        {
          wrong: "Das Hemd gefällt mir, Größe 44 bitte.",
          right: "Das Hemd passt mir nicht, haben Sie Größe 44?",
          whyAr:
            "خلطٌ بين الذوق والمقاس. gefallen حكمٌ جماليّ لا علاقة له بالقياس، فإن أردت مقاساً آخر فالفعل passen. قول gefallen هنا يُفهم منه أنّك راضٍ عن القميص فلمَ تطلب غيره.",
        },
        {
          wrong: "Wie gefällt Sie das?",
          right: "Wie gefällt Ihnen das?",
          whyAr:
            "Sie في الرفع (حضرتك فاعلاً) وIhnen في الجرّ. وبما أنّ الفاعل هنا هو das، فالمخاطَب مستقبِل ⇒ Ihnen. والخطأ شائع لأنّ الصيغتين تُكتبان بحرف كبير.",
        },
      ],
      relatedRuleComparison: {
        title: "gefallen أم mögen أم finden؟",
        content:
          "الثلاثة تُترجَم «يعجبني» وبينها فروق حقيقية. **gefallen** انطباعٌ بصريّ لحظيّ عن شيء تراه الآن، والشيء فيه فاعل: Der Pullover gefällt mir. **mögen** ميلٌ ثابت ومستقرّ، وأنت فيه الفاعل والشيء منصوب: Ich mag Pullover — أي أحبّ الكنزات عموماً. **finden** حكمٌ تُصدره بصفة، وأنت الفاعل: Ich finde den Pullover schön. والفرق العمليّ في المتجر: أمام قميصٍ بعينه قل gefällt mir؛ وعن ذوقك عموماً قل ich mag؛ وحين تُسأل رأيك صراحةً قل ich finde … schön. ولاحظ أنّ gefallen وحدها هي التي تضعك في الدّاتيف، والفعلان الآخران يجعلانك فاعلاً — وهذا ما يفسّر أنّ العربي يميل إليهما هرباً من القلب.",
      },
    },
  ],

  reading: {
    "id": "r1",
    "titleDe": "Ein Nachmittag im Kaufhaus",
    "titleAr": "عصرٌ في المتجر الكبير",
    "textType": "erzaehlung",
    "paragraphs": [
      "Es ist Samstagnachmittag. Amira und ihre Freundin Lena gehen zusammen ins Kaufhaus. Amira sucht eine Jacke für den Herbst. Lena braucht nichts, aber sie kommt gern mit. Das Kaufhaus ist groß und voll. Im ersten Stock ist die Damenabteilung.",
      "Amira sieht eine blaue Jacke. Die Jacke ist schön, aber sie ist teuer: 89 Euro. „Wie findest du diese Jacke?“, fragt Amira. „Die Farbe gefällt mir sehr“, sagt Lena. „Blau steht dir gut.“",
      "Amira probiert die Jacke an. Leider ist sie zu klein. „Die Jacke passt mir nicht“, sagt Amira traurig. Eine Verkäuferin kommt und fragt: „Welche Größe haben Sie?“ — „Größe 40“, antwortet Amira. Die Verkäuferin bringt die gleiche Jacke in Größe 40.",
      "Jetzt passt die Jacke perfekt. Aber der Preis ist immer noch hoch. „Gefällt dir die Jacke nicht?“, fragt Lena. „Doch, sie gefällt mir sehr“, sagt Amira. „Aber 89 Euro sind zu viel für mich.“",
      "Da sieht Lena einen grauen Mantel. Der Mantel kostet nur 45 Euro. „Dieser Mantel ist warm und nicht teuer“, sagt sie. Amira probiert den Mantel an. Er passt gut und er gefällt ihr auch. Die Farbe ist grau, nicht blau, aber grau passt zu allem.",
      "Amira nimmt den Mantel. An der Kasse bezahlt sie fünfzig Euro und bekommt fünf Euro zurück. Draußen ist es kalt. Amira trägt ihren neuen Mantel und lacht: „Der Mantel gefällt mir wirklich. Und ich habe noch Geld für einen Kaffee!“"
    ],
    "paragraphsAr": [
      "إنّه بعد ظهر السبت. تذهب أميرة وصديقتها لينا معاً إلى المتجر الكبير. أميرة تبحث عن سترة للخريف. لينا لا تحتاج شيئاً، لكنّها تأتي معها بسرور. المتجر كبير ومزدحم. في الطابق الأوّل قسم النساء.",
      "ترى أميرة سترةً زرقاء. السترة جميلة لكنّها غالية: 89 يورو. «كيف تجدين هذه السترة؟» تسأل أميرة. «اللون يعجبني كثيراً» تقول لينا. «الأزرق يليق بك.»",
      "تُجرّب أميرة السترة. للأسف هي صغيرة جداً. «السترة لا تناسب مقاسي» تقول أميرة حزينة. تأتي بائعة وتسأل: «أيّ مقاس تلبسين؟» — «مقاس 40» تجيب أميرة. تُحضِر البائعة السترة نفسها بمقاس 40.",
      "الآن تناسبها السترة تماماً. لكنّ السعر ما يزال مرتفعاً. «ألا تعجبك السترة؟» تسأل لينا. «بلى، تعجبني كثيراً» تقول أميرة. «لكنّ 89 يورو كثيرة عليّ.»",
      "عندئذٍ ترى لينا معطفاً رمادياً. المعطف يكلّف 45 يورو فقط. «هذا المعطف دافئ وغير غالٍ» تقول. تُجرّب أميرة المعطف. يناسبها ويعجبها أيضاً. اللون رماديّ لا أزرق، لكنّ الرماديّ يناسب كلّ شيء.",
      "تأخذ أميرة المعطف. عند الصندوق تدفع خمسين يورو وتستلم خمسة يوروهات. في الخارج الجوّ بارد. ترتدي أميرة معطفها الجديد وتضحك: «المعطف يعجبني حقاً. وما زال معي مالٌ لفنجان قهوة!»"
    ],
    "glossary": [
      {
        "de": "das Kaufhaus",
        "ar": "المتجر الكبير (متعدّد الأقسام)",
        "noteAr": "مركّب من kaufen (يشتري) + Haus (بيت)."
      },
      {
        "de": "die Damenabteilung",
        "ar": "قسم النساء",
        "noteAr": "Damen (سيّدات) + Abteilung (قسم) — كلمة تراها على اللافتات."
      },
      {
        "de": "probiert … an (anprobieren)",
        "ar": "يُجرّب (ملابس)",
        "noteAr": "فعل منفصل: sie probiert die Jacke an."
      },
      {
        "de": "die Verkäuferin",
        "ar": "البائعة",
        "noteAr": "المذكّر der Verkäufer؛ اللاحقة -in تصنع المؤنّث."
      },
      {
        "de": "die Größe",
        "ar": "المقاس",
        "noteAr": "Welche Größe haben Sie? سؤال البائع الثابت."
      },
      {
        "de": "passt (passen)",
        "ar": "يناسب (مقاساً)",
        "noteAr": "مع الدّاتيف: Die Jacke passt mir."
      },
      {
        "de": "gefällt (gefallen)",
        "ar": "يعجب",
        "noteAr": "مع الدّاتيف: Der Mantel gefällt mir."
      },
      {
        "de": "steht (stehen)",
        "ar": "يليق بـ",
        "noteAr": "Blau steht dir gut — ليس معناه هنا «يقف»."
      },
      {
        "de": "der Preis",
        "ar": "السعر",
        "noteAr": "Der Preis ist hoch — نقول عن السعر hoch وعن السلعة teuer."
      },
      {
        "de": "die Kasse",
        "ar": "الصندوق (مكان الدفع)",
        "noteAr": "an der Kasse bezahlen — يدفع عند الصندوق."
      },
      {
        "de": "bekommt … zurück (zurückbekommen)",
        "ar": "يستلم الباقي",
        "noteAr": "فعل منفصل: sie bekommt fünf Euro zurück."
      },
      {
        "de": "doch",
        "ar": "بلى",
        "noteAr": "جواب مثبت على سؤال منفيّ — لا يجوز ja مكانها."
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "instructionAr": "لماذا لم تشترِ أميرة السترة الزرقاء؟",
        "questionDe": "Warum kauft Amira die blaue Jacke nicht?",
        "options": [
          "Sie ist zu teuer.",
          "Sie gefällt ihr nicht.",
          "Die Farbe ist hässlich.",
          "Es gibt keine Größe 40."
        ],
        "correctIndex": 0,
        "explanation": "السترة أعجبتها وناسبت مقاسها بعد التبديل، لكنّ 89 يورو كثيرة عليها: Aber 89 Euro sind zu viel für mich.",
        "errorType": "vocabulary",
        "paragraph": 4
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "instructionAr": "ما مشكلة السترة أوّل مرّة؟",
        "questionDe": "Was ist das Problem mit der ersten Jacke?",
        "options": [
          "Sie ist zu klein.",
          "Sie ist zu groß.",
          "Sie ist schmutzig.",
          "Sie ist grau."
        ],
        "correctIndex": 0,
        "explanation": "Leider ist sie zu klein ثمّ Die Jacke passt mir nicht — مشكلة مقاس لا ذوق.",
        "errorType": "vocabulary",
        "paragraph": 3
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "instructionAr": "لماذا أجابت أميرة بـ Doch؟",
        "questionDe": "Warum antwortet Amira mit Doch?",
        "options": [
          "Weil die Frage negativ war und die Jacke ihr gefällt.",
          "Weil sie die Jacke nicht mag.",
          "Weil sie kein Geld hat.",
          "Weil Lena die Jacke kauft."
        ],
        "correctIndex": 0,
        "explanation": "السؤال كان منفيّاً Gefällt dir die Jacke nicht؟ والجواب مثبت ⇒ doch لا ja.",
        "errorType": "grammar",
        "paragraph": 4
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "instructionAr": "كم استلمت أميرة عند الصندوق؟",
        "questionDe": "Wie viel Geld bekommt Amira an der Kasse zurück?",
        "options": [
          "Fünf Euro",
          "Fünfzig Euro",
          "Vierzig Euro",
          "Nichts"
        ],
        "correctIndex": 0,
        "explanation": "bekommt fünf Euro zurück — دفعت خمسين وثمن المعطف 45.",
        "errorType": "vocabulary",
        "paragraph": 6
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "instructionAr": "أيّ فعل استعملته أميرة للحديث عن المقاس؟",
        "questionDe": "Welches Verb benutzt Amira für die Größe?",
        "options": [
          "passen",
          "gefallen",
          "stehen",
          "tragen"
        ],
        "correctIndex": 0,
        "explanation": "Die Jacke passt mir nicht — passen للمقاس، وgefallen للذوق، وstehen للّياقة.",
        "errorType": "vocabulary",
        "paragraph": 3
      }
    ],
    "redemittel": [
      {
        "de": "Wie findest du …? / Wie gefällt Ihnen …?",
        "ar": "ما رأيك في …؟ / كيف يعجبك …؟"
      },
      {
        "de": "Das gefällt mir (nicht).",
        "ar": "هذا يعجبني / لا يعجبني."
      },
      {
        "de": "Es passt mir nicht. Haben Sie Größe …?",
        "ar": "لا يناسب مقاسي. هل عندكم مقاس …؟"
      },
      {
        "de": "Welche Größe haben Sie?",
        "ar": "أيّ مقاس تلبس؟ (سؤال البائع)"
      },
      {
        "de": "Das ist mir zu teuer.",
        "ar": "هذا غالٍ عليّ."
      },
      {
        "de": "Ich nehme diesen Mantel.",
        "ar": "آخذ هذا المعطف."
      },
      {
        "de": "Kann ich das anprobieren?",
        "ar": "هل يمكنني تجريب هذا؟"
      },
      {
        "de": "Doch, … (auf eine negative Frage)",
        "ar": "بلى، … (جواباً على سؤال منفيّ)"
      }
    ],
    "discussionAr": "لو كنتَ مكان أميرة: أتشتري السترة الزرقاء بـ89 يورو أم المعطف الرماديّ بـ45؟ صُغ جوابك بجملتين، تستعمل في الأولى gefallen وفي الثانية passen أو teuer."
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "في متجر الملابس",
        lines: [
          { speaker: "Verkäuferin", de: "Guten Tag! Kann ich helfen?", ar: "نهارك سعيد! هل أساعدك؟" },
          { speaker: "Mona", de: "Ja, ich suche eine Jacke.", ar: "نعم، أبحث عن سترة." },
          { speaker: "Verkäuferin", de: "Welche Farbe möchten Sie?", ar: "أي لون تريدين؟" },
          { speaker: "Mona", de: "Ich möchte eine blaue Jacke.", ar: "أريد سترة زرقاء." },
          { speaker: "Verkäuferin", de: "Hier ist eine blaue Jacke. Wie finden Sie sie?", ar: "هاهي سترة زرقاء. ما رأيك بها؟" },
          { speaker: "Mona", de: "Die finde ich sehr schön! Was kostet sie?", ar: "أجدها جميلة جداً! بكم؟" },
          { speaker: "Verkäuferin", de: "Neununddreißig Euro.", ar: "تسعة وثلاثون يورو." },
        ],
      },
      {
        id: "l2",
        title: "وصف ما يرتديه الأصدقاء",
        lines: [
          { speaker: "Karim", de: "Schau mal! Ich habe ein neues Hemd.", ar: "انظر! لدي قميص جديد." },
          { speaker: "Anna", de: "Oh, sehr schön! Es ist rot, oder?", ar: "أوه، جميل جداً! إنه أحمر، صحيح؟" },
          { speaker: "Karim", de: "Ja, rot ist meine Lieblingsfarbe.", ar: "نعم، الأحمر لوني المفضل." },
          { speaker: "Anna", de: "Und ich trage heute ein blaues Kleid.", ar: "وأنا أرتدي اليوم فستاناً أزرق." },
          { speaker: "Karim", de: "Das Kleid finde ich sehr elegant!", ar: "أجد الفستان أنيقاً جداً!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was sucht Mona?",
        questionAr: "ماذا تبحث منى؟",
        options: ["eine blaue Jacke", "ein rotes Hemd", "ein blaues Kleid", "schwarze Schuhe"],
        correctIndex: 0,
        explanation: "قالت: Ich möchte eine blaue Jacke — سترة زرقاء.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet die Jacke?",
        questionAr: "بكم السترة؟",
        options: ["39 Euro", "30 Euro", "33 Euro", "90 Euro"],
        correctIndex: 0,
        explanation: "قالت البائعة: Neununddreißig Euro = 39.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was trägt Anna?",
        questionAr: "ماذا ترتدي آنا؟",
        options: ["ein blaues Kleid", "ein rotes Hemd", "eine blaue Jacke", "eine Mütze"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich trage heute ein blaues Kleid.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الألوان: ei، sch، وau",
    items: [
      { de: "weiß", ar: "أبيض", note: "ei = آي + ß = سّ: ڤايس" },
      { de: "blau", ar: "أزرق", note: "au = آو: بلاو" },
      { de: "grün", ar: "أخضر", note: "ü: غرين (شفتان مقربتان)" },
      { de: "gelb", ar: "أصفر", note: "g = غ + l: غيلب" },
      { de: "schwarz", ar: "أسود", note: "sch = ش: شڤارتس" },
      { de: "die Schuhe", ar: "الحذاء", note: "sch + u + h: شووه" },
    ],
    tip: "الألوان الأربعة التي تنتهي بصوت مختلف عن المتوقع: weiß (آي)، blau (آو)، grün (ü)، schwarz (ش). ركّز عليها.",
    shadowing: [
      { de: "Das Hemd ist rot.", ar: "القميص أحمر.", tip: "rot = روت (o قصير)" },
      { de: "Meine Jacke ist blau.", ar: "سترتي زرقاء.", tip: "blau = بلاو (au = آو)" },
      { de: "Wie findest du das Kleid?", ar: "ما رأيك في الفستان؟", tip: "Kleid = كلايت (ei = آي)" },
      { de: "Die Schuhe sind schwarz.", ar: "الحذاء أسود.", tip: "schwarz = شڤارتس (sch + w = ڤ)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "صف ما ترتديه اليوم:",
      prompt: "Was trägst du heute? (اكتب جملة كاملة)",
      acceptedAnswers: ["Ich trage ein blaues Hemd", "Ich trage eine Jacke", "Ich trage schwarze Schuhe"],
      sampleAnswer: "Ich trage ein blaues Hemd und schwarze Schuhe.",
      explanation: "الصيغة: Ich trage + قطعة + (لون). في A1 نستخدم ein + لون بنهاية -es/-e.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالألوان الصحيحة (rot/blau/grün/schwarz):",
      template: "Der Himmel ist ___ (أزرق). Das Gras ist ___ (أخضر). Blut ist ___ (أحمر).",
      blanks: [
        { correct: "blau", options: ["blau", "grün", "rot"] },
        { correct: "grün", options: ["blau", "grün", "rot"] },
        { correct: "rot", options: ["blau", "grün", "rot"] },
      ],
      explanation: "السماء زرقاء (blau)، العشب أخضر (grün)، الدم أحمر (rot).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich finde das Kleid sehr schön.",
      explanation: "أجد الفستان جميلاً جداً — Ich finde + الاسم + صفة الرأي.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das Hemd ist ___.",
      questionAr: "القميص أحمر.",
      options: ["rot", "rote", "rotes", "roten"],
      correctIndex: 0,
      explanation: "الصفة الخبرية بعد sein لا تتغير: ist rot.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Was ___ du? — Ich trage eine Jacke.",
      options: ["trägst", "trage", "trägt", "tragt"],
      correctIndex: 0,
      explanation: "مع du: trägst (a→ä).",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل اللون بمعناه:",
      pairs: [
        { left: "weiß", right: "أبيض" },
        { left: "schwarz", right: "أسود" },
        { left: "gelb", right: "أصفر" },
        { left: "braun", right: "بني" },
      ],
      explanation: "أربعة ألوان أساسية — أضفها للألوان التي تعرفها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ist", "Die", "Jacke", "blau", "."],
      correctSentence: "Die Jacke ist blau.",
      explanation: "السترة زرقاء: Die Jacke + ist + blau.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Schuhe ist schwarz.",
      wrongWord: "ist",
      correctWord: "sind",
      options: ["sind", "sein", "bist", "seid"],
      explanation: "die Schuhe جمع → sind.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ tragen بتصريف صحيح:",
      template: "Ich ___ eine Brille. Du ___ ein Hemd. Sie ___ ein Kleid.",
      blanks: [
        { correct: "trage", options: ["trage", "trägst", "trägt"] },
        { correct: "trägst", options: ["trage", "trägst", "trägt"] },
        { correct: "trägt", options: ["trage", "trägst", "trägt"] },
      ],
      explanation: "ich trage، du trägst، sie trägt — تغيّر a→ä في du/er/sie.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى سؤال عن الرأي:",
      prompt: "Meine neue Jacke. → (اسأل: ما رأيك في سترتي الجديدة؟)",
      acceptedAnswers: ["Wie findest du meine neue Jacke", "Wie findest du meine Jacke", "Wie findest du meine neue Jacke?"],
      sampleAnswer: "Wie findest du meine neue Jacke?",
      explanation: "Wie findest du + مفعول به. (neue تلميح لتصريف الصفات — سنكملها في B1).",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich trage eine Brille.",
      questionAr: "ما معنى الجملة؟",
      options: ["أرتدي نظارة", "أبحث عن نظارة", "أشتري نظارة", "أحمل نظارة فقط"],
      correctIndex: 0,
      explanation: "tragen = يرتدي (عادة دائمة): أرتدي نظارة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das Kleid ist sehr schöne.",
      wrongWord: "schöne",
      correctWord: "schön",
      options: ["schön", "schöne", "schönen", "schönes"],
      explanation: "الصفة الخبرية بعد sein بلا نهاية: ist schön.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich trage heute eine rote Mütze.",
      explanation: "أرتدي اليوم قبعة حمراء — rote صفة قبل اسم مؤنث (تلميح للمستقبل).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالصيغة الصحيحة من dies-:",
      template: "___ Hemd ist zu klein. ___ Hose gefällt mir. ___ Pullover ist warm.",
      blanks: [
        { correct: "Dieses", options: ["Dieses", "Diese", "Dieser"] },
        { correct: "Diese", options: ["Diese", "Dieses", "Dieser"] },
        { correct: "Dieser", options: ["Dieser", "Diese", "Dieses"] },
      ],
      explanation: "das Hemd ⇒ dieses · die Hose ⇒ diese · der Pullover ⇒ dieser. النهاية نهاية الأداة.",
      errorType: "article",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Dieses Hose ist sehr teuer.",
      wrongWord: "Dieses",
      correctWord: "Diese",
      options: ["Diese", "Dieses", "Dieser", "Diesen"],
      explanation: "die Hose مؤنّثة ⇒ diese Hose.",
      errorType: "gender",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "أنت في المتجر وتسأل عن المعطف. أيّ صيغة صحيحة؟",
      questionDe: "___ Mantel möchten Sie kaufen?",
      questionAr: "أيّ معطف تودّ أن تشتري؟",
      options: ["Welchen", "Welcher", "Welches", "Welche"],
      correctIndex: 0,
      explanation: "der Mantel مذكّر، وهو مفعول به بعد kaufen ⇒ Akkusativ ⇒ welchen.",
      optionExplanations: [
        undefined,
        "welcher للفاعل المذكّر لا للمفعول به.",
        "welches للمحايد (das).",
        "welche للمؤنّث والجمع.",
      ],
      errorType: "case",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال البائع:",
      tokens: ["Welche", "Größe", "haben", "Sie", "?"],
      correctSentence: "Welche Größe haben Sie?",
      explanation: "die Größe مؤنّثة ⇒ welche. وكلمة السؤال تتصدّر والفعل يليها.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "matching",
      instructionAr: "صِل كل كلمة بصيغة الإشارة الصحيحة:",
      pairs: [
        { left: "der Rock", right: "dieser Rock" },
        { left: "die Jacke", right: "diese Jacke" },
        { left: "das Kleid", right: "dieses Kleid" },
        { left: "die Socken (ج)", right: "diese Socken" },
      ],
      explanation: "dies- تأخذ نهاية الأداة: der→dieser · die→diese · das→dieses · الجمع→diese.",
      errorType: "article",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة للفعل:",
      questionDe: "Die Schuhe ___ mir sehr gut.",
      options: ["gefallen", "gefällt", "gefalle", "gefällst"],
      correctIndex: 0,
      explanation: "die Schuhe جمع، والفعل يتبع الملبوس لا الشخص ⇒ gefallen. وmir لا تتغيّر.",
      errorType: "conjugation",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "أيّ فعل يناسب المعنى؟ (الحديث عن المقاس لا الذوق)",
      questionDe: "Das Hemd ist zu klein. Es ___ mir nicht.",
      options: ["passt", "gefällt", "steht", "trägt"],
      correctIndex: 0,
      explanation: "المقاس ⇒ passen. أمّا gefallen فللذوق وstehen للّياقة.",
      errorType: "vocabulary",
    },
    {
      id: "e18",
      type: "error-correction",
      instructionAr: "صحّح بنية الجملة:",
      wrongSentence: "Ich gefalle das Hemd.",
      wrongWord: "Ich gefalle",
      correctWord: "Das Hemd gefällt mir",
      options: ["Das Hemd gefällt mir", "Ich gefällt das Hemd", "Mich gefällt das Hemd", "Das Hemd gefalle mich"],
      explanation: "الملبوس هو الفاعل وأنت المستقبِل في الدّاتيف. والجملة الخاطئة تعني «أنا أُعجِب القميصَ».",
      errorType: "case",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح ضمير الدّاتيف:",
      wrongSentence: "Der Pullover gefällt mich sehr.",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "meiner", "meine"],
      explanation: "gefallen من أفعال الدّاتيف فلا تنصب أبداً: gefällt mir.",
      errorType: "pronoun",
    },
    {
      id: "e20",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل gefallen في صيغته الصحيحة:",
      template: "Der Mantel ___ mir gut. Die Socken ___ mir nicht.",
      blanks: [
        { correct: "gefällt", options: ["gefällt", "gefallen"] },
        { correct: "gefallen", options: ["gefällt", "gefallen"] },
      ],
      explanation: "der Mantel مفرد ⇒ gefällt · die Socken جمع ⇒ gefallen.",
      errorType: "conjugation",
    },
    {
      id: "e21",
      type: "word-ordering",
      instructionAr: "رتّب سؤال البائع:",
      tokens: ["Wie", "gefällt", "Ihnen", "dieser", "Mantel", "?"],
      correctSentence: "Wie gefällt Ihnen dieser Mantel ?",
      explanation: "أداة الاستفهام ثمّ الفعل ثمّ الدّاتيف المهذّب Ihnen ثمّ الفاعل.",
      errorType: "word-order",
    },
    {
      id: "e22",
      type: "transformation",
      instructionAr: "حوّل إلى بنية gefallen:",
      prompt: "Ich finde die Jacke schön. → (بالفعل gefallen)",
      acceptedAnswers: ["Die Jacke gefällt mir", "Die Jacke gefällt mir.", "Mir gefällt die Jacke", "Mir gefällt die Jacke."],
      sampleAnswer: "Die Jacke gefällt mir.",
      explanation: "finden يجعلك فاعلاً، وgefallen يجعل الملبوس فاعلاً وأنت مستقبِل في الدّاتيف.",
      errorType: "case",
    },
    {
      id: "e23",
      type: "error-correction",
      instructionAr: "صحّح صيغة المخاطبة المهذّبة:",
      wrongSentence: "Wie gefällt Sie das Kleid?",
      wrongWord: "Sie",
      correctWord: "Ihnen",
      options: ["Ihnen", "Sie", "Ihre", "Ihr"],
      explanation: "الفاعل هو das Kleid، فالمخاطَب مستقبِل ⇒ Ihnen لا Sie.",
      errorType: "pronoun",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كل فعل بمجاله:",
      pairs: [
        { left: "gefallen", right: "الذوق: شكله جميل" },
        { left: "passen", right: "المقاس: يدخل عليّ" },
        { left: "stehen", right: "اللياقة: يليق بك" },
        { left: "anziehen", right: "الارتداء: ألبسه الآن" },
      ],
      explanation: "أربعة أفعال متجاورة في المتجر ولكلٍّ مجاله الخاص.",
      errorType: "vocabulary",
    },
    {
      id: "e25",
      type: "multiple-choice",
      instructionAr: "اختر الجواب السليم على سؤال البائع:",
      questionDe: "Verkäufer: Wie gefällt Ihnen die Hose? — Sie: ___",
      options: [
        "Sie gefällt mir, aber sie passt mir nicht.",
        "Ich gefalle die Hose gut.",
        "Die Hose gefällt mich sehr.",
        "Mich gefällt die Hose nicht passt.",
      ],
      correctIndex: 0,
      explanation: "جواب سليم يفصل الذوق (gefallen) عن المقاس (passen)، والضمير في الدّاتيف.",
      errorType: "grammar",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Das Hemd rot. (بدون ist)", right: "Das Hemd ist rot.", whyAr: "الجملة تحتاج فعلاً دائماً — تذكر درس sein!" },
      { wrong: "die Schuhe ist neu", right: "die Schuhe sind neu", whyAr: "جمع → sind." },
      { wrong: "Ich trage eine rot Jacke.", right: "Ich trage eine rote Jacke. (أو: Die Jacke ist rot)", whyAr: "الصفة قبل الاسم تحتاج نهاية (rote) — في A1 الأسهل: الخبرية Die Jacke ist rot." },
    ],
    eselsbruecken: [
      "«ألوان علم ألمانيا»: أسود-أحمر-ذهبي (schwarz-rot-gold) — ستتذكرها في أي احتفال ألماني.",
      "«الصفة الخبرية ساكنة»: ist + صفة بدون نهاية دائماً في A1.",
    ],
    culturalNote: {
      title: "عند شراء الملابس في ألمانيا",
      content:
        "في المتاجر الألمانية: «Anprobieren» (التجربة) متاحة دائماً مع «Umkleidekabine» (غرفة القياس). وإذا لم يعجبك، لديك حق «Umtausch» (الاستبدال) خلال أسبوعين عادة بشرط الاحتفاظ بالإيصال (der Kassenbon).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Die Hose ist ___.",
      questionAr: "البنطال أزرق.",
      options: ["blau", "blaue", "blauen", "blaues"],
      correctIndex: 0,
      explanation: "الصفة الخبرية: ist blau.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Was ___ du heute? — Ich trage ein Hemd.",
      options: ["trägst", "trage", "trägt", "tragt"],
      correctIndex: 0,
      explanation: "du → trägst (a→ä).",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["findest", "Wie", "Jacke", "meine", "du", "?"],
      correctSentence: "Wie findest du meine Jacke?",
      explanation: "سؤال W: Wie + findest (V2) + du + meine Jacke.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich trage ein rot Hemd.",
      wrongWord: "rot",
      correctWord: "rotes",
      options: ["rotes", "rote", "roten", "rot"],
      explanation: "الصفة قبل اسم محايد (das Hemd): ein rotes Hemd. أو استخدم الخبرية: Das Hemd ist rot.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الألوان:",
      template: "Die Nacht ist ___ (أسود). Der Schnee ist ___ (أبيض). Die Banane ist ___ (أصفر).",
      blanks: [
        { correct: "schwarz", options: ["schwarz", "weiß", "gelb"] },
        { correct: "weiß", options: ["schwarz", "weiß", "gelb"] },
        { correct: "gelb", options: ["schwarz", "weiß", "gelb"] },
      ],
      explanation: "الليل أسود، الثلج أبيض، الموزة صفراء.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Kleidung", ar: "الملابس", example: "Ich kaufe neue Kleidung.", exampleAr: "أشتري ملابس جديدة.", level: "A1" },
    { id: "fc2", de: "das Hemd / die Hose", ar: "القميص / البنطال", example: "Das Hemd ist weiß.", exampleAr: "القميص أبيض.", level: "A1" },
    { id: "fc3", de: "die Jacke", ar: "السترة", example: "Meine Jacke ist warm.", exampleAr: "سترتي دافئة.", level: "A1" },
    { id: "fc4", de: "das Kleid", ar: "الفستان", example: "Das Kleid ist elegant.", exampleAr: "الفستان أنيق.", level: "A1" },
    { id: "fc5", de: "die Schuhe", ar: "الحذاء (جمع)", example: "Die Schuhe sind neu.", exampleAr: "الحذاء جديد.", level: "A1" },
    { id: "fc6", de: "rot / blau / grün", ar: "أحمر / أزرق / أخضر", example: "Der Himmel ist blau.", exampleAr: "السماء زرقاء.", level: "A1" },
    { id: "fc7", de: "tragen", ar: "يرتدي", example: "Ich trage eine Brille.", exampleAr: "أرتدي نظارة.", level: "A1" },
    { id: "fc8", de: "Wie findest du …?", ar: "ما رأيك في…؟", example: "Wie findest du mein Hemd?", exampleAr: "ما رأيك في قميصي؟", level: "A1" },
    { id: "fc9", de: "Welche Größe haben Sie?", ar: "أيّ مقاس تلبس؟", example: "Welche Größe haben Sie? — Größe 40.", exampleAr: "أيّ مقاس تلبس؟ — مقاس 40.", level: "A1" },
    { id: "fc10", de: "Ich nehme dieses Hemd.", ar: "آخذ هذا القميص.", example: "Ich nehme dieses Hemd, bitte.", exampleAr: "آخذ هذا القميص من فضلك.", level: "A1" },
    { id: "fc11", de: "Das gefällt mir.", ar: "هذا يعجبني.", example: "Der blaue Pullover gefällt mir sehr.", exampleAr: "الكنزة الزرقاء تعجبني كثيراً.", level: "A1" },
    { id: "fc12", de: "Die Schuhe gefallen mir.", ar: "الحذاء يعجبني. (جمع ⇐ الفعل جمع)", example: "Die Schuhe gefallen mir, aber sie sind teuer.", exampleAr: "الحذاء يعجبني لكنّه غالٍ.", level: "A1" },
    { id: "fc13", de: "passen (+ Dativ)", ar: "يناسب المقاس", example: "Die Hose passt mir nicht.", exampleAr: "البنطال لا يناسب مقاسي.", level: "A1" },
    { id: "fc14", de: "stehen (+ Dativ)", ar: "يليق بـ", example: "Das Kleid steht dir gut.", exampleAr: "الفستان يليق بك.", level: "A1" },
    { id: "fc15", de: "mir / dir / Ihnen", ar: "لي / لك / لحضرتك (ضمائر الدّاتيف)", example: "Wie gefällt Ihnen das?", exampleAr: "كيف يعجبك هذا؟", level: "A1" },
    { id: "fc16", de: "Wie gefällt Ihnen …?", ar: "كيف يعجبك …؟ (سؤال البائع)", example: "Wie gefällt Ihnen dieser Mantel?", exampleAr: "كيف يعجبك هذا المعطف؟", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-08-1", type: "summarize-de-to-ar",
      titleAr: "لخّص وصف ملابس بالعربية",
      sourceDe: "Im Winter trage ich eine warme Jacke, einen Schal und Handschuhe. Meine Lieblingsfarbe ist dunkelblau.",
      taskAr: "انقل بالعربية ما يرتديه الشخص في الشتاء ولونه المفضل.",
      modelAnswerAr: "«في الشتاء أرتدي سترة دافئة ووشاحاً وقفازات. لوني المفضل أزرق داكن.»",
      keyPointsAr: ["ذكرت الملابس الشتوية (سترة، وشاح، قفازات)", "نقلت اللون المفضل (أزرق داكن)"],
    },
  ],
      interaction: [
    {
      id: "int-a1-08-1",
      scenarioAr: "صديقة تسأل رأيك في ملابس.",
      scenarioDe: "Eine Freundin fragt deine Meinung über Kleidung.",
      strategyAr: "الاستراتيجية: إبداء الرأي بلطف (Ich finde... / Wie findest du...?).",
      rounds: [
        {
          speakerDe: "Wie findest du diese Jacke?",
          speakerAr: "كيف تجد هذه السترة؟",
          options: [
            { de: "Ich finde sie sehr schön! Sie passt gut zu dir.", ar: "أجدها جميلة جداً! تناسبك جيداً.", best: true, replyDe: "Danke! Und die Farbe?", replyAr: "شكراً! واللون؟" },
            { de: "Sie ist hässlich, wie du.", ar: "إنها قبيحة مثلك.", best: false, replyDe: "Das ist wirklich unhöflich!", replyAr: "هذا غير مهذب حقاً!" },
          ],
        },
        {
          speakerDe: "Welche Farbe passt besser?",
          speakerAr: "أي لون يناسب أكثر؟",
          options: [
            { de: "Ich denke, Rot passt besser als Blau.", ar: "أعتقد أن الأحمر يناسب أكثر من الأزرق.", best: true, replyDe: "Guter Tipp! Ich probiere Rot.", replyAr: "نصيحة جيدة! سأجرب الأحمر." },
            { de: "Alle Farben sind gleich.", ar: "كل الألوان متشابهة.", best: false, replyDe: "Nein, Farben machen einen großen Unterschied!", replyAr: "لا، الألوان تصنع فرقاً كبيراً!" },
          ],
        },
      ],
    },
  ],

};