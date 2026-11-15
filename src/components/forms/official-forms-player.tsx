"use client";

import * as React from "react";
import {CheckCircle2, FileText, RotateCcw} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {OFFICIAL_FORMS} from "@/data/supplemental/forms";
import {cn} from "@/lib/utils";

/**
 * مشغّل الاستمارات الرسمية — نموذج تفاعلي بمصطلحات ألمانية حقيقية
 */
export function OfficialFormsPlayer({ formId }: { formId: string }) {
  const form = OFFICIAL_FORMS.find((f) => f.id === formId);
  // معرّف فريد لكل نسخة: صفحة /forms تعرض أكثر من نموذج، وبعضها يشترك في
  // أسماء الحقول (vorname/nachname) فكانت المعرّفات مكررة في الصفحة الواحدة.
  const uid = React.useId().replace(/[:]/g, "");
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [round, setRound] = React.useState(0);
  /* الحقول الناقصة عند محاولة الإرسال — كانت المحاولة تُتجاهل بصمت لأن الزر
     معطّل حتى تكتمل الحقول: المتعلّم لا يعرف أي حقل ناقص (و3 من 12 حقلاً قد
     تكون تحت الطيّة). الآن الإرسال يشرح النقص ويُعلنه لقارئ الشاشة. */
  const [attempted, setAttempted] = React.useState(false);
  const missing = form?.fields.filter((f) => (values[f.id] ?? "").trim() === "") ?? [];
  const messageId = `${uid}-missing`;
  const errId = (fieldId: string) => `${uid}-${fieldId}-err`;

  if (!form) return null;

  const setValue = (id: string, v: string) => {
    setValues((prev) => ({ ...prev, [id]: v }));
    setSubmitted(false);
  };

  const filled = form.fields.filter((f) => (values[f.id] ?? "").trim() !== "").length;

  const submit = () => {
    setAttempted(true);
    if (missing.length > 0) {
      /* نقل التركيز إلى أول حقل ناقص: من يستخدم قارئ الشاشة أو لوحة المفاتيح
         يعرف أين يبدأ الإصلاح، بدل أن يبقى التركيز على زر الإرسال بلا مؤشر. */
      const first = missing[0];
      if (first) requestAnimationFrame(() => document.getElementById(`${uid}-${first.id}`)?.focus());
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setRound((r) => r + 1);
    setValues({});
    setSubmitted(false);
    setAttempted(false);
  };

  return (
    <Card key={round}>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex flex-wrap items-center gap-2 text-lg">
          <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="font-de" dir="ltr" lang="de">
            {form.titleDe}
          </span>
          <span className="text-sm font-semibold text-muted-foreground">{form.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <p className="rounded-lg bg-muted/30 p-2.5 text-xs text-muted-foreground">{form.description}</p>

        {/* data-practice: استمارة **تدريب** لا جمع بيانات حقيقية. لا نضع
            autocomplete كي لا يملأ المتصفح بياناته الشخصية الحقيقية في تمرين. */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" data-practice="">
          {form.fields.map((field) => (
            <div key={field.id} className="space-y-1">
              <label htmlFor={`${uid}-${field.id}`} className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
                <span>{field.label}</span>
                <span className="font-de text-muted-foreground" dir="ltr" lang="de">
                  ({field.labelDe})
                </span>
              </label>
              {field.type === "select" ? (
                <select
                  id={`${uid}-${field.id}`}
                  value={values[field.id] ?? ""}
                  onChange={(e) => setValue(field.id, e.target.value)}
                  aria-invalid={attempted && (values[field.id] ?? "").trim() === "" ? true : undefined}
                  aria-describedby={attempted && (values[field.id] ?? "").trim() === "" ? errId(field.id) : undefined}
                  className={cn(
                    "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring",
                    values[field.id] ? "" : "text-muted-foreground",
                  )}
                >
                  <option value="">— اختر —</option>
                  {field.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`${uid}-${field.id}`}
                  type={field.type}
                  value={values[field.id] ?? ""}
                  onChange={(e) => setValue(field.id, e.target.value)}
                  aria-invalid={attempted && (values[field.id] ?? "").trim() === "" ? true : undefined}
                  aria-describedby={attempted && (values[field.id] ?? "").trim() === "" ? errId(field.id) : undefined}
                  placeholder={field.placeholder}
                  dir={field.type === "text" ? "auto" : undefined}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
              )}
              {attempted && (values[field.id] ?? "").trim() === "" && (
                <p id={errId(field.id)} className="text-[11px] font-semibold text-destructive">
                  هذا الحقل مطلوب
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={submit} className="gap-1.5">
            إرسال النموذج ({filled}/{form.fields.length})
          </Button>
          <Button variant="ghost" size="sm" onClick={reset} className="gap-1">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            مسح
          </Button>
        </div>

        {attempted && missing.length > 0 && (
          <div id={messageId} role="alert" className="rounded-xl border border-destructive/40 bg-destructive/5 p-3 text-sm">
            <p className="font-bold text-destructive">
              بقيت {missing.length} من {form.fields.length} حقول فارغة:
            </p>
            <ul className="mt-1 list-inside list-disc text-muted-foreground">
              {missing.map((f) => (
                <li key={f.id}>
                  <span>{f.labelDe}</span> — {f.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {submitted && (
          <div role="status" className="rounded-xl border border-success/40 bg-success/10 p-3 text-sm">
            <p className="inline-flex items-center gap-1.5 font-bold text-success">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              أُرسل بنجاح!
            </p>
            <p className="mt-1 text-muted-foreground">{form.successMessage}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
