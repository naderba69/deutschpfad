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
        "يُستعمل Konjunktiv II للتعبير عن الافتراض أو الاحتمال أو الرغبة، وقد يُستعمل أيضاً للطلب المهذّب؛ وليس محصوراً في أحداث مستحيلة أو لم تقع. مثال: Ich würde gern reisen (أودّ السفر). أما Ich werde reisen فهي صيغة مستقبل/توقع، ولا تضمن وحدها أن الحدث سيقع فعلاً.\n\nالتركيب الأسهل: würde + المصدر (Infinitiv) في آخر الجملة. الفعل würde يأخذ مكان الفعل الثاني ويُصرَّف مع الفاعل (ich würde · du würdest · er/sie/es würde · wir würden · ihr würdet · sie/Sie würden)، ثم يأتي المصدر في النهاية: Ich würde nach Deutschland reisen. ومتى كانت الجملة شرطية مع wenn، صارت البنية: Wenn ich Zeit hätte, würde ich mehr lesen — الشرط أولاً، ثم الفعل الرئيسي مباشرة بعد الفاصلة.\n\nلكن الألمانية لا تبني كل الأفعال بـ würde: هناك أفعال شائعة لها صيغ Konjunktiv II مختصرة، ومن الشائع: wäre (من sein)، hätte (من haben)، könnte (من können)، وsollte (من sollen). من أمثلتها الطلب المهذب (Könnten Sie...?) والتمني (Ich hätte gern...) والنصيحة (Du solltest...).",
      whyAr:
        "صيغة الفعل تساعد على تمييز الافتراض أو التمني عن الخبر المباشر، لكن المعنى يتحدد أيضاً بالسياق. قارن: Ich habe Zeit (لديّ وقت) وWenn ich Zeit hätte, würde ich mehr lesen (لو كان لديّ وقت لقرأت أكثر). ويظهر Konjunktiv II كذلك في الطلب المهذب، مثل Könnten Sie mir helfen?، لا في الافتراض وحده.\n\nوهذا التمييز يُستخدم عملياً في الأدب: الفرق بين Ich hätte gern einen Kaffee (أودّ قهوة — طلب مؤدب في المقهى) وIch habe einen Kaffee (عندي قهوة — إخبار عن حقيقة) هو الفرق بين اللباقة والتصريح. وكذلك في النصيحة: Du solltest weniger arbeiten (ينبغي أن تعمل أقل) أخفّ كثيراً من Du arbeitest zu viel (أنت تعمل كثيراً). وتوجد في العربية وسائل متعددة للتهذيب مثل «من فضلك» و«لو تكرمت»، كما توجد في الألمانية وسائل متعددة، منها Konjunktiv II. لذا تساعد معرفة هذه الصيغة على فهم بعض الطلبات وصوغها.",
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
        { de: "Ich würde gern nach Deutschland reisen.", ar: "أودّ أن أسافر إلى ألمانيا." },
        { de: "Wenn ich Zeit hätte, würde ich mehr lesen.", ar: "لو كان عندي وقت لقرأت أكثر." },
        { de: "Ich wäre lieber zu Hause geblieben.", ar: "كنت سأفضّل البقاء في البيت." },
        { de: "Könnten Sie das bitte wiederholen?", ar: "هل يمكنكم تكرار ذلك من فضلك؟ (مهذب جداً)" },
        { de: "Du solltest mehr Wasser trinken.", ar: "ينبغي أن تشرب ماءً أكثر." },
        { de: "Wenn ich Zeit hätte, würde ich mehr Zeitungen lesen.", ar: "لو كان عندي وقت لقرأت صحفاً أكثر." },
      ],
      comparisonWithArabic:
        "في مثال شائع، تعبّر العربية عن الافتراض بـ«لو... لـ...»: «لو كان عندي وقت لقرأت أكثر». أما الألمانية فتستعمل صيغة Konjunktiv II، مثل hätte وwürde lesen. وقد تظهر الصيغة من دون جملة شرطية صريحة، مثل Ich hätte gern mehr Zeit (أودّ وقتاً أكثر).\n\nوفي الطلبات، يمكن أن تقابل Könnten Sie mir helfen? عبارة عربية مثل «هل يمكنكم مساعدتي؟». هذا تقارب في وظيفة الطلب المهذب، لا تطابق حرفي بين نظامي اللغتين.",
      eselsbruecke:
        "«würde + المصدر» صيغة شائعة للافتراض، وتُضاف gern للتعبير عن الرغبة؛ ومن الصيغ المختصرة الشائعة wäre وhätte وkönnte.",
      commonMistakes: [
        { wrong: "Wenn ich Zeit habe, würde ich... (في افتراض مخالف للواقع)", right: "Wenn ich Zeit hätte, würde ich...", whyAr: "في هذا المثال المقصود افتراض مخالف للواقع، لذا تلائمه صيغة Konjunktiv II: Wenn ich Zeit hätte, würde ich kommen. لكن المضارع بعد wenn صحيح في شروط واقعية أو محتملة، مثل: Wenn ich Zeit habe, komme ich." },
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
        "بعد أن عرفت würde مع المصدر، ننتقل إلى الصيغ الخاصة التي تُستعمل بلا würde. الفعلان haben وsein والأفعال الناقصة (können · müssen · dürfen · sollen · mögen) لها صيغة شرطية محفوظة تُبنى من زمن الماضي البسيط (Präteritum) مع علامة الأوملاوت (¨): hatte ← hätte · war ← wäre · konnte ← könnte · musste ← müsste · durfte ← dürfte · sollte تبقى sollte.\n\nالأمثلة الشائعة هي Wenn ich Zeit hätte … وWenn ich reich wäre …. ويمكن أيضاً استعمال würde + المصدر مع أفعال كثيرة؛ وتعرض المراجع الصيغتين بديلتين، مع اختلاف محتمل في الشيوع والأسلوب. لذلك فـWenn ich Zeit haben würde تركيب ممكن، لكن الصيغة الموجزة Wenn ich Zeit hätte أشيع في هذا المثال.\n\nوهذه الصيغ نفسها تخدم وظيفتين: الافتراض (Wenn ich Millionär wäre, würde ich helfen) والتأدب (Könnten Sie bitte das Fenster schließen? · Ich hätte gern eine Tasse Kaffee · Dürfte ich kurz stören?). تُستخدم هذه الصيغ أيضاً لصياغة الطلب بأدب؛ ويعتمد الاختيار على الفعل والسياق.",
      whyAr:
        "من المفيد حفظ صيغ شائعة مثل wäre وhätte وkönnte. وتوجد أيضاً صيغ أخرى، بينما يُستعمل würde + المصدر بديلاً شائعاً في مواضع كثيرة. قد يتأثر الاختيار بالفعل والسياق والأسلوب؛ لذلك نتعلم النماذج الأكثر شيوعاً هنا من دون اعتبار البدائل الأخرى خطأً مطلقاً.",
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
        "في هذا المثال، تعبّر العربية عن الافتراض بـ«لو... لـ...»: «لو كان عندي مال لتصدّقت». وفي الألمانية نرى Konjunktiv II في صيغ مثل hätte وwäre، أو في البناء التحليلي würde + المصدر. قارن: Ich hätte gern ein Auto (أودّ سيارة) وIch habe ein Auto (لديّ سيارة)؛ ويعين شكل الفعل والسياق معاً على فهم المقصود.\n\nوللطلب المهذب توجد صيغ عربية وألمانية متعددة. مثال ألماني: Könnten Sie helfen? ويمكن تقريب معناه بـ«هل يمكنكم المساعدة؟»؛ والمقارنة هنا تقريب للوظيفة لا تطابق حرفي بين اللغتين.",
      eselsbruecke: "احفظ ثلاثة أعمدة شائعة: hätte وwäre وkönnte. ومع معظم الأفعال الأخرى استعمل würde + مصدر. صيغ أخرى مثل käme وwüsste لا يتناولها هذا الدرس.",
      commonMistakes: [
        { wrong: "Wenn ich Zeit haben würde, würde ich kommen.", right: "Wenn ich Zeit hätte, würde ich kommen.", whyAr: "الصيغتان ممكنتان؛ اخترنا هنا الصيغة الموجزة والشائعة hätte. لا تقدّم würde + المصدر مع haben بوصفها خطأً نحوياً مطلقاً." },
        { wrong: "Ich wünschte, ich habe mehr Geld.", right: "Ich wünschte, ich hätte mehr Geld.", whyAr: "في هذا التمني الافتراضي نستخدم غالباً hätte. هذا لا يعني أن كل جملة تبدأ بـIch wünsche تتطلب Konjunktiv II؛ فالمعنى والسياق يحددان الصيغة." },
        { wrong: "Wenn ich reich wäre, ich würde reisen.", right: "Wenn ich reich wäre, würde ich reisen.", whyAr: "هذا خطأ ترتيب لا خطأ صيغة. عندما تبدأ الجملة بالمكوّن الشرطي (Wenn...) تشغل الفاصلة المرتبة النهائية للجملة الأولى، فيبقى للجملة الثانية مرتبة أولى مطلوبة: الفعل أولاً ثم الفاعل. فترتيب «ich würde» يكرّر الفاعل في المرتبة الأولى ويُربك البنية الألمانية؛ الصواب أن يتبع الفعل مباشرة بعد الفاصلة: würde ich reisen. القاعدة تُطبَّق في كل الشرطية، لا هنا فقط." },
      ],
      relatedRuleComparison: {
        title: "Konjunktiv II أم Imperativ؟",
        content: "الأمر المباشر Schließen Sie das Fenster! صيغة مباشرة. أما Könnten Sie das Fenster schließen? فهو طلب مصوغ بأدب. في هذا المثال يؤدي Konjunktiv II وظيفة التأدّب لا الافتراض.",
      },
    },
  ];
