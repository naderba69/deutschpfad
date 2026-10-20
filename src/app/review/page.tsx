import {redirect} from "next/navigation";

/** المسار /review بلا صفحة خاصة: نحوّل المتعلم إلى المراجعة الأسبوعية */
export default function ReviewIndexPage() {
  redirect("/review/weekly");
}
