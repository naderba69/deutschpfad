/**
 * ═══════════════════════════════════════════════════════════
 *  بنك القراءة — Goethe-Zertifikat B2 (الصيغة الرسمية 2019+)
 *  Lesen: 5 أجزاء · 65 دقيقة · 30 سؤالاً · 100 نقطة
 *   Teil 1: 6 نصوص منتدى ← 8 عناوين (Zuordnung)
 *   Teil 2: مقال صحفي + 6 اختيار
 *   Teil 3: مقال رأي + 6 فراغات تُملأ بجمل (2 زائدة)
 *   Teil 4: 4 مواقف + 8 عبارات (Zuordnung — الفئة تُكرر)
 *   Teil 5: لائحة رسمية + 4 اختيار
 *  المصدر الأكاديمي: نموذج Goethe-Institut B2 + نماذج تحضيرية معتمدة
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const B2_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — 6 نصوص/8 عناوين (10 دقائق، 6 نقاط) ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurztexte zuordnen",
    titleAr: "الجزء 1 — مطابقة النصوص القصيرة",
    minutes: 10,
    points: 6,
    kind: "zuordnung",
    introAr:
      "تقرأ في منتدى 6 نصوص قصيرة كتبها أشخاص عن موضوع «الترفيه». أي عنوان يناسب أي نص؟ كل عنوان يُستخدم مرة واحدة فقط.",
    categories: [
      { id: "c1", de: "Theater statt Kino", ar: "المسرح بدل السينما" },
      { id: "c2", de: "Gemeinsam kochen", ar: "الطبخ معاً" },
      { id: "c3", de: "Digital Detox am Wochenende", ar: "قطع الاتصال الرقمي في نهاية الأسبوع" },
      { id: "c4", de: "Sport im Verein", ar: "الرياضة في النادي" },
      { id: "c5", de: "Lesen als Entspannung", ar: "القراءة للاسترخاء" },
      { id: "c6", de: "Musik selbst machen", ar: "صناعة الموسيقى بنفسك" },
      { id: "c7", de: "Wandern in der Natur", ar: "التنزه في الطبيعة" },
      { id: "c8", de: "Kochen für Gäste", ar: "الطبخ للضيوف" },
    ],
    allowRepeat: false,
    items: [
      {
        id: "t1-1",
        de: "Früher ging ich jede Woche ins Kino, aber jetzt finde ich das langweilig. Meine Freundin und ich gehen lieber ins Schauspielhaus, weil man dort echte Gefühle sieht. Die Schauspieler sind nur zwei Meter entfernt!",
        categoryId: "c1",
      },
      {
        id: "t1-2",
        de: "Seit einem Jahr treffe ich mich jeden Donnerstag mit drei Kollegen. Jeder bringt eine Zutat mit, und dann probieren wir neue Rezepte aus. Es ist günstiger als Essen gehen und macht viel mehr Spaß.",
        categoryId: "c2",
      },
      {
        id: "t1-3",
        de: "Ich habe gemerkt, dass ich ständig auf mein Handy schaue. Deshalb lasse ich es jetzt am Wochenende im Schrank. Am Anfang war es schwer, aber jetzt genieße ich die Ruhe und habe wieder Zeit für meine Familie.",
        categoryId: "c3",
      },
      {
        id: "t1-4",
        de: "Nach der Arbeit sitze ich den ganzen Tag. Deshalb spiele ich zweimal pro Woche Fußball in einem Verein. Das Training hilft mir, den Kopf frei zu bekommen, und ich habe neue Freunde gefunden.",
        categoryId: "c4",
      },
      {
        id: "t1-5",
        de: "Mein Job ist sehr stressig, und abends kann ich nicht einschlafen. Ein Kollege hat mir geraten, vor dem Schlafen ein Buch zu lesen. Es funktioniert wirklich: Nach zwanzig Seiten bin ich ruhig und müde.",
        categoryId: "c5",
      },
      {
        id: "t1-6",
        de: "Meine Kinder spielen Klavier und Geige, aber ich konnte nie ein Instrument. Jetzt habe ich mit 45 Jahren eine Gitarre gekauft und nehme Unterricht. Es ist nie zu spät, und die Kinder sind stolz auf mich.",
        categoryId: "c6",
      },
    ],
  },

  /* ═══════════ Teil 2 — مقال صحفي + 6 MCQ (18 دقيقة، 6 نقاط) ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Artikel mit Multiple Choice",
    titleAr: "الجزء 2 — مقال مع اختيار من متعدد",
    minutes: 18,
    points: 6,
    kind: "mcq",
    introAr:
      "تقرأ مقالاً من مجلة عن «الجيل الرقمي وسوق العمل». اختر الإجابة الصحيحة لكل سؤال (خيار واحد فقط).",
    text: "Die Generation Z und die neue Arbeitswelt\n\nDie sogenannte Generation Z – junge Menschen, die nach 1995 geboren wurden – stellt die Arbeitswelt vor neue Herausforderungen. Anders als ihre Eltern lehnen viele von ihnen die klassische 40-Stunden-Woche ab und fordern mehr Flexibilität und Sinnhaftigkeit im Beruf. Eine aktuelle Studie zeigt, dass 70 Prozent der Befragten einen Job bevorzugen, der ihre persönlichen Werte widerspiegelt, selbst wenn das Gehalt niedriger ist.\n\nDennoch warnen Personalexperten vor einem voreiligen Urteil. Die jungen Beschäftigten seien keineswegs faul, sondern arbeiteten anders: Sie wollten ihre Leistung messen lassen, aber nicht an der Anwesenheit im Büro, sondern am Ergebnis. Unternehmen, die diese Haltung ignorieren, riskieren, qualifizierte Fachkräfte zu verlieren. Andererseits betonen Psychologen, dass eine zu starke Fixierung auf Selbstverwirklichung auch Nachteile haben kann, etwa wenn Teamarbeit und Verantwortung für andere in den Hintergrund geraten.\n\nFür viele Betriebe bedeutet das einen kulturellen Wandel: flexible Arbeitszeiten, Homeoffice-Optionen und flache Hierarchien werden zum Standard. Kritiker fragen jedoch, ob diese Entwicklung für alle Branchen sinnvoll ist – in der Pflege oder im Handwerk etwa lassen sich Arbeitszeiten nur schwer frei gestalten. Die Zukunft wird zeigen, ob sich ein Mittelweg findet, der sowohl den Wünschen der Jungen als auch den Anforderungen der Wirtschaft gerecht wird.",
    textAr:
      "يطرح جيل Z — المولودون بعد 1995 — تحديات جديدة أمام عالم العمل. على عكس آبائهم يرفض كثير منهم أسبوع العمل الكلاسيكي ذا الأربعين ساعة ويطالبون بمرونة ومعنى في المهنة. تظهر دراسة حديثة أن 70% ممن شملهم الاستطلاع يفضلون وظيفة تعكس قيمهم الشخصية حتى لو كان الراتب أقل. ومع ذلك يحذر خبراء الموارد البشرية من حكم متسرع: فالشباب ليسوا كسالى بل يعملون بشكل مختلف — يريدون قياس أدائهم بالنتيجة لا بوقت الحضور. الشركات التي تتجاهل هذا الموقف تخاطر بفقدان كفاءات مؤهلة. من جهة أخرى يؤكد علماء النفس أن التركيز المفرط على تحقيق الذات قد يكون له عيوب، كتراجع العمل الجماعي والمسؤولية تجاه الآخرين. وبالنسبة لكثير من المؤسسات فهذا يعني تحولاً ثقافياً: ساعات مرنة، عمل عن بُعد، وهرمية مسطحة تصبح معياراً. لكن النقاد يتساءلون إن كان هذا التطور منطقياً لكل القطاعات — ففي الرعاية أو الحرف اليدوية يصعب تحرير أوقات العمل. المستقبل سيُظهر إن وُجد حل وسط يرضي رغبات الشباب ومتطلبات الاقتصاد معاً.",
    questions: [
      { id: "t2-q1", q: "Was zeigt die aktuelle Studie über die Generation Z?", qAr: "ماذا تُظهر الدراسة الحديثة عن جيل Z؟", options: ["Sie lehnen Jobs mit niedrigem Gehalt ab.", "Sie bevorzugen Berufe, die ihren Werten entsprechen.", "Sie arbeiten lieber 40 Stunden pro Woche.", "Sie wollen keine Verantwortung übernehmen."], correct: 1, whyAr: "النص: 70% يفضلون وظيفة تعكس قيمهم الشخصية حتى لو كان الراتب أقل." },
      { id: "t2-q2", q: "Wie möchten junge Beschäftigte laut Personalexperten ihre Leistung zeigen?", qAr: "كيف يريد الموظفون الشباب إظهار أدائهم حسب خبراء الموارد البشرية؟", options: ["Durch lange Anwesenheit im Büro", "Durch Überstunden am Wochenende", "Durch messbare Ergebnisse", "Durch regelmäßige Meetings"], correct: 2, whyAr: "النص: يريدون قياس أدائهم بالنتيجة لا بوقت الحضور (am Ergebnis, nicht an der Anwesenheit)." },
      { id: "t2-q3", q: "Welchen Nachteil sehen Psychologen bei der Selbstverwirklichung?", qAr: "ما العيب الذي يراه علماء النفس في تحقيق الذات؟", options: ["Zu wenig Gehalt", "Weniger Teamarbeit und Verantwortung für andere", "Zu viele Überstunden", "Zu viel Urlaub"], correct: 1, whyAr: "النص: التركيز المفرط على تحقيق الذات قد يجعل العمل الجماعي والمسؤولية تجاه الآخرين في الخلفية." },
      { id: "t2-q4", q: "Was bedeutet der kulturelle Wandel für viele Unternehmen?", qAr: "ماذا يعني التحول الثقافي لكثير من الشركات؟", options: ["Mehr Kontrolle und Anwesenheitspflicht", "Flexible Arbeitszeiten und Homeoffice als Standard", "Weniger Urlaubstage", "Höhere Gehälter für alle"], correct: 1, whyAr: "النص: ساعات مرنة وخيارات عمل عن بُعد وهرمية مسطحة تصبح معياراً." },
      { id: "t2-q5", q: "Warum kritisieren Kritiker die Entwicklung?", qAr: "لماذا ينتقد النقاد هذا التطور؟", options: ["Weil sie teurer ist", "Weil sie in allen Branchen funktioniert", "Weil sie nicht für alle Branchen sinnvoll ist", "Weil junge Menschen zu viel Urlaub bekommen"], correct: 2, whyAr: "النص: في الرعاية والحرف اليدوية يصعب تحرير أوقات العمل — أي أنها ليست منطقية لكل القطاعات." },
      { id: "t2-q6", q: "Welche Aussage passt zum Text?", qAr: "أي عبارة تناسب النص؟", options: ["Die Generation Z ist faul.", "Die Arbeitswelt muss sich anpassen.", "Flexible Arbeitszeiten sind überall möglich.", "Die 40-Stunden-Woche wird gesetzlich abgeschafft."], correct: 1, whyAr: "الخلاصة العامة للنص: الشركات يجب أن تتكيف مع رغبات الجيل الجديد." },
    ],
  },

  /* ═══════════ Teil 3 — فقرات ناقصة (12 دقيقة، 6 نقاط) ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Kommentar mit Lücken",
    titleAr: "الجزء 3 — تعليق بفراغات",
    minutes: 12,
    points: 6,
    kind: "gap",
    introAr:
      "تقرأ تعليقاً من صحيفة عن وسائل التواصل الاجتماعي. أكمل الفراغات (1-6) بجمل من القائمة (A-H). جملتان زائدتان لا تناسبان أي فراغ.",
    text: "Social Media: Fluch oder Segen?\n\nKaum eine Erfindung hat unseren Alltag so stark verändert wie soziale Netzwerke. {0} Sie verbinden Menschen über Kontinente hinweg und ermöglichen Austausch in Sekundenschnelle. {1} Nutzer verbringen im Schnitt mehr als zwei Stunden täglich auf Plattformen wie Instagram oder TikTok – Zeit, die früher für Gespräche, Hobbys oder Schlaf zur Verfügung stand.\n\nBesonders kritisch sehen Experten die Auswirkungen auf junge Menschen. {2} Der ständige Vergleich mit perfekt inszenierten Leben anderer führt bei vielen zu Unzufriedenheit und Druck. {3} Zahlreiche Studien belegen einen Zusammenhang zwischen exzessivem Konsum und Schlafstörungen.\n\nDennoch wäre es zu einfach, die Schuld allein den Plattformen zu geben. {4} Sie entscheiden selbst, wie viel Zeit sie investieren und welche Inhalte sie konsumieren. {5} Medienkompetenz in der Schule könnte helfen, einen bewussteren Umgang zu entwickeln. Wer soziale Medien sinnvoll nutzt, profitiert von Wissen, Kontakten und beruflichen Chancen – wer sie gedankenlos konsumiert, verliert Zeit und Selbstvertrauen.",
    textAr:
      "قليل من الاختراعات غيّرت حياتنا اليومية مثل الشبكات الاجتماعية. تربط الناس عبر القارات وتمكّن التبادل في ثوانٍ. لكن هناك جانباً مظلماً: يقضي المستخدمون في المتوسط أكثر من ساعتين يومياً على منصات مثل إنستغرام وتيك توك — وقتٌ كان سابقاً للمحادثات والهوايات والنوم. يرى الخبراء التأثير على الشباب بشكل خاص حرجاً: المقارنة المستمرة مع حياة الآخرين المنسقة بعناية تؤدي عند كثيرين إلى عدم الرضا والضغط. وتثبت دراسات عديدة وجود علاقة بين الاستهلاك المفرط واضطرابات النوم. ومع ذلك سيكون من التبسيط إلقاء اللوم على المنصات وحدها: فالمستخدمون يقررون بأنفسهم كم يستثمرون من الوقت وأي محتوى يستهلكون. ويمكن للتربية الإعلامية في المدرسة أن تساعد في تطوير تعامل أكثر وعياً. من يستخدم وسائل التواصل بحكمة يستفيد من المعرفة والاتصالات والفرص المهنية — ومن يستهلكها بلا تفكير يخسر الوقت والثقة بالنفس.",
    gap: {
      textWithGaps:
        "Kaum eine Erfindung hat unseren Alltag so stark verändert wie soziale Netzwerke. {0} Sie verbinden Menschen über Kontinente hinweg und ermöglichen Austausch in Sekundenschnelle. {1} Nutzer verbringen im Schnitt mehr als zwei Stunden täglich auf Plattformen wie Instagram oder TikTok – Zeit, die früher für Gespräche, Hobbys oder Schlaf zur Verfügung stand.\n\nBesonders kritisch sehen Experten die Auswirkungen auf junge Menschen. {2} Der ständige Vergleich mit perfekt inszenierten Leben anderer führt bei vielen zu Unzufriedenheit und Druck. {3} Zahlreiche Studien belegen einen Zusammenhang zwischen exzessivem Konsum und Schlafstörungen.\n\nDennoch wäre es zu einfach, die Schuld allein den Plattformen zu geben. {4} Sie entscheiden selbst, wie viel Zeit sie investieren und welche Inhalte sie konsumieren. {5} Medienkompetenz in der Schule könnte helfen, einen bewussteren Umgang zu entwickeln. Wer soziale Medien sinnvoll nutzt, profitiert von Wissen, Kontakten und beruflichen Chancen – wer sie gedankenlos konsumiert, verliert Zeit und Selbstvertrauen.",
      sentenceBank: [
        { id: "a", de: "Doch die Kehrseite der Medaille ist ebenso offensichtlich." },
        { id: "b", de: "Die Verantwortung liegt letztlich bei den Nutzern selbst." },
        { id: "c", de: "Soziale Medien sind weder gut noch schlecht – sie sind Werkzeuge." },
        { id: "d", de: "Die Plattformen finanzieren sich durch Werbung." },
        { id: "e", de: "Dazu kommt, dass die Zeit vor dem Bildschirm die Schlafenszeit verkürzt." },
        { id: "f", de: "Denn die digitalen Räume prägen Selbstbild und Selbstwertgefühl." },
        { id: "g", de: "Die Zahl der Jugendlichen mit psychischen Problemen ist in den letzten Jahren gestiegen." },
        { id: "h", de: "Politische Parteien nutzen die Plattformen für ihre Kampagnen." },
      ],
      gapOrder: ["a", "e", "f", "g", "b", "c"],
    },
  },

  /* ═══════════ Teil 4 — 4 مواقف + 8 عبارات (10 دقائق، 8 نقاط) ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Positionen zuordnen",
    titleAr: "الجزء 4 — نسبة المواقف",
    minutes: 10,
    points: 8,
    kind: "zuordnung",
    introAr:
      "أربعة أشخاص يكتبون في منتدى عن «العمل من المنزل». أي عبارة (8 عبارات) تنسب لأي شخص؟ الشخص يمكن اختياره أكثر من مرة.",
    categories: [
      { id: "p1", de: "Person A: Lena (35, IT-Projektleiterin)", ar: "لينا — مديرة مشاريع تقنية" },
      { id: "p2", de: "Person B: Markus (52, Lehrer)", ar: "ماركوس — مدرّس" },
      { id: "p3", de: "Person C: Aylin (27, Grafikdesignerin)", ar: "أيلين — مصممة جرافيك" },
      { id: "p4", de: "Person D: Thomas (44, Pfleger im Krankenhaus)", ar: "توماس — ممرض في مستشفى" },
    ],
    allowRepeat: true,
    items: [
      { id: "t4-1", de: "Ich bin froh, dass ich morgens nicht mehr im Stau stehe. Ich beginne um sieben und habe bis mittag meine wichtigsten Aufgaben erledigt, wenn das Team online kommt.", categoryId: "p1" },
      { id: "t4-2", de: "Bei uns funktioniert das nicht. Ich muss die Klasse sehen, um zu merken, ob jemand den Stoff verstanden hat. Online gehen die schwachen Schüler verloren.", categoryId: "p2" },
      { id: "t4-3", de: "Homeoffice ist für mich ideal: Ich kann meine kreativen Phasen nutzen, wann sie kommen – manchmal um sechs Uhr morgens, manchmal um Mitternacht.", categoryId: "p3" },
      { id: "t4-4", de: "Wir können gar nicht von zu Hause arbeiten. Die Patienten brauchen uns physisch. Aber ich verstehe, dass andere Berufe diese Möglichkeit haben.", categoryId: "p4" },
      { id: "t4-5", de: "Ich vermisse den informellen Austausch an der Kaffeemaschine. Viele Ideen entstehen bei uns zufällig im Gespräch, nicht in geplanten Videokonferenzen.", categoryId: "p1" },
      { id: "t4-6", de: "Die Trennung zwischen Arbeit und Freizeit fällt mir schwer. Ich schließe meinen Laptop nicht mehr, und abends checke ich ständig die E-Mails.", categoryId: "p3" },
      { id: "t4-7", de: "Für die Vorbereitung des Unterrichts ist Homeoffice gut, aber der eigentliche Unterricht findet im Klassenzimmer statt. Eine Mischung wäre ideal.", categoryId: "p2" },
      { id: "t4-8", de: "Ich habe keine Wahl: Ohne meine Anwesenheit kann die Station nicht arbeiten. Ich finde es trotzdem wichtig, dass Kollegen mit Homeoffice-Option fair behandelt werden.", categoryId: "p4" },
    ],
  },

  /* ═══════════ Teil 5 — لائحة رسمية + 4 MCQ (15 دقيقة، 4 نقاط) ═══════════ */
  {
    teil: 5,
    title: "Teil 5 — Regeltext mit Multiple Choice",
    titleAr: "الجزء 5 — نص رسمي مع اختيار",
    minutes: 15,
    points: 4,
    kind: "mcq",
    introAr:
      "تقرأ لائحة استخدام قاعة الدراسة المشتركة في معهد لغات. أجب عن الأسئلة الأربعة حسب اللائحة.",
    text: "Hausordnung für den Gemeinschaftsraum\n\nDer Gemeinschaftsraum steht allen Kursteilnehmern von 8:00 bis 20:00 Uhr zur Verfügung. Für die Nutzung gelten folgende Regeln:\n\n1. Reservierung: Gruppen von mehr als vier Personen müssen den Raum mindestens 24 Stunden im Voraus über das Sekretariat reservieren. Einzelpersonen können den Raum ohne Reservierung nutzen, solange keine reservierte Gruppe anwesend ist.\n\n2. Lärm: Während der Unterrichtszeiten (9:00–13:00 und 14:00–17:00) ist eine ruhige Arbeitsatmosphäre verpflichtend. Gespräche und Telefonate sind auf den Flur zu verlegen. Nach 17:00 Uhr ist eine angemessene Lautstärke erlaubt.\n\n3. Verpflegung: Essen und Getränke sind im Raum erlaubt, solange sie in mitgebrachten Behältern serviert werden. Einwegverpackungen sind aus Umweltgründen nicht gestattet. Bitte räumen Sie Ihre Abfälle direkt in die dafür vorgesehenen Behälter.\n\n4. Technik: Beamer und Lautsprecher dürfen nur nach Anmeldung beim Hausmeister genutzt werden. Bei Schäden, die durch unsachgemäße Nutzung entstehen, haftet die verantwortliche Person.\n\n5. Sauberkeit: Der Raum ist nach jeder Nutzung in den ursprünglichen Zustand zu versetzen. Wer den Raum als letzte Person verlässt, schaltet das Licht und die Geräte aus und schließt die Tür.\n\nZuwiderhandlungen können zum vorübergehenden Entzug des Nutzungsrechts führen.",
    textAr:
      "تتعلق القواعد بقاعة الدراسة المشتركة في معهد لغات: متاحة من 8 حتى 20. المجموعات الأكبر من أربعة أشخاص يجب أن تحجز قبل 24 ساعة عبر السكرتارية. خلال أوقات الدروس يكون الهدوء إلزامياً. يُسمح بالأكل مع اشتراط استخدام حاويات شخصية (ممنوع أكلات التغليف أحادي الاستخدام). أجهزة العرض والسماعات تحتاج تسجيلاً لدى عامل المبنى، والمسؤول عن الأضرار هو المستخدم غير الصحيح. على آخر مغادر أن يعيد الغرفة لحالتها الأصلية ويطفئ الأنوار ويغلق الباب. المخالفات قد تؤدي لسحب حق الاستخدام مؤقتاً.",
    questions: [
      { id: "t5-q1", q: "Was muss eine Gruppe von sechs Personen tun?", qAr: "ماذا يجب على مجموعة من ستة أشخاص فعله؟", options: ["Den Raum ohne Anmeldung nutzen", "Den Raum 24 Stunden vorher reservieren", "Bis 17 Uhr warten", "Den Hausmeister bezahlen"], correct: 1, whyAr: "القاعدة 1: المجموعات الأكبر من 4 أشخاص يجب أن تحجز قبل 24 ساعة." },
      { id: "t5-q2", q: "Was gilt während der Unterrichtszeiten?", qAr: "ماذا يسري خلال أوقات الدروس؟", options: ["Man darf laut telefonieren.", "Es herrscht Ruhepflicht.", "Der Raum ist geschlossen.", "Nur Gruppen dürfen bleiben."], correct: 1, whyAr: "القاعدة 2: جو عمل هادئ إلزامي 9-13 و14-17." },
      { id: "t5-q3", q: "Warum sind Einwegverpackungen nicht erlaubt?", qAr: "لماذا تُمنع عبوات الاستخدام الواحد؟", options: ["Sie sind zu teuer.", "Aus Umweltschutzgründen.", "Sie stören die Technik.", "Der Hausmeister verbietet sie."], correct: 1, whyAr: "القاعدة 3: ممنوعة لأسباب بيئية (aus Umweltgründen)." },
      { id: "t5-q4", q: "Wer haftet bei Schäden durch unsachgemäße Nutzung?", qAr: "من يتحمل مسؤولية الأضرار الناتجة عن استخدام غير صحيح؟", options: ["Der Hausmeister", "Die verantwortliche Person", "Alle Kursteilnehmer", "Das Sekretariat"], correct: 1, whyAr: "القاعدة 4: يتحملها الشخص المسؤول." },
    ],
  },
];
