/**
 * a2-13 — الشرح النظري (الجزء «theorie»)
 * فُصل من a2-13.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "خريطة قواعد A2 — الاثنا عشر مفتاحاً في جدول واحد",
      titleDe: "Die A2-Grammatik auf einen Blick",
      explanationAr:
        `كل ما دُرِّس في A2 يعود إلى اثني عشر مفتاحاً، ولكلّ مفتاح وحدةٌ علّمته: 1) الماضي التام Perfekt بـ haben/sein، 2) الأفعال الناقصة (sollen · möchten · können)، 3) حروف الجر المتغيّرة التسعة (سكون Dativ / حركة Akkusativ)، 4) الماضي البسيط war/hatte، 5) الجملة الثانوية بـ dass، 6) es gibt + النصب وضمائر النصب والجر، 7) المقارنة والتفضيل، 8) حالة الجر Dativ وأفعالها، 9) weil / wenn / ob، 10) الضمائر الملكية في كل الحالات، 11) الأفعال الانعكاسية (mich / mir)، 12) أدوات الربط (وobwohl توسعةً).

والمفتاح لا يُعرف بأن تسمّيه، بل بأن تعرف موضعه من الجملة. Perfekt يحتاج الفعل المساعد في المرتبة الثانية والـPartizip في النهاية؛ والجملة الثانوية — من dass حتى obwohl — تدفع الفعل المصرف إلى آخرها؛ وحروف الجر المتغيّرة تُقاس بالحركة أو السكون؛ وأفعال Dativ لا تُعطى مفعولاً مباشراً، فالشخص بعدها في حالة الجر.

وأهمّ ما في الخريطة أنّها تكشف العلاقات لا تحفظ الأسماء: لاحظ أنّ weil وdass وobwohl تعمل العمل نفسه (فعلٌ في النهاية) وقد وردت في المفتاحين التاسع والثاني عشر؛ ولاحظ أنّ meinem في Dativ وmeinen في Akkusativ هما المفتاحان الثامن والعاشر؛ ولاحظ أنّ الضمير الانعكاسي (mich / mir) ليس قاعدةً ثالثة بل اختيارٌ بين الحالتين نفسهما حسب الفعل.

والغرض العملي أن تنظر إلى هذه الصفحة قبل مراجعة أي وحدة: تعرف أيّ مفتاح يخدم السؤال الذي أمامك، ثم تعود إلى وحدته إن احتجت التفصيل. فالخريطة فهرسٌ لا بديل عن الوحدة.`,
      whyAr:
        "لماذا خريطة واحدة؟ لأن المتعلّم درس كل مفتاح في وحدته منفصلاً، فصار يعرف Perfekt حين يُسأل عن Perfekt فقط. الامتحان — والحياة — لا تسأل هكذا: تطلب جملة واحدة فيها ماضٍ وتعليل وحالة جر معاً. جمعُ المفاتيح في صفحة واحدة هو ما يحوّل المعرفة المتفرّقة إلى قدرة.",
      table: {
        title: "المفاتيح الاثنا عشر لمستوى A2",
        columns: ["القاعدة", "المثال", "الوحدة"],
        rows: [
          { label: "الماضي التام Perfekt", cells: ["Ich habe gearbeitet. Ich bin gefahren.", "a2-01"] },
          { label: "الأفعال الناقصة", cells: ["Du sollst viel trinken. Ich möchte bestellen.", "a2-02 / a2-03"] },
          { label: "حروف الجر المتغيّرة", cells: ["Das Buch liegt auf dem Tisch.", "a2-04"] },
          { label: "الماضي البسيط war / hatte", cells: ["Gestern war ich krank. Ich hatte Fieber.", "a2-05"] },
          { label: "الجملة الثانوية بـ dass", cells: ["Ich glaube, dass er heute kommt.", "a2-06"] },
          { label: "es gibt + النصب", cells: ["Hier gibt es einen Automaten.", "a2-07"] },
          { label: "المقارنة والتفضيل", cells: ["Der Zug ist schneller als der Bus.", "a2-08"] },
          { label: "حالة الجر Dativ", cells: ["Ich helfe meinem Bruder.", "a2-09"] },
          { label: "weil / wenn / ob", cells: ["Ich lerne, weil ich die Prüfung brauche.", "a2-10"] },
          { label: "الضمائر الملكية", cells: ["Das ist meine Schwester.", "a2-10"] },
          { label: "الأفعال الانعكاسية", cells: ["Ich freue mich auf den Urlaub.", "a2-11"] },
          { label: "أدوات الربط (وobwohl توسعةً من a2-12)", cells: ["Ich bin müde, trotzdem lerne ich.", "a2-12"] },
        ],
      },
      examples: [
        { de: "Letztes Wochenende bin ich nach Hamburg gefahren.", ar: "نهاية الأسبوع الماضية سافرتُ إلى هامبورغ." },
        { de: "Ich habe meiner Schwester ein Buch geschenkt.", ar: "أهديتُ أختي كتاباً." },
        { de: "Ich glaube, dass Deutsch schwerer als Englisch ist.", ar: "أعتقد أن الألمانية أصعب من الإنجليزية." },
        { de: "Gestern war ich krank, deshalb bin ich zu Hause geblieben.", ar: "أمس كنت مريضاً، لذلك بقيتُ في البيت." },
        { de: "Ich freue mich auf den Urlaub, obwohl die Reise teuer ist.", ar: "أتطلّع إلى العطلة رغم أن الرحلة غالية." },
        { de: "Ich glaube, dass er heute kommt, obwohl er wenig Zeit hat.", ar: "أعتقد أنه يأتي اليوم رغم أن وقته ضيّق." },
      ],
      comparisonWithArabic:
        "العربية تستعمل في الحكي غالباً صيغة ماضٍ واحدة («سافرتُ»)، والألمانية توزّعه على ثلاث صيغ: Perfekt للحكي المحكي (ich bin gefahren)، وwar/hatte للحالة (ich war müde)، وPräteritum الكامل للكتابة (يأتي في B1). هذا من أبرز الفروق البنيوية التي يجمعها A2.",
      eselsbruecke:
        "لا تحفظ الاثني عشر بالاختصار؛ احفظ جملة الختام «Gestern war ich krank, deshalb bin ich nicht gekommen, obwohl ich meinem Chef geholfen habe» — فيها Präteritum وربط وPerfekt وobwohl وDativ: خمسة مفاتيح في نفَس واحد.",
      commonMistakes: [
        { wrong: "Ich habe nach Berlin gefahren.", right: "Ich bin nach Berlin gefahren.", whyAr: "أفعال الحركة وتغيّر المكان تأخذ sein لا haben في الماضي التام." },
        { wrong: "Ich helfe meinen Bruder.", right: "Ich helfe meinem Bruder.", whyAr: "helfen من أفعال الجر Dativ التي لا تأخذ مفعولاً مباشراً، فالشخص بعدها في حالة الجر: meinem Bruder لا meinen Bruder، وهو المفتاح الثامن في الخريطة نفسها." },
        { wrong: "Ich bleibe zu Hause, weil ich bin krank.", right: "Ich bleibe zu Hause, weil ich krank bin.", whyAr: "بعد weil تُدفع الصيغة المصرَّفة إلى آخر الجملة الثانوية، فيتقدّم الفاعل ich ويتأخّر الفعل krank bin إلى النهاية: weil ich krank bin لا weil ich bin krank." },
      ],
      relatedRuleComparison: {
        title: "أتقنت A2؟ اختبر نفسك",
        content:
          "أنت جاهز لـ B1 إذا استطعت — بلا تفكير طويل — أن تحكي عطلةً ماضية بـ Perfekt، وتعلّل قراراً بـ weil، وتقارن خيارين بـ als، وتطلب خدمة بأدب مع Dativ. إن تعثّرت في واحدة، ارجع إلى وحدتها في الجدول أعلاه قبل بدء B1.",
      },
    },
    {
      id: "t2",
      titleAr: "دمج تراكيب A2 في موقف واحد: المرض والاعتذار عن العمل",
      titleDe: "A2-Strukturen in einer Situation verbinden",
      explanationAr:
        `الموقف الواحد يستدعي عدة قواعد معاً، ولا تأتي الحياة على شكل سؤال «أعرب ما بعد dass». خذ موقف الاعتذار عن العمل: «كنتُ مريضاً فاعتذرتُ» يحتاج Präteritum للحالة (ich war krank)، وPerfekt للحدث (ich bin zum Arzt gegangen)، وweil للتعليل (weil ich Fieber habe)، وModalverb لنقل النصيحة (ich soll zu Hause bleiben)، وDativ للمخاطَب (ich habe meinem Chef geschrieben). خمس قواعد في خمس جمل قصيرة، وهذا هو شكل اللغة الحقيقي: لا قاعدة واحدة في كل مرة.

والترتيب هنا ليس اختيارياً. البروتوكول الألماني يبدأ بالحالة الزمنية (مساء أمس)، ثم الحدث (هذا الصباح)، ثم التعليل (لأنني لا أستطيع الحضور)، ثم ما قرّره الطبيب، ثم الإجراء الذي اتخذته. من قدّم الإجراء قبل الحالة يُفهم، لكنه يُقرأ مقتضباً أو مفاجئاً في سياق العمل.

وموضع كل قاعدة من هذه في الجملة هو ما يُختبر فعلاً: war وhatte في المرتبة الثانية لأنهما فعلٌ مصرَّف؛ والـPartizip في النهاية؛ والفعل المصرَّف في آخر جملة weil؛ والـModalverb ينقل التصريف إلى المرتبة الثانية ويُبقي المصدر في النهاية (ich soll drei Tage zu Hause bleiben)؛ والمخاطَب في حالة الجر لأنه مفعول غير مباشر.`,
      whyAr:
        "لماذا الموقف لا القاعدة؟ لأنّ الذاكرة تسترجع اللغة بالسياق: حين تحتاج الاعتذار عن العمل غداً لن يخطر ببالك «قاعدة weil» بل جملة سمعتها في موقف مشابه، فتدريب المواقف يخزّن الجمل حيث ستُطلب فعلاً. وهذا يفسّر أيضاً لماذا لا تكفي قائمة القواعد وحدها: من حفظ الأفعال الناقصة مفردةً قد يكتب «weil ich bleibe zu Hause»، لأنّ موضع الفعل المصرَّف في آخر الجملة الثانوية لا يظهر إلا داخل تركيب.",
      table: {
        title: "من العَرَض إلى الاعتذار: خمس خطوات وخمس قواعد",
        columns: ["المرحلة", "الجملة الألمانية", "القاعدة المستعملة"],
        rows: [
          { label: "1. وصف الحالة", cells: ["Gestern Abend war ich sehr müde.", "Präteritum: war"] },
          { label: "2. سرد ما حدث", cells: ["Heute Morgen bin ich zum Arzt gegangen.", "Perfekt مع sein"] },
          { label: "3. التعليل", cells: ["Ich rufe an, weil ich Fieber habe.", "Nebensatz mit weil"] },
          { label: "4. نقل النصيحة", cells: ["Der Arzt sagt, ich soll zu Hause bleiben.", "Modalverb sollen"] },
          { label: "5. الاعتذار كتابةً", cells: ["Ich habe meinem Chef eine E-Mail geschrieben.", "Dativ: meinem Chef"] },
        ],
      },
      examples: [
        { de: "Gestern Abend war ich sehr müde und hatte Kopfschmerzen.", ar: "مساء أمس كنت متعباً جداً وأصابني صداع." },
        { de: "Heute Morgen bin ich zum Arzt gegangen.", ar: "هذا الصباح ذهبتُ إلى الطبيب." },
        { de: "Ich rufe Sie an, weil ich heute nicht kommen kann.", ar: "أتصل بكم لأنني لا أستطيع الحضور اليوم." },
        { de: "Der Arzt sagt, ich soll drei Tage zu Hause bleiben.", ar: "يقول الطبيب إنّ عليّ البقاء في البيت ثلاثة أيام." },
        { de: "Ich habe meinem Chef schon eine E-Mail geschrieben.", ar: "كتبتُ لرئيسي رسالة إلكترونية بالفعل." },
        { de: "Ich hatte gestern Fieber, deshalb bin ich zu Hause geblieben.", ar: "كانت لديّ حمّى أمس، لذلك بقيتُ في البيت." },
      ],
      comparisonWithArabic:
        "قد تكتفي العربية في الاعتذار بجملة قصيرة («أنا مريض اليوم»)، بينما يُنتظر في سياق العمل الألماني سردٌ قصير بالتسلسل الزمني ثم التعليل ثم الإجراء. الاكتفاء بـ«Ich bin krank» مفهومٌ تماماً، لكنه يبدو مقتضباً أكثر مما ينبغي في الرسائل الرسمية، لأنّ العربية تعتمد على السياق والقِران الاجتماعي في تقدير ما يجب قوله صراحةً، والألمانية تميل في نصوصها المكتوبة إلى التصريح بالمراحل واحدةً واحدة.",
      eselsbruecke:
        "رتّب أي موقف بالسلّم الخماسي: حالة ← حدث ← سبب ← نصيحة ← إجراء. الترتيب واحد في المرض والتأخّر والاعتذار عن موعد — تتغيّر المفردات وحدها.",
      commonMistakes: [
        { wrong: "Ich bin krank, weil ich habe Fieber.", right: "Ich bin krank, weil ich Fieber habe.", whyAr: "weil تدفع الفعل المصرَّف إلى النهاية: habe في آخر الجملة الثانوية." },
        { wrong: "Ich habe zum Arzt gegangen.", right: "Ich bin zum Arzt gegangen.", whyAr: "gehen فعل حركة ينتقل فيه الفاعل من مكان إلى آخر، فماضيه التام بـ sein لا بـ haben: ich bin zum Arzt gegangen، وكذلك kommen وfahren وfliegen." },
        { wrong: "Ich habe mein Chef geschrieben.", right: "Ich habe meinem Chef geschrieben.", whyAr: "schreiben يأخذ مفعولاً في حالة الجر عندما يكون المكتوب إليه شخصاً: ich schreibe meinem Chef، فالمذكر يصير meinem لا mein، وهو المفتاح الثامن في خريطة الدرس." },
      ],
      relatedRuleComparison: {
        title: "الاتصال أم الرسالة؟",
        content:
          "القانون الألماني (§ 5 EntgFG) يوجب إبلاغ صاحب العمل بالمرض «unverzüglich»، أي دون تأخير، وقد يكون ذلك هاتفياً أو بالبريد، ولا يشترط قبل بداية الدوام بالضرورة. الشهادة الطبية (AU) تلزم إذا استمر المرض أكثر من ثلاثة أيام تقويمية، وتُقدَّم في أول يوم عمل بعدها، ويجوز لصاحب العمل أن يطلبها أبكر حسب العقد. راجع عقدك وتعليمات شركتك.",
      },
    },
    {
      id: "t3",
      titleAr: "ما الذي يتغيّر فعلاً في B1؟ خريطة الجسر",
      titleDe: "Von A2 nach B1 — was sich ändert",
      explanationAr:
        `B1 لا يبدأ من الصفر: يأخذ كلّ تركيبٍ في A2 ويضيف إليه طبقةً واحدة، فلا يتهدّم أساسٌ بل يُبنى فوقه. المِلكية عبر von + Dativ تصير Genitiv، والجملتان المتجاورتان تصيران جملة موصولة، وسردُ الماضي بالحكي يصير سرداً مكتوباً بـPräteritum الكامل، والتمنّي بـmöchte يصير Konjunktiv II، والفاعل المجهول بـman يصير Passiv.

والفكرة المركزية أنّ هذه خمس توسعات لا خمس بدايات: Genitiv صورةٌ مختصرة من von + Dativ؛ والجملة الموصولة تخضع للقاعدة الثانوية نفسها التي تعرفها من weil (الفعل في النهاية)؛ والـPräteritum الكامل يستعمل الصيغ التي عرفتها في war وhatte؛ وKonjunktiv II يظهر أوّلاً في صيغ التهذيب الجاهزة (ich hätte gern · ich würde gern bleiben)؛ والـPassiv يحتاج werden + Partizip، أي عنصرين يعرفهما المتعلّم أصلاً.

ولذلك من يعرف A2 جيداً يتعلّم B1 كتوسيع لا كبداية، ومن يترك مفتاحاً واحداً ضعيفاً سيراه يعود في B1 بصورة جديدة: ضعف الـDativ يعود في جملة الموصولة، وضعف الـPräteritum يعود في السرد المكتوب.`,
      whyAr:
        "لماذا نعرض B1 الآن؟ لأنّ كثيراً من المتعلمين يشعرون عند القفزة بأن كل شيء تغيّر. ورؤية الخريطة مسبقاً تُظهر أنّ التغيير توسعاتٌ محددة خمس على أساس يعرفونه، فيدخلون B1 وهم يعرفون ما ينتظرهم بدل أن يبدأوا من صفرٍ نفسي. هذا إطار تنظيمي مسبق (advance organizer)، وهو فكرة تربوية معروفة، ولم نقِس أثره في هذا الدرس، فهو عرضٌ للخريطة لا وعدٌ بنتيجة.",
      table: {
        title: "خمس توسعات من A2 إلى B1",
        columns: ["الظاهرة", "كما تعلّمتها في A2", "كما تصير في B1"],
        rows: [
          { label: "المِلكية", cells: ["der Bruder von meinem Freund", "der Bruder meines Freundes (Genitiv)"] },
          { label: "وصف الاسم", cells: ["Das ist mein Bruder. Er wohnt in Bonn.", "Das ist mein Bruder, der in Bonn wohnt."] },
          { label: "سرد الماضي", cells: ["Ich habe gearbeitet.", "Ich arbeitete (Präteritum في الكتابة)"] },
          { label: "التمنّي والتأدّب", cells: ["Ich möchte einen Kaffee.", "Ich hätte gern einen Kaffee / Ich würde gern bleiben."] },
          { label: "الفاعل المجهول", cells: ["Man repariert das Auto.", "Das Auto wird repariert (Passiv)."] },
        ],
      },
      examples: [
        { de: "A2: Das ist der Bruder von meinem Freund.", ar: "A2: هذا أخو صديقي." },
        { de: "B1: Das ist der Bruder meines Freundes.", ar: "B1: هذا أخو صديقي (بصيغة المضاف إليه)." },
        { de: "A2: Ich habe die Prüfung gemacht.", ar: "A2: أدّيتُ الامتحان." },
        { de: "B1: Ich hoffe, dass ich die Prüfung bestehe.", ar: "B1: آمل أن أجتاز الامتحان." },
        { de: "Wer A2 sicher kann, lernt B1 als Erweiterung.", ar: "من يتقن A2 يتعلّم B1 توسيعاً لا بداية جديدة." },
        { de: "B1: Ich würde gern länger bleiben, aber ich muss zurück.", ar: "B1: أودّ البقاء أطول، لكن عليّ العودة." },
      ],
      comparisonWithArabic:
        "المضاف إليه في العربية بنية مباشرة بلا أداة («كتابُ الطالبِ»)، لذلك قد يرى المتعلّم العربي أنّ Genitiv أقرب إلى بنيته من تركيب von + Dativ، وهي ملاحظة تقابلية تُختبر بتجربة المتعلّم وليست قاعدة مُقاسة. وكذلك الجملة الموصولة: العربية تصل بلا ضمير في كثير من المواضع («أخي يسكن في بون»)، والألمانية تُلزمك بضمير موصول (der) وفعلٍ في نهاية الجملة، فأقربُ مكافئ عربي هو «الذي يسكن في بون».",
      eselsbruecke:
        "الجسر خمس دعامات: مِلكية، وصف، سرد، تمنٍّ، مجهول. عدّها على أصابع يد واحدة قبل أول درس B1، وستعرف بالضبط ما ينتظرك — لا أكثر.",
      commonMistakes: [
        { wrong: "der Bruder von meines Freundes", right: "der Bruder meines Freundes", whyAr: "إمّا von + Dativ (أسلوب A2) وإمّا Genitiv وحده، لا الاثنان معاً." },
        { wrong: "Das ist mein Bruder, der wohnt in Bonn.", right: "Das ist mein Bruder, der in Bonn wohnt.", whyAr: "الجملة الموصولة جملة ثانوية: الفعل في آخرها، تماماً كقاعدة weil التي تعرفها." },
        { wrong: "Ich würde gern einen Kaffee, bitte.", right: "Ich hätte gern einen Kaffee, bitte.", whyAr: "في الطلب المهذّب الجاهز تُستعمل صيغة hätte gern، وwürde يحتاج فعلاً مصدراً في النهاية (ich würde gern bleiben)، فلا يقف وحده مع اسم." },
      ],
      relatedRuleComparison: {
        title: "متى أبدأ B1؟",
        content:
          "المعيار ليس إنهاء الوحدات بل الأداء: أن تكتب رسالة من ثمانية أسطر فيها ماضٍ وتعليل بلا توقّف طويل، وأن تفهم رسالة صوتية عادية من أول استماع. إن لم يتحقّق هذا بعد، فإعادة a2-05 وa2-10 أنفع من التسرّع إلى b1-01.",
      },
    },
  ];
