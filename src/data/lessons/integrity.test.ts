/**
 * حرّاس سلامة المحتوى — يمنعون عودة أعطال اكتُشفت في تدقيق 2026-08.
 *
 * كل اختبار هنا يقابل عطلاً حقيقياً وصل إلى المتعلّم:
 *  - W: عدد فراغات القالب (___) لا يساوي عدد الإجابات ⇒ قوائم منسدلة
 *       تُعرض أمام الجملة الخطأ، وجُمل بلا حقل إدخال إطلاقاً.
 *  - علامة الفراغ الناقصة (__ بدل ___) ⇒ لا يُقسَّم القالب أصلاً.
 *  - B: خيارات مكرّرة داخل السؤال الواحد.
 *  - ترتيب الفهرس: التنقّل «السابق/التالي» يتبع ترتيب المصفوفة.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { NO_ERROR_OPTION, buildHighlightSegments } from "@/lib/lesson/error-correction-highlight";
import { reviewLevelLabel } from "@/lib/lesson/review-generator";
import { evaluateErrorCorrection } from "@/lib/lesson/exercise-engine";
import { LESSONS } from "@/data/lessons";
import { LESSON_META } from "@/data/lessons/meta";
import type { Exercise } from "@/types/lesson";

/** كل التمارين في كل الدروس، مع معرّف يسهل تتبّعه */
function allExercises(): { key: string; ex: Exercise }[] {
  const out: { key: string; ex: Exercise }[] = [];
  for (const lesson of LESSONS) {
    // lesson.writing نوعه WritingExercise، وهو مجموعة جزئية من Exercise
    // (transformation | dictation | fill-blank | ordering) فيدخل الفحوص بأمان.
    // يبقى lesson.listening خارجها لأن ListeningQuestion نوع مستقل.
    const buckets: (Exercise[] | undefined)[] = [
      lesson.practiceBank,
      lesson.miniTest,
      lesson.review,
      lesson.writing,
    ];
    for (const bucket of buckets) {
      for (const ex of bucket ?? []) out.push({ key: `${lesson.id}:${ex.id}`, ex });
    }
  }
  return out;
}

describe("سلامة تمارين الفراغات", () => {
  const fillBlanks = allExercises().filter(
    (e): e is { key: string; ex: Extract<Exercise, { type: "fill-blank" }> } =>
      e.ex.type === "fill-blank",
  );

  it("يجد تمارين fill-blank فعلاً (حماية من فحص فارغ)", () => {
    expect(fillBlanks.length).toBeGreaterThan(50);
  });

  it("عدد فراغات القالب يساوي عدد الإجابات (العطل W)", () => {
    const bad = fillBlanks
      .filter(({ ex }) => ex.template.split("___").length - 1 !== ex.blanks.length)
      .map(({ key, ex }) => `${key}: ${ex.template.split("___").length - 1} فراغ / ${ex.blanks.length} إجابة`);
    expect(bad).toEqual([]);
  });

  it("علامة الفراغ ثلاث شرطات دائماً — لا __ ولا ____", () => {
    const bad = fillBlanks
      .filter(({ ex }) => /(?<!_)__(?!_)|____/.test(ex.template))
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });

  it("الإجابة الصحيحة موجودة ضمن الخيارات", () => {
    const bad = fillBlanks
      .flatMap(({ key, ex }) =>
        ex.blanks
          .map((b, i) => (b.options && !b.options.includes(b.correct) ? `${key}#${i}` : null))
          .filter(Boolean),
      );
    expect(bad).toEqual([]);
  });

  it("لا خيارات مكرّرة داخل الفراغ الواحد (العطل B)", () => {
    const bad = fillBlanks.flatMap(({ key, ex }) =>
      ex.blanks
        .map((b, i) => (b.options && new Set(b.options).size !== b.options.length ? `${key}#${i}` : null))
        .filter(Boolean),
    );
    expect(bad).toEqual([]);
  });
});

describe("سلامة تمارين الاختيار من متعدد", () => {
  const mcqs = allExercises().filter(
    (e): e is { key: string; ex: Extract<Exercise, { type: "multiple-choice" }> } => e.ex.type === "multiple-choice",
  );

  it("يجد تمارين mcq فعلاً (حماية من فحص فارغ)", () => {
    expect(mcqs.length).toBeGreaterThan(100);
  });

  it("correctIndex ضمن نطاق الخيارات", () => {
    const bad = mcqs
      .filter(({ ex }) => ex.correctIndex < 0 || ex.correctIndex >= ex.options.length)
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });

  it("لا خيارات مكرّرة داخل السؤال الواحد (العطل B)", () => {
    const bad = mcqs
      .filter(({ ex }) => new Set(ex.options).size !== ex.options.length)
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });
});

describe("تمارين ترتيب الكلمات", () => {
  it("الرموز تُكوّن الجملة الصحيحة بالضبط (العطل A)", () => {
    // يحاكي evaluateOrdering: الحروف المفردة تُوصل بلا مسافة، وغيرها بمسافة.
    const norm = (s: string) =>
      s.toLowerCase().trim().replace(/[.,!?;:«»„“”()"'،؟؛]/g, " ").replace(/\s+/g, " ").trim();
    let checked = 0;
    const broken: string[] = [];
    for (const lesson of LESSONS) {
      for (const key of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[key] ?? []) as Exercise[]) {
          if (ex.type !== "word-ordering") continue;
          checked++;
          const tokens = ex.tokens ?? [];
          const isLetter = tokens.length > 1 && tokens.every((x) => x.trim().length === 1);
          const cut = (s: string) =>
            (isLetter ? norm(s).replace(/\s+/g, "").split("") : norm(s).split(" "))
              .filter(Boolean)
              .sort()
              .join(" ");
          if (cut(tokens.join(isLetter ? "" : " ")) !== cut(ex.correctSentence ?? ""))
            broken.push(
              `${lesson.id}:${ex.id} tokens=${JSON.stringify(tokens)} correct=${JSON.stringify(ex.correctSentence)}`,
            );
        }
      }
    }
    expect(checked).toBeGreaterThan(90);
    expect(broken, `تمارين ترتيب غير قابلة للحل:\n${broken.join("\n")}`).toEqual([]);
  });

});

describe("تمارين تصحيح الخطأ", () => {
  it("المفتاح موجود حرفياً ضمن الخيارات", () => {
    const broken: string[] = [];
    let checked = 0;
    for (const { key, ex } of allExercises()) {
      if (ex.type !== "error-correction") continue;
      checked++;
      if (!ex.options.includes(ex.correctWord)) {
        broken.push(
          `${key} — correctWord ${JSON.stringify(ex.correctWord)} ليس ضمن ${JSON.stringify(ex.options)}`,
        );
      }
    }
    expect(checked).toBeGreaterThan(130);
    expect(broken, `مفاتيح غير قابلة للاختيار:\n${broken.join("\n")}`).toEqual([]);
  });

  it("لا خيار مكرّر ولا مشتّت يُقيَّم صحيحاً", () => {
    const broken: string[] = [];
    for (const { key, ex } of allExercises()) {
      if (ex.type !== "error-correction") continue;
      // في البند الخادع يستبدل العارض المفتاحَ بخيار «لا خطأ»
      const expected = ex.isAlreadyCorrect ? NO_ERROR_OPTION : ex.correctWord;
      const shown = ex.isAlreadyCorrect
        ? [...ex.options.filter((o) => o !== ex.correctWord), NO_ERROR_OPTION]
        : ex.options;
      const seen = new Set<string>();
      for (const option of shown) {
        if (seen.has(option)) broken.push(`${key} — خيار مكرّر ${JSON.stringify(option)}`);
        seen.add(option);
      }
      // كل مشتّت يجب أن يُقيَّم خاطئاً فعلياً عبر المحرّك الحقيقي
      for (const option of shown) {
        if (option === expected) continue;
        if (evaluateErrorCorrection(ex, option).isCorrect) {
          broken.push(`${key} — المشتّت ${JSON.stringify(option)} يُقبل كإجابة صحيحة`);
        }
      }
      if (!evaluateErrorCorrection(ex, expected).isCorrect) {
        broken.push(`${key} — المفتاح نفسه يُرفض`);
      }
      // بند غير مُعلَّم isAlreadyCorrect لكن «تصحيحه» = «خطؤه»: بند خادع
      // فقد علمه، فيصير غير قابل للحل (المتعلّم يُصحّح ما ليس خطأً).
      if (!ex.isAlreadyCorrect && ex.wrongWord.trim() === ex.correctWord.trim()) {
        broken.push(`${key} — wrongWord = correctWord بلا isAlreadyCorrect`);
      }
    }
    expect(broken, `خلل في تمارين التصحيح:\n${broken.join("\n")}`).toEqual([]);
  });

});

describe("ترتيب فهرس الدروس", () => {
  it("مرتّب حسب المستوى ثم الوحدة ثم ترتيب الدرس (التنقّل يعتمد موضع المصفوفة)", () => {
    const rank = { A1: 0, A2: 1, B1: 2, B2: 3 } as const;
    const keys = LESSON_META.map((l) => [rank[l.level], l.unitId, l.order] as const);
    const sorted = [...keys].sort(
      (a, b) => a[0] - b[0] || a[1].localeCompare(b[1]) || a[2] - b[2],
    );
    expect(keys).toEqual(sorted);
  });

  it("كل درس في الفهرس له ملف محتوى فعلي", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    const missing = LESSON_META.filter((m) => !ids.has(m.id)).map((m) => m.id);
    expect(missing).toEqual([]);
  });
});

describe("كتل الشرح النظري", () => {
  const blocks = LESSONS.flatMap((l) =>
    (l.theory ?? []).map((t) => ({ key: `${l.id}:${t.id}`, t })),
  );

  it("لا تتكرر المقارنة بالعربية حرفياً بين كتلتين", () => {
    const seen = new Map<string, string[]>();
    for (const { key, t } of blocks) {
      const v = (t.comparisonWithArabic ?? "").trim();
      if (!v) continue;
      seen.set(v, [...(seen.get(v) ?? []), key]);
    }
    const dups = [...seen.entries()].filter(([, k]) => k.length > 1).map(([v, k]) => `${k.join(", ")} :: ${v.slice(0, 50)}`);
    expect(dups).toEqual([]);
  });

  it("لا يتكرر تريك الحفظ حرفياً بين كتلتين", () => {
    const seen = new Map<string, string[]>();
    for (const { key, t } of blocks) {
      const v = (t.eselsbruecke ?? "").trim();
      if (!v) continue;
      seen.set(v, [...(seen.get(v) ?? []), key]);
    }
    const dups = [...seen.entries()].filter(([, k]) => k.length > 1).map(([v, k]) => `${k.join(", ")} :: ${v.slice(0, 50)}`);
    expect(dups).toEqual([]);
  });

  it("كل كتلة تحمل مثالين على الأقل وخطأً شائعاً واحداً", () => {
    expect(blocks.length).toBeGreaterThan(80);
    const thin = blocks
      .filter(({ t }) => (t.examples?.length ?? 0) < 2 || (t.commonMistakes?.length ?? 0) < 1)
      .map(({ key }) => key);
    expect(thin).toEqual([]);
  });

  it("أعمدة الجدول تطابق عدد الخلايا في كل صف", () => {
    const broken: string[] = [];
    for (const { key, t } of blocks) {
      if (!t.table) continue;
      for (const r of t.table.rows) {
        if (r.cells.length !== t.table.columns.length - 1) broken.push(`${key} (${r.label})`);
      }
    }
    expect(broken).toEqual([]);
  });

  it("لا يوجد عنوان ألماني عام مثل Erweiterung", () => {
    const placeholders = ["erweiterung", "vertiefung", "teil 2", "extra"];
    const generic = blocks
      .filter(({ t }) => placeholders.includes((t.titleDe ?? "").trim().toLowerCase()))
      .map(({ key }) => key);
    expect(generic).toEqual([]);
  });

  it("كل بند تصحيح خطأ يُبرز موضع الخطأ فعلياً في الجملة", () => {
    const unhighlighted: string[] = [];
    for (const lesson of LESSONS) {
      for (const group of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[group] ?? []) as Exercise[]) {
          if (ex.type !== "error-correction") continue;
          // بند «خدعة»: الجملة سليمة عمداً فلا يُشطب فيها شيء
          if (ex.isAlreadyCorrect) continue;
          const segments = buildHighlightSegments(ex.wrongSentence, ex.wrongWord);
          // الجملة يجب أن تبقى سليمة حرفياً بعد التقسيم
          expect(segments.map((s) => s.text).join("")).toBe(ex.wrongSentence);
          if (!segments.some((s) => s.isTarget)) {
            unhighlighted.push(`${lesson.id}:${ex.id} wrongWord="${ex.wrongWord}"`);
          }
        }
      }
    }
    expect(unhighlighted).toEqual([]);
  });

  it("لا يكشف نص التمرين إجابته عبر وسم عربي مثل «(صحيحة!)»", () => {
    // العطب O: كان المؤلف يكتب الحكم داخل الخيار نفسه، فيختار المتعلّم
    // الإجابة دون قراءة الألمانية أصلاً. البديل البنيوي: isAlreadyCorrect.
    const verdict = /صحيحة|صحيح|خطأ|خاطئ|أحيانًا|أحياناً/;
    const leaks: string[] = [];
    for (const lesson of LESSONS) {
      for (const group of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[group] ?? []) as Exercise[]) {
          if (ex.type !== "error-correction") continue;
          const fields: [string, string][] = [
            ["wrongSentence", ex.wrongSentence],
            ["wrongWord", ex.wrongWord],
            ["correctWord", ex.correctWord],
            ...ex.options.map((o, i): [string, string] => [`options[${i}]`, o]),
          ];
          for (const [field, value] of fields) {
            if (verdict.test(value)) leaks.push(`${lesson.id}:${ex.id} ${field}="${value}"`);
          }
        }
      }
    }
    expect(leaks).toEqual([]);
  });

  it("لا تنفرد البنود الخادعة بصيغة تعليمات تكشفها", () => {
    // لو كانت جملة التعليمات مستعملة *فقط* في البنود التي جوابها «لا خطأ»،
    // لصار نصّها نفسه كاشفاً للإجابة دون قراءة الألمانية.
    const all = new Map<string, number>();
    const trick = new Map<string, number>();
    for (const { ex } of allExercises()) {
      if (ex.type !== "error-correction") continue;
      const k = ex.instructionAr ?? "";
      all.set(k, (all.get(k) ?? 0) + 1);
      if (ex.isAlreadyCorrect) trick.set(k, (trick.get(k) ?? 0) + 1);
    }
    const exclusive = [...trick.keys()].filter((k) => trick.get(k) === all.get(k));
    expect(exclusive).toEqual([]);
  });

  it("كل بند مراجعة يحمل إحالة صريحة إلى مستواه ودرسه المصدر", () => {
    // معيار المرحلة 5: على المتعلّم أن يعرف من *أين* جاء سؤال المراجعة،
    // وإلا صارت «المراجعة التراكمية» أسئلةً معلّقة بلا مرساة.
    const LESSON_IDS = new Set(LESSONS.map((l) => l.id));
    const bad: string[] = [];
    for (const lesson of LESSONS) {
      const selfIndex = LESSONS.findIndex((l) => l.id === lesson.id);
      for (const ex of (lesson.review ?? []) as Exercise[]) {
        const ins = ex.instructionAr ?? "";
        const key = `${lesson.id}:${ex.id}`;
        // (أ) وسم مستوى صريح — أو إقرار صريح بعدم وجود درس سابق
        const hasLevel = /(?<![a-zA-Z-])(A1|A2|B1|B2)(?![-\d])/.test(ins);
        if (!hasLevel) {
          bad.push(`${key} بلا وسم مستوى: "${ins}"`);
          continue;
        }
        if (/لا درس سابق/.test(ins)) continue;
        // (ب) كل بند يجب أن يسمّي درسه المصدر صراحةً بمعرّفه، وأن يكون ذلك
        // الدرس موجوداً وسابقاً لهذا الدرس. (كان هذا الشرط معطَّلاً حين كان
        // 87 بنداً يكتفي بوسم المستوى؛ أُصلحت كلها فرداً فرداً فصار مُفعَّلاً.)
        const ids = [...ins.matchAll(/\b([ab][12]-\d{2})\b/g)].map((m) => m[1]);
        if (ids.length === 0) {
          bad.push(`${key} يذكر المستوى دون تسمية الدرس المصدر: "${ins}"`);
          continue;
        }
        for (const id of ids) {
          if (!LESSON_IDS.has(id)) bad.push(`${key} يحيل إلى درس غير موجود ${id}`);
          else if (LESSONS.findIndex((l) => l.id === id) >= selfIndex)
            bad.push(`${key} يحيل إلى درس غير سابق ${id}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("تطبيق التصحيح يُنتج جملة صحيحة، بلا بقايا «...»", () => {
    // العطبان J و J-a: لا يكفي أن يكون `correctWord` بين الخيارات — يجب أن
    // يُنتج وضعُه مكان `wrongWord` جملةً سليمة. النمط «habe ... gegangen»
    // (J-a) كان يترك النقاط في الناتج، والنمط J كان يترك خطأً باقياً لأن
    // `wrongWord` أضيقُ من الخطأ الفعلي (dem بدل «dem Wetter» ⇒ «des Wetter»).
    //
    // حدّ هذا الحارس: يمسك J-a آلياً (بقايا «...» أو مقاطع مميَّزة ≠ 1)، لكنه
    // لا يستطيع الحكم على *صحّة* الجملة الناتجة نحوياً — «Trotz des Wetter»
    // سليمة بنيوياً وخاطئة لغوياً. تلك الحالات (J) فُحصت يدوياً بند بند وقت
    // الإصلاح؛ ما يحرسه الاختبار هنا هو ألّا يعود نمط النقاط ولا ينكسر
    // التمييز. أي بند تصحيح خطأ جديد يحتاج مراجعة بشرية للجملة الناتجة.
    const problems: string[] = [];
    for (const lesson of LESSONS) {
      for (const group of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[group] ?? []) as Exercise[]) {
          if (ex.type !== "error-correction" || ex.isAlreadyCorrect) continue;
          const key = `${lesson.id}:${ex.id}`;
          const segments = buildHighlightSegments(ex.wrongSentence, ex.wrongWord);
          const targets = segments.filter((s) => s.isTarget).length;
          if (targets !== 1) {
            problems.push(`${key} — عدد المقاطع المميَّزة ${targets} (المتوقَّع 1)`);
            continue;
          }
          const corrected = segments
            .map((s) => (s.isTarget ? ex.correctWord : s.text))
            .join("");
          if (/\.{3}|…/.test(corrected))
            problems.push(`${key} — الجملة بعد التصحيح تحتوي «...»: ${corrected}`);
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it("لا يعرض تمرينُ تصحيح الخطأ إجابته داخل السؤال", () => {
    // العطب K: إن ظهرت الصيغة الصحيحة في نصّ السؤال — داخل الكلمة الخاطئة
    // نفسها (خطأ «زيادة») أو في موضع آخر من الجملة — حُلّ البند بالمطابقة
    // البصرية دون معرفة القاعدة.
    const split = (s: string) => s.split(/[\s.,!?;:„""»«()؟—-]+/).filter(Boolean);
    const leaks: string[] = [];
    for (const lesson of LESSONS) {
      for (const group of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[group] ?? []) as Exercise[]) {
          if (ex.type !== "error-correction" || ex.isAlreadyCorrect) continue;
          const key = `${lesson.id}:${ex.id}`;
          // حسّاس لحالة الأحرف عمداً: حين يكون الخطأ هو الحرف الصغير نفسه
          // (lesen → Lesen) فالتطابق غير الحسّاس إنذار كاذب.
          const cw = ex.correctWord.trim();
          const ww = ex.wrongWord.trim();
          if (!cw) continue;
          if (split(ww).includes(cw))
            leaks.push(`${key} — الصيغة الصحيحة "${cw}" داخل wrongWord "${ww}"`);
          const rest = ex.wrongSentence.includes(ww)
            ? ex.wrongSentence.replace(ww, " \u0000 ")
            : ex.wrongSentence;
          if (split(rest).includes(cw))
            leaks.push(`${key} — الصيغة الصحيحة "${cw}" معروضة في الجملة`);
        }
      }
    }
    expect(leaks).toEqual([]);
  });

  it("لا يكرر تمرينُ تصحيح الخطأ خياراً بعد إضافة خيار «لا خطأ»", () => {
    const dups: string[] = [];
    for (const lesson of LESSONS) {
      for (const group of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[group] ?? []) as Exercise[]) {
          if (ex.type !== "error-correction") continue;
          // هذا ما يبنيه العارض فعلياً للبنود الخادعة
          const shown = ex.isAlreadyCorrect
            ? [...ex.options.filter((o) => o !== ex.correctWord), NO_ERROR_OPTION]
            : ex.options;
          if (new Set(shown).size !== shown.length) {
            dups.push(`${lesson.id}:${ex.id} [${shown.join(" | ")}]`);
          }
          // البند الخادع يجب أن يُبقي الإجابة الصحيحة خارج الخيارات المعروضة
          if (!ex.isAlreadyCorrect && !ex.options.includes(ex.correctWord)) {
            dups.push(`${lesson.id}:${ex.id} correctWord مفقود من الخيارات`);
          }
        }
      }
    }
    expect(dups).toEqual([]);
  });

  it("لا ينسخ الاختبار القصير بنداً من بنك التدريب حرفياً", () => {
    const norm = (s: string) =>
      s.toLowerCase().replace(/\s+/g, " ").replace(/[.,!?;:«»„""()"'،؟؛]/g, "").trim();
    /** الجملة الجوهرية التي يراها الطالب — بغض النظر عن نوع التمرين */
    const core = (ex: Exercise): string => {
      const e = ex as unknown as Record<string, unknown>;
      for (const k of [
        "questionDe",
        "correctSentence",
        "template",
        "wrongSentence",
        "sentenceDe",
        "targetSentence",
        "statementDe",
      ]) {
        const v = e[k];
        if (typeof v === "string" && v.trim()) return norm(v);
      }
      return "";
    };
    /** الإجابة الصحيحة — تمنع الإنذار الكاذب حين يتشارك بندان تعليمة عامة
     *  مثل «Welcher Satz ist korrekt?» بخيارات مختلفة تماماً */
    const answer = (ex: Exercise): string => {
      const e = ex as unknown as Record<string, unknown>;
      if (typeof e.correctIndex === "number" && Array.isArray(e.options))
        return norm((e.options as string[])[e.correctIndex] ?? "");
      if (Array.isArray(e.blanks))
        return (e.blanks as { correct: string }[]).map((b) => norm(b.correct)).join("|");
      if (typeof e.correctWord === "string") return norm(e.correctWord);
      if (typeof e.correctSentence === "string") return norm(e.correctSentence);
      return "";
    };
    const copied: string[] = [];
    for (const lesson of LESSONS) {
      const bank = new Map<string, string>();
      for (const ex of lesson.practiceBank ?? []) {
        const c = core(ex);
        if (c.length < 8) continue;
        const k = `${c}##${answer(ex)}`;
        if (!bank.has(k)) bank.set(k, ex.id);
      }
      for (const ex of lesson.miniTest ?? []) {
        const c = core(ex);
        if (c.length < 8) continue;
        const src = bank.get(`${c}##${answer(ex)}`);
        if (src) copied.push(`${lesson.id}: ${ex.id} ينسخ ${src} («${c}»)`);
      }
    }
    expect(copied).toEqual([]);
  });

  it("العنوان الألماني لكل كتلة غير مكرر داخل الدرس نفسه", () => {
    const dupes: string[] = [];
    for (const lesson of LESSONS) {
      const seen = new Map<string, string>();
      for (const t of lesson.theory ?? []) {
        const title = (t.titleDe ?? "").trim();
        if (!title) continue;
        const prev = seen.get(title);
        if (prev) dupes.push(`${lesson.id}: ${prev} ↔ ${t.id} («${title}»)`);
        else seen.set(title, t.id);
      }
    }
    expect(dupes).toEqual([]);
  });
});

describe("قسم النطق", () => {
  // العنوان يَعِد المتعلّم بأصوات بعينها («أصوات الطقس: ie، sch، وw»).
  // كانت 36 وحدة تَعِد صوتاً لا تشرحه أيُّ ملاحظة — أحياناً لا تحمله ولا
  // كلمة واحدة من كلمات القسم. الوعد المُخلَف يُفقد المتعلّم ثقته بالفهرس،
  // ويجعله يبحث عن شرحٍ غير موجود.
  const LAT = "A-Za-zÄÖÜäöüß";

  /** ذِكرٌ مثبِت للصوت — «لا يوجد tz هنا» نفيٌ لا يُحتسب شرحاً. */
  const taught = (sound: string, note: string): boolean => {
    const re = new RegExp(`(?<![${LAT}])${sound.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![${LAT}])`, "g");
    for (let m = re.exec(note); m; m = re.exec(note)) {
      if (!/لا\s*(?:يوجد\s*)?$/.test(note.slice(Math.max(0, m.index - 22), m.index))) return true;
    }
    return false;
  };

  it("كل صوت يَعِد به العنوان تشرحه ملاحظةٌ فعلاً", () => {
    const broken: string[] = [];
    let checked = 0;
    for (const lesson of LESSONS) {
      const { title, items } = lesson.pronunciation;
      const colon = title.indexOf(":");
      if (colon < 0) continue; // عنوان وصفي بلا وعد صريح
      const promised = title.slice(colon + 1).match(new RegExp(`[${LAT}]{1,8}`, "g")) ?? [];
      if (promised.length === 0) continue;
      checked++;
      const notes = items.map((i) => i.note);
      for (const sound of promised) {
        if (!notes.some((n) => taught(sound, n)))
          broken.push(`${lesson.id} — العنوان يَعِد «${sound}» ولا ملاحظة تشرحه: ${title}`);
      }
    }
    expect(checked).toBeGreaterThan(40);
    expect(broken, `عناوين نطق تَعِد بما لا تفي به:\n${broken.join("\n")}`).toEqual([]);
  });
});

describe("كل كتلة نظرية يقابلها تدريب", () => {
  /**
   * العطب: `b2-10:t2` (الأسلوب الاسمي) كان يُشرح في جدول ذي خمسة صفوف وخمسة
   * أمثلة، ثم لا يظهر منه *حرف واحد* في بنك التدريب ولا الاختبار ولا الكتابة
   * ولا البطاقات. المتعلّم يقرأ القاعدة ثم لا يُطالَب بها أبداً، فتسقط من
   * ذاكرته قبل الامتحان — والدرس يبدو مكتملاً في كل عدّ آلي.
   *
   * الحارس: لكل كتلة نظرية نستخرج «بصماتها» — الكلمات الألمانية المميِّزة من
   * صفوف الجدول وأمثلته — ونشترط أن تظهر واحدة منها على الأقل في مادة
   * التدريب. هذا فحص وجود لا فحص جودة، لكنه يمسك الانفصال التام.
   */
  const STOP = new Set([
    "der", "die", "das", "den", "dem", "des", "ein", "eine", "einen", "einem", "einer", "eines",
    "ich", "du", "er", "sie", "es", "wir", "ihr", "man", "sich", "mich", "dir", "mir",
    "ist", "sind", "war", "hat", "habe", "haben", "wird", "werden", "wurde", "sein", "kann",
    "und", "oder", "aber", "dass", "weil", "wenn", "nicht", "auch", "nur", "noch", "schon",
    "in", "im", "an", "am", "auf", "zu", "zur", "zum", "mit", "von", "vom", "für", "bei",
    "nach", "aus", "über", "unter", "vor", "als", "wie", "so", "sehr", "mehr", "gut",
  ]);

  it("لكل كتلة نظرية أثرٌ في بنك التدريب أو الاختبار أو الكتابة", () => {
    const orphans: string[] = [];
    let checked = 0;
    for (const lesson of LESSONS) {
      // مادة التدريب كاملةً: التمارين + البطاقات + قسم الأخطاء والنصائح
      const practice = JSON.stringify([
        lesson.practiceBank,
        lesson.miniTest,
        lesson.review ?? [],
        lesson.writing,
        lesson.flashcards,
        lesson.fehlerUndTipps,
      ]).toLowerCase();

      for (const t of lesson.theory) {
        checked += 1;
        // بصمات الكتلة: كلمات ألمانية ذات دلالة من الجدول والأمثلة
        const source = [
          ...(t.table?.rows ?? []).flatMap((r) => [r.label, ...r.cells]),
          ...(t.examples ?? []).map((e) => e.de),
        ].join(" ");
        const fingerprints = [
          ...new Set(
            source
              .split(/[^A-Za-zäöüßÄÖÜ-]+/)
              .map((w) => w.toLowerCase())
              .filter((w) => w.length >= 4 && !STOP.has(w)),
          ),
        ];
        if (fingerprints.length === 0) continue;
        if (!fingerprints.some((w) => practice.includes(w))) {
          orphans.push(`${lesson.id}:${t.id} «${t.titleDe}» — لا أثر لها في أي تدريب`);
        }
      }
    }
    expect(checked).toBeGreaterThan(100);
    expect(orphans, `كتل نظرية بلا تدريب:\n${orphans.join("\n")}`).toEqual([]);
  });
});

describe("عنوان المراجعة التراكمية", () => {
  /**
   * العطب: العنوان المعروض كان يُشتقّ من مستوى الدرس وحده
   * (`PREVIOUS_LEVEL_LABEL`)، فيقول «مراجعة تراكمية من A2» فوق بندٍ نصُّه
   * «مراجعة من A1» — أكثر من أربعين تناقضاً ظاهراً للمتعلّم. الإصلاح جعل
   * العنوان يُشتقّ من وسوم البنود نفسها.
   *
   * ملاحظة منهجية: فحصُ «هل يطابق العنوانُ البنودَ؟» تحصيلُ حاصل بعد الإصلاح،
   * لأن العنوان صار مشتقاً منها. لذا نثبّت هنا شيئين *قابلين* للانكسار:
   * (أ) سلوك الدالة نفسه على حالات معلومة، (ب) أن المكوّنات تستدعيها فعلاً
   * ولا تعود إلى الوسم الثابت.
   */
  it("تستخرج الدالة كل المستويات المذكورة وترتّبها", () => {
    const mk = (instructionAr: string) =>
      ({ id: "x", type: "multiple-choice", instructionAr, explanation: "", errorType: "grammar" }) as unknown as Exercise;

    // مستوى واحد ⇒ يُعرض وحده
    expect(reviewLevelLabel([mk("مراجعة من B1: أكمل")], "B2")).toBe("B1");
    // مستويان مختلطان ⇒ يُذكران معاً بترتيب تصاعدي مهما ورد ترتيبهما
    expect(reviewLevelLabel([mk("مراجعة من B1"), mk("مراجعة من A1")], "B1")).toBe("A1 وB1");
    // معرّف الدرس (a1-03) ليس وسم مستوى ⇒ لا يُلتقط وحده
    expect(reviewLevelLabel([mk("مراجعة (درس a1-03)")], "B2")).toBe("B1");
    // بلا وسم إطلاقاً ⇒ نعود إلى المستوى السابق كقيمة احتياطية
    expect(reviewLevelLabel([mk("مراجعة سريعة")], "A2")).toBe("A1");
  });

  it("مكوّنات الدرس تشتقّ العنوان ولا تستعمل الوسم الثابت", () => {
    for (const file of [
      "src/components/lesson/lesson-flow.tsx",
      "src/components/lesson/lesson-client.tsx",
    ]) {
      const src = readFileSync(resolve(process.cwd(), file), "utf8");
      expect(src, `${file} لا يستدعي reviewLevelLabel`).toMatch(/levelLabel=\{reviewLevelLabel\(/);
      expect(src, `${file} ما زال يستعمل PREVIOUS_LEVEL_LABEL للعنوان`).not.toMatch(
        /levelLabel=\{PREVIOUS_LEVEL_LABEL/,
      );
    }
  });

  it("لا يتعارض العنوان المعروض مع وسوم بنوده", () => {
    const bad: string[] = [];
    for (const lesson of LESSONS) {
      const review = (lesson.review ?? []) as Exercise[];
      if (review.length === 0) continue;
      const label = reviewLevelLabel(review, lesson.level);
      for (const ex of review) {
        const ins = ex.instructionAr ?? "";
        for (const m of ins.matchAll(/(?<![a-zA-Z-])(A1|A2|B1|B2)(?![-\d])/g)) {
          if (!label.includes(m[1]))
            bad.push(`${lesson.id}:${ex.id} البند يذكر ${m[1]} والعنوان «${label}»`);
        }
      }
    }
    expect(bad, `تعارض بين عنوان المراجعة وبنوده:\n${bad.join("\n")}`).toEqual([]);
  });
});
