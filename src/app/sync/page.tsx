import type { Metadata } from "next";

import {SyncHandler} from "@/components/settings/sync-handler";

export const metadata: Metadata = {
  title: "المزامنة — DeutschPfad",
  description: "استعادة تقدمك من رابط أو عرض تحدي صديق — بلا خادم وبلا أي تكلفة.",
};

export default function SyncPage() {
  return <SyncHandler />;
}
