"use client";

import * as React from "react";
import {CheckCircle2, Headphones, MessageCircle, RefreshCcw, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {recordEvent} from "@/lib/analytics/events";
import {addGems, GEM_REWARDS} from "@/lib/gamification/gems";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  جلسة محادثة تفاعلية محاكية — بلا LLM وبلا خادم (Vercel مجاني)
 *  سيناريوهات واقعية (نادل/طبيب/موظف بنك…) — أنت تختار الرد،
 *  والمحاور يردّ وفق شجرة قرار، مع نطق TTS لكل جملة.
 * ═══════════════════════════════════════════════════════════
 */

interface Turn {
  speaker: "أنت" | "محاور";
  de: string;
  ar: string;
  /** الخيارات المتاحة (نص ألماني + هل هو الأمثل + رد المحاور) */
  options: { de: string; ar: string; best: boolean; replyDe: string; replyAr: string }[];
}

interface Scenario {
  id: string;
  title: string;
  emoji: string;
  level: "A1" | "A2" | "B1";
  intro: string;
  turns: Turn[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "cafe",
    title: "في المقهى",
    emoji: "☕",
    level: "A1",
    intro: "أنت في مقهى في برلين. النادل يسألك ماذا تريد أن تشرب.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Tag! Was möchten Sie trinken?",
        ar: "طاب يومك! ماذا تريد أن تشرب؟",
        options: [
          { de: "Einen Kaffee, bitte.", ar: "قهوة، من فضلك.", best: true, replyDe: "Sehr gerne. Kommt sofort!", replyAr: "بكل سرور. تأتي فوراً!" },
          { de: "Ich bin ein Tisch.", ar: "أنا طاولة.", best: false, replyDe: "Hmm, das verstehe ich nicht. Was möchten Sie trinken?", replyAr: "همم، لم أفهم. ماذا تريد أن تشرب؟" },
          { de: "Nein, danke.", ar: "لا، شكراً.", best: false, replyDe: "Okay. Sagen Sie Bescheid, wenn Sie etwas brauchen.", replyAr: "حسناً. أخبرني إذا احتجت شيئاً." },
        ],
      },
      {
        speaker: "محاور",
        de: "Mit Milch und Zucker?",
        ar: "مع حليب وسكر؟",
        options: [
          { de: "Ja, mit Milch, bitte. Ohne Zucker.", ar: "نعم مع حليب من فضلك. بدون سكر.", best: true, replyDe: "Alles klar! Einen Moment bitte.", replyAr: "حسناً! لحظة من فضلك." },
          { de: "Zucker und Zucker und Zucker.", ar: "سكر وسكر وسكر.", best: false, replyDe: "So viel Zucker? Bist du sicher?", replyAr: "كل هذا السكر؟ هل أنت متأكد؟" },
          { de: "Milch, bitte.", ar: "حليب من فضلك.", best: true, replyDe: "Gut, mit Milch. Kommt gleich!", replyAr: "جيد، مع الحليب. يصلك حالاً!" },
        ],
      },
      {
        speaker: "محاور",
        de: "Hier ist Ihr Kaffee. Guten Appetit!",
        ar: "تفضل قهوتك. بالهناء والشفاء!",
        options: [
          { de: "Vielen Dank! Auf Wiedersehen!", ar: "شكراً جزيلاً! إلى اللقاء!", best: true, replyDe: "Auf Wiedersehen! Schönen Tag noch!", replyAr: "إلى اللقاء! ويوم سعيد!" },
          { de: "Das ist mein Auto.", ar: "هذه سيارتي.", best: false, replyDe: "Ihr Auto? Okay… Schönen Tag noch!", replyAr: "سيارتك؟ حسناً… يوم سعيد!" },
          { de: "Danke schön!", ar: "شكراً جميلاً!", best: true, replyDe: "Gern geschehen! Bis bald!", replyAr: "عفواً! إلى اللقاء قريباً!" },
        ],
      },
    ],
  },
  {
    id: "arzt",
    title: "عند الطبيب",
    emoji: "🩺",
    level: "A2",
    intro: "أنت في عيادة الطبيب وتشعر بالتعب. الطبيب يسألك عن الأعراض.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Morgen. Was fehlt Ihnen?",
        ar: "صباح الخير. ما الذي يزعجك؟",
        options: [
          { de: "Ich habe Kopfschmerzen und Fieber.", ar: "عندي صداع وحمى.", best: true, replyDe: "Hmm, das klingt nicht gut. Seit wann?", replyAr: "همم، هذا ليس جيداً. منذ متى؟" },
          { de: "Ich bin ein Hund.", ar: "أنا كلب.", best: false, replyDe: "Sie sind ein Hund? Ich glaube, wir müssen zum Tierarzt!", replyAr: "أنت كلب؟ أعتقد أننا يجب أن نذهب لطبيب الحيوانات!" },
          { de: "Nichts, danke.", ar: "لا شيء، شكراً.", best: false, replyDe: "Dann können Sie nach Hause gehen. Gute Besserung!", replyAr: "إذن يمكنك الذهاب للمنزل. الشفاء العاجل!" },
        ],
      },
      {
        speaker: "محاور",
        de: "Seit wann haben Sie das?",
        ar: "منذ متى وأنت تشعر بهذا؟",
        options: [
          { de: "Seit zwei Tagen, glaube ich.", ar: "منذ يومين، أعتقد.", best: true, replyDe: "Okay. Ich verschreibe Ihnen Medikamente.", replyAr: "حسناً. سأصف لك أدوية." },
          { de: "Seit meinem Geburtstag.", ar: "منذ عيد ميلادي.", best: false, replyDe: "Und wann war das? Egal — nehmen Sie diese Tabletten.", replyAr: "ومتى كان ذلك؟ لا يهم — خذ هذه الأقراص." },
          { de: "Ich weiß nicht.", ar: "لا أعرف.", best: true, replyDe: "Kein Problem. Wir machen einen Test.", replyAr: "لا مشكلة. سنجري فحصاً." },
        ],
      },
      {
        speaker: "محاور",
        de: "Nehmen Sie diese Tabletten zweimal am Tag. Gute Besserung!",
        ar: "خذ هذه الأقراص مرتين يومياً. الشفاء العاجل!",
        options: [
          { de: "Vielen Dank, Herr Doktor!", ar: "شكراً جزيلاً يا دكتور!", best: true, replyDe: "Gern geschehen! Bis zum nächsten Mal!", replyAr: "عفواً! إلى اللقاء في المرة القادمة!" },
          { de: "Auf Wiedersehen!", ar: "إلى اللقاء!", best: true, replyDe: "Auf Wiedersehen und gute Besserung!", replyAr: "إلى اللقاء والشفاء العاجل!" },
          { de: "Nein!", ar: "لا!", best: false, replyDe: "Wie bitte? Sie müssen die Tabletten nehmen!", replyAr: "ماذا؟ يجب أن تأخذ الأقراص!" },
        ],
      },
    ],
  },
  {
    id: "bank",
    title: "في البنك",
    emoji: "🏦",
    level: "B1",
    intro: "أنت في البنك لفتح حساب. الموظفة تسألك عن بياناتك.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Tag! Wie kann ich Ihnen helfen?",
        ar: "طاب يومك! كيف يمكنني مساعدتك؟",
        options: [
          { de: "Ich möchte ein Konto eröffnen.", ar: "أريد أن أفتح حساباً.", best: true, replyDe: "Sehr gerne! Haben Sie einen Termin?", replyAr: "بكل سرور! هل لديك موعد؟" },
          { de: "Ich möchte einen Kaffee.", ar: "أريد قهوة.", best: false, replyDe: "Das ist eine Bank, kein Café. Wie kann ich helfen?", replyAr: "هذا بنك وليس مقهى. كيف أساعدك؟" },
          { de: "Ich suche das Kino.", ar: "أبحث عن السينما.", best: false, replyDe: "Das Kino ist in der nächsten Straße.", replyAr: "السينما في الشارع التالي." },
        ],
      },
      {
        speaker: "محاور",
        de: "Haben Sie Ihren Ausweis dabei?",
        ar: "هل معك بطاقة هويتك؟",
        options: [
          { de: "Ja, hier ist mein Ausweis.", ar: "نعم، ها هي بطاقتي.", best: true, replyDe: "Danke! Ich brauche noch Ihre Adresse.", replyAr: "شكراً! أحتاج أيضاً عنوانك." },
          { de: "Nein, ich habe ihn zu Hause vergessen.", ar: "لا، نسيتها في المنزل.", best: false, replyDe: "Ohne Ausweis können wir leider kein Konto eröffnen.", replyAr: "بدون بطاقة لا يمكننا فتح حساب للأسف." },
          { de: "Mein Pass ist auch okay?", ar: "هل جواز سفري مقبول؟", best: true, replyDe: "Ja, der Pass ist auch gültig. Danke!", replyAr: "نعم، الجواز صالح أيضاً. شكراً!" },
        ],
      },
      {
        speaker: "محاور",
        de: "Hier ist Ihr Vertrag. Unterschreiben Sie bitte hier.",
        ar: "هذا هو عقدك. من فضلك وقّع هنا.",
        options: [
          { de: "Gerne. Wo genau muss ich unterschreiben?", ar: "بكل سرور. أين بالضبط يجب أن أوقع؟", best: true, replyDe: "Hier unten, bitte. Perfekt, danke!", replyAr: "في الأسفل هنا من فضلك. ممتاز، شكراً!" },
          { de: "Ich kann nicht schreiben.", ar: "لا أستطيع الكتابة.", best: false, replyDe: "Oh, das ist ein Problem… Vielleicht morgen?", replyAr: "أوه، هذه مشكلة… ربما غداً؟" },
          { de: "Alles klar, hier ist die Unterschrift.", ar: "حسناً، هذا هو التوقيع.", best: true, replyDe: "Vielen Dank! Ihr Konto ist jetzt aktiv.", replyAr: "شكراً جزيلاً! حسابك الآن نشط." },
        ],
      },
    ],
  },
  {
    id: "hotel",
    title: "في الفندق",
    emoji: "🏨",
    level: "A1",
    intro: "أنت في فندق. موظف الاستقبال يسألك عن الحجز.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Abend! Haben Sie eine Reservierung?",
        ar: "مساء الخير! هل لديك حجز؟",
        options: [
          { de: "Ja, auf den Namen Sami.", ar: "نعم، باسم سامي.", best: true, replyDe: "Sehr gut. Darf ich Ihren Ausweis sehen?", replyAr: "جيد جداً. هل يمكنني رؤية بطاقتك؟" },
          { de: "Nein, ich schlafe auf der Straße.", ar: "لا، أنام في الشارع.", best: false, replyDe: "Oh… Dann kann ich Ihnen leider kein Zimmer geben.", replyAr: "أوه… إذن لا يمكنني إعطاؤك غرفة للأسف." },
          { de: "Ja, für zwei Nächte.", ar: "نعم، لليلتين.", best: true, replyDe: "Perfekt. Darf ich Ihren Ausweis sehen?", replyAr: "ممتاز. هل يمكنني رؤية بطاقتك؟" },
        ],
      },
      {
        speaker: "محاور",
        de: "Darf ich Ihren Ausweis sehen?",
        ar: "هل يمكنني رؤية بطاقتك؟",
        options: [
          { de: "Ja, hier ist mein Pass.", ar: "نعم، ها هو جواز سفري.", best: true, replyDe: "Danke. Ihr Zimmer ist im dritten Stock.", replyAr: "شكراً. غرفتك في الطابق الثالث." },
          { de: "Ich habe keinen Ausweis, ich bin ein Geist.", ar: "ليس لدي بطاقة، أنا شبح.", best: false, replyDe: "Ein Geist? Dann brauchen Sie kein Zimmer…", replyAr: "شبح؟ إذن لا تحتاج غرفة…" },
          { de: "Gerne, hier bitte.", ar: "بكل سرور، تفضل.", best: true, replyDe: "Vielen Dank! Hier ist Ihre Karte.", replyAr: "شكراً جزيلاً! هذه بطاقتك." },
        ],
      },
      {
        speaker: "محاور",
        de: "Ihr Zimmer ist im dritten Stock. Hier ist Ihre Karte.",
        ar: "غرفتك في الطابق الثالث. هذه بطاقتك.",
        options: [
          { de: "Vielen Dank! Wo ist der Aufzug?", ar: "شكراً جزيلاً! أين المصعد؟", best: true, replyDe: "Rechts um die Ecke.", replyAr: "على اليمين عند الزاوية." },
          { de: "Ich nehme die Treppe zum Mond.", ar: "سآخذ الدرج إلى القمر.", best: false, replyDe: "Zum Mond? Der Aufzug ist rechts!", replyAr: "إلى القمر؟ المصعد على اليمين!" },
          { de: "Danke schön! Schönen Abend noch!", ar: "شكراً جميلاً! مساء سعيد!", best: true, replyDe: "Ihnen auch! Gute Nacht!", replyAr: "لك أيضاً! ليلة سعيدة!" },
        ],
      },
    ],
  },
  {
    id: "restaurant",
    title: "في المطعم",
    emoji: "🍽️",
    level: "A2",
    intro: "أنت في مطعم مع صديق. النادل يسألك عن الطلب.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Abend! Haben Sie reserviert?",
        ar: "مساء الخير! هل حجزتم؟",
        options: [
          { de: "Nein, wir sind zu zweit.", ar: "لا، نحن شخصان.", best: true, replyDe: "Kein Problem. Setzen Sie sich bitte.", replyAr: "لا مشكلة. اجلسا من فضلكما." },
          { de: "Ja, für den Mond.", ar: "نعم، للقمر.", best: false, replyDe: "Für den Mond? Wir haben nur Tische auf der Erde!", replyAr: "للقمر؟ لدينا طاولات على الأرض فقط!" },
          { de: "Nein, aber wir möchten gern essen.", ar: "لا، لكننا نود أن نأكل.", best: true, replyDe: "Natürlich! Hier ist die Speisekarte.", replyAr: "بالطبع! هذه قائمة الطعام." },
        ],
      },
      {
        speaker: "محاور",
        de: "Was möchten Sie essen?",
        ar: "ماذا تريد أن تأكل؟",
        options: [
          { de: "Ich nehme die Pasta, bitte.", ar: "سآخذ المعكرونة من فضلك.", best: true, replyDe: "Sehr gut. Und zu trinken?", replyAr: "جيد جداً. وماذا تشرب؟" },
          { de: "Ich esse nur Luft.", ar: "آكل الهواء فقط.", best: false, replyDe: "Nur Luft? Das steht nicht auf der Karte!", replyAr: "الهواء فقط؟ هذا ليس في القائمة!" },
          { de: "Ich hätte gern die Pizza.", ar: "أود البيتزا.", best: true, replyDe: "Kommt sofort!", replyAr: "تأتي فوراً!" },
        ],
      },
      {
        speaker: "محاور",
        de: "Das macht 25 Euro. Möchten Sie mit Karte zahlen?",
        ar: "المبلغ 25 يورو. هل تريد الدفع بالبطاقة؟",
        options: [
          { de: "Ja, mit Karte bitte.", ar: "نعم بالبطاقة من فضلك.", best: true, replyDe: "Hier ist die Rechnung. Vielen Dank!", replyAr: "هذه الفاتورة. شكراً جزيلاً!" },
          { de: "Ich zahle mit einem Lied.", ar: "أدفع بأغنية.", best: false, replyDe: "Mit einem Lied? Wir nehmen nur Geld!", replyAr: "بأغنية؟ نقبل المال فقط!" },
          { de: "Nein, ich zahle bar.", ar: "لا، أدفع نقداً.", best: true, replyDe: "Alles klar, das stimmt so.", replyAr: "حسناً، المبلغ صحيح." },
        ],
      },
    ],
  },
  {
    id: "shopping",
    title: "في المتجر",
    emoji: "🛍️",
    level: "A2",
    intro: "أنت في متجر ملابس. البائعة تسألك عما تبحث عنه.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Tag! Kann ich Ihnen helfen?",
        ar: "طاب يومك! هل يمكنني مساعدتك؟",
        options: [
          { de: "Ja, ich suche eine Jacke.", ar: "نعم، أبحث عن معطف.", best: true, replyDe: "Welche Größe haben Sie?", replyAr: "ما مقاسك؟" },
          { de: "Ja, ich suche einen Elefanten.", ar: "نعم، أبحث عن فيل.", best: false, replyDe: "Einen Elefanten? Wir verkaufen nur Kleidung!", replyAr: "فيلاً؟ نبيع الملابس فقط!" },
          { de: "Nein, danke. Ich schaue nur.", ar: "لا، شكراً. أتفرج فقط.", best: true, replyDe: "Gerne! Rufen Sie mich, wenn Sie etwas brauchen.", replyAr: "بكل سرور! نادني إذا احتجت شيئاً." },
        ],
      },
      {
        speaker: "محاور",
        de: "Welche Größe haben Sie?",
        ar: "ما مقاسك؟",
        options: [
          { de: "Ich habe Größe M.", ar: "مقاسي M.", best: true, replyDe: "Hier ist die Jacke. Gefällt sie Ihnen?", replyAr: "هذا هو المعطف. هل يعجبك؟" },
          { de: "Ich habe Größe Mond.", ar: "مقاسي القمر.", best: false, replyDe: "Größe Mond? Die haben wir nicht!", replyAr: "مقاس القمر؟ ليس لدينا!" },
          { de: "Größe L, bitte.", ar: "مقاس L من فضلك.", best: true, replyDe: "Einen Moment, ich hole sie.", replyAr: "لحظة، سأحضرها." },
        ],
      },
      {
        speaker: "محاور",
        de: "Das kostet 59 Euro. Möchten Sie sie kaufen?",
        ar: "ثمنها 59 يورو. هل تريد شراءها؟",
        options: [
          { de: "Ja, ich nehme sie.", ar: "نعم، سآخذها.", best: true, replyDe: "Sehr gut! An der Kasse bitte.", replyAr: "جيد جداً! عند الصندوق من فضلك." },
          { de: "Nein, sie ist zu teuer.", ar: "لا، إنها غالية.", best: false, replyDe: "Verstehe. Vielleicht ein anderes Mal!", replyAr: "أفهم. ربما في مرة أخرى!" },
          { de: "Ja, aber ist sie im Angebot?", ar: "نعم، لكن هل هي في التخفيض؟", best: true, replyDe: "Ja, 20 Prozent Rabatt!", replyAr: "نعم، تخفيض 20 بالمئة!" },
        ],
      },
    ],
  },
  {
    id: "airport",
    title: "في المطار",
    emoji: "✈️",
    level: "B1",
    intro: "أنت في المطار لتسجيل الوصول. الموظفة تطلب جوازك وتذكرتك.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Morgen! Darf ich Ihren Pass und Ihr Ticket sehen?",
        ar: "صباح الخير! هل يمكنني رؤية جوازك وتذكرتك؟",
        options: [
          { de: "Ja, hier sind sie.", ar: "نعم، ها هما.", best: true, replyDe: "Danke. Haben Sie Gepäck?", replyAr: "شكراً. هل لديك أمتعة؟" },
          { de: "Ich habe nur einen Hut.", ar: "لدي قبعة فقط.", best: false, replyDe: "Nur einen Hut? Und Ihr Pass?", replyAr: "قبعة فقط؟ وأين جوازك؟" },
          { de: "Gerne, einen Moment bitte.", ar: "بكل سرور، لحظة من فضلك.", best: true, replyDe: "Kein Problem. Nehmen Sie sich Zeit.", replyAr: "لا مشكلة. خذ وقتك." },
        ],
      },
      {
        speaker: "محاور",
        de: "Haben Sie Gepäck?",
        ar: "هل لديك أمتعة؟",
        options: [
          { de: "Ja, einen Koffer und eine Tasche.", ar: "نعم، حقيبة كبيرة وحقيبة يد.", best: true, replyDe: "Okay. Wiegen Sie den Koffer bitte.", replyAr: "حسناً. زن الحقيبة من فضلك." },
          { de: "Ja, ein ganzes Haus.", ar: "نعم، بيت كامل.", best: false, replyDe: "Ein Haus? Das ist zu groß für das Flugzeug!", replyAr: "بيت؟ هذا كبير جداً على الطائرة!" },
          { de: "Nein, nur Handgepäck.", ar: "لا، أمتعة يد فقط.", best: true, replyDe: "Perfekt. Dann gehen Sie zu Gate 12.", replyAr: "ممتاز. إذن اذهب إلى البوابة 12." },
        ],
      },
      {
        speaker: "محاور",
        de: "Ihr Flug ist um 14 Uhr. Gate 12, bitte.",
        ar: "رحلتك الساعة 14. البوابة 12 من فضلك.",
        options: [
          { de: "Vielen Dank! Schönen Tag noch!", ar: "شكراً جزيلاً! يوم سعيد!", best: true, replyDe: "Ihnen auch! Gute Reise!", replyAr: "لك أيضاً! رحلة سعيدة!" },
          { de: "Ich fliege mit dem Besen.", ar: "أطير على المكنسة.", best: false, replyDe: "Mit dem Besen? Das ist keine Fluggesellschaft!", replyAr: "بمكنسة؟ هذه ليست شركة طيران!" },
          { de: "Danke! Bis später!", ar: "شكراً! إلى اللقاء!", best: true, replyDe: "Bis später und gute Reise!", replyAr: "إلى اللقاء ورحلة سعيدة!" },
        ],
      },
    ],
  },
];

export function ConversationSimulator() {
  const [scenarioIdx, setScenarioIdx] = React.useState(0);
  const [turnIdx, setTurnIdx] = React.useState(0);
  const [reply, setReply] = React.useState<{ de: string; ar: string; best: boolean } | null>(null);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const [rate, setRate] = React.useState(0.85);

  const scenario = SCENARIOS[scenarioIdx];
  const turn = scenario.turns[turnIdx];

  const reset = () => {
    setTurnIdx(0);
    setReply(null);
    setScore(0);
    setFinished(false);
  };

  const choose = (opt: Turn["options"][number]) => {
    if (reply) return;
    setReply(opt);
    if (opt.best) {
      setScore((s) => s + 1);
      playCorrect();
      void recordEvent({ type: "conversation-choice", scenario: scenario.id, correct: true } as never);
      addGems(1);
    } else {
      playWrong();
      void recordEvent({ type: "conversation-choice", scenario: scenario.id, correct: false } as never);
    }
  };

  const next = () => {
    if (turnIdx + 1 >= scenario.turns.length) {
      setFinished(true);
      void recordEvent({ type: "conversation-completed", scenario: scenario.id, score } as never);
      return;
    }
    setTurnIdx((t) => t + 1);
    setReply(null);
  };

  const progress = ((turnIdx + (reply ? 1 : 0)) / scenario.turns.length) * 100;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
      <div className="mb-6 space-y-3">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          💬 محادثة تفاعلية محاكية
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          سيناريوهات واقعية (مقهى، طبيب، بنك) — تختار الرد الأنسب، والمحاور يردّ عليك.
          تعمل كلياً داخل متصفحك (بلا LLM وبلا خادم) مع نطق ألماني لكل جملة.
        </p>

        {/* اختيار السيناريو */}
        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setScenarioIdx(i);
                reset();
              }}
              className={cn(
                "rounded-xl border px-3 py-2 text-sm font-bold transition-colors",
                scenarioIdx === i ? "border-primary bg-primary/10 text-primary" : "bg-background hover:border-primary/40",
              )}
            >
              {s.emoji} {s.title} <span className="font-de ms-1 text-[11px] text-muted-foreground">{s.level}</span>
            </button>
          ))}
        </div>
      </div>

      {/* شريط التقدم */}
      <div className="mb-4 flex items-center gap-3">
        <Progress
          value={finished ? 100 : progress}
          aria-label="تقدم المحادثة"
          className="h-2 flex-1"
        />
        <span className="font-de text-xs font-bold text-primary">{Math.round(progress)}%</span>
      </div>

      {finished ? (
        <div className="rounded-2xl border border-success/40 bg-success/10 p-6 text-center">
          <p className="text-3xl" aria-hidden="true">🎉</p>
          <h2 className="mt-2 text-lg font-extrabold">أتممت السيناريو «{scenario.title}»</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            أجبت اختياراً صحيحاً من أصل {scenario.turns.length}: <span className="font-de font-extrabold">{score}/{scenario.turns.length}</span>
          </p>
          <Button className="mt-4 gap-2" onClick={() => { setScenarioIdx((s) => (s + 1) % SCENARIOS.length); reset(); }}>
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            سيناريو آخر
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* رسالة المحاور */}
          <div className="rounded-2xl border bg-muted/20 p-4">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden="true">{scenario.emoji}</span>
              <p className="text-xs font-bold text-primary">{turn.speaker}</p>
              <div className="ms-auto flex items-center gap-1">
                <SpeakButton text={turn.de} rate={rate} size="sm" />
                <button
                  type="button"
                  onClick={() => setRate((r) => (r === 0.75 ? 0.85 : 0.75))}
                  className="tap-target rounded-full border px-2 text-[11px] font-bold text-muted-foreground"
                  aria-label={`${rate === 0.75 ? "بطيء" : "عادي"} — تغيير سرعة النطق`}
                >
                  {rate === 0.75 ? "بطيء" : "عادي"}
                </button>
              </div>
            </div>
            <p className="font-de mt-2 text-lg font-bold" dir="ltr" lang="de">
              {turn.de}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{turn.ar}</p>
          </div>

          {/* رد المحاور بعد الاختيار */}
          {reply && (
            <div
              className={cn(
                "rounded-2xl border p-4",
                reply.best ? "border-success/40 bg-success/10" : "border-destructive/30 bg-destructive/5",
              )}
            >
              <div className="flex items-center gap-2">
                {reply.best ? (
                  <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive" aria-hidden="true" />
                )}
                <p className="text-xs font-bold text-muted-foreground">ردّ المحاور:</p>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <p className="font-de text-base font-bold" dir="ltr" lang="de">{reply.de}</p>
                <SpeakButton text={reply.de} rate={rate} size="sm" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{reply.ar}</p>
              <Button size="sm" className="mt-3" onClick={next}>
                {turnIdx + 1 >= scenario.turns.length ? "إنهاء الجلسة" : "التالي ←"}
              </Button>
            </div>
          )}

          {/* الخيارات */}
          {!reply && (
            <div className="space-y-2">
              <p className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                اختر ردّك:
              </p>
              {turn.options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => choose(opt)}
                  className="w-full rounded-xl border bg-card p-3 text-start transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <span className="font-de block text-sm font-bold" dir="ltr" lang="de">
                    {opt.de}
                  </span>
                  <span className="text-xs text-muted-foreground">{opt.ar}</span>
                </button>
              ))}
            </div>
          )}

          {/* تلميح: استمع قبل الإجابة */}
          <p className="flex items-center gap-1.5 rounded-lg bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
            استمع للجملة أولاً ثم اختر — النطق الفعلي يبني أذنك الألمانية.
          </p>
        </div>
      )}
    </div>
  );
}
