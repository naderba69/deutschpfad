/**
 * ═══════════════════════════════════════════════════════════
 *  بنك الاستماع B2 — النموذج الثاني
 *  المواضيع: رياضة، تنظيم الوقت، خدمات المدينة، الإسكان.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const B2_HOEREN_B: ExamHoerenTeil[] = [
  /* Teil 1 — 5 حوارات قصيرة + R/F */
  {
    teil: 1,
    title: "Teil 1 — Kurze Gespräche",
    titleAr: "الجزء 1 — حوارات قصيرة",
    minutes: 9,
    points: 10,
    kind: "rf",
    introAr:
      "تسمع 5 حوارات قصيرة. لكل حوار عبارتان: حدد Richtig أو Falsch (الصحيح = مطابقة المعنى لا اللفظ).",
    audioText:
      "Gespräch 1. Mann: Hallo Frau Klein, ich habe gehört, Sie trainieren jetzt im neuen Fitnessstudio? Frau: Ja, seit zwei Monaten. Dreimal pro Woche, meistens abends. Mann: Und, ist es teuer? Frau: Es ist nicht billig, aber die Kurse sind sehr gut. Mann: Vielleicht sollte ich auch anfangen. — Gespräch 2. Frau: Hast du dich für den Halbmarathon angemeldet? Mann: Ja, aber ich habe mir den Fuß verletzt. Der Arzt hat gesagt, ich soll vier Wochen pausieren. Frau: Das ist schade. Nächstes Jahr klappt es bestimmt wieder. — Gespräch 3. Mann: Ich komme heute später zur Besprechung. Ich muss meine Tochter vom Kindergarten abholen. Frau: Kein Problem. Wir beginnen um drei, du kannst um halb vier dazukommen. Mann: Danke, ich informiere euch, wenn ich unterwegs bin. — Gespräch 4. Frau: Die Miete für meine neue Wohnung ist ziemlich hoch. Mann: Wie viel zahlst du denn? Frau: 950 Euro warm, aber die Lage ist zentral und der Balkon groß. Mann: Das ist in dieser Gegend sogar günstig. — Gespräch 5. Mann: Ich möchte ein Paket nach Tunesien schicken. Wie lange dauert das? Frau: Mit der Standardversand etwa zwei Wochen. Mit Express nur fünf Tage. Mann: Dann nehme ich Express, es ist wichtig.",
    statements: [
      { id: "h1-s1", de: "Frau Klein trainiert seit zwei Monaten im Fitnessstudio.", ar: "السيدة كلاين تتدرب منذ شهرين في النادي.", isTrue: true, whyAr: "قالت: seit zwei Monaten, dreimal pro Woche." },
      { id: "h1-s2", de: "Das Fitnessstudio ist sehr billig.", ar: "النادي رخيص جداً.", isTrue: false, whyAr: "قالت: Es ist nicht billig — ليس رخيصاً." },
      { id: "h1-s3", de: "Der Mann hat sich den Fuß verletzt.", ar: "الرجل أصيب في قدمه.", isTrue: true, whyAr: "قال: ich habe mir den Fuß verletzt." },
      { id: "h1-s4", de: "Der Arzt hat drei Wochen Pause empfohlen.", ar: "أوصى الطبيب بثلاثة أسابيع راحة.", isTrue: false, whyAr: "قال: vier Wochen pausieren — أربعة أسابيع." },
      { id: "h1-s5", de: "Der Mann holt seine Tochter vom Kindergarten ab.", ar: "الرجل يأخذ ابنته من الروضة.", isTrue: true, whyAr: "قال: Ich muss meine Tochter vom Kindergarten abholen." },
      { id: "h1-s6", de: "Die Besprechung beginnt um halb vier.", ar: "الاجتماع يبدأ في الثالثة والنصف.", isTrue: true, whyAr: "قالت: Wir beginnen um drei, du kannst um halb vier dazukommen — يبدأ الثالثة ويلتحق الثالثة والنصف." },
      { id: "h1-s7", de: "Die neue Wohnung hat einen kleinen Balkon.", ar: "الشقة الجديدة لها شرفة صغيرة.", isTrue: false, whyAr: "قالت: der Balkon groß — الشرفة كبيرة." },
      { id: "h1-s8", de: "Die Miete ist 950 Euro warm.", ar: "الإيجار 950 يورو شاملاً.", isTrue: true, whyAr: "قالت: 950 Euro warm." },
      { id: "h1-s9", de: "Der Standardversand dauert fünf Tage.", ar: "الشحن العادي يستغرق خمسة أيام.", isTrue: false, whyAr: "قالت: Standard etwa zwei Wochen, Express fünf Tage." },
      { id: "h1-s10", de: "Der Mann wählt den Expressversand.", ar: "الرجل يختار الشحن السريع.", isTrue: true, whyAr: "قال: Dann nehme ich Express, es ist wichtig." },
    ],
  },

  /* Teil 2 — مقابلة + 5 MCQ */
  {
    teil: 2,
    title: "Teil 2 — Interview im Radio",
    titleAr: "الجزء 2 — مقابلة إذاعية",
    minutes: 8,
    points: 5,
    kind: "mcq",
    introAr:
      "تسمع مقابلة إذاعية مع خبير إدارة وقت عن «أسبوع العمل المختصر». اختر الإجابة الصحيحة لكل سؤال.",
    audioText:
      "Moderator: Herzlich willkommen bei „Arbeitswelt aktuell“. Unser Gast ist Professor Reinhold, Arbeitsforscher. Herr Professor, viele Firmen testen die Vier-Tage-Woche. Was ist Ihre Einschätzung?\n\nProf. Reinhold: Die Ergebnisse der Pilotprojekte sind vielversprechend. Die Mitarbeiter sind weniger gestresst und die Produktivität bleibt stabil oder steigt sogar leicht. Entscheidend ist allerdings die Umsetzung: Wenn man an vier Tagen die Arbeit von fünf Tagen zusammenpresst, gewinnt niemand etwas.\n\nModerator: Welche Modelle funktionieren denn?\n\nProf. Reinhold: Am besten hat sich das Modell bewährt, bei dem die Arbeitszeit tatsächlich reduziert wird – zum Beispiel von 40 auf 35 Stunden bei gleichem Lohn. Die Mitarbeiter sind motivierter und die Fehlzeiten sinken. In Skandinavien gibt es damit sehr positive Erfahrungen.\n\nModerator: Was sagen die Kritiker?\n\nProf. Reinhold: Sie befürchten höhere Kosten und eine stärkere Belastung der verbleibenden Arbeitstage. Außerdem eignet sich das Modell nicht für alle Branchen – im Einzelhandel oder in der Pflege müssen Kunden und Patienten immer versorgt werden.\n\nModerator: Welchen Rat geben Sie Unternehmen?\n\nProf. Reinhold: Ich rate zu Pilotprojekten mit klaren Zielen und einer guten Auswertung. Man sollte die Beschäftigten in die Entscheidung einbeziehen. Und man sollte nicht nur über die Anzahl der Tage sprechen, sondern über die Qualität der Arbeit insgesamt.",
    questions: [
      { id: "h2-q1", q: "Wie ist die Produktivität bei der Vier-Tage-Woche?", qAr: "كيف هي الإنتاجية مع أسبوع العمل أربعة أيام؟", options: ["Sie sinkt deutlich", "Sie bleibt stabil oder steigt leicht", "Sie verdoppelt sich", "Sie ist schwer zu messen"], correct: 1, whyAr: "قال: die Produktivität bleibt stabil oder steigt sogar leicht." },
      { id: "h2-q2", q: "Was ist laut Professor entscheidend?", qAr: "ما هو الحاسم حسب الأستاذ؟", options: ["Die Anzahl der Tage", "Die Umsetzung des Modells", "Der Lohn", "Die Größe der Firma"], correct: 1, whyAr: "قال: Entscheidend ist allerdings die Umsetzung." },
      { id: "h2-q3", q: "Welches Modell hat sich am besten bewährt?", qAr: "أي نموذج أثبت نجاحه أكثر؟", options: ["40 Stunden an vier Tagen", "Tatsächliche Reduktion der Arbeitszeit", "Freiwillige Überstunden", "Homeoffice an zwei Tagen"], correct: 1, whyAr: "قال: Am besten hat sich das Modell bewährt, bei dem die Arbeitszeit tatsächlich reduziert wird." },
      { id: "h2-q4", q: "Welchen Nachteil nennen Kritiker?", qAr: "ما العيب الذي يذكره النقاد؟", options: ["Höhere Kosten und stärkere Belastung", "Weniger Urlaub", "Mehr Stress für die Chefs", "Weniger Kontakt zu Kunden"], correct: 0, whyAr: "قال: Sie befürchten höhere Kosten und eine stärkere Belastung der verbleibenden Arbeitstage." },
      { id: "h2-q5", q: "Welchen Rat gibt der Professor?", qAr: "ما النصيحة التي يقدمها الأستاذ؟", options: ["Die Vier-Tage-Woche sofort einführen", "Pilotprojekte mit klaren Zielen und Auswertung", "Die Arbeitszeit auf 30 Stunden reduzieren", "Mehr Überstunden anbieten"], correct: 1, whyAr: "قال: Ich rate zu Pilotprojekten mit klaren Zielen und einer guten Auswertung." },
    ],
  },

  /* Teil 3 — 7 إعلانات + Zuordnung */
  {
    teil: 3,
    title: "Teil 3 — Ansagen zuordnen",
    titleAr: "الجزء 3 — مطابقة الإعلانات",
    minutes: 8,
    points: 7,
    kind: "zuordnung",
    introAr:
      "تسمع 7 إعلانات قصيرة في المدينة. ما المكان/الخدمة الذي يناسب كل إعلان؟",
    audioText:
      "Ansage 1: Willkommen im Bürgeramt. Bitte ziehen Sie eine Nummer und warten Sie, bis Ihre Nummer aufgerufen wird. Die Wartezeit beträgt derzeit etwa 20 Minuten. — Ansage 2: Liebe Gäste, die Führung durch das Museum beginnt in fünf Minuten am Eingang. Bitte bleiben Sie in der Gruppe und fotografieren Sie ohne Blitz. — Ansage 3: Achtung, das Schwimmbad schließt heute wegen einer Veranstaltung bereits um 18 Uhr. Der Eintritt ist ab 16 Uhr nur noch für Kinder unter zwölf Jahren möglich. — Ansage 4: Sehr geehrte Fahrgäste, die Linie 5 fährt heute wegen Bauarbeiten nur bis zur Haltestelle Rathaus. Bitte steigen Sie dort in den Ersatzbus um. — Ansage 5: Liebe Kundinnen und Kunden, die Apotheke hat jetzt wieder geöffnet. Bitte beachten Sie: Der Notdienst beginnt um 22 Uhr. — Ansage 6: Aufgrund eines Sturms bleibt der Stadtpark heute geschlossen. Bitte verzichten Sie auf Spaziergänge im Waldgebiet. — Ansage 7: Herzlich willkommen im Supermarkt. Unsere Aktionswoche startet: Bio-Produkte erhalten Sie diese Woche mit zehn Prozent Rabatt.",
    categories: [
      { id: "z1", de: "Im Bürgeramt", ar: "في مكتب المواطن" },
      { id: "z2", de: "Im Museum", ar: "في المتحف" },
      { id: "z3", de: "Im Schwimmbad", ar: "في المسبح" },
      { id: "z4", de: "In der Straßenbahn", ar: "في الترام" },
      { id: "z5", de: "In der Apotheke", ar: "في الصيدلية" },
      { id: "z6", de: "Im Stadtpark", ar: "في حديقة المدينة" },
      { id: "z7", de: "Im Supermarkt", ar: "في المتجر" },
    ],
    allowRepeat: false,
    items: [
      { id: "h3-1", de: "Nummer ziehen und 20 Minuten warten.", categoryId: "z1" },
      { id: "h3-2", de: "Führung beginnt in fünf Minuten am Eingang.", categoryId: "z2" },
      { id: "h3-3", de: "Heute um 18 Uhr geschlossen, Kinder frei ab 16.", categoryId: "z3" },
      { id: "h3-4", de: "Wegen Bauarbeiten bis Rathaus, Ersatzbus.", categoryId: "z4" },
      { id: "h3-5", de: "Notdienst ab 22 Uhr.", categoryId: "z5" },
      { id: "h3-6", de: "Wegen Sturm geschlossen.", categoryId: "z6" },
      { id: "h3-7", de: "Bio-Produkte mit zehn Prozent Rabatt.", categoryId: "z7" },
    ],
  },

  /* Teil 4 — حديث + 8 MCQ */
  {
    teil: 4,
    title: "Teil 4 — Vortrag mit Fragen",
    titleAr: "الجزء 4 — حديث مع أسئلة",
    minutes: 10,
    points: 8,
    kind: "mcq",
    introAr:
      "تسمع حديثاً في لقاء سكني عن «سوق الإيجار». أجب عن الأسئلة الثمانية.",
    audioText:
      "Meine Damen und Herren, ich möchte heute über die Situation auf dem Wohnungsmarkt sprechen, die viele von Ihnen betrifft. Die Mieten in den Großstädten sind in den letzten zehn Jahren um durchschnittlich 45 Prozent gestiegen – deutlich schneller als die Einkommen. Für viele Haushalte ist das ein ernstes Problem: Sie geben mittlerweile mehr als ein Drittel ihres Einkommens für die Miete aus.\n\nBesonders betroffen sind junge Familien und Alleinerziehende. Eine alleinerziehende Mutter mit zwei Kindern muss oft mehr als die Hälfte ihres Nettoeinkommens für Wohnen aufwenden. Gleichzeitig werden bezahlbare Wohnungen knapp, weil immer mehr Wohnungen in Luxusobjekte umgewandelt werden.\n\nDie Kommunen versuchen gegenzusteuern. Viele Städte haben eine Mietpreisbremse eingeführt, die überhöhte Mieten bei Neuvermietungen begrenzen soll. In der Praxis zeigt sich aber, dass die Wirkung begrenzt ist: Viele Vermieter umgehen die Regelung, zum Beispiel durch möblierte Wohnungen, für die Sonderregeln gelten. Auch der soziale Wohnungsbau wurde jahrzehntelang vernachlässigt – erst jetzt investieren die Länder wieder mehr.\n\nWas können wir als Bürger tun? Erstens: sich in Mietervereinen organisieren, die bei Konflikten rechtlich beraten. Zweitens: kommunale Wohnungsbaugesellschaften unterstützen, die langfristig günstige Mieten anbieten. Und drittens: bei der Stadtplanung mitreden – viele Städte haben Beiräte, in denen Bürgerinnen und Bürger Vorschläge einbringen können. Eine Stadt ist nur dann lebenswert, wenn auch Menschen mit normalen Einkommen dort wohnen können.",
    questions: [
      { id: "h4-q1", q: "Wie stark sind die Mieten in zehn Jahren gestiegen?", qAr: "كم ارتفعت الإيجارات في عشر سنوات؟", options: ["Um 15 Prozent", "Um 45 Prozent", "Um 30 Prozent", "Um 60 Prozent"], correct: 1, whyAr: "قال: um durchschnittlich 45 Prozent gestiegen." },
      { id: "h4-q2", q: "Was geben viele Haushalte für die Miete aus?", qAr: "كم ينفق كثير من الأسر على الإيجار؟", options: ["Mehr als ein Drittel des Einkommens", "Die Hälfte des Einkommens", "Ein Viertel des Einkommens", "Den ganzen Lohn"], correct: 0, whyAr: "قال: mehr als ein Drittel ihres Einkommens für die Miete." },
      { id: "h4-q3", q: "Wer ist besonders betroffen?", qAr: "من المتأثر بشكل خاص؟", options: ["Singles ohne Kinder", "Junge Familien und Alleinerziehende", "Rentner", "Studierende"], correct: 1, whyAr: "قال: Besonders betroffen sind junge Familien und Alleinerziehende." },
      { id: "h4-q4", q: "Was muss eine alleinerziehende Mutter oft ausgeben?", qAr: "كم تنفق الأم العزباء غالباً؟", options: ["Ein Drittel des Einkommens", "Mehr als die Hälfte des Nettoeinkommens", "Ein Viertel", "Alles"], correct: 1, whyAr: "قال: oft mehr als die Hälfte ihres Nettoeinkommens." },
      { id: "h4-q5", q: "Warum ist die Wirkung der Mietpreisbremse begrenzt?", qAr: "لماذا يكون أثر «فرامل الإيجارات» محدوداً؟", options: ["Weil sie neu ist", "Weil Vermieter sie umgehen", "Weil sie zu streng ist", "Weil Mieter sie nicht kennen"], correct: 1, whyAr: "قال: Viele Vermieter umgehen die Regelung, zum Beispiel durch möblierte Wohnungen." },
      { id: "h4-q6", q: "Was wurde jahrzehntelang vernachlässigt?", qAr: "ما الذي أُهمل لعقود؟", options: ["Der Luxuswohnungsbau", "Der soziale Wohnungsbau", "Die Mietpreisbremse", "Die Stadtplanung"], correct: 1, whyAr: "قال: der soziale Wohnungsbau wurde jahrzehntelang vernachlässigt." },
      { id: "h4-q7", q: "Was rät der Redner den Bürgern als Erstes?", qAr: "بماذا ينصح المتحدث المواطنين أولاً؟", options: ["Selbst bauen", "Sich in Mietervereinen organisieren", "In andere Städte ziehen", "Eigentum kaufen"], correct: 1, whyAr: "قال: sich in Mietervereinen organisieren, die bei Konflikten rechtlich beraten." },
      { id: "h4-q8", q: "Wann ist eine Stadt laut Redner lebenswert?", qAr: "متى تكون المدينة صالحة للحياة حسب المتحدث؟", options: ["Wenn viele Wolkenkratzer existieren", "Wenn auch Menschen mit normalen Einkommen dort wohnen können", "Wenn die Mieten hoch sind", "Wenn es viele Geschäfte gibt"], correct: 1, whyAr: "قال في الخاتمة: Eine Stadt ist nur dann lebenswert, wenn auch Menschen mit normalen Einkommen dort wohnen können." },
    ],
  },
];
