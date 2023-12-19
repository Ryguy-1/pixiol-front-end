"use client";
import React from "react";
import { useSideMenu } from "./side-menu-context";

const SideMenuButtonBlackLeft: React.FC = () => {
  const [isOpen, setIsOpen] = useSideMenu();
  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="hover:opacity-50 shrink-0"
      onClick={() => toggleSideMenu()}
    >
      <img
        src="/box-arrow-black-left.svg"
        alt="Side Bar Expand Button Image"
        className="w-10 h-10"
      />
    </button>
  );
};

export default SideMenuButtonBlackLeft;
