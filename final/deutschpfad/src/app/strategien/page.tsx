import type { Metadata } from "next";

import {AFTER_B2} from "@/data/supplemental/strategies";
import {LEARNING_STRATEGIES} from "@/data/supplemental/strategies";

export const metadata: Metadata = {
  title: "استراتيجيات التعلم وماذا بعد B2",
  description:
    "دليل استراتيجيات تعلم اللغات المبنية على العلم + خارطة طريق ما بعد B2: الجامعة، العمل، الشهادات العليا، والإتقان.",
};

export default function StrategienPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          استراتيجيات التعلم
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          ست استراتيجيات مبنية على علم تعلم اللغات — طبّقها مع مكونات المنصة لتحصل على
          أفضل نتيجة من وقتك.
        </p>
      </div>

      <div className="space-y-4">
        {LEARNING_STRATEGIES.map((s) => (
          <div key={s.id} className="rounded-xl border bg-card p-5">
            <p className="text-lg font-bold">
              {s.icon} {s.title}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.summary}</p>
            <ul className="mt-3 space-y-1.5">
              {s.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-8">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight">
          ماذا بعد B2؟ 🎓
        </h2>
        <p className="mt-2 text-muted-foreground">{AFTER_B2.summary}</p>
      </div>

      <div className="space-y-4">
        {AFTER_B2.paths.map((p) => (
          <div key={p.title} className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-lg font-bold">
              {p.icon} {p.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-gold/40 bg-gold/10 p-5">
        <p className="text-lg font-bold">📚 مصادر موصى بها</p>
        <ul className="mt-2 space-y-1.5 text-sm">
          {AFTER_B2.resources.map((r, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
