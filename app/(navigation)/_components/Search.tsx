"use client";
import React from "react";
import { useSearch } from "./search-context";

const Search: React.FC = () => {
  const { isOpen, setIsOpen, text, setText } = useSearch();
  const toggleSearch = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-row gap-4">
      <button className="hover:opacity-50 shrink-0" onClick={toggleSearch}>
        <img src="/search.svg" alt="Search Button Image" />
      </button>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default Search;
