"use client";
import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { useState } from "react";

const ClientNavWrapper = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  return (
    <>
      <NavBar toggleSideMenu={toggleSideMenu} />
      <SideMenu isOpen={isSideMenuOpen} toggleIsOpen={toggleSideMenu} />
    </>
  );
};

export default ClientNavWrapper;
