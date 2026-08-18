"use client";

import * as React from "react";
import {Check, Copy, Users} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

/**
 * ═══════════════════════════════════════════════════════════
 *  ادعُ صديقاً — مشاركة الموقع:
 *  · كل صديق يفتح الرابط يحفظ تقدمه منفصلاً على متصفحه (بلا حسابات)
 *  · المنصة مجانية 100% — المشاركة لا تكلف شيئاً
 * ═══════════════════════════════════════════════════════════
 */
export function InviteCard() {
  const [copied, setCopied] = React.useState(false);

  // الرابط يُقرأ من إعدادات النشر (يتبدل تلقائياً مع النطاق) — لا رابط ثابت
  const appUrl =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_APP_URL?.trim()) ||
    (typeof window !== "undefined" ? window.location.origin : "https://deutschpfad.vercel.app");

  const inviteText =
    `تعلمت الألمانية مجاناً مع DeutschPfad — منصة عربية كاملة A1→B2 بمنهجية Goethe: دروس تفاعلية، نطق، قصص، واختبارات محاكاة. جرّبها معي: ${appUrl}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(inviteText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* تجاهل */
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "DeutschPfad — درب الألمانية", text: inviteText });
        return;
      } catch {
        /* أُلغيت */
      }
    }
    await copy();
  };

  return (
    <Card>
      <CardContent className="flex h-full flex-col gap-2 p-4">
        <p className="flex items-center gap-1.5 text-sm font-bold">
          <Users className="h-4 w-4 text-primary" aria-hidden="true" />
          ادعُ صديقاً ليتعلم معك
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          كل من يفتح الرابط يحفظ تقدمه منفصلاً على متصفحه — تنافسا معاً بلا أي حساب، والمنصة مجانية بالكامل.
        </p>
        <div className="mt-auto flex gap-2 pt-1">
          <Button size="sm" variant="outline" className="flex-1 gap-1.5" onClick={() => void copy()}>
            {copied ? <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
            {copied ? "نُسخت!" : "انسخ الدعوة"}
          </Button>
          <Button size="sm" className="flex-1" onClick={() => void share()}>
            مشاركة
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
