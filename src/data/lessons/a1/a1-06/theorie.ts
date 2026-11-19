/**
 * a1-06 — الشرح النظري (الجزء «theorie»)
 * فُصل من a1-06.ts في الدفعة 94 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "التعبير عن التفضيل: gern وmögen وLust haben",
      titleDe: "Vorlieben: gern, mögen, Lust haben",
      explanationAr:
        "للتعبير عن الهوايات والرغبات توجد تراكيب شائعة، ولا تقابل كل صيغة منها كلمة عربية واحدة في جميع السياقات.\n\n**gern / gerne:** ظرف يفيد الاستمتاع أو التفضيل، ويأتي في الجملة الخبرية البسيطة غالباً قرب الفعل: «Ich spiele gern Fußball.» ويمكن أن يتقدّم عنصر آخر مع بقاء الفعل المصرف في المركز الثاني: «Am Wochenende spiele ich gern Fußball.» لذلك لا نحفظ أن gern يجب أن يلي الفعل دائماً؛ نبدأ بالترتيب المحايد ثم نتعلّم مواقع العناصر الأخرى. صيغتا **gern** و**gerne** صحيحتان؛ ويذكر Duden أن **gerne** بارزة خصوصاً في الاستعمال الجنوبي الألماني، من دون أن تكون هناك قسمة صارمة بين المناطق.\n\nللنفي نقول **nicht gern**: «Ich lese nicht gern.» وفي المقارنة نستخدم **gern – lieber – am liebsten**: أحبّ – أفضّل – أحبّ أكثر شيء. احفظ هذه الصور الشائعة كما هي.\n\n**mögen:** في «Ich mag Musik» يتبع الفعلَ اسمٌ في Akkusativ. ويمكن أن يأتي mögen مع مصدر في بعض التراكيب، لكن عند ذكر نشاط محبّب يكون «Ich spiele gern Fußball» غالباً التعبير المحايد والأسهل لهذا المستوى؛ فلا نعدّ كل استعمال لـmögen مع مصدر خطأً.\n\n**Lust haben:** مع اسم نقول **Lust auf + Akkusativ**: «Hast du Lust auf einen Kaffee?» ومع فعل نقول **Lust haben, etwas zu tun**: «Ich habe Lust, ins Kino zu gehen.» هذان تركيبان مختلفان، فانتبه إلى وجود zu في الثاني.",
      whyAr:
        "يساعدك هذا التفريق على وصف نشاط تحب ممارسته، وشيء تفضّله، ورغبة في اقتراح أو نشاط. هذه المعاني متقاربة وتتداخل أحياناً؛ المطلوب هنا تعلّم البنى الشائعة وأمثلتها، لا افتراض ترجمة آلية واحدة لكل كلمة. ولأن هذه الصيغ تتكرر في المحادثة اليومية، فإن تعلّمها بوصفها تراكيب كاملة يمنع الترجمة الحرفية ويجعل الجملة أقرب إلى ما يقوله الألماني فعلاً.",
      table: {
        title: "طرق التعبير عن التفضيل",
        columns: ["الصيغة", "المعنى", "مثال"],
        rows: [
          { label: "الفعل + gern", cells: ["يحب أن (يفعل)", "Ich spiele gern Tennis."] },
          { label: "mögen + اسم", cells: ["يحب (شيئاً)", "Ich mag Musik."] },
          { label: "Lust haben auf", cells: ["لديه رغبة في", "Hast du Lust auf Kaffee?"] },
          { label: "nicht gern", cells: ["لا يحب أن", "Ich sehe nicht gern fern."] },
        ],
      },
      examples: [
        {"de": "Ich spiele gern Fußball.", "ar": "أحبّ لعب كرة القدم. (موضع محايد شائع لـgern)"},
        {"de": "Meine Schwester mag klassische Musik.", "ar": "أختي تحبّ الموسيقى الكلاسيكية. (mögen + اسم منصوب)"},
        {"de": "Ich lese nicht gern, aber ich höre gern Podcasts.", "ar": "لا أحبّ القراءة، لكنّي أحبّ سماع البودكاست."},
        {"de": "Hast du Lust auf einen Kaffee?", "ar": "ألديك رغبة في قهوة؟ (مع الاسم يأتي auf في هذا التركيب)"},
        {"de": "Ich trinke gern Tee. Lieber trinke ich Kaffee. Am liebsten trinke ich Wasser.", "ar": "أحبّ شرب الشاي. وأفضّل شرب القهوة. وأكثر ما أحبّه شرب الماء."},
        {"de": "Magst du Katzen? — Ja, sehr!", "ar": "أتحبّ القطط؟ — نعم كثيراً!"},
        {"de": "Ich habe Lust, ins Kino zu gehen.", "ar": "لديّ رغبة في الذهاب إلى السينما. (مع فعل ⟵ zu + مصدر)"},
        {"de": "Am Wochenende koche ich am liebsten.", "ar": "في نهاية الأسبوع أحبّ الطبخ أكثر شيء."},
      ],
      comparisonWithArabic:
        "يمكن أن تعبّر العربية عن التفضيل بصيغ متعددة مثل «أحب الموسيقى» و«أحب أن ألعب». في الألمانية نلاحظ البناء: **Ich mag Musik** مع اسم، و**Ich spiele gern Fußball** مع نشاط، و**Ich habe Lust auf einen Kaffee** مع اسم بعد auf. ليست هذه مقابلات حصرية: قد يأتي mögen مع مصدر، كما أن lieben قد يعبّر عن حب نشاط بصياغة مناسبة مثل «Ich liebe es, zu schwimmen». اختر في هذا الدرس gern بوصفه نمطاً يومياً شائعاً للأنشطة، لا بوصفه الصيغة الوحيدة الصحيحة.",
      eselsbruecke:
        "**للنشاط:** فعل مصرّف + gern (نمط محايد شائع). **للشيء:** mögen + اسم. **للرغبة:** Lust auf + اسم، أو Lust haben, etwas zu tun. وتذكّر أن موضع gern قد يتغير بحسب ترتيب الجملة.",
      commonMistakes: [
        {"wrong": "Ich gern spiele Fußball.", "right": "Ich spiele gern Fußball.", "classification": "error", "whyAr": "في الجملة الخبرية البسيطة يجب أن يبقى الفعل المصرف في المركز الثاني؛ وضع gern قبله هنا يخلّ بهذا الترتيب."},
        {"wrong": "Ich mag Fußball spielen.", "right": "Ich spiele gern Fußball.", "classification": "contextual-alternative", "whyAr": "المصدر مع mögen ممكن في بعض الاستعمالات، لكنه أقل حياداً عند ذكر هواية في هذا المثال. نفضّل نمط الفعل + gern في هذا التدريب؛ الصيغة الأولى ليست خطأً نحوياً مطلقاً."},
        {"wrong": "Ich habe Lust zu Kaffee.", "right": "Ich habe Lust auf einen Kaffee.", "classification": "error", "whyAr": "مع الاسم يأتي التعبير الشائع Lust haben auf + Akkusativ؛ أما مع الفعل فنقول Lust haben, etwas zu tun."},
        {"wrong": "Ich liebe es, zu schwimmen.", "right": "Ich schwimme sehr gern.", "classification": "contextual-alternative", "whyAr": "الجملتان صحيحتان: الأولى تعبر عن ميل أقوى، والثانية صيغة محايدة شائعة؛ لا نعرض استعمال lieben مع نشاط على أنه خطأ."},
      ],
      relatedRuleComparison: {
        "title": "gern · mögen · möchte · lieben — تراكيب مختلفة للميل والرغبة",
        "content": "**gern، mögen، möchte، lieben:** gern شائع مع نشاط («Ich koche gern»)، وmögen كثيراً ما يأتي مع اسم («Ich mag Pizza») لكنه قد يظهر أيضاً مع المصدر في سياقات محددة. **möchte** صيغة من Konjunktiv II للفعل mögen وتُستخدم كثيراً للتعبير عن رغبة أو طلب مهذب («Ich möchte einen Kaffee»). أما **lieben** فيعبّر غالباً عن تعلق أو ميل أقوى، ويمكن استعماله مع أشياء وأنشطة بصياغة سليمة. الحدود دلالية وسياقية وليست قائمة درجات ثابتة."
      },
    },
    {
      id: "t2",
      titleAr: "صيغة الأمر (Imperativ): du / ihr / Sie",
      titleDe: "Der Imperativ: Komm! Kommt! Kommen Sie!",
      explanationAr:
        "نركّز هنا على ثلاث صيغ شائعة لتوجيه الكلام: **du** لمخاطَب مألوف واحد، و**ihr** لمجموعة مألوفة، و**Sie** للمخاطَب الرسمي مفرداً أو جمعاً. توجد أيضاً صيغة اقتراح مع **wir** مثل «Gehen wir!»؛ ليست هدف هذا التدريب.\n\n**du:** تأتي صيغة الأمر غالباً بلا الضمير، مثل «Komm!» و«Geh!». وقد تظهر نهاية **-e** في صيغ مثل «Komme!» و«Gehe!»؛ وتلائم بعض الأفعال المنتهية بأصوات تجعل النطق أسهل، مثل «Warte!» و«Öffne!». لا تُنشئ الأمر آلياً بحذف -st من كل فعل، لأن الأفعال الشاذة قد تغيّر الصائت.\n\n**ihr:** صيغة الأمر تطابق صيغة المخاطب الجمع في المضارع، مع حذف ihr: «ihr kommt → Kommt!»\n\n**Sie:** المصدر + الضمير، والضمير لازم: «Kommen Sie bitte!»\n\nيُحذف du وihr عادةً، لكن يمكن ذكر أحدهما بعد الفعل للتوكيد: «Komm du jetzt!» و«Kommt ihr bitte herein!»؛ أما Sie فيبقى لازماً. في أفعال e→i/ie يبقى التغيّر في الأمر المفرد: «Iss! Lies! Nimm!»، بينما لا نستخدم الإمالة a→ä في هذه الصيغ: «Fahr! Schlaf!».\n\nوفي الفعل المنفصل تنتقل البادئة إلى آخر الجملة: «Steh auf!» و«Fang einfach an!». علامة التعجّب شائعة مع الأمر، لكن اختيارها أو استخدام النقطة يرتبط بنبرة النص وسياقه.",
      whyAr:
        "تساعدك الصيغ الثلاث على اختيار مخاطبة مناسبة في الحياة اليومية وفي التعليمات. وتظهر صيغة الأمر أيضاً على اللافتات وفي الطلبات، لكن الأمر المباشر ليس فظاً تلقائياً: النبرة والعلاقة ووجود كلمات مثل bitte وmal تؤثر في الأسلوب. ولهذا نتعلم الصيغ الثلاث بوصفها أنماطاً مرتبطة بالمخاطَب، لا قواعد منفصلة عن الموقف الذي تُستعمل فيه، فالطلب الموجّه إلى صديق يختلف عن التعليمات المكتوبة للجمهور.",
      table: {
        title: "تصريف الأمر لفعلين",
        columns: ["الضمير", "kommen", "aufstehen (منفصل)"],
        rows: [
          { label: "du", cells: ["Komm!", "Steh auf!"] },
          { label: "ihr", cells: ["Kommt!", "Steht auf!"] },
          { label: "Sie (حضرتك)", cells: ["Kommen Sie!", "Stehen Sie auf!"] },
        ],
      },
      examples: [
        {"de": "Komm bitte um acht Uhr!", "ar": "تعالَ في الثامنة من فضلك. (صيغة أمر du الشائعة من kommen)"},
        {"de": "Kommt morgen alle zu mir!", "ar": "تعالوا جميعاً غداً عندي. (ihr: التصريف نفسه بلا ضمير)"},
        {"de": "Kommen Sie bitte herein!", "ar": "تفضّل بالدخول. (Sie: الفعل ثمّ الضمير)"},
        {"de": "Lies den Text laut!", "ar": "اقرأ النصّ بصوتٍ عالٍ. (lesen ⟵ Lies، التغيّر e⟵ie باقٍ)"},
        {"de": "Fahr langsam, bitte!", "ar": "سُق ببطء من فضلك. (fahren ⟵ Fahr، الإمالة تسقط)"},
        {"de": "Steh bitte auf, der Bus kommt!", "ar": "انهض من فضلك، الحافلة قادمة. (البادئة في الآخر)"},
        {"de": "Sei bitte ruhig!", "ar": "كن هادئاً من فضلك. (sein شاذّ تماماً)"},
        {"de": "Warte mal! Ich komme sofort.", "ar": "انتظر قليلاً! سآتي حالاً. (mal تلطّف الأمر)"},
      ],
      comparisonWithArabic:
        "في العربية الفصحى تتغيّر صيغة الأمر بحسب العدد والجنس، مثل «اكتبْ/اكتبي/اكتبوا». في الألمانية لا تتغير صيغتا du وihr بحسب جنس المخاطَب، بينما توجد صيغة رسمية بـSie. وتُفهم درجة اللطف من السياق والنبرة وكلمات مثل bitte؛ لا يلزم أن يكون كل أمر مباشراً فظاً.",
      eselsbruecke:
        "**du:** صيغة أمر غالباً بلا ضمير، مع إمكان توكيده بعد الفعل. **ihr:** صيغة الجمع من المضارع بلا الضمير. **Sie:** المصدر ومعه Sie. وتدرّب على الأزواج: «Iss! / Lies!» و«Fahr!».",
      commonMistakes: [
        {"wrong": "Komm du bitte!", "right": "Komm bitte!", "classification": "contextual-alternative", "whyAr": "الصيغة المحايدة غالباً تحذف du، لكن ذكره بعد الأمر ممكن للتوكيد. لذلك لا نعرضه كخطأ نحوي؛ اختر الصيغة الأقصر ما لم تكن تريد التشديد."},
        {"wrong": "Kommen bitte!", "right": "Kommen Sie bitte!", "classification": "error", "whyAr": "إذا كنت توجّه أمراً رسمياً مباشرةً إلى شخص، فصيغة Sie تحتاج الضمير: «Kommen Sie bitte!». قد تُستخدم صيغ المصدر في بعض اللافتات، لكنها ليست الصيغة الشخصية المستهدفة هنا."},
        {"wrong": "Fähr langsam!", "right": "Fahr langsam!", "classification": "error", "whyAr": "في أمر du من fahren نقول Fahr(e)! لا Fähr!؛ الإمالة الظاهرة في fährst/fährt لا تبقى هنا."},
        {"wrong": "Steht bitte auf! (موجّه إلى شخص واحد بصيغة du)", "right": "Steh bitte auf!", "classification": "error", "whyAr": "Steht صيغة الجمع المألوف ihr؛ عند توجيه الكلام إلى شخص واحد بصيغة du استخدم Steh(e)!."},
      ],
      relatedRuleComparison: {
        "title": "du · ihr · Sie — نظام المخاطبة ومتى تستعمل أيّاً منها",
        "content": "تُستخدم **du** في مخاطبة شخص مألوف واحد، و**ihr** لمجموعة مألوفة، و**Sie** في المخاطبة الرسمية. تتبع أعراف العمل والمنطقة والسياق؛ في موقف رسمي أو مع شخص لا تعرفه، تكون Sie غالباً بداية مهذبة، ثم اتبع الطريقة التي يقترحها الطرف الآخر أو يوضحها المكان. فعل **duzen** يعني مخاطبة شخص بـdu، و**siezen** بـSie. ويمكن استخدام «Gehen wir!» لاقتراح أن نقوم بشيء معاً."
      },
    },
    {
      id: "t3",
      titleAr: "تغيّر الصائت في بعض الأفعال الشائعة",
      titleDe: "Stammvokalwechsel: essen – isst, lesen – liest, fahren – fährst",
      explanationAr:
        "تُظهر بعض الأفعال الشائعة تغيّراً في صائت الجذر مع **du** و**er/sie/es** في المضارع. نعرض ثلاثة أنماط مألوفة: **e→i** مثل «essen – isst»، و**e→ie** مثل «lesen – liest»، و**a→ä** مثل «fahren – fährst».\n\nهناك أفعال أخرى تتبع هذه الأنماط، مثل sprechen – sprichst، geben – gibst، schlafen – schläfst. لكن التغيير لا يحدث في كل فعل غير منتظم، ولا تكفي قاعدة طول الصائت للتنبؤ بكل صورة؛ فـnehmen مثلاً يصبح «du nimmst». تعلّم الفعل مع صيغته المستعملة في الجملة.\n\nفي الأفعال الواردة هنا تكون الصيغة المتغيرة عادةً مع du وer/sie/es، بينما نقول «ich esse / wir essen» و«ich lese / wir lesen» و«ich fahre / wir fahren». هذا وصف لهذه المجموعة من الأفعال، لا قاعدة شاملة لكل الأفعال الألمانية غير المنتظمة.\n\nبعد sibilant في بعض الأفعال لا نضاعف s في صيغة du: «du isst»، «du liest»، «du heißt». لذلك تتطابق du وer في هذه الأمثلة، لكنهما لا تتطابقان في كل الأفعال؛ قارن «du sprichst» و«er spricht». ولأن كل صيغة تقوم على ضمير محدد، فالتغيير الصوتي لا ينتقل من صيغة إلى أخرى ولا يُعمَّم على الجمع، ولهذا نحفظ الفعل مع كل ضمير على حدة.",
      whyAr:
        "هذه صيغ كثيرة الظهور في موضوع الهوايات والأنشطة اليومية. والهدف أن تميّزها وتستخدمها في أمثلة مألوفة، مع حفظ الصيغة لكل فعل بدلاً من تعميم نمط واحد على جميع الأفعال. ولأن تغيّر الحرف الصائت في بعض الأفعال يتكرر مع أفعال يومية، فإن معرفة الصيغ الخاصة بـdu وer تمنعك من أخطاء متكررة في الكلام اليومي وفي الكتابة البسيطة.",
      table: {
        title: "تغيّر الصوت في أشهر الأفعال اليومية",
        columns: ["الفعل", "ich", "du", "er/sie/es", "التغيير"],
        rows: [
          { label: "essen (يأكل)", cells: ["esse", "isst", "isst", "e → i"] },
          { label: "lesen (يقرأ)", cells: ["lese", "liest", "liest", "e → ie"] },
          { label: "sprechen (يتكلم)", cells: ["spreche", "sprichst", "spricht", "e → i"] },
          { label: "treffen (يقابل)", cells: ["treffe", "triffst", "trifft", "e → i"] },
          { label: "fahren (يقود/يركب)", cells: ["fahre", "fährst", "fährt", "a → ä"] },
          { label: "schlafen (ينام)", cells: ["schlafe", "schläfst", "schläft", "a → ä"] },
        ],
      },
      examples: [
        {"de": "Isst du gern Couscous? — Ja, sehr gern!", "ar": "أتحبّ أكل الكسكسي؟ — نعم كثيراً! (essen ⟵ isst)"},
        {"de": "Er liest jeden Abend eine Stunde.", "ar": "يقرأ ساعةً كلّ مساء. (lesen ⟵ liest، e ⟵ ie)"},
        {"de": "Du sprichst schon sehr gut Deutsch!", "ar": "أنت تتكلّم الألمانية جيّداً جدّاً! (sprechen ⟵ sprichst)"},
        {"de": "Sie fährt jeden Tag mit dem Fahrrad zur Arbeit.", "ar": "تذهب إلى العمل بالدرّاجة كلّ يوم. (fahren ⟵ fährt)"},
        {"de": "Nimmst du Zucker in den Kaffee?", "ar": "أتضع سكّراً في القهوة؟ (nehmen ⟵ nimmst — تغيّر بنيويّ)"},
        {"de": "Ich esse viel, aber mein Bruder isst mehr.", "ar": "آكل كثيراً، لكنّ أخي يأكل أكثر. (ich بلا تغيّر، er بتغيّر)"},
        {"de": "Wir sehen uns morgen. — Siehst du das auch so?", "ar": "نتقابل غداً. — أتراه هكذا أيضاً؟ (wir sehen مقابل du siehst)"},
        {"de": "Schläfst du am Wochenende lange?", "ar": "أتنام طويلاً في نهاية الأسبوع؟ (schlafen ⟵ schläfst)"},
      ],
      comparisonWithArabic:
        "في العربية يتغيّر شكل الكلمة بحسب الوزن والتصريف؛ وفي الألمانية تتبدل صوائت بعض جذور الأفعال أيضاً. لكن لا توجد مطابقة مباشرة بين النظامين، كما أن نمط الفعل الألماني لا يمكن استنتاجه دائماً من المصدر. لذلك تعلّم التصريف الألماني مع كل فعل شائع. في العربية يتبع الفعل الضمير بنهاية ثابتة في الغالب، أما الألمانية فتغيّر بعض الأفعال حرفها الصائت في المفرد الثاني والثالث، لذلك تحتاج هذه الأفعال إلى حفظ مستقل.",
      eselsbruecke:
        "في هذه المجموعة راقب صيغتي du وer/sie/es، لكن تحقّق من كل فعل: **essen–isst، lesen–liest، fahren–fährt**. لا تعمم التغيير على ich وwir وihr.",
      commonMistakes: [
        {"wrong": "du esst", "right": "du isst", "classification": "error", "whyAr": "مع du يتغيّر الفعل essen إلى isst؛ أما esst فهي صيغة ihr. وتذكّر أن الصيغة المصرّفة هنا هي isst، لا النسخة التي تشبه صيغة ihr."},
        {"wrong": "er fahrt", "right": "er fährt", "classification": "error", "whyAr": "في صيغة er/sie/es من fahren نكتب الإمالة: fährt. أما wir fahren فتحتفظ بالصائت الأصلي."},
        {"wrong": "wir issen", "right": "wir essen", "classification": "error", "whyAr": "لا نعمّم تغيّر e→i على wir؛ الصيغة هي wir essen. والاستعمال الصحيح هو wir essen، لأن التغيير الصوتي لا يتبع الضمير wir."},
        {"wrong": "du nehmst", "right": "du nimmst", "classification": "error", "whyAr": "تصريف nehmen شاذ في هذه الصيغة: du nimmst. احفظه مع er nimmt وNimm!."},
      ],
      relatedRuleComparison: {
        "title": "الفعل الضعيف والفعل القوي — تمهيد للمقارنة",
        "content": "التمييز بين الأفعال الضعيفة والقوية مفيد لاحقاً: الضعيفة غالباً تبني Präteritum بـ-t(e) وPartizip II بـ-t، بينما تتغير صيغة كثير من الأفعال القوية في الماضي وPartizip II، وقد يتغير صائت بعضها في المضارع أيضاً. توجد أفعال مختلطة واستثناءات، وليس كل فعل قوي يغيّر الصائت في المضارع. في هذا المستوى احفظ أفعالاً شائعة مع صيغها، مثل «essen – isst – aß – gegessen» و«lesen – liest – las – gelesen»."
      },
    },
    {
      id: "t4",
      titleAr: "الأفعال الناقصة الأولى: können (يستطيع) وmöchte (يودّ)",
      titleDe: "Die Modalverben können und mögen: können, möchte(n)",
      explanationAr:
        "تعبّر الأفعال الناقصة عن معانٍ مثل القدرة والرغبة والضرورة والإذن أو النصيحة، ويتحدد المقصود بالسياق. نركز هنا على **können** وعلى صيغة **möchte** من الفعل mögen.\n\nفي الجملة الخبرية البسيطة يأتي الفعل الناقص مصرّفاً في المركز الثاني، ويأتي الفعل الرئيسي في صورة مصدر مجرد في آخر الجملة: «Ich kann sehr gut schwimmen.» و«Wir möchten am Samstag Fußball spielen.» لا نضع **zu** بين الفعل الناقص والمصدر في هذا التركيب.\n\nتصريف können غير منتظم: ich kann · du kannst · er/sie/es kann · wir können · ihr könnt · sie/Sie können. أما **möchte** فهي صيغة Konjunktiv II من mögen، وتُستخدم كثيراً للتعبير عن رغبة أو طلب مهذب: ich möchte · du möchtest · er/sie/es möchte · wir möchten · ihr möchtet · sie/Sie möchten. مع اسم نقول «Ich möchte einen Kaffee»؛ ومع فعل نقول «Ich möchte schwimmen».\n\nتكون **möchte** غالباً ألطف من **will** في الطلبات، لكن **will** ليست خطأً نحوياً ولا تكون فظةً في كل سياق؛ فهي تعبّر بوضوح أكبر عن الإرادة أو النية، وتؤثر النبرة والمقام في وقعها. ويمكن حذف المصدر إذا كان مفهوماً من السياق، مثل «Ich möchte einen Kaffee» أو «Kannst du Deutsch?»؛ غالباً ما يُفهم trinken أو sprechen.",
      whyAr:
        "تمكّنك هذه التراكيب من الانتقال من ذكر الفعل إلى وصف القدرة عليه أو الرغبة فيه. ابدأ بجمل قصيرة ومألوفة، ولاحظ أن الفعل الناقص يتغير مع الضمير بينما يبقى المصدر في نهاية الجملة الخبرية البسيطة. ولأن الأفعال الناقصة تغيّر شكلها مع كل ضمير، فإن حفظ صيغها مع ich وdu وwir يقلل الأخطاء ويمنحك أساساً ثابتاً قبل تعلّم الأفعال الأخرى في الجملة.",
      table: {
        title: "تصريف können وmöchten (الجزء الأول)",
        columns: ["الضمير", "können", "möchten", "مثال"],
        rows: [
          { label: "ich", cells: ["kann", "möchte", "Ich kann schwimmen."] },
          { label: "du", cells: ["kannst", "möchtest", "Kannst du Tennis spielen?"] },
          { label: "er/sie/es", cells: ["kann", "möchte", "Er möchte Fußball spielen."] },
          { label: "wir", cells: ["können", "möchten", "Wir können heute kommen."] },
          { label: "ihr", cells: ["könnt", "möchtet", "Ihr könnt mitkommen."] },
          { label: "sie/Sie", cells: ["können", "möchten", "Können Sie mir helfen?"] },
        ],
      },
      examples: [
        {"de": "Ich kann sehr gut schwimmen.", "ar": "أستطيع السباحة جيّداً جدّاً. (المصدر في الآخر بلا zu)"},
        {"de": "Kannst du morgen um acht kommen?", "ar": "أتستطيع المجيء غداً في الثامنة؟"},
        {"de": "Ich möchte bitte einen Kaffee mit Milch.", "ar": "أودّ قهوةً بالحليب من فضلك. (المصدر محذوف لوضوحه)"},
        {"de": "Wir möchten am Samstag Fußball spielen.", "ar": "نودّ لعب كرة القدم يوم السبت."},
        {"de": "Er kann sehr gut kochen, aber er kocht selten.", "ar": "يُحسن الطبخ كثيراً، لكنّه نادراً ما يطبخ."},
        {"de": "Kannst du Arabisch? — Ja, ein bisschen.", "ar": "أتُحسن العربية؟ — نعم قليلاً. (können + لغة، بلا مصدر)"},
        {"de": "Möchtest du mitkommen? — Gern!", "ar": "أتودّ المجيء معنا؟ — بكلّ سرور! (الفعل المنفصل يبقى موحّداً)"},
        {"de": "Ich kann heute leider nicht kommen.", "ar": "لا أستطيع المجيء اليوم للأسف. (nicht قبل المصدر)"},
      ],
      comparisonWithArabic:
        "يمكن التعبير بالعربية عن القدرة بـ«أستطيع السباحة» أو «أستطيع أن أسبح». في الألمانية نقول «Ich kann schwimmen» بمصدر مجرد من دون zu بعد الفعل الناقص. وللتعبير عن طلب أو رغبة يمكن أن تقابل möchte كلمة «أودّ» أو «أرغب»، لكن الاختيار يتغير بحسب السياق. وفي العربية تتغيّر الصيغة مع الضمير أيضاً، لكن الأفعال الناقصة في الألمانية تحتفظ بتصريف يختلف عن الأفعال العادية، لذلك نقارنها بنظائر عربية تقريبية ولا نعتبرها تطابقاً تاماً.",
      eselsbruecke:
        "**الفعل الناقص مصرّف، والمصدر بلا zu في نهاية الجملة الخبرية البسيطة.** مثال: «Ich kann gut kochen.» وللطلب بصيغة ألطف غالباً: «Ich möchte einen Tee, bitte.»",
      commonMistakes: [
        {"wrong": "Ich kann zu schwimmen.", "right": "Ich kann schwimmen.", "classification": "error", "whyAr": "بعد können في هذا التركيب يأتي المصدر المجرد بلا zu. فالجملة الصحيحة Ich kann schwimmen، والتركيب مع zu يحتاجه الفعل في حالات أخرى لا في هذا الاستعمال."},
        {"wrong": "du können", "right": "du kannst", "classification": "error", "whyAr": "الفعل الناقص مصرّف مع الضمير: du kannst. ولذلك نقول du kannst مع du، ونقول wir können مع الجمع."},
        {"wrong": "Ich möchte zu schwimmen gehen.", "right": "Ich möchte schwimmen gehen.", "classification": "error", "whyAr": "لا تأتي zu قبل المصدر الذي يتبعه الفعل الناقص möchte؛ نقول möchte schwimmen gehen."},
        {"wrong": "Ich will einen Kaffee.", "right": "Ich möchte einen Kaffee, bitte.", "classification": "contextual-alternative", "whyAr": "الجملة الأولى صحيحة نحوياً وقد تبدو مباشرة في طلب المقهى؛ الثانية غالباً ألطف في هذا المقام. النبرة والسياق مهمان، فلا نصف will بأنها فظة دائماً."},
      ],
      relatedRuleComparison: {
        "title": "الأفعال الناقصة الستّة — خريطةٌ كاملة وفروقٌ دقيقة",
        "content": "الأفعال الناقصة الشائعة هي können، dürfen، müssen، sollen، wollen، mögen/möchte. على نحو مبسط: können للقدرة أو الإمكان، dürfen للإذن أو المنع، müssen للضرورة، sollen لتوقع أو طلب من مصدر آخر، wollen للنية، وmöchten للرغبة أو الطلب. تتداخل المعاني وتختلف بحسب السياق؛ ومن المفيد التمييز بين «Du darfst nicht rauchen» (ممنوع) و«Du musst nicht rauchen» (لست مضطراً)."
      },
    },
    {
      id: "t5",
      titleAr: "الماضي الأول: war (كان) وhatte (كان يملك)",
      titleDe: "Das erste Präteritum: war und hatte",
      explanationAr:
        "**war** صيغة Präteritum من sein، و**hatte** صيغة Präteritum من haben. نستخدمهما لوصف مكان أو حالة أو امتلاك في الماضي: «Am Wochenende war ich im Park.» و«Ich hatte gestern keine Zeit.»\n\nالتصريف: ich war · du warst · er/sie/es war · wir waren · ihr wart · sie/Sie waren؛ وich hatte · du hattest · er/sie/es hatte · wir hatten · ihr hattet · sie/Sie hatten. في Präteritum تتطابق عادةً صيغة ich وer/sie/es في هذين الفعلين، كما في أمثلة كثيرة أخرى.\n\nمن التراكيب الشائعة «Ich hatte Hunger/Zeit/Angst»؛ ويمكن أيضاً أن نقول «Ich war hungrig». الأولى تستخدم اسماً مع haben، والثانية صفة مع sein، وكلتاهما صحيحة.\n\nتظهر في الألمانية أيضاً صيغة Perfekt، مثل «Ich habe gestern gekocht». يغلب Perfekt في كثير من المحادثات غير الرسمية، بينما يظهر Präteritum بكثرة في السرد والكتابة؛ لكن التوزيع ليس قاعدة مطلقة، ويختلف حسب المنطقة والفعل والسياق. وتُسمع صيغ مثل «war/hatte» في الكلام أيضاً، كما أن «habe gehabt» ممكنة. في هذا الدرس نتدرب على صيغتي war وhatte لفهمهما واستخدامهما في جمل قصيرة.",
      whyAr:
        "تفيدك war وhatte في وصف عطلة نهاية أسبوع أو حالة سابقة بجمل قصيرة. تعلّم تصريفهما بوصفهما فعلين شائعين، مع تذكّر أن الحديث عن الماضي بالألمانية لا يقتصر عليهما وأن هناك صيغاً أخرى ستظهر في النصوص. ولأن هاتين الصيغتين تظهران كثيراً في الحديث عن الأمس، فإن التمييز بين war وwarst وhatte يحمي الجملة من الخلط بين الأزمنة والضمائر في القصص القصيرة.",
      table: {
        title: "تصريف war وhatte في الماضي",
        columns: ["الضمير", "war (كان)", "hatte (كان يملك)"],
        rows: [
          { label: "ich", cells: ["war", "hatte"] },
          { label: "du", cells: ["warst", "hattest"] },
          { label: "er/sie/es", cells: ["war", "hatte"] },
          { label: "wir", cells: ["waren", "hatten"] },
          { label: "ihr", cells: ["wart", "hattet"] },
          { label: "sie/Sie", cells: ["waren", "hatten"] },
        ],
      },
      examples: [
        {"de": "Wie war dein Wochenende? — Es war sehr schön!", "ar": "كيف كانت عطلتك؟ — كانت جميلةً جدّاً!"},
        {"de": "Am Samstag war ich mit Freunden im Park.", "ar": "كنت السبت مع أصدقاء في الحديقة."},
        {"de": "Ich hatte gestern leider keine Zeit.", "ar": "لم يكن لديّ وقت أمس للأسف. (kein مع الاسم النكرة)"},
        {"de": "Warst du schon einmal in Deutschland?", "ar": "أسبق أن كنت في ألمانيا؟ (السؤال بالقلب)"},
        {"de": "Wir waren am Sonntag im Kino. Der Film war lang.", "ar": "كنّا الأحد في السينما. كان الفيلم طويلاً."},
        {"de": "Ich hatte großen Hunger nach dem Sport.", "ar": "كنت جائعاً جدّاً بعد الرياضة. (اسم لا صفة)"},
        {"de": "Als Kind hatte ich einen Hund.", "ar": "كان لديّ كلب حين كنت طفلاً."},
        {"de": "Das Wetter war schlecht, aber wir hatten trotzdem Spaß.", "ar": "كان الجوّ سيّئاً، لكنّنا استمتعنا رغم ذلك."},
      ],
      comparisonWithArabic:
        "يمكن تقريب war من «كان» وhatte من «كان لديه/كان عنده»، لكن المقابلة ليست حرفية في كل تعبير. مثلاً «Ich hatte Hunger» تستعمل الاسم Hunger، بينما «Ich war hungrig» تستعمل الصفة hungrig؛ كلاهما صحيح. ركّز على التركيب الألماني في المثال. في العربية نستعمل صيغاً مختلفة للماضي بحسب الفاعل، أما هنا فتظهر war وwarst وhatte بوصفها صيغ ماضٍ شائعة يحتاجها المتعلم في سرد أحداث قصيرة، ونركّز على الاستعمال اليومي لا على كل تفاصيل الأزمنة.",
      eselsbruecke:
        "**war** مع المكان أو الصفة، و**hatte** مع الملكية وبعض الأسماء مثل Hunger أو Zeit: «Ich war im Park», «Ich hatte Zeit». ويمكن أيضاً استعمال صفة مثل hungrig مع war.",
      commonMistakes: [
        {"wrong": "ich warst", "right": "ich war", "classification": "error", "whyAr": "warst تخص du، أما صيغة ich فهي war. فالماضي البسيط لـsein مع ich هو war، لا warst."},
        {"wrong": "du war", "right": "du warst", "classification": "error", "whyAr": "صيغة du من sein في Präteritum هي warst. فنقول du warst، ولا نستعمل war مع du."},
        {"wrong": "Ich habe gestern keine Zeit gehabt.", "right": "Ich hatte gestern keine Zeit.", "classification": "contextual-alternative", "whyAr": "الصيغتان صحيحتان؛ يركز هذا التدريب على Präteritum hatte، بينما Perfekt habe ... gehabt ممكن في الاستعمال."},
        {"wrong": "Ich war Hunger.", "right": "Ich hatte Hunger.", "classification": "error", "whyAr": "في هذا المعنى نستخدم الاسم Hunger مع haben؛ وإذا أردت صفة فقل «Ich war hungrig». كلتا الصيغتين الصحيحتين تعبّران عن الجوع."},
      ],
      relatedRuleComparison: {
        "title": "Präteritum مقابل Perfekt — أيّ ماضٍ تستعمل ومتى؟",
        "content": "يتحدث Präteritum وPerfekt عن الماضي، لكن اختيارهما يتأثر بنوع النص والسجل والمنطقة والسياق؛ ليس الفرق مجرد قاعدة «كتابة مقابل كلام» ولا هما قابلان للاستبدال في كل جملة. يغلب Perfekt في كثير من المحادثات اليومية، ويشيع Präteritum في السرد المكتوب، كما تستعمل صيغ مثل war وhatte في الكلام أيضاً. وتختلف العادات الإقليمية؛ لذلك نعرض هنا صيغة Präteritum للأفعال sein/haben من دون الادعاء أن صيغ Perfekt المقابلة خطأ."
      },
    },
  ];
