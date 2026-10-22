/**
 * فحص ملف MP3 «قابل للتشغيل» — منطق واحد لحرّاس الأصول (حوارات · امتحانات · تحدث).
 * ملف فارغ أو Placeholder أو ملف بلا ترويسة ID3/إطار MPEG ليس صوتاً،
 * و«وجود الملف» وحده لا يكفي.
 */
import fs from "node:fs";

/** أصغر حجم معقول لمقطع صوتي حقيقي (يمنع الملفات الفارغة/العنصر النائب) */
export const MIN_MP3_BYTES = 2000;

export function isPlayableMp3(file: string): boolean {
  if (!fs.existsSync(file)) return false;
  const buf = fs.readFileSync(file);
  if (buf.length < MIN_MP3_BYTES) return false;
  const hasId3 = buf.subarray(0, 3).toString("latin1") === "ID3";
  const hasSync = buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0;
  return hasId3 || hasSync;
}
