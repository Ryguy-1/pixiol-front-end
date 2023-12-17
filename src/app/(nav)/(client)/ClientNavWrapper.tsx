"use client";
import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { useState } from "react";

interface ClientNavWrapperProps {
  categories: string[];
}

const ClientNavWrapper: React.FC<ClientNavWrapperProps> = ({ categories }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  return (
    <>
      <NavBar toggleSideMenu={toggleSideMenu} />
      <SideMenu
        isOpen={isSideMenuOpen}
        toggleIsOpen={toggleSideMenu}
        categories={categories}
      />
    </>
  );
};

export default ClientNavWrapper;
