/**
 * b2-01 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "نقل الكلام غير المباشر (Konjunktiv I / Indirekte Rede)",
      titleDe: "Die indirekte Rede: er sagt, er habe ...",
      explanationAr:
        "لنقل كلام شخص: Konjunktiv I: er habe، er sei، er werde. التصريف: من المضارع نحذف النهاية ونضيف -e (haben → er habe، sein → er sei، werden → er werde). الجملة: Er sagt, er habe keine Zeit. (يقول إنه لا وقت عنده). القاعدة: Konjunktiv I يبيّن أن الكلام منقول وليس مؤكداً. وتصريفه يُبنى على جذر المضارع: نأخذ صيغة er (مثل hat · ist · wird) ثم نضيف نهاية -e؛ فيصير habe · sei · werde · könne · mache. والضمير والفعل يبقيان كما هما، والشيء الوحيد الذي يتغيّر هو الصيغة التي تحمل علامة النقل.\n\nوفي الجملة المنقولة ينتقل الفعل إلى نهاية الجملة الثانوية كما في كل جملة تابعة: Er sagt, er habe keine Zeit. وهذا الترتيب شرط لا يُخالف، لأن النقل لا يُنتج جملة مستقلة بل جملة تابعة لفعل القول.\n\nوتُصاغ الأزمنة في النقل بصيغ ثابتة لا تتغيّر بتغيّر قول المتكلّم: المضارع habe، والماضي habe gehabt eller sei gewesen، والمستقبل werde kommen، والشرط hätte/würde إن احتاج المعنى افتراضاً. وهذه الصيغ لا تسأل عن الوقت الحقيقي بل عن العلاقة بين ما قيل وما يُنقل.\n\nوأخيراً، إذا تساوت صيغة Konjunktiv I مع المضارع العادي (كما في الجمع: sie haben · sie kommen) تُستبدل بها صيغة Konjunktiv II للتمييز: Sie sagt, sie hätten Zeit — وإلا لالتبس الكلام المنقول بالخبر المؤكد.",
      whyAr:
        "لماذا صيغة خاصة للنقل؟ لأن الصحفيين يحتاجون «مسافة»: إذا قال أحدهم شيئاً، ننقله بصيغة تبين أننا لسنا مسؤولين عن صحته. Er sagt, er habe gewonnen = «هو يقول إنه فاز» — لست أنا من يؤكد. هذه الدقة سبب وجود Konjunktiv I. فالصيغة لا تقول «هل الخبر صحيح؟» بل تقول «من الذي يقول؟»، وهذا فرق جوهري في لغة الأخبار والتقارير والدراسات.\n\nوفي الكتابة الأكاديمية والرسمية للصيغة وظيفة إضافية: عرض آراء الآخرين بلا تبنٍّ لها. فمن كتب «Die Forscherin sagt, die Ergebnisse seien eindeutig» لم يقل إن النتائج قاطعة، بل نقل قولاً — وهذه المسافة تحمي الكاتب من مسؤولية لا يملكها.\n\nولذلك تظهر الصيغة بكثافة في ملخصات البحوث وفي مقدّمات المقالات، حيث يُعرض ما قاله السابقون قبل إبداء الرأي. ومن أهمل الصيغة ونقل الكلام بصيغة المضارع بدا كأنه يؤكّد القول بنفسه، وتبدو جملته في الألمانية حكماً لا نقلاً.",
      table: {
        title: "Konjunktiv I للأفعال الأساسية",
        columns: ["الفعل", "المضارع", "Konjunktiv I", "مثال"],
        rows: [
          { label: "haben", cells: ["hat", "habe", "Er sagt, er habe Zeit."] },
          { label: "sein", cells: ["ist", "sei", "Sie sagt, sie sei müde."] },
          { label: "werden", cells: ["wird", "werde", "Er sagt, er werde kommen."] },
          { label: "können", cells: ["kann", "könne", "Sie sagt, sie könne helfen."] },
          { label: "machen", cells: ["macht", "mache", "Er sagt, er mache es."] },
        ],
      },
      examples: [
        { de: "Der Forscher sagt, die Entdeckung sei revolutionär.", ar: "يقول الباحث إن الاكتشاف ثوري." },
        { de: "Sie sagt, sie habe das Experiment wiederholt.", ar: "تقول إنها كررت التجربة." },
        { de: "Er behauptet, er habe den Beweis gefunden.", ar: "يزعم أنه وجد البرهان." },
        { de: "Die Studie zeigt, die Ergebnisse seien positiv.", ar: "تبين الدراسة أن النتائج إيجابية." },
        { de: "Man sagt, die Forschung werde wichtiger.", ar: "يقال إن البحث سيصبح أكثر أهمية." },
        { de: "Die Forscherin betont, die Ergebnisse müssten überprüft werden.", ar: "تؤكد الباحثة أنه يجب إعادة التحقق من النتائج." },
      ],
      comparisonWithArabic:
        "«يقول إنه لا وقت عنده» = Er sagt, er habe keine Zeit. العربية تستخدم «إنّ» — والألمانية Konjunktiv I. والتشابه: كلاهما «يفصل» الكلام المنقول عن المؤكد. والفرق: الألمانية تغيّر الفعل (habe بدل hat)، أما العربية فلا تغيّر فعلاً ولا إعراباً.\n\nوالعربية تملك من أدوات النقل ما يكفي: «قال» و»ذكر» و»أفاد» و»حسبما ورد»، ثم «إنّ» التي تفتح الكلام المنقول، ثم قد تضيف «قد» أو «سوف» لتحديد الزمن. وفي السياق الصحفي تستعمل العربية صيغة مجهولة النقل أيضاً: «قيل» و»يُقال» و»ذُكر أن»، وهي أقرب تركيب عربي إلى Konjunktiv I في وظيفته.\n\nويشترك اللسانان في مسألة مهمة: نقل الزمن والأسماء. فقول «أمس» في كلام شخص يجب أن يصير «في اليوم السابق» عند النقل المتأخر، وكذلك «غداً» تصير «في اليوم التالي». والألمانية تفعل الشيء نفسه (gestern ← am Vortag) وتضيف إليه علامة الفعل، فأصبح الفرق بين اللغتين في الصيغة لا في التفكير.\n\nومن هنا القاعدة العملية لمتعلّم B2: لا تبحث في العربية عن مقابل صيغة، بل عن مقابل وظيفة — «مسافة الناقل». ويُدعم ذلك بحرف الإشارة إلى المصدر (laut · zufolge · nach Angaben von)، وهي أدوات تحمل جزءاً من معنى النقل وتُسند إليها الصيغة.",
      eselsbruecke:
        "«Konjunktiv I = علامة النقل»: كلما رأيت habe/sei/werde بعد «sagt/behauptet/meint» فاعلم أن الكلام منقول. وتذكر: -e في النهاية: mache, habe, könne.",
      commonMistakes: [
        { wrong: "Er sagt, er hat keine Zeit. (مضارع بدل Konjunktiv I)", right: "Er sagt, er habe keine Zeit.", whyAr: "في النقل تبقى الجملة تابعة لفعل القول، فالفعل ينتقل إلى النهاية ويحمل صيغة Konjunktiv I: er habe keine Zeit. والخطأ شائع لأن الجملة بمضارعها تبدو صحيحة تماماً بالسمع، لكنها في الألمانية ليست نقلاً بل تبنّياً للخبر: الكاتب صار يؤكّد النفي بنفسه. والقاعدة أن وجود sagt/behauptet/berichtet يفرض علامة نقل، ومن تركها فَهِم مضمون الكلام لكنه فقد المسافة التي تُبقي الكلام لصاحبه." },
        { wrong: "خلط Konjunktiv I مع II", right: "I = نقل (er habe). II = شرط/رغبة (er hätte)", whyAr: "الخطأ هنا في الوظيفة لا في الشكل: I للنقل وII للافتراض أو الاختيار، وبهما يفرّق الألماني بين ما قيل وما تمنّاه المتكلّم. ومن كتب hätte في موضع النقل نقل جملة فيها افتراض لم يقله أحد، فتغيّر معنى الكلام المنقول تغيّراً كاملاً. والفرق أسهل مما يبدو: إن أمكن إضافة «قال إنّ» قبل الجملة فالصيغة I، وإن أمكن إضافة «لو» فالصيغة II." },
        { wrong: "Sie sagt, sie haben Zeit.", right: "Sie sagt, sie hätten Zeit.", whyAr: "عند تطابق Konjunktiv I مع المضارع (haben) نأخذ Konjunktiv II للتمييز." },
      ],
      relatedRuleComparison: {
        title: "Konjunktiv I أم II؟",
        content: "I = نقل الكلام (sagt, behauptet). II = غير واقعي/شرطي (wäre, hätte). الفرق: النقل يبين «قول شخص آخر»، والشرطية تبين «افتراضاً غير واقعي».",
      },
    },
    {
      id: "t2",
      titleAr: "الأفعال الناقصة الذاتية (Subjektiver Gebrauch): التخمين والاستنتاج",
      titleDe: "Subjektiver Gebrauch der Modalverben: dürfte, müsste, muss, kann",
      explanationAr:
        "بعد النقل غير المباشر، نتعلم «الأفعال الناقصة الذاتية» — استخدامها للتخمين ودرجة الاحتمال: Das Experiment dürfte erfolgreich sein (التجربة على الأرجح ناجحة)، Der Zug muss schon abgefahren sein (لابد أن القطار غادر — استنتاج قوي)، Er könnte krank sein (ربما مريض)، Die Ergebnisse müssten morgen kommen وتُستعمل أيضاً للتوقع المقصود: Die Ergebnisse müssten morgen kommen. وفي كل هذه الأمثلة لا تصف الصيغة قدرة أحد، بل تحكم على درجَة احتمال حصول شيء.\n\nودرجات الاحتمال في هذه الأفعال ليست واحدة بل سلّم دقيق: muss يقابل «لابد أن» وهو الأقوى، وdürfte يقابل «على الأرجح»، وkönnte يقابل «ربما»، وkann يبقى للاحتمال العام؛ وmüsste يجمع التوقع مع الإلزام فيكون «يُتوقّع أن» مبنياً على معطيات قائمة. والفرق بين müsste وmuss فرق في المصدر: الأول يبني على بيانات متوفرة، والثاني استنتاج قاطع.\n\nوإذا أريد الماضي دخلت الصيغة في تركيب مزدوج: muss … gewesen sein · dürfte … gemacht haben. وهذا التركيب يشير إلى أن الحكم يقع على حدث مضى لا على حكم حاضر — ويظهر كثيراً في تحليل الحوادث والتقارير: «Die Ursache dürfte ein technischer Fehler gewesen sein».\n\nويُضاف إلى هذا باب قريب الشبه: sollen وwollen في صيغة Konjunktiv I (er solle · er wolle) تُستعملان لنقل ما يقال عن شخص أو ما يدّعيه هو بنفسه — «Der Autor solle ein neues Buch veröffentlicht haben» مقابل «Der Autor wolle ein neues Buch veröffentlichen». ولذلك يجتمع بابا هذا الدرس في خبر واحد: صيغة النقل، ثم درجة التأكيد.",
      whyAr:
        "لماذا «ذاتي»؟ لأنك لا تصف قدرة أحد بل تحكم شخصياً على درجة احتمال شيء. الفرق بين: Er kann Deutsch (قدرة = موضوعي) وDas kann stimmen (احتمال = ذاتي). الصحفي والمحلل يستخدمانها كل يوم — وتُستعمل كثيراً في النصوص الإخبارية والعلمية.\n\nوالفائدة العلمية لهذه الصيغة أنها تفصل الحكم عن الدرجة: الباحث لا يقول «النتيجة صحيحة» بل «النتيجة على الأرجح صحيحة» أو «لابد أن تكون النتيجة كذا»، فيُظهر مقدار ما لديه من دليل. وهذا الفرق هو ما يميّز نصّ B2 عن نصّ B1: ليس في العدد الأكبر من الكلمات بل في درجة الالتزام.\n\nوفي العمل اليومي تظهر الصيغة أيضاً في التمهيد المهذّب: «Das dürfte schwierig werden» أفضل من «Das ist unmöglich»، و»Das müsste bis Freitag fertig sein» ألطف من «Sie müssen bis Freitag fertig sein». فالصيغة أداة لياقة لا أداة شكّ، وتُستعمل في بريد العمل كما تُستعمل في التقرير.\n\nوأخيراً فإن تمييز الاستعمال الذاتي عن الموضوعي شرط فهم لا شرط شكل: «Er kann schwimmen» خبرٌ عن قدرة، و«Das kann stimmen» حكمٌ على احتمال. والصيغة نفسها تخدم الوظيفتين، ولهذا يكون اختبار المعنى قبل الحكم على الصيغة.",
      table: {
        title: "درجات الاحتمال بالأفعال الناقصة الذاتية",
        columns: ["الفعل", "درجة الاحتمال", "المعنى", "مثال"],
        rows: [
          { label: "muss", cells: ["استنتاج قوي", "لابد أن", "Er muss zu Hause sein."] },
          { label: "dürfte", cells: ["على الأرجح", "غالباً", "Das dürfte richtig sein."] },
          { label: "könnte", cells: ["محتمل", "ربما", "Sie könnte krank sein."] },
          { label: "kann (إمكانية عامة)", cells: ["عامة", "قد", "Das kann passieren."] },
          { label: "müsste (توقع)", cells: ["توقع مبنٍ على معطيات", "يجب أن (توقعاً)", "Er müsste bald kommen."] },
        ],
      },
      examples: [
        { de: "Die Entdeckung dürfte die Forschung verändern.", ar: "على الأرجح سيغيّر الاكتشاف البحث العلمي." },
        { de: "Der Forscher muss lange experimentiert haben.", ar: "لابد أن الباحث أجرى تجارب طويلة." },
        { de: "Die Ergebnisse könnten morgen veröffentlicht werden.", ar: "قد تُنشر النتائج غداً." },
        { de: "Das Experiment müsste erfolgreich gewesen sein.", ar: "يجب أن تكون التجربة قد نجحت (حسب المعطيات)." },
        { de: "Solche Fehler können überall passieren.", ar: "مثل هذه الأخطاء قد تحدث في أي مكان (إمكانية عامة)." },
        { de: "Die Ursache dürfte ein technischer Fehler gewesen sein.", ar: "على الأرجح كان السبب خطأً تقنياً." },
      ],
      comparisonWithArabic:
        "تقابل تقريبي لا تطابق تام: «لابد أن» تقابل muss، و«على الأرجح» تقابل dürfte، و«ربما» تقابل könnte، و«قد» تقابل kann. لكن المقارنة هنا تنكشف بحدودها: العربية تعبّر عن درجات الاحتمال بأدوات معجمية مستقلة (لابد · على الأرجح · ربما · قد)، والألمانية تعبّر عنها بأفعال ناقصة نفسها تُستعمل للقدرة والإلزام.\n\nومعنى ذلك أن العربي يُنتج المعنى نفسه بطريقة أسهل: يضع أداة الاحتمال ثم يضع الفعل في المضارع كما هو، ولا يحتاج إلى معرفة صيغة خاصة. أما الألماني فالصيغة هي التي تحمل الاحتمال، فمن وضع «muss» بدل «dürfte» رفع درجة الالتزام ثلاث درجات وأظهر يقيناً لا يملكه.\n\nويزيد الأمر أن الفرق بين muss وdürfte فرق ثلاثي الأثر: يغيّر قوة الحكم، ويغيّر انطباع الكاتب، ويغيّر في التقارير مسؤولية الناقل. ولذلك يُستحسن عند تعلّم هذه الأفعال أن تُحفظ معها عبارة عربية تعيّن درجتها (لابد — على الأرجح — ربما)، لا أن تُترجم بحرف واحد مشترك.\n\nوتبقى نقطة تشابه مفيدة: العربية في الأسلوب العلمي تستعمل «ينبغي» و»يمكن القول» و»من المرجح» بدل الحكم القاطع، وهذا هو الغرض نفسه الذي تخدمه الأفعال الذاتية في الألمانية — فالاختلاف في الأداة لا في الاتجاه.",
      eselsbruecke:
        "سلم الاحتمال التنازلي: «موس = لابد، دُورفته = غالباً أو على الأرجح، كونتّه = ربما، موسته = توقعاً مبنياً على معطيات». احفظ السلم من الأقوى إلى الأضعف.",
      commonMistakes: [
        { wrong: "Er muss krank. (بلا sein)", right: "Er muss krank sein.", whyAr: "التخمين الذاتي يتطلب sein + صفة أو مصدراً مركّباً (gemacht haben)." },
        { wrong: "Er kann schwimmen. = تخمين", right: "قدرة (موضوعي): يعرف السباحة. التخمين: Das kann stimmen.", whyAr: "الفعل kann نفسه يخدم الأمرين، والفارق في المعنى لا في الشكل: مع أفعال القدرة (schwimmen · sprechen · lesen) يكون الاستعمال موضوعياً أي خبراً عن مهارة، ومع أفعال الحكم (stimmen · passieren · sein · gewesen sein) يكون ذاتياً أي تخميناً. ولهذا لا يُحكم على الجملة إلا بعد فهم المعنى، ومن قاس على الصيغة وحدها خلط بين خبر عن شخص وحكم على احتمال." },
        { wrong: "Das dürfte gestimmt sein.", right: "Das dürfte gestimmt haben.", whyAr: "stimmen يأخذ haben في الماضي (Partizip II + haben)، لا sein. الحاضر: Das dürfte stimmen." },
      ],
      relatedRuleComparison: {
        title: "متى يكون الاستخدام «ذاتياً»؟",
        content: "اختبار سريع: هل يمكن إعادة الصياغة بـ«من المحتمل/لابد»؟ إذن ذاتي. أما إذا كانت «يقدر/يعرف» فموضوعي: Das kann stimmen = قد يكون صحيحاً (ذاتي). Er kann schwimmen = يعرف السباحة (موضوعي).",
      },
    },
  ];
