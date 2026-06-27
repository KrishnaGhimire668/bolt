"use client";

import { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Button from "@/components/ui/Button";

export default function OrderForm() {
  const { addOrder } = useDashboard();

  const [business, setBusiness] = useState("Physical Books");
  const [customer, setCustomer] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!customer.trim()) return;

    addOrder({
      id: `ORDER-${Date.now()}`,
      business,
      customer,
      status: "Queued",
    });

    setCustomer("");
  }

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Create Order
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-3"
      >
        <select
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
        >
          <option>Physical Books</option>
          <option>E-Books</option>
          <option>Audiobooks</option>
          <option>Theatre Tickets</option>
        </select>

        <input
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          placeholder="Customer Name"
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />

        <Button type="submit">
          Create Order
        </Button>
      </form>
    </section>
  );
}