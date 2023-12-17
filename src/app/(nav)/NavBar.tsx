import React from "react";
import Link from "next/link";

interface NavBarProps {
  toggleSideMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleSideMenu }) => {
  return (
    <nav className="flex justify-between items-center px-4 border-b-2 border-white h-20">
      <button className="hover:opacity-50" onClick={() => toggleSideMenu()}>
        <img
          src="/box-arrow-white-right.svg"
          alt="Side Bar Expand Button Image"
          className="w-full h-full"
        />
      </button>
      <Link href="/" className="font-sansita text-6xl">
        Pixiol
      </Link>
      <button
        className="hover:opacity-50"
        onClick={() => console.log("search")}
      >
        <img
          src="/search.svg"
          alt="Search Button Image"
          className="w-full h-full"
        />
      </button>
    </nav>
  );
};

export default NavBar;
