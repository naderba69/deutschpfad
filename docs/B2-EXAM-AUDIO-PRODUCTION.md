# إنتاج مقاطع صوت الاستماع لامتحان B2

> هذا الملف **مُشتقّ آلياً** من بيانات الامتحان (`src/data/exams/b2-hoeren-audio.ts`) —
> لا تُحرّره يدوياً. لتحديثه بعد أي تغيير في النصوص:
> `EXPORT_B2_SCRIPTS=1 npx vitest run src/data/exams/b2-hoeren-audio.test.ts`

## 1. الخلاصة

- المطلوب: **42 مقطعاً** = 3 نماذج (A/B/C) × 4 أجزاء، بمجموع الملفات أدناه.
- المسار: `public/audio/exam-b2/<النموذج>/<اسم الملف>` — مثال: `public/audio/exam-b2/a/hoeren-t1-g1.mp3`
- حتى تُسجَّل المقاطع، يشغّل الامتحان النطق الآلي (TTS) تلقائياً ويصرّح بذلك للمتعلم.
- بمجرد وجود **كل** ملفات نموذج واحد في مجلده، ينتقل ذلك النموذج إلى الصوت البشري تلقائياً بلا أي تغيير في الكود.

## 2. مواصفات التسجيل (مطابقة لمجموعات A1–B1 الحالية)

| البند | القيمة |
|---|---|
| الصيغة | MP3 (MPEG-1 Layer III) |
| معدل البت | 56 kbps CBR |
| التردد | 44.1 kHz |
| القنوات | أحادية (Mono) |
| مستوى الصوت | ثابت بين الملفات — بلا ضجيج خلفية ولا صدى |
| بداية/نهاية الملف | بلا صمت زائد (أقل من 0.3 ثانية) |

أمر التحويل/التطبيع الموحّد (نفس ما استُخدم مع A1–B1):

```bash
# من WAV إلى MP3 بالمواصفات المتفق عليها
ffmpeg -i input.wav -ac 1 -ar 44100 -b:a 56k -codec:a libmp3lame output.mp3
```

## 3. قواعد الإلقاء

- الأصوات: لكل مقطع صوت واحد مناسب لسياقه (معلن محطة، بائع، موظف...). الحوارات تُقرأ بصوتين (رجل/امرأة) بتبادل الأدوار.
- السرعة: ألمانية فصحى طبيعية (لا إبطاء صناعي) — امتحان B2 يقيس الفهم في السرعة العادية.
- النطق: بلا تشديد مبالغ، وبلا ترجمة أو شرح داخل المقطع.
- تُقرأ العناوين الافتتاحية كما هي (مثل «Gespräch 1» و«Ansage 3») لأنها جزء من الصوت الأصلي.

## 4. نصوص التسجيل

---

## النموذج A — المجلد `public/audio/exam-b2/a/`

### الجزء 1 — Teil 1 — Kurze Gespräche (الجزء 1 — حوارات قصيرة)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1317 حرفاً · عدد الملفات: 5

#### hoeren-t1-g1.mp3

`/audio/exam-b2/a/hoeren-t1-g1.mp3` — 311 حرفاً

```de
Gespräch 1. Frau: Hallo Herr Weber, ich habe Ihre Nachricht bekommen. Sie wollten den Termin verschieben? Mann: Ja, leider muss ich morgen nach München. Geht es am Donnerstag um zehn? Frau: Am Donnerstag habe ich eine Besprechung. Was ist mit Freitag? Mann: Freitag passt, um elf Uhr? Frau: Gut, Freitag um elf.
```

#### hoeren-t1-g2.mp3

`/audio/exam-b2/a/hoeren-t1-g2.mp3` — 217 حرفاً

```de
— Gespräch 2. Frau: Hast du schon die neue Wohnung gefunden? Mann: Ja, endlich! Eine Dreizimmerwohnung mit Balkon. Frau: Und die Miete? Mann: 850 Euro warm. Das ist mehr als ich geplant hatte, aber die Lage ist super.
```

#### hoeren-t1-g3.mp3

`/audio/exam-b2/a/hoeren-t1-g3.mp3` — 243 حرفاً

```de
— Gespräch 3. Mann: Ich möchte gern ein Konto eröffnen. Frau: Sehr gern. Benötigen Sie auch eine Kreditkarte? Mann: Nein, nur ein Girokonto. Und ich hätte gern Online-Banking. Frau: Das ist kostenlos. Sie müssen nur den Vertrag unterschreiben.
```

#### hoeren-t1-g4.mp3

`/audio/exam-b2/a/hoeren-t1-g4.mp3` — 244 حرفاً

```de
— Gespräch 4. Frau: Der Zug nach Hamburg hat leider zwanzig Minuten Verspätung. Mann: Oh nein, ich muss um zwölf im Büro sein. Gibt es einen früheren Anschluss? Frau: Der nächste Zug fährt in zehn Minuten, aber Sie müssen in Hannover umsteigen.
```

#### hoeren-t1-g5.mp3

`/audio/exam-b2/a/hoeren-t1-g5.mp3` — 302 حرفاً

```de
— Gespräch 5. Mann: Ich habe gestern ein neues Smartphone gekauft, aber die Kamera funktioniert nicht. Frau: Dann bringen Sie es am besten zurück. Innerhalb von zwei Wochen können Sie es umtauschen. Mann: Und wenn ich mein Geld zurück möchte? Frau: Das ist auch möglich, Sie bekommen den vollen Betrag.
```


### الجزء 2 — Teil 2 — Interview im Radio (الجزء 2 — مقابلة إذاعية)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1145 حرفاً · عدد الملفات: 1

#### hoeren-t2.mp3

`/audio/exam-b2/a/hoeren-t2.mp3` — 1145 حرفاً

```de
Moderatorin: Herzlich willkommen bei „Bildung heute“. Heute ist Frau Dr. Kern bei uns, Expertin für digitale Bildung. Frau Dr. Kern, viele Schulen haben inzwischen Tablets eingeführt. Ist das ein Erfolg?

Dr. Kern: Grundsätzlich ja, aber mit Einschränkungen. Tablets allein verbessern das Lernen nicht. Entscheidend ist, wie die Lehrkräfte sie einsetzen. Eine Studie aus Bayern zeigt: In Klassen, in denen die Lehrer gezielt geschult wurden, stieg die Motivation deutlich. Wo das nicht passierte, blieb der Effekt aus.

Moderatorin: Kritiker sagen, Kinder würden zu viel Zeit vor dem Bildschirm verbringen.

Dr. Kern: Das ist ein berechtigter Punkt. Deshalb empfehlen wir klare Regeln: maximal zwei Stunden Bildschirmzeit pro Schultag und regelmäßige Pausen ohne Geräte. Außerdem sollte das Tablet nicht das einzige Medium sein – Bücher und Hefte bleiben wichtig.

Moderatorin: Was wünschen Sie sich von der Politik?

Dr. Kern: Zwei Dinge: Erstens flächendeckende Fortbildungen für Lehrkräfte, zweitens eine bessere technische Ausstattung. Viele Schulen haben nicht einmal stabiles WLAN. Ohne diese Grundlagen bleibt digitale Bildung ein Zufall.
```


### الجزء 3 — Teil 3 — Ansagen zuordnen (الجزء 3 — مطابقة الإعلانات)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1079 حرفاً · عدد الملفات: 7

#### hoeren-t3-a1.mp3

`/audio/exam-b2/a/hoeren-t3-a1.mp3` — 157 حرفاً

```de
Ansage 1: Achtung, die Abfahrt des Zuges nach Köln verzögert sich um fünfzehn Minuten. Der Zug fährt heute von Gleis sieben ab. Wir bitten um Entschuldigung.
```

#### hoeren-t3-a2.mp3

`/audio/exam-b2/a/hoeren-t3-a2.mp3` — 168 حرفاً

```de
— Ansage 2: Liebe Kundinnen und Kunden, heute bis zwanzig Uhr erhalten Sie auf alle Lebensmittel zwanzig Prozent Rabatt. An der Kasse zeigen Sie bitte Ihre Kundenkarte.
```

#### hoeren-t3-a3.mp3

`/audio/exam-b2/a/hoeren-t3-a3.mp3` — 127 حرفاً

```de
— Ansage 3: Bitte beachten Sie: Der Aufzug ist wegen Wartungsarbeiten bis Freitag außer Betrieb. Bitte benutzen Sie die Treppe.
```

#### hoeren-t3-a4.mp3

`/audio/exam-b2/a/hoeren-t3-a4.mp3` — 141 حرفاً

```de
— Ansage 4: Wer sein Auto hier parkt, braucht eine Parkscheibe. Die Parkdauer ist auf zwei Stunden begrenzt. Kontrollen finden täglich statt.
```

#### hoeren-t3-a5.mp3

`/audio/exam-b2/a/hoeren-t3-a5.mp3` — 153 حرفاً

```de
— Ansage 5: Die Stadtbücherei bleibt am Donnerstag wegen einer internen Veranstaltung geschlossen. Ausgeliehene Medien können Sie am Freitag zurückgeben.
```

#### hoeren-t3-a6.mp3

`/audio/exam-b2/a/hoeren-t3-a6.mp3` — 161 حرفاً

```de
— Ansage 6: Für die Veranstaltung am Samstag sind noch wenige Karten erhältlich. Sie können sie online oder an der Abendkasse kaufen. Beginn ist um neunzehn Uhr.
```

#### hoeren-t3-a7.mp3

`/audio/exam-b2/a/hoeren-t3-a7.mp3` — 172 حرفاً

```de
— Ansage 7: Unser Schwimmbad hat ab Montag wieder geöffnet. Neue Öffnungszeiten: täglich von sieben bis zweiundzwanzig Uhr. Kinder unter sechs Jahren haben freien Eintritt.
```


### الجزء 4 — Teil 4 — Vortrag mit Fragen (الجزء 4 — حديث مع أسئلة)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1612 حرفاً · عدد الملفات: 1

#### hoeren-t4.mp3

`/audio/exam-b2/a/hoeren-t4.mp3` — 1612 حرفاً

```de
Meine Damen und Herren, ich spreche heute über die Kreislaufwirtschaft – ein Modell, das unseren Umgang mit Ressourcen grundlegend verändern soll. Das traditionelle System ist linear: Wir produzieren, wir nutzen, wir werfen weg. Die Kreislaufwirtschaft dagegen will Produkte und Materialien so lange wie möglich im Kreislauf halten.

Warum ist das nötig? Die Zahlen sind beeindruckend: In Europa produzieren wir pro Kopf etwa fünf Tonnen Abfall pro Jahr. Nur rund zwölf Prozent davon werden tatsächlich recycelt. Der Rest landet in Verbrennungsanlagen oder auf Deponien. Gleichzeitig steigt der Verbrauch von Rohstoffen weltweit weiter.

Ein zentrales Prinzip ist das sogenannte Ecodesign: Produkte werden von Anfang an so konstruiert, dass sie reparierbar sind und aus recycelbaren Materialien bestehen. Die EU hat 2024 eine Richtlinie verabschiedet, die Hersteller verpflichtet, Ersatzteile sieben Jahre lang zu liefern. Das verlängert die Lebensdauer von Geräten deutlich.

Aber es gibt auch Kritik. Kleine Unternehmen klagen über hohe Kosten, weil sie ihre Produktionslinien umstellen müssen. Verbraucherschützer fordern zudem mehr Transparenz: Wie lange hält ein Produkt wirklich? Manche Hersteller geben freiwillig eine Mindestlebensdauer an, aber das ist noch keine Pflicht.

Was können wir als Verbraucher tun? Drei konkrete Schritte: Erstens, langlebige Produkte kaufen und auf Gütesiegel achten. Zweitens, reparieren statt ersetzen – viele Reparaturcafés bieten kostenlose Hilfe an. Und drittens, weniger kaufen: Der nachhaltigste Konsum ist der, den wir vermeiden. Vielen Dank für Ihre Aufmerksamkeit.
```


---

## النموذج B — المجلد `public/audio/exam-b2/b/`

### الجزء 1 — Teil 1 — Kurze Gespräche (الجزء 1 — حوارات قصيرة)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1180 حرفاً · عدد الملفات: 5

#### hoeren-t1-g1.mp3

`/audio/exam-b2/b/hoeren-t1-g1.mp3` — 287 حرفاً

```de
Gespräch 1. Mann: Hallo Frau Klein, ich habe gehört, Sie trainieren jetzt im neuen Fitnessstudio? Frau: Ja, seit zwei Monaten. Dreimal pro Woche, meistens abends. Mann: Und, ist es teuer? Frau: Es ist nicht billig, aber die Kurse sind sehr gut. Mann: Vielleicht sollte ich auch anfangen.
```

#### hoeren-t1-g2.mp3

`/audio/exam-b2/b/hoeren-t1-g2.mp3` — 227 حرفاً

```de
— Gespräch 2. Frau: Hast du dich für den Halbmarathon angemeldet? Mann: Ja, aber ich habe mir den Fuß verletzt. Der Arzt hat gesagt, ich soll vier Wochen pausieren. Frau: Das ist schade. Nächstes Jahr klappt es bestimmt wieder.
```

#### hoeren-t1-g3.mp3

`/audio/exam-b2/b/hoeren-t1-g3.mp3` — 243 حرفاً

```de
— Gespräch 3. Mann: Ich komme heute später zur Besprechung. Ich muss meine Tochter vom Kindergarten abholen. Frau: Kein Problem. Wir beginnen um drei, du kannst um halb vier dazukommen. Mann: Danke, ich informiere euch, wenn ich unterwegs bin.
```

#### hoeren-t1-g4.mp3

`/audio/exam-b2/b/hoeren-t1-g4.mp3` — 216 حرفاً

```de
— Gespräch 4. Frau: Die Miete für meine neue Wohnung ist ziemlich hoch. Mann: Wie viel zahlst du denn? Frau: 950 Euro warm, aber die Lage ist zentral und der Balkon groß. Mann: Das ist in dieser Gegend sogar günstig.
```

#### hoeren-t1-g5.mp3

`/audio/exam-b2/b/hoeren-t1-g5.mp3` — 207 حرفاً

```de
— Gespräch 5. Mann: Ich möchte ein Paket nach Tunesien schicken. Wie lange dauert das? Frau: Mit der Standardversand etwa zwei Wochen. Mit Express nur fünf Tage. Mann: Dann nehme ich Express, es ist wichtig.
```


### الجزء 2 — Teil 2 — Interview im Radio (الجزء 2 — مقابلة إذاعية)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1417 حرفاً · عدد الملفات: 1

#### hoeren-t2.mp3

`/audio/exam-b2/b/hoeren-t2.mp3` — 1417 حرفاً

```de
Moderator: Herzlich willkommen bei „Arbeitswelt aktuell“. Unser Gast ist Professor Reinhold, Arbeitsforscher. Herr Professor, viele Firmen testen die Vier-Tage-Woche. Was ist Ihre Einschätzung?

Prof. Reinhold: Die Ergebnisse der Pilotprojekte sind vielversprechend. Die Mitarbeiter sind weniger gestresst und die Produktivität bleibt stabil oder steigt sogar leicht. Entscheidend ist allerdings die Umsetzung: Wenn man an vier Tagen die Arbeit von fünf Tagen zusammenpresst, gewinnt niemand etwas.

Moderator: Welche Modelle funktionieren denn?

Prof. Reinhold: Am besten hat sich das Modell bewährt, bei dem die Arbeitszeit tatsächlich reduziert wird – zum Beispiel von 40 auf 35 Stunden bei gleichem Lohn. Die Mitarbeiter sind motivierter und die Fehlzeiten sinken. In Skandinavien gibt es damit sehr positive Erfahrungen.

Moderator: Was sagen die Kritiker?

Prof. Reinhold: Sie befürchten höhere Kosten und eine stärkere Belastung der verbleibenden Arbeitstage. Außerdem eignet sich das Modell nicht für alle Branchen – im Einzelhandel oder in der Pflege müssen Kunden und Patienten immer versorgt werden.

Moderator: Welchen Rat geben Sie Unternehmen?

Prof. Reinhold: Ich rate zu Pilotprojekten mit klaren Zielen und einer guten Auswertung. Man sollte die Beschäftigten in die Entscheidung einbeziehen. Und man sollte nicht nur über die Anzahl der Tage sprechen, sondern über die Qualität der Arbeit insgesamt.
```


### الجزء 3 — Teil 3 — Ansagen zuordnen (الجزء 3 — مطابقة الإعلانات)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1034 حرفاً · عدد الملفات: 7

#### hoeren-t3-a1.mp3

`/audio/exam-b2/b/hoeren-t3-a1.mp3` — 159 حرفاً

```de
Ansage 1: Willkommen im Bürgeramt. Bitte ziehen Sie eine Nummer und warten Sie, bis Ihre Nummer aufgerufen wird. Die Wartezeit beträgt derzeit etwa 20 Minuten.
```

#### hoeren-t3-a2.mp3

`/audio/exam-b2/b/hoeren-t3-a2.mp3` — 155 حرفاً

```de
— Ansage 2: Liebe Gäste, die Führung durch das Museum beginnt in fünf Minuten am Eingang. Bitte bleiben Sie in der Gruppe und fotografieren Sie ohne Blitz.
```

#### hoeren-t3-a3.mp3

`/audio/exam-b2/b/hoeren-t3-a3.mp3` — 170 حرفاً

```de
— Ansage 3: Achtung, das Schwimmbad schließt heute wegen einer Veranstaltung bereits um 18 Uhr. Der Eintritt ist ab 16 Uhr nur noch für Kinder unter zwölf Jahren möglich.
```

#### hoeren-t3-a4.mp3

`/audio/exam-b2/b/hoeren-t3-a4.mp3` — 154 حرفاً

```de
— Ansage 4: Sehr geehrte Fahrgäste, die Linie 5 fährt heute wegen Bauarbeiten nur bis zur Haltestelle Rathaus. Bitte steigen Sie dort in den Ersatzbus um.
```

#### hoeren-t3-a5.mp3

`/audio/exam-b2/b/hoeren-t3-a5.mp3` — 132 حرفاً

```de
— Ansage 5: Liebe Kundinnen und Kunden, die Apotheke hat jetzt wieder geöffnet. Bitte beachten Sie: Der Notdienst beginnt um 22 Uhr.
```

#### hoeren-t3-a6.mp3

`/audio/exam-b2/b/hoeren-t3-a6.mp3` — 126 حرفاً

```de
— Ansage 6: Aufgrund eines Sturms bleibt der Stadtpark heute geschlossen. Bitte verzichten Sie auf Spaziergänge im Waldgebiet.
```

#### hoeren-t3-a7.mp3

`/audio/exam-b2/b/hoeren-t3-a7.mp3` — 138 حرفاً

```de
— Ansage 7: Herzlich willkommen im Supermarkt. Unsere Aktionswoche startet: Bio-Produkte erhalten Sie diese Woche mit zehn Prozent Rabatt.
```


### الجزء 4 — Teil 4 — Vortrag mit Fragen (الجزء 4 — حديث مع أسئلة)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1569 حرفاً · عدد الملفات: 1

#### hoeren-t4.mp3

`/audio/exam-b2/b/hoeren-t4.mp3` — 1569 حرفاً

```de
Meine Damen und Herren, ich möchte heute über die Situation auf dem Wohnungsmarkt sprechen, die viele von Ihnen betrifft. Die Mieten in den Großstädten sind in den letzten zehn Jahren um durchschnittlich 45 Prozent gestiegen – deutlich schneller als die Einkommen. Für viele Haushalte ist das ein ernstes Problem: Sie geben mittlerweile mehr als ein Drittel ihres Einkommens für die Miete aus.

Besonders betroffen sind junge Familien und Alleinerziehende. Eine alleinerziehende Mutter mit zwei Kindern muss oft mehr als die Hälfte ihres Nettoeinkommens für Wohnen aufwenden. Gleichzeitig werden bezahlbare Wohnungen knapp, weil immer mehr Wohnungen in Luxusobjekte umgewandelt werden.

Die Kommunen versuchen gegenzusteuern. Viele Städte haben eine Mietpreisbremse eingeführt, die überhöhte Mieten bei Neuvermietungen begrenzen soll. In der Praxis zeigt sich aber, dass die Wirkung begrenzt ist: Viele Vermieter umgehen die Regelung, zum Beispiel durch möblierte Wohnungen, für die Sonderregeln gelten. Auch der soziale Wohnungsbau wurde jahrzehntelang vernachlässigt – erst jetzt investieren die Länder wieder mehr.

Was können wir als Bürger tun? Erstens: sich in Mietervereinen organisieren, die bei Konflikten rechtlich beraten. Zweitens: kommunale Wohnungsbaugesellschaften unterstützen, die langfristig günstige Mieten anbieten. Und drittens: bei der Stadtplanung mitreden – viele Städte haben Beiräte, in denen Bürgerinnen und Bürger Vorschläge einbringen können. Eine Stadt ist nur dann lebenswert, wenn auch Menschen mit normalen Einkommen dort wohnen können.
```


---

## النموذج C — المجلد `public/audio/exam-b2/c/`

### الجزء 1 — Teil 1 — Kurze Gespräche (الجزء 1 — حوارات قصيرة)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1214 حرفاً · عدد الملفات: 5

#### hoeren-t1-g1.mp3

`/audio/exam-b2/c/hoeren-t1-g1.mp3` — 272 حرفاً

```de
Gespräch 1. Frau: Herr Schmidt, wir haben Ihre Bewerbung erhalten. Können Sie am Freitag zum Vorstellungsgespräch kommen? Mann: Am Freitag bin ich leider noch auf Geschäftsreise. Geht es auch am Montag? Frau: Montag um zehn Uhr passt. Bitte bringen Sie Ihre Zeugnisse mit.
```

#### hoeren-t1-g2.mp3

`/audio/exam-b2/c/hoeren-t1-g2.mp3` — 189 حرفاً

```de
— Gespräch 2. Mann: Ich hätte gern ein Ticket nach Hamburg für morgen früh. Frau: Der erste Zug fährt um 5:40 Uhr. Mann: Und was kostet die Fahrkarte? Frau: Mit der Bahncard 50 nur 29 Euro.
```

#### hoeren-t1-g3.mp3

`/audio/exam-b2/c/hoeren-t1-g3.mp3` — 257 حرفاً

```de
— Gespräch 3. Frau: Haben Sie die neue Software schon installiert? Mann: Nein, ich warte noch auf die Freigabe von der IT-Abteilung. Frau: Ohne die neue Version können wir die Berichte nicht öffnen. Mann: Dann schreibe ich sofort eine E-Mail an den Support.
```

#### hoeren-t1-g4.mp3

`/audio/exam-b2/c/hoeren-t1-g4.mp3` — 242 حرفاً

```de
— Gespräch 4. Mann: Meine Tochter hat nächste Woche Geburtstag. Ich suche ein Geschenk. Frau: Wie alt wird sie denn? Mann: Zwölf. Sie liebt Bücher und zeichnet gern. Frau: Dann schauen Sie sich doch die Malsets an, die sind gerade im Angebot.
```

#### hoeren-t1-g5.mp3

`/audio/exam-b2/c/hoeren-t1-g5.mp3` — 254 حرفاً

```de
— Gespräch 5. Frau: Ich muss dringend zum Zahnarzt. Mein Zahn tut weh. Mann: Dr. Weber hat heute noch einen Termin um vier Uhr frei. Frau: Nehmen Sie ihn bitte! Und können Sie mich von der Arbeit abholen? Mann: Kein Problem, ich hole Sie um halb vier ab.
```


### الجزء 2 — Teil 2 — Interview im Radio (الجزء 2 — مقابلة إذاعية)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1474 حرفاً · عدد الملفات: 1

#### hoeren-t2.mp3

`/audio/exam-b2/c/hoeren-t2.mp3` — 1474 حرفاً

```de
Moderatorin: Willkommen bei „Beruf und Zukunft“. Heute spricht Frau Berger, Karriereberaterin, über das Arbeiten als Freelancer. Frau Berger, immer mehr Menschen machen sich selbstständig. Warum?

Frau Berger: Die Gründe sind unterschiedlich. Viele wollen flexible Arbeitszeiten und die Freiheit, ihre Projekte selbst zu wählen. Andere möchten Familie und Beruf besser vereinbaren. Und nicht zuletzt bieten digitale Plattformen heute einfache Möglichkeiten, Kunden zu finden.

Moderatorin: Was sind die größten Herausforderungen?

Frau Berger: Ganz klar die finanzielle Unsicherheit. Freelancer haben kein festes Monatsgehalt, und im Krankheitsfall bekommen sie erst nach sechs Wochen Geld von der Krankenkasse. Außerdem müssen sie sich selbst um die Altersvorsorge kümmern. Viele unterschätzen das.

Moderatorin: Was raten Sie Einsteigern?

Frau Berger: Erstens: einen finanziellen Puffer für mindestens sechs Monate ansparen. Zweitens: ein Netzwerk aufbauen, bevor man kündigt. Und drittens: mit einem Nebenprojekt starten, um Erfahrungen zu sammeln, bevor man ganz auf sich gestellt ist. Wichtig ist auch, Verträge immer schriftlich zu schließen.

Moderatorin: Wie sieht die Zukunft aus?

Frau Berger: Der Trend geht zur Mischung: Viele Arbeitnehmer arbeiten als Angestellte und bieten gleichzeitig freiberuflich Dienstleistungen an. Das nennt man das Portfolio-Modell. Es verbindet die Sicherheit des Angestelltenverhältnisses mit der Flexibilität der Selbstständigkeit.
```


### الجزء 3 — Teil 3 — Ansagen zuordnen (الجزء 3 — مطابقة الإعلانات)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1039 حرفاً · عدد الملفات: 7

#### hoeren-t3-a1.mp3

`/audio/exam-b2/c/hoeren-t3-a1.mp3` — 156 حرفاً

```de
Ansage 1: Ihr Flug nach Tunis wird am Gate 12 aufgerufen. Bitte halten Sie Ihren Reisepass und die Bordkarte bereit. Das Einsteigen beginnt in zehn Minuten.
```

#### hoeren-t3-a2.mp3

`/audio/exam-b2/c/hoeren-t3-a2.mp3` — 141 حرفاً

```de
— Ansage 2: Liebe Gäste, unser Hotelrestaurant ist heute von 12 bis 14:30 Uhr geöffnet. Bitte reservieren Sie für den Abend an der Rezeption.
```

#### hoeren-t3-a3.mp3

`/audio/exam-b2/c/hoeren-t3-a3.mp3` — 145 حرفاً

```de
— Ansage 3: Achtung, die Bibliothek schließt heute um 18 Uhr. Ausgeliehene Bücher können Sie auch über den Rückgabeautomaten vor der Tür abgeben.
```

#### hoeren-t3-a4.mp3

`/audio/exam-b2/c/hoeren-t3-a4.mp3` — 155 حرفاً

```de
— Ansage 4: Die Bushaltestelle Hauptbahnhof wird wegen Bauarbeiten verlegt. Bitte nutzen Sie die Ersatzhaltestelle auf der gegenüberliegenden Straßenseite.
```

#### hoeren-t3-a5.mp3

`/audio/exam-b2/c/hoeren-t3-a5.mp3` — 143 حرفاً

```de
— Ansage 5: Liebe Eltern, der Schwimmkurs für Kinder beginnt am Montag um 15 Uhr. Bitte bringen Sie Badeanzug, Handtuch und eine Badekappe mit.
```

#### hoeren-t3-a6.mp3

`/audio/exam-b2/c/hoeren-t3-a6.mp3` — 160 حرفاً

```de
— Ansage 6: Unser Kino zeigt heute Abend den neuen Film um 20 Uhr. Karten können Sie online oder an der Abendkasse kaufen. Für Studierende gibt es einen Rabatt.
```

#### hoeren-t3-a7.mp3

`/audio/exam-b2/c/hoeren-t3-a7.mp3` — 139 حرفاً

```de
— Ansage 7: Willkommen in der Stadtbücherei. Ab sofort können Sie auch E-Books über unsere App ausleihen. Die Ausleihdauer beträgt 21 Tage.
```


### الجزء 4 — Teil 4 — Vortrag mit Fragen (الجزء 4 — حديث مع أسئلة)

مرات التشغيل في الامتحان: **1** · إجمالي النص: 1716 حرفاً · عدد الملفات: 1

#### hoeren-t4.mp3

`/audio/exam-b2/c/hoeren-t4.mp3` — 1716 حرفاً

```de
Guten Abend, meine Damen und Herren. Ich freue mich, heute über ein Thema sprechen zu dürfen, das uns alle betrifft: nachhaltiges Reisen. Der Tourismus gehört zu den größten Wirtschaftszweigen der Welt – im letzten Jahr wurden weltweit über 1,4 Milliarden Reisen unternommen. Diese Zahl hat enorme Auswirkungen auf Klima und Umwelt: Allein der Flugverkehr verursacht rund 2,5 Prozent der weltweiten CO2-Emissionen, Tendenz steigend.

Was bedeutet nachhaltiges Reisen konkret? Es geht nicht darum, auf Reisen zu verzichten. Es geht darum, bewusster zu reisen. Drei Prinzipien stehen im Mittelpunkt: Erstens, die Anreise – wählen Sie die Bahn statt des Flugzeugs, wenn es zeitlich vertretbar ist. Eine Bahnreise von München nach Wien verursacht nur ein Zehntel der Emissionen eines Fluges. Zweitens, die Unterkunft – achten Sie auf Umweltzertifikate. Viele Hotels sparen Wasser, nutzen Solarstrom und verzichten auf Einwegplastik. Drittens, das Verhalten vor Ort – essen Sie regional, kaufen Sie lokale Produkte und respektieren Sie die Natur.

Natürlich hat nachhaltiges Reisen auch Grenzen. Für Fernreisen gibt es oft keine umweltfreundliche Alternative, und wer Familie in einem anderen Kontinent hat, will nicht auf Besuche verzichten. Auch ist nachhaltiges Reisen nicht immer günstiger. Aber es gibt einen wachsenden Trend: Immer mehr Reisende sind bereit, etwas mehr zu bezahlen, wenn sie wissen, dass ihr Geld der lokalen Bevölkerung zugutekommt.

Was können Sie also tun? Informieren Sie sich vor der Reise, wählen Sie Anbieter mit nachhaltigen Konzepten und kompensieren Sie – zum Beispiel durch Klimaschutzprojekte. Und denken Sie daran: Der schönste Urlaub ist der, der auch in zehn Jahren noch möglich ist.
```


---

## 5. التحقق بعد التسجيل

```bash
# 1) حارس الأصول: يفشل إن كان مجلد نموذج ناقصاً أو مقطعاً تالفاً
npx vitest run src/data/audio-assets.test.ts

# 2) بنية المقاطع وأسماؤها وعدد مرات التشغيل
npx vitest run src/data/exams/b2-hoeren-audio.test.ts

# 3) سلوك المشغّل في المتصفح (مقاطع حقيقية أو TTS — كلاهما مغطّى)
npx playwright test e2e/b2-hoeren-audio.spec.ts
```
