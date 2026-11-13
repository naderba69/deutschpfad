/**
 * بنوك ردود محرك المحادثة الحرة المحلي (بيانات فقط)
 * — ردود متدرجة حسب المستوى A1→B2 لكل نية —
 * فُصلت عن منطق المحرك في offline-conversation.ts (سقف حجم الملفات).
 */
import type { ConversationLevel } from "./offline-conversation";

/* ── بنوك الردود (متدرجة حسب المستوى) ── */

export interface Variant {
  de: string;
  ar: string;
}
export type Pool = Partial<Record<ConversationLevel, Variant[]>>;

export const GREETINGS: Pool = {
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

export const NAME_REPLIES: Pool = {
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

export const ORIGIN_REPLIES: Pool = {
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

export const AGE_REPLIES: Pool = {
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

export const FAMILY_REPLIES: Pool = {
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

export const WORK_REPLIES: Pool = {
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

export const HOBBY_REPLIES: Pool = {
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

export const FOOD_REPLIES: Pool = {
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

export const TRAVEL_REPLIES: Pool = {
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

export const FEELING_REPLIES: Pool = {
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

export const FEELING_BAD_REPLIES: Pool = {
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

export const PARTNER_QUESTION_REPLIES: Pool = {
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

export const YES_REPLIES: Pool = {
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

export const NO_REPLIES: Pool = {
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

export const QUESTION_REPLIES: Pool = {
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

export const STATEMENT_REPLIES: Pool = {
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

export const FALLBACK_REPLIES: Pool = {
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

export const GOODBYE_REPLIES: Pool = {
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

export const THANKS_REPLIES: Pool = {
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

export const WEATHER_REPLIES: Pool = {
  A1: [
    { de: "Heute scheint die Sonne. Magst du Sonne?", ar: "اليوم الشمس مشرقة. هل تحب الشمس؟" },
    { de: "Es ist kalt heute. Hast du eine Jacke?", ar: "الجو بارد اليوم. هل لديك معطف؟" },
  ],
  A2: [
    { de: "Heute regnet es. Hast du einen Schirm dabei?", ar: "اليوم تمطر. هل معك مظلة؟" },
    { de: "Das Wetter ist schön. Was machst du heute?", ar: "الطقس جميل. ماذا ستفعل اليوم؟" },
  ],
  B1: [
    { de: "Heute regnet es stark. Hast du schon Pläne für das Wochenende?", ar: "اليوم تمطر بغزارة. هل لديك خطط لنهاية الأسبوع؟" },
    { de: "Das Wetter wechselt oft. Was machst du bei Regen gern?", ar: "الطقس يتغير كثيراً. ماذا تحب أن تفعل عندما تمطر؟" },
  ],
  B2: [
    { de: "Das Wetter hat sich in den letzten Jahren stark verändert. Wie findest du das?", ar: "تغيّر الطقس كثيراً في السنوات الأخيرة. كيف تجد ذلك؟" },
    { de: "Heute ist es ungewöhnlich warm. Was bedeutet das für dich?", ar: "اليوم دافئ بشكل غير معتاد. ماذا يعني ذلك بالنسبة لك؟" },
  ],
};

export const TIME_REPLIES: Pool = {
  A1: [
    { de: "Es ist zehn Uhr. Was machst du jetzt?", ar: "الساعة العاشرة. ماذا تفعل الآن؟" },
    { de: "Es ist zwölf Uhr. Isst du zu Mittag?", ar: "الساعة الثانية عشرة. هل تأكل على الغداء؟" },
  ],
  A2: [
    { de: "Es ist halb drei. Hast du schon zu Mittag gegessen?", ar: "الساعة الثانية والنصف. هل أكلت على الغداء؟" },
    { de: "Es ist Viertel nach neun. Wann fängt deine Arbeit an?", ar: "الساعة التاسعة والربع. متى يبدأ عملك؟" },
  ],
  B1: [
    { de: "Es ist kurz vor zwölf. Hast du schon Pläne für den Nachmittag?", ar: "الساعة تقترب من الثانية عشرة. هل لديك خطط بعد الظهر؟" },
    { de: "Es ist zwanzig nach vier. Wie lange arbeitest du noch?", ar: "الساعة الرابعة والعشرون دقيقة. كم ستعمل بعد؟" },
  ],
  B2: [
    { de: "Es ist kurz nach halb eins. Wie strukturierst du deinen Tag?", ar: "الساعة الواحدة والنصف تقريباً. كيف تنظم يومك؟" },
    { de: "Es ist fünf vor sechs. Was hast du heute alles geschafft?", ar: "الساعة السادسة إلا خمس دقائق. ماذا أنجزت اليوم؟" },
  ],
};

export const DIRECTIONS_REPLIES: Pool = {
  A1: [
    { de: "Der Bahnhof ist links. Ist es weit?", ar: "المحطة على اليسار. هل هي بعيدة؟" },
    { de: "Die Schule ist rechts. Wie lange gehst du?", ar: "المدرسة على اليمين. كم تمشي؟" },
  ],
  A2: [
    { de: "Gehe geradeaus und dann links. Ist es weit von hier?", ar: "امشِ مستقيماً ثم يساراً. هل هي بعيدة من هنا؟" },
    { de: "Die Apotheke ist um die Ecke. Wie komme ich dorthin?", ar: "الصيدلية عند الزاوية. كيف أصل إليها؟" },
  ],
  B1: [
    { de: "Gehe geradeaus bis zur Ampel, dann rechts. Brauchst du noch etwas?", ar: "امشِ مستقيماً حتى الإشارة ثم يميناً. هل تحتاج شيئاً آخر؟" },
    { de: "Der Park ist in der Nähe. Wie lange dauert der Weg?", ar: "الحديقة قريبة. كم يستغرق الطريق؟" },
  ],
  B2: [
    { de: "Gehe geradeaus bis zur Ampel, dann rechts. Kennst du dich hier gut aus?", ar: "امشِ مستقيماً حتى الإشارة ثم يميناً. هل تعرف المكان جيداً؟" },
    { de: "Das Museum ist gleich um die Ecke. Warst du schon einmal dort?", ar: "المتحف عند الزاوية مباشرة. هل ذهبت إليه من قبل؟" },
  ],
};

export const SHOPPING_REPLIES: Pool = {
  A1: [
    { de: "Das kostet fünf Euro. Möchtest du es kaufen?", ar: "ثمنه خمسة يورو. هل تريد شراءه؟" },
    { de: "Ich kaufe Brot und Milch. Was kaufst du?", ar: "أشتري خبزاً وحليباً. ماذا تشتري أنت؟" },
  ],
  A2: [
    { de: "Das kostet zwanzig Euro. Ist es zu teuer?", ar: "ثمنه عشرون يورو. هل هو غالٍ؟" },
    { de: "Ich suche eine Jacke. Was suchst du?", ar: "أبحث عن معطف. ماذا تبحث أنت؟" },
  ],
  B1: [
    { de: "Das kostet fünfzig Euro. Möchtest du es in einer anderen Farbe?", ar: "ثمنه خمسون يورو. هل تريده بلون آخر؟" },
    { de: "Ich kaufe gern im Markt. Wo kaufst du am liebsten ein?", ar: "أحب الشراء من السوق. أين تحب الشراء أكثر؟" },
  ],
  B2: [
    { de: "Das kostet achtzig Euro. Wie findest du den Preis?", ar: "ثمنه ثمانون يورو. كيف تجد السعر؟" },
    { de: "Ich kaufe meistens online. Wie kaufst du lieber ein?", ar: "أشتري غالباً عبر الإنترنت. كيف تحب الشراء أكثر؟" },
  ],
};

export const TRANSPORT_REPLIES: Pool = {
  A1: [
    { de: "Ich fahre mit dem Bus. Fährst du auch mit dem Bus?", ar: "أذهب بالحافلة. هل تذهب بالحافلة أيضاً؟" },
    { de: "Der Zug ist schnell. Fährst du gern mit dem Zug?", ar: "القطار سريع. هل تحب ركوب القطار؟" },
  ],
  A2: [
    { de: "Ich fahre mit dem Fahrrad zur Arbeit. Wie fährst du?", ar: "أذهب إلى العمل بالدراجة. كيف تذهب أنت؟" },
    { de: "Ich nehme den Zug nach Berlin. Fährst du oft mit dem Zug?", ar: "آخذ القطار إلى برلين. هل تركب القطار كثيراً؟" },
  ],
  B1: [
    { de: "Ich fahre mit der U-Bahn, weil es schneller ist. Was ist für dich am praktischsten?", ar: "أركب المترو لأنه أسرع. ما الأكثر عملية بالنسبة لك؟" },
    { de: "Ich nehme oft den Bus. Wie findest du den öffentlichen Nahverkehr?", ar: "أركب الحافلة كثيراً. كيف تجد وسائل النقل العامة؟" },
  ],
  B2: [
    { de: "Ich fahre mit dem Fahrrad, weil es umweltfreundlich ist. Wie siehst du die Verkehrswende?", ar: "أركب الدراجة لأنها صديقة للبيئة. كيف ترى تحول النقل؟" },
    { de: "Ich nehme den Zug, um CO₂ zu sparen. Was bedeutet dir Nachhaltigkeit?", ar: "آخذ القطار لتوفير ثاني أكسيد الكربون. ماذا تعني لك الاستدامة؟" },
  ],
};

export const LEARNING_REPLIES: Pool = {
  A1: [
    { de: "Ich lerne Deutsch. Lernst du auch Deutsch?", ar: "أتعلم الألمانية. هل تتعلم الألمانية أيضاً؟" },
    { de: "Deutsch ist schön. Was lernst du gern?", ar: "الألمانية جميلة. ماذا تحب أن تتعلم؟" },
  ],
  A2: [
    { de: "Ich lerne seit einem Jahr Deutsch. Wie lange lernst du schon?", ar: "أتعلم الألمانية منذ سنة. منذ متى تتعلم أنت؟" },
    { de: "Ich lerne gern mit Musik. Wie lernst du am besten?", ar: "أحب التعلم مع الموسيقى. كيف تتعلم أنت بشكل أفضل؟" },
  ],
  B1: [
    { de: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. Warum lernst du Deutsch?", ar: "أتعلم الألمانية لأنني أريد العمل في ألمانيا. لماذا تتعلم أنت؟" },
    { de: "Ich lerne jeden Tag neue Wörter. Wie viele Wörter lernst du pro Woche?", ar: "أتعلم كلمات جديدة كل يوم. كم كلمة تتعلم في الأسبوع؟" },
  ],
  B2: [
    { de: "Ich lerne Deutsch, um mich beruflich weiterzuentwickeln. Was ist dein Lernziel?", ar: "أتعلم الألمانية لتطوير مساري المهني. ما هدفك التعليمي؟" },
    { de: "Ich lerne durch Gespräche am meisten. Wie lernst du am effektivsten?", ar: "أتعلم أكثر من خلال المحادثات. كيف تتعلم أنت بفعالية أكبر؟" },
  ],
};

export const WEEKEND_REPLIES: Pool = {
  A1: [
    { de: "Am Wochenende spiele ich Fußball. Was machst du?", ar: "في نهاية الأسبوع ألعب كرة القدم. ماذا تفعل أنت؟" },
    { de: "Am Samstag schlafe ich lange. Schläfst du lange?", ar: "يوم السبت أنام طويلاً. هل تنام طويلاً؟" },
  ],
  A2: [
    { de: "Am Wochenende bin ich in die Stadt gefahren. Was hast du gemacht?", ar: "في نهاية الأسبوع ذهبت إلى المدينة. ماذا فعلت أنت؟" },
    { de: "Am Sonntag ruhe ich mich aus. Was machst du am Sonntag?", ar: "يوم الأحد أستريح. ماذا تفعل يوم الأحد؟" },
  ],
  B1: [
    { de: "Am Wochenende habe ich Freunde getroffen. Was hast du gemacht?", ar: "في نهاية الأسبوع التقيت أصدقاء. ماذا فعلت أنت؟" },
    { de: "Am Wochenende möchte ich mich entspannen. Was ist für dich Entspannung?", ar: "في نهاية الأسبوع أريد الاسترخاء. ما الاسترخاء بالنسبة لك؟" },
  ],
  B2: [
    { de: "Am Wochenende habe ich an einem Projekt gearbeitet. Wie nutzt du deine Freizeit?", ar: "في نهاية الأسبوع عملت على مشروع. كيف تستغل وقت فراغك؟" },
    { de: "Am Wochenende versuche ich, offline zu sein. Wie wichtig ist dir digitale Auszeit?", ar: "في نهاية الأسبوع أحاول الابتعاد عن الشاشات. كم تهمك الراحة الرقمية؟" },
  ],
};

export const MUSIC_REPLIES: Pool = {
  A1: [
    { de: "Ich höre gern Musik. Hörst du auch Musik?", ar: "أحب الاستماع للموسيقى. هل تستمع للموسيقى أيضاً؟" },
    { de: "Ich sehe gern Filme. Siehst du gern Filme?", ar: "أحب مشاهدة الأفلام. هل تحب مشاهدة الأفلام؟" },
  ],
  A2: [
    { de: "Ich höre jeden Tag Musik. Was hörst du gern?", ar: "أستمع للموسيقى كل يوم. ماذا تحب أن تستمع؟" },
    { de: "Ich schaue gern Serien. Was schaust du gern?", ar: "أحب مشاهدة المسلسلات. ماذا تحب أن تشاهد؟" },
  ],
  B1: [
    { de: "Ich höre Musik, um mich zu entspannen. Wann hörst du Musik?", ar: "أستمع للموسيقى للاسترخاء. متى تستمع أنت؟" },
    { de: "Ich sehe gern Dokumentationen. Was für Filme magst du?", ar: "أحب مشاهدة الأفلام الوثائقية. ما نوع الأفلام التي تحبها؟" },
  ],
  B2: [
    { de: "Ich höre Musik, um mich zu konzentrieren. Wie beeinflusst Musik deine Stimmung?", ar: "أستمع للموسيقى للتركيز. كيف تؤثر الموسيقى على مزاجك؟" },
    { de: "Ich sehe gern Filme, die zum Nachdenken anregen. Was bedeutet Kino für dich?", ar: "أحب الأفلام التي تدعو للتفكير. ماذا تعني السينما بالنسبة لك؟" },
  ],
};

