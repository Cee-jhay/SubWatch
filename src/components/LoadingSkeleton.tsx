export function CardSkeleton() {
  return (
    <div className="p-4 border rounded-lg animate-pulse">
      <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-2"></div>
      <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2"></div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="p-6 border rounded-lg animate-pulse">
      <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mb-4"></div>
      <div className="h-64 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
    </div>
  );
}

export function SubscriptionCardSkeleton() {
  return (
    <div className="p-4 border rounded-lg animate-pulse">
      <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mb-2"></div>
      <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3"></div>
    </div>
  );
}

