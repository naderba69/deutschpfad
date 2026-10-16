# إنتاج صوتيات النماذج الثانية (A1/A2/B1) — نموذج A1-2 مكتمل

**مُولَّد آلياً من البيانات**: النصوص أدناه مأخوذة من `audioSegments` في `src/data/exams/a1-model2-hoeren.ts`، ويحرس `level-models.test.ts` أن كلمات كل مقطع واردة في `audioText` بالترتيب (فلا يخالف التسجيل النصَّ المعروض).

## الحالة

| النموذج | المُنتَج | الباقي |
|---|---|---|
| **A1-2** | **14/14 مقطعاً** (الأجزاء 1 · 2 · 3 · 4) — مكتمل | — |
| A2-2 | لا شيء | 14 مقطعاً (دفعتان) |
| B1-2 | لا شيء | 14 مقطعاً (دفعتان) |

## البنية والأصوات

- المجلد: `/audio/exam-a1/m2` (النموذج الأول في جذر `/audio/exam-a1`، فلا يُخلط صوت نموذج بآخر — وحارس يمنع مشاركة مجلد بين نموذجين مسجّلين).
- التسمية: `hoeren-t<الجزء>.mp3`، وفي الجزء الثاني مقطع لكل جملة: `hoeren-t2-g<الحوار>-<a|b|c>.mp3`.
- القاعدة: **جزء مكتمل أو لا شيء** — والحارس يفشل إن اختلف عدد الملفات عن المقاطع المُعلَنة، أو إن بقي جزء بلا ملفات بلا إعلان «نطق آلي» في نصّ الواجهة.
- الصوتان (اختارهما المتعلم): **voice-02 رجل** · **voice-03 امرأة**. الدور يُختار من **نصّ المتحدث** لا من موقع المقطع: في الحوار 2 المتحدث الأول رجل، وفي الحوار 3 امرأة.
- المدد المقيسة (مجموع 62.0 ثانية): الجزء 1 = 17.1ث · الجزء 2 = 17.1ث (9 مقاطع) · الجزء 3 = 15.2ث · الجزء 4 = 11.6ث.

### الجزء 1 — Teil 1 — Kurze Ansagen (20 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t1.mp3` | voice-02 · رجل | Ansage 1: Der Zug nach Hamburg fährt heute um acht Uhr von Gleis vier. Ansage 2: Die Bibliothek ist am Mittwoch geschlossen. Am Donnerstag ist sie wieder offen. Ansage 3: Frau Klein bittet alle Patienten, im Wartezimmer zu warten. Ansage 4: Die Bäckerei in der Marktstraße ist am Samstag bis sechzehn Uhr offen. |

### الجزء 2 — Teil 2 — Kurze Gespräche (20 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t2-g1-a.mp3` | voice-03 · امرأة | Guten Tag, ich möchte eine Fahrkarte nach Bonn. |
| 2 | `hoeren-t2-g1-b.mp3` | voice-02 · رجل | Einfach oder hin und zurück? |
| 3 | `hoeren-t2-g1-c.mp3` | voice-03 · امرأة | Nur einfach, bitte. |
| 4 | `hoeren-t2-g2-a.mp3` | voice-02 · رجل | Wann öffnet die Apotheke? |
| 5 | `hoeren-t2-g2-b.mp3` | voice-03 · امرأة | Um neun Uhr. Vorher ist sie zu. |
| 6 | `hoeren-t2-g3-a.mp3` | voice-03 · امرأة | Hast du am Freitag Zeit? |
| 7 | `hoeren-t2-g3-b.mp3` | voice-02 · رجل | Am Freitag arbeite ich. Am Samstag ist besser. |
| 8 | `hoeren-t2-g4-a.mp3` | voice-02 · رجل | Wie viel kostet das Brot? |
| 9 | `hoeren-t2-g4-b.mp3` | voice-03 · امرأة | Zwei Euro fünfzig. |

### الجزء 3 — Teil 3 — Anrufbeantworter (30 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t3.mp3` | voice-03 · امرأة | Guten Tag, hier ist die Praxis Doktor Berger. Ihr Termin am Dienstag um neun Uhr muss leider verschoben werden. Der neue Termin ist am Donnerstag um elf Uhr. Bitte bringen Sie Ihre Versichertenkarte mit. Wenn Sie nicht kommen können, rufen Sie uns bitte bis Montag an. Vielen Dank. |

### الجزء 4 — Teil 4 — Alltag: Arbeiten und Fahren (30 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t4-a.mp3` | voice-03 · امرأة | Hallo Nabil, arbeitest du am Samstag im Café? |
| 2 | `hoeren-t4-b.mp3` | voice-02 · رجل | Nein, am Samstag arbeite ich nicht. Ich arbeite nur von Montag bis Freitag. Am Wochenende lerne ich Deutsch. |
| 3 | `hoeren-t4-c.mp3` | voice-02 · رجل | Liebe Fahrgäste, der Bus Nummer drei fährt heute nicht. Bitte nehmen Sie den Bus Nummer sieben. Er hält an der gleichen Haltestelle. |
## إنتاج A2-2 وB1-2 (الخطوة التالية)

نصوصهما مُعلَنة مسبقاً في آلة الحالة هذه: يُضاف `audioSegments` لكل جزء في
`a2-model2-hoeren.ts` و`b1-model2-hoeren.ts` (بنفس تسمية الملفات في
`MODEL2_AUDIO_FILES`)، ثم يُولَّد المقطع بالمحتوى المنطوق نفسه، ثم يُضاف رقم
الجزء إلى `modelTracks(level, parts, recordedTeile)` ويُحدَّث `audioNoteAr`.
الحارس يحمي كل خطوة: ملف مفقود أو نصّ مخالف أو إعلان ناقص يُسقط الاختبار.
