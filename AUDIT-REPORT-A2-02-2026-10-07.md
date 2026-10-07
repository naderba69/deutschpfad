# تقرير تدقيق A2-02 — 2026-10-07

## خلاصة النتيجة

اكتمل التدقيق الفردي لمحتوى **A2-02 — Beim Arzt** بعد A2-01 بحسب ترتيب `src/data/lessons/meta.ts`. بقي الدرس عند `order: 1`؛ لم يتغير ترتيب الفهرس. حدّثت ملخص A2-02 فقط، ووُسّعت اختبارات الحماية المحلية. لا يعني الوسم الداخلي A2 اعتماداً من Goethe أو إثبات توافق/إتقان CEFR، ولا يصف هذا الدرس مساراً طبياً كاملاً.

أبرز المراجعات والإصلاحات:

- ضُبطت أهداف الدرس الثمانية لتصف أداءً محدداً، وربط كل هدف بمهام فعلية وبـ`completion: "all-correct"`، لا بفتح نشاط أو مشاهدة محتوى.
- استُبدل في شرح `t2` الاختزال الذي قد يجعل `sollen` أمراً منقولاً دائماً؛ وأضيف استعماله في طلب النصيحة، مع تقييد وظيفة `sollten` ونفي الإذن/الوجوب بالسياق. عُدّل عنوانه الألماني إلى `fehlende Notwendigkeit`.
- وُسّع شرح `t4` ليفرّق صراحةً بين `Er wäscht sich` (Akkusativ) و`Er wäscht sich die Hände` (Dativ للضمير، وAkkusativ لـ`die Hände`) من غير تعميم القاعدة على كل الأفعال الانعكاسية.
- أزيل `Kopfschmerz` المفرد الصحيح من مشتت `e1`؛ فالمفرد مقبول وإن كان الجمع هو الغالب في التعبير. صار السؤال عن الصيغة **الأكثر شيوعاً**، وبقيت المعلومة عن المفرد في التفسير.
- استُكمل مفتاح قراءة `rq1` ليضمّ كل أعراض الفقرة، ومنها الإحساس بالحرّ والبرد؛ وكانت النسخة السابقة تسقط هذه المعلومة.
- استُبدلت `schlimm` في مسرد القراءة بـ`stark` لأنها الكلمة الواردة فعلاً في الفقرة؛ بقيت بطاقة `schlimm` مدعومة بعبارة `Das ist nicht schlimm` في عبارات القراءة الجاهزة.
- أزيل وصف «قصير» غير اللازم من الهدف z4، وصيغ هدف z6 بالألمانية على أنه مطابقة في «مهمة مطابقة» لا «نص مطابقة». أصلحت أيضاً نصاً عربياً مشوّهاً في تفسير t4.
- لا يوجد حقل مدة للدرس؛ «أربعون دقيقة» في القصة مدة انتظار في العيادة لا مدة تعليمية.

## الملفات المتعلقة بهذه الدفعة

- `src/data/lessons/a2/a2-02.ts` — الأهداف، الشرح، القراءة والاستماع والنطق والكتابة والتدريب والبطاقات والوساطة والتفاعل.
- `src/data/lessons/a2/a2-02.test.ts` — اختبارات مفاتيح ومشتتات ومطابقة الأدلة وتغطية الوسائط والمواد.
- `src/data/lessons/meta.ts` — ملخص A2-02 فقط ضمن هذه الدفعة؛ `order: 1` لم يتغير.
- `PROFESSIONAL_CONTINUATION_PROMPT_AR.md` — حالة الدفعة وخطوة الاستمرار بعد التحقق.

لم تُدرج تعديلات شجرة العمل الأخرى في هذا التقرير أو في نطاق التسليم. راجع staged diff قبل الدفع.

## جرد التغطية الفردية

| المادة | ما روجع بنداً بنداً |
|---|---|
| الأهداف | z1–z8؛ روابط `exerciseIds` و`taskIds`، وشرط all-correct، وصحة بادئات أحداث الواجهة. |
| المراجعة | r1–r3: سؤالا اختيار من متعدد وترتيب كلمات. |
| النظرية | t1–t4: أربعة شروح، **32 مثالاً** (8 لكل كتلة)، **29 صف جدول** (7/7/8/7)، و**20 ملاحظة خطأ/بديل** (5 لكل كتلة). |
| بنك التدريب | e1–e24: 8 اختيار من متعدد، ومهمتا مطابقة، ومهمتا ترتيب، و4 تصحيح، و4 ملء، وتحويلان، وإملاء واحد، وصواب/خطأ واحد. |
| الاختبار القصير | m1–m5: اختياران، وترتيب، وتصحيح، وملء. |
| الكتابة | w1–w3: تحويل مقيّد، وملء أربع خانات، وإملاء. |
| القراءة | 6 فقرات ألمانية وترجماتها، 14 مفردة، 6 أسئلة، و6 عبارات جاهزة. |
| الاستماع | l1 سبعة أسطر حوارية، وl2 أربعة؛ وثلاثة أسئلة قبل كشف التفريغ. |
| النطق/الترديد | 6 مفردات مع IPA وملاحظة صوتية، و4 أسطر shadowing. |
| البطاقات والأنشطة الإضافية | 24 بطاقة؛ وساطة واحدة بثلاث نقاط تحقق؛ نشاط تفاعل واحد بجولتين وخيارين لكل جولة؛ وثلاثة أخطاء إضافية في `fehlerUndTipps`. |

## ربط الأهداف بالأداء وحدود الدليل

| الهدف | المهام التي تقيسه | معرفات السياق الأساسية | ما لا يثبته |
|---|---|---|---|
| z1: أنماط ألم شائعة وجملة عرض محددة | e1، e12، w1 | `practice:a2-02:e1/e12`، ويظهر e1 أيضاً في `flow-practice:a2-02:e1`؛ `writing:a2-02:w1` | لا يثبت وصف أعراض حرّاً أو إتقاناً عاماً للمحادثة الطبية. |
| z2: اختيار/بناء sollen أو sollten في سياق مسمى | e17، e21، e22 | `practice:a2-02:e17/e21/e22` | لا يقرر أن صيغة واحدة هي النصيحة الوحيدة أو الألطف دائماً. |
| z3: منع مقابل عدم وجوب | e13، e14، e23 | `practice:a2-02:e13/e14/e23` | لا يقيس كل وظائف modal verbs أو كل استعمالات النفي. |
| z4: استخراج معلومات مصرّح بها في نص القراءة | rq1–rq6 | `reading:read-a2-02:rq1` إلى `rq6` | لا يثبت جاهزية قراءة عامة أو مواءمة CEFR. |
| z5: استخراج تفاصيل من نصّي الاستماع | q1–q3 قبل التفريغ | `listening:l1:q1/q2` و`listening:l2:q3` | الإجابات بعد الكشف تسجَّل كبادئة `listening-transcript:...` ولا تُحسب استماعاً. |
| z6: مطابقة وثائق صحية بوظائفها المبيّنة | e19 | `practice:a2-02:e19` | لا يحدد متى تكون الإحالة مطلوبة قانونياً أو يشرح النظام كله. |
| z7: إكمال ضمائر انعكاسية في أمثلة محددة | e15، e16 | `practice:a2-02:e15/e16` | لا يعمم حالة واحدة على كل فعل انعكاسي. |
| z8: إكمال كتابي وإملاء قصير | w2، w3 | `writing:a2-02:w2/w3` | تدريب موجّه؛ لا يقيس كتابة حرة. |

كل الأهداف `all-correct`. اختبار الهدف يتحقق من معلومة الإجابة الصحيحة وسياقها، ويثبت أن غياب الأداء أو وجود إجابة خاطئة أو حدث من سياق غير صحيح لا يحقق الهدف. `practice` يعرض خمس مهام عشوائية من البنك في الدفعة الواحدة، لا البنك كله؛ و`lesson-flow` لا يكشف إلا أول `min(4, practiceBank.length)`، مع `flow-practice` لا `practice`. نشاط النقاش والوساطة والتفاعل والبطاقات والنطق ليست أدلة مستقلة على الأهداف أعلاه.

## مراجعة المفاتيح والمشتتات — المراجعة وبنك التدريب

اختبرت الاختبارات المركزة **كل خيار MCQ على حدة** باستعمال التطبيع نفسه الذي يستعمله محرك التمرين، وكل بديل ملء/تصحيح، وكل زوج مطابقة بإفساد زوج واحد، وصيغ الترتيب المقبولة، والتحويلات، ومفاتيح الإملاء، وقلب حكم كل عبارة صواب/خطأ.

### r1–r3

| المعرّف | المفتاح | البدائل/المراجعة |
|---|---|---|
| r1 | `Hunger` في `Ich habe ___.` | `hungrig` صفة لا الاسم المطلوب هنا؛ `der Hunger` لا يلائم الفراغ بهذه الصورة؛ `hungrig sein` مصدر/تركيب لا يكمل الجملة. |
| r2 | `Ärztin` في `der Arzt → die ___` | `Arztin` يفتقد Umlaut؛ `Ärzte` جمع مذكر؛ `Ärztinnen` جمع مؤنث. |
| r3 | `Der Termin ist am Montag.` | الرموز الستة تصنع الجملة المطلوبة؛ لا مفتاح ترتيب بديل مخفي في البند. |

### e1–e24

| المعرّف | المفتاح/الأزواج المقبولة | المشتتات والقرار الفردي |
|---|---|---|
| e1 | `Kopfschmerzen` هي الصيغة الأكثر شيوعاً في هذا التعبير. | `Kopfschmerzern`, `Kopfschmerzenen`, `Kopfschmerzten` صيغ صرفية خاطئة في الموضع. أزيل `Kopfschmerz` من الخيارات لأنه مفرد صحيح لا ينبغي تقييمه كخطأ؛ يذكر الشرح أنه موجود لكن الجمع أشيع. |
| e2 | `Du sollst dich ausruhen.` — `sollst`. | `soll`, `sollt`, `sollen` لا توافق الفاعل `du`. |
| e3 | `der Kopf`—الرأس؛ `das Auge`—العين؛ `der Bauch`—البطن؛ `der Rücken`—الظهر. | راجعت كل زوج؛ اختبار الحماية يغيّر كل زوج منفرداً ويتأكد من رفضه. |
| e4 | `Du sollst dich ausruhen.` | رُوجع ترتيب الفعل المصرف والمصدر والضمير؛ ترتيب معاكس ينتج إجابة خاطئة. |
| e5 | تصحيح `bin` إلى `habe`: `Ich habe Kopfschmerzen.` | `soll` و`werde` لا يبنيان العبارة المعتادة هنا؛ `bin` هو الخطأ المحدد. |
| e6 | `Auge` للرؤية، `Ohr` للسمع، `Hand` للكتابة. | لكل فراغ الخيارات نفسها: `Auge/Ohr/Hand/Fuß`؛ قُبل العضو الموافق للفعل في كل خانة، ورُفضت البدائل الثلاثة في سياقها. |
| e7 | `Er soll sich ausruhen`، مع النقطة أو من دونها. | التحويل محدد بالفاعل er وباستعمال sollen؛ لا يُستنتج منه أن كل نصيحة تحتاج هذه الصيغة. |
| e8 | `Was fehlt Ihnen?` ⇢ «ما شكواك؟». | «كم عمرك؟» و«ما اسمك؟» غير مطابقين؛ «أين يؤلمك؟» سؤال ممكن في العيادة لكنه أضيق ومختلف عن السؤال الاصطلاحي عن الشكوى. |
| e9 | `Ich soll im Bett bleiben.` — التصحيح `soll`. | `sollst/sollt/sollen` لا توافق `ich`. |
| e10 | الإملاء: `Du sollst nicht so viel arbeiten.` | اختُبر النص كاملاً، ورُفض نص غير متعلق؛ لا مشتتات خيارات معروضة. |
| e11 | `Mir ist schlecht.` في سياق الغثيان. | `Ich bin schlecht` سليمة في معانٍ أخرى لكنها ليست التعبير المحايد عن الغثيان؛ `Ich habe schlecht` و`Mich ist schlecht` لا يطابقان البناء المقصود. التفسير يذكر الحالة والسياق بدلاً من وصم كل استعمال لـ`Ich bin schlecht` بالخطأ. |
| e12 | `Mein Rücken tut weh`؛ `Meine Augen tun weh`. | في الأولى `tun/tue/tuen` لا تطابق الفاعل المفرد؛ وفي الثانية `tut/tue/tuet` لا تطابق الجمع. |
| e13 | `Sie dürfen nicht rauchen.` = منع/عدم إذن في السياق. | `Sie müssen nicht rauchen` تعني عدم الوجوب؛ `Sie dürfen rauchen` إذن؛ `Sie sollten nicht rauchen` نصيحة لا حظر بذاتها. |
| e14 | «ليس ضرورياً أن تعود (لكن يجوز)». | «ممنوع العودة» يخلط الإعفاء بالمنع؛ «يجب أن تعود غداً» و«عليك العودة حتماً» تعكسان المعنى. |
| e15 | `mich` مع `ich fühle`؛ `sich` مع `er fühlt`؛ `uns` مع `wir haben uns erholt`. | اختُبر كل بديل في خانته: من ذلك `mir/dich`، و`mich/ihn/ihm`، و`sich/wir/unser`؛ مرجع الضمير هو الفاعل في الجمل المحددة. |
| e16 | `Ich wasche mir die Hände.` — `mir`. | `mich/sich/meine` لا تصلح للتركيب المعطى؛ `die Hände` Akkusativ و`mir` Dativ في هذا المثال. |
| e17 | `Du solltest mal zum Arzt gehen.` في سؤال يطلب نصيحة أقل مباشرة. | `Du sollst zum Arzt gehen` صحيحة نحوياً ويمكن أن تكون توجيهاً مباشراً/نصيحة بحسب السياق، وليست خطأ مطلقاً؛ `musst … wollen` لا يؤدي الطلب المحدد؛ `darfst` إذن لا اقتراح. صياغة السؤال والتفسير تقيدان المقارنة بالسياق. |
| e18 | `Ich habe seit drei Tagen starke Halsschmerzen.`؛ ويُقبل أيضاً `Ich habe starke Halsschmerzen seit drei Tagen.` | ثُبت `Tagen` بعد `seit` مع الاسم. اختُبرت الصيغة المقبولة الثانية كيلا يعاقب التمرين موضعاً زمنياً صحيحاً في نهاية الجملة. |
| e19 | `Rezept`—`in einer Apotheke einlösen`; `AU/Krankschreibung`—`Arbeitsunfähigkeit nachweisen`; `Überweisung`—`bei Bedarf zum Facharzt`; `Gesundheitskarte`—`Versicherungsnachweis in der Praxis`. | راجعت الأزواج الأربعة منفردة. التفسير يقيّدها: قد تكفي وثيقة تأمين أخرى، والإحالة ليست شرطاً عاماً لكل اختصاصي، والوصفة للدواء الموصوف. |
| e20 | `Was fehlt Ihnen denn?` — التصحيح `Sie` إلى `Ihnen`. | `Sie/Ihr/Ihren` لا تحقق Dativ المطلوب مع `fehlen` في هذا البناء. لا تُساوى الحالة الألمانية بالجرّ العربي. |
| e21 | (تقرير) `Ich soll mich ausruhen`; (اقتراح) `Sie sollten sich heute ausruhen`; (منع) `Sie dürfen keinen Sport machen`. | الخانة الأولى تختبر تصريف `ich`؛ الثانية `sollten` في Konjunktiv II للسياق المسمّى؛ الثالثة `dürfen` مع `keinen Sport`. اختُبرت كل البدائل المعروضة في كل خانة، والتفسير لا يدّعي استنفاد استعمالات الأفعال. |
| e22 | `Sie sollten mehr schlafen.` مع النقطة أو دونها. | التحويل مقيّد بالنص إلى اقتراح أقل مباشرة في هذا السياق؛ المفتاحان مسجلان ومختبران. |
| e23 | s1 صحيح؛ s2 خطأ؛ s3 صحيح؛ s4 خطأ. | s1 يطابق المنع المشروط بالحمى؛ s2 يناقض `müssen nicht`; s3 يطابق ذكر الوصفة من دون تعميم؛ s4 غير مسند لأن النص يتضمن اقتراحاً ومنعاً مشروطاً. يختبر الملف قلب حكم **كل** عبارة منفردة. |
| e24 | `Gute Besserung!` | `Viel Glück!` و`Herzlichen Glückwunsch!` و`Gute Reise!` لا تؤدي تمني التحسن في الموقف المعطى؛ العبارة شائعة وليست واجبة في كل وداع. |

### m1–m5 وw1–w3

| المعرّف | المفتاح والبدائل التي روجعت |
|---|---|
| m1 | `Husten` في `Ich habe ___ und Fieber.`؛ المشتتات `hustet`, `der Husten`, `hust` لا تكمل هذا الفراغ بهذه الصيغة. |
| m2 | `Er soll im Bett bleiben.`؛ `sollst/sollt/sollen` لا توافق er. |
| m3 | `Er soll sich ausruhen.`؛ طُلب البدء بـEr، واختُبر ترتيب الرموز. |
| m4 | استبدال `weht` بـ`weh` في `Mein Kopf tut weh.`؛ رُفضت `weht/wehne/wehe`. |
| m5 | `ich soll`; `Sie sollen`؛ `ihr sollt`. اختُبرت بدائل كل خانة (`soll/sollst/sollt`، ثم `soll/sollen/sollt`، ثم `soll/sollt/sollten`). |
| w1 | `Ich habe seit gestern Kopfschmerzen.`؛ الإجابة الوحيدة لأن المهمة تحدد البداية بـ`Ich` والبنية `haben + Kopfschmerzen`، لا لأنها البديل الألماني الوحيد للمعنى خارج هذا التمرين. |
| w2 | `soll / sollst / soll / sollen` للخانات الأربع. روجعت مطابقة ich/du/er/wir وكل مجموعة خيارات. |
| w3 | `Sie sollen sich ausruhen und zu Hause bleiben.` إملاء موجّه؛ `bleiben` مصدر في نهاية جملة الفعل الناقص. |

## النص المقروء وأسئلته وترجمته

راجعت الفقرات الست وترجماتها بالتقابل، مع إحالات الأسئلة إلى رقم الفقرة:

1. صباح الاثنين: ألم حلق، حمى، إحساس بالحرّ والبرد، ضعف، محاولة نهوض ثم استلقاء. الترجمة العربية تنقل العناصر الأربعة والتسلسل الزمني.
2. نصيحة الزميلة بالذهاب إلى الطبيب، والسؤال عن Krankschreibung عند عدم القدرة على العمل، وإبلاغ المدير، ثم الاتصال وحجز الموعد.
3. انتظار ودور المريض، سؤال `Was fehlt Ihnen?`، وصف الحمى وألم الحلق والصداع، الفحص وتشخيص **Erkältung** لا **Grippe**، والحاجة إلى الراحة. روجع إسناد `seit dem Morgen` إلى العرض في الجملة والترجمة.
4. الراحة والبقاء في المنزل، منع الرياضة ما دامت الحمى قائمة، وعدم إلزام المريض بالعودة إذا تحسن، ووصفة وشهادة للأيام الثلاثة التالية.
5. الذهاب إلى الصيدلية، شرح الصيدلي، إعداد الشاي والاستلقاء.
6. تحسن بعد ثلاثة أيام في البيت، التعافي والعودة للعمل يوم الجمعة، ثم عبارة الإصغاء إلى الجسد. الزمن يطابق سؤال rq6؛ ولا يضيف النص قاعدة طبية عامة.

| السؤال | المفتاح | المشتتات التي فُحصت |
|---|---|---|
| rq1 | `Die Person hatte Halsschmerzen und Fieber, ihr war heiß und kalt, und sie fühlte sich sehr schwach.` | «صداع فقط وشعور جيد»؛ «ألم بطن بلا حمى»؛ «ألم ظهر بلا أعراض أخرى» — كلها تناقض الفقرة الأولى. |
| rq2 | الذهاب للطبيب؛ سؤال عن Krankschreibung عند الحاجة؛ وإبلاغ المدير. | البقاء دون اتصال بالعيادة؛ العمل رغم عدم القدرة؛ إلغاء الموعد ومواصلة العمل. |
| rq3 | `Es ist nicht nötig, zurückzukommen`. | المنع من العودة؛ وجوب المجيء غداً؛ وجوب العودة حتماً. هذا سؤال معنى لا حكم على صحة صيغة بديلة. |
| rq4 | الرياضة ما دام الشخص مصاباً بالحمى. | شرب الشاي؛ البقاء في البيت؛ الذهاب للصيدلية. المفتاح يضم شرط الحمى الوارد في النص. |
| rq5 | `In die Apotheke`. | مطعم؛ عمل؛ مدرسة. الإحالة إلى الفقرة الخامسة صحيحة. |
| rq6 | `Am Freitag`. | الاثنين؛ الأربعاء؛ الأحد. الإحالة إلى العبارة الصريحة في الفقرة السادسة صحيحة. |

المسرد ذو 14 مدخلاً، واختُبرت مطابقة كل مدخل للنص، ومن بينها `aufgewacht`, `hinlegen`, `krankschreiben lassen`, `Wartezimmer`, `dran sein`, `untersuchen`, `Erkältung`, `stark`, `Ruhe`, `Rezept`, `Krankschreibung`, `Apotheker`, `erholt`, `auf den Körper hören`. عُدلت `schlimm` إلى `stark` لأن الأولى لم تكن في الفقرة؛ أما `schlimm` فبقيت في `fc24` لأنها تظهر في عبارة القراءة الجاهزة. روجعت العبارات الجاهزة الست، ومنها `Das ist nicht schlimm, aber Sie brauchen Ruhe` بمعنى أن الحالة/الأعراض ليست شديدة في هذا السياق، من دون استنتاج طبي.

## نصّا الاستماع ومفاتيحهما

**l1 — الطبيب وسامي، 7 أسطر:**

1. `Guten Tag! Was fehlt Ihnen?` — تحية وسؤال عن الشكوى.
2. `Ich habe seit gestern starke Kopfschmerzen und Fieber.` — صداع شديد وحمى منذ أمس.
3. `Haben Sie auch Husten?` — سؤال عن السعال.
4. `Ja, ein bisschen.` — نعم، قليلاً.
5. `Sie haben eine Erkältung. Sie sollen sich ausruhen und zu Hause bleiben.` — تشخيص Erkältung وتوجيه للراحة والبقاء في المنزل؛ لا يخلط بين النصيحة والمنع.
6. `Und Tabletten?` — سؤال سامي عن الأقراص.
7. `Ich stelle Ihnen ein Rezept aus. Bitte nehmen Sie das Medikament nach der Packungsbeilage ein.` — وصفة واتباع النشرة؛ لا يعطي الحوار جرعة أو توقيتاً غير مسند.

**l2 — آنا وكريم، 4 أسطر:**

1. `Du siehst müde aus. Was ist los?` — آنا تسأل كريم عن حاله.
2. `Ich habe Rückenschmerzen. Ich habe zu viel gearbeitet.` — ألم ظهر وعمل كثير.
3. `Du sollst dich ausruhen und nicht so viel arbeiten!` — توجيه/نصيحة مباشرة بين صديقين.
4. `Du hast recht. Dann sollte ich zum Arzt gehen.` — موافقة واقتراح كريم أن يذهب إلى الطبيب.

| السؤال | المفتاح | المشتتات |
|---|---|---|
| q1/l1 | `Kopfschmerzen und Fieber` | ألم بطن؛ سعال فقط؛ ألم ظهر. يسأل عما ذكره أولاً. |
| q2/l1 | الراحة والبقاء في المنزل | العمل؛ الرياضة؛ الاستحمام البارد. يتطابق المفتاح مع نص الطبيب. |
| q3/l2 | `Er hat zu viel gearbeitet.` | السباحة؛ الطيران؛ لعب كرة القدم. السبب منصوص عليه. |

التعليمات تطلب الإجابة قبل كشف التفريغ. إجابة الاستماع لا تتحول إلى دليل استماع بعد الكشف، والترديد/مطابقة التفريغ لا يقيس وحده النطق.

## النطق والكتابة والبطاقات والوساطة والتفاعل

### النطق

راجعت المفردات الست وملاحظاتها الصوتية، مع اعتبار IPA مرجعاً لا كتابة العربية التقريبية:

- `der Kopf` /kɔpf/: حركة قصيرة وكتلة /pf/ في آخر المقطع.
- `der Bauch` /baʊ̯x/: `au` ثنائي الصوت و`ch` هنا احتكاكي /x/؛ الخاء العربية تقريبية.
- `der Rücken` /ˈʁʏkn̩/: `ü` قصيرة أمامية مدوّرة والنبر أولاً.
- `die Schulter` /ˈʃʊltɐ/: `sch` = /ʃ/ و`u` قصيرة.
- `das Auge` /ˈaʊ̯ɡə/: `au` ثنائي الصوت و`g` انفجاري مجهور /ɡ/، لا /ɣ/ العربية.
- `der Husten` /ˈhuːstən/: `u` طويلة /uː/.

أسطر shadowing الأربعة: `Ich habe Kopfschmerzen` (انتباه إلى pf وsch)؛ `Mein Rücken tut weh` (w = /v/ وe طويلة في weh)؛ `Sie sollen sich ausruhen` (s في sollen = /z/)؛ `Ich soll im Bett bleiben` (ei = /aɪ̯/). وسم النشاط واضح: التكرار أو تعرف الكلام لا يثبت مخارج الأصوات أو النبر، ولا يوجد هدف نطق/تحدث يستند إلى هذه المادة وحدها.

### البطاقات الأربع والعشرون

راجعت كل كلمة ومثال وترجمة، لا العدد فقط:

1. `der Körper` — الجسم؛ `Der Körper braucht Schlaf.`
2. `der Kopf` — الرأس؛ `Ich habe Kopfschmerzen.`
3. `das Auge` — العين؛ `Ich sehe mit den Augen.`
4. `der Rücken` — الظهر؛ `Mein Rücken tut weh.`
5. `die Schmerzen` — الآلام؛ `Ich habe Schmerzen.`
6. `das Fieber` — الحمى؛ `Er hat Fieber.`
7. `sollen` — يُفترض/ينبغي بحسب السياق؛ `Der Arzt sagt, ich soll mich ausruhen.`
8. `sich ausruhen` — يستريح؛ `Sie sollen sich ausruhen.`
9. `Mir ist schlecht.` — أشعر بالغثيان، لا الصيغة المحايدة `Ich bin schlecht` لهذا المعنى؛ المثال يضيف `schwindelig`.
10. `sich fühlen` — يشعر بحال؛ `Ich fühle mich heute besser.`
11. `sich erholen` — يتعافى؛ `Ich habe mich gut erholt.`
12. `dran sein` — يأتي دوره؛ `Nach vierzig Minuten war ich endlich dran.` — انتظار في القصة، لا مدة للدرس.
13. `sich erkälten` — يُصاب بالزكام؛ `Ich habe mich erkältet.`
14. `sollten` — Konjunktiv II من sollen؛ اقتراح أقل مباشرة في سياقات كثيرة؛ `Sie sollten sich ausruhen.`
15. `nicht dürfen` — عدم إذن/منع بحسب السياق؛ `Sie dürfen nicht rauchen.`
16. `nicht müssen` — عدم وجوب؛ `Sie müssen nicht wiederkommen.`
17. `Was fehlt Ihnen?` — سؤال اصطلاحي عن الشكوى؛ مثال التحية والسؤال.
18. `das Rezept` — وصفة لدواء موصوف تُصرف في صيدلية؛ `Ich schreibe Ihnen ein Rezept.`
19. `die Krankschreibung` — إثبات عدم القدرة على العمل، وإجراءات AU قد تختلف؛ `Ich brauche eine Krankschreibung.`
20. `die Erkältung` — نزلة برد وليست مرادفاً لـ`Grippe`؛ `Sie haben eine Erkältung.`
21. `untersuchen` — يفحص؛ `Die Ärztin hat mich untersucht.`
22. `das Wartezimmer` — غرفة الانتظار؛ `Im Wartezimmer saßen sechs Leute.`
23. `Gute Besserung!` — شفاءً عاجلاً/تقابل وظيفياً «سلامتك»؛ اختيارها الشائع لا يجعلها واجبة دائماً.
24. `schlimm` — سيّئ/شديد بحسب السياق؛ `Die Beschwerden sind nicht sehr schlimm.`، ومدعومة أيضاً بعبارة القراءة الجاهزة.

### الوساطة والتفاعل

- **الوساطة med-a2-02-1:** نُقلت تعليمات الرجوع إلى النشرة أو الطبيب، وعدم تغيير الجرعة من تلقاء النفس، والراحة. نقاط التحقق الثلاث تقابل النص؛ أزيلت جرعة/وتيرة دواء كانت ستضيف نصيحة طبية غير واردة، وتطلب المهمة صراحةً عدم اختراع مقدار أو توقيت.
- **التفاعل int-a2-02-1، جولتان:** سؤال `Was fehlt Ihnen?` أفضل رد عليه `Ich habe seit zwei Tagen Kopfschmerzen und Fieber.` لا `Ich habe morgen einen Termin.`؛ وسؤال `Haben Sie auch Husten?` أفضل رد `Ja, ein bisschen. Besonders nachts.` لا `Ich habe seit gestern Fieber.`. لكل خيار رد متابعة ألماني وعربي. النشاط اختيار نص، لا إنتاج شفهي مسجل ولا قياس نطق.
- **نقاش القراءة:** اختياري وغير مسجل، ويبيّن عدم ضرورة الإفصاح عن معلومات صحية شخصية؛ ليس دليلاً على z4 أو هدف محادثة حرّة.

## تصنيف المسائل اللغوية والتربوية

### خطأ مؤكد في التركيب المحدد

- `Ich bin Kopfschmerzen` → `Ich habe Kopfschmerzen`؛ وكذلك e5.
- `Meine Augen tut weh` → `Meine Augen tun weh` لاتفاق الفعل مع الفاعل الجمع.
- `seit drei Tage` → `seit drei Tagen` في المثال ذي الاسم الظاهر.
- `Ich sollst` مع `ich` → `Ich soll`.
- `Was fehlt Sie?` → `Was fehlt Ihnen?`؛ مصدر IDS Grammis يحدد `fehlen` هنا مع فاعل ومتمّم Dativ.
- `Nehmen bitte Platz` يفتقد ضمير المخاطبة في الأمر الرسمي المقصود: `Nehmen Sie bitte Platz`.
- `Ich habe mich gut erholen` → `Ich habe mich gut erholt` في Perfekt.
- `Ich wasche mich die Hände` → `Ich wasche mir die Hände` في هذا البناء ذي المفعول الجسدي.
- `der Auge` → `das Auge`، و`Ich fühle gut` لا يحقق معنى وصف الحالة المقصود من دون `mich`.
- هذه أخطاء موضعية موصوفة في السياق؛ لا تُستعمل لتعميم قواعد على جميع تراكيب الألمانية.

### بديل صحيح يتغير ملاءمته بالسياق

- `Kopfschmerz` مفرد صحيح؛ الجمع `Kopfschmerzen` هو الغالب، لا الصورة الوحيدة. أزيل المفرد من مشتت e1.
- `Ich bin schlecht` جملة ممكنة بمعانٍ أخرى؛ ليست العبارة المحايدة للغثيان في هذا السياق.
- `Du sollst zum Arzt gehen` صحيح نحوياً وقد يكون توجيهاً/نصيحة؛ `Du solltest mal zum Arzt gehen` أُلزم بوصفه الاختيار الأقل مباشرة في سياق e17، لا البديل الوحيد للنصيحة.
- `Ich will einen Termin` صحيح وقد يكون مباشراً؛ `Ich hätte gern einen Termin` صيغة طلب مهذبة مناسبة للمثال وليست الوحيدة.
- `Ich brauche eine Krankschreibung für die Apotheke` مفهوم نحوياً لكنه يخلط وظيفة AU بوصفة الدواء؛ هو عدم ملاءمة دلالية/إجرائية لا خطأ قواعدياً.
- `müssen nicht` ينفي الوجوب، و`dürfen nicht` ينفي الإذن في القراءة المعتادة؛ تبديلهما يغير المعنى ولا يجعل إحدى الجملتين خطأ نحوياً بذاتها.
- `Er fühlt mich nicht gut` لا يصف حال Er؛ قد يظهر `fühlt mich` مفعولاً في بناء آخر، لذا صُنّف الخطأ بالنسبة إلى القراءة المقصودة فقط.

### تبسيط تعليمي مقيّد، لا قاعدة مطلقة

- `keinen Alkohol` هو النفي المحايد للاسم المنكر في المثال؛ قد يظهر `nicht Alkohol` في نفي تقابلي مثل `nicht Alkohol, sondern Wasser`، ولذلك وُصف الاختيار بأنه تبسيط للسياق.
- `Es tut sehr weh` هو المثال المحايد الشائع لتقوية الوصف؛ لم يُحكم باستحالة كل استعمال لـ`viel`.
- في `Ich wasche mir die Hände` يوجد `mir` Dativ و`die Hände` Akkusativ؛ لا تعمم أن كل ضمير انعكاسي يصير Dativ عند إضافة أي مفعول.
- `sollten` صيغة شائعة للاقتراح الأقل مباشرة في المثال؛ ليست مرادف النصيحة الوحيد، ولا قاعدة أن Konjunktiv II ألطف دائماً.
- قالب وصف العرض والمدة اقتراح لإجابة التدريب، لا قاعدة ثقافية تلزم كل مريض بترتيب واحد أو ذكر درجة الشدة.

### ادعاءات سياقية/واقعية تحققنا منها، وما لا نعممه

- `gesund.bund.de` يشرح حرية اختيار الطبيب/الاختصاصي مع استثناءات إحالة وبرنامج طبيب الأسرة؛ لذلك لا تجعل الإحالة أو طبيب الأسرة شرطاً عاماً لكل اختصاصي.
- البطاقة الصحية الإلكترونية eGK دليل تأمين في نظام التأمين القانوني، مع إمكان وثيقة إثبات أخرى؛ لا يُستنتج أن نسيان البطاقة يفرض دفعاً نقدياً دائماً.
- يوضح KBV إرسال eAU إلكترونياً في الحالات المعتادة للتأمين القانوني، مع بقاء واجب العامل إبلاغ جهة العمل؛ لم تُعرض الشهادة على أنها ورقة واحدة يقدمها كل مريض لصاحب العمل.
- يوضح BMG أن بعض الأدوية غير الموصوفة متاحة خارج الصيدليات، مع أن معظم أدوية الزكام/الصداع تبقى من الأدوية التي لا تُباع إلا في الصيدليات. لذلك لا تعني كلمة «دواء» تلقائياً «دواء بوصفة».
- الفقرات حكاية تدريبية عن Erkältung وليست تشخيصاً أو نصيحة طبية عامة. «Drei Tage zu Hause» عنوان قصة، لا تعريف لمدة الدرس.

## مصادر التحقق

المراجع الآتية تسند النقاط اللغوية والواقعية المذكورة، وتُستخدم للتحقق من الادعاءات المحددة لا لمنح الدرس اعتماداً:

- [IDS Grammis — fehlen، Lesart 2](https://grammis.ids-mannheim.de/verbs/view/400577/2): بنية `fehlen` مع فاعل وDativ؛ ومن ثم `Was fehlt Ihnen?`.
- [IDS Grammis — Verben mit Reflexivpronomen، Sonderfälle](https://grammis.ids-mannheim.de/progr@mm/6736): يقابل `Ich wasche mich` بـ`Ich wasche mir die Hände` ويشرح دور Dativ المالك وAkkusativ العضو.
- [IDS Grammis — waschen](https://grammis.ids-mannheim.de/verbs/view/401190/1): تكافؤ الفعل ومفعوله وأمثلة على `sich` وDativ المالك.
- [Duden — Kopfschmerz](https://www.duden.de/rechtschreibung/Kopfschmerz): يثبت المفرد، ويذكر أن الجمع هو الغالب (`meist im Plural`)؛ أساس تعديل مشتت e1.
- [Duden — sollen](https://www.duden.de/rechtschreibung/sollen) و[DW — Modalverb: sollen](https://learngerman.dw.com/de/modalverb-sollen/l-40685729/gr-41702918): تعدد وظائف `sollen`، وصيغة Konjunktiv II والنصيحة، لا الاقتصار على الأمر المنقول.
- [DW — Modalverben: dürfen | Beim Arzt](https://learngerman.dw.com/de/beim-arzt/l-40505561/gr-40508828) و[IDS Grammis — Deontischer Gebrauch kontrastiv](https://grammis.ids-mannheim.de/kontrastive-grammatik/3360): فرق الإذن والمنع بـ`nicht dürfen` عن نفي الضرورة بـ`nicht müssen`.
- [Duden — Auge](https://www.duden.de/rechtschreibung/Auge)، [Duden — Kopf](https://www.duden.de/rechtschreibung/Kopf)، [Duden — Bauch](https://www.duden.de/rechtschreibung/Bauch)، [Duden — Rücken](https://www.duden.de/rechtschreibung/Ruecken_Koerperteil)، [Duden — Schultergelenk](https://www.duden.de/rechtschreibung/Schultergelenk)، و[Cambridge — husten/Husten](https://dictionary.cambridge.org/dictionary/german-english/husten): تدقيق مفردات النطق/الصوتيات؛ يدعم Cambridge طول /uː/ في Husten، وتُعرض مقابلات IPA لا كتابة عربية مطابقة.
- [gesund.bund.de — Health insurance](https://gesund.bund.de/en/krankenversicherung)، [electronic health card](https://gesund.bund.de/en/die-elektronische-gesundheitskarte)، و[Choosing a doctor and finding an appointment](https://gesund.bund.de/en/arztwahl-und-terminsuche): التغطية بنوعيها، eGK/إثبات التأمين، حرية اختيار الأطباء واستثناءات الإحالة.
- [KBV — Arbeitsunfähigkeit](https://www.kbv.de/praxis/verordnungen/arbeitsunfaehigkeit): إجراءات AU/eAU وواجب الموظف إبلاغ جهة العمل.
- [BMG — Zugang zu Arzneimitteln](https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/online-ratgeber-krankenversicherung/arznei-heil-und-hilfsmittel/zugang-zu-arzneimitteln): التفريق بين الوصفية وغير الوصفية، وما قد يُباع خارج الصيدلية.

## نتائج الفحوص وحدودها

- `npx vitest run src/data/lessons/a2/a2-02.test.ts`: **10/10 ناجحة**.
- `npx vitest run src/data/lessons/a2/a2-02.test.ts src/data/lessons/academic-depth.test.ts`: اختبارات A2-02 **10/10**؛ `academic-depth.test.ts` فيه **16 نجاحاً و5 إخفاقات**، كلها تخص A1-03 أو A1-06 ولا يظهر بينها A2-02.
- `npm test`: **419 ناجحاً و8 فاشلة من 427** في 50 ملف اختبار؛ 47 ملفاً ناجحاً و3 ملفات فيها الإخفاقات الآتية، وجميع اختبارات A2-02 ناجحة:
  1. `src/data/lessons/academic-depth.test.ts` — خمسة إخفاقات تخص A1-03/A1-06: طول t3 (800 حرف في A1-03 و884 في A1-06 مقابل الحد 900)؛ قِصر `whyAr` في A1-03 t2/t3 وA1-06 t1–t5؛ قِصر بعض المقارنات العربية في A1-06 t3–t5؛ ستة تفسيرات قصيرة لأخطاء A1-06 t3–t5؛ و`zeigen` في مسرد A1-06 غير موجود في نصه.
  2. `src/data/lessons/integrity.test.ts` — إخفاقان خارج النطاق: تعليمة بند خداعي في A1-11 هي «افحص الجملة ولا تفترض وجود خطأ…»؛ وعنوان نطق A1-03 يَعِد بـ`pf` من دون أن تشرحه ملاحظة في ذلك الدرس.
  3. `src/lib/lesson/review-generator.test.ts` — إخفاق واحد في اختبار توقع علامة مستوى/درس داخل تعليمة سؤال مراجعة احتياطي؛ لا يخص ملفات A2-02.
- `npm run typecheck -- --pretty false`: فشل بأربعة تشخيصات خارج الدفعة: `learning-path-client.tsx:129,137` (قيمة `LevelCode[] | undefined` حيث يلزم `LevelCode[]`)، و`unit-row.tsx:22` (`onToggle` غير موجود في `UnitRowProps`)، و`src/lib/tests/test-engine.test.ts:119` (نوع قيمة Map يجمع `string` و`number`). لا يظهر تشخيص في ملفات A2-02.
- ESLint للملفات `src/data/lessons/a2/a2-02.ts`, `src/data/lessons/a2/a2-02.test.ts`, `src/data/lessons/meta.ts`: ناجح.
- `git diff --check` للمسارات المتعلقة: ناجح. فحص شجرة العمل كاملةً وجد مسافة زائدة في `src/app/page.tsx:8` خارج النطاق؛ لم أعدّلها ولم أدرج الملف.
- طبع Vitest تحذير Vite غير مانع عن `configLoader: 'native'` وملف `vitest.config.ts` بصيغة ESM محمّل كـCommonJS. لم تُعدّل هذه الإعدادات.

**ما بقي خارج هذا التقرير/النطاق:** إصلاح إخفاقات A1-03/A1-06/A1-11 و`review-generator`، وأخطاء الأنواع في واجهات مسار التعلم ومحرك الاختبارات، ومراجعة بقية A1–B2. لا تُعتبر هذه الدفعة اعتماداً أو إكمالاً للمنهاج. الخطوة التالية بحسب `meta.ts` هي A2-03؛ لا يُغيّر ترتيب الدروس.