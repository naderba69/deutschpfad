import {STATS} from "@/lib/constants/site-content";

/**
 * شريط الإحصائيات السريعة
 */
export function StatsBar() {
  return (
    <section className="border-y bg-muted/40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <span className="font-de text-3xl font-extrabold text-primary sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
