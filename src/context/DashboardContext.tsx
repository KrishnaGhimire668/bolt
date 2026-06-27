"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type DashboardSection =
  | "dashboard"
  | "physical"
  | "ebook"
  | "audio"
  | "theatre"
  | "settings";

type DashboardContextType = {
  section: DashboardSection;
  setSection: (section: DashboardSection) => void;
};

const DashboardContext = createContext<
  DashboardContextType | undefined
>(undefined);

export function DashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [section, setSection] =
    useState<DashboardSection>("dashboard");

  return (
    <DashboardContext.Provider
      value={{
        section,
        setSection,
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