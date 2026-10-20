# تقرير تدقيق الدرس B1-01 — التعليم والدراسة (Genitiv وRelativsätze)

- **التاريخ:** 2026-10-10
- **الدرس:** `b1-01` — Ausbildung und Studium
- **النطاق:** `src/data/lessons/b1/b1-01.ts`، واختباره الجديد `src/data/lessons/b1/b1-01.test.ts`، وهذا التقرير، وسطر الحالة في الموجّه. صف B1-01 في `meta.ts` **لم يتغير** لأن ملخصه كان مطابقاً للدرس.
- **خارج النطاق (لم تُلمس):** A2-09 وملفاته وhunk الخاص به، وA2-13 وA2-12، وبقية دروس B1 وB2، وملفات القراءة والكفاءات والـplacement، و`academic-depth.test.ts`.
- **لا يعني ذلك:** اعتماد Goethe/CEFR، أو إتقان عام للكلام أو الاستماع أو النطق، أو اكتمال B1.

## 1. الجرد قبل التدقيق

- 4 أهداف، **بلا أي `evidence`** في النسخة الأصلية. z1 كان «أتحدث عن التعليم»، وz4 «أتحدث عن النظام التعليمي في بلدي»: كلاهما إنتاج كلام لا تقيسه الواجهة.
- مراجعة 3 بنود، نظريتان (t1 Genitiv، t2 Relativsätze)، استماع حوارين و4 أسئلة، نطق 6 مداخل و4 جمل ظلّ، كتابة/إملاء 3، تدريب 11 تمريناً، mini-test 5، 8 بطاقات، وساطة واحدة وتفاعل نصي من جولتين.

## 2. الأخطاء المُصلَحة

### 2.1 أهداف غير قابلة للقياس
- z1 صار: فهم مصطلحات التعليم والتخصصات من حوار قصير، ومرتبط بـ`listening:l1:q1` و`listening:l1:q2` و`listening:l1:q4`. كشف النص (`listening-transcript`) لا يُحتسب.
- z2 (Genitiv) ← e1 (يظهر ضمن أول أربعة في التدفق) وe5 (تصحيح wegen) وw1 (كتابة جملة).
- z3 (Relativsätze) ← e4 (ترتيب) وe6 (ضمير نسبي في النصب) وm5 (dem/das) في الاختبار المصغّر.
- z4 ← **مهمة مطابقة جديدة `e12`** لأنواع المدارس والشهادات (Gymnasium، Abitur، Grundschule، Bachelor). صيغة الهدف لم تعد «أتحدث عن النظام التعليمي في بلدي».
- الوساطة `med-b1-01-1` والتفاعل `int-b1-01-1` والنطق `p1` **لا** تُحتسب دليلاً لأي هدف.

### 2.2 أخطاء في الحقائق والمصادر
| الموضع | الخطأ | الإصلاح والمصدر |
|---|---|---|
| `t1` جدول الجمع | Genitiv الجمع `der (+n)` | الصواب `der` بلا إضافة: في الجمع تبقى صيغة الاسم كما هي في كل الحالات ما عدا Dativ. [deutschegrammatik20.de](https://deutschegrammatik20.de/das-substantiv-nomen/deklination-substantiv-artikel-bestimmt/) |
| `t1` whyAr | «الألمان أنفسهم يستخدمونها أقل» و«إلزامية في الكتابة» و«امتحان Goethe B1» | ادعاءات غير مسندة أو مرتبطة بالاعتماد؛ أُزيلت وأُعيد الشرح إلى الاستعمال الرسمي/اليومي. |
| `t1` mnemonic | «ويسّن» (لا معنى لها) | «Genitiv = لمن؟ (wessen)». |
| `t2` comparisonWithArabic | «نفس فكرة dass» | تشبيه غير مسند لا يساعد على الفرق؛ أُزيل. |
| `l2` حوار منى | «تسع سنوات للمدرسة ثم الدراسة» في تونس | خطأ: التعليم الأساسي 9 سنوات ثم **4 سنوات** ثانوية، ثم البكالوريا. الحوار صُحّح. [tunisiaeducation.info](https://www.tunisiaeducation.info/education-system/tunisian-education-structure.html) |
| `q3` | «الطب في تونس ستّ سنوات» بلا مصدر | السؤال صار «حسب منى» (ادعاء داخل الحوار). |
| `l2` (حوار المعلّم) | «في ألمانيا مشابه» بلا تحديد | صار «Regelstudienzeit für Medizin ... sechs Jahre» (12 فصلاً). [praktischarzt.de](https://www.praktischarzt.de/medizinstudium/medizinstudium-dauer/) |
| `fehlerUndTipps.culturalNote` | «الجامعات شبه مجانية؛ رسوم ~300 يورو تشمل تذكرة المواصلات» و«DAAD أهم جهة للمنح العربية» | الرسوم الدراسية العامة لا تُفرض في الجامعات الحكومية عادةً، لكن Semesterbeitrag يتراوح غالباً بين 150 و400 يورو ويغطي غالباً Semesterticket وStudierendenwerk؛ استثناء بادن-فورتمبرغ لغير الاتحاد الأوروبي (1500 يورو). [studierenguru.de](https://studierenguru.de/studiengebuehren/) · [study-abroad.org](https://www.study-abroad.org/blog/germany-cheapest-universities/) · [studis-online.de](https://www.studis-online.de/studienkosten/semesterbeitrag.php). حُذف الادعاء بأن DAAD هي الأهم. |
| `t1` relatedRuleComparison | قاعدة Genitiv/von فقط | أُضيف أن Dativ بعد wegen/trotz شائع في الاستعمال اليومي، وأن Duden يذكر هذه الاستبدالات. [duden.de](https://www.duden.de/sprachwissen/sprachratgeber/Die-Genitivregel) |
| `p1` | «d في بداية Studium = د+s» | خطأ: الكلمة تبدأ بـ**St** = شت. |
| `p1` | «e مفتوحة: ليرِر» و«-tät = تِهت» | وصف غير دقيق: e الأولى طويلة (ليه)، و-tät تُنطق «تيت» مع ä الطويلة. |
| `einfuehrung` | «ثالث الحالات الأربع» | خطأ: Genitiv هي **الرابعة** (Nominativ، Akkusativ، Dativ، Genitiv). و«اليوم الرابعة» صارت «الآن الحالة الرابعة». |

### 2.3 أخطاء في الأسئلة والمشتتات
| التمرين | المشكلة | الإصلاح |
|---|---|---|
| `r2` | `wenn` تعطي قراءة شرطية صحيحة لغوياً (`Ich lerne Deutsch, wenn ich will`) | استُبدلت بـ`obwohl` (تقابل، وهو خطأ هنا). |
| `e4` (ترتيب) | الرموز تحوي فاصلة واحدة فقط، والجملة الصحيحة فيها فاصلتان | أُضيفت الفاصلة الثانية و«.» لتطابق الجملة الصحيحة. المقارنة لا تعتمد على الترقيم، لذا القبول لم يتغير. |
| `e5` (تصحيح خطأ) | التعليمة تذكر «لا خطأ» ولا يوجد خيار كذلك؛ وخيار `dem Regen` قد يكون مقبولاً في الاستعمال اليومي | أُزيلت «لا خطأ» من التعليمة، وحُذف `dem` من المشتتات، وأُضيف `des Regen` (ناقصاً s). |
| `e9` (تصحيح خطأ) | `von dem Lehrer` ليست خطأ مطلقاً، بل صيغة كلامية مقبولة | حُوّل إلى تمرين **تحويل إلى الصيغة الرسمية** (`transformation`) يقبل `des Lehrers`. |
| `m4` (تصحيح خطأ) | `Trotz dem Wetter` صيغة مستعملة في الكلام، فلا تصلح خطأً واحداً حاسماً | استُبدلت الجملة بـ`Trotz das Wetter`، والخطأ هنا `das` (محايد غير مناسب)، وحُذف `dem` من المشتتات. |
| `q4` | مكرر لـ`q1` (نفس العنصر ونفس الإجابة) | استُبدل بسؤال عن تكلفة الدراسة كما ذُكرت في `l1`. |
| `e10` / `m3` / `w2` / `e1` / `e2` / `e6` / `e7` / `e8` / `m1` / `m2` / `m5` | — | تُحقق من كل مفتاح ومشتت؛ لا خلل في المفاتيح. |

### 2.4 تعديلات تبعاً للتحقق
- `r1` صحيح (`meinem`، Dativ بعد helfen). `r3` صحيح.
- `w1` يقبل `Das ist das Buch des Lehrers` و`Das Buch des Lehrers ist neu`.
- `w3` (إملاء) نص واضح ولا يحتاج تغييراً.

### 2.5 التفاعل والوساطة
- الوساطة: نص المصدر صحيح في تعدد المدارس بعد الابتدائية وفي ربط Gymnasium بالأبيتور؛ الترجمة العربية «الصالة» لـGymnasium كانت غير دقيقة، فصارت «المدرسة الثانوية الأكاديمية (Gymnasium)».
- التفاعل: جولتان، والإجابات المثلى صُحّحت لتكون تحفظية («Ich glaube ...»، «Die Auswahl hängt oft von den Noten ab»)، حتى لا تنسب إلى بلد المتعلم ادعاءً لا نعرفه. (مصدر «القبول حسب الدرجات»: [MERIC-Net, Tunisia national report](http://www.meric-net.eu/files/fileusers/275_Tunisia_National%20Report%20template_MERIC-Net.pdf).)

## 3. التوزيع النهائي للأهداف

| الهدف | الأدلة (`all-correct`) | حدّ الدليل |
|---|---|---|
| z1 | `listening:l1:q1`، `listening:l1:q2`، `listening:l1:q4` | بعد الاستماع، دون كشف النص |
| z2 | `practice:b1-01:e1` + `flow-practice:b1-01:e1`، `practice:b1-01:e5`، `writing:b1-01:w1` | اختيار وتصحيح وكتابة جملة موجّهة |
| z3 | `practice:b1-01:e4` + `flow-practice:b1-01:e4`، `practice:b1-01:e6`، `mini-test:b1-01:m5` | ترتيب موجّه واختيار ضمير |
| z4 | `practice:b1-01:e12` | مطابقة مصطلحات وشهادات؛ لا إنتاج كلام |

- `flow-practice` يُستخدم فقط لـe1 وe4 (أول أربعة تمارين).
- `practice` العشوائي يعرض خمسة من 12، لذلك لا يُفترض ظهور e5 أو e6 أو e12 دائماً.
- لا يُحتسب الوساطة ولا التفاعل ولا النطق ولا كشف النص لأي هدف.

## 4. التحقق
- `b1-01.test.ts`: **11/11**. تغطي الهوية والترتيب وغياب المدة وتطابق الملخص، وتحقق كل هدف بأدلة حقيقية، وكل مفتاح MCQ ومشتتاته، وكل فراغ في fill-blank، وكل تصحيح خطأ (مع رفض الاختيارات الخاطئة)، وmatching مع رفض التبديل، وترتيب e4، وتحويل e7/e9، ومعرّفات الاستماع، وحساب الأدلة.
- كل ملفات `a2/` و`b1-01.test.ts`: **14 ملفاً، 147/147** ناجحة.
- `vitest` الكامل: **8 إخفاقات**، كلها في `academic-depth.test.ts` و`integrity.test.ts` (A1-03/A1-06/A2-03 وغيرها)، ولا تذكر B1-01 في رسائلها. هي نفس الإخفاقات المعروفة قبل الدفعة.
- ESLint على الملفات الجديدة والمعدّلة: ناجح. `git diff --check`: ناجح.
- `tsc --noEmit`: 9 تشخيصات موجودة قبل الدفعة، لا منها في `b1-01.ts` أو `b1-01.test.ts`. **لا أدّعي أن الفرع نظيف الأنواع.**

## 5. المصادر

- Genitiv/Dativ im Plural: [deutschegrammatik20.de](https://deutschegrammatik20.de/das-substantiv-nomen/deklination-substantiv-artikel-bestimmt/) (Genitiv Plural: `der`؛ Dativ Plural: `-n` إلا إذا كان الجمع ينتهي بـ`-n` أو `-s`).
- Genitiv-Ersatz und Präpositionen: [Duden, Die Genitivregel](https://www.duden.de/sprachwissen/sprachratgeber/Die-Genitivregel) (von + Dativ؛ trotz/Dativ).
- التعليم في تونس: [tunisiaeducation.info](https://www.tunisiaeducation.info/education-system/tunisian-education-structure.html)؛ [MERIC-Net national report](http://www.meric-net.eu/files/fileusers/275_Tunisia_National%20Report%20template_MERIC-Net.pdf).
- رسوم الدراسة في ألمانيا: [studierenguru.de](https://studierenguru.de/studiengebuehren/)؛ [study-abroad.org](https://www.study-abroad.org/blog/germany-cheapest-universities/)؛ [studis-online.de](https://www.studis-online.de/studienkosten/semesterbeitrag.php).
- مدة الطب في ألمانيا: [praktischarzt.de](https://www.praktischarzt.de/medizinstudium/medizinstudium-dauer/) (مصدر ثانوي؛ الرقم 12 فصلاً متسق مع Approbationsordnung).

**حدود المصادر:** قُرئت صفحات Duden وdeutschegrammatik20 وstudierenguru عبر مقتطفات البحث وليس بفتح كامل للصفحة؛ يُنصح بالتحقق من النص الكامل قبل نشره كمرجع مستقل.

## 6. حدود ما لم يُتحقق منه
- لا تسجيلات صوتية؛ النطق ومداخل IPA مكتوبة بتقريب عربي.
- مدة الطب في تونس **لم تُتحقق** ولذلك صار السؤال «حسب منى» داخل الحوار.
- الوساطة والتفاعل نصان خياليان؛ لا يقيسان الكلام.
- رسوم Semesterbeitrag تتغير سنوياً وتختلف بين الجامعات؛ النطاق المذكور تقريبي.
- لم يُشغّل build ولا اختبار من طرف إلى طرف.

## 7. الحالة
- الملفات المعدّلة: `b1-01.ts`، `b1-01.test.ts` (جديد)، هذا التقرير، والموجّه. صف `meta.ts` لم يُغيَّر.
