"use client";

import * as React from "react";
import Link from "next/link";
import {ArrowLeft, BookOpen, Headphones, MessageSquareText, Sparkles} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {LangDe} from "@/components/shared/lang-de";
import {resolveRelatedResources, type RelatedResourceKind} from "@/data/lessons/related-resources";
import {cn} from "@/lib/utils";

/**
 * التعمّق بعد الدرس (Vertiefung) — يوصل الدرس بقصّته وحواره وحلقته.
 *
 * قبل هذا القسم كانت 140 قصةً وحواراً وحلقةً معزولةً في ثلاث مكتبات
 * لا يمرّ بها مسار التعلّم. القسم يعرض موارد هذا الدرس وحده، مع سبب
 * صريح لكل مورد، ورابط يفتحه مباشرةً (?open=<id>) لا مكتبته.
 */

const KIND_META: Record<RelatedResourceKind, { label: string; icon: typeof BookOpen; tone: string }> = {
  story: { label: "قصة تفاعلية", icon: BookOpen, tone: "text-primary bg-primary/10" },
  dialogue: { label: "حوار يومي", icon: MessageSquareText, tone: "text-success bg-success/10" },
  podcast: { label: "حلقة استماع", icon: Headphones, tone: "text-gold-strong bg-gold/15" },
};

const KIND_ORDER: RelatedResourceKind[] = ["story", "dialogue", "podcast"];

/** صيغة العدد بالعربية مع نعتها: مفرد ومثنّى وجمع — «2 مواد مختارة» ركيك */
function countLabel(n: number): string {
  if (n === 1) return "مادة واحدة مختارة";
  if (n === 2) return "مادتان مختارتان";
  return `${n} مواد مختارة`;
}

export function VertiefungSection({ lessonId }: { lessonId: string }) {
  const resources = React.useMemo(() => resolveRelatedResources(lessonId), [lessonId]);
  if (resources.length === 0) return null;

  const sorted = [...resources].sort(
    (a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind),
  );

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
          طبّق ما تعلّمته في سياق حقيقي
        </CardTitle>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          القاعدة تُثبَّت بالتعرّض لا بالحفظ. {countLabel(sorted.length)} لهذا الدرس بعينه
          — تعيد مفرداته وتركيبه في سياق متصل. افتح واحدة على الأقل قبل الانتقال.
        </p>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2">
        {sorted.map((r) => {
          const meta = KIND_META[r.kind];
          const Icon = meta.icon;
          return (
            <Link
              key={`${r.kind}-${r.id}`}
              href={r.href}
              className="group flex flex-col rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl" aria-hidden="true">{r.emoji}</span>
                <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-extrabold", meta.tone)}>
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {meta.label}
                </span>
              </div>
              <h3 className="mt-2 text-sm font-extrabold group-hover:text-primary">{r.titleAr}</h3>
              <p className="mt-0.5 text-xs font-bold text-muted-foreground">
                <LangDe className="font-bold">{r.titleDe}</LangDe>
              </p>
              <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-muted-foreground">{r.reasonAr}</p>
              <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-extrabold text-primary">
                افتحه الآن
                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
