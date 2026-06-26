import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 overflow-x-hidden p-4 md:p-6 xl:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}