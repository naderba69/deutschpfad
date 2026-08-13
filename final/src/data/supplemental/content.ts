/**
 * ═══════════════════════════════════════════════════════════
 *  المحتوى التكميلي (المرحلة 15):
 *  التعابير والأمثال + لقطات ثقافية + هل تعلم + أخطاء اليوم
 *  + كلمات اليوم الموسعة + نصائح الحياة اليومية
 * ═══════════════════════════════════════════════════════════
 */

export interface Redewendung {
  de: string;
  literal: string;
  meaning: string;
  example: string;
  exampleAr: string;
  level: "A2" | "B1" | "B2";
}

/** التعابير الاصطلاحية والأمثال */
export const REDEWENDUNGEN: Redewendung[] = [
  {
    de: "Da steppt der Bär!",
    literal: "هناك يرقص الدب!",
    meaning: "سيكون هناك احتفال صاخب/مكان حيوي جداً",
    example: "Komm mit zur Party, da steppt der Bär!",
    exampleAr: "تعال معنا للحفلة، سيكون هناك احتفال رائع!",
    level: "B1",
  },
  {
    de: "Ich verstehe nur Bahnhof.",
    literal: "أفهم محطة القطار فقط.",
    meaning: "لا أفهم شيئاً إطلاقاً",
    example: "Die Erklärung war zu schwer, ich verstehe nur Bahnhof.",
    exampleAr: "كان الشرح صعباً جداً، لم أفهم شيئاً.",
    level: "B1",
  },
  {
    de: "Das ist nicht mein Bier.",
    literal: "هذه ليست بيرةً لي.",
    meaning: "هذا ليس من شأني",
    example: "Frag ihn selbst, das ist nicht mein Bier.",
    exampleAr: "اسأله بنفسك، هذا ليس من شأني.",
    level: "B2",
  },
  {
    de: "Die Daumen drücken.",
    literal: "الضغط على الإبهامين.",
    meaning: "أتمنى لك التوفيق (نحني الإبهام كعلامة حظ)",
    example: "Ich drücke dir die Daumen für die Prüfung!",
    exampleAr: "أتمنى لك التوفيق في الامتحان!",
    level: "A2",
  },
  {
    de: "Alles hat ein Ende, nur die Wurst hat zwei.",
    literal: "كل شيء له نهاية، فقط النقانق لها طرفان.",
    meaning: "كل شيء ينتهي في النهاية (فكاهة ألمانية)",
    example: "Keine Sorge, alles hat ein Ende, nur die Wurst hat zwei.",
    exampleAr: "لا تقلق، كل شيء ينتهي — فقط النقانق لها طرفان.",
    level: "B2",
  },
  {
    de: "Ich glaube, mein Schwein pfeift!",
    literal: "أعتقد أن خنزيري يصفر!",
    meaning: "لا أصدق ما أرى! (دهشة)",
    example: "Was? 500 Euro? Ich glaube, mein Schwein pfeift!",
    exampleAr: "ماذا؟ 500 يورو؟ لا أصدق ما أرى!",
    level: "B2",
  },
  {
    de: "Morgenstund hat Gold im Mund.",
    literal: "ساعة الصباح فيها ذهب في الفم.",
    meaning: "من استيقظ باكراً وجد البركة (مثل)",
    example: "Steh auf! Morgenstund hat Gold im Mund.",
    exampleAr: "قم! من بكّر وجد البركة.",
    level: "B1",
  },
  {
    de: "Übung macht den Meister.",
    literal: "التدريب يصنع الأستاذ.",
    meaning: "الممارسة تؤدي للإتقان (مثل)",
    example: "Lerne jeden Tag, Übung macht den Meister!",
    exampleAr: "تعلم كل يوم، فالممارسة تؤدي للإتقان!",
    level: "A2",
  },
  {
    de: "Wer A sagt, muss auch B sagen.",
    literal: "من قال أ يجب أن يقول ب.",
    meaning: "من بدأ شيئاً يجب أن يكمله (مثل)",
    example: "Du hast versprochen zu helfen. Wer A sagt, muss auch B sagen.",
    exampleAr: "وعدت بالمساعدة. من قال أ يجب أن يقول ب.",
    level: "B1",
  },
];

export interface CulturalFact {
  title: string;
  content: string;
  emoji: string;
}

/** لقطات ثقافية عن ألمانيا/النمسا/سويسرا */
export const CULTURAL_FACTS: CulturalFact[] = [
  {
    title: "الالتزام بالمواعيد",
    content:
      "الألمان يعشقون الدقة: «Pünktlichkeit ist die Höflichkeit der Könige» (الدقة هي أدب الملوك). التأخر 5 دقائق = اعتذار واجب. حتى في المواعيد الاجتماعية!",
    emoji: "⏰",
  },
  {
    title: "تجربة المشروبات (Feierabendbier)",
    content:
      "بعد العمل يذهب الألمان «zum Feierabendbier» (بيرة نهاية الدوام) مع الزملاء — طقس اجتماعي مهم لبناء العلاقات. و«Feierabend» = نهاية يوم العمل.",
    emoji: "🍻",
  },
  {
    title: "ألمانيا بلد النقانق والجبن",
    content:
      "أكثر من 1500 نوع نقانق و600 نوع جبن ألماني! والنقانق الأشهر: Currywurst (برلين) وWeißwurst (ميونخ — تؤكل قبل الظهر فقط تقليدياً!).",
    emoji: "🌭",
  },
  {
    title: "النمسا: بلد الموسيقى",
    content:
      "فيينا عاصمة الموسيقى الكلاسيكية: موتسارت وبيتهوفن وشتراوس. و«Wiener Schnitzel» (شنيتزل فيينا) — قطعة لحم مذهبة مشهورة عالمياً.",
    emoji: "🎻",
  },
  {
    title: "سويسرا: أربع لغات رسمية",
    content:
      "سويسرا فيها 4 لغات رسمية: الألمانية (62%)، الفرنسية، الإيطالية، والرومانشية. والساعات السويسرية والبنوك والشوكولاتة — ثلاث علامات عالمية!",
    emoji: "🇨🇭",
  },
  {
    title: "عيد الوحدة الألمانية",
    content:
      "3 أكتوبر: يوم الوحدة الألمانية — ذكرى اتحاد الشرق والغرب 1990. والألمان يحتفلون بـ«Tag der Deutschen Einheit» في كل المدن بالتناوب.",
    emoji: "🎉",
  },
  {
    title: "السوق الأسبوعي (Wochenmarkt)",
    content:
      "في كل مدينة سوق صباحي أسبوعي للخضار الطازجة من المزارعين — «Frische vom Markt» (طزاجة من السوق). والألمان يفضلون المنتجات المحلية: «regional und saisonal».",
    emoji: "🥕",
  },
  {
    title: "الدراجة أسلوب حياة",
    content:
      "ألمانيا بلد الدراجات: ~80 مليون دراجة! و«Fahrradstraße» شوارع مخصصة للدراجات. وحتى الوزراء يصلون بالدراجة للعمل في برلين.",
    emoji: "🚲",
  },
];

export interface DidYouKnow {
  title: string;
  content: string;
}

/** هل تعلم؟ حقائق لغوية */
export const DID_YOU_KNOW: DidYouKnow[] = [
  {
    title: "كلمات ألمانية دخلت العربية",
    content: "كلمات عربية أصلها ألماني: «شيك» (Scheck)، «بنزين» (Benzin)، «فولت» (Volt). وألمانية دخلت العربية: «شطّة» من الشرق؟ لا — لكن «جودة» من Quality!",
  },
  {
    title: "أطول كلمة ألمانية رسمية",
    content:
      "Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz — قانون مراقبة تسمية لحم البقر! 63 حرفاً. الألمان يحبون تركيب الكلمات بلا حدود.",
  },
  {
    title: "ألمانية بحرية أو بحرية؟",
    content:
      "«die See» = البحر، لكن «die Seele» = الروح! حرف l واحد يفرق بين البحر والروح. (Seele = روح، See = بحر)",
  },
  {
    title: "أيها القطار السريع!",
    content:
      "كلمة «القطار» الألمانية «der Zug» لها معانٍ كثيرة: قطار، سحب، مسيرة، ميزة (einen Vorteil haben = einen Zug haben?) — لا، بل «Vorteil» وحدها. لكنها مرنة جداً!",
  },
  {
    title: "حرفان يقلبان المعنى",
    content:
      "schon (بالفعل) مقابل schön (جميل) — الفرق: أوملاوت ö! والجملة «Das ist schon schön» = هذا جميل فعلاً. والألمان يمزحون بها كثيراً.",
  },
  {
    title: "نفس الكلمة، جنسان، معنيان",
    content:
      "der See = بحيرة، die See = بحر. der Band = مجلد، das Band = شريط. الجنس يغيّر المعنى تماماً — لهذا نتعلم الجنس مع الكلمة!",
  },
];

/** أخطاء اليوم — أخطاء شائعة مع تصحيح (لـ «خطأ اليوم») */
export interface DailyMistake {
  wrong: string;
  right: string;
  why: string;
  level: "A1" | "A2" | "B1" | "B2";
}

export const DAILY_MISTAKES: DailyMistake[] = [
  { wrong: "Ich bin kalt.", right: "Es ist kalt. / Mir ist kalt.", why: "«أنا بارد» تعني شخصاً بارد المشاعر! للطقس: Es ist kalt. وللشعور: Mir ist kalt.", level: "A1" },
  { wrong: "Ich habe 25 Jahre.", right: "Ich bin 25 Jahre alt.", why: "العمر مع sein وليس haben: Ich bin 25 (Jahre alt).", level: "A1" },
  { wrong: "Ich lerne Deutsch für zwei Jahre.", right: "Ich lerne seit zwei Jahren Deutsch.", why: "الاستمرار من الماضي للحاضر: seit + Dativ.", level: "A2" },
  { wrong: "Ich weiß die Antwort nicht? — لا، السؤال الصحيح", right: "Ich weiß die Antwort nicht.", why: "wissen (يعرف معلومة) مقابل kennen (يعرف شخصاً/مكاناً).", level: "B1" },
  { wrong: "Ich bin gut in Deutsch sprechen.", right: "Ich spreche gut Deutsch.", why: "الصيغة الصحيحة: فعل + ظرف + لغة.", level: "B1" },
  { wrong: "Die Leute ist nett.", right: "Die Leute sind nett.", why: "Leute جمع دائماً → sind.", level: "A2" },
  { wrong: "Ich habe nach Deutschland geflogen.", right: "Ich bin nach Deutschland geflogen.", why: "fliegen حركة → sein في Perfekt.", level: "A2" },
  { wrong: "Er sagt, er hat keine Zeit.", right: "Er sagt, er habe keine Zeit.", why: "نقل الكلام غير المباشر: Konjunktiv I (habe).", level: "B2" },
];

/** عبارات الحياة اليومية */
export interface EverydayPhrase {
  de: string;
  ar: string;
  situation: string;
}

export const EVERYDAY_PHRASES: EverydayPhrase[] = [
  { de: "Was darf es sein?", ar: "ماذا تريد (في المتجر)؟", situation: "المتجر" },
  { de: "Das mache ich sofort.", ar: "سأفعل ذلك فوراً.", situation: "العمل/المنزل" },
  { de: "Ich komme gleich.", ar: "سآتي حالاً.", situation: "عام" },
  { de: "Keine Ursache!", ar: "لا داعي للشكر/عفواً.", situation: "الرد على الشكر" },
  { de: "Das passt schon.", ar: "لا بأس/سيكون على ما يرام.", situation: "الطمأنة" },
  { de: "Bis gleich!", ar: "إلى اللقاء قريباً.", situation: "الوداع القصير" },
  { de: "Ich habe mich verlaufen.", ar: "لقد ضللت الطريق.", situation: "الشارع" },
  { de: "Können Sie mir helfen?", ar: "هل يمكنكم مساعدتي؟", situation: "عام" },
  { de: "Das ist eine gute Frage.", ar: "هذا سؤال جيد.", situation: "النقاش" },
  { de: "Ich bin gleich fertig.", ar: "سأنتهي حالاً.", situation: "العمل" },
  { de: "Das geht nicht.", ar: "هذا غير ممكن.", situation: "الرفض المهذب" },
  { de: "Das ist mir egal.", ar: "لا يهمني.", situation: "اللامبالاة" },
];
