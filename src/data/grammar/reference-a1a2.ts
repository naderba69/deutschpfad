import type { GrammarTopic } from "./reference-types";

/**
 * قواعد A1 + A2 — أساسيات الصرف والجملة (كانت في reference.ts قبل التقسيم:
 * ملف واحد تجاوز سقف 600 سطر بعد إضافة موضوع ترتيب الكلمات).
 */
export const GRAMMAR_A1A2: GrammarTopic[] = [
  /* ═══════════ A1 ═══════════ */
  {
    id: "a1-sein", level: "A1", category: "verbs",
    titleAr: "الفعل sein (يكون)", titleDe: "Das Verb sein",
    summary: "أهم فعل ألماني: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind. تصريفه شاذ ويُحفظ.",
    why: "العربية الجملة الاسمية بلا فعل («أنا من تونس»)، لكن الألمانية تتطلب فعلاً دائماً.",
    examples: [
      { de: "Ich bin aus Tunesien.", ar: "أنا من تونس." },
      { de: "Wir sind Studenten.", ar: "نحن طلاب." },
    ],
    eselsbruecke: "سلم العائلة: بِن-بِست-إست، زِند-زايْت-زِند.",
    mistakeLink: "conjugation",
  },
  {
    id: "a1-haben", level: "A1", category: "verbs",
    titleAr: "الفعل haben (يملك)", titleDe: "Das Verb haben",
    summary: "للملكية والجوع/العطش: ich habe, du hast, er hat, wir haben, ihr habt, sie haben.",
    why: "«عندي جوع» = Ich habe Hunger — الجوع اسم يُملَك.",
    examples: [
      { de: "Ich habe Hunger.", ar: "أنا جائع." },
      { de: "Hast du einen Bruder?", ar: "هل لديك أخ؟" },
    ],
    eselsbruecke: "سلم: هابه-هاست-هات، هابن-هابت-هابن.",
    mistakeLink: "conjugation",
  },
  {
    id: "a1-articles", level: "A1", category: "articles",
    titleAr: "أدوات التعريف والتنكير", titleDe: "der/die/das + ein/eine",
    summary: "كل اسم له جنس: der (مذكر), die (مؤنث), das (محايد). التنكير: ein (مذكر/محايد), eine (مؤنث). الجمع: die دائماً.",
    why: "الجنس يؤثر على كل شيء لاحقاً: الصفة، الضمير، الحالات.",
    examples: [
      { de: "der Apfel / ein Apfel", ar: "التفاحة / تفاحة" },
      { de: "die Milch / eine Milch", ar: "الحليب / حليب" },
    ],
    eselsbruecke: "ألوان: der=أزرق، die=أحمر، das=أخضر. احفظ الجنس مع الكلمة.",
    mistakeLink: "article",
  },
  {
    id: "a1-akkusativ", level: "A1", category: "cases",
    titleAr: "حالة النصب (Akkusativ)", titleDe: "Der Akkusativ",
    summary: "المفعول به المباشر: المذكر فقط يتغير der→den وein→einen. المؤنث والمحايد والجمع لا يتغيرون.",
    why: "علامة إعراب تميز الفاعل من المفعول — المذكر وحده يغيّر قبعته.",
    examples: [
      { de: "Ich esse einen Apfel.", ar: "آكل تفاحة." },
      { de: "Ich trinke die Milch.", ar: "أشرب الحليب." },
    ],
    eselsbruecke: "«den للنصب عند الرجال فقط» — der→den, ein→einen.",
    mistakeLink: "case",
  },
  {
    id: "a1-dativ-ort", level: "A1", category: "prepositions",
    titleAr: "حروف الجر المكانية (wo? + Dativ)", titleDe: "in, auf, an + Dativ",
    summary: "للسؤال أين؟ (wo?): in/auf/an/unter + Dativ: der→dem, die→der, das→dem. الاختصارات: im (in+dem), am (an+dem).",
    why: "السكون Dativ — wo? يسأل عن مكان ثابت.",
    examples: [
      { de: "Das Buch ist auf dem Tisch.", ar: "الكتاب على الطاولة." },
      { de: "Die Lampe ist in der Küche.", ar: "المصباح في المطبخ." },
    ],
    eselsbruecke: "«السكون Dativ، الحركة Akkusativ» — و«im = إم» مثل العربية.",
    mistakeLink: "preposition",
  },
  {
    id: "a1-trennbare", level: "A1", category: "verbs",
    titleAr: "الأفعال المنفصلة", titleDe: "Trennbare Verben",
    summary: "فعل ببادئة (auf, an, ein, fern...) — في المضارع: الفعل يتصرف في المركز الثاني والبادئة تذهب للنهاية: Ich stehe um 7 auf.",
    why: "الجملة الألمانية «إطار»: الفعل يفتح والبادئة تغلق في النهاية.",
    examples: [
      { de: "Ich stehe um sieben auf.", ar: "أستيقظ في السابعة." },
      { de: "Wir sehen abends fern.", ar: "نشاهد التلفاز مساءً." },
    ],
    eselsbruecke: "«البادئة ذيل الكلب: يهز في النهاية» — ich stehe ... auf.",
    mistakeLink: "word-order",
  },
  {
    id: "a1-imperativ", level: "A1", category: "verbs",
    titleAr: "صيغة الأمر", titleDe: "Der Imperativ",
    summary: "ثلاث صور: du (جذر الفعل: Komm!), ihr (تصريفهم: Kommt!), Sie (الفعل + Sie: Kommen Sie!).",
    why: "درجة القرب: مع الصديق تختصر، مع الحضرة تعكس.",
    examples: [
      { de: "Komm bitte!", ar: "تعال من فضلك!" },
      { de: "Kommen Sie bitte herein!", ar: "تفضلوا بالدخول!" },
    ],
    eselsbruecke: "«أمر du = اقطع التاء»: kommst → Komm!",
    mistakeLink: "grammar",
  },
  {
    id: "a1-negation", level: "A1", category: "negation",
    titleAr: "النفي: nicht و kein", titleDe: "Negation: nicht/kein",
    summary: "nicht ينفي الفعل والصفة (Ich arbeite nicht). kein ينفي الاسم المنكر (Ich habe keinen Bruder). kein يتصرف مثل ein.",
    why: "الفرق: نفي الفعل مقابل نفي الوجود — kein ≈ لا يوجد.",
    examples: [
      { de: "Ich habe kein Geld.", ar: "ليس لدي مال." },
      { de: "Das ist nicht teuer.", ar: "هذا ليس غالياً." },
    ],
    eselsbruecke: "«kein = كَين (لا شيء)» — انفي الاسم بـ kein، والفعل بـ nicht.",
    mistakeLink: "negation",
  },
  {
    id: "a1-wfragen", level: "A1", category: "sentences",
    titleAr: "أسئلة W + ترتيب V2", titleDe: "W-Fragen und V2",
    summary: "كلمات السؤال تبدأ بـ W: wer, was, wo, woher, wohin, wann, warum, wie. القاعدة: W + فعل + فاعل.",
    why: "الفعل دائماً في المركز الثاني — حتى بعد كلمة السؤال.",
    examples: [
      { de: "Woher kommst du?", ar: "من أين أنت؟" },
      { de: "Wie heißt du?", ar: "ما اسمك؟" },
    ],
    eselsbruecke: "«W تليها الفعل مباشرة»: W + Verb + Subjekt.",
    mistakeLink: "word-order",
  },
  {
    id: "a1-plural", level: "A1", category: "nouns",
    titleAr: "جمع الأسماء", titleDe: "Der Plural",
    summary: "أنماط الجمع: -e (Tische), -en/-n (Bananen), -er مع Umlaut (Bücher), Umlaut فقط (Äpfel), بدون تغيير (Zimmer), -s (Autos). الجمع دائماً die.",
    why: "أنماط تاريخية — تُحفظ مع الكلمة مثل العربية (تفاحات/كتب).",
    examples: [
      { de: "der Tisch → die Tische", ar: "الطاولة → الطاولات" },
      { de: "der Apfel → die Äpfel", ar: "التفاحة → التفاحات" },
    ],
    eselsbruecke: "أهم ثلاثة: -e، -en، -er. والجمع دائماً die.",
    mistakeLink: "plural",
  },

  /* ═══════════ A2 ═══════════ */
  {
    id: "a2-perfekt", level: "A2", category: "tenses",
    titleAr: "الماضي التام (Perfekt)", titleDe: "Das Perfekt",
    summary: "haben/sein (مضارع) + Partizip II في النهاية. sein للحركة والتغير، haben للباقي. المنتظم: ge+جذر+t، القوي: ge+جذر متغير+en.",
    why: "الزمن الأول في المحادثة — الإطار: المساعد يفتح والتصريف يغلق.",
    examples: [
      { de: "Ich habe gegessen.", ar: "أكلت." },
      { de: "Ich bin nach Berlin geflogen.", ar: "طرت إلى برلين." },
    ],
    eselsbruecke: "«حساب = haben، حركة = sein» — وge- علامة التصريف.",
    mistakeLink: "conjugation",
  },
  {
    id: "a2-dativ", level: "A2", category: "cases",
    titleAr: "حالة الجر (Dativ) مع الأفعال", titleDe: "Der Dativ",
    summary: "أفعال تأخذ Dativ دائماً: helfen, gefallen, gehören, danken, gratulieren, antworten. der→dem, die→der, das→dem, الجمع den+n.",
    why: "الفعل يتجه «إلى شخص» — اسأل: لمن؟ (wem?)",
    examples: [
      { de: "Ich helfe dem Vater.", ar: "أساعد الأب." },
      { de: "Das gehört der Mutter.", ar: "هذا يخص الأم." },
    ],
    eselsbruecke: "«Dativ = لمن؟ (wem؟)» — وعائلة الأفعال: helfen-gefallen-gehören-danken.",
    mistakeLink: "case",
  },
  {
    id: "a2-wechsel", level: "A2", category: "prepositions",
    titleAr: "حروف الجر المتغيرة (Wechselpräpositionen)", titleDe: "wo? Dativ / wohin? Akkusativ",
    summary: "9 حروف: in, an, auf, über, unter, vor, hinter, neben, zwischen. wo? (سكون) → Dativ. wohin? (حركة) → Akkusativ.",
    why: "تغيير الأداة يخبرك بالحركة أو السكون بدون كلمات إضافية.",
    examples: [
      { de: "Die Tasse steht auf dem Tisch.", ar: "الكوب واقف على الطاولة (سكون)." },
      { de: "Ich stelle die Tasse auf den Tisch.", ar: "أضع الكوب على الطاولة (حركة)." },
    ],
    eselsbruecke: "«السكون Dativ (يمكث)، الحركة Akkusativ (يمشي)».",
    mistakeLink: "preposition",
  },
  {
    id: "a2-modal", level: "A2", category: "modal",
    titleAr: "أفعال الإمكان والوجوب الستة (Modalverben)", titleDe: "Die Modalverben",
    summary: "können (يستطيع), müssen (يجب), wollen (يريد), sollen (ينبغي), dürfen (يُسمح), mögen (يحب). المفرد بلا نهاية غالباً: ich kann, du kannst, er kann. الفعل الأساسي في النهاية.",
    why: "فعل الإمكان أو الوجوب يعدّل معنى الفعل الأساسي — والأساسي يذهب للنهاية.",
    examples: [
      { de: "Ich kann Deutsch sprechen.", ar: "أستطيع التحدث بالألمانية." },
      { de: "Du sollst viel trinken.", ar: "يجب أن تشرب كثيراً." },
    ],
    eselsbruecke: "«الستة: كان-موست-فول-سول-دورف-موك» — والمفرد بلا نهاية.",
    mistakeLink: "conjugation",
  },
  {
    id: "a2-nebensaetze", level: "A2", category: "sentences",
    titleAr: "الجمل الثانوية: weil, dass, wenn, ob", titleDe: "Nebensätze",
    summary: "بعد الروابط: الفعل يذهب للنهاية. weil (لأنّ), dass (أنّ), wenn (إذا/عندما), ob (هل).",
    why: "الجملة الثانوية «قوس» يفتحه الرابط ويغلقه الفعل.",
    examples: [
      { de: "Ich lerne, weil ich will.", ar: "أتعلم لأنني أريد." },
      { de: "Ich glaube, dass er kommt.", ar: "أعتقد أنه يأتي." },
    ],
    eselsbruecke: "«الرابط يفتح القوس والفعل يغلقه» — كل الروابط ترسل الفعل للنهاية.",
    mistakeLink: "word-order",
  },
  {
    id: "a2-possessiv", level: "A2", category: "pronouns",
    titleAr: "الضمائر الملكية", titleDe: "Possessivpronomen",
    summary: "mein/dein/sein/ihr + نهايات مثل ein: mein Vater, meinen Vater (نصب), meinem Vater (جر), meine Mutter, meiner Mutter (جر).",
    why: "الملكية «صفة» تتبع الاسم في جنسه وحالته.",
    examples: [
      { de: "Ich sehe meinen Bruder.", ar: "أرى أخي." },
      { de: "Ich helfe meinem Vater.", ar: "أساعد أبي." },
    ],
    eselsbruecke: "«mein مثل ein تماماً» — احفظ جدول ein وستعرف كل الملكيات.",
    mistakeLink: "case",
  },
  {
    id: "a2-reflexiv", level: "A2", category: "verbs",
    titleAr: "الأفعال الانعكاسية", titleDe: "Reflexive Verben",
    summary: "sich freuen, sich ärgern, sich anmelden, sich beeilen... الضمير: mich, dich, sich, uns, euch. الغائب دائماً sich.",
    why: "الفعل يقع على الفاعل نفسه — «أفرح نفسي».",
    examples: [
      { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع للعطلة." },
      { de: "Beeil dich bitte!", ar: "استعجل من فضلك!" },
    ],
    eselsbruecke: "«sich = نفس» — والغائب دائماً sich.",
    mistakeLink: "pronoun",
  },
  {
    id: "a2-konnektoren", level: "A2", category: "connectives",
    titleAr: "أدوات الربط: العادية والمقلوبة", titleDe: "und, aber, denn / deshalb, trotzdem",
    summary: "عادية (لا تغير الترتيب): und, aber, oder, denn. مقلوبة (الفعل أولاً): deshalb, trotzdem, dann, außerdem, sonst.",
    why: "المقلوبة تحمل معنى النتيجة/المعاكسة فتقفز للبداية.",
    examples: [
      { de: "Ich bin müde, aber glücklich.", ar: "أنا متعب لكن سعيد." },
      { de: "Es regnet, deshalb bleibe ich.", ar: "تمطر لذلك أبقى." },
    ],
    eselsbruecke: "«عائلة عادية: und-aber-oder-denn» — «مقلوبة: deshalb-trotzdem-dann».",
    mistakeLink: "word-order",
  },
  {
    id: "a2-komparativ", level: "A2", category: "adjectives",
    titleAr: "المقارنة والتفضيل", titleDe: "Komparativ und Superlativ",
    summary: "المقارنة: صفة+er als (schneller als). التفضيل: am + صفة + sten (am schnellsten). الشواذ: gut→besser→am besten, viel→mehr, gern→lieber.",
    why: "مثل العربية «أفعل» — الألمانية تضيف -er والأفعَل = am...sten.",
    examples: [
      { de: "Der Zug ist schneller als der Bus.", ar: "القطار أسرع من الحافلة." },
      { de: "Das Flugzeug ist am schnellsten.", ar: "الطائرة الأسرع." },
    ],
    eselsbruecke: "«+er مثل أفعل، am+sten مثل الأفعَل» — والشواذ الثلاثة.",
    mistakeLink: "grammar",
  },
  {
    id: "a2-esgibt", level: "A2", category: "sentences",
    titleAr: "es gibt + Akkusativ (يوجد)", titleDe: "„Es gibt“ + Akkusativ",
    summary: "يوجد/هناك: es gibt + نصب. Es gibt einen Park. السؤال: Gibt es...? النفي: Es gibt keinen/keine...",
    why: "حرفياً «هو يعطي»: es يعطي الوجود للمفعول — فالنصب.",
    examples: [
      { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
      { de: "Gibt es hier einen Automaten?", ar: "هل يوجد صراف هنا؟" },
    ],
    eselsbruecke: "«es gibt = هو يعطي» → المفعول نصب: einen Park.",
    mistakeLink: "case",
  },
];
