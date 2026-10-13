# تقرير تدقيق A1-14: Perfekt وwollen/sollen

- **تاريخ المراجعة:** 2026-10-06
- **المستودع/الفرع:** `naderba69/deutschpfad` — `arena/01a10631-deutschpfad`
- **النطاق:** محتوى A1-14 وحده، ومراجعته اللغوية/التربوية واختبار مفاتيحه وأدلته، مع تعديل محدود لوصف المستوى والوحدة وواجهة المسودة الحرة.
- **الحالة:** اكتملت المراجعة النوعية لهذه الدفعة، واجتاز اختبار A1-14 المركّز وESLint. لا يعني ذلك اكتمال A1 أو A1–B2، ولا اعتماد الدرس أو معايرته رسمياً.

## الخلاصة

- فُحصت **46 مهمة قابلة للتصحيح** واحدةً واحدة: 3 مراجعة، 26 تدريباً، 5 أسئلة اختبار قصير، 3 مهام كتابة محددة، 6 أسئلة قراءة، و3 أسئلة استماع. روجع المفتاح وكل مشتّت مكتوب لكل سؤال اختيار/فراغ/تصحيح/مطابقة، كما جُرّبت الإجابات القياسية والبدائل المسجلة والرفض غير الصحيح في محرك التمارين.
- روجعت 4 كتل نظرية و32 مثالاً فيها و24 صفاً في جداولها، و18 زوجاً للخطأ/التصحيح فيها، إضافة إلى 5 أخطاء شائعة و5 نصائح في ملخص الدرس. روجعت أيضاً رسالة القراءة وترجمتها في 6 فقرات، و12 مدخلاً معجمياً و6 عبارات جاهزة، ونص الاستماع ذي الأسطر الخمسة، و8 ملاحظات نطق، و25 بطاقة، ونشاط وساطة واحد، وحوار تفاعلي من 4 جولات. التفاصيل والمفاتيح أدناه.
- صُححت تعميمات عن «Perfekt في الكلام فقط»، واختيار `haben/sein` من اختبار المفعول وحده، وقاعدة `ge-` من النبر وحده، ومعاني `wollen/sollen`، وقُيّدت الجمل المحتملة بتعليمات تجعل المطلوب واضحاً. ثُبّتت بدائل صحيحة لـe22، وأُزيلت نتيجة التقييم الآلي المضللة من مسودة الكتابة الحرة.
- لكل هدف من الأهداف السبعة معرّفات أداء فعلية، وكلها `completion: "all-correct"`. لا يثبت فتح النشاط أو كشف نص الاستماع إتقاناً؛ ولا يُحتسب الحوار النصي أو الوساطة أو النطق دليلاً على الكلام أو الوساطة.
- **الاختبارات الشاملة ليست خضراء:** الاختبار المركّز لـA1-14 هو 7/7، لكن المجموعة كلها 403/411 (48 ملفاً؛ 45 ناجحاً و3 فاشلة). الإخفاقات الثمانية خارج A1-14: خمسة في فحص العمق الخاص بـA1-03/A1-06، اثنان في `integrity.test.ts` يعودان إلى A1-11/A1-03، وواحد في `review-generator.test.ts`. كما يفشل فحص الأنواع بأربعة تشخيصات في ملفات أخرى؛ انظر «التحقق والحدود».

## المنهج وما يشمله التدقيق

راجعت كل بندٍ ومفتاحه وسياقه وخياراته، لا مجرد وجود الحقول. اختبارات الوحدة تمرر المفتاح إلى محرك التمرين، وتتحقق من رفض كل خيار مشتّت مسجل صراحةً؛ وفي الفراغات تختبر خطأ كل خانة على حدة، وفي المطابقة تبديل كل زوج منفرداً، وفي التحويلات تختبر كل جواب مقبول مسجل. ترتيب الكلمات لا يملك قائمة مشتتات معرّفة في البيانات، لذلك راجعت قيوده وإجابته القياسية وأمثلة الجمل، واختبر الكود الترتيب المقلوب. يظل هذا الاختبار الآلي مساعداً للمراجعة اللغوية، لا بديلاً منها.

ميّزت في المراجعة بين: **(أ)** خطأ في الجملة/المفتاح المحدد، **(ب)** صيغة صحيحة لكن معناها أو ملاءمتها تتغير بالسياق، **(ج)** تبسيط تعليمي يحتاج إلى تقييد، و**(د)** ادعاء غير مسند. لا تُعامل البدائل السياقية على أنها أخطاء مطلقة.

## تدقيق الأهداف والشرح

### المقدمة والسياق والمفردات المنشّطة

- سؤال التحفيز `Was hast du am Wochenende gemacht?` قُدّم سؤالاً تدريبياً محتملاً، لا سؤالاً يقال في كل درس أو امتحان. المثال الألماني `Ich bin nach Berlin gefahren und habe viel gesehen.` سليم في Perfekt.
- سياق المقدمة يصف Perfekt بأنه شائع في محادثات يومية كثيرة، لا أنه ماضٍ شفهي حصري؛ ويقر بوجود Präteritum في الكلام والكتابة وباختلاف الاستعمال بحسب الفعل والسياق والمنطقة. صياغة V2 مقيّدة بالجملة الرئيسية الخبرية، ومثال `weil ich Deutsch gelernt habe` يوضح تأخر المساعد في الجملة الفرعية.
- الصلة بالدروس السابقة لا تزعم أن المتعلم يرى الأفعال أو المساعدات لأول مرة أو أنه أتقنها؛ بل تقول إن بعض المفردات والبنى سبق ظهورها وإن المطلوب هنا تدريب Perfekt.
- المفردات الخمس `gestern`, `letztes Wochenende`, `gemacht`, `gefahren`, `gewesen` وترجماتها مناسبة للسياقات الواردة.

### الأهداف السبعة

| الهدف | الادعاء المحدود القابل للملاحظة | مهام الأداء المربوطة |
|---|---|---|
| z1 | تحويل مطالب محددة إلى جمل Perfekt | `wr-a1-14-1`, `wr-a1-14-2`, `e14`, `e22` |
| z2 | إكمال خمس صيغ Partizip II شائعة في جمل معطاة | `e1`, `e2`, `e7`, `e8`, `e9` |
| z3 | اختيار المساعد في أمثلة شائعة بحسب معنى الفعل واستعماله | `e3`, `e4`, `e12`, `e21`, `e24`, `mt-a1-14-1` |
| z4 | تصريف `wollen/sollen`، ترتيب المصدر، والتعرف إلى طلب شائع مهذب | `e15`–`e19`, `mt-a1-14-5` |
| z5 | إكمال مساعدات وPartizip II معطاة في قالب بريد | `wr-a1-14-3` فقط؛ لا يدّعي إنشاء بريد حر |
| z6 | استخراج تفاصيل محددة من البريد المقروء | `rq1`, `rq2`, `rq3`, `rq6` |
| z7 | استخراج نشاط السبت وطريقة الوصول يوم الأحد من الرسالة الصوتية | `lsq-a1-14-1`, `lsq-a1-14-3` قبل إظهار التفريغ |

كل الهدف مربوط بـ`exerciseIds` موجودة و`taskIds` صحيحة بحسب الواجهة؛ اختبرنا أن سجل الإجابات الخاطئة أو الناقصة أو ذات الدرس/السياق غير المطابق لا يثبت الهدف. لا توجد في الدرس أهداف لكلام متحدث أو نطق مقاس أو كتابة حرة أو وساطة.

### كتل النظرية الأربع

1. **t1 — تركيب Perfekt والمواضع والأنماط:** يشرح `haben/sein + Partizip II`، وموقع V2 للمساعد في الجملة الرئيسية الخبرية، ونهاية Partizip II عادةً في هذا التركيب، وتقدم المساعد في سؤال نعم/لا، وتأخره بعد Partizip في الجملة الفرعية. يميّز بين Partizip في تركيب الفعل واستعماله صفةً، ويعرض الضعيف والقوي ونهاية `-et` بأمثلة `gelernt`, `gemacht`, `gearbeitet`, `gewartet`, `getrunken`, `geschrieben`, `gelesen`. هذا أدق من القول إن Perfekt «ماضٍ يُقال فقط» أو إن جميع النهايات تُشتق بقاعدة واحدة.
2. **t2 — اختيار المساعد:** يصوغ انتقال المكان أو تغير الحالة واللوازم الشائعة قرائن لا قائمة مغلقة، ويميّز `fahren` بمعنى السفر (`sein`) عن قيادة السيارة بمفعول (`haben`). يذكر الأفعال المتعدية والنشاط/المدة (`acht Stunden schlafen`) كي لا تُخلط المدة بمفعول Akkusativ. أزيلت القاعدة المضللة «وجود مفعول يعني haben قطعاً» والتعميم «كل حركة = sein»؛ على المتعلم حفظ المساعد مع الفعل والمعنى المقصود.
3. **t3 — البوادئ و`-ieren`:** يشرح `auf|stehen → aufgestanden` و`an|rufen → angerufen`، والبوادئ غير المنفصلة مثل `be-/ver-` في `besucht/verstanden`, وصيغ `-ieren` مثل `studiert/telefoniert` بلا `ge-`. يصرح بأن النبر وحده ليس اختباراً عاماً لموضع `ge-` أو غيابها.
4. **t4 — الأفعال الناقصة:** يورد تصريفات `wollen` و`sollen` وصيغ الأفعال الناقصة الستة، مع مصدر في نهاية المجال الفعلي في أمثلة الجمل الرئيسية. يشرح أن `wollen` رغبة/نية بحسب السياق، وأن `sollen` تكليف/نصيحة/قول منقول أو توقع وفق السياق. `möchte` صيغة Konjunktiv II شائعة للطلب المهذب، وليست الوحيدة؛ `Ich will einen Kaffee` صحيحة نحوياً وقد تكون أكثر مباشرة، لا خطأً بذاتها. كما يوضح أن `will` مضارع `wollen` لا صيغة Futur I، وأن المضارع مع ظرف زمني قد يعبر عن المستقبل.

### المقارنات العربية ومصادر الشرح

راجعت المقارنة العربية في كل كتلة: t1 يقارن المثال `تعلّمتُ الألمانية أمس` بتركيب ألماني ذي مساعد وPartizip، مع التنبيه إلى أن المقارنة لا تصف كل صيغ الماضي العربية؛ t2 يرفض مساواة `haben/sein` بتقسيم عربي كامل ويرفض اعتبار كل Akkusativ مفعولاً مباشراً؛ t3 يوضح أن `ge-` لا تقابل لاصقة عربية بعينها ولا تحمل معنى واحداً في كل استعمال؛ وt4 يقدّم «أريد/ينبغي» كتقريب لمثال سياقي لا مقابلة ثابتة لـ`wollen/sollen`. لم تُساوَ حالة ألمانية بقواعد العربية أو بالجرّ.

### فحص أمثلة النظرية والتمارين النمطية بنداً بنداً

في الشروح الأربع **32 مثالاً** (8 في كل كتلة) و**18 زوجاً للخطأ/التصحيح** (5+5+5+3). دققت صحة الألمانية، والمساعد/Partizip، والترتيب المقصود، والتفسير العربي، ومدى توافق المثال مع القاعدة من دون تعميم زائد.

| المرجع | المثال الألماني | نتيجة المراجعة |
|---|---|---|
| t1-1 | `Ich habe gestern Deutsch gelernt.` | Perfekt صحيح؛ `habe` مصرّف وPartizip في الآخر. |
| t1-2 | `Was hast du am Wochenende gemacht?` | سؤال W صحيح؛ الأداة أولاً والمساعد بعدها وPartizip أخيراً. |
| t1-3 | `Wir haben in einem Restaurant gegessen.` | `essen → gegessen` صحيح، و`haben` مع الفعل المتعدّي في هذا المثال. |
| t1-4 | `Meine Mutter hat einen Kuchen gebacken.` | `backen → gebacken` قويّ؛ المساعد وترتيب الجملة صحيحان. |
| t1-5 | `Habt ihr die Hausaufgaben gemacht?` | سؤال نعم/لا بتقدم المساعد، وPartizip في النهاية. |
| t1-6 | `Ich habe zwei Stunden auf den Bus gewartet.` | `warten → gewartet` مع `-et`; والمدة لا تجعل `zwei Stunden` مفعولاً مباشراً. |
| t1-7 | `Er hat mir ein Buch geschenkt.` | `schenken → geschenkt` صحيح؛ `mir` متلقٍ و`ein Buch` الشيء الممنوح. |
| t1-8 | `Ich habe nichts gesagt.` | `sagen → gesagt` صحيح؛ `nichts` في موضعه. |
| t2-1 | `Ich bin gestern nach München gefahren.` | `fahren` بمعنى السفر إلى وجهة يأخذ `sein` في هذا المثال. |
| t2-2 | `Ich habe ein Buch gelesen.` | `lesen → gelesen` مع المفعول؛ `haben` صحيح. |
| t2-3 | `Wir sind am Samstag zu Hause geblieben.` | `bleiben → geblieben` مع `sein` في هذا الاستعمال. |
| t2-4 | `Er hat acht Stunden geschlafen.` | `schlafen → geschlafen` مع `haben`; `acht Stunden` مدة. |
| t2-5 | `Bist du schon einmal in Deutschland gewesen?` | صيغة سؤال Perfekt صحيحة؛ `gewesen` مع `sein`. |
| t2-6 | `Das Kind ist sehr schnell gewachsen.` | `wachsen → gewachsen` يصف تغير حالة/نمو؛ `sein` مناسب. |
| t2-7 | `Was ist denn passiert?` | سؤال صحيح؛ `passieren → passiert` مع `sein` في هذا التركيب. |
| t2-8 | `Ich bin um sechs Uhr aufgestanden und habe gefrühstückt.` | مساعدان مختلفان صحيحان في جملة واحدة: `aufstehen` مع `sein`، و`frühstücken` مع `haben`. |
| t3-1 | `Ich bin heute um sechs Uhr aufgestanden.` | `ge-` بين `auf-` والجذع، و`sein` في هذا المعنى. |
| t3-2 | `Hast du deine Mutter angerufen?` | سؤال صحيح؛ `anrufen → angerufen` و`haben`. |
| t3-3 | `Wir haben gestern eingekauft.` | `einkaufen → eingekauft`: `ge-` داخل الفعل المنفصل، و`haben`. |
| t3-4 | `Ich habe meine Großmutter besucht.` | `besuchen → besucht` بلا `ge-` إضافية مع `be-`. |
| t3-5 | `Entschuldigung, ich habe das nicht verstanden.` | جملة طبيعية؛ `verstehen → verstanden` بلا `ge-` بعد `ver-`. |
| t3-6 | `Sie hat in Deutschland studiert.` | `studieren → studiert` بلا `ge-` لفعل `-ieren`. |
| t3-7 | `Ich habe eine E-Mail bekommen.` | صيغة `bekommen` صحيحة بلا `ge-` إضافية؛ الترجمة «وصلتني رسالة» مناسبة للمعنى المقصود. |
| t3-8 | `Wir haben zwei Stunden telefoniert.` | `telefonieren → telefoniert` بلا `ge-`; و`haben` صحيح. |
| t4-1 | `Ich will nächstes Jahr nach Deutschland ziehen.` | `will` تصريف صحيح للرغبة/النية؛ المصدر في نهاية الجملة. |
| t4-2 | `Was willst du am Wochenende machen?` | سؤال W صحيح؛ `willst` مع `du` والمصدر في النهاية. |
| t4-3 | `Wir wollen heute Abend ins Kino gehen.` | تصريف `wir wollen` وترتيب المصدر صحيحان. |
| t4-4 | `Der Lehrer sagt, wir sollen die Übung machen.` | جملة رئيسية وفرعية سليمتان؛ `sollen` معنى منقول/متوقع بحسب السياق. |
| t4-5 | `Soll ich das Fenster öffnen?` | صياغة سليمة لعرض المساعدة أو طلب التوجيه؛ الدلالة سياقية كما في الشرح. |
| t4-6 | `Du sollst nicht so viel Zucker essen.` | `sollst` مع `du` والجملة السلبية سليمة؛ النصيحة لا تجعل `sollen` مقابلاً جامداً للأمر. |
| t4-7 | `Ich möchte bitte einen Kaffee.` | طلب شائع مهذب؛ لا يدّعي أنه الصيغة المهذبة الوحيدة. |
| t4-8 | `Ich will gehen.` | `will` مضارع `wollen` للرغبة/النية؛ ليست أداة Futur I. |

**أمثلة جداول النظرية (24 صفاً؛ بعض الجمل تكرر أمثلة الشرح):**

- t1: `lernen→gelernt` (`Ich habe Deutsch gelernt`); `machen→gemacht` (`Was hast du gemacht?`); `arbeiten→gearbeitet` (`Er hat viel gearbeitet`); `trinken→getrunken` (`Wir haben Kaffee getrunken`); `schreiben→geschrieben` (`Ich habe eine E-Mail geschrieben`); `lesen→gelesen` (`Sie hat das Buch gelesen`). التصريفات والنهايات والمواضع متسقة.
- t2: `Ich bin nach Berlin gefahren`; `Ich bin früh aufgestanden`; `Wir sind zu Hause geblieben`; `Ich habe ein Buch gelesen`; `Er hat gut geschlafen`; ومقابلة المعنى `Ich bin gefahren. · Ich habe das Auto gefahren.`. المساعد يوافق المعنى/الاستعمال المحدد، لا قاعدة الحركة أو المفعول وحدهما.
- t3: `lernen→gelernt`, `aufstehen→aufgestanden`, `anrufen→angerufen`, `besuchen→besucht`, `verstehen→verstanden`, `studieren→studiert`. موضع `ge-` أو غيابها يطابق نوع الفعل والبادئة.
- t4: `Ich kann schwimmen`; `Ich mag Tee` و`Ich möchte einen Kaffee`; `Ich muss arbeiten`; `Hier darf man nicht rauchen`; `Ich will Deutsch lernen`; `Ich soll Wasser trinken`. التصريف والمصدر في النهاية صحيحان؛ ترجمة المعنى مقيدة بالسياق.

**الأخطاء الشائعة الـ18 كما عُرضت:**

| المرجع | الخطأ ← التصحيح | الحكم المحدد |
|---|---|---|
| t1-m1 | `Ich habe gelernt Deutsch.` → `Ich habe Deutsch gelernt.` | ترتيب غير محايد في الجملة الرئيسية المقصودة؛ الشرح لا يمنع كل تقديم بؤري. |
| t1-m2 | `Ich bin Deutsch gelernt.` → `Ich habe Deutsch gelernt.` | المساعد الخطأ لهذا المثال المتعدي المحدد. |
| t1-m3 | `Ich habe Deutsch lernte.` → `Ich habe Deutsch gelernt.` | خلط صيغة Präteritum بالمساعد في Perfekt المطلوب. |
| t1-m4 | `Ich habe gearbeit.` → `Ich habe gearbeitet.` | `arbeiten` يأخذ `-et` في Partizip II. |
| t1-m5 | `Ich habe getrinkt.` → `Ich habe getrunken.` | الصيغة القوية المعجمية لـ`trinken`. |
| t2-m1 | `Ich habe nach Berlin gefahren.` → `Ich bin nach Berlin gefahren.` | `fahren` بمعنى السفر إلى الوجهة في المثال. |
| t2-m2 | `Ich bin ein Buch gelesen.` → `Ich habe ein Buch gelesen.` | اختيار المساعد مع `lesen` والمفعول في هذا المثال. |
| t2-m3 | `Ich nach Berlin gefahren.` → `Ich bin nach Berlin gefahren.` | حذف المساعد؛ Perfekt يحتاج إلى الجزء المصرف. |
| t2-m4 | `Wir haben zu Hause geblieben.` → `Wir sind zu Hause geblieben.` | `bleiben` محفوظ مع `sein` هنا. |
| t2-m5 | `Ich bin gut geschlafen.` → `Ich habe gut geschlafen.` | `schlafen` مع `haben` في هذا المثال النشاطي. |
| t3-m1 | `Ich habe meine Oma gebesucht.` → `Ich habe meine Oma besucht.` | لا `ge-` إضافية مع البادئة غير المنفصلة `be-`. |
| t3-m2 | `Ich habe in Tunis gestudiert.` → `Ich habe in Tunis studiert.` | فعل `-ieren` بلا `ge-`. |
| t3-m3 | `Ich habe geaufstanden.` → `Ich bin aufgestanden.` | موضع `ge-` بين البادئة والجذع، مع المساعد المناسب. |
| t3-m4 | `Hast du mich angeruft?` → `Hast du mich angerufen?` | Partizip II القوي `gerufen` بعد البادئة `an-`. |
| t3-m5 | `Ich habe das nicht verstehen.` → `Ich habe das nicht verstanden.` | يلزم Partizip II بعد `haben`، لا المصدر. |
| t4-m1 | `Er willt nach Berlin fahren.` → `Er will nach Berlin fahren.` | `er will` بلا `t` زائدة. |
| t4-m2 | `Ich will lernen Deutsch.` → `Ich will Deutsch lernen.` | المصدر المرتبط بالفعل الناقص في آخر المجال الفعلي. |
| t4-m3 | `Du soll mehr für die Prüfung lernen.` → `Du sollst mehr für die Prüfung lernen.` | تصريف `du sollst`; معنى النصيحة سياقي. |

### ملخص `fehlerUndTipps` والملاحظة السياقية

| البند | المثال/النصيحة | نتيجة المراجعة |
|---|---|---|
| mistake-1 | `Ich habe gelernt Deutsch.` → `Ich habe Deutsch gelernt.` | تصحيح ترتيب محايد في الجملة الرئيسية الخبرية؛ الشرح يقيّده بالسياق ولا يمنع كل تقديم بؤري. |
| mistake-2 | `Ich habe nach Berlin gefahren.` → `Ich bin nach Berlin gefahren.` | صحيح في معنى السفر إلى وجهة، لا تعميم على كل معنى `fahren`. |
| mistake-3 | `Ich habe meine Oma gebesucht.` → `Ich habe meine Oma besucht.` | `be-` غير منفصلة؛ لا `ge-` إضافية. |
| mistake-4 | `Ich habe getrinkt.` → `Ich habe getrunken.` | الصيغة القوية `getrunken`. |
| mistake-5 | `Er willt nach Berlin fahren.` → `Er will nach Berlin fahren.` | `er will` بلا t؛ الشرح يفصل التصريف عن مباشرة الطلب. |
| tip-1 | المساعد في V2 في الخبر الرئيسي وPartizip عادةً في نهاية المجال؛ راجع الجملة الفرعية منفصلة. | تذكير مقيّد بنوع الجملة. |
| tip-2 | احفظ `haben/sein` مع الفعل ومعناه؛ المفعول قرينة لا خوارزمية. | لا يعمم اختبار المفعول. |
| tip-3 | `bleiben/sein/passieren` أمثلة تحفظ مع `sein` وليست قائمة حصرية. | يمنع «ثلاثة فقط». |
| tip-4 | راجع بنية البادئة والفعل؛ لا تستنتج `ge-` من النبر وحده. | متسق مع t3. |
| tip-5 | `will` من `wollen` وليست Futur I؛ قد يأتي Präsens مع ظرف المستقبل. | متسق مع t4 وe23. |
| cultural note | Perfekt شائع في محادثات كثيرة وPräteritum شائع في أنماط سردية كثيرة، مع اختلافات سياقية وإقليمية؛ لا يقتصر الثاني على الكتابة ولا تبقى صيغتا `war/hatte` وحدهما دائماً. | صياغة حذرة لا تحول ميلاً إقليمياً إلى قاعدة لكل المتحدثين. |

## المراجعة التراكمية: 3 بنود

| المعرّف | المفتاح | مراجعة الخيارات والسياق |
|---|---|---|
| r1 | `kann`؛ `Kannst` | `kannst/können/konnte` لا تناسب الشخص/الزمن المحددين في الخانة الأولى؛ `Kann/Können/Kannt` لا تطابق سؤال `du` في الثانية. الترتيب مع المصدر في آخر الجملة مناسب للمراجعة السابقة. |
| r2 | `ihn` | يعود الضمير إلى `der Bus` بوصفه مفعولاً مباشراً؛ `er` رفع، و`ihm` داتيف، و`es` لا يطابق الاسم المذكر. |
| r3 | `denn es regnet` | بعد `denn` جملة رئيسية بترتيب الفاعل ثم الفعل؛ `denn regnet es` يعكس الترتيب بلا سؤال، و`regnen` لا يطابق المفرد، و`regnete` يغير الزمن ويحذف الفاعل. الإحالة إلى الدرس المصدر موجودة. |

## بنك التدريب: كل تمرين من e1 إلى e26

| المعرّف | المفتاح/المعالجة | تدقيق المشتتات أو القيد السياقي |
|---|---|---|
| e1 | `gelernt` | `lernte` ماضٍ بسيط لا Partizip مطلوب؛ `gelernen` و`lernt` ليسا الصيغة المطلوبة بعد `habe`. |
| e2 | `getrunken` | الصيغة القوية المعيارية لـ`trinken`؛ `getrinkt`, `trinkte`, `getrunkt` لا تطابق Partizip II. |
| e3 | `bin` | `fahren` بمعنى السفر إلى Hamburg في هذا السياق يأخذ `sein`؛ `habe/war/werde` لا تكوّن المفتاح المطلوب. |
| e4 | `hat` | سُمّي الفاعل `Meine Freundin` لتثبيت المفرد؛ المفعول `einen langen Brief`. `ist/war/wird` ليست مساعد Perfekt المطلوب هنا؛ لا تُعمم إجابة السؤال على كل معاني الأفعال. |
| e5 | `Ich habe gestern einen Film gesehen` | يبدأ بـ`Ich` ويضع `gestern` قبل المفعول كما تطلب التعليمات، و`gesehen` في الآخر. قُيّد التمرين حتى لا يوحي بأن ترتيب مكوّنات الوسط لا يقبل غير ترتيب واحد في كل سياق. |
| e6 | تصحيح `gelernt Deutsch` إلى `Deutsch gelernt` | `gelernt Deutsch` وبدائل Präteritum لا تحقق الجملة الرئيسية الخبرية المقصودة؛ التفسير مقيد بهذا السياق ولا يقرر استحالة كل تقديم بؤري في الألمانية. |
| e7 | `aufgestanden` | `geaufstanden` يضع `ge-` في الموضع الخطأ، و`aufstanden/aufgestehen` لا يطابقان Partizip II المطلوب. |
| e8 | `besucht` | `besuchen` يبدأ ببادئة غير منفصلة فلا يضاف `ge-`; `gebesucht`, المصدر `besuchen`, و`besuchte` ليست المفتاح. |
| e9 | `studiert` | فعل `-ieren` يأخذ هنا `studiert` بلا `ge-`; `gestudiert/studierte/gestudier` مرفوضة لهذا الطلب. |
| e10 | `machen→gemacht`; `essen→gegessen`; `anrufen→angerufen`; `verstehen→verstanden`; `telefonieren→telefoniert`; `bleiben→geblieben` | روجعت كل المطابقات الست؛ تغطي ضعيفاً وقوياً ومنفصلاً وغير منفصل و`-ieren` و`bleiben`. لا تكرار في العناصر، واختبر محرك المطابقة تبديل كل زوج منفرداً. |
| e11 | `Wir sind zu Hause geblieben.` | `haben` مع `bleiben` في هذا المعنى، و`gebleibt`، والمصدر `bleiben` ليست صيغ هذا المثال. |
| e12 | `habe→bin` | المقصود `fahren` بمعنى السفر إلى Berlin، لذلك `sein`. استُبعدت `war` من قائمة التصحيح لتجنب بديل Präteritum الذي كان سيُربك سؤال تصحيح المساعد؛ القرار محلي بالجملة. |
| e13 | s1 صح؛ s2 خطأ؛ s3 خطأ؛ s4 صح | s1 يكرر القيام المبكر؛ s2 يناقض تناول الفطور؛ s3 خطأ لأن النص يستعمل المساعدين؛ s4 صحيح لـ`eingeschlafen` مع `sein`. لكل عبارة تعليل مرتبط بنص e13 القصير. |
| e14 | `Er hat seine Mutter angerufen.` | تحويل `ruft … an` إلى Perfekt مع إبقاء الفاعل أولاً؛ تدخل `ge-` بين البادئة المنفصلة `an` والجذع: `angerufen`. |
| e15 | `will`؛ `will`؛ `wollen` | تتبع `ich`, `er`, `wir`؛ رُفضت صيغ الشخص الخطأ مثل `willst`, `willt`, `wollt`, `wollen` حيث لا يطابق الضمير. |
| e16 | `sollst` | الطبيب يوصي صراحةً، لذا `sollen` هو المفتاح بحسب الخطاب. `willst/kannst/darfst` تغير الدلالة إلى رغبة/قدرة/إذن؛ ليست كلها أخطاء نحوية مطلقة خارج هذا السياق. |
| e17 | `Ich möchte bitte einen Kaffee.` | المطلوب صيغة طلب شائعة مهذبة. أُبقيت `Ich will einen Kaffee` مشتتاً مع توضيح أنه صحيح نحوياً وقد يكون مباشراً بحسب الموقف؛ `soll/muss` لا يؤديان فعل الطلب المقصود هنا. |
| e18 | `willt→will` | تصريف `er` هو `will` بلا `t` إضافية؛ `willt/wollt/wollen` لا تطابق الفاعل في الجملة. |
| e19 | `Wir wollen heute Abend ins Kino gehen` | تبدأ بـ`Wir`، وتُبقي `heute Abend` قبل `ins Kino` وفق القيد، وتضع المصدر في النهاية. |
| e20 | «الأفعال المنتهية بـ`-ieren` لا تأخذ `ge-`» | البدائل «قويّ»، «منفصل»، و«مع sein» لا تفسر `studiert`؛ الفعل هنا ضعيف وينتهي بـ`-ieren`. |
| e21 | `bin`; `habe` | `aufstehen` في معنى النهوض مع `sein` و`frühstücken` مع `haben`; بدائل `war/werde/wurde` لا توافق طلب Perfekt المحدد. |
| e22 | `Ich bin ins Museum gegangen.`؛ `Ich bin am Wochenende ins Museum gegangen.`؛ `Am Wochenende bin ich ins Museum gegangen.` | سُجلت ثلاثة أجوبة صحيحة تشمل إبقاء/حذف/تقديم ظرف الزمن؛ التعليمات تحدد الآن أن البداية تكون بـ`Ich` أو `am Wochenende` وأن Partizip يأتي أخيراً، اتساقاً مع البدائل المقبولة. |
| e23 | `Ich fahre morgen nach Berlin.` | السؤال يطلب صراحةً المضارع مع دلالة مستقبلية؛ البدائل تستخدم Futur I، أو Perfekt مع `gestern`، أو `sollte` (Konjunktiv II). هي أبنية ممكنة في سياقاتها، لكنها لا تجيب عن السؤال المحدد. |
| e24 | `lesen→haben+gelesen`; `fliegen nach Berlin→sein+geflogen`; `bleiben→sein+geblieben`; `schlafen acht Stunden→haben+geschlafen`; `einschlafen→sein+eingeschlafen` | روجعت المطابقات الخمس؛ صار لكل عنصر مقابل فريد كي لا تتكرر خيارات الجانب الأيمن وتتعذر المطابقة. شرحت المساعدات بحسب الاستعمال، لا قاعدة «كل حركة = sein». |
| e25 | «لا خطأ»: `Ich habe das nicht verstanden.` | الجملة صحيحة؛ `verstehen` ببادئة غير منفصلة `ver-` وصيغته `verstanden` بلا `ge-`. يعرض المكوّن خيار «لا خطأ» مستقلاً ويجب أن يرفض التصويبات البديلة. لا يزعم التدقيق الشامل أن هذا البند هو سبب إخفاق المجموعة؛ إخفاق التعليمات الذي ظهر فيها يعود إلى A1-11، كما هو موضح لاحقاً. |
| e26 | `Was hast du am Wochenende gemacht` | سؤال بأداة: `Was` أولاً، المساعد ثانياً، والظرف قبل Partizip وفق نص التعليمات. اختبر الترتيب القياسي والمقلوب؛ لم تُسجل له بدائل ترتيب أخرى. |

## الاختبار القصير: خمسة بنود

| المعرّف | المفتاح | مراجعة المشتتات |
|---|---|---|
| mt-a1-14-1 | `sind` في `spazieren gegangen` | `haben/werden` لا يوافقان التركيب الشائع المقصود؛ `waren` Präteritum لا Perfekt. |
| mt-a1-14-2 | `geschrieben` | صيغة قوية لـ`schreiben`; `geschreibt/geschreiben` غير صحيحتين و`schrieb` Präteritum. |
| mt-a1-14-3 | `reparieren` | ينتهي بـ`-ieren` فيكون `repariert` بلا `ge-`; `kaufen/hören/spielen` تكون `gekauft/gehört/gespielt`. |
| mt-a1-14-4 | `Meine Schwester hat in München studiert` | قُيد البدء بالمركّب الاسمي حتى لا تُحسب ترتيبات مختلفة للجملة نفسها خطأً بسبب أجزاء غير محددة. |
| mt-a1-14-5 | `sollst` | سياق نصيحة الوالدين يوجه إلى `sollen`; `willst/darfst/kannst` تعبر عن نية/إذن/قدرة بدلاً من النصيحة. |

## الكتابة المحددة

| المعرّف | المطلوب والمفتاح | الحد التربوي |
|---|---|---|
| wr-a1-14-1 | `Ich lerne Deutsch. → Ich habe Deutsch gelernt.` | تحويل جملة واحدة مع قيد إبقاء الفاعل أولاً؛ تشرح الإشارة أن `haben` صحيح في هذا المثال، لا قاعدة آلية من وجود المفعول. |
| wr-a1-14-2 | `Wir fahren nach Berlin. → Wir sind nach Berlin gefahren.` | التحويل يبقي الفاعل أولاً؛ `fahren` بمعنى السفر إلى وجهة هنا يأخذ `sein`، ولا يُعمم المفتاح على معنى قيادة مركبة. |
| wr-a1-14-3 | قالب البريد: `bin / gefahren / habe / getroffen / sind / gelaufen / haben / gegessen` | ثمانية فراغات موجّهة، وتُرفض الإجابة الناقصة/الخاطئة في خانة؛ ليست كتابة بريد حر. |

أزيل من مكوّن المسودة الحرة التقييم الرقمي/الحكم الآلي غير الموثوق وما قد يوحي بدرجة أو معيار Goethe/CEFR. أصبحت المسودة مساحة تدريب ومراجعة ذاتية ومسحاً للنص، بلا درجة وبلا تسجيل كدليل؛ تظل المهام المحددة وحدها هي التي تصحح وتنتج أدلة أداء.

## القراءة: `read-a1-14`

راجعت رسالة أمين إلى سلمى في **ست فقرات** وترجمتها فقرةً فقرة. تتناول الرسالة الوصول إلى برلين بالقطار، لقاء نادية، الأنشطة والطعام، المطر والمتحف، والعودة يوم الأحد؛ طول الألمانية المقاس يدوياً **231 كلمة مفصولة بمسافات**. النص مفيد لإظهار صيغ Perfekt، لكنه يحمل أسماء وأفعالاً وتراكيب أكثر من مجرد قائمة أفعال أساسية؛ وجود مسرد لا يثبت وحده الملاءمة الرسمية لـCEFR.

| السؤال | الفقرة | المفتاح | المشتتات ولماذا لا تطابق النص |
|---|---:|---|---|
| rq1 | 2 | `Mit dem Zug` | السيارة والطائرة والحافلة غير مذكورة وسيلةً للوصول؛ النص يقول إن أمين أخذ القطار. |
| rq2 | 3 | مشيا في المدينة وأكلا | المتحف في فقرة السبت التالية؛ البقاء في المنزل والاتصال فقط يناقضان أنشطة الفقرة. |
| rq3 | 4 | `Weil es geregnet hat` | المطر طوال اليوم هو سبب العدول عن التنزه والذهاب للمتحف؛ السعر والعمل والتعب غير مذكورة أسباباً. |
| rq4 | 2 | `sein — ich bin aufgestanden` | النص يورد المساعد صراحةً؛ `haben/werden/لا مساعد` لا تطابقه. |
| rq5 | 3 | لأن `probieren` ينتهي بـ`-ieren` | البدائل «قوي»، «منفصل»، أو «مع sein» تخلط قاعدة الصياغة ببنى أخرى. |
| rq6 | 5 | متعب لكن سعيد | اقتباس أمين يطابق الخيار؛ «فقط متعب/حزين/مريض» يحذف أو يناقض النص. |

**المسرد الاثنا عشري الذي فُحص:** `erzählen`, `zum ersten Mal`, `die Fahrt`, `dauern`, `getroffen`, `probieren`, `schmecken`, `deshalb`, `die Geschichte`, `eingeschlafen`, `gefallen`, `reisen`. روجعت ترجمة المعنى وربط المدخل بسياق النص.
**العبارات الجاهزة الست:** سؤال عن عطلة نهاية الأسبوع؛ `Ich bin zum ersten Mal in … gewesen`; مدة الرحلة؛ `Es hat mir sehr gut gefallen`; المطر؛ وإعادة السؤال بـ`Und du?`. صياغة النقاش اختيارية ولا تُقيّم ولا تثبت الأداء لمجرد فتحها.

## الاستماع: `ls-a1-14-1`

الرسالة الحوارية خمسة أسطر: تسأل نادية عن عطلة أمين، فيذكر النهوض والدراسة والاتصال بالعائلة يوم السبت، ثم الذهاب بالدراجة إلى البحيرة يوم الأحد؛ وتقول نادية إنها بقيت في المنزل لأنها مريضة.

| السؤال | المفتاح | المشتتات |
|---|---|---|
| lsq-a1-14-1 | تعلّم أمين واتصل بعائلته يوم السبت | الذهاب إلى البحيرة كان يوم الأحد؛ والبقاء في المنزل يخص نادية لا أمين. |
| lsq-a1-14-2 | `sein — ich bin geblieben` | `haben` و`werden` لا يوافقان تركيب `bleiben` في هذا المثال. سؤال مساعد/قاعدة، لا أحد دليليْن على هدف استخراج المعلومة z7. |
| lsq-a1-14-3 | `Mit dem Fahrrad` | السيارة أو المشي لا يطابقان الجملة الصريحة. هذا السؤال وسؤال السبت هما فقط أدلة z7. |

**حد الوسيط:** الصوت مولّد عبر `SpeechSynthesis` وصوت متصفح `de-DE`، لا تسجيل متحدث أصلي أو عينة ثابتة لمعايرة النطق. بعد كشف التفريغ تتغير بادئة الحدث إلى `listening-transcript:...` ولا تدخل في z7؛ اختبار الأدلة يراجع ذلك.

## النطق: ثماني ملاحظات

| الكلمة | النقطة التي تشرحها الملاحظة | الحد |
|---|---|---|
| `gelernt` | `ge-` غير منبورة، والنبر على `lern`، و`g` [ɡ] | مثال للكلمة، لا قاعدة شاملة على كل البوادئ. |
| `gemacht` | `ch` بعد `a` تقارب [x] | التقريب بالخاء العربية ليس تطابقاً صوتياً. |
| `gesprochen` | `sp` في بدء `sprechen` [ʃp] و`ch` بعد `o` [x] | وصف للصيغة المعروضة. |
| `gefahren` | نبر `fahr` و`a` طويلة؛ سماع نهاية `-en` | لا تعميم لحذف `e` في الكلام. |
| `aufgestanden` | موضع `ge-` بين `auf` والجذع؛ النبر خاص بالكلمة | لا يستنتج موضع `ge-` من النبر وحده. |
| `besucht` | لا `ge-` إضافية مع `be-` غير المنفصلة؛ النبر على `such` | يربط الصرف بالنطق من دون ادعاء أن كل البوادئ تتصرف هكذا. |
| `studiert` | `st` أول الكلمة [ʃt]، و`ie` طويلة والنبر على المقطع `-dier-` | صوت الكلمة فقط. |
| `gewesen` | `w` [v] و`s` بين الحركات [z]؛ `ge-` غير منبورة | نطق معياري شائع لا تقييم آلي للهجة. |

لا يحتوي الدرس على اختبار إنتاج صوتي موثوق. الصوت الاصطناعي أو مقارنة تفريغ المتصفح لا يثبت إتقان النطق أو الكلام.

## البطاقات: فحص فردي لـ25 بطاقة

| البطاقة | المدخل والترجمة | مثال ألماني فُحص |
|---|---|---|
| fc1 | `das Perfekt` — بنية `haben/sein + Partizip II` | `Im Gespräch benutzt man das Perfekt.` وصياغة الترجمة لا تحصر الماضي في Perfekt. |
| fc2 | `gemacht (machen)` — فعل | `Was hast du gestern gemacht?` |
| fc3 | `gelernt (lernen)` — تعلّم | `Ich habe zwei Stunden gelernt.` |
| fc4 | `gegessen (essen)` — أكل | `Wir haben im Restaurant gegessen.` |
| fc5 | `getrunken (trinken)` — شرب | `Ich habe einen Tee getrunken.` |
| fc6 | `gefahren (fahren)` — سافر/ذهب بمركبة | `Ich bin nach Berlin gefahren.`؛ معنى السفر يفسر `sein`. |
| fc7 | `gegangen (gehen)` — ذهب | `Wir sind ins Kino gegangen.` |
| fc8 | `gewesen (sein)` — كان | `Ich bin in Berlin gewesen.`؛ صيغة صحيحة وإن لم تكن الوحيدة للتعبير عن الماضي. |
| fc9 | `geblieben (bleiben)` — بقي | `Wir sind zu Hause geblieben.` |
| fc10 | `aufgestanden (aufstehen)` — نهض | `Ich bin um sechs aufgestanden.` |
| fc11 | `angerufen (anrufen)` — اتصل هاتفياً | `Ich habe meine Mutter angerufen.` |
| fc12 | `besucht (besuchen)` — زار | `Wir haben unsere Oma besucht.`؛ بلا `ge-` إضافية. |
| fc13 | `verstanden (verstehen)` — فهم | `Ich habe das nicht verstanden.`؛ بلا `ge-` بعد `ver-`. |
| fc14 | `studiert (studieren)` — درس في الجامعة | `Sie hat in Tunis studiert.`؛ لا `ge-` مع `-ieren`. |
| fc15 | `wollen` — يريد/ينوي بحسب السياق | `Ich will Deutsch lernen.`؛ ليس Futur I. |
| fc16 | `sollen` — ينبغي/يُطلب بحسب السياق | `Der Arzt sagt, ich soll Wasser trinken.` |
| fc17 | `gestern` — أمس | `Gestern habe ich viel gearbeitet.`؛ V2 مع عنصر زمني أول. |
| fc18 | `letztes Wochenende` — عطلة الأسبوع الماضية | `Letztes Wochenende bin ich gereist.` |
| fc19 | `gefallen (hat gefallen)` — أعجب | `Berlin hat mir sehr gefallen.`؛ تركيب المفعول غير المباشر ظاهر في المثال. |
| fc20 | `die Fahrt` — الرحلة | `Die Fahrt hat vier Stunden gedauert.`؛ المدة ليست مفعول Akkusativ هنا. |
| fc21 | `treffen` — يقابل/يلتقي | `In Berlin habe ich Nadia getroffen.` |
| fc22 | `probieren` — يجرّب/يذوق | `Ich habe eine Currywurst probiert.`؛ Partizip بلا `ge-` بسبب `-ieren`. |
| fc23 | `schmecken` — يكون مذاقه طيباً | `Es hat mir gut geschmeckt.` |
| fc24 | `deshalb` — لذلك | `Es hat geregnet, deshalb sind wir ins Museum gegangen.`؛ الفعل في V2 بعد أداة الربط الظرفية. |
| fc25 | `das Museum` — المتحف | `Im Museum habe ich viel gelernt.`؛ المفعول/المكان وترتيب الفعل متسقان. |

## الوساطة والتفاعل المفتوح

- `med-a1-14-1`: رسالة قصيرة عن السبت في كولونيا والأخ والطعام والمشي عند الراين، ثم المطر والبقاء في المنزل يوم الأحد. روجعت نقاط الإجابة النموذجية الثلاث مقابل النص. لكنه إنتاج/تلخيص عربي مفتوح، بلا مصحح أو معيار أداء صالح؛ لا يُربط بهدف إتقان ولا يُحتسب كدليل وساطة.
- `int-a1-14-1`: أربع جولات. لكل جولة إجابة مقصودة واحدة ومشتت واحد وردّ تالٍ؛ جرى فحصها فردياً: رحلة إلى هامبورغ مع `bin gefahren`؛ وصف المطر والشمس؛ `sind ... gegangen` مع `haben ... gefrühstückt`; ثم موضع المصدر في `Ja, ich will im Sommer wieder nach Hamburg fahren`. المشتتات نحوية/ترتيبية في المثال المعروض، لا برهان على أن الردود الطبيعية الأخرى غير مقبولة. التفاعل اختيار نصّي، لا يقيس كلاماً منتجاً.

## التصحيحات والقرارات التحريرية

| التصنيف | ما عولج أو ما ينبغي فهمه |
|---|---|
| خطأ/تعميم مؤكد في النسخة السابقة | رُفض حصر Perfekt في الكلام، وحصر Präteritum في الكتابة، واختزال `haben/sein` إلى قاعدة مفعول واحدة أو قائمة مغلقة من ثلاثة أفعال، واستخدام موضع النبر وحده لتقرير `ge-`. |
| بديل صحيح بحسب السياق | `Ich will einen Kaffee` جملة سليمة وقد تكون مباشرة أكثر؛ `soll/will` يختلف معناهما بحسب المقام؛ `fahren` يتغير مساعده بحسب معنى السفر/القيادة؛ لا تُعرض بدائل أزمنة أخرى كأخطاء عامة إذا كان سؤال النشاط لا يطلبها تحديداً. |
| ضبط تربوي | قُيّدت تعليمات ترتيب الكلمات في e5/e19/e26 وmt4؛ صار e4 بفاعل صريح؛ قُيّدت التحويلات wr1/wr2/e14 بإبقاء الفاعل أولاً، ووضحت e22 مواضع الظرف المقبولة؛ أزيل خيار الزمن البديل `war` من تصحيح المساعد في e12؛ وقُيّدت e23 بطلب المضارع مع ظرف للمستقبل. |
| نتيجة مضللة | أزيلت درجة الكتابة الحرة والحكم/التوصية الآلية؛ لا توجد دعوى اعتماد أو جاهزية امتحان أو تحقق CEFR. |
| تنظيم المسار | بقي `a1-14` في بياناته تحت `unitId: a1-07`، ولم يُنشأ درس/وحدة إضافيان ضمن هذه الدفعة. عُدّل الوصف العام ليقول إن A1 يتضمن مدخلاً إلى Perfekt لا إن Perfekt «يغلق المستوى»، ووُصف Unit 7 بأنه تسوق وأرقام مع مدخل تطبيقي إلى Perfekt في A1-14. يستحق موضع الدرس داخل خريطة الوحدات قراراً منهجياً مستقلاً. |
| مدد الدروس | لا يوجد حقل مدة في A1-14 أو بياناته الوصفية؛ الاختبار المركّز يفحص ذلك. |

## مصادر لغوية موثوقة استُخدمت

استُخدمت المصادر للتحقق من قواعد محددة وصيغ أفعال، لا لإثبات أن محتوى الدرس معتمد أو معاير لـCEFR.

- **IDS Grammis — بنية Perfekt:** [Das Perfekt](https://grammis.ids-mannheim.de/vggf/2227)، و[Präteritum مقابل Präsensperfekt](https://grammis.ids-mannheim.de/systematische-grammatik/1442) للسياق والنوع النصي والاستعمال الإقليمي.
- **IDS Grammis — اختيار المساعد وتكوين Partizip:** [haben oder sein?](https://grammis.ids-mannheim.de/kontrastive-grammatik/4147)، و[Partizip II](https://grammis.ids-mannheim.de/systematische-grammatik/1283).
- **IDS Grammis — الأفعال الناقصة:** [Modalverb](https://grammis.ids-mannheim.de/terminologie/155)، [Modalverben in der gesprochenen Sprache](https://grammis.ids-mannheim.de/vggf/2199)، و[Flexion der Modalverben](https://grammis.ids-mannheim.de/kontrastive-grammatik/3571). تدعم أن `mögen` من الأفعال الناقصة وأن `möchte` صيغة Konjunktiv II شائعة، مع تعدد استعمالات `wollen/sollen`.
- **Duden — صيغ الأفعال ومعانيها:** [fahren](https://www.duden.de/rechtschreibung/fahren)، [gefahren](https://www.duden.de/rechtschreibung/gefahren)، [trinken](https://www.duden.de/rechtschreibung/trinken)، [einschlafen](https://www.duden.de/rechtschreibung/einschlafen)، [bleiben](https://www.duden.de/rechtschreibung/bleiben)، [schreiben](https://www.duden.de/rechtschreibung/schreiben)، [besuchen](https://www.duden.de/rechtschreibung/besuchen)، [verstehen](https://www.duden.de/rechtschreibung/verstehen)، [anrufen](https://www.duden.de/rechtschreibung/anrufen)، [aufstehen](https://www.duden.de/rechtschreibung/aufstehen)، [studieren](https://www.duden.de/rechtschreibung/studieren)، [sollen](https://www.duden.de/rechtschreibung/sollen)، و[mögen](https://www.duden.de/rechtschreibung/moegen).
- **النطق:** مواد Deutsche Welle/Cornelsen التعليمية عن [نطق المتعلمين](https://www.dw.com/downloads/26294179/lektion1-learner-pronunciation.pdf) و[sp/st](https://www.dw.com/downloads/26294373/lektion19-lerner-aussprache.pdf)، وIDS Grammis عن [Schwa](https://grammis.ids-mannheim.de/terminologie/237) و[Schwa في علامات التصريف](https://grammis.ids-mannheim.de/kontrastive-grammatik/3520). التقريبات العربية لا تمثل IPA كاملاً أو تقييماً للنطق.

## خريطة الأدلة التقنية وحدود العرض

| الهدف | معرفات الأداء الدقيقة كما تسجلها الواجهات |
|---|---|
| z1 | `writing:a1-14:wr-a1-14-1`, `writing:a1-14:wr-a1-14-2`, `practice:a1-14:e14`, `practice:a1-14:e22` |
| z2 | `practice:a1-14:e1/e2/e7/e8/e9`; ويظهر في `lesson-flow` فقط `flow-practice:a1-14:e1/e2` من هذه المجموعة. |
| z3 | `practice:a1-14:e3/e4/e12/e21/e24`, `flow-practice:a1-14:e3/e4`, `mini-test:a1-14:mt-a1-14-1`, `flow-mini-test:a1-14:mt-a1-14-1` |
| z4 | `practice:a1-14:e15/e16/e17/e18/e19`, `mini-test:a1-14:mt-a1-14-5`, `flow-mini-test:a1-14:mt-a1-14-5` |
| z5 | `writing:a1-14:wr-a1-14-3` |
| z6 | `reading:read-a1-14:rq1/rq2/rq3/rq6` |
| z7 | `listening:ls-a1-14-1:lsq-a1-14-1`, `listening:ls-a1-14-1:lsq-a1-14-3` |

`practice` يعرض في كل دفعة خمسة تمارين مختارة عشوائياً من البنك، لا البنك كاملاً دفعة واحدة؛ لا تُنسب أحداثه إلى `lesson-flow`. يكشف `lesson-flow` تدريجياً أول `min(4, practiceBank.length)` فقط، أي e1–e4 هنا. ويعرض مسار mini-test التدريجي أول ثلاثة أسئلة اختيار من متعدد من البنك؛ في الدرس هي mt1 وmt3 وmt5، ولا يُسجل mt2/mt4 كبادئة `flow-mini-test`. أُدرجت هذه القيود في الاختبار كي لا تتسرب بادئات غير صحيحة إلى الأدلة.

إظهار نص الاستماع يغير بادئة الحدث إلى `listening-transcript:a1-14:ls-a1-14-1:...`؛ وهي ليست ضمن z7. كذلك لا تدخل review أو mediation أو interaction أو pronunciation أو المسودة الحرة في أي هدف. إتمام جميع المهام المعينة بشكل صحيح هو المطلوب، وليس فتحها أو عرضها.

## نتائج الاختبار وحدود الدفعة

- `npm test -- --run src/data/lessons/a1/a1-14.test.ts`: **7/7 ناجحة**. الاختبار يراجع الأهداف والبادئات، حالات الأداء الصحيحة/الخاطئة، 46 مفتاحاً ومشتتاً، المراجع والبطاقات والحوار، وغياب حقول المدة.
- `npx eslint src/data/lessons/a1/a1-14.ts src/data/lessons/a1/a1-14.test.ts src/data/lessons/meta.ts src/lib/constants/curriculum.ts src/components/lesson/sections/free-writing-trainer.tsx src/components/lesson/sections/schreiben.tsx`: **ناجح**.
- `git diff --check` للمسارات المتعلقة: **ناجح**. الفحص الشامل لكل فرق الشجرة يلتقط مسافة زائدة سابقة في `src/app/page.tsx` خارج النطاق؛ تُركت دون تعديل.
- `npm test -- --run`: **403 ناجحة و8 فاشلة من 411** في 48 ملفاً. الفشل: خمسة في `academic-depth.test.ts` تخص A1-03/A1-06؛ فشلان في `integrity.test.ts` هما العبارة الخادعة المنفردة في A1-11 (e27) وعنوان النطق غير المسند في A1-03؛ وفشل واحد في `review-generator.test.ts` لغياب إحالة مصدر يتوقعها الاختبار.
- للتوضيح: ظهرت في ملخص سابق نسبة إخفاق تعليمات `e25` إلى A1-14، لكن إعادة تشغيل الاختبارات حددت النص الفاشل فعلياً في `src/data/lessons/a1/a1-11.ts`، لا في A1-14. تعليمات A1-14 e25 الحالية عامة، واجتاز e25 اختبار المفتاح/المشتت وعدم تكرار خيار «لا خطأ». لم يُعدّل A1-11 لأنه خارج هذه الدفعة.
- `npm run typecheck -- --pretty false`: يفشل بأربعة تشخيصات خارج النطاق: `learning-path-client.tsx:129,137` (`LevelCode[] | undefined`)، `unit-row.tsx:22` (`onToggle` غير موجود في props)، و`src/lib/tests/test-engine.test.ts:119` (أنواع مختلفة داخل `Map`). لم يظهر A1-14 بينها.
- لم يُشغّل build؛ فحص الأنواع العام معروف الفشل في المسارات أعلاه. يطبع Vitest تحذيراً غير مانع عن `configLoader: 'native'`.
- لا يُصلح هذا التقرير إخفاقات A1-03/A1-06/A1-11 أو `review-generator`، ولا يشهد بمراجعة بقية وحدات A1–B2. يبقى تقويم الصوت الاصطناعي، وتقييم الكلام/النطق والكتابة الحرة، والحمل المعجمي للقراءة، وترتيب الدرس داخل الوحدة، مسائل ذات حدود/عمل لاحق.

## الملفات ذات الصلة بهذه الدفعة

- `src/data/lessons/a1/a1-14.ts` — المحتوى والأهداف والتمارين والوسائط والبطاقات.
- `src/data/lessons/a1/a1-14.test.ts` — اختبارات مفصلة لمفاتيح المهام والأدلة والاتساق.
- `src/data/lessons/meta.ts` و`src/lib/constants/curriculum.ts` — تحسين الوصف الخاص بـA1-14. تعديل A1-13 السابق في `meta.ts` موجود في HEAD؛ فرق العمل الحالي في الملف يقتصر على صف A1-14، ويجب فحصه عند staging.
- `src/components/lesson/sections/free-writing-trainer.tsx` و`src/components/lesson/sections/schreiben.tsx` — مسودة ذاتية بلا حكم آلي أو ادعاء اعتماد.
- `PROFESSIONAL_CONTINUATION_PROMPT_AR.md` — سجل حالة الدفعة التالية والحدود والفحوص.
