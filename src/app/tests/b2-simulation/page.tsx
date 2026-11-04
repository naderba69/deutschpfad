import { redirect } from "next/navigation";

/** Keep the former URL working while consolidating B2 practice on the current, explicit route. */
export default function B2SimulationPage() {
  redirect("/tests/b2");
}
