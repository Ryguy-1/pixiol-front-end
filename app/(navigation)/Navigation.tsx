import React from "react";
import NavBar from "./_components/NavBar";
import SideMenu from "./_components/SideMenu";
import { SideMenuProvider } from "./_components/side-menu-context";
import CommandPallet from "./_components/CommandPallet";
import { CommandPaletteProvider } from "./_components/command-pallet-context";

const Navigation: React.FC = () => {
  return (
    <header>
      <SideMenuProvider startOpen={false}>
        <CommandPaletteProvider startOpen={false}>
          <CommandPallet />
          <NavBar />
          <SideMenu />
        </CommandPaletteProvider>
      </SideMenuProvider>
    </header>
  );
};

export default Navigation;
