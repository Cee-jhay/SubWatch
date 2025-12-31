import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-black">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <main className="w-full max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              SubWatch
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-2">
              Track and manage all your subscriptions
            </p>
            <p className="text-lg text-zinc-500 dark:text-zinc-500">
              Never lose track of your recurring payments again
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/register"
              className="px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg text-lg"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-50 rounded-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-lg"
            >
              Sign In
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Track Spending
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Monitor your monthly subscription costs
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Manage Subscriptions
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Add, edit, and cancel subscriptions easily
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Insights & Analytics
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Get insights into your spending patterns
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
