/**
 * ═══════════════════════════════════════════════════════════
 *  ملخّص النتيجة بالنموذج الرسمي — مشترك بين محرّكي A1–B1 وB2
 *
 *  كان المحرّك المشترك يعرض سطرين («X من Y (Z%)») وسطراً عاماً، ويعرض محرّك B2
 *  بطاقات نسب مئوية بلا أي صلة بالنموذج الرسمي. هذا المكوّن يضيف — بلا حذف أي
 *  معلومة سابقة — ثلاثة أمور مقيسة:
 *   1) **النقاط الرسمية** لكل مكوّن موضوعي، مع قيمة السؤال الواحد حين يكون
 *      التحويل دقيقاً (A1 استماع: ≈1.67 · A2: 1.25 · B2: ≈3.33).
 *   2) **حدّ النجاح الرسمي صراحةً** («60 من 100») وقاعدة كل مستوى: مجموع
 *      واحد في A1/A2 (مع عتبتي A2: 45 من 75 و15 من 25) ومكوّنات مستقلة في
 *      B1/B2.
 *   3) **تنبيه صريح** حيث يقلّ عدد أسئلتنا عن النموذج الرسمي، فلا يُفهم أن
 *      التحويل تنبؤ بالنتيجة الرسمية.
 * ═══════════════════════════════════════════════════════════
 */
import { percent } from "@/lib/tests/exam-scoring";
import {
  HONESTY_NOTE_AR,
  OFFICIAL_MODELS,
  officialModulePoints,
  type ExamModuleKey,
  type OfficialLevel,
} from "@/lib/tests/official-points";

export interface OfficialRow {
  key: ExamModuleKey;
  label: string;
  correct: number;
  total: number;
}

export function ExamOfficialSummary({
  level,
  rows,
  subjectiveAr,
}: {
  level: OfficialLevel;
  rows: OfficialRow[];
  /** سطر اختياري يوضح المكوّنات المقيَّمة ذاتياً (كتابة/تحدث) */
  subjectiveAr?: string;
}) {
  const model = OFFICIAL_MODELS[level];
  const conversions = rows.map((row) => ({ ...row, conversion: officialModulePoints(level, row.key, row) }));
  const measured = conversions.filter((c) => c.conversion);
  const pointsSum = Math.round(measured.reduce((n, c) => n + (c.conversion?.points ?? 0), 0) * 10) / 10;
  const maxSum = measured.reduce((n, c) => n + (c.conversion?.max ?? 0), 0);

  return (
    <div className="space-y-3" data-testid="official-summary">
      <ul className="space-y-2 text-sm">
        {conversions.map((c) => (
          <li key={c.key} data-testid="official-row" data-module={c.key}>
            {c.label}: {c.correct} من {c.total} ({percent(c.correct, c.total)}%)
            {c.conversion ? (
              <>
                {" · "}
                <b className="font-extrabold text-primary">النقاط الرسمية: {c.conversion.points} من {c.conversion.max}</b>
                {c.conversion.perItem !== undefined ? (
                  <span className="text-muted-foreground"> (كل سؤال ≈ {c.conversion.perItem} نقطة)</span>
                ) : null}
              </>
            ) : null}
            {c.conversion?.noteAr ? (
              <span className="mt-0.5 block text-xs text-muted-foreground">{c.conversion.noteAr}</span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm">
        <p className="font-bold">{model.passRuleAr}</p>
        {model.hurdlesAr.length > 0 ? (
          <ul className="mt-1 list-inside list-disc space-y-0.5 text-xs text-muted-foreground">
            {model.hurdlesAr.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}
        {!model.modular && measured.length > 0 ? (
          <p className="mt-1.5 text-xs">
            المقيس عندنا (استماع + قراءة): <b className="font-extrabold">{pointsSum} من {maxSum}</b> نقطة — والكتابة
            والتحدث {model.modules.schreiben.max} نقطة لكل منهما في النموذج الرسمي وتقييمهما ذاتي هنا.
          </p>
        ) : null}
      </div>

      {subjectiveAr ? <p className="text-xs text-muted-foreground">{subjectiveAr}</p> : null}
      <p className="text-xs text-muted-foreground">{HONESTY_NOTE_AR}</p>
    </div>
  );
}
