# إنتاج صوتيات النماذج الثانية (A1/A2/B1) — مكتمل

**مُولَّد من البيانات**: النصوص أدناه هي `audioSegments` في ملفات الاستماع نفسها،
ويحرس `level-models.test.ts` أن كلمات كل مقطع واردة في `audioText` **وبالترتيب**
(فلا يخالف التسجيل النصَّ المعروض)، وأن عدد الملفات يساوي عدد المقاطع المُعلَنة.

## الحالة

| النموذج | المُنتَج | مجموع المدد |
|---|---|---|
| **A1-2** | **14/14** (الأجزاء 1 · 2 · 3 · 4) | 62.0ث |
| **A2-2** | **17/17** (الأجزاء 1 · 2 · 3 · 4) | 74.4ث |
| **B1-2** | **15/15** (الأجزاء 1 · 2 · 3 · 4) | 82.0ث |

**المجموع: 46 مقطعاً في النماذج الثانية الثلاثة، وكل نموذج ثانٍ صار مسجّلاً
بالكامل** — ولم يبق في قائمة الإنتاج شيء يخصّ A1/A2/B1.

## البنية والأصوات

- مجلد كل مستوى: `/audio/exam-<المستوى>/m2` — والنموذج الأول في جذر المجلد،
  فلا يُخلط صوت نموذج بآخر (وحارس يمنع مشاركة مجلد بين نموذجين مسجّلين).
- **لكل مستوى خطته** في `MODEL2_FILE_PLAN`: A1 (1·9·1·3 = 14)، A2 (1·8·2·6 = 17)،
  B1 (1·8·1·5 = 15 — الجزء 4 جلسة استشارة مهنية بخمسة أدوار متبادلة).
- القاعدة: **جزء مكتمل أو لا شيء** — والحارس يفشل إن غاب ملف مُشار إليه، أو اختلف
  عدد الملفات عن المقاطع المُعلَنة، أو بقي جزء بلا ملفات بلا إعلان «نطق آلي».
- الصوتان (اختارهما المتعلم): **voice-02 رجل** · **voice-03 امرأة**. والدور يُختار
  من **نصّ المتحدث** في كل جملة، لا من موقع المقطع — ويسري على أدوار الحوارات.
- المدد المقيسة: A1-2 = 62.0ث (17.1 · 17.1 · 15.2 · 11.6) · A2-2 = 74.4ث
  (17.0 · 15.3 · 20.8 · 18.1) · B1-2 = **82.0ث** (19.3 · 14.0 · 23.6 · 25.1).

## النموذج A1-2 — `/audio/exam-a1/m2` — مكتمل


### الجزء 1 — Teil 1 — Kurze Ansagen (20 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t1.mp3` | رجل | Ansage 1: Der Zug nach Hamburg fährt heute um acht Uhr von Gleis vier. Ansage 2: Die Bibliothek ist am Mittwoch geschlossen. Am Donnerstag ist sie wieder offen. Ansage 3: Frau Klein bittet alle Patienten, im Wartezimmer zu warten. Ansage 4: Die Bäckerei in der Marktstraße ist am Samstag bis sechzehn Uhr offen. |

### الجزء 2 — Teil 2 — Kurze Gespräche (20 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t2-g1-a.mp3` | امرأة | Guten Tag, ich möchte eine Fahrkarte nach Bonn. |
| 2 | `hoeren-t2-g1-b.mp3` | رجل | Einfach oder hin und zurück? |
| 3 | `hoeren-t2-g1-c.mp3` | امرأة | Nur einfach, bitte. |
| 4 | `hoeren-t2-g2-a.mp3` | رجل | Wann öffnet die Apotheke? |
| 5 | `hoeren-t2-g2-b.mp3` | امرأة | Um neun Uhr. Vorher ist sie zu. |
| 6 | `hoeren-t2-g3-a.mp3` | امرأة | Hast du am Freitag Zeit? |
| 7 | `hoeren-t2-g3-b.mp3` | رجل | Am Freitag arbeite ich. Am Samstag ist besser. |
| 8 | `hoeren-t2-g4-a.mp3` | رجل | Wie viel kostet das Brot? |
| 9 | `hoeren-t2-g4-b.mp3` | امرأة | Zwei Euro fünfzig. |

### الجزء 3 — Teil 3 — Anrufbeantworter (30 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t3.mp3` | امرأة | Guten Tag, hier ist die Praxis Doktor Berger. Ihr Termin am Dienstag um neun Uhr muss leider verschoben werden. Der neue Termin ist am Donnerstag um elf Uhr. Bitte bringen Sie Ihre Versichertenkarte mit. Wenn Sie nicht kommen können, rufen Sie uns bitte bis Montag an. Vielen Dank. |

### الجزء 4 — Teil 4 — Alltag: Arbeiten und Fahren (30 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t4-a.mp3` | امرأة | Hallo Nabil, arbeitest du am Samstag im Café? |
| 2 | `hoeren-t4-b.mp3` | رجل | Nein, am Samstag arbeite ich nicht. Ich arbeite nur von Montag bis Freitag. Am Wochenende lerne ich Deutsch. |
| 3 | `hoeren-t4-c.mp3` | رجل | Liebe Fahrgäste, der Bus Nummer drei fährt heute nicht. Bitte nehmen Sie den Bus Nummer sieben. Er hält an der gleichen Haltestelle. |

## النموذج A2-2 — `/audio/exam-a2/m2` — مكتمل


### الجزء 1 — Teil 1 — Ansagen (20 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t1.mp3` | رجل | Ansage 1: Der Kurs für Anfänger beginnt am Montag um neun Uhr im Raum zwei. Ansage 2: Wegen einer Reparatur bleibt das Schwimmbad bis Freitag geschlossen. Ansage 3: Der Schnellzug nach Wien hat heute zwanzig Minuten Verspätung. Ansage 4: Die Praxis Doktor Wolf ist am Mittwochnachmittag geschlossen und am Donnerstag wieder geöffnet. |

### الجزء 2 — Teil 2 — Gespräche (20 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t2-g1-a.mp3` | امرأة | Können wir das Treffen auf Donnerstag verschieben? |
| 2 | `hoeren-t2-g1-b.mp3` | رجل | Donnerstag habe ich leider einen Termin. Wie wäre es am Freitag? |
| 3 | `hoeren-t2-g2-a.mp3` | رجل | Wie bist du heute zur Arbeit gekommen? |
| 4 | `hoeren-t2-g2-b.mp3` | امرأة | Mit dem Fahrrad, weil der Bus zu voll war. |
| 5 | `hoeren-t2-g3-a.mp3` | امرأة | Hast du schon für die Prüfung gelernt? |
| 6 | `hoeren-t2-g3-b.mp3` | رجل | Nur wenig. Ich lerne lieber morgens, nicht abends. |
| 7 | `hoeren-t2-g4-a.mp3` | رجل | Warum ist die Heizung aus? |
| 8 | `hoeren-t2-g4-b.mp3` | امرأة | Der Hausmeister hat sie gestern repariert, aber heute funktioniert sie wieder nicht. |

### الجزء 3 — Teil 3 — Radio und Telefon (30 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t3-a.mp3` | رجل | Sie hören das Stadtradio. Wegen der Bauarbeiten in der Goethestraße fährt die Linie vier seit Montag eine andere Route. Die Haltestelle Marktplatz wird nicht angefahren. Fahrgäste können die Haltestelle Rathaus benutzen, sie liegt fünf Minuten zu Fuß entfernt. Die Bauarbeiten dauern bis Ende Oktober. |
| 2 | `hoeren-t3-b.mp3` | امرأة | Guten Tag, hier ist Familie Weber. Wir haben Ihr Inserat für die Wohnung gelesen. Ist die Wohnung noch frei? Bitte rufen Sie uns bis achtzehn Uhr an. |

### الجزء 4 — Teil 4 — Gespräch im Büro (30 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t4-a.mp3` | امرأة | Herr Novak, könnten Sie nächste Woche die Schulung übernehmen? |
| 2 | `hoeren-t4-b.mp3` | رجل | Nächste Woche habe ich Urlaub, aber in der Woche danach ist es möglich. |
| 3 | `hoeren-t4-c.mp3` | امرأة | Gut, dann plane ich Sie für Dienstag ein. Die Teilnehmer kommen aus der Produktion. |
| 4 | `hoeren-t4-d.mp3` | رجل | Soll ich die Unterlagen vorbereiten? |
| 5 | `hoeren-t4-e.mp3` | امرأة | Ja, bitte schicken Sie mir die Folien bis Freitag. |
| 6 | `hoeren-t4-f.mp3` | رجل | Dann reserviere ich auch einen Raum mit Beamer. |

## النموذج B1-2 — `/audio/exam-b1/m2` — مكتمل


### الجزء 1 — Teil 1 — Ansagen (20 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t1.mp3` | رجل | Ansage 1: Die Weiterbildung „Präsentieren auf Deutsch“ findet ab November jeden zweiten Donnerstag statt. Ansage 2: Weil die Kantine renoviert wird, gibt es ab Montag nur kalte Speisen im Foyer. Ansage 3: Die Bewerbungsfrist für das Praktikum wurde bis zum 15. März verlängert. Ansage 4: Der Fahrradkeller wird am Wochenende gereinigt; bitte stellen Sie Ihre Fahrräder bis Freitagabend ins Erdgeschoss. |

### الجزء 2 — Teil 2 — Gespräche (20 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t2-g1-a.mp3` | امرأة | Nimmst du an der Fortbildung teil? |
| 2 | `hoeren-t2-g1-b.mp3` | رجل | Eigentlich schon, aber ich müsste dafür zwei Kunden verschieben. |
| 3 | `hoeren-t2-g2-a.mp3` | رجل | Warum hat Frau Klein gekündigt? |
| 4 | `hoeren-t2-g2-b.mp3` | امرأة | Sie hat eine Stelle bekommen, die näher an ihrem Wohnort liegt. |
| 5 | `hoeren-t2-g3-a.mp3` | امرأة | Können wir die Präsentation auf Donnerstag legen? |
| 6 | `hoeren-t2-g3-b.mp3` | رجل | Donnerstag ist schlecht, da ist die Geschäftsleitung außer Haus. |
| 7 | `hoeren-t2-g4-a.mp3` | رجل | Musst du wirklich am Samstag arbeiten? |
| 8 | `hoeren-t2-g4-b.mp3` | امرأة | Nur bis zwölf, und ich bekomme dafür einen freien Tag. |

### الجزء 3 — Teil 3 — Radiobeitrag (30 نقطة · يُشغَّل مرتين) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t3.mp3` | امرأة | Immer mehr Städte wollen Innenstädte autofrei machen. In Freiburg wurde ein Versuch durchgeführt: An drei Samstagen durften nur Busse, Fahrräder und Taxis in die Altstadt fahren. Die Geschäfte hatten zunächst Angst vor Umsatzverlusten, doch die Bilanz war überraschend positiv — viele Besucher blieben länger und gaben mehr Geld aus als früher. Kritiker wenden ein, dass ältere Menschen und Menschen mit Behinderung auf das Auto angewiesen sind. Die Stadt will deshalb künftig mehr Shuttlebusse anbieten und Parkplätze am Stadtrand ausbauen. |

### الجزء 4 — Teil 4 — Beratung (30 نقطة) — **مُنتَج**

| # | الملف | الصوت | النصّ المنطوق |
|---|---|---|---|
| 1 | `hoeren-t4-a.mp3` | امرأة | Sie interessieren sich für eine Umschulung zur Pflegekraft. Welchen Abschluss haben Sie? |
| 2 | `hoeren-t4-b.mp3` | رجل | Ich habe eine Ausbildung als Koch, aber ich arbeite seit zwei Jahren im Lager. |
| 3 | `hoeren-t4-c.mp3` | امرأة | Dann könnten Sie mit einer Teilzeitausbildung beginnen — das dauert drei Jahre statt zwei. |
| 4 | `hoeren-t4-d.mp3` | رجل | Bekomme ich in dieser Zeit finanzielle Unterstützung? |
| 5 | `hoeren-t4-e.mp3` | امرأة | Ja, wenn Ihr Einkommen niedrig genug ist. Bitte bringen Sie zum nächsten Termin Ihre Zeugnisse und die letzten drei Gehaltsabrechnungen mit. |