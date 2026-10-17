/**
 * a2-04 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-04.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "حروف الجر المكانية التسعة: الموقع والوجهة",
      titleDe: "Die neun Wechselpräpositionen: Ort und Ziel",
      explanationAr: `تسمّى هذه الحروف Wechselpräpositionen لأنها قد تأتي مع Dativ أو Akkusativ في استعمالها المكاني: in, an, auf, über, unter, vor, hinter, neben, zwischen. الفكرة العملية ليست «الجسم تحرّك أم لم يتحرّك؟»، بل وظيفة العبارة المكانية في الجملة: هل تحدد المكان الذي يوجد فيه الشيء أو يقع فيه الفعل؟ أم تحدد الوجهة التي يقصدها الفاعل؟

للسؤال عن الموقع نسأل غالباً Wo? ويأتي Dativ: Das Buch liegt auf dem Tisch. ويمكن أن يتحرك الفاعل مع بقاء Dativ إذا كان حرف الجر يحدد مكان الحركة: Ich gehe im Park spazieren. أما الوجهة المقصودة فتجيب غالباً عن Wohin? ويأتي معها Akkusativ: Ich lege das Buch auf den Tisch. / Ich gehe in den Park. لذلك لا تجعل أفعال الحركة مثل gehen أو laufen سبباً آلياً لاختيار Akkusativ؛ انظر إلى معنى العبارة المكانية في السياق.

المعاني العربية في الجدول تقريبية لهذه الأمثلة، وليست مقابلات ثابتة في كل تركيب. فـ an قد يدل على مجاورة أو تماسّ مع حافة أو سطح، وauf قد يدل على سطح أو موضع؛ ويتحدد الاختيار بحسب الشيء والعلاقة المقصودة، لا بقاعدة مطلقة عن السطح الرأسي والأفقي. واستعمالات الحروف الزمنية أو المجازية، وكذلك حروف الجر التي يفرضها فعلٌ بعينه، لا تُستنتج من هذا التقابل المكاني وحده؛ تعلّمها في تركيبها الخاص.`,
      whyAr: `يساعد هذا الفرق على وصف الأثاث والغرف وعلى فهم عبارات مثل im Keller أو ins Erdgeschoss. لكنه لا يعني أن كل حركة جسدية تأخذ Akkusativ: يستطيع المرء أن يتحرك داخل مكان ويبقى ذلك المكان موضعاً للحركة فيأخذ Dativ. كما لا يعني أن كل حرف من التسعة يترجم بكلمة عربية واحدة؛ المطلوب أن يقرأ المتعلم العلاقة التي يقصدها المتكلم، ثم يختار الحالة المناسبة في المثال المكاني المحدد.

تُقيّم هذه المعرفة في أمثلة معلومة السياق، لا بمجرد فتح الشرح. لذلك تتدرج المواد من مطابقة المعاني إلى جمل الموقع والوجهة، ويُطلب في الكتابة اختيار الأداة التي يفرضها المعنى المقصود. إذا احتمل المثال قراءتين صحيحتين، فينبغي توضيح المقصود بدلاً من تسمية البديل خطأً عاماً.`,
      table: {
        title: "أمثلة مكانية: Wo? + Dativ مقابل Wohin? + Akkusativ",
        columns: ["الحرف", "معنى تقريبي في المثال", "Wo? + Dativ", "Wohin? + Akkusativ"],
        rows: [
          { label: "in", cells: ["داخل", "in der Küche", "in die Küche"] },
          { label: "an", cells: ["عند/على تماسّ", "an der Wand", "an die Wand"] },
          { label: "auf", cells: ["على/فوق سطح", "auf dem Balkon", "auf den Balkon"] },
          { label: "über", cells: ["فوق", "über dem Sofa", "über das Sofa"] },
          { label: "unter", cells: ["تحت", "unter dem Bett", "unter das Bett"] },
          { label: "vor", cells: ["أمام", "vor dem Haus", "vor das Haus"] },
          { label: "hinter", cells: ["خلف", "hinter dem Schrank", "hinter den Schrank"] },
          { label: "neben", cells: ["بجانب", "neben dem Fenster", "neben das Fenster"] },
          { label: "zwischen", cells: ["بين", "zwischen den Regalen", "zwischen die Regale"] },
        ],
      },
      examples: [
        { de: "Der Spiegel hängt an der Wand.", ar: "المرآة معلّقة على الجدار. (موضع: Wo? → Dativ)" },
        { de: "Ich hänge den Spiegel an die Wand.", ar: "أعلّق المرآة على الجدار. (وجهة التعليق: Wohin? → Akkusativ)" },
        { de: "Die Kinder spielen hinter dem Haus.", ar: "يلعب الأطفال خلف البيت؛ هذا مكان اللعب. (Dativ)" },
        { de: "Die Kinder laufen hinter das Haus.", ar: "يركض الأطفال إلى الجهة الخلفية من البيت؛ هذه وجهة. (Akkusativ)" },
        { de: "Wir gehen im Park spazieren.", ar: "نتنزّه داخل الحديقة؛ هي مكان التنزّه، مع وجود حركة. (Dativ)" },
        { de: "Wir gehen in den Park.", ar: "نذهب إلى الحديقة؛ الحديقة هي الوجهة. (Akkusativ)" },
        { de: "Zwischen den Regalen steht eine Pflanze.", ar: "تقف نبتة بين الرفوف؛ السؤال عن موضعها. (Dativ)" },
      ],
      comparisonWithArabic: `لا تُترجم تسمية Dativ الألمانية تلقائياً إلى «جرّ» العربية؛ فهما مصطلحان في نظامين مختلفين. في أمثلة مثل «في المطبخ» و«إلى المطبخ» قد يظهر الفرق في العربية عبر حرف الجر أو السياق، بينما يبقى in في المثالين الألمانيين وتتغير أداة التعريف: in der Küche / in die Küche. هذه مقارنة بين هذين المثالين لا تعميم على كل تراكيب العربية أو لهجاتها.

يمكن استخدام المعنى العربي لفهم العلاقة، ثم العودة إلى الجملة الألمانية لاختيار الحالة. ولا يكفي تشابه الترجمة بين على/في لتقرير an أو auf، كما لا يثبت اختلاف الترجمة وحده أي حالة ألمانية؛ الاسم والتركيب والسياق عوامل مهمة.`,
      eselsbruecke: "في المعنى المكاني: اسأل Wo? عن الموقع أو مكان حدوث الفعل → Dativ؛ واسأل Wohin? عن الوجهة المقصودة → Akkusativ. حركة الفاعل وحدها لا تحسم الحالة.",
      commonMistakes: [
        { wrong: "Ich laufe im Park. (المقصود: إلى داخل الحديقة)", right: "Ich laufe in den Park.", classification: "contextual-alternative", whyAr: "الجملة الأولى ألمانية صحيحة إذا كان المقصود أن الجري يحدث داخل الحديقة؛ أما إذا كانت الحديقة وجهة الجري فالمناسب in den Park. السياق، لا الفعل laufen وحده، يحدد الحالة." },
        { wrong: "Das Bild hängt an die Wand. (أصف موضع الصورة الآن)", right: "Das Bild hängt an der Wand.", classification: "error", whyAr: "عند وصف مكان الصورة المعلّقة نجيب عن Wo? فنقول an der Wand. أما وضع الصورة أو تعليقها إلى الجدار فيقال Ich hänge das Bild an die Wand؛ وهنا العبارة وجهة." },
        { wrong: "Ich warte vor das Haus.", right: "Ich warte vor dem Haus.", classification: "error", whyAr: "في هذا المعنى يحدد vor dem Haus مكان الانتظار، لا وجهةً يتحرك إليها المنتظر؛ لذلك يأتي Dativ. إذا أردت وصف انتقال شخص إلى أمام المنزل، استخدم فعلاً يوضح ذلك المعنى وسياقاً مناسباً." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: الحروف ذات الحالة الثابتة",
        content: `هذه القاعدة تخص الحروف التسعة المذكورة عند استعمالها مكانياً، ولا تُعمّم على جميع حروف الجر. فحروف مثل mit + Dativ وfür + Akkusativ تحتفظ بالحالة التي تطلبها حتى عندما لا تصف مكاناً. وحتى الحرف نفسه قد يظهر في تركيب فعلي ذي حالة محفوظة، مثل warten auf den Bus أو teilnehmen an einem Kurs؛ فهذه تراكيب لا تعني موقعاً أو وجهةً حرة. لذلك افصل بين العبارة المكانية الحرة وبين حرف الجر الذي يختاره فعلٌ أو تركيب معجمي.`,
      },
    },
    {
      id: "t2",
      titleAr: "أفعال الوضع والاستقرار: كيف تصف الشيء وموضعه؟",
      titleDe: "Positionsverben: stellen/stehen, legen/liegen, setzen/sitzen, hängen",
      explanationAr: `تساعد أزواج مثل stellen/stehen وlegen/liegen وsetzen/sitzen على التمييز بين فعل وضع شيء في موضع وبين وصف موضعه أو هيئته. في الأمثلة المكانية المعتادة نقول: Ich stelle die Lampe neben das Sofa (إلى أين؟) ثم Die Lampe steht neben dem Sofa (أين؟). الفعل قرينة على المعنى، لكن التعدي وحده لا يفرض حالة حرف الجر؛ تظل وظيفة العبارة المكانية هي الأساس.

ترتبط الأفعال غالباً بهيئة الشيء في المشهد: stellen لشيء يوضع قائماً في هذا السياق، وlegen لشيء يوضع ممدداً، وsetzen للجلوس أو إجلاس شخص، وhängen لتعليق شيء أو وصف تعليقه. هذه تفضيلات معجمية وسياقية وليست قوانين شكلية: قد يكون كتاب واقفاً على حافته، وقد توضع زجاجة على جانبها، فتتغير ملاءمة الفعل تبعاً للهيئة المقصودة.

للفعل hängen تصريفان شائعان في التمييز المعياري بين المعنيين: الحالة hängt – hing – hat gehangen؛ وفعل التعليق hängt – hängte – hat gehängt. يذكر IDS أن الاستعمال المنطوق قد يُظهر تداخلاً بين الصيغ، لذا فهذا تمييز تعليمي مفيد لا حكم بأن كل متكلم يلتزم به في كل سياق. أما stecken فيستخدم في معنى الإدخال وفي وصف شيء موجود داخل موضع: Ich stecke den Schlüssel in die Tasche / Der Schlüssel steckt in der Tasche. هنا يتضح الفرق من المعنى والسياق، لا من شكل المضارع وحده.`,
      whyAr: `تساعد هذه الأفعال المتعلم على وصف ما يفعله الشخص وما يراه في الغرفة بدقة أكبر من ترجمة فعل عربي واحد إلى كل الحالات. لكنها لا تختار الحالة الإعرابية آلياً: قارن الوجهة auf den Tisch بالموقع auf dem Tisch، واذكر أن حركة داخل المكان قد تأتي مع Dativ. كما أن الأسماء لا تتصرف دائماً بالطريقة المتوقعة من شكلها المعتاد؛ الجملة تصف هيئة الشيء لحظة الكلام.

لذلك نختبر كل مثال مع سياقه: أهو قائم أم ممدد؟ هل يتحدث عن وضعه أم عن موضعه؟ وهل عبارة حرف الجر وجهة أم مكان؟ لا ينبغي وسم Ich lege die Flasche auf den Tisch بخطأ نحوي إذا كان المقصود وضعها على جانبها، ولا وسم Das Buch steht auf dem Tisch بخطأ إذا كان الكتاب منتصباً.`,
      table: {
        title: "أزواج تساعد على وصف فعل الوضع ونتيجته",
        columns: ["السياق", "فعل وضع/تغيير موضع", "فعل وصف الموضع", "التصريف الأساسي", "مثال مكاني"],
        rows: [
          { label: "قائم في المشهد", cells: ["stellen", "stehen", "stellte / stand; gestellt / gestanden", "Ich stelle die Vase auf den Tisch."] },
          { label: "ممدّد في المشهد", cells: ["legen", "liegen", "legte / lag; gelegt / gelegen", "Der Teppich liegt auf dem Boden."] },
          { label: "جلوس", cells: ["setzen", "sitzen", "setzte / saß; gesetzt / gesessen", "Ich setze das Kind auf den Stuhl."] },
          { label: "تعليق", cells: ["hängen (Handlung)", "hängen (Zustand)", "hängte / hing; gehängt / gehangen", "Der Mantel hängt an der Garderobe."] },
          { label: "إدخال/وجود داخل موضع", cells: ["stecken", "stecken", "steckte; gesteckt", "Der Schlüssel steckt im Schloss."] },
        ],
      },
      examples: [
        { de: "Ich stelle die Lampe neben das Sofa.", ar: "أضع المصباح بجانب الأريكة؛ المقصود وجهة الوضع. (Akkusativ)" },
        { de: "Die Lampe steht neben dem Sofa.", ar: "المصباح قائم بجانب الأريكة؛ المقصود موضعه. (Dativ)" },
        { de: "Er legt den Vertrag auf den Schreibtisch.", ar: "يضع العقد على المكتب؛ وهذه وجهة. (Akkusativ)" },
        { de: "Der Vertrag liegt auf dem Schreibtisch.", ar: "العقد موضوع على المكتب؛ وهذا موضعه. (Dativ)" },
        { de: "Setzen Sie sich bitte auf diesen Sessel!", ar: "تفضّل بالجلوس على هذا المقعد؛ الصيغة تصف الانتقال إلى الجلوس." },
        { de: "Der Vermieter sitzt schon im Wohnzimmer.", ar: "المؤجّر جالس في غرفة المعيشة؛ هذا موضعه. (Dativ)" },
        { de: "Sie hängt die Gardinen vor das Fenster.", ar: "تعلّق الستائر أمام النافذة؛ المقصود وجهة التعليق." },
        { de: "Der Schlüssel steckt im Schloss.", ar: "المفتاح في القفل؛ هذا وصف موضعه." },
      ],
      comparisonWithArabic: `قد تختلف طريقة وصف هيئة الأشياء بين الألمانية والعربية وبين متكلمين وسياقات مختلفة؛ لذلك لا نفترض أن العربية تستعمل فعلاً واحداً دائماً أو أن ترجمة واحدة تصلح لكل مشهد. احفظ أمثلة ألمانية كاملة مثل Die Lampe steht neben dem Sofa وIch stelle die Lampe neben das Sofa، ثم غيّر المثال إذا تغيرت هيئة الشيء أو قصد المتكلم.

أسماء الحالات مثل Dativ مصطلحات ألمانية، وليست ترجمة آلية للجر العربي. والفعل الألماني لا يقرر الحالة وحده؛ الموقع والوجهة في العبارة المكانية هما موضع الاختيار هنا.`,
      eselsbruecke: "احفظ الزوج مع مشهد: stellen/stehen للمصباح القائم في المثال، وlegen/liegen للعقد الممدد. ثم اسأل عن عبارة المكان نفسها: أين يوجد/يحدث الفعل؟ أم إلى أين يُوضَع الشيء؟",
      commonMistakes: [
        { wrong: "Ich lege die Flasche auf den Tisch. (المقصود: قائمة)", right: "Ich stelle die Flasche auf den Tisch.", classification: "contextual-alternative", whyAr: "الجملة الأولى صحيحة إذا وُضعت الزجاجة على جانبها. في المشهد المحدد، حيث تبقى قائمة على قاعدتها، يكون stellen هو الاختيار الأنسب؛ لا تجعل شكل الشيء قاعدةً لا تتغير." },
        { wrong: "Das Buch steht auf dem Tisch. (المقصود: مسطّح)", right: "Das Buch liegt auf dem Tisch.", classification: "contextual-alternative", whyAr: "إذا كان الكتاب ممدداً على سطحه فنقول liegt. أما إذا كان منتصباً على حافته فقد تصح steht أيضاً؛ ليس صحيحاً أن الكتاب لا يقف إلا بين كتب على رف." },
        { wrong: "Ich habe das Bild an der Wand gehängt. (أقصد أنني علّقته إلى الجدار)", right: "Ich habe das Bild an die Wand gehängt.", classification: "contextual-alternative", whyAr: "للقراءة المقصودة، أي نقل الصورة إلى الجدار وتعليقها هناك، نسأل Wohin? فنقول an die Wand. وقد تصف عبارة Dativ موضع حدوث فعلٍ في سياق آخر؛ لذا فالتصحيح هنا متعلق بالمعنى المقصود لا بوجود المفعول وحده." },
        { wrong: "Der Stuhl setzt neben dem Tisch.", right: "Der Stuhl steht neben dem Tisch.", classification: "error", whyAr: "setzen لا يستعمل هنا بهذا الشكل مع Stuhl فاعلاً؛ نقول عادةً Der Stuhl steht neben dem Tisch. أما الشخص فيمكنه أن يقول Ich setze mich auf den Stuhl عند الانتقال إلى الجلوس." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: sich setzen وsitzen في مثال محدد",
        content: `في Ich setze mich auf den Stuhl يصف المتكلم جلوس نفسه؛ والكرسي هو الوجهة في العبارة المكانية، لذلك auf den Stuhl. وفي Ich sitze auf dem Stuhl يصف موضع جلوسه، لذلك Dativ. ويساعد زوج setzen/sitzen على فهم المشهد، لكن الحالة تتبع الوجهة أو الموضع ولا تنتج آلياً من كون الفعل متعدياً أو انعكاسياً. وكذلك يختلف legen/liegen في أمثلة الوضع والموضع، مع بقاء السياق ضرورياً.`,
      },
    },
    {
      id: "t3",
      titleAr: "اندماج حرف الجر بأداة التعريف: im, ins, am, ans, aufs",
      titleDe: "Verschmelzungen von Präposition und bestimmtem Artikel",
      explanationAr: `تندمج بعض حروف الجر مع أداة التعريف في صيغ مكتوبة شائعة: in + dem = im، in + das = ins، an + dem = am، an + das = ans، auf + das = aufs. الصيغة المندمجة لا تحذف الحالة؛ يمكن تحليلها إلى حرف الجر والأداة، ثم معرفة الحالة من dem أو das.

في هذه الأمثلة المكانية، im وam تختصران dem (Dativ)، وins وans وaufs تختصر das (Akkusativ). توافق الأداة المختصرة جنس الاسم وعدده وحالته؛ فكّ الاختصار يعيد dem أو das، لا أداةً عامةً لا تتغير. لكن لا تجعل الحرف الأخير قاعدةً عامة لمعنى الحركة والسكون: فـ am Wochenende تعبير زمني، وaufs Neue استعمال غير مكاني. القاعدة هنا عن أصل الأداة والحالة في الأمثلة، أما المعنى فيحدده التركيب.

يمكن أن تظهر الصيغة الكاملة عند التوكيد أو المقابلة: Ich wohne in dem Haus dort جملة صحيحة، وقد يختار المتكلم فيها dem للتحديد. وفي الكتابة المعيارية اكتب auf dem Balkon وunter dem Tisch؛ صيغ مثل aufm وunterm دارجة أو عامية وليست الصيغة المناسبة عادةً لرسالة رسمية. ولا تندمج كل حروف الجر مع كل أدوات التعريف: نقول in der Küche وan der Wand وauf dem Tisch.`,
      whyAr: `معرفة الصيغة الكاملة تساعد على قراءة الإعلانات والحوارات من غير حفظ im وins كأنهما كلمتان منفصلتان عن تركيبها. فإذا ظهر im Keller استطعت التعرف إلى in + dem، وإذا ظهر ins Erdgeschoss تعرفت إلى in + das. ثم تنظر إلى المعنى المكاني: هل الجملة تصف موضعاً أم جهةً مقصودة؟

الاختصار شائع لكنه ليس واجباً في كل سياق، كما أن الصيغة المفصولة لا تصبح خطأً لمجرد وجود اختصار. قد يفيد الفصل في إبراز المقصود. وتعلّم تراكيب الزمن أو المعاني الاصطلاحية على حدة؛ لا تستنتج «حركة» من s أو «سكون» من m خارج الأمثلة المكانية المقصودة.`,
      table: {
        title: "الصيغة المندمجة والأداة التي تختصرها",
        columns: ["الأصل", "الصيغة", "الحالة", "مثال"],
        rows: [
          { label: "in + das", cells: ["ins", "Akkusativ", "Ich ziehe ins Erdgeschoss um."] },
          { label: "in + dem", cells: ["im", "Dativ", "Die Waschküche ist im Keller."] },
          { label: "an + das", cells: ["ans", "Akkusativ", "Stell die Pflanze ans Fenster."] },
          { label: "an + dem", cells: ["am", "Dativ", "Der Briefkasten hängt am Eingang."] },
          { label: "auf + das", cells: ["aufs", "Akkusativ", "Wir gehen aufs Dach."] },
          { label: "auf + dem", cells: ["auf dem (في الكتابة المعيارية)", "Dativ", "Die Wäsche trocknet auf dem Balkon."] },
        ],
      },
      examples: [
        { de: "Die Waschküche ist im Keller.", ar: "غرفة الغسيل في القبو. (im = in + dem)" },
        { de: "Ich ziehe ins Erdgeschoss um.", ar: "أنتقل إلى الطابق الأرضي. (ins = in + das)" },
        { de: "Stell die Pflanze ans Fenster.", ar: "ضع النبتة عند النافذة. (ans = an + das)" },
        { de: "Der Briefkasten hängt am Eingang.", ar: "صندوق البريد معلّق عند المدخل. (am = an + dem)" },
        { de: "Wir gehen aufs Dach.", ar: "نصعد إلى السطح. (aufs = auf + das)" },
        { de: "Die Wäsche trocknet auf dem Balkon.", ar: "تجفّ الملابس على الشرفة. تكتب auf dem مفصولة في الصيغة المعيارية." },
        { de: "Ich wohne in dem Haus dort.", ar: "أسكن في ذلك البيت هناك؛ يمكن فصل الأداة للتوكيد أو التحديد." },
      ],
      comparisonWithArabic: `تُكتب صيغ مثل im وins كلمةً واحدة في الألمانية، مع أنها تجمع حرف جر وأداة تعريف. يمكن للمتعلم أن يفككها ذهنياً عند القراءة، من غير افتراض أن كل لغة تُظهر العلاقة النحوية بالطريقة نفسها. فالمقارنة مع كتابة «في البيت» بالعربية هنا ملاحظة على المثال، لا قاعدة عن جميع حروف الجر أو كل أنواع الوصل في العربية.

في الألمانية نفسها، يبقى الفرق بين in dem وin das مهماً في المثال المكاني: الأول يتضمن dem، والثاني das. لكن المعنى الزمني أو الاصطلاحي لا يُقرأ من حرف أخير وحده؛ احفظ التعبير في سياقه.`,
      eselsbruecke: "فكّ الاختصار: im = in + dem، وins = in + das؛ am = an + dem، وans = an + das؛ aufs = auf + das. هذا يذكّرك بالحالة في هذه التركيبات، لا بمعنى الحركة في كل استعمال.",
      commonMistakes: [
        { wrong: "Ich gehe heute Abend im Kino umher. (أصف مشيي داخل السينما)", right: "Ich gehe heute Abend ins Kino.", classification: "contextual-alternative", whyAr: "الجملة الأولى تصف التجول داخل السينما؛ أما للوصول إليها لمشاهدة فيلم فنقول ins Kino. حرف الجر im ليس خطأً مطلقاً، بل يصف الموقع أو مكان حدوث الحركة." },
        { wrong: "Wir ziehen im eine neue Wohnung um.", right: "Wir ziehen in eine neue Wohnung um.", classification: "error", whyAr: "im تختصر in + dem، ولا يمكن أن تسبق أداة التنكير eine. لذلك تبقى in منفصلة قبل eine؛ أما الاختصار فيتطلب أداة تعريف مناسبة مثل dem أو das." },
        { wrong: "Ich bin ins Kino. (المقصود: أنا داخل السينما الآن)", right: "Ich bin im Kino.", classification: "error", whyAr: "مع bin ووصف المكان الحالي نقول im Kino (in + dem). إذا كان المقصود الذهاب إلى هناك فقل Ich gehe ins Kino؛ يختلف الاختيار باختلاف المعنى المقصود." },
        { wrong: "Bitte schreiben Sie mir aufm Formular.", right: "Bitte schreiben Sie mir auf dem Formular.", classification: "contextual-alternative", whyAr: "aufm صيغة دارجة في الكلام، وليست خطأً في كل حديث؛ في رسالة معيارية أو رسمية اكتب auf dem مفصولة. أما auf + das فيمكن أن تندمج إلى aufs." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: اندماجات حروف الجر الثابتة",
        content: `توجد أيضاً صيغ شائعة مثل zum = zu + dem، zur = zu + der، beim = bei + dem، وvom = von + dem. هذه الأمثلة تبيّن أن شكل الاندماج يتبع الأداة؛ لا يلزم أن ينتهي كل اندماج Dativ بـ m، فـ zur مثال واضح على ذلك. كما لا يوجد مسار Akkusativ مع zu في هذا الاستعمال لأنه يطلب Dativ. افصل هذه التركيبات عن التقابل المكاني لــ in/am/ans، ولا تعمم علامة حرف واحد على جميع الصيغ.`,
      },
    },
    {
      id: "t4",
      titleAr: "قراءة إعلان سكن وترتيب موعد معاينة",
      titleDe: "Wohnungsanzeigen lesen und eine Besichtigung vereinbaren",
      explanationAr: `قد تتضمن إعلانات السكن اختصارات مثل 3-ZKB (ثلاث غرف مع مطبخ وحمّام)، وEG للطابق الأرضي، و2. OG للطابق الثاني فوق الأرضي، وDG للطابق العلوي تحت السقف. هذه مفاتيح شائعة وليست قائمة موحّدة لكل الإعلانات؛ اقرأ وصف الشقة نفسه إذا كان الاختصار غير واضح.

تسمّي Kaltmiete الإيجار الأساسي قبل التكاليف الجانبية. وتعرض إعلانات كثيرة Nebenkosten، أي تكاليف تشغيلية متفقاً عليها، وقد تشمل التدفئة والماء أو غيرهما بحسب العقد. وتدل Warmmiete عادةً على الإيجار مع تكاليف التدفئة والتكاليف الجانبية المدرجة، لا بالضرورة كل مصروف شخصي: قد يدفع المستأجر الكهرباء أو الإنترنت منفصلين. اسأل عن العناصر الداخلة ولا تستنتجها من رقم Warmmiete وحده.

Kaution مبلغ ضمان للسكن، لا رسم معاينة ولا إيجار شهري. في عقود السكن الألمانية يحدد §551 BGB حداً أقصى يعادل ثلاثة أمثال الإيجار الشهري من دون مبالغ Betriebskosten المعروضة كدفعة مقدمة أو مقطوعة؛ ويحق دفع المبلغ النقدي على ثلاثة أقساط شهرية متساوية. لا يعني ذلك أن كل عقد يطلب ثلاثة أشهر، ولا أن ردّ المبلغ يتم تلقائياً فور الخروج؛ قد تتبع الإعادة مراجعة المطالبات وتسوية التكاليف. هذه معلومات تعريفية وليست استشارة قانونية.

للاتصال يمكن كتابة: Ich interessiere mich für Ihre Anzeige. Wäre ein Termin zur Besichtigung möglich? الفعل besichtigen محدد للمعاينة، لكن sehen ليس خطأً لغوياً؛ وZeit تعني الوقت/التفرغ، أما Termin فيشير إلى موعد متفق عليه. من المعقول أن تسأل: Welche Unterlagen brauchen Sie von mir? لا توجد في هذا الدرس قائمة وثائق واحدة واجبة على كل متقدم أو في كل مدينة.

أما Ruhezeiten وHausordnung فتعتمد على قواعد المبنى والجهة المحلية والسياق؛ المثال الوارد في قصة أمير يصف Hausordnung واحدة لا حكماً عاماً على ألمانيا. وعند استلام السكن يمكن تدوين حالته والأضرار الموجودة في Übergabeprotokoll، مع الاحتفاظ بما يوثق ذلك؛ المحضر قد يساعد على توضيح الحالة لكنه ليس ضماناً قانونياً بحد ذاته.`,
      whyAr: `تدريب قراءة إعلان مختصر يفيد في تمييز بيانات موصوفة بوضوح: عدد الغرف، الطابق، الإيجار، والتكاليف المذكورة. لكن المصطلحات المالية ليست معادلات ثابتة تغطي كل إنفاق المستأجر؛ بنود Nebenkosten تعتمد على الاتفاق، وقد توجد خدمات تُدفع منفصلة. لذلك يتعلم الطالب أن يسأل عما يشمله السعر بدل افتراض أن الإعلان يذكر كل شيء.

يظهر هنا فرق بين لغة الطلب الرسمية وبين ادعاء قانوني أو ثقافي. قد تكون صيغة ما أنسب من حيث المباشرة في رسالة معينة، من غير أن تكون الأخرى خطأً نحوياً. وكذلك قد تختلف المستندات المطلوبة ومواعيد المعاينة وقواعد الهدوء بين عروض ومبانٍ وأماكن مختلفة. نستخدم أمثلة محددة للتدرب على القراءة والسؤال، ولا نستنتج منها نظاماً موحداً أو اعتماداً لغوياً أو قانونياً.`,
      table: {
        title: "مصطلحات مختارة في إعلان السكن",
        columns: ["المصطلح", "المعنى التقريبي", "ما ينبغي التحقق منه"],
        rows: [
          { label: "3-ZKB, 85 m²", cells: ["3 غرف، مطبخ وحمّام، 85 م²", "المطبخ والحمام مذكوران إلى جانب عدد الغرف في الاختصار"] },
          { label: "EG / 2. OG / DG", cells: ["الأرضي / الثاني فوق الأرضي / الطابق العلوي تحت السقف", "تختلف طريقة تسمية الطوابق عند الترجمة؛ اقرأ الرمز كما هو"] },
          { label: "Kaltmiete", cells: ["الإيجار الأساسي قبل Nebenkosten", "ما التكاليف غير الداخلة؟"] },
          { label: "Nebenkosten", cells: ["تكاليف تشغيلية متفق عليها، مثل بعض تكاليف الماء أو التدفئة", "القائمة وطريقة التسوية بحسب العقد"] },
          { label: "Warmmiete", cells: ["الإيجار مع التدفئة والتكاليف الجانبية المدرجة عادةً", "قد تبقى الكهرباء والإنترنت أو تكاليف أخرى منفصلة"] },
          { label: "Kaution", cells: ["مبلغ ضمان للسكن", "الحد الأقصى في السكن ثلاثة أمثال الإيجار من دون Betriebskosten؛ ويمكن تقسيط المبلغ النقدي على ثلاثة أشهر"] },
          { label: "Besichtigung", cells: ["معاينة الشقة", "اسأل عن موعد مناسب وما إذا كانت هناك معلومات إضافية"] },
          { label: "Übergabeprotokoll", cells: ["تدوين حالة السكن وقت التسليم", "دوّن الحالة والأضرار الظاهرة واحتفظ بنسخة"] },
        ],
      },
      examples: [
        { de: "In der Anzeige steht: 3-ZKB, 78 m², 2. OG.", ar: "ورد في الإعلان: ثلاث غرف ومطبخ وحمام، 78 م²، والطابق الثاني فوق الأرضي." },
        { de: "Die Kaltmiete beträgt 640 Euro, die Nebenkosten 190 Euro.", ar: "الإيجار الأساسي 640 يورو والتكاليف الجانبية المذكورة 190 يورو." },
        { de: "Welche Kosten sind in der Warmmiete enthalten?", ar: "ما التكاليف الداخلة في الإيجار الشامل؟" },
        { de: "Ich interessiere mich für Ihre Anzeige.", ar: "أنا مهتم بإعلانكم." },
        { de: "Wäre ein Termin zur Besichtigung möglich?", ar: "هل يمكن تحديد موعد لمعاينة الشقة؟" },
        { de: "In unserer Hausordnung stehen Ruhezeiten für dieses Haus.", ar: "يتضمن نظام هذا المبنى أوقات هدوء خاصة به." },
        { de: "Bei der Schlüsselübergabe füllen wir ein Übergabeprotokoll aus.", ar: "نملأ محضر التسليم عند تسليم المفاتيح." },
      ],
      comparisonWithArabic: `تُكوّن الألمانية كثيراً من الأسماء المركبة بضم أجزاء مثل Miet + Vertrag في كلمة واحدة. ويمكن أن تعبّر العربية عن معنى مشابه بالإضافة، مثل «عقد الإيجار»، لكن لا توجد مطابقة حرفية واحدة لكل تركيب؛ فكّك الكلمة الألمانية إلى أجزائها واستعن بآخر جزء لتخمين موضوعها ثم تحقق من المعنى.

أما المقارنة الثقافية فلا يصح تعميمها على البلدان العربية أو على كل المستأجرين في ألمانيا. تجارب السكن تختلف بين الأشخاص والمدن والعقود. استخدم مفردات الدرس لوصف إعلان محدد وطرح سؤال عملي، واذكر تجربتك الشخصية بصفتها تجربة لا قاعدةً عامة.`,
      eselsbruecke: "افصل في الإعلان بين Kaltmiete والتكاليف المتفق عليها، ثم اسأل ماذا تشمل Warmmiete تحديداً. Kaution مبلغ ضمان مستقل، وليس جزءاً من الإيجار الشهري.",
      commonMistakes: [
        { wrong: "Ich interessiere mich an Ihre Wohnung.", right: "Ich interessiere mich für Ihre Wohnung.", classification: "error", whyAr: "في هذا المعنى يأتي الفعل بصيغته الانعكاسية sich für etwas interessieren؛ لذلك نقول für Ihre Wohnung. هذا تركيب يختار فيه الفعل حرف الجر، وليس موضعاً مكانياً تطبق عليه قاعدة wo?/wohin?." },
        { wrong: "Ich will die Wohnung sehen. Wann haben Sie Zeit?", right: "Ich möchte die Wohnung gern besichtigen. Wann wäre ein Termin möglich?", classification: "contextual-alternative", whyAr: "الجملة الأولى صحيحة نحوياً؛ قد تكون مباشرة أو أقل تحديداً في رسالة رسمية بحسب السياق. besichtigen أوضح لمعاينة السكن، وTermin يحدد موعداً متفقاً عليه، لكن sehen وZeit ليسا خطأين مطلقين." },
        { wrong: "Ich freue mich auf der Besichtigung.", right: "Ich freue mich auf die Besichtigung.", classification: "error", whyAr: "في هذا المعنى يختار التعبير sich auf etwas freuen المتمّم auf + Akkusativ: auf die Besichtigung. هذا حرف جر يحدده التركيب، ولا تطبق عليه قاعدة المكان والوجهة لمجرد وجود auf." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: وصف المنزل في A1 وقراءة إعلان في A2",
        content: `في وصف المنزل تستطيع بناء جملة شخصية مثل Meine Wohnung hat zwei Zimmer. أما الإعلان فيضغط المعلومات في اختصارات ومبالغ ومفردات مركبة مثل 2. OG وNebenkosten. في الحالتين تحتاج إلى مفردات المكان، لكن قراءة الإعلان تتطلب التحقق من معنى الاختصار وما يشمله السعر. لا تستنتج من نموذج واحد أن كل الإعلانات تستخدم الصيغ نفسها أو أن تفاصيل العقد ثابتة.`,
      },
    },
  ];
