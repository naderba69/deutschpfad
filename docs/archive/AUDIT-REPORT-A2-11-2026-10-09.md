# تقرير التدقيق المهني للدرس A2-11 — 2026-10-09

## الخلاصة والنطاق

دُققت النسخة الحالية من `src/data/lessons/a2/a2-11.ts` بنداً بنداً: الأهداف والشرح والأمثلة والأخطاء المقترحة، **كل المهام الـ29** ومفاتيحها وخياراتها، الحوارات الـ17 سطراً وترجماتها، ستة مداخل نطق وأربعة أسطر ترديد، البطاقات الـ12، نشاط الوساطة ومحاكي التفاعل النصي. لا يظهر خطأ ألماني مؤكد باقٍ في العناصر التي دُققت؛ وُضّحت مواضع كان يمكن أن تعمم حكماً أو تسمح بمشتت ملتبس، وسُجلت البدائل السياقية والقيود التربوية أدناه.

هذا تدقيق لدرس واحد، لا يثبت إتقان A2 أو أي مهارة عامة، ولا اعتماد Goethe/CEFR. بقي `order: 1` ولم تُعدّل بنية المسار. لا يظهر حقل مدة لـA2-11، ولا هدف قراءة غير موجود في الدرس، ولا هدف كلام/نطق مبني على تشابه تفريغ نصي. تنبيه نطاقي: كان الفرع الثابت قد أزال تقديرات مدد الدروس وواجهاتها عموماً في commit سابق `b384ce3`؛ لم تُنفّذ هذه الدفعة ذلك التغيير ولم تعدّله، ولم تغيّر أي صف آخر في `meta.ts` أو واجهة مدة. لذلك لا يثبت هذا التقرير وجود مدد لبقية الدروس في الحالة الحالية للفرع؛ وأي استعادة لها تحتاج نطاقاً مستقلاً. نموذج البيانات والسيناريوهات خيالية وليست إرشادات لخدمة حقيقية.

## الأهداف وما يقيسه المنتج فعلاً

| الهدف | الأداء المحدد | دليل الواجهة وحدوده |
|---|---|---|
| z1 | إجابة الأسئلة الأربعة عن الحوارات الثلاثة مع بقاء التفريغ مخفياً | `listening:l1:q1`, `listening:l2:q2/q3`, `listening:l3:q4`، وكلها صحيحة. لا يسجل النظام تشغيل الصوت؛ كشف التفريغ ينتج `listening-transcript:...` ولا يثبت هذا الهدف. فتح المقطع وحده ليس أداءً. |
| z2 | اختيار الضمير الانعكاسي في جمل محددة | e1 وe6 وw2. المعرّفات المقبولة هي `practice:a2-11:e1/e6` و`flow-practice:a2-11:e1` و`writing:a2-11:w2`. لا يدّعي إنتاجاً حراً. |
| z3 | كتابة الصيغة المحددة `Entschuldigung, ich möchte mich beschweren.` | `writing:a2-11:w4` وحده؛ هذه صيغة مكتوبة مسجلة وليست اختبار محادثة أو شكوى حرة. |
| z4 | مطابقة أسماء خانات مختارة ثم كتابة بيانات تدريبية معطاة | `practice:a2-11:e11` عند سحب e11 عشوائياً، و`writing:a2-11:w5`. e11 خارج أول أربعة في التدفق؛ لا يُنسب إليه `flow-practice`. عرض النموذج لا يعد دليلاً. |

اختُبرت بادئات المهام كما تظهر في الواجهة: التدريب العشوائي يسحب خمسة بنود ويسجل `practice:{lessonId}:{exerciseId}`؛ مسار التدفق يعرض أول `min(4, practiceBank.length)` ويسجل `flow-practice:{lessonId}:{exerciseId}`. اختُبر قبول e1 في سياقي التدريب والتدفق، ورفض سياق التدفق غير المعروض لـe6. تُحسب نتائج `exercise-result` الصحيحة فقط عندما يتطابق الدرس ومعرّف المهمة ومعرّف التمرين؛ لا تُحتسب المشاهدة أو الفتح أو التفاعل النصي أو الوساطة المفتوحة أو الترديد دليلاً.

## المقدمة والشرح والقواعد

### النطاق واللغة

- العنوان `Dienstleistungen` والملخص الحاليان يصفان بدقة مفردة البريد، وحوار الحلاق، وشكوى إصلاح هاتف، وتدريب نموذج افتراضي؛ لا يوحيان بوجود حوار بريدي مستقل أو «استمارات رسمية» عامة.
- صيغ الأهداف الأربع أداءات محددة. z1 يقر صراحةً بأن النظام يسجل صحة جواب الفهم لا تشغيل الصوت؛ z2 اختيار موجّه لا كتابة حرة؛ z3 جملة واحدة؛ z4 خانات مختارة وبيانات معطاة. لا هدف قراءة لأن الدرس لا يحتوي مادة قراءة مستقلة، ولا هدف إنتاج شفهي أو «إتقان» للنطق.
- `Ich freue mich` لا تترجم فيها `mich` حرفياً إلى «نفسي». يشرح الدرس الفرق بين الاستعمال الانعكاسي `Ich freue mich` والاستعمال المتعدي `Das freut mich`، ويميّز معنى التطلع مع `auf` عن السرور العام.
- عرض `Akkusativ` و`Dativ` مربوط بأمثلة محددة، لا بقاعدة «وجود مفعول آخر يفرض Dativ»، ولا بمساواة آلية بين أسماء الحالات الألمانية وإعراب العربية.

### أمثلة النظرية وترجماتها

| الموضع | المثال | الترجمة/المعنى المدقق |
|---|---|---|
| t1 | `Ich freue mich auf den Urlaub.` | أتطلع إلى العطلة؛ `auf` هنا في معنى التطلع إلى شيء. |
| t1 | `Er ärgert sich über den Lärm.` | ينزعج من الضجيج. |
| t1 | `Wir müssen uns anmelden.` | علينا التسجيل؛ التسجيل عام ويتحدد نوعه بالسياق. |
| t1 | `Beeil dich bitte!` | أسرع من فضلك؛ أمر مفرد ودي. |
| t1 | `Ich muss mich erholen.` | عليّ أن أستريح. |
| t1 | `Ich hoffe, Sie freuen sich auf den Termin.` | آمل أن تتطلع حضرتك إلى الموعد؛ `Sie` رسمية وضميرها `sich`. |
| t2 | `Ich freue mich auf den Urlaub.` | أتطلع إلى العطلة. |
| t2 | `Ich wasche mir die Hände.` | أغسل يديّ؛ `mir` Dativ و`die Hände` مفعول Akkusativ في هذا التركيب. |
| t2 | `Ich sehe mir das Formular an.` | أتفحّص الاستمارة؛ مثال `sich etwas ansehen` لا قاعدة تعمم على كل مفعول. |
| t2 | `Wir treffen uns um sieben.` | نلتقي في السابعة؛ قد يكون المعنى متبادلاً بحسب السياق، لا نتيجة آلية لصيغة الجمع. |
| t2 | `Setz dich bitte!` | اجلس من فضلك؛ أمر انعكاسي للمفرد غير الرسمي. |

جدول `sich freuen` يطابق الأشخاص: `ich–mich`, `du–dich`, `er/sie/es–sich`, `wir–uns`, `ihr–euch`, `sie/Sie–sich`. والأمثلة `Ich wasche mich` مقابل `Ich wasche mir die Hände`، و`Ich stelle mich vor` مقابل `Ich stelle mir den Ablauf vor`، تميز أطر الفعل ومعانيه بدلاً من بناء قاعدة واحدة على وجود مفعول آخر.

### الأخطاء والبدائل المصنفة

- `Ich freue` أو `Ich freue mir auf den Urlaub` خطأ **في معنى التطلع المقصود**؛ الصيغة هنا `Ich freue mich auf den Urlaub`. لا تعني الملاحظة أن `mir` خطأ في كل فعل انعكاسي.
- `Er freut mich sich` خطأ في المعنى المقصود لأن الضمير العائد على `er` هو `sich` ولا يجتمع معه `mich` هنا.
- `Ich wasche mich die Hände` خطأ في المثال المحدد؛ الصيغة المعروضة `Ich wasche mir die Hände`. لا تُعمم على جميع الأفعال.
- `Er interessiert ihn für Musik` **ليس خطأً مطلقاً**: يمكن أن يعني أنه يجعل شخصاً آخر يهتم بالموسيقى. إذا كان `er` نفسه هو المهتم فالمناسب `Er interessiert sich für Musik`.
- المقارنة `Das freut mich` صحيحة في معنى «هذا يسعدني»، لكنها إطار متعدٍ مختلف عن `Ich freue mich`.

## تدقيق كل مهمة ومفتاح ومشتت

الجرد: r1–r3 مراجعة، e1–e12 تدريب، m1–m5 اختبار مصغر، w1–w5 كتابة/إملاء، q1–q4 فهم استماع؛ 29 معرّفاً فريداً. أدناه المفتاح وكل خيار منافس أو البديل المسجل، لا عينة ممثلة.

| المعرّف | المفتاح/الإجابة | الخيارات أو البدائل المدققة والحكم |
|---|---|---|
| r1 | `dich` في `Ich sehe ___. (أنتَ)` | `dir`, `mich`, `mir` لا تطابق المخاطب والمفعول في معنى الرؤية المحدد. |
| r2 | «إلى مكتب البريد» في `Ich gehe zur Post` | «البنك»، «المحطة»، «الصيدلية» لا تطابق `Post`؛ التوضيح يحفظ أن `die Post` قد تعني أيضاً خدمة البريد في سياق آخر. |
| r3 | `einen` في طلب حصة واحدة: `Ich möchte einen Tee.` | `ein` و`eine` لا تطابقان المذكر Akkusativ. حُدد «كوب واحد» حتى لا يُعامل استعمال `Tee` بلا أداة في سياق المادة العامة كخطأ مطلق؛ لكنه لا يحقق هذا الطلب المحدد. |
| e1 | `mich` في `Ich freue mich auf den Urlaub` | `dich/sich` لا يوافقان `ich`، و`mir` ليس ضمير هذا الإطار. |
| e2 | `sich` في `Er ärgert sich über den Lärm` | `mich/dich/uns` لا تعود على `er`. الإطار الانعكاسي محدد، مع بقاء معنى `jemanden ärgern` المتعدي في اللغة. |
| e3 | `sich freuen` = يسرّ/يتطلع بحسب السياق؛ `sich ärgern` = ينزعج/يغضب؛ `sich anmelden` = يسجل/يلتحق بحسب السياق؛ `sich beeilen` = يسرع | الأزواج الأربعة في المطابقة صحيحة؛ الترجمتان الأوليان والسياق في التسجيل غير محصورتين في مقابل عربي واحد. |
| e4 | `Ich freue mich auf den Urlaub.` | ترتيب التمرين محايد ويبدأ بالفاعل كما تنص التعليمة؛ هذا قيد تربوي مقصود لا ادعاء أن كل ترتيب آخر مستحيل. |
| e5 | استبدال `mir` بـ`mich` في `Ich freue mir auf den Urlaub` | `dich/sich` لا توافق `ich`، و`mir` خطأ في الإطار المعين فقط. |
| e6 | `mich / sich / uns` في الجمل الثلاث | لكل فراغ الخيارات مفصّلة في الاختبار: `(mich,dich,sich)`, `(mich,dich,sich)`, `(uns,euch,sich)`؛ المفاتيح توافق `ich`, `er`, `wir`. |
| e7 | `Beeil dich!` أو `Beeile dich!`، ومع `bitte` أو دونها | قُبلت الصيغ الأربع المسجلة: `Beeil dich bitte!`, `Beeil dich!`, `Beeile dich bitte!`, `Beeile dich!`. لا ترفض `-e` الاختيارية في الأمر. |
| e8 | «يقدّم شكوى» لـ`sich beschweren` | «يستعجل»، «يسجّل»، «يغضب» معانٍ لأفعال أخرى وليست معنى الفعل المعروض. |
| e9 | `sich` في `Er freut sich auf das Wochenende` عندما يكون `er` هو المتطلع | `mich/dich/euch` لا تطابق الفاعل المحدد؛ يوضح الشرح الفرق عن `Das freut mich`. |
| e10 | إملاء `Ich muss mich erholen.` | مهمة كتابة بعد صوت مولّد؛ المفتاح `audioText` كما هو. لا تدعي قياس النطق. |
| e11 | `der Nachname` = اسم العائلة/اللقب؛ `der Vorname` = الاسم الأول؛ `das Geburtsdatum` = تاريخ الميلاد؛ `die Staatsangehörigkeit` = الجنسية؛ `die Anschrift` = العنوان | الأزواج الخمسة محددة ولا توجد خيارات لغوية منافسة مسجلة. المعاني حقول منتقاة لنموذج التدريب، لا قائمة لازمة لكل استمارة. |
| e12 | `aus / mich` في `Ich fülle das Formular aus` و`Ich möchte mich anmelden` | للفراغ الأول `an/auf/mit` مشتتات لا تكوّن الفعل المنفصل `ausfüllen`؛ للثاني `mir/dich/sich` لا توافق `ich` في الإطار. |
| m1 | `uns` في `Wir freuen uns auf den Urlaub` | `euch/sich/mich` لا توافق `wir`. |
| m2 | `euch` في `Ihr beeilt euch` | `uns/sich/dich` لا توافق `ihr`. |
| m3 | `Ich ärgere mich nicht.` | ترتيب الجملة المحايد يضع `nicht` في نهاية المثال؛ لم يُدّع أن كل موضع آخر مستحيل في كل سياق بؤري. |
| m4 | **لا خطأ** في `Das freut mich.` | واجهة التصحيح تعرض خيار «لا خطأ» وتخفي اللفظ السليم من مواضع الاستبدال. `freuen mich` و`freut mir` و`freue mich` لا تنتج الجملة المطلوبة. هذا اختبار واعٍ ضد افتراض أن كل `freuen` انعكاسي. |
| m5 | `sich / uns / mich` في `Sie (هي) freut ___; Wir müssen ___ anmelden; Ich beeile ___.` | لكل فراغ الخيارات `sich/mich/uns`؛ القيود بين الضمير والفاعل واضحة. |
| w1 | `Ich freue mich auf den Urlaub.` **أو** `Ich freue mich auf die Ferien.` | قُبل الاسمان لأن العربية لا تعيّن مفرداً ألمانياً واحداً؛ المعنى في كليهما هو التطلع إلى العطلة. المهمة كتابة مضبوطة بإجابتين مسجلتين. |
| w2 | `mich, dich, sich, uns, euch, sich` | ستة فراغات اختيارية، وآخر `Sie` للمخاطبة الرسمية؛ ليست عينة من كتابة حرة. |
| w3 | `Ich möchte mich beschweren.` | إملاء كتابي لصوت TTS؛ لا يقيّم النطق أو الشكوى المنطوقة. |
| w4 | `Entschuldigung, ich möchte mich beschweren.` | المفتاح يطابق المطلوب باستخدام العبارتين المحددتين؛ الشرح يصفها صيغة مهذبة ممكنة لا الصيغة الوحيدة. لم تُرفض بدائل الشكوى الصحيحة في استعمال اللغة العام؛ إنها ببساطة خارج الإجابة المسجلة لهذه المهمة. |
| w5 | `Vorname: Mona` / `Geburtsdatum: 14.03.1995` / `Staatsangehörigkeit: tunesisch` | ثلاث قيم خيالية معطاة، والمفتاح يختبر نقلها إلى الحقول الثلاثة، لا صحة بيانات شخص حقيقي أو اكتمال أي نموذج رسمي. |
| q1 | `die Haare schneiden lassen` — سامي يريد قص شعره لدى الحلاق | `einen Termin absagen`, `sich beschweren`, `ein Handy kaufen` لا يطابق الحوار l1. |
| q2 | `Das Handy funktioniert nicht` | `Die Haare sind zu kurz`, `Der Termin ist zu spät`, `Die Post ist zu teuer` غير مذكورة في الحوار l2. |
| q3 | `Wir reparieren es oder geben Ihnen ein neues` | `Wir können nicht helfen`, `Das ist nicht unser Problem`, `Kommen Sie morgen` لا تطابق الحل الذي يقوله الموظف. `neues` يعود إلى `das Handy` المحذوف؛ الهاتف محايد. |
| q4 | `tunesisch` | `deutsch`, `französisch`, `nichts` لا تطابق المثال الذي تقوله الموظفة. كتابة الصفة بحرف صغير صحيحة هنا. |

مفاتيح الاختيار والملء والترتيب والتصحيح والإجابات المكتوبة اختُبرت بواسطة محرك التمرين في الاختبار المخصص، بما في ذلك كون w1 وw4 وw5 تمرينات تحويل مكتوبة. التقييم يثبت مطابقة الإجابات المسجلة، لا طلاقة عامة أو إنتاجاً حراً.

## الحوارات والنصوص والترجمة

الصوت في مشغل الدرس توليد متصفح آلي (`SpeechSynthesis`) للنصوص، لا تسجيلات أشخاص أو تسجيلات معيارية. لم تُستمع هذه المراجعة إلى ملفات صوتية مستقلة؛ دققت النصوص والترجمات كتابياً.

### l1 — عند الحلاق

| المتحدث | الألمانية | العربية المدققة |
|---|---|---|
| Friseurin | `Guten Tag! Was möchten Sie?` | نهارك سعيد! ماذا تريد؟ |
| Sami | `Ich möchte mir die Haare schneiden lassen.` | أريد قصّ شعري لدى الحلاق. |
| Friseurin | `Kurz oder mittellang?` | هل تريده قصيراً أم بطول متوسط؟ |
| Sami | `Mittellang, bitte. Ich muss mich beeilen; ich habe um zwölf einen Termin.` | بطول متوسط، من فضلك. عليّ أن أسرع؛ لديّ موعد في الثانية عشرة. |
| Friseurin | `Kein Problem, wir sind schnell.` | لا مشكلة، سننتهي بسرعة. |

الحوار طبيعي بوصفه موقفاً تدريبياً قصيراً؛ صيغة `mir die Haare schneiden lassen` ومرجع `mir` مذكوران، ولا يُعامل اختيار طول الشعر على أنه وصف خدمة حقيقية. q1 مفتاحه العبارة الأولى؛ بقية الخيارات راجعها الجدول.

### l2 — شكوى مهذبة عن هاتف

| المتحدث | الألمانية | العربية المدققة |
|---|---|---|
| Mona | `Entschuldigung, ich möchte mich beschweren.` | عذراً، أريد أن أقدّم شكوى. |
| Mitarbeiter | `Ja, bitte? Was ist das Problem?` | نعم، تفضّلي. ما المشكلة؟ |
| Mona | `Ich habe gestern ein Handy gekauft, aber es funktioniert nicht.` | اشتريت أمس هاتفاً لكنه لا يعمل. |
| Mitarbeiter | `Das tut mir leid. Bringen Sie es mit, wir reparieren es oder geben Ihnen ein neues.` | آسف. أحضريه، وسنصلحه أو نعطيك هاتفاً جديداً. |
| Mona | `Danke! Ich freue mich, dass Sie helfen.` | شكراً! يسعدني أنكم تساعدونني. |

الحوار افتراضي ولا يعد بسياسة استبدال/إصلاح لأي متجر؛ `es` يعود إلى `das Handy` و`ein neues` إلى هاتف جديد. `dass Sie helfen` سليمة، وترجمتها تحافظ على المعنى من دون اختراع ضمير ألماني غير موجود. q2 وq3 لا يطلبان استنتاج سياسة عامة؛ يختبران ما قيل في الحوار فقط.

### l3 — نموذج تدريب افتراضي

| المتحدث | الألمانية | العربية المدققة |
|---|---|---|
| Mitarbeiterin | `Guten Tag! Sie möchten sich anmelden. Hier ist ein Übungsformular.` | نهارك سعيد! تودّين التسجيل؛ تفضّلي هذه استمارة تدريبية. |
| Mona | `Danke. Ich fülle es gleich aus. Nachname, Vorname, Geburtsdatum, Anschrift...` | شكراً. سأملؤها فوراً: اسم العائلة، الاسم الأول، تاريخ الميلاد، العنوان... |
| Mitarbeiterin | `Tragen Sie bitte auch das Land Ihrer Anschrift und Ihre Telefonnummer ein.` | اكتبي من فضلك أيضاً بلد عنوانك ورقم هاتفك. |
| Mona | `Hier steht „Staatsangehörigkeit“. Was bedeutet das?` | مكتوب هنا «الجنسية». ما معنى ذلك؟ |
| Mitarbeiterin | `Hier schreiben Sie, welche Staatsangehörigkeit Sie haben. Zum Beispiel: „tunesisch“.` | اكتبي هنا جنسيتك. مثلاً: «tunesisch». |
| Mona | `Fertig! Ich unterschreibe hier unten. So?` | انتهيت! أوقّع في الأسفل. هكذا؟ |
| Mitarbeiterin | `Perfekt! Das Übungsformular ist jetzt vollständig ausgefüllt.` | ممتاز! اكتمل ملء الاستمارة التدريبية الآن. |

`Anmeldung` هنا تسجيل عام، وDuden يسجل استعمال `anmelden` للتسجيل في دورة؛ لا يلزم منه تسجيل محل السكن. الاسم `Staatsangehörigkeit` يدل على الانتماء القانوني لدولة، و`tunesisch` صفة صحيحة مكتوبة بحرف صغير. q4 يسأل تحديداً عن المثال المسموع، لا عن جنسية Mona الحقيقية. كل ما في النموذج تدريبي.

## النطق والترديد

| اللفظ في البطاقة | IPA المعروضة | نتيجة المراجعة المصدرية |
|---|---|---|
| `sich beschweren` | `[bəˈʃveːʁən]` | PONS يسجل تقريباً `[bəˈʃve:rən]` ومعنى الشكوى؛ `sch` يوافق `[ʃ]` و`w` الألمانية `[v]`. تحقيق `r` إقليمي. |
| `der Friseur` | `[fʁiˈzøːɐ̯]` | Duden يسجل `[friˈzøːɐ̯]`، ويعرّف المهنة وقاعدة الجنس النحوي؛ يختلف تمثيل/تحقيق `r`. `eu` في هذه الكلمة ليس النمط الصوتي المعتاد `[ɔʏ̯]`. |
| `reparieren` | `[ʁepaˈʁiːʁən]` | PONS يسجل تقريباً `[repaˈri:rən]`؛ المقطع `-ie-` طويل `[iː]` والنبر على `-rie-`. يختلف تحقيق r. |
| `sich ärgern` | `[ˈɛʁɡɐn]` | PONS يسجل تقريباً `[ˈɛrgɐn]`؛ الصائت `ä` هنا قصير `[ɛ]`، وتحقيق r يختلف إقليمياً. |
| `sich anmelden` | `[ˈʔanmɛldn̩]` | الصيغة المنقولة تتفق مع متغير Wiktionary؛ يذكر أيضاً `[ˈʔanmɛldən]`. النبر الأساسي على `an` متفق مع Duden؛ لا تعد الصيغة الوحيدة الممكنة. |
| `die Beschwerde` | `[bəˈʃveːɐ̯də]` | PONS يسجل تقريباً `[bəˈʃve:ɐ̯də]`؛ `sch` `[ʃ]` و`w` `[v]`، وتحقيق r إقليمي. |

أسطر الترديد الأربعة هي: `Ich freue mich auf den Urlaub.`، `Beeil dich bitte!`، `Ich möchte mich beschweren.`، `Wir müssen uns anmelden.`. ملاحظات `eu` في `freue`، وصوت `[aɪ̯]` في `beeil-`، وأصوات `sch/w`، ونبر `anmelden` متوافقة مع المراجع الصوتية المعجمية. IPA تدوين واسع مساعد لا تهجئة عربية، وأصوات المنتج مولّدة من المتصفح. لا يثبت زر الصوت جودة تسجيل معياري.

## البطاقات الـ12

| البطاقة | المدخل — المعنى العربي | المثال — ترجمته |
|---|---|---|
| fc1 | `die Post` — خدمة البريد/مكتب البريد بحسب السياق | `Die Post ist in der Stadt.` — مكتب البريد في المدينة. اختيار معنى المكتب في هذه الجملة ممكن؛ ليس معنى وحيداً للكلمة. |
| fc2 | `der Friseur` — الحلاق/مصفف الشعر | `Ich gehe zum Friseur.` — أذهب إلى الحلاق. |
| fc3 | `reparieren` — يصلح | `Er repariert das Handy.` — يصلح الهاتف. |
| fc4 | `sich freuen` — يكون مسروراً/يتطلع بحسب السياق | `Ich freue mich!` — أنا مسرور! |
| fc5 | `sich ärgern` — ينزعج/يغضب | `Er ärgert sich.` — هو منزعج. |
| fc6 | `sich anmelden` — يسجل/يلتحق بحسب السياق | `Ich muss mich anmelden.` — يجب أن أسجل. |
| fc7 | `sich beeilen` — يستعجل | `Beeil dich!` — استعجل! |
| fc8 | `sich beschweren` — يشتكي/يقدم شكوى | `Ich möchte mich beschweren.` — أود أن أشتكي. |
| fc9 | `das Formular` — الاستمارة | `Das Formular ist lang.` — الاستمارة طويلة. |
| fc10 | `ausfüllen` — يملأ (استمارة) | `Ich fülle das Formular aus.` — أملأ الاستمارة. |
| fc11 | `die Anmeldung` — التسجيل/الانتساب بحسب السياق | `Die Anmeldung ist jetzt abgeschlossen.` — اكتمل التسجيل الآن. |
| fc12 | `unterschreiben` — يوقّع | `Unterschreiben Sie hier.` — تفضّلوا بالتوقيع هنا (صيغة رسمية). |

كل مثال سليم في معناه المحدد. معاني `Post` و`Anmeldung` تتغير بحسب السياق؛ لا تساوي `Anmeldung` هنا بتسجيل محل الإقامة. العبارة الرسمية في fc12 تخاطب `Sie`، والترجمة العربية مهذبة لا جمع حرفي.

## الوساطة والتفاعل والادعاء الثقافي

- **مسودة الكتابة الحرة في واجهة القسم:** أزيل التقييم الآلي غير الموثق؛ تبقى المسودة للمراجعة الذاتية ولا تُعرض كدرجة Goethe/CEFR أو كدليل على تحقق هدف. أدلة z3 وz4 محصورة في مهام الكتابة المحددة `w4` و`w5`.
- **الوساطة:** النص يقول `Anmeldung: Bitte tragen Sie hier Ihren Namen, Ihre Adresse und Ihre Telefonnummer ein. Unterschreiben Sie unten.` والمطلوب شرح هذه البيانات والموضع في المثال المحدد. الإجابة النموذجية والركيزتان تذكر الاسم والعنوان والهاتف والتوقيع. هذا تمرين شرح مفتوح/مقارنة ذاتية، لا تصحيح آلي ولا إثبات هدف أداء.
- **التفاعل، الجولة 1:** الافتتاح `Guten Tag, wie kann ich Ihnen helfen?`; الرد الأفضل يصف طلباً لم يصل منذ أسبوع ويطلب رقم الطلب. المشتت `Ihr Laden ist schrecklich und alles ist kaputt!` عدائي وغير محدد، ورد الموظف يحث على وصف المشكلة بهدوء. الترجمتان تتفقان مع النص.
- **التفاعل، الجولة 2:** بعد طلب رقم الطلب، الرد الأفضل يذكر الرقم `12345` ويسأل عن حالة التوصيل؛ المشتت `Die Nummer? Das geht Sie nichts an!` يرفض تقديم معلومة لازمة في هذا السيناريو. الرد البديل يوضح أن الحالة لا يمكن فحصها من دون الرقم. جملة الوصول غداً موسومة في الألمانية `Laut aktuellem Status` و`voraussichtlich`؛ والترجمة «بحسب الحالة الحالية، من المتوقع» تحفظ عدم اليقين. كل ذلك سيناريو نصي خيالي، لا محادثة حرة أو سياسة خدمة حقيقية.
- **المعلومة الثقافية/القانونية:** صيغ الادعاء بحذر: سؤال البريد في المراجعة والحوار وخانات النموذج أمثلة تدريبية، و`Anmeldung` هنا تسجيل عام. النص لا يعمم حقول نموذج أو مهلة قانونية على كل خدمة. الرابط المباشر لـ§17 من قانون التسجيل الاتحادي الألماني يربط مهلة الأسبوعين بالانتقال إلى مسكن والتسجيل لدى سلطة التسجيل، لا بكل اشتراك أو خدمة.

## تصنيف الملاحظات

- **أخطاء مؤكدة في الإطار المحدد:** الضمائر غير المتوافقة في e1/e2/e5/e6/e9/m1/m2/m5؛ `mich` لا `mir` في `sich freuen auf` مع `ich`؛ و`Ich wasche mir die Hände` لا `mich` في المثال المحدد. المفاتيح متوافقة مع تعليمات السؤال.
- **بدائل صحيحة أو سياقية:** `Beeil dich!` و`Beeile dich!`؛ `Urlaub` و`Ferien` في w1؛ معنى `Post`/`Anmeldung`؛ الاستعمال المتعدي `Das freut mich`؛ معنى `Er interessiert ihn für Musik`؛ وفهم `Wir treffen uns` بوصفه متبادلاً بحسب السياق. لم تُصنف هذه البدائل أخطاء مطلقة.
- **تبسيط تربوي/حد تقني:** إجابات التحويل والإملاء مضبوطة على مفاتيح مسجلة؛ الإملاء TTS وليس اختبار استماع معياري؛ أسئلة الاستماع لا تسجل تشغيل الصوت؛ الوساطة غير مقوّمة آلياً؛ والتفاعل اختيار نصي. النطق يعرض IPA مولّد/متحققاً نصياً، بينما أداة SpeechRecognition تقارن تفريغاً نصياً بالهدف، ولا تحلل الموجة الصوتية أو المخارج أو النبر.
- **ملاحظة مستوى مفردات لا حكم قطعي:** تضع بعض مداخل Duden مثل `freuen`, `ärgern`, `anmelden`, `Friseur`, `Post` و`Handy` ضمن قوائم مفردات Goethe B1. هذه إشارات معجمية من Duden تستحق مراعاة السقالات والعبء المفرداتي؛ لا تثبت وحدها أن الدرس غير مناسب لـA2، ولا تشكل اعتماداً أو تصنيفاً رسمياً لمحتوى هذا الدرس.
- **تحديد وصف الملخص:** ذُكرت مفردة البريد لا «مشهد خدمة بريد»؛ فالحواران الفعليان عند الحلاق وعن الهاتف، والثالث نموذج تسجيل افتراضي.

## تحديث مرتبط بدقة وصف مقياس الكلام في المنتج

التشابه الظاهر في أداة الكلام هو تشابه بين النص المتعرف عليه والنص الهدف، لا تحليل صوت. عُدّلت أوصاف الدرجة والنتيجة في المكونات والتقارير والاستراتيجية والخصوصية لتصرح بذلك، وأزيل هدف `90%+` بوصفه غاية للنطق. اسم حدث التحليلات `pronunciation-score` باقٍ للتوافق التاريخي، لكن التعليقات والواجهة تصف القيمة بأنها تشابه نصي تقريبي. لا تغيّر هذه التعديلات خوارزمية النتيجة أو الأحداث. لم تُعدّل هذه الدفعة لوحة الكفايات/تجميع المهارات القديمة في `competencies.ts` كما طُلب لعزل نطاقها؛ لذلك لا تُعامل قيمها الحالية كدليل على نطق صوتي أو مستوى CEFR، ويُترك فحص هذا المسار لدفعة مستقلة.

**قرار نطاق A2-09:** لم يُضمّن تصحيح ملاحظة النطق واختبارها وتقريرها إلى هذه الدفعة. نسخة A2-09 الموجودة في أساس الفرع ما زالت تصف التشابه النصي بأنه تقييم نطق آلي؛ وهذه الملفات خارج نطاق هذا التدقيق، لذلك لم تُعدّل هنا. يُترك التصحيح إلى دفعة A2-09 مستقلة تُراجع المصدر والاختبار والتقرير معاً، ولا تُسحب تغييرات أخرى من A2-09 إلى تدقيق A2-11.

## المصادر المباشرة وحدودها

### القواعد والمعاني

- Duden: [freuen](https://www.duden.de/rechtschreibung/freuen) يورد `sich freuen auf` و`das freut mich`؛ [ärgern](https://www.duden.de/rechtschreibung/aergern) يميز المتعدي من `sich ärgern über`; [interessieren](https://www.duden.de/rechtschreibung/interessieren) يثبت استعمال `sich für` والاستعمال المتعدي لشخص آخر.
- Duden: [waschen](https://www.duden.de/rechtschreibung/waschen) يورد `sich die Hände waschen`; [ansehen](https://www.duden.de/rechtschreibung/ansehen) يورد `ich sehe mir das an`; [vorstellen](https://www.duden.de/rechtschreibung/vorstellen) يورد `sich etwas vorstellen` و`stell dir vor`; [treffen](https://www.duden.de/rechtschreibung/treffen) يورد `die beiden treffen sich/einander`؛ و[beeilen](https://www.duden.de/rechtschreibung/beeilen) يسجل الفعل الانعكاسي.
- [IDS Grammis — Pronomen](https://grammis.ids-mannheim.de/sgt/2194?termini=term) لمرجع الضمير الانعكاسي والتمييز عن `einander`؛ [IDS Grammis — Kasus](https://grammis.ids-mannheim.de/sgt/2218?termini=term) لحكم الفعل للحالة؛ [IDS Grammis — Präpositionalgruppe](https://grammis.ids-mannheim.de/sgt/2262?termini=term) لحكم حرف الجر للحالة.
- Duden: [anmelden](https://www.duden.de/rechtschreibung/anmelden) يميز التسجيل لدى جهة من التسجيل لدورة؛ [ausfüllen](https://www.duden.de/rechtschreibung/ausfuellen) يورد ملء النموذج؛ [erholen](https://www.duden.de/rechtschreibung/erholen) يورد `sich im Urlaub erholen`؛ [Post](https://www.duden.de/rechtschreibung/Post_Unternehmen) يميز خدمة البريد والفرع ويورد `zur Post gehen`; [Tee](https://www.duden.de/rechtschreibung/Tee_Getraenk) يسند جنس الاسم واستخدام عدد الأكواب.
- Duden: [Handy](https://www.duden.de/rechtschreibung/Handy) يثبت الجنس النحوي neuter ومعنى الهاتف؛ [Friseur](https://www.duden.de/rechtschreibung/Friseur) للمهنة والجنس والـIPA؛ [Staatsangehörigkeit](https://www.duden.de/rechtschreibung/Staatsangehoerigkeit) للمعنى القانوني والجنس؛ [tunesisch](https://www.duden.de/rechtschreibung/tunesisch) للصفة؛ [Entschuldigung](https://www.duden.de/rechtschreibung/Entschuldigung) لصيغة الاعتذار المهذبة. و[Duden: anmelden](https://www.duden.de/rechtschreibung/anmelden) يسند التسجيل في دورة لا معنى الإقامة وحده.
- للمفردات الحقلية: [Nachname](https://www.duden.de/rechtschreibung/Nachname)، [Vorname](https://www.duden.de/rechtschreibung/Vorname)، [Geburtsdatum](https://www.duden.de/rechtschreibung/Geburtsdatum)، [Anschrift](https://www.duden.de/rechtschreibung/Anschrift)، [Formular](https://www.duden.de/rechtschreibung/Formular)، [unterschreiben](https://www.duden.de/rechtschreibung/unterschreiben). هي معانٍ معجمية للحقول، لا دليل على أن كل جهة تطلبها جميعاً.

### النطق

- مداخل PONS المباشرة: [beschweren](https://en.pons.com/translate/german-english/beschweren)، [reparieren](https://en.pons.com/translate/german-english/reparieren)، [ärgern](https://en.pons.com/translate/german-english/%C3%A4rgern)، [Friseurin](https://en.pons.com/translate/german-english/Friseurin)، [Beschwerde](https://en.pons.com/translate/german-english/Beschwerde). IPA فيها تدوين معجمي واسع؛ ليس تقريراً عن صوت المتصفح.
- [Bab.la — beeilen pronunciation](https://en.bab.la/pronunciation/german/beeilen) و[Wiktionary — beeilen](https://en.wiktionary.org/wiki/beeilen) يوردان `[bəˈʔaɪ̯lən]`; [Wiktionary — anmelden](https://en.wiktionary.org/wiki/anmelden) يورد متغيري النهايتين؛ [Bab.la — anmelden](https://en.bab.la/pronunciation/german/anmelden) يسند النقل المقطعي الشائع. Wiktionary مصدر تعاوني مساعد، لا المصدر الوحيد.

### القانون والخصوصية التقنية

- [قانون التسجيل الاتحادي الألماني، §17](https://www.gesetze-im-internet.de/bmg/__17.html): مهلة الأسبوعين مرتبطة بالانتقال إلى مسكن والتسجيل لدى الجهة المختصة؛ لا تُعمم على خدمات أو استمارات أخرى.
- [MDN — Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) و[MDN — SpeechRecognition.processLocally](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/processLocally): تختلف معالجة التعرف على الكلام بحسب التطبيق والمتصفح؛ خيار المعالجة المحلية ليس متاحاً في جميع البيئات. سياسة الموقع تصف الاحتمال بحذر ولا تدعي أن كل الصوت محلي.
- فحص شفرة المستودع: موضعا scripts في `src/app/layout.tsx` و`src/app/faq/page.tsx` يعرضان JSON-LD، ولم يظهر في بحث الشفرة عن GTM/gtag أو أدوات شائعة أخرى تكامل مباشر مع متعقب خارجي. `src/lib/analytics/session.ts` يسجل أحداث الجلسة عبر مخزن أحداث التطبيق؛ وقائمة CSP تسمح نطاقات Google، لكنها لا تثبت وحدها تحميل متعقب أو غيابه في بيئة النشر. لذلك تقصر عبارة الخصوصية على الشفرة الحالية التي روجعت ولا تدّعي تدقيق الاستضافة أو إضافات المتصفح.

## الفحوص والحدود التشغيلية

- على لقطة نظيفة من `HEAD` مطبقاً عليها **الفهرس staged فقط بعد دمج الفرع البعيد**: `npx vitest run src/data/lessons/a2/a2-11.test.ts src/lib/speech/scoring.test.ts src/lib/constants/consistency.test.ts src/lib/lesson/error-types.test.ts --reporter=dot`: **4 ملفات، 45/45 اختباراً ناجحاً** (A2-11: 18، scoring: 9، consistency: 12، error types: 6). ظهر تحذير Vite غير مانع عن `configLoader: 'native'`.
- في اللقطة staged نفسها، ESLint على كل ملفات TypeScript/TSX المدرجة في الفهرس **ناجح**. أما `npm run typecheck -- --pretty false` فيفشل بـ**9 تشخيصات خارج الملفات المعدّلة**: `unit-row.tsx` (مرجع `Check` غير المستورد) واختبارات A1-07/A1-08/A1-09/A1-10/A2-03 (حقول `lessonId` على أحداث تقييم الكلام). لا يظهر تشخيص في ملفات هذه الدفعة؛ لا تصف الفرع بأنه نظيف الأنواع.
- `git diff --cached --check`: **ناجح** بعد آخر تعديل للفهرس. لم يُشغّل build أو suite كاملة.
- تصحيح A2-09 النصي/الاختباري/التقريري **مؤجل صراحةً**: النسخة السابقة من A2-09 موجودة في أساس الفرع، لكن هذا الدفع لا يغيّر ملفات الدرس أو الاختبار أو التقرير الخاصة بها. يجب إصلاح المقياس في نطاق مستقل مع اختبار المصدر والتقرير معاً. صف A2-09 في `meta.ts` وتغيير `academic-depth.test.ts` خارج النطاق.
- حالة الدفع: commit `56d1164` (`Audit A2-11 lesson and evidence wiring`) دُفع بنجاح إلى `origin/arena/01a10631-deutschpfad`؛ ضمّ 19 ملفاً مرتبطاً وصف A2-11 وحده من `meta.ts`. حُفظت التغييرات المحلية غير المرتبطة التي سبقت دمج commits البعيدة في `stash@{0}` لتجنب خلطها بهذا الدفع.
