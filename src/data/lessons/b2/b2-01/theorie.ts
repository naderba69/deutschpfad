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
        "تُستعمل صيغة Konjunktiv I كثيراً لنقل الأقوال، ولا تعني وحدها أن الخبر صحيح أو كاذب؛ بل تساعد على إظهار أن المعلومة منقولة، وقد تعبّر بحسب السياق عن مسافة الناقل منها. تُبنى الصيغة عادةً على جذر المضارع مع نهايات التصريف (-e، -est، -e، -en، -et، -en)، مع صيغ غير منتظمة مثل sein → sei. أمثلة الغائب: haben → er habe، werden → er werde، können → er könne، machen → er mache.\n\nانتبه إلى نوع الجملة: من دون dass يمكن أن يأتي بعد فعل القول تركيبٌ بترتيب الجملة الرئيسية (الفعل المصرف في الموقع الثاني): Er sagt, er habe keine Zeit. ومع dass تكون جملة تابعة ويأتي الفعل المصرف في النهاية: Er sagt, dass er keine Zeit habe. إذن لا يصح القول إن الفعل يأتي في النهاية في كل نقل غير مباشر.\n\nيتحدد الزمن بحسب العلاقة بين وقت القول والحدث: للحاضر أو الحدث المتزامن يُستعمل مثلاً er habe Zeit؛ ولحدث مكتمل قبل القول er habe das Experiment wiederholt؛ ولحدث لاحق er werde kommen. ولا تتغير هذه الصيغ آلياً لمجرد أن فعل القول في الماضي.\n\nفي الجمع كثيراً ما تتطابق صيغة Konjunktiv I مع المضارع، مثل sie haben أو sie kommen. عند احتمال الالتباس قد يُستعمل Konjunktiv II للتمييز، مثل Sie sagt, sie hätten Zeit؛ لكنه ليس بديلاً إلزامياً في كل جملة، كما أن Konjunktiv II قد يرد في نقل الكلام لوظائف أخرى.",
      whyAr:
        "يشيع Konjunktiv I في نقل الكلام، ولا سيما في الأسلوب الرسمي والصحفي، لأنه يميّز القول المنقول من كلام الناقل. وقد يلمّح إلى التحفّظ أو المسافة، لكنه لا يثبت موقف الناقل ولا حقيقة المعلومة بمفرده. مثال: Er sagt, er habe gewonnen تعني أن المتكلم ينسب الفوز إلى الشخص الذي ينقل قوله؛ ولا تكفي الصيغة وحدها للحكم على صدق الخبر.\n\nليس Konjunktiv إلزامياً في جميع صور نقل الكلام: قد يرد Indikativ أيضاً، ويتأثر الاختيار بالبناء والسياق. وبعد dass يمكن أن تأتي صيغ مثل dass sie müde sei أو dass sie müde ist، مع فروق أسلوبية أو دلالية محتملة. أما في التمارين التي تطلب صراحةً Konjunktiv I، فالمطلوب هو إظهار هذه الصيغة المستهدفة، لا الادعاء بأن كل بديل سياقي خطأ.\n\nلذلك تساعد الصيغة المتعلّم على تمييز النسبة إلى مصدر، خصوصاً في التقارير، لكنها ليست حكماً على موثوقية المصدر. وقد يُستعمل Konjunktiv II إذا تطابقت صيغة Konjunktiv I مع Indikativ أو لأغراض أخرى في نقل الكلام؛ فاختيار الصيغة يتبع المقصود والسياق.",
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
        "«يقول إنه لا وقت عنده» يمكن أن تُنقل بالألمانية: Er sagt, er habe keine Zeit. هذا مثال تقريبي على اختلاف الوسيلة: الألمانية قد تُظهر النقل بتصريف الفعل، بينما تعتمد العربية غالباً على فعل القول وأدوات الربط أو الإسناد. لا يوجد تطابق آلي بين Konjunktiv I وأداة عربية واحدة، كما أن صيغ النقل تختلف باختلاف السياق والسجل اللغوي.\n\nفي العربية قد نستخدم «قال» أو «ذكر» أو «أفاد» ثم «إنّ»، وقد نستعمل صيغة المبني للمجهول مثل «قيل» و«يُقال». وفي الألمانية يمكن أن تساعد عبارات مثل laut وzufolge وnach Angaben von على إسناد المعلومة إلى مصدر. هذه وسائل متقاربة في بعض الوظائف، لكنها ليست متطابقة نحوياً.\n\nقد تتغير الإشارات الزمنية عند نقل الكلام المتأخر، مثل «غداً» إلى «في اليوم التالي»، في العربية والألمانية بحسب السياق. لكن ذلك ليس تحويلاً آلياً واجباً في كل نقل؛ فالسياق ووقت الإبلاغ هما الحاكمان.\n\nعملياً، ابحث عن وظيفة نقل القول وإسناده إلى مصدر، لا عن مقابل صرفي حرفي في العربية. ثم اختر الصيغة الألمانية المناسبة للبناء والسياق.",
      eselsbruecke:
        "«Konjunktiv I = صيغة شائعة للنقل»: قد تلاحظ habe/sei/werde بعد sagt/behauptet/meint. تذكّر نهايات التصريف، ولا تحكم على صحة الخبر من الصيغة وحدها.",
      commonMistakes: [
        { wrong: "Er sagt, er hab keine Zeit. (صيغة غير معيارية مع er)", right: "Er sagt, er habe keine Zeit.", whyAr: "في هذا المثال نصلح تصريف haben مع الفاعل er؛ صيغة Konjunktiv I هي habe. لكن وجود فعل قول لا يفرض Konjunktiv I في كل استعمال، فقد يأتي Indikativ في بعض البنى والسياقات. كما أن ترتيب er habe هنا هو ترتيب جملة رئيسية من دون dass، لا جملةً تابعةً يكون فعلها في النهاية." },
        { wrong: "اعتبار Konjunktiv II صيغةً للشرط فقط", right: "قد يظهر Konjunktiv II في نقل الكلام أيضاً؛ والتمرين هنا يطلب I تحديداً.", whyAr: "يُستخدم Konjunktiv II كثيراً للشرط أو الافتراض، لكنه قد يرد أيضاً في نقل الكلام، مثلاً عند تطابق صيغة Konjunktiv I مع Indikativ أو لأسباب سياقية. لذلك لا نحكم على hätte بأنها خطأ لمجرد أنها II؛ نلتزم بهادف التدريب فقط إذا نصّ صراحةً على Konjunktiv I." },
        { wrong: "Die Forschenden sagen, sie haben Zeit. (قد يلتبس العدد)", right: "Die Forschenden sagen, sie hätten Zeit. (تمييز ممكن)", whyAr: "في الغائب الجمع تتطابق صيغة Konjunktiv I مع Indikativ. قد يساعد Konjunktiv II على إظهار النقل إذا احتمل السياق التباساً، لكنه ليس بديلاً إلزامياً؛ وقد يكفي السياق لرفع الالتباس." },
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
        "تُستعمل الأفعال الناقصة أحياناً استعمالاً معرفياً (epistemisch) للتعبير عن تقدير المتكلم لما يرجّحه، لا عن قدرة أو إلزام: Das Experiment dürfte erfolgreich sein (قد تكون التجربة ناجحة على الأرجح)، Der Zug muss schon abgefahren sein (يبدو أن القطار غادر)، وEr könnte krank sein (قد يكون مريضاً). ويُفهم الاستعمال من معنى الجملة والسياق، لا من شكل الفعل وحده.\n\nيمكن وصف فروق تقريبية لا سلّماً ثابتاً لكل السياقات: في المثال الذي يعرضه IDS Grammis، könnte يدل على احتمال، وmüsste على احتمال قوي، وdürfte على درجة ثقة كبيرة، وmuss على شبه يقين. لكن الدلالة تتأثر بالسياق والنبرة، ولا تقابل كل صيغة كلمة عربية واحدة أو نسبة مئوية ثابتة. أما kann فيمكن أن يعبّر عن الإمكان، وقد يأتي معرفياً في سياقات مناسبة؛ فلا ينبغي وضعه دائماً في درجة واحدة مع könnte.\n\nللتخمين عن حدث ماضٍ يُستخدم غالباً المصدر التام مع الفعل الناقص، مثل: muss … gewesen sein أو dürfte … gemacht haben. مثال: Die Ursache dürfte ein technischer Fehler gewesen sein (قد يكون السبب خطأً تقنياً على الأرجح). الزمن الماضي هنا يأتي من البناء التام، بينما يعبّر الفعل الناقص عن تقدير المتكلم.\n\nوهناك استعمال قريب لكنه مختلف: sollen وwollen قد تنقلان خبراً منسوباً إلى مصدر أو ادعاءً من الشخص نفسه، مثل Der Autor solle ein neues Buch veröffentlicht haben أو Der Autor wolle ein neues Buch veröffentlichen. لا تخلط هذا الاستعمال المعرفي للأفعال الناقصة بنقل الكلام العام؛ فالسياق هو الذي يبيّن مصدر الخبر وموقف الناقل.",
      whyAr:
        "يسمى هذا الاستعمال «معرفياً/ذاتياً» لأنه يعبّر عن تقدير المتكلم للخبر: Er kann schwimmen يصف قدرة، بينما Das kann stimmen قد يقدّم احتمالاً. الفعل نفسه قد يؤدي وظيفة مختلفة باختلاف المعنى والسياق، لذلك لا يكفي حفظ ترجمة واحدة له.\n\nتساعد هذه الصيغ الكاتب على إظهار مقدار التزامه بما يقول: قد يعرض نتيجة بوصفها محتملة أو مرجّحة بدلاً من عرضها كحقيقة مؤكدة. لكن لا يجوز استنتاج مقدار الدليل العلمي أو موثوقية النتيجة من الفعل الناقص وحده؛ فذلك يحتاج إلى معرفة المصدر والسياق.\n\nقد تلطف بعض الصيغ العبارة في مواقف العمل، مثل Das dürfte schwierig werden أو Das müsste bis Freitag fertig sein. غير أن معنى التلطيف والاحتمال يتوقف على الموقف والتنغيم، ولا تنحصر وظيفة الصيغة في الأدب أو الشك.\n\nعملياً، اسأل: هل يتحدث المتكلم عن قدرة/إلزام، أم يقدّر احتمال صحة القضية؟ ثم اقرأ السياق كاملاً قبل اختيار معنى عربي. الترجمة هنا تقريبية، وليست مقياساً ثابتاً لدرجات اليقين.",
      table: {
        title: "درجات الاحتمال بالأفعال الناقصة الذاتية",
        columns: ["الفعل", "درجة الاحتمال", "المعنى", "مثال"],
        rows: [
          { label: "muss", cells: ["شبه يقين في بعض السياقات", "لابد أن / لا بدّ أنه", "Er muss zu Hause sein."] },
          { label: "dürfte", cells: ["ثقة كبيرة في المثال", "على الأرجح", "Das dürfte richtig sein."] },
          { label: "müsste", cells: ["احتمال قوي في المثال", "من المرجّح أن", "Er müsste bald kommen."] },
          { label: "könnte", cells: ["احتمال", "قد / ربما", "Sie könnte krank sein."] },
          { label: "kann", cells: ["إمكان؛ وقد يكون معرفياً بحسب السياق", "قد / يمكن", "Das kann passieren."] },
        ],
      },
      examples: [
        { de: "Die Entdeckung dürfte die Forschung verändern.", ar: "على الأرجح سيغيّر الاكتشاف البحث العلمي." },
        { de: "Der Forscher muss lange experimentiert haben.", ar: "لابد أن الباحث أجرى تجارب طويلة." },
        { de: "Die Ergebnisse könnten morgen veröffentlicht werden.", ar: "قد تُنشر النتائج غداً." },
        { de: "Das Experiment müsste erfolgreich gewesen sein.", ar: "من المرجّح أن تكون التجربة قد نجحت." },
        { de: "Solche Fehler können überall passieren.", ar: "مثل هذه الأخطاء قد تحدث في أي مكان (إمكانية عامة)." },
        { de: "Die Ursache dürfte ein technischer Fehler gewesen sein.", ar: "على الأرجح كان السبب خطأً تقنياً." },
      ],
      comparisonWithArabic:
        "المقابلات العربية تقريبية: قد تقابل «لابد أن» صيغة muss في سياق، و«على الأرجح» dürfte، و«ربما» könnte، لكن لا توجد مطابقة ثابتة. فالألمانية تستخدم أفعالاً ناقصة قد تعبّر أيضاً عن القدرة أو الإلزام، بينما تعتمد العربية غالباً على كلمات أو تراكيب أخرى.\n\nلذلك لا تحفظ ترتيباً رقمياً ولا ترجمة واحدة لكل فعل. في بعض الأمثلة يكون muss أقوى من dürfte، لكن السياق قد يغيّر أثر العبارة، وkann لا يساوي könnte دائماً. احفظ مثالاً سياقياً لكل استعمال، ثم اسأل هل المقصود قدرة أو إلزام أم تقدير احتمال.\n\nيمكن أن تساعد عبارات عربية مثل «من المرجح» و«قد» و«لا بدّ أن» على نقل المعنى، لكن الاختيار بينها يتوقف على درجة التأكيد التي يوحي بها السياق الألماني، وعلى غرض المتكلم. لا تجعل الترجمة بديلاً عن فهم الجملة كاملة.",
      eselsbruecke:
        "مفاتيح تقريبية لا سلّم ثابت: muss قد يدل على شبه يقين، dürfte على ترجيح قوي، müsste على احتمال قوي، وkönnte على احتمال؛ يتغير المعنى بحسب السياق.",
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
