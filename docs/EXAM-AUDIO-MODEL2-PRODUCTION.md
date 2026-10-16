# إنتاج صوتيات النماذج الثانية (A1/A2/B1) — نموذج A1-2

**مُولَّد آلياً من البيانات**: النصوص أدناه مأخوذة من `audioSegments` في `src/data/exams/a1-model2-hoeren.ts`، ويحرس `level-models.test.ts` أن كلمات كل مقطع واردة في `audioText` بالترتيب (فلا يخالف التسجيل النصَّ المعروض).

## المجلد والبنية

- المجلد: `/audio/exam-a1/m2` (النموذج الأول في جذر `/audio/exam-a1`، وهذا مجلد فرعي فلا يُخلط بصوت نموذج آخر).
- التسمية: `hoeren-t<الجزء>.mp3`، وفي الأجزاء الحوارية مقطع لكل جملة: `hoeren-t2-g<الحوار>-<a|b|c>.mp3`.
- البنية المُنتَجة لكل مستوى: **1 · 9 · 1 · 3 = 14 مقطعاً** (الجزء 2 حوارات متبادلة فيحتاج صوتين اثنين لكل حوار).
- القاعدة: **جزء مكتمل أو لا شيء** — لا يُسجَّل جزء نصفه، والحارس يفشل إن اختلف عدد الملفات عن عدد المقاطع المُعلَنة.

## الأصوات

| الصوت | الدور | مُلاحظة |
|---|---|---|
| voice-02 (رجل) | المذيع · الرجل في الحوارات | اختاره المتعلم في الجلسة |
| voice-03 (امرأة) | رسالة العيادة · المرأة في الحوارات | اختاره المتعلم في الجلسة |

> ملاحظة إنتاجية: الدور يُختار من **نصّ المتحدث في الحوار** لا من موقع المقطع — في الحوار 2 المتحدث الأول رجل، وفي الحوار 3 امرأة.

## مقاطع نموذج A1-2 (A1-2)

### الجزء 1 — Teil 1 — Kurze Ansagen (20 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t1.mp3` | voice-02 (رجل) | Ansage 1: Der Zug nach Hamburg fährt heute um acht Uhr von Gleis vier. Ansage 2: Die Bibliothek ist am Mittwoch geschlossen. Am Donnerstag ist sie wieder offen. Ansage 3: Frau Klein bittet alle Patienten, im Wartezimmer zu warten. Ansage 4: Die Bäckerei in der Marktstraße ist am Samstag bis sechzehn Uhr offen. |

### الجزء 2 — Teil 2 — Kurze Gespräche (20 نقطة) — بالنطق الآلي

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t2-g1-a.mp3` | — | Guten Tag, ich möchte eine Fahrkarte nach Bonn. |
| 2 | `hoeren-t2-g1-b.mp3` | — | Einfach oder hin und zurück? |
| 3 | `hoeren-t2-g1-c.mp3` | — | Nur einfach, bitte. |
| 4 | `hoeren-t2-g2-a.mp3` | — | Wann öffnet die Apotheke? |
| 5 | `hoeren-t2-g2-b.mp3` | — | Um neun Uhr. Vorher ist sie zu. |
| 6 | `hoeren-t2-g3-a.mp3` | — | Hast du am Freitag Zeit? |
| 7 | `hoeren-t2-g3-b.mp3` | — | Am Freitag arbeite ich. Am Samstag ist besser. |
| 8 | `hoeren-t2-g4-a.mp3` | — | Wie viel kostet das Brot? |
| 9 | `hoeren-t2-g4-b.mp3` | — | Zwei Euro fünfzig. |

### الجزء 3 — Teil 3 — Anrufbeantworter (30 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t3.mp3` | voice-03 (امرأة) | Guten Tag, hier ist die Praxis Doktor Berger. Ihr Termin am Dienstag um neun Uhr muss leider verschoben werden. Der neue Termin ist am Donnerstag um elf Uhr. Bitte bringen Sie Ihre Versichertenkarte mit. Wenn Sie nicht kommen können, rufen Sie uns bitte bis Montag an. Vielen Dank. |

### الجزء 4 — Teil 4 — Alltag: Arbeiten und Fahren (30 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t4-a.mp3` | voice-03 (امرأة) | Hallo Nabil, arbeitest du am Samstag im Café? |
| 2 | `hoeren-t4-b.mp3` | voice-02 (رجل) | Nein, am Samstag arbeite ich nicht. Ich arbeite nur von Montag bis Freitag. Am Wochenende lerne ich Deutsch. |
| 3 | `hoeren-t4-c.mp3` | voice-02 (رجل) | Liebe Fahrgäste, der Bus Nummer drei fährt heute nicht. Bitte nehmen Sie den Bus Nummer sieben. Er hält an der gleichen Haltestelle. |
## ما بقي في قائمة الإنتاج

| النموذج | المُنتَج | الباقي | التقدير |
|---|---|---|---|
| A1-2 | الأجزاء 1 · 3 · 4 (5 مقاطع) | الجزء 2: 9 مقاطع (حوارات بصوتين) | دفعة واحدة (9 ≤ سقف 10/رد) |
| A2-2 | لا شيء | 14 مقطعاً | دفعتان |
| B1-2 | لا شيء | 14 مقطعاً | دفعتان |

**بعد إنتاج مقاطع أي جزء**: يُضاف رقمه إلى `modelTracks(level, parts, recordedTeile)` في `level-models.ts` ويُحدَّث `audioNoteAr` ليعلن الحالة الحقيقية — والحارس يفشل إن بقي جزء غير مسجَّل بلا إعلان «نطق آلي».
