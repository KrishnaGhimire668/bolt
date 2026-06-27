"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type DashboardContextType = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const DashboardContext = createContext<
  DashboardContextType | undefined
>(undefined);

export function DashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activePage, setActivePage] =
    useState("dashboard");

  return (
    <DashboardContext.Provider
      value={{
        activePage,
        setActivePage,
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
      "useDashboard must be used inside DashboardProvider"
    );
  }

  return context;
}