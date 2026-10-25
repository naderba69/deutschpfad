/**
 * b1 — الحوارات الخمسة الأخيرة — تعطل السيارة · نقاش عن المال · في النادي الرياضي · وصفة طعام · التحدث عن تغيير السكن
 * فُصل من b1.ts في الدفعة 114 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../b1.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const B1_DIALOGUES_3: DailyDialogue[] = [
  {
    id: "b1-11-panne",
    level: "B1",
    title: "تعطل السيارة",
    titleDe: "Autopanne",
    emoji: "🚗",
    situation: "محاكاة تدريبية خيالية لتعطل سيارة؛ موقع الطريق وموعد وصول خدمة السحب المذكوران أمثلة وليسا معلومات آنية أو ضماناً زمنياً.",
    turns: [
      { speaker: "أنت", role: "a", de: "Hallo! Mein Auto ist auf der Autobahn liegen geblieben.", ar: "مرحباً! سيارتي تعطلت على الطريق السريع." },
      { speaker: "الموظف", role: "b", de: "Wo genau befinden Sie sich?", ar: "أين أنت بالضبط؟" },
      { speaker: "أنت", role: "a", de: "Auf der A8, in Richtung München, bei Kilometer 45.", ar: "على الطريق A8 باتجاه ميونخ عند الكيلومتر 45." },
      { speaker: "الموظف", role: "b", de: "Ist die Warnblinkanlage an?", ar: "هل أضواء الخطر مضاءة؟" },
      { speaker: "أنت", role: "a", de: "Ja, und die Warnweste habe ich auch an.", ar: "نعم، وارتديت السترة العاكسة أيضاً." },
      { speaker: "الموظف", role: "b", de: "Sehr gut. Der Abschleppdienst kommt in 20 Minuten.", ar: "ممتاز. خدمة السحب ستصل خلال 20 دقيقة." },
    ],
    questions: [
      { de: "Wo befindet sich die Person?", ar: "أين يوجد الشخص؟", options: [
        { text: "Auf der A8 bei Kilometer 45", ar: "على الطريق A8 عند الكيلومتر 45", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "In der Stadt neben dem Markt", ar: "في المدينة", correct: false, explanation: "لا — لا مدينة ولا سوق Markt؛ والموقع «Auf der A8, in Richtung München, bei Kilometer 45»." },
        { text: "Am Flughafen vor dem Terminal", ar: "في المطار", correct: false, explanation: "لا — لم يُذكر مطار Flughafen ولا Terminal؛ والعطل على Autobahn عند Kilometer 45." },
      ]},
      { de: "Was hat die Person zur Sicherheit angezogen?", ar: "ماذا ارتدى الشخص للسلامة؟", options: [
        { text: "Eine Warnweste", ar: "سترة عاكسة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Einen festen Helm", ar: "خوذة", correct: false, explanation: "لا — لم تُذكر خوذة Helm؛ والملبوس «die Warnweste habe ich auch an»." },
        { text: "Eine warme Jacke", ar: "سترة عادية", correct: false, explanation: "لا — لم تُذكر سترة دافئة Jacke؛ وإنما Warnweste («und die Warnweste habe ich auch an»)." },
      ]},
      { de: "Wer kommt in 20 Minuten?", ar: "من سيصل خلال 20 دقيقة؟", options: [
        { text: "Der Abschleppdienst", ar: "خدمة السحب", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Die Polizei aus der Stadt", ar: "الشرطة", correct: false, explanation: "لا — لم تُذكر شرطة Polizei؛ والقادم «Der Abschleppdienst kommt in 20 Minuten»." },
        { text: "Ein Taxi vom Bahnhof", ar: "سيارة أجرة", correct: false, explanation: "لا — لم يُذكر Taxi ولا Bahnhof؛ والمُنتظَر Abschleppdienst («Der Abschleppdienst kommt in 20 Minuten»)." },
      ]},
    ],
    keyVocab: [
      { de: "liegen bleiben", ar: "يتعطل (سيارة)" },
      { de: "die Warnblinkanlage", ar: "أضواء الخطر" },
      { de: "die Warnweste", ar: "السترة العاكسة" },
      { de: "der Abschleppdienst", ar: "خدمة السحب" },
      { de: "in Richtung", ar: "باتجاه" },
    ],
  },
  {
    id: "b1-12-geld",
    level: "B1",
    title: "نقاش عن المال",
    titleDe: "Über Geld sprechen",
    emoji: "💰",
    situation: "حوار تدريبي خيالي بين صديقين عن الادخار؛ الأسماء والتفاصيل أمثلة وليست قصة واقعية.",
    audioNoteAr: "اجتازت ملفات الحوار فحص فك الترميز ومؤشرات الإشارة التقنية فقط؛ لا يثبت ذلك مطابقة الصوت لهذا النص أو وضوح النطق وطبيعته.",
    turns: [
      { speaker: "الصديق", role: "a", de: "Wie schaffst du es, Geld zu sparen?", ar: "كيف تنجح في ادخار المال؟" },
      { speaker: "أنت", role: "b", de: "Ich lege jeden Monat einen festen Betrag beiseite.", ar: "أضع جانباً مبلغاً ثابتاً كل شهر." },
      { speaker: "الصديق", role: "a", de: "Und wofür sparst du?", ar: "ولماذا تدخر؟" },
      { speaker: "أنت", role: "b", de: "Für eine Reise nach Japan. Es ist mein Traum.", ar: "لرحلة إلى اليابان. إنه حلمي." },
      { speaker: "الصديق", role: "a", de: "Toller Traum! Wie lange sparst du schon?", ar: "حلم رائع! منذ متى تدخر؟" },
      { speaker: "أنت", role: "b", de: "Seit zwei Jahren. Noch ein Jahr und ich kann fliegen!", ar: "منذ سنتين. سنة أخرى وسأستطيع السفر!" },
    ],
    questions: [
      { de: "Wie spart die Person Geld?", ar: "كيف يدخر الشخص المال؟", options: [
        { text: "Sie legt jeden Monat einen festen Betrag beiseite", ar: "يضع مبلغاً ثابتاً جانباً كل شهر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Sie kauft nichts mehr ein und spart so", ar: "لا يشتري أي شيء", correct: false, explanation: "لا — لم يُذكر ترك التسوق einkaufen؛ والطريقة «Ich lege jeden Monat einen festen Betrag beiseite»." },
        { text: "Sie verdient jeden Tag ein bisschen mehr", ar: "يكسب أكثر كل يوم", correct: false, explanation: "لا — لم يُذكر دخلٌ إضافي verdient؛ والادخار مبلغٌ ثابت شهري («einen festen Betrag beiseite»)." },
      ]},
      { de: "Wofür spart die Person?", ar: "لماذا يدخر الشخص؟", options: [
        { text: "Für eine Reise nach Japan", ar: "لرحلة إلى اليابان", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Für ein eigenes Auto", ar: "لسيارة", correct: false, explanation: "لا — لم تُذكر سيارة Auto؛ والهدف «Für eine Reise nach Japan»." },
        { text: "Für eine größere Wohnung", ar: "لشقة", correct: false, explanation: "لا — لم تُذكر شقة Wohnung؛ والحلم Reise nach Japan («Es ist mein Traum»)." },
      ]},
      { de: "Wie lange spart die Person schon?", ar: "منذ متى يدخر الشخص؟", options: [
        { text: "Seit zwei Jahren", ar: "منذ سنتين", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Seit sechs Monaten", ar: "منذ ستة أشهر", correct: false, explanation: "لا — ليست ستة أشهر؛ بل «Seit zwei Jahren»." },
        { text: "Seit zehn Jahren", ar: "منذ عشر سنوات", correct: false, explanation: "لا — لم تُذكر عشر سنوات؛ فالمدة «Seit zwei Jahren» ومعها «Noch ein Jahr und ich kann fliegen!»." },
      ]},
    ],
    keyVocab: [
      { de: "Geld sparen", ar: "ادخار المال" },
      { de: "einen Betrag beiseitelegen", ar: "يضع مبلغاً جانباً" },
      { de: "der Traum", ar: "الحلم" },
      { de: "seit zwei Jahren", ar: "منذ سنتين" },
      { de: "fliegen können", ar: "يستطيع السفر" },
    ],
  },
  {
    id: "b1-13-sport",
    level: "B1",
    title: "في النادي الرياضي",
    titleDe: "Im Fitnessstudio",
    emoji: "🏋️",
    situation: "موقف تدريبي خيالي؛ السعر والمزايا وشروط العقد مختلقة وليست عرضاً حقيقياً.",
    audioNoteAr: "يُقرأ الحوار بصوت الجهاز (TTS). السعر والشروط أرقام خيالية للتدرب على الاستفسار؛ تحقّق من النادي الفعلي قبل الاشتراك.",
    turns: [
      { speaker: "الموظف", role: "a", de: "Willkommen! Interessieren Sie sich für eine Mitgliedschaft?", ar: "مرحباً! هل تهتم بعضوية؟" },
      { speaker: "أنت", role: "b", de: "Ja, wie viel kostet die Mitgliedschaft im Monat?", ar: "نعم، كم تكلف العضوية شهرياً؟" },
      { speaker: "الموظف", role: "a", de: "30 Euro pro Monat. Ohne Vertragsbindung.", ar: "30 يورو شهرياً. بدون التزام عقدي." },
      { speaker: "أنت", role: "b", de: "Das ist günstig. Was ist inklusive?", ar: "هذا رخيص. ماذا يشمل؟" },
      { speaker: "الموظف", role: "a", de: "Alle Kurse, Sauna und Fitnessgeräte.", ar: "كل الدورات والساونا وأجهزة اللياقة." },
      { speaker: "أنت", role: "b", de: "Sehr gut. Ich würde gern eine Probestunde machen.", ar: "جيد جداً. أود تجربة حصة تجريبية." },
    ],
    questions: [
      { de: "Wie viel kostet die Mitgliedschaft im Monat?", ar: "كم تكلف العضوية شهرياً؟", options: [
        { text: "30 Euro", ar: "30 يورو", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "50 Euro", ar: "50 يورو", correct: false, explanation: "لا — الاشتراك «30 Euro pro Monat»." },
        { text: "13 Euro", ar: "13 يورو", correct: false, explanation: "لا — لم يُذكر 13؛ والثمن «30 Euro pro Monat»." },
      ]},
      { de: "Was ist in der Mitgliedschaft inklusive?", ar: "ماذا تشمل العضوية؟", options: [
        { text: "Kurse, Sauna und Fitnessgeräte", ar: "الدورات والساونا وأجهزة اللياقة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Nur Getränke und Snacks", ar: "المشروبات فقط", correct: false, explanation: "لا — لم تُذكر مشروبات Getränke؛ والشمول «Alle Kurse, Sauna und Fitnessgeräte»." },
        { text: "Ein Auto für die Anfahrt", ar: "سيارة", correct: false, explanation: "لا — لم تُذكر سيارة Auto؛ والمشمول Kurse, Sauna und Fitnessgeräte." },
      ]},
      { de: "Was möchte die Person ausprobieren?", ar: "ماذا يريد الشخص أن يجرب؟", options: [
        { text: "Eine kurze Probestunde", ar: "حصة تجريبية", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Einen Vertrag für ein Jahr", ar: "عقداً لمدة سنة", correct: false, explanation: "لا — العقد غير مُلزِم أصلاً: «Ohne Vertragsbindung»؛ والمطلوب «eine Probestunde machen»." },
        { text: "Einen Personal Trainer", ar: "مدرباً شخصياً", correct: false, explanation: "لا — لم يُذكر مدرّب شخصي Personal Trainer؛ والرغبة «Ich würde gern eine Probestunde machen»." },
      ]},
    ],
    keyVocab: [
      { de: "die Mitgliedschaft", ar: "العضوية" },
      { de: "die Vertragsbindung", ar: "الالتزام العقدي" },
      { de: "inklusiv", ar: "شامل" },
      { de: "die Probestunde", ar: "الحصة التجريبية" },
      { de: "günstig", ar: "رخيص" },
    ],
  },
  {
    id: "b1-14-kochen",
    level: "B1",
    title: "وصفة طعام",
    titleDe: "Ein Rezept erklären",
    emoji: "🍳",
    situation: "حوار تدريبي خيالي عن وصفة يفضّلها المتحدث؛ ليس وصفة موثقة أو قاعدة عن المطبخ التونسي.",
    audioNoteAr: "حوار تمثيلي عن تفضيل شخصي؛ المقادير والمدة والتوابل أمثلة خيالية قابلة للتغيير.",
    turns: [
      { speaker: "الصديق", role: "a", de: "Das Essen riecht fantastisch! Was kochst du?", ar: "الطعام رائحته رائعة! ماذا تطبخ؟" },
      { speaker: "أنت", role: "b", de: "Ich mache Couscous mit Gemüse. Das esse ich besonders gern.", ar: "أحضّر كسكساً بالخضار. أحبّ هذا الطبق كثيراً." },
      { speaker: "الصديق", role: "a", de: "Wie lange dauert die Zubereitung?", ar: "كم يستغرق التحضير؟" },
      { speaker: "أنت", role: "b", de: "Ungefähr eine Stunde. Zuerst koche ich das Gemüse, dann den Couscous.", ar: "حوالي ساعة. أولاً أطبخ الخضار ثم الكسكس." },
      { speaker: "الصديق", role: "a", de: "Und welche Gewürze benutzt du?", ar: "وأي توابل تستخدم؟" },
      { speaker: "أنت", role: "b", de: "Kreuzkümmel, Kurkuma und etwas Pfeffer.", ar: "كمون وكركم وقليل من الفلفل." },
    ],
    questions: [
      { de: "Was kocht die Person?", ar: "ماذا يطبخ الشخص؟", options: [
        { text: "Couscous mit Gemüse", ar: "كسكس بالخضار", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Eine Pizza aus dem Ofen", ar: "بيتزا", correct: false, explanation: "لا — لم تُذكر بيتزا Pizza ولا فرن؛ والطبق «Ich mache Couscous mit Gemüse»." },
        { text: "Eine Suppe mit Brot", ar: "شوربة", correct: false, explanation: "لا — لم تُذكر شوربة Suppe ولا خبز؛ والمطبوخ Couscous mit Gemüse («Das esse ich besonders gern»)." },
      ]},
      { de: "Wie lange dauert die Zubereitung?", ar: "كم يستغرق التحضير؟", options: [
        { text: "Ungefähr eine Stunde", ar: "حوالي ساعة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Ungefähr zehn Minuten", ar: "حوالي عشر دقائق", correct: false, explanation: "لا — ليست عشر دقائق؛ بل «Ungefähr eine Stunde»." },
        { text: "Ungefähr drei Stunden", ar: "حوالي ثلاث ساعات", correct: false, explanation: "لا — لم تُذكر ثلاث ساعات؛ فالمدة «Ungefähr eine Stunde» ثم «Zuerst koche ich das Gemüse, dann den Couscous»." },
      ]},
      { de: "Welche Gewürze werden genannt?", ar: "ما التوابل المذكورة؟", options: [
        { text: "Kreuzkümmel, Kurkuma und Pfeffer", ar: "كمون وكركم وفلفل", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Zimt und Vanille zum Backen", ar: "قرفة وفانيليا", correct: false, explanation: "لا — لم تُذكر قرفة Zimt ولا فانيليا؛ والتوابل «Kreuzkümmel, Kurkuma und etwas Pfeffer»." },
        { text: "Salz und Zucker aus dem Regal", ar: "ملح وسكر", correct: false, explanation: "لا — لم يُذكر ملح Salz ولا سكر؛ والمذكور Kreuzkümmel, Kurkuma und Pfeffer." },
      ]},
    ],
    keyVocab: [
      { de: "das Gericht", ar: "الطبق" },
      { de: "die Zubereitung", ar: "التحضير" },
      { de: "die Gewürze", ar: "التوابل" },
      { de: "Kreuzkümmel", ar: "الكمون" },
      { de: "ungefähr", ar: "حوالي" },
    ],
  },
  {
    id: "b1-15-wohnungswechsel",
    level: "B1",
    title: "التحدث عن تغيير السكن",
    titleDe: "Über einen Umzug sprechen",
    emoji: "📦",
    situation: "تخبر صديقك أنك ستنتقل",
    audioNoteAr: "ملفات MP3 لهذا الحوار موجودة، لكن مصدرها ومطابقتها الدقيقة للنص غير موثقين؛ اجتازت فحص الإشارة التقني فقط، وهو لا يقيّم وضوح النطق أو طبيعية الأداء.",
    turns: [
      { speaker: "الصديق", role: "a", de: "Ich habe gehört, du ziehst um. Stimmt das?", ar: "سمعت أنك ستنتقل. صحيح؟" },
      { speaker: "أنت", role: "b", de: "Ja, im September ziehe ich in eine größere Wohnung.", ar: "نعم، في سبتمبر سأنتقل إلى شقة أكبر." },
      { speaker: "الصديق", role: "a", de: "Warum möchtest du umziehen?", ar: "لماذا تريد الانتقال؟" },
      { speaker: "أنت", role: "b", de: "Weil ich ein eigenes Büro für die Arbeit brauche.", ar: "لأنني أحتاج مكتباً خاصاً للعمل." },
      { speaker: "الصديق", role: "a", de: "Das ist verständlich. Brauchst du Hilfe beim Umzug?", ar: "هذا مفهوم. هل تحتاج مساعدة في النقل؟" },
      { speaker: "أنت", role: "b", de: "Das wäre super! Ich lade dich danach zum Essen ein.", ar: "سيكون رائعاً! سأدعوك إلى وجبة بعدها." },
    ],
    questions: [
      { de: "Wann zieht die Person um?", ar: "متى ينتقل الشخص؟", options: [
        { text: "Im September", ar: "في سبتمبر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Im Januar", ar: "في يناير", correct: false, explanation: "لا — لم يُذكر Januar؛ والانتقال «im September ziehe ich in eine größere Wohnung»." },
        { text: "Im Juli nächsten Jahres", ar: "في يوليو", correct: false, explanation: "لا — لم يُذكر Juli ولا عامٌ قادم؛ والشهر «im September»." },
      ]},
      { de: "Warum zieht die Person um?", ar: "لماذا ينتقل الشخص؟", options: [
        { text: "Sie braucht ein eigenes Büro für die Arbeit", ar: "يحتاج مكتباً خاصاً للعمل", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Sie will viel näher am Meer wohnen", ar: "يريد السكن قرب البحر", correct: false, explanation: "لا — لم يُذكر بحر Meer؛ والسبب «Weil ich ein eigenes Büro für die Arbeit brauche»." },
        { text: "Sie hat leider Streit mit den Nachbarn", ar: "لديه خلاف مع الجيران", correct: false, explanation: "لا — لم يُذكر خلافٌ مع جيران Nachbarn؛ والدافع Büro für die Arbeit." },
      ]},
      { de: "Was bietet die Person dem Freund nach dem Umzug an?", ar: "ماذا يعرض الشخص على صديقه بعد الانتقال؟", options: [
        { text: "Ein Essen einzuladen", ar: "دعوته إلى العشاء", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Einen Umzugswagen zu kaufen", ar: "شراء شاحنة نقل", correct: false, explanation: "لا — لم يُذكر شراء شاحنة Umzugswagen؛ والعرض «Ich lade dich danach zum Essen ein»." },
        { text: "Geld zu leihen", ar: "إقراضه مالاً", correct: false, explanation: "لا — لم يُعرض إقراض مال Geld leihen؛ بل دعوةٌ إلى الطعام («zum Essen ein»)." },
      ]},
    ],
    keyVocab: [
      { de: "umziehen", ar: "ينتقل" },
      { de: "das eigene Büro", ar: "المكتب الخاص" },
      { de: "verständlich", ar: "مفهوم" },
      { de: "beim Umzug helfen", ar: "يساعد في النقل" },
      { de: "danach", ar: "بعد ذلك" },
    ],
  },
];
