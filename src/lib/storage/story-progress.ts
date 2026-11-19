/** تقدم القصص التفاعلية — LocalStorage محلي لكل متصفح. */

const KEY = "dp:stories:v1";

export type StoryProgressReadResult = {ok: true; stories: string[]} | {ok: false; stories: []};

/** قراءة التقدم مع التمييز بين عدم وجود سجل وبين تعذر قراءته أو تلفه. */
export function getCompletedStoriesResult(): StoryProgressReadResult {
  if (typeof window === "undefined") return {ok: false, stories: []};
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === null) return {ok: true, stories: []};
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.every((id): id is string => typeof id === "string")) {
      return {ok: false, stories: []};
    }
    return {ok: true, stories: parsed};
  } catch {
    return {ok: false, stories: []};
  }
}



/** تسجيل إتمام قصة؛ لا يكتب فوق تقدم غير مقروء. */
export function markStoryCompleted(id: string): boolean {
  const result = getCompletedStoriesResult();
  if (!result.ok || typeof window === "undefined") return false;
  try {
    const done = new Set(result.stories);
    done.add(id);
    window.localStorage.setItem(KEY, JSON.stringify([...done]));
    return true;
  } catch {
    return false;
  }
}

/** اشتقاق الإحصاءات من قائمة قصص قرأها المستدعي بنجاح. */
export function getStoryProgressForCompleted(
  completed: string[],
  levelCounts: Record<string, number>,
): Record<string, {done: number; total: number}> {
  const out: Record<string, {done: number; total: number}> = {};
  for (const [level, total] of Object.entries(levelCounts)) {
    const levelStories = completed.filter((id) => id.startsWith(`${level.toLowerCase()}-`));
    out[level] = {done: levelStories.length, total};
  }
  return out;
}
