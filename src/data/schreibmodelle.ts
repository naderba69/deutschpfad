/**
 * ═══════════════════════════════════════════════════════════
 *  نماذج الكتابة B2 (Schreibmodelle) — Goethe-Zertifikat B2
 *  كل موضوع: Forumsbeitrag + رسالة رسمية بمستوى «جيد» ومستوى «ممتاز»
 *  مع شرح بنية كل فقرة — ليتعلم المتعلم الهيكل قبل المحتوى.
 *  — أضيفت ضمن اقتراحات المرحلة النهائية (أولوية شهادة B2) —
 * ═══════════════════════════════════════════════════════════
 */

export interface SchreibModell {
  id: string;
  /** الموضوع (كما في الامتحان) */
  topicDe: string;
  topicAr: string;
  /** ما يُطلب في الامتحان */
  aufgabe: string;
  aufgabeAr: string;
  /** نموذج Forumsbeitrag (المهمة 1) */
  forum: {
    level: "gut" | "sehr-gut";
    title: string;
    paragraphs: { heading: string; de: string; ar: string; note: string }[];
  }[];
  /** نموذج الرسالة الرسمية (المهمة 2) */
  email: {
    level: "gut" | "sehr-gut";
    title: string;
    paragraphs: { heading: string; de: string; ar: string; note: string }[];
  }[];
}

export const SCHREIB_MODELLE: SchreibModell[] = [
  {
    id: "sm-1",
    topicDe: "Gesundes Leben: Sport und Ernährung",
    topicAr: "الحياة الصحية: الرياضة والتغذية",
    aufgabe:
      "Sie schreiben in einem Internetforum. Ein Nutzer schreibt: „Ich möchte gesünder leben, aber ich habe keine Zeit für Sport und keine Lust auf gesundes Essen.“ Äußern Sie Ihre Meinung, geben Sie Ratschläge und nennen Sie ein Beispiel.",
    aufgabeAr: "تكتب في منتدى: مستخدم يقول «أريد حياة صحية لكن لا وقت لدي للرياضة ولا رغبة في الطعام الصحي». أبدِ رأيك وقدم نصائح ومثالاً.",
    forum: [
      {
        level: "gut",
        title: "نموذج جيد (Gut)",
        paragraphs: [
          { heading: "مقدمة", de: "Ich habe den Beitrag gelesen und möchte dazu meine Meinung sagen. Das Thema Gesundheit ist mir sehr wichtig.", ar: "قرأت المشاركة وأود إبداء رأيي. موضوع الصحة مهم جداً بالنسبة لي.", note: "افتتاح مباشر يثبت أنك قرأت المشاركة." },
          { heading: "رأي + تعليل", de: "Meiner Meinung nach ist gesundes Leben nicht nur eine Frage der Zeit, sondern der Gewohnheiten. Man muss nicht jeden Tag Sport treiben, aber man sollte sich regelmäßig bewegen.", ar: "في رأيي الحياة الصحية ليست مسألة وقت بل عادات. لا يجب ممارسة الرياضة يومياً، لكن ينبغي الحركة بانتظام.", note: "رأي + تعليل بسيط." },
          { heading: "نصيحة + مثال", de: "Ich empfehle, mit kleinen Schritten zu beginnen. Zum Beispiel kann man statt des Aufzugs die Treppe nehmen oder nach dem Essen einen Spaziergang machen. Auch beim Essen hilft es, mehr Obst und Gemüse zu kaufen.", ar: "أنصح بالبدء بخطوات صغيرة. مثلاً بدل المصعد استخدم الدرج أو تمشَّ بعد الأكل. وفي الطعام يساعد شراء المزيد من الفواكه والخضار.", note: "نصيحة بمثالين واقعيين." },
          { heading: "خاتمة", de: "Zusammenfassend denke ich, dass jeder gesünder leben kann, wenn er kleine Ziele setzt. Man sollte nicht zu streng mit sich sein.", ar: "خلاصةً أعتقد أن كل شخص يستطيع عيش حياة صحية إذا وضع أهدافاً صغيرة. لا ينبغي أن يكون المرء قاسياً مع نفسه.", note: "خاتمة تلخص وتلطّف." },
        ],
      },
      {
        level: "sehr-gut",
        title: "نموذج ممتاز (Sehr gut)",
        paragraphs: [
          { heading: "مقدمة", de: "Ich habe den Beitrag von „Max“ gelesen und kann seine Situation gut verstehen. Viele Menschen möchten etwas ändern, aber der Alltag macht es schwer.", ar: "قرأت مشاركة «ماكس» وأتفهم وضعه. كثيرون يريدون التغيير لكن الحياة اليومية تعقّد الأمر.", note: "تفاعل مع الكاتب بالاسم — علامة قراءة حقيقية." },
          { heading: "رأي معقد", de: "Meiner Ansicht nach liegt das Problem weniger an der Zeit als an der Motivation. Entscheidend ist, dass man sich realistische Ziele setzt und den Fortschritt sichtbar macht, zum Beispiel mit einer App oder einer kleinen Tabelle.", ar: "في رأيي المشكلة أقل في الوقت وأكثر في الدافعية. المهم وضع أهداف واقعية وإظهار التقدم، مثلاً بتطبيق أو جدول صغير.", note: "رأي غير مبتذل + آلية عملية (App)." },
          { heading: "نصيحة + مثال", de: "Ich würde empfehlen, das Sportprogramm in den Alltag zu integrieren, statt extra Zeit zu suchen. Nehmen wir das Beispiel des Radfahrens: Wer mit dem Rad zur Arbeit fährt, trainiert täglich ohne zusätzliche Zeit. Auch bei der Ernährung gilt: Die Umstellung gelingt schrittweise, nicht von heute auf morgen.", ar: "أنصح بدمج البرنامج الرياضي في الحياة اليومية بدل البحث عن وقت إضافي. لنأخذ مثال ركوب الدراجة: من يركبها للعمل يتدرب يومياً دون وقت إضافي. وفي التغذية أيضاً: التحول ينجح تدريجياً لا فجأة.", note: "مثال موسّع + تنويع لغوي (gilt, gelingt)." },
          { heading: "خاتمة", de: "Zusammenfassend lässt sich sagen, dass Gesundheit kein Luxus ist, sondern eine Frage der Prioritäten. Wer sich selbst wichtig nimmt, findet Wege – auch ohne viel Zeit.", ar: "خلاصةً يمكن القول إن الصحة ليست رفاهية بل مسألة أولويات. من يهتم بنفسه يجد طرقاً — حتى دون وقت كثير.", note: "خاتمة قوية بعبارة إبداعية (Prioritäten)." },
        ],
      },
    ],
    email: [
      {
        level: "gut",
        title: "نموذج جيد (Gut)",
        paragraphs: [
          { heading: "التحية", de: "Sehr geehrte Damen und Herren,", ar: "حضرات السيدات والسادة،", note: "التحية الرسمية الصحيحة بلا اسم." },
          { heading: "السبب", de: "ich schreibe Ihnen, weil ich mich über die lange Lieferzeit beschweren möchte. Ich habe am 1. Mai eine Lampe bestellt, aber bis heute nicht erhalten.", ar: "أكتب إليكم لأنني أريد الشكوى من طول مدة التوصيل. طلبت مصباحاً في الأول من مايو ولم أستلمه حتى اليوم.", note: "سبب الكتابة + تفاصيل دقيقة (التاريخ والمنتج)." },
          { heading: "الطلب", de: "Ich bitte Sie höflich, mir mitzuteilen, wann die Lieferung eintrifft. Außerdem erwarte ich eine Rückmeldung innerhalb von fünf Tagen.", ar: "أطلب منكم بأدب إخباري بموعد وصول الشحنة. وأتوقع رداً خلال خمسة أيام.", note: "طلب واضح + مهلة زمنية." },
          { heading: "الخاتمة", de: "Vielen Dank für Ihr Verständnis. Mit freundlichen Grüßen,", ar: "شكراً لتفهمكم. مع أطيب التحيات،", note: "شكر + خاتمة رسمية إلزامية." },
        ],
      },
      {
        level: "sehr-gut",
        title: "نموذج ممتاز (Sehr gut)",
        paragraphs: [
          { heading: "التحية", de: "Sehr geehrte Damen und Herren,", ar: "حضرات السيدات والسادة،", note: "نفس التحية — الصيغة الوحيدة المقبولة." },
          { heading: "السبب + السياق", de: "mit großem Bedauern muss ich mich an Sie wenden: Die Bestellung Nr. 4521 vom 1. Mai ist bis heute nicht bei mir angekommen, obwohl die Lieferzeit laut Website zwei Wochen beträgt.", ar: "بأسف كبير أتوجه إليكم: الطلب رقم 4521 المؤرخ في 1 مايو لم يصلني حتى اليوم رغم أن مدة التوصيل حسب الموقع أسبوعان.", note: "Bedauern + رقم الطلب + مرجعية الموقع — احترافية." },
          { heading: "الأثر + الطلب", de: "Da ich die Lampe für einen Umzug benötige, bin ich auf eine schnelle Lösung angewiesen. Ich wäre Ihnen dankbar, wenn Sie die Lieferung beschleunigen oder mir eine alternative anbieten würden.", ar: "وبما أنني أحتاج المصباح لعملية انتقال، فأنا مضطر لحل سريع. سأكون ممتناً لو سرّعتم التوصيل أو عرضتم بديلاً.", note: "تأثير شخصي + طلب ببديل (Konjunktiv II)." },
          { heading: "الخاتمة", de: "Ich freue mich auf Ihre baldige Antwort und hoffe auf eine zufriedenstellende Lösung. Mit freundlichen Grüßen,", ar: "أتطلع لردكم القريب وأرجو حلاً مرضياً. مع أطيب التحيات،", note: "خاتمة مهذبة بأمل بالحل." },
        ],
      },
    ],
  },
  {
    id: "sm-2",
    topicDe: "Digitalisierung an Schulen",
    topicAr: "الرقمنة في المدارس",
    aufgabe:
      "Ein Forum diskutiert: „Sollen Schulen komplett auf digitale Geräte umsteigen?“ Nehmen Sie Stellung, nennen Sie Vor- und Nachteile und geben Sie Ihre Meinung.",
    aufgabeAr: "منتدى يناقش: «هل يجب أن تتحول المدارس كلياً إلى الأجهزة الرقمية؟» وضّح موقفك واذكر المزايا والعيوب وأبدِ رأيك.",
    forum: [
      {
        level: "gut",
        title: "نموذج جيد (Gut)",
        paragraphs: [
          { heading: "مقدمة", de: "Ich habe die Diskussion verfolgt und finde sie sehr interessant. Die Digitalisierung ist ein wichtiges Thema für die Schule von morgen.", ar: "تابعت النقاش وأجده ممتعاً جداً. الرقمنة موضوع مهم لمدرسة الغد.", note: "افتتاح + أهمية الموضوع." },
          { heading: "مزايا", de: "Einerseits bieten digitale Geräte viele Vorteile: Sie machen den Unterricht abwechslungsreicher und ermöglichen individuelles Lernen. Außerdem bereiten sie die Schüler auf die Arbeitswelt vor.", ar: "من ناحية تقدم الأجهزة الرقمية مزايا كثيرة: تجعل الدرس أكثر تنوعاً وتتيح تعلماً فردياً. كما تهيئ الطلاب لعالم العمل.", note: "مزايا بإحدى أداتي الربط." },
          { heading: "عيوب", de: "Andererseits gibt es auch Nachteile. Zum Beispiel können Kinder leichter abgelenkt werden. Auch die Kosten für die Familien sind ein Problem.", ar: "ومن ناحية أخرى توجد عيوب. مثلاً يسهل تشتيت انتباه الأطفال. كما أن التكاليف على العائلات مشكلة.", note: "عيوب بإحدى الأداتين + مثال." },
          { heading: "خاتمة", de: "Meiner Meinung nach ist eine Mischung am besten: digitale Geräte als Ergänzung, aber nicht als Ersatz für alles.", ar: "في رأيي المزيج هو الأفضل: أجهزة رقمية كإضافة، لا كبديل عن كل شيء.", note: "موقف واضح في النهاية." },
        ],
      },
      {
        level: "sehr-gut",
        title: "نموذج ممتاز (Sehr gut)",
        paragraphs: [
          { heading: "مقدمة", de: "Die Frage nach der Digitalisierung der Schulen spaltet die Gesellschaft – und das zu Recht, denn sie berührt Bildung, Chancengleichheit und die Zukunft der Arbeitswelt zugleich.", ar: "سؤال رقمنة المدارس يشق المجتمع — وبحق، لأنه يمس التعليم وتكافؤ الفرص ومستقبل عالم العمل معاً.", note: "افتتاح تحليلي (spaltet, berührt... zugleich)." },
          { heading: "مزايا معمقة", de: "Befürworter argumentieren, dass digitale Medien das Lernen individualisieren und den Zugang zu Wissen demokratisieren. Tatsächlich können Lern-Apps sich dem Tempo jedes Schülers anpassen – ein entscheidender Vorteil gegenüber dem Frontalunterricht.", ar: "يرى المؤيدون أن الوسائط الرقمية تخصّص التعلم وتديمقرط الوصول للمعرفة. فعلاً تستطيع تطبيقات التعلم التكيف مع سرعة كل طالب — ميزة حاسمة مقابل التعليم الإلقائي.", note: "نقل آراء (argumentieren) + تفصيل عملي." },
          { heading: "عيوب معمقة", de: "Kritiker weisen jedoch zu Recht darauf hin, dass nicht alle Familien die nötige Ausstattung besitzen. Die Gefahr ist groß, dass die Digitalisierung die Kluft zwischen Arm und Reich vergrößert, statt sie zu schließen.", ar: "لكن النقاد يشيرون بحق إلى أن ليست كل العائلات تملك التجهيزات اللازمة. الخطر كبير في أن تزيد الرقمنة الهوة بين الغني والفقير بدل تقليصها.", note: "نقل آراء مع حجة اجتماعية قوية (Kluft)." },
          { heading: "خاتمة", de: "Abschließend plädiere ich für einen Mittelweg: Technik als Werkzeug, aber Investitionen zuerst in die Ausbildung der Lehrkräfte und die Ausstattung aller Schulen. Nur so bleibt die Digitalisierung gerecht.", ar: "ختاماً أدعو لطريق وسط: التقنية أداة، لكن الاستثمار أولاً في تأهيل المعلمين وتجهيز كل المدارس. فقط هكذا تبقى الرقمنة عادلة.", note: "موقف + حل منصف + كلمة ختامية (gerecht)." },
        ],
      },
    ],
    email: [
      {
        level: "gut",
        title: "نموذج جيد (Gut)",
        paragraphs: [
          { heading: "التحية", de: "Sehr geehrte Damen und Herren,", ar: "حضرات السيدات والسادة،", note: "التحية الرسمية." },
          { heading: "السبب", de: "ich schreibe Ihnen, weil ich mich für Ihren Deutschkurs anmelden möchte. Ich habe Ihre Website gesehen und interessiere mich für den B2-Kurs im September.", ar: "أكتب إليكم لأنني أريد التسجيل في دورة اللغة الألمانية. رأيت موقعكم وأهتم بدورة B2 في سبتمبر.", note: "سبب + تفاصيل الدورة." },
          { heading: "الأسئلة", de: "Könnten Sie mir bitte mitteilen, wann der Kurs beginnt und was er kostet? Außerdem möchte ich wissen, ob es einen Einstufungstest gibt.", ar: "هل يمكنكم إخباري متى تبدأ الدورة وما تكلفتها؟ وأريد أيضاً معرفة ما إذا كان هناك اختبار تحديد مستوى.", note: "سؤالان واضحان بأدب (Könnten Sie...)." },
          { heading: "الخاتمة", de: "Ich bedanke mich im Voraus für Ihre Antwort. Mit freundlichen Grüßen,", ar: "أشكركم مسبقاً على ردكم. مع أطيب التحيات،", note: "شكر مسبق + خاتمة." },
        ],
      },
      {
        level: "sehr-gut",
        title: "نموذج ممتاز (Sehr gut)",
        paragraphs: [
          { heading: "التحية", de: "Sehr geehrte Damen und Herren,", ar: "حضرات السيدات والسادة،", note: "التحية الرسمية." },
          { heading: "السبب + التفاصيل", de: "ich wende mich an Sie mit der Bitte um Informationen zu Ihrem Intensivkurs B2, der laut Website im September beginnen soll. Da ich im Januar eine Prüfung ablegen möchte, ist der Zeitrahmen für mich entscheidend.", ar: "أتوجه إليكم بطلب معلومات عن الدورة المكثفة B2 التي يفترض أن تبدأ في سبتمبر حسب الموقع. وبما أنني أريد أداء امتحان في يناير، فالإطار الزمني حاسم بالنسبة لي.", note: "سياق شخصي يبرر الأسئلة." },
          { heading: "الأسئلة", de: "Könnten Sie mir bitte mitteilen, an welchen Tagen und Uhrzeiten der Unterricht stattfindet und ob eine Online-Teilnahme möglich ist? Ferner wäre ich Ihnen dankbar, wenn Sie mir die Kursgebühren und mögliche Ratenzahlung nennen könnten.", ar: "هل يمكنكم إخباري بأيام وساعات الدروس وما إذا كانت المشاركة عبر الإنترنت ممكنة؟ كذلك سأكون ممتناً لو ذكرتم رسوم الدورة وإمكانية التقسيط.", note: "أسئلة موسعة + Konjunktiv II مهذب." },
          { heading: "الخاتمة", de: "Ich würde mich freuen, wenn Sie mir die Unterlagen per E-Mail zusenden könnten, und verbleibe mit freundlichen Grüßen,", ar: "سيسعدني أن ترسلوا لي المستندات بالبريد، وأبقى مع أطيب التحيات،", note: "طلب وثائق + خاتمة راقية." },
        ],
      },
    ],
  },
  {
    id: "sm-3",
    topicDe: "Homeoffice: Vor- und Nachteile",
    topicAr: "العمل عن بُعد: المزايا والعيوب",
    aufgabe:
      "In einem Internetforum diskutieren die Leute über Homeoffice. Schreiben Sie einen Beitrag (mindestens 150 Wörter): Äußern Sie Ihre Meinung, berichten Sie von eigenen Erfahrungen, geben Sie Ratschläge und nennen Sie die Vorteile und Nachteile.",
    aufgabeAr:
      "في منتدى إنترنت يناقش الناس العمل عن بُعد. اكتب مشاركة (150 كلمة على الأقل): أبدِ رأيك، تحدث عن تجربتك، قدم نصائح، واذكر المزايا والعيوب.",
    forum: [
      {
        level: "gut",
        title: "نموذج جيد (Gut) — المهمة 1",
        paragraphs: [
          { heading: "مقدمة", de: "Ich habe den Beitrag gelesen und möchte dazu meine Meinung sagen. Das Thema Homeoffice betrifft inzwischen viele Berufstätige.", ar: "قرأت المشاركة وأود إبداء رأيي. موضوع العمل عن بُعد يمس الآن كثيراً من الموظفين.", note: "افتتاح يثبت أنك قرأت المشاركة." },
          { heading: "مزايا", de: "Ein großer Vorteil ist die Zeitersparnis. Man muss nicht mehr pendeln und kann die gewonnene Zeit für Familie oder Hobbys nutzen. Außerdem arbeitet man oft konzentrierter, weil es weniger Ablenkungen gibt.", ar: "ميزة كبيرة هي توفير الوقت: لا حاجة للتنقل ويمكن استثمار الوقت المكتسب للعائلة أو الهوايات. كما يعمل المرء بتركيز أكبر لقلة المشتتات.", note: "ميزتان مع تعليل." },
          { heading: "عيوب", de: "Andererseits fehlt der persönliche Kontakt zu den Kollegen. Manchmal fühlt man sich isoliert, und die Grenze zwischen Arbeit und Freizeit verschwimmt.", ar: "من ناحية أخرى ينقص التواصل الشخصي مع الزملاء. أحياناً يشعر المرء بالعزلة، ويذوب الحد بين العمل والراحة.", note: "عيبان واقعيان." },
          { heading: "خاتمة + نصيحة", de: "Meiner Meinung nach ist eine Mischung ideal. Ich empfehle, zwei bis drei Tage pro Woche im Büro zu arbeiten und feste Arbeitszeiten einzuhalten. So bleibt man produktiv und sozial verbunden.", ar: "في رأيي المزيج مثالي. أنصح بالعمل يومين إلى ثلاثة في المكتب مع التزام بأوقات عمل ثابتة. هكذا يبقى المرء منتجاً ومتواصلاً اجتماعياً.", note: "موقف + نصيحة عملية." },
        ],
      },
      {
        level: "sehr-gut",
        title: "نموذج ممتاز (Sehr gut) — المهمة 1",
        paragraphs: [
          { heading: "مقدمة", de: "Die Debatte über Homeoffice ist mehr als eine Frage der Bequemlichkeit – sie berührt Arbeitskultur, Produktivität und die Vereinbarkeit von Beruf und Familie zugleich.", ar: "الجدل حول العمل عن بُعد أكثر من مجرد مسألة راحة – فهو يمس ثقافة العمل والإنتاجية والتوفيق بين المهنة والعائلة معاً.", note: "افتتاح تحليلي (berührt... zugleich)." },
          { heading: "مزايا معمقة", de: "Befürworter argumentieren, dass Homeoffice nicht nur Zeit spart, sondern auch die Umwelt entlastet, da weniger Pendelverkehr entsteht. Hinzu kommt, dass viele Beschäftigte nachweislich produktiver arbeiten, wenn sie ihre Umgebung selbst gestalten können.", ar: "يرى المؤيدون أن العمل عن بُعد لا يوفر الوقت فحسب، بل يخفف العبء البيئي لانخفاض التنقل. ويزداد إنتاجية الموظفين فعلياً عندما يستطيعون تشكيل بيئتهم بأنفسهم.", note: "حجتان (بيئة + إنتاجية) بنقل الآراء." },
          { heading: "عيوب معمقة", de: "Kritiker weisen jedoch zu Recht auf die sozialen Risiken hin: Ohne den informellen Austausch im Büro leiden Teamgeist und Kreativität. Zudem fehlt es vielen Beschäftigten an der Selbstdisziplin, Arbeit und Freizeit sauber zu trennen.", ar: "لكن النقاد يشيرون بحق إلى المخاطر الاجتماعية: دون التبادل غير الرسمي في المكتب يتضرر روح الفريق والإبداع. كما ينقص كثيرين الانضباط الذاتي للفصل النظيف بين العمل والراحة.", note: "نقل آراء مع حجتين اجتماعيتين." },
          { heading: "خاتمة", de: "Abschließend plädiere ich für ein hybrides Modell mit klaren Regeln: feste Präsenztage für Teamarbeit, aber auch Vertrauen in die Eigenverantwortung der Mitarbeiter. Entscheidend ist nicht der Ort, sondern das Ergebnis.", ar: "ختاماً أدعو لنموذج هجين بقواعد واضحة: أيام حضور ثابتة للعمل الجماعي، وثقة بالمسؤولية الذاتية للموظفين. الحاسم ليس المكان بل النتيجة.", note: "موقف + حل منصف + خلاصة قوية." },
        ],
      },
    ],
    email: [
      {
        level: "gut",
        title: "نموذج جيد (Gut) — المهمة 2",
        paragraphs: [
          { heading: "التحية", de: "Sehr geehrte Damen und Herren,", ar: "حضرات السيدات والسادة،", note: "التحية الرسمية." },
          { heading: "السبب", de: "ich schreibe Ihnen, weil ich mit einer Bestellung unzufrieden bin. Am 3. August habe ich einen Laptop mit der Bestellnummer 123456 bestellt, der leider beschädigt angekommen ist.", ar: "أكتب إليكم لأنني غير راضٍ عن طلب. في 3 أغسطس طلبت حاسوباً محمولاً برقم 123456 وصل مع الأسف تالفاً.", note: "سبب + رقم الطلب + التاريخ." },
          { heading: "الطلب", de: "Ich bitte Sie, mir entweder ein Ersatzgerät zu schicken oder den Kaufbetrag zu erstatten. Ich erwarte Ihre Antwort bis zum 30. August.", ar: "أرجو إرسال جهاز بديل أو استرداد المبلغ. أنتظر ردكم حتى 30 أغسطس.", note: "مطلب واضح + مهلة." },
          { heading: "الخاتمة", de: "Vielen Dank für Ihr Verständnis. Mit freundlichen Grüßen,", ar: "شكراً لتفهمكم. مع أطيب التحيات،", note: "خاتمة مهذبة." },
        ],
      },
      {
        level: "sehr-gut",
        title: "نموذج ممتاز (Sehr gut) — المهمة 2",
        paragraphs: [
          { heading: "التحية", de: "Sehr geehrte Damen und Herren,", ar: "حضرات السيدات والسادة،", note: "التحية الرسمية." },
          { heading: "السبب + التفاصيل", de: "mit großem Bedauern muss ich Ihnen mitteilen, dass der von mir am 3. August bestellte Laptop (Bestellnummer 123456) gestern in beschädigtem Zustand eingetroffen ist. Der Bildschirm weist einen Riss auf, und das Gerät lässt sich nicht einschalten.", ar: "بأسف كبير لا بد أن أعلمكم أن الحاسوب الذي طلبته في 3 أغسطس (رقم الطلب 123456) وصل أمس بحالة تالفة: الشاشة فيها شرخ والجهاز لا يعمل.", note: "تفاصيل دقيقة ترفع المصداقية." },
          { heading: "الطلب الرسمي", de: "Ich fordere Sie daher auf, mir binnen zwei Wochen ein Ersatzgerät zu liefern oder den vollen Kaufbetrag zu erstatten. Sollte ich keine Rückmeldung erhalten, sehe ich mich gezwungen, rechtliche Schritte einzuleiten.", ar: "لذلك أطالبكم بتسليم جهاز بديل خلال أسبوعين أو استرداد المبلغ كاملاً. إذا لم أتلق رداً، سأضطر لاتخاذ إجراءات قانونية.", note: "طلب رسمي (auffordern) + مهلة + عواقب مهذبة." },
          { heading: "الخاتمة", de: "Ich bitte um zeitnahe Bearbeitung meines Anliegens und verbleibe mit freundlichen Grüßen,", ar: "أرجو معالجة سريعة لطلبي وأبقى مع أطيب التحيات،", note: "خاتمة رسمية." },
        ],
      },
    ],
  },
];

/** كل المواضيع كعنوان للعرض */
export const SCHREIB_TOPICS = SCHREIB_MODELLE.map((m) => m.topicDe);
export const TOTAL_SCHREIB_MODELLE = SCHREIB_MODELLE.length;
