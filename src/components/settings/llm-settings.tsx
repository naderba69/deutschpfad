"use client";

import * as React from "react";
import {CheckCircle2, Database, RefreshCcw, Save, XCircle, Zap} from "lucide-react";

import {useLLM} from "@/components/providers/llm-provider";
import {Button} from "@/components/ui/button";
import {ConfirmDialog} from "@/components/ui/confirm-dialog";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {clearLLMCache, countLLMCache} from "@/lib/llm/cache";
import {resetUsageToday, setDailyLimit} from "@/lib/llm/usage";

const PROVIDER_AR: Record<string, string> = {
  gemini: "Google Gemini Flash (الأساسي)",
  groq: "Groq (احتياطي أول)",
  openrouter: "OpenRouter (احتياطي ثانٍ)",
};

/**
 * إعدادات الذكاء الاصطناعي — المرحلة 5:
 * — الحالة والمزوّدون — الحد اليومي القابل للتعديل (اقتراح المرحلة 4)
 * — العدّاد والاستهلاك — مسح التخزين المؤقت
 */
export function LLMSettings() {
  const { isConfigured, providers, dailyLimit, usageToday, remaining, refresh } = useLLM();
  const [limitInput, setLimitInput] = React.useState(dailyLimit);
  const [saving, setSaving] = React.useState(false);
  const [cacheCount, setCacheCount] = React.useState(0);
  /* الجولة الحادية عشرة — كان الزرّان ينفّذان فوراً: تصفير حصة اليوم يُفقد
     سجلّ الاستهلاك بلا رجعة، ومسح التخزين المؤقت يدفع المستخدم ثمن طلبات
     جديدة. صار كلاهما خلف تأكيد صريح، والنتيجة تُعلن في منطقة حيّة. */
  const [confirm, setConfirm] = React.useState<null | "reset" | "cache">(null);
  const [notice, setNotice] = React.useState("");

  React.useEffect(() => {
    setLimitInput(dailyLimit);
  }, [dailyLimit]);

  React.useEffect(() => {
    void countLLMCache().then(setCacheCount);
  }, []);

  const saveLimit = async () => {
    setSaving(true);
    const saved = await setDailyLimit(Number(limitInput) || 50);
    setLimitInput(saved);
    setSaving(false);
    await refresh();
  };

  const resetToday = async () => {
    await resetUsageToday();
    await refresh();
    setConfirm(null);
    setNotice("أُعيد تعيين عدّاد اليوم إلى صفر.");
  };

  const clearCache = async () => {
    await clearLLMCache();
    setCacheCount(await countLLMCache());
    setConfirm(null);
    setNotice("مُسح التخزين المؤقت.");
  };

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
          الذكاء الاصطناعي (الميزات الذكية)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        {/* الحالة */}
        <div className="rounded-xl border bg-muted/20 p-4">
          <p className="inline-flex items-center gap-2 font-semibold">
            {isConfigured ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
                المفاتيح مضبوطة — الميزات الذكية مفعّلة
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-destructive" aria-hidden="true" />
                لا توجد مفاتيح — الميزات الذكية مخفية تلقائياً
              </>
            )}
          </p>
          {isConfigured && (
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {providers.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" aria-hidden="true" />
                  {PROVIDER_AR[p] ?? p}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-2 text-xs text-muted-foreground">
            ترتيب التراجع: Gemini → Groq → OpenRouter (مع معالجة 429 وإعادة محاولة). المفاتيح
            محفوظة على الخادم فقط ولا تُرسل للمتصفح أبداً.
          </p>
        </div>

        {/* الحد اليومي (اقتراح قابل للتعديل) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="llm-limit">الحد اليومي لطلباتك (5-200)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="llm-limit"
                type="number"
                min={5}
                max={200}
                value={limitInput}
                onChange={(e) => setLimitInput(Number(e.target.value))}
                className="font-de w-32"
              />
              <Button variant="outline" size="sm" onClick={() => void saveLimit()} disabled={saving} className="gap-1.5">
                <Save className="h-3.5 w-3.5" aria-hidden="true" />
                {saving ? "…" : "حفظ"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              يؤثر على العدّاد المرئي والتنفيذ المحلي. (الخادم يحتفظ بحد صلب من متغير البيئة)
            </p>
          </div>

          <div className="space-y-1.5">
            <Label>الاستهلاك اليوم</Label>
            <p className="font-de text-2xl font-extrabold text-primary">
              {usageToday} / {dailyLimit}
            </p>
            <p className="text-xs text-muted-foreground">
              متبقٍّ اليوم: <span className="font-de font-bold">{remaining}</span> — التخزين
              المؤقت لا يستهلك حصة.
            </p>
          </div>
        </div>

        {/* إجراءات */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setConfirm("reset")} className="gap-1.5">
            <RefreshCcw className="h-3.5 w-3.5" aria-hidden="true" />
            إعادة تعيين عدّاد اليوم
          </Button>
          <Button variant="outline" size="sm" onClick={() => setConfirm("cache")} className="gap-1.5">
            <Database className="h-3.5 w-3.5" aria-hidden="true" />
            مسح التخزين المؤقت ({cacheCount})
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          مسح التخزين المؤقت يجعل الأسئلة المتكررة تستهلك طلباً جديداً مرة واحدة، ثم يعاد
          تخزينها تلقائياً.
        </p>

        <p role="status" aria-live="polite" className="sr-only">
          {notice}
        </p>

        <ConfirmDialog
          open={confirm === "reset"}
          onOpenChange={(open) => !open && setConfirm(null)}
          title="إعادة تعيين عدّاد اليوم؟"
          description="سيُصفَّر عدد الطلبات المسجّل اليوم، ولن يمكن استرجاعه. هذا لا يغيّر الحد اليومي."
          confirmLabel="أعد التعيين"
          destructive
          onConfirm={() => void resetToday()}
        />
        <ConfirmDialog
          open={confirm === "cache"}
          onOpenChange={(open) => !open && setConfirm(null)}
          title="مسح التخزين المؤقت؟"
          description={`ستُحذف ${cacheCount} نتيجة مخزَّنة، وأول سؤال متكرر سيستهلك طلباً جديداً من حصتك.`}
          confirmLabel="امسح التخزين"
          destructive
          onConfirm={() => void clearCache()}
        />
      </CardContent>
    </Card>
  );
}
