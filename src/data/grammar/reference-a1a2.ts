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
    why: "في الجملة الألمانية الخبرية المكتملة يلزم فعل مصرف، بخلاف كثير من الجمل الاسمية العربية؛ لذلك نستخدم sein في «أنا من تونس»: Ich bin aus Tunesien.",
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
    summary: "يُستعمل للملكية ولتراكيب مثل الجوع والعطش: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.",
    why: "تختلف العبارة الاصطلاحية بين اللغتين: بالألمانية نقول Ich habe Hunger، وبالعربية غالباً «أنا جائع»؛ لا تُترجم البنية كلمةً بكلمة.",
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
    summary: "لكل اسم مفرد جنس نحوي: der (مذكر), die (مؤنث), das (محايد). التنكير في الرفع: ein (مذكر/محايد), eine (مؤنث). في جمع الرفع تكون الأداة die؛ وتتغير الأداة في الحالات الأخرى.",
    why: "الجنس يؤثر على كل شيء لاحقاً: الصفة، الضمير، الحالات.",
    examples: [
      { de: "der Apfel / ein Apfel", ar: "التفاحة / تفاحة" },
      { de: "die Banane / eine Banane", ar: "الموزة / موزة" },
    ],
    eselsbruecke: "ألوان: der=أزرق، die=أحمر، das=أخضر. احفظ الجنس مع الكلمة.",
    mistakeLink: "article",
  },
  {
    id: "a1-akkusativ", level: "A1", category: "cases",
    titleAr: "حالة النصب (Akkusativ)", titleDe: "Der Akkusativ",
    summary: "في المفعول به المباشر Akkusativ تتغير أداة التعريف للمذكر der→den وأداة التنكير ein→einen. في أدوات التعريف تبقى صيغ المؤنث die والمحايد das والجمع die كما هي في Nominativ؛ المقصود هنا تغيّر الأداة لا أن كل عناصر الجملة ثابتة.",
    why: "علامة إعراب تميز الفاعل من المفعول — المذكر وحده يغيّر قبعته.",
    examples: [
      { de: "Ich esse einen Apfel.", ar: "آكل تفاحة." },
      { de: "Ich trinke die Milch.", ar: "أشرب الحليب." },
    ],
    eselsbruecke: "في الأداة يتغير المذكر: der→den، ein→einen؛ تذكّر أن «مذكر» وصف نحوي لا يعني الذكور فقط.",
    mistakeLink: "case",
  },
  {
    id: "a1-dativ-ort", level: "A1", category: "prepositions",
    titleAr: "حروف الجر المتغيرة للمكان (wo? + Dativ)", titleDe: "Wechselpräpositionen: wo? + Dativ",
    summary: "للسؤال أين؟ (wo?): in/auf/an/unter + Dativ: der→dem, die→der, das→dem. الاختصارات: im (in+dem), am (an+dem).",
    why: "مع حروف الجر المتغيرة، سؤال wo? عن الموقع يقتضي Dativ؛ أمّا الجهة المقصودة بـ wohin? فتأخذ Akkusativ. الحركة داخل موقع لا تكفي وحدها لتغيير الحالة.",
    examples: [
      { de: "Das Buch ist auf dem Tisch.", ar: "الكتاب على الطاولة." },
      { de: "Die Lampe ist in der Küche.", ar: "المصباح في المطبخ." },
    ],
    eselsbruecke: "اسأل wo? للموقع: Dativ؛ واسأل wohin? للاتجاه: Akkusativ. احفظ كذلك im = in dem وam = an dem.",
    mistakeLink: "preposition",
  },
  {
    id: "a1-trennbare", level: "A1", category: "verbs",
    titleAr: "الأفعال المنفصلة", titleDe: "Trennbare Verben",
    summary: "فعل ببادئة (auf, an, ein, fern...) — في المضارع: الفعل يتصرف في المركز الثاني والبادئة تذهب للنهاية: Ich stehe um 7 auf.",
    why: "الجملة الألمانية «إطار»: الفعل يفتح والبادئة تغلق في النهاية.",
    examples: [
      { de: "Ich stehe um sieben auf.", ar: "أنهض في السابعة." },
      { de: "Wir sehen abends fern.", ar: "نشاهد التلفاز مساءً." },
    ],
    eselsbruecke: "«البادئة ذيل الكلب: يهز في النهاية» — ich stehe ... auf.",
    mistakeLink: "word-order",
  },
  {
    id: "a1-imperativ", level: "A1", category: "verbs",
    titleAr: "صيغة الأمر", titleDe: "Der Imperativ",
    summary: "ثلاث صيغ شائعة: du (غالباً الجذر: Komm!), ihr (صيغة ihr بلا الضمير: Kommt!), Sie (المصدر + Sie: Kommen Sie!). قد تظهر -e أو يتغير حرف العلة في بعض الأفعال: Arbeite! Lies! Nimm! ويُطلب الأمر من du/ihr بلا الضمير عادةً.",
    why: "تختلف الصيغة باختلاف المخاطَب: du وihr غير رسميتين، وSie للمخاطبة الرسمية. لا تُحذف Sie في الأمر الرسمي: Kommen Sie!",
    examples: [
      { de: "Komm bitte!", ar: "تعال من فضلك!" },
      { de: "Kommen Sie bitte herein!", ar: "تفضلوا بالدخول!" },
    ],
    eselsbruecke: "في أفعال كثيرة تُحذف نهاية du -st (du kommst → Komm!)، لكن راعِ -e وتغيّر الجذر والاستثناءات مثل Lies! وNimm!.",
    mistakeLink: "grammar",
  },
  {
    id: "a1-negation", level: "A1", category: "negation",
    titleAr: "النفي: nicht و kein", titleDe: "Negation: nicht/kein",
    summary: "تُنفي مكوّنات الجملة بـ nicht، وموقعها يتبع ما نريد نفيه؛ مثال: Ich arbeite heute nicht / Das ist nicht teuer. ويُنفي الاسم الذي لا تسبقه أداة تعريف بـ kein، ويتصرف كأداة ein: Ich habe keinen Bruder.",
    why: "kein يحلّ محل ein/أداة التنكير المنفية ويُصرّف مع الاسم؛ أمّا nicht فينفي الفعل أو صفةً أو جزءاً آخر، ويتحدد موضعه بحسب نطاق النفي.",
    examples: [
      { de: "Ich habe kein Geld.", ar: "ليس لدي مال." },
      { de: "Das ist nicht teuer.", ar: "هذا ليس غالياً." },
    ],
    eselsbruecke: "kein يرافق الاسم ويتصرف معه مثل ein؛ واستعمل nicht لنفي الفعل أو عنصر آخر، مع الانتباه إلى موضع النفي.",
    mistakeLink: "negation",
  },
  {
    id: "a1-wfragen", level: "A1", category: "sentences",
    titleAr: "أسئلة W + ترتيب V2", titleDe: "W-Fragen und V2",
    summary: "من كلمات السؤال: wer, was, wo, woher, wohin, wann, warum, wie. في السؤال الذي لا تكون فيه أداة السؤال هي الفاعل يأتي الفعل المصرف بعدها مباشرة وفق V2: Woher kommst du? أمّا إذا كانت wer هي الفاعل فنقول: Wer kommt?",
    why: "الفعل دائماً في المركز الثاني — حتى بعد كلمة السؤال.",
    examples: [
      { de: "Woher kommst du?", ar: "من أين أنت؟" },
      { de: "Wie heißt du?", ar: "ما اسمك؟" },
    ],
    eselsbruecke: "في معظم أسئلة W يأتي الفعل المصرف مباشرة بعد أداة السؤال؛ لكن عند سؤال الفاعل نفسه: Wer kommt?",
    mistakeLink: "word-order",
  },
  {
    id: "a1-plural", level: "A1", category: "nouns",
    titleAr: "جمع الأسماء", titleDe: "Der Plural",
    summary: "أنماط الجمع: -e (Tische), -en/-n (Bananen), -er (كثيراً مع Umlaut: Bücher، لكن Kinder بلا Umlaut), Umlaut فقط (Äpfel), بدون تغيير (Zimmer), -s (Autos). في Nominativ Plural تكون الأداة die؛ وتتبدل بحسب الحالة، مثل den في Dativ Plural، وغالباً تُضاف -n إلى الاسم إن لم ينتهِ بها أصلاً.",
    why: "أنماط تاريخية — تُحفظ مع الكلمة مثل العربية (تفاحات/كتب).",
    examples: [
      { de: "der Tisch → die Tische", ar: "الطاولة → الطاولات" },
      { de: "der Apfel → die Äpfel", ar: "التفاحة → التفاحات" },
    ],
    eselsbruecke: "أهم النهايات: -e، -en/-n، -er؛ احفظ صيغة الجمع مع كل اسم.",
    mistakeLink: "plural",
  },

  /* ═══════════ A2 ═══════════ */
  {
    id: "a2-perfekt", level: "A2", category: "tenses",
    titleAr: "الماضي التام (Perfekt)", titleDe: "Das Perfekt",
    summary: "يتكوّن Perfekt من haben أو sein في المضارع وPartizip II في آخر الجملة. يُستعمل sein غالباً مع أفعال الانتقال أو تغيّر الحالة (مثل gehen وeinschlafen)، وكذلك مع sein وbleiben وwerden؛ ويُستعمل haben مع معظم الأفعال الأخرى. المنتظم غالباً ge- + الجذر + -t، والقوي له صيغ محفوظة وكثيراً ما ينتهي بـ -en. لا تأخذ الأفعال المنتهية بـ -ieren ge-، ولا تأخذها البادئات غير المنفصلة؛ وتأتي بين البادئة والفعل في عدد من البادئات المنفصلة.",
    why: "الزمن الأول في المحادثة — الإطار: المساعد يفتح والتصريف يغلق.",
    examples: [
      { de: "Ich habe gegessen.", ar: "أكلت." },
      { de: "Ich bin nach Berlin geflogen.", ar: "طرت إلى برلين." },
    ],
    eselsbruecke: "احفظ الفعل مع مساعد Perfekt الخاص به؛ قاعدة sein مع الانتقال/تغيّر الحالة مفيدة لكنها لا تغني عن حفظ الاستعمالات.",
    mistakeLink: "conjugation",
  },
  {
    id: "a2-dativ", level: "A2", category: "cases",
    titleAr: "حالة الداتيف (Dativ) مع الأفعال", titleDe: "Der Dativ",
    summary: "أفعال شائعة تتطلب متمماً في Dativ: helfen, gefallen, gehören, danken, gratulieren, antworten. تتبدل أداة التعريف: der→dem, die→der, das→dem؛ وفي جمع Dativ نستخدم den، وتُضاف غالباً -n إلى الاسم إن لم ينتهِ أصلاً بـ -n أو -s (den Kindern، den Autos).",
    why: "تظهر صيغة الداتيف كثيراً مع المتلقي أو الشخص المتأثر بالفعل؛ ويمكن السؤال عن هذا المتمّم بـ wem? مع حفظ الحالة التي يطلبها كل فعل.",
    examples: [
      { de: "Ich helfe dem Vater.", ar: "أساعد الأب." },
      { de: "Das gehört der Mutter.", ar: "هذا يخص الأم." },
      { de: "Der Film gefällt meiner Mutter.", ar: "الفيلم يعجب أمي." },
    ],
    eselsbruecke: "«Dativ = لمن؟ (wem؟)» — وعائلة الأفعال: helfen-gefallen-gehören-danken.",
    mistakeLink: "case",
  },
  {
    id: "a2-wechsel", level: "A2", category: "prepositions",
    titleAr: "حروف الجر المتغيرة (Wechselpräpositionen)", titleDe: "wo? Dativ / wohin? Akkusativ",
    summary: "تسعة حروف جر متغيرة: an, auf, hinter, in, neben, über, unter, vor, zwischen. عند تحديد موقع ثابت (wo?) نستخدم Dativ، وعند بيان جهة أو هدف (wohin?) نستخدم Akkusativ؛ ليست كل حركة داخل المكان دليلاً على Akkusativ.",
    why: "الحالة هنا مرتبطة ببنية المكان أو الاتجاه/الهدف مع حرف الجر؛ فالحركة داخل مكان ثابت لا تفرض Akkusativ وحدها.",
    examples: [
      { de: "Die Tasse steht auf dem Tisch.", ar: "الكوب واقف على الطاولة (سكون)." },
      { de: "Ich stelle die Tasse auf den Tisch.", ar: "أضع الكوب على الطاولة (حركة)." },
    ],
    eselsbruecke: "اسأل: wo? للموقع (Dativ)، أم wohin? للجهة/الهدف (Akkusativ)؛ لا تعتمد على وجود حركة جسدية وحده.",
    mistakeLink: "preposition",
  },
  {
    id: "a2-modal", level: "A2", category: "modal",
    titleAr: "أفعال الإمكان والوجوب الستة (Modalverben)", titleDe: "Die Modalverben",
    summary: "الأفعال الناقصة الستة: können (يستطيع)، müssen (يجب/لا بد)، wollen (يريد)، sollen (ينبغي/من المفترض)، dürfen (يُسمح له)، mögen (يحب/يعجبه). في كثير منها تتشابه صيغة ich وer/sie/es بلا نهاية شخصية، بينما تأخذ du غالباً -st: ich kann, du kannst, er kann. يأتي المصدر التابع في آخر الجملة. möchten صيغة مهذبة شائعة مشتقة من mögen، وليست مصدراً سابعاً.",
    why: "فعل الإمكان أو الوجوب يعدّل معنى الفعل الأساسي — والأساسي يذهب للنهاية.",
    examples: [
      { de: "Ich kann Deutsch sprechen.", ar: "أستطيع التحدث بالألمانية." },
      { de: "Du sollst viel trinken.", ar: "ينبغي أن تشرب كثيراً." },
    ],
    eselsbruecke: "«الستة: كان-موست-فول-سول-دورف-موك» — والمفرد بلا نهاية.",
    mistakeLink: "conjugation",
  },
  {
    id: "a2-nebensaetze", level: "A2", category: "sentences",
    titleAr: "الجمل الثانوية: weil, dass, wenn, ob", titleDe: "Nebensätze",
    summary: "هذه أدوات ربط تابعة (Subjunktionen)، وبعدها يأتي الفعل المصرف في نهاية الجملة التابعة: weil (لأنّ)، dass (أنّ)، wenn (إذا/عندما)، ob (في السؤال غير المباشر: هل/ما إذا).",
    why: "الجملة الثانوية «قوس» يفتحه الرابط ويغلقه الفعل.",
    examples: [
      { de: "Ich lerne Deutsch, weil ich in Deutschland studieren möchte.", ar: "أتعلم الألمانية لأنني أريد الدراسة في ألمانيا." },
      { de: "Ich glaube, dass er kommt.", ar: "أعتقد أنه سيأتي." },
      { de: "Ich weiß nicht, ob der Bus heute kommt.", ar: "لا أعرف ما إذا كانت الحافلة ستأتي اليوم." },
    ],
    eselsbruecke: "روابط الجملة الثانوية المذكورة ترسل الفعل المصرف إلى النهاية: weil ich in Deutschland studieren möchte.",
    mistakeLink: "word-order",
  },
  {
    id: "a2-possessiv", level: "A2", category: "pronouns",
    titleAr: "أدوات الملكية قبل الاسم", titleDe: "Possessivartikel (Possessivbegleiter)",
    summary: "قبل الاسم تعمل mein/dein/sein/ihr عمل أداة ملكية، وتأخذ نهايات مثل ein: mein Vater, meinen Vater (Akkusativ), meinem Vater (Dativ), meine Mutter, meiner Mutter (Dativ). أمّا Possessivpronomen فيحلّ محل الاسم، مثل Das ist meiner.",
    why: "أداة الملكية تسبق الاسم وتتصرف نهايتها بحسب جنس الاسم وعدده وحالته؛ أمّا الضمير الملكي المستقل فيحل محل الاسم.",
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
    summary: "أمثلة: sich freuen, sich ärgern, sich anmelden, sich beeilen. في Akkusativ: mich, dich, sich, uns, euch, sich؛ وفي Dativ: mir, dir, sich, uns, euch, sich، عندما يوجد مفعول Akkusativ آخر (Ich wasche mir die Hände). تُحفظ الأفعال مع ضميرها وحرف جرها إن وجد.",
    why: "بعض الأفعال انعكاسية المعنى، لكن أفعالاً كثيرة تُحفظ مع sich ولا تُترجم حرفياً بمعنى «يفعل الشيء لنفسه»؛ لذلك نحفظ الفعل وسياقه: sich freuen auf + Akkusativ.",
    examples: [
      { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع للعطلة." },
      { de: "Beeil dich bitte!", ar: "استعجل من فضلك!" },
    ],
    eselsbruecke: "«sich = نفس» — والغائب دائماً sich.",
    mistakeLink: "pronoun",
  },
  {
    id: "a2-konnektoren", level: "A2", category: "connectives",
    titleAr: "حروف العطف وظروف الربط", titleDe: "Konjunktionen und Konjunktionaladverbien",
    summary: "حروف العطف und, aber, oder, denn تصل جملتين رئيسيتين ويبقى ترتيب كل جملة كما هو. أمّا deshalb, trotzdem, dann, außerdem, sonst فهي ظروف ربط؛ وإذا بدأت بها الجملة يأتي الفعل المصرف بعدها مباشرة وفق قاعدة V2: Es regnet, deshalb bleibe ich zu Hause.",
    why: "حروف العطف تربط الجمل دون أن تشغل موضعاً داخل ترتيب الجملة التي تليها؛ أمّا ظرف الربط إذا تقدّم فيشغل الموضع الأول، ولذلك يأتي الفعل المصرف بعده في الموضع الثاني.",
    examples: [
      { de: "Ich bin müde, aber glücklich.", ar: "أنا متعب لكن سعيد." },
      { de: "Es regnet, deshalb bleibe ich.", ar: "تمطر لذلك أبقى." },
    ],
    eselsbruecke: "حروف العطف لا تغيّر ترتيب الجملة التالية؛ ظرف الربط في أول الجملة يشغل الموضع الأول، فيأتي الفعل المصرف بعده مباشرة (V2).",
    mistakeLink: "word-order",
  },
  {
    id: "a2-komparativ", level: "A2", category: "adjectives",
    titleAr: "المقارنة والتفضيل", titleDe: "Komparativ und Superlativ",
    summary: "المقارنة: غالباً الصفة + -er مع als (schneller als). التفضيل الخبري/الظرفي: am + الصفة + -(e)sten (am schnellsten)؛ وقبل الاسم تُصرّف الصفة مع أداة التعريف (der schnellste Zug). من الشواذ: gut–besser–am besten، viel–mehr–am meisten، gern–lieber–am liebsten.",
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
    why: "احفظ البناء الثابت es gibt + Akkusativ: الاسم الذي يأتي بعده في Akkusativ؛ لا تستنتج حالته من ترجمة الفعل العربية «يوجد».",
    examples: [
      { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
      { de: "Gibt es hier einen Automaten?", ar: "هل يوجد صراف هنا؟" },
    ],
    eselsbruecke: "احفظ القالب مع الأداة المناسبة: Es gibt einen Park / eine Bank / ein Kino.",
    mistakeLink: "case",
  },
];
