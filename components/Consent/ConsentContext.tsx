"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useConsent } from "./useConsent";

type ConsentApi = ReturnType<typeof useConsent>;

const ConsentContext = createContext<ConsentApi | null>(null);

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const value = useConsent();
  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
};

export const useConsentContext = () => {
  const value = useContext(ConsentContext);
  if (!value) {
    throw new Error("useConsentContext must be used within ConsentProvider");
  }
  return value;
};
