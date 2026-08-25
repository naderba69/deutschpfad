import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-02: الصحة والطبيب — الجسم + المرض + sollen/nicht dürfen
 */
export const lessonA202: Lesson = {
  id: "a2-02",
  unitId: "a2-02",
  level: "A2",
  order: 1,
  titleDe: "Beim Arzt",
  titleAr: "الصحة والطبيب",
  duration: 35,
  summary:
    "أربع بنى لوصف الألم (haben + Schmerzen · tut weh · mir ist schlecht · sich fühlen)، وسُلّم النصح والمنع: sollen وsollten مقابل الفرق الحاسم بين nicht dürfen (تحريم) وnicht müssen (إعفاء)، ومسار العيادة كاملاً من حجز الموعد إلى الوصفة والشهادة المرضية والإحالة، وأفعال الصحة الانعكاسية — مع نصّ «Drei Tage Grippe».",

  lernziele: [
    { id: "z1", de: "Ich kann Beschwerden auf vier verschiedene Arten ausdrücken.", ar: "أن أصف شكواي بأربع بنى مختلفة: haben + Schmerzen · tut weh · mir ist … · sich fühlen." },
    { id: "z2", de: "Ich kann Ratschläge mit sollen und sollten geben.", ar: "أن أنصح بـsollen وأُلطّف النصيحة بـsollten." },
    { id: "z3", de: "Ich kann ein Verbot von einer Befreiung unterscheiden.", ar: "أن أفرّق بين nicht dürfen (ممنوع) وnicht müssen (غير لازم) في الفهم والإنتاج." },
    { id: "z4", de: "Ich kann einen Termin vereinbaren und beim Arzt über meine Symptome sprechen.", ar: "أن أحجز موعداً وأن أجيب عن «Was fehlt Ihnen?» بأعراضٍ مرتّبة." },
    { id: "z5", de: "Ich kann Rezept, Krankschreibung und Überweisung unterscheiden.", ar: "أن أميّز الوصفة من الشهادة المرضية من الإحالة، وأعرف جهة كلٍّ منها." },
    { id: "z6", de: "Ich kann reflexive Verben zum Thema Gesundheit benutzen.", ar: "أن أستعمل أفعال الصحة الانعكاسية: sich fühlen, sich ausruhen, sich erholen, sich erkälten." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "كيف تقول «يجب أن» بالعربية؟ في الألمانية الفعل sollen (ينبغي) — وهو أحد «الأفعال الشرطية» الستة التي سنتقنها تباعاً في هذا المستوى. لاحظ شيئاً غريباً: في الألمانية «يجب أن أشرب» تُبنى بفعلين معاً!",
    motivatingQuestionDe: "Was fehlt Ihnen?",
    contextAr:
      "زيارة الطبيب: نتعلم أجزاء الجسم والأعراض، ثم نضيف أول أفعالنا الشرطية: sollen (ينبغي) — أداة النصيحة المثالية عند الطبيب.",
    contextDe: "Ich habe Kopfschmerzen und Fieber.",
    connectionToPreviousAr: "تتذكر من A1: Ich habe Hunger (عندي جوع). اليوم نعمم: Ich habe Kopfschmerzen (عندي صداع) — نفس البنية مع haben + اسم.",
    activateVocabulary: [
      { de: "der Körper", ar: "الجسم" },
      { de: "der Kopf", ar: "الرأس" },
      { de: "die Schmerzen", ar: "الآلام" },
      { de: "der Termin", ar: "الموعد" },
      { de: "der Arzt", ar: "الطبيب" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-03 — الطعام والشراب): اختر الصيغة الصحيحة:",
      questionDe: "Ich habe ___.",
      questionAr: "عندي جوع.",
      options: ["Hunger", "hungrig", "der Hunger", "hunger"],
      correctIndex: 0,
      explanation: "تذكر: Ich habe Hunger (الجوع اسم مع haben).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-10 — العمل والمهن): اختر المؤنث الصحيح:",
      questionDe: "der Arzt → die ___",
      options: ["Ärztin", "Arztin", "Ärzte", "Ärztinnen"],
      correctIndex: 0,
      explanation: "المهن: Arzt → Ärztin (مع Umlaut).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "word-ordering",
      instructionAr: "مراجعة من A1 (درس a1-09 — المواعيد والتقويم): رتّب الجملة:",
      tokens: ["ist", "Der", "Termin", "Montag", "am", "."],
      correctSentence: "Der Termin ist am Montag.",
      explanation: "الموعد يوم الاثنين: am + يوم.",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "وصف الألم — أربع بنى لا واحدة",
      titleDe: "Körper, Symptome und Schmerzen",
      explanationAr:
        "الألم لا يُوصف في الألمانية ببنيةٍ واحدة بل بأربع، ولكلٍّ منها موضعها. ومن حفظ واحدةً فقط ظلّ يكرّرها في كلّ موقف فبدا كلامه فقيراً — والطبيب يحتاج التفصيل لا العبارة الجاهزة.\n\n**البنية الأولى — haben + اسم الألم (الأشيع والأسهل):**\n**Ich habe Kopfschmerzen.** · **Ich habe Fieber.** · **Ich habe Husten.**\nوالتركيب مطّرد: **العضو + schmerzen** ⟵ Kopf**schmerzen** · Bauch**schmerzen** · Rücken**schmerzen** · Hals**schmerzen** · Zahn**schmerzen**.\nفمن عرف عشرة أعضاء عرف عشرة آلام بلا حفظٍ إضافيّ.\n\n**البنية الثانية — العضو + tut weh (أدقّ حين يكون الألم موضعياً):**\n**Mein Rücken tut weh.** · **Meine Augen tun weh.** (جمعٌ ⟵ tun لا tut)\nوحرفياً: „ظهري يفعل ألماً“. وweh صفةٌ قديمة معناها „مؤلم“، وtun هو „يفعل“.\n\n**البنية الثالثة — الدّاتيف للإحساس العامّ:**\n**Mir ist schlecht.** (أشعر بالغثيان) · **Mir ist schwindelig.** (أشعر بالدوار) · **Mir ist heiß / kalt.**\nوهذه هي البنية نفسها التي عرفتَها في a1-12 (Mir ist kalt) وفي gefallen: **الإحساس يقع على الشخص فيُجرّ**.\nوالخطأ المقابل خطير: **Ich bin schlecht** تعني „أنا شخصٌ سيّئ“ لا „أشعر بالغثيان“.\n\n**البنية الرابعة — sich fühlen للحالة العامّة:**\n**Ich fühle mich nicht gut.** · **Ich fühle mich schwach.** (بالمنصوب: mich لا mir)\n\n**وأداتان لا تستغني عنهما عند الطبيب:**\n· **المدّة بـseit + الجرّ:** Ich habe **seit drei Tagen** Halsschmerzen. (منذ ثلاثة أيّام)\n· **الشدّة:** leicht (خفيف) ⟵ stark (شديد) ⟵ sehr stark. وقُل **Es tut sehr weh** لا Es tut viel weh.",
      whyAr:
        "لماذا يضع الألمانيّ نفسه في حالة الجرّ حين يشعر (mir ist schlecht) بينما يضعها في الرفع حين يكون (ich bin krank)؟ لأنّ الألمانية تفرّق بين ما **أنتَ عليه** وما **يقع عليك**. المرض صفةٌ لك فترفعك (ich bin krank)، والإحساس العارض شيءٌ يصيبك من خارجك فيجرّك (mir ist schlecht). وهذا هو المنطق نفسه في das gefällt **mir** — الإعجاب يقع عليك ولا يصدر عنك.\n\nولهذا التمييز أثرٌ عمليّ خطير عند الطبيب: **Ich bin schlecht** تعني حرفياً „أنا رديء الأخلاق“، و**Ich bin heiß** لا تعني „أشعر بالحرّ“ بل معنىً جنسياً صريحاً. فالخطأ هنا ليس نحوياً فحسب بل محرجٌ اجتماعياً، وهو من أشهر زلّات المتعلّمين في العيادات الألمانية.\n\nولماذا جاء الألم جمعاً (Schmerzen)؟ لأنّ الألم في التصوّر الجرمانيّ **نوباتٌ متكرّرة** لا كتلةٌ واحدة: الرأس لا يؤلم ألماً واحداً مستمرّاً بل يَنبِض. والعربية توافق هذا التصوّر في „آلام“ و„أوجاع“، فالجمع هنا مفهومٌ لك بلا تكلّف. والمفرد der Schmerz موجود لكنّه للألم المجرّد أو الأدبيّ.",
      table: {
        title: "أربع بنى لوصف الألم — أيّها تستعمل؟",
        columns: ["البنية", "المثال", "متى؟"],
        rows: [
          { label: "haben + Schmerzen", cells: ["Ich habe Kopfschmerzen.", "الأشيع — لأيّ عضو"] },
          { label: "العضو + tut weh", cells: ["Mein Rücken tut weh.", "ألمٌ موضعيّ محدّد"] },
          { label: "العضو (جمع) + tun weh", cells: ["Meine Augen tun weh.", "الجمع ⟵ tun لا tut"] },
          { label: "mir ist + صفة", cells: ["Mir ist schlecht / schwindelig.", "إحساسٌ عامّ (غثيان، دوار)"] },
          { label: "sich fühlen", cells: ["Ich fühle mich nicht gut.", "الحالة العامّة — بالمنصوب mich"] },
          { label: "haben + عرَض", cells: ["Ich habe Fieber / Husten.", "الأعراض لا الآلام"] },
          { label: "المدّة", cells: ["seit drei Tagen", "seit + الجرّ دائماً"] },
        ],
      },
      examples: [
        { de: "Ich habe seit drei Tagen starke Halsschmerzen.", ar: "عندي ألمٌ شديد في الحلق منذ ثلاثة أيّام." },
        { de: "Mein Rücken tut weh, besonders am Morgen.", ar: "ظهري يؤلمني، خاصّةً في الصباح." },
        { de: "Meine Augen tun weh, ich arbeite zu viel am Computer.", ar: "عيناي تؤلماني، أعمل كثيراً على الحاسوب. (جمع ⟵ tun)" },
        { de: "Mir ist schlecht und schwindelig.", ar: "أشعر بالغثيان والدوار. (إحساسٌ عامّ ⟵ الجرّ)" },
        { de: "Ich fühle mich seit gestern sehr schwach.", ar: "أشعر بضعفٍ شديد منذ أمس." },
        { de: "Haben Sie Fieber? – Ja, achtunddreißig Grad.", ar: "أعندك حمّى؟ — نعم، ثمانٍ وثلاثون درجة." },
        { de: "Wo tut es weh? – Hier, im Bauch.", ar: "أين يؤلمك؟ — هنا، في البطن." },
        { de: "Ich bin erkältet und habe Schnupfen.", ar: "أنا مصابٌ بالزكام وعندي رشح. (erkältet صفةٌ ⟵ sein)" },
      ],
      comparisonWithArabic:
        "العربية تقول „عندي صداع“ و„رأسي يؤلمني“ — بنيتان تطابقان الأولى والثانية في الألمانية مطابقةً مريحة. فـ„عندي“ = ich habe، و„يؤلمني“ = tut mir weh. وهذا الباب من أيسر ما يقابله المتعلّم العربيّ.\n\nلكنّ الثالثة لا نظير لها. العربية تقول „أشعر بالغثيان“ بفعلٍ صريح، والألمانية تقول „لي سيّئٌ“ (mir ist schlecht) بلا فعل شعور. والمتعلّم العربيّ يبحث عن الفعل فلا يجده، فيلجأ إلى ich bin — ويقع في الخطأ المحرج.\n\nوثمّة فرقٌ ثقافيّ في **الشدّة**: العربية تُكثر المبالغة في وصف الألم مجاملةً للسامع أو استدراراً لعطفه („أموت من الألم“). والألمانية تتوقّع وصفاً **مقياسياً محايداً**: leicht · mittel · stark، وقد يسألك الطبيب صراحةً: **Auf einer Skala von eins bis zehn?** (على مقياسٍ من واحد إلى عشرة؟). فالمبالغة هنا لا تزيد العناية بل تُربك التشخيص.",
      eselsbruecke:
        "ما أنتَ عليه يرفعك (ich bin krank)، وما يقع عليك يجرّك (mir ist schlecht). والألم اسماً: العضو + schmerzen. والألم فعلاً: العضو + tut weh — وtun في الجمع (Augen tun weh).",
      commonMistakes: [
        {
          wrong: "Ich bin schlecht.",
          right: "Mir ist schlecht.",
          whyAr:
            "الأولى تعني «أنا شخصٌ سيّئ الأخلاق». والإحساس العارض يقع على الشخص فيُجرّ: mir. وهو المنطق نفسه في mir ist kalt من a1-12 وفي das gefällt mir.",
        },
        {
          wrong: "Ich bin Kopfschmerzen.",
          right: "Ich habe Kopfschmerzen.",
          whyAr:
            "Kopfschmerzen اسمٌ لا صفة، والأسماء المملوكة تأتي مع haben. وsein تصلح للصفات فقط: Ich bin krank ✔.",
        },
        {
          wrong: "Meine Augen tut weh.",
          right: "Meine Augen tun weh.",
          whyAr:
            "Augen جمعٌ فالفعل جمع: tun لا tut. ويكثر هذا الخطأ لأنّ المتعلّم يحفظ العبارة «tut weh» كتلةً واحدة لا يصرّفها.",
        },
        {
          wrong: "Ich habe Kopfschmerzen seit drei Tage.",
          right: "Ich habe seit drei Tagen Kopfschmerzen.",
          whyAr:
            "خطآن: seit تجرّ دائماً (drei Tagen بنون الجمع)، والظرف الزمنيّ يتقدّم على المفعول في المساحة الوسطى — بترتيب TeKaMoLo.",
        },
        {
          wrong: "Es tut viel weh.",
          right: "Es tut sehr weh.",
          whyAr:
            "viel للكمّية وsehr للشدّة، والألم شدّةٌ لا كمّية. والتمييز نفسه في oft (مرّات) مقابل viel (مقدار) من a1-05.",
        },
      ],
      relatedRuleComparison: {
        title: "الدّاتيف للإحساس — ثالث ظهورٍ له",
        content:
          "تابِع البنية الواحدة في ثلاثة دروس:\n· **Das gefällt mir.** (a1-08) ⟵ الإعجاب يقع عليك\n· **Mir ist kalt.** (a1-12) ⟵ الإحساس بالبرد يقع عليك\n· **Mir ist schlecht.** (اليوم) ⟵ الغثيان يقع عليك\nثلاثتها نمطٌ واحد: **الشخص ليس فاعلاً بل متلقّياً**، فيُجرّ. وستقابله في a2-09 مجموعاً في باب أفعال الدّاتيف.\n\nوالفائدة العملية: إذا شككتَ هل تقول ich أم mir، فاسأل نفسك: هل أنا **أفعل** هذا أم **يقع عليّ**؟ فالمرض حالٌ أنا فيها (ich bin krank)، والغثيان شيءٌ أصابني (mir ist schlecht).",
      },
    },
    {
      id: "t2",
      titleAr: "النصيحة والمنع: sollen · sollten · nicht dürfen · nicht müssen",
      titleDe: "Ratschläge und Verbote: sollen, sollten, nicht dürfen",
      explanationAr:
        "تعرف **sollen** من a1-14: إلزامٌ صادرٌ عن شخصٍ آخر. واليوم نُكمل المنظومة، لأنّ العيادة هي موطن النصيحة والمنع، وثمّة **أربع صيغ** يخلط بينها المتعلّمون خلطاً يقلب المعنى.\n\n**أوّلاً — sollen: نقلُ أمر الغير.**\n**Der Arzt sagt, ich soll viel trinken.** (يقول الطبيب إنّ عليّ أن أشرب كثيراً)\nفأنت هنا **راوٍ** لا آمر: تنقل ما قيل لك.\n\n**ثانياً — sollten: النصيحة المهذّبة (وهي صيغة Konjunktiv II).**\n**Sie sollten mehr schlafen.** (ينبغي لك أن تنام أكثر)\n| ich **sollte** · du **solltest** · er **sollte** · wir **sollten** · ihr **solltet** · sie/Sie **sollten** |\nوالفرق عن sollen جوهريّ: **sollen تنقل إلزاماً، وsollten تقترح**. والطبيب يستعمل الثانية غالباً لأنّها ألطف، وهي **الصيغة المتوقّعة منك** حين تنصح أحداً. وانتبه: صورتها مطابقة لـPräteritum (ich sollte)، والسياق يفصل.\n\n**ثالثاً — nicht dürfen = المنع (وهو الفخّ الأكبر).**\n**Sie dürfen nicht rauchen.** = **ممنوعٌ** عليك التدخين.\nفنفيُ الإذن ليس „عدم وجوب“ بل **تحريم**. وهذا يخالف حدس المتعلّم تماماً.\n\n**رابعاً — nicht müssen = لا لزوم (وهو نقيض ما يظنّه الأكثرون).**\n**Sie müssen nicht kommen.** = **لستَ مضطرّاً** للمجيء (لكن يجوز لك).\nوالخطأ الشائع أن يُفهم منها „يجب ألاّ تأتي“ — وهو معنىً معاكس تماماً.\n\n**فالقاعدة الحاسمة:**\n| **nicht dürfen** = ممنوع (تحريم) | **nicht müssen** = غير لازم (إعفاء) |\nوقُل لنفسك: من نفى الإذن **حرّم**، ومن نفى الوجوب **أعفى**.",
      whyAr:
        "لماذا ينقلب معنى النفي في müssen ولا ينقلب في dürfen؟ لأنّ النفي لا يقع على الفعل الناقص نفسه بل على **مضمونه**، والمضمونان مختلفان. dürfen تعني „الإذن ممنوح“، فنفيها ينزع الإذن ⟵ منع. وmüssen تعني „الضرورة قائمة“، فنفيها ينزع الضرورة ⟵ إعفاء لا منع. فما تراه شذوذاً هو منطقٌ صارم: نفيتَ ما كان مثبتاً، والمثبتان ليسا من جنسٍ واحد.\n\nوالإنجليزية تفعل الشيء نفسه بالضبط: must not = تحريم، ولا need not / don't have to = إعفاء. لكنّها تُنبّه عليه بفعلين مختلفين، والألمانية تكتفي بالنفي — فيقع اللبس على من لم يُنبَّه.\n\nوأمّا sollten فأصلها **Konjunktiv II**، أي صيغة الافتراض. وقولك „ينبغي“ بصيغة الافتراض معناه الضمنيّ: „لو كان الأمر بيدي لاقترحتُ“ — أي أنّك تُبعد نفسك خطوةً عن الأمر المباشر فتلطّفه. وهذا مبدأ التأدّب في الألمانية كلّها: **الابتعاد عن الواقع يزيد التهذيب**. ولذلك كانت möchte ألطف من will، وkönnten ألطف من können — وستراه كاملاً في B1.",
      table: {
        title: "النصيحة والمنع — أربع صيغ لا تختلط",
        columns: ["الصيغة", "المعنى", "المثال"],
        rows: [
          { label: "sollen", cells: ["نقلُ إلزام الغير", "Der Arzt sagt, ich soll viel trinken."] },
          { label: "sollten", cells: ["نصيحةٌ مهذّبة (اقتراح)", "Sie sollten mehr schlafen."] },
          { label: "müssen", cells: ["ضرورة", "Sie müssen das Medikament nehmen."] },
          { label: "nicht müssen", cells: ["غير لازم — إعفاء", "Sie müssen nicht kommen. (لكن يجوز)"] },
          { label: "dürfen", cells: ["إذن", "Sie dürfen aufstehen."] },
          { label: "nicht dürfen", cells: ["ممنوع — تحريم", "Sie dürfen nicht rauchen."] },
          { label: "kein + اسم", cells: ["نفي الاسم", "Sie dürfen keinen Alkohol trinken."] },
        ],
      },
      examples: [
        { de: "Der Arzt sagt, ich soll drei Tage im Bett bleiben.", ar: "يقول الطبيب إنّ عليّ البقاء في الفراش ثلاثة أيّام. (نقلُ أمر)" },
        { de: "Sie sollten weniger Kaffee trinken.", ar: "ينبغي لك أن تشرب قهوةً أقلّ. (نصيحةٌ مهذّبة)" },
        { de: "Sie dürfen nicht rauchen — das ist sehr wichtig.", ar: "ممنوعٌ عليك التدخين — هذا مهمّ جداً. (منع)" },
        { de: "Sie müssen nicht wiederkommen, wenn es Ihnen besser geht.", ar: "لستَ مضطرّاً للعودة إن تحسّنت حالك. (إعفاء لا منع)" },
        { de: "Du solltest mal zum Arzt gehen.", ar: "ينبغي لك أن تذهب إلى الطبيب. (نصيحةٌ لصديق — وmal تلطّفها أكثر)" },
        { de: "Sie dürfen keinen Sport machen, bis der Arm heilt.", ar: "ممنوعٌ عليك ممارسة الرياضة حتّى تُشفى الذراع." },
        { de: "Was soll ich jetzt machen? – Sie sollten sich ausruhen.", ar: "ماذا أفعل الآن؟ — ينبغي أن ترتاح. (سؤالٌ بـsollen وجوابٌ بـsollten)" },
        { de: "Muss ich das Medikament jeden Tag nehmen? – Nein, Sie müssen nicht.", ar: "أيجب أن آخذ الدواء كلّ يوم؟ — لا، لستَ مضطرّاً." },
      ],
      comparisonWithArabic:
        "العربية تنفي الوجوب والإذن بأدواتٍ متمايزة لا تلتبس: „لا يجوز لك“ (منع) مقابل „لا يلزمك“ (إعفاء). والفارق ظاهرٌ في الفعل نفسه (يجوز / يلزم)، فلا يحتاج المتكلّم العربيّ إلى تفكير.\n\nوالألمانية تضع النفي نفسه على فعلين مختلفين فيُنتج معنيين متعاكسين. فالمتعلّم العربيّ يترجم „لا يجب أن تأتي“ فيقول Sie müssen nicht kommen ظانّاً أنّه منَع — وقد أعفى. والعكس أخطر: من أراد أن يقول „لا يلزمك التدخين“ فقال Sie dürfen nicht rauchen فقد حرّم.\n\nوأمّا sollten فلها في العربية نظيرٌ لطيف: صيغة التحضيض „لولا فعلتَ“ و„حبّذا لو“ — وكلتاهما تُبعد الأمر عن المباشرة. فالعربية تعرف مبدأ التلطيف بالابتعاد، لكنّها لا تربطه بصيغةٍ صرفية ثابتة كما تفعل الألمانية بـKonjunktiv II. والفارق العمليّ: عليك أن **تتعلّم الصيغة** لا أن تعتمد على السياق.",
      eselsbruecke:
        "من نفى الإذن حرّم (nicht dürfen = ممنوع)، ومن نفى الوجوب أعفى (nicht müssen = غير لازم). وللنصيحة: sollten لا sollen — لأنّ الابتعاد عن المباشرة هو التهذيب.",
      commonMistakes: [
        {
          wrong: "Sie müssen nicht rauchen. (والمقصود: ممنوع التدخين)",
          right: "Sie dürfen nicht rauchen.",
          whyAr:
            "nicht müssen تعني «لستَ مضطرّاً للتدخين» — إعفاءٌ لا منع، والمعنى ينقلب تماماً. والمنع بـnicht dürfen وحدها.",
        },
        {
          wrong: "Sie dürfen nicht kommen. (والمقصود: لا داعي أن تأتي)",
          right: "Sie müssen nicht kommen.",
          whyAr:
            "الخطأ المعاكس: nicht dürfen تحريمٌ صريح، فتكون قد منعتَ المريض من المجيء بدل أن تعفيه. وهذا خطأٌ يُسبّب سوء فهمٍ حقيقياً.",
        },
        {
          wrong: "Sie sollen mehr schlafen. (نصيحةً من الطبيب)",
          right: "Sie sollten mehr schlafen.",
          whyAr:
            "sollen تنقل إلزاماً صادراً عن ثالثٍ، وsollten تقترح. والطبيب ينصح فيستعمل sollten، وهي كذلك الصيغة المتوقّعة منك في Sprechen حين تُطلب منك نصيحة.",
        },
        {
          wrong: "Sie dürfen nicht Alkohol trinken.",
          right: "Sie dürfen keinen Alkohol trinken.",
          whyAr:
            "nicht تنفي الأفعال والصفات، وkein ينفي الأسماء المنكّرة. وAlkohol اسمٌ بلا أداة فيلزمه kein — وهي قاعدة a1-10 تعمل داخل جملةٍ بفعلٍ ناقص.",
        },
        {
          wrong: "Du sollst zum Arzt gehen. (نصيحةً لصديق)",
          right: "Du solltest mal zum Arzt gehen.",
          whyAr:
            "sollst تبدو أمراً فظّاً بين الأصدقاء. وsolltest + mal هي الصيغة الودّية، وmal كلمةٌ صغيرة تلطّف الجملة كما تلطّفها bitte.",
        },
      ],
      relatedRuleComparison: {
        title: "الأفعال الناقصة الستّة — من A1 إلى A2",
        content:
          "أتممتَ الستّة في a1-14. وA2 لا يضيف فعلاً سابعاً بل **يضيف طبقةً** على ما تعرفه:\n· **النفي المنقلب:** nicht dürfen ≠ nicht müssen (اليوم)\n· **صيغة التلطيف:** sollten · könnten · dürfte (اليوم وb1-04)\n· **الماضي:** konnte · musste · wollte (a2-01)\n· **الناقص في الجملة الفرعية:** …, weil ich nicht kommen **konnte** (a2-10)\nفالمنظومة الواحدة تُستكمل على أربعة دروس، ولا يُطلب منك في أيّ منها أن تبدأ من الصفر.\n\nوستقابل في B1 استعمالاً ثالثاً لـsollen لم يُذكر بعد: **نقل خبرٍ غير مؤكّد** — Er **soll** sehr reich sein (يُقال إنّه ثريّ جداً). وهو امتدادٌ طبيعيّ لمعناها الأصليّ: نقلُ كلام الغير.",
      },
    },
    {
      id: "t3",
      titleAr: "في العيادة: من الاستقبال إلى الوصفة",
      titleDe: "In der Praxis: von der Anmeldung bis zum Rezept",
      explanationAr:
        "زيارة الطبيب في ألمانيا مسارٌ ثابت الخطوات، ولكلّ خطوةٍ عباراتها. ومن عرف المسار لم يرتبك — وهذا مطلوبٌ منك في **Sprechen Teil 2** من امتحان A2 حيث يُحاكى موقفٌ خدميّ كامل.\n\n**الخطوة الأولى — الموعد بالهاتف:**\n· **Praxis Dr. Weber, guten Tag!** — **Guten Tag, ich hätte gern einen Termin.**\n· **Waren Sie schon einmal bei uns?** (هل سبق أن زرتنا؟) — سؤالٌ يُطرح دائماً في المرّة الأولى.\n· **Passt Ihnen Dienstag um zehn?** — **Ja, das passt.** / **Nein, da kann ich leider nicht.**\n\n**الخطوة الثانية — الاستقبال (die Anmeldung):**\n· **Ihre Versichertenkarte, bitte.** (بطاقة التأمين من فضلك) — لا تُنسَ، فبدونها قد تُطالَب بالدفع نقداً.\n· **Nehmen Sie bitte im Wartezimmer Platz.** (تفضّل بالجلوس في غرفة الانتظار)\n\n**الخطوة الثالثة — عند الطبيب:**\n· **Was fehlt Ihnen?** — وهي حرفياً „ما الذي ينقصك؟“، ومعناها „ما شكواك؟“\n· **Seit wann haben Sie die Beschwerden?** (منذ متى تشكو؟)\n· **Machen Sie bitte den Oberkörper frei.** · **Atmen Sie tief ein.** (خذ نفساً عميقاً)\n\n**الخطوة الرابعة — النتيجة:**\n· **das Rezept** (الوصفة) ⟵ تُصرف في **die Apotheke** وحدها؛ والصيدلية الألمانية لا تبيع الدواء الموصوف بلا وصفة.\n· **die Krankschreibung** أو **der gelbe Schein** (الشهادة المرضية) — تُسلَّم لصاحب العمل، وهي حقٌّ قانونيّ لا منّة.\n· **die Überweisung** (إحالة إلى أخصّائي) — تحتاجها للانتقال من **der Hausarzt** (طبيب الأسرة) إلى **der Facharzt**.\n\n**وأداةٌ لغويّة تلزمك هنا: الأمر بصيغة Sie.**\nصيغة الأمر الرسمية تُبنى بقلب الترتيب: **الفعل + Sie** ⟵ **Nehmen Sie** · **Atmen Sie** · **Gehen Sie**. وهي الصيغة التي ستسمعها من الطبيب في كلّ جملة، فافهمها ولو لم تُنتجها كثيراً.",
      whyAr:
        "لماذا يسأل الألمانيّ „ما الذي ينقصك؟“ بدل „ما بك؟“؟ لأنّ الصحّة في التصوّر اللغويّ الألمانيّ **حالةٌ كاملة** والمرض **نقصٌ** فيها. فـfehlen (ينقص) هو الفعل نفسه في „Du fehlst mir“ (أفتقدك — حرفياً: تنقصني). ولاحظ أنّها من أفعال الدّاتيف: **Was fehlt Ihnen?** لا Ihnen منصوبة — فالنقص يقع عليك.\n\nولماذا هذا النظام الصارم من الوصفات والإحالات؟ لأنّ التأمين الصحّيّ الألمانيّ **إلزاميّ وشامل**، وثمنُ ذلك مسارٌ موثَّق: طبيب الأسرة بوّابة، والأخصّائيّ خلفها بإحالة، والدواء الموصوف بوصفة. فمن ذهب إلى الأخصّائيّ مباشرةً قد يُطالَب بالدفع من جيبه.\n\nوأمّا **الشهادة المرضية** فلها ثقلٌ ثقافيّ يجهله الوافد: في ألمانيا لا يُنتظر منك أن تعمل وأنت مريض، بل يُعدّ حضورك مريضاً **تصرّفاً غير مسؤول** لأنّك تنقل العدوى. والقانون يمنحك أيّاماً بأجرٍ كامل. فالمتعلّم القادم من ثقافةٍ تعدّ المرض عذراً يُستحيا منه يحتاج أن يعرف أنّ الأمر هنا **إجراءٌ عاديّ** لا استجداء.",
      table: {
        title: "مسار زيارة الطبيب — الخطوات وعباراتها",
        columns: ["الخطوة", "ما يُقال", "ملاحظة"],
        rows: [
          { label: "الهاتف", cells: ["Ich hätte gern einen Termin.", "صيغة الطلب المهذّبة"] },
          { label: "الاستقبال", cells: ["Ihre Versichertenkarte, bitte.", "بطاقة التأمين إلزامية"] },
          { label: "الانتظار", cells: ["Nehmen Sie bitte Platz.", "أمرٌ بصيغة Sie: الفعل أوّلاً"] },
          { label: "الشكوى", cells: ["Was fehlt Ihnen?", "حرفياً: ما الذي ينقصك؟ — فعل دّاتيف"] },
          { label: "الفحص", cells: ["Atmen Sie tief ein.", "خذ نفساً عميقاً"] },
          { label: "الدواء", cells: ["das Rezept ⟵ die Apotheke", "الوصفة تُصرف في الصيدلية وحدها"] },
          { label: "العمل", cells: ["die Krankschreibung", "الشهادة المرضية — حقٌّ قانونيّ"] },
          { label: "الأخصّائيّ", cells: ["die Überweisung", "إحالةٌ من طبيب الأسرة"] },
        ],
      },
      examples: [
        { de: "Guten Tag, ich hätte gern einen Termin. Ich habe starke Zahnschmerzen.", ar: "نهارك سعيد، أودّ موعداً. عندي ألمٌ شديد في الأسنان." },
        { de: "Waren Sie schon einmal bei uns? – Nein, ich bin neu hier.", ar: "هل سبق أن زرتنا؟ — لا، أنا جديد هنا." },
        { de: "Ihre Versichertenkarte, bitte. – Hier, bitte schön.", ar: "بطاقة التأمين من فضلك. — تفضّلي." },
        { de: "Was fehlt Ihnen denn? – Ich habe seit gestern Fieber.", ar: "ما شكواك؟ — عندي حمّى منذ أمس." },
        { de: "Ich schreibe Ihnen ein Rezept. Gehen Sie damit in die Apotheke.", ar: "سأكتب لك وصفة. اذهب بها إلى الصيدلية." },
        { de: "Können Sie mich bitte krankschreiben? Ich brauche das für meinen Arbeitgeber.", ar: "أيمكنك إعطائي شهادةً مرضية؟ أحتاجها لصاحب العمل." },
        { de: "Sie brauchen eine Überweisung zum Facharzt.", ar: "تحتاج إحالةً إلى الأخصّائيّ." },
        { de: "Gute Besserung! – Danke schön.", ar: "شفاءً عاجلاً! — شكراً جزيلاً. (تُقال دائماً في الوداع)" },
      ],
      comparisonWithArabic:
        "العبارة الختامية **Gute Besserung!** (شفاءً عاجلاً) تقابل „سلامتك“ و„ألف سلامة“ في العربية مقابلةً وظيفية تامّة، وهي تُقال في ألمانيا بالقدر نفسه من الاطّراد: من الطبيب والصيدليّ والزميل والجار. فمن أهملها بدا جافّاً.\n\nوالفارق الأكبر في **تفصيل الشكوى**. العربية تقبل الإجمال („تعبان شويّة“) ويتولّى الطبيب استخراج التفاصيل بالأسئلة. والطبيب الألمانيّ يتوقّع منك أن تُقدّم ثلاثة عناصر من تلقاء نفسك: **ما العَرَض · منذ متى · ما شدّته**. فمن اكتفى بالإجمال أطال الزيارة وأربك التشخيص.\n\nوأمّا **Was fehlt Ihnen?** فبنيةٌ لا نظير لها: العربية تقول „ما بك؟“ فتجعل المرض ظرفاً محيطاً بك، والألمانية تجعله نقصاً واقعاً عليك. والمتعلّم الذي يترجم حرفياً قد يظنّ السؤال عن حاجةٍ مادّية („ما الذي تحتاجه؟“) فيجيب إجابةً في غير محلّها.",
      eselsbruecke:
        "المسار خمس محطّات: موعد ← بطاقة تأمين ← Was fehlt Ihnen ← وصفة أو شهادة ← Gute Besserung. وقدّم ثلاثة عناصر بلا أن تُسأل: العَرَض · منذ متى · الشدّة.",
      commonMistakes: [
        {
          wrong: "Was fehlt Sie?",
          right: "Was fehlt Ihnen?",
          whyAr:
            "fehlen من أفعال الدّاتيف كـgefallen وhelfen، فالشخص يُجرّ لا يُنصب: Ihnen لا Sie. والقاعدة نفسها في Wie geht es Ihnen؟",
        },
        {
          wrong: "Ich will einen Termin.",
          right: "Ich hätte gern einen Termin.",
          whyAr:
            "wollen حازمة تبدو فظّةً في طلبٍ من موظّفة الاستقبال. وhätte gern هي الصيغة المعتمدة، وقسم Sprechen يُقيّم التهذيب بنداً مستقلّاً.",
        },
        {
          wrong: "Ich kaufe das Medikament im Supermarkt.",
          right: "Ich kaufe das Medikament in der Apotheke.",
          whyAr:
            "الدواء الموصوف لا يُباع إلاّ في الصيدلية في ألمانيا، ولا يُصرف بلا وصفة. وهذا فرقٌ نظاميّ لا لغويّ، لكنّه يُوقع الوافد في حرجٍ عمليّ.",
        },
        {
          wrong: "Nehmen bitte Platz.",
          right: "Nehmen Sie bitte Platz.",
          whyAr:
            "الأمر بصيغة Sie يحتفظ بالضمير بعد الفعل: Nehmen Sie. وحذفه يجعلها صيغة ihr أو مصدراً، وكلاهما في غير محلّه مع الغريب.",
        },
        {
          wrong: "Ich brauche eine Krankschreibung für die Apotheke.",
          right: "Ich brauche eine Krankschreibung für meinen Arbeitgeber.",
          whyAr:
            "خلطٌ بين وثيقتين: الوصفة (Rezept) للصيدلية، والشهادة المرضية (Krankschreibung) لصاحب العمل. والإحالة (Überweisung) للأخصّائيّ — ثلاثٌ لا تختلط.",
        },
      ],
      relatedRuleComparison: {
        title: "حجز الموعد — من a1-09 إلى a2-02",
        content:
          "تعلّمتَ في a1-09 حجز الموعد وإلغاءه: Ich hätte gern einen Termin · Passt Ihnen …? · Es tut mir leid, da kann ich nicht. وتلك كانت **البنية العامّة** لأيّ موعد.\n\nواليوم تملؤها بمضمونٍ متخصّص: سببُ الموعد (الأعراض)، والوثائق (بطاقة التأمين)، ومخرجاته (وصفة، شهادة، إحالة). فأنت لا تتعلّم مهارةً جديدة بل **تُعمّق مهارةً قائمة** في ميدانٍ بعينه.\n\nوهذه طريقة CEFR في التدرّج: الوظيفة تُقدَّم عامّةً في A1 ثمّ تُخصَّص في A2 ثمّ تُعقَّد في B1 (حيث ستتعلّم الشكوى من خطأٍ طبّيّ وطلب رأيٍ ثانٍ). فالحلزون يصعد ولا يعيد.",
      },
    },
    {
      id: "t4",
      titleAr: "الأفعال الانعكاسية في سياق الصحّة والعناية",
      titleDe: "Reflexive Verben rund um Gesundheit und Körperpflege",
      explanationAr:
        "قابلتَ **sich fühlen** في الكتلة الأولى (Ich fühle **mich** nicht gut) ولم نشرح بنيتها. وهي من باب **الأفعال الانعكاسية** — أفعالٍ يعود مفعولها على فاعلها. وسياق الصحّة والعناية أغنى مواطنها، ولذلك نفتحه هنا تمهيداً لبابه الكامل في a2-11.\n\n**أوّلاً — البنية: فعلٌ + ضميرٌ انعكاسيّ.**\n| ich wasche **mich** · du wäschst **dich** · er wäscht **sich** |\n| wir waschen **uns** · ihr wascht **euch** · sie waschen **sich** |\nولاحظ أنّ الضمائر هي ضمائر النصب التي تعرفها (mich, dich, uns, euch) إلاّ **sich** التي تخدم الغائب والمخاطبة الرسمية معاً.\n\n**ثانياً — أفعال الصحّة والعناية الأشيع:**\n· **sich fühlen** (يشعر) ⟵ Ich fühle mich besser.\n· **sich ausruhen** (يستريح) ⟵ Sie sollten sich ausruhen.\n· **sich erholen** (يتعافى، ينقه) ⟵ Ich habe mich gut erholt.\n· **sich waschen** (يغتسل) · **sich duschen** · **sich anziehen** (يرتدي ملابسه)\n· **sich verletzen** (يُصاب) ⟵ Ich habe mich am Fuß verletzt.\n· **sich erkälten** (يُصاب بالزكام) ⟵ Ich habe mich erkältet.\n\n**ثالثاً — أين يقع الضمير؟** بعد الفعل المصرَّف مباشرةً:\n· **Ich fühle mich** besser. · **Heute fühle ich mich** besser. (الفاعل انزاح فتبعه الضمير)\n· وفي Perfekt: **Ich habe mich** gut **erholt**. — الضمير في المساحة الوسطى وPartizip II يُغلق.\n\n**ورابعاً — لمحةٌ عن mich مقابل mir (وتفصيلها في a2-11):**\nإن كان في الجملة **مفعولٌ آخر**، انتقل الضمير الانعكاسيّ إلى الجرّ:\n· **Ich wasche mich.** (أغتسل — لا مفعول آخر ⟵ منصوب)\n· **Ich wasche mir die Hände.** (أغسل يديّ — die Hände هي المفعول ⟵ الضمير يُجرّ)\nوالقاعدة: **مفعولٌ واحد للجملة**؛ فإن أخذه غيرُ الضمير، تنحّى الضمير إلى الجرّ.",
      whyAr:
        "لماذا تحتاج الألمانية ضميراً انعكاسياً حيث تكتفي العربية بصيغةٍ صرفية؟ لأنّ العربية تملك **أوزاناً** تحمل معنى الانعكاس: اغتسل، استراح، تعافى — كلّها أوزانٌ (افتعل، استفعل، تفاعل) تدلّ على وقوع الفعل على فاعله بلا كلمةٍ زائدة. والألمانية فقدت هذه الأوزان فعوّضت عنها بضميرٍ مستقلّ.\n\nفما تراه عبئاً إضافياً هو في الحقيقة **الوظيفة نفسها بأداةٍ مختلفة**: العربية تُدخلها في بنية الكلمة، والألمانية تضعها بجانبها. ومن أدرك التقابل أراح نفسه: كلّما وجدتَ في العربية وزن „افتعل“ أو „تفعّل“ فتوقّع في الألمانية sich.\n\nولماذا يكثر الانعكاس في باب الصحّة تحديداً؟ لأنّ العناية بالجسد فعلٌ يقع من المرء على نفسه بطبيعته: من يغتسل يغسل نفسه، ومن يستريح يُريح نفسه. فالباب الدلاليّ يستدعي البنية النحوية استدعاءً طبيعياً — ولذلك كان تعلّمهما معاً أنفع من تعلّم كلٍّ على حدة.",
      table: {
        title: "أفعال انعكاسية في باب الصحّة",
        columns: ["الفعل", "المعنى", "المثال", "Perfekt"],
        rows: [
          { label: "sich fühlen", cells: ["يشعر", "Ich fühle mich besser.", "hat sich gefühlt"] },
          { label: "sich ausruhen", cells: ["يستريح", "Sie sollten sich ausruhen.", "hat sich ausgeruht"] },
          { label: "sich erholen", cells: ["يتعافى", "Ich habe mich gut erholt.", "hat sich erholt"] },
          { label: "sich erkälten", cells: ["يُصاب بالزكام", "Ich habe mich erkältet.", "hat sich erkältet"] },
          { label: "sich verletzen", cells: ["يُصاب بجرح", "Er hat sich verletzt.", "hat sich verletzt"] },
          { label: "sich waschen", cells: ["يغتسل", "Ich wasche mich.", "hat sich gewaschen"] },
          { label: "sich … waschen", cells: ["يغسل عضواً منه", "Ich wasche mir die Hände.", "الضمير يُجرّ لوجود مفعول"] },
        ],
      },
      examples: [
        { de: "Wie fühlen Sie sich heute? – Danke, ich fühle mich besser.", ar: "كيف تشعر اليوم؟ — شكراً، أشعر بتحسّن." },
        { de: "Sie sollten sich ein paar Tage ausruhen.", ar: "ينبغي أن ترتاح بضعة أيّام. (نصيحةٌ بـsollten + انعكاسيّ)" },
        { de: "Ich habe mich im Urlaub gut erholt.", ar: "تعافيتُ جيداً في العطلة." },
        { de: "Ich habe mich erkältet — das Wetter war zu kalt.", ar: "أُصبتُ بالزكام — كان الطقس بارداً جداً." },
        { de: "Mein Sohn hat sich beim Fußball am Knie verletzt.", ar: "أُصيب ابني في ركبته أثناء كرة القدم." },
        { de: "Waschen Sie sich bitte vorher die Hände.", ar: "اغسل يديك قبل ذلك من فضلك. (وجود die Hände ⟵ sich بالجرّ)" },
        { de: "Heute fühle ich mich viel besser als gestern.", ar: "أشعر اليوم بتحسّنٍ كبير عن أمس. (الظرف أوّلاً ⟵ الفاعل انزاح)" },
        { de: "Ruhen Sie sich aus und trinken Sie viel Tee.", ar: "استرح واشرب شاياً كثيراً. (أمرٌ بصيغة Sie + فعلٌ انعكاسيّ منفصل)" },
      ],
      comparisonWithArabic:
        "التقابل هنا منتظمٌ ومريح: أوزان العربية الانعكاسية تقابل sich الألمانية مقابلةً شبه تامّة.\n· **اغتسل** (افتعل) ⟵ sich waschen · **استراح** (استفعل) ⟵ sich ausruhen · **تعافى** (تفاعل) ⟵ sich erholen\nفالمتعلّم العربيّ يملك **حدساً جاهزاً** لهذا الباب: هو يعرف متى يكون الفعل واقعاً على فاعله لأنّ لغته تُعلمه ذلك بالصيغة.\n\nوالخطر في موضعين. الأوّل: أفعالٌ انعكاسية في الألمانية وغير انعكاسية في العربية — **sich erkälten** ليست „تزكّم“ بل „أُصيب بالزكام“، فالعربية تجعلها مبنيّةً للمجهول والألمانية تجعلها انعكاسية. والثاني: **نسيان الضمير أصلاً**، لأنّ العربيّ نطق معنى الانعكاس في الفعل فظنّ أنّه أدّاه — فيقول Ich fühle gut وقد أسقط mich.\n\nونصيحةٌ عملية: احفظ الفعل الانعكاسيّ **بضميره دائماً** — لا تحفظ fühlen بل sich fühlen، ولا erholen بل sich erholen. فالضمير جزءٌ من هويّة الفعل لا زيادةٌ عليه.",
      eselsbruecke:
        "كلّما وجدتَ في العربية وزن «افتعل» أو «استفعل» أو «تفعّل» فتوقّع sich في الألمانية. واحفظ الفعل بضميره: sich fühlen لا fühlen. وإن كان في الجملة مفعولٌ آخر، تنحّى الضمير إلى الجرّ (mir die Hände).",
      commonMistakes: [
        {
          wrong: "Ich fühle gut.",
          right: "Ich fühle mich gut.",
          whyAr:
            "إسقاط الضمير الانعكاسيّ لأنّ العربية تنطق الانعكاس في بنية الفعل نفسه. وfühlen بلا ضمير تعني «يلمس» أو «يتحسّس شيئاً» — فالمعنى يتغيّر لا يضيع فقط.",
        },
        {
          wrong: "Ich habe mich gut erholen.",
          right: "Ich habe mich gut erholt.",
          whyAr:
            "وضعُ المصدر مكان Partizip II. وerholen ضعيفٌ بادئته er- غير منفصلة ⟵ erholt بلا ge-، وهي قاعدة a1-14 تعمل على فعلٍ انعكاسيّ.",
        },
        {
          wrong: "Ich wasche mich die Hände.",
          right: "Ich wasche mir die Hände.",
          whyAr:
            "وجود مفعولٍ صريح (die Hände) يدفع الضمير الانعكاسيّ إلى الجرّ. والقاعدة: مفعولٌ منصوب واحد للجملة، فإن أخذه غيرُ الضمير تنحّى الضمير.",
        },
        {
          wrong: "Er fühlt mich nicht gut.",
          right: "Er fühlt sich nicht gut.",
          whyAr:
            "الضمير الانعكاسيّ يتبع الفاعل لا المتكلّم: مع er يكون sich. ويكثر هذا الخطأ لأنّ المتعلّم يحفظ العبارة «fühle mich» كتلةً جامدة.",
        },
        {
          wrong: "Ich bin erkältet mich.",
          right: "Ich habe mich erkältet.",
          whyAr:
            "خطآن: المساعد والضمير معاً. والأفعال الانعكاسية تأخذ haben دائماً — لأنّ الضمير الانعكاسيّ نفسه مفعولٌ به، واختبار المفعول يحسم لصالح haben.",
        },
      ],
      relatedRuleComparison: {
        title: "تمهيدٌ لبابٍ يكتمل في a2-11",
        content:
          "ما تأخذه اليوم **نصف الباب**: البنية الأساسية وأفعال الصحّة والعناية. وسيكتمل في a2-11 (Dienstleistungen) بثلاث إضافات:\n· **الأفعال الانعكاسية مع حروف الجرّ:** sich freuen **auf** (يتشوّق إلى) مقابل sich freuen **über** (يفرح بـ)\n· **قاعدة mich/mir كاملةً** بأمثلتها كلّها\n· **الانعكاسيّ المتبادل:** Wir treffen **uns** (نلتقي — كلٌّ منّا بالآخر)\n\nوسبب التقسيم أنّ الباب أوسع من أن يُبتلع دفعةً واحدة، وأنّ سياق الصحّة يفرض نصفه فرضاً: لا تستطيع أن تقول „أشعر بتحسّن“ ولا „ينبغي أن ترتاح“ بلا sich. فأخذتَ منه اليوم ما يلزمك للموقف، وتأخذ بقيّته حين يتّسع الوقت له.",
      },
    },
  ],

  reading: {
    "id": "read-a2-02",
    "titleDe": "Drei Tage Grippe",
    "titleAr": "ثلاثة أيّامٍ من النزلة",
    "textType": "erzaehlung",
    "paragraphs": [
      "Am Montagmorgen bin ich aufgewacht und wusste sofort: Heute stimmt etwas nicht. Mein Hals tat weh, mir war abwechselnd heiß und kalt, und ich fühlte mich sehr schwach. Ich habe trotzdem versucht aufzustehen, aber nach zehn Minuten musste ich mich wieder hinlegen.",
      "Meine Kollegin hat mir am Telefon gesagt: „Du solltest unbedingt zum Arzt gehen. Und du musst dich krankschreiben lassen, sonst gibt es Probleme mit dem Chef.“ Sie hatte recht. Ich habe in der Praxis angerufen und einen Termin für den Nachmittag bekommen.",
      "Im Wartezimmer saßen schon sechs Leute. Nach vierzig Minuten war ich endlich dran. Die Ärztin hat gefragt: „Was fehlt Ihnen denn?“ Ich habe erzählt: seit dem Morgen Halsschmerzen, Fieber und Kopfschmerzen. Sie hat mich untersucht und gesagt: „Sie haben eine Grippe. Das ist nicht schlimm, aber Sie brauchen Ruhe.“",
      "Dann hat sie mir erklärt, was ich machen soll: „Sie sollten viel trinken und drei Tage im Bett bleiben. Sie dürfen keinen Sport machen. Aber Sie müssen nicht wiederkommen, wenn es Ihnen besser geht.“ Ich habe ein Rezept und eine Krankschreibung für drei Tage bekommen.",
      "Auf dem Weg nach Hause war ich in der Apotheke. Der Apotheker war sehr freundlich und hat mir alles genau erklärt. Zu Hause habe ich Tee gekocht und mich ins Bett gelegt.",
      "Nach drei Tagen ging es mir schon viel besser. Ich habe mich gut erholt und bin am Freitag wieder arbeiten gegangen. Meine Kollegin hat gelacht und gesagt: „Siehst du? Manchmal muss man einfach auf den Körper hören.“"
    ],
    "paragraphsAr": [
      "صباح الاثنين استيقظتُ وعرفتُ فوراً: اليوم ثمّة خطبٌ ما. كان حلقي يؤلمني، وكنتُ أشعر بالحرّ والبرد بالتناوب، وكنتُ ضعيفاً جداً. حاولتُ رغم ذلك أن أنهض، لكن بعد عشر دقائق اضطررتُ أن أستلقي ثانيةً.",
      "قالت لي زميلتي على الهاتف: «ينبغي لك أن تذهب إلى الطبيب حتماً. وعليك أن تحصل على شهادةٍ مرضية، وإلاّ صارت مشكلةٌ مع المدير». كانت مُحقّة. اتّصلتُ بالعيادة وحصلتُ على موعدٍ بعد الظهر.",
      "في غرفة الانتظار كان يجلس ستّة أشخاص. وبعد أربعين دقيقة جاء دوري أخيراً. سألت الطبيبة: «ما شكواك؟» فحكيتُ: ألمُ حلقٍ منذ الصباح، وحمّى، وصداع. فحصتني وقالت: «عندك نزلة. ليست خطيرة، لكنّك تحتاج راحة».",
      "ثمّ شرحت لي ما ينبغي أن أفعل: «ينبغي أن تشرب كثيراً وأن تبقى في الفراش ثلاثة أيّام. وممنوعٌ عليك ممارسة الرياضة. لكن لستَ مضطرّاً للعودة إن تحسّنت حالك». وحصلتُ على وصفةٍ وشهادةٍ مرضية لثلاثة أيّام.",
      "وفي طريق العودة مررتُ بالصيدلية. كان الصيدليّ لطيفاً جداً وشرح لي كلّ شيءٍ بدقّة. وفي البيت أعددتُ شاياً واستلقيتُ في الفراش.",
      "وبعد ثلاثة أيّام صرتُ أحسن حالاً بكثير. تعافيتُ جيداً وعدتُ إلى العمل يوم الجمعة. ضحكت زميلتي وقالت: «أرأيت؟ أحياناً على المرء أن يُصغي إلى جسده ببساطة»."
    ],
    "glossary": [
      {
        "de": "aufgewacht (aufwachen)",
        "ar": "استيقظ",
        "noteAr": "تغيّرُ حال ⟵ sein، وge- في الوسط"
      },
      {
        "de": "hinlegen (sich hinlegen)",
        "ar": "يستلقي",
        "noteAr": "انعكاسيّ + منفصل: musste ich mich wieder hinlegen"
      },
      {
        "de": "krankschreiben lassen",
        "ar": "يحصل على شهادةٍ مرضية"
      },
      {
        "de": "das Wartezimmer",
        "ar": "غرفة الانتظار"
      },
      {
        "de": "dran sein",
        "ar": "يأتي دوره",
        "noteAr": "Ich bin dran = دوري"
      },
      {
        "de": "untersuchen",
        "ar": "يفحص (طبّياً)",
        "noteAr": "غير منفصل ⟵ untersucht بلا ge-"
      },
      {
        "de": "die Grippe",
        "ar": "النزلة، الإنفلونزا"
      },
      {
        "de": "schlimm",
        "ar": "خطير، سيّئ",
        "noteAr": "Das ist nicht schlimm = ليس خطيراً"
      },
      {
        "de": "die Ruhe",
        "ar": "الراحة، السكون"
      },
      {
        "de": "das Rezept",
        "ar": "الوصفة الطبّية",
        "noteAr": "تُصرف في الصيدلية وحدها"
      },
      {
        "de": "die Krankschreibung",
        "ar": "الشهادة المرضية",
        "noteAr": "تُسلَّم لصاحب العمل"
      },
      {
        "de": "der Apotheker",
        "ar": "الصيدليّ"
      },
      {
        "de": "erholt (sich erholen)",
        "ar": "تعافى، نقِه",
        "noteAr": "Ich habe mich gut erholt"
      },
      {
        "de": "auf den Körper hören",
        "ar": "يُصغي إلى جسده"
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "paragraph": 1,
        "questionDe": "Welche Symptome hatte die Person am Montagmorgen?",
        "instructionAr": "اقرأ الفقرة الأولى: ما الأعراض؟",
        "options": [
          "Halsschmerzen, Fieber und Schwäche",
          "Nur Kopfschmerzen",
          "Bauchschmerzen",
          "Rückenschmerzen"
        ],
        "correctIndex": 0,
        "explanation": "«Mein Hals tat weh, mir war abwechselnd heiß und kalt, und ich fühlte mich sehr schwach».",
        "errorType": "vocabulary"
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "paragraph": 2,
        "questionDe": "Was hat die Kollegin geraten?",
        "instructionAr": "اقرأ الفقرة الثانية: بماذا نصحت الزميلة؟",
        "options": [
          "Zum Arzt gehen und sich krankschreiben lassen",
          "Zu Hause bleiben ohne Arzt",
          "Zur Arbeit kommen",
          "Medikamente im Supermarkt kaufen"
        ],
        "correctIndex": 0,
        "explanation": "«Du solltest unbedingt zum Arzt gehen. Und du musst dich krankschreiben lassen».",
        "errorType": "vocabulary"
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "paragraph": 4,
        "questionDe": "Was bedeutet: „Sie müssen nicht wiederkommen“?",
        "instructionAr": "اقرأ الفقرة الرابعة: ماذا تعني هذه الجملة؟",
        "options": [
          "Es ist nicht nötig zurückzukommen",
          "Es ist verboten zurückzukommen",
          "Sie sollen morgen kommen",
          "Sie müssen unbedingt kommen"
        ],
        "correctIndex": 0,
        "explanation": "nicht müssen = إعفاءٌ لا منع. ولو أرادت المنع لقالت «Sie dürfen nicht wiederkommen».",
        "errorType": "grammar"
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "paragraph": 4,
        "questionDe": "Was war verboten?",
        "instructionAr": "اقرأ الفقرة الرابعة: ما الممنوع؟",
        "options": [
          "Sport machen",
          "Tee trinken",
          "Im Bett bleiben",
          "Zur Apotheke gehen"
        ],
        "correctIndex": 0,
        "explanation": "«Sie dürfen keinen Sport machen» — nicht/kein dürfen يفيد التحريم.",
        "errorType": "grammar"
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "questionDe": "Warum heißt es „Was fehlt Ihnen?“ und nicht „Was fehlt Sie?“",
        "instructionAr": "سؤال قواعد: لماذا Ihnen لا Sie؟",
        "options": [
          "Weil fehlen ein Dativ-Verb ist",
          "Weil es höflicher klingt",
          "Weil Sie hier Plural ist",
          "Weil fehlen reflexiv ist"
        ],
        "correctIndex": 0,
        "explanation": "fehlen من أفعال الدّاتيف كـgefallen وhelfen: النقص يقع على الشخص فيُجرّ.",
        "errorType": "case"
      },
      {
        "id": "rq6",
        "type": "multiple-choice",
        "paragraph": 6,
        "questionDe": "Wann ist die Person wieder arbeiten gegangen?",
        "instructionAr": "اقرأ الفقرة الأخيرة: متى عاد إلى العمل؟",
        "options": [
          "Am Freitag",
          "Am Montag",
          "Am Mittwoch",
          "Am Sonntag"
        ],
        "correctIndex": 0,
        "explanation": "«bin am Freitag wieder arbeiten gegangen».",
        "errorType": "vocabulary"
      }
    ],
    "redemittel": [
      {
        "de": "Heute stimmt etwas nicht.",
        "ar": "اليوم ثمّة خطبٌ ما"
      },
      {
        "de": "Du solltest unbedingt zum Arzt gehen.",
        "ar": "ينبغي لك أن تذهب إلى الطبيب حتماً"
      },
      {
        "de": "Was fehlt Ihnen denn?",
        "ar": "ما شكواك؟ — سؤال الطبيب المعتاد"
      },
      {
        "de": "Das ist nicht schlimm, aber Sie brauchen Ruhe.",
        "ar": "ليس خطيراً، لكنّك تحتاج راحة"
      },
      {
        "de": "Nach drei Tagen ging es mir schon viel besser.",
        "ar": "وبعد ثلاثة أيّام صرتُ أحسن حالاً بكثير"
      },
      {
        "de": "Ich habe mich gut erholt.",
        "ar": "تعافيتُ جيداً"
      }
    ],
    "discussionAr": "احكِ مرّةً مرضتَ فيها، في ثماني جملٍ على الأقلّ. صف الأعراض ببنيتين مختلفتين على الأقلّ (haben + Schmerzen · tut weh · mir ist …)، واذكر نصيحةً تلقّيتَها بصيغة sollten، وشيئاً مُنعتَ منه بصيغة nicht dürfen. ثمّ راجع: هل استعملتَ mir حيث يقع الإحساس عليك، وich حيث تصف حالك؟"
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "زيارة الطبيب",
        lines: [
          { speaker: "Arzt", de: "Guten Tag! Was fehlt Ihnen?", ar: "نهارك سعيد! ما الذي ينقصك (ما بك)؟" },
          { speaker: "Sami", de: "Ich habe seit gestern starke Kopfschmerzen und Fieber.", ar: "عندي منذ أمس صداع شديد وحمى." },
          { speaker: "Arzt", de: "Haben Sie auch Husten?", ar: "هل عندك سعال أيضاً؟" },
          { speaker: "Sami", de: "Ja, ein bisschen.", ar: "نعم، قليلاً." },
          { speaker: "Arzt", de: "Sie haben eine Erkältung. Sie sollen viel trinken und sich ausruhen.", ar: "عندك زكام. يجب أن تشرب كثيراً وتستريح." },
          { speaker: "Sami", de: "Und Tabletten?", ar: "وأقراص؟" },
          { speaker: "Arzt", de: "Nehmen Sie dreimal täglich eine Tablette.", ar: "خذ قرصاً ثلاث مرات يومياً." },
        ],
      },
      {
        id: "l2",
        title: "نصائح من صديق",
        lines: [
          { speaker: "Anna", de: "Du siehst müde aus. Was ist los?", ar: "تبدو متعباً. ماذا حدث؟" },
          { speaker: "Karim", de: "Ich habe Rückenschmerzen. Ich habe zu viel gearbeitet.", ar: "عندي ألم في الظهر. عملت كثيراً." },
          { speaker: "Anna", de: "Du sollst dich ausruhen und nicht so viel arbeiten!", ar: "يجب أن تستريح وألا تعمل كثيراً!" },
          { speaker: "Karim", de: "Du hast recht. Und ich soll zum Arzt gehen.", ar: "معك حق. ويجب أن أذهب للطبيب." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hat Sami?",
        questionAr: "ماذا لدى سامي؟",
        options: ["Kopfschmerzen und Fieber", "Bauchschmerzen", "Husten nur", "Rückenschmerzen"],
        correctIndex: 0,
        explanation: "قال: starke Kopfschmerzen und Fieber — صداع وحمى.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was soll Sami machen?",
        questionAr: "ماذا يجب أن يفعل سامي؟",
        options: ["viel trinken und sich ausruhen", "arbeiten", "Sport machen", "kalt baden"],
        correctIndex: 0,
        explanation: "قال الطبيب: Sie sollen viel trinken und sich ausruhen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum hat Karim Rückenschmerzen?",
        questionAr: "لماذا ألم ظهر كريم؟",
        options: ["Er hat zu viel gearbeitet.", "Er hat geschwommen.", "Er ist geflogen.", "Er hat Fußball gespielt."],
        correctIndex: 0,
        explanation: "قال كريم: Ich habe zu viel gearbeitet — عمل كثيراً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الجسم: ch، sch، وau",
    items: [
      { de: "der Kopf", ar: "الرأس", note: "o قصيرة + pf: كوپف" },
      { de: "der Bauch", ar: "البطن", note: "au = آو + ch خ: باوخ" },
      { de: "der Rücken", ar: "الظهر", note: "ü + ck: رُكِن" },
      { de: "die Schulter", ar: "الكتف", note: "sch = ش: شولتر" },
      { de: "das Auge", ar: "العين", note: "au = آو + g = غ: آوغِه" },
      { de: "der Husten", ar: "السعال", note: "u قصيرة: هوستِن" },
    ],
    tip: "«das Auge» نطقها مضحك للعرب: آوغِه (مثل «آوغه») — au ثم g المجهورة. استمع وكرر ثلاث مرات.",
    shadowing: [
      { de: "Ich habe Kopfschmerzen.", ar: "عندي صداع.", tip: "Kopfschmerzen = كوپف-شميرتسن (sch)" },
      { de: "Mein Rücken tut weh.", ar: "ظهري يؤلمني.", tip: "tut weh = توت ڤيه" },
      { de: "Sie sollen viel trinken.", ar: "يجب أن تشربوا كثيراً.", tip: "sollen = زولِن (s=ز)" },
      { de: "Ich soll im Bett bleiben.", ar: "يجب أن أبقى في السرير.", tip: "bleiben = بلايبن (ei=آي)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "صف ما يؤلمك:",
      prompt: "Was tut dir weh? (اكتب جملة كاملة)",
      acceptedAnswers: ["Ich habe Kopfschmerzen", "Mein Rücken tut weh", "Ich habe Bauchschmerzen", "Ich habe Halsschmerzen"],
      sampleAnswer: "Ich habe Kopfschmerzen.",
      explanation: "الأسهل: Ich habe + Schmerzen. أو: Mein + عضو + tut weh.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف sollen:",
      template: "Ich ___ viel trinken. Du ___ im Bett bleiben. Er ___ Medizin nehmen. Wir ___ zum Arzt gehen.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollst", options: ["soll", "sollst", "sollt"] },
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollst", "sollen"] },
      ],
      explanation: "سلم sollen: soll، sollst، soll، sollen، sollt، sollen.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Sie sollen dreimal täglich eine Tablette nehmen.",
      explanation: "يجب أن تأخذوا قرصاً ثلاث مرات يومياً — sollen + الفعل الأساسي في النهاية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Ich habe ___.",
      questionAr: "عندي صداع.",
      options: ["Kopfschmerzen", "Kopfschmerz", "Kopfschmerzenen", "Kopfschmerzten"],
      correctIndex: 0,
      explanation: "الصداع جمع دائماً: Kopfschmerzen.",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen الصحيح:",
      questionDe: "Du ___ viel trinken.",
      options: ["sollst", "soll", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع du: sollst.",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل جزء الجسم بمعناه:",
      pairs: [
        { left: "der Kopf", right: "الرأس" },
        { left: "das Auge", right: "العين" },
        { left: "der Bauch", right: "البطن" },
        { left: "der Rücken", right: "الظهر" },
      ],
      explanation: "أربعة أجزاء أساسية — احفظها مع أدواتها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["viel", "Du", "sollst", "trinken", "."],
      correctSentence: "Du sollst viel trinken.",
      explanation: "Du + sollst + viel + trinken (الأساسي في النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich bin Kopfschmerzen.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "soll", "werde"],
      explanation: "الألم يُملَك: Ich habe Kopfschmerzen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالعضو الصحيح (Auge/Ohr/Hand/Fuß):",
      template: "Ich sehe mit dem ___. Ich höre mit dem ___. Ich schreibe mit der ___.",
      blanks: [
        { correct: "Auge", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Ohr", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Hand", options: ["Auge", "Ohr", "Hand", "Fuß"] },
      ],
      explanation: "أرى بالعين، أسمع بالأذن، أكتب باليد.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "أعطِ نصيحة باستخدام sollen:",
      prompt: "Er ist krank. → (يجب أن يستريح)",
      acceptedAnswers: ["Er soll sich ausruhen", "Er soll sich ausruhen."],
      sampleAnswer: "Er soll sich ausruhen.",
      explanation: "النصيحة: Er soll + الفعل الأساسي في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Was fehlt Ihnen?",
      questionAr: "ما معنى السؤال؟",
      options: ["ما الذي ينقصك (ما بك)؟", "كم عمرك؟", "ما اسمك؟", "أين يؤلمك؟"],
      correctIndex: 0,
      explanation: "عبارة الطبيب الشهيرة: Was fehlt Ihnen? = ما بك؟ (حرفياً: ما الذي ينقصك).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich sollst Medizin nehmen.",
      wrongWord: "sollst",
      correctWord: "soll",
      options: ["soll", "sollst", "sollt", "sollen"],
      explanation: "مع ich: soll (وليست sollst التي مع du).",
      errorType: "conjugation",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Du sollst nicht so viel arbeiten.",
      explanation: "يجب ألا تعمل كثيراً — nicht قبل الفعل الأساسي.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "أيّ صيغةٍ صحيحة للتعبير عن الغثيان؟",
      questionDe: "Sie fühlen sich übel. Was sagen Sie?",
      options: ["Mir ist schlecht.", "Ich bin schlecht.", "Ich habe schlecht.", "Mich ist schlecht."],
      correctIndex: 0,
      explanation: "الإحساس العارض يقع على الشخص فيُجرّ: mir. وIch bin schlecht تعني «أنا شخصٌ سيّئ الأخلاق».",
      errorType: "case",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الصحيح (انتبه إلى الإفراد والجمع)",
      template: "Mein Rücken ___ weh. · Meine Augen ___ weh.",
      blanks: [
        { correct: "tut", options: ["tut", "tun", "tue", "tuen"], errorType: "conjugation" },
        { correct: "tun", options: ["tun", "tut", "tue", "tuet"], errorType: "conjugation" },
      ],
      explanation: "Rücken مفرد ⟵ tut، وAugen جمع ⟵ tun. والعبارة تُصرَّف ولا تُحفظ كتلةً جامدة.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "الطبيب يمنعك من التدخين. أيّ جملةٍ تُعبّر عن المنع؟",
      questionDe: "Rauchen ist verboten. Was sagt der Arzt?",
      options: [
        "Sie dürfen nicht rauchen.",
        "Sie müssen nicht rauchen.",
        "Sie sollten nicht rauchen wollen.",
        "Sie können nicht rauchen.",
      ],
      correctIndex: 0,
      explanation: "nicht dürfen = تحريم. وnicht müssen تعني «لستَ مضطرّاً للتدخين» — إعفاءٌ لا منع.",
      errorType: "negation",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "ماذا تعني: «Sie müssen nicht wiederkommen»؟",
      questionDe: "Was bedeutet „Sie müssen nicht wiederkommen“?",
      options: [
        "ليس ضرورياً أن تعود (لكن يجوز)",
        "ممنوعٌ عليك العودة",
        "يجب أن تعود غداً",
        "عليك العودة حتماً",
      ],
      correctIndex: 0,
      explanation: "نفي الوجوب إعفاء لا منع. والمنع بـnicht dürfen: «Sie dürfen nicht wiederkommen».",
      errorType: "negation",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير الانعكاسيّ الصحيح",
      template: "Ich fühle ___ besser. · Er fühlt ___ nicht gut. · Wir haben ___ gut erholt.",
      blanks: [
        { correct: "mich", options: ["mich", "mir", "sich", "dich"], errorType: "pronoun" },
        { correct: "sich", options: ["sich", "mich", "ihn", "ihm"], errorType: "pronoun" },
        { correct: "uns", options: ["uns", "sich", "wir", "unser"], errorType: "pronoun" },
      ],
      explanation: "الضمير الانعكاسيّ يتبع الفاعل: ich ⟵ mich · er ⟵ sich · wir ⟵ uns.",
      errorType: "pronoun",
    },
    {
      id: "e16",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich wasche mich die Hände.",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "sich", "meine"],
      explanation: "وجود مفعولٍ صريح (die Hände) يدفع الضمير الانعكاسيّ إلى الجرّ: mir.",
      errorType: "case",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "تنصح صديقاً بلطف. أيّ صيغةٍ تختار؟",
      questionDe: "Sie geben einem Freund einen Rat. Was sagen Sie?",
      options: [
        "Du solltest mal zum Arzt gehen.",
        "Du sollst zum Arzt gehen.",
        "Du musst zum Arzt gehen wollen.",
        "Du darfst zum Arzt gehen.",
      ],
      correctIndex: 0,
      explanation: "sollten تقترح وsollen تنقل إلزاماً. وmal كلمةٌ صغيرة تزيد اللطف.",
      errorType: "vocabulary",
    },
    {
      id: "e18",
      type: "word-ordering",
      instructionAr: "رتّب الجملة: انتبه إلى المدّة وموضع Partizip II",
      tokens: ["Ich", "habe", "seit", "drei", "Tagen", "starke", "Halsschmerzen"],
      correctSentence: "Ich habe seit drei Tagen starke Halsschmerzen",
      explanation: "seit + الجرّ (drei Tagen)، والظرف الزمنيّ يتقدّم على المفعول بترتيب TeKaMoLo.",
      errorType: "word-order",
    },
    {
      id: "e19",
      type: "matching",
      instructionAr: "طابق كلّ وثيقةٍ بجهتها",
      pairs: [
        { left: "das Rezept", right: "die Apotheke" },
        { left: "die Krankschreibung", right: "der Arbeitgeber" },
        { left: "die Überweisung", right: "der Facharzt" },
        { left: "die Versichertenkarte", right: "die Anmeldung" },
      ],
      explanation: "أربع وثائق لا تختلط: الوصفة للصيدلية، والشهادة لصاحب العمل، والإحالة للأخصّائيّ، وبطاقة التأمين للاستقبال.",
      errorType: "vocabulary",
    },
    {
      id: "e20",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في سؤال الطبيب",
      wrongSentence: "Was fehlt Sie denn?",
      wrongWord: "Sie",
      correctWord: "Ihnen",
      options: ["Ihnen", "Sie", "Ihr", "Ihren"],
      explanation: "fehlen من أفعال الدّاتيف ⟵ Ihnen. والمنطق نفسه في Wie geht es Ihnen?",
      errorType: "case",
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص المناسب للسياق",
      template: "Der Arzt sagt, ich ___ viel trinken. · Sie ___ mehr schlafen. (نصيحة) · Sie ___ keinen Alkohol trinken. (منع)",
      blanks: [
        { correct: "soll", options: ["soll", "sollte", "darf", "muss"], errorType: "vocabulary" },
        { correct: "sollten", options: ["sollten", "sollen", "dürfen", "müssen"], errorType: "vocabulary" },
        { correct: "dürfen", options: ["dürfen", "müssen", "sollen", "können"], errorType: "vocabulary" },
      ],
      explanation: "soll ينقل أمر الطبيب · sollten تنصح · nicht/kein dürfen يمنع.",
      errorType: "vocabulary",
    },
    {
      id: "e22",
      type: "transformation",
      instructionAr: "حوّل النصيحة إلى صيغةٍ مهذّبة",
      prompt: "Sie sollen mehr schlafen. → (höflicher)",
      acceptedAnswers: ["Sie sollten mehr schlafen.", "Sie sollten mehr schlafen"],
      sampleAnswer: "Sie sollten mehr schlafen.",
      hint: "صيغة Konjunktiv II تُبعد الأمر عن المباشرة فتلطّفه.",
      explanation: "sollen ⟵ sollten: من نقل الإلزام إلى الاقتراح.",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe: "Die Ärztin sagt: „Sie haben eine Grippe. Sie sollten drei Tage im Bett bleiben und viel Tee trinken. Sie dürfen keinen Sport machen. Sie müssen nicht wiederkommen, wenn es Ihnen besser geht. Hier ist ein Rezept für die Apotheke.“",
      statements: [
        { id: "s1", de: "Sport ist verboten.", ar: "الرياضة ممنوعة.", isTrue: true, whyAr: "«Sie dürfen keinen Sport machen» — نفي الإذن تحريم." },
        { id: "s2", de: "Die Person muss unbedingt wiederkommen.", ar: "على الشخص أن يعود حتماً.", isTrue: false, whyAr: "«Sie müssen nicht wiederkommen» — نفي الوجوب إعفاء لا إلزام." },
        { id: "s3", de: "Das Rezept ist für die Apotheke.", ar: "الوصفة للصيدلية.", isTrue: true, whyAr: "«ein Rezept für die Apotheke» — والوصفة لا تُصرف في غيرها." },
        { id: "s4", de: "Die Ärztin gibt einen Befehl, keinen Rat.", ar: "الطبيبة تأمر ولا تنصح.", isTrue: false, whyAr: "استعملت sollten وهي صيغة الاقتراح المهذّب لا الأمر." },
      ],
      explanation: "النصّ يجمع الصيغ الأربع: sollten نصيحةً · dürfen nicht منعاً · müssen nicht إعفاءً.",
      errorType: "negation",
    },
    {
      id: "e24",
      type: "multiple-choice",
      instructionAr: "ماذا تقول عند الوداع لمريض؟",
      questionDe: "Ihr Kollege ist krank. Was sagen Sie zum Abschied?",
      options: ["Gute Besserung!", "Viel Glück!", "Herzlichen Glückwunsch!", "Gute Reise!"],
      correctIndex: 0,
      explanation: "Gute Besserung تقابل «سلامتك» وتُقال في ألمانيا باطّراد — فإهمالها يبدو جفاءً.",
      errorType: "vocabulary",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich bin Kopfschmerzen.", right: "Ich habe Kopfschmerzen.", whyAr: "الألم يُملك بـ haben." },
      { wrong: "Ich sollst (مع ich)", right: "Ich soll", whyAr: "sollst مع du فقط." },
      { wrong: "خلط das Auge (عين) مع das Ohr (أذن)", right: "Auge = عين، Ohr = أذن", whyAr: "احفظ: Auge فيه A مثل «عين»، Ohr فيه O مثل «أذن» (تشابه صوتي)." },
    ],
    eselsbruecken: [
      "«Schmerzen = آلام»: كل ما يؤلمك Schmerzen مع haben.",
      "«soll = ينبغي»: عند الطبيب اسمعها كثيراً: Sie sollen...",
    ],
    culturalNote: {
      title: "التأمين الصحي الألماني",
      content:
        "في ألمانيا «die Krankenversicherung» (التأمين الصحي) إلزامي للجميع. عند المرض: اتصل بالطبيب وحجز «Termin». والأدوية تصرف من «die Apotheke» (وليس من الطبيب مباشرة). عبارة مهمة: «Ich bin krankenversichert» (أنا مؤمن صحياً).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Ich habe ___ und Fieber.",
      options: ["Husten", "husten", "der Husten", "hust"],
      correctIndex: 0,
      explanation: "Husten اسم مع haben: Ich habe Husten.",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen:",
      questionDe: "Er ___ im Bett bleiben.",
      options: ["soll", "sollst", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع er: soll.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["sich", "Er", "ausruhen", "soll", "."],
      correctSentence: "Er soll sich ausruhen.",
      explanation: "يجب أن يستريح: Er + soll + sich ausruhen.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Mein Kopf tut weht.",
      wrongWord: "weht",
      correctWord: "weh",
      options: ["weh", "weht", "wehne", "wehe"],
      explanation: "tut weh — weh ثابتة بلا نهاية: Mein Kopf tut weh.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ sollen الصحيح:",
      template: "Ich ___ viel trinken. Sie ___ Medizin nehmen. Ihr ___ früh schlafen.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollen", "sollt"] },
        { correct: "sollt", options: ["soll", "sollt", "sollten"] },
      ],
      explanation: "ich soll، sie sollen، ihr sollt.",
      errorType: "conjugation",
    },
  ],

  flashcards: [
    { id: "fc1", de: "der Körper", ar: "الجسم", example: "Der Körper braucht Schlaf.", exampleAr: "الجسم يحتاج النوم.", level: "A2" },
    { id: "fc2", de: "der Kopf", ar: "الرأس", example: "Ich habe Kopfschmerzen.", exampleAr: "عندي صداع.", level: "A2" },
    { id: "fc3", de: "das Auge", ar: "العين", example: "Ich sehe mit den Augen.", exampleAr: "أرى بالعينين.", level: "A2" },
    { id: "fc4", de: "der Rücken", ar: "الظهر", example: "Mein Rücken tut weh.", exampleAr: "ظهري يؤلمني.", level: "A2" },
    { id: "fc5", de: "die Schmerzen", ar: "الآلام", example: "Ich habe Schmerzen.", exampleAr: "عندي آلام.", level: "A2" },
    { id: "fc6", de: "das Fieber", ar: "الحمى", example: "Er hat Fieber.", exampleAr: "عنده حمى.", level: "A2" },
    { id: "fc7", de: "sollen", ar: "ينبغي (نصيحة)", example: "Du sollst viel trinken.", exampleAr: "يجب أن تشرب كثيراً.", level: "A2" },
    { id: "fc8", de: "sich ausruhen", ar: "يستريح", example: "Sie sollen sich ausruhen.", exampleAr: "يجب أن تستريحوا.", level: "A2" },
    { id: "fc9", de: "Mir ist schlecht.", ar: "أشعر بالغثيان (لا Ich bin schlecht!)", example: "Mir ist schlecht und schwindelig.", exampleAr: "أشعر بالغثيان والدوار.", level: "A2" },
    { id: "fc10", de: "sich fühlen", ar: "يشعر (بحالٍ ما)", example: "Ich fühle mich heute besser.", exampleAr: "أشعر بتحسّن اليوم.", level: "A2" },
    { id: "fc11", de: "sich erholen", ar: "يتعافى، ينقه", example: "Ich habe mich gut erholt.", exampleAr: "تعافيتُ جيداً.", level: "A2" },
    { id: "fc12", de: "dran sein", ar: "يأتي دوره", example: "Nach vierzig Minuten war ich endlich dran.", exampleAr: "بعد أربعين دقيقة جاء دوري أخيراً.", level: "A2" },
    { id: "fc13", de: "sich erkälten", ar: "يُصاب بالزكام", example: "Ich habe mich erkältet.", exampleAr: "أُصبتُ بالزكام.", level: "A2" },
    { id: "fc14", de: "sollten", ar: "ينبغي (نصيحة مهذّبة — Konjunktiv II)", example: "Sie sollten mehr schlafen.", exampleAr: "ينبغي أن تنام أكثر.", level: "A2" },
    { id: "fc15", de: "nicht dürfen", ar: "ممنوع (نفي الإذن = تحريم)", example: "Sie dürfen nicht rauchen.", exampleAr: "ممنوعٌ عليك التدخين.", level: "A2" },
    { id: "fc16", de: "nicht müssen", ar: "غير لازم (نفي الوجوب = إعفاء)", example: "Sie müssen nicht wiederkommen.", exampleAr: "لستَ مضطرّاً للعودة.", level: "A2" },
    { id: "fc17", de: "Was fehlt Ihnen?", ar: "ما شكواك؟ (حرفياً: ما الذي ينقصك؟)", example: "Guten Tag, was fehlt Ihnen denn?", exampleAr: "نهارك سعيد، ما شكواك؟", level: "A2" },
    { id: "fc18", de: "das Rezept", ar: "الوصفة الطبّية (للصيدلية)", example: "Ich schreibe Ihnen ein Rezept.", exampleAr: "سأكتب لك وصفة.", level: "A2" },
    { id: "fc19", de: "die Krankschreibung", ar: "الشهادة المرضية (لصاحب العمل)", example: "Ich brauche eine Krankschreibung.", exampleAr: "أحتاج شهادةً مرضية.", level: "A2" },
    { id: "fc20", de: "die Grippe", ar: "النزلة، الإنفلونزا", example: "Sie haben eine Grippe.", exampleAr: "عندك نزلة.", level: "A2" },
    { id: "fc21", de: "untersuchen", ar: "يفحص (طبّياً)", example: "Die Ärztin hat mich untersucht.", exampleAr: "فحصتني الطبيبة.", level: "A2" },
    { id: "fc22", de: "das Wartezimmer", ar: "غرفة الانتظار", example: "Im Wartezimmer saßen sechs Leute.", exampleAr: "كان في غرفة الانتظار ستّة أشخاص.", level: "A2" },
    { id: "fc23", de: "Gute Besserung!", ar: "شفاءً عاجلاً! (تقابل «سلامتك»)", example: "Gute Besserung! – Danke schön.", exampleAr: "شفاءً عاجلاً! — شكراً جزيلاً.", level: "A2" },
    { id: "fc24", de: "schlimm", ar: "خطير، سيّئ", example: "Das ist nicht schlimm.", exampleAr: "ليس خطيراً.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-02-1", type: "relay-instructions",
      titleAr: "انقل تعليمات طبية بالعربية لشخص",
      sourceDe: "Nehmen Sie diese Tabletten zweimal am Tag nach dem Essen. Trinken Sie viel Wasser und ruhen Sie sich aus.",
      taskAr: "انقل التعليمات بالعربية: جرعة الدواء، الوقت، والنصائح الإضافية.",
      modelAnswerAr: "«خذ هذه الأقراص مرتين يومياً بعد الأكل. اشرب ماءً كثيراً واسترح.»",
      keyPointsAr: ["نقلت الجرعة (مرتين يومياً)", "ذكرت التوقيت (بعد الأكل)", "نقلت نصائح الماء والراحة"],
    },
  ],
      interaction: [
    {
      id: "int-a2-02-1",
      scenarioAr: "عند الطبيب — تصف الأعراض وتطلب النصيحة.",
      scenarioDe: "Beim Arzt — du beschreibst Symptome.",
      strategyAr: "الاستراتيجية: وصف الأعراض بدقة وفهم النصائح.",
      rounds: [
        {
          speakerDe: "Was fehlt Ihnen?",
          speakerAr: "ما الذي يزعجك؟",
          options: [
            { de: "Ich habe seit zwei Tagen Kopfschmerzen und Fieber.", ar: "أعاني منذ يومين من صداع وحمى.", best: true, replyDe: "Haben Sie auch Husten?", replyAr: "هل لديك سعال أيضاً؟" },
            { de: "Ich bin ein Fahrrad.", ar: "أنا دراجة.", best: false, replyDe: "Sie sind ein Fahrrad? Sehr komisch.", replyAr: "أنت دراجة؟ غريب جداً." },
          ],
        },
        {
          speakerDe: "Haben Sie auch Husten?",
          speakerAr: "هل لديك سعال أيضاً؟",
          options: [
            { de: "Ja, ein bisschen. Besonders nachts.", ar: "نعم قليلاً. خاصة في الليل.", best: true, replyDe: "Okay. Nehmen Sie diese Medizin und trinken Sie viel.", replyAr: "حسناً. خذ هذا الدواء واشرب كثيراً." },
            { de: "Nein, nur ich huste nie.", ar: "لا، فقط أنا لا أسعل أبداً.", best: false, replyDe: "„Nur ich huste nie“ ist falsch. Sagen Sie: Ich huste nicht.", replyAr: "«فقط أنا لا أسعل أبداً» خاطئة. قل: لا أسعل." },
          ],
        },
      ],
    },
  ],

};