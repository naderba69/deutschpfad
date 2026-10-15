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
        "المستقبل في الألمانية يُبنى بفعلين: werden مُصرَّفاً في المرتبة الثانية + المصدر في آخر الجملة (Ich werde morgen Deutsch lernen). وتصريف werden هو نفسه الذي عرفته من قبل: ich werde · du wirst · er/sie/es wird · wir werden · ihr werdet · sie/Sie werden.\n\nوهنا مفارقة عملية يفاجأ بها المتعلّم العربي: الألمانية لا تحتاج إلى هذا التركيب في كثير من الأحيان، لأنها تعتمد المضارع مع ظرف زمان للمستقبل القريب (Ich lerne morgen / Morgen fahre ich nach Berlin). فالمستقبل ليس زمناً مستقلاً بنيوياً كما في «سوف» العربية، بل صيغة تُستعمل في مواضع محددة.\n\nويُستعمل Futur I في أربعة مواضع: الوعد (Ich werde dir helfen)، والتوقع والتنبؤ (Die Technik wird sich weiter entwickeln)، والنية نُطقاً (Wir werden das morgen besprechen)، والاستنتاج المؤكَّد عن الحاضر (Er wird jetzt zu Hause sein — بمعنى «يبدو أنه في البيت الآن»). وهذا الاستعمال الأخير لا علاقة له بالمستقبل أصلاً، بل بالإحاطة والترجيح — ولهذا ينبغي ألا تُترجم جملته إلى المستقبل دائماً.",
      whyAr:
        "لماذا تبني الألمانية المستقبل بفعلين — مساعد ومصدر — وإذا كان المضارع يكفي فلماذا يوجد تركيب على الإطلاق؟ لأن لكل تركيب وظيفة لا يؤديها الآخر: المضارع مع «morgen» يذكر الوقت عنصراً في الجملة (أخبر عن ترتيب قائم)، أما werden + مصدر فيحمل جواباً عن الحادثة نفسها: نية المتكلّم ووعده وتوقعه. فمن قال Ich helfe dir فكأنه وصف فحوى الجدول، ومن قال Ich werde dir helfen فقد أعطى وعداً.\n\nوفي الألمانية المعاصرة قَلّ استعمال Futur I في الكلام اليومي، وصار يعطي نبرة أشدّ جدّاً أو نبرة رسمية: تُستعمل غالباً في الأخبار والبيانات والتقارير ووثائق الفنية (Der Minister wird morgen …)، وفي النبوءات والتوقعات (In zehn Jahren werden …).\n\nوهذه الملاحظة تفيد المتعلّم مرتين: (1) لا يُثقل كلامه بـwerde في كل جملة عن الغد، لأن الناس لا تتكلّم هكذا. (2) يعرف أن وجود werde في نصّ ما قد يكون إشارة إلى التزام أو خبر رسمي، فيترجم / يفهم النبرة بدل المعنى فقط — والترجمة الجيدة هي التي تحفظ النبرة قبل المفردات.",
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
        { de: "Die Technik wird sich weiter entwickeln.", ar: "ستتطور التقنية أكثر." },
        { de: "Wir werden die Zukunft gestalten.", ar: "سنشكل المستقبل." },
        { de: "Du wirst es verstehen.", ar: "سوف تفهمها." },
        { de: "Der Computer wird immer wichtiger werden.", ar: "سيصبح الحاسوب أكثر أهمية." },
        { de: "In zehn Jahren werden wir anders arbeiten.", ar: "بعد عشر سنوات سنعمل بطريقة مختلفة." },
      ],
      comparisonWithArabic:
        "العربية تملك حرفاً واحداً للاستقبال: سـ (سأتعلم) وسوف (سوف يتغيّر)، وتحمل النبرة الزمنية بكلمة واحدة ملتصقة بالمضارع. ولهذا لا يحتاج العربي إلى تغيير صيغة الفعل شيء — والفعل يبقى على شكل المضارع في المراد.\n\nوالألمانية تُبنى المسألة على فعلين: فيكون «سأتعلم» = ich werde lernen، حيث يقابل «س» كلمة werden كاملة، ويقابل «أتعلم» مصدراً مجرّداً بلا تصريف. فالمتعلّم العربي يحمل عادةً أن الاستقبال فيصرف الفعل الذي بعده — فيقع في «ich werde lerne» — والصواب أن يُجمَّد الفعل في المصدر ويبقى التصريف كله للفعل werden.\n\nوأما الفرق الثاني فهو في مقدار الاستعمال: «س» و»سوف» تُستعمل في كل جملة عن المستقبل تقريباً، والبسطية تجعله أقرب وأبقى. أما الألمانية فتكثر من المضارع + ظرف (morgen · nächste Woche) لأنها تكتفي بالدلالة الظرفية، وتُبقي werden للوعد والتنبؤ والنبرة الرسمية. فقلّة werde في الكلام الألماني ليست خطأً بل خيار، ومنع السنّ من النقل الحرفي للألمانية الحرفية.",
      eselsbruecke:
        "«werden + مصدر = سوف» — التوقع والنية. وتذكّر مثلث werden: + صفة (يصبح) / + Partizip II (مجهول) / + مصدر (مستقبل).",
      commonMistakes: [
        { wrong: "Ich werde morgen lernen werde. (تضاعف)", right: "Ich werde morgen lernen.", whyAr: "الخطأ خَلْط بين صيغة معربة عند اسمين: صيغة المستقبل تحتاج einmal werden — في المرتبة الثانية مُصرَّفاً — ولا تُكرَّرة في النهاية. والنهاية تحمل المصدر المجرّد lernen لا werde. والسبب في هذا الخطأ أن المتعلّم يحمل صورة «wird … werden» من جملة مثل Der Computer wird immer wichtiger werden (هذا فعلان فيصلحان لأن الأول صفة والثاني مساعد) فينقلها إلى موضع لا يصحّ فيه." },
        { wrong: "Ich werde lerne (مصدر أم تصريف؟)", right: "Ich werde lernen (مصدر).", whyAr: "هذا أخطر خطأ في باب المستقبل لأنه لا يُسمع جيداً: الاثنان متماسكان في الصورة، والفرق في الصيغة فقط. والقاعدة صلبة: المساعد werden يحمل كل التصريف وحده (ich werde)، والمصدر المجرّد يحمل المعنى مكانه في النهاية (lernen) بلا نهاية اشتراكية. ولهذا من حَمَل تصريفه إلى المصدر يكون قد صرّف الفعل مرتين في الجملة: مرة في werden ومرة في lerne — وهي بنية تحرّمها الألمانية." },
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
        "الروابط المزدوجة تعمل على جزأين متوازيين في الجملة، فتربطهما في وحدة معنى واحدة: nicht nur … sondern auch (ليس فقط … بل أيضاً)، وsowohl … als auch (كذا وكذا)، وweder … noch (لا … ولا)، وentweder … oder (إما … أو)، وeinerseits … andererseits (من ناحية … ومن ناحية أخرى).\n\nوجوهر المسألة أنها تُعلن التوازي مسبقاً: حين يقول المتكلم nicht nur فقد أعلن من أول الجملة أن جزءاً ثانياً آتٍ، فينتظره السامع. ومن ثمة يُشترط التوازي في الصنف النحوي: إن كان الجزء الأول اسماً فالثاني اسم، وإن كان فعالاً فالثاني فعال. ولهذا يُنظر في diese الروابط إلى «موازنة البلاغة» لا إلى مجرد الربط.\n\nوأما je … desto فهي الاستثناء الوحيد في الترتيب: بعد je تأتي الجملة الثانوية (Je mehr du übst …) فينتقل فعلها إلى النهاية، وبعد desto تأتي صفة بدرجة مقارنة ثم الفعل المُصرَّف ثم الفاعل (… desto besser wirst du). ومن ثمة هي أثقل الروابط المزدوجة تركيباً وأجملها أثراً في الكتابة، وفيها فائدتان في الوقت نفسه: فتُظهر أن المتكلّم يفكّر في علاقة بين تغيّرين لا في حكمين منفصلين.\n\nوموضع هذه الروابط في الكتابة المدرسية والأكاديمية كبير: بها يُبنى التلخيص (einerseits … andererseits) والتحليل (nicht nur … sondern auch) والاستنتاج المقارن (je … desto). ويُذيّل أحدها في أكثر البيانات والتقارير الإقتصادية في الإعلام الألماني، ومنه يأخذ المتعلّم علامة نصّية تُصنّف نوع النصّ من أوله.",
      whyAr:
        "لماذا لا يكفي und وoder وحدهما؟ لأن الروابط المزدوجة لا تربط فقط، بل تُصرّح بحُكم المتكلّم على الطرفين معاً: «سواء هذا أو ذاك» في sowohl … als auch، و»رفضهما جميعاً» في weder … noch، و»حصر الاختيار بينهما» في entweder … oder. ولو استُبدلت هذه الروابط بـund وoder لذُهب الحكمُ الأول وذهبت معه نبرة الجملة وحُدّتها.\n\nوهذا يظهر في القراءة يوماً بعد يوم: في نصّ الرأي، يعطيك «Einerseits … andererseits» إشارة واضحة إلى أن الكاتب سيعرض الوجهين قبل الحُكم، وهذا يهيئك للبنية لا للمعنى فقط. والكاتب المحترف يعرف أن القارئ الألماني صار مدرّباً على هذه الإشارات.\n\nومن ثمة تكون هذه الروابط أداة «إشارة» لا أداة ربط فقط: تُعلن للناس بنية جملتك ومعها موقفك من الطرفين معاً. وهذا ما يجعل نصّاً مكتوباً بها أسهل في المتابعة، ويجعل الحوار بها أكثر أدباً في العطاء لا أكثر ثقلاً.",
      table: {
        title: "الروابط المزدوجة",
        columns: ["الرابط", "المعنى", "مثال"],
        rows: [
          { label: "nicht nur ... sondern auch", cells: ["ليس فقط... بل أيضاً", "Er spricht nicht nur Deutsch, sondern auch Englisch."] },
          { label: "sowohl ... als auch", cells: ["كلاهما", "Sowohl Sami als auch Anna lernen Deutsch."] },
          { label: "weder ... noch", cells: ["لا... ولا", "Ich habe weder Zeit noch Geld."] },
          { label: "entweder ... oder", cells: ["إما... أو", "Entweder du lernst, oder du bestehst nicht."] },
          { label: "je ... desto", cells: ["كلما... كلما", "Je mehr du übst, desto besser wirst du."] },
          { label: "einerseits ... andererseits", cells: ["من ناحية... ومن ناحية أخرى", "Einerseits spart die Technik Zeit, andererseits macht sie abhängig."] },
        ],
      },
      examples: [
        { de: "Die Technik ist nicht nur praktisch, sondern auch spannend.", ar: "التقنية ليست عملية فقط بل مثيرة أيضاً." },
        { de: "Sowohl das Handy als auch der Computer sind nützlich.", ar: "كل من الهاتف والحاسوب مفيدان." },
        { de: "Ich habe weder Zeit noch Geduld.", ar: "ليس لدي وقت ولا صبر." },
        { de: "Entweder wir passen uns an, oder wir bleiben zurück.", ar: "إما أن نتكيف أو نبقى متخلفين." },
        { de: "Je mehr Technik wir haben, desto schneller leben wir.", ar: "كلما زادت التقنية زادت سرعة حياتنا." },
        { de: "Einerseits ist das Smartphone praktisch, andererseits kostet es viel Zeit.", ar: "من ناحية الهاتف الذكي عملي، ومن ناحية أخرى يكلّف وقتاً كثيراً." },
        { de: "Weder die Schule noch die Eltern können das allein lösen.", ar: "لا المدرسة ولا الآباء يستطيعون حلّ ذلك وحدهم." },
      ],
      comparisonWithArabic:
        "العربية تملك النظام نفسه بكلمات صريحة: «ليس فقط … بل أيضاً»، و»إما … أو»، و»لا … ولا»، و»سواء … أو»، و»من ناحية … ومن ناحية أخرى». فالتقابل شبه كامل في المعنى، وهذه القسمة تُحسب للمتعلّم العربي.\n\nلكن الفرق في السلوك النحوي: العربية تعطف بعد أداة الربط بلا تغيّر في ترتيب الفعل (الجملة تبقى على نظامها)، أما الألمانية فتُدخل التغيير في موضع واحد فقط — je … desto — حيث ينتقل الفعل بعد je إلى النهاية وبعد desto إلى المرتبة الأولى.\n\nوالفرق الثالث في الاستعمال: العربية الفصحى تكثر لفظتين أخريين على نفس النهج: «ما … وما …» و»إمّا … وإمّا»، وأما اللهجة فتقول «لا … ولا» و»يا … يا»، وهذا في الألمانية العامية يقابله «weder … noch» في النبرة الرسمية و»entweder … oder» في المحادثة اليومية. فالتوازي في النبرتين أقرب ممّا يظنّ المتعلّم: العربية العالمة والفصحى لا تفصلان هنا في المعنى بمقدار ما تفصلان في النبرة.",
      eselsbruecke:
        "«الخمسة التوأم»: nicht nur-sondern auch، sowohl-als auch، weder-noch، entweder-oder، je-desto. احفظها كثنائيات متلاصقة.",
      commonMistakes: [
        { wrong: "Er spricht nicht nur Deutsch und auch Englisch.", right: "Er spricht nicht nur Deutsch, sondern auch Englisch.", whyAr: "الرابط مزدوج ويجب أن تُستوفى أجزاؤه كما هي: nicht nur … sondern auch — لا أن يُستبدل جزؤه الثاني بـund auch لأن هذه تُلفق بين غير متوازنين. ولو قبلت «und auch» لفَقَدت الجملة إعلانها الحُكمي: «ليس فقط … بل أيضاً» ترفع الجزء الثاني وتُبرزه، وهي بذلك تعطي الجزء الثاني أكثر من وزن «أيضاً» المفردة عند العربية، ولذلك تعلم أن ننظر إلى الرابط كوحدة لا ككلمتين." },
        { wrong: "Ich habe weder Zeit oder Geld.", right: "Ich habe weder Zeit noch Geld.", whyAr: "هذا خطأ تشابه: المتعلّم يخلط بين «لا … ولا» و»إما … أو» فيضع oder بعد weder. ولكل زوجين معناهما المخصوص: weder … noch لنفي الطرفبن معاً (ليس عندي وقت ولا مال — أي لا هذا ولا ذاك)، وentweder … oder للتخيير بينهما (إما هذا أو ذاك). فإذا بدأت بوeder فالزوج الممنوع هو oder لأنه سينتج إخباراً لا تخييراً، وهو ليس ما قُصد." },
        { wrong: "Je mehr du übst, desto besser du wirst.", right: "Je mehr du übst, desto besser wirst du.", whyAr: "بعد desto تحتل الصفة المقارنة (besser) المرتبة الأولى، فيأتي الفعل المُصرَّف ثانياً (wirst) ثم الفاعل (du). والصورة الخاطئة «desto besser du wirst» تنقل ترتيب الجملة العادية إلى موضع جعلت منه الصفة المرتبة الأولى — عكس قيادة الجملة الألمانية. وهذا التركيب وحده من بين الروابط المزدوجة كلها هو الذي يُحوّل الفعل، فاحفظ له قاعدته الخاصة." },
      ],
      relatedRuleComparison: {
        title: "entweder... oder أم oder؟",
        content: "oder = أو. أما entweder... oder فيُستعمل للاختيار بين بديلين: إما هذا أو ذاك.",
      },
    },
  ];
