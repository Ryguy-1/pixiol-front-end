"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import SideMenu from "./sidemenu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-2 border-b-2 border-white">
      <img
        src="/box-arrow.svg"
        alt="box-arrow"
        className="w-6 h-6 hover:cursor-pointer hover:opacity-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Link href="/" className="font-sansita text-4xl">
        Pixiol
      </Link>
      <img
        src="/search.svg"
        alt="search"
        className="w-8 h-8 hover:cursor-pointer hover:opacity-50"
        onClick={() => console.log("search")}
      />
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </nav>
  );
};

export default Navbar;
