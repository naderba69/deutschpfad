import type { TestQuestion } from "@/types/test";

/**
 * مكتبة نصوص القراءة المتدرجة (Graded Readers) — A1 → B2
 * كل نص: العنوان + المستوى + النص + الأسئلة
 */

export interface ReadingText {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  title: string;
  titleDe: string;
  /** التصنيف الموضوعي */
  category: string;
  /** نمط امتحان غوته (اختياري) — يعرض كوسم في الواجهة */
  examType?: string;
  text: string;
  textAr: string;
  questions: TestQuestion["questions"];
}

export const READING_LIBRARY: ReadingText[] = [
  /* ── A1 ── */
  {
    id: "rd-a1-1",
    level: "A1",
    title: "عائلتي",
    titleDe: "Meine Familie",
    category: "العائلة",
    text: "Hallo! Ich heiße Mona und ich bin zwölf Jahre alt. Meine Familie wohnt in Tunis. Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Karim und ist zehn. Meine Schwester heißt Nour und ist fünf. Mein Vater ist Lehrer und meine Mutter ist Ärztin. Am Wochenende essen wir zusammen. Das ist schön!",
    textAr: "مرحباً! اسمي منى وعمري اثنا عشر عاماً. تسكن عائلتي في تونس. لدي أخ وأخت. أخي اسمه كريم وعمره عشر سنوات. أختي اسمها نور وعمرها خمس سنوات. أبي معلم وأمي طبيبة. في نهاية الأسبوع نأكل معاً. هذا جميل!",
    questions: [
      { q: "Wie alt ist Mona?", qAr: "كم عمر منى؟", options: ["12", "10", "5", "20"], correct: 0, explanation: "قالت: ich bin zwölf Jahre alt." },
      { q: "Wie heißt Monas Bruder?", qAr: "ما اسم أخي منى؟", options: ["Karim", "Nour", "Sami", "Ali"], correct: 0, explanation: "أخوها كريم." },
      { q: "Was ist die Mutter von Beruf?", qAr: "ما مهنة الأم؟", options: ["Ärztin", "Lehrerin", "Verkäuferin", "Köchin"], correct: 0, explanation: "أمي طبيبة." },
    ],
  },
  {
    id: "rd-a1-2",
    level: "A1",
    title: "يومي",
    titleDe: "Mein Tag",
    category: "الروتين",
    text: "Ich stehe um sechs Uhr auf. Dann frühstücke ich. Um acht Uhr gehe ich zur Schule. Am Mittag esse ich in der Schule. Am Nachmittag mache ich Hausaufgaben. Am Abend sehe ich fern oder spiele mit meinem Bruder. Um zehn Uhr schlafe ich.",
    textAr: "أستيقظ في السادسة. ثم أتناول الفطور. في الثامنة أذهب إلى المدرسة. ظهراً آكل في المدرسة. بعد الظهر أحل واجباتي. مساءً أشاهد التلفاز أو ألعب مع أخي. في العاشرة أنام.",
    questions: [
      { q: "Wann steht er auf?", qAr: "متى يستيقظ؟", options: ["um sechs Uhr", "um acht Uhr", "um zehn Uhr", "um sieben Uhr"], correct: 0, explanation: "في السادسة." },
      { q: "Was macht er am Nachmittag?", qAr: "ماذا يفعل بعد الظهر؟", options: ["Hausaufgaben", "schlafen", "fernsehen nur", "einkaufen"], correct: 0, explanation: "يحل الواجبات." },
    ],
  },

  /* ── A2 ── */
  {
    id: "rd-a2-1",
    level: "A2",
    title: "عطلة في برلين",
    titleDe: "Urlaub in Berlin",
    category: "السفر",
    text: "Letzte Woche habe ich Urlaub gemacht. Ich bin mit dem Flugzeug nach Berlin geflogen. Das Wetter war schön, deshalb bin ich viel spazieren gegangen. Ich habe die Berliner Mauer gesehen und viele Museen besucht. Am Abend habe ich Currywurst gegessen. Es hat mir sehr gut geschmeckt! Ich habe viele Fotos gemacht und Souvenirs gekauft. Es war eine tolle Reise!",
    textAr: "أخذت إجازة الأسبوع الماضي. طرت بالطائرة إلى برلين. كان الطقس جميلاً لذلك مشيت كثيراً. رأيت سور برلين وزرت متاحف كثيرة. مساءً أكلت كاريورست. كان طعمه جيداً جداً! التقطت صوراً كثيرة واشتريت تذكارات. كانت رحلة رائعة!",
    questions: [
      { q: "Wie ist er nach Berlin geflogen?", qAr: "كيف سافر إلى برلين؟", options: ["mit dem Flugzeug", "mit dem Zug", "mit dem Auto", "mit dem Bus"], correct: 0, explanation: "بالطائرة." },
      { q: "Was hat er am Abend gegessen?", qAr: "ماذا أكل مساءً؟", options: ["Currywurst", "Pizza", "Fisch", "Salat"], correct: 0, explanation: "كاريورست." },
      { q: "Warum ist er viel spazieren gegangen?", qAr: "لماذا مشى كثيراً؟", options: ["weil das Wetter schön war", "weil er müde war", "weil er krank war", "weil es regnete"], correct: 0, explanation: "لأن الطقس كان جميلاً." },
    ],
  },
  {
    id: "rd-a2-2",
    level: "A2",
    title: "شقة جديدة",
    titleDe: "Eine neue Wohnung",
    category: "السكن",
    text: "Anna sucht eine neue Wohnung. Sie möchte eine Wohnung mit zwei Zimmern in der Stadtmitte. Gestern hat sie eine Anzeige gesehen: eine schöne Wohnung neben dem Park, 650 Euro warm. Sie hat angerufen und heute besichtigt sie die Wohnung. Der Vermieter ist nett. Anna hofft, dass sie die Wohnung bekommt.",
    textAr: "تبحث آنا عن شقة جديدة. تريد شقة بغرفتين في وسط المدينة. أمس رأت إعلاناً: شقة جميلة بجانب الحديقة، 650 يورو شاملة التدفئة. اتصلت واليوم تعاين الشقة. المؤجر لطيف. تأمل آنا أن تحصل على الشقة.",
    questions: [
      { q: "Was sucht Anna?", qAr: "ماذا تبحث آنا؟", options: ["eine Wohnung", "ein Haus", "ein Zimmer", "ein Auto"], correct: 0, explanation: "شقة." },
      { q: "Wo liegt die Wohnung?", qAr: "أين تقع الشقة؟", options: ["neben dem Park", "am Bahnhof", "im Zentrum", "an der Schule"], correct: 0, explanation: "بجانب الحديقة." },
      { q: "Wie viel kostet die Miete?", qAr: "بكم الإيجار؟", options: ["650 Euro", "700 Euro", "550 Euro", "800 Euro"], correct: 0, explanation: "650 يورو." },
    ],
  },

  /* ── B1 ── */
  {
    id: "rd-b1-1",
    level: "B1",
    title: "مقابلة عمل ناجحة",
    titleDe: "Ein erfolgreiches Vorstellungsgespräch",
    category: "العمل",
    text: "Sami hatte gestern ein Vorstellungsgespräch bei einer großen Firma. Bevor er sich beworben hatte, hatte er viel recherchiert. Im Gespräch erzählte er von seiner Erfahrung als Programmierer. Er sagte, dass er drei Jahre in Tunis gearbeitet hatte. Die Chefin fragte, warum er nach Deutschland kommen wolle. Sami antwortete, dass er die deutsche Kultur liebe und neue Herausforderungen suche. Wenn er den Job bekommt, wird er nach München umziehen. Er hofft, dass die Antwort nächste Woche kommt.",
    textAr: "كان لدى سامي أمس مقابلة عمل في شركة كبيرة. قبل أن يتقدم، كان قد بحث كثيراً. في المقابلة حكى عن خبرته كمبرمج. قال إنه عمل ثلاث سنوات في تونس. سألت المديرة لماذا يريد القدوم إلى ألمانيا. أجاب سامي أنه يحب الثقافة الألمانية ويبحث عن تحديات جديدة. إذا حصل على الوظيفة سينتقل إلى ميونخ. يأمل أن يأتي الرد الأسبوع القادم.",
    questions: [
      { q: "Wo hat Sami vorher gearbeitet?", qAr: "أين عمل سامي سابقاً؟", options: ["in Tunis", "in München", "in Berlin", "in Hamburg"], correct: 0, explanation: "في تونس." },
      { q: "Was sucht Sami?", qAr: "ماذا يبحث سامي؟", options: ["neue Herausforderungen", "mehr Geld", "eine kleine Firma", "weniger Arbeit"], correct: 0, explanation: "تحديات جديدة." },
      { q: "Was wird Sami machen, wenn er den Job bekommt?", qAr: "ماذا سيفعل سامي إذا حصل على الوظيفة؟", options: ["nach München umziehen", "in Tunis bleiben", "eine Firma gründen", "studieren"], correct: 0, explanation: "سينتقل إلى ميونخ." },
    ],
  },
  {
    id: "rd-b1-2",
    level: "B1",
    title: "حماية البيئة",
    titleDe: "Umweltschutz",
    category: "البيئة",
    text: "Die Umwelt wird immer wichtiger. Der Müll wird in Deutschland getrennt und recycelt. Trotzdem wird noch zu wenig getan. Man kann die Umwelt schützen, indem man mit dem Fahrrad fährt, Energie spart und weniger Plastik benutzt. Je mehr Menschen mitmachen, desto besser wird die Situation. Wenn alle zusammenarbeiten, können wir den Klimawandel verlangsamen. Es ist unsere Verantwortung.",
    textAr: "تصبح البيئة أكثر أهمية. تُفصل النفايات في ألمانيا وتُعاد تدويرها. ومع ذلك يُفعل القليل. يمكن حماية البيئة بركوب الدراجة وتوفير الطاقة واستخدام بلاستيك أقل. كلما شارك الناس أكثر كانت الحالة أفضل. إذا تعاون الجميع يمكننا إبطاء تغير المناخ. إنها مسؤوليتنا.",
    questions: [
      { q: "Was wird mit dem Müll gemacht?", qAr: "ماذا يُفعل بالنفايات؟", options: ["getrennt und recycelt", "verbrannt", "vergraben", "ins Meer geworfen"], correct: 0, explanation: "تُفصل وتُعاد تدويرها." },
      { q: "Wie kann man Energie sparen?", qAr: "كيف يمكن توفير الطاقة؟", options: ["mit dem Fahrrad fahren", "mehr Auto fahren", "mehr fliegen", "weniger schlafen"], correct: 0, explanation: "بركوب الدراجة." },
      { q: "Wessen Verantwortung ist es?", qAr: "مسؤولية من؟", options: ["unsere", "der Regierung nur", "der Kinder nur", "niemandes"], correct: 0, explanation: "مسؤوليتنا جميعاً." },
    ],
  },

  /* ── B2 ── */
  {
    id: "rd-b2-1",
    level: "B2",
    title: "الذكاء الاصطناعي والعمل",
    titleDe: "Künstliche Intelligenz und Arbeit",
    category: "التقنية",
    text: "Es ist erwiesen, dass die künstliche Intelligenz die Arbeitswelt grundlegend verändert. Einerseits schafft sie neue Berufe, andererseits macht sie viele traditionelle Tätigkeiten überflüssig. Die Forscher, mit denen wir gesprochen haben, betonen, dass die Weiterbildung entscheidend sei. Meiner Ansicht nach brauchen wir ein Gleichgewicht zwischen technologischem Fortschritt und menschlicher Arbeit. Man sollte die Technik nicht als Bedrohung sehen, sondern als Werkzeug, das uns unterstützt. Die Gesellschaft, die sich schnell anpasst, wird am meisten profitieren.",
    textAr: "ثابت أن الذكاء الاصطناعي يغير عالم العمل جذرياً. من ناحية يخلق مهناً جديدة، ومن ناحية أخرى يجعل أنشطة تقليدية كثيرة زائدة. يؤكد الباحثون الذين تحدثنا معهم أن التدريب المستمر حاسم. في رأيي نحتاج توازناً بين التقدم التكنولوجي والعمل البشري. يجب ألا ننظر للتقنية كتهديد بل كأداة تدعمنا. المجتمع الذي يتكيف بسرعة سيستفيد أكثر.",
    questions: [
      { q: "Was verändert die KI?", qAr: "ماذا تغير الذكاء الاصطناعي؟", options: ["die Arbeitswelt", "das Wetter", "die Schule nur", "nichts"], correct: 0, explanation: "عالم العمل." },
      { q: "Was ist laut Forschern entscheidend?", qAr: "ما الحاسم حسب الباحثين؟", options: ["die Weiterbildung", "das Geld", "die Zeit", "die Politik"], correct: 0, explanation: "التدريب المستمر." },
      { q: "Wie sollte man die Technik sehen?", qAr: "كيف يجب النظر للتقنية؟", options: ["als Werkzeug", "als Bedrohung", "als Feind", "als Spielzeug"], correct: 0, explanation: "كأداة." },
    ],
  },
  {
    id: "rd-b2-2",
    level: "B2",
    title: "لغة وثقافة",
    titleDe: "Sprache und Kultur",
    category: "اللغات",
    text: "Die Sprache ist mehr als ein Kommunikationsmittel; sie prägt unser Denken und unsere Identität. Wer eine fremde Sprache lernt, entdeckt nicht nur neue Wörter, sondern auch eine neue Art, die Welt zu sehen. Die Forscher behaupten, dass Mehrsprachigkeit das Gehirn stärke. Es ist erwiesen, dass zweisprachige Menschen flexibler denken können. Meiner Ansicht nach sollte jeder mindestens eine Fremdsprache lernen, weil sie Türen öffnet. Zusammenfassend lässt sich sagen, dass Sprache und Kultur untrennbar sind.",
    textAr: "اللغة أكثر من وسيلة تواصل؛ إنها تشكل تفكيرنا وهويتنا. من يتعلم لغة أجنبية لا يكتشف كلمات جديدة فقط بل طريقة جديدة لرؤية العالم. يزعم الباحثون أن تعدد اللغات يقوي الدماغ. ثابت أن ثنائيي اللغة يستطيعون التفكير بمرونة أكبر. في رأيي يجب على الجميع تعلم لغة أجنبية واحدة على الأقل لأنها تفتح أبواباً. خلاصةً يمكن القول إن اللغة والثقافة لا ينفصلان.",
    questions: [
      { q: "Was prägt die Sprache?", qAr: "ماذا تشكل اللغة؟", options: ["unser Denken", "das Wetter", "die Wirtschaft nur", "nichts"], correct: 0, explanation: "تفكيرنا." },
      { q: "Was stärkt die Mehrsprachigkeit?", qAr: "ماذا يقوي تعدد اللغات؟", options: ["das Gehirn", "die Muskeln", "das Herz", "die Augen"], correct: 0, explanation: "الدماغ." },
      { q: "Warum sollte man eine Fremdsprache lernen?", qAr: "لماذا يجب تعلم لغة أجنبية؟", options: ["weil sie Türen öffnet", "weil sie einfach ist", "weil sie billig ist", "weil sie alt ist"], correct: 0, explanation: "لأنها تفتح أبواباً." },
    ],
  },
  {
    id: "rd-b2-3",
    level: "B2",
    title: "الرقمنة في المدارس — مقال رأي",
    titleDe: "Digitalisierung an Schulen",
    category: "المجتمع",
    text: "Die Forderung, Schulen stärker zu digitalisieren, ist nicht neu, aber sie hat durch die Pandemie neue Aktualität gewonnen. Befürworter argumentieren, dass digitale Medien den Unterricht abwechslungsreicher gestalten und auf die Arbeitswelt von morgen vorbereiten. Kritiker dagegen weisen darauf hin, dass viele Lehrkräfte unzureichend ausgebildet seien und dass nicht alle Familien über die nötige Ausstattung verfügten. Eine einseitige Lösung wäre sicherlich verfehlt. Entscheidend ist vielmehr, dass die Digitalisierung pädagogisch durchdacht erfolgt: nicht Technik um ihrer selbst willen, sondern Technik als Mittel zum Zweck. Zusammenfassend lässt sich sagen, dass die Schule der Zukunft beides braucht: gut ausgebildete Lehrer und sinnvolle Technik.",
    textAr: "المطالبة برقمنة المدارس ليست جديدة، لكنها اكتسبت راهنية جديدة عبر الجائحة. يرى المؤيدون أن الوسائط الرقمية تجعل الدرس أكثر تنوعاً وتهيئ لعالم العمل القادم. بينما يشير النقاد إلى أن كثيراً من المعلمين غير مؤهلين بما يكفي، وأن ليست كل العائلات تملك التجهيزات اللازمة. الحل الأحادي الجانب سيكون خاطئاً قطعاً. المهم بدلاً من ذلك أن تتم الرقمنة بوعي تربوي: لا تقنية لذاتها، بل تقنية كوسيلة لغاية. خلاصة القول إن مدرسة المستقبل تحتاج الأمرين معاً: معلمين مؤهلين وتقنية مفيدة.",
    questions: [
      { q: "Was hat die Digitalisierung an Schulen aktuell gemacht?", qAr: "ما الذي جعل رقمنة المدارس راهنة؟", options: ["die Pandemie", "die Lehrkräfte", "die Familien", "die Technik"], correct: 0, explanation: "الجائحة (die Pandemie)." },
      { q: "Was kritisieren die Gegner der Digitalisierung?", qAr: "ماذا ينتقد معارضو الرقمنة؟", options: ["unzureichende Ausbildung der Lehrer", "zu viele Computer", "zu wenig Unterricht", "die Schüler"], correct: 0, explanation: "تأهيل غير كافٍ للمعلمين (نقل كلام بـ Konjunktiv I: seien)." },
      { q: "Welche Lösung hält der Autor für richtig?", qAr: "ما الحل الذي يراه الكاتب صحيحاً؟", options: ["gut ausgebildete Lehrer und sinnvolle Technik", "nur Technik", "keine Technik", "nur Lehrer"], correct: 0, explanation: "الأمران معاً — beides." },
      { q: "Laut dem Autor ist eine einseitige Lösung ...", qAr: "بحسب الكاتب، الحل الأحادي هو ...", options: ["verfehlt", "ideal", "billig", "notwendig"], correct: 0, explanation: "خاطئ (verfehlt)." },
    ],
  },
  {
    id: "rd-b2-4",
    level: "B2",
    title: "العمل عن بُعد — صواب/خطأ/غير مذكور",
    titleDe: "Homeoffice: Erfahrungen und Meinungen",
    category: "العمل",
    text: "Seit der Pandemie gehört das Homeoffice für viele Beschäftigte zum Alltag. Anna, 34, Projektmanagerin, schätzt die Flexibilität: Sie spart täglich zwei Stunden Fahrtzeit und kann ihre Arbeit besser mit der Familie vereinbaren. Ihr Kollege Markus dagegen vermisst den direkten Austausch im Büro. Er berichtet, dass spontane Gespräche an der Kaffeemaschine oft die besten Ideen hervorgebracht hätten. Die Unternehmensleitung plant daher ein hybrides Modell: drei Tage im Büro, zwei Tage zu Hause. Ob sich dieses Modell durchsetzt, hängt nach Meinung vieler Experten von der Unternehmenskultur ab. Entscheidend sei, so wird argumentiert, nicht der Arbeitsort, sondern Vertrauen und klare Ziele.",
    textAr: "منذ الجائحة أصبح العمل من المنزل جزءاً من حياة كثير من الموظفين. آنا (34 عاماً) مديرة مشاريع، تقدر المرونة: توفر يومياً ساعتي تنقل وتوفق عملها مع عائلتها. أما زميلها ماركوس فيفتقد التبادل المباشر في المكتب. يروي أن الأحاديث العفوية عند آلة القهوة كثيراً ما أنتجت أفضل الأفكار. لذلك تخطط الإدارة لنموذج هجين: ثلاثة أيام في المكتب ويومان في المنزل. ويعتمد نجاح هذا النموذج في رأي كثير من الخبراء على ثقافة الشركة. ويُقال إن المهم ليس مكان العمل بل الثقة والأهداف الواضحة.",
    questions: [
      { q: "Anna spart täglich zwei Stunden Fahrtzeit.", qAr: "توفر آنا يومياً ساعتي تنقل.", options: ["richtig", "falsch", "nicht im Text"], correct: 0, explanation: "مذكور حرفياً: spart täglich zwei Stunden Fahrtzeit." },
      { q: "Markus möchte nie wieder ins Büro.", qAr: "ماركوس لا يريد العودة للمكتب أبداً.", options: ["richtig", "falsch", "nicht im Text"], correct: 1, explanation: "عكسه: يفتقد التبادل في المكتب — العبارة خاطئة." },
      { q: "Das Unternehmen plant drei Tage Büro und zwei Tage Homeoffice.", qAr: "تخطط الشركة لثلاثة أيام مكتب ويومين منزل.", options: ["richtig", "falsch", "nicht im Text"], correct: 0, explanation: "النموذج الهجين مذكور: drei Tage im Büro, zwei Tage zu Hause." },
      { q: "Anna verdient mehr Geld als früher.", qAr: "آنا تتقاضى راتباً أعلى من قبل.", options: ["richtig", "falsch", "nicht im Text"], correct: 2, explanation: "لا ذكر للراتب إطلاقاً — nicht im Text (أسلوب غوته B2)." },
    ],
  },
  {
    id: "rd-b2-5",
    level: "B2",
    title: "السياحة الجماعية — مناقشة منتدى",
    titleDe: "Massentourismus: eine Debatte",
    category: "المجتمع",
    text: "Im Forum „Reise und Gesellschaft“ diskutieren Nutzer über den Massentourismus. Beitrag von Sofia: „Der Tourismus schafft Arbeitsplätze, aber er zerstört auch die Umwelt. In meiner Heimatstadt sind die Strände im Sommer überfüllt, und die Müllberge wachsen.“ Darauf antwortet Lukas: „Man sollte den Tourismus nicht verteufeln. Ohne ihn wären viele Regionen wirtschaftlich am Ende. Die Lösung liegt meiner Ansicht nach im nachhaltigen Tourismus: weniger Massen, mehr Qualität.“ Eine dritte Stimme, Elena, ergänzt: „Die Einheimischen werden bei der Planung viel zu selten gefragt. Dabei sind sie es, die unter den Folgen leiden.“ Die Diskussion zeigt, wie komplex das Thema ist: Wirtschaft, Umwelt und soziale Gerechtigkeit stehen in einem Spannungsverhältnis, das einfache Lösungen ausschließt.",
    textAr: "في منتدى «السفر والمجتمع» يناقش مستخدمون السياحة الجماعية. مساهمة صوفيا: «السياحة تخلق فرص عمل، لكنها تدمر البيئة أيضاً. في مدينتي الشواطئ مكتظة صيفاً وتتزايد جبال القمامة». يرد لوكاس: «لا ينبغي شيطنة السياحة. بدونها كانت مناطق كثيرة ستنهار اقتصادياً. الحل في رأيي السياحة المستدامة: أقل حشوداً وأكثر جودة». وتضيف صوت ثالث هو إيلينا: «السكان المحليون نادراً ما يُستشارون في التخطيط، مع أنهم هم من يعانون من العواقب». يظهر النقاش تعقيد الموضوع: الاقتصاد والبيئة والعدالة الاجتماعية في توتر متبادل يستبعد الحلول البسيطة.",
    questions: [
      { q: "Welches Problem nennt Sofia?", qAr: "ما المشكلة التي تذكرها صوفيا؟", options: ["überfüllte Strände und Müll", "zu wenig Arbeitsplätze", "zu teure Hotels", "schlechtes Wetter"], correct: 0, explanation: "الشواطئ المزدحمة والقمامة." },
      { q: "Was schlägt Lukas vor?", qAr: "ماذا يقترح لوكاس؟", options: ["nachhaltigen Tourismus", "mehr Touristen", "keinen Tourismus", "höhere Preise"], correct: 0, explanation: "السياحة المستدامة." },
      { q: "Was kritisiert Elena?", qAr: "ماذا تنتقد إيلينا؟", options: ["dass die Einheimischen selten gefragt werden", "dass zu viele Hotels gebaut werden", "dass der Tourismus zu billig ist", "dass die Strände sauber sind"], correct: 0, explanation: "أن السكان المحليين نادراً ما يُستشارون." },
      { q: "Der Autor findet das Thema ...", qAr: "يجد الكاتب الموضوع ...", options: ["komplex", "einfach", "unwichtig", "langweilig"], correct: 0, explanation: "معقداً — complex." },
    ],
  },

  {
    id: "rd-a2-3",
    level: "A2",
    title: "شكوى من جار",
    titleDe: "Eine Reklamation beim Nachbarn",
    category: "الحياة اليومية",
    text: "Mein Nachbar macht jeden Abend laute Musik. Ich kann deshalb nicht schlafen. Letzte Woche habe ich zweimal bei ihm geklingelt, aber er hat nicht aufgemacht. Gestern habe ich ihm einen Brief geschrieben. Ich habe ihn gebeten, die Musik nach zehn Uhr leiser zu machen. Ich möchte keine Probleme, aber ich brauche meinen Schlaf.",
    textAr: "جاري يشغّل موسيقى صاخبة كل مساء. لذلك لا أستطيع النوم. الأسبوع الماضي قرعت بابه مرتين لكنه لم يفتح. أمس كتبت له رسالة. طلبت منه خفض الموسيقى بعد العاشرة. لا أريد مشاكل لكنني أحتاج نومي.",
    questions: [
      { q: "Was macht der Nachbar jeden Abend?", qAr: "ماذا يفعل الجار كل مساء؟", options: ["laute Musik", "Fernsehen", "Kochen", "Sport"], correct: 0, explanation: "موسيقى صاخبة." },
      { q: "Was hat der Mann gestern gemacht?", qAr: "ماذا فعل الرجل أمس؟", options: ["einen Brief geschrieben", "die Polizei gerufen", "umgezogen", "gefeiert"], correct: 0, explanation: "كتب رسالة." },
      { q: "Was hat er gebeten?", qAr: "بماذا طلب؟", options: ["die Musik nach zehn Uhr leiser zu machen", "die Musik lauter zu machen", "keine Gäste zu haben", "früher zu schlafen"], correct: 0, explanation: "خفض الموسيقى بعد العاشرة." },
    ],
  },
  {
    id: "rd-b1-3",
    level: "B1",
    title: "التطوع: خبرة شخصية",
    titleDe: "Ehrenamt: eine persönliche Erfahrung",
    category: "المجتمع",
    text: "Seit einem Jahr arbeite ich ehrenamtlich in einem Altenheim. Anfangs war ich unsicher, ob ich das schaffe, denn die Arbeit ist nicht immer leicht. Aber die Dankbarkeit der alten Menschen gibt mir sehr viel zurück. Ich helfe beim Essen, lese vor oder gehe mit den Bewohnern spazieren. Durch diese Erfahrung habe ich gelernt, geduldiger zu sein. Außerdem habe ich viele nette Menschen kennengelernt. Ich kann jedem nur empfehlen, sich zu engagieren – man bekommt mehr, als man gibt.",
    textAr: "منذ عام أعمل متطوعاً في دار مسنين. في البداية كنت غير واثق إن كنت سأنجح، لأن العمل ليس سهلاً دائماً. لكن امتنان كبار السن يمنحني الكثير. أساعد في الطعام وأقرأ لهم أو أتمشى مع النزلاء. عبر هذه التجربة تعلمت الصبر. كما تعرفت على أناس لطفاء كثيرين. أنصح الجميع بالمشاركة — فأنت تأخذ أكثر مما تعطي.",
    questions: [
      { q: "Wo arbeitet er ehrenamtlich?", qAr: "أين يعمل متطوعاً؟", options: ["in einem Altenheim", "in einer Schule", "in einem Krankenhaus", "im Supermarkt"], correct: 0, explanation: "في دار مسنين." },
      { q: "Was hat er durch die Arbeit gelernt?", qAr: "ماذا تعلم من العمل؟", options: ["geduldiger zu sein", "schneller zu laufen", "besser zu kochen", "lauter zu sprechen"], correct: 0, explanation: "أن يكون أكثر صبراً." },
      { q: "Was empfiehlt er am Ende?", qAr: "ماذا يوصي في النهاية؟", options: ["sich zu engagieren", "im Ausland zu arbeiten", "mehr Geld zu sparen", "allein zu leben"], correct: 0, explanation: "بالمشاركة التطوعية." },
    ],
  },

  /* ── B2 — نمط غوته Teil 1: Zuordnung (مطابقة آراء) ── */
  {
    id: "rd-b2-6",
    level: "B2",
    title: "الانفصال الرقمي — آراء خمسة",
    titleDe: "Digital Detox: Fünf Meinungen",
    category: "المجتمع",
    examType: "Teil 1 — Zuordnung",
    text: "In einer Online-Diskussion äußern sich fünf Personen zum Thema „Digital Detox“, dem bewussten Verzicht auf Handy und Internet.\n\nAnna (28, Studentin): Ich schalte mein Handy jeden Freitagabend ab und hole es erst am Sonntag wieder hervor. Am Anfang war das schwer, aber jetzt genieße ich die Zeit mit Freunden und Büchern enorm.\n\nPeter (45, Manager): Für mich ist das keine Option. Ich bin rund um die Uhr erreichbar, das gehört zu meinem Beruf. Ohne mein Handy fühle ich mich fast nackt. Trotzdem versuche ich, abends eine halbe Stunde offline zu verbringen.\n\nSara (19, Auszubildende): Ich habe mir eine Regel gesetzt: Während der Mahlzeiten bleibt das Handy in der Tasche. Das klingt einfach, ist aber eine echte Herausforderung. Meine Freunde lachen darüber, aber ich schaffe es immer öfter.\n\nOmar (52, Lehrer): Ich halte Digital Detox für übertrieben. Die Technik ist nicht das Problem, sondern der Umgang mit ihr. Ich nutze mein Handy viel, aber ich habe klare Zeiten für die Arbeit und für meine Familie. Disziplin ist wichtiger als Verzicht.\n\nJulia (35, Ärztin): Vor einem Jahr war ich ständig gestresst und habe kaum geschlafen. Dann habe ich eine Woche ohne Internet gemacht. Das hat mein Leben verändert. Heute wandere ich jedes Wochenende ohne Handy in die Berge und nehme mir feste „Offline-Tage“.\n\nNun sollen Sie zuordnen: Wer sagt das?",
    textAr: "في نقاش عبر الإنترنت يبدي خمسة أشخاص رأيهم في «الانفصال الرقمي»، أي الامتناع الواعي عن الهاتف والإنترنت.\n\nآنا (28، طالبة): أطفئ هاتفي كل جمعة مساءً ولا أعيده إلا الأحد. في البداية كان الأمر صعباً، لكنني الآن أستمتع كثيراً بالوقت مع الأصدقاء والكتب.\n\nبيتر (45، مدير): بالنسبة لي هذا ليس خياراً. أنا متاح على مدار الساعة، فهذا جزء من مهنتي. بدون هاتفي أشعر تقريباً كأني عارٍ. رغم ذلك أحاول قضاء نصف ساعة دون اتصال مساءً.\n\nسارة (19، متدربة): وضعت قاعدة: أثناء الوجبات يبقى الهاتف في الجيب. يبدو الأمر بسيطاً لكنه تحدٍ حقيقي. أصدقائي يضحكون على ذلك لكنني أنجح فيه أكثر فأكثر.\n\nعمر (52، معلم): أرى أن الانفصال الرقمي مبالغ فيه. المشكلة ليست في التقنية بل في طريقة التعامل معها. أستخدم هاتفي كثيراً لكن لدي أوقات واضحة للعمل وللعائلة. الانضباط أهم من الحرمان.\n\nجوليا (35، طبيبة): قبل عام كنت متوترة باستمرار وبالكاد أنام. ثم قضيت أسبوعاً دون إنترنت. غيّر ذلك حياتي. اليوم أتنزه كل عطلة نهاية أسبوع في الجبال دون هاتف وأخصص أياماً ثابتة «دون اتصال».\n\nالآن طابقوا: من قال ذلك؟",
    questions: [
      { q: "Wer sagt: „Ich schalte mein Handy jedes Wochenende komplett ab“?", qAr: "من قال: «أطفئ هاتفي تماماً كل عطلة نهاية أسبوع»؟", options: ["Anna", "Peter", "Omar", "Julia"], correct: 0, explanation: "آنا تطفئ الهاتف من الجمعة مساءً حتى الأحد (يُطابق فكرة إغلاق نهاية الأسبوع كاملاً)." },
      { q: "Wer sagt: „Ohne Handy fühle ich mich fast nackt“?", qAr: "من قال: «بدون هاتفي أشعر تقريباً كأني عارٍ»؟", options: ["Anna", "Peter", "Sara", "Julia"], correct: 1, explanation: "بيتر — يعبر عن التعلق الشديد بالهاتف (nackt = عارٍ، تعبير مجازي)." },
      { q: "Wer nennt Disziplin wichtiger als Verzicht?", qAr: "من يرى أن الانضباط أهم من الحرمان؟", options: ["Sara", "Omar", "Julia", "Anna"], correct: 1, explanation: "عمر — «Disziplin ist wichtiger als Verzicht» (الانضباط أهم من الحرمان)." },
      { q: "Wer hat nur eine kleine Regel: kein Handy beim Essen?", qAr: "من لديه قاعدة صغيرة فقط: لا هاتف أثناء الأكل؟", options: ["Peter", "Julia", "Sara", "Omar"], correct: 2, explanation: "سارة — قاعدة الهاتف في الجيب أثناء الوجبات." },
      { q: "Wer hat durch eine Woche ohne Internet sein Leben verändert?", qAr: "من غيّر أسبوع دون إنترنت حياته؟", options: ["Anna", "Peter", "Omar", "Julia"], correct: 3, explanation: "جوليا — «Das hat mein Leben verändert»." },
    ],
  },

  /* ── B2 — نمط غوته Teil 4: فقرات ناقصة (Textteile zuordnen) ── */
  {
    id: "rd-b2-7",
    level: "B2",
    title: "عيش صديق للبيئة — فقرات ناقصة",
    titleDe: "Umweltfreundlich leben: Textteile",
    category: "البيئة",
    examType: "Teil 4 — Textteile",
    text: "Nachhaltig zu leben ist heute wichtiger denn je. Viele Menschen fragen sich, wo sie anfangen sollen. [LÜCKE 1] Denn kleine Schritte im Alltag haben eine große Wirkung, wenn viele sie machen.\n\nEin Bereich ist die Ernährung. [LÜCKE 2] Wer regional und saisonal einkauft, spart Transportwege und unterstützt die Landwirtschaft in der Umgebung. Auch weniger Fleisch zu essen hilft dem Klima erheblich.\n\nEin anderer Bereich ist der Konsum. [LÜCKE 3] Statt ständig neue Geräte zu kaufen, sollte man defekte Produkte reparieren lassen. Auch Second-Hand-Kleidung ist eine sinnvolle Alternative.\n\nSchließlich spielt die Mobilität eine Rolle. Das Fahrrad ist für kurze Strecken ideal. [LÜCKE 4] Wer auf das Auto verzichtet, spart nicht nur Geld, sondern auch Nerven im Verkehr.\n\nZusammenfassend gilt: [LÜCKE 5] Perfektion ist nicht nötig – jeder Beitrag zählt.",
    textAr: "العيش المستدام أهم اليوم من أي وقت مضى. يتساءل كثيرون من أين يبدأون. [فراغ 1] فبخطوات صغيرة في الحياة اليومية أثر كبير إذا فعلها الكثيرون.\n\nأحد المجالات التغذية. [فراغ 2] من يشتري محلياً وموسمياً يوفر طرق النقل ويدعم الزراعة في المنطقة. كما أن تقليل اللحوم يساعد المناخ كثيراً.\n\nمجال آخر هو الاستهلاك. [فراغ 3] بدل شراء أجهزة جديدة باستمرار ينبغي إصلاح المعطوب. كما أن الملابس المستعملة بديل منطقي.\n\nأخيراً تلعب التنقلات دوراً. الدراجة مثالية للمسافات القصيرة. [فراغ 4] من يستغني عن السيارة لا يوفر المال فحسب بل أعصابه في الزحام.\n\nخلاصةً: [فراغ 5] الكمال غير مطلوب — كل مساهمة تُحسب.",
    questions: [
      { q: "Welcher Satz passt in LÜCKE 1?", qAr: "أي جملة تناسب الفراغ 1؟", options: ["Die Antwort ist einfach: Man muss nicht alles perfekt machen.", "Autos sind sehr teuer.", "Das Wetter ist schlecht.", "Niemand interessiert sich für Umwelt."], correct: 0, explanation: "الجملة تقدم إجابة وتبرر «الخطوات الصغيرة» — متناسقة مع الجملة التالية (denn kleine Schritte...)." },
      { q: "Welcher Satz passt in LÜCKE 2?", qAr: "أي جملة تناسب الفراغ 2؟", options: ["Was wir essen, hat großen Einfluss auf die Umwelt.", "Sport ist gesund.", "Kochen macht Spaß.", "Der Supermarkt ist teuer."], correct: 0, explanation: "الجملة تفتح موضوع الأكل وتأثيره البيئي — ثم تأتي التفاصيل (regional, saisonal)." },
      { q: "Welcher Satz passt in LÜCKE 3?", qAr: "أي جملة تناسب الفراغ 3؟", options: ["Kaufen ist nicht dasselbe wie besitzen.", "Kleidung ist schön.", "Handys sind praktisch.", "Fernsehen ist langweilig."], correct: 0, explanation: "التمييز بين الشراء والامتلاك يبرر الإصلاح وشراء المستعمل — تمهيد منطقي." },
      { q: "Welcher Satz passt in LÜCKE 4?", qAr: "أي جملة تناسب الفراغ 4؟", options: ["Für längere Strecken ist die Bahn eine gute Alternative.", "Das Wetter spielt keine Rolle.", "Fahrräder sind langsam.", "Man braucht keine Verkehrsregeln."], correct: 0, explanation: "بعد ذكر الدراجة للمسافات القصيرة يأتي ذكر القطار للمسافات الأطول — تسلسل منطقي." },
      { q: "Welcher Satz passt in LÜCKE 5?", qAr: "أي جملة تناسب الفراغ 5؟", options: ["Man muss nicht perfekt sein, aber anfangen.", "Geld ist das Wichtigste.", "Umwelt ist unwichtig.", "Perfektion ist alles."], correct: 0, explanation: "الجملة تطابق «Perfektion ist nicht nötig – jeder Beitrag zählt» — خلاصة متفائلة." },
    ],
  },
];
/** نصوص مستوى معين */
export function getReadingByLevel(level: ReadingText["level"]): ReadingText[] {
  return READING_LIBRARY.filter((r) => r.level === level);
}
