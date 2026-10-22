/**
 * b2-06 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الاشتقاق الاسمي (Nominalisierung)",
      titleDe: "Die Nominalisierung: lesen → das Lesen",
      explanationAr:
        "الاشتقاق الاسمي هو تحويل الفعل إلى اسم: lesen → das Lesen، arbeiten → die Arbeit، verbessern → die Verbesserung. والاسم الناتج يحمل معنى الفعل، لكنه يتصرّف كاسم كامل: يأخذ أداة تعريف وحرف جر وصفة، ويأتي متمّمه في المضاف إليه: die Verbesserung der Arbeitsbedingungen. وهذا التحويل هو أهم مفتاح لفهم الأسلوب الاسمي الرسمي.\n\nوأهم صيغه العملية ثلاث: (1) المصدر بأداة التعريف das Lesen، ويُستعمل مع حروف الجر المختصرة beim/ans/zum/vom: beim Lesen، zum Nachdenken؛ و(2) الاسم المشتق بلاحقة: die Verbesserung، die Möglichkeit، die Zusammenarbeit؛ و(3) الجملة الاسمية بدل الجملة الثانوية: بدل «weil die Bedingungen verbessert werden» تكتب «die Verbesserung der Bedingungen». وكل صيغة منها أشيع في سجل لغوي معين: الأولى في الكلام، والثانية في التقارير، والثالثة في العقود والقوانين.\n\nولماذا يفضّل الأسلوب الرسمي الأسماء؟ لأنها تسمح بالضغط: جملتان كاملتان تصبحان كتلة اسمية واحدة، فتتسع الجملة لأفكار مترابطة وتُضبط علاقاتها بحرف جر واحد (Verbesserung der Bedingungen = تحسين ظروف العمل). ومن هنا كثافة الأسماء في البيانات والدراسات؛ فمن قرأ «die deutliche Verbesserung der Bedingungen in den Betrieben» فهم جملة كانت ستُبنى في الكلام بأربع كلمات إضافية.\n\nوللأسلوب ثمنه: إذا حوّل المتعلّم كل فعل إلى اسم، تراكمت المضافات وضاع الفاعل، فصارت الجملة ثقيلة غامضة (die Verbesserung der Bedingungen der Beschäftigten im Betrieb). والقاعدة العملية أن يوازن النصّ: كتلة اسمية طويلة + جملة فعلية قصيرة تفكّ الضغط وتُظهر من يفعل ماذا.\n\n",
      whyAr:
        "لماذا يُستخدم الاشتقاق؟ لأن النصوص الرسمية (تقارير، عقود، أخبار، بيانات أكاديمية) تحب الأسماء: الاسم يثبّت المعلومة ويعطيها «وزناً»، ويسمح بالإشارة إليها لاحقاً (diese Verbesserung) بلا إعادة شرح. ولذلك يكون النص الرسمي مكثّفاً: عشر كلمات تحمل ما تحمله جملة كاملة في الكلام اليومي. والمكسب العملي للمتعلّم مزدوج: يفكّك النص في القراءة (in den Betrieben → «في المصانع» متمّم للمضاف إليه)، ويكتب كتلاً اسمية سليمة في التقرير. والخطأ المزدوج: حرف صغير في المصدر (das lesen)، وإسقاط المضاف إليه فيقع المعنى معلّقاً.",
      table: {
        title: "تحويل الأفعال إلى أسماء",
        columns: ["الفعل", "الاسم", "مثال رسمي"],
        rows: [
          { label: "lesen", cells: ["das Lesen", "Beim Lesen lernt man."] },
          { label: "arbeiten", cells: ["die Arbeit", "Die Arbeit ist wichtig."] },
          { label: "verbessern", cells: ["die Verbesserung", "Die Verbesserung der Bedingungen."] },
          { label: "nachdenken", cells: ["das Nachdenken", "Zum Nachdenken braucht man Zeit."] },
          { label: "schreiben", cells: ["das Schreiben", "Das Schreiben ist anstrengend."] },
        ],
      },
      examples: [
        { de: "Beim Lesen erweitert man den Wortschatz.", ar: "بالقراءة يوسع المرء مفرداته." },
        { de: "Zum Nachdenken braucht man Ruhe.", ar: "للتفكير يحتاج المرء هدوءاً." },
        { de: "Die Verbesserung der Arbeitsbedingungen ist wichtig.", ar: "تحسين ظروف العمل مهم." },
        { de: "Nach dem Schreiben sollte man den Text lesen.", ar: "بعد الكتابة يجب قراءة النص." },
        { de: "Die Zusammenarbeit mit Kollegen ist entscheidend.", ar: "التعاون مع الزملاء حاسم." },
        { de: "Zur Vorbereitung auf das Gespräch gehört eine kurze Recherche.", ar: "من التحضير للمقابلة بحثٌ قصير عن الشركة." },
      ],
      comparisonWithArabic:
        "«بالقراءة يتعلم المرء» = Beim Lesen lernt man — قريب جداً من «بـ + المصدر» في العربية. و«تحسين الظروف» = die Verbesserung der Bedingungen، أي مصدر/اسم + مضاف إليه، وهي البنية نفسها في اللغتين. والفرق أن الألمانية تُلزم حرفاً كبيراً في المصدر (das Lesen) وتُفضّل المضاف إليه على von في السجل الرسمي، بينما تقبل العربية علامة المصدر في السياق.",
      eselsbruecke:
        "«الفعل → das + مصدر»: lesen → das Lesen. و«beim = عند + اسم»: beim Lesen = عند القراءة. و«zum = للـ»: zum Nachdenken = للتفكير.",
      commonMistakes: [
        { wrong: "beim lesen (حرف صغير)", right: "beim Lesen (اسم بحرف كبير)", whyAr: "الاسم الألماني يبدأ بحرف كبير: das Lesen لا das lesen. والخطأ أشيع عند المتعلّم العربي لأن لغته لا تكتب حرفاً كبيراً في وسط الجملة، فيُقرأ المصدر في الألمانية كفعل لا كاسم ويضيع التركيب." },
        { wrong: "das Lernen أم lernen؟", right: "اسم → das Lernen. فعل → lernen", whyAr: "المصدر بالأداة das اسم كامل: يقبل الصفة (das schnelle Lesen) وحرف الجر (beim Lesen)، أما الفعل فيُصرَّف مع فاعله. ومن لم يفرّق بينهما كتب جملة تعمل شكلاً وتفشل في المعنى." },
        { wrong: "Die Verbesserung von أم der Bedingungen؟", right: "die Verbesserung der Bedingungen (Genitiv)", whyAr: "المضاف إليه أكثر رسمية وإيجازاً؛ أما von + Dativ فأخف وأشيع في المحادثة وأمام الضمائر (die Verbesserung von ihr). في التقارير اكتب die Verbesserung der Bedingungen." },
      ],
      relatedRuleComparison: {
        title: "عامية أم رسمية؟",
        content: "Wenn man liest, lernt man (عامية) → Beim Lesen lernt man (رسمية). dass die Bedingungen verbessert werden (عامية) → die Verbesserung der Bedingungen (رسمية). الرسمية تحب الأسماء.",
      },
    },
    {
      id: "t2",
      titleAr: "أدوات الربط المتقدمة للسبب والنتيجة",
      titleDe: "Kausale und konsekutive Konnektoren",
      explanationAr: "تتوزّع أدوات السبب على ثلاث درجات من الرسمية. «weil» هي الأكثر شيوعاً في الكلام والكتابة، وتجيب عن سؤال «لماذا؟»، وفعلها في النهاية. و«da» تصلح حين يكون السبب معروفاً للطرفين أو بديهياً، وتتصدّر الجملة عادةً، ولهذا تكثر في الأسلوب الرسمي والتقارير. و«zumal» تضيف سبباً مُرجِّحاً إلى سبب سابق (خاصة أن)، وتصلح للتقوية لا للتفسير الأول.\n\nأما أدوات النتيجة فمنها ما هو ظرف ومنها ما هو ربط. «deshalb / darum / deswegen / daher» ظروف تشغل المركز الأول من الجملة، فيأتي الفعل المصرّف بعدها مباشرة (deshalb bleibe ich). و«sodass» ربط يفتح جملة ثانوية فينتقل الفعل إلى نهايتها. و«so ... dass» يوزّع النتيجة: so يحمل درجة الكمية في الجملة الرئيسية، وdass يفتح الجملة الثانوية التي تصف النتيجة (Es ist so teuer, dass niemand kauft).\n\nوالخطأ الأشيع في هذا الباب هو جمع أداتَي سبب ونتيجة في جملة واحدة: «Weil es regnet, deshalb bleibe ich» غير سليمة لأن الأثر مكرّر. والقاعدة: إما سبب بـ weil/da في جملة ثانوية واحدة لا تتبعها أداة نتيجة، أو نتيجة بـ deshalb في جملة رئيسية لا تتقدّمها weil. ومن أتقن هذه الثنائية Sätze بلا تكرار خرج بأسلوب سليم في أي سجل لغوي.\n\nوالاختيار بين الأدوات مسألة سجل لغوي لا معنى: «denn» تبقى في المكتوب الأقل رسمية لأنها لا تغيّر موضع الفعل، و«da» و«zumal» ترفعان السجل، و«deshalb» الأكثر حياداً في الكتابة الأكاديمية. وأخيراً، تكرار «weil» ثلاث مرات في نصٍّ طويل علامة على فقر أسلوبي: نوع بين da وdenn وdeshalb بحسب الموقع.\n\n",
      whyAr: "لماذا هذا التدرّج؟ لأن تنويع الأدوات يجعل الأسلوب أدقّ وأقرب إلى الكتابة الرسمية، ويُظهر للمستمع أو القارئ ما إذا كان ما سيأتي سبباً أو نتيجة قبل أن يكتمل المعنى: فحين تسمع «da» في أول الجملة تعرف أن سبباً مقدَّماً شرحه معروف، وحين تسمع «deshalb» تعرف أن نتيجة سبق ذكرها جاءت الآن. والاعتماد على «weil» وحده يجعل النص راكداً ويضعف الفهم في الاستماع، لأن كل الجمل تبدو بالشكل نفسه فلا يعرف المستمع أين ينتهي السبب وأين تبتدئ النتيجة.",
      table: {
        title: "أدوات السبب والنتيجة وموضع الفعل",
        columns: ["الأداة", "المعنى", "موضع الفعل", "مثال"],
        rows: [
          { label: "weil", cells: ["لأن (عامة)", "في النهاية", "Ich bleibe, weil es regnet."] },
          { label: "da", cells: ["بما أن (رسمية، سبب معروف)", "في النهاية", "Da es regnet, bleibe ich."] },
          { label: "denn", cells: ["لأن (ربط متساوٍ)", "لا تغيير", "Ich bleibe, denn es regnet."] },
          { label: "deshalb", cells: ["لذلك (نتيجة)", "ثانياً بعده", "Es regnet, deshalb bleibe ich."] },
          { label: "sodass", cells: ["بحيث (نتيجة)", "في النهاية", "Es regnet, sodass ich bleibe."] },
        ],
      },
      examples: [
        { de: "Da die Kosten steigen, müssen wir sparen.", ar: "بما أن التكاليف ترتفع، يجب أن ندخر." }, { de: "Die Nachfrage ist so hoch, dass die Preise steigen.", ar: "الطلب مرتفع لدرجة أن الأسعار ترتفع." }, { de: "Da die Nachfrage gestiegen ist, wurden die Preise erhöht.", ar: "بما أن الطلب ارتفع، رُفعت الأسعار." }, { de: "Die Firma expandiert, denn der Umsatz wächst.", ar: "الشركة تتوسع، لأن المبيعات تنمو." }, { de: "Er sprach so leise, dass ihn niemand verstand.", ar: "تحدث بصوت خافت لدرجة أن أحداً لم يفهمه." },
        { de: "Das Gehalt ist so niedrig, dass viele Bewerber absagen.", ar: "الراتب منخفض إلى حدّ أن كثيراً من المتقدمين يعتذرون." },
      ],
      comparisonWithArabic: "العربية تستخدم «لأن» و«لذلك» في سياقات كثيرة، لكنها تملك أيضاً «بما أن» و«خاصة أن» و«لذا» — وهي المقابلات الدقيقة: «بما أن» = da (سبب معروف يتقدّم الجملة)، «خاصة أن» = zumal (سبب مرجّح يُضاف)، «لذلك/لذا» = deshalb (نتيجة تفتح الجملة)، «بحيث» = sodass (نتيجة في جملة ثانوية). والفرق التركيبي جوهري: العربية لا تنقل الفعل، والألمانية تنقله إلى النهاية بعد weil/da/sodass وتبقيه في المركز الثاني بعد deshalb؛ فمن نقل بنية العربية حرفياً كتب «Weil es regnet, deshalb bleibe ich» وهو تلفيق لا يقبله المدقّق.",
      eselsbruecke: "احفظ ثلاث فئات: ثانوية ترمي الفعل إلى النهاية (weil، da، sodass)، ومتساوية لا تحرّك شيئاً (denn، aber، und)، وظرفية تحتل المرتبة الأولى فيليها الفعل (deshalb، deswegen، daher).",
      commonMistakes: [
        { wrong: "Ich bleibe, denn es regnet draußen stark ist.", right: "Ich bleibe, denn es regnet draußen stark.", whyAr: "بعد denn يأتي الفعل في موضعه كما في الجملة الرئيسية؛ وجود فعل إضافي في آخرها خطأ." },
        { wrong: "Es regnet, deshalb ich bleibe zu Hause.", right: "Es regnet, deshalb bleibe ich zu Hause.", whyAr: "deshalb ظرف رابط يشغل المرتبة الأولى، فيأتي الفعل ثانياً قبل الفاعل." },
        { wrong: "Weil es regnet, deshalb bleibe ich.", right: "Weil es regnet, bleibe ich.", whyAr: "لا يُجمع بين أداة السبب وأداة النتيجة في الجملة نفسها. والألمانية تعتبر الأثر مكرّراً فتصير الجملة غير سليمة مع أنها مفهومة، والصواب أن تختار: إما weil في جملة ثانوية وحدها، أو deshalb في جملة رئيسية وحدها." },
      ],
      relatedRuleComparison: {
        title: "weil أم da؟",
        content: "المعنى متقارب، لكن da تُقدَّم حين يكون السبب معروفاً للطرفين أو بديهياً، وتتصدّر الجملة عادةً وتكثر في اللغة المكتوبة والرسمية. أما weil فهي الجواب الطبيعي عن سؤال warum في الكلام اليومي.",
      },
    },
  ];
