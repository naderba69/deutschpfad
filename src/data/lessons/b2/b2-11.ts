import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-11: الإسناد والمِلكية في الجملة المركّبة
 *
 * يسدّ فجوتين نحويتين مؤكّدتين بالفحص:
 *  1) dessen / deren — لم تكن أيّ كتلة نظرية تُدرّسهما؛ كانا يظهران
 *     كمشتّتات فقط في خيارات التمارين (b1-01، b1-10، b2-03، b2-04).
 *  2) الصيغة المصدرية المزدوجة (Doppelinfinitiv): habe … müssen —
 *     لم ترد في المنهج كلّه ولا مرّة واحدة.
 * ويضيف كتلة ثالثة عن أفعال الإدراك lassen/sehen/hören في الماضي،
 * وهي المصدر الثاني للمصدر المزدوج.
 */
export const lessonB211: Lesson = {
  id: "b2-11",
  unitId: "b2-04",
  level: "B2",
  order: 2,
  titleDe: "Zugehörigkeit und doppelter Infinitiv",
  titleAr: "الإسناد والمِلكية في الجملة المركّبة",
  duration: 45,
  summary:
    "الضمائر النسبية في حالة المضاف إليه (dessen/deren) للتعبير عن المِلكية داخل الجملة النسبية، والصيغة المصدرية المزدوجة في الماضي (habe arbeiten müssen) مع الأفعال المودالية وlassen وأفعال الإدراك.",

  lernziele: [
    { id: "z1", de: "Ich kann Relativsätze mit „dessen“ und „deren“ bilden.", ar: "أن أبني جملة نسبية تعبّر عن المِلكية بـ dessen وderen." },
    { id: "z2", de: "Ich kann den doppelten Infinitiv im Perfekt verwenden.", ar: "أن أستعمل الصيغة المصدرية المزدوجة في الماضي التام." },
    { id: "z3", de: "Ich kann „lassen“, „sehen“ und „hören“ im Perfekt korrekt einsetzen.", ar: "أن أصرّف lassen وsehen وhören في الماضي بصيغة المصدر المزدوج." },
    { id: "z4", de: "Ich kann komplexe Sachverhalte präzise und schriftlich darstellen.", ar: "أن أعرض وقائع مركّبة بدقّة في نصّ مكتوب." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "كيف تقول بالألمانية «الكاتب الذي رواياته مترجمة إلى العربية»؟ العربية تربطها بضمير صغير («رواياته»)، والألمانية تحتاج كلمة واحدة دقيقة: dessen. وكيف تقول «اضطررت أن أعمل»؟ ليس gemusst بل: Ich habe arbeiten müssen. بابان صغيران يفصلان نصّ B1 عن نصّ B2.",
    contextAr:
      "في المقال الصحفي والنصّ الأدبي وتقرير العمل تتراكم المعلومات داخل الجملة الواحدة. بدل ثلاث جمل قصيرة يكتب الألماني جملة واحدة محكمة: Der Autor, dessen Romane ins Arabische übersetzt wurden, lebt in Berlin. هذا التكثيف هو ما يقرأه المصحّح علامةً على مستوى B2.",
    activateVocabulary: [
      { de: "der Autor", ar: "الكاتب" },
      { de: "der Roman", ar: "الرواية" },
      { de: "übersetzen", ar: "يترجم" },
      { de: "die Kollegin", ar: "الزميلة" },
      { de: "der Nachbar", ar: "الجار" },
      { de: "reparieren", ar: "يُصلح" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-01 — الجمل النسبية والمضاف إليه): اختر الضمير النسبي:",
      questionDe: "Das ist der Mann, ___ ich gestern getroffen habe.",
      options: ["den", "der", "dem", "das"],
      correctIndex: 0,
      explanation: "treffen يأخذ مفعولاً به مباشراً ⇒ Akkusativ مذكّر = den.",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B2 (درس b2-03 — الجمل النسبية مع حروف الجر): اختر التركيب الصحيح:",
      questionDe: "Der Kollege, ___ ich warte, kommt gleich.",
      options: ["auf den", "den auf", "auf der", "für den"],
      correctIndex: 0,
      explanation: "warten auf + Akkusativ، وحرف الجر يسبق الضمير النسبي: auf den.",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-02 — الماضي البسيط والماضي التام): أكمل الفعل المساعد:",
      template: "Ich ___ gestern lange gearbeitet.",
      blanks: [{ correct: "habe", options: ["habe", "bin", "war"] }],
      explanation: "arbeiten فعل غير حركي ⇒ Perfekt مع haben.",
      errorType: "conjugation",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الضمير النسبي في المضاف إليه: dessen وderen",
      titleDe: "Relativpronomen im Genitiv: dessen und deren",
      explanationAr:
        "حين تكون العلاقة علاقة مِلكية («الكاتب الذي رواياته…») نستعمل الضمير النسبي في حالة المضاف إليه: dessen للمذكّر والمحايد، وderen للمؤنّث والجمع. قاعدتان تحسمان كل شيء: (1) الشكل يتبع الاسم السابق (المرجع) لا الاسم التالي؛ (2) الاسم الذي يلي dessen/deren يأتي بلا أداة تعريف إطلاقاً: der Autor, dessen Romane… وليس dessen die Romane. وحالة الاسم التالي داخل الجملة النسبية حرّة تماماً — قد يكون فاعلاً أو مفعولاً.",
      whyAr:
        "لماذا يخطئ الناطق بالعربية هنا تحديداً؟ لأنّ العربية تعلّق المِلكية على الاسم الثاني بضمير متّصل («رواياتُه»)، فيكون التذكير والتأنيث تابعاً للمالك تلقائياً. الألمانية تفصل: dessen/deren كلمة مستقلّة تسبق المملوك، لكنها مع ذلك تُصرَّف حسب المالك. فمن يقول deren Romane عن كاتب رجل يكون قد طابق الكلمة الخطأ.",
      table: {
        title: "اختيار dessen أو deren حسب المرجع",
        columns: ["المرجع (المالك)", "الشكل", "مثال"],
        rows: [
          { label: "مذكّر مفرد", cells: ["dessen", "der Autor, dessen Romane bekannt sind"] },
          { label: "محايد مفرد", cells: ["dessen", "das Kind, dessen Eltern arbeiten"] },
          { label: "مؤنّث مفرد", cells: ["deren", "die Frau, deren Auto kaputt ist"] },
          { label: "جمع", cells: ["deren", "die Studenten, deren Noten gut sind"] },
          { label: "بعد حرف جر", cells: ["يبقى الشكل نفسه", "der Mann, mit dessen Bruder ich rede"] },
          { label: "الاسم التالي", cells: ["بلا أداة تعريف", "✗ dessen die Romane"] },
        ],
      },
      examples: [
        { de: "Der Autor, dessen Romane ins Arabische übersetzt wurden, lebt in Berlin.", ar: "الكاتب الذي تُرجمت رواياته إلى العربية يعيش في برلين." },
        { de: "Die Kollegin, deren Vortrag wir gehört haben, arbeitet seit zehn Jahren hier.", ar: "الزميلة التي سمعنا محاضرتها تعمل هنا منذ عشر سنوات." },
        { de: "Das Kind, dessen Eltern im Ausland leben, wohnt bei den Großeltern.", ar: "الطفل الذي يعيش والداه في الخارج يسكن عند جدّيه." },
        { de: "Die Nachbarn, deren Hund immer bellt, sind umgezogen.", ar: "الجيران الذين ينبح كلبهم دائماً قد انتقلوا." },
        { de: "Ich kenne einen Arzt, mit dessen Hilfe du einen Termin bekommst.", ar: "أعرف طبيباً تحصل بمساعدته على موعد." },
      ],
      comparisonWithArabic:
        "«الكاتب الذي رواياتُه مشهورة» = der Autor, dessen Romane bekannt sind. لاحظ الفرق البنيوي: العربية تُلصق الضمير بالمملوك في آخره، والألمانية تضع كلمة مستقلّة قبله. وانتبه: العربية تقول «رواياتُه» بالإفراد المذكّر لأنّ المالك رجل — والألمانية كذلك تختار dessen للمالك المذكّر، لا للرواية المؤنّثة الجمع.",
      eselsbruecke:
        "«dessen للرجل والطفل، وderen للمرأة والجماعة». والعلامة الفارقة: بعدهما اسم عارٍ بلا der/die/das — إن وجدت أداة تعريف فقد أخطأت.",
      commonMistakes: [
        { wrong: "Der Autor, deren Romane bekannt sind.", right: "Der Autor, dessen Romane bekannt sind.", whyAr: "المطابقة مع المالك (der Autor مذكّر) لا مع المملوك (die Romane جمع)." },
        { wrong: "Die Frau, dessen Auto kaputt ist.", right: "Die Frau, deren Auto kaputt ist.", whyAr: "المالكة مؤنّثة ⇒ deren، ولو كان المملوك محايداً (das Auto)." },
        { wrong: "Der Mann, dessen der Sohn studiert.", right: "Der Mann, dessen Sohn studiert.", whyAr: "لا أداة تعريف بعد dessen/deren أبداً." },
      ],
      relatedRuleComparison: {
        title: "dessen أم von dem؟",
        content:
          "von dem ممكن نحوياً لكنه ثقيل وغير مستحسن في النصّ المكتوب: der Autor, von dem die Romane bekannt sind. الصيغة المعيارية في B2 هي dessen. استعمل von + Dativ فقط حين يفرضها الفعل نفسه (träumen von, abhängen von) لا للمِلكية.",
      },
    },
    {
      id: "t2",
      titleAr: "الصيغة المصدرية المزدوجة مع الأفعال المودالية",
      titleDe: "Der doppelte Infinitiv mit Modalverben",
      explanationAr:
        "حين يقترن فعل مودالي بفعل رئيسي في الماضي التام لا نستعمل اسم المفعول (gemusst) بل مصدرين متتاليين: Ich habe arbeiten müssen. الترتيب ثابت: haben المصرَّف + الفعل الرئيسي بالمصدر + الفعل المودالي بالمصدر في النهاية. والمساعد دائماً haben ولو كان الفعل الرئيسي حركياً: Ich habe gehen müssen. أمّا اسم المفعول gemusst/gekonnt فلا يُستعمل إلا حين يقف المودالي وحده بلا فعل رئيسي: Ich habe es nicht gekonnt.",
      whyAr:
        "لماذا هذا الشذوذ؟ لأنّ المصدر المزدوج يحفظ ترتيباً منطقياً: الفعل الأهمّ (المودالي، حامل المعنى) يُختم به الكلام. وفائدته العملية أنّ B2 يطلب سرد الماضي بدقّة نمطية — «اضطررت»، «استطعت»، «لم يُسمح لي» — وهذه كلها تمرّ بهذا الباب حصراً.",
      table: {
        title: "المصدر المزدوج مقابل اسم المفعول",
        columns: ["الحالة", "الصيغة", "مثال"],
        rows: [
          { label: "مودالي + فعل رئيسي", cells: ["مصدر + مصدر", "Ich habe arbeiten müssen."] },
          { label: "مودالي وحده", cells: ["اسم مفعول", "Ich habe es nicht gekonnt."] },
          { label: "فعل حركي رئيسي", cells: ["المساعد يبقى haben", "Er hat gehen müssen."] },
          { label: "في جملة تابعة", cells: ["hat يتقدّم المصدرين", "…, weil er hat arbeiten müssen."] },
          { label: "الماضي البسيط (أشيع)", cells: ["musste + مصدر", "Ich musste arbeiten."] },
        ],
      },
      examples: [
        { de: "Ich habe gestern bis Mitternacht arbeiten müssen.", ar: "اضطررت أمس إلى العمل حتى منتصف الليل." },
        { de: "Wir haben den Termin leider verschieben müssen.", ar: "اضطررنا للأسف إلى تأجيل الموعد." },
        { de: "Sie hat die Prüfung nicht wiederholen müssen.", ar: "لم تضطرّ إلى إعادة الامتحان." },
        { de: "Er hat als Kind nie früh aufstehen dürfen.", ar: "لم يكن مسموحاً له في طفولته أن ينهض باكراً." },
        { de: "Ich habe es einfach nicht gekonnt.", ar: "لم أستطع ذلك ببساطة." },
      ],
      comparisonWithArabic:
        "«اضطررتُ أن أعمل» تترجَم Ich habe arbeiten müssen حرفياً «لديّ عمل اضطرار». العربية تصرّف فعل الاضطرار وتُبقي الثاني منصوباً بـ«أن»، والألمانية تُجرّد الفعلين معاً إلى المصدر وتحمّل الزمن على haben وحده. من يترجم حرفياً يكتب habe gemusst zu arbeiten — وهي غير موجودة في الألمانية.",
      eselsbruecke:
        "«مصدران في الذيل، والمودالي آخرهم». وإن لم يكن معك فعل رئيسي فعد إلى اسم المفعول: gekonnt وحدها، müssen مع رفيق.",
      commonMistakes: [
        { wrong: "Ich habe arbeiten gemusst.", right: "Ich habe arbeiten müssen.", whyAr: "مع فعل رئيسي يتحوّل المودالي إلى مصدر لا اسم مفعول." },
        { wrong: "Ich bin gehen müssen.", right: "Ich habe gehen müssen.", whyAr: "المصدر المزدوج يأخذ haben دائماً، ولو كان الفعل الرئيسي حركياً." },
        { wrong: "…, weil ich arbeiten müssen habe.", right: "…, weil ich habe arbeiten müssen.", whyAr: "في الجملة التابعة يتقدّم الفعل المصرَّف على المصدرين — استثناء نادر لترتيب الجملة التابعة." },
      ],
      relatedRuleComparison: {
        title: "Perfekt أم Präteritum مع المودالي؟",
        content:
          "الماضي البسيط أشيع بكثير مع الأفعال المودالية حتى في الكلام: Ich musste arbeiten أخفّ من Ich habe arbeiten müssen. استعمل المصدر المزدوج حين يفرضه السياق (بعد dass أو في سرد متّصل بالحاضر)، ولا تتكلّفه في كل جملة.",
      },
    },
    {
      id: "t3",
      titleAr: "lassen وأفعال الإدراك: sehen، hören",
      titleDe: "lassen, sehen und hören im Perfekt",
      explanationAr:
        "ثلاثة أفعال تسلك سلوك المودالي في الماضي التام: lassen (يدع/يجعل غيره يفعل)، وsehen وhören. فتقول Ich habe das Auto reparieren lassen (جعلتُهم يُصلحون السيارة) لا habe reparieren gelassen. وlassen بمعنى «التكليف» من أكثر التراكيب استعمالاً في الحياة اليومية الألمانية: كل خدمة تطلبها من غيرك تمرّ بها. أمّا حين يقف lassen وحده بمعنى «يترك» فيعود اسم مفعول عادياً: Ich habe den Schlüssel zu Hause gelassen.",
      whyAr:
        "لماذا تُجمع هذه الأفعال مع المودالية؟ لأنّها كلها «أفعال إطار»: لا تصف حدثاً بذاتها بل تؤطّر حدثاً آخر — الاضطرار إليه، أو تكليف غيرك به، أو إدراكه بالحسّ. والألمانية تعامل الإطار معاملة واحدة: مصدر في الذيل.",
      table: {
        title: "أفعال الإطار في الماضي التام",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "lassen (تكليف)", cells: ["يجعل غيره يفعل", "Ich habe das Auto reparieren lassen."] },
          { label: "lassen (وحده)", cells: ["يترك — اسم مفعول", "Ich habe den Schlüssel gelassen."] },
          { label: "sehen", cells: ["يرى حدثاً يقع", "Ich habe ihn kommen sehen."] },
          { label: "hören", cells: ["يسمع حدثاً يقع", "Wir haben sie singen hören."] },
          { label: "المساعد", cells: ["haben دائماً", "Er hat sich die Haare schneiden lassen."] },
        ],
      },
      examples: [
        { de: "Ich habe mein Fahrrad reparieren lassen.", ar: "أعطيت درّاجتي لتُصلَّح." },
        { de: "Sie hat sich die Haare schneiden lassen.", ar: "قصّت شعرها (عند الحلاق)." },
        { de: "Wir haben ihn nicht kommen sehen.", ar: "لم نره قادماً." },
        { de: "Ich habe die Kinder im Garten spielen hören.", ar: "سمعت الأطفال يلعبون في الحديقة." },
        { de: "Er hat den Mantel im Büro gelassen.", ar: "ترك المعطف في المكتب." },
      ],
      comparisonWithArabic:
        "«أصلحتُ السيارة» في العربية غامضة: بيدي أم بيد غيري؟ والألمانية تحسمها: Ich habe das Auto repariert (بنفسي) مقابل Ich habe das Auto reparieren lassen (كلّفت غيري). هذا التمييز إلزامي في الألمانية ولا مقابل صرفي له في العربية، فهو من أكثر ما يُنسى.",
      eselsbruecke:
        "«ثلاثة تتشبّه بالمودالية: lassen وsehen وhören». وميزان lassen: إن كان بعده فعل آخر فهو مصدر، وإن وقف وحده فهو gelassen.",
      commonMistakes: [
        { wrong: "Ich habe das Auto reparieren gelassen.", right: "Ich habe das Auto reparieren lassen.", whyAr: "مع فعل تالٍ يبقى lassen مصدراً." },
        { wrong: "Ich habe ihn kommen gesehen sehen.", right: "Ich habe ihn kommen sehen.", whyAr: "مصدران فقط: الفعل الرئيسي ثم sehen." },
        { wrong: "Ich habe das Auto repariert lassen.", right: "Ich habe das Auto reparieren lassen.", whyAr: "الفعل الأول مصدر لا اسم مفعول." },
      ],
      relatedRuleComparison: {
        title: "reparieren أم reparieren lassen؟",
        content:
          "الفرق فرق مسؤولية لا أسلوب: Ich habe die Wohnung renoviert تعني أنّك طليت بيدك، وIch habe die Wohnung renovieren lassen تعني أنّك استأجرت من فعل. في تقرير رسمي أو مطالبة تأمين يغيّر هذا الاختيار المعنى القانوني كلّه.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "في دار النشر",
        lines: [
          { speaker: "Redakteurin", de: "Kennen Sie den Autor, dessen Romane wir übersetzen?", ar: "هل تعرفين الكاتب الذي نترجم رواياته؟" },
          { speaker: "Karim", de: "Natürlich. Das ist der Schriftsteller, dessen Bücher in Tunesien sehr beliebt sind.", ar: "بالطبع. إنه الأديب الذي كتبه محبوبة جداً في تونس." },
          { speaker: "Redakteurin", de: "Wir haben den Termin leider verschieben müssen.", ar: "اضطررنا للأسف إلى تأجيل الموعد." },
          { speaker: "Karim", de: "Wegen der Kollegin, deren Vortrag ausgefallen ist?", ar: "بسبب الزميلة التي أُلغيت محاضرتها؟" },
          { speaker: "Redakteurin", de: "Genau. Sie hat kurzfristig absagen müssen.", ar: "بالضبط. اضطرت إلى الاعتذار في اللحظة الأخيرة." },
        ],
      },
      {
        id: "l2",
        title: "بعد العطلة",
        lines: [
          { speaker: "Nora", de: "Ich habe mein Auto reparieren lassen. Es war teuer.", ar: "أعطيت سيارتي لتُصلَّح. كان الأمر مكلفاً." },
          { speaker: "Jonas", de: "Bei dem Mechaniker, dessen Werkstatt am Bahnhof ist?", ar: "عند الميكانيكي الذي ورشته قرب المحطة؟" },
          { speaker: "Nora", de: "Ja. Ich habe zwei Tage warten müssen.", ar: "نعم. اضطررت إلى الانتظار يومين." },
          { speaker: "Jonas", de: "Ich habe dich gestern telefonieren hören. Klang stressig.", ar: "سمعتك تتحدثين في الهاتف أمس. بدا الأمر مرهقاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie beschreibt Karim den Schriftsteller?",
        questionAr: "كيف يصف كريم الأديب؟",
        options: [
          "Der Schriftsteller, dessen Bücher in Tunesien beliebt sind",
          "Der Schriftsteller, deren Bücher beliebt sind",
          "Der Schriftsteller, den die Bücher beliebt sind",
          "Der Schriftsteller, dessen die Bücher beliebt sind",
        ],
        correctIndex: 0,
        explanation: "المرجع der Schriftsteller مذكّر ⇒ dessen، والاسم بعده بلا أداة تعريف.",
        errorType: "case",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was musste die Kollegin tun?",
        questionAr: "ماذا اضطرت الزميلة أن تفعل؟",
        options: ["Sie hat absagen müssen", "Sie hat abgesagt gemusst", "Sie ist absagen müssen", "Sie hat absagen gemusst"],
        correctIndex: 0,
        explanation: "مصدر مزدوج مع haben: hat absagen müssen.",
        errorType: "conjugation",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wer hat das Auto repariert?",
        questionAr: "من أصلح السيارة؟",
        options: ["Der Mechaniker", "Nora selbst", "Jonas", "Niemand"],
        correctIndex: 0,
        explanation: "قالت reparieren lassen ⇒ كلّفت غيرها، أي الميكانيكي.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الإسناد: ss المشدّدة وe غير المنبورة وحرف r في النهاية",
    items: [
      { de: "dessen", ar: "الذي (مضاف إليه، مذكّر)", note: "ss قصيرة حادّة والحركة قبلها قصيرة، وe الثانية مختزلة: دِسّـِن" },
      { de: "deren", ar: "التي/الذين (مضاف إليه)", note: "e الأولى طويلة مفتوحة وr خفيفة في الحلق: ديـرِن" },
      { de: "müssen", ar: "يجب", note: "ü شفتان مستديرتان مع نطق i، وss قصيرة: مُيسِّن" },
      { de: "lassen", ar: "يدع/يكلّف", note: "a قصيرة لأنّ ss تقصّر ما قبلها: لاسِّن" },
      { de: "der Autor", ar: "الكاتب", note: "النبر على المقطع الثاني، وr النهائية تُلفظ حركة خفيفة: أوتوأ" },
      { de: "übersetzen", ar: "يترجم", note: "ü في البداية، وtz = تس، والنبر على setz: أوبَرزِتسِن" },
    ],
    tip: "قاعدة ss: الحرف المزدوج ss يعني أنّ الحركة قبله قصيرة (dessen، müssen، lassen) — بخلاف ß التي تأتي بعد حركة طويلة (Straße). طول الحركة هنا هو ما يفرّق الكلمة عن أختها.",
    shadowing: [
      { de: "Der Autor, dessen Roman ich lese, kommt aus Wien.", ar: "الكاتب الذي أقرأ روايته من فيينا.", tip: "dessen — مالك مذكّر" },
      { de: "Die Frau, deren Auto dort steht, ist meine Chefin.", ar: "المرأة التي سيارتها هناك هي مديرتي.", tip: "deren — مالكة مؤنّثة" },
      { de: "Ich habe gestern lange arbeiten müssen.", ar: "اضطررت أمس إلى العمل طويلاً.", tip: "مصدر مزدوج" },
      { de: "Wir haben das Fahrrad reparieren lassen.", ar: "أعطينا الدرّاجة لتُصلَّح.", tip: "lassen — تكليف" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "ادمج الجملتين في جملة نسبية بـ dessen أو deren:",
      prompt: "Ich kenne einen Autor. Seine Romane sind berühmt.",
      acceptedAnswers: [
        "Ich kenne einen Autor, dessen Romane berühmt sind",
        "Ich kenne einen Autor, dessen Romane berühmt sind.",
      ],
      sampleAnswer: "Ich kenne einen Autor, dessen Romane berühmt sind.",
      explanation: "المالك مذكّر ⇒ dessen، والفعل المصرَّف في نهاية الجملة النسبية.",
      errorType: "case",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالمصدر المزدوج الصحيح:",
      template: "Ich habe gestern das Auto ___ ___ . Es war kaputt.",
      blanks: [
        { correct: "reparieren", options: ["reparieren", "repariert", "zu reparieren"] },
        { correct: "lassen", options: ["lassen", "gelassen", "lässt"] },
      ],
      explanation: "التكليف: haben + مصدر الفعل الرئيسي + lassen بالمصدر.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Kollegin, deren Vortrag wir gehört haben, arbeitet hier.",
      explanation: "deren للمالكة المؤنّثة، والاسم بعدها بلا أداة تعريف: deren Vortrag.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي الصحيح:",
      questionDe: "Der Autor, ___ Romane übersetzt wurden, lebt in Berlin.",
      options: ["dessen", "deren", "den", "der"],
      correctIndex: 0,
      explanation: "der Autor مذكّر ⇒ dessen.",
      errorType: "case",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي الصحيح:",
      questionDe: "Die Frau, ___ Auto dort steht, ist meine Chefin.",
      options: ["deren", "dessen", "die", "der"],
      correctIndex: 0,
      explanation: "die Frau مؤنّثة ⇒ deren، ولو كان المملوك محايداً (das Auto).",
      errorType: "case",
    },
    {
      id: "e3",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي الصحيح:",
      questionDe: "Die Studenten, ___ Noten sehr gut sind, bekommen ein Stipendium.",
      options: ["deren", "dessen", "die", "denen"],
      correctIndex: 0,
      explanation: "الجمع ⇒ deren.",
      errorType: "case",
    },
    {
      id: "e4",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير النسبي المناسب:",
      template: "Das Kind, ___ Eltern im Ausland leben, wohnt bei den Großeltern.",
      blanks: [{ correct: "dessen", options: ["dessen", "deren", "das"] }],
      explanation: "das Kind محايد ⇒ dessen.",
      errorType: "case",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Der Mann, deren Sohn studiert, ist Arzt.",
      wrongWord: "deren",
      correctWord: "dessen",
      options: ["dessen", "deren", "den", "dem"],
      explanation: "المرجع der Mann مذكّر ⇒ dessen لا deren.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "multiple-choice",
      instructionAr: "أيّ جملة صحيحة؟ انتبه لما يلي الضمير النسبي:",
      questionDe: "Welcher Satz ist korrekt?",
      options: [
        "Ich kenne die Nachbarin, deren Hund immer bellt.",
        "Ich kenne die Nachbarin, deren der Hund immer bellt.",
        "Ich kenne die Nachbarin, dessen Hund immer bellt.",
        "Ich kenne die Nachbarin, deren ihr Hund immer bellt.",
      ],
      correctIndex: 0,
      explanation: "المالكة مؤنّثة ⇒ deren، ولا تأتي بعدها أداة تعريف ولا ضمير مِلكية.",
      errorType: "article",
    },
    {
      id: "e7",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Der", "Kollege,", "dessen", "Büro", "neben", "meinem", "ist,", "kommt", "aus", "Wien", "."],
      correctSentence: "Der Kollege, dessen Büro neben meinem ist, kommt aus Wien.",
      explanation: "الجملة النسبية تتوسّط، وفعلها المصرَّف (ist) في نهايتها.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة للماضي التام:",
      questionDe: "Ich ___ gestern bis Mitternacht arbeiten ___ .",
      options: ["habe … müssen", "bin … müssen", "habe … gemusst", "habe … zu müssen"],
      correctIndex: 0,
      explanation: "مصدر مزدوج: haben + arbeiten + müssen.",
      errorType: "conjugation",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Wir haben den Termin verschieben gemusst.",
      wrongWord: "gemusst",
      correctWord: "müssen",
      options: ["müssen", "gemusst", "gemüsst", "musste"],
      explanation: "مع فعل رئيسي يتحوّل المودالي إلى مصدر: verschieben müssen.",
      errorType: "conjugation",
    },
    {
      id: "e10",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Er ist gestern früh gehen müssen.",
      wrongWord: "ist",
      correctWord: "hat",
      options: ["hat", "ist", "war", "wurde"],
      explanation: "المصدر المزدوج يأخذ haben دائماً حتى مع فعل حركي.",
      errorType: "conjugation",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل المساعد والمصدر:",
      template: "Sie ___ sich die Haare schneiden ___ .",
      blanks: [
        { correct: "hat", options: ["hat", "ist", "war"] },
        { correct: "lassen", options: ["lassen", "gelassen", "lässt"] },
      ],
      explanation: "تكليف الغير: hat … schneiden lassen.",
      errorType: "conjugation",
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "أيّ جملة تعني أنّ شخصاً آخر أصلح السيارة؟",
      questionDe: "Welcher Satz bedeutet: eine andere Person hat das Auto repariert?",
      options: [
        "Ich habe das Auto reparieren lassen.",
        "Ich habe das Auto repariert.",
        "Ich habe das Auto reparieren wollen.",
        "Ich habe das Auto gelassen.",
      ],
      correctIndex: 0,
      explanation: "lassen + مصدر = تكليف الغير بالفعل.",
      errorType: "vocabulary",
    },
    {
      id: "e13",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Ich", "habe", "die", "Kinder", "im", "Garten", "spielen", "hören", "."],
      correctSentence: "Ich habe die Kinder im Garten spielen hören.",
      explanation: "أفعال الإدراك تسلك سلوك المودالية: مصدران في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e14",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى الماضي التام بالمصدر المزدوج:",
      prompt: "Ich musste gestern lange warten.",
      acceptedAnswers: [
        "Ich habe gestern lange warten müssen",
        "Ich habe gestern lange warten müssen.",
      ],
      sampleAnswer: "Ich habe gestern lange warten müssen.",
      explanation: "musste ⇒ habe … warten müssen.",
      errorType: "conjugation",
    },
    {
      id: "e15",
      type: "matching",
      instructionAr: "طابق كل تركيب بمعناه:",
      pairs: [
        { left: "dessen", right: "مالك مذكّر أو محايد" },
        { left: "deren", right: "مالكة مؤنّثة أو جمع" },
        { left: "reparieren lassen", right: "يكلّف غيره بالإصلاح" },
        { left: "arbeiten müssen", right: "يضطرّ إلى العمل" },
      ],
      explanation: "الشكل يتبع المالك، وlassen تنقل الفعل إلى غيرك.",
      errorType: "vocabulary",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Der Autor, deren Romane bekannt sind.",
        right: "Der Autor, dessen Romane bekannt sind.",
        whyAr: "المطابقة مع المالك السابق لا مع المملوك التالي — أشيع خطأ في هذا الباب.",
      },
      {
        wrong: "die Frau, deren das Auto kaputt ist",
        right: "die Frau, deren Auto kaputt ist",
        whyAr: "لا أداة تعريف بعد dessen/deren إطلاقاً.",
      },
      {
        wrong: "Ich habe arbeiten gemusst.",
        right: "Ich habe arbeiten müssen.",
        whyAr: "وجود فعل رئيسي يحوّل المودالي إلى مصدر.",
      },
      {
        wrong: "Ich bin gehen müssen.",
        right: "Ich habe gehen müssen.",
        whyAr: "المصدر المزدوج لا يقبل sein ولو كان الفعل حركياً.",
      },
    ],
    eselsbruecken: [
      "اسأل عن المالك لا عن المملوك: رجل أو طفل ⇒ dessen، امرأة أو جماعة ⇒ deren.",
      "بعد dessen/deren اسم عارٍ — إن رأيت der أو die بعدها فاحذفها.",
      "فعل رئيسي حاضر ⇒ مصدران وhaben. مودالي وحيد ⇒ اسم مفعول.",
    ],
    culturalNote: {
      title: "لماذا يقول الألماني «schneiden lassen» ولا يقول «قصصت شعري»؟",
      content:
        "الألمانية تفصل بدقّة بين من ينفّذ العمل ومن يطلبه، وهذا انعكاس لثقافة تخصّص مهني صارم: الحلاق يقصّ، والميكانيكي يُصلح، وأنت تكلّف. فحين تقول Ich habe meine Haare geschnitten يفهم المستمع حرفياً أنّك أمسكت المقصّ بنفسك. في تونس والعالم العربي نقول «قصصت شعري» ونعني الحلاق بلا لبس — أمّا في الألمانية فالتمييز إلزامي، وإهماله يُحدث سوء فهم طريفاً في المحادثة اليومية.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي الصحيح:",
      questionDe: "Das ist die Kollegin, ___ Vortrag wir gehört haben.",
      options: ["deren", "dessen", "die", "der"],
      correctIndex: 0,
      explanation: "die Kollegin مؤنّثة ⇒ deren.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Er ___ die Prüfung leider wiederholen ___ .",
      options: ["hat … müssen", "ist … müssen", "hat … gemusst", "hat … zu müssen"],
      correctIndex: 0,
      explanation: "مصدر مزدوج مع haben.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير النسبي المناسب:",
      template: "Die Nachbarn, ___ Hund immer bellt, sind umgezogen.",
      blanks: [{ correct: "deren", options: ["deren", "dessen", "die"] }],
      explanation: "die Nachbarn جمع ⇒ deren.",
      errorType: "case",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Ich habe mein Fahrrad reparieren gelassen.",
      wrongWord: "gelassen",
      correctWord: "lassen",
      options: ["lassen", "gelassen", "lässt", "ließ"],
      explanation: "مع فعل تالٍ يبقى lassen مصدراً.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Ich", "kenne", "den", "Arzt,", "mit", "dessen", "Hilfe", "du", "einen", "Termin", "bekommst", "."],
      correctSentence: "Ich kenne den Arzt, mit dessen Hilfe du einen Termin bekommst.",
      explanation: "حرف الجر يسبق dessen، والاسم بعدها بلا أداة تعريف.",
      errorType: "word-order",
    },
  ],

  flashcards: [
    { id: "fc1", de: "dessen", ar: "الذي (مِلكية، مذكّر/محايد)", example: "Der Autor, dessen Roman ich lese.", exampleAr: "الكاتب الذي أقرأ روايته.", level: "B2" },
    { id: "fc2", de: "deren", ar: "التي/الذين (مِلكية، مؤنّث/جمع)", example: "Die Frau, deren Auto dort steht.", exampleAr: "المرأة التي سيارتها هناك.", level: "B2" },
    { id: "fc3", de: "arbeiten müssen", ar: "يضطرّ إلى العمل", example: "Ich habe lange arbeiten müssen.", exampleAr: "اضطررت إلى العمل طويلاً.", level: "B2" },
    { id: "fc4", de: "reparieren lassen", ar: "يكلّف غيره بالإصلاح", example: "Ich habe das Auto reparieren lassen.", exampleAr: "أعطيت السيارة لتُصلَّح.", level: "B2" },
    { id: "fc5", de: "der Schriftsteller", ar: "الأديب", example: "Der Schriftsteller wohnt in Wien.", exampleAr: "الأديب يسكن في فيينا.", level: "B2" },
    { id: "fc6", de: "der Vortrag", ar: "المحاضرة", example: "Ihr Vortrag war spannend.", exampleAr: "كانت محاضرتها مشوّقة.", level: "B2" },
    { id: "fc7", de: "die Werkstatt", ar: "الورشة", example: "Die Werkstatt ist am Bahnhof.", exampleAr: "الورشة قرب المحطة.", level: "B2" },
    { id: "fc8", de: "verschieben", ar: "يؤجّل", example: "Wir haben den Termin verschoben.", exampleAr: "أجّلنا الموعد.", level: "B2" },
    { id: "fc9", de: "absagen", ar: "يعتذر عن/يلغي", example: "Sie hat kurzfristig abgesagt.", exampleAr: "اعتذرت في اللحظة الأخيرة.", level: "B2" },
    { id: "fc10", de: "das Stipendium", ar: "المنحة الدراسية", example: "Er bekommt ein Stipendium.", exampleAr: "يحصل على منحة دراسية.", level: "B2" },
    { id: "fc11", de: "kurzfristig", ar: "في وقت قصير/على عجل", example: "Der Termin wurde kurzfristig geändert.", exampleAr: "غُيّر الموعد على عجل.", level: "B2" },
    { id: "fc12", de: "die Zugehörigkeit", ar: "الانتماء/التبعية", example: "Die Zugehörigkeit zur Gruppe ist wichtig.", exampleAr: "الانتماء إلى المجموعة مهمّ.", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-b2-11-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً ثقافياً بالعربية",
      sourceDe:
        "Der Schriftsteller, dessen Romane in zwölf Sprachen übersetzt wurden, kommt im Mai nach Tunis. Die Veranstalter haben den Termin einmal verschieben müssen, weil die Übersetzerin, deren Beitrag zentral ist, kurzfristig absagen musste.",
      taskAr: "لخّص لصديق: من الضيف، ولماذا تغيّر الموعد، ومن السبب.",
      modelAnswerAr:
        "«الأديب الذي تُرجمت رواياته إلى اثنتي عشرة لغة سيأتي إلى تونس في مايو. اضطرّ المنظّمون إلى تأجيل الموعد مرّة واحدة، لأنّ المترجمة التي مساهمتها أساسية اعتذرت في اللحظة الأخيرة.»",
      keyPointsAr: [
        "عرّفت الضيف ونقلت عدد لغات الترجمة (اثنتا عشرة)",
        "ذكرت سبب التأجيل (اعتذار المترجمة)",
        "أوضحت أهمية دور المترجمة في الفعالية",
      ],
    },
  ],

  interaction: [
    {
      id: "int-b2-11-1",
      scenarioAr: "في ورشة تصليح: تشرح ما حدث لسيارتك ولماذا تأخّرت.",
      scenarioDe: "Gespräch in einer Autowerkstatt.",
      strategyAr: "الاستراتيجية: افصل بوضوح بين ما فعلته بنفسك وما كلّفت به غيرك، واربط التفاصيل بجملة نسبية بدل جمل قصيرة متقطّعة.",
      rounds: [
        {
          speakerDe: "Guten Tag. Was ist mit Ihrem Wagen passiert?",
          speakerAr: "مرحباً. ماذا حدث لسيارتك؟",
          options: [
            {
              de: "Die Bremsen machen Geräusche. Ich habe sie letztes Jahr bei einem Kollegen prüfen lassen, dessen Werkstatt jetzt geschlossen ist.",
              ar: "الفرامل تصدر أصواتاً. فحصتها العام الماضي عند زميل ورشته مغلقة الآن.",
              best: true,
              replyDe: "Verstehe. Dann schauen wir uns die Bremsen zuerst an.",
              replyAr: "فهمت. إذن سنفحص الفرامل أولاً.",
            },
            {
              de: "Ich habe die Bremsen geprüft. Der Kollege. Die Werkstatt zu.",
              ar: "فحصت الفرامل. الزميل. الورشة مغلقة.",
              best: false,
              replyDe: "Entschuldigung, haben Sie selbst geprüft oder jemand anderes?",
              replyAr: "عذراً، هل فحصتها بنفسك أم شخص آخر؟",
            },
          ],
        },
        {
          speakerDe: "Warum sind Sie erst heute gekommen?",
          speakerAr: "لماذا أتيت اليوم فقط؟",
          options: [
            {
              de: "Ich habe die ganze Woche arbeiten müssen. Erst heute habe ich einen Termin bekommen.",
              ar: "اضطررت إلى العمل طوال الأسبوع. اليوم فقط حصلت على موعد.",
              best: true,
              replyDe: "Kein Problem. Wir können den Wagen heute noch prüfen.",
              replyAr: "لا مشكلة. يمكننا فحص السيارة اليوم.",
            },
            {
              de: "Ich bin arbeiten gemusst die ganze Woche.",
              ar: "كنت مضطراً للعمل طوال الأسبوع (بصياغة خاطئة).",
              best: false,
              replyDe: "Sie meinen sicher „Ich habe arbeiten müssen“. Kein Problem.",
              replyAr: "تقصد «Ich habe arbeiten müssen». لا مشكلة.",
            },
          ],
        },
      ],
    },
  ],
};
