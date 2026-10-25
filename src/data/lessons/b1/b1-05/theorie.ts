/**
 * b1-05 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الشرطية في الماضي: hätte/wäre + Partizip II",
      titleDe: "Konjunktiv II der Vergangenheit",
      explanationAr:
        "في هذا الدرس نستخدم Konjunktiv II der Vergangenheit لافتراض ماضٍ مخالف لما حدث، مثل فرصة لم تتحقق أو ندم. الصيغة المعتادة: hätte أو wäre + Partizip II. مثال: Ich hätte Sport gemacht (كنت سأمارس الرياضة لو توافرت الظروف)، وIch wäre gegangen (لكنت ذهبت). معنى الافتراض يتضح من السياق، ولا تعني كل صيغة شرطية ماضية الندم بالضرورة.\n\nيتبع الاختيار بين hätte وwäre المساعد الذي يستعمله الفعل في Perfekt: مثلاً machen وlesen يأخذان haben، لذا نقول Ich hätte gemacht / gelesen؛ وgehen وkommen يأخذان sein، لذا نقول Ich wäre gegangen / gekommen. لا تكفي قاعدة «أفعال الحركة تأخذ sein» لكل الأفعال؛ تعلّم المساعد مع الفعل واستعماله.\n\nمن أمثلتها الشرط الماضي (Wenn ich Zeit gehabt hätte, wäre ich gekommen)، والتبرير (Ich hätte angerufen, aber mein Handy war leer)، والعتاب غير المباشر (Du hättest mir sagen können). وبعد als ob يمكن استعمال Konjunktiv في الجملة التابعة، ويأتي الفعل المصرف في النهاية: Er tut so, als ob er alles wüsste. ومع الأفعال الناقصة قد يأتي المصدران في النهاية، مثل: Ich hätte mehr Sport machen sollen.",
      whyAr:
        "لماذا نميّز بين افتراض حاضر/مستقبل وافتراض ماضٍ؟ في أمثلة هذا الدرس نستخدم würde + Infinitiv للأول (Ich würde das machen) وhätte/wäre + Partizip II للثاني (Ich hätte das gemacht). هذا تبسيط تعليمي: يساهم السياق أيضاً في تحديد الزمن والمعنى، ولا تحمل الصيغة وحدها دائماً معنى الندم.\n\nأما Ich hätte gern einen Kaffee فهي رغبة أو صيغة طلب في الحاضر؛ وIch hätte gern einen Kaffee gehabt تتحدث عن رغبة ماضية («كنت أودّ قهوة»)، وليست الصيغة المعتادة لطلب قهوة الآن. وقد يُستخدم الماضي الشرطي للتبرير أو العتاب، لكن لا يلزم أن يحمل دائماً نبرة ندم أو لطف.",
      table: {
        title: "الشرطية في الماضي",
        columns: ["الفعل", "الآن (würde + Inf)", "الماضي (hätte/wäre + PII)"],
        rows: [
          { label: "machen", cells: ["würde machen", "hätte gemacht"] },
          { label: "gehen", cells: ["würde gehen", "wäre gegangen"] },
          { label: "kommen", cells: ["würde kommen", "wäre gekommen"] },
          { label: "haben", cells: ["hätte", "hätte gehabt"] },
        ],
      },
      examples: [
        { de: "Ich hätte gern einen Kaffee gehabt.", ar: "كنت أودّ قهوة في وقت سابق." },
        { de: "Wenn ich früher Sport gemacht hätte, wäre ich fitter.", ar: "لو كنت مارست الرياضة مبكراً لكنت أليق." },
        { de: "Ich wäre gestern gekommen, aber ich war krank.", ar: "كنت سآتي أمس لكنني كنت مريضاً." },
        { de: "Er hätte das Buch gelesen, wenn er Zeit gehabt hätte.", ar: "كان سيقرأ الكتاب لو كان عنده وقت." },
        { de: "Sie tut so, als ob sie alles wüsste.", ar: "تتصرف كما لو أنها تعرف كل شيء." },
        { de: "Wenn ich früher Sport gemacht hätte, wäre ich heute fitter.", ar: "لو كنت مارست الرياضة مبكراً لكنت اليوم أكثر لياقة." },
      ],
      comparisonWithArabic:
        "في العربية يمكن التعبير عن افتراض ماضٍ بأدوات مثل «لو» و«لكان»، بينما توزّع الألمانية العلامة غالباً بين المساعد والـPartizip II: Wenn ich Zeit gehabt hätte, wäre ich gekommen. لا تقابل الصيغ كلمةً بكلمة؛ استخدم المثال الألماني والسياق لتحديد العلاقة الزمنية، واحفظ المساعد المناسب مع الفعل.",
      eselsbruecke:
        "«افتراض عن الماضي: hätte/wäre + Partizip II»؛ ويحدد السياق هل المقصود فرصة فائتة أو افتراضاً آخر. و«als ob = كما لو»: تصرف كما لو كان يعرف كل شيء.",
      commonMistakes: [
        { wrong: "Ich hätte gestern Kaffee. (بدون Partizip II)", right: "Ich hätte gestern Kaffee getrunken.", whyAr: "في هذا المثال نحتاج Partizip II بعد المساعد: hätte getrunken. يختلف تركيب بعض الأفعال الناقصة، مثل hätte machen sollen." },
        { wrong: "Wenn ich gewusst hätte, ich wäre gekommen. (ترتيب)", right: "Wenn ich gewusst hätte, wäre ich gekommen.", whyAr: "قاعدة الترتيب هنا هي نفسها في كل جملة تبدأ بجملة ثانوية: الجملة الثانوية تستهلك المرتبة الأولى حتى نهايتها، وحين تأتي الجملة الرئيسية يأتي على رأسها الفعل المُصرَّف أولاً ثم الفاعل. فكتابة «ich wäre gekommen» تُعيد الفاعل إلى المرتبة الأولى وتُخرج الفعل عن موضعه، والقاعدة هنا أن الفعل المصرف يأتي في المرتبة الثانية من الجملة الرئيسية بعد الجملة التابعة." },
        { wrong: "als ob مع فعل في منتصف الجملة", right: "als ob + الفعل في النهاية: als ob er alles wüsste", whyAr: "في هذا التمرين نستخدم Konjunktiv II wüsste، ويأتي الفعل المصرف في نهاية الجملة التابعة بعد als ob. لا نعمّم ذلك على أن Konjunktiv II وحده ممكن في كل جملة تبدأ بـals ob؛ فاختيار الصيغة يتأثر بالمعنى والسياق." },
      ],
      relatedRuleComparison: {
        title: "würde + Infinitiv أم hätte + Partizip II؟",
        content: "الآن/المستقبل الافتراضي: würde + Infinitiv (Ich würde gehen). الماضي غير المحقق: hätte/wäre + Partizip II (Ich wäre gegangen). اسأل: هل الكلام عن الماضي؟ نعم → Partizip II.",
      },
    },
    {
      id: "t2",
      titleAr: "الكلام المنقول: Konjunktiv I",
      titleDe: "Die indirekte Rede: Konjunktiv I",
      explanationAr:
        "الكلام المنقول (indirekte Rede) هو أن تنقل قول شخص آخر مع إظهار مصدر الكلام. من صِيَغه Konjunktiv I، مثل: Die Ministerin sagte, die Lage sei stabil. هذه الصيغة تنسب المعلومة إلى الوزيرة؛ ولا تثبت وحدها صحتها أو بطلانها. يُستعمل Konjunktiv I كثيراً في الكتابة الخبرية، بينما قد يظهر Indikativ أيضاً، ولا سيما في الكلام اليومي.\n\nلأهداف هذا الدرس نركّز على صيغ الغائب: kommen ← er komme، haben ← er habe، sein ← er sei، werden ← er werde. في صيغة الجمع: sie kommen / haben، وهي مطابقة غالباً للمضارع Indikativ. توجد صيغ لبقية الضمائر، لكن بعضها نادر أو يطابق المضارع؛ لذا لا حاجة إلى حفظها كلها في هذا الدرس.\n\nعندما تطابق صيغة Konjunktiv I صيغة Indikativ (مثل sie haben)، قد يُختار Konjunktiv II لتمييز النقل في بعض النصوص، مثل sie hätten. لكن هذا ليس تحويلاً إلزامياً في كل استعمال: فـIndikativ ممكن أيضاً في نقل الكلام، ويعتمد الاختيار على السياق ونوع النص. وتُستخدم هنا صيغة Konjunktiv II لإظهار هذا البديل.",
      whyAr:
        "في العربية والألمانية وسائل مختلفة لنسبة الكلام إلى قائله. قارن: «قالت الوزيرة إن الوضع مستقر» وDie Ministerin sagte, die Lage sei stabil. في المثال الألماني، يوضح Konjunktiv I أن الجملة تنقل قول الوزيرة؛ ولا يعني بحد ذاته أن الناقل يشكك فيها.\n\nيمكن أيضاً نقل الكلام بالألمانية مع dass وIndikativ، مثل Er sagt, dass er krank ist؛ وهذا شائع في الكلام اليومي. وقد يُستعمل Konjunktiv II بدلاً من Konjunktiv I عندما تتطابق صيغة K I مع Indikativ، خصوصاً إذا أراد الكاتب إظهار صيغة النقل بوضوح. ليست هذه الاختيارات حكماً على صدق الخبر، بل طرائق لغوية لنقل الكلام.",
      table: {
        title: "Konjunktiv I في الكلام المنقول",
        columns: ["الشخص", "الحاضر", "Konjunktiv I", "البديل عند التطابق"],
        rows: [
          { label: "er/sie/es", cells: ["hat", "habe", "—"] },
          { label: "er/sie/es", cells: ["ist", "sei", "—"] },
          { label: "er/sie/es", cells: ["kommt", "komme", "—"] },
          { label: "sie (جمع)", cells: ["haben", "haben", "hätten (Konjunktiv II)"] },
          { label: "ich", cells: ["habe", "habe", "hätte (Konjunktiv II)"] },
        ],
      },
      examples: [
        { de: "Die Politikerin sagt, die Lage sei stabil.", ar: "تقول السياسية إن الوضع مستقر." }, { de: "Er behauptet, er wisse die Antwort.", ar: "يزعم أنه يعرف الإجابة." }, { de: "Der Minister sagte, er sei zufrieden.", ar: "قال الوزير إنه راضٍ." }, { de: "Sie behauptet, sie habe nichts gewusst.", ar: "تزعم أنها لم تكن تعلم شيئاً." }, { de: "Die Zeitung berichtet, die Preise seien gestiegen.", ar: "تفيد الصحيفة بأن الأسعار ارتفعت." },
        { de: "Der Sprecher sagte, die Regierung werde bald antworten.", ar: "قال المتحدث إن الحكومة ستجيب قريباً." }
      ],
      comparisonWithArabic:
        "في العربية تُنسب الأقوال غالباً بتعبيرات مثل «قال إنّ»، وفي الألمانية يمكن أن تظهر النسبة في Konjunktiv I (er sei krank) أو في تركيب dass مع Indikativ (dass er krank ist). تختلف الوسائل بين اللغتين، ولا يعني اختيار صيغة بعينها أن الناقل يؤكد الخبر أو يشكك فيه.",
      eselsbruecke: "أمثلة الغائب في Konjunktiv I: er komme، er habe، er sei. إذا طابقت الصيغة Indikativ، قد يُستعمل Konjunktiv II بوصفه بديلاً في بعض أنماط النقل: sie hätten.",
      commonMistakes: [
        { wrong: "Er sagt, er seie krank.", right: "Er sagt, er sei krank.", whyAr: "صيغة الغائب المفرد من sein في Konjunktiv I هي sei، لا seie. أما Er sagt, er ist krank فجملة صحيحة في استعمالات نقل كثيرة، فلا تُعد خطأً عاماً." },
        { wrong: "Sie sagte, sie habt keine Zeit gehabt.", right: "Sie sagte, sie habe keine Zeit gehabt.", whyAr: "مع sie المفرد (هي) يكون المساعد habe في Konjunktiv I؛ habt صيغة المخاطَب الجمع (ihr) ولا تصلح هنا." },
        { wrong: "Sie sagen, sie hab es gesehen. (صيغة K I للجمع)", right: "Sie sagen, sie haben es gesehen.", whyAr: "في Konjunktiv I للجمع نقول sie haben؛ وهذه الصيغة تطابق Indikativ. قد يختار الكاتب K II في سياقات نقل أخرى، لكن صيغة haben هي المقصودة هنا." },
      ],
      relatedRuleComparison: {
        title: "Konjunktiv I أم dass؟",
        content: "مثالان ممكنان لنقل القول: Er sagt, dass er krank ist (dass + Indikativ)، وEr sagt, er sei krank (Konjunktiv I). يشيع الثاني في الكتابة الخبرية؛ أما الأول فكثير في الكلام اليومي. ويتوقف الاختيار على السياق ونوع النص.",
      },
    },
  ];
