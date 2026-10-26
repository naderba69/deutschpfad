/**
 * a2-03 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-03.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "صيغ الطلب في المطعم — اختيارٌ بحسب السياق",
      titleDe: "Im Restaurant bestellen: Formulierungen im Kontext",
      explanationAr:
        `تسمع في المطعم صيغاً مختلفة للطلب، ولا تصطفّ في سلّم عالميّ ثابت للتأدّب. يتأثر وقع العبارة بالموقف، والنبرة، والعلاقة بين المتحدثين، وما إذا أضيفت كلمات مثل **bitte**.

· **Ich möchte …** صيغة شائعة للرغبة أو الطلب: **Ich möchte einen Kaffee, bitte.** استُعملت **möchte** كثيراً في الطلبات اليومية. تاريخياً هي صيغة Konjunktiv II من **mögen**، لكنّها تُعامل في الاستعمال الحديث غالباً كصيغة الحاضر؛ فلا نصف كل استعمال لها كأنّه شرطٌ حيّ.
· **Ich hätte gern …** صيغة طلب شائعة أخرى: **Ich hätte gern einen Salat, bitte.** و**hätte** صيغة Konjunktiv II من **haben**؛ وهي لا تجعلها «أرقى» في كل موقف من möchte.
· **Ich nehme …** اختيارٌ مألوف لما ستتناوله: **Ich nehme die Suppe.**
· **Könnte ich bitte … haben?** سؤالٌ يمكن أن يخفف الطلب في سياقات كثيرة: **Könnte ich bitte die Karte haben?** وليس قاعدةً آليةً بأن السؤال دائماً ألطف من الخبر.
· **Für mich bitte …** تركيب مختصر ممكن في الطلب: **Für mich bitte einen Salat.**
· **Ich will …** صحيحة نحوياً وتعبّر بوضوح عن الإرادة؛ قد تبدو مباشرةً في طلب خدمة، ويؤثر السياق والنبرة ووجود **bitte** في وقعها. لذلك لا نسمّيها «مرفوضة اجتماعياً» ولا نعدّها خطأً.

في **hätte gern + اسم** يأتي الاسم في الحالة المطلوبة في الجملة؛ في **Ich hätte gern einen Salat** نقول **einen Salat** لأنّ المفعول مذكر منصوب. نتدرّب هنا على فهم العبارات واختيارها لموقف محدد، لا على ترتيبها من الأكثر إلى الأقل تهذّباً.`,
      whyAr:
        "المتعلم يحتاج إلى أكثر من صيغة واحدة ليختار ما يناسب الموقف، وإلى فهم أن صحة التركيب النحوي لا تحسم وحدها أثره التداولي. قدّمت A1-06 بالفعل möchte وميّزت بين سياقاتها وwill؛ يوسّع هذا القسم التدريب إلى صيغ أخرى في طلب المطعم، من غير ادعاء سلّم تأدب ثابت أو معيار امتحاني.",
      table: {
        title: "صيغ ممكنة ومعناها في الموقف",
        columns: ["الصيغة", "وظيفة ممكنة", "ملاحظة السياق", "مثال"],
        rows: [
          {
            label: "Ich möchte …",
            cells: ["رغبة أو طلب", "صيغة شائعة للطلب؛ ليست درجة رقمية", "Ich möchte einen Tee, bitte."],
          },
          {
            label: "Ich hätte gern …",
            cells: ["طلب بصيغة gern", "صيغة شائعة أخرى؛ لا يلزم أن تكون أرقى من möchte", "Ich hätte gern einen Salat."],
          },
          {
            label: "Ich nehme …",
            cells: ["اختيار من القائمة", "مناسبة عند بيان ما ستتناوله", "Ich nehme die Suppe."],
          },
          {
            label: "Für mich bitte …",
            cells: ["طلب مختصر", "يتحدد وقعه بالنبرة والمقام", "Für mich bitte einen Salat."],
          },
          {
            label: "Könnte ich … haben?",
            cells: ["طلب في صورة سؤال", "قد يخفف الطلب؛ ليست قاعدة مطلقة", "Könnte ich bitte die Karte haben?"],
          },
          {
            label: "Ich will …",
            cells: ["إرادة أو طلب مباشر", "صحيحة؛ قد تكون مباشرةً بحسب السياق", "Ich will einen Kaffee, bitte."],
          },
        ],
      },
      examples: [
        {
          de: "Ich hätte gern einen Kaffee, bitte.",
          ar: "أودّ قهوةً من فضلك. (صيغة طلب شائعة)",
        },
        {
          de: "Ich möchte die Gemüsesuppe, bitte.",
          ar: "أودّ شوربة الخضار من فضلك.",
        },
        {
          de: "Ich nehme das Schnitzel mit Pommes.",
          ar: "سآخذ الشنيتسل مع البطاطا. (اختيار من القائمة)",
        },
        {
          de: "Ich will heute einen Tee.",
          ar: "أريد شاياً اليوم. (صحيحة، ووقعها المباشر يتأثر بالسياق والنبرة)",
        },
        {
          de: "Könnte ich bitte noch ein Glas Wasser haben?",
          ar: "هل يمكنني الحصول على كأس ماء آخر من فضلك؟",
        },
        {
          de: "Für mich bitte nur einen Salat.",
          ar: "لي سلطة فقط من فضلك. (صيغة مختصرة)",
        },
        {
          de: "Wir hätten gern die Karte, bitte.",
          ar: "نودّ قائمة الطعام من فضلك. (تصريف wir: hätten)",
        },
        {
          de: "Ich mag Fisch, aber heute möchte ich Fleisch.",
          ar: "أحبّ السمك، لكنّي أودّ اللحم اليوم. (ميلٌ عام مقابل رغبة في هذا الموقف)",
        },
      ],
      comparisonWithArabic:
        `يمكن أن تضيف العربية كلمات مثل «من فضلك» أو «لو سمحت»، ويمكن للألمانية أن تستعمل **bitte** أيضاً إلى جانب أفعال الطلب. لا توجد مطابقة آلية بين فعل عربي وصيغة ألمانية واحدة، ولا قاعدة تقول إن إضافة bitte تجعل كل عبارة متساوية في وقعها.

**Ich möchte** و**Ich hätte gern** و**Ich nehme** و**Könnte ich …?** خيارات مختلفة للتعبير عن الرغبة أو الاختيار أو الطلب؛ يحدّد السياق والنبرة ما يلائم. أمّا **Ich will einen Kaffee** فهي سليمة نحوياً، لكنها قد تبدو أكثر مباشرة في موقف خدمة؛ ويمكن أن تغيّر **bitte** والنبرة أثرها. لا نصف صيغة صحيحة بأنها ممنوعة اجتماعياً، ولا نعمّم على كل متحدثي العربية طريقةً واحدة لصنع التأدّب.`,
      eselsbruecke:
        "لا تحفظ سلّماً ثابتاً: احفظ الصيغة ومعناها، ثمّ انظر إلى الموقف والنبرة. ومن الخيارات الشائعة: **Ich möchte … / Ich hätte gern … / Ich nehme …**.",
      commonMistakes: [
        {
          wrong: "Ich will einen Kaffee, bitte.",
          right: "Ich hätte gern einen Kaffee, bitte. (إذا أردت صياغة أقل مباشرة في هذا المثال)",
          whyAr:
            "الجملة الأولى صحيحة نحوياً؛ قد تبدو مباشرة في بعض طلبات الخدمة. الصيغة الثانية بديل شائع أقل مباشرة في المثال، وليست تصحيحاً لخطأ نحوي ولا قاعدة مطلقة.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich hätte gern ein Salat.",
          right: "Ich hätte gern einen Salat.",
          whyAr:
            "في هذا التركيب يكون der Salat مفعولاً منصوباً مذكراً؛ لذلك نقول einen Salat.",
          classification: "error",
        },
        {
          wrong: "Ich möchte einen Kaffee trinken möchte.",
          right: "Ich möchte einen Kaffee trinken.",
          whyAr:
            "في هذا التركيب يأتي الفعل المصرف möchte مرةً واحدة، والمصدر trinken في نهاية الجملة.",
          classification: "error",
        },
        {
          wrong: "Ich mag einen Kaffee. (إذا كان المقصود طلبه الآن)",
          right: "Ich möchte einen Kaffee. / Ich hätte gern einen Kaffee.",
          whyAr:
            "mag يعبّر غالباً عن الميل أو التفضيل؛ لا يصرّح وحده بالطلب في هذا المثال. الجملة ليست خطأً نحوياً في كل سياق.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Wir hätte gern zwei Bier.",
          right: "Wir hätten gern zwei Bier.",
          whyAr:
            "مع wir نقول hätten، لا hätte؛ أمّا عبارة zwei Bier فهي طلب مختصر ممكن في سياق المطعم.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "möchte بين أصل الصيغة واستعمالها الحالي",
        content:
          "تذكر IDS Grammis أن **möchte** أصلها التاريخي Konjunktiv II من **mögen**، لكنها تُعامل في الاستعمال الحديث غالباً كصيغة الحاضر. أمّا **hätte** فهي صيغة Konjunktiv II من **haben**، وتظهر في النمط الشائع **Ich hätte gern …**. ليست هذه أول مرة تظهر فيها möchten: تناولتها A1-06، ثمّ توسّع B1-04 في وظائف Konjunktiv II الأخرى؛ وهذا القسم يراجع الصيغة ويضيف استعمال المطعم، لا يقدّم تاريخاً كاملاً للنحو.",
      },
    },
    {
      id: "t2",
      titleAr: "الشخص في Dativ: schmecken ومراجعة gefallen وpassen",
      titleDe: "Schmecken, gefallen und passen: Beispiele mit Dativ",
      explanationAr:
        `في النمط المقصود هنا، يكون الطعام أو الموعد أو الشيء **فاعلاً نحوياً في Nominativ**، ويأتي الشخص المعني في صيغة **Dativ**:
· **Das Essen schmeckt mir gut.** — الطعام طيّب المذاق عندي.
· **Das Restaurant gefällt mir.** — يعجبني المطعم / يلقى قبولي.
· **Der Termin passt uns gut.** — الموعد مناسب لنا.

يتبع الفعل فاعله النحوي: **Das Essen schmeckt** (مفرد)، و**Die Nudeln schmecken** (جمع)، مهما تغيّرت صيغة الضمير في Dativ. ولا يعني اجتماع البنية في هذه الأمثلة أن الأفعال متطابقة في المعنى أو أن كل استعمال لها يصف «أثراً» واحداً.

**schmecken** له استعمالان ينبغي عدم خلطهما: **Die Suppe schmeckt mir gut** تصف مذاقها بالنسبة إلى الشخص؛ أما **Ich schmecke die Suppe** فقد تعني أنني أتذوقها/أتبين مذاقها، وهي جملة صحيحة في هذا المعنى. في جملة التقييم يمكن أن يساعد **gut** أو **ausgezeichnet** على بيان الرأي بوضوح.

**gefallen** يعني أن شيئاً يلقى قبول شخص أو يترك لديه انطباعاً حسناً، ولا يقتصر على المظهر. ويمكن أن يكون **Das Essen gefällt mir** صحيحاً عند الحديث عن الانطباع العام؛ إذا كان المقصود تحديداً مذاق الطبق فـ**Das Essen schmeckt mir** أوضح. و**passen** يتغير معناه بحسب السياق: قد يلائم الموعد شخصاً، أو يكون المقاس مناسباً، أو ينسجم شيء مع آخر.

للمقارنة مع العربية، قد تساعدك الجملة **«أعجبني الطعام»** على ملاحظة أن الطعام هو الفاعل الدلالي والشخص هو من يختبر الأثر؛ لكنها ليست حالة Dativ ألمانية. ضمير العربية **ـني** يُحلَّل في نظام العربية، أما الألمانية فتستعمل **mir** بوصفه Dativ. التشابه هنا في توزيع الأدوار الدلالية، لا في تطابق الحالات أو علامات الإعراب.`,
      whyAr:
        "هذه مراجعة متدرجة لا أول لقاء بـDativ أو بهذه الأفعال. ظهر Dativ المكاني وذُكرت أفعال مثل gefallen/passen في A1-04؛ وترد صيغة helfen مع mir في A1-06؛ ثمّ خصص A1-08 تدريباً سياقياً على gefallen/passen/stehen، وتناول A2-02 أمثلة fehlen/wehtun. يضيف A2-03 تركيزاً على معنى schmecken في وصف المذاق، وعلى مطابقة الفعل مع فاعله، مع توضيح أن الصيغ التي تضم Dativ ليست عائلةً ذات معنى واحد.",
      table: {
        title: "أمثلة مختلفة على فاعلٍ ومتمّم Dativ",
        columns: ["الفعل/التركيب", "الفاعل (Nominativ)", "الشخص (Dativ)", "ملاحظة المعنى"],
        rows: [
          {
            label: "schmecken",
            cells: ["Das Essen", "mir", "مذاق الطعام بالنسبة إلى الشخص؛ للفعل استعمالات أخرى أيضاً"],
          },
          {
            label: "gefallen",
            cells: ["Das Restaurant", "mir", "يلقى قبولي/يترك انطباعاً حسناً، لا المظهر وحده"],
          },
          {
            label: "passen",
            cells: ["Der Termin", "uns", "يناسبنا في هذا السياق؛ وله استعمالات أخرى"],
          },
          {
            label: "fehlen",
            cells: ["Der Löffel", "mir", "ينقصني الملعقة في المثال"],
          },
          {
            label: "wehtun",
            cells: ["Der Bauch", "mir", "يؤلمني البطن؛ تركيبٌ فعليّ مختلف"],
          },
          {
            label: "gehören",
            cells: ["Das Glas", "dir", "ملكية؛ المثال للمقارنة في البنية لا في معنى الإحساس"],
          },
        ],
      },
      examples: [
        {
          de: "Das Essen schmeckt mir sehr gut.",
          ar: "مذاق الطعام طيّب جداً بالنسبة إليّ. (Das Essen فاعل، وmir في Dativ)",
        },
        {
          de: "Die Nudeln schmecken mir nicht.",
          ar: "لا يعجبني مذاق المعكرونة. (فاعل جمع، لذلك schmecken)",
        },
        {
          de: "Hat es Ihnen geschmeckt? – Ja, ausgezeichnet, danke!",
          ar: "هل راق لكم مذاق الطعام؟ — نعم، ممتاز، شكراً!",
        },
        {
          de: "Das Restaurant gefällt mir, aber das Essen schmeckt mir nicht.",
          ar: "يعجبني المطعم، لكن مذاق الطعام لا يعجبني.",
        },
        {
          de: "Passt Ihnen ein Tisch am Fenster?",
          ar: "هل تناسبكم طاولة عند النافذة؟ (بحسب سياق الاختيار)",
        },
        {
          de: "Wie schmeckt dir die Suppe? – Sie ist ein bisschen salzig.",
          ar: "كيف مذاق الشوربة بالنسبة إليك؟ — مالحة قليلاً.",
        },
        {
          de: "Uns hat das Schnitzel sehr gut geschmeckt.",
          ar: "كان مذاق الشنيتسل طيباً جداً بالنسبة إلينا. (Perfekt مع haben)",
        },
        {
          de: "Der Nachtisch hat allen geschmeckt.",
          ar: "أعجبت الحلوى الجميع من حيث المذاق. (allen في Dativ)",
        },
      ],
      comparisonWithArabic:
        `في **«أعجبني الطعام»** الطعام فاعلٌ، والشخص مضمَّن في الضمير **ـني** وفق تحليل العربية. وفي **Das Essen schmeckt mir** الطعام فاعل، و**mir** في Dativ وفق قواعد الألمانية. يمكن أن تساعد المقارنة في ملاحظة من يقوم بالدور الدلالي في الجملة، لكنها لا تجعل Dativ الألمانية مقابلاً مباشراً لـ«الجرّ» العربي ولا تنقل علامة حالة من لغة إلى أخرى.

انتبه أيضاً إلى المعنى: **Ich schmecke die Suppe** يمكن أن تصف التذوق، فلا تُعدّ خطأً في ذاتها؛ أما **Die Suppe schmeckt mir gut** فتصف المذاق بالنسبة إلى الشخص. و**gefallen** أوسع من الإعجاب البصري، بينما يحدد السياق أيّ معنى من معاني **passen** هو المقصود.`,
      eselsbruecke:
        "في المثال **Das Essen schmeckt mir gut** اسأل: ما الفاعل الذي يحدد تصريف الفعل؟ **Das Essen**. ومن الشخص المعني بالمذاق؟ **mir** في Dativ. لا تستنتج من المثال قاعدةً لكل استعمالات الفعل.",
      commonMistakes: [
        {
          wrong: "Ich schmecke das Essen. (إذا كان المقصود أن مذاقه طيب لي)",
          right: "Das Essen schmeckt mir gut.",
          whyAr:
            "الجملة الأولى صحيحة في معنى «أتذوق الطعام»، لكنها لا تعبّر وحدها عن تقييم مذاقه بالنسبة إليّ. الصيغة الثانية هي المقصودة لهذا المعنى.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Die Nudeln schmeckt mir.",
          right: "Die Nudeln schmecken mir.",
          whyAr:
            "الفاعل Die Nudeln جمع؛ لذلك يأتي الفعل بصيغة الجمع. وجود mir في Dativ لا يغيّر تصريف الفعل.",
          classification: "error",
        },
        {
          wrong: "Das Essen schmeckt mich.",
          right: "Das Essen schmeckt mir.",
          whyAr:
            "في هذا البناء يأتي الشخص المعني بالمذاق في Dativ، لذا نستخدم mir لا mich.",
          classification: "error",
        },
        {
          wrong: "Das Essen gefällt mir sehr gut. (إذا كان المقصود تحديد مذاقه)",
          right: "Das Essen schmeckt mir sehr gut.",
          whyAr:
            "الجملة الأولى صحيحة ويمكن أن تصف الانطباع العام؛ أما schmecken فتحدد معنى المذاق بوضوح. الاختيار دلاليّ لا تصحيحٌ لخطأ نحوي.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Schmeckt es Sie?",
          right: "Schmeckt es Ihnen?",
          whyAr:
            "في هذا السؤال الرسمي يأتي الضمير Ihnen بصيغة Dativ؛ لا نضع Sie في هذا الموضع.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "ما سبق عن Dativ وهذه الأفعال",
        content:
          `| الدرس | ما يظهر فيه | صلته بهذا القسم |
|---|---|---|
| A1-04 | Dativ مكاني، مع ذكر gefallen/passen ضمن أمثلة أفعال تأخذ هذه الصيغة | تعرض سابق، لا بداية التعلّم |
| A1-06 | مثال **Können Sie mir helfen?** | سبق ظهور ضمير Dativ في جملة |
| A1-08 | تدريب سياقي على gefallen/passen/stehen في الملابس | مراجعة للمعاني والبنى بحسب السياق |
| A2-02 | fehlen وwehtun في سياق الطبيب | أمثلة سابقة مختلفة المعنى |
| A2-03 | schmecken، مع مراجعة gefallen/passen | التركيز هنا على المذاق واتفاق الفعل مع الفاعل |
| A2-09 | Dativ مع أسماء وضمائر وأفعال مختارة | معالجة لاحقة أوسع؛ لا ندّعي أن هذا أول تعرض أو أن درساً واحداً يحصي النظام كله |`,
      },
    },
    {
      id: "t3",
      titleAr: "عبارات ومواقف مختارة في المطعم",
      titleDe: "Im Restaurant: ausgewählte Situationen und Redemittel",
      explanationAr:
        `يعرض هذا القسم عباراتٍ يمكن استعمالها في مواقف مطعم محددة، لا مساراً إلزامياً لكل زيارة. قد تطلب لافتة في مكان ما الانتظار أو يرافقك موظف إلى الطاولة؛ اتبع التعليمات المكتوبة أو اسأل عند عدم التأكد.

تختلف خطوات الطلب بين الحوارات نفسها: في قصة القراءة تأتي المشروبات أولاً، بينما يسأل حوار الاستماع عن اختيار الطعام ثم عن الشراب. هذا اختلاف ممكن، لا تناقضٌ نحوي ولا قاعدة عن ترتيب الخدمة. وتظهر في القوائم كلمات مثل **Vorspeise** (مقبّلات)، و**Hauptgericht** (طبق رئيس)، و**Beilage** (طبق جانبي)، و**Nachtisch/Nachspeise** (حلوى)؛ وهي أسماء لأقسام أو أطباق، وليست ترتيباً واجباً.

يمكن أن تسمع **Stilles Wasser oder mit Kohlensäure?** للسؤال عن ماء بلا غاز أو فوّار؛ و**ein stilles Wasser** لا يحدد وحده إن كان المقصود ماء الصنبور. إذا أردت ماء الصنبور فاسأل **Haben Sie Leitungswasser?**؛ واسأل المكان عن التوفر والسعر. مصدر جودة ماء الصنبور لا يحدد سياسة المطعم.

من العبارات العملية: **Die Rechnung, bitte** لطلب الحساب، و**Zusammen oder getrennt?** سؤالٌ عن طريقة الحساب إذا طُرح في ذلك الموقف. يمكن الإجابة **Zusammen, bitte** أو **Getrennt, bitte**. لا نستنتج من السؤال أو من قصة واحدة قاعدةً وطنية أو واجبة.

وعن الإكرامية، يصف دليل الزوار في Berlin.de الإكرامية بأنها طوعية لكنها شائعة في خدمات مثل المطاعم؛ ويذكر التقريب أو 5–10% في بعض المقاهي ذات الجلوس والحانات والمطاعم غير الرسمية، كما يذكر وضع بعض الحانات علبةً للإكرامية. في المقابل يورد دليل visitBerlin للمطاعم 10–15%؛ اختلاف توصيات دليلين محليين يؤكد أنها إرشادات لا نسبة ثابتة أو إلزامية. لا نعمّمها على ألمانيا كلها أو على كل منشأة. في المثال **Das macht 18,50 € – Zwanzig, bitte** يكون المقصود دفع إجمالي عشرين يورو؛ و**Stimmt so** تعني أن يحتفظ البائع بالباقي في هذا السياق.`,
      whyAr:
        "تساعد العبارات النموذجية على فهم حوار قصير والتدرّب على طلب المعلومة أو الحساب. أما الممارسات التجارية والثقافية فتختلف بين المطاعم والمناطق؛ لذلك يقيّد الدرس أمثلته بالمشهد المكتوب ويقدّم الإرشاد الثقافي بوصفه مثالاً موثقاً، لا استعداداً عاماً ولا قاعدة اجتماعية شاملة.",
      table: {
        title: "عبارات محتملة في مشاهد الدرس",
        columns: ["الموقف", "سؤال ممكن", "رد ممكن"],
        rows: [
          {
            label: "عند الوصول",
            cells: ["Haben Sie reserviert?", "Ja, auf den Namen Ben Ali. / Nein, haben Sie noch einen Tisch für zwei frei?"],
          },
          {
            label: "اختيار المشروب",
            cells: ["Was möchten Sie trinken?", "Ein stilles Wasser, bitte."],
          },
          {
            label: "اختيار الطعام",
            cells: ["Was möchten Sie essen?", "Als Hauptgericht hätte ich gern das Schnitzel."],
          },
          {
            label: "بعد الطعام",
            cells: ["Hat es Ihnen geschmeckt?", "Ja, sehr gut, danke! / Ja, ausgezeichnet!"],
          },
          {
            label: "الحساب، إن سُئلت",
            cells: ["Zusammen oder getrennt?", "Zusammen, bitte. / Getrennt, bitte."],
          },
          {
            label: "دفع نقدي في المثال",
            cells: ["Das macht 18,50 €.", "Zwanzig, bitte. / Stimmt so."],
          },
        ],
      },
      examples: [
        {
          de: "Haben Sie noch einen Tisch für zwei Personen frei?",
          ar: "هل لديكم طاولة متاحة لشخصين؟",
        },
        {
          de: "Ich habe einen Tisch auf den Namen Ben Ali reserviert.",
          ar: "حجزتُ طاولةً باسم بن علي.",
        },
        {
          de: "Stilles Wasser oder mit Kohlensäure?",
          ar: "ماء بلا غاز أم فوّار؟ (سؤال عن نوع الماء)",
        },
        {
          de: "Als Vorspeise hätte ich gern die Suppe.",
          ar: "كمقبّلات أودّ الشوربة.",
        },
        {
          de: "Guten Appetit! – Danke, gleichfalls!",
          ar: "بالهناء! — شكراً، وأنت كذلك! (إذا كان الآخر يتناول الطعام أيضاً)",
        },
        {
          de: "Zusammen oder getrennt? – Getrennt, bitte.",
          ar: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة من فضلك.",
        },
        {
          de: "Das macht 18,50 €. – Zwanzig, bitte.",
          ar: "الحساب ١٨٫٥٠. — عشرون من فضلك. (إجمالي المبلغ في هذا المثال)",
        },
        {
          de: "Entschuldigung, der Fisch ist leider ziemlich trocken. Könnten Sie das bitte an die Küche weitergeben?",
          ar: "عذراً، السمك جافّ للأسف إلى حدّ ما. هل يمكن أن تنقلوا ذلك إلى المطبخ من فضلكم؟",
        },
      ],
      comparisonWithArabic:
        `تعرض هذه العبارات وسائل السؤال عن الطاولة والطلب والحساب، ولا تفترض أن العادات في بلدٍ أو أسرةٍ عربية واحدة. لا يلزم أن يتبع كل مطعم ترتيباً واحداً، ولا أن يُطلب ماء الصنبور أو تُقسّم الفاتورة أو تُعطى الإكرامية بالطريقة نفسها في كل مكان.

**Guten Appetit!** تهنئةٌ بالوجبة؛ يمكن الرد **Danke**، أو **Danke, gleichfalls** إذا كان المتحدث الآخر يأكل أيضاً. و**Zusammen oder getrennt?** سؤالٌ عن طريقة الحساب عند طرحه، لا دليلٌ على قاعدة عامة بشأن الضيافة.

يصف دليل الزوار في Berlin.de الإكرامية بأنها طوعية ويذكر أساليب محلية، منها التقريب وإخبار النادل بالمجموع المراد دفعه، كما يذكر علباً للإكرامية في بعض الحانات. وتختلف الأرقام بين أدلة برلين: يذكر Berlin.de نطاق 5–10% لسياقات محددة، بينما يذكر visitBerlin 10–15% للمطاعم. هذه إرشادات متباينة وليست قاعدة ملزمة. لذلك لا نحوّل صيغة **Zwanzig, bitte** إلى قاعدة عن كل المطاعم، ولا نحكم على طريقة دفع أخرى بأنها خطأ لغوي أو اجتماعي.`,
      eselsbruecke:
        "احفظ العبارة مع موقفها: **Die Rechnung, bitte** لطلب الحساب؛ أمّا ترتيب الطلب، وتقسيمه، والإكرامية فتتفاوت بحسب المكان.",
      commonMistakes: [
        {
          wrong: "In Deutschland werden Gäste in jedem Restaurant platziert.",
          right: "Die Abläufe variieren; folgen Sie einer vorhandenen Beschilderung oder fragen Sie freundlich.",
          whyAr:
            "هذه عبارة ثقافية مطلقة غير مسندة. الانتظار مناسب إذا دعت إليه لافتة أو تعليمات المكان؛ لا نعممه على كل المطاعم.",
          classification: "unverified-claim",
        },
        {
          wrong: "In jedem Restaurant kommen die Getränke vor dem Essen.",
          right: "Die Reihenfolge kann variieren; die beiden Dialoge hier zeigen unterschiedliche Abläufe.",
          whyAr:
            "القصة تقدّم المشروبات أولاً، بينما يبدأ حوار الاستماع باختيار الطعام؛ لا يثبت أي منهما ترتيباً عاماً.",
          classification: "unverified-claim",
        },
        {
          wrong: "Ein Wasser bedeutet immer kostenloses Leitungswasser.",
          right: "Ein stilles Wasser, bitte. / Haben Sie Leitungswasser?",
          whyAr:
            "العبارة الأولى لا تحدد وحدها ماء الصنبور أو سياسة السعر؛ إذا كان ذلك مهماً فاسأل بوضوح.",
          classification: "unverified-claim",
        },
        {
          wrong: "Getrennte Rechnungen sind in Deutschland immer die übliche Wahl.",
          right: "Zusammen, bitte. / Getrennt, bitte.",
          whyAr:
            "العبارتان خياران لغويان صحيحان؛ لا يثبت السؤال أو هذا المثال عادةً واحدةً لكل المجموعات والمطاعم.",
          classification: "unverified-claim",
        },
        {
          wrong: "Man muss in jedem deutschen Restaurant 10 Prozent Trinkgeld geben und es immer mündlich bezahlen.",
          right: "Berliner Besucherinformationen bezeichnen Trinkgeld als freiwillig; ihre Zahlen und Beispiele unterscheiden sich.",
          whyAr:
            "التعميم الإلزامي لا يسنده المصدر: دليل برلين يصف الإكرامية بأنها اختيارية، ويخصّص مقداراً وطريقةً بسياقات محلية؛ ويذكر علب الإكرامية في بعض الحانات.",
          classification: "unverified-claim",
        },
      ],
      relatedRuleComparison: {
        title: "مواقف الخدمة: عبارات قابلة للتكييف",
        content:
          "في A2-01 دُرّبت صيغ شكوى مهذّبة، وهنا يظهر مثال عن طعام جاف: **Der Fisch ist leider ziemlich trocken. Könnten Sie das bitte an die Küche weitergeben?** يمكن تغيير تفاصيل الطلب وفق المشكلة الفعلية. أمّا خطوات الخدمة—الجلوس، وتوقيت الطلب، ونوع الماء، وتقسيم الفاتورة، والإكرامية—فلا تُعامل كقواعد ثابتة؛ اسأل عند الحاجة واتبع تعليمات المكان.",
      },
    },
    {
      id: "t4",
      titleAr: "صفات الطعم والكميات وعبارة etwas Warmes",
      titleDe: "Geschmack, Mengen und etwas Warmes",
      explanationAr:
        `تصف هذه الكلمات أبعاداً مختلفة للطعام: **süß** حلو، و**sauer** حامض، و**bitter** مُرّ، و**salzig** مالح. أمّا **scharf** فيصف الطعم الحارّ/اللاذع، و**warm/heiß** يصفان حرارة الطعام أو الشراب.

قارن **Die Suppe ist sehr salzig** (الشوربة مالحة جداً) بـ**Die Suppe ist mir zu salzig** (ملوحتها أكثر مما أراه مناسباً). كلمة **zu** تعبّر عن تجاوز حدّ المتكلم، لكنها لا تطلب تلقائياً استبدال الطبق؛ إذا أردت طلب تغيير فقل ذلك صراحةً.

في **Ich möchte etwas Warmes essen** استُعملت الصفة اسماً بعد **etwas**؛ لذلك تبدأ بحرف كبير وتأتي هنا بنهاية **-es**. هذه ملاحظة عن هذا التركيب، لا شرح كامل لتصريف الصفات. وتصح أيضاً **Ich möchte etwas warm essen**؛ فـ**warm essen** تعبير عن تناول طعام دافئ. الصيغتان متقاربتان في المعنى هنا، لكن الفرق في البنية والكتابة: في الأولى **Warmes** اسم مشتق، وفي الثانية تبقى **warm** صغيرة.

للكميات، نقول **zwei Tassen Kaffee** لأننا نعدّ فنجانين/كوبين، و**zwei Gläser Wasser** عندما نتحدث عن كأسين قابلين للعدّ. يتبع الجمع هنا عدد الأشياء المعدودة، لا جنس الاسم. وتختلف صيغة وحدة القياس في بعض التراكيب: يسجل Duden استعمال **zwei Glas Wein** في سياق كمية/طلب مشروب، فلا نعمّم قاعدة **Gläser** على كل عبارات القياس. ويمكن أن تقول عن شرابين من التفاح: **zwei Apfelschorlen**، أو **zwei Gläser Apfelschorle**.`,
      whyAr:
        "يعالج القسم مفردات ووحدات معدودة محددة يحتاجها المتعلم في القائمة والطلب، ويقارن بين عبارتين صحيحتين عند اختلاف التركيب. لا يدّعي تعليم نظام الصفات أو وحدات القياس الألماني كاملاً؛ كما يفصل بين الطعم وحرارة الطعام لتقليل الالتباس. وتتكرر هذه المفردات في المطاعم والأسواق والمحادثات اليومية، لذلك يساعد فهم سبب اختيار كل عبارة على استعمالها بدقة لا بحفظها كقائمة صماء.",
      table: {
        title: "وصف الطعم والحرارة في أمثلة قصيرة",
        columns: ["الكلمة", "المعنى المقصود", "مثال", "ملاحظة"],
        rows: [
          {
            label: "süß",
            cells: ["حلو", "Der Nachtisch ist süß.", "وصف للطعم"],
          },
          {
            label: "sauer",
            cells: ["حامض", "Die Zitrone schmeckt sauer.", "وصف للطعم"],
          },
          {
            label: "bitter",
            cells: ["مُرّ", "Der Kaffee schmeckt bitter.", "وصف للطعم"],
          },
          {
            label: "salzig",
            cells: ["مالح", "Die Suppe ist mir zu salzig.", "zu salzig يتضمن تقديراً بأنه أكثر من المناسب للمتكلم"],
          },
          {
            label: "scharf",
            cells: ["حارّ/لاذع في الطعم", "Das Curry ist sehr scharf.", "ليس وصفاً لدرجة الحرارة هنا"],
          },
          {
            label: "warm / heiß",
            cells: ["دافئ / ساخن", "Der Tee ist noch heiß.", "وصف لدرجة الحرارة"],
          },
        ],
      },
      examples: [
        {
          de: "Der Kaffee ist mir zu bitter.",
          ar: "القهوة مُرّة أكثر مما أفضّل.",
        },
        {
          de: "Das Wasser ist noch warm.",
          ar: "الماء ما زال دافئاً. (حرارة، لا طعم حار)",
        },
        {
          de: "Die Suppe ist sehr salzig, aber nicht zu salzig für mich.",
          ar: "الشوربة مالحة جداً، لكنها ليست أكثر من المناسب لي.",
        },
        {
          de: "Das Curry ist scharf, aber nur lauwarm.",
          ar: "الكاري حارّ في الطعم، لكنه فاتر فقط. (وصفان مختلفان)",
        },
        {
          de: "Ich möchte etwas Warmes essen.",
          ar: "أودّ أن آكل شيئاً دافئاً. (Warmes اسم مشتق من صفة)",
        },
        {
          de: "Ich möchte etwas warm essen.",
          ar: "أودّ أن آكل طعاماً دافئاً. (تكتب warm صغيرة في هذا التركيب)",
        },
        {
          de: "Wir bestellen zwei Tassen Kaffee und zwei Gläser Wasser.",
          ar: "نطلب فنجانين من القهوة وكأسين من الماء.",
        },
        {
          de: "Für zwei Personen: zwei Apfelschorlen oder zwei Gläser Apfelschorle.",
          ar: "لشخصين: شرابا تفاح مخففان بالماء الغازي، أو كأسان من شراب التفاح المخفف.",
        },
      ],
      comparisonWithArabic:
        `تظهر في وصف الطعام فروقٌ ينبغي أن يبيّنها السياق: **warm/heiß** لدرجة الحرارة في الأمثلة، و**scharf** للطعم الحارّ/اللاذع. قد تختلف طريقة تقسيم هذه المعاني أو ألفاظها بين اللهجات العربية؛ لا نفترض مقابلةً كلمةً بكلمة.

**sehr salzig** يصف شدة الملوحة، و**zu salzig** يضيف حكماً بأنّها تجاوزت ما يناسب المتكلم. لكنّ هذه العبارة وحدها لا تحدد ما إذا كان سيطلب التبديل أو سيأكل الطبق أو سيتركه.

في **etwas Warmes** صفةٌ مستعملة اسماً فتُكتب بحرف كبير؛ وفي **etwas warm essen** تبقى **warm** صغيرة. الصيغتان متقاربتان في المعنى هنا، ويعرض الدرس فرق البنية والكتابة لا فرقاً دلالياً حاداً. يقتصر المثال على هاتين الصيغتين ولا يشرح كل نهايات الصفات. و**zwei Tassen** و**zwei Gläser** في أمثلتنا جمعٌ لأشياء معدودة؛ في بعض وحدات الشراب ترد صيغة أخرى مثل **zwei Glas Wein**، لذا يعتمد الاختيار على التركيب المقصود لا على جنس الاسم وحده.`,
      eselsbruecke:
        "اسأل أولاً: أصف حرارة الطبق أم مذاقه؟ ثمّ حدّد هل تعدّ الوعاء نفسه (**zwei Gläser**) أم تستعمل تركيباً لوحدة مشروب؛ فالسياق مهم.",
      commonMistakes: [
        {
          wrong: "Die Suppe ist scharf. (إذا كان المقصود أنها ساخنة الحرارة)",
          right: "Die Suppe ist heiß. / Die Suppe ist warm.",
          whyAr:
            "scharf يصف الطعم الحارّ/اللاذع في هذا السياق، لا درجة الحرارة. قد تكون الشوربة حارة الطعم وساخنة الحرارة معاً إذا قيل الأمران.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Die Suppe ist sehr salzig. (إذا كان المقصود أنها تجاوزت ما أستسيغه)",
          right: "Die Suppe ist mir zu salzig.",
          whyAr:
            "sehr يصف درجة عالية، لكنه لا يعني وحده «أكثر مما يناسبني»؛ تضيف zu هذا التقييم. لا تستلزم الجملة طلب الاستبدال.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich möchte etwas warmes essen.",
          right: "Ich möchte etwas Warmes essen.",
          whyAr:
            "في هذا التركيب استُعملت Warmes اسماً بعد etwas، فتبدأ بحرف كبير. أمّا etwas warm essen فصيغة صحيحة قريبة المعنى، لكن warm فيها غير مستعملة اسماً فتكتب صغيرة.",
          classification: "error",
        },
        {
          wrong: "Auf dem Tisch stehen zwei Glas.",
          right: "Auf dem Tisch stehen zwei Gläser.",
          whyAr:
            "هنا نعدّ كأسين ماديين على الطاولة، ولذلك نستخدم جمع Glas: Gläser. هذا لا ينفي ورود zwei Glas Wein بوصفه تركيب كمية في استعمال آخر.",
          classification: "error",
        },
        {
          wrong: "Das ist zwei Tassen Kaffee.",
          right: "Das sind zwei Tassen Kaffee. / Ich bestelle zwei Tassen Kaffee.",
          whyAr:
            "مع الفاعل الجمعي zwei Tassen يأتي الفعل بصيغة الجمع sind؛ وجمع Tasse هنا لعدّ أكواب القهوة، لا بسبب جنس الاسم.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "الصفات المستعملة اسماً ووحدات القياس",
        content:
          "توضح مراجع IDS Grammis أن الصفة التي تستعمل اسماً تُكتب بحرف كبير، وتعرض مراجع التصريف نهايات تتغير بحسب السياق. في **etwas Warmes** نرى صيغةً واحدة بعد **etwas**؛ لا نستنتج منها أن جميع الصفات تنتهي **-es**. كما يورد Duden **Gläser** لجمع كؤوس الشرب، ويذكر **zwei Glas Wein** في استعمال قياسي محدد؛ لذلك يجب ربط صيغة الجمع بنوع المعدود والتركيب.",
      },
    },
  ];
