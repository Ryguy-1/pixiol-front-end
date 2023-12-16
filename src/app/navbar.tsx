"use client";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-2 border-b-2 border-white">
      <img
        src="/box-arrow.svg"
        alt="box-arrow"
        className="w-6 h-6 hover:cursor-pointer hover:opacity-50"
        onClick={() => console.log("box-arrow")}
      />
      <h1 className="font-sansita text-4xl">Pixiol</h1>
      <img
        src="/search.svg"
        alt="search"
        className="w-8 h-8 hover:cursor-pointer hover:opacity-50"
        onClick={() => console.log("search")}
      />
    </div>
  );
};

export default Navbar;
