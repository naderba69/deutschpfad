"use client";

import * as React from "react";
import {Copy, Link2, Share2, Trophy} from "lucide-react";

import {Button} from "@/components/ui/button";
import {buildBackupData, validateBackupData, writeBackupData} from "@/lib/storage/export-import";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  المزامنة عبر رابط مشفر + تحدي الصديق (Vercel مجاني — بلا خادم)
 *  · رابط مزامنة: يصدّر تقدمك في رابط مضغوط (gzip → base64) —
 *    افتحه على جهاز آخر لتستعيد كل شيء.
 *  · تحدي صديق: رابط يحتوي لقطة تقدمك — صديقك يفتحه ليرى
 *    نتيجتك ويتحداك أن يتفوق عليها (دوري الأصدقاء المجاني).
 *  ⚠️ الرابط قد يكون طويلاً — يُنسخ للحافظة أو يُشارك مباشرة.
 * ═══════════════════════════════════════════════════════════
 */

/** ضغط + تشفير بسيط (Base64) — ليس أماناً حقيقياً بل حماية من الخطأ */
async function compress(data: unknown): Promise<string> {
  const json = JSON.stringify(data);
  const bytes = new TextEncoder().encode(json);
  // ضغط بسيط باستخدام CompressionStream (متوفر في المتصفحات الحديثة)
  try {
    if ("CompressionStream" in window) {
      const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("gzip"));
      const compressed = await new Response(stream).arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(compressed)));
      return `v1.${base64}`;
    }
  } catch {
    /* سقط للنسخة غير المضغوطة */
  }
  return `v1raw.${btoa(json)}`;
}

async function decompress(encoded: string): Promise<unknown> {
  if (encoded.startsWith("v1raw.")) {
    const json = atob(encoded.slice(6));
    return JSON.parse(json);
  }
  if (encoded.startsWith("v1.")) {
    const b64 = encoded.slice(3);
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    if ("DecompressionStream" in window) {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
      const json = await new Response(stream).text();
      return JSON.parse(json);
    }
    throw new Error("متصفحك لا يدعم فك الضغط — استخدم متصفحاً حديثاً");
  }
  return JSON.parse(encoded);
}

export function SyncLink() {
  const [status, setStatus] = React.useState<string | null>(null);
  const [syncLink, setSyncLink] = React.useState<string | null>(null);
  const [challengeLink, setChallengeLink] = React.useState<string | null>(null);
  const [importMode, setImportMode] = React.useState(false);
  const [importCode, setImportCode] = React.useState("");

  const buildLinks = async () => {
    const data = await buildBackupData();
    const encoded = await compress(data);
    // رابط المزامنة: يحمل البيانات كاملة
    const sync = `${location.origin}/sync?data=${encodeURIComponent(encoded)}`;
    // تحدي الصديق: لقطة مبسطة (الاسم + المستوى + النقاط)
    const snapshot = {
      type: "challenge",
      name: (data as { profile?: { name?: string } }).profile?.name ?? "صديقك",
      level: (data as { profile?: { placementLevel?: string } }).profile?.placementLevel ?? "A1",
      lessons: (data as { progress?: { completedLessons?: string[] } }).progress?.completedLessons?.length ?? 0,
      ts: Date.now(),
    };
    const encChallenge = await compress(snapshot);
    const challenge = `${location.origin}/sync?challenge=${encodeURIComponent(encChallenge)}`;
    setSyncLink(sync);
    setChallengeLink(challenge);
    setStatus("تم توليد الروابط ✓ — انسخها وشاركها");
  };

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(`نُسخ ${label} إلى الحافظة ✓`);
    } catch {
      setStatus(`${label}: ${text.slice(0, 60)}…`);
    }
  };

  const applyImport = async () => {
    try {
      const data = await decompress(importCode.trim());
      if (!validateBackupData(data)) {
        setStatus("⚠️ الرابط غير صالح لبيانات DeutschPfad");
        return;
      }
      const mode = window.confirm("دمج مع بياناتك الحالية؟\n«موافق» = دمج · «إلغاء» = استبدال كامل")
        ? "merge"
        : "replace";
      await writeBackupData(data, mode);
      setStatus(`تم استيراد الرابط (${mode === "merge" ? "دمج" : "استبدال"}) ✓`);
      setImportMode(false);
      setImportCode("");
    } catch {
      setStatus("⚠️ تعذّر فك الرابط — تأكد من نسخه كاملاً");
    }
  };

  return (
    <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/[0.03] p-4">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Link2 className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-extrabold">🔗 المزامنة عبر الرابط (بلا خادم)</h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            ولّد رابطاً يحمل تقدمك كاملاً — افتحه على هاتفك الآخر أو حاسوبك لاستعادة كل شيء.
            و«تحدي الصديق» يشارك نتيجتك ليتفوق عليك أصدقاؤك (دوري الأصدقاء المجاني).
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button size="sm" className="gap-1.5" onClick={buildLinks}>
          <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
          توليد الروابط
        </Button>
        {syncLink && (
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => void copy(syncLink, "رابط المزامنة")}>
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            نسخ رابط المزامنة
          </Button>
        )}
        {challengeLink && (
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => void copy(challengeLink, "رابط التحدي")}>
            <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
            نسخ رابط التحدي
          </Button>
        )}
        <Button size="sm" variant="secondary" className="gap-1.5" onClick={() => setImportMode((v) => !v)}>
          لصق رابط
        </Button>
      </div>

      {importMode && (
        <div className="space-y-2">
          <AutoTextarea
            value={importCode}
            onChange={setImportCode}
            placeholder="الصق الرابط هنا…"
          />
          <Button size="sm" onClick={applyImport} disabled={!importCode.trim()}>
            استيراد من الرابط
          </Button>
        </div>
      )}

      {status && <p className="text-xs font-bold text-primary">{status}</p>}
    </div>
  );
}

/* مكوّنات مساعدة صغيرة */
function AutoTextarea({value, onChange, placeholder}: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      dir="ltr"
      rows={3}
      className="w-full rounded-xl border bg-background px-3 py-2 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-ring"
    />
  );
}
