"use client";

import * as React from "react";
import {CheckCircle2, Link2, RotateCcw, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

/**
 * الغوص العميق في Funktionsverbgefüge (FVG) — B2
 * الأسلوب الرسمي للأخبار والاقتصاد والرسائل الأكاديمية
 */

/** جدول الـ 14 FVG الأشهر */
const FVG_TABLE = [
  { fvg: "zum Ausdruck bringen", gleich: "ausdrücken", ar: "يُعبّر عن", example: "Er brachte seine Meinung zum Ausdruck." },
  { fvg: "zur Verfügung stellen", gleich: "bereitstellen", ar: "يوفّر / يضع تحت التصرف", example: "Die Firma stellt Laptops zur Verfügung." },
  { fvg: "in Kraft treten", gleich: "beginnen", ar: "يدخل حيز التنفيذ", example: "Das Gesetz tritt im Januar in Kraft." },
  { fvg: "in Frage stellen", gleich: "bezweifeln", ar: "يشكك في", example: "Experten stellen die Studie in Frage." },
  { fvg: "unter Beweis stellen", gleich: "beweisen", ar: "يُثبت", example: "Er stellte sein Können unter Beweis." },
  { fvg: "zum Abschluss bringen", gleich: "abschließen", ar: "يُنهي", example: "Wir brachten das Projekt zum Abschluss." },
  { fvg: "in Betrieb nehmen", gleich: "starten", ar: "يُشغّل", example: "Das Kraftwerk wird in Betrieb genommen." },
  { fvg: "zur Kenntnis nehmen", gleich: "akzeptieren", ar: "يُحيط علماً", example: "Die Parteien nahmen das Urteil zur Kenntnis." },
  { fvg: "in Betracht ziehen", gleich: "erwägen", ar: "يأخذ بعين الاعتبار", example: "Wir zogen eine Alternative in Betracht." },
  { fvg: "eine Rolle spielen", gleich: "wichtig sein", ar: "يلعب دوراً", example: "Die Kosten spielen eine große Rolle." },
  { fvg: "in Verbindung bringen", gleich: "verbinden", ar: "يربط بـ", example: "Man bringt Stress mit Überlastung in Verbindung." },
  { fvg: "zur Diskussion stellen", gleich: "diskutieren", ar: "يطرح للنقاش", example: "Der Vorschlag wurde zur Diskussion gestellt." },
  { fvg: "in Gang setzen", gleich: "starten", ar: "يُطلق / يحرّك", example: "Die Regierung setzte Reformen in Gang." },
  { fvg: "außer Acht lassen", gleich: "ignorieren", ar: "يتجاهل", example: "Man darf die Risiken nicht außer Acht lassen." },
];

/** أسئلة MCQ تفاعلية */
const MCQ = [
  { q: "Der Minister ___ die Ergebnisse ___ .", options: ["stellte ... in Frage", "setzte ... in Kraft", "nahm ... in Betrieb", "brachte ... zum Ausdruck"], correct: 0, why: "in Frage stellen = يشكك في — الأكثر شيوعاً مع «Ergebnisse» في الأخبار." },
  { q: "Die neue Richtlinie ___ am Montag ___ .", options: ["tritt ... in Kraft", "bringt ... zum Ausdruck", "stellt ... zur Verfügung", "nimmt ... zur Kenntnis"], correct: 0, why: "in Kraft treten = يدخل حيز التنفيذ (يُستخدم مع القوانين واللوائح)." },
  { q: "Die Stadt ___ kostenloses WLAN ___ .", options: ["stellt ... zur Verfügung", "tritt ... in Kraft", "stellt ... in Frage", "bringt ... zum Ausdruck"], correct: 0, why: "zur Verfügung stellen = يوفّر — مع الخدمات." },
  { q: "Wir sollten auch die Nachteile ___ .", options: ["in Betracht ziehen", "in Betrieb nehmen", "zum Abschluss bringen", "unter Beweis stellen"], correct: 0, why: "in Betracht ziehen = يأخذ بعين الاعتبار." },
  { q: "„Man darf die Gefahren nicht außer Acht lassen“ bedeutet:", options: ["لا يجوز تجاهل المخاطر", "يجب تضخيم المخاطر", "المخاطر غير موجودة", "يجب نشر المخاطر"], correct: 0, why: "außer Acht lassen = يتجاهل." },
  { q: "Der Student ___ sein Wissen ___ .", options: ["stellte ... unter Beweis", "setzte ... in Gang", "nahm ... zur Kenntnis", "brachte ... in Verbindung"], correct: 0, why: "unter Beweis stellen = يُثبت — مع «Wissen/Können»." },
];

/** FVG الصحيح لكل جملة (بناء من كلمتين) */
const GAPS = [
  { id: "g1", text: "Die Firma stellt den Mitarbeitern neue Geräte {0}.", words: ["zur Verfügung", "in Kraft", "zum Ausdruck"], correct: "zur Verfügung" },
  { id: "g2", text: "Der Autor brachte seine Kritik {0}.", words: ["zum Ausdruck", "in Frage", "unter Beweis"], correct: "zum Ausdruck" },
  { id: "g3", text: "Das Gesetz tritt nächste Woche {0}.", words: ["in Kraft", "in Betrieb", "zur Kenntnis"], correct: "in Kraft" },
  { id: "g4", text: "Wir ziehen eine andere Lösung {0}.", words: ["in Betracht", "in Gang", "außer Acht"], correct: "in Betracht" },
  { id: "g5", text: "Der neue Rechner wird sofort in Betrieb {0}.", words: ["genommen", "gebracht", "gestellt"], correct: "genommen" },
  { id: "g6", text: "Die Parteien nahmen das Urteil zur {0}.", words: ["Kenntnis", "Verfügung", "Frage"], correct: "Kenntnis" },
];

export function FunktionsverbgefuegeTrainer() {
  const [mcqAns, setMcqAns] = React.useState<Record<number, number>>({});
  const [mcqChecked, setMcqChecked] = React.useState(false);
  const [gapAns, setGapAns] = React.useState<Record<string, string>>({});
  const [gapChecked, setGapChecked] = React.useState(false);
  const [showTable, setShowTable] = React.useState(true);

  const mcqCorrect = MCQ.filter((q, i) => mcqAns[i] === q.correct).length;
  const gapCorrect = GAPS.filter((g) => gapAns[g.id] === g.correct).length;

  const reset = () => {
    setMcqAns({});
    setMcqChecked(false);
    setGapAns({});
    setGapChecked(false);
  };

  return (
    <div className="space-y-6">
      {/* الشرح */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed">
        <p className="font-extrabold text-primary">ما هو Funktionsverbgefüge (FVG)؟</p>
        <p className="mt-1 text-muted-foreground">
          في اللغة الرسمية (الأخبار، التقارير، الرسائل، النقاش الأكاديمي) لا نقول فقط
          <span dir="ltr" lang="de"> ausdrücken </span> بل
          <span dir="ltr" lang="de"> zum Ausdruck bringen </span>.
          «اسم + فعل وظيفي» (Funktionsverbgefüge) = أسلوب رسمي أرقى، وهو علامة B2 في
          الكتابة (Struktur) والقراءة. الفهم إلزامي: في نصوص الامتحان ستواجهها كثيراً.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          🧠 <b>الجسر العربي:</b> العربية تفعل مثلها تماماً: «يُعرب عن» بدل «يقول»،
          «يدخل حيز التنفيذ» بدل «يبدأ»، «يضع تحت التصرف» بدل «يعطي». فكّر بالرسمي العربي وستجد المعادل.
        </p>
      </div>

      {/* الجدول */}
      <div className="rounded-xl border bg-card">
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          className="flex w-full items-center justify-between p-4 text-start"
        >
          <p className="font-extrabold">📋 جدول الـ 14 FVG الأشهر للامتحان</p>
          <span className="text-muted-foreground">{showTable ? "▲" : "▼"}</span>
        </button>
        {showTable && (
          <div className="overflow-x-auto border-t">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/40 text-xs text-muted-foreground">
                  <th className="p-2 text-start">FVG</th>
                  <th className="p-2 text-start">يعادل</th>
                  <th className="p-2 text-start">المعنى</th>
                  <th className="hidden p-2 text-start sm:table-cell">مثال</th>
                </tr>
              </thead>
              <tbody>
                {FVG_TABLE.map((r) => (
                  <tr key={r.fvg} className="border-t">
                    <td className="p-2 font-de font-bold" dir="ltr">{r.fvg}</td>
                    <td className="p-2 font-de text-muted-foreground" dir="ltr">{r.gleich}</td>
                    <td className="p-2">{r.ar}</td>
                    <td className="hidden p-2 font-de text-xs text-muted-foreground sm:table-cell" dir="ltr">{r.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* MCQ */}
      <div className="rounded-xl border bg-card p-4">
        <p className="mb-3 font-extrabold">🧩 تدريب 1 — اختر FVG الصحيح (6 أسئلة)</p>
        <div className="space-y-3">
          {MCQ.map((q, qi) => (
            <div key={qi} className="rounded-xl border p-3">
              <p className="text-sm font-bold">
                <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-extrabold text-primary">{qi + 1}</span>
                <span dir="ltr" lang="de">{q.q}</span>
              </p>
              <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => !mcqChecked && setMcqAns((a) => ({ ...a, [qi]: oi }))}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-start text-sm",
                      mcqAns[qi] === oi ? "border-primary bg-primary/10 text-primary" : "border-muted bg-background hover:border-primary/40",
                      mcqChecked && oi === q.correct && "border-success bg-success/10 text-success",
                      mcqChecked && mcqAns[qi] === oi && oi !== q.correct && "border-destructive bg-destructive/10 text-destructive",
                    )}
                  >
                    <span dir="ltr" lang="de">{opt}</span>
                  </button>
                ))}
              </div>
              {mcqChecked && (
                <p className={cn("mt-2 text-xs", mcqAns[qi] === q.correct ? "text-success" : "text-destructive")}>
                  {mcqAns[qi] === q.correct ? "✓ صحيح" : `✗ الصحيح: ${q.options[q.correct]}`} — {q.why}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-bold text-muted-foreground">{mcqChecked && `النتيجة: ${mcqCorrect}/6`}</span>
          {!mcqChecked ? (
            <Button onClick={() => setMcqChecked(true)} disabled={Object.keys(mcqAns).length < 6}>تحقق</Button>
          ) : (
            <Button variant="outline" onClick={() => { setMcqAns({}); setMcqChecked(false); }}>إعادة</Button>
          )}
        </div>
      </div>

      {/* فجوات */}
      <div className="rounded-xl border bg-card p-4">
        <p className="mb-3 font-extrabold">✍️ تدريب 2 — أكمل بـ FVG الصحيح (6 جمل)</p>
        <div className="space-y-3">
          {GAPS.map((g) => {
            const chosen = gapAns[g.id];
            const isRight = gapChecked && chosen === g.correct;
            const isWrong = gapChecked && chosen !== g.correct;
            return (
              <div key={g.id} className="rounded-xl border p-3">
                <p className="font-de text-sm leading-relaxed" dir="ltr">
                  {g.text.split("{0}")[0]}
                  <span className={cn("mx-1 inline-block min-w-24 rounded-md border-2 px-2 py-0.5 text-center", !chosen && "border-dashed border-muted-foreground/50 bg-muted/30", chosen && !gapChecked && "border-primary bg-primary/10 text-primary", isRight && "border-success bg-success/10 text-success", isWrong && "border-destructive bg-destructive/10 text-destructive")}>
                    {chosen ?? "…"}
                  </span>
                  {g.text.split("{0}")[1]}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.words.map((w) => (
                    <button
                      key={w}
                      type="button"
                      disabled={gapChecked}
                      onClick={() => setGapAns((a) => ({ ...a, [g.id]: w }))}
                      className={cn("rounded-md border px-2.5 py-1 text-xs font-semibold", gapAns[g.id] === w ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background hover:border-primary/40")}
                    >
                      <span dir="ltr">{w}</span>
                    </button>
                  ))}
                </div>
                {gapChecked && (
                  <p className={cn("mt-1.5 text-xs", isRight ? "text-success" : "text-destructive")}>
                    {isRight ? "✓ صحيح" : `✗ الصحيح: ${g.correct}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-bold text-muted-foreground">{gapChecked && `النتيجة: ${gapCorrect}/6`}</span>
          {!gapChecked ? (
            <Button onClick={() => setGapChecked(true)} disabled={Object.keys(gapAns).length < GAPS.length}>تحقق</Button>
          ) : (
            <Button variant="outline" onClick={() => { setGapAns({}); setGapChecked(false); }}>إعادة</Button>
          )}
        </div>
      </div>

      {/* نصائح الامتحان */}
      <div className="rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm">
        <p className="font-extrabold text-gold-strong">📌 نصائح للامتحان:</p>
        <ul className="mt-2 space-y-1.5 text-muted-foreground">
          <li>• في <b>Schreiben</b>: استخدم 2-3 FVG لرفع درجة «Struktur» (z.B. «zur Verfügung stellen»، «eine Rolle spielen»).</li>
          <li>• في <b>Lesen Teil 2/3</b>: لا تحلل الجملة كلمة كلمة — ابحث عن الاسم المشهور (Kraft، Frage، Verfügung) وافهم الفعل معه.</li>
          <li>• <b>الأخطاء الشائعة:</b> نسيان الفعل المنفصل (tritt...in Kraft)، وخلط stellen (يوفّر) مع stehen (متاح).</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" onClick={reset} className="gap-2">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          إعادة كل التدريبات
        </Button>
      </div>
    </div>
  );
}
