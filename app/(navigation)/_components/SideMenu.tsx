"use client";
import React, { useRef, useEffect } from "react";
import { useSideMenu } from "./side-menu-context";
import SideMenuCategoriesList from "./SideMenuCategoriesList";
import SideMenuButtonBlackLeft from "./SideMenuButtonBlackLeft";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useSideMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 flex flex-col h-screen w-full sm:w-96 z-50 rounded-r-2xl bg-gray-300 
        transition duration-150 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="shrink-0 flex justify-center items-center h-20 border-b-2 border-black">
        <div className="flex justify-between items-center h-full w-5/6">
          <div className="flex justify-center items-center gap-2 bg-black w-5/6 h-1/2 rounded-lg">
            <img
              src="/categories.svg"
              alt="Categories Image"
              className="w-5 h-5"
            />
            <p className="text-lg font-medium">Categories</p>
          </div>
          <SideMenuButtonBlackLeft />
        </div>
      </div>
      <SideMenuCategoriesList />
    </div>
  );
};

export default SideMenu;
