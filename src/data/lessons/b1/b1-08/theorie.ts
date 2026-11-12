/**
 * b1-08 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المستقبل (Futur I): werden + Infinitiv",
      titleDe: "Das Futur I: Ich werde lernen",
      explanationAr:
        "يتكوّن Futur I من صيغة werden في المضارع ومصدر الفعل الأساسي (Ich werde morgen Deutsch lernen). في الجملة الرئيسية يأتي werden المصرف في الموقع الثاني، ويأتي المصدر في النهاية. والتصريف هو: ich werde · du wirst · er/sie/es wird · wir werden · ihr werdet · sie/Sie werden.\n\nيمكن للألمانية أن تشير إلى المستقبل بالمضارع أيضاً، ولا سيما حين يوضّح ظرف الزمن أو السياق المقصود: Ich lerne morgen / Morgen fahre ich nach Berlin. ويذكر مرجع IDS grammis أن المضارع هو الغالب عند الحديث عن أحداث مستقبلية؛ لذلك لا نحتاج إلى Futur I في كل جملة عن الغد.\n\nقد يعبّر Futur I عن حدث متوقّع في المستقبل (Die Technik wird sich weiterentwickeln)، وقد يعبّر في سياق مناسب عن تخمين في الحاضر: Er wird jetzt zu Hause sein (لعلّه في البيت الآن). ويتحدد المعنى من السياق؛ فلا توجد قاعدة تقول إن Futur I يقتصر على الوعد أو النية، ولا إن استعماله يفرض نبرة رسمية أو معنى مختلفاً ثابتاً عن المضارع.\n\nفي التصريف يتغير werden وحده بحسب الفاعل، أما الفعل الأساسي فيبقى مصدراً: Du wirst lernen، لا Du wirst lernst. وإذا كان الفعل منفصلاً أو كان معه مفعول، يبقى المصدر في نهاية الجملة: Ich werde morgen früh aufstehen. ميّز هذا البناء من الجملة التي يأتي فيها werden بمعنى «يصبح» مع صفة، ومن صيغة المبني للمجهول؛ فالمعنى يتضح من الفعل المصاحب والسياق.",
      whyAr:
        "لماذا نستخدم Futur I إذا كان المضارع يستطيع أحياناً الإشارة إلى المستقبل؟ لأن الصيغتين ليستا متطابقتين في كل سياق، لكن لا توجد بينهما قسمة جامدة من نوع «المضارع للجدول، وwerden للوعد». مثلاً، يمكن أن يقول المتحدث Ich helfe dir أو Ich werde dir helfen؛ وقد يفهم السامع وعداً أو توقعاً من السياق والنبرة، لا من الصيغة وحدها.\n\nيساعد هذا الفرق على اختيار الصيغة الملائمة: مع وقت مستقبلي واضح يكون المضارع خياراً طبيعياً، أما Futur I فيمكنه إبراز التوقع أو التخمين. لا تُترجم كل صيغة werden إلى وعد، ولا تفترض أن كل Futur I رسمي؛ اقرأ الجملة في سياقها.\n\nقارن بين ثلاث جمل لتحديد ما يضيفه السياق: Ich fahre morgen nach Tunis تصف خطة مستقبلية بظرف واضح؛ Ich werde morgen nach Tunis fahren تعرض الحدث بصيغة Futur I؛ وEr wird jetzt zu Hause sein قد تكون تخميناً عن الحاضر. البنية النحوية ثابتة في المثالين الأولين، لكن الدلالة ليست واحدة بالضرورة. اسأل: هل يوجد ظرف زمني؟ وهل يتحدث المتكلم عن خطة أم يستنتج أمراً؟ لا تحسم معنى werden وحدها قبل قراءة القرائن.",
      table: {
        title: "Futur I",
        columns: ["الضمير", "werden", "مثال"],
        rows: [
          { label: "ich", cells: ["werde", "Ich werde lernen."] },
          { label: "du", cells: ["wirst", "Du wirst verstehen."] },
          { label: "er/sie/es", cells: ["wird", "Sie wird kommen."] },
          { label: "wir", cells: ["werden", "Wir werden arbeiten."] },
          { label: "ihr", cells: ["werdet", "Ihr werdet sehen."] },
          { label: "sie/Sie", cells: ["werden", "Sie werden gewinnen."] },
        ],
      },
      examples: [
        { de: "Ich werde morgen Deutsch lernen.", ar: "سأتعلم الألمانية غداً." },
        { de: "Die Technik wird sich weiterentwickeln.", ar: "ستتطور التقنية أكثر." },
        { de: "Wir werden die Zukunft gestalten.", ar: "سنشكل المستقبل." },
        { de: "Du wirst es verstehen.", ar: "سوف تفهمها." },
        { de: "Der Computer wird immer wichtiger werden.", ar: "سيصبح الحاسوب أكثر أهمية." },
        { de: "In zehn Jahren werden wir anders arbeiten.", ar: "بعد عشر سنوات سنعمل بطريقة مختلفة." },
      ],
      comparisonWithArabic:
        "في العربية أداتا استقبال شائعتان هما سـ وسوف، وتأتيان مع الفعل المضارع (سأتعلم / سوف أتعلّم). والمقارنة تقريبية: لا يقابل كل استعمال في إحدى اللغتين تركيب واحد حرفياً.\n\nفي الألمانية، يقابل المثال «سأتعلم غداً» الجملة Ich werde morgen lernen: يحمل werden التصريف، ويبقى الفعل الأساسي مصدراً في نهاية الجملة. لذلك نقول Ich werde lernen لا Ich werde lerne.\n\nوتستطيع الألمانية أيضاً استخدام المضارع مع ظرف أو سياق يدل على المستقبل: Ich lerne morgen. لهذا لا نضيف werde آلياً إلى كل جملة عربية عن المستقبل. تذكّر شكل الجملة الألمانية في المثال، ثم اختر بين Futur I والمضارع وفق المعنى والسياق.",
      eselsbruecke:
        "في هذا الباب: werden المصرف + مصدر في آخر الجملة؛ وقد يدل Futur I على المستقبل أو التخمين بحسب السياق.",
      commonMistakes: [
        { wrong: "Ich werde morgen lernen werde. (تضاعف)", right: "Ich werde morgen lernen.", whyAr: "الخطأ خَلْط بين صيغة معربة عند اسمين: صيغة المستقبل تحتاج einmal werden — في المرتبة الثانية مُصرَّفاً — ولا تُكرَّرة في النهاية. والنهاية تحمل المصدر المجرّد lernen لا werde. والسبب في هذا الخطأ أن المتعلّم يحمل صورة «wird … werden» من جملة مثل Der Computer wird immer wichtiger werden (هذا فعلان فيصلحان لأن الأول صفة والثاني مساعد) فينقلها إلى موضع لا يصحّ فيه." },
        { wrong: "Ich werde lerne.", right: "Ich werde lernen.", whyAr: "يأخذ werden علامة الشخص والتصريف، ويبقى الفعل الأساسي مصدراً: lernen. لذلك لا نضيف نهاية الشخص إلى الفعل الأساسي في هذه الصيغة." },
        { wrong: "Ich wirst lernen.", right: "Ich werde lernen.", whyAr: "هذا خطأ تصريف لا خطأ تركيب: صاحبه عرف أن du تأخذ wirst وتذكّرها جيداً لأنها الشاذّة في المجموعة، ثم عمّمها على غير موضعها. والقاعدة أن werden فعل شاذ في المضارع أيضاً مثل كل الأفعال الشاذّة في اللوحة: ich werde بلا نهاية، du wirst، er wird (بالحرف d)، والباقي منتظم (werden · werdet · werden). فانظر إلى الفاعل أولاً دائماً." },
      ],
      relatedRuleComparison: {
        title: "Futur أم Präsens + ظرف؟",
        content: "كلاهما يعبّر عن المستقبل: Ich lerne morgen (المضارع مع ظرف زمن، شائع في المحادثة اليومية). Ich werde morgen lernen (المستقبل، ويُستعمل كثيراً للتوقع والوعد والنية). لا تُعد أي منهما خطأً.",
      },
    },
    {
      id: "t2",
      titleAr: "الروابط المزدوجة (Zweiteilige Konnektoren)",
      titleDe: "nicht nur ... sondern auch, weder ... noch, entweder ... oder",
      explanationAr:
        "تربط هذه التراكيب جزأين من الجملة، ولكل زوج معنى شائع: nicht nur … sondern auch (ليس فقط … بل أيضاً)، sowohl … als auch (كلاهما)، weder … noch (لا … ولا)، entweder … oder (إما … أو)، وeinerseits … andererseits (من ناحية … ومن ناحية أخرى). ومن المفيد غالباً أن تجعل الجزأين متوازيين في الصياغة، مثل اسمين أو عبارتين متشابهتين؛ لكن هذه وسيلة لتحسين الوضوح، لا قاعدة آلية تقول إن كليهما يجب أن يكون من الصنف النحوي نفسه في كل جملة.\n\nأما je … desto فتربط تغيّرين متناسبين: Je mehr du übst, desto besser wirst du. يأتي الفعل المصرف في نهاية جملة je التابعة، بينما تأتي جملة desto بترتيب الجملة الرئيسية؛ فإذا بدأناها بالمقارنة (desto besser)، يأتي الفعل المصرف بعدها ثم الفاعل.\n\nاختر الرابط بحسب العلاقة المقصودة: إضافة مؤكدة، أو جمع، أو نفي الطرفين، أو اختيار بين بديلين، أو عرض وجهين، أو مقارنة متناسبة. لا يحدد الرابط وحده نوع النص أو نبرته، ويمكن استعمال الأمثلة في المحادثة والكتابة معاً.\n\nتساعد علامات الترقيم على رؤية طرفي الزوج، لكنها لا تختار الرابط نيابةً عنك: حدد أولاً إن كنت تضيف معلومة أو تنفي الطرفين أو تعرض بديلاً. ثم راجع موضع الفعل، خصوصاً بعد desto وفي الجمل التي تبدأ بـeinerseits أو andererseits. جرّب قراءة الجملة بصوت مسموع؛ فإذا لم تتضح العلاقة بين الجزأين، أعد صياغتها قبل أن تضيف الرابط.",
      whyAr:
        "لا يكفي حفظ الكلمات منفردة؛ اختر الزوج الذي يعبّر عن العلاقة التي تريدها. فـsowohl … als auch تجمع عنصرين، وweder … noch تنفيهما، وentweder … oder تعرض بدائل. أما einerseits … andererseits فتساعد على عرض جانبين، وnicht nur … sondern auch تؤكد الإضافة الثانية.\n\nتساعد هذه الروابط القارئ أو السامع على متابعة بنية الكلام، لكنها لا تضمن وحدها أن يكون النص أسهل أو أكثر أدباً. وضوح المثال وترتيب أفكاره والسياق عوامل مهمة أيضاً. ابدأ بجمل قصيرة متوازية، ثم جرّب استعمال الروابط في جمل أطول.\n\nانتبه إلى أن الزوج قد يصل بين عنصرين متقابلين من دون أن يفرض قلب ترتيب الجملة كلها. في «Er spricht nicht nur Deutsch, sondern auch Englisch» يتكرر المفعول بعد sondern auch، بينما في «Einerseits spart die Technik Zeit, andererseits müssen ihre Vorschläge geprüft werden» يبدأ الشطر الثاني بالظرف andererseits، لذلك يأتي الفعل المصرف بعده وفق ترتيب الجملة الرئيسية. أما «Je mehr du übst» فشطر تابع، ولهذا يظهر الفعل في نهايته. افحص نوع كل شطر على حدة بدلاً من نقل قاعدة ترتيب واحدة إلى جميع الأزواج.",
      table: {
        title: "الروابط المزدوجة",
        columns: ["الرابط", "المعنى", "مثال"],
        rows: [
          { label: "nicht nur ... sondern auch", cells: ["ليس فقط... بل أيضاً", "Er spricht nicht nur Deutsch, sondern auch Englisch."] },
          { label: "sowohl ... als auch", cells: ["كلاهما", "Sowohl Sami als auch Anna lernen Deutsch."] },
          { label: "weder ... noch", cells: ["لا... ولا", "Ich habe weder Zeit noch Geld."] },
          { label: "entweder ... oder", cells: ["إما... أو", "Entweder fahren wir mit dem Bus oder wir nehmen den Zug."] },
          { label: "je ... desto", cells: ["كلما... كلما", "Je mehr du übst, desto besser wirst du."] },
          { label: "einerseits ... andererseits", cells: ["من ناحية... ومن ناحية أخرى", "Einerseits spart die Technik Zeit, andererseits macht sie abhängig."] },
        ],
      },
      examples: [
        { de: "Die Technik ist nicht nur praktisch, sondern auch spannend.", ar: "التقنية ليست عملية فقط بل مثيرة أيضاً." },
        { de: "Sowohl das Handy als auch der Computer sind nützlich.", ar: "كل من الهاتف والحاسوب مفيدان." },
        { de: "Ich habe weder Zeit noch Geduld.", ar: "ليس لدي وقت ولا صبر." },
        { de: "Entweder fahren wir mit dem Bus oder wir nehmen den Zug.", ar: "إما أن نذهب بالحافلة أو نستقل القطار." },
        { de: "Je mehr du übst, desto sicherer wirst du.", ar: "كلما تدربت أكثر، أصبحت أكثر ثقة." },
        { de: "Einerseits kann ein Programm Zeit sparen, andererseits müssen seine Vorschläge geprüft werden.", ar: "من ناحية قد يوفر البرنامج الوقت، ومن ناحية أخرى ينبغي مراجعة اقتراحاته." },
        { de: "Weder die Schule noch die Eltern können das allein lösen.", ar: "لا المدرسة ولا الآباء يستطيعون حلّ ذلك وحدهم." },
      ],
      comparisonWithArabic:
        "توجد في العربية تعبيرات تقارب بعض هذه المعاني، مثل «ليس فقط … بل أيضاً» و«لا … ولا» و«إما … أو». لكن المقابلة بين اللغتين تقريبية، ولا يلزم أن تتطابق صياغة الرابط أو ترتيب الجملة في كل مثال.\n\nفي مثال je … desto، تأتي جملة je التابعة بفعلها المصرف في النهاية، ثم تُصاغ جملة desto على ترتيب الجملة الرئيسية: Je mehr du übst, desto besser wirst du. ركّز على هذا النمط الألماني نفسه، ولا تنقل ترتيب الكلمات آلياً من العربية.",
      eselsbruecke:
        "«الخمسة التوأم»: nicht nur-sondern auch، sowohl-als auch، weder-noch، entweder-oder، je-desto. احفظها كثنائيات متلاصقة.",
      commonMistakes: [
        { wrong: "Er spricht nicht nur Deutsch, sondern und Englisch.", right: "Er spricht nicht nur Deutsch, sondern auch Englisch.", whyAr: "في هذا المثال نستخدم الزوج الثابت nicht nur … sondern auch؛ لا نجمع أداتي الربط sondern وund في الموضع نفسه." },
        { wrong: "Ich habe weder Zeit oder Geld.", right: "Ich habe weder Zeit noch Geld.", whyAr: "الزوج الشائع لنفي الطرفين هو weder … noch، أما entweder … oder فيعرض اختياراً بين بديلين. لذلك لا نخلط بين noch وoder في هذا المثال." },
        { wrong: "Je mehr du übst, desto besser du wirst.", right: "Je mehr du übst, desto besser wirst du.", whyAr: "في هذا المثال تبدأ جملة desto بالمقارنة besser، لذا يأتي الفعل المصرف بعدها ثم الفاعل: desto besser wirst du. أما جملة je التابعة ففعلها في النهاية." },
      ],
      relatedRuleComparison: {
        title: "entweder... oder أم oder؟",
        content: "oder = أو. أما entweder... oder فيُستعمل للاختيار بين بديلين: إما هذا أو ذاك.",
      },
    },
  ];
