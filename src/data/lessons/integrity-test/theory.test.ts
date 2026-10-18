/**
 * integrity — كتلُ الشرح النظري — عدمُ تكرار المقارنة العربية وتريك الحفظ، ومثالا كل كتلة وخطؤُها الشائع، وتطابقُ أعمدة الجدول وخلاياه، وعدمُ تسرّب الإجابة عبر وسمٍ عربي، وإبرازُ موضع الخطأ فعلياً، وإحالةُ كل بند مراجعة إلى مستواه ودرسه، وتطبيقُ التصحيح بلا بقايا، وعدمُ انفراد البنود الخادعة بصيغة تعليماتٍ تكشفها، ونسخُ الاختبار القصير من بنك التدريب، وتكرارُ العنوان الألماني · وقسمُ النطق: كل صوتٍ يَعِد به العنوان تشرحه ملاحظةٌ فعلاً
 * فُصل من integrity.test.ts في الدفعة 111 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `describe` منقولة حرفياً بإعدادها الداخلي؛ والمشتركات في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { NO_ERROR_OPTION, buildHighlightSegments } from "@/lib/lesson/error-correction-highlight";
import { LESSONS } from "@/data/lessons";
import type { Exercise } from "@/types/lesson";
import { allExercises } from "./fixtures";

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
