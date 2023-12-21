"use client";
import React, { useEffect } from "react";
import { useCommandPalette } from "./command-pallet-context";

const CommandPallet: React.FC = () => {
  const [isOpen, setIsOpen] = useCommandPalette();

  useEffect(() => {
    const handleKeyShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener("keydown", handleKeyShortcut);
    return () => {
      document.removeEventListener("keydown", handleKeyShortcut);
    };
  }, [isOpen, setIsOpen]);

  return <div>asd</div>;
};

export default CommandPallet;
