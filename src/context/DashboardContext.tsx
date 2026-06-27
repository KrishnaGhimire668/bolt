"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type Order = {
  id: string;
  business: string;
  customer: string;
  status: "Queued" | "Processing" | "Completed";
};

type DashboardContextType = {
  // Sidebar
  activePage: string;
  setActivePage: (page: string) => void;

  // Orders
  orders: Order[];
  addOrder: (order: Order) => void;

  // Queue Metrics
  queued: number;
  processing: number;
  completed: number;
};

const DashboardContext = createContext<
  DashboardContextType | undefined
>(undefined);

const initialOrders: Order[] = [
  {
    id: "BOOK-1001",
    business: "Physical Books",
    customer: "Krishna",
    status: "Completed",
  },
  {
    id: "EBOOK-1002",
    business: "E-Books",
    customer: "Aarav",
    status: "Processing",
  },
  {
    id: "AUDIO-1003",
    business: "Audiobooks",
    customer: "Sita",
    status: "Queued",
  },
  {
    id: "THEATRE-1004",
    business: "Theatre Tickets",
    customer: "Ram",
    status: "Completed",
  },
];

export function DashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activePage, setActivePage] =
    useState("dashboard");

  const [orders, setOrders] =
    useState<Order[]>(initialOrders);

  function addOrder(order: Order) {
    setOrders((previous) => [order, ...previous]);
  }

  // Queue counts (derived from orders)
  const queued = orders.filter(
    (o) => o.status === "Queued"
  ).length;

  const processing = orders.filter(
    (o) => o.status === "Processing"
  ).length;

  const completed = orders.filter(
    (o) => o.status === "Completed"
  ).length;

  return (
    <DashboardContext.Provider
      value={{
        activePage,
        setActivePage,
        orders,
        addOrder,
        queued,
        processing,
        completed,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboard must be used inside DashboardProvider."
    );
  }

  return context;
}