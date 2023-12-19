import React from "react";
import Link from "next/link";
import { useSideMenu } from "./side-menu-context";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useSideMenu();

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 border-b-2 border-white h-20">
      <button
        className="hover:opacity-50 shrink-0"
        onClick={() => toggleSideMenu()}
      >
        <img
          src="/box-arrow-white-right.svg"
          alt="Side Bar Expand Button Image"
        />
      </button>
      <Link href="/" className="font-sansita text-6xl">
        Pixiol
      </Link>
      <button
        className="hover:opacity-50 shrink-0"
        onClick={() => console.log("search")}
      >
        <img src="/search.svg" alt="Search Button Image" />
      </button>
    </nav>
  );
};

export default NavBar;
