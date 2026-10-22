/**
 * b2-05 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الروابط المتقدمة: indem, anstatt...zu, ohne...zu, es sei denn + روابط النتيجة (folglich, demnach)",
      titleDe: "Fortgeschrittene Konnektoren: folglich, demnach, indem ...",
      explanationAr:
        "تبدأ المجموعة الأولى بروابط الطريقة والمقابلة: «indem» تعني «بأن/بواسطة» وتربط الفعل بوسيلته (Man lernt, indem man übt)، و«anstatt … zu» تعني «بدلاً من أن» (Anstatt zu schlafen, arbeitete er)، و«ohne … zu» تعني «دون أن» (Er ging, ohne zu grüßen). والثلاثة تشترك في أن الجملة المصدرية تُبنى بـ zu + مصدر، وأن الفاعل واحد في الشطرين؛ وهذا الوحدة هي سبب الاختصار نفسه.\n\nأما روابط الشرط والاستثناء فهي «es sei denn» (إلا إذا) و«je nachdem» (حسبما) و«statt dass» (بدل أن، مع اختلاف الفاعل). ولها جميعاً علامة إعرابية مشتركة: هي روابط تدخل على جملة ثانوية كاملة، فينتقل الفعل المصرّف إلى نهايتها، ولذلك تكثر فيها صيغة الفعل الأخيرة ويظهر فيها الفاصل (es sei denn, es regnet).\n\nوالمجموعة الثالثة روابط النتيجة: «folglich» و«demnach» و«sodass». والفرق بينها تركيبي لا دلالي: folglich وdemnach ظرفان، ولذلك يتقدّمان الجملة ويشغلان المركز الأول، فيأتي الفعل المصرّف بعدهما مباشرة (Er übte viel, folglich bestand er die Prüfung). أما «sodass» فرابط يفتح جملة ثانوية يُنتظر فعلها في النهاية (Er sprach laut, sodass alle ihn hörten). ومن هنا ينشأ أكثر أخطاء هذا الباب: أن يضع المتعلّم الفعل في النهاية بعد folglich، فيكتب جملة تُقرأ كجملة ثانوية بلا رابط.\n\nوأخيراً الفرق الدلالي الذي تحسمه قراءة السياق: «indem» تجيب على سؤال «كيف؟» (الوسيلة)، و«damit» تجيب على سؤال «لماذا؟» (الهدف)، و«damit» تفتح جملة ثانوية كاملة بينما «indem» تجيب على الوسيلة بفاعلين أو بفاعل واحد. ومن خلط بينهما كتب جملة صحيحة نحوياً ولكنها تجيب عن سؤال آخر، وهو خطأ لا يكشفه المدقّق الإملائي لأنه لا يرى النية.",
      whyAr:
        "لماذا «بلا فاعل» في anstatt/ohne + zu؟ لأن الفاعل نفسه هو فاعل الجملة الرئيسية: «بدلاً من أن أنام» — المتكلم نفسه. لذلك يختصر بـ zu + مصدر. وهذا اختصار شائع في الكتابة المتقدمة. أما folglich/demnach فهما «روابط النتيجة المقلوبة» — تختصر سبباً كاملاً في كلمة واحدة، وهي لغة التقارير والتحليل (Folglich = وبالتالي، Demnach = وفقاً لما سبق).",
      table: {
        title: "الروابط المتقدمة",
        columns: ["الرابط", "المعنى", "التركيب", "مثال"],
        rows: [
          { label: "indem", cells: ["بأن/بواسطة", "جملة كاملة", "Man lernt, indem man übt."] },
          { label: "anstatt...zu", cells: ["بدلاً من أن", "zu + مصدر", "Anstatt zu schlafen, arbeitete er."] },
          { label: "ohne...zu", cells: ["دون أن", "zu + مصدر", "Er ging, ohne zu grüßen."] },
          { label: "es sei denn", cells: ["إلا إذا", "جملة كاملة", "Ich komme, es sei denn, es regnet."] },
          { label: "je nachdem", cells: ["حسبما", "ob/wie", "Je nachdem, ob er kommt."] },
          { label: "statt dass", cells: ["بدل أن (بفاعل)", "جملة كاملة", "Statt dass er hilft, stört er."] },
          { label: "folglich", cells: ["وبالتالي (نتيجة)", "قلب ترتيب (V2)", "Er übte viel, folglich bestand er."] },
          { label: "demnach", cells: ["وفقاً لذلك (نتيجة)", "قلب ترتيب (V2)", "Demnach müssen wir umplanen."] },
        ],
      },
      examples: [
        { de: "Man vermeidet Missverständnisse, indem man aktiv zuhört.", ar: "يتجنب المرء سوء الفهم بالإنصات النشط." },
        { de: "Anstatt zu kritisieren, sollte man loben.", ar: "بدلاً من الانتقاد، ينبغي المدح." },
        { de: "Er verließ den Raum, ohne ein Wort zu sagen.", ar: "غادر الغرفة دون أن يقول كلمة." },
        { de: "Wir treffen uns morgen, es sei denn, es kommt etwas dazwischen.", ar: "نتقابل غداً إلا إذا حدث شيء." },
        { de: "Je nachdem, wie du reagierst, entscheiden wir.", ar: "حسبما تتصرف نقرر." },
        { de: "Er hat viel geübt, folglich besteht er die Prüfung.", ar: "تدرب كثيراً، وبالتالي ينجح في الامتحان." },
        { de: "Die Lage ist ernst. Demnach müssen wir schnell handeln.", ar: "الوضع خطير. وفقاً لذلك يجب أن نتصرف بسرعة." },
        { de: "Er sprach sehr leise, sodass ihn nur die ersten Reihen verstanden.", ar: "تحدّث بهدوء شديد بحيث لم يفهمه إلا الصفوف الأولى." },
      ],
      comparisonWithArabic:
        "«بالإنصات» = indem man zuhört — قريب من «بـ + مصدر» في العربية. «بدلاً من النوم» = anstatt zu schlafen — تقابل قريب. و«دون أن يقول كلمة» = ohne ein Wort zu sagen — تقابل قريب. أما «وبالتالي/وفقاً لذلك» = folglich/demnach فيقابلهما في العربية أدوات مثل «وبالتالي» و«وفقاً لذلك».",
      eselsbruecke:
        "«indem = بوسيلة (كيف؟)، anstatt...zu = بدلاً من (فاعل واحد)، ohne...zu = دون أن» — «es sei denn = إلا إذا» — احفظها ككتلة واحدة. و«folglich/demnach = وبالتالي» — أخوات deshalb في قلب الترتيب.",
      commonMistakes: [
        { wrong: "Anstatt er schläft (جملة بدل zu + مصدر)", right: "Anstatt zu schlafen", whyAr: "الصيغة المصدرية anstatt … zu لا تصحّ إلا إذا كان فاعل الشطرين واحداً؛ فإن اختلف الفاعل وجبت statt dass مع جملة كاملة، ولذلك يُصلح المتعلّم الخطأ إما بتوحيد الفاعل أو بتغيير الرابط." },
        { wrong: "ohne zu sagen ein Wort (ترتيب)", right: "ohne ein Wort zu sagen", whyAr: "في البناء المصدري يقع المفعول أو الظرف بين ohne وzu، ثم يأتي المصدر في النهاية: ohne ein Wort zu sagen. وتقديم المصدر قبل مفعوله يُنتج ترتيباً غير ألماني وإن كان مفهوماً." },
        { wrong: "indem أم damit؟", right: "indem = طريقة (كيف؟). damit = هدف (لماذا؟)", whyAr: "السؤالان مختلفان: «كيف؟» يُجاب عنه بـ indem، و«لماذا؟» يُجاب عنه بـ damit. ومن أخطأ هنا لم يُخطئ في النحو، بل أجاب عن سؤال غير الذي طرحته الجملة، وهذا ما لا يكشفه أي مدقّق إملائي." },
        { wrong: "folglich في نهاية الجملة (Er übte, er bestand folglich.)", right: "Er übte viel, folglich bestand er.", whyAr: "folglich/demnach مثل deshalb: الفعل في المركز الثاني بعدهما مباشرة." },
      ],
      relatedRuleComparison: {
        title: "anstatt...zu أم statt dass؟",
        content: "فاعل واحد → anstatt...zu (Anstatt zu schlafen...). فاعلان → statt dass (Statt dass er hilft, stört er). السؤال: هل الفاعل نفسه؟",
      },
    },
    {
      id: "t2",
      titleAr: "الجسيمات المشدِّدة (Modalpartikeln) — روح الألمانية المنطوقة",
      titleDe: "Modalpartikeln: doch, ja, mal, denn, eigentlich, wohl",
      explanationAr:
        "هذه الكلمات الصغيرة لا تُترجم حرفياً، لأن وظيفتها نقل «موقف المتكلم» لا معلومة جديدة: doch = «بل أؤكد لك» (رداً على نفي سابق)، ja = «كما تعلم/حقيقة معروفة»، mal = «فقط/ببساطة» (تخفيف الطلب)، denn = «إذاً/فضول» في السؤال، eigentlich = «في الحقيقة/بالمناسبة»، wohl = «على الأرجح». وهي لا تغيّر مضمون الجملة بل نبرتها.\n\nولها موضع ثابت داخل الجملة: تأتي في «الوسط» (Mittelfeld) بعد الفعل المصرّف وقبل بقية المعمولات: «Komm doch mal her!»، و«Das ist ja eine Überraschung!». ووضعها في أول الجملة أو آخرها يفسد طبيعتها، لأن الجسيم يعمل داخل مجال الفعل لا خارجه. وهذا التمركز هو أصعب ما في الباب على المتعلّم العربي، لأن لغته تضع أدوات النبرة في مواضع أخرى تماماً.\n\nوالفرق بينها وبين الظروف التي تشبهها في الشكل فرق وظيفي: «doch» ظرف عطف بمعنى «لكن» في «Er ist arm, doch glücklich»، وجسيم في «Komm doch!»؛ و«ja» ظرف جواب بمعنى «نعم»، وجسيم تأكيد في «Das ist ja super». ولذلك يجب أن تُحفظ في العبارات لا في القوائم، لأن المعنى لا يوجد في الكلمة بل في التعاون بين الكلمة والسياق.\n\nوأخيراً: الجسيمات سمة أساسية للألمانية المنطوقة، ويقل استعمالها كلما ارتفع مستوى الرسمية حتى يكاد يختفي في العقود والقوانين. ومن ثمّ فإن إتقانها يرفع الطلاقة في الحوار ويُخفق في التقرير: «Komm mal her» مقبولة تماماً بين الأصدقاء، و«Ich komme mal» غير مناسبة في رسالة رسمية. وأفضل طريقة لتعلمها الاستماع لا القواميس، لأن تكرارها في مواضعها هو ما يثبّتها.",
      whyAr:
        "لماذا لا نكتفي بالترجمة الحرفية؟ لأنها تنقل «النبرة النفسية» لا المعنى المعجمي: «Komm!» أمرٌ، «Komm mal!» طلب ودّي — «Das ist gut» خبر، «Das ist ja gut!» «ما أروع هذا!». العربي يستخدم لهذا أدوات مثل «إيه؟!» «طيب» «يعني» — الألماني يستخدم الجسيمات. إتقانها يرفع طلاقتك من «صحيحة لكن جامدة» إلى «طبيعية».",
      table: {
        title: "الجسيمات المشدِّدة — وظيفتها ومثال",
        columns: ["الجسيم", "الوظيفة", "المعنى العربي التقريبي", "مثال"],
        rows: [
          { label: "doch", cells: ["ردّ على نفي/تأكيد معاكس", "بل! بلى!", "Du kommst nicht? Doch, ich komme!"] },
          { label: "ja", cells: ["حقيقة معلومة للمستمع", "كما تعلم", "Das ist ja klasse!"] },
          { label: "mal", cells: ["تخفيف الطلب/الأمر", "فقط", "Komm mal her!"] },
          { label: "denn", cells: ["فضول/اهتمام في السؤال", "إذاً؟", "Was machst du denn hier?"] },
          { label: "eigentlich", cells: ["سؤال بلطف/بالمناسبة", "في الحقيقة", "Wo wohnst du eigentlich?"] },
          { label: "wohl", cells: ["احتمال/ظن لطيف", "على الأرجح", "Er ist wohl krank."] },
        ],
      },
      examples: [
        { de: "Komm doch mit ins Kino!", ar: "تعال معنا إلى السينما (أرجوك/بلى تعال)!" },
        { de: "Das ist ja eine tolle Überraschung!", ar: "يا لها من مفاجأة رائعة (كما ترى)!" },
        { de: "Kannst du mir mal kurz helfen?", ar: "هل يمكنك مساعدتي فقط للحظة؟" },
        { de: "Warum lachst du denn so?", ar: "لماذا تضحك هكذا (فضولاً/بالمناسبة)؟" },
        { de: "Wie heißt du eigentlich?", ar: "ما اسمك في الحقيقة (سؤال لطيف)؟" },
        { de: "Er hat wohl den Bus verpasst.", ar: "على الأرجح فاته الحافلة." },
        { de: "Das hast du ja toll gemacht!", ar: "لقد أحسنت صنعاً (وهذا واضح/كما ترى)." },
      ],
      comparisonWithArabic:
        "العربية تفعل ذلك بالأدوات والتنغيم: «تعال!» مقابل «تعال طيب!» = komm mal! و«ألن تأتِ؟ بلى!» = Doch, ich komme! و«ما اسمك أصلاً؟» = Wie heißt du eigentlich? و«إيه اللي ضحّكك؟» = Warum lachst du denn? الفكرة واحدة: كلمة صغيرة بلا معنى معجمي تنقل الموقف.",
      eselsbruecke:
        "اختصار «D-J-M-D-E-W»: Doch=بلى، Ja=أكيد، Mal=فقط، Denn=إذاً، Eigentlich=أصلاً، Wohl=غالباً. والأهم: «لا تترجمها — اشعر بها». دوّنها من الأفلام لا من القواميس.",
      commonMistakes: [
        { wrong: "حذفها كلها (Komm! بدل Komm mal!)", right: "Komm mal! — أخفّ وأودّ", whyAr: "من دون الجسيم تصبح الجملة أمراً مجرّداً وحادّاً في السمع الألماني: «Komm!» خشنة نسبياً، و«Komm mal!» ودّية. والفرق ليس في المعنى بل في درجة اللطف التي يسمعها المتكلّم الأصلي مباشرة." },
        { wrong: "ترجمتها حرفياً كظرف (ja = نعم)", right: "ja قبل الصفة = تأكيد حار", whyAr: "«ja» هنا جسيم شدّ لا ظرف جواب؛ فهي تؤكد أن الأمر معروف للمستمع أو مفاجئ له: Das ist ja super = «هذا ممتاز حقاً!»، وليست «نعم ممتاز». والخطأ يقع لأن الشكل واحد والوظيفة مختلفة تماماً." },
        { wrong: "doch في غير موضع الرد على النفي", right: "doch = «بلى» بعد نفي فقط", whyAr: "جسيم doch ينقض نفيًا سابقاً أو يفترض خلاف الظاهر: «Du kommst nicht? Doch, ich komme!» و«Er kommt doch» أي أنه سيأتي خلافاً لما قيل. واستعماله بلا نفي سابق أو تعارض يفقد الجملة حافزها النبري." },
      ],
      relatedRuleComparison: {
        title: "الجسيمات أم الظروف؟ (doch الظرف = لكن)",
        content: "نفس الكلمة بمعنيين: «Er ist arm, doch glücklich» = لكن (ظرف عطف). «Komm doch!» = جسيم شدّ (بلا ترجمة). الفرق: الجسيم لا يغيّر المعنى الحرفي — يضيف موقفاً فقط.",
      },
    },
    {
      id: "t6",
      titleAr: "Funktionsverbgefüge — الفعل الوظيفي: الأسلوب الرسمي للاقتصاد والأخبار",
      titleDe: "Funktionsverbgefüge: zur Verfügung stellen, in Kraft treten, zum Ausdruck bringen",
      explanationAr:
        "في اللغة الرسمية (الأخبار، التقارير، الرسائل، النقاش الأكاديمي) لا نقول فقط ausdrücken، بل نستخدم «اسم + فعل وظيفي» (Funktionsverbgefüge): zum Ausdruck bringen، zur Verfügung stellen، in Kraft treten. والفعل الوظيفي في هذه الكتل يحمل التصريف وحده، أما الاسم فيحمل المعنى كاملاً؛ ولذلك تستطيع أن تشتق منه صفات وتبني عليه جملاً طويلة بلا فوضى.\n\nوللفعل الوظيفي عنصر ثابت لا يتغيّر: حرف الجر أو أداة التعريف داخله (zum Ausdruck · zur Verfügung · in Kraft · unter Beweis). هذا العنصر هو الذي يحفظه المتعلّم كوحدة واحدة، وهو أيضاً موضع الخطأ الأشيع، لأنه لا يخضع لمنطق واضح، وإنما يُحفظ حفظاً كما تُحفظ التعابير الاصطلاحية.\n\nوالفرق بين الفعل الوظيفي والفعل البسيط أسلوبي صرف: «Wir haben die Frage geprüft» محايدة، و«Wir haben die Frage einer Prüfung unterzogen» أكثر رسمية وأكثر برودة. ولذلك يكثر الفعل الوظيفي في الأخبار والبروتوكولات والبيانات الرسمية، ويقلّ في المحادثة اليومية التي تفضّل الفعل البسيط والقصير.\n\nويجب الانتباه إلى أن بعضها يظهر في صيغتين تختلفان في المعنى: «zur Verfügung stellen» تعني أن فاعلاً يضع شيئاً تحت التصرف، و«zur Verfügung stehen» تعني أن الشيء متاح؛ الأولى متعدية والثانية لازمة. ومن أخفق في التفريق بينهما قرأ نقلاً خطأً عن أن جهة «وفّرت» شيئاً بينما النص يقول إن الشيء «متاح» — والفرق في الأخبار جوهري.",
      whyAr:
        "لماذا يستخدمه الألمان؟ لأن الجملة الاسمية تعطي «وزناً رسمياً» وتتيح إضافة صفات بسهولة: «Die Maßnahme tritt in Kraft» أنسب من «Die Maßnahme beginnt» في تقرير رسمي. والفهم ضروري: في القراءة ستواجه كثيراً من هذه التراكيب (zum Abschluss bringen، unter Beweis stellen، in Frage stellen) — إن لم تفهمها قد تضيع الفكرة.",
      table: {
        title: "أمثلة من الفعل الوظيفي (Funktionsverbgefüge)",
        columns: ["FVG", "يعادل", "المعنى", "مثال"],
        rows: [
          { label: "zum Ausdruck bringen", cells: ["ausdrücken", "يُعبّر عن", "Er brachte seine Meinung zum Ausdruck."] },
          { label: "zur Verfügung stellen", cells: ["bereitstellen", "يوفّر/يضع تحت التصرف", "Die Firma stellt Geräte zur Verfügung."] },
          { label: "in Kraft treten", cells: ["beginnen", "يدخل حيز التنفيذ", "Das Gesetz tritt im Januar in Kraft."] },
          { label: "in Frage stellen", cells: ["bezweifeln", "يشكك في", "Experten stellen die Studie in Frage."] },
          { label: "unter Beweis stellen", cells: ["beweisen", "يُثبت", "Er stellte sein Können unter Beweis."] },
          { label: "zum Abschluss bringen", cells: ["abschließen", "يُنهي", "Wir brachten das Projekt zum Abschluss."] },
          { label: "in Betrieb nehmen", cells: ["starten", "يُشغّل", "Das Kraftwerk wird in Betrieb genommen."] },
          { label: "zur Kenntnis nehmen", cells: ["bemerken", "يأخذ علماً", "Die Parteien nahmen das Urteil zur Kenntnis."] },
          { label: "in Betracht ziehen", cells: ["erwägen", "يأخذ بعين الاعتبار", "Wir ziehen eine Alternative in Betracht."] },
          { label: "eine Rolle spielen", cells: ["wichtig sein", "يلعب دوراً", "Die Kosten spielen eine große Rolle."] },
          { label: "in Kauf nehmen", cells: ["hinnehmen", "يقبل بـ (على مضض)", "Für den Beruf nahm sie einen Umzug in Kauf."] },
        ],
      },
      examples: [
        { de: "Die neue Regelung tritt ab März in Kraft.", ar: "تدخل اللائحة الجديدة حيز التنفيذ من مارس." },
        { de: "Der Chef brachte seine Zufriedenheit zum Ausdruck.", ar: "أعرب المدير عن رضاه." },
        { de: "Die Bibliothek stellt ihre Daten zur Verfügung.", ar: "تضع المكتبة بياناتها تحت التصرف." },
        { de: "Wir zogen mehrere Lösungen in Betracht.", ar: "أخذنا عدة حلول بعين الاعتبار." },
        { de: "Die Gewerkschaft stellte die Entscheidung in Frage.", ar: "شككت النقابة في القرار." },
        { de: "Die Regierung brachte ihre Bedenken zur Sprache.", ar: "أثارت الحكومة تحفّظاتها (عبّرت عنها رسمياً)." },
      ],
      comparisonWithArabic:
        "العربية تفعل مثلها تماماً: «يُعرب عن» بدل «يقول»، و«يدخل حيز التنفيذ» بدل «يبدأ»، و«يضع تحت التصرف» بدل «يعطي»، و«يشكّك في» بدل «يرفض». والتشابه في هذه الحالات يجعل الفعل الوظيفي من أسهل أبواب B2 على المتعلّم العربي إذا فكّر بالأسلوب الرسمي في لغته قبل أن يبحث عن الفعل البسيط. والفرق الدقيق أن العربية تصوغ هذا التركيب بفعل + حرف جر + مصدر عادةً، والألمانية تصوغه بفعل + عبارة اسمية ثابتة، ومن ثمّ يجب حفظ عنصرها الثابت (zum · zur · in · unter) لا ترجمتها فقط. والخطأ الشائع أن يُترجم المتعلّم الفعل الوظيفي كأنه فعله البسيط، فيقول «Das Gesetz beginnt» في نصّ رسمي بدل «tritt in Kraft»، فتصحّ الجملة نحوياً وتفقد مستواها الأسلوبي — وهذا بالضبط ما يفرّق بين كتابة B1 وكتابة B2.",
      eselsbruecke:
        "«zur Verfügung stellen = يضع تحت التصرف» — احفظها ككتلة كاملة. و«in Kraft treten»: يدخل القانون حيز التنفيذ، وKraft هنا تعني قوة النفاذ.",
      commonMistakes: [
        { wrong: "Das Gesetz treten in Kraft.", right: "Das Gesetz tritt in Kraft.", whyAr: "الفعل يتصرف مع الفاعل المفرد: tritt، و«in Kraft» عبارة ثابتة." },
        { wrong: "خلط zur Verfügung stellen (يوفّر) مع zur Verfügung stehen (متاح)", right: "stellen = يفعلها فاعل · stehen = يصف حالة", whyAr: "«zur Verfügung stellen» متعدية: فاعل يضع شيئاً تحت التصرف، و«zur Verfügung stehen» لازمة: الشيء متاح. والخلط بينهما خبري لا نحوي، لأن الجملة تظلّ صحيحة شكلاً وتنقل معلومات خاطئة عن الفاعل." },
        { wrong: "der Tisch spielt eine Rolle (ترجمة حرفية خاطئة)", right: "die Kosten/Meinung spielen eine Rolle", whyAr: "«eine Rolle spielen» تُستعمل مع الأشخاص والمفاهيم المجرّدة مثل die Kosten وdie Meinung وder Zufall، ولا تُستعمل مع الأشياء المادية الجامدة إلا مجازاً؛ واستعمالها مع طاولة مثلاً ينتج تشبيهاً غير مقصود." },
      ],
      relatedRuleComparison: {
        title: "FVG أم الفعل البسيط؟",
        content: "كلاهما صحيح. البسيط (ausdrücken) أسرع في الكلام؛ FVG (zum Ausdruck bringen) أنسب للكتابة الرسمية والخطابات.",
      },
    },
  ];
