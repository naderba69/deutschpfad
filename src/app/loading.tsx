import {Skeleton} from "@/components/ui/skeleton";

/**
 * حالة التحميل العامة للصفحات (Streaming Suspense)
 */
export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-12 sm:px-6">
      <div className="space-y-3">
        <Skeleton className="h-8 w-2/5 max-w-xs" />
        <Skeleton className="h-5 w-3/5 max-w-sm" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
