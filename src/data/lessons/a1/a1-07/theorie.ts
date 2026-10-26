/**
 * a1-07 — الشرح النظري (الجزء «theorie»)
 * فُصل من a1-07.ts في الدفعة 92 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الأعداد من 0 إلى 1000",
      titleDe: "Zahlen von null bis tausend",
      explanationAr:
        "تُبنى الأعداد الألمانية بطريقة منتظمة في نطاق هذا الدرس، لكن يلزم حفظ صيغ خاصة شائعة. الأعداد من 21 إلى 99 (ما عدا أعداد العشرات الكاملة) تُقال وتُكتب بوحدة الآحاد ثم **und** ثم العشرات: 21 هي *einundzwanzig*، وتتكوّن من *ein + und + zwanzig*؛ و48 هي *achtundvierzig*. تكتب كلمة العدد المركبة موصولة في هذا النطاق، لا مفصولة إلى ثلاث كلمات.\n\nتأتي المئات قبل الباقي: 365 هي *dreihundertfünfundsechzig*. يمكن استعمال *hundert* أو *einhundert* لـ100، و*tausend* أو *eintausend* لـ1000؛ اختر في التمرين الصيغة المطلوبة. انتبه إلى الأشكال الشائعة: *sechzehn* (16)، *siebzehn* (17)، *sechzig* (60)، *siebzig* (70)، و*dreißig* (30). العدد *eins* يصبح غالباً *ein-* في تركيب مثل *einundzwanzig*.\n\nفي الكتابة الجارية تكتب الأعداد العددية عادةً بحروف صغيرة، مثل *zwanzig Äpfel*؛ وتبدأ بحرف كبير فقط إذا جاءت في أول الجملة أو استعملت اسماً. أما السعر على بطاقة متجر فيظهر غالباً بالأرقام ورمز العملة، مثل *3,50 €*، لا لأن كتابة السعر بالحروف قاعدة عامة. في هذا الدرس نتمرن على كتابة كلمات الأعداد حتى 1000، وعلى قراءة السعر وفق سياقه.",
      whyAr:
        "تحتاج الأعداد إلى قراءة دقيقة عند السؤال عن ثمن أو كمية، كما ترد في بيانات شخصية بسيطة. تذكّر أن كتابة 21 الصحيحة هي *einundzwanzig*، وتتبع في النطق ترتيب الآحاد ثم العشرات؛ وليست *zwanzig und eins*. تظهر البنية نفسها في أعداد مثل 35 و48، لذلك تدرب على سماع الآحاد أولاً ثم التعرّف إلى العشرات. راجع كذلك الاستثناءات الإملائية *sechzehn* و*dreißig* بدلاً من بناء الصيغة آلياً من الكلمة الأساسية.",
      table: {
        title: "بناء العدد وكتابته",
        columns: ["النمط", "الرقم", "الكلمة الألمانية"],
        rows: [
          {label: "21–99", cells: ["21", "einundzwanzig"]},
          {label: "المئات", cells: ["365", "dreihundertfünfundsechzig"]},
          {label: "100", cells: ["100", "hundert / einhundert"]},
          {label: "1000", cells: ["1000", "tausend / eintausend"]},
        ],
      },
      examples: [
        {de: "null", ar: "صفر"},
        {de: "eins, zwei, drei", ar: "واحد، اثنان، ثلاثة"},
        {de: "sechzehn", ar: "ستة عشر"},
        {de: "einundzwanzig", ar: "واحد وعشرون"},
        {de: "achtundvierzig", ar: "ثمانية وأربعون"},
        {de: "dreißig", ar: "ثلاثون"},
        {de: "dreihundertfünfundsechzig", ar: "ثلاثمئة وخمسة وستون"},
        {de: "tausend / eintausend", ar: "ألف"},
      ],
      comparisonWithArabic:
        "في العربية والألمانية تُقدَّم الآحاد في عدد مثل 21 على العشرات في اللفظ: «واحد وعشرون» و*einundzwanzig*. لذلك لا نصف ترتيب الألمانية بأنه معكوس عن العربية؛ الفرق التعليمي الأوضح أن مكوّنات العدد الألماني تُكتب كلمةً واحدةً، وأن *und* تصل الآحاد بالعشرات. عند السماع، دوّن الآحاد التي تسمعها أولاً ثم العشرات: *fünfundvierzig* تعني 45 لا 54. كما لا تُشتقّ *sechzehn* و*dreißig* حرفياً بإضافة كلمة العشرات، بل تحفظ صيغتهما المعيارية.",
      eselsbruecke:
        "للأعداد 21–99: **آحاد + und + عشرات**، ثم اكتبها كلمةً واحدة: *sieben + und + vierzig = siebenundvierzig*. وفي 365 ابدأ بالمئات، ثم طبّق القاعدة على 65.",
      commonMistakes: [
        {wrong: "zwanzigundeins", right: "einundzwanzig", classification: "error", whyAr: "ترتيب العدد الألماني 21 هو الآحاد ثم und ثم العشرات؛ لذلك نكتب einundzwanzig كلمةً واحدة، ولا نقلب العدد إلى عشرين وواحد."},
        {wrong: "sechszehn", right: "sechzehn", classification: "error", whyAr: "احفظ شكل العدد 16 كما هو في الكتابة المعيارية: sechzehn؛ لا تنقل حرف s من sechs إلى تركيب العدد، لأن الصيغة الشائعة لا تحتويه."},
        {wrong: "siebenzehn", right: "siebzehn", classification: "error", whyAr: "عند كتابة 17 استخدم الشكل المعياري siebzehn؛ لا تضف n من sieben. تدرب على سماع الصيغة وكتابتها بوصفها كلمة محفوظة."},
        {wrong: "dreizig", right: "dreißig", classification: "error", whyAr: "العدد 30 يكتب dreißig بحرف ß، لا z. اربط المثال بالكتابة الكاملة حتى لا تستنتج الهجاء من صوت العدد وحده."},
        {wrong: "fünf und zwanzig", right: "fünfundzwanzig", classification: "error", whyAr: "في هذا العدد الأقل من مليون تكتب الأجزاء كلمةً مركبةً موصولة. افصل بين المكونات ذهنياً لتقرأها، لكن لا تضع بينها مسافات في الصياغة المطلوبة."},
      ],
      relatedRuleComparison: {
        title: "العدد بوصفه قيمة أم جزءاً من معرّف؟",
        content:
          "في عدد الكمية 23 يكون اللفظ *dreiundzwanzig*. أما الهاتف أو الرمز البريدي فهو سلسلة خانات تُعرّف شخصاً أو مكاناً؛ لا تحوّله تلقائياً إلى عدد كمي واحد. في هذا الدرس نعرض نموذجاً لقراءة الخانات منفردة، ونذكر صراحةً متى تكون هذه طريقة التدريب المطلوبة. عند تدوين رقم حقيقي، اتبع طريقة المتحدث أو اطلب إعادته بدلاً من افتراض طريقة تجميع واحدة.",
      },
    },
    {
      id: "t2",
      titleAr: "جمع أسماء الطعام والكمية",
      titleDe: "Pluralformen und Mengen",
      explanationAr:
        "لا توجد نهاية واحدة يمكن إضافتها إلى كل اسم ألماني لصنع الجمع؛ احفظ الاسم مع أداة التعريف وصيغة الجمع، مثلاً *der Apfel, die Äpfel*. من الأنماط الواضحة في مفردات التسوق: *die Banane – die Bananen*، و*die Flasche – die Flaschen*، و*das Glas – die Gläser*. وقد يبقى الاسم كما هو، مثل *das Brötchen – die Brötchen*. تغيّر Umlaut في بعض الكلمات جزء من صيغة الجمع المحفوظة، ولا يقع مع كل كلمة من الجنس نفسه.\n\nميّز بين اسم المنتج ووحدة القياس أو العبوة: نقول عادةً *ein Kilo Tomaten* و*zwei Kilo Tomaten*، أو *eine Flasche Wasser* و*zwei Flaschen Wasser*. في تعبير القياس قد تبقى الوحدة على صورة المفرد؛ وهذا لا يعني أن جمع الوحدة مستحيل في كل سياق. يورد Duden للجمع *Kilo* الصيغتين *Kilo* و*Kilos*، وتذكر IDS تنوع استعمال وحدات القياس. كذلك يشيع في مبالغ العملة قول *30 Euro*، لكن Duden يسجل أيضاً جمع *Euros* في استعمالات أخرى؛ لذلك لا نصحّح هذه الصيغ آلياً بمعزل عن السياق.\n\nعند الحديث عن سعر منتج، راقب الفاعل والفعل: *Der Apfel kostet …* في المفرد، و*Die Äpfel kosten …* في الجمع. تسمية الجمع وحدها لا تكفي؛ نتحقق أيضاً من توافق الفعل المحدود مع الفاعل. الأمثلة هنا كلمات شائعة للتسوّق، لا قائمة شاملة لقواعد الجمع.",
      whyAr:
        "يساعد حفظ المفرد والجمع معاً على قراءة قوائم المنتجات وطلب أكثر من قطعة من دون تخمين النهاية. يبيّن *Apfel – Äpfel* أن الجمع قد يتضمن Umlaut، بينما *Banane – Bananen* و*Brötchen – Brötchen* يقدّمان نمطين مختلفين. وعندما يصبح الفاعل جمعاً، يتغيّر الفعل أيضاً في مثال مثل *Die Äpfel kosten …*. أما وحدات القياس والعملات فلها استعمالات سياقية؛ لذلك نعلّم العبارة المعتادة في المثال ولا نحوّلها إلى منع مطلق لصيغ أخرى.",
      table: {
        title: "أمثلة من مفردات الشراء",
        columns: ["النمط في المثال", "المفرد", "الجمع أو العبارة"],
        rows: [
          {label: "Umlaut", cells: ["der Apfel", "die Äpfel"]},
          {label: "-n", cells: ["die Banane", "die Bananen"]},
          {label: "-n (بعد -e)", cells: ["die Flasche", "die Flaschen"]},
          {label: "بلا نهاية ظاهرة", cells: ["das Brötchen", "die Brötchen"]},
          {label: "قياس", cells: ["ein Kilo Tomaten", "zwei Kilo Tomaten"]},
        ],
      },
      examples: [
        {de: "ein Apfel – zwei Äpfel", ar: "تفاحة واحدة – تفاحتان"},
        {de: "eine Banane – zwei Bananen", ar: "موزة واحدة – موزتان"},
        {de: "eine Tomate – drei Tomaten", ar: "حبة طماطم – ثلاث حبات طماطم"},
        {de: "ein Brötchen – zwei Brötchen", ar: "لفافة خبز صغيرة – لفافتان"},
        {de: "ein Glas – zwei Gläser", ar: "كأس – كأسين"},
        {de: "eine Flasche – zwei Flaschen", ar: "قارورة – قارورتان"},
        {de: "zwei Kilo Tomaten", ar: "كيلوغرامان من الطماطم؛ صيغة قياس شائعة"},
        {de: "Die Äpfel kosten drei Euro.", ar: "التفاحات ثمنها ثلاثة يورو."},
      ],
      comparisonWithArabic:
        "في العربية جموع تكسير وجموع تلحقها علامات، ولا تكفي علامة واحدة للتنبؤ بكل الأسماء؛ وفي الألمانية أيضاً تتنوع صيغ الجمع بين نهاية مثل -n أو -en، وتغيّر الحركة، وبقاء صورة المفرد. لكن توزيع هذه الأنماط لا يطابق قواعد العربية، فلا تستنتج جمع الاسم الألماني من جنس الاسم وحده. احفظ بطاقة المفرد والجمع مع أداة التعريف، ثم لاحظ توافق الفعل: *Die Äpfel kosten*. وفي عبارات القياس مثل *zwei Kilo Tomaten* تعلّم الصيغة الواردة في المثال من غير ادعاء أن صيغة *Kilos* ممتنعة في كل استعمال.",
      eselsbruecke:
        "احفظ كل اسم في ثلاثية: **أداة التعريف + المفرد + الجمع**؛ ثم أضف مثال شراء: *der Apfel – die Äpfel – zwei Äpfel*. ولا تغيّر وحدة القياس آلياً قبل أن ترى استعمالها في العبارة.",
      commonMistakes: [
        {wrong: "zwei Apfel", right: "zwei Äpfel", classification: "error", whyAr: "احفظ هذا الاسم مع التغيير الصوتي والكتابي: المفرد Apfel وجمعه Äpfel. هذه صيغة هذا الاسم، ولا تعني أن كل اسم مذكر يجمع بالطريقة نفسها."},
        {wrong: "drei Flasche", right: "drei Flaschen", classification: "error", whyAr: "الصيغة المفردة هي eine Flasche، والجمع في هذا المثال zwei Flaschen. احفظ الكلمة مع النهاية -n بدلاً من تعميم نهاية واحدة على سائر الأسماء المؤنثة."},
        {wrong: "Die Äpfel kostet zwei Euro.", right: "Die Äpfel kosten zwei Euro.", classification: "error", whyAr: "الفاعل Die Äpfel جمع، لذلك يأتي الفعل المحدود بصيغة الجمع kosten. استخدم kostet مع فاعل مفرد مثل der Apfel أو das Brot."},
        {wrong: "zwei Kilos Tomaten", right: "zwei Kilo Tomaten", classification: "contextual-alternative", whyAr: "الصيغة المحايدة الشائعة في عبارة القياس هي zwei Kilo Tomaten. يورد Duden أيضاً Kilos بوصفها جمعاً لـKilo؛ فلا تُعرض Kilos على أنها خطأ مطلق في كل سياق."},
        {wrong: "drei Euros (in jeder Preisangabe)", right: "drei Euro (in dieser Preisangabe)", classification: "contextual-alternative", whyAr: "في مبالغ مثل 30 Euro يشيع عدم إظهار نهاية الجمع، لكن Duden يسجل Euros أيضاً في استعمالات أخرى؛ الحكم مرتبط بالتركيب لا بقاعدة منع مطلقة."},
      ],
      relatedRuleComparison: {
        title: "صيغة الجمع أم عبارة قياس؟",
        content:
          "قارن الاسم المعدود مباشرةً: *zwei Flaschen*، حيث تظهر نهاية الجمع على العبوة، بعبارة كمية مثل *zwei Kilo Tomaten*، حيث تسبق وحدة القياس اسم المنتج وقد تبقى على صورة المفرد. لا تنقل نمطاً واحداً إلى جميع الوحدات: لكل كلمة واستعماله. وكذلك لا تساوِ بين غياب علامة الجمع في *30 Euro* وبين خطأ *Euros* في أي سياق؛ أمثلة Duden تبيّن استعمال الصيغتين بحسب التركيب.",
      },
    },
    {
      id: "t3",
      titleAr: "السؤال عن السعر والطلب بأدب",
      titleDe: "Nach Preisen fragen und etwas bestellen",
      explanationAr:
        "للسؤال عن ثمن شيء مفرد قل *Was kostet das Brot?* أو *Wie viel kostet das Brot?*؛ ومع فاعل جمع مثل *die Äpfel* نقول *Was kosten die Äpfel?* لأن الفعل المحدود يوافق الفاعل في العدد. من أجوبة البائع المعتادة *Das kostet 2,40 Euro* أو *Die Äpfel kosten 2,40 Euro*.\n\nللطلب تستطيع استعمال *Ich hätte gern …, bitte* أو *Ich nehme …, bitte*: *Ich hätte gern ein Kilo Tomaten*. صيغة *Ich will …* صحيحة نحوياً، لكنها قد تبدو أكثر مباشرة بحسب المقام والنبرة؛ لا نصفها بأنها فظة دائماً. يسجل Duden أمثلة مثل *ich hätte gern ein Kilo Trauben*، كما يعرض *gern/gerne*، وكلا الشكلين وارد.\n\nفي بطاقة السعر الألمانية يستخدم عادة الفاصل العشري فاصلةً، مثل *3,50 €*. وعند التلفظ يمكن قول *drei Euro fünfzig* أو *drei Euro und fünfzig Cent* في هذا السياق؛ أما عند كتابة نثر عام فلا تجعل تحويل كل مبلغ إلى كلمات قاعدةً عامة. تذكّر أن *Euro* يشيع بلا نهاية في عرض المبالغ مثل *30 Euro*، لكن *Euros* موجودة في سياقات أخرى. اسأل أولاً عن السعر، ثم اذكر المنتج والكمية، وأضف *bitte* إذا رغبت؛ لا تحتاج إلى حفظ حوار واحد حرفياً.",
      whyAr:
        "السؤال عن السعر والطلب من المهام اليومية الواضحة في موضوع التسوق. يقدّم نموذج Goethe الرسمي لـA1 موضوع *Einkaufen* في مهمة كلام، ويضم النموذج أيضاً مبالغ وأسعاراً في مواد الاختبار؛ وهذا شاهد على ملاءمة المجال للتدريب، لا شهادة اعتماد لهذا الدرس. تعلّم صيغتي *Was kostet …?* و*Ich hätte gern …*، مع الانتباه إلى الفاعل المفرد أو الجمع. وميّز بين صحة *Ich will* النحوية وبين درجة مباشرتها في موقف معين، لأن التهذيب يتأثر بالسياق والنبرة.",
      table: {
        title: "سؤال وجواب وطلب",
        columns: ["الوظيفة", "الصيغة", "مثال"],
        rows: [
          {label: "سؤال عن مفرد", cells: ["Was kostet …?", "Was kostet das Brot?"]},
          {label: "سؤال عن جمع", cells: ["Was kosten …?", "Was kosten die Äpfel?"]},
          {label: "طلب شائع", cells: ["Ich hätte gern …", "Ich hätte gern ein Kilo Tomaten."]},
          {label: "الطلب بعبارة أخرى", cells: ["Ich nehme …, bitte.", "Ich nehme eine Flasche Wasser."]},
          {label: "كتابة السعر", cells: ["3,50 €", "drei Euro fünfzig (عند التلفظ)"]},
        ],
      },
      examples: [
        {de: "Was kostet ein Kilo Äpfel?", ar: "كم ثمن كيلوغرام من التفاح؟"},
        {de: "Wie viel kostet das Brot?", ar: "كم ثمن الخبز؟"},
        {de: "Was kosten die Tomaten?", ar: "كم ثمن الطماطم؟"},
        {de: "Das kostet zwei Euro vierzig.", ar: "هذا ثمنه يورو وأربعون سنتاً."},
        {de: "Ich hätte gern ein Kilo Äpfel, bitte.", ar: "أودّ كيلوغراماً من التفاح، من فضلك."},
        {de: "Ich nehme eine Flasche Wasser.", ar: "سآخذ قارورة ماء."},
        {de: "Der Preis ist 3,50 €.", ar: "السعر 3,50 يورو."},
        {de: "Ich hätte gerne zwei Brötchen.", ar: "أودّ لفافتي خبز صغيرتين."},
      ],
      comparisonWithArabic:
        "تختلف صياغة سؤال السعر في العربية باختلاف اللهجة والمقام، لذلك لا نفرض مقابلاً عربياً واحداً على *Was kostet …?*. المهم في الألمانية أن يأتي الفعل المصرف في موقعه، وأن يوافق الفاعل: *das Brot kostet* مقابل *die Äpfel kosten*. كما أن *Ich hätte gern …* صيغة طلب شائعة، وليست ترجمة حرفية لكلمة عربية واحدة. وعند الكتابة، تساعد الفاصلة في *3,50 €* على قراءة الجزء العشري؛ أما نطق المبلغ فيتبع سياق الحديث عن اليورو والسنت. لا تخلط بين القيمة السعرية ورقم الهاتف الذي يمثل خانات معرّف.",
      eselsbruecke:
        "قبل الفعل اسأل نفسك: **ما الذي يكلف؟** مفرد → *kostet*، جمع → *kosten*. وللطلب تذكّر القالب: *Ich hätte gern + المنتج/الكمية + bitte*.",
      commonMistakes: [
        {wrong: "Was kostet die Äpfel?", right: "Was kosten die Äpfel?", classification: "error", whyAr: "الفاعل في السؤال هو die Äpfel بصيغة الجمع؛ لذلك يتفق معه الفعل kosten. استخدم kostet عند فاعل مفرد مثل das Brot."},
        {wrong: "Ich hätte gerne zwei Äpfel.", right: "Ich hätte gern zwei Äpfel.", classification: "contextual-alternative", whyAr: "gern وgerne صيغتان مستعملتان؛ المثالان صحيحان، فلا نصحح gerne على أنه خطأ."},
        {wrong: "Ich will ein Kilo Trauben. (immer unhöflich)", right: "Ich hätte gern ein Kilo Trauben. (häufig weichere Bitte)", classification: "contextual-alternative", whyAr: "Ich will صحيح نحوياً وقد يكون مباشراً بحسب السياق؛ Ich hätte gern غالباً ألطف في طلب متجر، لكن لا نحكم على الأولى بالفظاظة دائماً."},
        {wrong: "3.50 € (deutsche Preisnotation)", right: "3,50 € (deutsche Preisnotation)", classification: "error", whyAr: "يُستعمل الفاصل العشري في الكتابة الألمانية المعتادة؛ لكن اكتب الأسعار في بطاقة السعر بالأرقام، ولا تحوّل ذلك إلى قاعدة لكتابة كل عدد بالحروف."},
      ],
      relatedRuleComparison: {
        title: "هل الجملة سؤال عن السعر أم طلب شراء؟",
        content:
          "*Was kostet ein Kilo Äpfel?* سؤال عن السعر، ويحتاج البائع إلى جواب مثل *Das kostet 2,40 Euro*. أما *Ich hätte gern ein Kilo Äpfel* فهو طلب من الزبون، ولا يطلب معلومة عن الثمن بحد ذاته. ويمكن قول *Ich nehme …* للطلب أيضاً. افصل بين الوظيفتين عند بناء الحوار، ثم راقب مفرد الفاعل أو جمعه في السؤال والجواب.",
      },
    },
    {
      id: "t4",
      titleAr: "الأرقام في العنوان ورقم الهاتف",
      titleDe: "Telefonnummern und Adressen",
      explanationAr:
        "الأرقام ليست أسعاراً فقط؛ تظهر أيضاً في رقم الهاتف والرمز البريدي والعنوان. هذه بيانات تعريف، وليست كميات نحسبها. لأجل هذا التدريب، نقرأ تسلسل الهاتف والرمز البريدي خانةً خانةً، كما في *0176* → *null – eins – sieben – sechs*. لا يعني ذلك أن كل متحدث يجمع الأرقام بالطريقة نفسها؛ إذا لم تفهم رقماً فاطلب الإعادة: *Können Sie das bitte wiederholen?* أو اسأل عن تهجئة الاسم: *Können Sie das bitte buchstabieren?*\n\nفي نموذج عنوان بريدي ألماني اعتيادي يأتي الاسم، ثم الشارع ورقم المبنى، ثم الرمز البريدي والمدينة، مثل: *Leila Ben Amor / Musterstraße 12 / 12345 Musterstadt*؛ وهو نموذج افتراضي لا عنواناً حقيقياً موثقاً. تذكر Deutsche Post هذا الترتيب في إرشادها لعنوان الرسالة داخل ألمانيا. عند الإرسال إلى دولة أخرى قد تضاف دولة المقصد في السطر الأخير؛ لا تضفها إلى مثال عنوان داخلي. واكتب الرمز البريدي ذي الخانات الخمس كما يظهر في النموذج، ثم انطقه وفق طريقة التدريب المحددة.\n\nلطلب التوضيح استخدم سؤالاً كاملاً: *Wie ist Ihre Telefonnummer?*، أو *Wie ist Ihre Postleitzahl?*؛ ومع المخاطبة غير الرسمية يمكن أن تقول *deine*. وفي تهجئة الأسماء قد يفيد قول *B wie Berlin*. يعرّف DIN 5009 المراجع جدولاً لأسماء المدن في سياق معالجة النصوص والإملاء لأعمال المكاتب والإدارة؛ ليس قاعدة تلزم كل مكالمة يومية، ولا يحتاج متعلم A1 إلى افتراض أن الجميع يستخدمون الجدول نفسه. هنا نتعلم طلب التهجئة والتكرار، لا نحفظ كل جدول مهني.",
      whyAr:
        "تساعد هذه العبارات على إدخال عنوان أو رقم واضح في نموذج، وعلى إصلاح سوء الفهم في محادثة قصيرة. يحتوي نموذج Goethe الرسمي لـA1 على سؤال عن رقم هاتف أو رمز بريدي/رقم منزل في جزء التقديم الشفهي، كما يعرض نموذجاً كتابياً فيه حقول عنوان ورمز بريدي؛ لذلك تصلح بيانات الاتصال سياقاً تدريبياً إضافياً للأعداد. هذا استدلال على صلة الموضوع بالمستوى، لا ادعاء بأن هذا الدرس معتمد من Goethe أو أن مهارة الهاتف وحدها تثبت إتقان A1. عند سماع رقم غير واضح، استخدم طلب الإعادة بدلاً من تخمين مجموعة الأرقام.",
      table: {
        title: "حقول وعِبارات مفيدة",
        columns: ["الحقل/الموقف", "الصيغة", "مثال"],
        rows: [
          {label: "الشارع والرقم", cells: ["Straße + Hausnummer", "Musterstraße 12"]},
          {label: "الرمز والمدينة", cells: ["PLZ + Ort", "12345 Musterstadt"]},
          {label: "رقم الهاتف", cells: ["Wie ist Ihre Telefonnummer?", "Meine Nummer ist …"]},
          {label: "طلب إعادة", cells: ["Können Sie das wiederholen?", "Können Sie das bitte wiederholen?"]},
          {label: "طلب تهجئة", cells: ["Können Sie das buchstabieren?", "Können Sie das bitte buchstabieren?"]},
        ],
      },
      examples: [
        {de: "Meine Telefonnummer ist null eins sieben sechs …", ar: "رقم هاتفي يبدأ بصفر، واحد، سبعة، ستة … (نموذج خانات منفردة)."},
        {de: "Wie ist Ihre Telefonnummer?", ar: "ما رقم هاتف حضرتك؟ (صيغة رسمية)"},
        {de: "Wie ist deine Postleitzahl?", ar: "ما رمزك البريدي؟ (صيغة غير رسمية)"},
        {de: "Meine Adresse ist Musterstraße 12, 12345 Musterstadt.", ar: "عنواني: شارع نموذجي 12، 12345 مدينة نموذجية (مثال افتراضي)."},
        {de: "Können Sie die Nummer bitte wiederholen?", ar: "هل يمكنك إعادة الرقم، من فضلك؟"},
        {de: "Können Sie Ihren Namen bitte buchstabieren?", ar: "هل يمكنك تهجئة اسمك، من فضلك؟"},
        {de: "B wie Berlin.", ar: "حرف B مثل Berlin، كمثال على طلب التهجئة."},
        {de: "Die PLZ ist 80331.", ar: "الرمز البريدي هو 80331."},
      ],
      comparisonWithArabic:
        "ترتيب العنوان يختلف بين أنظمة البريد والبلدان، فلا نعمّم ترتيباً عربياً واحداً على جميع المتعلمين. في النموذج الألماني هنا نتبع الترتيب الذي توضحه Deutsche Post: اسم المستلم، ثم الشارع ورقم المبنى، ثم PLZ والمدينة. أما رقم الهاتف والرمز البريدي فهما معرّفان لا عدٌّ للسلع؛ نعرضهما في هذا الدرس خانةً خانةً كي يسهل تدوينهما، لكن إذا استعمل المتحدث تجميعاً آخر فاطلب التكرار أو أعد الرقم للتحقق. قارن ذلك بالسعر *23 Euro* الذي يعبّر عن قيمة عددية، لا عن سلسلة خانات.",
      eselsbruecke:
        "رتّب حقول العنوان هكذا: **اسم → شارع ورقم → PLZ ومدينة**. وللرقم غير الواضح، لا تخمّن: *Können Sie das bitte wiederholen?*؛ وللاسم: *Können Sie das bitte buchstabieren?*.",
      commonMistakes: [
        {wrong: "12 Musterstraße, Musterstadt 12345", right: "Musterstraße 12, 12345 Musterstadt", classification: "contextual-alternative", whyAr: "في النموذج الألماني الافتراضي الذي نتدرب عليه يأتي رقم المبنى بعد اسم الشارع، والرمز البريدي قبل المدينة. هذا تنسيق بريدي لا خطأ نحوي، وتختلف النماذج باختلاف البلدان."},
        {wrong: "Ich wohne in die Bahnhofstraße.", right: "Ich wohne in der Bahnhofstraße.", classification: "error", whyAr: "wohnen يصف مكاناً ثابتاً هنا؛ لذلك تأتي in مع Dativ، واسم Straße مؤنث: in der Bahnhofstraße. أما الحركة إلى شارع فيمكن أن تستخدم تركيباً مختلفاً مثل in die Straße ziehen."},
        {wrong: "Wie ist Sie Telefonnummer?", right: "Wie ist Ihre Telefonnummer?", classification: "error", whyAr: "في سؤال المخاطبة الرسمية نستخدم الملكية Ihre مع Telefonnummer المؤنث؛ وفي المخاطبة غير الرسمية يمكن أن نقول deine Telefonnummer."},
      ],
      relatedRuleComparison: {
        title: "رقمٌ يُحسب أم خانةٌ في معرّف؟",
        content:
          "إذا سألت عن ثمن 23 يورو فـ*23* كمية مالية تقرأها كعدد: *dreiundzwanzig Euro*. أما رقم الهاتف أو PLZ فيحدّد اتصالاً أو مكاناً؛ في نموذج التدريب نقرأ خاناته منفردة. هذه طريقة تعليمية معلنة وليست حكماً بأن جميع الناس ينطقون كل رقم منفرداً؛ استعمل *wiederholen* أو *buchstabieren* عند الحاجة.",
      },
    },
  ];
