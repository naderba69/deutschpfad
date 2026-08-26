import {BookOpenText} from "lucide-react";

import {TextDe} from "@/components/shared/text-de";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import type {ReadingText} from "@/types/lesson";

export function LesenSection({reading}: {reading: ReadingText}) {
  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpenText className="h-5 w-5 text-primary" aria-hidden="true" />
            <span>{reading.titleAr}</span>
          </CardTitle>
          <p className="font-de text-sm text-muted-foreground">{reading.titleDe}</p>
        </CardHeader>
        <CardContent className="space-y-5 p-5">
          <div className="space-y-4 leading-8">
            {reading.paragraphs.map((paragraph, index) => (
              <div key={index} className="rounded-xl border border-primary/10 bg-primary/[0.025] p-4">
                <TextDe text={paragraph} />
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{reading.paragraphsAr[index]}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-3 text-base font-extrabold">مفردات النص</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {reading.glossary.map((word) => (
                <div key={word.de} className="rounded-lg border bg-muted/20 p-3">
                  <p className="font-de font-bold">{word.de}</p>
                  <p className="text-sm text-muted-foreground">{word.ar}</p>
                  {word.example && <p className="mt-1 text-xs text-primary">{word.example}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-base font-extrabold">عبارات جاهزة للتعبير</h3>
            <div className="space-y-2">
              {reading.redemittel.map((item) => (
                <div key={item.de} className="rounded-lg border border-gold/20 bg-gold/5 p-3">
                  <TextDe text={item.de} />
                  <p className="text-sm text-muted-foreground">{item.ar}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-success/20 bg-success/5 p-4">
            <h3 className="font-extrabold">سؤال النقاش</h3>
            <p className="mt-1 text-sm leading-7">{reading.discussionAr}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-extrabold">أسئلة فهم النص</h3>
            {reading.questions.map((question) => <MultipleChoiceExercise key={question.id} exercise={question} />)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
