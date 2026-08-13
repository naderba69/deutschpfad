import type { TestQuestion } from "@/types/test";

/**
 * بنوك أسئلة الاختبارات — المستويات الأربعة
 * المهارات: قواعد، مفردات، قراءة، استماع، كتابة
 * (تُسحب عشوائياً في كل جلسة اختبار)
 */

export const TEST_BANK: TestQuestion[] = [
  /* ═══════════ A1 — قواعد ═══════════ */
  { id: "a1-g1", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Ich ___ aus Tunesien.", questionAr: "أنا من تونس.", options: ["bin", "bist", "ist", "sind"], correctIndex: 0, explanation: "مع ich: bin." },
  { id: "a1-g2", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Das ist ___ Mutter.", options: ["meine", "mein", "meinen", "meinem"], correctIndex: 0, explanation: "Mutter مؤنثة → meine." },
  { id: "a1-g3", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Ich esse ___ Apfel.", options: ["einen", "ein", "eine", "der"], correctIndex: 0, explanation: "النصب المذكر: einen." },
  { id: "a1-g4", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "___ du Hunger? — Ja, ich habe Hunger.", options: ["Hast", "Habe", "Hat", "Habt"], correctIndex: 0, explanation: "السؤال عن du: Hast." },
  { id: "a1-g5", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Das Buch ist ___ Tisch. (على)", options: ["auf dem", "auf den", "auf der", "auf das"], correctIndex: 0, explanation: "السكون مع المذكر: auf dem." },
  { id: "a1-g6", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Wie ___ du? — Ich heiße Sami.", options: ["heißt", "heiße", "heiß", "heißen"], correctIndex: 0, explanation: "السؤال عن الاسم: Wie heißt du?" },
  { id: "a1-g7", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Ich ___ gern Fußball. (أحب أن ألعب)", options: ["spiele", "spielst", "spielt", "spielen"], correctIndex: 0, explanation: "مع ich: spiele + gern." },
  { id: "a1-g8", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Es ist ___ acht. (7:30)", options: ["halb", "viertel", "um", "am"], correctIndex: 0, explanation: "halb acht = 7:30." },
  { id: "a1-g9", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "Ich habe ___ Bruder. (نفي — ليس لدي أخ)", options: ["keinen", "kein", "keine", "nicht"], correctIndex: 0, explanation: "النفي مع النصب المذكر: keinen." },
  { id: "a1-g10", skill: "grammatik", level: "A1", kind: "mcq", questionDe: "___ Sie bitte! (تعالوا — أمر مهذب)", options: ["Kommen", "Komm", "Kommt", "Komme"], correctIndex: 0, explanation: "الأمر المهذب: Kommen Sie!" },

  /* ═══════════ A1 — مفردات ═══════════ */
  { id: "a1-v1", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "die Mutter", options: ["الأم", "الأب", "الأخت", "الجدة"], correctIndex: 0, explanation: "die Mutter = الأم." },
  { id: "a1-v2", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "das Brot", options: ["الخبز", "الحليب", "الجبن", "التفاحة"], correctIndex: 0, explanation: "das Brot = الخبز." },
  { id: "a1-v3", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "wohnen", options: ["يسكن", "يعمل", "يأكل", "يسافر"], correctIndex: 0, explanation: "wohnen = يسكن." },
  { id: "a1-v4", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "die Uhr", options: ["الساعة", "الطاولة", "الكرسي", "النافذة"], correctIndex: 0, explanation: "die Uhr = الساعة." },
  { id: "a1-v5", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "billig", options: ["رخيص", "غالٍ", "جديد", "قديم"], correctIndex: 0, explanation: "billig = رخيص." },
  { id: "a1-v6", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "die Schwester", options: ["الأخت", "الأخ", "الابنة", "العمّة"], correctIndex: 0, explanation: "die Schwester = الأخت." },
  { id: "a1-v7", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "der Bahnhof", options: ["محطة القطار", "المطار", "البنك", "المستشفى"], correctIndex: 0, explanation: "der Bahnhof = محطة القطار." },
  { id: "a1-v8", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "gern", options: ["بسرور/يحب أن", "غاضب", "متعب", "سريع"], correctIndex: 0, explanation: "gern = بسرور." },
  { id: "a1-v9", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "der Regen", options: ["المطر", "الثلج", "الرياح", "الشمس"], correctIndex: 0, explanation: "der Regen = المطر." },
  { id: "a1-v10", skill: "wortschatz", level: "A1", kind: "mcq", questionDe: "kaufen", options: ["يشتري", "يبيع", "يدفع", "يحسب"], correctIndex: 0, explanation: "kaufen = يشتري." },

  /* ═══════════ A1 — قراءة ═══════════ */
  {
    id: "a1-r1", skill: "lesen", level: "A1", kind: "reading",
    text: "Hallo! Ich heiße Mona und wohne in Tunis. Meine Familie ist groß: Ich habe einen Bruder und zwei Schwestern. Ich lerne Deutsch, weil ich nach Deutschland reisen möchte. Am Wochenende gehe ich gern ins Kino.",
    textAr: "مرحباً! اسمي منى وأسكن في تونس. عائلتي كبيرة: لدي أخ وأختان. أتعلم الألمانية لأنني أريد السفر إلى ألمانيا. في نهاية الأسبوع أذهب بسرور إلى السينما.",
    questions: [
      { q: "Wie viele Schwestern hat Mona?", qAr: "كم عدد أخوات منى؟", options: ["zwei", "eine", "drei", "keine"], correct: 0, explanation: "قالت: zwei Schwestern." },
      { q: "Warum lernt Mona Deutsch?", qAr: "لماذا تتعلم منى الألمانية؟", options: ["weil sie reisen möchte", "weil sie arbeiten will", "weil sie in Tunis bleibt", "weil sie krank ist"], correct: 0, explanation: "لأنها تريد السفر." },
      { q: "Was macht Mona am Wochenende?", qAr: "ماذا تفعل منى في نهاية الأسبوع؟", options: ["ins Kino gehen", "arbeiten", "schlafen", "einkaufen"], correct: 0, explanation: "تذهب إلى السينما." },
    ],
  },
  {
    id: "a1-r2", skill: "lesen", level: "A1", kind: "reading",
    text: "Sami arbeitet als Koch in einem Restaurant. Er steht um sechs Uhr auf und kocht bis vierzehn Uhr. Am Abend sieht er fern oder liest ein Buch. Am Sonntag besucht er seine Eltern.",
    textAr: "يعمل سامي طباخاً في مطعم. يستيقظ في السادسة ويطبخ حتى الثانية عشرة. مساءً يشاهد التلفاز أو يقرأ كتاباً. يوم الأحد يزور والديه.",
    questions: [
      { q: "Was ist Sami von Beruf?", qAr: "ما مهنة سامي؟", options: ["Koch", "Lehrer", "Arzt", "Fahrer"], correct: 0, explanation: "طباخ." },
      { q: "Wann steht Sami auf?", qAr: "متى يستيقظ سامي؟", options: ["um sechs Uhr", "um sieben Uhr", "um acht Uhr", "um zehn Uhr"], correct: 0, explanation: "في السادسة." },
      { q: "Was macht Sami am Sonntag?", qAr: "ماذا يفعل سامي يوم الأحد؟", options: ["seine Eltern besuchen", "arbeiten", "einkaufen", "schwimmen"], correct: 0, explanation: "يزور والديه." },
    ],
  },

  /* ═══════════ A1 — استماع ═══════════ */
  {
    id: "a1-h1", skill: "hören", level: "A1", kind: "listening",
    text: "Guten Tag! Ich heiße Karim. Ich komme aus Tunesien und wohne jetzt in Berlin. Ich lerne Deutsch in einem Kurs. Am Abend treffe ich Freunde.",
    textAr: "نهارك سعيد! اسمي كريم. أنا من تونس وأسكن الآن في برلين. أتعلم الألمانية في دورة. مساءً ألتقي الأصدقاء.",
    questions: [
      { q: "Wie heißt der Mann?", qAr: "ما اسم الرجل؟", options: ["Karim", "Sami", "Anna", "Mona"], correct: 0, explanation: "اسمه كريم." },
      { q: "Wo wohnt er jetzt?", qAr: "أين يسكن الآن؟", options: ["in Berlin", "in Tunis", "in München", "in Hamburg"], correct: 0, explanation: "في برلين." },
    ],
  },
  {
    id: "a1-h2", skill: "hören", level: "A1", kind: "listening",
    text: "Hallo Anna! Ich habe heute Geburtstag. Kommst du zu meiner Party? Sie beginnt um sieben Uhr bei mir zu Hause. Es gibt Kuchen und Musik!",
    textAr: "مرحباً آنا! عيد ميلادي اليوم. هل تأتين إلى حفلتي؟ تبدأ في السابعة عندي في البيت. يوجد كعك وموسيقى!",
    questions: [
      { q: "Was gibt es auf der Party?", qAr: "ماذا يوجد في الحفلة؟", options: ["Kuchen und Musik", "nur Kuchen", "nur Musik", "Filme"], correct: 0, explanation: "كعك وموسيقى." },
      { q: "Wann beginnt die Party?", qAr: "متى تبدأ الحفلة؟", options: ["um sieben Uhr", "um sechs Uhr", "um acht Uhr", "um neun Uhr"], correct: 0, explanation: "في السابعة." },
    ],
  },

  /* ═══════════ A1 — كتابة ═══════════ */
  { id: "a1-w1", skill: "schreiben", level: "A1", kind: "writing", prompt: "Stell dich vor: Name, Land, Wohnort.", promptAr: "قدّم نفسك: الاسم، البلد، مكان السكن.", rubric: "3 جمل كاملة على الأقل", sampleAnswer: "Ich heiße Sami. Ich komme aus Tunesien. Ich wohne in Tunis.", points: 10 },
  { id: "a1-w2", skill: "schreiben", level: "A1", kind: "writing", prompt: "Beschreibe deine Familie.", promptAr: "صف عائلتك.", rubric: "جملتان على الأقل", sampleAnswer: "Meine Familie ist groß. Ich habe einen Bruder und eine Schwester.", points: 10 },
  { id: "a1-w3", skill: "schreiben", level: "A1", kind: "writing", prompt: "Was machst du am Wochenende?", promptAr: "ماذا تفعل في نهاية الأسبوع؟", rubric: "جملة كاملة", sampleAnswer: "Am Wochenende gehe ich gern ins Kino.", points: 10 },

  /* ═══════════ A2 — قواعد ═══════════ */
  { id: "a2-g1", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Ich ___ gestern nach Berlin ___.", options: ["bin ... geflogen", "habe ... geflogen", "bin ... gefliegen", "habe ... gefliegen"], correctIndex: 0, explanation: "fliegen حركة → bin geflogen." },
  { id: "a2-g2", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Ich glaube, dass er heute ___.", options: ["kommt", "kommen", "kommst", "komme"], correctIndex: 0, explanation: "الفعل في نهاية الثانوية." },
  { id: "a2-g3", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Kannst du ___ helfen? (أنا)", options: ["mir", "mich", "dich", "dir"], correctIndex: 0, explanation: "helfen يأخذ Dativ: mir." },
  { id: "a2-g4", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Es gibt ___ Park in der Stadt.", options: ["einen", "ein", "eine", "der"], correctIndex: 0, explanation: "es gibt + نصب مذكر: einen." },
  { id: "a2-g5", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Der Zug ist ___ als der Bus.", options: ["schneller", "schnell", "am schnellsten", "schnelle"], correctIndex: 0, explanation: "المقارنة: schneller als." },
  { id: "a2-g6", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Du ___ viel trinken. (نصيحة)", options: ["sollst", "soll", "sollt", "sollen"], correctIndex: 0, explanation: "مع du: sollst." },
  { id: "a2-g7", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Ich lege das Buch auf ___ Tisch. (حركة)", options: ["den", "dem", "der", "das"], correctIndex: 0, explanation: "legen حركة → auf den." },
  { id: "a2-g8", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Ich ___ mich. (أفرح)", options: ["freue", "freust", "freut", "freuen"], correctIndex: 0, explanation: "sich freuen: ich freue mich." },
  { id: "a2-g9", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Es regnet, ___ bleibe ich zu Hause.", options: ["deshalb", "aber", "und", "denn"], correctIndex: 0, explanation: "لذلك → deshalb (مقلوبة)." },
  { id: "a2-g10", skill: "grammatik", level: "A2", kind: "mcq", questionDe: "Ich ___ gestern im Büro. (كنت)", options: ["war", "hatte", "bin", "habe"], correctIndex: 0, explanation: "Präteritum sein: war." },

  /* ═══════════ A2 — مفردات ═══════════ */
  { id: "a2-v1", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "die Prüfung", options: ["الامتحان", "الدورة", "الدرس", "الواجب"], correctIndex: 0, explanation: "die Prüfung = الامتحان." },
  { id: "a2-v2", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "die Rechnung", options: ["الحساب/الفاتورة", "الطلب", "القائمة", "الإكرامية"], correctIndex: 0, explanation: "die Rechnung = الحساب." },
  { id: "a2-v3", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "lecker", options: ["لذيذ", "غالٍ", "بارد", "سريع"], correctIndex: 0, explanation: "lecker = لذيذ." },
  { id: "a2-v4", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "die Miete", options: ["الإيجار", "الضمان", "الراتب", "الفاتورة"], correctIndex: 0, explanation: "die Miete = الإيجار." },
  { id: "a2-v5", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "umsteigen", options: ["يغيّر وسيلة", "ينتظر", "يصل", "ينطلق"], correctIndex: 0, explanation: "umsteigen = يغيّر وسيلة." },
  { id: "a2-v6", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "die Werbung", options: ["الإعلانات", "الأخبار", "الصحيفة", "الرأي"], correctIndex: 0, explanation: "die Werbung = الإعلانات." },
  { id: "a2-v7", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "das Konto", options: ["الحساب البنكي", "المال", "البطاقة", "الدفتر"], correctIndex: 0, explanation: "das Konto = الحساب البنكي." },
  { id: "a2-v8", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "sich beschweren", options: ["يقدم شكوى", "يستعجل", "يسجل", "يغضب"], correctIndex: 0, explanation: "sich beschweren = يقدم شكوى." },
  { id: "a2-v9", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "trotzdem", options: ["رغم ذلك", "لذلك", "لكن", "ثم"], correctIndex: 0, explanation: "trotzdem = رغم ذلك." },
  { id: "a2-v10", skill: "wortschatz", level: "A2", kind: "mcq", questionDe: "der Termin", options: ["الموعد", "التأخير", "الاجتماع", "الرحلة"], correctIndex: 0, explanation: "der Termin = الموعد." },

  /* ═══════════ A2 — قراءة ═══════════ */
  {
    id: "a2-r1", skill: "lesen", level: "A2", kind: "reading",
    text: "Letzte Woche habe ich Urlaub gemacht. Ich bin nach Berlin geflogen und habe viele Museen besucht. Das Wetter war schön, deshalb bin ich viel spazieren gegangen. Ich habe auch typisches Essen probiert: Currywurst und Brezel. Es hat mir sehr gut geschmeckt!",
    textAr: "أخذت إجازة الأسبوع الماضي. طرت إلى برلين وزرت متاحف كثيرة. كان الطقس جميلاً لذلك مشيت كثيراً. جربت أيضاً طعاماً تقليدياً: كاريورست وبريتزل. كان طعمه جيداً جداً!",
    questions: [
      { q: "Was hat der Autor in Berlin besucht?", qAr: "ماذا زار الكاتب في برلين؟", options: ["Museen", "Parks", "Restaurants", "Kinos"], correct: 0, explanation: "زار متاحف." },
      { q: "Was hat er probiert?", qAr: "ماذا جرب؟", options: ["Currywurst und Brezel", "Pizza und Salat", "Fisch und Reis", "Suppe und Brot"], correct: 0, explanation: "كاريورست وبريتزل." },
      { q: "Wie war das Wetter?", qAr: "كيف كان الطقس؟", options: ["schön", "schlecht", "kalt", "regnerisch"], correct: 0, explanation: "جميل." },
    ],
  },
  {
    id: "a2-r2", skill: "lesen", level: "A2", kind: "reading",
    text: "Anna sucht eine Wohnung. Sie möchte eine Wohnung mit zwei Zimmern in der Stadtmitte. Die Miete soll nicht mehr als 700 Euro kosten. Gestern hat sie eine Anzeige gesehen: eine schöne Wohnung neben dem Park, 650 Euro warm. Sie ruft heute an.",
    textAr: "تبحث آنا عن شقة. تريد شقة بغرفتين في وسط المدينة. يجب ألا يتجاوز الإيجار 700 يورو. أمس رأت إعلاناً: شقة جميلة بجانب الحديقة، 650 يورو شاملة التدفئة. ستتصل اليوم.",
    questions: [
      { q: "Was sucht Anna?", qAr: "ماذا تبحث آنا؟", options: ["eine Wohnung", "ein Haus", "ein Zimmer", "eine Garage"], correct: 0, explanation: "شقة." },
      { q: "Wie viel kostet die Wohnung?", qAr: "بكم الشقة؟", options: ["650 Euro", "700 Euro", "600 Euro", "800 Euro"], correct: 0, explanation: "650 يورو." },
      { q: "Wo liegt die Wohnung?", qAr: "أين تقع الشقة؟", options: ["neben dem Park", "neben der Schule", "im Zentrum", "am Bahnhof"], correct: 0, explanation: "بجانب الحديقة." },
    ],
  },

  /* ═══════════ A2 — استماع ═══════════ */
  {
    id: "a2-h1", skill: "hören", level: "A2", kind: "listening",
    text: "Entschuldigung, ich möchte mich beschweren. Ich habe gestern ein Handy gekauft, aber es funktioniert nicht. Können Sie es reparieren oder mir ein neues geben?",
    textAr: "عذراً، أريد تقديم شكوى. اشتريت أمس هاتفاً لكنه لا يعمل. هل يمكنكم إصلاحه أو إعطائي جديداً؟",
    questions: [
      { q: "Was hat der Kunde gekauft?", qAr: "ماذا اشترى الزبون؟", options: ["ein Handy", "einen Computer", "eine Kamera", "einen Fernseher"], correct: 0, explanation: "هاتفاً." },
      { q: "Was ist das Problem?", qAr: "ما المشكلة؟", options: ["Es funktioniert nicht", "Es ist teuer", "Es ist klein", "Es ist kaputt nur außen"], correct: 0, explanation: "لا يعمل." },
    ],
  },
  {
    id: "a2-h2", skill: "hören", level: "A2", kind: "listening",
    text: "Guten Tag, ich möchte eine Fahrkarte nach München, bitte. Hin und zurück. Wann fährt der nächste Zug ab? Um zehn Uhr fünfundzwanzig von Gleis drei.",
    textAr: "نهارك سعيد، أريد تذكرة إلى ميونخ من فضلك. ذهاب وعودة. متى ينطلق القطار التالي؟ في العاشرة وخمس وعشرين دقيقة من الرصيف الثالث.",
    questions: [
      { q: "Wohin fährt der Kunde?", qAr: "إلى أين يسافر الزبون؟", options: ["nach München", "nach Berlin", "nach Hamburg", "nach Köln"], correct: 0, explanation: "إلى ميونخ." },
      { q: "Wann fährt der Zug ab?", qAr: "متى ينطلق القطار؟", options: ["um 10:25", "um 10:05", "um 11:25", "um 9:25"], correct: 0, explanation: "في 10:25." },
    ],
  },

  /* ═══════════ A2 — كتابة ═══════════ */
  { id: "a2-w1", skill: "schreiben", level: "A2", kind: "writing", prompt: "Schreibe über deinen letzten Urlaub. (Perfekt)", promptAr: "اكتب عن إجازتك الأخيرة (بالماضي التام).", rubric: "3 جمل بـ Perfekt", sampleAnswer: "Ich bin nach Sousse gefahren. Ich habe geschwommen und viel gegessen. Das Hotel war sehr schön.", points: 10 },
  { id: "a2-w2", skill: "schreiben", level: "A2", kind: "writing", prompt: "Schreibe eine E-Mail: Du lädst einen Freund zu deiner Party ein.", promptAr: "اكتب بريداً: تدعو صديقاً لحفلتك.", rubric: "بداية + دعوة + وقت + مكان", sampleAnswer: "Hallo Karim! Ich habe am Samstag Geburtstag. Kommst du zu meiner Party? Sie beginnt um sieben Uhr bei mir. Bis bald! Mona", points: 10 },
  { id: "a2-w3", skill: "schreiben", level: "A2", kind: "writing", prompt: "Beschreibe deine Wohnung.", promptAr: "صف شقتك.", rubric: "3 جمل (غرف + أثاث)", sampleAnswer: "Meine Wohnung hat drei Zimmer: eine Küche, ein Wohnzimmer und ein Schlafzimmer. Das Wohnzimmer ist groß und modern.", points: 10 },

  /* ═══════════ B1 — قواعد ═══════════ */
  { id: "b1-g1", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Das ist das Buch ___ Lehrers.", options: ["des", "der", "dem", "den"], correctIndex: 0, explanation: "Genitiv: des Lehrers." },
  { id: "b1-g2", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Der Mann, ___ dort steht, ist mein Vater.", options: ["der", "den", "dem", "dessen"], correctIndex: 0, explanation: "فاعل مذكر: der." },
  { id: "b1-g3", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Das Haus ___ 1900 gebaut. (بُني)", options: ["wurde", "wird", "ist", "war"], correctIndex: 0, explanation: "ماضٍ مجهول: wurde gebaut." },
  { id: "b1-g4", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Wenn ich reich ___, würde ich reisen.", options: ["wäre", "bin", "war", "werde"], correctIndex: 0, explanation: "Konjunktiv II: wäre." },
  { id: "b1-g5", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "ein ___ (gut) Buch", options: ["gutes", "gute", "guten", "guter"], correctIndex: 0, explanation: "محايد مع ein: gutes." },
  { id: "b1-g6", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "___ ich jung war, lebte ich in Tunis.", options: ["Als", "Wenn", "Während", "Bis"], correctIndex: 0, explanation: "ماضٍ مرة → als." },
  { id: "b1-g7", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Ich ___ morgen lernen. (سأتعلم)", options: ["werde", "wirst", "wird", "werden"], correctIndex: 0, explanation: "Futur I: werde." },
  { id: "b1-g8", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Ich habe ___ Zeit ___ Geld.", options: ["weder ... noch", "nicht nur ... sondern auch", "entweder ... oder", "sowohl ... als auch"], correctIndex: 0, explanation: "لا ولا: weder... noch." },
  { id: "b1-g9", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Ich sehe den ___. (طالب — نصب)", options: ["Studenten", "Student", "Studentes", "Studenten"], correctIndex: 0, explanation: "n-Deklination: den Studenten." },
  { id: "b1-g10", skill: "grammatik", level: "B1", kind: "mcq", questionDe: "Bevor ich studierte, ___ ich gearbeitet.", options: ["hatte", "habe", "hat", "haben"], correctIndex: 0, explanation: "Plusquamperfekt: hatte gearbeitet." },

  /* ═══════════ B1 — مفردات ═══════════ */
  { id: "b1-v1", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "der Lebenslauf", options: ["السيرة الذاتية", "خطاب التقديم", "العقد", "الشهادة"], correctIndex: 0, explanation: "der Lebenslauf = السيرة الذاتية." },
  { id: "b1-v2", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "der Klimawandel", options: ["تغير المناخ", "التلوث", "إعادة التدوير", "الطاقة"], correctIndex: 0, explanation: "تغير المناخ." },
  { id: "b1-v3", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "die Bewerbung", options: ["طلب الوظيفة", "المقابلة", "الراتب", "الإجازة"], correctIndex: 0, explanation: "طلب الوظيفة." },
  { id: "b1-v4", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "die Regierung", options: ["الحكومة", "البرلمان", "القانون", "الانتخاب"], correctIndex: 0, explanation: "الحكومة." },
  { id: "b1-v5", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "während", options: ["بينما", "عندما (ماضٍ)", "قبل أن", "حتى"], correctIndex: 0, explanation: "بينما." },
  { id: "b1-v6", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "das Gemälde", options: ["اللوحة", "المتحف", "الرسام", "المعرض"], correctIndex: 0, explanation: "اللوحة." },
  { id: "b1-v7", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "die Spende", options: ["التبرع", "المساعدة", "الجمعية", "العضو"], correctIndex: 0, explanation: "التبرع." },
  { id: "b1-v8", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "sich bewerben", options: ["يتقدم (لوظيفة)", "يستقيل", "يترشح", "يقدم شكوى"], correctIndex: 0, explanation: "يتقدم." },
  { id: "b1-v9", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "die Wahl", options: ["الانتخاب", "الاختيار", "القرار", "الرأي"], correctIndex: 0, explanation: "الانتخاب." },
  { id: "b1-v10", skill: "wortschatz", level: "B1", kind: "mcq", questionDe: "entweder ... oder", options: ["إما ... أو", "لا ... ولا", "ليس فقط بل أيضاً", "كلما ... كلما"], correctIndex: 0, explanation: "إما أو." },

  /* ═══════════ B1 — قراءة ═══════════ */
  {
    id: "b1-r1", skill: "lesen", level: "B1", kind: "reading",
    text: "Der Student, der Informatik studiert, möchte später in Deutschland arbeiten. Er interessiert sich für künstliche Intelligenz, weil sie viele Bereiche verändert. Wenn er genug Erfahrung hätte, würde er sich sofort bewerben. Sein Traum ist eine Stelle bei einem großen Technologieunternehmen.",
    textAr: "الطالب الذي يدرس المعلوماتية يريد العمل لاحقاً في ألمانيا. يهتم بالذكاء الاصطناعي لأنه يغير مجالات كثيرة. لو كان لديه خبرة كافية لتقدم فوراً. حلمه منصب في شركة تقنية كبيرة.",
    questions: [
      { q: "Was studiert der Student?", qAr: "ماذا يدرس الطالب؟", options: ["Informatik", "Medizin", "Jura", "Wirtschaft"], correct: 0, explanation: "المعلوماتية." },
      { q: "Warum interessiert er sich für KI?", qAr: "لماذا يهتم بالذكاء الاصطناعي؟", options: ["weil sie viele Bereiche verändert", "weil sie neu ist", "weil sie billig ist", "weil sie einfach ist"], correct: 0, explanation: "لأنه يغير مجالات كثيرة." },
      { q: "Was würde er mit genug Erfahrung machen?", qAr: "ماذا كان سيفعل بخبرة كافية؟", options: ["sich sofort bewerben", "eine Firma gründen", "studieren", "reisen"], correct: 0, explanation: "التقدم فوراً." },
    ],
  },
  {
    id: "b1-r2", skill: "lesen", level: "B1", kind: "reading",
    text: "Die Umwelt wird immer wichtiger. Der Müll wird getrennt und recycelt, aber es wird noch zu wenig getan. Man kann die Umwelt schützen, indem man mit dem Fahrrad fährt und Energie spart. Je mehr Menschen mitmachen, desto besser wird die Situation.",
    textAr: "تصبح البيئة أكثر أهمية. تُفصل النفايات وتُعاد تدويرها لكن يُفعل القليل. يمكن حماية البيئة بركوب الدراجة وتوفير الطاقة. كلما شارك الناس أكثر كانت الحالة أفضل.",
    questions: [
      { q: "Was wird mit dem Müll gemacht?", qAr: "ماذا يُفعل بالنفايات؟", options: ["getrennt und recycelt", "verbrannt", "vergraben", "ins Meer geworfen"], correct: 0, explanation: "تُفصل وتُعاد تدويرها." },
      { q: "Wie kann man die Umwelt schützen?", qAr: "كيف يمكن حماية البيئة؟", options: ["mit dem Fahrrad fahren", "mit dem Auto fahren", "viel kaufen", "wenig schlafen"], correct: 0, explanation: "بركوب الدراجة." },
    ],
  },

  /* ═══════════ B1 — استماع ═══════════ */
  {
    id: "b1-h1", skill: "hören", level: "B1", kind: "listening",
    text: "Als ich in Deutschland ankam, hatte ich keine Erfahrung. Ich lernte Deutsch, weil ich studieren wollte. Wenn ich damals mehr geübt hätte, wäre die Prüfung leichter gewesen. Aber jetzt bin ich froh, dass ich durchgehalten habe.",
    textAr: "عندما وصلت إلى ألمانيا لم تكن لدي خبرة. تعلمت الألمانية لأنني أردت الدراسة. لو تدربت أكثر حينها لكان الامتحان أسهل. لكنني الآن سعيد أنني صمدت.",
    questions: [
      { q: "Warum lernte er Deutsch?", qAr: "لماذا تعلم الألمانية؟", options: ["weil er studieren wollte", "weil er arbeiten wollte", "weil er reisen wollte", "weil er heiraten wollte"], correct: 0, explanation: "لأنه أراد الدراسة." },
      { q: "Was wäre mit mehr Übung passiert?", qAr: "ماذا كان سيحدث بمزيد من التدريب؟", options: ["Die Prüfung wäre leichter gewesen", "Die Prüfung wäre schwerer gewesen", "Nichts", "Er wäre gegangen"], correct: 0, explanation: "كان الامتحان أسهل." },
    ],
  },
  {
    id: "b1-h2", skill: "hören", level: "B1", kind: "listening",
    text: "Mein Plan für die Zukunft: Ich werde nächstes Jahr in Deutschland studieren, weil ich die Kultur liebe. Die Universität, die ich gewählt habe, liegt in München. Wenn ich angenommen werde, werde ich umziehen und eine Wohnung suchen.",
    textAr: "خطتي للمستقبل: سأدرس في ألمانيا السنة القادمة لأنني أحب الثقافة. الجامعة التي اخترتها في ميونخ. إذا قُبلت سأنتقل وأبحث عن شقة.",
    questions: [
      { q: "Wo liegt die Universität?", qAr: "أين تقع الجامعة؟", options: ["in München", "in Berlin", "in Hamburg", "in Köln"], correct: 0, explanation: "في ميونخ." },
      { q: "Was wird er nach der Zulassung machen?", qAr: "ماذا سيفعل بعد القبول؟", options: ["umziehen", "arbeiten", "reisen", "bleiben"], correct: 0, explanation: "ينتقل." },
    ],
  },

  /* ═══════════ B1 — كتابة ═══════════ */
  { id: "b1-w1", skill: "schreiben", level: "B1", kind: "writing", prompt: "Schreibe eine Bewerbung (kurz): Stelle, Erfahrung, Motivation.", promptAr: "اكتب طلب وظيفة قصيراً: المنصب، الخبرة، الحوافز.", rubric: "بداية رسمية + 3 جمل + نهاية رسمية", sampleAnswer: "Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle als Verkäufer. Ich habe drei Jahre Erfahrung und lege Wert auf Teamarbeit. Über ein Gespräch freue ich mich. Mit freundlichen Grüßen, Sami Ben Ali.", points: 10 },
  { id: "b1-w2", skill: "schreiben", level: "B1", kind: "writing", prompt: "Schreibe deine Meinung: Sollte man Fremdsprachen lernen? (weil + Konjunktiv II)", promptAr: "اكتب رأيك: هل يجب تعلم اللغات الأجنبية؟ (لأن + شرطية)", rubric: "3 حجج بجمل مركبة", sampleAnswer: "Ich finde, dass man Fremdsprachen lernen sollte, weil sie Türen öffnen. Wenn ich keine Sprachen gelernt hätte, wäre mein Leben anders. Außerdem macht Lernen Spaß.", points: 10 },
  { id: "b1-w3", skill: "schreiben", level: "B1", kind: "writing", prompt: "Schreibe über deine Zukunftspläne (Futur I + wenn).", promptAr: "اكتب عن خططك المستقبلية (مستقبل + إذا).", rubric: "3 جمل", sampleAnswer: "Ich werde in Deutschland studieren, weil ich die Kultur liebe. Wenn ich Zeit habe, werde ich reisen. Ich werde Deutsch weiter lernen.", points: 10 },

  /* ═══════════ B2 — قواعد ═══════════ */
  { id: "b2-g1", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Er sagt, er ___ Zeit. (نقل كلام)", options: ["habe", "hat", "hätte", "haben"], correctIndex: 0, explanation: "Konjunktiv I: habe." },
  { id: "b2-g2", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Die Tür ___ geöffnet. (حالة — مفتوحة)", options: ["ist", "wird", "kann", "wurde"], correctIndex: 0, explanation: "Zustandspassiv: ist geöffnet." },
  { id: "b2-g3", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Der Mann, ___ ich warte, ist mein Anwalt.", options: ["auf den", "den auf", "auf dem", "auf der"], correctIndex: 0, explanation: "warten auf + نصب: auf den." },
  { id: "b2-g4", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Alles, ___ du sagst, ist wichtig.", options: ["was", "das", "wo", "der"], correctIndex: 0, explanation: "بعد alles: was." },
  { id: "b2-g5", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "das ___ Kind (يلعب)", options: ["spielende", "gespielte", "spielend", "spielt"], correctIndex: 0, explanation: "Partizip I: spielende." },
  { id: "b2-g6", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Man lernt, ___ man übt.", options: ["indem", "anstatt", "ohne", "damit"], correctIndex: 0, explanation: "طريقة → indem." },
  { id: "b2-g7", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "___ zu schlafen, arbeitete er.", options: ["Anstatt", "Indem", "Ohne", "Damit"], correctIndex: 0, explanation: "بدلاً من → anstatt...zu." },
  { id: "b2-g8", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Bis 2030 werde ich Deutsch gelernt ___.", options: ["haben", "sein", "gehabt", "worden"], correctIndex: 0, explanation: "Futur II: haben." },
  { id: "b2-g9", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Ich interessiere mich ___ Musik.", options: ["für", "auf", "von", "um"], correctIndex: 0, explanation: "sich interessieren für." },
  { id: "b2-g10", skill: "grammatik", level: "B2", kind: "mcq", questionDe: "Das Problem lässt ___ lösen.", options: ["sich", "mich", "dich", "uns"], correctIndex: 0, explanation: "sich lassen." },

  /* ═══════════ B2 — مفردات ═══════════ */
  { id: "b2-v1", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "die Entdeckung", options: ["الاكتشاف", "التجربة", "الاختراع", "البحث"], correctIndex: 0, explanation: "الاكتشاف." },
  { id: "b2-v2", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "die Inflation", options: ["التضخم", "الأسهم", "المبيعات", "الاستثمار"], correctIndex: 0, explanation: "التضخم." },
  { id: "b2-v3", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "der Zeuge", options: ["الشاهد", "المحامي", "القاضي", "المتهم"], correctIndex: 0, explanation: "الشاهد." },
  { id: "b2-v4", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "die Erörterung", options: ["المقال الجدلي", "الرواية", "القصيدة", "المراجعة"], correctIndex: 0, explanation: "المقال الجدلي." },
  { id: "b2-v5", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "die Fachsprache", options: ["لغة التخصص", "لغة الأم", "اللغة الأجنبية", "اللغة الرسمية"], correctIndex: 0, explanation: "لغة التخصص." },
  { id: "b2-v6", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "in Betracht ziehen", options: ["يأخذ بعين الاعتبار", "يضع تحت التصرف", "يولي أهمية", "يلعب دوراً"], correctIndex: 0, explanation: "يأخذ بعين الاعتبار." },
  { id: "b2-v7", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "meiner Ansicht nach", options: ["في رأيي", "بلا شك", "إلى حد ما", "خلاصةً"], correctIndex: 0, explanation: "في رأيي." },
  { id: "b2-v8", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "das Missverständnis", options: ["سوء الفهم", "التواصل", "السلوك", "الإنصات"], correctIndex: 0, explanation: "سوء الفهم." },
  { id: "b2-v9", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "das Anschreiben", options: ["خطاب التقديم", "السيرة الذاتية", "العقد", "الشهادة"], correctIndex: 0, explanation: "خطاب التقديم." },
  { id: "b2-v10", skill: "wortschatz", level: "B2", kind: "mcq", questionDe: "zusammenfassend", options: ["خلاصةً", "أولاً", "علاوة على ذلك", "مع ذلك"], correctIndex: 0, explanation: "خلاصةً." },

  /* ═══════════ B2 — قراءة ═══════════ */
  {
    id: "b2-r1", skill: "lesen", level: "B2", kind: "reading",
    text: "Es ist erwiesen, dass die Digitalisierung die Arbeitswelt grundlegend verändert. Einerseits schafft sie neue Berufe, andererseits macht sie viele alte überflüssig. Die Forscher, mit denen wir gesprochen haben, betonen, dass die Weiterbildung entscheidend sei. Meiner Ansicht nach brauchen wir ein Gleichgewicht zwischen Technologie und menschlicher Arbeit.",
    textAr: "ثابت أن الرقمنة تغير عالم العمل جذرياً. من ناحية تخلق مهناً جديدة، ومن ناحية أخرى تجعل مهناً قديمة زائدة. يؤكد الباحثون الذين تحدثنا معهم أن التدريب المستمر حاسم. في رأيي نحتاج توازناً بين التقنية والعمل البشري.",
    questions: [
      { q: "Was verändert die Digitalisierung?", qAr: "ماذا تغير الرقمنة؟", options: ["die Arbeitswelt", "das Wetter", "die Politik", "die Schule"], correct: 0, explanation: "عالم العمل." },
      { q: "Was betonen die Forscher?", qAr: "ماذا يؤكد الباحثون؟", options: ["die Weiterbildung sei entscheidend", "die Technik sei nutzlos", "die Arbeit sei unnötig", "die Schule sei alt"], correct: 0, explanation: "أن التدريب حاسم." },
      { q: "Was brauchen wir laut Autor?", qAr: "ماذا نحتاج حسب الكاتب؟", options: ["ein Gleichgewicht", "mehr Technik", "keine Arbeit", "weniger Bildung"], correct: 0, explanation: "توازناً." },
    ],
  },
  {
    id: "b2-r2", skill: "lesen", level: "B2", kind: "reading",
    text: "Der Wissenschaftler, dessen Studie wir gelesen haben, behauptet, die Entdeckung könne die Medizin revolutionieren. Er sagt, die Ergebnisse seien sehr vielversprechend. Trotzdem warnt er, man dürfe nicht zu schnell jubeln, denn weitere Experimente seien nötig. Die Geduld, so betont er, sei der Schlüssel des Erfolgs.",
    textAr: "يزعم العالم الذي قرأنا دراسته أن الاكتشاف قد يحدث ثورة في الطب. يقول إن النتائج واعدة جداً. ومع ذلك يحذر من الاحتفال المبكر لأن تجارب أخرى ضرورية. الصبر، كما يؤكد، مفتاح النجاح.",
    questions: [
      { q: "Was behauptet der Wissenschaftler?", qAr: "ماذا يزعم العالم؟", options: ["Die Entdeckung könne die Medizin revolutionieren", "Die Entdeckung sei nutzlos", "Die Medizin sei alt", "Nichts"], correct: 0, explanation: "أن الاكتشاف قد يحدث ثورة." },
      { q: "Wovor warnt er?", qAr: "ماذا يحذر منه؟", options: ["zu schnellen Jubel", "zu viel Forschung", "zu viel Geld", "zu wenig Arbeit"], correct: 0, explanation: "من الاحتفال المبكر." },
      { q: "Was ist der Schlüssel des Erfolgs?", qAr: "ما مفتاح النجاح؟", options: ["die Geduld", "das Geld", "die Zeit", "die Kraft"], correct: 0, explanation: "الصبر." },
    ],
  },

  /* ═══════════ B2 — استماع ═══════════ */
  {
    id: "b2-h1", skill: "hören", level: "B2", kind: "listening",
    text: "Der Professor sagt, die Ergebnisse der Studie seien sehr positiv. Er behauptet, die neue Methode könne Zeit und Kosten sparen. Allerdings betont er, dass weitere Tests notwendig seien, bevor man die Methode überall anwenden könne.",
    textAr: "يقول الأستاذ إن نتائج الدراسة إيجابية جداً. يزعم أن الطريقة الجديدة قد توفر الوقت والتكاليف. ومع ذلك يؤكد أن اختبارات أخرى ضرورية قبل تطبيق الطريقة في كل مكان.",
    questions: [
      { q: "Wie sind die Ergebnisse laut Professor?", qAr: "كيف النتائج حسب الأستاذ؟", options: ["sehr positiv", "sehr schlecht", "unbekannt", "alt"], correct: 0, explanation: "إيجابية جداً." },
      { q: "Was kann die neue Methode sparen?", qAr: "ماذا يمكن للطريقة الجديدة أن توفر؟", options: ["Zeit und Kosten", "nur Zeit", "nur Kosten", "nichts"], correct: 0, explanation: "الوقت والتكاليف." },
    ],
  },
  {
    id: "b2-h2", skill: "hören", level: "B2", kind: "listening",
    text: "In der Besprechung wurde beschlossen, dass der Vertrag nächste Woche unterschrieben werde. Die Lieferung, so sagte die Chefin, könne erfolgen, sobald die Zahlung eingegangen sei. Man sei zuversichtlich, dass alles pünktlich klappe.",
    textAr: "في الاجتماع تقرر أن يُوقَّع العقد الأسبوع القادم. التسليم، كما قالت المديرة، يمكن أن يتم بمجرد وصول الدفعة. الجميع واثق أن كل شيء سيسير في موعده.",
    questions: [
      { q: "Was wurde beschlossen?", qAr: "ماذا تقرر؟", options: ["Der Vertrag wird nächste Woche unterschrieben", "Der Vertrag wird nicht unterschrieben", "Die Lieferung stoppt", "Die Firma schließt"], correct: 0, explanation: "يُوقَّع العقد الأسبوع القادم." },
      { q: "Wann kann die Lieferung erfolgen?", qAr: "متى يمكن أن يتم التسليم؟", options: ["wenn die Zahlung eingegangen ist", "sofort", "nie", "nächstes Jahr"], correct: 0, explanation: "بمجرد وصول الدفعة." },
    ],
  },

  /* ═══════════ B2 — كتابة ═══════════ */
  { id: "b2-w1", skill: "schreiben", level: "B2", kind: "writing", prompt: "Schreibe eine Erörterung: Sollte man im Internet anonym schreiben dürfen? (Einleitung + Pro/Contra + Schluss)", promptAr: "اكتب مقالاً جدلياً: هل يجب السماح بالكتابة المجهولة على الإنترنت؟ (مقدمة + مؤيد/معارض + خاتمة)", rubric: "هيكل كامل: مقدمة + 2 حجج + خاتمة", sampleAnswer: "Das Thema der Anonymität im Internet ist sehr aktuell. Einerseits schützt Anonymität die Meinungsfreiheit, andererseits ermöglicht sie Beleidigungen. Meiner Meinung nach brauchen wir Regeln, aber keine totale Überwachung. Zusammenfassend lässt sich sagen, dass ein Gleichgewicht nötig ist.", points: 15 },
  { id: "b2-w2", skill: "schreiben", level: "B2", kind: "writing", prompt: "Schreibe eine formelle E-Mail: Beschwerde über eine verspätete Lieferung.", promptAr: "اكتب بريداً رسمياً: شكوى عن تأخر التسليم.", rubric: "تحية رسمية + مشكلة + طلب حل + ختام", sampleAnswer: "Sehr geehrte Damen und Herren, die Lieferung, die ich vor zwei Wochen bestellt habe, ist noch nicht angekommen. Ich bitte Sie, die Angelegenheit zu prüfen. Ich erwarte die Lieferung bis Ende der Woche. Mit freundlichen Grüßen, Sami Ben Ali.", points: 15 },
  { id: "b2-w3", skill: "schreiben", level: "B2", kind: "writing", prompt: "Schreibe einen kurzen wissenschaftlichen Text über Sprachenlernen (Konjunktiv I + Nominalisierung + Passiv).", promptAr: "اكتب نصاً علمياً قصيراً عن تعلم اللغات (نقل كلام + اشتقاق + مجهول).", rubric: "3 جمل بأسلوب أكاديمي", sampleAnswer: "Es ist erwiesen, dass das Sprachenlernen das Gehirn stärkt. In der Forschung wird betont, dass die Motivation eine wichtige Rolle spiele. Die Verbesserung der Lernmethoden ist daher entscheidend.", points: 15 },

  /* ═══════════ A1 — قراءة إضافية ═══════════ */
  {
    id: "a1-r3", skill: "lesen", level: "A1", kind: "reading",
    text: "Anna ist Studentin. Sie wohnt in München und studiert Medizin. Am Morgen geht sie in die Universität, am Nachmittag arbeitet sie im Krankenhaus. Am Wochenende besucht sie ihre Eltern oder trifft Freunde. Sie lernt auch Spanisch, weil sie später in Spanien arbeiten möchte.",
    textAr: "آنا طالبة. تسكن في ميونخ وتدرس الطب. صباحاً تذهب إلى الجامعة وبعد الظهر تعمل في المستشفى. في نهاية الأسبوع تزور والديها أو تلتقي أصدقاء. تتعلم أيضاً الإسبانية لأنها تريد العمل في إسبانيا لاحقاً.",
    questions: [
      { q: "Was studiert Anna?", qAr: "ماذا تدرس آنا؟", options: ["Medizin", "Spanisch", "Jura", "Musik"], correct: 0, explanation: "تدرس الطب." },
      { q: "Wo arbeitet Anna am Nachmittag?", qAr: "أين تعمل آنا بعد الظهر؟", options: ["im Krankenhaus", "im Büro", "in der Schule", "im Geschäft"], correct: 0, explanation: "في المستشفى." },
      { q: "Warum lernt Anna Spanisch?", qAr: "لماذا تتعلم آنا الإسبانية؟", options: ["weil sie in Spanien arbeiten möchte", "weil es einfach ist", "weil ihr Vater Spanier ist", "weil sie in Spanien lebt"], correct: 0, explanation: "لأنها تريد العمل في إسبانيا." },
    ],
  },
  {
    id: "a1-h3", skill: "hören", level: "A1", kind: "listening",
    text: "Guten Tag! Ich suche eine Wohnung. Ich möchte eine kleine Wohnung mit zwei Zimmern. Sie soll nicht weit vom Zentrum sein. Die Miete darf höchstens sechshundert Euro sein. Ich habe am Freitag Zeit für einen Termin.",
    textAr: "نهارك سعيد! أبحث عن شقة. أريد شقة صغيرة بغرفتين. يجب ألا تكون بعيدة عن المركز. الإيجار بحد أقصى ستمائة يورو. لدي وقت يوم الجمعة لموعد.",
    questions: [
      { q: "Wie viele Zimmer soll die Wohnung haben?", qAr: "كم غرفة تريد؟", options: ["zwei", "drei", "eins", "vier"], correct: 0, explanation: "بغرفتين." },
      { q: "Was darf die Miete höchstens kosten?", qAr: "ما الحد الأقصى للإيجار؟", options: ["600 Euro", "900 Euro", "300 Euro", "1200 Euro"], correct: 0, explanation: "ستمائة يورو." },
      { q: "Wann hat er Zeit?", qAr: "متى لديه وقت؟", options: ["am Freitag", "am Montag", "am Samstag", "am Dienstag"], correct: 0, explanation: "يوم الجمعة." },
    ],
  },

  /* ═══════════ A2 — قراءة إضافية ═══════════ */
  {
    id: "a2-r3", skill: "lesen", level: "A2", kind: "reading",
    text: "Letzten Monat habe ich mich für einen Deutschkurs angemeldet. Der Kurs dauert drei Monate und findet zweimal pro Woche statt. Am Anfang war es schwer, aber jetzt verstehe ich fast alles. Mein Lehrer erklärt die Grammatik sehr gut und wir üben viel mit Dialogen. Nächste Woche haben wir einen kleinen Test. Ich hoffe, dass ich gut abschneide.",
    textAr: "سجلت الشهر الماضي في دورة ألمانية. الدورة تستمر ثلاثة أشهر وتقام مرتين أسبوعياً. في البداية كان الأمر صعباً لكن الآن أفهم كل شيء تقريباً. معلمي يشرح القواعد جيداً ونتمرن كثيراً على الحوارات. الأسبوع القادم عندنا اختبار صغير. أتمنى أن أؤدي جيداً.",
    questions: [
      { q: "Wie oft findet der Kurs statt?", qAr: "كم مرة تقام الدورة؟", options: ["zweimal pro Woche", "einmal pro Monat", "jeden Tag", "einmal pro Woche"], correct: 0, explanation: "مرتين أسبوعياً." },
      { q: "Was macht der Lehrer gut?", qAr: "ماذا يفعل المعلم جيداً؟", options: ["die Grammatik erklären", "kochen", "singen", "zeichnen"], correct: 0, explanation: "يشرح القواعد جيداً." },
      { q: "Was ist nächste Woche?", qAr: "ماذا يحدث الأسبوع القادم؟", options: ["ein kleiner Test", "ein Fest", "eine Reise", "ein Konzert"], correct: 0, explanation: "اختبار صغير." },
    ],
  },
  {
    id: "a2-h3", skill: "hören", level: "A2", kind: "listening",
    text: "Hallo Papa, ich bin es, Leila. Ich bin gerade in der Stadt und habe den Bus verpasst. Kannst du mich um sechs Uhr am Bahnhof abholen? Wenn nicht, rufe ich ein Taxi. Ach ja, kannst du auch mein Buch mitbringen? Es liegt auf dem Tisch im Wohnzimmer.",
    textAr: "أبي، أنا ليلى. أنا الآن في المدينة وفاتتني الحافلة. هل يمكنك أن تأتي لأخذي الساعة السادسة من المحطة؟ إن لم يكن فسأستدعي تاكسياً. آه نعم، هل يمكنك إحضار كتابي أيضاً؟ إنه على الطاولة في غرفة الجلوس.",
    questions: [
      { q: "Warum ruft Leila an?", qAr: "لماذا تتصل ليلى؟", options: ["Sie hat den Bus verpasst", "Sie ist krank", "Sie hat Geld verloren", "Sie will essen"], correct: 0, explanation: "فاتتها الحافلة." },
      { q: "Wann soll der Vater sie abholen?", qAr: "متى يريد الأب أن يأخذها؟", options: ["um sechs Uhr", "um sieben Uhr", "um acht Uhr", "um fünf Uhr"], correct: 0, explanation: "الساعة السادسة." },
      { q: "Was soll er mitbringen?", qAr: "ماذا يجب أن يحضر؟", options: ["ihr Buch", "ihre Tasche", "ihren Computer", "ihren Regenschirm"], correct: 0, explanation: "كتابها." },
    ],
  },

  /* ═══════════ B1 — قراءة إضافية ═══════════ */
  {
    id: "b1-r3", skill: "lesen", level: "B1", kind: "reading",
    text: "Viele Arbeitnehmer klagen über zu viel Stress. Eine Umfrage zeigt, dass mehr als die Hälfte der Befragten nach der Arbeit nicht abschalten kann. Die Gründe sind unterschiedlich: hoher Leistungsdruck, ständige Erreichbarkeit durch das Handy und zu wenig Pausen. Experten empfehlen, klare Grenzen zu setzen und regelmäßig Sport zu treiben. Einige Firmen bieten mittlerweile flexible Arbeitszeiten an, um den Druck zu verringern. Ob das reicht, ist allerdings fraglich.",
    textAr: "يشكو كثير من الموظفين من التوتر الزائد. يُظهر استطلاع أن أكثر من نصف المشاركين لا يستطيعون الابتعاد عن العمل بعد الدوام. الأسباب مختلفة: ضغط الأداء العالي، والاتصال الدائم عبر الهاتف، وقلة الاستراحات. يوصي الخبراء بوضع حدود واضحة وممارسة الرياضة بانتظام. بعض الشركات تقدم الآن ساعات عمل مرنة لتخفيف الضغط. لكن ما إذا كان ذلك كافياً أمر محل شك.",
    questions: [
      { q: "Was zeigt die Umfrage?", qAr: "ماذا يُظهر الاستطلاع؟", options: ["Mehr als die Hälfte kann nach der Arbeit nicht abschalten", "Die meisten sind zufrieden", "Die Arbeit ist leicht", "Die Hälfte arbeitet nicht"], correct: 0, explanation: "أكثر من النصف لا يستطيعون الابتعاد عن العمل." },
      { q: "Was empfehlen die Experten?", qAr: "ماذا يوصي الخبراء؟", options: ["klare Grenzen und Sport", "mehr Überstunden", "kein Handy mehr", "mehr Kaffee"], correct: 0, explanation: "حدود واضحة ورياضة." },
      { q: "Was bieten einige Firmen an?", qAr: "ماذا تقدم بعض الشركات؟", options: ["flexible Arbeitszeiten", "höhere Gehälter", "längere Pausen", "Urlaub"], correct: 0, explanation: "ساعات عمل مرنة." },
    ],
  },
  {
    id: "b1-h3", skill: "hören", level: "B1", kind: "listening",
    text: "Hier ist die Verkehrsmeldung für Mittwoch. Auf der Autobahn A3 zwischen Köln und Bonn gibt es wegen eines Unfalls einen Stau von etwa drei Kilometern. Der Unfall ist bereits abgeräumt, aber der Verkehr braucht noch Zeit. Wenn Sie können, fahren Sie über die Landstraße. In der Innenstadt ist am Nachmittag mit Behinderungen zu rechnen, weil eine Demonstration stattfindet.",
    textAr: "هنا نشرة المرور ليوم الأربعاء. على الطريق السريع A3 بين كولونيا وبون ازدحام بنحو ثلاثة كيلومترات بسبب حادث. تم إزالة الحادث لكن حركة المرور تحتاج وقتاً. إن أمكن فخذوا الطريق الجانبي. في وسط المدينة يُتوقع اختناقات بعد الظهر بسبب مظاهرة.",
    questions: [
      { q: "Warum gibt es einen Stau?", qAr: "لماذا يوجد ازدحام؟", options: ["wegen eines Unfalls", "wegen des Wetters", "wegen Bauarbeiten", "wegen einer Messe"], correct: 0, explanation: "بسبب حادث." },
      { q: "Was empfiehlt der Sprecher?", qAr: "ماذا يوصي المتحدث؟", options: ["die Landstraße zu fahren", "zu Hause zu bleiben", "den Zug zu nehmen", "schneller zu fahren"], correct: 0, explanation: "الطريق الجانبي." },
      { q: "Warum gibt es in der Innenstadt Behinderungen?", qAr: "لماذا توجد اختناقات في المدينة؟", options: ["wegen einer Demonstration", "wegen eines Festes", "wegen Schnee", "wegen eines Konzerts"], correct: 0, explanation: "بسبب مظاهرة." },
    ],
  },

  /* ═══════════ B2 — قراءة إضافية ═══════════ */
  {
    id: "b2-r3", skill: "lesen", level: "B2", kind: "reading",
    text: "Die Diskussion über die Vier-Tage-Woche gewinnt an Bedeutung. Befürworter argumentieren, dass kürzere Arbeitszeiten die Produktivität steigern und die Gesundheit der Beschäftigten verbessern. Sie verweisen auf Pilotprojekte, in denen die Leistung sogar zunahm. Kritiker halten dagegen, dass nicht alle Branchen davon profitieren könnten und dass die Kosten für die Unternehmen steigen würden. Ökonomen fordern daher, die Ergebnisse der Pilotprojekte genau zu analysieren, bevor man allgemeine Schlüsse zieht. Es bleibt abzuwarten, ob die Vier-Tage-Woche zum Standard wird oder eine Ausnahme bleibt.",
    textAr: "يزداد النقاش حول أسبوع العمل بأربعة أيام أهمية. يرى المؤيدون أن ساعات العمل الأقصر ترفع الإنتاجية وتحسّن صحة الموظفين. ويشيرون إلى مشاريع تجريبية زاد فيها الأداء فعلاً. ويعترض النقاد بأنه ليست كل القطاعات قادرة على الاستفادة وأن التكاليف على الشركات سترتفع. لذلك يطالب الاقتصاديون بتحليل دقيق لنتائج المشاريع قبل استخلاص استنتاجات عامة. ويبقى أن نرى ما إذا كان أسبوع الأربعة أيام سيصبح المعيار أم يبقى استثناءً.",
    questions: [
      { q: "Was behaupten die Befürworter?", qAr: "ماذا يدّعي المؤيدون؟", options: ["kürzere Arbeitszeiten steigern die Produktivität", "kürzere Arbeitszeiten senken das Gehalt", "die Gesundheit wird schlechter", "die Firmen sparen Geld"], correct: 0, explanation: "ساعات أقصر ترفع الإنتاجية." },
      { q: "Was kritisieren die Gegner?", qAr: "ماذا ينتقد المعارضون؟", options: ["nicht alle Branchen profitieren", "die Mitarbeiter arbeiten zu viel", "die Produkte werden schlechter", "der Urlaub wird kürzer"], correct: 0, explanation: "ليست كل القطاعات تستفيد." },
      { q: "Was fordern die Ökonomen?", qAr: "ماذا يطالب الاقتصاديون؟", options: ["die Ergebnisse genau zu analysieren", "sofort umzustellen", "keine Experimente", "mehr Urlaub"], correct: 0, explanation: "تحليل دقيق للنتائج." },
      { q: "Der Ton des Autors ist ...", qAr: "نبرة الكاتب ...", options: ["neutral und abwartend", "sehr kritisch", "begeistert", "ironisch"], correct: 0, explanation: "محايدة وانتظارية (es bleibt abzuwarten)." },
    ],
  },
  {
    id: "b2-h3", skill: "hören", level: "B2", kind: "listening",
    text: "Im Interview erklärt die Sprachwissenschaftlerin Dr. Berger, dass Sprachkenntnisse die beruflichen Chancen deutlich verbesserten. Sie weist darauf hin, dass Arbeitgeber zunehmend mehrsprachige Bewerber bevorzugten. Gleichzeitig betont sie, dass das Sprachenlernen Disziplin erfordere und nicht über Nacht geschehe. Auf die Frage nach der besten Methode antwortet sie, dass der regelmäßige Kontakt mit der Sprache wichtiger sei als perfekte Grammatik. Man solle keine Angst vor Fehlern haben, denn aus Fehlern lerne man am meisten.",
    textAr: "في المقابلة تشرح اللغوية د. بيرغر أن معرفة اللغات تحسّن الفرص المهنية بشكل ملحوظ. وتشير إلى أن أصحاب العمل يفضلون بشكل متزايد المرشحين متعددي اللغات. وفي الوقت نفسه تؤكد أن تعلم اللغات يتطلب انضباطاً ولا يحدث بين ليلة وضحاها. وعند سؤالها عن أفضل طريقة تجيب أن الاتصال المنتظم باللغة أهم من القواعد المثالية. ويجب ألا يخاف المرء من الأخطاء لأننا نتعلم منها أكثر.",
    questions: [
      { q: "Was verbessern Sprachkenntnisse laut Dr. Berger?", qAr: "ماذا تحسّن معرفة اللغات حسب د. بيرغر؟", options: ["die beruflichen Chancen", "das Gehalt automatisch", "die Gesundheit", "die Reisezeit"], correct: 0, explanation: "الفرص المهنية." },
      { q: "Was ist wichtiger als perfekte Grammatik?", qAr: "ما الأهم من القواعد المثالية؟", options: ["der regelmäßige Kontakt mit der Sprache", "teure Kurse", "das Auswendiglernen", "die Grammatik"], correct: 0, explanation: "الاتصال المنتظم باللغة." },
      { q: "Was soll man laut Dr. Berger nicht haben?", qAr: "ماذا يجب ألا يملك المرء حسب د. بيرغر؟", options: ["Angst vor Fehlern", "zu viel Motivation", "gute Lehrer", "viele Bücher"], correct: 0, explanation: "خوفاً من الأخطاء." },
    ],
  },

  /* ═══════════ B2 — كتابة ═══════════ */

  /* ═══════════ A1 — قراءة رابعة ═══════════ */
  {
    id: "a1-r4", skill: "lesen", level: "A1", kind: "reading",
    text: "Herr Müller arbeitet in einer Bank. Er steht jeden Tag um sechs Uhr auf. Um halb sieben frühstückt er. Um sieben Uhr fährt er mit dem Bus zur Arbeit. Er arbeitet von acht bis fünfzehn Uhr. Am Abend isst er mit seiner Frau und sieht fern. Am Samstag geht er einkaufen, am Sonntag besucht er seine Kinder.",
    textAr: "السيد مولر يعمل في بنك. يستيقظ كل يوم السادسة. في السادسة والنصف يفطر. في السابعة يذهب بالحافلة إلى العمل. يعمل من الثامنة حتى الثالثة عصراً. مساءً يأكل مع زوجته ويشاهد التلفاز. السبت يتسوق، والأحد يزور أولاده.",
    questions: [
      { q: "Wo arbeitet Herr Müller?", qAr: "أين يعمل السيد مولر؟", options: ["in einer Bank", "in einer Schule", "in einem Krankenhaus", "in einem Geschäft"], correct: 0, explanation: "في بنك (in einer Bank)." },
      { q: "Wann steht er auf?", qAr: "متى يستيقظ؟", options: ["um sechs Uhr", "um sieben Uhr", "um acht Uhr", "um fünf Uhr"], correct: 0, explanation: "في السادسة (um sechs Uhr)." },
      { q: "Was macht er am Samstag?", qAr: "ماذا يفعل السبت؟", options: ["einkaufen", "arbeiten", "schlafen", "reisen"], correct: 0, explanation: "يتسوق (einkaufen)." },
    ],
  },
  {
    id: "a1-h4", skill: "hören", level: "A1", kind: "listening",
    text: "Hallo Lisa! Ich bin heute etwas spät. Der Unterricht beginnt um neun Uhr, aber ich komme um zehn. Kannst du bitte den Lehrer informieren? Danke! Bis gleich, Karim.",
    textAr: "مرحباً ليزا! أنا متأخر قليلاً اليوم. يبدأ الدرس في التاسعة لكنني آتي في العاشرة. هل يمكنك إبلاغ المعلم؟ شكراً! إلى اللقاء قريباً، كريم.",
    questions: [
      { q: "Warum ruft Karim an?", qAr: "لماذا يتصل كريم؟", options: ["Er kommt später", "Er ist krank", "Er braucht Geld", "Er sucht Lisa"], correct: 0, explanation: "لأنه سيأتي متأخراً (ich komme um zehn)." },
      { q: "Wann beginnt der Unterricht?", qAr: "متى يبدأ الدرس؟", options: ["um neun Uhr", "um zehn Uhr", "um acht Uhr", "um elf Uhr"], correct: 0, explanation: "في التاسعة (um neun Uhr)." },
      { q: "Was soll Lisa machen?", qAr: "ماذا يجب أن تفعل ليزا؟", options: ["den Lehrer informieren", "Karim abholen", "Essen kaufen", "Hausaufgaben machen"], correct: 0, explanation: "إبلاغ المعلم (den Lehrer informieren)." },
    ],
  },

  /* ═══════════ A2 — قراءة رابعة ═══════════ */
  {
    id: "a2-r4", skill: "lesen", level: "A2", kind: "reading",
    text: "Mein Bruder hat letzte Woche eine neue Wohnung gefunden. Sie liegt im dritten Stock und hat drei Zimmer. Die Miete ist siebenhundert Euro warm, also mit Heizung und Wasser. Die Wohnung hat einen Balkon und eine moderne Küche. Mein Bruder ist sehr zufrieden, weil die Wohnung nicht weit von seinem Büro liegt. Er kann jetzt zu Fuß zur Arbeit gehen.",
    textAr: "وجد أخي الأسبوع الماضي شقة جديدة. تقع في الطابق الثالث وتتكون من ثلاث غرف. الإيجار سبعمائة يورو شامل، أي مع التدفئة والماء. الشقة لها شرفة ومطبخ حديث. أخي راضٍ جداً لأن الشقة ليست بعيدة عن مكتبه. يستطيع الآن الذهاب للعمل مشياً.",
    questions: [
      { q: "Wo liegt die Wohnung?", qAr: "أين تقع الشقة؟", options: ["im dritten Stock", "im ersten Stock", "im Erdgeschoss", "im Keller"], correct: 0, explanation: "في الطابق الثالث (im dritten Stock)." },
      { q: "Was bedeutet „warm“ bei der Miete?", qAr: "ماذا يعني «warm» في الإيجار؟", options: ["mit Heizung und Wasser", "mit Möbeln", "mit Parkplatz", "mit Balkon nur"], correct: 0, explanation: "مع التدفئة والماء (mit Heizung und Wasser)." },
      { q: "Warum ist der Bruder zufrieden?", qAr: "لماذا الرجل راضٍ؟", options: ["Die Wohnung ist nah am Büro", "Die Miete ist billig", "Die Wohnung ist groß", "Er hat einen Garten"], correct: 0, explanation: "لأن الشقة قريبة من المكتب." },
    ],
  },
  {
    id: "a2-h4", skill: "hören", level: "A2", kind: "listening",
    text: "Guten Tag, Hotel Sonne. Wie kann ich helfen? – Ich möchte bitte ein Zimmer für zwei Nächte reservieren, von Freitag bis Sonntag. – Für wie viele Personen? – Für zwei Personen, ein Doppelzimmer bitte. – Gerne. Das kostet achtzig Euro pro Nacht mit Frühstück. – Das ist in Ordnung. Können Sie mir die Bestätigung per E-Mail schicken?",
    textAr: "نهارك سعيد، فندق الشمس. كيف أساعدك؟ – أريد حجز غرفة لليلتين، من الجمعة حتى الأحد. – لكم شخص؟ – لشخصين، غرفة مزدوجة من فضلك. – بكل سرور. التكلفة ثمانون يورو لليلة مع الفطور. – هذا جيد. هل يمكنكم إرسال التأكيد بالبريد؟",
    questions: [
      { q: "Wie viele Nächte möchte der Gast reservieren?", qAr: "كم ليلة يريد الحجز؟", options: ["zwei Nächte", "eine Nacht", "drei Nächte", "vier Nächte"], correct: 0, explanation: "ليلتان (zwei Nächte)." },
      { q: "Was kostet das Zimmer pro Nacht?", qAr: "كم تكلفة الغرفة لليلة؟", options: ["80 Euro", "60 Euro", "100 Euro", "50 Euro"], correct: 0, explanation: "ثمانون يورو (achtzig Euro)." },
      { q: "Was ist im Preis enthalten?", qAr: "ما المشمول في السعر؟", options: ["Frühstück", "Abendessen", "Parkplatz", "Pool"], correct: 0, explanation: "الفطور (mit Frühstück)." },
    ],
  },

  /* ═══════════ B1 — قراءة رابعة ═══════════ */
  {
    id: "b1-r4", skill: "lesen", level: "B1", kind: "reading",
    text: "Immer mehr Menschen entscheiden sich für ein Leben auf dem Land. Die Vorteile liegen auf der Hand: frische Luft, mehr Platz und weniger Lärm. Doch die Nachteile sind nicht zu unterschätzen: Der Weg zur Arbeit ist länger, und die Auswahl an Geschäften und Schulen ist kleiner. Außerdem fühlen sich manche Menschen auf dem Land isoliert, besonders junge Leute. Experten raten daher, die Entscheidung gut zu überlegen und sich vorher zu informieren. Wer jedoch Ruhe und Natur schätzt, findet auf dem Land oft genau das, was er sucht.",
    textAr: "يتزايد عدد من يختارون الحياة في الريف. المزايا واضحة: هواء نقي ومساحة أكبر وضوضاء أقل. لكن لا ينبغي الاستهانة بالعيوب: طريق العمل أطول واختيار المتاجر والمدارس أقل. كما يشعر بعض الناس بالعزلة في الريف، خاصة الشباب. لذلك ينصح الخبراء بالتفكير الجيد في القرار والاطلاع أولاً. أما من يقدّر الهدوء والطبيعة فيجد في الريف غالباً ما يبحث عنه.",
    questions: [
      { q: "Was ist ein Vorteil des Lebens auf dem Land?", qAr: "ما ميزة الحياة في الريف؟", options: ["mehr Platz und frische Luft", "kürzere Arbeitswege", "mehr Geschäfte", "bessere Schulen"], correct: 0, explanation: "مساحة أكبر وهواء نقي (mehr Platz und frische Luft)." },
      { q: "Was ist ein Nachteil laut dem Text?", qAr: "ما العيب حسب النص؟", options: ["längere Wege zur Arbeit", "zu viel Lärm", "zu wenig Natur", "hohe Mieten"], correct: 0, explanation: "طرق العمل أطول (länger)." },
      { q: "Was raten die Experten?", qAr: "بماذا ينصح الخبراء؟", options: ["die Entscheidung gut zu überlegen", "sofort umzuziehen", "nie aufs Land zu ziehen", "eine größere Stadt zu wählen"], correct: 0, explanation: "التفكير الجيد في القرار (gut zu überlegen)." },
      { q: "Der Text ist insgesamt ...", qAr: "النص إجمالاً ...", options: ["ausgewogen (متوازن)", "nur positiv", "nur negativ", "ironisch"], correct: 0, explanation: "متوازن: يذكر مزايا وعيوباً ونصيحة." },
    ],
  },
  {
    id: "b1-h4", skill: "hören", level: "B1", kind: "listening",
    text: "Hallo Tom, hier ist Sarah. Ich habe eine Frage wegen des Projekts. Die Besprechung am Donnerstag wurde verschoben – sie findet jetzt am Freitag um zehn Uhr statt. Außerdem möchte der Chef, dass wir die Präsentation vorbereiten. Kannst du die Statistik übernehmen? Ich bereite die Folien vor. Ruf mich bitte zurück, wenn du einverstanden bist. Danke!",
    textAr: "مرحباً توم، أنا سارة. عندي سؤال بخصوص المشروع. تأجل اجتماع الخميس – سيقام الآن الجمعة الساعة العاشرة. كما يريد المدير أن نحضّر العرض. هل يمكنك تولي الإحصائيات؟ أنا أجهّز الشرائح. اتصل بي إذا وافقت. شكراً!",
    questions: [
      { q: "Wann findet die Besprechung jetzt statt?", qAr: "متى يقام الاجتماع الآن؟", options: ["am Freitag um zehn Uhr", "am Donnerstag um zehn Uhr", "am Freitag um neun Uhr", "am Montag"], correct: 0, explanation: "الجمعة الساعة العاشرة (am Freitag um zehn Uhr)." },
      { q: "Was soll Tom machen?", qAr: "ماذا يجب أن يفعل توم؟", options: ["die Statistik übernehmen", "die Folien vorbereiten", "das Büro buchen", "den Kunden anrufen"], correct: 0, explanation: "تولي الإحصائيات (die Statistik übernehmen)." },
      { q: "Was möchte der Chef?", qAr: "ماذا يريد المدير؟", options: ["eine Präsentation vorbereiten", "den Termin absagen", "mehr Urlaub", "ein neues Büro"], correct: 0, explanation: "تحضير عرض تقديمي." },
    ],
  },

  /* ═══════════ B2 — قراءة رابعة ═══════════ */
  {
    id: "b2-r4", skill: "lesen", level: "B2", kind: "reading",
    text: "Die Debatte um den Mindestlohn wird in vielen Ländern kontrovers geführt. Befürworter argumentieren, dass ein gesetzlicher Mindestlohn die Kaufkraft der Arbeitnehmer stärke und Armut reduziere. Sie verweisen auf Studien, die einen positiven Effekt auf die Wirtschaft belegen. Kritiker dagegen warnen, dass höhere Lohnkosten zu Stellenabbau führen könnten, insbesondere in kleinen Betrieben. Ökonomen betonen, dass die Wirkung stark vom jeweiligen Arbeitsmarkt abhänge. Eine pauschale Antwort sei daher nicht möglich. Entscheidend sei letztlich, dass der Mindestlohn im Verhältnis zu den Lebenshaltungskosten stehe.",
    textAr: "يُدار النقاش حول الحد الأدنى للأجور في بلدان كثيرة بشكل مثير للجدل. يرى المؤيدون أن الحد الأدنى القانوني يقوّي القوة الشرائية للعمال ويحد من الفقر. ويشيرون إلى دراسات تثبت أثراً إيجابياً على الاقتصاد. بينما يحذر النقاد من أن ارتفاع تكاليف الأجور قد يؤدي إلى خفض الوظائف، خاصة في المؤسسات الصغيرة. يؤكد الاقتصاديون أن الأثر يعتمد كثيراً على سوق العمل المعني. لذلك لا يمكن إجابة واحدة شاملة. المهم في النهاية أن يكون الحد الأدنى متناسباً مع تكاليف المعيشة.",
    questions: [
      { q: "Was behaupten die Befürworter des Mindestlohns?", qAr: "ماذا يدّعي مؤيدو الحد الأدنى؟", options: ["Er stärkt die Kaufkraft und reduziert Armut", "Er führt zu Stellenabbau", "Er schadet der Wirtschaft", "Er erhöht die Preise"], correct: 0, explanation: "يقوّي القوة الشرائية ويحد من الفقر (نقل كلام: stärke, reduziere)." },
      { q: "Wovor warnen die Kritiker?", qAr: "ماذا يحذر النقاد؟", options: ["Stellenabbau in kleinen Betrieben", "zu viel Kaufkraft", "mehr Armut", "höhere Steuern"], correct: 0, explanation: "خفض الوظائف في المؤسسات الصغيرة (Stellenabbau)." },
      { q: "Was betonen die Ökonomen?", qAr: "ماذا يؤكد الاقتصاديون؟", options: ["Die Wirkung hängt vom Arbeitsmarkt ab", "Der Mindestlohn ist immer gut", "Der Mindestlohn ist immer schlecht", "Es gibt keine Studien"], correct: 0, explanation: "الأثر يعتمد على سوق العمل (abgehängt vom Arbeitsmarkt)." },
      { q: "Worauf kommt es letztlich an?", qAr: "على ماذا يعتمد الأمر في النهاية؟", options: ["das Verhältnis zu den Lebenshaltungskosten", "die Höhe der Steuern", "die Anzahl der Betriebe", "das Alter der Arbeitnehmer"], correct: 0, explanation: "التناسب مع تكاليف المعيشة (im Verhältnis zu den Lebenshaltungskosten)." },
    ],
  },
  {
    id: "b2-h4", skill: "hören", level: "B2", kind: "listening",
    text: "In der Radiosendung „Beruf und Karriere“ diskutieren zwei Gäste über lebenslanges Lernen. Die erste Gastgeberin betont, dass sich der Arbeitsmarkt rasant verändere und dass nur wer sich weiterbilde, langfristig Chancen habe. Der zweite Gast widerspricht teilweise: Er argumentiert, dass Erfahrung und soziale Kompetenzen mindestens so wichtig seien wie neue Zertifikate. Er räumt aber ein, dass digitale Fähigkeiten inzwischen unverzichtbar seien. Beide sind sich einig, dass Arbeitgeber mehr flexible Weiterbildungszeiten anbieten sollten. Zum Schluss wird die Frage gestellt, wer die Kosten der Weiterbildung tragen solle – ein Thema, das nach Ansicht der Moderatorin noch offen sei.",
    textAr: "في البرنامج الإذاعي «المهنة والمسيرة» يناقش ضيفان التعلم مدى الحياة. تؤكد المذيعة الأولى أن سوق العمل يتغير بسرعة وأن من لا يطوّر نفسه يفقد فرصه على المدى الطويل. يعترض الضيف الثاني جزئياً: يرى أن الخبرة والمهارات الاجتماعية لا تقل أهمية عن الشهادات الجديدة. لكنه يعترف بأن المهارات الرقمية أصبحت لا غنى عنها. يتفق الاثنان على أن على أصحاب العمل تقديم أوقات مرنة للتدريب. وفي الختام يطرح سؤال من يتحمل تكاليف التدريب – موضوع ما زال مفتوحاً برأي المذيعة.",
    questions: [
      { q: "Was betont die erste Gastgeberin?", qAr: "ماذا تؤكد المذيعة الأولى؟", options: ["Nur wer sich weiterbildet, hat langfristig Chancen", "Erfahrung ist unwichtig", "Zertifikate sind nutzlos", "Der Arbeitsmarkt ist stabil"], correct: 0, explanation: "من يطور نفسه فقط له فرص (نقل كلام: verändere, habe)." },
      { q: "Was hält der zweite Gast für wichtig?", qAr: "ماذا يرى الضيف الثاني مهماً؟", options: ["Erfahrung und soziale Kompetenzen", "nur neue Zertifikate", "nur digitale Fähigkeiten", "nichts davon"], correct: 0, explanation: "الخبرة والمهارات الاجتماعية (soziale Kompetenzen)." },
      { q: "Worin sind sich beide einig?", qAr: "على ماذا يتفقان؟", options: ["flexible Weiterbildungszeiten durch Arbeitgeber", "höhere Gehälter", "weniger Kurse", "keine Weiterbildung"], correct: 0, explanation: "أوقات تدريب مرنة من أصحاب العمل." },
      { q: "Welche Frage bleibt offen?", qAr: "أي سؤال يبقى مفتوحاً؟", options: ["Wer zahlt die Weiterbildung?", "Wer leitet die Kurse?", "Wie lange dauert die Ausbildung?", "Wo finden die Kurse statt?"], correct: 0, explanation: "من يتحمل تكاليف التدريب (wer die Kosten tragen solle)." },
    ],
  },
];