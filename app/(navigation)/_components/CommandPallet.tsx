"use client";
import React, { useEffect, useRef } from "react";
import { useCommandPalette } from "./command-pallet-context";

const CommandPallet: React.FC = () => {
  const [isOpen, setIsOpen] = useCommandPalette();
  const menuRefLarge = useRef<HTMLDivElement>(null);
  const menuRefSmall = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRefLarge.current &&
        !menuRefLarge.current.contains(e.target as Node) &&
        menuRefSmall.current &&
        !menuRefSmall.current.contains(e.target as Node)
      ) {
        // outside both because only one rendered at a time
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyShortcut);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyShortcut);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {isOpen && (
        <>
          {/* Element for Medium Screens and Above (md:) */}
          <div className="hidden md:block">
            <div className="fixed grid place-content-center w-full h-screen bg-black bg-opacity-80 z-50">
              <div
                ref={menuRefLarge}
                className="h-[40rem] w-[40rem] bg-white rounded-lg"
              >
                <div className="h-[5rem] w-full border-2 border-b-slate-300 rounded-t-lg"></div>
              </div>
            </div>
          </div>

          {/* Element for Smaller Screens */}
          <div className="block md:hidden">
            <div className="fixed flex flex-col justify-end items-center w-full h-screen bg-black bg-opacity-80 z-50">
              <div
                ref={menuRefSmall}
                className="bottom-0 h-3/4 w-full bg-white rounded-lg shadow-lg"
              ></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CommandPallet;
