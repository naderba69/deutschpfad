/**
 * كوربوس الجمل الألمانية **السليمة** المستخرج من مادّة المنصة نفسها.
 *
 * الغرض: أي قاعدة في مقيّم الكتابة المحلي تُطلق على جملة من هذا الكوربوس
 * فهي **إيجابية كاذبة** — تتّهم كتابةً سليمة. لذلك يُعاد استخدام هذا الملف
 * حارساً دائماً في `goethe-local.test.ts`، ويُعاد قياسه عند كل دفعة.
 *
 * المصادر (كلّها محتوى مُنتَج ومُدقَّق في المستودع):
 * - دروس المستويات الأربعة: أمثلة النظرية، جداولها، الفقرات القرائية،
 *   البطاقات، الحوارات الصوتية، «الصواب» في الأخطاء الشائعة،
 *   والتمارين السليمة أصلاً (`isAlreadyCorrect`) والإملاء/الترتيب/التحويل.
 * - الردود «الأفضل» في تمارين التفاعل (بقية الخيارات مُصمَّمة خاطئة).
 */
import { LESSONS } from "@/data/lessons";
import type { Lesson } from "@/types/lesson";

export interface CorpusSentence {
  text: string;
  source: string;
}

/** جملة ألمانية فعلية: بلا حروف عربية (شروح مختلطة) وبلا رموز غير نصّية */
function hasSentenceShape(value: string): boolean {
  if (/[\u0600-\u06FF]/.test(value)) return false;
  return /[A-Za-zÄÖÜäöüß]{3,}/.test(value) && (value.match(/\s+/g) ?? []).length >= 1;
}

/** يجمع كل الجمل الألمانية السليمة في المستودع مع مصدر كل جملة */
export function germanCorpus(): CorpusSentence[] {
  const out: CorpusSentence[] = [];
  const push = (value: string | undefined, source: string) => {
    const text = (value ?? "").trim();
    if (text.length > 8 && hasSentenceShape(text)) out.push({ text, source });
  };

  for (const lesson of LESSONS as Lesson[]) {
    lesson.theory?.forEach((block, bi) => {
      block.examples?.forEach((example, ei) => push(example.de, `${lesson.id}:theory${bi}.ex${ei}`));
      block.commonMistakes?.forEach((mistake, mi) => push(mistake.right, `${lesson.id}:theory${bi}.right${mi}`));
      block.table?.rows?.forEach((row, ri) => (row.cells ?? []).forEach((cell, ci) => {
        if (/^(Sehr|Ich|Wir|Man|Es|Die|Der|Das|Sie|Er|Heute|Wer|Zunächst|Zum|Viele|Kinder|Studenten)\b/.test(cell.trim()))
          push(cell, `${lesson.id}:theory${bi}.row${ri}.${ci}`);
      }));
    });
    lesson.reading?.paragraphs?.forEach((paragraph, pi) => push(paragraph, `${lesson.id}:reading${pi}`));
    lesson.flashcards?.forEach((card, ci) => push(card.example, `${lesson.id}:card${ci}`));
    lesson.listening?.items?.forEach((item, ii) =>
      item.lines?.forEach((line, li) => push(line.de, `${lesson.id}:listen${ii}.${li}`)),
    );
    lesson.interaction?.forEach((task, ti) =>
      task.rounds?.forEach((round, ri) =>
        round.options?.filter((option) => option.best).forEach((option, oi) => push(option.de, `${lesson.id}:int${ti}.${ri}.${oi}`)),
      ),
    );

    const tasks = [
      ...(lesson.practiceBank ?? []),
      ...(lesson.miniTest ?? []),
      ...(lesson.review ?? []),
      ...(lesson.writing ?? []),
    ] as unknown as Record<string, unknown>[];
    for (const task of tasks) {
      const id = String(task.id ?? "");
      if (task.isAlreadyCorrect === true) push(String(task.wrongSentence ?? ""), `${lesson.id}:ok:${id}`);
      if (task.type === "dictation") push(String(task.audioText ?? ""), `${lesson.id}:dict:${id}`);
      if (task.type === "word-ordering") push(String(task.correctSentence ?? ""), `${lesson.id}:order:${id}`);
      // ملاحظة مقصودة: `acceptedAnswers` لا تُدرج — التصحيح يقارنها بلا حساسية
      // لحالة الأحرف، فهي مكتوبة أحياناً بحروف صغيرة بالتصميم (وليست نصّاً معلَناً).
      if (task.type === "transformation") push(String(task.sampleAnswer ?? ""), `${lesson.id}:transform:${id}`);
      if (task.type === "fill-blank") {
        const template = String(task.template ?? "");
        const blanks = (task.blanks as { correct: string }[] | undefined) ?? [];
        let filled = template;
        for (const blank of blanks) filled = filled.replace("___", blank.correct);
        if (!filled.includes("___")) push(filled, `${lesson.id}:fill:${id}`);
      }
    }
  }
  return out;
}
