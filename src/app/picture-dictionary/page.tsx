import type { Metadata } from "next";

import {PictureDictionaryClient} from "@/components/dictionary/picture-dictionary-client";

export const metadata: Metadata = {
  title: "المعجم المصوّر — DeutschPfad",
  description:
    "كلمات ألمانية A1–A2 بربط بصري (صور وإيموجي) مع النطق — تعلّم أسرع بتثبيت الصورة في الذاكرة. مجاني 100%.",
};

export default function PictureDictionaryPage() {
  return <PictureDictionaryClient />;
}
