"use client";

import * as React from "react";
import {CheckCircle2, Trophy} from "lucide-react";

import {Button} from "@/components/ui/button";
import {validateBackupData, writeBackupData} from "@/lib/storage/export-import";

/**
 * ═══════════════════════════════════════════════════════════
 *  مستقبل روابط /sync — يستقبل:
 *   · ?data=… → رابط مزامنة (يستعيد التقدم كاملاً)
 *   · ?challenge=… → تحدي صديق (يعرض النتيجة ويدعوك للتفوق)
 *  يعمل كلياً على الجهاز — Vercel مجاني بلا خادم.
 * ═══════════════════════════════════════════════════════════
 */

async function decompress(encoded: string): Promise<unknown> {
  if (encoded.startsWith("v1raw.")) {
    return JSON.parse(atob(encoded.slice(6)));
  }
  if (encoded.startsWith("v1.")) {
    const b64 = encoded.slice(3);
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    if ("DecompressionStream" in window) {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
      return JSON.parse(await new Response(stream).text());
    }
    throw new Error("المتصفح لا يدعم فك الضغط");
  }
  return JSON.parse(encoded);
}

interface Challenge {
  type: "challenge";
  name: string;
  level: string;
  lessons: number;
  ts: number;
}

export function SyncHandler() {
  const [mode, setMode] = React.useState<"idle" | "loading" | "challenge" | "sync" | "error">("idle");
  const [challenge, setChallenge] = React.useState<Challenge | null>(null);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get("data");
    const chal = params.get("challenge");

    if (!data && !chal) {
      setMode("idle");
      return;
    }

    void (async () => {
      try {
        if (chal) {
          const decoded = (await decompress(chal)) as Challenge;
          if (decoded?.type !== "challenge") throw new Error("رابط غير صالح");
          setChallenge(decoded);
          setMode("challenge");
          return;
        }
        if (data) {
          const decoded = await decompress(data);
          if (!validateBackupData(decoded)) throw new Error("بيانات غير صالحة");
          setMode("loading");
          setMessage("تم فك الرابط بنجاح — اختر طريقة الاستعادة:");
          window.__syncData = decoded as never;
        }
      } catch (e) {
        setMode("error");
        setMessage("⚠️ تعذّر قراءة الرابط — تأكد من نسخه كاملاً.");
      }
    })();
  }, []);

  const apply = async (mode: "merge" | "replace") => {
    try {
      const data = window.__syncData;
      if (!data) throw new Error("لا بيانات");
      await writeBackupData(data, mode);
      setMode("sync");
      setMessage(`تم استعادة تقدمك (${mode === "merge" ? "دمج" : "استبدال"}) ✓ — رحلتك بين يديك!`);
    } catch {
      setMode("error");
      setMessage("تعذّرت الاستعادة — أعد المحاولة.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-md px-4 py-16 sm:px-6">
      {mode === "idle" && (
        <div className="rounded-2xl border bg-card p-6 text-center">
          <p className="text-3xl" aria-hidden="true">🔗</p>
          <h1 className="mt-2 text-lg font-extrabold">رابط المزامنة</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            هذا الرابط خاص باستعادة التقدم أو التحدي. ولّد رابطك من
            الإعدادات ← «المزامنة عبر الرابط».
          </p>
          <Button asChild className="mt-4">
            <a href="/settings">الذهاب للإعدادات</a>
          </Button>
        </div>
      )}

      {mode === "challenge" && challenge && (
        <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center">
          <p className="text-3xl" aria-hidden="true">🏆</p>
          <h1 className="mt-2 text-lg font-extrabold">تحدٍّ من {challenge.name}</h1>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-background p-3">
              <p className="font-de text-xl font-extrabold text-primary">{challenge.level}</p>
              <p className="text-[11px] text-muted-foreground">المستوى</p>
            </div>
            <div className="rounded-xl bg-background p-3">
              <p className="font-de text-xl font-extrabold text-primary">{challenge.lessons}</p>
              <p className="text-[11px] text-muted-foreground">درس مكتمل</p>
            </div>
            <div className="rounded-xl bg-background p-3">
              <p className="text-xl font-extrabold text-gold-strong">{new Date(challenge.ts).toLocaleDateString("ar-TN")}</p>
              <p className="text-[11px] text-muted-foreground">التاريخ</p>
            </div>
          </div>
          <p className="mt-4 text-sm font-bold text-muted-foreground">
            هل تستطيع التفوق عليه؟ ابدأ رحلتك وتجاوز نتيجته! 💪
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button asChild>
              <a href="/learning-path">ابدأ الآن</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/">الرئيسية</a>
            </Button>
          </div>
        </div>
      )}

      {mode === "loading" && (
        <div className="rounded-2xl border bg-card p-6 text-center">
          <p className="text-3xl" aria-hidden="true">📦</p>
          <p className="mt-2 text-sm font-bold">{message}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button onClick={() => void apply("merge")}>دمج مع تقدمي الحالي</Button>
            <Button variant="outline" onClick={() => void apply("replace")}>استبدال كامل</Button>
          </div>
        </div>
      )}

      {mode === "sync" && (
        <div className="rounded-2xl border border-success/40 bg-success/10 p-6 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-success" aria-hidden="true" />
          <h1 className="mt-2 text-lg font-extrabold">تمت الاستعادة!</h1>
          <p className="mt-1 text-sm text-muted-foreground">{message}</p>
          <Button asChild className="mt-4">
            <a href="/">عُد لرحلتك</a>
          </Button>
        </div>
      )}

      {mode === "error" && (
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-center">
          <p className="text-3xl" aria-hidden="true">⚠️</p>
          <p className="mt-2 text-sm font-bold text-destructive">{message}</p>
          <Button asChild variant="outline" className="mt-4">
            <a href="/settings">الإعدادات</a>
          </Button>
        </div>
      )}
    </div>
  );
}

/** إعلان النافذة للبيانات المؤقتة */
declare global {
  interface Window {
    __syncData?: import("@/types/storage").BackupData;
  }
}
