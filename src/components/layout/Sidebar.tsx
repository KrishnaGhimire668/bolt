"use client";

import { navigationItems } from "@/constants/navigation";
import { useDashboard } from "@/context/DashboardContext";

export default function Sidebar() {
  const { activePage, setActivePage } = useDashboard();

  return (
    <aside className="hidden w-64 border-r border-zinc-800 bg-zinc-900 lg:block">
      <div className="p-6">
        <h2 className="text-lg font-bold text-white">
          KathaKora
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Operations Center
        </p>
      </div>

      <nav className="space-y-2 px-4">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              activePage === item.id
                ? "bg-emerald-500 text-white"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}