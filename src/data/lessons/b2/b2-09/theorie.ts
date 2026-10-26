/**
 * b2-09 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الوصلات المتقدمة + المراسلات الرسمية",
      titleDe: "Fortgeschrittene Nomen-Verb-Verbindungen und formelle Briefe",
      explanationAr:
        "الوصلات المتقدمة في هذا الدرس صنفان: تراكيب «اسم + فعل» (in Betracht ziehen · zur Verfügung stellen) وتراكيب خطاب التقديم الرسمي (sich bewerben um · Wert legen auf · eine Rolle spielen · Anbei finden Sie). وكلاهما يقوم على مبدأ واحد: الاسم يحمل المعنى، والفعل يحمل الوظيفة النحوية والتصريف.\n\nوخطاب التقديم الألماني «قوالب» لا نص حرّ: بداية بوظيفة (hiermit bewerbe ich mich um …)، ثم عرض المؤهلات (ich bringe … mit · ich verfüge über …)، ثم الإشارة إلى المرفقات (Anbei finden Sie …)، ثم الرغبة في مقابلة (ich freue mich auf ein Gespräch). والمصحّح يقرأ هذه المواضع أولاً، فمن خرج عن القالب يفقد انطباعاً كاملاً وإن كانت لغته سليمة.\n\nوالأخطاء في هذا الباب أخطاء «تعاقد» لا أخطاء قواعد: قيمة الحرف (sich bewerben um + Akkusativ، لا nach)، وفعل التركيب (Wert legen auf، لا machen)، والحالة داخل الكتلة الثابتة (zur Verfügung، لا zu Verfügung). وهذه لا تُستنبط من المنطق، لأن الألمانية شكّلت كل كتلة على حدة عبر الاستعمال، والمحفوظ فيها هو الوحدة كاملة لا الكلمة وحدها.\n\nوللأسلوب ثمنه: من كدّس هذه الكتل حتى خلت الجملة من الأفعال المصرّفة ظهر نصه مصطنعاً ومهماً بلا مضمون. والقاعدة العملية أن تحمل كل كتلة معلومة جديدة واحدة، وأن تُفكّ بينها بجملة بسيطة تشرح وتستريح.\n\nوأخيراً: هذه التراكيب في الألمانية الرسمية ما يقابل «التراكيب المصطلحة» في العربية الرسمية («نتشرّف بأن نتقدّم»، «نرفق لسيادتكم»)، فالحسّ اللغوي العربي يخدم المتعلّم هنا إذا عاملها كصيغ جاهزة لا كأفعال تُصرَّف.",
      whyAr:
        "لماذا هذه الوصلات؟ لأن خطاب التقديم الألماني «قوالب»: البداية (أي وظيفة)، ثم المؤهلات، ثم المرفقات، ثم الرغبة في مقابلة. ومن يستعمل القالب يعطي المصحّح ما يبحث عنه في ثوانٍ، ومن يكتب نصاً حرّاً بلغة سليمة قد يبدو غير متمكّن من الأسلوب المهني. ومن ثمّ فالفائدة هنا وظيفية لا تجميلية: القالب هو ما يُقبل به الناس إلى المقابلة. وعملياً، من حفظ عشر كتل كاملة (sich bewerben um · Wert legen auf · zur Verfügung stellen · in Betracht ziehen · eine Rolle spielen · Anbei finden Sie) استطاع أن يكتب خطاباً كاملاً من قوالب، وأن يقرأ عروض العمل والردود الرسمية بلا أن يعلق في حرف جر أو اسم.",
      table: {
        title: "وصلات B2 المتقدمة",
        columns: ["الوصلة", "المعنى", "مثال"],
        rows: [
          { label: "in Betracht ziehen", cells: ["يأخذ بعين الاعتبار", "Ich ziehe die Stelle in Betracht."] },
          { label: "zur Verfügung stellen", cells: ["يضع تحت التصرف", "Ich stelle meine Erfahrung zur Verfügung."] },
          { label: "eine Rolle spielen", cells: ["يلعب دوراً", "Teamarbeit spielt eine große Rolle."] },
          { label: "Wert legen auf", cells: ["يولي أهمية", "Ich lege Wert auf Pünktlichkeit."] },
          { label: "zum Ausdruck bringen", cells: ["يعبّر عن", "Ich möchte meine Motivation zum Ausdruck bringen."] },
        ],
      },
      examples: [
        { de: "Ich bewerbe mich um die Stelle als Projektmanager.", ar: "أتقدم لمنصب مدير مشاريع." },
        { de: "Anbei finden Sie meinen Lebenslauf.", ar: "مرفقاً سيرتي الذاتية." },
        { de: "Ich lege großen Wert auf Teamarbeit.", ar: "أولي أهمية كبيرة للعمل الجماعي." },
        { de: "Meine Erfahrung spielt eine wichtige Rolle.", ar: "تلعب خبرتي دوراً مهماً." },
        { de: "Ich stelle meine Fähigkeiten gern zur Verfügung.", ar: "أضع قدراتي بكل سرور تحت التصرف." },
        { de: "Ich bringe drei Jahre Erfahrung im Projektmanagement mit.", ar: "أحمل ثلاث سنوات من الخبرة في إدارة المشروعات." },
      ],
      comparisonWithArabic:
        "«أتقدم لمنصب» = Ich bewerbe mich um die Stelle — تقابل قريب. و«مرفق تجد سيرتي الذاتية» = Anbei finden Sie meinen Lebenslauf، و«أولي أهمية للعمل الجماعي» = Ich lege Wert auf Teamarbeit. والتقابل قريب لأن العربية الرسمية أيضاً تميل إلى تراكيب اسمية-فعلية ثابتة («أولي أهمية»، «أتقدّم بطلب»). والفرق في الشيوع: العربية تستعمل البديل الفعلي (أهتمّ) في أغلب السياقات، والألمانية الرسمية تفضّل الكتلة الاصطلاحية لأنها إشارة إلى سجل لغوي رفيع. ومن ثمّ تُترجم الكتلة بكتلة عربية رسمية («أولي أهمية»)، لا بفعل محايد («أهتم»).",
      eselsbruecke:
        "«مرفق تجدون سيرتي» = Anbei finden Sie meinen Lebenslauf — جملة جاهزة. و«أولي أهمية» = Wert legen auf. احفظ الوصلات الخمس كقائمة جاهزة للخطاب.",
      commonMistakes: [
        { wrong: "Ich bewerbe mich nach der Stelle (حرف خاطئ)", right: "Ich bewerbe mich um die Stelle", whyAr: "الفعل يحمل حرفه: sich bewerben um + Akkusativ. ومن قاس على «تقدم إلى» في العربية كتب nach، ومن ردّده في سياقات أخرى تردّد؛ والحلّ أن تُحفظ الكتلة بصيغها: ich bewerbe mich um die Stelle · um einen Platz · um ein Stipendium." },
        { wrong: "Wert machen auf", right: "Wert legen auf", whyAr: "الكتلة الثابتة هي Wert legen auf: القيمة تُوضع لا تُصنع. والخطأ إنتاجي خالص لأن machen هو الفعل العام الأكثر حضوراً في ذهن المتعلّم؛ ولمّا كانت الكتل تُقاس على الاستعمال لا على المعنى، وجب أن تُحفظ بحرفها وفعلها معاً." },
        { wrong: "Anbei ist mein Lebenslauf (أقل شيوعاً)", right: "Anbei finden Sie meinen Lebenslauf", whyAr: "الصيغة المتعاقد عليها في المراسلة الرسمية «Anbei finden Sie …» لأنها تخاطب القارئ مباشرة وتقدّم العرض. و«Anbei ist …» ليست خطأ نحوياً لكنها تقريرية باردة، وتُقرأ في خطاب رسمي كمسافة في الأسلوب." },
      ],
      relatedRuleComparison: {
        title: "الخطاب الرسمي أم العامي؟",
        content: "الرسمي: Sehr geehrte... + Anbei finden Sie + Mit freundlichen Grüßen. العامي: Hallo + Ich schicke dir + Liebe Grüße. السياق يحدد — وخطاب التقديم عادةً رسمي.",
      },
    },
    {
      id: "t2",
      titleAr: "Funktionsverbgefüge: تراكيب الأفعال الوظيفية",
      titleDe: "Funktionsverbgefüge",
      explanationAr: "التراكيب الوظيفية تجعل الاسم هو حامل المعنى: eine Entscheidung treffen (يقرّر) بدل entscheiden، وin Betracht ziehen (يأخذ بعين الاعتبار) بدل berücksichtigen، وzur Verfügung stellen بدل bereitstellen. والفعل فيها («الفعل الوظيفي») شبه فارغ من معناه الأصلي: وظيفته أن يحمل التصريف والشخص والزمن، أما الدلالة الكاملة ففي الاسم.\n\nوكل كتلة تُحفظ بثلاثة عناصر معاً: الفعل الوظيفي (treffen · ziehen · stellen · legen)، وحرف الجر أو أداة التعريف (in · zur · auf)، وحالة الاسم. وهذه العناصر «تعاقدية» لا منطقية: يقال eine Entscheidung treffen ولا يقال machen، ويقال Kritik üben ولا يقال geben؛ لأن الاستعمال هو المصدر الوحيد هنا.\n\nوالفائدة الأسلوبية أن التراكيب الوظيفية ترفع السجل اللغوي: «Wir müssen diese Option berücksichtigen» صحيحة، لكن «Wir müssen diese Option in Betracht ziehen» تُقرأ كمكتوبة في مؤسسة، لأنها تقدّم المعلومة بمسافة رسمية. وهذا ما تطلبه التقارير والمراسلات المهنية والخطب.\n\nوللاختيار بين التركيب والفعل البسيط قاعدتان: (1) كثرة التراكيب تفقد النص حيويته إن تجاوزت واحدة كل جملتين، لأن القارئ يفقد الفاعل بين الأسماء؛ (2) بعض التراكيب مشترك بين الرسمي والعامي (eine Rolle spielen · in Kraft treten)، وبعضها محصور في اللغة المتخصّصة (einer Prüfung unterziehen). ومن أدرك هذا التوزيع استعمل الفعل البسيط في الحوار فصار طبيعياً، واستعمل الكتلة في التقرير فصار مهنياً.",
      whyAr: "لماذا؟ لأن النصوص المهنية والأكاديمية تستخدمها كثيراً: هي تُعبّر عن عمل مؤسسي لا عن فعل شخصي، وتسمح بإضافة صفات ومتمّمات بسهولة (eine schnelle Entscheidung treffen · die Daten der Kunden zur Verfügung stellen). ولذلك يقرأ المتعلّم في تقرير واحد عشراً منها، فمن لم يحفظها قرأ الجملة كلمة كلمة وضاع عليه الفاعل، ومن حفظها قرأ الكتلة كوحدة واحدة وبقي المجال لالتقاط المعنى. ولهذا تُدرَّس مبكراً: لأنها عتبة الدخول إلى القراءة المهنية، لا زينة أسلوبية.",
      table: {
        title: "Funktionsverbgefüge الشائعة",
        columns: ["التركيب", "الفعل البسيط", "المعنى", "المجال"],
        rows: [
          { label: "eine Entscheidung treffen", cells: ["entscheiden", "يتخذ قراراً", "إدارة"] },
          { label: "zur Verfügung stellen", cells: ["verfügbar machen", "يوفّر", "عمل"] },
          { label: "in Betracht ziehen", cells: ["berücksichtigen", "يأخذ في الاعتبار", "رسمي"] },
          { label: "Kritik üben", cells: ["kritisieren", "يوجّه نقداً", "إعلام"] },
          { label: "eine Rolle spielen", cells: ["wichtig sein", "يؤدي دوراً", "عام"] },
        ],
      },
      examples: [
        { de: "Die Firma trifft eine wichtige Entscheidung.", ar: "الشركة تتخذ قراراً مهماً." }, { de: "Wir müssen die Kosten in Betracht ziehen.", ar: "يجب أن نأخذ التكاليف بعين الاعتبار." }, { de: "Wir müssen eine Entscheidung treffen.", ar: "علينا اتخاذ قرار." }, { de: "Das Unternehmen stellt die Daten zur Verfügung.", ar: "توفّر الشركة البيانات." }, { de: "Diese Option sollten wir in Betracht ziehen.", ar: "ينبغي أن نأخذ هذا الخيار في الاعتبار." },
        { de: "Wir müssen die Unterlagen bis Freitag zur Verfügung stellen.", ar: "علينا وضع المستندات تحت التصرف قبل الجمعة." },
      ],
      comparisonWithArabic: "هذا التركيب مألوف تماماً للعربي: نقول في الصياغة الرسمية «اتخذ قراراً» و«وجّه نقداً»، وهما أقرب إلى الاسم منهما إلى الفعل البسيط. الفارق أن الاختيار في الألمانية مقيّد بشدة: لا يجوز machen eine Entscheidung ولا geben Kritik — فالفعل الوظيفي جزء من التركيب المحفوظ.",
      eselsbruecke: "احفظ التركيب كاملاً كوحدة واحدة: الاسم مع فعله ومع حرف الجر إن وُجد. فالخطأ الشائع ليس في الاسم بل في اختيار الفعل، ولا توجد قاعدة تهديك إليه دائماً، لذلك تُحفظ مع الأمثلة.",
      commonMistakes: [
        { wrong: "eine Entscheidung machen", right: "eine Entscheidung treffen", whyAr: "الفعل الوظيفي المعتاد مع Entscheidung هو treffen، وmachen لا تُستعمل مع هذا الاسم بهذا المعنى." },
        { wrong: "Kritik geben", right: "Kritik üben", whyAr: "التركيب المحفوظ هو Kritik üben أو Kritik äußern، ولا يقال geben، لأن geben تدخل في تراكيب أخرى (einen Vortrag geben · Auskunft geben). والتباين يبيّن أن العنصر الثابت هو ما يحفظه الاستعمال لا ما يناسب العقل: «إعطاء نقد» منطقية عربية لا ألمانية." },
        { wrong: "in Betracht nehmen", right: "in Betracht ziehen", whyAr: "التركيب الثابت هو ziehen مع Betracht، أما nehmen فترد في in Kauf nehmen." },
      ],
      relatedRuleComparison: {
        title: "Funktionsverbgefüge أم الفعل البسيط؟",
        content: "الفعل البسيط أوضح وأخفّ وهو الأفضل في الكلام: Wir entscheiden. أما التركيب الوظيفي فأكثر رسمية وتجريداً، ويكثر في لغة الإدارة والصحافة والتقارير. استعمله في الكتابة الرسمية ولا تُثقل به المحادثة.",
      },
    },
  ];
