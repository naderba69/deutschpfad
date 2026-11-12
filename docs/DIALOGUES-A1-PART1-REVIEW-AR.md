# تقرير المراجعة المرجعية — حوارات A1، الجزء الأول

**التاريخ:** 2026-10-30  
**النطاق:** `src/data/dialogues/a1/part1.ts` كاملاً، لا عينة.  
**الحالة:** اكتمل التدقيق اللغوي/التعليمي النصي لهذا الملف ضمن العناصر المسجلة أدناه، وأُصلحت المسائل المكتشفة. هذا لا يغلق بقية ملفات الحوارات أو المحتوى في المشروع.

## حدود المراجعة وطريقتها

قُرئت العناصر الخمسة وكل الحقول النصية في الملف، وقورنت جولات الألمانية بأسئلتها ومفاتيح الإجابة ومشتتاتها وشروحها وترجماتها. شمل الفحص: الحوار وسياقه، الترجمة العربية، اتساق أسماء المتحدثين، كل الأسئلة الـ17 وخياراتها الـ51 (17 صحيحة و34 مشتتاً)، الشروح، و25 مدخلاً في `keyVocab`.

استُخدم Duden مباشرة للتحقق من معاني وصيغ ألمانية محددة. هو معجم أحادي اللغة؛ لذلك يسند المعنى والاستعمال الألمانيين ولا يشكل وحده مرجعاً للحكم على طبيعية العربية. فُحصت العربية سياقياً وتحريرياً في كل موضع، لكن لم تُطابق بمصدر عربي مستقل. كذلك لم تُجرَ في هذه الدفعة مطابقة رسمية شاملة لمستوى CEFR/Goethe؛ راجعت ملاءمة البنى للمبتدئ تحريرياً فقط، فلا يُدّعى اعتماد رسمي للمستوى. الحقول `audioNoteAr` تقرأ حدود المصدر كما هي؛ لم تُفحص الملفات الصوتية أو مطابقتها نصياً في هذا النطاق ولم تُستبدل أصول صوتية.

## التغطية — كل الحوارات والمفردات

| المعرّف | المحتوى | ما تمت مراجعته | الحالة |
|---|---|---|---|
| `a1-01-begruessung` | تعارف: الاسم، البلد، المدينة، اللقاء والوداع | 6 جولات؛ 4 أسئلة/12 خياراً؛ 5 مفردات مفتاحية؛ اتساق Thomas/Sara مع أسماء العربية وشروح الدليل | مكتمل نصياً؛ لا تعديل جوهري |
| `a1-02-cafe` | طلب قهوة وحليب وقطعة كعك والسعر | 6 جولات؛ 4 أسئلة/12 خياراً؛ 5 مفردات؛ مطابقة السؤال الرابع لطلب الطعام لا لتناوله، ومراجعة طول المشتتات | مكتمل نصياً؛ عُدلت صياغة السؤال والخيارات |
| `a1-03-supermarkt` | شراء الخبز والحليب وسؤالهما عن السعر | 6 جولات؛ 3 أسئلة/9 خيارات؛ 5 مفردات؛ مطابقة السعرين والسلع والأفعال | مكتمل نصياً؛ لا تعديل جوهري |
| `a1-04-familie` | الأشقاء ومهنة الوالدين | 6 جولات؛ 3 أسئلة/9 خيارات؛ 5 مفردات؛ فحص العدد والجنس والمهن ومصداقية المشتت | مكتمل نصياً؛ عُدّل مشتت العدد ووُحّد تهجّي Paul بالعربية |
| `a1-05-uhrzeit` | الوقت وانطلاق الحافلة | 6 جولات؛ 3 أسئلة/9 خيارات؛ 5 مفردات؛ مراجعة «halb drei» والسؤال عن الموعد والتذكير العربي | مكتمل نصياً؛ عُدّل تذكير «الحافلة» في العربية |

**الحصر الإجمالي:** 5/5 حوارات، 30/30 جولة، 17/17 سؤالاً، 51/51 خياراً، 51/51 شرحاً مرتبطاً بخيار، و25/25 مفردة مفتاحية. مجموع الخيارات الصحيحة 17 والمشتتات 34؛ لا توجد عناصر مسقطة. كما قُرئت العناوين والسياقات والبيانات التعريفية وملاحظتا الصوت في حواري السوبرماركت والوقت.

### المفردات الخمس والعشرون التي مرّت عليها المراجعة

- `a1-01`: `ich heiße`، `Woher kommst du?`، `ich komme aus`، `Freut mich`، `Auf Wiedersehen`.
- `a1-02`: `Ich möchte … bitte`، `Mit Milch oder schwarz?`، `ein Stück Kuchen`، `Das macht zusammen …`، `Danke schön`.
- `a1-03`: `Kann ich Ihnen helfen?`، `Was kostet …?`، `Ich nehme …`، `das Brot`، `die Milch`.
- `a1-04`: `die Geschwister`، `der Vater / die Mutter`، `von Beruf`، `der Lehrer / die Ärztin`، `Wie schön!`.
- `a1-05`: `Entschuldigung`، `Wie spät ist es?`، `halb drei`، `der Bus fährt um …`، `Gern geschehen`.

**حالة كل واحد:** فُحص المعنى الألماني والمقابل العربي في سياق الحوار، ولا يثبت هذا أن لكل تعبير دليلاً ثنائياً عربياً مستقلاً؛ مراجع Duden أدناه تسند المعاني الألمانية المتصلة بالألفاظ، وتبقى بقية الكلمات الشفافة متحققة من سياقها المباشر لا من ادعاء أن صفحة واحدة تغطيها كلها.

## التعديلات المنفذة

1. في سؤال الطعام بالمقهى، صار السؤال `Was bestellt der Gast zu essen?` وترجمته «ماذا يطلب الزبون من الطعام؟»، كي يسأل عن الطلب لا عن فعل الأكل الذي لا يثبته النص. بقي الجواب `Ein Stück Kuchen`، لا `Ein Stück Apfelkuchen`: الحوار لا يحدد نوع الكعك. يورد Duden صراحةً مثال `ein Stück Kuchen essen`، ولا يضيف نوعاً محدداً: [Duden — Kuchen](https://www.duden.de/rechtschreibung/Kuchen).
2. استُبدل المشتتان الطويلان في السؤال نفسه بـ`Ein Eis` و`Ein Stück Brot` وترجمتي «مثلجات» و«قطعة خبز». كلاهما غير وارد في الطلب؛ كما أصبح طول الخيارات أقرب من السابق دون إطالة الجواب بافتراضات غير منطوقة. بقي الخيار الصحيح مقتبساً من الحوار.
3. غُيّر سؤال الأسرة إلى `Wie viele Geschwister hat Paul?` بترجمة «كم عدد أشقاء باول؟» بدلاً من تقليصه إلى الإخوة الذكور، ووُحّد رسم الاسم إلى «باول» في الأسئلة. يذكر Paul أخاً وأختاً؛ أُعيد ضبط المشتتين إلى صيغتين خاطئتين صريحتين: `Zwei Schwestern und ein Bruder` (ثلاثة أشقاء) و`Zwei Brüder und zwei Schwestern` (أربعة أشقاء)، مع مقابلين عربيين وشرح يبين أن Paul له شقيقان فقط. وفي سؤال عدد الإخوة الذكور، صار المشتت `Drei Brüder` مع ترجمة وشرح مطابقين. بقي الجواب متسقاً مع `einen Bruder und eine Schwester`. يعرّف Duden `Geschwister` بوصفها الإخوة والأخوات من الوالدين نفسيهما: [Duden — Geschwister](https://www.duden.de/rechtschreibung/Geschwister).
4. أزيلت «لا» الزائدة من ترجمة الخيار `Köchin`، فصارت «طباخة» فقط؛ أما كونها مشتتاً فيؤكده الحوار بأن الأم طبيبة، لا صياغة الخيار.
5. عُدلت تحية النادل `Guten Tag! Was möchten Sie?` من ترجمة حرفية متكلفة إلى «مرحباً! ماذا تودّ؟» مع الحفاظ على التحية والطلب المهذب.
6. عُدلت ترجمة `Das ist interessant!` إلى «هذا مثير للاهتمام!» بدلاً من «هذا مثير!» لتثبيت معنى الصفة في هذا السياق. يورد Duden مثال `das ist ja interessant` بمعنى «هذا لافت/جدير بالاهتمام»: [Duden — interessant](https://www.duden.de/rechtschreibung/interessant).
7. صُحح تأنيث الفعل في «ومتى تنطلق الحافلة؟» لأن `die Bus` هنا اسم مؤنث في العربية «الحافلة» لا مذكر «الحافل». يورد Duden أمثلة وقت انطلاق وسائل النقل مع `fahren`, ومنها سؤال `wann fährt die nächste Straßenbahn?`: [Duden — fahren](https://www.duden.de/rechtschreibung/fahren).

## شواهد مرجعية مطابقة مباشرة

- التعارف والوداع والاسم/المنشأ: `heißen` يورد `wie heißt du?`، و`woher` سؤال الأصل المكاني، و`aus` يورد `sie kommt aus Hamburg`؛ `kennenlernen` يثبت عبارة التعارف `es freut mich, Sie kennenzulernen`، و`Wiedersehen` يثبت `auf Wiedersehen`: [Duden — heißen](https://www.duden.de/rechtschreibung/heiszen_mit_Namen)، [woher](https://www.duden.de/rechtschreibung/woher)، [aus](https://www.duden.de/rechtschreibung/aus_Praeposition)، [kennenlernen](https://www.duden.de/rechtschreibung/kennenlernen)، [Wiedersehen](https://www.duden.de/rechtschreibung/Wiedersehen)، [kommen](https://www.duden.de/rechtschreibung/kommen).
- المقهى: `bestellen` يورد طلب الطعام وإبلاغ النادل بالاختيار؛ `mögen` يورد `du möchtest` ورغبة `sie möchte`; `Kaffee` مذكر ويظهر مثال `Kaffee mit Milch`؛ و`schwarz` يورد القهوة بلا حليب؛ و`Milch` مؤنث؛ و`Kuchen` يورد قطعة كعك؛ و`kosten` يثبت جملة السعر؛ و`zusammen` يورد `alles zusammen kostet 100 Euro`؛ و`danke schön` صيغة شكر مهذبة: [bestellen](https://www.duden.de/rechtschreibung/bestellen)، [mögen](https://www.duden.de/rechtschreibung/moegen)، [Kaffee](https://www.duden.de/rechtschreibung/Kaffee)، [schwarz](https://www.duden.de/rechtschreibung/schwarz)، [Milch](https://www.duden.de/rechtschreibung/Milch)، [Kuchen](https://www.duden.de/rechtschreibung/Kuchen)، [kosten](https://www.duden.de/rechtschreibung/kosten_betragen)، [zusammen](https://www.duden.de/rechtschreibung/zusammen)، [danke](https://www.duden.de/rechtschreibung/danke).
- الطلب المهذب `möchten`: مدخل Duden لـ`mögen` يدرج `du möchtest` ويشرح أن Konjunktiv II غالباً للتعبير عن الرغبة، مع مثال `sie möchte Herrn Meier sprechen`: [Duden — mögen](https://www.duden.de/rechtschreibung/moegen).
- السوبرماركت والأسرة والمهن: `helfen` يورد العبارة `kann ich dir helfen?`؛ و`nehmen` يثبت معنى الأخذ/الاختيار؛ و`Brot` و`Milch` اسما الطعام؛ `Geschwister` مجموعة الإخوة والأخوات؛ وتثبت مداخل `Bruder` و`Schwester` علاقة الأشقاء من الوالدين نفسيهما، و`Vater` و`Mutter` الوالدين؛ و`Beruf` يورد `er ist von Beruf Bäcker`؛ و`Lehrer` و`Ärztin` يعرّفان المهنتين والجنس: [helfen](https://www.duden.de/rechtschreibung/helfen)، [nehmen](https://www.duden.de/rechtschreibung/nehmen)، [Brot](https://www.duden.de/rechtschreibung/Brot)، [Milch](https://www.duden.de/rechtschreibung/Milch)، [Geschwister](https://www.duden.de/rechtschreibung/Geschwister)، [Bruder](https://www.duden.de/rechtschreibung/Bruder)، [Schwester](https://www.duden.de/rechtschreibung/Schwester)، [Vater](https://www.duden.de/rechtschreibung/Vater)، [Mutter](https://www.duden.de/rechtschreibung/Mutter_Frau)، [Beruf](https://www.duden.de/rechtschreibung/Beruf)، [Lehrer](https://www.duden.de/rechtschreibung/Lehrer)، [Ärztin](https://www.duden.de/rechtschreibung/Aerztin).
- الوقت والاعتذار والنقل: `Entschuldigung!` صيغة تهذيب/استئذان؛ `Uhrzeit` تعرّف الوقت المقاس بالساعة؛ `Uhr` يورد سؤال `wie viel Uhr ist es?` وتوقيت `um halb acht`؛ `halb` يسند طريقة تسمية النصف ساعة؛ و`Bus` مذكر بالألمانية، فيما صياغة العربية تتبع الاسم العربي المؤنث «الحافلة». يورد `fahren` سؤالاً عن موعد الترام القادم، و`kommen` سؤال وصول الحافلة التالية، و`Zeit` المثال `Zeit haben`: [Entschuldigung](https://www.duden.de/rechtschreibung/Entschuldigung)، [Uhrzeit](https://www.duden.de/rechtschreibung/Uhrzeit)، [Uhr](https://www.duden.de/rechtschreibung/Uhr)، [halb](https://www.duden.de/rechtschreibung/halb_zur_Haelfte_teilweise)، [Bus](https://www.duden.de/rechtschreibung/Bus)، [fahren](https://www.duden.de/rechtschreibung/fahren)، [kommen](https://www.duden.de/rechtschreibung/kommen)، [Zeit](https://www.duden.de/rechtschreibung/Zeit).
- `Tunesien` معرّف في Duden دولةً في شمال أفريقيا: [Duden — Tunesien](https://www.duden.de/rechtschreibung/Tunesien).
- `Gern geschehen` صيغة رد مهذب على الشكر، كما يورد Duden مثال الحوار نفسه `Danke schön! – Gern geschehen!`: [Duden — geschehen](https://www.duden.de/rechtschreibung/geschehen).

تم جلب الصفحات المذكورة والتحقق من الشواهد أعلاه. لم أستخدم رابط Duden مفترضاً أعاد 404 أو صفحة خطأ لإسناد حكم؛ وعند غياب حكم قاموسي خاص لا أزعم أن المصدر يثبته.

## الاختبارات والنتيجة

- أُضيفت ثلاثة اختبارات عدم انحدار محددة في `src/data/dialogues/dialogues.test.ts`: سلامة سؤال طلب الطعام والجواب، مشتتات الأسرة وترجماتها، وتذكير ترجمة الحافلة. اجتازت مجموعة الحوارات 23/23.
- اجتازت المجموعة الكاملة `npm test -- --run`: **1,494/1,494 اختباراً في 225 ملفاً**.
- اجتاز `npm run typecheck`.
- اجتاز ESLint على الملفات الأربعة التي عُدلت/استُخدمت في التقسيم.
- بعد ملاحظة أن `src/data/vocabulary/integrity.test.ts` صار 769 سطراً وفشل حارس الحجم، فُصلت اختبارات الدفعات B1-extra2/part3 #410–579 في `src/data/vocabulary/integrity-b1-extra2.test.ts`. صار الأول 540 سطراً والثاني 244، مع إعادة تشغيل الاختبارات كاملةً؛ نجح حارس الحجم، وحُفظت الاختبارات السابقة (12 في الملف الأصلي و9 في الملف المفصول).
- حدود التشغيل: لم يُجرَ build أو فحص صوت في هذه الدفعة؛ لا تُستنتج منهما جودة صوت أو مطابقة منطوقة.

## الحالة والخطوة التالية

| العنصر | الحالة |
|---|---|
| نصوص الحوارات الخمسة وترجماتها | **مكتمل ضمن هذا الملف**؛ لكل الجولات الثلاثين مرور موثق |
| الأسئلة والخيارات والشروح والمفردات المفتاحية | **مكتمل ضمن هذا الملف**؛ 17 سؤالاً و51 خياراً و25 مفردة فُحصت، وتثبت الاختبارات التعديلات المحددة فقط |
| مطابقة كل حكم ألماني بصفحة مصدر مستقلة | **جزئي**: الشواهد المحددة في التقرير موثقة مباشرة؛ لا يُدّعى أن Duden يثبت كل ترجمة عربية أو كل عبارة شفافة. المتابعة: إضافة مرجع سياقي لكل حكم لغوي غير شفاف قبل تسجيل مطابقة خارجية شاملة |
| تدقيق الصوت ومستوى CEFR الرسمي | **غير منجز في هذا النطاق**. المتابعة: الصوت يُراجع لاحقاً ضمن دفعة صوتية تغطي مستوى CEFR كاملاً؛ ومواءمة CEFR/Goethe تحتاج مصادرها الرسمية، لا استنتاجاً من اختبار بنيوي |
| بقية المشروع | **غير منجز**؛ لم تُراجع لمجرد إغلاق هذا الملف |
| الوحدة التالية في الجرد | `src/data/dialogues/a1/part2.ts` — 5 حوارات جديدة وفق الجرد البنيوي؛ لا يُبدأ إعلان إغلاقها حتى تدقيق جميع حقولها ومصادرها واختبارها |
