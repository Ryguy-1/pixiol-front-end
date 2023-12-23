"use client";
import React from "react";

const SearchContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function SearchProvider({
  children,
  startOpen = false,
}: {
  children: React.ReactNode;
  startOpen?: boolean;
}): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(startOpen);

  return (
    <SearchContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const context = React.useContext(SearchContext);

  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
}
