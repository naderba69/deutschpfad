"use client";

import Link from "next/link";
import {TableProperties} from "lucide-react";
import {InterleavingReview} from "@/components/lesson/sections/interleaving-review";
import {reviewLevelLabel} from "@/lib/lesson/review-generator";
import {AusspracheSection} from "@/components/lesson/sections/aussprache";
import {EinfuehrungSection} from "@/components/lesson/sections/einfuehrung";
import {WortschatzSection} from "@/components/lesson/sections/wortschatz";
import {landeskundeFor} from "@/lib/session/lesson-content";
import {LandeskundeSection} from "@/components/lesson/sections/landeskunde";
import {FehlerUndTippsSection} from "@/components/lesson/sections/fehler-und-tipps";
import {HoerverstehenSection} from "@/components/lesson/sections/hoerverstehen";
import {InteraktiveUebungenSection} from "@/components/lesson/sections/interaktive-uebungen";
import {InteractionSection, MediationSection} from "@/components/lesson/sections/mediation-interaction";
import {LernkartenSection} from "@/components/lesson/sections/lernkarten";
import {LernzieleSection} from "@/components/lesson/sections/lernziele";
import {MiniTestSection} from "@/components/lesson/sections/mini-test";
import {SchreibenSection} from "@/components/lesson/sections/schreiben";
import {TheorieSection} from "@/components/lesson/sections/theorie";
import {VertiefungSection} from "@/components/lesson/sections/vertiefung";
import {LesetextSection} from "@/components/lesson/sections/lesetext";
import {OralProductionSection} from "@/components/lesson/sections/oral-production";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {StarkeVerbenTable} from "@/components/verbs/starke-verben-table";
import {useProgress} from "@/components/providers/progress-provider";
import type {Exercise, Lesson} from "@/types/lesson";

/**
 * عرض قسم واحد من الدرس حسب معرّفه. يُستعمل في وضع الخطوات وفي «عرض الكل» معاً.
 */
export function LessonSectionBody({
  id,
  lesson,
  reviewQuestions,
}: {
  id: string;
  lesson: Lesson;
  reviewQuestions: Exercise[];
}) {
  const { completedLessonsSet } = useProgress();
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "lernziele":
        return <LernzieleSection lernziele={lesson.lernziele} lessonId={lesson.id} />;
      case "einfuehrung":
        return <EinfuehrungSection einfuehrung={lesson.einfuehrung} />;
      case "review":
        return (
          <InterleavingReview
            review={reviewQuestions}
            lessonId={lesson.id}
            levelLabel={reviewLevelLabel(reviewQuestions, lesson.level)}
          />
        );
      case "wortschatz":
        return <WortschatzSection lessonId={lesson.id} explicit={lesson.wortschatz} />;
      case "landeskunde":
        return <LandeskundeSection notes={landeskundeFor(lesson.id, lesson.landeskunde)} />;
      case "theorie":
        return <TheorieSection blocks={lesson.theory} lessonId={lesson.id} />;
      case "verben":
        return (
          <Card className="overflow-hidden">
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TableProperties className="h-5 w-5 text-primary" aria-hidden="true" />
                جدول الأفعال الشاذة (مرجع سريع)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <StarkeVerbenTable compact />
            </CardContent>
          </Card>
        );
      case "hoerverstehen":
        return (
          <HoerverstehenSection
            items={lesson.listening.items}
            questions={lesson.listening.questions}
            lessonId={lesson.id}
          />
        );
      case "aussprache":
        return <AusspracheSection focus={lesson.pronunciation} />;
      case "schreiben":
        return <SchreibenSection exercises={lesson.writing} lesson={lesson} />;
      case "uebungen":
        return <InteraktiveUebungenSection bank={lesson.practiceBank} lessonId={lesson.id} />;
      case "fehler":
        return <FehlerUndTippsSection data={lesson.fehlerUndTipps} />;
      case "minitest":
        return (
          <MiniTestSection
            questions={lesson.miniTest}
            unitId={lesson.unitId}
            lessonId={lesson.id}
            flashcards={lesson.flashcards}
            lessonDone={completedLessonsSet.has(lesson.id)}
          />
        );
      case "lernkarten":
        return <LernkartenSection lessonId={lesson.id} flashcards={lesson.flashcards} />;
      case "mediation":
        return <MediationSection tasks={lesson.mediation ?? []} />;
      case "interaction":
        return <InteractionSection tasks={lesson.interaction ?? []} lessonId={lesson.id} />;
      case "lesetext":
        return lesson.reading ? (
          <LesetextSection reading={lesson.reading} lessonId={lesson.id} />
        ) : (
          <div className="rounded-2xl border border-dashed p-5 text-sm leading-relaxed text-muted-foreground">
            لا يحوي هذا الدرس نصّ قراءة مستقلاً. يمكنك تدريب القراءة على نصوص مستوى {lesson.level} من{" "}
            <Link href="/reading" className="font-bold text-primary underline underline-offset-2">
              مكتبة القراءة
            </Link>
            .
          </div>
        );
      case "oral-production":
        return <OralProductionSection tasks={lesson.oralProduction ?? []} />;
      case "vertiefung":
        return <VertiefungSection lessonId={lesson.id} />;
      default:
        return null;
    }
  };

  return renderSection(id);
}
