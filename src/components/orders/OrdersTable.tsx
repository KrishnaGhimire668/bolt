"use client";

import { useDashboard } from "@/context/DashboardContext";

export default function OrdersTable() {
  const { orders } = useDashboard();

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Recent Orders
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b border-zinc-800 text-zinc-400">
            <tr>
              <th className="pb-3">Order ID</th>
              <th className="pb-3">Business</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-zinc-800/50"
              >
                <td className="py-4">{order.id}</td>
                <td>{order.business}</td>
                <td>{order.customer}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}