"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#000000", "#71717a", "#a1a1aa", "#d4d4d8"];

export function MonthlySpendChart({ data }: { data: any[] }) {
  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-zinc-900">
      <h3 className="text-lg font-semibold mb-4 text-black dark:text-zinc-50">
        Monthly Spend
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
          <XAxis dataKey="month" stroke="#71717a" />
          <YAxis stroke="#71717a" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#000000"
            strokeWidth={2}
            name="Spend (₦)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryBreakdown({ data }: { data: any[] }) {
  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-zinc-900">
      <h3 className="text-lg font-semibold mb-4 text-black dark:text-zinc-50">
        Category Breakdown
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PredictionGraph({ data }: { data: any[] }) {
  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-zinc-900">
      <h3 className="text-lg font-semibold mb-4 text-black dark:text-zinc-50">
        Spending Prediction
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
          <XAxis dataKey="month" stroke="#71717a" />
          <YAxis stroke="#71717a" />
          <Tooltip />
          <Legend />
          <Bar dataKey="predicted" fill="#000000" name="Predicted (₦)" />
          <Bar dataKey="actual" fill="#71717a" name="Actual (₦)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

