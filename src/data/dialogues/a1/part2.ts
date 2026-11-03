/**
 * a1 — الحوارات الخمسة الثانية — شراء ملابس · وصف شقة · دعوة لحفلة · السؤال عن الطريق · طلب طعام في مطعم
 * فُصل من a1.ts في الدفعة 112 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../a1.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const A1_DIALOGUES_2: DailyDialogue[] = [
  {
    id: "a1-06-kleidung",
    level: "A1",
    title: "شراء ملابس",
    titleDe: "Kleidung kaufen",
    emoji: "👕",
    situation: "في متجر ملابس — تريد تيشيرتاً",
    audioNoteAr: "مصدر ملفات الصوت المرتبطة بهذا الحوار غير موثّق؛ لذلك لا أجزم بأنها تسجيلات بشرية أو مولّدة آلياً. لم تُتحقق مطابقتها للنص أو جودة النطق.",
    turns: [
      { speaker: "البائع", role: "a", de: "Guten Tag! Suchen Sie etwas?", ar: "مرحباً! هل تبحث عن شيء؟" },
      { speaker: "أنت", role: "b", de: "Ja, ich suche ein T-Shirt.", ar: "نعم، أبحث عن تيشيرت." },
      { speaker: "البائع", role: "a", de: "Welche Größe haben Sie?", ar: "ما مقاسك؟" },
      { speaker: "أنت", role: "b", de: "Größe M, bitte.", ar: "المقاس M من فضلك." },
      { speaker: "البائع", role: "a", de: "Hier ist ein T-Shirt in Größe M. Es kostet 15 Euro.", ar: "تفضل تيشيرت مقاس M. يكلف 15 يورو." },
      { speaker: "أنت", role: "b", de: "Das passt. Ich nehme es!", ar: "يناسبني. سآخذه!" },
    ],
    questions: [
      { de: "Welche Größe möchte der Kunde?", ar: "ما المقاس الذي يريده الزبون؟", options: [
        { text: "Größe M", ar: "المقاس M", correct: true, explanation: "نعم — «Größe M, bitte»." },
        { text: "Größe S", ar: "المقاس S", correct: false, explanation: "لا — المقاس المطلوب «Größe M, bitte»." },
        { text: "Größe L", ar: "المقاس L", correct: false, explanation: "لا — لم يطلب Größe L؛ بل «Größe M»." },
      ]},
      { de: "Wie viel kostet das T-Shirt?", ar: "كم يكلف التيشيرت؟", options: [
        { text: "15 Euro", ar: "15 يورو", correct: true, explanation: "صحيح — «Es kostet 15 Euro»." },
        { text: "10 Euro", ar: "10 يورو", correct: false, explanation: "لا — الثمن المنطوق «Es kostet 15 Euro»." },
        { text: "20 Euro", ar: "20 يورو", correct: false, explanation: "لا — العشرون 20 Euro غير مذكورة؛ والثمن 15." },
      ]},
      { de: "Was sagt der Kunde am Ende?", ar: "ماذا يقول الزبون في النهاية؟", options: [
        { text: "Das ist zu teuer.", ar: "هذا أغلى من اللازم.", correct: false, explanation: "لا — لم يشتكِ من أن السعر أغلى من اللازم؛ بل قال «Das passt. Ich nehme es!»." },
        { text: "Das passt. Ich nehme es!", ar: "يناسبني. سآخذه!", correct: true, explanation: "نعم — قال ذلك عند الشراء." },
        { text: "Ich suche eine Hose.", ar: "أبحث عن بنطال.", correct: false, explanation: "لا — بحثه عن تيشيرت: «ich suche ein T-Shirt»." },
      ]},
    ],
    keyVocab: [
      { de: "Ich suche …", ar: "أبحث عن …" },
      { de: "die Größe", ar: "المقاس" },
      { de: "Das passt", ar: "يناسبني" },
      { de: "Ich nehme es", ar: "سآخذه" },
      { de: "das T-Shirt", ar: "التيشيرت" },
    ],
  },
  {
    id: "a1-07-wohnung",
    level: "A1",
    title: "وصف شقة",
    titleDe: "Die Wohnung beschreiben",
    emoji: "🏠",
    situation: "تتحدث مع صديق عن شقتك الجديدة",
    turns: [
      { speaker: "صديق", role: "a", de: "Du hast eine neue Wohnung, oder?", ar: "لديك شقة جديدة، أليس كذلك؟" },
      { speaker: "أنت", role: "b", de: "Ja! Sie ist schön und hell.", ar: "نعم! إنها جميلة ومضيئة." },
      { speaker: "صديق", role: "a", de: "Wie viele Zimmer hat sie?", ar: "كم غرفة فيها؟" },
      { speaker: "أنت", role: "b", de: "Zwei Zimmer: ein Schlafzimmer und ein Wohnzimmer. Die Küche ist extra.", ar: "غرفتان: غرفة نوم وغرفة معيشة، والمطبخ خارج هذا العدد." },
      { speaker: "صديق", role: "a", de: "Und wo ist die Wohnung?", ar: "وأين الشقة؟" },
      { speaker: "أنت", role: "b", de: "Im Stadtzentrum, neben dem Park.", ar: "في وسط المدينة، بجانب المنتزه." },
    ],
    questions: [
      { de: "Wie viele Zimmer hat die Wohnung?", ar: "كم غرفة في الشقة؟", options: [
        { text: "Zwei Zimmer", ar: "غرفتان", correct: true, explanation: "نعم — «Zwei Zimmer»؛ والمطبخ إضافي ولا يُحسب هنا." },
        { text: "Drei Zimmer", ar: "ثلاث غرف", correct: false, explanation: "لا — قال «Zwei Zimmer: ein Schlafzimmer und ein Wohnzimmer»؛ وأضاف «Die Küche ist extra»، فلا تُحسب غرفة ثالثة." },
        { text: "Vier Zimmer", ar: "أربع غرف", correct: false, explanation: "لا — الحوار يحدد «Zwei Zimmer» ثم يوضح «Die Küche ist extra»، فلا يذكر أربع غرف." }
      ]},
      { de: "Wo liegt die Wohnung?", ar: "أين تقع الشقة؟", options: [
        { text: "Im Stadtzentrum", ar: "في وسط المدينة", correct: true, explanation: "صحيح — «Im Stadtzentrum»." },
        { text: "Am Stadtrand", ar: "في ضواحي المدينة", correct: false, explanation: "لا — الضواحي Am Stadtrand عكس المذكور «Im Stadtzentrum»." },
        { text: "Im Dorf", ar: "في القرية", correct: false, explanation: "لا — لم تُذكر قرية Im Dorf؛ والموقع «Im Stadtzentrum, neben dem Park»." },
      ]},
      { de: "Ist die Wohnung dunkel?", ar: "هل الشقة مظلمة؟", options: [
        { text: "Ja, sie ist dunkel.", ar: "نعم، إنها مظلمة.", correct: false, explanation: "لا — قال إنها hell." },
        { text: "Nein, sie ist hell.", ar: "لا، إنها مشرقة.", correct: true, explanation: "نعم — «Sie ist schön und hell»." },
        { text: "Ich weiß es nicht.", ar: "لا أعرف.", correct: false, explanation: "لا — الحوار يذكر أنها hell: «Sie ist schön und hell»." },
      ]},
    ],
    keyVocab: [
      { de: "die Wohnung", ar: "الشقة" },
      { de: "das Schlafzimmer", ar: "غرفة النوم" },
      { de: "das Wohnzimmer", ar: "غرفة المعيشة" },
      { de: "die Küche", ar: "المطبخ" },
      { de: "im Stadtzentrum", ar: "في وسط المدينة" },
      { de: "neben dem Park", ar: "بجانب المنتزه" },
    ],
  },
  {
    id: "a1-08-einladung",
    level: "A1",
    title: "دعوة لحفلة",
    titleDe: "Einladung zur Party",
    emoji: "🎉",
    situation: "صديق يدعوك إلى حفلة عيد ميلاده",
    audioNoteAr: "ملفات MP3 المرتبطة بهذا الحوار موجودة، لكن مصدرها غير موثّق في بيانات المشروع؛ لذلك لا أجزم بأنها تسجيلات بشرية أو مولّدة آلياً. لم تُتحقق مطابقتها للنص أو جودة النطق؛ فُحصت تقنياً فقط.",
    turns: [
      { speaker: "صديق", role: "a", de: "Ich habe am Samstag Geburtstag!", ar: "عيد ميلادي يوم السبت!" },
      { speaker: "أنت", role: "b", de: "Herzlichen Glückwunsch zum Geburtstag! Und was machst du?", ar: "كل عام وأنت بخير! وماذا ستفعل؟" },
      { speaker: "صديق", role: "a", de: "Ich mache eine Party. Kommst du?", ar: "سأقيم حفلة. هل ستأتي؟" },
      { speaker: "أنت", role: "b", de: "Gerne! Wann beginnt die Party?", ar: "بكل سرور! متى تبدأ الحفلة؟" },
      { speaker: "صديق", role: "a", de: "Um sieben Uhr abends. Bringst du etwas mit?", ar: "في السابعة مساءً. هل ستحضر شيئاً معك؟" },
      { speaker: "أنت", role: "b", de: "Ich bringe einen Kuchen mit!", ar: "سأحضر معي كعكة!" },
    ],
    questions: [
      { de: "Wann ist der Geburtstag?", ar: "متى عيد الميلاد؟", options: [
        { text: "Am Samstag", ar: "يوم السبت", correct: true, explanation: "نعم — «am Samstag Geburtstag»." },
        { text: "Am Sonntag", ar: "يوم الأحد", correct: false, explanation: "لا — لم يُذكر الأحد Am Sonntag؛ بل «Ich habe am Samstag Geburtstag!»." },
        { text: "Am Montag", ar: "يوم الاثنين", correct: false, explanation: "لا — الاثنين Am Montag غير مذكور في الحوار." },
      ]},
      { de: "Was bringt der Gast mit?", ar: "ماذا يحضر الضيف؟", options: [
        { text: "Einen Kuchen", ar: "كعكة", correct: true, explanation: "صحيح — «Ich bringe einen Kuchen mit»." },
        { text: "Blumen", ar: "زهوراً", correct: false, explanation: "لا — لم تُذكر زهور Blumen؛ بل «Ich bringe einen Kuchen mit!»." },
        { text: "Ein Geschenk", ar: "هدية", correct: false, explanation: "لا — لم تُذكر هدية Ein Geschenk؛ والمحمول كعكة «einen Kuchen»." },
      ]},
      { de: "Wer hat am Samstag Geburtstag?", ar: "من لديه عيد ميلاد يوم السبت؟", options: [
        { text: "Der Gast", ar: "الضيف", correct: false, explanation: "لا — الضيف يسأل «Wann beginnt die Party?»؛ وصاحب العيد قال «Ich habe am Samstag Geburtstag!»." },
        { text: "Der Freund", ar: "الصديق", correct: true, explanation: "نعم — «Ich habe am Samstag Geburtstag!»." },
        { text: "Die Mutter", ar: "الأم", correct: false, explanation: "لا — لم تُذكر الأمّ Die Mutter في الحوار." },
      ]},
    ],
    keyVocab: [
      { de: "Herzlichen Glückwunsch zum Geburtstag!", ar: "كل عام وأنت بخير!" },
      { de: "Kommst du?", ar: "هل ستأتي؟" },
      { de: "die Party beginnt um …", ar: "الحفلة تبدأ في …" },
      { de: "Bringst du etwas mit?", ar: "هل ستحضر شيئاً معك؟" },
      { de: "Ich bringe … mit", ar: "سأحضر معي …" },
    ],
  },
  {
    id: "a1-09-wegbeschreibung",
    level: "A1",
    title: "السؤال عن الطريق",
    titleDe: "Nach dem Weg fragen",
    emoji: "🗺️",
    situation: "في المدينة وتسأل عن طريق المحطة",
    turns: [
      { speaker: "أنت", role: "a", de: "Entschuldigung, wo ist der Bahnhof?", ar: "عذراً، أين محطة القطار؟" },
      { speaker: "الرجل", role: "b", de: "Gehen Sie geradeaus, dann rechts.", ar: "اتجه إلى الأمام، ثم انعطف يميناً." },
      { speaker: "أنت", role: "a", de: "Geradeaus und dann rechts. Ist es weit?", ar: "إلى الأمام ثم يميناً. هل هي بعيدة؟" },
      { speaker: "الرجل", role: "b", de: "Nein, nur fünf Minuten zu Fuß.", ar: "لا، خمس دقائق فقط مشياً." },
      { speaker: "أنت", role: "a", de: "Vielen Dank!", ar: "شكراً جزيلاً!" },
      { speaker: "الرجل", role: "b", de: "Gern geschehen!", ar: "العفو!" },
    ],
    questions: [
      { de: "Nach welchem Ort fragt die Person?", ar: "عن أي مكان يسأل الشخص؟", options: [
        { text: "Nach dem Bahnhof", ar: "عن المحطة", correct: true, explanation: "نعم — يسأل «wo ist der Bahnhof»." },
        { text: "Nach dem Supermarkt", ar: "عن السوبرماركت", correct: false, explanation: "لا — لم يسأل عن سوبرماركت Supermarkt؛ بل عن «der Bahnhof»." },
        { text: "Nach dem Krankenhaus", ar: "عن المستشفى", correct: false, explanation: "لا — لم يسأل عن مستشفى Krankenhaus؛ بل عن «der Bahnhof»." },
      ]},
      { de: "Wie weit ist es?", ar: "كم تبعد؟", options: [
        { text: "Fünf Minuten zu Fuß", ar: "خمس دقائق مشياً", correct: true, explanation: "صحيح — «nur fünf Minuten zu Fuß»." },
        { text: "Zehn Minuten mit dem Auto", ar: "عشر دقائق بالسيارة", correct: false, explanation: "لا — المسافة «nur fünf Minuten zu Fuß» لا عشر دقائق بالسيارة mit dem Auto." },
        { text: "Dreißig Minuten", ar: "ثلاثون دقيقة", correct: false, explanation: "لا — لم يذكر ثلاثين دقيقة؛ بل قال: «fünf Minuten zu Fuß»." },
      ]},
      { de: "Welcher Weg führt zum Bahnhof?", ar: "ما الطريق إلى المحطة؟", options: [
        { text: "Geradeaus, dann links", ar: "مستقيماً ثم يساراً", correct: false, explanation: "لا — الاتجاه الثاني يساراً لا يميناً؛ قال «dann rechts»." },
        { text: "Geradeaus, dann rechts", ar: "مستقيماً ثم يميناً", correct: true, explanation: "نعم — «Gehen Sie geradeaus, dann rechts»." },
        { text: "Rechts, dann geradeaus", ar: "يميناً ثم مستقيماً", correct: false, explanation: "لا — يبدأ الطريق بالاتجاه «geradeaus»، ثم يميناً." },
      ]},
    ],
    keyVocab: [
      { de: "wo ist …?", ar: "أين …؟" },
      { de: "geradeaus", ar: "إلى الأمام" },
      { de: "rechts / links", ar: "يميناً / يساراً" },
      { de: "zu Fuß", ar: "مشياً" },
      { de: "Gern geschehen!", ar: "العفو!" },
    ],
  },
  {
    id: "a1-10-essen-bestellen",
    level: "A1",
    title: "طلب طعام في مطعم",
    titleDe: "Essen bestellen",
    emoji: "🍽️",
    situation: "في مطعم تطلب وجبة",
    turns: [
      { speaker: "الموظف", role: "a", de: "Hallo! Was möchten Sie bestellen?", ar: "مرحباً! ماذا تودّ أن تطلب؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte eine Pizza und eine Cola, bitte.", ar: "أريد بيتزا وكولا من فضلك." },
      { speaker: "الموظف", role: "a", de: "Mit Käse oder mit Salami?", ar: "بالجبن أم بالسلامي؟" },
      { speaker: "أنت", role: "b", de: "Mit Käse, bitte.", ar: "بالجبن من فضلك." },
      { speaker: "الموظف", role: "a", de: "Okay. Das macht 9 Euro.", ar: "حسناً. المجموع 9 يورو." },
      { speaker: "أنت", role: "b", de: "Hier bitte. Danke!", ar: "تفضل. شكراً!" },
    ],
    questions: [
      { de: "Was bestellt der Kunde?", ar: "ماذا يطلب الزبون؟", options: [
        { text: "Eine Pizza und eine Cola", ar: "بيتزا وكولا", correct: true, explanation: "نعم — الوجبة الكاملة." },
        { text: "Nur eine kleine Pizza", ar: "بيتزا صغيرة فقط", correct: false, explanation: "لا — الطلب شامل: «Ich möchte eine Pizza und eine Cola, bitte»." },
        { text: "Einen Salat mit Brot", ar: "سلطة مع خبز", correct: false, explanation: "لا — لم تُذكر سلطة Einen Salat في الحوار." },
      ]},
      { de: "Wie viel kostet das?", ar: "كم يكلف هذا؟", options: [
        { text: "9 Euro", ar: "9 يورو", correct: true, explanation: "صحيح — «Das macht 9 Euro»." },
        { text: "5 Euro", ar: "5 يورو", correct: false, explanation: "لا — الحساب «Das macht 9 Euro»." },
        { text: "12 Euro", ar: "12 يورو", correct: false, explanation: "لا — لم يُذكر 12 Euro؛ والمبلغ تسعة." },
      ]},
      { de: "Was möchte der Kunde auf der Pizza?", ar: "ماذا يريد الزبون على البيتزا؟", options: [
        { text: "Salami", ar: "السلامي", correct: false, explanation: "لا — السلامي كان أحد خياري الموظف؛ واختار الزبون الجبن: «Mit Käse, bitte»." },
        { text: "Käse", ar: "الجبن", correct: true, explanation: "نعم — اختار الزبون الجبن: «Mit Käse, bitte»." },
        { text: "Pilze", ar: "الفطر", correct: false, explanation: "لا — الحوار يذكر الاختيار بين السلامي والجبن، والطلب كان «Mit Käse, bitte»." },
      ]},
    ],
    keyVocab: [
      { de: "bestellen", ar: "يطلب" },
      { de: "die Pizza mit Käse", ar: "بيتزا بالجبن" },
      { de: "die Cola", ar: "الكولا" },
      { de: "Das macht …", ar: "المجموع …" },
      { de: "Hier bitte", ar: "تفضل" },
    ],
  },
];
