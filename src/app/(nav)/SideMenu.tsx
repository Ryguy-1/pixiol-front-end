import React from "react";

interface SideMenuProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 transition-transform duration-150 ease-in-out ${
        isOpen ? "w-1/4 transform translate-x-0" : "transform -translate-x-full"
      } h-screen bg-gray-200`}
    >
      <div className="flex justify-center"></div>
    </div>
  );
};

export default SideMenu;
