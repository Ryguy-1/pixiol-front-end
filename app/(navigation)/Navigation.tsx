import React from "react";
import NavBar from "./_components/NavBar";
import SideMenu from "./_components/SideMenu";
import { SideMenuProvider } from "./_components/side-menu-context";

const Navigation: React.FC = () => {
  return (
    <header>
      <SideMenuProvider startOpen={false}>
        <NavBar />
        <SideMenu />
      </SideMenuProvider>
    </header>
  );
};

export default Navigation;
