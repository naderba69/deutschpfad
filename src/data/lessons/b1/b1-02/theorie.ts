/**
 * b1-02 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الماضي البسيط (Präteritum) للجميع",
      titleDe: "Das komplette Präteritum",
      explanationAr:
        `الماضي البسيط Präteritum يُبنى بطريقتين. الأفعال المنتظمة تأخذ لاحقة te على الجذع وتحتفظ بلواحقها العادية: arbeiten → ich arbeitete · du arbeitetest · er arbeitete. والأفعال الشاذة تغيّر جذعها نفسه ولا تأخذ te: gehen → ging · kommen → kam · sehen → sah · essen → aß. أمّا الأفعال الشرطية فتأخذ te أيضاً لكنها تفقد umlaut وتبدّل حرفاً: können → konnte · müssen → musste · wollen → wollte · dürfen → durfte.

ومع الشواذ يحدث أمر يُربك المتعلّم العربي: صيغة ich وer تكون بلا لاحقة في الماضي البسيط (ich ging · er ging)، بخلاف المضارع الذي يضيف t في er geht. فالفرق بين «أنا ذهبت» و«هو ذهب» يظهر في الماضي من السياق لا من اللاحقة، وهذا هو أوّل ما يجب استيعابه.

والتوزيع الأسلوبي هو المفتاح العملي: في الكتابة والسرد والتقارير والقصص يُستعمل Präteritum غالباً حتى للأفعال العادية (Ich arbeitete fünf Jahre in einer Firma)، وفي الكلام اليومي يُستعمل Perfekt بدلاً منه. لكن ثلاث مجموعات تبقى في Präteritum حتى في الكلام: sein (war) وhaben (hatte) والأفعال الشرطية (konnte · musste · wollte)، فقولك «Ich war müde» و«Ich hatte Fieber» هو الأصل في الكلام لا استثناء.

وموضع هذا الدرس من مسارك: في A2-01 تعلّمت Perfekt للحكي المحكي، وهذا الدرس يكمل الصورة بوجهها المكتوب؛ والاثنان يعبّران عن الماضي نفسه، فاختيارك بينهما قرارُ أسلوبٍ لا قرار صوابٍ وخطأ.`,
      whyAr:
        "لماذا نتعلّمه كاملاً الآن؟ لأنّ القصص والتقارير والنصوص المكتوبة والمقالات الصحفية تستعمل Präteritum كثيراً، ومن لا يعرفه يبقى قارئاً لنصف النصوص فقط: جملة «Er ging in die Stadt und kaufte ein Brot» تبدو له غامضة رغم أنّه يعرف الفعلين. والسبب الثاني أدائي: اختبارات B1 تقرأ مقالاتٍ ورسائلَ رسمية، ثم تطلب منك كتابة نصٍّ سردي، وفي كليهما يظهر الماضي البسيط. أمّا في الكلام فلا تُثقل نفسك به: Perfekt أسهل وأقرب إلى لسان المتعلّم، ويبقى Präteritum للثلاث مجموعة التي أُشير إليها.",
      table: {
        title: "Präteritum منتظم وشاذ",
        columns: ["الفعل", "Präteritum (ich)", "Partizip II", "النمط"],
        rows: [
          { label: "arbeiten", cells: ["arbeitete", "gearbeitet", "منتظم"] },
          { label: "kaufen", cells: ["kaufte", "gekauft", "منتظم"] },
          { label: "gehen", cells: ["ging", "gegangen", "شاذ"] },
          { label: "kommen", cells: ["kam", "gekommen", "شاذ"] },
          { label: "sehen", cells: ["sah", "gesehen", "شاذ"] },
          { label: "essen", cells: ["aß", "gegessen", "شاذ"] },
          { label: "können", cells: ["konnte", "gekonnt", "شرطي"] },
          { label: "müssen", cells: ["musste", "gemusst", "شرطي"] },
        ],
      },
      examples: [
        { de: "Ich arbeitete fünf Jahre in einer Firma.", ar: "عملت خمس سنوات في شركة." },
        { de: "Er ging jeden Tag zu Fuß zur Arbeit.", ar: "كان يمشي كل يوم إلى العمل." },
        { de: "Sie kam um acht Uhr und begann sofort.", ar: "جاءت في الثامنة وبدأت فوراً." },
        { de: "Wir sahen gestern einen interessanten Film.", ar: "شاهدنا أمس فيلماً مثيراً." },
        { de: "Ich konnte gut mit dem Computer arbeiten.", ar: "كنت أجيد العمل بالحاسوب." },
        { de: "Wir hatten wenig Zeit und mussten schnell arbeiten.", ar: "كان عندنا وقت قليل وكان علينا العمل بسرعة." },
      ],
      comparisonWithArabic:
        "«عملت» = ich arbeitete، و«ذهب» = er ging. العربية تعبّر عن الحدث الماضي بصيغة واحدة عموماً («سافرتُ» · «كنت أكتب» بالصيغ الثلاث: الماضي البسيط والماضي المستمر وكان الناقصة)، فالمتعلّم العربي يجد فائضاً في الألمانية: Perfekt وPräteritum لتعبير ماضٍ واحد. والفارق أنّ العربية تفصل بين الماضي والمنقطع بالمفتاحين (لم · ما) وبـ«كان»، والألمانية تفصل بالسياق: حكيٌ شفويّ ⇒ Perfekt، وسردٌ مكتوب ⇒ Präteritum. وفي الحالتين المعنى واحد والفرق في القيد الأسلوبي لا في الدلالة.",
      eselsbruecke:
        "«المنتظم: +te (أربيته)، الشاذ: غيّر الجذر (غينغ، كام)» — احفظ الشواذ بالثلاثي: gehen-ging-gegangen. جدول الأفعال الشاذة (أعلاه) رفيقك الدائم!",
      commonMistakes: [
        { wrong: "Ich gehen ging (خلط المضارع مع الماضي)", right: "Ich ging.", whyAr: "لا يجتمع المضارع والماضي في فعل واحد: الفعل المصرَّف يحمل زمناً واحداً، فإمّا kommen (مضارع) وإمّا kam أو bin gekommen (ماضٍ)، والصواب هنا Ich ging." },
        { wrong: "ich arbeitete أم ich habe gearbeitet؟", right: "كلاهما صحيح: arbeitete (كتابة) / habe gearbeitet (كلام)", whyAr: "هذا سؤال أسلوب لا سؤال صحّة: arbeitete وhabe gearbeitet كلتاهما صحيحة، والاختيار يتبع نوع النصّ — سردٌ مكتوب يميل إلى Präteritum، وحوارٌ يومي يميل إلى Perfekt — مع بقاء sein وhaben والأفعال الشرطية في Präteritum حتى في الكلام." },
        { wrong: "Ich sah أم Ich habe gesehen؟ في القصة", right: "في القصة: sah (Präteritum). في الكلام: habe gesehen", whyAr: "في القصص والكتابة السردية يكون Präteritum هو الزمن السائد فيُكتب sah، أمّا في الحوار اليومي فيُقال habe gesehen؛ فلا تُقرّخطأً بل خِياراً وفق نوع النصّ." },
      ],
      relatedRuleComparison: {
        title: "Präteritum أم Perfekt — القرار",
        content: "قاعدة عملية: الأفعال المساعدة والشرطية في الكلام → Präteritum (war, konnte). بقية الكلام → Perfekt. الكتابة الرسمية والقصص → Präteritum غالباً.",
      },
    },
    {
      id: "t2",
      titleAr: "الماضي التام المركب (Plusquamperfekt) — ما قبل الماضي",
      titleDe: "Das Plusquamperfekt: hatte/war + Partizip II",
      explanationAr:
        `الماضي التام المركب Plusquamperfekt يعبّر عن حدثٍ وقع قبل حدثٍ ماضٍ آخر، أي «الماضي في الماضي». وتركيبه طبقتان: فعلٌ مساعد في صورة Präteritum (hatte أو war) + Partizip II في نهاية الجملة: Bevor ich studierte, hatte ich gearbeitet. ويختار الفعل المساعد بالقاعدة نفسها التي تخصّ Perfekt: haben للأغلبية، وsein لأفعال الحركة وتغيّر الحال (gehen · kommen · fahren · werden · bleiben).

ووظيفته ترتيبية لا زمنية: المستمع يعرف من الجملة أنّ حدثاً سبق آخر لا أنّ الحدث «قديم جداً». فالماضي الواحد يكفي في العربية أحياناً («عملتُ ثم درستُ»)، والألمانية تحتاج صيغةً ثانية تبيّن الأسبق: hatte gearbeitet (الأسبق) مقابل studierte (اللاحق). ومتى تأخّرت طبقةُ الترقيم الزمني هذا صار الكلام مُبهماً مع أدوات الربط الزمني التي تعتمد عليه: bevor · nachdem · als.

ولهذه الأدوات شرطٌ صارم يغيب عن كثير من المتعلّمين: بعد nachdem يأتي فعلٌ في Plusquamperfekt ثم حدثٌ في الماضي في الجملة الأخرى (Nachdem er die Schule beendet hatte, begann er zu arbeiten)، وبعد bevor يتوقّع التركيب نفسه لتمييز الأسبق من اللاحق. وهذا الارتباط هو ما يجعل القاعدة عمليةً لا ترفاً نحوياً.`,
      whyAr:
        "لماذا نحتاجها؟ لأنّ سرد الأحداث يحتاج ترتيباً ظاهراً لا إحساساً: حدثٌ أسبق (Plusquamperfekt) ثم حدثٌ لاحق (Perfekt أو Präteritum). ومن دونها يفقد السرد اتجاهه، ولا سيّما في تقارير العمل والسير الذاتية حيث تتراكم التجارب بعضها فوق بعض. وهي، على خلاف بقية القواعد، تُوفّر على الكاتب شرحاً: بجملة واحدة «nachdem er die Ausbildung beendet hatte» تُعرف القبلية بلا «ثم» ولا «بعد ذلك».",
      table: {
        title: "Plusquamperfekt",
        columns: ["الفعل", "التركيب", "مثال"],
        rows: [
          { label: "haben", cells: ["hatte + Partizip II", "Ich hatte gearbeitet."] },
          { label: "sein", cells: ["war + Partizip II", "Er war gegangen."] },
          { label: "bevor/als", cells: ["قبل/عندما + Plusquamperfekt", "Bevor ich kam, hatte er gegessen."] },
        ],
      },
      examples: [
        { de: "Bevor ich studierte, hatte ich gearbeitet.", ar: "قبل أن أدرس، كنت قد عملت." },
        { de: "Nachdem er die Schule beendet hatte, begann er zu arbeiten.", ar: "بعد أن أنهى المدرسة، بدأ العمل." },
        { de: "Ich war schon gegangen, als sie ankam.", ar: "كنت قد غادرت عندما وصلت." },
        { de: "Sie hatte alles vorbereitet, bevor das Meeting begann.", ar: "كانت قد جهزت كل شيء قبل أن يبدأ الاجتماع." },
        { de: "Wir hatten die Erfahrung, also bekamen wir den Job.", ar: "كنا نملك الخبرة، لذلك حصلنا على الوظيفة." },
        { de: "Nachdem sie ihr Praktikum beendet hatte, bekam sie eine feste Stelle.", ar: "بعد أن أنهت تدريبها العملي، حصلت على وظيفة دائمة." },
      ],
      comparisonWithArabic:
        "«كان قد عمل» = hatte gearbeitet، والعربية تملك التركيب نفسه بـ«كان» الناقصة + «قد» + الفعل الماضي، فالمقابلة شبه تامّة: Bevor ich studierte, hatte ich gearbeitet = «قبل أن أدرس، كنتُ قد عملتُ». وهذه من القواعد القليلة التي لا فرق بنيوياً فيها بين اللسانين، وتُغتنم فرصة الاستثمار المباشر (transfer). الفارق الوحيد أنّ الألمانية تُلزم الاتساق بين الأداة الزمنية (nachdem) والصيغة (Plusquamperfekt)، بينما العربية تُتصرف في ترتيب «قد» بحرية أكبر.",
      eselsbruecke:
        "«Plusquamperfekt = كان قد»: كل «كان قد» = hatte/war + Partizip II. وعلامته: يأتي مع bevor/nachdem/als.",
      commonMistakes: [
        { wrong: "Ich hatte gearbeitet gehabt (تضاعف)", right: "Ich hatte gearbeitet.", whyAr: "Plusquamperfekt طبقة واحدة فقط: hatte + Partizip II، فتضاعف الفعل المساعد (hatte gearbeitet gehabt) خطأ يخرج عن التركيب المقصود." },
        { wrong: "Bevor ich studierte, ich hatte gearbeitet. (ترتيب)", right: "Bevor ich studierte, hatte ich gearbeitet.", whyAr: "الجملة الثانوية بـbevor إذا تصدّرت الكلام شغلت المكان الأول كلّه، فينتقل فعل الجملة الرئيسية إلى ما بعد الفاصلة مباشرة: hatte ich gearbeitet — لا ich hatte gearbeitet." },
        { wrong: "Nachdem er gegessen hat, ging er. (في السرد الماضي)", right: "Nachdem er gegessen hatte, ging er.", whyAr: "nachdem + Plusquamperfekt للحدث الأقدم شائع في السرد، وفي الكلام اليومي يُستعمل Perfekt أيضاً؛ فالمسألة أسلوبية لا قاعدة مطلقة." },
      ],
      relatedRuleComparison: {
        title: "الأزمنة الثلاثة للماضي",
        content: "Perfekt (حدث قريب/كلام) → Präteritum (كتابة/قصة) → Plusquamperfekt (قبل حدث ماضٍ). الحدث الأقدم Plusquamperfekt، والأحدث Präteritum أو Perfekt، والحاضر Präsens.",
      },
    },
  ];
