"use client";
import React from "react";

interface SearchContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined
);

export function SearchProvider({
  children,
  startOpen = false,
  startText = "",
}: {
  children: React.ReactNode;
  startOpen?: boolean;
  startText?: string;
}): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(startOpen);
  const [text, setText] = React.useState<string>(startText);

  return (
    <SearchContext.Provider value={{ isOpen, setIsOpen, text, setText }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch(): SearchContextType {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
