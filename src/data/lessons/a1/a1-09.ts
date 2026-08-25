import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-09: المواعيد والتقويم
 * — أيام الأسبوع + الأشهر + الفصول + الأعداد الترتيبية + am/um/in
 */
export const lessonA109: Lesson = {
  id: "a1-09",
  unitId: "a1-09",
  level: "A1",
  order: 1,
  titleDe: "Termine und der Kalender",
  titleAr: "المواعيد والتقويم",
  duration: 30,
  summary:
    "أيام الأسبوع والأشهر والفصول، الأعداد الترتيبية (der erste...)، وحروف الجر الزمنية am/um/in لترتيب المواعيد: Am Montag um neun Uhr.",
  lernziele: [
    { id: "z1", de: "Ich kann die Wochentage und Monate nennen.", ar: "أن أسمّي أيام الأسبوع والشهور بالترتيب." },
    { id: "z2", de: "Ich kann die Jahreszeiten sagen.", ar: "أن أسمّي الفصول الأربعة." },
    { id: "z3", de: "Ich kann Ordinalzahlen bilden: der erste, der zweite...", ar: "أن أصيغ الأعداد الترتيبية (الأول، الثاني...)." },
    { id: "z4", de: "Ich kann Termine machen: Am Montag um neun Uhr.", ar: "أن أحدد المواعيد: يوم الاثنين في التاسعة." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "لاحظت أن كلمة «الاثنين» في الألمانية تعني حرفياً «يوم القمر»؟ وأن «الأربعاء» = «منتصف الأسبوع»؟ الألمان يسمون أيامهم حسب الكواكب والترتيب. خمّن أسماءها قبل أن نكشفها!",
    motivatingQuestionDe: "Wann hast du Zeit?",
    contextAr:
      "اليوم نتقن التقويم الألماني كاملاً: أيام من «الكواكب»، وأشهر شبيهة بالإنجليزية، وفصول، ثم نضيف القاعدة الذهبية للمواعيد: am + يوم، um + ساعة.",
    contextDe: "Der Termin ist am Montag um zehn Uhr.",
    connectionToPreviousAr: "تعلمنا الساعة (halb acht...) في درس الروتين. اليوم نضيف الأيام والأشهر — ودمجهما معاً يعطينا «الموعد الكامل».",
    activateVocabulary: [
      { de: "der Termin", ar: "الموعد" },
      { de: "der Montag", ar: "الاثنين" },
      { de: "der Monat", ar: "الشهر" },
      { de: "die Jahreszeit", ar: "الفصل (من فصول السنة)" },
      { de: "der Geburtstag", ar: "عيد الميلاد" },
    ],
  },
  theory: [
    {
      id: "t1",
      titleAr: "أيام الأسبوع والأشهر والفصول",
      titleDe: "Wochentage, Monate und Jahreszeiten",
      explanationAr:
        "التقويم الألمانيّ ليس قائمةً تُحفظ بل نظامٌ يُفهم. وأسماء الأيام السبعة أقدم من الألمانية نفسها: نُقلت عن الرومان الذين سمّوا أيامهم بالكواكب، ثمّ استبدل الجرمانيون بآلهة روما آلهتَهم.\n\n**أوّلاً — الأيام السبعة وأصولها.**\n· **Montag** = يوم القمر (der Mond) — كما الإنجليزية Monday واللاتينية dies Lunae\n· **Dienstag** = يوم الإله Tyr إله الحرب\n· **Mittwoch** = **منتصف الأسبوع** (Mitte + Woche) — اليوم الوحيد الذي هرب من الأساطير إلى الحساب\n· **Donnerstag** = يوم الرعد (der Donner)، أي يوم الإله Thor\n· **Freitag** = يوم الإلهة Freya إلهة الحبّ\n· **Samstag** = من Sabbat العبريّ؛ وفي شمال ألمانيا يقولون **Sonnabend** حرفياً „مساء الأحد“\n· **Sonntag** = يوم الشمس (die Sonne)\nوكلّها **مذكّرة** بلا استثناء: der Montag, der Dienstag … لأنّ der Tag مذكّر، والكلمة المركّبة تأخذ جنس جزئها الأخير. وهذه قاعدة عامّة تنفعك في آلاف الكلمات.\n\n**ثانياً — الشهور الاثنا عشر.**\nJanuar · Februar · März · April · Mai · Juni · Juli · August · September · Oktober · November · Dezember.\nكلّها مذكّرة أيضاً (der Januar)، وكلّها لاتينية الأصل فتشبه نظائرها في لغاتٍ كثيرة. وفي الهاتف يقول الألمان **Juno** بدل Juni و**Julei** بدل Juli لئلّا يختلطا على السامع — حيلةٌ عملية تسمعها في المطارات والمواعيد.\n\n**ثالثاً — الفصول الأربعة.** der Frühling (الربيع) · der Sommer · der Herbst (الخريف) · der Winter. أربعتها مذكّرة، وهذا يسهّل الأمر: **الأيام والشهور والفصول كلّها مذكّرة**، فلا جدول جنسٍ تحفظه هنا.\n\n**رابعاً — التكرار بالحرف الصغير.** إذا أردت „كلّ اثنين“ فحوّل اليوم إلى ظرف بإضافة s وبحرفٍ صغير: **montags** · **dienstags** · **sonntags**. قارن: Am Montag arbeite ich (الاثنين القادم) مقابل Montags arbeite ich (كلّ اثنين). حرفٌ صغير وسينٌ واحدة تُغيّران المعنى من مرّةٍ إلى عادة.",
      whyAr:
        "لماذا نُتعب أنفسنا بأصول الكلمات وقد كان يكفي الحفظ؟ لأنّ الذاكرة البشرية تحفظ القصّة ولا تحفظ القائمة. من عرف أنّ Donnerstag يوم الرعد لن ينساه أبداً، ومن حفظه رقماً رابعاً في قائمة سينساه بعد أسبوع. وهذا مبدأٌ تربويّ مُثبَت لا زخرفة.\n\nولماذا Mittwoch شاذّ عن إخوته؟ لأنّ الكنيسة في القرون الوسطى كرهت أن يحمل يومٌ اسم إله وثنيّ (كان Wodanstag على اسم Wodan)، فاستبدلت به الحساب المحايد „منتصف الأسبوع“. وهذا يفسّر لك أمراً عملياً: الأسبوع الألمانيّ يبدأ **الاثنين** لا الأحد، وإلّا لما كان الأربعاء وسطه. وتراه في كلّ تقويم ألمانيّ ورقيّ أو رقميّ.",
      table: {
        title: "الأيام والأشهر والفصول",
        columns: ["العربية", "الألمانية", "ملاحظة"],
        rows: [
          { label: "الاثنين", cells: ["Montag", "يوم القمر (Mond)"] },
          { label: "الثلاثاء", cells: ["Dienstag", "يوم الخدمة/الإله تير"] },
          { label: "الأربعاء", cells: ["Mittwoch", "منتصف الأسبوع! (Mitte)"] },
          { label: "الخميس", cells: ["Donnerstag", "يوم الرعد (Donner)"] },
          { label: "الجمعة", cells: ["Freitag", "يوم الحب (Freya)"] },
          { label: "السبت", cells: ["Samstag", "يوم السبت (Sabbath)"] },
          { label: "الأحد", cells: ["Sonntag", "يوم الشمس (Sonne)"] },
          { label: "الفصول", cells: ["Frühling/Sommer/Herbst/Winter", "ربيع/صيف/خريف/شتاء"] },
        ],
      },
      examples: [
        {"de": "Heute ist Montag.", "ar": "اليوم الاثنين."},
        {"de": "Am Samstag gehe ich einkaufen.", "ar": "يوم السبت أذهب للتسوّق."},
        {"de": "Mein Geburtstag ist im Mai.", "ar": "عيد ميلادي في مايو."},
        {"de": "Im Winter ist es kalt.", "ar": "في الشتاء يكون الجوّ بارداً."},
        {"de": "Der Termin ist am Freitag um drei Uhr.", "ar": "الموعد يوم الجمعة في الثالثة."},
        {"de": "Montags habe ich immer Deutschkurs.", "ar": "كلّ اثنين عندي درس ألمانية. (عادة ⇐ حرف صغير + s)"},
        {"de": "In Norddeutschland sagt man Sonnabend statt Samstag.", "ar": "في شمال ألمانيا يقولون Sonnabend بدل Samstag."},
        {"de": "Der Sommer ist meine Lieblingsjahreszeit.", "ar": "الصيف فصلي المفضّل. (der Sommer مذكّر)"},
      ],
      comparisonWithArabic:
        "العربية تُرقّم أيامها ترقيماً صافياً: الأحد (الأوّل) والاثنين (الثاني) والثلاثاء (الثالث) والأربعاء (الرابع) والخميس (الخامس)، ثمّ تخرج عن الحساب في الجمعة والسبت. والألمانية على العكس: كلّها أساطير إلّا Mittwoch وحده.\n\nونقطة التقاء طريفة: **الأربعاء = Mittwoch** كلاهما يشير إلى موقعٍ في الأسبوع لا إلى إله — لكنّ العربية تعدّه رابعاً من الأحد، والألمانية تعدّه وسطاً من الاثنين. والعدد نفسه بمرجعين مختلفين.\n\nوفخٌّ يقع فيه العربيّ كثيراً: „يوم الجمعة“ في العربية تحتاج كلمة „يوم“، فيقول المتعلّم Tag Freitag. والألمانية تكتفي بالاسم مجرّداً: Am Freitag — لأنّ Freitag يحمل Tag في آخره أصلاً.",
      eselsbruecke:
        "«الثلاثاء Dienstag فيه خدمة، والخميس Donnerstag فيه رعد، والأحد Sonntag فيه شمس» — أربع قصص صغيرة تحفظها كلها. و«ميت-فوخ = منتصف الأسبوع»: ميت (وسط) + فوخ (أسبوع).",
      commonMistakes: [
        {"wrong": "Tag Freitag habe ich frei.", "right": "Am Freitag habe ich frei.", "whyAr": "ترجمة حرفية لـ„يوم الجمعة“. واسم اليوم الألمانيّ يحمل Tag في آخره أصلاً، فإضافة كلمة Tag تكرارٌ ركيك. والحرف الصحيح am لا غير."},
        {"wrong": "Die Montag ist schwer.", "right": "Der Montag ist schwer.", "whyAr": "كلّ أيام الأسبوع مذكّرة لأنّ جزأها الأخير der Tag مذكّر، والكلمة المركّبة الألمانية تأخذ جنس جزئها الأخير دائماً. وهذه قاعدة تنفعك في آلاف المركّبات لا في الأيام وحدها."},
        {"wrong": "Ich arbeite Montags.", "right": "Ich arbeite montags.", "whyAr": "حين يتحوّل اليوم إلى ظرف تكرار يفقد صفة الاسم فيُكتب بحرفٍ صغير: montags. والحرف الكبير يعني اليوم المعيَّن، والصغير يعني العادة المتكرّرة."},
        {"wrong": "Im Montag habe ich Zeit.", "right": "Am Montag habe ich Zeit.", "whyAr": "im للشهور والفصول، وam للأيام والتواريخ. والخطأ يأتي من أنّ العربية تستعمل „في“ للاثنين ولمايو معاً، فينقل المتعلّم حرفاً واحداً إلى موضعين مختلفين."},
      ],
      relatedRuleComparison: {
        title: "am أم im؟",
        content: "am + يوم/تاريخ: am Montag, am 5. Mai. im + شهر/فصل/سنة: im Mai, im Sommer, im Jahr 2025.",
      },
    },
    {
      id: "t2",
      titleAr: "الأعداد الترتيبية (Ordinalzahlen)",
      titleDe: "Die Ordinalzahlen: der erste, der zweite...",
      explanationAr:
        "العدد الترتيبيّ هو ما يجيب عن سؤال **der wievielte?** (الكم؟ أي: أيّ واحدٍ في الترتيب؟). ولا يمكن أن تحدّد موعداً أو تعطي عنواناً أو تقول تاريخ ميلادك من دونه.\n\n**القاعدة في سطرين:**\n· من **1 إلى 19**: العدد + **te** ⟵ vier ⇐ vier**te** · fünf ⇐ fünf**te** · neunzehn ⇐ neunzehn**te**\n· من **20 فما فوق**: العدد + **ste** ⟵ zwanzig ⇐ zwanzig**ste** · hundert ⇐ hundert**ste**\nولماذا تنقلب te إلى ste عند العشرين؟ لسببٍ صوتيّ محض: zwanzigte ثقيلة على اللسان، والسين تفصل بين الجيم والتاء فتُسهّل النطق. جرّبها بنفسك وستسمع الفرق.\n\n**والشواذّ ثلاثة لا رابع لها:**\n· 1 ⇐ **erste** (لا einte)\n· 3 ⇐ **dritte** (لا dreite — لاحظ سقوط e من drei)\n· 7 ⇐ **siebte** (لا siebente — تسقط en اختصاراً)\nوثلاثة شواذّ في نظامٍ كامل حظٌّ عظيم إذا قارنته بالعربية التي تشذّ في „أوّل“ و„ثانٍ“ وتُغيّر البنية كلّها.\n\n**والنهاية تتحرّك مع الحالة** — وهذه أوّل مرّة ترى فيها الصفة تتصرّف:\n· الرفع: Heute ist **der erste** Mai.\n· بعد am (جرّ): Der Termin ist **am ersten** Mai.\n· النصب: Ich nehme **den ersten** Termin.\nالقاعدة العملية: **مع der تنتهي بـ e، ومع am أو den تنتهي بـ en.**\n\n**وفي الكتابة تكفي نقطة.** الرقم متبوعاً بنقطة يعني „ترتيبيّ“: 1. Mai تُقرأ der erste Mai. والنقطة ليست زينةً بل هي كلّ الفرق بين 3 (ثلاثة) و3. (الثالث).",
      whyAr:
        "لماذا نُعنى بالنقطة إلى هذا الحدّ؟ لأنّها في ألمانيا وثيقة رسمية. تكتب في استمارة البنك 3.5.1995 فتعني الثالث من مايو، ويقرؤها الأمريكيّ الخامس من مارس. وقد تُرفض معاملتك أو يُحجز لك موعدٌ خطأ بسبب نقطةٍ واحدة.\n\nولماذا تتحرّك النهاية بين e وen؟ لأنّ العدد الترتيبيّ ليس عدداً في الحقيقة بل **صفة**: der erste Mai بنيتها كبنية der schöne Mai. والصفة الألمانية تتبع حالة اسمها. فما تتعلّمه هنا ليس قاعدة تواريخ بل أوّل درسٍ في تصريف الصفات — وهو بابٌ سيتوسّع في A2 وB1. من أتقن ersten/erste اليوم وجد ذلك الباب مفتوحاً غداً.",
      table: {
        title: "الأعداد الترتيبية الأساسية",
        columns: ["العدد", "الترتيبي", "التاريخ"],
        rows: [
          { label: "1", cells: ["der erste", "der 1. Mai"] },
          { label: "2", cells: ["der zweite", "der 2. Juni"] },
          { label: "3", cells: ["der dritte (شاذ)", "der 3. Juli"] },
          { label: "4", cells: ["der vierte", "der 4. August"] },
          { label: "5", cells: ["der fünfte", "der 5. September"] },
          { label: "7", cells: ["der siebte (شاذ)", "der 7. Oktober"] },
          { label: "20", cells: ["der zwanzigste", "der 20. November"] },
        ],
      },
      examples: [
        {"de": "Heute ist der erste Mai.", "ar": "اليوم الأوّل من مايو."},
        {"de": "Der Termin ist am dritten Juli.", "ar": "الموعد في الثالث من يوليو. (am ⇐ ـen)"},
        {"de": "Das ist mein zweiter Besuch.", "ar": "هذه زيارتي الثانية."},
        {"de": "Sie wohnt im vierten Stock.", "ar": "هي تسكن في الطابق الرابع."},
        {"de": "Wir treffen uns am zwanzigsten November.", "ar": "نلتقي في العشرين من نوفمبر. (20 ⇐ ste)"},
        {"de": "Der siebte Tag heißt Sonntag.", "ar": "اليوم السابع اسمه الأحد. (شاذّ: siebte)"},
        {"de": "Ich nehme den ersten Termin.", "ar": "آخذ الموعد الأوّل. (نصب ⇐ den ersten)"},
        {"de": "Der Kurs beginnt am achten Januar.", "ar": "الدورة تبدأ في الثامن من يناير."},
      ],
      comparisonWithArabic:
        "العربية تُبدّل بنية الكلمة كلّها لتصنع الترتيبيّ: واحد ⇐ أوّل، اثنان ⇐ ثانٍ، ثلاثة ⇐ ثالث. اشتقاقٌ لا إلصاق. والألمانية تُبقي العدد كما هو وتُلصق به te أو ste، فالعمل الذهنيّ فيها أخفّ بكثير.\n\nلكنّ العربية تُريح المتعلّم في موضعٍ تُتعبه الألمانية فيه: نقول „في الثالث من مايو“ و„اليوم الثالث من مايو“ دون أن تتبدّل „الثالث“. والألمانية تفرض der dritte مرّةً وam dritten مرّةً — فرقٌ في النهاية يقابله في العربية صفر تغيير.\n\nوترتيب الكتابة معكوس بينهما أيضاً: العربية تكتب اليوم فالشهر فالسنة، والألمانية كذلك (3.5.2026) — وهذا **تطابق** يريحك، خلافاً للإنجليزية الأمريكية التي تقدّم الشهر.",
      eselsbruecke:
        "«1-19: +te، 20+: +ste» — وفقط ثلاثة شواذ: 1 erste، 3 dritte، 7 siebte. احفظهم كأغنية: «إيرستِه، تسڤايته، دريتِّه، ڤيرته».",
      commonMistakes: [
        {"wrong": "der dreite Mai", "right": "der dritte Mai", "whyAr": "drei تفقد حرف e عند صياغة الترتيبيّ فتصير dritte لا dreite. وهو أوّل الشواذّ الثلاثة وأكثرها وروداً لأنّه يقع في كلّ شهر مرّة."},
        {"wrong": "am zwanzigte Mai", "right": "am zwanzigsten Mai", "whyAr": "خطآن في كلمة: العشرون فما فوق يأخذ ste لا te، وبعد am تُضاف النهاية en. فالصواب zwanzig + ste + n. وتفكيك الكلمة إلى أجزائها الثلاثة يمنع الخطأ."},
        {"wrong": "Heute ist am fünften Mai.", "right": "Heute ist der fünfte Mai.", "whyAr": "«اليوم هو…» جملة خبرية بالرفع فلا حرف جرّ فيها. وam موضعها جواب سؤال wann? لا جواب سؤال der wievielte?. والخلط بينهما أشيع أخطاء التاريخ."},
        {"wrong": "Ich habe am 3 Mai einen Termin.", "right": "Ich habe am 3. Mai einen Termin.", "whyAr": "النقطة بعد الرقم هي التي تجعله ترتيبياً. وبدونها تُقرأ الجملة «في ثلاثة مايو» وهي بلا معنى. النقطة إذاً حرفٌ لا علامة ترقيم."},
      ],
      relatedRuleComparison: {
        title: "الترتيبي مع النصب",
        content: "مثل الصفات، الترتيبي يتصرف مع الاسم: Ich habe den ersten Termin (نصب: den ersten). هذه مقدمة لتصريف الصفات الكامل في B1.",
      },
    },
    {
      id: "t3",
      titleAr: "كتابة التاريخ ونطقه: der wievielte؟",
      titleDe: "Das Datum: Der wievielte ist heute?",
      explanationAr:
        "الأعداد الترتيبية التي أخذتها للتوّ تُستعمل أكثر ما تُستعمل في التاريخ — وهنا فرقٌ حاسم بين صيغتين لا يُغتفر الخلط بينهما.\n\n**أوّلاً — سؤال اليوم مقابل تحديد الموعد.**\n· **السؤال عن تاريخ اليوم**: Der wievielte ist heute? ⇐ Heute ist **der dritte** Mai. (رفع، مع der، والنهاية ـe)\n· **تحديد موعد**: Wann? ⇐ **Am dritten** Mai. (an + Dativ ⇒ am، والنهاية ـen)\nسؤالان مختلفان يستدعيان صيغتين مختلفتين. ومن أجاب عن der wievielte بـam فقد أجاب عن سؤالٍ لم يُطرح.\n\n**ثانياً — الكتابة بالنقطة.** der 3. Mai · am 3. Mai. النقطة نفسها هي التي تقول „ترتيبيّ“، فلا تُهملها. وترتيب الأرقام في ألمانيا: **يوم. شهر. سنة** ⟵ 3.5.2026 = الثالث من مايو.\n\n**ثالثاً — المدى بين تاريخين: vom … bis zum …**\nDer Kurs geht **vom** ersten **bis zum** dritten Mai. لاحظ أنّ الطرفين كليهما في حالة الجرّ، فكلاهما ينتهي بـ ـen: vom **ersten** bis zum **dritten**. والتركيب متلازم: من قال vom لزمه bis zum، ولا يجوز حذف zum.\n\n**رابعاً — سنة الميلاد: الاستثناء الذي يخالف كلّ ما سبق.**\nالسنة تُقال **عاريةً بلا حرف جرّ**: Ich bin 1995 geboren. أو بالصيغة الكاملة im Jahr 1995. أمّا im 1995 فخليطٌ خاطئ. وسبب الشذوذ تاريخيّ: السنة في الألمانية القديمة كانت ظرفاً في ذاتها لا تحتاج حرفاً.\n\nوتُقرأ سنوات القرن العشرين بالمئات لا بالآلاف: 1995 = neunzehnhundertfünfundneunzig (تسعة عشر مئة…) لا eintausendneunhundert… أمّا سنوات هذا القرن فتُقرأ عادية: 2026 = zweitausendsechsundzwanzig.",
      whyAr:
        "لماذا تتغيّر النهاية من dritte إلى dritten؟ لأنّ الأعداد الترتيبية تتصرّف كالصفات: تتبع حالة الاسم. مع der (رفع) تنتهي بـ ـe، ومع am (جرّ) تنتهي بـ ـen. هذه أوّل مرّة ترى فيها الصفة تُغيّر نهايتها حسب الحالة، وهو بابٌ كامل سيتوسّع في B1.\n\nولماذا يُصرّ الألمان على der wievielte بدل السؤال المباشر Welches Datum? الذي يبدو أبسط؟ لأنّ wievielte تسأل عن **الرتبة** لا عن **الاسم**: أنت لا تسأل ما اسم اليوم بل كم عدده في الشهر. والصيغتان مسموعتان لكنّ الأولى أشيع بكثير في الكلام اليوميّ، وهي التي يستعملها الممتحن في Goethe A1.",
      table: {
        title: "الصيغتان جنباً إلى جنب",
        columns: ["الموقف", "الصيغة", "مثال"],
        rows: [
          { label: "ما تاريخ اليوم؟", cells: ["der + ـte/ـste", "Heute ist der erste März."] },
          { label: "متى الموعد؟", cells: ["am + ـten/ـsten", "Der Termin ist am ersten März."] },
          { label: "من … إلى …", cells: ["vom … bis zum …", "vom 1. bis zum 15. Juni"] },
          { label: "سنة الميلاد", cells: ["بلا حرف جر", "Ich bin 1995 geboren."] },
        ],
      },
      examples: [
        {"de": "Der wievielte ist heute? — Heute ist der siebte April.", "ar": "ما تاريخ اليوم؟ — اليوم السابع من أبريل."},
        {"de": "Mein Geburtstag ist am zwölften Oktober.", "ar": "عيد ميلادي في الثاني عشر من أكتوبر."},
        {"de": "Der Kurs geht vom ersten bis zum dritten Mai.", "ar": "الدورة من الأوّل إلى الثالث من مايو."},
        {"de": "Ich habe am 3. Januar einen Termin beim Arzt.", "ar": "لديّ موعد عند الطبيب في الثالث من يناير."},
        {"de": "Sie ist 1998 geboren.", "ar": "وُلدت عام 1998. (بلا حرف جرّ)"},
        {"de": "Vom fünften bis zum zehnten August habe ich Urlaub.", "ar": "من الخامس إلى العاشر من أغسطس عندي إجازة."},
        {"de": "Der wievielte ist morgen? — Morgen ist der neunte.", "ar": "ما تاريخ الغد؟ — غداً التاسع."},
      ],
      comparisonWithArabic:
        "العربية تقول „في الثالث من مايو“ بحرف جرٍّ واحد لا يتغيّر، وتقول „اليوم الثالث من مايو“ دون أن يتبدّل شكل „الثالث“. والألمانية تُبدّل النهاية حسب الموضع: der dritte مقابل am dritten.\n\nوترتيب الكتابة يتطابق بين اللغتين — اليوم فالشهر فالسنة — وهذا يريحك خلافاً للإنجليزية الأمريكية التي تقدّم الشهر (5/3 عندها = الخامس من مارس).\n\nوفي قراءة السنوات فرقٌ لافت: العربية تقول „ألف وتسعمئة وخمسة وتسعين“، والألمانية تقول „تسعة عشر مئة وخمسة وتسعين“ — تعدّ المئات لا الآلاف. وهذا يربك العربيّ حين يسمع تاريخ ميلاد في مقابلة رسمية.",
      eselsbruecke:
        "«am تجرّ الـ n»: كلّما قلت am وجب أن تسحب معك نوناً في آخر العدد — am dritten، am ersten، am zwanzigsten. أمّا der فيكتفي بـ ـe.",
      commonMistakes: [
        {"wrong": "Mein Geburtstag ist am dritte Mai.", "right": "Mein Geburtstag ist am dritten Mai.", "whyAr": "بعد am تأخذ الصفة الترتيبية النهاية ـen دائماً. القاعدة صارمة بلا استثناء هنا، لأنّ am اختصار an + dem وهو جرٌّ يفرض نهايته على الصفة."},
        {"wrong": "Heute ist am fünften Mai.", "right": "Heute ist der fünfte Mai.", "whyAr": "«اليوم هو…» جملة خبرية بالرفع، فلا حرف جرّ فيها: der fünfte. أمّا am فلتحديد موعد جواباً لسؤال wann?. والخلط بين السؤالين أشيع أخطاء التاريخ عند المبتدئين."},
        {"wrong": "Ich bin im 1995 geboren.", "right": "Ich bin 1995 geboren.", "whyAr": "سنة الميلاد تُقال عاريةً بلا حرف جرّ، أو بالصيغة الكاملة im Jahr 1995. أمّا im 1995 فخليطٌ بين الصيغتين لا تقوله الألمانية، وهو من أشيع أخطاء الاستمارات الرسمية."},
        {"wrong": "vom ersten bis dritten Mai", "right": "vom ersten bis zum dritten Mai", "whyAr": "التركيب مزدوج ومتلازم: vom … bis zum. وحذف zum يترك bis بلا أداة فتصير العبارة ناقصة. احفظهما وحدةً واحدة لا حرفين منفصلين."},
      ],
      relatedRuleComparison: {
        title: "am للتاريخ واليوم، um للساعة، im للشهر",
        content:
          "ثلاثة حروف لا تختلط: am + يوم أو تاريخ (am Montag, am 3. Mai) · um + ساعة (um neun Uhr) · im + شهر أو فصل (im Mai, im Sommer). جملة واحدة تجمعها: Am dritten Mai um neun Uhr — im Frühling.",
      },
    },
    {
      id: "t4",
      titleAr: "حجز الموعد وإلغاؤه: von … bis · ab · gegen",
      titleDe: "Einen Termin vereinbaren, absagen und verschieben",
      explanationAr:
        "معرفة أسماء الأيام لا تكفي لحجز موعد. الموعد الألمانيّ حوارٌ له أدواته: تحديدٌ، ثمّ اعتذارٌ، ثمّ اقتراحٌ بديل. وهذه الأدوات أربعة حروف وثلاث عبارات لا أكثر.\n\n**أوّلاً — حروف المدى الزمنيّ الأربعة.**\n· **von … bis …** = من … إلى … : Die Praxis ist von acht bis achtzehn Uhr offen.\n· **ab** = ابتداءً من : Ab Montag habe ich Zeit. (وما بعده كلّه مفتوح)\n· **bis** وحدها = حتّى : Ich arbeite bis sechs.\n· **gegen** = نحو، تقريباً : Ich komme gegen drei. (الثالثة إلّا قليلاً أو بعدها بقليل)\nوأضف إليها **zwischen … und …**: Zwischen zwei und vier bin ich da.\n\n**ثانياً — الحرفان الخطران: ab وbis.**\nab تفتح المدى ولا تغلقه، وbis تغلقه ولا تفتحه. فقولك Ab Montag habe ich Urlaub يعني أنّ الإجازة تبدأ الاثنين وتمتدّ؛ وقولك Bis Montag habe ich Urlaub يعني أنّها تنتهي الاثنين. حرفٌ واحد يقلب المعنى رأساً على عقب — ولهذا يُخطئ المتعلّم في العيادة فيأتي في اليوم الخطأ.\n\n**ثالثاً — ثلاث عبارات تُدير الحوار كلّه.**\n· الطلب: **Ich hätte gern einen Termin.** (أودّ موعداً — أدبٌ لازم، لا Ich will)\n· الاعتذار: **Es tut mir leid, da kann ich nicht.** (آسف، لا أستطيع حينها)\n· الاقتراح البديل: **Geht es auch am Mittwoch?** (هل يمكن الأربعاء أيضاً؟)\n\nوانتبه إلى الكلمة الصغيرة **da** في العبارة الثانية: معناها هنا „في ذلك الوقت“ لا „هناك“. وهي أخصر طريقة للإشارة إلى الموعد المرفوض دون إعادة ذكره.\n\n**رابعاً — الفعلان المتقابلان:** einen Termin **vereinbaren** (يتّفق على موعد) مقابل einen Termin **absagen** (يُلغي موعداً) أو **verschieben** (يؤجّله). والثلاثة تُبنى مع Termin كما يُبنى „الموعد“ مع „يحجز/يلغي“ في العربية.",
      whyAr:
        "لماذا نفرد كتلةً كاملةً لعبارات قد تبدو مفرداتٍ لا قواعد؟ لأنّ امتحان Goethe A1 في قسم Sprechen Teil 3 يطلب منك حرفياً أن تتّفق مع زميلك على موعد: بطاقةٌ فيها صورة ساعة، وعليك أن تقترح وترفض وتقبل. ومن يعرف أسماء الأيام ولا يعرف Geht es auch am …? يقف صامتاً أمام الممتحن.\n\nولماذا gegen لا um؟ لأنّ الألمانية تفرّق بين الموعد الملزم والتقريبيّ تفريقاً اجتماعياً لا نحوياً: um drei يعني الثالثة تماماً وتأخّرك عنها اعتذارٌ واجب، وgegen drei يمنحك هامشاً معلَناً. اختيار الحرف إذاً وعدٌ ضمنيّ — وهذه هي الدقّة الألمانية في اللغة قبل السلوك.",
      table: {
        title: "حروف المدى الزمنيّ",
        columns: ["الحرف", "المعنى", "مثال"],
        rows: [
          { label: "von … bis …", cells: ["من … إلى … (مدى مغلق)", "Von neun bis zwölf."] },
          { label: "ab", cells: ["ابتداءً من (مدى مفتوح)", "Ab Montag habe ich Zeit."] },
          { label: "bis", cells: ["حتّى (نهاية فقط)", "Ich arbeite bis sechs."] },
          { label: "gegen", cells: ["نحو، تقريباً", "Ich komme gegen drei."] },
          { label: "zwischen … und …", cells: ["بين … و…", "Zwischen zwei und vier."] },
        ],
      },
      examples: [
        { de: "Guten Tag, ich hätte gern einen Termin.", ar: "نهارك سعيد، أودّ موعداً." },
        { de: "Die Praxis ist von acht bis achtzehn Uhr geöffnet.", ar: "العيادة مفتوحة من الثامنة إلى السادسة مساءً." },
        { de: "Ab Montag habe ich wieder Zeit.", ar: "ابتداءً من الاثنين أصير متفرّغاً من جديد." },
        { de: "Es tut mir leid, da kann ich nicht.", ar: "آسف، لا أستطيع في ذلك الوقت." },
        { de: "Geht es auch am Mittwoch um zehn?", ar: "هل يمكن الأربعاء في العاشرة أيضاً؟" },
        { de: "Ich komme gegen drei Uhr.", ar: "سآتي نحو الثالثة." },
        { de: "Ich muss den Termin leider absagen.", ar: "للأسف عليّ إلغاء الموعد." },
        { de: "Können wir den Termin verschieben?", ar: "هل يمكننا تأجيل الموعد؟" },
      ],
      comparisonWithArabic:
        "العربية تقول „من الثامنة إلى السادسة“ بحرفين، والألمانية von … bis بحرفين كذلك — تطابقٌ مريح. لكنّ الفخّ في ab: العربية تؤدّي معناها بـ„ابتداءً من“ أو „من“ نفسها، فيميل العربيّ إلى استعمال von في الموضعين فيقول Von Montag habe ich Zeit وهي ناقصة، لأنّ von تنتظر bis بعدها ولا تقف وحدها في المدى المفتوح.\n\nوفي الاعتذار فرقٌ ثقافيّ لا لغويّ: العربية تعتذر بالدعاء والمجاملة الطويلة، والألمانية تكتفي بـEs tut mir leid ثمّ تنتقل فوراً إلى البديل. والإطالة هنا تُفهَم تردّداً لا تهذيباً.",
      eselsbruecke:
        "**ab يفتح وbis يغلق**: تخيّل ab باباً مفتوحاً على ما بعده، وbis جداراً يقف عنده الزمن. وvon … bis غرفةٌ لها باب وجدار. أمّا gegen فسحابةٌ حول الساعة: لا تُمسك بها تماماً.",
      commonMistakes: [
        {
          wrong: "Von Montag habe ich Zeit.",
          right: "Ab Montag habe ich Zeit.",
          whyAr: "von لا تقف وحدها في المدى المفتوح، بل تنتظر bis لتُغلقه. والمدى المفتوح — ما بعد يومٍ ما إلى غير نهاية — حرفه ab وحده. ومصدر الخطأ أنّ العربية تؤدّي المعنيين بـ„من“ نفسها.",
        },
        {
          wrong: "Ich will einen Termin.",
          right: "Ich hätte gern einen Termin.",
          whyAr: "wollen تصريحٌ بالإرادة يُسمع في العيادة فظّاً كأنّك تأمر. وhätte gern صيغة مجاملة ثابتة يستعملها الألمان في كلّ طلب. وليست ترفاً: نبرتها هي التي تفتح لك الباب.",
        },
        {
          wrong: "Es tut mir leid, dort kann ich nicht.",
          right: "Es tut mir leid, da kann ich nicht.",
          whyAr: "dort ظرف مكان (هناك) بينما da هنا ظرف زمان يحيل على الموعد المذكور. وترجمة „هناك“ حرفياً تُنتج جملةً يفهم منها المخاطب أنّك تتكلّم عن مكان العيادة لا عن ساعتها.",
        },
        {
          wrong: "Ich komme um circa drei Uhr.",
          right: "Ich komme gegen drei Uhr.",
          whyAr: "um تعني الدقّة، وcirca تعني التقريب، فاجتماعهما تناقض. والألمانية أعدّت لهذا حرفاً واحداً هو gegen يحمل التقريب في ذاته دون حاجة إلى كلمة إضافية.",
        },
      ],
      relatedRuleComparison: {
        title: "um للساعة · am لليوم · von…bis للمدى",
        content:
          "رأيت um للساعة وam لليوم وim للشهر. وهذه الكتلة تضيف البُعد الرابع: **المدى** لا اللحظة. فحين تسأل Wann? تجيب بـum أو am؛ وحين تسأل **Wie lange?** (كم من الوقت؟) تجيب بـvon … bis أو ab. سؤالان مختلفان لا يُخلط جوابهما: Am Montag um neun — von neun bis zehn.",
      },
    },
  ],
  reading: {
    "id": "read-a1-09",
    "titleDe": "Ein Termin beim Zahnarzt",
    "titleAr": "موعد عند طبيب الأسنان",
    "textType": "dialog",
    "paragraphs": [
      "Nadia hat Zahnschmerzen. Sie sucht die Telefonnummer von der Zahnarztpraxis Dr. Klein und ruft an. Es ist Dienstag, der siebte April, halb neun am Morgen.",
      "Praxis Dr. Klein, guten Morgen! — Guten Morgen, mein Name ist Nadia Belhadj. Ich habe Zahnschmerzen und ich hätte gern einen Termin. — Waren Sie schon einmal bei uns? — Nein, ich bin neu hier.",
      "Kein Problem. Wann haben Sie Zeit? Wir sind von acht bis achtzehn Uhr für Sie da. — Am Montag und am Mittwoch arbeite ich bis sechs. Aber ab Donnerstag habe ich Urlaub.",
      "Dann passt der Donnerstag sehr gut. Geht es am neunten April um zehn Uhr? — Einen Moment bitte ... Nein, es tut mir leid, da kann ich leider nicht. Um zehn kommt der Techniker zu mir nach Hause.",
      "Kein Problem. Und gegen vierzehn Uhr? — Ja, das passt perfekt! Der neunte April um vierzehn Uhr. — Sehr gut. Und bringen Sie bitte Ihre Versichertenkarte mit.",
      "Vielen Dank! Und wenn ich den Termin verschieben muss? — Dann rufen Sie bitte einen Tag vorher an. Wir sagen den Termin dann ab und finden einen neuen. Bis Donnerstag, Frau Belhadj! — Bis Donnerstag!"
    ],
    "paragraphsAr": [
      "نادية تشكو ألماً في أسنانها. تبحث عن رقم هاتف عيادة الدكتور كلاين وتتّصل. اليوم الثلاثاء، السابع من أبريل، الثامنة والنصف صباحاً.",
      "عيادة الدكتور كلاين، صباح الخير! — صباح الخير، اسمي نادية بالحاج. أشكو ألماً في الأسنان وأودّ موعداً. — هل زرتِنا من قبل؟ — لا، أنا جديدة هنا.",
      "لا مشكلة. متى عندك وقت؟ نحن في خدمتك من الثامنة إلى السادسة مساءً. — الاثنين والأربعاء أعمل حتّى السادسة. لكن ابتداءً من الخميس عندي إجازة.",
      "إذاً الخميس يناسب جداً. هل يمكن في التاسع من أبريل في العاشرة؟ — لحظة من فضلك… لا، آسفة، لا أستطيع في ذلك الوقت للأسف. في العاشرة يأتي الفنّيّ إلى بيتي.",
      "لا مشكلة. وماذا عن نحو الثانية بعد الظهر؟ — نعم، هذا يناسب تماماً! التاسع من أبريل في الثانية. — ممتاز. وأحضري بطاقة التأمين من فضلك.",
      "شكراً جزيلاً! وإن اضطررت إلى تأجيل الموعد؟ — عندئذٍ اتّصلي قبله بيوم من فضلك. نلغي الموعد ونجد موعداً جديداً. إلى الخميس يا سيّدة بالحاج! — إلى الخميس!"
    ],
    "glossary": [
      {
        "de": "die Zahnschmerzen (Pl.)",
        "ar": "ألم الأسنان",
        "noteAr": "تُستعمل بالجمع دائماً: Ich habe Zahnschmerzen."
      },
      {
        "de": "die Praxis, Praxen",
        "ar": "عيادة",
        "noteAr": "عيادة الطبيب الخاصّة، لا المستشفى (das Krankenhaus)."
      },
      {
        "de": "ruft an (anrufen)",
        "ar": "يتّصل هاتفياً",
        "noteAr": "فعل منفصل: ruft … an."
      },
      {
        "de": "ich hätte gern",
        "ar": "أودّ",
        "noteAr": "صيغة الطلب المهذّبة الثابتة."
      },
      {
        "de": "von acht bis achtzehn Uhr",
        "ar": "من الثامنة إلى السادسة مساءً",
        "noteAr": "مدى مغلق: von … bis."
      },
      {
        "de": "ab Donnerstag",
        "ar": "ابتداءً من الخميس",
        "noteAr": "مدى مفتوح لا نهاية له."
      },
      {
        "de": "der Urlaub",
        "ar": "إجازة",
        "noteAr": "إجازة العمل؛ وعطلة المدرسة die Ferien."
      },
      {
        "de": "es tut mir leid",
        "ar": "آسف/آسفة",
        "noteAr": "صيغة الاعتذار المعيارية."
      },
      {
        "de": "gegen vierzehn Uhr",
        "ar": "نحو الثانية بعد الظهر",
        "noteAr": "تقريب لا تحديد."
      },
      {
        "de": "die Versichertenkarte",
        "ar": "بطاقة التأمين الصحّيّ",
        "noteAr": "يطلبها كلّ طبيب في ألمانيا."
      },
      {
        "de": "verschieben",
        "ar": "يؤجّل",
        "noteAr": "ينقل الموعد إلى وقت آخر."
      },
      {
        "de": "sagen … ab (absagen)",
        "ar": "يُلغي",
        "noteAr": "فعل منفصل: Wir sagen den Termin ab."
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Warum ruft Nadia in der Praxis an?",
        "options": [
          "Sie hat Zahnschmerzen.",
          "Sie sucht Arbeit.",
          "Sie will einen Urlaub buchen.",
          "Sie hat ihre Karte verloren."
        ],
        "correctIndex": 0,
        "errorType": "vocabulary",
        "paragraph": 0,
        "explanation": "الفقرة الأولى تقول Nadia hat Zahnschmerzen — ولهذا تتّصل بالعيادة."
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Wie lange ist die Praxis geöffnet?",
        "options": [
          "Von acht bis achtzehn Uhr",
          "Nur am Vormittag",
          "Von neun bis zwölf Uhr",
          "Ab vierzehn Uhr"
        ],
        "correctIndex": 0,
        "errorType": "preposition",
        "paragraph": 2,
        "explanation": "السكرتيرة تقول Wir sind von acht bis achtzehn Uhr für Sie da — مدى مغلق بحرفَي von … bis."
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Warum passt zehn Uhr am Donnerstag nicht?",
        "options": [
          "Ein Techniker kommt zu ihr nach Hause.",
          "Sie muss arbeiten.",
          "Sie ist im Urlaub.",
          "Die Praxis ist zu."
        ],
        "correctIndex": 0,
        "errorType": "vocabulary",
        "paragraph": 3,
        "explanation": "تقول Um zehn kommt der Techniker zu mir nach Hause — فترفض الموعد بـ es tut mir leid, da kann ich nicht."
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Wann ist der Termin am Ende?",
        "options": [
          "Am neunten April um vierzehn Uhr",
          "Am siebten April um zehn Uhr",
          "Am Montag um sechs Uhr",
          "Am neunten April um zehn Uhr"
        ],
        "correctIndex": 0,
        "errorType": "grammar",
        "paragraph": 4,
        "explanation": "الاتّفاق النهائيّ: der neunte April um vierzehn Uhr — والتاريخ ترتيبيّ بالنقطة 9."
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "instructionAr": "أجب عن السؤال بحسب النصّ:",
        "questionDe": "Was muss Nadia tun, wenn sie den Termin nicht schafft?",
        "options": [
          "Einen Tag vorher anrufen",
          "Nichts tun",
          "Eine E-Mail schreiben",
          "Am selben Tag kommen"
        ],
        "correctIndex": 0,
        "errorType": "vocabulary",
        "paragraph": 5,
        "explanation": "الجواب في الفقرة الأخيرة: Dann rufen Sie bitte einen Tag vorher an — الاتّصال قبل الموعد بيوم."
      }
    ],
    "redemittel": [
      {
        "de": "Ich hätte gern einen Termin.",
        "ar": "أودّ موعداً."
      },
      {
        "de": "Wann haben Sie Zeit?",
        "ar": "متى عندك وقت؟"
      },
      {
        "de": "Wir sind von … bis … für Sie da.",
        "ar": "نحن في خدمتك من … إلى …"
      },
      {
        "de": "Geht es am … um … Uhr?",
        "ar": "هل يمكن في … الساعة …؟"
      },
      {
        "de": "Es tut mir leid, da kann ich nicht.",
        "ar": "آسف، لا أستطيع في ذلك الوقت."
      },
      {
        "de": "Ja, das passt perfekt!",
        "ar": "نعم، هذا يناسب تماماً!"
      },
      {
        "de": "Können wir den Termin verschieben?",
        "ar": "هل يمكننا تأجيل الموعد؟"
      },
      {
        "de": "Ich muss den Termin leider absagen.",
        "ar": "للأسف عليّ إلغاء الموعد."
      }
    ],
    "discussionAr": "احكِ عن آخر موعدٍ حجزته: متى كان ومع من؟ وهل حدث أن اضطررت إلى تأجيله أو إلغائه؟ اكتب الحوار بالألمانية مستعملاً von … bis وab وgegen وثلاث عبارات من قائمة Redemittel أعلاه."
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "ترتيب موعد مع الطبيب",
        lines: [
          { speaker: "Sprechstundenhilfe", de: "Guten Tag, Praxis Dr. Weber.", ar: "نهارك سعيد، عيادة الدكتور فيبر." },
          { speaker: "Sami", de: "Guten Tag, ich möchte einen Termin.", ar: "نهارك سعيد، أريد موعداً." },
          { speaker: "Sprechstundenhilfe", de: "Wann passt es Ihnen?", ar: "متى يناسبكم؟" },
          { speaker: "Sami", de: "Am Montag oder am Dienstag, bitte.", ar: "يوم الاثنين أو الثلاثاء من فضلك." },
          { speaker: "Sprechstundenhilfe", de: "Am Montag um neun Uhr?", ar: "الاثنين في التاسعة؟" },
          { speaker: "Sami", de: "Perfekt! Um neun Uhr am Montag.", ar: "ممتاز! التاسعة يوم الاثنين." },
        ],
      },
      {
        id: "l2",
        title: "أعياد الميلاد",
        lines: [
          { speaker: "Anna", de: "Wann hast du Geburtstag?", ar: "متى عيد ميلادك؟" },
          { speaker: "Karim", de: "Am dritten August. Und du?", ar: "في الثالث من أغسطس. وأنتِ؟" },
          { speaker: "Anna", de: "Am fünfzehnten Dezember.", ar: "في الخامس عشر من ديسمبر." },
          { speaker: "Karim", de: "Im Winter! Schöne Zeit.", ar: "في الشتاء! وقت جميل." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann hat Sami den Termin?",
        questionAr: "متى موعد سامي؟",
        options: ["am Montag um neun Uhr", "am Dienstag um neun Uhr", "am Montag um zehn Uhr", "am Freitag um neun Uhr"],
        correctIndex: 0,
        explanation: "اتفقا: Um neun Uhr am Montag — الاثنين في التاسعة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann hat Karim Geburtstag?",
        questionAr: "متى عيد ميلاد كريم؟",
        options: ["am dritten August", "am fünfzehnten Dezember", "im Winter", "am 3. Mai"],
        correctIndex: 0,
        explanation: "قال كريم: Am dritten August — الثالث من أغسطس.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann hat Anna Geburtstag?",
        questionAr: "متى عيد ميلاد آنا؟",
        options: ["am fünfzehnten Dezember", "am dritten August", "am ersten Januar", "am 15. März"],
        correctIndex: 0,
        explanation: "قالت آنا: Am fünfzehnten Dezember — 15 ديسمبر.",
        errorType: "vocabulary",
      },
    ],
  },
  pronunciation: {
    id: "p1",
    title: "أصوات التقويم: ch، ng، وü",
    items: [
      { de: "Montag", ar: "الاثنين", note: "g في النهاية = ك قاطعة (تقسية الأواخر)، وo طويلة: موون-تااك" },
      { de: "Mittwoch", ar: "الأربعاء", note: "ch بعد o = خ حلقية: ميت-فوخ" },
      { de: "Donnerstag", ar: "الخميس", note: "rr مزدوجة: دونّر-شتاخ" },
      { de: "der Frühling", ar: "الربيع", note: "ü طويلة + ng = نون غُنّة واحدة (لا g منفصلة ولا خ): فريو-لينغ" },
      { de: "der Monat", ar: "الشهر", note: "o مفتوح: مو-نات" },
      { de: "der Herbst", ar: "الخريف", note: "h + r: هيربست (b لا تُنطق تقريباً)" },
    ],
    tip: "لاحظ أن g وb وd في نهاية الكلمات الألمانية تُنطق «مهموسة»: Tag = تاخ، Herbst ≈ هيربست (الباء شبه صامتة).",
    shadowing: [
      { de: "Heute ist Montag.", ar: "اليوم الاثنين.", tip: "Montag = مون-تاخ (g→خ)" },
      { de: "Am Samstag gehe ich einkaufen.", ar: "السبت أذهب للتسوق.", tip: "Samstag = زامس-تاخ" },
      { de: "Mein Geburtstag ist im Mai.", ar: "عيد ميلادي في مايو.", tip: "Geburtstag = غيبورتس-تاخ" },
      { de: "Der Termin ist am dritten Juli.", ar: "الموعد في الثالث من يوليو.", tip: "dritten = دريتِن (tr معاً)" },
    ],
  },
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب موعدك المثالي:",
      prompt: "Wann hast du Zeit? (اكتب جملة: عندي وقت يوم... في الساعة...)",
      acceptedAnswers: ["Am Montag um zehn Uhr", "Am Samstag habe ich Zeit", "Ich habe am Freitag Zeit"],
      sampleAnswer: "Am Montag um zehn Uhr habe ich Zeit.",
      explanation: "الموعد الكامل: am + يوم + um + ساعة: Am Montag um zehn Uhr.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ am أو im:",
      template: "___ Montag · ___ Mai · ___ Sommer · ___ Freitag · ___ Januar",
      blanks: [
        { correct: "Am", options: ["Am", "Im"] },
        { correct: "Im", options: ["Am", "Im"] },
        { correct: "Im", options: ["Am", "Im"] },
        { correct: "Am", options: ["Am", "Im"] },
        { correct: "Im", options: ["Am", "Im"] },
      ],
      explanation: "am + أيام، im + أشهر وفصول.",
      errorType: "preposition",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Mein Geburtstag ist am zehnten März.",
      explanation: "عيد ميلادي في العاشر من مارس — am zehnten (ترتيبي + نهاية نصب).",
      errorType: "spelling",
    },
  ],
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ Montag gehe ich zur Arbeit.",
      options: ["Am", "Im", "In", "Um"],
      correctIndex: 0,
      explanation: "مع الأيام: am Montag.",
      errorType: "preposition",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الترتيبي الصحيح:",
      questionDe: "der ___ Tag (اليوم الثالث)",
      options: ["dritte", "dreite", "dritete", "drittte"],
      correctIndex: 0,
      explanation: "3 شاذ: der dritte (دريتّه) — بدون مضاعفة القاعدة.",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل اليوم بمعناه:",
      pairs: [
        { left: "Montag", right: "الاثنين" },
        { left: "Mittwoch", right: "الأربعاء" },
        { left: "Donnerstag", right: "الخميس" },
        { left: "Sonntag", right: "الأحد" },
      ],
      explanation: "أربعة أيام أساسية — وMittwoch تعني «منتصف الأسبوع».",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Der", "ist", "Termin", "Montag", "am", "."],
      correctSentence: "Der Termin ist am Montag.",
      explanation: "الموعد يوم الاثنين: Der Termin + ist + am Montag.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "In Montag habe ich Zeit.",
      wrongWord: "In Montag",
      correctWord: "Am Montag",
      options: ["Am Montag", "Im Montag", "Um Montag", "Montag am"],
      explanation: "مع الأيام: am دائماً.",
      errorType: "preposition",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل الشهر الصحيح:",
      template: "Januar, Februar, ___, April, Mai, ___, Juli, August, September, ___, November, Dezember",
      blanks: [
        { correct: "März", options: ["März", "Mai", "Juni"] },
        { correct: "Juni", options: ["März", "Juni", "Oktober"] },
        { correct: "Oktober", options: ["Juni", "Oktober", "Dezember"] },
      ],
      explanation: "ترتيب الأشهر: März (3)، Juni (6)، Oktober (10).",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل التاريخ إلى كلمات:",
      prompt: "اكتب بالألمانية: 3. August",
      acceptedAnswers: ["der dritte August", "am dritten August", "dritte August"],
      sampleAnswer: "am dritten August",
      explanation: "التاريخ: am + dritten (ترتيبي + نهاية) + الشهر.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الفصل الصحيح:",
      questionDe: "Im ___ ist es kalt und es schneit.",
      questionAr: "في ___ يكون الجو بارداً وتتساقط الثلوج.",
      options: ["Winter", "Sommer", "Frühling", "Herbst"],
      correctIndex: 0,
      explanation: "الشتاء (Winter) بارد ومثلج.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Heute ist der dritte Mai.",
      wrongWord: "der dritte",
      correctWord: "der dritte",
      isAlreadyCorrect: true,
      options: ["der dritte", "der dritete", "der dreite", "der drei"],
      explanation: "الصيغة صحيحة! dritte شاذة لكنها هكذا — لا تغيرها.",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir treffen uns am Samstag um drei Uhr.",
      explanation: "نتقابل السبت في الثالثة — am + يوم + um + ساعة.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالصيغة الصحيحة للتاريخ:",
      template: "Heute ist ___ zweite Juni. Mein Termin ist ___ zweiten Juni.",
      blanks: [
        { correct: "der", options: ["der", "am", "im"] },
        { correct: "am", options: ["am", "der", "um"] },
      ],
      explanation: "«اليوم هو…» رفعٌ بلا حرف جرّ ⇒ der zweite. وتحديد الموعد بحرف الجر ⇒ am zweiten.",
      errorType: "preposition",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Mein Geburtstag ist am dritte Mai.",
      wrongWord: "dritte",
      correctWord: "dritten",
      options: ["dritten", "dritte", "drittes", "drei"],
      explanation: "بعد am تأخذ الصفة الترتيبية النهاية ـen: am dritten Mai.",
      errorType: "case",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "اقرأ التاريخ الألماني المكتوب بالأرقام.",
      questionDe: "Der Termin ist am 5.9.",
      questionAr: "ما التاريخ المقصود؟",
      options: [
        "الخامس من سبتمبر",
        "التاسع من مايو",
        "الخامس والتسعون",
        "من الخامس إلى التاسع",
      ],
      correctIndex: 0,
      explanation: "الألمان يكتبون اليوم أوّلاً ثم الشهر: 5.9. = الخامس من الشهر التاسع (سبتمبر).",
      optionExplanations: [
        undefined,
        "هذا الترتيب الإنجليزي/الأمريكي (شهر ثم يوم) لا الألماني.",
        "النقطتان تفصلان يوماً عن شهر ولا تصنعان عدداً واحداً.",
        "المدى يُكتب vom … bis zum …",
      ],
      errorType: "vocabulary",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال عن تاريخ اليوم:",
      tokens: ["Der", "wievielte", "ist", "heute", "?"],
      correctSentence: "Der wievielte ist heute?",
      explanation: "السؤال المعتاد عن التاريخ: Der wievielte ist heute? ويُجاب: Heute ist der …",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "حوّل الخبر إلى موعد.",
      prompt: "Heute ist der zehnte Mai. → قل إنّ لديك موعداً في ذلك اليوم (ابدأ بـ Ich habe).",
      acceptedAnswers: [
        "Ich habe am zehnten Mai einen Termin.",
        "Ich habe einen Termin am zehnten Mai.",
      ],
      sampleAnswer: "Ich habe am zehnten Mai einen Termin.",
      explanation: "الانتقال من der zehnte (رفع) إلى am zehnten (بعد حرف الجر) هو جوهر التمرين.",
      errorType: "case",
    },
    {"id": "e16", "type": "multiple-choice", "instructionAr": "اختر الحرف الصحيح للمدى الزمنيّ:", "questionDe": "Die Praxis ist ___ acht ___ achtzehn Uhr geöffnet.", "options": ["von … bis", "ab … bis", "in … zu", "um … bis"], "correctIndex": 0, "errorType": "preposition", "explanation": "المدى المغلق تركيبه ثابت: von … bis …. وab لا تُستعمل مع bis لأنّها للمدى المفتوح."},
    {"id": "e17", "type": "multiple-choice", "instructionAr": "أيّ جملة تعني أنّ الإجازة تبدأ الاثنين وتستمرّ؟", "questionDe": "Welcher Satz bedeutet: Der Urlaub beginnt am Montag und geht weiter?", "options": ["Ab Montag habe ich Urlaub.", "Bis Montag habe ich Urlaub.", "Am Montag habe ich Urlaub.", "Von Montag habe ich Urlaub."], "correctIndex": 0, "errorType": "preposition", "explanation": "ab تفتح المدى ولا تغلقه. وbis Montag تعني أنّ الإجازة تنتهي الاثنين — معنى معاكس تماماً."},
    {"id": "e18", "type": "fill-blank", "instructionAr": "أكمل بالعدد الترتيبيّ في صيغته الصحيحة:", "errorType": "grammar",
      "template": "Mein Geburtstag ist am ___ Mai, und heute ist ___ zwanzigste Mai.", "blanks": [{"correct": "dritten", "options": ["dritten", "dritte", "dreite", "dritter"], "errorType": "grammar"}, {"correct": "der", "options": ["der", "am", "den", "im"], "errorType": "article"}], "explanation": "بعد am تأتي النهاية ـen (dritten)، وفي الجملة الخبرية بالرفع تأتي الأداة der مع النهاية ـe."},
    {"id": "e19", "type": "error-correction", "instructionAr": "صحّح الخطأ في الجملة:", "wrongSentence": "Ich komme um circa drei Uhr.", "wrongWord": "um circa", "correctWord": "gegen", "options": ["gegen", "ab", "von", "bis"], "errorType": "preposition", "explanation": "um تعني الدقّة وcirca تعني التقريب، فاجتماعهما تناقض. وgegen وحدها تحمل معنى التقريب."},
    {"id": "e20", "type": "error-correction", "instructionAr": "صحّح الخطأ في الجملة:", "wrongSentence": "Es tut mir leid, dort kann ich nicht.", "wrongWord": "dort", "correctWord": "da", "options": ["da", "dann", "dort", "hier"], "errorType": "vocabulary", "explanation": "da هنا ظرف زمان يحيل على الموعد المذكور، أمّا dort فظرف مكان. والفرق بينهما يقلب معنى الاعتذار."},
    {"id": "e21", "type": "word-ordering", "instructionAr": "رتّب الكلمات لتكوّن طلب موعد مهذّباً:", "tokens": ["Ich", "hätte", "gern", "einen", "Termin", "am", "Donnerstag"], "correctSentence": "Ich hätte gern einen Termin am Donnerstag.", "errorType": "word-order", "explanation": "صيغة الطلب المهذّبة ثابتة: Ich hätte gern + المفعول به، ثمّ التحديد الزمنيّ في آخر الجملة."},
    {"id": "e22", "type": "matching", "instructionAr": "صِل كلّ حرف بمعناه الزمنيّ:", "pairs": [{"left": "von … bis …", "right": "مدى مغلق: من … إلى …"}, {"left": "ab", "right": "مدى مفتوح: ابتداءً من"}, {"left": "gegen", "right": "تقريب: نحو الساعة"}, {"left": "montags", "right": "تكرار: كلّ اثنين"}, {"left": "vom … bis zum …", "right": "بين تاريخين"}], "errorType": "preposition", "explanation": "أربعة حروف وظرف تكرار واحد يغطّون كلّ ما تحتاجه لترتيب موعد بالألمانية."},
    {"id": "e23", "type": "transformation", "instructionAr": "حوّل الجملة من تحديد يومٍ معيّن إلى عادة متكرّرة:", "prompt": "Am Montag habe ich Deutschkurs. ⇐ (كلّ اثنين)", "acceptedAnswers": ["Montags habe ich Deutschkurs.", "montags habe ich Deutschkurs."], "sampleAnswer": "Montags habe ich Deutschkurs.", "errorType": "word-order", "explanation": "ظرف التكرار يُصاغ بإضافة s إلى اسم اليوم وبحرفٍ صغير: montags. ويبقى الفعل في المركز الثاني."},
    {"id": "e24", "type": "multiple-choice", "instructionAr": "اختر الصيغة الصحيحة لسنة الميلاد:", "questionDe": "Ich bin ___ geboren.", "options": ["1995", "im 1995", "am 1995", "in 1995"], "correctIndex": 0, "errorType": "preposition", "explanation": "سنة الميلاد تُقال عاريةً بلا حرف جرّ، أو بالصيغة الكاملة im Jahr 1995. أمّا im 1995 فخليط خاطئ."},
    {"id": "e25", "type": "fill-blank", "instructionAr": "أكمل تركيب المدى بين تاريخين:", "errorType": "preposition",
      "template": "Der Kurs geht ___ ersten ___ zum zehnten Juli.", "blanks": [{"correct": "vom", "options": ["vom", "von", "ab", "am"], "errorType": "preposition"}, {"correct": "bis", "options": ["bis", "und", "zu", "auf"], "errorType": "preposition"}], "explanation": "التركيب متلازم: vom … bis zum …. من قال vom لزمه bis zum، ولا يجوز حذف zum."},
    {"id": "e26", "type": "error-correction", "instructionAr": "صحّح صيغة الطلب في العيادة:", "wrongSentence": "Guten Tag, ich will einen Termin.", "wrongWord": "will", "correctWord": "hätte", "options": ["hätte", "muss", "kann", "soll"], "errorType": "vocabulary", "explanation": "Ich will يُسمع أمراً فظّاً في العيادة. والصيغة المعيارية المهذّبة: Ich hätte gern einen Termin."},
  ],
  fehlerUndTipps: {
    mistakes: [
      { wrong: "In Montag / In Januar", right: "Am Montag / Im Januar", whyAr: "am + أيام، im + أشهر." },
      { wrong: "der dritete (تطبيق القاعدة على شاذ)", right: "der dritte", whyAr: "dritte شاذ جاهز — مثل «ثالث» في العربية." },
      { wrong: "Mittwoch تعني «الأربعاء» لكن بعضهم يقول الوسط", right: "Mittwoch = الأربعاء حرفياً «منتصف الأسبوع»", whyAr: "لا ترتبك: هي يوم الأربعاء فعلاً." },
    ],
    eselsbruecken: [
      "«am يوم، im شهر/فصل» — أو «am = على يوم (مثل الوقوف عليه)، im = داخل شهر».",
      "الشواذ الثلاثة للترتيبي: 1 erste، 3 dritte، 7 siebte — أغنية سريعة.",
    ],
    culturalNote: {
      title: "المواعيد مقدسة",
      content:
        "في ألمانيا «der Termin» (الموعد) شبه مقدس: لعيادة الطبيب، للحلاق، وحتى للزيارات. الألمان يحجزون مواعيدهم قبل أسابيع. وعندما يؤجلون يقولون: «Wir müssen einen Termin machen» — يجب أن نحدد موعداً. هذه أول كلمة يتعلمها الوافدون!",
    },
  },
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ Sommer fahre ich nach Deutschland.",
      options: ["Im", "Am", "In", "Um"],
      correctIndex: 0,
      explanation: "الفصول تأخذ im: im Sommer.",
      errorType: "preposition",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الترتيبي:",
      questionDe: "der ___ (الثالث)",
      options: ["dritte", "dreite", "dritete", "dreißigste"],
      correctIndex: 0,
      explanation: "3 = dritte (شاذ).",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["habe", "Zeit", "Am", "Freitag", "ich", "."],
      correctSentence: "Am Freitag habe ich Zeit.",
      explanation: "يوم الجمعة عندي وقت: Am Freitag + habe + ich Zeit.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Mein Geburtstag ist in Mai.",
      wrongWord: "in Mai",
      correctWord: "im Mai",
      options: ["im Mai", "am Mai", "in dem Mai", "an Mai"],
      explanation: "الشهور تأخذ im: im Mai.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الفصول بالترتيب:",
      template: "___ (ربيع) → ___ (صيف) → ___ (خريف) → ___ (شتاء)",
      blanks: [
        { correct: "der Frühling", options: ["der Frühling", "der Sommer", "der Herbst", "der Winter"] },
        { correct: "der Sommer", options: ["der Frühling", "der Sommer", "der Herbst", "der Winter"] },
        { correct: "der Herbst", options: ["der Frühling", "der Sommer", "der Herbst", "der Winter"] },
        { correct: "der Winter", options: ["der Frühling", "der Sommer", "der Herbst", "der Winter"] },
      ],
      explanation: "ترتيب الفصول: Frühling, Sommer, Herbst, Winter.",
      errorType: "vocabulary",
    },
  ],
  flashcards: [
    { id: "fc1", de: "der Termin", ar: "الموعد", example: "Ich habe einen Termin beim Arzt.", exampleAr: "عندي موعد عند الطبيب.", level: "A1" },
    { id: "fc2", de: "der Montag ... der Sonntag", ar: "أيام الأسبوع", example: "Heute ist Montag.", exampleAr: "اليوم الاثنين.", level: "A1" },
    { id: "fc3", de: "der Monat", ar: "الشهر", example: "Der Monat hat 30 Tage.", exampleAr: "الشهر فيه 30 يوماً.", level: "A1" },
    { id: "fc4", de: "die Jahreszeit", ar: "الفصل (من السنة)", example: "Meine Lieblingsjahreszeit ist der Frühling.", exampleAr: "فصلي المفضل الربيع.", level: "A1" },
    { id: "fc5", de: "der Geburtstag", ar: "عيد الميلاد", example: "Wann hast du Geburtstag?", exampleAr: "متى عيد ميلادك؟", level: "A1" },
    { id: "fc6", de: "am / im", ar: "على (يوم) / في (شهر)", example: "Am Montag, im Mai", exampleAr: "الاثنين، في مايو", level: "A1" },
    { id: "fc7", de: "der erste ... der letzte", ar: "الأول ... الأخير", example: "Der erste Monat ist Januar.", exampleAr: "الشهر الأول يناير.", level: "A1" },
    { id: "fc8", de: "die Ordinalzahl", ar: "العدد الترتيبي", example: "Der dritte Tag.", exampleAr: "اليوم الثالث.", level: "A1" },
    { id: "fc9", de: "Der wievielte ist heute?", ar: "ما تاريخ اليوم؟", example: "Der wievielte ist heute? — Der dritte Mai.", exampleAr: "ما تاريخ اليوم؟ — الثالث من مايو.", level: "A1" },
    { id: "fc10", de: "am dritten Mai", ar: "في الثالث من مايو", example: "Ich habe am dritten Mai einen Termin.", exampleAr: "لديّ موعد في الثالث من مايو.", level: "A1" },
    {"id": "fc11", "de": "ab (+ Dativ)", "ar": "ابتداءً من", "example": "Ab Montag habe ich Zeit.", "exampleAr": "ابتداءً من الاثنين أصير متفرّغاً.", "level": "A1"},
    {"id": "fc12", "de": "von … bis …", "ar": "من … إلى …", "example": "Die Praxis ist von acht bis achtzehn Uhr offen.", "exampleAr": "العيادة مفتوحة من الثامنة إلى السادسة مساءً.", "level": "A1"},
    {"id": "fc13", "de": "gegen (+ Uhrzeit)", "ar": "نحو، تقريباً", "example": "Ich komme gegen drei Uhr.", "exampleAr": "سآتي نحو الثالثة.", "level": "A1"},
    {"id": "fc14", "de": "Ich hätte gern einen Termin.", "ar": "أودّ موعداً.", "example": "Guten Tag, ich hätte gern einen Termin.", "exampleAr": "نهارك سعيد، أودّ موعداً.", "level": "A1"},
    {"id": "fc15", "de": "Es tut mir leid, da kann ich nicht.", "ar": "آسف، لا أستطيع في ذلك الوقت.", "example": "Am Montag? Es tut mir leid, da kann ich nicht.", "exampleAr": "الاثنين؟ آسف، لا أستطيع حينها.", "level": "A1"},
    {"id": "fc16", "de": "verschieben", "ar": "يؤجّل", "example": "Können wir den Termin verschieben?", "exampleAr": "هل يمكننا تأجيل الموعد؟", "level": "A1"},
    {"id": "fc17", "de": "sagt … ab (absagen)", "ar": "يُلغي", "example": "Ich muss den Termin leider absagen.", "exampleAr": "للأسف عليّ إلغاء الموعد.", "level": "A1"},
    {"id": "fc18", "de": "montags, dienstags …", "ar": "كلّ اثنين، كلّ ثلاثاء …", "example": "Montags habe ich immer Deutschkurs.", "exampleAr": "كلّ اثنين عندي درس ألمانية.", "level": "A1"},
    {"id": "fc19", "de": "die Versichertenkarte", "ar": "بطاقة التأمين الصحّيّ", "example": "Bringen Sie bitte Ihre Versichertenkarte mit.", "exampleAr": "أحضر بطاقة التأمين من فضلك.", "level": "A1"},
    { id: "fc20", de: "die Praxis", ar: "العيادة", example: "Die Praxis ist am Dienstag geschlossen.", exampleAr: "العيادة مغلقة يوم الثلاثاء.", level: "A1" },
    { id: "fc21", de: "der Zahnarzt", ar: "طبيب الأسنان", example: "Ich habe einen Termin beim Zahnarzt.", exampleAr: "عندي موعد عند طبيب الأسنان.", level: "A1" },
    { id: "fc22", de: "passen", ar: "يناسب (موعداً)", example: "Passt Ihnen Dienstag um zehn?", exampleAr: "أيناسبك الثلاثاء في العاشرة؟", level: "A1" },
    { id: "fc23", de: "das Problem", ar: "المشكلة", example: "Kein Problem, bis morgen!", exampleAr: "لا مشكلة، إلى الغد!", level: "A1" },
    { id: "fc24", de: "klein", ar: "صغير", example: "Einen kleinen Moment, bitte.", exampleAr: "لحظةً صغيرة من فضلك.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-09-1", type: "relay-instructions",
      titleAr: "انقل موعداً بالعربية لصديق",
      sourceDe: "Der Deutschkurs beginnt am Montag um 9 Uhr. Er dauert bis Freitag, jeden Tag zwei Stunden.",
      taskAr: "أخبر صديقاً بالعربية بموعد بدء الدورة ومدتها اليومية.",
      modelAnswerAr: "«تبدأ دورة الألمانية الاثنين الساعة 9. تستمر حتى الجمعة، ساعتان كل يوم.»",
      keyPointsAr: ["نقلت يوم ووقت البداية (الاثنين 9)", "نقلت مدة الدورة (حتى الجمعة)", "ذكرت الساعتين اليوميتين"],
    },
  ],
      interaction: [
    {
      id: "int-a1-09-1",
      scenarioAr: "تحجز موعداً في عيادة أو مكتب.",
      scenarioDe: "Du machst einen Termin bei einer Praxis.",
      strategyAr: "الاستراتيجية: ترتيب موعد وتأكيد الوقت.",
      rounds: [
        {
          speakerDe: "Guten Tag, Praxis Dr. Weber. Was kann ich für Sie tun?",
          speakerAr: "نهارك سعيد، عيادة د. فيبر. ماذا أفعل لك؟",
          options: [
            { de: "Ich möchte einen Termin beim Arzt machen.", ar: "أريد حجز موعد عند الطبيب.", best: true, replyDe: "Gerne. Wann passt es Ihnen?", replyAr: "بكل سرور. متى يناسبك؟" },
            { de: "Ich möchte einen Kaffee bestellen.", ar: "أريد طلب قهوة.", best: false, replyDe: "Das ist eine Arztpraxis, kein Café.", replyAr: "هذه عيادة طبية، وليست مقهى." },
          ],
        },
        {
          speakerDe: "Wann passt es Ihnen? Wir haben am Mittwoch um 10 Uhr frei.",
          speakerAr: "متى يناسبك؟ لدينا الأربعاء الساعة 10.",
          options: [
            { de: "Am Mittwoch um 10 Uhr passt mir gut.", ar: "الأربعاء الساعة 10 يناسبني جيداً.", best: true, replyDe: "Perfekt, der Termin ist reserviert.", replyAr: "ممتاز، تم حجز الموعد." },
            { de: "Ich komme am Donnerstag ohne Termin.", ar: "سآتي الخميس بدون موعد.", best: false, replyDe: "Ohne Termin geht es leider nicht.", replyAr: "بدون موعد لا يمكن للأسف." },
          ],
        },
      ],
    },
  ],

};