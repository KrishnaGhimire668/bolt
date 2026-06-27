"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import { useDashboard } from "@/context/DashboardContext";

function Placeholder({
  title,
}: {
  title: string;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-10">
      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-zinc-400">
        This section is under construction.
      </p>
    </section>
  );
}

export default function PageRenderer() {
  const { activePage } = useDashboard();

  switch (activePage) {
    case "dashboard":
      return <Dashboard />;

    case "books":
      return <Placeholder title="Books" />;

    case "orders":
      return <Placeholder title="Orders" />;

    case "customers":
      return <Placeholder title="Customers" />;

    case "automation":
      return <Placeholder title="Automation" />;

    case "analytics":
      return <Placeholder title="Analytics" />;

    case "settings":
      return <Placeholder title="Settings" />;

    default:
      return <Dashboard />;
  }
}