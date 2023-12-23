import React from "react";
import NavBar from "./_components/NavBar";
import SideMenu from "./_components/SideMenu";
import { SideMenuProvider } from "./_components/side-menu-context";
import { SearchProvider } from "./_components/search-context";

const Navigation: React.FC = () => {
  return (
    <header>
      <SideMenuProvider startOpen={false}>
        <SearchProvider startOpen={false}>
          <NavBar />
          <SideMenu />
        </SearchProvider>
      </SideMenuProvider>
    </header>
  );
};

export default Navigation;
