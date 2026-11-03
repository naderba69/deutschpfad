/**
 * a1-03 — الشرح النظري (الجزء «theorie»)
 * فُصل من a1-03.ts في الدفعة 88 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "أدوات التعريف والتنكير (der/die/das + ein/eine)",
      titleDe: "Bestimmte und unbestimmte Artikel",
      explanationAr:
        "في الألمانية للأسماء المفردة جنس نحوي: مذكّر (der)، مؤنّث (die)، أو محايد (das). احفظ الاسم مع أداته؛ فالجنس النحوي لا يطابق دائماً جنس الإنسان أو معنى الاسم. وفي حالة الرفع تأخذ الأسماء الجمع الأداة die؛ أمّا أداة الجمع فتتغير في حالات أخرى.\n\n**مؤشرات تساعد ولا تغني عن الحفظ:**\n• كثير من الأسماء المنتهية بـ‑e مؤنثة، مثل die Banane وdie Tomate وdie Suppe؛ لكن der Käse مذكّر، فلا تعتمد على النهاية وحدها.\n• اللاحقة الاشتقاقية ‑ung مؤنثة عادةً، مثل die Rechnung.\n• الأسماء المصغّرة المنتهية بـ‑chen محايدة: das Brötchen وdas Würstchen؛ وجمعها يبقى غالباً على الصورة نفسها.\n• المصدر المستعمل اسماً محايد: das Essen وdas Trinken وdas Kochen.\n\n**أداة التنكير ein/eine:** تُستعمل كثيراً عند تقديم شيء غير محدد أو غير معروف للسياق: ein Apfel، eine Banane، ein Brot. ein تأتي مع الاسم المذكر والمحايد في الرفع؛ وتظهر eine مع المؤنث. أمّا اختيار التعريف أو التنكير فيعتمد على المقصود والسياق، لا على قاعدة آلية بأن أول ذكر يكون دائماً نكرة.\n\n**بلا أداة (Nullartikel):** مع أسماء المواد عند الحديث عنها بعموم، كثيراً ما لا نضع أداة: Ich trinke Wasser. / Ich esse Brot. وإذا كان المقصود شيئاً محدداً أو معروفاً في السياق يمكن أن نقول: Das Wasser ist kalt. ولتسمية حصة أو كمية نستعمل وحدة مثل ein Glas Milch. العربية أيضاً قد تأتي بالاسم النكرة من دون أداة منفصلة؛ لذلك لا توجد مطابقة كلمة بكلمة بين النظامين.",
      whyAr:
        "معرفة أداة الاسم تساعد على اختيار أداة التعريف أو التنكير وبناء أمثلة واضحة في سياق الطعام والشراء. الأطعمة مفردات ملموسة تصلح للتدرب، مع الانتباه إلى أن الجنس النحوي يُحفظ مع كل اسم ولا يُستنتج دائماً من معناه أو نهايته. يتناول كتاب Schritte international Neu 1، في هذا الإصدار، موضوع Essen und Trinken في Lektion 3؛ وهذا مثال على ترتيب كتاب بعينه، لا قاعدة تلزم كل المناهج أو الاختبارات.",
      table: {
        title: "أدوات التعريف والتنكير (Nominativ)",
        columns: ["الجنس", "معرّف (ال)", "منكّر (واحد)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "ein", "der Apfel / ein Apfel"] },
          { label: "مؤنث", cells: ["die", "eine", "die Banane / eine Banane"] },
          { label: "محايد", cells: ["das", "ein", "das Brot / ein Brot"] },
          { label: "جمع", cells: ["die", "—", "die Äpfel"] },
        ],
      },
      examples: [
        {"de": "Das ist ein Apfel. Der Apfel ist rot.", "ar": "هذه تفّاحة. التفّاحة حمراء. (نكرة أوّلاً ثمّ معرفة)"},
        {"de": "Ich trinke gern Milch.", "ar": "أحبّ شرب الحليب. (مادّة بعموم ⟵ بلا أداة)"},
        {"de": "Das Brot ist frisch.", "ar": "الخبز طازج. (das Brot محايد)"},
        {"de": "Eine Banane, bitte!", "ar": "موزة من فضلك! (Banane تنتهي بـ‑e ⟵ مؤنّثة)"},
        {"de": "Die Äpfel sind sehr gut.", "ar": "التفّاح جيّد جداً. (جمع ⟵ die + sind)"},
        {"de": "Ein Brötchen kostet fünfzig Cent.", "ar": "الخبزة الصغيرة بخمسين سنتاً. (‑chen ⟵ محايد)"},
        {"de": "Der Kaffee ist heiß, aber das Wasser ist kalt.", "ar": "القهوة ساخنة لكنّ الماء بارد. (مذكّر ومحايد في جملة)"},
        {"de": "Ich möchte einen Tee, keinen Kaffee.", "ar": "أريد شاياً لا قهوة. (نكرة معدودة في سياق الطلب)"},
      ],
      comparisonWithArabic:
        "تستعمل العربية «الـ» للتعريف، وتدل على التنكير بطرق مختلفة منها ترك «الـ» أو التنوين؛ أما الألمانية فتختار أداةً قبل الاسم، ويجب حفظ جنس الاسم معها: der Apfel، die Banane، das Brot. لا يطابق الجنس النحوي دائماً جنس الشخص أو الشيء في الواقع؛ فـdas Mädchen مؤنث في المعنى ومحايد في القواعد.\n\nفي بعض استعمالات أسماء المواد تكون الألمانية بلا أداة: Ich trinke Wasser. ولا يعني ذلك أن كل اسم مفرد يسقط أداته؛ فقارن بين Ich esse einen Apfel (اسم معدود في النصب) وIch trinke Wasser (مادة عامة). وعند قصد كمية يمكن ذكر وحدة: ein Glas Wasser.\n\nفي هذه الوحدة، تصريف أدوات التعريف والتنكير يختلف بين الرفع والنصب في صور محددة، ولا يكفي ترجمة «الـ» أو التنوين حرفياً لاختيارها. كما أن die قد تكون أداة مؤنث مفرد أو أداة جمع؛ يساعد الفعل والسياق على معرفة العدد: Die Milch ist kalt / Die Äpfel sind frisch.",
      eselsbruecke:
        "احفظ أداة الاسم معه: der Apfel، die Banane، das Brot. النهاية ‑e مؤشر شائع على التأنيث وليست قاعدة بلا استثناء؛ و‑chen علامة موثوقة في الأسماء المصغّرة مثل das Brötchen. في الرفع، قدّم شيئاً غير محدد بـein/eine، ثم استخدم أداة التعريف إذا صار مرجعاً معروفاً في السياق؛ لا تجعل ترتيب الذكر قاعدة آلية.",
      commonMistakes: [
        {"wrong": "das Apfel", "right": "der Apfel", "whyAr": "خطأ في الجنس: der Apfel مذكّر، وجمعه die Äpfel مع تغيّر a إلى ä. احفظ أداة الاسم معه منذ البداية."},
        {"wrong": "ein Milch", "right": "Milch / ein Glas Milch", "whyAr": "Milch مؤنثة (die Milch)، لكنّها اسم مادّة في الجملة العامة: Ich trinke Milch. عند طلب حصة في مقهى قد تُستعمل eine Milch اختصاراً؛ والأوضح للمتعلم قول ein Glas Milch."},
        {"wrong": "Ich esse Apfel.", "right": "Ich esse einen Apfel.", "whyAr": "في هذه الجملة المقصود تفاحة واحدة؛ وApfel اسم مفرد معدود يأتي مفعولاً به، فنقول einen Apfel. لا يعني ذلك أن الأداة تسقط فقط مع أسماء المواد: يمكن أن نقول Ich esse Äpfel للجمع العام أو Ich esse Brot لاسم مادة."},
        {"wrong": "Die Milch sind kalt.", "right": "Die Milch ist kalt.", "whyAr": "حين تعني Milch مادة الحليب في هذه الجملة، فهي اسم مفرد مؤنث؛ لذلك يأتي الفعل ist. لا تُستنتج صيغة الجمع من die وحدها، بل راعِ الاسم والمعنى."},
      ],
      relatedRuleComparison: {
        "title": "kein: أداة نفي تتغيّر مع الاسم",
        "content": "تُصرّف kein مع الجنس والعدد والحالة، وتُنفي بها غالباً الأسماء التي تأتي بلا أداة أو مع أداة نكرة: Ich habe keinen Hunger. / Ich kaufe kein Brot. أمّا nicht فقد تنفي عبارة اسمية معرّفة أو عنصراً محدداً بحسب المقصود: Ich trinke nicht den Kaffee, sondern den Tee. لذلك لا تختصر القاعدة إلى «kein لكل الأسماء وnicht لكل ما عداها»؛ اختر الأداة وفق تركيب العبارة والمعنى المراد."
      },
    },
    {
      id: "t2",
      titleAr: "حالة النصب (Akkusativ): Ich esse einen Apfel",
      titleDe: "Der Akkusativ: häufig das direkte Objekt",
      explanationAr:
        "يُستعمل Akkusativ كثيراً لتمييز المفعول به المباشر، لكن الحالة لا تقتصر على هذا الاستخدام؛ فالفعل أو التركيب هو الذي يحددها. في هذه الوحدة نركّز على أدوات التعريف والتنكير في الرفع والنصب:\n\n| الجنس | الرفع | النصب |\n|---|---|---|\n| مذكّر | der / ein | **den / einen** |\n| مؤنّث | die / eine | die / eine |\n| محايد | das / ein | das / ein |\n| جمع | die | die |\n\nفي هذا الجدول تتغير أداة الاسم المذكر وحدها بين Nominativ وAkkusativ؛ وهذا وصف لهذه الأدوات في هذا الجدول، لا لكل العلامات الممكنة في الألمانية.\n\n**طريقة مساعدة:** في جملة بسيطة مع فعل متعدٍّ، يمكن أن تسأل Wen? (مَن؟) أو Was? (ماذا؟) للعثور على مفعول مباشر: Ich esse einen Apfel. — Was esse ich? Einen Apfel. هذا اختبار تعليمي مفيد، لكنه لا يحدد وحده كل استعمالات Akkusativ.\n\nأفعال شائعة في موضوع الطعام والشراء تأخذ مفعولاً به في النصب في هذه الأمثلة: essen، trinken، kaufen، haben، möchten، nehmen، sehen، lesen، brauchen، bestellen.\n\nمع استعمال الأفعال الرابطة مثل sein، يأتي الاسم الذي يصف الفاعل في الرفع: Er ist ein Lehrer. قارن ذلك بمفعول الفعل المتعدي: Ich sehe einen Lehrer. هنا تغيّر الأداة لأن Lehrer مفعول به في الجملة الثانية.\n\nوتغيّر بعض الأفعال حركتها الصوتية في du وer/sie/es: ich esse، du isst، er isst؛ وich nehme، du nimmst، er nimmt. احفظ صيغ الفعل مع الضمير.",
      whyAr:
        "يساعد هذا الدرس على ملاحظة دور الأداة في جمل مألوفة مثل Ich esse einen Apfel وIch möchte einen Kaffee. نركّز على الفرق بين الرفع والنصب في أمثلة محددة، ولا نزعم أن ترتيب تدريس الحالات واحد في جميع الكتب أو أن وصف Goethe/CEFR يفرض هذا التسلسل النحوي. هذا التمييز يسهّل عليك قراءة الجمل الطويلة لاحقاً، لأن الأداة تكشف وظيفة الاسم قبل أن يصل القارئ إلى الفعل.",
      table: {
        title: "تغيّر الأداة في النصب",
        columns: ["الجنس", "Nominativ (رفع)", "Akkusativ (نصب)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der / ein", "den / einen", "Ich esse einen Apfel."] },
          { label: "مؤنث", cells: ["die / eine", "die / eine", "Ich trinke die Milch."] },
          { label: "محايد", cells: ["das / ein", "das / ein", "Ich esse das Brot."] },
          { label: "جمع", cells: ["die", "die", "Ich kaufe die Äpfel."] },
        ],
      },
      examples: [
        {"de": "Ich esse einen Apfel.", "ar": "آكل تفاحة. (Apfel مذكّر في الألمانية، وأداة النكرة هنا في النصب: einen)"},
        {"de": "Er trinkt einen Kaffee und sie trinkt eine Cola.", "ar": "هو يشرب قهوة وهي تشرب كولا. (مذكّر يتغيّر، مؤنّث لا)"},
        {"de": "Wir kaufen ein Brot und Milch.", "ar": "نشتري رغيفاً واحداً وحليباً. (محايد في النصب + اسم مادّة بلا أداة)"},
        {"de": "Hast du einen Bruder?", "ar": "هل لك أخ؟ (Bruder مفعول به منصوب في هذا المثال)"},
        {"de": "Ich möchte den Käse dort, bitte.", "ar": "أريد ذاك الجبن من فضلك. (معرفة منصوبة ⟵ den)"},
        {"de": "Er ist ein Lehrer.", "ar": "هو معلّم. (الاسم الخبري بعد sein في الرفع)"},
        {"de": "Nimmst du einen Tee oder einen Saft?", "ar": "أتأخذ شاياً أم عصيراً؟ (nehmen ⟵ du nimmst، شاذّ)"},
        {"de": "Ich sehe den Kellner. Er bringt die Rechnung.", "ar": "أرى النادل. هو يُحضر الفاتورة. (منصوب ثمّ مرفوع)"},
      ],
      comparisonWithArabic:
        "تعرف العربية علامات إعراب، بينما تظهر الحالة في الألمانية على أدوات التعريف والتنكير والضمائر، وقد تتغير بعض الأسماء أيضاً في أنماط أخرى. في أمثلة هذا الدرس تحديداً نلاحظ الفرق غالباً على الأداة: أكلت تفاحةً / Ich esse einen Apfel. لا تستنتج أن الاسم الألماني لا يتغير في أي حالة أو أن كل علامة حالة تظهر بالطريقة نفسها.\n\nفي الرفع والنصب تبقى صور الأدوات المؤنثة والمحايدة والجمع متشابهة في الجدول المعروض، بينما يتغير المذكر: der→den، ein→einen. ثبات الصورة هنا لا يعني أن الاسم خرج من موقع المفعول به.\n\nمع sein الرابط نقول Er ist ein Lehrer؛ فالاسم الذي يصف الفاعل يكون في الرفع في هذا التركيب. أمّا في Ich sehe einen Lehrer فكلمة Lehrer مفعول به. ويساعد ترتيب الكلمات المعتاد على فهم الجملة، لكن السياق والعلامات النحوية يسهمان أيضاً في تحديد الوظائف.",
      eselsbruecke:
        "في أمثلة أدوات الرفع والنصب هنا، تذكّر التحولين للمذكر: der→den وein→einen. لا تضف ‑en إلى المؤنث أو المحايد أو الجمع في هذه الصيغ. وفي الجمل البسيطة قد يساعد سؤال Wen? أو Was? على العثور على المفعول المباشر؛ راعِ مع ذلك الفعل والتركيب.",
      commonMistakes: [
        {"wrong": "Ich esse ein Apfel.", "right": "Ich esse einen Apfel.", "whyAr": "خطأ شائع: der Apfel مذكّر، وفي هذا المثال يأتي مفعولاً به بعد essen؛ لذلك تتغير أداة التنكير من ein إلى einen. احفظ الاسم مع أداته، ثم اختر الصيغة بحسب موقعه في الجملة."},
        {"wrong": "Ich trinke der Kaffee.", "right": "Ich trinke den Kaffee.", "whyAr": "إذا كان المقصود قهوةً محددة، يأتي الاسم مفعولاً به في النصب: der Kaffee تصبح den Kaffee. أمّا عند الحديث عن القهوة عموماً فيصحّ أيضاً Ich trinke Kaffee بلا أداة؛ يختلف المعنى والسياق."},
        {"wrong": "Ich esse einen Banane.", "right": "Ich esse eine Banane.", "whyAr": "Banane مؤنثة؛ وفي الجدول هنا تبقى أداة المؤنث كما هي في النصب: eine. الخطأ في نهاية الأداة، لا في الاسم نفسه."},
        {"wrong": "Er ist einen Lehrer.", "right": "Er ist ein Lehrer. / Er ist Lehrer.", "whyAr": "بعد sein الرابط يأتي الخبر الاسمي في الرفع: Er ist ein Lehrer. وقد تُذكر المهنة بلا أداة أيضاً: Er ist Lehrer. قارن ذلك بمفعول Akkusativ بعد فعل متعدٍّ: Er sieht einen Lehrer."},
      ],
      relatedRuleComparison: {
        "title": "Akkusativ وDativ: حالتان مختلفتان",
        "content": "في هذا الدرس نتدرّب على Akkusativ مع أفعال شائعة، ثم تظهر حالات أخرى في مواضع لاحقة من هذا المسار. يختلف ترتيب القواعد من منهج إلى آخر؛ هذا تنظيم تعليمي محلي، وليس ترتيباً مفروضاً من CEFR أو قائمةً بقواعد كل اختبار Goethe."
      },
    },
    {
      id: "t3",
      titleAr: "الفعل haben: الملكية وتعابير الجوع والعطش",
      titleDe: "Das Verb „haben“ und Hunger/Durst",
      explanationAr:
        "**haben** فعل شائع يُستخدم للملكية ولتعابير ثابتة كثيرة. تصريفه في المضارع:\n\nich **habe** · du **hast** · er/sie/es **hat** · wir **haben** · ihr **habt** · sie/Sie **haben**\n\nالصيغتان hast وhat غير منتظمتين قياساً إلى الجذر haben؛ احفظهما مع الضمير.\n\n**الملكية:** Ich habe einen Bruder. / Sie hat ein Auto.\n\n**تعابير شائعة:** نقول Ich habe Hunger وIch habe Durst وIch habe Angst، وغالباً تأتي هذه الأسماء بلا أداة في هذه التعبيرات. ويمكن أيضاً وصف الحال بصفة مع sein: Ich bin hungrig / durstig / müde. تعلّم التعبير كاملاً، ولا تعمم شكل أداة واحداً على كل استعمال للاسم.\n\n**ملاحظة على التدريب:** مع الضمائر ich وdu وwir وihr وSie يختلف الشكل في كل مرة، لذلك تدرّب على الجدول في مجموعات صغيرة، لا بحفظ كل صيغة منفصلة عن سياقها. وفي الكتابة الرسمية تأتي Sie haben بالحرف الكبير، وهي الصيغة نفسها لجمع الضمير.\n\n**النفي في هذه الأمثلة:** نقول Ich habe keinen Hunger وIch habe keine Zeit. تستعمل kein هنا لنفي اسم غير محدد؛ وقد تأتي nicht مع عبارة اسمية معرفة إذا كان هذا هو المعنى المقصود. انتبه إلى أن keinen يوافق Hunger المذكر في النصب.",
      whyAr:
        "haben فعل عالي التواتر يفيد في التعبير عن الملكية وعن تعابير مثل Hunger haben وDurst haben. سيظهر لاحقاً أيضاً فعلاً مساعداً في بعض صيغ Perfekt؛ هذا تمهيد للمستقبل، أما هدف هذه الكتلة فهو تصريفه الأساسي واستعمالاته الحالية، لا إتقان الزمن الماضي. ولأن haben يدخل في عبارات كثيرة من الحياة اليومية، فإن إتقانه مع الضمائر يوفّر على المتعلم وقتاً طويلاً في الكلام والكتابة.",
      table: {
        title: "تصريف haben في المضارع",
        columns: ["الضمير", "haben", "مثال"],
        rows: [
          { label: "ich", cells: ["habe", "Ich habe Hunger."] },
          { label: "du", cells: ["hast", "Hast du Durst?"] },
          { label: "er/sie/es", cells: ["hat", "Er hat einen Bruder."] },
          { label: "wir", cells: ["haben", "Wir haben Zeit."] },
          { label: "ihr", cells: ["habt", "Habt ihr einen Hund?"] },
          { label: "sie/Sie", cells: ["haben", "Sie haben Hunger."] },
        ],
      },
      examples: [
        {"de": "Ich habe Hunger. Hast du auch Hunger?", "ar": "أنا جائع. وأنت أجائع أيضاً؟ (اسم ⟵ haben، بلا أداة)"},
        {"de": "Er hat Durst, aber sie ist müde.", "ar": "هو عطشان، لكنّها متعبة. (اسم ⟵ hat / صفة ⟵ ist)"},
        {"de": "Wir haben keine Zeit.", "ar": "ليس عندنا وقت. (نفي الاسم بـkeine)"},
        {"de": "Sie hat einen Kaffee.", "ar": "لديها فنجان قهوة. (Kaffee هنا حصة/مشروب معدود)"},
        {"de": "Habt ihr Geschwister? — Ja, wir haben zwei Brüder.", "ar": "ألكم إخوة؟ — نعم، لنا أخوان."},
        {"de": "Ich habe keinen Hunger. Ich bin satt.", "ar": "لستُ جائعاً. أنا شبعان. (نفيٌ منصوب + صفة مع sein)"},
        {"de": "Hast du einen Tee?", "ar": "هل لديك فنجان شاي؟ (einen Tee هنا حصة معدودة في سياق الطلب؛ أما الشاي كمادة عامة فيأتي بلا أداة)"},
        {"de": "Das Kind hat Angst.", "ar": "الطفل خائف. (تعبير شائع: Angst haben)"},
      ],
      comparisonWithArabic:
        "في العربية قد نقول «أنا جائع» أو «عندي جوع»، بينما تستعمل الألمانية التعبير الشائع Ich habe Hunger، كما تقول Ich bin hungrig بالصفة. تعلّم التركيب كما يُستعمل، ولا تترجم كل كلمة حرفياً.\n\nفي الجمل الخبرية الكاملة المعتادة يظهر فعل مصرّف في الألمانية، بخلاف كثير من الجمل الاسمية العربية؛ لكن توجد أيضاً إجابات مقتضبة وعبارات ناقصة بحسب المقام. لهذا نقارن بين جمل كاملة مثل Ich habe Hunger وIch bin müde، لا بين كل أنواع العبارات في اللغتين.\n\nعند نفي اسم غير محدد، مثل Hunger أو Zeit في هذه الأمثلة، تأتي صيغة من kein: keinen Hunger، keine Zeit. أما nicht فتستعمل لنفي الصفة أو الفعل، ويمكنها كذلك نفي عبارة محددة بحسب السياق؛ لا توجد مطابقة آلية واحدة مع أدوات النفي العربية.",
      eselsbruecke:
        "احفظ تعابير الحاجة كما ترد: Ich habe Hunger / Durst، مقابل Ich bin hungrig / durstig. وللتصريف ركّز على الصيغتين غير القياسيتين hast وhat. في أمثلة نفي الاسم هنا نقول keinen Hunger وkeine Zeit؛ وفي استعمالات أخرى يعتمد اختيار nicht أو kein على التركيب والمعنى.",
      commonMistakes: [
        {"wrong": "Ich bin Hunger.", "right": "Ich habe Hunger.", "whyAr": "في التعبير الألماني الشائع نقول Ich habe Hunger، ويمكن وصف الحال بصفة أيضاً: Ich bin hungrig. تعلّم التركيب المستعمل؛ فالترجمة الحرفية من العربية قد تقود إلى اختيار فعل غير مناسب."},
        {"wrong": "Ich habe müde.", "right": "Ich bin müde.", "whyAr": "müde صفة، وفي هذا الوصف نستخدم sein: Ich bin müde. لا تعمّم haben من تعبير Hunger haben على الصفات."},
        {"wrong": "Du hat einen Bruder.", "right": "Du hast einen Bruder.", "whyAr": "الفعل يتغير بحسب الضمير: مع du نقول hast، ومع er نقول hat. احفظ الصيغتين مع الضمير المقابل، ولا تنقل نهاية صيغة إلى الأخرى."},
        {"wrong": "Ich habe nicht Zeit.", "right": "Ich habe keine Zeit.", "whyAr": "في الجملة المحايدة التي تعني «ليس لدي وقت»، نقول Ich habe keine Zeit؛ وZeit مؤنثة في النصب. لا يعني ذلك أن nicht لا يأتي أبداً مع عبارة اسمية: يمكنه نفي عبارة محددة أو عنصر بعينه بحسب السياق، مثل Ich habe nicht die Zeit dafür."},
      ],
      relatedRuleComparison: {
        "title": "haben فعلاً كاملاً، وتمهيد موجز لـPerfekt",
        "content": "قد يظهر haben في Perfekt فعلاً مساعداً، مثل Ich habe gegessen؛ وتأتي بعض الأفعال مع sein، مثل Ich bin gegangen. هذا تمهيد فقط: اختيار الفعل المساعد يختلف باختلاف الفعل والاستعمال، وسيُشرح في موضعه. في هذه الوحدة ركّز على haben بوصفه فعلاً كاملاً في جمل الملكية وتعابير الحاجة."
      },
    },
  ];
