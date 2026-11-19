import { siteConfig } from "@/lib/site-config";

/** سقف طول `<title>` الملائم لنتائج البحث (البكسل يقابل ~70 حرفاً) */
export const TITLE_MAX = 70;

/** اللاحقة التي يضيفها القالب في `app/layout.tsx` */
export const TITLE_SUFFIX = ` | ${siteConfig.name}`;

/**
 * يركّب عنواناً ضمن السقف. العنوان الكامل `${de} — ${ar}` يُقصّر من العربي
 * أولاً (الألماني هو الكلمة المفتاحية)، ثم من الألماني إن لزم.
 */
export function fitTitle(de: string, ar: string, max = TITLE_MAX - TITLE_SUFFIX.length): string {
  const full = ar ? `${de} — ${ar}` : de;
  if (full.length <= max) return full;

  const room = max - de.length - " — ".length;
  if (room >= 8) return `${de} — ${ar.slice(0, room - 1)}…`;
  if (de.length <= max) return de;
  return `${de.slice(0, max - 1)}…`;
}
