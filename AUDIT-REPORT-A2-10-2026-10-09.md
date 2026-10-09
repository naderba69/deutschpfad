# تقرير تدقيق الدرس A2-10 — 2026-10-09

## النطاق والنتيجة

رُوجع `src/data/lessons/a2/a2-10.ts` بنداً بنداً: تعريف الدرس وترتيبه، الأهداف وأدلتها، التمهيد والمراجعة التراكمية، كتلتان نظريتان وأمثلتهما وترجماتهما وأخطاؤهما الشائعة، كل تمرين وخياراته ومفتاحه وتفسيره، الكتابة والإملاء، نص القراءة وترجمته وأسئلته ومسرده، حوارا الاستماع وأسئلتهما، ملاحظات IPA والترديد، البطاقات، الوساطة والتفاعل، والملحوظة الثقافية. أُضيف اختبار دفعة خاص في `src/data/lessons/a2/a2-10.test.ts`، وحُدّث ملخص A2-10 وكلماته المفتاحية وحدهما في `src/data/lessons/meta.ts`.

لم يتغير `order: 1` ولا ترتيب الدروس. لا يوجد حقل مدة للدرس أو مدة بالدقائق؛ والثمانية أسابيع الواردة لاحقاً تخص دورة خيالية في تمرين وساطة، لا الدرس. لم تُضمّن تعديلات A2-09، أو `src/data/lessons/academic-depth.test.ts`، أو ملفات القراءة المشتركة، أو بقية تغييرات شجرة العمل. لا يعني تدقيق هذا الدرس اكتمال A2 أو A1–B2، ولا اعتماداً من Goethe، أو مواءمة رسمية مع CEFR، أو إثبات إتقان عام.

**الجرد:** 29 مهمة: 3 مراجعة (`r1–r3`)، و10 في بنك التدريب (`e1–e10`)، و5 mini-test (`m1–m5`)، و3 كتابة/إملاء (`w1–w3`)، و4 أسئلة قراءة (`rq1–rq4`)، و4 استماع (`q1–q4`). كذلك كتلتان نظريتان فيهما 11 مثالاً و6 ملاحظات خطأ/بديل؛ قراءة من 4 فقرات مع ترجمتها، و10 مفردات و4 أسئلة و4 عبارات؛ حواران من 4 و5 أسطر؛ 6 مداخل نطق و4 أسطر ترديد؛ 8 بطاقات، ومهمة وساطة افتراضية واحدة وتفاعل نصي من جولتين. يختبر الملف الخاص عدد المهام، وخيارات الاختيار المتعدد ومفاتيحها، بدائل الإكمال والتصحيح، ترتيب الكلمات، الإجابات المقبولة، النصوص وترجماتها، وأدلة الأهداف ومعرّفات الواجهة.

## الأهداف وأدلتها الفعلية

جميع الأهداف تستخدم `completion: "all-correct"`. إظهار نشاط أو فتحه ليس أداءً؛ والاستماع بعد كشف التفريغ لا يصلح دليلاً على فهم المسموع.

| الهدف | ما يقيسه ضمن حدود المهام | المهام المطلوبة | `taskIds` المسجلة المقبولة |
|---|---|---|---|
| `z1` | التمييز بين الروابط وترتيب الفعل في أمثلة قصيرة محددة | `e1,e2,e4,e7,e9,m1,m3,m5` | `practice:a2-10:e1/e2/e4/e7/e9`; `flow-practice:a2-10:e1/e2/e4`; `mini-test:a2-10:m1/m3/m5`; `flow-mini-test:a2-10:m1` |
| `z2` | صيغ ملكية منتقاة مع أسماء متدرّب عليها في Akkusativ وDativ | `e5,e6,m2,m4` | `practice:a2-10:e5/e6`; `mini-test:a2-10:m2/m4`; `flow-mini-test:a2-10:m2` |
| `z-reading` | استخراج تفاصيل وأسباب محددة من نص قصير عن التعلم | `rq1–rq4` | `reading:read-a2-10:rq1` إلى `reading:read-a2-10:rq4` |
| `z-listening` | التقاط سبب ووقت ومضمون سؤال غير مباشر وشعور من حوارين قصيرين | `q1–q4` | `listening:l1:q1`, `listening:l1:q2`, `listening:l2:q3`, `listening:l2:q4` |
| `z-writing` | صياغة موجّهة، اختيار روابط، وإملاء جملة مسموعة | `w1–w3` | `writing:a2-10:w1/w2/w3` |

آلية الواجهة التي طابقتها الاختبارات: `practice` يختار خمسة عشوائياً من بنك من عشرة ويسجل `practice:{lessonId}:{exerciseId}`؛ لذلك قد يظهر أي `eN` عند إنجاز التدريب العشوائي. تدفق الدرس يعرض أول `min(4, practiceBank.length)`، أي `e1–e4` هنا، ويسجل `flow-practice:{lessonId}:{exerciseId}`؛ لا تُنسب هذه البادئة إلى `e5–e10`. mini-test المعتاد يسجل `mini-test:{lessonId}:{exerciseId}`؛ والتدفق يعرض أسئلة الاختيار المتعدد فقط، وبحد أقصى ثلاثة، وهنا لا يوجد إلا `m1,m2`، بمعرّف `flow-mini-test`. القراءة تستخدم معرّف النص `read-a2-10`، والاستماع المستقل يستخدم `listening:{itemId}:{questionId}`. اختبار الهدف يرفض فتحاً بلا إجابة، وإجابة خاطئة، وسياق درس آخر، ومعرّف `listening-transcript` بعد كشف النص. لم تُدرج `flow-listening` ضمن الدليل.

لا هدف للكلام أو النطق: التفاعل اختيار من بدائل نصية، وسؤال النقاش المفتوح غير مسجل ولا يقيس وحده الكتابة الحرة أو الكلام. مهام الكتابة الثلاث مضبوطة ويصححها النظام بمفاتيح مسجلة؛ لا تثبت كفاية كتابة حرة. أسئلة القراءة والاستماع تثبت فقط نجاح الإجابة عن البنود المستهدفة، ولا تثبت مهارة عامة أو مستوى معتمداً.

## المراجعة التراكمية r1–r3

- `r1` — `Ich ___ Deutsch. (أتعلم)`: المفتاح `lerne` مع `ich`. المشتتات `lernst/lernt/lernen` صيغ تصريف لا توافق الفاعل. الشرح يربط الإجابة بمراجعة A1-01.
- `r2` — `Ich glaube, ___ das stimmt.`: المفتاح `dass` لمعنى «أعتقد أن ذلك صحيح». `weil` سبب، و`wenn` شرط/زمن، و`ob` سؤال غير مباشر بنعم/لا. التفسير مقيد بهذا السياق ولا يزعم أن `dass` و`ob` يتبادلان المعنى.
- `r3` — `Das ist ___ Bruder. (أخي)`: المفتاح `mein`؛ الاسم مذكر مفرد وخبر اسمي بعد `sein` في Nominativ. `meine/meinen` لا يلائمان هذا الاسم والوظيفة.

أُبقيت مراجع المراجعة إلى `a1-01` و`a1-02` و`a2-06` كما هي، واختُبر وجودها في بيانات الفهرس. لا توصف هذه المراجعة بأنها تغطي كل ما سبق.

## تدقيق النظرية والأمثلة

### t1 — `weil`, `wenn`, `ob`

| الرابط | الدلالة في المثال | مثال الدرس وترجمته |
|---|---|---|
| `weil` | سبب | `Ich lerne Deutsch, weil ich in Deutschland studieren will.` — أتعلم الألمانية لأنني أريد الدراسة في ألمانيا. |
| `wenn` | شرط أو زمن بحسب السياق | `Wenn ich Zeit habe, wiederhole ich Vokabeln.` — إذا توفر لديّ وقت، أراجع المفردات. |
| `ob` | سؤال غير مباشر بنعم/لا | `Ich weiß nicht, ob die Prüfung schwer ist.` — لا أعرف ما إذا كان الامتحان صعباً. |
| `weil` | سبب | `Er lernt, weil er die Prüfung bestehen will.` — يتعلم لأنه يريد اجتياز الامتحان. |
| `ob` | مضمون «إن/هل» في جملة متقدمة | `Ob du kommst, ist mir egal.` — لا يهمني إن كنت ستأتي أم لا. |

الأمثلة الأخرى في الكتلة: `Ich lerne, weil ich die Prüfung bestehen will.` و`Wenn ich Zeit habe, lerne ich.` و`Ich weiß nicht, ob er kommt.`. الشرح يحدد موضع الفعل المصرف في الجملة التابعة في النمط المستهدف، ويذكر أن مجيء التابعة أولاً يوجب بدء الجملة الرئيسية بالفعل المصرف: `Wenn ich Zeit habe, lerne ich.` لا يقدم `wenn` بمعنى واحد: قد تكون شرطية أو زمنية. و`ob` ليست `wenn`؛ فهي تدخل سؤالاً غير مباشر/مضموناً احتماليّاً.

قُيّدت الأمثلة الشائعة، ولم تُحوّل الملاحظة المدرسية إلى ادعاء مطلق: `weil` مع الفعل في النهاية هو النمط الذي يتدرب عليه الدرس في الجملة التابعة المندمجة، مع الإشارة إلى ورود تراكيب `weil` ذات فعل في الموقع الثاني في الكلام العفوي ووظائف خاصة. كما وُسمت `wenn` في مثال السؤال غير المباشر بأنها بديل غير مناسب **للمعنى المقصود**، لا خطأً في كل استعمال؛ وفي `m5` وُضحت إمكانية قراءة شرطية أخرى لـ`wenn` في جملة «أبقى في البيت كلما أمطرت». أُضيفت ملاحظة أن `dass` قد ترد بعد `wissen` لتقرير مضمون خبري بمعنى آخر؛ لا تجعلها ذلك سؤالاً غير مباشر بنعم/لا في `e2`.

مقارنة `weil/denn` تشرح اختلاف البناء: تابع مع فعل في النهاية مقابل جملة رئيسية ثانية بفعل في الموقع الثاني. وملاحظة الترقيم تفرق بين السؤال المباشر `Kommt er?` والجملة الخبرية `Ich weiß nicht, ob er kommt.`؛ نوع الجملة الرئيسية هو الذي يحدد علامة الختام.

الأخطاء/البدائل الثلاثة في النظرية، مصنفة كما تظهر في البيانات: (1) `... weil ich will die Prüfung bestehen` ← `... weil ich die Prüfung bestehen will` (`error` ضمن الجملة التابعة القياسية المستهدفة)، (2) `Ich weiß nicht, wenn die Prüfung schwer ist` إذا كان المراد «لا أعرف هل...» ← `ob` (`contextual-alternative`؛ تبقى `wenn` صحيحة للشرط/الزمن)، (3) `Weil es regnet, ich bleibe zu Hause` ← `Weil es regnet, bleibe ich zu Hause` (`error` في ترتيب الجملة الرئيسية المقصود). اختُبرت أمثلة الكتلة وترجماتها والملاحظات الثلاث كاملة.

### t2 — أداة الملكية قبل الاسم، `mein` فقط

الجدول يعرض Nominativ وAkkusativ وDativ لا Genitiv ولا كل أشكال الملكية:

| الحالة | مذكر | مؤنث | محايد | جمع |
|---|---|---|---|---|
| Nominativ | `mein` | `meine` | `mein` | `meine` |
| Akkusativ | `meinen` | `meine` | `mein` | `meine` |
| Dativ | `meinem` | `meiner` | `meinem` | `meinen` + `-n` للاسم إذا لم يكن جمعه منتهياً بـ`-n` أو `-s` |

أمثلة الكتلة وترجماتها: `Das ist mein Bruder.` — هذا أخي (Nominativ بعد `sein`)؛ `Ich sehe meinen Bruder.` — أرى أخي (Akkusativ)؛ `Ich helfe meinem Bruder.` — أساعد أخي (Dativ)؛ `Meine Schwester lernt Deutsch.` — أختي تتعلم الألمانية؛ `Ich helfe meiner Schwester.` — أساعد أختي؛ و`Das ist mein Buch. Ich lese mein Buch.` — هذا كتابي. أقرأ كتابي. تفسر المقارنة أن الملكية بالعربية تلحق الاسم كثيراً، أما الألمانية في هذا المثال فتضع `mein` قبل الاسم وتصرفها مع جنس الاسم وعدده وحالته؛ ولا تساوي تسمية Dativ بالجر العربي.

أُضيف شرح Dativ الجمع الذي كان الجدول يختصره: `mit meinen Freunden` مقابل `mit meinen Eltern`؛ يضاف `-n` حيث يمكن، ولا تضاف نون أخرى إذا كان الجمع منتهياً بـ`-n` أو `-s`. هذا يوضح الخانة ولا يدعي اكتمال جدول التصريف. كذلك يميز `mein Bruder` بوصفه Nominativ بعد `sein`، و`meinen Bruder` مفعولاً مع `sehen`، و`meinem Bruder` متمماً مع `helfen`.

الأخطاء الثلاثة المصنفة `error`: `Ich sehe mein Bruder` ← `Ich sehe meinen Bruder`; `Ich helfe meinen Bruder` ← `Ich helfe meinem Bruder`; و`meine Bruder` ← `mein Bruder`. شُرح الإطار النحوي لكل مثال، لا ترجمة الملكية وحدها. اختُبرت الحالات الثلاث وجدولها وأمثلتها وملاحظاتها وترجماتها كاملة.

## مراجعة مفردات الدرس والبطاقات الثماني

| المعرّف | اللفظ | المعنى | المثال الألماني — ترجمته |
|---|---|---|---|
| `fc1` | `der Kurs` | الدورة | `Der Kurs beginnt um neun.` — تبدأ الدورة في التاسعة. |
| `fc2` | `die Prüfung` | الامتحان | `Die Prüfung ist schwer.` — الامتحان صعب. |
| `fc3` | `der Unterricht` | التعليم/الحصة الدراسية | `Der Unterricht ist interessant.` — الحصة الدراسية ممتعة. |
| `fc4` | `studieren` | يدرس في الجامعة | `Ich will in Berlin studieren.` — أريد الدراسة الجامعية في برلين. |
| `fc5` | `weil` | لأنّ | `Ich lerne weiter, weil ich die Prüfung bestehen will.` — أواصل التعلم لأنني أريد اجتياز الامتحان. |
| `fc6` | `wenn` | إذا/عندما بحسب السياق | `Wenn ich Zeit habe, wiederhole ich Vokabeln.` — إذا توفر لديّ وقت، أراجع المفردات. |
| `fc7` | `ob` | هل/ما إذا في السؤال غير المباشر | `Ich weiß nicht, ob er kommt.` — لا أعرف ما إذا كان سيأتي. |
| `fc8` | `bestehen` | يجتاز (في سياق الامتحان) | `Ich bestehe die Prüfung.` — أجتاز الامتحان. |

وفي كلمات التنشيط: `der Kurs` «الدورة أو المساق بحسب السياق»، `lernen` «يتعلم أو يدرس»، `die Prüfung` «الامتحان»، `der Unterricht` «التعليم أو الحصة الدراسية»، و`studieren` «يدرس في الجامعة». ميّز `lernen` العام من `studieren` الجامعي؛ ولا تُعرض `wenn` أو `ob` كترجمة عربية وحيدة خارج السياق. تصريف البطاقة يستخدم `die Vokabel / die Vokabeln`، وهو استعمال مؤنث سليم؛ يذكر Duden أيضاً المحايد بوصفه استعمالاً نمساوياً.

## القراءة: النص والترجمة والمسرد والأسئلة

**`read-a2-10` — `Noura lernt für die Prüfung`، «نورا تستعد للامتحان» — قصة من أربع فقرات.**

| الفقرة | الألمانية | العربية المدققة |
|---|---|---|
| 1 | `Seit zwei Monaten besucht Noura einen Deutschkurs an einer Sprachschule in ihrer Stadt. Der Unterricht findet montags und mittwochs am Abend statt. Sie lernt Deutsch, weil sie später an einer Universität studieren möchte.` | منذ شهرين تحضر نورا دورةً للألمانية في مدرسة لغات بمدينتها. تُعقد الحصص مساء يومي الاثنين والأربعاء. تتعلم الألمانية لأنها تريد لاحقاً الدراسة في جامعة. |
| 2 | `Vor der Prüfung wiederholt Noura jeden Tag neue Wörter. Wenn sie nach der Arbeit müde ist, macht sie eine kurze Pause. Danach schreibt sie einige Wörter in ihr Heft und liest sie am nächsten Morgen noch einmal.` | قبل الامتحان تراجع نورا كلمات جديدة كل يوم. إذا عادت متعبة من العمل تأخذ استراحة قصيرة. بعد ذلك تكتب بعض الكلمات في دفترها وتقرأها مجدداً في صباح اليوم التالي. |
| 3 | `Am Freitag fragt ihr Freund Sami, ob sie am Wochenende zusammen üben kann. Noura antwortet, dass sie am Samstag Zeit hat. Sie weiß noch nicht, ob die Bibliothek geöffnet ist; deshalb prüft Sami die Öffnungszeiten auf der Webseite.` | يوم الجمعة يسألها صديقها سامي هل يمكنهما التدرّب معاً في نهاية الأسبوع. تجيب نورا بأنها متفرغة يوم السبت. وهي لا تعرف بعد إن كانت المكتبة مفتوحة؛ لذلك يتحقق سامي من مواعيد فتحها على الموقع الإلكتروني. |
| 4 | `Am Samstag lernen beide in der Bibliothek. Sie vergleichen ihre Notizen und erklären einander schwierige Wörter. Noura ist vor der Prüfung etwas nervös, aber sie bleibt ruhig, weil sie sich gut vorbereitet hat. Wenn beide Zeit haben, wollen sie vor der nächsten Prüfung wieder zusammen lernen.` | يوم السبت يتعلم الاثنان معاً في المكتبة. يقارنان ملاحظاتهما ويشرحان لبعضهما الكلمات الصعبة. تشعر نورا ببعض التوتر قبل الامتحان، لكنها تظل هادئة لأنها استعدت جيداً. وإذا كان لدى كليهما وقت، يريدان الدراسة معاً مجدداً قبل الامتحان التالي. |

المسرد: `die Sprachschule` — مدرسة اللغات؛ `der Unterricht` — التعليم أو الحصة الدراسية؛ `wiederholen` — يراجع أو يكرر؛ `müde` — متعب؛ `das Heft` — الدفتر؛ `üben` — يتدرب؛ `geöffnet` — مفتوح؛ `die Öffnungszeiten` — مواعيد الفتح؛ `die Notizen` — الملاحظات؛ `sich vorbereiten` — يستعد. العبارات الأربع: `Ich wiederhole neue Wörter.` — أراجع كلمات جديدة؛ `Ich weiß noch nicht, ob die Bibliothek geöffnet ist.` — لا أعرف بعد إن كانت المكتبة مفتوحة؛ `Ich lerne, weil ich mich gut vorbereiten möchte.` — أدرس لأنني أريد أن أستعد جيداً؛ `Wenn ich müde bin, mache ich eine Pause.` — إذا كنت متعباً، آخذ استراحة.

| السؤال | جميع الخيارات | المفتاح وسبب صحته |
|---|---|---|
| `rq1` — `Wann findet der Unterricht statt?` / متى تُعقد الحصص؟ (فقرة 1) | `Montags und mittwochs am Abend`; `Jeden Morgen`; `Nur am Freitag`; `Am Wochenende` | الأول؛ هذا موعد الحصة المنصوص عليه، لا لقاء المكتبة. |
| `rq2` — `Warum lernt Noura Deutsch?` / لماذا تتعلم نورا الألمانية؟ (فقرة 1) | `Weil sie später an einer Universität studieren möchte`; `Weil ihr Freund in Deutschland wohnt`; `Weil ihre Prüfung schon vorbei ist`; `Weil sie eine Sprachschule eröffnen möchte` | الأول؛ السبب المذكور هو رغبتها في الدراسة الجامعية لاحقاً. |
| `rq3` — `Was prüft Sami am Freitag?` / ما الذي يتحقق منه سامي يوم الجمعة؟ (فقرة 3) | `Die Öffnungszeiten der Bibliothek`; `Den Termin der Prüfung`; `Die Kursgebühr`; `Den Stundenplan der Sprachschule` | الأول؛ النص يذكر مواعيد فتح المكتبة تحديداً. |
| `rq4` — `Warum bleibt Noura ruhig?` / لماذا تظل نورا هادئة؟ (فقرة 4) | `Weil sie sich gut vorbereitet hat`; `Weil die Prüfung abgesagt wurde`; `Weil sie keine Prüfung hat`; `Weil Sami die Prüfung für sie geschrieben hat` | الأول؛ ذلك هو السبب الصريح. بقية الخيارات غير واردة أو تناقض النص. |

السؤال مفتوح في آخر القراءة يدعو إلى ذكر طريقة للاستعداد أو اختيار موقف خيالي، كتابةً أو قولاً؛ لكنه يصرح بأنه لا يقيس بمفرده الكتابة الحرة أو الكلام، وليس دليلاً مسجلاً لهدف.

## الاستماع: الحواران والترجمات والأسئلة

التطبيق يستخدم `SpeechSynthesis` في المتصفح، لا تسجيلات بشرية موحدة. راجعت نصوص الحوارات وترجماتها؛ لم أقيّم صوت TTS سمعياً.

**l1 — أسباب تعلم الألمانية ومراجعة الكلمات:**

| المتحدث | الألمانية | العربية |
|---|---|---|
| Anna | `Warum lernst du Deutsch, Sami?` | لماذا تتعلم الألمانية يا سامي؟ |
| Sami | `Ich lerne Deutsch, weil ich später in Deutschland studieren möchte.` | أتعلم الألمانية لأنني أريد لاحقاً الدراسة في ألمانيا. |
| Anna | `Wann wiederholst du neue Wörter?` | متى تراجع الكلمات الجديدة؟ |
| Sami | `Wenn ich am Morgen Zeit habe, wiederhole ich sie.` | إذا توفر لديّ وقت في الصباح، أراجعها. |

**l2 — الامتحان والاستعداد له:**

| المتحدث | الألمانية | العربية |
|---|---|---|
| Karim | `Ich weiß nicht, ob die Prüfung schwierig wird.` | لا أعرف ما إذا كان الامتحان سيكون صعباً. |
| Mona | `Wann ist die Prüfung?` | متى الامتحان؟ |
| Karim | `Morgen. Ich lerne heute noch, weil ich gut vorbereitet sein möchte.` | غداً. سأدرس اليوم أيضاً لأنني أريد أن أكون مستعداً جيداً. |
| Mona | `Bist du nervös?` | هل أنت متوتر؟ |
| Karim | `Ja, ein bisschen. Ich hoffe, dass alles gut geht.` | نعم، قليلاً. آمل أن تسير الأمور على ما يرام. |

| السؤال | جميع الخيارات | المفتاح وسبب صحته |
|---|---|---|
| `q1` — لماذا يتعلم سامي الألمانية؟ | `Weil er später in Deutschland studieren möchte`; `Weil er morgen eine Prüfung hat`; `Weil Anna in Deutschland wohnt`; `Weil er neue Wörter unterrichten möchte` | الأول؛ هذا سببه كما قال، وموعد الامتحان يعود إلى حوار Karim. |
| `q2` — متى يراجع سامي الكلمات؟ | `Wenn er am Morgen Zeit hat`; `Jeden Abend nach dem Unterricht`; `Wenn Anna ihn anruft`; `Nur am Wochenende` | الأول؛ لا يحدد الحوار وقتاً يومياً ثابتاً، بل شرط توفر الوقت صباحاً. |
| `q3` — ما الذي لا يعرفه كريم؟ | `Ob die Prüfung schwierig wird`; `Wann der Unterricht beginnt`; `Ob Mona Deutsch lernt`; `Wie viele Wörter er lernen muss` | الأول؛ هو مضمون السؤال غير المباشر الوارد في كلامه. |
| `q4` — كيف يشعر كريم؟ | `Ein bisschen nervös`; `Ganz ruhig und sicher`; `Wütend auf Mona`; `Müde und krank` | الأول؛ رده `Ja, ein bisschen` جواب عن سؤاله عما إذا كان متوتراً. |

الأسئلة الأربعة تقيس أسئلة فهم اختيارية محددة، لا قدرة استماع عامة. الإجابة بعد إظهار التفريغ لا تدخل في هدف `z-listening`.

## الكتابة الموجهة w1–w3

- `w1` — صياغة جملة معطاة بـ`weil`: المطلوب «أتعلم الألمانية لأنها مهمة» باستخدام `es`. الإجابتان المسجلتان `Ich lerne Deutsch, weil es wichtig ist` مع النقطة أو دونها؛ والنموذج يطابق الصيغة ذات النقطة. التفسير يبين أن `Deutsch` اسم اللغة وأن `ist` في نهاية التابعة. لا يقيس ذلك كتابة حرة.
- `w2` — إكمال ثلاثة فراغات بخياراتها ومفاتيحها: `weil` لسبب مواصلة التعلم؛ `Wenn` لوقت/شرط توفر الصباح مع الفعل في نهاية التابعة؛ `ob` لسؤال غير مباشر نعم/لا. الخيارات على الترتيب: `[weil, wenn, ob]`، `[Wenn, Weil, Ob]`، `[ob, weil, wenn]`. المفتاح `weil / Wenn / ob`. التفسير يذكر المعاني؛ ولا ينبغي قراءة المفتاح على أنه ينفي إمكان جملة `wenn` الشرطية في سياق مختلف.
- `w3` — إملاء `Ich weiß nicht, ob die Prüfung schwer ist.`؛ التفسير «لا أعرف هل الامتحان صعب — ob + الفعل في النهاية». هو إملاء مضبوط لا كتابة حرة ولا قياس كلام.

## بنك التدريب e1–e10

| المهمة | نص السؤال/النشاط | الخيارات أو البدائل كاملة | المفتاح وملاحظة المراجعة |
|---|---|---|---|
| `e1` اختيار من متعدد | `Ich lerne weiter, ___ ich die Prüfung bestehen will.` | `weil / wenn / ob / dass` | `weil`: سبب مواصلة التعلم؛ الفعل المصرف `will` في آخر الجزء التابع. |
| `e2` اختيار من متعدد | `Ich weiß nicht, ___ du heute Zeit hast.` والسؤال محدد بأنه غير مباشر نعم/لا | `ob / weil / wenn / dass` | `ob`: عدم اليقين بشأن جواب نعم/لا. الشرح يقر بأن `dass` مع `wissen` ممكنة في سياق خبري بمعنى آخر، لكنها لا تحقق المطلوب هنا؛ لا تصنف خطأً دائماً. |
| `e3` مطابقة | صل مفردة المدرسة بمعناها | `der Kurs` ↔ الدورة أو المساق؛ `die Prüfung` ↔ الامتحان؛ `der Unterricht` ↔ التعليم أو الحصة الدراسية؛ `studieren` ↔ يدرس في الجامعة | الأزواج الأربعة تطابق معاني المفردات في هذا السياق؛ يميز الشرح الدراسة الجامعية (`studieren`) من الحصة (`Unterricht`). |
| `e4` ترتيب كلمات | `Ich lerne, weil ich die Prüfung bestehen will.` | القطع كلها: `weil / lerne / Ich / die / Prüfung / will / ich / bestehen / , / .` | يبدأ بـ`Ich lerne` ثم التابعة: `Ich lerne, weil ich die Prüfung bestehen will.`؛ المصدر `bestehen` يسبق `will` في النهاية. |
| `e5` تصحيح | `Ich sehe mein Bruder.`؛ الكلمة المحددة `mein` | `meinen / meinem / meine / mein` | `meinen`; مفعول `sehen` مذكر في Akkusativ. |
| `e6` إكمال | `Ich sehe ___ Vater. (أبي — Akkusativ) Ich helfe ___ Mutter. (أمي — Dativ)` | الفراغ الأول `meinen / meinem / meine`؛ الثاني `meiner / meinen / meine` | `meinen / meiner`; التعليمات تحدد الحالة والمرجع. |
| `e7` تحويل موجّه | `Kommt er? → (لا أعرف هل يأتي)` | إجابتان مقبولتان: `Ich weiß nicht, ob er kommt` أو بالنقطة | السؤال المباشر يصير `ob` + فعل في نهاية التابعة؛ التحويل ليس سؤالاً حراً. |
| `e8` اختيار معنى | `die Prüfung bestehen` | `يجتاز الامتحان / يرسب في الامتحان / يستعد للامتحان / يؤجل الامتحان` | `يجتاز الامتحان`; هذا معنى `bestehen` في تركيب الامتحان، لا كل معاني الفعل. |
| `e9` تصحيح | `Wenn es regnet, ich bleibe zu Hause.`؛ الجزء المحدد `ich bleibe` | `bleibe ich / ich bleibe / bleiben ich / bleibst ich` | `bleibe ich`: التابعة المتقدمة تحتل الموقع الأول، فيأتي الفعل المصرف في الرئيسية بعدها. |
| `e10` إملاء | جملة مسموعة عن الوقت والمفردات | النص: `Wenn ich Zeit habe, lerne ich Vokabeln.` | المفتاح النصي مطابق؛ التفسير يشرح `habe` في التابعة و`lerne` قبل الفاعل في الرئيسية. |

## mini-test m1–m5

- `m1` — `___ du Zeit hast, hilf mir bitte.` الخيارات `Wenn / Weil / Ob / Dass`; المفتاح `Wenn` لأن الطلب مشروط بتوفر الوقت.
- `m2` — `Ich helfe ___ Bruder. (أخي)` الخيارات `meinem / meinen / mein / meine`; المفتاح `meinem` لأن `helfen` يأخذ Dativ هنا و`Bruder` مذكر مفرد.
- `m3` — إعادة ترتيب `ob / weiß / nicht / Ich / kommt / er / , / .` إلى `Ich weiß nicht, ob er kommt.`؛ `ob` يفتتح السؤال غير المباشر و`kommt` في النهاية.
- `m4` — تصحيح `Ich sehe meine Vater.`؛ الجزء الخاطئ `meine`، والصواب `meinen`. الخيارات `meinen / meinem / mein / meiner`; المفعول مذكر مفرد في Akkusativ.
- `m5` — أكمل: `Ich bleibe zu Hause, ___ es regnet. ___ ich müde bin, schlafe ich. Ich frage, ___ du mitkommst.` الخيارات للأول `[weil, wenn, ob]`، والثاني `[Wenn, Weil, Ob]`، والثالث `[ob, weil, wenn]`; المفتاح `weil / Wenn / ob` وفق التعليمات (سبب، ثم شرط/وقت، ثم سؤال غير مباشر). تشرح التغذية الراجعة أن `wenn` قد تصح في قراءة أخرى للجملة الأولى («أبقى كلما أمطرت»)، فلا يُعمم أن `wenn` مستحيلة في التركيب.

## النطق وملاحظات IPA والترديد

| المفردة | IPA النصية | ملاحظة الدرس المدققة |
|---|---|---|
| `die Prüfung` | `[ˈpʁyːfʊŋ]` | النبر على الأول؛ `ü` طويلة مدوّرة `/yː/`، و`ng` تمثل `/ŋ/`؛ تحقيق `r` إقليمي. |
| `der Unterricht` | `[ˈʊntɐˌʁɪçt]` | في هذا الموضع `ch` هي `/ç/`، كما في `ich`، لا `/ʃ/`. |
| `studieren` | `[ʃtuˈdiːʁən]` | النبر على `-die-` و`ie` تمثل `/iː/` طويلة. |
| `die Vokabel` (المفرد) | `[voˈkaːbl̩]` | `v` في هذه الكلمة `/v/`، النبر على المقطع الثاني، ولا تُعمم القاعدة على كل كلمة فيها `v`. |
| `bestehen` | `[bəˈʃteːən]` | النبر على `-ste-`؛ `st` في بداية المقطع المنبور `/ʃt/`. |
| `der Lehrer` | `[ˈleːʁɐ]` | النبر على الأول و`e` طويلة؛ تحقيق `r` يختلف بحسب المتحدث والمنطقة. |

مداخل IPA في الجدول طوبقت نصياً مع مداخل Wiktionary الألمانية المطابقة. لم أستمع إلى ملفات الصوت، لذا لا أدعي التحقق من جودة التسجيلات أو مطابقة صوت TTS. ملاحظة الدرس نفسها تحذر من أن العربية لا تمثل `/yː/` و`/ç/` تمثيلاً مطابقاً، وتطلب الرجوع إلى IPA بدلاً من تهجئة عربية تقريبية.

أسطر الترديد الأربعة وترجماتها/ملاحظاتها: `Ich lerne weiter, weil ich die Prüfung bestehen will.` — أواصل التعلم لأنني أريد اجتياز الامتحان؛ الفعل المصرف `will` في نهاية التابعة. `Wenn ich Zeit habe, wiederhole ich Vokabeln.` — إذا توفر لدي وقت، أراجع المفردات؛ `habe` في نهاية التابعة، ثم `wiederhole` قبل `ich`. `Ich weiß nicht, ob er kommt.` — لا أعرف ما إذا كان سيأتي؛ `ei` في `weiß` `/aɪ̯/` و`w` القياسية `/v/`. `Die Prüfung ist leicht.` — الامتحان سهل؛ `ei` في `leicht` `/aɪ̯/` و`ch` هنا `/ç/` لا `/x/`. هذه أمثلة ترديد واسترشاد لا اختبار أداء صوتي.

## الوساطة والتفاعل والملحوظة الثقافية

- الوساطة `med-a2-10-1` تطلب تلخيص سيناريو **افتراضي** لدورة B1: تبدأ في سبتمبر، تمتد ثمانية أسابيع، ثلاث مرات أسبوعياً، وفي النهاية امتحان. وُسم المصدر بوضوح بأنه مثال تدريبي لا إعلان حقيقي؛ والأسابيع تخص السيناريو الخيالي لا مدة درس A2-10. الإجابة النموذجية بالعربية ونقاط التحقق تنقل موعد البداية والمدة وعدد اللقاءات والامتحان. لا يسجل هذا النشاط دليلاً آلياً على كفاية الوساطة.
- التفاعل `int-a2-10-1` جولتان نصيتان: سؤال التسجيل، والخبرة السابقة، والموعد الثابت بعد أسبوعين. الإجابة التي تستجيب للموعد هي `Ja, ich kann in zwei Wochen anfangen.`؛ و`Ich starte, wenn ich will.` سليمة نحوياً لكنها لا تجيب عن الموعد المحدد، وهذا الفرق منصوص عليه في ملاحظة الاستراتيجية. الجولة الأولى تميز الرد المناسب على التسجيل من خيار طلب العشاء غير المتصل بالموقف. روجعت ترجمات الخيارات والردود الأربعة كاملة؛ التفاعل ليس قياس كلام.
- ملحوظة التعليم تقيد التعميم عن `Hauptschule/Realschule/Gymnasium`: تنظم الولايات المسارات بأشكال مختلفة وقد تجمع المدرسة الواحدة مسارين أو ثلاثة؛ فلا يصح تصوير أسماء المدارس كخيارات مستقلة موحدة في كل ولاية أو كطريق وحيد للجامعة. ومعلومة الرسوم مقيدة بالولاية والجامعة والبرنامج ووضع الطالب؛ فالرسوم الدراسية ومساهمة الفصل ليست شيئاً واحداً، ويجب مراجعة البرنامج المحدد. تسند مصادر KMK وDAAD هذه الصياغة العامة المقيدة، ولا تقدم نصيحة قبول أو رسوم لجامعة بعينها.

## تصنيف النتائج والحدود التربوية

### تصحيحات/توضيحات مؤكدة في دفعة A2-10

- أزيل الادعاء الواسع بأن الملكية في «كل الحالات»؛ صار العنوان `Possessivbegleiter: Deklination von mein`، والجدول يصرح بأنه يغطي Nominativ/Akkusativ/Dativ. أضيفت قاعدة Dativ الجمع مع `-n` والاستثناءان الشكليان `-n/-s` بأمثلة.
- رُبطت صيغ `meinen/meinem/meiner` بوظيفة الاسم وإطار الفعل المحدد؛ لا يعادل شرح Dativ «الجر» العربي. `sehen` يأخذ مفعولاً Akkusativ في الأمثلة، و`helfen` يأخذ متمماً Dativ؛ والخبر الاسمي بعد `sein` هنا Nominativ.
- فُصلت معاني `weil/wenn/ob` في الأمثلة المستهدفة؛ أُبقي الاستعمال الزمني لـ`wenn` والبديل المحكي/الخاص لبعض استعمالات `weil` موضحين بدلاً من أحكام مطلقة. وذُكر فرق `dass/ob` مع `wissen`، وتبعية علامة الجملة للترقيم.
- أُكملت ترجمة كل فقرة وسطر حوار وبطاقة ونموذج/خيار تفاعل في اختبار الدفعة. جُمعت الأسئلة والخيارات ومفاتيحها في اختبارات محددة، لا تحقق عام من وجود الحقول.

### مسائل مستوى/بدائل/حدود، لا تُعامل كأخطاء مؤكدة

- صفحات Duden لكل من `Kurs`, `lernen`, `Prüfung`, `Unterricht`, `studieren`, `bestehen`, و`Lehrer` تضع المفردة ضمن مفردات Goethe-Zertifikat B1. هذه الإشارة سبب تربوي لمراجعة توزيع المفردات/السقالات في المسار، وليست برهاناً على أن الكلمة لا تظهر قبل B1، ولا شهادة اعتماد أو مواءمة للدرس كله. لا يزعم التقرير ذلك.
- `wenn` قد تكون زمنية أو شرطية؛ و`dass` قد تدخل مضموناً تقريرياً بعد `wissen` بينما `ob` يقدم السؤال/الاحتمال المفتوح. الأسئلة محددة بما يكفي لاختيار هدفها، لكن ذلك لا يجعل البدائل مستحيلة في كل سياق.
- `bestehen` متعدد المعاني؛ في البطاقات والتمرين يقصد «يجتاز» بسبب المفعول `die Prüfung` فقط.
- النشاط المفتوح لا يسجل الأداء؛ والكتابة كلها مضبوطة؛ والاستماع عبر صوت المتصفح الاصطناعي لا يساوي تسجيلات طبيعية موحدة؛ ولم يُراجع الصوت أو نطق المتعلم سمعياً. لا هدف كلام/نطق مقوّم في هذه الدفعة.

## المصادر وحدود الاستدلال

### القواعد والتركيب

- [IDS Grammis — Nebensatz](https://grammis.ids-mannheim.de/sgt/2256?termini=term): الجملة التابعة تكون في النموذج الأولي بفعل في النهاية، مع عرض أشكال أخرى في تراكيب بعينها؛ لذلك قُيد الشرح بالنمط المستهدف.
- [IDS Grammis — Konditionalsätze](https://grammis.ids-mannheim.de/systematische-grammatik/2101): `wenn` ذات استعمال شرطي وزمني، ولا تختزل دلالتها في «إذا» وحدها.
- [IDS Grammis — Dass- und ob-Sätze](https://grammis.ids-mannheim.de/systematische-grammatik/2091): يفرق بين محتوى `dass` وقيمة عدم اليقين/السؤال مع `ob`، ويظهر إمكان `dass/ob` مع بعض الأفعال ومنها `wissen` بحسب المعنى.
- [IDS Grammis — Verbstellung nach weil](https://grammis.ids-mannheim.de/fragen/133): يقرر أن `weil` التابعة القياسية تأخذ الفعل المصرف أخيراً، ويوثق أيضاً تراكيب V2 في كلام/وظائف خاصة؛ استُخدم للتقييد لا لإنكار النمط القياسي.
- [Duden — ob](https://www.duden.de/rechtschreibung/ob_Konjunktion) و[dass](https://www.duden.de/rechtschreibung/dass): تعريفات الاستعمال، السؤال غير المباشر والروابط التابعة.
- [Duden — Fragezeichen](https://www.duden.de/sprachwissen/rechtschreibregeln/fragezeichen) و[Punkt](https://www.duden.de/sprachwissen/rechtschreibregeln/punkt): علامة السؤال للجملة الاستفهامية، والنقطة للجملة الخبرية/المركبة؛ استُخدما لشرح أن سؤالاً غير مباشر داخل خبر لا يحول الخبر إلى سؤال مباشر.
- [IDS Grammis — Possessiv-Artikel](https://grammis.ids-mannheim.de/kontrastive-grammatik/3926): تصريف أداة الملكية بحسب جنس/عدد/حالة الاسم، وأمثلة جدول `mein`.
- [IDS Grammis — Kasusflexion](https://grammis.ids-mannheim.de/progr@mm/4066): Dativ الجمع يأخذ `-n` حيث تسمح النهاية؛ لا تضاف علامة أخرى إلى جمع منتهٍ بـ`-s` أو `-(e)n`.
- [IDS Grammis — helfen](https://grammis.ids-mannheim.de/verbs/view/400561/2) و[Duden — helfen](https://www.duden.de/rechtschreibung/helfen): إطار `jemandem/etwas helfen` وأمثلة متمم Dativ.
- [IDS Grammis — sehen، قراءة 2](https://grammis.ids-mannheim.de/verbs/view/400881/2) و[قراءة 5](https://grammis.ids-mannheim.de/verbs/view/400881/5): مفعول `sehen` في Akkusativ في معاني الرؤية/اللقاء ذات الصلة؛ لا تعمم هذه القراءة على جميع تراكيب الفعل.
- [IDS Grammis — Prädikativ](https://grammis.ids-mannheim.de/progr@mm/6885): مع `sein/bleiben/werden` قد يأتي الاسم الخبري في Nominativ؛ يدعم تحليل `mein Bruder` في المثال.

### المعجم والنطق والثقافة

- Duden: [Kurs](https://www.duden.de/rechtschreibung/Kurs)، [lernen](https://www.duden.de/rechtschreibung/lernen)، [Prüfung](https://www.duden.de/rechtschreibung/Pruefung)، [Unterricht](https://www.duden.de/rechtschreibung/Unterricht)، [studieren](https://www.duden.de/rechtschreibung/studieren)، [bestehen](https://www.duden.de/rechtschreibung/bestehen)، [Lehrer](https://www.duden.de/rechtschreibung/Lehrer)، [Vokabel](https://www.duden.de/rechtschreibung/Vokabel): معاني المفردات، الجنس/الجمع، الاستعمال الجامعي لـ`studieren`، معنى `bestehen` في الامتحان، ووسم قائمة Goethe B1 لبعض المداخل. هذا وسم معجمي مساعد لا اعتماد للدرس.
- مداخل النطق النصية في Wiktionary الألماني (مصدر تعاوني مساعد؛ لم يُستخدم وحده لإثبات قاعدة): [Prüfung](https://de.wiktionary.org/wiki/Pr%C3%BCfung)، [Unterricht](https://de.wiktionary.org/wiki/Unterricht)، [studieren](https://de.wiktionary.org/wiki/studieren)، [Vokabel](https://de.wiktionary.org/wiki/Vokabel)، [bestehen](https://de.wiktionary.org/wiki/bestehen)، [Lehrer](https://de.wiktionary.org/wiki/Lehrer). روجعت رموز IPA نصياً فقط، ولم يُستمع إلى التسجيلات.
- [KMK — Bildungswege und Abschlüsse](https://www.kmk.org/bildungsministerkonferenz/bildungsthemen/bildungswege-und-abschluesse.html): اختلاف تنظيم مسارات المدرسة بين الولايات الألمانية.
- [DAAD — Costs of education and living](https://www.daad.de/en/studying-in-germany/living-in-germany/finances/): يفرق بين الرسوم الدراسية ومساهمة الفصل، ويوثق الاستثناءات والاختلاف بحسب الولاية/الجامعة/البرنامج؛ لا يحدد رسوماً لدورة أو جامعة في قصة الدرس.

لا يقدم أي من هذه المصادر اعتماداً لـDeutschpfad أو A2-10، ولا دليل مواءمة رسمية مع CEFR أو قياساً شاملاً لإتقان المهارات.

## التحقق

- الاختبار المركز `npm test -- src/data/lessons/a2/a2-10.test.ts`: **15/15** ناجحاً. يطبع Vitest تحذير إعداد قائم وغير مانع بشأن `configLoader: 'native'` وخلط ESM/CJS في `vitest.config.ts`.
- ESLint على `src/data/lessons/a2/a2-10.ts` و`src/data/lessons/a2/a2-10.test.ts`: ناجح.
- `npm run typecheck -- --pretty false`: يفشل بـ**25 تشخيصاً خارج A2-10**؛ لا تشخيص في ملف الدرس أو اختباره. تتعلق بـ`src/components/learning-path/unit-row.tsx` و`lesson-access-guard.tsx`، واختبارات أحداث النطق في A1-07/A1-08/A1-09/A1-10/A2-03، و`src/lib/competencies.test.ts` و`src/lib/planner/daily-plan.test.ts`. لم تُصلح في هذه الدفعة.
- لم تُشغّل مجموعة الاختبارات الكاملة أو build؛ لا يُدّعى نجاحهما.
- بعد حصر stage بالملفات المرتبطة وحدها ومراجعة staged diff، نجح `git diff --cached --check`. أُدرج صف A2-10 وحده من `meta.ts`؛ بقي تعديل A2-09 وسائر التغييرات خارج stage. لا تستخدم `git add -A`.
