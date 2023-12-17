import React from "react";
import SideMenuCategory from "./SideMenuCategory";

interface SideMenuProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 transition-transform duration-150 ease-in-out ${
        isOpen
          ? "w-full sm:w-96 lg:max-w-screen-sm transform translate-x-0"
          : "transform -translate-x-full"
      } h-screen bg-gray-300 rounded-r-2xl`}
    >
      <div className="flex justify-center items-center h-20 border-b-2 border-black">
        <div className="flex justify-between items-center h-full w-5/6">
          <div className="flex justify-center items-center gap-2 bg-black w-5/6 h-1/2 rounded-lg">
            <img
              src="/categories.svg"
              alt="Categories Image"
              className="w-6 h-6"
            />
            <p className="text-white font-montserrat text-lg font-medium">
              Categories
            </p>
          </div>
          <button className="hover:opacity-50" onClick={() => toggleIsOpen()}>
            <img
              src="/box-arrow-black-left.svg"
              alt="Side Bar Expand Button Image"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center h-full">
        <div className="flex flex-col gap-3 w-5/6 pt-2">
          <SideMenuCategory category="Category 1" />
          <SideMenuCategory category="Category 2" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
