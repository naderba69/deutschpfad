"use client";

import * as React from "react";
import Link from "next/link";
import {Award, CheckCircle2, Target} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {useProgress} from "@/components/providers/progress-provider";
import {getLevelCanDoStats} from "@/lib/cando/statements";
import {getLevelCompletion} from "@/lib/progress-selectors";
import {LEVELS} from "@/lib/constants/curriculum";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  طريقك إلى الشهادة — يجيب على «متى أتقن وأحصل على الشهادة؟»
 *  لكل مستوى ثلاثة معايير حقيقية:
 *  · الدروس (التقدم في المسار) · الوظائف (Can-Do) · امتحان الختم
 *  الشهادة الكاملة = أتقنت وظائف B2 + اجتزت امتحان الختم B2
 * ═══════════════════════════════════════════════════════════
 */
export function CertificatePath() {
  const { completedUnits, completedLessonsSet, sealedLevels, isHydrated } = useProgress();
  const [canDo, setCanDo] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    const rec: Record<string, number> = {};
    for (const l of LEVELS) {
      rec[l.code] = getLevelCanDoStats(l.code).pct;
    }
    setCanDo(rec);
  }, []);

  // المستوى النشط (أول مستوى لم يُختم)
  const activeLevel = LEVELS.find((l) => !(sealedLevels ?? []).includes(l.code)) ?? LEVELS[LEVELS.length - 1];
  const activeIdx = LEVELS.findIndex((l) => l.code === activeLevel.code);

  const levelItems = LEVELS.map((l) => {
    const lessons = getLevelCompletion(completedUnits, l.code);
    const lessonsPct = isHydrated ? lessons.pct : 0;
    const sealed = (sealedLevels ?? []).includes(l.code);
    const canDoPct = canDo[l.code] ?? 0;
    // جاهزية الشهادة = متوسط الدروس والوظائف (الختم يكملها)
    const ready = Math.round((lessonsPct + canDoPct) / 2);
    return { ...l, lessonsPct, canDoPct, sealed, ready };
  });

  const overall = Math.round(
    levelItems.reduce((s, l) => s + l.ready, 0) / Math.max(1, levelItems.length),
  );

  return (
    <Card className="overflow-hidden border-primary/20 bg-gradient-to-bl from-primary/[0.05] via-card to-gold/[0.04]">
      <CardContent className="space-y-3 p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold-strong">
            <Award className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-extrabold">طريقك إلى الشهادة</h3>
            <p className="text-[11px] text-muted-foreground">أتقن الوظائف + اجتز الختم — لا مجرد دروس منهية</p>
          </div>
          <span className="font-de rounded-full bg-gold/15 px-2.5 py-1 text-xs font-extrabold text-gold-strong">{overall}%</span>
        </div>

        {/* شريط المسار */}
        <div className="space-y-2">
          {levelItems.map((l, i) => {
            const isActive = i === activeIdx;
            const isPast = i < activeIdx || l.sealed;
            return (
              <Link
                key={l.code}
                href={`/level/${l.code.toLowerCase()}`}
                className={cn(
                  "block rounded-xl border p-3 transition-colors",
                  l.sealed ? "border-success/30 bg-success/5" : isActive ? "border-primary/40 bg-primary/5" : "border-muted bg-card/60 hover:border-primary/40",
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden="true">{l.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-de text-xs font-extrabold">{l.code}</p>
                      {l.sealed ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-extrabold text-success">
                          <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> مُختومة
                        </span>
                      ) : (
                        <span className="font-de text-[11px] font-bold text-muted-foreground">{l.ready}%</span>
                      )}
                    </div>
                    {/* شريط مزدوج: دروس + وظائف */}
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary/70" style={{ width: `${l.lessonsPct}%` }} />
                      </div>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-gold" style={{ width: `${l.canDoPct}%` }} />
                      </div>
                    </div>
                    <p className="mt-0.5 flex items-center justify-between text-[9px] text-muted-foreground">
                      <span>دروس {l.lessonsPct}%</span>
                      <span>وظائف {l.canDoPct}%</span>
                      {l.sealed && <span className="text-success">الختم ✓</span>}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA إلى المستوى النشط أو الختم النهائي */}
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gold/30 bg-gold/5 px-3 py-2.5">
          <Target className="h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
          <p className="min-w-0 flex-1 text-[11px] font-bold text-muted-foreground">
            {sealedLevels?.includes("B2")
              ? "أتممت كل المستويات — أنت جاهز للشهادة النهائية!"
              : `ركّز الآن على ${activeLevel.code}: أتقن وظائفه ثم اجتز امتحان الختم.`}
          </p>
          <Link
            href={sealedLevels?.includes("B2") ? "/tests/seal/b2" : `/level/${activeLevel.code.toLowerCase()}`}
            className="shrink-0 rounded-full bg-gold px-3 py-1.5 text-[11px] font-extrabold text-gold-foreground transition-transform hover:scale-[1.02]"
          >
            {sealedLevels?.includes("B2") ? "امتحان الختم B2" : `متابعة ${activeLevel.code}`}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
