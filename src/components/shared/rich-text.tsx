import { Fragment } from "react";

/**
 * عارض نصّ تعليمي غنيّ — فقرات وقوائم وتشديد.
 *
 * كُتب لأنّ ترقية العمق الأكاديمي أنتجت شروحاً من 900 إلى 2300 حرف مكتوبة
 * بفقرات مفصولة بسطرين، وبنقاط تبدأ بـ«•»، وبتشديد `**كذا**`. وكان العارض
 * القديم يضعها كلَّها داخل <p> واحدة، فتظهر النجمات حرفيّاً على الشاشة
 * وتنهار الفقرات في كتلة واحدة يصعب قراءتها. هذا المكوّن يعالج ثلاث بنى
 * فقط — عمداً، فلا حاجة إلى محرّك Markdown كامل:
 *
 *   · فقرة   = مقطع مفصول بسطر فارغ (\n\n)
 *   · نقطة   = سطر يبدأ بـ«•» أو «- » داخل الفقرة
 *   · جدول   = أسطر متتالية تبدأ وتنتهي بـ«|» مع سطر فاصل |---|
 *   · تشديد  = **نصّ** ⇐ <strong>
 *
 * النصّ العادي (بلا أيٍّ من ذلك) يُعرض كما كان تماماً: فقرة واحدة.
 */

const BOLD = /\*\*(.+?)\*\*/g;

/** يحوّل **تشديد** إلى <strong> داخل سطر واحد */
function inline(text: string, keyPrefix: string) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  BOLD.lastIndex = 0;
  while ((m = BOLD.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <strong key={`${keyPrefix}-b${m.index}`} className="font-bold text-foreground">
        {m[1]}
      </strong>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length > 0 ? parts : [text];
}

const isBullet = (line: string) => /^\s*(?:•|-\s)/.test(line);
const stripBullet = (line: string) => line.replace(/^\s*(?:•\s*|-\s+)/, "");

const isRow = (line: string) => /^\s*\|.*\|\s*$/.test(line);
const isSep = (line: string) => /^\s*\|[\s:|-]+\|\s*$/.test(line);
const cells = (line: string) =>
  line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

/** جدول Markdown بسيط — أوّل صفّ رؤوس إن تلاه سطر فاصل */
function MdTable({ rows, keyPrefix }: { rows: string[]; keyPrefix: string }) {
  const hasHead = rows.length > 1 && isSep(rows[1]);
  const head = hasHead ? cells(rows[0]) : null;
  const body = rows.filter((r, i) => !isSep(r) && !(hasHead && i === 0)).map(cells);
  return (
    <div className="my-2 overflow-x-auto rounded-xl border bg-background">
      <table className="w-full text-sm">
        {head ? (
          <thead>
            <tr className="border-b bg-muted/40">
              {head.map((c, i) => (
                <th key={i} className="px-3 py-2 text-start font-bold">
                  {inline(c, `${keyPrefix}-h${i}`)}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {body.map((r, i) => (
            <tr key={i} className="border-b last:border-0">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 align-top">
                  {inline(c, `${keyPrefix}-r${i}c${j}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RichText({ text, className }: { text: string; className?: string }) {
  const blocks = text.split(/\n{2,}/).filter((b) => b.trim().length > 0);

  return (
    <div className={className ?? "space-y-3 leading-relaxed"}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n").filter((l) => l.trim().length > 0);
        const out: React.ReactNode[] = [];
        let bullets: string[] = [];
        let table: string[] = [];

        const flushTable = (key: string) => {
          if (table.length === 0) return;
          out.push(<MdTable key={key} rows={table} keyPrefix={key} />);
          table = [];
        };

        const flush = (key: string) => {
          flushTable(`${key}-t`);
          if (bullets.length === 0) return;
          out.push(
            <ul key={key} className="my-1 space-y-1 pe-1">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{inline(b, `${key}-${i}`)}</span>
                </li>
              ))}
            </ul>,
          );
          bullets = [];
        };

        for (const [li, line] of lines.entries()) {
          if (isRow(line)) {
            table.push(line);
            continue;
          }
          flushTable(`b${bi}-t${li}`);
          if (isBullet(line)) {
            bullets.push(stripBullet(line));
            continue;
          }
          flush(`b${bi}-u${li}`);
          out.push(<p key={`b${bi}-p${li}`}>{inline(line, `b${bi}-p${li}`)}</p>);
        }
        flush(`b${bi}-uend`);

        return <Fragment key={bi}>{out}</Fragment>;
      })}
    </div>
  );
}
