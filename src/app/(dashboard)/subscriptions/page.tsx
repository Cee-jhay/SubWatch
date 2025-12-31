"use client";

import { useState } from "react";
import SubscriptionCard from "@/components/SubscriptionCard";
import AddSubscriptionModal from "@/components/AddSubscriptionModal";
import EmptyState from "@/components/EmptyState";

export default function SubscriptionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subs, setSubs] = useState([
    { merchant: "Netflix", amount: 5500, cycle: "monthly", next: "Dec 20" },
    { merchant: "Spotify", amount: 1650, cycle: "monthly", next: "Dec 15" },
  ]);

  const handleAdd = () => {
    // Refresh subscriptions list
    // TODO: Fetch from API
    window.location.reload();
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Subscriptions
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage all your active subscriptions
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
        >
          + Add Subscription
        </button>
      </div>

      {subs.length === 0 ? (
        <EmptyState
          icon="💳"
          title="No subscriptions yet"
          description="Start tracking your subscriptions by adding your first one."
          action={{
            label: "Add Subscription",
            onClick: () => setIsModalOpen(true),
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subs.map((s, i) => (
            <SubscriptionCard
              key={i}
              merchant={s.merchant}
              amount={s.amount}
              cycle={s.cycle}
              nextPayment={s.next}
            />
          ))}
        </div>
      )}

      <AddSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}


