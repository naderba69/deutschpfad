# جرد مصادر المحتوى والنصوص والوسائط في المشروع

**تاريخ آخر جرد للأعداد:** 2026-10-25. **آخر تحديث لحالات الوسائط:** المستوى B2 كاملاً، 2026-10-28 (لا يعيد هذا التحديث جرد الأعداد).
**الغرض:** سجل تغطية شامل بحسب الملفات، يمنع الاقتصار على عينات. وجود الملف في الجرد لا يعني تدقيقه؛ لا تُغلق مادة إلا بعد فحص عناصرها اللغوية والتربوية ومصادر ادعاءاتها ونتائج الاختبار ذات الصلة.

## النطاق الحالي

- الملفات المدرجة في جرد العمل الحالي: **2101**: `904` ملفاً تحت `src` (منها `885` ملفاً نصياً غير اختباري و`19` أصلاً ثابتاً؛ الملفات النصية تشمل `485` تحت `src/data` و`400` خارجها)، `950` ملفاً فعلياً في `public`، `164` وثيقة في `docs`، `18` ملفاً تحت `scripts`، `50` ملف E2E، و`15` ملفاً جذرياً غير مخفي. تسجل قائمة `public` أيضاً مسارين مفقودين للتتبع، ولا يدخلان في العدد.
- استُبعدت ملفات اختبارات الوحدة المنتهية بـ`.test.*`/`.spec.*` من قائمة مواد التعلم المصدرية؛ بقيت ملفات `e2e` في جرد منفصل لأن نصوصها قد تتضمن واجهة مستخدم أو أمثلة. تُدرج الملفات الثابتة والوسائط حتى يتحدد إن كانت مادة متعلمة أو مجرد بنية.
- هذا جرد ملفات من مساحة العمل الحالية، وقد يتضمن ملفات غير متتبعة أو يستبعد ملفات مولدة/مخفية. يجب إعادة توليده/مقارنته بـ`git ls-files` عند تغيّر المستودع. لا يشمل ملفات `.git` أو `node_modules` أو نواتج البناء.

## حدود ما لم يُحسم

- لا توجد مراجعة شاملة حتى الآن لكل الملفات المدرجة. حالة «لم تبدأ» تعني عدم وجود دليل إغلاق، لا حكماً على صحة المادة.
- الصوت له فحوص مستقلة: يُراجع النص والمطابقة النصية والملف والربط والتشغيل بوسائلها وسكريبتاتها المناسبة، وتُوثق نتائج كل فحص. لا تُستخدم نتيجة فحص آلي محدود لإثبات جودة النطق أو طبيعية الأداء؛ هذا قيد على نوع الادعاء لا حالة إنجاز ولا سبب لإسقاط بقية الفحوص.
- تُفحص المصادر التعليمية والمراجع عند الادعاءات اللغوية/الثقافية/الصحية/القانونية. لا يُدّعى اعتماد CEFR/Goethe الرسمي دون مصدر مناسب.
- لا توجد مراجعة بشرية متاحة؛ السجل لا يشترطها ولا يدّعي حصولها.

## سجل مواد `src/data`

ملفات الدروس تتبع حالة كل درس في `docs/LESSON-REVIEW-TRACKER-AR.md`. ملفات البيانات الأخرى لم تبدأ بعد. أسماء المجلدات مجرد تصنيف أولي، ولا تثبت ملاءمة مستوى أو نوع مادة.

| المجال | الملف | الحالة |
|---|---|---|
| `dialogues` | `src/data/dialogues/a1/part1.ts` | اكتمل التدقيق النصي لكل 5 حوارات و30 جولة و17 سؤالاً و51 خياراً و25 مفردة؛ عُدلت مواضع محددة وثُبتت باختبارات. المطابقة المرجعية شواهدها موثقة انتقائياً لا لكل حكم/ترجمة، والصوت ومستوى CEFR الرسمي خارج هذا النطاق. التقرير: `docs/DIALOGUES-A1-PART1-REVIEW-AR.md` |
| `dialogues` | `src/data/dialogues/a1/part2.ts` | اكتمل المرور النصي على 5 حوارات/30 جولة/15 سؤالاً/45 خياراً/26 مفردة، وثُبتت تعديلات مختارة بالاختبارات. مصادر Duden موثقة للأحكام المحددة فقط؛ جُلبت PONS لمداخل ثنائية محددة، واستُخدمت مراجع بديلة لـ`T-Shirt` و`zu Fuß` وسند تقاربي فقط لـ`Stadtzentrum`. أُضيفت في مرور المتابعة مداخل PONS أخرى (منها `Zimmer`, `Stadtrand`, `Dorf`, `Kleidung`, `Glückwunsch`, `Kunde`, وغيرها) وسُجلت التحسينات التحريرية، لكن المطابقة الخارجية لكل الظهورات والتراكيب ما زالت جزئية؛ الصوت ومواءمة CEFR الرسمية غير منجزين. التقرير: `docs/DIALOGUES-A1-PART2-REVIEW-AR.md` |
| `dialogues` | `src/data/dialogues/a1/part3.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/a1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/a2/part1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/a2/part2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/a2/part3.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/a2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/b1/part1.ts` | روجع عنصر B1-02 المرتبط فقط؛ بقية الملف غير مشمولة بهذه الجولة |
| `dialogues` | `src/data/dialogues/b1/part2.ts` | تحققنا من أن b1-10-nachhilfe ليس مورداً مرتبطاً بـB1-10؛ بقية الملف غير مشمولة |
| `dialogues` | `src/data/dialogues/b1/part3.ts` | روجع `b1-12-geld` ضمن موارد B1-12 و`b1-15-wohnungswechsel` ضمن B1-10؛ `b1-11-panne` مرتبط بـB1-09؛ بقية الملف غير مشمولة. تفاصيل B1-12 في تقريره |
| `dialogues` | `src/data/dialogues/b1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/b2/part1.ts` | روجع `b2-01-gehaltsverhandlung` مورداً مرتبطاً بـB2-06 (وسيناريوه ومحاكاته وحدود صوت MP3)، و`b2-03-konflikt` لـB2-05؛ بقية العناصر خارج نطاق هذه الجولات. تقارير B2-03 وB2-05 وB2-06 |
| `dialogues` | `src/data/dialogues/b2/part2.ts` | روجع `b2-08-praesentation` لـB2-06، و`b2-07-bewerbung-vertrag` لـB2-03/B2-07، و`b2-09-wohnungsvertrag` لـB2-03؛ كما روجع `b2-10-international` لـB2-08 ونُقح ليعرض خبرة مهنية فردية في محاكاة خيالية لا تعميماً ثقافياً. اجتازت ملفات MP3 الستة فك الترميز ومؤشرات الإشارة الخشنة؛ الملف السادس منخفض المستوى نسبياً، ولم تُستمع أو تُطابق بالنص المحرر. بقية الحوارات خارج النطاق؛ التفاصيل في تقارير الدروس |
| `dialogues` | `src/data/dialogues/b2/part3.ts` | روجع `b2-11-verhandlung-kunde` ضمن B2-02 و`b2-13-flug` ضمن موارد B2-03؛ بقيت بقية عناصر الملف خارج النطاق. التفاصيل في تقريري الدرسين |
| `dialogues` | `src/data/dialogues/b2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/index.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `dialogues` | `src/data/dialogues/types.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `diktate.ts` | `src/data/diktate.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model2-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model2-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model2-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model2-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model3-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model3-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model3-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-model3-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a1-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model2-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model2-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model2-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model2-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model3-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model3-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model3-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-model3-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/a2-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model2-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model2-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model2-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model2-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model3-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model3-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model3-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-model3-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b1-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-grammatik.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-hoeren-audio-doc.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-hoeren-audio.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-hoeren-b.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-hoeren-c.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-hoeren.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-lesen-b.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-lesen-c.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-lesen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-schreiben-b.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-schreiben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-simulation-data.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-sprechen-audio.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-sprechen-b.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/b2-sprechen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/fallstricke.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/index.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/level-audio.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/level-models.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `exams` | `src/data/exams/strategien.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `faq.ts` | `src/data/faq.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `grammar` | `src/data/grammar/reference-a1a2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `grammar` | `src/data/grammar/reference-b1b2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `grammar` | `src/data/grammar/reference-types.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `grammar` | `src/data/grammar/reference.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `hoeren` | `src/data/hoeren/library.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `kollokationen.ts` | `src/data/kollokationen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `landeskunde` | `src/data/landeskunde/index.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `lessons` | `src/data/lessons/a1/a1-00/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-00/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-00/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-00/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-00/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-00.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01/part2.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01/review.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-01.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-02/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-02/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-02/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-02/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-02/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-02.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-03/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-03/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-03/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-03/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-03/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-03.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-04/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-04/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-04/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-04/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-04/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-04.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-05/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-05/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-05/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-05/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-05/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-05.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-06/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-06/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-06/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-06/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-06/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-06.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-07/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-07/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-07/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-07/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-07/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-07.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-08/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-08/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-08/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-08/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-08/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-08.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-09/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-09/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-09/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-09/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-09/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-09.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-10/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-10/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-10/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-10/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-10/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-10.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-11/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-11/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-11/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-11/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-11/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-11-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-11.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-12/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-12/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-12/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-12/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-12/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-12-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-12.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-13/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-13/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-13/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-13/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-13/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-13.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-14/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-14/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-14/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-14/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-14/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a1/a1-14.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-01/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-01/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-01/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-01/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-01/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-01.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-02/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-02/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-02/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-02/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-02/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-02.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-03/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-03/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-03/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-03/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-03/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-03-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-03.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-04/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-04/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-04/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-04/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-04/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-04.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-05/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-05/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-05/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-05/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-05/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-05-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-05.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-06/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-06/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-06/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-06/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-06/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-06-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-06.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-07/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-07/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-07/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-07/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-07/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-07-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-07.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-08/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-08/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-08/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-08/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-08/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-08-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-08.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-09/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-09/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-09/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-09/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-09/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-09-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-09.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-10/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-10/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-10/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-10/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-10/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-10-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-10.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-11/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-11/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-11/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-11/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-11/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-11-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-11.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-12/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-12/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-12/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-12/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-12/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-12.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-13/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-13/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-13/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-13/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-13/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/a2/a2-13.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-01/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-01/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-01/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-01/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-01/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-01/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-01.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-02/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-02/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-02/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-02/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-02/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-02/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-02.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-03/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-03/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-03/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-03/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-03/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-03/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-03.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-04/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-04/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-04/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-04/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-04/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-04/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-04.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-05/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-05/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-05/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-05/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-05/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-05/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-05.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-06/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-06/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-06/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-06/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-06/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-06/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-06.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-07/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-07/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-07/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-07/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-07/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-07/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-07.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-08/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-08/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-08/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-08/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-08/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-08/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-08.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-09/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-09/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-09/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-09/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-09/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-09/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-09.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-10/cards.ts` | روجع ضمن B1-10؛ سجل النتائج والحدود في `B1-10-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-10/intro.ts` | روجع ضمن B1-10؛ أضيف e11 إلى أدلة z2؛ التفاصيل في `B1-10-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-10/practice.ts` | روجع ضمن B1-10؛ ضُبطت الشروح القانونية/النحوية؛ التفاصيل في `B1-10-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-10/reading.ts` | روجع ضمن B1-10؛ وُسم النص بالخيال ووُئمت الأسئلة والترجمة؛ التفاصيل في `B1-10-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-10/skills.ts` | روجع ضمن B1-10؛ IPA وإفصاح حدود TTS/الصوت محدثان؛ التفاصيل في `B1-10-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-10/theorie.ts` | روجع ضمن B1-10؛ ضُيقت التعميمات النحوية؛ التفاصيل في `B1-10-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-10.ts` | روجع ملخصه ضمن B1-10؛ التفاصيل في `B1-10-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-11/cards.ts` | روجع ضمن B1-11؛ النتائج والحدود في `B1-11-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-11/intro.ts` | روجع ضمن B1-11؛ النتائج والحدود في `B1-11-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-11/practice.ts` | روجع ضمن B1-11؛ النتائج والحدود في `B1-11-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-11/reading.ts` | روجع ضمن B1-11؛ النتائج والحدود في `B1-11-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-11/skills.ts` | روجع ضمن B1-11؛ النتائج والحدود في `B1-11-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-11/theorie.ts` | روجع ضمن B1-11؛ النتائج والحدود في `B1-11-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-11.ts` | روجع تجميعه وملخصه ضمن B1-11؛ النتائج في `B1-11-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-12/cards.ts` | روجع ضمن B1-12؛ التفاصيل والفحوص والحدود في `B1-12-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-12/intro.ts` | روجع ضمن B1-12؛ التفاصيل والفحوص والحدود في `B1-12-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-12/practice.ts` | روجع ضمن B1-12؛ التفاصيل والفحوص والحدود في `B1-12-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-12/reading.ts` | روجع ضمن B1-12؛ التفاصيل والفحوص والحدود في `B1-12-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-12/skills.ts` | روجع ضمن B1-12؛ التفاصيل والفحوص والحدود في `B1-12-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-12/theorie.ts` | روجع ضمن B1-12؛ التفاصيل والفحوص والحدود في `B1-12-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b1/b1-12.ts` | روجع التجميع وملخص الدرس ضمن B1-12؛ التفاصيل في `B1-12-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-01/cards.ts` | روجع ضمن B2-01؛ الإصلاحات والمراجع والفحوص والحدود في `B2-01-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-01/intro.ts` | روجع ضمن B2-01؛ الإصلاحات والمراجع والفحوص والحدود في `B2-01-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-01/practice.ts` | روجع ضمن B2-01؛ الإصلاحات والمراجع والفحوص والحدود في `B2-01-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-01/reading.ts` | روجع ضمن B2-01؛ الإصلاحات والمراجع والفحوص والحدود في `B2-01-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-01/skills.ts` | روجع ضمن B2-01؛ الإصلاحات والمراجع والفحوص والحدود في `B2-01-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-01/theorie.ts` | روجع ضمن B2-01؛ الإصلاحات والمراجع والفحوص والحدود في `B2-01-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-01.ts` | روجع تجميع الدرس وملخصه ضمن B2-01؛ التفاصيل والفحوص في `B2-01-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-02/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-02/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-02/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-02/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-02/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-02/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-02.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-03/cards.ts` | روجع ضمن B2-03؛ الإصلاحات والمصادر والفحوص والحدود في `B2-03-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-03/intro.ts` | روجع ضمن B2-03؛ الإصلاحات والمصادر والفحوص والحدود في `B2-03-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-03/practice.ts` | روجع ضمن B2-03؛ الإصلاحات والمصادر والفحوص والحدود في `B2-03-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-03/reading.ts` | روجع ضمن B2-03؛ الإصلاحات والمصادر والفحوص والحدود في `B2-03-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-03/skills.ts` | روجع ضمن B2-03؛ الإصلاحات والمصادر والفحوص والحدود في `B2-03-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-03/theorie.ts` | روجع ضمن B2-03؛ الإصلاحات والمصادر والفحوص والحدود في `B2-03-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-03.ts` | روجع تجميع الدرس وبياناته ضمن B2-03؛ التفاصيل في `B2-03-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-04/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-04/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-04/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-04/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-04/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-04/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-04.ts` | راجع ضمن نطاق B2-04؛ التفاصيل والاختبارات والحدود في `docs/B2-04-REVIEW-NOTES-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-05/cards.ts` | روجع ضمن B2-05؛ وُسمت الوساطة بأنها مثال افتراضي، ووُوئم الهدف والبطاقات؛ التفاصيل في تقرير B2-05 |
| `lessons` | `src/data/lessons/b2/b2-05/intro.ts` | روجع ضمن B2-05؛ وُوئمت أهداف القراءة والجسيمات مع أداء التمارين؛ التفاصيل في تقرير B2-05 |
| `lessons` | `src/data/lessons/b2/b2-05/practice.ts` | روجع ضمن B2-05؛ صُححت وظائف الجسيمات ومطابقة الأمثلة وتعميمات السياق؛ التفاصيل في تقرير B2-05 |
| `lessons` | `src/data/lessons/b2/b2-05/reading.ts` | روجع ضمن B2-05؛ صُححت جمل النتيجة والاستثناء والترجمة، ووُسمت الحالة والشخصية والبيانات بالخيال؛ التفاصيل في تقرير B2-05 |
| `lessons` | `src/data/lessons/b2/b2-05/skills.ts` | روجع ضمن B2-05؛ وُوئمت صياغات الأهداف والنطق التقريبي، مع بقاء مطابقة الصوت للنص غير مثبتة؛ التفاصيل في تقرير B2-05 |
| `lessons` | `src/data/lessons/b2/b2-05/theorie.ts` | روجع ضمن B2-05 بمراجع IDS Grammis؛ قُيّدت قواعد الروابط والجسيمات وFVG؛ التفاصيل في تقرير B2-05 |
| `lessons` | `src/data/lessons/b2/b2-05.ts` | روجع تجميع الدرس وملخصه ضمن B2-05؛ وُوئم الملخص مع الأهداف والنظرية؛ التفاصيل في تقرير B2-05 |
| `lessons` | `src/data/lessons/b2/b2-06/cards.ts` | روجعت البطاقات والتفاعل والوساطة؛ أزيل ادعاء «الدراسات» عن الإنتاجية واستُبدل بحالة افتراضية، وخُفف تعميم أثر المرونة؛ التفاصيل في تقرير B2-06 |
| `lessons` | `src/data/lessons/b2/b2-06/intro.ts` | روجعت الأهداف والمقدمة؛ خُففت ثنائية «الاسمية رسمي/الفعلية عامي»، وبقي هدف القراءة غير مسجل في أدلة الأداء؛ التفاصيل في تقرير B2-06 |
| `lessons` | `src/data/lessons/b2/b2-06/practice.ts` | روجعت التمارين والتفسيرات؛ عُدلت أوصاف nominalization لتصف الصياغة الاسمية لا «الرسمية» حكماً، وأُفصح عن حدود عبارات التفاوض؛ التفاصيل في تقرير B2-06 |
| `lessons` | `src/data/lessons/b2/b2-06/reading.ts` | أزيلت دعوى «الثلاثين ثانية» والتعميمات؛ وُسمت الحالة الافتراضية ووُئمت الترجمة والأسئلة والروابط؛ أسئلة الفهم لا تُحتسب هدفاً مستقلاً في تتبع الأداء الحالي؛ التفاصيل في تقرير B2-06 |
| `lessons` | `src/data/lessons/b2/b2-06/skills.ts` | روجع الاستماع l3؛ ملفاته الستة معلنة TTS في اختبارها، واجتازت فحص الإشارة لا النطق أو مطابقة التسجيل للنص؛ التفاصيل في تقرير B2-06 |
| `lessons` | `src/data/lessons/b2/b2-06/theorie.ts` | روجعت بمصدر IDS Grammis؛ فُصلت الاسمية عن ثنائية السجل، وصُحح شرح استبدال السبب باسم، وقُيدت روابط السبب والنتيجة؛ التفاصيل في تقرير B2-06 |
| `lessons` | `src/data/lessons/b2/b2-06.ts` | روجع تجميع الدرس والموارد المعلنة؛ تفاصيل محتوى الدرس والفحوص وحدود الأدلة في تقرير B2-06 |
| `lessons` | `src/data/lessons/b2/b2-07/cards.ts` | روجعت: مواءمة الوساطة والبطاقات، وتنقيح الملاحظة القانونية مع الإحالة إلى النصوص الرسمية؛ التفاصيل في تقرير B2-07 |
| `lessons` | `src/data/lessons/b2/b2-07/intro.ts` | روجعت: قُيدت ادعاءات النطاق؛ تفاصيل الفحوص والحدود في تقرير B2-07 |
| `lessons` | `src/data/lessons/b2/b2-07/practice.ts` | روجعت: نُقحت تغذية راجعة وتحول تدريبي وأزيل إسقاط ديموغرافي غير مسند؛ التفاصيل في تقرير B2-07 |
| `lessons` | `src/data/lessons/b2/b2-07/reading.ts` | روجعت: صيغت كنموذج افتراضي، وحذفت توقعات رقمية غير مسندة ووئمت العربية والأسئلة والمعجم؛ التفاصيل في تقرير B2-07 |
| `lessons` | `src/data/lessons/b2/b2-07/skills.ts` | روجعت ملاحظة تدريب TTS للتمييز بين المحاكاة والتوقعات البحثية؛ فحص الصوت وحدوده في تقرير B2-07 |
| `lessons` | `src/data/lessons/b2/b2-07/theorie.ts` | روجعت بمصدري IDS Grammis: وُسع شرح Futur II إلى الاستعمال الزمني والاستدلالي وصُحح اختيار المساعد؛ ونُقح إرشاد Erörterung؛ تقرير B2-07 |
| `lessons` | `src/data/lessons/b2/b2-07.ts` | روجع التجميع والموارد المعلنة؛ تفاصيل مراجعة الدرس وحدود الأدلة في تقرير B2-07 |
| `lessons` | `src/data/lessons/b2/b2-08/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-08/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-08/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-08/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-08/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-08/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-08.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-09/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-09/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-09/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-09/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-09/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-09/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-09.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-10/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-10/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-10/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-10/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-10/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-10/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-10.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-11/cards.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-11/intro.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-11/practice.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-11/reading.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-11/skills.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-11/theorie.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/b2/b2-11.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/index.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/integrity-test/fixtures.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/meta-types.ts` | ضمن سجل الدروس؛ الحالة حسب الوحدة في `LESSON-REVIEW-TRACKER-AR.md` |
| `lessons` | `src/data/lessons/meta.ts` | وُوئم ملخص B2-02، وصُحح مثال B2-03، ووُوئم ملخص B2-05، وقُيّد ملخص B2-08 ليصف أفعالاً منتقاة لا قائمة حصرية؛ الأزمنة التقديرية ليست قياسات. تقارير الدروس توضح نطاق المراجعة |
| `lessons` | `src/data/lessons/related-resources.ts` | روجعت إحالات B2-02/03/04/07 واختباراتها؛ كما روجعت إحالات B2-08 الأربع، وقُيّدت بأنها مشاهد/تجارب فردية تدريبية، مع التصريح بأن MP3 البودكاست لم يُحدّث أو يُطابق. بقية الإحالات خارج النطاق؛ التفاصيل في تقارير الدروس |
| `podcasts` | `src/data/podcasts/audio.ts` | تحقّق بيان ومسار `p-b2-globalisierung` ضمن B2-02 و`p-b2-work-life-balance` ضمن B2-05؛ مطابقة النص ببيانات الحلقة لا تثبت المطابقة السمعية. التفاصيل في تقريري الدرسين |
| `podcasts` | `src/data/podcasts/index.ts` | روجعت حلقات B2-02/05/07 كما ورد في تقاريرها؛ وأعيد تحرير `p-b2-migration` لـB2-08 كقصة خيالية فردية مع ترجمتها وأسئلتها، لا كادعاء بحثي عام. MP3 لم يُحدّث أو يُطابق بعد تحرير النص. بقية الحلقات خارج النطاق |
| `reading` | `src/data/reading/b2-exam-library.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `reading` | `src/data/reading/library.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `redemittel.ts` | `src/data/redemittel.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `satzbau.ts` | `src/data/satzbau.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `schreibmodelle.ts` | `src/data/schreibmodelle.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/a1-extra.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/a1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/a2-extra.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/a2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/b1-extra.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/b1.ts` | روجعت القصص الثلاث المرتبطة بـB1-12 (`b1-neue-wohnung`, `b1-verlorene-zeit`, `b1-lange-zugreise`) وقصتا B1-10 وB1-11 المرتبطتان فقط؛ بقية الملف غير مشمولة |
| `stories` | `src/data/stories/b2-extra.ts` | روجعت `b2-integration` لـB2-08 وقُيّدت الحكاية كتجربة شخصية لا نصيحة عامة، إلى جانب `b2-bewerbungsgespraech` لـB2-06 و`b2-startup` لـB2-02 و`b2-kunstausstellung` لـB2-04. بقية العناصر خارج النطاق؛ التفاصيل في تقارير الدروس |
| `stories` | `src/data/stories/b2.ts` | روجعت `b2-umzug-muenchen` المرتبطة بـB2-08 وأعيد تأطيرها كتجربة فردية، إلى جانب `b2-forschungsprojekt` و`b2-verhandlung` لـB2-01. بقية القصص خارج النطاق |
| `stories` | `src/data/stories/index.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/types.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `stories` | `src/data/stories/wave2.ts` | روجعت قصص B2-04 وB2-05 وB2-07؛ وُسمت قصتا B2-05 وB2-07 بالخيال وقُيّدت الادعاءات. القصة المرتبطة بـB2-07 نقاش تدريبي لا توقعات خبراء موثقة؛ بقيت العناصر الأخرى خارج النطاق |
| `supplemental` | `src/data/supplemental/content.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `supplemental` | `src/data/supplemental/dialogues.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `supplemental` | `src/data/supplemental/forms.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `supplemental` | `src/data/supplemental/strategies.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `tests` | `src/data/tests/placement-questions.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `tests` | `src/data/tests/question-banks.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `umlauts.ts` | `src/data/umlauts.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `umschreibungen.ts` | `src/data/umschreibungen.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `verbs` | `src/data/verbs/starke-verben.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/a1-extra.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/a1-extra2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/a1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/a2-extra.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/a2-extra2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/a2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b1-extra.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b1-extra2/part1.ts` | اكتملت المراجعة المصدرية المتتابعة للمداخل 203/203 في `docs/B1-EXTRA2-PART1-REVIEW-AR.md`؛ اكتملت المجموعات الخمس: العمل 51/51 والتعليم 36/36 والصحة 41/41 والبيئة والطبيعة 41/41 والتقنية والإعلام 34/34؛ لا يعني ذلك مراجعة كل سياق استعمال في المشروع |
| `vocabulary` | `src/data/vocabulary/b1-extra2/part2.ts` | اكتملت المراجعة المصدرية لكل المداخل 206/206 بمراجع Duden مباشرة؛ أُغلقت الدفعات #246–255 و#256–305 و#306–355 و#356–405، ثم المداخل الأخيرة #406–409. وُثق شاهد ورابط وقرار لكل مدخل، وأضيفت assertions لجميع المدخلات المدققة؛ اكتملت الفحوص المناسبة (integrity 15/15، typecheck، lint، audit:content، و`git diff --check`). التفاصيل في `docs/B1-EXTRA2-PART2-REVIEW-AR.md` |
| `vocabulary` | `src/data/vocabulary/b1-extra2/part3.ts` | أُغلقت الدفعات المتتابعة #410–459 و#460–509 و#510–559 و#560–579 بمراجعة Duden لكل مدخل (170/170)، وتوثيق الشواهد والروابط والقرارات في تقارير الدفعات؛ أضيفت assertions للمداخل الـ170. تقرير الإغلاق الأخير: `docs/B1-EXTRA2-PART3-REVIEW-AR-560-579.md`. انتهى هذا المرور المرجعي على ملف part3؛ لا يعني ذلك إكمال مراجعة بقية محتوى المشروع |
| `vocabulary` | `src/data/vocabulary/b1-extra2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-extra.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-extra2/part1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-extra2/part2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-extra2/part3.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-extra2/part4.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-extra2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-top500.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2-topics.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/b2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/genders/dict-1.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/genders/dict-2.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/genders/dict-3.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/genders/dict-4.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/genders/index.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vocabulary` | `src/data/vocabulary/index.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `vortrag-modelle.ts` | `src/data/vortrag-modelle.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |
| `writing-path` | `src/data/writing-path/index.ts` | لم تبدأ؛ حصر العناصر وتدقيقها بنداً بنداً |

## بقية ملفات المصدر داخل `src`

تشمل واجهة الصفحات والمكونات، منطق التطبيق، الأنواع، والرسائل. يجب فحص النص المعروض والأمثلة ورسائل الأخطاء، وفصل البنية التقنية عن المادة التعليمية بعد الاطلاع عليها.

| المجال | الملف | الحالة |
|---|---|---|
| `app` | `src/app/about/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/ai-tools/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/alltag/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/api/llm/route.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/api/llm/status/route.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/assistant/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/aussprache/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/conversations/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/dashboard/competencies/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/dashboard/five-minutes/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/dashboard/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/dashboard/report/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/dashboard/review/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/design-system/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/dialogues/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/diktate/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/error-notebook/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/error.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/faq/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/flashcards/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/forms/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/gamification/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/globals.css` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/glossar/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/grammatik/funktionsverbgefuege/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/grammatik/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/hoeren/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/landeskunde/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/layout.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/learning-path/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/lesson/[lessonId]/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/level/[level]/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/loading.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/manifest.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/not-found.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/offline/layout.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/offline/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/offline-review/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/picture-dictionary/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/placement/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/podcasts/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/privacy/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/reading/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/redemittel/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/redewendungen/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/review/monthly/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/review/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/review/weekly/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/robots.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/satzbau/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/schreib-bewertung/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/schreibmodelle/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/sentence-review/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/settings/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/shop/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/sitemap.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/sound-check/layout.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/sound-check/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/sprechen/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/sprechtraining/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/stories/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/strategien/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/sync/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tageskapsel/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/a1-exam/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/a2-exam/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/b1-exam/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/b2/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/b2-grammatik/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/b2-simulation/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/fallstricke/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/lesen-b2/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/level/[level]/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/mock/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/placement/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/plan-b2/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/seal/[level]/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/sprechen/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/strategien/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/unit/[unitId]/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/vollpruefung/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/tests/weekly/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/umformung/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/umschreibungen/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/verben/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/wortschatz-b2/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/wortschatz-b2/top500/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app` | `src/app/writing-path/page.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/ai-tool-shell.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/ai-tools-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/ask-teacher.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/context-translator.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/exercise-generator.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/goethe-writer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/sentence-generator.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/story-generator.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/test-analysis.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/voice-teacher.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/weekly-report.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ai/writing-corrector.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/alltag/everyday-phrases.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/assistant/assistant-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/brand/logo.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/daily/daily-dashboard.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/cefr-competencies.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/daily-vocab-challenge.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/dashboard-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/exam-readiness-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/five-minutes.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/heatmap-chart.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/mistake-dictionary-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/preferences-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/progress-report.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/recent-activity.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/reminder-settings.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/reverse-plan.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/review-daily.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/smart-goals.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/study-stats-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dashboard/weekly-report-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dialogues/daily-dialogue-player.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dialogues/daily-library.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dialogues/dialogue-player.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/dictionary/picture-dictionary-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/diktate/diktat-trainer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/diktate/umlaut-focus.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/errors/error-notebook.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/flashcards/add-card-form.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/flashcards/card-list.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/flashcards/flashcards-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/flashcards/review-session.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/flashcards/sentence-review.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/forms/official-forms-player.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/badges-grid.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/certificate.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/challenge-mode.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/daily-quests.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/focus-mode.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/gamification-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/language-tree.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/memory-challenge.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/gamification/teacher-personality-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/glossar/b2-topics-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/glossar/glossar-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/grammar/funktionsverbgefuege-trainer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/grammar/grammar-reference-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/grammar/mind-map.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/grammar/umformung-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/hoeren/hoeren-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/certificate-path.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/daily-challenge-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/daily-plan.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/daily-word.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/faq.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/features.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/final-cta.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/growth-dashboard.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/hero.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/home-content.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/how-it-works.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/invite-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/journey-preferences.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/learner-journey-sections.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/learner-journey.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/levels-preview.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/predictive-path.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/stats-bar.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/study-plan.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/teacher-mentor.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/today-suggestions.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/home/weekly-league.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/landeskunde/landeskunde-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/layout/due-counter.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/layout/footer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/layout/header.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/layout/mobile-bottom-nav.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/layout/theme-toggle.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/learning-path/learning-path-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/learning-path/level-hub.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/learning-path/level-section.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/learning-path/sequential-path.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/learning-path/unit-row.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/learning-path/winding-path.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/dictation.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/error-correction.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/exercise-renderer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/feedback-panel.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/fill-blank.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/matching.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/multiple-choice.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/sentence-gap.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/transformation.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/true-false.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/use-exercise-state.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/word-ordering.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/exercises/zuordnung.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/explain-again.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/lesson-client-sections.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/lesson-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/lesson-sections.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/aussprache.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/dialogue-ordering.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/einfuehrung.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/fehler-und-tipps.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/free-writing-trainer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/hoerverstehen.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/interaktive-uebungen.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/interleaving-review.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/lernkarten.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/lernziele.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/lesetext.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/lesson-summary.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/mediation-interaction.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/mini-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/oral-production.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/schreiben.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/self-review-ratings.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/theorie.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/sections/vertiefung.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/speech/free-dictation.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/speech/minimal-pairs-game.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/speech/pronunciation-practice.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/speech/record-and-compare.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/speech/shadowing-trainer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/lesson/speech/speak-and-score.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/level/mastery-certificate.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/llm/usage-counter.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/offline/offline-review-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/placement/placement-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/podcasts/podcast-library.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/podcasts/podcast-player.tsx` | روجع ضمن B2-05؛ يعرض تنبيه المحتوى التدريبي غير الموثق عندما يكون موجوداً؛ لا يتحقق المشغل من مطابقة الصوت للنص |
| `components` | `src/components/providers/llm-provider.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/providers/progress-provider.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/providers/service-worker-register.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/providers/theme-provider.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/providers/voice-warmup.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/reading/reading-library-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/redemittel/redemittel-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/redewendungen/redewendungen-list.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/review/weekly-review-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/satzbau/satzbau-game.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/schreiben/schreibmodelle-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/settings/audio-settings.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/settings/byok-card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/settings/data-manager.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/settings/llm-settings.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/settings/settings-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/settings/sync-handler.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/settings/sync-link.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/auto-grow-textarea.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/detail-tabs.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/lang-de.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/rich-text.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/section-heading.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/speak-button.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/text-de.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shared/vocab-kind.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/shop/gems-shop-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/speaking/conversation-simulator.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/speaking/muendliche-pruefung.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/speech/aussprache-practice.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/stories/interactive-story.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/stories/stories-library.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/b2-grammar-trainer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/b2-reading-library.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/b2-simulation.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/b2-top500.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/exam-audio-player.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/exam-official-summary.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/exam-question-views.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/fallstricke-trainer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/goethe-a1-exam.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/goethe-a1-speaking.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/goethe-b2-exam.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/goethe-b2-sprechen.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/goethe-b2-views.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-ai-tools.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-assistant.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-level-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-oral-exam.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-placement-diagnostic.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-seal-exam.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-test-hub.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-unit-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-vollpruefung.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/lazy/lazy-weekly-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/level-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/oral-exam.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/placement-diagnostic.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/results-panel.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/seal-exam.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/test-hub.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/test-runner.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/test-timer.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/unit-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/voll-pruefung-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/vortrag-modelle.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/tests/weekly-test.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/accordion.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/badge.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/button.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/card.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/dropdown-menu.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/filter-chip.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/input.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/label.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/progress.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/separator.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/sheet.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/skeleton.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/ui/tooltip.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/umschreiben/umschreibungen-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/verbs/starke-verben-table.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/verbs/verb-drill.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/writing/goethe-local-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `components` | `src/components/writing/writing-path-client.tsx` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/analytics/compare.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/analytics/events.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/analytics/heatmap.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/analytics/session-format.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/analytics/session.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/analytics/weekly-streak.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/audio/mp3-file.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/audio/sfx.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/cando/statements.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/competencies.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/constants/curriculum.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/constants/site-content.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/fonts.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/gamification/badges.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/gamification/counters.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/gamification/gems.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/gamification/hearts.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/gamification/mastery.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/gamification/xp.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/error-correction-highlight.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/error-types.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/exercise-engine.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/goal-evidence.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/listening-evidence.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/oral-production.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/review-generator.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/self-review.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/lesson/shuffle.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/cache.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/client.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/hash.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/prompts.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/server/config.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/server/counter.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/server/fallback.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/server/providers.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/llm/usage.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/planner/daily-plan.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/preferences/audio.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/progress-selectors.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/progress-store.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/register-sw.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/reports/weekly-report-local.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/review/weekly-review.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/site-config.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/speech/minimal-pairs-data.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/speech/scoring.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/speech/speech-recognition.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/speech/voices.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/srs/flashcard-service.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/srs/sentence-service.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/srs/sm2.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/db.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/error-notebook.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/export-import.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/keys.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/learner.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/mistake-dictionary.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/preferences.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/progress-db.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/story-progress.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/teacher-personality.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/storage/test-results-store.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/balance-options.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/exam-audio.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/exam-scoring.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/official-points.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/option-length-signal.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/shuffle-questions.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/test-engine.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/tests/use-countdown.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/utils.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/writing/__fixtures__/german-corpus.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `lib` | `src/lib/writing/goethe-local.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/analytics.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/curriculum.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/exam.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/lesson.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/llm.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/srs.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/storage.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `types` | `src/types/test.ts` | لم تبدأ؛ تحديد النص المعروض ثم فحصه |
| `app-assets` | `src/app/icon.png` | أصل واجهة ثابت؛ لا يحتوي نص متعلم، وموجود في الجرد |
| `fonts` | `src/fonts/inter/LICENSE` | ترخيص خط؛ أصل ثابت لا مادة لغوية |
| `fonts` | `src/fonts/inter/inter-latin-100-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-200-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-300-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-400-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-500-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-600-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-700-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-800-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/inter/inter-latin-900-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/tajawal/LICENSE` | ترخيص خط؛ أصل ثابت لا مادة لغوية |
| `fonts` | `src/fonts/tajawal/tajawal-arabic-200-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/tajawal/tajawal-arabic-300-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/tajawal/tajawal-arabic-400-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/tajawal/tajawal-arabic-500-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/tajawal/tajawal-arabic-700-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/tajawal/tajawal-arabic-800-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |
| `fonts` | `src/fonts/tajawal/tajawal-arabic-900-normal.woff2` | ملف خط واجهة ثابت؛ ليس مادة متعلم |

## ملفات الوسائط في `public` (950 موجودة)

كل أصل مدرج على حدة. ملفات الصوت والصور تحتاج مطابقة بالنصوص/السياق؛ وجود ملفات غير صوتية لا يعني أنها محتوى لغوياً.

| المجال | الملف | الحالة |
|---|---|---|
| `audio` | `public/audio/dialogues-a1/a1-01-begruessung-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-01-begruessung-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-01-begruessung-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-01-begruessung-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-01-begruessung-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-01-begruessung-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-02-cafe-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-02-cafe-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-02-cafe-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-02-cafe-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-02-cafe-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-02-cafe-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-03-supermarkt-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-03-supermarkt-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-03-supermarkt-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-03-supermarkt-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-03-supermarkt-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-03-supermarkt-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-04-familie-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-04-familie-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-04-familie-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-04-familie-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-04-familie-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-04-familie-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-05-uhrzeit-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-05-uhrzeit-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-05-uhrzeit-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-05-uhrzeit-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-05-uhrzeit-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-05-uhrzeit-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-06-kleidung-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-06-kleidung-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-06-kleidung-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-06-kleidung-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-06-kleidung-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-06-kleidung-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-07-wohnung-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-07-wohnung-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-07-wohnung-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-07-wohnung-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-07-wohnung-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-07-wohnung-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-08-einladung-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-08-einladung-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-08-einladung-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-08-einladung-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-08-einladung-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-08-einladung-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-09-wegbeschreibung-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-09-wegbeschreibung-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-09-wegbeschreibung-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-09-wegbeschreibung-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-09-wegbeschreibung-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-09-wegbeschreibung-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-10-essen-bestellen-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-10-essen-bestellen-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-10-essen-bestellen-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-10-essen-bestellen-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-10-essen-bestellen-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-10-essen-bestellen-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-11-apotheke-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-11-apotheke-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-11-apotheke-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-11-apotheke-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-11-apotheke-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-11-apotheke-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-12-freizeit-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-12-freizeit-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-12-freizeit-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-12-freizeit-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-12-freizeit-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-12-freizeit-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-13-hotel-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-13-hotel-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-13-hotel-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-13-hotel-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-13-hotel-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-13-hotel-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-14-wetter-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-14-wetter-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-14-wetter-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-14-wetter-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-14-wetter-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-14-wetter-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-15-ticket-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-15-ticket-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-15-ticket-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-15-ticket-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-15-ticket-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-15-ticket-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-16-bahnhof-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-16-bahnhof-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-16-bahnhof-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-16-bahnhof-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-16-bahnhof-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a1/a1-16-bahnhof-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن المجموعة ذات 96 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-01-arzt-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-01-arzt-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-01-arzt-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-01-arzt-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-01-arzt-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-01-arzt-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-02-restaurant-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-02-restaurant-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-02-restaurant-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-02-restaurant-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-02-restaurant-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-02-restaurant-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-03-zug-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-03-zug-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-03-zug-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-03-zug-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-03-zug-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-03-zug-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-04-wohnungssuche-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-04-wohnungssuche-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-04-wohnungssuche-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-04-wohnungssuche-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-04-wohnungssuche-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-04-wohnungssuche-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-05-reisebuero-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-05-reisebuero-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-05-reisebuero-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-05-reisebuero-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-05-reisebuero-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-05-reisebuero-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-06-post-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-06-post-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-06-post-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-06-post-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-06-post-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-06-post-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-07-bank-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-07-bank-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-07-bank-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-07-bank-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-07-bank-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-07-bank-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-08-handy-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-08-handy-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-08-handy-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-08-handy-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-08-handy-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-08-handy-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-09-bus-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-09-bus-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-09-bus-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-09-bus-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-09-bus-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-09-bus-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-10-bewerbung-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-10-bewerbung-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-10-bewerbung-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-10-bewerbung-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-10-bewerbung-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-10-bewerbung-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-11-friseur-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-11-friseur-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-11-friseur-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-11-friseur-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-11-friseur-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-11-friseur-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-12-verspaetet-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-12-verspaetet-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-12-verspaetet-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-12-verspaetet-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-12-verspaetet-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-12-verspaetet-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-13-einkaufen-kleidung-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-13-einkaufen-kleidung-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-13-einkaufen-kleidung-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-13-einkaufen-kleidung-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-13-einkaufen-kleidung-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-13-einkaufen-kleidung-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-14-nachbarn-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-14-nachbarn-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-14-nachbarn-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-14-nachbarn-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-14-nachbarn-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-14-nachbarn-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-15-geschenk-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-15-geschenk-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-15-geschenk-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-15-geschenk-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-15-geschenk-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-a2/a2-15-geschenk-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة الحوارات ذات 90 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-01-meinung-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-01-meinung-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-01-meinung-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-01-meinung-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-01-meinung-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-01-meinung-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-02-urlaub-planen-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-02-urlaub-planen-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-02-urlaub-planen-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-02-urlaub-planen-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-02-urlaub-planen-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-02-urlaub-planen-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-03-beschwerde-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-03-beschwerde-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-03-beschwerde-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-03-beschwerde-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-03-beschwerde-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-03-beschwerde-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-04-terminal-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-04-terminal-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-04-terminal-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-04-terminal-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-04-terminal-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-04-terminal-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-05-probleme-loesen-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-05-probleme-loesen-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-05-probleme-loesen-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-05-probleme-loesen-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-05-probleme-loesen-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-05-probleme-loesen-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-06-umwelt-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-06-umwelt-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-06-umwelt-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-06-umwelt-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-06-umwelt-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-06-umwelt-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-07-interview-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-07-interview-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-07-interview-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-07-interview-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-07-interview-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-07-interview-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-08-krankmeldung-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-08-krankmeldung-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-08-krankmeldung-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-08-krankmeldung-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-08-krankmeldung-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-08-krankmeldung-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-09-ticket-kaufen-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-09-ticket-kaufen-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-09-ticket-kaufen-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-09-ticket-kaufen-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-09-ticket-kaufen-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-09-ticket-kaufen-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-10-nachhilfe-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-10-nachhilfe-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-10-nachhilfe-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-10-nachhilfe-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-10-nachhilfe-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-10-nachhilfe-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-11-panne-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-11-panne-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-11-panne-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-11-panne-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-11-panne-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-11-panne-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-12-geld-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-12-geld-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-12-geld-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-12-geld-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-12-geld-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-12-geld-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-13-sport-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-13-sport-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-13-sport-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-13-sport-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-13-sport-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-13-sport-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-14-kochen-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-14-kochen-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-14-kochen-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-14-kochen-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-14-kochen-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-14-kochen-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-15-wohnungswechsel-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-15-wohnungswechsel-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-15-wohnungswechsel-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-15-wohnungswechsel-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-15-wohnungswechsel-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b1/b1-15-wohnungswechsel-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي بتمريرين. نتيجة مجموعة الحوارات 70/1398 بعد تطبيع الأعداد؛ راجع `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/dialogues-b2/b2-01-gehaltsverhandlung-1.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في `docs/B2-06-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-01-gehaltsverhandlung-2.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في `docs/B2-06-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-01-gehaltsverhandlung-3.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في `docs/B2-06-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-01-gehaltsverhandlung-4.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في `docs/B2-06-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-01-gehaltsverhandlung-5.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في `docs/B2-06-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-01-gehaltsverhandlung-6.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في `docs/B2-06-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-02-teambesprechung-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-02-teambesprechung-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-02-teambesprechung-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-02-teambesprechung-4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-02-teambesprechung-5.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-02-teambesprechung-6.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-03-konflikt-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدره ومطابقته غير موثقين، والفحص لا يقيس النطق؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-03-konflikt-2.mp3` | طُبّع +10 dB؛ اجتاز فك الترميز ومؤشرات الإشارة؛ مصدره ومطابقته غير موثقين؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-03-konflikt-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدره ومطابقته غير موثقين، والفحص لا يقيس النطق؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-03-konflikt-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدره ومطابقته غير موثقين، والفحص لا يقيس النطق؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-03-konflikt-5.mp3` | طُبّع +10 dB؛ اجتاز فك الترميز ومؤشرات الإشارة؛ مصدره ومطابقته غير موثقين؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-03-konflikt-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدره ومطابقته غير موثقين، والفحص لا يقيس النطق؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-04-notfall-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-04-notfall-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-04-notfall-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-04-notfall-4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-04-notfall-5.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-04-notfall-6.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-05-pass-verloren-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-05-pass-verloren-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-05-pass-verloren-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-05-pass-verloren-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ طُبّع المستوى بكسب +14 dB؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-05-pass-verloren-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-05-pass-verloren-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-06-akademisch-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-06-akademisch-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-06-akademisch-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-06-akademisch-4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-06-akademisch-5.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-06-akademisch-6.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-07-bewerbung-vertrag-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-03/B2-07؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقريري الدرسين؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-07-bewerbung-vertrag-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-03/B2-07؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقريري الدرسين؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-07-bewerbung-vertrag-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-03/B2-07؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقريري الدرسين؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-07-bewerbung-vertrag-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-03/B2-07؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقريري الدرسين؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-07-bewerbung-vertrag-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-03/B2-07؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقريري الدرسين؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-07-bewerbung-vertrag-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-03/B2-07؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقريري الدرسين؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-08-praesentation-1.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في تقرير B2-06؛ طُبّع المستوى بكسب +14 dB؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-08-praesentation-2.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-08-praesentation-3.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-08-praesentation-4.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-08-praesentation-5.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-08-praesentation-6.mp3` | فُحص فك الترميز ومؤشرات الإشارة ضمن موارد B2-06؛ المصدر ومطابقة النص غير موثقين، ولا يثبت الفحص وضوح النطق أو طبيعيته؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-09-wohnungsvertrag-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-09-wohnungsvertrag-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-09-wohnungsvertrag-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-09-wohnungsvertrag-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-09-wohnungsvertrag-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-09-wohnungsvertrag-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ مصدر MP3 ومطابقته للنص غير موثقين، والفحص لا يقيس وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-10-international-1.mp3` | الحوار النصي المرتبط نُقح لـB2-08؛ اجتاز الملف فك الترميز ومؤشرات الإشارة الخشنة، لكن لم يُستمع أو يُطابق بالنص الجديد. تفاصيل الحدود في تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-10-international-2.mp3` | الحوار النصي المرتبط نُقح لـB2-08؛ اجتاز الملف فك الترميز ومؤشرات الإشارة الخشنة، لكن لم يُستمع أو يُطابق بالنص الجديد. تفاصيل الحدود في تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-10-international-3.mp3` | الحوار النصي المرتبط نُقح لـB2-08؛ اجتاز الملف فك الترميز ومؤشرات الإشارة الخشنة، لكن لم يُستمع أو يُطابق بالنص الجديد. تفاصيل الحدود في تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-10-international-4.mp3` | الحوار النصي المرتبط نُقح لـB2-08؛ اجتاز الملف فك الترميز ومؤشرات الإشارة الخشنة، لكن لم يُستمع أو يُطابق بالنص الجديد. تفاصيل الحدود في تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-10-international-5.mp3` | الحوار النصي المرتبط نُقح لـB2-08؛ اجتاز الملف فك الترميز ومؤشرات الإشارة الخشنة، لكن لم يُستمع أو يُطابق بالنص الجديد. تفاصيل الحدود في تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-10-international-6.mp3` | الحوار النصي المرتبط نُقح لـB2-08؛ اجتاز الملف فك الترميز ومؤشرات الإشارة الخشنة، لكن لم يُستمع أو يُطابق بالنص الجديد. الملف السادس منخفض المستوى نسبياً؛ تفاصيل الحدود في تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-11-verhandlung-kunde-1.mp3` | اجتاز فحص الإشارة؛ مصدر MP3 غير موثق، ولا يثبت الفحص المطابقة أو وضوح/طبيعية النطق؛ المقطع 6 طُبّع مستوى إشارته؛ تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-11-verhandlung-kunde-2.mp3` | اجتاز فحص الإشارة؛ مصدر MP3 غير موثق، ولا يثبت الفحص المطابقة أو وضوح/طبيعية النطق؛ المقطع 6 طُبّع مستوى إشارته؛ تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-11-verhandlung-kunde-3.mp3` | اجتاز فحص الإشارة؛ مصدر MP3 غير موثق، ولا يثبت الفحص المطابقة أو وضوح/طبيعية النطق؛ المقطع 6 طُبّع مستوى إشارته؛ تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-11-verhandlung-kunde-4.mp3` | اجتاز فحص الإشارة؛ مصدر MP3 غير موثق، ولا يثبت الفحص المطابقة أو وضوح/طبيعية النطق؛ المقطع 6 طُبّع مستوى إشارته؛ تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-11-verhandlung-kunde-5.mp3` | اجتاز فحص الإشارة؛ مصدر MP3 غير موثق، ولا يثبت الفحص المطابقة أو وضوح/طبيعية النطق؛ المقطع 6 طُبّع مستوى إشارته؛ تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-11-verhandlung-kunde-6.mp3` | اجتاز فحص الإشارة؛ مصدر MP3 غير موثق، ولا يثبت الفحص المطابقة أو وضوح/طبيعية النطق؛ المقطع 6 طُبّع مستوى إشارته؛ تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-12-arzt-spezialist-1.mp3` | اكتمل التدقيق البرمجي؛ طابق ASR محلي بتمريرين النص الحالي (WER=0 بعد تطبيع حالة الأحرف والترقيم)، واجتاز فك MP3. الأصل محفوظ في `.audit-tools/b2-12-audio/`؛ مصدر الصوت غير موثق، ولا يثبت الفحص جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-12-arzt-spezialist-2.mp3` | اكتمل التدقيق البرمجي؛ طابق ASR محلي بتمريرين النص الحالي (WER=0 بعد تطبيع حالة الأحرف والترقيم)، واجتاز فك MP3. الأصل محفوظ في `.audit-tools/b2-12-audio/`؛ مصدر الصوت غير موثق، ولا يثبت الفحص جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-12-arzt-spezialist-3.mp3` | اكتمل التدقيق البرمجي؛ طابق ASR محلي بتمريرين النص الحالي (WER=0 بعد تطبيع حالة الأحرف والترقيم)، واجتاز فك MP3. الأصل محفوظ في `.audit-tools/b2-12-audio/`؛ مصدر الصوت غير موثق، ولا يثبت الفحص جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-12-arzt-spezialist-4.mp3` | اكتمل التدقيق البرمجي؛ طابق ASR محلي بتمريرين النص الحالي (WER=0 بعد تطبيع حالة الأحرف والترقيم)، واجتاز فك MP3. الأصل محفوظ في `.audit-tools/b2-12-audio/`؛ مصدر الصوت غير موثق، ولا يثبت الفحص جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-12-arzt-spezialist-5.mp3` | اكتمل التدقيق البرمجي؛ طابق ASR محلي بتمريرين النص الحالي (WER=0 بعد تطبيع حالة الأحرف والترقيم)، واجتاز فك MP3. الأصل محفوظ في `.audit-tools/b2-12-audio/`؛ مصدر الصوت غير موثق، ولا يثبت الفحص جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-12-arzt-spezialist-6.mp3` | اكتمل التدقيق البرمجي؛ طابق ASR محلي بتمريرين النص الحالي (WER=0 بعد تطبيع حالة الأحرف والترقيم)، واجتاز فك MP3. الأصل محفوظ في `.audit-tools/b2-12-audio/`؛ مصدر الصوت غير موثق، ولا يثبت الفحص جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-13-flug-1.mp3` | طابق ASR المحلي النص الحالي بتمريرين، واجتاز فك MP3؛ مصدر الصوت غير موثق. الأصل محفوظ في `.audit-tools/b2-13-audio/`؛ لا يثبت ذلك جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-13-flug-2.mp3` | طابق ASR المحلي النص الحالي بتمريرين، واجتاز فك MP3؛ مصدر الصوت غير موثق. الأصل محفوظ في `.audit-tools/b2-13-audio/`؛ لا يثبت ذلك جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-13-flug-3.mp3` | طابق ASR المحلي النص الحالي بتمريرين، واجتاز فك MP3؛ مصدر الصوت غير موثق. الأصل محفوظ في `.audit-tools/b2-13-audio/`؛ لا يثبت ذلك جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-13-flug-4.mp3` | استُبدل بعد حفظ الأصل لأن التفريغ السابق تضمّن وعداً بالتعويض لا يطابق النص الحالي؛ أُعيد توليده TTS من النص. طابق التمريران بقية الكلمات وأغفلا «Uhr»؛ الفرق معلن في `docs/B2-13-DIALOGUE-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-13-flug-5.mp3` | طابق ASR المحلي النص الحالي بتمريرين. المستوى الحالي RMS −26.93 dBFS بعد كسب +14 dB الموثق سابقاً في تقرير B2-03؛ تُرك دون تعديل إضافي. المصدر غير موثق؛ الأصل محفوظ في `.audit-tools/b2-13-audio/`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-13-flug-6.mp3` | طابق ASR المحلي النص الحالي بتمريرين، واجتاز فك MP3؛ مصدر الصوت غير موثق. الأصل محفوظ في `.audit-tools/b2-13-audio/`؛ لا يثبت ذلك جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-14-medien-1.mp3` | طابق ASR المحلي الكلمات بتمريرين، وفُك MP3؛ المصدر غير موثق. سبق تعديل المستوى +10 dB؛ لم يضف هذا التدقيق كسباً آخر. الأصل محفوظ في `.audit-tools/b2-14-audio/`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-14-medien-2.mp3` | طابق ASR المحلي الكلمات بتمريرين، وفُك MP3؛ المصدر غير موثق. الأصل محفوظ في `.audit-tools/b2-14-audio/`؛ لا يثبت ذلك جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-14-medien-3.mp3` | اختلف تفريغا ASR في تمثيل «Falschinformationen» بعبارة «falsche Informationen»؛ لا يحسم ASR اللفظ المنطوق. فُك MP3، والأصل محفوظ في `.audit-tools/b2-14-audio/`؛ لا استبدال.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-14-medien-4.mp3` | طابق ASR المحلي الكلمات بتمريرين، وفُك MP3؛ المصدر غير موثق. الأصل محفوظ في `.audit-tools/b2-14-audio/`؛ لا يثبت ذلك جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-14-medien-5.mp3` | طابق ASR المحلي الكلمات بتمريرين، وفُك MP3؛ المصدر غير موثق. الأصل محفوظ في `.audit-tools/b2-14-audio/`؛ لا يثبت ذلك جودة النطق أو طبيعيته.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-14-medien-6.mp3` | طابق ASR المحلي الكلمات بتمريرين، وفُك MP3؛ المصدر غير موثق. سبق تعديل المستوى +10 dB؛ لم يضف هذا التدقيق كسباً آخر. الأصل محفوظ في `.audit-tools/b2-14-audio/`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-15-umzug-firma-1.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-15-umzug-firma-2.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-15-umzug-firma-3.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-15-umzug-firma-4.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-15-umzug-firma-5.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/dialogues-b2/b2-15-umzug-firma-6.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-a1/hoeren-t1.mp3` | طابق ASR المحلي نص الإعلان بعد تطبيع كتابة الأعداد بالحروف/الأرقام والترقيم في تمريرين؛ فك MP3 ناجح. الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`؛ مصدر التسجيل غير موثق. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g1-a.mp3` | طابق ASR المحلي النص بتمريرين؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g1-b.mp3` | طابق ASR النص بعد توحيد فصل/وصل `geradeaus` و`gerade aus`؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g2-a.mp3` | طابق ASR المحلي النص بتمريرين؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g2-b.mp3` | طابق ASR النص بعد تطبيع حالة الأحرف والترقيم؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g3-a.mp3` | طابق ASR المحلي النص بتمريرين؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g3-b.mp3` | اختلف تمريرا ASR في تفريغ `früher Schluss`: أحدهما «Früherschluss»، والآخر «Frühjahr Schluss»؛ بقي الالتباس معلناً ولم يُستبدل الملف. الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g4-a.mp3` | استُبدل بعد حفظ الأصل لأن التمريرين سمعا `Hand` بدلاً من `Hemd`؛ مرشح TTS بصوت voice-29 طابق النص في التمريرين وفُك بنجاح. الأصل والمرشح في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t2-g4-b.mp3` | طابق ASR المحلي النص بعد تطبيع `fünfzehn`/`15`؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t3.mp3` | طابق ASR المحلي نص الإعلان بعد تطبيع كتابة الأعداد بالحروف/الأرقام والترقيم في تمريرين؛ فك MP3 ناجح. الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`؛ مصدر التسجيل غير موثق. |
| `audio` | `public/audio/exam-a1/hoeren-t4-a.mp3` | طابق ASR المحلي النص بتمريرين بعد تجاهل الترقيم؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t4-b.mp3` | طابق ASR المحلي النص بتمريرين؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t4-c.mp3` | طابق ASR المحلي النص بتمريرين؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/hoeren-t4-d.mp3` | طابق ASR المحلي النص بتمريرين؛ فك MP3 ناجح. مصدر التسجيل غير موثق؛ الأصل محفوظ في `.audit-tools/exam-a1-model1-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t1.mp3` | فُك MP3؛ طابق ASR النص بعد تطبيع الأعداد والترقيم في تمرير beam5، بينما كتب تمرير beam1 «bitzelt» بدل «bittet». ثلاث إعدادات إضافية أعادت «bittet»؛ لم يُستبدل. الأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g1-a.mp3` | طابق ASR المحلي النص بتمريرين، وفُك MP3؛ الأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g1-b.mp3` | طابق ASR المحلي النص بتمريرين بعد تجاهل الترقيم؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g1-c.mp3` | طابق ASR المحلي النص بتمريرين بعد تجاهل الترقيم؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g2-a.mp3` | طابق ASR المحلي النص بتمريرين؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g2-b.mp3` | استُبدل بعد حفظ الأصل؛ كان ASR يخطئ في «Vorher ist sie zu»، واجتاز مرشح voice-30 التمريرين بنص مطابق. التفريغات والبصمات في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g3-a.mp3` | طابق ASR النص بعد توحيد الفصل في «Freitag Zeit/Freitagzeit»؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g3-b.mp3` | طابق ASR المحلي النص بتمريرين؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g4-a.mp3` | طابق ASR المحلي النص بتمريرين؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t2-g4-b.mp3` | طابق ASR النص بعد تطبيع «Zwei Euro fünfzig»/«2,50 Euro»؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t3.mp3` | طابق ASR النص بعد تطبيع `Doktor/Dr.` والفصل في «Versichertenkarte»؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t4-a.mp3` | طابق ASR المحلي النص بتمريرين؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t4-b.mp3` | طابق ASR المحلي النص بتمريرين؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m2/hoeren-t4-c.mp3` | طابق ASR النص بعد تطبيع الأعداد؛ فُك MP3، والأصل محفوظ في `.audit-tools/exam-a1-model2-audio/`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g1-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g1-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g2-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g2-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t2-g4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a1/m3/hoeren-t4-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين لكل ملف؛ WER بعد تطبيع الأعداد والوقت 5/340. فروق ASR في Haltestelle/Omar/Euro غير محسومة، ولم يُستبدل ملف. التقرير: `docs/A1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g1-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g1-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g2-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g2-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t2-g4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t4-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/hoeren-t4-d.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً (mono، 44.1 kHz). اكتمل ASR المحلي بتمريرين ضمن المجموعة؛ WER بعد تطبيع الأعداد 1/390. اختلاف `Bringen/Bring` في مقطع واحد غير محسوم؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g1-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g1-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g2-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g2-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t2-g4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t4-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t4-d.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t4-e.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m2/hoeren-t4-f.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 15/494. فروق `liegt/legt` وتهجئة/وصل موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g1-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g1-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g2-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g2-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t2-g4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t4-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-a2/m3/hoeren-t4-d.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين ضمن النموذج؛ WER بعد تطبيع الأعداد 12/602. فروق `so/zu` و`Kassenbon/Bonn` والاختصار والوحدة موثقة وغير محسومة؛ لم يُستبدل الملف. التقرير: `docs/A2-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g1-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g1-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g2-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g2-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t2-g4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t4-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/hoeren-t4-d.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER الأساسي 60/518 تأثر بتكرار التفريغ في T1، ومعظمه لا يُفسر خطأ منطوقاً. فروق `seien/sein` و`Wer/Wenn` غير محسومة؛ لم يُستبدل الملف. التقرير: `docs/B1-EXAM-MODEL1-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g1-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g1-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g2-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g2-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t2-g4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t4-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t4-d.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m2/hoeren-t4-e.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً mono/44.1 kHz. ASR محلي بتمريرين؛ WER بعد تطبيع الأعداد 7/536، وكل الفروق تركزت في التقرير T3 (`autofrei machen`/`autofreimachen`, `Shuttlebusse`/`Schattelbusse`). لم يُستبدل الملف؛ التقرير `docs/B1-EXAM-MODEL2-AUDIO-REVIEW-AR.md`. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g1-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g1-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g2-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g2-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t2-g4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t3-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t3-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t3-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t3-d.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t4-c.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t4-d.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t4-e.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b1/m3/hoeren-t4-f.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 بالكامل. ASR محلي ضمن التدقيق الشامل؛ WER بعد تطبيع الأعداد 14/756 (1.85%) للنموذج، وتفاصيل الفروق والتمريرات في `docs/B1-EXAM-MODEL3-AUDIO-REVIEW-AR.md`. لم يُستبدل الملف. |
| `audio` | `public/audio/exam-b2/README.md` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/exam-b2/a/.gitkeep` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/exam-b2/a/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين، مع إعدادات تشخيصية للمجموعة؛ WER على النص المصدر وبعد تطبيع الأعداد 77/1522 (5.06%)، ويتأثر بوسوم المتحدث التي قد لا ينطقها ASR. لا يُحسم بها اللفظ. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELA-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/a/hoeren-t2.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين، مع إعدادات تشخيصية للمجموعة؛ WER على النص المصدر وبعد تطبيع الأعداد 77/1522 (5.06%)، ويتأثر بوسوم المتحدث التي قد لا ينطقها ASR. لا يُحسم بها اللفظ. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELA-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/a/hoeren-t3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين، مع إعدادات تشخيصية للمجموعة؛ WER على النص المصدر وبعد تطبيع الأعداد 77/1522 (5.06%)، ويتأثر بوسوم المتحدث التي قد لا ينطقها ASR. لا يُحسم بها اللفظ. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELA-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/a/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين، مع إعدادات تشخيصية للمجموعة؛ WER على النص المصدر وبعد تطبيع الأعداد 77/1522 (5.06%)، ويتأثر بوسوم المتحدث التي قد لا ينطقها ASR. لا يُحسم بها اللفظ. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELA-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/a/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين، مع إعدادات تشخيصية للمجموعة؛ WER على النص المصدر وبعد تطبيع الأعداد 77/1522 (5.06%)، ويتأثر بوسوم المتحدث التي قد لا ينطقها ASR. لا يُحسم بها اللفظ. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELA-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/b/.gitkeep` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/exam-b2/b/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 71/1534 (4.63%)، ويتأثر بوسوم الأدوار/العناوين التي لم يُعدها ASR. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELB-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/b/hoeren-t2.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 71/1534 (4.63%)، ويتأثر بوسوم الأدوار/العناوين التي لم يُعدها ASR. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELB-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/b/hoeren-t3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 71/1534 (4.63%)، ويتأثر بوسوم الأدوار/العناوين التي لم يُعدها ASR. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELB-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/b/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 71/1534 (4.63%)، ويتأثر بوسوم الأدوار/العناوين التي لم يُعدها ASR. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELB-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/b/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 71/1534 (4.63%)، ويتأثر بوسوم الأدوار/العناوين التي لم يُعدها ASR. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELB-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/c/.gitkeep` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/exam-b2/c/hoeren-t1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 89/1640 (5.43%)، مع فروق تمثيل الأعداد ووسوم الأدوار/العناوين غير المحسومة. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELC-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/c/hoeren-t2.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 89/1640 (5.43%)، مع فروق تمثيل الأعداد ووسوم الأدوار/العناوين غير المحسومة. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELC-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/c/hoeren-t3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 89/1640 (5.43%)، مع فروق تمثيل الأعداد ووسوم الأدوار/العناوين غير المحسومة. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELC-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/c/hoeren-t4-a.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 89/1640 (5.43%)، مع فروق تمثيل الأعداد ووسوم الأدوار/العناوين غير المحسومة. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELC-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2/c/hoeren-t4-b.mp3` | حُفظ الأصل وتحقق من بصمته؛ فُك MP3 كاملاً. ASR محلي بتمريرين وأربعة إعدادات تشخيصية؛ WER على النص المصدر وبعد تطبيع الأعداد 89/1640 (5.43%)، مع فروق تمثيل الأعداد ووسوم الأدوار/العناوين غير المحسومة. لا يُحسم بها المنطوق. لم يُستبدل الملف؛ التقرير `docs/B2-EXAM-MODELC-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2-sim/h1.mp3` | حُفظ الأصل وتحقق من بصمته؛ فك MP3 كاملاً 4/4 في مجموعة المحاكاة. ASR محلي لـ12 تفريغاً؛ WER الخام وبعد تطبيع الأعداد 4/270 (1.48%)، مع `Fahrtzeit/Fahrzeit` في h1 و`warnen/waren` في h2 بثبات 4/4 لكل منهما، دون حسم آلي للفظ. لم يُستبدل الملف؛ التقرير `docs/B2-SIM-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2-sim/h2.mp3` | حُفظ الأصل وتحقق من بصمته؛ فك MP3 كاملاً 4/4 في مجموعة المحاكاة. ASR محلي لـ12 تفريغاً؛ WER الخام وبعد تطبيع الأعداد 4/270 (1.48%)، مع `Fahrtzeit/Fahrzeit` في h1 و`warnen/waren` في h2 بثبات 4/4 لكل منهما، دون حسم آلي للفظ. لم يُستبدل الملف؛ التقرير `docs/B2-SIM-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2-sim/h3.mp3` | حُفظ الأصل وتحقق من بصمته؛ فك MP3 كاملاً 4/4 في مجموعة المحاكاة. ASR محلي لـ12 تفريغاً؛ WER الخام وبعد تطبيع الأعداد 4/270 (1.48%)، مع `Fahrtzeit/Fahrzeit` في h1 و`warnen/waren` في h2 بثبات 4/4 لكل منهما، دون حسم آلي للفظ. لم يُستبدل الملف؛ التقرير `docs/B2-SIM-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/exam-b2-sim/h4.mp3` | حُفظ الأصل وتحقق من بصمته؛ فك MP3 كاملاً 4/4 في مجموعة المحاكاة. ASR محلي لـ12 تفريغاً؛ WER الخام وبعد تطبيع الأعداد 4/270 (1.48%)، مع `Fahrtzeit/Fahrzeit` في h1 و`warnen/waren` في h2 بثبات 4/4 لكل منهما، دون حسم آلي للفظ. لم يُستبدل الملف؛ التقرير `docs/B2-SIM-AUDIO-REVIEW-AR.md`.؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/a1-02/ls-a1-02-2-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-02/ls-a1-02-2-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-02/ls-a1-02-2-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-02/ls-a1-02-2-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-02/ls-a1-02-2-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-02/ls-a1-02-2-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-03/ls-a1-03-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-03/ls-a1-03-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-03/ls-a1-03-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-03/ls-a1-03-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-03/ls-a1-03-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-03/ls-a1-03-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-04/ls-a1-04-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-04/ls-a1-04-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-04/ls-a1-04-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-04/ls-a1-04-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-04/ls-a1-04-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-04/ls-a1-04-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-05/ls-a1-05-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-05/ls-a1-05-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-05/ls-a1-05-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-05/ls-a1-05-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-05/ls-a1-05-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-05/ls-a1-05-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-06/ls-a1-06-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-06/ls-a1-06-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-06/ls-a1-06-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-06/ls-a1-06-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-06/ls-a1-06-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-06/ls-a1-06-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-07/ls-a1-07-kiosk-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-07/ls-a1-07-kiosk-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-07/ls-a1-07-kiosk-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-07/ls-a1-07-kiosk-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-07/ls-a1-07-kiosk-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-07/ls-a1-07-kiosk-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-08/ls-a1-08-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-08/ls-a1-08-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-08/ls-a1-08-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-08/ls-a1-08-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-08/ls-a1-08-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-08/ls-a1-08-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-09/ls-a1-09-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-09/ls-a1-09-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-09/ls-a1-09-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-09/ls-a1-09-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-09/ls-a1-09-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-09/ls-a1-09-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-10/ls-a1-10-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-10/ls-a1-10-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-10/ls-a1-10-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-10/ls-a1-10-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-10/ls-a1-10-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-10/ls-a1-10-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-11/ls-a1-11-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-11/ls-a1-11-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-11/ls-a1-11-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-11/ls-a1-11-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-11/ls-a1-11-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-11/ls-a1-11-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-12/ls-a1-12-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-12/ls-a1-12-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-12/ls-a1-12-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-12/ls-a1-12-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-12/ls-a1-12-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-12/ls-a1-12-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-13/ls-a1-13-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-13/ls-a1-13-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-13/ls-a1-13-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-13/ls-a1-13-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-13/ls-a1-13-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-13/ls-a1-13-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-2-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-2-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-2-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-2-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-2-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-2-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-3-1.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-3-2.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-3-3.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-3-4.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-3-5.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a1-14/ls-a1-14-3-6.mp3` | ضمن تدقيق المستوى A1 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 84 ملفاً؛ النتائج والحدود في `docs/A1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-01/ls-a2-01-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-01/ls-a2-01-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-01/ls-a2-01-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-01/ls-a2-01-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-01/ls-a2-01-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-01/ls-a2-01-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-02/ls-a2-02-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-02/ls-a2-02-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-02/ls-a2-02-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-02/ls-a2-02-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-02/ls-a2-02-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-02/ls-a2-02-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-03/ls-a2-03-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-03/ls-a2-03-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-03/ls-a2-03-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-03/ls-a2-03-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-03/ls-a2-03-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-03/ls-a2-03-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-04/ls-a2-04-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-04/ls-a2-04-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-04/ls-a2-04-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-04/ls-a2-04-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-04/ls-a2-04-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-04/ls-a2-04-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-05/ls-a2-05-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-05/ls-a2-05-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-05/ls-a2-05-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-05/ls-a2-05-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-05/ls-a2-05-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-05/ls-a2-05-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-06/ls-a2-06-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-07/ls-a2-07-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-08/ls-a2-08-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-09/ls-a2-09-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-10/ls-a2-10-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-11/ls-a2-11-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-11/ls-a2-11-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-11/ls-a2-11-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-11/ls-a2-11-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-11/ls-a2-11-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-11/ls-a2-11-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-4-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-4-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-4-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-4-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-4-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-12/ls-a2-12-4-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-13/ls-a2-13-3-1.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-13/ls-a2-13-3-2.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-13/ls-a2-13-3-3.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-13/ls-a2-13-3-4.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-13/ls-a2-13-3-5.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/a2-13/ls-a2-13-3-6.mp3` | ضمن تدقيق المستوى A2 كاملاً: حُفظ الأصل في الأرشيف الموحد وتطابقت بصمته، وفُك MP3. ASR ضمن مجموعة مقاطع الدروس ذات 114 ملفاً؛ النتائج والحدود في `docs/A2-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-01/ls-b1-01-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-01/ls-b1-01-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-01/ls-b1-01-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-01/ls-b1-01-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-01/ls-b1-01-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-01/ls-b1-01-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-02/ls-b1-02-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-02/ls-b1-02-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-02/ls-b1-02-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-02/ls-b1-02-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-02/ls-b1-02-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-02/ls-b1-02-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-03/ls-b1-03-4-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-03/ls-b1-03-4-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-03/ls-b1-03-4-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-03/ls-b1-03-4-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-03/ls-b1-03-4-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-03/ls-b1-03-4-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-04/ls-b1-04-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-04/ls-b1-04-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-04/ls-b1-04-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-04/ls-b1-04-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-04/ls-b1-04-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-04/ls-b1-04-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-05/ls-b1-05-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-05/ls-b1-05-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-05/ls-b1-05-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-05/ls-b1-05-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-05/ls-b1-05-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-05/ls-b1-05-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-06/ls-b1-06-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-06/ls-b1-06-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-06/ls-b1-06-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-06/ls-b1-06-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-06/ls-b1-06-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-06/ls-b1-06-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-07/ls-b1-07-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-07/ls-b1-07-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-07/ls-b1-07-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-07/ls-b1-07-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-07/ls-b1-07-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-07/ls-b1-07-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-08/ls-b1-08-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-08/ls-b1-08-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-08/ls-b1-08-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-08/ls-b1-08-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-08/ls-b1-08-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-08/ls-b1-08-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-09/ls-b1-09-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-09/ls-b1-09-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-09/ls-b1-09-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-09/ls-b1-09-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-09/ls-b1-09-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-09/ls-b1-09-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-10/ls-b1-10-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-10/ls-b1-10-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-10/ls-b1-10-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-10/ls-b1-10-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-10/ls-b1-10-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-10/ls-b1-10-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-2-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-2-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-2-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-2-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-2-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-2-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-11/ls-b1-11-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-12/ls-b1-12-3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-12/ls-b1-12-3-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-12/ls-b1-12-3-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-12/ls-b1-12-3-4.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-12/ls-b1-12-3-5.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b1-12/ls-b1-12-3-6.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي للمقاطع ذات المرجع. نتيجة المجموعة 57/1472 بعد تطبيع الأعداد. المقطع B1-09-3-1 متقاعد بلا مرجع نصي ولم يحتسب WER؛ التفاصيل في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/lessons/b2-01/ls-b2-01-3-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت مطابقة النص أو جودة النطق؛ تقرير `B2-01-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-01/ls-b2-01-3-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت مطابقة النص أو جودة النطق؛ تقرير `B2-01-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-01/ls-b2-01-3-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت مطابقة النص أو جودة النطق؛ تقرير `B2-01-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-01/ls-b2-01-3-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت مطابقة النص أو جودة النطق؛ تقرير `B2-01-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-01/ls-b2-01-3-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت مطابقة النص أو جودة النطق؛ تقرير `B2-01-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-01/ls-b2-01-3-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت مطابقة النص أو جودة النطق؛ تقرير `B2-01-REVIEW-NOTES-AR.md`؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-02/ls-b2-02-3-1.mp3` | اجتازت الملفات الستة فحص فك الترميز ومؤشرات الإشارة؛ معلنة TTS، لكن ذلك لا يثبت المطابقة السمعية أو وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-02/ls-b2-02-3-2.mp3` | اجتازت الملفات الستة فحص فك الترميز ومؤشرات الإشارة؛ معلنة TTS، لكن ذلك لا يثبت المطابقة السمعية أو وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-02/ls-b2-02-3-3.mp3` | اجتازت الملفات الستة فحص فك الترميز ومؤشرات الإشارة؛ معلنة TTS، لكن ذلك لا يثبت المطابقة السمعية أو وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-02/ls-b2-02-3-4.mp3` | اجتازت الملفات الستة فحص فك الترميز ومؤشرات الإشارة؛ معلنة TTS، لكن ذلك لا يثبت المطابقة السمعية أو وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-02/ls-b2-02-3-5.mp3` | اجتازت الملفات الستة فحص فك الترميز ومؤشرات الإشارة؛ معلنة TTS، لكن ذلك لا يثبت المطابقة السمعية أو وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-02/ls-b2-02-3-6.mp3` | اجتازت الملفات الستة فحص فك الترميز ومؤشرات الإشارة؛ معلنة TTS، لكن ذلك لا يثبت المطابقة السمعية أو وضوح/طبيعية النطق؛ التفاصيل في تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-03/ls-b2-03-3-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ البيانات تعلن TTS، لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-03/ls-b2-03-3-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ البيانات تعلن TTS، لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-03/ls-b2-03-3-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ البيانات تعلن TTS، لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-03/ls-b2-03-3-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ البيانات تعلن TTS، لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-03/ls-b2-03-3-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ البيانات تعلن TTS، لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-03/ls-b2-03-3-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ البيانات تعلن TTS، لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-03؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-04/ls-b2-04-3-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ TTS معلن بالبيانات لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-04؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-04/ls-b2-04-3-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ TTS معلن بالبيانات لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-04؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-04/ls-b2-04-3-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ TTS معلن بالبيانات لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-04؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-04/ls-b2-04-3-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ TTS معلن بالبيانات لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-04؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-04/ls-b2-04-3-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ TTS معلن بالبيانات لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-04؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-04/ls-b2-04-3-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة؛ TTS معلن بالبيانات لكن الفحص لا يثبت وضوح النطق أو طبيعته أو المطابقة السمعية للنص؛ تقرير B2-04؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-05/ls-b2-05-3-1.mp3` | TTS معلن؛ اجتاز فك الترميز ومؤشرات الإشارة. لا يثبت الفحص النطق أو المطابقة السمعية للنص؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-05/ls-b2-05-3-2.mp3` | TTS معلن؛ اجتاز فك الترميز ومؤشرات الإشارة. يتضمن النص تسمية `Mira:` داخل سطر موسوم Jonas؛ لم يتحقق سمعياً من نطقها أو مطابقتها؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-05/ls-b2-05-3-3.mp3` | TTS معلن؛ اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت الفحص النطق أو المطابقة السمعية للنص؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-05/ls-b2-05-3-4.mp3` | TTS معلن؛ اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت الفحص النطق أو المطابقة السمعية للنص؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-05/ls-b2-05-3-5.mp3` | TTS معلن؛ اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت الفحص النطق أو المطابقة السمعية للنص؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-05/ls-b2-05-3-6.mp3` | TTS معلن؛ اجتاز فك الترميز ومؤشرات الإشارة؛ لا يثبت الفحص النطق أو المطابقة السمعية للنص؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-06/ls-b2-06-3-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-06 الموسوم TTS؛ لا يثبت الفحص النطق أو المطابقة؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-06/ls-b2-06-3-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-06 الموسوم TTS؛ لا يثبت الفحص النطق أو المطابقة؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-06/ls-b2-06-3-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-06 الموسوم TTS؛ لا يثبت الفحص النطق أو المطابقة؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-06/ls-b2-06-3-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-06 الموسوم TTS؛ لا يثبت الفحص النطق أو المطابقة؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-06/ls-b2-06-3-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-06 الموسوم TTS؛ لا يثبت الفحص النطق أو المطابقة؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-06/ls-b2-06-3-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-06 الموسوم TTS؛ لا يثبت الفحص النطق أو المطابقة؛ التفاصيل في تقرير B2-06؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-07/ls-b2-07-3-1.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-07؛ الفحص لا يثبت النطق أو محاذاة النص؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-07/ls-b2-07-3-2.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-07؛ الفحص لا يثبت النطق أو محاذاة النص؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-07/ls-b2-07-3-3.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-07؛ الفحص لا يثبت النطق أو محاذاة النص؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-07/ls-b2-07-3-4.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-07؛ الفحص لا يثبت النطق أو محاذاة النص؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-07/ls-b2-07-3-5.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-07؛ الفحص لا يثبت النطق أو محاذاة النص؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-07/ls-b2-07-3-6.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن استماع B2-07؛ الفحص لا يثبت النطق أو محاذاة النص؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-08/ls-b2-08-3-1.mp3` | اجتاز فك الترميز وحدود الإشارة الخشنة؛ النص المنقح غير مطابق/غير متحقق، والفحص لا يقيس النطق أو المحاذاة. تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-08/ls-b2-08-3-2.mp3` | اجتاز فك الترميز وحدود الإشارة الخشنة؛ النص المنقح غير مطابق/غير متحقق، والفحص لا يقيس النطق أو المحاذاة. تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-08/ls-b2-08-3-3.mp3` | فُكّ ترميزه؛ تجاوز الصمت الطرفي 1.28ث حد 1.20ث. لم يُقصّ لعدم التحقق من الذيل الكلامي؛ النص المنقح غير محاذى. تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-08/ls-b2-08-3-4.mp3` | اجتاز فك الترميز وحدود الإشارة الخشنة؛ النص المنقح غير مطابق/غير متحقق، والفحص لا يقيس النطق أو المحاذاة. تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-08/ls-b2-08-3-5.mp3` | اجتاز فك الترميز وحدود الإشارة الخشنة؛ النص المنقح غير مطابق/غير متحقق، والفحص لا يقيس النطق أو المحاذاة. تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-08/ls-b2-08-3-6.mp3` | اجتاز فك الترميز وحدود الإشارة الخشنة؛ النص المنقح غير مطابق/غير متحقق، والفحص لا يقيس النطق أو المحاذاة. تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-09/ls-b2-09-3-1.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-09/ls-b2-09-3-2.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-09/ls-b2-09-3-3.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-09/ls-b2-09-3-4.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-09/ls-b2-09-3-5.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-09/ls-b2-09-3-6.mp3` | أُعيد توليده TTS من النص الحالي؛ طابقه ASR محلياً؛ لم يُجر استماع أو تقييم جودة صوتية؛ تقرير B2-09؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-10/ls-b2-10-3-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-10/ls-b2-10-3-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-10/ls-b2-10-3-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-10/ls-b2-10-3-4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-10/ls-b2-10-3-5.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-10/ls-b2-10-3-6.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-11/ls-b2-11-3-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-11/ls-b2-11-3-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-11/ls-b2-11-3-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-11/ls-b2-11-3-4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-11/ls-b2-11-3-5.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/lessons/b2-11/ls-b2-11-3-6.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/podcasts/p-a1-geburstag.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a1-haustier.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a1-markt.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a1-meine-familie.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a2-kinoabend.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a2-sonnntag.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a2-wochenmarkt.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a2-wohnung.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-a2-zug.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/podcasts/p-b1-gesundheit.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل النص الحالي. أخطاء مطبعة 10/500 عبر التمريرين؛ الفروق والحدود في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/podcasts/p-b1-homeoffice.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل النص الحالي. أخطاء مطبعة 10/500 عبر التمريرين؛ الفروق والحدود في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/podcasts/p-b1-lernen.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل النص الحالي. أخطاء مطبعة 10/500 عبر التمريرين؛ الفروق والحدود في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/podcasts/p-b1-reisen.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل النص الحالي. أخطاء مطبعة 10/500 عبر التمريرين؛ الفروق والحدود في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/podcasts/p-b1-umwelt.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل النص الحالي. أخطاء مطبعة 10/500 عبر التمريرين؛ الفروق والحدود في `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/podcasts/p-b2-digitalisierung.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-07؛ لا يثبت الفحص النطق أو المطابقة السمعية؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/podcasts/p-b2-gesunde-ernaehrung.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/podcasts/p-b2-globalisierung.mp3` | 25.94 ثانية؛ اجتاز فك الترميز ومؤشرات الإشارة بحد مدة 40 ثانية؛ الواجهة تعلنه TTS لكن الفحص لا يثبت المطابقة السمعية أو جودة النطق؛ تقرير B2-02؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/podcasts/p-b2-kuenstliche-intelligenz.mp3` | اجتاز فك الترميز ومؤشرات الإشارة ضمن فحص B2-07؛ لا يثبت الفحص النطق أو المطابقة السمعية؛ التفاصيل في تقرير B2-07؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/podcasts/p-b2-migration.mp3` | اجتاز فك الترميز وحدود الإشارة عند سقف مدة 60ث؛ نص الحلقة استُبدل دون تجديد/محاذاة الصوت. المؤشر لا يثبت وضوحاً أو نطقاً. تقرير B2-08؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/podcasts/p-b2-work-life-balance.mp3` | 24.44 ثانية؛ اجتاز فك الترميز ومؤشرات الإشارة بحد مدة 40 ثانية؛ لا يثبت المطابقة السمعية أو جودة النطق؛ تقرير B2-05؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-a1/m1-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/m1-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/m1-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/m2-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/m2-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/m2-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/m2-4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/m3-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t1-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t1-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t1-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t2-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t2-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t2-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t2-4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a1/t3-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/m1-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/m1-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/m1-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/m2-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/m2-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/m2-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/m3-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/t1-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/t1-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/t1-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/t2-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/t2-2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/t2-3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-a2/t3-1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `audio` | `public/audio/speaking-b1/m1-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/m1-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/m1-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/m2-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/m2-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/m3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/t1-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/t1-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/t1-3.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/t2-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/t2-2.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b1/t3-1.mp3` | ضمن تدقيق B1 الكامل: أُرشف الأصل وطوبقت بصمته وفُكّ؛ ASR محلي مقابل نموذج التحدث. أخطاء مطبعة 0/336 عبر التمريرين؛ التقرير `docs/B1-AUDIO-LEVEL-REVIEW-AR.md`. |
| `audio` | `public/audio/speaking-b2/a/d1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/a/d2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/a/d3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/a/d4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/a/v1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/a/v2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/a/v3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/a/v4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-d1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-d2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-d3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-d4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-v1.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-v2.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-v3.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `audio` | `public/audio/speaking-b2/b/b-v4.mp3` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه؛ ضمن تدقيق المستوى B2 كاملاً: حُفظ الأصل وطوبقت بصمته وفُك ضمن الأرشيف الموحد 197/197. التقرير `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` |
| `icons` | `public/icons/apple-touch-icon.png` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `icons` | `public/icons/icon-180.png` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `icons` | `public/icons/icon-192.png` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `icons` | `public/icons/icon-512-maskable.png` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `icons` | `public/icons/icon-512.png` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `logo.svg` | `public/logo.svg` | لم تبدأ؛ تصنيف الأصل ومطابقته بسياقه |
| `sw.js` | `public/sw.js` | غير موجود في مساحة العمل الحالية؛ قد يكون ناتجاً مولداً، ولم يُتحقق من بناء PWA. مسار مفقود لا يدخل العدد |
| `workbox-0db717d9.js` | `public/workbox-0db717d9.js` | غير موجود في مساحة العمل الحالية؛ قد يكون ناتجاً مولداً، ولم يُتحقق من بناء PWA. مسار مفقود لا يدخل العدد |

## وثائق المشروع `docs` (168)

| الملف | الحالة |
|---|---|
| `docs/A1-AUDIO-LEVEL-REVIEW-AR.md` | تقرير تدقيق صوت A1 كاملاً؛ حفظ وفك وASR محلي مع فروق وحدود معلنة |
| `docs/A2-AUDIO-LEVEL-REVIEW-AR.md` | تقرير تدقيق صوت A2 كاملاً؛ حفظ وفك وASR محلي مع فروق وحدود معلنة |
| `docs/B1-AUDIO-LEVEL-REVIEW-AR.md` | تقرير تدقيق صوت B1 كاملاً؛ حفظ وفك وASR محلي مع فروق وحدود معلنة |
| `docs/A1-00-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-00؛ وثيقة دعم لا مادة متعلم، وحدود النطاق في التقرير وسجل الدروس |
| `docs/A1-01-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-01؛ وثيقة دعم لا مادة متعلم، وحدود النطاق في التقرير وسجل الدروس |
| `docs/A1-01B-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-01B؛ وثيقة دعم لا مادة متعلم، وحدود النطاق في التقرير وسجل الدروس |
| `docs/A1-02-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-02؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-03-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-03؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-04-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-04؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-05-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-05؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-06-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-06؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-07-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-07؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-08-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-08؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-09-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-09؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-10-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-10؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-11-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-11؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-12-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-12؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-13-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-13؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A1-14-REVIEW-NOTES-AR.md` | تقرير مراجعة A1-14؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-01-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-01؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-02-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-02؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-03-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-03؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-04-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-04؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-05-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-05؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-06-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-06؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-07-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-07؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-08-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-08؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-09-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-09؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-10-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-10؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-11-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-11؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-12-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-12؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/A2-13-REVIEW-NOTES-AR.md` | تقرير مراجعة A2-13؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-01-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-01؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-02-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-02؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-03-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-03؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-04-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-04؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-05-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-05؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-06-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-06؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-07-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-07؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-08-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-08؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-09-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-09؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-10-REVIEW-NOTES-AR.md` | تقرير مراجعة B1-10؛ وثيقة دعم لا مادة متعلم. نطاق الدرس وأدلته في سجل المراجعة الخاص به؛ وجود التقرير لا يثبت صحة كل الملفات. |
| `docs/B1-11-REVIEW-NOTES-AR.md` | تقرير تدقيق B1-11؛ المصادر والاختبارات وحدود الصوت موثقة |
| `docs/B1-12-REVIEW-NOTES-AR.md` | تقرير تدقيق B1-12؛ الإصلاحات والمراجع والاختبارات وحدود الصوت موثقة |
| `docs/B2-AUDIO-LEVEL-REVIEW-AR.md` | تقرير تدقيق صوت B2 كاملاً؛ 197 أصلاً محفوظاً ومفكوكاً، ASR محلي مع فروق كبيرة غير محسومة وحدود موثقة |
| `docs/B2-01-REVIEW-NOTES-AR.md` | تقرير تدقيق B2-01؛ الإصلاحات والمراجع والاختبارات وحدود الصوت موثقة |
| `docs/B2-02-REVIEW-NOTES-AR.md` | تقرير تدقيق B2-02؛ الإصلاحات والمراجع والاختبارات وحدود فحص الإشارة موثقة |
| `docs/B2-03-REVIEW-NOTES-AR.md` | تقرير تدقيق B2-03؛ الإصلاحات القانونية/اللغوية، 30 فحص إشارة، الاختبارات والنواقص موثقة |
| `docs/B2-04-REVIEW-NOTES-AR.md` | تقرير مراجعة B2-04؛ التغييرات والمراجع و24 اختباراً و12 فحص إشارة والحدود موثقة |
| `docs/B2-05-REVIEW-NOTES-AR.md` | تقرير مراجعة B2-05؛ الإصلاحات والمراجع و80 اختباراً و13 فحص إشارة والنواقص موثقة |
| `docs/B2-06-REVIEW-NOTES-AR.md` | تقرير مراجعة B2-06؛ الإصلاحات والمراجع و86 اختباراً و24 فحص إشارة والحدود موثقة |
| `docs/B2-07-REVIEW-NOTES-AR.md` | تقرير مراجعة B2-07؛ الإصلاحات ومصادر IDS والقانون و88 اختباراً و14 فحص إشارة والحدود موثقة |
| `docs/B2-08-REVIEW-NOTES-AR.md` | تقرير B2-08؛ سجل المراجعة يسجل إغلاقه ضمن الأدلة والنطاق في المتعقب. راجع تحديثات حالة الصوت والتفريغ وحدودهما وآثارها في التقرير |
| `docs/B2-EXAM-AUDIO-PRODUCTION.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/BROWSER-VERIFICATION-2026-10-13.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/EXAM-AUDIO-MODEL2-PRODUCTION.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/EXPERT-REVIEW-2026-10-13.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/FINAL-KNOWN-GAPS-AR.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/LESSON-REVIEW-TRACKER-AR.md` | سُجل إغلاق الوحدات الـ52 ضمن نطاقها وأدلتها حتى B2-11؛ أحدث دفعات الصوت الكاملة A1 وA2 وB1 وB2 موثقة منفصلة |
| `docs/MODEL-SOURCE-REVIEW-PROTOCOL-AR.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/PLAN-CLOSING-GAPS-AR.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/PROJECT-CONTENT-INVENTORY-AR.md` | سجل جرد المشروع؛ آخر تحديث لحالات الوسائط يسجل تدقيق B2 كاملاً، مع فصل عدد الملفات عن حالات التدقيق |
| `docs/README.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/REFACTOR-PLAN.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/REPORT-CEFR-GOETHE-COVERAGE-AR.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/REVIEW-STATUS-2026-10-13.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/A1-07-AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/A1-08-AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/A1-09-AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/ACADEMIC-AUDIT-B2-2026-08-17.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/ACADEMIC-AUDIT-COMPLETE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/ACADEMIC-AUDIT-v11-2026-08-18.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/ACADEMIC-EXPLAINER.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/ANATOMY-AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-2026-08-22-PHASE1-VISUAL.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-2026-08-23-PHASE2-CURRICULUM.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-2026-08-23-PHASE3-TECHNICAL.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-2026-08-23-PHASE4-UNITS.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-2026-08-23-PHASE5-UNIT-CARDS.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-2026-08-23-PHASE6-FINAL.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-2026-08-24-RESCORE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-ACADEMIC-RESPONSE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-COMPLETE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-FULL.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-2026-10-05.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-00-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-01-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-02-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-03-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-04-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-05-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-06-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-11-2026-10-05.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-12-2026-10-05.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-13-2026-10-06.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A1-14-2026-10-06.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-01-2026-10-06.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-02-2026-10-07.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-03-2026-10-07.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-04-2026-10-07.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-05-2026-10-07.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-06-2026-10-07.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-07-2026-10-08.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-08-2026-10-08.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-09-2026-10-09.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-10-2026-10-09.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-11-2026-10-09.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-12-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-A2-13-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-01-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-02-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-03-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-04-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-05-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-06-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-07-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-08-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-09-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-10-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-11-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B1-12-2026-10-10.md` | قُرئ بوصفه تقريراً تاريخياً؛ يؤكد أن `unitId: b1-10, order: 2` تجميع مقصود، ولا يحل محل التدقيق الحالي |
| `docs/archive/AUDIT-REPORT-B2-01-2026-10-10.md` | قُرئ كسجل تاريخي لتدقيق سابق؛ لا يحل محل إعادة فحص B2-01 الحالية |
| `docs/archive/AUDIT-REPORT-B2-02-2026-10-10.md` | قُرئ كسجل تاريخي؛ لا تُعامل نتائجه القديمة تحققاً للحالة الحالية، وتفاصيل إعادة الفحص في `B2-02-REVIEW-NOTES-AR.md` |
| `docs/archive/AUDIT-REPORT-B2-03-2026-10-10.md` | قُرئ كسجل تاريخي لنطاق سابق محدود؛ لا يغني عن تقرير المراجعة الحالية `docs/B2-03-REVIEW-NOTES-AR.md` |
| `docs/archive/AUDIT-REPORT-B2-04-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B2-05-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B2-06-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B2-07-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B2-08-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B2-09-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B2-10-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-B2-11-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-REPORT-INTEGRITY-FIXES-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-RESPONSE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT-STUDENT-SIMULATION-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/COVERAGE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/CURRICULUM-ACADEMIC.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/CURRICULUM-AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/CURRICULUM-COVERAGE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/DEPLOYMENT-FREE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/DESIGN-AUDIT-v7.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/ENRICHMENT-ROUND.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/EXPERT-REVIEW.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/FINAL-AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/FINAL-EXPERT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/IMPLEMENTED-SUMMARY.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/IMPROVEMENTS.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/LESSON-CARASTROPHE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/LESSONS-INVENTORY.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PEDAGOGY-METHODOLOGY.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PEDAGOGY-RESTRUCTURE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PLAN-2026-08-24-CURRICULUM-EXPANSION.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PLAN-2026-08-24-ROADMAP.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PRODUCTION-READINESS.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PROFESSIONAL_CONTINUATION_PROMPT_AR.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PROJECT-REVIEW.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/PUSH-GUIDE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/REGRESSION-AUDIT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/REVIEW-SWEEP-2026-10-10.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/REVOLUTION.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/ROADMAP.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/STATUS-2026-08-24-A1-VS-SCHRITTE.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/STRICT-AUDIT-v6.3.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/STRICT-REVIEW.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/SUGGESTIONS.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/TEACHER-FINAL.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `docs/archive/TERMUX-UPLOAD.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |

## أدوات الفحص والبناء `scripts` (18)

| الملف | الحالة |
|---|---|
| `scripts/.tmp-linkcheck.py` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/README.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/add-option-explanations.py` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/audio-signal-audit.py` | استُخدم لفحص فك الترميز ومؤشرات الإشارة الخشنة لـB2-08؛ لا يقيس وضوح النطق أو طبيعيته أو مطابقته للنص |
| `scripts/apply-depth.py` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/content-audit.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/curriculum-audit.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/deep-lesson-audit.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/dom-audit.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/exercise-integrity-audit.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/insert-theory-block.py` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/lessons-inventory.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/lib/lesson-source.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/probe-first-option.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/screenshots.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/split-data-array.py` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/split-lesson.py` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `scripts/split-test-file.py` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |

## اختبارات E2E التي قد تتضمن نصوص واجهة `e2e` (50)

| الملف | الحالة |
|---|---|
| `e2e/_listen2.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/a1-02-family-listening.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/a1-14-listening-audio.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/a1-cumulative-review.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/audit.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/aussprache-mic.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/b1-11-bus-listening.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/b2-hoeren-audio.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/b2-simulation-review.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/completion.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/dash-check.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/dashboard.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/dialogue-a1-station-audio.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/dialogues.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/enhancements.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/enrichment.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/features-new.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/features.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/form-accessible-names.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/goethe-b2-exam.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/hdr.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/helpers/lesson-steps.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/hidden-fields.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/listen-fix.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/mastery.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/mediation.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/mob.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/mock-exams.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/navfix.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/pathways.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/perf.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/persist.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/phase2.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/phase3.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/phase4.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/podcast-audio.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/pron-boxes.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/resp.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/responsive.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/smoke.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/speech.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/stepwise.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/tabs.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/tests-review.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/textarea.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/trainers-review.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/transition.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/uiux.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/verbs-note.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `e2e/vocab-kind-ex.spec.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |

## ملفات المستوى الجذري (15)

| الملف | الحالة |
|---|---|
| `DEPLOYMENT.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `DEVELOPMENT-PLAN.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `README.md` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `components.json` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `next-env.d.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `next.config.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `package-lock.json` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `package.json` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `playwright.config.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `postcss.config.mjs` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `tailwind.config.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `tsconfig.json` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `tsconfig.tsbuildinfo` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `vercel.json` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |
| `vitest.config.ts` | لم تبدأ؛ تصنيف علاقتها بمحتوى المتعلم وفحص النصوص ذات الصلة |

## التقدم المؤكد

### قاعدة الحالة الإلزامية

كل ملف/عنصر/مهمة في هذا الجرد يجب أن يحمل حالة صريحة ومحدثة: **منجز ضمن النطاق الموثق** أو **غير منجز**؛ لا توجد حالة «متعذر». «قيد التنفيذ»، «مراجع جزئياً»، «لم تبدأ»، و«بانتظار مصدر أو حكم» أوصاف فرعية لحالة غير منجز، ويجب أن توضّح ما أُنجز وما تبقى والخطوة التنفيذية التالية. لا يُستدل على الإنجاز من غياب تنبيه أو من جرد الملف أو نجاح اختبار آلي. تستخدم السكريبتات لإنتاج الجرد والاستخراجات والفحوص اللازمة، وتُطابق النتائج مع المراجع؛ التوليد الآلي لا يحل محل الحكم اللغوي. عند تفريع الملف إلى دفعات، يسجل نطاق كل دفعة، ويظل الملف غير منجز حتى إغلاق جميع الدفعات. بعد كل دفعة تُحدّث الحالة هنا وفي سجل المراجعة المرتبط، وتُسجّل الأدلة وتاريخ التحديث والخطوة التالية.

- وفق سجل المراجعة، أُغلقت 52 وحدة ضمن نطاق وأدلة موثقة حتى B2-11؛ لا يعني الإغلاق ضمن النطاق ضماناً مطلقاً أو اعتماداً رسمياً. التقرير الخاص بكل جولة يبيّن الاختبارات وحدود الأدلة، ولا يعني هذا مراجعة كل عناصر الجرد.
- بقية ملفات هذا الجرد لا تزال مفتوحة حتى تُراجع مباشرة ويُحدّث سجلها. تدقيق التمارين الآلي وفحوص TypeScript/ESLint والبناء لا تثبت سلامة اللغة أو جودة التدريس.
- راجع العدد بعد أي إضافة/حذف للملفات؛ هذا السجل جرد لمساحة العمل بتاريخ التحديث وليس بياناً بأن محتوى المشروع كله قد قُرئ.
