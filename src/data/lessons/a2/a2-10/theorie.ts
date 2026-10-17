/**
 * a2-10 — الشرح النظري (الجزء «theorie»)
 * فُصل من a2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "روابط الجمل الثانوية: weil وwenn وob",
      titleDe: "weil, wenn und ob — Nebensätze",
      explanationAr: `في الأمثلة القياسية لهذا الدرس تُدخل weil وwenn وob جملةً ثانوية، ويُنتقل الفعل المصرف إلى آخرها: Ich lerne, weil ich die Prüfung bestehen will. — الفعل will في النهاية بعد المصدر bestehen. وكذلك حين تتصدّر الثانوية: Weil ich müde war, bin ich früh ins Bett gegangen. — الثانوية شغلت الموقع الأول، فجاء الفعل المصرف bin مباشرةً بعد الفاصلة قبل الفاعل ich.

وظيفة كل رابط واضحة في المثال: weil تعرض سبباً يُجاب به عن warum؟؛ وwenn تعرض شرطاً أو معنى الزمن بحسب السياق، فقد تعني «إذا» أو «عندما»: Wenn ich Zeit habe, wiederhole ich Vokabeln.؛ وob تفتح سؤالاً غير مباشر إجابته نعم أو لا: Ich weiß nicht, ob er kommt. أي «لا أعرف ما إذا كان سيأتي». لاحظ أن ob لا تعني «إذا» الشرطية؛ فلو كان المقصود شرطاً لاخترنا wenn: Ich rufe dich an, wenn ich zu Hause bin.

علامة الترقيم تتبع الجملة الرئيسية لا الثانوية: جملة Ich weiß nicht, ob er kommt. خبرية تنتهي بنقطة وإن احتوت سؤالاً غير مباشر؛ ولا نضع علامة استفهام إلا إذا كانت الجملة الرئيسية نفسها سؤالاً: Wissen Sie, ob er kommt? ويصحّ أن تتقدّم الثانوية على الرئيسية كما في المثال أعلاه، ويبقى الفعل المصرف في الموقع الثاني من الجملة الكاملة — بعد الفاصلة مباشرة.`,
      whyAr:
        "السؤال المباشر Kommt er? يتحول داخل جملة خبرية إلى Ich weiß nicht, ob er kommt.، أي «لا أعرف هل سيأتي». لا نضع علامة استفهام لمجرد أن الجملة تحتوي سؤالاً غير مباشر؛ علامة الترقيم تتبع نوع الجملة الرئيسية. وتختلف وظيفة ob عن wenn: الأولى تعني «هل/ما إذا»، أما الثانية فتقدّم شرطاً أو زمناً.",
      table: {
        title: "المعنى المقصود وترتيب الفعل في أمثلة الدرس",
        columns: ["الرابط", "المعنى في المثال", "الوظيفة", "مثال"],
        rows: [
          { label: "weil", cells: ["لأنّ", "سبب", "Ich lerne, weil ich die Prüfung bestehen will."] },
          { label: "wenn", cells: ["إذا/عندما", "شرط أو زمن بحسب السياق", "Wenn ich Zeit habe, lerne ich."] },
          { label: "ob", cells: ["هل/ما إذا", "سؤال غير مباشر بنعم/لا", "Ich weiß nicht, ob er kommt."] },
        ],
      },
      examples: [
        { de: "Ich lerne Deutsch, weil ich in Deutschland studieren will.", ar: "أتعلم الألمانية لأنني أريد الدراسة في ألمانيا." },
        { de: "Wenn ich Zeit habe, wiederhole ich Vokabeln.", ar: "إذا توفر لديّ وقت، أراجع المفردات." },
        { de: "Ich weiß nicht, ob die Prüfung schwer ist.", ar: "لا أعرف ما إذا كان الامتحان صعباً." },
        { de: "Er lernt, weil er die Prüfung bestehen will.", ar: "يتعلم لأنه يريد اجتياز الامتحان." },
        { de: "Ob du kommst, ist mir egal.", ar: "لا يهمني إن كنت ستأتي أم لا." },
        { de: "Weil ich müde war, bin ich früh ins Bett gegangen.", ar: "لأنني كنت متعباً، ذهبت إلى الفراش مبكراً." },
      ],
      comparisonWithArabic:
        "تقابل weil «لأنّ» وob «هل/ما إذا»، لكن المقابلة ليست كلمةً بكلمة في كل موضع. العربية تفرّق بين «إذا» للشرط و«عندما» للزمن، أما الألمانية فتغطّي الحالتين غالباً بـwenn وحدها، ويفصل السياق بينهما؛ ويخفّف هذا العبء عن المتعلم العربي لأنه لا يحتاج كلمتين مختلفتين. الفرق الأكبر في البنية: العربية لا تغيّر موضع الفعل داخل الجملة التابعة — نقول «أتعلم الألمانية لأنني أريد اجتياز الامتحان» وترتيب الفعل كما هو في الجملة المستقلة. الألمانية تنقله إلى آخر الجملة، وهذا ما يجب تدريبه حتى يصير تلقائياً. ولاحظ أن «هل» العربية تصلح للسؤال المباشر وغير المباشر معاً، بينما الألمانية تسند غير المباشر إلى ob وتُبقي المباشر بلا أداة: Kommt er? مقابل Ich weiß nicht, ob er kommt.",
      eselsbruecke:
        "للسياقات المتدرّب عليها: سبب → weil؛ شرط أو وقت → wenn؛ سؤال غير مباشر بنعم/لا → ob. ثم حدّد الفعل المصرف في نهاية الجملة التابعة.",
      commonMistakes: [
        { wrong: "Ich lerne noch, weil ich will die Prüfung bestehen.", right: "Ich lerne noch, weil ich die Prüfung bestehen will.", whyAr: "في المثال التابع المندمج الذي نتدرب عليه يأتي الفعل المصرف will في النهاية، بعد المصدر bestehen.", classification: "error" },
        { wrong: "Ich weiß nicht, wenn die Prüfung schwer ist. (إذا كان المقصود: لا أعرف هل الامتحان صعب.)", right: "Ich weiß nicht, ob die Prüfung schwer ist.", whyAr: "للسؤال غير المباشر بنعم/لا نستخدم ob؛ وتظل wenn مناسبة في سياقات الشرط أو الزمن الأخرى.", classification: "contextual-alternative" },
        { wrong: "Weil es regnet, ich bleibe zu Hause.", right: "Weil es regnet, bleibe ich zu Hause.", whyAr: "في الجملة الرئيسية القياسية، تشغل الجملة التابعة المتقدمة الموقع الأول؛ لذلك يأتي الفعل المصرف بعدها مباشرةً قبل الفاعل.", classification: "error" },
      ],
      relatedRuleComparison: {
        title: "weil أم denn؟",
        content: "كلاهما قد يقدّم سبباً، لكن تركيب المثال يختلف: Ich lerne Deutsch, weil ich Zeit habe. (جملة تابعة وفعل في النهاية)؛ Ich lerne Deutsch, denn ich habe Zeit. (جملة رئيسية ثانية وترتيب الفعل في الموقع الثاني). يركّز هذا الدرس على weil. وتَرِد أحياناً تراكيب weil مع فعل في الموقع الثاني في الكلام العفوي بوظائف خاصة؛ لذا لا نصف كل ورود لها بأنه خطأ، لكننا نتدرّب هنا على الجملة التابعة القياسية.",
      },
    },
    {
      id: "t2",
      titleAr: "أدوات الملكية قبل الاسم في ثلاث حالات",
      titleDe: "Possessivbegleiter: Deklination von mein",
      explanationAr: `تتغير أداة الملكية التي تسبق الاسم بحسب جنس الاسم وعدده والحالة التي يطلبها تركيب الجملة. يعرض الجدول هنا Nominativ وAkkusativ وDativ فقط: mein Bruder في Nominativ، وmeinen Bruder مفعولاً به مع sehen في Akkusativ، وmeinem Bruder متمماً مع helfen في Dativ. وتأخذ المؤنثة meine Schwester في Nominativ وAkkusativ، وmeiner Schwester في Dativ.

الخيط الذي يربط الأشكال كلها أن أداة الملكية تسير على نمط ein: mein Bruder / ein Bruder، meinen Bruder / einen Bruder، meinem Bruder / einem Bruder. فإذا عرفت مسار ein في الحالة والجنس والعدد، عرفت mein وdein وsein وihr… معه. في Dativ الجمع تكون الأداة meinen، وتلحق بالاسم -n إن لم يكن جمعه منتهياً بـ-n أو -s: mit meinen Freunden وmit meinen Eltern.

طريقة العمل في هذا الدرس من ثلاث خطوات: حدّد الحالة أولاً من الفعل أو حرف الجر — helfen وmit يطلبان Dativ، وsehen يطلب Akkusativ؛ ثم حدّد جنس الاسم وعدده من المفردة نفسها؛ ثم طابق النهاية. ولا حاجة إلى أداة تعريف مع أداة الملكية: نقول mein Bruder لا der mein Bruder، فأداة الملكية تكفي وحدها لتعريف الاسم. ولا يغطي الجدول Genitiv (das Haus meines Bruders) ولا الضمير المستقل (Das ist meins.)؛ فلكلٍّ منهما موضعه لاحقاً.`,
      whyAr:
        "أداة الملكية قبل الاسم تأخذ نهايات على نمط ein: mein Bruder / ein Bruder، meinen Bruder / einen Bruder، meinem Bruder / einem Bruder. حدّد أولاً الحالة من الفعل أو حرف الجر ووظيفة الاسم، ثم طابق النهاية مع جنس الاسم وعدده. هنا نراجع ثلاثة صفوف من جدول التصريف، لا «كل الحالات».",
      table: {
        title: "أشكال mein قبل الاسم في الحالات الثلاث",
        columns: ["الحالة", "مذكر", "مؤنث", "محايد", "جمع"],
        rows: [
          { label: "Nominativ", cells: ["mein", "meine", "mein", "meine"] },
          { label: "Akkusativ", cells: ["meinen", "meine", "mein", "meine"] },
          { label: "Dativ", cells: ["meinem", "meiner", "meinem", "meinen (+n عند انطباقها على الاسم)"] },
        ],
      },
      examples: [
        { de: "Das ist mein Bruder.", ar: "هذا أخي. (Nominativ بعد sein)" },
        { de: "Ich sehe meinen Bruder.", ar: "أرى أخي. (Akkusativ؛ sehen يأخذ مفعولاً به هنا)" },
        { de: "Ich helfe meinem Bruder.", ar: "أساعد أخي. (Dativ؛ الفعل helfen يتطلب Dativ)" },
        { de: "Meine Schwester lernt Deutsch.", ar: "أختي تتعلم الألمانية. (Nominativ مؤنث)" },
        { de: "Ich helfe meiner Schwester.", ar: "أساعد أختي. (Dativ مؤنث)" },
        { de: "Das ist mein Buch. Ich lese mein Buch.", ar: "هذا كتابي. أقرأ كتابي. (محايد: mein في المثالين)" },
      ],
      comparisonWithArabic:
        "تُعبَّر الملكية بالعربية غالباً بلاحقة في «أخي/أختي»، بينما تأتي في الألمانية هنا أداة منفصلة قبل الاسم وتتبدل نهايتها مع الحالة والجنس والعدد: mein Bruder، meinen Bruder، meinem Bruder. لا تقابل تسمية Dativ كلمة «الجر» العربية مقابلةً كاملة؛ فهي حالة نحوية ألمانية تحددها بنية الفعل أو حرف الجر.",
      eselsbruecke:
        "تذكّر نهايات أداة الملكية مع الأسماء كما تتذكر ein: ein Bruder → mein Bruder؛ einen Bruder → meinen Bruder؛ einem Bruder → meinem Bruder. النمط يساعد في الأشكال المتدرّب عليها، لكنه لا يغني عن تحديد الحالة والجنس والعدد.",
      commonMistakes: [
        { wrong: "Ich sehe mein Bruder.", right: "Ich sehe meinen Bruder.", whyAr: "Bruder مذكر، وهو مفعول به مباشر لـsehen هنا؛ لذلك Akkusativ: meinen.", classification: "error" },
        { wrong: "Ich helfe meinen Bruder.", right: "Ich helfe meinem Bruder.", whyAr: "الفعل helfen يأخذ Dativ في هذا المعنى؛ مع الاسم المذكر نقول meinem Bruder.", classification: "error" },
        { wrong: "meine Bruder", right: "mein Bruder", whyAr: "في Nominativ الاسم Bruder مذكر ومفرد؛ الشكل المناسب قبل الاسم هو mein.", classification: "error" },
      ],
      relatedRuleComparison: {
        title: "حدّد الحالة قبل اختيار نهاية الملكية",
        content: "قارن Ich sehe meinen Bruder (Akkusativ بعد sehen) بـ Ich helfe meinem Bruder (Dativ مع helfen)، ثم Ich helfe meiner Schwester (Dativ مؤنث). لا تُستنتج الحالة من معنى الملكية أو من ترجمة الاسم وحدها.",
      },
    },
  ];
