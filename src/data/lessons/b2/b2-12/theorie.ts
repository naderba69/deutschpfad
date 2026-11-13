/**
 * b2-12 — الشرح النظري (الجزء «theorie»)
 * وحدة «المهن المتقدمة»: Konjunktiv II للفرضيات المهنية، والمبني للمجهول
 * في وثائق التقديم والشهادات.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
  {
    id: "t1",
    titleAr: "صيغة الشرط في التخطيط المهني: الفرضيات والتهذيب",
    titleDe: "Konjunktiv II in der Karriereplanung: Hypothesen und Höflichkeit",
    explanationAr:
      "صيغة الشرط (Konjunktiv II) تُستعمل في السياق المهني لثلاث وظائف رئيسية. أولاً: الفرضيات غير الواقعية عن المستقبل المهني — «Wenn ich die Beförderung bekäme, würde ich mehr Verantwortung übernehmen» (لو حصلت على الترقية، لتوليت مسؤولية أكبر). هنا الشرط غير متحقق بعد، والصيغة تُظهر أن المتحدث يفكر في سيناريو محتمل لا في حقيقة. ثانياً: الرغبات المهذبة — «Ich würde gern in Ihrem Team arbeiten» (أودّ العمل في فريقكم) ألطف وأكثر رسمية من «Ich will in Ihrem Team arbeiten». ثالثاً: الطلبات المهذبة في المقابلات والمراسلات — «Könnten Sie mir mehr über die Position sagen?» (هل يمكنكم إخباري أكثر عن المنصب؟) بدل الأمر المباشر.\n\nتُبنى الصيغة بثلاث طرق رئيسية. الطريقة الأولى: würde + المصدر، وهي الأكثر شيوعاً مع الأفعال الضعيفة والأفعال التي لا يتغير فيها الجذع: ich würde arbeiten، du würdest arbeiten، er würde arbeiten. الطريقة الثانية: صيغة الماضي البسيط (Präteritum) للأفعال القوية مع تحويل حرف العلة (Umlaut) عند الإمكان: ich bekäme (من bekommen)، ich gäbe (من geben)، ich nähme (من nehmen)، ich hätte (من haben)، ich wäre (من sein). الطريقة الثالثة: الأفعال الناقصة (könnte، sollte، dürfte، müsste، wollte، möchte) التي تُستعمل كثيراً في السياق المهني للتهذيب والتخفيف: «Sie sollten Ihre Stärken betonen» (ينبغي أن تبرزوا نقاط قوتكم).\n\nفي التخطيط المهني، تُستخدم صيغة الشرط أيضاً في الجمل الشرطية المختلطة: «Wenn ich damals die Weiterbildung gemacht hätte, wäre ich heute Führungskraft» (لو أتممت التدريب المستمر حينها، لكنت اليوم قائداً). هنا الشرط في الماضي (hätte gemacht) والنتيجة في الحاضر (wäre). هذا التركيب مهم في المقابلات عندما يُسأل المتقدم عن قرارات ماضية: «Was würden Sie anders machen?» (ماذا كنت ستفعل بشكل مختلف؟). والجواب يستخدم الصيغة نفسها: «Ich würde mehr Zeit in die Weiterbildung investieren» (كنت سأستثمر وقتاً أكثر في التدريب المستمر).\n\n",
    whyAr:
      "لماذا تُتقن صيغة الشرط في السياق المهني؟ لأنها أداة التخفيف والتهذيب الأساسية في الألمانية الرسمية: الطلب بـ «Könnten Sie...» يبدو أكثر احتراماً من الأمر المباشر، والرغبة بـ «Ich würde gern...» ألطف من الإعلان بـ «Ich will...». كما أنها لغة الفرضيات المهنية: التحدث عن الترقية المستقبلية والأهداف البعيدة يتطلب صيغة تُظهر أن الأمر محتمل لا مؤكد. ومن يتقنها يبدو أكثر احترافية في المقابلات والمراسلات، لأنه يعبّر عن الطموح دون إلحاح، وعن الرغبة دون فرض.",
    table: {
      title: "صيغة الشرط: würde + المصدر",
      columns: ["الضمير", "würde", "مثال مهني"],
      rows: [
        { label: "ich", cells: ["würde", "Ich würde gern hier arbeiten."] },
        { label: "du", cells: ["würdest", "Du würdest die Stelle bekommen."] },
        { label: "er/sie/es", cells: ["würde", "Er würde mehr Verantwortung übernehmen."] },
        { label: "wir", cells: ["würden", "Wir würden die Weiterbildung machen."] },
        { label: "sie/Sie", cells: ["würden", "Sie würden von der Erfahrung profitieren."] },
      ],
    },
    examples: [
      { de: "Wenn ich die Beförderung bekäme, würde ich mehr Verantwortung übernehmen.", ar: "لو حصلت على الترقية، لتوليت مسؤولية أكبر." },
      { de: "Ich würde gern in Ihrem Team arbeiten.", ar: "أودّ العمل في فريقكم." },
      { de: "Könnten Sie mir mehr über die Position sagen?", ar: "هل يمكنكم إخباري أكثر عن المنصب؟" },
      { de: "Sie sollten Ihre Stärken im Gespräch betonen.", ar: "ينبغي أن تبرزوا نقاط قوتكم في المقابلة." },
      { de: "Was würden Sie in Ihrer Karriere anders machen?", ar: "ماذا كنت ستفعل بشكل مختلف في مسارك المهني؟" },
      { de: "Wenn ich damals die Weiterbildung gemacht hätte, wäre ich heute Führungskraft.", ar: "لو أتممت التدريب المستمر حينها، لكنت اليوم قائداً." },
      { de: "Ich dürfte mich kurz vorstellen.", ar: "هل تسمحون لي بالتعريف بنفسي باختصار؟" },
    ],
    comparisonWithArabic:
      "العربية تستخدم «لو» للفرضيات غير الواقعية («لو حصلت على الترقية») و«أودّ» و«هل يمكنكم» للتهذيب، وهي مقابلات تقريبية لصيغة الشرط الألمانية. لكن الألمانية تمتلك نظاماً صرفياً كاملاً لهذه الصيغة: würde + المصدر للأفعال الضعيفة، وتحويل حرف العلة للأفعال القوية (bekäme من bekommen)، والأفعال الناقصة الخاصة (könnte، sollte). انتبه إلى أن «würde» ليست فعلاً ناقصاً بل أداة بناء، وأن الفعل الرئيسي يأتي في النهاية بالمصدر: «Ich würde gern arbeiten» لا «Ich würde arbeiten gern». كما أن «möchte» (أودّ) هي الصيغة المهذبة الأكثر شيوعاً للرغبة، وهي مشتقة من mögen بصيغة الشرط.",
    eselsbruecke:
      "«würde + المصدر في النهاية»: Ich würde gern arbeiten. و«könnte/sollte» للتهذيب: Könnten Sie mir helfen? و«möchte» للرغبة المهذبة: Ich möchte mich vorstellen.",
    commonMistakes: [
      { wrong: "Ich würde arbeiten gern.", right: "Ich würde gern arbeiten.", whyAr: "المصدر يأتي في نهاية الجملة بعد würde: «Ich würde gern arbeiten» لا «Ich würde arbeiten gern». الترتيب: الفاعل + würde + (gern) + المصدر في النهاية." },
      { wrong: "Ich will in Ihrem Team arbeiten (في طلب مهذب).", right: "Ich würde gern in Ihrem Team arbeiten.", whyAr: "«will» أمر مباشر قد يبدو فظاً في السياق المهني. «würde gern» تخفف الطلب وتجعله مهذباً: «أودّ» لا «أريد»." },
      { wrong: "Wenn ich die Stelle bekomme, würde ich...", right: "Wenn ich die Stelle bekäme, würde ich...", whyAr: "في الجملة الشرطية غير الواقعية، الشرط أيضاً بصيغة الشرط: bekäme (من bekommen) لا bekomme (المضارع). الصيغتان متطابقتان في الزمن غير الواقعي." },
    ],
    relatedRuleComparison: {
      title: "Konjunktiv II أم Konjunktiv I؟",
      content: "Konjunktiv II للفرضيات والرغبات والتهذيب (würde، bekäme)، بينما Konjunktiv I لنقل الكلام غير المباشر (er sagte, er sei krank). في السياق المهني: «Er sagte, er würde die Stelle annehmen» (قال إنه سيقبل المنصب — نقل كلام بصيغة II هنا لأنها تدل على قرار مستقبلي) مقابل «Er sagte, er sei zufrieden» (قال إنه راضٍ — نقل حالة بصيغة I).",
    },
  },
  {
    id: "t2",
    titleAr: "المبني للمجهول في وثائق التقديم والشهادات",
    titleDe: "Das Passiv in Bewerbungsunterlagen und Arbeitszeugnissen",
    explanationAr:
      "المبني للمجهول (Passiv) يُستخدم بكثافة في وثائق التقديم الوظيفي: السيرة الذاتية (Lebenslauf)، وشهادات العمل (Arbeitszeugnis)، وخطابات التوصية. السبب أن هذه الوثائق تركز على الإنجازات والمهام المنجزة لا على الفاعل: «Die Projekte wurden erfolgreich abgeschlossen» (أُنجزت المشاريع بنجاح) بدل «Ich habe die Projekte erfolgreich abgeschlossen» (أنجزت المشاريع بنجاح). الصيغة المجهولة تُظهر الإنجاز كحقيقة موضوعية لا كتباهٍ شخصي، وهو الأسلوب المفضل في الوثائق الرسمية.\n\nيُبنى المبني للمجهول من werden + Partizip II، ويُصرَّف werden بحسب الزمن: المضارع (wird abgeschlossen)، الماضي البسيط (wurde abgeschlossen)، الماضي التام (ist abgeschlossen worden)، والمستقبل (wird abgeschlossen werden). في السيرة الذاتية، يُستخدم المضارع التام غالباً لوصف الإنجازات الماضية: «Das Team wurde von mir geleitet» (قادني الفريق — لا، الصحيح: «Das Team ist von mir geleitet worden»). وفي شهادات العمل، تُستخدم صيغ رسمية ثابتة: «Er wurde mit allen Aufgaben betraut» (كُلّف بجميع المهام)، «Die Leistung wurde von der Geschäftsführung anerkannt» (اعتُرفت الإدارة بالأداء).\n\nيُستعمل المبني للمجهول أيضاً مع الأفعال الناقصة (Modalverben): «Die Unterlagen müssen sorgfältig geprüft werden» (يجب فحص الأوراق بعناية)، «Das Projekt soll bis Juni abgeschlossen werden» (يُفترض إنجاز المشروع بحلول يونيو). هنا يأتي Partizip II في النهاية مع werden في المصدر. ومن البدائل الشائعة للمبني للمجهول في السياق المهني: «sich lassen» (يُترك الشيء يُفعل: «Das lässt sich leicht erklären» — يمكن شرح ذلك بسهولة)، و«man» (يقول المرء: «Man prüft die Unterlagen sorgfältig» — تُفحص الأوراق بعناية)، و«es gibt» (يوجد: «Es gibt viele Möglichkeiten» — توجد فرص كثيرة). اختيار البديل يعتمد على السياق: المجهول للرسمية، وman للعمومية، وsich lassen للسهولة أو الصعوبة.\n\n",
    whyAr:
      "لماذا يُفضَّل المبني للمجهول في وثائق التقديم؟ لأنه يركز على النتيجة والإنجاز لا على الذات: «Die Aufgaben wurden erfüllt» (أُنجزت المهام) تبدو أكثر موضوعية من «Ich habe die Aufgaben erfüllt» (أنجزت المهام). في السيرة الذاتية وشهادات العمل، هذا الأسلوب يُظهر احترافية ويتجنب الانطباع بالتباهي. كما أنه يختصر الجمل: بدل ذكر الفاعل في كل مرة، يُذكر الإنجاز مباشرة. ومن يتقنه يستطيع كتابة وثائق رسمية سليمة تُقرأ باحترام في بيئة العمل الألمانية، حيث تُقدَّر الموضوعية والاختصار.",
    table: {
      title: "المبني للمجهول: werden + Partizip II",
      columns: ["الزمن", "werden", "مثال في وثيقة"],
      rows: [
        { label: "المضارع", cells: ["wird", "Das Projekt wird geleitet."] },
        { label: "الماضي البسيط", cells: ["wurde", "Das Team wurde vergrößert."] },
        { label: "الماضي التام", cells: ["ist ... worden", "Die Aufgaben sind erfüllt worden."] },
        { label: "مع ناقص", cells: ["muss ... werden", "Die Unterlagen müssen geprüft werden."] },
        { label: "المستقبل", cells: ["wird ... werden", "Der Vertrag wird unterschrieben werden."] },
      ],
    },
    examples: [
      { de: "Die Projekte wurden erfolgreich abgeschlossen.", ar: "أُنجزت المشاريع بنجاح." },
      { de: "Er wurde mit allen Aufgaben betraut.", ar: "كُلّف بجميع المهام." },
      { de: "Die Unterlagen müssen sorgfältig geprüft werden.", ar: "يجب فحص الأوراق بعناية." },
      { de: "Das Team ist von mir geleitet worden.", ar: "قادني الفريق (أنا قُدت الفريق)." },
      { de: "Die Leistung wurde von der Geschäftsführung anerkannt.", ar: "اعتُرفت الإدارة بالأداء." },
      { de: "Das Projekt soll bis Juni abgeschlossen werden.", ar: "يُفترض إنجاز المشروع بحلول يونيو." },
      { de: "Das lässt sich leicht erklären.", ar: "يمكن شرح ذلك بسهولة." },
    ],
    comparisonWithArabic:
      "العربية تستخدم المبني للمجهول أيضاً («أُنجزت المشاريع»، «كُلّف بجميع المهام»)، وهو مقابل تقريبي للمبني للمجهول الألماني. لكن الألمانية تبني المجهول بتركيب ثابت: werden + Partizip II، ويُصرَّف werden بحسب الزمن بينما يبقى Partizip II ثابتاً في النهاية. انتبه إلى أن Partizip II في الماضي التام يأتي مع «worden» لا مع Partizip II نفسه: «ist abgeschlossen worden» لا «ist abgeschlossen gewesen». كما أن العربية قد تستخدم «تم» («تم إنجاز المشروع») وهو مقابل وظيفي لـ «wurde abgeschlossen»، لكن الألمانية لا تستخدم «تم» بل تعتمد على werden. ومن الفروق المهمة أن الألمانية تستخدم المجهول بكثافة أكبر في النصوص الرسمية من العربية، حيث تُفضَّل الجملة الفعلية غالباً.",
    eselsbruecke:
      "«werden + Partizip II في النهاية»: Die Projekte wurden abgeschlossen. و«مع الناقص»: müssen ... werden (المصدر في النهاية). و«sich lassen» للسهولة: Das lässt sich machen.",
    commonMistakes: [
      { wrong: "Die Projekte wurden abgeschlossen haben.", right: "Die Projekte sind abgeschlossen worden.", whyAr: "في الماضي التام، يُستخدم «sein + Partizip II + worden»: «sind abgeschlossen worden» لا «wurden abgeschlossen haben». werden تتحول إلى worden في التام." },
      { wrong: "Die Unterlagen müssen geprüft werden haben.", right: "Die Unterlagen müssen geprüft werden.", whyAr: "مع الأفعال الناقصة، يأتي werden في المصدر في النهاية: «müssen geprüft werden» لا «müssen geprüft werden haben». لا يُضاف haben." },
      { wrong: "Das Projekt wurde von mir geleitet werden.", right: "Das Projekt wurde von mir geleitet.", whyAr: "في الماضي البسيط، يكفي «wurde + Partizip II»: «wurde geleitet» لا «wurde geleitet werden». werden الثانية زائدة." },
    ],
    relatedRuleComparison: {
      title: "المبني للمجهول أم man؟",
      content: "«Die Unterlagen werden geprüft» (المجهول — رسمي، يركز على العملية) مقابل «Man prüft die Unterlagen» (man — عام، يركز على الفاعل غير المحدد). في الوثائق الرسمية يُفضَّل المجهول، وفي الكلام اليومي يُستخدم man أكثر. كلاهما صحيح، والاختيار يعتمد على درجة الرسمية المطلوبة.",
    },
  },
];
