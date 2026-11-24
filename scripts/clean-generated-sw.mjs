// يحذف ملفات Service Worker المولّدة من بناء الإنتاج قبل التطوير،
// كي لا تُخدَم وتُسجَّل بالخطأ أثناء `next dev`. يعمل فقط عبر predev.
import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve("public");
const generated = /^(sw\.js(\.map)?|workbox-[^/]+\.js)$/;

if (fs.existsSync(publicDir)) {
  for (const file of fs.readdirSync(publicDir)) {
    if (generated.test(file)) {
      fs.rmSync(path.join(publicDir, file), {force: true});
      console.log(`removed generated public/${file}`);
    }
  }
}
