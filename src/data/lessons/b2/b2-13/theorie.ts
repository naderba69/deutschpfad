/**
 * b2-13 — الشرح النظري (الجزء «theorie»)
 * وحدة «التكنولوجيا والذكاء الاصطناعي»: الاشتقاق التقني، والروابط
 * الاستدراكية في النقاش التقني.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
  {
    id: "t1",
    titleAr: "الاشتقاق التقني: السوابق والمركبات",
    titleDe: "Wortbildung im technischen Wortschatz: Präfixe und Komposita",
    explanationAr:
      "المصطلح التقني الألماني ليس وحدة معجمية معتمة، بل غالباً تركيب من أجزاء تعرفها. من فهم قواعد الاشتقاق يستنتج معنى مصطلح جديد دون قاموس. وأهم ثلاث آليات في هذا الباب: السوابق (Präfixe)، واللواحق (Suffixe)، والمركبات (Komposita).\n\nالسوابق تغيّر معنى الجذر أو توجّهه. في التقنية تكرّ سبع سوابق: «ver-» تدل على تحوّل أو خطأ أو إتمام (vernetzen يربط شبكياً، verschlüsseln يشفّر)، و«ent-» تدل على الإزالة أو الانطلاق (entwickeln يطوّر — أي يزيل التغطية عن الفكرة، entschlüsseln يفكّ التشفير)، و«er-» تدل على الوصول أو الإنتاج (erfassen يسجّل/يرصد، erzeugen يولّد)، و«be-» تنقل الفعل إلى التعدية (bearbeiten يعالج، bedienen يشغّل/يخدم)، و«an-» تدل على البدء أو الاتصال (anmelden يسجّل الدخول، anschließen يوصل)، و«ab-» تدل على الفصل أو الاكتمال (abmelden يسجّل الخروج، absichern يؤمّن)، و«aus-» تدل على الاتساع أو الإخراج (auswerten يقيّم، ausführen ينفّذ).\n\nاللواحق تحوّل الفعل إلى اسم مجرّد قابل للتداول في التقارير: «-ung» تُنتج اسماً مؤنثاً للعملية (automatisieren → die Automatisierung، digitalisieren → die Digitalisierung)، و«-heit/-keit» تُنتج اسماً لصفة أو خاصية (sicher → die Sicherheit، verfügbar → die Verfügbarkeit)، و«-bar» تُنتج صفة إمكانية (lesbar قابل للقراءة، nachvollziehbar قابل للفهم)، و«-los» تُنتج صفة انعدام (drahtlos لاسلكي، fehlerlos بلا أخطاء). ومن اللواحق ذات الحضور التقني الكثيف «-technik» و«-system» و«-verfahren» في آخر المركبات.\n\nالمركبات تُبنى من جزأين أو أكثر، والمحدِّد يأتي أولاً ويُحدَّد المعنى، والجزء الأساسي في النهاية هو الذي يحدّد الجنس والعدد النحوي: der Daten+schutz (إسم مذكر لأن Schutz مذكر)، die Cyber+sicherheit (مؤنث لأن Sicherheit مؤنث)، das Rechen+zentrum (محايد لأن Zentrum محايد). وهذه قاعدة ذهبية في فهم المصطلحات الجديدة: اقرأ المركّب من اليمين إلى اليسار لتحديد جنسه، ومن اليسار إلى اليمين لفهم تخصيصه: Datenschutzbeauftragter = Beauftragter (مكلّف) für Datenschutz (حماية البيانات).\n\n",
    whyAr:
      "لماذا يُعدّ الاشتقاق مهارة تقنية لا مجرد معلومة معجمية؟ لأن المصطلحات التقنية تُولَّد أسرع من القواميس: كل سنة تُضاف مصطلحات مثل «Künstliche-Intelligenz-Verordnung» أو «Cybersicherheitsstrategie». من يعرف أن الجزء الأخير يحدّد الجنس، وأن «-ung» اسم عملية، وأن «ver-» و«ent-» متقابلان في أزواج مثل verschlüsseln/entschlüsseln، يستطيع أن يقرأ نصاً تقنياً غير مألوف بثقة. والمهارة نفسها تخدم الإنتاج: عندما تكتب تقريراً تقنياً تحتاج «die Auswertung» و«die Verfügbarkeit» و«nachvollziehbar»، وهي كلها مشتقات منتظمة لا مفردات تُحفظ فرادى.",
    table: {
      title: "السوابق واللواحق التقنية",
      columns: ["الأداة", "الوظيفة", "أمثلة", "المعنى"],
      rows: [
        { label: "ver-", cells: ["تحوّل أو إتمام", "vernetzen · verschlüsseln", "يربط · يشفّر"] },
        { label: "ent-", cells: ["إزالة أو انطلاق", "entwickeln · entschlüsseln", "يطوّر · يفكّ التشفير"] },
        { label: "er-", cells: ["رصد أو إنتاج", "erfassen · erzeugen", "يسجّل · يولّد"] },
        { label: "be-", cells: ["تعدية", "bearbeiten · bedienen", "يعالج · يشغّل"] },
        { label: "-ung", cells: ["اسم عملية", "die Automatisierung", "الأتمتة"] },
        { label: "-heit/-keit", cells: ["اسم خاصية", "die Sicherheit · die Verfügbarkeit", "الأمان · التوافر"] },
        { label: "-bar", cells: ["صفة إمكانية", "nachvollziehbar · lesbar", "قابل للفهم · للقراءة"] },
        { label: "Kompositum", cells: ["الأخير يحدّد الجنس", "der Daten+schutz", "حماية البيانات"] },
      ],
    },
    examples: [
      { de: "Die Digitalisierung verändert die Arbeitswelt.", ar: "الرقمنة تغيّر عالم العمل." },
      { de: "Sensible Daten müssen verschlüsselt werden.", ar: "يجب تشفير البيانات الحساسة." },
      { de: "Die Software ist benutzerfreundlich und leicht bedienbar.", ar: "البرنامج سهل الاستخدام والتشغيل." },
      { de: "Der Datenschutzbeauftragte prüft die Systeme.", ar: "مكلّف حماية البيانات يفحص الأنظمة." },
      { de: "Die Verfügbarkeit des Systems ist nachvollziehbar dokumentiert.", ar: "توافر النظام موثّق بشكل قابل للتحقق." },
      { de: "Künstliche Intelligenz erzeugt Texte und Bilder.", ar: "الذكاء الاصطناعي يولّد نصوصاً وصوراً." },
      { de: "Die Cybersicherheitsstrategie wurde überarbeitet.", ar: "أُعيدت مراجعة استراتيجية الأمن السيبراني." },
    ],
    comparisonWithArabic:
      "العربية تبني المصطلحات التقنية بالاشتقاق أيضاً («رقمنة» من رقم، «أتمتة» من آلي) وبالإضافة («حماية البيانات»، «الأمن السيبراني»)، والمقابلة تقريبية لا حرفية. لكن الفرق البنيوي مهم: العربية تُضيف المضاف إليه في النهاية («حماية البيانات») بينما الألمانية تضع المحدِّد أولاً في المركّب (Datenschutz). وهذا يعني أن قراءة المركّب الألماني تبدأ من اليمين لتحديد الجنس والنواة، بعكس اتجاه القراءة العربية. كذلك تختلف اللواحق: «-ung» تقابل في العربية مصدراً صناعياً أو اسماً مجرّداً («-يّة» أو «-ة»)، و«-bar» تقابل «قابل للـ» أو صيغة «مفعول» أحياناً (lesbar = مقروء). لا تترجم السابقة وحدها، بل الوحدة كاملة في سياقها.",
    eselsbruecke:
      "اقرأ المركّب من اليمين: Daten+schutz هو Schutz (مذكّر). و«-ung» اسم عملية مؤنث دائماً. و«ver-» ضدّ «ent-»: verschlüsseln ↔ entschlüsseln.",
    commonMistakes: [
      { wrong: "das Datenschutz", right: "der Datenschutz", whyAr: "جنس المركّب يأتي من جزئه الأخير: Schutz مذكر ← der Datenschutz. من ينسى القاعدة يخمّن الجنس فيخطئ، لأن الجزء الأول (Daten) جمع لا يحدّد الجنس." },
      { wrong: "die Sicherheit (بمعنى الأمان التقني) مقابل Safety؟", right: "die Sicherheit تقابل الأمان في السياق التقني عادة", whyAr: "الألمانية تستخدم Sicherheit للمعنيين، وتخصّص السياق المعنى: Cybersicherheit (أمن سيبراني)، Arbeitssicherheit (سلامة مهنية). لا تفترض مقابلاً عربياً واحداً ثابتاً، بل اقرأ المركّب." },
      { wrong: "Die Daten werden verschlüsseln.", right: "Die Daten werden verschlüsselt.", whyAr: "في المبني للمجهول، الفعل بعد werden يكون Partizip II: verschlüsselt لا المصدر verschlüsseln. الخطأ شائع لأن الفعل أصله مشتق بسابقة، فيبدو المصدر كأنه صيغة صحيحة." },
    ],
    relatedRuleComparison: {
      title: "الاشتقاق التقني أم الاشتقاق الاسمي؟",
      content: "الاشتقاق الاسمي (b2-06) يحوّل جملاً كاملة إلى كتل اسمية: «weil die Bedingungen verbessert werden» → «die Verbesserung der Bedingungen». أما الاشتقاق التقني فيعمل داخل الكلمة نفسها: digital → die Digitalisierung، sicher → die Cybersicherheit. الأول أسلوبي يخصّ بناء الجملة، والثاني معجمي يخصّ توليد المصطلح. تجتمعان في التقرير التقني: «Die Automatisierung der Produktion» = اشتقاق تقني (Automatisierung) + اشتقاق اسمي (الكتلة الاسمية).",
    },
  },
  {
    id: "t2",
    titleAr: "الروابط الاستدراكية في النقاش التقني",
    titleDe: "Konzessive Konnektoren im Fachdiskurs: obwohl, dennoch, zwar ... aber",
    explanationAr:
      "الاستدراك (Konzession) هو العلاقة التي تعبّر عن مفارقة: نتيجة تحدث رغم سبب يعاكسها. وهو الرابط المنطقي الأساسي في أي نقاش تقني متوازن: «التقنية مفيدة، ومع ذلك لها مخاطر». للألمانية ثلاث طبقات من أدوات الاستدراك، تختلف في التركيب النحوي لا في درجة الرسمية وحدها.\n\nالطبقة الأولى: الجملة الثانوية مع «obwohl / obgleich / obschon» (رغم أن) — الفعل يذهب إلى النهاية: «Obwohl die Software teuer ist, kaufen viele Firmen sie» (رغم أن البرنامج غالٍ، تشتريه شركات كثيرة). و«wenngleich» و«auch wenn» أقرب إلى الأسلوب المكتوب الرصين، و«auch wenn» تفيد «حتى لو» بمعنى افتراضي أوسع. الطبقة الثانية: الظروف الرابطة «trotzdem / dennoch / gleichwohl / nichtsdestotrotz» (ومع ذلك) — تشغل المركز الأول فيأتي الفعل مباشرة بعدها: «Die Software ist teuer. Trotzdem kaufen viele Firmen sie». والفرق بين «trotzdem» و«dennoch» فرق أسلوبي دقيق: dennoch أكثر رسمية في التقارير، وtrotzdem شائع في الكلام والكتابة العملية. الطبقة الثالثة: التركيب المزدوج «zwar ... aber» (صحيح أن ... لكن) الذي يوزّع الاعتراف والاعتراض: «Zwar senkt die Automatisierung die Kosten, aber sie gefährdet Arbeitsplätze» (صحيح أن الأتمتة تخفض التكاليف، لكنها تهدد الوظائف).\n\nومن الأدوات المفيدة في النقاش التقني «einerseits ... andererseits» (من جهة ... من جهة أخرى) لعرض وجهي المسألة دون حكم مسبق، و«im Gegensatz dazu» (على النقيض) للمقارنة بين تقنيتين، و«allerdings» (غير أن) للاستدراك الخفيف داخل الجملة: «Das System ist schnell; allerdings ist es teuer». ويجب الانتباه إلى أن «aber» رابط متساوٍ لا يغيّر ترتيب الكلمات، بينما «obwohl» جملة ثانوية تدفع الفعل إلى النهاية، و«trotzdem» ظرف رابط يحتاج الفعل في المركز الثاني.\n\n",
    whyAr:
      "لماذا يُعدّ الاستدراك مهارة تفكير قبل أن يكون مهارة نحو؟ لأن النقاش التقني الجاد لا يقوم على «التقنية جيدة» أو «التقنية سيئة»، بل على الموازنة: «التقنية تحقق كذا، لكن ...». من يملك أدوات الاستدراك يستطيع أن يعترف بفائدة الخصم ثم يبني اعتراضه، فيبدو كلامه منصفاً لا متحيزاً. وهذا هو الفرق بين رأي وموقف مدعوم. كما أن الأدوات مختلفة التركيب: من يخطئ بين «obwohl» (فعل في النهاية) و«trotzdem» (فعل ثانياً) يكتب جملة يفهمها القارئ لكنها تبدو غير منضبطة، وهو ما يُضعف المصداقية في تقرير أو امتحان.",
    table: {
      title: "أدوات الاستدراك وموضع الفعل",
      columns: ["الأداة", "المعنى", "موضع الفعل", "مثال"],
      rows: [
        { label: "obwohl", cells: ["رغم أن", "في النهاية (ثانوية)", "Obwohl es teuer ist, kaufen wir es."] },
        { label: "trotzdem", cells: ["ومع ذلك", "ثانياً بعدها (ظرف)", "Es ist teuer. Trotzdem kaufen wir es."] },
        { label: "dennoch", cells: ["ومع ذلك (رسمي)", "ثانياً بعدها", "Es ist teuer. Dennoch kaufen wir es."] },
        { label: "zwar ... aber", cells: ["صحيح أن ... لكن", "aber لا يغيّر الترتيب", "Zwar ist es teuer, aber wir kaufen es."] },
        { label: "allerdings", cells: ["غير أن", "ثانياً بعدها", "Es ist schnell; allerdings ist es teuer."] },
        { label: "einerseits ... andererseits", cells: ["من جهة ... من جهة أخرى", "الفعل ثانياً بعد كل منهما", "Einerseits spart es Zeit, andererseits kostet es Geld."] },
      ],
    },
    examples: [
      { de: "Obwohl die Software teuer ist, kaufen viele Firmen sie.", ar: "رغم أن البرنامج غالٍ، تشتريه شركات كثيرة." },
      { de: "Die Automatisierung senkt die Kosten. Dennoch verliert man Arbeitsplätze.", ar: "الأتمتة تخفض التكاليف. ومع ذلك تُفقد وظائف." },
      { de: "Zwar bietet KI viele Chancen, aber sie birgt auch Risiken.", ar: "صحيح أن الذكاء الاصطناعي يقدم فرصاً كثيرة، لكنه ينطوي على مخاطر أيضاً." },
      { de: "Einerseits spart die Digitalisierung Zeit, andererseits erhöht sie den Druck.", ar: "من جهة، توفر الرقمنة الوقت؛ ومن جهة أخرى، تزيد الضغط." },
      { de: "Das System ist schnell; allerdings ist es teuer.", ar: "النظام سريع؛ غير أنه غالٍ." },
      { de: "Auch wenn die Daten anonymisiert sind, bleibt ein Restrisiko.", ar: "حتى لو كانت البيانات مجهولة الهوية، تبقى مخاطرة متبقية." },
      { de: "Im Gegensatz dazu arbeitet das alte System ohne Netzwerk.", ar: "على النقيض، يعمل النظام القديم دون شبكة." },
    ],
    comparisonWithArabic:
      "العربية تمتلك ترسانة استدراكية غنية: «رغم أن»، «ومع ذلك»، «صحيح أن ... لكن»، «من جهة ... من جهة أخرى»، «غير أن»، وهي مقابلات تقريبية جيدة للأدوات الألمانية. لكن الألمانية تفرض على كل أداة موقعاً نحوياً محدداً: «obwohl» تُدخل جملة ثانوية بفعل في النهاية، و«trotzdem» ظرف يليه الفعل مباشرة، و«aber» رابط متساوٍ لا يحرّك شيئاً. العربية لا تعرف هذا التمييز الموضعي بالشكل نفسه، لذا يميل المتعلم العربي إلى وضع الفعل في موضعه الطبيعي بعد «trotzdem» فيقول «trotzdem wir kaufen» بدل «trotzdem kaufen wir». القاعدة العملية: بعد الظرف الرابط يأتي الفعل ثم الفاعل، وبعد الجملة الثانوية يأتي الفعل في النهاية.",
    eselsbruecke:
      "ثلاث طبقات: «obwohl» تدفع الفعل إلى النهاية، و«trotzdem/dennoch» تجذب الفعل إلى المركز الثاني، و«aber» لا تحرّك شيئاً. و«zwar» تفتح الاعتراف وتنتظر «aber».",
    commonMistakes: [
      { wrong: "Trotzdem die Software teuer ist, kaufen wir sie.", right: "Obwohl die Software teuer ist, kaufen wir sie.", whyAr: "«trotzdem» ظرف رابط لا يُدخل جملة ثانوية. الصحيح إما «Obwohl die Software teuer ist, …» أو «Die Software ist teuer. Trotzdem kaufen wir sie». الخلط بين الطبقتين هو أشيع خطأ في هذا الباب." },
      { wrong: "Zwar ist es teuer, sondern wir kaufen es.", right: "Zwar ist es teuer, aber wir kaufen es.", whyAr: "«sondern» تُستخدم بعد نفي لتصحيح بديل («nicht X, sondern Y»)، ولا تصلح للاستدراك الإيجابي. الاستدراك مع «zwar» يكون بـ«aber»." },
      { wrong: "Obwohl es teuer ist, aber wir kaufen es.", right: "Obwohl es teuer ist, kaufen wir es.", whyAr: "لا تُجمع «obwohl» مع «aber» في الجملة نفسها: كلتاهما تعبّر عن الاستدراك، فينتج ازدواج. اختر واحدة: الجملة الثانوية أو التركيب المزدوج «zwar ... aber»." },
    ],
    relatedRuleComparison: {
      title: "الاستدراك أم السبب؟",
      content: "السبب (b2-06) يفسّر لماذا حدث الشيء: «Weil es teuer ist, kaufen wir es nicht». والاستدراك يعترف بالسبب ثم يذكر نتيجة تعاكسه: «Obwohl es teuer ist, kaufen wir es». انتبه إلى أن الأداة تحدد اتجاه الحجة: من يبدأ بـ«weil» يبرّر، ومن يبدأ بـ«obwohl» يوازن. في مناقشة تقنية، الاستدراك هو ما يميّز التحليل عن الدعاية.",
    },
  },
];
