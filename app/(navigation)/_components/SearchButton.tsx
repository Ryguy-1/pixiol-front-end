"use client";
import React from "react";
import { useSearch } from "./search-context";

const SearchButton: React.FC = () => {
  const [searchOpen, setSearchOpen] = useSearch();
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <button className="hover:opacity-50 shrink-0" onClick={toggleSearch}>
      <img src="/search.svg" alt="Search Button Image" />
    </button>
  );
};

export default SearchButton;
