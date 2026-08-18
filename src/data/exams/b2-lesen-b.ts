/**
 * ═══════════════════════════════════════════════════════════
 *  بنك القراءة B2 — النموذج الثاني (متنوع: لا تكرار مع النموذج الأول)
 *  Lesen: 5 أجزاء · 30 سؤالاً · 100 نقطة
 *   المواضيع: الاستدامة اليومية، العمل التطوعي، الهواتف للأطفال،
 *   السكن المشترك (WG)، قواعد نادٍ رياضي.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const B2_LESEN_B: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — 6 نصوص/8 عناوين (10 د) ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurztexte zuordnen",
    titleAr: "الجزء 1 — مطابقة النصوص القصيرة",
    minutes: 10,
    points: 6,
    kind: "zuordnung",
    introAr:
      "في منتدى بيئي كتب 6 أشخاص عن «كيف أعيش أكثر استدامة». أي عنوان يناسب أي نص؟ كل عنوان يُستخدم مرة واحدة فقط.",
    categories: [
      { id: "c1", de: "Weniger Fleisch essen", ar: "تقليل اللحوم" },
      { id: "c2", de: "Plastik vermeiden", ar: "تجنب البلاستيك" },
      { id: "c3", de: "Mit dem Fahrrad zur Arbeit", ar: "الدراجة للعمل" },
      { id: "c4", de: "Energie sparen zu Hause", ar: "توفير الطاقة في المنزل" },
      { id: "c5", de: "Secondhand kaufen", ar: "شراء مستعمل" },
      { id: "c6", de: "Eigenes Gemüse anbauen", ar: "زراعة الخضار ذاتياً" },
      { id: "c7", de: "Öffentliche Verkehrsmittel nutzen", ar: "استخدام النقل العام" },
      { id: "c8", de: "Wasser sparen", ar: "توفير الماء" },
    ],
    allowRepeat: false,
    items: [
      {
        id: "t1-1",
        de: "Seit einem Jahr kaufe ich mein Gemüse nicht mehr im Supermarkt. Auf meinem Balkon wachsen Tomaten, Paprika und Kräuter. Es schmeckt besser und ich weiß genau, was drin ist. Im Winter ist es schwieriger, aber dann kaufe ich regional ein.",
        categoryId: "c6",
      },
      {
        id: "t1-2",
        de: "Ich habe meinen alten Benzinauto verkauft und fahre jetzt jeden Tag mit dem Rad zur Arbeit. Die Strecke ist 12 Kilometer, aber ich bin schneller als mit dem Auto, weil ich nicht im Stau stehe. Und ich bin fitter als früher.",
        categoryId: "c3",
      },
      {
        id: "t1-3",
        de: "Mein Sohn wollte zum Geburtstag ein neues Smartphone. Stattdessen habe ich ein fast neues gebrauchtes Gerät gekauft – für die Hälfte des Preises. Er war erst enttäuscht, jetzt ist er zufrieden. Warum immer alles neu kaufen?",
        categoryId: "c5",
      },
      {
        id: "t1-4",
        de: "In meiner Familie essen wir jetzt nur noch zweimal pro Woche Fleisch. Am Anfang war es schwer, aber mit den richtigen Rezepten schmeckt es genauso gut. Wir fühlen uns gesünder und geben weniger Geld aus.",
        categoryId: "c1",
      },
      {
        id: "t1-5",
        de: "Ich habe angefangen, beim Einkaufen auf Verpackungen zu achten. Ich nehme immer Stoffbeutel mit und kaufe Obst und Gemüse lose. Meine Küchenschränke sind jetzt voll mit Glasbehältern statt Plastikdosen.",
        categoryId: "c2",
      },
      {
        id: "t1-6",
        de: "Wir haben unsere Heizung gedrosselt und ziehen im Winter einen Pullover an. Außerdem haben wir LED-Lampen eingebaut und schalten Geräte komplett aus, statt sie im Standby zu lassen. Die Stromrechnung ist um 30 Prozent gesunken.",
        categoryId: "c4",
      },
    ],
  },

  /* ═══════════ Teil 2 — مقال + 6 MCQ (18 د) ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Artikel mit Multiple Choice",
    titleAr: "الجزء 2 — مقال مع اختيار من متعدد",
    minutes: 18,
    points: 6,
    kind: "mcq",
    introAr:
      "تقرأ مقالاً من صحيفة عن «العمل التطوعي». اختر الإجابة الصحيحة لكل سؤال (خيار واحد فقط).",
    text: "Freiwilligenarbeit: Engagement mit Zukunft\n\nIn Deutschland engagieren sich rund 29 Millionen Menschen ehrenamtlich – in Vereinen, bei der Feuerwehr, in der Flüchtlingshilfe oder im Umweltschutz. Doch die Art des Engagements verändert sich grundlegend. Während ältere Generationen jahrzehntelang in ein und derselben Organisation blieben, wollen jüngere Menschen flexibel und projektbezogen helfen.\n\nStudien zeigen, dass diese Entwicklung keineswegs auf mangelndes Interesse zurückzuführen ist. Im Gegenteil: Das Interesse an gesellschaftlichen Fragen war selten so hoch wie heute. Entscheidend ist vielmehr die Art der Einbindung. Viele junge Erwachsene haben beruflich und familiär wenig Zeit für feste wöchentliche Verpflichtungen. Sie suchen deshalb Angebote, die zeitlich begrenzt sind und sich mit ihrem Alltag vereinbaren lassen.\n\nEin weiterer Trend ist die Digitalisierung des Ehrenamts. Online-Plattformen vermitteln Helfer an Projekte in ihrer Nähe – vom Einkaufsservice für Senioren bis zur Nachhilfe für Kinder. Die Hemmschwelle sinkt, weil man sich unverbindlich informieren und flexibel entscheiden kann. Kritiker warnen jedoch, dass digitale Vermittlung die langfristige Bindung an Vereine schwächt, die auf verlässliche Mitglieder angewiesen sind.\n\nExperten empfehlen daher eine Mischung: Kurzfristige Projekte als Einstieg, langfristige Verantwortung als Ziel. Vereine müssen lernen, flexible Angebote zu schaffen und Ehrenamtliche gut zu betreuen – etwa durch Schulungen und Anerkennung. Denn eins ist klar: Ohne das Engagement Freiwilliger würden viele Bereiche des öffentlichen Lebens zusammenbrechen, von der Jugendarbeit bis zur Pflege.",
    textAr:
      "يتطوع في ألمانيا نحو 29 مليون شخص – في الجمعيات، الإطفاء، مساعدة اللاجئين أو حماية البيئة. لكن طبيعة التطوع تتغير جذرياً: بينما بقي الجيل الأكبر عشرات السنين في نفس المنظمة، يريد الأصغر مساعدة مرنة ومشروعية. تُظهر الدراسات أن هذا ليس بسبب قلة الاهتمام بل طريقة الاندماج: كثير من الشباب لا يملكون وقتاً لالتزامات أسبوعية ثابتة، فهم يبحثون عن عروض محدودة زمنياً. اتجاه آخر هو رقمنة التطوع: منصات الإنترنت تربط المتطوعين بمشاريع قريبة – من خدمة التسوق لكبار السن إلى الدروس الخصوصية. لكن النقاد يحذرون من أن الوساطة الرقمية تضعف الارتباط طويل المدى بالجمعيات التي تحتاج أعضاء موثوقين. لذلك يوصي الخبراء بمزيج: مشاريع قصيرة كمدخل ومسؤولية طويلة كهدف، وأن تتعلم الجمعيات خلق عروض مرنة ورعاية المتطوعين بالتدريب والتقدير.",
    questions: [
      { id: "t2-q1", q: "Wie viele Menschen engagieren sich in Deutschland ehrenamtlich?", qAr: "كم شخصاً يتطوع في ألمانيا؟", options: ["29 Millionen", "9 Millionen", "2 Millionen", "90 Millionen"], correct: 0, whyAr: "النص: rund 29 Millionen Menschen ehrenamtlich." },
      { id: "t2-q2", q: "Was wollen jüngere Menschen beim Engagement?", qAr: "ماذا يريد الأصغر سناً في التطوع؟", options: ["Jahrzehntelang in einer Organisation bleiben", "Flexibel und projektbezogen helfen", "Nur im Sommer helfen", "Keine Verantwortung übernehmen"], correct: 1, whyAr: "النص: wollen jüngere Menschen flexibel und projektbezogen helfen." },
      { id: "t2-q3", q: "Warum engagieren sich junge Erwachsene seltener langfristig?", qAr: "لماذا يتطوع الشباب طويل المدى بشكل أقل؟", options: ["Sie haben kein Interesse", "Sie haben wenig Zeit für feste Verpflichtungen", "Sie finden keine Projekte", "Sie lehnen Technik ab"], correct: 1, whyAr: "النص: beruflich und familiär wenig Zeit für feste wöchentliche Verpflichtungen." },
      { id: "t2-q4", q: "Was ist ein Vorteil der digitalen Vermittlung?", qAr: "ما ميزة الوساطة الرقمية؟", options: ["Sie ist teurer", "Die Hemmschwelle sinkt", "Sie ersetzt Vereine", "Sie ist nur für Senioren"], correct: 1, whyAr: "النص: Die Hemmschwelle sinkt, weil man sich unverbindlich informieren kann." },
      { id: "t2-q5", q: "Was kritisieren Kritiker an der digitalen Vermittlung?", qAr: "بماذا ينتقد النقاد الوساطة الرقمية؟", options: ["Sie kostet zu viel", "Sie schwächt die Bindung an Vereine", "Sie ist zu langsam", "Sie ist unfair"], correct: 1, whyAr: "النص: digitale Vermittlung die langfristige Bindung an Vereine schwächt." },
      { id: "t2-q6", q: "Was empfehlen Experten den Vereinen?", qAr: "بماذا يوصي الخبراء الجمعيات؟", options: ["Nur langfristige Mitglieder aufnehmen", "Flexible Angebote schaffen und Ehrenamtliche betreuen", "Keine neuen Mitglieder aufnehmen", "Digitale Vermittlung verbieten"], correct: 1, whyAr: "النص: Vereine müssen lernen, flexible Angebote zu schaffen und Ehrenamtliche gut zu betreuen." },
    ],
  },

  /* ═══════════ Teil 3 — فقرات ناقصة (12 د) ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Kommentar mit Lücken",
    titleAr: "الجزء 3 — تعليق بفراغات",
    minutes: 12,
    points: 6,
    kind: "gap",
    introAr:
      "تقرأ تعليقاً من صحيفة عن «الهواتف الذكية للأطفال». أكمل الفراغات (1-6) بجمل من القائمة (A-H). جملتان زائدتان لا تناسبان أي فراغ.",
    text: "Sollten Kinder Smartphones besitzen?\n\nKaum eine Frage spaltet Eltern so sehr wie die nach dem ersten eigenen Smartphone. {0} Die Geräte ermöglichen es Kindern, mit Freunden zu kommunizieren und sich in der digitalen Welt zurechtzufinden. {1} Viele Eltern berichten, dass ihr Kind ohne das Gerät sozial ausgegrenzt wird.\n\nDennoch warnen Psychologen vor einer zu frühen Nutzung. {2} Das kindliche Gehirn ist besonders anfällig für die ständige Reizüberflutung durch kurze Videos und Spiele. {3} Studien zeigen, dass Kinder, die vor dem Schlafengehen aufs Handy schauen, deutlich schlechter schlafen.\n\nExperten empfehlen deshalb klare Regeln statt Verbote. {4} Eine feste Bildschirmzeit und handyfreie Zonen wie das Schlafzimmer helfen, den Umgang zu strukturieren. {5} Entscheidend ist, dass Eltern selbst ein gutes Vorbild sind – wer selbst ständig am Handy hängt, kann von seinem Kind keine andere Haltung erwarten.\n\nLetztlich gibt es keine allgemeingültige Antwort. {6} Wichtig ist, dass die Entscheidung gemeinsam mit dem Kind getroffen wird und dass man Regeln regelmäßig überprüft und anpasst.",
    textAr:
      "قليل من الأسئلة تفرّق الآباء مثل سؤال أول هاتف ذكي للطفل. فالأجهزة تمكن الأطفال من التواصل مع الأصدقاء والتنقل في العالم الرقمي. ويشير كثير من الآباء إلى أن طفلهم يُستبعد اجتماعياً بدونه. ومع ذلك يحذر علماء النفس من الاستخدام المبكر: دماغ الطفل معرض بشكل خاص للفيض الحسي من الفيديوهات والألعاب القصيرة. وتُظهر الدراسات أن الأطفال الذين ينظرون إلى الهاتف قبل النوم ينامون أسوأ بوضوح. لذلك يوصي الخبراء بقواعد واضحة بدل المنع: وقت شاشة ثابت ومناطق خالية من الهاتف مثل غرفة النوم تساعد على تنظيم الاستخدام. والمهم أن يكون الوالدان قدوة حسنة – فمن يلتصق بالهاتف بنفسه لا يستطيع توقع موقف مختلف من طفله. في النهاية لا توجد إجابة عامة: المهم اتخاذ القرار معاً مع الطفل ومراجعة القواعد وتعديلها بانتظام.",
    gap: {
      textWithGaps:
        "Kaum eine Frage spaltet Eltern so sehr wie die nach dem ersten eigenen Smartphone. {0} Die Geräte ermöglichen es Kindern, mit Freunden zu kommunizieren und sich in der digitalen Welt zurechtzufinden. {1} Viele Eltern berichten, dass ihr Kind ohne das Gerät sozial ausgegrenzt wird.\n\nDennoch warnen Psychologen vor einer zu frühen Nutzung. {2} Das kindliche Gehirn ist besonders anfällig für die ständige Reizüberflutung durch kurze Videos und Spiele. {3} Studien zeigen, dass Kinder, die vor dem Schlafengehen aufs Handy schauen, deutlich schlechter schlafen.\n\nExperten empfehlen deshalb klare Regeln statt Verbote. {4} Eine feste Bildschirmzeit und handyfreie Zonen wie das Schlafzimmer helfen, den Umgang zu strukturieren. {5} Entscheidend ist, dass Eltern selbst ein gutes Vorbild sind – wer selbst ständig am Handy hängt, kann von seinem Kind keine andere Haltung erwarten.\n\nLetztlich gibt es keine allgemeingültige Antwort. {6} Wichtig ist, dass die Entscheidung gemeinsam mit dem Kind getroffen wird und dass man Regeln regelmäßig überprüft und anpasst.",
      sentenceBank: [
        { id: "a", de: "Doch die Kritik an der frühen Digitalisierung ist laut geworden." },
        { id: "b", de: "Die Vorteile liegen auf der Hand." },
        { id: "c", de: "Sie verpassen sonst den Anschluss an die Klassengemeinschaft." },
        { id: "d", de: "Die Smartphone-Hersteller gewinnen damit neue Kunden." },
        { id: "e", de: "Dazu kommt die Belastung durch soziale Netzwerke und den Vergleich mit anderen." },
        { id: "f", de: "Auch sollte man das Kind in die Regeln einbeziehen." },
        { id: "g", de: "Verbote allein führen oft zu heimlicher Nutzung." },
        { id: "h", de: "Viele Eltern kaufen das Gerät nur, weil sie Angst haben." },
      ],
      gapOrder: ["b", "c", "e", "g", "f", "a"],
    },
  },

  /* ═══════════ Teil 4 — 4 مواقف + 8 عبارات (10 د) ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Positionen zuordnen",
    titleAr: "الجزء 4 — نسبة المواقف",
    minutes: 10,
    points: 8,
    kind: "zuordnung",
    introAr:
      "أربعة أشخاص يكتبون في منتدى عن «السكن المشترك (WG)». أي عبارة (8 عبارات) تنسب لأي شخص؟ الشخص يمكن اختياره أكثر من مرة.",
    categories: [
      { id: "p1", de: "Person A: Julia (22, Studentin)", ar: "جوليا — طالبة" },
      { id: "p2", de: "Person B: Karim (30, Softwareentwickler)", ar: "كريم — مطور برمجيات" },
      { id: "p3", de: "Person C: Frau Dr. Weber (55, Lehrerin)", ar: "الدكتورة فيبر — مدرّسة" },
      { id: "p4", de: "Person D: Tom (19, Auszubildender)", ar: "توم — متدرب" },
    ],
    allowRepeat: true,
    items: [
      { id: "t4-1", de: "Ich lebe seit fünf Jahren in einer WG und kann mir nichts anderes vorstellen. Man ist nie allein, und wenn man Hilfe braucht, ist immer jemand da.", categoryId: "p1" },
      { id: "t4-2", de: "Ich habe allein gewohnt, aber jetzt suche ich eine WG, weil ich nach der Arbeit nicht in eine leere Wohnung kommen möchte. Allerdings brauche ich meine Ruhe zum Programmieren.", categoryId: "p2" },
      { id: "t4-3", de: "Nach meiner Scheidung wohne ich zum ersten Mal wieder mit anderen zusammen. Es ist eine Umstellung, aber die jungen Leute bringen frischen Wind in mein Leben.", categoryId: "p3" },
      { id: "t4-4", de: "Für mich ist die WG vor allem eine finanzielle Frage. Eine eigene Wohnung kann ich mir mit meiner Ausbildungsvergütung nicht leisten.", categoryId: "p4" },
      { id: "t4-5", de: "Ich schätze die gemeinsamen Abendessen und dass man sich gegenseitig unterstützt – zum Beispiel wenn jemand krank ist oder Prüfungen hat.", categoryId: "p1" },
      { id: "t4-6", de: "Mein Problem ist der Lärm. Ich brauche abends absolute Stille, aber meine Mitbewohner hören gern Musik. Wir haben jetzt feste Ruhezeiten vereinbart.", categoryId: "p2" },
      { id: "t4-7", de: "Ich bringe Erfahrung mit: Ich habe früher selbst Studierende unterrichtet und weiß, wie man mit jungen Menschen umgeht. Das hilft bei Konflikten im Haushalt.", categoryId: "p3" },
      { id: "t4-8", de: "Meine Mitbewohner helfen mir bei den Hausaufgaben für die Berufsschule. Ohne sie hätte ich die Prüfungen nicht geschafft.", categoryId: "p4" },
    ],
  },

  /* ═══════════ Teil 5 — لائحة رسمية + 4 MCQ (15 د) ═══════════ */
  {
    teil: 5,
    title: "Teil 5 — Regeltext mit Multiple Choice",
    titleAr: "الجزء 5 — نص رسمي مع اختيار",
    minutes: 15,
    points: 4,
    kind: "mcq",
    introAr:
      "تقرأ لائحة استخدام «نادي اللياقة البدنية». أجب عن الأسئلة الأربعة حسب اللائحة.",
    text: "Nutzungsordnung Fitnessclub „AktivPark“\n\nLiebe Mitglieder, mit dieser Ordnung möchten wir für einen fairen und sicheren Trainingsbetrieb sorgen.\n\n1. Öffnungszeiten und Zutritt: Der Club ist montags bis freitags von 6 bis 22 Uhr sowie am Wochenende von 8 bis 20 Uhr geöffnet. Der Zutritt erfolgt ausschließlich mit gültiger Mitgliedskarte. Gäste dürfen nur in Begleitung eines Mitglieds und nach Anmeldung an der Rezeption trainieren, maximal drei Besuche pro Monat.\n\n2. Trainingsbereiche: Die Geräte im Kraftbereich dürfen nur nach einer Einweisung durch das Personal benutzt werden. Die Einweisung ist für neue Mitglieder kostenlos und dauert etwa 30 Minuten. Handtücher sind auf allen Geräten Pflicht. Nach dem Training ist jedes Gerät mit dem bereitgestellten Reinigungsspray zu säubern.\n\n3. Kurse: Die Teilnahme an Kursen erfordert eine vorherige Reservierung über die App. Stornierungen sind bis zwei Stunden vor Kursbeginn kostenlos möglich; danach wird ein Unkostenbeitrag von fünf Euro berechnet. Bitte erscheinen Sie spätestens fünf Minuten vor Kursbeginn.\n\n4. Verhalten: Aus Rücksicht auf andere Mitglieder ist das Telefonieren im Trainingsbereich nicht gestattet. Das Filmen und Fotografieren ist aus Datenschutzgründen verboten. Schuhe mit Straßenprofil dürfen im Trainingsbereich nicht getragen werden.\n\n5. Schäden und Haftung: Für verlorene oder beschädigte persönliche Gegenstände übernimmt der Club keine Haftung. Schäden an den Geräten, die durch unsachgemäße Nutzung entstehen, werden dem Verursacher in Rechnung gestellt. Wir wünschen Ihnen ein erfolgreiches Training – Ihr AktivPark-Team.",
    textAr:
      "قواعد نادي اللياقة: مفتوح من الاثنين للجمعة 6-22 وفي عطلة نهاية الأسبوع 8-20. الدخول ببطاقة العضوية فقط، والضيوف بمرافقة عضو وبعد تسجيل (3 زيارات شهرياً كحد أقصى). أجهزة القوة تحتاج إرشاداً من الموظفين (مجاني للمشتركين الجدد، 30 دقيقة). المنشفة إلزامية على كل الأجهزة وتنظيف الجهاز بعد الاستخدام. المشاركة في الحصص تتطلب حجزاً عبر التطبيق، والإلغاء مجاني حتى ساعتين قبل الحصة ثم رسوم 5 يورو. ممنوع الهاتف والتصوير في منطقة التمرين، والأحذية ذات نعل الشارع ممنوعة. النادي غير مسؤول عن الأشياء المفقودة، والأضرار الناتجة عن استخدام غير صحيح تُحمل على المتسبب.",
    questions: [
      { id: "t5-q1", q: "Wann kann ein Gast trainieren?", qAr: "متى يمكن للضيف أن يتدرب؟", options: ["Jederzeit ohne Anmeldung", "Nur mit einem Mitglied und nach Anmeldung", "Nur am Wochenende", "Nur nach Zahlung einer Gebühr"], correct: 1, whyAr: "القاعدة 1: Gäste dürfen nur in Begleitung eines Mitglieds und nach Anmeldung trainieren." },
      { id: "t5-q2", q: "Was muss ein neues Mitglied im Kraftbereich zuerst tun?", qAr: "ماذا يجب على العضو الجديد فعله أولاً في منطقة القوة؟", options: ["Einen Kurs buchen", "Eine Einweisung bekommen", "Ein Handtuch kaufen", "Die App herunterladen"], correct: 1, whyAr: "القاعدة 2: Geräte dürfen nur nach einer Einweisung benutzt werden." },
      { id: "t5-q3", q: "Was passiert bei einer kurzfristigen Stornierung?", qAr: "ماذا يحدث عند إلغاء متأخر؟", options: ["Nichts", "Man zahlt fünf Euro", "Man verliert die Mitgliedschaft", "Man darf keinen Kurs mehr buchen"], correct: 1, whyAr: "القاعدة 3: danach wird ein Unkostenbeitrag von fünf Euro berechnet." },
      { id: "t5-q4", q: "Warum ist das Filmen verboten?", qAr: "لماذا يُمنع التصوير؟", options: ["Aus Datenschutzgründen", "Weil die Geräte teuer sind", "Weil es zu laut ist", "Weil das Personal es nicht mag"], correct: 0, whyAr: "القاعدة 4: Das Filmen ist aus Datenschutzgründen verboten." },
    ],
  },
];
