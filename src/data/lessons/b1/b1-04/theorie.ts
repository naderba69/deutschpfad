/**
 * b1-04 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "صيغة الشرط (Konjunktiv II): würde + Infinitiv",
      titleDe: "Der Konjunktiv II: würde, wäre, hätte, könnte",
      explanationAr:
        "Konjunktiv II = صيغة «غير الواقع»: تتحدث عن شيء لم يحدث أو لن يحدث أو تخيّلته فقط. مثال: Ich würde reisen (كنت سأسافر) — السفر لم يقع، أنا أتخيله. وهذا هو الفرق الجوهري بينها وبين المستقبل: Ich werde reisen (سأسافر) خبرٌ عن شيء سيقع فعلاً، أما Ich würde reisen فافتراضٌ في عالم الخيال.\n\nالتركيب الأسهل: würde + المصدر (Infinitiv) في آخر الجملة. الفعل würde يأخذ مكان الفعل الثاني ويُصرَّف مع الفاعل (ich würde · du würdest · er/sie/es würde · wir würden · ihr würdet · sie/Sie würden)، ثم يأتي المصدر في النهاية: Ich würde nach Deutschland reisen. ومتى كانت الجملة شرطية مع wenn، صارت البنية: Wenn ich Zeit hätte, würde ich mehr lesen — الشرط أولاً، ثم الفعل الرئيسي مباشرة بعد الفاصلة.\n\nلكن الألمانية لا تبني كل الأفعال بـ würde: هناك أفعال قصيرة عالية التكرار لها صيغة شرطية خاصة بها محفوظة من زمان، وأشهرها أربعة: wäre (كان سيكون، من sein)، hätte (كان سيملك، من haben)، könnte (كان يستطيع، من können)، وsollte (ينبغي، من sollen). هذه الأربعة تُستعمل يومياً في الطلبات المهذبة (Könnten Sie...?) والتمني (Ich hätte gern...) والنصيحة الهادئة (Du solltest...)، وحفظها يوفّر عليك تركيب würde الطويل.",
      whyAr:
        "لماذا «صيغة» كاملة وليست كلمة واحدة؟ لأن الألمانية تحتاج أن تُظهر في شكل الفعل نفسه هل الكلام واقع أم خيال، وليس في نبرة الصوت أو قرينة السياق. عندما تقول Ich habe Zeit فأنت تُخبر عن واقع: عندي وقت فعلاً. وعندما تقول Ich hätte Zeit فأنت تنقل الكلام إلى عالم الافتراض: لو كان عندي وقت. الحرفان مختلفان، والمعنى مختلف تماماً.\n\nوهذا التمييز يُستخدم عملياً في الأدب: الفرق بين Ich hätte gern einen Kaffee (أودّ قهوة — طلب مؤدب في المقهى) وIch habe einen Kaffee (عندي قهوة — إخبار عن حقيقة) هو الفرق بين اللباقة والتصريح. وكذلك في النصيحة: Du solltest weniger arbeiten (ينبغي أن تعمل أقل) أخفّ كثيراً من Du arbeitest zu viel (أنت تعمل كثيراً). وفي العربية نُعبّر عن الأدب بالتنغيم وبكلمات مثل «من فضلك» و«لو تكرمت»، أما الألمانية فتُعبّر عنه بزمن الفعل — لذلك إتقان هذه الصيغة جزء من التهذيب اللغوي لا زخرفة نحوية.",
      table: {
        title: "أشكال Konjunktiv II الأساسية",
        columns: ["الفعل", "Indikativ", "Konjunktiv II", "مثال"],
        rows: [
          { label: "werden", cells: ["wird", "würde", "Ich würde reisen."] },
          { label: "sein", cells: ["ist", "wäre", "Wenn ich reich wäre..."] },
          { label: "haben", cells: ["hat", "hätte", "Ich hätte gern Zeit."] },
          { label: "können", cells: ["kann", "könnte", "Könnten Sie helfen?"] },
          { label: "sollen", cells: ["soll", "sollte", "Du solltest lernen."] },
        ],
      },
      examples: [
        { de: "Ich würde gern nach Deutschland reisen.", ar: "كنت أحب أن أسافر إلى ألمانيا." },
        { de: "Wenn ich Zeit hätte, würde ich mehr lesen.", ar: "لو كان عندي وقت لقرأت أكثر." },
        { de: "Ich wäre lieber zu Hause geblieben.", ar: "كنت أفضل البقاء في البيت." },
        { de: "Könnten Sie das bitte wiederholen?", ar: "هل يمكنكم تكرار ذلك من فضلك؟ (مهذب جداً)" },
        { de: "Du solltest mehr Wasser trinken.", ar: "ينبغي أن تشرب ماءً أكثر." },
        { de: "Wenn ich Zeit hätte, würde ich mehr Zeitungen lesen.", ar: "لو كان عندي وقت لقرأت صحفاً أكثر." },
      ],
      comparisonWithArabic:
        "العربية تعبّر عن الافتراض بجملة اسمية شرطية تبدأ بـ«لو» ويبقى الفعل بعدها ماضياً شكلاً في الغالب: «لو كان عندي وقت لقرأت أكثر». لاحظ أن شكل الفعل (كان، قرأ) لا يحمل بذاته دلالة الافتراض؛ الدلالة كلها تأتي من أداة الشرط «لو» ومن جوابها «لـ».\n\nالألمانية تفعل شيئاً مختلفاً: تُغيّر شكل الفعل ذاته (hätte لا habe، wäre لا bin)، وتستطيع بذلك أن تحذف أداة الشرط أصلاً. Ich hätte gern mehr Zeit جملة كاملة مفهومة، ولم تحتج إلى «لو». أما التركيب würde + المصدر فهو أقرب نقطة إلى العربية: «كنت سأفعل» ≈ ich würde machen، حيث «كنت سأ» تقوم مقام würde والمصدر يقابل الفعل بعدها.\n\nأما التهذيب فالعربية تبنيه بالنداء والتمليح («يا أخي، لو تسمح») أو بالاستفهام («هل يمكنك؟»)، والألمانية تستخدم Konjunktiv II مباشرة: Könnten Sie mir helfen? بمعنى «هل تسطيع مساعدتي؟» — أي أن الطلب نفسه صار افتراضياً، ولم يبقَ صريحاً.",
      eselsbruecke:
        "«würde = كنت سأفعل» — كثير من الأمنيات المهذبة تبدأ بـ würde. و«wäre = كان سيكون، hätte = كان سيملك، könnte = كان يستطيع» — رباعية الحلم!",
      commonMistakes: [
        { wrong: "Wenn ich Zeit habe, würde ich... (خلط Indikativ مع Konjunktiv)", right: "Wenn ich Zeit hätte, würde ich...", whyAr: "هذا أشهر خطأ في B1: تُخلط صيغة الواقع في جملة الشرط. «لو كان عندي وقت» افتراض غير واقعي، فيجب أن يدخل الفعل في صيغة Konjunktiv II (hätte) لا المضارع (habe). القاعدة العملية: إذا صحّ في العربية أن تسبق الجملة بـ«لو»، فالفعل الألماني يلزمه Konjunktiv II — والشرط hätte سببٌ منطقي لجوابه würde." },
        { wrong: "Ich würde gehen nach Deutschland.", right: "Ich würde nach Deutschland gehen.", whyAr: "ترتيب الجملة الألمانية يضع الفعل المُصرَّف (würde) في المرتبة الثانية، ثم المكمّلات (nach Deutschland)، ثم المصدر في آخر الجملة. هذا هو نفس القوس (Satzklammer) الذي تعلّمته مع الأفعال المنفصلة وحروف الجر: القوس يُطبق المصدر في النهاية، وعلى المتعلّم العربي أن يعتاد على تعليق المصدر إلى النهاية بدل متابعة الجملة على ترتيبها العربي." },
        { wrong: "würde أم werde؟", right: "werde = سأ... (إخبار عن المستقبل). würde = كنت سأ... (افتراض أو تأدب)", whyAr: "الحرفان يتشابهان لكن المفارقة حادة: Ich werde kommen تعهّد واقعي («سآتي»)، وIch würde kommen افتراض («كنت سآتي لو...») وقد لا يقع أبداً. ولذلك من يكتب werde في موضع würde يُفهم أنه يُخبر عن واقع — وهو عكس ما يقصد. الفاصل العملي: إن أمكن في العربية أن تقول «كنت سأ» فهي würde، وإن قلت «سوف» فهي werde." },
      ],
      relatedRuleComparison: {
        title: "würde أم würde + gern؟",
        content: "Ich würde gern... = أودّ (مؤدب). Ich würde... = كنت سأفعل (افتراض). أضف gern للرغبة المهذبة.",
      },
    },
    {
      id: "t2",
      titleAr: "Konjunktiv II: الافتراضات والرغبات",
      titleDe: "Konjunktiv II: Wünsche und Hypothesen",
      explanationAr:
        "بعد أن عرفت würde مع المصدر، ننتقل إلى الصيغ الخاصة التي تُستعمل بلا würde. الفعلان haben وsein والأفعال الناقصة (können · müssen · dürfen · sollen · mögen) لها صيغة شرطية محفوظة تُبنى من زمن الماضي البسيط (Präteritum) مع علامة الأوملاوت (¨): hatte ← hätte · war ← wäre · konnte ← könnte · musste ← müsste · durfte ← dürfte · sollte تبقى sollte.\n\nولا يُجمع بين الصيغتين: لا تقل Wenn ich Zeit haben würde بل Wenn ich Zeit hätte؛ ولا Wenn ich reich sein würde بل Wenn ich reich wäre. القاعدة: كل فعل له صيغة محفوظة يُستعمل بها، والباقي يأخذ würde + مصدر. ولذلك Ich würde das kaufen صحيحة (kaufen ليس له صيغة شرطية خاصة على ألسنة الناس)، أما Ich würde Zeit haben فثقيلة وغير مستحسنة.\n\nوهذه الصيغ نفسها تخدم وظيفتين: الافتراض (Wenn ich Millionär wäre, würde ich helfen) والتأدب (Könnten Sie bitte das Fenster schließen? · Ich hätte gern eine Tasse Kaffee · Dürfte ich kurz stören?). في الخدمة والعمل، هذه الصيغ هي القاعدة الافتراضية للطلب: كلما زاد الاحتمال، خفّ الطلب، وارتفع الأدب.",
      whyAr:
        "لماذا يوجد صيغتان (würde + مصدر وصيغ محفوظة) وليس واحدة؟ لأن الألمانية القديمة كانت تُصرّف صيغة الشرط لكل فعل، ثم تقلّصت هذه الصيغ عبر القرون مع تغيّر اللغة. الأفعال عالية التكرار (يكون، يملك، يستطيع) قاومت التقلّص، والناس حفظتها كما هي حتى صارت اليوم جزءاً من النظام: هي أسرع وأقصر من würde، وأوضح في الطلبات المهذبة.\n\nلذلك تبدو ألمانية غوته وشيلر غنية بهذه الصيغ (käme، ginge، wüsste) بينما الألمانية اليوم تركتها أو حصرتها في أسلوب رفيع، واكتفت في الكلام اليومي بـ würde مع معظم الأفعال. المتعلّم لا يحتاج إلى كل الصيغ: معرفة الأربعة الشائعة (wäre · hätte · könnte · sollte) تكفي لـ 90% من المواقف، والباقي يُقرأ بالتعرّض للقراءة ثم يُحفظ تدريجياً.\n\nومن أوجه الحكمة في ذلك أن الصيغة المحفوظة لا تحمل التقاء ثلاث حركات (haben würde) فتنطق الجملة أنعم وأسرع. ومن ثمة تُعطي المفاضلة نفعاً حقيقياً في الكلام الطبيعي وليس في القاعدة وحدها: هي أداة أسلوب لا عقبة نحوية.",
      table: {
        title: "صيغ Konjunktiv II الأساسية",
        columns: ["الفعل", "Präteritum", "Konjunktiv II", "مثال"],
        rows: [
          { label: "haben", cells: ["hatte", "hätte", "Ich hätte gern Zeit."] },
          { label: "sein", cells: ["war", "wäre", "Wenn ich reich wäre..."] },
          { label: "können", cells: ["konnte", "könnte", "Könnten Sie mir helfen?"] },
          { label: "werden", cells: ["wurde", "würde", "Ich würde gern kommen."] },
          { label: "أفعال أخرى", cells: ["—", "würde + مصدر", "Ich würde das kaufen."] },
        ],
      },
      examples: [
        { de: "Ich würde gern mehr reisen.", ar: "أود السفر أكثر." },
        { de: "Dürfte ich Sie kurz etwas fragen?", ar: "هل تسمح لي أن أسألكم شيئاً باختصار؟" }, { de: "Wenn ich Millionär wäre, würde ich helfen.", ar: "لو كنت مليونيراً لساعدت." }, { de: "Wenn ich mehr Zeit hätte, würde ich Spanisch lernen.", ar: "لو كان لديّ وقت أكثر، لتعلمت الإسبانية." }, { de: "Könnten Sie bitte das Fenster schließen?", ar: "هل يمكنكم إغلاق النافذة من فضلكم؟" }, { de: "An deiner Stelle würde ich mit dem Chef sprechen.", ar: "لو كنت مكانك لتحدثت مع المدير." }
      ],
      comparisonWithArabic:
        "العربية تبني الافتراض بـ«لو... لَـ...» وتُبقي الفعل ماضياً في الشرطين: «لو كان عندي مال لتصدّقت». لا يوجد في الفعل العربي شكل خاص يميّز الواقع من الافتراض — سياق «لو» هو كل شيء، ولذلك يمكن للعربية أن تُهمل الأداة أحياناً في الفصحى الحديثة استناداً إلى القرينة.\n\nالألمانية تحتاج علامة صرفية لا يمكن حذفها: hätte لا habe، wäre لا bin. والنتيجة العملية أنك إن نسيت الصيغة فسيفهم المخاطب أنك تُخبر عن واقع — ومن ثمة ينقلب المعنى. لاحظ كم أن الاختلاف دقيق مع haben: Ich hätte gern ein Auto (أودّ سيارة — حلم/طلب) مقابل Ich habe ein Auto (عندي سيارة — واقع). الحرفان واسطة الدلالة كلها، وهذا نفس منطق «لو» العربية لكن الوظيفة منقولة من الأداة إلى الفعل.\n\nأما الأمر الثاني فالعربية تملك كذلك صيغاً مهذبة مثل «هل يمكنك أن تتكرم» أو «تكرّماً منك»، وهي عبارات مفردة لا نظام صرفي. الألمانية تجعلها داخلة في الفعل: Könnten Sie helfen? وWären Sie so freundlich? صيغتان مبنيتان من الشرط، فصار الأدب جزءاً من الصرف نفسه لا زينة أعلى الجملة.",
      eselsbruecke: "احفظ ثلاثة أعمدة شائعة: hätte وwäre وkönnte. ومع معظم الأفعال الأخرى استعمل würde + مصدر. صيغ أخرى مثل käme وwüsste لا يتناولها هذا الدرس.",
      commonMistakes: [
        { wrong: "Wenn ich Zeit haben würde, würde ich kommen.", right: "Wenn ich Zeit hätte, würde ich kommen.", whyAr: "مع haben وsein والأفعال الناقصة تُستعمل الصيغة الصرفية المباشرة، ولا يُجمع würde مع haben في جملة الشرط." },
        { wrong: "Ich wünsche, ich habe mehr Geld.", right: "Ich wünsche, ich hätte mehr Geld.", whyAr: "التمني فعل يخالف الواقع بحكم تعريفه: أنت لا تُخبر عما عندك، بل عما تتمنى أن يكون. والألمانية لا تقبل أن يوضع في هذا القالب فعل واقعي، فيلزمه Konjunktiv II دائماً. لاحظ الموضع بعد الفاصلة: الجملة التابعة تأخذ الصيغة الشرطية وتتأخر الفعل الأخير — ولم يُحذف الفاعل ich." },
        { wrong: "Wenn ich reich wäre, ich würde reisen.", right: "Wenn ich reich wäre, würde ich reisen.", whyAr: "هذا خطأ ترتيب لا خطأ صيغة. عندما تبدأ الجملة بالمكوّن الشرطي (Wenn...) تشغل الفاصلة المرتبة النهائية للجملة الأولى، فيبقى للجملة الثانية مرتبة أولى مطلوبة: الفعل أولاً ثم الفاعل. فترتيب «ich würde» يكرّر الفاعل في المرتبة الأولى ويُربك البنية الألمانية؛ الصواب أن يتبع الفعل مباشرة بعد الفاصلة: würde ich reisen. القاعدة تُطبَّق في كل الشرطية، لا هنا فقط." },
      ],
      relatedRuleComparison: {
        title: "Konjunktiv II أم Imperativ؟",
        content: "الأمر المباشر Schließen Sie das Fenster! صحيح لكنه حادّ. أما Könnten Sie das Fenster schließen? فهو الصيغة المهذبة المعتادة في الخدمة والعمل. Konjunktiv II هنا أداة تأدّب لا افتراض.",
      },
    },
  ];
