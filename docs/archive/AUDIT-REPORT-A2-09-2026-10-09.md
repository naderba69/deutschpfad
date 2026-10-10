# تقرير تدقيق الدرس A2-09 — 2026-10-09

## النطاق والنتيجة

دُقّق `src/data/lessons/a2/a2-09.ts` بنداً بنداً: الأهداف والأدلة، المراجعة، الشرحان النظريان، أمثلة وترجماتها، أخطاء شائعة، كل تمرين ومشتت ومفتاح، الكتابة والإملاء، القراءة وأسئلتها، حوارا الاستماع، النطق، البطاقات، الوساطة والتفاعل. أُضيف اختبار خاص إلى `src/data/lessons/a2/a2-09.test.ts`؛ وهذا التقرير وموجّه الاستمرار هما الملفان التوثيقيان للدفعة.

لم تُعدّل `meta.ts` أو ملفات قراءة A2 متعددة الدروس أو أي درس آخر في هذه الدفعة. بقي ترتيب الدرس `order: 1`. لا يدّعي هذا التقرير اكتمال A2 أو A1–B2، ولا اعتماداً من Goethe أو مطابقةً رسمية لـCEFR أو إتقاناً عاماً.

**الجرد:** 33 مهمة تقييمية: 3 مراجعة (`r1–r3`)، 14 تدريباً (`e1–e14`)، 5 mini-test (`m1–m5`)، 4 كتابة/إملاء (`w1–w4`)، 4 أسئلة قراءة، و3 استماع. كذلك: كتلتان نظريتان، 18 مثالاً مترجماً، 11 خطأً نظرياً مصنفاً، قراءة من 4 فقرات/179 كلمة بحسب فصل الكلمات بالمسافات، مسرد من 10 عناصر، حوارا استماع من 7 و4 أسطر، 6 مداخل نطق و4 أسطر ترديد، 15 بطاقة، ومهمة وساطة واحدة وتفاعل من جولتين.

## الأهداف وأدلتها الفعلية

كل هدف يستخدم `completion: "all-correct"`؛ فتح القسم أو عرض نموذج أو كشف تفريغ الاستماع لا يثبت الأداء. الاختبار يبني قائمة المعرّفات من سياقات العرض الفعلية ويمرّر حالات الإجابة الصحيحة والخاطئة، ومعرّف درس غير مطابق، وكشف تفريغ الاستماع.

| الهدف | المهام التي يجب إكمالها | معرّفات الدليل المقبولة |
|---|---|---|
| `z1` دعوة وقبول مهذب | `w1`, `w4` | `writing:a2-09:w1`, `writing:a2-09:w4` |
| `z-reading` فهم القصة | `rq1–rq4` | `reading:read-a2-09:rq1` إلى `rq4` |
| `z2` صيغ Dativ منتقاة | `e1,e2,e6,w2,m1,m5` | `practice:a2-09:e1/e2/e6`; `flow-practice:a2-09:e1/e2`; `writing:a2-09:w2`; `mini-test:a2-09:m1/m5`; `flow-mini-test:a2-09:m1` |
| `z3` متممات أفعال منتقاة | `e2,e5,e7,e11,e13,m2,m4` | `practice:a2-09:e2/e5/e7/e11/e13`; `flow-practice:a2-09:e2`; `mini-test:a2-09:m2/m4`; `flow-mini-test:a2-09:m2` |
| `z4` حروف الجر والوجهة/المكان | `e12,e14` | `practice:a2-09:e12/e14` |
| `z-listening` اليوم والوقت والشخص | `q1,q2,q3` | `listening:l1:q1`, `listening:l1:q2`, `listening:l2:q3` |
| `z-writing` الكتابة المضبوطة والإملاء | `w1–w4` | `writing:a2-09:w1` إلى `w4` |

`practice` يسحب 5 تمارين عشوائياً من بنك 14؛ لذلك يمكن أن يظهر أي `practice:a2-09:eN` في دفعة عشوائية. تدفق الدرس يعرض أول `min(4, practiceBank.length)` فقط، أي `e1–e4`، بمعرّف `flow-practice`. mini-test التدفق يعرض هنا سؤالَي الاختيار من متعدد `m1,m2`؛ لا يُقبل `flow-mini-test:m4` ولا `m5`. أسئلة القراءة تستخدم معرّف النص `read-a2-09`، لا معرّف الدرس. الاستماع قبل كشف النص يستخدم `listening:{itemId}:{questionId}`؛ بعد الكشف يتحول إلى `listening-transcript:...` ولا يدخل هدف الاستماع.

## مراجعة الأهداف والتمهيد والمراجعة التراكمية

- صيغت أهداف الدرس على أنها تطبيقات **منتقاة** لا «Dativ كاملة». هدف الدعوة يحدد أن الجملة تُكتب انطلاقاً من بيانات معطاة، والردّ يقاس في `w4`. القراءة والاستماع لكل منهما أدلة منفصلة. لم يُضف هدف «تحدث» غير مدعوم بآلية أدلة الأهداف؛ التفاعل والنقاش المفتوحان تدريبان لا يثبتان إتقان الكلام.
- التمهيد يصف A2-09 درساً تراكمياً: يذكر أمثلة Dativ سابقة في A1-04/A1-06/A1-08 وA2-07، ولا يصفه بأنه أول تعرض للحالة. أُبقيت الروابط السابقة كما هي. كلمات التنشيط الخمس (`das Fest`, `die Einladung`, `feiern`, `das Geschenk`, `der Geburtstag`) لها مقابلات عربية مباشرة في التمهيد والبطاقات.
- `r1` — `Ich helfe ___ Bruder. (أخي)`: المفتاح `meinem`. المشتتات `meinen` (صيغة Akkusativ المذكر)، و`mein`/`meine` لا تلائمان هذا الاسم والحالة. التفسير يربط `helfen` بـDativ ولا يستنتج الحالة من العربية.
- `r2` — معنى `der Geburtstag`: المفتاح «عيد ميلاد شخص». «رأس السنة»، «عيد زواج»، و«عطلة رسمية» مشتتات معجمية مختلفة؛ الشرح يحدد أنه يوم ذكرى الولادة لا رأس السنة أو عطلة رسمية.
- `r3` — `Ich möchte ___ einladen. (أنتَ)`: المفتاح `dich`. `dir` Dativ لا يلائم الشخص المدعو هنا، و`mich` يغيّر مرجع الضمير؛ التعليمات تحدد Akkusativ بعد `einladen`.

## تدقيق النظرية والأمثلة والترجمات

### t1 — أفعال مختارة تأخذ متمماً في Dativ

ضُبط الشرح ليقول إن الفعل يحدد الحالة لمتممه في التركيب المقصود، لا أن كل شخص أو كل كلمة تعبّر عن شخص تأتي في Dativ. يعرض صيغ الأدوات `dem/der/den`، وDativ الجمع مع `-n` عند إمكانه، ويصرح بأن الجدول عينة لا جدول كامل. يشرح `gefallen` بفاعل في Nominativ يطابقه الفعل، وشخص في Dativ، ويفصل ذلك عن `einladen + Akkusativ`. سؤال `wem?` أداة فحص بعد معرفة إطار الفعل، لا تفسير لسبب الحالة ولا بديل من حفظ الإطار.

| الألمانية | الترجمة العربية المدققة |
|---|---|
| `Ich helfe dem Vater beim Aufräumen.` | أساعد الأب في ترتيب المكان. |
| `Das Fotoalbum gefällt Frau Yilmaz.` | ألبوم الصور يعجب السيدة يلماز. |
| `Die Blumen gefallen der Nachbarin.` | الزهور تعجب الجارة. |
| `Das Fahrrad gehört meinem Bruder.` | الدراجة ملك لأخي. |
| `Wir gratulieren unserer Nachbarin zum Geburtstag.` | نهنئ جارتنا بعيد ميلادها. |
| `Ich danke den Kindern für die Hilfe.` | أشكر الأطفال على المساعدة. |
| `Kannst du mir helfen?` | هل يمكنك مساعدتي؟ |
| `Das Geschenk gefällt ihr.` | تعجبها الهدية. |

أُكمل جدول الضمائر بإضافة `es → ihm`؛ وصيغ الصفوف الآن: المفرد `ich/du/er/sie/es → mir/dir/ihm/ihr/ihm`، والجمع والصيغة الرسمية `wir/ihr/sie/Sie → uns/euch/ihnen/Ihnen`. يوضح جدول الأمثلة الاسم المذكر `der Vater → dem Vater`، والمؤنث `die Mutter → der Mutter`، والمحايد `das Kind → dem Kind`، والجمع `die Kinder → den Kindern`، مع الأمثلة `Ich helfe dem Vater`, `Das gehört der Mutter`, `Ich danke dem Kind`, `Ich helfe den Kindern`. هكذا لا يظهر `den Kinder` كصيغة صحيحة.

الأخطاء الستة المشروحة في الكتلة: `helfe den Vater → dem Vater`؛ `gratulieren dich → dir` مع `zum Geburtstag`؛ `gefällt ich → gefällt mir`؛ اتفاق المفرد `Das Geschenk gefällt` والجمع `Die Blumen gefallen`؛ `gehört mein Bruder → meinem Bruder`؛ و`den Kinder → den Kindern`. ملاحظة الجمع تذكر أن `Eltern` لا تأخذ نوناً إضافية لأنها منتهية أصلاً بـ`-n`. المقارنة المرتبطة بالقاعدة تفصل `einladen + Akkusativ` في `Ich lade dich zu meiner Feier ein` عن `gratulieren + Dativ` في `Ich gratuliere dir zum Geburtstag`. ومقارنة العربية تمنع تعميم أن كل Dativ يقابله جر أو لام عربية؛ مثالها `Ich helfe dem Vater` مقابل «أساعد الأب»، و`Das Geschenk gefällt mir` مقابل «تعجبني الهدية».

### t2 — حروف جر منتقاة والمكان/الوجهة

يفصل الشرح بين حروف ثابتة مختارة في الأمثلة (`mit, bei, von, zu, aus, nach, seit`) وبين حروف المكان/الوجهة المتبدلة (`an, auf, hinter, in, neben, über, unter, vor, zwischen`). في الاستعمال المكاني المحلي المعروض، `Wo?` يصف مكاناً مع Dativ (`im Innenhof`)، و`Wohin?` يحدد وجهةً مع Akkusativ (`in den Innenhof`)؛ ولا يجعل الحركة الجسدية وحدها معياراً. الاختصارات `im, beim, vom, zum, zur` موضحة، مع التنبيه إلى أن الصيغة الكاملة قد تصح في سياقها. جدول `für` يصفه هنا بدقة بأنه الشيء المشكور عليه (`für die Blumen`)، لا تعميماً على كل معنى للحرف. جدول النظرية يربط أيضاً: الرفقة `mit + Dativ` (`mit meiner Schwester`)، والمكان/عند `bei + Dativ` (`bei den Nachbarn`)، والمصدر `von + Dativ` (`von den Gästen`)، والاتجاه بـ`zu + Dativ` (`zur Feier`)، والمكان بـ`in + Dativ` (`im Innenhof`)، والوجهة بـ`in + Akkusativ` (`in den Innenhof`)، والشيء المشكور عليه بـ`für + Akkusativ` (`für die Blumen`).

| الألمانية | الترجمة العربية المدققة |
|---|---|
| `Wir feiern im Innenhof.` | نحتفل في الساحة الداخلية للمبنى. |
| `Sie lädt die Nachbarn in den Innenhof ein.` | تدعو الجيران إلى الساحة الداخلية للمبنى. |
| `Ich komme mit meiner Schwester.` | آتي مع أختي. |
| `Frau Yilmaz hilft beim Dekorieren.` | تساعد السيدة يلماز في التزيين. |
| `Die Blumen sind von den Gästen.` | الزهور مقدّمة من الضيوف. |
| `Wir gratulieren ihr zum Geburtstag.` | نهنئها بعيد ميلادها. |
| `Nach dem Essen räumen wir zusammen auf.` | بعد الطعام نرتب المكان معاً. |
| `Die Kinder stellen die Stühle an die Wand.` | يضع الأطفال الكراسي ملاصقةً للجدار. |
| `Die Stühle stehen an der Wand.` | توجد الكراسي بمحاذاة الجدار. |
| `Sie bedankt sich bei den Kindern für die Hilfe.` | تشكر الأطفال على المساعدة. |

الأخطاء الخمسة المشروحة في الكتلة: `mit meine Schwester → mit meiner Schwester`؛ `bei das Dekorieren → beim Dekorieren` مع توضيح المصدر المستعمل اسماً وبديله الكامل `bei dem Dekorieren`؛ `Wir feiern in den Innenhof → im Innenhof`؛ `stellen ... an der Wand → an die Wand` مع مقابلة `stehen ... an der Wand`؛ و`Ich danke dich für die Blumen → Ich danke dir ...`، حيث `danken` يطلب Dativ للشخص و`für` يطلب Akkusativ للشيء. المقارنة المصاحبة تحذر من استنتاج الحالة من وجود حرف الجر وحده، وتعرض `mit` الثابت مقابل `in` المحلي المتبدل و`für + Akkusativ`. الملاحظة الثقافية تصف `Herzlichen Glückwunsch zum Geburtstag!` بأنها صيغة تهنئة شائعة، وتؤكد أن عادات الاحتفال والضيافة تختلف وأن قصة الدرس خيالية لا تمثل جميع الناطقين بالألمانية.

## تدقيق بنك التدريب e1–e14

- `e1` اختيار من متعدد: `Ich helfe ___ Vater beim Aufräumen.` المفتاح `dem`. الخيارات كاملة: `dem / den / der / das`. لا يطابق `Vater` المذكر المفرد في Dativ إلا `dem`.
- `e2` اختيار من متعدد: `Das Buch gehört ___ Mutter.` المفتاح `der`. الخيارات `der / dem / den / die`؛ المالك مؤنث ويأتي بعد `gehören` في Dativ.
- `e3` مطابقة معاني الأفعال: `helfen → يساعد`، `gefallen → يعجب`، `gehören → يخص/يكون ملكاً لـ`، `gratulieren → يهنئ`، `danken → يشكر`. الاختبار يمر بكل زوج صحيح ويرفض تبديل الزوج الأخير؛ التعليمة تطلب المعنى في الاستخدام المستهدف لا ترجمة جامدة لكل السياقات.
- `e4` ترتيب الكلمات، والقطع المعروضة كاملةً: `dem / Ich / Garten / Vater / im / helfe / .`؛ المفتاح `Ich helfe dem Vater im Garten.` التعليمات تقيد الترتيب إلى فاعل + فعل + متمم Dativ + مكان. هذا القيد مهم لأن ترتيبات أخرى، مثل `Im Garten helfe ich dem Vater`, سليمة نحوياً لكنها ليست النمط المطلوب في هذا البند.
- `e5` تصحيح: `Ich gratuliere dich zum Geburtstag.` → `dir`. الخيارات `dir / dich / mir / ihn`. أضيف إلى التعليمة أن التهنئة موجّهة إلى المخاطَب «أنتَ»، حتى لا يُقرأ `mir` بديلاً نحوياً مقصوداً لمعنى «أهنئ نفسي»؛ `ihn` كذلك لا يطابق المخاطب ولا الحالة المطلوبة.
- `e6` إكمال ثلاث أدوات: `Ich danke ___ Freund` → `dem`؛ `Wir helfen ___ Oma` → `der`؛ `Das Buch gehört ___ Kind` → `dem`. خيارات كل فراغ `dem / der / den`؛ المفرد المذكر والمحايد `dem` والمؤنث `der` في الأمثلة.
- `e7` تحويل المعنى إلى `Ich helfe dem Vater.`، مع قبول الجملة بنقطة أو دونها. الخيارات ليست تحويل حالة داخل جملة واحدة: prompt يقارن `Ich sehe den Vater` بمعنى جديد «أنا أساعد الأب»، والشرح/التعليمة الآن يصرحان بتغيير الفعل والحالة، فلا يوحيان أن `sehen` و`helfen` مترادفان.
- `e8` معنى `die Einladung`: المفتاح «الدعوة»؛ الخيارات الأخرى «الهدية/المناسبة/التهنئة» متمايزة.
- `e9` تصحيح الجمع: `Ich helfe den Kinder.` → `den Kindern`. الخيارات `den Kindern / dem Kindern / den Kinder / der Kindern`. المفتاح يطابق Dativ الجمع ويضيف `-n` إلى `Kinder`؛ لا يضاف إلى جمع منتهٍ أصلاً بـ`-n` أو `-s`.
- `e10` إملاء: `Wir gratulieren der Nachbarin zum neuen Job.` الشرح يفصل Dativ الشخص (`der Nachbarin`) عن `zu + Dativ` للحدث (`zum neuen Job`).
- `e11` اتفاق `gefallen`: `Das Fotoalbum ___ Frau Yilmaz besonders gut` → `gefällt`؛ `Die Blumen ___ der Nachbarin auch` → `gefallen`. خيارات الأول `gefällt / gefallen / gefällst` والثاني `gefallen / gefällt / gefällst`. العدد يتبع الفاعل لا الشخص في Dativ.
- `e12` اختيار حرف وسيلة النقل: `Wir fahren ___ dem Zug zur Feier.` المفتاح `mit`; الخيارات `mit / für / ohne / gegen`. التفسير يبين أن `mit dem Zug` يعبّر عن وسيلة النقل و`mit` يحكم Dativ؛ الخيارات الأخرى تطلب Akkusativ في الاستعمال المقصود، فلا توافق `dem`.
- `e13` إكمال إطار `gratulieren`: `Ich gratuliere ___ Nachbarin ___ neuen Job.` المفتاح `meiner / zum`. خيارات الأول `meiner / meine / meinen` والثاني `zum / zur / von`. الشرح يحدد Dativ للشخص و`zu + Dativ` للحدث.
- `e14` تمييز الوجهة عن المكان: `Die Gäste kommen von draußen und gehen ___ Innenhof. Danach feiern sie ___ Innenhof.` المفتاح `in den / im`. خيارات الفراغ الأول `in den / im / in der` والثاني `im / in den / in der`. الشرح يحدد أن `im` مكان لا وجهة، و`in den` وجهة لا مكان، وأن `in der` لا يطابق الاسم المذكر `Innenhof`. أزيل خيار `auf dem` لأنه تركيب مكاني ممكن مع `Innenhof`، كما صيغت الجملة الأولى بحيث تحدد القدوم من الخارج والذهاب إلى الداخل بوضوح.

## تدقيق الكتابة w1–w4

- `w1` دعوة لعيد الميلاد تتضمن السبت، `18 Uhr` (السادسة مساءً)، والمكان `bei mir zu Hause`. الإجابات المقبولة أربع: `Ich lade dich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.`؛ إضافة `herzlich` في الموضع نفسه؛ `Ich lade dich am Samstag um 18 Uhr zu meiner Geburtstagsfeier bei mir zu Hause ein.`؛ و`Am Samstag um 18 Uhr lade ich dich zu meiner Geburtstagsfeier bei mir zu Hause ein.` تقبل الصيغتان الأخيرتان اختلاف ترتيب طبيعي للمعلومات. النموذج يتضمن `herzlich`. هذه إجابة تحويل/كتابة مضبوطة وليست كتابة حرة.
- `w2` مفردات الضمير: `helfe ihr`, `gefällt mir`, `gratulieren dir`. خيارات الفراغات: `ihr/sie/ihm`؛ `mir/mich/dir`؛ `dir/dich/mir`. الإشارات العربية تحدد المرجع، بينما الأفعال تحدد Dativ.
- `w3` إملاء الجملة `Das Geschenk gefällt mir sehr.` الشرح يربط `mir` بـ`gefallen` ويصرح أن المهمة كتابة مضبوطة لا تقويم للنطق.
- `w4` رد قبول مهذب: يقبل `Danke für die Einladung. Ich komme gern.` و`Vielen Dank ...`، مع قبول `gerne` بديلاً صحيحاً عن `gern` في الصيغتين. لا يصف ذلك كتابة حرة.

## تدقيق mini-test m1–m5

- `m1` `Das Geschenk gefällt ___ Kind.` المفتاح `dem`; الخيارات `dem / den / der / die`. `Kind` محايد مفرد.
- `m2` `Ich danke ___ für die Blumen. (أنتَ)` المفتاح `dir`; الخيارات `dir / dich / mir / mich`. المرجع محدد بالمخاطب، والشخص Dativ والزهور بعد `für` Akkusativ.
- `m3` القطع المعروضة: `gefällt / der / Nachbarin / Das / Fotoalbum / .`؛ الترتيب المستهدف `Das Fotoalbum gefällt der Nachbarin.` والتعليمات تشترط البدء بالفاعل. ترتيب مثل `Der Nachbarin gefällt das Fotoalbum` صحيح بالألمانية، لكنه مستبعد هنا بقيد السؤال، لا بوصفه خطأً نحوياً.
- `m4` تصحيح `Ich helfe die Oma im Hof.` → `der`. الخيارات `der / dem / den / das`; `Oma` مؤنث و`helfen` يطلب Dativ.
- `m5` `Kannst du ___ helfen? (أنا)` → `mir`، و`Das Kleid gefällt ___. (هي)` → `ihr`. خيارات الأول `mir/mich/dir` والثاني `ihr/sie/ihm`؛ الإشارات تحدد المرجع والحالة المطلوبة.

## نص القراءة وترجمته ومسرده وأسئلته

**العنوان:** `Ein Geburtstag im Innenhof` — «عيد ميلاد في الساحة الداخلية للمبنى». النوع `erzaehlung`.

1. **الألمانية:** `Am Samstag feiert Frau Yilmaz ihren sechzigsten Geburtstag. Sie lädt die Nachbarn in den Innenhof ein. Auf der Einladung stehen die Uhrzeit und der Treffpunkt. Ihr Bruder hilft ihr beim Dekorieren, und die Kinder stellen die Stühle an die Wand. Um fünf Uhr kommen die ersten Gäste.`
   **العربية:** تحتفل السيدة يلماز يوم السبت بعيد ميلادها الستين. تدعو الجيران إلى الساحة الداخلية للمبنى. وتظهر ساعة اللقاء ومكانه في الدعوة. يساعدها أخوها في التزيين، ويضع الأطفال الكراسي بمحاذاة الجدار. ويصل الضيوف الأوائل في الخامسة.
   **الفحص:** `ihren sechzigsten Geburtstag` صحيح؛ `in den Innenhof` وجهة؛ `beim Dekorieren` بعد `bei`؛ و`an die Wand` يصف وضع الكراسي إلى موضع.
2. **الألمانية:** `Das selbst gemachte Geschenk von den Kindern gefällt Frau Yilmaz besonders gut: ein großes Fotoalbum. Sie gratuliert ihrer Nachbarin zum neuen Job und bedankt sich bei allen für die Blumen. Ein Gast bringt einen Kuchen, der nach Schokolade riecht.`
   **العربية:** أعجب السيدة يلماز خصوصاً ألبوم الصور الكبير الذي صنعه الأطفال وأهدوه لها. وتهنئ جارتها بوظيفتها الجديدة، وتشكر الجميع على الزهور. ويحضر أحد الضيوف كعكة تفوح منها رائحة الشوكولاتة.
   **الفحص:** الألبوم هو الهدية المحددة؛ `von den Kindern` مصدر بـDativ؛ `gefallen` فاعله `das Geschenk`؛ الشخص بعد `gratulieren` في Dativ؛ و`bei allen` مع `für die Blumen` مفصولان في الإطار.
3. **الألمانية:** `Später läuft Musik, und alle tanzen. Der Abend ist warm, und die Stimmung ist fröhlich. Bevor die Gäste nach Hause gehen, helfen sie beim Aufräumen. Frau Yilmaz sagt, dass sie sich über diese Feier sehr freut.`
   **العربية:** تُعزف الموسيقى لاحقاً ويرقص الجميع. الأمسية دافئة والأجواء مبهجة. وقبل أن يعود الضيوف إلى بيوتهم، يساعدون في ترتيب المكان. وتقول السيدة يلماز إنها سعيدة جداً بهذه المناسبة.
   **الفحص:** استبدلت الصياغة الأقل طبيعية `Der Abend ist ... fröhlich` بتمييز حرارة المساء عن بهجة الأجواء؛ وسمّي مرجع `sie` صراحةً في جملة المغادرة.
4. **الألمانية:** `Am Sonntag treffen sich einige Gäste noch einmal zum Kaffee. Sie zeigen einander die Fotos vom Vorabend und erzählen kleine Geschichten. Frau Yilmaz erzählt, dass sie früher große Feiern anstrengend fand. Diesmal musste sie nicht alles allein vorbereiten, weil ihre Nachbarn geholfen haben. Sie möchte sich bei den Kindern besonders bedanken und plant schon einen gemeinsamen Ausflug.`
   **العربية:** يلتقي بعض الضيوف مجدداً لشرب القهوة يوم الأحد. ويتبادلون صور الأمسية السابقة ويروون قصصاً صغيرة. وتقول السيدة يلماز إنها كانت ترى الاحتفالات الكبيرة متعبة في السابق. لكنها لم تضطر هذه المرة إلى إعداد كل شيء وحدها، لأن جيرانها ساعدوها. وتريد أن تشكر الأطفال خصوصاً، وتخطط بالفعل لنزهة مشتركة.
   **الفحص:** التتابع الزمني واضح؛ أسباب عدم إعداد كل شيء وحدها مذكورة؛ `bei den Kindern` و`für die Blumen` ليستا متماثلتين في الحالة.

المسرد العربي المدقق: `der Innenhof` الساحة الداخلية للمبنى؛ `die Einladung` الدعوة؛ `der Treffpunkt` مكان اللقاء؛ `die Nachbarn` الجيران؛ `das Fotoalbum` ألبوم الصور؛ `gratulieren + Dativ` يهنئ شخصاً؛ `sich bei jemandem bedanken` يشكر شخصاً؛ `das Aufräumen` ترتيب المكان بعد المناسبة؛ `der Vorabend` المساء السابق؛ `die Nachbarin` الجارة. ملاحظة `bedanken`: الشخص بعد `bei` في Dativ ويمكن إضافة `für` للشيء المشكور عليه.

| السؤال | الخيارات كاملة | المفتاح وسبب انفراد المفتاح |
|---|---|---|
| `rq1` إلى أين تدعو الجيران؟ | `In den Innenhof / In ein Café / In ihr Büro / In eine Turnhalle` | `In den Innenhof`؛ الفقرة الأولى تصرح بالمكان. المشتتات أماكن ممكنة لكنها غير مذكورة. |
| `rq2` ما الذي أعجبها خصوصاً؟ | `Ein großes Fotoalbum / Ein Blumenstrauß / Ein Kuchen mit Schokolade / Ein neues Kleid` | `Ein großes Fotoalbum`؛ الزهور والكعكة مذكورتان، لكن النص يسمي الألبوم تحديداً هديةً أعجبتها. «كعكة بالشوكولاتة» ليست معلومة صريحة؛ النص يقول إن الكعكة تفوح منها رائحة الشوكولاتة. |
| `rq3` ماذا يفعل الضيوف قبل العودة؟ | `Sie helfen beim Aufräumen / Sie beginnen einen Ausflug / Sie holen noch einen Kuchen / Sie gehen früher am Nachmittag nach Hause` | `Sie helfen beim Aufräumen`؛ هذا منصوص عليه قبل المغادرة. الرحلة مخطط لها في اليوم التالي، ولا يذكر النص إحضار كعكة أخرى أو العودة مبكراً. |
| `rq4` لماذا لم تعدّ كل شيء وحدها؟ | `Ihre Nachbarn haben ihr geholfen / Die Feier fand nicht statt / Ihr Bruder hat die Feier abgesagt / Sie hat alles allein vorbereitet` | `Ihre Nachbarn haben ihr geholfen`؛ السبب المباشر في الفقرة الرابعة. الخيارات الأخرى تناقض أحداث النص أو تخترع إلغاءً. |

الأسئلة الأربعة من نوع comprehension، وتطابق سؤالاً واحداً كل فقرة؛ لكل سؤال ترجمة عربية وشرح. العبارات الجاهزة الأربع: `Ich lade dich herzlich ein.` — أدعوك بكل سرور؛ `Herzlichen Glückwunsch zum Geburtstag!` — أطيب التهاني بعيد ميلادك؛ `Das Geschenk gefällt mir sehr.` — تعجبني الهدية كثيراً؛ `Ich bedanke mich bei euch für die Blumen.` — أشكركم على الزهور. سؤال النقاش المفتوح نصه: «صِف مناسبةً حضرتها أو نظّمتها، أو استخدم تفاصيل خيالية. اذكر من دُعي وما الذي أعجبك، واستعمل فعلاً واحداً من أمثلة Dativ مثل gefallen أو gratulieren. يمكنك كتابة الإجابة أو قولها للتدرب». ويصرح بأن قوله أو كتابته تدريب غير مسجل كدليل على إتقان التحدث.

## نصا الاستماع وأسئلتهما

الصوت في التطبيق مُولّد عبر `SpeechSynthesis` في المتصفح، لا تسجيلات موحدة؛ أسطر المتحدثين تُقرأ آلياً، ولا يثبت هذا تمييزاً لأصوات بشرية مختلفة. الترجمات أدناه راجعت سطراً بسطر.

**l1 — دعوة عيد ميلاد**

| الألمانية | العربية |
|---|---|
| `Sami, ich habe am Samstag Geburtstag!` | سامي، عيد ميلادي يوم السبت! |
| `Herzlichen Glückwunsch! Was hast du geplant?` | أطيب التهاني! ماذا خططتِ؟ |
| `Ich mache eine Party. Ich lade dich ein!` | سأقيم حفلة. أدعوك! |
| `Gern! Wann beginnt die Feier?` | بكل سرور! متى تبدأ المناسبة؟ |
| `Die Feier beginnt um sieben Uhr bei mir zu Hause.` | تبدأ المناسبة في السابعة في منزلي. |
| `Super! Ich bringe ein Geschenk mit.` | رائع! سأحضر هدية. |
| `Danke dir! Du bist ein guter Freund.` | شكراً لك! أنت صديق جيد. |

ترجمة `Was hast du geplant?` تخاطب Mona بصيغة المؤنث العربية؛ `Ich bringe ... mit` يحافظ على معنى إحضار هدية، و`Danke dir` شكر للمخاطب.

**l2 — حديث قصير في المناسبة**

| الألمانية | العربية |
|---|---|
| `Das Geschenk gefällt mir sehr! Danke.` | تعجبني الهدية كثيراً! شكراً. |
| `Gern geschehen! Und die Torte?` | على الرحب والسعة! وماذا عن التورتة؟ |
| `Die Torte ist lecker! Wer hat sie gebacken?` | التورتة لذيذة! من خبزها؟ |
| `Meine Mutter hat sie gebacken. Ich helfe ihr in der Küche.` | خبزتها أمي. أساعدها في المطبخ. |

| السؤال | الخيارات | المفتاح |
|---|---|---|
| `q1` يوم عيد ميلاد Mona | `am Samstag / am Sonntag / am Freitag / am Montag` | `am Samstag` |
| `q2` وقت بدء المناسبة | `um sieben Uhr / um acht Uhr / um sechs Uhr / um neun Uhr` | `um sieben Uhr` |
| `q3` من خبز التورتة؟ | `Karims Mutter / Anna / Karim / Monas Mutter` | `Karims Mutter`؛ Karim يقول صراحةً إن أمه خبزتها. |

المشتتات الأخرى لا تطابق اليوم أو الوقت المذكورين، ولا المتحدث الذي صرح بالخبز. لا تُحتسب إجابة بعد كشف التفريغ دليلاً على الاستماع.

## النطق والبطاقات والأنشطة المفتوحة

### مفردات النطق

| اللفظ | IPA المعروضة | المصدر/الملاحظة المدققة |
|---|---|---|
| `das Geschenk` | `[ɡəˈʃɛŋk]` | DWDS يعرض هذا الشكل؛ النبر على المقطع الثاني و`sch` = /ʃ/. |
| `feiern` | `[ˈfaɪ̯ɐn]` | Wiktionary؛ النبر أول الكلمة و`ei` ثنائي الصوت /aɪ̯/. |
| `die Torte` | `[ˈtɔʁtə]` | Wiktionary؛ النبر على `Tor` و`-e` النهائية ضعيفة. |
| `gratulieren` | `[ɡʁatuˈliːʁən]` | Wiktionary؛ النبر على `lie`، وتقطيع Duden `gra-tu-lie-ren`؛ تحقيق `r` يتغير إقليمياً. |
| `die Einladung` | `[ˈaɪ̯nˌlaːdʊŋ]` | Wiktionary؛ النبر الرئيس على `Ein-` والثانوي على الجزء الثاني. |
| `der Glückwunsch` | `[ˈɡlʏkˌvʊnʃ]` | Wiktionary؛ `ü` قصير، و`w` = /v/، و`sch` = /ʃ/. |

أسطر الترديد الأربعة: `Herzlichen Glückwunsch zum Geburtstag!`، `Ich lade dich herzlich ein.`، `Das Geschenk gefällt mir.`، `Ich helfe dir gern.`. ملاحظة `helfe` تميز أول `e` /ɛ/ قصيرة واضحة من النهاية المخففة `-e` /ə/؛ مصدر الشكل المكتوب Wiktionary لهيئة الفعل `helfe`. لم يُستمع إلى تسجيلات Wiktionary في هذه المراجعة؛ IPA تحقق نصياً فقط. زر الصوت في المنتج يستخدم TTS المتصفح، وقد تختلف جودته وصوته.

مكوّن النطق يوفر تقييماً آلياً عند توافر التعرف الصوتي، وقد يتأثر بدعم المتصفح والميكروفون؛ لا يمثل حكماً بشرياً ولا يثبت وحده الإتقان. لهذا لم يُضف هدف أداء شفهي إلى الأهداف السبعة، ولم تُستخدم نتيجة فتح النطق/الترديد أو تفاعل نصي دليلاً.

### البطاقات الخمس عشرة

| الوجه الألماني | المعنى العربي | المثال الألماني — ترجمته |
|---|---|---|
| `das Fest` | المناسبة/الاحتفال | `Das Fest war schön.` — كانت المناسبة جميلة. |
| `die Einladung` | الدعوة | `Danke für die Einladung!` — شكراً على الدعوة! |
| `feiern` | يحتفل | `Wir feiern am Samstag.` — نحتفل يوم السبت. |
| `das Geschenk` | الهدية | `Das Geschenk ist schön.` — الهدية جميلة. |
| `helfen + Dativ` | يساعد شخصاً | `Ich helfe dir.` — أساعدك. |
| `gefallen + Dativ` | يعجب شخصاً | `Das Geschenk gefällt mir.` — تعجبني الهدية. |
| `gehören + Dativ` | يخصّ/يكون ملكاً لـ | `Das Buch gehört meinem Bruder.` — الكتاب ملك لأخي. |
| `gratulieren + Dativ` | يهنئ شخصاً | `Ich gratuliere dir zum Geburtstag.` — أهنئك بعيد ميلادك. |
| `der Geburtstag` | عيد ميلاد شخص | `Sie hat am Samstag Geburtstag.` — عيد ميلادها يوم السبت. |
| `der Gast, die Gäste` | الضيف/الضيوف | `Die Gäste kommen um fünf Uhr.` — يصل الضيوف في الخامسة. |
| `der Innenhof` | الساحة الداخلية للمبنى | `Wir feiern im Innenhof.` — نحتفل في الساحة الداخلية للمبنى. |
| `sich bei jemandem für etwas bedanken` | يشكر شخصاً على شيء | `Ich bedanke mich bei dir für die Blumen.` — أشكرك على الزهور. |
| `die Nachbarin` | الجارة | `Die Nachbarin kommt zur Feier.` — تأتي الجارة إلى المناسبة. |
| `das Fotoalbum` | ألبوم الصور | `Das Fotoalbum gefällt Frau Yilmaz.` — ألبوم الصور يعجب السيدة يلماز. |
| `die Torte` | تورتة؛ كعكة غالباً بطبقات ومحشوة أو مزيّنة | `Die Torte ist lecker.` — التورتة لذيذة. |

ملاحظة مستوى لا حكم اعتماد: صفحة Duden لـ`Torte` تضع إشارة إلى قائمة مفردات Goethe B1. احتُفظ بها هنا كلمةً سياقيةً مشروحة في البطاقة والنص، لا دليلاً على أن الدرس معتمد أو موائم لـA2/CEFR. إذا كان المسار يفرض قائمة مفردات محددة المستوى، فهذه كلمة تستحق قراراً تحريرياً مستقلاً؛ مستوى البطاقة الداخلي في هذا الدرس لا يُعامل كشهادة مطابقة.

### الوساطة والتفاعل

الوساطة تطلب نقل دعوة ألمانية إلى العربية: `Liebe Freunde, am Samstag feiere ich meinen Geburtstag um 18 Uhr bei mir zu Hause. Kommt alle! Bringt gute Laune mit.` النموذج: «أصدقائي الأعزاء، سأحتفل بعيد ميلادي يوم السبت في السادسة مساءً في منزلي. تعالوا جميعاً، وأحضروا معكم روحاً مرحة!» نقاط الإجابة الثلاث: السبت والسادسة مساءً؛ المنزل مكان اللقاء؛ نقل طلب الحضور بروح مرحة. هذه إجابة نموذجية للمقارنة لا دليل آلي على كفاية الوساطة.

التفاعل موقف نصي من جولتين، وكل خيارين مقبولان في السياق:

1. دعوة السبت: `Ja, gern! Um wie viel Uhr und wo?` — «نعم، بكل سرور! في أي ساعة وأين؟»، والرد `Um 18 Uhr bei mir zu Hause.` — «الساعة السادسة مساءً في منزلي.» أو الاعتذار `Danke für die Einladung! Am Samstag kann ich leider nicht. Können wir uns ein anderes Mal treffen?` — «شكراً على الدعوة! للأسف لا أستطيع يوم السبت. هل يمكن أن نلتقي في وقت آخر؟»، والرد `Schade, aber gern. Wir finden einen anderen Termin.` — «هذا مؤسف، لكن يسعدني ذلك. سنجد موعداً آخر.»
2. سؤال إحضار شيء: `Ja, ich bringe einen Kuchen mit!` — «نعم، سأحضر كعكة!»، والرد `Toll, danke! Bis Samstag!` — «رائع، شكراً! إلى السبت!»؛ أو `Gern, ich bringe eine Kleinigkeit mit. Passt das?` — «بكل سرور، سأحضر شيئاً بسيطاً. هل يناسبك ذلك؟»، والرد `Ja, das passt sehr gut. Danke!` — «نعم، هذا مناسب جداً. شكراً!».

السيناريو والنقاش مفتوحان، ولا يسجلان هدف أداء شفهي.

## تصنيف الملاحظات والحدود المتبقية

### أخطاء/غموض أزيلت

- الوصف السابق «Dativ كاملة» وعبارات «أتقن/أعرف قائمة الأفعال» كانت أوسع من المادة؛ استبدلت بأهداف انتقائية مرتبطة بأداء محدد.
- `Die Gäste gehen im Innenhof` لم يكن يحدد الوجهة؛ قد يعني المشي داخل المكان. استبدلت الجملة بسياق الوصول من الخارج ثم الذهاب إلى الداخل. وأزيل `auf dem Innenhof` من المشتتات لأن هذا تركيب مكاني مستعمل في الألمانية؛ ليس مشتتاً آمناً لإجابة واحدة.
- `e5` لم يحدد مرجع الضمير، وكان `mir` قابلاً لجملة صحيحة بمعنى «أهنئ نفسي». حُدد المخاطَب «أنتَ» في التعليمة؛ `mir` ليست خطأً نحوياً مطلقاً، لكنها لا تطابق المقصود.
- الترجمة العربية السابقة لـ`Das Fotoalbum gefällt Frau Yilmaz` كانت ملتبسة في ترتيب الفاعل؛ أصبحت «ألبوم الصور يعجب السيدة يلماز». حُسنت كذلك `Die Blumen gefallen der Nachbarin` إلى «الزهور تعجب الجارة»، و`Das Fahrrad gehört meinem Bruder` إلى «الدراجة ملك لأخي»، وبطاقة `gehören`، و`Ich komme mit meiner Schwester` إلى «آتي مع أختي».
- صُححت صياغة جملة المساء الألمانية إلى `Der Abend ist warm, und die Stimmung ist fröhlich`، وحُدد مرجع الضمير قبل المغادرة. تحسنت الترجمة إلى «الأمسية دافئة والأجواء مبهجة».
- ميّزت ترجمة `Torte` عن `Kuchen` في الحوار والسؤال إلى «التورتة»، وأضيف توضيح لمعناها في البطاقة.
- صيغت إرشادات النطق بما يطابق المنتج: صوت آلي من المتصفح، وتقييم كلام آلي مشروط بدعم التعرف الصوتي، لا تسجيل معياري أو حكم بشري.

### بدائل سياقية لا تُصنّف أخطاء مطلقة

- `Der Nachbarin gefällt das Fotoalbum.` ترتيب صحيح، لكنه لا يحقق قيد `m3` الذي يطلب البدء بالفاعل.
- `in dem Innenhof` صيغة كاملة صحيحة إلى جانب الاختصار `im`; التمرين يختبر النمط المختصر المعروض.
- `gern` و`gerne` بديلان مقبولان في `w4`، وصيغتا الدعوة في `w1` تقبلان ترتيبين طبيعيين محددين.
- `mir` يمكن أن يصح في جملة مختلفة مع `Ich gratuliere mir`; في `e5` لا يطابق مرجع المخاطب المحدد.

### مسائل تربوية/تقنية مصرح بها

- `w1/w4` والكتابة كلها مهام مضبوطة يقارنها النظام بإجابات مقبولة مسجلة؛ ليست قياساً شاملاً للكتابة الحرة، مهما وسّعنا بعض البدائل.
- الاستماع يعتمد على TTS المتصفح، والنطق الآلي لا يقيس محكماً بشرياً. لم تُراجع جودة الأصوات سمعياً في هذه الدفعة.
- Duden يدرج `Torte` في قائمة مفردات Goethe B1. أبقيناها كلمة سياقية ذات ترجمة وشرح، وسجلناها كمسألة اختيار مستوى مستقبلية، لا كخطأ مؤكد أو دليلاً على مستوى الدرس كله.
- لم تُفحص هنا بقية A1/A2 أو B1/B2، ولا يثبت هذا التدقيق اكتمال أي مهارة أو اعتماد المنهج.

## المصادر وحدود الاستدلال

- [IDS Grammis — Kasus](https://grammis.ids-mannheim.de/sgt/2218?termini=term): يشرح أن الفعل/حرف الجر يحكم الحالة، ويورد `Ich helfe dem Hund` وأمثلة الأدوات.
- [IDS Grammis — gefallen](https://grammis.ids-mannheim.de/verbs/view/400650/1): بنية `etwas gefällt jemandem`؛ فاعل ومتمم Dativ.
- [IDS Grammis — Kasusflexion](https://grammis.ids-mannheim.de/progr@mm/4066): علامة Dativ plural `-n` عندما تسمح الصيغة، مع استثناء plurals المنتهية بـ`-s` أو `-(e)n`.
- [IDS Grammis — Wechselpräpositionen/Ort oder Richtung](https://grammis.ids-mannheim.de/fragen/3140): يميز في الإضافات المكانية الحرة المكان (Dativ) من الاتجاه (Akkusativ)، ويبين أن لا ينبغي تعميم السؤالين على كل تركيب تحكمه Präposition.
- Duden: [helfen](https://www.duden.de/rechtschreibung/helfen)، [gefallen](https://www.duden.de/rechtschreibung/gefallen_reizen_begeistern)، [gehören](https://www.duden.de/rechtschreibung/gehoeren)، [gratulieren](https://www.duden.de/rechtschreibung/gratulieren)، [danken](https://www.duden.de/rechtschreibung/danken)، [sich bedanken](https://www.duden.de/rechtschreibung/bedanken)، [einladen](https://www.duden.de/rechtschreibung/einladen_spendieren)، [zu](https://www.duden.de/rechtschreibung/zu_Praeposition)، [Geburtstag](https://www.duden.de/rechtschreibung/Geburtstag)، [Torte](https://www.duden.de/rechtschreibung/Torte)، و[تصريف Kind](https://www.duden.de/deklination/substantive/Kind). استُخدمت لتعريف المعنى والإطار والأمثلة، و`den Kindern`، وتركيب `zu + Dativ`؛ ملاحظات Goethe B1 على بعض المداخل لا تُعامل كاعتماد للدرس.
- [DWDS — Geschenk](https://www.dwds.de/wb/Geschenk): تعريف `Geschenk` ويعرض IPA `[gəˈʃɛŋk]`. صفحات DWDS لبعض الكلمات الأخرى لم تُستخدم لإسناد IPA إذا لم تعرضه بوضوح.
- Wiktionary، وهو مصدر تعاوني مساعد لا مرجع رسمي وحيد: [feiern](https://de.wiktionary.org/wiki/feiern)، [Torte](https://de.wiktionary.org/wiki/Torte)، [gratulieren](https://de.wiktionary.org/wiki/gratulieren)، [Einladung](https://de.wiktionary.org/wiki/Einladung)، [Glückwunsch](https://de.wiktionary.org/wiki/Gl%C3%BCckwunsch)، و[helfe](https://de.wiktionary.org/wiki/helfe). استُخدمت قيم IPA النصية؛ لم يُستمع إلى ملفات الصوت.
- [Linguee: `auf dem Innenhof`](https://www.linguee.de/deutsch-englisch/uebersetzung/auf+dem+innenhof.html): أمثلة مترجمة/مدونة تستعمل العبارة مكانياً؛ استُخدم ذلك سبباً احترازياً لعدم جعلها مشتتاً خاطئاً، لا حكماً نحوياً مستقلاً.

لم يُستخدم مرجع لتقرير اعتماد Goethe/CEFR أو جاهزية امتحان، ولم يُقدّم مثل هذا الادعاء.

## التحقق

- `npm test -- --run src/data/lessons/a2/a2-09.test.ts`: **13/13** ناجحاً.
- `npx eslint src/data/lessons/a2/a2-09.ts src/data/lessons/a2/a2-09.test.ts`: ناجح.
- `git diff --cached --check` على الملفات الأربعة المستهدفة بعد staging المحدود: ناجح.
- `npm run typecheck -- --pretty false`: فشل في **25 تشخيصاً خارج A2-09**؛ لا يظهر تشخيص في ملف الدرس أو اختباره. المواقع القائمة: `src/components/learning-path/unit-row.tsx`, `src/components/lesson/lesson-access-guard.tsx`, اختبارات النطق `a1-07/a1-08/a1-09/a1-10/a2-03`, `src/lib/competencies.test.ts`، و`src/lib/planner/daily-plan.test.ts`. لا تُعالَج هذه المشاكل خارج نطاق الدفعة.
- لم يُشغّل build أو مجموعة الاختبارات الكاملة؛ لا يُسجل نجاح لهما.
