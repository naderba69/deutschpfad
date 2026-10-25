/**
 * a1 — الحوارات الخمسة الأخيرة — في الصيدلية · عن الهوايات · الحجز في فندق · الحديث عن الطقس · شراء تذكرة
 * فُصل من a1.ts في الدفعة 112 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../a1.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const A1_DIALOGUES_3: DailyDialogue[] = [
  {
    id: "a1-11-apotheke",
    level: "A1",
    title: "في الصيدلية",
    titleDe: "In der Apotheke",
    emoji: "💊",
    situation: "عندك صداع وتشتري دواء",
    turns: [
      { speaker: "أنت", role: "a", de: "Guten Tag! Ich habe Kopfschmerzen.", ar: "طاب يومك! عندي صداع." },
      { speaker: "الصيدلانية", role: "b", de: "Oh, das tut mir leid. Möchten Sie ein Medikament?", ar: "أوه، يؤسفني. هل تريد دواءً؟" },
      { speaker: "أنت", role: "a", de: "Ja, bitte. Gibt es etwas gegen Kopfschmerzen?", ar: "نعم، من فضلك. هل يوجد شيء لعلاج الصداع؟" },
      { speaker: "الصيدلانية", role: "b", de: "Ja, hier. Bitte lesen Sie die Packungsbeilage.", ar: "نعم، تفضل. يُرجى قراءة النشرة المرفقة." },
      { speaker: "أنت", role: "a", de: "Vielen Dank! Was kostet das?", ar: "شكراً جزيلاً! كم يكلف؟" },
      { speaker: "الصيدلانية", role: "b", de: "5 Euro. Gute Besserung!", ar: "5 يورو. الشفاء العاجل!" },
    ],
    questions: [
      { de: "Was hat der Kunde?", ar: "ماذا يعاني الزبون؟", options: [
        { text: "Kopfschmerzen", ar: "صداعاً", correct: true, explanation: "نعم — «Ich habe Kopfschmerzen»." },
        { text: "Zahnschmerzen", ar: "ألم أسنان", correct: false, explanation: "لا — لم يُذكر ألم أسنان Zahnschmerzen؛ بل «Ich habe Kopfschmerzen»." },
        { text: "Bauchschmerzen", ar: "ألم بطن", correct: false, explanation: "لا — لم يُذكر ألم بطن Bauchschmerzen في الحوار." },
      ]},
      { de: "Was sagt die Apothekerin am Ende?", ar: "ماذا تقول الصيدلية في النهاية؟", options: [
        { text: "Gute Besserung!", ar: "الشفاء العاجل!", correct: true, explanation: "صحيح — تمني الشفاء." },
        { text: "Guten Appetit!", ar: "بالهناء!", correct: false, explanation: "لا — Guten Appetit! تُقال قبل الأكل؛ وخاتمة الصيدلية «Gute Besserung!»." },
        { text: "Auf Wiedersehen!", ar: "إلى اللقاء!", correct: false, explanation: "لا — لم تقل Auf Wiedersehen!؛ بل تمنت الشفاء «Gute Besserung!»." },
      ]},
      { de: "Was soll die Person tun?", ar: "ماذا ينبغي للشخص أن يفعل؟", options: [
        { text: "In die Schule gehen", ar: "أن يذهب إلى المدرسة", correct: false, explanation: "لا — لم تُذكر مدرسة In die Schule gehen؛ والتوجيه قراءة النشرة «Bitte lesen Sie die Packungsbeilage»." },
        { text: "Die Packungsbeilage lesen", ar: "أن يقرأ النشرة المرفقة", correct: true, explanation: "نعم — تقول الصيدلانية: «Bitte lesen Sie die Packungsbeilage»." },
        { text: "Das Medikament zurückgeben", ar: "أن يعيد الدواء", correct: false, explanation: "لا — لم يُطلب إرجاع الدواء؛ بل قالت الصيدلانية: «Bitte lesen Sie die Packungsbeilage»." },
      ]},
    ],
    keyVocab: [
      { de: "Ich habe Kopfschmerzen", ar: "عندي صداع" },
      { de: "das Medikament", ar: "الدواء" },
      { de: "die Tablette", ar: "القرص" },
      { de: "die Packungsbeilage", ar: "النشرة المرفقة بالدواء" },
      { de: "Gute Besserung!", ar: "الشفاء العاجل!" },
    ],
  },
  {
    id: "a1-12-freizeit",
    level: "A1",
    title: "عن الهوايات",
    titleDe: "Über Hobbys sprechen",
    emoji: "⚽",
    situation: "تسأل زميلاً عن هواياته",
    turns: [
      { speaker: "أنت", role: "a", de: "Was machst du in deiner Freizeit?", ar: "ماذا تفعل في وقت فراغك؟" },
      { speaker: "لينا", role: "b", de: "Ich spiele Fußball und lese Bücher.", ar: "ألعب كرة القدم وأقرأ الكتب." },
      { speaker: "أنت", role: "a", de: "Ich spiele auch Fußball! Welche Mannschaft magst du?", ar: "أنا أيضاً ألعب! أي فريق تحبين؟" },
      { speaker: "لينا", role: "b", de: "Ich mag Bayern München. Und du?", ar: "أحب بايرن ميونخ. وأنت؟" },
      { speaker: "أنت", role: "a", de: "Ich mag auch Bayern! Wir spielen zusammen?", ar: "أنا أيضاً أحب بايرن! هل نلعب معاً؟" },
      { speaker: "لينا", role: "b", de: "Gerne! Am Samstag?", ar: "بكل سرور! يوم السبت؟" },
    ],
    questions: [
      { de: "Was macht Lena in ihrer Freizeit?", ar: "ماذا تفعل لينا في وقت فراغها؟", options: [
        { text: "Fußball spielen und Bücher lesen", ar: "تلعب كرة وتقرأ", correct: true, explanation: "نعم — الهوايتان معاً." },
        { text: "Nur fernsehen und schlafen", ar: "تشاهد التلفاز فقط", correct: false, explanation: "لا — لم يُذكر تلفاز fernsehen؛ وهوايتاها «Ich spiele Fußball und lese Bücher»." },
        { text: "Klavier spielen und singen", ar: "تعزف البيانو", correct: false, explanation: "لا — لم يُذكر بيانو Klavier spielen ولا غناء singen في الحوار." },
      ]},
      { de: "Welche Mannschaft mag Lena?", ar: "أي فريق تحب لينا؟", options: [
        { text: "Bayern München", ar: "بايرن ميونخ", correct: true, explanation: "صحيح — «Ich mag Bayern München»." },
        { text: "Borussia Dortmund", ar: "بوروسيا دورتموند", correct: false, explanation: "لا — لم يُذكر دورتموند Borussia Dortmund؛ بل «Ich mag Bayern München»." },
        { text: "Real Madrid", ar: "ريال مدريد", correct: false, explanation: "لا — Real Madrid غير مذكور؛ والفريق «Bayern München»." },
      ]},
      { de: "Wann spielen die beiden zusammen?", ar: "متى يلعبان معاً؟", options: [
        { text: "Am Montag", ar: "يوم الاثنين", correct: false, explanation: "لا — لم يُذكر الاثنين Am Montag؛ واقتراح لينا «Am Samstag?»." },
        { text: "Am Samstag", ar: "يوم السبت", correct: true, explanation: "نعم — «Am Samstag?»." },
        { text: "Gar nicht", ar: "لا يلعبان", correct: false, explanation: "لا — وافقت لينا على اللعب: «Gerne! Am Samstag?»." },
      ]},
    ],
    keyVocab: [
      { de: "die Freizeit", ar: "وقت الفراغ" },
      { de: "Fußball spielen", ar: "يلعب كرة القدم" },
      { de: "Bücher lesen", ar: "يقرأ الكتب" },
      { de: "die Mannschaft", ar: "الفريق" },
      { de: "Wir spielen zusammen", ar: "نلعب معاً" },
    ],
  },
  {
    id: "a1-13-hotel",
    level: "A1",
    title: "الحجز في فندق",
    titleDe: "Hotelreservierung",
    emoji: "🏨",
    situation: "تحجز غرفة في فندق هاتفياً",
    turns: [
      { speaker: "الموظفة", role: "a", de: "Hotel Sonne, guten Tag!", ar: "فندق صن، طاب يومك!" },
      { speaker: "أنت", role: "b", de: "Guten Tag! Ich möchte ein Zimmer reservieren.", ar: "طاب يومك! أريد حجز غرفة." },
      { speaker: "الموظفة", role: "a", de: "Für eine Person oder zwei?", ar: "لشخص أم لشخصين؟" },
      { speaker: "أنت", role: "b", de: "Für eine Person, bitte.", ar: "لشخص واحد من فضلك." },
      { speaker: "الموظفة", role: "a", de: "Für wie viele Nächte?", ar: "لكم ليلة؟" },
      { speaker: "أنت", role: "b", de: "Zwei Nächte, bitte. Wie viel kostet das?", ar: "ليلتين من فضلك. كم يكلف؟" },
    ],
    questions: [
      { de: "Wie viele Personen?", ar: "كم شخصاً؟", options: [
        { text: "Eine Person", ar: "شخص واحد", correct: true, explanation: "نعم — «Für eine Person»." },
        { text: "Zwei Personen", ar: "شخصان", correct: false, explanation: "لا — الحجز «Für eine Person, bitte»." },
        { text: "Drei Personen", ar: "ثلاثة أشخاص", correct: false, explanation: "لا — لم يُذكر ثلاثة أشخاص Drei Personen في الحوار." },
      ]},
      { de: "Für wie viele Nächte?", ar: "لكم ليلة؟", options: [
        { text: "Zwei Nächte", ar: "ليلتين", correct: true, explanation: "صحيح — «Zwei Nächte, bitte»." },
        { text: "Eine Nacht", ar: "ليلة", correct: false, explanation: "لا — المطلوب ليلتان: «Zwei Nächte, bitte»." },
        { text: "Fünf Nächte", ar: "خمس ليالٍ", correct: false, explanation: "لا — لم تُذكر خمس ليالٍ Fünf Nächte؛ بل «Zwei Nächte»." },
      ]},
      { de: "Was möchte die Person?", ar: "ماذا يريد الشخص؟", options: [
        { text: "Ein Taxi bestellen", ar: "أن يطلب سيارة أجرة", correct: false, explanation: "لا — لم يُذكر طلب سيارة Ein Taxi bestellen؛ بل «Ich möchte ein Zimmer reservieren»." },
        { text: "Ein Zimmer reservieren", ar: "أن يحجز غرفة", correct: true, explanation: "نعم — «Ich möchte ein Zimmer reservieren»." },
        { text: "Eine Pizza bestellen", ar: "أن يطلب بيتزا", correct: false, explanation: "لا — لم تُذكر بيتزا Eine Pizza bestellen في حوار الفندق." },
      ]},
    ],
    keyVocab: [
      { de: "das Zimmer reservieren", ar: "حجز غرفة" },
      { de: "für eine Person", ar: "لشخص واحد" },
      { de: "für wie viele Nächte", ar: "لكم ليلة" },
      { de: "das Hotel", ar: "الفندق" },
      { de: "Was kostet das?", ar: "كم يكلف؟" },
    ],
  },
  {
    id: "a1-14-wetter",
    level: "A1",
    title: "الحديث عن الطقس",
    titleDe: "Über das Wetter sprechen",
    emoji: "🌦️",
    situation: "تتحدث مع جارك عن طقس اليوم",
    turns: [
      { speaker: "الجار", role: "a", de: "Das Wetter ist heute schön, oder?", ar: "الطقس اليوم جميل، أليس كذلك؟" },
      { speaker: "أنت", role: "b", de: "Ja, die Sonne scheint!", ar: "نعم، الشمس مشرقة!" },
      { speaker: "الجار", role: "a", de: "Aber morgen regnet es. Leider.", ar: "لكن غداً ستمطر. للأسف." },
      { speaker: "أنت", role: "b", de: "Wirklich? Dann nehme ich einen Regenschirm.", ar: "حقاً؟ إذن سآخذ مظلة." },
      { speaker: "الجار", role: "a", de: "Gute Idee. Und es wird kälter.", ar: "فكرة جيدة. وسيصبح الجو أبرد." },
      { speaker: "أنت", role: "b", de: "Dann brauche ich eine Jacke.", ar: "إذن سأحتاج سترة." },
    ],
    questions: [
      { de: "Wie ist das Wetter heute?", ar: "كيف الطقس اليوم؟", options: [
        { text: "Die Sonne scheint", ar: "الشمس مشرقة", correct: true, explanation: "نعم — «die Sonne scheint»." },
        { text: "Es regnet stark", ar: "تمطر", correct: false, explanation: "لا — المطر غداً: «Aber morgen regnet es»؛ واليوم «die Sonne scheint»." },
        { text: "Es schneit viel", ar: "تثلج", correct: false, explanation: "لا — لم يُذكر ثلج Es schneit؛ واليوم مشمس «die Sonne scheint»." },
      ]},
      { de: "Was passiert morgen?", ar: "ماذا سيحدث غداً؟", options: [
        { text: "Es regnet und wird kälter", ar: "ستمطر ويبرد", correct: true, explanation: "صحيح — الاثنان معاً." },
        { text: "Die Sonne scheint den ganzen Tag", ar: "الشمس مشرقة", correct: false, explanation: "لا — الشمس اليوم؛ وغداً «Aber morgen regnet es. Leider»." },
        { text: "Es schneit viel", ar: "تثلج", correct: false, explanation: "لا — لم يُذكر ثلج Es schneit؛ وغداً مطرٌ و«es wird kälter»." },
      ]},
      { de: "Was braucht die Person wegen der Kälte?", ar: "ماذا يحتاج الشخص بسبب البرد؟", options: [
        { text: "Einen Badeanzug", ar: "مايوه", correct: false, explanation: "لا — لباس السباحة Einen Badeanzug يناسب الحرّ؛ والجو «es wird kälter»." },
        { text: "Eine Jacke", ar: "سترة", correct: true, explanation: "نعم — «Dann brauche ich eine Jacke»." },
        { text: "Ein Eis", ar: "آيس كريم", correct: false, explanation: "لا — لم تُذكر مثلجات Ein Eis؛ والحاجة «Dann brauche ich eine Jacke»." },
      ]},
    ],
    keyVocab: [
      { de: "das Wetter", ar: "الطقس" },
      { de: "die Sonne scheint", ar: "الشمس مشرقة" },
      { de: "Es regnet", ar: "تمطر" },
      { de: "der Regenschirm", ar: "المظلة" },
      { de: "Es wird kälter", ar: "سيصبح أبرد" },
    ],
  },
  {
    id: "a1-15-ticket",
    level: "A1",
    title: "شراء تذكرة",
    titleDe: "Ein Ticket kaufen",
    emoji: "🎫",
    situation: "تشتري تذكرة قطار من الشباك",
    turns: [
      { speaker: "أنت", role: "a", de: "Ein Ticket nach Hamburg, bitte.", ar: "تذكرة إلى هامبورغ من فضلك." },
      { speaker: "الموظف", role: "b", de: "Einfach oder hin und zurück?", ar: "ذهاب أم ذهاب وإياب؟" },
      { speaker: "أنت", role: "a", de: "Hin und zurück, bitte.", ar: "ذهاب وإياب من فضلك." },
      { speaker: "الموظف", role: "b", de: "Das kostet 40 Euro.", ar: "يكلف 40 يورو." },
      { speaker: "أنت", role: "a", de: "Okay, hier bitte. Wann fährt der Zug?", ar: "حسناً، تفضل. متى ينطلق القطار؟" },
      { speaker: "الموظف", role: "b", de: "Um zehn Uhr, Gleis 3.", ar: "في العاشرة، على المسار رقم 3." },
    ],
    questions: [
      { de: "Was kauft die Person?", ar: "ماذا تشتري الشخص؟", options: [
        { text: "Ein Ticket nach Hamburg", ar: "تذكرة إلى هامبورغ", correct: true, explanation: "نعم — الوجهة هامبورغ." },
        { text: "Ein Ticket nach Berlin", ar: "تذكرة إلى برلين", correct: false, explanation: "لا — الوجهة «Ein Ticket nach Hamburg, bitte»." },
        { text: "Ein Ticket nach München", ar: "تذكرة إلى ميونخ", correct: false, explanation: "لا — لم تُذكر ميونخ München؛ والتذكرة إلى هامبورغ." },
      ]},
      { de: "Wann fährt der Zug?", ar: "متى ينطلق القطار؟", options: [
        { text: "Um zehn Uhr", ar: "في العاشرة", correct: true, explanation: "صحيح — «Um zehn Uhr, Gleis 3»." },
        { text: "Um neun Uhr", ar: "في التاسعة", correct: false, explanation: "لا — الانطلاق «Um zehn Uhr, Gleis 3»." },
        { text: "Um elf Uhr", ar: "في الحادية عشرة", correct: false, explanation: "لا — لم تُذكر الحادية عشرة elf Uhr؛ والموعد العاشرة." },
      ]},
      { de: "Wohin fährt die Person?", ar: "إلى أين يسافر الشخص؟", options: [
        { text: "Nach Berlin", ar: "إلى برلين", correct: false, explanation: "لا — لم تُذكر برلين Nach Berlin؛ والطلب «Ein Ticket nach Hamburg»." },
        { text: "Nach Hamburg", ar: "إلى هامبورغ", correct: true, explanation: "نعم — «Ein Ticket nach Hamburg»." },
        { text: "Nach Tunis", ar: "إلى تونس", correct: false, explanation: "لا — لم تُذكر تونس Nach Tunis؛ والوجهة هامبورغ." },
      ]},
    ],
    keyVocab: [
      { de: "das Ticket", ar: "التذكرة" },
      { de: "hin und zurück", ar: "ذهاب وإياب" },
      { de: "der Zug fährt um …", ar: "القطار ينطلق في …" },
      { de: "das Gleis", ar: "مسار السكة؛ ويُذكر رقمه على لوحة القطارات" },
      { de: "Was kostet das?", ar: "كم يكلف؟" },
    ],
  },

  {
    id: "a1-16-bahnhof",
    level: "A1",
    title: "في محطة القطار",
    titleDe: "Am Bahnhof",
    emoji: "🚆",
    situation: "تسأل عن القطار المتجه إلى برلين ومقعدك",
    audioNoteAr: "الصوت مولّد آلياً (TTS) وليس تسجيلاً بشرياً.",
    turns: [
      { speaker: "توماس", role: "a", de: "Guten Morgen! Ist das der Zug nach Berlin?", ar: "صباح الخير! هل هذا القطار المتجه إلى برلين؟" },
      { speaker: "سارة", role: "b", de: "Ja. Er fährt um zehn Uhr ab.", ar: "نعم. ينطلق في العاشرة." },
      { speaker: "توماس", role: "a", de: "Wie lange dauert die Fahrt?", ar: "كم تستغرق الرحلة؟" },
      { speaker: "سارة", role: "b", de: "Zwei Stunden. Wir sind um zwölf Uhr da.", ar: "ساعتان. سنصل في الثانية عشرة." },
      { speaker: "توماس", role: "a", de: "Danke. Wo ist mein Platz?", ar: "شكراً. أين مقعدي؟" },
      { speaker: "سارة", role: "b", de: "Wagen drei, Platz zwölf. Gute Reise!", ar: "العربة الثالثة، المقعد الثاني عشر. رحلة سعيدة!" },
    ],
    questions: [
      { de: "Wohin fährt der Zug?", ar: "إلى أين يتجه القطار؟", options: [
        { text: "Nach Berlin", ar: "إلى برلين", correct: true, explanation: "نعم — السؤال الأول هو «Ist das der Zug nach Berlin?»" },
        { text: "Nach Hamburg", ar: "إلى هامبورغ", correct: false, explanation: "لا — لم تُذكر هامبورغ؛ الوجهة في الحوار «nach Berlin»." },
        { text: "Nach München", ar: "إلى ميونخ", correct: false, explanation: "لا — في السؤال ورد «der Zug nach Berlin»، ولم تُذكر München." },
      ]},
      { de: "Um wie viel Uhr fährt der Zug ab?", ar: "في أي ساعة ينطلق القطار؟", options: [
        { text: "Um zehn Uhr", ar: "في العاشرة", correct: true, explanation: "صحيح — «Er fährt um zehn Uhr ab»." },
        { text: "Um zwölf Uhr", ar: "في الثانية عشرة", correct: false, explanation: "لا — «Wir sind um zwölf Uhr da» وقت الوصول؛ أما الانطلاق «Er fährt um zehn Uhr ab»." },
        { text: "Um acht Uhr", ar: "في الثامنة", correct: false, explanation: "لا — الحوار يقول «Er fährt um zehn Uhr ab»؛ ولم يذكر acht Uhr." },
      ]},
      { de: "Wo sitzt Thomas?", ar: "أين يجلس توماس؟", options: [
        { text: "Im Wagen drei, auf Platz zwölf", ar: "في العربة الثالثة، المقعد الثاني عشر", correct: true, explanation: "نعم — سارة تقول: «Wagen drei, Platz zwölf»." },
        { text: "Im Wagen zwei, auf Platz drei", ar: "في العربة الثانية، المقعد الثالث", correct: false, explanation: "لا — قالت سارة «Wagen drei, Platz zwölf»؛ فلا نعكس الرقمين إلى Wagen zwei وPlatz drei." },
        { text: "Im Wagen zwölf, auf Platz drei", ar: "في العربة الثانية عشرة، المقعد الثالث", correct: false, explanation: "لا — «Wagen drei» و«Platz zwölf»؛ لا نعكس الرقمين." },
      ]},
    ],
    keyVocab: [
      { de: "der Zug", ar: "القطار" },
      { de: "abfahren", ar: "ينطلق" },
      { de: "die Fahrt", ar: "الرحلة" },
      { de: "der Wagen", ar: "العربة" },
      { de: "der Platz", ar: "المقعد" },
    ],
  },
];
