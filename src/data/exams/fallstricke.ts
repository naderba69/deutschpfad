/**
 * ═══════════════════════════════════════════════════════════
 *  فخاخ الامتحان (Fallstricke) — القراءة والاستماع B2
 *  كل تمرين: نص قصير + سؤال + خيار «المصيدة» (الذي يخدع به
 *  المصممون بالكلمة المتطابقة) + الصحيح + شرح يسمي الفخ.
 * ═══════════════════════════════════════════════════════════
 */

export interface FallstrickExercise {
  id: string;
  /** اسم الفخ */
  trapName: string;
  trapNameDe: string;
  /** نوع المهمة */
  skill: "lesen" | "hören";
  /** النص (يُقرأ صوتياً في الاستماع) */
  text: string;
  textAr: string;
  /** السؤال */
  question: string;
  questionAr: string;
  options: string[];
  /** فهرس الصحيح */
  correct: number;
  /** فهرس «المصيدة» — الخيار الذي يوحي به اللفظ المطابق */
  trap: number;
  /** لماذا هو الفخ */
  whyTrap: string;
  /** لماذا الصحيح صحيح */
  whyCorrect: string;
}

export const FALLSTRICKE: FallstrickExercise[] = [
  {
    id: "f1",
    trapName: "مطابقة اللفظ (Wortgleichheit)",
    trapNameDe: "Wortgleichheit",
    skill: "lesen",
    text: "Der neue Supermarkt in der Innenstadt bietet nicht nur günstige Preise, sondern auch frische Produkte aus der Region. Besonders beliebt ist das große Obst- und Gemüsesortiment. Die Kunden schätzen außerdem die lange Öffnungszeit bis 22 Uhr. Nur der Parkplatz ist klein – viele kommen deshalb mit dem Fahrrad.",
    textAr: "المتجر الجديد في وسط المدينة لا يقدم أسعاراً رخيصة فحسب، بل منتجات طازجة من المنطقة. يحظى قسم الفواكه والخضار الكبير بشعبية خاصة. ويقدر الزبائن أيضاً ساعات العمل الطويلة حتى 22:00. فقط موقف السيارات صغير – لذلك يأتي كثيرون بالدراجة.",
    question: "Warum kommen viele Kunden mit dem Fahrrad?",
    questionAr: "لماذا يأتي كثير من الزبائن بالدراجة؟",
    options: ["Weil der Parkplatz klein ist", "Weil die Preise günstig sind", "Weil der Supermarkt früh schließt"],
    correct: 0,
    trap: 1,
    whyTrap: "الخيار «Weil die Preise günstig sind» يكرر كلمة «günstig» من النص — لكنها إجابة سؤال آخر (لماذا المتجر شعبي؟) وليست سبب مجيئهم بالدراجة.",
    whyCorrect: "النص يقول صراحة: «Nur der Parkplatz ist klein – viele kommen deshalb mit dem Fahrrad» — السبب هو صغر المواقف.",
  },
  {
    id: "f2",
    trapName: "النفي الخفي",
    trapNameDe: "Versteckte Verneinung",
    skill: "lesen",
    text: "Viele Studierende glauben, dass Vorlesungen online genauso gut sind wie in Präsenz. Die Forschung zeigt jedoch, dass der persönliche Austausch mit Kommilitonen keineswegs ersetzt werden kann. Auch wenn die Videos jederzeit abrufbar sind, fehlt vielen die Motivation, sie tatsächlich anzusehen.",
    textAr: "يعتقد كثير من الطلاب أن المحاضرات عبر الإنترنت جيدة مثل المحاضرات الحضورية. لكن البحث يظهر أن التبادل الشخصي مع الزملاء لا يمكن تعويضه إطلاقاً. وحتى لو كانت الفيديوهات متاحة في أي وقت، يفتقد كثيرون الدافع لمشاهدتها فعلاً.",
    question: "Was zeigt die Forschung über Online-Vorlesungen?",
    questionAr: "ماذا يُظهر البحث عن المحاضرات عبر الإنترنت؟",
    options: ["Sie sind genauso gut wie Präsenzveranstaltungen", "Der persönliche Austausch kann nicht ersetzt werden", "Alle Studierenden sehen die Videos an"],
    correct: 1,
    trap: 0,
    whyTrap: "الخيار الأول يكرر جملة «glauben viele Studierende» حرفياً تقريباً — لكنها اعتقاد الطلاب، لا نتيجة البحث. البحث ينفي هذا الاعتقاد بـ «keineswegs».",
    whyCorrect: "النص: «die Forschung zeigt jedoch, dass der persönliche Austausch ... keineswegs ersetzt werden kann» — النفي «keineswegs» حاسم.",
  },
  {
    id: "f3",
    trapName: "الأرقام المتشابهة",
    trapNameDe: "Ähnliche Zahlen",
    skill: "hören",
    text: "Guten Tag, hier ist Ihre Versicherung. Ihre neue Krankenversicherungskarte wird Ihnen in zwölf Tagen per Post zugeschickt. Bitte beachten Sie: Die Kosten für Ihren Tarif steigen ab dem 1. Juli um vier Prozent. Bei Fragen erreichen Sie uns werktags zwischen 8 und 18 Uhr.",
    textAr: "مرحباً، هذه شركة التأمين الخاصة بك. ستُرسل إليك بطاقة التأمين الجديدة بالبريد خلال اثني عشر يوماً. يرجى الانتباه: تكاليف تعريفتك ترتفع من 1 يوليو بنسبة أربعة بالمئة. للاستفسارات نحن متاحون أيام العمل بين 8 و18.",
    question: "Um wie viel Prozent steigen die Kosten?",
    questionAr: "بكم بالمئة ترتفع التكاليف؟",
    options: ["Zwölf Prozent", "Vier Prozent", "Vierzehn Prozent"],
    correct: 1,
    trap: 0,
    whyTrap: "سمعت «zwölf» (12) — لكنه عدد أيام وصول البطاقة، لا نسبة الزيادة. «zwölf» و«vier» متشابهان في الألمانية السريعة.",
    whyCorrect: "النص: «steigen ... um vier Prozent» — الزيادة 4% و12 هي أيام البريد.",
  },
  {
    id: "f4",
    trapName: "صحيح لغوياً لكنه جواب سؤال آخر",
    trapNameDe: "Falsche Fragezuordnung",
    skill: "lesen",
    text: "Die Stadt plant, die Fahrradwege auszubauen. Gleichzeitig wird der Busverkehr am Wochenende reduziert. Während die Fahrradfahrer den Plan begrüßen, protestieren viele Anwohner gegen den Wegfall von Parkplätzen. Die Entscheidung soll im nächsten Monat fallen.",
    textAr: "تخطط المدينة لتوسيع مسارات الدراجات. في الوقت نفسه يُخفض نقل الحافلات في عطلة نهاية الأسبوع. بينما يرحب راكبو الدراجات بالخطة، يحتج كثير من السكان على إزالة مواقف السيارات. يُتوقع اتخاذ القرار الشهر القادم.",
    question: "Wogegen protestieren die Anwohner?",
    questionAr: "بماذا يحتج السكان؟",
    options: ["Gegen den Ausbau der Fahrradwege", "Gegen die Reduzierung des Busverkehrs", "Gegen den Wegfall von Parkplätzen"],
    correct: 2,
    trap: 0,
    whyTrap: "الخيار «Gegen den Ausbau der Fahrradwege» صحيح لغوياً (الدراجات موجودة في النص) لكنه يخلط: راكبو الدراجات يرحبون بالخطة، والسكان يحتجون على مواقف السيارات.",
    whyCorrect: "النص: «protestieren viele Anwohner gegen den Wegfall von Parkplätzen» — الاحتجاج على إزالة المواقف.",
  },
  {
    id: "f5",
    trapName: "الاستثناء في اللائحة",
    trapNameDe: "Ausnahme in der Regel",
    skill: "lesen",
    text: "Die Bibliothek ist montags bis freitags von 9 bis 19 Uhr geöffnet. Am Mittwoch bleibt sie jedoch wegen einer internen Veranstaltung ab 15 Uhr geschlossen. Rückgaben sind trotzdem über den Automaten vor der Tür möglich.",
    textAr: "المكتبة مفتوحة من الاثنين إلى الجمعة من 9 حتى 19. لكنها تبقى مغلقة يوم الأربعاء بسبب فعالية داخلية من الساعة 15. ومع ذلك يمكن الإرجاع عبر جهاز أمام الباب.",
    question: "Bis wann ist die Bibliothek am Mittwoch geöffnet?",
    questionAr: "حتى متى تفتح المكتبة يوم الأربعاء؟",
    options: ["Bis 19 Uhr", "Bis 15 Uhr", "Bis 17 Uhr"],
    correct: 1,
    trap: 0,
    whyTrap: "«montags bis freitags von 9 bis 19 Uhr» يبدو شاملاً — لكن الاستثناء (jedoch) يغيّر الأربعاء.",
    whyCorrect: "النص: «Am Mittwoch bleibt sie jedoch ... ab 15 Uhr geschlossen» — الأربعاء تغلق 15:00.",
  },
  {
    id: "f6",
    trapName: "إعلانان بمكان واحد",
    trapNameDe: "Zwei Ansagen, ein Ort",
    skill: "hören",
    text: "Ansage 1: Der Zug nach Frankfurt fährt heute von Gleis 5 ab. Bitte beachten Sie die geänderte Reihenfolge der Wagen. — Ansage 2: Achtung, der Regionalzug nach Heidelberg hat 10 Minuten Verspätung. Der Anschlussbus am Zielbahnhof wartet auf die Reisenden.",
    textAr: "إعلان 1: قطار فرانكفورت ينطلق اليوم من الرصيف 5. يرجى الانتباه لترتيب العربات المتغير. — إعلان 2: انتباه، قطار هايدلبرغ الإقليمي متأخر 10 دقائق. الحافلة الرابطة في محطة الوصول تنتظر المسافرين.",
    question: "Welcher Zug fährt heute von Gleis 5 ab?",
    questionAr: "أي قطار ينطلق اليوم من الرصيف 5؟",
    options: ["Der Zug nach Heidelberg", "Der Zug nach Frankfurt", "Der Regionalzug"],
    correct: 1,
    trap: 0,
    whyTrap: "إعلانان في المحطة — الخيار «Der Zug nach Heidelberg» هو إعلان آخر (متأخر)، ليس الذي من الرصيف 5.",
    whyCorrect: "الإعلان 1: «Der Zug nach Frankfurt fährt heute von Gleis 5 ab».",
  },
  {
    id: "f7",
    trapName: "موافقة ثم اعتراض",
    trapNameDe: "Zustimmen und widersprechen",
    skill: "hören",
    text: "Interviewer: Sind Sie für oder gegen flexible Arbeitszeiten? — Mitarbeiterin: Grundsätzlich bin ich dafür, flexible Zeiten sind eine große Erleichterung. Aber wenn alle Mitarbeiter gleichzeitig vormittags kommen, gibt es zu wenige Besprechungsräume. Meine Erfahrung zeigt: Ohne feste Kernzeiten funktioniert die Zusammenarbeit nicht.",
    textAr: "المحاور: هل أنت مع أو ضد ساعات العمل المرنة؟ — الموظفة: أساساً أنا مع، الساعات المرنة راحة كبيرة. لكن إذا جاء الجميع صباحاً في نفس الوقت، تصبح قاعات الاجتماعات قليلة. تجربتي تُظهر: بدون أوقات أساسية ثابتة لا يعمل التعاون.",
    question: "Wie steht die Mitarbeiterin zu flexiblen Arbeitszeiten?",
    questionAr: "ما موقف الموظفة من ساعات العمل المرنة؟",
    options: ["Sie ist vollständig dafür", "Sie ist dagegen", "Sie ist dafür, aber nur mit festen Kernzeiten"],
    correct: 2,
    trap: 0,
    whyTrap: "بدايتها «Grundsätzlich bin ich dafür» تخدعك — لكن الاعتراض بعد «Aber» هو موقفها النهائي.",
    whyCorrect: "النهاية: «Ohne feste Kernzeiten funktioniert die Zusammenarbeit nicht» — تؤيد المرنة مع أوقات ثابتة.",
  },
  {
    id: "f8",
    trapName: "تحويل الزمن",
    trapNameDe: "Zeitform-Verwechslung",
    skill: "lesen",
    text: "Früher war die Situation anders: Die Firma produzierte ausschließlich in Deutschland. Seit der Erweiterung im Jahr 2022 werden die meisten Produkte in Polen hergestellt, und nur noch die Entwicklung bleibt in Deutschland.",
    textAr: "سابقاً كان الوضع مختلفاً: كانت الشركة تنتج حصرياً في ألمانيا. منذ التوسع عام 2022 تُصنع معظم المنتجات في بولندا، ويبقى التطوير فقط في ألمانيا.",
    question: "Wo werden die Produkte heute hergestellt?",
    questionAr: "أين تُصنع المنتجات اليوم؟",
    options: ["In Deutschland", "In Polen", "In Deutschland und Polen"],
    correct: 1,
    trap: 0,
    whyTrap: "«produzierte ausschließlich in Deutschland» بصيغة الماضي — إن لم تلاحظ «Früher» تظنها الحاضر.",
    whyCorrect: "الزمن الحاضر: «werden die meisten Produkte in Polen hergestellt» — اليوم بولندا.",
  },
  {
    id: "f9",
    trapName: "الضمير المبهم (er/sie)",
    trapNameDe: "Unklare Pronomen",
    skill: "lesen",
    text: "Herr Klein stellte seiner Kollegin Frau Schmidt die neue Software vor. Sie war zunächst skeptisch, aber nach der Präsentation zeigte sie großes Interesse. Er versprach, ihr ein Schulungsvideo zu schicken.",
    textAr: "قدّم السيد كلاين لزميلته السيدة شميدت البرنامج الجديد. كانت متشككة في البداية، لكن بعد العرض أظهرت اهتماماً كبيراً. وعد بإرسال فيديو تدريبي لها.",
    question: "Wer war zunächst skeptisch?",
    questionAr: "من كان متشككاً في البداية؟",
    options: ["Herr Klein", "Frau Schmidt", "Der Programmierer"],
    correct: 1,
    trap: 0,
    whyTrap: "«Sie» في «Sie war zunächst skeptisch» تشير إلى Frau Schmidt (مؤنث) لا إلى Herr Klein — الانتباه للجنس ضروري.",
    whyCorrect: "«Sie» تعود على Frau Schmidt — وهي التي شكّت ثم أبدت اهتماماً.",
  },
  {
    id: "f10",
    trapName: "التعميم الزائد",
    trapNameDe: "Übertriebene Verallgemeinerung",
    skill: "lesen",
    text: "Viele Beschäftigte in der Pflege arbeiten unter Zeitdruck. Manche berichten von Überstunden, andere klagen über fehlende Anerkennung. Eine Studie zeigt: Ein Teil der Pflegekräfte denkt über einen Berufswechsel nach, aber die meisten bleiben ihrem Beruf treu.",
    textAr: "كثير من العاملين في الرعاية يعملون تحت ضغط الوقت. بعضهم يذكر ساعات إضافية، وآخرون يشكون من نقص التقدير. تُظهر دراسة: جزء من مقدمي الرعاية يفكر في تغيير المهنة، لكن الأغلبية تبقى وفية لمهنتها.",
    question: "Was zeigt die Studie über Pflegekräfte?",
    questionAr: "ماذا تُظهر الدراسة عن مقدمي الرعاية؟",
    options: ["Alle denken über einen Berufswechsel nach", "Die meisten bleiben ihrem Beruf treu", "Keiner klagt über Überstunden"],
    correct: 1,
    trap: 0,
    whyTrap: "«ein Teil denkt über einen Berufswechsel nach» + خيار «Alle» — التعميم بالـ «alle» فخّ كلاسيكي؛ النص يقول جزءاً فقط.",
    whyCorrect: "النص: «die meisten bleiben ihrem Beruf treu» — الأغلبية تبقى.",
  },
  {
    id: "f11",
    trapName: "السبب والنتيجة",
    trapNameDe: "Kausalität verwechseln",
    skill: "lesen",
    text: "Der Strompreis ist in diesem Jahr stark gestiegen. Obwohl viele Haushalte sparen, sind die Rechnungen höher als im Vorjahr. Die Regierung plant deshalb einen Zuschuss für einkommensschwache Familien.",
    textAr: "ارتفع سعر الكهرباء هذا العام بقوة. رغم أن كثيراً من الأسر توفّر، فإن الفواتير أعلى من العام الماضي. لذلك تخطط الحكومة لدعم للأسر محدودة الدخل.",
    question: "Warum plant die Regierung einen Zuschuss?",
    questionAr: "لماذا تخطط الحكومة لدعم مالي؟",
    options: ["Weil die Haushalte zu viel sparen", "Weil die Strompreise gestiegen sind", "Weil die Rechnungen sinken"],
    correct: 1,
    trap: 0,
    whyTrap: "«obwohl viele Haushalte sparen» — التوفير ليس سبب الدعم؛ «deshalb» يربط الزيادة بالدعم.",
    whyCorrect: "«Der Strompreis ist stark gestiegen ... plant die Regierung deshalb einen Zuschuss» — السبب الارتفاع.",
  },
  {
    id: "f12",
    trapName: "معلومة من فقرة أخرى",
    trapNameDe: "Detail aus anderem Abschnitt",
    skill: "lesen",
    text: "Die neue Ausstellung im Stadtmuseum zeigt Werke moderner Künstler. Im Erdgeschoss sind Skulpturen zu sehen, im ersten Stock Gemälde. Die Eintrittskarte kostet 12 Euro, für Studierende 6 Euro. Die Öffnungszeiten: dienstags bis sonntags von 10 bis 18 Uhr.",
    textAr: "المعرض الجديد في متحف المدينة يعرض أعمال فنانين معاصرين. في الطابق الأرضي منحوتات، وفي الأول لوحات. تذكرة الدخول 12 يورو، وللطلاب 6. أوقات الزيارة: الثلاثاء إلى الأحد 10-18.",
    question: "Was befindet sich im ersten Stock?",
    questionAr: "ماذا يوجد في الطابق الأول؟",
    options: ["Skulpturen", "Gemälde", "Das Café"],
    correct: 1,
    trap: 0,
    whyTrap: "«Skulpturen» مذكورة في نفس النص لكن في الطابق الأرضي — الخيار يبدو مألوفاً لكنه من فقرة أخرى.",
    whyCorrect: "«im ersten Stock Gemälde» — اللوحات في الطابق الأول.",
  },
];
