"use client";
import React from "react";
import { useSideMenu } from "./side-menu-context";
import Categories from "./Categories";
import SideMenuButtonBlackLeft from "./SideMenuButtonBlackLeft";

const SideMenu: React.FC = () => {
  const [isOpen, _] = useSideMenu();

  return (
    <div
      className={`fixed top-0 left-0 flex flex-col h-screen rounded-r-2xl bg-gray-300 transition duration-150 ease-in-out z-50 ${
        isOpen ? "w-full sm:w-96 translate-x-0" : "-translate-x-full"
      }`}
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
      <Categories />
    </div>
  );
};

export default SideMenu;
