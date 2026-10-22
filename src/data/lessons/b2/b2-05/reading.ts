/**
 * b2-05 — نصّ القراءة الممتدّ (الجزء «reading»)
 * أُضيف في المرحلة 5. تقرير عن التواصل: روابط متقدمة (indem/anstatt…zu/ohne…zu/es sei denn/sodass)،
 * جسيمات مشدِّدة في الاقتباسات، وأفعال وظيفية (FVG).
 */
import type { ReadingText } from "@/types/lesson";

export const readingB205: ReadingText = {
  id: "read-b2-05",
  titleDe: "Ein Streit, der eine Abteilung verändert hat",
  titleAr: "خِلافٌ غيّر قسمًا كاملًا",
  textType: "bericht",
  paragraphs: [
    "In einem mittelständischen Betrieb in Kassel hatte sich über Monate ein Streit zwischen zwei Gruppen einer Abteilung aufgebaut. Zuerst ging es nur um Arbeitszeiten, später um alles. Die Stimmung wurde so schlecht, sodass am Ende kaum noch jemand etwas sagte, wenn ein Kollege den Raum betrat. Die Kommunikation zwischen den beiden Gruppen war seit dem Frühjahr gestört, und jede Sitzung endete ohne Ergebnis. Die Leitung erkannte, dass ohne ein geregeltes Gespräch jede Lösung unmöglich war.",
    "Anstatt die beiden Gruppen räumlich zu trennen, entschied sich die Geschäftsleitung für eine andere Möglichkeit. Sie stellte einen externen Vermittler zur Verfügung und zog zusätzlich eine Lösung in Betracht, die bisher niemand gewagt hatte: ein Gespräch, in dem jede Seite eine Stunde lang nur zuhören sollte. Die Regel lautete: ohne Unterbrechung, ohne Bewertung und ohne Zwischenrufe. Niemand musste das eigene Verhalten verteidigen, und niemand durfte das Verhalten der anderen Seite bewerten.",
    "Das Gespräch selbst verlief erstaunlich ruhig. „Das ist ja interessant“, sagte eine Mitarbeiterin, als sie zum ersten Mal hörte, wie ihre eigene Arbeit von der anderen Seite wahrgenommen wurde. „Komm doch mal raus aus deiner Ecke und erzähl uns, was dich geärgert hat“, bat der Vermittler einen der Wortführer. Ein anderer Teilnehmer fragte: „Wie ist das denn eigentlich entstanden?“ — eine Frage, die niemand beantworten konnte, obwohl alle eine Meinung dazu hatten.",
    "Der Vermittler arbeitete nach einem klaren Verfahren. Zuerst ließ er jede Seite drei Punkte aufschreiben, indem er selbst nur mitschrieb und nichts kommentierte. Danach wurden die Punkte verglichen, und manche wurden sofort gestrichen, weil sie sich widersprachen. Es sei denn, eine Seite bestand ausdrücklich auf einem Punkt, wurde weiter gesprochen; je nachdem, wie schnell eine Einigung gelang, wurde ein Punkt vertagt. Auf diese Weise blieb kein Thema liegen, weil kein Thema zu früh bewertet worden war.",
    "Nach vier Sitzungen wurden neue Regeln beschlossen, die im darauf folgenden Monat in Kraft traten. Die Zahl der Beschwerden ging danach langsam zurück, und die beiden Wortführer arbeiten heute wieder in derselben Runde zusammen. Demnach hatte sich der Aufwand gelohnt; folglich entschied die Leitung, dass solche Gespräche künftig bei jedem größeren Konflikt stattfinden sollen. Ein Mitglied der Abteilung brachte seine Überraschung darüber zum Ausdruck, dass ausgerechnet die lauteste Person im Raum am Ende Kompromissbereitschaft zeigte.",
    "Eine Psychologin, die solche Verfahren erforscht, stellt den Erfolg teilweise in Frage. Sie gibt zu, dass ein moderiertes Gespräch viel bewirken kann, weist aber darauf hin, dass es nicht die Ursachen beseitigt, sondern nur die Folgen ordnet. Wer die tieferen Gründe nicht in Betracht zieht, werde in zwei Jahren wieder vor demselben Problem stehen, wohl auch in derselben Runde. Die Beteiligten sehen das anders — und sagen, das Gespräch habe ihnen vor allem eines gezeigt: wie man zuhört, ohne schon zu antworten. Für ihre Darstellung stützt sie sich auf zwanzig vergleichbare Betriebe, und sie empfiehlt jedem, die veröffentlichte Fassung der Regeln zu lesen, bevor er sie unterschreibt.",
  ],
  paragraphsAr: [
    "في شركة متوسطة الحجم في كاسل تراكم خلاف بين مجموعتين من قسم واحد على مدى أشهر. كان الأمر في البداية يدور حول أوقات العمل، ثم صار يدور حول كل شيء. وقد ساء الجوّ إلى حدّ أنه لم يكن أحد يكاد يتكلّم في النهاية عندما يدخل زميل إلى الغرفة. وكان التواصل بين المجموعتين مضطرباً منذ الربيع، وكان كل اجتماع ينتهي بلا نتيجة. وأدركت الإدارة أن أي حلّ يصبح مستحيلاً بلا حوار منظّم.",
    "وبدلاً من فصل المجموعتين مكانياً، اختارت الإدارة طريقاً آخر. فوضعت وسيطاً خارجياً تحت التصرف، وأخذت بعين الاعتبار حلاً لم يجرؤ عليه أحد من قبل: حوارٌ يُصغي فيه كل طرف ساعة كاملة فقط. وكانت القاعدة: بلا مقاطعة، وبلا تقييم، وبلا تعليقات جانبية. فلم يكن على أحد أن يدافع عن سلوكه، ولم يكن لأحد أن يقيّم سلوك الطرف الآخر.",
    "وسار الحوار نفسه هادئاً إلى حدّ مفاجئ. قالت إحدى الموظفات: «هذا مثير للاهتمام حقاً» عندما سمعت للمرة الأولى كيف يرى الطرف الآخر عملها. وطلب الوسيط من أحد المتحدثين: «اخرج من زاويتك وقُل لنا ما أغضبك». وسأل مشارك آخر: «وكيف نشأ هذا الأمر في الحقيقة؟» — سؤال لم يستطع أحد الإجابة عنه وإن كان للجميع رأي فيه.",
    "وكان الوسيط يعمل بإجراء واضح. أولاً جعل كل طرف يكتب ثلاث نقاط، بأن كان يكتب هو نفسه ولا يعلّق على شيء. ثم قُورنت النقاط، وشُطب بعضها فوراً لأنها متناقضة. وإلا إذا أصرّ طرف على نقطة بعينها، استمرّ الحديث فيها؛ وحسبما تسارع التوافق، أُجّلت نقطة. وبذلك لم تبقَ أي مسألة معلّقة، لأن أياً منها لم يُقيَّم مبكراً.",
    "وبعد أربع جلسات تقرّرت قواعد جديدة دخلت حيز التنفيذ في الشهر التالي. وبدأ عدد الشكاوى ينخفض ببطء بعد ذلك، وصار المتحدثان يعملان اليوم في الفريق نفسه مجدداً. وتبعاً لذلك كان الجهد مجدياً؛ وبالتالي قرّرت الإدارة أن تُعقد حوارات كهذه عند كل خلاف كبير في المستقبل. وأعرب أحد أعضاء القسم عن دهشته من أن أكثر شخص صاخب في الغرفة هو من أبدى الاستعداد للتسوية في النهاية.",
    "وتشكّك عالمة نفس تبحث في مثل هذه الإجراءات في النجاح جزئياً. فهي تُقرّ بأن حواراً مُداراً قد يحقق الكثير، لكنها تشير إلى أنه لا يزيل الأسباب وإنما ينظّم النتائج فقط. ومن لا يأخذ الأسباب الأعمق بعين الاعتبار سيجد نفسه بعد سنتين أمام المشكلة نفسها، على الأرجح في الصف نفسه. أما المشاركون فيرون الأمر مختلفاً — ويقولون إن الحوار علّمهم قبل كل شيء شيئاً واحداً: كيف يُصغى دون أن يكون الجواب جاهزاً. وتستند في عرضها إلى عشرين شركةً مماثلة، وتوصي كلَّ مَن يوقّع اللوائح بأن يقرأ النسخة المنشورة منها قبل التوقيع.",
  ],
  glossary: [
    { de: "die Kommunikation", ar: "التواصل", noteAr: "مؤنّثة؛ gestörte Kommunikation (تواصل مضطرب)." },
    { de: "der Streit", ar: "الخلاف، الشجار", noteAr: "مذكّر؛ ein Streit baut sich auf (يتراكم خلاف)." },
    { de: "der Konflikt", ar: "الصراع، النزاع", noteAr: "مذكّر؛ einen Konflikt lösen (يحلّ صراعاً)." },
    { de: "die Abteilung", ar: "القسم (في شركة)", noteAr: "مؤنّثة؛ in einer Abteilung arbeiten." },
    { de: "der Vermittler", ar: "الوسيط", noteAr: "مذكّر؛ die Vermittlerin للمؤنّث." },
    { de: "das Verhalten", ar: "السلوك", noteAr: "محايد؛ sein Verhalten ändern (يغيّر سلوكه)." },
    { de: "die Sitzung", ar: "الجلسة، الاجتماع", noteAr: "مؤنّثة؛ nach vier Sitzungen (بعد أربع جلسات)." },
    { de: "die Beschwerde", ar: "الشكوى", noteAr: "مؤنّثة؛ eine Beschwerde zurückgehen (تتراجع شكوى)." },
    { de: "in Kraft treten", ar: "يدخل حيز التنفيذ", noteAr: "فعل وظيفي (FVG)؛ tritt in Kraft (يدخل حيز التنفيذ)." },
    { de: "in Betracht ziehen", ar: "يأخذ بعين الاعتبار", noteAr: "فعل وظيفي (FVG)؛ etwas in Betracht ziehen." },
    { de: "in Frage stellen", ar: "يشكّك في", noteAr: "فعل وظيفي (FVG)؛ etwas in Frage stellen." },
  ],
  questions: [
    {
      id: "rq1",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Wie wurde die Stimmung in der Abteilung beschrieben?",
      questionAr: "كيف وُصف الجوّ في القسم؟",
      options: [
        "Sie wurde so schlecht, dass kaum noch jemand etwas sagte, wenn ein Kollege den Raum betrat.",
        "Sie blieb über das ganze Jahr hinweg unverändert freundlich, ruhig und offen.",
        "Sie besserte sich von ganz allein und ohne Eingriff schon nach zwei Wochen.",
        "Sie wurde nur ein einziges Mal ganz kurz in der Kaffeepause am Rande erwähnt.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — العكس؛ فالجوّ ساء إلى حدّ الصمت: «Die Stimmung wurde so schlecht, sodass am Ende kaum noch jemand etwas sagte, wenn ein Kollege den Raum betrat».", "لا — التحسّنُ لم يكن ذاتيّاً؛ فقد احتاج وسيطاً من الخارج: «Sie stellte einen externen Vermittler zur Verfügung».", "لا — استراحةُ القهوة لم تُذكر؛ والاضطرابُ تراكم شهوراً: «hatte sich über Monate ein Streit zwischen zwei Gruppen einer Abteilung aufgebaut»."],
      paragraph: 1,
      explanation:
        "الفقرة الأولى تصف التدهور بجملة نتيجة: «Die Stimmung wurde so schlecht, sodass …». والخيارات الأخرى تناقض النصّ، ومنها ما يزعم تحسّناً تلقائياً لم يحدث.",
      errorType: "comprehension",
    },
    {
      id: "rq2",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Wofür entschied sich die Geschäftsleitung?",
      questionAr: "ماذا اختارت الإدارة؟",
      options: [
        "Für ein moderiertes Gespräch, statt die beiden Gruppen zu trennen.",
        "Für die sofortige Entlassung der beiden Wortführer des Teams.",
        "Für eine räumliche Trennung der Gruppen ohne jedes Gespräch.",
        "Für den Einsatz einer ganz neuen Abteilungsleitung im Betrieb.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — الفصلُ الفوريّ لم يُذكر؛ بل إن القائدَين يعملان معاً اليوم: «die beiden Wortführer arbeiten heute wieder in derselben Runde zusammen».", "لا — هذا ما استُبعد صريحاً: «Anstatt die beiden Gruppen räumlich zu trennen, entschied sich die Geschäftsleitung für eine andere Möglichkeit».", "لا — تعيينُ إدارةٍ جديدة للقسم لم يُذكر؛ والحلّ «ein moderiertes Gespräch, statt die beiden Gruppen zu trennen»."],
      paragraph: 2,
      explanation:
        "الفقرة الثانية تفتح بـ«Anstatt die beiden Gruppen räumlich zu trennen, entschied sich die Geschäftsleitung für eine andere Möglichkeit» — وهو البناء الذي يعلّمه الدرس (anstatt … zu).",
      errorType: "comprehension",
    },
    {
      id: "rq3",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Wie arbeitete der Vermittler in den Sitzungen?",
      questionAr: "كيف عمل الوسيط في الجلسات؟",
      options: [
        "Er ließ jede Seite Punkte aufschreiben, ohne selbst zu kommentieren.",
        "Er entschied am Ende allein, welche Seite recht hatte.",
        "Er verbot in der ersten Stunde jedes einzelne Wort der Runde.",
        "Er ließ in den Sitzungen nur die Abteilungsleitung sprechen.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — الحُكمُ المنفرد خلافُ منهجه؛ فقد كان يكتب ولا يعلّق: «indem er selbst nur mitschrieb und nichts kommentierte».", "لا — المنعُ المطلق للكلام لم يُذكر؛ والقاعدةُ منعُ المقاطعة والتقييم لا منعُ الحديث: «ohne Unterbrechung, ohne Bewertung und ohne Zwischenrufe».", "لا — حصرُ الكلام في إدارة القسم لم يُذكر؛ بل كتب كلُّ طرفٍ نقاطه: «Zuerst ließ er jede Seite drei Punkte aufschreiben»."],
      paragraph: 4,
      explanation:
        "الفقرة الرابعة تصف الإجراء: الكتابة بلا تعليق، ثم المقارنة، والتأجيل عند الاختلاف. والخيارات الأخرى تصف إجراءات لم تُذكر، ومنها ما يخالف القاعدة الأساسية (بلا مقاطعة لا بلا كلام).",
      errorType: "comprehension",
    },
    {
      id: "rq4",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Was bezweifelt die Psychologin?",
      questionAr: "ما الذي تشكّك فيه عالمة النفس؟",
      options: [
        "Dass ein solches Gespräch die tieferen Ursachen beseitigt.",
        "Dass in den Sitzungen überhaupt gesprochen wurde.",
        "Dass die neuen Regeln für alle ausgedruckt wurden.",
        "Dass die Beschwerden der Teams gemessen wurden.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — وقوعُ الحديث في الجلسات لم يُشكَّك فيه؛ وشكُّها في أثره: «dass es nicht die Ursachen beseitigt, sondern nur die Folgen ordnet».", "لا — طباعةُ القواعد لم تُذكر أصلاً؛ والمذكور إقرارُها ونفاذُها: «wurden neue Regeln beschlossen, die im darauf folgenden Monat in Kraft traten».", "لا — قياسُ الشكاوى لم يُشكَّك فيه؛ فقد تراجعت فعلاً: «Die Zahl der Beschwerden ging danach langsam zurück»."],
      paragraph: 6,
      explanation:
        "الفقرة الأخيرة تنقل اعتراضها: الحوار ينظّم النتائج ولا يزيل الأسباب، ومن لا يأخذ الأسباب بعين الاعتبار تتكرّر مشكلته. وهي الصيغة نفسها التي يستعملها النصّ (in Betracht ziehen · in Frage stellen).",
      errorType: "comprehension",
    },
  ],
  redemittel: [
    { de: "Die Stimmung wurde so schlecht, sodass …", ar: "ساء الجوّ إلى حدّ أنّ…" },
    { de: "Anstatt … zu …, entschied man sich für …", ar: "بدلاً من أن…، اختير…" },
    { de: "Es sei denn, eine Seite besteht darauf, …", ar: "إلا إذا أصرّ طرف على…" },
    { de: "Demnach hatte sich der Aufwand gelohnt.", ar: "وفقاً لذلك كان الجهد مجدياً." },
    { de: "Folglich entschied die Leitung, dass …", ar: "وبالتالي قرّرت الإدارة أن…" },
  ],
  discussionAr:
    "اعمل مع زميلك على تقرير قصير عن خلاف حقيقي أو متخيَّل بين زميلين في العمل أو في الدراسة: اكتبا خمس فقرات بنفس بنية التقرير — كيف بدأ الخلاف، وما قرّرت الإدارة فعله، وكيف دار الحوار، وما الإجراء الذي اتُّبع، ثم النتيجة. وشرط الأسلوب: استعملا رابطاً واحداً على الأقل من كل نوع (sodass للنتيجة · anstatt … zu للمقابلة · ohne … zu للغياب · es sei denn للاستثناء)، وفعلاً وظيفياً واحداً على الأقل (in Kraft treten · zur Verfügung stellen · in Frage stellen)، وأدخلوا في الاقتباسات جسيمين مشدِّدين (doch · ja · mal · denn)، ثم اقرأا التقرير على مجموعة واسعة السؤال: هل يبدو الحوار المكتوب حواراً حقيقياً أم نشرة رسمية؟",
};
