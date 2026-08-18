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
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [round, setRound] = React.useState(0);

  if (!form) return null;

  const setValue = (id: string, v: string) => {
    setValues((prev) => ({ ...prev, [id]: v }));
    setSubmitted(false);
  };

  const filled = form.fields.filter((f) => (values[f.id] ?? "").trim() !== "").length;

  const submit = () => {
    if (filled < form.fields.length) return;
    setSubmitted(true);
  };

  const reset = () => {
    setRound((r) => r + 1);
    setValues({});
    setSubmitted(false);
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {form.fields.map((field) => (
            <div key={field.id} className="space-y-1">
              <label htmlFor={field.id} className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
                <span>{field.label}</span>
                <span className="font-de text-muted-foreground" dir="ltr" lang="de">
                  ({field.labelDe})
                </span>
              </label>
              {field.type === "select" ? (
                <select
                  id={field.id}
                  value={values[field.id] ?? ""}
                  onChange={(e) => setValue(field.id, e.target.value)}
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
                  id={field.id}
                  type={field.type}
                  value={values[field.id] ?? ""}
                  onChange={(e) => setValue(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  dir={field.type === "text" ? "auto" : undefined}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={submit} disabled={filled < form.fields.length} className="gap-1.5">
            إرسال النموذج ({filled}/{form.fields.length})
          </Button>
          <Button variant="ghost" size="sm" onClick={reset} className="gap-1">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            مسح
          </Button>
        </div>

        {submitted && (
          <div className="rounded-xl border border-success/40 bg-success/10 p-3 text-sm">
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
