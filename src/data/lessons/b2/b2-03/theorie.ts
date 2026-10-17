/**
 * b2-03 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الجمل النسبية المتقدمة: مع حروف الجر + was/wo",
      titleDe: "Relativsätze mit Präpositionen, was und wo",
      explanationAr:
        "أول نمط هو النسبية مع حرف الجر: «Der Mann, auf den ich warte, ist mein Anwalt». هنا ثلاثة قرارات في وقت واحد: حرف الجر الذي يفرضه الفعل (warten auf)، وحالة الضمير النسبي بحسب ذلك الحرف (auf + Akkusativ ⇒ den)، وموضع حرف الجر قبل الضمير لا بعده. والقاعدة صارمة: حرف الجر في الألمانية المكتوبة لا يبقى في نهاية الجملة الثانوية، لأنه ليس حرفاً منفصلاً بل جزء من الضمير النسبي نفسه؛ ويخطئ المتعلّم العربي هنا لأن العربية تسمح بـ«الذي أنتظره» حيث يبقى الضمير متصلاً بالفعل في آخره.\n\nوالنمط الثاني هو الظرف الحرفي (Relativadverb) wofür/womit/worüber، ويُستعمل عندما يعود الضمير على شيء غير محدّد أو على مضمون جملة كاملة: «Ich weiß nicht, wofür er sich interessiert» (لا أعرف ما الذي يهتم به). وهو في الأصل wo + für، أي حرف الجر مُقدَّماً على wo، ولهذا يأخذ نفس حرف الفعل (sich interessieren für). ولا يصحّ أن تقول «für was» في اللغة المعيارية، لأن هذه صيغة دارجة في الكلام لا تُكتب في التقرير الرسمي.\n\nوالنمط الثالث هو was بعد ضمائر الشمول: alles، nichts، etwas، vieles، das Erste. «Alles, was du sagst, kann vor Gericht verwendet werden» — هنا لا يصلح das لأن «كل ما تقول» غير محدّد. وكذلك بعد اسم مفعول مؤنث أو صفة تفضيلية: «Das Beste, was wir tun können». أما إن كان المرجع شيئاً محدّداً (das Buch, das Gesetz)، فتعود das العادية، وهي التي نراها في الأحكام والعقود.\n\nوالنمط الرابع هو wo للمكان بديلاً عن in dem: «Das Land, wo ich geboren wurde, ist Tunesien». وهو أقصر وأخفّ في الكلام، لكنه أضعف في الكتابة الرسمية؛ لذلك يُستحسن في المقال القانوني أو التقرير الرسمي استخدام «in dem» لأن الدقة في المكان مطلوبة. وأما wohin وwoher فتبقى للاتجاه لا للمكان الثابت، ولذلك لا تصلح بديلاً عن wo إلا إذا كان الفعل يدلّ على حركة نحو مكان أو منه.",
      whyAr:
        "أولاً تنبيه: حرف الجر هنا ليس اختيارياً بل يفرضه الفعل — Der Mann, auf den ich warte لأن warten auf، وDas Gesetz, auf das sich alle berufen لأن sich berufen auf. راجع الأفعال المتبوعة بحروف جر ثابتة (warten auf، sich berufen auf، sich interessieren für) قبل المتابعة: من لا يعرف حرف الفعل لا يستطيع بناء نسبيته. وكذلك wofür ليست إلا wo + für مأخوذاً من sich interessieren für. ولماذا wo بدل in dem؟ لأن wo «يختصر» النسبية المكانية: das Land, wo ich lebe — أقصر في الكلام. وwas يختصر النسبية بعد «كل شيء»: Alles, was... هذه الاختصارات علامة الطلاقة.",
      table: {
        title: "الضمائر النسبية المتقدمة",
        columns: ["النوع", "التركيب", "مثال"],
        rows: [
          { label: "حرف جر + ضمير", cells: ["auf/über/mit + den/dem/der", "Der Mann, auf den ich warte"] },
          { label: "wo (مكان)", cells: ["wo = in dem", "Das Land, wo ich lebe"] },
          { label: "was (جملة كاملة)", cells: ["was بعد alles/nichts", "Alles, was ich weiß"] },
          { label: "wo+حرف جر", cells: ["wofür, womit, wobei", "Ich weiß, wofür er sich interessiert"] },
        ],
      },
      examples: [
        { de: "Der Anwalt, mit dem ich gesprochen habe, ist sehr erfahren.", ar: "المحامي الذي تحدثت معه خبير جداً." },
        { de: "Das Gesetz, auf das sich alle berufen, ist alt.", ar: "القانون الذي يستند إليه الجميع قديم." },
        { de: "Alles, was du sagst, kann vor Gericht verwendet werden.", ar: "كل ما تقوله يمكن استخدامه أمام المحكمة." },
        { de: "Das Land, wo ich geboren wurde, ist Tunesien.", ar: "البلد الذي ولدت فيه هو تونس." },
        { de: "Ich weiß nicht, wofür er sich interessiert.", ar: "لا أعرف ما الذي يهتم به." },
        { de: "Das Gesetz, an das ich dachte, ist schon geändert worden.", ar: "القانون الذي فكّرت فيه قد تم تغييره بالفعل." },
      ],
      comparisonWithArabic:
        "«الذي تحدثت معه» = mit dem ich gesprochen habe — في العربية يلتصق حرف الجر بالضمير («معه») ويبقى في آخر الجملة، والألمانية تضعه قبل الضمير النسبي لأنها تجعله جزءاً منه. و«كل ما تقوله» = Alles, was du sagst — تقابل مباشر بلا تعديل، لأن العربية أيضاً لا تستعمل «الذي» بعد الشمول بل «ما». و«البلد الذي ولدت فيه» = Das Land, wo ich geboren wurde: انتبه أن العربية تحتاج ضميراً عائداً («فيه») بينما الألمانية تعتبر wo وحدها كافية فلا تحتاج «darin» إضافياً. وفي العربية يمكنك أن تقول «القانون الذي أستند إليه»، حيث يستقر حرف الجر في آخر الجملة مرتبطاً بالضمير؛ ولو نقلتها حرفياً إلى الألمانية لخرجت جملة خاطئة (Das Gesetz, das ich berufe mich auf) لأن الألمانية لا تعرف هذا التمركز الطرفي لحرف الجر في الجملة الموصولة. فالقاعدة للمتعلّم العربي واحدة: كلما رأيت حرف جر في آخر جملتك العربية العائدة، أخّرجه الألماني إلى الأمام مع الضمير الموصول.",
      eselsbruecke:
        "«حرف الجر يسبق الضمير»: auf + den، mit + dem. و«wo = في المكان الذي» — اختصار النسبية المكانية. و«was بعد كل شيء»: Alles, was...",
      commonMistakes: [
        { wrong: "Der Mann, den ich warte auf. (حرف الجر في النهاية)", right: "Der Mann, auf den ich warte.", whyAr: "حرف الجر جزء من الضمير النسبي في الألمانية، فيجب أن يتقدّمه ولا يبقى في آخر الجملة؛ وهذا أشيع خطأ عند المتعلّمين العرب لأن لغتهم تلتصق بالضمير العائد في النهاية." },
        { wrong: "Alles, das du sagst (das بدل was)", right: "Alles, was du sagst.", whyAr: "بعد ضمائر الشمول في الألمانية لا يكون الضمير النسبي das بل was، لأن المرجع غير محدّد؛ ونظير ذلك في العربية أن تُعطف بـ«ما» لا بـ«الذي»: «كل ما تقوله» لا «كل الذي تقوله»." },
        { wrong: "wo أم woher أم wohin؟", right: "wo = مكان (حيث). woher = من حيث. wohin = إلى حيث", whyAr: "الأدوات المكانية ثلاث مختلفة الوظيفة: wo للثبات في مكان، وwoher للانطلاق منه، وwohin للاتجاه إليه؛ والخلط بينها خطأ في الاتجاه وليس في الشكل، ولذلك لا يظهر في المدقّق الإملائي أبداً." },
      ],
      relatedRuleComparison: {
        title: "wo أم in dem؟",
        content: "كلاهما مكاني: in dem أدق في الكتابة الرسمية، وwo أخف في الكلام. Das Land, in dem ich lebe = Das Land, wo ich lebe. اختر wo في الكلام وin dem في الكتابة الرسمية.",
      },
    },
    {
      id: "t2",
      titleAr: "تراكيب المبني للمجهول المتقدمة",
      titleDe: "Alternativen zum Passiv",
      explanationAr: "المجموعة الأولى هي «sein + zu + مصدر»، وهي بديل رسمي للمجهول بالناقص: «Das ist zu lösen» تعني «يمكن حلّه» أو «يجب حلّه» بحسب السياق، وتقابل في المعيارية «Das kann gelöst werden» و«Das muss gelöst werden». الفرق أن هذه الصيغة تُخفي الفاعل إخفاءً تاماً وتُلبس الجملة ثوباً إدارياً: تجدها في العقود واللوائح والتقارير أكثر مما تجدها في الكلام.\n\nوالمجموعة الثانية «sein + Partizip II» هي مجهول الحالة: «Das Problem ist gelöst» تصف نتيجة قائمة لا عملية جارية، ونظيرها في العربية اسم المفعول «محلولة». ولا يجوز الخلط بين الحالة والعملية: «Das Problem wird gelöst» تعني أن الحل يجري الآن، و«Das Problem ist gelöst» تعني أنه انتهى، ونتيجته قائمة في الحاضر.\n\nوالمجموعة الثالثة هي «lassen sich» + مصدر: «Das Problem lässt sich lösen». وهذه صيغة وسط بين الرسمي واليومي تصف إمكانية عملية سلسة، وتقابل «Das Problem kann gelöst werden» مع نبرة أقل برودة. ومن الخطأ أن تظنّ أن «lässt sich» و«kann ... werden» مترادفتان تماماً: فالأولى تفيد أن الأمر يسير بطبعه، والثانية تفيد إمكانية عامة قد تحتاج شروطاً.\n\nوالمجموعة الرابعة هي صفة «-bar» المشتقة من الجذر: «lösbar» (قابل للحل)، «machbar» (قابل للتنفيذ)، «senkbar» (قابل للخفض). وهي أكثف الصيغ لأنها تختصر الجملة كلها في نعت واحد وتسمح بدمجها في أي تركيب آخر، لكنها تُستعمل عادةً مع الأفعال التي تسمح بذلك، ولا تُصنع قياساً من كل فعل؛ فـ«trinkbar» شائعة أما صياغة قياسية من كل فعل فهي تعبير غريب.",
      whyAr: "لماذا هذه البدائل الأربعة معاً في درس واحد؟ لأن النصوص القانونية والإدارية لا تتكلّم بصيغة واحدة، بل تختار الصيغة بحسب المراد: إلزاماً (ist zu bezahlen)، أو حالة قائمة (ist gelöst)، أو إمكانية عملية (lässt sich lösen)، أو نعتاً مختصراً (lösbar). ومن لا يعرف البدائل الأربعة يقرأ العقود قراءة سطحية: يفهم أن شيئاً «يجب» فعله بينما النص يقول إنه «يمكن» فعله، أو يقرأ نتيجة قائمة على أنها عملية مستقبلية — والفرق في القانون ليس تفصيلاً بل هو محلّ الخلاف نفسه. ولذلك يتكرّر هذا الباب في أسئلة القراءة والفهم الإداري أكثر من أي باب آخر، ويُعدّ إتقانه علامة على أن المتعلّم يستطيع التعامل مع اللغة كلغة عمل لا كلغة تمرين.",
      table: {
        title: "بدائل المبني للمجهول",
        columns: ["التركيب", "المعنى", "مثال", "بالعربية"],
        rows: [
          { label: "Passiv عادي", cells: ["حدث يقع", "Das Problem wird gelöst.", "تُحلّ المشكلة."] },
          { label: "sein + zu + مصدر", cells: ["إمكان أو وجوب", "Das Problem ist zu lösen.", "يمكن حل المشكلة."] },
          { label: "sein + Partizip II", cells: ["حالة ناتجة", "Das Problem ist gelöst.", "المشكلة محلولة."] },
          { label: "lassen sich", cells: ["إمكان", "Das Problem lässt sich lösen.", "المشكلة قابلة للحل."] },
          { label: "صفة بـ -bar", cells: ["قابلية", "Das Problem ist lösbar.", "المشكلة قابلة للحل."] },
        ],
      },
      examples: [
        { de: "Die Aufgabe ist zu lösen.", ar: "المهمة قابلة للحل." }, { de: "Das Problem lässt sich leicht erklären.", ar: "المشكلة يمكن شرحها بسهولة." }, { de: "Die Rechnung ist bis Freitag zu bezahlen.", ar: "يجب دفع الفاتورة قبل الجمعة." }, { de: "Der Fehler lässt sich leicht beheben.", ar: "يمكن إصلاح الخطأ بسهولة." }, { de: "Nach der Reparatur war das Gerät wieder einsatzbereit.", ar: "بعد الإصلاح صار الجهاز جاهزاً للعمل مجدداً." }, { de: "Die Frist ist unbedingt einzuhalten.", ar: "يجب الالتزام بالمهلة دون استثناء (رسمي)." }
      ],
      comparisonWithArabic: "العربية تملك المبني للمجهول (تُحلّ) وصيغة اسم المفعول (محلولة)، لكنها تعبّر عن الإمكان بجملة مستقلة: «يمكن حلها». والألمانية تضغط هذا كله في تركيب واحد قصير مثل lässt sich lösen — وهذا ما يمنح نصوص B2 كثافتها. والفرق الأهم أن العربية تُفرّق بين الإمكان والوجوب بأداة مستقلة في مطلع الجملة («يمكن» / «يجب»)، أما الألمانية فتُفرّق بينهما بصيغة الفعل نفسه وموضعه: sein + zu + مصدر مفتوحة للمعنيين، والماضي معها (war zu lösen) يحسم المعنى في اتجاه واحد فقط (كان يجب). والمتعلّم العربي الذي يترجم «يجب» دائماً بـ muss يخسر صيغة «ist zu» الرسمية التي تفترض وجود مخاطب مُلزَم لا فاعل معيّن، وهي الصيغة نفسها التي تُبنى عليها لغة اللوائح والتعليمات. أما اسم المفعول العربي («محلولة») فيقابل ist + Partizip II مباشرة، ويُنقل الفعل الناقص للزمن («كانت محلولة») كما في الألمانية (war gelöst) — وهذه نقطة يقارب فيها النظامان أكثر من أي نقطة أخرى.",
      eselsbruecke: "فرّق بين الحدث والحالة: wird gelöst يعني أن العمل يجري الآن، وist gelöst يعني أنه انتهى. وأما ist zu lösen وlässt sich lösen فكلاهما يقول: هذا ممكن.",
      commonMistakes: [
        { wrong: "Das Problem ist gelöst worden können.", right: "Das Problem lässt sich lösen.", whyAr: "لا يُجمع بين Passiv والفعل الناقص بهذه الطريقة؛ التركيب الصحيح للإمكان هو lassen sich أو sein + zu." },
        { wrong: "Die Rechnung ist zu bezahlt.", right: "Die Rechnung ist zu bezahlen.", whyAr: "تركيب sein + zu يأخذ المصدر في نهاية الجملة، لا اسم المفعول: ist zu bezahlen وليس ist zu bezahlt. والخلط يقع لأن المتعلّم اعتاد رؤية اسم المفعول مع sein في مجهول الحالة (ist bezahlt)، فظنّ أن الأمر نفسه؛ والفرق أن مجهول الحالة يصف نتيجة، وهذه الصيغة تصف إلزاماً أو إمكانية." },
        { wrong: "Das Fenster wird geöffnet seit einer Stunde.", right: "Das Fenster ist seit einer Stunde geöffnet.", whyAr: "استمرار الحالة يُعبَّر عنه بـ Zustandspassiv مع sein لا بـ Vorgangspassiv مع werden." },
      ],
      relatedRuleComparison: {
        title: "Vorgangspassiv أم Zustandspassiv؟",
        content: "werden + Partizip II يصف العملية وهي تجري: Die Tür wird geschlossen (يجري إغلاق الباب). وsein + Partizip II يصف النتيجة الباقية: Die Tür ist geschlossen (الباب مغلق). اختيار المساعد يغيّر المعنى كلياً.",
      },
    },
  ];
