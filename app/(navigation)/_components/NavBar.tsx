import React from "react";
import Link from "next/link";
import Search from "./Search";
import SideMenuButtonWhiteRight from "./SideMenuButtonWhiteRight";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-4 border-b-2 border-white h-20">
      <SideMenuButtonWhiteRight />
      <Link href="/" className="font-sansita text-6xl">
        Pixiol
      </Link>
      <Search />
    </nav>
  );
};

export default NavBar;
