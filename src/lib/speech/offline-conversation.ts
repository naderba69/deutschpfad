/**
 * محرك المحادثة الحرة المحلي (بدون مفاتيح LLM)
 * — شريك محادثة ألماني يعمل 100% في المتصفح —
 *
 * يفهم نيات بسيطة من كلام المتعلم (تحية، تعريف، عمل، هوايات…) ويرد
 * بجمل ألمانية مناسبة لمستواه (A1→B2) مع سؤال متابعة لإبقاء الحوار حياً،
 * وتصحيح لطيف للأخطاء الشائعة عند المتعلم العربي.
 *
 * لا يحتاج إنترنت ولا مفاتيح: التعرف على الكلام والنطق عبر Web Speech API.
 */

export type ConversationLevel = "A1" | "A2" | "B1" | "B2";

export interface ConversationState {
  level: ConversationLevel;
  topicId: string;
  userName: string | null;
  turnCount: number;
  lastIntent: string | null;
  /** عدد الردود المستخدمة لكل نية — لتدوير الردود وتجنب التكرار */
  usedReplies: Record<string, number>;
}

export interface ConversationReply {
  /** الرد بالألمانية (يُنطق ويُعرض) */
  reply: string;
  /** ترجمة الرد بالعربية (تُعرض) */
  replyAr: string;
  /** تصحيح لطيف بالعربية عند رصد خطأ شائع */
  correction?: string;
  /** النية المكتشفة (للاختبارات والتشخيص) */
  intent: string;
}

export function createConversationState(level: ConversationLevel, topicId: string): ConversationState {
  return { level, topicId, userName: null, turnCount: 0, lastIntent: null, usedReplies: {} };
}

/* ── أدوات ── */

function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[.!?,;:"«»„“”]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function capitalize(s: string): string {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}

/** استخراج اسم من «ich heiße X» / «mein name ist X» / «ich bin X» */
function extractName(n: string): string | null {
  const m =
    n.match(/ich heiße ([a-zäöüß]+)/) ??
    n.match(/mein name ist ([a-zäöüß]+)/) ??
    n.match(/ich bin ([a-zäöüß]+)(?: und|$)/);
  if (!m) return null;
  const name = capitalize(m[1]);
  // تجنب التقاط كلمات وظيفية
  if (["aus", "in", "und", "ein", "eine", "lehrer", "ingenieur", "arzt", "student"].includes(m[1])) return null;
  return name;
}

/** استخراج البلد من «ich komme aus X» */
function extractOrigin(n: string): string | null {
  const m = n.match(/ich komme aus ([a-zäöüß ]+?)(?: und|$)/) ?? n.match(/ich bin aus ([a-zäöüß ]+?)(?: und|$)/);
  return m ? capitalize(m[1].trim()) : null;
}

/** استخراج العمر من «ich bin 25 jahre alt» */
function extractAge(n: string): number | null {
  const m = n.match(/ich bin (\d{1,3}) jahre/);
  return m ? Number(m[1]) : null;
}

/* ── رصد الأخطاء الشائعة (تصحيح لطيف) ── */

function detectCorrection(n: string): string | undefined {
  // نسيان «alt» بعد العمر
  if (/ich bin \d{1,3} jahre$/.test(n)) {
    return "لا تنسَ كلمة «alt» في النهاية: Ich bin 25 Jahre alt (عمري 25 سنة).";
  }
  // إملاء Brüder
  if (/ich habe \d+ bruder(?!n)/.test(n)) {
    return "انتبه للإملاء: Brüder (بـ ü) — ich habe zwei Brüder.";
  }
  // ترتيب الكلمات: الفعل يجب أن يكون ثانياً
  if (/^ich (morgen|heute|gestern|jetzt) [a-zäöüß]+/.test(n)) {
    return "في الألمانية الفعل في المرتبة الثانية: Ich gehe morgen (أذهب غداً).";
  }
  // «ich komme aus» صحيحة — لا تصحيح
  return undefined;
}

/* ── بنوك الردود (متدرجة حسب المستوى) ── */

interface Variant {
  de: string;
  ar: string;
}
type Pool = Partial<Record<ConversationLevel, Variant[]>>;

const GREETINGS: Pool = {
  A1: [
    { de: "Hallo! Schön, dass du da bist. Wie geht es dir?", ar: "مرحباً! سعيد بوجودك. كيف حالك؟" },
    { de: "Hallo! Freut mich, dich zu sehen. Wie geht es dir?", ar: "مرحباً! سعيد برؤيتك. كيف حالك؟" },
  ],
  A2: [
    { de: "Hallo! Schön, dass du da bist. Wie war dein Tag bisher?", ar: "مرحباً! سعيد بوجودك. كيف كان يومك حتى الآن؟" },
    { de: "Hallo! Freut mich, dich zu sehen. Was hast du heute schon gemacht?", ar: "مرحباً! سعيد برؤيتك. ماذا فعلت اليوم حتى الآن؟" },
  ],
  B1: [
    { de: "Hallo! Schön, dass du da bist. Wie war dein Tag bisher? Hast du heute schon etwas Schönes erlebt?", ar: "مرحباً! سعيد بوجودك. كيف كان يومك؟ هل حدث شيء جميل اليوم؟" },
    { de: "Hallo! Freut mich, dich zu sehen. Was hast du heute schon gemacht? War es ein ruhiger oder ein stressiger Tag?", ar: "مرحباً! سعيد برؤيتك. ماذا فعلت اليوم؟ هل كان يوماً هادئاً أم مليئاً بالضغط؟" },
  ],
  B2: [
    { de: "Hallo! Schön, dass du da bist. Wie war dein Tag bisher? Hast du heute schon etwas erlebt, das dich zum Nachdenken gebracht hat?", ar: "مرحباً! سعيد بوجودك. كيف كان يومك؟ هل حدث شيء اليوم جعلك تفكر؟" },
    { de: "Hallo! Freut mich, dich zu sehen. Was hast du heute schon gemacht? Gab es einen Moment, der dich besonders beschäftigt hat?", ar: "مرحباً! سعيد برؤيتك. ماذا فعلت اليوم؟ هل كانت هناك لحظة شغلتك كثيراً؟" },
  ],
};

const NAME_REPLIES: Pool = {
  A1: [
    { de: "Freut mich, {name}! Woher kommst du?", ar: "سعيد بمعرفتك يا {name}! من أين أنت؟" },
    { de: "Hallo {name}! Freut mich! Wo wohnst du?", ar: "مرحباً {name}! سعيد بمعرفتك! أين تسكن؟" },
  ],
  A2: [
    { de: "Freut mich sehr, {name}! Ich komme aus Berlin. Woher kommst du?", ar: "سعيد جداً بمعرفتك يا {name}! أنا من برلين. من أين أنت؟" },
    { de: "Hallo {name}! Freut mich! Wie alt bist du?", ar: "مرحباً {name}! سعيد بمعرفتك! كم عمرك؟" },
  ],
  B1: [
    { de: "Freut mich sehr, {name}! Ich lebe in Berlin und arbeite als Deutschlehrer. Woher kommst du ursprünglich?", ar: "سعيد جداً بمعرفتك يا {name}! أعيش في برلين وأعمل مدرس ألمانية. من أين أنت أصلاً؟" },
    { de: "Hallo {name}! Freut mich! Was machst du beruflich?", ar: "مرحباً {name}! سعيد بمعرفتك! ماذا تعمل مهنياً؟" },
  ],
  B2: [
    { de: "Freut mich sehr, {name}! Ich lebe in Berlin und arbeite als Deutschlehrer. Woher kommst du ursprünglich, und was führt dich hierher?", ar: "سعيد جداً بمعرفتك يا {name}! أعيش في برلين وأعمل مدرس ألمانية. من أين أنت أصلاً، وما الذي جاء بك إلى هنا؟" },
    { de: "Hallo {name}! Freut mich! Womit beschäftigst du dich beruflich?", ar: "مرحباً {name}! سعيد بمعرفتك! بماذا تشتغل مهنياً؟" },
  ],
};

const ORIGIN_REPLIES: Pool = {
  A1: [
    { de: "{origin}! Sehr schön. Sprichst du Deutsch?", ar: "{origin}! جميل جداً. هل تتحدث الألمانية؟" },
    { de: "{origin}! Ich kenne Tunesien. Wie ist es dort?", ar: "{origin}! أعرف تونس. كيف هي هناك؟" },
  ],
  A2: [
    { de: "{origin}! Sehr schön. Wie lange lernst du schon Deutsch?", ar: "{origin}! جميل جداً. منذ متى تتعلم الألمانية؟" },
    { de: "{origin}! Das ist interessant. Was vermisst du von zu Hause?", ar: "{origin}! هذا مثير للاهتمام. ما الذي تفتقده من بيتك؟" },
  ],
  B1: [
    { de: "{origin}! Sehr schön. Was hat dich nach Deutschland gebracht — das Studium oder die Arbeit?", ar: "{origin}! جميل جداً. ما الذي جاء بك إلى ألمانيا — الدراسة أم العمل؟" },
    { de: "{origin}! Das ist interessant. Wie war die Ankunft für dich?", ar: "{origin}! هذا مثير للاهتمام. كيف كانت وصولك؟" },
  ],
  B2: [
    { de: "{origin}! Sehr schön. Was hat dich nach Deutschland gebracht — das Studium, die Arbeit oder etwas anderes?", ar: "{origin}! جميل جداً. ما الذي جاء بك إلى ألمانيا — الدراسة، العمل، أم شيء آخر؟" },
    { de: "{origin}! Das ist interessant. Wie hast du dich hier eingelebt?", ar: "{origin}! هذا مثير للاهتمام. كيف تأقلمت هنا؟" },
  ],
};

const AGE_REPLIES: Pool = {
  A1: [
    { de: "{age} Jahre alt! Bist du Student?", ar: "{age} سنة! هل أنت طالب؟" },
    { de: "{age} Jahre! Was machst du gern?", ar: "{age} سنة! ماذا تحب أن تفعل؟" },
  ],
  A2: [
    { de: "{age} Jahre alt! Was machst du beruflich?", ar: "{age} سنة! ماذا تعمل مهنياً؟" },
    { de: "{age} Jahre! Hast du Geschwister?", ar: "{age} سنة! هل عندك إخوة؟" },
  ],
  B1: [
    { de: "{age} Jahre alt! Was machst du beruflich, und macht es dir Spaß?", ar: "{age} سنة! ماذا تعمل مهنياً، وهل يعجبك عملك؟" },
    { de: "{age} Jahre! Wie findest du dein Alter — eher jung oder eher erfahren?", ar: "{age} سنة! كيف تجد عمرك — شاباً أم خبيراً؟" },
  ],
  B2: [
    { de: "{age} Jahre alt! In diesem Alter hat man oft schon klare Vorstellungen vom Leben. Wie siehst du deine Zukunft?", ar: "{age} سنة! في هذا العمر غالباً ما تكون لديك تصورات واضحة عن الحياة. كيف ترى مستقبلك؟" },
    { de: "{age} Jahre! Was hat dich bisher am meisten geprägt?", ar: "{age} سنة! ما الذي أثّر فيك أكثر حتى الآن؟" },
  ],
};

const FAMILY_REPLIES: Pool = {
  A1: [
    { de: "Das ist schön! Hast du auch Kinder?", ar: "هذا جميل! هل عندك أطفال أيضاً؟" },
    { de: "Sehr gut! Wie viele Geschwister hast du?", ar: "جيد جداً! كم عدد إخوتك؟" },
  ],
  A2: [
    { de: "Das ist schön! Wie ist deine Familie?", ar: "هذا جميل! كيف عائلتك؟" },
    { de: "Sehr gut! Siehst du deine Familie oft?", ar: "جيد جداً! هل ترى عائلتك كثيراً؟" },
  ],
  B1: [
    { de: "Das ist schön! Wie ist das Verhältnis zu deinen Geschwistern?", ar: "هذا جميل! كيف علاقتك بإخوتك؟" },
    { de: "Sehr gut! Lebt deine Familie auch in Deutschland?", ar: "جيد جداً! هل تعيش عائلتك أيضاً في ألمانيا؟" },
  ],
  B2: [
    { de: "Das ist schön! Wie hat deine Familie deine Entscheidungen beeinflusst?", ar: "هذا جميل! كيف أثّرت عائلتك على قراراتك؟" },
    { de: "Sehr gut! Was bedeutet Familie für dich persönlich?", ar: "جيد جداً! ماذا تعني العائلة بالنسبة لك شخصياً؟" },
  ],
};

const WORK_REPLIES: Pool = {
  A1: [
    { de: "Das ist interessant! Wo arbeitest du?", ar: "هذا مثير للاهتمام! أين تعمل؟" },
    { de: "Sehr gut! Was machst du in deiner Freizeit?", ar: "جيد جداً! ماذا تفعل في فراغك؟" },
  ],
  A2: [
    { de: "Das ist interessant! Wie ist deine Arbeit — anstrengend oder entspannt?", ar: "هذا مثير للاهتمام! كيف عملك — مرهق أم مريح؟" },
    { de: "Sehr gut! Was machst du am liebsten in deiner Freizeit?", ar: "جيد جداً! ما الذي تحب فعله أكثر في فراغك؟" },
  ],
  B1: [
    { de: "Das ist interessant! Was gefällt dir an deiner Arbeit am meisten?", ar: "هذا مثير للاهتمام! ما الذي يعجبك أكثر في عملك؟" },
    { de: "Sehr gut! Würdest du gern etwas an deiner Arbeit ändern?", ar: "جيد جداً! هل تود تغيير شيء في عملك؟" },
  ],
  B2: [
    { de: "Das ist interessant! Wie hat sich deine Arbeit in den letzten Jahren verändert?", ar: "هذا مثير للاهتمام! كيف تغيّر عملك في السنوات الأخيرة؟" },
    { de: "Sehr gut! Was würdest du in deinem Beruf gern anders machen?", ar: "جيد جداً! ما الذي تود تغييره في مهنتك؟" },
  ],
};

const HOBBY_REPLIES: Pool = {
  A1: [
    { de: "Das ist toll! Spielst du oft?", ar: "هذا رائع! هل تلعب كثيراً؟" },
    { de: "Sehr gut! Was isst du gern?", ar: "جيد جداً! ماذا تحب أن تأكل؟" },
  ],
  A2: [
    { de: "Das ist toll! Wie oft machst du das in der Woche?", ar: "هذا رائع! كم مرة تفعل ذلك في الأسبوع؟" },
    { de: "Sehr gut! Was hast du am Wochenende gemacht?", ar: "جيد جداً! ماذا فعلت في نهاية الأسبوع؟" },
  ],
  B1: [
    { de: "Das ist toll! Was bedeutet dir dieses Hobby?", ar: "هذا رائع! ماذا يعني لك هذا الهواية؟" },
    { de: "Sehr gut! Hast du schon einmal an einem Wettkampf teilgenommen?", ar: "جيد جداً! هل شاركت يوماً في مسابقة؟" },
  ],
  B2: [
    { de: "Das ist toll! Wie hat dieses Hobby dein Leben verändert?", ar: "هذا رائع! كيف غيّرت هذه الهواية حياتك؟" },
    { de: "Sehr gut! Was würdest du anderen über dieses Hobby sagen?", ar: "جيد جداً! ماذا ستقول للآخرين عن هذه الهواية؟" },
  ],
};

const FOOD_REPLIES: Pool = {
  A1: [
    { de: "Lecker! Was trinkst du gern?", ar: "لذيذ! ماذا تحب أن تشرب؟" },
    { de: "Sehr gut! Isst du gern Couscous?", ar: "جيد جداً! هل تحب الكسكس؟" },
  ],
  A2: [
    { de: "Lecker! Was isst du zum Frühstück?", ar: "لذيذ! ماذا تأكل على الفطور؟" },
    { de: "Sehr gut! Kannst du selbst kochen?", ar: "جيد جداً! هل تستطيع الطبخ بنفسك؟" },
  ],
  B1: [
    { de: "Lecker! Was ist der Unterschied zwischen deutschem und arabischem Essen?", ar: "لذيذ! ما الفرق بين الطعام الألماني والعربي؟" },
    { de: "Sehr gut! Isst du lieber zu Hause oder im Restaurant?", ar: "جيد جداً! هل تأكل في البيت أم في المطعم؟" },
  ],
  B2: [
    { de: "Lecker! Wie hat sich dein Geschmack durch das Leben in Deutschland verändert?", ar: "لذيذ! كيف تغيّر ذوقك بعد العيش في ألمانيا؟" },
    { de: "Sehr gut! Was bedeutet Essen für dich kulturell?", ar: "جيد جداً! ماذا يعني الطعام بالنسبة لك ثقافياً؟" },
  ],
};

const TRAVEL_REPLIES: Pool = {
  A1: [
    { de: "Das ist schön! Wann fährst du?", ar: "هذا جميل! متى ستذهب؟" },
    { de: "Sehr gut! Fährst du mit dem Zug oder mit dem Auto?", ar: "جيد جداً! هل ستذهب بالقطار أم بالسيارة؟" },
  ],
  A2: [
    { de: "Das ist schön! Was möchtest du dort sehen?", ar: "هذا جميل! ماذا تريد أن ترى هناك؟" },
    { de: "Sehr gut! Wie lange bleibst du dort?", ar: "جيد جداً! كم ستبقى هناك؟" },
  ],
  B1: [
    { de: "Das ist schön! Was ist dein schönstes Reiseerlebnis bisher?", ar: "هذا جميل! ما أجمل تجربة سفر حتى الآن؟" },
    { de: "Sehr gut! Reist du lieber allein oder mit Freunden?", ar: "جيد جداً! هل تسافر وحدك أم مع أصدقاء؟" },
  ],
  B2: [
    { de: "Das ist schön! Wie hat das Reisen deine Sicht auf die Welt verändert?", ar: "هذا جميل! كيف غيّر السفر نظرتك إلى العالم؟" },
    { de: "Sehr gut! Welches Land würdest du gern bereisen, und warum?", ar: "جيد جداً! أي بلد تود زيارته، ولماذا؟" },
  ],
};

const FEELING_REPLIES: Pool = {
  A1: [
    { de: "Das freut mich! Was machst du heute?", ar: "هذا يسعدني! ماذا ستفعل اليوم؟" },
    { de: "Sehr gut! Hast du heute schon gegessen?", ar: "جيد جداً! هل أكلت اليوم؟" },
  ],
  A2: [
    { de: "Das freut mich! Was hast du heute schon gemacht?", ar: "هذا يسعدني! ماذا فعلت اليوم حتى الآن؟" },
    { de: "Sehr gut! Was machst du am Wochenende?", ar: "جيد جداً! ماذا ستفعل في نهاية الأسبوع؟" },
  ],
  B1: [
    { de: "Das freut mich! Was hat dich heute am meisten gefreut?", ar: "هذا يسعدني! ما الذي أسعدك أكثر اليوم؟" },
    { de: "Sehr gut! Hast du heute schon etwas Neues gelernt?", ar: "جيد جداً! هل تعلمت شيئاً جديداً اليوم؟" },
  ],
  B2: [
    { de: "Das freut mich! Was hat dich heute am meisten beschäftigt?", ar: "هذا يسعدني! ما الذي شغلك أكثر اليوم؟" },
    { de: "Sehr gut! Wie würdest du deinen Tag in einem Satz zusammenfassen?", ar: "جيد جداً! كيف تلخص يومك في جملة واحدة؟" },
  ],
};

const FEELING_BAD_REPLIES: Pool = {
  A1: [
    { de: "Oh, das tut mir leid. Was ist los?", ar: "أوه، آسف لسماع ذلك. ما المشكلة؟" },
    { de: "Das ist schade. Möchtest du etwas trinken?", ar: "هذا مؤسف. هل تريد أن تشرب شيئاً؟" },
  ],
  A2: [
    { de: "Oh, das tut mir leid. Was ist passiert?", ar: "أوه، آسف لسماع ذلك. ماذا حدث؟" },
    { de: "Das ist schade. Was brauchst du?", ar: "هذا مؤسف. ماذا تحتاج؟" },
  ],
  B1: [
    { de: "Oh, das tut mir leid. Möchtest du darüber sprechen?", ar: "أوه، آسف لسماع ذلك. هل تريد التحدث عن ذلك؟" },
    { de: "Das ist schade. Was würde dir helfen?", ar: "هذا مؤسف. ما الذي سيساعدك؟" },
  ],
  B2: [
    { de: "Oh, das tut mir leid. Manchmal hilft es, darüber zu sprechen. Was beschäftigt dich?", ar: "أوه، آسف لسماع ذلك. أحياناً يساعد التحدث عن ذلك. ما الذي يشغلك؟" },
    { de: "Das ist schade. Was würdest du in dieser Situation gern ändern?", ar: "هذا مؤسف. ما الذي تود تغييره في هذا الموقف؟" },
  ],
};

const PARTNER_QUESTION_REPLIES: Pool = {
  A1: [
    { de: "Ich heiße Anna. Und du? Wie heißt du?", ar: "اسمي آنا. وأنت؟ ما اسمك؟" },
    { de: "Ich wohne in Berlin. Wo wohnst du?", ar: "أسكن في برلين. أين تسكن أنت؟" },
  ],
  A2: [
    { de: "Ich arbeite als Lehrerin. Was machst du beruflich?", ar: "أعمل مدرسة. ماذا تعمل مهنياً؟" },
    { de: "Ich lerne gern Deutsch. Was lernst du gern?", ar: "أحب تعلم الألمانية. ماذا تحب أن تتعلم؟" },
  ],
  B1: [
    { de: "Meiner Meinung nach ist es wichtig, jeden Tag etwas Neues zu lernen. Was findest du?", ar: "في رأيي من المهم تعلم شيء جديد كل يوم. ماذا تظن أنت؟" },
    { de: "Ich finde das Leben in der Stadt spannend, weil es viele Möglichkeiten gibt. Wie findest du es?", ar: "أجد الحياة في المدينة مثيرة لأن فيها فرصاً كثيرة. كيف تجدها أنت؟" },
  ],
  B2: [
    { de: "Meiner Ansicht nach verändert die Digitalisierung unsere Arbeitswelt grundlegend. Wie siehst du das?", ar: "في رأيي، الرقمنة تغيّر عالم العمل جذرياً. كيف ترى ذلك؟" },
    { de: "Ich denke, dass man im Leben ständig Kompromisse machen muss. Was meinst du dazu?", ar: "أظن أن المرء يجب أن يقدم تنازلات باستمرار في الحياة. ماذا تظن؟" },
  ],
};

const YES_REPLIES: Pool = {
  A1: [
    { de: "Gut! Und was machst du gern?", ar: "جيد! وماذا تحب أن تفعل؟" },
    { de: "Sehr gut! Wo wohnst du?", ar: "جيد جداً! أين تسكن؟" },
  ],
  A2: [
    { de: "Gut! Was hast du am Wochenende gemacht?", ar: "جيد! ماذا فعلت في نهاية الأسبوع؟" },
    { de: "Sehr gut! Was isst du gern?", ar: "جيد جداً! ماذا تحب أن تأكل؟" },
  ],
  B1: [
    { de: "Gut! Was findest du daran interessant?", ar: "جيد! ما الذي تجده مثيراً للاهتمام في ذلك؟" },
    { de: "Sehr gut! Was würdest du gern ändern?", ar: "جيد جداً! ما الذي تود تغييره؟" },
  ],
  B2: [
    { de: "Gut! Wie hat das deine Sicht verändert?", ar: "جيد! كيف غيّر ذلك نظرتك؟" },
    { de: "Sehr gut! Was bedeutet das für dich persönlich?", ar: "جيد جداً! ماذا يعني ذلك بالنسبة لك شخصياً؟" },
  ],
};

const NO_REPLIES: Pool = {
  A1: [
    { de: "Kein Problem! Was machst du gern?", ar: "لا مشكلة! ماذا تحب أن تفعل؟" },
    { de: "Verstehe. Was isst du gern?", ar: "أفهم. ماذا تحب أن تأكل؟" },
  ],
  A2: [
    { de: "Kein Problem! Was hast du heute schon gemacht?", ar: "لا مشكلة! ماذا فعلت اليوم حتى الآن؟" },
    { de: "Verstehe. Was machst du am Wochenende?", ar: "أفهم. ماذا ستفعل في نهاية الأسبوع؟" },
  ],
  B1: [
    { de: "Kein Problem! Was würdest du stattdessen gern machen?", ar: "لا مشكلة! ماذا تود أن تفعل بدلاً من ذلك؟" },
    { de: "Verstehe. Was ist dir wichtiger?", ar: "أفهم. ما الأهم بالنسبة لك؟" },
  ],
  B2: [
    { de: "Kein Problem! Was bedeutet das für deine Pläne?", ar: "لا مشكلة! ماذا يعني ذلك لخططك؟" },
    { de: "Verstehe. Wie siehst du die Situation?", ar: "أفهم. كيف ترى الموقف؟" },
  ],
};

const QUESTION_REPLIES: Pool = {
  A1: [
    { de: "Gute Frage! Was meinst du?", ar: "سؤال جيد! ماذا تظن أنت؟" },
    { de: "Hmm, ich denke schon. Und du?", ar: "همم، أظن نعم. وأنت؟" },
  ],
  A2: [
    { de: "Gute Frage! Ich denke, ja. Was meinst du?", ar: "سؤال جيد! أظن نعم. ماذا تظن أنت؟" },
    { de: "Hmm, das ist schwierig. Was findest du?", ar: "همم، هذا صعب. ماذا تظن أنت؟" },
  ],
  B1: [
    { de: "Gute Frage! Meiner Meinung nach kommt es darauf an. Was meinst du?", ar: "سؤال جيد! في رأيي يعتمد على الظروف. ماذا تظن أنت؟" },
    { de: "Hmm, das ist interessant. Ich denke, es gibt beide Seiten. Wie siehst du es?", ar: "همم، هذا مثير للاهتمام. أظن أن هناك وجهين. كيف تراه أنت؟" },
  ],
  B2: [
    { de: "Gute Frage! Meiner Ansicht nach ist das komplexer, als es scheint. Was ist deine Sicht darauf?", ar: "سؤال جيد! في رأيي الأمر أكثر تعقيداً مما يبدو. ما وجهة نظرك؟" },
    { de: "Hmm, das ist eine interessante Frage. Ich würde sagen, es hängt von vielen Faktoren ab. Wie siehst du das?", ar: "همم، سؤال مثير للاهتمام. أقول إن الأمر يعتمد على عوامل كثيرة. كيف تراه أنت؟" },
  ],
};

const STATEMENT_REPLIES: Pool = {
  A1: [
    { de: "Interessant! Erzähl mir mehr.", ar: "مثير للاهتمام! حدثني أكثر." },
    { de: "Verstehe. Was machst du gern?", ar: "أفهم. ماذا تحب أن تفعل؟" },
  ],
  A2: [
    { de: "Interessant! Was hast du gestern gemacht?", ar: "مثير للاهتمام! ماذا فعلت أمس؟" },
    { de: "Verstehe. Was machst du am Wochenende?", ar: "أفهم. ماذا ستفعل في نهاية الأسبوع؟" },
  ],
  B1: [
    { de: "Interessant! Was findest du daran am wichtigsten?", ar: "مثير للاهتمام! ما الذي تجده الأهم في ذلك؟" },
    { de: "Verstehe. Was würdest du gern anders machen?", ar: "أفهم. ما الذي تود فعله بشكل مختلف؟" },
  ],
  B2: [
    { de: "Interessant! Wie hat das deine Sicht auf die Dinge verändert?", ar: "مثير للاهتمام! كيف غيّر ذلك نظرتك إلى الأمور؟" },
    { de: "Verstehe. Was bedeutet das für dich persönlich?", ar: "أفهم. ماذا يعني ذلك بالنسبة لك شخصياً؟" },
  ],
};

const FALLBACK_REPLIES: Pool = {
  A1: [
    { de: "Entschuldigung, ich habe das nicht verstanden. Kannst du es wiederholen?", ar: "عذراً، لم أفهم ذلك. هل يمكنك تكراره؟" },
    { de: "Hmm. Was meinst du genau?", ar: "همم. ماذا تقصد بالضبط؟" },
  ],
  A2: [
    { de: "Entschuldigung, ich habe das nicht ganz verstanden. Kannst du es anders sagen?", ar: "عذراً، لم أفهم ذلك تماماً. هل يمكنك قوله بطريقة أخرى؟" },
    { de: "Hmm. Was meinst du genau?", ar: "همم. ماذا تقصد بالضبط؟" },
  ],
  B1: [
    { de: "Entschuldigung, ich habe das nicht ganz verstanden. Kannst du das bitte genauer erklären?", ar: "عذراً، لم أفهم ذلك تماماً. هل يمكنك شرح ذلك بدقة أكثر؟" },
    { de: "Hmm. Was meinst du genau damit?", ar: "همم. ماذا تقصد بذلك بالضبط؟" },
  ],
  B2: [
    { de: "Entschuldigung, ich habe das nicht ganz verstanden. Könntest du das bitte genauer erläutern?", ar: "عذراً، لم أفهم ذلك تماماً. هل يمكنك توضيح ذلك بدقة أكثر؟" },
    { de: "Hmm. Was genau meinst du damit?", ar: "همم. ماذا تقصد بذلك بالضبط؟" },
  ],
};

const GOODBYE_REPLIES: Pool = {
  A1: [
    { de: "Tschüss! Bis bald!", ar: "إلى اللقاء! أراك قريباً!" },
    { de: "Auf Wiedersehen! Schönen Tag noch!", ar: "إلى اللقاء! طاب يومك!" },
  ],
  A2: [
    { de: "Tschüss! Das war schön. Bis bald!", ar: "إلى اللقاء! كان جميلاً. أراك قريباً!" },
    { de: "Auf Wiedersehen! Viel Erfolg beim Lernen!", ar: "إلى اللقاء! بالتوفيق في التعلم!" },
  ],
  B1: [
    { de: "Tschüss! Das war ein schönes Gespräch. Bis bald!", ar: "إلى اللقاء! كانت محادثة جميلة. أراك قريباً!" },
    { de: "Auf Wiedersehen! Weiter so — du machst gute Fortschritte!", ar: "إلى اللقاء! واصل هكذا — أنت تتقدم جيداً!" },
  ],
  B2: [
    { de: "Tschüss! Das war ein schönes Gespräch. Ich wünsche dir weiterhin viel Erfolg!", ar: "إلى اللقاء! كانت محادثة جميلة. أتمنى لك مزيداً من النجاح!" },
    { de: "Auf Wiedersehen! Bleib neugierig und übe weiter!", ar: "إلى اللقاء! ابقَ فضولياً وواصل التدريب!" },
  ],
};

const THANKS_REPLIES: Pool = {
  A1: [
    { de: "Gern geschehen! Was machst du gern?", ar: "العفو! ماذا تحب أن تفعل؟" },
    { de: "Kein Problem! Wie geht es dir?", ar: "لا مشكلة! كيف حالك؟" },
  ],
  A2: [
    { de: "Gern geschehen! Was hast du heute schon gemacht?", ar: "العفو! ماذا فعلت اليوم حتى الآن؟" },
    { de: "Kein Problem! Was machst du am Wochenende?", ar: "لا مشكلة! ماذا ستفعل في نهاية الأسبوع؟" },
  ],
  B1: [
    { de: "Gern geschehen! Was hat dich heute am meisten gefreut?", ar: "العفو! ما الذي أسعدك أكثر اليوم؟" },
    { de: "Kein Problem! Hast du heute schon etwas Neues gelernt?", ar: "لا مشكلة! هل تعلمت شيئاً جديداً اليوم؟" },
  ],
  B2: [
    { de: "Gern geschehen! Was hat dich heute am meisten beschäftigt?", ar: "العفو! ما الذي شغلك أكثر اليوم؟" },
    { de: "Kein Problem! Wie würdest du deinen Tag zusammenfassen?", ar: "لا مشكلة! كيف تلخص يومك؟" },
  ],
};

/* ── كشف النية ── */

interface IntentRule {
  intent: string;
  test: (n: string) => boolean;
  pool: Pool;
  /** استخراج بيانات من المدخل (اسم/بلد/عمر) */
  extract?: (n: string) => Record<string, string | number> | null;
}

const RULES: IntentRule[] = [
  { intent: "goodbye", test: (n) => /\b(tschüss|auf wiedersehen|bis später|bis bald|ciao|bye|tschau)\b/.test(n), pool: GOODBYE_REPLIES },
  { intent: "thanks", test: (n) => /\b(danke|vielen dank|danke schön|merci)\b/.test(n), pool: THANKS_REPLIES },
  { intent: "greeting", test: (n) => /\b(hallo|hi|guten tag|guten morgen|guten abend|servus|moin|grüß dich|hey)\b/.test(n), pool: GREETINGS },
  { intent: "how-are-you", test: (n) => /wie geht es (dir|euch)|wie geht'?s/.test(n), pool: FEELING_REPLIES },
  { intent: "feeling-bad", test: (n) => /mir geht es (nicht gut|schlecht)|ich fühle mich (nicht gut|schlecht|traurig)|mir geht es nicht/.test(n), pool: FEELING_BAD_REPLIES },
  { intent: "feeling-good", test: (n) => /mir geht es (gut|sehr gut|prima|super)|ich fühle mich (gut|prima|super)/.test(n), pool: FEELING_REPLIES },
  {
    intent: "name",
    test: (n) => /ich heiße|mein name ist|ich bin [a-zäöüß]+$/.test(n) && extractName(n) !== null,
    pool: NAME_REPLIES,
    extract: (n) => {
      const name = extractName(n);
      return name ? { name } : null;
    },
  },
  {
    intent: "origin",
    test: (n) => /ich komme aus|ich bin aus/.test(n),
    pool: ORIGIN_REPLIES,
    extract: (n) => {
      const origin = extractOrigin(n);
      return origin ? { origin } : null;
    },
  },
  {
    intent: "age",
    test: (n) => /ich bin \d{1,3} jahre/.test(n),
    pool: AGE_REPLIES,
    extract: (n) => {
      const age = extractAge(n);
      return age !== null ? { age } : null;
    },
  },
  { intent: "family", test: (n) => /ich habe \d+ (brüder|schwestern|kinder|geschwister)|ich habe (einen bruder|eine schwester|kinder)/.test(n), pool: FAMILY_REPLIES },
  { intent: "work", test: (n) => /ich arbeite|mein beruf|ich bin (lehrer|ingenieur|arzt|student|verkäufer|programmierer|mechaniker|koch|fahrer)/.test(n), pool: WORK_REPLIES },
  { intent: "hobby", test: (n) => /ich spiele|ich höre|ich lese|ich mache gern|ich schwimme|ich fahre (gern )?rad|mein hobby|ich tanze|ich male/.test(n), pool: HOBBY_REPLIES },
  { intent: "food", test: (n) => /ich esse|ich trinke|mein lieblingsessen|ich koche/.test(n), pool: FOOD_REPLIES },
  { intent: "travel", test: (n) => /ich reise|ich möchte nach|ich fahre nach|ich fliege nach|urlaub|ich will nach/.test(n), pool: TRAVEL_REPLIES },
  { intent: "partner-question", test: (n) => /^(was|wo|wie|wann|wer|hast du|bist du|findest du|meinst du)/.test(n), pool: PARTNER_QUESTION_REPLIES },
  { intent: "yes", test: (n) => /^ja$|^jawohl$|^genau$/.test(n), pool: YES_REPLIES },
  { intent: "no", test: (n) => /^nein$|^doch nicht$|^nicht wirklich$/.test(n), pool: NO_REPLIES },
  { intent: "question", test: (n) => /\b(wie|was|wo|wann|wer|warum|woher|wohin|wie viele|wie viel)\b/.test(n), pool: QUESTION_REPLIES },
  { intent: "statement", test: (n) => /^ich /.test(n), pool: STATEMENT_REPLIES },
];

/* ── اختيار الرد ── */

function pickVariant(pool: Pool, level: ConversationLevel, state: ConversationState, intent: string): Variant {
  const variants = pool[level] ?? pool.A1 ?? FALLBACK_REPLIES.A1!;
  const used = state.usedReplies[intent] ?? 0;
  const variant = variants[used % variants.length];
  state.usedReplies[intent] = used + 1;
  return variant;
}

function fill(template: string, data: Record<string, string | number> | null): string {
  if (!data) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => String(data[k] ?? ""));
}

/**
 * الرد على مدخل المستخدم — دالة نقية تحدّث الحالة وتعيد الرد.
 */
export function respondToUser(state: ConversationState, input: string): { reply: ConversationReply; state: ConversationState } {
  const n = normalize(input);
  const correction = detectCorrection(n);

  // تحديث الحالة
  const next: ConversationState = {
    ...state,
    turnCount: state.turnCount + 1,
    usedReplies: { ...state.usedReplies },
  };

  // التقاط الاسم إن وُجد
  const name = extractName(n);
  if (name) next.userName = name;

  // كشف النية
  let matched: IntentRule | null = null;
  for (const rule of RULES) {
    if (rule.test(n)) {
      matched = rule;
      break;
    }
  }

  const intent = matched?.intent ?? "fallback";
  next.lastIntent = intent;

  const pool = matched?.pool ?? FALLBACK_REPLIES;
  const variant = pickVariant(pool, next.level, next, intent);
  const data = matched?.extract?.(n) ?? null;

  const reply: ConversationReply = {
    reply: fill(variant.de, data),
    replyAr: fill(variant.ar, data),
    intent,
  };
  if (correction) reply.correction = correction;

  return { reply, state: next };
}
