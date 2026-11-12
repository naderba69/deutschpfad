/**
 * a2-11 — الشرح النظري (الجزء «theorie»)
 * فُصل من a2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الأفعال الانعكاسية (Reflexive Verben)",
      titleDe: "Reflexive Verben: sich freuen, sich ärgern",
      explanationAr: `الفعل الانعكاسي فعلٌ يرافقه ضمير يعود على الفاعل: Ich wasche mich. — الضمير mich ليس توكيداً ولا «نفسي» حرفية، بل مفعولٌ حقيقي في Akkusativ. ويتغير الضمير مع الفاعل: ich–mich، du–dich، er/sie/es–sich، wir–uns، ihr–euch، sie/Sie–sich، كما يظهر في الجدول.

لكن الأفعال الانعكاسية ليست نمطاً دلالياً واحداً. بعضها يلزمه الضمير في المعنى المستهدف مثل sich beeilen (يستعجل) وsich erholen (يستريح) وsich beschweren (يشتكي)؛ وبعضها فعل متعدٍّ له استعمال انعكاسي إلى جانبه مثل waschen: Ich wasche mich. مقابل Ich wasche das Auto.؛ وبعضها يتغيّر إطاره بتغيّر المعنى مثل sich vorstellen: Ich stelle mich vor. (أعرّف بنفسي) مقابل Ich stelle mir den Ablauf vor. (أتخيّل سير العملية).

لذلك لا تفترض أن الضمير يعني دائماً أن الفاعل «يفعل شيئاً بنفسه» — فـ«sich freuen» تعني «أكون مسروراً/أتطلع إلى…» ولا تعني حرفياً «أُفرح نفسي»؛ فالاستعمال المتعدي المقابل لها هو Das freut mich (هذا يُسعدني). وفي صيغة الجمع قد يُفهم المعنى متبادلاً بحسب السياق: Wir treffen uns. (نلتقي، وغالباً بعضنا بعضاً)، وWir schreiben uns. (نتراسل). والأفضل دائماً حفظ الفعل مع إطاره: الفعل + الضمير + حرف الجر أو المتمم.`,
      whyAr:
        "تصف المراجع النحوية الاستعمالات الانعكاسية الإلزامية، والاستعمال الانعكاسي لفعل يمكن أن يأتي مع مفعول آخر؛ لذلك لا يصح افتراض أن كل ضمير يعني حرفياً أن الفاعل يفعل شيئاً بنفسه. احفظ `sich freuen` بوصفه تركيباً بمعنى «يسرّه/يكون مسروراً»، وقارنه بالإطار المختلف `Das freut mich` = «هذا يُسعدني».",
      table: {
        title: "تصريف sich freuen",
        columns: ["الضمير", "الانعكاسي", "مثال"],
        rows: [
          { label: "ich", cells: ["mich", "Ich freue mich."] },
          { label: "du", cells: ["dich", "Du freust dich."] },
          { label: "er/sie/es", cells: ["sich", "Er freut sich."] },
          { label: "wir", cells: ["uns", "Wir freuen uns."] },
          { label: "ihr", cells: ["euch", "Ihr freut euch."] },
          { label: "sie (هم) / Sie (مخاطبة رسمية)", cells: ["sich", "Die Gäste freuen sich. / Freuen Sie sich auf den Termin?"] },
        ],
      },
      examples: [
        { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع إلى العطلة." },
        { de: "Er ärgert sich über den Lärm.", ar: "ينزعج من الضجيج." },
        { de: "Wir müssen uns anmelden.", ar: "علينا التسجيل." },
        { de: "Beeil dich bitte!", ar: "أسرع من فضلك!" },
        { de: "Ich muss mich erholen.", ar: "عليّ أن أستريح." },
        { de: "Ich hoffe, Sie freuen sich auf den Termin.", ar: "آمل أن تتطلع حضرتك إلى الموعد." },
      ],
      comparisonWithArabic:
        "العربية تعبّر عن الانعكاس غالباً بصيغة الفعل نفسها (اغتسل، استعجل، تشاجر) أو بضمير متصل بالمفعول (أغسل يديّ)، بينما الألمانية تفصله كلمةً مستقلة يتغيّر شكلها مع الفاعل. ولهذا ينسى المتعلّم العربي الضمير أصلاً (Ich freue.) أو يختار صيغةً من الترجمة العربية بدل إطار الفعل (Ich freue mir.). والفرق الثاني أن العربية قد تُخفي المفعول الثاني («أغسل يديّ») بينما الألمانية تُظهره: mir (Dativ) + die Hände (Akkusativ). وتذكّر أن الحالات الألمانية تُحدَّد وفق بناء الفعل والتركيب، لا وفق مساواتها بالنصب والجر العربي.",
      eselsbruecke:
        "احفظ الصيغ مع الفاعل: ich freue mich، du freust dich، er/sie/es freut sich، wir freuen uns، ihr freut euch، sie/Sie freuen sich. `sich` مع الغائب ومع صيغة الاحترام، لكنه لا يعني حرفياً «نفسه/نفسها» في كل تركيب.",
      commonMistakes: [
        {
          wrong: "Ich freue (إذا كان المقصود: أنا مسرور)",
          right: "Ich freue mich.",
          whyAr: "في معنى `sich freuen` المقصود هنا يلزم الضمير؛ أما `Das freut mich` فتركيب آخر بمعنى «هذا يسعدني».",
          classification: "error",
        },
        {
          wrong: "Er freut mich sich.",
          right: "Er freut sich.",
          whyAr: "لا يجتمع ضميران انعكاسيان في هذا الإطار: الضمير واحد يعود على الفاعل er في صورة sich، والجملة تحتمل ضميراً واحداً فقط بعد الفعل المصرف freut.",
          classification: "error",
        },
        {
          wrong: "Ich freue mir auf den Urlaub.",
          right: "Ich freue mich auf den Urlaub.",
          whyAr: "في هذا الإطار المحدد `sich freuen auf` تأتي الصيغة `mich`؛ لا تستنتج صيغة الضمير من ترجمة عربية عامة.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "Akkusativ أم Dativ في أمثلة انعكاسية محددة؟",
        content:
          "لا تحفظ `sich ansehen` أو `sich vorstellen` على أن لهما حالة واحدة في كل معنى. قارن: `Ich sehe dich an.` (Akkusativ: أنظر إليك) و`Ich sehe mir den Film an.` (`mir` Dativ مع مفعول Akkusativ هو `den Film`). وقارن `Ich stelle mich vor.` (أعرّف بنفسي) بـ`Ich stelle mir den Ablauf vor.` (أتخيّل سير العملية). هذه أطر فعلية مختلفة، وليست قاعدة عامة تقول إن أي كلمة أخرى بعد الفعل تفرض Dativ.",
      },
    },
    {
      id: "t2",
      titleAr: "الأفعال الانعكاسية: mich أم mir",
      titleDe: "Reflexive Verben: mich oder mir",
      explanationAr: `اختر الصيغة وفق بناء الفعل في المثال، ولا تحفظ قاعدة عامة من نوع «وجود مفعول آخر يعني Dativ» — فهي غير صحيحة كتعميم. في Ich wasche mich يكون mich مفعولاً في Akkusativ؛ وفي Ich wasche mir die Hände يكون mir في Dativ وdie Hände مفعولاً في Akkusativ. اليدان هنا هما المفعول المباشر، والضمير يدل على صاحب اليدين.

لكل فعل إطاره: sich ansehen يأتي غالباً مع Dativ للشخص أو الشيء المرتبط ومع Akkusativ للمفعول (Ich sehe mir den Film an.)؛ وsich vorstellen يختلف معناه بحسب الضمير (Ich stelle mich vor. أعرّف بنفسي / Ich stelle mir den Ablauf vor. أتخيّل سير العملية)؛ وsich interessieren für يأخذ Akkusativ (Ich interessiere mich für Musik.)؛ وsich bedanken يأخذ bei + Dativ للشخص وfür + Akkusativ للشيء (Ich bedanke mich bei dir für die Hilfe.).

طريقة القرار في ثلاثة أسئلة: ما الفعل وإطاره المعتاد؟ هل الضمير هو المفعول الوحيد أم يوجد مفعول Akkusativ آخر معه؟ وما المعنى المقصود في هذا السياق؟ إن شككت فتحقّق من القاموس على الإطار كاملاً لا على الفعل وحده. واستخدم اسمي الحالتين الألمانيين (Akkusativ/Dativ) دون مساواتهما آلياً بالنصب والجر العربي.`,
      whyAr:
        "يقارن المثالان تركيبين للفعل نفسه: الضمير هو المفعول في `Ich wasche mich`، أما في `Ich wasche mir die Hände` فاليدان هما المفعول Akkusativ والضمير Dativ يشير إلى صاحب اليدين. ولا تعمم هذا الإطار على كل فعل ولا على كل مفعول إضافي؛ فالشيء نفسه يظهر في `Ich putze mir die Zähne`، لكنه لا ينطبق تلقائياً على أفعال أخرى مثل `Ich interessiere mich für Musik` حيث يبقى الضمير في Akkusativ بلا مفعول آخر.",
      table: {
        title: "mich أم mir؟ — أمثلة لا قاعدة آلية",
        columns: ["الإطار في المثال", "الضمير", "الجملة", "المعنى"],
        rows: [
          { label: "Akkusativ: الضمير هو المفعول", cells: ["mich", "Ich freue mich.", "أنا مسرور/أتطلع بحسب السياق."] },
          { label: "Akkusativ: انعكاسي مع waschen", cells: ["dich", "Du wäschst dich.", "تغتسل."] },
          { label: "Dativ + مفعول Akkusativ في هذا النمط", cells: ["mir", "Ich wasche mir die Hände.", "أغسل يديّ."] },
          { label: "Dativ مع etwas vorstellen بمعنى يتخيّل", cells: ["dir", "Stell dir das vor!", "تخيّل ذلك! "] },
          { label: "Akkusativ مع المخاطبة الرسمية Sie", cells: ["sich", "Ich hoffe, Sie freuen sich auf den Termin.", "آمل أن تتطلع حضرتك إلى الموعد."] },
        ],
      },
      examples: [
        { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع إلى العطلة." },
        { de: "Ich wasche mir die Hände.", ar: "أغسل يديّ (mir Dativ، وdie Hände Akkusativ في هذا الإطار)." },
        { de: "Ich sehe mir das Formular an.", ar: "أتفحّص الاستمارة." },
        { de: "Wir treffen uns um sieben.", ar: "نلتقي في السابعة (قد يكون المعنى متبادلاً بحسب السياق)." },
        { de: "Setz dich bitte!", ar: "اجلس من فضلك!" },
        { de: "Ich putze mir die Zähne.", ar: "أنظّف أسناني (mir Dativ، وdie Zähne Akkusativ في هذا الإطار)." },
      ],
      comparisonWithArabic:
        "العربية تعبّر عن الانعكاس بوسائل غير الضمير المنفصل غالباً: صيغة الفعل نفسها (اغتسل، استعجل، تشاجر)، أو ضمير متصل بالمفعول (أغسل يديّ)، أو «نفسي/نفسه» للتوكيد فقط. الألمانية لا تملك صيغة فعلية مماثلة، فتضطر إلى كلمة مستقلة يتغير شكلها مع الفاعل — وهذا سبب شيوع الخطأ عند الناطقين بالعربية: ينسون الضمير (Ich freue.) أو يضعون ضميراً في غير موضعه (Ich freue mir.). كذلك في العربية «أغسل يديّ» لا تُظهر مفعولين، بينما الألمانية تُظهرهما بوضوح: mir (Dativ) وdie Hände (Akkusativ). وتذكّر أن الحالة يحددها الفعل وإطاره، لا الترجمة العربية.",
      eselsbruecke:
        "احفظ المقارنة الخاصة بـ`waschen`: `Ich wasche mich` مقابل `Ich wasche mir die Hände`. لا تستعمل قاعدة «إذا وجدت كلمة أخرى فاختر Dativ» مع كل فعل؛ تعلّم الفعل مع إطاره ومثاله.",
      commonMistakes: [
        {
          wrong: "Ich freue. (إذا كان المقصود: أنا مسرور)",
          right: "Ich freue mich.",
          whyAr: "في معنى `sich freuen` المقصود يلزم الضمير؛ أما `Das freut mich` فهو استعمال متعدٍّ مختلف بمعنى «هذا يسعدني».",
          classification: "error",
        },
        {
          wrong: "Ich wasche mich die Hände.",
          right: "Ich wasche mir die Hände.",
          whyAr: "في هذا المثال يكون الضمير Dativ (`mir`) واسم العضو مفعولاً Akkusativ (`die Hände`)؛ ليست قاعدة عامة لكل فعل.",
          classification: "error",
        },
        {
          wrong: "Er interessiert ihn für Musik. (إذا كان المقصود أنه هو نفسه مهتم)",
          right: "Er interessiert sich für Musik.",
          whyAr: "الجملة الأولى يمكن أن تعني أنه يجعل شخصاً آخر يهتم بالموسيقى؛ إذا كان هو نفسه المهتم فنستخدم `sich interessieren für`. يوضح Duden المعنيين المتعدي والانعكاسي.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "انعكاسي أم متبادل في سياق الجمع؟",
        content:
          "في المعنى المستهدف هنا نقول `sich freuen` و`sich bedanken` مع الضمير الانعكاسي. وقد يُفهم ضمير الجمع المتبادل من السياق: `Wir treffen uns.` (نلتقي، وغالباً بعضنا بعضاً)، و`Sie streiten sich.` (يتشاجرون فيما بينهم في السياق المعتاد). لا تستنتج التبادل من صيغة الجمع وحدها.",
      },
    },
  ];
