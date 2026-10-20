/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة القراءة B2 — نصوص إضافية بأسئلة بصيغ الامتحان
 *  (تكملة لـ src/data/reading/library.ts — تركز على B2)
 *  أنواع الأسئلة: MCQ + Richtig/Falsch + فكرة النص
 * ═══════════════════════════════════════════════════════════
 */

export interface B2ReadingText {
  id: string;
  title: string;
  titleDe: string;
  /** نوع النص الأصيل */
  source: "article" | "comment" | "report" | "guide";
  text: string;
  textAr: string;
  /** أسئلة اختيار (بصيغة امتحان) */
  questions: { q: string; qAr: string; options: string[]; correct: number; whyAr: string }[];
  /** مستوى صعوبة 1-3 */
  level: 1 | 2 | 3;
}

export const B2_READING_EXAM: B2ReadingText[] = [
  {
    id: "b2x-1",
    title: "Digitale Privatsphäre",
    titleDe: "Datenschutz im digitalen Zeitalter",
    source: "article",
    level: 2,
    text: "Kaum ein Thema bewegt die Gesellschaft so sehr wie der Schutz persönlicher Daten. Während Tech-Konzerne argumentieren, dass Datensammlung für personalisierte Dienste notwendig sei, fordern Verbraucherschützer mehr Transparenz und Kontrolle. Eine aktuelle Studie zeigt: Über 80 Prozent der Internetnutzer machen sich Sorgen um ihre Daten, aber nur wenige lesen die Datenschutzerklärungen vor dem Klicken auf „Zustimmen“. Diese Lücke zwischen Sorge und Handeln hat mehrere Gründe: Die Texte sind unverständlich, das System der Einwilligung ist komplex, und viele Nutzer fühlen sich ohnmächtig, weil sie ohne Datentausch kaum Dienste nutzen können. Experten fordern deshalb einfachere Erklärungen in Alltagssprache, ein Recht auf Löschung, das tatsächlich funktioniert, und unabhängige Kontrollen. Denn Datenschutz ist kein technisches Detail – er ist eine Frage der Grundrechte.",
    textAr: "قليل من المواضيع تحرك المجتمع مثل حماية البيانات الشخصية. بينما يرى عمالقة التقنية أن جمع البيانات ضروري للخدمات المخصصة، يطالب حماة المستهلك بالمزيد من الشفافية والتحكم. تُظهر دراسة حديثة أن أكثر من 80% من مستخدمي الإنترنت قلقون على بياناتهم، لكن القليلين يقرؤون سياسات الخصوصية قبل الضغط على «موافق». لهذه الفجوة بين القلق والفعل أسباب عدة: النصوص غير مفهومة، نظام الموافقة معقد، وكثير من المستخدمين يشعرون بالعجز لأنهم بالكاد يستطيعون استخدام الخدمات دون تبادل البيانات. لذلك يطالب الخبراء بتفسيرات أبسط بلغة يومية، وحق حقيقي في الحذف، ورقابات مستقلة. فحماية البيانات ليست تفصيلاً تقنياً – بل مسألة حقوق أساسية.",
    questions: [
      { q: "Wie viele Internetnutzer machen sich Sorgen um ihre Daten?", qAr: "كم من مستخدمي الإنترنت قلقون على بياناتهم؟", options: ["Über 80 Prozent", "Etwa 50 Prozent", "Unter 20 Prozent", "Fast alle"], correct: 0, whyAr: "النص: Über 80 Prozent der Internetnutzer machen sich Sorgen." },
      { q: "Warum lesen wenige die Datenschutzerklärungen?", qAr: "لماذا يقرأ القليلون سياسات الخصوصية؟", options: ["Weil sie zu lang und unverständlich sind", "Weil sie sich nicht dafür interessieren", "Weil sie keine Zeit haben", "Weil sie verboten sind"], correct: 0, whyAr: "النص: Die Texte sind unverständlich, das System ist komplex." },
      { q: "Was fordern Experten?", qAr: "بماذا يطالب الخبراء؟", options: ["Mehr Datensammlung", "Einfachere Erklärungen und funktionierendes Löschrecht", "Ein Verbot des Internets", "Weniger Kontrollen"], correct: 1, whyAr: "النص: einfachere Erklärungen in Alltagssprache, ein Recht auf Löschung, unabhängige Kontrollen." },
      { q: "Wie wird Datenschutz im Text charakterisiert?", qAr: "كيف تُوصف حماية البيانات في النص؟", options: ["Als technisches Detail", "Als Frage der Grundrechte", "Als wirtschaftliches Problem", "Als Modeerscheinung"], correct: 1, whyAr: "الخاتمة: Datenschutz ist eine Frage der Grundrechte." },
    ],
  },
  {
    id: "b2x-2",
    title: "Erneuerbare Energien",
    titleDe: "Die Energiewende in Deutschland",
    source: "report",
    level: 2,
    text: "Die Energiewende gilt international als eines der ehrgeizigsten Projekte Deutschlands. Das Ziel: bis 2045 klimaneutral zu werden. Der Ausbau erneuerbarer Energien schreitet voran – Windkraft an der Küste, Solarenergie im Süden, Wasserkraft in den Alpenregionen. 2024 stammten bereits über 55 Prozent des Stroms aus erneuerbaren Quellen. Doch die Herausforderungen sind erheblich. Der Ausbau der Stromnetze hinkt hinterher: Windenergie im Norden muss zu den Industriezentren im Süden transportiert werden, doch Genehmigungsverfahren dauern Jahre. Kritiker bemängeln zudem die hohen Kosten für Verbraucher und die Abhängigkeit von Energieimporten während der Übergangsphase. Befürworter verweisen dagegen auf sinkende Technologiekosten und neue Arbeitsplätze: Allein in der Solar- und Windbranche arbeiten über 400.000 Menschen. Entscheidend werde sein, Speichertechnologien zu fördern, damit Strom auch dann verfügbar ist, wenn die Sonne nicht scheint und der Wind nicht weht.",
    textAr: "يُعد تحول الطاقة دولياً أحد أكثر مشاريع ألمانيا طموحاً. الهدف: الحياد المناخي بحلول 2045. يتقدم توسع الطاقات المتجددة – طاقة الرياح على الساحل، الشمسية في الجنوب، الكهرومائية في مناطق الألب. في 2024 جاء أكثر من 55% من الكهرباء من مصادر متجددة. لكن التحديات كبيرة: توسع شبكات الكهرباء متأخر – رياح الشمال يجب نقلها لمراكز الصناعة في الجنوب، وإجراءات الترخيص تستغرق سنوات. ينتقد المعارضون التكاليف المرتفعة على المستهلك والاعتماد على استيراد الطاقة خلال المرحلة الانتقالية. بينما يشير المؤيدون إلى انخفاض تكاليف التقنية وفرص عمل جديدة: يعمل في قطاعي الشمس والرياح وحدها أكثر من 400 ألف شخص. الحاسم سيكون دعم تقنيات التخزين كي تتوفر الكهرباء حين لا تشرق الشمس ولا تهب الرياح.",
    questions: [
      { q: "Was ist das Ziel der Energiewende?", qAr: "ما هدف تحول الطاقة؟", options: ["Bis 2045 klimaneutral zu werden", "Mehr Kohle zu verbrennen", "Energie zu importieren", "Kernkraft auszubauen"], correct: 0, whyAr: "النص: Das Ziel: bis 2045 klimaneutral zu werden." },
      { q: "Wie viel Strom kam 2024 aus erneuerbaren Quellen?", qAr: "كم كهرباء جاءت من مصادر متجددة عام 2024؟", options: ["Über 55 Prozent", "Unter 30 Prozent", "80 Prozent", "Genau 50 Prozent"], correct: 0, whyAr: "النص: über 55 Prozent des Stroms aus erneuerbaren Quellen." },
      { q: "Welches Problem wird genannt?", qAr: "أي مشكلة تُذكر؟", options: ["Der Ausbau der Stromnetze hinkt hinterher", "Zu viel Solarstrom", "Zu wenige Windräder", "Die Preise sinken zu schnell"], correct: 0, whyAr: "النص: Der Ausbau der Stromnetze hinkt hinterher." },
      { q: "Was ist entscheidend für die Zukunft?", qAr: "ما الحاسم للمستقبل؟", options: ["Speichertechnologien zu fördern", "Mehr Kohlekraftwerke zu bauen", "Energieimporte zu erhöhen", "Den Stromverbrauch zu verdoppeln"], correct: 0, whyAr: "النص: Entscheidend werde sein, Speichertechnologien zu fördern." },
    ],
  },
  {
    id: "b2x-3",
    title: "Work-Life-Balance",
    titleDe: "Die Grenze zwischen Arbeit und Freizeit",
    source: "comment",
    level: 1,
    text: "Die Digitalisierung hat unsere Arbeit flexibler gemacht – und die Grenze zwischen Beruf und Privatleben verschwindet zunehmend. Wer abends noch E-Mails beantwortet oder am Wochenende an Präsentationen arbeitet, kennt das Problem. Arbeitgeber fordern oft Erreichbarkeit, ohne dies vertraglich festzuhalten. Psychologen warnen vor den Folgen: Dauernde Erreichbarkeit führt zu Stress, Schlafproblemen und letztlich zu Burnout. Einige Länder gehen jetzt neue Wege. In Frankreich wurde per Gesetz die Erreichbarkeit außerhalb der Arbeitszeit geregelt, und in Portugal ist es verboten, Mitarbeitern nach Feierabend zu schreiben. Unternehmen, die auf flexible Arbeitszeiten setzen, sollten auch klare Regeln für die Erreichbarkeit definieren. Nur wer sich wirklich erholen kann, arbeitet langfristig produktiv.",
    textAr: "جعلت الرقمنة عملنا أكثر مرونة – ويختفي الحد بين المهنة والخاصة تدريجياً. من يجيب على رسائل المساء أو يعمل في نهاية الأسبوع على عروض تقديمية يعرف المشكلة. أرباب العمل يطالبون غالباً بالتوفر دون نص تشريعي. يحذر علماء النفس من العواقب: التوفر الدائم يؤدي للتوتر ومشاكل النوم والاحتراق في النهاية. بعض الدول تسلك طرقاً جديدة: نظمت فرنسا قانونياً التوفر خارج ساعات العمل، وفي البرتغال يُمنع مراسلة الموظفين بعد انتهاء الدوام. الشركات التي تعتمد ساعات مرنة يجب أن تحدد أيضاً قواعد واضحة للتوفر. فمن يستطيع الراحة فعلاً يعمل بإنتاجية على المدى الطويل.",
    questions: [
      { q: "Welche Folge hat die dauernde Erreichbarkeit?", qAr: "ما عاقبة التوفر الدائم؟", options: ["Stress und Burnout", "Mehr Freizeit", "Bessere Gesundheit", "Weniger Arbeit"], correct: 0, whyAr: "النص: Dauernde Erreichbarkeit führt zu Stress... und letztlich zu Burnout." },
      { q: "Was hat Frankreich geregelt?", qAr: "ماذا نظمت فرنسا؟", options: ["Die Erreichbarkeit außerhalb der Arbeitszeit", "Die Höhe der Löhne", "Den Urlaubsanspruch", "Die Rente"], correct: 0, whyAr: "النص: In Frankreich wurde per Gesetz die Erreichbarkeit außerhalb der Arbeitszeit geregelt." },
      { q: "Was sollten Unternehmen tun?", qAr: "ماذا يجب على الشركات فعله؟", options: ["Klare Regeln für Erreichbarkeit definieren", "Mehr Überstunden verlangen", "Weniger Urlaub geben", "Die Gehälter kürzen"], correct: 0, whyAr: "النص: Unternehmen sollten klare Regeln für die Erreichbarkeit definieren." },
    ],
  },
  {
    id: "b2x-4",
    title: "Migration und Integration",
    titleDe: "Integration durch Sprache",
    source: "report",
    level: 2,
    text: "Sprache gilt als Schlüssel zur Integration. Ohne ausreichende Deutschkenntnisse finden Zugewanderte schwerer Arbeit, Wohnung und Zugang zu Bildung. Integrationskurse, die seit 2005 in Deutschland angeboten werden, kombinieren Sprachunterricht mit Orientierungswissen über Rechtsordnung, Kultur und Geschichte. Die Bilanz ist gemischt. Erfolgreiche Teilnehmer berichten von deutlich besseren Chancen auf dem Arbeitsmarkt. Kritiker bemängeln jedoch lange Wartezeiten auf Kursplätze und die große Zahl der Teilnehmer, die den Kurs ohne Prüfungserfolg verlassen. Studien zeigen außerdem: Der Spracherwerb gelingt am besten, wenn er mit praktischer Erfahrung verbunden ist – etwa durch Praktika, Ehrenamt oder den Kontakt mit deutschen Kollegen. Sprache lernt man nicht nur im Kurs, sondern im Alltag. Experten fordern deshalb, Sprachförderung und Arbeitsmarktintegration stärker zu verzahnen.",
    textAr: "تُعد اللغة مفتاح الاندماج. بدون معرفة كافية بالألمانية يجد الوافدون صعوبة في العمل والسكن والتعليم. تجمع دورات الاندماج المقدمة في ألمانيا منذ 2005 بين تعليم اللغة ومعرفة توجيهية بالنظام القانوني والثقافة والتاريخ. الحصيلة مختلطة: المشاركون الناجحون يذكرون فرصاً أفضل بوضوح في سوق العمل، بينما ينتقد المعارضون فترات الانتظار الطويلة وعدد المشاركين الذين يغادرون الدورة دون نجاح في الامتحان. وتُظهر الدراسات أن اكتساب اللغة ينجح أفضل عندما يقترن بتجربة عملية – كالتدريب أو التطوع أو التواصل مع زملاء ألمان. اللغة لا تُتعلم في الدورة فقط بل في الحياة اليومية. لذلك يطالب الخبراء بربط تعزيز اللغة واندماج سوق العمل بشكل أوثق.",
    questions: [
      { q: "Was kombinieren Integrationskurse?", qAr: "ماذا تجمع دورات الاندماج؟", options: ["Sprachunterricht und Orientierungswissen", "Sport und Musik", "Technik und Informatik", "Handwerk und Landwirtschaft"], correct: 0, whyAr: "النص: kombinieren Sprachunterricht mit Orientierungswissen." },
      { q: "Was bemängeln Kritiker?", qAr: "بماذا ينتقد المعارضون؟", options: ["Lange Wartezeiten und hohe Abbruchquoten", "Zu kurze Kurse", "Zu hohe Gehälter", "Zu wenig Sprachen"], correct: 0, whyAr: "النص: lange Wartezeiten auf Kursplätze und die große Zahl der Teilnehmer, die den Kurs verlassen." },
      { q: "Wann gelingt der Spracherwerb am besten?", qAr: "متى ينجح اكتساب اللغة أكثر؟", options: ["Wenn er mit praktischer Erfahrung verbunden ist", "Wenn man nur im Kurs lernt", "Wenn man isoliert lebt", "Wenn man keine Prüfung macht"], correct: 0, whyAr: "النص: Spracherwerb gelingt am besten, wenn er mit praktischer Erfahrung verbunden ist." },
    ],
  },
  {
    id: "b2x-5",
    title: "Bildungsreform",
    titleDe: "Schulen im Wandel",
    source: "comment",
    level: 2,
    text: "Seit Jahren wird über die Reform des Schulsystems diskutiert. Kritiker des gegliederten Schulsystems – der Aufteilung nach Hauptschule, Realschule und Gymnasium – argumentieren, dass Kinder zu früh getrennt würden und die soziale Herkunft über den Bildungsweg entscheide. Befürworter verteidigen die Differenzierung als Stärke: Schüler könnten ihrem Leistungsniveau entsprechend gefördert werden. Internationale Vergleichsstudien zeigen ein differenziertes Bild. Länder mit gemeinsamen Schulen, wie Finnland oder Kanada, schneiden im Schnitt besser ab und haben weniger Leistungsunterschiede. Allerdings sind die kulturellen Rahmenbedingungen schwer übertragbar. Viele Experten plädieren deshalb nicht für ein Entweder-oder, sondern für mehr Durchlässigkeit: Wechsel zwischen Schulformen sollen leichter möglich sein, und individuelle Förderung sollte in allen Schulen selbstverständlich werden.",
    textAr: "منذ سنوات يُناقش إصلاح النظام المدرسي. يجادل منتقدو النظام المقسم – توزيع الطلاب على مدارس: رئيسية وحقيقية وصالة – بأن الأطفال يُفصلون مبكراً جداً وأن الأصل الاجتماعي يقرر المسار التعليمي. يدافع المؤيدون عن التمايز كقوة: يمكن دعم الطلاب حسب مستواهم. تُظهر الدراسات المقارنة الدولية صورة مختلفة: الدول ذات المدارس المشتركة مثل فنلندا وكندا تتفوق في المتوسط وتقل فيها الفروق في الأداء. لكن الظروف الثقافية يصعب نقلها. لذلك لا يدعو كثير من الخبراء إلى «إما/أو» بل إلى مزيد من المرونة: سهولة الانتقال بين أنواع المدارس، وجعل الدعم الفردي أمراً بديهياً في كل المدارس.",
    questions: [
      { q: "Was kritisieren Gegner des gegliederten Schulsystems?", qAr: "بماذا ينتقد معارضو النظام المقسم؟", options: ["Kinder werden zu früh getrennt", "Die Schulen sind zu teuer", "Es gibt zu viele Lehrer", "Der Unterricht ist zu kurz"], correct: 0, whyAr: "النص: Kinder zu früh getrennt und die soziale Herkunft entscheide." },
      { q: "Welche Länder schneiden besser ab?", qAr: "أي الدول تتفوق؟", options: ["Länder mit gemeinsamen Schulen", "Länder mit getrennten Schulen", "Länder mit Privatschulen", "Länder mit Internaten"], correct: 0, whyAr: "النص: Länder mit gemeinsamen Schulen, wie Finnland oder Kanada, schneiden besser ab." },
      { q: "Was fordern Experten?", qAr: "بماذا يطالب الخبراء؟", options: ["Mehr Durchlässigkeit und individuelle Förderung", "Weniger Schulen", "Nur Gymnasien", "Abschaffung der Schulen"], correct: 0, whyAr: "النص: mehr Durchlässigkeit... individuelle Förderung selbstverständlich." },
    ],
  },
  {
    id: "b2x-6",
    title: "Urbanes Leben",
    titleDe: "Wohnen in der Großstadt",
    source: "report",
    level: 1,
    text: "Großstädte üben eine starke Anziehungskraft aus: Arbeitsplätze, Kultur, Bildung und Vielfalt ziehen Menschen aus aller Welt an. Doch das urbane Leben hat auch Schattenseiten. Wohnraum wird knapp und teuer, der Verkehr nimmt zu, und die Luftqualität leidet. Städteplaner setzen deshalb zunehmend auf nachhaltige Konzepte: autofreie Innenstädte, mehr Grünflächen, Fahrradwege und bezahlbaren Wohnungsbau. Viele Städte haben inzwischen eigene Klimaschutzpläne und fördern gemeinschaftliche Wohnprojekte. Gleichzeitig wächst das Bewusstsein, dass lebenswerte Städte mehr brauchen als Infrastruktur: Sie brauchen Orte der Begegnung – Cafés, Parks, Nachbarschaftszentren –, die das Zusammenleben fördern. Die Zukunft der Stadt entscheidet sich weniger in den Hochhäusern als auf der Straße.",
    textAr: "تمارس المدن الكبرى جاذبية قوية: العمل والثقافة والتعليم والتنوع يجذبون الناس من كل مكان. لكن للحياة الحضرية جوانب مظلمة أيضاً: السكن يندر ويغلو، والمرور يزداد، وجودة الهواء تتدهور. لذلك يعتمد مخططو المدن بشكل متزايد مفاهيم مستدامة: مراكز خالية من السيارات، مزيد من المساحات الخضراء، مسارات دراجات، وبناء سكن ميسور. لدى كثير من المدن خطط مناخية خاصة وتدعم مشاريع سكن مشترك. في الوقت نفسه يزداد الوعي بأن المدن الصالحة للحياة تحتاج أكثر من البنية التحتية: تحتاج أماكن للقاء – مقاهٍ وحدائق ومراكز جوار – تعزز التعايش. مستقبل المدينة يتقرر في الشوارع لا في ناطحات السحاب.",
    questions: [
      { q: "Was zieht Menschen in Großstädte?", qAr: "ما الذي يجذب الناس إلى المدن الكبرى؟", options: ["Arbeitsplätze, Kultur und Bildung", "Ruhige Straßen", "Billige Mieten", "Weniger Verkehr"], correct: 0, whyAr: "النص: Arbeitsplätze, Kultur, Bildung und Vielfalt." },
      { q: "Was setzen Städteplaner zunehmend um?", qAr: "ماذا يطبق مخططو المدن بشكل متزايد؟", options: ["Nachhaltige Konzepte", "Mehr Autobahnen", "Höhere Häuser", "Weniger Parks"], correct: 0, whyAr: "النص: setzen zunehmend auf nachhaltige Konzepte." },
      { q: "Was brauchen lebenswerte Städte laut Text?", qAr: "ماذا تحتاج المدن الصالحة للحياة حسب النص؟", options: ["Orte der Begegnung", "Mehr Hochhäuser", "Nur Infrastruktur", "Weniger Grünflächen"], correct: 0, whyAr: "النص: Sie brauchen Orte der Begegnung." },
    ],
  },
  {
    id: "b2x-7",
    title: "Medienkompetenz",
    titleDe: "Umgang mit Nachrichten im digitalen Zeitalter",
    source: "comment",
    level: 2,
    text: "Noch nie war die Informationsflut so groß wie heute. Soziale Medien, Messengerdienste und 24-Stunden-Nachrichtenkanäle konkurrieren um unsere Aufmerksamkeit. Das Problem: Nicht alles, was viral geht, ist wahr. Falschmeldungen verbreiten sich bis zu sechsmal schneller als wahre Nachrichten, wie eine Studie des MIT zeigt. Medienkompetenz ist deshalb zu einer Grundfertigkeit geworden, vergleichbar mit Lesen und Schreiben. Dazu gehört: Quellen prüfen, Urheber hinterfragen, Bilder verifizieren und sich bewusst zu machen, dass Algorithmen unsere Sicht auf die Welt filtern. Schulen haben in vielen Bundesländern bereits Medienkunde als Unterrichtsfach eingeführt. Doch kritisieren Experten, dass Medienkompetenz nicht nur ein Schulfach sein dürfe – sie müsse als fächerübergreifende Aufgabe verstanden werden, und auch Erwachsene brauchten Angebote zur Weiterbildung.",
    textAr: "لم يكن فيضان المعلومات بهذا الحجم من قبل. تتنافس وسائل التواصل وخدمات المراسلة وقنوات الأخبار على مدار الساعة على انتباهنا. المشكلة: ليس كل ما ينتشر بسرعة صحيحاً. تنتشر الأخبار الكاذبة أسرع بست مرات من الحقيقية، كما تظهر دراسة معهد ماساتشوستس. لذلك أصبحت الكفاءة الإعلامية مهارة أساسية تقارن بالقراءة والكتابة: فحص المصادر، والتساؤل عن الناشر، والتحقق من الصور، وإدراك أن الخوارزميات تصفية رؤيتنا للعالم. أدخلت كثير من الولايات الألمانية مادة التربية الإعلامية في المدارس. لكن الخبراء ينتقدون ألا تكون الكفاءة الإعلامية مادة واحدة فقط – بل مهمة شاملة، وأن يحتاج الكبار أيضاً إلى عروض تدريب مستمر.",
    questions: [
      { q: "Wie schnell verbreiten sich Falschmeldungen?", qAr: "بأي سرعة تنتشر الأخبار الكاذبة؟", options: ["Bis zu sechsmal schneller als wahre Nachrichten", "Gleich schnell", "Langsamer", "Sie verbreiten sich nicht"], correct: 0, whyAr: "النص: Falschmeldungen verbreiten sich bis zu sechsmal schneller." },
      { q: "Was gehört zur Medienkompetenz?", qAr: "ماذا يدخل في الكفاءة الإعلامية؟", options: ["Quellen prüfen und Urheber hinterfragen", "Alles glauben", "Keine Nachrichten lesen", "Nur Videos schauen"], correct: 0, whyAr: "النص: Quellen prüfen, Urheber hinterfragen, Bilder verifizieren." },
      { q: "Was fordern Experten?", qAr: "بماذا يطالب الخبراء؟", options: ["Medienkompetenz fächerübergreifend zu verstehen", "Das Internet zu verbieten", "Nur ein Schulfach zu haben", "Weniger Nachrichten zu senden"], correct: 0, whyAr: "النص: sie müsse als fächerübergreifende Aufgabe verstanden werden." },
    ],
  },
  {
    id: "b2x-8",
    title: "Gesellschaft im Wandel",
    titleDe: "Die alternde Gesellschaft",
    source: "report",
    level: 2,
    text: "Deutschland wird älter: Im Jahr 2030 wird voraussichtlich jeder dritte Einwohner über 60 Jahre alt sein. Diese demografische Entwicklung hat weitreichende Folgen. Das Rentensystem gerät unter Druck, weil immer weniger Erwerbstätige für immer mehr Rentner aufkommen. Der Pflegebereich sucht dringend Fachkräfte, und auch im Gesundheitswesen wächst der Bedarf. Gleichzeitig eröffnet die Alterung Chancen: Ältere Menschen verfügen über Erfahrung und Kompetenzen, die in der Wirtschaft gefragt sind. Immer mehr Unternehmen setzen auf altersgemischte Teams und flexible Arbeitsmodelle, damit Ältere länger arbeiten können. Experten betonen, dass die Gesellschaft von der Generation 60+ profitieren kann, wenn sie als aktive Ressource gesehen wird – im Ehrenamt, in der Bildung oder als Mentoren. Die Frage ist nicht, wie wir das Alter verhindern, sondern wie wir mit ihr gestalten.",
    textAr: "ألمانيا تشيخ: عام 2030 سيكون من المتوقع أن يكون ثلث السكان فوق الستين. لهذا التطور الديموغرافي عواقب بعيدة المدى: نظام التقاعد تحت ضغط لأن العاملين الأقل يغطون المتقاعدين الأكثر. قطاع الرعاية يبحث عن كفاءات، والحاجة تنمو في الصحة أيضاً. في الوقت نفسه تفتح الشيخوخة فرصاً: يملك الكبار خبرة وكفاءات مطلوبة في الاقتصاد. المزيد من الشركات تعتمد فرقاً مختلطة الأعمار ونماذج عمل مرنة كي يستمر الأكبر في العمل. يؤكد الخبراء أن المجتمع يمكن أن يستفيد من جيل الستين فما فوق إذا نُظر إليه كمورد نشط – في التطوع أو التعليم أو الإرشاد. السؤال ليس كيف نمنع الشيخوخة بل كيف نتعامل معها.",
    questions: [
      { q: "Wie alt wird jeder dritte Einwohner 2030 sein?", qAr: "كم سيكون عمر كل ثالث ساكن عام 2030؟", options: ["Über 60 Jahre", "Über 80 Jahre", "Unter 30 Jahre", "Über 50 Jahre"], correct: 0, whyAr: "النص: jeder dritte Einwohner über 60 Jahre alt." },
      { q: "Welche Folge hat die Alterung?", qAr: "ما عاقبة الشيخوخة؟", options: ["Das Rentensystem gerät unter Druck", "Es gibt zu viele Arbeitsplätze", "Die Mieten sinken", "Die Schulen schließen"], correct: 0, whyAr: "النص: Das Rentensystem gerät unter Druck." },
      { q: "Was betonen Experten?", qAr: "بماذا يؤكد الخبراء؟", options: ["Ältere sind eine aktive Ressource", "Ältere sollen früh in Rente", "Das Alter ist zu verhindern", "Ältere brauchen keine Bildung"], correct: 0, whyAr: "النص: Die Generation 60+ kann als aktive Ressource gesehen werden." },
    ],
  },
  {
    id: "b2x-9",
    title: "Konsumverhalten",
    titleDe: "Nachhaltiger Konsum",
    source: "guide",
    level: 1,
    text: "Nachhaltig zu konsumieren bedeutet nicht, auf alles zu verzichten. Es bedeutet, bewusster zu entscheiden. Ein praktischer Einstieg ist die 30-Tage-Regel: Wer etwas kaufen möchte, das nicht dringend gebraucht wird, wartet 30 Tage. Viele Bedürfnisse verschwinden dabei von selbst. Beim Lebensmitteleinkauf helfen saisonale und regionale Produkte, die weniger Transportwege haben. Auch Reparieren statt Wegwerfen wird wieder populär: In vielen Städten gibt es Reparaturcafés, in denen Ehrenamtliche gegen eine kleine Spende defekte Geräte reparieren. Wer diese Prinzipien befolgt, spart nicht nur Geld, sondern reduziert auch Müll und CO2-Emissionen. Entscheidend ist die Haltung: Jeder Kauf ist eine Abstimmung für die Art von Wirtschaft, in der wir leben wollen.",
    textAr: "الاستهلاك المستدام لا يعني التخلي عن كل شيء، بل اتخاذ قرارات أوعى. مدخل عملي هو قاعدة الثلاثين يوماً: من يريد شراء شيء غير ضروري ينتظر 30 يوماً، فتختفي كثير من الحاجات من نفسها. عند شراء الطعام تساعد المنتجات الموسمية والمحلية ذات طرق النقل الأقصر. كما يعود الإصلاح بدل الرمي: في كثير من المدن توجد مقاهي إصلاح يتطوع فيها أشخاص لإصلاح الأجهزة المعطوبة مقابل تبرع صغير. من يتبع هذه المبادئ لا يوفر المال فقط بل يقلل النفايات وانبعاثات ثاني أكسيد الكربون. الحاسم هو الموقف: كل عملية شراء تصويت على نوع الاقتصاد الذي نريد العيش فيه.",
    questions: [
      { q: "Was ist die 30-Tage-Regel?", qAr: "ما قاعدة الثلاثين يوماً؟", options: ["30 Tage warten vor nicht dringenden Käufen", "30 Tage Urlaub machen", "30 Prozent sparen", "30 Artikel kaufen"], correct: 0, whyAr: "النص: Wer etwas kaufen möchte, wartet 30 Tage." },
      { q: "Was passiert in Reparaturcafés?", qAr: "ماذا يحدث في مقاهي الإصلاح؟", options: ["Ehrenamtliche reparieren defekte Geräte", "Man kauft neue Geräte", "Man wirft Geräte weg", "Man lernt Kochen"], correct: 0, whyAr: "النص: Ehrenamtliche reparieren defekte Geräte." },
      { q: "Was ist jeder Kauf laut Text?", qAr: "ما كل عملية شراء حسب النص؟", options: ["Eine Abstimmung für die Wirtschaft", "Ein Verlust", "Eine Pflicht", "Ein Vergnügen"], correct: 0, whyAr: "النص: Jeder Kauf ist eine Abstimmung für die Art von Wirtschaft." },
    ],
  },
  {
    id: "b2x-10",
    title: "Technik und Ethik",
    titleDe: "Künstliche Intelligenz: Chancen und Risiken",
    source: "article",
    level: 3,
    text: "Künstliche Intelligenz verändert unseren Alltag – oft unbemerkt. Empfehlungssysteme schlagen uns Filme vor, Sprachassistenten beantworten Fragen, und Algorithmen entscheiden mit, wer einen Kredit bekommt oder zu einem Vorstellungsgespräch eingeladen wird. Diese Entwicklungen bringen enorme Fortschritte, etwa in der Medizin, wo KI Tumore auf Bildern oft zuverlässiger erkennt als Menschen. Doch sie werfen auch grundlegende ethische Fragen auf: Wie vermeidet man Diskriminierung, wenn Algorithmen mit Daten trainiert werden, die historische Vorurteile enthalten? Wer ist verantwortlich, wenn ein autonomes System eine falsche Entscheidung trifft? Und wie schützt man die Privatsphäre in einer Welt, in der Maschinen fast alles analysieren können? Experten fordern eine KI-Regulierung, die Innovation nicht blockiert, aber Grundrechte schützt. Transparenz der Algorithmen, unabhängige Aufsicht und das Recht auf menschliche Entscheidung gelten dabei als zentrale Prinzipien.",
    textAr: "الذكاء الاصطناعي يغير حياتنا اليومية – غالباً دون أن نلاحظ. أنظمة التوصية تقترح أفلاماً، والمساعدون الصوتيون يجيبون، والخوارزميات تشارك في قرار من يحصل على قرض أو يُدعى لمقابلة. تحقق هذه التطورات تقدماً هائلاً، كالطب حيث يكتشف الذكاء الاصطناعي الأورام في الصور أدق من البشر غالباً. لكنها تثير أيضاً أسئلة أخلاقية أساسية: كيف نتجنب التمييز عندما تُدرَّب الخوارزميات على بيانات تحوي تحيزات تاريخية؟ من المسؤول عندما يقرر نظام مستقل قراراً خاطئاً؟ وكيف نحمي الخصوصية في عالم تستطيع فيه الآلات تحليل كل شيء تقريباً؟ يطالب الخبراء بتنظيم لا يعطل الابتكار لكنه يحمي الحقوق الأساسية: شفافية الخوارزميات، رقابة مستقلة، والحق في قرار بشري تعتبر مبادئ مركزية.",
    questions: [
      { q: "Wo erkennt KI Tumore zuverlässiger als Menschen?", qAr: "أين يكتشف الذكاء الاصطناعي الأورام أدق من البشر؟", options: ["Auf Bildern in der Medizin", "Im Straßenverkehr", "In der Schule", "Im Bankwesen"], correct: 0, whyAr: "النص: in der Medizin, wo KI Tumore auf Bildern oft zuverlässiger erkennt." },
      { q: "Wie entsteht Diskriminierung bei Algorithmen?", qAr: "كيف ينشأ التمييز لدى الخوارزميات؟", options: ["Durch Daten mit historischen Vorurteilen", "Durch zu viel Transparenz", "Durch menschliche Kontrolle", "Durch langsame Rechner"], correct: 0, whyAr: "النص: Algorithmen mit Daten trainiert, die historische Vorurteile enthalten." },
      { q: "Was fordern Experten?", qAr: "بماذا يطالب الخبراء؟", options: ["Regulierung, die Innovation und Grundrechte schützt", "Ein Verbot der KI", "Völlige Freiheit für Algorithmen", "Mehr Datensammlung"], correct: 0, whyAr: "النص: KI-Regulierung, die Innovation nicht blockiert, aber Grundrechte schützt." },
      { q: "Was gilt als zentrales Prinzip?", qAr: "ما المبدأ المركزي؟", options: ["Das Recht auf menschliche Entscheidung", "Schnellere Algorithmen", "Weniger Datenschutz", "Autonome Entscheidungen ohne Kontrolle"], correct: 0, whyAr: "النص: das Recht auf menschliche Entscheidung gilt als zentrales Prinzip." },
    ],
  },
  {
    id: "b2x-11",
    title: "Sprachen lernen im Erwachsenenalter",
    titleDe: "Gehirnjogging durch Fremdsprachen",
    source: "article",
    level: 1,
    text: "Fremdsprachen lernen im Erwachsenenalter ist möglich – und gesund. Neurowissenschaftler haben nachgewiesen, dass das Erlernen einer Sprache das Gehirn trainiert und kognitiven Abbau verlangsamen kann. Zweisprachige Menschen wechseln flexibler zwischen Aufgaben und zeigen bessere Problemlösungsfähigkeiten. Allerdings lernen Erwachsene anders als Kinder: Sie können grammatische Regeln schneller verstehen, haben aber oft Hemmungen beim Sprechen. Erfolgsfaktoren sind Regelmäßigkeit, emotionale Beteiligung und der Mut, Fehler zu machen. Die beste Methode ist die, die man durchhält: ob Sprachkurs, Tandem-Partner oder Lern-App – entscheidend ist die tägliche Praxis. Wer 20 Minuten am Tag lernt, macht mehr Fortschritte als jemand, der einmal pro Woche drei Stunden paukt.",
    textAr: "تعلم اللغات الأجنبية في سن الرشد ممكن – وصحي. أثبت علماء الأعصاب أن تعلم لغة يدرب الدماغ ويبطئ التدهور المعرفي. ثنائيو اللغة ينتقلون بمرونة أكبر بين المهام ويظهرون قدرات أفضل في حل المشاكل. لكن البالغين يتعلمون بشكل مختلف عن الأطفال: يفهمون القواعد أسرع، لكن لديهم غالباً تحفظاً في الكلام. عوامل النجاح: الانتظام، المشاركة العاطفية، والشجاعة لارتكاب الأخطاء. أفضل طريقة هي التي تواظب عليها: سواء كانت دورة أو شريكاً لغوياً أو تطبيقاً – الحاسم هو الممارسة اليومية. من يتعلم 20 دقيقة يومياً يتقدم أكثر ممن يحشر ثلاث ساعات أسبوعياً.",
    questions: [
      { q: "Was hat die Neurowissenschaft nachgewiesen?", qAr: "بماذا أثبت علم الأعصاب؟", options: ["Sprachenlernen trainiert das Gehirn", "Sprachenlernen ist nur für Kinder", "Sprachenlernen schadet dem Gehirn", "Sprachenlernen ist sinnlos"], correct: 0, whyAr: "النص: das Erlernen einer Sprache trainiert das Gehirn." },
      { q: "Wie lernen Erwachsene anders als Kinder?", qAr: "كيف يتعلم البالغون بشكل مختلف عن الأطفال؟", options: ["Sie verstehen Regeln schneller, haben aber Hemmungen beim Sprechen", "Sie lernen langsamer alles", "Sie können nicht mehr lernen", "Sie haben keine Motivation"], correct: 0, whyAr: "النص: Sie können grammatische Regeln schneller verstehen, haben aber Hemmungen beim Sprechen." },
      { q: "Was ist entscheidend für den Erfolg?", qAr: "ما الحاسم للنجاح؟", options: ["Regelmäßigkeit und tägliche Praxis", "Teure Kurse", "Nur im Ausland lernen", "Genetische Faktoren"], correct: 0, whyAr: "النص: entscheidend ist die tägliche Praxis." },
    ],
  },
  {
    id: "b2x-12",
    title: "Ehrenamt",
    titleDe: "Freiwillige Helfer gesucht",
    source: "guide",
    level: 1,
    text: "In vielen Gemeinden werden ehrenamtliche Helfer dringend gesucht: in der Feuerwehr, bei der Tafel, in Jugendzentren oder bei der Nachbarschaftshilfe. Wer sich engagieren möchte, sollte sich zunächst fragen, wo die eigenen Interessen und Fähigkeiten liegen. Für Unsichere gibt es Schnupperangebote: Bei vielen Organisationen kann man ein paar Wochen unverbindlich mitmachen, bevor man sich festlegt. Wichtig ist auch der zeitliche Umfang: Schon zwei Stunden pro Woche können einen großen Unterschied machen. Viele Vereine bieten mittlerweile Schulungen, Versicherungsschutz und Aufwandsentschädigungen an. Und der Lohn ist immateriell, aber spürbar: neue Kontakte, Anerkennung und das Gefühl, etwas Sinnvolles zu tun.",
    textAr: "في كثير من البلديات يُبحث عن متطوعين: في الإطفاء، بنك الطعام، مراكز الشباب أو مساعدة الجوار. من يريد التطوع يجب أن يسأل أولاً عن اهتماماته وقدراته. للمترددين توجد عروض تجريبية: يمكن المشاركة بلا التزام أسابيع قليلة قبل التحديد. المهم أيضاً الحجم الزمني: ساعتان أسبوعياً يمكن أن تصنع فرقاً كبيراً. تقدم كثير من الجمعيات اليوم تدريبات وتأميناً وتعويضات مصاريف. والمكافأة غير مادية لكنها ملموسة: علاقات جديدة، تقدير، وشعور بعمل ذي معنى.",
    questions: [
      { q: "Was sollte man zuerst tun?", qAr: "ماذا يجب فعله أولاً؟", options: ["Sich nach Interessen und Fähigkeiten fragen", "Sofort kündigen", "Geld verlangen", "Alles ablehnen"], correct: 0, whyAr: "النص: sollte sich zunächst fragen, wo die eigenen Interessen liegen." },
      { q: "Was bieten viele Vereine an?", qAr: "بماذا تقدم الجمعيات؟", options: ["Schulungen und Versicherungsschutz", "Hohe Gehälter", "Wohnungen", "Autos"], correct: 0, whyAr: "النص: Schulungen, Versicherungsschutz und Aufwandsentschädigungen." },
      { q: "Was ist der Lohn des Ehrenamts?", qAr: "ما أجر التطوع؟", options: ["Neue Kontakte und Anerkennung", "Geld", "Urlaub", "Rente"], correct: 0, whyAr: "النص: neue Kontakte, Anerkennung und das Gefühl, etwas Sinnvolles zu tun." },
    ],
  },
];

/** الفهارس */
export const B2_READING_SOURCES: { id: string; label: string; de: string }[] = [
  { id: "article", label: "مقال", de: "Artikel" },
  { id: "comment", label: "تعليق", de: "Kommentar" },
  { id: "report", label: "تقرير", de: "Bericht" },
  { id: "guide", label: "دليل عملي", de: "Ratgeber" },
];
