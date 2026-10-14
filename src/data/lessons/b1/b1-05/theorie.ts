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
        "الشرطية في الماضي تعبّر عن «ما كان يمكن أن يحدث ولم يحدث» — أي عن الفرصة التي فاتت أو الندم أو التبرير المتأخر. البنية ثابتة: مساعد في صيغة الشرط (hätte أو wäre) + Partizip II في نهاية الجملة. Ich hätte Sport gemacht (كنت سأمارس الرياضة — لكنني لم أفعل)، وIch wäre gegangen (كنت سأذهب — لكنني لم أذهب).\n\nوالاختيار بين hätte وwäre ليس اعتباطياً: الأفعال التي تصرّف نفسها بـhaben في Perfekt تأخذ hätte (Ich hätte gemacht · Ich hätte gelesen)، والأفعال التي تأخذ sein في Perfekt — أي الحركة وتغيّر الحالة — تأخذ wäre (Ich wäre gegangen · Ich wäre geblieben · Ich wäre geworden). فمن عرف قاعدته في Perfekt عرفها هنا بلا حفظ جديد.\n\nوتأتي هذه الصيغة في ثلاث وظائف عملية: الجملة الشرطية الماضية (Wenn ich Zeit gehabt hätte, wäre ich gekommen)، والاعتذار أو التبرير (Ich hätte angerufen, aber mein Handy war leer)، والتعبير عن اللوم اللطيف (Du hättest mir sagen können). أما مع als ob فتُنقل الصيغة إلى الجملة الثانوية ويُؤخَّر الفعل: Er tut so, als ob er alles gewusst hätte.",
      whyAr:
        "لماذا لا يكفي Konjunktiv II في صيغته الحاضرة (würde + Infinitiv)؟ لأن هذا الأخير يقفز فوق الزمن: Ich würde kommen تفيد «كنت سآتي» بلا تحديد هل السفر أمس أم غداً. وعندما يكون الكلام عن الماضي، فالألمانية تلزمها دلالة صريحة على الزمن، ولا تقبل أن يُبنى الافتراض الماضي على صيغة الحاضر.\n\nلذلك يبقى المعنى مختلفاً: Ich würde das machen (لو طُلب مني الآن أو لاحقاً) مقابل Ich hätte das gemacht (كنت سأفعل ذلك لو..، وقد فات الأوان). الفرق بين الجملتين هو الفرق بين قرار قابل للتنفيذ وندم لا رجعة فيه.\n\nوهذا ما يجعل الصيغة الماضية أداة اعتذار ولطف اجتماعي معاً: Ich hätte gern einen Kaffee gehabt (كنت أودّ قهوة) أخفّ من الطلب الصريح؛ وDu hättest mich anrufen können لومٌ مغلّف بالافتراض لا بالاتهام المباشر. لاحظ أن هذه الصيغة ملازمة لروح الأدب الألماني في العمل: تُقال كثيراً في المراجعات والمكالمات المهنية.",
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
        { de: "Ich hätte gern einen Kaffee gehabt.", ar: "كنت أود قهوة (كنت سأحب أن يكون عندي قهوة)." },
        { de: "Wenn ich früher Sport gemacht hätte, wäre ich fitter.", ar: "لو كنت مارست الرياضة مبكراً لكنت أليق." },
        { de: "Ich wäre gestern gekommen, aber ich war krank.", ar: "كنت سآتي أمس لكنني كنت مريضاً." },
        { de: "Er hätte das Buch gelesen, wenn er Zeit gehabt hätte.", ar: "كان سيقرأ الكتاب لو كان عنده وقت." },
        { de: "Sie tut so, als ob sie alles wüsste.", ar: "تتصرف كما لو أنها تعرف كل شيء." },
        { de: "Wenn ich früher Sport gemacht hätte, wäre ich heute fitter.", ar: "لو كنت مارست الرياضة مبكراً لكنت اليوم أكثر لياقة." },
      ],
      comparisonWithArabic:
        "العربية تُعبّر عن الافتراض الماضي بـ«لو + الفعل الماضي» في الشرط و«لـ + كان» في الجواب: «لو كنت مارست الرياضة لكنت أليق». لاحظ أنها تُبقي الفعل على شكله الماضي ولا تُضيف أداة ثانية، فالزمن يظهر مرة واحدة في «لو» ويتبعه الجواب على أثر ذلك.\n\nالألمانية تفصل الأمر على مستويين: الزمن يُنقل إلى المساعد (hätte بدل habe)، وهو الذي يدل على الماضي، ثم يأتي Partizip II في النهاية لبيان الفعل المعنى. أي أن المعلومة موزّعة على كلمتين متباعدتين — القوس المعروف في الألمانية.\n\nوأمر ثالث مهم للعربي: الفعل «كان» العربي يقابل في الألمانية وجهين متعاكسين — كان واقعاً (war) وكان افتراضياً (wäre). «لو كان عندي وقت» تُترجم بماضي شرطي (hätte Zeit) لا بماضٍ واقع (hatte Zeit). وهذا الخطأ تحديداً هو الأكثر شيوعاً عند الناطقين بالعربية، لأن العربية لا تُغيّر «كان» عند الافتراض.",
      eselsbruecke:
        "«الندم = hätte/wäre + Partizip II» — تستعملها عادةً مع «لو كنت...» عن الماضي. و«als ob = كما لو»: تصرف كما لو كان يعرف كل شيء.",
      commonMistakes: [
        { wrong: "Ich hätte gestern Kaffee. (بدون Partizip II)", right: "Ich hätte gestern Kaffee getrunken.", whyAr: "للماضي الشرطي نضيف Partizip II: getrunken. وhätte وحده لا يكفي." },
        { wrong: "Wenn ich gewusst hätte, ich wäre gekommen. (ترتيب)", right: "Wenn ich gewusst hätte, wäre ich gekommen.", whyAr: "قاعدة الترتيب هنا هي نفسها في كل جملة تبدأ بجملة ثانوية: الجملة الثانوية تستهلك المرتبة الأولى حتى نهايتها، وحين تأتي الجملة الرئيسية يأتي على رأسها الفعل المُصرَّف أولاً ثم الفاعل. فكتابة «ich wäre gekommen» تُعيد الفاعل إلى المرتبة الأولى وتُخرج الفعل عن موضعه، وهي من أكثر الأخطاء انتشاراً عند المتعلّم العربي لأن العربية تُعلي الفاعل في الجملة الاسمية ولا تُحرّكه." },
        { wrong: "als ob مع فعل في منتصف الجملة", right: "als ob + الفعل في النهاية: als ob er alles wüsste", whyAr: "als ob أداة تربط جملة ثانوية، وجملتها تخضع لقاعدة الجملة الثانوية كاملة: الفعل المُصرَّف ينتقل إلى النهاية. ومع كون العبارة كلاماً غير حقيقي يلزمها Konjunktiv II لا المضارع، لأن الكلام عن شيء لا يقع في الواقع. فالصيغة والترتيب مطلوبان معاً في هذا التركيب." },
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
        "الكلام المنقول (indirekte Rede) هو أن تنقل ما قاله غيرك بلا أن تُثبت صحّته. الألمانية تملك له صيغة خاصة اسمها Konjunktiv I، وهي أداة الصحافة والتقارير والقانون: Die Ministerin sagte, die Lage sei stabil — لاحظ أن المتكلّم لا يقول إن الوضع مستقر فعلاً، بل ينقل أن الوزيرة قالت ذلك.\n\nتُبنى هذه الصيغة بإضافة -e إلى جذر المصدر في الغائب المفرد: kommen ← (er) komme · haben ← habe · gehen ← gehe؛ وتأخذ بقية الضمائر اللواحق المعتادة: -est للخطاب المفرد (du habest)، و-en للجمع (sie haben)، و-et لجماعة المخاطبين (ihr habet). والفعلان الشاذّان sein (sei) وwerden (werde) لهما صيغتان محفوظتان.\n\nوالمشكلة العملية أن بعض الصيغ يُطابق فيها Konjunktiv I المضارع العادي تماماً — sie haben · sie sind · sie kommen — وهذا يُلغي دلالة النقل من الأصل. والقاعدة عندها: عند التطابق يُنتقل إلى Konjunktiv II بديلاً واضحاً (sie hätten · sie wären · sie kämen)، لأن المهم ليس الصيغة بعينها بل أن يظهر التمييز بين الكلام الواقعي والمنقول. ولهذا يبقى Konjunktiv II حاضراً داخل درس الكلام المنقول.",
      whyAr:
        "لماذا تحتاج لغةٌ صيغةً كاملة لنقل الكلام؟ لأن نقل الكلام يطرح سؤالاً لا يُحلّ بالنقطتين: هل أنت تُخبر، أم تنقل؟ في العربية يمكنك أن تقرأ «قال الوزير إن الأسعار ترتفع» فلا تدري من المسؤول عن هذا الحكم — الناقل أم المنقول عنه. وهذا فرق جوهري في الصحافة والقضاء: للصحفي ألّا يتبنّى الادّعاء، وللقاضي أن يميّز بين الشهادة والإقرار.\n\nوالألمانية نقلت هذه المسؤولية من السياق إلى الفعل نفسه، فصارت «(er) habe» علامةً يرفع فيها المتكلّم يده عمّا يقول غيره. ولهذا تركها الناطقون في الكلام اليومي نحو صيغة dass مع المؤشر (Er sagt, dass er krank ist)، لأنهم لا يحتاجون إلى هذا الاحتياط في حديث عادي.\n\nومع ذلك يرى المتعلّم في B1 هذه الصيغة في كل مكان في الإعلام المكتوب والمرئي، ويستعملها هو نفسه في تلخيص مقال أو حوار — وهذا مطلوب صريح في الامتحانات. ومن ثمة تكون أداة نصّية لا مجرد تنويع أسلوبي: هي التي تسمح لك بنقل المصدر في ورقة التلخيص بلا أن تصير شاهداً على ما فيه.",
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
        "العربية تنقل الكلام بـ«قال إنّ» أو «أفاد بأنّ» ويبقى الفعل بعد «إنّ» كما هو: «قال الوزير إنّ الأسعار ترتفع». فالتمييز بين كلام الناقل وكلام المنقول عنه يقع كله على عاتق الأداة والسياق، وليس على الفعل. ولذلك يستطيع العربي أن يقرأ النقل مرات كثيرة بلا أن ينتبه أنه أمام مرحلة معنى مختلفة.\n\nالألمانية ألزمت الفعل بالدلالة: er habe (نقل) مقابل er hat (إخبار). والنتيجة العملية أنك في العربية تحمل الالتباس بالنحو والسياق، أما في الألمانية فالصيغة مُعلنة في الفعل نفسه.\n\nوهناك فرق ثالث: العربية الفصحى تملك أداة نقل بلا أن تمسّ صيغة الفعل، لكن المحادثة اليومية تعمد كثيراً إلى «قال لي» و»يقول» مع بقاء الفعل على حاله — أي إلى نفس ما تفعله الألمانية الدارجة (dass + المضارع). فحال الألمانية في الصحافة غير حالها في الشارع، تماماً كما أن الفصحى تُعنى بالنقل الصريح أكثر مما تُعنى به المحكية.",
      eselsbruecke: "علامة Konjunktiv I هي الحرف e في الغائب: er habe، er sei، er komme. وإن جاءت الصيغة مطابقة للمضارع العادي (مثل sie haben) فانتقل إلى Konjunktiv II: sie hätten — وهذه صيغة ثانية شائعة في الكلام الرسمي (Wikipedia).",
      commonMistakes: [
        { wrong: "Er sagt, er ist krank. (كلام يومي، ليس نقلاً رسمياً)", right: "Er sagt, er sei krank.", whyAr: "في النقل الرسمي والكتابي يُستعمل Konjunktiv I؛ وsein تصبح sei في الغائب المفرد. والمؤشر الغالب في الكلام اليومي هو المؤشر." },
        { wrong: "Sie sagte, sie habt keine Zeit gehabt.", right: "Sie sagte, sie habe keine Zeit gehabt.", whyAr: "مع sie المفرد (هي) يكون المساعد habe في Konjunktiv I؛ habt صيغة المخاطَب الجمع (ihr) ولا تصلح هنا." },
        { wrong: "Sie sagen, sie haben es gesehen. (كلام يومي)", right: "Sie sagen, sie hätten es gesehen.", whyAr: "عندما يتطابق Konjunktiv I مع المضارع يُستعمل Konjunktiv II لتوضيح أن الكلام منقول (Wikipedia)." },
      ],
      relatedRuleComparison: {
        title: "Konjunktiv I أم dass؟",
        content: "يمكن نقل الكلام بجملة dass مع المضارع في المحادثة اليومية: Er sagt, dass er krank ist. أما في الصحافة والتقارير الرسمية فيُفضَّل حذف dass واستعمال Konjunktiv I: Er sagt, er sei krank.",
      },
    },
  ];
