"use client";

import {
  MonthlySpendChart,
  CategoryBreakdown,
  PredictionGraph,
} from "@/components/Charts";

export default function DashboardPage() {
  // Sample data - replace with real data from API
  const monthlyData = [
    { month: "Jan", amount: 5500 },
    { month: "Feb", amount: 7150 },
    { month: "Mar", amount: 5500 },
    { month: "Apr", amount: 8800 },
    { month: "May", amount: 5500 },
    { month: "Dec", amount: 7150 },
  ];

  const categoryData = [
    { name: "Streaming", value: 5500 },
    { name: "Music", value: 1650 },
    { name: "Cloud", value: 2000 },
    { name: "Other", value: 1000 },
  ];

  const predictionData = [
    { month: "Jan", actual: 5500, predicted: 5500 },
    { month: "Feb", actual: 7150, predicted: 6000 },
    { month: "Mar", actual: 5500, predicted: 6500 },
    { month: "Apr", actual: 8800, predicted: 7000 },
    { month: "May", actual: 5500, predicted: 7500 },
    { month: "Dec", actual: 7150, predicted: 8000 },
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dashboard
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Overview of your subscription spending
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            Total Monthly Spend
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            ₦7,150
          </h2>
        </div>

        <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            Active Subscriptions
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">2</h2>
        </div>

        <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            Upcoming Renewals
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">2</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MonthlySpendChart data={monthlyData} />
        <CategoryBreakdown data={categoryData} />
      </div>

      <div className="mb-6">
        <PredictionGraph data={predictionData} />
      </div>
    </div>
  );
}


