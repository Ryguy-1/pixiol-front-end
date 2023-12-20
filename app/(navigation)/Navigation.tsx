import React from "react";
import NavBar from "./_components/NavBar";
import SideMenu from "./_components/SideMenu";
import { SideMenuProvider } from "./_components/side-menu-context";
import ClientKBarProvider from "./_components/ClientKBarProvider";

const Navigation: React.FC = () => {
  return (
    <header>
      <ClientKBarProvider>
        <SideMenuProvider startOpen={false}>
          <NavBar />
          <SideMenu />
        </SideMenuProvider>
      </ClientKBarProvider>
    </header>
  );
};

export default Navigation;
