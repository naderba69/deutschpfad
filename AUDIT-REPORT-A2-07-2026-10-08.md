# تقرير التدقيق اللغوي والتربوي — A2-07

- **التاريخ:** 2026-10-08
- **المستودع/الفرع:** `naderba69/deutschpfad` — `arena/01a10631-deutschpfad`
- **الدرس:** `a2-07` — `Bank und Geld`، مع إبقاء `order: 1` وترتيب الفهرس كما هو.
- **الحكم:** أُنجز تدقيق فردي لمحتوى A2-07 ومفاتيحه ومشتتاته وترجماته وأدلته. هذا تقرير عن درس واحد، وليس ادعاء اكتمال A1–B2 أو اعتماد Goethe/CEFR أو قياس جاهزية المتعلم.

## ملفات الدفعة ذات الصلة

- `src/data/lessons/a2/a2-07.ts` و`src/data/lessons/a2/a2-07.test.ts`
- صف A2-07 وحده في `src/data/lessons/meta.ts`، وإضافة A2-07 إلى `src/data/lessons/academic-depth.test.ts`
- `src/types/lesson.ts`, `src/lib/lesson/error-types.ts`, و`src/lib/lesson/error-types.test.ts` لدعم تصنيف فهم القراءة/الاستماع
- هذا التقرير و`PROFESSIONAL_CONTINUATION_PROMPT_AR.md`

## النطاق والجرد

راجعت بنود الدرس على مستوى المعرّف، لا بمجرد التحقق من وجود الحقول:

| القسم | العدد | المعرّفات |
|---|---:|---|
| مراجعة سابقة | 3 | `r1–r3` |
| بنك التدريب | 14 | `e1–e14` |
| اختبار مصغّر | 5 | `m1–m5` |
| كتابة/إملاء | 3 | `w1–w3` |
| فهم المقروء | 4 أسئلة | `rq1–rq4` |
| فهم المسموع | 4 أسئلة | `q1–q4` في حوارين |
| **مجموع المهام القابلة للإجابة** | **33** | جميع ما سبق |

وفوقها: كتلتان نظريتان، 16 مثالاً مترجماً، جدولان (7 و9 صفوف)، 8 أخطاء نظرية مصنفة، نص من 4 فقرات و233 كلمة وفق العدّ المفصول بالمسافات، 12 مفردة في مسرد القراءة، 4 عبارات جاهزة، حوارا استماع من 6 و5 أسطر، 6 مداخل نطق و4 أسطر ترديد، 12 بطاقة، ونشاط وساطة واحد وتفاعل نصي من جولتين. لا توجد مدة درس بالدقائق.

## الخلاصات والتعديلات ذات الأثر

1. **`es gibt` والزمن والمطابقة:** ثبت استعمال Akkusativ بعد التركيب، مع تغيّر الفعل بحسب الزمن: `gibt`, `gab`, و`hat … gegeben`. الجمع في المتمم لا يحوّل فعل الحاضر إلى `geben`: `Es gibt viele Banken`. لا يوصف التركيب بأنه ثابت غير قابل للتصريف.
2. **`Geldautomat`:** جرى فحص `den/einen Geldautomaten` على أنه Akkusativ مفرد لاسم ذي تصريف ضعيف؛ لا تعميم للنهاية `-en` على الأسماء الأخرى. عُدّل تمرين `e14` وشرحه لذكر المفرد المقصود صراحةً.
3. **`Euro`:** مفتاح `r3` هو `Euros` في جمع الاسم مع أداة التعريف. أما كتابة المبالغ فبديل سياقي موثق مثل `10 Euro`؛ `Euroen` ليس الجمع المقصود هنا. لذلك بقي الفرق مصنفاً **سياقياً** لا خطأً مطلقاً.
4. **الضمائر وDativ:** جرى التحقق من جداول IDS Grammis ومن أمثلة `helfen`, `gehören`, `danken`. لا تُساوى الحالة الألمانية Dativ مباشرةً بالجر العربي، ولا يُستنتج اختيار الضمير من ترجمة عربية مفردة. `danken` يأخذ Dativ عند ذكر الشخص، مع إمكان حذف المتمم في سياقات يذكرها Duden.
5. **صياغة نقد/بطاقات:** الخطأ «`bar` تعني حانة دائماً» صُنّف خطأً مؤكداً: الصفة `bar` في `bar zahlen` غير الاسم `die Bar`. كما ضُبطت كتابة العلامة `girocard` وفق استعمال Bundesbank، وذُكر أن `Bankkarte` تسمية أعم لا مرادف تلقائي لـ`Kreditkarte`.
6. **مراجعة `Kaffee`:** مفتاح `r1`، `einen`, صحيح عند قراءة `Kaffee` بمعنى حصة/كوب؛ Duden يسجل الاسم مذكراً ويورد استعمال الطلب المعدود. توجد قراءة غير معدودة في سياقات أخرى، لكنها ليست خياراً في سؤال الأداة. لذلك هذه **ملاحظة سياقية** لا خطأ في المفتاح.
7. **القراءة:** صيغ سبب فتح الحساب في الغرض المستقبلي (`damit … bezahlen kann`) لتجنب الإيحاء بأن لينا تجري التحويل بالفعل قبل فتح الحساب. عُدلت ترجمة `Übersicht` إلى «ملخص/جدول المعلومات» لا «النشرة» من دون قرينة، وحُسنت ترجمة `Gebühr` إلى «الرسم/رسوم الخدمة». صُحح شرح السؤال `rq3` ليقول «تضع علامة على السطر» ويطابق سبب السؤال في النص.
8. **التفاعل:** صار رد سؤال رسم النموذج ذي البطاقة يجيب مباشرةً: «يكلف النموذج ثلاثة يورو شهرياً في هذا المثال»، مع التصريح أن الأسعار خيالية؛ لم يعد الرد يحيل إلى ملخص الأسعار بدلاً من الإجابة عن السؤال.
9. **تصنيف الفهم:** أضيف نوع خطأ مستقل `comprehension` بأسماء عربية/ألمانية إلى قاموس الأنواع، واستُخدم لأسئلة القراءة والاستماع الثمانية؛ لا تُعرض أسئلة فهم النص خطأً على أنها مفردات فقط.
10. **مراجع مهام المراجعة:** صارت تعليمات `r1–r3` تسمّي مستوى A1 ومعرّف المصدر السابق `a1-07` صراحةً، بما يحقق فحص سلامة الإحالة للمراجعة.

## سجل المهام ومفاتيحها ومشتتاتها

### المراجعة `r1–r3`

| المعرّف | المفتاح والحكم الفردي على الخيارات |
|---|---|
| `r1` | `einen` صحيح مع `Kaffee` المذكر في Akkusativ، بمعنى حصة/كوب. `ein` لا يطابق الجنس والحالة، `eine` مؤنث، و`der` Nominativ لا أداة المفعول هنا. القراءة غير المعدودة التي قد تسمح بقول `Kaffee kaufen` ليست خياراً في هذا السؤال. |
| `r2` | `das Geld` = المال. `Gold` ذهب، و`Karte` بطاقة، و`Konto` حساب؛ ليست أي منها معنى الكلمة المطلوبة. |
| `r3` | `Euros` هو جمع الاسم المقصود (`die Euros`). `Euro` يظهر في كتابة المبالغ مثل `10 Euro`، و`Euroen` صيغة غير مناسبة هنا. شرح السؤال يقيّد الاختيار بالسياق الصرفي. |

### بنك التدريب `e1–e14`

| المعرّف | المفتاح/الإجابة المقبولة | فحص المشتتات والبدائل |
|---|---|---|
| `e1` | `eine` — `Es gibt eine Bank…` | `ein/einen` لا يوافقان جنس `Bank`; و`der` لا يوافق الأداة المطلوبة بعد `es gibt`. |
| `e2` | `keinen` — `Park` مذكر مفرد في Akkusativ | `kein` لا يطابق صيغة المفعول، و`keine` تصلح لأسماء مؤنثة أو جمع لا لهذا الاسم، و`nicht` لا يحل محل أداة النفي في هذا الموضع. |
| `e3` | `mich → Er sieht mich`; `dich → Ich sehe dich`; `mir → Kannst du mir helfen?`; `dir → Ich helfe dir` | دُققت الأزواج الأربعة وترجمتها كلٌّ على حدة؛ أزواج `sehen` في Akkusativ، و`helfen` في Dativ في الأمثلة المحددة. |
| `e4` | `Kannst du mir helfen?` | الترتيب يضع الفعل المصرف أولاً في سؤال نعم/لا، والضمير قبل المصدر؛ رُوجعت الرموز الخمسة لا النتيجة وحدها. |
| `e5` | `mich → mir` في `Kannst du mir helfen?` | الخيارات `mich/dich/ihn` لا تحقق متمم `helfen` المقصود أو الشخص المحدد. |
| `e6` | `sie / dir / mich` | `ihr/ihn` لا يطابقان مفعول `sehen` في القراءة «هي»؛ `dich/mir` يخلطان الشخص أو الحالة في `danken`; `mir/dich` لا يوافقان `Sie liebt mich`. فُعّلت حساسية حالة الأحرف لتفريق `sie` من `Sie` الرسمية. |
| `e7` | `Gibt es einen Geldautomaten?` | صيغة التحويل الوحيدة المسجلة تطابق السؤال المطلوب؛ الفعل يتقدم ويظل الاسم في Akkusativ. لم تُقبل بدائل لا ينتجها التحويل المحدد. |
| `e8` | `bar zahlen` = يدفع نقداً | «بالبطاقة»، «يحوّل المال»، و«يسحب نقوداً» أفعال دفع/تحويل/سحب مختلفة، لا معنى العبارة. |
| `e9` | `ihn → ihm` في `Das Buch gehört ihm` | `ihn` Akkusativ، و`ihr/es` لا يطابقان الضمير المذكر للشخص المقصود. |
| `e10` | الإملاء: `Ich überweise das Geld auf dein Konto.` | قورنت الجملة كاملةً وحُفظت حالة الأحرف. `überweisen` غير منفصل في هذا المعنى، وPartizip II هو `überwiesen` لا `übergewiesen`. المصحح يتجاهل الترقيم؛ لذا لا يُدّعى أن هذا البند يقيس الفاصلة/النقطة. |
| `e11` | تحويل مبلغ من حساب إلى آخر | السحب من الصراف، الدفع بالبطاقة عند الصندوق، ووضع العملات في ظرف لا تشرح التحويل المصرفي؛ المفتاح يطابق تعريف Duden لـ`überweisen`. |
| `e12` | `hebe` — `Ich hebe … Geld ab` | `abhebe` لا يفصل البادئة في الجملة الرئيسية، `hebst` للشخص `du`، و`heben` مصدر/جمع لا تصريف `ich`. |
| `e13` | `gab` في `Früher gab es…` | `gibt` حاضر، `geben` مصدر/جمع، و`gebe` لا يوافق Präteritum للشخص المفرد. |
| `e14` | `einen Geldautomaten` | `einem` Dativ، و`ein/der` لا يحققان الصيغة المذكرة المفردة في Akkusativ بعد `es gibt`. نهاية `Geldautomaten` مثبتة في جدول Duden. |

### الاختبار المصغّر `m1–m5`

| المعرّف | المفتاح والحكم على الخيارات |
|---|---|
| `m1` | `einen Park`: `ein/eine/der` تخالف الجنس أو الحالة في هذا المثال. |
| `m2` | `mir`: `mich` Akkusativ، و`dich/dir` للمخاطب لا للمتكلم. |
| `m3` | `Gibt es hier einen Geldautomaten?`: سؤال نعم/لا يبدأ بالفعل؛ راجع اختبار الترتيب للرموز الستة. |
| `m4` | `dich → dir` في `Ich danke dir`: الخيارات الأخرى لا تمثل Dativ للشخص المخاطب. |
| `m5` | `dich` مع `sehen` و`dir` مع `helfen`: البديلان المتبادلان يخلطان الحالة التي يطلبها كل فعل. |

### الكتابة `w1–w3`

- **`w1`:** قُبلت إجابتان صحيحتان: `Es gibt eine Bank in der Nähe.` و`In der Nähe gibt es eine Bank.` كلاهما يحافظ على V2؛ الفعل `gibt` يبقى في المرتبة الثانية عند تقديم ظرف المكان. لا يُقاس أداء حر غير مدرج في قائمة الإجابات.
- **`w2`:** المفاتيح بالترتيب `dich / mir / ihm`. كل بديل مسجل اختُبر في فراغه: `dir/mich` لا يطابقان `sehen`, `mich/dir` لا يطابقان `helfen` للمتكلم، و`ihn/ihr` لا يطابقان `gehören` مع `er`.
- **`w3`:** `Kannst du mir bitte helfen?`؛ الإجابة حساسة لحالة الأحرف. يحتسب البند كتابة الجملة وصيغة `mir`، لا جودة النطق؛ كما أن محرك الإملاء يطبّع علامات الترقيم.

### القراءة `rq1–rq4`

النص قصة تدريبية لا تعرض عروض بنك حقيقية؛ فالأسماء والأسعار موسومة بأنها مختلقة وغير صالحة لاتخاذ قرار مالي. الإحالات هي 1-based: `rq1→1`, `rq2→2`, `rq3→2`, `rq4→4`.

| السؤال | المفتاح | فحص المشتتات |
|---|---|---|
| `rq1` | تريد فتح الحساب لتدفع الإيجار شهرياً بتحويل مصرفي | العمل في البنك، تبديل المال يومياً، وبيع البطاقات لا يرد في القصة ولا يفسر الغرض المذكور. |
| `rq2` | النموذج B يتضمن `Bankkarte` ويكلف ثلاثة يورو شهرياً في هذا المثال | A بلا بطاقة وبسعر سنوي، وبطاقة ائتمان مجانية في كل بنك، وبطاقتان مع سعر غير مذكور؛ كلها تخالف تفاصيل الفقرة أو تضيف تعميماً لا يقوله النص. |
| `rq3` | المبلغ غير محدد؛ تضع علامة لتسأل عنه لاحقاً | أخذ الموظفة الملخص، وإغلاق الحساب، ونسيان البطاقة ليست أحداثاً في النص. الترجمة تذكر علامةً على السطر لا تعلّم السطر. |
| `rq4` | تقارن المعلومات وتقرر لاحقاً | فتح حسابين فوراً، اختيار B لكونه مجانياً في كل مكان، وإغلاق الحساب بواسطة الأخ تناقض النهاية أو تضيف خبراً غير وارد. |

جميع الفقرات الأربع لها ترجمة مقابلة. تمت مراجعة 12 مدخلاً معجمياً وربطها بالنص، مع اعتماد «رسوم الخدمة» لـ`Gebühr` و«ملخص/جدول المعلومات» لـ`Übersicht` في هذا السياق.

### الاستماع `q1–q4`

النصان حواران تدريبيان متخيّلان؛ طوبقت الأسطر الألمانية وترجماتها كلها، 6 أسطر في `l1` و5 في `l2`:

- `l1`: التحية وطلب المساعدة؛ رغبة سامي في فتح حساب؛ نموذجَا حساب في مثال تدريبي؛ سؤال الرسوم؛ وجودها في `Übersicht`; ثم قوله إنه سيقرأ المعلومات بهدوء. التراكيب والترجمات متسقة، ولا تذكر أسعاراً حقيقية.
- `l2`: طلب نقود وصراف؛ موقعه بجانب المدخل؛ سؤال إمكان السحب بالبطاقة؛ عدم فهم كريم لما يظهر على الشاشة؛ ورد منى `Ich helfe dir`. الإحالة `neben dem Eingang` وضميرا `mir/dir` متسقان.
- `q1`: فتح حساب؛ المشتتات شراء منزل/دفع فاتورة نقداً/سحب نقود لا تطابق مقصد سامي.
- `q2`: `in der Übersicht`; البطاقة والجواز والصراف ليست موضع المعلومات في السطر المسموع.
- `q3`: `neben dem Eingang`; المحطة والمقهى والمكتب غير مذكورة.
- `q4`: لا يفهم شاشة الصراف؛ فقدان البطاقة وإغلاق الحساب وعدم معرفة المدخل أحداث غير مسموعة.

استخدمت الأسئلة نوع خطأ `comprehension`. دليل هدف الاستماع يعتمد المعرّفات بلا كشف التفريغ؛ `listening-transcript:...` ليس دليلاً على الاستماع.

## النظرية والنطق والمواد المساندة

### `t1`: `es gibt` + Akkusativ

- **الادعاءات:** Akkusativ للمتمم؛ مطابقة مفرد الفعل في الحاضر في الأمثلة حتى مع متمم جمع؛ V2 عند تقديم ظرف؛ وسؤال الفعل أولاً؛ وتغيّر الزمن `gibt/gab/hat gegeben`. المقارنة العربية لا تنقل الحالة آلياً، ومجموعة المكان مميزة من المتمم.
- **الأمثلة الثمانية، وكلها صحيحة وترجمتها متسقة:** `Es gibt eine Bank in der Nähe`; `Es gibt einen Park im Zentrum`; `Es gibt ein Konto für den Alltag`; `Gibt es hier einen Geldautomaten?`; `Es gibt keine Filiale am Bahnhof`; `In der Nähe gibt es mehrere Banken`; `Früher gab es hier eine kleine Bank`; `Es hat früher hier einen Geldautomaten gegeben`.
- **الأخطاء الأربعة المصنفة مؤكدة:** `ein Bank→eine Bank`; `Es geben viele Banken→Es gibt viele Banken`; `Es gibt der Park→Es gibt einen Park`; `keinen Automat→keinen Automaten`. كل شرح يقيّد القاعدة إلى الاسم/التركيب المقصود.

### `t2`: الضمائر الشخصية مع أفعال مختارة

- الجدول يغطي ضمائر Nominativ/Akkusativ/Dativ للشخص الأول والثاني، الغائب المفرد/الجمع، وصيغة الاحترام `Sie/Sie/Ihnen`. الصيغ تطابق جداول IDS Grammis.
- **الأمثلة الثمانية، وكلها صحيحة:** `Ich sehe dich jeden Tag`; `Kannst du mir helfen?`; `Das Buch gehört ihm`; `Ich danke dir für alles`; `Sie liebt mich`; `Können Sie mir bitte helfen?`; `Ich fahre mit ihr zur Bank`; `Wir sehen sie am Bahnhof`. الأخيرة تحتمل مرجعاً مؤنثاً مفرداً أو جمعاً بحسب السياق؛ الترجمة الحالية تختار قراءة الجمع، ولا تعيّن مرجع الألمانية وحدها.
- **الأخطاء الأربعة المصنفة مؤكدة في المعاني المقصودة:** `mich helfen→mir helfen`; `gehört ihn→gehört ihm`; `Ich sehe dir` بمعنى «أراك» → `Ich sehe dich`; و`Ich danke dich→Ich danke dir` عند ذكر الشخص. قُيد شرح `sehen` بمعنى رؤية شخص/شيء، وشرح `danken` بذكر الشخص، منعاً لتعميم غير لازم.

### مواد النطق والبطاقات والأنشطة المفتوحة

- راجعت ملاحظات النطق منفردةً: `Konto`, `Geld`, `überweisen`, `Geldautomat`, `Kreditkarte`, `abheben`. IPA/النبر والمدود المقصودة لا تُستبدل بتهجئة عربية، ولا توصف التقريبات العربية بأنها نطق معياري. أسطر shadowing الأربعة هي `Ich möchte ein Konto eröffnen`, `Es gibt einen Geldautomaten`, `Kannst du mir bitte helfen?`, `Das gehört mir`؛ كلها للتكرار الذاتي فقط.
- راجعت البطاقات `fc1–fc12`: `das Konto`, `das Geld`, `überweisen`, `bar bezahlen`, `der Geldautomat`, `es gibt`, `mich/dich/mir/dir`, `die Bankkarte`, `abheben`, `die Gebühr`, `die Übersicht`, `das Kontomodell`. الترجمة والأمثلة مربوطة بالاستخدام في الدرس.
- الوساطة مبنية على نموذج مصرفي **خيالي**؛ تميّز وثيقة الهوية المذكورة من مستندات إضافية قد تختلف، ولا تطلب بيانات شخصية حقيقية. رد الوساطة لا يدّعي أنه قائمة قانونية شاملة.
- التفاعل نصي من جولتين وأربعة ردود ممكنة؛ الخيارات الأربعة صالحة في سياقها، والرد عن السعر يجيب مباشرةً وفق السعر الخيالي في القراءة. الاختيار لا يقيس الكلام. لا يوجد هدف أداء شفهي/نطق قابل للتقييم.

## الأهداف وأدلة الأداء

كل الأهداف الستة `all-correct` ومربوطة بمهمات قابلة للإجابة. حدث الفتح أو كشف المحتوى لا يُحتسب أداءً.

| الهدف | ما يُقاس | معرّفات المهام الدقيقة |
|---|---|---|
| `z1` | إثبات/نفي/سؤال `es gibt`، أداة الاسم، وصيغة الماضي المعروضة | `practice:a2-07:e1/e2/e7/e13/e14`; `flow-practice:a2-07:e1/e2`; `mini-test:a2-07:m1/m3`; `writing:a2-07:w1` |
| `z2` | ضمير مناسب مع أفعال مختارة | `practice:a2-07:e3/e5/e6/e9`; `flow-practice:a2-07:e3`; `mini-test:a2-07:m2/m4/m5`; `writing:a2-07:w2/w3` |
| `z-bank` | فهم/استخدام مفردات الدفع والتحويل والسحب | `practice:a2-07:e8/e10/e11/e12` |
| `z3` | تفاصيل الحوارين قبل التفريغ | `listening:l1:q1`, `listening:l1:q2`, `listening:l2:q3`, `listening:l2:q4` |
| `z-reading` | استخراج الغرض والتفاصيل من القصة | `reading:read-a2-07:rq1/rq2/rq3/rq4` |
| `z-writing` | تحويل جملة وجود، إكمال ضمائر، وإملاء جملة | `writing:a2-07:w1/w2/w3` |

`practice` يعرض خمس مهام عشوائية من بنك الـ14 في كل دفعة ويسجل `practice:{lessonId}:{exerciseId}`. أما `lesson-flow` فيكشف تدريجياً أول `min(4, practiceBank.length)` فقط ويسجل `flow-practice:{lessonId}:{exerciseId}`؛ لذلك استُخدمت بادئة التدفق لـe1–e3 فقط. استُبعدت إجابات ما بعد كشف التفريغ وأي مشاهدة للنشاط.

## المواءمة التربوية وحدود الادعاء

- يصف Companion Volume لمجلس أوروبا مستوى A2 بفهم نصوص قصيرة بسيطة عن أمور مألوفة ملموسة بلغة يومية/عملية عالية التواتر، وبالتقاط الفكرة الرئيسية من رسائل قصيرة واضحة. دليل منفصل لمهام القراءة والاستماع يورد مدى تقريبيّاً لطول نص المصدر عند A2؛ طول القصة هنا 233 كلمة يقع ضمن ذلك المدى التقريبي، لكن الطول وحده لا يثبت مستوى المهمة.
- مفردات مصرفية مثل `Konto`, `Gebühr`, `überweisen`, `abheben`, `bar`, و`Kreditkarte` كثيفة نسبياً. صفحات Duden تضع عدداً منها ضمن وسم «Wortschatz des Goethe-Zertifikats B1». هذا **تنبيه إلى ضرورة التمهيد والمسرد والتكرار**، لا معياراً حاسماً يمنع ظهورها في وحدة A2، ولا إثبات اعتماد/تصنيف رسمي للدرس. القراءة تتضمن مسرداً من 12 مدخلاً، والحوارات والتدريب تعيد المفردات في سياقات بسيطة.
- بيانات Bundesbank المذكورة محددة بألمانيا وعام 2023: النقد 51% وبطاقات الخصم 27% من المعاملات بحسب العدد في تلك الدراسة؛ لا تعميم على أوروبا أو كل متجر أو الوضع الحالي. BaFin يسند فقط السياق العام للحساب الجاري: تحويل الأموال والسحب النقدي، تنوع نماذج الحساب والرسوم، وطلب وثيقة هوية صالحة في ألمانيا؛ أما الأسماء والأسعار في القصة فمختلقة.
- لا نزعم اعتماد Goethe/CEFR، أو اكتمال محتوى المسار، أو قياس كلام/نطق أو جاهزية عامة. تحقق النصوص هنا لغوي/تحريري؛ صوت TTS لم يُقيّم سمعياً كعينة معيارية، ولا يسجل الدرس نطق المتعلم.

## نتائج التحقق وحدود العمل المتبقية

- `npx vitest run src/data/lessons/a2/a2-07.test.ts src/lib/lesson/error-types.test.ts --reporter=verbose`: **15/15**؛ ملفا الاختبار المستهدفان ناجحان.
- `npx eslint` على `a2-07.ts`, واختباره، `meta.ts`, `academic-depth.test.ts`, نوع الدرس وقاموس أنواع الأخطاء واختباره: **ناجح**.
- `git diff --check`: **ناجح**.
- المجموعة الكاملة `npm test -- --reporter=dot`: **439 ناجحاً/467**، وبقيت 28 حالة فاشلة في ملفات خارج A2-07: `competencies` (13)، `academic-depth` (5 في A1-03/A1-06/A2-03)، `integrity` (2 في A1-11/حدّ تغطية النطق العام)، `reading-complements` (2 في A2-08 وما بعده/B1/B2)، `review-generator` (1)، و`daily-plan` (5). فحص سلامة إحالات مراجعة A2-07 يمر؛ لا تُصلح البنود الأخرى ضمن هذه الدفعة.
- `npm run typecheck -- --pretty false` يفشل بـ25 تشخيصاً خارج الدفعة: `Check` مفقود في `unit-row.tsx`; `isLessonUnlocked` غير مُصدّر؛ اختلاف أنواع أحداث النطق في اختبارات A1 وA2-03؛ ودوال/تصديرات وواجهات غير متوافقة في اختبارات `competencies` و`daily-plan`. لم يظهر خطأ نوعي في A2-07 أو تعريف `comprehension`.
- يظهر تحذير Vitest غير المانع عن مزج ESM/CJS في `vitest.config.ts`. لم يُشغّل `npm run build` في هذه الدفعة. أثبت تثبيت الحزم `npm ci --ignore-scripts` وأظهر تدقيق npm السابق 24 advisory؛ لم تُجرَ تغييرات اعتماديات.

## المصادر المستخدمة

### اللغة والصرف والنطق

- IDS Grammis، [Die Form _es_ und ihre Verwendungen](https://grammis.ids-mannheim.de/kontrastive-grammatik/3750): يصف `es` في تراكيب الوجود بأنه فاعل شكلي عديم الدلالة المرجعية.
- IDS Grammis، [Personalpronomen](https://grammis.ids-mannheim.de/progr@mm/6855): جداول صيغ الضمائر، ويعرض مادة الضمائر ضمن هدف تعلم A1؛ وهذا لا يجيز وصف كل حالة هنا بأنها أول تعرض.
- Duden، [geben](https://www.duden.de/rechtschreibung/geben) و[Dativobjekt](https://www.duden.de/sprachwissen/fuer-lernende/dativobjekt): أمثلة `es gibt`, التصريف، أمثلة Dativ، والفرق بين متمم الفعل ومجموعة الجر.
- Duden، [helfen](https://www.duden.de/rechtschreibung/helfen)، [gehören](https://www.duden.de/rechtschreibung/gehoeren)، [danken](https://www.duden.de/rechtschreibung/danken): أمثلة الأفعال والضمائر، مع التنبيه إلى إمكان حذف Dativ في بعض استعمالات `danken`.
- Duden، [Deklination von Geldautomat](https://www.duden.de/deklination/substantive/Geldautomat) و[Deklination von Euro](https://www.duden.de/deklination/substantive/Euro_Waehrung): جداول `den Geldautomaten` و`Euros`، مع `10 Euro`.
- Duden، [überweisen](https://www.duden.de/rechtschreibung/ueberweisen)، [abheben](https://www.duden.de/rechtschreibung/abheben)، [bar](https://www.duden.de/rechtschreibung/bar_Adjektiv)، [Bar](https://www.duden.de/rechtschreibung/Bar_Lokal): المعنى المصرفي، الفصل/التصريف، الدفع نقداً، والتمييز بين الصفة والاسم.
- Duden، [Gebühr](https://www.duden.de/rechtschreibung/Gebuehr)، [Übersicht](https://www.duden.de/rechtschreibung/Uebersicht)، [Geld](https://www.duden.de/rechtschreibung/Geld)، [Konto](https://www.duden.de/rechtschreibung/Konto)، [Kreditkarte](https://www.duden.de/rechtschreibung/Kreditkarte)، و[Kaffee](https://www.duden.de/rechtschreibung/Kaffee): التعريف والجنس والجمع والنطق أو أمثلة الحقول المعجمية ذات الصلة.
- DWDS، [Konto — Aussprache](https://www.dwds.de/wb/Konto): مرجع IPA لـ`Konto` `[ˈkɔnto]`.

### المستوى التعليمي والسياق المصرفي

- Council of Europe، [CEFR Companion Volume — communicative language activities and strategies](https://rm.coe.int/chapter-3-communicative-language-activities-and-strategies/1680a084b4): أوصاف عامة لمهارات A2؛ تُستخدم للمقارنة لا لاعتماد الدرس.
- Council of Europe، [A CEFR Reference Guide for Assessment Tasks: Reading & Listening](https://rm.coe.int/a-cefr-reference-guide-for-assessment-tasks-reading-and-listening/1680a9178e): إرشادات تقريبية لخصائص مهام ونصوص القراءة والاستماع، لا شهادة مطابقة.
- Deutsche Bundesbank، [Payment behaviour in Germany in 2023](https://www.bundesbank.de/en/press/press-releases/payment-behaviour-in-germany-in-2023-934894) و[Card payments](https://www.bundesbank.de/en/tasks/payment-systems/oversight/card-payments-626460): نسب الدراسة المحددة، وتعريف الفرق بين debit وcredit وgirocard.
- BaFin، [Current accounts: everything you need to know](https://www.bafin.de/EN/verbraucherinnen-verbraucher/themen-finanzprodukte/konten-zahlungen/konten/girokonto/girokonto_en.html): معلومات ألمانيا عن الحساب الجاري، الهوية، وتفاوت نماذج الحساب والرسوم. لم تُستخدم هذه الإرشادات لإضفاء واقعية على أسعار القصة الخيالية.
