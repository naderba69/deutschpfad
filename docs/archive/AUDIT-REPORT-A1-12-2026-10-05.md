# تقرير تدقيق الدرس A1-12 — *Wetter und Jahreszeiten*

**تاريخ التدقيق:** 2026-10-05
**النطاق:** محتوى A1-12 وأدلته التعليمية: الأهداف، الشرح، كل تمرين ونص وحوار ومفتاح ومشتت وبطاقة، وتمثيل الاستماع في الواجهة.
**الحالة:** اكتملت مراجعة المحتوى والاختبارات الخاصة بالدرس. لا يعني ذلك اعتماداً من Goethe أو مواءمةً مثبتة مع CEFR أو إثباتاً لإتقان عام.
**الفرع:** `arena/01a10631-deutschpfad` — لا تُضمّن تغييرات الشجرة الأخرى في هذه الدفعة.

## خلاصة تنفيذية

- روجعت أربع كتل نظرية (t1–t4)، و34 مثالاً ألمانياً مترجماً، و16 ملاحظة خطأ/بديل مصنفة، فضلاً عن نصائح الأخطاء الثلاث. فُصل الخطأ في التركيب المقصود عن الصيغة التي قد تصح بمعنى أو سياق آخر.
- روجعت مفاتيح **45 مهمة قابلة للتقييم**: ثلاثة بنود مراجعة، 26 تمريناً، خمسة بنود mini-test، ثلاث مهام كتابة، خمسة أسئلة قراءة، وثلاثة أسئلة استماع. اختُبرت كل إجابة منشورة، وكل خيار في أسئلة الاختيار/التصحيح، وكل بديل مسجل صراحةً.
- روجع نص القراءة وترجمته فقرةً فقرة، وأسئلته الخمسة ومسردُه ذي 12 مدخلاً؛ النص ست فقرات و234 كلمة ألمانية تقريباً. أزيل وصفه في الهدف بأنه «قصير» لأن ذلك وصف غير محدد لطوله الفعلي.
- روجع نصّا الاستماع كلٌّ على حدة: تقرير طقس من أربعة أسطر وحوار من أربعة أسطر، مع الأسئلة الثلاثة. في واجهة الاستماع يُخفى النص ابتداءً؛ والإجابة بعد كشفه تحمل سياق مهمة منفصلاً، فلا تثبت هدف الاستماع. كما لا تُحسب إجابات مسار `flow-listening` دليلاً لهذا الهدف.
- أهداف الدرس التسعة مرتبطة بمهام محددة وشرط `all-correct`. فتح الدرس أو النشاط، أو كشف النص، أو نشاط الوساطة/التفاعل الاختياري لا يكفي لإثبات هدف.
- توجد ممارسة نطق وshadowing، لكن لا يوجد هدف أداء شفهي/نطق مسجل لهذا الدرس؛ لذلك لا أدّعي قياس الكلام أو جودة النطق. الاستماع يُعرض بصوت المتصفح عبر TTS، لا بتسجيل أصلي موحّد.
- الفحص المحدد ناجح: **8/8 اختبارات A1-12**، وESLint للمسارات المحددة، و`git diff --check`. فحص `academic-depth` الشامل ما زال يفشل في خمس تأكيدات تخص A1-03/A1-06 فقط؛ و`typecheck` يفشل في ثلاثة ملفات أخرى غير داخلة في الدفعة. التفاصيل في قسم التحقق.

> **تنبيه نطاقي:** وسْم `level: "A1"` في هذه المادة هو تصنيف المسار داخل المشروع، وليس نتيجة معايرة أو اعتماد. بعض صفحات Duden نفسها تضع مفردات مثل `regnen` و`schneien` و`scheinen` و`warm` و`kalt` و`der Regen` ضمن وسوم مفردات Goethe-Zertifikat B1؛ لا يثبت ذلك وحده أنها ممنوعة في A1، لكنه يجعل ادعاء المطابقة للمستوى غير جائز من هذه المراجعة وحدها. يظل طول القراءة وحمولتها المعجمية موضوعاً تعليمياً يحتاج قراراً مستقلاً.

## الملفات في دفعة A1-12

- `src/data/lessons/a1/a1-12.ts` — مراجعة الأهداف والشرح والأمثلة والتمارين والمواد والمفاتيح.
- `src/data/lessons/a1/a1-12.test.ts` — اختبار الإجابات والمشتتات والبدائل والمواد وربط الهدف بالأداء.
- `src/data/lessons/meta.ts` — تحديث ملخص A1-12.
- `AUDIT-REPORT-A1-12-2026-10-05.md` — هذا التقرير.
- `PROFESSIONAL_CONTINUATION_PROMPT_AR.md` — سجل الاستمرار بعد الدفعة.

لا تدخل تغييرات الملفات الأخرى الموجودة في شجرة العمل في هذه الدفعة.

## معيار التصنيف

- **خطأ مؤكد:** الصيغة لا تحقق التركيب/المعنى الذي يحدده السؤال، مثل `Es regnen` في جملة الطقس المصرفة، أو `Du wird` مع `du` في Indikativ.
- **بديل سياقي:** صيغة سليمة أو ممكنة بمعنى آخر، لكن السياق/التعليمات يطلبان معنى محدداً؛ لا تُعرض كخطأ مطلق.
- **تبسيط تعليمي:** قاعدة نافعة للأنماط المعروضة مع التصريح بأنها ليست وصفاً شاملاً.
- **ادعاء غير مسند/تعميم زائد:** ادعاء صيغ بعمومية تتجاوز ما يثبته المثال أو المصدر؛ يُضيّق أو يُرفض.

## الأهداف وأدلة الأداء

| الهدف | المهمة/المهام | ما تثبته نتيجة المهمة فقط | الحد الذي لا تثبته |
|---|---|---|---|
| z1 المفردات | e3, e8 | مطابقة أربعة أسماء طقس ومعنى `Es schneit`، بعد صحة الإجابة | لا تقيس حصيلة مفردات الطقس كلها |
| z2 بناء جمل الطقس | e1, e4 | اختيار `Es` في النمط المعروض وترتيب جملة `regnen` | لا يثبت إنشاء جمل حرة |
| z3 تصريف `werden` | e2, e18, m2, m5, w2 | الأشكال المحددة من المضارع، بما فيها ich/du/es/wir/ihr | ليس فحصاً شاملاً لكل الضمائر أو الوظائف |
| z4 الحالة والتغيّر | e6, e7, e24 | اختيار `ist/wird` وصياغة التحول في السياق المحدد | لا يدّعي أن `wird` تعني المستقبل دائماً |
| z5 الوقت | e11, e12, e13, e15, e21, e22, e26 | التراكيب الزمنية الواردة في البنود فقط | لا يغطي جميع حروف الجر الزمنية |
| z6 الروابط | e19, e20, e23 | تعيين العلاقة وترتيب الجمل في أمثلة محددة | لا يختبر كل استعمالات الروابط أو كل علامات الترقيم |
| z7 القراءة | rq1–rq5 | استخراج خمس معلومات صريحة من تدوينة الدرس | لا يثبت فهم نصوص عامة أو مستوى قراءة كلياً |
| z8 الاستماع | q1–q3، قبل كشف أي نص | استخراج ثلاث معلومات صريحة من تقرير وحوار مسموعين | لا يثبت الاستماع العام أو فهم كلام طبيعي متنوع |
| z9 الكتابة | w1 | كتابة جملة واحدة مطابقة لإحدى الصيغ المقبولة | لا يثبت إنتاج كتابة حرة أو دقة الكتابة العامة |

جميعها `completion: "all-correct"`. لا يسجل النظام الهدف عند فتح النشاط وحده. يرفض `getGoalEvidenceStatus` نتيجةً من درس آخر أو مهمة غير مسموح بها، ويشترط حدث نتيجة تمرين صحيحاً ومعرّف المهمة المعتمد. هدف الاستماع يقبل فقط `listening:l1:q1`, `listening:l1:q2`, `listening:l2:q3`; أما بعد كشف النص فتكون المعرفات `listening-transcript:...`، فلا تُحتسب. لا تدخل أسئلة المسار المرحلي `flow-listening:...` في الدليل.

## مراجعة الشرح النظري والأمثلة

### t1 — أنماط وصف الطقس و`es`

- حُصر العرض في ثلاثة أنماط ابتدائية معلنة، لا قائمة شاملة: `es ist + Adjektiv`، وفعل طقس مع `es` صوري في الجملة المعتادة، واسم ظاهر مع فعله (`Die Sonne scheint`, `Der Wind weht`). يميّز الشرح هذا `es` من الضمير العائد ومن `es` الذي يملأ موضعاً أولياً في أنماط أخرى.
- وُضّح أن `Mir ist kalt` تعبير ألماني عن إحساس الشخص، وأن Dativ الألمانية ليس مقابلاً مباشراً لـ«الجر» العربي. كما صُنّفت `Ich bin kalt` بديلاً يتحدد معناه بالسياق، لا خطأً نحوياً مطلقاً.
- مراجعة الأمثلة العشرة: `Es ist kalt und windig` و`Heute ist es sehr sonnig` وصفا حالة؛ `Es regnet heute` و`Heute regnet es` يبرزان موضع الفعل عند تقديم ظرف؛ `Es regnet seit drei Stunden` مثال استمرار؛ `Im Winter schneit es oft` فعل طقس؛ `Die Sonne scheint und der Himmel ist blau` يجمع فاعلين ظاهرين؛ `Es sind zwanzig Grad` و`Heute Nacht sind es minus fünf Grad` صيغتا حرارة؛ و`Mir ist kalt. Hast du eine Jacke?` إحساس شخصي لا وصف للجو.
- صُحّح التعميم على `Grad`: Duden يثبت استعمال الوحدة `30 Grad`، ويورد `Grade` في استعمالات أخرى مثل `einige Grade kälter`. لذلك قُيّد `Es sind zwanzig Grad` بقياس الحرارة ولم يُقل إن `Grad` لا يجمع أبداً. بقي `Es ist ein Grad` مثالاً مفرداً؛ لا يُستخدم مفتاحاً في تقييم منفصل.
- تصنيف الملاحظات الأربع: `Ich bin kalt` **بديل سياقي**؛ `Es regnen` **خطأ** في الجملة الكاملة المطلوبة؛ `Der Wetter` **خطأ** لأن `Wetter` محايد؛ و`Es ist zwanzig Grade` **خطأ في تركيب قياس الحرارة المقصود** لا لأن الجمع `Grade` معدوم.

### t2 — `werden`

- يفرّق الشرح بين وصف الحالة (`Es ist kalt`) والتحول/التوقع في سياق الطقس (`Es wird kalt`)، ولا يجعل الزمن وحده مفتاحاً آلياً للاختيار. كما يذكر أن Futur I والمبني للمجهول استعمالان آخران لا تختبرهما تمارين الدرس.
- روجع التصريف كاملاً: `ich werde`, `du wirst`, `er/sie/es wird`, `wir werden`, `ihr werdet`, `sie (Plural)/Sie (Höflichkeitsform) werden`. فُصلت `sie` المفردة في سطر `er/sie/es` عن `sie` الجمع و`Sie` الرسمية في السطر الأخير.
- الأمثلة الثمانية: `Im Herbst werden die Blätter bunt` جمع؛ `Es wird kalt` طقس؛ `Ich werde müde` تغير حالة؛ `Du wirst schnell besser` يحتمل دلالة التحول/المستقبل بحسب السياق؛ `Das Wetter wird morgen besser` توقع؛ `Es wird Winter und die Tage werden kürzer` تحول وحالة جمع؛ `Mein Bruder wird Arzt` مهنة بلا أداة في المثال؛ و`Es ist kalt, aber morgen wird es wärmer` يقابل الحالة بتغير متوقع.
- صُحّح إسناد مصدر التصريف: Duden يصف `werden` بغير المنتظم ويشرح معاني التحول؛ أما جدول الحصص يعرض الأشكال. جدول PONS يسند أشكال Indikativ ويثبت أن `du werdest` صيغة Konjunktiv I صحيحة. لذا لا يستخدم `werdest` مشتتاً «خاطئاً» من دون تعيين Indikativ.
- `Du wird` و`Ich wird` و`Es wird kaltes` أخطاء في التركيبات المحددة. أما استعمال `Es wird kalt` عند قصد الحالة المستقرة بدلاً من التحول فهو **بديل سياقي**؛ الجملة صحيحة نحوياً، ويكون `Es ist kalt` أنسب للمعنى المطلوب.

### t3 — التعبيرات الزمنية

- يعرض `um + الساعة`، و`am + اليوم/التاريخ` ومنه `am Morgen/am Abend`، و`im + الشهر/الفصل`، والظروف `heute/morgen/gestern`، والتعبير الشائع `in der Nacht`. لم يُستخدم تفسير «كل جزء من اليوم يأخذ حرفاً واحداً» أو قاعدة حجم/مكان زائفة.
- فُصل `morgen` «غداً» عن الاسم `Morgen` في `am Morgen` مع التنبيه إلى الكتابة. وأُثبت أن `seit drei Stunden` مدة بدأت سابقاً وما زالت قائمة، و`ab morgen` بداية مدى مفتوح، وأن `in einer Stunde` تعني هنا ساعةً من نقطة الحديث، لا في كل سياق.
- الأمثلة الثمانية: `Bei uns in Tunis ist es im Sommer oft heiß` قول شخصي مقيد بـ`oft`؛ `Am Wochenende bleibe ich zu Hause`؛ `Morgen wird es kalt`؛ `Am Abend regnet es oft im Herbst`؛ `In der Nacht sind es nur fünf Grad`؛ `Es regnet seit drei Stunden`؛ `In einer Stunde hört der Regen auf` بنقطة مرجعية صريحة؛ و`Ab morgen wird es wärmer`.
- `In Montag` و`Am der Nacht` خطآن في العبارتين المطلوبتين؛ `Am morgen` لا يؤدي معنى «غداً» كما كُتب، و`Am Morgen` يعني الصباح. عُدّ تعميم أن `in einer Stunde` دائماً مرادف لكل استعمال لـ`nach einer Stunde` **ادعاءً متجاوزاً للسياق**؛ لم يُعرض `nach` كمشتت خطأ في e26.

### t4 — `und/aber/oder/denn`

- روجع الفرق بين الإضافة والاختيار والتضاد والسبب، مع حصر شرح ترتيب الفعل في الجمل الخبرية المستقلة المعروضة. بعد `aber` في `..., aber die Sonne scheint` تبدأ الجملة الثانية بفاعلها؛ و`denn` يتبعها تركيب جملة رئيسية، بخلاف مثال `weil` التابع.
- عُرضت قاعدة الترقيم بقيودها: لا فاصلة عادةً مع `und/oder` في الوصل العادي، ويمكن إظهارها في بعض الجمل المستقلة لتوضيح البنية؛ وتظهر الفاصلة مع `aber/denn` في أمثلة الوصل المستقلة المعروضة. لا تعمم حكم المثال على كل استعمال.
- الأمثلة الثمانية: `Es ist kalt und der Wind weht` إضافة؛ `Es ist kalt, aber die Sonne scheint` تضاد؛ `Ich bleibe zu Hause, denn es regnet` سبب؛ `Gehen wir spazieren oder bleiben wir hier?` سؤال بديل؛ `Im Sommer ist es heiß, aber im Winter wird es kalt` تضاد؛ `Ich nehme den Regenschirm mit, denn das Wetter ist schlecht` سبب؛ `Heute schneit es und morgen wird es noch kälter` إضافة؛ و`Der Himmel ist grau, aber es regnet nicht` تضاد.
- `aber scheint die Sonne` خطأ في الجملة الخبرية المقصودة، وغياب الفاصلة في مثال `denn` خطأ ترقيمي محدد، و`denn das Wetter schlecht ist` يخلط ترتيب المثال الرئيسي بترتيب `weil`. أما `und aber` فليس حكماً باستحالة عامة: صُنّف **عدم ملاءمة لقيد هذا التمرين الذي يطلب رابطاً واحداً للتضاد**.

**محصلة التصنيفات:** في أخطاء الكتل النظرية الـ16: 12 خطأً محدداً، و3 بدائل سياقية، وادعاء تعميم واحد موسوم `unverified-claim`؛ لا يوجد تبسيط مخفي بوصفه قاعدة مطلقة. وفي `fehlerUndTipps` الإضافي: خطآن وبديل سياقي واحد.

## مراجعة بنود المراجعة r1–r3

| البند | المفتاح والمشتتات | الحكم |
|---|---|---|
| r1 | `Was kostet das Brot?` → `Zwei Euro fünfzig.`؛ البدائل عن وصف اليورو بجملة `sein` أو الوقت ليست جواب السعر في السياق | المفتاح ملائم لسؤال السعر، ولا يتضمن ادعاءً ثقافياً عن سعر فعلي |
| r2 | `Ich bin kein Lehrer` و`Ich habe kein Auto`؛ الخيارات `bin nicht/habe kein/werde kein` في الفراغ الأول و`nicht/keine/keinen` في الثاني | التعليمات تحصر المقصود في النفي المحايد غير التقابلي. لم يوصف `nicht` بأنه ممنوع مطلقاً مع الأسماء؛ قد يتغير التركيز في سياق آخر |
| r3 | `Ich gehe zum Bahnhof.`؛ `nach der Bahnhof`, `in der Bahnhof`, `zu die Bahnhof` مرفوضة في التركيب المعروض | المقصود الوجهة والتقلص `zu + dem = zum`. لا يعمم أن كل وجهة أو مبنى يفرض حرف جر واحداً |

المراجعة مختارة من a1-07 وa1-10 وa1-11؛ لا توحي بأنها تغطي كل درس بين a1-07 وa1-11.

## بنك التمارين e1–e26: المفاتيح والمشتتات

| ID | المفتاح/البدائل المقبولة | مراجعة المشتتات أو القيد |
|---|---|---|
| e1 | `Es` في `Wie ist das Wetter? — Es ist kalt.` | `Ich/Er/Sie` ضمائر أشخاص وليست النمط الجوي المقصود؛ لا تعميم على وظيفة كل `es` |
| e2 | `wird` مع `es` | `werde/wirst/werden` صيغ لا تطابق الضمير في الجملة |
| e3 | `die Sonne—الشمس`, `der Regen—المطر`, `der Schnee—الثلج`, `der Wind—الريح` | تغير ترجمة `الرياح` إلى مفرد أنسب لرأس البطاقة، مع بقاء العربية الطبيعية في مثال الجملة |
| e4 | `Es regnet heute.` و`Heute regnet es.` | الترتيب الثاني مقبول ومختبر؛ لا يُرفض تقديم الظرف ما دام الفعل في الموضع الثاني |
| e5 | `Mir ist kalt` | السياق يصرح `Ich friere` ويطلب إحساس المتكلم؛ `Ich bin kalt` ليس خطأ مطلقاً، و`Es ist kalt` يصف الجو |
| e6 | `Am Morgen ist es kalt`; `... laut Wettervorhersage wird es am Abend wieder kalt` | النص يحدد حالة أولى وتحوّلاً متوقعاً ثانياً؛ لا قاعدة أن كل مستقبل يحتاج `werden` |
| e7 | `Im Sommer wird es warm.`؛ `Es wird im Sommer warm`; `Es wird warm im Sommer` | كلها مقبولة في معنى التحول المعطى؛ لا يصنف السؤال كتدريب Futur I |
| e8 | `Es schneit.` → «تثلج» | `تمطر/تهب الرياح/تشرق الشمس` معانٍ أخرى، لا ترجمة للفعل هنا |
| e9 | استبدال `Der` بـ`Das`: `Das Wetter` | `Wetter` محايد؛ `Der/Die/Den` لا يوافقون الاسم في الجملة المفردة |
| e10 | إملاء `Die Sonne scheint und der Wind weht.` | جملة اسمين مع فعلين صحيحة؛ عدم وجود فاصلة قبل `und` صحيح في هذا الوصل العادي |
| e11 | `Im Winter`, `Am Montag`, `Um acht Uhr` | الخيارات الأخرى لا توافق العبارات الزمنية المحددة؛ السبب في كل فراغ هو التعبير المستعمل لا قياس «حجم» الزمن |
| e12 | `Am Montag` بدلاً من `In Montag` | الخطأ محصور في اسم اليوم في هذا التركيب |
| e13 | `Morgen regnet es.` و`Es regnet morgen.` | كلاهما صحيح؛ `am Morgen` يعني في الصباح، لا غداً |
| e14 | `Im Sommer ist es sehr heiß.`؛ `Es ist im Sommer sehr heiß.`؛ `Es ist sehr heiß im Sommer.` | الاختبار الآن يقبل مواضع الظرف الطبيعية الثلاثة ولا يحصر الترتيب في نموذج واحد |
| e15 | يقبل `Im Winter.` وخمس جمل كاملة منها `In Deutschland ist es im Winter kalt.` و`Im Winter ist es kalt in Deutschland.` | الإجابة المختصرة تجيب `Wann?`؛ أُدرج `sampleAnswer` ضمن البدائل، ولم يُقبل تركيب يخالف المعطيات |
| e16 | `Mir ist warm` | سياق ما بعد الجري يطلب إحساس الشخص لا حرارة الجو؛ صيغ `Ich bin warm/Es ist warm` لا تُدان خارج هذا المعنى |
| e17 | `regnet` في `Es regnet seit zwei Stunden.` | `regnen/regne/regnest/geregnet` لا تؤدي صيغة الغائب المطلوبة هنا |
| e18 | `wirst` مع `du` في Indikativ Präsens | `werdest` صحيح في Konjunktiv I بسياق مختلف، ولذلك لم يدرج كمشتت «خاطئ»؛ `wird/werde/werdet` لا تطابق `du` |
| e19 | بالتتابع `aber, denn, oder, und` | أضيفت قرينة عربية قبل كل فراغ: تضاد/سبب/اختيار/إضافة. قد تصح أداة أخرى في سياق آخر؛ القياس هو العلاقة المحددة، لا نحوٌ مطلق |
| e20 | `die Sonne scheint` بعد `aber` في الجملة الخبرية | `scheint die Sonne` قد يلائم سؤالاً/تركيباً آخر، لكنه لا يحقق ترتيب الجملة الخبرية المطلوب؛ لا يوصف بأنه مستحيل في كل موضع |
| e21 | `Im … am`: `im Winter`, `am Montag` | الخيارات البديلة تخلط التعبيرات الزمنية؛ تبرير الاختيار مبني على الأمثلة لا «حجم الوقت» |
| e22 | `In der Nacht` بدلاً من `Am der Nacht` | التعبير الشائع في المثال هو `in der Nacht`؛ لا تُعمم قاعدة مصطنعة عن أجزاء اليوم |
| e23 | `Ich nehme den Schirm mit, denn es regnet.` وقُبل أيضاً `Den Schirm nehme ich mit, denn es regnet.` | كلاهما ترتيب صحيح؛ التمرين لا يختبر وحده إتقان الفاصلة أو كل تراكيب `denn` |
| e24 | `Es wird kalt.` أو بلا نقطة | صياغة تحول مقصود من `Es ist kalt`; لا يعني أن الجملة الأولى خاطئة نحوياً |
| e25 | مطابقة خمس بنى: صفة/`es`; فعل طقس/`es`; اسم + فعل; إحساس/`Mir ist kalt`; تحول/`Es wird kälter` | المجموعات متمايزة في الأمثلة؛ المطابقة لا تدعي تغطية كل أنواع الجملة |
| e26 | `seit drei Stunden` و`in einer Stunde` | السياق يحدد استمرار المطر حتى الآن ثم موعداً بعد ساعة من لحظة الكلام. استُبعد `nach` من المشتتات لأنه قد يكون سليماً مع نقطة مرجعية أخرى؛ `vor` يعني وقتاً ماضياً هنا |

## mini-test m1–m5

- **m1:** `Es regnet heute` في سياق نشرة. `Ich/Er` أشخاص و`Das` ليس الضمير الصوري في النمط الجوي المعروض.
- **m2:** `Wir werden gute Freunde`; `werdet/wird/wirst` لا تطابق `wir`.
- **m3:** قُبلت `Im Winter wird es kalt`, `Es wird im Winter kalt`, `Es wird kalt im Winter`; جميعها تحفظ موضع الفعل.
- **m4:** عُدّل من تصحيح خطأ إلى **تحويل سياقي**: `Ich werde kalt` قد تكون جملة سليمة عن شخص، والمطلوب `Es wird kalt` بمعنى الطقس يتحول إلى البرودة. بذلك لا يُعلّم النظام الصيغة الأصلية كخطأ مطلق.
- **m5:** `Ich werde`, `Er wird`, `Ihr werdet`; الخيارات المخالفة لا تطابق الضمائر في هذه الجمل.

## القراءة: النص، الترجمة، المسرد والأسئلة

النص **6 فقرات/234 كلمة**، عن أمين التونسي الذي يكتب من هامبورغ. روجعت كل ترجمة مقابلة. صياغة الصيف مقيدة بـ`Für mich` و`oft`؛ وفي تونس يقول النص `oft` عن الحر في الصيف والبرد في الشتاء، بوصفه كلام شخصية لا تقرير مناخ شامل. جملة المطر/الحرارة مثال تعليمي لا نشرة حقيقية.

| السؤال | المفتاح | البدائل المراجعة |
|---|---|---|
| rq1 مدة إقامة أمين في هامبورغ | `Seit einem Jahr` | أسبوع/خمس سنوات/شهر لا تطابق النص |
| rq2 رأيه في صيف هامبورغ | `Er ist schön, aber kurz.` | «طويل جداً» يناقض `Für mich ... kurz`؛ «لا تمطر أبداً» يناقض مطر يوليو أحياناً؛ و40 درجة غير مذكورة |
| rq3 سبب حمل المظلة في الخريف | `Denn das Wetter ändert sich schnell.` | الثلج الدائم/عدم وجود سترة/الحر الشديد غير مذكور؛ صححت فئة الخطأ إلى مفردات/معنى بدلاً من `grammar` لأن السؤال فهم نص |
| rq4 حرارة الليل شتاء | `Minus fünf Grad` | خمس/15/صفر لا تطابق القيمة الصريحة |
| rq5 الفصل المفضل | `Den Frühling` | الخيارات الأخرى فصول مذكورة لكنها ليست المفضلة؛ صيغة النصب تجاوب السؤال `Welche Jahreszeit mag ...?` |

المسرد ذو 12 مدخلاً كله مرتبط بالنص: `das Wetter ändert sich`, `neblig`, `der Wind weht`, `bunt`, `der Regenschirm`, `minus fünf Grad`, `mir ist kalt`, `in der Nacht`, `ab März`, `in einer Woche`, `die Lieblingsjahreszeit`, `hell/dunkel`. عُدّلت ملاحظة `Lieblings-` من «بادئة» إلى **مكوّن أول في مركّب** يدل على المفضل. شُرح `in einer Woche` و`mir ist kalt` و`in der Nacht` ضمن سياقها.

**قيد تربوي غير محسوم:** طول النص وحمولته المعجمية أعلى من بطاقة مفردات بسيطة: من ألفاظه غير المفسرة مباشرةً `Studium/Blog`, `übrigens`, `Lieblingsjahreszeit`, وتراكيب وجمل متصلة. وجود مسرد لا يثبت أن القراءة ملائمة لكل مبتدئ؛ يمكن في دفعة لاحقة تبسيط نسخة القراءة أو إضافة تمهيد/مسرد أوسع. لا أصف النص بأنه مطابق لمواصفة Goethe A1.

## الاستماع والحواران/النصان

- **l1 — تقرير طقس، Berlin، أربعة أسطر:** صباح بارد وعاصف؛ بعد الظهر تشرق الشمس ويصبح الجو دافئاً؛ مساءً تمطر في Berlin؛ غداً تثلج في الجبال. السطور تتسق زمنياً، والترجمة العربية مقابلة لكل سطر.
- **l2 — حوار Mona/Sami، أربعة أسطر:** سؤال عن تونس صيفاً؛ إجابة شخصية مقيدة بـ`oft sehr heiß und sonnig`; سؤال عن الشتاء؛ إجابة `oft kalt` وأحياناً تمطر. لا يقدم النص حكماً شاملاً على كل مناطق تونس أو كل أيام السنة.
- **q1:** الصباح `kalt und windig`; البدائل `warm und sonnig/heiß/es schneit` لا تطابق الصباح المذكور.
- **q2:** المساء في Berlin `Es regnet`; الثلج/سطوع الشمس/الحر لا تطابق الجملة.
- **q3:** صيف تونس `oft sehr heiß und sonnig`; البدائل برد/مطر أو ريح أو ثلج لا تطابق جواب Sami.
- جرى تصحيح الهدف z8 ليقول **نصّي استماع** لا «حوارين»: l1 تقرير، وl2 حوار. الأسئلة تقيس التفاصيل الثلاث الصريحة فقط.
- `hoerverstehen.tsx` يستخدم `SpeechSynthesisUtterance` بصوت `de-DE` من المتصفح، والنص مخفي افتراضياً. إذا كُشف، تسجل الأسئلة بسياق `listening-transcript`; وإذا لم يُكشف تسجل `listening:<item>:<question>`. لذلك لا يُحتسب فتح التبويب أو كشف النص دليلاً. الاختلاف بين أصوات المتصفحات وجودة TTS لا يجعل هذا اختباراً موحداً لكلام طبيعي.

## النطق وshadowing

راجعت البنود الستة: `das Wetter` (w الألمانية أقرب إلى /v/)، `die Sonne` [ˈzɔnə]، `der Regen` (استُند إلى تدوين Duden لـ`Regenwetter` لعلامتي /eː/ و/g/)، `der Schnee` (/ʃ/ وee طويلة)، `kalt/warm`، و`der Wind` (/v/ وi قصيرة ونهائية d مسموعة عادةً /t/). وتبعت ذلك أربعة أسطر shadowing: `Es ist kalt`, `Die Sonne scheint`, `Es regnet heute`, `Im Winter schneit es`.

وسم الدرس جميع النقل العربي تقريبياً لا معياراً صوتياً. أضيف توضيح /g/ بأنه ليس الغين العربية /ɣ/، و/ a / القصيرة في `kalt`؛ قاعدة نطق d النهائية بوصفها /t/ في النطق القياسي العام موصولة بقاعدة Auslautverhärtung في [IDS Grammis §23](https://grammis.ids-mannheim.de/rechtschreibung/6179). هذه تعليمات استماع/تقليد، وليست تسجيل نطق أو معياراً يقيس سلامة إنتاج المتعلم؛ لا يوجد هدف نطق/كلام في قائمة الأهداف.

## الكتابة والوساطة والتفاعل

- **w1:** كتابة جملة عن طقس مشمس ودافئ اليوم. عشر صيغ كاملة مقبولة تشمل تقديم `Heute/Es` وترتيب الصفتين وبعض صيغ `scheinen`; `caseSensitive: true`. النجاح يعني مطابقة صيغة مسجلة، لا حكماً آلياً على كتابة حرة.
- **w2:** أربعة فراغات من تصريف `werden`: `werde/wirst/wird/werden`. المفتاح يطابق الضمائر؛ هو تدريب اختيار وليس إنتاجاً حراً.
- **w3:** إملاء `Im Winter wird es kalt.` بحساسية للأحرف؛ المفتاح/الصوت النصي متطابقان. لم يُربط بهدف عام للكتابة.
- **الوساطة:** نشرة تدريبية (`Morgen regnet es. Es sind 15 Grad. Am Wochenende wird es sonnig und warm.`)؛ نُقحت صياغة الحرارة إلى `Es sind 15 Grad`. نقاط المفتاح الثلاث تغطي المطر/الحرارة/نهاية الأسبوع؛ النموذج العربي يحفظها. المهمة مصرح بأنها تدريب ذاتي وليست دليلاً مسجلاً على إتقان الوساطة.
- **التفاعل النصي:** جولتان. في الأولى المعطيات `sonnig und warm bei 25 Grad`، فالرد المطابق هو `Heute ist es sonnig und warm`; الرد `kalt und regnerisch` رفض صحيح لأنه يخالف المعطيات. في الثانية `Es sind 25 Grad. Sehr angenehm.` هو الأنسب؛ `minus 30 Grad` يخالف العدد. وُضّح أن اختيار رد مكتوب لا يقيس إنتاج كلام شفهي.
- سؤال المناقشة الحرة في القراءة اختياري وغير مسجل كدليل، ولا يدخل في الأهداف.

## البطاقات الخمس والعشرون

| البطاقات | المراجعة |
|---|---|
| fc1–fc4 | `das Wetter`, `die Sonne`, `der Regen`, `der Schnee`؛ الجنس والمعنى والأمثلة سليمة. مثال fc3 أصبح `Der Regen beginnt.` ويطابق استعمال الاسم لا الفعل المشتق فقط |
| fc5–fc8 | صفات الحرارة، `werden`, `der Wind`, `die Jahreszeit`; أمثلة التحول/الطقس والفصل مناسبة |
| fc9–fc12 | `im Sommer/im Winter`, `am Montag/um acht Uhr`, `aber`, `denn`; الأمثلة تميز التعبير الزمني ووظيفة الرابط |
| fc13–fc16 | `Mir ist kalt`, `neblig/bewölkt`, `Regenschirm`, `minus fünf Grad`; ترجمة الإحساس والسياق متحفظان |
| fc17–fc21 | `seit (+ Dativ)`, `in einer Stunde` في سياقه، `der Himmel`, `scheinen`, `der Tag/Tage`; لم يُعمم معنى `in` |
| fc22–fc25 | `das Jahr`, `anders`, `wirklich`, `bunt`; كل مثال مسنود في مادة الدرس |

الاختبارات تتحقق من 25 معرّفاً فريداً وبطاقة غير مكررة ومن ظهور المفردات في مادة الدرس؛ لا تحوّل مجرد مشاهدة البطاقات إلى هدف متحقق.

## المصادر اللغوية والتربوية

1. [Duden — Subjekt](https://www.duden.de/sprachwissen/fuer-lernende/satzglieder-subjekt): يذكر `Es schneit` مثالاً على `es` شكلياً بلا معنى مستقل، ويذكر `Mir ist kalt` مثالاً لجملة بلا فاعل. و[IDS Grammis — Die Form es und ihre Verwendungen](https://grammis.ids-mannheim.de/kontrastive-grammatik/3750) يميز بين `es` العائد و`es` الثابت في أفعال الطقس و`es` الشكلي في مقدمة الجملة. استُخدما لتقييد شرح t1.
2. [Duden — Wetter](https://www.duden.de/rechtschreibung/Wetter_Klima) يثبت جنس الاسم المحايد؛ [regnen](https://www.duden.de/rechtschreibung/regnen) و[schneien](https://www.duden.de/rechtschreibung/schneien) يصفان فعل الطقس بأنه غير شخصي ويوردان `es regnet/es schneit`; [Regen](https://www.duden.de/rechtschreibung/Regen_Niederschlag) يورد `Der Regen beginnt`، وهو مثال بطاقة fc3؛ [wehen](https://www.duden.de/rechtschreibung/wehen) يورد `der Wind weht`؛ [Wind](https://www.duden.de/rechtschreibung/Wind) يثبت الاسم وصيغته؛ [Sonne](https://www.duden.de/rechtschreibung/Sonne) يورد `die Sonne scheint` وIPA؛ [Schneeregen](https://www.duden.de/rechtschreibung/Schneeregen) يسند `/ʃ/` و`/eː/` و`/g/` في المثال المركب.
3. [Duden — Grad](https://www.duden.de/rechtschreibung/Grad) يذكر درجات الحرارة وصيغة `30 Grad`، كما يورد جمع `Grade` في سياق آخر؛ [kalt](https://www.duden.de/rechtschreibung/kalt) يذكر `mir ist kalt (ich friere)`؛ [warm](https://www.duden.de/rechtschreibung/warm) يورد استعمالات الحرارة والإحساس. [Duden — werden](https://www.duden.de/rechtschreibung/werden_Vollverb) يصنفه فعلاً غير منتظم ويشرح التحول؛ جدول [PONS — werden](https://en.pons.com/verb-tables/german/werden) يسند تصريف المضارع و`du werdest` في Konjunktiv I. لم تُنسب صيغة `werdest` إلى Duden.
4. [Duden — um](https://www.duden.de/rechtschreibung/um_herum_vorbei_fuer) يذكر الوقت المحدد مثل `um sieben Uhr`; [Montag](https://www.duden.de/rechtschreibung/Montag) و[Morgen](https://www.duden.de/rechtschreibung/Morgen_Tageszeit) يثبتان الاسم واستعمال `am Morgen`; [in](https://www.duden.de/rechtschreibung/in_innen) يورد `in einer halben Stunde/in zwei Tagen`; [seit](https://www.duden.de/rechtschreibung/seit_von_da_an_spaeter_als) يشرح بدء مدة ما زالت قائمة ويثبت Dativ؛ [nach](https://www.duden.de/rechtschreibung/nach_zu_hin_entsprechend) يذكر التعاقب بعد وقت/حدث؛ ومقالة [morgen](https://www.duden.de/rechtschreibung/morgen) الظرفية تميز «غداً» من الاسم. و[IDS Grammis — Sprechzeit-Perspektive](https://grammis.ids-mannheim.de/progr@mm/6755) يشرح صراحةً أن `in einer Stunde` في المثال يقع بعد وقت الكلام، كما يصف `seit/ab` في مدد زمنية.
5. [IDS Grammis — Satzreihe](https://grammis.ids-mannheim.de/vggf/2253?termini=term) يدرج `und/oder/aber/denn` في وصل الجمل الرئيسية ويصنف علاقات الإضافة/الاختيار/التضاد/السبب. [IDS Grammis — §70/§71 Komma](https://grammis.ids-mannheim.de/rechtschreibung/6201) يسند قاعدة الفاصلة المحدودة: لا فاصلة عادة مع `und/oder` في الوصل العادي، وتسبق `aber` الفاصلة في الحالات المعروضة، مع جواز فاصلة توضيحية في بعض الجمل المستقلة.
6. [وصف اختبار Goethe-Zertifikat A1: Start Deutsch 1](https://www.goethe.de/pro/relaunch/prf/en/Pruefungsziele_Testbeschreibung_A1_SD1.pdf) مرجع للمقارنة التربوية العامة: يذكر المهارات الأربع والمهام/الأهداف الخاصة بالاختبار. استُخدم لتجنب تسمية اختيار رد نصي «كلاماً» وللتنبيه إلى أن هذه المادة ليست اختباراً رسمياً؛ **لم يُستدل به على مواءمة A1 أو اعتماد هذا الدرس**.

## التحقق البرمجي

| الأمر | النتيجة |
|---|---|
| `npm test -- --run src/data/lessons/a1/a1-12.test.ts` | **نجح: 8 اختبارات من 8**؛ يشمل 45 مفتاحاً، الخيارات الخاطئة، البدائل المقبولة، فقرات القراءة، أسئلة الاستماع، البطاقات، الأدلة وعدم احتساب كشف النص |
| `npx eslint src/data/lessons/a1/a1-12.ts src/data/lessons/a1/a1-12.test.ts src/data/lessons/meta.ts` | ناجح |
| `git diff --check` للمسارات الثلاثة | ناجح |
| `npm test -- --run src/data/lessons/academic-depth.test.ts` | **16 ناجحاً و5 فاشلة**؛ القائمة تخص `a1-03:t3`, و`a1-06:t1–t5`، ومسرد a1-06. لا يظهر فشل A1-12 في النتائج. لم تُعدّل هذه الملفات خارج النطاق |
| `npm run typecheck -- --pretty false` | يفشل في `src/components/learning-path/learning-path-client.tsx` (قيم `LevelCode[] | undefined`)، و`src/components/learning-path/unit-row.tsx` (`onToggle`)، و`src/lib/tests/test-engine.test.ts` (`Map` بقيم نص/رقم). لا يظهر ملف A1-12 بينها؛ تُركت الملفات خارج النطاق بلا تعديل |

ظهر تحذير Vite المعتاد عن `configLoader: 'native'` عند تشغيل Vitest؛ لم يمنع الاختبار.

## مسائل معلّقة وخارج نطاق الدفعة

1. **الكلام والنطق:** لا يملك A1-12 هدفاً أو تقويماً للأداء الشفهي. ملاحظات IPA وshadowing تدريبان فقط؛ التفاعل اختيار نصي. يلزم في خطة المهارات الأوسع مهمة إنتاج مناسبة مع معيار تقييم قبل ادعاء قياس الكلام/النطق.
2. **مستوى القراءة:** 234 كلمة وست فقرات، مع عدد من المفردات والتراكيب غير الممهّدة بالكامل. الهدف صار محايداً من كلمة «قصير»؛ يبقى تبسيط النص أو توسيع التهيئة قراراً تربوياً لاحقاً، لا حكماً آلياً بأن النص خطأ.
3. **ادعاء المشروع العام:** يحتوي `package.json` وصفاً عاماً قديماً يربط المشروع بمنهج Goethe ومعايير CEFR؛ لا يتكرر هذا الادعاء في درس A1-12 أو ملخصه، لكن هذه الدفعة لا تعدّل ملفاً عاماً خارج النطاق. أُشير إلى الادعاءات غير المدعومة في التدقيق العام السابق `AUDIT-REPORT-2026-10-04.md`؛ لا تعرض الدرس أو المشروع بوصفه معتمداً قبل مراجعة ذلك النطاق.
4. لا يوجد حقل مدة للدرس أو هدف زمني، واختبار A1-12 يتحقق من ذلك. لا يحوّل عدد النقاط أو إتمام النشاط إلى شهادة أو إثبات إتقان.
