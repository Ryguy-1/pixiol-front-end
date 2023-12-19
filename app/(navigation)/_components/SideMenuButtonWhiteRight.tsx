"use client";
import React from "react";
import { useSideMenu } from "./side-menu-context";

const SideMenuButtonWhiteRight: React.FC = () => {
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
        src="/box-arrow-white-right.svg"
        alt="Side Bar Expand Button Image"
      />
    </button>
  );
};

export default SideMenuButtonWhiteRight;
