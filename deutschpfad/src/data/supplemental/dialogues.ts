import type { TestQuestion } from "@/types/test";

/**
 * سيناريوهات المحادثة المتفرعة (Branching Dialogues)
 * — مواقف تفاعلية يختار فيها المتعلم الرد ويتفرع الحوار —
 */

export interface DialogueNode {
  id: string;
  speaker: string;
  de: string;
  ar: string;
  /** خيارات المتعلم */
  choices: { id: string; de: string; ar: string; next: string; feedback?: string }[];
  /** نقطة نهاية (نجاح) */
  isEnd?: boolean;
  endMessage?: string;
}

export interface Dialogue {
  id: string;
  title: string;
  titleDe: string;
  level: "A1" | "A2" | "B1" | "B2";
  situation: string;
  nodes: Record<string, DialogueNode>;
  start: string;
}

export const DIALOGUES: Dialogue[] = [
  {
    id: "dl-cafe",
    title: "في المقهى",
    titleDe: "Im Café",
    level: "A1",
    situation: "تدخل مقهى ألمانياً وتطلب قهوة",
    start: "n1",
    nodes: {
      n1: {
        id: "n1",
        speaker: "النادل",
        de: "Guten Tag! Was möchten Sie?",
        ar: "نهارك سعيد! ماذا تريد؟",
        choices: [
          { id: "c1", de: "Ich möchte bitte einen Kaffee.", ar: "أريد قهوة من فضلك.", next: "n2", feedback: "طلب مهذب ممتاز! (möchte + نصب)" },
          { id: "c2", de: "Ich will Kaffee.", ar: "أريد قهوة.", next: "n1", feedback: "«will» حادة جداً في المطعم — استخدم möchte دائماً." },
          { id: "c3", de: "Kaffee.", ar: "قهوة.", next: "n1", feedback: "قصيرة جداً — أضف «Ich möchte bitte» للأدب." },
        ],
      },
      n2: {
        id: "n2",
        speaker: "النادل",
        de: "Einen Kaffee, sehr gerne. Mit Milch und Zucker?",
        ar: "قهوة، بكل سرور. مع حليب وسكر؟",
        choices: [
          { id: "c1", de: "Ja, bitte. Und ein Glas Wasser.", ar: "نعم من فضلك. وكوب ماء.", next: "n3", feedback: "رائع! طلبت المزيد بثقة." },
          { id: "c2", de: "Nein, schwarz, bitte.", ar: "لا، سوداء من فضلك.", next: "n3", feedback: "جيد! (schwarz = بدون حليب)" },
          { id: "c3", de: "Milch und Zucker? Ich verstehe nicht.", ar: "حليب وسكر؟ لا أفهم.", next: "n1", feedback: "لا بأس — اطلب التوضيح: Können Sie das wiederholen?" },
        ],
      },
      n3: {
        id: "n3",
        speaker: "النادل",
        de: "Sehr gut! Das macht 3 Euro.",
        ar: "ممتاز! المجموع 3 يورو.",
        choices: [
          { id: "c1", de: "Hier, bitte. Stimmt so.", ar: "تفضل. الباقي لك.", next: "end", feedback: "إتقان كامل للدفع! (Stimmt so = الإكرامية)" },
          { id: "c2", de: "Kann ich mit Karte zahlen?", ar: "هل أستطيع الدفع بالبطاقة؟", next: "end", feedback: "سؤال دفع ممتاز!" },
        ],
      },
      end: {
        id: "end",
        speaker: "النادل",
        de: "Vielen Dank! Auf Wiedersehen!",
        ar: "شكراً جزيلاً! إلى اللقاء!",
        choices: [],
        isEnd: true,
        endMessage: "أنجزت السيناريو بنجاح! 🎉 — أنت تتسوق وتطلب كالمحترفين.",
      },
    },
  },
  {
    id: "dl-arzt",
    title: "عند الطبيب",
    titleDe: "Beim Arzt",
    level: "A2",
    situation: "تشعر بمرض وتزور الطبيب",
    start: "n1",
    nodes: {
      n1: {
        id: "n1",
        speaker: "الطبيبة",
        de: "Guten Tag! Was fehlt Ihnen?",
        ar: "نهارك سعيد! ما الذي ينقصك (ما بك)؟",
        choices: [
          { id: "c1", de: "Ich habe seit zwei Tagen Kopfschmerzen und Fieber.", ar: "عندي منذ يومين صداع وحمى.", next: "n2", feedback: "وصف أعراض ممتاز! (seit + Dativ)" },
          { id: "c2", de: "Ich bin schlecht.", ar: "أنا سيئ.", next: "n1", feedback: "«Ich bin schlecht» غامضة — صف الأعراض: Ich habe Schmerzen..." },
        ],
      },
      n2: {
        id: "n2",
        speaker: "الطبيبة",
        de: "Haben Sie auch Husten?",
        ar: "هل عندك سعال أيضاً؟",
        choices: [
          { id: "c1", de: "Ja, ein bisschen. Und ich bin sehr müde.", ar: "نعم قليلاً. وأنا متعب جداً.", next: "n3", feedback: "جيد! تفاصيل إضافية تساعد الطبيب." },
          { id: "c2", de: "Nein, nur Kopfschmerzen.", ar: "لا، صداع فقط.", next: "n3" },
        ],
      },
      n3: {
        id: "n3",
        speaker: "الطبيبة",
        de: "Sie haben eine Erkältung. Sie sollen viel trinken und sich ausruhen. Nehmen Sie dreimal täglich eine Tablette.",
        ar: "عندك زكام. يجب أن تشرب كثيراً وتستريح. خذ قرصاً ثلاث مرات يومياً.",
        choices: [
          { id: "c1", de: "Vielen Dank! Wie lange soll ich die Tabletten nehmen?", ar: "شكراً! كم يوماً آخذ الأقراص؟", next: "end", feedback: "سؤال متابعة ذكي — تماماً كالمريض المحترف!" },
          { id: "c2", de: "Okay, danke.", ar: "حسناً، شكراً.", next: "end" },
        ],
      },
      end: {
        id: "end",
        speaker: "الطبيبة",
        de: "Fünf Tage, und dann kommen Sie wieder, wenn es nicht besser ist. Gute Besserung!",
        ar: "خمسة أيام، ثم عد إذا لم تتحسن. الشفاء العاجل!",
        choices: [],
        isEnd: true,
        endMessage: "أتقنت سيناريو الطبيب! 🩺 — نصيحة: احفظ «Was fehlt Ihnen?» و«Gute Besserung».",
      },
    },
  },
  {
    id: "dl-bewerbung",
    title: "مقابلة عمل",
    titleDe: "Vorstellungsgespräch",
    level: "B1",
    situation: "في مقابلة عمل لشركة ألمانية",
    start: "n1",
    nodes: {
      n1: {
        id: "n1",
        speaker: "المديرة",
        de: "Erzählen Sie mir etwas über Ihre Erfahrung.",
        ar: "حدثني عن خبرتك.",
        choices: [
          { id: "c1", de: "Ich habe drei Jahre als Programmierer gearbeitet und dabei viele Projekte geleitet.", ar: "عملت ثلاث سنوات مبرمجاً وقدمت مشاريع كثيرة.", next: "n2", feedback: "إجابة قوية بجمل مركبة! (Perfekt + Relativsatz)" },
          { id: "c2", de: "Ich habe viel gearbeitet.", ar: "عملت كثيراً.", next: "n1", feedback: "عامة جداً — أضف تفاصيل: أين؟ كم سنة؟ ماذا أنجزت؟" },
        ],
      },
      n2: {
        id: "n2",
        speaker: "المديرة",
        de: "Warum möchten Sie bei uns arbeiten?",
        ar: "لماذا تريد العمل عندنا؟",
        choices: [
          { id: "c1", de: "Weil Ihre Firma innovativ ist und ich neue Herausforderungen suche.", ar: "لأن شركتكم مبتكرة وأنا أبحث عن تحديات جديدة.", next: "n3", feedback: "إجابة سببية مثالية! (weil + فعل في النهاية)" },
          { id: "c2", de: "Weil Sie gut bezahlen.", ar: "لأنكم تدفعون جيداً.", next: "n2", feedback: "حقيقية لكن غير دبلوماسية! اذكر أيضاً قيمة الشركة." },
        ],
      },
      n3: {
        id: "n3",
        speaker: "المديرة",
        de: "Was sind Ihre Stärken?",
        ar: "ما نقاط قوتك؟",
        choices: [
          { id: "c1", de: "Ich bin zuverlässig und arbeite gern im Team. Meiner Meinung nach ist Teamarbeit entscheidend.", ar: "أنا موثوق وأحب العمل الجماعي. في رأيي العمل الجماعي حاسم.", next: "end", feedback: "ممتاز — صفات + رأي بجملة أكاديمية!" },
          { id: "c2", de: "Ich bin sehr gut.", ar: "أنا جيد جداً.", next: "n3", feedback: "أضف أمثلة ملموسة تدعم قولك." },
        ],
      },
      end: {
        id: "end",
        speaker: "المديرة",
        de: "Sehr gut! Wir melden uns nächste Woche. Vielen Dank für das Gespräch!",
        ar: "ممتاز! سنتواصل معك الأسبوع القادم. شكراً على المقابلة!",
        choices: [],
        isEnd: true,
        endMessage: "اجتزت مقابلة العمل! 💼 — جاهز لسوق العمل الألماني.",
      },
    },
  },

  {
    id: "dl-reklamation",
    title: "الشكوى من منتج معيب",
    titleDe: "Reklamation im Geschäft",
    level: "B1",
    situation: "اشتريت جهازاً وتبيّن أنه معيب — تعيده إلى المتجر وتطلب استبداله",
    start: "n1",
    nodes: {
      n1: {
        id: "n1",
        speaker: "البائع",
        de: "Guten Tag! Kann ich Ihnen helfen?",
        ar: "نهارك سعيد! هل أستطيع مساعدتك؟",
        choices: [
          { id: "c1", de: "Guten Tag! Ich möchte diesen Mixer reklamieren. Er funktioniert nicht richtig.", ar: "نهارك سعيد! أريد ردّ هذا الخلاط. إنه لا يعمل بشكل صحيح.", next: "n2", feedback: "ممتاز! ركبت الفعل reklamieren + وصفت المشكلة." },
          { id: "c2", de: "Der Mixer ist kaputt.", ar: "الخلاط مكسور.", next: "n1", feedback: "قصيرة جداً — أضف التفاصيل: منذ متى؟ ما المشكلة بالضبط؟" },
          { id: "c3", de: "Ich will mein Geld zurück!", ar: "أريد استرداد أموالي!", next: "n1", feedback: "حادة — ابدأ بالأدب ثم اذكر المشكلة: Ich möchte ... reklamieren." },
        ],
      },
      n2: {
        id: "n2",
        speaker: "البائع",
        de: "Das tut mir leid. Wann haben Sie den Mixer gekauft? Haben Sie den Kassenzettel?",
        ar: "آسف لذلك. متى اشتريت الخلاط؟ هل لديك إيصال الشراء؟",
        choices: [
          { id: "c1", de: "Ich habe ihn vor zwei Wochen gekauft. Hier ist der Kassenzettel.", ar: "اشتريته قبل أسبوعين. هذا هو الإيصال.", next: "n3", feedback: "رائع — قدمت الإيصال (Kassenzettel) بثقة." },
          { id: "c2", de: "Ich weiß nicht genau, wann. Ich habe den Kassenzettel leider nicht.", ar: "لا أعرف بالضبط متى. للأسف لا أملك الإيصال.", next: "n4", feedback: "أجبت بصدق — لنرى رد البائع." },
          { id: "c3", de: "Kassenzettel? Ich brauche keinen Kassenzettel!", ar: "إيصال؟ لا أحتاج إيصالاً!", next: "n1", feedback: "في ألمانيا الإيصال ضروري للاستبدال عادة — أعد المحاولة بأدب." },
        ],
      },
      n3: {
        id: "n3",
        speaker: "البائع",
        de: "Alles klar. Ich prüfe das Gerät. Moment bitte ... Ja, der Motor ist defekt. Ich tausche den Mixer sofort um.",
        ar: "حسناً. سأفحص الجهاز. لحظة من فضلك... نعم، المحرك معيب. سأستبدل الخلاط فوراً.",
        choices: [
          { id: "c1", de: "Vielen Dank! Das ist sehr nett. Und kann ich eine längere Garantie bekommen?", ar: "شكراً جزيلاً! هذا لطيف جداً. وهل أستطيع الحصول على ضمان أطول؟", next: "end", feedback: "ممتاز — طلبت الضمان كي لا تتكرر المشكلة!" },
          { id: "c2", de: "Vielen Dank. Auf Wiedersehen!", ar: "شكراً. إلى اللقاء!", next: "end", feedback: "إتمام مهذب للسيناريو." },
        ],
      },
      n4: {
        id: "n4",
        speaker: "البائع",
        de: "Ohne Kassenzettel ist es schwierig. Ich kann Ihnen aber eine Reparatur anbieten, wenn Sie möchten.",
        ar: "بدون إيصال يصعب الأمر. لكن يمكنني عرض إصلاح الجهاز إن رغبت.",
        choices: [
          { id: "c1", de: "Hmm, verstehen Sie, ich möchte lieber einen Umtausch. Können wir nicht eine Ausnahme machen?", ar: "همم، افهمني، أفضّل الاستبدال. ألا يمكننا الاستثناء؟", next: "end", feedback: "دبلوماسي: Umtausch + Ausnahme — مفردات B2 حقيقية!" },
          { id: "c2", de: "Okay, dann reparieren Sie bitte das Gerät. Wie lange dauert das?", ar: "حسناً، إذن أصلحوا الجهاز من فضلكم. كم يستغرق ذلك؟", next: "end", feedback: "حل عملي وسؤال عن المدة — جيد." },
        ],
      },
      end: {
        id: "end",
        speaker: "البائع",
        de: "Vielen Dank für Ihr Verständnis! Guten Tag noch!",
        ar: "شكراً لتفهمك! نهارك سعيد!",
        choices: [],
        isEnd: true,
        endMessage: "أنجزت سيناريو الشكوى بنجاح! 🛒 — مفردات B2: reklamieren, Umtausch, Kassenzettel, Garantie, Ausnahme.",
      },
    },
  },
];
/** إيجاد سيناريو بالمعرّف */
export function getDialogue(id: string): Dialogue | undefined {
  return DIALOGUES.find((d) => d.id === id);
}
