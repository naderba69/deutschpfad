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
        `كل ما دُرِّس في A2 يعود إلى اثني عشر مفتاحاً، ولكلّ مفتاح وحدةٌ علّمته: 1) الماضي التام Perfekt بـ haben/sein، 2) الأفعال الناقصة (sollen · möchten · können)، 3) حروف الجر المتغيّرة التسعة مع تمييز الموقع والوجهة، 4) الماضي البسيط المنتقى war/hatte، 5) الجملة الثانوية بـ dass، 6) es gibt + النصب وضمائر مختارة، 7) المقارنة والتفضيل، 8) أمثلة منتقاة على Dativ، 9) weil / wenn / ob، 10) الضمائر الملكية في Nominativ وAkkusativ وDativ بحسب أمثلة الدرس، 11) الأفعال الانعكاسية (mich / mir)، 12) أدوات الربط (وobwohl توسعةً).

والمفتاح لا يُعرف بأن تسمّيه، بل بأن تتعرّف إلى وظيفته وموضعه في المثال. في الجملة الخبرية الرئيسية يأتي الفعل المساعد في Perfekt في المرتبة الثانية والـPartizip في النهاية؛ وفي الجمل الثانوية التي نراجعها يأتي الفعل المصرف في آخرها. ومع حروف الجر المتغيّرة نميّز بين الموقع (wo؟، غالباً Dativ) والوجهة (wohin؟، غالباً Akkusativ)؛ فمجرد وجود حركة لا يكفي وحده للحكم. ومن أمثلتنا أن helfen يطلب Dativ للشخص: Ich helfe meinem Bruder؛ ولا نعمّم من هذا المثال على كل تركيب يتضمن Dativ.

وأهمّ ما في الخريطة أنّها تكشف العلاقات لا تحفظ الأسماء: لاحظ أنّ weil وdass وobwohl تعمل العمل نفسه (فعلٌ في النهاية) وقد وردت في المفتاحين التاسع والثاني عشر؛ ولاحظ أنّ meinem في Dativ وmeinen في Akkusativ هما المفتاحان الثامن والعاشر؛ ولاحظ أنّ الضمير الانعكاسي (mich / mir) ليس قاعدةً ثالثة بل اختيارٌ بين الحالتين نفسهما حسب الفعل.

والغرض العملي أن تستخدم الصفحة فهرساً للمراجعة: تعرّف إلى القاعدة في المثال، ثم عُد إلى وحدتها إن احتجت تفصيلاً. فالجدول يجمع أسماء قواعد من وحدات مختلفة، لكنه لا يعرض كل تصريفاتها أو كل الأفعال التي تتبعها. جرّب أولاً تفسير المثال بنفسك، ثم قارن تفسيرك بما تعلمته في الوحدة الأصلية. الخريطة لا تختبر وحدها القدرة على استعمال القواعد ولا تحلّ محلّ تمارين كل وحدة.`,
      whyAr:
        "هذه مراجعة تجمع أمثلة من وحدات سابقة في موضع واحد، ثم تتيح العودة إلى الدرس الأصلي عند الحاجة. المثال المركّب تدريب على رؤية أكثر من تركيب معاً، وليس دليلاً بمفرده على اكتساب المتعلم لها. يمكن للمتعلم أن يبدأ بتحديد الأفعال والروابط في المثال، ثم يشرح سبب اختيار كل صيغة، ويعيد المحاولة بعد الرجوع إلى الدرس إذا أخطأ. هذا الاستخدام يجعل الصفحة أداة مراجعة ذاتية، لا اختباراً مستقلاً ولا حكماً على مستوى CEFR.",
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
        "يمكن التعبير عن الماضي في الألمانية بصيغ منها Perfekt وPräteritum. يكثر Perfekt في الحديث عن أحداث ماضية في سياقات كثيرة، ويشيع Präteritum مع war وhatte أيضاً في المحادثة، كما يظهر في السرد المكتوب. هذا وصف عام للاستعمال لا تقسيم صارم بين الشفهي والكتابي.",
      eselsbruecke:
        "للتدرّب على دمج التراكيب، لاحظ: «Gestern war ich krank, deshalb bin ich zu Hause geblieben, obwohl ich meinem Freund helfen wollte.» يجمع المثال Präteritum وPerfekt وروابط وDativ؛ وهو نموذج لغوي لا حكم على ما ينبغي فعله عند المرض.",
      commonMistakes: [
        { wrong: "Ich habe nach Berlin gefahren.", right: "Ich bin nach Berlin gefahren.", whyAr: "أفعال الحركة وتغيّر المكان تأخذ sein لا haben في الماضي التام." },
        { wrong: "Ich helfe meinen Bruder.", right: "Ich helfe meinem Bruder.", whyAr: "في هذا التركيب يأخذ helfen الشخصَ في Dativ: meinem Bruder لا meinen Bruder." },
        { wrong: "Ich bleibe zu Hause, weil ich bin krank.", right: "Ich bleibe zu Hause, weil ich krank bin.", whyAr: "بعد weil تُدفع الصيغة المصرَّفة إلى آخر الجملة الثانوية، فيتقدّم الفاعل ich ويتأخّر الفعل krank bin إلى النهاية: weil ich krank bin لا weil ich bin krank." },
      ],
      relatedRuleComparison: {
        title: "أسئلة مراجعة ذاتية، لا معيار انتقال",
        content:
          "يمكنك استخدام هذه الأسئلة للمراجعة: هل تستطيع صياغة جملة عن حدث ماضٍ بـ Perfekt؟ وهل تستطيع ربط سبب بـ weil، ومقارنة شيئين بـ als، واستعمال Dativ في مثال مثل helfen؟ إذا كان أحدها صعباً، فارجع إلى الوحدة المقابلة. هذه أمثلة تدريبية وليست اختباراً أو شرطاً رسمياً للانتقال إلى B1 ولا تقديراً لمستوى CEFR.",
      },
    },
    {
      id: "t2",
      titleAr: "دمج تراكيب A2 في موقف واحد: المرض والاعتذار عن العمل",
      titleDe: "A2-Strukturen in einer Situation verbinden",
      explanationAr:
        `قد يجمع موقف واحد أكثر من تركيب. في مثال الإبلاغ عن الغياب نراجع Präteritum للحالة (ich war krank)، وPerfekt لحدث سابق (ich bin zum Arzt gegangen)، وweil للتعليل (weil ich Fieber habe)، وModalverb لنقل نصيحة الطبيب (ich soll zu Hause bleiben)، وDativ في المثال المحدد (ich habe meinem Chef geschrieben). هذه جمل تدريبية ممكنة، لا نصّاً إلزامياً ولا قاعدة عن طريقة تواصل كل جهة عمل. نستخدم هنا die Krankmeldung بمعنى إبلاغ جهة العمل بالغياب، ونميّزها عن الشهادة الطبية AU.

الترتيب المعروض — الحالة، ثم ما حدث، ثم السبب، ثم النصيحة، ثم الإجراء — طريقة تعليمية واحدة لعرض المعلومات، ويمكن تغييرها بحسب ما يريد المتحدث إبرازه. وفي أي ترتيب، تبقى قاعدة موضع الفعل مرتبطة بنوع الجملة: الفعل المساعد في الجملة الرئيسية الخبرية، وPartizip في نهاية Perfekt، والفعل المصرف في نهاية جملة weil، والمصدر في نهاية تركيب Modalverb (ich soll drei Tage zu Hause bleiben). أما Dativ فمثاله هنا شخص يُكتب إليه، لا قاعدة تشمل كل استعمالات الكتابة.`,
      whyAr:
        "يتيح هذا المثال مراجعة أكثر من بنية في سياق واحد، لكنه لا يقيس وحده الاحتفاظ أو القدرة على استخدامها في محادثة حقيقية. لاحظ ترتيب الكلمات في كل جملة، وميّز بين وصف الحالة الماضية ورواية الحدث وبين صيغة الجملة الرئيسية والثانوية، ثم جرّب صياغة مثال مشابه من عندك. لا يلزم أن تسرد كل التفاصيل في بلاغ واقعي؛ يكفي هنا أن ترى كيف تخدم كل بنية غرضها اللغوي.",
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
        "في هذا التدريب، جُمعت جمل قصيرة لتغطية الحالة والسبب والنصيحة والإجراء. يمكن أن تكفي في تواصل واقعي رسالة موجزة مثل «Ich kann heute nicht kommen» لإبلاغ جهة العمل بالغياب، مع ذكر المدة المتوقعة عند معرفتها. لا توجد في هذا المثال قاعدة تلزم الألمان بسرد زمني ثابت؛ اتبع وسيلة الإبلاغ وتعليمات جهة العمل.",
      eselsbruecke:
        "للتدريب فقط، جرّب هذا الترتيب: حالة أو غياب ← ما تعرفه عن المدة ← سبب أو خطوة تالية. يمكن تغيير الترتيب بحسب الموقف، واتبع دائماً آلية الإبلاغ المعتمدة لدى جهة العمل.",
      commonMistakes: [
        { wrong: "Ich bin krank, weil ich habe Fieber.", right: "Ich bin krank, weil ich Fieber habe.", whyAr: "weil تدفع الفعل المصرَّف إلى النهاية: habe في آخر الجملة الثانوية." },
        { wrong: "Ich habe zum Arzt gegangen.", right: "Ich bin zum Arzt gegangen.", whyAr: "gehen فعل حركة ينتقل فيه الفاعل من مكان إلى آخر، فماضيه التام بـ sein لا بـ haben: ich bin zum Arzt gegangen، وكذلك kommen وfahren وfliegen." },
        { wrong: "Ich habe mein Chef geschrieben.", right: "Ich habe meinem Chef geschrieben.", whyAr: "schreiben يأخذ مفعولاً في حالة الجر عندما يكون المكتوب إليه شخصاً: ich schreibe meinem Chef، فالمذكر يصير meinem لا mein، وهو المفتاح الثامن في خريطة الدرس." },
      ],
      relatedRuleComparison: {
        title: "الاتصال أم الرسالة؟",
        content:
          "يلزم § 5 EntgFG الموظف بإبلاغ صاحب العمل فوراً (unverzüglich) بالعجز عن العمل ومدته المتوقعة؛ ولا يحدد هذا النص أن يكون الإبلاغ هاتفياً أو قبل بدء الدوام تحديداً. إذا استمر العجز أكثر من ثلاثة أيام تقويمية، تُطلب الشهادة الطبية AU في موعد أقصاه يوم العمل التالي، ويمكن لصاحب العمل طلبها أبكر. لكن في معظم حالات المؤمن عليهم في التأمين الصحي القانوني تُرسل العيادة eAU إلكترونياً إلى صندوق التأمين، ويستعلم صاحب العمل عنها بعد إبلاغه بالغياب؛ فلا يرسل الموظف الشهادة بنفسه عادةً. توجد استثناءات، منها التأمين الخاص أو العلاج خارج ألمانيا. هذا ملخص تعليمي لا مشورة قانونية؛ تحقق من وضعك وتعليمات جهة عملك.",
      },
    },
    {
      id: "t3",
      titleAr: "أمثلة توسعات من A2 إلى B1",
      titleDe: "Von A2 nach B1 — was sich ändert",
      explanationAr:
        `تعرض هذه الخريطة أمثلة على تراكيب تضاف أو تتوسع في مواد B1، لا تحولات آلية لكل ما درسته في A2 ولا قائمة رسمية كاملة للمنهج. قد يُعبَّر عن علاقة الملكية بـvon + Dativ أو بصيغة Genitiv، مع اختلافات في السياق والأسلوب؛ وتضيف الجملة الموصولة تركيباً جديداً مع فعل في النهاية. ويظهر Präteritum مع أفعال أكثر في بعض السرد المكتوب، مع بقائه شائعاً أيضاً في استعمالات مثل war وhatte. أما Konjunktiv II فيتوسع إلى صيغ مثل ich hätte gern وich würde gern bleiben؛ وصيغة möchte المهذبة موجودة أصلاً في الألمانية التعليمية. ويتيح Passiv إبراز الحدث أو المتأثر به بدلاً من فاعل عام مثل man، لكنه ليس بديلاً مطابقاً له في كل سياق.

هذه خمس نقاط تمهيدية مختارة؛ ترتيبها ومحتواها التفصيلي يختلفان بين المناهج، ولا تكفي هذه الأمثلة لتحديد مستوى B1 أو إثبات جاهزية المتعلم له. والمقصود بلفظ «توسعة» أن مواد لاحقة قد تعرض بدائل أو تراكيب أوسع، لا أن كل متعلم A2 يستعملها تلقائياً في B1 أو أن صيغة البداية خطأ. تعلّم كل تركيب في سياقه، ولا تستنتج من الجدول تسلسلاً رسمياً للمنهج أو شرطاً للانتقال.`,
      whyAr:
        "نعرض هذه الأمثلة لتكوين صورة أولية عن بعض موضوعات B1 قبل دراستها بتفصيل. هي خريطة استكشافية مختصرة، وليست قائمة كاملة أو وعداً بنتيجة تعليمية أو دليلاً على جاهزية المتعلم. يمكنك استعمالها لتسمية ما يبدو مألوفاً وما يحتاج شرحاً لاحقاً، ثم تأجيل التعلّم التفصيلي إلى الوحدة المناسبة؛ فمعرفة اسم القاعدة أو رؤية مثال واحد لا تعني إتقانها. وتختلف موضوعات الدروس وترتيبها بين الكتب، لذلك ارجع إلى المنهج الذي تدرسه عند متابعة B1.",
      table: {
        title: "خمسة أمثلة تمهيدية، لا قائمة منهج رسمية",
        columns: ["الظاهرة", "مثال سابق أو نقطة انطلاق", "مثال توسعة"],
        rows: [
          { label: "الملكية", cells: ["der Bruder von meinem Freund", "der Bruder meines Freundes (Genitiv؛ استعماله وسياقه يختلفان)"] },
          { label: "وصف الاسم", cells: ["Das ist mein Bruder. Er wohnt in Bonn.", "Das ist mein Bruder, der in Bonn wohnt."] },
          { label: "سرد الماضي", cells: ["Ich habe gearbeitet.", "Ich arbeitete (مثال Präteritum في سرد مكتوب)"] },
          { label: "التمنّي والتأدّب", cells: ["Ich möchte einen Kaffee.", "Ich hätte gern einen Kaffee / Ich würde gern bleiben."] },
          { label: "إبراز الحدث أو المتأثر به", cells: ["Man repariert das Auto.", "Das Auto wird repariert (Passiv؛ زاوية عرض مختلفة)"] },
        ],
      },
      examples: [
        { de: "Ausgangsbeispiel: Das ist der Bruder von meinem Freund.", ar: "مثال انطلاق: هذا أخو صديقي." },
        { de: "Mögliche Variante: Das ist der Bruder meines Freundes.", ar: "صياغة بديلة ممكنة: هذا أخو صديقي (باستخدام Genitiv)." },
        { de: "Ausgangsbeispiel: Ich habe die Prüfung gemacht.", ar: "مثال انطلاق: أدّيتُ الامتحان." },
        { de: "Mögliche Erweiterung: Ich hoffe, dass ich die Prüfung bestehe.", ar: "توسعة ممكنة: آمل أن أجتاز الامتحان." },
        { de: "Im weiteren Lernweg werden manche Themen wiederholt und um neue Strukturen ergänzt.", ar: "في المراحل اللاحقة تُراجع بعض الموضوعات وتُضاف إليها تراكيب جديدة." },
        { de: "Mögliche Erweiterung: Ich würde gern länger bleiben, aber ich muss zurück.", ar: "توسعة ممكنة: أودّ البقاء أطول، لكن عليّ العودة." },
      ],
      comparisonWithArabic:
        "تملك العربية والألمانية صيغاً للملكية وللصلة، لكن تركيبها ليس متطابقاً. مثلاً: «أخي الذي يسكن في بون» يقابل معنى Das ist mein Bruder, der in Bonn wohnt؛ وفي الألمانية يتغير شكل الضمير الموصول بحسب الجنس والعدد والحالة، ويأتي الفعل في نهاية الجملة التابعة. هذا توضيح تقابلي للأمثلة لا قاعدة عن صعوبة لغة بعينها.",
      eselsbruecke:
        "هذه خمسة أمثلة للاستئناس: ملكية، جملة موصولة، سرد، طلب مهذب، وPassiv. راجع تفاصيل كل تركيب في درس B1 الذي يقدمه؛ لا تفترض أن هذا الجدول يغطي المنهج كله.",
      commonMistakes: [
        { wrong: "der Bruder von meines Freundes", right: "der Bruder meines Freundes", whyAr: "إمّا von + Dativ (أسلوب A2) وإمّا Genitiv وحده، لا الاثنان معاً." },
        { wrong: "Das ist mein Bruder, der wohnt in Bonn.", right: "Das ist mein Bruder, der in Bonn wohnt.", whyAr: "الجملة الموصولة جملة ثانوية: الفعل في آخرها، تماماً كقاعدة weil التي تعرفها." },
        { wrong: "Ich würde gern einen Kaffee, bitte.", right: "Ich hätte gern einen Kaffee, bitte.", whyAr: "في الطلب المهذّب الجاهز تُستعمل صيغة hätte gern، وwürde يحتاج فعلاً مصدراً في النهاية (ich würde gern bleiben)، فلا يقف وحده مع اسم." },
      ],
      relatedRuleComparison: {
        title: "استخدام الخريطة في المراجعة",
        content:
          "اختر مثالاً من الجدول، وحاول إعادة صياغته ثم ارجع إلى الوحدة المقابلة إن احتجت شرحاً. هذه خطوة مراجعة ذاتية اختيارية، لا اختبار جاهزية ولا شرطاً رسمياً للانتقال إلى B1، ولا تقيس مستوى CEFR.",
      },
    },
  ];
