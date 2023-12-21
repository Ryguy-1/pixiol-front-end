"use client";
import React from "react";

const CommandPaletteContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function CommandPaletteProvider({
  children,
  startOpen = false,
}: {
  children: React.ReactNode;
  startOpen?: boolean;
}): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(startOpen);

  return (
    <CommandPaletteContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </CommandPaletteContext.Provider>
  );
}

export function useCommandPalette(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const context = React.useContext(CommandPaletteContext);

  if (context === undefined) {
    throw new Error(
      "useCommandPalette must be used within a CommandPaletteProvider"
    );
  }

  return context;
}
