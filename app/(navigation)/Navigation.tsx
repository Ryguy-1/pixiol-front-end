"use client";
import React from "react";
import NavBar from "./_components/NavBar";
import SideMenu from "./_components/SideMenu";
import { SideMenuProvider } from "./_components/side-menu-context";

const Navigation: React.FC = () => {
  return (
    <div>
      <SideMenuProvider startOpen={false}>
        <NavBar />
        <SideMenu />
      </SideMenuProvider>
    </div>
  );
};

export default Navigation;
