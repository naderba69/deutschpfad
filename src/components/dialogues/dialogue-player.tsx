"use client";

import * as React from "react";
import {MessagesSquare, RotateCcw} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getDialogue, type Dialogue, type DialogueNode} from "@/data/supplemental/dialogues";
;

/**
 * مشغّل سيناريوهات المحادثة المتفرعة — اختر ردك وتفرع الحوار
 */
export function DialoguePlayer({ dialogueId }: { dialogueId: string }) {
  const dialogue = getDialogue(dialogueId);
  const [currentId, setCurrentId] = React.useState(dialogue?.start ?? "");
  const [feedback, setFeedback] = React.useState<string | null>(null);
  const [round, setRound] = React.useState(0);

  if (!dialogue) return null;
  const current = dialogue.nodes[currentId];

  const choose = (choice: Dialogue["nodes"][string]["choices"][number]) => {
    setFeedback(choice.feedback ?? null);
    setTimeout(() => {
      setFeedback(null);
      setCurrentId(choice.next);
    }, 900);
  };

  const restart = () => {
    setRound((r) => r + 1);
    setCurrentId(dialogue.start);
  };

  return (
    <Card key={round} className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex flex-wrap items-center gap-2 text-lg">
          <MessagesSquare className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="font-de" dir="ltr" lang="de">
            {dialogue.titleDe}
          </span>
          <span className="font-de rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
            {dialogue.level}
          </span>
          <Button variant="ghost" size="sm" className="ms-auto" onClick={restart}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            إعادة
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <p className="rounded-lg bg-muted/30 p-2.5 text-xs text-muted-foreground">
          📍 {dialogue.situation}
        </p>

        {/* الحوار الجاري */}
        <div className="space-y-3">
          <DialogueBubble node={current} />
          {feedback && <FeedbackMsg text={feedback} />}
        </div>

        {/* الخيارات */}
        {!current.isEnd && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {current.choices.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => choose(c)}
                className="rounded-xl border bg-background p-3 text-start transition-all hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]"
              >
                <span className="font-de font-semibold" dir="ltr" lang="de">
                  {c.de}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{c.ar}</span>
              </button>
            ))}
          </div>
        )}

        {/* النهاية */}
        {current.isEnd && (
          <div className="rounded-xl border border-success/40 bg-success/10 p-4 text-center">
            <p className="font-bold text-success">✅ {current.endMessage}</p>
            <Button variant="outline" size="sm" className="mt-3" onClick={restart}>
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              إعادة السيناريو
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function DialogueBubble({ node }: { node: DialogueNode }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border bg-card p-3">
      <div>
        <p className="text-xs font-bold text-primary">{node.speaker}</p>
        <p className="font-de mt-1 font-semibold" dir="ltr" lang="de">
          {node.de}
        </p>
        <p className="mt-0.5 text-sm text-muted-foreground">{node.ar}</p>
      </div>
      <SpeakButton text={node.de} variant="outline" size="sm" />
    </div>
  );
}

function FeedbackMsg({ text }: { text: string }) {
  return (
    <p className="rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold text-gold-foreground">
      💡 {text}
    </p>
  );
}
