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
      <img src="/box-arrow-black-left.svg" alt="Arrow Image" />
    </button>
  );
};

export default SideMenuButtonBlackLeft;
