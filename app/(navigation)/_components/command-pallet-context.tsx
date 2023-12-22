"use client";
import React, { useState, useContext } from "react";

export interface Command {
  name: string;
  iconPath: string;
  action: () => void;
}

const CommandPaletteContext = React.createContext<
  | {
      isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
      commands: Command[];
      setCommands: React.Dispatch<React.SetStateAction<Command[]>>;
    }
  | undefined
>(undefined);

export function CommandPaletteProvider({
  children,
  startOpen = false,
  initialCommands = [],
}: {
  children: React.ReactNode;
  startOpen?: boolean;
  initialCommands?: Command[];
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(startOpen);
  const [commands, setCommands] = useState<Command[]>(initialCommands);

  const value = {
    isOpen,
    setIsOpen,
    commands,
    setCommands,
  };

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
    </CommandPaletteContext.Provider>
  );
}

export function useCommandPalette() {
  const context = useContext(CommandPaletteContext);

  if (context === undefined) {
    throw new Error(
      "useCommandPalette must be used within a CommandPaletteProvider"
    );
  }

  return context;
}
