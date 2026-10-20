/**
 * b2-10 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الكتابة الأكاديمية: التأكيد والتلطيف والتحفظ",
      titleDe: "Akademisches Schreiben: betonen, abschwächen, einschränken",
      explanationAr:
        "الكتابة الأكاديمية الألمانية تطلب نبرة وسطى: ادعاء بلا دليل يبدو جرأة، وتلطيف في كل جملة يبدو تردداً. والأدوات ثلاث لا غير: التأكيد (Es ist erwiesen, dass … · zweifellos · eindeutig)، والتلطيف (meiner Ansicht nach · möglicherweise · es scheint)، والتحفظ (in gewissem Maße · unter Umständen · insofern). من أمسك بهذه الثلاث عرف كيف يوازن بين الجرأة والتردد في السطر نفسه.\n\nوالحركة الأكاديمية الثلاثية هي Behauptung – Beleg – Einschränkung: تضع الأطروحة، ثم تسندها بدليل، ثم تحدّ من نطاقها. مثال كامل: «Mehrsprachige Kinder lernen schneller» ادعاء مكشوف؛ «Studien zeigen, dass mehrsprachige Kinder schneller lernen» ادعاء مسنود؛ «In gewissem Maße lernen mehrsprachige Kinder schneller, wenn sie Förderung erhalten» ادعاء مسنود ومحدَّد النطاق. الطالب الذي يقف عند الجملة الأولى يبدو متحمساً لا عالماً، والذي يصل إلى الثالثة يبدو ناضجاً.\n\nوللأفعال الناقصة دور دقيق في التقدير: «Das muss so sein» يقين، و«Das dürfte so sein» ترجيح، و«Das könnte so sein» احتمال، و«Das soll so sein» نقل عن غيرك لا تتبنّاه. والفرق بينها ليس تجميلاً، بل هو مقياس مسؤوليتك عن المعلومة: فمن كتب muss يحلف بصدق الخبر، ومن كتب könnte يترك الباب مفتوحاً. وفي المقابل تُستعمل صيغة Konjunktiv II للتهذيب لا للشك: «Ich würde sagen, dass …» ألطف من «Ich sage, dass …» في المناقشة.\n\nوأما السجل فواضح الحدود: ich denke وich finde مكانهما الحديث، وفي مقال أكاديمي مكانهما meiner Ansicht nach وmeines Erachtens وaus meiner Sicht. ومن أراد إخفاء الفاعل تماماً كتب «Es zeigt sich» و«Es lässt sich sagen» و«Man kann festhalten». والقاعدة الأخيرة عملية: تحفظ واحد لكل ادعاء، لا في كل جملة؛ فمن لطّف كل جملة لم يقل شيئاً، ومن أكّد كل جملة لم يوثّق شيئاً.",
      whyAr:
        "لماذا هذه الثلاثية؟ لأن النص الأكاديمي يحتاج توازناً: الادعاء الحاد بلا دليل يُضعف النص، والتحفظ الزائد يضعفه أيضاً، لأن القارئ يفقد الثقة في وجود رأي أصلاً. وللتوازن وظيفة دفاعية كذلك: من كتب «es ist erwiesen» عليه أن يخبر عن مصدر، ومن كتب «möglicherweise» يحمي نفسه من الاعتراض ويحمي حجّته من السقوط. وفي السياق الألماني تكون هذه الأدوات جزءاً من التقييم نفسه: المصحّح يقرأ التوازن قبل أن يقرأ المحتوى، ويعتبر النصّ الجازم بلا تضييق نصاً غير أكاديمي وإن كان صحيح المعلومة.",
      table: {
        title: "أدوات الأسلوب الأكاديمي",
        columns: ["الوظيفة", "العبارات", "مثال"],
        rows: [
          { label: "تأكيد", cells: ["zweifellos, eindeutig, es ist erwiesen", "Es ist erwiesen, dass Sprache das Denken prägt."] },
          { label: "تلطيف", cells: ["meiner Ansicht nach, möglicherweise, es scheint", "Meiner Ansicht nach ist das ein wichtiger Punkt."] },
          { label: "تحفظ", cells: ["unter Umständen, in gewissem Maße", "In gewissem Maße stimmt das."] },
        ],
      },
      examples: [
        { de: "Es ist erwiesen, dass Sprachenlernen das Gehirn stärkt.", ar: "ثابت أن تعلم اللغات يقوي الدماغ." },
        { de: "Meiner Ansicht nach ist der Austausch unverzichtbar.", ar: "في رأيي التبادل لا غنى عنه." },
        { de: "Möglicherweise spielt auch die Motivation eine Rolle.", ar: "ربما تلعب الحوافز دوراً أيضاً." },
        { de: "In gewissem Maße kann man dem zustimmen.", ar: "إلى حد ما يمكن الموافقة على ذلك." },
        { de: "Zusammenfassend lässt sich sagen, dass B2 ein Meilenstein ist.", ar: "خلاصةً يمكن القول إن B2 علامة فارقة." },
        { de: "Es lässt sich kaum leugnen, dass die Nachfrage weiter steigt.", ar: "لا يمكن إنكار أن الطلب يواصل الارتفاع." },
      ],
      comparisonWithArabic:
        "«ثابت أن» = es ist erwiesen, dass، و«في رأيي» = meiner Ansicht nach، و«إلى حد ما» = in gewissem Maße، و«خلاصة القول» = zusammenfassend lässt sich sagen. والعربية الأكاديمية تملك الأدوات نفسها، لكن توزيعها مختلف: تميل إلى «نرى» و«يمكن القول» كصيغ تلطيف عامة، بينما تفضّل الألمانية صيغاً غير شخصية (es zeigt sich · es lässt sich sagen) تُخفي الفاعل. والتراكيب غير الشخصية هي ما يربح به النص في السجل: «Es lässt sich sagen, dass …» تُقدَّم على «Ich sage, dass …» في كل نصّ مكتوب.",
      eselsbruecke:
        "«ثلاثية الأكاديميا: أكّد (erwiesen)، لطّف (meiner Ansicht)، تحفظ (in gewissem Maße)» — و«Zusammenfassend lässt sich sagen» = خاتمة ذهبية.",
      commonMistakes: [
        { wrong: "أسلوب حاد بلا دليل", right: "لطّف: meiner Ansicht nach, möglicherweise", whyAr: "المفردات الأكاديمية تكره الجزم بلا دليل: «Das ist falsch» لا تصلح في Hausarbeit، ومكانها «Das dürfte problematisch sein» أو «Dem widerspricht die Studie von …». والعلاج ليس التلطيف العشوائي، بل إعلان الدليل أو تصريح الترجيح." },
        { wrong: "تحفظ زائد (vielleicht في كل جملة)", right: "وازن: أكّد المدعوم ولطّف الباقي", whyAr: "التحفظ الزائد يُفرغ النصّ من رأي: من كتب vielleicht في كل جملة لم يقل شيئاً ولم يقنع أحداً. والقاعدة أن يكون التحفظ في مواضع الشك الحقيقية فقط، وأن يبقى في العبارة الواحدة تحفظ واحد لا اثنان متراكبان." },
        { wrong: "ich denke (أقل رسمية) في مقال أكاديمي", right: "meiner Ansicht nach / meines Erachtens", whyAr: "«ich denke» تُقرأ في النص المكتوب الأكاديمي كأسلوب شفهي لا كمقال: مكانها المحاضرة أو الحوار. وفي Hausarbeit تُستبدل بـ meiner Ansicht nach أو meines Erachtens، وكلتاهما تُخفي «أنا» خلف صيغة اصطلاحية متوقعة." },
      ],
      relatedRuleComparison: {
        title: "Erörterung أم Hausarbeit؟",
        content: "Erörterung = مقال رأي (رأي + حجج). Hausarbeit = بحث أكاديمي (منهجية + مصادر + استشهاد). كلاهما بأسلوب رسمي — لكن البحث أعمق ببنية: Einleitung, Hauptteil, Schluss + Literaturverzeichnis.",
      },
    },
    {
      id: "t-praesentation",
      titleAr: "عرض أكاديمي (Präsentation): بناء المحاضرة وعبارات الانتقال",
      titleDe: "Die Präsentation: Aufbau eines Vortrags",
      explanationAr:
        "العرض الأكاديمي في الجامعة الألمانية له بناء ثابت يتوقعه الأستاذ والطلاب: مقدمة تعرض الموضوع وسؤال البحث، ثم عرض للمحاور الرئيسية بترتيب واضح، ثم خلاصة وشكر على الحضور. عبارات الانتقال هي ما يربط هذه الأجزاء: **Zunächst** للبداية، **Anschließend** أو **Danach** للانتقال إلى المحور التالي، **Zum Schluss** للخاتمة. من دون هذه الإشارات يبدو العرض سلسلة معلومات متفرقة، مهما كانت المادة قوية.\n\nفي المقدمة يقدّم المتحدث نفسه أو موضوعه بعبارة مثل **Ich möchte heute über … sprechen**، ثم يعرض **Gliederung** العرض أي خطة المحاور. وفي الخاتمة يلخص **Zusammenfassend** النتيجة الرئيسية ثم يفتح باب الأسئلة بعبارة **Haben Sie Fragen?**. ومن المهم أن يكون الكلام كاملاً وليس مختصراً إلى كلمات مفردة على الشرائح، لأن العرض الشفهي يحتاج جملاً تربط الفكرة بما قبلها.\n\nوللانتقال داخل المحور نفسه أدوات ألطف من العبارات الكبرى: Wie Sie sehen لإحالة إلى شريحة، Ein Beispiel dafür ist il لربط مثال، Das bedeutet für die Praxis لنقل الفكرة إلى التطبيق. ومن أتقن هذه الثلاثة تجنّب القفز المفاجئ بين المعلومات، وهو أول ما يلاحظه المستمع العربي في العرض الألماني.\n\nوأخيراً توزيع الوقت جزء من البناء: المقدمة والخاتمة تحتاجان دقائق قليلة، والجسد يحمل معظم العرض. ومن أفرط في المقدمة ولم يبقِ وقتاً للخاتمة خرج بلا نتيجة معلنة، وهذا يخصم من العرض أكثر مما تخصمه أخطاء لغوية.",
      whyAr:
        "لماذا تهم هذه الصيغة في الجامعة؟ لأن الطالب في الألمانية يُقيَّم على وضوح البنية قبل عمق المعلومة أحياناً. عرض بمقدمة واضحة وخطة معلنة يسمح للمستمع بمتابعة الأفكار وتوقّع ما سيأتي، أما العرض المفكك فيُفهم على أنه غير مرتب، حتى لو كان المحتوى جيداً. لذلك تعلّم الألمانية الأكاديمية يبدأ من هذه الأدوات الشكلية والتعبيرات الجاهزة، لا من حفظ المصطلحات وحدها.",
      table: {
        title: "بنية العرض وعبارات الانتقال",
        columns: ["الجزء", "عبارة مفيدة", "وظيفتها"],
        rows: [
          { label: "المقدمة", cells: ["Ich möchte heute über … sprechen.", "تعريف الموضوع"] },
          { label: "خطة العرض", cells: ["Zunächst … Anschließend … Zum Schluss …", "تنظيم المحاور"] },
          { label: "الخاتمة", cells: ["Zusammenfassend lässt sich sagen, dass …", "تلخيص النتيجة"] },
        ],
      },
      examples: [
        { de: "Ich möchte heute über Mülltrennung in Deutschland sprechen.", ar: "أودّ اليوم أن أتحدث عن فرز النفايات في ألمانيا." },
        { de: "Zunächst erkläre ich das Problem, anschließend zeige ich Lösungen.", ar: "أولاً أشرح المشكلة، ثم أعرض الحلول." },
        { de: "Zum Schluss fasse ich die wichtigsten Ergebnisse zusammen.", ar: "وفي الختام ألخّص أهم النتائج." },
        { de: "Die Gliederung meines Vortrags besteht aus drei Teilen.", ar: "يتكون هيكل عرضي من ثلاثة أجزاء." },
        { de: "Wie Sie sehen, sind die Zahlen seit 2015 deutlich gestiegen.", ar: "كما ترون، ارتفعت الأرقام بوضوح منذ 2015." },
        { de: "Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?", ar: "شكراً لانتباهكم. هل لديكم أسئلة؟" },
      ],
      comparisonWithArabic:
        "في العربية يمكن أن ينتقل المتحدث من فكرة إلى أخرى بجملة واحدة مرتجلة، أو بعبارات مثل «ومن ناحية أخرى» و«على صعيد آخر». الألمانية الأكاديمية أكثر تنظيماً في هذا الباب: لكل جزء من العرض عبارة متوقعة، والمستمع ينتظرها. كذلك يختلف الترتيب، إذ تضع العربية الخلاصة أحياناً قبل الأدلة، بينما يُفضَّل في العرض الألماني أن تأتي الخلاصة بعد عرض المحاور بوضوح، مع نظرة إلى ما يلي.",
      eselsbruecke:
        "Zunächst – Anschließend – Zum Schluss: ثلاث كلمات تمشي معك من أول العرض إلى آخره، كأنها خريطة الطريق.",
      commonMistakes: [
        {
          wrong: "Ich sage jetzt über Müll. (بدون مقدمة ولا خطة)",
          right: "Ich möchte heute über Mülltrennung sprechen. Zunächst erkläre ich das Problem.",
          whyAr: "لماذا؟ لأن المستمع لا يعرف بعد موضوعك ولا خطتك، فيبدأ العرض وسط الفكرة. والعرض الأكاديمي في الجامعة الألمانية يبدأ بثلاث خطوات متوقعة: تحية قصيرة، ثم تسمية الموضوع، ثم إعلان البنية (Zunächst … anschließend … zum Schluss). وأضف إلى ذلك خطأ الفعل: sagen يأخذ حرف جر آخر (etwas über jemanden sagen نادر في هذا السياق)، والصيغة السليمة «Ich möchte heute über Mülltrennung sprechen» أو «Ich spreche heute von …».",
          classification: "contextual-alternative",
        },
        {
          wrong: "Danach ich zeige Lösungen.",
          right: "Danach zeige ich Lösungen.",
          whyAr: "لماذا؟ لأن بعد «Danach» يحتل الفعل المرتبة الثانية مباشرة: Danach zeige ich … والخطأ يجيء من ترتيب الجملة العربية، حيث يحل الضمير محل الفاعل قبل الفعل. وفي العرض يكون أثر الخطأ مضاعفاً: المستمع ينتظر الخبر ولا يجده، فيفقد خيط المحور الذي أعلنته للتوّ.",
          classification: "error",
        },
        {
          wrong: "Danke. Ende. (في نهاية العرض)",
          right: "Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?",
          whyAr: "الخاتمة المقتضبة تبدو جافة وتقطع التواصل مع الجمهور. الصيغة الكاملة تشكر الحضور وتفتح باب الحوار، وهو جزء متوقع من العرض الأكاديمي.",
          classification: "pedagogical-simplification",
        },
      ],
      relatedRuleComparison: {
        title: "Zunächst … dann … مقابل Erstens … Zweitens …",
        content:
          "تستعمل الألمانية الأكاديمية أيضاً الترقيم الصريح: Erstens، Zweitens، Drittens، وهذا يناسب العروض التي تعدد نقاطاً متوازية. أما Zunächst … Anschließend فيناسب السرد المتسلسل، أي خطوات تتابع بعضها بعضاً. قاعدة عملية: استعمل الترقيم حين تكون النقاط متساوية في الأهمية، واستعمل الانتقال الزمني حين تكون الخطوات مرتبة في تسلسل.",
      },
    },
    {
      id: "t2",
      titleAr: "الأسلوب الاسمي (Nominalstil) في الكتابة الرسمية",
      titleDe: "Nominalstil in der formellen Schriftsprache",
      explanationAr:
        "الأسلوب الاسمي يحوّل الجملة الفعلية إلى كتلة اسمية: «weil man spart» تصبح «wegen der Einsparung»، و«wenn man ankommt» تصبح «bei der Ankunft»، و«nachdem man die Unterlagen erhalten hat» تصبح «nach Erhalt der Unterlagen». والمكسب ضغطٌ في الكلمات ورفعٌ في السجل معاً: الجملة الرسمية تحمل المعلومة نفسها بنصف عدد الكلمات وبمسافة مهنية أوضح.\n\nوالتحويل يتبع ثلاث قواعد لا غير. الأولى: كل أداة ربط لها حرف جر يقابلها (weil → wegen · wenn → bei · nachdem → nach · obwohl → trotz · damit → zu). والثانية: الاسم المشتق يحمل معنى الفعل بلاحقته (sparen → die Einsparung · ankommen → die Ankunft · erhalten → der Erhalt). والثالثة: الحالة الصحيحة بعد الحرف هي التي تحسم الصواب — wegen وtrotz مع Genitiv، وnach وbei مع Dativ — وهي موضع أكثر الأخطاء.\n\nوللأسلوب الاسمي ثمنه، والكتابة المهنية تعرف كيف تدفعه: سلسلة المضافات (die Verlängerung der Frist der Bewerbung der Studenten) تُفقد الجملة فاعلها وتُرهق القارئ. والقاعدة أن يبقى في الفقرة فعل مصرّف واحد يحمل الحركة، وأن يُفتح المضاف إليه الواحد بلا تراكم يزيد على اسمين.\n\nوليس الأسلوب الاسمي مطلوباً في كل مكان: في الرسالة الشخصية والحديث يبدو متصنّعاً، وفي الإعلان يُقرأ كشكل قانوني. أما في المراسلة الرسمية والبروتوكول والتقرير فهو اللغة المتوقعة، ومن كتبها بجمل فعلية سليمة بدا أقل خبرة من كاتبٍ جملُه أسماء.",
      whyAr:
        "لماذا؟ لأن الرسائل الرسمية والعقود والبروتوكولات تميل إلى الأسلوب الاسمي الموجز، ومن يكتفي بجمل الفعل يبدو نصه أطول وأقل رسمية وإن كان صحيحاً. والفائدة الثانية دلالية: الاسم يمكن تسميته ثم الإحالة إليه (die Verlängerung … diese Verlängerung) بلا إعادة شرح، وهذا ما يمنح النص الرسمي ترابطاً. والثالثة عملية للامتحان: كتابة رسالة رسمية بالأسلوب الاسمي تُظهر تمكّناً من مستوى B2 أكثر مما تُظهره جمل فعلية بسيطة صحيحة.",
      table: {
        title: "من الأسلوب الفعلي إلى الأسلوب الاسمي",
        columns: ["الأسلوب الفعلي", "الأسلوب الاسمي", "بالعربية"],
        rows: [
          { label: "weil man spart", cells: ["wegen der Einsparung", "بسبب التوفير"] },
          { label: "wenn man ankommt", cells: ["bei der Ankunft", "عند الوصول"] },
          { label: "nachdem er geprüft hat", cells: ["nach der Prüfung", "بعد الفحص"] },
          { label: "damit man es versteht", cells: ["zum Verständnis", "من أجل الفهم"] },
          { label: "obwohl es regnet", cells: ["trotz des Regens", "رغم المطر"] },
        ],
      },
      examples: [
        { de: "Nach der Ankunft melden Sie sich bitte.", ar: "بعد الوصول يرجى تسجيل حضوركم (بدل wenn Sie ankommen)." }, { de: "Die Einsparung der Kosten ist unser Ziel.", ar: "توفير التكاليف هدفنا." }, { de: "Nach Erhalt Ihrer Unterlagen melden wir uns.", ar: "بعد استلام أوراقكم سنتواصل معكم." }, { de: "Wegen der Verspätung des Zuges kam sie zu spät.", ar: "بسبب تأخر القطار وصلت متأخرة." }, { de: "Zur Klärung der Frage brauchen wir mehr Zeit.", ar: "لتوضيح المسألة نحتاج وقتاً أكثر." },
        { de: "Bei der Anmeldung müssen Sie Ihren Ausweis vorlegen.", ar: "عند التسجيل يجب أن تقدّم بطاقتك." },
      ],
      comparisonWithArabic: "العربية تفعل الشيء نفسه بالمصدر: نقول «بعد الوصول» لا «بعد أن وصل»، و«بسبب التأخر» لا «لأنه تأخر»، و«عند التسجيل» لا «عندما نسجّل». فالمهارة منقولة أصلاً من لغتك، وما ينقصك هو معرفة أي حرف جر يرافق كل اسم في الألمانية وأي حالة يطلبها. والفرق الدقيق أن العربية تُخفف الحالة بالسياق فلا تفرض علامة صريحة، بينما الألمانية تطالب بعلامة إعرابية ظاهرة بعد wegen وtrotz وnach، وهو ما لا تسامح فيه.",
      eselsbruecke: "لكل أداة ربط نظير من حروف الجر: weil تقابل wegen، وwenn تقابل bei، وnachdem تقابل nach، وobwohl تقابل trotz. حوّل الفعل إلى اسم ثم ضع حرف الجر المناسب وأعرب ما بعده.",
      commonMistakes: [
        { wrong: "wegen dem Regen", right: "wegen des Regens", whyAr: "wegen حرف جر يلزم Genitiv في اللغة المكتوبة الفصيحة، وإن شاع Dativ في الكلام اليومي." },
        { wrong: "nach die Prüfung", right: "nach der Prüfung", whyAr: "حرف الجر nach يلزم Dativ دائماً: nach der Prüfung · nach dem Studium · nach der Ankunft. والخطأ ينتج من قياس خاطئ على wegen الذي يطلب Genitiv مجاوراً له؛ والحالة تُحفظ مع الحرف لا مع الاسم." },
        { wrong: "Trotz es regnet, gehe ich.", right: "Trotz des Regens gehe ich.", whyAr: "trotz حرف جر يُتبع باسم مجرور لا بجملة؛ ومع الجملة تُستعمل obwohl." },
      ],
      relatedRuleComparison: {
        title: "أسلوب اسمي أم فعلي؟",
        content: "الأسلوب الاسمي مكثّف ورسمي، وهو شائع في الرسائل الإدارية والتقارير. لكن الإفراط فيه يجعل النص ثقيلاً وبارداً. القاعدة العملية: استعمله في المقدمات والصيغ الجاهزة، وعُد إلى الأسلوب الفعلي في الشرح والتفصيل.",
      },
    },
    {
      id: "t3",
      titleAr: "خريطة قواعد B2 كاملة — تسع وحدات في جدول واحد",
      titleDe: "Die B2-Grammatik im Überblick",
      explanationAr:
        "هذه ليست قاعدة جديدة، بل خريطة الطريق التي قطعتها. كل سطر في الجدول التالي يقابل وحدةً درستَها في B2: من نقل الكلام (الوحدة 1) إلى التراكيب الاسمية-الفعلية (الوحدة 9). اقرأ العمود الأوسط، وغطِّ عمود المثال، ثم حاول توليد مثالك أنت. ما تعجز عن توليده هو بالضبط ما يجب أن تعود إليه قبل الامتحان.\n\nوالخريطة ليست فهرساً بل شبكة: هذه القواعد لا تعمل فرادى في النص الحقيقي. الجملة الرسمية الواحدة قد تجمع النقل غير المباشر (Konjunktiv I) والصفة المشتقة (der eingereichte Antrag) وبديل المجهول (lässt sich prüfen) في سطر واحد. ومن ثمّ فإن المراجعة الفعّالة تجمع ثلاث قواعد في جملة واحدة، لا ثلاث جمل منفصلة.\n\nواقرأ الجدول من الأسفل إلى الأعلى مرّة، ومن الأعلى إلى الأسفل مرّة أخرى: في الاتجاه الأول ترى كيف يُبنى النص من الكلمة إلى الجملة، وفي الثاني ترى كيف يُفكَّك النص من الجملة إلى الوحدة التي تحمل الصعوبة. ومن وجد نفسه يتوقف عند سطر معيّن مرتين فليعلم أن ذلك السطر هو أولوية مراجعته، لا أولويات الفصل كلّه.\n\nوأخيراً: الرقم في العمود الأوسط ليس صفة للوحدة بل موضعها في المسار، فلا شيء يمنع أن تُستدعى قاعدة من الوحدة 10 في جملة تحمل بنية من الوحدة 2. والمهارة النهائية ليست معرفة القواعد العشر، بل القدرة على اختيار القاعدة التي تحتاجها الجملة اللي أمامك الآن.",
      whyAr:
        "لماذا؟ لأن النصوص الحقيقية تجمع عادةً أكثر من قاعدة في الجملة الواحدة. من درس القواعد متفرقة يعرفها فرادى ولا يستحضرها مجتمعةً؛ ووظيفة هذه الخريطة أن تحوّل تسع معارف منفصلة إلى شبكة واحدة يمكن استدعاؤها دفعةً واحدة. ولذلك تُقرأ الخريطة في النهاية لا في البداية: موضعها بعد أن صار لكل قاعدة مثال محفوظ في الذاكرة، فتعمل كمفتاح استرجاع لا كدرس جديد. وأضف إليها اختباراً ذاتياً: خذ جملة من نص دراسي، وسمِّ القاعدتين اللتين تعملان فيها، فإن عجزت عن التسمية فالسطران هما أولوية مراجعتك.",
      table: {
        title: "قواعد B2 التسع — الوحدة والقاعدة والمثال",
        columns: ["الوحدة", "القاعدة", "مثال"],
        rows: [
          { label: "1 — العلوم", cells: ["Konjunktiv I لنقل الكلام", "Er sagt, er habe keine Zeit."] },
          { label: "1 — العلوم", cells: ["الأفعال الناقصة الذاتية (التخمين)", "Das dürfte richtig sein."] },
          { label: "2 — الاقتصاد", cells: ["Zustandspassiv والمجهول مع الناقصة", "Die Entscheidung muss getroffen werden."] },
          { label: "3 — القانون", cells: ["الموصول مع حرف جر + بدائل المجهول", "Das Problem lässt sich leicht lösen."] },
          { label: "4 — الأدب والإعلام", cells: ["Partizip I / II صفةً", "Die steigenden Preise beunruhigen uns."] },
          { label: "5 — علم النفس", cells: ["روابط متقدمة + جسيمات تداولية", "Man lernt, indem man täglich übt."] },
          { label: "6 — المسار المهني", cells: ["الاشتقاق الاسمي (Nominalisierung)", "Beim Lesen erweitert man den Wortschatz."] },
          { label: "7 — الفلسفة", cells: ["Futur II للفعل المنجَز مستقبلاً", "Bis 2030 werde ich B2 erreicht haben."] },
          { label: "8 — اللغات", cells: ["الأفعال مع حروف الجر الثابتة", "Ich interessiere mich für Sprachen."] },
          { label: "9 — سوق العمل", cells: ["التراكيب الاسمية-الفعلية (FVG)", "Wir müssen eine Entscheidung treffen."] },
        ],
      },
      examples: [
        { de: "Die Universität teilte mit, die Bewerbungsfrist werde verlängert.", ar: "أفادت الجامعة بأن مهلة التقديم ستُمدَّد. (نقل الكلام — الوحدة 1)" },
        { de: "Der eingereichte Antrag muss noch geprüft werden.", ar: "الطلب المقدَّم لا يزال يجب فحصه. (صفة مشتقة + مجهول مع ناقص — الوحدتان 4 و2)" },
        { de: "Das Seminar, an dem ich teilnehme, beginnt im Oktober.", ar: "الندوة التي أشارك فيها تبدأ في أكتوبر. (موصول مع حرف جر — الوحدة 3)" },
        { de: "Bis zum Semesterende werde ich alle Hausarbeiten abgegeben haben.", ar: "بحلول نهاية الفصل سأكون قد سلّمت كل الأبحاث. (Futur II — الوحدة 7)" },
        { de: "Man verbessert sein Deutsch, indem man beim Lesen Notizen macht.", ar: "يحسّن المرء ألمانيته بأن يدوّن ملاحظات أثناء القراءة. (رابط + اشتقاق اسمي — الوحدتان 5 و6)" },
        { de: "Wegen der Verlängerung der Frist lässt sich die Bewerbung noch einreichen.", ar: "بسبب تمديد المهلة لا يزال بالإمكان تقديم الطلب. (أسلوب اسمي + بديل المجهول — الوحدتان 10 و3)" },
      ],
      comparisonWithArabic:
        "العربية أيضاً تملك هذه الطبقات مجتمعةً: تقول «أفاد بأن المهلة ستُمدَّد» (نقل)، «الطلب المقدَّم» (اسم مفعول صفةً)، «يمكن حلّه» (بديل المجهول)، «بسبب التمديد» (أسلوب اسمي). فالفرق ليس في وجود الأدوات بل في إعرابها: الألمانية تطالبك بحالةٍ صريحة (Genitiv بعد wegen، Dativ بعد an) حيث تكتفي العربية بالسياق.",
      eselsbruecke:
        "اختصار الوحدات التسع في جملة واحدة: «قال إنّه سيُنجَز، والمنجَز يمكن فحصه بأن نراجعه، وبحلول الموعد نكون قد اتخذنا القرار.» احفظ هذه الجملة العربية: كل مقطع فيها يقابل وحدةً من B2 بالترتيب.",
      commonMistakes: [
        { wrong: "Er sagt, er hat keine Zeit.", right: "Er sagt, er habe keine Zeit.", whyAr: "في النقل الرسمي المكتوب يُستعمل Konjunktiv I لا الإخبار؛ والإخبار يجعل الجملة رأياً للكاتب لا نقلاً عن غيره (الوحدة 1)." },
        { wrong: "Das Problem kann leicht gelöst lassen.", right: "Das Problem lässt sich leicht lösen.", whyAr: "بديل المجهول هو lassen + sich + مصدر بمعنى «يمكن حلّه»، أما «gelöst lassen» فليست بنية صحيحة (الوحدة 3)." },
        { wrong: "Bis 2030 werde ich B2 erreichen haben.", right: "Bis 2030 werde ich B2 erreicht haben.", whyAr: "Futur II يبنى بالتصريف الثالث لا بالمصدر: werde + Partizip II + haben/sein (الوحدة 7)." },
      ],
      relatedRuleComparison: {
        title: "متى أستعمل أي طبقة؟",
        content: "القاعدة العملية للامتحان: النقل (Konjunktiv I) لعرض آراء الغير، والمجهول وبدائله لإخفاء الفاعل في النص العلمي، والصفات المشتقة والأسلوب الاسمي لضغط المعلومة، وFutur II للتخطيط، والروابط لبناء الحجّة. من يدمج هذه الطبقات بدقة في نص واحد يكتب نصاً أكثر تماسكاً ورسمية؛ ومن يكتفي بالجمل البسيطة يكتب بصحة لكن بأسلوب أقل تنوعاً.",
      },
    },
  ];
