/**
 * ═══════════════════════════════════════════════════════════
 *  بنك القراءة B2 — النموذج الثالث
 *  المواضيع: التعلم مدى الحياة، الذكاء الاصطناعي في التعليم،
 *  العمل بدوام جزئي، التنقل الحضري، قواعد مركز الامتحانات.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const B2_LESEN_C: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — 6 نصوص/8 عناوين (10 د) ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurztexte zuordnen",
    titleAr: "الجزء 1 — مطابقة النصوص القصيرة",
    minutes: 10,
    points: 6,
    kind: "zuordnung",
    introAr:
      "في منتدى عن التعليم كتب 6 أشخاص عن تجاربهم في «التعلم مدى الحياة». أي عنوان يناسب أي نص؟ كل عنوان يُستخدم مرة واحدة فقط.",
    categories: [
      { id: "c1", de: "Online-Kurs im neuen Beruf", ar: "دورة عبر الإنترنت لمهنة جديدة" },
      { id: "c2", de: "Sprache durch Fernsehen lernen", ar: "تعلم اللغة عبر التلفاز" },
      { id: "c3", de: "Mit 50 wieder studieren", ar: "العودة للدراسة في الخمسين" },
      { id: "c4", de: "Abendkurs nach der Arbeit", ar: "دورة مسائية بعد العمل" },
      { id: "c5", de: "Autodidakt mit Büchern", ar: "تعلم ذاتي بالكتب" },
      { id: "c6", de: "Handwerk als zweiter Weg", ar: "الحرفة كطريق ثانٍ" },
      { id: "c7", de: "Lernen durch Reisen", ar: "التعلم عبر السفر" },
      { id: "c8", de: "Workshop am Wochenende", ar: "ورشة في نهاية الأسبوع" },
    ],
    allowRepeat: false,
    items: [
      {
        id: "t1-1",
        de: "Nach zehn Jahren im Verkauf habe ich mich umgeschult und mache jetzt eine Ausbildung zum Elektriker. Viele dachten, ich sei zu alt dafür. Aber ich liebe die Arbeit mit den Händen, und die Nachfrage ist riesig.",
        categoryId: "c6",
      },
      {
        id: "t1-2",
        de: "Ich lerne Spanisch, aber nicht im Kurs. Ich schaue jeden Abend eine halbe Stunde spanische Serien mit Untertiteln. Am Anfang habe ich nichts verstanden, jetzt kann ich die meisten Dialoge folgen.",
        categoryId: "c2",
      },
      {
        id: "t1-3",
        de: "Meine Firma hat mir einen Online-Kurs für Datenanalyse bezahlt. Ich mache die Lektionen abends am Küchentisch und kann sie im eigenen Tempo absolvieren. Nächstes Jahr bekomme ich eine neue Position.",
        categoryId: "c1",
      },
      {
        id: "t1-4",
        de: "Ich arbeite Vollzeit, aber dienstags und donnerstags besuche ich einen Abendkurs in Betriebswirtschaft. Es ist anstrengend, aber die Gruppe motiviert mich, und ich sehe, wie sich das Wissen direkt anwenden lässt.",
        categoryId: "c4",
      },
      {
        id: "t1-5",
        de: "Mit 52 habe ich mich für ein Fernstudium eingeschrieben. Meine Kinder haben gelacht, aber jetzt bin ich fast fertig mit dem Bachelor. Man ist nie zu alt, um etwas Neues zu beginnen.",
        categoryId: "c3",
      },
      {
        id: "t1-6",
        de: "Ich habe mir selbst Programmieren beigebracht – nur mit Büchern und Online-Dokumentationen. Ohne Lehrer, ohne Kurs. Es hat zwei Jahre gedauert, aber jetzt arbeite ich als Entwickler.",
        categoryId: "c5",
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
      "تقرأ مقالاً من مجلة علمية عن «الذكاء الاصطناعي في التعليم». اختر الإجابة الصحيحة لكل سؤال.",
    text: "Künstliche Intelligenz im Klassenzimmer\n\nKünstliche Intelligenz (KI) hält zunehmend Einzug in die Schulen – von Lern-Apps, die sich dem Niveau der Schüler anpassen, bis zu Systemen, die Hausaufgaben automatisch korrigieren. Befürworter sehen darin eine Revolution: Jeder Schüler könnte individuell gefördert werden, und Lehrkräfte hätten mehr Zeit für die eigentliche pädagogische Arbeit. Eine Pilotstudie in Nordrhein-Westfalen zeigte, dass Schüler mit adaptiven Lernprogrammen in Mathematik im Schnitt 15 Prozent bessere Ergebnisse erzielten.\n\nDoch die Skepsis ist groß. Datenschützer warnen vor der Erhebung sensibler Schülerdaten. Viele Systeme speichern nicht nur Ergebnisse, sondern auch Verhaltensmuster – ohne dass Eltern genau wissen, was mit diesen Daten geschieht. Lehrergewerkschaften befürchten zudem eine Entwertung des Berufs: Wenn Maschinen korrigieren, verliert die mündliche Rückmeldung an Bedeutung, die für die Entwicklung von Schülern zentral ist.\n\nEin weiteres Problem ist die Ungleichheit. Schulen in wohlhabenden Regionen können sich hochwertige KI-Systeme leisten, während andere auf veraltete Technik angewiesen bleiben. Diese digitale Kluft könnte die Bildungschancen weiter auseinanderdriften lassen.\n\nWissenschaftler empfehlen deshalb einen besonnenen Umgang. KI sollte die Lehrkraft unterstützen, nicht ersetzen – etwa bei der Erstellung von Übungsmaterial oder der Analyse von Lernfortschritten. Entscheidend sei, dass die pädagogische Verantwortung beim Menschen bleibe und dass Schüler lernen, mit KI kritisch umzugehen. Am Ende zähle nicht die Technologie, sondern die Qualität der Beziehung zwischen Lehrenden und Lernenden.",
    textAr:
      "يدخل الذكاء الاصطناعي المدارس بشكل متزايد – من تطبيقات تعلم تتكيف مع مستوى الطالب إلى أنظمة تصحح الواجبات تلقائياً. يرى المؤيدون ثورة: إمكانية دعم كل طالب فردياً وإتاحة وقت أكبر للمعلمين للعمل التربوي الحقيقي. أظهرت دراسة تجريبية في شمال الراين-وستفاليا أن الطلاب الذين استخدموا برامج تكيفية في الرياضيات حصلوا على نتائج أفضل بنسبة 15%. لكن الشك كبير: يحذر خبراء حماية البيانات من جمع بيانات حساسة، وتخزن كثير من الأنظمة أنماط سلوك دون علم دقيق للوالدين. وتخشى نقابات المعلمين من إهدار قيمة المهنة: إذا صححت الآلات، يفقد التعليق الشفهي أهميته المحورية للتطور. مشكلة أخرى هي عدم المساواة: مدارس المناطق الغنية تشتري أنظمة متقدمة بينما يبقى الآخرون على تقنية قديمة، وقد تتسع فجوة الفرص التعليمية. لذلك يوصي العلماء بالتعامل الحذر: الذكاء الاصطناعي يدعم المعلم ولا يحل محله، والمسؤولية التربوية تبقى للإنسان، ويتعلم الطلاب التعامل النقدي معه. في النهاية، المهم جودة العلاقة بين المعلمين والمتعلمين لا التقنية.",
    questions: [
      { id: "t2-q1", q: "Was zeigen die Lern-Apps laut Befürwortern?", qAr: "ماذا تُظهر تطبيقات التعلم حسب المؤيدين؟", options: ["Sie ersetzen die Lehrer", "Sie passen sich dem Niveau der Schüler an", "Sie sind zu teuer", "Sie funktionieren nur zu Hause"], correct: 1, whyAr: "النص: Lern-Apps, die sich dem Niveau der Schüler anpassen." },
      { id: "t2-q2", q: "Welches Ergebnis zeigte die Pilotstudie in NRW?", qAr: "ما نتيجة الدراسة التجريبية في شمال الراين؟", options: ["15 Prozent schlechtere Ergebnisse", "15 Prozent bessere Ergebnisse", "Keine Veränderung", "50 Prozent bessere Ergebnisse"], correct: 1, whyAr: "النص: 15 Prozent bessere Ergebnisse in Mathematik." },
      { id: "t2-q3", q: "Wovor warnen Datenschützer?", qAr: "بماذا يحذر خبراء حماية البيانات؟", options: ["Vor zu wenigen Daten", "Vor der Erhebung sensibler Schülerdaten", "Vor zu viel Werbung", "Vor langsamen Systemen"], correct: 1, whyAr: "النص: Datenschützer warnen vor der Erhebung sensibler Schülerdaten." },
      { id: "t2-q4", q: "Was befürchten Lehrergewerkschaften?", qAr: "بماذا تخشى نقابات المعلمين؟", options: ["Eine Entwertung des Berufs", "Zu wenig Schüler", "Mehr Arbeitszeit", "Weniger Gehalt"], correct: 0, whyAr: "النص: Lehrergewerkschaften befürchten eine Entwertung des Berufs." },
      { id: "t2-q5", q: "Was ist die „digitale Kluft“?", qAr: "ما هي «الفجوة الرقمية»؟", options: ["Der Unterschied zwischen alt und jung", "Die Ungleichheit zwischen reichen und armen Schulen", "Der Unterschied zwischen Stadt und Land", "Die Trennung von Schülern und Lehrern"], correct: 1, whyAr: "النص: Schulen in wohlhabenden Regionen… während andere auf veraltete Technik angewiesen bleiben." },
      { id: "t2-q6", q: "Was empfehlen Wissenschaftler?", qAr: "بماذا يوصي العلماء؟", options: ["KI soll die Lehrkraft unterstützen, nicht ersetzen", "KI soll den Unterricht übernehmen", "KI soll verboten werden", "Alle Schüler sollen KI nutzen"], correct: 0, whyAr: "النص: KI sollte die Lehrkraft unterstützen, nicht ersetzen." },
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
      "تقرأ تعليقاً عن «العمل بدوام جزئي أثناء الدراسة». أكمل الفراغات (1-6) بجمل من القائمة (A-H). جملتان زائدتان.",
    text: "Nebenjob im Studium: Fluch oder Segen?\n\nImmer mehr Studierende arbeiten neben dem Studium. {0} Sie verdienen ihr eigenes Geld, sammeln praktische Erfahrung und knüpfen Kontakte für das spätere Berufsleben. {1} Viele Arbeitgeber schätzen Bewerber, die Berufserfahrung vorweisen können.\n\nAllerdings ist die Belastung nicht zu unterschätzen. {2} Wer 20 Stunden pro Woche arbeitet und danach noch lernt, hat kaum Zeit für Erholung und soziale Kontakte. {3} Die Zahl der Studierenden mit Burnout-Symptomen ist in den letzten Jahren deutlich gestiegen.\n\nExperten raten deshalb zu einem bewussten Umgang. {4} Zehn bis fünfzehn Stunden pro Woche gelten als vertretbar, wenn die Arbeit inhaltlich zum Studium passt. {5} Wichtig ist, dass man sich bei Problemen rechtzeitig Hilfe holt – etwa bei der Studienberatung.\n\n{6} Ein Nebenjob kann das Studium bereichern, wenn er nicht zum Selbstzweck wird. Entscheidend ist die Balance zwischen Arbeit, Studium und Freizeit.",
    textAr:
      "يعمل المزيد من الطلاب بجانب دراستهم: يكسبون مالهم الخاص، يكتسبون خبرة عملية، ويبنون علاقات للحياة المهنية اللاحقة. وكثير من أرباب العمل يقدرون المتقدمين ذوي الخبرة. لكن العبء ليس هيناً: من يعمل 20 ساعة أسبوعياً ثم يدرس، يبقى لديه وقت ضئيل للراحة والعلاقات. وارتفع عدد الطلاب الذين يعانون أعراض الاحتراق بوضوح في السنوات الأخيرة. لذلك ينصح الخبراء بالتعامل الواعي: عشر إلى خمس عشرة ساعة أسبوعياً تعتبر مقبولة إذا كان العمل متناسباً مع الدراسة. ومن المهم طلب المساعدة عند المشاكل من الاستشارة الدراسية. يمكن للعمل الجانبي أن يثري الدراسة إذا لم يتحول إلى غاية بذاته؛ المهم التوازن بين العمل والدراسة والوقت الحر.",
    gap: {
      textWithGaps:
        "Immer mehr Studierende arbeiten neben dem Studium. {0} Sie verdienen ihr eigenes Geld, sammeln praktische Erfahrung und knüpfen Kontakte für das spätere Berufsleben. {1} Viele Arbeitgeber schätzen Bewerber, die Berufserfahrung vorweisen können.\n\nAllerdings ist die Belastung nicht zu unterschätzen. {2} Wer 20 Stunden pro Woche arbeitet und danach noch lernt, hat kaum Zeit für Erholung und soziale Kontakte. {3} Die Zahl der Studierenden mit Burnout-Symptomen ist in den letzten Jahren deutlich gestiegen.\n\nExperten raten deshalb zu einem bewussten Umgang. {4} Zehn bis fünfzehn Stunden pro Woche gelten als vertretbar, wenn die Arbeit inhaltlich zum Studium passt. {5} Wichtig ist, dass man sich bei Problemen rechtzeitig Hilfe holt – etwa bei der Studienberatung.\n\n{6} Ein Nebenjob kann das Studium bereichern, wenn er nicht zum Selbstzweck wird. Entscheidend ist die Balance zwischen Arbeit, Studium und Freizeit.",
      sentenceBank: [
        { id: "a", de: "Die Gründe dafür sind vielfältig." },
        { id: "b", de: "Auch die finanzielle Unabhängigkeit spielt eine wichtige Rolle." },
        { id: "c", de: "Die Universität bietet viele verschiedene Studiengänge an." },
        { id: "d", de: "Denn die Vereinbarkeit von Arbeit und Studium ist nicht immer einfach." },
        { id: "e", de: "Manche Studierende arbeiten sogar als Nachhilfelehrer für jüngere Schüler." },
        { id: "f", de: "Dazu kommt, dass Prüfungsphasen besondere Konzentration verlangen." },
        { id: "g", de: "Auch sollte man die Arbeitszeiten flexibel gestalten können." },
        { id: "h", de: "Fazit: Es kommt auf das richtige Maß an." },
      ],
      gapOrder: ["a", "b", "d", "f", "g", "h"],
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
      "أربعة أشخاص في منتدى مدينة عن «التنقل». أي عبارة (8 عبارات) تنسب لأي شخص؟ الشخص يمكن اختياره أكثر من مرة.",
    categories: [
      { id: "p1", de: "Person A: Sara (28, Ärztin)", ar: "سارة — طبيبة" },
      { id: "p2", de: "Person B: Peter (60, Rentner)", ar: "بيتر — متقاعد" },
      { id: "p3", de: "Person C: Lina (19, Studentin)", ar: "لينا — طالبة" },
      { id: "p4", de: "Person D: Herr Müller (45, Busfahrer)", ar: "السيد مولر — سائق حافلة" },
    ],
    allowRepeat: true,
    items: [
      { id: "t4-1", de: "Ich fahre täglich mit dem Auto zur Klinik, auch nachts bei Notfällen. Der öffentliche Verkehr reicht für meine Arbeitszeiten einfach nicht aus.", categoryId: "p1" },
      { id: "t4-2", de: "Mit dem Seniorenticket fahre ich überallhin für wenig Geld. Der Bus kommt allerdings nicht immer pünktlich, und die Haltestelle ist weit von meiner Wohnung entfernt.", categoryId: "p2" },
      { id: "t4-3", de: "Ich habe gar kein Auto. Mit dem Semesterticket kann ich die ganze Stadt erkunden, und abends nehme ich das Leihfahrrad. Das ist günstig und umweltfreundlich.", categoryId: "p3" },
      { id: "t4-4", de: "Aus meiner Sicht ist der Stau das größte Problem. Morgens stehen die Autos oft eine halbe Stunde an derselben Ampel, und die Fahrgäste werden ungeduldig.", categoryId: "p4" },
      { id: "t4-5", de: "Ich würde gern öfter den Bus nehmen, aber der fährt auf meiner Strecke nur alle 40 Minuten. Wenn ich eine dringende Visite habe, kann ich nicht warten.", categoryId: "p1" },
      { id: "t4-6", de: "Ich erinnere mich, wie man früher ohne Auto auskam – mit Straßenbahn und Fahrrad. Heute ist die Stadt leider auf das Auto ausgelegt, das finde ich schade.", categoryId: "p2" },
      { id: "t4-7", de: "Was mich stört: Nachts um drei fährt kein Bus mehr. Wenn ich von einer Party komme, muss ich ein Taxi nehmen, das ist teuer für mich als Studentin.", categoryId: "p3" },
      { id: "t4-8", de: "Wir machen unser Bestes, aber im Berufsverkehr sind die Straßen einfach überlastet. Ein eigener Busspur würde allen helfen – auch den Autofahrern.", categoryId: "p4" },
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
      "تقرأ «تعليمات المشاركة في امتحان اللغة». أجب عن الأسئلة الأربعة حسب التعليمات.",
    text: "Hinweise für Prüfungsteilnehmende\n\nBitte lesen Sie die folgenden Hinweise vor Beginn der Prüfung sorgfältig.\n\n1. Ankunft und Ausweis: Erscheinen Sie spätestens 30 Minuten vor Prüfungsbeginn im Prüfungszentrum. Bringen Sie Ihren gültigen Personalausweis oder Reisepass mit – ohne Ausweis ist die Teilnahme nicht möglich. Bitte kontrollieren Sie die Angaben auf Ihrer Anmeldung (Name, Geburtsdatum) und melden Sie Abweichungen sofort am Empfang.\n\n2. Elektronische Geräte: Mobiltelefone, Smartwatches und andere elektronische Geräte müssen während der gesamten Prüfung ausgeschaltet und in der dafür vorgesehenen Tasche verstaut sein. Geräte, die während der Prüfung gefunden werden, führen zum Ausschluss von der Prüfung.\n\n3. Ablauf: Sie erhalten zu Beginn der Prüfung alle Aufgabenblätter auf einmal. Bitte warten Sie auf das Startsignal der Aufsicht, bevor Sie die erste Seite öffnen. Während der Prüfung ist die Kommunikation mit anderen Teilnehmenden untersagt. Fragen zum Verständnis der Aufgaben dürfen Sie der Aufsicht stellen.\n\n4. Zeiteinteilung: Die Arbeitszeit beträgt für die Module Lesen und Hören zusammen 105 Minuten. Nach 65 Minuten wird das Modul Lesen eingesammelt. Sie haben die Möglichkeit, während der Hören-Prüfung Notizen zu machen. Am Ende der Prüfung geben Sie alle Aufgabenblätter und Ihre Notizen ab – auch die, die Sie nicht benutzt haben.\n\n5. Ergebnisse: Die Ergebnisse werden vier Wochen nach der Prüfung per Post versandt. Zertifikate können nur persönlich abgeholt oder per Einschreiben zugestellt werden. Bei Verlust des Zertifikats wird ein Ersatzdokument ausgestellt.",
    textAr:
      "تعليمات للممتحنين: احضر قبل 30 دقيقة ببطاقة هوية صالحة (بدونها لا مشاركة). الأجهزة الإلكترونية يجب إطفاؤها ووضعها في الحقيبة المخصصة – العثور على جهاز أثناء الامتحان يؤدي إلى الاستبعاد. تُسلَّم جميع أوراق المهام دفعة واحدة، انتظر إشارة البداية. التواصل ممنوع، ويمكن سؤال المراقب عن فهم المهام. مدة العمل للقراءة والاستماع معاً 105 دقائق، وتُجمع أوراق القراءة بعد 65 دقيقة. يُسمح بالملاحظات أثناء الاستماع. سُلّم كل الأوراق حتى غير المستخدمة. النتائج بعد أربعة أسابيع بالبريد، والشهادات تُسلَّم شخصياً أو ببريد مسجل.",
    questions: [
      { id: "t5-q1", q: "Wann muss man im Prüfungszentrum erscheinen?", qAr: "متى يجب الحضور لمركز الامتحان؟", options: ["Genau zur Prüfungszeit", "30 Minuten vor Prüfungsbeginn", "Eine Stunde vorher", "Am Tag vorher"], correct: 1, whyAr: "القاعدة 1: spätestens 30 Minuten vor Prüfungsbeginn erscheinen." },
      { id: "t5-q2", q: "Was passiert bei einem gefundenen Handy während der Prüfung?", qAr: "ماذا يحدث عند العثور على هاتف أثناء الامتحان؟", options: ["Eine Verwarnung", "Ausschluss von der Prüfung", "Eine Geldstrafe", "Nichts"], correct: 1, whyAr: "القاعدة 2: führen zum Ausschluss von der Prüfung." },
      { id: "t5-q3", q: "Wie lange dauern Lesen und Hören zusammen?", qAr: "كم تبلغ مدة القراءة والاستماع معاً؟", options: ["65 Minuten", "105 Minuten", "40 Minuten", "75 Minuten"], correct: 1, whyAr: "القاعدة 4: 105 Minuten zusammen, Lesen wird nach 65 Minuten eingesammelt." },
      { id: "t5-q4", q: "Was müssen Sie am Ende der Prüfung abgeben?", qAr: "ماذا يجب تسليمه في نهاية الامتحان؟", options: ["Nur die benutzten Blätter", "Alle Aufgabenblätter und Notizen", "Nur die Antwortbögen", "Die Ausweise"], correct: 1, whyAr: "القاعدة 4: alle Aufgabenblätter und Ihre Notizen abgeben – auch die unbenutzten." },
    ],
  },
];
