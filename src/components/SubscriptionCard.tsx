type Props = {
  merchant: string;
  amount: number;
  cycle: string;
  nextPayment: string;
};

export default function SubscriptionCard({
  merchant,
  amount,
  cycle,
  nextPayment,
}: Props) {
  return (
    <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          {merchant}
        </h3>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          ₦{amount.toLocaleString()}
          <span className="text-sm font-normal text-zinc-600 dark:text-zinc-400 ml-2">
            / {cycle}
          </span>
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Next payment: <span className="font-medium">{nextPayment}</span>
        </p>
      </div>
    </div>
  );
}


