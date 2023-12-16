import React from "react";

interface SideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 ${
        isOpen ? "w-1/4" : ""
      } h-screen bg-gray-200`}
    >
      
    </div>
  );
};

export default SideMenu;
