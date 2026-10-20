/**
 * a2-08 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-08.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المقارنة والتفضيل (Komparativ und Superlativ)",
      titleDe: "schnell, schneller, am schnellsten",
      explanationAr: `تُبنى المقارنة غير المتساوية غالباً بإضافة ‎-er‎ إلى الصفة ثم استعمال *als*: *Auf dieser Beispielstrecke ist der Zug schneller als der Bus.* (في هذا المسار التدريبي، القطار أسرع من الحافلة). وقد تتغير حركة الصفة أيضاً، مثل *groß → größer*؛ لذلك لا يكفي نسخ ‎-er‎ آلياً. أمّا المساواة فتأتي مثلاً في *so schnell wie* أو *genauso schnell wie*: *Der Bus ist so schnell wie der Zug.* و*als* و*wie* علامتان مختلفتان في هذين التركيبين، وليستا بديلين حرّين.

للتفضيل صيغتان ينبغي التمييز بينهما. بعد *sein* أو في استعمال خبري/ظرفي نقول *Der Zug ist am schnellsten.* وقبل اسم معرّف تتصرف الصفة بحسب الاسم والأداة: *der schnellste Zug*، *die schnellste Verbindung*. تختلف النهاية في الصيغة الثانية لأنها صفة نعتية، فلا نضع *am* قبلها ولا نتركها بلا تصريف. غالباً تأتي الصيغة الخبرية مع *am …sten*؛ وقد يلزم *e* قبل ‎-sten‎ بحسب بنية الكلمة، كما في *am schnellsten* و*am teuersten*. لا تعرض هذه الأمثلة جميع أنماط التصريف أو جميع الصفات القابلة للمقارنة.

تحتاج صفات شائعة إلى أشكال غير منتظمة أو إلى تغير في الجذر: *gut – besser – am besten*، و*viel – mehr – am meisten*. أمّا *gern – lieber – am liebsten* فهو تدرّج شائع في التعبير عن التفضيل، مع أن *gern* ظرف/كلمة تفضيل لا صفة عادية. في المثال *Ich fahre lieber mit dem Zug als mit dem Bus* لا يحكم *als* حالة الاسم؛ فـ*mit* هو الذي يطلب Dativ في الطرفين. وحدّ المقارنة يُفهم من السياق: هذه بيانات تمرين خيالية، ولا تثبت أن وسيلة ما أسرع أو أرخص دائماً.`,
      whyAr: `تساعدك المقارنة على نقل معلومة محددة، مثل الفرق بين وقت رحلتين في جدول تدريبي أو تفضيل شخص لوسيلة نقل؛ لكنها لا تضمن أن المقارنة صحيحة في العالم الحقيقي ما لم تتوافر بيانات. يشرح Duden أن Komparativ يُبنى في كثير من الصفات بإضافة ‎-er‎، وأن المقارنة غير المتساوية تُربط عادةً بـ*als*، كما يسجل أن Superlativ يأتي خبراً بصيغة *am …sten* أو نعتاً قبل الاسم بصيغة متصرفة. ويورد أشكالاً غير منتظمة مثل *gut – besser – am besten* و*viel – mehr – am meisten*، وكذلك التدرّج الاستعمالي *gern – lieber – am liebsten*. لذلك نتمرّن على الشكل والسياق معاً، لا على قاعدة مختزلة تقول إن كل صفة تتبع نموذجاً واحداً.

المقابل العربي «أسرع من» يساعد على فهم معنى *schneller als*، لكنه لا يجعل بناء اللغتين متطابقاً صرفياً: العربية قد تستخدم وزن «أفعل»، والألمانية تغيّر الصفة وتضع أداة مقارنة. كذلك لا تساوي *als* بحرف جر عربي في كل سياق؛ فهي هنا أداة ربط للمقارنة، ولا تفرض وحدها حالة الاسم. `,
      table: {
        title: "نمط المقارنة والتفضيل — أمثلة لا تقيس سرعة حقيقية",
        columns: ["الصفة أو الكلمة", "مقارنة/مساواة", "تفضيل"],
        rows: [
          { label: "schnell", cells: ["schneller als / so schnell wie", "am schnellsten; der schnellste Zug"] },
          { label: "groß", cells: ["größer als", "am größten; die größte Stadt"] },
          { label: "teuer", cells: ["teurer als", "am teuersten"] },
          { label: "gut", cells: ["besser als", "am besten (غير منتظم)"] },
          { label: "viel", cells: ["mehr als", "am meisten (غير منتظم)"] },
          { label: "gern", cells: ["lieber … als …", "am liebsten (تفضيل) "] },
        ],
      },
      examples: [
        { de: "Auf dieser Beispielstrecke ist der Zug schneller als der Bus.", ar: "في هذا المسار التدريبي، القطار أسرع من الحافلة." },
        { de: "Der Bus ist so schnell wie der Zug.", ar: "الحافلة سريعة بقدر القطار." },
        { de: "Zug C ist im Übungsfahrplan am schnellsten (2 Std. 20 Min.).", ar: "في جدول التدريب، القطار C هو الأسرع (الرحلة ساعتان و20 دقيقة)." },
        { de: "Das ist die schnellste Verbindung im Beispiel.", ar: "هذه أسرع رحلة في المثال." },
        { de: "Dieses Ticket ist im Beispiel günstiger als das andere.", ar: "هذه التذكرة أقل كلفة من الأخرى في المثال." },
        { de: "Ich fahre lieber mit dem Zug als mit dem Bus.", ar: "أفضل السفر بالقطار على السفر بالحافلة." },
        { de: "Am liebsten reise ich mit dem Zug.", ar: "أفضّل السفر بالقطار أكثر من غيره." },
        { de: "In dieser fiktiven Auswahl ist das Taxi am teuersten.", ar: "في هذه المجموعة الخيالية، سيارة الأجرة هي الأعلى كلفة." },
      ],
      comparisonWithArabic: `تؤدي *schneller als* معنى «أسرع من» في المقارنة غير المتساوية، لكن الألمانية تصوغها عادةً بتغيير الصفة (*schnell → schneller*) ثم وضع *als*. وللمساواة نقول *so schnell wie*، أي «بالسرعة نفسها تقريباً» بحسب السياق؛ لا نستبدل *wie* بـ*als* في هذا النمط المعياري. أما التفضيل الخبري فيأتي مثل *am schnellsten*، والنعت قبل الاسم يتصرف مثل *der schnellste Zug*. هذه مقابلات وظيفية للمعنى، وليست ادعاءً بأن الصرف الألماني يطابق وزن «أفعل» أو حركات الإعراب في العربية. و*als* في المقارنة ليس حرف جر يفرض حالة: في *mit dem Zug als mit dem Bus* يظل الاسم في Dativ بسبب *mit* في الطرفين.`,
      eselsbruecke:
        "حدّد العلاقة أولاً: فرقٌ بين شيئين = Komparativ + als؛ تساوٍ = so + Positiv + wie؛ أعلى درجة في مجموعة = am + Superlativ، أو أداة واسم مع صفة نعتية متصرفة مثل der schnellste Zug.",
      commonMistakes: [
        {
          wrong: "Auf dieser Strecke ist der Zug schneller wie der Bus.",
          right: "Auf dieser Strecke ist der Zug schneller als der Bus. (الصيغة المعيارية المستهدفة)",
          classification: "contextual-alternative",
          whyAr: "في المقارنة غير المتساوية، الصيغة المعيارية التي يدرّب عليها الدرس هي Komparativ + als. قد تظهر *wie* بعد المقارنة في استعمالات إقليمية أو محكية، لذلك لا نصف كل ورود لها بأنه خطأ في جميع السياقات؛ لكن السؤال يطلب الصياغة المعيارية المكتوبة.",
        },
        {
          wrong: "Der Bus ist so schneller wie der Zug.",
          right: "Der Bus ist so schnell wie der Zug.",
          classification: "error",
          whyAr: "لا تجمع صيغة المقارنة *schneller* مع قالب المساواة *so … wie*. في قالب المساواة تبقى الصفة بصيغتها الأساسية: *so schnell wie*. أمّا المقارنة غير المتساوية فتكون *schneller als* من دون *so*.",
        },
        {
          wrong: "Das ist die schnellsten Verbindung.",
          right: "Das ist die schnellste Verbindung.",
          classification: "error",
          whyAr: "هنا *schnellste* صفة نعتية قبل الاسم المؤنث المفرد *Verbindung* مع الأداة *die*؛ النهاية المطلوبة في Nominativ هي ‎-e‎، لا ‎-en‎. نهاية *-sten* تظهر في صيغة *am schnellsten*، لا بهذا التركيب.",
        },
        {
          wrong: "Der Zug ist am schnellste.",
          right: "Der Zug ist am schnellsten.",
          classification: "error",
          whyAr: "الصيغة الخبرية للتفضيل في هذا النمط هي *am* مع الصفة المنتهية بـ‎-sten‎: *am schnellsten*. أمّا *schnellste* فتحتاج اسماً وأداةً قبلها، مثل *der schnellste Zug*.",
        },
        {
          wrong: "gut → guter → am gutsten",
          right: "gut → besser → am besten",
          classification: "error",
          whyAr: "تُحفظ هذه السلسلة الشائعة بوصفها غير منتظمة؛ لا يُشتقّ Komparativ من *gut* بإضافة ‎-er‎، ولا Superlativ بإضافة ‎-sten‎ إلى *gut*. استخدم *besser* و*am besten* في هذه المعاني.",
        },
      ],
      relatedRuleComparison: {
        title: "als أم wie؟ وصيغة خبرية أم نعتية؟",
        content: "في المقارنة غير المتساوية: *Der Zug ist schneller als der Bus.* وفي المساواة: *Der Bus ist so schnell wie der Zug.* كلاهما تركيب مقارن لكن الصلة مختلفة. ثم قارن التفضيل الخبري *Der Zug ist am schnellsten* بالتفضيل النعتي *der schnellste Zug*: وجود الاسم والأداة يغيّر تصريف الصفة، ولا تتحول *am schnellsten* إلى *am schnellste Zug*.",
      },
    },
    {
      id: "t2",
      titleAr: "التذاكر ومعلومات الرحلة",
      titleDe: "Fahrkarten, Fahrpläne und Verkehrsmittel",
      explanationAr: `تعرّف إلى المفردات في سياقها: *die Fahrkarte* و*das Ticket* تذكرة؛ *der Fahrplan* جدول مواعيد؛ *die Abfahrt* الانطلاق؛ و*die Ankunft* الوصول. لطلب تذكرة إلى مدينة يمكن أن تقول *Eine Fahrkarte nach München, bitte.*، وفي سؤال عن نوعها قد تسمع *Einfach oder hin und zurück?* (ذهاب فقط أم ذهاب وعودة؟). هذه صيغ تدريبية مناسبة للموقف، وليست وصفاً موحّداً لكل آلة بيع أو شركة نقل. مع أسماء المدن التي تأتي بلا أداة في هذا النمط نقول غالباً *nach Berlin* أو *nach München*؛ أما البلدان والأسماء التي تأتي مع أداة فلها أنماط أخرى، فلا نعمّم *nach* على كل وجهة.

في الجملة الرئيسية ينفصل الفعل المركب: *Der Zug fährt um 10:25 Uhr ab*، و*Der Zug kommt um 12:30 Uhr an*. يظهر الجزء المصروف في المرتبة الثانية وتأتي البادئة في آخر الجملة؛ وفي السؤال نقول *Wann fährt der Zug ab?*، بينما يبقى الفعل موصولاً في المصدر بعد فعل مساعد: *Ich muss in Bremen umsteigen.* ويعني *umsteigen* الانتقال من مركبة إلى أخرى، لا مجرد مغادرة المركبة؛ الفعل الأقرب إلى «ينزل من المركبة» هو *aussteigen*. يحكم السياق اختيار الفعلين، وقد يترجل المسافر قبل ركوب وسيلة أخرى.

يفيدك التفريق بين *Gleis* و*Bahnsteig* عند قراءة لوحة المحطة: *Gleis* هو مسار السكة/رقم المسار، و*Bahnsteig* رصيف انتظار الركاب؛ وقد تتقارب التسمية في الكلام اليومي أو في ترجمة إرشادات السفر، لذا اختر المقابل العربي وفق اللافتة. يوضح الجدول الآتي أوقاتاً ومعلومات ربط مختلقة للتدريب فقط؛ لا تستنتج منه مواعيد أو أسعاراً حقيقية. يمكن شراء التذاكر عبر آلة أو شباك في بعض المحطات، لكن القنوات المتاحة والشروط تتغير بحسب المشغّل والمكان.`,
      whyAr: `المفردات هنا مرتبطة بمهام محددة: قراءة وقت المغادرة والوصول، تمييز طلب تذكرة باتجاه واحد من طلب ذهاب وعودة، وفهم موضع تبديل وسيلة النقل. يعرّف Duden *Fahrkarte* بأنها تذكرة لاستخدام وسيلة نقل، ويورد تركيب *eine Fahrkarte nach Paris*؛ كما يبيّن أن *nach* يأتي مع أسماء مدن كثيرة في التعبير عن الوجهة. ويعرض Duden للفعل *abfahren* مثال *Der Zug fährt gleich ab* ويصفه فعلاً منفصلاً، ويشرح *umsteigen* بالانتقال من مركبة إلى أخرى. لذلك تظهر أمثلة الدرس بصيغ مثل *fährt … ab* و*in Bremen umsteigen*، لا كقائمة ترجمة كلمة بكلمة.

يسمي Duden *Bahnsteig* المساحة التي يصعد منها الركاب وينزلون، ويذكر *Gleis* ضمن الألفاظ القريبة منها؛ وفي معلومات السكك يشير *Gleis* غالباً إلى مسار أو رقمه. لذلك لا نعلّم أن اللفظين متطابقان في كل استعمال، ولا نجعل ترجمة واحدة بديلاً عن ملاحظة السياق. كذلك تختلف أسعار التذاكر وشروطها بحسب الرحلة والمشغّل والتاريخ؛ أمثلة هذا الدرس خيالية، ولا تؤكد سعراً راهناً أو توافراً فعلياً. والإجابة عن سؤال كتابي لا تثبت وحدها القدرة على شراء تذكرة شفهياً أو التنقل مستقلاً في محطة.`,
      table: {
        title: "جدول تدريبي خيالي — جميع البيانات للتدريب فقط",
        columns: ["Verbindung / الرحلة", "Abfahrt / المغادرة", "Ankunft / الوصول وملاحظة"],
        rows: [
          { label: "Zug A", cells: ["08:00 Uhr", "10:30 Uhr; Umstieg in Bremen (تبديل في بريمن)"] },
          { label: "Bus B", cells: ["08:15 Uhr", "11:00 Uhr; direkt (مباشرةً)"] },
          { label: "Zug C", cells: ["09:00 Uhr", "11:20 Uhr; Umstieg in Bremen (تبديل في بريمن)"] },
        ],
      },
      examples: [
        { de: "Eine Fahrkarte nach München, bitte.", ar: "تذكرة إلى ميونخ من فضلك." },
        { de: "Einfach oder hin und zurück?", ar: "ذهاب فقط أم ذهاب وعودة؟" },
        { de: "Der Zug fährt um 10:25 Uhr von Gleis 3 ab.", ar: "ينطلق القطار الساعة 10:25 من المسار 3 (رقم الرصيف على لوحة المحطة)." },
        { de: "In Bremen müssen wir umsteigen.", ar: "علينا تبديل القطار في بريمن." },
        { de: "Der Bus kommt um 11:00 Uhr an.", ar: "تصل الحافلة الساعة 11:00." },
        { de: "Wo finde ich den Bahnsteig?", ar: "أين أجد الرصيف؟" },
        { de: "Ich lese die Abfahrtszeit im Fahrplan.", ar: "أقرأ موعد المغادرة في جدول الرحلات." },
        { de: "Ein Ticket nach Berlin, bitte.", ar: "تذكرة إلى برلين من فضلك." },
      ],
      comparisonWithArabic: `في *Eine Fahrkarte nach Berlin* تقابل *nach* معنى «إلى» في هذا النمط، لكن لا تستنتج مقابلة ثابتة لكل وجهة أو حرف جر عربي؛ أسماء البلدان التي تأتي مع أداة قد تتطلب تركيباً مختلفاً. و*umsteigen* فعل واحد يدل على الانتقال إلى مركبة أخرى، بينما يفصل الألمانية بادئته في الجملة الرئيسية: *Wir steigen in Bremen um*. أمّا *aussteigen* فيعني النزول من المركبة، و*einsteigen* ركوبها. كذلك لا تتطابق *Gleis* و*Bahnsteig* تماماً في كل وصف: الأول مسار/رقمه والثاني رصيف، وإن تقاربت ترجمتهما في بعض لافتات السفر.`,
      eselsbruecke:
        "راقب البادئة: *Der Zug fährt um acht Uhr ab*؛ *Der Zug kommt um halb elf an*؛ *Wir steigen in Bremen um*. مع *müssen* يبقى المصدر موصولاً: *Wir müssen umsteigen*.",
      commonMistakes: [
        {
          wrong: "Ich kaufe eine Fahrkarte zu Berlin. (الوجهة مدينة)",
          right: "Ich kaufe eine Fahrkarte nach Berlin.",
          classification: "contextual-alternative",
          whyAr: "عند التعبير عن السفر إلى مدينة مثل Berlin بصيغة الوجهة المألوفة، يقال *nach Berlin*. قد تظهر *zu Berlin* في تراكيب أخرى بمعنى مختلف أو ضمن اسم علم، لذلك يحدد القوس أن المقصود مدينة وجهة في طلب تذكرة.",
        },
        {
          wrong: "Der Zug abfährt um zehn Uhr.",
          right: "Der Zug fährt um zehn Uhr ab.",
          classification: "error",
          whyAr: "*abfahren* فعل منفصل في الجملة الرئيسية: يُصرّف الفعل *fährt* في المرتبة الثانية، وتأتي البادئة *ab* في آخر الجملة. أمّا بعد فعل مساعد فنقول *Der Zug muss um zehn Uhr abfahren*، أي يبقى المصدر موصولاً.",
        },
        {
          wrong: "In Bremen steige ich aus. (أقصد أنني أبدّل إلى قطار آخر)",
          right: "In Bremen steige ich um. / In Bremen muss ich umsteigen.",
          classification: "contextual-alternative",
          whyAr: "الجملة الأولى صحيحة إذا كان المعنى أنني أنزل من المركبة، لكنها لا تعبّر وحدها عن ركوب وسيلة أخرى. إذا كان المقصود تبديل القطار أو الحافلة، فاستخدم *umsteigen*؛ أما *aussteigen* فيسمي فعل النزول.",
        },
        {
          wrong: "das Fahrkarte",
          right: "die Fahrkarte",
          classification: "error",
          whyAr: "الاسم *Fahrkarte* مؤنث في الألمانية: *die Fahrkarte*. احفظ أداة الاسم مع المفردة؛ أما *das Ticket* فيستعمل أداة محايدة، فلا تنقل أداة أحد الاسمين إلى الآخر.",
        },
        {
          wrong: "Fahrkarte nach die Schweiz (الوجهة هي سويسرا)",
          right: "eine Fahrkarte in die Schweiz",
          classification: "error",
          whyAr: "اسم البلد *die Schweiz* يأتي عادةً مع أداة التعريف؛ وعند التعبير عن الوجهة يقال *in die Schweiz*. تختلف هذه الحالة عن أسماء مدن كثيرة تأتي بلا أداة مثل *Berlin* في تركيب *nach Berlin*، فلا تعمّم حرفاً واحداً على كل الأسماء الجغرافية.",
        },
      ],
      relatedRuleComparison: {
        title: "abfahren / ankommen / umsteigen / aussteigen",
        content: "*abfahren* = ينطلق، و*ankommen* = يصل؛ كلاهما فعل منفصل في الجملة الرئيسية: *Der Zug fährt ab / kommt an*. *umsteigen* = يبدّل إلى مركبة أخرى، و*aussteigen* = ينزل من المركبة؛ لا يتبادلان المعنى لمجرد أن المتعلم يغادر مقعده. مع *müssen* نقول *Wir müssen in Bremen umsteigen*، وتبقى البادئة متصلة بالمصدر.",
      },
    },
  ];
