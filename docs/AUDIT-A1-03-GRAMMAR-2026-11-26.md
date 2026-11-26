# تدقيق الدرس A1-03 (الطعام والشراب) — 2026-11-26

## النطاق
- نظرية الأدوات (der/die/das + ein/eine)، وحالة النصب Akkusativ، وفعل haben: `src/data/lessons/a1/a1-03/theorie.ts`.
- البطاقات والاختبار الصغير والوساطة والتفاعل: `src/data/lessons/a1/a1-03/cards.ts`.
- المقدمة والأهداف والمراجعة: `src/data/lessons/a1/a1-03/intro.ts`.
- القراءة والاستماع والنطق `p1` والكتابة `w1`–`w4`: `src/data/lessons/a1/a1-03/skills.ts`.
- بنك التدريب وشرح الأخطاء: `src/data/lessons/a1/a1-03/practice.ts`.
- ملفات الاختبار: `a1-03.test.ts`، و`a1-03-test/listening.test.ts`، و`a1-03-test/listening-audio.test.ts`. قُرئت ولم تُعدَّل، وتتطابق مع المحتوى.
- الملفات الصوتية الستة لمشهد الاستماع l3 موجودة في `public/audio/lessons/a1-03/`.

## النتيجة المختصرة
- نحو الدرس وأمثلته سليمة. لم يُعثر على خطأ نحوي في الأمثلة والجداول والتمارين.
- في النطق `p1` صُحّحت أربعة أسطر تخص الصوتيات (انظر «التصحيحات» أدناه). كانت الأسطر تنسب إلى نطق Kaffee وKäse وEuro أشياءً لا تطابق القواميس المرجعية.
- لم يُعدَّل أي نص تعليمي آخر.

## جدول الادعاءات
| الادعاء | الموضع | الحكم |
|---|---|---|
| تصريف haben: habe، hast، hat، habt، haben | `theorie.ts` (haben) | مؤكد ([2](https://de.wiktionary.org/wiki/Verzeichnis:Deutsch/Unregelm%C3%A4%C3%9Fige_Konjugation)) |
| hast وhat شاذتان بالنسبة إلى الجذر hab- | `theorie.ts` | مؤكد: المراجع تصنف haben فعلاً غير منتظم ([2](https://de.wiktionary.org/wiki/Verzeichnis:Deutsch/Unregelm%C3%A4%C3%9Fige_Konjugation)) |
| Akkusativ: der→den، ein→einen؛ die وdas وجمعهما بلا تغيير | `theorie.ts` (الجدول) | صحيح (معرفة نحوية أساسية في الألمانية) |
| Ich esse einen Apfel؛ Ich trinke die Milch؛ Ich esse das Brot | `theorie.ts`، `cards.ts` | صحيح |
| Die Äpfel جمع منصوب بلا تغيير | `theorie.ts` | صحيح |
| Er ist ein Lehrer (الخبر بعد sein في الرفع) | `theorie.ts` | صحيح |
| Ich habe Hunger / Durst / Angst؛ Ich bin müde | `theorie.ts` | صحيح |
| تركيب الكتاب Schritte international Neu 1 Lektion 3 «Essen und Trinken» | `theorie.ts` (المقارنة) | مؤكد ([1](https://legacy.hueber.de/media/36/Schritte_international_Neu_1_UP_L3.pdf)) |
| البطاقات: Ich esse einen Apfel؛ Hast du Durst؛ Ich trinke einen Tee | `cards.ts` | صحيح |
| الوساطة: Schnitzel (لحم مغطى بالبقسماط ومقلي؛ النص لا يحدد نوع اللحم) | `cards.ts` | وصف حذر ومقبول |
| التفاعل: Ich hätte gern einen Kaffee / Die Rechnung, bitte | `cards.ts` | صحيح ومهذب |
| المراجعة: Ich heiße Sami؛ die Mutter؛ Auf Wiedersehen! | `intro.ts` | صحيح |
| الأهداف z1–z8 مرتبطة بمهام موجودة (المهام والأدلة) | `intro.ts` | متطابق مع الاختبارات |
| Kaffee: النبر على المقطع الأول [ˈkafeː]؛ الصيغة [kaˈfeː] للنمسا | `skills.ts` (`p1`) | صُحّح؛ مؤكد ([3](https://de.wiktionary.org/wiki/Kaffee)) |
| Café (المقهى): [kaˈfeː] | `skills.ts` (`p1`) | مؤكد ([4](https://de.wiktionary.org/wiki/Caf%C3%A9)) |
| Käse: [ˈkɛːzə] و[ˈkeːzə] (قاموسان) | `skills.ts` (`p1`) | صُحّح حذف وصف «إقليمي»؛ مؤكد ([5](https://www.duden.de/rechtschreibung/Kaese)) |
| Hunger: [ˈhʊŋɐ] | `skills.ts` (`p1`) | مؤكد ([6](https://de.wiktionary.org/wiki/Hunger)) |
| Eier: [ˈaɪ̯ɐ] | `skills.ts` (`p1`) | مؤكد ([7](https://de.wiktionary.org/wiki/Eier)) |
| Euro: eu تُنطق [ɔɪ̯] (لا [ɔʏ̯]) | `skills.ts` (`p1`) | صُحّح؛ مؤكد ([8](https://de.wiktionary.org/wiki/Euro)) |
| حساب القراءة: 20,50 + بقشيش 2 € = 22,50 € | `skills.ts` (القراءة) | صحيح |
| إجابات الاستماع l1–l3 مطابقة للنصوص | `skills.ts`، `practice.ts` | صحيح |
| تصحيحات الأخطاء في `fehlerUndTipps` | `practice.ts` | صحيحة |

## التصحيحات (في `skills.ts`، قسم النطق `p1`)
1. **Kaffee:** كان النص يقدّم [kaˈfeː] (النبر على المقطع الثاني) بوصفه النطق الشائع. القاموس يذكره ببنية النبر الأول [ˈkafeː]، ويقيّد [kaˈfeː] بالنمسا. صُحّحت الملاحظة والنصيحة.
2. **Käse:** كان النص يصف نطقَي القاموس بأنهما «إقليميان»، ولم يُعثر على مصدر لهذا الوصف. صيغ النص الآن على أنه نطقان يذكرهما القاموس، مع النبر على المقطع الأول.
3. **Euro:** كان النص يذكر أن eu فيها تُنطق [ɔʏ̯]. القاموسان يعطيان [ˈɔɪ̯ʁo]. صُحّح إلى [ɔɪ̯].

## ملاحظات غير خطأ (لم تُعدَّل)
1. **الحساب في التفاعل:** الجولة الثالثة تقول «الحساب 5.50 يورو» بعد كعكة التفاح (2.50 يورو) وقهوة. سعر القهوة لا يرد في قائمة الوساطة في الدرس، فالمبلغ الإجمالي غير قابل للتحقق من الدرس نفسه. الأثر تعليمي فقط، لكنه قد يربك متعلماً يقارن الأسعار.
2. **خياران صحيحان في الجولة الثانية:** الخياران «Mit Milch» و«Nein, danke. Nur Wasser» كلاهما مُعلَّم best، وهذا مقصود لأن كليهما مقبول.
3. **تكرار الدليل:** الهدفان z7 وz8 يشيران إلى المهمة نفسها w4. هذا تكرار في الأدلة وليس خطأً في المحتوى.
4. **الحدود:** الصحة هنا نحوية ولغوية وصوتية بحسب القواميس المرجعية فقط، لا قياس لأداء المتعلم. القواميس ليست مرجعاً صوتياً أكاديمياً. لم يسمع متحدث أصلي الحوارات ولا النطق.

## مصادر
1. Hueber — Schritte international Neu 1, Lektion 3 (UP): https://legacy.hueber.de/media/36/Schritte_international_Neu_1_UP_L3.pdf
2. Wiktionary — Verzeichnis: Deutsch/Unregelmäßige Konjugation (haben): https://de.wiktionary.org/wiki/Verzeichnis:Deutsch/Unregelm%C3%A4%C3%9Fige_Konjugation
3. Wiktionary — Kaffee: https://de.wiktionary.org/wiki/Kaffee
4. Wiktionary — Café: https://de.wiktionary.org/wiki/Caf%C3%A9
5. Duden — Käse (Lautschrift [ˈkɛːzə]): https://www.duden.de/rechtschreibung/Kaese ؛ وWiktionary — Käse Aussprache: https://fernehovor.com/2c87ty1546yxv-/K%C3%A4se-Aussprache.html
6. Wiktionary — Hunger: https://de.wiktionary.org/wiki/Hunger
7. Wiktionary — Eier: https://de.wiktionary.org/wiki/Eier
8. Wiktionary — Euro: https://de.wiktionary.org/wiki/Euro ؛ وDuden — Euro: https://www.duden.de/rechtschreibung/Euro_Waehrung

## ما يبقى مفتوحاً
- مراجعة الحوار والنطق بالسمع من متحدث أصلي. القواميس لا تكفي بديلاً عن ذلك.
- ملاحظة الحساب في التفاعل (إن أردت توحيد الأسعار مع قائمة الوساطة).
- ما زال ملف `docs/archive/AUDIT-REPORT-A1-03-2026-10-10.md` تاريخياً، ويذكر بقشيشاً 4.50 € لا يطابق النص الحالي (2 €)؛ لم يُعدَّل لأنه أرشيف.
