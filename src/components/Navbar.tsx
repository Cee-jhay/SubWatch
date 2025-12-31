import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold text-black dark:text-zinc-50">
            SubWatch
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Dashboard
            </Link>
            <Link
              href="/subscriptions"
              className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Subscriptions
            </Link>
            <button className="rounded-md bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}


