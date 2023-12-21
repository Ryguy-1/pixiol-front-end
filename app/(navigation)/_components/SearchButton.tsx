"use client";
import React from "react";
import { useCommandPalette } from "./command-pallet-context";

const SearchButton: React.FC = () => {
  const [isOpen, setIsOpen] = useCommandPalette();
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <button className="hover:opacity-50 shrink-0" onClick={toggleIsOpen}>
      <img src="/search.svg" alt="Search Button Image" />
    </button>
  );
};

export default SearchButton;
